sap.ui.jsview("views.control.objectHeader", {

	createContent : function (oController) {

		// CODESNIP_START
		var header = new sap.m.ObjectHeader({
			title : "{Name}",
			number : "{Price}",
			numberUnit : "{CurrencyCode}",
			statuses : [
				new sap.m.ObjectStatus({
					text : "Some Damaged",
					state : "Error"
				}),
				new sap.m.ObjectStatus({
					text : "In Stock",
					state : "Success"
				})
			],
			attributes : [
				new sap.m.ObjectAttribute({
					text : "{Description}"
				}),
				new sap.m.ObjectAttribute({
					text : "{WeightMeasure} {WeightUnit}"
				}),
				new sap.m.ObjectAttribute({
					text : "{Width} x {Depth} X {Height} {DimUnit}"
				}),
				new sap.m.ObjectAttribute({
					text : "www.sap.com",
					active : true,
					press : function () {
						sap.m.URLHelper.redirect("http://www.sap.com", true);
					}
				})
			],
			markFavorite : true,
			markFlagged : true,
			showMarkers : true
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content : [
				header,
				util.UiFactory.createDescription('This is a Object Header which displays brief information about objects similar to the Object List Item', "All")
			]
		}).bindElement("/ProductCollection/0");
	}
});