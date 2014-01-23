// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The SAPUI5 component of SAP's Fiori Wave 2 renderer for the Unified Shell.
 *
 * @version 1.16.4
 */
/**
 * @namespace Namespace for SAP's fiori2 renderer for the Unified Shell. The renderer consists
 * of an SAPUI5 component called <code>sap.ushell.renderers.fiori2.Renderer</code>.
 *
 * @name sap.ushell.renderers.fiori2
 * @see sap.ushell.renderers.fiori2.Renderer
 * @since 1.9.0
 * @private
 */
(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.renderers.fiori2.Renderer");

    jQuery.sap.require("sap.ui.core.UIComponent");
    jQuery.sap.require("sap.ushell.resources");

    /**
     * This method MUST be called by the Unified Shell's container only, others MUST call
     * <code>sap.ushell.Container.createRenderer("fiori2")</code>.
     *
     * @class The SAPUI5 component of SAP's Fiori Wave 2 renderer for the Unified Shell.
     *
     * @extends sap.ui.core.UIComponent
     * @name sap.ushell.renderers.fiori2.Renderer
     * @see sap.ushell.services.Container#createRenderer
     * @since 1.15.0
     * @public
     */
    sap.ui.core.UIComponent.extend("sap.ushell.renderers.fiori2.Renderer", {
        metadata : {
            version : "1.16.4",
            dependencies : {
                version : "1.16.4",
                libs : [ "sap.ui.core", "sap.ui.unified", "sap.m" ],
                components: []
            }
        }
    });

    /**
     * *TODO*
     *
     * @returns *TODO*
     *
     * @methodOf sap.ushell.renderers.fiori2.Renderer#
     * @name createContent
     * @since 1.15.0
     *
     * @private
     */
    sap.ushell.renderers.fiori2.Renderer.prototype.createContent = function () {
        return sap.ui.view({
            type: sap.ui.core.mvc.ViewType.JS,
            viewName: "sap.ushell.renderers.fiori2.Shell"
        });
    };
}());
