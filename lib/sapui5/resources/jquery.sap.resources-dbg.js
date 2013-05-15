/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides access to Java-like resource bundles in properties file format
jQuery.sap.declare("jquery.sap.resources");
jQuery.sap.require("jquery.sap.properties");

(function() {

	// Javadoc for private inner class "Bundle" - this list of comments is intentional!
	/**
	 * @interface  Contains locale-specific texts.
	 *
	 * If you need a locale-specific text within your application, you can use the
	 * resource bundle to load the locale-specific file from the server and access
	 * the texts of it.
	 *
	 * Use {@link jQuery.sap.resources} to create an instance of jQuery.sap.util.ResourceBundle.
	 * There you have to specify the URL to the base .properties file of a bundle
	 * (.properties without any locale information, e.g. "mybundle.properties"), and optionally
	 * a locale. The locale is defined as a string of the language and an optional country code
	 * separated by underscore (e.g. "en_GB" or "fr"). If no locale is passed, the default
	 * locale is "en" if the SAPUI5 framework is not available. Otherwise the default locale is taken from
	 * the SAPUI5 configuration.
	 *
	 * With the getText() method of the resource bundle, a locale-specific string value
	 * for a given key will be returned.
	 *
	 * With the given locale, the ResourceBundle requests the locale-specific properties file
	 * (e.g. "mybundle_fr_FR.properties"). If no file is found for the requested locale or if the file
	 * does not contain a text for the given key, a sequence of fall back locales is tried one by one. 
	 * First, if the locale contains a region information (fr_FR), then the locale without the region is
	 * tried (fr). If that also can't be found or doesn't contain the requested text, the english file 
	 * is used (en - assuming that most development projects contain at least english texts).    
	 * If that also fails, the file without locale (base URL of the bundle) is tried.
	 * 
	 * If none of the requested files can be found or none of them contains a text for the given key,
	 * then the key itself is returned as text. 
	 *
	 * Exception: Fallback for "zh_HK" is "zh_TW" before zh.
	 *
	 * @author SAP AG
	 * @version 1.10.0
	 * @since 0.9.0
	 * @name jQuery.sap.util.ResourceBundle
	 * @public
	 */
	
	/**
	 * Returns a locale-specific string value for the given key sKey. 
	 * 
	 * The text is searched in this resource bundle according to the fallback chain described in 
	 * {@link jQuery.sap.util.ResourceBundle}. If no text could be found, the key itself is used as text.
	 * 
	 * If text parameters are given, then any occurrences of the pattern "{<i>n</i>}" with <i>n</i> being an integer 
	 * are replaced by the parameter value with index <i>n</i>.  Note: This replacement is also applied if no text had been found (key). 
	 * 
	 * @param {string} sKey
	 * @param {string[]} [aArgs] List of parameters which should replace the place holders "{n}" (n is the index) in the found locale-specific string value.
	 * @return {string} The value belonging to the key, if found; otherwise the key itself.
	 *
	 * @function
	 * @name jQuery.sap.util.ResourceBundle.prototype.getText
	 */

	/**
	 * A regular expression that describes language tags according to BCP-47.
	 * @see BCP47 "Tags for Identifying Languages" (http://www.ietf.org/rfc/bcp/bcp47.txt)
	 *
	 * The matching groups are
	 *  0=all
	 *  1=language (shortest ISO639 code + ext. language sub tags | 4digits (reserved) | registered language sub tags)
	 *  2=script (4 letters)
	 *  3=region (2letter language or 3 digits)
	 *  4=variants (separated by '-', Note: capturing group contains leading '-' to shorten the regex!)
	 *  5=extensions (including leading singleton, multiple extensions separated by '-')
	 *  6=private use section (including leading 'x', multiple sections separated by '-')
	 *  
	 *            [-------------------- language ----------------------][--- script ---][------- region --------][------------ variants --------------][--------- extensions --------------][------ private use -------]
	 */
	var rlocale=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?(-[0-9A-Z]{5,8}|(?:[0-9][0-9A-Z]{3}))*(?:-([0-9A-WYZ](?:-[0-9A-Z]{2,8})+))*(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;

	/**
	 * Resource bundles are stored according to the Java Development Kit conventions.
	 * JDK uses old language names for a few ISO639 codes ("iw" for "he", "ji" for "yi", "in" for "id" and "sh" for "sr").
	 * Make sure to convert newer codes to older ones before creating file names.
	 */
	var M_ISO639_NEW_TO_OLD = {
		"he" : "iw",
		"yi" : "ji",
		"id" : "in", 
		"sr" : "sh" 
	};
	var M_ISO639_OLD_TO_NEW = {
		"iw" : "he",
		"ji" : "yi",
		"in" : "id",
		"sn" : "sr"
	};

	/**
	 * Helper to normalize the given locale (in BCP-47 syntax) to the java.util.Locale format.
	 * @return {string} Normalized locale or undefined if the locale can't be normalized
	 */
	function normalize(sLocale) {
		var m;
		if ( typeof sLocale === 'string' && (m = rlocale.exec(sLocale.replace(/_/g, '-'))) ) {
			var sLanguage = m[1].toLowerCase();
			sLanguage = M_ISO639_NEW_TO_OLD[sLanguage] || sLanguage;
			return sLanguage + (m[3] ? "_" + m[3].toUpperCase() + (m[4] ? "_" + m[4].slice(1).replace("-","_") : "") : "");
		}
	}
	
	/**
	 * Returns the default locale (the locale defined in UI5 configuration if available, else "en")
	 * @return {string} The default locale
	 */
	function defaultLocale() {
		var sLocale;
		if(window.sap && sap.ui && sap.ui.getCore){
			sLocale = sap.ui.getCore().getConfiguration().getLanguage();
			sLocale = normalize(sLocale);
		}
		return sLocale || "en";
	}
	
	/**
	 * Helper to normalize the given locale (java.util.Locale format) to the BCP-47 syntax.
	 * @return {string} Normalized locale or undefined if the locale can't be normalized
	 */
	function convertLocaleToBCP47(sLocale) {
		var m;
		if ( typeof sLocale === 'string' && (m = rlocale.exec(sLocale.replace(/_/g, '-'))) ) {
			var sLanguage = m[1].toLowerCase();
			sLanguage = M_ISO639_OLD_TO_NEW[sLanguage] || sLanguage;
			return sLanguage + (m[3] ? "-" + m[3].toUpperCase() + (m[4] ? "-" + m[4].slice(1).replace("_","-") : "") : "");
		}
	}

    /**
     * A regular expression to split a URL into
     * <ol> 
     * <li>a part before the file extension 
     * <li>the file extension itself
     * <li>any remaining part after the file extension (query, hash - optional)
     * </ol>.
     * 
     * Won't match for URLs without a file extension.
     *
     *           [------- prefix ------][----ext----][-------suffix--------]
     *                                               ?[--query--]#[--hash--]
     */
	var rUrl = /^((?:[^?#]*\/)?[^\/?#]*)(\.[^.\/?#]+)((?:\?([^#]*))?(?:#(.*))?)$/;

    /**
     * List of supported file extensions. 
     *
     * Could be enriched in future or even could be made
     * extensible to support other formats as well.
     */
	var aValidFileTypes = [ ".properties", ".hdbtextbundle"]; 

    /**
     * Helper to split a URL with the above regex.
     * Either returns an object with the parts or undefined.
     */
	function splitUrl(sUrl) {
		var m = rUrl.exec(sUrl);
		return m && { url : sUrl, prefix : m[1], ext : m[2], query: m[4], hash: (m[5] || ""), suffix : m[2] + (m[3] || "") };
	}

	/*
	 * Implements jQuery.sap.util.ResourceBundle
	 */
	var Bundle = function(sUrl, sLocale, bIncludeInfo){
		//last fallback is english if no or no valid locale is given
		//TODO: If the browsers allow to access the users language preference this should be the fallback
		this.sLocale = normalize(sLocale) || defaultLocale();
		this.oUrlInfo = splitUrl(sUrl);
		if ( !this.oUrlInfo || jQuery.inArray(this.oUrlInfo.ext, aValidFileTypes) < 0 ) {
			throw new Error("resource URL '" + sUrl + "' has unknown type (should be one of " + aValidFileTypes.join(",") + ")");
		}
		this.bIncludeInfo = bIncludeInfo;
		//declare list of property files that are loaded
		this.aPropertyFiles = [];
		this.aLocales = [];
		//load the most specific property file
		load(this, this.sLocale);
	};

	Bundle.prototype = {};

	/*
	 * Implements jQuery.sap.util.ResourceBundle.prototype.getText
	 */
	Bundle.prototype.getText = function(sKey, aArgs){
		var sValue = null;
		//loop over all loaded property files and return the value for the key if any
		for(var i=0; i<this.aPropertyFiles.length; i++){
			sValue = this.aPropertyFiles[i].getProperty(sKey);
			if(typeof(sValue)==="string") {
				break;
			}
		}

		//value for this key was not found in the currently loaded property files,
		//load the fallback locales
		if(typeof(sValue)!=="string"){
			var sTempLocale = this.aLocales[0];
			while(sTempLocale.length > 0){
				if(sTempLocale == "zh_HK"){
					sTempLocale = "zh_TW";
				}else{
					if(sTempLocale.length > 2){
						sTempLocale = sTempLocale.substring(0,2);
					}else if(sTempLocale != "en"){
						sTempLocale = "en";
					}else{
						sTempLocale = "";
					}
				}

				var oProperties = load(this, sTempLocale);
				if(oProperties == null) {
					continue;
				}

				//check whether the key is included in the newly loaded property file
				sValue = oProperties.getProperty(sKey);
				if (typeof(sValue)==="string") {
					break;
				}
			}
		}

		if(typeof(sValue)!=="string"){
			sValue = sKey;
		}

		if(aArgs){
			for(var index=0; index<aArgs.length; index++){
				sValue = sValue.replace("{"+index+"}", aArgs[index]);
			}
		}

		if (this.bIncludeInfo) {
			sValue = new String(sValue);
			sValue.originInfo = {
				source: "Resource Bundle",
				url: this.oUrlInfo.url,
				locale: this.sLocale,
				key: sKey
			};
		}

		return sValue;
	};

	/*
	 * If a .properties file for the given locale is not loaded yet
	 * in the given bundle, this method loads the .properties file and
	 * adds it to the bundle.
	 * @param {string} sLocale the text to parse
	 * @param oBundle the resource bundle to extend
	 * @return The newly loaded properties or <code>null</code>
	 *         when the properties for the given locale already loaded.
	 * @private
	 */
	function load(oBundle, sLocale) {
		var oUrl = oBundle.oUrlInfo; 
		if(jQuery.inArray(sLocale, oBundle.aLocales) == -1){
			var oHeader = null;
			var sTempUrl;
			switch (oUrl.ext) {
				case '.hdbtextbundle':
					sLocale = convertLocaleToBCP47(sLocale);
					oHeader = {
						"Accept-Language": sLocale
					};
					sTempUrl = oUrl.url;
					//Alternative: add locale as query
					//sTempUrl = oUrl.prefix + oUrl.suffix + '?' + (oUrl.query ? oUrl.query + "&" : "") + "locale=" + sLocale + (oUrl.hash ? "#" + oUrl.hash : "");
					break;
				default:
					sTempUrl = oUrl.prefix + (sLocale ? "_" + sLocale : "") + oUrl.suffix;
					break;
			}

			var props = jQuery.sap.properties({url : sTempUrl, headers: oHeader});
			oBundle.aPropertyFiles.push(props);
			oBundle.aLocales.push(sLocale);
			return props;
		}
		return null;
	}

	/**
	 * Creates and returns a new instance of {@link jQuery.sap.util.ResourceBundle}
	 * using the given URL and locale to determine what to load.
	 *
	 * @public
	 * @param {object} [mParams] Parameters used to initialize the resource bundle
	 * @param {string} [mParams.url=""] The URL to the base .properties file of a bundle (.properties file without any locale information, e.g. "mybundle.properties")
	 * @param {string} [mParams.locale="en"] Optional string of the language and an optional country code separated by underscore (e.g. "en_GB" or "fr")
	 * @param {boolean} [mParams.includeInfo=false] Optional boolean whether to include origin information into the returned property values
	 * @return {jQuery.sap.util.ResourceBundle} A new resource bundle instance
	 * @SecSink {0|PATH} Parameter is used for future HTTP requests
	 */
	jQuery.sap.resources = function resources(mParams) {
		mParams = jQuery.extend({url: "", locale: undefined, includeInfo: false}, mParams);
		var oBundle = new Bundle(mParams.url, mParams.locale, mParams.includeInfo);
		return oBundle;
	};

}());
