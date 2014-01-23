jQuery.sap.require("sap.ca.scfld.md.controller.BaseDetailController");

jQuery.sap.require("sap.ca.ui.images.images");
//
sap.ca.scfld.md.controller.BaseDetailController.extend("sap.ca.scfld.md.view.empty", {

	onInit : function() {
		var oImage = this.byId("flower");
		if (oImage){
			oImage.setSrc(sap.ca.ui.images.images.Flower);
		}
		var sLink = document.createElement('link');
		sLink.setAttribute('rel', 'stylesheet');
		sLink.setAttribute('type', 'text/css');
		sLink.setAttribute('href', 'resources/sap/ca/scfld/md/css/flower.css');
		sLink.setAttribute('id', 'emptyView_stylesheet');
		document.getElementsByTagName('head')[0].appendChild(sLink);

		this.getView().addEventDelegate(this, this);

		this.oRouter.attachRouteMatched(function(oEvent) {
			if (oEvent.getParameter("name") === "noData") {
				var oArgument = oEvent.getParameter("arguments");

				this.setTitleAndMessage(oArgument.viewTitle, oArgument.languageKey);
			}
		}, this);

		
	},

	onBeforeShow : function(oEvent) {
		this.setTitleAndMessage(oEvent.data.viewTitle, oEvent.data.languageKey);
	},
	
	setTitleAndMessage : function (sViewTitle, sLanguageKey) {
	// set view title
		var oPage = this.byId("sap.ca.scfld.md.view.empty");
		var sTitle= this.oApplicationFacade.oApplicationImplementation.getResourceBundle().getText(sViewTitle);
		if (!sTitle || sTitle === sViewTitle) {
			//fallback: show message also as title
			sTitle = this.oApplicationFacade.oApplicationImplementation.getUiLibResourceBundle().getText("NO_ITEMS_AVAILABLE");
		};
		oPage.setTitle(sTitle);
		
		// set message text
		var oLabel = this.byId("emptyLabel");				
		var sMessage = this.oApplicationFacade.oApplicationImplementation.getUiLibResourceBundle().getText(sLanguageKey);
		if (!sMessage || sMessage === sLanguageKey) {
			//fallback
			sMessage = this.oApplicationFacade.oApplicationImplementation.getUiLibResourceBundle().getText("NO_ITEMS_AVAILABLE");
		};
		oLabel.setText(sMessage);
	}

});
