/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.me.Calendar.
jQuery.sap.declare("sap.me.Calendar");
jQuery.sap.require("sap.me.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Calendar.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getHideNavControls hideNavControls} : boolean (default: false)</li>
 * <li>{@link #getHideMonthTitles hideMonthTitles} : boolean (default: false)</li>
 * <li>{@link #getMonthsPerRow monthsPerRow} : int (default: 0)</li>
 * <li>{@link #getDayWidth dayWidth} : int (default: 45)</li>
 * <li>{@link #getDayHeight dayHeight} : int (default: 50)</li>
 * <li>{@link #getWeeksPerRow weeksPerRow} : int (default: 1)</li>
 * <li>{@link #getSingleRow singleRow} : boolean</li>
 * <li>{@link #getMonthsToDisplay monthsToDisplay} : int (default: 1)</li>
 * <li>{@link #getCurrentDate currentDate} : string</li>
 * <li>{@link #getEnableMultiselection enableMultiselection} : boolean (default: false)</li>
 * <li>{@link #getFirstDayOffset firstDayOffset} : int (default: 0)</li>
 * <li>{@link #getDisabledWeekDays disabledWeekDays} : any</li>
 * <li>{@link #getDisabledDates disabledDates} : any</li>
 * <li>{@link #getSwipeToNavigate swipeToNavigate} : boolean (default: false)</li>
 * <li>{@link #getDesign design} : sap.me.CalendarDesign (default: sap.me.CalendarDesign.Approval)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getDays days} : any</li>
 * <li>{@link #getMonths months} : any</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.me.Calendar#event:tapOnDate tapOnDate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.me.Calendar#event:changeCurrentDate changeCurrentDate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.me.Calendar#event:changeRange changeRange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This is the Calendar control
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * @name sap.me.Calendar
 */
sap.ui.core.Control.extend("sap.me.Calendar", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getSelectedDates", "toggleDatesSelection", "toggleDatesRangeSelection", "unselectAllDates", "toggleDatesType"
	],

	// ---- control specific ----
	library : "sap.me",
	properties : {
		"visible" : {type : "boolean", group : "Misc", defaultValue : true},
		"hideNavControls" : {type : "boolean", group : "Misc", defaultValue : false},
		"hideMonthTitles" : {type : "boolean", group : "Misc", defaultValue : false},
		"monthsPerRow" : {type : "int", group : "Misc", defaultValue : 0},
		"dayWidth" : {type : "int", group : "Misc", defaultValue : 45},
		"dayHeight" : {type : "int", group : "Misc", defaultValue : 50},
		"weeksPerRow" : {type : "int", group : "Misc", defaultValue : 1},
		"singleRow" : {type : "boolean", group : "Misc", defaultValue : null},
		"monthsToDisplay" : {type : "int", group : "Misc", defaultValue : 1},
		"currentDate" : {type : "string", group : "Misc", defaultValue : null},
		"enableMultiselection" : {type : "boolean", group : "Misc", defaultValue : false},
		"firstDayOffset" : {type : "int", group : "Misc", defaultValue : 0},
		"disabledWeekDays" : {type : "any", group : "Misc", defaultValue : null},
		"disabledDates" : {type : "any", group : "Misc", defaultValue : null},
		"swipeToNavigate" : {type : "boolean", group : "Misc", defaultValue : false},
		"design" : {type : "sap.me.CalendarDesign", group : "Appearance", defaultValue : sap.me.CalendarDesign.Approval},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"days" : {type : "any", group : "Appearance", defaultValue : null},
		"months" : {type : "any", group : "Appearance", defaultValue : null}
	},
	events : {
		"tapOnDate" : {}, 
		"changeCurrentDate" : {}, 
		"changeRange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.me.Calendar with name <code>sClassName</code> 
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
 * @name sap.me.Calendar.extend
 * @function
 */

sap.me.Calendar.M_EVENTS = {'tapOnDate':'tapOnDate','changeCurrentDate':'changeCurrentDate','changeRange':'changeRange'};


/**
 * Getter for property <code>visible</code>.
 * visibility of the control
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.me.Calendar#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setVisible
 * @function
 */


/**
 * Getter for property <code>hideNavControls</code>.
 * hides the area of navigation controls
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>hideNavControls</code>
 * @public
 * @name sap.me.Calendar#getHideNavControls
 * @function
 */

/**
 * Setter for property <code>hideNavControls</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bHideNavControls  new value for property <code>hideNavControls</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setHideNavControls
 * @function
 */


/**
 * Getter for property <code>hideMonthTitles</code>.
 * hides the area of month titles
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>hideMonthTitles</code>
 * @public
 * @name sap.me.Calendar#getHideMonthTitles
 * @function
 */

/**
 * Setter for property <code>hideMonthTitles</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bHideMonthTitles  new value for property <code>hideMonthTitles</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setHideMonthTitles
 * @function
 */


/**
 * Getter for property <code>monthsPerRow</code>.
 * months to display in a row. This sets the width of the whole control in order to contain the desired number of months per row
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>monthsPerRow</code>
 * @public
 * @name sap.me.Calendar#getMonthsPerRow
 * @function
 */

/**
 * Setter for property <code>monthsPerRow</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iMonthsPerRow  new value for property <code>monthsPerRow</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setMonthsPerRow
 * @function
 */


/**
 * Getter for property <code>dayWidth</code>.
 * the width of a day
 *
 * Default value is <code>45</code>
 *
 * @return {int} the value of property <code>dayWidth</code>
 * @public
 * @name sap.me.Calendar#getDayWidth
 * @function
 */

/**
 * Setter for property <code>dayWidth</code>.
 *
 * Default value is <code>45</code> 
 *
 * @param {int} iDayWidth  new value for property <code>dayWidth</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setDayWidth
 * @function
 */


/**
 * Getter for property <code>dayHeight</code>.
 * the height of a day
 *
 * Default value is <code>50</code>
 *
 * @return {int} the value of property <code>dayHeight</code>
 * @public
 * @name sap.me.Calendar#getDayHeight
 * @function
 */

/**
 * Setter for property <code>dayHeight</code>.
 *
 * Default value is <code>50</code> 
 *
 * @param {int} iDayHeight  new value for property <code>dayHeight</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setDayHeight
 * @function
 */


/**
 * Getter for property <code>weeksPerRow</code>.
 * weeks to display in a row
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>weeksPerRow</code>
 * @public
 * @name sap.me.Calendar#getWeeksPerRow
 * @function
 */

/**
 * Setter for property <code>weeksPerRow</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iWeeksPerRow  new value for property <code>weeksPerRow</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setWeeksPerRow
 * @function
 */


/**
 * Getter for property <code>singleRow</code>.
 * boolean that sets the view to week mode or month mode
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>singleRow</code>
 * @public
 * @name sap.me.Calendar#getSingleRow
 * @function
 */

/**
 * Setter for property <code>singleRow</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bSingleRow  new value for property <code>singleRow</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setSingleRow
 * @function
 */


/**
 * Getter for property <code>monthsToDisplay</code>.
 * number of months in a row.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>monthsToDisplay</code>
 * @public
 * @name sap.me.Calendar#getMonthsToDisplay
 * @function
 */

/**
 * Setter for property <code>monthsToDisplay</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iMonthsToDisplay  new value for property <code>monthsToDisplay</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setMonthsToDisplay
 * @function
 */


/**
 * Getter for property <code>currentDate</code>.
 * the center date where the month/week will be build around
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>currentDate</code>
 * @public
 * @name sap.me.Calendar#getCurrentDate
 * @function
 */

/**
 * Setter for property <code>currentDate</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sCurrentDate  new value for property <code>currentDate</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setCurrentDate
 * @function
 */


/**
 * Getter for property <code>enableMultiselection</code>.
 * to enable multiselection feature
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>enableMultiselection</code>
 * @public
 * @name sap.me.Calendar#getEnableMultiselection
 * @function
 */

/**
 * Setter for property <code>enableMultiselection</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEnableMultiselection  new value for property <code>enableMultiselection</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setEnableMultiselection
 * @function
 */


/**
 * Getter for property <code>firstDayOffset</code>.
 * to offset the first day of the week (0 = sunday)
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>firstDayOffset</code>
 * @public
 * @name sap.me.Calendar#getFirstDayOffset
 * @function
 */

/**
 * Setter for property <code>firstDayOffset</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iFirstDayOffset  new value for property <code>firstDayOffset</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setFirstDayOffset
 * @function
 */


/**
 * Getter for property <code>disabledWeekDays</code>.
 * Array of weekDays (as integers where 0=Sunday, 1=Monday etc) to be disabled. Interaction will be disabled for these week days.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>disabledWeekDays</code>
 * @public
 * @name sap.me.Calendar#getDisabledWeekDays
 * @function
 */

/**
 * Setter for property <code>disabledWeekDays</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oDisabledWeekDays  new value for property <code>disabledWeekDays</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setDisabledWeekDays
 * @function
 */


/**
 * Getter for property <code>disabledDates</code>.
 * Array of specific dates (strings or Date objects) that will be disabled/non interactive
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>disabledDates</code>
 * @public
 * @name sap.me.Calendar#getDisabledDates
 * @function
 */

/**
 * Setter for property <code>disabledDates</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oDisabledDates  new value for property <code>disabledDates</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setDisabledDates
 * @function
 */


/**
 * Getter for property <code>swipeToNavigate</code>.
 * When enabled, swipe gestures will navigate and not select
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>swipeToNavigate</code>
 * @public
 * @name sap.me.Calendar#getSwipeToNavigate
 * @function
 */

/**
 * Setter for property <code>swipeToNavigate</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSwipeToNavigate  new value for property <code>swipeToNavigate</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setSwipeToNavigate
 * @function
 */


/**
 * Getter for property <code>design</code>.
 * Indicates the design of the calendar (mainly colors)
 *
 * Default value is <code>sap.me.CalendarDesign.Approval</code>
 *
 * @return {sap.me.CalendarDesign} the value of property <code>design</code>
 * @public
 * @name sap.me.Calendar#getDesign
 * @function
 */

/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>sap.me.CalendarDesign.Approval</code> 
 *
 * @param {sap.me.CalendarDesign} oDesign  new value for property <code>design</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setDesign
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The width of the calendar
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.me.Calendar#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setWidth
 * @function
 */


/**
 * Getter for property <code>days</code>.
 * Array of day names, default value is sap.m.getLocaleData().getDays("abbreviated")
 * Check sap.ui.core.LocaleData documentation for more info.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>days</code>
 * @public
 * @name sap.me.Calendar#getDays
 * @function
 */

/**
 * Setter for property <code>days</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oDays  new value for property <code>days</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setDays
 * @function
 */


/**
 * Getter for property <code>months</code>.
 * Array of month names, default value is sap.m.getLocaleData().getMonths("abbreviated")
 * Check sap.ui.core.LocaleData documentation for more info.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>months</code>
 * @public
 * @name sap.me.Calendar#getMonths
 * @function
 */

/**
 * Setter for property <code>months</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oMonths  new value for property <code>months</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#setMonths
 * @function
 */


/**
 * event fired when a date is tapped 
 *
 * @name sap.me.Calendar#tapOnDate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.date date tapped
 * @param {boolean} oControlEvent.getParameters.didSelect if day was selected
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tapOnDate' event of this <code>sap.me.Calendar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.Calendar</code>.<br/> itself. 
 *  
 * event fired when a date is tapped 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.Calendar</code>.<br/> itself.
 *
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#attachTapOnDate
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tapOnDate' event of this <code>sap.me.Calendar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#detachTapOnDate
 * @function
 */

/**
 * Fire event tapOnDate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'date' of type <code>string</code> date tapped</li>
 * <li>'didSelect' of type <code>boolean</code> if day was selected</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.me.Calendar#fireTapOnDate
 * @function
 */


/**
 * event fired when tap to next or previous button and currentDate is updated 
 *
 * @name sap.me.Calendar#changeCurrentDate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.currentDate new date
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'changeCurrentDate' event of this <code>sap.me.Calendar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.Calendar</code>.<br/> itself. 
 *  
 * event fired when tap to next or previous button and currentDate is updated 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.Calendar</code>.<br/> itself.
 *
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#attachChangeCurrentDate
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'changeCurrentDate' event of this <code>sap.me.Calendar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#detachChangeCurrentDate
 * @function
 */

/**
 * Fire event changeCurrentDate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'currentDate' of type <code>string</code> new date</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.me.Calendar#fireChangeCurrentDate
 * @function
 */


/**
 * when the range of selected dates changes 
 *
 * @name sap.me.Calendar#changeRange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.fromDate from date
 * @param {string} oControlEvent.getParameters.toDate to date
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'changeRange' event of this <code>sap.me.Calendar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.Calendar</code>.<br/> itself. 
 *  
 * when the range of selected dates changes 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.Calendar</code>.<br/> itself.
 *
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#attachChangeRange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'changeRange' event of this <code>sap.me.Calendar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.Calendar#detachChangeRange
 * @function
 */

/**
 * Fire event changeRange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'fromDate' of type <code>string</code> from date</li>
 * <li>'toDate' of type <code>string</code> to date</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.me.Calendar#fireChangeRange
 * @function
 */


/**
 * returns an array of the currently selected dates (dates are strings formatted as Date.toDateString())
 *
 * @name sap.me.Calendar.prototype.getSelectedDates
 * @function

 * @type any
 * @public
 */


/**
 * it toggles the passed dates to selected/unselected
 *
 * @name sap.me.Calendar.prototype.toggleDatesSelection
 * @function
 * @param {any} 
 *         oADates
 *         Array of the dates to be toggled. they can be Strings or Date objects.
 * @param {boolean} 
 *         bBSelect
 *         select/unselect. Optional, if omitted it inverts each date's current state

 * @type void
 * @public
 */


/**
 * it toggles the selection of the dates within the passed range to selected/unselected
 *
 * @name sap.me.Calendar.prototype.toggleDatesRangeSelection
 * @function
 * @param {any} 
 *         oODateStart
 *         starting date of the range. It can be Strings or Date objects.
 * @param {any} 
 *         oODateEnd
 *         ending date of the range. It can be Strings or Date objects.
 * @param {boolean} 
 *         bBSelected
 *         selected/unselected. Optional, if omitted it inverts each date's current state

 * @type void
 * @public
 */


/**
 * unselect all the dates
 *
 * @name sap.me.Calendar.prototype.unselectAllDates
 * @function

 * @type void
 * @public
 */


/**
 * Change the type of the given dates
 *
 * @name sap.me.Calendar.prototype.toggleDatesType
 * @function
 * @param {any} 
 *         oADates
 *         An array of dates in string representation
 * @param {sap.me.CalendarEventType} 
 *         oSType
 *         The type of event
 * @param {boolean} 
 *         bBAdd
 *         Add/remove the type, if ommited it will toggle

 * @type void
 * @public
 */


// Start of sap/me/Calendar.js
///**
// * This file defines behavior for the control,
// */

/**
 * @private
 */
sap.me.Calendar.prototype.init = function() {
	// by default set currentdate to now
	var oDate = new Date();
	this.setProperty("currentDate", oDate.toDateString(), true);

	// this.setProperty("disabledWeekDays", [0], true);

	// this shouldn't be required here, but without it the sap.m.getLocaleData
	// doesn't work
	jQuery.sap.require("sap.ui.core.LocaleData");

	var oi18n = sap.m.getLocaleData();
	this.setDays(oi18n.getDays("abbreviated"));
	this.setMonths(oi18n.getMonths("abbreviated"));

	var oPrevBtn = new sap.ui.core.Icon({
		src:"navigation-left-arrow"
	});
	oPrevBtn.addStyleClass("sapMeCalendarPrevious");
	oPrevBtn.attachPress(null, this._gotoPrevious, this);
	oPrevBtn.setParent(this);
	this._oPrevBtn = oPrevBtn;

	var oNextBtn = new sap.ui.core.Icon({
		src:"navigation-right-arrow"
	});
	oNextBtn.addStyleClass("sapMeCalendarNext");
	oNextBtn.attachPress(null, this._gotoNext, this);
	oNextBtn.setParent(this);
	this._oNextBtn = oNextBtn;

	this._oDatesClasses = {};

	this._$interactiveDates = null;
};

sap.me.Calendar.prototype.exit = function() {
	this._oPrevBtn.destroy();
	delete this._oPrevBtn;
	this._oNextBtn.destroy();
	delete this._oNextBtn;

	delete this._oDatesClasses;
	delete this._$interactiveDates;

	delete this._$fromDate;
	delete this._$toDate;
};

sap.me.Calendar.prototype.onBeforeRendering = function() {
	delete this._$interactiveDates;
};
sap.me.Calendar.prototype.onAfterRendering = function() {
	var $this = this.$();
	var $dates = null;
	var aDisabledWeekDays = this.getDisabledWeekDays() || [];
	var aClassesToDisable = [];
	for ( var i = 0; i < aDisabledWeekDays.length; i++) {
		aClassesToDisable.push(".sapMeCalendarWeekDay" + aDisabledWeekDays[i]);
	}

	var bIncludeNotInCurrentMonth = this.getSingleRow()
			|| this.getMonthsToDisplay() === 1;
	if (!bIncludeNotInCurrentMonth) {
		aClassesToDisable.push(".sapMeCalendarDayNotInCurrentMonth");
	}
	if (aClassesToDisable.length) {
		var sToExclude = aClassesToDisable.join(", ");
		// remove pointer events for non-interactive dates
		$this.find(".sapMeCalendarMonth > div.sapMeCalendarMonthDays")
				.children(sToExclude).css({
					"pointer-events" : "none"
				});
		$dates = $this
				.find(".sapMeCalendarMonth > div.sapMeCalendarMonthDays > .sapMeCalendarMonthDay:not("
						+ sToExclude + ")");
	} else {
		$dates = $this
				.find(".sapMeCalendarMonth > div.sapMeCalendarMonthDays > .sapMeCalendarMonthDay");
	}
	var aDatesToDisable = this.getDisabledDates() || [];
	for ( var i = 0; i < aDatesToDisable.length; i++) {
		var sDate = aDatesToDisable[i];
		$dates.children("input[value='" + sDate + "']") // get the right input
		.parent() // get the date
		.css({
			"pointer-events" : "none"
		}); // disable
	}
	for ( var sDate in this._oDatesClasses) {
		var sStates = this._oDatesClasses[sDate].join(" ");
		$dates.children("input[value='" + sDate + "']") // get the right input
		.parent() // get the date
		.addClass(sStates); // set selection
	}
	// i save this array so it will be more performant instead of doing
	// selectors.
	this._$interactiveDates = $dates;

	// hiding nav controls
	var bHide = this.getHideNavControls();
	this._oPrevBtn.$().css({
		display : bHide ? "none" : ""
	});
	this._oNextBtn.$().css({
		display : bHide ? "none" : ""
	});
};

sap.me.Calendar.prototype.setEnableMultiselection = function(bEnable) {
	return this.setProperty("enableMultiselection", bEnable, true); // no
																	// rerender
																	// needed
};

sap.me.Calendar.prototype.setHideNavControls = function(bHide) {
	if (this.getDomRef()) {
		this._oPrevBtn.$().css({
			display : bHide ? "none" : ""
		});
		this._oNextBtn.$().css({
			display : bHide ? "none" : ""
		});
	}
	return this.setProperty("hideNavControls", bHide, true); // no rerender
																// needed
};

sap.me.Calendar.prototype.setHideMonthTitles = function(bHide) {
	if (this.getDomRef()) {
		this.$().find(".sapMeCalendarMonthName").css({
			display : bHide ? "none" : ""
		});
	}
	return this.setProperty("hideMonthTitles", bHide, true); // no rerender
																// needed
};

sap.me.Calendar.prototype.setFirstDayOffset = function(iOffset) {
	iOffset = iOffset % this.getDays().length;
	return this.setProperty("firstDayOffset", iOffset);
};

sap.me.Calendar.prototype.setWeeksPerRow = function(iWeeks) {
	iWeeks = iWeeks % 5;
	return this.setProperty("weeksPerRow", iWeeks);
};

sap.me.Calendar.prototype.setDisabledWeekDays = function(aWeekDays) {
	aWeekDays = aWeekDays || [];
	return this.setProperty("disabledWeekDays", aWeekDays);
};

sap.me.Calendar.prototype.setDisabledDates = function(aDates) {
	aDates = aDates || [];
	for ( var i = 0; i < aDates.length; i++) {
		var oDate = aDates[i];
		if (typeof oDate == "string") {
			oDate = new Date(oDate);
		}
		var sDate = oDate.toDateString();
		aDates[i] = sDate;
	}
	return this.setProperty("disabledDates", aDates);
};

// ** GESTURE HANDLERS ** //

sap.me.Calendar.prototype.ontouchstart = function(oEvent) {
	if (!this.getSwipeToNavigate()) {
		this._gestureStart(oEvent);
	}
};
sap.me.Calendar.prototype._gestureStart = function(oEvent) {
	this._$fromDate = this.getEnableMultiselection() ? this
			._getDateDomRef(oEvent.target) : null;
};

sap.me.Calendar.prototype.ontouchmove = function(oEvent) {
	if (!this.getSwipeToNavigate()) {
		this._gestureMove(oEvent);
	}
};
sap.me.Calendar.prototype._gestureMove = function(oEvent) {
	if (this._$fromDate) {
		if (!this._$toDate) { // it means it is the first time it moves
			this._$fromDate.addClass("sapMeCalendarHighlight");
			this._$toDate = this._$fromDate;
		}
		oEvent.stopPropagation();
		oEvent.preventDefault();
		var oDomRef = oEvent.target;
		if (oEvent.touches.length) {
			var oTouch = oEvent.touches[0];
			oDomRef = document.elementFromPoint(oTouch.clientX, oTouch.clientY);
		}
		var $toDate = this._getDateDomRef(oDomRef);
		if ($toDate && $toDate != this._$toDate) {
			this._$toDate.removeClass("sapMeCalendarHighlight");
			this._$fromDate.addClass("sapMeCalendarHighlight"); // because it
																// could have
																// been = toDate
			$toDate.addClass("sapMeCalendarHighlight");
			this._$toDate = $toDate;
		}
	}
};

sap.me.Calendar.prototype.ontouchend = function(oEvent) {
	if (!this.getSwipeToNavigate()) {
		this._gestureEnd(oEvent);
	}
};
sap.me.Calendar.prototype._gestureEnd = function(oEvent) {
	if (this._$fromDate && this._$toDate) { // this means it has moved
		oEvent.stopPropagation();
		oEvent.preventDefault();
		var sFromDate = this._getDateValue(this._$fromDate);
		var sToDate = this._getDateValue(this._$toDate);
		this._$fromDate.removeClass("sapMeCalendarHighlight");
		this._$toDate.removeClass("sapMeCalendarHighlight");
		this.toggleDatesRangeSelection(sFromDate,sToDate,true);
		this.fireChangeRange({
			fromDate : sFromDate,
			toDate : sToDate
		});
	}
	delete this._$fromDate;
	delete this._$toDate;
};

sap.me.Calendar.prototype.ontap = function(oEvent) {
	this._gestureSelect(oEvent);
};
sap.me.Calendar.prototype._gestureSelect = function(oEvent) {
	var $date = this._getDateDomRef(oEvent.target);
	if ($date) { // handle tap-like event
		var sDate = this._getDateValue($date);
		var bDidSelect = !$date.hasClass("sapMeCalendarSelected");

		if (!this.getEnableMultiselection()) {
			this.unselectAllDates();
		}
		$date.toggleClass("sapMeCalendarSelected", bDidSelect);
		this._updateDatesWithClass("sapMeCalendarSelected", sDate, bDidSelect);
		this.fireTapOnDate({
			didSelect : bDidSelect,
			date : sDate
		});
	}
};

sap.me.Calendar.prototype.onswipeleft = function(oEvent) {
	if (this.getSwipeToNavigate()) {
		this._gotoNext();
	}
};
sap.me.Calendar.prototype.onswiperight = function(oEvent) {
	if (this.getSwipeToNavigate()) {
		this._gotoPrevious();
	}
};

// ** PUBLIC METHODS **//

sap.me.Calendar.prototype.getSelectedDates = function() {
	return this._getDatesWithStyleClass("sapMeCalendarSelected");
};



sap.me.Calendar.prototype.toggleDatesSelection = function(aDates, bSelected) {
	this._toggleDatesStyleClass("sapMeCalendarSelected", aDates, bSelected);
};

sap.me.Calendar.prototype.toggleDatesType = function(aDates, sType, bSelected) {
	this._toggleDatesStyleClass("sapMeCalendar"+sType, aDates, bSelected);
};
sap.me.Calendar.prototype.removeTypesOfAllDates = function(){
	this._removeStyleClassOfAllDates("sapMeCalendar"+sap.me.CalendarEventType.Type00);
	this._removeStyleClassOfAllDates("sapMeCalendar"+sap.me.CalendarEventType.Type01);
	this._removeStyleClassOfAllDates("sapMeCalendar"+sap.me.CalendarEventType.Type04);
	this._removeStyleClassOfAllDates("sapMeCalendar"+sap.me.CalendarEventType.Type06);
	this._removeStyleClassOfAllDates("sapMeCalendar"+sap.me.CalendarEventType.Type07);
};


sap.me.Calendar.prototype.unselectAllDates = function() {
	this._removeStyleClassOfAllDates("sapMeCalendarSelected");
};


sap.me.Calendar.prototype.toggleDatesRangeSelection = function(oDateStart,
		oDateEnd, bSelected) {
	this._toggleDatesRangeStyleClass("sapMeCalendarSelected", oDateStart,
			oDateEnd, bSelected);
};

// ** PRIVATE, INTERNAL METHODS **//
sap.me.Calendar.prototype._getDatesWithStyleClass = function(sState) {
	var aDates = [];
	for ( var sDate in this._oDatesClasses) {
		if (jQuery.inArray(sState, this._oDatesClasses[sDate]) !== -1) {
			aDates.push(sDate);
		}
	}
	return aDates;
};

sap.me.Calendar.prototype._toggleDatesRangeStyleClass = function(sClass,
		oDateStart, oDateEnd, bActive) {
	if (typeof oDateStart == "string") {
		oDateStart = new Date(oDateStart);
	}
	if (typeof oDateEnd == "string") {
		oDateEnd = new Date(oDateEnd);
	}

	if (oDateStart && oDateEnd && typeof oDateStart.getTime == "function"
			&& typeof oDateEnd.getTime == "function") {
		if (oDateStart > oDateEnd) {
			var oTemp = new Date(oDateStart.getTime());
			oDateStart = oDateEnd;
			oDateEnd = oTemp;
		}
		var aDates = [];
		var oDateStartCopy = new Date(oDateStart.getTime());
		while (oDateEnd - oDateStartCopy >= 0) {
			aDates.push(oDateStartCopy.toDateString());
			oDateStartCopy.setDate(oDateStartCopy.getDate() + 1);
		}
		this._toggleDatesStyleClass(sClass, aDates, bActive);
	}
};
sap.me.Calendar.prototype._toggleDatesStyleClass = function(sClass, aDates,
		bActive) {
	for ( var i = 0; i < aDates.length; i++) {
		var oDate = aDates[i];
		if (typeof oDate == "string") {
			oDate = new Date(oDate);
		}
		var sDate = oDate.toDateString();
		aDates[i] = sDate;
		this._updateDatesWithClass(sClass, sDate, bActive);
		if (this._$interactiveDates) {
			this._$interactiveDates.children("input[value='" + sDate + "']")
					.parent().toggleClass(sClass, bActive);
		}
	}
};


sap.me.Calendar.prototype._removeStyleClassOfAllDates = function(sClass) {
	for ( var sDate in this._oDatesClasses) {
		this._updateDatesWithClass(sClass, sDate, false);
	}
	if (this._$interactiveDates) {
		this._$interactiveDates.removeClass(sClass);
	}
};
sap.me.Calendar.prototype._gotoPrevious = function() {
	var sCurrentDate = this.getCurrentDate();
	var currentDate = new Date(sCurrentDate);
	var bSingleRow = this.getSingleRow();
	if (bSingleRow) {
		currentDate.setDate(currentDate.getDate() - 7);
	} else {
		currentDate.setDate(0); // pass to previous month
		currentDate.setDate(1); // go to its first day
	}
	var sCurDate = currentDate.toDateString();
	this.setCurrentDate(sCurDate);
	this.fireChangeCurrentDate({
		currentDate : sCurDate
	});
};

sap.me.Calendar.prototype._gotoNext = function() {
	var sCurrentDate = this.getCurrentDate();
	var currentDate = new Date(sCurrentDate);
	var bSingleRow = this.getSingleRow();
	if (bSingleRow) {
		currentDate.setDate(currentDate.getDate() + 7);
	} else {
		currentDate.setDate(32); // to pass to next month
		currentDate.setDate(1); // to go to its first day
	}
	var sCurDate = currentDate.toDateString();
	this.setCurrentDate(sCurDate);
	this.fireChangeCurrentDate({
		currentDate : sCurDate
	});
};

sap.me.Calendar.prototype._updateDatesWithClass = function(sClass, sDate,
		bActive) {
	var aStates = this._oDatesClasses[sDate] || [];
	var i = jQuery.inArray(sClass, aStates);
	if (bActive && i === -1) {
		aStates.push(sClass);
	} else if (!bActive && i !== -1) {
		aStates.splice(i, 1);
	}

	if (aStates.length === 0) {
		this._oDatesClasses[sDate] = null;
		delete this._oDatesClasses[sDate];
	} else {
		this._oDatesClasses[sDate] = aStates;
	}
};

sap.me.Calendar.prototype._getDateValue = function($date) {
	// TODO find proper way (e.g. do CalendarDay control)
	return $date.children("input").eq(0).val();
};

sap.me.Calendar.prototype._getMonthDate = function(oDomRef) {
	var $domref = jQuery(oDomRef);
	var $this = jQuery(this.getDomRef());
	while ($domref && $domref != $this
			&& !$domref.hasClass("sapMeCalendarMonthDay")) {
		$domref = $domref.parent();
	}
	return $domref && $domref.parent().hasClass("sapMeCalendarMonth") ? $domref
			: null;
};

sap.me.Calendar.prototype._getDateDomRef = function(oDomRef) {
	var $src = oDomRef ? jQuery(oDomRef) : null;
	var sThisId = this.getId();
	var $result = null;
	while ($src && $src[0].id != sThisId
			&& !$src.hasClass("sapMeCalendarMonth")) {
		if ($src.hasClass("sapMeCalendarMonthDay")
				&& $src.parent().hasClass("sapMeCalendarMonthDays")) {
			$result = $src;
			break;
		}
		$src = $src.parent();
	}
	return $result;
};
