/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.AddPicture.
jQuery.sap.declare("sap.ca.ui.AddPicture");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new AddPicture.
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
 * <li>{@link #getButtonPageType buttonPageType} : string (default: 'Tab')</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getMaxPictureNumber maxPictureNumber} : int (default: 10)</li>
 * <li>{@link #getUploadUrl uploadUrl} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getPictureAlign pictureAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Left)</li>
 * <li>{@link #getItemSize itemSize} : int (default: 64)</li>
 * <li>{@link #getCompression compression} : string (default: 'low')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPictures pictures} : sap.ca.ui.PictureItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.AddPicture#event:show show} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.AddPicture#event:pictureAdded pictureAdded} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.AddPicture#event:maxPictureLimitReached maxPictureLimitReached} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.AddPicture#event:imageUploadFailed imageUploadFailed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Enables users to add pictures into a form. Contains PictureItem controls that describe the media.
 * It is designed to be used simultaneously with the PictureViewer control
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.AddPicture
 */
sap.ui.core.Control.extend("sap.ca.ui.AddPicture", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"buttonPageType" : {type : "string", group : "Appearance", defaultValue : 'Tab'},
		"editable" : {type : "boolean", group : "Appearance", defaultValue : true},
		"maxPictureNumber" : {type : "int", group : "Behavior", defaultValue : 10},
		"uploadUrl" : {type : "string", group : "Misc", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : '100%'},
		"text" : {type : "string", group : "Appearance", defaultValue : null},
		"pictureAlign" : {type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Left},
		"itemSize" : {type : "int", group : "Appearance", defaultValue : 64},
		"compression" : {type : "string", group : "Appearance", defaultValue : 'low'}
	},
	aggregations : {
    	"pictures" : {type : "sap.ca.ui.PictureItem", multiple : true, singularName : "picture", bindable : "bindable"}
	},
	events : {
		"show" : {}, 
		"pictureAdded" : {}, 
		"maxPictureLimitReached" : {}, 
		"imageUploadFailed" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.AddPicture with name <code>sClassName</code> 
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
 * @name sap.ca.ui.AddPicture.extend
 * @function
 */

sap.ca.ui.AddPicture.M_EVENTS = {'show':'show','pictureAdded':'pictureAdded','maxPictureLimitReached':'maxPictureLimitReached','imageUploadFailed':'imageUploadFailed'};


/**
 * Getter for property <code>buttonPageType</code>.
 * The page container type in which the button is embedded : Tab or Form
 *
 * Default value is <code>Tab</code>
 *
 * @return {string} the value of property <code>buttonPageType</code>
 * @public
 * @name sap.ca.ui.AddPicture#getButtonPageType
 * @function
 */

/**
 * Setter for property <code>buttonPageType</code>.
 *
 * Default value is <code>Tab</code> 
 *
 * @param {string} sButtonPageType  new value for property <code>buttonPageType</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#setButtonPageType
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Defines whether the button should appear or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ca.ui.AddPicture#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#setEditable
 * @function
 */


/**
 * Getter for property <code>maxPictureNumber</code>.
 * Defines the maximum number of pictures you can add. Default is set to 10
 *
 * Default value is <code>10</code>
 *
 * @return {int} the value of property <code>maxPictureNumber</code>
 * @public
 * @name sap.ca.ui.AddPicture#getMaxPictureNumber
 * @function
 */

/**
 * Setter for property <code>maxPictureNumber</code>.
 *
 * Default value is <code>10</code> 
 *
 * @param {int} iMaxPictureNumber  new value for property <code>maxPictureNumber</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#setMaxPictureNumber
 * @function
 */


/**
 * Getter for property <code>uploadUrl</code>.
 * Url of server we wish to upload to, only used as a fallback when FileReader is not supported by the browser
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>uploadUrl</code>
 * @public
 * @name sap.ca.ui.AddPicture#getUploadUrl
 * @function
 */

/**
 * Setter for property <code>uploadUrl</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUploadUrl  new value for property <code>uploadUrl</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#setUploadUrl
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The width of the control.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ca.ui.AddPicture#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#setWidth
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * The text of the button.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ca.ui.AddPicture#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#setText
 * @function
 */


/**
 * Getter for property <code>pictureAlign</code>.
 * The alignment of the pictures
 *
 * Default value is <code>Left</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>pictureAlign</code>
 * @public
 * @name sap.ca.ui.AddPicture#getPictureAlign
 * @function
 */

/**
 * Setter for property <code>pictureAlign</code>.
 *
 * Default value is <code>Left</code> 
 *
 * @param {sap.ui.core.TextAlign} oPictureAlign  new value for property <code>pictureAlign</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#setPictureAlign
 * @function
 */


/**
 * Getter for property <code>itemSize</code>.
 * Defines thumbnail size (height / width) in Pixels
 *
 * Default value is <code>64</code>
 *
 * @return {int} the value of property <code>itemSize</code>
 * @public
 * @name sap.ca.ui.AddPicture#getItemSize
 * @function
 */

/**
 * Setter for property <code>itemSize</code>.
 *
 * Default value is <code>64</code> 
 *
 * @param {int} iItemSize  new value for property <code>itemSize</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#setItemSize
 * @function
 */


/**
 * Getter for property <code>compression</code>.
 * Defines whether or not you want to maximize the compression. Possible values : "Low" (thumbnail size) or "High" (screen size)
 *
 * Default value is <code>low</code>
 *
 * @return {string} the value of property <code>compression</code>
 * @public
 * @name sap.ca.ui.AddPicture#getCompression
 * @function
 */

/**
 * Setter for property <code>compression</code>.
 *
 * Default value is <code>low</code> 
 *
 * @param {string} sCompression  new value for property <code>compression</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#setCompression
 * @function
 */


/**
 * Getter for aggregation <code>pictures</code>.<br/>
 * The list of pictures
 * 
 * @return {sap.ca.ui.PictureItem[]}
 * @public
 * @name sap.ca.ui.AddPicture#getPictures
 * @function
 */


/**
 * Inserts a picture into the aggregation named <code>pictures</code>.
 *
 * @param {sap.ca.ui.PictureItem}
 *          oPicture the picture to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the picture should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the picture is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the picture is inserted at 
 *             the last position        
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#insertPicture
 * @function
 */

/**
 * Adds some picture <code>oPicture</code> 
 * to the aggregation named <code>pictures</code>.
 *
 * @param {sap.ca.ui.PictureItem}
 *            oPicture the picture to add; if empty, nothing is inserted
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#addPicture
 * @function
 */

/**
 * Removes an picture from the aggregation named <code>pictures</code>.
 *
 * @param {int | string | sap.ca.ui.PictureItem} vPicture the picture to remove or its index or id
 * @return {sap.ca.ui.PictureItem} the removed picture or null
 * @public
 * @name sap.ca.ui.AddPicture#removePicture
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>pictures</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ca.ui.PictureItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ca.ui.AddPicture#removeAllPictures
 * @function
 */

/**
 * Checks for the provided <code>sap.ca.ui.PictureItem</code> in the aggregation named <code>pictures</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ca.ui.PictureItem}
 *            oPicture the picture whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ca.ui.AddPicture#indexOfPicture
 * @function
 */
	

/**
 * Destroys all the pictures in the aggregation 
 * named <code>pictures</code>.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#destroyPictures
 * @function
 */


/**
 * Binder for aggregation <code>pictures</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#bindPictures
 * @function
 */

/**
 * Unbinder for aggregation <code>pictures</code>.
 *
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#unbindPictures
 * @function
 */


/**
 * Indicates that the user wishes to view the picture 
 *
 * @name sap.ca.ui.AddPicture#show
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'show' event of this <code>sap.ca.ui.AddPicture</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.AddPicture</code>.<br/> itself. 
 *  
 * Indicates that the user wishes to view the picture 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.AddPicture</code>.<br/> itself.
 *
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#attachShow
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'show' event of this <code>sap.ca.ui.AddPicture</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#detachShow
 * @function
 */

/**
 * Fire event show to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.AddPicture#fireShow
 * @function
 */


/**
 * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the browser 
 *
 * @name sap.ca.ui.AddPicture#pictureAdded
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'pictureAdded' event of this <code>sap.ca.ui.AddPicture</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.AddPicture</code>.<br/> itself. 
 *  
 * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the browser 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.AddPicture</code>.<br/> itself.
 *
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#attachPictureAdded
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'pictureAdded' event of this <code>sap.ca.ui.AddPicture</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#detachPictureAdded
 * @function
 */

/**
 * Fire event pictureAdded to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.AddPicture#firePictureAdded
 * @function
 */


/**
 * Indicates that the limit number of pictures has been reached 
 *
 * @name sap.ca.ui.AddPicture#maxPictureLimitReached
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'maxPictureLimitReached' event of this <code>sap.ca.ui.AddPicture</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.AddPicture</code>.<br/> itself. 
 *  
 * Indicates that the limit number of pictures has been reached 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.AddPicture</code>.<br/> itself.
 *
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#attachMaxPictureLimitReached
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'maxPictureLimitReached' event of this <code>sap.ca.ui.AddPicture</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#detachMaxPictureLimitReached
 * @function
 */

/**
 * Fire event maxPictureLimitReached to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.AddPicture#fireMaxPictureLimitReached
 * @function
 */


/**
 * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the browser 
 *
 * @name sap.ca.ui.AddPicture#imageUploadFailed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'imageUploadFailed' event of this <code>sap.ca.ui.AddPicture</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.AddPicture</code>.<br/> itself. 
 *  
 * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the browser 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.AddPicture</code>.<br/> itself.
 *
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#attachImageUploadFailed
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'imageUploadFailed' event of this <code>sap.ca.ui.AddPicture</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.AddPicture#detachImageUploadFailed
 * @function
 */

/**
 * Fire event imageUploadFailed to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.AddPicture#fireImageUploadFailed
 * @function
 */


// Start of sap\ca\ui\AddPicture.js
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
jQuery.sap.require("sap.ca.ui.PictureItem");
jQuery.sap.require("sap.ca.ui.utils.CanvasHelper");


sap.ca.ui.AddPicture.BUTTON_PAGE_TYPE = {'TAB':'Tab','FORM':'Form'};

/**
 * Initialise control.
 */
sap.ca.ui.AddPicture.prototype.init = function(){

    // proxy to keep the "this" pointer
    var fireCaptureInput = jQuery.proxy(this._clickCaptureInput, this);

    // Add Button
    this._oButton = new sap.m.Button(this.getId()+"-add", {
        press:fireCaptureInput,
        icon:"sap-icon://add",
        type: sap.m.ButtonType.Transparent,
        width : "100%"
    });
    this._oButton.addStyleClass("sapCaUiAddPictureButton");

    // set the default button text (sets the property at the same time)
    this.setText(sap.ca.ui.utils.resourcebundle.getText("addPicture.text"));

    // for testing iFrame in other browsers
    this._forceUpload = false;

};

/**
 * Called when the control is destroyed
 */
sap.ca.ui.AddPicture.prototype.exit = function() {

    if (this._oButton) {    	
        this._oButton.destroy();
    }

    if (!window.FileReader || this._forceUpload) {
        jQuery.sap.byId(this.getId()+"-capture").fileupload('destroy');
    }
};

/**
 * Called after the control has been rendered
 */
sap.ca.ui.AddPicture.prototype.onAfterRendering = function(){

    // client side file upload support? // not IE9 for example
    if (!window.FileReader || this._forceUpload) {
        // check the URL for upload
        var sURL = this.getUploadUrl();
        // if the URL is empty we can not upload
        if (null==sURL || sURL.length==0) {
            jQuery.sap.log.error("AddPicture: The 'uploadUrl' property has not been set or is empty, and is required for this browser");
        }
        else {
            jQuery.sap.byId(this.getId()+"-capture").fileupload({
                url : sURL,
                add : jQuery.proxy(this._handleServerUpload, this),
                done : jQuery.proxy(this._handleServerUploadComplete, this),
                fail : jQuery.proxy(this._handleServerUploadFail, this)
            });
        }
    }
    else {
        // supported browsers
        var inputCapture = jQuery.sap.domById(this.getId() + "-capture"); // input object
        if (inputCapture)
            inputCapture.onchange = jQuery.proxy(this._handleClientUpload, this);
    }

    //if max limit of pictures reached
    var iNbPict = this.getPictures().length;
    if (inputCapture){
        inputCapture.visibility = iNbPict >= this.getMaxPictureNumber();
    }
};


/**
 * Set the text for the button
 * @override
 * @public
 * @param sValue {string}
 */
sap.ca.ui.AddPicture.prototype.setText = function(sValue) {

    this._oButton.setText(sValue);
    this.setProperty("text", sValue);
};


/**
 * Accessor for the button control used by the renderer
 * @return {sap.m.Button} The button control
 * @private
 */
sap.ca.ui.AddPicture.prototype._getButton = function() {

    return this._oButton;
};

/**
 * Handler for the input change event
 * @private
 */
sap.ca.ui.AddPicture.prototype._handleClientUpload = function () {
    var input = jQuery.sap.domById(this.getId() + "-capture"); // input object
    var files = input.files;

    // files not supported
    if (!files) {
        jQuery.sap.log.error("HTML5 files property not supported on input element for this browser")
    }
    // other browsers
    else {
        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {

            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }

            this._readFile(f);
        }
    }
};


/**
 * Handler for server upload
 * @private
 */
sap.ca.ui.AddPicture.prototype._handleServerUpload = function (event, data) {
    try {
        // upload
        data.submit();
    }
    catch(error) {
        this.fireImageUploadFailed({
            reason : "Submit Error",
            response : data
        });
    }
};

/**
 * Handler for server upload complete
 * @private
 */
sap.ca.ui.AddPicture.prototype._handleServerUploadComplete = function (event, data) {

    var errorStatus = null;

    // check that we have a result object
    if (null!=data && null!=data.result) {

        var fileName = null;
        if (null!=data.files && data.files.length===1) {
            fileName = data.files[0].name;
        }

        // the response is inside <html><body><pre> when using the iFrame
        try {


            var $result = data.result.find("pre");
            if ($result.length === 0){
                $result = $('pre', data.result);
            }

            var imageSource = $result.text();
            if (null!=imageSource && imageSource.indexOf("data:image/") === 0) {
                this._createAndAddPictureItem(imageSource, fileName);
            }
            // if the browser supports XHR then the result is good
            else if (null!=data.result.indexOf && data.result.indexOf("data:image/") === 0) {
                // create the image using the data returned from the server
                this._createAndAddPictureItem(data.result, fileName);
            }
            // it could be a HTML page returned (error case) - session timeout, not logged on
            else if (null!=data.result[0] && null!=data.result[0].title) {
                errorStatus = data.result[0].title;
            }
        }
        catch (e) {
            jQuery.sap.log.error("Error while retrieving upload response from iframe");
            errorStatus = "No response found";
        }
    }
    else {
        errorStatus = "Invalid response";
    }

    // provide information on event so that custom error message can be used
    if (null!=errorStatus) {
        this.fireImageUploadFailed({
            reason : errorStatus,
            response : data
        });
    }

};

/**
 * Handler for server upload complete
 * @private
 */
sap.ca.ui.AddPicture.prototype._handleServerUploadFail = function (event, data) {

    this.fireImageUploadFailed({
        reason : "Upload Failed",
        response : data
    });

};

/**
 * File reader
 * @private
 */
sap.ca.ui.AddPicture.prototype._readFile = function (f) {
	this._createAndAddPictureItemFromFile(f);  
};



/**
 * Handler for the input click event
 * @private
 */
sap.ca.ui.AddPicture.prototype._clickCaptureInput = function (oEvent) {

    //if max limit of pictures reached, fire event.
    var iNbPict = this.getPictures().length;
    if ( iNbPict >= this.getMaxPictureNumber()){
        // fire max limit reached
        this.fireMaxPictureLimitReached({
            Limit : iNbPict
        });
    } else  {
        jQuery.sap.domById(this.getId()+ '-capture').click();
    }
};


/**
 * Create and add a new PictureItem
 * @private
 */
sap.ca.ui.AddPicture.prototype._createAndAddPictureItem = function (imageSource, filename) {

    var oPictureItem = new sap.ca.ui.PictureItem({ status : sap.ca.ui.PictureItem.STATUS.ADD, 
    												name : filename, source: imageSource 
    											});
    this.addPicture(oPictureItem);
    this.firePictureAdded({
        pictureItem : oPictureItem
    });
};

/**
 * Create and add a new PictureItem
 * @private
 */
sap.ca.ui.AddPicture.prototype._createAndAddPictureItemFromFile = function (file) {

    var oPictureItem = new sap.ca.ui.PictureItem({ status : sap.ca.ui.PictureItem.STATUS.ADD, name : file.name });
    
    var that = this;
    oPictureItem.attachLoaded(function(){
        that.addPicture(oPictureItem);

        that.firePictureAdded({
            pictureItem : oPictureItem
        });
    });
    
    oPictureItem.setFile(file, this._getConfig());
};


sap.ca.ui.AddPicture.prototype._getConfig = function() {
	
	var compression = this.getCompression();
    var oConfig = {};
    switch (compression){
        case "high":
            // do NOT crop on IE otherwise you get black area in your image
            oConfig = {width: 320, height: 320, crop: sap.ui.getCore().isMobile() , quality: 72};
            oConfig.minWeight = 50;
    		break;
    	case "low":
    	default:
    		if (jQuery.device.is.desktop){
                oConfig = {width: 1024, height: 1024, crop: false, quality: 144};
    	    }
    	    else {
                oConfig = {width: 800, height: 800, crop: false, quality: 144};
    	    }
            oConfig.minWeight = 150;
    		break;
    }

    
    return oConfig;
};


/**
 * Control fires show event caused by the picture item
 * @private
 */
sap.ca.ui.AddPicture.prototype._pictureTapped = function (oPictureItem) {
    this.fireShow({
        pictureItem : oPictureItem
    });
};


sap.ca.ui.AddPicture.prototype.ontouchstart = function(oEvent) {
	
	if (!jQuery.device.is.desktop && oEvent.target.id === this.getId()+"-capture") {
		this._oButton._activeButton();
	}
	
};

sap.ca.ui.AddPicture.prototype.ontouchend = function(oEvent) {
	if (!jQuery.device.is.desktop){
		this._oButton._inactiveButton();
	}
			
};

sap.ca.ui.AddPicture.prototype.ontouchcancel = function(oEvent) {
	if (!jQuery.device.is.desktop){
		this._oButton._inactiveButton();
	}
			
};


/**
 * Function is called when tap occurs on button.
 * 
 * @private
 */
sap.ca.ui.AddPicture.prototype.ontap = function(oEvent) {

	if (!jQuery.device.is.desktop && oEvent.target.id === this.getId()+"-capture") {
		this._oButton.fireTap();
	}
};
