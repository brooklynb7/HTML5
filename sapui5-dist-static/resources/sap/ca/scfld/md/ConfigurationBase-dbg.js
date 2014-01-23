jQuery.sap.declare("sap.ca.scfld.md.ConfigurationBase");
jQuery.sap.require("sap.ca.scfld.md.ApplicationFacade");
jQuery.sap.require("sap.ca.scfld.md.app.ConnectionManager");
jQuery.sap.require("sap.ca.scfld.md.app.ApplicationImplementation");
jQuery.sap.require("sap.ca.scfld.md.app.Application");

sap.ui.base.ManagedObject.extend("sap.ca.scfld.md.ConfigurationBase", {
	metadata : {
		properties : {
			"identifier" : "string"
		},
		publicMethods : ["setApplicationFacade"]
	},

	_setApplicationFacade : function(oApplicationFacade) {
		this.oApplicationFacade = oApplicationFacade;
		this.setApplicationFacade(oApplicationFacade);
	},	

	
	/**
	 * Override this method when you want to store a reference to the <code>ApplicationFacade</code> in some place where you can
	 * access it. Note that all controllers inheriting from the <code>BaseMaster/Detail/FullscreenController</code> automatically
	 * possess an attribute <code>oApplicationFacade</code>. </br>
	 * However, it may be useful to have access to the facade e.g. in a class providing formatters.
	 * @param oApplicationFacade the application facade for this App
	 */	
	setApplicationFacade : function(oApplicationFacade) {

	},

	// will be removed soon. Use method in ApplicationFacade
	isMock : function() {
		// The "reponder" URL parameter defines if the app shall run with mock
		// data
		var responderOn = jQuery.sap.getUriParameters().get("responderOn");

		// set the flag for later usage
		return ("true" === responderOn);
	},

	/**
	 * Specifies the list of attributes that identify a list item
	 * 
	 * @returns {array} the list of attributes (strings) of a master list item that identify one entry.
	 */
	getMasterKeyAttributes : function() {
		return null;
	},

	/**
	 * Getter for the service list to be used as source for the Connection Manager
	 * 
	 * @returns {object} the list of ODataModel to instantiate with their corresponding url / mock url
	 */
	getServiceList : function() {
		return null;
	},

	/**
	 * Getter for the list of parameters to be excluded from appending to the URL for the Services
	 * 
	 * @returns {array} the list of parameters to be excluded from appending to the URL for the Services
	 */
	getExcludedQueryStringParameters : function() {
		return null;
	},

});
