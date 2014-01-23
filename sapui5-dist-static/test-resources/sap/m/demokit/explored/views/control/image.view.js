sap.ui.jsview("views.control.image", {

	createContent : function (oController) {

		// CODESNIP_START
		var image1 = new sap.m.Image({
			src: "img/product/large_HT-1112.jpg",
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});

		var image2 = new sap.m.Image({
			src: "img/product/large_HT-1073.jpg",
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});

		var image3 = new sap.m.Image({
			src: "img/product/large_HT-6100.jpg",
			activeSrc: "img/product/large_HT-6100_active.jpg",
			press: function () {
				jQuery.sap.require("sap.m.MessageToast");
				sap.m.MessageToast.show("The image has been pressed");
			},
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});
		// CODESNIP_END

		return new sap.m.VBox({
			items : [
				new sap.m.HBox({
					items: [
						image1.setWidth((jQuery.device.is.phone) ? "5em" : "10em"),
						image2.setWidth((jQuery.device.is.phone) ? "5em" : "10em"),
						image3.setWidth((jQuery.device.is.phone) ? "5em" : "10em")
					]
				}),
				util.UiFactory.createDescription("Images are faster than words and attract people's attention. Images can also have an active state like the last image in this exmample.")
			]
		}).addStyleClass("marginBoxContent");
	}
});