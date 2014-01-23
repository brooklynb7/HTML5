"use strict";

jQuery.sap.require('sap.ui.base.ManagedObjectMetadata');
jQuery.sap.require('sap.portal.ui5.core.PropertyObserver');
jQuery.sap.declare('sap.portal.ui5.core.ObjectMetadata');

/**
 * @experimental
 * @class sap.portal.ui5.core.ObjectMetadata
 * @extends sap.ui.base.ManagedObject
 * @param sClassName
 * @param oClassInfo
 * @constructor
 */
sap.portal.ui5.core.ObjectMetadata = function ObjectMetadata(sClassName, oClassInfo) {

    // call super constructor
    sap.ui.base.ManagedObjectMetadata.apply(this, arguments);

};

//chain the prototypes
sap.portal.ui5.core.ObjectMetadata.prototype = jQuery.sap.newObject(sap.ui.base.ManagedObjectMetadata.prototype);

/**
 *
 * @param oClassInfo
 */
sap.portal.ui5.core.ObjectMetadata.prototype.extend = function extend(oClassInfo) {

    this._processPropertyObservers(oClassInfo);
    this.extendWithMixins(oClassInfo);
    return sap.ui.base.ManagedObjectMetadata.prototype.extend.call(this, oClassInfo);

};

/**
 * @member sap.portal.ui5.core.ObjectMetadata
 * @param oClassInfo
 */
sap.portal.ui5.core.ObjectMetadata.prototype.extendWithMixins = function extendWithMixins(oClassInfo) {

    var oBaseClass   = this.getClass().prototype,
        oParentClass = this.getParentClassPrototype(oClassInfo);

    if (!oParentClass || !oBaseClass) {
        // TODO: Desc
        throw new Error();
    }

    var sProp, iIndex, iLength,
        oMerge = {};

    for (sProp in oClassInfo) {
        if (oClassInfo.hasOwnProperty(sProp)) {
            oMerge[sProp] = [oClassInfo[sProp]];
        }
    }

    var aNewMixins = oClassInfo.metadata.mixins,
        aMixins = (this.getParent() instanceof sap.portal.ui5.core.ObjectMetadata) ?
            this.getParent().getMixins() :
            [];

    if (aNewMixins) {

        var sMixinName, oMixinBody,
            sMixinProp;

        for (iIndex = aNewMixins.length - 1; iIndex > -1; iIndex--) {

            sMixinName = aNewMixins[iIndex];

            if (aMixins.indexOf(sMixinName) !== -1) {
                continue; // Mixin already mixed
            }

            jQuery.sap.require(sMixinName);

            oMixinBody = jQuery.sap.getObject(sMixinName);

            if (typeof(oMixinBody) === 'function') {
                oMixinBody = oMixinBody.prototype;
            }

            for (sMixinProp in oMixinBody) {
                if (oMixinBody.hasOwnProperty(sMixinProp)) {
                    if (oMerge[sMixinProp]) {
                        oMerge[sMixinProp].splice(
                            oMerge[sMixinProp].length - 1, 0,
                            oMixinBody[sMixinProp]
                        );
                    } else {
                        oMerge[sMixinProp] = [oMixinBody[sMixinProp]];
                    }
                }
            }

        }

    }

    var oMergeValue, oProp;

    for (sProp in oMerge) {
        if (oMerge.hasOwnProperty(sProp)) { // Here is important to check own property

            oProp = oMerge[sProp];

            if (typeof(oParentClass[sProp]) !== 'undefined') {
                oProp.unshift(oParentClass[sProp]);
            }

            switch (typeof(oProp[oProp.length - 1])) {

            // Merge methods
            case 'function':

                if (sProp !== 'constructor') {

                    oMergeValue = oProp[0];

                    for (iIndex = 1, iLength = oProp.length; iIndex < iLength; iIndex++) {

                        // TODO: Insert here support of property observers chaining???

                        if (typeof(oMergeValue)   === 'function'
                        &&  typeof(oProp[iIndex]) === 'function') {
                            oMergeValue = this.factorySuperMethodWrapper(oMergeValue, oProp[iIndex]);
                        } else {
                            oMergeValue = oProp[iIndex];
                        }

                    }

                    oProp = oMergeValue;

                }

                break;

            default:
                oProp = oProp[oProp.length - 1];
                break;

            }

            if (oClassInfo[sProp] !== oProp) {
                oClassInfo[sProp] = oProp;
            }

        }
    }

};

