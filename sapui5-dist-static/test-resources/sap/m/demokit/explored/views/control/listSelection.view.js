sap.ui.jsview("views.control.listSelection", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			mode: sap.m.ListMode.MultiSelect,
			includeItemInSelection: true,
			items: {
				path: "/ProductCollection",
				template: new sap.m.StandardListItem({
					title: "{Name}",
					description: "{ProductId}",
					icon: "{ProductPicUrl}",
					iconInset: false
				})
			},
			headerToolbar : new sap.m.Toolbar({
				content: [
					new sap.m.Label({ text: "Products" }),
					new sap.m.ToolbarSpacer({}),
					new sap.m.Select({
						selectedKey: sap.m.ListMode.MultiSelect,
						items: [
							new sap.ui.core.Item({key: sap.m.ListMode.None, text: "No Selection"}),
							new sap.ui.core.Item({key: sap.m.ListMode.SingleSelect, text: "Single Selection"}),
							new sap.ui.core.Item({key: sap.m.ListMode.SingleSelectLeft, text: "Single Selection Left"}),
							new sap.ui.core.Item({key: sap.m.ListMode.SingleSelectMaster, text: "Single Selection (Master)"}),
							new sap.ui.core.Item({key: sap.m.ListMode.MultiSelect, text: "Multi Selection"})
						],
						change: function (evt) {
							var mode = evt.getParameter("selectedItem").getKey();
							list.setMode(mode);
						}
					})
				]
			})
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription('"Single selection" forces the user to choose exactly one out of many items. With the "multi" selection the user can pick multiple items at the same time. This is helpful for e.g. batch processing. With "includeItem" the selection is also changed when pressing the item', 'NoBottom'),
				list
			]
		});
	}
});