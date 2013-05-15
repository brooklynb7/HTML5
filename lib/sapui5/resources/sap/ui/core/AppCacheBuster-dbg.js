/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.require("sap.ui.core.Core");
jQuery.sap.require("sap.ui.thirdparty.URI");

/*
 * Provides the AppCacheBuster mechanism to load application files using a timestamp
 */
jQuery.sap.declare("sap.ui.core.AppCacheBuster", false);

/*global URI *///declare unusual global vars for JSLint/SAPUI5 validation

(function() {

	/*
	 * The AppCacheBuster is only aware of resources which are relative to the
	 * current application or have been registered via:
	 *   - jQuery.sap.registerModulePath
	 */
	
	// intercept function to avoid usage of cachebuster
	
	// URL normalizer
	
	
	// 1.) Enableable
	// 2.) Must match to index
	// 3.) hook to suppress
	
	// ==> ManagedObject -> validateProperty
	
	// API 
	// setURLFilter,onConvertURL => return true, false
	// convertURL
	
	// what about being not on the root with the HTML page
	//   appcachebuster is always relative to the HTML page 
	
	
	// we need a detection for the root location
	//   --> to avoid registerComponent("./")
	//   --> configuration?
	
	// nested components? 
	//   indexOf check in convertURL will not work here!
	
	
	// determine the language from the configuration
	var oConfiguration = sap.ui.getCore().getConfiguration();
	var sLanguage = oConfiguration.getLanguage();
	
	// file index (maps file to timestamp) / avoid duplicate loading of known base paths
	var mIndex = {};
	
	// store the original function to intercept
	var fnAjaxOrig = jQuery.ajax;
	var fnIncludeScript = jQuery.sap.includeScript;
	var fnIncludeStyleSheet = jQuery.sap.includeStyleSheet;
	var fnValidateProperty = sap.ui.base.ManagedObject.prototype.validateProperty;
	
	// determine the application base url
	var sLocation = document.location.href.replace(/\?.*|#.*/g, "");
	var oBaseUri = URI("./").absoluteTo(sLocation); // "./" removes the html doc from path
	var sAppBaseUrl = oBaseUri.toString();
	
	// determine the base urls (normalize and then calculate the resources and test-resources urls) 
	var oUri = URI(jQuery.sap.getModulePath("", "/../"));
	var sOrgBaseUrl = oUri.toString();
	if (oUri.is("relative")) {
		oUri = oUri.absoluteTo(sLocation);
	}
	var sBaseUrl = oUri.normalize().toString();
	var sResBaseUrl = URI("resources").absoluteTo(sBaseUrl).toString();
	//var sTestResBaseUrl = URI("test-resources").absoluteTo(sBaseUrl).toString();
	
	// create resources check regex
	var oFilter = new RegExp("^" + jQuery.sap.escapeRegExp(sResBaseUrl));
	
	// define the AppCacheBuster namespace
	sap.ui.core.AppCacheBuster = {
			
			init: function() {
				
				// function shortcuts (better performance when used frequently!)
				var fnConvertUrl = sap.ui.core.AppCacheBuster.convertURL;
				var fnNormalizeUrl = sap.ui.core.AppCacheBuster.normalizeURL;
				
				// resources URL's will be handled via standard
				// UI5 cachebuster mechanism (so we simply ignore them)
				var fnIsACBUrl = function(sUrl) {
					if (sUrl && typeof(sUrl) === "string") {
						sUrl = fnNormalizeUrl(sUrl);
						return !sUrl.match(oFilter);
					}
					return false;
				};
				
				// enhance the original ajax function with appCacheBuster functionality 
				jQuery.ajax = function(url, options) {
					if (url && url.url && fnIsACBUrl(url.url)) {
						url.url = fnConvertUrl(url.url);
					}
					return fnAjaxOrig.apply(this, arguments);
				};
				
				// enhance the includeScript function
				jQuery.sap.includeScript = function(sUrl, sId) {
					var oArgs = Array.prototype.slice.apply(arguments);
					if (fnIsACBUrl(oArgs[0] /* sUrl */)) {
						oArgs[0] = fnConvertUrl(oArgs[0] /* sUrl */);
					}
					return fnIncludeScript.apply(this, oArgs);
				};
				
				// enhance the includeStyleSheet function
				jQuery.sap.includeStyleSheet = function(sUrl, sId) {
					var oArgs = Array.prototype.slice.apply(arguments);
					if (fnIsACBUrl(oArgs[0] /* sUrl */)) {
						oArgs[0] = fnConvertUrl(oArgs[0] /* sUrl */);
					}
					return fnIncludeStyleSheet.apply(this, oArgs);
				};
				
				// enhance the validateProperty function to intercept URI types
				//  test via: new sap.ui.commons.Image({src: "acctest/img/Employee.png"}).getSrc()
				//            new sap.ui.commons.Image({src: "./acctest/../acctest/img/Employee.png"}).getSrc()
				sap.ui.base.ManagedObject.prototype.validateProperty = function(sPropertyName, oValue) {
					var oArgs = Array.prototype.slice.apply(arguments);
					if (fnIsACBUrl(oArgs[1] /* oValue */)) {
						var oMetadata = this.getMetadata(),
				        oProperty = oMetadata.getAllProperties()[sPropertyName];
						if (oProperty) {
							if (oProperty.type === "sap.ui.core.URI") {
								oArgs[1] = fnConvertUrl(oArgs[1] /* oValue */);
							}
						}
					}
					return fnValidateProperty.apply(this, oArgs);
				};
				
			},
			
			exit: function() {

				// remove the function interceptions
				jQuery.ajax = fnAjaxOrig;
				jQuery.sap.includeScript = fnIncludeScript;
				jQuery.sap.includeStyleSheet = fnIncludeStyleSheet;
				sap.ui.base.ManagedObject.prototype.validateProperty = fnValidateProperty;
				
				// clear the index
				mIndex = {};
				
			},
			
			register: function(sBaseUrl) {
				
				// log
				jQuery.sap.log.debug("sap.ui.core.AppCacheBuster.register(\"" + sBaseUrl + "\");");

				// determine the base URL
				var sAbsoluteBaseUrl = sap.ui.core.AppCacheBuster.normalizeURL(sBaseUrl); // "./" removes the html doc from path
				
				// log
				jQuery.sap.log.debug("  --> normalized to: \"" + sAbsoluteBaseUrl + "\"");
				
				// if the index file has not been loaded yet => load!
				if (!mIndex[sAbsoluteBaseUrl]) {
					
					// load the index file
					var sUrl = sAbsoluteBaseUrl + "sap-ui-cachebuster-info.json?sap-ui-language=" + sLanguage;
					jQuery.sap.log.info("Loading AppCacheBuster index file from: \"" + sUrl + "\".");
					var oResponse = jQuery.sap.sjax({
						url: sUrl, 
						dataType: "json"
					});
					
					// add the index file to the index map
					if (oResponse && oResponse.data) {
						mIndex[sAbsoluteBaseUrl] = oResponse.data;
					} else {
						jQuery.sap.log.error("Failed to load AppCacheBuster index file from: \"" + sUrl + "\".");
					}
					
				}
					
			},
			
			convertURL: function(sUrl) {
				
				jQuery.sap.log.debug("sap.ui.core.AppCacheBuster.convertURL(\"" + sUrl + "\");");
					
				// modify the incoming url if found in the appCacheBuster file
				if (mIndex && sUrl) {
					
					// normalize the URL
					// local resources are registered with "./" => we remove the leading "./"! 
					// (code location for this: sap/ui/Global.js:sap.ui.localResources)
					sUrl = sap.ui.core.AppCacheBuster.normalizeURL(sUrl);
					jQuery.sap.log.debug("  --> normalized to: \"" + sUrl + "\"");

					// should the URL be handled?
					if (sUrl && sap.ui.core.AppCacheBuster.handleURL(sUrl)) {
						
						// scan for a matching base URL (by default we use the default index)
						// we lookup the base url in the index list and if found we split the
						// url into the base and path where the timestamp is added in between
						jQuery.each(mIndex, function(sBaseUrl, mBaseUrlIndex) {
							var sUrlPath;
							if (sBaseUrl && sUrl.length >= sBaseUrl.length && sUrl.slice(0, sBaseUrl.length) === sBaseUrl ) {
								sUrlPath = sUrl.slice(sBaseUrl.length);
								if (mBaseUrlIndex[sUrlPath]) {
									sUrl = sBaseUrl + "~" + mBaseUrlIndex[sUrlPath] + "~/" + sUrlPath;
									jQuery.sap.log.debug("  ==> return \"" + sUrl + "\";");
									return false;
								}
							}
						});
						
					}
					
				}
				return sUrl;

			},
			
			normalizeURL: function(sUrl) {
				
				// local resources are registered with "./" => we remove the leading "./"! 
				// (code location for this: sap/ui/Global.js:sap.ui.localResources)
				// we by default normalize all relative URLs for a common base
				var oUri = URI(sUrl || "./");
				if (oUri.is("relative")) { //(sUrl.match(/^\.\/|\..\//g)) {
					oUri = oUri.absoluteTo(sLocation);
				}
				return oUri.normalize().toString();

			},
			
			handleURL: function(sUrl) {
				// API function to be overriden by apps 
				// to exclude URLs from being manipulated
				return true;
			}
			
	};
	
	// application cachebuster mechanism
	if (oConfiguration.getAppCacheBuster()) {
		
		// initialize the AppCacheBuster
		sap.ui.core.AppCacheBuster.init();
		
		// register the current base URL (if it is a relative URL)
		// hint: if UI5 is referenced relative on a server it might be possible
		//       with the mechanism to register another base URL. 
		var oUri = URI(sOrgBaseUrl);
		if (oUri.is("relative")) {
			sap.ui.core.AppCacheBuster.register(oUri.toString());
		}
		
	}
		
}());	
