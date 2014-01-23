/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.composite.InboxComment");jQuery.sap.require("sap.uiext.inbox.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.uiext.inbox.composite.InboxComment",{metadata:{library:"sap.uiext.inbox",properties:{"sender":{type:"string",group:"Data",defaultValue:null},"timestamp":{type:"string",group:"Data",defaultValue:null},"thumbnailSrc":{type:"sap.ui.core.URI",group:"Data",defaultValue:null},"text":{type:"string",group:"Data",defaultValue:null}}}});
sap.uiext.inbox.composite.InboxComment.prototype.init=function(){this.rb=sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox")};
