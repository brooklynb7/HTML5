"use strict";

jQuery.sap.require('sap.portal.ui5.externals.es3shims.objectgetprototypeof');
jQuery.sap.require('sap.portal.ui5.externals.es5shims.arrayprototypeindexof');
jQuery.sap.require('sap.portal.ui5.externals.es5shims.arrayprototypelastindexof');
jQuery.sap.require('sap.portal.ui5.externals.es5shims.functionprototypebind');
jQuery.sap.require('sap.portal.ui5.externals.es5shims.windowprototypegetcomputedstyle');
jQuery.sap.declare('sap.portal.ui5.core.ObservablePropertiesMixin');

/**
 * @experimental
 * @class sap.portal.ui5.core.ObservablePropertiesMixin
 */
sap.portal.ui5.core.ObservablePropertiesMixin = {

    /**
     * @property {boolean}
     * @private
     */
    _bNotifyPropertyObserversSuspended: false,

    /**
     *
     */
    applySettings: function applySettings() {

        this._bindNestedPropertiesObservation();

        if (this._super) {
            this._super.apply(this, arguments);
        }

        this._bindPropertiesObservation();
        this._notifyInitPropertyObservers();

    },

    /**
     *
     * @param sPropertyPath
     * @returns {*}
     */
    getPropertyByPath: function getPropertyByPath(sPropertyPath) {

        var oScope = this,
            sProperty = sPropertyPath,
            sGetter,
            oValue;

        if (sPropertyPath.indexOf('.') > -1) {

            var aPropertyPath = sPropertyPath.split('.'),
                iIndex, iLength;

            for (iIndex = 0, iLength = aPropertyPath.length - 1;
                iIndex < iLength;
                iIndex++) {

                sProperty = aPropertyPath[iIndex];
                sGetter = 'get' + sProperty.charAt(0).toUpperCase() + sProperty.slice(1);

                if (typeof(oScope[sGetter]) === 'function') {

                    oScope = oScope[sGetter].apply(oScope);

                } else {

                    oScope = oScope.getProperty(sProperty);

                }

                if (!oScope) {
                    return;
                }

            }

            // Point to tail
            sProperty = aPropertyPath[iIndex];

        }

        sGetter = 'get' + sProperty.charAt(0).toUpperCase() + sProperty.slice(1);
        if (typeof(oScope[sGetter]) === 'function') {

            oValue = oScope[sGetter].apply(oScope);

        } else {

            oValue = oScope.getProperty(sProperty);

        }

        return oValue;

    },

    /**
     *
     * @private
     */
    _notifyInitPropertyObservers: function _notifyInitPropertyObservers() {

        var oObservers = this.getMetadata().getPropertyObservers();

        var sObserverKey,
            iPropertyIndex, iPropertiesLength,
            oObserver, aProperties;

        for (sObserverKey in oObservers) {
            if (typeof(oObservers[sObserverKey]) !== 'undefined') {

                oObserver = oObservers[sObserverKey];

                if (!oObserver.isCallableOnInit()) {
                    continue;
                }

                aProperties = oObserver.getObservableProperties();

                for (iPropertyIndex = 0, iPropertiesLength = aProperties.length;
                     iPropertyIndex < iPropertiesLength;
                     iPropertyIndex++) {
                    this._notifyPropertyObserver(oObserver, aProperties[iPropertyIndex]);
                }
            }
        }

    },

    /**
     *
     * @private
     */
    _bindPropertiesObservation: function _bindPropertiesObservation() {

        // Observe own properties
        this.attachEvent('_change', this._notifyPropertyObservers.bind(this));

    },

    /**
     *
     * @private
     */
    _bindNestedPropertiesObservation: function _bindNestedPropertiesObservation() {

        var oProperties = this.getMetadata().getAllProperties(),
            sPropertyName,
            oProperty;

        // Bind observation of nested properties
        for (sPropertyName in oProperties) {
            if (typeof(oProperties[sPropertyName]) !== 'undefined') {

                oProperty = this.getProperty(sPropertyName);

                if (oProperty instanceof sap.ui.base.ManagedObject) {
                    this._bindNestedPropertyObservation(oProperty, sPropertyName);
                }

            }
        }

        this.attachEvent('_change', function _rebindNestedPropertiesObservation(oEvent) {

            var oValue = oEvent.getParameter('newValue'),
                sPropertyName = oEvent.getParameter('name');

            if (oValue instanceof sap.ui.base.ManagedObject) {
                this._bindNestedPropertyObservation(oValue, sPropertyName);
            }

        }.bind(this));

    },

    /**
     *
     * @param oProperty
     * @param sPropertyName
     * @private
     */
    _bindNestedPropertyObservation: function _bindNestedPropertyObservation(oProperty, sPropertyName) {

        var fnNotifyObserver = this._notifyNestedPropertyObservers.bind(this, oProperty, sPropertyName);
        oProperty.attachEvent('_change', fnNotifyObserver);

    },

    /**
     *
     * @param oProperty
     * @private
     */
    _unbindNestedPropertyObservation: function _unbindNestedPropertyObservation(oProperty) {

        // TODO:

    },

    /**
     *
     * @param oEvent
     * @private
     */
    _notifyNestedPropertyObservers: function _notifyNestedPropertyObservers(oParentProperty, sParentPropertyName, oEvent) {

        var oObservers = oObservers || this.getMetadata().getPropertyObservers(),
            sObserverKey;

        if (this._bNotifyPropertyObserversSuspended) {
            return;
        }

        var sProperty = oEvent.getParameter('name');

        for (sObserverKey in oObservers) {
            if (typeof(oObservers[sObserverKey]) !== 'undefined') {
                this._notifyPropertyObserver(oObservers[sObserverKey], oEvent, sParentPropertyName + '.' + sProperty);
            }
        }

    },

    /**
     *
     * @param oEvent
     * @private
     */
    _notifyPropertyObservers: function _notifyPropertyObservers(oEvent, oObservers) {

        var oObservers = oObservers || this.getMetadata().getPropertyObservers(),
            sObserverKey;

        if (this._bNotifyPropertyObserversSuspended) {
            return;
        }

        for (sObserverKey in oObservers) {
            if (typeof(oObservers[sObserverKey]) !== 'undefined') {
                this._notifyPropertyObserver(oObservers[sObserverKey], oEvent);
            }
        }

    },

    /**
     *
     * @param oObserver
     * @param sProperty
     * @param oNewValue
     * @param oOldValue
     * @private
     */
    _notifyPropertyObserver: function _notifyPropertyObserver(oObserver, oEvent, sProperty) {

        if (oObserver.isSuspended()) {
            return;
        }

        var oNewValue, oOldValue;

        if (oEvent instanceof Object) {
            sProperty = sProperty || oEvent.getParameter('name');
            oOldValue = oEvent.getParameter('oldValue');
        } else if (typeof(oEvent) === 'string') {
            sProperty = oEvent;
            oOldValue = null
        }

        if (!oObserver.isObservesProperty(sProperty)) {
            return;
        }

        var oNewValue = this.getPropertyByPath(sProperty);

        return oObserver.notify(this, sProperty, oNewValue, oOldValue);

    },

    /**
     *
     */
    suspendPropertyObservers: function suspendPropertyObservers() {

        this._bNotifyPropertyObserversSuspended = true;

    },

    /**
     *
     */
    resumePropertyObservers: function resumePropertyObservers() {

        this._bNotifyPropertyObserversSuspended = false;

    }

};
