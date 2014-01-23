/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.me.OverlapCalendar.
jQuery.sap.declare("sap.me.OverlapCalendar");
jQuery.sap.require("sap.me.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new OverlapCalendar.
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
 * <li>{@link #getStartDate startDate} : string</li>
 * <li>{@link #getWeeksPerRow weeksPerRow} : int (default: 2)</li>
 * <li>{@link #getFirstDayOffset firstDayOffset} : int (default: 0)</li>
 * <li>{@link #getShowOverlapIndicator showOverlapIndicator} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getSwipeToNavigate swipeToNavigate} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCalendarEvents calendarEvents} : sap.me.OverlapCalendarEvent[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.me.OverlapCalendar#event:endOfData endOfData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.me.OverlapCalendar#event:changeDate changeDate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A calendar that allows to display events in a grid and show the overlapped events
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * @name sap.me.OverlapCalendar
 */
sap.ui.core.Control.extend("sap.me.OverlapCalendar", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.me",
	properties : {
		"startDate" : {type : "string", group : "Data", defaultValue : null},
		"weeksPerRow" : {type : "int", group : "Appearance", defaultValue : 2},
		"firstDayOffset" : {type : "int", group : "Appearance", defaultValue : 0},
		"showOverlapIndicator" : {type : "boolean", group : "Appearance", defaultValue : false},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"swipeToNavigate" : {type : "boolean", group : "Behavior", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'}
	},
	aggregations : {
    	"calendarEvents" : {type : "sap.me.OverlapCalendarEvent", multiple : true, singularName : "calendarEvent"}, 
    	"calendar" : {type : "sap.me.Calendar", multiple : false, visibility : "hidden"}, 
    	"typeLabels" : {type : "sap.m.Label", multiple : true, singularName : "typeLabel", visibility : "hidden"}, 
    	"nameLabels" : {type : "sap.m.Label", multiple : true, singularName : "nameLabel", visibility : "hidden"}
	},
	events : {
		"endOfData" : {}, 
		"changeDate" : {}
	}
}});


/**
 * Creates a new subclass of class sap.me.OverlapCalendar with name <code>sClassName</code> 
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
 * @name sap.me.OverlapCalendar.extend
 * @function
 */

sap.me.OverlapCalendar.M_EVENTS = {'endOfData':'endOfData','changeDate':'changeDate'};


/**
 * Getter for property <code>startDate</code>.
 * The first date to display for the calendar
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>startDate</code>
 * @public
 * @name sap.me.OverlapCalendar#getStartDate
 * @function
 */

/**
 * Setter for property <code>startDate</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sStartDate  new value for property <code>startDate</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#setStartDate
 * @function
 */


/**
 * Getter for property <code>weeksPerRow</code>.
 * Number of weeks
 *
 * Default value is <code>2</code>
 *
 * @return {int} the value of property <code>weeksPerRow</code>
 * @public
 * @name sap.me.OverlapCalendar#getWeeksPerRow
 * @function
 */

/**
 * Setter for property <code>weeksPerRow</code>.
 *
 * Default value is <code>2</code> 
 *
 * @param {int} iWeeksPerRow  new value for property <code>weeksPerRow</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#setWeeksPerRow
 * @function
 */


/**
 * Getter for property <code>firstDayOffset</code>.
 * Indicate how to offset the first day in regards to a Sunday (by default)
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>firstDayOffset</code>
 * @public
 * @name sap.me.OverlapCalendar#getFirstDayOffset
 * @function
 */

/**
 * Setter for property <code>firstDayOffset</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iFirstDayOffset  new value for property <code>firstDayOffset</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#setFirstDayOffset
 * @function
 */


/**
 * Getter for property <code>showOverlapIndicator</code>.
 * Do we want to display the overlap indicator
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showOverlapIndicator</code>
 * @public
 * @name sap.me.OverlapCalendar#getShowOverlapIndicator
 * @function
 */

/**
 * Setter for property <code>showOverlapIndicator</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowOverlapIndicator  new value for property <code>showOverlapIndicator</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#setShowOverlapIndicator
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Indicates if we should render this component
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.me.OverlapCalendar#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#setVisible
 * @function
 */


/**
 * Getter for property <code>swipeToNavigate</code>.
 * Use swipe gesture to navigate
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>swipeToNavigate</code>
 * @public
 * @name sap.me.OverlapCalendar#getSwipeToNavigate
 * @function
 */

/**
 * Setter for property <code>swipeToNavigate</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSwipeToNavigate  new value for property <code>swipeToNavigate</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#setSwipeToNavigate
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
 * @name sap.me.OverlapCalendar#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#setWidth
 * @function
 */


/**
 * Getter for aggregation <code>calendarEvents</code>.<br/>
 * The list of events to display in the calendar grid
 * 
 * @return {sap.me.OverlapCalendarEvent[]}
 * @public
 * @name sap.me.OverlapCalendar#getCalendarEvents
 * @function
 */


/**
 * Inserts a calendarEvent into the aggregation named <code>calendarEvents</code>.
 *
 * @param {sap.me.OverlapCalendarEvent}
 *          oCalendarEvent the calendarEvent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the calendarEvent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the calendarEvent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the calendarEvent is inserted at 
 *             the last position        
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#insertCalendarEvent
 * @function
 */

/**
 * Adds some calendarEvent <code>oCalendarEvent</code> 
 * to the aggregation named <code>calendarEvents</code>.
 *
 * @param {sap.me.OverlapCalendarEvent}
 *            oCalendarEvent the calendarEvent to add; if empty, nothing is inserted
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#addCalendarEvent
 * @function
 */

/**
 * Removes an calendarEvent from the aggregation named <code>calendarEvents</code>.
 *
 * @param {int | string | sap.me.OverlapCalendarEvent} vCalendarEvent the calendarEvent to remove or its index or id
 * @return {sap.me.OverlapCalendarEvent} the removed calendarEvent or null
 * @public
 * @name sap.me.OverlapCalendar#removeCalendarEvent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>calendarEvents</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.me.OverlapCalendarEvent[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.me.OverlapCalendar#removeAllCalendarEvents
 * @function
 */

/**
 * Checks for the provided <code>sap.me.OverlapCalendarEvent</code> in the aggregation named <code>calendarEvents</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.me.OverlapCalendarEvent}
 *            oCalendarEvent the calendarEvent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.me.OverlapCalendar#indexOfCalendarEvent
 * @function
 */
	

/**
 * Destroys all the calendarEvents in the aggregation 
 * named <code>calendarEvents</code>.
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#destroyCalendarEvents
 * @function
 */


/**
 * Indicates that we have reach the last week with data 
 *
 * @name sap.me.OverlapCalendar#endOfData
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.before Indicates if the data missing are before the start date or at the end
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'endOfData' event of this <code>sap.me.OverlapCalendar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.OverlapCalendar</code>.<br/> itself. 
 *  
 * Indicates that we have reach the last week with data 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.OverlapCalendar</code>.<br/> itself.
 *
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#attachEndOfData
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'endOfData' event of this <code>sap.me.OverlapCalendar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#detachEndOfData
 * @function
 */

/**
 * Fire event endOfData to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'before' of type <code>boolean</code> Indicates if the data missing are before the start date or at the end</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.me.OverlapCalendar#fireEndOfData
 * @function
 */


/**
 * Triggered when the displayed dates change 
 *
 * @name sap.me.OverlapCalendar#changeDate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.firstDate The first date displayed in the calendar
 * @param {object} oControlEvent.getParameters.lastDate The laste date that will be displayed
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'changeDate' event of this <code>sap.me.OverlapCalendar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.OverlapCalendar</code>.<br/> itself. 
 *  
 * Triggered when the displayed dates change 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.OverlapCalendar</code>.<br/> itself.
 *
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#attachChangeDate
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'changeDate' event of this <code>sap.me.OverlapCalendar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.OverlapCalendar#detachChangeDate
 * @function
 */

/**
 * Fire event changeDate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'firstDate' of type <code>object</code> The first date displayed in the calendar</li>
 * <li>'lastDate' of type <code>object</code> The laste date that will be displayed</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.me.OverlapCalendar#fireChangeDate
 * @function
 */


// Start of sap/me/OverlapCalendar.js
///**
// * This file defines behavior for the control,
// */
jQuery.sap.require("sap.me.Calendar");
jQuery.sap.require("sap.ui.core.theming.Parameters");

sap.me.OverlapCalendar.prototype.init = function(){
	// Private property for the sap.me.Calendar control instance
	this.setAggregation("calendar", new sap.me.Calendar({
		singleRow : true,
		weeksPerRow: this.getWeeksPerRow(),
		monthsPerRow: 1,
		monthsToDisplay: 1,
		dayWidth:48,
		dayHeight:48,
		swipeToNavigate:this.getSwipeToNavigate()
	}));
	this.getCalendar().attachChangeCurrentDate(this.onCurrentDateChanged,this);
	this._typeWithBgImages = ["04","07"];
	this._oDaysOverlap = {};
};

sap.me.OverlapCalendar.prototype.onswiperight = function(oEvent){
	if(this.getSwipeToNavigate()){
		this.getCalendar().onswiperight(oEvent);
	}
};

sap.me.OverlapCalendar.prototype.onswipeleft = function(oEvent){
	if(this.getSwipeToNavigate()){
		this.getCalendar().onswipeleft(oEvent);
	}
};

sap.me.OverlapCalendar.prototype.setSwipeToNavigate = function(bSwipe){
	this.getCalendar().setSwipeToNavigate(bSwipe);
	this.setProperty("swipeToNavigate",bSwipe,true);
};

sap.me.OverlapCalendar.prototype._getFirstDateDisplayed = function(){
    var iFirstDayOffset = this.getCalendar().getFirstDayOffset(); 
    var currentDate = new Date(this.getStartDate());
    var iCurrentDate = currentDate.getDate();
    var iCurrentDay = currentDate.getDay();
    currentDate.setDate(1); // go to first day of month
	var iDaysToGoBack = iCurrentDay + 1 - iFirstDayOffset;	
    currentDate.setDate(iCurrentDate - iDaysToGoBack + 1);
    return currentDate;
};

sap.me.OverlapCalendar.prototype._getLastDateDisplayed = function(){
	var aWeekDays = this.getCalendar().getDays();
    var iWeekDays = aWeekDays.length;
    var iWeeksPerRow = this.getCalendar().getWeeksPerRow();
	var iDaysInRow = iWeeksPerRow * iWeekDays;
	var currentDate = this._getFirstDateDisplayed();
	var tempDate = new Date(currentDate.getTime());
	tempDate.setDate(tempDate.getDate() + iDaysInRow - 1);
	return tempDate;
};
sap.me.OverlapCalendar.prototype.setWeeksPerRow = function( iWeeksPerRow ){
	this.getCalendar().setWeeksPerRow(iWeeksPerRow);
	this.setProperty("weeksPerRow",iWeeksPerRow);
};

sap.me.OverlapCalendar.prototype.getCalendar = function(){
	return this.getAggregation("calendar");
};

sap.me.OverlapCalendar.prototype.setStartDate = function(sDate){
	this.getCalendar().setFirstDayOffset(0);
	this.getCalendar().setCurrentDate(sDate);
	this.setProperty("startDate",sDate);
	var offset = this._getDaysOffset(new Date(sDate), this._getFirstDateDisplayed());
	this.getCalendar().setFirstDayOffset(offset);
};
	
sap.me.OverlapCalendar.prototype.onCurrentDateChanged = function(oEvent){
	this.setProperty("startDate",oEvent.getParameter("currentDate"),true);
	this.getCalendar().invalidate();
	this._renderCalendarEvents();
	this.fireChangeDate({firstDate:this._getFirstDateDisplayed(),endDate:this._getLastDateDisplayed()});
};
sap.me.OverlapCalendar.prototype.onBeforeRendering = function(){
	this._aRows = [];
	this._lastDate = null;
	this._firstDate = null;
	var aCalendarEvents = this.getCalendarEvents();
	jQuery.each(aCalendarEvents, jQuery.proxy(this._parseCalendarEvent,this));
};
sap.me.OverlapCalendar.prototype.onAfterRendering = function(){
	this._renderCalendarEvents();
};

sap.me.OverlapCalendar.prototype._getDayId = function( date ){
	var currentDate = new Date(this._getFirstDateDisplayed());
	return this._getDaysOffset(currentDate, date);
};

sap.me.OverlapCalendar.prototype._cleanUpDivs = function(){
	// Clean up the divs
	jQuery(".sapMeOverlapCalendarDay").removeClass().addClass("sapMeOverlapCalendarDay");
	jQuery(".sapMeOverlapCalendarHalfDay").remove();
	jQuery(".sapMeOverlapCalendarDay.sapMeOverlapCalendarDayWithHalf").removeClass(".sapMeOverlapCalendarDayWithHalf");
	jQuery(".sapMeOverlapCalendarOverlap").css("background-color","transparent").css("border","none");
	jQuery(".sapMeOverlapCalendarTypeLbl").remove();
};

sap.me.OverlapCalendar.prototype._renderCalendarEvents = function(){
	this._mHalfDays = {};
	this._cleanUpDivs();
	// Render the events
	this._oDaysOverlap = {};
	var aCalendarEvents = this.getCalendarEvents();
	jQuery.each(aCalendarEvents, jQuery.proxy(this._renderCalendarEvent,this));
	jQuery.each(this._mHalfDays, jQuery.proxy(this._renderHalfDayCalendarEvent,this));
	// Render overlap
	if( this.getShowOverlapIndicator()){
		for( var id in this._oDaysOverlap ){
			if( this._oDaysOverlap[id] != undefined && this._oDaysOverlap[id] > 1 ){
				var $div = jQuery.sap.byId("overlap-"+id);
				$div.css("background-color",sap.ui.core.theming.Parameters.get("sapMeOverlapCalendarIndicator"));
				$div.css("border-right","1px solid " + sap.ui.core.theming.Parameters.get("sapMeOverlapCalendarIndicator"));
			}		
		}
	};
	// Test if we reach the end
	if( this._firstDate && this._lastDate){
		var currentDatePlus7 = this._getFirstDateDisplayed();
		currentDatePlus7.setDate(currentDatePlus7.getDate()+7);
		var currentDateEndMinus7 = this._getLastDateDisplayed();
		currentDateEndMinus7.setDate( currentDateEndMinus7.getDate() - 7 );
		if( (this._dayIsBefore(this._lastDate, currentDatePlus7) )){
			this.fireEndOfData({before:false});
		} else if( this._dayIsAfter(this._firstDate,currentDateEndMinus7)){
			this.fireEndOfData({before:true});
		}
	}
};

sap.me.OverlapCalendar.prototype._addToDayOverlap = function( dayId ){
	if( this._oDaysOverlap[dayId]==undefined){
		this._oDaysOverlap[dayId] = 0;
	}
	this._oDaysOverlap[dayId]++;
};

sap.me.OverlapCalendar.prototype._getDaysOffset = function( firstDate, secondDate ){
    return Math.abs(this._getDaysDifference(firstDate,secondDate));
};

sap.me.OverlapCalendar.prototype._getDaysDifference = function( firstDate, secondDate ){
	// The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = firstDate.getTime();
    var date2_ms = secondDate.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date1_ms - date2_ms;
    
    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY);
};

sap.me.OverlapCalendar.prototype._dayIsAfter = function( date, dateToCompare ){
	return (this._getDaysDifference(date, dateToCompare) > 0 ); 
};


sap.me.OverlapCalendar.prototype._dayIsBefore= function( date, dateToCompare ){
	return (this._getDaysDifference(date, dateToCompare) < 0 ); 
};

sap.me.OverlapCalendar.prototype._renderHalfDayCalendarEvent = function( key, aHalfDaysEvent ){
	var e = aHalfDaysEvent[0];
	var $div = jQuery.sap.byId(key);
	var t = e.getType();
	var b = (jQuery.inArray(t,this._typeWithBgImages) > -1 );
	$div.addClass("sapMeOverlapCalendarDayWithHalf");
	$div.append("<div class='sapMeOverlapCalendarHalfDay sapMeOverlapCalendarType"+t+"HalfDayStart'></div>");
	var dayWidth = (100 / (this.getCalendar().getWeeksPerRow() * 7));
	$div.children(":first").width(dayWidth+"%").height(this.getCalendar().getDayHeight());
	if( aHalfDaysEvent.length > 1 ){
		var e2 = aHalfDaysEvent[1];
		var t2 = e2.getType();
		$div.append("<div class='sapMeOverlapCalendarHalfDay sapMeOverlapCalendarType"+t2+"HalfDayEnd'></div>");
	}else if( b ){
		$div.append("<div class='sapMeOverlapCalendarHalfDay sapMeOverlapCalendarTypeHalfDayEnd'></div>");
	}
	$div.children(":last").width(dayWidth+"%").height(this.getCalendar().getDayHeight());
};

sap.me.OverlapCalendar.prototype._renderCalendarEvent = function(index, oCalendarEvent){
	var startDate = new Date(oCalendarEvent.getStartDay());
	var endDate = new Date(oCalendarEvent.getEndDay());
	if( this._lastDate == undefined ){
		this._lastDate = endDate;
	}
	if( this._dayIsAfter(endDate, this._lastDate)){
		this._lastDate = endDate;
	};
	if( this._firstDate == undefined ){
		this._firstDate = startDate;
	}
	if( this._dayIsBefore(startDate, this._firstDate)){
		this._firstDate = startDate;
	}
	var currentDate = this._getFirstDateDisplayed();
	var lastDate = this._getLastDateDisplayed();
	if( (!this._dayIsBefore(endDate,currentDate)) && (!this._dayIsAfter(startDate,lastDate))){
		var row = oCalendarEvent.getRow();
		var labelDivId = this.getId()+"-row-"+row+"-lbls";
		var $labelDiv = jQuery.sap.byId(labelDivId);
		var date = this._dayIsAfter( startDate, currentDate) ? startDate : currentDate;
		endDate = this._dayIsAfter(endDate, lastDate ) ? lastDate : endDate;
		var nbOfDays = this._getDaysOffset( date, endDate ) +1;
		var nbOfDaysOffset = this._getDaysOffset( currentDate, date );
		var type = oCalendarEvent.getTypeName();
		var css = "sapMeOverlapCalendarType"+oCalendarEvent.getType();
		var $div=undefined;
		var id;
		if( oCalendarEvent.getHalfDay()===true){

			id = this._getDayId(date);
			var rowId = row+"-"+id;
			if( this._mHalfDays[rowId] == undefined ){
				this._mHalfDays[rowId] = [];
				$div = jQuery.sap.byId(rowId);
			}
			this._mHalfDays[rowId].push(oCalendarEvent);
		} else {
			while( (this._getDaysDifference(date, endDate)<=0) ){
				id = this._getDayId(date);
				this._addToDayOverlap(id);
				$div = jQuery.sap.byId(row+"-"+id);
				$div.addClass(css);
				date.setDate(date.getDate()+1);
			}
		}
		if( $div != undefined) {
			// ensure the maximum width of the labels DIV is the calendar's width.
			$labelDiv.width(this.getWidth());
			$labelDiv.append("<label dir='Inherit' id='lbl"+$div.attr("id")+"'>"+type+"</label>");
			var $lbl =$labelDiv.children('#lbl'+$div.attr("id"));
			$lbl.addClass("sapMeOverlapCalendarTypeLbl sapMLabel");
			var dayWidth = (100 / (this.getCalendar().getWeeksPerRow() * 7));
			var width = (nbOfDays * dayWidth);
			$lbl.width( width+"%");
			var offset = (nbOfDaysOffset * dayWidth);
			var m = (nbOfDaysOffset == 0 ) ? 1 : .5;
			var leftOffset = offset+"%";
			$lbl.css("left",leftOffset);
			$lbl.css("padding-left",m+"rem");
		}
		
	};
};

sap.me.OverlapCalendar.prototype._parseCalendarEvent = function( i, oCalendarEvent ){
	var row = oCalendarEvent.getRow();
	if( row != -1 ){
		if( oCalendarEvent.getName() != undefined){
			if( this._aRows[row] == undefined && oCalendarEvent.getName() != ""){
				this._aRows[row] = oCalendarEvent.getName();
			}
		}else{
			// TODO : Log error
		};
	}else{
		// TODO : Log error
	};
};

sap.me.OverlapCalendar.prototype._getLabelForRow = function( index ){
	return this._getLabel( this._aRows[index],"nameLabels").addStyleClass("sapMeOverlapCalendarNameLbl");
};

sap.me.OverlapCalendar.prototype._getLabel = function( sText, sAggregationName ){
	var l = new sap.m.Label({text:sText});
	this.addAggregation(sAggregationName,l,true);
	return l;
};
