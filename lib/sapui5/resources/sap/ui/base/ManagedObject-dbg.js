/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides the base class for all objects with managed properties and aggregations.
jQuery.sap.declare("sap.ui.base.ManagedObject");

jQuery.sap.require("jquery.sap.script");
jQuery.sap.require("jquery.sap.strings");
jQuery.sap.require("sap.ui.base.EventProvider");
jQuery.sap.require("sap.ui.base.DataType");
jQuery.sap.require("sap.ui.base.ManagedObjectMetadata");
jQuery.sap.require("sap.ui.model.Model");
jQuery.sap.require("sap.ui.model.Type");
jQuery.sap.require("sap.ui.model.CompositeBinding");

/**
 * Constructs and initializes a managed object with the given <code>sId</code> and settings.
 *
 * If the optional <code>mSettings</code> are given, they must be a simple object  
 * that defines values for properties, aggregations, associations or events keyed by their name.
 *
 * <b>Valid Names:</b>
 *
 * The property (key) names supported in the object literal are exactly the (case sensitive)
 * names documented in the JSDoc for the properties, aggregations, associations and events
 * of the managed object and its base classes. Note that for  0..n aggregations and associations this
 * usually is the plural name, whereas it is the singular name in case of 0..1 relations.
 *
 * If a key name is ambiguous for a specific managed object class (e.g. a property has the same
 * name as an event), then this method prefers property, aggregation, association and
 * event in that order. To resolve such ambiguities, the keys can be prefixed with
 * <code>aggregation:</code>, <code>association:</code> or <code>event:</code>.
 * In that case the keys must be quoted due to the ':'.
 *
 * Each subclass should document the set of supported names in its constructor documentation.
 *
 * <b>Valid Values:</b>
 *
 * <ul>
 * <li>for normal properties, the value has to be of the correct simple type (no type conversion occurs)
 * <li>for 0..1 aggregations, the value has to be an instance of the aggregated type
 * <li>for 0..n aggregations, the value has to be an array of instances of the aggregated type
 * <li>for 0..1 associations, an instance of the associated type or an id (string) is accepted
 * <li>0..n associations are not supported yet
 * <li>for events either a function (event handler) is accepted or an array of length 2
 *     where the first element is a function and the 2nd element is an object to invoke the method on.
 * </ul>
 *
 * @param {string} [sId] id for the new managed object; generated automatically if no non-empty id is given
 *      Note: this can be omitted, no matter whether <code>mSettings</code> will be given or not!
 * @param {object} [mSettings] optional map/JSON-object with initial property values, aggregated objects etc. for the new object
 *
 * @class Base Class for managed objects.
 * @extends sap.ui.base.EventProvider
 * @author SAP
 * @version 1.10.0
 * @public
 * @name sap.ui.base.ManagedObject
 */
sap.ui.base.EventProvider.extend("sap.ui.base.ManagedObject", {

	metadata : {
	  "abstract" : true,
	  publicMethods : [ "getId", "getMetadata", "getModel", "setModel", "hasModel", "bindProperty", "unbindProperty", "bindAggregation", "unbindAggregation" ],
	  library : "sap.ui.core", // UI Library that contains this class
	  properties : {
	  },
	  aggregations : {
	  },
	  associations : {},
	  events : {}
	},

	constructor : function(sId, mSettings) {

		sap.ui.base.EventProvider.apply(this); // no use to pass our arguments
		if (typeof(sId) != "string" && arguments.length>0) {
			// shift arguments in case sId was missing, but mSettings was given
			mSettings = sId;
			if (mSettings && mSettings.id) {
				sId = mSettings["id"];
			} else {
				sId = null;
			}
		}

		if (!sId) {
			sId = this.getMetadata().uid() || jQuery.sap.uid();
		} else {
			var preprocessor = sap.ui.base.ManagedObject._fnIdPreprocessor;
			sId = (preprocessor ? preprocessor.call(this, sId) : sId);
			var oType = sap.ui.base.DataType.getType("sap.ui.core.ID");
			if (!oType.isValid(sId)) {
				throw new Error("\"" + sId + "\" is not a valid ID.");
			}
		}
		this.sId = sId;

		// managed object interface
		// create an empty property bag that uses a map of defaultValues as its prototype
		this.mProperties = this.getMetadata().createPropertyBag();
		this.mAggregations = {};
		this.mAssociations = {};
		this.mMethods = {};

		// private properties
		this.oParent = null;

		this.aDelegates = [];
		this.aBeforeDelegates = [];
		this.iSuppressInvalidate = 0;
		this.oPropagatedProperties = {oModels:{}, oBindingContexts:{}};

		// data binding
		this.oModels = {};
		this.oBindingContexts = {};
		this.mBindingInfos = {};
		this.sBindingPath = null;
		this.mBindingParameters = null;
		this.mBoundElements = {};
		// TODO: generic concept for init hooks?
		if ( this._initCompositeSupport ) {
			this._initCompositeSupport(mSettings);
		}

		// Call init method here instead of specific Controls constructor.
		if (this.init) {
			this.init();
		}

		// apply the settings
		this.applySettings(mSettings);

		// registers the object in the Core
		if (this.register) this.register();

	}

}, /* Metadata constructor */ sap.ui.base.ManagedObjectMetadata);



/**
 * Creates a new ManagedObject from the given data.
 *
 * If vData is a managed object already, that object is returned.
 * If vData is an object (literal), then a new object is created with vData as settings.
 * The type of the object is either determined by a "Type" entry in the vData or
 * by a type information in the oKeyInfo object
 * @param {sap.ui.base.ManagedObject|object} vData the data to create the object from
 * @param {object} oKeyInfo
 * @public
 * @static
 */
sap.ui.base.ManagedObject.create = function(vData, oKeyInfo) {
	if ( !vData || vData instanceof sap.ui.base.ManagedObject || typeof vData !== "object" || vData instanceof String) {
		return vData;
	}

	function getClass(vType) {
		if ( typeof vType === "function" ) {
			return vType;
		} 
		if (typeof vType === "string" ) {
			return jQuery.sap.getObject(vType);
		}
	}

	var fnClass = getClass(vData.Type) || getClass(oKeyInfo && oKeyInfo.type);
	if ( typeof fnClass === "function" ) {
		return new fnClass(vData);
	}

	// we don't know how to create the ManagedObject from vData, so fail
	// extension points could be integrated here
	var message = "Don't know how to create a ManagedObject from " + vData + " (" + (typeof vData) + ")";
	jQuery.sap.log.fatal(message);
	throw new Error(message);
};

/**
 * A global preprocessor for the ID of a ManagedObject (used internally).
 * If set, this function will be called before the ID is applied to any ManagedObject.
 * If the original ID was empty, the hook will not be called (to be discussed).
 *
 * The expected signature is <code>function(sId)</code>, and <code>this</code> will
 * be the current ManagedObject.
 *
 * @return new ID of the ManagedObject
 * @type function
 * @private
 */
sap.ui.base.ManagedObject._fnIdPreprocessor = null;

/**
 * A global preprocessor for the settings of a ManagedObject (used internally).
 * If set, this function will be called before the settings are applied to any ManagedObject.
 * If the original settings are empty, the hook will not be called (to be discussed).
 *
 * The expected signature is <code>function(mSettings)</code>, and <code>this</code> will
 * be the current ManagedObject.
 *
 * @type function
 * @private
 */
sap.ui.base.ManagedObject._fnSettingsPreprocessor = null;

sap.ui.base.ManagedObject.runWithPreprocessors = function(fn, oPreprocessors) {
	jQuery.sap.assert(typeof fn === "function", "fn must be a function");
	jQuery.sap.assert(!oPreprocessors || typeof oPreprocessors === "object", "oPreprocessors must be an object");

	var oOldPreprocessors = { id : this._fnIdPreprocessor, settings : this._fnSettingsPreprocessor };
	oPreprocessors = oPreprocessors || {};

	this._fnIdPreprocessor = oPreprocessors.id; 
	this._fnSettingsPreprocessor = oPreprocessors.settings;

	try {
		var result = fn.call();
		this._fnIdPreprocessor = oOldPreprocessors.id; 
		this._fnSettingsPreprocessor = oOldPreprocessors.settings;
		return result;
	} catch (e) {
		this._fnIdPreprocessor = oOldPreprocessors.id; 
		this._fnSettingsPreprocessor = oOldPreprocessors.settings;
		throw e;
	}

};

