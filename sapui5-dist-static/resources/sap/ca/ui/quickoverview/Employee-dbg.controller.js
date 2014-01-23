jQuery.sap.require("sap.ca.ui.quickoverview.CompanyLaunch");

sap.ui.controller("sap.ca.ui.quickoverview.Employee", {
	
	onTapSMS: function(oEvent) {
		sap.m.URLHelper.triggerSms(this.byId("qvContactMobile").getText());
	},

	onTapPhone: function(oEvent) {
		sap.m.URLHelper.triggerTel(oEvent.getSource().getText());
		
	},

	onTapEmail: function(oEvent) {
		//
		var sSubject = "";
		var oModel = this.getView().getModel();
		if (oModel && oModel.getData()) { 
			sSubject = (oModel.getData().contactemailsubj) ? oModel.getData().contactemailsubj : "";
		}
		sap.m.URLHelper.triggerEmail(oEvent.getSource().getText(), sSubject);
	},
	
	//trigger navigation to company
	onCompanyPress: function(oEvent) {

		var oCompData = this.getView().getModel().getData().companycard;
		if(!oCompData){	return;	}
		
		var oCompModel = new sap.ui.model.json.JSONModel(oCompData);

		var oQVConfig = {
				popoverHeight : "34rem",
				title : oCompData.title,
				headerTitle : oCompData.companyname,
				headerSubTitle : oCompData.maincontactname,
				headerImgURL : oCompData.imgurl,
				subViewName : "sap.ca.ui.quickoverview.Company",
				oModel : oCompModel,
				beforeExtNav : oCompData.beforeExtNav 
			};

		this.QuickViewHandler.navigateTo(oQVConfig);
	},
	
	onBeforeRendering : function () {
		
		var oCompLink = this.byId("qvCompLink");
		var oCompData = this.getView().getModel().getData().companycard;
		var bCompData = (oCompData) ? true : false;
		oCompLink.setEnabled(bCompData);
		
		var oContactSMS = this.byId("qvContactSMS");
		if (oContactSMS)
			{
				oContactSMS.setVisible(this.byId("qvContactMobile").getText() !== "");
			}
		
		
	}

});