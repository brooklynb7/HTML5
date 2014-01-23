sap.ui.jsview("views.control.objectHeaderTitleSel", {

	createContent : function (oController) {

		// CODESNIP_START
		var header = new sap.m.ObjectHeader({
			title : "{Name}",
			showTitleSelector : true,
			titleSelectorPress : function (evt) {
				selectTitlePopover.openBy(evt.getParameter("domRef"));
				selectTitlePopover.setModel(evt.getSource().getModel());
			},
			number : "{Price}",
			numberUnit : "{CurrencyCode}",
			attributes : [
				new sap.m.ObjectAttribute({
					text : "{Description}"
				}),
				new sap.m.ObjectAttribute({
					text : "{WeightMeasure} {WeightUnit}"
				}),
				new sap.m.ObjectAttribute({
					text : "{Width} x {Depth} X {Height} {DimUnit}"
				})
			]
		});

		var selectTitlePopover = new sap.m.ResponsivePopover({
			placement: sap.m.PlacementType.Bottom,
			title: "Select Product",
			content: [
				new sap.m.List({
					mode: "SingleSelectMaster",
					includeItemInSelection : true,
					select : function (evt) {
						var item = evt.getParameter("listItem");
						header.setTitle(item.getTitle());
						header.setBindingContext(item.getBindingContext());
						selectTitlePopover.close();
					},
					items: {
						path: "/ProductCollection",
						template: new sap.m.StandardListItem({
							title: "{Name}"
						})
					}
				})
			]
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content : [
				header.bindElement("/ProductCollection/0"),
				util.UiFactory.createDescription('This is a Object Header with a title selection. This can be used to switch between variants of the business object', "All")
			]
		});
	}
});