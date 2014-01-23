/*!
 * @copyright@
 */

/*************************************************************
* CommonUtil helper class
*
* Common utilities functions
**************************************************************/
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.declare("sap.collaboration.components.utils.CommonUtil");

sap.ui.base.Object.extend("sap.collaboration.components.utils.CommonUtil",{

	/**
	 * Gets language bundle
	 * @private
	 */
	getLanguageBundle: function() {
		if (!this.oLangBundle){
			jQuery.sap.require("jquery.sap.resources");
			var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
			this.oLangBundle = jQuery.sap.resources({
				url : jQuery.sap.getModulePath("sap.collaboration.components") + "/i18n/messagebundle.properties", 
				locale: sLocale
			});
		}
		
		return this.oLangBundle;
	},
	
	/**
	 * Displays a MessageBox with an error message
	 * @param {oError} object The error object
	 * @private
	 */
	displayError : function(oError) {
		var sMessage = this.getLanguageBundle().getText("SYSTEM_ERROR_MESSAGEBOX_GENERAL_TEXT");
		
		sap.m.MessageBox.show(
				sMessage,
   				sap.m.MessageBox.Icon.ERROR,
   				this.getLanguageBundle().getText("SYSTEM_ERROR_MESSAGEBOX_TITLE")
		);
	}
	
	
});