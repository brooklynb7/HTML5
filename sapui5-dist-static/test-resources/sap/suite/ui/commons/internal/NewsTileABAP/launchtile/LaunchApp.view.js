jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.suite.ui.commons.LaunchTile");
jQuery.sap.require("launchtile.LaunchTileUtils");

sap.ui.jsview("launchtile.LaunchApp", {

	getControllerName : function() {

		return "launchtile.LaunchApp";
	},

	 
	createContent : function(oController) {

		var sTileTitle = launchtile.LaunchTileUtils.getTileTitleConfig(this);
		var oTitleIcon = launchtile.LaunchTileUtils.getTileIconConfig(this);		
		var sSemanticObjLink = launchtile.LaunchTileUtils.getSemanticObjLinkConfig(this);
		
		var oLaunchTile = new sap.suite.ui.commons.LaunchTile(oController.createId("launchTile"), {
			title : sTileTitle,
			link : sSemanticObjLink,
			press : function(evt) {

				oController.select(evt);
			} 
		});
		
		if (oTitleIcon) {
			oLaunchTile.setIcon (oTitleIcon);
		}
		
		oLaunchTile.addStyleClass("launchAppStyle");
		 
		return oLaunchTile; 
	}
});
