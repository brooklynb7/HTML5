/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

//Provides class sap.ui.core.Configuration
jQuery.sap.declare("sap.ui.core.Configuration");
jQuery.sap.require("sap.ui.base.Object");

(function() {

	/**
	 * Creates a new Configuration object.
	 *
	 * @class Collects and stores the configuration of the current environment.
	 *
	 * The Configuration is initialized once when the {@link sap.ui.core.Core} is created.
	 * There are different ways to set the environment configuration (in ascending priority):
	 * <ol>
	 * <li>System defined defaults
	 * <li>Server wide defaults, read from /sap-ui-config.json
	 * <li>Properties of the global configuration object window["sap-ui-config"]
	 * <li>A configuration string in the data-sap-ui-config attribute of the bootstrap tag
	 * <li>Individual data-sap-ui-xyz attributes of the bootstrap tag
	 * <li>Using URL parameters
	 * <li>Setters in this Configuration object (only for some parameters)
	 * </ol>
	 *
	 * That is, attributes of the DOM reference override the system defaults, URL parameters
	 * override the DOM attributes (where empty URL parameters set the parameter back to its
	 * system default). Calling setters at runtime will override any previous settings
	 * calculated during object creation.
	 *
	 * The naming convention for parameters is:
	 * <ul>
	 * <li>in the URL : sap-ui-<i>PARAMETER-NAME</i>="value"
	 * <li>in the DOM : data-sap-ui-<i>PARAMETER-NAME</i>="value"
	 * </ul>
	 * where <i>PARAMETER-NAME</i> is the name of the parameter in lower case.
	 *
	 * Values of boolean parameters are case insensitive where "true" and "x" are interpreted as true.
	 *
	 * @extends sap.ui.base.Object
	 * @author Frank Weigel (Martin Schaus)
	 * @constructor
	 * @public
	 * @name sap.ui.core.Configuration
	 */
	sap.ui.base.Object.extend("sap.ui.core.Configuration", /** @lends sap.ui.core.Configuration.prototype */ {

		constructor : function() {
			
			function detectLanguage() {
				var match;
				if (jQuery.os.android) {
					// on Android, navigator.language is hardcoded to 'en', so check UserAgent string instead 
					match = navigator.userAgent.match(/\s([a-z]{2}-[a-z]{2})[;)]/i);
					if ( match ) {
						return match[1];
					}
          // okay, we couldn't find a language setting. It might be better to fallback to 'en' instead of having no language 
				} 
				return navigator.language || navigator.userLanguage || navigator.browserLanguage;
			}
			
			// definition of supported settings
			var M_SETTINGS = {
					"theme"           : { type : "string",   defaultValue : "base" },
					"language"        : { type : "string",   defaultValue : detectLanguage() },
					"formatLocale"    : { type : "string",   defaultValue : null },
					// "timezone"      : "UTC",
					"accessibility"   : { type : "boolean",  defaultValue : true },
					"animation"       : { type : "boolean",  defaultValue : true },
					"rtl"             : { type : "boolean",  defaultValue : false },
					"debug"           : { type : "boolean",  defaultValue : false },
					"inspect"         : { type : "boolean",  defaultValue : false },
					"originInfo"      : { type : "boolean",  defaultValue : false },
					"noConflict"      : { type : "boolean",  defaultValue : false,     noUrl:true },
					"noDuplicateIds"  : { type : "boolean",  defaultValue : true },
					"trace"           : { type : "boolean",  defaultValue : false,     noUrl:true },
					"modules"         : { type : "string[]", defaultValue : [],        noUrl:true },
					"areas"           : { type : "string[]", defaultValue : null,      noUrl:true },
					// "libs"			  : { type : "string[]", defaultValue : [],        noUrl:true }, deprecated, handled below
					"onInit"          : { type : "code",     defaultValue : undefined, noUrl:true },
					"uidPrefix"       : { type : "string",   defaultValue : "__",      noUrl:true },
					"ignoreUrlParams" : { type : "boolean",  defaultValue : false,     noUrl:true },
					"weinreServer"    : { type : "string",   defaultValue : "",		   noUrl:true },
					"weinreId"        : { type : "string",   defaultValue : "" },
					"xx-loadAllMode"  : { type : "boolean",  defaultValue : false,     noUrl:true },
					"preload"         : { type : "string",   defaultValue : 'auto' },
					"xx-test-mobile"  : { type : "boolean",  defaultValue : false },
					"appCacheBuster"  : { type : "boolean",  defaultValue : false },
					"xx-bootTask"     : { type : "function", defaultValue : undefined, noUrl:true }
			};

			this.oFormatSettings = new sap.ui.core.Configuration.FormatSettings(this);

			/* Object that carries the real configuration data */
			var config = this;

			function setValue(sName, sValue) {
				if ( typeof sValue === "undefined" || sValue === null ) {
					return;
				}
				switch(M_SETTINGS[sName].type) {
				case "boolean":
					if ( typeof sValue === "string" ) {
						if (M_SETTINGS[sName].defaultValue) {
							config[sName] = sValue.toLowerCase() != "false";
						} else {
							config[sName] = sValue.toLowerCase() === "true" || sValue.toLowerCase() === "x";
						}
					} else {
						// boolean etc.
						config[sName] = !!sValue;
					}
					break;
				case "string":
					config[sName] = "" + sValue; // enforce string
					break;
				case "code":
					config[sName] = typeof sValue === "function" ? sValue : String(sValue);
					break;
				case "function":
					if ( typeof sValue !== "function" ) {
						throw new Error("unsupported value");
					}
					config[sName] = sValue;
					break;
				case "string[]":
					if ( jQuery.isArray(sValue) ) {
						config[sName] = sValue;
					} else if ( typeof sValue === "string" ) {
						config[sName] = jQuery.map(sValue.split(/[ ,;]/), function($) { return jQuery.trim($); });
					} else {
						throw new Error("unsupported value");
					}
					break;
				default:
					throw new Error("illegal state");
				}
			}

			// 1. collect the defaults
			for (var n in M_SETTINGS ) {
				config[n] = M_SETTINGS[n].defaultValue;
			}

			// 2. read server wide sapui5 configuration
			/* TODO: RETHINK server wide sapui5 configuration to make it optional
    			 currently it is forcing a request which is annoying customers :
    			   - Think about an option which enables loading of server wide config!
    	var sUrl = "/sap-ui-config.json";
    	var oResponse = jQuery.sap.sjax({url:sUrl});
    	if (oResponse.success) {
    		var oServerCfg = {};
    		if (typeof oResponse.data == "string") {
    			try {
    				oServerCfg = jQuery.parseJSON(oResponse.data);
    			} catch(ex) {
    				jQuery.sap.log.warning("Error when parsing the JSON configuration content from " + sUrl + " : " + ex);
    			}
    		} else {
    			oServerCfg = oResponse.data;
    		}
    		for (var n in M_SETTINGS) {
    			if (oServerCfg[n]) {
    				setValue(n, oServerCfg[n]);
    			}
    		}
    	}
			 */

			// 3.-5. apply settings from global config object (already merged with script tag attributes)
			var oCfg = window["sap-ui-config"] || {};
			oCfg.oninit = oCfg.oninit || oCfg["evt-oninit"];
			for (var n in M_SETTINGS) {
				setValue(n, oCfg[n.toLowerCase()]);
			}
			// if libs are configured, convert them to modules and prepend them to the existing modules list
			if ( oCfg.libs ) {
				config.modules = jQuery.map(oCfg.libs.split(","), function($) { return jQuery.trim($)+".library"; }).concat(config.modules);
			}

			// 6. apply the settings from the url (only if not blocked by app configuration)
			if ( !config.ignoreUrlParams ) {
				var sUrlPrefix = "sap-ui-";
				var oUriParams = jQuery.sap.getUriParameters();

				// map SAP parameters (if later as sap-ui parameter set this wins)
				if (oUriParams.mParams['sap-locale'] || oUriParams.mParams['sap-language']) {
					// map sap-locale or sap-language to sap-ui-language
					var sValue = oUriParams.get('sap-locale') || oUriParams.get('sap-language');
					if (sValue === "") {
						//empty URL parameters set the parameter back to its system default
						config['language'] = M_SETTINGS['language'].defaultValue;
					} else {
						//sets the value (null or empty value ignored)
						setValue('language', sValue);
					}
				}

				if (oUriParams.mParams['sap-accessibility']) {
					// "" = false, "X", "x" = true
					var sValue = oUriParams.get('sap-accessibility');
					if (sValue === "X" || sValue === "x") {
						setValue('accessibility', true);
					} else {
						setValue('accessibility', false);
					}
				}

				if (oUriParams.mParams['sap-rtl']) {
					// "" = false, "X", "x" = true
					var sValue = oUriParams.get('sap-rtl');
					if (sValue === "X" || sValue === "x") {
						setValue('rtl', true);
					} else {
						setValue('rtl', false);
					}
				}

				if (oUriParams.mParams['sap-theme']) {
					var sValue = oUriParams.get('sap-theme');
					if (sValue === "") {
						// empty URL parameters set the parameter back to its system default
						config['theme'] = M_SETTINGS['theme'].defaultValue;
					} else {
						// check if @ in theme - not allowed yet
						var iIndex = sValue.indexOf("@");
						if (iIndex >= 0) {
							jQuery.sap.log.warning("@ not allowed in theme name (theme-root not supported!)");
							if (iIndex == 0) {
								config['theme'] = M_SETTINGS['theme'].defaultValue;
							}else{
								// use part before @ as theme
								setValue('theme', sValue.slice(0, iIndex));
							}
						}else{
							setValue('theme', sValue);
						}
					}
				}

				// now analyze sap-ui parameters
				for (var n in M_SETTINGS) {
					if ( M_SETTINGS[n].noUrl ) {
						continue;
					}
					var sValue = oUriParams.get(sUrlPrefix + n);
					if (sValue === "") {
						//empty URL parameters set the parameter back to its system default
						config[n] = M_SETTINGS[n].defaultValue;
					} else {
						//sets the value (null or empty value ignored)
						setValue(n, sValue);
					}
				}
			}

			for (var n in M_SETTINGS) {
				if ( config[n] !== M_SETTINGS[n].defaultValue ) {
					jQuery.sap.log.info("  " + n + " = " + config[n]);
				}
			}
		},

		/**
		 * Returns the theme name
		 * @return {string} the theme name
		 * @public
		 */
		getTheme : function () {
			return this.theme;
		},

		/**
		 * Allows setting the theme name
		 * @param {string} sTheme the theme name
		 * @return {sap.ui.core.Configuration} <code>this</code> to allow method chaining
		 * @private
		 */
		_setTheme : function (sTheme) {
			this.theme = sTheme;
			return this;
		},

		/**
		 * Returns the language string with language and country code
		 * @return {string} the language string with language and country code
		 * @public
		 */
		getLanguage : function () {
			return this.language;
		},

		/**
		 * Returns the active locale for the current session. 
		 * The locale is derived from the {@link #getLanguage language} property.  
		 * @return {sap.ui.core.Locale} the locale
		 * @public
		 */
		getLocale : function () {
			return new sap.ui.core.Locale(this.language);
		},

		/**
		 * Returns the format locale string with language and region code. Falls back to language configuration,
		 * in case it has not been explicitly defined.
		 * @return {string} the format locale string with language and country code
		 * @public
		 */
		getFormatLocale : function () {
			return this.formatLocale || this.language;
		},

		/**
		 * Returns whether the accessibility mode is used or not
		 * @return {boolean} whether the accessibility mode is used or not
		 * @public
		 */
		getAccessibility : function () {
			return this.accessibility;
		},

		/**
		 * Returns whether the animations are globally used
		 * @return {boolean} whether the animations are globally used
		 * @public
		 */
		getAnimation : function () {
			return this.animation;
		},

		/**
		 * Returns whether the page uses the RTL text direction
		 * @return {boolean} whether the page uses the RTL text direction
		 * @public
		 */
		getRTL : function () {
			return this.rtl;
		},

		/**
		 * Returns whether the page runs in debug mode
		 * @return {boolean} whether the page runs in debug mode
		 * @public
		 */
		getDebug : function () {
			return this.debug;
		},

		/**
		 * Returns whether the UI5 control inspector is displayed
		 * Has only an effect when the sap-ui-debug module has been loaded
		 * @return {boolean} whether the UI5 control inspector is displayed
		 * @public
		 */
		getInspect : function () {
			return this.inspect;
		},

		/**
		 * Returns whether the text origin information is collected
		 * @return {boolean} whether the text info is collected
		 * @public
		 */
		getOriginInfo : function () {
			return this.originInfo;
		},

		/**
		 * Returns whether there should be an exception on any duplicate element IDs
		 * @return {boolean} whether there should be an exception on any duplicate element IDs
		 * @public
		 */
		getNoDuplicateIds : function () {
			return this.noDuplicateIds;
		},

		/**
		 * Whether a trace view should be shown or not.
		 * Has only an effect when the sap-ui-debug module has been loaded
		 * either by explicitly loading it or by setting the 'debug' option to true.
		 * @return {boolean} whether a trace view should be shown
		 */
		getTrace : function () {
			return this.trace;
		},

		/**
		 * Prefix to be used for automatically generated control IDs.
		 * Default is a double underscore "__".
		 *
		 * @returns {string} the prefix to be used
		 * @public
		 */
		getUIDPrefix : function() {
			return this.uidPrefix;
		},

		/**
		 * WEINRE server URL
		 *
		 * @returns {string} the base URL of the WEINRE server
		 * @public
		 */
		getWeinreServer : function() {
			var sWeinreServer = this.weinreServer;
			if (!sWeinreServer) {
				// if not weinre server is configured - we expect that the weinre server
				// is installed on the same machine with port no of the app + 1
				sWeinreServer = window.location.protocol + "//" + window.location.hostname + ":";
				sWeinreServer += (parseInt(window.location.port, 10) || 8080) + 1;
			}
			return sWeinreServer;
		},

		/**
		 * WEINRE session ID
		 *
		 * @returns {string} the ID to use for the WEINRE server
		 * @public
		 */
		getWeinreId : function() {
			return this.weinreId;
		},

		/**
		 * URL to AppCacheBuster Etag-Index file
		 *
		 * @returns {string} URL
		 * @public
		 */
		getAppCacheBuster : function() {
			return this.appCacheBuster;
		},

		/**
		 * Returns a configuration object that bundles the format settings of UI5.
		 *
		 * @return {sap.ui.core.Configuration.FormatSettings} A FormatSettings object.
		 * @public
		 */
		getFormatSettings : function() {
			return this.oFormatSettings;
		}

	});

	var M_ABAP_DATE_FORMAT_PATTERN = {
			"" : {pattern: null},
			"1": {pattern: "dd.MM.yyyy"},
			"2": {pattern: "MM/dd/yyyy"},
			"3": {pattern: "MM-dd-yyyy"},
			"4": {pattern: "yyyy.MM.dd"},
			"5": {pattern: "yyyy/MM/dd"},
			"6": {pattern: "yyyy-MM-dd"}
	};

	var M_ABAP_TIME_FORMAT_PATTERN = {
			"" : {pattern: null, dayPeriods: null},
			"0": {pattern: "HH:mm:ss", dayPeriods : null},
			"1": {pattern: "hh:mm:ss a", dayPeriods: ["AM", "PM"]},
			"2": {pattern: "hh:mm:ss a", dayPeriods: ["am", "pm"]},
			"3": {pattern: "KK:mm:ss a", dayPeriods: ["AM", "PM"]},
			"4": {pattern: "KK:mm:ss a", dayPeriods: ["am", "pm"]}
	};

	var M_ABAP_NUMBER_FORMAT_SYMBOLS = {
			"" : {groupingSeparator: null, decimalSeparator: null},
			" ": {groupingSeparator: ".", decimalSeparator: ","},
			"X": {groupingSeparator: ",", decimalSeparator: "."},
			"Y": {groupingSeparator: " ", decimalSeparator: ","}
	};

	function check(bCondition, sMessage) {
		if ( !bCondition ) {
			throw new Error(sMessage);
		}
	}

	/**
	 * @class Encapsulates configuration settings that are related to data formatting/parsing.
	 * 
	 * <b>Note:</b> When format configuration settings are modified through this class, 
	 * UI5 only ensures that formatter objects created after that point in time will honor
	 * the modifications. To be on the safe side, applications should do any modifications 
	 * early in their lifecycle or recreate any model/UI that is locale dependent. 
	 * 
	 * @name sap.ui.core.Configuration.FormatSettings
	 * @extends sap.ui.base.Object
	 * @public
	 */
	sap.ui.base.Object.extend("sap.ui.core.Configuration.FormatSettings", /** @lends sap.ui.core.Configuration.FormatSettings.prototype */ {
		constructor : function(oConfiguration) {
			this.oConfiguration = oConfiguration;
			this.mSettings = {};
			this.sLegacyDateFormat = undefined;
			this.sLegacyTimeFormat = undefined;
			this.sLegacyNumberFormatSymbolSet = undefined;
		},

		/**
		 * Returns the locale to be used for formatting. 
		 * 
		 * If no such locale has been defined, this method falls back to the language,
		 * see {@link sap.ui.core.Configuration#getLanguage Configuration.getLanguage()}.
		 * 
		 * If any user preferences for date, time or number formatting have been set,
		 * and if no format locale has been specified, then a special private use subtag
		 * is added to the locale, indicating to the framework that these user preferences 
		 * should be applied. 
		 *  
		 * @return {sap.ui.core.Locale} the format locale 
		 * @public
		 */
		getFormatLocale : function() {
			function fallback(that) {
				var l=that.oConfiguration.language;
				// if any user settings have been defined, add the private use subtag "sapufmt"    
				if ( !jQuery.isEmptyObject(that.mSettings) ) {
					// TODO move to Locale/LocaleData
					if ( l.indexOf("-x-") < 0 ) {
						l = l + "-x-sapufmt";
					} else if ( l.indexOf("-sapufmt") <= l.indexOf("-x-") ) {
						l = l + "-sapufmt";
					}
				}
				return l;
			}
			return new sap.ui.core.Locale(this.oConfiguration.formatLocale || fallback(this));
		},

		_set : function(sKey, oValue) {
			if ( oValue != null ) {
				this.mSettings[sKey] = oValue;
			} else {
				delete this.mSettings[sKey];
			} 
		},

		/**
		 * Returns the currently set date pattern or undefined if no pattern has been defined. 
		 * @public
		 */
		getDatePattern : function(sStyle) {
			jQuery.sap.assert(sStyle == "short" || sStyle == "medium" || sStyle == "long" || sStyle == "full", "sStyle must be short, medium, long or full");
			return this.mSettings["dateFormat-" + sStyle];
		},

		/**
		 * Defines the preferred format pattern for the given date format style. 
		 * Calling this method with a null or undefined pattern removes a previously set pattern. 
		 * 
		 * If a pattern is defined, it will be preferred over patterns derived from the current locale.
		 * 
		 * See class {@link sap.ui.core.format.DateFormat} for details about the pattern syntax.
		 *  
		 * @param {string} sStyle must be one of short, medium, long or full.
		 * @param {string} sPattern the format pattern to be used in LDML syntax.
		 * @return {sap.ui.core.Configuration.FormatSettings} Returns <code>this</code> to allow method chaining
		 * @public   
		 */
		setDatePattern : function(sStyle, sPattern) {
			check(sStyle == "short" || sStyle == "medium" || sStyle == "long" || sStyle == "full", "sStyle must be short, medium, long or full");
			this._set("dateFormat-" + sStyle, sPattern);
			return this;
		},

		/**
		 * Returns the currently set time pattern or undefined if no pattern has been defined.
		 * @public
		 */
		getTimePattern : function(sStyle) {
			jQuery.sap.assert(sStyle == "short" || sStyle == "medium" || sStyle == "long" || sStyle == "full", "sStyle must be short, medium, long or full");
			return this.mSettings["timeFormat-" + sStyle];
		},

		/**
		 * Defines the preferred format pattern for the given time format style.
		 * Calling this method with a null or undefined pattern removes a previously set pattern. 
		 *  
		 * If a pattern is defined, it will be preferred over patterns derived from the current locale.
		 * 
		 * See class {@link sap.ui.core.format.DateFormat} for details about the pattern syntax.
		 *  
		 * @param {string} sStyle must be one of short, medium, long or full.
		 * @param {string} sPattern the format pattern to be used in LDML syntax.
		 * @return {sap.ui.core.Configuration.FormatSettings} Returns <code>this</code> to allow method chaining
		 * @public
		 */
		setTimePattern : function(sStyle, sPattern) {
			check(sStyle == "short" || sStyle == "medium" || sStyle == "long" || sStyle == "full", "sStyle must be short, medium, long or full");
			this._set("timeFormat-" + sStyle, sPattern);
			return this;
		},

		/**
		 * Returns the currently set number symbol of the given type or undefined if no symbol has been defined.
		 * @public
		 */
		getNumberSymbol : function(sType) {
			jQuery.sap.assert(sType == "decimal" || sType == "group" || sType == "plusSign" || sType == "minusSign", "sType must be decimal, group, plusSign or minusSign");
			return this.mSettings["symbols-latn-" + sType];
		},

		/**
		 * Defines the string to be used for the given number symbol.
		 * Calling this method with a null or undefined symbol removes a previously set symbol string.
		 * Note that an empty string is explicitly allowed.  
		 * 
		 * If a symbol is defined, it will be preferred over symbols derived from the current locale.
		 * 
		 * See class {@link sap.ui.core.format.NumberFormat} for details about the symbols.
		 *  
		 * @param {string} sStyle must be one of decimal, group, plusSign, minusSign.
		 * @param {string} sSymbol will be used to represent the given symbol type
		 * @return {sap.ui.core.Configuration.FormatSettings} Returns <code>this</code> to allow method chaining
		 * @public   
		 */
		setNumberSymbol : function(sType, sSymbol) {
			check(sType == "decimal" || sType == "group" || sType == "plusSign" || sType == "minusSign", "sType must be decimal, group, plusSign or minusSign");
			this._set("symbols-latn-" + sType, sSymbol);
			return this;
		},

		_setDayPeriods : function(sWidth, aTexts) {
			jQuery.sap.assert(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
			this._set("dayPeriods-format-" + sWidth, aTexts);
			return this;
		},

		/**
		 * Returns the currently set legacy ABAP date format (its id) or undefined if none has been set.
		 *  
		 * @public
		 */
		getLegacyDateFormat : function() {
			return this.sLegacyDateFormat || undefined;
		},

		/**
		 * Allows to specify one of the legacy ABAP date formats. 
		 * 
		 * This method modifies the date patterns for 'short' and 'medium' style with the corresponding ABAP 
		 * format. When called with a null or undefined format id, any previously applied format will be removed.
		 * 
		 * @param {string} sFormatId id of the ABAP data format (one of '1','2','3','4','5','6')
		 * @return {sap.ui.core.Configuration.FormatSettings} Returns <code>this</code> to allow method chaining
		 * @public
		 */
		setLegacyDateFormat : function(sFormatId) {
			check(!sFormatId || M_ABAP_DATE_FORMAT_PATTERN.hasOwnProperty(sFormatId), "sFormatId must be one of ['1','2','3','4','5','6'] or empty");
			this.sLegacyDateFormat = sFormatId = sFormatId || "";
			this.setDatePattern("short", M_ABAP_DATE_FORMAT_PATTERN[sFormatId].pattern);
			this.setDatePattern("medium", M_ABAP_DATE_FORMAT_PATTERN[sFormatId].pattern);
			return this;
		},

		/**
		 * Returns the currently set legacy ABAP time format (its id) or undefined if none has been set.
		 *  
		 * @public
		 */
		getLegacyTimeFormat : function() {
			return this.sLegacyTimeFormat || undefined;
		},

		/**
		 * Allows to specify one of the legacy ABAP time formats.
		 * 
		 * This method sets the time patterns for 'short' and 'medium' style to the corresponding ABAP 
		 * formats and sets the day period texts to "AM"/"PM" or "am"/"pm" respectively. When called 
		 * with a null or undefined format id, any previously applied format will be removed.
		 * 
		 * @param {string} sFormatId id of the ABAP time format (one of '0','1','2','3','4')
		 * @return {sap.ui.core.Configuration.FormatSettings} Returns <code>this</code> to allow method chaining
		 * @public
		 */
		setLegacyTimeFormat : function(sFormatId) {
			check(!sFormatId || M_ABAP_TIME_FORMAT_PATTERN.hasOwnProperty(sFormatId), "sFormatId must be one of ['0','1','2','3','4'] or empty");
			this.sLegacyTimeFormat = sFormatId = sFormatId || "";
			this.setTimePattern("short", M_ABAP_TIME_FORMAT_PATTERN[sFormatId].pattern);
			this.setTimePattern("medium", M_ABAP_TIME_FORMAT_PATTERN[sFormatId].pattern);
			this._setDayPeriods("abbreviated", M_ABAP_TIME_FORMAT_PATTERN[sFormatId].dayPeriods);
			return this;
		},

		/**
		 * Returns the currently set legacy ABAP number format (its id) or undefined if none has been set.
		 *  
		 * @public
		 */
		getLegacyNumberFormat : function() {
			return this.sLegacyNumberFormat || undefined;
		},

		/**
		 * Allows to specify one of the legacy ABAP number format.
		 * 
		 * This method will modify the 'group' and 'decimal' symbols. When called with a null 
		 * or undefined format id, any previously applied format will be removed.
		 * 
		 * @param {string} sFormatId id of the ABAP number format set (one of ' ','X','Y')
		 * @return {sap.ui.core.Configuration.FormatSettings} Returns <code>this</code> to allow method chaining
		 * @public
		 */
		setLegacyNumberFormat : function(sFormatId) {
			sFormatId = sFormatId ? sFormatId.toUpperCase() : "";
			check(!sFormatId || M_ABAP_NUMBER_FORMAT_SYMBOLS.hasOwnProperty(sFormatId), "sFormatId must be one of [' ','X','Y'] or empty");
			this.sLegacyNumberFormat = sFormatId;
			this.setNumberSymbol("group", M_ABAP_NUMBER_FORMAT_SYMBOLS[sFormatId].groupingSeparator);
			this.setNumberSymbol("decimal", M_ABAP_NUMBER_FORMAT_SYMBOLS[sFormatId].decimalSeparator);
		},

		/*
		 * Returns a live object with the current settings
		 * TODO this method is part of the facade to be accessible from LocaleData, but it shouldn't be
		 * @private
		 */
		getCustomLocaleData : function() {
			return this.mSettings;
		}
	});

}());
