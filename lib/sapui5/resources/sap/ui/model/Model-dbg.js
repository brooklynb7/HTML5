/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides the base implementation for all model implementations
jQuery.sap.declare("sap.ui.model.Model");
jQuery.sap.require("sap.ui.base.EventProvider");
jQuery.sap.require("sap.ui.model.BindingMode");
jQuery.sap.require("sap.ui.model.Context");

/**
 * The SAPUI5 Data Binding API.
 *
 * The default binding mode for model implementations (if not implemented otherwise) is two way and the supported binding modes by the model
 * are one way, two way and one time. The default binding mode can be changed by the application for each model instance.
 * A model implementation should specify its supported binding modes and set the default binding mode accordingly
 * (e.g. if the model supports only one way binding the default binding mode should also be set to one way).
 *
 * @namespace
 * @name sap.ui.model
 * @public
 */

/**
 * Constructor for a new Model.
 *
 * @class
 * This is an abstract base class for model objects.
 * @abstract
 *
 * @extends sap.ui.base.Object
 *
 * @author SAP AG
 * @version 1.10.0
 *
 * @constructor
 * @public
 * @name sap.ui.model.Model
 */
sap.ui.base.EventProvider.extend("sap.ui.model.Model", /** @lends sap.ui.model.Model */ {
	
	constructor : function () {
		sap.ui.base.EventProvider.apply(this, arguments);
	
		this.oData = {};
		this.aBindings = [];
		this.mContexts = {};
		this.iSizeLimit = 100;
		this.sDefaultBindingMode = sap.ui.model.BindingMode.TwoWay;
		this.mSupportedBindingModes = {"OneWay": true, "TwoWay": true, "OneTime": true};
		this.bLegacySyntax = false;
	},

	metadata : {

		"abstract" : true,
		publicMethods : [
			// methods
			"bindProperty", "bindList", "bindTree", "createBindingContext", "destroyBindingContext", "getProperty",
			"getDefaultBindingMode", "setDefaultBindingMode", "isBindingModeSupported", "attachParseError", "detachParseError",
			"attachRequestCompleted", "detachRequestCompleted", "attachRequestFailed", "detachRequestFailed", "attachRequestSent",
			"detachRequestSent", "setSizeLimit"
	  ]
	
	  /* the following would save code, but requires the new ManagedObject (1.9.1) 
	  , events : {
	  	"parseError" : {},
	  	"requestFailed" : {},
	  	"requestSent" : {},
	  	"requestCompleted" ; {} 
	  }
	  */
	
	}

});

/**
 * Creates a new subclass of class sap.ui.model.Model with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.model.Model.extend
 * @function
 */


/**
 * Map of event names, that are provided by the model.
 */
sap.ui.model.Model.M_EVENTS = {
	/**
	 * Depending on the model implementation a ParseError should be fired if a parse error occurred.
	 * Contains the parameters:
	 * errorCode, url, reason, srcText, line, linepos, filepos
	 */
	ParseError : "parseError",

	/**
	 * Depending on the model implementation a RequestFailed should be fired if a request to a backend failed.
	 * Contains the parameters:
	 * message, statusCode, statusText and responseText
	 */
	RequestFailed : "requestFailed",

	/**
	 * Depending on the model implementation a RequestSent should be fired when a request to a backend is sent.
	 * Contains Parameters: url, type, async, info
	 */
	RequestSent : "requestSent",

	/**
	 * Depending on the model implementation a RequestCompleted should be fired when a request to a backend is completed regardless if the request failed or succeeded.
	 * Contains Parameters: url, type, async, info
	 */
	RequestCompleted : "requestCompleted"
};

/**
 * The 'requestFailed' event is fired, when data retrieval from a backend failed.
 *
 * @name sap.ui.model.Model#requestFailed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.message A text that describes the failure.
 * @param {string} oControlEvent.getParameters.statusCode HTTP status code returned by the request (if available)
 * @param {string} oControlEvent.getParameters.statusText The status as a text, details not specified, intended only for diagnosis output
 * @param {string} oControlEvent.getParameters.responseText Response that has been received for the request ,as a text string
 * @public
 */

