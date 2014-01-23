sap.ui.jsview("view.Home", {

	createContent : function(oController) {
		var oEventBus = sap.ui.getCore().getEventBus();
		this.page = new sap.m.Page({
			title : "Home",
			icon : "{img>/icon}",
			content : [
				new sap.m.List({
					items : [ 
						new sap.m.StandardListItem({
							title : "Area A",
							type : sap.m.ListType.Active,
							press : function() {
								// publish event to trigger navigation to next page
								oEventBus.publish("nav", "to", {
									id : "Area_a"
								});
							}
						}),
						new sap.m.StandardListItem({
							title : "Area B", 
							type : sap.m.ListType.Active,
							press : function() {
								// publish event to trigger navigation to next page
								oEventBus.publish("nav", "to", {
									id : "Area_b"
								});
							}
						})
					]
				}),
				new sap.m.VBox({
					items : [
						new sap.m.Text("d_h", {
							text : 'This app shows how to implement navigation along this abstract model.'
						}),
						new sap.m.Image({ 
							src : "{img>/model}",
							densityAware : false
						})
					]
				})
			]
		});

		return this.page;
	}
});
