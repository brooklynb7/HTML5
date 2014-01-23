/*!
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides class sap.ca.ui.model.format.NumberFormat
jQuery.sap.declare("sap.ca.ui.model.format.NumberFormat");

jQuery.sap.require("sap.ui.core.LocaleData");
jQuery.sap.require("sap.ca.ui.model.format.FormatHelper");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");

/**
 * Constructor for NumberFormat - must not be used: To get a NumberFormat instance, please use getInstance.
 *
 * @class
 * The NumberFormat is a class for formatting and parsing number values according
 * to a set of format options.
 * If no pattern is specified a default pattern according to the locale settings is used.
 *
 * The sap.ca NumberFormat has the following differences with UI5 sap.ui.core.format.NumberFormat
 *    - A style formatOptions has been added with 2 styles:
 *       - standard
 *       - short :  12345 formatted as 1.2 K (based on CLDR decimalFormat-short specifications)
 *    - UI5 MaxFractionDigit and MinFractionDigit options have been replaced with a single
 *      decimals format option which specifies the exact number of decimals that will be
 *      displayed
 *    - A shortDecimal FormatOption has been added which applies only in short style
 *    - rounding has been improved
 *
 */
sap.ca.ui.model.format.NumberFormat = function() {
    // Do not use the constructor
    throw new Error();
};


sap.ca.ui.model.format.NumberFormat.oValueInfo = {
    oDefaultFormatOptions: {
        style: "standard"
    }
};


/**
 * @see sap.ui.core.format.NumberFormat.getInstance
 */
sap.ca.ui.model.format.NumberFormat.getInstance = function(oFormatOptions, oLocale) {
    return this.createInstance(oFormatOptions, oLocale, this.oValueInfo);
};


/**
 * Create instance of the NumberFormat.
 *
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {string} [oFormatOptions.style] style to use to format number : "short" or "standard".
 * @param {number} [oFormatOptions.decimals] number of decimals to display in standard style.
 * @param {number} [oFormatOptions.shortDecimals] number of decimals to display in short style.
 * @param {object} [oFormatOptions.*] All sap.ui.core.format.NumberFormat formatOptions are also supported
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.NumberFormat} instance of the NumberFormat
 * @static
 * @private
 */
sap.ca.ui.model.format.NumberFormat.createInstance = function(oFormatOptions, oLocale, oInfo) {
    // Create an instance of the NumberFormat
    var oFormat = jQuery.sap.newObject(this.prototype);

    // Handle optional parameters
    if ( oFormatOptions instanceof sap.ui.core.Locale ) {
        oLocale = oFormatOptions;
        oFormatOptions = undefined;
    }

    // Get Locale and LocaleData to use
    if (!oLocale) {
        oLocale = sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale();
    }
    oFormat.oLocale = oLocale;
    oFormat.oLocaleData = sap.ui.core.LocaleData.getInstance(oLocale);

    // Extend the default format options with custom format options
    oFormat.oFormatOptions  = jQuery.extend(false, {}, oInfo.oDefaultFormatOptions, oFormatOptions);
    oFormat.oFormatOptions.formatStyle = "standard";

    oFormat.init();
    return oFormat;
};

/**
 * Initialize format
 */
sap.ca.ui.model.format.NumberFormat.prototype.init = function() {

};


/**
 * Format a number according to the given format options.
 *
 * @param {Number} oValue the value to format
 * @return {string} the formatted output value
 * @public
 */
sap.ca.ui.model.format.NumberFormat.prototype.format = function(oValue) {

    var result = "";

    // resolve format style
    var formatter = "format_" + this.oFormatOptions.style;
    if (this[formatter]) {
        result = this[formatter](oValue);
    }
    else {
        // fallback
        result = this.format_standard(oValue);
    }

    return result;
};

sap.ca.ui.model.format.NumberFormat.prototype.format_standard = function (oValue) {
    // pass the value and format options
    var formatOptions = sap.ca.ui.model.format.FormatHelper.getFormatOptions(this.oFormatOptions, this.oLocale);
    return sap.ca.ui.model.format.FormatHelper.formatNumber(oValue, formatOptions);
};


