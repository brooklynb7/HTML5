sap.ui.jsview("views.control.form", {

	createContent : function (oController) {

		// CODESNIP_START
		var simpleForm = new sap.ui.layout.form.SimpleForm({
			minWidth : 1024,
			maxContainerCols : 2,
			title: new sap.ui.core.Title({
				text: "Address"
			}),
			content : [
				new sap.m.Label({
					text: 'Name'
				}),
				new sap.m.Text({
					text: 'SAP Germany'
				}),
				new sap.m.Label({
					text: 'Street'
				}),
				new sap.m.Text({
					text: 'Dietmar-Hopp-Allee 16'
				}),
				new sap.m.Label({
					text: 'City'
				}),
				new sap.m.Text({
					text: '69190 Walldorf'
				}),
				new sap.m.Label({
					text: 'Country'
				}),
				new sap.m.Text({
					text: 'Germany'
				})
			]
		});

		var editableSimpleForm = new sap.ui.layout.form.SimpleForm({
			editable: true,
			minWidth : 1024,
			maxContainerCols : 2,
			title: new sap.ui.core.Title({
				text: "Address"
			}),
			content : [
				new sap.m.Label({
					text: 'Name'
				}),
				new sap.m.Input({
					value: 'SAP Germany'
				}),
				new sap.m.Label({
					text: 'Street'
				}),
				new sap.m.Input({
					value: 'Dietmar-Hopp-Allee 16'
				}),
				new sap.m.Label({
					text: 'City'
				}),
				new sap.m.Input({
					value: '69190 Walldorf'
				}),
				new sap.m.Label({
					text: 'Country'
				}),
				new sap.m.Input({
					value: 'Germany'
				})
			]
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width : "100%",
			content : [
				util.UiFactory.createDescription(model.Description.form, 'NoBottom'),
				simpleForm,
				editableSimpleForm
			]
		});
	}
});