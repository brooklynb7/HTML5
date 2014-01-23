jQuery.sap.require("util.Formatter");

sap.ui.jsview("view.Home", {

	getControllerName: function() {
		return "view.Home";
	},
	
	createContent : function(oCon) {
		
		this.page = new sap.m.Page({
			title : "Fruits",
			icon : "{img>/icon/ui5}",
			content : [],
		});
		
		// create list
		this.list = new sap.m.List({
			mode: "{local>/mode}",
			includeItemInSelection : "{local>/inBatch}",
			select : [ oCon.listSelect, oCon ],
			"delete" : [ oCon.listDelete, oCon ]
		});
		this.list.bindAggregation("items", {
			path: "/fruits",
			sorter : new sap.ui.model.Sorter("name", false),
			template : new sap.m.StandardListItem({
				title : "{name}",
				icon : "{imgS}",
				iconInset : false,
				iconDensityAware : false,
				info : "{state}",
				infoState : {
					path : "state",
					formatter : util.Formatter.state
				},
				description : {
					path : "price",
					formatter : util.Formatter.price
				},
				press : [ oCon.itemPress, oCon ],
				type : {
					path : "local>/inEdit",
					formatter : function(inEdit) {
						return (inEdit) ? sap.m.ListType.Inactive : sap.m.ListType.Active;
					}
				}
			})
		});
		
		// create create dialog
		this.inputCreate = sap.ui.xmlview("inputCreate", "view.Input");
		this.createDialog = new sap.m.Dialog({
			title : "New Fruit",
			stretch: jQuery.device.is.phone,
			content : [
				this.inputCreate
			],
			leftButton : new sap.m.Button({
				text : "Done",
				press : [ oCon.createDialogConfirm, oCon ]
			}),
			rightButton : new sap.m.Button({
				text : "Cancel",
				press : [ oCon.createDialogCancel, oCon ]
			})
		});
		
		// create buttons
		this.createButton = new sap.m.Button({
			icon : "sap-icon://add",
			visible : {
				path : "local>/inEdit",
				formatter : function(inEdit) { return !inEdit; }
			},
			press : [ oCon.createButtonPress, oCon ]
		});
		this.editQuickDelButton = new sap.m.Button({
			text : {
				path : "local>/inEdit",
				formatter : function(inEdit) { return (inEdit) ? "Done" : "Edit"; }
			},
			type : {
				path : "local>/inEdit",
				formatter : function(inEdit) { return (inEdit) ? sap.m.ButtonType.Accept : sap.m.ButtonType.Default; }
			},
			press : [ oCon.editQuickDelButtonPress, oCon ]
		});
		this.editBatchButton = new sap.m.Button({
			text : {
				path : "local>/inEdit",
				formatter : function(inEdit) { return (inEdit) ? "Done" : "Edit"; }
			},
			type : {
				path : "local>/inEdit",
				formatter : function(inEdit) { return (inEdit) ? sap.m.ButtonType.Accept : sap.m.ButtonType.Default; }
			},
			press : [ oCon.editBatchButtonPress, oCon ]
		});
		this.washButton = new sap.m.Button({
			icon : "sap-icon://washing-machine",
			enabled : false,
			text : "Wash",
			visible : "{local>/inBatch}",
			press : [ oCon.washButtonPress, oCon ]
		});
		this.batchDeleteButton = new sap.m.Button({
			icon : "sap-icon://delete",
			enabled : false,
			visible : "{local>/inBatch}",
			press : [ oCon.batchDeleteButtonPress, oCon ]
		});
		
		// place buttons depending on the mode
		this.page.addContent(this.list);
		mode2InitHomeMap = {
			"std" : function() {
				this.page.addHeaderContent(this.createButton);
			},
			"batch" : function() {
				this.page.setFooter(new sap.m.Bar({
					contentLeft: [this.createButton, this.batchDeleteButton, this.washButton ],
					contentRight: [ this.editBatchButton ]
				}));
				this.batchDeleteButton.setVisible(false);
				this.washButton.setVisible(false);
			},
			"quickDel" : function() {
				this.page.setFooter(new sap.m.Bar({
					contentLeft: [ this.createButton ],
					contentRight: [ this.editQuickDelButton ]
				}));
			},
		};
		var mode = sap.ui.getCore().getModel("config").getData().mode;
		jQuery.proxy(mode2InitHomeMap[mode], this)();
		
		return this.page;
	}
});