sap.ca.ui.model.format.NumberFormat.prototype.format_short = function (oValue) {
    var formatOptions;
    var shortCldrFormats;
    var shortFormat;

    // returns a shortFormat object extracted from cldr short decimal format containing
    //  - magnitude : the number by which value should be divided to get the short value
    //  - formatString : the cldr format string, e.g. "0.0 K"
    //  - valueSubString : the substring to replace with the actual value in this formatString, e.g. "0.0"
    //  - decimals : number of decimals used in this format string. E.g. 1 for "0.0 K", 0 for "000 M"
    //
    // Example of cldr short decimal format for japanese.
    //        "decimalFormat-short":{
    //            "1000":"0",
    //             "10000":"0.0万",
    //             "100000":"00万",
    //             "1000000":"000万",
    //             "10000000":"0000万",
    //             "100000000":"0.0億",
    //             "1000000000":"00億",
    //             "10000000000":"000億",
    //             "100000000000":"0000億",
    //             "1000000000000":"0.0兆",
    //             "10000000000000":"00兆",
    //             "100000000000000":"000兆"}

    function getShortFormat(value) {
        var shortFormat;

          if (!shortCldrFormats) {
            shortCldrFormats = sap.ui.core.LocaleData.getInstance(formatOptions.locale)._get("decimalFormat-short");
            if (!shortCldrFormats){
                var sdLocale = new sap.ui.core.Locale("en");
                shortCldrFormats = sap.ui.core.LocaleData.getInstance(sdLocale)._get("decimalFormat-short");
            }
        }

        if (shortCldrFormats) {
            var key = 1;
            while( Math.abs(value) >= key*10 && key < 1e14) {
                key = key*10;
            }

            var shortCldrFormat = shortCldrFormats[key.toString()];
            shortFormat = {};
            if (!shortCldrFormat ||  shortCldrFormat == "0") {
                //no short format or special "0" format => number doesn't need to be shortified
                shortFormat.magnitude = 1;
            }
            else {
                shortFormat.formatString = shortCldrFormat;
                var match = shortCldrFormat.match(/0+\.*0*/);
                if (match) {
                    //to get magnitude, we need to remove from key the number of zeros
                    //contained in valueSubString before decimal separator minus 1
                    //    "0.0" => magnitude = key
                    //    "00"  => magnitude = key / 10
                    //    "000" => magnitude = key / 100
                    shortFormat.valueSubString = match[0];
                    var decimalSeparatorPosition =  shortFormat.valueSubString.indexOf(".");
                    if (decimalSeparatorPosition == -1) {
                        shortFormat.decimals = 0;
                        shortFormat.magnitude = key * Math.pow(10,1-shortFormat.valueSubString.length);
                    }
                    else {
                        shortFormat.decimals = shortFormat.valueSubString.length -  decimalSeparatorPosition -1;
                        shortFormat.magnitude = key * Math.pow(10,1-decimalSeparatorPosition);
                    }
                }
                else {
                    //value pattern has not be recognized
                    //we cannot shortify
                    shortFormat.magnitude = 1;
                }
            }
        }
        return shortFormat;
    }

    var numValue = sap.ca.ui.model.format.FormatHelper.toNumeric(oValue);
    if (!isFinite(numValue)) {
        return "";
    }
    var result = "";
    formatOptions = sap.ca.ui.model.format.FormatHelper.getFormatOptions(this.oFormatOptions, this.oLocale);

    //we first need to get the magnitude: ie the number by which value should be divided to get the short value
    //this is locale dependant and must then be extracted from cldr data:
    //   - in western languages, value will be divided by powers of 1000 (K, M, G, T...)
    //   - in japanese, value will be divided by powers of 10000.
    shortFormat = getShortFormat(numValue);
    //no short format has been found for value and locale, use standard format
    if (!shortFormat) {
        return this.format_standard(oValue);
    }
    var shortValue =  numValue / shortFormat.magnitude;

    // shortValue must first be rounded as rounding may induce a change of scale (999.999 = "1.0 K" if decimals <3).
    // Number of decimals to use for rounding is:
    //    - decimals if magnitude == 1 (number not "shortified")
    //    - else shortDecimals if specified
    //    - else number of decimal of the CLDR "decimalFormat-short" pattern
    var roundingOptions = {};
    roundingOptions.shortRounding = formatOptions.shortRounding;
    roundingOptions.rounding = formatOptions.rounding;
    if (shortFormat.magnitude == 1) {
        roundingOptions.formatStyle  = "standard";
        roundingOptions.decimals =  formatOptions.decimals;
    }
    else if (formatOptions.shortDecimals){
        roundingOptions.formatStyle  = "short";
        roundingOptions.shortDecimals = formatOptions.shortDecimals;
    }
    else {
        roundingOptions.formatStyle  = "short";
        roundingOptions.shortDecimals = shortFormat.decimals;
    }

    shortValue = sap.ca.ui.model.format.FormatHelper.roundNumber(shortValue, roundingOptions);

    //Rounding may have changed the magnitude, so we recompute it.
    shortFormat = getShortFormat(shortValue*shortFormat.magnitude);

    //magnitude = 1 means that number doesn't need to be shortified, standard format must be applied
    if (!shortFormat || shortFormat.magnitude == 1 ) {
        result = this.format_standard(oValue);
    }
    else {
        //Recompute short value with updated magnitude
        shortValue = sap.ca.ui.model.format.FormatHelper.roundNumber(numValue / shortFormat.magnitude, roundingOptions);

        //We have now have the correct shortValue, formatting can be done
        //   - if shortDecimals has not been explicitly given
        //   - get it from shortFormat
        if (!formatOptions.shortDecimals) {
            formatOptions.shortDecimals =  shortFormat.decimals;
        }
        //format the shortValue
        formatOptions.formatStyle = "short";
        result = sap.ca.ui.model.format.FormatHelper.formatNumber(shortValue, formatOptions);
        //inject formatted shortValue in the formatString
        result = shortFormat.formatString.replace(shortFormat.valueSubString,result);
        //formatString may contain '.' (quoted to differentiate them decimal separator)
        //which must be replaced with .
        result = result.replace(/'.'/g, ".");

    }
    return result;
};


