/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.DatePicker.
jQuery.sap.declare("sap.ca.ui.DatePicker");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.m.InputBase");


/**
 * Constructor for a new DatePicker.
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
 * <li>{@link #getFirstDayOffset firstDayOffset} : int (default: 0)</li>
 * <li>{@link #getDateValue dateValue} : string</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.InputBase#constructor sap.m.InputBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Allows end users to interact with dates.
 * Entries can directly be written in, or selected from a calendar pad.
 * @extends sap.m.InputBase
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.DatePicker
 */
sap.m.InputBase.extend("sap.ca.ui.DatePicker", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getDate"
	],

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"firstDayOffset" : {type : "int", group : "Data", defaultValue : 0},
		"dateValue" : {type : "string", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.DatePicker with name <code>sClassName</code> 
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
 * @name sap.ca.ui.DatePicker.extend
 * @function
 */


/**
 * Getter for property <code>firstDayOffset</code>.
 * This property is used to offset the first day of the week (0 = sunday). Returns int, default 0
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>firstDayOffset</code>
 * @public
 * @name sap.ca.ui.DatePicker#getFirstDayOffset
 * @function
 */

/**
 * Setter for property <code>firstDayOffset</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iFirstDayOffset  new value for property <code>firstDayOffset</code>
 * @return {sap.ca.ui.DatePicker} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.DatePicker#setFirstDayOffset
 * @function
 */


/**
 * Getter for property <code>dateValue</code>.
 * This is a date string formatted as per the format for the control. If there is no valid input for the control, this value will be null.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>dateValue</code>
 * @public
 * @name sap.ca.ui.DatePicker#getDateValue
 * @function
 */

/**
 * Setter for property <code>dateValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDateValue  new value for property <code>dateValue</code>
 * @return {sap.ca.ui.DatePicker} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.DatePicker#setDateValue
 * @function
 */


/**
 * returns selected date as a Date object
 *
 * @name sap.ca.ui.DatePicker.prototype.getDate
 * @function

 * @type object
 * @public
 */


// Start of sap\ca\ui\DatePicker.js
///**
// * This file defines behavior for the control,
// */

jQuery.sap.require("sap.me.Calendar");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
jQuery.sap.require("sap.ca.ui.model.type.Date");

sap.ca.ui.DatePicker.prototype.init = function() {
    if (sap.m.InputBase.prototype.init) {
        sap.m.InputBase.prototype.init.apply(this, arguments);
    }
    
    this.dateObj = null;
		
    // initialize the calendar
    this._oCalendar = new sap.me.Calendar({
        firstDayOffset : this.getFirstDayOffset(),
        tapOnDate : jQuery.proxy(function(oEvent) 
        {
        	if (!this._dateType)
        	{
        	    this._setUpDateType();
        	}
        
        	var dateTapped = oEvent.getParameters().date;
        	this.dateObj = new Date(dateTapped);
        	var tempString = this._dateType.formatValue(dateTapped, "string");
        	this.setDateValue(tempString);
        
            this.setValue(tempString);
            this.fireChange(false);
            this._closeCalendar();
        }, this)
    });
    
    this._oCalendar.setEnableMultiselection(false);


    //Cancel button 
    this._datePickerCancelBtn = new sap.m.Button({
        text : sap.ca.ui.utils.resourcebundle.getText("dialog.cancel"),
        width : "100%",
        press : jQuery.proxy(function() {
            this._closeCalendar();
        }, this)
    });

    if (jQuery.device.is.phone ) {
        //       initialize the Dialog for phone & Tablet
        this._oDatePickerDialogMobile = new sap.m.Dialog({
            title : sap.ca.ui.utils.resourcebundle.getText("datepicker.title"),
            leftButton : this._datePickerCancelBtn,
            stretchOnPhone : true,
            content : [ this._oCalendar ]
        });
    } else {
        //        initialize the Popover for desktop    
        this._oDatePickerPopoverDesktop = new sap.m.ResponsivePopover({
            title : sap.ca.ui.utils.resourcebundle.getText("datepicker.title"),
            placement : sap.m.PlacementType.Auto,
            enableScrolling : false,
            contentWidth: "20rem",
            contentHeight: "390px",
            content : [ this._oCalendar ]
        });
        
    }

};


sap.ca.ui.DatePicker.prototype._setUpDateType = function ()
{
	var needsDateType = true;

    var oBindingInfo = this.getBindingInfo("value");
    if (oBindingInfo) 
    {
        var oBindingType = oBindingInfo.type;
        	
        if (oBindingType && (oBindingType instanceof sap.ca.ui.model.type.Date))
        {
        	this._dateType = oBindingType;
        	
        	needsDateType = false;
        }
    }

	if (needsDateType)
	{
		this._dateType = new sap.ca.ui.model.type.Date();
	}

};



sap.ca.ui.DatePicker.prototype.setFirstDayOffset = function(iFirstDayOffset){
	this._oCalendar.setProperty("firstDayOffset", iFirstDayOffset, true); 
	this.setProperty("firstDayOffset", iFirstDayOffset);
};


sap.ca.ui.DatePicker.prototype.fireChange = function(bUpdateDateObj) 
{
	if (!this._dateType)
	{
	    this._setUpDateType();
	}
	
	var currentInput = this.getValue();
	
	var tempDate = this._validateDate(currentInput);
	
	if(bUpdateDateObj || bUpdateDateObj===undefined){
	this.dateObj = tempDate;
	}

	this.setDateValue(tempDate);
	
	var dateYYYYMMDD = null;

	if (tempDate)
	{
		dateYYYYMMDD = this._toDateStringYYYYMMDD(tempDate);
	}

	this.fireEvent("change", {newValue:currentInput,
							  newYyyymmdd:dateYYYYMMDD,
							  invalidValue: tempDate ? false : true});
	return this;
};		    
		    
		    

sap.ca.ui.DatePicker.prototype.exit = function() {
    if (sap.m.InputBase.prototype.exit) {
        sap.m.InputBase.prototype.exit.apply(this);
    }
    if (this._oDatePickerPopoverDesktop) {
        this._oDatePickerPopoverDesktop.destroy();
    }
    if (this._oDatePickerDialogMobile) {
        this._oDatePickerDialogMobile.destroy();
    }
    if(this._datePickerCancelBtn){
    this._datePickerCancelBtn.destroy();
    }
    
    if(this._oCalendarIcon){
    this._oCalendarIcon.destroy();
    }
    
};

sap.ca.ui.DatePicker.prototype._closeCalendar = function() {
    if (jQuery.device.is.phone ) {
        this._oDatePickerDialogMobile.close();
    } else {
        this._oDatePickerPopoverDesktop.close();
    }
};

sap.ca.ui.DatePicker.prototype._getCalendarIcon = function() {
    if (!this._oCalendarIcon) {
        var u = sap.ui.core.IconPool.getIconURI("appointment-2");
        this._oCalendarIcon = sap.ui.core.IconPool.createControlByURI({
            id : this.getId() + "__ci",
            src : u,
            press : jQuery.proxy(this._calendarIconPress, this)
        });
        this._oCalendarIcon.addStyleClass("sapCaUiDatePickerCalendarIcon");

    }
    return this._oCalendarIcon;
};

sap.ca.ui.DatePicker.prototype._calendarIconPress = function() 
{
	if (this.getEditable())
	{
		if (!this._dateType)
		{
		    this._setUpDateType();
		}
	
		var currentInput = this.getValue();
	
		var tempDate = this._validateDate(currentInput);
		this.setProperty("dateValue", tempDate, true);
	
		if (tempDate && !this.dateObj)
			this.dateObj = tempDate;
		if (tempDate)
		{
	    	this._oCalendar.toggleDatesSelection(this._oCalendar.getSelectedDates(),false);
	    	this._oCalendar.setCurrentDate(this.dateObj);
	    	this._oCalendar.toggleDatesSelection([this.dateObj],true);
		}
	
	    if (jQuery.device.is.phone ) 
	    {
	        this._oDatePickerDialogMobile.open();
	    } 
	    else 
	    {
	        this._oDatePickerPopoverDesktop.openBy(this._oCalendarIcon);
	    }
    }

};


// Date Validation Routines

sap.ca.ui.DatePicker.prototype._validateDate = function(inputString)
{
	if (!inputString)
	{
		return inputString;
	}
	
	var tempString = null;
	
	try
	{
		tempString = this._dateType.parseValue(inputString, "string");
	}
	catch(err)
	{
	}
	
	return tempString;
};


sap.ca.ui.DatePicker.prototype._toDateStringYYYYMMDD = function(dateString)
{
	var tempDate = new Date(dateString);

	var yearComponent = "" + tempDate.getFullYear();
	
	var monthComponent = "" + (tempDate.getMonth() + 1);
	
	var dayComponent = "" + tempDate.getDate();
	
	while (yearComponent.length < 4)
	{
		yearComponent = "0" + yearComponent;
	}
	
	while (monthComponent.length < 2)
	{
		monthComponent = "0" + monthComponent;
	}
	
	while (dayComponent.length < 2)
	{
		dayComponent = "0" + dayComponent;
	}
	
	return yearComponent + monthComponent + dayComponent;
};


sap.ca.ui.DatePicker.prototype.getDate = function()
{
return this.dateObj;
};
