sap.ui.controller("views.control.inputAssisted", {

	handleValueHelp : function (oController) {

		// create value help dialog
		// bind to the same model as for the suggested items
		if (!this._valueHelpDialog) {
			this._valueHelpDialog = new sap.m.SelectDialog({
				title: "Products",
				items: {
					path: "/ProductCollection",
					template: new sap.m.StandardListItem({
						icon: "{ProductPicUrl}",
						iconInset: false,
						title: "{Name}",
						description: "{ProductId}"
					})
				},
				search: [ this._handleValueHelpSearch, this ],
				confirm: [ this._handleValueHelpClose, this ],
				cancel: [ this._handleValueHelpClose, this ]
			});
		}

		// open value help dialog
		this._valueHelpDialog.setModel(this.getView().getModel());
		this._valueHelpDialog.open();
	},

	_handleValueHelpSearch : function (evt) {
		var sValue = evt.getParameter("value");
		var oFilter = new sap.ui.model.Filter(
			"Name",
			sap.ui.model.FilterOperator.Contains, sValue
		);
		evt.getSource().getBinding("items").filter([oFilter]);
	},

	_handleValueHelpClose : function (evt) {
		var oSelectedItem = evt.getParameter("selectedItem");
		if (oSelectedItem) {
			var productInput = this.getView().byId("productInput");
			productInput.setValue(oSelectedItem.getTitle());
		}
		evt.getSource().getBinding("items").filter([]);
	}
});