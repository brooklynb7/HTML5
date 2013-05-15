/**
 * @author I055660
 */

(function() {

	// make sure undefined is undefined
	var undefined;
	
	if(window) {
		sap = window.sap || {};
	} else {
		sap = sap || {};
	}
		
	// Specially for sap.common.globalization as APP Root	
	if(sap)
	{
		sap.common = sap.common || {};	
	}
	if(sap.common)
	{
		sap.common.globalization =  sap.common.globalization || {};
	}
		
	
	/**
	 * Version number like 1.0.0.
	 * 
	 * @return {String} the version number
	 * @public
	 * @static
	 */
	sap.common.globalization.VERSION = function() {
		return "0.0.1";
    };
	
	/**
	 * Build number like 100.
	 * 
	 * @return {Number} the build number
	 * @public
	 * @static
	 */
	// Do NOT change the BUILD function including the coding format, 
	// it will be auto-updated by build script.
	sap.common.globalization.BUILD = function() {return 99;};
	
	/**
	 * Declear a module and create namespace.
	 * 
	 * @para {String} ns the module namespace
	 * @return {Object} the created module
	 * @public
	 * @static
	 */
	sap.common.globalization.declare = function(ns) {
		if (!ns)
			throw new Error("name required");
		if (typeof (ns) != "string")
			throw new Error("name has to be a string");
		if (ns.charAt(0) == '.' || ns.charAt(ns.length - 1) == '.' || ns.indexOf("..") != -1)
			throw new Error("illegal name: " + ns);

		ns = ns.split(".");
		var o = window;
		for ( var i = 0; i < ns.length; i++) {
			o[ns[i]] = o[ns[i]] || {};
			o = o[ns[i]];
		}
		return o;
	};
	
	/**
	 * Requre a module.
	 * 
	 * @para {String} ns the module namespace
	 * @public
	 * @static
	 */
	sap.common.globalization.require = function(ns) {

	};
	
	/**
	 * Extend class, superClz's constructor will be applied with no parameters.
	 * 
	 * @para {function} subClz the sub class
	 * @para {function} superClz the super class to be extended
	 * @return {function} the extended subClz
	 * @public
	 * @static
	 */
	sap.common.globalization.extend = function(subClz, superClz) {
		var subClzPrototype = subClz.prototype;
		// console.log(subClz);
		// console.log("Super class");
		// console.log(superClz );
		
		// add the superclass prototype to the subclass definition
		subClz.superclass = superClz.prototype;
		
		// copy prototype
		var F = function(){};
		F.prototype = superClz.prototype;
		
		subClz.prototype = new F();
		for (var prop in subClzPrototype) {
			if (subClzPrototype.hasOwnProperty(prop)) {
				subClz.prototype[prop] = subClzPrototype[prop];
			}
		}
    	subClz.prototype.constructor = subClz;
		if(superClz.prototype.constructor == Object.prototype.constructor) {
			superClz.prototype.constructor = superClz;
		}
    	return subClz;
	};
	
})();(function() {

		/**
		* 	The NumericFormatManager manages the spreadsheet numeric format objects 
		* 	and provides a simple interface to apply formatting.
		*/
		sap.common.globalization.declare("sap.common.globalization.NumericFormatManager");
		 
		sap.common.globalization.require("sap.common.globalization.utils.NumberUtil");
		sap.common.globalization.require("sap.common.globalization.utils.BooleanUtil");
		sap.common.globalization.require("sap.common.globalization.utils.DataFormatUtils");
		sap.common.globalization.require("sap.common.globalization.utils.StringUtil");
		sap.common.globalization.require("sap.common.globalization.numericFormat.FTUtil");
		sap.common.globalization.require("sap.common.globalization.numericFormat.FT");
		sap.common.globalization.require("sap.common.globalization.defaultFormat.CustomNumericFormatLocaleFactory");
		sap.common.globalization.require("sap.common.globalization.defaultFormat.DefaultShortDateFormatLocaleFactory");
		
		sap.common.globalization.require("sap.common.globalization.defaultFormat.DefaultDateFormatLocaleFactory");
		sap.common.globalization.require("sap.common.globalization.defaultFormat.DefaultDateTimeFormatLocaleFactory");
		sap.common.globalization.require("sap.common.globalization.defaultFormat.DefaultTimeFormatLocaleFactory");
		sap.common.globalization.require("sap.common.globalization.defaultFormat.DefaultNumericFormatLocaleFactory");
		sap.common.globalization.require("sap.common.globalization.defaultFormat.DefaultCurrencyFormatLocaleFactory");
		sap.common.globalization.require("sap.common.globalization.defaultFormat.CustomDateFormatLocaleFactory");
		
		sap.common.globalization.require("sap.common.globalization.numericFormat.FLocalization");
		sap.common.globalization.require("sap.common.globalization.GlobalizationPreference");
		
		
	    var sapNumManager = sap.common.globalization.NumericFormatManager;
	    
	    sapNumManager.DEFAULT_FORMAT_DATE_TIME = "SAP_FORMAT_DEFAULT_DATE_TIME";
	    sapNumManager.DEFAULT_FORMAT_TIME = "SAP_FORMAT_DEFAULT_TIME";
	    sapNumManager.DEFAULT_FORMAT_SHORT_DATE = "SAP_FORMAT_DEFAULT_SHORT_DATE";
	    sapNumManager.DEFAULT_FORMAT_LONG_DATE = "SAP_FORMAT_DEFAULT_LONG_DATE";
	    sapNumManager.DEFAULT_FORMAT_NUMBER = "SAP_DEFAULT_NUMBER_FORMAT";
	    sapNumManager.DEFAULT_FORMAT_BOOLEAN = "SAP_DEFAULT_BOOLEAN_FORMAT";
		
		//------------------------------------------------------------------/
		// New add NumericFormatManager member in JS for outside to pass-in.
	    sapNumManager.XL_PVL = "en"; //TODO will be used in GlobalizationPreference.js
	    sapNumManager.SAP_PARAMETERS = {}; //  SAP_PARAMETERS is passed in from unit test or other app.
	    
	    sapNumManager.resetParameters = function() {
			sapNumManager.SAP_PARAMETERS = {};
		};
	    //------------------------------------------------------------------/
	    
		/**
		 * 	Object to hold mapping of formatStrings to numeric formats.
		 */
		sapNumManager._formats = {}; /*Object*/
		// protected static var _formats:Object;
		
		//--------------------------------------------------------------------------
		//
		//  Class methods
		//
		//--------------------------------------------------------------------------
		
		/**
		 * 	Returns the numeric format associated with the specified formatString.
		 * 	If a numeric format hasn't been created for the specified formatString, 
		 * 	a new numeric format instance will be returned and associated with that formatString.
		 * 
		 * 	@param formatString		The string representing the numeric formatting for the spreadsheet cell.
		 * 							Matches the value found in Excel under Format -> Cells -> Number -> Custom.
		 */
		sapNumManager.getFormat = function(formatString /*String*/) {
			if ((formatString == null) || (formatString == "")) {							// handle null case by returning null format.  FT doesn't handle nulls.
				return null;
			}
			
			if (!sapNumManager._formats) {
				sapNumManager._formats = new Object();
			}
			var numFormat /* FT*/ = sapNumManager._formats[formatString];
			var  _s_g_df= sap.common.globalization.defaultFormat;
			
			if (numFormat == null) {
				// handle for default date/time format string
				if(formatString == sapNumManager.DEFAULT_FORMAT_SHORT_DATE||formatString == sapNumManager.DEFAULT_FORMAT_LONG_DATE
					||formatString == sapNumManager.DEFAULT_FORMAT_DATE_TIME||formatString == sapNumManager.DEFAULT_FORMAT_TIME)
				{
					var formatString /*String*/;
					var custNumFac/*CustomNumericFormatLocaleFactory*/ = _s_g_df.CustomNumericFormatLocaleFactory.getInstance();
					switch(formatString)
					{
						case sapNumManager.DEFAULT_FORMAT_SHORT_DATE:
							var sDateFac/*DefaultShortDateFormatLocaleFactory*/ = new _s_g_df.DefaultShortDateFormatLocaleFactory();
							numFormat = new sap.common.globalization.numericFormat.FT(sDateFac,custNumFac);
							formatString = sDateFac.getDefaultDateFormat();
							break;
						case sapNumManager.DEFAULT_FORMAT_LONG_DATE:
							var lDateFac/*DefaultDateFormatLocaleFactory*/ = new _s_g_df.DefaultDateFormatLocaleFactory();
							numFormat = new sap.common.globalization.numericFormat.FT(lDateFac,custNumFac);
							formatString = lDateFac.getDefaultDateFormat();
							break;
						case sapNumManager.DEFAULT_FORMAT_DATE_TIME:
							var dTimeFac/*DefaultDateTimeFormatLocaleFactory*/ = new _s_g_df.DefaultDateTimeFormatLocaleFactory();
							numFormat = new sap.common.globalization.numericFormat.FT(dTimeFac,custNumFac);
							formatString = dTimeFac.getDefaultDateFormat();
							break;
						case sapNumManager.DEFAULT_FORMAT_TIME:
						default:
							var timeFac/*DefaultTimeFormatLocaleFactory*/ = new _s_g_df.DefaultTimeFormatLocaleFactory();
							numFormat = new sap.common.globalization.numericFormat.FT(timeFac,custNumFac);
							formatString = timeFac.getDefaultDateFormat();
					}
					
					// parse the default format string.
					numFormat.parse(formatString);
				}
				else if (formatString==sapNumManager.DEFAULT_FORMAT_NUMBER)
				{
					var numericFormatFactory/*DefaultNumericFormatLocaleFactory*/ = new _s_g_df.DefaultNumericFormatLocaleFactory();
					var numericFormatFactory;
					var numFormatString /*String */ = numericFormatFactory.getDefaultNumericFormat();
					numFormat = new sap.common.globalization.numericFormat.FT(_s_g_df.CustomDateFormatLocaleFactory.getInstance(), numericFormatFactory);
					numFormat.parse(numFormatString);
				}
				else if (_s_g_df.DefaultCurrencyFormatLocaleFactory.isDefaultCurrencyFormat(formatString))
				{
					var currencyFormatFactory/*DefaultCurrencyFormatLocaleFactory*/ = new _s_g_df.DefaultCurrencyFormatLocaleFactory(formatString);
					var currencyFormatString/*String*/ = currencyFormatFactory.getDefaultCurrencyFormat();
		
					numFormat = new sap.common.globalization.numericFormat.FT(_s_g_df.CustomDateFormatLocaleFactory.getInstance(), currencyFormatFactory);
					numFormat.parse(currencyFormatString);
				}
				else if (formatString == sapNumManager.DEFAULT_FORMAT_BOOLEAN)
				{
					numFormat = new sap.common.globalization.numericFormat.FTBoolean();				
					numFormat.parse(formatString);
				}
				else
				{
					numFormat = new sap.common.globalization.numericFormat.FT();				
					numFormat.parse(formatString);
				}
				// cache the format
				sapNumManager._formats[formatString] = numFormat;
			}
		
			return numFormat;									
		};
	
		/**
		 * @Deprecated
		 * 	Applies the numeric format to the value and returns the resultant String.
		 * 
		 * 	@param value			The value to format.
		 * 	@param formatString		The string representing the numeric formatting for the spreadsheet cell.
		 * 							Matches the value found in Excel under Format -> Cells -> Number -> Custom.
		 */
	
		sapNumManager.format = function(value /*Object*/, formatString /*String*/) /*String*/ {
			var numericFormat /* FT */  = sapNumManager.getFormat(formatString);
			if (numericFormat == null) {													// no NumericFormat; return raw value
				return value;
			}
			return numericFormat.display(value);
		};
		
		/**
		 * This method will format the @param value with the @param formatString and return the result string.
		 * The @param formatString will only be applied to the @param value when the @param value is Number or
		 * Numeric String (exclude blank string) or Boolean String and the @param formatString is a valid Excel format string.
		 * 
		 * @param value
		 * @param formatString
		 * @return formatted text
		 * 
		 */
		sapNumManager.formatToText = function(value /*Object*/, formatString /*String*/)/*String*/
		{
			return this._format(value, formatString);
		};
		
		/**
		 * This method will format the @param value with the @param formatString and return the result string.
		 * The @param formatString will only be applied to the @param value when the @param value is Number or
		 * Numeric String (exclude blank string) or Boolean String and the @param formatString is a valid Excel format string.
		 * 
		 * The returned string is an html string.
		 * If the @param formatString contains information of negative color, the result string will include html tag for displaying
		 * style. And all the html entities in the @param value will be escaped in the result string.
		 * 
		 * @param value
		 * @param formatString
		 * @return formatted html text
		 * 
		 */
		sapNumManager.formatToHtmlText = function(value /*object*/ , formatString /*String*/) /*String*/
		{
			return this._format(value, formatString, true);
		};
		
		/**
		 * @private
		 * Refactored from DataUtils.getFormattedString which is used only for charts tooltips.
		 * 
		 * @param value
		 * @param formatString
		 * @param htmlText
		 * @return 
		 * 
		 */
		sapNumManager._format =function(value/* Object*/, formatString /*String*/, htmlText/*Boolean*/ )/*String*/
		{
			htmlText  = htmlText || false; // default value is false.
			 
			var nonNullRawText/*Object*/ = value == null ? '' : value;
			var ft/*FT*/ = sapNumManager.getFormat(formatString);
			var applyColor/*Boolean*/ = false;
			var color/*Number*/ = NaN;
			
			var formattedText/*String*/ = String(nonNullRawText);
			
			// format with FT if exists
			if (ft)
			{
				// reset FT color
				ft.color = undefined;
				// format numeric data
				if (sap.common.globalization.utils.NumberUtil.isNumericValue(nonNullRawText))
				{
					formattedText = ft.display(Number(nonNullRawText));
					color = Number(ft.color);
				}
				// format boolean data
				else if (sap.common.globalization.utils.BooleanUtil.isBooleanValue(nonNullRawText) && sap.common.globalization.numericFormat.FTUtil.isBooleanFT(ft)) 
				{
					formattedText = ft.display(nonNullRawText);
				}
			}
			
			// format to the html text
			if (htmlText)
			{
				formattedText = sap.common.globalization.utils.StringUtil.escapeEntities(formattedText);
				
				// check wether to apply the color to the formatted string
				// the color need html support
				if (!isNaN(color))
				{
					formattedText = sap.common.globalization.utils.DataFormatUtils.decorateColorHTML(formattedText, color);	
				}
			}
			
			return formattedText;
		};
		
		// pass the JS gen locale info to customize the Flocalization symbols.
		
		/*{longMonths: {_MonthStrings },
		  shortMonths: {_shortMonthStrings},
		  longWeekDays: {_DayStrings},
		  shortWeekDays: {_shortDayStrings},
		  dtCodes: {_DateTimeCodes},
		  numSeparators: {_NumericStrings},
		  dtSeparators: {_DateTimeStrings},
		  currencySymbol: {_CurrencySymbol},
		  amPms: {_AmPms},
		  };
		 */
		sapNumManager.setCustomizedLocaleInfo = function(value){
			
			sap.common.globalization.numericFormat.FLocalization.getInstance().setCustomizedLocaleInfo(value);
			
		}; 
		
		//  default is null
		sapNumManager.currentLocale = null;
		
		// Set page or app PVL.
		sapNumManager.setPVL = function(value){
			
			sap.common.globalization.GlobalizationPreference.getInstance().setPvl(value);

			if(!sapNumManager.currentLocale || sapNumManager.currentLocale != value)
			{
				sapNumManager.currentLocale  = value;
				sapNumManager.setCustomizedLocaleInfo(null); // set default locale info
			} 
			
		}; 

})();(function(){

	sap.common.globalization.declare("sap.common.globalization.GlobalizationPreference");

	sap.common.globalization.require("sap.common.globalization.NumericFormatManager");
	
	sap.common.globalization.GlobalizationPreference =function()
	{
		// TODO FlashVarUtil
		// this._preferredViewingLocale = FlashVarUtil.getFlashVarFromChildToParent("XL_PVL",
		this.__className = "sap.common.globalization.GlobalizationPreference";
		// this._preferredViewingLocale = 'en'; // TODO  
		this._preferredViewingLocale = null;  //= sap.common.globalization.NumericFormatManager.XL_PVL;
	}
	
	var _s_g_defaultFormat_gPreference = sap.common.globalization.GlobalizationPreference;
	_s_g_defaultFormat_gPreference._instance /*GlobalizationPreference;*/ = null; // TODO default GlobalizationPreference value null. 
	
	_s_g_defaultFormat_gPreference.DOCUMENT_LOCALE/*String*/ = "en"; //TODO set default DOCUMENT_LOCALE to en
	
	
	_s_g_defaultFormat_gPreference.getInstance = function()/*GlobalizationPreference*/
	{
		if (!_s_g_defaultFormat_gPreference._instance)
		{
			_s_g_defaultFormat_gPreference._instance = new sap.common.globalization.GlobalizationPreference();
		}
		return _s_g_defaultFormat_gPreference._instance;
	}
	
	_s_g_defaultFormat_gPreference.resetInstance =function()/*void*/
	{
		_s_g_defaultFormat_gPreference._instance = new sap.common.globalization.GlobalizationPreference();
	}
	
	/**
	 * PVL locale.
	 */
	_s_g_defaultFormat_gPreference.prototype.pvl =function()/*String*/
	{
		return this._preferredViewingLocale;
	}
	
	/**
	 * @private
	 * Internal usage, mainly for test. It's not a setter since
	 * mxmlc contains a bug which will break the compilation...
	 */
	_s_g_defaultFormat_gPreference.prototype.setPvl = function(value/*String*/)/*void*/
	{
		if (value != this._preferredViewingLocale)
		{
			this._preferredViewingLocale = value;
		}
	}


	
	/**
	 * PVL dominant language.
	 */
	_s_g_defaultFormat_gPreference.prototype.pvlIsoLanguageCode = function()/*String*/
	{
		return this._getIsoLanguageCode(this.pvl());
	}
	
	/**
	 * Locale of the document, e.g. the locale when generating the SWF. 
	 */
	_s_g_defaultFormat_gPreference.prototype.documentLocale =function()/*String*/
	{
		return _s_g_defaultFormat_gPreference.DOCUMENT_LOCALE;
	}
	
	/**
	 * document language.
	 */
	_s_g_defaultFormat_gPreference.prototype.documentIsoLanguageCode=function()/*String*/
	{
		return this._getIsoLanguageCode(_s_g_defaultFormat_gPreference.DOCUMENT_LOCALE);
	} 
	
	/**
	 * Get the language code of the locale string.
	 * 
	 * @param locale locale string
	 * @return 
	 */
	_s_g_defaultFormat_gPreference.prototype._getIsoLanguageCode =function(locale/*String*/)/*String*/
	{
		if (locale)
		{
			return String(locale).split("_")[0];
		}
		return locale;
	}

})();

(function(){

	sap.common.globalization.declare("sap.common.globalization.GlobalizationBooleanConstant");

	var _s_g_gBooleanConstant = sap.common.globalization.GlobalizationBooleanConstant;
	// TODO set default booleanString with hard-code value, in case it support resource bundle in the future, port ResourceStringManager also.
	// private static var _resourceManager:IResourceStringManager = ResourceStringManager.getInstance();
// 		
	// private static const BOOLEAN_STRING_TRUE:String = "BOOLEAN_STRING_TRUE";
// 		
	// private static const BOOLEAN_STRING_FALSE:String = "BOOLEAN_STRING_FALSE";
	
	/**
	 * Get the globalized strings for boolean.
	 * Always an array that contains the boolean string retrieved from resource manager.
	 * 
	 * @return 
	 * 
	 */
	_s_g_gBooleanConstant.getBooleanStrings = function()/*Array*/
	{
		// var trueString:String = _resourceManager.getString(ResourceStringConstant.DEFULT_BUNDLE_NAME, BOOLEAN_STRING_TRUE);
		// var falseString:String = _resourceManager.getString(ResourceStringConstant.DEFULT_BUNDLE_NAME, BOOLEAN_STRING_FALSE);
		// return [String(trueString), String(falseString)];
		return ["TRUE", "FALSE"];
	}

})();(function(){

	sap.common.globalization.declare("sap.common.globalization.GlobalizationNumericConstant");
	sap.common.globalization.require("sap.common.globalization.GlobalizationPreference");
		
	sap.common.globalization.GlobalizationNumericConstant =function(){
		this.__className = "sap.common.globalization.GlobalizationNumericConstant";
		
	}
	
	var _s_g_gNumericConstant = sap.common.globalization.GlobalizationNumericConstant;
	
	// keys to fetch the format string
	_s_g_gNumericConstant._FORMAT_TYPE_NUMBER/*String*/ = "number";
	_s_g_gNumericConstant._FORMAT_TYPE_CURRENCY/*String*/ = "currency";
	
	// Keys for numeric separators
	_s_g_gNumericConstant._KEY_TYPE_NUMERIC/*String*/ = "numeric";
	_s_g_gNumericConstant._KEY_TOKEN_DISPLAY_THOUSANDS_SEPARATOR/*String*/ = "displayThousandsSeparator";
	_s_g_gNumericConstant._KEY_TOKEN_DISPLAY_DECIMAL_SEPARATOR/*String*/ = "displayDecimalSeparator";
	
	_s_g_gNumericConstant._DEFAULT_FORMAT_STRING/*Object*/ =         {
        "af":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00"
        },
        "af_ZA": {},
        "ar":             {
            "number": "#,##0.###;#,##0.###-",
            "currency": "¤ #,##0.00;¤ #,##0.00-"
        },
        "ar_AE": {},
        "ar_BH": {},
        "ar_DZ": {},
        "ar_EG": {},
        "ar_IQ": {},
        "ar_JO": {},
        "ar_KW": {},
        "ar_LB": {},
        "ar_LY": {},
        "ar_MA": {},
        "ar_OM": {},
        "ar_QA":             {
            "number": "#0.###;#0.###-",
            "currency": "¤#0.00"
        },
        "ar_SA":             {
            "number": "#0.###;#0.###-",
            "currency": "¤#0.00"
        },
        "ar_SY":             {
            "number": "#0.###;#0.###-",
            "currency": "¤#0.00"
        },
        "ar_TN":             {
            "number": "#0.###;#0.###-",
            "currency": "¤#0.00"
        },
        "ar_YE":             {
            "number": "#0.###;#0.###-",
            "currency": "¤#0.00"
        },
        "az":             {
            "number": "#,##0.###",
            "currency": "¤ #,##0.00"
        },
        "az_AZ": {},
        "be":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00"
        },
        "be_BY": {},
        "bg":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "bg_BG": {},
        "bn":             {
            "number": "#,##,##0.###",
            "currency": "#,##,##0.00¤;(#,##,##0.00¤)"
        },
        "bn_IN": {},
        "bs":             {
            "number": "#,##0.###",
            "currency": "¤ #,##0.00"
        },
        "bs_BA": {},
        "ca":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "ca_ES": {},
        "cs":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "cs_CZ": {},
        "cy":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00"
        },
        "cy_GB": {},
        "da":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "da_DK": {},
        "de":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "de_AT": {"currency": "¤ #,##0.00"},
        "de_CH": {"currency": "¤ #,##0.00;¤-#,##0.00"},
        "de_DE": {},
        "de_LI": {"currency": "¤ #,##0.00"},
        "de_LU": {},
        "el":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "el_GR": {},
        "en":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00;(¤#,##0.00)"
        },
        "en_AU": {"currency": "¤#,##0.00"},
        "en_BZ": {"currency": "¤#,##0.00"},
        "en_CA": {},
        "en_GB": {"currency": "¤#,##0.00"},
        "en_IE": {"currency": "¤#,##0.00"},
        "en_JM": {"currency": "¤#,##0.00"},
        "en_NZ": {"currency": "¤#,##0.00"},
        "en_PH": {},
        "en_TT": {"currency": "¤#,##0.00"},
        "en_US": {},
        "en_VI": {},
        "en_ZA": {"currency": "¤#,##0.00"},
        "en_ZW": {"currency": "¤#,##0.00"},
        "es":             {
            "number": "#,##0.###",
            "currency": "¤ #,##0.00"
        },
        "es_AR": {},
        "es_BO": {},
        "es_CL": {"currency": "¤#,##0.00;¤-#,##0.00"},
        "es_CO": {},
        "es_CR": {},
        "es_DO": {},
        "es_EC": {"currency": "¤#,##0.00;¤-#,##0.00"},
        "es_ES": {},
        "es_GT": {},
        "es_HN": {},
        "es_MX": {},
        "es_NI": {},
        "es_PA": {},
        "es_PE": {},
        "es_PR": {},
        "es_PY": {"currency": "¤ #,##0.00;¤ -#,##0.00"},
        "es_SV": {},
        "es_UY": {"currency": "¤ #,##0.00;(¤ #,##0.00)"},
        "es_VE": {"currency": "¤#,##0.00;¤-#,##0.00"},
        "et":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "et_EE": {},
        "eu":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "eu_ES": {},
        "fa":             {
            "number": "#,##0.###;'-#,##0.###'",
            "currency": "#,##0.00 ¤;'-#,##0.00' ¤"
        },
        "fa_IR": {},
        "fi":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "fi_FI": {},
        "fo":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00;¤-#,##0.00"
        },
        "fo_FO": {},
        "fr":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "fr_BE": {},
        "fr_CA": {"currency": "#,##0.00 ¤;(#,##0.00 ¤)"},
        "fr_CH": {"currency": "¤ #,##0.00;¤-#,##0.00"},
        "fr_FR": {},
        "fr_LU": {},
        "fr_MC": {},
        "gl":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "gl_ES": {},
        "gu":             {
            "number": "#,##,##0.###",
            "currency": "¤ #,##,##0.00"
        },
        "gu_IN": {},
        "he":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "he_IL": {},
        "hi":             {
            "number": "#,##,##0.###",
            "currency": "¤ #,##,##0.00"
        },
        "hi_IN": {},
        "hr":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "hr_HR": {},
        "hu":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "hu_HU": {},
        "hy":             {
            "number": "#0.###",
            "currency": "#0.00 ¤"
        },
        "hy_AM": {},
        "id":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00"
        },
        "id_ID": {},
        "is":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "is_IS": {},
        "it":             {
            "number": "#,##0.###",
            "currency": "¤ #,##0.00"
        },
        "it_CH": {"currency": "¤ #,##0.00;¤-#,##0.00"},
        "it_IT": {},
        "ja":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00"
        },
        "ja_JP": {},
        "ka":             {
            "number": "#,##0.###",
            "currency": "¤ #,##0.00"
        },
        "ka_GE": {},
        "kk":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "kk_KZ": {},
        "kn":             {
            "number": "#,##,##0.###",
            "currency": "¤ #,##,##0.00"
        },
        "kn_IN": {},
        "ko":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00"
        },
        "ko_KR": {},
        "kok":             {
            "number": "#,##,##0.###",
            "currency": "¤ #,##,##0.00"
        },
        "kok_IN": {},
        "lt":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "lt_LT": {},
        "lv":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "lv_LV": {},
        "mk":             {
            "number": "#,##0.###;(#,##0.###)",
            "currency": "¤ #,##0.00"
        },
        "mk_MK": {},
        "ml":             {
            "number": "#,##,##0.###",
            "currency": "#,##,##0.00¤"
        },
        "ml_IN": {},
        "mn":             {
            "number": "#,##0.###",
            "currency": "¤ #,##0.00"
        },
        "mn_MN": {},
        "mr":             {
            "number": "#,##,##0.###",
            "currency": "¤ #,##,##0.00"
        },
        "mr_IN": {},
        "ms":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00;(¤#,##0.00)"
        },
        "ms_BN": {"currency": "¤ #,##0.00"},
        "ms_MY": {},
        "mt":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00"
        },
        "mt_MT": {},
        "nb":             {
            "number": "#,##0.###",
            "currency": "¤ #,##0.00"
        },
        "nb_NO": {},
        "nl":             {
            "number": "#,##0.###",
            "currency": "¤ #,##0.00;¤ #,##0.00-"
        },
        "nl_BE": {"currency": "#,##0.00 ¤"},
        "nl_NL": {},
        "nn":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "nn_NO": {},
        "pa":             {
            "number": "#,##,##0.###",
            "currency": "¤ #,##,##0.00"
        },
        "pa_IN": {},
        "pl":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "pl_PL": {},
        "pt":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00;(¤#,##0.00)"
        },
        "pt_BR": {},
        "pt_PT": {"currency": "#,##0.00 ¤"},
        "ro":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "ro_RO": {},
        "ru":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "ru_RU": {},
        "se":             {
            "number": "#,##0.###",
            "currency": "¤ #,##0.00"
        },
        "se_NO": {},
        "sk":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "sk_SK": {},
        "sl":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "sl_SI": {},
        "sq":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00"
        },
        "sq_AL": {},
        "sr":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "sr_BA": {},
        "sr_CS": {},
        "sv":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "sv_FI": {},
        "sv_SE": {},
        "sw":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "sw_KE": {"currency": "¤#,##0.00"},
        "syr":             {
            "number": "#,##0.###",
            "currency": "¤ #,##0.00"
        },
        "syr_SY": {},
        "ta":             {
            "number": "#,##,##0.###",
            "currency": "¤ #,##,##0.00"
        },
        "ta_IN": {},
        "te":             {
            "number": "#,##,##0.###",
            "currency": "¤ #,##,##0.00"
        },
        "te_IN": {},
        "th":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00;¤-#,##0.00"
        },
        "th_TH": {},
        "tn":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00"
        },
        "tn_ZA": {},
        "tr":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "tr_TR": {},
        "uk":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "uk_UA": {},
        "uz":             {
            "number": "#,##0.###",
            "currency": "¤ #,##0.00"
        },
        "uz_UZ": {},
        "vi":             {
            "number": "#,##0.###",
            "currency": "#,##0.00 ¤"
        },
        "vi_VN": {},
        "xh":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00"
        },
        "xh_ZA": {},
        "zh":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00"
        },
        "zh_CN": {},
        "zh_HK": {},
        "zh_MO": {},
        "zh_SG": {},
        "zh_TW": {},
        "zu":             {
            "number": "#,##0.###",
            "currency": "¤#,##0.00"
        },
        "zu_ZA": {}
    };
	
	_s_g_gNumericConstant._RESOURCE_MAP/*Object*/ =  {
        "af": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "af_ZA": {"numeric": {}},
        "ar": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "ar_AE": {"numeric": {}},
        "ar_BH": {"numeric": {}},
        "ar_DZ": {"numeric": {}},
        "ar_EG": {"numeric": {}},
        "ar_IQ": {"numeric": {}},
        "ar_JO": {"numeric": {}},
        "ar_KW": {"numeric": {}},
        "ar_LB": {"numeric": {}},
        "ar_LY": {"numeric": {}},
        "ar_MA": {"numeric": {}},
        "ar_OM": {"numeric": {}},
        "ar_QA": {"numeric": {}},
        "ar_SA": {"numeric": {}},
        "ar_SY": {"numeric": {}},
        "ar_TN": {"numeric": {}},
        "ar_YE": {"numeric": {}},
        "az": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "az_AZ": {"numeric": {}},
        "be": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "be_BY": {"numeric": {}},
        "bg": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "bg_BG": {"numeric": {}},
        "bn": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "bn_IN": {"numeric": {}},
        "bs": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "bs_BA": {"numeric": {}},
        "ca": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "ca_ES": {"numeric": {}},
        "cs": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "cs_CZ": {"numeric": {}},
        "cy": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "cy_GB": {"numeric": {}},
        "da": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "da_DK": {"numeric": {}},
        "de": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "de_AT": {"numeric": {}},
        "de_CH": {"numeric":             {
            "displayThousandsSeparator": "'",
            "displayDecimalSeparator": "."
        }},
        "de_DE": {"numeric": {}},
        "de_LI": {"numeric":             {
            "displayThousandsSeparator": "'",
            "displayDecimalSeparator": "."
        }},
        "de_LU": {"numeric": {}},
        "el": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "el_GR": {"numeric": {}},
        "en": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "en_AU": {"numeric": {}},
        "en_BZ": {"numeric": {}},
        "en_CA": {"numeric": {}},
        "en_GB": {"numeric": {}},
        "en_IE": {"numeric": {}},
        "en_JM": {"numeric": {}},
        "en_NZ": {"numeric": {}},
        "en_PH": {"numeric": {}},
        "en_TT": {"numeric": {}},
        "en_US": {"numeric": {}},
        "en_VI": {"numeric": {}},
        "en_ZA": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "en_ZW": {"numeric": {}},
        "es": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "es_AR": {"numeric": {}},
        "es_BO": {"numeric": {}},
        "es_CL": {"numeric": {}},
        "es_CO": {"numeric": {}},
        "es_CR": {"numeric": {}},
        "es_DO": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "es_EC": {"numeric": {}},
        "es_ES": {"numeric": {}},
        "es_GT": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "es_HN": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "es_MX": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "es_NI": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "es_PA": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "es_PE": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "es_PR": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "es_PY": {"numeric": {}},
        "es_SV": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "es_UY": {"numeric": {}},
        "es_VE": {"numeric": {}},
        "et": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "et_EE": {"numeric": {}},
        "eu": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "eu_ES": {"numeric": {}},
        "fa": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "fa_IR": {"numeric": {}},
        "fi": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "fi_FI": {"numeric": {}},
        "fo": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "fo_FO": {"numeric": {}},
        "fr": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "fr_BE": {"numeric": {"displayThousandsSeparator": "."}},
        "fr_CA": {"numeric": {}},
        "fr_CH": {"numeric":             {
            "displayThousandsSeparator": "'",
            "displayDecimalSeparator": "."
        }},
        "fr_FR": {"numeric": {}},
        "fr_LU": {"numeric": {"displayThousandsSeparator": "."}},
        "fr_MC": {"numeric": {}},
        "gl": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "gl_ES": {"numeric": {}},
        "gu": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "gu_IN": {"numeric": {}},
        "he": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "he_IL": {"numeric": {}},
        "hi": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "hi_IN": {"numeric": {}},
        "hr": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "hr_HR": {"numeric": {}},
        "hu": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "hu_HU": {"numeric": {}},
        "hy": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "hy_AM": {"numeric": {}},
        "id": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "id_ID": {"numeric": {}},
        "is": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "is_IS": {"numeric": {}},
        "it": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "it_CH": {"numeric":             {
            "displayThousandsSeparator": "'",
            "displayDecimalSeparator": "."
        }},
        "it_IT": {"numeric": {}},
        "ja": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "ja_JP": {"numeric": {}},
        "ka": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "ka_GE": {"numeric": {}},
        "kk": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "kk_KZ": {"numeric": {}},
        "kn": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "kn_IN": {"numeric": {}},
        "ko": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "ko_KR": {"numeric": {}},
        "kok": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "kok_IN": {"numeric": {}},
        "lt": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "lt_LT": {"numeric": {}},
        "lv": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "lv_LV": {"numeric": {}},
        "mk": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "mk_MK": {"numeric": {}},
        "ml": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "ml_IN": {"numeric": {}},
        "mn": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "mn_MN": {"numeric": {}},
        "mr": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "mr_IN": {"numeric": {}},
        "ms": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "ms_BN": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "ms_MY": {"numeric": {}},
        "mt": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "mt_MT": {"numeric": {}},
        "nb": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "nb_NO": {"numeric": {}},
        "nl": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "nl_BE": {"numeric": {}},
        "nl_NL": {"numeric": {}},
        "nn": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "nn_NO": {"numeric": {}},
        "pa": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "pa_IN": {"numeric": {}},
        "pl": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "pl_PL": {"numeric": {}},
        "pt": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "pt_BR": {"numeric": {}},
        "pt_PT": {"numeric": {"displayThousandsSeparator": " "}},
        "ro": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "ro_RO": {"numeric": {}},
        "ru": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "ru_RU": {"numeric": {}},
        "se": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "se_NO": {"numeric": {}},
        "sk": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "sk_SK": {"numeric": {}},
        "sl": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "sl_SI": {"numeric": {}},
        "sq": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "sq_AL": {"numeric": {}},
        "sr": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "sr_BA": {"numeric": {}},
        "sr_CS": {"numeric": {}},
        "sv": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "sv_FI": {"numeric": {}},
        "sv_SE": {"numeric": {}},
        "sw": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "sw_KE": {"numeric": {}},
        "syr": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "syr_SY": {"numeric": {}},
        "ta": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "ta_IN": {"numeric": {}},
        "te": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "te_IN": {"numeric": {}},
        "th": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "th_TH": {"numeric": {}},
        "tn": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "tn_ZA": {"numeric": {}},
        "tr": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "tr_TR": {"numeric": {}},
        "uk": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "uk_UA": {"numeric": {}},
        "uz": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "uz_UZ": {"numeric": {}},
        "vi": {"numeric":             {
            "displayThousandsSeparator": ".",
            "displayDecimalSeparator": ","
        }},
        "vi_VN": {"numeric": {}},
        "xh": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "xh_ZA": {"numeric": {}},
        "zh": {"numeric":             {
            "displayThousandsSeparator": ",",
            "displayDecimalSeparator": "."
        }},
        "zh_CN": {"numeric": {}},
        "zh_HK": {"numeric": {}},
        "zh_MO": {"numeric": {}},
        "zh_SG": {"numeric": {}},
        "zh_TW": {"numeric": {}},
        "zu": {"numeric":             {
            "displayThousandsSeparator": " ",
            "displayDecimalSeparator": ","
        }},
        "zu_ZA": {"numeric": {}}
    };
	
	_s_g_gNumericConstant.getParseThousandSeparator = function(locale/*String*/ )/*String*/
	{
		return ",";
	}
	
	_s_g_gNumericConstant.getDisplayThousandSeparator =function(locale/*String*/ )/*String*/
	{
		var locale = locale || null; // default value is null.
		if (locale)
		{
			// if explicitly pass in, then try to fetch it.
			if (_s_g_gNumericConstant._resourceExist(locale, _s_g_gNumericConstant._KEY_TYPE_NUMERIC, _s_g_gNumericConstant._KEY_TOKEN_DISPLAY_THOUSANDS_SEPARATOR))
			{
				return _s_g_gNumericConstant.getNumericResource(locale, _s_g_gNumericConstant._KEY_TYPE_NUMERIC, _s_g_gNumericConstant._KEY_TOKEN_DISPLAY_THOUSANDS_SEPARATOR);
			} else {
				return null;
			}
		}
		return _s_g_gNumericConstant._getAppropriateNumericResource(_s_g_gNumericConstant._KEY_TYPE_NUMERIC, _s_g_gNumericConstant._KEY_TOKEN_DISPLAY_THOUSANDS_SEPARATOR);
	}
	
	_s_g_gNumericConstant.getParseDecimalSeparator =function(locale/*String*/)/*String*/
	{
		return ".";
	}
	
	_s_g_gNumericConstant.getDisplayDecimalSeparator =function(locale/*String*/ )/*String*/
	{
		var locale = locale || null;
		if (locale)
		{
			// if explicitly pass in, then try to fetch it.
			if (_s_g_gNumericConstant._resourceExist(locale, _s_g_gNumericConstant._KEY_TYPE_NUMERIC, _s_g_gNumericConstant._KEY_TOKEN_DISPLAY_DECIMAL_SEPARATOR))
			{
				return _s_g_gNumericConstant.getNumericResource(locale, _s_g_gNumericConstant._KEY_TYPE_NUMERIC, _s_g_gNumericConstant._KEY_TOKEN_DISPLAY_DECIMAL_SEPARATOR);
			} else {
				return null;
			}
		}
		return _s_g_gNumericConstant._getAppropriateNumericResource(_s_g_gNumericConstant._KEY_TYPE_NUMERIC, _s_g_gNumericConstant._KEY_TOKEN_DISPLAY_DECIMAL_SEPARATOR);
	}
	
	_s_g_gNumericConstant.getParseCurrencySymbol =function()/*String*/
	{
		return "¤";
	}
	
	_s_g_gNumericConstant.getDefaultNumberFormat=function(locale/*String*/)/*String*/
	{
		var locale = locale || null;
		
		if (locale)
		{
			if (_s_g_gNumericConstant._formatExist(locale, _s_g_gNumericConstant._FORMAT_TYPE_NUMBER))
			{
				return _s_g_gNumericConstant._getNumericFormat(locale, _s_g_gNumericConstant._FORMAT_TYPE_NUMBER);
			} else {
				return null;
			}
		}
		return _s_g_gNumericConstant._getAppropriateNumericFormat(_s_g_gNumericConstant._FORMAT_TYPE_NUMBER);
	}
	
	_s_g_gNumericConstant.getDefaultCurrencyFormat =function(locale/*String*/ )/*String*/
	{
		var locale = locale || null;
		
		if (locale)
		{
			if (_s_g_gNumericConstant._formatExist(locale, _s_g_gNumericConstant._FORMAT_TYPE_CURRENCY))
			{
				return _s_g_gNumericConstant._getNumericFormat(locale, _s_g_gNumericConstant._FORMAT_TYPE_CURRENCY);
			} else {
				return null;
			}
		}
		return _s_g_gNumericConstant._getAppropriateNumericFormat(_s_g_gNumericConstant._FORMAT_TYPE_CURRENCY);
	}
	
	/**
	 * Get the actual locale for the default currency format.
	 */
	_s_g_gNumericConstant.getActualLocaleForDefaultCurrencyFormat =function()/*String*/
	{
		return _s_g_gNumericConstant.getActualLocaleForNumerFormat(_s_g_gNumericConstant._FORMAT_TYPE_CURRENCY);
	}
	
	_s_g_gNumericConstant.getActualLocaleForDefaultNumberFormat=function()/*String*/
	{
		return _s_g_gNumericConstant.getActualLocaleForNumerFormat(_s_g_gNumericConstant._FORMAT_TYPE_NUMBER);
	}
	
	_s_g_gNumericConstant.getActualLocaleForNumerFormat=function(type/*String*/)/*String*/
	{
		// first, try to fetch the resource according to pvl locale
		var pvlLocale/*String*/ = sap.common.globalization.GlobalizationPreference.getInstance().pvl();
		if (_s_g_gNumericConstant._formatExist(pvlLocale, type))
		{
			return pvlLocale;
		}
		
		// second, try to fetch the resource according to pvl dominant language
		var pvlIsoLanguageCode/*String*/ = sap.common.globalization.GlobalizationPreference.getInstance().pvlIsoLanguageCode();
		if (_s_g_gNumericConstant._formatExist(pvlIsoLanguageCode, type))
		{
			return pvlIsoLanguageCode;
		}
		
		// third, try to fetch the resource according to document locale
		var documentLocale/*String*/ = sap.common.globalization.GlobalizationPreference.getInstance().documentLocale();
		if (_s_g_gNumericConstant._formatExist(documentLocale, type))
		{
			return documentLocale;
		}
		
		// fourth, try to fetch the resource according to document language
		var documentIsoLanguageCode/*String*/ = sap.common.globalization.GlobalizationPreference.getInstance().documentIsoLanguageCode();
		if (_s_g_gNumericConstant._formatExist(documentIsoLanguageCode, type))
		{
			return documentIsoLanguageCode;
		}
		
		return "en";
	}
	
	_s_g_gNumericConstant._getAppropriateNumericFormat=function(type/*String*/)/*String*/
	{
		return _s_g_gNumericConstant._getNumericFormat(_s_g_gNumericConstant.getActualLocaleForNumerFormat(type), type);
	}
	
	_s_g_gNumericConstant._formatExist =function(locale/*String*/, type/*String*/)/*Boolean*/
	{
		return (locale && type && _s_g_gNumericConstant._DEFAULT_FORMAT_STRING[locale] && _s_g_gNumericConstant._DEFAULT_FORMAT_STRING[locale][type]);
	}
	
	_s_g_gNumericConstant._getNumericFormat =function(locale/*String*/, type/*String*/)/*String*/
	{
		return _s_g_gNumericConstant._DEFAULT_FORMAT_STRING[locale][type];
	}
	
	/**
	 * A standard method to fetch appropriate numeric resources. It will follow a fall back
	 * strategy to get the resource.
	 * 
	 * @param type type of the resource
	 * @param resourceKey key of the resource
	 * 
	 * @return resource string or null if not found.
	 */
	_s_g_gNumericConstant._getAppropriateNumericResource =function(type/*String*/, resourceKey/*String*/)/*String*/
	{
		// first, try to fetch the resource according to pvl locale
		var pvlLocale/*String*/ = sap.common.globalization.GlobalizationPreference.getInstance().pvl();
		if (_s_g_gNumericConstant._resourceExist(pvlLocale, type, resourceKey))
		{
			return _s_g_gNumericConstant.getNumericResource(pvlLocale, type, resourceKey);
		}
		
		// second, try to fetch the resource according to pvl dominant language
		var pvlIsoLanguageCode/*String*/ = sap.common.globalization.GlobalizationPreference.getInstance().pvlIsoLanguageCode();
		if (_s_g_gNumericConstant._resourceExist(pvlIsoLanguageCode, type, resourceKey))
		{
			return _s_g_gNumericConstant.getNumericResource(pvlIsoLanguageCode, type, resourceKey);
		}
		
		// third, try to fetch the resource according to document locale
		var documentLocale/*String*/ = sap.common.globalization.GlobalizationPreference.getInstance().documentLocale();
		if (_s_g_gNumericConstant._resourceExist(documentLocale, type, resourceKey))
		{
			return _s_g_gNumericConstant.getNumericResource(documentLocale, type, resourceKey);
		}
		
		// fourth, try to fetch the resource according to document language
		var documentIsoLanguageCode/*String*/ = sap.common.globalization.GlobalizationPreference.getInstance().documentIsoLanguageCode();
		if (_s_g_gNumericConstant._resourceExist(documentIsoLanguageCode, type, resourceKey))
		{
			return _s_g_gNumericConstant.getNumericResource(documentIsoLanguageCode, type, resourceKey);
		}
		
		return _s_g_gNumericConstant.getNumericResource("en", type, resourceKey);
	}
	
	_s_g_gNumericConstant._resourceExist =function(locale/*String*/, type/*String*/, resourceKey/*String*/)/*Boolean*/
	{
		return (locale && type && resourceKey && _s_g_gNumericConstant._RESOURCE_MAP[locale]
			&& _s_g_gNumericConstant._RESOURCE_MAP[locale][type] && _s_g_gNumericConstant._RESOURCE_MAP[locale][type][resourceKey]);
	}
	
	_s_g_gNumericConstant.getNumericResource =function(locale/*String*/, type/*String*/, resourceKey/*String*/)/*String*/
	{
		return _s_g_gNumericConstant._RESOURCE_MAP[locale][type][resourceKey];
	}

})();(function()
{
	sap.common.globalization.declare("sap.common.globalization.GlobalizationDateConstant");
	sap.common.globalization.require("sap.common.globalization.GlobalizationPreference");
	
	sap.common.globalization.GlobalizationDateConstant = function()
	{
		this.__className = "sap.common.globalization.defaultFormat.GlobalizationDateConstant";
	}
	var _g_n_g = sap.common.globalization.GlobalizationDateConstant;
		// keys for retrieving different data type Default Format String
		_g_n_g.FORMAT_TYPE_SHORTDATE/*:String*/ = "shortDate",
		_g_n_g.FORMAT_TYPE_LONGDATE/*:String*/ = "longDate",
		_g_n_g.FORMAT_TYPE_DATE_TIME/*:String*/ = "dateTime",
		_g_n_g.FORMAT_TYPE_TIME/*:String*/ = "timeFormat",
		
		// Key for retrieving internal predefined tokens and separators
		_g_n_g.KEY_TYPE_DATE/*:String*/ = "date",
		_g_n_g.KEY_TYPE_TIME/*:String*/ = "time",
		
		_g_n_g.KEY_TOKEN_SHORT_DAY/*:String*/ = "shortDay",
		_g_n_g.KEY_TOKEN_LONG_DAY/*:String*/ = "longDay",
		_g_n_g.KEY_TOKEN_SHORT_MONTH/*:String*/ = "shortMonth",
		_g_n_g.KEY_TOKEN_LONG_MONTH/*:String*/ = "longMonth",
		_g_n_g.KEY_TOKEN_AM_PM/*:String*/ = "amPm",
		_g_n_g.KEY_DATE_SEPARATOR/*:String*/ = "dateSeparator",
		_g_n_g.KEY_TIME_SEPARATOR/*:String*/ = "timeSeparator",
		_g_n_g.KEY_TOKEN_ABBREV_ERA/*:String*/ = "eraAbbr",

		_g_n_g.DEFAULT_FORMAT_STRING/*:Object*/ = {
		    "af":     {
		        "longDate": "dddd dd MMMM yyyy;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy MMM d HH:mm:ss;@",
		        "timeFormat": "HH:mm:ss;@"
		    },
		    "af_ZA": {},
		    "ar":     {
		        "longDate": "dddd، d MMMM، yyyy;@",
		        "shortDate": "d/M/yyyy;@",
		        "dateTime":"dd/MM/yyyy h:mm:ss AM/PM;@",
		        "timeFormat":"h:mm:ss AM/PM;@"
		    },
		    "ar_AE": {},
		    "ar_BH": {},
		    "ar_DZ": {},
		    "ar_EG": {},
		    "ar_IQ": {},
		    "ar_JO": {},
		    "ar_KW": {},
		    "ar_LB": {},
		    "ar_LY": {},
		    "ar_MA": {},
		    "ar_OM": {},
		    "ar_QA": {},
		    "ar_SA": {},
		    "ar_SY": {},
		    "ar_TN": {},
		    "ar_YE": {},
		    "az":     {
		        "longDate": "dddd, d, MMMM, yyyy;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"d MMM, yyyy HH:mm:ss;@",
		        "timeFormat": "HH:mm:ss;@"
		    },
		    "az_AZ": {},
		    "be":     {
		        "longDate": "dddd, d MMMM yyyy;@",
		        "shortDate": "d.M.yy;@",
		        "dateTime":"d.M.yyyy HH.mm.ss;@",
		        "timeFormat": "HH.mm.ss;@"
		    },
		    "be_BY": {},
		    "bg":     {
		        "longDate": "dd MMMM yyyy, dddd;@",
		        "shortDate": "dd.MM.yy;@",
		        "dateTime":"dd.MM.yyyy HH:mm:ss;@",
		        "timeFormat": "HH:mm:ss;@"
		    },
		    "bg_BG": {},
		    "bn":     {
		        "longDate": "dddd, d MMMM, yyyy;@",
		        "shortDate": "d/M/yy;@",
		        "dateTime":"d MMM, yyyy h:mm:ss AM/PM;@",
		        "timeFormat": "h:mm:ss AM/PM;@"
		    },
		    "bn_IN": {},
		    "bs":     {
		        "longDate": "dddd, yyyy MMMM dd;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy MMM d HH:mm:ss;@",
		        "timeFormat": "HH:mm:ss;@"
		    },
		    "bs_BA": {},
		    "ca":     {
		        "longDate": 'dddd d "de" MMMM "de" yyyy;@',
		        "shortDate": "dd/MM/yy;@",
		        "dateTime":"dd/MM/yyyy H:mm:ss;@",
		        "timeFormat": "H:mm:ss;@"
		    },
		    "ca_ES": {},
		    "cs":     {
		        "longDate": "dddd, d. MMMM yyyy;@",
		        "shortDate": "d.M.yy;@",
		        "dateTime":"d.M.yyyy H:mm:ss;@",
		        "timeFormat": "H:mm:ss;@"
		    },
		    "cs_CZ": {},
		    "cy":     {
		        "longDate": "dddd, yyyy MMMM dd;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy MMM d h:mm:ss AM/PM;@",
		        "timeFormat": "h:mm:ss AM/PM;@"
		    },
		    "cy_GB": {},
		    "da":     {
		        "longDate": 'dddd "den" d. MMMM yyyy;@',
		        "shortDate": "dd/MM/yy;@",
		        "dateTime":"dd/MM/yyyy HH.mm.ss;@",
		        "timeFormat": "HH.mm.ss;@"
		    },
		    "da_DK": {},
		    "de":     {
		        "longDate": "dddd, d. MMMM yyyy;@",
		        "shortDate": "dd.MM.yy;@",
		        "dateTime": "dd.MM.yyyy HH:mm:ss;@",
		        "timeFormat": "HH:mm:ss;@"
		    },
		    "de_AT": {"longDate": "dddd, dd. MMMM yyyy;@"},
		    "de_CH": {},
		    "de_DE": {},
		    "de_LI": {},																																																													
		    "de_LU": {},
		    "el":     {
		        "longDate": "dddd, dd MMMM yyyy;@",
		        "shortDate": "dd/MM/yyyy;@",
		        "dateTime":"dd MMM yyyy h:mm:ss AM/PM;@",
		        "timeFormat": "h:mm:ss AM/PM;@"
		    },
		    "el_GR": {},
		    "en":     {
		        "longDate": "dddd, MMMM d, yyyy;@",
		        "shortDate": "M/d/yy;@",
		        "dateTime": "MMM d, yyyy h:mm:ss AM/PM;@",
		        "timeFormat": "h:mm:ss AM/PM;@"
		    },
		    "en_AU":     {
		        "longDate": "dddd, d MMMM yyyy;@",
		        "shortDate": "d/MM/yy;@",
		        "dateTime": "dd/MM/yyyy h:mm:ss AM/PM;@"
		    },
		    "en_BZ":     {
		        "dateTime": "dd-MMM-yyyy h:mm:ss AM/PM;@"
		    },
		    "en_CA": {
		    	"shortDate": "yy-MM-dd;@",
		    	"dateTime": "yyyy-MM-dd h:mm:ss AM/PM;@"
		    },
		    "en_GB":     {
		        "longDate": "dddd, d MMMM yyyy;@",
		        "shortDate": "dd/MM/yyyy;@",
		        "dateTime": "d MMM yyyy HH:mm:ss;@",
		        "timeFormat": "HH:mm:ss;@"
		    },
		    "en_IE":     {
		        "longDate": "dddd d MMMM yyyy;@",
		        "shortDate": "dd/MM/yyyy;@",
		        "dateTime": "d MMM yyyy HH:mm:ss;@",
		        "timeFormat": "HH:mm:ss;@"
		    },
		    "en_JM": {},
		    "en_NZ":     {
		        "longDate": "dddd, d MMMM yyyy;@",
		        "shortDate": "d/MM/yy;@",
		        "dateTime": "d/MM/yyyy h:mm:ss AM/PM;@"
		    },
		    "en_PH": {},
		    "en_TT": {},
		    "en_US": {},
		    "en_VI": {},
		    "en_ZA":     {
		        "longDate": "dddd dd MMMM yyyy;@",
		        "shortDate": "yyyy/MM/dd;@",
		        "dateTime": "dd MMM yyyy h:mm:ss AM/PM;@"
		    },
		    "en_ZW":     {
		        "longDate": "dddd dd MMMM yyyy;@",
		        "shortDate": "d/M/yyyy;@",
		        "dateTime": "dd MMM, yyyy h:mm:ss AM/PM;@"
		    },
		    "es":     {
		        "longDate": 'dddd d "de" MMMM "de" yyyy;@',
		        "shortDate": "dd/MM/yy;@",
		        "dateTime":"dd/MM/yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "es_AR": {},
		    "es_BO": {},
		    "es_CL": {
		    	"shortDate": "dd-MM-yy;@",
		    	"dateTime":"dd-MM-yyyy H:mm:ss;@",
		    	"timeFormat":"H:mm:ss;@"
		    	},
		    "es_CO": {
		    	"shortDate": "d/MM/yy;@",
		    	"dateTime":"d/MM/yyyy H:mm:ss;@",
		        "timeFormat":"H:mm:ss;@"
		    },
		    "es_CR": {},
		    "es_DO": {},
		    "es_EC": {
		    	"dateTime":"dd/MM/yyyy H:mm:ss;@",
		        "timeFormat":"H:mm:ss;@"
		    },
		    "es_ES": {},
		    "es_GT": {
		    	"shortDate": "d/MM/yy;@",
		    	"dateTime":"d/MM/yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "es_HN": {"longDate": 'dddd dd "de" MMMM "de" yyyy;@'},
		    "es_MX": {},
		    "es_NI": {},
		    "es_PA": {
		    	"shortDate": "MM/dd/yy;@",
		    	"dateTime":"MM/dd/yyyy HH:mm:ss;@"
		    },
		    "es_PE": {"shortDate": "d/MM/yy;@"},
		    "es_PR": {
		    	"shortDate": "MM/dd/yy;@",
		    	"dateTime":"MM/dd/yyyy HH:mm:ss;@"
		    },
		    "es_PY": {},
		    "es_SV": {},
		    "es_UY": {},
		    "es_VE": {},
		    "et":     {
		        "longDate": "dddd, d, MMMM yyyy;@",
		        "shortDate": "dd.MM.yy;@",
		        "dateTime":"dd.MM.yyyy H:mm:ss;@",
		        "timeFormat":"H:mm:ss;@"
		    },
		    "et_EE": {},
		    "eu":     {
		        "longDate": 'dddd, yyyy"eko" MMMM"ren" dd"a";@',
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy MMM d HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "eu_ES": {},
		    "fa":     {
		        "longDate": "dddd d MMMM yyyy;@",
		        "shortDate": "yy/M/d;@",
		        "dateTime": "yyyy/M/d، H:mm:ss;@",
		        "timeFormat":"H:mm:ss;@"
		    },
		    "fa_IR": {},
		    "fi":     {
		        "longDate": "dddd d. MMMM yyyy;@",
		        "shortDate": "d.M.yyyy;@",
		        "dateTime":"d.M.yyyy H.mm.ss;@",
		        "timeFormat":"H.mm.ss;@"
		    },
		    "fi_FI": {},
		    "fo":     {
		        "longDate": "dddd dd MMMM yyyy;@",
		        "shortDate": "dd-MM-yy;@",
		        "dateTime":"dd-MM-yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "fo_FO": {},
		    "fr":     {
		        "longDate": "dddd d MMMM yyyy;@",
		        "shortDate": "dd/MM/yy;@",
		        "dateTime": "d MMM yyyy HH:mm:ss;@",
		        "timeFormat": "HH:mm:ss;@"
		    },
		    "fr_BE": {"shortDate": "d/MM/yy;@"},
		    "fr_CA": {
		    	"shortDate": "yy-MM-dd;@",
		    	"dateTime": "yyyy-MM-dd HH:mm:ss;@"
			},
		    "fr_CH":     {
		        "longDate": "dddd, d MMMM yyyy;@",
		        "shortDate": "dd.MM.yy;@"
		    },
		    "fr_FR": {},
		    "fr_LU": {},
		    "fr_MC": {},
		    "gl":     {
		        "longDate": "dddd dd MMMM yyyy;@",
		        "shortDate": "dd/MM/yy;@",
		        "dateTime":"d MMM, yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "gl_ES": {},
		    "gu":     {
		        "longDate": "dddd, d MMMM, yyyy;@",
		        "shortDate": "d-MM-yy;@",
		        "dateTime":"d MMM, yyyy hh:mm:ss AM/PM;@",
		        "timeFormat":"hh:mm:ss AM/PM;@"
		    },
		    "gu_IN": {},
		    "he":     {
		        "longDate": "dddd, d בMMMM yyyy;@",
		        "shortDate": "dd/MM/yy;@",
		        "dateTime": "dd/MM/yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "he_IL": {},
		    "hi":     {
		        "longDate": "dddd, d MMMM yyyy;@",
		        "shortDate": "d-M-yy;@",
		        "dateTime":"dd-MM-yyyy h:mm:ss AM/PM;@",
		        "timeFormat":"h:mm:ss AM/PM;@"
		    },
		    "hi_IN": {},
		    "hr":     {
		        "longDate": "dddd, d. MMMM yyyy.;@",
		        "shortDate": "dd.MM.yyyy.;@",
		        "dateTime":"d.M.yyyy. HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "hr_HR": {},
		    "hu":     {
		        "longDate": "yyyy. MMMM d., dddd;@",
		        "shortDate": "yyyy.MM.dd.;@",
		        "dateTime":"yyyy.MM.dd. H:mm:ss;@",
		        "timeFormat":"H:mm:ss;@"
		    },
		    "hu_HU": {},
		    "hy":     {
		        "longDate": "dddd, MMMM d, yyyy;@",
		        "shortDate": "MM/dd/yy;@",
		        "dateTime":"MMM d, yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "hy_AM": {},
		    "id":     {
		        "longDate": "dddd, dd MMMM yyyy;@",
		        "shortDate": "dd/MM/yy;@",
		        "dateTime":"d MMM yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "id_ID": {},
		    "is":     {
		        "longDate": "dddd, d. MMMM yyyy;@",
		        "shortDate": "d.M.yyyy;@",
		        "dateTime":"d.M.yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "is_IS": {},
		    "it":     {
		        "longDate": "dddd d MMMM yyyy;@",
		        "shortDate": "dd/MM/yy;@",
		        "dateTime":"dd/MMM/yyyy HH.mm.ss;@",
		        "timeFormat":"HH.mm.ss;@"
		    },
		    "it_CH":     {
		        "longDate": "dddd, d MMMM yyyy;@",
		        "shortDate": "dd.MM.yy;@",
		        "dateTime":"d-MMM-yyyy HH.mm.ss;@"
		    },
		    "it_IT": {},
		    "ja":     {
		        "longDate": "yyyy年M月d日dddd;@",
		        "shortDate": "yy/MM/dd;@",
		        "dateTime": "yyyy/MM/dd H:mm:ss;@",
		        "timeFormat":"H:mm:ss;@"
		    },
		    "ja_JP": {},
		    "ka":     {
		        "longDate": "dddd, yyyy MMMM dd;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy MMM d HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "ka_GE": {},
		    "kk":     {
		        "longDate": 'dddd, d MMMM yyyy "ж".;@',
		        "shortDate": "dd.MM.yy;@",
		        "dateTime":"dd.MM.yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "kk_KZ": {},
		    "kn":     {
		        "longDate": "dddd d MMMM yyyy;@",
		        "shortDate": "d-M-yy;@",
		        "dateTime":"d MMM yyyy hh:mm:ss AM/PM;@",
		        "timeFormat":"hh:mm:ss AM/PM;@"
		    },
		    "kn_IN": {},
		    "ko":     {
		        "longDate": "yyyy년 M월 d일 dddd;@",
		        "shortDate": "yy. M. d.;@",
		        "dateTime": "yyyy. M. d. AM/PM h:mm:ss;@",
		        "timeFormat":"AM/PM h:mm:ss;@"
		    },
		    "ko_KR": {},
		    "kok":     {
		        "longDate": "dddd, yyyy MMMM dd;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy MMM d HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "kok_IN": {},
		    "lt":     {
		        "longDate": 'yyyy "m". MMMM d "d".,dddd;@',
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy.MM.dd HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "lt_LT": {},
		    "lv":     {
		        "longDate": 'dddd, yyyy. "gada" d. MMMM;@',
		        "shortDate": "dd.MM.yy;@",
		        "dateTime":'yyyy. "gada" d. MMM HH:mm:ss;@',
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "lv_LV": {},
		    "mk":     {
		        "longDate": "dddd, dd MMMM yyyy;@",
		        "shortDate": "dd.M.yy;@",
		        "dateTime":"dd.M.yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "mk_MK": {},
		    "ml":     {
		        "longDate": "yyyy, MMMM d, dddd;@",
		        "shortDate": "dd/MM/yy;@",
		        "dateTime": "yyyy, MMM d h:mm:ss AM/PM;@",
		        "timeFormat":"h:mm:ss AM/PM;@"
		    },
		    "ml_IN": {},
		    "mn":     {
		        "longDate": "dddd, yyyy MMMM dd;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy MMM d HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "mn_MN": {},
		    "mr":     {
		        "longDate": "dddd d MMMM yyyy;@",
		        "shortDate": "d-M-yy;@",
		        "dateTime":"d MMM yyyy h-mm-ss AM/PM;@",
		        "timeFormat":"h-mm-ss AM/PM;@"
		    },
		    "mr_IN": {},
		    "ms":     {
		        "longDate": "dddd, yyyy MMMM dd;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy MMM d HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "ms_BN": {
		        "longDate": "dd MMMM yyyy;@",
		        "dateTime":"dd/MM/yyyy H:mm:ss;@",
		        "timeFormat":"H:mm:ss;@"
		    },
		    "ms_MY": {},
		    "mt":     {
		        "longDate": 'dddd, d "ta"’ MMMM yyyy;@',
		        "shortDate": "dd/MM/yyyy;@",
		        "dateTime":"dd MMM yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "mt_MT": {},
		    "nb":     {
		        "longDate": "dddd d. MMMM yyyy;@",
		        "shortDate": "dd.MM.yy;@",
		        "dateTime":"d. MMM yyyy HH.mm.ss;@",
		        "timeFormat":"HH.mm.ss;@"
		    },
		    "nb_NO": {},
		    "nl":     {
		        "longDate": "dddd d MMMM yyyy;@",
		        "shortDate": "dd-MM-yy;@",
		        "dateTime":"d MMM yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "nl_BE": {
		        "shortDate": "d/MM/yy;@",
		        "dateTime":"d-MMM-yyyy HH:mm:ss;@"
		    },
		    "nl_NL": {},
		    "nn":     {
		        "longDate": "dddd d. MMMM yyyy;@",
		        "shortDate": "dd.MM.yy;@",
		        "dateTime":"d. MMM. yyyy HH.mm.ss;@",
		        "timeFormat":"HH.mm.ss;@"
		    },
		    "nn_NO": {},
		    "pa":     {
		        "longDate": "dddd, dd MMMM yyyy;@",
		        "shortDate": "dd/MM/yyyy;@",
		        "dateTime":"d MMM yyyy h:mm:ss AM/PM;@",
		        "timeFormat":"h:mm:ss AM/PM;@"
		    },
		    "pa_IN": {},
		    "pl":     {
		        "longDate": "dddd, d MMMM yyyy;@",
		        "shortDate": "dd-MM-yy;@",
		        "dateTime":"dd-MM-yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "pl_PL": {},
		    "pt":     {
		        "longDate": 'dddd, d "de" MMMM "de" yyyy;@',
		        "shortDate": "dd/MM/yy;@",
		        "dateTime": "dd/MM/yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "pt_BR": {},
		    "pt_PT": {
		        "dateTime": 'd "de" MMM "de" yyyy HH:mm:ss;@'
		    },
		    "ro":     {
		        "longDate": "dddd, d MMMM yyyy;@",
		        "shortDate": "dd.MM.yyyy;@",
		        "dateTime": "dd.MM.yyyy, HH:mm:ss;@",
		        "timeFormat": "HH:mm:ss;@"
		    },
		    "ro_RO": {},
		    "ru":     {
		        "longDate": 'dddd, d MMMM yyyy "г".;@',
		        "shortDate": "dd.MM.yy;@",
		        "dateTime":"dd.MM.yyyy H:mm:ss;@",
		        "timeFormat":"H:mm:ss;@"
		    },
		    "ru_RU": {},
		    "se":     {
		        "longDate": "dddd, yyyy MMMM dd;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy MMM d HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "se_NO": {},
		    "sk":     {
		        "longDate": "dddd, d. MMMM yyyy;@",
		        "shortDate": "d.M.yyyy;@",
		        "dateTime":"d.M.yyyy H:mm:ss;@",
		        "timeFormat":"H:mm:ss;@"
		    },
		    "sk_SK": {},
		    "sl":     {
		        "longDate": "dddd, dd. MMMM yyyy;@",
		        "shortDate": "d. MM. yy;@",
		        "dateTime":"d. MMM. yyyy HH:mm:ss;@",
		        "timeFormat": "HH:mm:ss;@"
		    },
		    "sl_SI": {},
		    "sq":     {
		        "longDate": "dddd, dd MMMM yyyy;@",
		        "shortDate": "yy-MM-dd;@",
		        "dateTime":"yyyy-MM-dd h.mm.ss.AM/PM;@",
		        "timeFormat": "h.mm.ss.AM/PM;@"
		    },
		    "sq_AL": {},
		    "sr":     {
		        "longDate": "dddd, dd. MMMM yyyy.;@",
		        "shortDate": "d.M.yy.;@",
		        "dateTime":"dd.MM.yyyy. HH.mm.ss;@",
		        "timeFormat":"HH.mm.ss;@"
		    },
		    "sr_BA": {},
		    "sr_CS": {},
		    "sv":     {
		        "longDate": "dddd d MMMM yyyy;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"d MMM yyyy HH.mm.ss;@",
		        "timeFormat":"HH.mm.ss;@"
		    },
		    "sv_FI": {},
		    "sv_SE": {},
		    "sw":     {
		        "longDate": "dddd, yyyy MMMM dd;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy MMM d HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "sw_KE": {},
		    "syr":     {
		        "longDate": "dddd, yyyy MMMM dd;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"y MMM d HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "syr_SY": {},
		    "ta":     {
		        "longDate": "dddd, d MMMM, yyyy;@",
		        "shortDate": "d-M-yy;@",
		        "dateTime":"d MMM, yyyy h:mm:ss AM/PM;@",
		        "timeFormat": "h:mm:ss AM/PM;@"
		    },
		    "ta_IN": {},
		    "te":     {
		        "longDate": "dddd d MMMM yyyy;@",
		        "shortDate": "dd-MM-yy;@",
		        "dateTime":"d MMM yyyy h:mm:ss AM/PM;@",
		        "timeFormat": "h:mm:ss AM/PM;@"
		    },
		    "te_IN": {},
		    "th":     {
		        "longDate": "ddddที่ d MMMM G yyyy;@",
		        "shortDate": "d/M/yyyy;@",
		        "dateTime": "d MMM yyyy, H:mm:ss;@",
		        "timeFormat": "H:mm:ss;@"
		    },
		    "th_TH": {},
		    "tn":     {
		        "longDate": "dddd, yyyy MMMM dd;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy MMM d HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "tn_ZA": {},
		    "tr":     {
		        "longDate": "dd MMMM yyyy dddd;@",
		        "shortDate": "dd.MM.yyyy;@",
		        "dateTime":"dd MMM yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "tr_TR": {},
		    "uk":     {
		        "longDate": 'dddd, d MMMM yyyy "р".;@',
		        "shortDate": "dd.MM.yy;@",
		        "dateTime":"d MMM yyyy HH:mm:ss;@",
		        "timeFormat":"HH:mm:ss;@"
		    },
		    "uk_UA": {},
		    "uz":     {
		        "longDate": "dddd, yyyy MMMM dd;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy MMM d HH:mm:ss;@",
		        "timeFormat": "HH:mm:ss;@"
		    },
		    "uz_UZ": {},
		    "vi":     {
		        "longDate": 'dddd, "ngày" dd MMMM "năm" yyyy;@',
		        "shortDate": "dd/MM/yyyy;@",
		        "dateTime": "HH:mm:ss dd-MM-yyyy;@",
		        "timeFormat": "HH:mm:ss;@"
		    },
		    "vi_VN": {},
		    "xh":     {
		        "longDate": "dddd, yyyy MMMM dd;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime":"yyyy MMM d HH:mm:ss;@",
		        "timeFormat": "HH:mm:ss;@"
		    },
		    "xh_ZA": {},
		    "zh":     {
		        "longDate": "yyyy年M月d日dddd;@",
		        "shortDate": "yy-M-d;@",
		        "dateTime": "yyyy-M-d AM/PMhh:mm:ss;@",
		        "timeFormat": "AM/PMhh:mm:ss;@"
		    },
		    "zh_CN": {},
		    "zh_HK": {},
		    "zh_MO": {},
		    "zh_SG": {},
		    "zh_TW": {},
		    "zu":     {
		        "longDate": "dddd dd MMMM yyyy;@",
		        "shortDate": "yyyy-MM-dd;@",
		        "dateTime": "d MMM yyyy h:mm:ss AM/PM;@",
		        "timeFormat": "h:mm:ss AM/PM;@"
		    },
		    "zu_ZA": {}
		} ,
		_g_n_g.RESOURCE_MAP/*:Object*/ = {
			"af":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "voor Christus",
		                "na Christus"
		            ],
		            "eraAbbr":             [
		                "v.C.",
		                "n.C."
		            ],
		            "shortDay":             [
		                "So",
		                "Ma",
		                "Di",
		                "Wo",
		                "Do",
		                "Vr",
		                "Sa"
		            ],
		            "shortMonth":             [
		                "Jan",
		                "Feb",
		                "Mar",
		                "Apr",
		                "Mei",
		                "Jun",
		                "Jul",
		                "Aug",
		                "Sep",
		                "Okt",
		                "Nov",
		                "Des"
		            ],
		            "longDay":             [
		                "Sondag",
		                "Maandag",
		                "Dinsdag",
		                "Woensdag",
		                "Donderdag",
		                "Vrydag",
		                "Saterdag"
		            ],
		            "longMonth":             [
		                "Januarie",
		                "Februarie",
		                "Maart",
		                "April",
		                "Mei",
		                "Junie",
		                "Julie",
		                "Augustus",
		                "September",
		                "Oktober",
		                "November",
		                "Desember"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "vm.",
		                "nm."
		            ]
		        }
		    },
		    "af_ZA":     {
		        "date": {},
		        "time": {}
		    },
		    "ar":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "قبل الميلاد",
		                "ميلادي"
		            ],
		            "eraAbbr":             [
		                "ق.م",
		                "م"
		            ],
		            "shortDay":             [
		                "أحد",
		                "إثنين",
		                "ثلاثاء",
		                "أربعاء",
		                "خميس",
		                "جمعة",
		                "سبت"
		            ],
		            "shortMonth":             [
		                "يناير",
		                "فبراير",
		                "مارس",
		                "أبريل",
		                "مايو",
		                "يونيو",
		                "يوليو",
		                "أغسطس",
		                "سبتمبر",
		                "أكتوبر",
		                "نوفمبر",
		                "ديسمبر"
		            ],
		            "longDay":             [
		                "الأحد",
		                "الإثنين",
		                "الثلاثاء",
		                "الأربعاء",
		                "الخميس",
		                "الجمعة",
		                "السبت"
		            ],
		            "longMonth":             [
		                "يناير",
		                "فبراير",
		                "مارس",
		                "أبريل",
		                "مايو",
		                "يونيو",
		                "يوليو",
		                "أغسطس",
		                "سبتمبر",
		                "أكتوبر",
		                "نوفمبر",
		                "ديسمبر"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "ص",
		                "م"
		            ]
		        }
		    },
		    "ar_AE":     {
		        "date": {},
		        "time": {}
		    },
		    "ar_BH":     {
		        "date": {},
		        "time": {}
		    },
		    "ar_DZ":     {
		        "date": {},
		        "time": {}
		    },
		    "ar_EG":     {
		        "date": {},
		        "time": {}
		    },
		    "ar_IQ":     {
		        "date": {},
		        "time": {}
		    },
		    "ar_JO":     {
		        "date":         {
		            "shortDay":             [
		                "الأحد",
		                "الاثنين",
		                "الثلاثاء",
		                "الأربعاء",
		                "الخميس",
		                "الجمعة",
		                "السبت"
		            ],
		            "shortMonth":             [
		                "كانون الثاني",
		                "شباط",
		                "آذار",
		                "نيسان",
		                "أيار",
		                "حزيران",
		                "تموز",
		                "آب",
		                "أيلول",
		                "تشرين الأول",
		                "تشرين الثاني",
		                "كانون الأول"
		            ],
		            "longMonth":             [
		                "كانون الثاني",
		                "شباط",
		                "آذار",
		                "نيسان",
		                "أيار",
		                "حزيران",
		                "تموز",
		                "آب",
		                "أيلول",
		                "تشرين الأول",
		                "تشرين الثاني",
		                "كانون الأول"
		            ]
		        },
		        "time": {}
		    },
		    "ar_KW":     {
		        "date": {},
		        "time": {}
		    },
		    "ar_LB":     {
		        "date":         {
		            "shortDay":             [
		                "الأحد",
		                "الاثنين",
		                "الثلاثاء",
		                "الأربعاء",
		                "الخميس",
		                "الجمعة",
		                "السبت"
		            ],
		            "shortMonth":             [
		                "كانون الثاني",
		                "شباط",
		                "آذار",
		                "نيسان",
		                "نوار",
		                "حزيران",
		                "تموز",
		                "آب",
		                "أيلول",
		                "تشرين الأول",
		                "تشرين الثاني",
		                "كانون الأول"
		            ],
		            "longMonth":             [
		                "كانون الثاني",
		                "شباط",
		                "آذار",
		                "نيسان",
		                "نوار",
		                "حزيران",
		                "تموز",
		                "آب",
		                "أيلول",
		                "تشرين الأول",
		                "تشرين الثاني",
		                "كانون الأول"
		            ]
		        },
		        "time": {}
		    },
		    "ar_LY":     {
		        "date": {},
		        "time": {}
		    },
		    "ar_MA":     {
		        "date": {},
		        "time": {}
		    },
		    "ar_OM":     {
		        "date": {},
		        "time": {}
		    },
		    "ar_QA":     {
		        "date": {"shortDay":         [
		            "الأحد",
		            "الاثنين",
		            "الثلاثاء",
		            "الأربعاء",
		            "الخميس",
		            "الجمعة",
		            "السبت"
		        ]},
		        "time": {}
		    },
		    "ar_SA":     {
		        "date": {"shortDay":         [
		            "الأحد",
		            "الاثنين",
		            "الثلاثاء",
		            "الأربعاء",
		            "الخميس",
		            "الجمعة",
		            "السبت"
		        ]},
		        "time": {}
		    },
		    "ar_SY":     {
		        "date":         {
		            "shortDay":             [
		                "الأحد",
		                "الاثنين",
		                "الثلاثاء",
		                "الأربعاء",
		                "الخميس",
		                "الجمعة",
		                "السبت"
		            ],
		            "shortMonth":             [
		                "كانون الثاني",
		                "شباط",
		                "آذار",
		                "نيسان",
		                "نوار",
		                "حزيران",
		                "تموز",
		                "آب",
		                "أيلول",
		                "تشرين الأول",
		                "تشرين الثاني",
		                "كانون الأول"
		            ],
		            "longMonth":             [
		                "كانون الثاني",
		                "شباط",
		                "آذار",
		                "نيسان",
		                "نوار",
		                "حزيران",
		                "تموز",
		                "آب",
		                "أيلول",
		                "تشرين الأول",
		                "تشرين الثاني",
		                "كانون الأول"
		            ]
		        },
		        "time": {}
		    },
		    "ar_TN":     {
		        "date": {"shortDay":         [
		            "الأحد",
		            "الاثنين",
		            "الثلاثاء",
		            "الأربعاء",
		            "الخميس",
		            "الجمعة",
		            "السبت"
		        ]},
		        "time": {}
		    },
		    "ar_YE":     {
		        "date": {"shortDay":         [
		            "الأحد",
		            "الاثنين",
		            "الثلاثاء",
		            "الأربعاء",
		            "الخميس",
		            "الجمعة",
		            "السبت"
		        ]},
		        "time": {}
		    },
		    "az":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "eramızdan əvvəl",
		                "bizim eramızın"
		            ],
		            "eraAbbr":             [
		                "e.ə.",
		                "b.e."
		            ],
		            "shortDay":             [
		                "B.",
		                "B.E.",
		                "Ç.A.",
		                "Ç.",
		                "C.A.",
		                "C",
		                "Ş."
		            ],
		            "shortMonth":             [
		                "yan",
		                "fev",
		                "mar",
		                "apr",
		                "may",
		                "iyn",
		                "iyl",
		                "avq",
		                "sen",
		                "okt",
		                "noy",
		                "dek"
		            ],
		            "longDay":             [
		                "bazar",
		                "bazar ertəsi",
		                "çərşənbə axşamı",
		                "çərşənbə",
		                "cümə axşamı",
		                "cümə",
		                "şənbə"
		            ],
		            "longMonth":             [
		                "Yanvar",
		                "Fevral",
		                "Mart",
		                "Aprel",
		                "May",
		                "İyun",
		                "İyul",
		                "Avqust",
		                "Sentyabr",
		                "Oktyabr",
		                "Noyabr",
		                "Dekabr"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "az_AZ":     {
		        "date": {},
		        "time": {}
		    },
		    "be":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "да н.э.",
		                "н.э."
		            ],
		            "eraAbbr":             [
		                "да н.е.",
		                "н.е."
		            ],
		            "eraNarrow":             [
		                "да н.э.",
		                "н.э."
		            ],
		            "shortDay":             [
		                "нд",
		                "пн",
		                "аў",
		                "ср",
		                "чц",
		                "пт",
		                "сб"
		            ],
		            "shortMonth":             [
		                "сту",
		                "лют",
		                "сак",
		                "кра",
		                "май",
		                "чэр",
		                "ліп",
		                "жні",
		                "вер",
		                "кас",
		                "ліс",
		                "сне"
		            ],
		            "longDay":             [
		                "нядзеля",
		                "панядзелак",
		                "аўторак",
		                "серада",
		                "чацвер",
		                "пятніца",
		                "субота"
		            ],
		            "longMonth":             [
		                "студзень",
		                "люты",
		                "сакавік",
		                "красавік",
		                "май",
		                "чэрвень",
		                "ліпень",
		                "жнівень",
		                "верасень",
		                "кастрычнік",
		                "лістапад",
		                "снежань"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ".",
		            "amPm":             [
		                "да палудня",
		                "пасля палудня"
		            ]
		        }
		    },
		    "be_BY":     {
		        "date": {},
		        "time": {}
		    },
		    "bg":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "пр.Хр.",
		                "сл.Хр."
		            ],
		            "eraAbbr":             [
		                "пр. н. е.",
		                "от н. е."
		            ],
		            "eraNarrow": ["сл.н.е."],
		            "shortDay":             [
		                "нд",
		                "пн",
		                "вт",
		                "ср",
		                "чт",
		                "пт",
		                "сб"
		            ],
		            "shortMonth":             [
		                "ян.",
		                "февр.",
		                "март",
		                "апр.",
		                "май",
		                "юни",
		                "юли",
		                "авг.",
		                "септ.",
		                "окт.",
		                "ноем.",
		                "дек."
		            ],
		            "longDay":             [
		                "неделя",
		                "понеделник",
		                "вторник",
		                "сряда",
		                "четвъртък",
		                "петък",
		                "събота"
		            ],
		            "longMonth":             [
		                "януари",
		                "февруари",
		                "март",
		                "април",
		                "май",
		                "юни",
		                "юли",
		                "август",
		                "септември",
		                "октомври",
		                "ноември",
		                "декември"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "пр. об.",
		                "сл. об."
		            ]
		        }
		    },
		    "bg_BG":     {
		        "date": {},
		        "time": {}
		    },
		    "bn":     {
		        "date":         {
		            "dateSeparator": "/",
		            "eraAbbr":             [
		                "খৃষ্টপূর্ব",
		                "খৃষ্টাব্দ"
		            ],
		            "shortDay":             [
		                "রবি",
		                "সোম",
		                "মঙ্গল",
		                "বুধ",
		                "বৃহস্পতি",
		                "শুক্র",
		                "শনি"
		            ],
		            "shortMonth":             [
		                "জানুয়ারী",
		                "ফেব্রুয়ারী",
		                "মার্চ",
		                "এপ্রিল",
		                "মে",
		                "জুন",
		                "জুলাই",
		                "আগস্ট",
		                "সেপ্টেম্বর",
		                "অক্টোবর",
		                "নভেম্বর",
		                "ডিসেম্বর"
		            ],
		            "longDay":             [
		                "রবিবার",
		                "সোমবার",
		                "মঙ্গলবার",
		                "বুধবার",
		                "বৃহষ্পতিবার",
		                "শুক্রবার",
		                "শনিবার"
		            ],
		            "longMonth":             [
		                "জানুয়ারী",
		                "ফেব্রুয়ারী",
		                "মার্চ",
		                "এপ্রিল",
		                "মে",
		                "জুন",
		                "জুলাই",
		                "আগস্ট",
		                "সেপ্টেম্বর",
		                "অক্টোবর",
		                "নভেম্বর",
		                "ডিসেম্বর"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "পূর্বাহ্ণ",
		                "অপরাহ্ণ"
		            ]
		        }
		    },
		    "bn_IN":     {
		        "date": {},
		        "time": {}
		    },
		    "bs":     {
		        "date":         {
		            "dateSeparator": "-",
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "shortDay":             [
		                "7",
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6"
		            ],
		            "shortMonth":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7",
		                "8",
		                "9",
		                "10",
		                "11",
		                "12"
		            ],
		            "longDay":             [
		                "7",
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6"
		            ],
		            "longMonth":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7",
		                "8",
		                "9",
		                "10",
		                "11",
		                "12"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "bs_BA":     {
		        "date": {},
		        "time": {}
		    },
		    "ca":     {
		        "date":         {
		            "dateSeparator": "/",
		            "eraAbbr":             [
		                "aC",
		                "dC"
		            ],
		            "shortDay":             [
		                "dg.",
		                "dl.",
		                "dt.",
		                "dc.",
		                "dj.",
		                "dv.",
		                "ds."
		            ],
		            "shortMonth":             [
		                "gen.",
		                "febr.",
		                "març",
		                "abr.",
		                "maig",
		                "juny",
		                "jul.",
		                "ag.",
		                "set.",
		                "oct.",
		                "nov.",
		                "des."
		            ],
		            "longDay":             [
		                "diumenge",
		                "dilluns",
		                "dimarts",
		                "dimecres",
		                "dijous",
		                "divendres",
		                "dissabte"
		            ],
		            "longMonth":             [
		                "gener",
		                "febrer",
		                "març",
		                "abril",
		                "maig",
		                "juny",
		                "juliol",
		                "agost",
		                "setembre",
		                "octubre",
		                "novembre",
		                "desembre"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "a.m.",
		                "p.m."
		            ]
		        }
		    },
		    "ca_ES":     {
		        "date": {},
		        "time": {}
		    },
		    "cs":     {
		        "date":         {
		            "dateSeparator": ".",
		            "eraAbbr":             [
		                "př.Kr.",
		                "po Kr."
		            ],
		            "shortDay":             [
		                "ne",
		                "po",
		                "út",
		                "st",
		                "čt",
		                "pá",
		                "so"
		            ],
		            "shortMonth":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7",
		                "8",
		                "9",
		                "10",
		                "11",
		                "12",
		            ],
		            "longDay":             [
		                "neděle",
		                "pondělí",
		                "úterý",
		                "středa",
		                "čtvrtek",
		                "pátek",
		                "sobota"
		            ],
		            "longMonth":             [
		                "ledna",
		                "února",
		                "března",
		                "dubna",
		                "května",
		                "června",
		                "července",
		                "srpna",
		                "září",
		                "října",
		                "listopadu",
		                "prosince"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "dop.",
		                "odp."
		            ]
		        }
		    },
		    "cs_CZ":     {
		        "date": {},
		        "time": {}
		    },
		    "cy":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "Cyn Crist",
		                "Oed Crist"
		            ],
		            "eraAbbr":             [
		                "CC",
		                "OC"
		            ],
		            "eraNarrow":             [
		                "C",
		                "O"
		            ],
		            "shortDay":             [
		                "Sul",
		                "Llun",
		                "Maw",
		                "Mer",
		                "Iau",
		                "Gwen",
		                "Sad"
		            ],
		            "shortMonth":             [
		                "Ion",
		                "Chwef",
		                "Mawrth",
		                "Ebrill",
		                "Mai",
		                "Meh",
		                "Gorff",
		                "Awst",
		                "Medi",
		                "Hyd",
		                "Tach",
		                "Rhag"
		            ],
		            "longDay":             [
		                "Dydd Sul",
		                "Dydd Llun",
		                "Dydd Mawrth",
		                "Dydd Mercher",
		                "Dydd Iau",
		                "Dydd Gwener",
		                "Dydd Sadwrn"
		            ],
		            "longMonth":             [
		                "Ionawr",
		                "Chwefror",
		                "Mawrth",
		                "Ebrill",
		                "Mai",
		                "Mehefin",
		                "Gorffenaf",
		                "Awst",
		                "Medi",
		                "Hydref",
		                "Tachwedd",
		                "Rhagfyr"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "cy_GB":     {
		        "date": {},
		        "time": {}
		    },
		    "da":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "f.Kr.",
		                "e.Kr."
		            ],
		            "eraAbbr":             [
		                "f.Kr.",
		                "e.Kr."
		            ],
		            "shortDay":             [
		                "søn",
		                "man",
		                "tir",
		                "ons",
		                "tor",
		                "fre",
		                "lør"
		            ],
		            "shortMonth":             [
		                "jan.",
		                "feb.",
		                "mar.",
		                "apr.",
		                "maj",
		                "jun.",
		                "jul.",
		                "aug.",
		                "sep.",
		                "okt.",
		                "nov.",
		                "dec."
		            ],
		            "longDay":             [
		                "søndag",
		                "mandag",
		                "tirsdag",
		                "onsdag",
		                "torsdag",
		                "fredag",
		                "lørdag"
		            ],
		            "longMonth":             [
		                "januar",
		                "februar",
		                "marts",
		                "april",
		                "maj",
		                "juni",
		                "juli",
		                "august",
		                "september",
		                "oktober",
		                "november",
		                "december"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ".",
		            "amPm":             [
		                "f.m.",
		                "e.m."
		            ]
		        }
		    },
		    "da_DK":     {
		        "date": {},
		        "time": {}
		    },
		   "de":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "v. Chr.",
		                "n. Chr."
		            ],
		            "eraAbbr":             [
		                "v. Chr.",
		                "n. Chr."
		            ],
		            "shortDay":             [
		                "So.",
		                "Mo.",
		                "Di.",
		                "Mi.",
		                "Do.",
		                "Fr.",
		                "Sa."
		            ],
		            "shortMonth":             [
		                "Jan",
		                "Feb",
		                "Mär",
		                "Apr",
		                "Mai",
		                "Jun",
		                "Jul",
		                "Aug",
		                "Sep",
		                "Okt",
		                "Nov",
		                "Dez"
		            ],
		            "longDay":             [
		                "Sonntag",
		                "Montag",
		                "Dienstag",
		                "Mittwoch",
		                "Donnerstag",
		                "Freitag",
		                "Samstag"
		            ],
		            "longMonth":             [
		                "Januar",
		                "Februar",
		                "März",
		                "April",
		                "Mai",
		                "Juni",
		                "Juli",
		                "August",
		                "September",
		                "Oktober",
		                "November",
		                "Dezember"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "vorm.",
		                "nachm."
		            ]
		        }
		    },
		    "de_AT":     {
		        "date":         {
		            "shortMonth": 		[
		            	"Jän", 
		            	"Feb",
		                "Mär",
		                "Apr",
		                "Mai",
		                "Jun",
		                "Jul",
		                "Aug",
		                "Sep",
		                "Okt",
		                "Nov",
		                "Dez"],
		            "longMonth": [
		            	"Jänner",
		            	"Februar",
		                "März",
		                "April",
		                "Mai",
		                "Juni",
		                "Juli",
		                "August",
		                "September",
		                "Oktober",
		                "November",
		                "Dezember"]
		        },
		        "time": {}
		    },
		    "de_CH":     {
		        "date": {},
		        "time": {}
		    },
		    "de_DE":     {
		        "date": {},
		        "time": {}
		    },
		    "de_LI":     {
		        "date": {},
		        "time": {}
		    },
		    "de_LU":     {
		        "date": {},
		        "time": {}
		    },
		    "el":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "π.Χ.",
		                "μ.Χ."
		            ],
		            "eraAbbr":             [
		                "π.Χ.",
		                "μ.Χ."
		            ],
		            "shortDay":             [
		                "Κυρ",
		                "Δευ",
		                "Τρι",
		                "Τετ",
		                "Πεμ",
		                "Παρ",
		                "Σαβ"
		            ],
		            "shortMonth":             [
		                "Ιαν",
		                "Φεβ",
		                "Μαρ",
		                "Απρ",
		                "Μαϊ",
		                "Ιουν",
		                "Ιουλ",
		                "Αυγ",
		                "Σεπ",
		                "Οκτ",
		                "Νοε",
		                "Δεκ"
		            ],
		            "longDay":             [
		                "Κυριακή",
		                "Δευτέρα",
		                "Τρίτη",
		                "Τετάρτη",
		                "Πέμπτη",
		                "Παρασκευή",
		                "Σάββατο"
		            ],
		            "longMonth":             [
		                "Ιανουαρίου",
		                "Φεβρουαρίου",
		                "Μαρτίου",
		                "Απριλίου",
		                "Μαΐου",
		                "Ιουνίου",
		                "Ιουλίου",
		                "Αυγούστου",
		                "Σεπτεμβρίου",
		                "Οκτωβρίου",
		                "Νοεμβρίου",
		                "Δεκεμβρίου"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "π.μ.",
		                "μ.μ."
		            ]
		        }
		    },
		    "el_GR":     {
		        "date": {},
		        "time": {}
		    },
		    "en":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "Before Christ",
		                "Anno Domini"
		            ],
		            "eraAbbr":             [
		                "BC",
		                "AD"
		            ],
		            "eraNarrow":             [
		                "B",
		                "A"
		            ],
		            "shortDay":             [
		                "Sun",
		                "Mon",
		                "Tue",
		                "Wed",
		                "Thu",
		                "Fri",
		                "Sat"
		            ],
		            "shortMonth":             [
		                "Jan",
		                "Feb",
		                "Mar",
		                "Apr",
		                "May",
		                "Jun",
		                "Jul",
		                "Aug",
		                "Sep",
		                "Oct",
		                "Nov",
		                "Dec"
		            ],
		            "longDay":             [
		                "Sunday",
		                "Monday",
		                "Tuesday",
		                "Wednesday",
		                "Thursday",
		                "Friday",
		                "Saturday"
		            ],
		            "longMonth":             [
		                "January",
		                "February",
		                "March",
		                "April",
		                "May",
		                "June",
		                "July",
		                "August",
		                "September",
		                "October",
		                "November",
		                "December"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "en_AU":     {
		        "date": {"dateSeparator": "/"},
		        "time": {}
		    },
		    "en_BZ":     {
		        "date": {"dateSeparator": "/"},
		        "time": {"timeSeparator": ":"}
		    },
		    "en_CA":     {
		        "date": {"dateSeparator": "-"},
		        "time": {}
		    },
		    "en_GB":     {
		        "date": {"dateSeparator": "/"},
		        "time": {"timeSeparator": ":"}
		    },
		    "en_IE":     {
		        "date": {"dateSeparator": "/"},
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "a.m.",
		                "p.m."
		            ]
		        }
		    },
		    "en_JM":     {
		        "date": {},
		        "time": {}
		    },
		    "en_NZ":     {
		        "date": {"dateSeparator": "/"},
		        "time": {}
		    },
		    "en_PH":     {
		        "date": {},
		        "time": {}
		    },
		    "en_TT":     {
		        "date": {},
		        "time": {}
		    },
		    "en_US":     {
		        "date": {},
		        "time": {}
		    },
		    "en_VI":     {
		        "date": {},
		        "time": {}
		    },
		    "en_ZA":     {
		        "date": {"dateSeparator": "/"},
		        "time": {}
		    },
		    "en_ZW":     {
		        "date": {"dateSeparator": "/"},
		        "time": {}
		    },
		    "es":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "antes de Cristo",
		                "anno Dómini"
		            ],
		            "eraAbbr":             [
		                "a.C.",
		                "d.C."
		            ],
		            "shortDay":             [
		                "dom",
		                "lun",
		                "mar",
		                "mié",
		                "jue",
		                "vie",
		                "sáb"
		            ],
		            "shortMonth":             [
		                "ene",
		                "feb",
		                "mar",
		                "abr",
		                "may",
		                "jun",
		                "jul",
		                "ago",
		                "sep",
		                "oct",
		                "nov",
		                "dic"
		            ],
		            "longDay":             [
		                "domingo",
		                "lunes",
		                "martes",
		                "miércoles",
		                "jueves",
		                "viernes",
		                "sábado"
		            ],
		            "longMonth":             [
		                "enero",
		                "febrero",
		                "marzo",
		                "abril",
		                "mayo",
		                "junio",
		                "julio",
		                "agosto",
		                "septiembre",
		                "octubre",
		                "noviembre",
		                "diciembre"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "a.m.",
		                "p.m."
		            ]
		        }
		    },
		    "es_AR":     {
		        "date": {},
		        "time": {"amPm":         [
		            "a.m.",
		            "p.m."
		        ]}
		    },
		    "es_BO":     {
		        "date": {},
		        "time": {}
		    },
		    "es_CL":     {
		        "date": {"dateSeparator": "-"},
		        "time": {"timeSeparator": ":"}
		    },
		    "es_CO":     {
		        "date": {"dateSeparator": "/"},
		        "time": {"timeSeparator": ":"}
		    },
		    "es_CR":     {
		        "date": {},
		        "time": {}
		    },
		    "es_DO":     {
		        "date": {},
		        "time": {}
		    },
		    "es_EC":     {
		        "date": {},
		        "time": {"timeSeparator": ":"}
		    },
		    "es_ES":     {
		        "date": {},
		        "time": {}
		    },
		    "es_GT":     {
		        "date": {"dateSeparator": "/"},
		        "time": {}
		    },
		    "es_HN":     {
		        "date": {},
		        "time": {}
		    },
		    "es_MX":     {
		        "date": {},
		        "time": {}
		    },
		    "es_NI":     {
		        "date": {},
		        "time": {}
		    },
		    "es_PA":     {
		        "date": {"dateSeparator": "/"},
		        "time": {}
		    },
		    "es_PE":     {
		        "date": {"dateSeparator": "/"},
		        "time": {}
		    },
		    "es_PR":     {
		        "date": {"dateSeparator": "/"},
		        "time": {}
		    },
		    "es_PY":     {
		        "date": {},
		        "time": {}
		    },
		    "es_SV":     {
		        "date": {},
		        "time": {}
		    },
		    "es_UY":     {
		        "date": {},
		        "time": {}
		    },
		    "es_VE":     {
		        "date": {},
		        "time": {}
		    },
		    "et":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "enne meie aega",
		                "meie aja järgi"
		            ],
		            "eraAbbr":             [
		                "e.m.a.",
		                "m.a.j."
		            ],
		            "shortDay":             [
		                "P",
		                "E",
		                "T",
		                "K",
		                "N",
		                "R",
		                "L"
		            ],
		            "shortMonth":             [
		                "jaan",
		                "veebr",
		                "märts",
		                "apr",
		                "mai",
		                "juuni",
		                "juuli",
		                "aug",
		                "sept",
		                "okt",
		                "nov",
		                "dets"
		            ],
		            "longDay":             [
		                "pühapäev",
		                "esmaspäev",
		                "teisipäev",
		                "kolmapäev",
		                "neljapäev",
		                "reede",
		                "laupäev"
		            ],
		            "longMonth":             [
		                "jaanuar",
		                "veebruar",
		                "märts",
		                "aprill",
		                "mai",
		                "juuni",
		                "juuli",
		                "august",
		                "september",
		                "oktoober",
		                "november",
		                "detsember"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "et_EE":     {
		        "date": {},
		        "time": {}
		    },
		    "eu":     {
		        "date":         {
		            "dateSeparator": "-",
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "shortDay":             [
		                "ig",
		                "al",
		                "as",
		                "az",
		                "og",
		                "or",
		                "lr"
		            ],
		            "shortMonth":             [
		                "urt",
		                "ots",
		                "mar",
		                "api",
		                "mai",
		                "eka",
		                "uzt",
		                "abu",
		                "ira",
		                "urr",
		                "aza",
		                "abe"
		            ],
		            "longDay":             [
		                "igandea",
		                "astelehena",
		                "asteartea",
		                "asteazkena",
		                "osteguna",
		                "ostirala",
		                "larunbata"
		            ],
		            "longMonth":             [
		                "urtarrila",
		                "otsaila",
		                "martxoa",
		                "apirila",
		                "maiatza",
		                "ekaina",
		                "uztaila",
		                "abuztua",
		                "iraila",
		                "urria",
		                "azaroa",
		                "abendua"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "eu_ES":     {
		        "date": {},
		        "time": {}
		    },
		    "fa":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "قبل از میلاد",
		                "میلادی"
		            ],
		            "eraAbbr":             [
		                "ق.م.",
		                "م."
		            ],
		            "eraNarrow":             [
		                "ق",
		                "م"
		            ],
		            "shortDay":             [
		                "یکشنبه",
		                "دوشنبه",
		                "سه‌شنبه",
		                "چهارشنبه",
		                "پنجشنبه",
		                "جمعه",
		                "شنبه"
		            ],
		            "shortMonth":             [
		                "ژانویهٔ",
		                "فوریهٔ",
		                "مارس",
		                "آوریل",
		                "مهٔ",
		                "ژوئن",
		                "ژوئیهٔ",
		                "اوت",
		                "سپتامبر",
		                "اکتبر",
		                "نوامبر",
		                "دسامبر"
		            ],
		            "longDay":             [
		                "یکشنبه",
		                "دوشنبه",
		                "سه‌شنبه",
		                "چهارشنبه",
		                "پنجشنبه",
		                "جمعه",
		                "شنبه"
		            ],
		            "longMonth":             [
		                "ژانویهٔ",
		                "فوریهٔ",
		                "مارس",
		                "آوریل",
		                "مهٔ",
		                "ژوئن",
		                "ژوئیهٔ",
		                "اوت",
		                "سپتامبر",
		                "اکتبر",
		                "نوامبر",
		                "دسامبر"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "قبل از ظهر",
		                "بعد از ظهر"
		            ]
		        }
		    },
		    "fa_IR":     {
		        "date": {},
		        "time": {}
		    },
		    "fi":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "ennen Kristuksen syntymää",
		                "jälkeen Kristuksen syntymän"
		            ],
		            "eraAbbr":             [
		                "eKr.",
		                "jKr."
		            ],
		            "shortDay":             [
		                "su",
		                "ma",
		                "ti",
		                "ke",
		                "to",
		                "pe",
		                "la"
		            ],
		            "shortMonth":             [
		                "tammikuuta",
		                "helmikuuta",
		                "maaliskuuta",
		                "huhtikuuta",
		                "toukokuuta",
		                "kesäkuuta",
		                "heinäkuuta",
		                "elokuuta",
		                "syyskuuta",
		                "lokakuuta",
		                "marraskuuta",
		                "joulukuuta"
		            ],
		            "longDay":             [
		                "sunnuntaina",
		                "maanantaina",
		                "tiistaina",
		                "keskiviikkona",
		                "torstaina",
		                "perjantaina",
		                "lauantaina"
		            ],
		            "longMonth":             [
		                "tammikuuta",
		                "helmikuuta",
		                "maaliskuuta",
		                "huhtikuuta",
		                "toukokuuta",
		                "kesäkuuta",
		                "heinäkuuta",
		                "elokuuta",
		                "syyskuuta",
		                "lokakuuta",
		                "marraskuuta",
		                "joulukuuta"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ".",
		            "amPm":             [
		                "ap.",
		                "ip."
		            ]
		        }
		    },
		    "fi_FI":     {
		        "date": {},
		        "time": {}
		    },
		    "fo":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "fyrir Krist",
		                "eftir Krist"
		            ],
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "eraNarrow":             [
		                "f.Kr.",
		                "e.Kr."
		            ],
		            "shortDay":             [
		                "sun",
		                "mán",
		                "týs",
		                "mik",
		                "hós",
		                "frí",
		                "ley"
		            ],
		            "shortMonth":             [
		                "jan",
		                "feb",
		                "mar",
		                "apr",
		                "mai",
		                "jun",
		                "jul",
		                "aug",
		                "sep",
		                "okt",
		                "nov",
		                "des"
		            ],
		            "longDay":             [
		                "sunnudagur",
		                "mánadagur",
		                "týsdagur",
		                "mikudagur",
		                "hósdagur",
		                "fríggjadagur",
		                "leygardagur"
		            ],
		            "longMonth":             [
		                "januar",
		                "februar",
		                "mars",
		                "apríl",
		                "mai",
		                "juni",
		                "juli",
		                "august",
		                "september",
		                "oktober",
		                "november",
		                "desember"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "fo_FO":     {
		        "date": {},
		        "time": {}
		    },
		    "fr":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "avant Jésus-Christ",
		                "après Jésus-Christ"
		            ],
		            "eraAbbr":             [
		                "av. J.-C.",
		                "ap. J.-C."
		            ],
		            "shortDay":             [
		                "dim.",
		                "lun.",
		                "mar.",
		                "mer.",
		                "jeu.",
		                "ven.",
		                "sam."
		            ],
		            "shortMonth":             [
		                "janv.",
		                "févr.",
		                "mars",
		                "avr.",
		                "mai",
		                "juin",
		                "juil.",
		                "août",
		                "sept.",
		                "oct.",
		                "nov.",
		                "déc."
		            ],
		            "longDay":             [
		                "dimanche",
		                "lundi",
		                "mardi",
		                "mercredi",
		                "jeudi",
		                "vendredi",
		                "samedi"
		            ],
		            "longMonth":             [
		                "janvier",
		                "février",
		                "mars",
		                "avril",
		                "mai",
		                "juin",
		                "juillet",
		                "août",
		                "septembre",
		                "octobre",
		                "novembre",
		                "décembre"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "fr_BE":     {
		        "date": {"dateSeparator": "/"},
		        "time": {}
		    },
		    "fr_CA":     {
		        "date": {"dateSeparator": "-"},
		        "time": {}
		    },
		    "fr_CH":     {
		        "date": {"dateSeparator": "."},
		        "time": {}
		    },
		    "fr_FR":     {
		        "date": {},
		        "time": {}
		    },
		    "fr_LU":     {
		        "date": {},
		        "time": {}
		    },
		    "fr_MC":     {
		        "date": {},
		        "time": {}
		    },
		    "gl":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "antes de Cristo",
		                "despois de Cristo"
		            ],
		            "eraAbbr":             [
		                "a.C.",
		                "d.C."
		            ],
		            "shortDay":             [
		                "Dom",
		                "Lun",
		                "Mar",
		                "Mér",
		                "Xov",
		                "Ven",
		                "Sáb"
		            ],
		            "shortMonth":             [
		                "Xan",
		                "Feb",
		                "Mar",
		                "Abr",
		                "Mai",
		                "Xuñ",
		                "Xul",
		                "Ago",
		                "Set",
		                "Out",
		                "Nov",
		                "Dec"
		            ],
		            "longDay":             [
		                "Domingo",
		                "Luns",
		                "Martes",
		                "Mércores",
		                "Xoves",
		                "Venres",
		                "Sábado"
		            ],
		            "longMonth":             [
		                "Xaneiro",
		                "Febreiro",
		                "Marzo",
		                "Abril",
		                "Maio",
		                "Xuño",
		                "Xullo",
		                "Agosto",
		                "Setembro",
		                "Outubro",
		                "Novembro",
		                "Decembro"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "gl_ES":     {
		        "date": {},
		        "time": {}
		    },
		    "gu":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "ઈસવીસન પૂર્વે",
		                "ઇસવીસન"
		            ],
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "eraNarrow":             [
		                "ઇ સ પુ",
		                "ઇસ"
		            ],
		            "shortDay":             [
		                "રવિ",
		                "સોમ",
		                "મંગળ",
		                "બુધ",
		                "ગુરુ",
		                "શુક્ર",
		                "શનિ"
		            ],
		            "shortMonth":             [
		                "જાન્યુ",
		                "ફેબ્રુ",
		                "માર્ચ",
		                "એપ્રિલ",
		                "મે",
		                "જૂન",
		                "જુલાઈ",
		                "ઑગસ્ટ",
		                "સપ્ટે",
		                "ઑક્ટો",
		                "નવે",
		                "ડિસે"
		            ],
		            "longDay":             [
		                "રવિવાર",
		                "સોમવાર",
		                "મંગળવાર",
		                "બુધવાર",
		                "ગુરુવાર",
		                "શુક્રવાર",
		                "શનિવાર"
		            ],
		            "longMonth":             [
		                "જાન્યુઆરી",
		                "ફેબ્રુઆરી",
		                "માર્ચ",
		                "એપ્રિલ",
		                "મે",
		                "જૂન",
		                "જુલાઈ",
		                "ઑગસ્ટ",
		                "સપ્ટેમ્બર",
		                "ઑક્ટ્બર",
		                "નવેમ્બર",
		                "ડિસેમ્બર"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "am",
		                "pm"
		            ]
		        }
		    },
		    "gu_IN":     {
		        "date": {},
		        "time": {}
		    },
		    "he":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "לפני הספירה",
		                "לספירה"
		            ],
		            "eraAbbr":             [
		                "לפנה״ס",
		                "לסה״נ"
		            ],
		            "shortDay":             [
		                "יום א'",
		                "יום ב'",
		                "יום ג'",
		                "יום ד'",
		                "יום ה'",
		                "יום ו'",
		                "שבת"
		            ],
		            "shortMonth":             [
		                "ינו",
		                "פבר",
		                "מרס",
		                "אפר",
		                "מאי",
		                "יונ",
		                "יול",
		                "אוג",
		                "ספט",
		                "אוק",
		                "נוב",
		                "דצמ"
		            ],
		            "longDay":             [
		                "יום ראשון",
		                "יום שני",
		                "יום שלישי",
		                "יום רביעי",
		                "יום חמישי",
		                "יום שישי",
		                "יום שבת"
		            ],
		            "longMonth":             [
		                "ינואר",
		                "פברואר",
		                "מרס",
		                "אפריל",
		                "מאי",
		                "יוני",
		                "יולי",
		                "אוגוסט",
		                "ספטמבר",
		                "אוקטובר",
		                "נובמבר",
		                "דצמבר"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "לפנה\"צ",
		                "אחה\"צ"
		            ]
		        }
		    },
		    "he_IL":     {
		        "date": {},
		        "time": {}
		    },
		    "hi":     {
		        "date":         {
		            "dateSeparator": "-",
		            "eraAbbr":             [
		                "ईसापूर्व",
		                "सन"
		            ],
		            "shortDay":             [
		                "रवि",
		                "सोम",
		                "मंगल",
		                "बुध",
		                "गुरु",
		                "शुक्र",
		                "शनि"
		            ],
		            "shortMonth":             [
		                "जनवरी",
		                "फरवरी",
		                "मार्च",
		                "अप्रैल",
		                "मई",
		                "जून",
		                "जुलाई",
		                "अगस्त",
		                "सितम्बर",
		                "अक्तूबर",
		                "नवम्बर",
		                "दिसम्बर"
		            ],
		            "longDay":             [
		                "रविवार",
		                "सोमवार",
		                "मंगलवार",
		                "बुधवार",
		                "गुरुवार",
		                "शुक्रवार",
		                "शनिवार"
		            ],
		            "longMonth":             [
		                "जनवरी",
		                "फरवरी",
		                "मार्च",
		                "अप्रैल",
		                "मई",
		                "जून",
		                "जुलाई",
		                "अगस्त",
		                "सितम्बर",
		                "अक्तूबर",
		                "नवम्बर",
		                "दिसम्बर"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "hi_IN":     {
		        "date": {},
		        "time": {}
		    },
		    "hr":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "Prije Krista",
		                "Poslije Krista"
		            ],
		            "eraAbbr":             [
		                "pr.n.e.",
		                "AD"
		            ],
		            "shortDay":             [
		                "ned",
		                "pon",
		                "uto",
		                "sri",
		                "čet",
		                "pet",
		                "sub"
		            ],
		            "shortMonth":             [
		                "01.",
		                "02.",
		                "03.",
		                "04.",
		                "05.",
		                "06.",
		                "07.",
		                "08.",
		                "09.",
		                "10.",
		                "11.",
		                "12."
		            ],
		            "longDay":             [
		                "nedjelja",
		                "ponedjeljak",
		                "utorak",
		                "srijeda",
		                "četvrtak",
		                "petak",
		                "subota"
		            ],
		            "longMonth":             [
		                "siječnja",
		                "veljače",
		                "ožujka",
		                "travnja",
		                "svibnja",
		                "lipnja",
		                "srpnja",
		                "kolovoza",
		                "rujna",
		                "listopada",
		                "studenoga",
		                "prosinca"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "hr_HR":     {
		        "date": {},
		        "time": {}
		    },
		    "hu":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "időszámításunk előtt",
		                "időszámításunk szerint"
		            ],
		            "eraAbbr":             [
		                "i. e.",
		                "i. sz."
		            ],
		            "shortDay":             [
		                "V",
		                "H",
		                "K",
		                "Sze",
		                "Cs",
		                "P",
		                "Szo"
		            ],
		            "shortMonth":             [
		                "jan.",
		                "febr.",
		                "márc.",
		                "ápr.",
		                "máj.",
		                "jún.",
		                "júl.",
		                "aug.",
		                "szept.",
		                "okt.",
		                "nov.",
		                "dec."
		            ],
		            "longDay":             [
		                "vasárnap",
		                "hétfő",
		                "kedd",
		                "szerda",
		                "csütörtök",
		                "péntek",
		                "szombat"
		            ],
		            "longMonth":             [
		                "január",
		                "február",
		                "március",
		                "április",
		                "május",
		                "június",
		                "július",
		                "augusztus",
		                "szeptember",
		                "október",
		                "november",
		                "december"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "de.",
		                "du."
		            ]
		        }
		    },
		    "hu_HU":     {
		        "date": {},
		        "time": {}
		    },
		    "hy":     {
		        "date":         {
		            "dateSeparator": "/",
		            "eraAbbr":             [
		                "Ք․Ա․",
		                "Ք․Ե․"
		            ],
		            "shortDay":             [
		                "Կիր",
		                "Երկ",
		                "Երք",
		                "Չոր",
		                "Հնգ",
		                "Ուր",
		                "Շաբ"
		            ],
		            "shortMonth":             [
		                "Յնր",
		                "Փտր",
		                "Մրտ",
		                "Ապր",
		                "Մյս",
		                "Յնս",
		                "Յլս",
		                "Օգս",
		                "Սեպ",
		                "Հոկ",
		                "Նոյ",
		                "Դեկ"
		            ],
		            "longDay":             [
		                "Կիրակի",
		                "Երկուշաբթի",
		                "Երեքշաբթի",
		                "Չորեքշաբթի",
		                "Հինգշաբթի",
		                "Ուրբաթ",
		                "Շաբաթ"
		            ],
		            "longMonth":             [
		                "Յունուար",
		                "Փետրուար",
		                "Մարտ",
		                "Ապրիլ",
		                "Մայիս",
		                "Յունիս",
		                "Յուլիս",
		                "Օգոստոս",
		                "Սեպտեմբեր",
		                "Հոկտեմբեր",
		                "Նոյեմբեր",
		                "Դեկտեմբեր"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "Առ․",
		                "Եր․"
		            ]
		        }
		    },
		    "hy_AM":     {
		        "date": {},
		        "time": {}
		    },
		    "id":     {
		        "date":         {
		            "dateSeparator": "/",
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "shortDay":             [
		                "Min",
		                "Sen",
		                "Sel",
		                "Rab",
		                "Kam",
		                "Jum",
		                "Sab"
		            ],
		            "shortMonth":             [
		                "Jan",
		                "Feb",
		                "Mar",
		                "Apr",
		                "Mei",
		                "Jun",
		                "Jul",
		                "Agu",
		                "Sep",
		                "Okt",
		                "Nov",
		                "Des"
		            ],
		            "longDay":             [
		                "Minggu",
		                "Senin",
		                "Selasa",
		                "Rabu",
		                "Kamis",
		                "Jumat",
		                "Sabtu"
		            ],
		            "longMonth":             [
		                "Januari",
		                "Februari",
		                "Maret",
		                "April",
		                "Mei",
		                "Juni",
		                "Juli",
		                "Agustus",
		                "September",
		                "Oktober",
		                "November",
		                "Desember"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "id_ID":     {
		        "date": {},
		        "time": {}
		    },
		    "is":     {
		        "date":         {
		            "dateSeparator": ".",
		            "eraAbbr":             [
		                "fyrir Krist",
		                "eftir Krist",
		            ],
		            "eraNarrow":             [
		                "f.k.",
		                "e.k."
		            ],
		            "shortDay":             [
		                "sun",
		                "mán",
		                "þri",
		                "mið",
		                "fim",
		                "fös",
		                "lau"
		            ],
		            "shortMonth":             [
		                "jan",
		                "feb",
		                "mar",
		                "apr",
		                "maí",
		                "jún",
		                "júl",
		                "ágú",
		                "sep",
		                "okt",
		                "nóv",
		                "des"
		            ],
		            "longDay":             [
		                "sunnudagur",
		                "mánudagur",
		                "þriðjudagur",
		                "miðvikudagur",
		                "fimmtudagur",
		                "föstudagur",
		                "laugardagur"
		            ],
		            "longMonth":             [
		                "janúar",
		                "febrúar",
		                "mars",
		                "apríl",
		                "maí",
		                "júní",
		                "júlí",
		                "ágúst",
		                "september",
		                "október",
		                "nóvember",
		                "desember"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "f.h.",
		                "e.h."
		            ]
		        }
		    },
		    "is_IS":     {
		        "date": {},
		        "time": {}
		    },
		    "it":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "a.C.",
		                "d.C"
		            ],
		            "eraAbbr":             [
		                "aC",
		                "dC"
		            ],
		            "shortDay":             [
		                "dom",
		                "lun",
		                "mar",
		                "mer",
		                "gio",
		                "ven",
		                "sab"
		            ],
		            "shortMonth":             [
		                "gen",
		                "feb",
		                "mar",
		                "apr",
		                "mag",
		                "giu",
		                "lug",
		                "ago",
		                "set",
		                "ott",
		                "nov",
		                "dic"
		            ],
		            "longDay":             [
		                "domenica",
		                "lunedì",
		                "martedì",
		                "mercoledì",
		                "giovedì",
		                "venerdì",
		                "sabato"
		            ],
		            "longMonth":             [
		                "gennaio",
		                "febbraio",
		                "marzo",
		                "aprile",
		                "maggio",
		                "giugno",
		                "luglio",
		                "agosto",
		                "settembre",
		                "ottobre",
		                "novembre",
		                "dicembre"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ".",
		            "amPm":             [
		                "m.",
		                "p."
		            ]
		        }
		    },
		    "it_CH":     {
		        "date": {"dateSeparator": "."},
		        "time": {}
		    },
		    "it_IT":     {
		        "date": {},
		        "time": {}
		    },
		    "ja":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "紀元前",
		                "西暦"
		            ],
		            "eraAbbr":             [
		                "紀元前",
		                "西暦"
		            ],
		            "shortDay":             [
		                "日",
		                "月",
		                "火",
		                "水",
		                "木",
		                "金",
		                "土"
		            ],
		            "shortMonth":             [
		                "1月",
		                "2月",
		                "3月",
		                "4月",
		                "5月",
		                "6月",
		                "7月",
		                "8月",
		                "9月",
		                "10月",
		                "11月",
		                "12月"
		            ],
		            "longDay":             [
		                "日曜日",
		                "月曜日",
		                "火曜日",
		                "水曜日",
		                "木曜日",
		                "金曜日",
		                "土曜日"
		            ],
		            "longMonth":             [
		                "1月",
		                "2月",
		                "3月",
		                "4月",
		                "5月",
		                "6月",
		                "7月",
		                "8月",
		                "9月",
		                "10月",
		                "11月",
		                "12月"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "午前",
		                "午後"
		            ]
		        }
		    },
		    "ja_JP":     {
		        "date": {},
		        "time": {}
		    },
		    "ka":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "ჩვენს წელთაღრიცხვამდე",
		                "ჩვენი წელთაღრიცხვით"
		            ],
		            "eraAbbr":             [
		                "ჩვენს წელთაღრიცხვამდე",
		                "ჩვენი წელთაღრიცხვით"
		            ],
		            "eraNarrow":             [
		                "ჩვენს წელთაღრიცხვამდე",
		                "ჩვენი წელთაღრიცხვით"
		            ],
		            "shortDay":             [
		                "კვი",
		                "ორშ",
		                "სამ",
		                "ოთხ",
		                "ხუთ",
		                "პარ",
		                "შაბ"
		            ],
		            "shortMonth":             [
		                "იან",
		                "თებ",
		                "მარ",
		                "აპრ",
		                "მაი",
		                "ივნ",
		                "ივლ",
		                "აგვ",
		                "სექ",
		                "ოქტ",
		                "ნოე",
		                "დეკ"
		            ],
		            "longDay":             [
		                "კვირა",
		                "ორშაბათი",
		                "სამშაბათი",
		                "ოთხშაბათი",
		                "ხუთშაბათი",
		                "პარასკევი",
		                "შაბათი"
		            ],
		            "longMonth":             [
		                "იანვარი",
		                "თებერვალი",
		                "მარტი",
		                "აპრილი",
		                "მაისი",
		                "ივნისი",
		                "ივლისი",
		                "აგვისტო",
		                "სექტემბერი",
		                "ოქტომბერი",
		                "ნოემბერი",
		                "დეკემბერი"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "დილის",
		                "საღამოს"
		            ]
		        }
		    },
		    "ka_GE":     {
		        "date": {},
		        "time": {}
		    },
		    "kk":     {
		        "date":         {
		            "dateSeparator": ".",
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "shortDay":             [
		                "жс.",
		                "дс.",
		                "сс.",
		                "ср.",
		                "бс.",
		                "жм.",
		                "сһ."
		            ],
		            "shortMonth":             [
		                "қаң.",
		                "ақп.",
		                "нау.",
		                "сәу.",
		                "мам.",
		                "мау.",
		                "шіл.",
		                "там.",
		                "қыр.",
		                "қаз.",
		                "қар.",
		                "желт."
		            ],
		            "longDay":             [
		                "жексені",
		                "дуйсенбі",
		                "сейсенбі",
		                "сәренбі",
		                "бейсенбі",
		                "жұма",
		                "сенбі"
		            ],
		            "longMonth":             [
		                "қаңтар",
		                "ақпан",
		                "наурыз",
		                "сәуір",
		                "мамыр",
		                "маусым",
		                "шілде",
		                "тамыз",
		                "қыркүйек",
		                "қазан",
		                "қараша",
		                "желтоқсан"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "kk_KZ":     {
		        "date": {},
		        "time": {}
		    },
		    "kn":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "ಈಸಪೂವ೯.",
		                "ಕ್ರಿಸ್ತ ಶಕ"
		            ],
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "shortDay":             [
		                "ರ.",
		                "ಸೋ.",
		                "ಮಂ.",
		                "ಬು.",
		                "ಗು.",
		                "ಶು.",
		                "ಶನಿ."
		            ],
		            "shortMonth":             [
		                "ಜನವರೀ",
		                "ಫೆಬ್ರವರೀ",
		                "ಮಾರ್ಚ್",
		                "ಎಪ್ರಿಲ್",
		                "ಮೆ",
		                "ಜೂನ್",
		                "ಜುಲೈ",
		                "ಆಗಸ್ಟ್",
		                "ಸಪ್ಟೆಂಬರ್",
		                "ಅಕ್ಟೋಬರ್",
		                "ನವೆಂಬರ್",
		                "ಡಿಸೆಂಬರ್"
		            ],
		            "longDay":             [
		                "ರವಿವಾರ",
		                "ಸೋಮವಾರ",
		                "ಮಂಗಳವಾರ",
		                "ಬುಧವಾರ",
		                "ಗುರುವಾರ",
		                "ಶುಕ್ರವಾರ",
		                "ಶನಿವಾರ"
		            ],
		            "longMonth":             [
		                "ಜನವರೀ",
		                "ಫೆಬ್ರವರೀ",
		                "ಮಾರ್ಚ್",
		                "ಎಪ್ರಿಲ್",
		                "ಮೆ",
		                "ಜೂನ್",
		                "ಜುಲೈ",
		                "ಆಗಸ್ಟ್",
		                "ಸಪ್ಟೆಂಬರ್",
		                "ಅಕ್ಟೋಬರ್",
		                "ನವೆಂಬರ್",
		                "ಡಿಸೆಂಬರ್"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "am",
		                "pm"
		            ]
		        }
		    },
		    "kn_IN":     {
		        "date": {},
		        "time": {}
		    },
		    "ko":     {
		        "date":         {
		            "dateSeparator": ". ",
		            "era":             [
		                "서력기원전",
		                "서력기원"
		            ],
		            "eraAbbr":             [
		                "기원전",
		                "서기"
		            ],
		            "shortDay":             [
		                "일",
		                "월",
		                "화",
		                "수",
		                "목",
		                "금",
		                "토"
		            ],
		            "shortMonth":             [
		                "1월",
		                "2월",
		                "3월",
		                "4월",
		                "5월",
		                "6월",
		                "7월",
		                "8월",
		                "9월",
		                "10월",
		                "11월",
		                "12월"
		            ],
		            "longDay":             [
		                "일요일",
		                "월요일",
		                "화요일",
		                "수요일",
		                "목요일",
		                "금요일",
		                "토요일"
		            ],
		            "longMonth":             [
		                "1월",
		                "2월",
		                "3월",
		                "4월",
		                "5월",
		                "6월",
		                "7월",
		                "8월",
		                "9월",
		                "10월",
		                "11월",
		                "12월"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "오전",
		                "오후"
		            ]
		        }
		    },
		    "ko_KR":     {
		        "date": {},
		        "time": {}
		    },
		    "kok":     {
		        "date":         {
		            "dateSeparator": "-",
		            "eraAbbr":             [
		                "क्रिस्तपूर्व",
		                "क्रिस्तशखा"
		            ],
		            "shortDay":             [
		                "रवि",
		                "सोम",
		                "मंगळ",
		                "बुध",
		                "गुरु",
		                "शुक्र",
		                "शनि"
		            ],
		            "shortMonth":             [
		                "जानेवारी",
		                "फेबृवारी",
		                "मार्च",
		                "एप्रिल",
		                "मे",
		                "जून",
		                "जुलै",
		                "ओगस्ट",
		                "सेप्टेंबर",
		                "ओक्टोबर",
		                "नोव्हेंबर",
		                "डिसेंबर"
		            ],
		            "longDay":             [
		                "आदित्यवार",
		                "सोमवार",
		                "मंगळार",
		                "बुधवार",
		                "गुरुवार",
		                "शुक्रवार",
		                "शनिवार"
		            ],
		            "longMonth":             [
		                "जानेवारी",
		                "फेब्रुवारी",
		                "मार्च",
		                "एप्रिल",
		                "मे",
		                "जून",
		                "जुलै",
		                "ओगस्ट",
		                "सेप्टेंबर",
		                "ओक्टोबर",
		                "नोव्हेंबर",
		                "डिसेंबर"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "म.पू.",
		                "म.नं."
		            ]
		        }
		    },
		    "kok_IN":     {
		        "date": {},
		        "time": {}
		    },
		    "lt":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "prieš Kristų",
		                "po Kristaus"
		            ],
		            "eraAbbr":             [
		                "pr. Kr.",
		                "po Kr."
		            ],
		            "shortDay":             [
		                "Sk",
		                "Pr",
		                "An",
		                "Tr",
		                "Kt",
		                "Pn",
		                "Št"
		            ],
		            "shortMonth":             [
		                "Sau",
		                "Vas",
		                "Kov",
		                "Bal",
		                "Geg",
		                "Bir",
		                "Lie",
		                "Rgp",
		                "Rgs",
		                "Spl",
		                "Lap",
		                "Grd"
		            ],
		            "longDay":             [
		                "sekmadienis",
		                "pirmadienis",
		                "antradienis",
		                "trečiadienis",
		                "ketvirtadienis",
		                "penktadienis",
		                "šeštadienis"
		            ],
		            "longMonth":             [
		                "sausio",
		                "vasario",
		                "kovo",
		                "balandžio",
		                "gegužės",
		                "birželio",
		                "liepos",
		                "rugpjūčio",
		                "rugsėjo",
		                "spalio",
		                "lapkričio",
		                "gruodžio"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "priešpiet",
		                "popiet"
		            ]
		        }
		    },
		    "lt_LT":     {
		        "date": {},
		        "time": {}
		    },
		    "lv":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "pirms mūsu ēras",
		                "mūsu ērā"
		            ],
		            "eraAbbr":             [
		                "p.m.ē.",
		                "m.ē."
		            ],
		            "eraNarrow":             [
		                "p.m.ē.",
		                "m.ē."
		            ],
		            "shortDay":             [
		                "Sv",
		                "Pr",
		                "Ot",
		                "Tr",
		                "Ce",
		                "Pk",
		                "Se"
		            ],
		            "shortMonth":             [
		                "janv.",
		                "febr.",
		                "marts",
		                "apr.",
		                "maijs",
		                "jūn.",
		                "jūl.",
		                "aug.",
		                "sept.",
		                "okt.",
		                "nov.",
		                "dec."
		            ],
		            "longDay":             [
		                "svētdiena",
		                "pirmdiena",
		                "otrdiena",
		                "trešdiena",
		                "ceturtdiena",
		                "piektdiena",
		                "sestdiena"
		            ],
		            "longMonth":             [
		                "janvāris",
		                "februāris",
		                "marts",
		                "aprīlis",
		                "maijs",
		                "jūnijs",
		                "jūlijs",
		                "augusts",
		                "septembris",
		                "oktobris",
		                "novembris",
		                "decembris"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "lv_LV":     {
		        "date": {},
		        "time": {}
		    },
		    "mk":     {
		        "date":         {
		            "dateSeparator": ".",
		            "eraAbbr":             [
		                "пр.н.е.",
		                "ае."
		            ],
		            "shortDay":             [
		                "нед.",
		                "пон.",
		                "вт.",
		                "сре.",
		                "чет.",
		                "пет.",
		                "саб."
		            ],
		            "shortMonth":             [
		                "јан.",
		                "фев.",
		                "мар.",
		                "апр.",
		                "мај",
		                "јун.",
		                "јул.",
		                "авг.",
		                "септ.",
		                "окт.",
		                "ноем.",
		                "декем."
		            ],
		            "longDay":             [
		                "недела",
		                "понеделник",
		                "вторник",
		                "среда",
		                "четврток",
		                "петок",
		                "сабота"
		            ],
		            "longMonth":             [
		                "јануари",
		                "февруари",
		                "март",
		                "април",
		                "мај",
		                "јуни",
		                "јули",
		                "август",
		                "септември",
		                "октомври",
		                "ноември",
		                "декември"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "претпладне",
		                "попладне"
		            ]
		        }
		    },
		    "mk_MK":     {
		        "date": {},
		        "time": {}
		    },
		    "ml":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "ക്രിസ്തുവിനു് മുമ്പ്‌",
		                "ക്രിസ്തുവിന് പിന്‍പ്"
		            ],
		            "eraAbbr":             [
		                "ക്രി.മു.",
		                "ക്രി.പി."
		            ],
		            "eraNarrow":             [
		                "ക്രി.മു.",
		                "ക്രി.പി."
		            ],
		            "shortDay":             [
		                "ഞായര്‍",
		                "തിങ്കള്‍",
		                "ചൊവ്വ",
		                "ബുധന്‍",
		                "വ്യാഴം",
		                "വെള്ളി",
		                "ശനി"
		            ],
		            "shortMonth":             [
		                "ജനു",
		                "ഫെബ്രു",
		                "മാര്‍",
		                "ഏപ്രി",
		                "മേയ്",
		                "ജൂണ്‍",
		                "ജൂലൈ",
		                "ഓഗ",
		                "സെപ്റ്റം",
		                "ഒക്ടോ",
		                "നവം",
		                "ഡിസം"
		            ],
		            "longDay":             [
		                "ഞായറാഴ്ച",
		                "തിങ്കളാഴ്ച",
		                "ചൊവ്വാഴ്ച",
		                "ബുധനാഴ്ച",
		                "വ്യാഴാഴ്ച",
		                "വെള്ളിയാഴ്ച",
		                "ശനിയാഴ്ച"
		            ],
		            "longMonth":             [
		                "ജനുവരി",
		                "ഫെബ്രുവരി",
		                "മാര്‍ച്ച്",
		                "ഏപ്രില്‍",
		                "മേയ്",
		                "ജൂണ്‍",
		                "ജൂലൈ",
		                "ഓഗസ്റ്റ്",
		                "സെപ്റ്റംബര്‍",
		                "ഒക്ടോബര്‍",
		                "നവംബര്‍",
		                "ഡിസംബര്‍"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "am",
		                "pm"
		            ]
		        }
		    },
		    "ml_IN":     {
		        "date": {},
		        "time": {}
		    },
		    "mn":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "манай эриний өмнөх",
		                "манай эриний"
		            ],
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "shortDay":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7"
		            ],
		            "shortMonth":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7",
		                "8",
		                "9",
		                "10",
		                "11",
		                "12"
		            ],
		            "longDay":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7"
		            ],
		            "longMonth":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7",
		                "8",
		                "9",
		                "10",
		                "11",
		                "12"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "mn_MN":     {
		        "date": {},
		        "time": {}
		    },
		    "mr":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "ईसवीसनपूर्व",
		                "ईसवीसन"
		            ],
		            "eraAbbr":             [
		                "ई.स.पू.",
		                "ई.स."
		            ],
		            "shortDay":             [
		                "रवि",
		                "सोम",
		                "मंगळ",
		                "बुध",
		                "गुरु",
		                "शुक्र",
		                "शनि"
		            ],
		            "shortMonth":             [
		                "जानेवारी",
		                "फेब्रुवारी",
		                "मार्च",
		                "एप्रिल",
		                "मे",
		                "जून",
		                "जुलै",
		                "ऑगस्ट",
		                "सप्टेंबर",
		                "ऑक्टोबर",
		                "नोव्हेंबर",
		                "डिसेंबर"
		            ],
		            "longDay":             [
		                "रविवार",
		                "सोमवार",
		                "मंगळवार",
		                "बुधवार",
		                "गुरुवार",
		                "शुक्रवार",
		                "शनिवार"
		            ],
		            "longMonth":             [
		                "जानेवारी",
		                "फेब्रुवारी",
		                "मार्च",
		                "एप्रिल",
		                "मे",
		                "जून",
		                "जुलै",
		                "ऑगस्ट",
		                "सप्टेंबर",
		                "ऑक्टोबर",
		                "नोव्हेंबर",
		                "डिसेंबर"
		            ]
		        },
		        "time":         {
		            "timeSeparator": "-",
		            "amPm":             [
		                "am",
		                "pm"
		            ]
		        }
		    },
		    "mr_IN":     {
		        "date": {},
		        "time": {}
		    },
		    "ms":     {
		        "date":         {
		            "dateSeparator": "-",
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "shortDay":             [
		                "Ahd",
		                "Isn",
		                "Sel",
		                "Rab",
		                "Kha",
		                "Jum",
		                "Sab"
		            ],
		            "shortMonth":             [
		                "Jan",
		                "Feb",
		                "Mac",
		                "Apr",
		                "Mei",
		                "Jun",
		                "Jul",
		                "Ogos",
		                "Sep",
		                "Okt",
		                "Nov",
		                "Dis"
		            ],
		            "longDay":             [
		                "Ahad",
		                "Isnin",
		                "Selasa",
		                "Rabu",
		                "Khamis",
		                "Jumaat",
		                "Sabtu"
		            ],
		            "longMonth":             [
		                "Januari",
		                "Februari",
		                "Mac",
		                "April",
		                "Mei",
		                "Jun",
		                "Julai",
		                "Ogos",
		                "September",
		                "Oktober",
		                "November",
		                "Disember"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "ms_BN":     {
		        "date": {},
		        "time": {"timeSeparator": ":"}
		    },
		    "ms_MY":     {
		        "date": {},
		        "time": {}
		    },
		    "mt":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "Qabel Kristu",
		                "Wara Kristu"
		            ],
		            "eraAbbr":             [
		                "QK",
		                "WK"
		            ],
		            "shortDay":             [
		                "Ħad",
		                "Tne",
		                "Tli",
		                "Erb",
		                "Ħam",
		                "Ġim",
		                "Sib"
		            ],
		            "shortMonth":             [
		                "Jan",
		                "Fra",
		                "Mar",
		                "Apr",
		                "Mej",
		                "Ġun",
		                "Lul",
		                "Aww",
		                "Set",
		                "Ott",
		                "Nov",
		                "Diċ"
		            ],
		            "longDay":             [
		                "Il-Ħadd",
		                "It-Tnejn",
		                "It-Tlieta",
		                "L-Erbgħa",
		                "Il-Ħamis",
		                "Il-Ġimgħa",
		                "Is-Sibt"
		            ],
		            "longMonth":             [
		                "Jannar",
		                "Frar",
		                "Marzu",
		                "April",
		                "Mejju",
		                "Ġunju",
		                "Lulju",
		                "Awwissu",
		                "Settembru",
		                "Ottubru",
		                "Novembru",
		                "Diċembru"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "QN",
		                "WN"
		            ]
		        }
		    },
		    "mt_MT":     {
		        "date": {},
		        "time": {}
		    },
		    "nb":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "f.Kr.",
		                "e.Kr."
		            ],
		            "eraAbbr":             [
		                "f.Kr.",
		                "e.Kr."
		            ],
		            "shortDay":             [
		                "søn.",
		                "man.",
		                "tir.",
		                "ons.",
		                "tor.",
		                "fre.",
		                "lør."
		            ],
		            "shortMonth":             [
		                "jan.",
		                "feb.",
		                "mars",
		                "apr.",
		                "mai",
		                "juni",
		                "juli",
		                "aug.",
		                "sep.",
		                "okt.",
		                "nov.",
		                "des."
		            ],
		            "longDay":             [
		                "søndag",
		                "mandag",
		                "tirsdag",
		                "onsdag",
		                "torsdag",
		                "fredag",
		                "lørdag"
		            ],
		            "longMonth":             [
		                "januar",
		                "februar",
		                "mars",
		                "april",
		                "mai",
		                "juni",
		                "juli",
		                "august",
		                "september",
		                "oktober",
		                "november",
		                "desember"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ".",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "nb_NO":     {
		        "date": {},
		        "time": {}
		    },
		    "nl":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "Voor Christus",
		                "Anno Domini"
		            ],
		            "eraAbbr":             [
		                "v. Chr.",
		                "n. Chr."
		            ],
		            "shortDay":             [
		                "zo",
		                "ma",
		                "di",
		                "wo",
		                "do",
		                "vr",
		                "za"
		            ],
		            "shortMonth":             [
		                "jan.",
		                "feb.",
		                "mrt.",
		                "apr.",
		                "mei",
		                "jun.",
		                "jul.",
		                "aug.",
		                "sep.",
		                "okt.",
		                "nov.",
		                "dec."
		            ],
		            "longDay":             [
		                "zondag",
		                "maandag",
		                "dinsdag",
		                "woensdag",
		                "donderdag",
		                "vrijdag",
		                "zaterdag"
		            ],
		            "longMonth":             [
		                "januari",
		                "februari",
		                "maart",
		                "april",
		                "mei",
		                "juni",
		                "juli",
		                "augustus",
		                "september",
		                "oktober",
		                "november",
		                "december"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "nl_BE":     {
		        "date": {"dateSeparator": "/"},
		        "time": {}
		    },
		    "nl_NL":     {
		        "date": {},
		        "time": {}
		    },
		    "nn":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "f.Kr.",
		                "e.Kr."
		            ],
		            "eraAbbr":             [
		                "f.Kr.",
		                "e.Kr."
		            ],
		            "shortDay":             [
		                "sø.",
		                "må.",
		                "ty.",
		                "on.",
		                "to.",
		                "fr.",
		                "la."
		            ],
		            "shortMonth":             [
		                "jan",
		                "feb",
		                "mar",
		                "apr",
		                "mai",
		                "jun",
		                "jul",
		                "aug",
		                "sep",
		                "okt",
		                "nov",
		                "des"
		            ],
		            "longDay":             [
		                "søndag",
		                "måndag",
		                "tysdag",
		                "onsdag",
		                "torsdag",
		                "fredag",
		                "laurdag"
		            ],
		            "longMonth":             [
		                "januar",
		                "februar",
		                "mars",
		                "april",
		                "mai",
		                "juni",
		                "juli",
		                "august",
		                "september",
		                "oktober",
		                "november",
		                "desember"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ".",
		            "amPm":             [
		                "formiddag",
		                "ettermiddag"
		            ]
		        }
		    },
		    "nn_NO":     {
		        "date": {},
		        "time": {}
		    },
		    "pa":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "ਈਸਾਪੂਰਵ",
		                "ਸੰਨ"
		            ],
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "shortDay":             [
		                "ਐਤ.",
		                "ਸੋਮ.",
		                "ਮੰਗਲ.",
		                "ਬੁਧ.",
		                "ਵੀਰ.",
		                "ਸ਼ੁਕਰ.",
		                "ਸ਼ਨੀ."
		            ],
		            "shortMonth":             [
		                "ਜਨਵਰੀ",
		                "ਫ਼ਰਵਰੀ",
		                "ਮਾਰਚ",
		                "ਅਪ੍ਰੈਲ",
		                "ਮਈ",
		                "ਜੂਨ",
		                "ਜੁਲਾਈ",
		                "ਅਗਸਤ",
		                "ਸਤੰਬਰ",
		                "ਅਕਤੂਬਰ",
		                "ਨਵੰਬਰ",
		                "ਦਸੰਬਰ"
		            ],
		            "longDay":             [
		                "ਐਤਵਾਰ",
		                "ਸੋਮਵਾਰ",
		                "ਮੰਗਲਵਾਰ",
		                "ਬੁਧਵਾਰ",
		                "ਵੀਰਵਾਰ",
		                "ਸ਼ੁੱਕਰਵਾਰ",
		                "ਸ਼ਨੀਚਰਵਾਰ"
		            ],
		            "longMonth":             [
		                "ਜਨਵਰੀ",
		                "ਫ਼ਰਵਰੀ",
		                "ਮਾਰਚ",
		                "ਅਪ੍ਰੈਲ",
		                "ਮਈ",
		                "ਜੂਨ",
		                "ਜੁਲਾਈ",
		                "ਅਗਸਤ",
		                "ਸਤੰਬਰ",
		                "ਅਕਤੂਬਰ",
		                "ਨਵੰਬਰ",
		                "ਦਸੰਬਰ"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "ਸਵੇਰੇ",
		                "ਸ਼ਾਮ"
		            ]
		        }
		    },
		    "pa_IN":     {
		        "date": {},
		        "time": {}
		    },
		    "pl":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "p.n.e.",
		                "n.e."
		            ],
		            "eraAbbr":             [
		                "p.n.e.",
		                "n.e."
		            ],
		            "shortDay":             [
		                "niedz.",
		                "pon.",
		                "wt.",
		                "śr.",
		                "czw.",
		                "pt.",
		                "sob."
		            ],
		            "shortMonth":             [
		                "sty",
		                "lut",
		                "mar",
		                "kwi",
		                "maj",
		                "cze",
		                "lip",
		                "sie",
		                "wrz",
		                "paź",
		                "lis",
		                "gru"
		            ],
		            "longDay":             [
		                "niedziela",
		                "poniedziałek",
		                "wtorek",
		                "środa",
		                "czwartek",
		                "piątek",
		                "sobota"
		            ],
		            "longMonth":             [
		                "stycznia",
		                "lutego",
		                "marca",
		                "kwietnia",
		                "maja",
		                "czerwca",
		                "lipca",
		                "sierpnia",
		                "września",
		                "października",
		                "listopada",
		                "grudnia"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "pl_PL":     {
		        "date": {},
		        "time": {}
		    },
		    "pt":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "Antes de Cristo",
		                "Ano do Senhor"
		            ],
		            "eraAbbr":             [
		                "a.C.",
		                "d.C."
		            ],
		            "shortDay":             [
		                "dom",
		                "seg",
		                "ter",
		                "qua",
		                "qui",
		                "sex",
		                "sáb"
		            ],
		            "shortMonth":             [
		                "jan",
		                "fev",
		                "mar",
		                "abr",
		                "mai",
		                "jun",
		                "jul",
		                "ago",
		                "set",
		                "out",
		                "nov",
		                "dez"
		            ],
		            "longDay":             [
		                "domingo",
		                "segunda-feira",
		                "terça-feira",
		                "quarta-feira",
		                "quinta-feira",
		                "sexta-feira",
		                "sábado"
		            ],
		            "longMonth":             [
		                "janeiro",
		                "fevereiro",
		                "março",
		                "abril",
		                "maio",
		                "junho",
		                "julho",
		                "agosto",
		                "setembro",
		                "outubro",
		                "novembro",
		                "dezembro"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "pt_BR":     {
		        "date": {},
		        "time": {}
		    },
		    "pt_PT":     {
		        "date":         {
		            "shortMonth":             [
		                "Jan",
		                "Fev",
		                "Mar",
		                "Abr",
		                "Mai",
		                "Jun",
		                "Jul",
		                "Ago",
		                "Set",
		                "Out",
		                "Nov",
		                "Dez"
		            ],
		            "longMonth":             [
		                "Janeiro",
		                "Fevereiro",
		                "Março",
		                "Abril",
		                "Maio",
		                "Junho",
		                "Julho",
		                "Agosto",
		                "Setembro",
		                "Outubro",
		                "Novembro",
		                "Dezembro"
		            ]
		        },
		        "time": {"amPm":         [
		            "Antes do meio-dia",
		            "Depois do meio-dia"
		        ]}
		    },
		    "ro":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "înainte de Hristos",
		                "după Hristos"
		            ],
		            "eraAbbr":             [
		                "î.Hr.",
		                "d.Hr."
		            ],
		            "shortDay":             [
		                "Du",
		                "Lu",
		                "Ma",
		                "Mi",
		                "Jo",
		                "Vi",
		                "Sâ"
		            ],
		            "shortMonth":             [
		                "ian.",
		                "feb.",
		                "mar.",
		                "apr.",
		                "mai",
		                "iun.",
		                "iul.",
		                "aug.",
		                "sept.",
		                "oct.",
		                "nov.",
		                "dec."
		            ],
		            "longDay":             [
		                "duminică",
		                "luni",
		                "marți",
		                "miercuri",
		                "joi",
		                "vineri",
		                "sâmbătă"
		            ],
		            "longMonth":             [
		                "ianuarie",
		                "februarie",
		                "martie",
		                "aprilie",
		                "mai",
		                "iunie",
		                "iulie",
		                "august",
		                "septembrie",
		                "octombrie",
		                "noiembrie",
		                "decembrie"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "ro_RO":     {
		        "date": {},
		        "time": {}
		    },
		    "ru":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "до н.э.",
		                "н.э."
		            ],
		            "eraAbbr":             [
		                "до н.э.",
		                "н.э."
		            ],
		            "shortDay":             [
		                "Вс",
		                "Пн",
		                "Вт",
		                "Ср",
		                "Чт",
		                "Пт",
		                "Сб"
		            ],
		            "shortMonth":             [
		                "янв.",
		                "февр.",
		                "марта",
		                "апр.",
		                "мая",
		                "июня",
		                "июля",
		                "авг.",
		                "сент.",
		                "окт.",
		                "нояб.",
		                "дек."
		            ],
		            "longDay":             [
		                "воскресенье",
		                "понедельник",
		                "вторник",
		                "среда",
		                "четверг",
		                "пятница",
		                "суббота"
		            ],
		            "longMonth":             [
		                "января",
		                "февраля",
		                "марта",
		                "апреля",
		                "мая",
		                "июня",
		                "июля",
		                "августа",
		                "сентября",
		                "октября",
		                "ноября",
		                "декабря"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "ru_RU":     {
		        "date": {},
		        "time": {}
		    },
		    "se":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "ovdal Kristtusa",
		                "maŋŋel Kristtusa"
		            ],
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "eraNarrow":             [
		                "o.Kr.",
		                "m.Kr."
		            ],
		            "shortDay":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7"
		            ],
		            "shortMonth":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7",
		                "8",
		                "9",
		                "10",
		                "11",
		                "12"
		            ],
		            "longDay":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7"
		            ],
		            "longMonth":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7",
		                "8",
		                "9",
		                "10",
		                "11",
		                "12"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "se_NO":     {
		        "date": {},
		        "time": {}
		    },
		    "sk":     {
		        "date":         {
		            "dateSeparator": ".",
		            "eraAbbr":             [
		                "pred n.l.",
		                "n.l."
		            ],
		            "shortDay":             [
		                "ne",
		                "po",
		                "ut",
		                "st",
		                "št",
		                "pi",
		                "so"
		            ],
		            "shortMonth":             [
		                "jan",
		                "feb",
		                "mar",
		                "apr",
		                "máj",
		                "jún",
		                "júl",
		                "aug",
		                "sep",
		                "okt",
		                "nov",
		                "dec"
		            ],
		            "longDay":             [
		                "nedeľa",
		                "pondelok",
		                "utorok",
		                "streda",
		                "štvrtok",
		                "piatok",
		                "sobota"
		            ],
		            "longMonth":             [
		                "januára",
		                "februára",
		                "marca",
		                "apríla",
		                "mája",
		                "júna",
		                "júla",
		                "augusta",
		                "septembra",
		                "októbra",
		                "novembra",
		                "decembra"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "dopoludnia",
		                "popoludní"
		            ]
		        }
		    },
		    "sk_SK":     {
		        "date": {},
		        "time": {}
		    },
		    "sl":     {
		        "date":         {
		            "dateSeparator": ". ",
		            "era":             [
		                "pred našim štetjem",
		                "naše štetje"
		            ],
		            "eraAbbr":             [
		                "pr. n. št.",
		                "po Kr."
		            ],
		            "shortDay":             [
		                "ned",
		                "pon",
		                "tor",
		                "sre",
		                "čet",
		                "pet",
		                "sob"
		            ],
		            "shortMonth":             [
		                "jan",
		                "feb",
		                "mar",
		                "apr",
		                "maj",
		                "jun",
		                "jul",
		                "avg",
		                "sep",
		                "okt",
		                "nov",
		                "dec"
		            ],
		            "longDay":             [
		                "nedelja",
		                "ponedeljek",
		                "torek",
		                "sreda",
		                "četrtek",
		                "petek",
		                "sobota"
		            ],
		            "longMonth":             [
		                "januar",
		                "februar",
		                "marec",
		                "april",
		                "maj",
		                "junij",
		                "julij",
		                "avgust",
		                "september",
		                "oktober",
		                "november",
		                "december"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "dop.",
		                "pop."
		            ]
		        }
		    },
		    "sl_SI":     {
		        "date": {},
		        "time": {}
		    },
		    "sq":     {
		        "date":         {
		            "dateSeparator": "-",
		            "eraAbbr":             [
		                "p.e.r.",
		                "n.e.r."
		            ],
		            "shortDay":             [
		                "Die",
		                "Hën",
		                "Mar",
		                "Mër",
		                "Enj",
		                "Pre",
		                "Sht"
		            ],
		            "shortMonth":             [
		                "Jan",
		                "Shk",
		                "Mar",
		                "Pri",
		                "Maj",
		                "Qer",
		                "Kor",
		                "Gsh",
		                "Sht",
		                "Tet",
		                "Nën",
		                "Dhj"
		            ],
		            "longDay":             [
		                "e diel",
		                "e hënë",
		                "e martë",
		                "e mërkurë",
		                "e enjte",
		                "e premte",
		                "e shtunë"
		            ],
		            "longMonth":             [
		                "janar",
		                "shkurt",
		                "mars",
		                "prill",
		                "maj",
		                "qershor",
		                "korrik",
		                "gusht",
		                "shtator",
		                "tetor",
		                "nëntor",
		                "dhjetor"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ".",
		            "amPm":             [
		                "PD",
		                "MD"
		            ]
		        }
		    },
		    "sq_AL":     {
		        "date": {},
		        "time": {}
		    },
		    "sr":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "Пре нове ере",
		                "Нове ере"
		            ],
		            "eraAbbr":             [
		                "п. н. е.",
		                "н. е"
		            ],
		            "eraNarrow":             [
		                "п.н.е.",
		                "н.е."
		            ],
		            "shortDay":             [
		                "нед",
		                "пон",
		                "уто",
		                "сре",
		                "чет",
		                "пет",
		                "суб"
		            ],
		            "shortMonth":             [
		                "јан",
		                "феб",
		                "мар",
		                "апр",
		                "мај",
		                "јун",
		                "јул",
		                "авг",
		                "сеп",
		                "окт",
		                "нов",
		                "дец"
		            ],
		            "longDay":             [
		                "недеља",
		                "понедељак",
		                "уторак",
		                "среда",
		                "четвртак",
		                "петак",
		                "субота"
		            ],
		            "longMonth":             [
		                "јануар",
		                "фебруар",
		                "март",
		                "април",
		                "мај",
		                "јун",
		                "јул",
		                "август",
		                "септембар",
		                "октобар",
		                "новембар",
		                "децембар"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ".",
		            "amPm":             [
		                "пре подне",
		                "поподне"
		            ]
		        }
		    },
		    "sr_BA":     {
		        "date": {},
		        "time": {}
		    },
		    "sr_CS":     {
		        "date": {},
		        "time": {}
		    },
		    "sv":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "före Kristus",
		                "efter Kristus"
		            ],
		            "eraAbbr":             [
		                "f.Kr.",
		                "e.Kr."
		            ],
		            "shortDay":             [
		                "sön",
		                "mån",
		                "tis",
		                "ons",
		                "tors",
		                "fre",
		                "lör"
		            ],
		            "shortMonth":             [
		                "jan",
		                "feb",
		                "mar",
		                "apr",
		                "maj",
		                "jun",
		                "jul",
		                "aug",
		                "sep",
		                "okt",
		                "nov",
		                "dec"
		            ],
		            "longDay":             [
		                "söndag",
		                "måndag",
		                "tisdag",
		                "onsdag",
		                "torsdag",
		                "fredag",
		                "lördag"
		            ],
		            "longMonth":             [
		                "januari",
		                "februari",
		                "mars",
		                "april",
		                "maj",
		                "juni",
		                "juli",
		                "augusti",
		                "september",
		                "oktober",
		                "november",
		                "december"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ".",
		            "amPm":             [
		                "fm",
		                "em"
		            ]
		        }
		    },
		    "sv_FI":     {
		        "date": {},
		        "time": {}
		    },
		    "sv_SE":     {
		        "date": {},
		        "time": {}
		    },
		    "sw":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "Kabla ya Kristo",
		                "Baada ya Kristo"
		            ],
		            "eraAbbr":             [
		                "KK",
		                "BK"
		            ],
		            "shortDay":             [
		                "Jpi",
		                "Jtt",
		                "Jnn",
		                "Jtn",
		                "Alh",
		                "Iju",
		                "Jmo"
		            ],
		            "shortMonth":             [
		                "Jan",
		                "Feb",
		                "Mac",
		                "Apr",
		                "Mei",
		                "Jun",
		                "Jul",
		                "Ago",
		                "Sep",
		                "Okt",
		                "Nov",
		                "Des"
		            ],
		            "longDay":             [
		                "Jumapili",
		                "Jumatatu",
		                "Jumanne",
		                "Jumatano",
		                "Alhamisi",
		                "Ijumaa",
		                "Jumamosi"
		            ],
		            "longMonth":             [
		                "Januari",
		                "Februari",
		                "Machi",
		                "Aprili",
		                "Mei",
		                "Juni",
		                "Julai",
		                "Agosti",
		                "Septemba",
		                "Oktoba",
		                "Novemba",
		                "Desemba"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "sw_KE":     {
		        "date": {},
		        "time": {}
		    },
		    "syr":     {
		        "date":         {
		            "dateSeparator": "-",
		            "shortDay":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7"
		            ],
		            "shortMonth":             [
		                "܏ܟܢ ܏ܒ",
		                "ܫܒܛ",
		                "ܐܕܪ",
		                "ܢܝܣܢ",
		                "ܐܝܪ",
		                "ܚܙܝܪܢ",
		                "ܬܡܘܙ",
		                "ܐܒ",
		                "ܐܝܠܘܠ",
		                "܏ܬܫ ܏ܐ",
		                "܏ܬܫ ܏ܒ",
		                "܏ܟܢ ܏ܐ"
		            ],
		            "longDay":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7"
		            ],
		            "longMonth":             [
		                "܏ܟܢ ܏ܒ",
		                "ܫܒܛ",
		                "ܐܕܪ",
		                "ܢܝܣܢ",
		                "ܐܝܪ",
		                "ܚܙܝܪܢ",
		                "ܬܡܘܙ",
		                "ܐܒ",
		                "ܐܝܠܘܠ",
		                "܏ܬܫ ܏ܐ",
		                "܏ܬܫ ܏ܒ",
		                "܏ܟܢ ܏ܐ"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "syr_SY":     {
		        "date": {},
		        "time": {}
		    },
		    "ta":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "கிறிஸ்துவுக்கு முன்",
		                "அனோ டோமினி"
		            ],
		            "eraAbbr":             [
		                "கிமு",
		                "கிபி"
		            ],
		            "shortDay":             [
		                "ஞா",
		                "தி",
		                "செ",
		                "பு",
		                "வி",
		                "வெ",
		                "ச"
		            ],
		            "shortMonth":             [
		                "ஜன.",
		                "பிப்.",
		                "மார்.",
		                "ஏப்.",
		                "மே",
		                "ஜூன்",
		                "ஜூலை",
		                "ஆக.",
		                "செப்.",
		                "அக்.",
		                "நவ.",
		                "டிச."
		            ],
		            "longDay":             [
		                "ஞாயிறு",
		                "திங்கள்",
		                "செவ்வாய்",
		                "புதன்",
		                "வியாழன்",
		                "வெள்ளி",
		                "சனி"
		            ],
		            "longMonth":             [
		                "ஜனவரி",
		                "பிப்ரவரி",
		                "மார்ச்",
		                "ஏப்ரல்",
		                "மே",
		                "ஜூன்",
		                "ஜூலை",
		                "ஆகஸ்ட்",
		                "செப்டம்பர்",
		                "அக்டோபர்",
		                "நவம்பர்",
		                "டிசம்பர்"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "am",
		                "pm"
		            ]
		        }
		    },
		    "ta_IN":     {
		        "date": {},
		        "time": {}
		    },
		    "te":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "ఈసాపూర్వ.",
		                "సన్."
		            ],
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "shortDay":             [
		                "ఆది",
		                "సోమ",
		                "మంగళ",
		                "బుధ",
		                "గురు",
		                "శుక్ర",
		                "శని"
		            ],
		            "shortMonth":             [
		                "జనవరి",
		                "ఫిబ్రవరి",
		                "మార్చి",
		                "ఏప్రిల్",
		                "మే",
		                "జూన్",
		                "జూలై",
		                "ఆగస్టు",
		                "సెప్టెంబర్",
		                "అక్టోబర్",
		                "నవంబర్",
		                "డిసెంబర్"
		            ],
		            "longDay":             [
		                "ఆదివారం",
		                "సోమవారం",
		                "మంగళవారం",
		                "బుధవారం",
		                "గురువారం",
		                "శుక్రవారం",
		                "శనివారం"
		            ],
		            "longMonth":             [
		                "జనవరి",
		                "ఫిబ్రవరి",
		                "మార్చి",
		                "ఏప్రిల్",
		                "మే",
		                "జూన్",
		                "జూలై",
		                "ఆగస్టు",
		                "సెప్టెంబర్",
		                "అక్టోబర్",
		                "నవంబర్",
		                "డిసెంబర్"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "am",
		                "pm"
		            ]
		        }
		    },
		    "te_IN":     {
		        "date": {},
		        "time": {}
		    },
		    "th":     {
		        "date":         {
		            "dateSeparator": "/",
		            "era":             [
		                "ปีก่อนคริสต์ศักราช",
		                "คริสต์ศักราช"
		            ],
		            "eraAbbr":             [
		                "ปีก่อน ค.ศ.",
		                "ค.ศ."
		            ],
		            "eraNarrow": ["ก่อน ค.ศ."],
		            "shortDay":             [
		                "อา.",
		                "จ.",
		                "อ.",
		                "พ.",
		                "พฤ.",
		                "ศ.",
		                "ส."
		            ],
		            "shortMonth":             [
		                "ม.ค.",
		                "ก.พ.",
		                "มี.ค.",
		                "เม.ย.",
		                "พ.ค.",
		                "มิ.ย.",
		                "ก.ค.",
		                "ส.ค.",
		                "ก.ย.",
		                "ต.ค.",
		                "พ.ย.",
		                "ธ.ค."
		            ],
		            "longDay":             [
		                "วันอาทิตย์",
		                "วันจันทร์",
		                "วันอังคาร",
		                "วันพุธ",
		                "วันพฤหัสบดี",
		                "วันศุกร์",
		                "วันเสาร์"
		            ],
		            "longMonth":             [
		                "มกราคม",
		                "กุมภาพันธ์",
		                "มีนาคม",
		                "เมษายน",
		                "พฤษภาคม",
		                "มิถุนายน",
		                "กรกฎาคม",
		                "สิงหาคม",
		                "กันยายน",
		                "ตุลาคม",
		                "พฤศจิกายน",
		                "ธันวาคม"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "ก่อนเที่ยง",
		                "หลังเที่ยง"
		            ]
		        }
		    },
		    "th_TH":     {
		        "date": {},
		        "time": {}
		    },
		    "tn":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "BC",
		                "AD"
		            ],
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "shortDay":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7"
		            ],
		            "shortMonth":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7",
		                "8",
		                "9",
		                "10",
		                "11",
		                "12"
		            ],
		            "longDay":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7"
		            ],
		            "longMonth":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7",
		                "8",
		                "9",
		                "10",
		                "11",
		                "12"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "tn_ZA":     {
		        "date": {},
		        "time": {}
		    },
		    "tr":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "Milattan Önce",
		                "Milattan Sonra"
		            ],
		            "eraAbbr":             [
		                "MÖ",
		                "MS"
		            ],
		            "shortDay":             [
		                "Paz",
		                "Pzt",
		                "Sal",
		                "Çar",
		                "Per",
		                "Cum",
		                "Cmt"
		            ],
		            "shortMonth":             [
		                "Oca",
		                "Şub",
		                "Mar",
		                "Nis",
		                "May",
		                "Haz",
		                "Tem",
		                "Ağu",
		                "Eyl",
		                "Eki",
		                "Kas",
		                "Ara"
		            ],
		            "longDay":             [
		                "Pazar",
		                "Pazartesi",
		                "Salı",
		                "Çarşamba",
		                "Perşembe",
		                "Cuma",
		                "Cumartesi"
		            ],
		            "longMonth":             [
		                "Ocak",
		                "Şubat",
		                "Mart",
		                "Nisan",
		                "Mayıs",
		                "Haziran",
		                "Temmuz",
		                "Ağustos",
		                "Eylül",
		                "Ekim",
		                "Kasım",
		                "Aralık"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "tr_TR":     {
		        "date": {},
		        "time": {}
		    },
		    "uk":     {
		        "date":         {
		            "dateSeparator": ".",
		            "era":             [
		                "до нашої ери",
		                "нашої ери"
		            ],
		            "eraAbbr":             [
		                "до н.е.",
		                "н.е."
		            ],
		            "shortDay":             [
		                "Нд",
		                "Пн",
		                "Вт",
		                "Ср",
		                "Чт",
		                "Пт",
		                "Сб"
		            ],
		            "shortMonth":             [
		                "січ.",
		                "лют.",
		                "бер.",
		                "квіт.",
		                "трав.",
		                "черв.",
		                "лип.",
		                "серп.",
		                "вер.",
		                "жовт.",
		                "лист.",
		                "груд."
		            ],
		            "longDay":             [
		                "Неділя",
		                "Понеділок",
		                "Вівторок",
		                "Середа",
		                "Четвер",
		                "Пʼятниця",
		                "Субота"
		            ],
		            "longMonth":             [
		                "січня",
		                "лютого",
		                "березня",
		                "квітня",
		                "травня",
		                "червня",
		                "липня",
		                "серпня",
		                "вересня",
		                "жовтня",
		                "листопада",
		                "грудня"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "дп",
		                "пп"
		            ]
		        }
		    },
		    "uk_UA":     {
		        "date": {},
		        "time": {}
		    },
		    "uz":     {
		        "date":         {
		            "dateSeparator": "-",
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "shortDay":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7"
		            ],
		            "shortMonth":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7",
		                "8",
		                "9",
		                "10",
		                "11",
		                "12"
		            ],
		            "longDay":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7"
		            ],
		            "longMonth":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7",
		                "8",
		                "9",
		                "10",
		                "11",
		                "12"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "uz_UZ":     {
		        "date": {},
		        "time": {}
		    },
		    "vi":     {
		        "date":         {
		            "dateSeparator": "/",
		            "eraAbbr":             [
		                "tr. CN",
		                "sau CN"
		            ],
		            "shortDay":             [
		                "CN",
		                "Th 2",
		                "Th 3",
		                "Th 4",
		                "Th 5",
		                "Th 6",
		                "Th 7"
		            ],
		            "shortMonth":             [
		                "thg 1",
		                "thg 2",
		                "thg 3",
		                "thg 4",
		                "thg 5",
		                "thg 6",
		                "thg 7",
		                "thg 8",
		                "thg 9",
		                "thg 10",
		                "thg 11",
		                "thg 12"
		            ],
		            "longDay":             [
		                "Chủ nhật",
		                "Thứ hai",
		                "Thứ ba",
		                "Thứ tư",
		                "Thứ năm",
		                "Thứ sáu",
		                "Thứ bảy"
		            ],
		            "longMonth":             [
		                "tháng một",
		                "tháng hai",
		                "tháng ba",
		                "tháng tư",
		                "tháng năm",
		                "tháng sáu",
		                "tháng bảy",
		                "tháng tám",
		                "tháng chín",
		                "tháng mười",
		                "tháng mười một",
		                "tháng mười hai"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "SA",
		                "CH"
		            ]
		        }
		    },
		    "vi_VN":     {
		        "date": {},
		        "time": {}
		    },
		    "xh":     {
		        "date":         {
		        	"dateSeparator": "-",
		            "era":             [
		                "BC",
		                "umnyaka wokuzalwa kukaYesu"
		            ],
		            "eraAbbr":             [
		                "BCE",
		                "CE"
		            ],
		            "shortDay":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7"
		            ],
		            "shortMonth":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7",
		                "8",
		                "9",
		                "10",
		                "11",
		                "12"
		            ],
		            "longDay":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7"
		            ],
		            "longMonth":             [
		                "1",
		                "2",
		                "3",
		                "4",
		                "5",
		                "6",
		                "7",
		                "8",
		                "9",
		                "10",
		                "11",
		                "12"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "xh_ZA":     {
		        "date": {},
		        "time": {}
		    },
		    "zh":     {
		        "date":         {
		            "dateSeparator": "-",
		            "era":             [
		                "公元前",
		                "公元"
		            ],
		            "eraAbbr":             [
		                "公元前",
		                "公元"
		            ],
		            "shortDay":             [
		                "周日",
		                "周一",
		                "周二",
		                "周三",
		                "周四",
		                "周五",
		                "周六"
		            ],
		            "shortMonth":             [
		                "1月",
		                "2月",
		                "3月",
		                "4月",
		                "5月",
		                "6月",
		                "7月",
		                "8月",
		                "9月",
		                "10月",
		                "11月",
		                "12月"
		            ],
		            "longDay":             [
		                "星期日",
		                "星期一",
		                "星期二",
		                "星期三",
		                "星期四",
		                "星期五",
		                "星期六"
		            ],
		            "longMonth":             [
		                "1月",
		                "2月",
		                "3月",
		                "4月",
		                "5月",
		                "6月",
		                "7月",
		                "8月",
		                "9月",
		                "10月",
		                "11月",
		                "12月"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "上午",
		                "下午"
		            ]
		        }
		    },
		    "zh_CN":     {
		        "date": {},
		        "time": {}
		    },
		    "zh_HK":     {
		        "date": {},
		        "time": {}
		    },
		    "zh_MO":     {
		        "date": {},
		        "time": {}
		    },
		    "zh_SG":     {
		        "date": {},
		        "time": {}
		    },
		    "zh_TW":     {
		        "date": {},
		        "time": {}
		    },
		    "zu":     {
		        "date":         {
		            "dateSeparator": "-",
		            "eraAbbr":             [
		                "BC",
		                "AD"
		            ],
		            "shortDay":             [
		                "Son",
		                "Mso",
		                "Bil",
		                "Tha",
		                "Sin",
		                "Hla",
		                "Mgq"
		            ],
		            "shortMonth":             [
		                "Jan",
		                "Feb",
		                "Mas",
		                "Apr",
		                "Mey",
		                "Jun",
		                "Jul",
		                "Aga",
		                "Sep",
		                "Okt",
		                "Nov",
		                "Dis"
		            ],
		            "longDay":             [
		                "Sonto",
		                "Msombuluko",
		                "Lwesibili",
		                "Lwesithathu",
		                "uLwesine",
		                "Lwesihlanu",
		                "Mgqibelo"
		            ],
		            "longMonth":             [
		                "Januwari",
		                "Februwari",
		                "Mashi",
		                "Apreli",
		                "Meyi",
		                "Juni",
		                "Julayi",
		                "Agasti",
		                "Septhemba",
		                "Okthoba",
		                "Novemba",
		                "Disemba"
		            ]
		        },
		        "time":         {
		            "timeSeparator": ":",
		            "amPm":             [
		                "AM",
		                "PM"
		            ]
		        }
		    },
		    "zu_ZA":     {
		        "date": {},
		        "time": {}
		    }
		}
		_g_n_g.formatExist = function (locale/*:String*/, type/*:String*/)/*:Boolean*/
		{
			return (locale && type && _g_n_g.DEFAULT_FORMAT_STRING[locale] && _g_n_g.DEFAULT_FORMAT_STRING[locale][type]);
		}
		/**
		 * @private
		 * Get Default predefined format string according to the current locale.
		 */
		_g_n_g.getDefaultDateFormat = function (locale/*:String*/, type/*:String*/)/*:String*/
		{
			return _g_n_g.DEFAULT_FORMAT_STRING[locale][type];
		}
		
		/**
		 * Get short day strings according to locale. eg. Mon,Tue... for english.
		 * If the locale is explicitly specified, then try to retrieve it according to the locale, return null if the
		 * locale is not supported.
		 * If no locale is passed in, retrieve the appropriate short day strings with fall back strategy.
		 *  
		 * @param locale
		 * @return 
		 * 
		 */
		_g_n_g.getShortDay = function (locale/*:String*/)/*:Array*/
		{
			if (locale)
			{
				if (_g_n_g.resourceExist(locale, _g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_SHORT_DAY))
				{
					return _g_n_g.getDateResource(locale, _g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_SHORT_DAY);
				}
				else
				{
					return null;
				}
			}
			return _g_n_g.getAppropriateDateResource(_g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_SHORT_DAY);
		}
		
		/**
		 * Get long day strings according to locale. eg. Monday,Tuesday... for english.
		 * If the locale is explicitly specified, then try to retrieve it according to the locale, return null if the
		 * locale is not supported.
		 * If no locale is passed in, retrieve the appropriate long day strings with fall back strategy
		 *  
		 * @param locale
		 * @return 
		 * 
		 */
		_g_n_g.getLongDay = function (locale/*:String*/)/*:Array*/
		{
			if (locale)
			{
				if (_g_n_g.resourceExist(locale, _g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_LONG_DAY))
				{
					return _g_n_g.getDateResource(locale, _g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_LONG_DAY);
				}
				else
				{
					return null;
				}
			}
			return _g_n_g.getAppropriateDateResource(_g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_LONG_DAY);
		}
		
		/**
		 * Get short month strings according to locale. eg. Jan,Feb... for english.
		 * If the locale is explicitly specified, then try to retrieve it according to the locale, return null if the
		 * locale is not supported.
		 * If no locale is passed in, retrieve the appropriate short month strings with fall back strategy
		 *  
		 * @param locale
		 * @return 
		 * 
		 */
		_g_n_g.getShortMonth = function (locale/*:String*/)/*:Array*/
		{
			if (locale)
			{
				if (_g_n_g.resourceExist(locale, _g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_SHORT_MONTH))
				{
					return _g_n_g.getDateResource(locale, _g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_SHORT_MONTH);
				}
				else
				{
					return null;
				}
			}
			return _g_n_g.getAppropriateDateResource(_g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_SHORT_MONTH);
		}
		
		/**
		 * Get long month strings according to locale. eg. January,Febuary... for english.
		 * If the locale is explicitly specified, then try to retrieve it according to the locale, return null if the
		 * locale is not supported.
		 * If no locale is passed in, retrieve the appropriate long month strings with fall back strategy
		 *  
		 * @param locale
		 * @return 
		 * 
		 */
		_g_n_g.getLongMonth = function (locale/*:String*/)/*:Array*/
		{
			if (locale)
			{
				if (_g_n_g.resourceExist(locale, _g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_LONG_MONTH))
				{
					return _g_n_g.getDateResource(locale, _g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_LONG_MONTH);
				}
				else
				{
					return null;
				}
			}
			return _g_n_g.getAppropriateDateResource(_g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_LONG_MONTH);
		}
		
		/**
		 * Get date separator for short date format according to locale. eg. "/" for english.
		 * If the locale is explicitly specified, then try to retrieve it according to the locale, return null if the
		 * locale is not supported.
		 * If no locale is passed in, retrieve the appropriate date separator with fall back strategy
		 *  
		 * @param locale
		 * @return 
		 * 
		 */
		_g_n_g.getDateSeparator = function (locale/*:String*/)/*:String*/
		{
			if (locale)
			{
				if (_g_n_g.resourceExist(locale, _g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_DATE_SEPARATOR))
				{
					console.log("getDateSeparator-getDateResource"+_g_n_g.getDateResource(locale, _g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_DATE_SEPARATOR).toString());
					return _g_n_g.getDateResource(locale, _g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_DATE_SEPARATOR).toString()/* as String*/;
				}
				else
				{
					return null;
				}
			}
			console.log("getDateSeparator-getAppropriateDateResource"+_g_n_g.getAppropriateDateResource(_g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_DATE_SEPARATOR).toString())
			return _g_n_g.getAppropriateDateResource(_g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_DATE_SEPARATOR).toString() /*as String*/;
		}
		
		/**
		 * Get time separator for Default date time/Default time format according to locale. eg. ":" for english.
		 * If the locale is explicitly specified, then try to retrieve it according to the locale, return null if the
		 * locale is not supported.
		 * If no locale is passed in, retrieve the appropriate time separator with fall back strategy 
		 * @param locale
		 * @return 
		 * 
		 */
		_g_n_g.getTimeSeparator = function (locale/*:String*/)/*:String*/
		{
			if (locale)
			{
				if (_g_n_g.resourceExist(locale, _g_n_g.KEY_TYPE_TIME, _g_n_g.KEY_TIME_SEPARATOR))
				{
					console.log("getTimeSeparator-getDateResource"+_g_n_g.getDateResource(locale, _g_n_g.KEY_TYPE_TIME, _g_n_g.KEY_TIME_SEPARATOR).toString());
					return _g_n_g.getDateResource(locale, _g_n_g.KEY_TYPE_TIME, _g_n_g.KEY_TIME_SEPARATOR).toString() /*as String*/;
				}
				else
				{
					return null;	
				}
			}
			console.log("getTimeSeparator-getAppropriateDateResource"+_g_n_g.getAppropriateDateResource(_g_n_g.KEY_TYPE_TIME, _g_n_g.KEY_TIME_SEPARATOR).toString());
			return _g_n_g.getAppropriateDateResource(_g_n_g.KEY_TYPE_TIME, _g_n_g.KEY_TIME_SEPARATOR).toString() /*as String*/;
		}
		
		/**
		 * Get am/pm tokens for date format according to locale. eg. "AM/PM" for english.
		 * If the locale is explicitly specified, then try to retrieve it according to the locale, return null if the
		 * locale is not supported.
		 * If no locale is passed in, retrieve the appropriate am/pm tokens with fall back strategy
		 *  
		 * @param locale
		 * @return 
		 * 
		 */
		_g_n_g.getAmPmToken = function (locale/*:String*/)/*:Array*/
		{
			if (locale)
			{
				if (_g_n_g.resourceExist(locale, _g_n_g.KEY_TYPE_TIME, _g_n_g.KEY_TOKEN_AM_PM))
				{
					return _g_n_g.getDateResource(locale, _g_n_g.KEY_TYPE_TIME, _g_n_g.KEY_TOKEN_AM_PM);
				}
				else
				{
					return null;
				}
			}
			return _g_n_g.getAppropriateDateResource(_g_n_g.KEY_TYPE_TIME, _g_n_g.KEY_TOKEN_AM_PM);
		}
		
		/**
		 * Get abbrev Era string.
		 * @return Array or null if Era string does not exist.
		 * 
		 */
		_g_n_g.getAbbrevEraString = function (locale/*:String*/)/*:Array*/
		{
			if (locale)
			{
				if (_g_n_g.resourceExist(locale, _g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_ABBREV_ERA))
				{
					return _g_n_g.getDateResource(locale, _g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_ABBREV_ERA);
				}
				else
				{
					return null;
				}
			}
			return _g_n_g.getAppropriateDateResource(_g_n_g.KEY_TYPE_DATE, _g_n_g.KEY_TOKEN_ABBREV_ERA);
		}

		/**
		 * Get predefined short date format according to locale.
		 * If the locale is explicitly specified, then try to retrieve it according to the locale, return null if the
		 * locale is not supported.
		 * If no locale is passed in, retrieve the appropriate predefined short date format with fall back strategy
		 *  
		 * @param locale
		 * @return 
		 * 
		 */
		_g_n_g.getDefaultShorDateFormat = function (locale/*:String*/)/*:String*/
		{
			if (locale)
			{
				if (_g_n_g.formatExist(locale, _g_n_g.FORMAT_TYPE_SHORTDATE))
				{
					console.log("getDefaultShorDateFormat-getDefaultDateFormat"+_g_n_g.getDefaultDateFormat(locale, _g_n_g.FORMAT_TYPE_SHORTDATE).toString());
					return _g_n_g.getDefaultDateFormat(locale, _g_n_g.FORMAT_TYPE_SHORTDATE).toString();
				} 
				else
				{
					return "";
				}
			}
			console.log("getDefaultShorDateFormat-getAppropriateDateFormat"+_g_n_g.getAppropriateDateFormat(_g_n_g.FORMAT_TYPE_SHORTDATE).toString());
			return _g_n_g.getAppropriateDateFormat(_g_n_g.FORMAT_TYPE_SHORTDATE).toString();
		}
		
		/**
		 * Get predefined long date format according to locale.
		 * If the locale is explicitly specified, then try to retrieve it according to the locale, return null if the
		 * locale is not supported.
		 * If no locale is passed in, retrieve the appropriate predefined long date format with fall back strategy
		 *   
		 * @param locale
		 * @return 
		 * 
		 */
		_g_n_g.getDefaultLongDateFormat = function (locale/*:String*/)/*:String*/
		{
			if (locale)
			{
				if (_g_n_g.formatExist(locale, _g_n_g.FORMAT_TYPE_LONGDATE))
				{
					console.log("getDefaultLongDateFormat-getDefaultDateFormat"+_g_n_g.getDefaultDateFormat(locale, _g_n_g.FORMAT_TYPE_LONGDATE).toString());
					return _g_n_g.getDefaultDateFormat(locale, _g_n_g.FORMAT_TYPE_LONGDATE).toString();
				} 
				else 
				{
					return null;
				}
			}
			console.log("getDefaultLongDateFormat-getAppropriateDateFormat"+_g_n_g.getAppropriateDateFormat(_g_n_g.FORMAT_TYPE_LONGDATE));
			return _g_n_g.getAppropriateDateFormat(_g_n_g.FORMAT_TYPE_LONGDATE);
		}
		
		/**
		 * Get predefined date time format according to locale.
		 * If the locale is explicitly specified, then try to retrieve it according to the locale, return null if the
		 * locale is not supported.
		 * If no locale is passed in, retrieve the appropriate predefined date time format with fall back strategy
		 *   
		 * @param locale
		 * @return 
		 * 
		 */
		_g_n_g.getDefaultDateTimeFormat = function (locale/*:String*/)/*:String*/
		{
			if (locale)
			{
				if (_g_n_g.formatExist(locale, _g_n_g.FORMAT_TYPE_DATE_TIME))
				{
					console.log("getDefaultDateTimeFormat-getDefaultDateFormat"+_g_n_g.getDefaultDateFormat(locale, _g_n_g.FORMAT_TYPE_DATE_TIME).toString());
					return _g_n_g.getDefaultDateFormat(locale, _g_n_g.FORMAT_TYPE_DATE_TIME).toString();
				} 
				else 
				{
					return null;
				}
			}
			console.log("getDefaultDateTimeFormat-getAppropriateDateFormat"+_g_n_g.getAppropriateDateFormat(_g_n_g.FORMAT_TYPE_DATE_TIME).toString());
			return _g_n_g.getAppropriateDateFormat(_g_n_g.FORMAT_TYPE_DATE_TIME).toString();
		}
		
		/**
		 * Get predefined time format according to locale.
		 * If the locale is explicitly specified, then try to retrieve it according to the locale, return null if the
		 * locale is not supported.
		 * If no locale is passed in, retrieve the appropriate predefined time format with fall back strategy
		 *   
		 * @param locale
		 * @return 
		 * 
		 */
		_g_n_g.getDefaultTimeFormat = function (locale/*:String*/)/*:String*/
		{
			if (locale)
			{
				if (_g_n_g.formatExist(locale, _g_n_g.FORMAT_TYPE_TIME))
				{
					return _g_n_g.getDefaultDateFormat(locale, _g_n_g.FORMAT_TYPE_TIME).toString();
				} 
				else 
				{
					return null;
				}
			}
			return _g_n_g.getAppropriateDateFormat(_g_n_g.FORMAT_TYPE_TIME).toString();
		}
		
		/**
		 * A standard method to fetch appropriate date format. It will follow a fall back
		 * strategy to get the resource.
		 * 
		 * @param type type of the resource
		 * 
		 * @return date format string
		 */
		_g_n_g.getAppropriateDateFormat = function (type/*:String*/)/*:String*/
		{
			// first, try to fetch the resource according to pvl locale
			var pvlLocale/*:String*/ = sap.common.globalization.GlobalizationPreference.getInstance().pvl();
			if (_g_n_g.formatExist(pvlLocale, type))
			{
				return _g_n_g.getDefaultDateFormat(pvlLocale, type).toString();
			}
			
			// second, try to fetch the resource according to pvl dominant language
			var pvlIsoLanguageCode/*:String*/ = sap.common.globalization.GlobalizationPreference.getInstance().pvlIsoLanguageCode();
			if (_g_n_g.formatExist(pvlIsoLanguageCode, type))
			{
				return _g_n_g.getDefaultDateFormat(pvlIsoLanguageCode, type).toString();
			}
			
			// third, try to fetch the resource according to document locale
			var documentLocale/*:String*/ = sap.common.globalization.GlobalizationPreference.getInstance().documentLocale();
			if (_g_n_g.formatExist(documentLocale, type))
			{
				return _g_n_g.getDefaultDateFormat(documentLocale, type).toString();
			}
			
			// fourth, try to fetch the resource according to document language
			var documentIsoLanguageCode/*:String*/ = sap.common.globalization.GlobalizationPreference.getInstance().documentIsoLanguageCode();
			if (_g_n_g.formatExist(documentIsoLanguageCode, type))
			{
				return _g_n_g.getDefaultDateFormat(documentIsoLanguageCode, type).toString();
			}
			
			return _g_n_g.getDefaultDateFormat("en", type).toString();
		}
		
		
		
		/**
		 * A standard method to fetch appropriate numeric resources. It will follow a fall back
		 * strategy to get the resource.
		 * 
		 * @param type type of the resource
		 * @param resourceKey key of the resource
		 * 
		 * @return resource string or null if not found.
		 */
		_g_n_g.getAppropriateDateResource = function (type/*:String*/, resourceKey/*:String*/)/*:Object*/
		{
			// first, try to fetch the resource according to pvl locale
			var pvlLocale/*:String*/ = sap.common.globalization.GlobalizationPreference.getInstance().pvl();
			if (_g_n_g.resourceExist(pvlLocale, type, resourceKey))
			{
				return _g_n_g.getDateResource(pvlLocale, type, resourceKey);
			}
			
			// second, try to fetch the resource according to pvl dominant language
			var pvlIsoLanguageCode/*:String*/ = sap.common.globalization.GlobalizationPreference.getInstance().pvlIsoLanguageCode();
			if (_g_n_g.resourceExist(pvlIsoLanguageCode, type, resourceKey))
			{
				return _g_n_g.getDateResource(pvlIsoLanguageCode, type, resourceKey);
			}
			
			// third, try to fetch the resource according to document locale
			var documentLocale/*:String*/ = sap.common.globalization.GlobalizationPreference.getInstance().documentLocale();
			if (_g_n_g.resourceExist(documentLocale, type, resourceKey))
			{
				return _g_n_g.getDateResource(documentLocale, type, resourceKey);
			}
			
			// fourth, try to fetch the resource according to document language
			var documentIsoLanguageCode/*:String*/ = sap.common.globalization.GlobalizationPreference.getInstance().documentIsoLanguageCode();
			if (_g_n_g.resourceExist(documentIsoLanguageCode, type, resourceKey))
			{
				return _g_n_g.getDateResource(documentIsoLanguageCode, type, resourceKey);
			}
			
			return _g_n_g.getDateResource("en", type, resourceKey);
		}
		
		_g_n_g.resourceExist = function (locale/*:String*/, type/*:String*/, resourceKey/*:String*/)/*:Boolean*/
		{
			return (locale && type && resourceKey && _g_n_g.RESOURCE_MAP[locale]
				&& _g_n_g.RESOURCE_MAP[locale][type] && _g_n_g.RESOURCE_MAP[locale][type][resourceKey]);
		}
		
		_g_n_g.getDateResource = function (locale/*:String*/, type/*:String*/, resourceKey/*:String*/)/*:Object*/
		{
			return _g_n_g.RESOURCE_MAP[locale][type][resourceKey];
		}
	}
)();
(function(){

	sap.common.globalization.declare("sap.common.globalization.GlobalizationNumericUtil");


		sap.common.globalization.GlobalizationNumericUtil =function()
		{
			this.__className = "sap.common.globalization.GlobalizationNumericUtil";			
		}
		
		/**
		 * Check whether the given locale uses two digit grouping.
		 */
		sap.common.globalization.GlobalizationNumericUtil.isTwoDigitGroupingCountry =function(locale/*String*/)/*Boolean*/
		{
			switch(locale)
			{
				case "bn":
				case "bn_IN":
				case "gu":
				case "gu_IN":
				case "hi":
				case "hi_IN":
				case "kn":
				case "kn_IN":
				case "kok":
				case "kok_IN":
				case "ml":
				case "ml_IN":
				case "mr":
				case "mr_IN":
				case "pa":
				case "pa_IN":
				case "ta":
				case "ta_IN":
				case "te":
				case "te_IN":
					return true;
				default:
					return false;
			}
		}
})();
(function() {

		sap.common.globalization.declare("sap.common.globalization.numericFormat.FLocalization");

		sap.common.globalization.require("sap.common.globalization.defaultFormat.DateParseLocaleInfoImpl");
		sap.common.globalization.require("sap.common.globalization.defaultFormat.DateDisplayLocaleInfoImpl");
		sap.common.globalization.require("sap.common.globalization.defaultFormat.NumericDisplayLocaleInfoImpl");
		sap.common.globalization.require("sap.common.globalization.defaultFormat.NumericParseLocaleInfoImpl");
		sap.common.globalization.require("sap.common.globalization.GlobalizationPreference");
		sap.common.globalization.require("sap.common.globalization.utils.StringUtil");
		sap.common.globalization.require("sap.common.globalization.GlobalizationDateConstant");
		sap.common.globalization.require("sap.common.globalization.NumericFormatManager");
	
		 

		 // for singleton to create instance.
		sap.common.globalization.numericFormat.FLocalization = function()
		{
			this.__className = "sap.common.globalization.numericFormat.FLocalization";
			
			this.IMDateSeparator/*String*/ = _s_g_n_FLocalization._DateTimeStrings['en'][1];
			this.IMDayCode/*String*/ = _s_g_n_FLocalization._DateTimeCodes['en'][5];
			this.IMDecimalSeparator/*String*/ = _s_g_n_FLocalization._NumericStrings['en'][1];
			this.IMGeneralFormatName/*String*/ = "General";
			this.IMHourCode/*String*/ =  _s_g_n_FLocalization._DateTimeCodes['en'][3];
			this.IMMinuteCode/*String*/ =  _s_g_n_FLocalization._DateTimeCodes['en'][1];
			this.IMMonthCode/*String*/ =  _s_g_n_FLocalization._DateTimeCodes['en'][4];
			this.IMSABBREVDAYNAME1/*String*/ = _s_g_n_FLocalization._shortDayStrings['en'][1];
			this.IMSABBREVDAYNAME2/*String*/ = _s_g_n_FLocalization._shortDayStrings['en'][2];
			this.IMSABBREVDAYNAME3/*String*/ = _s_g_n_FLocalization._shortDayStrings['en'][3];
			this.IMSABBREVDAYNAME4/*String*/ =_s_g_n_FLocalization._shortDayStrings['en'][4];
			this.IMSABBREVDAYNAME5/*String*/ = _s_g_n_FLocalization._shortDayStrings['en'][5];
			this.IMSABBREVDAYNAME6/*String*/ = _s_g_n_FLocalization._shortDayStrings['en'][6];
			this.IMSABBREVDAYNAME7/*String*/ = _s_g_n_FLocalization._shortDayStrings['en'][7];
			this.IMSABBREVMONTHNAME1/*String*/ = _s_g_n_FLocalization._shortMonthStrings['en'][1];
			this.IMSABBREVMONTHNAME10 /*String*/= _s_g_n_FLocalization._shortMonthStrings['en'][10];
			this.IMSABBREVMONTHNAME11/*String*/ = _s_g_n_FLocalization._shortMonthStrings['en'][11];
			this.IMSABBREVMONTHNAME12/*String*/ = _s_g_n_FLocalization._shortMonthStrings['en'][12];
			this.IMSABBREVMONTHNAME2/*String*/ = _s_g_n_FLocalization._shortMonthStrings['en'][2];
			this.IMSABBREVMONTHNAME3/*String*/ = _s_g_n_FLocalization._shortMonthStrings['en'][3];
			this.IMSABBREVMONTHNAME4/*String*/ = _s_g_n_FLocalization._shortMonthStrings['en'][4];
			this.IMSABBREVMONTHNAME5/*String*/ = _s_g_n_FLocalization._shortMonthStrings['en'][5];
			this.IMSABBREVMONTHNAME6/*String*/ = _s_g_n_FLocalization._shortMonthStrings['en'][6];
			this.IMSABBREVMONTHNAME7/*String*/ = _s_g_n_FLocalization._shortMonthStrings['en'][7];
			this.IMSABBREVMONTHNAME8/*String*/ = _s_g_n_FLocalization._shortMonthStrings['en'][8];
			this.IMSABBREVMONTHNAME9/*String*/ = _s_g_n_FLocalization._shortMonthStrings['en'][9];
			this.IMSDAYNAME1/*String*/ = _s_g_n_FLocalization._DayStrings['en'][1];
			this.IMSDAYNAME2/*String*/ = _s_g_n_FLocalization._DayStrings['en'][2];
			this.IMSDAYNAME3/*String*/ = _s_g_n_FLocalization._DayStrings['en'][3];
			this.IMSDAYNAME4/*String*/ = _s_g_n_FLocalization._DayStrings['en'][4];
			this.IMSDAYNAME5/*String*/ = _s_g_n_FLocalization._DayStrings['en'][5];
			this.IMSDAYNAME6/*String*/ = _s_g_n_FLocalization._DayStrings['en'][6];
			this.IMSDAYNAME7/*String*/ = _s_g_n_FLocalization._DayStrings['en'][7];
			this.IMSMONTHNAME1/*String*/ = _s_g_n_FLocalization._MonthStrings['en'][1];
			this.IMSMONTHNAME10/*String*/ =  _s_g_n_FLocalization._MonthStrings['en'][10];
			this.IMSMONTHNAME11/*String*/ =  _s_g_n_FLocalization._MonthStrings['en'][11];
			this.IMSMONTHNAME12/*String*/ =  _s_g_n_FLocalization._MonthStrings['en'][12];
			this.IMSMONTHNAME2/*String*/ =  _s_g_n_FLocalization._MonthStrings['en'][2];
			this.IMSMONTHNAME3/*String*/ = _s_g_n_FLocalization._MonthStrings['en'][3];
			this.IMSMONTHNAME4/*String*/ =  _s_g_n_FLocalization._MonthStrings['en'][4];
			this.IMSMONTHNAME5/*String*/ =  _s_g_n_FLocalization._MonthStrings['en'][5];
			this.IMSMONTHNAME6/*String*/ =  _s_g_n_FLocalization._MonthStrings['en'][6];
			this.IMSMONTHNAME7/*String*/ = _s_g_n_FLocalization._MonthStrings['en'][7];
			this.IMSMONTHNAME8/*String*/ =  _s_g_n_FLocalization._MonthStrings['en'][8];
			this.IMSMONTHNAME9/*String*/ =  _s_g_n_FLocalization._MonthStrings['en'][9];
			this.IMSecondCode/*String*/ =  _s_g_n_FLocalization._DateTimeCodes['en'][2];
			this.IMTimeSeparator/*String*/ = _s_g_n_FLocalization._DateTimeStrings['en'][2];
			this.IMYearCode/*String*/ =  _s_g_n_FLocalization._DateTimeCodes['en'][6];	
			this.IMCurrencySymbol/*String*/ = _s_g_n_FLocalization._CurrencySymbol['en'][1];
			this.SAPDateSeparator/*String*/ = _s_g_n_FLocalization._SAPDateString;
			this.SAPTimeSeparator/*String*/ = _s_g_n_FLocalization._SAPTimeString;
			this.SAPCurrencySymbol/*String*/ = _s_g_n_FLocalization._SAPCurrencySymbol;	
			this.SAPDecimalSeparator/*String*/ = _s_g_n_FLocalization._SAPDecimalSeparator;
			this.SAPThousandsSeparator/*String*/ = _s_g_n_FLocalization._SAPThousandsSeparator;
			this.SAPLongDay/*Array*/ = _s_g_n_FLocalization._SAPLongDay;
			this.SAPShortDay/*Array*/ = _s_g_n_FLocalization._SAPShortDay;
			this.SAPLongMonth/*Array*/ = _s_g_n_FLocalization._SAPLongMonth;
			this.SAPShortMonth/*Array*/ = _s_g_n_FLocalization._SAPShortMonth;
			this.IMAMTOKEN/*String*/ = _s_g_n_FLocalization._AmPms['en'][1];
			this.IMPMTOKEN/*String*/ = _s_g_n_FLocalization._AmPms['en'][2];
			
			// private
			this._IMThousandsSeparator = this.replaceNBSP(_s_g_n_FLocalization._NumericStrings['en'][2])
		
			// locale info of numeric formats for parsing
			this._numericParseLocaleInfo/*NumericParseLocaleInfoImpl*/ = null; // TODO default is null.
		
			// locale info of numeric formats for displaying
			this._numericDisplayLocaleInfo/*NumericDisplayLocaleInfoImpl*/ = null; // TODO default is null.
			
					
			this._dateParseLocaleInfo/*DateParseLocaleInfoImpl*/ = null;
			
			this._dateDisplayLocaleInfo/*DateDisplayLocaleInfoImpl*/ = null;
		}
		
		var _s_g_n_FLocalization = sap.common.globalization.numericFormat.FLocalization;

		 _s_g_n_FLocalization._defaultLocale/*String*/ = "en";
						
		 _s_g_n_FLocalization._DayStrings/*Object*/ = null;
		 _s_g_n_FLocalization._shortDayStrings/*Object*/ = null;
		 _s_g_n_FLocalization._MonthStrings/*Object*/ = null;
		 _s_g_n_FLocalization._shortMonthStrings/*Object*/ = null;
		 _s_g_n_FLocalization._DateTimeCodes/*Object*/ = null;
		 _s_g_n_FLocalization._NumericStrings/*Object*/ = null;
		 _s_g_n_FLocalization._DateTimeStrings/*Object*/ = null;
		 _s_g_n_FLocalization._CurrencySymbol/*Object*/ = null;
		 _s_g_n_FLocalization._SAPCurrencySymbol/*String*/ = null;
		 _s_g_n_FLocalization._SAPDateString/*String*/ = null;
		 _s_g_n_FLocalization._SAPTimeString/*String*/ = null;
		 _s_g_n_FLocalization._SAPThousandsSeparator/*String*/ = null;
		 _s_g_n_FLocalization._SAPDecimalSeparator/*String*/ = null;
		 _s_g_n_FLocalization._SAPLongDay/*Array*/ = null;
		 _s_g_n_FLocalization._SAPShortDay/*Array*/ = null;
		 _s_g_n_FLocalization._SAPLongMonth/*Array*/ = null;
		 _s_g_n_FLocalization._SAPShortMonth/*Array*/ = null;
		
		/**
		 * Tokens for AM and PM, which have the default value of "AM" and "PM".
		 */
		 _s_g_n_FLocalization._AmPms/*Object*/ = null;
		
		 _s_g_n_FLocalization._singleton/*FLocalization*/ = null;
		
		// Move ahead of constant because of the  
		sap.common.globalization.numericFormat.FLocalization.prototype.replaceNBSP = function(value/*String*/)/*String*/
		{
			if (value)
			{
				var newValue/*String*/ = "";
				var nonBreakingSpaceCode/*uint*/ = 160; // UTF-8 char code
				
				// HACK handle non-breaking spaces by converting them to normal spaces
				// see ADAPT01021228 
				for (var i/*uint*/ = 0; i < value.length; ++i)
				{
					if (value.charCodeAt(i) == nonBreakingSpaceCode)
					{
						newValue += " "; // replace with normal space char
					}
					else
					{
						newValue += value.charAt(i);
					}	
				}
				
				value = newValue;
			}
			return value; 
		}
		
		_s_g_n_FLocalization.getInstance=function()/*FLocalization*/
		{
			if(!_s_g_n_FLocalization._singleton)
			{
			// if ( _s_g_n_FLocalization._shortDayStrings == null ) {
				
				_s_g_n_FLocalization._initStrings(); // To not block unit test.
		
				// check for PVL flashvar
				_s_g_n_FLocalization._initializePvlDateStrings();	
				//check for flashvar overides
				_s_g_n_FLocalization._initSAPGlobilizationStrings();
				_s_g_n_FLocalization._singleton = new sap.common.globalization.numericFormat.FLocalization();
				
				_s_g_n_FLocalization._singleton.IMSABBREVDAYNAME1 = _s_g_n_FLocalization._shortDayStrings['en'][1];
			}								
			// TODO better error checking
			return _s_g_n_FLocalization._singleton;
		}
		
		_s_g_n_FLocalization.resetInstance=function()
		{
			_s_g_n_FLocalization._resetAllStaticVars();
			_s_g_n_FLocalization._initStrings();
			_s_g_n_FLocalization._initializePvlDateStrings();
			_s_g_n_FLocalization._initSAPGlobilizationStrings();
			_s_g_n_FLocalization._singleton = new sap.common.globalization.numericFormat.FLocalization();
			_s_g_n_FLocalization._singleton.IMSABBREVDAYNAME1 = _s_g_n_FLocalization._shortDayStrings['en'][1];
		}
		

	var customizedLocaleInfoType = {
		'monthStrings' : '_MonthStrings',
		'shortMonthStrings' : '_shortMonthStrings',
		'dayStrings' : '_DayStrings',
		'shortDayStrings' : '_shortDayStrings',
		'dateTimeCodes' : '_DateTimeCodes',
		'numericStrings' : '_NumericStrings',
		'dateTimeStrings' : '_DateTimeStrings',
		'currencySymbol' : '_CurrencySymbol',
		'amPms' : '_AmPms'
	};

		/*
		 * The input locale info
		 
		{
			dayStrings: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			shortDayStrings: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			monthStrings: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			shortMonthStrings: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dateTimeCodes: ["m", "s", "h", "M", "D", "Y"],
			numericStrings: [".", ","],	
			dateTimeStrings: [ "/", ":"],				
			currencySymbol: ["$", "$"],			
			amPms: [ "AM", "PM"]
		}
		*/

	
		// set the customize locale info
		_s_g_n_FLocalization.prototype.setCustomizedLocaleInfo =function(value){

			if(value)
			{
				var localeInfoName;

				for(localeInfoName in customizedLocaleInfoType)		
				{
					if(value.hasOwnProperty(localeInfoName))
					{
						var localeInfoType = customizedLocaleInfoType[localeInfoName];
						this._setCustomizedLocaleInfoByType(localeInfoType, value[localeInfoName])
					}
				}		
			}
			else // set the locale default locale info
			{
				var locale = sap.common.globalization.GlobalizationPreference.getInstance().pvl();
				if(!locale)
					locale = 'en';
				var gDateConstant =sap.common.globalization.GlobalizationDateConstant;
				
				this._setCustomizedLocaleInfoByType(customizedLocaleInfoType["dayStrings"], gDateConstant.getLongDay(locale));
				this._setCustomizedLocaleInfoByType(customizedLocaleInfoType["shortDayStrings"],gDateConstant.getShortDay(locale));
				this._setCustomizedLocaleInfoByType(customizedLocaleInfoType["monthStrings"], gDateConstant.getLongMonth(locale));
				this._setCustomizedLocaleInfoByType(customizedLocaleInfoType["shortMonthStrings"], gDateConstant.getShortMonth(locale));
				
				// NEED to confirm, will not set the default locale info for below items.
				// this._setCustomizedLocaleInfoByType("dateTimeCodes",locale,gDateConstant.getShortDay(locale) );
				// this._setCustomizedLocaleInfoByType("numericStrings",locale, );
				// this._setCustomizedLocaleInfoByType("dateTimeStrings",locale, );
				// this._setCustomizedLocaleInfoByType("currencySymbol",locale, );
				this._setCustomizedLocaleInfoByType(customizedLocaleInfoType["amPms"], gDateConstant.getShortMonth(locale));
	
			}
			
		};
		
		_s_g_n_FLocalization.prototype._setCustomizedLocaleInfoByType =function(type /*String*/, value/*Array*/){
			if(value && value.length>0)
			{
				var j;
				for(var i=0; i<value.length;i++)
				{	
					j= i+1;
					_s_g_n_FLocalization[type]["en"][j] = value[i]; // ONLY set "en" here.
				}					
			}
		};
		
		_s_g_n_FLocalization._initStrings =function()/*void*/
		{
				 _s_g_n_FLocalization._DayStrings =  { "en": 
      					{   1: "Monday",
      						 2 : "Tuesday",
							 3: "Wednesday",
							 4: "Thursday",
							 5: "Friday",
							 6: "Saturday",
							 7: "Sunday"
       					}
   							};  
							
						 _s_g_n_FLocalization._shortDayStrings =  { "en": 
      					{   1: "Mon",
      						 2 : "Tue",
							 3: "Wed",
							 4: "Thu",
							 5: "Fri",
							 6: "Sat",
							 7: "Sun"
       					}
   							};  
							
								
						 _s_g_n_FLocalization._MonthStrings =  { "en": 
      					{   1: "January",
      						 2 : "February",
							 3: "March",
							 4: "April",
							 5: "May",
							 6: "June",
							 7: "July",
							 8: "August",
							 9: "September",
							 10: "October",
							 11: "November",
							 12: "December"
       					}
   							};  
							
						_s_g_n_FLocalization._shortMonthStrings =  { "en": 
      					{   1: "Jan",
      						 2 : "Feb",
							 3: "Mar",
							 4: "Apr",
							 5: "May",
							 6: "Jun",
							 7: "Jul",
							 8: "Aug",
							 9: "Sep",
							 10: "Oct",
							 11: "Nov",
							 12: "Dec"
       					}
   							};  
							
						
					 _s_g_n_FLocalization._DateTimeCodes =  { "en": 
      					{   1: "m",
      						 2 : "s",
							 3: "h",
							 4: "M",
							 5: "D",
							 6: "Y"
       					}
   							};  
							
							
					 _s_g_n_FLocalization._NumericStrings =  { "en": 
      					{   1: ".",
      						 2 : ","		
       					}
   							};  
							
							
						_s_g_n_FLocalization._DateTimeStrings =  { "en": 
      					{   1: "/",
      						 2 : ":"				
       					}
   							};  
   							
   						_s_g_n_FLocalization._CurrencySymbol = { "en": 
	      					{   
	      						1: "$",
								2: "$"				
	       					}
       					};
       					
       					_s_g_n_FLocalization._AmPms = { "en":
       						{
       							1: "AM",
       							2: "PM"
       						}
       					};
		}
		
		_s_g_n_FLocalization._initSAPGlobilizationStrings =function()/*void*/
		{
				// using bics flash var as top priority if it does not exist use the sap_decimal. So do the following flash vars.
				// TODO FLEXGlobals use SAPGlobals for test
				var _s_g_nfm = sap.common.globalization.NumericFormatManager;
				
				var decimal/*String*/ = _s_g_nfm["SAP_PARAMETERS"]["BICSWS_DECIMAL"];
				decimal = decimal ? decimal : _s_g_nfm["SAP_PARAMETERS"]["SAP_decimal"];
				
				var thousandSeparator/*String*/ = _s_g_nfm["SAP_PARAMETERS"]["BICSWS_THOUSANDSEPARATOR"];
				thousandSeparator = thousandSeparator ? thousandSeparator : _s_g_nfm["SAP_PARAMETERS"]["SAP_thousandSeparator"];
				
				var monthsLong/*String*/ = _s_g_nfm["SAP_PARAMETERS"]["BICSWS_MONTHSLONG"];
				monthsLong = monthsLong ? monthsLong : _s_g_nfm["SAP_PARAMETERS"]["SAP_monthsLong"];
				
				var monthsShort/*String*/ = _s_g_nfm["SAP_PARAMETERS"]["BICSWS_MONTHSSHORT"];
				monthsShort = monthsShort ? monthsShort : _s_g_nfm["SAP_PARAMETERS"]["SAP_monthsShort"];
				
				var daysLong/*String*/ = _s_g_nfm["SAP_PARAMETERS"]["BICSWS_DAYSLONG"];
				daysLong = daysLong ? daysLong : _s_g_nfm["SAP_PARAMETERS"]["SAP_daysLong"];
				
				var daysShort/*String*/ = _s_g_nfm["SAP_PARAMETERS"]["BICSWS_DAYSSHORT"];
				daysShort = daysShort ? daysShort : _s_g_nfm["SAP_PARAMETERS"]["SAP_daysShort"];
				
				var dateSeparator/*String*/ = _s_g_nfm["SAP_PARAMETERS"]["BICSWS_DATESEPARATOR"];
				dateSeparator = dateSeparator ? dateSeparator : _s_g_nfm["SAP_PARAMETERS"]["SAP_dateSeparator"];
				
				var timeSeparator/*String*/ = _s_g_nfm["SAP_PARAMETERS"]["BICSWS_TIMESEPARATOR"];
				timeSeparator = timeSeparator ? timeSeparator : _s_g_nfm["SAP_PARAMETERS"]["SAP_timeSeparator"];
				
				var currencySymbol/*String*/ = _s_g_nfm["SAP_PARAMETERS"]["SAP_s_g_n_FLocalization._CurrencySymbol"];
				
				var temp/*Array*/;
				
				if(daysLong) {
					temp = daysLong.split(",");
					_s_g_n_FLocalization._SAPLongDay = temp;
					
					 _s_g_n_FLocalization._DayStrings["en"][1] = temp[0];
					 _s_g_n_FLocalization._DayStrings["en"][2] = temp[1];
					 _s_g_n_FLocalization._DayStrings["en"][3] = temp[2];
					 _s_g_n_FLocalization._DayStrings["en"][4] = temp[3];
					 _s_g_n_FLocalization._DayStrings["en"][5] = temp[4];
					 _s_g_n_FLocalization._DayStrings["en"][6] = temp[5];
					 _s_g_n_FLocalization._DayStrings["en"][7] = temp[6];
				}				
				if(daysShort){
					temp = daysShort.split(",");
					_s_g_n_FLocalization._SAPShortDay = temp;
					
					 _s_g_n_FLocalization._shortDayStrings["en"][1] = temp[0];
					 _s_g_n_FLocalization._shortDayStrings["en"][2] = temp[1];
					 _s_g_n_FLocalization._shortDayStrings["en"][3] = temp[2];
					 _s_g_n_FLocalization._shortDayStrings["en"][4] = temp[3];
					 _s_g_n_FLocalization._shortDayStrings["en"][5] = temp[4];
					 _s_g_n_FLocalization._shortDayStrings["en"][6] = temp[5];
					 _s_g_n_FLocalization._shortDayStrings["en"][7] = temp[6];
				}
				if(monthsLong){
					temp = monthsLong.split(",");
					_s_g_n_FLocalization._SAPLongMonth = temp;
					
					 _s_g_n_FLocalization._MonthStrings["en"][1] = temp[0];
					 _s_g_n_FLocalization._MonthStrings["en"][2] = temp[1];
					 _s_g_n_FLocalization._MonthStrings["en"][3] = temp[2];
					 _s_g_n_FLocalization._MonthStrings["en"][4] = temp[3];
					 _s_g_n_FLocalization._MonthStrings["en"][5] = temp[4];
					 _s_g_n_FLocalization._MonthStrings["en"][6] = temp[5];
					 _s_g_n_FLocalization._MonthStrings["en"][7] = temp[6];
					 _s_g_n_FLocalization._MonthStrings["en"][8] = temp[7];
					 _s_g_n_FLocalization._MonthStrings["en"][9] = temp[8];
					 _s_g_n_FLocalization._MonthStrings["en"][10] = temp[9];
					 _s_g_n_FLocalization._MonthStrings["en"][11] = temp[10];
					 _s_g_n_FLocalization._MonthStrings["en"][12] = temp[11];	 	 
				}
				if(monthsShort){
					temp = monthsShort.split(",");
					_s_g_n_FLocalization._SAPShortMonth = temp;

					 _s_g_n_FLocalization._shortMonthStrings["en"][1] = temp[0];
					 _s_g_n_FLocalization._shortMonthStrings["en"][2] = temp[1];
					 _s_g_n_FLocalization._shortMonthStrings["en"][3] = temp[2];
					 _s_g_n_FLocalization._shortMonthStrings["en"][4] = temp[3];
					 _s_g_n_FLocalization._shortMonthStrings["en"][5] = temp[4];
					 _s_g_n_FLocalization._shortMonthStrings["en"][6] = temp[5];
					 _s_g_n_FLocalization._shortMonthStrings["en"][7] = temp[6];
					 _s_g_n_FLocalization._shortMonthStrings["en"][8] = temp[7];
					 _s_g_n_FLocalization._shortMonthStrings["en"][9] = temp[8];
					 _s_g_n_FLocalization._shortMonthStrings["en"][10] = temp[9];
					 _s_g_n_FLocalization._shortMonthStrings["en"][11] = temp[10];
					 _s_g_n_FLocalization._shortMonthStrings["en"][12] = temp[11];
				}
				if(decimal)
					 _s_g_n_FLocalization._SAPDecimalSeparator = decimal;
				if(thousandSeparator)
					 _s_g_n_FLocalization._SAPThousandsSeparator = thousandSeparator;
				if(dateSeparator)
					 _s_g_n_FLocalization._SAPDateString = dateSeparator;
				if(timeSeparator)
					 _s_g_n_FLocalization._SAPTimeString = timeSeparator;
				if(currencySymbol)
					_s_g_n_FLocalization._SAPCurrencySymbol = currencySymbol;
		}
		

	
		// // private var this._IMThousandsSeparator/*String*/ = replaceNBSP(_s_g_n_FLocalization._NumericStrings['en'][2]);
// 		
		// // locale info of numeric formats for parsing
		// private var this._numericParseLocaleInfo:NumericParseLocaleInfoImpl;
// 		
		// // locale info of numeric formats for displaying
		// private var this._numericDisplayLocaleInfo:NumericDisplayLocaleInfoImpl;
// 		

		_s_g_n_FLocalization.prototype.IMThousandsSeparator =function(v)
		{
			if(arguments.length>=1){
				this._IMThousandsSeparator = this.replaceNBSP(v);
				return this;
			}else{
				//get
				return this._IMThousandsSeparator;
			}
		} 
		
		_s_g_n_FLocalization.prototype.getDateParseLocaleInfo=function()/*IDateParseLocaleInfo*/
		{
			if (!this._dateParseLocaleInfo)
			{
				// Date separators
				this._dateParseLocaleInfo = new sap.common.globalization.defaultFormat.DateParseLocaleInfoImpl();
				this._dateParseLocaleInfo.IMDateSeparator(this.IMDateSeparator);
				
				// Time separators
				this._dateParseLocaleInfo.IMTimeSeparator(this.IMTimeSeparator);
			}
			return this._dateParseLocaleInfo;
		}
		

		
		_s_g_n_FLocalization.prototype.getDateDisplayLocaleInfo= function()/*IDateDisplayLocaleInfo*/
		{
			if (!this._dateDisplayLocaleInfo)
			{
				// Customized Tokens, SAP Tokens and SAP Separators for Date
				this._dateDisplayLocaleInfo = new sap.common.globalization.defaultFormat.DateDisplayLocaleInfoImpl();

//				1. Do not replace separator with OS one.
//				2. Replace separator with SAP one if existing.
				this._dateDisplayLocaleInfo.IMDateSeparator(this.SAPDateSeparator);

				this._dateDisplayLocaleInfo.IMSDAYNAME1(this.IMSDAYNAME1);
				this._dateDisplayLocaleInfo.IMSDAYNAME2(this.IMSDAYNAME2);
				this._dateDisplayLocaleInfo.IMSDAYNAME3(this.IMSDAYNAME3);
				this._dateDisplayLocaleInfo.IMSDAYNAME4(this.IMSDAYNAME4);
				this._dateDisplayLocaleInfo.IMSDAYNAME5(this.IMSDAYNAME5);
				this._dateDisplayLocaleInfo.IMSDAYNAME6(this.IMSDAYNAME6);
				this._dateDisplayLocaleInfo.IMSDAYNAME7(this.IMSDAYNAME7);
				
				this._dateDisplayLocaleInfo.IMSABBREVDAYNAME1(this.IMSABBREVDAYNAME1);
				this._dateDisplayLocaleInfo.IMSABBREVDAYNAME2(this.IMSABBREVDAYNAME2);
				this._dateDisplayLocaleInfo.IMSABBREVDAYNAME3(this.IMSABBREVDAYNAME3);
				this._dateDisplayLocaleInfo.IMSABBREVDAYNAME4(this.IMSABBREVDAYNAME4);
				this._dateDisplayLocaleInfo.IMSABBREVDAYNAME5(this.IMSABBREVDAYNAME5);
				this._dateDisplayLocaleInfo.IMSABBREVDAYNAME6(this.IMSABBREVDAYNAME6);
				this._dateDisplayLocaleInfo.IMSABBREVDAYNAME7(this.IMSABBREVDAYNAME7);
				
				this._dateDisplayLocaleInfo.IMSMONTHNAME1(this.IMSMONTHNAME1);
				this._dateDisplayLocaleInfo.IMSMONTHNAME2(this.IMSMONTHNAME2);
				this._dateDisplayLocaleInfo.IMSMONTHNAME3(this.IMSMONTHNAME3);
				this._dateDisplayLocaleInfo.IMSMONTHNAME4(this.IMSMONTHNAME4);
				this._dateDisplayLocaleInfo.IMSMONTHNAME5(this.IMSMONTHNAME5);
				this._dateDisplayLocaleInfo.IMSMONTHNAME6(this.IMSMONTHNAME6);
				this._dateDisplayLocaleInfo.IMSMONTHNAME7(this.IMSMONTHNAME7);
				this._dateDisplayLocaleInfo.IMSMONTHNAME8(this.IMSMONTHNAME8);
				this._dateDisplayLocaleInfo.IMSMONTHNAME9(this.IMSMONTHNAME9);
				this._dateDisplayLocaleInfo.IMSMONTHNAME10(this.IMSMONTHNAME10);
				this._dateDisplayLocaleInfo.IMSMONTHNAME11(this.IMSMONTHNAME11);
				this._dateDisplayLocaleInfo.IMSMONTHNAME12(this.IMSMONTHNAME12);
				
				this._dateDisplayLocaleInfo.IMSABBREVMONTHNAME1(this.IMSABBREVMONTHNAME1);
				this._dateDisplayLocaleInfo.IMSABBREVMONTHNAME2(this.IMSABBREVMONTHNAME2);
				this._dateDisplayLocaleInfo.IMSABBREVMONTHNAME3(this.IMSABBREVMONTHNAME3);
				this._dateDisplayLocaleInfo.IMSABBREVMONTHNAME4(this.IMSABBREVMONTHNAME4);
				this._dateDisplayLocaleInfo.IMSABBREVMONTHNAME5(this.IMSABBREVMONTHNAME5);
				this._dateDisplayLocaleInfo.IMSABBREVMONTHNAME6(this.IMSABBREVMONTHNAME6);
				this._dateDisplayLocaleInfo.IMSABBREVMONTHNAME7(this.IMSABBREVMONTHNAME7);
				this._dateDisplayLocaleInfo.IMSABBREVMONTHNAME8(this.IMSABBREVMONTHNAME8);
				this._dateDisplayLocaleInfo.IMSABBREVMONTHNAME9(this.IMSABBREVMONTHNAME9);
				this._dateDisplayLocaleInfo.IMSABBREVMONTHNAME10(this.IMSABBREVMONTHNAME10);
				this._dateDisplayLocaleInfo.IMSABBREVMONTHNAME11(this.IMSABBREVMONTHNAME11);
				this._dateDisplayLocaleInfo.IMSABBREVMONTHNAME12(this.IMSABBREVMONTHNAME12);
				
				// Customized Tokens, SAP Tokens and SAP Separators for Time
				this._dateDisplayLocaleInfo.IMTimeSeparator(this.SAPTimeSeparator);
				
				this._dateDisplayLocaleInfo.IMAMTOKEN(this.IMAMTOKEN);
				this._dateDisplayLocaleInfo.IMPMTOKEN(this.IMPMTOKEN);
			}
			return this._dateDisplayLocaleInfo;
		}
	
		/**
		 * Return the locale info of numeric formats for parsing.
		 */
		_s_g_n_FLocalization.prototype.numericParseLocaleInfo =function()/*INumericParseLocaleInfo*/
		{
			if (!this._numericParseLocaleInfo)
			{
				this._numericParseLocaleInfo = new sap.common.globalization.defaultFormat.NumericParseLocaleInfoImpl(this._IMThousandsSeparator,
					this.IMDecimalSeparator, this.IMCurrencySymbol);
			}
			return this._numericParseLocaleInfo;
		}
		
		/**
		 * Return the locale info of numeric formats for displaying.
		 */
		_s_g_n_FLocalization.prototype.numericDisplayLocaleInfo =function()/*INumericDisplayLocaleInfo*/
		{
			if (!this._numericDisplayLocaleInfo)
			{
				// SAP separators have higher priority
				var thousandsSepartor/*String*/ = (this.SAPThousandsSeparator ? this.SAPThousandsSeparator : this._IMThousandsSeparator);
				var decimalSeparator/*String*/ = (this.SAPDecimalSeparator ? this.SAPDecimalSeparator : this.IMDecimalSeparator);
				var currencySymbol/*String*/ = (this.SAPCurrencySymbol ? this.SAPCurrencySymbol : this.IMCurrencySymbol);
				this._numericDisplayLocaleInfo = new sap.common.globalization.defaultFormat.NumericDisplayLocaleInfoImpl(thousandsSepartor, decimalSeparator, currencySymbol);
			}
			return this._numericDisplayLocaleInfo;
		}
		
		/**
		 * If PVL exist, initializing the pre-defined tokens according to PVL.
		 * 	1. PVL supported, getting tokens according to PVL.
		 * 	2. PVL not supported, getting tokens according to PVL iso language.
		 * 	3. pvl iso language not supported, getting tokens according to document locale.
		 * 	4. document locale not supported, getting tokens according to document locale iso language.
		 * 	5. document locale iso language not supported, getting tokens according to 'en'.
		 * Otherwise, do nothing
		 */
		_s_g_n_FLocalization._initializePvlDateStrings =function()
		{
			var pvl/*String*/ = sap.common.globalization.GlobalizationPreference.getInstance().pvl();
			if (pvl && !sap.common.globalization.utils.StringUtil.isBlankString(pvl))
			{
				// get appropriate tokens according to pvl, with fallback strategy
				var longDay/*Array*/ = sap.common.globalization.GlobalizationDateConstant.getLongDay();
				if (longDay)
				{
					_s_g_n_FLocalization._DayStrings["en"][1] = longDay[1];
					_s_g_n_FLocalization._DayStrings["en"][2] = longDay[2];
					_s_g_n_FLocalization._DayStrings["en"][3] = longDay[3];
					_s_g_n_FLocalization._DayStrings["en"][4] = longDay[4];
					_s_g_n_FLocalization._DayStrings["en"][5] = longDay[5];
					_s_g_n_FLocalization._DayStrings["en"][6] = longDay[6];
					_s_g_n_FLocalization._DayStrings["en"][7] = longDay[0];
				}
				
				var shortDay/*Array*/ = sap.common.globalization.GlobalizationDateConstant.getShortDay();
				if (shortDay)
				{
					_s_g_n_FLocalization._shortDayStrings["en"][1] = shortDay[1];
					_s_g_n_FLocalization._shortDayStrings["en"][2] = shortDay[2];
					_s_g_n_FLocalization._shortDayStrings["en"][3] = shortDay[3];
					_s_g_n_FLocalization._shortDayStrings["en"][4] = shortDay[4];
					_s_g_n_FLocalization._shortDayStrings["en"][5] = shortDay[5];
					_s_g_n_FLocalization._shortDayStrings["en"][6] = shortDay[6];
					_s_g_n_FLocalization._shortDayStrings["en"][7] = shortDay[0];
				}
				
				var longMonth/*Array*/ = sap.common.globalization.GlobalizationDateConstant.getLongMonth();
				if (longMonth)
				{
					_s_g_n_FLocalization._MonthStrings["en"][1] = longMonth[0];
					_s_g_n_FLocalization._MonthStrings["en"][2] = longMonth[1];
					_s_g_n_FLocalization._MonthStrings["en"][3] = longMonth[2];
					_s_g_n_FLocalization._MonthStrings["en"][4] = longMonth[3];
					_s_g_n_FLocalization._MonthStrings["en"][5] = longMonth[4];
					_s_g_n_FLocalization._MonthStrings["en"][6] = longMonth[5];
					_s_g_n_FLocalization._MonthStrings["en"][7] = longMonth[6];
					_s_g_n_FLocalization._MonthStrings["en"][8] = longMonth[7];
					_s_g_n_FLocalization._MonthStrings["en"][9] = longMonth[8];
					_s_g_n_FLocalization._MonthStrings["en"][10] = longMonth[9];
					_s_g_n_FLocalization._MonthStrings["en"][11] = longMonth[10];
					_s_g_n_FLocalization._MonthStrings["en"][12] = longMonth[11];
				}
				
				var shortMonth/*Array*/ = sap.common.globalization.GlobalizationDateConstant.getShortMonth();
				if (shortMonth)
				{
					_s_g_n_FLocalization._shortMonthStrings["en"][1] = shortMonth[0];
					_s_g_n_FLocalization._shortMonthStrings["en"][2] = shortMonth[1];
					_s_g_n_FLocalization._shortMonthStrings["en"][3] = shortMonth[2];
					_s_g_n_FLocalization._shortMonthStrings["en"][4] = shortMonth[3];
					_s_g_n_FLocalization._shortMonthStrings["en"][5] = shortMonth[4];
					_s_g_n_FLocalization._shortMonthStrings["en"][6] = shortMonth[5];
					_s_g_n_FLocalization._shortMonthStrings["en"][7] = shortMonth[6];
					_s_g_n_FLocalization._shortMonthStrings["en"][8] = shortMonth[7];
					_s_g_n_FLocalization._shortMonthStrings["en"][9] = shortMonth[8];
					_s_g_n_FLocalization._shortMonthStrings["en"][10] = shortMonth[9];
					_s_g_n_FLocalization._shortMonthStrings["en"][11] = shortMonth[10];
					_s_g_n_FLocalization._shortMonthStrings["en"][12] = shortMonth[11];
				}
				
				var amPm/*Array*/ = sap.common.globalization.GlobalizationDateConstant.getAmPmToken();
				if (amPm)
				{
					_s_g_n_FLocalization._AmPms["en"][1] = amPm[0];
					_s_g_n_FLocalization._AmPms["en"][2] = amPm[1];
				}
			}
		}
		
		_s_g_n_FLocalization._resetAllStaticVars =function()
		{
			_s_g_n_FLocalization._DayStrings = null;
			_s_g_n_FLocalization._shortDayStrings = null;
			_s_g_n_FLocalization._MonthStrings = null;
			_s_g_n_FLocalization._shortMonthStrings = null;
			_s_g_n_FLocalization._DateTimeCodes = null;
			_s_g_n_FLocalization._NumericStrings = null;
			_s_g_n_FLocalization._DateTimeStrings = null;
			_s_g_n_FLocalization._CurrencySymbol = null;
			_s_g_n_FLocalization._SAPCurrencySymbol = null;
			_s_g_n_FLocalization._SAPDateString = null;
			_s_g_n_FLocalization._SAPTimeString = null;
			_s_g_n_FLocalization._SAPThousandsSeparator = null;
			_s_g_n_FLocalization._SAPDecimalSeparator = null;
			_s_g_n_FLocalization._SAPLongDay = null;
			_s_g_n_FLocalization._SAPShortDay = null;
			_s_g_n_FLocalization._SAPLongMonth = null;
			_s_g_n_FLocalization._SAPShortMonth = null;
			_s_g_n_FLocalization._AmPms = null
		}

})();
(function() {

	sap.common.globalization.declare("sap.common.globalization.utils.BaseUtils");
	
	var su = sap.common.globalization.utils.BaseUtils;

	// static private in globale to make re id is not duplicated
	var _sap_common_util_GEN_UID = 0;

	/**
	 * return the global uid for HTML elements in the same window scope.
	 * 
	 */
	sap.common.globalization.utils.BaseUtils.genUID = function() {
		if (!_sap_common_util_GEN_UID) {
			_sap_common_util_GEN_UID = 0;
		}
		return "xgen_" + (_sap_common_util_GEN_UID++);
	};
	
	
	var class2type = {
		'[object Boolean]' : 'boolean',
		'[object Number]' : 'number',
		'[object String]' : 'string',
		'[object Function]' : 'function',
		'[object Array]' : 'array',
		'[object Date]' : 'date',
		'[object RegExp]' : 'regexp',
		'[object Object]' : 'object'
	};
	/**
	 * apply properties to a item
	 * 
	 * @name sap.common.globalization.utils.BaseUtils.applyProperties 
	 * @memberOf Function.prototype
	 * @function
	 * @param {Object}
	 *            the item to apply properties
	 * @param {Array}
	 *            the properties array
	 * */
	sap.common.globalization.utils.BaseUtils.applyProperties =function(item , properties/*Array*/) 
	{
			if (properties != null) {							// apply the passed properties
				var len = properties.length;
				for (var i=0; i<len; i++) {
					var property = properties[i];
					if(property && property!=null)
					{
						this.applyObjectProperty(item,property.name,property.value);
					}
				}
			}
	}
	sap.common.globalization.utils.BaseUtils.applyObjectProperty=function(object,propertyName,propertyValue)
	{
		try{
				if (su.isFunction(object[propertyName]))
				{
					object[propertyName](propertyValue);
				}
				else if(object.hasOwnProperty(propertyName))
				{
					object[propertyName] = propertyValue;
				}
			}
			catch(e)
			{
				console.log(e);
			}
	
	};
	sap.common.globalization.utils.BaseUtils.getObjectProperty=function(object,propertyName)
	{
		try{
				if (su.isFunction(object[propertyName])) {
					return object[propertyName]();
				} else if(object.hasOwnProperty(propertyName)) {
					return object[propertyName];
				}

			}
			catch(e)
			{
				console.log(e);
			}
	};
	sap.common.globalization.utils.BaseUtils.type = function(obj) {
		return obj == null ? String(obj) : class2type[Object.prototype.toString.call(obj)] || "object";
	};
	
	sap.common.globalization.utils.BaseUtils.isFunction = function(obj) {
		return su.type(obj) === "function";
	};
	
	sap.common.globalization.utils.BaseUtils.isBoolean = function(obj) {
		return su.type(obj) === "boolean";
	};
	
	sap.common.globalization.utils.BaseUtils.isString = function(obj) {
		return su.type(obj) === "string";
	};
	
	sap.common.globalization.utils.BaseUtils.isArray = function(obj) {
		return su.type(obj) === "array";
	};
	
	sap.common.globalization.utils.BaseUtils.isNumber = function(obj) {
		return su.type(obj) === "number";
	};
	
	sap.common.globalization.utils.BaseUtils.isRegExp = function(obj) {
		return su.type(obj) === "regexp";
	};
	
	/**
	 * Sort an object Array.
	 * 
	 * @param {Array} arr The object Array to sort.
	 * @param {String} prop The object field for the sort.
	 * @param {Boolean} [desc] Sort by ASC or DESC, by default is ASC.
	 * 		
	 */
	sap.common.globalization.utils.BaseUtils.sortArrayOn = function(arr, prop, desc) {
		if(su.isArray(arr) && su.isString(prop)){
			arr.sort(
	            function(a, b){
	                return desc ? 
	                	(a[prop] < b[prop]) - (a[prop] > b[prop]) :
	                		(a[prop] > b[prop]) - (a[prop] < b[prop]);
	            }
	        );
		}
    };
	
})();(function(){
	sap.common.globalization.declare("sap.common.globalization.utils.UnitAbbreviations");
	sap.common.globalization.require("sap.common.globalization.utils.BaseUtils");

	/**
	 *  Tracks the string abbreviations for large numbers.
	 */

    //----------------------------------
    //  Constructor
    //----------------------------------
	
	sap.common.globalization.utils.UnitAbbreviations =function()
	{
		this.__className = "sap.common.globalization.utils.UnitAbbreviations";
		
		this.thousands = "K";
		this.millions = "M";
		this.billions = "B";
		this.trillions = "T";
	}
	
	sap.common.globalization.utils.UnitAbbreviations.prototype.toObject =function()/*Object*/
	{
		return {
		    "thousands": this.thousands, 
		    "millions": this.millions, 
		    "billions": this.billions, 
		    "trillions": this.trillions
	    };
	}
	
	sap.common.globalization.utils.UnitAbbreviations.prototype.copyFromObject =function(obj/*Object*/)/*Boolean*/
	{
		if (!obj)
	    {
	    	obj = {thousands: "K", millions: "M", billions: "B", trillions: "T"};
	    }
	    var changed/*Boolean*/ = false;
        for ( attr/*String*/ in ["thousands", "millions", "billions", "trillions"])
        {
            if (sap.common.globalization.utils.BaseUtils.isString(obj[attr])&& obj[attr] != this[attr])
            {
                this[attr] = obj[attr];
                changed = true;
            }
        }
        return changed;
	}

})();(function(){

	sap.common.globalization.declare("sap.common.globalization.utils.BooleanUtil");
	
	sap.common.globalization.require("sap.common.globalization.utils.BaseUtils");
	
	 /**
	 * Check wether the value passed in is a boolean or string that represents a boolean.
	 *  
	 * @param value
	 * @return  
	 * 
	 */
	sap.common.globalization.utils.BooleanUtil.isBooleanValue = function(value /* Object */) /*boolean*/{

		if (sap.common.globalization.utils.BaseUtils.isBoolean(value))
		{
			return true;
		}
		else if (sap.common.globalization.utils.BaseUtils.isString(value))
		{
			return String(value).toLowerCase() == "true" || String(value).toLowerCase() == "false";
		}
		else
		{
			return false;
		}
	};

})();(function() {
	sap.common.globalization.declare("sap.common.globalization.utils.ColorUtil");

	sap.common.globalization.require("sap.common.globalization.utils.BaseUtils");

	/**
	 * Helper function to convert number to hex String.
	 * @param color the color to be converted.
	 * @return string represting the <code>color</code> in hex.
	 */
	sap.common.globalization.utils.ColorUtil.convertToHexString = function(color) {
		if(color == null || !sap.common.globalization.utils.BaseUtils.isNumber(color) || isNaN(color))
			return null;

		var hex = "#", arr = ["r", "g", "b"], rgb = sap.common.globalization.utils.ColorUtil.convertToRGBObject(color);
		for(var i = 0, len = arr.length; i < len; i++) {
			var item = arr[i], primaryHex = rgb[item].toString(16);
			if(primaryHex.length == 1) {
				hex += "0";
			}
			hex += primaryHex;
		}
		return hex;
	};
	/**
	 * Helper function to convert number to rgb object
	 * @param {number} hex the number to be converted
	 * @return {object} object containing r, g, b properties indicating color.
	 */
	sap.common.globalization.utils.ColorUtil.convertToRGBObject = function(hex) {
		if(hex == null || !sap.common.globalization.utils.BaseUtils.isNumber(hex) || isNaN(hex))
			return null;

		return {
			r : (hex & 0xff0000) >> 16,
			g : (hex & 0x00ff00) >> 8,
			b : hex & 0x0000ff
		};
	};

})();
(function(){

	sap.common.globalization.declare("sap.common.globalization.utils.DataFormatUtils");
	
	sap.common.globalization.require("sap.common.globalization.utils.ColorUtil");
	
	/**
	 * Add <Font COLOR="XXX"> HTML snippet to the given text, according to the given color.
	 */
	sap.common.globalization.utils.DataFormatUtils.decorateColorHTML = function(text /*String*/, color/*Number*/)/*String*/
	{
		if (!isNaN(color))
		{
			return "<FONT COLOR=\"" + sap.common.globalization.utils.ColorUtil.convertToHexString(color) + "\"/>" + text + "</FONT>";
		}
		return text;
	};
	
	
	sap.common.globalization.utils.DataFormatUtils.DataFormatUtils = function()
	{
		throw new Error("Should not initialize DataFormatUtils.");
	};



})();(function(){
	sap.common.globalization.declare("sap.common.globalization.utils.NumberUtil");
	
	sap.common.globalization.require("sap.common.globalization.utils.BaseUtils");
	sap.common.globalization.require("sap.common.globalization.utils.UnitAbbreviations");
	sap.common.globalization.require("sap.common.globalization.utils.StringUtil");
	
	/**
	 *  The NumberUtil class should contain utility functions for working with the <code>Number</code> type
	 */
	
	/**
	 *  The Flash player's support for floating point numbers is poor at times. Numbers may be
	 * 	returned from arithmetic with slight inaccuracies. For instance, a function might return
	 *  24.99999999 instead of 25. This function will compare two numbers more loosely than strict '=='.
	 *  It subtracts one number from the other. The result must be between 10^precision and its opposite.
	 *  (ie. -10^precision < (result of subtraction) < 10^precision)
	 * 
	 *  @param num1			Number	The first number to compare
	 *  @param num2			Number	The second number to compare
	 *  @param precision	int		Raise 10 to the power of this number to determine the range that will return a true result.
	 *  @return 			Boolean	true or false depending on if the values meet the loose equality requirements
	 */
	sap.common.globalization.utils.NumberUtil.checkEquality = function(num1, num2, precision){
		precision = precision || -5;
		//do a normal == check first just in case
		if(num1 == num2) return true;
			
		//calculate the range in which the numbers may be different
		var range/*Number*/ = Math.pow(10, precision - 1);
			
		var difference/*Number*/ = num1 - num2;
		return difference < range && difference > -range;
	};
		
	/**
	 *  Perform a <= check on floating point numbers.
	 * 
	 *  @param lhs			Number	The first number to compare (lefthand side of the operator)
	 *  @param rhs			Number	The second number to compare (righthand side of the operator)
	 *  @param precision	int		Raise 10 to the power of this number to determine the range that will return a true result.
	 * 
	 *  @return 			Boolean	true or false depending on if the values meet the < or loose equality requirements
	 */ 
	sap.common.globalization.utils.NumberUtil.lessThanEqual = function(lhs, rhs, precision){	
		precision = precision || -5;
		return ((lhs < rhs) || sap.common.globalization.utils.NumberUtil.checkEquality(lhs, rhs, precision));
	};

	/**
	 *  Perform a >= check on floating point numbers.
	 * 
	 *  @param lhs			Number	The first number to compare (lefthand side of the operator)
	 *  @param rhs			Number	The second number to compare (righthand side of the operator)
	 *  @param precision	int		Raise 10 to the power of this number to determine the range that will return a true result.
	 * 
	 *  @return 			Boolean	true or false depending on if the values meet the > or loose equality requirements
	 */
	sap.common.globalization.utils.NumberUtil.greaterThanEqual = function(lhs, rhs, precision){	
		precision = precision || -5;
		return ((lhs > rhs) || sap.common.globalization.utils.NumberUtil.checkEquality(lhs, rhs, precision));
	};
		
	/**
	 * Takes a floating point number and returns the precision (i.e., number of decimal places)
	 * 
	 * @param num	Number
	 * @return int
	 * 
	 */
	sap.common.globalization.utils.NumberUtil.getPrecision = function(num) {			
		var numString/*String*/ = String(num);
		var numStringLength/*int*/ = numString.length;
		var decimalIndex/*int*/ = numString.indexOf('.');
		var precision/*int*/ = numStringLength - (decimalIndex + 1);

		return precision;
	};
		
	/**
	 *  Rounds a floating-point Number to a specific number of decimal places.
	 *  This will introduce inaccuracy, but it is a useful way to format a Number for display as text.
	 *  The result may have fewer decimal places than the specified amount.
	 *  [Note] Rounding may cause precision problem since it uses division. That's the limitation
	 *  of math calculation of primitive Number in ActionScript.
	 * 
	 *  @param		numberToRound 	Number	the original Number that should have it's decimal places limited
	 *  @param		decimalPlaces	int		the desired precision of the result
	 *  @return		Number	a Number that has a less than or equal to the desired number of decimal places
	 */
	sap.common.globalization.utils.NumberUtil.roundToPrecision = function(numberToRound, decimalPlaces){
		/**
		 * ADAPT01347279: Use a heuristic way to minimize the impact of the precision problem
		 * of floating point manipulation. Try to avoid rounding.
		 * 
		 * First, get the fraction digit count.
		 * Second, get the best fraction digit. If the fraction part is shorter than the length specified
		 * by "decimalPlaces", then no need to do the rounding.
		 * Third, do the rounding if necessary.
		 */
		var str/*String*/ = numberToRound.toString(10);
		var strSplit/*Array*/ = str.split(".");
		var bestFractionDigit/*int*/ = (strSplit && strSplit.length > 1 ? strSplit[1].length : 0);
		if (bestFractionDigit <= decimalPlaces)
		{
			return numberToRound;
		}
		var roundingValue/*Number*/ = Math.pow(10, decimalPlaces);
		return Math.round(numberToRound * roundingValue) / roundingValue;
	};
		
	/**
	 *  Rounds a Number to the nearest multiple of another Number (i.e. nearest 10).
	 * 
	 *  @param numberToRound	Number	the number that will be rounded
	 *  @param multipleOf		Number	the result will be a multiple of this number
	 *  @param offset			Number	add this amount to the result
	 *  @return					Number	the rounded number
	 */
	sap.common.globalization.utils.NumberUtil.roundToNearest = function(numberToRound, multipleOf, offset)
	{
		multipleOf = multipleOf || 1;
		offset = offset || 0;
		return Math.round((numberToRound + offset) / multipleOf) * multipleOf - offset;
	};
		
	/**
	 * Abbreviate a number using the abbreviations provided
	 * 
	 * @param number 		Number		number to abbreviate
	 * @param abbreviations UnitAbbreviations	unit labels to use
	 * @param maxDecimals 	uint
	 * @return 				String formatted string representing the number in abbreviated form
	 */
	sap.common.globalization.utils.NumberUtil.abbreviate = function(number, abbreviations, maxDecimals) 
	{
		var thousand/*Number*/ = 1E3;
		var million/*Number*/ = 1E6;
		var billion/*Number*/ = 1E9;
		var trillion/*Number*/ = 1E12;
			
		abbreviations = abbreviations || null;
		maxDecimals = maxDecimals || 1;
			
		if (!abbreviations) {
			abbreviations = new sap.common.globalization.utils.UnitAbbreviations();
		}
			
		var abbr/*String*/ = "";
		var absNumber/*Number*/ = Math.abs(number);
			
		if (absNumber >= trillion) 
		{
			number /= trillion;
			abbr = abbreviations.trillions;
		}
		else if (absNumber >= billion)
		{
			number /= billion;
			abbr = abbreviations.billions;
		}
		else if (absNumber >= million)
		{
			number /= million;
			abbr = abbreviations.millions;
		}
		else if (absNumber >= thousand) 
		{
			number /= thousand;
			abbr = abbreviations.thousands;
		}
			
		number = sap.common.globalization.utils.NumberUtil.roundToPrecision(number, maxDecimals);
		return String(number) + abbr;
	};
		
	/**
	 * Parse an object to Number, if the object is not a Number or null,
	 * this method returns the default value specified in defaultValue parameter.
	 * 
	 * @param value 		Object		Object to parse to Number
	 * @param defaultValue	Number		The default value if the input is not a Number or null.
	 * @return 				Number		The parsed Number value, if the input is not a Number or null, the defaultValue will be returned.
	 */ 
	sap.common.globalization.utils.NumberUtil.parseNumber = function(value, defaultValue){
		var result/*Number*/ = defaultValue;
		if(value != null){
			var numValue/*Number*/ = Number(value);
			if(isNaN(numValue) == false){
				result = numValue;
			}
		}
		return result;
	};
		
		
	/**
	 * Check whether the data is number or numeric string.
	 *  
	 * @param data Object
	 * @return Boolean
	 * 
	 */
	sap.common.globalization.utils.NumberUtil.isNumericValue = function(data)
	{
		if (sap.common.globalization.utils.BaseUtils.isNumber(data) && !isNaN(data)){
			return true;
		} 
		else if (sap.common.globalization.utils.BaseUtils.isString(data)){
			return sap.common.globalization.utils.StringUtil.isNumber(String(data));
		}
		else{
			return false;
		}
	};

})();(function(){

	sap.common.globalization.declare("sap.common.globalization.utils.StringUtil");
	sap.common.globalization.require("sap.common.globalization.utils.BaseUtils");
	
    /**
	 * Escape the Html entities in the string.
	 * 
	 * @param txtString
	 * @return 
	 * 
	 */
	sap.common.globalization.utils.StringUtil.escapeEntities =function(txtString /*String*/)/*String*/
	{
		if (txtString)
		{
			txtString = txtString.split("&").join("&amp;");
			txtString = txtString.split("<").join("&lt;");
			txtString = txtString.split(">").join("&gt;");
			txtString = txtString.split('"').join("&quot;");
			txtString = txtString.split("'").join("&apos;");				
		}
		return txtString;
	};
	
	sap.common.globalization.utils.StringUtil.trim = function(string/*string*/)/*string*/{
       return string.replace(/^\s*/, "").replace(/\s*$/, "")
    };
    
	
	sap.common.globalization.utils.StringUtil.isBlankString = function(val/*Object*/)/*Boolean*/ {
		if (val == null || !(sap.common.globalization.utils.BaseUtils.isString(val)))
		{
			return false;
		}
		return sap.common.globalization.utils.StringUtil.trim(val) === "";
	};


	sap.common.globalization.utils.StringUtil.isNumber =function(str/*String*/)/*Boolean*/ {
		if (isNaN(Number(str))) {
			return false;
		// Strings containing all spaces will get cast to 0 (i.e., a number)
		} else if (sap.common.globalization.utils.StringUtil.isBlankString(str)) {
			return false;
		} else {
			return true;
		}			
	}
	

     
})();(function()
// package xcelsius.globalization.numericFormat
{
	sap.common.globalization.declare("sap.common.globalization.defaultFormat.DefaultDateFormatLocaleFactory");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDate");
	sap.common.globalization.require("sap.common.globalization.GlobalizationDateConstant");
	sap.common.globalization.require("sap.common.globalization.GlobalizationPreference");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDate");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDefaultDate");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FLocalization");
	sap.common.globalization.require("sap.common.globalization.numericFormat.");

	/**
	 * This class generate the locale info for Default Long Date format.
	 *
	 * @author jagu
	 *
	 */
	sap.common.globalization.defaultFormat.DefaultDateFormatLocaleFactory = function() {
		this.__className = "sap.common.globalization.defaultFormat.DefaultDateFormatLocaleFactory";
		// locale info for parsing date number format
		this._parseLocaleInfo = null;
		// locale info for displaying date number format
		this._displayLocaleInfo = null;
	}
	
	var _g_d_d = sap.common.globalization.defaultFormat.DefaultDateFormatLocaleFactory;

	_g_d_d.prototype.getDateParseLocaleInfo = function()/*:IDateParseLocaleInfo*/
	{
		if(!this._parseLocaleInfo) {
			this._parseLocaleInfo = this.getPredefinedDateParseLocaleString();
		}
		return this._parseLocaleInfo;
	}

	_g_d_d.prototype.getDateDisplayLocaleInfo = function()/*:IDateDisplayLocaleInfo*/
	{
		if(!this._displayLocaleInfo) {
			this._displayLocaleInfo = this.getPredefinedDateDisplayLocaleString();

			// apply sap tokens and separators for date type if exists
			this.applySAPDateTokensAndSeparators(this._displayLocaleInfo);
		}
		return this._displayLocaleInfo;
	}

	_g_d_d.prototype.getDefaultDateFormat = function()/*:String*/
	{
		return sap.common.globalization.GlobalizationDateConstant.getDefaultLongDateFormat();
	}
	/**
	 * Create FDate subclass for parsing and displaying Default Date format.
	 *
	 * @return FDefaultDate instance
	 *
	 */
	_g_d_d.prototype.createFDate = function()/*:FDate*/
	{
		return new sap.common.globalization.numericFormat.FDefaultDate(this.getDateParseLocaleInfo(), this.getDateDisplayLocaleInfo());
	}
	/**
	 * @private
	 * Do nothig in this class, becuase for Default Long Date format, it is unnecessary to replace the date separator.
	 * Therefore, it is unnecessary to parse that separator.
	 *
	 * @param locale
	 * @return
	 *
	 */
	_g_d_d.prototype.getPredefinedDateParseLocaleString = function()/*:DateParseLocaleInfoImpl*/
	{
		return new sap.common.globalization.defaultFormat.DateParseLocaleInfoImpl();
	}

	_g_d_d.prototype.getPredefinedDateDisplayLocaleString = function()/*:DateDisplayLocaleInfoImpl*/
	{
		var localeInfo/*:DateDisplayLocaleInfoImpl*/ = new sap.common.globalization.defaultFormat.DateDisplayLocaleInfoImpl();

		var longDay/*:Array*/ = sap.common.globalization.GlobalizationDateConstant.getLongDay();
		if(longDay) {
			localeInfo.IMSDAYNAME1(longDay[1]);
			localeInfo.IMSDAYNAME2(longDay[2]);
			localeInfo.IMSDAYNAME3(longDay[3]);
			localeInfo.IMSDAYNAME4(longDay[4]);
			localeInfo.IMSDAYNAME5(longDay[5]);
			localeInfo.IMSDAYNAME6(longDay[6]);
			localeInfo.IMSDAYNAME7(longDay[0]);
		}

		var shortDay/*:Array*/ = sap.common.globalization.GlobalizationDateConstant.getShortDay();
		if(shortDay) {
			localeInfo.IMSABBREVDAYNAME1(shortDay[1]);
			localeInfo.IMSABBREVDAYNAME2(shortDay[2]);
			localeInfo.IMSABBREVDAYNAME3(shortDay[3]);
			localeInfo.IMSABBREVDAYNAME4(shortDay[4]);
			localeInfo.IMSABBREVDAYNAME5(shortDay[5]);
			localeInfo.IMSABBREVDAYNAME6(shortDay[6]);
			localeInfo.IMSABBREVDAYNAME7(shortDay[0]);
		}

		var longMonth/*:Array*/ = sap.common.globalization.GlobalizationDateConstant.getLongMonth();
		if(longMonth) {
			localeInfo.IMSMONTHNAME1(longMonth[0]);
			localeInfo.IMSMONTHNAME2(longMonth[1]);
			localeInfo.IMSMONTHNAME3(longMonth[2]);
			localeInfo.IMSMONTHNAME4(longMonth[3]);
			localeInfo.IMSMONTHNAME5(longMonth[4]);
			localeInfo.IMSMONTHNAME6(longMonth[5]);
			localeInfo.IMSMONTHNAME7(longMonth[6]);
			localeInfo.IMSMONTHNAME8(longMonth[7]);
			localeInfo.IMSMONTHNAME9(longMonth[8]);
			localeInfo.IMSMONTHNAME10(longMonth[9]);
			localeInfo.IMSMONTHNAME11(longMonth[10]);
			localeInfo.IMSMONTHNAME12(longMonth[11]);
		}

		var shortMonth/*:Array*/ = sap.common.globalization.GlobalizationDateConstant.getShortMonth();
		if(shortMonth) {
			localeInfo.IMSABBREVMONTHNAME1(shortMonth[0]);
			localeInfo.IMSABBREVMONTHNAME2(shortMonth[1]);
			localeInfo.IMSABBREVMONTHNAME3(shortMonth[2]);
			localeInfo.IMSABBREVMONTHNAME4(shortMonth[3]);
			localeInfo.IMSABBREVMONTHNAME5(shortMonth[4]);
			localeInfo.IMSABBREVMONTHNAME6(shortMonth[5]);
			localeInfo.IMSABBREVMONTHNAME7(shortMonth[6]);
			localeInfo.IMSABBREVMONTHNAME8(shortMonth[7]);
			localeInfo.IMSABBREVMONTHNAME9(shortMonth[8]);
			localeInfo.IMSABBREVMONTHNAME10(shortMonth[9]);
			localeInfo.IMSABBREVMONTHNAME11(shortMonth[10]);
			localeInfo.IMSABBREVMONTHNAME12(shortMonth[11]);
		}

		// initialize the Abbrev Era string for Token G
		var abbrevEra/*:Array*/ = sap.common.globalization.GlobalizationDateConstant.getAbbrevEraString();
		if(abbrevEra && abbrevEra[1]) {
			// abbrevEra[1] - "AD" exists, then pass it to locale info
			// the supported dates are from 1900, so all of them belong to AD.
			localeInfo.IMEraToken(abbrevEra[1]);
		}

		return localeInfo;
	}
	_g_d_d.prototype.applySAPDateTokensAndSeparators = function (displayLocaleInfo/*:DateDisplayLocaleInfoImpl*/)/*:void*/
	{
		var floc/*:FLocalization*/ = sap.common.globalization.numericFormat.FLocalization.getInstance();

		if(floc.SAPShortDay) {
			displayLocaleInfo.IMSABBREVDAYNAME1(floc.SAPShortDay[0]);
			displayLocaleInfo.IMSABBREVDAYNAME2(floc.SAPShortDay[1]);
			displayLocaleInfo.IMSABBREVDAYNAME3(floc.SAPShortDay[2]);
			displayLocaleInfo.IMSABBREVDAYNAME4(floc.SAPShortDay[3]);
			displayLocaleInfo.IMSABBREVDAYNAME5(floc.SAPShortDay[4]);
			displayLocaleInfo.IMSABBREVDAYNAME6(floc.SAPShortDay[5]);
			displayLocaleInfo.IMSABBREVDAYNAME7(floc.SAPShortDay[6]);
		}

		if(floc.SAPLongDay) {
			displayLocaleInfo.IMSDAYNAME1(floc.SAPLongDay[0]);
			displayLocaleInfo.IMSDAYNAME2(floc.SAPLongDay[1]);
			displayLocaleInfo.IMSDAYNAME3(floc.SAPLongDay[2]);
			displayLocaleInfo.IMSDAYNAME4(floc.SAPLongDay[3]);
			displayLocaleInfo.IMSDAYNAME5(floc.SAPLongDay[4]);
			displayLocaleInfo.IMSDAYNAME6(floc.SAPLongDay[5]);
			displayLocaleInfo.IMSDAYNAME7(floc.SAPLongDay[6]);
		}

		if(floc.SAPShortMonth) {
			displayLocaleInfo.IMSABBREVMONTHNAME1(floc.SAPShortMonth[0]);
			displayLocaleInfo.IMSABBREVMONTHNAME2(floc.SAPShortMonth[1]);
			displayLocaleInfo.IMSABBREVMONTHNAME3(floc.SAPShortMonth[2]);
			displayLocaleInfo.IMSABBREVMONTHNAME4(floc.SAPShortMonth[3]);
			displayLocaleInfo.IMSABBREVMONTHNAME5(floc.SAPShortMonth[4]);
			displayLocaleInfo.IMSABBREVMONTHNAME6(floc.SAPShortMonth[5]);
			displayLocaleInfo.IMSABBREVMONTHNAME7(floc.SAPShortMonth[6]);
			displayLocaleInfo.IMSABBREVMONTHNAME8(floc.SAPShortMonth[7]);
			displayLocaleInfo.IMSABBREVMONTHNAME9(floc.SAPShortMonth[8]);
			displayLocaleInfo.IMSABBREVMONTHNAME10(floc.SAPShortMonth[9]);
			displayLocaleInfo.IMSABBREVMONTHNAME11(floc.SAPShortMonth[10]);
			displayLocaleInfo.IMSABBREVMONTHNAME12(floc.SAPShortMonth[11]);
		}

		if(floc.SAPLongMonth) {
			displayLocaleInfo.IMSMONTHNAME1(floc.SAPLongMonth[0]);
			displayLocaleInfo.IMSMONTHNAME2(floc.SAPLongMonth[1]);
			displayLocaleInfo.IMSMONTHNAME3(floc.SAPLongMonth[2]);
			displayLocaleInfo.IMSMONTHNAME4(floc.SAPLongMonth[3]);
			displayLocaleInfo.IMSMONTHNAME5(floc.SAPLongMonth[4]);
			displayLocaleInfo.IMSMONTHNAME6(floc.SAPLongMonth[5]);
			displayLocaleInfo.IMSMONTHNAME7(floc.SAPLongMonth[6]);
			displayLocaleInfo.IMSMONTHNAME8(floc.SAPLongMonth[7]);
			displayLocaleInfo.IMSMONTHNAME9(floc.SAPLongMonth[8]);
			displayLocaleInfo.IMSMONTHNAME10(floc.SAPLongMonth[9]);
			displayLocaleInfo.IMSMONTHNAME11(floc.SAPLongMonth[10]);
			displayLocaleInfo.IMSMONTHNAME12(floc.SAPLongMonth[11]);
		}
	}

})();
(function()
// package xcelsius.globalization.numericFormat
{
	sap.common.globalization.declare("sap.common.globalization.defaultFormat.DefaultDateTimeFormatLocaleFactory");
	sap.common.globalization.require("sap.common.globalization.defaultFormat.DefaultDateFormatLocaleFactory");
	sap.common.globalization.require("sap.common.globalization.GlobalizationDateConstant");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FLocalization");

	var gd = sap.common.globalization.defaultFormat;

	gd.DefaultDateTimeFormatLocaleFactory = function() {
		gd.DefaultDateTimeFormatLocaleFactory.superclass.constructor.apply(this);
		this.__className = "sap.common.globalization.defaultFormat.DefaultDateTimeFormatLocaleFactory";
	}
	gd.DefaultDateTimeFormatLocaleFactory = sap.common.globalization.extend(gd.DefaultDateTimeFormatLocaleFactory, gd.DefaultDateFormatLocaleFactory);
	gd.DefaultDateTimeFormatLocaleFactory.prototype.getDefaultDateFormat = function()/*:String*/
	{
		return sap.common.globalization.GlobalizationDateConstant.getDefaultDateTimeFormat();
	}

	gd.DefaultDateTimeFormatLocaleFactory.prototype.applySAPDateTokensAndSeparators = function(displayLocaleInfo/*:DateDisplayLocaleInfoImpl*/)/*:void*/
	{
		gd.DefaultDateTimeFormatLocaleFactory.superclass.applySAPDateTokensAndSeparators(displayLocaleInfo);
		var floc/*:FLocalization*/ = sap.common.globalization.numericFormat.FLocalization.getInstance();
		if(displayLocaleInfo && floc && floc.SAPTimeSeparator) {
			displayLocaleInfo.IMTimeSeparator(floc.SAPTimeSeparator);
		}
	}

	gd.DefaultDateTimeFormatLocaleFactory.prototype.getPredefinedDateParseLocaleString = function()/*:DateParseLocaleInfoImpl*/
	{
		var localeInfo/*:DateParseLocaleInfoImpl*/ = gd.DefaultDateTimeFormatLocaleFactory.superclass.getPredefinedDateParseLocaleString()
		var timeSep/*:String*/ = sap.common.globalization.GlobalizationDateConstant.getTimeSeparator();
		if(timeSep && localeInfo) {
			localeInfo.IMTimeSeparator(timeSep);
		}
		return localeInfo;
	}

	gd.DefaultDateTimeFormatLocaleFactory.prototype.getPredefinedDateDisplayLocaleString = function()/*:DateDisplayLocaleInfoImpl*/
	{
		var localeInfo/*:DateDisplayLocaleInfoImpl*/ = gd.DefaultDateTimeFormatLocaleFactory.superclass.getPredefinedDateDisplayLocaleString();
		var timeSep/*:String*/ = sap.common.globalization.GlobalizationDateConstant.getTimeSeparator();
		if(timeSep && localeInfo) {
			localeInfo.IMTimeSeparator(timeSep);
		}

		var amPM/*:Array*/ = sap.common.globalization.GlobalizationDateConstant.getAmPmToken();
		if(amPM && localeInfo) {
			localeInfo.IMAMTOKEN(amPM[0]);
			localeInfo.IMPMTOKEN(amPM[1]);
		}
		return localeInfo;
	}
})();
(function()
	// package xcelsius.globalization.numericFormat
{
	sap.common.globalization.declare("sap.common.globalization.defaultFormat.DefaultShortDateFormatLocaleFactory");
	sap.common.globalization.require("sap.common.globalization.defaultFormat.DefaultDateFormatLocaleFactory");
	sap.common.globalization.require("sap.common.globalization.GlobalizationDateConstant");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FLocalization");
	
	var gd = sap.common.globalization.defaultFormat;
		gd.DefaultShortDateFormatLocaleFactory = function()
		{
			gd.DefaultShortDateFormatLocaleFactory.superclass.constructor.apply(this);
			this.__className = "sap.common.globalization.defaultFormat.DefaultShortDateFormatLocaleFactory";
		}
		gd.DefaultShortDateFormatLocaleFactory = sap.common.globalization.extend(gd.DefaultShortDateFormatLocaleFactory, gd.DefaultDateFormatLocaleFactory);
		
		gd.DefaultShortDateFormatLocaleFactory.prototype.getDefaultDateFormat = function ()/*:String*/
		{
			return sap.common.globalization.GlobalizationDateConstant.getDefaultShorDateFormat();
		}
		
		gd.DefaultShortDateFormatLocaleFactory.prototype.applySAPDateTokensAndSeparators = function (displayLocaleInfo/*:DateDisplayLocaleInfoImpl*/)/*:void*/
		{
			gd.DefaultShortDateFormatLocaleFactory.superclass.applySAPDateTokensAndSeparators(displayLocaleInfo);
			var floc/*:FLocalization*/ = sap.common.globalization.numericFormat.FLocalization.getInstance();
			// apply date separator
			if (displayLocaleInfo && floc && floc.SAPDateSeparator){
				displayLocaleInfo.IMDateSeparator(floc.SAPDateSeparator);
			}
		}
		
		gd.DefaultShortDateFormatLocaleFactory.prototype.getPredefinedDateParseLocaleString = function ()/*:DateParseLocaleInfoImpl*/
		{
			var localeInfo/*:DateParseLocaleInfoImpl*/ = gd.DefaultShortDateFormatLocaleFactory.superclass.getPredefinedDateParseLocaleString();
			var dateSep/*:String*/ = sap.common.globalization.GlobalizationDateConstant.getDateSeparator();
			if (dateSep && localeInfo){
				localeInfo.IMDateSeparator(dateSep);
			}
			return localeInfo;
		}
		
		gd.DefaultShortDateFormatLocaleFactory.prototype.getPredefinedDateDisplayLocaleString = function ()/*:DateDisplayLocaleInfoImpl*/
		{
			var localeInfo/*:DateDisplayLocaleInfoImpl*/ = gd.DefaultShortDateFormatLocaleFactory.superclass.getPredefinedDateDisplayLocaleString();
			var dateSep/*:String*/ = sap.common.globalization.GlobalizationDateConstant.getDateSeparator();
			if (dateSep && localeInfo){
				localeInfo.IMDateSeparator(dateSep);
			}
			return localeInfo;
		}
		
})();
(function(){

		sap.common.globalization.declare("sap.common.globalization.defaultFormat.BooleanDisplayLocaleInfo");

		sap.common.globalization.defaultFormat.BooleanDisplayLocaleInfo = function()
		{
			this.__className = "sap.common.globalization.defaultFormat.BooleanDisplayLocaleInfo";
			this._trueString/*String*/ = ""; 
			this._falseString/*String*/ = "";
		}
		
		// trueString get set
		sap.common.globalization.defaultFormat.BooleanDisplayLocaleInfo.prototype.trueString = function(value)/*String*/
		{
			if(arguments.length>=1){
				//set
				this._trueString = value;
				return this;
			}else{
				//get
				return this._trueString;
			}
		}
		
		// falseString get set
		sap.common.globalization.defaultFormat.BooleanDisplayLocaleInfo.prototype.falseString =function(value)/*String*/
		{
			if(arguments.length>=1){
				//set
				this._falseString = value;
				return this;
			}else{
				//get
				return this._falseString;
			}
		}
})();(function()
// package xcelsius.globalization.numericFormat
{
	sap.common.globalization.declare("sap.common.globalization.defaultFormat.CustomDateFormatLocaleFactory");
	sap.common.globalization.require("sap.common.globalization.GlobalizationPreference");
	sap.common.globalization.require("sap.common.globalization.GlobalizationDateConstant");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FLocalization");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateForPVL");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDate");
	sap.common.globalization.require("sap.common.globalization.utils.StringUtil");

	var _g_d = sap.common.globalization.defaultFormat;
	_g_d.CustomDateFormatLocaleFactory = function() {
		this.__className = "sap.common.globalization.defaultFormat.CustomDateFormatLocaleFactory";
		this._dateParseLocaleInfo = null;
		this._dateDisplayLocaleInfo = null;
	}

	_g_d.CustomDateFormatLocaleFactory._instance = null;
	
	_g_d.CustomDateFormatLocaleFactory.getInstance = function()/*:CustomDateFormatLocaleFactory*/
	{
		if(!_g_d.CustomDateFormatLocaleFactory._instance) {
			_g_d.CustomDateFormatLocaleFactory._instance = new _g_d.CustomDateFormatLocaleFactory();
		}
		return _g_d.CustomDateFormatLocaleFactory._instance;
	}
	_g_d.CustomDateFormatLocaleFactory.prototype.getDateParseLocaleInfo = function()/*:IDateParseLocaleInfo*/
	{
		if(!this._dateParseLocaleInfo) {
			this._dateParseLocaleInfo = sap.common.globalization.numericFormat.FLocalization.getInstance().getDateParseLocaleInfo();
		}
		return this._dateParseLocaleInfo;
	}

	_g_d.CustomDateFormatLocaleFactory.prototype.getDateDisplayLocaleInfo = function()/*:IDateDisplayLocaleInfo*/
	{
		if(!this._dateDisplayLocaleInfo) {
			this._dateDisplayLocaleInfo = sap.common.globalization.numericFormat.FLocalization.getInstance().getDateDisplayLocaleInfo();
		}
		return this._dateDisplayLocaleInfo;
	}

	_g_d.CustomDateFormatLocaleFactory.prototype.createFDate = function()/*:FDate*/
	{
		var pvlExist/*:Boolean*/ = sap.common.globalization.GlobalizationPreference.getInstance().pvl() && !sap.common.globalization.utils.StringUtil.isBlankString(sap.common.globalization.GlobalizationPreference.getInstance().pvl());
		if(pvlExist) {
			// use FDateForPVL is pvl exists, for special handling in short day strings
			return new sap.common.globalization.numericFormat.FDateForPVL(this.getDateParseLocaleInfo(), this.getDateDisplayLocaleInfo());
		} else {
			return new sap.common.globalization.numericFormat.FDate(/*this.getDateParseLocaleInfo()*/null, this.getDateDisplayLocaleInfo());
		}
	}
})();
(function(){

		sap.common.globalization.declare("sap.common.globalization.defaultFormat.CustomNumericFormatLocaleFactory");
		sap.common.globalization.require("sap.common.globalization.numericFormat.FLocalization");
		sap.common.globalization.require("sap.common.globalization.numericFormat.FNumber");
		
		//Construct
		sap.common.globalization.defaultFormat.CustomNumericFormatLocaleFactory =function()
		{
			this.__className = "sap.common.globalization.defaultFormat.CustomNumericFormatLocaleFactory";
			
		}
		
		var _s_g_df_cNumericFLFactory = sap.common.globalization.defaultFormat.CustomNumericFormatLocaleFactory;
		
		_s_g_df_cNumericFLFactory._instance/*CustomNumericFormatLocaleFactory*/ = null; // TODO default is null.
				
		_s_g_df_cNumericFLFactory.getInstance= function()/*CustomNumericFormatLocaleFactory*/
		{
			if (!_s_g_df_cNumericFLFactory._instance){
				_s_g_df_cNumericFLFactory._instance = new sap.common.globalization.defaultFormat.CustomNumericFormatLocaleFactory();
			}
			return _s_g_df_cNumericFLFactory._instance;
		}
		
		_s_g_df_cNumericFLFactory.prototype.getNumericParseLocaleInfo =function()/*INumericParseLocaleInfo*/
		{
			// return the one in FLocalization.
			return sap.common.globalization.numericFormat.FLocalization.getInstance().numericParseLocaleInfo();
		}
		
		_s_g_df_cNumericFLFactory.prototype.getNumericDisplayLocaleInfo =function()/*INumericDisplayLocaleInfo*/
		{
			// return the one in FLocalization.
			return sap.common.globalization.numericFormat.FLocalization.getInstance().numericDisplayLocaleInfo();
		}
		
		_s_g_df_cNumericFLFactory.prototype.createFNumber =function()/*FNumber*/
		{
			// use the previous one for non-default formats.
			return new sap.common.globalization.numericFormat.FNumber(this.getNumericParseLocaleInfo(), this.getNumericDisplayLocaleInfo());
		}
})();(function() {
	sap.common.globalization.declare("sap.common.globalization.defaultFormat.DateDisplayLocaleInfoImpl");
	sap.common.globalization.defaultFormat.DateDisplayLocaleInfoImpl = function() {
		this.__className = "sap.common.globalization.defaultFormat.DateDisplayLocaleInfoImpl";
		// Date Separator
		this._IMDateSeparator = null;

		// Long Month Tokens
		this._IMSMONTHNAME1 = null;
		this._IMSMONTHNAME2 = null;
		this._IMSMONTHNAME3 = null;
		this._IMSMONTHNAME4 = null;
		this._IMSMONTHNAME5 = null;
		this._IMSMONTHNAME6 = null;
		this._IMSMONTHNAME7 = null;
		this._IMSMONTHNAME8 = null;
		this._IMSMONTHNAME9 = null;
		this._IMSMONTHNAME10 = null;
		this._IMSMONTHNAME11 = null;
		this._IMSMONTHNAME12 = null;

		// Short Month Tokens
		this._IMSABBREVMONTHNAME1 = null;
		this._IMSABBREVMONTHNAME2 = null;
		this._IMSABBREVMONTHNAME3 = null;
		this._IMSABBREVMONTHNAME4 = null;
		this._IMSABBREVMONTHNAME5 = null;
		this._IMSABBREVMONTHNAME6 = null;
		this._IMSABBREVMONTHNAME7 = null;
		this._IMSABBREVMONTHNAME8 = null;
		this._IMSABBREVMONTHNAME9 = null;
		this._IMSABBREVMONTHNAME10 = null;
		this._IMSABBREVMONTHNAME11 = null;
		this._IMSABBREVMONTHNAME12 = null;

		// Long Day Tokens
		this._IMSDAYNAME1 = null;
		this._IMSDAYNAME2 = null;
		this._IMSDAYNAME3 = null;
		this._IMSDAYNAME4 = null;
		this._IMSDAYNAME5 = null;
		this._IMSDAYNAME6 = null;
		this._IMSDAYNAME7 = null;

		// Short Day Tokens
		this._IMSABBREVDAYNAME1 = null;
		this._IMSABBREVDAYNAME2 = null;
		this._IMSABBREVDAYNAME3 = null;
		this._IMSABBREVDAYNAME4 = null;
		this._IMSABBREVDAYNAME5 = null;
		this._IMSABBREVDAYNAME6 = null;
		this._IMSABBREVDAYNAME7 = null;

		// Time separator
		this._IMTimeSeparator = null;

		// AM/PM tokens
		this._IMAMToken = null;
		this._IMPMToken = null;

		// Era token
		this._IMEraToken = null;
	}
	var _g_d_d = sap.common.globalization.defaultFormat.DateDisplayLocaleInfoImpl;
	// Date Separator
	_g_d_d.prototype.IMDateSeparator = function(value) {
		if(arguments.length >= 1) {
			this._IMDateSeparator = value;
		} else {
			return this._IMDateSeparator;
		}
	};
	// Long Month Tokens
	_g_d_d.prototype.IMSMONTHNAME1 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME1 = value;
		} else {
			return this._IMSMONTHNAME1;
		}
	};
	_g_d_d.prototype.IMSMONTHNAME2 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME2 = value;
		} else {
			return this._IMSMONTHNAME2;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME3 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME3 = value;
		} else {
			return this._IMSMONTHNAME3;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME4 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME4 = value;
		} else {
			return this._IMSMONTHNAME4;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME5 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME5 = value;
		} else {
			return this._IMSMONTHNAME5;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME6 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME6 = value;
		} else {
			return this._IMSMONTHNAME6;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME7 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME7 = value;
		} else {
			return this._IMSMONTHNAME7;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME8 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME8 = value;
		} else {
			return this._IMSMONTHNAME8;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME9 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME9 = value;
		} else {
			return this._IMSMONTHNAME9;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME10 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME10 = value;
		} else {
			return this._IMSMONTHNAME10;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME11 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME11 = value;
		} else {
			return this._IMSMONTHNAME11;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME12 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME12 = value;
		} else {
			return this._IMSMONTHNAME12;
		}
	};
	// Short Month Tokens
	_g_d_d.prototype.IMSABBREVMONTHNAME1 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME1 = value;
		} else {
			return this._IMSABBREVMONTHNAME1;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME2 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME2 = value;
		} else {
			return this._IMSABBREVMONTHNAME2;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME3 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME3 = value;
		} else {
			return this._IMSABBREVMONTHNAME3;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME4 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME4 = value;
		} else {
			return this._IMSABBREVMONTHNAME4;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME5 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME5 = value;
		} else {
			return this._IMSABBREVMONTHNAME5;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME6 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME6 = value;
		} else {
			return this._IMSABBREVMONTHNAME6;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME7 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME7 = value;
		} else {
			return this._IMSABBREVMONTHNAME7;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME8 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME8 = value;
		} else {
			return this._IMSABBREVMONTHNAME8;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME9 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME9 = value;
		} else {
			return this._IMSABBREVMONTHNAME9;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME10 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME10 = value;
		} else {
			return this._IMSABBREVMONTHNAME10;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME11 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME11 = value;
		} else {
			return this._IMSABBREVMONTHNAME11;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME12 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME12 = value;
		} else {
			return this._IMSABBREVMONTHNAME12;
		}
	};
	// Long Day Tokens
	_g_d_d.prototype.IMSDAYNAME1 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME1 = value;
		} else {
			return this._IMSDAYNAME1;
		}
	};

	_g_d_d.prototype.IMSDAYNAME2 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME2 = value;
		} else {
			return this._IMSDAYNAME2;
		}
	};

	_g_d_d.prototype.IMSDAYNAME3 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME3 = value;
		} else {
			return this._IMSDAYNAME3;
		}
	};
	_g_d_d.prototype.IMSDAYNAME4 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME4 = value;
		} else {
			return this._IMSDAYNAME4;
		}
	};
	_g_d_d.prototype.IMSDAYNAME5 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME5 = value;
		} else {
			return this._IMSDAYNAME5;
		}
	};
	_g_d_d.prototype.IMSDAYNAME6 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME6 = value;
		} else {
			return this._IMSDAYNAME6;
		}
	};
	_g_d_d.prototype.IMSDAYNAME7 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME7 = value;
		} else {
			return this._IMSDAYNAME7;
		}
	};
	// Short Day Tokens
	_g_d_d.prototype.IMSABBREVDAYNAME1 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME1 = value;
		} else {
			return this._IMSABBREVDAYNAME1;
		}
	};
	_g_d_d.prototype.IMSABBREVDAYNAME2 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME2 = value;
		} else {
			return this._IMSABBREVDAYNAME2;
		}
	};
	_g_d_d.prototype.IMSABBREVDAYNAME3 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME3 = value;
		} else {
			return this._IMSABBREVDAYNAME3;
		}
	};
	_g_d_d.prototype.IMSABBREVDAYNAME4 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME4 = value;
		} else {
			return this._IMSABBREVDAYNAME4;
		}
	};
	_g_d_d.prototype.IMSABBREVDAYNAME5 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME5 = value;
		} else {
			return this._IMSABBREVDAYNAME5;
		}
	};
	_g_d_d.prototype.IMSABBREVDAYNAME6 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME6 = value;
		} else {
			return this._IMSABBREVDAYNAME6;
		}
	};
	_g_d_d.prototype.IMSABBREVDAYNAME7 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME7 = value;
		} else {
			return this._IMSABBREVDAYNAME7;
		}
	};
	// Time separator
	_g_d_d.prototype.IMTimeSeparator = function(value) {
		if(arguments.length >= 1) {
			this._IMTimeSeparator = value;
		} else {
			return this._IMTimeSeparator;
		}
	};
	// AM/PM tokens
	_g_d_d.prototype.IMAMTOKEN = function(value) {
		if(arguments.length >= 1) {
			this._IMAMToken = value;
		} else {
			return this._IMAMToken;
		}
	};
	_g_d_d.prototype.IMPMTOKEN = function(value) {
		if(arguments.length >= 1) {
			this._IMPMToken = value;
		} else {
			return this._IMPMToken;
		}
	};
	// Era token
	_g_d_d.prototype.IMEraToken = function(value) {
		if(arguments.length >= 1) {
			this._IMEraToken = value;
		} else {
			return this._IMEraToken;
		}
	};
})();
(function() {

	sap.common.globalization.declare("sap.common.globalization.defaultFormat.DateParseLocaleInfoImpl");

	sap.common.globalization.defaultFormat.DateParseLocaleInfoImpl = function() {
		this.__className = "sap.common.globalization.defaultFormat.DateParseLocaleInfoImpl";
		this._IMDateSeparator/*:String*/ = null;
		this._IMTimeSeparator/*:String*/ = null;

	};

	sap.common.globalization.defaultFormat.DateParseLocaleInfoImpl.prototype.IMDateSeparator = function(value)/*:String*/
	{
		if(arguments.length >= 1) {
			//set
			this._IMDateSeparator = value;
		} else {
			//get
			return this._IMDateSeparator;
		}
	}

	sap.common.globalization.defaultFormat.DateParseLocaleInfoImpl.prototype.IMTimeSeparator = function(value)/*:String*/
	{
		if(arguments.length >= 1) {
			//set
			this._IMTimeSeparator = value;
		} else {
			//get
			return this._IMTimeSeparator;
		}
	}
})();
(function() {

	sap.common.globalization.declare("sap.common.globalization.defaultFormat.DefaultBooleanFormatLocaleFactory");
	sap.common.globalization.require("sap.common.globalization.defaultFormat.BooleanDisplayLocaleInfo");
	sap.common.globalization.require("sap.common.globalization.GlobalizationBooleanConstant");
	sap.common.globalization.require("sap.common.globalization.defaultFormat.BooleanDisplayLocaleInfo");
	
		
	// construct
	sap.common.globalization.defaultFormat.DefaultBooleanFormatLocaleFactory =function()
	{
		this.className = "sap.common.globalization.defaultFormat.DefaultBooleanFormatLocaleFactory";
		this._displayLocale/*BooleanDisplayLocaleInfo*/ = null; // TODO default value is null
	}
	
	var _s_g_df_dBooleanFLFactory = sap.common.globalization.defaultFormat.DefaultBooleanFormatLocaleFactory;
	_s_g_df_dBooleanFLFactory._instance/*DefaultBooleanFormatLocaleFactory*/ = null; //TODO default value is null.
	
	_s_g_df_dBooleanFLFactory.getInstance = function()/*DefaultBooleanFormatLocaleFactory*/
	{
		if (!_s_g_df_dBooleanFLFactory._instance)
		{
			_s_g_df_dBooleanFLFactory._instance = new sap.common.globalization.defaultFormat.DefaultBooleanFormatLocaleFactory();
		}
		return _s_g_df_dBooleanFLFactory._instance;
	}
	
	_s_g_df_dBooleanFLFactory.prototype.getBooleanDisplayLocaleInfo = function()/*IBooleanDisplayLocaleInfo*/
	{
		if (!this._displayLocale)
		{
			this._displayLocale = new sap.common.globalization.defaultFormat.BooleanDisplayLocaleInfo();
			var booleanStrings/*Array*/ = sap.common.globalization.GlobalizationBooleanConstant.getBooleanStrings();
			if (booleanStrings)
			{
				this._displayLocale.trueString(booleanStrings[0]); // trueString is function
				this._displayLocale.falseString(booleanStrings[1]); // falseString is funtion
			}
		}
		return this._displayLocale;
	}
	
})();(function() {

	sap.common.globalization.declare("sap.common.globalization.defaultFormat.DefaultNumericFormatLocaleFactory");
	
	sap.common.globalization.require("sap.common.globalization.defaultFormat.NumericParseLocaleInfoImpl");
	sap.common.globalization.require("sap.common.globalization.GlobalizationNumericConstant");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FLocalization");
	sap.common.globalization.require("sap.common.globalization.defaultFormat.NumericDisplayLocaleInfoImpl");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDefaultNumber");
	sap.common.globalization.require("sap.common.globalization.GlobalizationNumericUtil");
	sap.common.globalization.require("sap.common.globalization.GlobalizationNumericConstant");
	sap.common.globalization.require("sap.common.globalization.numericFormat.TwoDigitGroupingStrategy");


	sap.common.globalization.defaultFormat.DefaultNumericFormatLocaleFactory =function()
	{
		//TODO: implement function
		this.__className = "sap.common.globalization.defaultFormat.DefaultNumericFormatLocaleFactory.DefaultNumericFormatLocaleFactory";
		// loclae info of default numeric type for parsing
		
		this._numericParseLocaleInfo/*NumericParseLocaleInfoImpl*/ = null; // TODO default value is null.
		
		// loclae info of default numeric type for displaying
		this._numericDisplayLocaleInfo/*NumericDisplayLocaleInfoImpl*/ = null; // TODO default value is null.
		
	}

	var _s_g_d_dNumericFLFactory =  sap.common.globalization.defaultFormat.DefaultNumericFormatLocaleFactory;

	
	_s_g_d_dNumericFLFactory.prototype.getNumericParseLocaleInfo =function()/*INumericParseLocaleInfo*/
	{
		var _s_g = sap.common.globalization;
		if (!this._numericParseLocaleInfo)
		{
			this._numericParseLocaleInfo = new _s_g.defaultFormat.NumericParseLocaleInfoImpl(_s_g.GlobalizationNumericConstant.getParseThousandSeparator(),
				 _s_g.GlobalizationNumericConstant.getParseDecimalSeparator(), _s_g.GlobalizationNumericConstant.getParseCurrencySymbol());
		}	
		return this._numericParseLocaleInfo;
	}
	
	_s_g_d_dNumericFLFactory.prototype.getNumericDisplayLocaleInfo =function()/*INumericDisplayLocaleInfo*/
	{
		if (!this._numericDisplayLocaleInfo)
		{
			// default to EN
			var thousandsSeparator/*String*/ = ",";
			var decimalSeparator/*String*/ = ".";
			
			var _s_g =  sap.common.globalization;
			
			// first try to apply SAP separators for display
			if (_s_g.numericFormat.FLocalization.getInstance().SAPThousandsSeparator)
			{
				thousandsSeparator = _s_g.numericFormat.FLocalization.getInstance().SAPThousandsSeparator;
			}
			else if (_s_g.GlobalizationNumericConstant.getDisplayThousandSeparator())
			{
				thousandsSeparator = _s_g.GlobalizationNumericConstant.getDisplayThousandSeparator();
			}
			
			if (_s_g.numericFormat.FLocalization.getInstance().SAPDecimalSeparator)
			{
				decimalSeparator = _s_g.numericFormat.FLocalization.getInstance().SAPDecimalSeparator;
			}
			else if (_s_g.GlobalizationNumericConstant.getDisplayDecimalSeparator())
			{
				decimalSeparator = _s_g.GlobalizationNumericConstant.getDisplayDecimalSeparator();
			}
			
			var currencySymbol/*String*/ = (_s_g.numericFormat.FLocalization.getInstance().SAPCurrencySymbol ? _s_g.numericFormat.FLocalization.getInstance().SAPCurrencySymbol : this.displayCurrencySymbol());
			
			this._numericDisplayLocaleInfo = new _s_g.defaultFormat.NumericDisplayLocaleInfoImpl(thousandsSeparator, decimalSeparator, currencySymbol);
			
		}
		return this._numericDisplayLocaleInfo;
	}
	
	_s_g_d_dNumericFLFactory.prototype.createFNumber=function()/*FNumber*/
	{
		var fNumber/*FDefaultNumber*/ = new sap.common.globalization.numericFormat.FDefaultNumber(this.getNumericParseLocaleInfo(), this.getNumericDisplayLocaleInfo());
		if (sap.common.globalization.GlobalizationNumericUtil.isTwoDigitGroupingCountry(sap.common.globalization.GlobalizationNumericConstant.getActualLocaleForDefaultNumberFormat()))
		{
			fNumber.groupingStrategy = sap.common.globalization.numericFormat.TwoDigitGroupingStrategy.instance();
		}
		return fNumber;
	}
	
	/**
	 * Get default predefined number format string according to the current locale.
	 * If the pvl is available, get the predefined format string according to pvl. Otherwise, getting the predefined
	 * string according to the document locale.
	 *  
	 * @param type type for default format string. e.g. FORMAT_TYPE_SHORTDATE
	 * @return the predefined format string or return EN if it is not defined.
	 */
	_s_g_d_dNumericFLFactory.prototype.getDefaultNumericFormat =function()/*String*/
	{
		if (sap.common.globalization.GlobalizationNumericConstant.getDefaultNumberFormat())
		{
			return sap.common.globalization.GlobalizationNumericConstant.getDefaultNumberFormat()
		}
		// fall bcak to EN
		return "#,##0.###";
	}
	
	_s_g_d_dNumericFLFactory.prototype.displayCurrencySymbol=function()/*String*/
	{
		return "";
	}
})();(function()
{
	sap.common.globalization.declare("sap.common.globalization.defaultFormat.DefaultTimeFormatLocaleFactory");
	sap.common.globalization.require("sap.common.globalization.defaultFormat.DefaultDateFormatLocaleFactory");
	sap.common.globalization.require("sap.common.globalization.GlobalizationDateConstant");
	sap.common.globalization.require("sap.common.globalization.defaultFormat.DateParseLocaleInfoImpl");
	sap.common.globalization.require("sap.common.globalization.defaultFormat.DateDisplayLocaleInfoImpl");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FLocalization");
	var gd = sap.common.globalization.defaultFormat;
		gd.DefaultTimeFormatLocaleFactory = function()
		{
			gd.DefaultTimeFormatLocaleFactory.superclass.constructor.apply(this);
			this.__className = "sap.common.globalization.defaultFormat.DefaultTimeFormatLocaleFactory";
		}
		gd.DefaultTimeFormatLocaleFactory = sap.common.globalization.extend(gd.DefaultTimeFormatLocaleFactory, gd.DefaultDateFormatLocaleFactory);
		
		gd.DefaultTimeFormatLocaleFactory.prototype.getDefaultDateFormat = function ()/*String*/
		{
			return sap.common.globalization.GlobalizationDateConstant.getDefaultTimeFormat();
		}
		
		gd.DefaultTimeFormatLocaleFactory.prototype.applySAPDateTokensAndSeparators = function (displayLocaleInfo)
		{
			var floc = sap.common.globalization.numericFormat.FLocalization.getInstance();
			if (displayLocaleInfo && floc && floc.SAPTimeSeparator)
			{
				displayLocaleInfo.IMTimeSeparator(floc.SAPTimeSeparator);
			}
		}
		
		gd.DefaultTimeFormatLocaleFactory.prototype.getPredefinedDateParseLocaleString = function ()
		{
			var localeInfo = new sap.common.globalization.defaultFormat.DateParseLocaleInfoImpl();
			var timeSep/*:String*/ = sap.common.globalization.GlobalizationDateConstant.getTimeSeparator();
			if (timeSep && localeInfo){
				localeInfo.IMTimeSeparator(timeSep);	
			}
			return localeInfo;
		}
		
		gd.DefaultTimeFormatLocaleFactory.prototype.getPredefinedDateDisplayLocaleString = function ()
		{
			var localeInfo = new sap.common.globalization.defaultFormat.DateDisplayLocaleInfoImpl();
			var timeSep/*String*/ = sap.common.globalization.GlobalizationDateConstant.getTimeSeparator();
			if (timeSep && localeInfo){
				localeInfo.IMTimeSeparator(timeSep);	
			}
			
			var amPM/*:Array*/ = sap.common.globalization.GlobalizationDateConstant.getAmPmToken();
			if (amPM && localeInfo)
			{
				localeInfo.IMAMTOKEN(amPM[0]);
				localeInfo.IMPMTOKEN(amPM[1]);
			}
			return localeInfo;
		}
		
})();(function(){

		sap.common.globalization.declare("sap.common.globalization.defaultFormat.NumericDisplayLocaleInfoImpl");
		
		sap.common.globalization.defaultFormat.NumericDisplayLocaleInfoImpl = function(thousandsSep/*String*/, decimalSep/*String*/, currencySym/*String*/)
		{
			if (thousandsSep)
			{
				this._thousandsSeparator = thousandsSep;
			}
			else
			{
				this._thousandsSeparator = ",";
				
			}
			
			if (decimalSep)
			{
				this._decimalSeparator = decimalSep;
			}
			else{
				this._decimalSeparator = ".";
			}
			
			if (currencySym)
			{
				this._currencySymbol = currencySym;
			}
			else
			{
				this._currencySymbol = "";
			}
		}
			
		sap.common.globalization.defaultFormat.NumericDisplayLocaleInfoImpl.prototype.thousandsSeparator = function() /*String*/
		{
			return this._thousandsSeparator;
		}
			
		sap.common.globalization.defaultFormat.NumericDisplayLocaleInfoImpl.prototype.decimalSeparator= function() /*String*/
		{
			return this._decimalSeparator;
		}
		
		sap.common.globalization.defaultFormat.NumericDisplayLocaleInfoImpl.prototype.currencySymbol= function() /*String*/
		{
			return this._currencySymbol;
		}
		
})();(function(){

		sap.common.globalization.declare("sap.common.globalization.defaultFormat.NumericParseLocaleInfoImpl");

		sap.common.globalization.defaultFormat.NumericParseLocaleInfoImpl = function(thousandsSep/*String*/, decimalSep/*String*/, currencySym/*String*/)
		{
			
			if (thousandsSep)
			{
				this._thousandsSeparator = thousandsSep;
			}
			else
			{
				this._thousandsSeparator = ","; //				
			}
			
			if (decimalSep)
			{
				this._decimalSeparator = decimalSep;
			}
			else
			{
				this._decimalSeparator = ".";				
			}
			
			if (currencySym)
			{
				this._currencySymbol = currencySym;
			}
			else
			{
				this._currencySymbol =  "";
			}
		}
			
		sap.common.globalization.defaultFormat.NumericParseLocaleInfoImpl.prototype.thousandsSeparator = function()/*String*/
		{
			return this._thousandsSeparator;
		}
			
		sap.common.globalization.defaultFormat.NumericParseLocaleInfoImpl.prototype.decimalSeparator= function()/*String*/
		{
			return this._decimalSeparator;
		}
		
		sap.common.globalization.defaultFormat.NumericParseLocaleInfoImpl.prototype.currencySymbol= function()/*String*/
		{
			return this._currencySymbol;
		};


})();(function() {
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDateA");

	var gn = sap.common.globalization.numericFormat;
	gn.FDateA = function(displayLocale/*IDateDisplayLocaleInfo*/) {
		this.__className = "sap.common.globalization.numericFormat.FDateA";
		this._full = true;/*Boolean*/
		this._displayLocale = displayLocale;

	}
	gn.FDateA.prototype.parse = function(o/*:FDate*/, format/*:String*/)/*:int*/
	{
		var i/*:int*/ = 0;
		var l/*:String*/ = format.toLowerCase();
		if(l.substr(0, 5) == "am/pm") {
			o.miltime = false;
			i = 5;
		}

		if(l.substr(0, 3) == "a/p") {
			o.miltime = false;
			this._full = false;
			i = 3;
		}
		return i;
	}
	gn.FDateA.prototype.display = function(o/*:FDate*/)/*:String*/
	{
		var str/*:String*/ = "";
		if(o.getHrs() >= 12) {
			if(this._full) {
				str = this._displayLocale.IMPMTOKEN() ? this._displayLocale.IMPMTOKEN() : "PM";
			} else {
				str = this._displayLocale.IMPMTOKEN() ? this._displayLocale.IMPMTOKEN() : "P";
			}
		} else {
			if(this._full) {
				str = this._displayLocale.IMAMTOKEN() ? this._displayLocale.IMAMTOKEN() : "AM";
			} else {
				str = this._displayLocale.IMAMTOKEN() ? this._displayLocale.IMAMTOKEN() : "A";
			}
		}
		return str;
	}
})();(function() {
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDateB");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateM");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateH");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateS");

	// % handling
	var gn = sap.common.globalization.numericFormat;
	gn.FDateB = function(displayLocale/*:IDateDisplayLocaleInfo*/) {

		this.__className = "sap.common.globalization.numericFormat.FDateB";
		this._displayLocaleInfo = displayLocale;
		this.mask = undefined;/***/
		this.c = ""/*undefined*/;/*String*/
		this._tok = {};/*Object*/
		this.initializeTokenMap();

	}
	gn.FDateB.prototype.parse = function(o/*:FDate*/, format/*:String*/)/*:int*/
	{
		var i/*:int*/ = 2;
		// [ and ]
		this.c = format.charAt(1);
		// hokey actionscript stuff
		var r/*:**/ = this.createTokenFormatter(this._tok[this.c]);
		if(this.c == 'M' || this.c == 'm') {
			r.bminute = true;
		}
		var ret/*:int*/ = r.parse(o, format.substring(1));
		if(ret > 0) {
			this.mask = r;
			i += ret;
		}
		return i;
	}
	gn.FDateB.prototype.display = function(o/*:FDate*/)/*:String*/
	{
		var s/*:Number*/;
		if(this.c == 'S' || this.c == 's') {
			s = 86400 * o.serial;
		} else if(this.c == 'M' || this.c == 'm') {
			s = 1440 * o.serial;
		} else if(this.c == 'H' || this.c == 'h') {
			s = 24 * o.serial;
		}
		this.mask.value = Math.floor(s);
		return this.mask.display(o);
	}
	/**
	 * Initialize the token classes for further parse and display.
	 *
	 * @param clazz
	 * @return
	 *
	 */
	gn.FDateB.prototype.createTokenFormatter = function(clazz/*:Class*/)/*:Object*/
	{
		var token/*:Object*/ = null;
		switch(clazz) {
			case gn.FDateM:
				token = new gn.FDateM(this._displayLocaleInfo);
				break;
			case gn.FDateH:
				token = new gn.FDateH();
				break;
			case gn.FDateS:
				token = new gn.FDateS();
				break;
			default:
			// this should not happend since there's check before call this method
		}
		return token;
	}
	/**
	 * Initialize the tokens map for further parsing and displaying.
	 *
	 */
	gn.FDateB.prototype.initializeTokenMap = function() {
		this._tok["M"] = gn.FDateM;
		this._tok["H"] = gn.FDateH;
		this._tok["S"] = gn.FDateS;
		this._tok["m"] = gn.FDateM;
		this._tok["h"] = gn.FDateH;
		this._tok["s"] = gn.FDateS;
	}
})();
(function() {
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDateD");
	
	var gn = sap.common.globalization.numericFormat;
	gn.FDateD = function(displayLocaleInfo/*IDateDisplayLocaleInfo*/) {
		this.__className = "sap.common.globalization.numericFormat.FDateD";
		this._placeholders = 0;
		//int

		this._displayLocaleInfo = displayLocaleInfo;
		// IDateDisplayLocaleInfo
	}
	gn.FDateD.prototype.getPlaceholders = function()/*:int*/
	{
		return this._placeholders;
	}

	gn.FDateD.prototype.parse = function(o/*:FDate*/, format/*:String*/)/*:int*/
	{
		var i/*:int*/ = 0;
		// figure out day/date and _placeholders
		while(format.charAt(i) == 'D' || format.charAt(i) == 'd') {
			i++;
		}
		if(i <= 2) {
			// significant digits of date
			this._placeholders = i;
		} else if(i == 3) {
			// short day format
			this._placeholders = -1;
		} else if(i >= 4) {
			// long day format
			this._placeholders = -2;
		}
		return i;
	}
	gn.FDateD.prototype.display = function(o/*:FDate*/)/*:String*/
	{
		var str/*:String*/ = "";
		if(this._placeholders >= 0) {
			str += o.getDate();
			while(str.length < this._placeholders) {
				str = '0' + str;
			}
		} else {
			var day/*:Number*/ = o.getDay();
			if(this._placeholders == -1) {
				str += this.getShortDay(day);
			} else {
				str += this.getDay(day);
			}
		}
		return str;
	}

	gn.FDateD.prototype.getDay = function(day/*:Number*/)/*:String*/
	{
		if(day == 0) {
			return this._displayLocaleInfo.IMSDAYNAME7();
		}
		if(day == 1) {
			return this._displayLocaleInfo.IMSDAYNAME1();
		}
		if(day == 2) {
			return this._displayLocaleInfo.IMSDAYNAME2();
		}
		if(day == 3) {
			return this._displayLocaleInfo.IMSDAYNAME3();
		}
		if(day == 4) {
			return this._displayLocaleInfo.IMSDAYNAME4();
		}
		if(day == 5) {
			return this._displayLocaleInfo.IMSDAYNAME5();
		}
		if(day == 6 || day == -1) {
			return this._displayLocaleInfo.IMSDAYNAME6();
		}
		// should never happen
		return this._displayLocaleInfo.IMSDAYNAME6();
	}

	gn.FDateD.prototype.getShortDay = function(day/*:Number*/)/*:String*/
	{
		if(day == 0) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME7().split(".")[0];
		}
		if(day == 1) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME1().split(".")[0];
		}
		if(day == 2) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME2().split(".")[0];
		}
		if(day == 3) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME3().split(".")[0];
		}
		if(day == 4) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME4().split(".")[0];
		}
		if(day == 5) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME5().split(".")[0];
		}
		if(day == 6 || day == -1) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME6().split(".")[0];
		}
		// should never happen
		return this._displayLocaleInfo.IMSABBREVDAYNAME6().split(".")[0];
	}
})();
(function() {
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDateH");
	var gn = sap.common.globalization.numericFormat;
	gn.FDateH = function() {
		this.__className = "sap.common.globalization.numericFormat.FDateH";
		this.placeholders/*int*/ = 1;
		this.number/*Number*/ = 0;
		this.value/*Number*/ = NaN;
	}
	sap.common.globalization.numericFormat.FDateH.prototype.parse = function(o/*:FDate*/, format/*:String*/)/*:int*/
	{
		var i/*:int*/ = 0;
		this.number = o.HNum + 1;
		o.HBool = true;
		o.HNum = this.number;
		while(format.charAt(i) == 'H' || format.charAt(i) == 'h') {
			i++;
		}
		if(i > 1) {
			this.placeholders = 2;
		}
		return i;
	}
	gn.FDateH.prototype.display = function(o/*:FDate*/)/*:String*/
	{
		var h/*:Number*/;
		if(isNaN(this.value))
			h = o.getHrs();
		else
			h = this.value;
		if(!o.miltime) {
			if(this.number == o.HNum) {
				if(h > 11) {
					h = h - 12;
				}
				if(h == 0) {
					h = 12;
				}
			}
		}

		var str/*:String*/ = "" + h;
		while(this.placeholders > str.length) {
			str = '0' + str;
		}
		return str;
	}
})();
(function() {
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDateM");
	var gn = sap.common.globalization.numericFormat;
	gn.FDateM = function(displayLocaleInfo/*:IDateDisplayLocaleInfo*/) {
		this.__className = "sap.common.globalization.numericFormat.FDateM";
		this.bminute = false;
		this.placeholders = 0;
		this.value = undefined;
		this._displayLocaleInfo = displayLocaleInfo;
	}
	gn.FDateM.prototype.parse = function(o/*:FDate*/, format/*:String*/)/*:int*/
	{
		var i/*:int*/ = 0;
		// figure out day/date and placeholders
		while(format.charAt(i) == 'M' || format.charAt(i) == 'm') {
			i++;
		}
		if(i <= 2) {
			if(o.HBool) {
				this.bminute = true;
			}
			o.HBool = false;
			this.placeholders = i;
		} else if(i == 3) {
			// short month format
			this.placeholders = -1;
		} else if(i == 4) {
			// long month format
			this.placeholders = -2;
		} else if(i == 5) {
			// one letter month
			this.placeholders = -3;
		}
		return i;
	}
	gn.FDateM.prototype.display = function(o/*:FDate*/)/*:String*/
	{
		var str/*:String*/ = "";
		if(this.placeholders >= 0 && this.bminute) {
			if(this.value == undefined)
				str += o.getMin();
			else
				str += this.value;
			while(str.length < this.placeholders) {
				str = '0' + str;
			}
		} else {
			var m/*:Number*/ = o.getMonth();
			if(this.placeholders >= 0) {
				m++;
				// 0 to 1 based
				str += m;
				while(str.length < this.placeholders) {
					str = '0' + str;
				}
			} else {
				var a/*:Array*/ = new Array(this._displayLocaleInfo.IMSMONTHNAME1(), this._displayLocaleInfo.IMSMONTHNAME2(), this._displayLocaleInfo.IMSMONTHNAME3(), this._displayLocaleInfo.IMSMONTHNAME4(), this._displayLocaleInfo.IMSMONTHNAME5(), this._displayLocaleInfo.IMSMONTHNAME6(), this._displayLocaleInfo.IMSMONTHNAME7(), this._displayLocaleInfo.IMSMONTHNAME8(), this._displayLocaleInfo.IMSMONTHNAME9(), this._displayLocaleInfo.IMSMONTHNAME10(), this._displayLocaleInfo.IMSMONTHNAME11(), this._displayLocaleInfo.IMSMONTHNAME12());

				var b/*:Array*/ = new Array(this._displayLocaleInfo.IMSABBREVMONTHNAME1(), this._displayLocaleInfo.IMSABBREVMONTHNAME2(), this._displayLocaleInfo.IMSABBREVMONTHNAME3(), this._displayLocaleInfo.IMSABBREVMONTHNAME4(), this._displayLocaleInfo.IMSABBREVMONTHNAME5(), this._displayLocaleInfo.IMSABBREVMONTHNAME6(), this._displayLocaleInfo.IMSABBREVMONTHNAME7(), this._displayLocaleInfo.IMSABBREVMONTHNAME8(), this._displayLocaleInfo.IMSABBREVMONTHNAME9(), this._displayLocaleInfo.IMSABBREVMONTHNAME10(), this._displayLocaleInfo.IMSABBREVMONTHNAME11(), this._displayLocaleInfo.IMSABBREVMONTHNAME12());
				if(this.placeholders == -1) {
					str += b[m];
				} else if(this.placeholders == -3) {
					str += a[m].substring(0, 1);
				} else {
					str += a[m];
				}
			}
		}
		return str;
	}
})();(function()
{
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDateS");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FLocalization");

	sap.common.globalization.numericFormat.FDateS = function() {
		this.__className = "sap.common.globalization.numericFormat.FDateS";
		this.splaceholders = 1;
		this.msplaceholders = 0;
		this.value = undefined;
		this.IMDecimalSeparator = sap.common.globalization.numericFormat.FLocalization.getInstance().IMDecimalSeparator;
		this.ms = NaN; // in AS3, in case no value is assgned to a number , the default value is NaN.
	}
	sap.common.globalization.numericFormat.FDateS.prototype.parse = function(o/*:FDate*/, format/*:String*/)/*:int*/
	{
		var i/*:int*/ = 0;
		// m token directly before means minutes
		var a/*:Array*/ = o.mask;
		var l/*:Number*/ = a.length;
		for(var j/*:Number*/ = l - 1; j >= 0; j--) {
			if(a[j].__className == "sap.common.globalization.numericFormat.FDateM") {
				a[j].bminute = true;
				break;
			}
		}
		// figure out how many significant seconds to display
		while(format.charAt(i) == 'S' || format.charAt(i) == 's') {
			i++;
		}
		if(i > 1) {
			this.splaceholders = 2;
		}
		// figure out how many significant milliseconds to display
		if(format.charAt(i) == this.IMDecimalSeparator.charAt(0) && format.charAt(i + 1) == '0') {
			i++;
			while(format.charAt(i) == '0') {
				i++;
				this.msplaceholders++;
			}
			if(this.msplaceholders > o.ms) {
				o.ms = this.msplaceholders;
			}
		}
		return i;
	}
	sap.common.globalization.numericFormat.FDateS.prototype.display = function(o/*:FDate*/)/*:String*/
	{
		var str/*:String*/;
		if(this.value == undefined)
			str = "" + o.getSec();
		else
			str = "" + this.value;
		while(this.splaceholders > str.length) {
			str = '0' + str;
		}
		if(this.msplaceholders > 0) {
			var ms/*:Number*/ = o.getMS() / Math.pow(10, (3 - this.msplaceholders));
			if(this.msplaceholders < this.ms) {
				ms = Math.floor(ms);
			} else {
				ms = Math.round(ms);
			}
			var ts/*:String*/ = "" + ms;
			while(ts.length < this.msplaceholders) {
				ts = '0' + ts;
			}
			str += this.IMDecimalSeparator + ts;
		}
		return str;
	}
})();(function()
{
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDateSep");

	sap.common.globalization.numericFormat.FDateSep = function(parseLocalInfo/*:IDateParseLocaleInfo*/, displayLocaleInfo/*:IDateDisplayLocaleInfo*/) {
		this.__className = "sap.common.globalization.numericFormat.FDateSep";
		this._parseLocalInfo = parseLocalInfo;
		this._displayLocaleInfo = displayLocaleInfo;
	}

	sap.common.globalization.numericFormat.FDateSep.prototype.parse = function(o/*:FDate*/, format/*:String*/)/*:int*/
	{
		var symb/*:String*/ = format.charAt(0);

		//only if the SAPDateSeparator has been set by Flashvars...
		if(this._displayLocaleInfo.IMDateSeparator() != null && (symb == "." || symb == "/" || symb == "-"))
			return 1;
		else
			return 0;
		//do not add this to mask

	}
	sap.common.globalization.numericFormat.FDateSep.prototype.display= function (o/*:FDate*/)/*:String*/ {
		var str/*:String*/ = this._displayLocaleInfo.IMDateSeparator();
		return str;
	}

})();(function()
{
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDateY");
		sap.common.globalization.numericFormat.FDateY= function ()
		{
			this.__className = "sap.common.globalization.numericFormat.FDateY";
			this.placeholders = 2;
		}
		sap.common.globalization.numericFormat.FDateY.prototype.parse= function (o/*:FDate*/, format/*:String*/)/*:int*/
		{
			var i/*:int*/=0;
			// figure out how many significant year digits to display
			while (format.charAt(i) == 'Y' || format.charAt(i) == 'y') {
				i++;
			}
			if (i>2) {
				this.placeholders = 4;
			}
			return i;
		}
		sap.common.globalization.numericFormat.FDateY.prototype.display= function (o/*:FDate*/)/*:String*/
		{
			var str/*:String*/ = "" + o.getYear();
			if (this.placeholders < 4) {
				str = str.substring(2);
			}
			return str;
		}
	
		
})();(function(){

	    sap.common.globalization.declare("sap.common.globalization.numericFormat.FText");

		sap.common.globalization.numericFormat.FText = function()
		{
			this.__className ="sap.common.globalization.numericFormat.FText";
			this.color/*Number*/ = 0;
			this.format/*String*/ = "";
			this.condnum/*int*/ = 0;
			this.cond/*Object*/ = {};
			
			this.numAts = 0;
			this.mask=new Array();
		}
		sap.common.globalization.numericFormat.FText.tokens/*String*/ = "@";

		sap.common.globalization.numericFormat.FText.prototype.parse = function(format/*String*/)/*:int*/ {
			var numChars/*int*/ = 0;
			while (format.charAt(numChars) == '@') {
				numChars++;
			}
			
			this.numAts = numChars;
			return numChars;
		}
		
		sap.common.globalization.numericFormat.FText.prototype.display = function(num/*Object*/)/*String*/ {
			var formatted/*String*/ = "";
			for (var i/*int*/=0; i<this.numAts; i++) {
				formatted += num.toString();
			}
			return formatted;
		};

})();(function() {
	sap.common.globalization.declare("sap.common.globalization.defaultFormat.DateDisplayLocaleInfoImpl");
	sap.common.globalization.defaultFormat.DateDisplayLocaleInfoImpl = function() {
		this.__className = "sap.common.globalization.defaultFormat.DateDisplayLocaleInfoImpl";
		// Date Separator
		this._IMDateSeparator = null;

		// Long Month Tokens
		this._IMSMONTHNAME1 = null;
		this._IMSMONTHNAME2 = null;
		this._IMSMONTHNAME3 = null;
		this._IMSMONTHNAME4 = null;
		this._IMSMONTHNAME5 = null;
		this._IMSMONTHNAME6 = null;
		this._IMSMONTHNAME7 = null;
		this._IMSMONTHNAME8 = null;
		this._IMSMONTHNAME9 = null;
		this._IMSMONTHNAME10 = null;
		this._IMSMONTHNAME11 = null;
		this._IMSMONTHNAME12 = null;

		// Short Month Tokens
		this._IMSABBREVMONTHNAME1 = null;
		this._IMSABBREVMONTHNAME2 = null;
		this._IMSABBREVMONTHNAME3 = null;
		this._IMSABBREVMONTHNAME4 = null;
		this._IMSABBREVMONTHNAME5 = null;
		this._IMSABBREVMONTHNAME6 = null;
		this._IMSABBREVMONTHNAME7 = null;
		this._IMSABBREVMONTHNAME8 = null;
		this._IMSABBREVMONTHNAME9 = null;
		this._IMSABBREVMONTHNAME10 = null;
		this._IMSABBREVMONTHNAME11 = null;
		this._IMSABBREVMONTHNAME12 = null;

		// Long Day Tokens
		this._IMSDAYNAME1 = null;
		this._IMSDAYNAME2 = null;
		this._IMSDAYNAME3 = null;
		this._IMSDAYNAME4 = null;
		this._IMSDAYNAME5 = null;
		this._IMSDAYNAME6 = null;
		this._IMSDAYNAME7 = null;

		// Short Day Tokens
		this._IMSABBREVDAYNAME1 = null;
		this._IMSABBREVDAYNAME2 = null;
		this._IMSABBREVDAYNAME3 = null;
		this._IMSABBREVDAYNAME4 = null;
		this._IMSABBREVDAYNAME5 = null;
		this._IMSABBREVDAYNAME6 = null;
		this._IMSABBREVDAYNAME7 = null;

		// Time separator
		this._IMTimeSeparator = null;

		// AM/PM tokens
		this._IMAMToken = null;
		this._IMPMToken = null;

		// Era token
		this._IMEraToken = null;
	}
	var _g_d_d = sap.common.globalization.defaultFormat.DateDisplayLocaleInfoImpl;
	// Date Separator
	_g_d_d.prototype.IMDateSeparator = function(value) {
		if(arguments.length >= 1) {
			this._IMDateSeparator = value;
		} else {
			return this._IMDateSeparator;
		}
	};
	// Long Month Tokens
	_g_d_d.prototype.IMSMONTHNAME1 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME1 = value;
		} else {
			return this._IMSMONTHNAME1;
		}
	};
	_g_d_d.prototype.IMSMONTHNAME2 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME2 = value;
		} else {
			return this._IMSMONTHNAME2;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME3 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME3 = value;
		} else {
			return this._IMSMONTHNAME3;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME4 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME4 = value;
		} else {
			return this._IMSMONTHNAME4;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME5 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME5 = value;
		} else {
			return this._IMSMONTHNAME5;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME6 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME6 = value;
		} else {
			return this._IMSMONTHNAME6;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME7 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME7 = value;
		} else {
			return this._IMSMONTHNAME7;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME8 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME8 = value;
		} else {
			return this._IMSMONTHNAME8;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME9 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME9 = value;
		} else {
			return this._IMSMONTHNAME9;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME10 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME10 = value;
		} else {
			return this._IMSMONTHNAME10;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME11 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME11 = value;
		} else {
			return this._IMSMONTHNAME11;
		}
	};

	_g_d_d.prototype.IMSMONTHNAME12 = function(value) {
		if(arguments.length >= 1) {
			this._IMSMONTHNAME12 = value;
		} else {
			return this._IMSMONTHNAME12;
		}
	};
	// Short Month Tokens
	_g_d_d.prototype.IMSABBREVMONTHNAME1 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME1 = value;
		} else {
			return this._IMSABBREVMONTHNAME1;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME2 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME2 = value;
		} else {
			return this._IMSABBREVMONTHNAME2;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME3 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME3 = value;
		} else {
			return this._IMSABBREVMONTHNAME3;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME4 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME4 = value;
		} else {
			return this._IMSABBREVMONTHNAME4;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME5 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME5 = value;
		} else {
			return this._IMSABBREVMONTHNAME5;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME6 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME6 = value;
		} else {
			return this._IMSABBREVMONTHNAME6;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME7 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME7 = value;
		} else {
			return this._IMSABBREVMONTHNAME7;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME8 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME8 = value;
		} else {
			return this._IMSABBREVMONTHNAME8;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME9 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME9 = value;
		} else {
			return this._IMSABBREVMONTHNAME9;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME10 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME10 = value;
		} else {
			return this._IMSABBREVMONTHNAME10;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME11 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME11 = value;
		} else {
			return this._IMSABBREVMONTHNAME11;
		}
	};

	_g_d_d.prototype.IMSABBREVMONTHNAME12 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVMONTHNAME12 = value;
		} else {
			return this._IMSABBREVMONTHNAME12;
		}
	};
	// Long Day Tokens
	_g_d_d.prototype.IMSDAYNAME1 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME1 = value;
		} else {
			return this._IMSDAYNAME1;
		}
	};

	_g_d_d.prototype.IMSDAYNAME2 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME2 = value;
		} else {
			return this._IMSDAYNAME2;
		}
	};

	_g_d_d.prototype.IMSDAYNAME3 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME3 = value;
		} else {
			return this._IMSDAYNAME3;
		}
	};
	_g_d_d.prototype.IMSDAYNAME4 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME4 = value;
		} else {
			return this._IMSDAYNAME4;
		}
	};
	_g_d_d.prototype.IMSDAYNAME5 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME5 = value;
		} else {
			return this._IMSDAYNAME5;
		}
	};
	_g_d_d.prototype.IMSDAYNAME6 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME6 = value;
		} else {
			return this._IMSDAYNAME6;
		}
	};
	_g_d_d.prototype.IMSDAYNAME7 = function(value) {
		if(arguments.length >= 1) {
			this._IMSDAYNAME7 = value;
		} else {
			return this._IMSDAYNAME7;
		}
	};
	// Short Day Tokens
	_g_d_d.prototype.IMSABBREVDAYNAME1 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME1 = value;
		} else {
			return this._IMSABBREVDAYNAME1;
		}
	};
	_g_d_d.prototype.IMSABBREVDAYNAME2 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME2 = value;
		} else {
			return this._IMSABBREVDAYNAME2;
		}
	};
	_g_d_d.prototype.IMSABBREVDAYNAME3 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME3 = value;
		} else {
			return this._IMSABBREVDAYNAME3;
		}
	};
	_g_d_d.prototype.IMSABBREVDAYNAME4 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME4 = value;
		} else {
			return this._IMSABBREVDAYNAME4;
		}
	};
	_g_d_d.prototype.IMSABBREVDAYNAME5 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME5 = value;
		} else {
			return this._IMSABBREVDAYNAME5;
		}
	};
	_g_d_d.prototype.IMSABBREVDAYNAME6 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME6 = value;
		} else {
			return this._IMSABBREVDAYNAME6;
		}
	};
	_g_d_d.prototype.IMSABBREVDAYNAME7 = function(value) {
		if(arguments.length >= 1) {
			this._IMSABBREVDAYNAME7 = value;
		} else {
			return this._IMSABBREVDAYNAME7;
		}
	};
	// Time separator
	_g_d_d.prototype.IMTimeSeparator = function(value) {
		if(arguments.length >= 1) {
			this._IMTimeSeparator = value;
		} else {
			return this._IMTimeSeparator;
		}
	};
	// AM/PM tokens
	_g_d_d.prototype.IMAMTOKEN = function(value) {
		if(arguments.length >= 1) {
			this._IMAMToken = value;
		} else {
			return this._IMAMToken;
		}
	};
	_g_d_d.prototype.IMPMTOKEN = function(value) {
		if(arguments.length >= 1) {
			this._IMPMToken = value;
		} else {
			return this._IMPMToken;
		}
	};
	// Era token
	_g_d_d.prototype.IMEraToken = function(value) {
		if(arguments.length >= 1) {
			this._IMEraToken = value;
		} else {
			return this._IMEraToken;
		}
	};
})();
(function() {
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDate");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateM");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateD");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateY");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateH");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateS");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FTimeSep");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateA");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateB");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateSep");

	// % handling
	var gn = sap.common.globalization.numericFormat;
	gn.FDate = function(parseLocaleInfo/*IDateParseLocaleInfo*/, displayLocaleInfo/*IDateDisplayLocaleInfo*/) {

		this.__className = "sap.common.globalization.numericFormat.FDate";
		this.date;/*Date*/
		this.color;/*Number*/
		this.condnum;/*int*/
		this.cond;/*Object*/

		this.tok = {};/*Object*/

		this.HBool = false;/*Boolean*/
		this.serial = 37500;/*Number*/
		this.format = "";/*String*/
		this.HNum = 0;/*Number*/
		this.miltime = true;/*Boolean*/
		this.ms = 0;/*int*/
		this.mask = new Array();/*Array*/
		this._parseLocaleInfo = parseLocaleInfo;
		this._displayLocaleInfo = displayLocaleInfo;

		this.initializeTokenMap();
	};
	gn.FDate.tokens = "MDYHSAmdyhsa";/*String*/
	gn.FDate.prototype.parse = function(format/*String*/) {
		var c = format.charAt(0);

		// unfortunate special case for "." handling
		if(c == ".")
			c = format.substring(0, 2);
		
		// hokey actionscript stuff
		var zzz = this.tok[c];
		if(zzz == undefined)
			return 0;

		var r = this.createTokenFormatter(zzz);

		var ret = r.parse(this, format);
		if(ret > 0) {
			this.mask.push(r);
		} else {
			ret = 0;
		}

		return ret;
	}

	gn.FDate.prototype.display = function(num/*Number*/)/*String*/
	{
		if(num < 0) {
			return "###########################################";
		}
		this.setNumber(num);
		var a = this.mask;
		//Array

		var l = a.length;
		//int
		var s = "";
		//String
		for(var i = 0; i < l; i++) {
			if(( typeof a[i]) == "object") {
				s += a[i].display(this);
			} else {
				s += a[i];
			}
		}

		return s;
	}

	gn.FDate.prototype.getMaskClone = function()/*Array*/
	{
		if(this.mask) {
			return this.mask.slice();
		}
		return [];
	}

	gn.FDate.prototype.getYear = function()/*Number*/
	{
		if(this.serial >= 0 && this.serial < 1)
			return 1900;
		return this.date.getUTCFullYear();
		// getFullYear();
	}

	gn.FDate.prototype.getMonth = function()/*Number*/
	{
		if(this.serial >= 0 && this.serial < 1)
			return 0;
		return this.date.getUTCMonth();
		// getMonth();
	}

	gn.FDate.prototype.getDate = function()/*Number*/
	{
		if(this.serial >= 0 && this.serial < 1)
			return 0;
		// leap year
		if(this.serial == 60) {
			return 29;
		}
		return this.date.getUTCDate();
		// getDate();
	}

	gn.FDate.prototype.getDay = function()/*Number*/
	{
		var d = this.date.getUTCDay();
		// getDay();
		if(this.serial < 60) {
			d--;
		}
		return d;
	}

	gn.FDate.prototype.getHrs = function()/*Number*/
	{
		return this.date.getUTCHours();
		// getHours();
	}

	gn.FDate.prototype.getMin = function()/*Number*/
	{
		return this.date.getUTCMinutes();
		// getMinutes();
	}

	gn.FDate.prototype.getSec = function()/*Number*/
	{
		return this.date.getUTCSeconds();
		// getSeconds();
	}
	gn.FDate.prototype.getMS = function()/*Number*/
	{
		return this.date.getUTCMilliseconds();
		// getMilliseconds();
	}
	// wrong date for leap year in 1900
	gn.FDate.prototype.setNumber = function(num) {
		// round off to the 5th decimal as excel does this
		// var s = Math.pow(10, 6);
		// num = num*s;
		// num = Math.round(num);
		// num = num/s;

		this.serial = num;
		// fix the date here as leap year is missing
		if(num < 60) {
			num++;
		}

		// change to seconds
		var secs = num * 86400 * 1000;
		// 1900 to 1970
		var nsecs = secs - (2209161600 * 1000);
		this.date = new Date(nsecs);

		if(this.date.getUTCMilliseconds() >= 500)
			this.date.setUTCMilliseconds(this.date.getUTCMilliseconds() + 500);
	}
	/**
	 * Initialize the token classes for further parse and display. The
	 * classes used here need be related to the classed in
	 * initializeTokenMap() method.
	 *
	 * @param clazz
	 * @return
	 *
	 */
	gn.FDate.prototype.createTokenFormatter = function(clazz/*Class*/) {
		var token = null;
		switch(clazz) {
			case gn.FDateM:
				token = new gn.FDateM(this._displayLocaleInfo);
				break;
			case gn.FDateD:
				token = new gn.FDateD(this._displayLocaleInfo);
				break;
			case gn.FDateY:
				token = new gn.FDateY();
				break;
			case gn.FDateH:
				token = new gn.FDateH();
				break;
			case gn.FDateS:
				// TODO: need investigation about the Decimal separator in
				// FDateS
				token = new gn.FDateS();
				break;
			case gn.FDateSep:
				token = new gn.FDateSep(this._parseLocaleInfo, this._displayLocaleInfo);
				break;
			case gn.FTimeSep:
				token = new gn.FTimeSep(this._parseLocaleInfo, this._displayLocaleInfo)
				break;
			case gn.FDateA:
				token = new gn.FDateA(this._displayLocaleInfo);
				break;
			case gn.FDateB:
				token = new gn.FDateB(this._displayLocaleInfo);
				break;
			default:
			// this should not happend since there's check before call
			// this method
		}
		return token;
	}
	/**
	 * Initialize the tokens map for further parsing and displaying. The
	 * method can be overrided by the sub-classes to provide more tokens.
	 *
	 */
	gn.FDate.prototype.initializeTokenMap=function() {

		this.tok["M"] = gn.FDateM;
		this.tok["D"] = gn.FDateD;
		this.tok["Y"] = gn.FDateY;
		this.tok["H"] = gn.FDateH;
		this.tok["S"] = gn.FDateS;
		this.tok["A"] = gn.FDateA;
		this.tok["m"] = gn.FDateM;
		this.tok["d"] = gn.FDateD;
		this.tok["y"] = gn.FDateY;
		this.tok["h"] = gn.FDateH;
		this.tok["s"] = gn.FDateS;
		this.tok["a"] = gn.FDateA;
		this.tok["["] = gn.FDateB;
		this.tok["/"] = gn.FDateSep;
		this.tok[".M"] = gn.FDateSep;//Month
		this.tok[".D"] = gn.FDateSep;//Day
		this.tok[".Y"] = gn.FDateSep;//Year
		this.tok["-"] = gn.FDateSep;
		this.tok[".m"] = gn.FTimeSep;//minute
		this.tok[".h"] = gn.FTimeSep;//hour
		this.tok[".s"] = gn.FTimeSep;//second
		this.tok[":"] = gn.FTimeSep;

	}


	gn.FDate.prototype.toString = function()/*String*/
	{
		var output = "[FDate]" + "\n";
		for(var prop in this) {
			output = output + prop + " = " + this[prop] + "\n";
		}
		return output;
	}
}
)();
(function()
{
		sap.common.globalization.declare("sap.common.globalization.numericFormat.FDateForPVL");
		sap.common.globalization.require("sap.common.globalization.numericFormat.FDefaultDateD");
		sap.common.globalization.require("sap.common.globalization.numericFormat.FDate");
	
		sap.common.globalization.numericFormat.FDateForPVL= function (pLoc, dLoc)
		{
			sap.common.globalization.numericFormat.FDateForPVL.superclass.constructor.apply(this, [pLoc, dLoc]);
			this.__className = "sap.common.globalization.numericFormat.FDateForPVL";
		}
		sap.common.globalization.numericFormat.FDateForPVL = sap.common.globalization.extend(sap.common.globalization.numericFormat.FDateForPVL, sap.common.globalization.numericFormat.FDate);
		var _g_n_f = sap.common.globalization.numericFormat.FDateForPVL;
		
		_g_n_f.prototype.createTokenFormatter= function (clazz/*:Class*/)/*:Object*/
		{
			var token/*:Object*/ = null;
			if (clazz == sap.common.globalization.numericFormat.FDefaultDateD)
			{
				// use FDefaultDateD for none-default format with PVL case.
				// here we will not cut the period at the end of short day strings.
				token = new sap.common.globalization.numericFormat.FDefaultDateD(this._displayLocaleInfo);
			}
			else
			{
				token = _g_n_f.superclass.createTokenFormatter.call(this, clazz);
			}
			return token;
		}
		
		_g_n_f.prototype.initializeTokenMap= function ()/*:void*/
		{
			_g_n_f.superclass.initializeTokenMap.apply(this);
			
			//override token "d/D" because we do not want to cut the period at the end of the short day from PVL
			//In legacy code, the period at the end of the short day is cut to keep consistent to excel behavior. 
			this.tok["d"] = sap.common.globalization.numericFormat.FDefaultDateD;
			this.tok["D"] = sap.common.globalization.numericFormat.FDefaultDateD;
		}
	
})();
(function()
{
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDefaultDateSep");

		sap.common.globalization.numericFormat.FDefaultDateSep =function (parseLocaleInfo/*:IDateParseLocaleInfo*/, displayLocaleInfo/*:IDateDisplayLocaleInfo*/)
		{
			sap.common.globalization.numericFormat.FDefaultDateSep.superclass.constructor.call(this, parseLocaleInfo, displayLocaleInfo);
			this.__className = "sap.common.globalization.numericFormat.FDefaultDateSep";
		}
		sap.common.globalization.numericFormat.FDefaultDateSep = sap.common.globalization.extend(sap.common.globalization.numericFormat.FDefaultDateSep, sap.common.globalization.numericFormat.FDateSep);
		sap.common.globalization.numericFormat.FDefaultDateSep.prototype.parse= function (o/*:FDate*/, format/*:String*/)/*:int*/
		{
			var defaultSep/*:String*/ = this._parseLocalInfo.IMDateSeparator();
			
			if (defaultSep){
				var sepLength/*:int*/ = defaultSep.length;
				// get symbol from the format string
				var symb/*:String*/ = format.substr(0,sepLength); 
				// compare format sep string and the pre-defined sep string
				if(symb==defaultSep)
					return sepLength;
				else
					return 0; //do not add this to mask
			}
			return 0;
		}
})();
(function()
{
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDefaultDateH");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateH");
	// work around for 'h' in lower case in CLDR which desginates the 1-12 hour style of time.

	sap.common.globalization.numericFormat.FDefaultDateH = function() {
		sap.common.globalization.numericFormat.FDefaultDateH.superclass.constructor.apply(this);
		this.__className = "sap.common.globalization.numericFormat.FDefaultDateH";
		this._is12HourStyle = false; // private member
	}

	sap.common.globalization.numericFormat.FDefaultDateH = sap.common.globalization.extend(sap.common.globalization.numericFormat.FDefaultDateH, sap.common.globalization.numericFormat.FDateH);

	sap.common.globalization.numericFormat.FDefaultDateH.prototype.parse = function(o/*:FDate*/, format/*:String*/)/*:int*/
	{
		var i/*:int*/ = 0;
		this.number = o.HNum + 1;
		o.HBool = true;
		o.HNum = this.number;
		// initialize whether the hour is using 1-12 style
		this._is12HourStyle = true;
		while(format.charAt(i) == 'H' || format.charAt(i) == 'h') {
			if(format.charAt(i) == 'H') {
				// if there is one H in upper case, then set 1-12 hour style to false
				this._is12HourStyle = false;
			}
			i++;
		}
		if(i > 1) {
			this.placeholders = 2;
		}
		return i;
	}
	sap.common.globalization.numericFormat.FDefaultDateH.prototype.display = function(o/*:FDate*/)/*:String*/
	{
		var h/*:Number*/;
		if(isNaN(this.value))
			h = o.getHrs();
		else
			h = this.value;

		// in the FDateH, it depends on FDateA to determine whether it is 1-12 hour style.
		// So for some formats as "h:mm:ss", it will format the data to 0-23 hour style time because there is no
		// am/pm token and the o.miltime returns true (See FDateH). Here is the work around to properly format the above formats with a flag "_is12HourStyle".
		// However, to be simple and have little impact on the existing code, this work around will not affect the am/pm token. I.E. if there
		// is a format string as "H:mm:ss am/pm", then the "am/pm" token will still be displayed even though the hour is shown with 0-23 hour style.
		if(this._is12HourStyle) {
			if(this.number == o.HNum) {
				if(h > 11) {
					h = h - 12;
				}
				if(h == 0) {
					h = 12;
				}
			}
		}

		var str/*:String*/ = "" + h;
		while(this.placeholders > str.length) {
			str = '0' + str;
		}
		return str;
	}
})();
(function()
{
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDefaultDateG");
	sap.common.globalization.require("sap.common.globalization.utils.StringUtil");

	sap.common.globalization.numericFormat.FDefaultDateG = function(dispLoc) {
		this.__className = "sap.common.globalization.numericFormat.FDefaultDateG";
		this._displayLocInfo = dispLoc;
		this._count = 0;
	}

	sap.common.globalization.numericFormat.FDefaultDateG.prototype.parse = function(o/*:FDate*/, format/*:String*/)/*:int*/
	{
		if(format && !sap.common.globalization.utils.StringUtil.isBlankString(format)) {
			// parse the 'G' character only when the Era token exists
			if(this._displayLocInfo && this._displayLocInfo.IMEraToken()) {
				this._count = 0;
				var gToken/*:String*/ = format.charAt(this._count);
				while(gToken == 'G') {
					this._count++;
					gToken = format.charAt(this._count);
				}
				return this._count;
			}
		}
		return 0;
	}

	sap.common.globalization.numericFormat.FDefaultDateG.prototype.display = function(o/*:FDate*/)/*:String*/
	{
		var era/*:String*/ = "";
		// TODO:display Era type according to _count
		// Follow CLDR implementation, 1,2,3 for abbrev, 4 for full, 5 for narrow
		if(this._displayLocInfo && this._displayLocInfo.IMEraToken()) {
			switch(this._count) {
				case 4:
				// TODO:FULL;
				case 5:
				// TODO:narrow
				case 1:
				case 2:
				case 3:
				default:
					era = this._displayLocInfo.IMEraToken();
			}
		}
		return era;
	}
})();
(function()
{
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDefaultDateD");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateD");
	var gn = sap.common.globalization.numericFormat;
	sap.common.globalization.numericFormat.FDefaultDateD = function(displayLocaleInfo/*:IDateDisplayLocaleInfo*/) {
		sap.common.globalization.numericFormat.FDefaultDateD.superclass.constructor.call(this, displayLocaleInfo);
		this.__className = "sap.common.globalization.numericFormat.FDefaultDateD";
	}
	sap.common.globalization.numericFormat.FDefaultDateD = sap.common.globalization.extend(sap.common.globalization.numericFormat.FDefaultDateD, sap.common.globalization.numericFormat.FDateD);

	gn.FDefaultDateD.prototype.getShortDay = function(day/*:Number*/)/*:String*/
	{
		if(day == 0) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME7();
		}
		if(day == 1) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME1();
		}
		if(day == 2) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME2();
		}
		if(day == 3) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME3();
		}
		if(day == 4) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME4();
		}
		if(day == 5) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME5();
		}
		if(day == 6 || day == -1) {
			return this._displayLocaleInfo.IMSABBREVDAYNAME6();
		}
		// should never happen
		return this._displayLocaleInfo.IMSABBREVDAYNAME6();
	}
})();
(function() {
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDefaultDate");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDefaultDateD");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDefaultDateG");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDefaultDateH");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FTimeSep");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDefaultDateSep");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateM");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateD");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateY");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateH");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateS");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateA");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateB");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDateSep");

	sap.common.globalization.require("sap.common.globalization.numericFormat.FDefaultDateSep");

	sap.common.globalization.numericFormat.FDefaultDate = function(parseLocaleInfo/*:IDateParseLocaleInfo*/, displayLocaleInfo/*:IDateDisplayLocaleInfo*/) {
		sap.common.globalization.numericFormat.FDefaultDate.superclass.constructor.apply(this, [parseLocaleInfo, displayLocaleInfo]);
		this.__className = "sap.common.globalization.numericFormat.FDefaultDate";
	}
	sap.common.globalization.numericFormat.FDefaultDate = sap.common.globalization.extend(sap.common.globalization.numericFormat.FDefaultDate, sap.common.globalization.numericFormat.FDate);
	/**
	 * @private
	 * Override the parent class.
	 * Using FDefaultDateSep instead of FDateSep for date separator. Other tokens remain the same.
	 * The classes used here need be related to the classed in initializeTokenMap() method.
	 *
	 * @param clazz
	 * @return
	 *
	 */
	sap.common.globalization.numericFormat.FDefaultDate.prototype.createTokenFormatter = function(clazz/*:Class*/)/*:Object*/
	{
		var gn = sap.common.globalization.numericFormat;
		var token/*:Object*/ = null;
		switch(clazz) {
			case gn.FDateM:
				token = new gn.FDateM(this._displayLocaleInfo);
				break;
			case gn.FDefaultDateD:
				token = new gn.FDefaultDateD(this._displayLocaleInfo);
				break;
			case gn.FDateY:
				token = new gn.FDateY();
				break;
			case gn.FDefaultDateH:
				token = new gn.FDefaultDateH();
				break;
			case gn.FDateS:
				// TODO: need investigation about the Decimal separator in FDateS
				token = new gn.FDateS();
				break;
			case gn.FDefaultDateSep:
				token = new gn.FDefaultDateSep(this._parseLocaleInfo, this._displayLocaleInfo);
				break;
			case gn.FTimeSep:
				token = new gn.FTimeSep(this._parseLocaleInfo, this._displayLocaleInfo)
				break;
			case gn.FDateA:
				token = new gn.FDateA(this._displayLocaleInfo);
				break;
			case gn.FDateB:
				token = new gn.FDateB(this._displayLocaleInfo);
				break;
			case gn.FDefaultDateG:
				token = new gn.FDefaultDateG(this._displayLocaleInfo);
				break;
			default:
			// this should not happend since there's check before call this method
		}
		return token;
	}
	/**
	 * Initialize the token map for Default Date format, using FDefaultDateSep instead of
	 * FDateSep for date separator. Also fix a bug in FDateSep
	 *
	 *
	 */
	sap.common.globalization.numericFormat.FDefaultDate.prototype.initializeTokenMap = function()/*:void*/
	{
		var gn = sap.common.globalization.numericFormat;
		// copy from super.
		this.tok["M"] = gn.FDateM;
		this.tok["Y"] = gn.FDateY;
		this.tok["S"] = gn.FDateS;
		this.tok["A"] = gn.FDateA;
		this.tok["m"] = gn.FDateM;
		this.tok["y"] = gn.FDateY;
		this.tok["s"] = gn.FDateS;
		this.tok["a"] = gn.FDateA;
		this.tok["["] = gn.FDateB;
		// Default Date D
		this.tok["D"] = gn.FDefaultDateD;
		this.tok["d"] = gn.FDefaultDateD;
		// Default Date H
		this.tok["H"] = gn.FDefaultDateH;
		this.tok["h"] = gn.FDefaultDateH;

		// then initialize date separators
		if(this._parseLocaleInfo && this._parseLocaleInfo.IMDateSeparator) {
			if(this._parseLocaleInfo.IMDateSeparator() == ".") {
				// special handling for date separator ".
				// Also fix a bug in FDateSep, because ".d" (lower case) and ".y" shoulde also be considered
				// as the date separator.
				this.tok[".M"] = gn.FDefaultDateSep;
				//Month
				this.tok[".D"] = gn.FDefaultDateSep;
				//Day
				this.tok[".d"] = gn.FDefaultDateSep;
				//Day
				this.tok[".Y"] = gn.FDefaultDateSep;
				//Year
				this.tok[".y"] = gn.FDefaultDateSep;
				//Year
			} else {
				this.tok[this._parseLocaleInfo.IMDateSeparator()] = gn.FDefaultDateSep;
			}
		}

		if(this._parseLocaleInfo && this._parseLocaleInfo.IMTimeSeparator()) {
			if(this._parseLocaleInfo.IMDateSeparator == ".") {
				// special handling for time separator ".
				// Also add ".H", ".S" token which is not handled in the super class.
				this.tok[".m"] = gn.FTimeSep;
				//minute
				this.tok[".h"] = gn.FTimeSep;
				//hour
				this.tok[".H"] = gn.FTimeSep;
				//hour
				this.tok[".s"] = gn.FTimeSep;
				//second
				this.tok[".S"] = gn.FTimeSep;
				//second
			} else {
				this.tok[this._parseLocaleInfo.IMTimeSeparator()] = gn.FTimeSep;
			}
		}

		// for token G
		this.tok["G"] = gn.FDefaultDateG;
	}
})();
(function() {
	sap.common.globalization.declare("sap.common.globalization.numericFormat.DefaultGroupingStrategy");

	sap.common.globalization.numericFormat.DefaultGroupingStrategy =function()
	{
		this.__className = "sap.common.globalization.numericFormat.DefaultGroupingStrategy";		
	}
	var _s_g_nf_defaultGStrategy = sap.common.globalization.numericFormat.DefaultGroupingStrategy;
	
	_s_g_nf_defaultGStrategy._instance/*DefaultGroupingStrategy*/ = new sap.common.globalization.numericFormat.DefaultGroupingStrategy();

	// normally are 2		
	_s_g_nf_defaultGStrategy.prototype.nextGroupDigits= function()/*int*/
	{
		return 2;
	};
	
	_s_g_nf_defaultGStrategy.instance = function()/*IGroupingStrategy*/
	{
		return _s_g_nf_defaultGStrategy._instance;
	};

})();

(function(){

		sap.common.globalization.declare("sap.common.globalization.numericFormat.Helper");
		sap.common.globalization.require("sap.common.globalization.numericFormat.FLocalization");
		

		sap.common.globalization.numericFormat.Helper.isThousandsSeparator = function(format/*String*/, index/*int*/,
			thousandsSeparator/*String = null*/)/*Boolean*/ {

		var thousandsSeparator = thousandsSeparator || null;
		var IMThousandsSeparator/*String*/ = (thousandsSeparator ? thousandsSeparator : sap.common.globalization.numericFormat.FLocalization.getInstance().IMThousandsSeparator());
			
			if (IMThousandsSeparator.charAt(0) == ' ') {
				for (var i/*int*/=index; i<format.length; ++i) {
					if (format.charAt(i) != ' ')
						break;
				}
				// comments in AS3.
				/*ADAPT01376528 after checking the following locales, we need add more currency symbols 
				----------------------
				Chinese - Hong Kong SAR
				Croatian (Bosnia/Herzegovina)
				Czech
				English - Philippines
				French - Switzerland
				German - Liechtenstein
				German - Switzerland
				Icelandic
				Italian - Switzerland
				Latvian
				Lithuanian
				Maltese
				Serbian (Latin)
				Slovak
				Slovenian
				Spanish - Honduras
				Spanish - Panama
				Spanish - Peru
				Spanish - Venezuela
				Swahili
				Swedish
				Ukrainian
				Urdu
				----------------------
				*/
				if (format.charAt(i) == '€' || format.charAt(i) == 'г' 
				 || format.charAt(i) == 'k' || format.charAt(i) == 'S'
				 || format.charAt(i) == 'L' || format.charAt(i) == 'm'
				 || format.charAt(i) == 'K')
					return false;
			}
			return (format.charAt(index) == IMThousandsSeparator.charAt(0));		
		}
})();(function() {
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FCurr"); {
		//import xcelsius.globalization.localeInfo.INumericDisplayLocaleInfo;
		//import xcelsius.globalization.localeInfo.INumericParseLocaleInfo;

		// # handling
		sap.common.globalization.numericFormat.FCurr = function(parseLocaleInfo, displayLocaleInfo) {
			this.__className = "sap.common.globalization.numericFormat.FCurr";
			this.display/*String*/ = "";
			this._parseLocaleInfo = parseLocaleInfo;
			this._displayLocaleInfo = displayLocaleInfo;

		};
	};
	sap.common.globalization.numericFormat.FCurr.prototype.parse = function(o /*FNumber*/, format /*String*/) {
		var symb /*string*/= this._parseLocaleInfo.currencySymbol();
		var currSymb /*string*/ = this._displayLocaleInfo.currencySymbol();
		//only if the SAPCurrencySeparator has been set by Flashvars...

		if(currSymb != null && symb != null && symb != currSymb) {
			o.currencyIndex = o.mask.length;
			this.display = currSymb;
			return symb.length;
		} else
			return 0;
		//do not add this to mask

	};
})();
(function(){

		sap.common.globalization.declare("sap.common.globalization.numericFormat.FNum0");
		
		sap.common.globalization.require("sap.common.globalization.numericFormat.Helper");
		
		sap.common.globalization.numericFormat.FNum0 = function(parseLocaleInfo/*INumericParseLocaleInfo*/)
		{
			this.__className ="sap.common.globalization.numericFormat.FNum0";
			this._parseLocaleInfo = parseLocaleInfo; // private var parseLocaleInfo:INumericParseLocaleInfo;
			this.display = "0"; // public var display:String = "0";
		}
		
		/**
		 * 	@param o
		 * 	@param format
		 */
		sap.common.globalization.numericFormat.FNum0.prototype.parse = function(o/*FNumber*/, format/*String*/)/*int*/ {
			var numChars/*int*/ = 1;
			if (sap.common.globalization.numericFormat.Helper.isThousandsSeparator(format, 1, this._parseLocaleInfo.thousandsSeparator())) {
				var c/*String*/ = format.charAt(2);
				if (c != '#' && c != '?' && c != '0'){
					if(!sap.common.globalization.numericFormat.Helper.isThousandsSeparator(format, 2, this._parseLocaleInfo.thousandsSeparator())) 
							o.scale = o.scale / 1000;
					else
						//For ADAPT01422479. 
						//If the number format contains 2 thousand separators, Excel will divide the value by 1000000
						//We need to behave the same way.  
						o.scale = o.scale / 1000000;
				} 
				else {
					o.bcomma = true;
				}
				// eat the commas
				var i/*int*/ = 1;
				while (sap.common.globalization.numericFormat.Helper.isThousandsSeparator(format, i++, this._parseLocaleInfo.thousandsSeparator())) {
					numChars++;
				}
			}
			return numChars;
		}
})();(function(){

		sap.common.globalization.declare("sap.common.globalization.numericFormat.FNumP");
		
		sap.common.globalization.numericFormat.FNumP = function(){
			this.__className ="sap.common.globalization.numericFormat.FNumP";
			this.display/*String*/ = "%"; // public var display:String = "%";
		};
		
		sap.common.globalization.numericFormat.FNumP.prototype.parse = function(o/*FNumber*/, format/*String*/)/*int*/ {
			o.scale = o.scale * 100;
	
			return -1;
		}	

})();
(function(){

		sap.common.globalization.declare("sap.common.globalization.numericFormat.FNumQ");
		
		sap.common.globalization.require("sap.common.globalization.numericFormat.Helper");
			
		sap.common.globalization.numericFormat.FNumQ = function(parseLocaleInfo/*INumericParseLocaleInfo*/)
		{
			this.__className ="sap.common.globalization.numericFormat.FNumQ";
			this._parseLocaleInfo = parseLocaleInfo;// private
			this.display/*String*/ = " ";	// public var display:String = " ";
		};
		
		sap.common.globalization.numericFormat.FNumQ.prototype.parse = function(o/*FNumber*/, format/*String*/)/*int*/ {
			var numChars/*int*/ = 1;
			if (sap.common.globalization.numericFormat.Helper.isThousandsSeparator(format, 1, this._parseLocaleInfo.thousandsSeparator())) {
				var c/*String*/ = format.charAt(2);
				if (c != '#' && c != '?' && c != '0' &&
					!sap.common.globalization.numericFormat.Helper.isThousandsSeparator(format, 2, this._parseLocaleInfo.thousandsSeparator())) {
					o.scale = o.scale / 1000;
				} else {
					o.bcomma = true;
				}
				// eat the commas
				var i/*int*/ = 1;
				while (sap.common.globalization.numericFormat.Helper.isThousandsSeparator(format, i++, this._parseLocaleInfo.thousandsSeparator())) {
					numChars++;
				}
			}
			return numChars;
		}
		

})();


(function(){

		sap.common.globalization.declare("sap.common.globalization.numericFormat.FNumS");
		sap.common.globalization.require("sap.common.globalization.numericFormat.Helper");

		sap.common.globalization.numericFormat.FNumS = function(parseLocaleInfo/*INumericParseLocaleInfo*/)
		{
			this.__className ="sap.common.globalization.numericFormat.FNumS";
			this._parseLocaleInfo = parseLocaleInfo; // private var parseLocaleInfo:INumericParseLocaleInfo;
			
			this.display = "" //public var display:String = "";
		}
		
		sap.common.globalization.numericFormat.FNumS.prototype.parse = function(o/*FNumber*/, format/*String*/)/*int*/ {
			var numChars/*int*/ = 1;
			if (sap.common.globalization.numericFormat.Helper.isThousandsSeparator(format, 1, this._parseLocaleInfo.thousandsSeparator())) {
				var c/*String*/ = format.charAt(2);
				if (c != '#' && c != '?' && c != '0') {
					if(!sap.common.globalization.numericFormat.Helper.isThousandsSeparator(format, 2, this._parseLocaleInfo.thousandsSeparator()))
						o.scale = o.scale / 1000;
					else
						//For ADAPT01422479. 
						//If the number format contains 2 thousand separators, Excel will divide the value by 1000000
						//We need to behave the same way.
						o.scale = o.scale / 1000000;
				} 
				else {
					o.bcomma = true;
				}
				// eat the commas
				var i/*int*/ = 1;
				while (sap.common.globalization.numericFormat.Helper.isThousandsSeparator(format, i++, this._parseLocaleInfo.thousandsSeparator())) {
					numChars++;
				}
			}
			return numChars;
		}		
})();(function(){

		sap.common.globalization.declare("sap.common.globalization.numericFormat.FPeriod");
		sap.common.globalization.require("sap.common.globalization.numericFormat.Helper");

		sap.common.globalization.numericFormat.FPeriod = function(parseLocaleInfo/*INumericParseLocaleInfo*/, displayLocaleInfo/*INumericDisplayLocaleInfo*/)
		{
			this.__className ="sap.common.globalization.numericFormat.FPeriod";
			this._parseLocaleInfo = parseLocaleInfo; //		private var parseLocaleInfo:INumericParseLocaleInfo;
			this.display = displayLocaleInfo.decimalSeparator();
		}
				
		sap.common.globalization.numericFormat.FPeriod.prototype.parse = function(o/*FNumber*/, format/*String*/)/*int*/ 
		{
			var numChars/*int*/ = -1;
			if (sap.common.globalization.numericFormat.Helper.isThousandsSeparator(format, 1, this._parseLocaleInfo.thousandsSeparator())) 
			{
				var c/*String*/ = format.charAt(2);
				if (c != '#' && c != '?' && c != '0' &&
					!sap.common.globalization.numericFormat.Helper.isThousandsSeparator(format, 2, this._parseLocaleInfo.thousandsSeparator())) 
					{
						o.scale = o.scale / 1000;
					}
				// eat the commas
				var i/*int*/=1;
				while (sap.common.globalization.numericFormat.Helper.isThousandsSeparator(format, i++, this._parseLocaleInfo.thousandsSeparator())) 
				{
					numChars++;
				}
			}
			if (o.period == -1) {
				o.period = o.mask.length;
			}
			return numChars;
		}	
})();(function(){

		sap.common.globalization.declare("sap.common.globalization.numericFormat.FNumber");
		
		/**
		 * Constructor
		 */		
		sap.common.globalization.numericFormat.FNumber = function(parseLocaleInfo/*INumericParseLocaleInfo*/, displayLocaleInfo/*INumericDisplayLocaleInfo*/) 
		{
			
			this.__className ="sap.common.globalization.numericFormat.FNumber";
			this.scale = 1.0;
			this.bcomma = false; // whether we do commas
			this.bsign = true; // whether we show the sign
			this.period = -1; // period position
			this.numfore = undefined; // number before decimal
			this.numaft = undefined; // number after decimal
			this.sign = ""; // sign of number
			this.mask = new Array(); // mask
			this.mfore = new Array(); // ptr to mask objects before period
			this.maft = new Array(); // ptr to mask objects after period
			this.format = undefined; // save the format string
			this.currencyIndex=-1;
			this._tok ={};
			this._tok["#"] = sap.common.globalization.numericFormat.FNumS; //		private var tok:Object = {};
			this._tok["?"] = sap.common.globalization.numericFormat.FNumQ;
			this._tok["%"] = sap.common.globalization.numericFormat.FNumP;
			this._tok["0"] = sap.common.globalization.numericFormat.FNum0;
			
			this.condnum /*Number*/ = 0; // var condnum:int;
			this.cond = {}; //		var cond:*;
			
			var IMDecimalSeparator/*String*/ = parseLocaleInfo.decimalSeparator(); // decimalSeparator is a get function in AS3.
			this._tok[IMDecimalSeparator] = sap.common.globalization.numericFormat.FPeriod; // periods are special handling
			this.IMDecimalSeparator = IMDecimalSeparator; 

			this.parseLocaleInfo = parseLocaleInfo;			
			this.displayLocaleInfo = displayLocaleInfo;
			this.IMThousandsSeparator = displayLocaleInfo.thousandsSeparator(); // thousandsSeparator is a get function in AS3.
			
			//only set this if passed in via Flashvars.
			//this.tok[IMThousandsSeparator] = FComma; // commas are special handling

			var IMCurrencySymbol/*String*/ = this.parseLocaleInfo.currencySymbol(); // currencySymbol is a get function in AS3.
			if (IMCurrencySymbol)
			{
				this._tok[IMCurrencySymbol] = sap.common.globalization.numericFormat.FCurr;  //change this $ to IMCurrencySymbol...
			}
		}		
		
	 	sap.common.globalization.numericFormat.FNumber.tokens/*String*/ = "#?%0";
		
		sap.common.globalization.numericFormat.FNumber.prototype.parse = function(format/*String*/)/*int*/ 
		{
			if (this.format == null) 
			{
				this.format = format;
			}
	
			var c/*Object*/ = format.charAt(0);
			// hokey actionscript stuff
			
			/* ADAPT01376528 limitation: Generally, currency format has two parts - currency symbol($) and numeric format(#,##0.00). 
			If currency symbol included decimal separator and no space between them, xcelsius can not handle it correctly*/
			if (this._tok[c]==undefined 
			|| (c == this.IMDecimalSeparator && (format.length > 1 && format.charAt(1) != '#' && format.charAt(1) != '0')))
			{
				return 0;
			}
			
			var r/*Object*/ = this.createTokenFormatter(this._tok[c]);
			var ret/*Object*/ = r.parse(this, format);
			if(this.period >1)
			{
				var debug = true;	
			}
			if (ret > 0) 
			{
				var index/*uint*/ = this.mask.length;
				this.mask.push(r);
				
				if( this.currencyIndex!=index ) 
				{
					if (this.period == -1) 
					{
						this.mfore.push(index);
					} 
					else 
					{
						this.maft.push(index);
					}
				}
			} 
			else if (ret < 0) 
			{
				this.mask.push(r);
				ret = Math.abs(ret);
			} 
			else 
			{
				ret = 0;
			}
	
			return ret;
		}
		
		sap.common.globalization.numericFormat.FNumber.prototype.display = function(num/*Object*/)/*String*/ 
		{
			if (typeof(num) != "number") 
			{
				return num;
			}
	
			if (isNaN(num) || !isFinite(num)) 
			{
				return num;
			}
	
			if (this.mfore.length == 0 && this.maft.length == 0) 
			{
				return this.format;
			}
			this.setNumber(num);
	
			// put numbers into array for numbers before period
			var s/*:Array*/ = new Array();
			var l/*int*/ = this.mfore.length;
			var cnt/*int*/ = 3; // count of digits for comma placement
			var mi/*int*/ = this.period;
			var ml/*int */= (mi==-1) ? (this.mask.length) : mi;
			var j/*int*/;
			var d/*int*/;
			var a/*Object*/;
			for (var i/*int*/ = l-1; i>=0; i--) 
			{
				mi = this.mfore[i];
				
				//queue up the literals
				for (var j=ml-1; j>mi; j--) 
				{
					a = this.mask[j];
					if ((typeof a) == "object") 
					{
						s.unshift(a.display);
					} 
					else 
					{
						s.unshift(a);
					}
				}
				if (this.numfore.length > 0) 
				{
					// put a number where mask character goes
					if (this.bcomma) 
					{
						if (cnt-- == 0) 
						{
							s.unshift(this.IMThousandsSeparator);
							cnt = 2;
						}
					}
					
					d = this.numfore.length - 1;
					s.unshift(this.numfore.charAt(d));
					this.numfore = this.numfore.substring(0,d);
				} 
				else 
				{
					// ran out of numbers, put mask character in
					var display/*Object*/ = this.mask[mi].display;
					if (display.length != 0) 
					{
						if (this.bcomma && cnt-- == 0) 
						{
							s.unshift(this.IMThousandsSeparator);
							cnt = 2;
						}
						s.unshift(this.mask[mi].display);
					}
				}
				
				ml = mi;
			}
			// ran out of mask, so stuff everything in current spot
			if (this.numfore.length > 0) 
			{
				if (this.bcomma) 
				{
					while (this.numfore.length > 0) 
					{
						if (cnt-- == 0) 
						{
							s.unshift(this.IMThousandsSeparator);
							cnt = 2;
						}
						d = this.numfore.length - 1;
						s.unshift(this.numfore.charAt(d));
						this.numfore = this.numfore.substring(0,d);
					}
				} 
				else 
				{
					s.unshift(this.numfore);
				}
			}
			// take care of the rest of the literals
			a = this.mask;
			
			//this is a hack to reset the index		
			if(this.currencyIndex != -1)
				i=0;
		
			for (j=ml-1; j>=0; j--) 
			{
				if ((typeof a[i]) == "object") 
				{
					s.unshift(this.mask[j].display);
				} 
				else 
				{
					s.unshift(this.mask[j]);
				}
			}
			// do the period and rest of masks
			l = this.mask.length;
			i = (this.period == -1) ? (l) : (this.period);

			mi = 0;
			for ( ; i<l; i++) 
			{
				if ((typeof a[i]) == "object") 
				{
					if (this.maft[mi] == i) 
					{
						mi++;
						if (this.numaft.length > 0) 
						{
							s.push(this.numaft.charAt(0));
							this.numaft = this.numaft.substring(1);
						} 
						else 
						{
							s.push(a[i].display);
						}
					} 
					else 
					{
						s.push(a[i].display);
					}
				} 
				else 
				{
					s.push(a[i]);
				}
			}
	
			var rv/*String*/;
			// add the sign
			if (this.bsign) 
			{
				rv = this.sign + s.join("");
			} 
			else 
			{
				rv = s.join("");
			}
			return rv;
		}
		
		sap.common.globalization.numericFormat.FNumber.prototype.setNumber = function(num/*Number*/)/*void*/ {
			// scale
			num = num * this.scale;
			// round
			var l/*uint*/ = this.maft.length;
			var p/*Function*/ = Math.pow;
			var s/*Number*/ = p(10, l);
			if (num < 0)
				s *= -1;
			var n/*Number*/ = num * s;
			n = Math.round(n);
			num = n/s;
			// break up to two strings before and after decimal
			var strnum/*Array*/ = num.toString().split(".");
			this.numfore = strnum[0];
			// take care of the sign
			if (this.numfore.charAt(0) == '-') {
				this.sign = '-';
				this.numfore = this.numfore.substring(1);
			} else {
				this.sign = "";
			}
			if (this.numfore.charAt(0) == '0') {
				this.numfore = this.numfore.substring(1);
			}
			this.numaft = undefined;
			if (strnum.length < 2) {
				this.numaft = "";
			} else  {
				this.numaft = strnum[1];
			}

		}
		
		sap.common.globalization.numericFormat.FNumber.prototype.createTokenFormatter = function(clazz/*Class*/)/*Object*/
		{
			var token/*Object*/ = null;
			var _s_numericFormat = sap.common.globalization.numericFormat;
			switch(clazz)
			{
				case _s_numericFormat.FNumS:
					token = new sap.common.globalization.numericFormat.FNumS(this.parseLocaleInfo);
					break;
				case _s_numericFormat.FNumQ:
					token = new sap.common.globalization.numericFormat.FNumQ(this.parseLocaleInfo);
					break;
				case _s_numericFormat.FNumP:
					token = new sap.common.globalization.numericFormat.FNumP();
					break;
				case _s_numericFormat.FNum0:
					token = new sap.common.globalization.numericFormat.FNum0(this.parseLocaleInfo);
					break;
				case _s_numericFormat.FPeriod:
					token = new sap.common.globalization.numericFormat.FPeriod(this.parseLocaleInfo, this.displayLocaleInfo);
					break;
				case _s_numericFormat.FCurr:
					token = new sap.common.globalization.numericFormat.FCurr(this.parseLocaleInfo, this.displayLocaleInfo);
					break;
				default:
					// this should not happend since there's check before call this method
			}
			return token;
		}

})();
(function()
{
	sap.common.globalization.declare("sap.common.globalization.numericFormat.FDefaultNumber");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FNumber");
	sap.common.globalization.require("sap.common.globalization.numericFormat.DefaultGroupingStrategy");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FPeriod");
	/**
	 * A special version of FNumber. It will not show the decimal point if
	 * the fracion part of the number is zero.
	 * [NOTE]: Please do NOT use it in non-default formats!!! It's supposed
	 * to be used only for default number format.
	 */

	sap.common.globalization.numericFormat.FDefaultNumber = function(parseLocaleInfo/*:INumericParseLocaleInfo*/, displayLocaleInfo/*:INumericDisplayLocaleInfo*/) {
		sap.common.globalization.numericFormat.FDefaultNumber.superclass.constructor.apply(this, [parseLocaleInfo, displayLocaleInfo]);		this.__className = "sap.common.globalization.numericFormat.FDefaultDateNumber";
		this._groupingStrategy/*:IGroupingStrategy*/ = sap.common.globalization.numericFormat.DefaultGroupingStrategy.instance();
	}
	sap.common.globalization.numericFormat.FDefaultNumber = sap.common.globalization.extend(sap.common.globalization.numericFormat.FDefaultNumber, sap.common.globalization.numericFormat.FNumber);
	sap.common.globalization.numericFormat.FDefaultNumber.prototype.display = function(num/*:**/)/*:String*/
	{
		if( typeof (num) != "number") {
			return num;
		}

		if(isNaN(num) || !isFinite(num)) {
			return num;
		}

		if(this.mfore.length == 0 && this.maft.length == 0) {
			return this.format;
		}
		this.setNumber(num);

		// put numbers into array for numbers before period
		var s/*:Array*/ = new Array();
		var l/*:int*/ = this.mfore.length;
		var cnt/*:int*/ = 3;
		// count of digits for comma placement
		var mi/*:int*/ = this.period;
		var ml/*:int*/ = (mi == -1) ? (this.mask.length) : mi;
		var j/*:int*/;
		var d/*:int*/;
		var a/*:**/;
		for(var i/*:int*/ = l - 1; i >= 0; i--) {
			mi = this.mfore[i];

			//queue up the literals
			for( j = ml - 1; j > mi; j--) {
				a = this.mask[j];
				if(( typeof a) == "object") {
					s.unshift(a.display);
				} else {
					s.unshift(a);
				}
			}
			if(this.numfore.length > 0) {
				// put a number where mask character goes
				if(this.bcomma) {
					if(cnt-- == 0) {
						s.unshift(	this.IMThousandsSeparator); //TODO 	TO be verified. super.IMThousandsSeparator cannot be accessed 'cause no instance refrence
						cnt = this._groupingStrategy.nextGroupDigits();
					}
				}
				d = this.numfore.length - 1;
				s.unshift(this.numfore.charAt(d));
				this.numfore = this.numfore.substring(0, d);
			} else {
				// ran out of numbers, put mask character in
				var display/*:**/ = this.mask[mi].display;
				if(display.length != 0) {
					if(this.bcomma && cnt-- == 0) {
						s.unshift(this.IMThousandsSeparator);
						cnt = this._groupingStrategy.nextGroupDigits();
					}
					s.unshift(this.mask[mi].display);
				}
			}
			ml = mi;
		}
		// ran out of mask, so stuff everything in current spot
		if(this.numfore.length > 0) {
			if(this.bcomma) {
				while(this.numfore.length > 0) {
					if(cnt-- == 0) {
						s.unshift(this.IMThousandsSeparator);
						cnt = this._groupingStrategy.nextGroupDigits();
					}
					d = this.numfore.length - 1;
					s.unshift(this.numfore.charAt(d));
					this.numfore = this.numfore.substring(0, d);
				}
			} else {
				s.unshift(this.numfore);
			}
		}
		// take care of the rest of the literals
		a = this.mask;

		//this is a hack to reset the index
		if(this.currencyIndex != -1)
			i = 0;

		for( j = ml - 1; j >= 0; j--) {
			if(( typeof a[i]) == "object") {
				s.unshift(this.mask[j].display);
			} else {
				s.unshift(this.mask[j]);
			}
		}

		// do the period and rest of masks
		l = this.mask.length;
		i = (this.period == -1) ? (l) : (this.period);
		mi = 0;
		var dropFraction/*:Boolean*/ = false;
		for(; i < l; i++) {
			if(( typeof a[i]) == "object") {
				// IMPORTANT: the only difference, we won't show decimal number
				// if the fraction part is zero.
				//TODO
				if(a[i].__className == "sap.common.globalization.numericFormat.FPeriod" /*is FPeriod*/ && !this.numaft) {
					dropFraction = true;
					continue;
				}
				if(this.maft[mi] == i) {
					mi++;
					if(this.numaft.length > 0) {
						if(!dropFraction)
							s.push(this.numaft.charAt(0));
						this.numaft = this.numaft.substring(1);
					} else {
						s.push(a[i].display);
					}
				} else {
					s.push(a[i].display);
				}
			} else {
				s.push(a[i]);
			}
		}
		var rv/*:String*/;
		// add the sign
		if(this.bsign) {
			rv = this.sign + s.join("");
		} else {
			rv = s.join("");
		}
		return rv;

		//return super.display(num);
	}

	sap.common.globalization.numericFormat.FDefaultNumber.prototype.groupingStrategy = function(strategy/*:IGroupingStrategy*/)/*:void*/
	{
		if(this._groupingStrategy != strategy) {
			this._groupingStrategy = strategy;
		}
	}
})();
(function() {

	sap.common.globalization.declare("sap.common.globalization.numericFormat.FT");
	sap.common.globalization.require("sap.common.globalization.utils.BaseUtils");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDate");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FText");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FNumber");
	
	
	sap.common.globalization.require("sap.common.globalization.defaultFormat.CustomDateFormatLocaleFactory");
	sap.common.globalization.require("sap.common.globalization.defaultFormat.CustomNumericFormatLocaleFactory");
	
	
	

	//For ADAPT01422479
	//Normally, a number format has three parts seperated by semi-colon: part1;part2;part3
	//If a number format has less than 3 parts, Excel will use the 1st part for values which don't meet any condition.

	//But, for number format which has custom condition, Excel will parse the value using another way:
	//Given this number format: [condition1]part1;[condition2]part2;part3
	//If a value doesn't meet condition1 and condition2, Excel will parse this number using "part3".
	//So, we need a flag to tell whether custom condition is set.
	//If there is no custom condition, use the 1st part by default.
	//If there is custom condition, use the last part by default.

	/**
	 * Constructor
	 */
	sap.common.globalization.numericFormat.FT = function(dateLocaleFactory/*IDateLocaleFactory=null*/, numericLocaleFactory/*INumericLocaleFactory=null*/) {

		this.__className = "sap.common.globalization.numericFormat.FT";
		this._hasCustomCondition = false;
		this.color = undefined;

		this.o = new Array();
		// positive, negative, zero, text

		this._dateLocaleFactory = dateLocaleFactory ? dateLocaleFactory:sap.common.globalization.defaultFormat.CustomDateFormatLocaleFactory.getInstance();
		this._numericLocaleFactory = numericLocaleFactory ? numericLocaleFactory:sap.common.globalization.defaultFormat.CustomNumericFormatLocaleFactory.getInstance();
	}
	var numFT = sap.common.globalization.numericFormat.FT;

	// class static member
	// public static var ftarr:Array = new Array();
	numFT.ftarr = new Array();
	// constants for parsing condition tokens
	// private static const CONDITION_TOKENS:String = "=<>";
	numFT._CONDITION_TOKENS/*String*/ = "=<>";

	numFT._equals = function(a/*Number*/, b/*Number*/)/*Boolean*/
	{
		return (a == b);
	};
	numFT._neq = function(a/*Number*/, b/*Number*/)/*Boolean*/
	{
		return (a != b);
	};
	numFT._gthan = function(a/*Number*/, b/*Number*/)/*Boolean*/
	{
		return (a > b);
	};
	numFT._gte = function(a/*Number*/, b/*Number*/)/*Boolean*/
	{
		return (a >= b);
	};
	numFT._lthan = function(a/*Number*/, b/*Number*/)/*Boolean*/
	{
		return (a < b);
	};
	numFT._lte = function(a/*Number*/, b/*Number*/)/*Boolean*/
	{
		return (a <= b);
	};
	// functions of condition
	// private static const CONDITIONS:Object = {
	numFT._CONDITIONS = {
		"=" : sap.common.globalization.numericFormat.FT._equals,
		"<>" : sap.common.globalization.numericFormat.FT._neq,
		"<" : sap.common.globalization.numericFormat.FT._lthan,
		"<=" : sap.common.globalization.numericFormat.FT._lte,
		">" : sap.common.globalization.numericFormat.FT._gthan,
		">=" : sap.common.globalization.numericFormat.FT._gte
	};

	// constants for parsing color tokens
	// private static const COLORS:Object = {
	numFT._COLORS = {
		"black" : 0x000000,
		"blue" : 0x0000FF,
		"cyan" : 0x00FFFF,
		"green" : 0x00FF00,
		"magenta" : 0xFF00FF,
		"red" : 0xFF0000,
		"white" : 0xFFFFFF,
		"yellow" : 0xFFFF00
	};

	numFT.prototype._isNumeric = function(format/*String*/)/*:Boolean*/
	{
		// const tokens:String = "#?%";
		var tokens/*String*/ = "#?%";

		var l = tokens.length;
		for(var i/*int*/ = 0; i < l; i++) {
			if(format.indexOf(tokens.charAt(i)) != -1)
				return true;
		}

		return false;
	};

	numFT.prototype.parse = function(format/*String*/) {
		this._hasCustomCondition = false;
		var f/*String*/ = format;
		var l/*int*/ = format.length;
		var c/*String*/;
		var index/*int*/ = 0;
		// index into objects below
		for(var i/*int*/ = 0; i < l; i++) {
			c = f.charAt(i);
			if(c == '"') {
				while(i < l) {
					if(f.charAt(++i) == '"' && f.charAt(i - 1) != '\\')
						break;
				}
				continue;
			}
			if(c == '\\' || c == '_' || c == '*') {
				i++;
				continue;
			}
			if(c == ';') {
				if(this.o[index] == undefined) {
					this.o[index] = new sap.common.globalization.numericFormat.FText();
				}
				this.o[index].format = f.substring(0, i);
				index++;
				f = f.substring(i + 1);
				l = f.length;
				i = -1;
				continue;
			}
			if(c == '[') {
				var str/*String*/ = "";
				while(f.charAt(++i) != ']' && (i < l))
				str += f.charAt(i);
				// custom handling, warning major hack
				var sl/*int*/ = str.length;
				var c1/*String*/ = str.charAt(0);
				if(c1 == 's' || c1 == 'm' || c1 == 'h') {
					for(var j/*Number*/ = 1; j < sl; j++) {
						var c2/*String*/ = str.charAt(j);
						if(c1 != c2) {
							break;
						}
					}
					if(j == sl) {
						if(this.o[index] == undefined) {
							this.o[index] = this._dateLocaleFactory.createFDate();
						}
					}
				}
			}
			
			// date tokens dynamically generated
			var zz/*int*/ = sap.common.globalization.numericFormat.FDate.tokens.indexOf(c);
			// ADAPT01376528 currency symbol may have FDate's token, so we need additional check for numeric
			if(sap.common.globalization.numericFormat.FDate.tokens.indexOf(c) != -1 && !this._isNumeric(format)) {
				if(this.o[index] == undefined) {
					this.o[index] = this._dateLocaleFactory.createFDate();
				}
				this.o[index] = this._dateLocaleFactory.createFDate();
			}
			else if (sap.common.globalization.numericFormat.FNumber.tokens.indexOf(c) != -1)
			{
				if(this.o[index] == undefined) {

					this.o[index] = this._numericLocaleFactory.createFNumber();
					
					// don't do negative sign for second entry
					if(index == 1) {
						this.o[index].bsign = false;
					}
				}
			} else if(sap.common.globalization.numericFormat.FText.tokens.indexOf(c) != -1) {
				if(this.o[index] == undefined) {
					this.o[index] = new sap.common.globalization.numericFormat.FText();
				}
			}
		}

		if(this.o[index] == undefined) {
			this.o[index] = this._numericLocaleFactory.createFNumber();
		}

		this.o[index].format = f;

		var ol/*uint*/ = this.o.length;
		for(var i1/*uint*/ = 0; i1 < ol; i1++) {
			var o/* Object */ = this.o[i1];
			// init default condition
			o.condnum = 0;
			if(i1 == 0) {
				o.cond = sap.common.globalization.numericFormat.FT._gthan;
			} else if(i1 == 1) {
				o.cond = sap.common.globalization.numericFormat.FT._lthan;
			} else if(i1 == 2) {
				o.cond = sap.common.globalization.numericFormat.FT._equals;
			}

			var a/* Object */ = o.mask;
			var q/*Boolean*/ = false;
			f = o.format;
			l = f.length;
			for( var j = 0; j < l; j++) {
				c = f.charAt(j);
				// quote handling
				if(c == '"') {
					q = !q;
					continue;
				}

				// backslash handling
				if(c == '\\') {
					j++;
					c = f.charAt(j);
					a.push(c);
					continue;
				}

				if(q) {
					a.push(c);
					continue;
				}
				// * not handling
				if(c == '*') {
					j++;
					continue;
				}
				// _ spacing is just one space
				if(c == '_') {
					j++;
					a.push(' ');
					continue;
				}

				if(c == '[') {
					//We process two kinds of Format
					//Format 1: [$$-409]
					//Format 2: [$NSD]
					//The format 2 is a new format
					c1 = f.charAt(j + 1);
					c2 = f.charAt(j + 2);
					if(c1 == '$' && c2 != "-")// special prefix handling
					{
						var closeBracketIdx/*int*/ = f.indexOf("]", j + 1);
						if(closeBracketIdx != -1) {
							var prefix/*String*/ = f.substring(j + 1, closeBracketIdx);
							if(str.indexOf("-") != -1) {
								prefix = str.substring(1, str.indexOf("-"));
							} else {
								prefix = str.substring(1);
							}
							for(var prefIdx/*int*/ = 0; prefIdx < prefix.length; ++prefIdx) {
								a.push(prefix.charAt(prefIdx));
							}
							j = closeBracketIdx;
							continue;
						}
					} else// color handling
					{
						str = f.substring(j + 1);
						str = str.substring(0, str.indexOf(']')).toLowerCase();

						if(sap.common.globalization.numericFormat.FT._COLORS[str] != undefined) {
							// color handling
							o.color = sap.common.globalization.numericFormat.FT._COLORS[str];
							j += str.length + 1;
							continue;
						} else if(str == "h" || str == "m" || str == "s") {
						} else {
							// conditional handling
							var ind/*Object*/ = 1;
							while(sap.common.globalization.numericFormat.FT._CONDITION_TOKENS.indexOf(str.charAt(ind)) != -1) {
								ind++;
							}
							var tok/*String*/ = str.substring(0, ind);
							if(sap.common.globalization.numericFormat.FT._CONDITIONS[tok] != undefined) {
								o.cond = sap.common.globalization.numericFormat.FT._CONDITIONS[tok];
								o.condnum = str.substring(ind);
								j += str.length + 1;
								this._hasCustomCondition = true;
								continue;
							} else {
								// skip unknown token
								j += str.length + 1;
								continue;
							}
						}
					}
				}

				// token handling
				var ret/*Object */ = o.parse(f.substring(j));
				if(ret > 0) {
					j += ret - 1;
				} else {
					a.push(c);
				}
			}
		}
	};
	//ADAPT01306502 - invoke this function will change the color which caused this bug.
	//Pay more attenation on this problem if you need invoke this method for multiple times.
	numFT.prototype.display = function(num/*Object*/)/*String*/
	{
		var o/*Object*/ = this.o[0];
		var l/*int*/ = this.o.length;
		if(l > 3 && sap.common.globalization.utils.BaseUtils.isString(num)) {
			o = this.o[3];
		} else {
			if(this._hasCustomCondition && l > 0) {
				if(l <= 3)
					o = this.o[l - 1];
				else
					o = this.o[2];
			}
			for(var i/*int*/ = 0; i < 3 && i < l; i++) {
				var ob/*Object*/ = this.o[i];
				if(ob && ob.cond(num, ob.condnum)) {
					o = ob;
					break;
				}
			}
		}
		if(!isNaN(o.color)) {
			this.color = o.color;
		} else {
			this.color = undefined;
			// default
		}

		return (o.display(num));
	}



	/**
	 * @private
	 * Get the numeric display locale info of this Formatter.
	 * separator in order to abbreviate the formatted label.
	 *
	 * @return
	 *
	 */
	numFT.prototype.getNumericDisplayLoacleInfo = function()/*INumericDisplayLocaleInfo*/
	{
		return this._numericLocaleFactory.getNumericDisplayLocaleInfo();
	};


})();
(function(){

	sap.common.globalization.declare("sap.common.globalization.numericFormat.FTBoolean");
	
	sap.common.globalization.require("sap.common.globalization.defaultFormat.DefaultBooleanFormatLocaleFactory");
	sap.common.globalization.require("sap.common.globalization.NumericFormatManager;");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FT");
	sap.common.globalization.require("sap.common.globalization.utils.BaseUtils");
	
		var  numFormat  = sap.common.globalization.numericFormat;
	
	sap.common.globalization.numericFormat.FTBoolean = function(dateLocaleFactory/*IDateLocaleFactory=null*/, numericLocaleFactory/*INumericLocaleFactory=null*/)
	{
		
		numFormat.FTBoolean.superclass.constructor.apply(this, [ dateLocaleFactory, numericLocaleFactory ]);
		this.__className = "sap.common.globalization.numericFormat.FTBoolean";	

		dateLocaleFactory  = dateLocaleFactory || null;
		numericLocaleFactory = numericLocaleFactory || null;
		
		
		this._booleanLocaleFactory = sap.common.globalization.defaultFormat.DefaultBooleanFormatLocaleFactory.getInstance();
	};
	
	// numFormat.FTBoolean.BOOLEAN_TOKEN = sap.common.globalization.NumericFormatManager.DEFAULT_FORMAT_BOOLEAN;
	numFormat.FTBoolean.BOOLEAN_TOKEN = "SAP_DEFAULT_BOOLEAN_FORMAT";
	
	numFormat.FTBoolean = sap.common.globalization.extend(numFormat.FTBoolean, numFormat.FT);
	
	
	sap.common.globalization.numericFormat.FTBoolean.prototype.parse = function(format/*String*/)
	{
		if (format == numFormat.FTBoolean.BOOLEAN_TOKEN){
			this.o[0] = this;	
		}
		else
		{
			// push a FTBoolean to array o, because there are abused use of FT.o in other classes.
			this.o[0] = null;	
		}
	}
	
	sap.common.globalization.numericFormat.FTBoolean.prototype.display = function(bool/*Object*/)/*String*/
	{
		var retValue/*String*/ = String(bool);
		var localeInfo/*IBooleanDisplayLocaleInfo*/ = this._booleanLocaleFactory.getBooleanDisplayLocaleInfo();
		if (localeInfo && this.o[0].__className == "sap.common.globalization.numericFormat.FTBoolean") // this.o[0] is FTBoolean
		{
			if (sap.common.globalization.utils.BaseUtils.isBoolean(bool))
			{
				retValue = bool? localeInfo.trueString():localeInfo.falseString();
			}
			else if (sap.common.globalization.utils.BaseUtils.isString(bool) && (String(bool).toLowerCase() == "true"||String(bool).toLowerCase() == "false"))
			{
				retValue = String(bool).toLowerCase() == "true" ? localeInfo.trueString():localeInfo.falseString();
			}
		}
		return retValue;
	}

})();
(function(){
	    sap.common.globalization.declare("sap.common.globalization.numericFormat.FTimeSep");

		sap.common.globalization.numericFormat.FTimeSep =function(pLocale/*IDateParseLocaleInfo*/, dLocale/*IDateDisplayLocaleInfo*/)
		{
			this._parseLocale = pLocale;
			this._displayLocale = dLocale;
		}
		
		sap.common.globalization.numericFormat.FTimeSep.prototype.parse = function(o/*FDate*/, format/*String*/)/*int*/
		{
			var symb/*String*/ = format.charAt(0);
			
			//only if the SAPTimeSeparator has been set by Flashvars...
			if(this._displayLocale.IMTimeSeparator() != null && (symb == ":" || symb == ".") )
				return 1;
			else
				return 0; //do not add this to mask
			
		}
		sap.common.globalization.numericFormat.FTimeSep.prototype.display = function(o/*FDate*/)/*String*/
		{
			return this._displayLocale.IMTimeSeparator();
		}

})();
(function(){

	sap.common.globalization.declare("sap.common.globalization.numericFormat.FTUtil");
	
	 /**
	 * @private
	 * 	Check whether the ft represents a boolean type format. 
	 * @return 
	 * 
	 */
	sap.common.globalization.numericFormat.FTUtil.isBooleanFT = function(ft/*FT*/)/*Boolean*/
	{
		// return ft && ft is FTBoolean;
		return ft && (ft.__className == "sap.common.globalization.numericFormat.FTBoolean");	
	}
	
	/**
	 * Check whether the ft represents a date(include time) type format. 
	 * @param ft
	 * @return 
	 * 
	 */
	sap.common.globalization.numericFormat.FTUtil.isDate = function(ft/*FT*/)/*Boolean*/
	{
		// return ft && ft.o && ft.o.length>0 && ft.o[0] is FDate;
		return ft && ft.o && ft.o.length>0 && (ft.o[0].__className == "sap.common.globalization.numericFormat.FDate");
	}

})();


(function() {
	sap.common.globalization.declare("sap.common.globalization.numericFormat.TwoDigitGroupingStrategy");

	/**
	 * @private
	 * Grouping strategy for special locales including gu gu_IN
	 * hi hi_IN kn kn_IN kok kok_IN mr mr_IN pa pa_IN ta ta_IN te te_IN
	 */
	sap.common.globalization.numericFormat.TwoDigitGroupingStrategy= function()
	{
		this.__className = "sap.common.globalization.numericFormat.TwoDigitGroupingStrategy";
	}
	
	var _s_g_nf_tDGroupStrategy = sap.common.globalization.numericFormat.TwoDigitGroupingStrategy;

	_s_g_nf_tDGroupStrategy._instance/*TwoDigitGroupingStrategy*/ = new sap.common.globalization.numericFormat.TwoDigitGroupingStrategy();
	// should return 1
	_s_g_nf_tDGroupStrategy.prototype.nextGroupDigits =function()/*int*/
	{
		return 1;
	};
	
	_s_g_nf_tDGroupStrategy.instance = function()/*IGroupingStrategy*/
	{
		return _s_g_nf_tDGroupStrategy._instance;
	};

})();(function(){

		sap.common.globalization.declare("sap.common.globalization.numericFormat.FDefaultCurrencyNumber");
		
		sap.common.globalization.require("sap.common.globalization.numericFormat.FNumber");
		sap.common.globalization.require("sap.common.globalization.numericFormat.DefaultGroupingStrategy");
			
		var _s_g_nf = sap.common.globalization.numericFormat;
		
		sap.common.globalization.numericFormat.FDefaultCurrencyNumber = function(parseLocaleInfo/*INumericParseLocaleInfo*/, displayLocaleInfo/*INumericDisplayLocaleInfo*/)
		{
			sap.common.globalization.numericFormat.FDefaultCurrencyNumber.superclass.constructor.apply(this, [parseLocaleInfo,displayLocaleInfo]);
			
			this.__className = "sap.common.globalization.numericFormat.FDefaultCurrencyNumber";
			
			this._groupingStrategy/*IGroupingStrategy*/ = _s_g_nf.DefaultGroupingStrategy.instance();
		}
		
		_s_g_nf.FDefaultCurrencyNumber = sap.common.globalization.extend(_s_g_nf.FDefaultCurrencyNumber, _s_g_nf.FNumber);
		
		
		/**
		 * @private
		 * Override. Here is just a copy. The difference is that it contains a 
		 * fix for a bug regarding how to fetch display value of a mask. 
		 */
		_s_g_nf.FDefaultCurrencyNumber.prototype.display =function(num/*Object*/)/*String*/
		{
			if (typeof(num) != "number") 
			{
				return num;
			}
	
			if (isNaN(num) || !isFinite(num)) 
			{
				return num;
			}
	
			if (this.mfore.length == 0 && this.maft.length == 0) 
			{
				return this.format;
			}
			this.setNumber(num);
	
			// put numbers into array for numbers before period
			var s/*Array*/ = new Array();
			var l/*int*/ = this.mfore.length;
			var cnt/*int*/ = 3; // count of digits for comma placement
			var mi/*int*/ = this.period;
			var ml/*int*/ = (mi==-1) ? (this.mask.length) : mi;
			var j/*int*/;
			var d/*int*/;
			var a/*Object*/;
			for (var i/*int*/ = l-1; i>=0; i--) 
			{
				mi = this.mfore[i];
				
				//queue up the literals
				for (j=ml-1; j>mi; j--) 
				{
					a = this.mask[j];
					if ((typeof a) == "object") 
					{
						s.unshift(a.display);
					} 
					else 
					{
						s.unshift(a);
					}
				}
				if (this.numfore.length > 0) 
				{
					// put a number where mask character goes
					if (this.bcomma) 
					{
						if (cnt-- == 0) 
						{
							s.unshift(this.IMThousandsSeparator);
							cnt  = this._groupingStrategy.nextGroupDigits();
						}
					}
					
					d = this.numfore.length - 1;
					s.unshift(this.numfore.charAt(d));
					this.numfore = this.numfore.substring(0,d);
				} 
				else 
				{
					// ran out of numbers, put mask character in
					var display/*Object*/ = this.mask[mi].display;
					if (display.length != 0) 
					{
						if (this.bcomma && cnt-- == 0) 
						{
							s.unshift(this.IMThousandsSeparator);
							cnt  = this._groupingStrategy.nextGroupDigits();
						}
						s.unshift(this.mask[mi].display);
					}
				}
				
				ml = mi;
			}
			// ran out of mask, so stuff everything in current spot
			if (this.numfore.length > 0) 
			{
				if (this.bcomma) 
				{
					while (this.numfore.length > 0) 
					{
						if (cnt-- == 0) 
						{
							s.unshift(this.IMThousandsSeparator);
							cnt  = this._groupingStrategy.nextGroupDigits();
						}
						d = this.numfore.length - 1;
						s.unshift(this.numfore.charAt(d));
						this.numfore = this.numfore.substring(0,d);
					}
				} 
				else 
				{
					s.unshift(this.numfore);
				}
			}
			// take care of the rest of the literals
			a = this.mask;
			
			//this is a hack to reset the index		
			if(this.currencyIndex != -1)
				i=0;
		
			for (j=ml-1; j>=0; j--) 
			{
				/*
				 * IMPORTANT: Work around here! I think a[i] is not the correct
				 * way to judge since we're adding this.mask[j] into "s". So here
				 * I add a second check whether this.mask[j] is a class. Otherwise
				 * "XXX Object" will be added into "s".
				 */
				if ((typeof this.mask[j]) == "object")
				{
					s.unshift(this.mask[j].display);
				} else {
					s.unshift(this.mask[j]);
				}
			}
			// do the period and rest of masks
			l = this.mask.length;
			i = (this.period == -1) ? (l) : (this.period);

			mi = 0;
			for ( ; i<l; i++) 
			{
				if ((typeof a[i]) == "object") 
				{
					if (this.maft[mi] == i) 
					{
						mi++;
						if (this.numaft.length > 0) 
						{
							s.push(this.numaft.charAt(0));
							this.numaft = this.numaft.substring(1);
						} 
						else 
						{
							s.push(a[i].display);
						}
					} 
					else 
					{
						s.push(a[i].display);
					}
				} 
				else 
				{
					s.push(a[i]);
				}
			}
	
			var rv/*String*/;
			// add the sign
			if (this.bsign) 
			{
				rv = this.sign + s.join("");
			} 
			else 
			{
				rv = s.join("");
			}
			return rv;
		}
		
		_s_g_nf.FDefaultCurrencyNumber.prototype.groupingStrategy = function(strategy/*IGroupingStrategy*/)
		{
			if (this._groupingStrategy != strategy)
			{
				this._groupingStrategy = strategy;
			}
		}

})();(function() {

	sap.common.globalization.declare("sap.common.globalization.defaultFormat.DefaultCurrencyFormatLocaleFactory");
	
	sap.common.globalization.require("sap.common.globalization.defaultFormat.DefaultNumericFormatLocaleFactory");
	sap.common.globalization.require("sap.common.globalization.GlobalizationNumericConstant");
	sap.common.globalization.require("sap.common.globalization.numericFormat.FDefaultCurrencyNumber");
	sap.common.globalization.require("sap.common.globalization.numericFormat.TwoDigitGroupingStrategy");
	sap.common.globalization.require("sap.common.globalization.GlobalizationNumericUtil");
	
	
	/**
	 * Constructor. You need to pass in the original format string in document.xml.
	 * 
	 * @param formatString formating string stored in document.xml
	 */
	sap.common.globalization.defaultFormat.DefaultCurrencyFormatLocaleFactory =function(formatString/*String*/)
	{
		sap.common.globalization.defaultFormat.DefaultCurrencyFormatLocaleFactory.superclass.constructor.apply(this, [formatString]);
		
		this.__className = "sap.common.globalization.defaultFormat.DefaultCurrencyFormatLocaleFactory";
		this._displayCurrencySymbol/*String*/ = null;
		
		if (sap.common.globalization.defaultFormat.DefaultCurrencyFormatLocaleFactory.isDefaultCurrencyFormat(formatString))
		{
			this._parseCurrencySymbol(formatString);
		}
	}

	var _s_g_d = sap.common.globalization.defaultFormat; 
	
	_s_g_d.DefaultCurrencyFormatLocaleFactory = sap.common.globalization.extend(_s_g_d.DefaultCurrencyFormatLocaleFactory, _s_g_d.DefaultNumericFormatLocaleFactory);

	// regular expression for parsing default currency format
	_s_g_d.DefaultCurrencyFormatLocaleFactory.REG_DEFAULT_CURRENCY_FORMAT/*RegExp*/ = new RegExp('^SAP_DEFAULT_CURRENCY_FORMAT(;".*")?$', "i");
	
	/* the currency symbol. Since the currency symbol is specified by user,
	 * we need to preserve it here to parse it to the Parse/Display Locale
	 * Info.
	 */
	
	/**
	 * Check whether the given format string is a default currency format.
	 * 
	 * @param formatString format string to check.
	 * @return true if the given format string is a default currency format; false otherwise.
	 */
	_s_g_d.DefaultCurrencyFormatLocaleFactory.isDefaultCurrencyFormat = function(formatString/*String*/)/*Boolean*/
	{
		return _s_g_d.DefaultCurrencyFormatLocaleFactory.REG_DEFAULT_CURRENCY_FORMAT.test(formatString);
	}

	/**
	 * Get default predefined number format string according to the current locale.
	 * If the PVL is available, get the predefined format string according to PVL. Otherwise,
	 * get the predefined strings according to the document locale.
	 * 
	 * @return format string for FT to parse.
	 */
	_s_g_d.DefaultCurrencyFormatLocaleFactory.prototype.getDefaultCurrencyFormat = function()/*String*/
	{
		return sap.common.globalization.GlobalizationNumericConstant.getDefaultCurrencyFormat();
	}
	
	/**
	 * Parse and set currency symbol.
	 */
	_s_g_d.DefaultCurrencyFormatLocaleFactory.prototype._parseCurrencySymbol = function(formatString/*String*/)/*void*/
	{
		if ("SAP_DEFAULT_CURRENCY_FORMAT" == formatString)
		{
			this._displayCurrencySymbol = "";
		} else {
			this._displayCurrencySymbol = formatString.slice(29, formatString.length - 1);
		}
	}
	
	_s_g_d.DefaultCurrencyFormatLocaleFactory.prototype.createFNumber = function()/*FNumber*/
	{
		// should return a default FNumber implementation
		var fNumber/*FDefaultCurrencyNumber*/ = new sap.common.globalization.numericFormat.FDefaultCurrencyNumber(this.getNumericParseLocaleInfo(), this.getNumericDisplayLocaleInfo());
		if (sap.common.globalization.GlobalizationNumericUtil.isTwoDigitGroupingCountry(sap.common.globalization.GlobalizationNumericConstant.getActualLocaleForDefaultCurrencyFormat()))
		{
			fNumber._groupingStrategy = sap.common.globalization.numericFormat.TwoDigitGroupingStrategy.instance();
		}
		return fNumber;
	}
	
	_s_g_d.DefaultCurrencyFormatLocaleFactory.prototype.displayCurrencySymbol =function()/*String*/
	{
		// return the parsed display currency symbol
		return this._displayCurrencySymbol;
	}
		
})();