/**
 * Attach event-handler <code>fnFunction</code> to the 'requestFailed' event of this <code>sap.ui.model.Model</code>.<br/>
 *
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this Model is used.
 *
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.attachRequestFailed = function(oData, fnFunction, oListener) {
	this.attachEvent("requestFailed", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'requestFailed' event of this <code>sap.ui.model.Model</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.detachRequestFailed = function(fnFunction, oListener) {
	this.detachEvent("requestFailed", fnFunction, oListener);
	return this;
};

/**
 * Fire event requestFailed to attached listeners.
 *
 * Expects following event parameters:
 * <ul>
 * <li>'message' of type <code>string</code> A text that describes the failure.</li>
 * <li>'statusCode' of type <code>string</code> HTTP status code returned by the request (if available)</li>
 * <li>'statusText' of type <code>string</code> The status as a text, details not specified, intended only for diagnosis output</li>
 * <li>'responseText' of type <code>string</code> Response that has been received for the request ,as a text string</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.model.Model.prototype.fireRequestFailed = function(mArguments) {
	this.fireEvent("requestFailed", mArguments);
	return this;
};


/**
 * The 'parseError' event is fired when parsing of a model document (e.g. XML response) fails.
 *
 * @name sap.ui.model.Model#parseError
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.errorCode
 * @param {string} oControlEvent.getParameters.url
 * @param {string} oControlEvent.getParameters.reason
 * @param {string} oControlEvent.getParameters.srcText
 * @param {int} oControlEvent.getParameters.line
 * @param {int} oControlEvent.getParameters.linepos
 * @param {int} oControlEvent.getParameters.filepos
 * @public
 */

/**
 * Attach event-handler <code>fnFunction</code> to the 'parseError' event of this <code>sap.ui.model.Model</code>.<br/>
 *
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, the global context (window) is used.
 *
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.attachParseError = function(oData, fnFunction, oListener) {
	this.attachEvent("parseError", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'parseError' event of this <code>sap.ui.model.Model</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.detachParseError = function(fnFunction, oListener) {
	this.detachEvent("parseError", fnFunction, oListener);
	return this;
};

/**
 * Fire event parseError to attached listeners.
 *
 * Expects following event parameters:
 * <ul>
 * <li>'errorCode' of type <code>int</code> </li>
 * <li>'url' of type <code>string</code> </li>
 * <li>'reason' of type <code>string</code> </li>
 * <li>'srcText' of type <code>string</code> </li>
 * <li>'line' of type <code>int</code> </li>
 * <li>'linepos' of type <code>int</code> </li>
 * <li>'filepos' of type <code>int</code> </li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.model.Model.prototype.fireParseError = function(mArguments) {
	this.fireEvent("parseError", mArguments);
	return this;
};

/**
 * Attach event-handler <code>fnFunction</code> to the 'requestSent' event of this <code>sap.ui.model.Model</code>.<br/>
 *
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, the global context (window) is used.
 *
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.attachRequestSent = function(oData, fnFunction, oListener) {
	this.attachEvent("requestSent", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'requestSent' event of this <code>sap.ui.model.Model</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.detachRequestSent = function(fnFunction, oListener) {
	this.detachEvent("requestSent", fnFunction, oListener);
	return this;
};

/**
 * Fire event requestSent to attached listeners.
 *
 * Expects following event parameters:
 * <ul>
 * <li>'url' of type <code>string</code> The url which is sent to the backend.</li>
 * <li>'type' of type <code>string</code> The type of the request (if available)</li>
 * <li>'async' of type <code>boolean</code> If the request is synchronous or asynchronous (if available)</li>
 * <li>'info' of type <code>string</code> additional information for the request (if available)</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.model.Model.prototype.fireRequestSent = function(mArguments) {
	this.fireEvent("requestSent", mArguments);
	return this;
};

/**
 * Attach event-handler <code>fnFunction</code> to the 'requestCompleted' event of this <code>sap.ui.model.Model</code>.<br/>
 *
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, the global context (window) is used.
 *
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.attachRequestCompleted = function(oData, fnFunction, oListener) {
	this.attachEvent("requestCompleted", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'requestCompleted' event of this <code>sap.ui.model.Model</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.detachRequestCompleted = function(fnFunction, oListener) {
	this.detachEvent("requestCompleted", fnFunction, oListener);
	return this;
};

/**
 * Fire event requestCompleted to attached listeners.
 *
 * Expects following event parameters:
 * <ul>
 * <li>'url' of type <code>string</code> The url which was sent to the backend.</li>
 * <li>'type' of type <code>string</code> The type of the request (if available)</li>
 * <li>'async' of type <code>boolean</code> If the request was synchronous or asynchronous (if available)</li>
 * <li>'info' of type <code>string</code> additional information for the request (if available)</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.model.Model.prototype.fireRequestCompleted = function(mArguments) {
	this.fireEvent("requestCompleted", mArguments);
	return this;
};


// the 'abstract methods' to be implemented by child classes

/**
 * Implement in inheriting classes
 * @abstract
 *
 * @name sap.ui.model.Model.prototype.bindProperty
 * @function
 * @param {string}
 *         sPath the path pointing to the property that should be bound
 * @param {object}
 *         [oContext=null] the context object for this databinding (optional)
 * @param {object}
 *         [mParameters=null] additional model specific parameters (optional)
 * @return {sap.ui.model.PropertyBinding}
 *
 * @public
 */