/**
 * Sets all the properties, aggregations, associations and event handlers as given in
 * the object literal <code>mSettings</code>. If a property, aggregation, etc.
 * is not listed in <code>mSettings</code>, then its value is not changed by this method.
 *
 * For properties and 0..1 aggregations/associations, any given setting overwrites
 * the current value. For 0..n aggregations, the given values are appended; event
 * listeners are registered in addition to existing ones.
 *
 * For the possible keys and values in <code>mSettings</code> see the general
 * documentation in {@link sap.ui.base.ManagedObject} or the specific documentation
 * of the constructor of the concrete managed object class.
 *
 * @param {object} mSettings the settings to apply to this managed object
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.base.ManagedObject.prototype.applySettings = function(mSettings) {

	// PERFOPT: don't retrieve (expensive) JSONKeys if no settings are given
	if ( !mSettings || jQuery.isEmptyObject(mSettings) ) {
		return this;
	}

	var oMetadata = this.getMetadata(),
		mValidKeys = oMetadata.getJSONKeys(),
		makeControl = sap.ui.base.ManagedObject.create,
		preprocessor = sap.ui.base.ManagedObject._fnSettingsPreprocessor,
		sKey, oValue, oKeyInfo;

	// call the preprocessor if it has been defined
	preprocessor && preprocessor.call(this, mSettings); // TODO: decide whether to call for empty settings as well?
	
	// process models
	if ( mSettings.models ) {
		if ( typeof mSettings.models !== "object" ) {
			throw new Error("models must be a simple object");
		}
		if ( mSettings.models instanceof sap.ui.model.Model) {
			this.setModel(mSettings.models);
		} else {
			for(var sKey in mSettings.models ) {
				this.setModel(mSettings.models[sKey], sKey);
			}
		}
		delete mSettings.models;
	}
	//process BindingContext
	if ( mSettings.bindingContexts ) {
		if ( typeof mSettings.bindingContexts !== "object" ) {
			throw new Error("bindingContexts must be a simple object");
		}
		if ( mSettings.bindingContexts instanceof sap.ui.model.Context) {
			this.setBindingContext(mSettings.bindingContexts);
		} else {
			for(var sKey in mSettings.bindingContexts ) {
				this.setBindingContext(mSettings.bindingContexts[sKey], sKey);
			}
		}
		delete mSettings.bindingContexts;
	}
	// process all settings
	// process settings
	for(sKey in mSettings) {
		// get info object for the key
		if ( oKeyInfo = mValidKeys[sKey] ) {
			oValue = mSettings[sKey];
			switch(oKeyInfo._iKind) {
			case 0: // PROPERTY
				if (this.isBinding(oValue, oKeyInfo)) {
					var oBindingInfo = this.extractBindingInfo(oValue);
					this.bindProperty(sKey, oBindingInfo);
				} else {
					this[oKeyInfo._sMutator](oValue);
				}
				break;
			case 1: // SINGLE_AGGREGATION
				if ( oKeyInfo.altTypes && this.isBinding(oValue, oKeyInfo) ) {
					var oBindingInfo = this.extractBindingInfo(oValue);
					this.bindProperty(sKey, oBindingInfo);
				} else {
					this[oKeyInfo._sMutator](makeControl(oValue, oKeyInfo));
				}
				break;
			case 2: // MULTIPLE_AGGREGATION
				if (this.isBinding(oValue, oKeyInfo)) {
					var oBindingInfo = this.extractBindingInfo(oValue);
					this.bindAggregation(sKey, oBindingInfo);
				} else {
					if ( oValue && !jQuery.isArray(oValue) ) {
						oValue = [oValue];
					}
					if ( oValue ) {
						for(var i=0,l=oValue.length; i<l; i++) {
							this[oKeyInfo._sMutator](makeControl(oValue[i], oKeyInfo));
						}
					}
				}
				break;
			case 3: // SINGLE_ASSOCIATION
				this[oKeyInfo._sMutator](oValue);
				break;
			case 4: // MULTIPLE_ASSOCIATION
				if ( oValue && !jQuery.isArray(oValue) ) {
					oValue = [oValue];
				}
				if ( oValue ) {
					for(var i=0,l=oValue.length; i<l; i++) {
						this[oKeyInfo._sMutator](oValue[i]);
					}
				}
				break;
			case 5: // EVENT
				if ( typeof oValue == "function" ) {
					this[oKeyInfo._sMutator](oValue);
				}
				else {
					this[oKeyInfo._sMutator](oValue[0], oValue[1], oValue[2]);
				}
					//this[oKeyInfo._sMutator].apply(this, oValue); // could be replacement for line before
				break;
			default:
				break;
			}
		}
	}

	return this;
};

/**
 * Returns a simple string representation of this managed object.
 *
 * Mainly useful for tracing purposes.
 * @public
 * @return {string} a string description of this managed object
 */
sap.ui.base.ManagedObject.prototype.toString = function() {
	return "ManagedObject " + this.getMetadata().getName() + "#" + this.getId();
};

/**
 * Returns the object's Id.
 *
 * @return {string} the objects's Id.
 * @public
 */
sap.ui.base.ManagedObject.prototype.getId = function() {
	return this.sId;
};


/**
 * Sets a new value for the given property <code>sPropertyName</code> and marks
 * this object as changed. If the given <code>oValue</code> equals the
 * current value, nothing happens.
 *
 * @param {string}  sPropertyName name of the property to set
 * @param {any}     oValue value to set the property to
 * @param {boolean} [bSuppressInvalidate] if true, the managed is not marked as changed
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * TODO better name bSuppressInvalidate positive, e.g. "bStayValid"
 * @protected
 */
sap.ui.base.ManagedObject.prototype.setProperty = function(sPropertyName, oValue, bSuppressInvalidate) {

	// check for a value change
	var oOldValue = this.mProperties[sPropertyName];

	// value validation
	oValue = this.validateProperty(sPropertyName, oValue);

	if (jQuery.sap.equal(oOldValue, oValue)) {
		return this;
	} // no change

	// set suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate++;
	}

	// change the property (and invalidate if the rendering should be updated)
	this.mProperties[sPropertyName] = oValue;
	if (!this.isInvalidateSuppressed()) {
		this.invalidate();
	}

	// check whether property is bound and update model in case of two way binding
	this.updateModelProperty(sPropertyName, oValue, oOldValue);

	// prototype for generic property change events
	// TODO: THINK ABOUT CONFIGURATION TO ENABLE THIS
	sap.ui.base.EventProvider.prototype.fireEvent.apply(this, ["_change", {
		"id": this.getId(),
		"name": sPropertyName,
		"oldValue": oOldValue,
		"newValue": oValue
	}]);

	// reset suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate--;
	}

	return this;
};

/**
 * Returns the value for the property with the given <code>sPropertyName</code>
 *
 * @param {string} sPropertyName the name of the property
 * @type any
 * @return the value of the property
 * @protected
 */
sap.ui.base.ManagedObject.prototype.getProperty = function(sPropertyName) {
	var oValue = this.mProperties[sPropertyName],
		oMetadata = this.getMetadata(),
		oProperty = oMetadata.getAllProperties()[sPropertyName],
		oType;

	if (!oProperty) {
		throw new Error("Property \"" + sPropertyName + "\" does not exist in " + this);
	}

	oType = sap.ui.base.DataType.getType(oProperty.type);

	// If property has an array type, clone the array to avoid modification of original data
	if (oType instanceof sap.ui.base.DataType && oType.isArrayType() && jQuery.isArray(oValue)) {
		oValue = oValue.slice(0);
	}
	
	// If proprerty is of type String instead of string, convert with valueOf()
	if (oValue instanceof String) {
		oValue = oValue.valueOf();
	}
	
	return oValue;
};

/**
 * Checks whether the given value is of the proper type for the given property name. In case null or undefined is
 * passed, the default value for this property is returned.
 *
 * @param {string} sPropertyName the name of the property
 * @param {any} oValue the value
 * @return {any} the passed value or the property's default value if null or undefined was passed
 * @throws Error if no property with the given name is found or the given value does not fit to the property type
 * @protected
 */
sap.ui.base.ManagedObject.prototype.validateProperty = function(sPropertyName, oValue) {
	var oMetadata = this.getMetadata(),
		oProperty = oMetadata.getAllProperties()[sPropertyName],
		oType;

	if (!oProperty) {
		throw new Error("Property \"" + sPropertyName + "\" does not exist in " + this);
	}

	oType = sap.ui.base.DataType.getType(oProperty.type);

	// If property has an array type, clone the array to avoid modification of original data
	if (oType instanceof sap.ui.base.DataType && oType.isArrayType() && jQuery.isArray(oValue)) {
		oValue = oValue.slice(0);
	}
	
	// In case null is passed as the value return the default value, either from the property or from the type
	if (oValue === null || oValue === undefined) {
		if (oProperty.defaultValue !== null) {
			return oProperty.defaultValue;
		} else {
			return oType.getDefaultValue();
		}
	}

	// Implicit casting for string only, other types are causing errors
	if (oType instanceof sap.ui.base.DataType) {
		if (oType.getName() == "string") {
			if (!(typeof oValue == "string" || oValue instanceof String)) {
				oValue = "" + oValue;
			}
		} else if (oType.getName() == "string[]") {
			for (var i = 0; i < oValue.length; i++) {
				if (!typeof oValue[i] == "string") {
					oValue[i] = "" + oValue[i];
				}
			}
		} else if (!oType.isValid(oValue)) {
			throw new Error("\"" + oValue + "\" is of type " + typeof oValue + ", expected " +
					oType.getName() + " for property \"" + sPropertyName + "\" of " + this);
		}
	} else if (!(oValue in oType)){ // Enumeration
		throw new Error("\"" + oValue + "\" is not a valid entry of the enumeration for property \"" + sPropertyName + "\" of " + this);
	}

	return oValue;
};

/**
 * Returns the origin info on the property value of the given property name
 *
 * @param {string} sPropertyName the name of the property
 * @return {object} a map of properties describing the origin of this property value or null
 * @public
 */
sap.ui.base.ManagedObject.prototype.getOriginInfo = function(sPropertyName) {
	var oValue = this.mProperties[sPropertyName];
	if (!(oValue instanceof String && oValue.originInfo)) {
		return null;
	}
	return oValue.originInfo;
};


// ######################################################################################################
// Associations
// ######################################################################################################

/**
 * Sets an association for the managed object
 *
 * @param {string}
 *            sAssociationName name of the association
 * @param {string | sap.ui.base.ManagedObject}
 *            sId the ID of the managed object that is set as an association, or the managed object itself or null
 * @param {boolean}
 *            [bSuppressInvalidate] if true, the managed objects invalidate method is not called
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.base.ManagedObject.prototype.setAssociation = function(sAssociationName, sId, bSuppressInvalidate) {
	if (sId instanceof sap.ui.base.ManagedObject) {
		sId = sId.getId();
	} else if (sId != null && typeof sId !== "string") {
		jQuery.sap.assert(false, "setAssociation(): sId must be a string, an instance of sap.ui.base.ManagedObject or null");
		return this;
	}

	if (this.mAssociations[sAssociationName] === sId) {
		return this;
	} // no change

	// set suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate++;
	}

	this.mAssociations[sAssociationName] = sId;

	if (!this.isInvalidateSuppressed()) {
		this.invalidate();
	}

	// reset suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate--;
	}

	return this;
};

/**
 * Returns an association of the managed object with a given sAssociationName
 *
 * @param {string} sAssociationName the name of the association
 * @param {object}
 *			  oDefaultForCreation the object that is used in case the current aggregation is empty (only null or empty array allowed)
 * @return {string | string[]} the ID of the associated managed object or an array of such IDs; may be null if the association has not been populated
 * @protected
 */
sap.ui.base.ManagedObject.prototype.getAssociation = function(sAssociationName, oDefaultForCreation) {
	var result = this.mAssociations[sAssociationName];

	if (!result) {
		result = this.mAssociations[sAssociationName] = oDefaultForCreation || null;
	} else {
		if (typeof result.length === 'number' && !(result.propertyIsEnumerable('length')) ) {
			// Return a copy of the array instead of the array itself as reference!!
			return result.slice();
		}
		// simple type or ManagedObject
		return result;
	}

	return result;
};

