/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides miscellaneous utility functions that might be useful for any script
jQuery.sap.declare("jquery.sap.script", false);

(function() {

	/**
	 * Some private variable used for creation of (pseudo-)unique ids.
	 * @type integer
	 * @private
	 */
	var iIdCounter = 0;

	/**
	 * Creates and returns a pseudo-unique id.
	 *
	 * No means for detection of overlap with already present or future UIDs.
	 *
	 * @return {string} A pseudo-unique id.
	 * @public
	 */
	jQuery.sap.uid = function uid() {
		return "id-" + new Date().valueOf() + "-" + iIdCounter++;
	};

	/**
	 * Calls a method after a given delay and returns an id for this timer
	 *
	 * @param {int} iDelay Delay time in milliseconds
	 * @param {object} oObject Object from which the method should be called
	 * @param {string|object} Method function pointer or name of the method
	 * @param {array} [aParameters] Method parameters
	 * @return {string} Id which can be used to cancel the timer with clearDelayedCall
	 * @public
	 */
	jQuery.sap.delayedCall = function delayedCall(iDelay, oObject, method, aParameters) {
		return setTimeout(function(){
			if (jQuery.type(method) == "string") {
				method = oObject[method];
			}
			method.apply(oObject, aParameters ||[]);
		}, iDelay);
	};

	/**
	 * Stops the delayed call.
	 *
	 * The function given when calling delayedCall is not called anymore.
	 *
	 * @param {string} sDelayedCallId The id returned, when calling delayedCall
	 * @public
	 */
	jQuery.sap.clearDelayedCall = function clearDelayedCall(sDelayedCallId) {
		clearTimeout(sDelayedCallId);
		return this;
	};

	/**
	 * Calls a method after a given interval and returns an id for this interval.
	 *
	 * @param {int} iInterval Interval time in milliseconds
	 * @param {object} oObject Object from which the method should be called
	 * @param {string|object} Method function pointer or name of the method
	 * @param {array} [aParameters] Method parameters
	 * @return {string} Id which can be used to cancel the interval with clearIntervalCall
	 * @public
	 */
	jQuery.sap.intervalCall = function intervalCall(iInterval, oObject, method, aParameters) {
		return setInterval(function(){
			if (jQuery.type(method) == "string") {
				method = oObject[method];
			}
			method.apply(oObject, aParameters ||[]);
		}, iInterval);
	};

	/**
	 * Stops the interval call.
	 *
	 * The function given when calling intervalCall is not called anymore.
	 *
	 * @param {string} sIntervalCallId The id returned, when calling intervalCall
	 * @public
	 */
	jQuery.sap.clearIntervalCall = function clearIntervalCall(sIntervalCallId) {
		clearInterval(sIntervalCallId);
		return this;
	};

	// Javadoc for private inner class "UriParams" - this list of comments is intentional!
	/**
	 * @interface  Encapsulates all URI parameters of the current windows location (URL).
	 *
	 * Use {@link jQuery.sap.getUriParameters} to create an instance of jQuery.sap.util.UriParameters.
	 *
	 * @author SAP AG
	 * @version 1.10.0
	 * @since 0.9.0
	 * @name jQuery.sap.util.UriParameters
	 * @public
	 */
	/**
	 * Returns the value(s) of the URI parameter with the given name sName.
	 *
	 * If the boolean parameter bAll is <code>true</code>, an array of string values of all
	 * occurrences of the URI parameter with the given name is returned. This array is empty
	 * if the URI parameter is not contained in the windows URL.
	 *
	 * If the boolean parameter bAll is <code>false</code> or is not specified, the value of the first
	 * occurrence of the URI parameter with the given name is returned. Might be <code>null</code>
	 * if the URI parameter is not contained in the windows URL.
	 *
	 * @param {string} sName The name of the URI parameter.
	 * @param {boolean} [bAll=false] Optional, specifies whether all or only the first parameter value should be returned.
	 * @return {string|array} The value(s) of the URI parameter with the given name
	 * @SecSource {return|XSS} Return value contains URL parameters
	 *
	 * @function
	 * @name jQuery.sap.util.UriParameters.prototype.get
	 */

	/*
	 * Implements jQuery.sap.util.UriParameters
	 */
	var UriParams = function(sUri) {
		this.mParams = {};
		var sQueryString = sUri || window.location.href;
		if ( sQueryString.indexOf('#') >= 0 ) {
			sQueryString = sQueryString.slice(0, sQueryString.indexOf('#'));
		}
		if(sQueryString.indexOf("?") >= 0){
			sQueryString = sQueryString.slice(sQueryString.indexOf("?") + 1);
			var aParameters = sQueryString.split("&"),
				mParameters = {},
				aParameter,
				sName,
				sValue;
			for(var i=0; i<aParameters.length; i++){
				aParameter = aParameters[i].split("=");
				sName = decodeURIComponent(aParameter[0]);
				sValue = aParameter.length > 1 ? decodeURIComponent(aParameter[1].replace(/\+/g,' ')) : "";
				if(sName){
					if(!Object.prototype.hasOwnProperty.call(mParameters, sName)){
						mParameters[sName] = [];
					}
					mParameters[sName].push(sValue);
				}
			}
			this.mParams = mParameters;
		}
	};

	UriParams.prototype = {};

	/*
	 * Implements jQuery.sap.util.UriParameters.prototype.get
	 */
	UriParams.prototype.get = function(sName, bAll) {
		var aValues = Object.prototype.hasOwnProperty.call(this.mParams, sName) ? this.mParams[sName] : [];
		return bAll === true ? aValues : (aValues[0] || null);
	};

	/**
	 * Creates and returns a new instance of {@link jQuery.sap.util.UriParameters}.
	 *
	 * Example for reading a single URI parameter (or the value of the first
	 * occurrence of the URI parameter):
	 * <pre>
	 *  var sValue = jQuery.sap.getUriParameters().get("myUriParam");
	 * </pre>
	 *
	 * Example for reading the values of the first of the URI parameter
	 * (with multiple occurrences):
	 * <pre>
	 *  var aValues = jQuery.sap.getUriParameters().get("myUriParam", true);
	 *  for(i in aValues){
	 *	var sValue = aValues[i];
	 *  }
	 * </pre>
	 *
	 * @public
	 * @return {jQuery.sap.util.UriParameters} A new URI parameters instance
	 */
	jQuery.sap.getUriParameters = function getUriParameters(sUri) {
		return new UriParams(sUri);
	};

	/**
	 * Sorts the given array in-place and removes any duplicates (identified by "===").
	 *
	 * Use <code>jQuery.unique()</code> for arrays of DOMElements.
	 *
	 * @param {Array} a An Array of any type
	 * @return {Array} Same array as given (for chaining)
	 * @public
	 */
	jQuery.sap.unique = function(a) {
		jQuery.sap.assert(a instanceof Array, "unique: a must be an array");
		var l=a.length;
		if ( l > 1 ) {
			a.sort();
			for(var i=1,j=0; i<l; i++) {
				// invariant: i is the entry to check, j is the last unique entry known so far
				if ( a[i] !== a[j] ) {
					a[++j] = a[i];
				}
			}
			// cut off the rest - if any
			if ( ++j < l ) {
				a.splice(j, l-j);
			}
		}
		return a;
	};

	/**
	 * Compares the two given values for equality, especially takes care not to compare
	 * arrays and objects by reference, but compares their content.
	 * Note: function does not work with comparing XML objects
	 *
	 * @param {any} a A value of any type
	 * @param {any} b A value of any type
	 * @param {int} [maxDepth=10] Maximum recursion depth
	 * 
	 * @return {boolean} Whether a and b are equal
	 * @public
	 */
	jQuery.sap.equal = function(a, b, maxDepth, depth) {
		if (!depth) depth = 0;
		if (!maxDepth) maxDepth = 10;
		if (depth > maxDepth) return false;
		if (a === b) return true;
		if (jQuery.isArray(a) && jQuery.isArray(b)) {
			if (a.length != b.length) { return false; }
			for (var i = 0; i < a.length; i++) {
				if (!jQuery.sap.equal(a[i], b[i], maxDepth, depth + 1)) { 
						return false;
				}
			}
			return true;
		}
		if (typeof a == "object" && typeof b == "object") {
			if (!a || !b) {
				return false;
			}
			if (a.constructor != b.constructor) {
				return false;
			}
			if (a instanceof Date) {
				return a.valueOf() == b.valueOf();
			}
			for (var i in a) {
				if (!jQuery.sap.equal(a[i], b[i], maxDepth, depth + 1)) { 
					return false;
				}
			}
			for (var i in b) {
				if (a[i] === undefined) { 
					return false;
				}
			}
			return true;
		}
		return false;
	};
	
	/**
	 * Substitute for <code>for(n in o)</code> loops which fixes the 'Don'tEnum' bug of IE8.
	 * 
	 * Iterates over all enumerable properties of the given object and calls the
	 * given callback function for each of them. The assumed signature of the 
	 * callback function is 
	 * 
	 *   fnCallback(name, value)
	 *   
	 * where name is the name of the property and value is its value.
	 * 
	 * When an object in IE8 overrides a property of Object.prototype
	 * that has been marked as 'don't enum', then IE8 by mistake also 
	 * doesn't enumerate the overriding property. 
	 * 
	 * A 100% complete substitute is hard to achieve. The current implementation 
	 * enumerates an overridden property when it either is an 'own' property 
	 * (hasOwnProperty(name) is true) or when the property value is different 
	 * from the value in the Object.prototype object.
	 * 
   * @param {object} oObject object to enumerate the properties of
   * @param {function} fnCallback function to call for each property name
	 * @function
	 * @since 1.7.1
	 */
	jQuery.sap.forIn = {toString:null}.propertyIsEnumerable("toString") ?
	    // for browsers without the bug we use the straight forward implementation of a for in loop
      function(oObject, fnCallback) {
        for(var n in oObject) {
          if ( fnCallback(n, oObject[n]) === false ) {
            return;
          }
        }
      } : 
      // use a special implementation for IE8 
      (function() {
        var DONT_ENUM_KEYS = ["toString","valueOf","toLocaleString", "hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],
            DONT_ENUM_KEYS_LENGTH = DONT_ENUM_KEYS.length,
            oObjectPrototype = Object.prototype,
            fnHasOwnProperty = oObjectPrototype.hasOwnProperty;
            
        return function(oObject, fnCallback) {
          var n,i;
          
          // standard for(in) loop
          for(n in oObject) {
            if ( fnCallback(n, oObject[n]) === false ) {
              return;
            }
          }
          // additionally check the known 'don't enum' names
          for(var i=0; i<DONT_ENUM_KEYS_LENGTH; i++) {
            n = DONT_ENUM_KEYS[i];
            // assume an enumerable property if it is either an own property
            // or if its value differes fro mthe value in the Object.prototype
            if ( fnHasOwnProperty.call(oObject,n) || oObject[n] !== oObjectPrototype[n] ) {
              if ( fnCallback(n, oObject[n]) === false ) {
                return;
              }
            }
          }
          // Note: this substitute implementation still fails in several regards
          // - it fails when oObject is identical to Object.prototype (iterates non-enumerable properties)
          // - it fails when one of the don't enum properties by intention has been overridden in the 
          //   prototype chain with a value identical to the value in Object.prototype
          // - the don't enum properties are handled out of order. This is okay with the ECMAScript
          //   spec but might be unexpected for some callers
        }
     	}());
	
}());
