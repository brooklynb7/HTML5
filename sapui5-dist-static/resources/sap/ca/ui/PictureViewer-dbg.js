/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.PictureViewer.
jQuery.sap.declare("sap.ca.ui.PictureViewer");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.m.TileContainer");


/**
 * Constructor for a new PictureViewer.
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
 * <li>{@link #getTileScaling tileScaling} : float (default: 0.95)</li>
 * <li>{@link #getRemovable removable} : boolean (default: false)</li>
 * <li>{@link #getConfirmActive confirmActive} : boolean (default: false)</li>
 * <li>{@link #getConfirmText confirmText} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ca.ui.PictureViewerItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.PictureViewer#event:pictureDeleted pictureDeleted} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.TileContainer#constructor sap.m.TileContainer}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Picture viewer control relying on the TileContainer control
 * @extends sap.m.TileContainer
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.PictureViewer
 */
sap.m.TileContainer.extend("sap.ca.ui.PictureViewer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"tileScaling" : {type : "float", group : "Misc", defaultValue : 0.95},
		"removable" : {type : "boolean", group : "Misc", defaultValue : false},
		"confirmActive" : {type : "boolean", group : "Misc", defaultValue : false},
		"confirmText" : {type : "string", group : "Misc", defaultValue : null}
	},
	defaultAggregation : "items",
	aggregations : {
    	"items" : {type : "sap.ca.ui.PictureViewerItem", multiple : true, singularName : "item"}
	},
	events : {
		"pictureDeleted" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.PictureViewer with name <code>sClassName</code> 
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
 * @name sap.ca.ui.PictureViewer.extend
 * @function
 */

sap.ca.ui.PictureViewer.M_EVENTS = {'pictureDeleted':'pictureDeleted'};


/**
 * Getter for property <code>tileScaling</code>.
 * Percentage of the space occupied by the image in the picture viewer control. Please note that if the factor is too close to 1, the navigation arrows usually displayed in desktop mode will not be available
 *
 * Default value is <code>0.95</code>
 *
 * @return {float} the value of property <code>tileScaling</code>
 * @public
 * @name sap.ca.ui.PictureViewer#getTileScaling
 * @function
 */

/**
 * Setter for property <code>tileScaling</code>.
 *
 * Default value is <code>0.95</code> 
 *
 * @param {float} fTileScaling  new value for property <code>tileScaling</code>
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewer#setTileScaling
 * @function
 */


/**
 * Getter for property <code>removable</code>.
 * Defines whether or not you can remove a picture
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>removable</code>
 * @public
 * @name sap.ca.ui.PictureViewer#getRemovable
 * @function
 */

/**
 * Setter for property <code>removable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bRemovable  new value for property <code>removable</code>
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewer#setRemovable
 * @function
 */


/**
 * Getter for property <code>confirmActive</code>.
 * Defines whether or not a confirm dialog shows up before deleting a picture
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>confirmActive</code>
 * @public
 * @name sap.ca.ui.PictureViewer#getConfirmActive
 * @function
 */

/**
 * Setter for property <code>confirmActive</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bConfirmActive  new value for property <code>confirmActive</code>
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewer#setConfirmActive
 * @function
 */


/**
 * Getter for property <code>confirmText</code>.
 * If confirmation dialog is active, this is the text to display to confirm the deletion. A default value is provided
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>confirmText</code>
 * @public
 * @name sap.ca.ui.PictureViewer#getConfirmText
 * @function
 */

/**
 * Setter for property <code>confirmText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sConfirmText  new value for property <code>confirmText</code>
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewer#setConfirmText
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of PictureViewerItem that contains either a picture URI or the actual Image control.
 * 
 * @return {sap.ca.ui.PictureViewerItem[]}
 * @public
 * @name sap.ca.ui.PictureViewer#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ca.ui.PictureViewerItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewer#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ca.ui.PictureViewerItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewer#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ca.ui.PictureViewerItem} vItem the item to remove or its index or id
 * @return {sap.ca.ui.PictureViewerItem} the removed item or null
 * @public
 * @name sap.ca.ui.PictureViewer#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ca.ui.PictureViewerItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ca.ui.PictureViewer#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ca.ui.PictureViewerItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ca.ui.PictureViewerItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ca.ui.PictureViewer#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewer#destroyItems
 * @function
 */


/**
 * Thrown when user delete an image 
 *
 * @name sap.ca.ui.PictureViewer#pictureDeleted
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'pictureDeleted' event of this <code>sap.ca.ui.PictureViewer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.PictureViewer</code>.<br/> itself. 
 *  
 * Thrown when user delete an image 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.PictureViewer</code>.<br/> itself.
 *
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewer#attachPictureDeleted
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'pictureDeleted' event of this <code>sap.ca.ui.PictureViewer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewer#detachPictureDeleted
 * @function
 */

/**
 * Fire event pictureDeleted to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.PictureViewer#firePictureDeleted
 * @function
 */


// Start of sap\ca\ui\PictureViewer.js
jQuery.sap.declare("sap.ca.ui.PictureViewer");
jQuery.sap.require("sap.ui.core.ResizeHandler");
jQuery.sap.require("sap.m.TileContainer");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
jQuery.sap.require("sap.ca.ui.dialog.factory");

sap.ca.ui.PictureViewer.prototype.init = function () {

    sap.m.TileContainer.prototype.init.apply(this);

    this._oBundle = sap.ca.ui.utils.resourcebundle;
    this.$blocker = undefined;

    this.setEditable(false);

    if (sap.ui.getCore().isMobile()){
		jQuery(window).bind("tap", jQuery.proxy(this._reset, this));
        var oStaticArea = sap.ui.getCore().getStaticAreaRef();
        this.$blocker = jQuery("<div class='sapCaPVBly sapUiBLy'></div>").css("visibility", "hidden");
        jQuery(oStaticArea).append(this.$blocker);
	}
    if (sap.ui.getCore().isMobile()) {
        //sap.ui.Device.orientation.attachHandler(jQuery.proxy(this._onOrientationChange, this));
    }
    else {
        jQuery(window).bind("resize", jQuery.proxy(this._resize, this));
    }

    this.addStyleClass("sapCaPW");
    
    // onBeforeRendering() is not called the first time
    this.addStyleClass("sapCaPWRendering");


};

sap.ca.ui.PictureViewer.prototype.exit = function () {

    //might not be defined
    if (this.$blocker && this.$blocker.remove) {
        this.$blocker.remove();
    }

    if (sap.ui.getCore().isMobile()) {
        //sap.ui.Device.orientation.detachHandler(jQuery.proxy(this._onOrientationChange, this));
    }
    else {
        jQuery(window).unbind("resize", jQuery.proxy(this._resize, this));
    }

    sap.m.TileContainer.prototype.exit.apply(this);

	if (!jQuery.device.is.desktop){
		jQuery(window).unbind("tap", jQuery.proxy(this._reset, this));	
	}
};

/**
 * Set the percentage of the space occupied by the image in the picture viewer control.
 * Please note that if the factor is too close to 1, the navigation arrows usually displayed in desktop mode will not be available
 * @override
 * @public
 * @param fTileScale
 */
sap.ca.ui.PictureViewer.prototype.setTileScaling = function (fTileScale) {
    if (fTileScale < 0 || fTileScale > 1) {
        fTileScale = 0.75;
        jQuery.sap.log.error("Tile Scaling should be a float value between 0 and 1 and not " + fTileScale
            + ". Setting it to 0.75 by default.")
    }
    this.setProperty('tileScaling', fTileScale);
};

/**
 * Adds some item <code>oItem</code>
 * to the aggregation named <code>items</code>.
 *
 * @override
 * @param {sap.ca.ui.PictureViewerItem}
    *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewer#addItem
 * @function
 *
 * @deprecated Use aggregation "tiles"
 */
sap.ca.ui.PictureViewer.prototype.addItem = function (oItem) {
    this.insertItem(oItem, this.getItems().length)
};

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * When adding a new item to the aggregation, a sap.ca.ui.PictureTile is actually created
 * with its own ID and added to the internal TileContainer.
 *
 * @override
 * @param {sap.ca.ui.PictureViewerItem}
    *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
    *             iIndex the <code>0</code>-based index the item should be inserted at; for
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *             greater than the current size of the aggregation, the item is inserted at
 *             the last position
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewer#insertItem
 * @function
 *
 * @deprecated Use aggregation "tiles"
 */
sap.ca.ui.PictureViewer.prototype.insertItem = function (oItem, iIndex) {

    var tileToAdd = new sap.ca.ui.PictureTile({
    	tileContent:oItem
    });
    tileToAdd.attachPictureDelete(jQuery.proxy(this._deletePictureRequestHandler, this));

    this.insertTile(tileToAdd, iIndex);
    this.insertAggregation("items", oItem, iIndex);

    return this;
};



sap.ca.ui.PictureViewer.prototype.insertTile = function (oTile, iIndex) {

	oTile.attachPictureDelete(jQuery.proxy(this._deletePictureRequestHandler, this));
	sap.m.TileContainer.prototype.insertTile.apply(this, arguments);
};


sap.ca.ui.PictureViewer.prototype.deleteTile = function (oTile) {
	sap.m.TileContainer.prototype.deleteTile.apply(this, arguments);
	
	oTile.destroy();
};


/**
 * Removes the picture at index <code>iIndex</code> from the <code>items</code> aggregation.
 *
 * @override
 * @param {sap.ca.ui.PictureViewerItem}
    *          iIndex the index of the picture to delete; if empty, the current picture is deleted
 * @param {int}
    *             iIndex the <code>0</code>-based index of the picture collection to delete;
 *             if <code>iIndex</code> is out of range or empty, the current image will be deleted.
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewer#deletePicture
 * @function
 */
sap.ca.ui.PictureViewer.prototype.deletePicture = function (iIndex) {

    var pictureTileIndexToDelete, pictureTileToDelete, numberOfPictures;
    numberOfPictures = this.getTiles().length;

    if (typeof iIndex != "number" || iIndex < 0 || iIndex >= numberOfPictures) {
        pictureTileIndexToDelete = this.getPageFirstTileIndex();
    } 
    else {
        pictureTileIndexToDelete = iIndex;
    }

    if (pictureTileIndexToDelete > -1) {
        pictureTileToDelete = this.getTiles()[pictureTileIndexToDelete];
        pictureTileToDelete.detachPictureDelete(jQuery.proxy(this._deletePictureRequestHandler, this));
        this.deleteTile(pictureTileToDelete);
        this.removeAggregation("items", pictureTileIndexToDelete, true);
    }
    else {
    	jQuery.sap.log.warning("Cannot find and delete a picture at index : " + iIndex);
    }

    return this;
};

/**
 * Select the picture at index <code>iIndex</code> from the <code>items</code> aggregation.
 *
 * @override
 * @param {sap.ca.ui.PictureViewerItem}
    *          iIndex the index of the picture to select; if empty, the first picture is selected
 * @param {int}
    *             iIndex the <code>0</code>-based index of the aggregation to select; for
 *             a negative value of <code>iIndex</code>, the picture at position 0 is selected; for a value
 *             greater than the current size of the aggregation, the selected picture at the last position is selected
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.PictureViewer#selectPicture
 * @function
 */
sap.ca.ui.PictureViewer.prototype.selectPicture = function (iIndex) {

    var numberOfPictures = this.getTiles().length;

    if (typeof iIndex != "number") {
        iIndex = 0;
    }
    else if (iIndex < 0) {
        iIndex = 0;
    }
    else if (iIndex >= numberOfPictures) {
        iIndex = numberOfPictures - 1;
    }

    if (this._bRendered) {
    	this.addStyleClass("sapCaPWRendering");
    }
    else {    	
    }
    this._selectedIndex = iIndex;
    
    
    return this;
};
sap.ca.ui.PictureViewer.prototype.setSelectedIndex = function (iIndex) {
	this.selectPicture(iIndex);
}

/**
 * Gets the current picture index.
 *
 * @override
 * @return {sap.ca.ui.PictureViewer} the current picture index
 * @public
 * @name sap.ca.ui.PictureViewer#getCurrentPictureIndex
 * @function
 */
sap.ca.ui.PictureViewer.prototype.getCurrentPictureIndex = function () {
    return this.getPageFirstTileIndex();
};


/**
 * Handler for Delete button press
 *
 * Pops up a confirmation dialog if needed and/or proceed to the actual delete
 *
 * @param oEvent
 * @private
 */
sap.ca.ui.PictureViewer.prototype._deletePictureRequestHandler = function (oEvent) {

    var oTile = oEvent.getSource();

    // TODO: replace by new i18n keys when allowed to
    if (this.getConfirmActive()){

        var sQuestion = this.getConfirmText();
        if (!sQuestion || sQuestion == ""){
            sQuestion = this._oBundle.getText("FileUploader.deleteQuestion");
        }
        sap.ca.ui.dialog.confirmation.open({
            question : sQuestion,
            title : this._oBundle.getText("FileUploader.deleteFile"),
            confirmButtonLabel : this._oBundle.getText("dialog.ok")
        }, jQuery.proxy(function(r){

            if (r.isConfirmed)
                this._internalDelete(oTile);

        }, this));
    }
    else{
         this._internalDelete(oTile);
    }

};

/**
 * Deletes a Picture
 *
 * @param oTile
 * @private
 */
sap.ca.ui.PictureViewer.prototype._internalDelete = function (oTile) {
    var pictureTileIndexToDelete = this.indexOfTile(oTile);

    this.deleteTile(oTile);

    this.firePictureDeleted({index:pictureTileIndexToDelete});
};



/**
 * Get rid of potential visible "delete" button 
 * 
 * Only used on mobile devices
 * 
 */
sap.ca.ui.PictureViewer.prototype._reset = function (oEvent) {
	var i = this.getCurrentPictureIndex();
	
	var aTiles = this.getTiles();
	if (i > -1 && aTiles && aTiles.length > i){
		var oTile = aTiles[i];
		if (oTile){
			
			var $target = jQuery(oEvent.target);
			var $this = this.$();
			if ($this.length > 0 && $target.length > 0){
				
				
				var $parent = $target.closest(this.$());
				
				if ($parent.length === 0){ // the "tap" was outside the PictureViewer
					oTile.switchVisibility(false);
				}
				
			}
		}
		
	}
};

/**
 * Specify whether or not you can delete a picture.
 * If FALSE the delete button will never be visible. Default value is TRUE
 * @override
 * @public
 */
sap.ca.ui.PictureViewer.prototype.setRemovable = function (bValue) {
	
	this.setProperty("removable",bValue,true);	
	this.toggleStyleClass("sapCaPWEditable",bValue);
	
};

sap.ca.ui.PictureViewer.prototype.setEditable = function(bValue){
	// set Editable to false no matter what
	sap.m.TileContainer.prototype.setEditable.call(this, false);	
};


/**
 * Returns the dimension (width and height) of a tile
 * @returns {object} width and height of a tile
 * @private
 */
sap.ca.ui.PictureViewer.prototype._getTileDimension = function() {

    if (!this._bRendered)
        return;

    var $scroller = jQuery.sap.byId(this.getId()+"-scrl");
    var oTileDim = {
        width  : $scroller.width(),
        height : $scroller.height()
    };
    return oTileDim;
};


sap.ca.ui.PictureViewer.prototype.onBeforeRendering = function() {

    this.addStyleClass("sapCaPWRendering");
    
};

/**
 * Handles the internal event onAfterRendering
 * @private
 */
sap.ca.ui.PictureViewer.prototype.onAfterRendering = function() {
	
	
	this._bRendered = true;
	//init resizing
	//this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef().parentElement,  jQuery.proxy(this._resize, this));
    

	//init the dimensions to the container scoll area 
	this._applyDimension();
	this.$().toggleClass("sapCaPWEditable",this.getRemovable() === true);
	var that = this;
	this._sInitialResizeTimeoutId = setTimeout(function() {			
			that.addStyleClass("sapCaPWRendering");
			that._applyPageStartIndex(that._selectedIndex);
			
			that._update(false);
			
		}, this._iInitialResizeTimeout);
	
	//Set initial focus
	if(jQuery.device.is.desktop) {
		var oFocusTile = this.getTiles()[0],
			iTimeout = this._iInitialResizeTimeout;
		if(!!oFocusTile) {
			
			setTimeout(jQuery.proxy(function() {
				this._findTile(oFocusTile.$()).focus();
			},this),iTimeout); 
		}
	}
	
};


/**
 * @override
 */
sap.ca.ui.PictureViewer.prototype._update = function(bAnimated) {
	
	sap.m.TileContainer.prototype._update.apply(this, arguments);
	
	this.removeStyleClass("sapCaPWRendering");
	if (sap.ui.getCore().isMobile()){
		var $blocker = this.$blocker;
		setTimeout(jQuery.proxy(function() {
			$blocker.fadeOut(200, function(){$(this).css("visibility", "hidden").css("z-index", 0)});	
		},this),250); 
		
	}
	
};


/**
 * Applies the containers dimensions
 * @private
 */
sap.ca.ui.PictureViewer.prototype._applyDimension = function() {
    var oDim = this._getContainerDimension(),
        sId = this.getId(),
        $this = this.$(),
        oThisPos,
        iOffset = 10,
        iTopOffset = 60,
        $Content = jQuery.sap.byId( sId + "-cnt"),
        contentPos,
        contentOuterHeight,
        pagerHeight = jQuery.sap.byId( sId + "-pager").outerHeight();

    jQuery.sap.byId( sId + "-scrl").css({
        width : oDim.outerwidth + "px",
        height : (oDim.outerheight - pagerHeight) + "px"
    });

    $Content.css({
        height : (oDim.outerheight - pagerHeight) + "px",
        visibility : "visible"
    });

    $this.css("visibility","visible");
    oThisPos = $this.position();

    contentPos  = $Content.position();
    contentOuterHeight = $Content.outerHeight();

    if (jQuery.device.is.phone) {
        iOffset = 2;        
    } else if (jQuery.device.is.desktop) {
        iOffset = 0;        
    }

    jQuery.sap.byId( sId + "-blind").css({
        top : (contentPos.top + iOffset) + "px",
        left : (contentPos.left + iOffset) + "px",
        width : ($Content.outerWidth() - iOffset) + "px",
        height : (contentOuterHeight - iOffset) + "px"
    });

    jQuery.sap.byId( sId + "-rightedge").css({
        top : (oThisPos.top + iOffset + iTopOffset) + "px",
        right : iOffset + "px",
        height : (contentOuterHeight - iOffset - iTopOffset) + "px"
    });

    jQuery.sap.byId( sId + "-leftedge").css({
        top : (oThisPos.top + iOffset + iTopOffset) + "px",
        left : (oThisPos.left + iOffset) + "px",
        height : (contentOuterHeight - iOffset - iTopOffset) + "px"
    });
};


/**
 *
 * Adding overlay to hide blinking while switching orientation
 *
 * @private
 */
sap.ca.ui.PictureViewer.prototype.showBlockerLayer = function(callback) {

	// get higher z-index
	if (sap.ui.getCore().isMobile()){
		var zindex = 20;
		jQuery(sap.ui.getCore().getStaticAreaRef()).children().each(function(index, value){
			var z = parseInt(jQuery(value).css("z-index"));
			if (!isNaN(z)){
				zindex = Math.max(zindex, z);	
			}		
		});	
		jQuery.sap.log.debug("blocker layer z-index calculated : " + zindex+1);
	    this.$blocker.css("z-index", zindex+1).css("visibility", "visible").fadeIn(200, function(){
	    																					if (callback) 
																								callback.call();
	    																					});
	}
	else {
		if (callback) 
			callback.call();
	}
	

};


