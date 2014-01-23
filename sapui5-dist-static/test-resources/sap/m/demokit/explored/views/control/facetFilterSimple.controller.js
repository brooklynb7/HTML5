sap.ui.controller("views.control.facetFilterSimple", {

	_applyFilter: function(oFilter) {
		// Get the table (last thing in the VBox) and apply the filter
		var aVBoxItems = this.getView().byId("idVBox").getItems();
		var oTable = aVBoxItems[aVBoxItems.length-1];
		oTable.getBinding("items").filter(oFilter);
	},

	onInit: function() {
		// Append demo table into VBox, making a minor modification
		// to the first column so that the Category information is shown
		var oTable = util.UiFactory.createStdTable();
		var oBindingInfo = oTable.getBindingInfo("items");
		oBindingInfo.template.removeCell(0);
		oBindingInfo.template.insertCell(new sap.m.ObjectIdentifier({
			title: "{Name}",
			text: "{Category}"
		}));
		oTable.bindItems(oBindingInfo);
		this.getView().byId("idVBox").addItem(oTable);
	},

	handleFacetFilterReset: function(oEvent) {
		var oFacetFilter = sap.ui.getCore().byId(oEvent.getParameter("id"));
		var aFacetFilterLists = oFacetFilter.getLists();
		for(var i=0; i < aFacetFilterLists.length; i++) {
			var aItems = aFacetFilterLists[i].getItems();
			for(var j=0; j < aItems.length; j++) {
				aItems[j].setSelected(false);
			}
		}
		this._applyFilter([]);
	},

	handleListClose: function(oEvent) {
		// Get the Facet Filter lists and construct a (nested) filter for the binding
		var mFacetFilterLists = sap.ui.getCore().byId(oEvent.getParameter("id")).getParent().getLists()
			.filter(function(oList) {
				return oList.getActive() && oList.getSelectedItems().length;
			});

		// Build the nested filter with ORs between the values of each group and
		// ANDs between each group
		var oFilter = new sap.ui.model.Filter(mFacetFilterLists.map(function(oList) {
			return new sap.ui.model.Filter(oList.getSelectedItems().map(function(oItem) {
				return new sap.ui.model.Filter(oList.getTitle(), "EQ", oItem.getText());
			}), false);
		}), true);

		this._applyFilter(oFilter);

	}

});




