sap.ui.jsview("views.control.listItemInput", {

	createContent : function (oController) {

		// CODESNIP_START
		var list = new sap.m.List({
			headerText: "Input",
			items: [
				new sap.m.InputListItem({
					label: "WLAN",
					content: new sap.m.Switch({
						state: true
					})
				}),
				new sap.m.InputListItem({
					label: "Flight Mode",
					content: new sap.m.CheckBox({
						selected: true
					})
				}),
				new sap.m.InputListItem({
					label: "High Performance",
					content: new sap.m.RadioButton({
						groupName: "GroupInputListItem",
						selected: true
					})
				}),
				new sap.m.InputListItem({
					label: "Battery Saving",
					content: new sap.m.RadioButton({
						groupName: "GroupInputListItem"
					})
				}),
				new sap.m.InputListItem({
					label: "Price (EUR)",
					content: new sap.m.Input({
						placeholder: "Price",
						value: "799",
						type: sap.m.InputType.Number
					})
				}),
				new sap.m.InputListItem({
					label: "Address",
					content: new sap.m.Input({
						placeholder: "Address",
						value: "Kensington Road 7, 03101 Manchester",
						type: sap.m.InputType.Text
					})
				}),
				new sap.m.InputListItem({
					label: "Country",
					content: new sap.m.Select({
						items: [
							new sap.ui.core.Item({key: "GR", text: "Greece"}),
							new sap.ui.core.Item({key: "MX", text: "Mexico"}),
							new sap.ui.core.Item({key: "NO", text: "Norway"}),
							new sap.ui.core.Item({key: "NZ", text: "New Zealand"}),
							new sap.ui.core.Item({key: "NL", text: "Netherlands"})
						]
					})
				}),
				new sap.m.InputListItem({
					label: "Volume",
					content: new sap.m.Slider({
						min: 0,
						max: 10,
						value: 7,
						width: "200px"
					})
				})
			]
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription('Use the Input List Item on phones to build form like user interfaces.', 'NoBottom'),
				list
			]
		});
	}
});