/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.collaboration (1.16.4)
 */
jQuery.sap.declare("sap.collaboration.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAP UI library: sap.collaboration (by SAP, Author)
 *
 * @namespace
 * @name sap.collaboration
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.collaboration",
  dependencies : ["sap.ui.core"],
  types: [
    "sap.collaboration.AppType",
    "sap.collaboration.FeedType"
  ],
  interfaces: [],
  controls: [],
  elements: [],
  noLibraryCSS: true,
  version: "1.16.4"});

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.collaboration.AppType.
jQuery.sap.declare("sap.collaboration.AppType");


/**
 * @class Application Type (Mode)
 *
 * @version 1.16.4
 * @static
 * @public
 */
sap.collaboration.AppType = {
  
    /**
     * Fiori Split App 
     * @public
     */
    split : "split",

    /**
     * SAP Jam Feed Widget Wrapper 
     * @public
     */
    widget : "widget"

  };
/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.collaboration.FeedType.
jQuery.sap.declare("sap.collaboration.FeedType");


/**
 * @class Feed Types
 *
 * @version 1.16.4
 * @static
 * @public
 */
sap.collaboration.FeedType = {
  
    /**
     * Follows feed type 
     * @public
     */
    follows : "follows",

    /**
     * Company feed type 
     * @public
     */
    company : "company",

    /**
     * Group feed type 
     * @public
     */
    group : "group",

    /**
     * Object group feed type 
     * @public
     */
    objectGroup : "objectGroup",

    /**
     * Oject feed type 
     * @public
     */
    object : "object"

  };
