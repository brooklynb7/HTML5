/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.ZoomableScrollContainer.
jQuery.sap.declare("sap.ca.ui.ZoomableScrollContainer");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.m.ScrollContainer");


/**
 * Constructor for a new ZoomableScrollContainer.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getZoomable zoomable} : boolean (default: true)</li>
 * <li>{@link #getInitialScale initialScale} : float (default: 1)</li>
 * <li>{@link #getMinScale minScale} : float (default: 1)</li>
 * <li>{@link #getMaxScale maxScale} : float (default: 4)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ScrollContainer#constructor sap.m.ScrollContainer}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Based on a ScrollContainer, it allows you to pinch and zoom on mobile devices
 * @extends sap.m.ScrollContainer
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.ZoomableScrollContainer
 */
sap.m.ScrollContainer.extend("sap.ca.ui.ZoomableScrollContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"zoomable" : {type : "boolean", group : "Misc", defaultValue : true},
		"initialScale" : {type : "float", group : "Misc", defaultValue : 1},
		"minScale" : {type : "float", group : "Misc", defaultValue : 1},
		"maxScale" : {type : "float", group : "Misc", defaultValue : 4}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.ZoomableScrollContainer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ca.ui.ZoomableScrollContainer.extend
 * @function
 */


/**
 * Getter for property <code>zoomable</code>.
 * Activate or not the zooming functionality. If FALSE, it acts exactly as a basic ScrollContainer.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>zoomable</code>
 * @public
 * @name sap.ca.ui.ZoomableScrollContainer#getZoomable
 * @function
 */

/**
 * Setter for property <code>zoomable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bZoomable  new value for property <code>zoomable</code>
 * @return {sap.ca.ui.ZoomableScrollContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.ZoomableScrollContainer#setZoomable
 * @function
 */


/**
 * Getter for property <code>initialScale</code>.
 * Initial scaling factor
 *
 * Default value is <code>1</code>
 *
 * @return {float} the value of property <code>initialScale</code>
 * @public
 * @name sap.ca.ui.ZoomableScrollContainer#getInitialScale
 * @function
 */

/**
 * Setter for property <code>initialScale</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {float} fInitialScale  new value for property <code>initialScale</code>
 * @return {sap.ca.ui.ZoomableScrollContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.ZoomableScrollContainer#setInitialScale
 * @function
 */


/**
 * Getter for property <code>minScale</code>.
 * Lowest scaling factor allowed
 *
 * Default value is <code>1</code>
 *
 * @return {float} the value of property <code>minScale</code>
 * @public
 * @name sap.ca.ui.ZoomableScrollContainer#getMinScale
 * @function
 */

/**
 * Setter for property <code>minScale</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {float} fMinScale  new value for property <code>minScale</code>
 * @return {sap.ca.ui.ZoomableScrollContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.ZoomableScrollContainer#setMinScale
 * @function
 */


/**
 * Getter for property <code>maxScale</code>.
 * Highest scaling factor allowed
 *
 * Default value is <code>4</code>
 *
 * @return {float} the value of property <code>maxScale</code>
 * @public
 * @name sap.ca.ui.ZoomableScrollContainer#getMaxScale
 * @function
 */

/**
 * Setter for property <code>maxScale</code>.
 *
 * Default value is <code>4</code> 
 *
 * @param {float} fMaxScale  new value for property <code>maxScale</code>
 * @return {sap.ca.ui.ZoomableScrollContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.ZoomableScrollContainer#setMaxScale
 * @function
 */


// Start of sap\ca\ui\ZoomableScrollContainer.js


sap.ca.ui.ZoomableScrollContainer.prototype.init = function() {
    sap.m.ScrollContainer.prototype.init.apply(this);
};

sap.ca.ui.ZoomableScrollContainer.prototype.onAfterRendering = function() {

    var fnCallback = this.getScrollDelegate().onAfterRendering;

    var fScale = this.getInitialScale();
    var fMin = this.getMinScale();
    var fMax = this.getMaxScale();
    var bZoomable = this.getZoomable();


    this.getScrollDelegate().onAfterRendering = function(){
        fnCallback.call(this);
        this._scroller.scale = fScale;
        this._scroller.options.zoom = bZoomable;
        this._scroller.options.zoomMin = fMin;
        this._scroller.options.zoomMax = fMax;
        this._scroller.zoom(0, 0, fScale);

        this._scroller.options.onZoom = function(oEvent) {
            // "this" is the scroller
        };
        this._scroller.options.onZoomStart = function(oEvent) {
        };
    };
};
