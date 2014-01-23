"use strict";

jQuery.sap.require('sap.portal.ui5.core.Object');
jQuery.sap.declare('sap.portal.ui5.core.View');

/**
 * @experimental
 * @class sap.portal.ui5.core.View
 * @extends sap.portal.ui5.core.Object
 */
sap.portal.ui5.core.Object.extend('sap.portal.ui5.core.View', {
    metadata: {
        'abstract': true,
        properties: {

            /**
             * @cfg {Object}
             * @accessor
             */
            componentModel: {
                type: 'any',
                defaultValue: null
            },

            /**
             * @cfg {sap.portal.ui5.core.Component}
             * @accessor
             */
            controller: {
                type: 'any',
                defaultValue: null
            },

            /**
             * @cfg {string}
             * @accessor
             */
            placeAt: {
                type: 'any',
                defaultValue: null
            }

        },
        events: {

            /**
             * @event
             */
            render: {},

            /**
             * @event
             */
            renderChildComponents: {},

            /**
             * @event
             */
            beforeUnrender: {},

            /**
             * @event
             */
            unrender: {},

            /**
             * Before component repaint/dimension change
             * @event
             */
            beforeReflow: {},

            /**
             * Component repainted/dimension changed
             * @event
             */
            reflow: {}

        }
    },

    /**
     * @return {jQuery.promise}
     */
    unrender: function unrender() {

        jQuery.sap.log.error('CALLING STUB FUNCTION');
        this.fireEvent('beforeUnrender');
        this.fireEvent('unrender');
        var oDfd = jQuery.Deferred();
        oDfd.resolve();
        return oDfd.promise();

    },

    /**
     * @return {jQuery.promise}
     */
    render: function render() {

        jQuery.sap.log.error('CALLING STUB FUNCTION');
        this.fireEvent('render');
        var oDfd = jQuery.Deferred();
        oDfd.resolve();
        return oDfd.promise();

    },

    /**
     * @return {jQuery.promise}
     */
    renderChildComponents: function renderChildComponents(aComponents, oLayoutData) {

        jQuery.sap.log.error('CALLING STUB FUNCTION');
        this.fireEvent('renderChildComponents');
        var oDfd = jQuery.Deferred();
        oDfd.resolve();
        return oDfd.promise();

    },

    /**
     *
     * @returns {boolean}
     */
    isRendered: function isRendered() {

        jQuery.sap.log.error('CALLING STUB FUNCTION');
        return false;

    },

    /**
     *
     * @param oController
     * @return {jQuery.Promise}
     */
    detachController: function detachController(oController) {

        if (this.getController() !== oController) {
            return undefined;
        }

        var aPromises = [];

        if (this.isRendered()) {
            aPromises.push( this.unrender() );
        }

        aPromises.push( this.setController(null) );
        aPromises.push( this.setPlaceAt(null) );

        return jQuery.when.apply(jQuery, aPromises);

    },

    /**
     *
     * @param oController
     */
    attachController: function attachController(oController) {

        this.setController(oController);

    },

    /**
     *
     * @returns {*}
     */
    destroy: function destroy() {

        var aPromises = [];

        var oController = this.getController();

        if (oController) {
            aPromises.push( this.detachController(oController) );
        }

        return jQuery
               .when.apply(jQuery, aPromises)
               .pipe( this._super.bind(this, arguments) );

    }

});
