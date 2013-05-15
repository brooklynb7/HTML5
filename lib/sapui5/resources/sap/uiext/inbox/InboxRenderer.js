/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.InboxRenderer");sap.uiext.inbox.InboxRenderer={};
sap.uiext.inbox.InboxRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.writeAttribute("class","sapUiExtInbox");r.write(">");r.renderControl(c.vLayout);r.write("</div>")};
