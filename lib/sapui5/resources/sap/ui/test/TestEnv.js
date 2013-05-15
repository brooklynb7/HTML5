/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.test.TestEnv");jQuery.sap.require("sap.ui.test.ControlTree");jQuery.sap.require("sap.ui.debug.Highlighter");
sap.ui.test.TestEnv=function(){};
sap.ui.test.TestEnv.prototype.startPlugin=function(c){this.oCoreOther=c;this.oCore=c;this.oCore.attachControlEvent(this.onControlEvent,this);this.oWindow=window;this.oControlTree=new sap.ui.test.ControlTree(this.oCore,window)};
sap.ui.test.TestEnv.prototype.stopPlugin=function(){this.oCore.detachControlEvent(this.onControlEvent,this);this.oCore=null};
sap.ui.test.TestEnv.prototype.onControlEvent=function(e){if(this.oCore.isLocked()){var b=e.getParameter("browserEvent");if(b.type=="click"){var E=b.srcControl;if(E){var s=new sap.ui.debug.Highlighter('sap-ui-testsuite-SelectionHighlighter');s.highlight(E.getDomRef());if(selectControl){selectControl(E.getId())}}}}};
(function(){var t=new sap.ui.test.TestEnv();sap.ui.getCore().registerPlugin(t)}());
