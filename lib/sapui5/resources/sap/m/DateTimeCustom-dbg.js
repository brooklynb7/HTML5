/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

(function($) {

	var oCore = sap.ui.getCore(),
		oLocale = sap.m.getLocale(),
		sLanguage = oLocale.getLanguage(),
		oLocaleData = sap.m.getLocaleData(),
		oResourceBundle = oCore.getLibraryResourceBundle("sap.m"),
		_ = function(sText) {
			return oResourceBundle.getText("MOBISCROLL_" + sText);
		},
		sOS = "",
		sJsPath = "sap.ui.thirdparty.mobiscroll.js.",
		sCssPath = $.sap.getModulePath("sap.ui.thirdparty.mobiscroll", "/css/"),
		oDefaults = {
			endYear : new Date().getFullYear() + 10,
			lang : sLanguage
		},
		oi18n = {
			setText : _("SET"),
			cancelText : _("CANCEL"),
			monthText : _("MONTH"),
			dayText : _("DAY"),
			yearText : _("YEAR"),
			hourText : _("HOURS"),
			minuteText : _("MINUTES"),
			secText : _("SECONDS"),
			nowText : _("NOW"),
			dayNames : oLocaleData.getDays("wide"),
			dayNamesShort : oLocaleData.getDays("abbreviated"),
			monthNames : oLocaleData.getMonths("wide"),
			monthNamesShort : oLocaleData.getMonths("abbreviated")
		};		

	// check os then do the required settings
	if ($.os.ios) {
		sOS = "ios";
		oDefaults.display = "bubble";
	} else if ($.os.android) {
		sOS = "android-ics";
		if ($.os.fVersion == 2.3) {
			// scroll mode is not responsive
			oDefaults.mode = "clickpick";
			// 5 rows feels like scrollable
			oDefaults.rows = 3;
		} else if ($.os.fVersion == 3.2) {
			// mixed mode has overlapping bug
			oDefaults.mode = "scroller";
		}
	}

	// inject resources
	$.sap.includeStyleSheet(sCssPath + "mobiscroll-core.css");
	$.sap.require(sJsPath + "mobiscroll-core");
	$.sap.require(sJsPath + "mobiscroll-datetime");
	if (sOS) {
		oDefaults.theme = ($.os.android) ? sOS + " light" : sOS;
		$.sap.includeStyleSheet(sCssPath + "mobiscroll-" + sOS + ".css");
		$.sap.require(sJsPath + "mobiscroll-" + sOS);
		$.extend($.mobiscroll.themes[oDefaults.theme].defaults, oDefaults);
	}

	$.scroller.i18n[sLanguage] = $.extend(oi18n);
	$.scroller.setDefaults(oDefaults);

	// enable instance management
	$.sap.require("sap.m.InstanceManager");
	
	// Add custom datetime methods to prototype
	$.extend(sap.m.DateTimeInput.prototype, {
		/**
		 * This method gets called from sap.m.InstanceManager, 
		 * to close the opened mobiscroll dialog when the back button is clicked
		 * 
		 * @private
		 */
		close : function() {
			this._$input.scroller("hide");
		},

		/**
		 * Mobiscroll title reformatter to support all cldr formats
		 * We can only get string value onChange/onWheel event
		 */
		_setScrollerHeader : function(sValue) {
			try {
				var oSettings = this._$input.scroller("getInst").settings,
					sFormat = !this.getType().indexOf("Date") ? oSettings.dateFormat : oSettings.timeFormat,
					oDate = jQuery.mobiscroll.parseDate(sFormat, sValue);

				return sap.ui.core.format.DateFormat.getDateInstance({
					pattern : this.getDisplayFormat()
				}).format(oDate);
			} catch (e) {
				return sValue;
			}
		},

		/**
		 * Date-time conversion for mobiscroll configuration
		 */
		_getScrollerConfig : function() {
			var that = this,
				sType = this.getType(),
				sFormat = this.getDisplayFormat(),
				oConfig = {
					preset : sType.toLowerCase(),
					onShow : function() {
						sap.m.InstanceManager.addDialogInstance(that);
					},
					onClose : function() {
						sap.m.InstanceManager.removeDialogInstance(that);
					}
				};

			if (sType == "Date") {
				sFormat = this._convertDatePattern(sFormat);
				jQuery.extend(oConfig, {
					dateFormat : sFormat,
					dateOrder : this._getLongDatePattern(sFormat).replace(/[^ymd ]/ig, ""),
				});
			} else if (sType == "Time") {
				sFormat = this._convertTimePattern(sFormat);
				jQuery.extend(oConfig, {
					timeWheels : sFormat,
					timeFormat : sFormat
				});
			} else if (sType == "DateTime") {
				sFormat = this._convertDatePattern(this._convertTimePattern(sFormat));

				// date-time hack
				jQuery.extend(oConfig, {
					dateFormat : sFormat,
					dateOrder : sFormat.replace(/[^ymd ]/ig, ""),
					timeWheels : sFormat,
					timeFormat : "",
					separator : ""
				});

				if (this._getRowForDateTime()) {
					oConfig.rows = this._getRowForDateTime();
				}
			}

			// check given format is not supported by mobiscroll
			if (/[^ymdhisa\W]/i.test(sFormat)) {
				this._reformat = true;
				if (!jQuery.os.ios) {
					oConfig.headerText = jQuery.proxy(this._setScrollerHeader, this);
				}
			} else {
				this._reformat = false;
			}

			return oConfig;
		},

		/**
		 * Until mobiscroll fixes min height(360px) problem for date time
		 * we just decrease the row count
		 */
		_getRowForDateTime : function() {
			var nRow,
				$ = jQuery,
				oWin = $(window),
				oInput = $("<input>"),
				oSettings = oInput.remove().scroller({}).scroller("getInst").settings,
				nRowCount = (2 * oSettings.rows) + 1,
				nRowHeight = oSettings.height,
				nMax = Math.max(oWin.height(), oWin.width());

			if (nRowCount > 6 && nMax < nRowCount * nRowHeight) {
				nRow = Math.ceil(nRowCount / 4);
			}

			sap.m.DateTimeInput.prototype._getRowForDateTime = function() {
				return nRow;
			};

			$ = oWin = oInput = oSettings = null;
			return nRow;
		},
			

		/**
		 * Convert date pattern to long month name, 4 digit year, 2 digit day
		 */
		_getLongDatePattern : function(sPattern) {
			sPattern = sPattern || this.getDisplayFormat();
			return sPattern.replace(/y+/i, "YY").replace(/m+/i, "MM").replace(/d+/, "dd");
		},


		/**
		 * Converts the time pattern from CLDR to the mobiscroll time picker
		 * m is short month name, i = minute
		 */
		_convertTimePattern : function(sPattern) {
			sPattern = sPattern || this.getDisplayFormat();
			return sPattern.replace(/m/g, "i").replace("a", "A");
		},


		/**
		 * Converts the date pattern from CLDR to the one of the jQuery datePicker
		 * Month is coded in the different way
		 * TODO: Copied from core talk with core team to call method from somewhere else shared
		 */
		_convertDatePattern : function(sPattern) {
			sPattern = sPattern || this.getDisplayFormat();

			var iIndex1 = sPattern.indexOf('M'),
				iIndex2 = sPattern.lastIndexOf('M'),
				sFormat = sPattern,
				sNewMonth;

			if (iIndex1 == -1) {
				// no month defined with M, maybe using L (standalone)
				iIndex1 = sPattern.indexOf('L');
				iIndex2 = sPattern.lastIndexOf('L');
			}

			if (iIndex1 > -1) {
				switch (iIndex2-iIndex1) {
				case 0:
					sNewMonth = 'm';
					break;
				case 1:
					sNewMonth = 'mm';
					break;
				case 2:
					sNewMonth = 'M';
					break;
				case 5:
					//narrow state not available in jQuery DatePicker -> use shortest one
					sNewMonth = 'm';
					break;
				default:
					sNewMonth = 'MM';
				break;
				}
				sFormat = sPattern.substring(0, iIndex1) + sNewMonth + sPattern.substring(iIndex2 + 1);
			}

			var sNewYear;
			iIndex1 = sFormat.indexOf('y');
			if (iIndex1 > -1) {
				iIndex2 = sFormat.lastIndexOf('y');
				if (iIndex2-iIndex1 == 1) {
					// two chanrs
					sNewYear = 'y';
				}else{
					sNewYear = 'yy';
				}
				var sFormat = sFormat.substring(0, iIndex1) + sNewYear + sFormat.substring(iIndex2 + 1);
			}

			var sNewYearDay;
			iIndex1 = sFormat.indexOf('D');
			if (iIndex1 > -1) {
				iIndex2 = sFormat.lastIndexOf('D');

				if (iIndex2-iIndex1 == 1) {
					// two chanrs
					sNewYearDay = 'o';
				}else{
					sNewYearDay = 'oo';
				}
				var sFormat = sFormat.substring(0, iIndex1) + sNewYearDay + sFormat.substring(iIndex2 + 1);
			}

			// EEEE = DD = day of week(long)
			// EEE, EE, E = D = day of week(short)
			sFormat = sFormat.replace(/EEEE/g, "DD").replace(/E+/g, "D");

			return sFormat;
		}		
	});	
	
})(jQuery);