/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.SplitApp.
jQuery.sap.declare("sap.m.SplitApp");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new SplitApp.
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
 * <li>{@link #getHomeIcon homeIcon} : any</li>
 * <li>{@link #getDefaultTransitionNameDetail defaultTransitionNameDetail} : string (default: "slide")</li>
 * <li>{@link #getDefaultTransitionNameMaster defaultTransitionNameMaster} : string (default: "slide")</li>
 * <li>{@link #getMode mode} : sap.m.SplitAppMode (default: sap.m.SplitAppMode.ShowHideMode)</li>
 * <li>{@link #getMasterButtonText masterButtonText} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMasterPages masterPages} : sap.ui.core.Control[]</li>
 * <li>{@link #getDetailPages detailPages} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getInitialDetail initialDetail} : string | sap.ui.core.Control</li>
 * <li>{@link #getInitialMaster initialMaster} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.SplitApp#event:orientationChange orientationChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:masterNavigate masterNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:afterMasterNavigate afterMasterNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:masterButton masterButton} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:beforeMasterOpen beforeMasterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:afterMasterOpen afterMasterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:beforeMasterClose beforeMasterClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:afterMasterClose afterMasterClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:detailNavigate detailNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:afterDetailNavigate afterDetailNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * SplitApp is another root element of a UI5 mobile application besides App control. It maintains two NavContainers if runs in tablet and one NavContainer in phone. The display of master NavContainer depends on the portrait/landscape of the device and the mode of SplitApp.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @name sap.m.SplitApp
 */
sap.ui.core.Control.extend("sap.m.SplitApp", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"to", "backToPage", "toMaster", "toDetail", "backMaster", "backDetail", "showMaster", "hideMaster", "getCurrentMasterPage", "getCurrentDetailPage"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"homeIcon" : {type : "any", group : "Misc", defaultValue : null},
		"defaultTransitionNameDetail" : {type : "string", group : "Appearance", defaultValue : "slide"},
		"defaultTransitionNameMaster" : {type : "string", group : "Appearance", defaultValue : "slide"},
		"mode" : {type : "sap.m.SplitAppMode", group : "Appearance", defaultValue : sap.m.SplitAppMode.ShowHideMode},
		"masterButtonText" : {type : "string", group : "Appearance", defaultValue : null}
	},
	aggregations : {
    	"masterPages" : {type : "sap.ui.core.Control", multiple : true, singularName : "masterPage"}, 
    	"detailPages" : {type : "sap.ui.core.Control", multiple : true, singularName : "detailPage"}
	},
	associations : {
		"initialDetail" : {type : "sap.ui.core.Control", multiple : false}, 
		"initialMaster" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"orientationChange" : {}, 
		"masterNavigate" : {}, 
		"afterMasterNavigate" : {}, 
		"masterButton" : {}, 
		"beforeMasterOpen" : {}, 
		"afterMasterOpen" : {}, 
		"beforeMasterClose" : {}, 
		"afterMasterClose" : {}, 
		"detailNavigate" : {}, 
		"afterDetailNavigate" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.SplitApp with name <code>sClassName</code> 
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
 * @name sap.m.SplitApp.extend
 * @function
 */

sap.m.SplitApp.M_EVENTS = {'orientationChange':'orientationChange','masterNavigate':'masterNavigate','afterMasterNavigate':'afterMasterNavigate','masterButton':'masterButton','beforeMasterOpen':'beforeMasterOpen','afterMasterOpen':'afterMasterOpen','beforeMasterClose':'beforeMasterClose','afterMasterClose':'afterMasterClose','detailNavigate':'detailNavigate','afterDetailNavigate':'afterDetailNavigate'};


/**
 * Getter for property <code>homeIcon</code>.
 * The icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
 * This icon must be in PNG format. The property can either hold the URL of one single icon which is used for all devices (and possibly scaled, which looks not perfect), or an object holding icon URLs for the different required sizes; one example is:
 * 
 * SplitApp.setHomeIcon({
 * 'phone':'phone-icon.png',
 * 'phone@2':'phone-retina.png',
 * 'tablet':'tablet-icon.png',
 * 'tablet@2':'tablet-retina.png'
 * });
 * 
 * The respective image sizes are 57/114 px for the phone and 72/144 px for the tablet.
 * If an object is given but the required size is missing from the object, the largest given URL will be used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>homeIcon</code>
 * @public
 * @name sap.m.SplitApp#getHomeIcon
 * @function
 */


/**
 * Setter for property <code>homeIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oHomeIcon  new value for property <code>homeIcon</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#setHomeIcon
 * @function
 */

/**
 * Getter for property <code>defaultTransitionNameDetail</code>.
 * The type of the transition/animation to apply when "to()" is called without defining the transition to use. The default is "slide", other options are: "fade" and "show" and the names of any registered custom transitions.
 *
 * Default value is <code>"slide"</code>
 *
 * @return {string} the value of property <code>defaultTransitionNameDetail</code>
 * @public
 * @name sap.m.SplitApp#getDefaultTransitionNameDetail
 * @function
 */


/**
 * Setter for property <code>defaultTransitionNameDetail</code>.
 *
 * Default value is <code>"slide"</code> 
 *
 * @param {string} sDefaultTransitionNameDetail  new value for property <code>defaultTransitionNameDetail</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#setDefaultTransitionNameDetail
 * @function
 */

/**
 * Getter for property <code>defaultTransitionNameMaster</code>.
 * The type of the transition/animation to apply when "to()" is called without defining the transition to use. The default is "slide", other options are: "fade" and "show" and the names of any registered custom transitions.
 *
 * Default value is <code>"slide"</code>
 *
 * @return {string} the value of property <code>defaultTransitionNameMaster</code>
 * @public
 * @name sap.m.SplitApp#getDefaultTransitionNameMaster
 * @function
 */


/**
 * Setter for property <code>defaultTransitionNameMaster</code>.
 *
 * Default value is <code>"slide"</code> 
 *
 * @param {string} sDefaultTransitionNameMaster  new value for property <code>defaultTransitionNameMaster</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#setDefaultTransitionNameMaster
 * @function
 */

/**
 * Getter for property <code>mode</code>.
 * This mode defines whether the master page will always be shown (in portrait and in landscape)[StretchCompressMode], or if it should be hidden when in protrait mode [ShowHideMode]. Default is ShowHideMode
 *
 * Default value is <code>ShowHideMode</code>
 *
 * @return {sap.m.SplitAppMode} the value of property <code>mode</code>
 * @public
 * @name sap.m.SplitApp#getMode
 * @function
 */


/**
 * Setter for property <code>mode</code>.
 *
 * Default value is <code>ShowHideMode</code> 
 *
 * @param {sap.m.SplitAppMode} oMode  new value for property <code>mode</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#setMode
 * @function
 */

/**
 * Getter for property <code>masterButtonText</code>.
 * This is the text shown in master button which has a default value "Navigation". This text is only shown in iOS platform and the icon from the current page in detail area is shown in the master button in the other platfroms.
 * 
 * The master button is shown/hidden depending on the orientation of device and also whether the master area is open or not. SplitApp manages the show/hide of master button by itself only when the page added to detail area are sap.m.Page with built-in header or sap.m.Page with built-in header which is wrapped by one or several sap.ui.core.mvc.View. Otherwise the show/hide of master button needs to be managed by the application.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>masterButtonText</code>
 * @public
 * @name sap.m.SplitApp#getMasterButtonText
 * @function
 */


/**
 * Setter for property <code>masterButtonText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sMasterButtonText  new value for property <code>masterButtonText</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#setMasterButtonText
 * @function
 */
	
/**
 * Getter for aggregation <code>masterPages</code>.<br/>
 * The content entities between which this SplitApp navigates in master area. These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics.
 * 
 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.SplitApp#getMasterPages
 * @function
 */

/**
 * Inserts a masterPage into the aggregation named <code>masterPages</code>.
 *
 * @param {sap.ui.core.Control}
 *          oMasterPage the masterPage to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the masterPage should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the masterPage is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the masterPage is inserted at 
 *             the last position        
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#insertMasterPage
 * @function
 */


/**
 * Adds some masterPage <code>oMasterPage</code> 
 * to the aggregation named <code>masterPages</code>.
 *
 * @param {sap.ui.core.Control}
 *            oMasterPage the masterPage to add; if empty, nothing is inserted
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#addMasterPage
 * @function
 */


/**
 * Removes an masterPage from the aggregation named <code>masterPages</code>.
 *
 * @param {int | string | sap.ui.core.Control} vMasterPage the masterPage to remove or its index or id
 * @return {sap.ui.core.Control} the removed masterPage or null
 * @public
 * @name sap.m.SplitApp#removeMasterPage
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>masterPages</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.SplitApp#removeAllMasterPages
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>masterPages</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oMasterPage the masterPage whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.SplitApp#indexOfMasterPage
 * @function
 */


/**
 * Destroys all the masterPages in the aggregation 
 * named <code>masterPages</code>.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#destroyMasterPages
 * @function
 */
	
/**
 * Getter for aggregation <code>detailPages</code>.<br/>
 * The content entities between which this SplitApp navigates in detail area. These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics.
 * 
 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.SplitApp#getDetailPages
 * @function
 */

/**
 * Inserts a detailPage into the aggregation named <code>detailPages</code>.
 *
 * @param {sap.ui.core.Control}
 *          oDetailPage the detailPage to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the detailPage should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the detailPage is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the detailPage is inserted at 
 *             the last position        
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#insertDetailPage
 * @function
 */


/**
 * Adds some detailPage <code>oDetailPage</code> 
 * to the aggregation named <code>detailPages</code>.
 *
 * @param {sap.ui.core.Control}
 *            oDetailPage the detailPage to add; if empty, nothing is inserted
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#addDetailPage
 * @function
 */


/**
 * Removes an detailPage from the aggregation named <code>detailPages</code>.
 *
 * @param {int | string | sap.ui.core.Control} vDetailPage the detailPage to remove or its index or id
 * @return {sap.ui.core.Control} the removed detailPage or null
 * @public
 * @name sap.m.SplitApp#removeDetailPage
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>detailPages</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.SplitApp#removeAllDetailPages
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>detailPages</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oDetailPage the detailPage whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.SplitApp#indexOfDetailPage
 * @function
 */


/**
 * Destroys all the detailPages in the aggregation 
 * named <code>detailPages</code>.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#destroyDetailPages
 * @function
 */

/**
 * Sets the initial detail page, which is shown on application launch.
 *
 * @return {string} Id of the element which is the current target of the <code>initialDetail</code> association, or null
 * @public
 * @name sap.m.SplitApp#getInitialDetail
 * @function
 */


/**
 * Sets the initial detail page, which is shown on application launch.
 *
 * @param {string | sap.ui.core.Control} vInitialDetail 
 *    Id of an element which becomes the new target of this <code>initialDetail</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#setInitialDetail
 * @function
 */

/**
 * Sets the initial master page, which is shown on application launch.
 *
 * @return {string} Id of the element which is the current target of the <code>initialMaster</code> association, or null
 * @public
 * @name sap.m.SplitApp#getInitialMaster
 * @function
 */


/**
 * Sets the initial master page, which is shown on application launch.
 *
 * @param {string | sap.ui.core.Control} vInitialMaster 
 *    Id of an element which becomes the new target of this <code>initialMaster</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#setInitialMaster
 * @function
 */

/**
 * This event will be fired when orientation (portrait/landscape) is changed. 
 *
 * @name sap.m.SplitApp#orientationChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.landscape Returns true if the device is in landscape.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'orientationChange' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 *  
 * This event will be fired when orientation (portrait/landscape) is changed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 *
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#attachOrientationChange
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'orientationChange' event of this <code>sap.m.SplitApp</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#detachOrientationChange
 * @function
 */


/**
 * Fire event orientationChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'landscape' of type <code>boolean</code> Returns true if the device is in landscape.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitApp#fireOrientationChange
 * @function
 */

/**
 * The event is fired when navigation between two pages in master area has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 *
 * @name sap.m.SplitApp#masterNavigate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which was shown before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which was shown before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which will be shown after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which will be shown after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether this is a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this is a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this is a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'masterNavigate' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 *  
 * The event is fired when navigation between two pages in master area has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 *
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#attachMasterNavigate
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'masterNavigate' event of this <code>sap.m.SplitApp</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#detachMasterNavigate
 * @function
 */


/**
 * Fire event masterNavigate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which was shown before the current navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which was shown before the current navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which will be shown after the current navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which will be shown after the current navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether this is a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this is a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this is a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitApp#fireMasterNavigate
 * @function
 */

/**
 * The event is fired when navigation between two pages in master area has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 *
 * @name sap.m.SplitApp#afterMasterNavigate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which had been shown before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which had been shown before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which is now shown after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which is now shown after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether was a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this was a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterMasterNavigate' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 *  
 * The event is fired when navigation between two pages in master area has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 *
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#attachAfterMasterNavigate
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'afterMasterNavigate' event of this <code>sap.m.SplitApp</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#detachAfterMasterNavigate
 * @function
 */


/**
 * Fire event afterMasterNavigate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which had been shown before navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which had been shown before navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which is now shown after navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which is now shown after navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether was a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this was a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitApp#fireAfterMasterNavigate
 * @function
 */

/**
 * Event gets triggered when a Master Button needs to be shown or hidden. This is necessary for custom headers when the SplitApp control does not handle the placement of the master button automatically. 
 *
 * @name sap.m.SplitApp#masterButton
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'masterButton' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 *  
 * Event gets triggered when a Master Button needs to be shown or hidden. This is necessary for custom headers when the SplitApp control does not handle the placement of the master button automatically. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 *
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#attachMasterButton
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'masterButton' event of this <code>sap.m.SplitApp</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#detachMasterButton
 * @function
 */


/**
 * Fire event masterButton to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitApp#fireMasterButton
 * @function
 */

/**
 * This event is fired before the master area is opened. 
 *
 * @name sap.m.SplitApp#beforeMasterOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeMasterOpen' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 *  
 * This event is fired before the master area is opened. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 *
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#attachBeforeMasterOpen
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'beforeMasterOpen' event of this <code>sap.m.SplitApp</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#detachBeforeMasterOpen
 * @function
 */


/**
 * Fire event beforeMasterOpen to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitApp#fireBeforeMasterOpen
 * @function
 */

/**
 * This event is fired when the master area is fully opened after animation if there is. 
 *
 * @name sap.m.SplitApp#afterMasterOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterMasterOpen' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 *  
 * This event is fired when the master area is fully opened after animation if there is. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 *
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#attachAfterMasterOpen
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'afterMasterOpen' event of this <code>sap.m.SplitApp</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#detachAfterMasterOpen
 * @function
 */


/**
 * Fire event afterMasterOpen to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitApp#fireAfterMasterOpen
 * @function
 */

/**
 * This event is fired before the master area is closed. 
 *
 * @name sap.m.SplitApp#beforeMasterClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeMasterClose' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 *  
 * This event is fired before the master area is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 *
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#attachBeforeMasterClose
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'beforeMasterClose' event of this <code>sap.m.SplitApp</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#detachBeforeMasterClose
 * @function
 */


/**
 * Fire event beforeMasterClose to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitApp#fireBeforeMasterClose
 * @function
 */

/**
 * This event is fired when the master area is fully closed after the animation when there is. 
 *
 * @name sap.m.SplitApp#afterMasterClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterMasterClose' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 *  
 * This event is fired when the master area is fully closed after the animation when there is. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 *
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#attachAfterMasterClose
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'afterMasterClose' event of this <code>sap.m.SplitApp</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#detachAfterMasterClose
 * @function
 */


/**
 * Fire event afterMasterClose to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitApp#fireAfterMasterClose
 * @function
 */

/**
 * The event is fired when navigation between two pages in detail area has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 *
 * @name sap.m.SplitApp#detailNavigate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which was shown before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which was shown before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which will be shown after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which will be shown after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether this is a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this is a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this is a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'detailNavigate' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 *  
 * The event is fired when navigation between two pages in detail area has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 *
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#attachDetailNavigate
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'detailNavigate' event of this <code>sap.m.SplitApp</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#detachDetailNavigate
 * @function
 */


/**
 * Fire event detailNavigate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which was shown before the current navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which was shown before the current navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which will be shown after the current navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which will be shown after the current navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether this is a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this is a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this is a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitApp#fireDetailNavigate
 * @function
 */

/**
 * The event is fired when navigation between two pages in detail area has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 *
 * @name sap.m.SplitApp#afterDetailNavigate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which had been shown before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which had been shown before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which is now shown after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which is now shown after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether was a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this was a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterDetailNavigate' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 *  
 * The event is fired when navigation between two pages in detail area has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 *
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#attachAfterDetailNavigate
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'afterDetailNavigate' event of this <code>sap.m.SplitApp</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#detachAfterDetailNavigate
 * @function
 */


/**
 * Fire event afterDetailNavigate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which had been shown before navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which had been shown before navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which is now shown after navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which is now shown after navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether was a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this was a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitApp#fireAfterDetailNavigate
 * @function
 */

/**
 * Navigate to given page inside the SplitApp. The navigation is done inside the master area if the page has been added, otherwise it tries to do the page navigation in the detail area.
 *
 * @name sap.m.SplitApp.prototype.to
 * @function
 * @param {string} 
 *         sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {string} 
 *         sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default is "slide" (horizontal movement from the right).
 * Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 * None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} 
 *         oData
 *         This optional object can carry any payload data which should be made available to the target page. The "beforeShow" event on the target page will contain this data object as "data" property.
 * 
 * Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameters
 *         This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * 
 * For a proper parameter order, the "data" parameter must be given when the "transitionParameters" parameter is used. (it can be given as "null")
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * The "show", "slide" and "fade" transitions do not use any parameter.

 * @type sap.m.SplitApp
 * @public
 * @since 1.10.0
 */


/**
 * Navigates back to the nearest previous page in the SplitApp history with the given ID. If there is no such page among the previous pages, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 * 
 * Calling this navigation method triggers first the (cancelable) "navigate" event on the SplitApp, then the "beforeHide" pseudo event on the source page and "beforeFirstShow" (if applicable) and"beforeShow" on the target page. Later - after the transition has completed - the "afterShow" pseudo event is triggered on the target page and "afterHide" on the page which has been left. The given backData object is available in the "beforeFirstShow", "beforeShow" and "afterShow" event object as "data" property. The original "data" object from the "to" navigation is also available in these event objects.
 *
 * @name sap.m.SplitApp.prototype.backToPage
 * @function
 * @param {string} 
 *         sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameters
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.

 * @type sap.m.SplitApp
 * @public
 * @since 1.10.0
 */


/**
 * navigate to given master page
 *
 * @name sap.m.SplitApp.prototype.toMaster
 * @function
 * @param {string} 
 *         sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {string} 
 *         sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default is "slide" (horizontal movement from the right).
 * Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 * None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} 
 *         oData

 * @since 1.7.1 *         This optional object can carry any payload data which should be made available to the target page. The "beforeShow" event on the target page will contain this data object as "data" property.
 * 
 * Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameters

 * @since 1.7.1 *         This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * 
 * For a proper parameter order, the "data" parameter must be given when the "transitionParameters" parameter is used. (it can be given as "null")
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * The "show", "slide" and "fade" transitions do not use any parameter.

 * @type sap.m.SplitApp
 * @public
 */


/**
 * navigate to given detail page
 *
 * @name sap.m.SplitApp.prototype.toDetail
 * @function
 * @param {string} 
 *         sPageId
 *         
 * @param {string} 
 *         sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default is "slide" (horizontal movement from the right).
 * Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 * None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} 
 *         oData
 *         This optional object can carry any payload data which should be made available to the target page. The "beforeShow" event on the target page will contain this data object as "data" property.
 * 
 * Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameter
 *         This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * 
 * For a proper parameter order, the "data" parameter must be given when the "transitionParameters" parameter is used. (it can be given as "null")
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * The "show", "slide" and "fade" transitions do not use any parameter.

 * @type sap.m.SplitApp
 * @public
 */


/**
 * navigate back within MasterView
 *
 * @name sap.m.SplitApp.prototype.backMaster
 * @function
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameter
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.

 * @type sap.m.SplitApp
 * @public
 */


/**
 * navigate back within DetailView
 *
 * @name sap.m.SplitApp.prototype.backDetail
 * @function
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameter
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.

 * @type sap.m.SplitApp
 * @public
 */


/**
 * When in ShowHideMode and the device is in portrait mode, this function can be used to make the master page visible.
 *
 * @name sap.m.SplitApp.prototype.showMaster
 * @function

 * @type sap.m.SplitApp
 * @public
 */


/**
 * When in ShowHideMode and the device is in portrait mode, this function can be used to hide the master page.
 *
 * @name sap.m.SplitApp.prototype.hideMaster
 * @function

 * @type sap.m.SplitApp
 * @public
 */


/**
 * Returns the current shown master page.
 *
 * @name sap.m.SplitApp.prototype.getCurrentMasterPage
 * @function

 * @type sap.ui.core.Control
 * @public
 */


/**
 * Returns the current shown detail page.
 *
 * @name sap.m.SplitApp.prototype.getCurrentDetailPage
 * @function

 * @type sap.ui.core.Control
 * @public
 */


// Start of sap/m/SplitApp.js
//TODO: provide own invalidate() check

/**
 * Provide information for validation for used undeclared aggregations 
 * 
 * @private
 * @static
 */
sap.m.SplitApp.getMetadata()._mHiddenAggregations = {
	"_navMaster": {multiple: false, type: "sap.m.NavContainer"},
	"_navDetail": {multiple: false, type: "sap.m.NavContainer"},
	"_navPopover": {multiple: false, type: "sap.m.Popover"}
};

/**************************************************************
* START - Life Cycle Methods
**************************************************************/
sap.m.SplitApp.prototype.init = function() {
	var oSplitApp = this;
	this.oCore = sap.ui.getCore();
	if(jQuery.device.is.tablet) {
		this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.m");
		//initialize the master nav container
		this._oMasterNav = new sap.m.NavContainer(this.getId() + "-Master", {
			width: "",
			navigate: function(oEvent){
				oSplitApp._handleNavigationEvent(oEvent, false, true);
			},
			afterNavigate: function(oEvent){
				oSplitApp._handleNavigationEvent(oEvent, true, true);
			}
		});
		
		//initialize the master nav container
		this._oDetailNav = new sap.m.NavContainer(this.getId() + "-Detail", {
			width: "",
			navigate: function(oEvent){
				oSplitApp._handleNavigationEvent(oEvent, false, false);
			},
			afterNavigate: function(oEvent){
				oSplitApp._handleNavigationEvent(oEvent, true, false);
			}
		});
		
		this.setAggregation("_navMaster", this._oMasterNav, true);
		this.setAggregation("_navDetail", this._oDetailNav, true);
		
		//initialize the navigation button
		this._oShowMasterBtn = new sap.m.Button(this.getId() + "-MasterBtn", {
			text: jQuery.os.ios ? this._rb.getText("SPLITAPP_NAVBUTTON_TEXT") : "",
			type: jQuery.os.ios ? sap.m.ButtonType.Default : sap.m.ButtonType.Up
		}).addStyleClass("sapMSplitAppMasterBtn"); 
		
		this._oShowMasterBtn.addDelegate({
			ontap: function(oEvent){
				oEvent._masterButtonClickedForSplitApp = true;
			}
		});
		
		//initialize the popover
		this._oPopOver = new sap.m.Popover(this.getId() + "-Popover", {
			placement: sap.m.PlacementType.Bottom,
			showHeader: false, 
			contentWidth: "320px",
			contentHeight: "600px",
			beforeOpen: function(){
				oSplitApp.fireBeforeMasterOpen();
			},
			beforeClose: function(){
				oSplitApp.fireAfterMasterOpen();
			},
			afterOpen: function(){
				oSplitApp.fireAfterMasterOpen();
			},
			afterClose: function(){
				oSplitApp.fireAfterMasterClose();
			}
		}).addStyleClass("sapMSplitAppPopover");
		
		this.setAggregation("_navPopover", this._oPopOver, true);
	}else {
		//master nav and detail nav are the same in phone
		this._oMasterNav = this._oDetailNav =  new sap.m.NavContainer();
		this.setAggregation("_navMaster", this._oMasterNav, true);
	}
	
	this._oldIsLandscape = jQuery.device.is.landscape;
	//if master page is open when device is in portrait and show/hide mode
	this._bMasterisOpen = false; 

	jQuery(jQuery.proxy(function(){
		jQuery.sap.initMobile({
			viewport: !this._debugZoomAndScroll,
			statusBar: "default",
			hideBrowser: true,
			preventScroll: !this._debugZoomAndScroll,
			homeIcon: this.getHomeIcon(),
			rootId: this.getId()
		});
		jQuery(window).bind("resize", jQuery.proxy(this._handleOrientationChange, this));
	},this));
};

sap.m.SplitApp.prototype.exit = function() {
	jQuery(window).unbind("resize", this._handleOrientationChange);
	
	if(this._oMasterNav) {
		this._oMasterNav.destroy();
	}
	if(this._oDetailNav) {
		this._oDetailNav.destroy();
	}
	if(this._oShowMasterBtn) {
		this._oShowMasterBtn.destroy();
	}
	if(this._oPopOver) {
		this._oPopOver.detachAfterClose(this._handlePopClose, this);
		this._oPopOver.destroy();
	}
};

sap.m.SplitApp.prototype.onAfterRendering = function() {
	if (!this._bParentHeightSet) { // set all parent elements to 100% height this *should* be done by the application in CSS, but people tend to forget it...
		var ref = this.getDomRef().parentNode;
		while (ref && ref !== document.documentElement) {
			if (!ref.style.height) ref.style.height = "100%";
			ref = ref.parentNode;
		}
		this._bParentHeightSet = true;
	}
	if(jQuery.device.is.tablet) {
		if(this._oPopOver.isOpen()){
			//Wait for the popover to be closed properly
			this._oPopOver.close();
		}
	}
};
/**************************************************************
* END - Life Cycle Methods
**************************************************************/

/**************************************************************
* START - Touch Event Handlers
**************************************************************/
sap.m.SplitApp.prototype.ontouchstart = function(oEvent){
	if(jQuery.device.is.tablet){
		if(oEvent.originalEvent && oEvent.originalEvent._sapui_handledByControl){
			this._bIgnoreSwipe = true;
		}else{
			this._bIgnoreSwipe = false;
		}
	}
};

sap.m.SplitApp.prototype.onswiperight = function(oEvent) {
	if(jQuery.device.is.tablet && this._portraitHide() && !this._bIgnoreSwipe) {
		//if event is already handled by inner control, master won't be shown.
		//this fix the problem when for example, carousel control in rendered in detail area.
		//CSN 2013 224661
		this.showMaster();
	}
};

//handles closing of master navContainer and navigation inside it
sap.m.SplitApp.prototype.ontap = function(oEvent) {
	if(jQuery.device.is.tablet) {
		var _bIsNavigate = false, 
			_bButtonIsBack = !!oEvent._navButtonClickedForSplitApp;
		
		if(this._existsOnParentChain(oEvent.srcControl, sap.m.ListItemBase, this._oMasterNav)){
			_bIsNavigate = true;
		}
		
		//if no navigation in list or page navigation back, master will be hidden when in portrait mode
		if(!this._oldIsLandscape && !_bIsNavigate && !_bButtonIsBack) {
			if(this.getMode() == "ShowHideMode") {
				if(this._bMasterisOpen){
					this.hideMaster();
				}
			}
		}
		
		if(!this._oldIsLandscape && oEvent._masterButtonClickedForSplitApp) {
			if(this.getMode() == "PopoverMode") {
				if(!this._oPopOver.oPopup.isOpen()){
					this._oPopOver.openBy(this._oShowMasterBtn);
				}else {
					this._oPopOver.close();
				}
			} else {
				this.showMaster();
			}
		}
	}
};

sap.m.SplitApp.prototype.onswipeleft = function(oEvent) {
	if(jQuery.device.is.tablet && this._portraitHide() && !this._bIgnoreSwipe ) {
		this.hideMaster();
	}
};
/**************************************************************
* End - Touch Event Handlers
**************************************************************/

/**************************************************************
* START - Public methods
**************************************************************/

sap.m.SplitApp.prototype.to = function(pageId, transitionName, data, oTransitionParameters) {
	if (this._oMasterNav.getPage(pageId)) {
		this._oMasterNav.to(pageId, transitionName, data, oTransitionParameters);
	} else {
		this._oDetailNav.to(pageId, transitionName, data, oTransitionParameters);
	}
};

sap.m.SplitApp.prototype.backToPage = function(pageId, backData, oTransitionParameters) {
	if (this._oMasterNav.getPage(pageId)) {
		this._oMasterNav.backToPage(pageId, backData, oTransitionParameters);
	} else {
		this._oDetailNav.backToPage(pageId, backData, oTransitionParameters);
	}
};

sap.m.SplitApp.prototype.toMaster = function(pageId, transitionName, data, oTransitionParameters) {
	this._oMasterNav.to(pageId, transitionName, data, oTransitionParameters);
};

sap.m.SplitApp.prototype.backMaster = function(backData, oTransitionParameters) {
	this._oMasterNav.back(backData, oTransitionParameters);
};

sap.m.SplitApp.prototype.backMasterToPage = function(pageId, backData, oTransitionParameters) {
	this._oMasterNav.backToPage(pageId, backData, oTransitionParameters);
};

sap.m.SplitApp.prototype.toDetail = function(pageId, transitionName, data, oTransitionParameters) {
	this._oDetailNav.to(pageId, transitionName, data, oTransitionParameters);
};

sap.m.SplitApp.prototype.backDetail = function(backData, oTransitionParameters) {
	this._oDetailNav.back(backData, oTransitionParameters);
};

sap.m.SplitApp.prototype.backDetailToPage = function(pageId, backData, oTransitionParameters) {
	this._oDetailNav.backToPage(pageId, backData, oTransitionParameters);
};

sap.m.SplitApp.prototype.addMasterPage = function(oPage) {
	var oRealPage = this._getRealPage(oPage);
	
	if(oRealPage && oRealPage._navBtn){
		oRealPage._navBtn.addDelegate({
			ontap: function(oEvent){
				oEvent._navButtonClickedForSplitApp = true;
			}
		});
	}
	this._oMasterNav.addPage(oPage);
	return this;
};

sap.m.SplitApp.prototype.addDetailPage = function(oPage) {
	var oSplitApp = this,
		oRealPage = this._getRealPage(oPage),
		oCore = this.oCore,
		sPageId = oRealPage ? oRealPage.getId() : "";
	
	//processing the header in page
	oPage.addDelegate({
		onBeforeFirstShow: function(){
			if(oRealPage){
				var oNavButton = oCore.byId(sPageId + "-navButton"),
					oIconImage = oCore.byId(sPageId + "-icon");
				if(jQuery.device.is.tablet){
					if(oNavButton){
						oNavButton.addStyleClass("sapMSplitAppHiddenChild");
					}
					if(oIconImage){
						oIconImage.addStyleClass("sapMSplitAppHiddenChild");
					}
				}
			}
		},
		onBeforeShow: function(){
			if(oRealPage){
//				var oNavButton = oCore.byId(sPageId + "-navButton"),
//					oIconImage = oCore.byId(sPageId + "-icon");
				if(jQuery.device.is.tablet){
//					if(oNavButton){
//						oNavButton.addStyleClass("sapMSplitAppHiddenChild");
//					}
					//now it's a tablet
					//this is the initialization of header in page inside the detail navigation container
					//rules are displayed below
					// 1. navigation button is completely removed from the page in detail nav container
					// 2. iOS: show title if there is
					// 3: Android: Icon isn't shown directly in header, the icon is added to the showMasterButton.
					// 4: Android: show title in portrait mode, hide title in landscape
					if((oSplitApp._portraitHide() || oSplitApp._portraitPopover()) && (!oSplitApp._bMasterisOpen || oSplitApp._bMasterClosing)) {
						oSplitApp._setMasterButton(oRealPage, jQuery.proxy(oSplitApp._setTitleVisibility, oSplitApp));
					}else{
						oSplitApp._setTitleVisibility(oRealPage);
					}
				}
			}
		}
	});
	
	if(oRealPage){
		oRealPage.addDelegate({
			onBeforeRendering: function(){
				if(jQuery.device.is.tablet) {
					if(oSplitApp._portraitHide()) {
						if(!oSplitApp._bMasterisOpen || oSplitApp._bMasterClosing){
							oSplitApp._setMasterButton(oRealPage);
						}
					}else if(oSplitApp._portraitPopover()) {
						oSplitApp._setMasterButton(oRealPage);
					}else {
						oSplitApp._removeMasterButton(oRealPage);
					}
				}
			}
		});
	}
	
	this._oDetailNav.addPage(oPage);
	return this;
};

sap.m.SplitApp.prototype.showMaster = function() {
	var _this$ = this._oMasterNav.$(),
		that = this,
		_curPage = this._getRealPage(this._oDetailNav.getCurrentPage());
	if(this._portraitPopover()) {
        if(!this._oPopOver.isOpen()){
        	function afterPopoverOpen(){
        		this._oPopOver.detachAfterOpen(afterPopoverOpen, this);
        		this._bMasterOpening = false;
        		this._bMasterisOpen = true;
        		this.fireAfterMasterOpen();
        	}
        	this._oPopOver.attachAfterOpen(afterPopoverOpen, this);
        	this.fireBeforeMasterOpen();
        	this._oPopOver.openBy(this._oShowMasterBtn);
        	this._bMasterOpening = true;
        }
	}else{
		if(this._portraitHide() && (!this._bMasterisOpen || this._bMasterClosing)) {
			_this$.one((jQuery.os.ios ? "webkitTransitionEnd" : "webkitAnimationEnd"), function(){
				that._bMasterOpening = false;
				that._bMasterisOpen = true;
				that._removeMasterButton(_curPage, jQuery.proxy(that._setTitleVisibility, that));
				that.fireAfterMasterOpen();
			});
			this.fireBeforeMasterOpen();
			_this$.toggleClass("sapMSplitAppMasterVisible", true);
			_this$.toggleClass("sapMSplitAppMasterHidden", false);
			this._bMasterOpening = true;
		}
	}
	return this;
};

sap.m.SplitApp.prototype.hideMaster = function() {
	var _this$ = this._oMasterNav.$(),
		that = this,
		_curPage = that._getRealPage(that._oDetailNav.getCurrentPage());
	if(this._portraitPopover()) {
        if(this._oPopOver.isOpen()){
        	function afterPopoverClose(){
        		this._oPopOver.detachAfterClose(afterPopoverClose, this);
        		this._bMasterClosing = false;
        		this._bMasterisOpen = false;
        		this.fireAfterMasterClose();
        	}
        	this._oPopOver.attachAfterClose(afterPopoverClose, this);
        	this.fireBeforeMasterClose();
        	this._oPopOver.close();
        	this._bMasterClosing = true;
        }
	}else{
		if(this._portraitHide() && this._bMasterisOpen) {
			_this$.one((jQuery.os.ios ? "webkitTransitionEnd" : "webkitAnimationEnd"), function(){
				that._bMasterClosing = false;
				that._bMasterisOpen = false;
				that._setMasterButton(_curPage, jQuery.proxy(that._setTitleVisibility, that));
				that.fireAfterMasterClose();
			});
			this.fireBeforeMasterClose();
			_this$.toggleClass("sapMSplitAppMasterVisible" , false);
			_this$.toggleClass("sapMSplitAppMasterHidden" , true);
			this._bMasterClosing = true;
		}
	}
	return this;
};

sap.m.SplitApp.prototype.getCurrentMasterPage = function() {
	return this._oMasterNav.getCurrentPage();
};

sap.m.SplitApp.prototype.getCurrentDetailPage = function() {
	return this._oDetailNav.getCurrentPage();
};
/**************************************************************
* END - Public methods
**************************************************************/

/*************************************************************
 * START - Setters/Getters of the SplitApp control
**************************************************************/
sap.m.SplitApp.prototype.setInitialMaster = function(sPage) {
	this._oMasterNav.setInitialPage(sPage);
	this.setAssociation('initialMaster', sPage, true);
	return this;
};

sap.m.SplitApp.prototype.setInitialDetail = function(sPage) {
	if(jQuery.device.is.tablet) {
		this._oDetailNav.setInitialPage(sPage);
	}
	this.setAssociation('initialDetail', sPage, true);
	return this;
};

sap.m.SplitApp.prototype.setDefaultTransitionNameDetail = function(sTransition) {
	this._oDetailNav.setDefaultTransitionName(sTransition);
	return this;
};

sap.m.SplitApp.prototype.setDefaultTransitionNameMaster = function(sTransition) {
	this._oMasterNav.setDefaultTransitionName(sTransition);
	return this;
};

sap.m.SplitApp.prototype.setMasterButtonText = function(sText) {
	if(jQuery.os.ios && jQuery.device.is.tablet){
		if(!sText){
			sText = this._rb.getText("SPLITAPP_NAVBUTTON_TEXT");
		}
		this.setProperty("masterButtonText", sText, true);
		this._oShowMasterBtn.setText(sText);
	}
	return this;
};

sap.m.SplitApp.prototype.setMode = function(sMode) {
	var sOldMode = this.getMode();
	if(sOldMode === sMode){
		return;
	}
	this.setProperty("mode", sMode, true);
	//the reposition of master and detail area only occurs in tablet
	if(jQuery.device.is.tablet){
		if(sMode !== "PopoverMode" && this._oPopOver.getContent().length > 0) {
			this._updateMasterPosition("landscape");
	
		}else if(sMode == "PopoverMode" && !this._oldIsLandscape && this._oPopOver.getContent().length == 0){
			this._updateMasterPosition("popover");
			this.$().toggleClass("sapMSplitAppShowHide", false);
			this.$().toggleClass("sapMSplitAppStretchCompress", false);
			this.$().toggleClass("sapMSplitAppPopover", true);
			this._setMasterButton(this._oDetailNav.getCurrentPage(), jQuery.proxy(this._setTitleVisibility, this));
		}
		if(sMode == "StretchCompressMode") {
			this.$().toggleClass("sapMSplitAppShowHide", false);
			this.$().toggleClass("sapMSplitAppPopover", false);
			this.$().toggleClass("sapMSplitAppStretchCompress", true);
			this._removeMasterButton(this._oDetailNav.getCurrentPage(), jQuery.proxy(this._setTitleVisibility, this));
			
		}
		if(sMode == "ShowHideMode") {
			this.$().toggleClass("sapMSplitAppPopover", false);
			this.$().toggleClass("sapMSplitAppStretchCompress", false);
			this.$().toggleClass("sapMSplitAppShowHide", true);
			if(!jQuery.device.is.landscape){
				this._setMasterButton(this._oDetailNav.getCurrentPage(), jQuery.proxy(this._setTitleVisibility, this));
			}
		}
	}
	return this;
};

/**************************************************************
* START - Private methods
**************************************************************/
sap.m.SplitApp.prototype._handleNavigationEvent = function(oEvent, bAfter, bMaster){
	var sEventName = (bAfter ? "After" : "") + (bMaster ? "Master" : "Detail") + "Navigate";
	sEventName = sEventName.charAt(0).toLowerCase() + sEventName.slice(1);
	
	this.fireEvent(sEventName, oEvent);
};

sap.m.SplitApp.prototype._handleOrientationChange = function() {
	var isLandscape = jQuery.device.is.landscape,
		_currentPage = this._oDetailNav.getCurrentPage(),
		mode = this.getMode();
	
	if(this._oldIsLandscape !== isLandscape) {
		this.fireOrientationChange({landscape: isLandscape});
		this._oldIsLandscape = isLandscape;	
		if (jQuery.device.is.tablet) {
			if(mode === "ShowHideMode"){
				if(isLandscape) {
					this.fireBeforeMasterOpen();
				}else{
					this.fireBeforeMasterClose();
				}
			}
		
			this.$().toggleClass("sapMSplitAppPortrait", !isLandscape);
			
			if(mode === "ShowHideMode" || mode === "PopoverMode") {
				if(isLandscape) {
					this._oMasterNav.$().toggleClass("sapMSplitAppMasterVisible", false);
					this._oMasterNav.$().toggleClass("sapMSplitAppMasterHidden", false);
				}
			}
			
			if(mode === "ShowHideMode"){
				if(isLandscape) {
					this._bMasterisOpen = true;
					this.fireAfterMasterOpen();
				}else{
					this._bMasterisOpen = false;
					this.fireAfterMasterClose();
				}
			}
			
			if(this.getMode() == "PopoverMode") {
				if(this._oPopOver.oPopup.isOpen()){
				//Wait for the popover to be closed properly
					this._oPopOver.attachAfterClose(this._handlePopClose, this);
					this._oPopOver.close();
				} else {
					this._handlePopClose();
				}
			}
			
			_currentPage = this._getRealPage(_currentPage);
			if(!this._oldIsLandscape && mode != "StretchCompressMode") {
				this._setMasterButton(_currentPage, jQuery.proxy(this._setTitleVisibility, this));
			}else {
				this._removeMasterButton(_currentPage, jQuery.proxy(this._setTitleVisibility, this));
			}			
		}
	}
};

sap.m.SplitApp.prototype._setTitleVisibility = function(oPage){
	var oRealPage = oPage || this._getRealPage(this._oDetailNav.getCurrentPage()),
	oCore = this.oCore,
	sPageId = oRealPage ? oRealPage.getId() : "";
	if(sPageId){
		var oTitle = oCore.byId(sPageId + "-title");
		if(!jQuery.os.ios){
			if((this._portraitHide() || this._portraitPopover()) && (!this._bMasterisOpen || this._bMasterClosing)){
				oTitle && oTitle.removeStyleClass("sapMSplitAppHiddenChild");
			}else{
				oTitle && oTitle.addStyleClass("sapMSplitAppHiddenChild");
			}
		}
	};
};

sap.m.SplitApp.prototype._handlePopClose = function(oEvent) {
	this._oPopOver.detachAfterClose(this._handlePopClose, this);
	if(this._oldIsLandscape) {
		this._updateMasterPosition("landscape");
	}else {
		this._updateMasterPosition("popover");
	}
};

sap.m.SplitApp.prototype._getRealPage = function(oPage){
	var oReturn = oPage, aContent;
	
	while(oReturn){
		if(oReturn instanceof sap.m.Page){
			return oReturn;
		}
		if(oReturn instanceof sap.ui.core.mvc.View){
			aContent = oReturn.getContent();
			if(aContent.length === 1){
				oReturn = aContent[0];
				continue;
			}
		}
		oReturn = null;
	}
	return oReturn;
};

 //updates the dom position of the Master NavContainer (inside popover or left next to the Detail NavContainer)
sap.m.SplitApp.prototype._updateMasterPosition = function(sPos) {
	var that = this;
	if(sPos == "popover") {
		//remove the NavContainer dom from the left side without rerendering the whole app
		this.removeAggregation("_navMaster", this._oMasterNav, true);
		jQuery.sap.byId(this._oMasterNav.getId()).remove();
		this._oPopOver.addContent(this._oMasterNav);
		this._bMasterisOpen = false;
	}
	if(sPos == "landscape") {
		var fRearrangeNavMaster = function(){
			that._oPopOver.removeAggregation("content", that._oMasterNav, false);
			that.setAggregation("_navMaster", that._oMasterNav, true);
			//render only the master navContainer, to prevent the whole app from rerendering
			var $master = jQuery.sap.byId(that.getId());
			if ($master[0]) {
				var rm = sap.ui.getCore().createRenderManager();
				rm.renderControl(that._oMasterNav.addStyleClass("sapMSplitAppMaster"));
				rm.flush($master[0], false, 0);
				rm.destroy();
			}
		};
		
		if(this._oPopOver.isOpen()){
			var fAfterCloseHandler = function(){
				this._oPopOver.detachAfterClose(fAfterCloseHandler, this);
				this._bMasterisOpen = false;
				fRearrangeNavMaster();
			};
			this._oPopOver.attachAfterClose(fAfterCloseHandler, this);
			this._oPopOver.close();
		}else{
			fRearrangeNavMaster();
		}
	}
};

//Portrait - Tablet - ShowHideMode
sap.m.SplitApp.prototype._portraitHide = function() {
	if(!this._oldIsLandscape && jQuery.device.is.tablet && this.getMode() === "ShowHideMode") {
		return true;
	} else {
		return false;
	}
};

//Portrait - Tablet - PopoverMode
sap.m.SplitApp.prototype._portraitPopover = function() {
	if(!this._oldIsLandscape && jQuery.device.is.tablet && this.getMode() === "PopoverMode") {
		return true;
	} else {
		return false;
	}
};

//if the page uses a custom header, we will not set the master button. The app dev has to do this by him/herself
sap.m.SplitApp.prototype._setMasterButton = function(oPage, fnCallBack) {
		this.fireMasterButton({show: true});
		oPage = this._getRealPage(oPage);
		if(oPage && !this._checkCustomHeader(oPage)) {
			var oPageHeader = oPage._getAnyHeader(),
				oContentLeft = oPageHeader.getContentLeft(),
				sIcon = oPage.getIcon();
			var bIsSet = false;
			if(oContentLeft){
				for(var i=0; i<oContentLeft.length; i++) {
					if(oContentLeft[i] === this._oShowMasterBtn) {
						bIsSet = true;
					}
				}
			}
			if(!bIsSet) {
				this._oShowMasterBtn.removeStyleClass("sapMSplitAppMasterBtnHidden");
				if(!jQuery.os.ios && sIcon){
					this._oShowMasterBtn.setIcon(sIcon);
				}
				oPage._updateHeaderContent(this._oShowMasterBtn, 'left', 0);
			} else {
				this._oShowMasterBtn.$().parent().toggleClass("sapMSplitAppMasterBtnHide", false);	
				this._oShowMasterBtn.removeStyleClass("sapMSplitAppMasterBtnHidden");	
				this._oShowMasterBtn.$().parent().toggleClass("sapMSplitAppMasterBtnShow", true);		
			}
			if(fnCallBack){
				fnCallBack(oPage);
			}
			
		}
};

//if the page uses a custom header, we will not remove the master button. The app dev has to do this by him/herself		
sap.m.SplitApp.prototype._removeMasterButton = function(oPage, fnCallBack) {
	var oSplitApp = this, oHeader;
	this.fireMasterButton({show: false});
	if(!this._oShowMasterBtn.$().is(":hidden")) {
		oPage = this._getRealPage(oPage);
		oHeader = oPage.getAggregation("internalHeader");
		if(oPage && oHeader && !this._checkCustomHeader(oPage)) {
			var oContentLeft = oHeader.getContentLeft();
			for(var i=0; i<oContentLeft.length; i++) {
				if(oContentLeft[i] === this._oShowMasterBtn) {
					this._oShowMasterBtn.$().parent().toggleClass("sapMSplitAppMasterBtnShow", false);
					this._oShowMasterBtn.$().parent().toggleClass("sapMSplitAppMasterBtnHide", true);
					this._oShowMasterBtn.$().parent().one("webkitAnimationEnd", function(){
						oSplitApp._oShowMasterBtn.addStyleClass("sapMSplitAppMasterBtnHidden");
						if(fnCallBack){
							fnCallBack(oPage);
						}
					});
					return;
				}
			}
		}
	}else{
		if(fnCallBack){
			fnCallBack(oPage);
		}
	}
};

sap.m.SplitApp.prototype._checkCustomHeader = function(oPage) {
	var oCustomHeader = oPage.getCustomHeader();
	if (oCustomHeader) {
		return true;
	} else {
		return false;
	}
};

sap.m.SplitApp.prototype._existsOnParentChain = function(oSelfControl, middleType, oWithinContainer){
	var bTypeMet = middleType ? false : true,
		bWithInContainer = false,
		oParent = oSelfControl;
	
	while(oParent){
		if(!bTypeMet){
			if(oParent instanceof middleType){
				bTypeMet = true;
			}
		}
		if(oParent.getId() === oWithinContainer.getId()){
			bWithInContainer = true;
		}
		if(bTypeMet && bWithInContainer){
			return true;
		}
		oParent = oParent.getParent();
	}
	return false;
};


sap.m.SplitApp.prototype._callMethodInManagedObject = function(sFunctionName, sAggregationName){
	var args = Array.prototype.slice.call(arguments);
	if(sAggregationName === "masterPages"){
	    args[1] = "pages";
		return this._oMasterNav[sFunctionName].apply(this._oMasterNav, args.slice(1));
	}else if(sAggregationName === "detailPages"){
	    args[1] = "pages";
		return this._oDetailNav[sFunctionName].apply(this._oDetailNav, args.slice(1));
	}else{
		return sap.ui.base.ManagedObject.prototype[sFunctionName].apply(this, args.slice(1));
	}
};
/**************************************************************
* END - Private methods
**************************************************************/

/**************************************************************
* START - forward aggregation related methods to NavContainer
**************************************************************/
sap.m.SplitApp.prototype.validateAggregation = function(sAggregationName, oObject, bMultiple){
	return this._callMethodInManagedObject("validateAggregation", sAggregationName, oObject, bMultiple);
};

sap.m.SplitApp.prototype.setAggregation = function(sAggregationName, oObject, bSuppressInvalidate){
	this._callMethodInManagedObject("setAggregation", sAggregationName, oObject, bSuppressInvalidate);
	return this;
};

sap.m.SplitApp.prototype.getAggregation = function(sAggregationName, oDefaultForCreation){
	return this._callMethodInManagedObject("getAggregation", sAggregationName, oDefaultForCreation);
};

sap.m.SplitApp.prototype.indexOfAggregation = function(sAggregationName, oObject){
	return this._callMethodInManagedObject("indexOfAggregation", sAggregationName, oObject);
};

sap.m.SplitApp.prototype.insertAggregation = function(sAggregationName, oObject, iIndex, bSuppressInvalidate){
	this._callMethodInManagedObject("insertAggregation", sAggregationName, oObject, iIndex, bSuppressInvalidate);
	return this;
};

sap.m.SplitApp.prototype.addAggregation = function(sAggregationName, oObject, bSuppressInvalidate){
	this._callMethodInManagedObject("addAggregation", sAggregationName, oObject, bSuppressInvalidate);
	return this;
};

sap.m.SplitApp.prototype.removeAggregation = function(sAggregationName, oObject, bSuppressInvalidate){
	return this._callMethodInManagedObject("removeAggregation", sAggregationName, oObject, bSuppressInvalidate);
};

sap.m.SplitApp.prototype.removeAllAggregation = function(sAggregationName, bSuppressInvalidate){
	return this._callMethodInManagedObject("removeAllAggregation", sAggregationName, bSuppressInvalidate);
};

sap.m.SplitApp.prototype.destroyAggregation = function(sAggregationName, bSuppressInvalidate){
	this._callMethodInManagedObject("destroyAggregation", sAggregationName, bSuppressInvalidate);
	return this;
};
/**************************************************************
* END - forward aggregation related methods to NavContainer
**************************************************************/