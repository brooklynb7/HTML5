sap.ui.jsview("view.Area_a2", {
	createContent : function(oController) {
		var that = this,
			oEventBus = sap.ui.getCore().getEventBus();
		this.dialog = new sap.m.Dialog({
			title : "Dialog",
			type : sap.m.DialogType.Message,
			leftButton : new sap.m.Button({
				text : "Cancel",
				press : function() {
					that.dialog.close();
				}
			}),
			rightButton : new sap.m.Button({
				text : "Submit",
				type: sap.m.ButtonType.Accept,
				press : function() {
					that.dialog.close();
				}
			}),
			content : [ 
				new sap.m.Text({text:"Do you want to leave this page now?"})
			],
			afterClose: function(event){
				var oButton = event.getParameter("origin");
				if(oButton){
					//if dialog is closed by tapping one of the buttons, 
					//we need to popup the history state for dialog from history stack
					if(oButton.getId() === this.getRightButton().getId()){
						//if right button is tapped, back 2 steps
						oEventBus.publish("nav", "back", {step: 2});
					}else{
						//left button, back 1 step
						oEventBus.publish("nav", "back");
					}
				}else{
					//nothing to be done here because the dialog history state is already popped out by tapping the physical back button
				}
			}
		});
		
		var button = new sap.m.Button({
			text : "Open Dialog",
			press : function() {
				//add a virtual history for the opened dialog
				oEventBus.publish("nav", "virtual");
				that.dialog.open();
			}
		});
		button.addStyleClass("content");
		
		this.page = new sap.m.Page({
			title : "Area A2",
			icon : "{img>/icon}",
			showNavButton : true,
			navButtonText : "Area A",
			navButtonPress : function() {
				//one step back through history
				oEventBus.publish("nav", "back");
			},
			content: [
				button,
				new sap.m.Text("d_a2", {
					text : "From this page you can open a Dialog. In the dialog choose 'Cancel' to close the dialog without triggering a navigation. Or choose 'Submit' to navigate back to Area A. Pressing the \'Back\' button will close the dialog."
				})
			]
		});
		
		return this.page;
	}
});