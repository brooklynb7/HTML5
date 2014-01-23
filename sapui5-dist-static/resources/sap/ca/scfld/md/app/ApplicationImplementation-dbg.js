jQuery.sap.declare("sap.ca.scfld.md.app.ApplicationImplementation");
jQuery.sap.require("sap.ca.scfld.md.app.ConnectionManager");
jQuery.sap.require("sap.ca.scfld.md.app.MasterHeaderFooterHelper");
jQuery.sap.require("sap.ca.scfld.md.app.DetailHeaderFooterHelper");
jQuery.sap.require("sap.ca.scfld.md.app.FullScreenHeaderFooterHelper");

sap.ui.base.ManagedObject.extend("sap.ca.scfld.md.app.ApplicationImplementation", {

	metadata : {

		properties : {
			identity : "string",
			component : "object",
			oViewHook : "string"
		},
		methods : ["getConnectionManager"]
	},

	init : function() {

	},
	
	sI18N : "i18n",

	startApplication : function(oConfiguration) {

		this.oMHFHelper = new sap.ca.scfld.md.app.MasterHeaderFooterHelper(this);
		this.oDHFHelper = new sap.ca.scfld.md.app.DetailHeaderFooterHelper(this);
		this.oFHFHelper = new sap.ca.scfld.md.app.FullScreenHeaderFooterHelper(this);
		this.oConfiguration = oConfiguration;
		this.aMasterKeys = oConfiguration.getMasterKeyAttributes();
		this.aKeyValues = null;
        this.mApplicationModels = {};

		var oLocale = sap.ui.getCore().getConfiguration().getFormatLocale();
		var sBundleName = this.getIdentity() + ".i18n.i18n";
		this.AppI18nModel = new sap.ui.model.resource.ResourceModel({
			bundleName : sBundleName,
			bundleLocale : oLocale
		});

		var oComponent = this.getComponent();
		if (!sap.ui.getCore().getConfiguration().getDisableCustomizing()) {
			var oMetadata = oComponent.getMetadata();
			if (oMetadata) {
				var oExtServices = oMetadata.getConfig("sap.ca.i18Nconfigs");
				if (oExtServices.bundleName) {
					this.AppI18nModel.enhance(oExtServices);
				}
			}
		}
		this.UilibI18nModel = new sap.ui.model.resource.ResourceModel({
			bundleName : "sap.ca.scfld.md.i18n.i18n",
			bundleLocale : oLocale
		});

		this.oConnectionManager = sap.ca.scfld.md.app.ConnectionManager.getNewInstance(this.getIdentity(),
				this.oConfiguration, {}, this.getComponent());

		this.bIsPhone = jQuery.device.is.phone;
		this.bIsIPad  = jQuery.device.is.ipad;		

		var oHookPage = sap.ui.getCore().byId(this.getOViewHook());
		oHookPage.setModel(this.AppI18nModel, this.sI18N);
		
		//register on device orientation change
		this.oCurController = {};
		this.oCurController.MasterCtrl = null;
		this.oCurController.DetailCtrl = null;
		this.oCurController.FullCtrl = null;
		
		sap.ui.Device.orientation.attachHandler(this.onChangeDeviceOrientation, this);

	},

	getResourceBundle : function() {
		return this.AppI18nModel.getResourceBundle();
	},

	getUiLibResourceBundle : function() {
		return this.UilibI18nModel.getResourceBundle();
	},

	getODataModel : function(sName) {
		if (sName == this.sI18N){
			return this.AppI18nModel;
		}
		return this.oConnectionManager.getModel(sName);
	},
	
	setModels : function(oController) {
		var view = oController.getView();
		view.setModel(this.AppI18nModel, this.sI18N);
		// FIXME: this should not be needed but don't work if
		// not here
		view.setModel(sap.ui.getCore().getModel("device"), "device");
		
		jQuery.each(this.oConnectionManager.modelList, function(name, model) {
			if (name == "undefined") {
				view.setModel(model);
			} else {
				view.setModel(model, name);
			}
		});
	},

	isMock : function() {
		// The "reponder" URL parameter defines if the app shall run with mock
		// data
		var responderOn = jQuery.sap.getUriParameters().get("responderOn");

		// set the flag for later usage
		return ("true" === responderOn);
	},

	getConnectionManager : function() {

		return this.oConnectionManager;
	},

	onMasterRefreshed : function(oController) {
		this.setStoredSelectedItem(oController);
	},

	// Called each time the list binding is changed
	onMasterChanged : function(oController) {
		this.oMHFHelper.defineMasterHeaderFooter(oController);
		if (oController._oControlStore){
		  oController._oControlStore.bIsSearching = false;
		}
	},

	setStoredSelectedItem : function(oController) {
		if (!this.aKeyValues) {
			return;
		}
		var oList = oController.getList();
		var aItems = oList.getItems();
		oList.removeSelections();
		var bFound = false;
		for ( var i = 0; i < aItems.length && !bFound; i++) {
			var oListItem = aItems[i];
			if ((oListItem instanceof sap.m.GroupHeaderListItem)){
				continue;
			}
			var oItemBinding = oListItem.getBindingContext(this.sModelName);
			bFound = true;
			for ( var j = 0; bFound && j < this.aKeyValues.length; j++) {
				bFound = this.aKeyValues[j] == oItemBinding.getProperty(this.aMasterKeys[j]);
			}
		}
		// on phone or when the action was triggered by a search (and not a refresh) we are only marking the item as selected (no navigation to it)
		if (this.bIsPhone || (oController._oControlStore && oController._oControlStore.bIsSearching)){
			if (bFound){
			// only phone: set line as selected
				oListItem.setSelected(true);
				oList.setSelectedItem(oListItem, true);				
			}			
		} else {
			if (!bFound) {
				// if item cannot be found again, then choose first 'real' item
				var oListItem = this.getFirstListItem(oController);
			}
			// if we have an item: select it
			if (oListItem){
				oController.setListItem(oListItem);
// Note: The difference between this implementation and the commented one is, that
// in iPad portrait mode the list will not disappear after the refresh
/*				oList.fireSelect({
					listItem : oListItem
				});	*/			
			}
		}
		this.aKeyValues = null;     // prevent that this is used for future change events
	},

	// set header and footer of a detail page
	defineDetailHeaderFooter : function(oController) {
		this.oDHFHelper.defineDetailHeaderFooter(oController);
		//this.oCurController.DetailCtrl = oController;
	},

	defineFullscreenHeaderFooter : function(oController) {
		this.oFHFHelper.defineHeaderFooter(oController);
		//this.oCurController.FullCtrl = oController;
	},

	setSplitContainer : function(oSplitContainer) {
		this.oSplitContainer = oSplitContainer;
	},
	
	registerExitModule : function(fExitModule){
		if (!this.aExitModules){
			this.aExitModules = [];
			var oComponent = this.getComponent();
			if (oComponent.exit){ 
			  var fAppExit = jQuery.proxy(oComponent.exit, oComponent);
			} else {
				var fAppExit = function(){};
			}
			oComponent.exit = jQuery.proxy(function(){
	      for (var i = 0; i < this.aExitModules.length; i++){
	      	this.aExitModules[i]();
	      }
	      fAppExit();
			}, this);
		}
		this.aExitModules.push(fExitModule);
	},
	
	setMasterListBinding : function(oController, oBinding){
		if (oController._oMasterListBinding){
			oController._oMasterListBinding.detachChange(oController._onMasterListLoaded, oController);
			oController._oMasterListBinding.detachChange(oController._onMasterListChanged, oController);
		}

		oController._oMasterListBinding = oBinding;
		if (oController._oMasterListBinding){
			oController._oMasterListBinding.attachChange(oController._onMasterListLoaded, oController);
			oController._oMasterListBinding.attachChange(oController._onMasterListChanged, oController);
		}
	},
	
	onChangeDeviceOrientation : function (mParams) {

		var bLandscape = mParams.landscape;
		if (this.oCurController.MasterCtrl)
		  {
			this.oMHFHelper.setHeaderFooter(this.oCurController.MasterCtrl, this.oCurController.MasterCtrl._oHeaderFooterOptions);
		  }
		if (this.oCurController.DetailCtrl)
		  {
			this.oDHFHelper.setHeaderFooter(this.oCurController.DetailCtrl, this.oCurController.DetailCtrl._oHeaderFooterOptions);
		  }
		if (this.oCurController.FullCtrl)
		  {
			this.oFHFHelper.setHeaderFooter(this.oCurController.FullCtrl, this.oCurController.FullCtrl._oHeaderFooterOptions);
		  }		
	},

    /**
     * Store a sap.ui.model instance in a global hashmap for the application.
     * This is used to allow apps to share models between different views.
     * The models will not be assigned to the views automatically but can be retrieved and assigned manually.
     * This is mainly made to have dirty hacks like settings model on sap.ui.getCore() or reading data from the oSplitContainer
     * @param sName {string} The name for the model (must be non null)
     * @param oModel {sap.ui.model.Model} the model to store
     */
    setApplicationModel : function(sName, oModel) {
        if(sName != null) {
            if(this.mApplicationModels.hasOwnProperty(sName)) {
                jQuery.sap.log.warning("There was already an application model defined for the name "+sName+" it will be overwritten");
            }
            this.mApplicationModels[sName] = oModel;
        }
        else {
            jQuery.sap.log.error("You cannot set an application Model with a 'null' name");
        }
    },

    /**
     * Retrieve a model stored in the global hashmap based on its name
     * @param sName {string} the string of the model to retrieve
     */
    getApplicationModel : function(sName) {
        var oModel = null;
        if(this.mApplicationModels.hasOwnProperty(sName)) {
            oModel = this.mApplicationModels[sName];
        }
        return oModel;
    },

    // returns the first non-group item of the master list
    getFirstListItem : function(oController){
  		var oList = oController.getList();
  		var aItems = oList.getItems();
  		for (var i = 0; i < aItems.length; i++){
  			if (!(aItems[i] instanceof sap.m.GroupHeaderListItem)){
  				return aItems[i];
  			}
  		}
  		return null;
    }	
});

