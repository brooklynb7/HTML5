/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.ComponentContainerRenderer");sap.ui.core.ComponentContainerRenderer={};
sap.ui.core.ComponentContainerRenderer.render=function(r,c){var R=r;var b=sap.ui.getCore().getConfiguration().getRTL();R.addClass("sapUiComponentContainer");R.write("<div");R.writeControlData(c);R.write(">");R.write("<div id=\""+c.getId()+"-uiarea\">");R.write("</div></div>")};
