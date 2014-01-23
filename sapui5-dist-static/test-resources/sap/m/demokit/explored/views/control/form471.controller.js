sap.ui.controller("views.control.form471", {

	_formFragments: {},

	_getFormFragment: function(sFragmentName) {
		if (!this._formFragments[sFragmentName]) {
			this._formFragments[sFragmentName] = sap.ui.xmlfragment(
				"myprefix",
				this.getView().getControllerName() + "." + sFragmentName
			);
		}
		return this._formFragments[sFragmentName];
	},

	onInit: function(oEvent) {
		// Set the initial form to be the change one
		var oForm = this._getFormFragment("formDisplay");
		this.getView().byId("idFormContainer").insertContent(oForm);
		this.getView().bindElement("/SupplierCollection/0");
	},

	handleFooterBarButtonPress: function(oEvent) {

		// Derive action from the button pressed
		var bEditAction = /idButtonEdit$/.test(oEvent.getSource().getId());

		// Show the appropriate action buttons
		this.getView().byId("idButtonEdit").setVisible(! bEditAction);
		this.getView().byId("idButtonSave").setVisible(bEditAction);
		this.getView().byId("idButtonCancel").setVisible(bEditAction);

		// Set the right form type
		oForm = this._getFormFragment(bEditAction ? "formChange" : "formDisplay");
		var oContainer = this.getView().byId("idFormContainer");
		oContainer.removeContent(0);
		oContainer.insertContent(oForm);
	}

});