/**
 * Parse a string which is formatted according to the given format options.
 *
 * @param {string} sValue the string containing a formatted value
 * @return {number} the parsed value
 * @public
 */
sap.ca.ui.model.format.NumberFormat.prototype.parse = function(sValue) {
    var formatter = sap.ui.core.format.NumberFormat.getInstance(this.oFormatOptions, this.oLocale);
    return formatter.parse(sValue);
};


/**
 * Format a value with the percent according to the cldr currency format.
 *
 * @param {sValue} the string containing a value
 * @return {string} the formatted value
 * @public
 */
sap.ca.ui.model.format.NumberFormat.prototype.format_percentage = function(sValue) {
    var result;
    // Default decimals value set to zero, else decimals is left unchanged
    if(this.oFormatOptions.decimals === undefined){
        this.oFormatOptions.decimals = 0;
    }
    // Multiply the decimal by 100
    var numValue = sap.ca.ui.model.format.FormatHelper.toNumeric(sValue);
    numValue = numValue*100.;
    // Format the value itself
    var formattedValue = this.format_standard(numValue);
    // We fetch the cldr percent format associated with the locale
    var percentCldrFormats = sap.ui.core.LocaleData.getInstance(this.oLocale)._get("percentFormat");
    if (!percentCldrFormats){
        // The fallback cldr percent format is the one associated with "en" locale
        var sdLocale = new sap.ui.core.Locale("en");
        percentCldrFormats = sap.ui.core.LocaleData.getInstance(sdLocale)._get("percentFormat");
    }

    var standard = percentCldrFormats["standard"];
    if (standard === undefined || standard == "") {
        result = formattedValue;
        jQuery.sap.log.error("no percent format available for the current locale");
    }
    else {
        // Example of a typical cldr percent format
        //
        // "percentFormat" : {"standard" : "#,##0%" }
        var valuePattern = /[\.0,#]+/;
        // The % symbol may change position, but must be retained.
        var tmp = standard.replace(valuePattern, formattedValue);
        // We retrieve the % symbol
        var percentSign = sap.ui.core.LocaleData.getInstance(this.oLocale)._get("symbols-latn-percentSign");
        if (!percentSign){
            // The fallback cldr % symbol is the one associated with "en" locale
            var sdLocale = new sap.ui.core.Locale("en");
            percentSign = sap.ui.core.LocaleData.getInstance(sdLocale)._get("symbols-latn-percentSign");
        }
        result = tmp.replace(/\u0025/, percentSign);
    }
    return result;
};