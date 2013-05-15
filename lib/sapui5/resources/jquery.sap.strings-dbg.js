/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides useful string operations not available in pure JavaScript.
jQuery.sap.declare("jquery.sap.strings", false);

(function(){


	/**
	 * Checks whether a given sString ends with sEndString
	 * respecting the case of the strings.
	 *
	 * @param {string} sString The string to be checked
	 * @param {string} sEndString The end string to be searched
	 * @return True if sString ends with sEndString
	 * @type {boolean}
	 * @see jQuery.sap.endsWithIgnoreCase
	 * @public
	 */
	jQuery.sap.endsWith = function endsWith(sString, sEndString) {
		if (typeof(sEndString)!="string" || sEndString=="") {
			return false;
		}
		var iPos = sString.lastIndexOf(sEndString);
		return iPos >= 0 && iPos == sString.length - sEndString.length;
	};

	/**
	 * Checks whether a given sString ends with sEndString
	 * ignoring the case of the strings.
	 *
	 * @param {string} sString the string to be checked
	 * @param {string} sEndString the end string to be searched
	 * @return true if sString ends with sEndString
	 * @type {boolean}
	 * @see jQuery.sap.endsWith
	 * @public
	 */
	jQuery.sap.endsWithIgnoreCase = function endsWithIgnoreCase(sString, sEndString) {
		if (typeof(sEndString)!="string" || sEndString=="") {
			return false;
		}
		sString = sString.toUpperCase();
		sEndString = sEndString.toUpperCase();
		return jQuery.sap.endsWith(sString,sEndString);
	};

	/**
	 * Checks whether a given sString starts with sStartString
	 * respecting the case of the strings.
	 *
	 * @param {string} sString The string to be checked
	 * @param {string} sStartString The start string to be searched
	 * @return True if sString ends with sEndString
	 * @type {boolean}
	 * @see jQuery.sap.startsWithIgnoreCase
	 * @public
	 */
	jQuery.sap.startsWith = function startsWith(sString, sStartString) {
		if (typeof(sStartString)!="string" || sStartString=="") {
			return false;
		}
		if (sString == sStartString) {
			return true;
		}
		return sString.indexOf(sStartString) == 0;
	};

	/**
	 * Checks whether a given sString starts with sStartString
	 * ignoring the case of the strings.
	 *
	 * @param {string} sString The string to be checked
	 * @param {string} sStartString The start string to be searched
	 * @return True if sString ends with sEndString
	 * @type {boolean}
	 * @see jQuery.sap.startsWith
	 * @public
	 */
	jQuery.sap.startsWithIgnoreCase = function startsWithIgnoreCase(sString, sStartString) {
		if (typeof(sStartString)!="string" || sStartString=="") {
			return false;
		}
		sString = sString.toUpperCase();
		sStartString = sStartString.toUpperCase();
		return jQuery.sap.startsWith(sString,sStartString);
	};

	/**
	 * Converts a character of the string to upper case.<br/>
	 * If no pos is defined as second parameter or pos is negative or greater than sString the first character will be
	 * converted into upper case. the first char position is 0.
	 *
	 * @param {string} sString The string to be checked
	 * @param {integer} iPos the position of the character that will be uppercase
	 * @return The string with the firstletter in upper case
	 * @type {string}
	 * @public
	 * @SecPassthrough {0|return}
	 */
	jQuery.sap.charToUpperCase = function charToUpperCase(sString,iPos) {
		if (!sString) {
			return sString;
		}
		if (!iPos || isNaN(iPos) || iPos <= 0 || iPos >= sString.length) {
			iPos = 0;
		}
		var sChar = sString.charAt(iPos).toUpperCase();
		if (iPos>0) {
			return sString.substring(0,iPos) + sChar + sString.substring(iPos+1);
		}
		return sChar + sString.substring(iPos+1);
	};

	/**
	 * Pads a string on the left side until is has the given length.<br/>
	 *
	 * @param {string} sString The string to be padded
	 * @param {string} sPadChar The char to use for the padding
	 * @param {integer} iLength the target length of the string
	 * @return The padded string
	 * @type {string}
	 * @public
	 * @SecPassthrough {0 1|return}
	 */
	jQuery.sap.padLeft = function padLeft(sString, sPadChar, iLength) {
		if (!sString) {
			sString = "";
		}
		while (sString.length < iLength) {
			sString = sPadChar + sString;
		}
		return sString;
	};

	/**
	 * Pads a string on the right side until is has the given length.<br/>
	 *
	 * @param {string} sString The string to be padded
	 * @param {string} sPadChar The char to use for the padding
	 * @param {integer} iLength the target length of the string
	 * @return The padded string
	 * @type {string}
	 * @public
	 * @SecPassthrough {0 1|return}
	 */
	jQuery.sap.padRight = function padRight(sString, sPadChar, iLength) {
		if (!sString) {
			sString = "";
		}
		while (sString.length < iLength) {
			sString = sString + sPadChar;
		}
		return sString;
	};


	var rCamelCase = /-(.)/ig;

	/**
	 * Transforms a hyphen separated string to an camel case string. 
	 *
     * @param {string} sString Hyphen separated string
     * @return The transformed string
     * @type {string}
     * @since 1.7.0
     * @public
     * @SecPassthrough {0|return}
     */
	jQuery.sap.camelCase = function camelCase(sString) { 
		return sString.replace( rCamelCase, function( sMatch, sChar ) {
			return sChar.toUpperCase();
		});
	};
	
	var rEscapeRegExp = /[-[\]{}()*+?.,\\^$|#\s]/g;

	/**
	 * This function escapes the reserved letters in Regular Expression
   * @param {string} sString string to escape
   * @return The escaped string
   * @type {string}
   * @since 1.9.3
   * @public
   * @SecPassthrough {0|return}
	 */
	jQuery.sap.escapeRegExp = function escapeRegExp(sString) {
		return sString.replace(rEscapeRegExp, "\\$&");
	};
	
}());