/**
 * Adds some entity with the ID <code>sId</code> to the association identified by <code>sAssociationName</code>.
 *
 * @param {string}
 *            sAssociationName the string identifying the association the object should be added to.
 * @param {string | sap.ui.base.ManagedObject}
 *            sId the ID of the managed object to add; if empty, nothing is added; if a <code>sap.ui.base.ManagedObject</code> is given, its ID is added
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this managed object as well as the newly associated object are not marked as changed
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.base.ManagedObject.prototype.addAssociation = function(sAssociationName, sId, bSuppressInvalidate) {
	if (sId instanceof sap.ui.base.ManagedObject) {
		sId = sId.getId();
	} else if (typeof sId !== "string") {
	  // TODO what about empty string?
    jQuery.sap.assert(false, "addAssociation(): sId must be a string or an instance of sap.ui.base.ManagedObject");
		return this;
	}

	// set suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate++;
	}

	var aIds = this.mAssociations[sAssociationName];
	if (!aIds) {
		aIds = this.mAssociations[sAssociationName] = [sId];
	} else {
		aIds.push(sId);
	}

	if (!this.isInvalidateSuppressed()) {
		this.invalidate();
	}

	// reset suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate--;
	}

	return this;
};

/**
 * Removes a ManagedObject from the association named <code>sAssociationName</code>.
 *
 * @param {string}
 *            sAssociationName the string identifying the association the ManagedObject should be removed from.
 * @param {int | string | sap.ui.base.ManagedObject}
 *            vObject the position or ID of the ManagedObject to remove or the ManagedObject itself; if <code>vObject</code> is invalid input,
 *            a negative value or a value greater or equal than the current size of the association, nothing is removed
 * @param {boolean}
 *            [bSuppressInvalidate] if true, the managed object is not marked as changed
 * @return the ID of the removed ManagedObject or null
 * @protected
 */
sap.ui.base.ManagedObject.prototype.removeAssociation = function(sAssociationName, vObject, bSuppressInvalidate) {
	var aIds = this.mAssociations[sAssociationName];
	var sId = null;

	// set suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate++;
	}

	if (typeof(vObject) == "object" && vObject.getId) { // object itself is given
		vObject = vObject.getId();
	}

	if (typeof(vObject) == "string") { // ID of the object is given or has just been retrieved
		for (var i = 0; i < aIds.length; i++) {
			if (aIds[i] == vObject) {
				vObject = i;
				break;
			}
		}
	}

	if (typeof(vObject) == "number") { // "object" is the index now
		if (vObject < 0 || vObject >= aIds.length) {
			jQuery.sap.log.warning("ManagedObject.removeAssociation called with invalid index: " + sAssociationName + ", " + vObject);
		} else {
			sId = aIds[vObject];
			aIds.splice(vObject, 1);
			if (!this.isInvalidateSuppressed()) {
				this.invalidate();
			}
		}
	}

	// reset suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate--;
	}

	return sId;
};

/**
 * Removes all the objects in the 0..n-association named <code>sAssociationName</code> (and returns them in an array).<br/>
 *
 * @param {string}
 *            sAssociationName the name of the association
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @type Array
 * @return an array with the IDs of the removed objects (might be empty)
 * @protected
 */
sap.ui.base.ManagedObject.prototype.removeAllAssociation = function(sAssociationName, bSuppressInvalidate){
	var aIds = this.mAssociations[sAssociationName];
	if (!aIds)	{
		return [];
	}

	// set suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate++;
	}

	delete this.mAssociations[sAssociationName];
	if (!this.isInvalidateSuppressed()) {
		this.invalidate();
	}

	// reset suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate--;
	}

	return aIds;
};

// ######################################################################################################
// End of Associations
// ######################################################################################################


// ######################################################################################################
// Aggregations
// ######################################################################################################

/**
 * Checks whether the given value is of the proper type for the given aggregation name. 
 *
 * @param {string} sAggregationName the name of the aggregation
 * @param {sap.ui.base.ManagedObject|any} oObject the aggregated object or a primitive value
 * @param {boolean} bMultiple whether the aggregation must have cardinality 0..n
 * @return {sap.ui.base.ManagedObject|any} the passed object
 * @throws Error if no aggregation with the given name is found or the given value does not fit to the aggregation type
 * @protected
 */
sap.ui.base.ManagedObject.prototype.validateAggregation = function(sAggregationName, oObject, bMultiple) {
	var oMetadata = this.getMetadata(),
		oAggregation = oMetadata.getAllAggregations()[sAggregationName],
		aAltTypes,
		oType,
		i,
		msg;

	// undeclared aggregation 
	if (!oAggregation) {
		if(sAggregationName && oMetadata._mHiddenAggregations && oMetadata._mHiddenAggregations[sAggregationName]){
			oAggregation = oMetadata._mHiddenAggregations[sAggregationName];
		}else{
			msg = "Aggregation \"" + sAggregationName + "\" does not exist in " + this;
			
			if ( /^sap\.(ui\.core|ui\.commons|ui\.table|ui\.ux3|m|makit|viz|uiext\.inbox)$/.test(oMetadata.getLibraryName() || "") ) {
				throw new Error(msg);
			} else {
				// TODO throw for any lib as soon as "hidden" aggregations are a public feature.
				// Otherwise, composite controls currently would have no legal way to react 
				jQuery.sap.assert(false, msg);
				return oObject;
			}
		}
	}

	if (oAggregation.multiple !== bMultiple ) {
		throw new Error("Aggregation '" + sAggregationName + "' of " + this + " used with wrong cardinality (declared as " + (oAggregation.multiple ? "0..n" : "0..1") + ")");
	}
	
	//Null is a valid value for 0..1 aggregations
	if(!oAggregation.multiple && !oObject){
		return oObject;
	}
	
	oType = jQuery.sap.getObject(oAggregation.type);
	// class types
	if ( typeof oType === "function" && oObject instanceof oType ) {
		return oObject;
	}
	// interfaces 
	if ( oObject && oObject.getMetadata && oObject.getMetadata().isInstanceOf(oAggregation.type) ) {
		return oObject;
	}
	// alternative types
	aAltTypes = oAggregation.altTypes;
	if ( aAltTypes && aAltTypes.length ) {
		// for primitive types, null or undefined is valid as well 
		if ( oObject == null ) {
			return oObject;
		}
		for (i=0; i<aAltTypes.length; i++) {
			oType = sap.ui.base.DataType.getType(aAltTypes[i]);
			if (oType instanceof sap.ui.base.DataType) {
				if (oType.isValid(oObject)) {
					return oObject;
				}
			} else if (oObject in oType) { // Enumeration
				return oObject;
			}
		}
	}

	// TODO make this stronger again (e.g. for FormattedText)
	msg = "\"" + oObject + "\" is not valid for aggregation \"" + sAggregationName + "\" of " + this;
	if ( sap.ui.base.DataType.isInterfaceType(oAggregation.type) ) {
		jQuery.sap.assert(false, msg);
		return oObject;
	} else {
	  throw new Error(msg);
	}
};

/**
 * Sets an aggregation for the managed object
 *
 * @param {string}
 *            sAggregationName name of the aggregation
 * @param {object}
 *            oObject the managed object that is set as an aggregation
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.base.ManagedObject.prototype.setAggregation = function(sAggregationName, oObject, bSuppressInvalidate) {
	var oOldChild = this.mAggregations[sAggregationName];
	if (oOldChild === oObject) {
		return this;
	} // no change
	oObject = this.validateAggregation(sAggregationName, oObject, /* multiple */ false); 

	// set suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate++;
	}

	if (oOldChild instanceof sap.ui.base.ManagedObject) { // remove old child
		oOldChild.setParent(null);
	}
	this.mAggregations[sAggregationName] = oObject;
	if (oObject instanceof sap.ui.base.ManagedObject) { // adopt new child
		oObject.setParent(this, sAggregationName, bSuppressInvalidate);
	} else {
		if (!this.isInvalidateSuppressed()) {
			this.invalidate();
		}
	}

	// reset suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate--;
	}

	return this;
};

/**
 * Returns an aggregation of the managed object with a given sAggregationName
 *
 * @param {string}
 *            sAggregationName the name of the aggregation
 * @param {sap.ui.base.ManagedObject | Array}
 *			  oDefaultForCreation the object that is used in case the current aggregation is empty
 * @type sap.ui.base.ManagedObject|Array
 * @return the aggregation array in case of 0..n-aggregations or the managed object or null in case of 0..1-aggregations
 * @protected
 */
sap.ui.base.ManagedObject.prototype.getAggregation = function(sAggregationName, oDefaultForCreation) {
	var aChildren = this.mAggregations[sAggregationName];
	if (!aChildren) {
		aChildren = this.mAggregations[sAggregationName] = oDefaultForCreation || null;
	}
	if (aChildren) {
		if (typeof aChildren.length === 'number' && !(aChildren.propertyIsEnumerable('length')) ) {
			// Return a copy of the array instead of the array itself as reference!!
			return aChildren.slice();
		}
		// simple type or ManagedObject
		return aChildren;
	} else {
		return null;
	}
};

/**
 * Checks for the provided managed object <code>oObject</code> in the aggregation
 * named <code>sAggregationName</code> and returns its index if found, or -1
 * otherwise. Returns -2 if the given named aggregation is not a multiple one
 * (and does not contain the given child).
 *
 * @param {string}
 *            sAggregationName the name of the aggregation
 * @param {sap.ui.base.ManagedObject}
 *            oObject the ManagedObject whose index is looked for.
 * @return {int} the index of the provided managed object in the aggregation.
 * @protected
 */
sap.ui.base.ManagedObject.prototype.indexOfAggregation = function(sAggregationName, oObject) {
	var aChildren = this.mAggregations[sAggregationName];
	if (aChildren) {
		if (aChildren.length == undefined) {
			return -2;
		} // not a multiple aggregation

		for (var i = 0; i < aChildren.length; i++) {
			if (aChildren[i] == oObject) {
				return i;
			}
		}
	}
	return -1;
};

/**
 * Inserts managed object <code>oObject</code> to the aggregation named <code>sAggregationName</code> at
 * position <code>iIndex</code>.
 *
 * @param {string}
 *            sAggregationName the string identifying the aggregation the managed object <code>oObject</code>
 *            should be inserted into.
 * @param {sap.ui.base.ManagedObject}
 *            oObject the ManagedObject to add; if empty, nothing is inserted.
 * @param {int}
 *            iIndex the <code>0</code>-based index the managed object should be inserted at; for a negative
 *            value <code>iIndex</code>, <code>oObject</code> is inserted at position 0; for a value
 *            greater than the current size of the aggregation, <code>oObject</code> is inserted at
 *            the last position
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject as well as the added child are not marked as changed
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.base.ManagedObject.prototype.insertAggregation = function(sAggregationName, oObject, iIndex, bSuppressInvalidate) {
	if (!oObject) {
		return this;
	}
	oObject = this.validateAggregation(sAggregationName, oObject, /* multiple */ true);

	var aChildren = this.mAggregations[sAggregationName] || (this.mAggregations[sAggregationName] = []);
	// force index into valid range 
	var i = iIndex < 0 ? 0 : (iIndex > aChildren.length ? aChildren.length : iIndex);
	if (i !== iIndex) {
		jQuery.sap.log.warning("ManagedObject.insertAggregation: index '" + iIndex + "' out of range [0," + aChildren.length + "], forced to " + i);
	}
	aChildren.splice(i, 0, oObject);
	oObject.setParent(this, sAggregationName, bSuppressInvalidate);

	return this;
};

