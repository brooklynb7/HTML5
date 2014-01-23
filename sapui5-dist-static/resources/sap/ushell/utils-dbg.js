// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview This file contains miscellaneous utility functions.
 */

(function () {
    "use strict";
    /*global jQuery, sap */

    // ensure that sap.ushell exists
    jQuery.sap.declare("sap.ushell.utils");

    sap.ushell.utils = {};

    /**
     * Creates an <code>Error</code> object and logs the error message immediately.
     *
     * @param {string} sMessage
     *   the error message
     * @param {string} [sComponent]
     *   the error component to log
     *
     * @class An error that is written to the log.
     * @constructor
     * @since 1.15.0
     */
    sap.ushell.utils.Error = function (sMessage, sComponent) {
        this.name = "sap.ushell.utils.Error";
        this.message = sMessage;
        jQuery.sap.log.error(sMessage, null, sComponent);
    };

    sap.ushell.utils.Error.prototype = new Error();


    /**
     * Creates an empty map.
     * @class A mapping from arbitrary string(!) keys (including "get" or "hasOwnProperty") to
     * values of any type.
     * @since 1.15.0
     */
    sap.ushell.utils.Map = function () {
        this.entries = {};
    };

    /**
     * Associates the specified value with the specified key in this map. If the map previously
     * contained a mapping for the key, the old value is replaced by the specified value. Returns
     * the old value. Note: It might be a good idea to assert that the old value is
     * <code>undefined</code> in case you expect your keys to be unique.
     *
     * @param {string} sKey
     *   key with which the specified value is to be associated
     * @param {any} vValue
     *   value to be associated with the specified key
     * @returns {any}
     *   the old value
     * @since 1.15.0
     */
    sap.ushell.utils.Map.prototype.put = function (sKey, vValue) {
        var vOldValue = this.get(sKey);
        this.entries[sKey] = vValue;
        return vOldValue;
    };

    /**
     * Returns <tt>true</tt> if this map contains a mapping for the specified key.
     *
     * @param {string} sKey
     *   key whose presence in this map is to be tested
     * @returns {boolean}
     *   <tt>true</tt> if this map contains a mapping for the specified key
     * @since 1.15.0
     */
    sap.ushell.utils.Map.prototype.containsKey = function (sKey) {
        if (typeof sKey !== "string") {
            throw new sap.ushell.utils.Error("Not a string key: " + sKey, "sap.ushell.utils.Map");
        }
        return Object.prototype.hasOwnProperty.call(this.entries, sKey);
    };

    /**
     * Returns the value to which the specified key is mapped, or <code>undefined</code> if this map
     * contains no mapping for the key.
     * @param {string} sKey
     *   the key whose associated value is to be returned
     * @returns {any}
     *   the value to which the specified key is mapped, or <code>undefined</code> if this map
     *   contains no mapping for the key
     * @since 1.15.0
     */
    sap.ushell.utils.Map.prototype.get = function (sKey) {
        if (this.containsKey(sKey)) {
            return this.entries[sKey];
        }
        //return undefined;
    };

    /**
     * Returns an array of this map's keys. This array is a snapshot of the map; concurrent
     * modifications of the map while iterating do not influence the sequence.
     * @returns {string[]}
     *   this map's keys
     * @since 1.15.0
     */
    sap.ushell.utils.Map.prototype.keys = function () {
        return Object.keys(this.entries);
    };

    /**
     * Returns this map's string representation.
     *
     * @returns {string}
     *   this map's string representation
     * @since 1.15.0
     */
    sap.ushell.utils.Map.prototype.toString = function () {
        var aResult = ['sap.ushell.utils.Map('];
        aResult.push(JSON.stringify(this.entries));
        aResult.push(')');
        return aResult.join('');
    };

    /**
     * Serves as a marker for functions that are to be exposed in QUnit tests. Calls to this
     * function are expected to be placed directly before the named function declaration (even
     * <b>after</b> the JSDoc). The function itself does nothing.
     *
     * @param {object} o
     *   the object to which this function will be attached in tests; must not be <code>this</code>
     *   (use <code>that</code> instead)
     * @since 1.15.0
     */
    sap.ushell.utils.testPublishAt = function (o) {
      // intentionally left blank
    };
}());
