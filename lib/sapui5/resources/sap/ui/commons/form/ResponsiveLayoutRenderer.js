/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.ui.commons.form.FormLayoutRenderer");jQuery.sap.declare("sap.ui.commons.form.ResponsiveLayoutRenderer");sap.ui.commons.form.ResponsiveLayoutRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.form.FormLayoutRenderer);
sap.ui.commons.form.ResponsiveLayoutRenderer.getMainClass=function(){return"sapUiFormResLayout"};
sap.ui.commons.form.ResponsiveLayoutRenderer.renderContainers=function(r,l,f){var c=f.getFormContainers();var L=c.length;if(L>1){r.renderControl(l._mainRFLayout)}else if(l.mContainers[c[0].getId()][0]){r.renderControl(l.mContainers[c[0].getId()][0])}else{r.renderControl(l.mContainers[c[0].getId()][1])}};
