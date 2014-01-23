/*!
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides class sap.ca.ui.model.format.QuantityFormat
jQuery.sap.declare("sap.ca.ui.model.format.QuantityFormat");

jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");
jQuery.sap.require("sap.ui.core.format.NumberFormat");
jQuery.sap.require("sap.ui.core.LocaleData");
jQuery.sap.require("sap.ca.ui.model.format.FormatHelper");

/**
 * Constructor for QuantityFormat - must not be used: To get a QuantityFormat instance, please use getInstance.
 *
 * @class
 * The QuantityFormat is a static class for formatting and parsing file size values according
 * to a set of format options.
 *
 * If no pattern is specified a default pattern according to the locale settings is used.
 *
 * @public
 */
sap.ca.ui.model.format.QuantityFormat = function() {
    // Do not use the constructor
    throw new Error();
};


sap.ca.ui.model.format.QuantityFormat.oValueInfo = {
    oDefaultFormatOptions: {
        style: "standard",
        minFractionDigits: 0
    }
};

/*
 JSON Model containing NW default definition of number of decimals to use per Unit.
 As this is the NW default definition (without customization) standard definition, it is shared between all apps.
 It will be loaded with  model/unit.json file the first time it's requested.
 */
sap.ca.ui.model.format.QuantityFormat.oQuantityModel = null;

/**
 * Get a instance of the QuantityFormat, which can be used for formatting.
 *
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {string} [oFormatOptions.style] either empty or 'standard or 'short'. If no pattern is given, a locale dependent default pattern of that style is used from the LocaleData class.
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.QuantityFormat} instance of the QuantityFormat
 * @static
 * @public
 */
sap.ca.ui.model.format.QuantityFormat.getInstance = function(unitCode, oFormatOptions, oLocale) {
    return this.createInstance(unitCode, oFormatOptions, oLocale, this.oValueInfo);
};


/**
 * Create instance of the QuantityFormat.
 *
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.QuantityFormat} time instance of the QuantityFormat
 * @static
 * @private
 */
sap.ca.ui.model.format.QuantityFormat.createInstance = function(unitCode, oFormatOptions, oLocale, oInfo) {
    // Create an instance of the QuantityFormat
    var oFormat = jQuery.sap.newObject(this.prototype);

    // Handle optional parameters
    if ( oFormatOptions instanceof sap.ui.core.Locale ) {
        oLocale = oFormatOptions;
        oFormatOptions = undefined;
    }

    // Get Locale and LocaleData to use
    if (!oLocale) {
        oFormat.oLocale = sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale();
    }
    else{
        oFormat.oLocale = new sap.ui.core.Locale(oLocale);
    }
    oFormat.oLocaleData = sap.ui.core.LocaleData.getInstance(oFormat.oLocale);

    // Extend the default format options with custom format options
    oFormat.oFormatOptions = jQuery.extend(false, {}, oInfo.oDefaultFormatOptions, oFormatOptions);

    oFormat.init(unitCode, oFormatOptions);

    return oFormat;
};

/**
 * Initialize unit format
 */
sap.ca.ui.model.format.QuantityFormat.prototype.init = function(unitCode, oFormatOptions) {
    // Rules Decimals "Precedence": if decimals are options defined it should override default and currency (defined)
    if(oFormatOptions){
        if(oFormatOptions.minFractionDigits != undefined){
            this.oFormatOptions.minFractionDigits = sap.ca.ui.model.format.FormatHelper.toNumeric(oFormatOptions.minFractionDigits);
            return;
        }
    }
    if(unitCode){
        //load model with unit formatting exceptions
        if (!sap.ca.ui.model.format.QuantityFormat.oQuantityModel) {
            sap.ca.ui.model.format.QuantityFormat.oQuantityModel = new sap.ui.model.json.JSONModel();
            var path = jQuery.sap.getModulePath("sap.ca.ui");
            sap.ca.ui.model.format.QuantityFormat.oQuantityModel.loadData(path + "/model/unit.json", "", false);
        }
        var data = sap.ca.ui.model.format.QuantityFormat.oQuantityModel.getData();
        var len =  data.length;
        var i = 0, stop = 0;
        for (i = 0; i < len; i++) {
            if (data[i].ISOCode === unitCode) {
                this.oFormatOptions.minFractionDigits = data[i].Decimals;
                stop = 1;
                return;
            }
        }
        // in case we didn't find the code it might be
         for (i = 0; i < len; i++) {
            if (data[i].Code === unitCode) {
                this.oFormatOptions.minFractionDigits = data[i].Decimals;
                break;
            }
        }
    }
};


/**
 * Format a value according to the given format options.
 *
 * @param {object} oValue the value to format
 * @return {string} the formatted output value
 * @public
 */
sap.ca.ui.model.format.QuantityFormat.prototype.format = function(oValue) {
    // defer number formatting so that so can benefit from other options
    if(this.oFormatOptions.style === "short"){
        this.oFormatOptions.decimals = this.oFormatOptions.minFractionDigits;
        return sap.ca.ui.model.format.NumberFormat.getInstance(this.oFormatOptions, this.oLocale).format(oValue);
    }
    else{
        var numValue  = sap.ca.ui.model.format.FormatHelper.toNumeric(oValue);
        if (!isFinite(numValue)) {
            return "";
        }

        var str, n, count = 0;
        var extraPrecision = 3; // We only accept three more digits

        if (numValue > 1e20) {
            return sap.ca.ui.model.format.QuantityFormat.getInstance({style:"short"}).format(numValue);
        }
        else {
            str = numValue.toFixed(this.oFormatOptions.minFractionDigits + extraPrecision);
            // Remove trailing 0's but not
            n = str.length - 1;
            while (str.charAt(n) === '0' && count <= extraPrecision ) {
                ++count;
                --n;
            }
            str = str.substring(0, n + 1);
            return sap.ui.core.format.NumberFormat.getInstance(this.oFormatOptions, this.oLocale).format(str);
        }
    }
};


/**
 * Parse a string which is formatted according to the given format options.
 *
 * @param {string} sValue the string containing a formatted value
 * @return {number} the parsed value
 * @public
 */
sap.ca.ui.model.format.QuantityFormat.prototype.parse = function(sValue) {
    var formatter = sap.ca.ui.model.format.NumberFormat.getInstance(this.oFormatOptions, this.oLocale);
    return formatter.parse(sValue);
};

/**
 * Convenience static function
 * Format an quantity in short Style.
 * Number of decimals will be set :
 *          Using Decimals if specified
 *          else using the standard number of decimal for the given unit
 *
 * @param {string} sValue the string containing a formatted value
 * @param {string} unitCode
 * @param {string} decimals
 * @return {string} the formatted value
 * @public
 */
sap.ca.ui.model.format.QuantityFormat.FormatQuantityShort = function(oValue, unitCode, minFractionDigits) {
    return sap.ca.ui.model.format.QuantityFormat.getInstance(unitCode, {style: "short", minFractionDigits: minFractionDigits}).format(oValue);
};

/**
 * Convenience static function
 * Format an quantity in standard Style.
 * Number of decimals will be set :
 *          Using Decimals if specified
 *          else using the standard number of decimal for the given unit
 *
 * @param {string} sValue the string containing a formatted value
 * @param {string} unitCode
 * @param {string} decimals
 * @return {string} the formatted value
 * @public
 */
sap.ca.ui.model.format.QuantityFormat.FormatQuantityStandard = function(oValue, unitCode, minFractionDigits) {
    return sap.ca.ui.model.format.QuantityFormat.getInstance(unitCode, {style:"standard", minFractionDigits:minFractionDigits}).format(oValue);
};