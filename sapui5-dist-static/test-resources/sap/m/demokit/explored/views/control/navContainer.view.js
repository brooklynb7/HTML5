sap.ui.jsview("views.control.navContainer", {

	createContent : function (oController) {

		// CODESNIP_START

		// create select to choose animation
		var select = new sap.m.Select({
			items: [
				new sap.ui.core.Item({text: "Slide Animation", key: "slide"}),
				new sap.ui.core.Item({text: "Fade Animation", key: "fade"}),
				new sap.ui.core.Item({text: "Flip Animation", key: "flip"}),
				new sap.ui.core.Item({text: "Show Animation", key: "show"})
			],
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});

		// create nav container
		var navCon = new sap.m.NavContainer({
			pages: [
				new sap.m.Page('p1', {
					title: "Page 1",
					enableScrolling: false,
					content: new sap.m.Image({
						src: "img/product/large_HT-6100.jpg"
					})
				}),
				new sap.m.Page('p2', {
					title: "Page 2",
					enableScrolling: false,
					content: new sap.m.Image({
						src: "img/product/large_HT-1073.jpg"
					})
				}),
				new sap.m.Page('p3', {
					title: "Page 3",
					enableScrolling: false,
					content: new sap.m.Image({
						src: "img/product/large_HT-1112.jpg"
					})
				}),
				new sap.m.Page('p4', {
					title: "Page 4",
					enableScrolling: false,
					content: new sap.m.Image({
						src: "img/product/large_HT-1063.jpg"
					})
				})
			],
			width: "98%",
			height: "16em"
		});

		// create buttons
		var b1 = new sap.m.Button({
			text: "To 1",
			press: function () {
				navCon.to('p1', select.getSelectedItem().getKey()); 
			},
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});
		var b2 = new sap.m.Button({
			text: "To 2",
			press: function () {
				navCon.to('p2', select.getSelectedItem().getKey());
			},
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});
		var b3 = new sap.m.Button({
			text: "To 3",
			press: function () {
				navCon.to('p3', select.getSelectedItem().getKey());
			},
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});
		var b4 = new sap.m.Button({
			text: "To 4",
			press: function () {
				navCon.to('p4', select.getSelectedItem().getKey());
			},
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});
		var b5 = new sap.m.Button({
			text: "Back",
			type: sap.m.ButtonType.Back,
			press: function () {
				navCon.back(); 
			},
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});
		// CODESNIP_END

		// create page
		return new sap.m.VBox({
			items: [
				navCon.addStyleClass("navContainerControl"),
				new sap.m.HBox({
					items: [
						b1,
						b2,
						b3,
						b4
					]
				}),
				new sap.m.HBox({
					items: [
						b5,
						select
					]
				}),
				util.UiFactory.createDescription('The Nav Container stacks multiple pages and offers an API to switch between them with some animation. Typically application developers use the App control which inherits from NavContainer.')
			]
		}).addStyleClass("marginBoxContent");
	}
});