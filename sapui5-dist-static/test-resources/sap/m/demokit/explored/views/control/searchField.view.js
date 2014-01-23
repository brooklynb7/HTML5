sap.ui.jsview("views.control.searchField", {

	createContent : function (oController) {

		var description = util.UiFactory.createDescription('Use the Search Field to let the user enter a search input and trigger the search process', "OnlyTop");

		// CODESNIP_START
		var searchPage = new sap.m.Page({
			subHeader: new sap.m.Bar({
				contentMiddle: [
					new sap.m.SearchField({
						placeholder: "Search",
						width: "100%"
					})
				]
			}),
			content: [
				new sap.m.SearchField({
					placeholder: "Search"
				}),
				description
			]
		}).addStyleClass("marginBoxContent");
		// CODESNIP_END

		return searchPage.setShowHeader(false);
	}
});