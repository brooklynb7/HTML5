sap.ui.jsview("views.control.selectDialog", {

	createContent : function (oController) {

		// CODESNIP_START
		// Handling of both confirm and cancel; clear the filter
		var handleClose = function (oEvent) {
			var oSelectedItem = oEvent.getParameter("selectedItem");
			jQuery.sap.require("sap.m.MessageToast");
			if (oSelectedItem) {
				sap.m.MessageToast.show("You have chosen " + oSelectedItem.getTitle());
			}
			oEvent.getSource().getBinding("items").filter([]);
		};

		var oSelectDialog = new sap.m.SelectDialog({
			title: "Select Product",
			noDataText: "No Products Found",
			items: {
				path: "/ProductCollection",
				template: new sap.m.StandardListItem({
					title: "{Name}",
					description: "{ProductId}",
					icon: "{ProductPicUrl}",
					iconInset: false
				})
			},
			search: function (oEvt) {
				var sValue = oEvt.getParameter("value");
				var oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, sValue);
				var oBinding = oEvt.getSource().getBinding("items");
				oBinding.filter([oFilter]);
			},
			confirm: handleClose,
			cancel: handleClose
		});

		var that = this;

		var oButton = new sap.m.Button({
			text: "Open Select Dialog",
			press : function () {
				oSelectDialog.setModel(that.getModel());
				oSelectDialog.open();
			}
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				oButton,
				util.UiFactory.createDescription('The Select Dialog allows to search for and pick an item from a possibly long option list. Basically it is a convenience functionality to quickly assemble a Dialog, a Search Field and a List with Standard List Items')
			]
		}).addStyleClass("marginAll marginVerticalContent");
	}
});