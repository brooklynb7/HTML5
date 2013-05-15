/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides class sap.ui.core.ThemeCheck
jQuery.sap.declare("sap.ui.core.ThemeCheck");

jQuery.sap.require("sap.ui.base.Object");
jQuery.sap.require("jquery.sap.script");

(function() {

/**
 * Creates a new ThemeCheck object.
 *
 * @class Helper class used by the UI5 Core to check whether the themes are applied correctly.
 *
 * In some browsers (e.g. Safari, Firefox) appling CSS files takes some time. So it could happen that e.g. in onAferRendering
 * not all themes are available. In these cases the check waits until the CSS is applied and fires an onThemeChanged event.
 *
 * @extends sap.ui.base.Object
 * @since 1.10.0
 * @author SAP AG
 * @constructor
 * @protected
 * @name sap.ui.core.ThemeCheck
 */
sap.ui.base.Object.extend("sap.ui.core.ThemeCheck", /** @lends sap.ui.core.ThemeCheck.prototype */ {

	constructor : function(oCore) {
		if(useThemeCheck()){
			loadThemeCheckCSS();
		}
		this._oCore = oCore;
	},
	
	clear : function(){
		sap.ui.core.ThemeCheck.initialized = false;
		jQuery.sap.byId("sap-ui-DummyCSSCheck-CSS").remove();
		jQuery.sap.byId("sap-ui-DummyCSSCheck").remove();
		if(this._sThemeCheckId){
			jQuery.sap.clearDelayedCall(this._sThemeCheckId);
			this._sThemeCheckId = null;
		}
	},
	
	getInterface : function() {
		return this;
	},
	
	fireThemeChangedEvent : function(bOnlyOnInitFail, bForceCheck) {
		var bUseCheck = useThemeCheck();
		if(bForceCheck || (!sap.ui.core.ThemeCheck.initialized && bUseCheck)){
			loadThemeCheckCSS();
		}
		if(bUseCheck || bForceCheck){
			if(!this._sThemeCheckId){
				var jDummy = jQuery("<div id=\"sap-ui-DummyCSSCheck\" class=\"sapUiCssCheck\" style=\"visibility:hidden;position:absolute;height:100px;width:100px;top:-150px;\"></div>");
				jQuery(document.body).append(jDummy);
				
				delayedCheckTheme.apply(this, [true]);
			}
		}
		
		if(!bOnlyOnInitFail && !this._sThemeCheckId){
			this._oCore.fireThemeChanged({theme: this._oCore.getConfiguration().getTheme()});
		}
	}

});

function loadThemeCheckCSS() {
	if (!sap.ui.core.ThemeCheck.initialized) {
		// for certain browsers CSS bug append CSS class at the end
		jQuery.sap.includeStyleSheet(jQuery.sap.getModulePath("sap.ui.core.", "/") + "ThemeCheck.css", "sap-ui-DummyCSSCheck-CSS");
		sap.ui.core.ThemeCheck.initialized = true;
	}
};

function useThemeCheck() {
	if(jQuery.browser.safari){
		var aVersion = jQuery.browser.version.split(".");
		if (parseInt(aVersion[0], 10) < 534 || (parseInt(aVersion[0], 10) == 534 && parseInt(aVersion[1],10) < 5)) {
			return true;
		}
	}else if(jQuery.browser.mozilla){
		return true;
	}
	return false;
};

function checkTheme() {
	var res = (jQuery.sap.domById("sap-ui-DummyCSSCheck").offsetHeight - jQuery.sap.domById("sap-ui-DummyCSSCheck").clientHeight) == 20;
	if(!res){
		jQuery.sap.log.warning("Theme not yet applied.");
	}else{
		jQuery.sap.byId("sap-ui-DummyCSSCheck").remove();
	}
	return res;
};

function delayedCheckTheme(bFirst) {
	if(!checkTheme()){
		this._sThemeCheckId = jQuery.sap.delayedCall(2, this, delayedCheckTheme);
	}else if(!bFirst){
		this._sThemeCheckId = null;
		this._oCore.fireThemeChanged({theme: this._oCore.getConfiguration().getTheme()});
	}
};

})();