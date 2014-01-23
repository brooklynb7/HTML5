"use strict";

jQuery.sap.require('sap.portal.ui5.core.Object');
jQuery.sap.declare('sap.portal.ui5.core.LayoutInterface');

/**
 * @experimental
 * @class sap.portal.ui5.core.LayoutInterface
 * @extends sap.portal.ui5.core.Object
 */
sap.portal.ui5.core.Object.extend('sap.portal.ui5.core.LayoutInterface', {

    metadata: {
        'abstract': true
    },

    /**
     *
     * @param aComponents
     * @param oLayoutData
     * @param oView
     * @param oComponent
     * @returns {{component: {}, childComponents: {}}}
     */
    processLayout: function processLayout(aComponents, oLayoutData, oView, oComponent) {

        return {

            component: {
            },

            childComponents: {
            }

        }

    }

});