/**
 * Adds some entity <code>oObject</code> to the aggregation identified by <code>sAggregationName</code>.
 *
 * @param {string}
 *            sAggregationName the string identifying the aggregation that <code>oObject</code> should be added to.
 * @param {sap.ui.base.ManagedObject}
 *            oObject the object to add; if empty, nothing is added
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject as well as the added child are not marked as changed
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.base.ManagedObject.prototype.addAggregation = function(sAggregationName, oObject, bSuppressInvalidate) {
	if (!oObject) {
		return this;
	}
	oObject = this.validateAggregation(sAggregationName, oObject, /* multiple */ true);

	var aChildren = this.mAggregations[sAggregationName];
	if (!aChildren) {
		aChildren = this.mAggregations[sAggregationName] = [oObject];
	} else {
		aChildren.push(oObject);
	}
	oObject.setParent(this, sAggregationName, bSuppressInvalidate);
	return this;
};

/**
 * Removes an object from the aggregation named <code>sAggregationName</code>.
 *
 * @param {string}
 *            sAggregationName the string identifying the aggregation the ManagedObject should be removed from
 * @param {int | string | sap.ui.base.ManagedObject}
 *            vObject the position or ID of the ManagedObject to remove or the ManagedObject itself; if <code>vObject</code> is invalid,
 *            a negative value or a value greater or equal than the current size of the aggregation, nothing is removed
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @type sap.ui.base.ManagedObject
 * @return the removed object or null
 * @protected
 */
sap.ui.base.ManagedObject.prototype.removeAggregation = function(sAggregationName, vObject, bSuppressInvalidate) {
	var aChildren = this.mAggregations[sAggregationName];
	var oChildControl = null;

	// set suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate++;
	}

	if (typeof(vObject) == "string") { // ID of the object is given
		vObject = sap.ui.getCore().byId(vObject);
	}

	if (typeof(vObject) == "object") { // the object itself is given or has just been retrieved
		for (var i = 0; i < aChildren.length; i++) {
			if (aChildren[i] == vObject) {
				vObject = i;
				break;
			}
		}
	}

	if (typeof(vObject) == "number") { // "vObject" is the index now
		if (vObject < 0 || vObject >= aChildren.length) {
			jQuery.sap.log.warning("ManagedObject.removeAggregation called with invalid index: " + sAggregationName + ", " + vObject);

		} else {
			oChildControl = aChildren[vObject];
			aChildren.splice(vObject, 1);
			oChildControl.setParent(null);
			if (!this.isInvalidateSuppressed()) {
				this.invalidate();
			}
		}
	}

	// reset suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate--;
	}

	return oChildControl;
};

/**
 * Removes all the controls in the 0..n-aggregation named <code>sAggregationName</code> (and returns them in an array).<br/>
 * Additionally unregisters them from the hosting UIArea.
 *
 * @param {string}
 *            sAggregationName the name of the aggregation
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @type Array
 * @return an array of the removed elements (might be empty)
 * @protected
 */
sap.ui.base.ManagedObject.prototype.removeAllAggregation = function(sAggregationName, bSuppressInvalidate){
	var aChildren = this.mAggregations[sAggregationName];
	if (!aChildren)	{
		return [];
	}

	// set suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate++;
	}

	delete this.mAggregations[sAggregationName];
	for (var i = 0; i < aChildren.length; i++) {
		aChildren[i].setParent(null);
	}
	if (!this.isInvalidateSuppressed()) {
		this.invalidate();
	}

	// reset suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate--;
	}

	return aChildren;
};

/**
 * Destroys (all) the managed object(s) in the aggregation named <code>sAggregationName</code> and afterwards empties the
 * aggregation.
 *
 * @param {string}
 *            sAggregationName the name of the aggregation
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.base.ManagedObject.prototype.destroyAggregation = function(sAggregationName, bSuppressInvalidate){
	var aChildren = this.mAggregations[sAggregationName];
	if (!aChildren) {
		return this;
	}

	// set suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate++;
	}

	delete this.mAggregations[sAggregationName];
	if (aChildren instanceof sap.ui.base.ManagedObject) {
		aChildren.destroy(bSuppressInvalidate);
	} else if (aChildren && jQuery.isArray(aChildren)) {
		for (var i = 0; i < aChildren.length; i++) {
			if (aChildren[i]) {
				aChildren[i].destroy(bSuppressInvalidate);
			}
		}
	}
	if (!this.isInvalidateSuppressed()) {
		this.invalidate();
	}

	// reset suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate--;
	}

	return this;
};

// ######################################################################################################
// End of Aggregations
// ######################################################################################################


/**
 * This triggers rerendering of itself and its children.<br/> As <code>sap.ui.base.ManagedObject</code> "bubbles up" the
 * invalidate, changes to child-<code>Elements</code> will also result in rerendering of the whole sub tree.
 * @protected
 */
sap.ui.base.ManagedObject.prototype.invalidate = function() {
	if (this.oParent) {
		this.oParent.invalidate(this);
	}
};


/**
 * Returns whether rerendering is currently suppressed on this ManagedObject
 * @return boolean
 * @protected
 */
sap.ui.base.ManagedObject.prototype.isInvalidateSuppressed = function() {
	var bInvalidateSuppressed = this.iSuppressInvalidate > 0;
	if (this.oParent && this.oParent instanceof sap.ui.base.ManagedObject) {
		bInvalidateSuppressed = bInvalidateSuppressed || this.oParent.isInvalidateSuppressed();
	}
	return bInvalidateSuppressed;
};


/**
 * Removes the given child from this object's named aggregation.
 * @see sap.ui.core.UIArea#_removeChild
 * @see sap.ui.base.ManagedObject#setParent
 *
 * @param {sap.ui.base.ManagedObject}
 *            oChild the child object to be removed
 * @param {string}
 *            sAggregationName the name of this object's aggregation
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @protected
 */
sap.ui.base.ManagedObject.prototype._removeChild = function(oChild, sAggregationName, bSuppressInvalidate) {
	if (!sAggregationName) {
		// an aggregation name has to be specified!
		jQuery.sap.log.error("Cannot remove aggregated child without aggregation name.", null, this);
	} else {
		// set suppress invalidate flag
		if (bSuppressInvalidate) {
			this.iSuppressInvalidate++;
		}

		var iIndex = this.indexOfAggregation(sAggregationName, oChild);
		var oAggregationInfo = this.getMetadata().getJSONKeys()[sAggregationName];
		// Note: we assume that this is the given child's parent, i.e. -1 not expected!
		if (iIndex == -2) { // 0..1
			if(oAggregationInfo && this[oAggregationInfo._sMutator]) { // TODO properly deal with hidden aggregations
				this[oAggregationInfo._sMutator](null);
			}
			else {
				this.setAggregation(sAggregationName, null, bSuppressInvalidate);
			}
		} else if(iIndex > -1 ) { // 0..n
			if(oAggregationInfo && this[oAggregationInfo._sRemoveMutator]) { // TODO properly deal with hidden aggregations
				this[oAggregationInfo._sRemoveMutator](iIndex);
			}
			else {
				this.removeAggregation(sAggregationName, iIndex, bSuppressInvalidate);
			}
		} else {
			// already removed!?
			// this is the unexpected -1
			// TODO: What would be better? Explicit removeCompositeChild callback on subclass?
		}
		if (!this.isInvalidateSuppressed()) {
			this.invalidate();
		}

		// reset suppress invalidate flag
		if (bSuppressInvalidate) {
			this.iSuppressInvalidate--;
		}
	}
};

/**
 * Defines this object's new parent. If no new parent is given, the parent is
 * just unset and we assume that the old parent has removed this child from its
 * aggregation. But if a new parent is given, this child is first removed from
 * its old parent.
 *
 * @param {sap.ui.base.ManagedObject}
 *            oParent the object that becomes this objects's new parent
 * @param {string}
 *            sAggregationName the name of the parent objects's aggregation
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed. The old parent, however, is marked.
 * @return {sap.ui.base.ManagedObject}
 *            Returns <code>this</code> to allow method chaining
 * @private
 */
sap.ui.base.ManagedObject.prototype.setParent = function(oParent, sAggregationName, bSuppressInvalidate) {
	var that = this;
	
	if ( !oParent ) {
		this.oParent = null;
		this.sParentAggregationName = null;
		// Note: no need (and no way how) to invalidate
		return;
	}

	// set suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate++;
	}

	var oOldParent = this.getParent();
	if (oOldParent) { // remove this object from its old parent
		// Note: bSuppressInvalidate  by intention is not propagated to the old parent.
		// It is not sure whether the (direct or indirect) caller of setParent
		// has enough knowledge about the old parent to automatically propagate this.
		// If needed, callers can first remove the object from the oldParent (specifying a 
		// suitable value for bSuppressInvalidate there) and only then call setParent.
		oOldParent._removeChild(this, this.sParentAggregationName);  
	}
	// adopt new parent
	this.oParent = oParent;
	this.sParentAggregationName = sAggregationName;
	
	//get propeties to propagate
	this.oPropagatedProperties.oBindingContexts = jQuery.extend({}, oParent.oPropagatedProperties.oBindingContexts, oParent.oBindingContexts);
	this.oPropagatedProperties.oModels = jQuery.extend({}, oParent.oPropagatedProperties.oModels, oParent.oModels);
	
	// update bindings
	if (this.hasModel()) {
		this.updateBindingContext(false, true, undefined, true);
		this.updateBindings(true,null,false); // TODO could be restricted to models that changed
		this.propagateProperties(true);
	}

	// only the parent knows where to render us, so we have to invalidate it
	if ( oParent && !this.isInvalidateSuppressed() ) {
		oParent.invalidate(this);
	}

	// reset suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate--;
	}

	return this;
};

/**
 * Returns the parent managed object or <code>null</code> if this object hasn't been added to a parent yet.
 *
 * @return {sap.ui.base.ManagedObject} The parent managed object or <code>null</code>
 * @public
 */
sap.ui.base.ManagedObject.prototype.getParent = function() {
	/* Be aware that internally this.oParent is used to reduce method calls. 
	 * Check for side effects when overriding this method */
	return this.oParent;
};


/**
 * Cleans up the resources associated with this object and all its aggregated children.
 *
 * After an object has been destroyed, it can no longer be used in!
 *
 * Applications should call this method if they don't need the object any longer.
 *
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @public
 */
