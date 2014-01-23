// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The Unified Shell's personalization service, which provides
 *               generic read and write access to the currently logged on user's
 *               personalization settings for the app currently executed in the
 *               shell.
 * 
 * @version 1.16.4
 */
(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.services.Personalization");

    /**
     * This method MUST be called by the Unified Shell's container only, others
     * MUST call <code>sap.ushell.Container.getService("Personalization")</code>.
     * Constructs a new instance of the personalization service.
     * 
     * @param {object}
     *            oAdapter the service adapter for the personalization service,
     *            as already provided by the container
     * 
     * @class The Unified Shell's personalization service, which provides a
     *        personalizer object that handles all personalization operations.
     * 
     * @public
     * @constructor
     * @see sap.ushell.services.Container#getService
     * 
     * @since 1.15.0
     */
    sap.ushell.services.Personalization = function (oAdapter) {

        /**
         * Returns a personalizer object which handles personalization
         * operations.
         * 
         * @param {object}
         *            oPersId JSON object consisting of the following parts:
         *            container - Identifies the set of personalization data
         *            that is loaded/saved as one bundle from the backend
         *            system. item - The name of the object the personalization
         *            is applied to.
         * @param {boolean}
         *            bUseVariant Flag to switch on variant processing.
         * 
         * @returns {object} personalizer object which provides generic read and
         *          write access to the currently logged on user's
         *          personalization settings.
         * @since 1.15.0
         */
        this.getPersonalizer = function (oPersId, bUseVariant) {
            return new sap.ushell.services.Personalizer(oAdapter, oPersId,
                    bUseVariant);
        };
    };

    /**
     * To be called by the personalization service get.Personalizer method.
     * 
     * @param {object}
     *            oAdapter the service adapter for the personalization service,
     *            as already provided by the container
     * @param {object}
     *            oPersId JSON object consisting of the following parts:
     *            container - Identifies the set of personalization data that is
     *            loaded/saved as one bundle from the backend system. item - The
     *            name of the object the personalization is applied to.
     * @param {boolean}
     *            bUseVariant Flag to switch on variant processing.
     * 
     * @class The Unified Shell generic personalizer providing set get delete
     *        methods to access the persisted personalization data.
     * 
     * @constructor
     * @see sap.ushell.services.Container#getService
     * @since 1.15.0
     */
    sap.ushell.services.Personalizer = function (oAdapter, oPersId, bUseVariant) {
        var CONTAINER_PREFIX = "sap.ushell.personalization#",
            sPersContainer,
            sPersItem,
            sPersVariant;

        if (!oPersId || !oPersId.container || !oPersId.item) {
            throw new sap.ushell.utils.Error(
                "Invalid input for oPersId: sap.ushell.services.Personalization"
            );
        }
        if (bUseVariant) {
            throw new sap.ushell.utils.Error(
                "Variants are not implemented: sap.ushell.services.Personalization"
            );
        }

        sPersContainer = CONTAINER_PREFIX + oPersId.container;
        sPersItem = oPersId.item;
        sPersVariant = null;

        /**
         * Gets a personalization data value.
         * 
         * @returns {object} Promise object which provides the personalization
         *          value. Promise object done function: param {object} oValue
         *          JSON object containing the personalization value. If there
         *          is no personalization data for the item, null is returned.
         *          Promise object fail function: param {string} sMessage Error
         *          message
         * @since 1.15.0
         */
        this.getPersData = function () {
            return oAdapter.readPersData({
                container : sPersContainer,
                item : sPersItem,
                variant : sPersVariant
            });
        };

        /**
         * Sets a personalization data value.
         * 
         * @param {object}
         *            oValue JSON object containing the personalization value.
         * @returns {object} Promise object which returns if the saving was
         *          successful or erroneous. Promise object done function: no
         *          params. Promise object fail function: param {string}
         *          sMessage Error message
         * @since 1.15.0
         */
        this.setPersData = function (oValue) {
            return oAdapter.writePersData({
                container : sPersContainer,
                item : sPersItem,
                variant : sPersVariant
            }, oValue);

        };

        /**
         * Deletes a personalization data value.
         * 
         * @returns {object} Promise object which returns if the deletion was
         *          successful or erroneous. Promise object done function: no
         *          params. Promise object fail function: param {string}
         *          sMessage Error message
         * @since 1.15.0
         */
        this.delPersData = function () {
            return oAdapter.delPersData({
                container : sPersContainer,
                item : sPersItem,
                variant : sPersVariant
            });
        };
    };
}());
