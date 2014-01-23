sap.ui.jsview("views.control.inputAssisted", {

	createContent : function (oController) {

		// CODESNIP_START
		var label = new sap.m.Label({
			text: 'Product'
		});

		// Create the input field, binding the suggested items to the
		// product objects in the data model
		var input = new sap.m.Input({
			type: sap.m.InputType.Text,
			placeholder: 'Enter Product ...',
			showSuggestion: true,
			suggestionItems: {
				path: "/ProductCollection",
				template: new sap.ui.core.Item({
					text: "{Name}"
				})
			},
			showValueHelp: true,
			valueHelpRequest: function (evt) {

				// Handling of both confirm and cancel; clear the filter
				handleClose = function (evt) {
					var oSelectedItem = evt.getParameter("selectedItem");
					if (oSelectedItem) {
						input.setValue(oSelectedItem.getTitle());
					}
					evt.getSource().getBinding("items").filter([]);
				};

				// Create a SelectDialog and display it; bind to the same
				// model as for the suggested items
				if (!this._valueHelpSelectDialog) {
					this._valueHelpSelectDialog = new sap.m.SelectDialog({
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
						search: function (evt) {
							var sValue = evt.getParameter("value");
							var oFilter = new sap.ui.model.Filter(
								"Name",
								sap.ui.model.FilterOperator.Contains, sValue
							);
							evt.getSource().getBinding("items").filter([oFilter]);
						},
						confirm: handleClose,
						cancel: handleClose
					});
				}

				// open dialog
				this._valueHelpSelectDialog.setModel(this.getModel());
				this._valueHelpSelectDialog.open();
			}
		});
		// CODESNIP_END

		return new sap.m.VBox({
			items: [
				label,
				input,
				util.UiFactory.createDescription(model.Description.inputAssisted, "OnlyTop")
			]
		}).addStyleClass("marginBoxContent");
	}
});