/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.me (1.16.4)
 */
jQuery.sap.declare("sap.me.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 library with controls specialized for mobile devices (extension).
 *
 * @namespace
 * @name sap.me
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.me",
  dependencies : ["sap.ui.core"],
  types: [
    "sap.me.CalendarDesign",
    "sap.me.CalendarEventType"
  ],
  interfaces: [],
  controls: [
    "sap.me.Calendar",
    "sap.me.CalendarLegend",
    "sap.me.OverlapCalendar",
    "sap.me.ProgressIndicator",
    "sap.me.TabContainer"
  ],
  elements: [
    "sap.me.OverlapCalendarEvent"
  ],
  version: "1.16.4"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.me.CalendarDesign.
jQuery.sap.declare("sap.me.CalendarDesign");


/**
 * @class Type of Design for the Calendar
 *
 * @version 1.16.4
 * @static
 * @public
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 */
sap.me.CalendarDesign = {
  
    /**
     * Colors match calendar design for Action 
     * @public
     */
    Action : "Action",

    /**
     * Colors match calendar design for Approval 
     * @public
     */
    Approval : "Approval"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.me.CalendarEventType.
jQuery.sap.declare("sap.me.CalendarEventType");


/**
 * @class Type code for a calendar event
 *
 * @version 1.16.4
 * @static
 * @public
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 */
sap.me.CalendarEventType = {
  
    /**
     * Type 00 (non-working day (e.g. weekend)) 
     * @public
     */
    Type00 : "Type00",

    /**
     * Type 01 (nonattendance / submitted day) 
     * @public
     */
    Type01 : "Type01",

    /**
     * Type 04 (open request / manager action needed) 
     * @public
     */
    Type04 : "Type04",

    /**
     * Type 06 (public holiday) 
     * @public
     */
    Type06 : "Type06",

    /**
     * Type 07 (deletion requested / your action needed) 
     * @public
     */
    Type07 : "Type07"

  };
