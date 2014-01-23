/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.makit.MakitLib.
jQuery.sap.declare("sap.makit.MakitLib");
jQuery.sap.require("sap.makit.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new MakitLib.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Wrapper for MAKit Chart Library. Only to be used used internally.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.makit.MakitLib
 */
sap.ui.core.Element.extend("sap.makit.MakitLib", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.makit"
}});


/**
 * Creates a new subclass of class sap.makit.MakitLib with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.makit.MakitLib.extend
 * @function
 */


// Start of sap/makit/MakitLib.js
/*!
 * @copyright@
 */
jQuery.sap.declare("sap.makit.js.MakitLib");
jQuery.sap.require("sap.makit.js.SybaseMA");
jQuery.sap.declare("sap.makit.js.SybaseMA");

jQuery.sap.require("sap.makit.localization.jQueryGlobalization");
jQuery.sap.require("sap.makit.localization.jQueryCoreLang");

/*
 * Static function to handle theme change event.
 * We only need to do getStyles once because it is applied globally
 * 
 * @private
 * */
sap.makit.MakitLib._onThemeChanged = function (oEvent){
	window.$MA.Chart.getStyles();
};

//Static init function to prepare the Makit library
// Immediately executed when this library is loaded
sap.makit.MakitLib._libraryInit = function () {
	var oRB = sap.ui.getCore().getLibraryResourceBundle("sap.makit");
	var sCurrentLocale = sap.ui.getCore().getConfiguration().getLanguage();
	window.$MA.GlobalizedResource = {};
	window.$MA.GlobalizedResource[sCurrentLocale] = {
		"Others": oRB.getText("CHART_OTHERS"),
		"Total": oRB.getText("CHART_TOTAL")
	}
	
	window.$MA.setLocale(sCurrentLocale);
	//Set the images folder
	var imgName = "popup_tt_left.png"; // Use one the image's filename from chart range selector
	var path = sap.ui.resource("sap.makit", "themes/base/images/"+imgName); //Get the correct resource path
	path = path.substring(0, path.length - imgName.length); //We don't need the filename.
	window.$MA.setImagesFolder(path);
	sap.ui.getCore().attachThemeChanged(sap.makit.MakitLib._onThemeChanged);
	window.$MA.Chart.getStyles(); //Ideally we should call this function whenever styles has changed
	if(jQuery.sap.log.getLogger().getLevel() == jQuery.sap.log.Level.TRACE) {
		window.$MA.setTrace(3); //Ideally we should call this function whenever styles has changed 
	}
}();