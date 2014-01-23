/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides class sap.ca.ui.model.format.DateFormat
jQuery.sap.declare("sap.ca.ui.model.format.DateFormat");
jQuery.sap.require("sap.ui.core.format.DateFormat");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");

/**
 * Constructor for DateFormat - must not be used: To get a DateFormat instance, please use getInstance, getDateTimeInstance or getTimeInstance.
 *
 * @class
 * The DateFormat is a static class for formatting and parsing date and time values according
 * to a set of format options.
 * 
 * It uses sap.ui.core.format.DateFormat to format and parse dates, and adds a new style daysAgo for Date instances.
 * With this style:
 * <ul>
 * <li>For today: "Today" will be displayed (localized)</li>
 * <li>For yesterday: "1 day ago" will be displayed (localized)</li>
 * <li>Between 2 days and 6 days in the past: "x days ago" will be displayed (localized)</li>
 * <li>In the future or more than 6 days in the past: the date will be formatted with a medium style</li> 
 * </ul>
 * The daysAgo style can be formatted in UTC.
 *
 * Supported format options are pattern based on Unicode LDML Date Format notation.
 * If no pattern is specified a default pattern according to the locale settings is used.
 *
 * @public
 * @see http://unicode.org/reports/tr35/#Date_Field_Symbol_Table
 */
sap.ca.ui.model.format.DateFormat = function() {
	// Do not use the constructor
	throw new Error();	
};


/**
 * @see sap.ca.ui.model.format.DateFormat.getDateInstance
 */
sap.ca.ui.model.format.DateFormat.getInstance = function(oFormatOptions, oLocale) {
	return this.getDateInstance(oFormatOptions, oLocale);
};

/**
 * Get a date instance of the DateFormat, which can be used for formatting.
 *
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {string} [oFormatOptions.pattern] a data pattern in LDML format. It is not verified whether the pattern represents only a date.  
 * @param {string} [oFormatOptions.style] either empty or 'short, 'medium', 'long' or 'daysAgo'. If no pattern is given, a locale dependent default date pattern of that style is used from the LocaleData class.    
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.DateFormat} date instance of the DateFormat
 * @static
 * @public
 */
sap.ca.ui.model.format.DateFormat.getDateInstance = function(oFormatOptions, oLocale) {
	return this.createInstance(oFormatOptions, oLocale, "Date");
};

/**
 * Get a datetime instance of the DateFormat, which can be used for formatting.
 *
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {string} [oFormatOptions.pattern] a datetime pattern in LDML format. It is not verified whether the pattern represents a full datetime.  
 * @param {string} [oFormatOptions.style] either empty or 'short, 'medium' or 'long'. If no pattern is given, a locale dependent default datetime pattern of that style is used from the LocaleData class.    
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.DateFormat} datetime instance of the DateFormat
 * @static
 * @public
 */
sap.ca.ui.model.format.DateFormat.getDateTimeInstance = function(oFormatOptions, oLocale) {
	return this.createInstance(oFormatOptions, oLocale, "DateTime");
};

/**
 * Get a time instance of the DateFormat, which can be used for formatting.
 *
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {string} [oFormatOptions.pattern] a time pattern in LDML format. It is not verified whether the pattern only represents a time.  
 * @param {string} [oFormatOptions.style] either empty or 'short, 'medium' or 'long'. If no pattern is given, a locale dependent default time pattern of that style is used from the LocaleData class.    
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.DateFormat} time instance of the DateFormat
 * @static
 * @public
 */
sap.ca.ui.model.format.DateFormat.getTimeInstance = function(oFormatOptions, oLocale) {
	return this.createInstance(oFormatOptions, oLocale, "Time");
};

/**
 * Create instance of the DateFormat.
 *
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.DateFormat} time instance of the DateFormat
 * @static
 * @private
 */
sap.ca.ui.model.format.DateFormat.createInstance = function(oFormatOptions, oLocale, sType) {
	// Create an instance of the DateFormat
	var oFormat = jQuery.sap.newObject(this.prototype);
	
	switch (sType) {
		case "Date":
			// Handle optional parameters
			if (! (oFormatOptions instanceof sap.ui.core.Locale) && oFormatOptions) {
				if (oFormatOptions.style && oFormatOptions.style === "daysAgo") {
					oFormatOptions.style = "medium";
					oFormat.daysAgo = true;
				}
			}
			oFormat.innerFormat = sap.ui.core.format.DateFormat.getDateInstance(oFormatOptions, oLocale);
			break;
		case "DateTime":
			oFormat.innerFormat = sap.ui.core.format.DateFormat.getDateTimeInstance(oFormatOptions, oLocale);
			break;
		case "Time":
			oFormat.innerFormat = sap.ui.core.format.DateFormat.getTimeInstance(oFormatOptions, oLocale);
			break;
	}
		
	return oFormat;
};

