sap.ui.jsview("view.Area_a1", {
	createContent : function(oController) {
		var that = this,
			oEventBus = sap.ui.getCore().getEventBus();
		
		this.popover = new sap.m.Popover({
			title: "Popover",
			content: [
				new sap.m.List({
					items: [
						new sap.m.StandardListItem({ title: "Item A"}),
						new sap.m.StandardListItem({ title: "Item B"}),
						new sap.m.StandardListItem({ title: "Item C"})
					]
				})
			]
		});
		
		var popupButton = new sap.m.Button({
			text: "Open Popup",
			press: function() {
				that.popover.openBy(this);
			}
		});
		popupButton.addStyleClass("content");
		
		var mToastButton = new sap.m.Button({
			text : "Open MessageToast",
			press : function() {
				jQuery.sap.require("sap.m.MessageToast");
				sap.m.MessageToast.show("I am a sap.m.MessageToast");
			}
		});
		mToastButton.addStyleClass("content");
		
		var homeButton = new sap.m.Button({
			text : "Back to Home Page",
			press : function() {
				// this will jump to the first entry in the browser history
				oEventBus.publish("nav", "back", {home: true});
			}
		});
		homeButton.addStyleClass("content");
		
		
		
		this.page = new sap.m.Page({
			title : "Area A1",
			icon : "{img>/icon}",
			showNavButton : true,
			navButtonText : "Area A",
			navButtonPress : function() {
				//one step back navigation through history
				oEventBus.publish("nav", "back");
			},
			content : [
				new sap.m.VBox({ 
					items: [
						popupButton,
						new sap.m.Text("d_a1_p", {
							text : "From this page you can open a Popover. If you press the back button while the popover is open the previous page will be shown AND the popover will be closed."
						}),
						mToastButton,
						new sap.m.Text("d_a1_m", {
							text : "From this page you can open a MessageToast. If you press the back button while the message toast is open the previous page will be shown AND the message toast will be closed."
						}),
						homeButton,
						new sap.m.Text("d_a1_h", {
							text : "You can also navigate back all the way to the home page"
						})
					]
				})
			]
		});
		
		return this.page;
	}
});