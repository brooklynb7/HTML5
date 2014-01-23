"use strict";

jQuery.sap.require('sap.portal.ui5.core.View');

/**
 * @experimental
 * @class sap.portal.ui5.core.DynamicView
 * @extends sap.portal.ui5.core.View
 */
sap.portal.ui5.core.View.extend('sap.portal.ui5.core.DynamicView', {

    metadata: {
        properties: {

            /**
             *
             */
            defaultView: {
                type: 'any',
                defaultValue: null
            },

            /**
             *
             */
            desktopView: {
                type: 'any',
                defaultValue: null
            },

            /**
             *
             */
            mobileView: {
                type: 'any',
                defaultValue: null
            },

            /**
             *
             */
            tabletView: {
                type: 'any',
                defaultValue: null
            },

            /**
             *
             */
            phoneView: {
                type: 'any',
                defaultValue: null
            },

            /**
             * Bridged view object
             * @property {sap.portal.ui5.core.View}
             * @protected
             */
            viewApi: {
                type: 'any',
                defaultValue: null
            },

            /**
             * @protected
             */
            viewClass: {
                type: 'string',
                defaultValue: 'sap.portal.ui5.core.View'
            },

            /**
             * @protected
             */
            detectedDevices: {
                type: 'any',
                defaultValue: jQuery.device.is
            }

        }
    },

    /**
     *
     * @returns {*}
     */
    detectViewApi: function detectViewApi() {

        var oDetected = this.getDetectedDevices();

        var oPhoneView   = this.getPhoneView(),
            oTabletView  = this.getTabletView(),
            oMobileView  = this.getMobileView(),
            oDesktopView = this.getDesktopView(),
            oDefaultView = this.getDefaultView();

        if (!oDefaultView) {
            throw new Error('No default view defined');
        }

        switch (true) {

        case Boolean(oDetected.phone && oPhoneView):
            return oPhoneView;

        case Boolean(oDetected.tablet && oTabletView):
            return oTabletView;

        case Boolean(oDetected.mobile && oMobileView):
            return oMobileView;

        case Boolean(oDetected.desktop && oDesktopView):
            return oDesktopView;

        default:
            return oDefaultView;

        }

    },

    /**
     * @protected
     */
    processViewApi: sap.portal.ui5.core.PropertyObserver('viewApi', function processViewApi(sKey, oValue, oOldValue, oObserver) {

        var oViewApi   = this.getViewApi(),
            sViewClass = this.getViewClass();

        if (oViewApi === null) {
            oViewApi = this.detectViewApi();
        }

        if (jQuery.isPlainObject(oViewApi)) {
            oViewApi = sap.portal.ui5.core.Object.factoryUCTypeObject(oViewApi, sViewClass);
        } else if (!sap.portal.ui5.core.Object.isInstanceOf(oViewApi, sViewClass)) {
            throw new Error('Interface mismatch');
        }

        // Update property in object without triggering observation again
        oObserver.updatePropertyValue(oViewApi);

        // Subscribe to all view events to make event forwarding
        var oEvents = this.getMetadata().getAllEvents(),
            sEvent;

        for (sEvent in oEvents) {
            oViewApi.attachEvent(sEvent, {}, function forwardEvent(oEvent) {
                this.fireEvent(oEvent.sId, oEvent.getParameters());
            });
        }

    }).callOnInit(),

    /**
     * @protected
     */
    proxySetProperty: sap.portal.ui5.core.PropertyObserver(
        ['componentModel', 'controller', 'placeAt'],
        function proxySetProperty(sKey, oValue) {

            var oViewApi = this.getViewApi();
            oViewApi.setProperty(sKey, oValue);

        }
    ).callOnInit(),

    /**
     * @return {jQuery.promise}
     */
    unrender: function unrender() {

        var oViewApi = this.getViewApi();
        return oViewApi.unrender.apply(oViewApi, arguments);

    },

    /**
     * @return {jQuery.promise}
     */
    render: function render() {

        var oViewApi = this.getViewApi();
        return oViewApi.render.apply(oViewApi, arguments);

    },

    /**
     * @return {jQuery.promise}
     */
    renderChildComponents: function renderChildComponents(aComponents, oLayoutData) {

        var oViewApi = this.getViewApi();
        return oViewApi.renderChildComponents.apply(oViewApi, arguments);

    },

    /**
     *
     * @returns {boolean}
     */
    isRendered: function isRendered() {

        var oViewApi = this.getViewApi();
        return oViewApi.isRendered.apply(oViewApi, arguments);

    },

    /**
     *
     * @returns {*}
     */
    destroy: function destroy() {

        var oViewApi = this.getViewApi();
        return oViewApi.destroy.apply(oViewApi, arguments);

    }

});