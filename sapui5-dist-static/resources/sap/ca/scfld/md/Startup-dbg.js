jQuery.sap.declare("sap.ca.scfld.md.Startup");

sap.ca.scfld.md.Startup = {};
sap.ca.scfld.md.Startup.init = function(sIdentity, oMainCtr) {

//	// local resources
//	sap.ui.localResources("view");

	var fStartApplication = function() {
		var oBody = oMainCtr.byId("fioriContent");
		if (oBody) {
			// oBody.setAttribute("id", "content");
			jQuery.sap.require("sap.ca.scfld.md.app.Application");
			var app = new sap.ca.scfld.md.app.Application({
				identity : sIdentity,
                component: oMainCtr.getView().getViewData().component,
				oViewHook : oBody.getId()
			});
			app.setIdentity(sIdentity);
			return true;
		}
		return false;
	};
	if (!fStartApplication()) {
		jQuery(fStartApplication);
	}

	/**
	 * Hide Master SplitApp page when needed. This could be changed if UI5 team
	 * provide a way to hide the master
	 */
	var sStyle = "<style> "
			+ ".sapMSplitAppFullscreen > .sapMSplitContainerMaster { position: fixed; height: 0; left: -10000px; width: 0; } "
			+ ".sapMSplitAppFullscreen > .sapMSplitContainerDetail .sapMSplitContainerMasterBtn { display: none; } "
			+ "</style>";
	jQuery("head").append(sStyle);
};
