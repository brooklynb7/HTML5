/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.MakitLib");jQuery.sap.require("sap.makit.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.makit.MakitLib",{metadata:{library:"sap.makit"}});
/*!
 * @copyright@
 */
jQuery.sap.declare("sap.makit.js.MakitLib");jQuery.sap.require("sap.makit.js.SybaseMA");jQuery.sap.declare("sap.makit.js.SybaseMA");jQuery.sap.require("sap.makit.localization.jQueryGlobalization");jQuery.sap.require("sap.makit.localization.jQueryCoreLang");
sap.makit.MakitLib._onThemeChanged=function(e){window.$MA.Chart.getStyles()};
sap.makit.MakitLib._libraryInit=function(){var r=sap.ui.getCore().getLibraryResourceBundle("sap.makit");var c=sap.ui.getCore().getConfiguration().getLanguage();window.$MA.GlobalizedResource={};window.$MA.GlobalizedResource[c]={"Others":r.getText("CHART_OTHERS"),"Total":r.getText("CHART_TOTAL")};window.$MA.setLocale(c);var i="popup_tt_left.png";var p=sap.ui.resource("sap.makit","themes/base/images/"+i);p=p.substring(0,p.length-i.length);window.$MA.setImagesFolder(p);sap.ui.getCore().attachThemeChanged(sap.makit.MakitLib._onThemeChanged);window.$MA.Chart.getStyles();if(jQuery.sap.log.getLogger().getLevel()==jQuery.sap.log.Level.TRACE){window.$MA.setTrace(3)}}();
