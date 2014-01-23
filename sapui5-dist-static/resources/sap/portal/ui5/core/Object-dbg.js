"use strict";

jQuery.sap.require('sap.ui.base.ManagedObject');
jQuery.sap.require('sap.portal.ui5.core.ObjectMetadata');
jQuery.sap.declare('sap.portal.ui5.core.Object');

/**
 * @experimental
 * @class   sap.portal.ui5.core.Object
 * @extends sap.ui.base.ManagedObject
 * @uses    sap.portal.ui5.core.ObservablePropertiesMixin
 * @abstract
 */
sap.ui.base.ManagedObject.extend('sap.portal.ui5.core.Object', {

    metadata: {
        'abstract':    true,
        publicMethods: [],
        library:       'sap.portal.ui5.core',
        properties:    {},
        aggregations:  {},
        associations:  {},

        events: {

            /**
             * @event
             */
            init: {
            },

            /**
             * @event
             */
            destroy: {
            }

        },

        mixins: ['sap.portal.ui5.core.ObservablePropertiesMixin']

    },

    /**
     *
     */
    constructor: function constructor() {

        sap.ui.base.ManagedObject.apply(this, arguments);
        this.afterInit();

    },

    /**
     *
     */
    afterInit: function afterInit() {

        this.fireEvent('init');

    },

    /**
     *
     * @param oProperties
     */
    setProperties: function setProperties(oProperties) {

        var fnSetter;

        for (var sProperty in oProperties) {
            fnSetter = this['set' + sProperty[0].toUpperCase() + sProperty.substring(1)];
            if (typeof(fnSetter) === 'function') {
                fnSetter.call(this, oProperties[sProperty]);
            } else {
                this.setProperty(sProperty, oProperties[sProperty]);
            }
        }

        return this;

    },

    /**
     *
     * @returns {*}
     */
    destroy: function destroy() {

        var aPromises = [],
            fnSuper   = this._super.bind(this, arguments),
            sId       = this.getId(),
            oDfd      = jQuery.Deferred();

        this.fireEvent('destroy', {
            promises: aPromises
        });

        // Make promise which will be resolved
        // only when all operations be resolved
        jQuery
            .when.apply(jQuery, aPromises)
            .always( function() {

                jQuery
                    .when(fnSuper())
                    .always( function() {

                        //jQuery.sap.log.debug('Resolving Object.destroy promise', sId);
                        oDfd.resolve();

                    });

            });

        return oDfd.promise();

    },

    /**
     * @returns {boolean}
     */
    isDestroyed: function isDestroyed() {

        return Boolean(this.bIsDestroyed);

    }

}, /* Metadata constructor */ sap.portal.ui5.core.ObjectMetadata);

/**
 *
 * @param oConfig
 * @param sInterfaceClass
 */
sap.portal.ui5.core.Object.factoryUCTypeObject = function factoryUCTypeObject(oConfig, sInterfaceClass) {

    var sConstructorClass = oConfig.uctype || sInterfaceClass;

    // DISABLED: corrupts objects
    //delete oConfig.uctype;

    return sap.portal.ui5.core.Object.factoryObject(oConfig, sInterfaceClass, sConstructorClass);

};

/**
 *
 * @param oObject
 * @param sInterfaceClass
 */
sap.portal.ui5.core.Object.isInstanceOf = function isInstanceOf(oObject, sInterfaceClass) {

    var fnInterfaceConstructor = jQuery.sap.getObject(sInterfaceClass);

    if (typeof(fnInterfaceConstructor) !== 'function' || fnInterfaceConstructor._sapUiLazyLoader) {

        jQuery.sap.require(sInterfaceClass);

        fnInterfaceConstructor = jQuery.sap.getObject(sInterfaceClass);

        if (typeof(fnInterfaceConstructor) !== 'function') {
            throw new Error('Class ' + sInterfaceClass + ' is not found');
        }

    }

    if (oObject === null) {
        return false;
    }

    if (oObject instanceof fnInterfaceConstructor) {
        return true;
    }

    if (typeof(oObject.getMetadata) === 'function'
    &&  typeof(oObject.getMetadata().getMixins) === 'function'
    &&  oObject.getMetadata().getMixins().indexOf(sInterfaceClass) !== -1) {
        return true;
    }

    return false;

};

/**
 *
 * @param oConfig
 * @param sInterfaceClass
 * @param sConstructorClass
 * @returns {*}
 */
sap.portal.ui5.core.Object.factoryObject = function factoryObject(oConfig, sInterfaceClass, sConstructorClass) {

    var oObject;

    if (jQuery.isPlainObject(oConfig)) {

        var fnConstructor = jQuery.sap.getObject(sConstructorClass);
        if (typeof(fnConstructor) !== 'function' || fnConstructor._sapUiLazyLoader) {
            jQuery.sap.require(sConstructorClass);
            fnConstructor = jQuery.sap.getObject(sConstructorClass);
            if (typeof(fnConstructor) !== 'function') {
                throw new Error('Class ' + sConstructorClass + ' is not found');
            }
        }

        if (typeof(fnConstructor.getMetadata) === 'function'
        &&  typeof(fnConstructor.getMetadata().isAbstract) === 'function'
        &&  fnConstructor.getMetadata().isAbstract()) {
            throw new Error('Class ' + sConstructorClass + ' is abstract');
        }

        oObject = new fnConstructor(oConfig);

    } else {

        oObject = oConfig;

    }

    // check here
    if (sInterfaceClass && !sap.portal.ui5.core.Object.isInstanceOf(oObject, sInterfaceClass)) {
        throw new Error('Interface mismatch');
    }

    return oObject;

};