sap.ui.base.ManagedObject.prototype.destroy = function(bSuppressInvalidate) {
	var that = this;

	// jQuery.sap.log.debug("destroying " + this);

	// set suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate++;
	}

	if (this.exit) {
		this.exit();
	}

	// TODO: generic concept for exit hooks?
	if ( this._exitCompositeSupport ) {
		this._exitCompositeSupport();
	}

	// ensure that also our children are destroyed!!
	for(var oAggr in this.mAggregations){
		this.destroyAggregation(oAggr, bSuppressInvalidate);
	}
	
	// Deregister, if available
	if (this.deregister) this.deregister();

	// remove this child from parent aggregation
	if (this.oParent && this.sParentAggregationName) {
		this.oParent._removeChild(this, this.sParentAggregationName, bSuppressInvalidate);
	}

	// Data Binding
	jQuery.each(this.mBindingInfos, function(sName, oBindingInfo) {
		if (oBindingInfo.factory) {
			that.unbindAggregation(sName);
		} else {
			that.unbindProperty(sName);
		}
	});

	// reset suppress invalidate flag
	if (bSuppressInvalidate) {
		this.iSuppressInvalidate--;
	}

	// finally make the object unusable
	this.setParent = function(){
		throw Error("The object with ID "+that.getId()+" was destroyed and cannot be used anymore.");
	};

	// make visible that it's been destroyed.
	this.bIsDestroyed = true;

};


// DataBinding
/**
 * Determines whether a given object contains binding information instead of a
 * value or aggregated controls. The method is used in applySettings for processing
 * the JSON notation of properties/aggregations in the constructor.
 *
 * @param {object} oValue the value
 * @param {object} oKeyInfo the metadata of the property
 *
 * @returns {boolean} whether the value contains binding information
 *
 * @private
 */
sap.ui.base.ManagedObject.prototype.isBinding = function(oValue, oKeyInfo) {
	if (oValue && typeof oValue == "object" && (oValue.path || oValue.parts) && oKeyInfo.type != "object") {
		return true;
	}
	if (typeof oValue == "string" && jQuery.sap.startsWith(oValue, "{") && jQuery.sap.endsWith(oValue, "}")) {
		return true;
	}
	return false;
};

/**
 * Extracts the binding info from the given value. There are two possible notations
 * for binding information in the JSON notation of the managed object constructor:
 * - property: "{path}"
 *   This is used for property binding and can only contain the path.
 * - property:{path:"path", template:oTemplate}
 *   This is used for aggregation binding, where a template is required or can
 *   be used for property binding when additional data is required (e.g. formatter).
 *
 * @param {object} oValue
 *
 * @returns {object} the binding info object, containing at least a path property
 *                   and, dependant of the binding type, additional properties
 *
 * @private
 */
sap.ui.base.ManagedObject.prototype.extractBindingInfo = function(oValue) {
	var oBindingInfo;
	// property:{path:"path", template:oTemplate}
	if (oValue && typeof oValue == "object") {
		oBindingInfo = oValue;
		// allow JSON syntax for templates
		if (oBindingInfo.template) {
			oBindingInfo.template = sap.ui.base.ManagedObject.create(oBindingInfo.template);
		}
	}
	// property:"{path}"
	if (typeof oValue == "string") {
		oBindingInfo = {};
		oBindingInfo.path = oValue.substr(1, oValue.length - 2);
	}
	return oBindingInfo;
};

/**
 * Returns the binding infos for the given property or aggregation. The binding info contains information about path, binding object, format options,
 * sorter, filter etc. for the property or aggregation.
 *
 * @param {string} sName the name of the property or aggregation
 *
 * @returns {object} the binding info object, containing at least a path property
 *                   and, dependant of the binding type, additional properties
 *
 * @protected
 */
sap.ui.base.ManagedObject.prototype.getBindingInfo = function(sName) {
	return this.mBindingInfos[sName];
};

/**
 * Bind the object to the referenced entity in the model, which is used as the binding context
 * to resolve bound properties or aggregations of the object itself and all of its children
 * relatively to the given path.
 * If a relative binding path is used, this will be applied whenever the parent context changes.
 * @param {string} sPath the binding path
 * @param {object} [mParameters] map of additional parameters for this binding
 *
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.bindElement = function(sPath, mParameters) {
	// if a model separator is found in the path, extract model name and path
	var boundElement = {}, 
		sModelName = undefined,
		iSeparatorPos = sPath.indexOf(">");
	
	boundElement.sBindingPath = sPath;
	boundElement.mBindingParameters = mParameters;
	if (iSeparatorPos > 0) {
		sModelName = sPath.substr(0, iSeparatorPos);
		boundElement.sBindingPath = sPath.substr(iSeparatorPos + 1);
	} 
	//this.sBindingPath = sPath;
	//this.mBindingParameters = mParameters;
	this.mBoundElements[sModelName] = boundElement;
	this.updateBindingContext(false, false, sModelName);
	return this;
};

/**
 * Deprecated, please use bindElement instead.
 * @deprecated
 * @param {string} sPath the binding path
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.bindContext = function(sPath) {
	this.bindElement(sPath);
	return this;
};

/**
 * Removes the defined binding context of this object, all bindings will now resolve
 * relative to the parent context again.
 *
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.unbindContext = function(sModelName) {
	return this.unbindElement(sModelName);
};

/**
 * Removes the defined binding context of this object, all bindings will now resolve
 * relative to the parent context again.
 *
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.unbindElement = function(sModelName) {
	this.mBoundElements[sModelName].sBindingPath = null;
	this.mBoundElements[sModelName].mBindingParameters = null;
	delete this.oBindingContexts[sModelName];
	this.updateBindingContext(false, false, sModelName);
	return this;
};

/**
 * Bind a property to the model.
 * The Setter for the given property will be called with the value retrieved
 * from the data model.
 * This is a generic method which can be used to bind any property to the
 * model. A managed object may flag properties in the metamodel with
 * bindable="bindable" to get typed bind methods for a property.
 *
 * @param {string} sName the name of the property
 * @param {object} oBindingInfo the binding information
 * @param {string} oBindingInfo.path the binding path
 * @param {string} [oBindingInfo.model] the model identifier
 * @param {function} [oBindingInfo.formatter] the formatter function or sap.ui.model.Type
 * @param {boolean} [oBindingInfo.useRawValues] determines if the parameters in the formatter functions should be passed as raw values or not. In this case
 * 					the specified type for the binding is not used and the values are not formatted. Note: use this flag only when using multiple bindings.
 * 					If you use only one binding and want raw values then simply don't specify a type for that binding. 
 * @param {sap.ui.model.Type} [oBindingInfo.type] the sap.ui.model.Type for this binding
 * @param {sap.ui.model.BindingMode} [oBindingInfo.mode=Default] the binding mode to be used for this property binding (e.g. one way)
 * @param {object} [oBindingInfo.parameters] a map of parameters which is passed to the binding
 *
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.bindProperty = function(sName, oBindingInfo) {
	var sPath,
		oFormat,
		sMode,
		sModelName,
		fnFormatter,
		oType,
		iSeparatorPos,
		bAvailable = true,
		that = this,
		oMetadata = this.getMetadata(),
		oProperty = oMetadata.getAllProperties()[sName],
		oKeyInfo = oMetadata.getJSONKeys()[sName];

	// check whether property or alternative type on aggregation exists
	if (!oProperty && !oKeyInfo.altTypes) {
		throw new Error("Property \"" + sName + "\" does not exist in " + this);
	}

	// old API compatbility (sName, sPath, oFormat, sMode)
	if (typeof oBindingInfo == "string") {
		sPath = arguments[1];
		oFormat = arguments[2];
		sMode = arguments[3];

		// find out whether formatter or type has been provided
		if (typeof oFormat == "function") {
			fnFormatter = oFormat;
		}
		else if (oFormat instanceof sap.ui.model.Type) {
			oType = oFormat;
		}
		oBindingInfo = {formatter: fnFormatter, parts : [ {path: sPath, type: oType, mode: sMode} ]};
	}
	
	// only one binding object with one binding specified
	if (!oBindingInfo.parts) {
		oBindingInfo.parts = [];
		oBindingInfo.parts[0] = {path: oBindingInfo.path, type: oBindingInfo.type, model: oBindingInfo.model, mode: oBindingInfo.mode};
		delete oBindingInfo.path;
		delete oBindingInfo.mode;
		delete oBindingInfo.model;
	}
	
	jQuery.each(oBindingInfo.parts, function(i, oPart) {
		if (typeof oPart == "string") {
			oPart = { path: oPart };
			oBindingInfo.parts[i] = oPart;
		}
		// if a model separator is found in the path, extract model name and path
		iSeparatorPos = oPart.path.indexOf(">");
		if (iSeparatorPos > 0) {
			oPart.model = oPart.path.substr(0, iSeparatorPos);
			oPart.path = oPart.path.substr(iSeparatorPos + 1);
		}
		// if we have multiple bindings the binding mode can be one way only
		if (oBindingInfo.parts.length > 1) {
			oPart.mode = sap.ui.model.BindingMode.OneWay;
		}
		
		if (!that.getModel(oPart.model)) {
			bAvailable = false;
		}
		
	});
	
	// if property is already bound, unbind it first
	if (this.isBound(sName)){
		this.unbindProperty(sName);
	}

	// store binding info to create the binding, as soon as the model is available, or when the model is changed
	this.mBindingInfos[sName] = oBindingInfo;

	// if the models are already available, create the binding
	if (bAvailable) {
		this._bindProperty(sName, oBindingInfo);
	}
	return this;
};

sap.ui.base.ManagedObject.prototype._bindProperty = function(sName, oBindingInfo) {
	var oModel,
	oContext,
	oBinding,
	oPropertyInfo = this.getMetadata().getJSONKeys()[sName], // TODO fix handling of hidden entitites?
	that = this,
	aBindings = [],
	fModelChangeHandler = function() {
		try {			
			var oValue = oBinding.getExternalValue();
			oBindingInfo.skipModelUpdate = true;
			that[oPropertyInfo._sMutator](oValue);
			oBindingInfo.skipModelUpdate = false;
		}catch (oException) {
			if (oException instanceof sap.ui.model.FormatException) {
					sap.ui.getCore().fireFormatError({element : that, property : sName, type : oBinding.getType(), newValue : oBinding.getValue(), oldValue : that.getProperty(sName), exception: oException});
			}else {
				throw oException;
			}
		}
	};

	// Only use context for bindings on the primary model
	oContext = this.getBindingContext(oBindingInfo.model);
	
	jQuery.each(oBindingInfo.parts, function(i, oPart) {
		// Only use context for bindings on the primary model
		oContext = that.getBindingContext(oPart.model);
		// Create binding object
		oModel = that.getModel(oPart.model);
		
		oBinding = oModel.bindProperty(oPart.path, oContext, oBindingInfo.parameters);
		oBinding.setType(oPart.type, oPropertyInfo.type);
		
		// TODO check if multiple bindings work with resource model 
		if (!oPart.mode || !oModel.isBindingModeSupported(oPart.mode)) {
			oPart.mode = oModel.getDefaultBindingMode();
		}
		
		aBindings.push(oBinding);
	});

	// check if we have a composite binding
	if (aBindings.length > 1){
		oBinding = new sap.ui.model.CompositeBinding(aBindings, oBindingInfo.useRawValues);
		oBinding.setType(oBindingInfo.type, oPropertyInfo.type);
	} else {
		oBinding = aBindings[0];
	}
	
	// Attach to the change event of the binding and initialize value
	// all composite bindings have already one way mode, so only check the first binding for its mode. 
	// Because if no composite binding is used there is only one binding.
	if (oBindingInfo.parts[0].mode != sap.ui.model.BindingMode.OneTime) {
		oBinding.attachChange(fModelChangeHandler);
	}
	
	// set only one formatter function if any
    // because the formatter gets the context of the element we have to set the context via proxy to ensure compatibility 
	// for formatter function which is now called by the property binding
	// proxy formatter here because "this" is the correct cloned object
	oBinding.setFormatter(jQuery.proxy(oBindingInfo.formatter, this));  
	
	// Set additional information on the binding info
	oBindingInfo.skipModelUpdate = false;
	oBindingInfo.binding = oBinding;
	oBindingInfo.modelChangeHandler = fModelChangeHandler;

	fModelChangeHandler();
};

/**
 * Unbind the property from the model
 *
 * @param {String} sName the name of the property
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.unbindProperty = function(sName){
	var oBindingInfo = this.mBindingInfos[sName];
	if(oBindingInfo) {
		if (oBindingInfo.binding) {
			oBindingInfo.binding.detachChange(oBindingInfo.modelChangeHandler);
		}
		delete this.mBindingInfos[sName];
	}
	return this;
};

/**
 * Update the property in the model if two way data binding mode is enabled
 *
 * @param sName the name of the property to update
 * @param oValue the new value to set for the property in the model
 * @private
 */
