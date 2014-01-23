/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.me.CalendarRenderer");

jQuery.sap.require("sap.ui.core.LocaleData");
jQuery.sap.require("sap.ui.core.format.DateFormat");

/**
 * @class Calendar renderer.
 * @static
 */
sap.me.CalendarRenderer = {
};

sap.me.CalendarRenderer.render = function (oRm, oControl) {
    if (!oControl.getVisible())
        return;

    oRm.write("<div");
    oRm.writeControlData(oControl);
    oRm.addClass("sapMeCalendar");
    var sClass = "sapMeCalendar" + oControl.getDesign();
    oRm.addClass(sClass);
    oRm.writeClasses();
    var w = oControl.getWidth();
    if (w != undefined) {
        oRm.addStyle("width", w);
        oRm.writeStyles();
    }
    oRm.write(">");

    oRm.renderControl(oControl._oPrevBtn);
    oRm.renderControl(oControl._oNextBtn);

    var bSingleRow = oControl.getSingleRow();

    var sCurrentDate = oControl.getCurrentDate();
    var iMonths = bSingleRow ? 1 : oControl.getMonthsToDisplay();
    var oNow = new Date();
    var sNow = oNow.toDateString(); // so it is same time as other dates
    var i;
    if (iMonths === 1) {
        this._renderMonth(oRm, oControl, sCurrentDate, sNow);
    }
    else {
        var currentDate = new Date(sCurrentDate);
        var iMonthToGoBack = Math.floor(iMonths / 2);
        for (i = 0; i < iMonthToGoBack; i++) { // we go first back in time
            currentDate.setDate(0); // last day of month
            currentDate.setDate(1); // go to its first day
        }
        for (i = 0; i < iMonths; i++) {
            this._renderMonth(oRm, oControl, currentDate.toDateString(), sNow);
            currentDate.setDate(32); // go to next month
            currentDate.setDate(1); // go to its first day
        }
    }

    oRm.write("</div>"); // sapMeCalendar DIV
};

/**
 * Returns the interval format with the given Id (see CLDR documentation for valid Ids)
 * or the fallback format if no interval format with that Id is known.
 * Note: This is done using a <B>private</B> method of LocaleData.
 *
 * The empty Id ("") might be used to retrieve the interval format fallback.
 *
 * TODO: in 1.17: delete this method and replace this call:
 *      this._getIntervalPattern(oLocaleData, sPatternId);
 * by this:
 *      oLocaleData.getIntervalPattern(sPatternId);
 *
 * @see https://git.wdf.sap.corp:8080/308949
 *
 * @param {sap.ui.core.LocaleData} oLocaleData
 * @param {string} sPatternId Id of the interval format, e.g. "d-d"
 *
 * @returns {string} interval format string with placeholders {0} and {1}
 *
 * @private
 * @experimental Since 1.16.4
 */
sap.me.CalendarRenderer._getIntervalPattern = function (oLocaleData, sPatternId) {
    var sPattern = "";

    if (oLocaleData !== undefined && oLocaleData !== null) {
        sPattern = (sPatternId && oLocaleData._get("intervalFormat-" + sPatternId)) || oLocaleData._get("intervalFormatFallback");
    }

    if (!sPattern) {
        if (sap.ui.getCore().getConfiguration().getRTL()) {
            sPattern = "{1} - {0}";
        } else {
            sPattern = "{0} - {1}";
        }
    }

    return sPattern;
};

/**
 * Formats a given date according to a given pattern.
 *
 * @param oDate The date to format
 * @param sPattern the pattern to use to format the date
 *
 * @return {String} The formatted date string
 *
 * @private
 */
sap.me.CalendarRenderer._formatDate = function (oDate, sPattern) {
    var dateInstance = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:sPattern});
    return dateInstance.format(oDate);
};

/**
 * Formats a date interval according to the given dates.
 *
 * @param oDate1 First date of the interval
 * @param oDate2 Second date
 * @param sPattern The pattern to use
 *
 * @return {string} The formatted date interval string.
 *
 * @private
 * @experimental Since 1.16.4
 */
