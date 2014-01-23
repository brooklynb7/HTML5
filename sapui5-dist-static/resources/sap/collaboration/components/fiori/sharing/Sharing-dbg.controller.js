/*!
 * @copyright@
 */

sap.ui.controller("sap.collaboration.components.fiori.sharing.Sharing", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* Initialize class variables
* @memberOf Sharing
*/
	onInit: function() {
		this.sPrefixId = this.getView().getViewData().controlId;
		this.oLangBundle = this.getView().getViewData().langBundle;
		this.aJamGroups = this.getView().getViewData().jamGroups;
		this.sObjectShare = this.getView().getViewData().objectShare;
		this.oObjectDisplay = this.getView().getViewData().objectDisplay;
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf Sharing
*/
	onBeforeRendering: function() {
		if (this.aJamGroups.length !== 0){
			this.addFormElement();
			this.processGroupsData();
			this.setViewModel();
			this.bindGroupSelect();
		}
		else{
			this.addNoGroupsMessage();
		}
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf Sharing
*/
	onAfterRendering: function() {
		this.sSelectedGroupId = sap.ui.getCore().byId(this.sPrefixId + "_GroupSelect").getSelectedKey();
		
		//in case the view was rerendered (ie it was created previously and then reused again), we have to reset the field for note
		if(this.sObjectShare){
			sap.ui.getCore().byId(this.sPrefixId + "_NoteTextArea").setValue(this.sObjectShare);
		}
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf Sharing
*/
//	onExit: function() {
//	}
	
	/**
	* Adds Form elements to the VBox in case there are groups
	* @private
	*/
	addFormElement : function() {
		this.getView().oSharingVBox.removeAllItems();
		
		if(this.oObjectDisplay){
			this.getView().oSharingVBox.addItem(
				this.oObjectDisplay
         	);
		}
				
		this.getView().oSharingVBox.addItem(
            this.getView().oGroupSelectionLayout
            );
		
		this.getView().oSharingVBox.addItem(
	        this.getView().oNoteLayout
	        );
	},
	
	/**
	* Adds information message to the VBox in case there are no groups
	* @private
	*/
	addNoGroupsMessage : function() {
		this.getView().oSharingVBox.removeAllItems();
		this.getView().oSharingVBox.addItem(
            this.getView().oNoDataLayout
       	);
	},
	
	/**
	* Processes the group data to append the type of the group to the group name
	* @private
	*/
	processGroupsData : function() {
		for(var i=0; i<this.aJamGroups.length; i++){
			this.aJamGroups[i].Name = this.aJamGroups[i].Name + " (" + this.aJamGroups[i].GroupType + ")";
		}
	},
	
	/**
	* Sets the view model
	* @private
	*/
	setViewModel : function() {
	   	this.oViewData = {
			jamGroups:	this.aJamGroups
		};
	   	
	   	this.oViewModel = new sap.ui.model.json.JSONModel(this.oViewData);
		this.getView().setModel(this.oViewModel);
	},
	
	/**
	* Binds data to the group DDB
	* @private
	*/
	bindGroupSelect : function() {
		var oItemTemplate = new sap.ui.core.Item({
			key: "{Id}",
			text: "{Name}"
		});
		
		sap.ui.getCore().byId(this.sPrefixId + "_GroupSelect").bindItems("/jamGroups", oItemTemplate);
	},
	
	/**
	* Event Handler for the group DDB
	* @private
	*/
	onGroupSelectChange : function(oControlEvent){
		this.sSelectedGroupId = oControlEvent.getParameter("selectedItem").getKey();
	},
	
	/**
	* Gets the form data that can be used by other class to share some info to Jam
	* @private
	*/
	getSharingData : function() {
		var oSharingData = {
				note:		sap.ui.getCore().byId(this.sPrefixId + "_NoteTextArea").getValue(),
				groupId:	this.sSelectedGroupId
		};
		
		return oSharingData;
	}

});