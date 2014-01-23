/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ushell.ui.footerbar.LogoutButton");jQuery.sap.require("sap.ushell.library");jQuery.sap.require("sap.m.Button");sap.m.Button.extend("sap.ushell.ui.footerbar.LogoutButton",{metadata:{library:"sap.ushell"}});
// Copyright (c) 2013 SAP AG, All Rights Reserved
(function(){"use strict";jQuery.sap.declare("sap.ushell.ui.footerbar.LogoutButton");jQuery.sap.require("sap.ushell.resources");sap.ushell.ui.footerbar.LogoutButton.prototype.init=function(){this.setIcon('sap-icon://log');this.setTooltip(sap.ushell.resources.i18n.getText("logoutBtn_tooltip"));this.setWidth('100%');this.setText(sap.ushell.resources.i18n.getText("logoutBtn_tooltip"));this.attachPress(this.logout);this.setEnabled(!!sap.ushell.Container)};sap.ushell.ui.footerbar.LogoutButton.prototype.logout=function(){new sap.ushell.ui.launchpad.LoadingDialog({text:""}).openLoadingScreen();sap.ushell.Container.logout()}}());
