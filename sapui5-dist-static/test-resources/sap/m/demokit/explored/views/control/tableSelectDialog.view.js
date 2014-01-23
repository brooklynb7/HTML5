sap.ui.jsview("views.control.tableSelectDialog", {

	createContent : function (oController) {

		var oTable = util.UiFactory.createStdTable();

		// CODESNIP_START
		// Handling of both confirm and cancel; clear the filter
		var handleClose = function (oEvent) {
			// Gather all possible selected items
			var mSelected = [];
			jQuery.extend(mSelected, [oEvent.getParameter("selectedItem")], oEvent.getParameter("selectedItems"));
			if (mSelected.length) {
				jQuery.sap.require("sap.m.MessageToast");
				sap.m.MessageToast.show("You chose " + mSelected.map(function(item) {
					return item.getCells()[0].getTitle();
				}).join(", "));
			}
			oEvent.getSource().getBinding("items").filter([]);
		};

		this.oTableSelectDialog = new sap.m.TableSelectDialog("idTableSelectDialog", {
			title: "Select Product",
			noDataText: "No Products Found",
			columns: [
				new sap.m.Column({
					width : "12em",
					header: new sap.m.Label({text: "Product"})
				}),
				new sap.m.Column({
					header: new sap.m.Label({text: "Supplier"}),
					minScreenWidth: "Tablet",
					demandPopin: true
				}),
				new sap.m.Column({
					header: new sap.m.Label({text: "Dimensions"}),
					minScreenWidth: "Tablet",
					demandPopin: true,
					hAlign: "Right"
				}),
				new sap.m.Column({
					header: new sap.m.Label({text: "Weight"}),
					minScreenWidth: "Tablet",
					demandPopin: true,
					hAlign: "Center"
				}),
				new sap.m.Column({
					header: new sap.m.Label({text: "Price"}),
					hAlign: "Right"
				})
			],
			items: {
				path: "/ProductCollection",
				sorter: new sap.ui.model.Sorter("Name", false),
				template: new sap.m.ColumnListItem({
					cells: [
						new sap.m.ObjectIdentifier({
							title: "{Name}",
							text: "{ProductId}"
						}),
						new sap.m.Text({
							text: "{SupplierName}"
						}),
						new sap.m.Text({
							text: "{Width} x {Depth} x {Height} {DimUnit}"
						}),
						new sap.m.ObjectNumber({
							number: "{WeightMeasure}",
							unit: "{WeightUnit}",
							state: "{path:'WeightMeasure', formatter: 'util.Formatter.weightState'}"
						}),
						new sap.m.ObjectNumber({
							number: "{Price}",
							unit: "{CurrencyCode}"
						})
					]
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
			text: "Open Table Select Dialog",
			press : function () {
				that.oTableSelectDialog.setModel(that.getModel());
				that.oTableSelectDialog.open();
			}
		});
		// CODESNIP_END

		return new sap.m.Page({
			showHeader: false,
			content: [
				new sap.m.VBox({
					items: [
						oButton,
						util.UiFactory.createDescription('Similar to the Select Dialog, the Table Select Dialog presents selectable items in a table-based dialog, with filter functions. You can have single select or multi select mode.', "OnlyTop")
					]
				})
			]
		}).addStyleClass("marginBoxContent");
	}
});