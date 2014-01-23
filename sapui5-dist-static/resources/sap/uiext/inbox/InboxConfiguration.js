/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.InboxConfiguration");sap.ui.base.Object.extend("sap.uiext.inbox.InboxConfiguration",{constructor:function(){sap.ui.base.Object.apply(this);this.iSearchUsersMaxLimit=100}});
sap.uiext.inbox.InboxConfiguration.prototype.setSearchUsersMaxLimit=function(m){if(typeof m==="number"){this.iSearchUsersMaxLimit=m}};
sap.uiext.inbox.InboxFilters.prototype.getSearchUsersMaxLimit=function(){return this.iSearchUsersMaxLimit};
