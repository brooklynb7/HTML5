sap.ui.jsview("views.control.listNoData", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			headerText : "Products",
			noDataText : "No products found",
			items : []
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription(model.Description.listNoData, 'NoBottom'),
				list
			]
		});
	}
});