/**
 * Implement in inheriting classes
 * @abstract
 *
 * @name sap.ui.model.Model.prototype.bindList
 * @function
 * @param {string}
 *         sPath the path pointing to the list / array that should be bound
 * @param {object}
 *         [oContext=null] the context object for this databinding (optional)
 * @param {sap.ui.model.Sorter}
 *         [oSorter=null] initial sort order (optional)
 * @param {array}
 *         [aFilters=null] predefined filter/s contained in an array (optional)
 * @param {object}
 *         [mParameters=null] additional model specific parameters (optional)
 * @return {sap.ui.model.ListBinding}

 * @public
 */

/**
 * Implement in inheriting classes
 * @abstract
 *
 * @name sap.ui.model.Model.prototype.bindTree
 * @function
 * @param {string}
 *         sPath the path pointing to the tree / array that should be bound
 * @param {object}
 *         [oContext=null] the context object for this databinding (optional)
 * @param {array}
 *         [aFilters=null] predefined filter/s contained in an array (optional)
 * @param {object}
 *         [mParameters=null] additional model specific parameters (optional)
 * @return {sap.ui.model.TreeBinding}

 * @public
 */

/**
 * Implement in inheriting classes
 * @abstract
 *
 * @name sap.ui.model.Model.prototype.createBindingContext
 * @function
 * @param {string}
 *         sPath the path to create the new context from
 * @param {object}
 *		   [oContext=null] the context which should be used to create the new binding context
 * @param {object}
 *		   [mParameters=null] the parameters used to create the new binding context
 * @param {function}
 *         fnCallBack the function which should be called after the binding context has been created

 * @public
 */

/**
 * Implement in inheriting classes
 * @abstract
 *
 * @name sap.ui.model.Model.prototype.destroyBindingContext
 * @function
 * @param {object}
 *         oContext to destroy

 * @public
 */

/**
 * Implement in inheriting classes
 * @abstract
 *
 * @name sap.ui.model.Model.prototype.getProperty
 * @function
 * @param {string}
 *         sPath the path to where to read the attribute value
 * @param {object}
 *		   [oContext=null] the context with which the path should be resolved
 * @public
 */

/**
 * Gets a binding context. If context already exists, return it from the map,
 * otherwise create one using the context constructor.
 *
 * @param {string} sPath the path
 */
