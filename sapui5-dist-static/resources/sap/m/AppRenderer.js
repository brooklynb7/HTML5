/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.AppRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.NavContainerRenderer");sap.m.AppRenderer={};sap.m.AppRenderer=sap.ui.core.Renderer.extend(sap.m.NavContainerRenderer);
sap.m.AppRenderer.renderAttributes=function(r,c){sap.m.BackgroundHelper.addBackgroundColorStyles(r,c.getBackgroundColor(),c.getBackgroundImage())};
sap.m.AppRenderer.renderBeforeContent=function(r,c){sap.m.BackgroundHelper.renderBackgroundImageTag(r,c,"sapMAppBG",c.getBackgroundImage(),c.getBackgroundRepeat(),c.getBackgroundOpacity())};
