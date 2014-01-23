sap.ui.jsview("view.Area_b1", {
	onBeforeShow : function(evt) {
		if (evt.data.message) {
			this.message.setText("Message from Area B: '" + evt.data.message + "'");
		} 
	},
	
	createContent : function(oController) {
		var oEventBus = sap.ui.getCore().getEventBus();
		this.message = new sap.m.Text({ 
			text : "-"
		});
		this.message.addStyleClass("content");
		
		this.page = new sap.m.Page({
			title : "Area B1",
			icon : "{img>/icon}",
			showNavButton : true,
			navButtonText : "Area B",
			navButtonPress : function() {
				//one step back navigation through history
				oEventBus.publish("nav", "back");
			},
			content : [
				this.message
			]
		});
		
		return this.page;
	}
});
