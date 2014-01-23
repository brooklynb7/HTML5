// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Unified Shell's personalization adapter for the sandbox.
 * 
 * @version @version@
 */
(function() {
    "use strict";
    /* global jQuery, sap */
    jQuery.sap.declare("sap.ushell.adapters.sandbox.PersonalizationAdapter");

    jQuery.sap.require("jquery.sap.storage");

    /**
     * This method MUST be called by the Unified Shell's container only.
     * Constructs a new instance of the personalization adapter for the
     * "Sandbox" platform.
     * 
     * @param {object}
     *            oSystem the system served by the adapter
     * 
     * @class The Unified Shell's personalization adapter for the "Sandbox"
     *        platform.
     * 
     * @constructor
     * @since 1.15.0
     */
    sap.ushell.adapters.sandbox.PersonalizationAdapter = function(oSystem) {

        /**
         * Reads a personalization data value.
         * 
         * @param {string}
         *            oPersId.container The personalization is the the set of
         *            personalization data belonging to an application.
         * 
         * @param {string}
         *            oPersId.item The name of the object the personalization is
         *            applied to.
         * @param {string}
         *            oPersId.variant A variant of a personalization; in case for
         *            one object different personalization sets are maintained.
         *            If no variant is used the parameter has to be supplied as
         *            null value or as "" value.
         * @returns {object} Promise object which provides the personalization
         *          value. Promise object done function: param {object} oValue
         *          JSON object containing the personalization value. If there
         *          is no personalization data for the item, null is returned.
         *          Promise object fail function: param {string} sMessage Error
         *          message
         * @since 1.15.0
         */
        this.readPersData = function(oPersId) {
            var sId, sValue, oValue, oDeferred, oLocalStorage;
            if (oPersId.variant === null || oPersId.variant === "") {
                sId = oPersId.item;
            } else {
                sId = oPersId.item + "#" + oPersId.variant;
            }
            oDeferred = new jQuery.Deferred();
            oLocalStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local,
                    oPersId.container);
            sValue = oLocalStorage.get(sId); // non existing sId --> null
            oValue = window.JSON.parse(sValue); // null --> null
            oDeferred.resolve(oValue);
            return oDeferred.promise();

        };

        /**
         * Writes a personalization data value.
         * 
         * @param {string}
         *            oPersId.container The personalization is the the set of
         *            personalization data belonging to an application.
         * 
         * @param {string}
         *            oPersId.item The name of the object the personalization is
         *            applied to.
         * @param {string}
         *            oPersId.variant A variant of a personalization; in case for
         *            one object different personalization sets are maintained.
         *            If no variant is used the parameter has to be supplied as
         *            null value or as "" value.
         * @param {object}
         *            oValue JSON object containing the personalization value.
         * @returns {object} Promise object which returns if the saving was
         *          successful or erroneous. Promise object done function: no
         *          params. Promise object fail function: no params
         * @since 1.15.0
         */
        this.writePersData = function(oPersId, oValue) {
            var sId, sValue, oDeferred, oLocalStorage, bResult;
            if (oPersId.variant === null || oPersId.variant === "") {
                sId = oPersId.item;
            } else {
                sId = oPersId.item + "#" + oPersId.variant;
            }
            oDeferred = new jQuery.Deferred();
            sValue = window.JSON.stringify(oValue);
            oLocalStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local,
                    oPersId.container);
            bResult = oLocalStorage.put(sId, sValue);
            if (bResult)
                oDeferred.resolve();
            else
                oDeferred.reject();
            return oDeferred.promise();
        };

        /**
         * Deletes a personalization data value.
         * 
         * @param {string}
         *            oPersId.container The personalization is the the set of
         *            personalization data belonging to an application.
         * 
         * @param {string}
         *            oPersId.item The name of the object the personalization is
         *            applied to.
         * @param {string}
         *            oPersId.variant A variant of a personalization; in case for
         *            one object different personalization sets are maintained.
         *            If no variant is used the parameter has to be supplied as
         *            null value or as "" value.
         * @returns {object} Promise object which returns if the deletion was
         *          successful or erroneous. Promise object done function: no
         *          params. Promise object fail function: no params
         * @since 1.15.0
         */
        this.delPersData = function(oPersId) {
            var sId, sValue, oDeferred, oLocalStorage, bResult;
            if (oPersId.variant === null || oPersId.variant === "") {
                sId = oPersId.container + "##" + oPersId.item;
            } else {
                sId = oPersId.container + "##" + oPersId.item + "#" + oPersId.variant;
            }
            oDeferred = new jQuery.Deferred();
            oLocalStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local,
                    oPersId.container);
            bResult = oLocalStorage.remove(sId);
            if (bResult)
                oDeferred.resolve();
            else
                oDeferred.reject();
            return oDeferred.promise();

        };

    };
}());