sap.ui.base.ManagedObject.prototype.updateModelProperty = function(sName, oValue, oOldValue){
	if (this.isBound(sName)){
		var oBindingInfo = this.mBindingInfos[sName],
			oBinding = oBindingInfo.binding;
		// only one property binding should work with two way mode...composite binding does not work with two way binding 
		if (oBindingInfo.parts[0].mode == sap.ui.model.BindingMode.TwoWay
				&& oBinding
				&& !oBindingInfo.skipModelUpdate) {
			try {
				oBinding.setExternalValue(oValue);
				sap.ui.getCore().fireValidationSuccess({element : this, property : sName, type : oBinding.getType(), newValue : oValue, oldValue : oOldValue});
			}
			catch (oException) {
				if (oException instanceof sap.ui.model.ParseException) {
					sap.ui.getCore().fireParseError({element : this, property : sName, type : oBinding.getType(), newValue : oValue, oldValue : oOldValue, exception: oException});
				}else if (oException instanceof sap.ui.model.ValidateException) {
					sap.ui.getCore().fireValidationError({element : this, property : sName, type : oBinding.getType(), newValue : oValue, oldValue : oOldValue, exception: oException});
				}
				else {
					throw oException;
				}
			}
		}
	}
};

/**
 * Bind an aggregation to the model.
 * The bound aggregation will use the given template, clone it for each item
 * which exists in the bound list and set the appropriate binding context.
 * This is a generic method which can be used to bind any aggregation to the
 * model. A managed object may flag aggregations in the metamodel with
 * bindable="bindable" to get typed bind methods for an aggregation.
 *
 * @param {string} sName the aggregation to bind
 * @param {object} oBindingInfo the binding info
 * @param {string} oBindingInfo.path the binding path
 * @param {sap.ui.base.ManagedObject} oBindingInfo.template the template
 * @param {function} oBindingInfo.factory the factory function
 * @param {sap.ui.model.Sorter} [oBindingInfo.oSorter] the initial sort order (optional)
 * @param {array} [oBindingInfo.filters] the predefined filters (sap.ui.model.Filter) for this aggregation (optional)
 * @param {object} [oBindingInfo.parameters] a map of parameters which is passed to the binding
 *
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.bindAggregation = function(sName, oBindingInfo) {
	var sPath,
		oTemplate,
		oSorter,
		aFilters,
		oMetadata = this.getMetadata(),
		oAggregation = oMetadata.getAllAggregations()[sName];

	// check whether aggregation exists
	if (!oAggregation) {
		throw new Error("Aggregation \"" + sName + "\" does not exist in " + this);
	}
	
	// Old API compatibility (sName, sPath, oTemplate, oSorter, aFilters)
	if (typeof oBindingInfo == "string") {
		sPath = arguments[1];
		oTemplate = arguments[2];
		oSorter = arguments[3];
		aFilters = arguments[4];
		oBindingInfo = {path: sPath, sorter: oSorter, filters: aFilters};
		// allow either to pass the template or the factory function as 3rd parameter
		if (oTemplate instanceof sap.ui.base.ManagedObject) {
			oBindingInfo.template = oTemplate;
		} else if (typeof oTemplate === "function") {
			oBindingInfo.factory = oTemplate;
		}
	}
	
	// if aggregation is already bound, unbind it first
	if (this.isBound(sName)){
		this.unbindAggregation(sName);
	}
	
	// check whether a template has been provided, which is required for proper processing of the binding
	if (!(oBindingInfo.template || oBindingInfo.factory)) {
		throw new Error("Missing template or factory function for aggregation " + sName + " of managed object id " + this.getId() + " !");
	}
	
	// if we have a template we will create a factory function
	if (oBindingInfo.template) {
		oBindingInfo.factory = function(sId) {
			return oBindingInfo.template.clone(sId);
		} 
	}
	
	// if a model separator is found in the path, extract model name and path
	var iSeparatorPos = oBindingInfo.path.indexOf(">");
	if (iSeparatorPos > 0) {
		oBindingInfo.model = oBindingInfo.path.substr(0, iSeparatorPos);
		oBindingInfo.path = oBindingInfo.path.substr(iSeparatorPos + 1);
	}
	
	// store binding info to create the binding, as soon as the model is available, or when the model is changed
	this.mBindingInfos[sName] = oBindingInfo;

	// if the model is already available create the binding
	if (this.getModel(oBindingInfo.model)) {
		this._bindAggregation(sName, oBindingInfo);
	}
	return this;
};

sap.ui.base.ManagedObject.prototype._bindAggregation = function(sName, oBindingInfo) {
	var that = this,
		oBinding,
		fModelChangeHandler = function(oEvent){
			var sUpdater = "update" + sName.substr(0,1).toUpperCase() + sName.substr(1);
			if (that[sUpdater]) {
				that[sUpdater]();
			} else {
				that.updateAggregation(sName);
			}
		};
		if (this.isTreeBinding(sName)) {
			oBinding = this.getModel(oBindingInfo.model).bindTree(oBindingInfo.path, this.getBindingContext(oBindingInfo.model), oBindingInfo.filters, oBindingInfo.parameters);		
		} else {
			oBinding = this.getModel(oBindingInfo.model).bindList(oBindingInfo.path, this.getBindingContext(oBindingInfo.model), oBindingInfo.sorter, oBindingInfo.filters, oBindingInfo.parameters);
		}

	oBindingInfo.binding = oBinding;
	oBindingInfo.modelChangeHandler = fModelChangeHandler;

	oBinding.attachChange(fModelChangeHandler);
	fModelChangeHandler();
};

/**
 * Unbind the aggregation from the model
 *
 * @param {String} sName the name of the aggregation
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.unbindAggregation = function(sName){
	var oBindingInfo = this.mBindingInfos[sName];
	if(oBindingInfo) {
		if (oBindingInfo.binding) {
			oBindingInfo.binding.detachChange(oBindingInfo.modelChangeHandler);
		}
		delete this.mBindingInfos[sName];
	}
	return this;
};

/**
 *  This method is used internally and should only be overridden by a tree managed object which utilizes the tree binding.
 *  In this case and if the aggregation is a tree node the overridden method should then return true.
 *  If true is returned the tree binding will be used instead of the list binding.
 *
 *  @param {string} sName the aggregation to bind (e.g. nodes for a tree managed object)
 *  @return {boolean} whether tree binding should be used or list binding. Default is false. Override method to change this behavior.
 *
 *  @protected
 */
sap.ui.base.ManagedObject.prototype.isTreeBinding = function(sName) {
	return false;
};

/**
 * Create or update local bindings.
 * 
 * Called when model or binding contexts have changed. Creates bindings when the model was not available 
 * at the time bindProperty or bindAggregation was called. Recreates the bindings when they exist already 
 * and when the model has changed.
 *
 * @param {boolean} bUpdateAll forces an update of all bindings, sModelName will be ignored
 * @param {string|undefined} sModelName name of a model whose bindings should be updated
 * @param {boolean} bRecreate whether to recreate the bindings 
 * 
 * TODO better understand and explain bRecreate flag
 * @private
 */
sap.ui.base.ManagedObject.prototype.updateBindings = function(bUpdateAll, sModelName, bRecreate) {
	var that = this,
		bUpdateRequired, bIsSameModelName, bIsSameModelInstance;
		
	// create property and aggregation bindings if they don't exist yet
	jQuery.each(this.mBindingInfos, function(sName, oBindingInfo) {
		bUpdateRequired = that._updateRequired(oBindingInfo);
		bIsSameModelInstance = oBindingInfo.binding && oBindingInfo.binding.updateRequired(that.getModel(sModelName));
				
		if (bUpdateAll || !oBindingInfo.binding || !bIsSameModelInstance) {
			if ( bRecreate && oBindingInfo.binding ) {
				oBindingInfo.binding.detachChange(oBindingInfo.modelChangeHandler);
				delete oBindingInfo.binding;
			}
			if (!oBindingInfo.binding) {
				if (bUpdateRequired) {
					if (oBindingInfo.factory) {
						that._bindAggregation(sName, oBindingInfo);
					} else {
						that._bindProperty(sName, oBindingInfo);
					}
				} 
			}
		}
	});
};

