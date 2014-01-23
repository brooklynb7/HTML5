sap.ui.jsview("view.Area_b", {
	createContent : function(oController) {
		var that = this,
			oEventBus = sap.ui.getCore().getEventBus();
		this.input =  new sap.m.Input("input", {
			value : "Hello from B"
		});
		
		this.page = new sap.m.Page({
			title : "Area B",
			icon : "{img>/icon}",
			showNavButton : true,
			navButtonText : "Home",
			navButtonPress : function() {
				//one step back navigation through history
				oEventBus.publish("nav", "back");
			},
			content : [ 
				new sap.m.List({
					items : [
						new sap.m.StandardListItem({
							title : "Area B1",
							type : sap.m.ListType.Active,
							press : function() {
								// publish event to trigger navigation to next page
								oEventBus.publish("nav", "to", {
									id : "Area_b1",
									data : {
										message : that.input.getValue()
									}
								});
							}
						}),
						new sap.m.InputListItem({
							label : "Message",
							content : this.input
						})
					]
				}),
				new sap.m.Text("d_b", {
					text : "The message entered in this page will be send to Area B1 when navigating forward."
				})
			]
		});
		
		return this.page;
	}
});
