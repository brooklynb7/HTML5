jQuery.sap.require("util.Formatter");

sap.ui.jsview("view.Cart", {

	getControllerName: function() {
		return "view.Cart";
	},
	
	createContent : function(oCon) {
		
		// TODO: remove this global references
		 jQuery.sap.declare("app.ref.CartView"); 
		 app.ref.CartView = this;

		// create entry list
		this.entryList = new sap.m.List({
			"delete" : [ oCon.entryListDelete, oCon ],
			noDataText : "Your cart is empty",
			mode : {
				path : "ui>/inDelete",
				formatter : function(inDelete) { 
					return (inDelete) ? sap.m.ListMode.Delete : sap.m.ListMode.None; 
				}
			},
		}); 
		
		// bind entry list
		this.entryList.bindAggregation("items", {
			path : "/entries", 
			sorter : new sap.ui.model.Sorter("name", false),
			template : new sap.m.StandardListItem({
				title : "{name}",
				icon : "{img}",
				iconInset : false,
				iconDensityAware : false,
				type : {
					path : "ui>/inDelete",
					formatter : function(inDelete) { 
						return (inDelete) ? sap.m.ListType.Inactive : sap.m.ListType.Navigation; 
					}
				},
				description : "{productVendor}",
				info : {
					path : "price", 
					formatter : util.Formatter.price
				},
				customData: [
					new sap.ui.core.CustomData({
						key: "productId",
						value: "{productId}" 
					}),
				],
				tap : [ oCon.entryListTap, oCon ]
			})
		});
		
		// create buttons
		this.editButton = new sap.m.Button({
			text : "Edit",
			enabled : false,
			visible : "{ui>/notInDelete}",
			tap : [ oCon.editOrDoneButtonTap, oCon ]
		});
		this.doneButton = new sap.m.Button({
			text : "Done",
			type : sap.m.ButtonType.Accept,
			enabled : true,
			visible : "{ui>/inDelete}",
			tap : [ oCon.editOrDoneButtonTap, oCon ]
		});
		this.proceedButton = new sap.m.Button({
			text : "Proceed",
			enabled : false,
			visible : "{ui>/notInDelete}",
			tap : [ oCon.proceedButtonTap, oCon ]
		});
		
		// create page
		this.totalLabel = new sap.m.Label({
			text : {
				path : "/totalPrice", 
				formatter : function(value) { return "Total: " + util.Formatter.price(value); }
			}
		});
		this.page = new sap.m.Page({
			title : "Your Cart",
			icon : "{img>/icon/ui5}",
			showNavButton : "{ui>/notInDelete}",
			navButtonTap : [ oCon.navButtonTap, oCon ],
			footer: new sap.m.Bar({
				contentLeft : [
					this.totalLabel
				],
				contentRight : [
					this.editButton,
					this.doneButton,
					this.proceedButton
				]
			}),    
			content : [
				this.entryList
			] 
		});
		
		return this.page;
	}
});