sap.me.CalendarRenderer._getDateIntervalText = function (oDate1, oDate2, sPattern) {
    var oLocale = sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale();
    var oLocaleData = sap.ui.core.LocaleData.getInstance(oLocale);
    var orDate1, orDate2;
    if (oDate1.getTime() <= oDate2.getTime()) {
        orDate1 = oDate1;
        orDate2 = oDate2;
    } else {
        orDate1 = oDate2;
        orDate2 = oDate1;
    }
    // in enUS: intervalFormat-yMMM-y: "MMM y – MMM y"
    var sIntervalPattern = this._getIntervalPattern(oLocaleData, sPattern);

    // intervalFormatFallback: "{0} – {1}"
    var sFallbackPattern = this._getIntervalPattern(oLocaleData, "");

    // The separator that looks like -, but is in fact String.fromCharCode(8211), might be something else in other languages.
    // Assumption: this character is unique in the format string
    // It's not a "-" in:
    //      bn          unicode
    //      es_*        "a el",
    //      fa          the format looks like it's missing an opening curly bracket,
    //      fr_be       "au"
    //      fr_ch       "au"
    //      ja          tilde
    //      root        unicode (looks similar to bn)
    //      zh_Hans_SG  unicode symbol
    //      sh_Hant     unicode symbol
    var sIntervalSeparator = sFallbackPattern.replace("{0}", "").replace("{1}", "").trim();

    // split the pattern on the separator => 2 elements in the array, left pattern, right pattern.
    var aPatterns = sIntervalPattern.split(sIntervalSeparator);

    // The potential whitespaces (trimmed earlier) around the separator are in the patterns in the array.
    return this._formatDate(orDate1, aPatterns[0]) + sIntervalSeparator + this._formatDate(orDate2, aPatterns[1]);
};

/**
 * Only for Fiori2/wave2 use, until the official implementation is available.
 *
 * @deprecated This will most likely return an invalid date string for the Islamic calendar.
 * Since Arabic is not supported in Fiori2, I've been coerced into coding it.
 *
 * @param oDate The date to format using this pattern: "MMM y"
 *
 * @return {string} The formatted date as a string.
 *
 * @private
 */
sap.me.CalendarRenderer._getMonthAndYear = function (oDate) {
    var oLocale = sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale();
    var oLocaleData = sap.ui.core.LocaleData.getInstance(oLocale);
    var sPattern = this._getIntervalPattern(oLocaleData, "yMMM-y");
    var sFallbackPattern = this._getIntervalPattern(oLocaleData, "");
    var sIntervalSeparator = sFallbackPattern.replace("{0}", "").replace("{1}", "").trim();
    var aPatterns = sPattern.split(sIntervalSeparator);

    return this._formatDate(oDate, aPatterns[0]);
};

