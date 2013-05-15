sap.ui.controller("view.inbox.Home", {
	onListItemTap: function(oEvent){
		var sTitle = oEvent.oSource.getTitle(),
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

	onFooterButtonTap: function(oEvent){
		var sId = oEvent.oSource.getId(), sMode;
		if(sId === "showHideButton"){
			sMode = sap.m.SplitAppMode.ShowHideMode;
		}else if(sId === "stretchButton"){
			sMode = sap.m.SplitAppMode.StretchCompressMode;
		}else if(sId === "popoverButton"){
			sMode = sap.m.SplitAppMode.PopoverMode;
		}
		
		sap.ui.getCore().getEventBus().publish("app", "mode", {mode: sMode});
	}
});