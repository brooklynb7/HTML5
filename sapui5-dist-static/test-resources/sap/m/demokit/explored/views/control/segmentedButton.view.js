sap.ui.jsview("views.control.segmentedButton", {

	createContent : function (oController) {

		// CODESNIP_START
		
		// create segmented button and put into bar
		var b1 = new sap.m.Button({
			text: "Kids"
		});
		var b2 = new sap.m.Button({
			text: "Adults"
		});
		var b3 = new sap.m.Button({
			text: "Seniors"
		});
		var subHeader = new sap.m.Bar({
			contentMiddle: new sap.m.SegmentedButton({
				buttons: [ b1, b2, b3 ],
				selectedButton: b1
			})
		});

		// create segmented button with text
		var b4 = new sap.m.Button({
			text: "Map"
		});
		var b5 = new sap.m.Button({
			text: "Satellite"
		});
		var b6 = new sap.m.Button({
			text: "Hybrid"
		});
		var segmentedText = new sap.m.SegmentedButton({
			buttons: [ b4, b5, b6 ],
			selectedButton: b5
		});

		// create segmented button with icons
		var b7 = new sap.m.Button({
			icon: "sap-icon://taxi"
		});
		var b8 = new sap.m.Button({
			icon: "sap-icon://lab"
		});
		var b9 = new sap.m.Button({
			icon: "sap-icon://competitor"
		});
		var segmentedIcon = new sap.m.SegmentedButton({
			buttons: [ b7, b8, b9 ],
			selectedButton: b9
		});

		// create segmented button and put into bar
		var b10 = new sap.m.Button({
			text: "Small"
		});
		var b11 = new sap.m.Button({
			text: "Medium"
		});
		var b12 = new sap.m.Button({
			text: "Large"
		});
		var footer = new sap.m.Bar({
			contentMiddle: new sap.m.SegmentedButton({
				buttons: [ b10, b11, b12 ],
				selectedButton: b10
			})
		});
		// CODESNIP_END

		return new sap.m.Page({
			showHeader: false,
			subHeader: subHeader,
			footer: footer,
			content: [
				new sap.m.VBox({
					width : "100%",
					alignItems : "Center",
					items: [
						segmentedText,
						segmentedIcon.addStyleClass("marginOnlyTop"),
						util.UiFactory.createDescription('The Segmented Button allows the user to pick one out of many options for displaying the content of the current page. It is a characteristic UI pattern of the iOS platform which is now also available for other platforms. Putting the SegmentedButton to a Bar control on non-iOS platforms will result in something very close to a tab', "OnlyTop")
					]
				})
			]
		}).addStyleClass("marginBoxContent");
	}
});
