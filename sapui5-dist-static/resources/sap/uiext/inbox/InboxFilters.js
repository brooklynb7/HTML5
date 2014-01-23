/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.InboxFilters");jQuery.sap.require("sap.uiext.inbox.InboxUtils");jQuery.sap.require("sap.uiext.inbox.InboxSecondaryFilters");jQuery.sap.require("sap.uiext.inbox.InboxPrimaryFilters");sap.ui.base.Object.extend("sap.uiext.inbox.InboxFilters",{constructor:function(){sap.ui.base.Object.apply(this);this.oPrimaryFilter=undefined;this.oSecondaryFilter=undefined;this.inboxUtils=sap.uiext.inbox.InboxUtils}});
sap.uiext.inbox.InboxFilters.prototype.setPrimaryFilter=function(p){if(p instanceof sap.uiext.inbox.InboxPrimaryFilters){this.oPrimaryFilter=p}};
sap.uiext.inbox.InboxFilters.prototype.setSecondaryFilter=function(s){if(s instanceof sap.uiext.inbox.InboxSecondaryFilters||s instanceof sap.uiext.inbox.TaskInitialFilters){this.oSecondaryFilter=s}};
sap.uiext.inbox.InboxFilters.prototype.getPrimaryFilter=function(p){return this.oPrimaryFilter};
sap.uiext.inbox.InboxFilters.prototype.getSecondaryFilter=function(s){return this.oSecondaryFilter};
