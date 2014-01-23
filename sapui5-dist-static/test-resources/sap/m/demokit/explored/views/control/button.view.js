sap.ui.jsview("views.control.button", {

	createContent : function (oController) {

		// CODESNIP_START
		// define handler for fnPress events
		var fnPress = function (evt) {
			jQuery.sap.require("sap.m.MessageToast");
			sap.m.MessageToast.show(evt.getSource().getText() + " Pressed");
		};

		// create page
		var oPage = new sap.m.Page({
			title: "Page",
			enableScrolling: false,
			subHeader: new sap.m.Bar({
				contentMiddle : [
					new sap.m.Button({
						text: "Default",
						press: fnPress
					}),
					new sap.m.Button({
						type: "Reject",
						text: "Reject",
						press: fnPress
					}),
					new sap.m.Button({
						icon: "sap-icon://action",
						press: fnPress
					})
				]
			}),
			content: [
				new sap.m.HBox({
					items: [
						new sap.m.Button({
							text: "Default",
							press: fnPress,
							layoutData: new sap.m.FlexItemData({growFactor: 1})
						}),
						new sap.m.Button({
							text: "Accept",
							type: sap.m.ButtonType.Accept,
							press: fnPress,
							layoutData: new sap.m.FlexItemData({growFactor: 1})
						}),
						new sap.m.Button({
							text: "Reject",
							type: sap.m.ButtonType.Reject,
							press: fnPress,
							layoutData: new sap.m.FlexItemData({growFactor: 1})
						})
					]
				}),
				util.UiFactory.createDescription('Buttons trigger user actions and come in a variety of shapes and colors. Putting a button to a page header or footer changes its appearance')
			],
			headerContent: [
				new sap.m.Button({ 
					icon: "sap-icon://action",
					press: fnPress
				})
			],
			footer: new sap.m.Bar({
				contentMiddle: [
					new sap.m.Button({
						text: "Default",
						press: fnPress
					}),
					new sap.m.Button({
						text: "Emphasized",
						type: sap.m.ButtonType.Emphasized,
						press: fnPress
					}),
					new sap.m.Button({
						icon: "sap-icon://action",
						press: fnPress
					})
				]
			})
		}).addStyleClass("marginBoxContent");
		// CODESNIP_END

		return oPage;
	}
});