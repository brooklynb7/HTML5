"use strict";

jQuery.sap.require('sap.portal.ui5.core.Collection');
jQuery.sap.declare('sap.portal.ui5.core.ComponentCollection');

/**
 * @experimental
 * @class sap.portal.ui5.core.ComponentCollection
 * @extends sap.portal.ui5.core.Collection
 */
sap.portal.ui5.core.Collection.extend('sap.portal.ui5.core.ComponentCollection', {

    metadata: {

        properties: {

            /**
             * @cfg {boolean}
             * @accessor
             */
            castItems: {
                type: 'boolean',
                defaultValue: true
            },

            /**
             * @cfg {string}
             * @accessor
             */
            itemType: {
                type: 'string',
                defaultValue: 'sap.portal.ui5.core.Component'
            },

            /**
             * @cfg {boolean}
             * @accessor
             */
            autoDestroyItems: {
                type: 'boolean',
                defaultValue: true
            }

        }

    },

    /**
     *
     *
     * @param sMethod
     * @param aArguments
     * @returns {Array}
     */
    applyMethod: function applyMethod(sMethod, aArguments) {

        var aCollection = this.aCollection,
            iIndex, oItem, iLength = aCollection.length,
            aResult = [];

        for (iIndex = 0; iIndex < iLength; iIndex++) {
            oItem = aCollection[iIndex];
            aResult.push( oItem[sMethod].apply(oItem, aArguments ? aArguments : []) );
        }

        return aResult;

    },

    /**
     *
     * @param sId
     * @param bRecursive
     * @returns {*}
     */
    getByComponentId: function getByComponentId(sId, bRecursive) {

        var aCollection = this.aCollection,
            iIndex, iLength = aCollection.length;

        for (iIndex = 0; iIndex < iLength; iIndex++) {
            if (aCollection[iIndex].getComponentId() === sId) {
                return aCollection[iIndex];
            }
        }

        if (bRecursive) {
            var oResult;
            for (iIndex = 0; iIndex < iLength; iIndex++) {
                oResult = aCollection[iIndex].getChildByComponentId(sId, true);
                if (oResult) {
                    return oResult;
                }
            }
        }

    }

});
