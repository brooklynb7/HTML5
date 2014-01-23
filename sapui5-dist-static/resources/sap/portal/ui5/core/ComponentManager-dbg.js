"use strict";

jQuery.sap.require('sap.portal.ui5.core.Object');
jQuery.sap.declare('sap.portal.ui5.core.ComponentManager');

/**
 * @experimental
 * @class sap.portal.ui5.core.ComponentManager
 * @extends sap.portal.ui5.core.Object
 */
sap.portal.ui5.core.Object.extend('sap.portal.ui5.core.ComponentManager', {

    /**
     * @property {Object}
     * @private
     */
    _oComponents: {},

    /**
     *
     * @param sId
     * @returns {*}
     */
    getComponent: function getComponent(sId) {

        return this._oComponents[sId];

    },

    /**
     *
     * @param sId
     * @param oComponent
     */
    registerComponent: function registerComponent(sId, oComponent) {

        if (typeof(sId) !== 'string' && typeof(sId) !== 'number') {
            throw new TypeError('ID is not string/number');
        }

        if (!(oComponent instanceof sap.portal.ui5.core.Component)) {
            throw new TypeError('Given component is not instance');
        }

        if (this._oComponents[sId]) {
            throw new Error('ID ' + sId + ' is already registered in component manager.');
        }

        this._oComponents[sId] = oComponent;

    },

    /**
     *
     * @param sId
     */
    unregisterComponent: function unregisterComponent(sId) {

        if (typeof(sId) !== 'string' && typeof(sId) !== 'number') {
            throw new TypeError('ID is not string/number');
        }

        delete this._oComponents[sId];

    }

});

// Create singletone
/**
 * @singleton
 * @type {sap.portal.ui5.core.ComponentManager}
 */
sap.portal.ui5.core.ComponentManager = new sap.portal.ui5.core.ComponentManager;
