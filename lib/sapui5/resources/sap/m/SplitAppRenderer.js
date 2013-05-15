/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.SplitAppRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.m.SplitAppRenderer={};
sap.m.SplitAppRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapMSplitApp");if(jQuery.device.is.tablet){if(!c._oldIsLandscape){r.addClass("sapMSplitAppPortrait")}switch(c.getMode()){case"ShowHideMode":r.addClass("sapMSplitAppShowHide");break;case"StretchCompress":r.addClass("sapMSplitAppStretchCompress");break;case"PopoverMode":r.addClass("sapMSplitAppPopover");break}}r.writeClasses();r.write(">");if(jQuery.device.is.tablet){if(c.getMode()==="PopoverMode"&&!c._oldIsLandscape){c._oDetailNav.addStyleClass("sapMSplitAppDetail");r.renderControl(c._oDetailNav)}else{c._oMasterNav.addStyleClass("sapMSplitAppMaster");r.renderControl(c._oMasterNav);c._oDetailNav.addStyleClass("sapMSplitAppDetail");r.renderControl(c._oDetailNav)}}else{c._oMasterNav.addStyleClass("sapMSplitAppMobile");r.renderControl(c._oMasterNav)}r.write("</div>")};
