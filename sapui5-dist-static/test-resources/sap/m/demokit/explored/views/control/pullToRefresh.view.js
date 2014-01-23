sap.ui.jsview("views.control.pullToRefresh", {

	createContent : function (oController) {

		// CODESNIP_START
		var label = new sap.m.Label({
			text : "Status: 12 Products have been sold"
		});

		var pull = new sap.m.PullToRefresh({
			description: "Last Updated 3 Weeks Ago",
			refresh: function () {
				pull.setDescription("");
				setTimeout(function () {
					label.setText("Status: 355 Products have been sold");
					pull.hide();
					pull.setDescription("Last Updated Today");
				}, 2000);
			}
		});
		// CODESNIP_END

		return new sap.m.Page({
			title: "Page",
			content: [
				pull,
				new sap.m.VBox({
					items : [
						label,
						util.UiFactory.createDescription("With the Pull to Refresh you can elegantly trigger an update operation by swiping the current page down")
					]
				}).addStyleClass("marginBoxContent")
			]
		});
	}
});
