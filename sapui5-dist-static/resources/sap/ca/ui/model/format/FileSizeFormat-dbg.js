/*!
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides class sap.ca.ui.model.format.FileSizeFormat
jQuery.sap.declare("sap.ca.ui.model.format.FileSizeFormat");

jQuery.sap.require("sap.ui.core.LocaleData");
jQuery.sap.require("sap.ca.ui.model.format.FormatHelper");
jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");

/**
 * Constructor for FileSizeFormat - must not be used: To get a FileSizeFormat instance, please use getInstance.
 *
 * @class
 * The FileSizeFormat is a static class for formatting and parsing file size values according
 * to a set of format options.
 *
 * Simplified logic:
 *  display in kB for 1e3 <= bytes < 1e6
 *  display in MB for 1e6 <= bytes < 1e9
 *  ...
 *
 *
 * @public
 */
sap.ca.ui.model.format.FileSizeFormat = function() {
    // Do not use the constructor
    throw new Error();
};


sap.ca.ui.model.format.FileSizeFormat.oValueInfo = {
    oDefaultFormatOptions: {
        style: "short",
        shortDecimals: function (value) { return (Math.abs(value) < 10 ? 1 : 0) }
    }
};


/**
 * Get a instance of the FileSizeFormat, which can be used for formatting.
 *
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {number} [oFormatOptions.shortDecimals] number of decimals to use.
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.FileSizeFormat} instance of the FileSizeFormat
 * @static
 * @public
 */
sap.ca.ui.model.format.FileSizeFormat.getInstance = function(oFormatOptions, oLocale) {
    return this.createInstance(oFormatOptions, oLocale, this.oValueInfo);
};


/**
 * Create instance of the FileSizeFormat.
 *
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.FileSizeFormat} instance of the FileSizeFormat
 * @static
 * @private
 */
sap.ca.ui.model.format.FileSizeFormat.createInstance = function(oFormatOptions, oLocale, oInfo) {
    // Create an instance of the FileSizeFormat
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
    oFormat.oFormatOptions = jQuery.extend(false, {}, oInfo.oDefaultFormatOptions, oFormatOptions);

    oFormat.init();
    return oFormat;
};

/**
 * Initialize format
 */
sap.ca.ui.model.format.FileSizeFormat.prototype.init = function() {
};


/**
 * Format according to the given format options.
 *
 * @param {FileSize} oValue the value to format
 * @return {string} the formatted output value
 * @public
 */
sap.ca.ui.model.format.FileSizeFormat.prototype.format = function(oValue) {

    // Simplified logic:
    //  display in kB for 1e3 <= bytes < 1e6
    //  display in MB for 1e6 <= bytes < 1e9
    //  ...
    var numBytes = sap.ca.ui.model.format.FormatHelper.toNumeric(oValue);
    if (!isFinite(numBytes)) {
        return "";
    }
    var formatOptions = sap.ca.ui.model.format.FormatHelper.getFormatOptions(this.oFormatOptions);
    var result = "";
    if (isFinite(numBytes)) {
        numBytes = numBytes.toFixed(0); // support only integer number of bytes
        var mag = sap.ca.ui.model.format.FormatHelper.getMagnitude(numBytes);
        if (mag.value == 1) {
            if (Math.abs(numBytes) < 2) {
                // non-breaking space
                result = numBytes + "\u00A0" +  sap.ca.ui.utils.resourcebundle.getText("FileSize.Byte");
            }
            else {
                result = numBytes + "\u00A0" +  sap.ca.ui.utils.resourcebundle.getText("FileSize.Bytes");
            }
        }
        else {
            formatOptions.formatStyle = "short";
            var roundedValue = sap.ca.ui.model.format.FormatHelper.roundNumber(numBytes / mag.value, formatOptions);
            if ((mag.value < 1e24) && (Math.abs(roundedValue) >= 1000)) {
                // Rounding may induce a change of scale.
                mag = sap.ca.ui.model.format.FormatHelper.getMagnitude(roundedValue * mag.value);
                roundedValue = sap.ca.ui.model.format.FormatHelper.roundNumber(numBytes / mag.value, formatOptions);
            }
            result = sap.ca.ui.model.format.FormatHelper.formatNumber(roundedValue, formatOptions);
            result += "\u00A0" +  sap.ca.ui.utils.resourcebundle.getText("FileSize." + mag.suffix + "bytes");
        }
    }
    return result
};


/**
 * Parse a string which is formatted according to the given format options.
 *
 * @param {string} sValue the string containing a formatted value
 * @return {number} the parsed value
 * @public
 */
sap.ca.ui.model.format.FileSizeFormat.prototype.parse = function(sValue) {
    var formatter = sap.ca.ui.model.format.NumberFormat.getInstance(this.oFormatOptions, this.oLocale);
    return formatter.parse(sValue);
};