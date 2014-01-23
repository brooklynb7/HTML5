sap.ui.jsview("views.control.tableViewSettingsDialog", {

	createContent : function (oController) {

		var oTable = util.UiFactory.createStdTable();

		// CODESNIP_START

		// create functions for grouping data
		var mGroupFunctions = {
			SupplierName : function (oContext) {
				var name = oContext.getProperty("SupplierName");
				return {
					key: name,
					text: name
				};
			},
			Price : function (oContext) {
				var price = oContext.getProperty("Price");
				var currencyCode = oContext.getProperty("CurrencyCode");
				var key, text;
				if (price <= 100) {
					key = "LE100";
					text = "Less Than 100 " + currencyCode;
				} else if (price <= 1000) {
					key = "BT100-1000";
					text = "Between 100 and 1000 " + currencyCode;
				} else {
					key = "GT1000";
					text = "More Than 1000 " + currencyCode;
				}
				return {
					key: key,
					text: text
				};
			}
		};

		// create dialog
		var oVSDialog = new sap.m.ViewSettingsDialog({
			sortItems : [
				new sap.m.ViewSettingsItem({
					text : "Product",
					key : "Name",
					selected: true
				}),
				new sap.m.ViewSettingsItem({
					text : "Supplier",
					key : "SupplierName"
				}),
				new sap.m.ViewSettingsItem({
					text : "Weight",
					key : "WeightMeasure"
				}),
				new sap.m.ViewSettingsItem({
					text : "Price",
					key : "price"
				})
			],
			groupItems : [
				new sap.m.ViewSettingsItem({
					text : "Supplier",
					key : "SupplierName"
				}),
				new sap.m.ViewSettingsItem({
					text : "Price",
					key : "Price"
				})
			],
			filterItems : [
				new sap.m.ViewSettingsFilterItem({
					text : "Weight",
					key : "WeightMeasure",
					multiSelect: false,
					items : [
						new sap.m.ViewSettingsItem({
							text : "Less Than 1000",
							key : "WeightMeasure___LE___1000___X"
						}),
						new sap.m.ViewSettingsItem({
							text : "Between 1000 and 2000",
							key : "WeightMeasure___BT___1000___2000"
						}),
						new sap.m.ViewSettingsItem({
							text : "More Than 2000",
							key : "WeightMeasure___GT___2000___X"
						})
					]
				}),
				new sap.m.ViewSettingsFilterItem({
					text : "Price",
					key : "Price",
					multiSelect: false,
					items : [
						new sap.m.ViewSettingsItem({
							text : "Less Than 100",
							key : "Price___LE___100___X"
						}),
						new sap.m.ViewSettingsItem({
							text : "Between 100 and 1000",
							key : "Price___BT___100___1000"
						}),
						new sap.m.ViewSettingsItem({
							text : "More Than 1000",
							key : "Price___GT___1000___X"
						})
					]
				})
			],
			confirm : function (evt) {
				
				var mParams = evt.getParameters();
				var oBinding = oTable.getBinding("items");
				
				// apply sorter to binding
				// (grouping comes before sorting)
				var aSorters = [];
				if (mParams.groupItem) {
					var sPath = mParams.groupItem.getKey();
					var bDescending = mParams.groupDescending;
					var vGroup = mGroupFunctions[sPath];
					aSorters.push(new sap.ui.model.Sorter(sPath, bDescending, vGroup));
				}
				var sPath = mParams.sortItem.getKey();
				var bDescending = mParams.sortDescending;
				aSorters.push(new sap.ui.model.Sorter(sPath, bDescending));
				oBinding.sort(aSorters);
				
				// apply filters to binding
				var aFilters = [];
				jQuery.each(mParams.filterItems, function (i, oItem) {
					var aSplit = oItem.getKey().split("___");
					var sPath = aSplit[0];
					var sOperator = aSplit[1];
					var sValue1 = aSplit[2];
					var sValue2 = aSplit[3];
					var oFilter = new sap.ui.model.Filter(sPath, sOperator, sValue1, sValue2);
					aFilters.push(oFilter);
				});
				oBinding.filter(aFilters);
				
				// update filter bar
				sap.ui.getCore().byId("vsdFilterBar").setVisible(aFilters.length > 0);
				sap.ui.getCore().byId("vsdFilterLabel").setText(mParams.filterString);
			}
		});

		// add a button to the table header for opening the dialog
		oTable.setHeaderToolbar(
			new sap.m.Toolbar({
				content: [
					new sap.m.Label({
						text: "Products"
					}),
					new sap.m.ToolbarSpacer({}),
					new sap.m.Button({
						icon: "sap-icon://drop-down-list",
						press: function (evt) {
							oVSDialog.open();
						}
					})
				]
			})
		);
		
		// add a info bar to the table for showing the filter state
		oTable.setInfoToolbar(
			new sap.m.Toolbar("vsdFilterBar", {
				active : true,
				visible : false,
				press: function (evt) {
					oVSDialog.open();
				},
				content : [
					new sap.m.Label("vsdFilterLabel", {
						text : "?"
					}),
					new sap.m.ToolbarSpacer(),
					new sap.ui.core.Icon({
						src : "sap-icon://add-filter"
					})
				]
			})
		);
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription("The View Settings Dialog is standard UI pattern for specifying sorting, grouping and filtering. For a table it should be triggered by a button in the table header with the 'drop-down-list' icon. The active filter should be shown with the table's info bar including an 'add-filter' icon", 'NoBottom'),
				oTable
			]
		});
	}
});