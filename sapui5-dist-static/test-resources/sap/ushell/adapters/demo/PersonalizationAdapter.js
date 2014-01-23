// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Personalization adapter for the demo platform.
 * 
 * @version @version@
 */
(function () {
    "use strict";
    /*global jQuery, sap, setTimeout */

    jQuery.sap.declare("sap.ushell.adapters.demo.PersonalizationAdapter");
    jQuery.sap.require("sap.ushell.shells.demo.fioriDemoConfig");

    /**
     * 
     * @param oSystem
     * @returns {sap.ushell.adapters.demo.PersonalizationAdapter}
     */
    sap.ushell.adapters.demo.PersonalizationAdapter = function (oSystem) {
        var oData = sap.ushell.shells.demo.fioriDemoConfig.personalizationData
                || {};

        this.readPersData = function (oPersId) {
            var sId, oDeferred = new jQuery.Deferred();
            if (oPersId.variant === null || oPersId.variant === "") {
                sId = oPersId.container + "#" + oPersId.item;
            } else {
                sId = oPersId.container + oPersId.item + "#" + oPersId.variant;
            }
            oDeferred.resolve(oData[sId]);
            return oDeferred.promise();
        };

        this.writePersData = function (oPersId, oValue) {
            var sId, oDeferred = new jQuery.Deferred();
            if (oPersId.variant === null || oPersId.variant === "") {
                sId = oPersId.container + "#" + oPersId.item;
            } else {
                sId = oPersId.container + oPersId.item + "#" + oPersId.variant;
            }
            oDeferred.resolve();
            oData[sId] = oValue;
            return oDeferred.promise();
        };

        this.delPersData = function (oPersId) {
            var sId, oDeferred = new jQuery.Deferred();
            if (oPersId.variant === null || oPersId.variant === "") {
                sId = oPersId.container + "#" + oPersId.item;
            } else {
                sId = oPersId.container + oPersId.item + "#" + oPersId.variant;
            }
            oDeferred.resolve(delete oData[sId]);
            return oDeferred.promise();
        };
    };
}());
