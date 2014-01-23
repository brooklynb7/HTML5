sap.ui.jsview("views.control.ratingIndicator", {

	createContent : function (oController) {

		// CODESNIP_START
		var ind1 = new sap.m.RatingIndicator({
			maxValue : 8,
			value : 4
		});
		var ind2 = new sap.m.RatingIndicator({
			maxValue : 7,
			value : 3.5
		});
		var ind3 = new sap.m.RatingIndicator({
			maxValue : 6,
			value : 3
		});
		var ind4 = new sap.m.RatingIndicator({
			maxValue : 5,
			value : 2.5
		});
		var ind5 = new sap.m.RatingIndicator({
			maxValue : 4,
			value : 2
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				ind1,
				ind2,
				ind3,
				ind4,
				ind5,
				util.UiFactory.createDescription('A Rating Indicator can be used to both indicate and/or rate a content')
			]
		}).addStyleClass("marginVerticalContent");
	}
});