/**
 *
 * @param {Function} fnSuper
 * @param {Function} fnOverload
 * @return {Function}
 */
sap.portal.ui5.core.ObjectMetadata.prototype.factorySuperMethodWrapper = function factorySuperMethodWrapper(fnSuper, fnOverload) {

    var fnOverloadedMethod = function overloadedMethod() {

        // Save existing call parent
        var fnOriginalSuper = this._super;

        // Set new super and bind scope
        this._super = function shiftSuper() {

            // NOTE: This function wrapper is required to avoid
            // endless loop when calling super from super.
            // In such cases without this function the super method
            // points to himself causing endless recursion.

            // Shifting super method
            this._super = fnOriginalSuper;

            // Cleanup
            if (typeof(this._super) === 'undefined') {
                delete this._super;
            }

            return fnSuper.apply(this, arguments);

        };

        // Save overloaded function result
        var vResult = fnOverload.apply(this, arguments);

        // Restore call parent
        this._super = fnOriginalSuper;

        // Cleanup
        if (typeof(this._super) === 'undefined') {
            delete this._super;
        }

        return vResult;

    };

    return fnOverloadedMethod;

};

/**
 * @private
 * @param oClassInfo
 */
sap.portal.ui5.core.ObjectMetadata.prototype._processPropertyObservers = function processPropertyObservers(oClassInfo) {

    // Add holder for property observers
    this._mPropertyObservers = {};
    this._mMixins = oClassInfo.metadata.mixins || [];

    var oBaseClass   = this.getClass().prototype,
        oParentClass = this.getParentClassPrototype(oClassInfo);

    if (!oParentClass || !oBaseClass) {
        // TODO: Desc
        throw new Error();
    }

    var sProp, oObserver;

    // Extract property observers into metadata property
    // and replace PO objects in class body to theirs callback methods.
    for (sProp in oClassInfo) {
        if (oClassInfo[sProp] instanceof sap.portal.ui5.core.PropertyObserver) {
            oObserver = oClassInfo[sProp];
            this._mPropertyObservers[sProp] = oObserver;
            oBaseClass[sProp] = oClassInfo[sProp] = oObserver.getCallback();
            oObserver.setCallback(sProp);
        }
    }

};

/**
 *
 * @param sKey
 * @returns {*}
 */
sap.portal.ui5.core.ObjectMetadata.prototype.getPropertyObserver = function getPropertyObserver(sKey) {

    return this._mPropertyObservers[sKey];

};

/**
 *
 * @returns {*}
 */
sap.portal.ui5.core.ObjectMetadata.prototype.getPropertyObservers = function getPropertyObservers() {

    if (this.getParent() instanceof sap.portal.ui5.core.ObjectMetadata) {
        return jQuery.extend({}, this.getParent().getPropertyObservers(), this._mPropertyObservers);
    } else {
        return this._mPropertyObservers;
    }

};

/**
 *
 * @param oClassInfo
 * @returns {*}
 */
sap.portal.ui5.core.ObjectMetadata.prototype.getParentClassPrototype = function getParentPrototype(oClassInfo) {

    var sParentClass = oClassInfo.metadata.baseType + '.prototype';
    return jQuery.sap.getObject(sParentClass);

};

/**
 *
 * @returns {*}
 */
sap.portal.ui5.core.ObjectMetadata.prototype.getMixins = function getMixins() {

    if (this.getParent() instanceof sap.portal.ui5.core.ObjectMetadata) {
        return this._mMixins.concat(this.getParent().getMixins());
    } else {
        return jQuery.unique(this._mMixins);
    }

};
