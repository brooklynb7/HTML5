sap.ui.jsview("view.Area_a", {
	createContent : function(oController) {
		var oEventBus = sap.ui.getCore().getEventBus();
		
		this.page = new sap.m.Page({
			title : "Area A",
			icon : "{img>/icon}",
			showNavButton : true,
			navButtonText : "Home",
			navButtonPress : function() {
				//one step back through the history
				oEventBus.publish("nav", "back");
			},
			content : [
				new sap.m.List({
					items : [
						new sap.m.StandardListItem({
							title : "Area A1",
							type : sap.m.ListType.Active,
							press : function() {
								// publish event to trigger navigation to next page
								oEventBus.publish("nav", "to", {
									id : "Area_a1"
								});
							}
						}),
						new sap.m.StandardListItem({
							title : "Area A2",
							type : sap.m.ListType.Active,
							press : function() {
								// publish event to trigger navigation to next page
								oEventBus.publish("nav", "to", {
									id : "Area_a2"
								});
							}
						})
		 			]
				}),
				new sap.m.Text("d_a", {
					text : "From here you can drill deeper into the navigation hierarchy"
				})
			]
		});
		
		return this.page;
	}
});