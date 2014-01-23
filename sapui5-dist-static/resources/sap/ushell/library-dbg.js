/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.ushell (1.16.4)
 */
jQuery.sap.declare("sap.ushell.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAP library: sap.ushell
 *
 * @namespace
 * @name sap.ushell
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.layout.library");
jQuery.sap.require("sap.m.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ushell",
  dependencies : ["sap.ui.core","sap.ui.layout","sap.m"],
  types: [
    "sap.ushell.ui.launchpad.DeleteAreaType",
    "sap.ushell.ui.tile.State",
    "sap.ushell.ui.tile.StateArrow"
  ],
  interfaces: [],
  controls: [
    "sap.ushell.ui.footerbar.AboutButton",
    "sap.ushell.ui.footerbar.AddBookmarkButton",
    "sap.ushell.ui.footerbar.JamDiscussButton",
    "sap.ushell.ui.footerbar.JamShareButton",
    "sap.ushell.ui.footerbar.LoginDetailsButton",
    "sap.ushell.ui.footerbar.LogoutButton",
    "sap.ushell.ui.footerbar.SettingsButton",
    "sap.ushell.ui.launchpad.CatalogListItem",
    "sap.ushell.ui.launchpad.DashboardGroupsContainer",
    "sap.ushell.ui.launchpad.DeleteArea",
    "sap.ushell.ui.launchpad.GroupListItem",
    "sap.ushell.ui.launchpad.HeaderTile",
    "sap.ushell.ui.launchpad.LoadingDialog",
    "sap.ushell.ui.launchpad.Panel",
    "sap.ushell.ui.launchpad.PlusTile",
    "sap.ushell.ui.launchpad.SearchResultAppItem",
    "sap.ushell.ui.launchpad.SearchResultApps",
    "sap.ushell.ui.launchpad.SearchSuggestionList",
    "sap.ushell.ui.launchpad.SearchSuggestionListItem",
    "sap.ushell.ui.launchpad.Tile",
    "sap.ushell.ui.launchpad.TileContainer",
    "sap.ushell.ui.tile.DynamicTile",
    "sap.ushell.ui.tile.ImageTile",
    "sap.ushell.ui.tile.StaticTile",
    "sap.ushell.ui.tile.TileBase"
  ],
  elements: [],
  version: "1.16.4"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ushell.ui.launchpad.DeleteAreaType.
jQuery.sap.declare("sap.ushell.ui.launchpad.DeleteAreaType");


/**
 * @class ...
 * @private
 *
 * @version 1.16.4
 * @static
 * @public
 */
sap.ushell.ui.launchpad.DeleteAreaType = {
  
    /**
     * ... 
     * @public
     */
    Dashboard : "Dashboard",

    /**
     * ... 
     * @public
     */
    GroupList : "GroupList"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ushell.ui.tile.State.
jQuery.sap.declare("sap.ushell.ui.tile.State");


/**
 * @class Denotes states for control parts and translates into standard SAP color codes
 *
 * @version 1.16.4
 * @static
 * @public
 */
sap.ushell.ui.tile.State = {
  
    /**
     * Alias for "None" 
     * @public
     */
    Neutral : "Neutral",

    /**
     * Indicates a state that is neutral, e.g. for standard display (Grey color) 
     * @public
     */
    None : "None",

    /**
     * Alias for "Error" 
     * @public
     */
    Negative : "Negative",

    /**
     * Indicates a state that is negative, e.g. marking an element that has to get attention urgently or indicates negative values (Red color) 
     * @public
     */
    Error : "Error",

    /**
     * Alias for "Success" 
     * @public
     */
    Positive : "Positive",

    /**
     * Indicates a state that is positive, e.g. marking a task successfully executed or a state where all is good (Green color) 
     * @public
     */
    Success : "Success",

    /**
     * Alias for "Warning" 
     * @public
     */
    Critical : "Critical",

    /**
     * Indicates a state that is critical, e.g. marking an element that needs attention (Orange color) 
     * @public
     */
    Warning : "Warning"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ushell.ui.tile.StateArrow.
jQuery.sap.declare("sap.ushell.ui.tile.StateArrow");


/**
 * @class The state of an arrow as trend direction indicator, pointing either up or down
 * @private
 *
 * @version 1.16.4
 * @static
 * @public
 */
sap.ushell.ui.tile.StateArrow = {
  
    /**
     * The trend direction indicator is invisible 
     * @public
     */
    None : "None",

    /**
     * The trend direction indicator points up 
     * @public
     */
    Up : "Up",

    /**
     * The trend direction indicator points down 
     * @public
     */
    Down : "Down"

  };

// -----------------------------------------------------------------------------
// Begin of Library Initialization coding, copied from shared.js
// -----------------------------------------------------------------------------

// shared.js is automatically appended to library.js
//
// hiding (generated) types that are marked as @public by default
/**
 * @name sap.ushell.ui.tile.StateArrow
 * @private
 */
/**
 * @name sap.ushell.ui.tile.State
 * @private
 */
/**
 * @name sap.ushell.ui.launchpad.DeleteAreaType
 * @private
 */