sap.ui.base.ManagedObject.prototype._updateRequired = function(oBindingInfo) {
	var bUpdateRequired = true,
		that = this;
	if (oBindingInfo.parts && oBindingInfo.parts.length > 1) {
		jQuery.each(oBindingInfo.parts, function(i, oPart) {
			bUpdateRequired = bUpdateRequired && that.getModel(oPart.model);
		});
	
	} else if (oBindingInfo.factory) { // List binding check
		bUpdateRequired = !!this.getModel(oBindingInfo.model); // Listbinding works only with default model
	} else {			// should be property binding now
		bUpdateRequired = !!this.getModel(oBindingInfo.parts[0].model); 
	}
	return bUpdateRequired;

};

/**
 * Generic method which is called, whenever an aggregation binding is changed.
 * This method deletes all elements in this aggregation and recreates them
 * according to the data model.
 * In case a managed object needs special handling for a aggregation binding, it can create
 * a typed update-method (e.g. "updateRows") which will be used instead of the
 * default behaviour.
 *
 * @private
 */
sap.ui.base.ManagedObject.prototype.updateAggregation = function(sName) {
	var oBindingInfo = this.mBindingInfos[sName],
		oBinding = oBindingInfo.binding,
		fnFactory = oBindingInfo.factory,
		oAggregationInfo = this.getMetadata().getJSONKeys()[sName],  // TODO fix handling of hidden aggregations
		oClone,
		that = this;
	this[oAggregationInfo._sDestructor]();
	if (this.isTreeBinding(sName)) {
		var iNodeIndex = 0,
			update = function(aContexts, fnFactory, oBinding, oParent){
			jQuery.each(aContexts, function(iIndex, oContext) {
				var sId = that.getId() + "-" + iNodeIndex++;
				oClone = fnFactory(sId, oContext);
				oClone.setBindingContext(oContext, oBindingInfo.model);
				oParent[oAggregationInfo._sMutator](oClone); // also sets the Parent
				update(oBinding.getNodeContexts(oContext), fnFactory, oBinding, oClone);
			});
		};
		update(oBinding.getRootContexts(), fnFactory, oBinding, this);
	} 
	else {
		jQuery.each(oBinding.getContexts(), function(iIndex, oContext) {
			var sId = that.getId() + "-" + iIndex;
			oClone = fnFactory(sId, oContext);
			oClone.setBindingContext(oContext, oBindingInfo.model);
			that[oAggregationInfo._sMutator](oClone);
		});
	}
};

/**
 * Find out whether a property or aggregation is bound
 *
 * @param {String} sName the name of the property or aggregation
 * @return {boolean} whether a binding exists for the given name
 * @public
 */
sap.ui.base.ManagedObject.prototype.isBound = function(sName){
	return (sName in this.mBindingInfos);
};

/**
 * Get the binding object for a specific aggregation/property
 *
 * @param {String} sName the name of the property or aggregation
 * @return {Binding} the binding for the given name
 * @public
 */
sap.ui.base.ManagedObject.prototype.getBinding = function(sName){
	return this.mBindingInfos[sName] && this.mBindingInfos[sName].binding;
};

/**
 * Get the binding path for a specific aggregation/property
 *
 * @param {String} sName the name of the property or aggregation
 * @return {String} the binding path for the given name
 * @protected
 */
sap.ui.base.ManagedObject.prototype.getBindingPath = function(sName){
	return this.mBindingInfos[sName] && this.mBindingInfos[sName].path;
};

/**
 * Set the binding context for this ManagedObject.
 *
 * @param {Object} oContext the new binding context for this object
 *
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.setBindingContext = function(oContext, sModelName){
	this.oBindingContexts[sModelName] = oContext;
	this.updateBindingContext(true, true, sModelName);
	this.propagateProperties(true);
	return this;
};

/**
 * Update the binding context in this object and all aggregated children
 * @private
 */
sap.ui.base.ManagedObject.prototype.updateBindingContext = function(bSkipLocal, bSkipChildren, sModelName, bUpdateAll){

	var oModel,
		oModelNames= {},
		oParentContext, 
		that = this;
	
	// find models that need an context update
	if (bUpdateAll) {
		for(sModelName in this.oModels) {
			if ( this.oModels.hasOwnProperty(sModelName) ){
				oModelNames[sModelName] = sModelName;
			}
		}
		for(sModelName in this.oPropagatedProperties.oModels) {
			if ( this.oPropagatedProperties.oModels.hasOwnProperty(sModelName) ){
				oModelNames[sModelName] = sModelName;
			}
		}
	} else {
		oModelNames[sModelName] = sModelName;
	}

	for(sModelName in oModelNames ) {
		if ( oModelNames.hasOwnProperty(sModelName) ){
			oModel = this.getModel(sModelName);

			if (this.mBoundElements[sModelName] && this.mBoundElements[sModelName].sBindingPath && !bSkipLocal) {
				if (this.oParent && oModel == this.oParent.getModel(sModelName)) {
					oParentContext= this.oParent.getBindingContext(sModelName); 
				}
				if (oModel) {
					oModel.createBindingContext(this.mBoundElements[sModelName].sBindingPath, oParentContext, this.mBoundElements[sModelName].mBindingParameters, function(oContext) {
						that.setBindingContext(oContext, sModelName);
						that.updateBindingContext(true, bSkipChildren, sModelName);
					});
				} else {
					this.oBindingContexts[sModelName] = undefined;
				}
				return;
			}

			var oContext = this.getBindingContext(sModelName);

			// update context in existing bindings, but only for the primary model
			jQuery.each(this.mBindingInfos, function(sName, oBindingInfo) {
				var oBinding = oBindingInfo.binding;
				if (oBinding && oBinding.updateRequired(oModel)) {
					oBinding.setContext(oContext);
				}
			});
			if (!bSkipChildren) {
				// also update context in all child elements
				jQuery.each(this.mAggregations, function(sName, oAggregation) {
					if (oAggregation instanceof sap.ui.base.ManagedObject) {
						oAggregation.oPropagatedProperties.oBindingContexts[sModelName] = oContext;
						oAggregation.updateBindingContext(false,false,sModelName);
					} else if (oAggregation instanceof Array) {
						for (var i = 0; i < oAggregation.length; i++) {
							oAggregation[i].oPropagatedProperties.oBindingContexts[sModelName] = oContext;
							oAggregation[i].updateBindingContext(false,false,sModelName);
						}
					}
				});
			}
		}
	}
};


/**
 * Get the binding context of this object
 * If the object does not have a binding context set on itself and has no own Model set, 
 * it will use the first binding context defined in its parent hierarchy.
 *
 * @return {Object} the binding context of this object
 * @public
 */
sap.ui.base.ManagedObject.prototype.getBindingContext = function(sModelName){
	var oModel = this.getModel(sModelName);
	
	if (this.oBindingContexts[sModelName]) {
		return this.oBindingContexts[sModelName];
	} else if (oModel && this.oParent && this.oParent.getModel(sModelName) && oModel != this.oParent.getModel(sModelName)) {
		return undefined;
	} else {
		return this.oPropagatedProperties.oBindingContexts[sModelName];
	}
};

/**
 * Set the model for databinding
 * @param {sap.ui.model.Model} oModel
 * @param {string} [sName]
 * @return {sap.ui.base.ManagedObject} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.base.ManagedObject.prototype.setModel = function(oModel, sName) {
	if (!oModel && this.oModels[sName]) {
		delete this.oModels[sName];
		// propagate Models to children
		this.propagateProperties(sName);
		// if the model instance for a name changes, all bindings for that model name have to be updated
		this.updateBindings(false, sName, true);
	} else if ( oModel !== this.oModels[sName] ) { 
		//TODO: handle null!
		this.oModels[sName] = oModel;
		// propagate Models to children
		this.propagateProperties(sName);
		// update binding context, for primary model only
		if (!sName){this.updateBindingContext(false, true, sName);}
		// if the model instance for a name changes, all bindings for that model name have to be updated
		this.updateBindings(false, sName, true);
	} else {
		// nothing to do
	} 
	return this;
};

/**
 * Propagate Properties (models and bindingContext) to aggregated objects.
 * @param {string|undefined|true} sName when <code>true</code>, all bindings are updated.
 *           Otherwise only those for the given model name (undefined == name of default model)
 * 
 * @private
 */
sap.ui.base.ManagedObject.prototype.propagateProperties = function(vName) {
	var oProperties = this._getPropertiesToPropagate(),
		bUpdateAll = vName === true, // update all bindings when no model name parameter has been specified
		sName = bUpdateAll ? undefined : vName;
	jQuery.each(this.mAggregations, function(sAggregationName, oAggregation) {
		if (oAggregation instanceof sap.ui.base.ManagedObject) {
			oAggregation.oPropagatedProperties = oProperties;
			oAggregation.updateBindings(bUpdateAll,sName,true);
			oAggregation.updateBindingContext(false, true, sName, bUpdateAll);
			oAggregation.propagateProperties(vName);
		} else if (oAggregation instanceof Array) {
			for (var i = 0; i < oAggregation.length; i++) {
				if (oAggregation[i] instanceof sap.ui.base.ManagedObject) {
					oAggregation[i].oPropagatedProperties = oProperties;
					oAggregation[i].updateBindings(bUpdateAll,sName,true);
					oAggregation[i].updateBindingContext(false, true, sName, bUpdateAll);
					oAggregation[i].propagateProperties(vName);
				}
			}
		}
	});
}

/**
 * Get properties for propagation
 * @return {object} oProperties
 * @private
 */
sap.ui.base.ManagedObject.prototype._getPropertiesToPropagate = function() {
	var oProperties,
		bHasOwnModels = !jQuery.isEmptyObject(this.oModels),
		bHasOwnContexts = !jQuery.isEmptyObject(this.oBindingContexts);

	if (this.oBindingContexts || bHasOwnModels) {
		//create new properties object
		oProperties = {};
		if (bHasOwnModels) {
			oProperties.oModels = {};
			jQuery.extend(oProperties.oModels,this.oPropagatedProperties.oModels);
			jQuery.each(this.oModels, function(sName, oModel) {
				oProperties.oModels[sName] = oModel;
			});
		}
		else {
			oProperties.oModels = this.oPropagatedProperties.oModels;
		}
		if (bHasOwnContexts) {
			oProperties.oBindingContexts = {};
			jQuery.extend(oProperties.oBindingContexts,this.oPropagatedProperties.oBindingContexts);
			jQuery.each(this.oBindingContexts, function(sName, oBindingContext) {
				oProperties.oBindingContexts[sName] = oBindingContext;
			});
		} else {
			oProperties.oBindingContexts = this.oPropagatedProperties.oBindingContexts;
		}
	} else {
		//propagate the existing container
		oProperties = this.oPropagatedProperties;
	}
	return oProperties;
};

