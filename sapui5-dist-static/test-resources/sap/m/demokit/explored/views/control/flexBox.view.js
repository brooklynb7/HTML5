sap.ui.jsview("views.control.flexBox", {

	createContent : function (oController) {

		var widthS = (jQuery.device.is.phone) ? "2em" : "5em";
		var widthM = (jQuery.device.is.phone) ? "4em" : "10em";
		var widthL = (jQuery.device.is.phone) ? "6em" : "15em";

		// CODESNIP_START
		// create content
		var contentA = new sap.m.Image({
			src: "img/product/large_HT-6100.jpg",
			width: widthS,
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});
		var contentB = new sap.m.Image({
			src: "img/product/large_HT-6100.jpg",
			width: widthM,
			layoutData: new sap.m.FlexItemData({growFactor: 2})
		});
		var contentC = new sap.m.Image({
			src: "img/product/large_HT-6100.jpg",
			width: widthL,
			layoutData: new sap.m.FlexItemData({growFactor: 3})
		});
		var contentD = new sap.m.Image({
			src: "img/product/large_HT-6100.jpg",
			width: widthS,
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});
		var contentE = new sap.m.Image({
			src: "img/product/large_HT-6100.jpg",
			width: widthM,
			layoutData: new sap.m.FlexItemData({growFactor: 2})
		});
		var contentF = new sap.m.Image({
			src: "img/product/large_HT-6100.jpg",
			width: widthL,
			layoutData: new sap.m.FlexItemData({growFactor: 3})
		});

		// create boxes
		var hbox = new sap.m.HBox({
			items: [
				contentA,
				contentB,
				contentC
			]
		});
		var vbox = new sap.m.VBox({
			items: [
				contentD,
				contentE,
				contentF
			]
		});
		// CODESNIP_END

		var hlabel = new sap.m.Text({ text: "These items are laid out horizontally" });
		var vlabel = new sap.m.Text({ text: "These items are laid out vertically" });

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content : [
				util.UiFactory.createDescription('The FlexBox implements a CSS Flexible Box Layout which gives control over the way that box items automatically adjust their dimensions to different viewports'),
				hlabel,
				hbox,
				vlabel,
				vbox
			]
		}).addStyleClass("marginVerticalContent");
	}
});