/**
 * Format a date according to the given format options.
 * 
 * If oValue contains a JSON date ("/Date(milliseconds)/"), it will be converted to a Date before to be formatted.
 *
 * @param {Date|string} oValue the vale to format
 * @param {boolean} bUTC whether to use UTC
 * @return {string} the formatted output value
 * @public
 */
sap.ca.ui.model.format.DateFormat.prototype.format = function(oDate, bUTC) {
	// Convert the date if it's a string from mockup data or from the XSEngine.
	oDate = this.convertToDate(oDate);
	
	if (this.daysAgo && this.daysAgo === true) {
		return this.formatDaysAgo(oDate, bUTC);
	} else {
		return this.innerFormat.format(oDate, bUTC);
	}
};

/**
 * Parse a string which is formatted according to the given format options.
 * The strings specific to the daysAgo style will not be well-parsed.
 *
 * @param {string} sValue the string containing a formatted date/time value
 * @return {Date} the parsed value
 * @public
 */
sap.ca.ui.model.format.DateFormat.prototype.parse = function(oValue) {
	return this.innerFormat.parse(oValue);
};


/**
 * Format a date by indicating the number of calendar days between now and this date (if we are less than 7 days in the past).
 * The medium style will be used else.
 *
 * @param {Date} oDate the date to format
 * @param {boolean} bUTC to indicate if we should compare oDate to now in UTC or not 
 * @return {String} the formatted value
 * @private
 */
sap.ca.ui.model.format.DateFormat.prototype.formatDaysAgo = function(oDate, bUTC) {
	var result; 
	var daysAgo = 0, timePast, oToday = new Date();
	
	var todayYear  = bUTC ? oToday.getUTCFullYear()  : oToday.getFullYear();
	var todayMonth = bUTC ? oToday.getUTCMonth() : oToday.getMonth();
	var todayDate  = bUTC ? oToday.getUTCDate()  : oToday.getDate();

	var dateYear  = bUTC ? oDate.getUTCFullYear()  : oDate.getFullYear();
	var dateMonth = bUTC ? oDate.getUTCMonth() : oDate.getMonth();
	var dateDate  = bUTC ? oDate.getUTCDate()  : oDate.getDate();

	// Use UTC dates to avoid issues with daylight saving time (UTC does not observes DST).
	var todayUTC = Date.UTC(todayYear, todayMonth, todayDate);
	var dateUTC = Date.UTC(dateYear, dateMonth, dateDate);
	timePast = todayUTC.valueOf() - dateUTC.valueOf();
	daysAgo = Math.floor(timePast / (24 * 60 * 60 * 1000));

	if (daysAgo == 0) {
		// Today
		result = sap.ca.ui.utils.resourcebundle.getText("DateFormatter.Today");
	} else if (daysAgo == 1) {
		// Yesterday
		result = sap.ca.ui.utils.resourcebundle.getText("DateFormatter.Yesterday");
	} else if (daysAgo > 1 && daysAgo <=6) {
		// Between 2 and 6 days ago
		result = sap.ca.ui.utils.resourcebundle.getText("DateFormatter.DaysAgo", [ daysAgo ]);
	} else {
		// daysAgo < 0 or daysAgo > 6
		// Format using the medium date style.
		result = this.innerFormat.format(oDate, bUTC);
	}
	
	return result;
	
};

/**
 * Converts a string /Date(milliseconds)/ into a Date
 *
 * @param {Object} sDate the string /Date(milliseconds)/ or Date
 * @return {Date} the Date result object
 * @private
 */
sap.ca.ui.model.format.DateFormat.prototype.convertToDate = function(sDate) {
	var oDate = sDate;
	if (typeof sDate === "string") {
		// Handle the format /Date(milliseconds)/
		if (sDate.indexOf("Date") != -1) {
			sDate = sDate.substring(sDate.indexOf("(") + 1, sDate
					.indexOf(")"));
			sDate = new Number(sDate);
		}
		oDate = new Date(sDate);
	}
	return oDate;
};

