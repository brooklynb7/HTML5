sap.ui.jsview("views.control.scrollContainer", {

	createContent : function (oController) {

		// CODESNIP_START
		var scrollContainer = new sap.m.ScrollContainer({
			content: new sap.m.Image({
				src: "img/product/large_HT-6100.jpg",
				width: (jQuery.device.is.phone) ? "50em" : "100em"
			}),
			height: "100%",
			width: "100%",
			horizontal: true,
			vertical: true
		});
		// CODESNIP_END

		return scrollContainer;
	}
});
