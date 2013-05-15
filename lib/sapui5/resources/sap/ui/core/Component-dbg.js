/*
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides base class sap.ui.core.Component for all components
jQuery.sap.declare("sap.ui.core.Component");
jQuery.sap.require("sap.ui.base.ManagedObject");
jQuery.sap.require("sap.ui.core.ComponentMetadata");

/**
 * Creates and initializes a new component with the given <code>sId</code> and
 * settings.
 * 
 * The set of allowed entries in the <code>mSettings</code> object depends on
 * the concrete subclass and is described there. See {@link sap.ui.core.Component}
 * for a general description of this argument.
 * 
 * @param {string}
 *            [sId] optional id for the new control; generated automatically if
 *            no non-empty id is given Note: this can be omitted, no matter
 *            whether <code>mSettings</code> will be given or not!
 * @param {object}
 *            [mSettings] optional map/JSON-object with initial settings for the
 *            new component instance
 * @public
 * 
 * @class Base Class for Component.
 * @extends sap.ui.base.ManagedObject
 * @abstract
 * @author SAP
 * @version 1.10.0
 * @name sap.ui.core.Component
 * @experimental Since 1.9.2. The Component concept is still under construction, so some implementation details can be changed in future.
 */
sap.ui.base.ManagedObject.extend("sap.ui.core.Component", /** @lends sap.ui.core.Component */

{
	constructor : function(sId, mSettings) {

		sap.ui.base.ManagedObject.apply(this, arguments);

	},

	metadata : {
		version : "1.0",
		dependencies : {
			css : [],
			js : [],
			libs : [], //data-sap-ui-libs
			components : [], // to load in order to be able to use them. not over url, but name /relative to my comp
			ui5version : "1.8",
			modules : []
		},

		"abstract" : true,
		publicMethods : [ "wire", "setUIArea" ],
		library : "sap.ui.core",
		autoDestroy : false, // destroy component when view
		// should be destroyed
		initOnBeforeRender : true
	}

}, /* Metadata constructor */ sap.ui.core.ComponentMetadata);

jQuery.sap.require("sap.ui.core.Core");

/**
 * Initializes the Component instance after creation.
 *
 * Applications must not call this hook method directly, it is called by the
 * framework while the constructor of an Component is executed.
 *
 * Subclasses of Component should override this hook to implement any necessary
 * initialization.
 *
 * @function
 * @name sap.ui.core.Component.prototype.init
 * @protected
 */
sap.ui.core.Component.prototype.init = function() {
	this.loadDependencies();
	var that = this;
	sap.ui.base.ManagedObject.runWithPreprocessors(
		function() {
			that.oRootControl = that.getControl();
		},
		{
			id: function(sId) {
				return that.createId(sId);
			},
			settings: function(oSettings) {
				if (oSettings.component) {
					oSettings.component = that.createId(oSettings.component);
				}
				return oSettings;
			}
		}
	);
};


/**
 * returns an Element by its id in the context of the View
 *
 * @return Element by its id
 * @public
 */
sap.ui.core.Component.prototype.byId = function(sId) {
	return sap.ui.getCore().byId(this.createId(sId));
};

/**
 * creates an id for an Element prefixed with the view id
 *
 * @return prefixed id
 * @public
 */
sap.ui.core.Component.prototype.createId = function(sId) {
	return this.getId() + "--" + sId;
};


sap.ui.core.Component.prototype.loadDependencies = function() {

	var oDep = this.getMetadata().getDependencies();
	if (oDep){
		this.loadLibs(oDep);
		this.loadCss(oDep);
		this.loadComponents(oDep);
	}
};


sap.ui.core.Component.prototype.loadLibs = function (oDependencies) {
	var aLibs = oDependencies.libs;
	if (aLibs && aLibs.length > 0) {
		jQuery.each(aLibs, function(i, sLib) {
			jQuery.sap.log.info("Loading Library: " + sLib);
			sap.ui.getCore().loadLibrary(sLib);
		});
	}
};

sap.ui.core.Component.prototype.loadCss = function (oDependencies) {
	var aUrls = oDependencies.css;
	if (aUrls && aUrls.length > 0) {
		var sLibName = this.getMetadata().getLibraryName();
		jQuery.each(aUrls, function(i, sUrl) {
			var sCssUrl = sap.ui.resource(sLibName, sUrl);
			jQuery.sap.log.info("Loading CSS from: " + sCssUrl);
			jQuery.sap.includeStyleSheet(sCssUrl);
		});
	}
};

// Load child Components
sap.ui.core.Component.prototype.loadComponents = function (oDependencies) {
		var aComps = oDependencies.components;
		if (aComps){
			jQuery.each(aComps, function(i, sClassName){
				jQuery.sap.log.info(sClassName);
				jQuery.sap.require(sClassName);
		});
	}
};
/**
 * Cleans up the component instance before destruction.
 *
 * Applications must not call this hook method directly, it is called by the
 * framework when the element is {@link #destroy destroyed}.
 * 
 * Subclasses of Component should override this hook to implement any necessary
 * cleanup.
 *
 * @function
 * @name sap.ui.core.Component.prototype.exit
 * @protected
 */
sap.ui.core.Component.prototype.exit = function() {
};


/**
 * Set UI area
 */
sap.ui.core.Component.prototype.setUIArea = function(oUIArea) {
	oUIArea.setRootControl(this.oRootControl);
};

