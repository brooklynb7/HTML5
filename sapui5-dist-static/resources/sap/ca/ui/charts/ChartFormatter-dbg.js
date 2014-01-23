jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");
jQuery.sap.require("sap.ca.ui.model.type.Date");

// Default formatting functions
sap.ca.ui.charts.DefaultFormatterFunction = {
    SHORTNUMBER: "ShortNumber",
    STANDARDNUMBER: "StandardNumber",
    SHORTDATE: "ShortDate",
    MEDIUMDATE: "MediumDate",
    LONGDATE: "LongDate",
    DAYSAGODATE: "DaysAgoDate"
};

sap.ca.ui.charts.ChartFormatter = function () {
    if (sap.ca.ui.charts.ChartFormatter.caller != sap.ca.ui.charts.ChartFormatter.getInstance) {
        throw new Error("This object cannot be instantiated");
    }
    this.formatFunctions = [];
};

sap.ca.ui.charts.ChartFormatter.getInstance = function () {
    if (!this.instance) {
        this.instance = new sap.ca.ui.charts.ChartFormatter();
    }
    return this.instance;
};

sap.ca.ui.charts.ChartFormatter.prototype.addFormatter = function (oChart, sLabel, formatter) {
    /*
      viz formatting is based on format strings:
      If a format string is specified on a label or tooltip, the global formatting function
      will be called with 2 params :  value to format, format string.
      Thus when a new formatter is added, we return the format string that must be added
      on chart label.
      In the global formatting function (format), we just call the formatter associated
      to the format string
     */

    if (typeof formatter != "string" && typeof formatter != "function") {
        jQuery.sap.log.error("Cannot add formatter : formatter must be a string or a function");
        return null;
    }

    if (oChart && sLabel) {
        //build a format string for the chart and label
        var formatString = this._getFormatString(oChart, sLabel, formatter);
        //register the formmatter for this format string
        this._pushToFormatFunctions(formatString, formatter);
        this._customizeFormatter();
        //return format string to calling chart
        return formatString;
    }
    else {
        jQuery.sap.log.error("Cannot add formatter : chart and label must be set");
        return null;
    }
};

// Set our global formatting function as viz formatting function
sap.ca.ui.charts.ChartFormatter.prototype._customizeFormatter = function () {
    sap.viz.api.env.Format.numericFormatter(this);
};

sap.ca.ui.charts.ChartFormatter.prototype.format = function (value, formatString) {
    if (formatString) {
        if (this.formatFunctions[formatString]) {
            return this.formatFunctions[formatString](value);
        }
        else {
            var formattedValue;
            if (this._legacyBubbleFormatter != null && typeof _legacyBubbleFormatter == "function") {
                formattedValue =  _legacyBubbleFormatter(value, formatString);
                if (formattedValue && formattedValue != value) {
                    return formattedValue;
                }
            }
            return value;
        }
    } else {
        return value;
    }
};

sap.ca.ui.charts.ChartFormatter.prototype._getFormatString = function (oChart, sLabel, formatter) {
    var formatString="";
    //if formatter is a default formatting function, we just return the string id of this function.
    //No need to prefix it with chart id, as we don't want to duplicate default formatting functions
    if (typeof formatter == "string") {
        formatString = formatter;
    }
    //for custom formatting functions, we return "Chart id+ slabel"
    //we don't check for uniqueness of sLabel : chart may want to use the same formatter for different labels.
    else {
        formatString = oChart.getId() + sLabel;
    }
    return formatString;
};

sap.ca.ui.charts.ChartFormatter.prototype._pushToFormatFunctions = function (formatString, formatter) {
    //default formatters
    if (typeof formatter == "string") {
        switch (formatter) {
            case sap.ca.ui.charts.DefaultFormatterFunction.SHORTNUMBER :
                if (!this.formatFunctions[formatString])this.formatFunctions[formatString] = this._getShortNumberFormatter();
                break;
            case sap.ca.ui.charts.DefaultFormatterFunction.STANDARDNUMBER :
                if (!this.formatFunctions[formatString])this.formatFunctions[formatString] = this._getStandardNumberFormatter();
                break;
            case sap.ca.ui.charts.DefaultFormatterFunction.SHORTDATE :
                if (!this.formatFunctions[formatString])this.formatFunctions[formatString] = this._getShortDateFormatter();
                break;
            case sap.ca.ui.charts.DefaultFormatterFunction.MEDIUMDATE :
                if (!this.formatFunctions[formatString])this.formatFunctions[formatString] = this._getMediumDateFormatter();
                break;
            case sap.ca.ui.charts.DefaultFormatterFunction.LONGDATE :
                if (!this.formatFunctions[formatString])this.formatFunctions[formatString] = this._getLongDateFormatter();
                break;
            case sap.ca.ui.charts.DefaultFormatterFunction.DAYSAGODATE :
                if (!this.formatFunctions[formatString])this.formatFunctions[formatString] = this._getDaysAgoDateFormatter();
                break;
        }
    }
    //custom formatters
    else {
        this.formatFunctions[formatString] = formatter;
    }

};

/**
 *  ==============================================
 *  Implementation of default formatting functions
 *  ==============================================
 **/

sap.ca.ui.charts.ChartFormatter.prototype._getShortNumberFormatter = function () {
    var numberFormatter = sap.ca.ui.model.format.NumberFormat.getInstance({style: 'short'});
    return jQuery.proxy(numberFormatter.format, numberFormatter);
};

sap.ca.ui.charts.ChartFormatter.prototype._getStandardNumberFormatter = function () {
    var numberFormatter = sap.ca.ui.model.format.NumberFormat.getInstance({style: 'Standard'});
    return jQuery.proxy(numberFormatter.format, numberFormatter);
};

/**
 * As viz charts only accept number values, the following date formatters are designed
 * to work with dates expressed as timestamps (number of milliseconds since 01/01/1970).
 * Use Date.getTime() to get this timestamp from a date.
 */
sap.ca.ui.charts.ChartFormatter.prototype._getShortDateFormatter = function () {
    var formatDate = function(value) {
        if (!this.shortDateType) {
            this.shortDateType = new sap.ca.ui.model.type.Date({style: 'short',source: {pattern: "timestamp"}});
        }
        return this.shortDateType.formatValue(value,"string");
    };
    return jQuery.proxy(formatDate, this);
};

sap.ca.ui.charts.ChartFormatter.prototype._getMediumDateFormatter = function () {
    var formatDate = function(value) {
        if (!this.mediumDateType) {
            this.mediumDateType = new sap.ca.ui.model.type.Date({style: 'medium',source: {pattern: "timestamp"}});
        }
        return this.mediumDateType.formatValue(value,"string");
    };
    return jQuery.proxy(formatDate, this);
};

sap.ca.ui.charts.ChartFormatter.prototype._getLongDateFormatter = function () {
    var formatDate = function(value) {
        if (!this.longDateType) {
            this.longDateType = new sap.ca.ui.model.type.Date({style: 'long',source: {pattern: "timestamp"}});
        }
        return this.longDateType.formatValue(value,"string");
    };
    return jQuery.proxy(formatDate, this);
};

sap.ca.ui.charts.ChartFormatter.prototype._getDaysAgoDateFormatter = function () {
    var formatDate = function(value) {
        if (!this.daysAgoDateType) {
            this.daysAgoDateType = new sap.ca.ui.model.type.Date({style: 'daysAgo',source: {pattern: "timestamp"}});
        }
        return this.daysAgoDateType.formatValue(value,"string");
    };
    return jQuery.proxy(formatDate, this);
};
