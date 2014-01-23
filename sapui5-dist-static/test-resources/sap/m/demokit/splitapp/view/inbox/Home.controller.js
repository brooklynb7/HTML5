sap.ui.controller("view.inbox.Home", {
	onListItemTap: function(oEvent){
		var sTitle = oEvent.getSource().getTitle(),
			sFilterProperty;
		if(sTitle === "Unread"){
			sFilterProperty = "unread";
		}else if(sTitle === "Important"){
			sFilterProperty = "important";
		}
		
		sap.ui.getCore().getEventBus().publish("nav", "to", {
			viewName: "view.inbox.MailInbox",
			viewId: "view.inbox." + sTitle,
			data: {
				filterProperty: sFilterProperty,
				title: sTitle
			}
		});
	},

	onSelectChange: function(oEvent){
		var sMode = oEvent.getParameter("selectedItem").getText();
		
		if(jQuery.device.is.landscape && sMode !== "HideMode") {
			jQuery.sap.require("sap.m.MessageToast");
			sap.m.MessageToast.show("Change to portrait orientation to compare the different modes");
		}
		
		sap.ui.getCore().getEventBus().publish("app", "mode", {mode: sMode});
	}
});