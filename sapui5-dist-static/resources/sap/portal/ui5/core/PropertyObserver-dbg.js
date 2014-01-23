"use strict";

jQuery.sap.require('sap.portal.ui5.externals.es3shims.objectgetprototypeof');
jQuery.sap.require('sap.portal.ui5.externals.es5shims.arrayprototypeindexof');
jQuery.sap.require('sap.portal.ui5.externals.es5shims.arrayprototypelastindexof');
jQuery.sap.require('sap.portal.ui5.externals.es5shims.functionprototypebind');
jQuery.sap.require('sap.portal.ui5.externals.es5shims.windowprototypegetcomputedstyle');
jQuery.sap.declare('sap.portal.ui5.core.PropertyObserver');

/**
 * @experimental
 * @class sap.portal.ui5.core.PropertyObserver
 * @param aProperties
 * @param fnCallback
 * @returns {Function}
 * @constructor
 */
sap.portal.ui5.core.PropertyObserver = function PropertyObserver(aProperties, fnCallback) {

    var oObserver = !(this instanceof sap.portal.ui5.core.PropertyObserver) ?
        new sap.portal.ui5.core.PropertyObserver :
        this;

    if (aProperties) {
        oObserver.setObservableProperties(aProperties);
    }

    if (fnCallback) {
        oObserver.setCallback(fnCallback);
    }

    return oObserver;

};

sap.portal.ui5.core.PropertyObserver.prototype = {

    /**
     * @property {Function}
     */
    _fnCallback: null,

    /**
     * @property {Array}
     */
    _aProperties: [],

    /**
     * @property {Boolean}
     */
    _bIsCallableOnInit: false,

    /**
     * @property {Boolean}
     */
    _bIsSuspended: false,

    /**
     * @property {Object}
     */
    _oObservationTarget: null,

    /**
     * @property {String}
     */
    _sObservationProperty: null,

    /**
     *
     * @param aProperties
     */
    setObservableProperties: function setObservedProperties(aProperties) {

        if (typeof(aProperties) === 'string') {
            aProperties = [aProperties];
        }

        if (!(aProperties instanceof Array)) {
            // TODO:
            throw new TypeError;
        }

        this._aProperties = aProperties;

    },

    /**
     *
     * @returns {*}
     */
    getObservableProperties: function getObservedProperties() {

        return this._aProperties;

    },

    /**
     *
     * @param sProperty
     * @returns {boolean}
     */
    isObservesProperty: function isObservesProperty(sProperty) {

        return this._aProperties ? (this._aProperties.indexOf(sProperty) !== -1) : false;

    },

    /**
     *
     * @param fnCallback
     */
    setCallback: function setCallback(fnCallback) {

        this._fnCallback = fnCallback;

    },

    /**
     *
     * @returns {Function}
     */
    getCallback: function getCallback() {

        return this._fnCallback;

    },

    /**
     *
     * @returns {*}
     */
    callOnInit: function callOnInit() {

        this._bIsCallableOnInit = true;
        return this;

    },

    /**
     *
     * @returns {boolean}
     */
    isCallableOnInit: function isCallableOnInit() {

        return this._bIsCallableOnInit;

    },

    /**
     *
     * @returns {boolean}
     */
    isSuspended: function isSuspended() {

        return this._bIsSuspended;

    },

    /**
     *
     */
    suspend: function suspend() {

        this._bIsSuspended = true;

    },

    /**
     *
     */
    resume: function resume() {

        this._bIsSuspended = false;

    },

    /**
     *
     * @param vValue
     */
    updatePropertyValue: function updatePropertyValue(vValue, sProperty) {

        this._oObservationTarget.suspendPropertyObservers();
        this._oObservationTarget.setProperty(sProperty || this._sObservationProperty, vValue);
        this._oObservationTarget.resumePropertyObservers();

    },

    /**
     *
     * @param oTarget
     * @param sProperty
     * @param oNewValue
     * @param oOldValue
     * @returns {Function}
     */
    notify: function notify(oTarget, sProperty, oNewValue, oOldValue) {

        if (this.isSuspended()) {
            return;
        }

        var oPreservedObservationTarget = this._oObservationTarget,
            sPreservedObservationProperty = sProperty;


        this._oObservationTarget   = oTarget;
        this._sObservationProperty = sProperty;

        var fnCallback = this.getCallback();

        if (typeof(fnCallback) === 'string') {
            fnCallback = oTarget[fnCallback];
        }

        if (typeof(fnCallback) !== 'function') {
            throw new Error;
        }

        var vResult = fnCallback.call(oTarget, sProperty, oNewValue, oOldValue, this);

        this._oObservationTarget   = oPreservedObservationTarget;
        this._sObservationProperty = sPreservedObservationProperty;

        return vResult;

    }

};