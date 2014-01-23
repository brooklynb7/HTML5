sap.ui.jsview("views.control.listToolbar", {

	createContent : function (oController) {

		// CODESNIP_START
		var fnHandleButtonPress = function (evt) {
			jQuery.sap.require("sap.m.MessageToast");
			sap.m.MessageToast.show("header toolbar button pressed");
		};

		var list = new sap.m.List({
			items: {
				path: "/ProductCollection",
				template: new sap.m.StandardListItem({
					title: "{Name}",
					description: "{ProductId}",
					icon: "{ProductPicUrl}",
					iconInset: false
				})
			},
			headerToolbar: new sap.m.Toolbar({
				content : [
					new sap.m.Label({
						text : "Products"
					}),
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({
						icon: "sap-icon://settings",
						press: fnHandleButtonPress
					}),
					new sap.m.Button({
						icon: "sap-icon://person-placeholder",
						press: fnHandleButtonPress
					}),
					new sap.m.Button({
						icon: "sap-icon://drop-down-list",
						press: fnHandleButtonPress
					})
				]
			}),
			infoToolbar : new sap.m.Toolbar({
				active : true,
				press: function (evt) {
					jQuery.sap.require("sap.m.MessageToast");
					sap.m.MessageToast.show("info toolbar pressed");
				},
				content : [
					new sap.m.Label({
						text : "This is the info bar"
					}),
					new sap.m.ToolbarSpacer(),
					new sap.ui.core.Icon({
						src : "sap-icon://add-filter"
					})
				]
			})
		});
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription(model.Description.listToolbar, 'NoBottom'),
				list
			]
		});
	}
});