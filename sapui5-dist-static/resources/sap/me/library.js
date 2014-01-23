/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.me.library");jQuery.sap.require("sap.ui.core.Core");jQuery.sap.require("sap.ui.core.library");sap.ui.getCore().initLibrary({name:"sap.me",dependencies:["sap.ui.core"],types:["sap.me.CalendarDesign","sap.me.CalendarEventType"],interfaces:[],controls:["sap.me.Calendar","sap.me.CalendarLegend","sap.me.OverlapCalendar","sap.me.ProgressIndicator","sap.me.TabContainer"],elements:["sap.me.OverlapCalendarEvent"],version:"1.16.4"});jQuery.sap.declare("sap.me.CalendarDesign");sap.me.CalendarDesign={Action:"Action",Approval:"Approval"};jQuery.sap.declare("sap.me.CalendarEventType");sap.me.CalendarEventType={Type00:"Type00",Type01:"Type01",Type04:"Type04",Type06:"Type06",Type07:"Type07"};
