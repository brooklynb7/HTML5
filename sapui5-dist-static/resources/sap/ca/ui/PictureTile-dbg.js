/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.PictureTile.
jQuery.sap.declare("sap.ca.ui.PictureTile");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.m.CustomTile");


/**
 * Constructor for a new PictureTile.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '32px')</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '32px')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getTileContent tileContent} : string | sap.ca.ui.PictureViewerItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.PictureTile#event:pictureDelete pictureDelete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.CustomTile#constructor sap.m.CustomTile}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Tile control embedding an image and allowing custom sizing
 * @extends sap.m.CustomTile
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.PictureTile
 */
sap.m.CustomTile.extend("sap.ca.ui.PictureTile", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '32px'},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '32px'}
	},
	associations : {
		"tileContent" : {type : "sap.ca.ui.PictureViewerItem", multiple : false}
	},
	events : {
		"pictureDelete" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.PictureTile with name <code>sClassName</code> 
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
 * @name sap.ca.ui.PictureTile.extend
 * @function
 */

sap.ca.ui.PictureTile.M_EVENTS = {'pictureDelete':'pictureDelete'};


/**
 * Getter for property <code>height</code>.
 * height (in pixels) of the picture viewer control.
 *
 * Default value is <code>32px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ca.ui.PictureTile#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>32px</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ca.ui.PictureTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureTile#setHeight
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * width (in pixels) of the picture viewer control.
 *
 * Default value is <code>32px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ca.ui.PictureTile#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>32px</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ca.ui.PictureTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureTile#setWidth
 * @function
 */


/**
 * Reference to one PictureViewerItem coming from the PictureViewer.
 *
 * @return {string} Id of the element which is the current target of the <code>tileContent</code> association, or null
 * @public
 * @name sap.ca.ui.PictureTile#getTileContent
 * @function
 */

/**
 * Reference to one PictureViewerItem coming from the PictureViewer.
 *
 * @param {string | sap.ca.ui.PictureViewerItem} vTileContent 
 *    Id of an element which becomes the new target of this <code>tileContent</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ca.ui.PictureTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureTile#setTileContent
 * @function
 */


	
/**
 * Fired when the user deletes a picture 
 *
 * @name sap.ca.ui.PictureTile#pictureDelete
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'pictureDelete' event of this <code>sap.ca.ui.PictureTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.PictureTile</code>.<br/> itself. 
 *  
 * Fired when the user deletes a picture 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.PictureTile</code>.<br/> itself.
 *
 * @return {sap.ca.ui.PictureTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureTile#attachPictureDelete
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'pictureDelete' event of this <code>sap.ca.ui.PictureTile</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.PictureTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureTile#detachPictureDelete
 * @function
 */

/**
 * Fire event pictureDelete to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.PictureTile} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.PictureTile#firePictureDelete
 * @function
 */


// Start of sap\ca\ui\PictureTile.js

sap.ca.ui.PictureTile.prototype.init = function(oTileContent) {
	
	this._oDeletePictureButton = new sap.m.Button({
        icon:"sap-icon://sys-cancel",
        press: jQuery.proxy(this._deletePictureRequestHandler, this),
        type: sap.m.ButtonType.Transparent
    }).addStyleClass("sapCaUiPTDeleteButton");
	
	if (!jQuery.device.is.desktop) {
		 this.attachPress(this._tilePressedHandler);
		 this.attachBrowserEvent("swipe", jQuery.proxy(this._tileSwipedHandler, this));
		 this._oDeletePictureButton.addStyleClass("hide");
	}
};

    
/**
 * Reference to one PictureViewerItem coming from the PictureViewer.
 *
 * @override
 * @param {string | sap.ca.ui.PictureViewerItem} vTileContent
 *    Id of an element which becomes the new target of this <code>tileContent</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ca.ui.PictureTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureTile#setTileContent
 * @function
 */
sap.ca.ui.PictureTile.prototype.setTileContent = function(oTileContent) {
	this.setContent(null);
	if (oTileContent) {
        var image = oTileContent.getImage();
        
		if (jQuery.device.is.desktop) {
			this.setContent(image);
		} else {
			this.setContent(new sap.ca.ui.ZoomableScrollContainer({
				content : oTileContent.getImage()
			}));
		}
		
	} else {
		this.setContent(null);
	}
	this.setAssociation("tileContent", oTileContent);
};



/**
 * Sets the pixel size of the tile 
 * @param {int} iWidth width
 * @param {int} iHeight height
 * @private
 */ 
sap.ca.ui.PictureTile.prototype.setSize = function(iWidth,iHeight){

	this._width = iWidth;
	this._height = iHeight;
	
	var $this = this.$();
	if ($this){
		$this.css({width: iWidth+"px", height: iHeight+"px"});
		
		// adding this class later because display: inline-block is causing issue for width/height calculation
		jQuery.sap.byId(this.getId()+"-wrapper").addClass("sapCaUiPTWrapper");
	}
};


sap.ca.ui.PictureTile.prototype._tilePressedHandler = function (oEvent) {	
    this.switchVisibility();
};

sap.ca.ui.PictureTile.prototype.switchVisibility = function (bVisible) {
	var $delBtn = this._oDeletePictureButton.$();
	if (bVisible === undefined){
		$delBtn.toggleClass("hide");
	}
	else {
		$delBtn.toggleClass("hide", !bVisible);	
	}
	
	
};

sap.ca.ui.PictureTile.prototype._tileSwipedHandler = function (oEvent) {
    var $deleteBtn = this._oDeletePictureButton.$();
    if ($deleteBtn && !$deleteBtn.hasClass("hide")){
    	$deleteBtn.addClass("hide");
    		
    }	
};

/**
 * 
 */
sap.ca.ui.PictureTile.prototype._deletePictureRequestHandler = function () {

	this.firePictureDelete();
    
};

