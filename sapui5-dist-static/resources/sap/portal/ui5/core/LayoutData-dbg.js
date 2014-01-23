"use strict";

jQuery.sap.require('sap.portal.ui5.core.Collection');
jQuery.sap.declare('sap.portal.ui5.core.LayoutData');

/**
 * @experimental
 * @class sap.portal.ui5.core.LayoutData
 * @extends sap.portal.ui5.core.Collection
 */
sap.portal.ui5.core.Collection.extend('sap.portal.ui5.core.LayoutData', {

    metadata: {
        properties: {

            /**
             * @protected
             * @cfg {string}
             */
            primaryKey: {
                type: 'string',
                defaultValue: 'componentId'
            },

            /**
             * Parameters for layout engine
             * @cfg {Object}
             */
             layoutConfig: {
                 type: 'any',
                 defaultValue: {}
             }

        }
    },

    /**
     *
     * @param sId
     * @returns {*}
     */
    getByComponentId: function getByComponentId(sId, sProperty) {

        var iIndex = this.findByProperty(sProperty || this.getPrimaryKey(), sId);

        if (iIndex === -1) {
            return;
        }

        return this.getItemAtIndex(iIndex);

    }

});