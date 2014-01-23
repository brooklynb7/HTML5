/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.InboxPrimaryFilters");jQuery.sap.require("sap.uiext.inbox.InboxUtils");jQuery.sap.require("sap.uiext.inbox.InboxPrimaryFilters");jQuery.sap.require("sap.uiext.inbox.InboxPrimaryFilterEnum");sap.ui.base.Object.extend("sap.uiext.inbox.InboxPrimaryFilters",{constructor:function(){sap.ui.base.Object.apply(this);this.oFilter=undefined;this.inboxUtils=sap.uiext.inbox.InboxUtils;this.oPrimaryFilterEnum=sap.uiext.inbox.InboxPrimaryFilterEnum}});
sap.uiext.inbox.InboxPrimaryFilters.prototype.setFilter=function(f){if(f&&f.hasOwnProperty('key')&&f.hasOwnProperty('value')){this.oFilter=f}};
sap.uiext.inbox.InboxPrimaryFilters.prototype.getFilter=function(){return this.oFilter};