/**
 * Get the model to be used for data bindings with the given model name.
 * If the object does not have a model set on itself, it will use the first 
 * model defined in its parent hierarchy.
 * 
 * The name can be omitted to reference the default model or it must be a non-empty string.
 * 
 * @param {string|null|undefined} [sName] name of the model to be retrieved
 * @return {sap.ui.model.Model} oModel
 * @public
 */
sap.ui.base.ManagedObject.prototype.getModel = function(sName) {
	return this.oModels[sName] || this.oPropagatedProperties.oModels[sName];
};

/**
 * Check if any Model is set to the ManagedObject or to one of its parents (including UIArea and Core)
 * @return {boolean} true or false
 * @public
 */
sap.ui.base.ManagedObject.prototype.hasModel = function() {
	return !(jQuery.isEmptyObject(this.oModels) && jQuery.isEmptyObject(this.oPropagatedProperties.oModels));
};

/**
 * Clones a tree of objects starting with the object on which clone is called first (root object).
 * 
 * The ids within the newly created clone tree are derived from the original ids by appending
 * the given <code>sIdSuffix</code> (if no suffix is given, one will be created; it will be 
 * unique across multiple clone calls).
 *  
 * The <code>oOptions</code> configuration object can have the following properties:
 * <ul>
 * <li>The boolean value <code>cloneChildren</code> specifies wether associations/aggregations will be cloned</li>
 * <li>The boolean value <code>cloneBindings</code> specifies if bindings will be cloned</li>
 * </ul>
 * 
 * For each cloned object the following settings are cloned based on the metadata of the object and the defined options:
 * <ul>
 * <li>all properties that are not bound. If cloneBinding is false even these properties will be cloned; 
 * the values are used by reference, they are not cloned</li>
 * <li>all aggregated objects that are not bound. If cloneBinding is false even the ones that are bound will be cloned;
 * they are all cloned recursively using the same <code>sIdSuffix</code></li>
 * <li>all associated controls; when an association points to an object inside the cloned object tree,
 *     then the cloned association will be modified to that it points to the clone of the target object.
 *     When the association points to a managed object outside of the cloned object tree, then its 
 *     target won't be changed.</li>  
 * <li>all models set via setModel(); used by reference </li>
 * <li>all property and aggregation bindings (if cloneBindings is true); the pure binding infos (path, model name) are 
 *     cloned, but all other information like template control or factory function, 
 *     data type or formatter function are copied by reference. The bindings themselves 
 *     are created anew as they are specific for the combination (object, property, model).
 *     As a result, any later changes to a binding of the original object are not reflected 
 *     in the clone, but changes to e.g the type or template etc. are.</li> 
 * </ul>
 *
 * Each clone is created by first collecting the above mentioned settings and then creating 
 * a new instance with the normal constructor function. As a result, any side effects of 
 * mutator methods (setProperty etc.) or init hooks are repeated during clone creation. 
 * There is no need to override <code>clone()</code> just to reproduce these internal settings!
 * 
 * Custom controls however can override <code>clone()</code> to implement additional clone steps. 
 * They usually will first call <code>clone()</code> on the super class and then modify the   
 * returned clone accordingly.  
 * 
 * Applications <b>must never provide</b> the second parameter <code>aLocaleIds</code>. 
 * It is determined automatically for the root object (and its non-existance also serves as 
 * an indicator for the root object). Specifying it will break the implementation of <code>clone()</code>. 
 * 
 * @param {String} [sIdSuffix] a suffix to be appended to the cloned object id
 * @param {Array} [aLocalIds] an array of local IDs within the cloned hierarchy (internally used)
 * @param {Object} [oOptions] configuration object 
 * @return {sap.ui.base.ManagedObject} reference to the newly created clone
 * @protected
 */
sap.ui.base.ManagedObject.prototype.clone = function(sIdSuffix, aLocalIds, oOptions) {
	var that = this,
		bCloneChildren = true, 
		bCloneBindings = true;
	
	if (oOptions) {
		bCloneChildren = !!oOptions.cloneChildren;
		bCloneBindings = !!oOptions.cloneBindings;
	}
	// if no id suffix has been provided use a generated UID
	if (!sIdSuffix) {
		sIdSuffix = sap.ui.base.ManagedObjectMetadata.uid("clone") || jQuery.sap.uid();
	}
	// if no local ID array has been passed, collect IDs of all aggregated objects to
	// be able to properly adapt associations, which are within the cloned object hierarchy
	if (!aLocalIds && bCloneChildren) {
		aLocalIds = jQuery.map(this.findAggregatedObjects(true), function(oObject) {return oObject.getId();});
	}

	var oMetadata = this.getMetadata(),
		oClass = oMetadata._oClass,
		sId = this.getId() + "-" + sIdSuffix,
		mSettings = {},
		mProps = this.mProperties,
		sKey,
		oClone;
	
	// Clone properties (only those with non-default value)
	for(sKey in mProps) {
		//do not clone properties if property is bound and bindings are cloned; Property is set on update
		if ( mProps.hasOwnProperty(sKey) && !(this.isBound(sKey) && bCloneBindings)){
			mSettings[sKey] = mProps[sKey];
		}
	}
	
	// Clone models		
	mSettings["models"] = this.oModels;		
	
	// Clone BindingContext
	mSettings["bindingContexts"] = this.oBindingContext;

	if(bCloneChildren) {
		// Clone aggregations
		jQuery.each(this.mAggregations, function(sName, oAggregation) {
			//do not clone aggregation if aggregation is bound and bindings are cloned; aggregation is filled on update
			if (oMetadata.hasAggregation(sName) && !(that.isBound(sName) && bCloneBindings)) {
				if (oAggregation instanceof sap.ui.base.ManagedObject) {
					mSettings[sName] = oAggregation.clone(sIdSuffix, aLocalIds);
				} else if (jQuery.isArray(oAggregation)) {
					mSettings[sName] = [];
					for (var i = 0; i < oAggregation.length; i++) {
						mSettings[sName].push(oAggregation[i].clone(sIdSuffix, aLocalIds));
					}
				} else {
					// must be an alt type
					mSettings[sName] = oAggregation;
				}
			}
		});

		// Clone associations
		jQuery.each(this.mAssociations, function(sName, oAssociation) {
			// Check every associated ID against the ID array, to make sure associations within
			// the template are properly converted to associations within the clone
			if (jQuery.isArray(oAssociation)) {
				oAssociation = oAssociation.slice(0);
				for (var i = 0; i < oAssociation.length; i++) {
					if (jQuery.inArray(oAssociation[i], aLocalIds) >= 0) {
						oAssociation[i] += "-" + sIdSuffix;
					}
				}
			} else if (jQuery.inArray(oAssociation, aLocalIds) >= 0) {
				oAssociation += "-" + sIdSuffix;
			}
			mSettings[sName] = oAssociation;
		});
	}
	// Create clone instance
	oClone = new oClass(sId, mSettings);
	
	// Clone events
	jQuery.each(this.mEventRegistry, function(sName, aListeners) {
		oClone.mEventRegistry[sName] = aListeners.slice();
	});
	
	// Clone bindings
	if (bCloneBindings) {
		jQuery.each(this.mBindingInfos, function(sName, oBindingInfo) {
			var oCloneBindingInfo = jQuery.extend({}, oBindingInfo);
			delete oCloneBindingInfo.binding; // remove the runtime binding info (otherwise the property will not be connected again!)
			if (oBindingInfo.factory) {
				oClone.bindAggregation(sName, oCloneBindingInfo);
			} else {
				oClone.bindProperty(sName, oCloneBindingInfo);
			}
		});
	}
	return oClone;
};

/**
 * Maps the given aggregation with name <code>sOldAggrName</code>
 * on aggregation <code>sNewAggrName</code> (When calling an accessor function
 * of the old aggregation the call is forwarded to the corresponding accessor
 * function of the new aggregation).
 *
 * This function should help to perform a smooth transition for users of a managed object
 * when an aggregation must be renamed.
 *
 * Both aggregations must have a mutiple cardinality (0..n) and must have the same
 * aggregated type!
 *
 * @param {object} oPrototype prototype of the ManagedObject class for which a mapping should be defined
 * @param {string} sOldAggrName Name of the old deprecated aggregation
 * @param {string} sNewAggrName Name of the new aggregation
 * @deprecated
 */
sap.ui.base.ManagedObject._mapAggregation = function(oPrototype, sOldAggrName, sNewAggrName){
	var mKeys = oPrototype.getMetadata().getJSONKeys(); // TODO fix handling of hidden entitites?
	var oOldAggrInfo = mKeys[sOldAggrName];
	var oNewAggrInfo = mKeys[sNewAggrName];

	//Check whether aggregations exist and are multiple.
	if(!oOldAggrInfo || !oNewAggrInfo || oOldAggrInfo._iKind != 2 || oNewAggrInfo._iKind != 2) {
		return;
	}

	var mFunc = {"insert" : true, "add" : true, "remove" : true, "removeAll" : false, "indexOf" : true, "destroy" : false, "get" : false};

	function method(sPrefix, sName) {
		return sPrefix + sName.substring(0,1).toUpperCase() + sName.substring(1);
	}

	function fAggrDelegator(sFuncName){
		return function() {
			return this[sFuncName].apply(this, arguments);
		};
	}

	for(var sPrefix in mFunc){
		var sOldFuncName = method(sPrefix, mFunc[sPrefix] ? oOldAggrInfo.singularName : oOldAggrInfo._sName);
		var sNewFuncName = method(sPrefix, mFunc[sPrefix] ? oNewAggrInfo.singularName : oNewAggrInfo._sName);
		oPrototype[sOldFuncName] = fAggrDelegator(sNewFuncName);
	}
};

/**
 * Searches and returns an array of child elements and controls which are
 * referenced within an aggregation or aggregations of child elements/controls.
 * This can be either done recursive or not.
 * <br>
 * <b>Take care: this operation might be expensive.</b>
 * @param {boolean}
 *          bRecursive true, if all nested children should be returned.
 * @return {sap.ui.base.ManagedObject[]} array of child elements and controls
 * @public
 */
sap.ui.base.ManagedObject.prototype.findAggregatedObjects = function(bRecursive) {

	var aAggregatedObjects = [];
	function fFindObjects(oObject) {
		for (var n in oObject.mAggregations) {
			var a = oObject.mAggregations[n];
			if (jQuery.isArray(a)) {
				for (var i = 0; i < a.length; i++) {
					aAggregatedObjects.push(a[i]);
					if (bRecursive) {
						fFindObjects(a[i]);
					}
				}
			} else if (a instanceof sap.ui.base.ManagedObject) {
				aAggregatedObjects.push(a);
				if (bRecursive) {
					fFindObjects(a);
				}
			}
		}
	}
	fFindObjects(this);
	return aAggregatedObjects;

};