sap.me.CalendarRenderer._renderMonth = function (oRm, oControl, sMonthDate, sDateNow) {
    var bSingleRow = oControl.getSingleRow();
    var iFirstDayOffset = oControl.getFirstDayOffset();
    var aWeekDays = oControl.getDays();
    var iWeekDays = aWeekDays.length;
    var iWeeksPerRow = oControl.getWeeksPerRow();
    var iDaysInRow = iWeeksPerRow * iWeekDays;
    var iDayWidth = (100 / iDaysInRow);
    var iDayHeight = oControl.getDayHeight();
    var iMonthWidth = (100 / (bSingleRow ? 1 : oControl.getMonthsPerRow()));

    var currentDate = new Date(sMonthDate);
    var iCurrentDate = currentDate.getDate();
    var iCurrentDay = currentDate.getDay();

    currentDate.setDate(1); // go to first day of month
    var iMonthFirstDay = currentDate.getDay();
    if (iMonthFirstDay < iFirstDayOffset) {
        iMonthFirstDay += 7;
    }
    var iCurrentMonth = currentDate.getMonth();
    var dateForNbOfDaysInThisMonth = new Date(currentDate.getYear(), iCurrentMonth + 1, 0);
    var nbOfDaysInThisMonth = dateForNbOfDaysInThisMonth.getDate();

    var iDaysToGoBack = bSingleRow ? iCurrentDay + 1 - iFirstDayOffset : iCurrentDate + iMonthFirstDay - iFirstDayOffset;

    var nbOfRows = Math.ceil((nbOfDaysInThisMonth + iDaysToGoBack - iCurrentDate) / 7);
    var iTotalDays = bSingleRow ? iDaysInRow : (nbOfRows * 7);

    // default title (in en_US, for instance): MMM y
    var sMonthTitle = this._getMonthAndYear(currentDate);
    currentDate.setDate(iCurrentDate - iDaysToGoBack + 1);

    if (bSingleRow) {
        var tempDate = new Date(currentDate.getTime());
        tempDate.setDate(tempDate.getDate() + iTotalDays - 1);

        // change the displayed date to be an interval if the month or the year are different
        if (currentDate.getFullYear() !== tempDate.getFullYear() || currentDate.getMonth() !== tempDate.getMonth()) {
            sMonthTitle = this._getDateIntervalText(currentDate, tempDate, "yMMM-y");
        }
    }

    oRm.write('<div'); // month div
    oRm.addClass("sapMeCalendarMonth");
    if (!bSingleRow) {
        oRm.addClass("sapMeCalendarMonthNotSingle");
    }
    oRm.writeClasses();
    oRm.addStyle("width", iMonthWidth + "%");
    oRm.writeStyles();
    oRm.write(">");

    oRm.write('<div'); // monthname div
    oRm.addClass("sapMeCalendarMonthName");
    oRm.writeClasses();
    if (oControl.getHideMonthTitles()) {
        oRm.addStyle("display", "none");
        oRm.writeStyles();
    }
    oRm.write(">");
    oRm.writeEscaped(sMonthTitle);
    oRm.write("</div>"); // monthname


    oRm.write('<div'); // MonthDayNames div
    oRm.addClass("sapMeCalendarMonthDayNames");
    oRm.writeClasses();
    oRm.write(">");

    var i;
    for (i = 0; i < iDaysInRow; i++) {
        var sContent = aWeekDays[(i + iFirstDayOffset) % iWeekDays];
        this._renderDay(oRm, oControl, null, sContent, iDayWidth);
    }

    oRm.write('</div>'); // MonthDayNames div

    oRm.write('<div'); // MonthDays div
    oRm.addClass("sapMeCalendarMonthDays");
    oRm.writeClasses();
    oRm.write(">");

    for (i = 0; i < iTotalDays; i++) { // max days of a month
        var iMonth = currentDate.getMonth();
        var iDayInWeek = currentDate.getDay();
        iCurrentDay = currentDate.getDate();

        var bNotThisMonth = iMonth !== iCurrentMonth;
        var sId = currentDate.toDateString();
        var bIsToday = sId == sDateNow;
        this._renderDay(oRm, oControl, sId, iCurrentDay + "", iDayWidth, iDayHeight, iDayInWeek, bNotThisMonth, bIsToday);

        currentDate.setDate(currentDate.getDate() + 1);
    }

    oRm.write('</div>'); // MonthDays div

    oRm.write('</div>'); // month div
};

sap.me.CalendarRenderer._renderDay = function (oRm, oControl, sId, sContent, iDayWidth, iDayHeight, iDayInWeek, bNotThisMonth, bIsToday) {
    oRm.write("<div");
    oRm.addClass("sapMeCalendarMonthDay");

    if (bIsToday) {
        oRm.addClass("sapMeCalendarDayNow");
    }
    if (bNotThisMonth && !oControl.getSingleRow()) {
        oRm.addClass("sapMeCalendarDayNotInCurrentMonth");
    }
    if (typeof iDayInWeek == "number") {
        oRm.addClass("sapMeCalendarWeekDay" + iDayInWeek);
    }
    oRm.writeClasses();
    oRm.addStyle("width", iDayWidth + "%");
    if (iDayHeight) {
        oRm.addStyle("height", iDayHeight + "px");
    }
    oRm.writeStyles();
    oRm.write(">");
    oRm.write('<span>');
    oRm.writeEscaped(sContent);
    oRm.write("</span>");
    oRm.write('<input type="hidden" value="' + sId + '">');
    oRm.write("</span>");
    oRm.write("</div>");
};