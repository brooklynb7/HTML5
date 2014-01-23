/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.PictureItem.
jQuery.sap.declare("sap.ca.ui.PictureItem");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new PictureItem.
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
 * <li>{@link #getStatus status} : string</li>
 * <li>{@link #getSource source} : string</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '62px')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '62px')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.PictureItem#event:loaded loaded} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A picture / photo Item for AddPicture and PictureViewer Controls
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.PictureItem
 */
sap.ui.core.Control.extend("sap.ca.ui.PictureItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"status" : {type : "string", group : "Behavior", defaultValue : null},
		"source" : {type : "string", group : "Data", defaultValue : null},
		"name" : {type : "string", group : "Data", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Data", defaultValue : '62px', deprecated: true},
		"height" : {type : "sap.ui.core.CSSSize", group : "Data", defaultValue : '62px', deprecated: true}
	},
	events : {
		"loaded" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.PictureItem with name <code>sClassName</code> 
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
 * @name sap.ca.ui.PictureItem.extend
 * @function
 */

sap.ca.ui.PictureItem.M_EVENTS = {'loaded':'loaded'};


/**
 * Getter for property <code>status</code>.
 * The status of the picture / photo : Added, Deleted, Read
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>status</code>
 * @public
 * @name sap.ca.ui.PictureItem#getStatus
 * @function
 */

/**
 * Setter for property <code>status</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sStatus  new value for property <code>status</code>
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureItem#setStatus
 * @function
 */


/**
 * Getter for property <code>source</code>.
 * The content of the picture. Either the uri or base64 content.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>source</code>
 * @public
 * @name sap.ca.ui.PictureItem#getSource
 * @function
 */

/**
 * Setter for property <code>source</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSource  new value for property <code>source</code>
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureItem#setSource
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * The original name of the picture.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.ca.ui.PictureItem#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureItem#setName
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The width of the picture.
 *
 * Default value is <code>62px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @deprecated Since version 1.16.2. 
 * Width is defined by the AddPicture control
 * @name sap.ca.ui.PictureItem#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>62px</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.2. 
 * Width is defined by the AddPicture control
 * @name sap.ca.ui.PictureItem#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The height of the picture.
 *
 * Default value is <code>62px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @deprecated Since version 1.16.2. 
 * Height is defined by the AddPicture control
 * @name sap.ca.ui.PictureItem#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>62px</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.2. 
 * Height is defined by the AddPicture control
 * @name sap.ca.ui.PictureItem#setHeight
 * @function
 */


/**
 * Fired when the Image is really loaded 
 *
 * @name sap.ca.ui.PictureItem#loaded
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'loaded' event of this <code>sap.ca.ui.PictureItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.PictureItem</code>.<br/> itself. 
 *  
 * Fired when the Image is really loaded 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.PictureItem</code>.<br/> itself.
 *
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureItem#attachLoaded
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'loaded' event of this <code>sap.ca.ui.PictureItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureItem#detachLoaded
 * @function
 */

/**
 * Fire event loaded to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.PictureItem#fireLoaded
 * @function
 */


// Start of sap\ca\ui\PictureItem.js
/**
 * Status Object
 * @type {Object}
 */
sap.ca.ui.PictureItem.STATUS = {'ADD':'Added','DELETE':'Deleted','READ':'Read'};

/**
 * Initialize control
 */
sap.ca.ui.PictureItem.prototype.init = function() {
  this._oTapHandler = jQuery.proxy(this._onTap, this);
  this._oImage = new sap.m.Image({id:this.getId()+ "-image"});
  this._oImage.attachPress(this._oTapHandler);
  this._oImage.addStyleClass("sapCaUiPictureItemImage");
  this._iRenderCount = 0;
  this._sourceInfo = {isDataUri : false, mimeType : "", data : ""};
};



/**
 * Called when the control is destroyed
 */
sap.ca.ui.PictureItem.prototype.exit = function() {

    if (this._oImage) {
        this._oImage.detachPress(this._oTapHandler);
        this._oImage.destroy();
    }
    if (this._internalFile){
    	delete this._internalFile;
    }
};


/**
 * Set the source for the picture, either uri or base64 information
 * @override
 * @public
 * @param sValue {string}
 */
sap.ca.ui.PictureItem.prototype.setSource = function(sValue) {

    if (sValue == null || sValue == ""){
        jQuery.sap.log.warning("Cannot set a NULL or empty to the image source");
        return;
    }

	this._sourceInfo = this._getSourceInfo(sValue);
	
	this._oImage.setSrc(sValue);
    this.setProperty("source", sValue, false);
};

/**
 * Set the File object
 * @public
 * @param file {File}
 * @param oConfig {Object} Canvas config
 */
sap.ca.ui.PictureItem.prototype.setFile = function(file, oConfig) {

	var that = this;
	
	this._internalFile = file;

	// resize image
	var canvasHelper = new sap.ca.ui.utils.CanvasHelper({
		width: oConfig.width,
        height: oConfig.height,
        crop: oConfig.crop,
        quality: oConfig.quality,
        minWeight: oConfig.minWeight,
        done: function(oEvent) {
        	that.setSource(oEvent.getParameters().data);
        	that.fireLoaded();
        }
	});
	canvasHelper.resize(file);
	

};




/**
 * Returns the File object (if exists), data content can be retrieved in order to trigger the real upload
 * @return file {File}
 */
sap.ca.ui.PictureItem.prototype.getFile = function(file) {
	if (!this._internalFile){
		jQuery.sap.log.warning("no file has been set");
		return null;
	}
	
	return this._internalFile;
};

/**
 * Whether the picture source is a Data URI, containing base64 encoding
 * @return {boolean} returns true if the source is a Data URI rather than a URL
 */
sap.ca.ui.PictureItem.prototype.isSourceDataUri = function() {
    if (!this._sourceInfo)
        return false;

    return this._sourceInfo.isDataUri;
};

/**
 * Get the mime type for source Data URIs
 * @return {string} returns empty if the source is a URL rather than a Data URI
 */
sap.ca.ui.PictureItem.prototype.getMimeType = function() {

    return this._sourceInfo.mimeType;
};

/**
 * Get the base64 image encoding for source Data URIs
 * @return {string} returns empty if the source is a URL rather than a Data URI
 */
sap.ca.ui.PictureItem.prototype.getBase64Encoding = function() {

    return this._sourceInfo.data;
};

sap.ca.ui.PictureItem.prototype._resizeImage = function(){
    // scale and crop images to target width and height

	// set the default css settings
    var scaledWidth = "auto";
    var scaledHeight = "auto";

    // get the actual image size
    var $this = this.$();
    
    
    var domRef = jQuery.sap.domById(this.getId()+ "-image");
    if (domRef) {
        // check that we have usable sizes
        if (domRef.width == 0 || domRef.height == 0) {
            // needs some time to render the image in the dom (on ipad/iphone), lets try again later
            var rerender = jQuery.proxy(this.onAfterRendering, this);
            this._iRenderCount++;
            // prevent infinite loop, never seen, but you never know
            if (this._iRenderCount <= 5) {
                setTimeout(rerender, 100);
            }
            else {
                scaledWidth = $this.height(); // best default option
                this._iRenderCount = 0;
            }
        }
        else {

            // ensure that the smallest side fits, scale the smallest size first then the largest size
            if (domRef.width < domRef.height) {
                // get the scaling factor for the width, then scale the height
                var targetWidth = parseInt($this.width(), 10);
                scaledHeight = (targetWidth / domRef.width) * domRef.height;
            }
            else  {
                // get the scaling factor for the height, then scale the width
                var targetHeight = parseInt($this.height(), 10);
                scaledWidth = (targetHeight / domRef.height) * domRef.width;
            }
            this._iRenderCount = 0;
        }
        
        // set the css on the image
        var $image = this._oImage.$();
        $image.width(scaledWidth);
        $image.height(scaledHeight);
    }
};


/**
 * Called after the control has been rendered
 */
sap.ca.ui.PictureItem.prototype.onAfterRendering = function() {

	this._resizeImage();   
    var $image = this._oImage.$();
    var $this = this.$();
    $image.css({"margin-left":(($this.width() - $image.width()) / 2) + "px",
                "margin-top": (($this.height() - $image.height()) / 2) + "px"});
    
};



/**
 * Handler for tap event of picture item
 * @private
 */
sap.ca.ui.PictureItem.prototype._onTap = function() {

    var oAddPicture = sap.ui.getCore().byId(this._addPictureId);
    if (oAddPicture){
        oAddPicture._pictureTapped(this);
    }
};

/**
 * Handle the key up event for SPACE and ENTER.
 *
 * @param {jQuery.Event} oEvent - the keyboard event.
 * @private
 */
sap.ca.ui.PictureItem.prototype.onkeyup = function(oEvent) {
    if(oEvent.which == jQuery.sap.KeyCodes.SPACE || oEvent.which == jQuery.sap.KeyCodes.ENTER){
        this._onTap();
    }
};

/**
 * Get the source information for the picture
 * @private
 * @return {object}
 */
sap.ca.ui.PictureItem.prototype._getSourceInfo = function(sSource) {

	if (!sSource)
		return;
	
    var regex = /^data:(.+);base64,(.*)$/;

    var matches = sSource.match(regex);

    var sourceInfo;
    if (matches) {
        var sMimeType = matches[1];
        var sBase64 = matches[2];
        sourceInfo = { isDataUri : true, mimeType : sMimeType, data : sBase64}
    }
    else {
        sourceInfo = { isDataUri : false, mimeType : "", data : ""}
    }

    return sourceInfo;
};
