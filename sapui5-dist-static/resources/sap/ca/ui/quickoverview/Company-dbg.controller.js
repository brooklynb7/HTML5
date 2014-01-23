sap.ui.controller("sap.ca.ui.quickoverview.Company", {
	
	onTapSMS: function(oEvent) {
		sap.m.URLHelper.triggerSms(this.byId("qvMainContactMobile").getText());
	},

	onTapPhone: function(oEvent) {
		sap.m.URLHelper.triggerTel(oEvent.getSource().getText());
		//this.QuickViewHandler.navigateTo();
		
	},

	onTapEmail: function(oEvent) {
		//
		var sSubject = "";
		var oModel = this.getView().getModel();
		if (oModel && oModel.getData()) { 
			sSubject = (oModel.getData().maincontactemailsubj) ? oModel.getData().maincontactemailsubj : "";
		}
		sap.m.URLHelper.triggerEmail(oEvent.getSource().getText(), sSubject);
	}, 
	
	
	onBeforeRendering : function () {
		
		var oContactSMS = this.byId("qvMainContactSMS");
		if (oContactSMS)
			{
				oContactSMS.setVisible(this.byId("qvMainContactMobile").getText() !== "");
			}

	}	

});