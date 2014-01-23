// This is the second level page in master area.
// The list mode needs to set according to the type of the device (see point 1). In phone, it triggers another page navigation 
// in master area (master and detail area are the same instance of sap.m.NavContainer), while in tablet it triggers
// a navigation in detail area.

// What also needs to be taken into consideration is: the tapping event listener (see point 2).
// In phone, since the list mode is none, the tap event on list item itself (see point 2 in mailInbox.controller.js) is fired when 
// tapping on a list item. While in tablet, the select event (see point 2) is fired on the list itself because the list is in SingleSelectMode.

sap.ui.jsview("view.inbox.MailInbox", {
	getControllerName: function() {
		return "view.inbox.MailInbox";
	},
	
	onBeforeFirstShow: function(oEvent){
		this.getController().onBeforeFirstShow(oEvent);
	},
	
	createContent: function(oController){
		this.oList = new sap.m.List({
			showUnread: true,
			//POINT 1
			mode: jQuery.device.is.phone ? sap.m.ListMode.None : sap.m.ListMode.SingleSelectMaster,
			//POINT 2
			select: [oController.onListSelect, oController]
		});
		
		this.page = new sap.m.Page({
			title: "ALL",
			icon: "{img>/icon/UI5}",
			navButtonText: "Home",
			showNavButton: true,
			navButtonPress: [oController.onNavButtonTap, oController],
			content: [this.oList]
		});
		
		// done
		return this.page;
	}
});