sap.ui.model.Model.prototype.getContext = function(sPath) {
	var oContext = this.mContexts[sPath];
	if (!oContext) {
		 if (!jQuery.sap.startsWith(sPath, "/")) {
			 sPath = "/" + sPath;
		 }
		oContext = new sap.ui.model.Context(this, sPath);
		this.mContexts[sPath] = oContext;
	}
	return oContext;
};

/**
 * Resolve the path relative to the given context
 */
sap.ui.model.Model.prototype.resolve = function(sPath, oContext) {
	var bIsRelative = !jQuery.sap.startsWith(sPath, "/"),
		sResolvedPath = sPath,
		sContextPath;
	if (bIsRelative) {
		if (oContext) {
			sContextPath = oContext.getPath();
			sResolvedPath = sContextPath + (jQuery.sap.endsWith(sContextPath, "/") ? "" : "/") + sPath;
		}
		else {
			sResolvedPath = this.isLegacySyntax() ? "/" + sPath : "";
		}
	}
	if (jQuery.sap.endsWith(sResolvedPath, "/")) {
		sResolvedPath = sResolvedPath.substr(0, sResolvedPath.length - 1);
	}
	return sResolvedPath;
};

/**
 * Add a binding to this model
 *
 * @param {sap.ui.model.Binding} oBinding the binding to be added
 */
sap.ui.model.Model.prototype.addBinding = function(oBinding) {
	this.aBindings.push(oBinding);
};

/**
 * Remove a binding from the model
 *
 * @param {sap.ui.model.Binding} oBinding the binding to be removed
 */
sap.ui.model.Model.prototype.removeBinding = function(oBinding) {
	for (var i = 0; i < this.aBindings.length; i++) {
		if (this.aBindings[i] == oBinding) {
			this.aBindings.splice(i, 1);
			break;
		}
	}
};

/**
 * Get the default binding mode for the model
 *
 * @return {sap.ui.model.BindingMode} default binding mode of the model
 *
 * @public
 */
sap.ui.model.Model.prototype.getDefaultBindingMode = function() {
	return this.sDefaultBindingMode;
};

/**
 * Set the default binding mode for the model. If the default binding mode should be changed,
 * this method should be called directly after model instance creation and before any binding creation.
 * Otherwise it is not guaranteed that the existing bindings will be updated with the new binding mode.
 *
 * @param {sap.ui.model.BindingMode} sMode the default binding mode to set for the model
 *
 * @public
 */
sap.ui.model.Model.prototype.setDefaultBindingMode = function(sMode) {
	if (this.isBindingModeSupported(sMode)) {
		this.sDefaultBindingMode = sMode;
	}
	else {
		throw new Error("Binding mode " + sMode + " is not supported by this model.");
	}
};

/**
 * Check if the specified binding mode is supported by the model.
 *
 * @param {sap.ui.model.BindingMode} sMode the binding mode to check
 *
 * @public
 */
sap.ui.model.Model.prototype.isBindingModeSupported = function(sMode) {
	return (sMode in this.mSupportedBindingModes);
};

/**
 * Enables legacy path syntax handling
 * 
 * This defines, whether relative bindings, which do not have a defined
 * binding context, should be compatible to earlier releases which means
 * they are resolved relative to the root element or handled strict and
 * stay unresolved until a binding context is set
 *
 * @param {boolean} bCompatibleSyntax the path syntax to use
 *
 * @public
 */
sap.ui.model.Model.prototype.setLegacySyntax = function(bLegacySyntax) {
	this.bLegacySyntax = bLegacySyntax;
};

/**
 * Returns whether legacy path syntax is used
 *
 * @return {boolean} 
 * 
 * @public
 */
sap.ui.model.Model.prototype.isLegacySyntax = function() {
	return this.bLegacySyntax;
};

/**
 * Set the maximum number of entries which are used for for list bindings.
 * @param {int} collection size limit  
 * @public
 */
sap.ui.model.Model.prototype.setSizeLimit = function(iSizeLimit) {
	this.iSizeLimit = iSizeLimit;
};

sap.ui.model.Model.prototype.getInterface = function() {
	return this;
};

