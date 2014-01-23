sap.ui.jsview("todolist.groups", {

	getControllerName : function() {
		return "todolist.groups";
	},

	createContent : function(oController) {

		return new sap.m.Popover({
			id : "groupsPopover",
			placement : sap.m.PlacementType.Bottom,
			showHeader : false,
			content : [new sap.m.ScrollContainer({
				vertical : true,
				horizontal : false,
				content : [new sap.m.List({
					id : "groupsList",
					inset : false,
					items : {
						path : "/",
						template : new sap.m.StandardListItem({
							title : "{title}",
							type : "Navigation",
							press : function() {
								var record = this.getBindingContext().getObject();
								oController.showList(record);
							}
						})
					}
				})]
			})]
		});

	}

});
