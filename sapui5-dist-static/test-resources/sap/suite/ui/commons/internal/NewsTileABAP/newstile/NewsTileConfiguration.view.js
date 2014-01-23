sap.ui.jsview("WebContent.newstile.NewsTileConfiguration", {

	getControllerName : function() {

		return "WebContent.newstile.NewsTileConfiguration";
	},

	createFormElement : function(sLabel, oField) {

		var oFormElement = new sap.ui.commons.form.FormElement({
			label : new sap.ui.commons.Label({
				text : sLabel,
				width : "100%",
				layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
					weight : 1
				})
			}),
			fields : [ oField ],
			layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
				linebreak : true,
				margin : false
			})
		});

		return oFormElement;
	},

	createTextField : function(sId, fnChange) {

		var oTextField = new sap.ui.commons.TextField(this.createId(sId), {
			layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
				weight : 4
			})
		});

		if (fnChange) {
			oTextField.attachChange(fnChange);
		}

		return oTextField;
	},

	createRefreshIntervalDropdownBox : function(sId) {

		var oChipApi = this.getViewData().chip;

		var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
		var oBundle = jQuery.sap.resources({
			url : oChipApi.url.toAbsoluteUrl("newstile/news_tile_configuration.properties"),
			locale : sLocale
		});
		var oRiDropdownBox = new sap.ui.commons.DropdownBox(this.createId(sId), {
			layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
				weight : 4
			})
		});

		var oItem = new sap.ui.core.ListItem();
		oItem.setText(oBundle.getText("REFRESH_INTERVAL_ONE_ITEM"));
		oRiDropdownBox.addItem(oItem);
		oItem = new sap.ui.core.ListItem();
		oItem.setText(oBundle.getText("REFRESH_INTERVAL_TWO_ITEM"));
		oRiDropdownBox.addItem(oItem);
		oItem = new sap.ui.core.ListItem();
		oItem.setText(oBundle.getText("REFRESH_INTERVAL_THREE_ITEM"));
		oRiDropdownBox.addItem(oItem);
		oItem = new sap.ui.core.ListItem();
		oItem.setText(oBundle.getText("REFRESH_INTERVAL_FOUR_ITEM"));
		oRiDropdownBox.addItem(oItem);
		oItem = new sap.ui.core.ListItem();
		oItem.setText(oBundle.getText("REFRESH_INTERVAL_FIVE_ITEM"));
		oRiDropdownBox.addItem(oItem);

		return oRiDropdownBox;
	},

	createCheckBox : function(sId) {

		var oCheckBox = new sap.ui.commons.CheckBox(this.createId(sId), {
			layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
				weight : 4
			})
		});

		return oCheckBox;
	},

	createButtonElement : function(sId, sLabel, fnPress) {

		var oButton = new sap.ui.commons.Button(this.createId(sId), {
			text : sLabel,
			width : "auto",
			layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
				weight : 4
			})
		});

		if (fnPress) {
			oButton.attachPress(fnPress);
		}

		var oFormElement = new sap.ui.commons.form.FormElement({
			fields : [ oButton ],
			layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
				linebreak : true,
				margin : false
			})
		});

		return oFormElement;
	},

	createContent : function(oController) {

		var oChipApi = this.getViewData().chip;
		var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
		var oBundle = jQuery.sap.resources({
			url : oChipApi.url.toAbsoluteUrl("newstile/news_tile_configuration.properties"),
			locale : sLocale
		});
		var oLayout = new sap.ui.commons.form.ResponsiveLayout();

		var oForm1 = new sap.ui.commons.form.Form(this.createId("newsTileConfigForm"), {
			layout : oLayout,
			formContainers : [
					new sap.ui.commons.form.FormContainer(this.createId("general-fc"), {
						title : new sap.ui.commons.Title({
							text : oBundle.getText("GENERAL_HEADER")
						}),
						formElements : [ this.createFormElement(oBundle.getText("DEFAULT_IMAGE_LABEL"), this.createTextField('defaultImage', function() {

							oController.validateUrlTextField(this);
						})), this.createFormElement(oBundle.getText("USE_DEFAULT_IMAGE_LABEL"), this.createCheckBox('useDefaultImage')),
								this.createFormElement(oBundle.getText("CYCLE_INTERVAL_LABEL"), this.createTextField('cycleInterval', function() {

									oController.validateCycleInterval(this);
								})), this.createFormElement(oBundle.getText("REFRESH_INTERVAL_LABEL"), this.createRefreshIntervalDropdownBox('refreshInterval')) ],
						layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
							linebreak : true
						})
					}),
					new sap.ui.commons.form.FormContainer(this.createId("articleFeedsFc"), {
						title : new sap.ui.commons.Title({
							text : oBundle.getText("FEEDS_HEADER")
						}),
						formElements : [ this.createFormElement(oBundle.getText("FEED_ONE_LABEL"), this.createTextField('feed1', function() {

							oController.validateUrlTextField(this);
						})), this.createFormElement(oBundle.getText("FEED_TWO_LABEL"), this.createTextField('feed2', function() {

							oController.validateUrlTextField(this);
						})), this.createFormElement(oBundle.getText("FEED_THREE_LABEL"), this.createTextField('feed3', function() {

							oController.validateUrlTextField(this);
						})), this.createFormElement(oBundle.getText("FEED_FOUR_LABEL"), this.createTextField('feed4', function() {

							oController.validateUrlTextField(this);
						})), this.createFormElement(oBundle.getText("FEED_FIVE_LABEL"), this.createTextField('feed5', function() {

							oController.validateUrlTextField(this);
						})), this.createFormElement(oBundle.getText("FEED_SIX_LABEL"), this.createTextField('feed6', function() {

							oController.validateUrlTextField(this);
						})), this.createFormElement(oBundle.getText("FEED_SEVEN_LABEL"), this.createTextField('feed7', function() {

							oController.validateUrlTextField(this);
						})), this.createFormElement(oBundle.getText("FEED_EIGHT_LABEL"), this.createTextField('feed8', function() {

							oController.validateUrlTextField(this);
						})), this.createFormElement(oBundle.getText("FEED_NINE_LABEL"), this.createTextField('feed9', function() {

							oController.validateUrlTextField(this);
						})), this.createFormElement(oBundle.getText("FEED_TEN_LABEL"), this.createTextField('feed10', function() {

							oController.validateUrlTextField(this);
						})) ],
						layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
							linebreak : true
						})
					}),
					new sap.ui.commons.form.FormContainer(this.createId("inclusionFiltersFc"), {
						title : new sap.ui.commons.Title({
							text : oBundle.getText("INCLUSION_FILTERS_HEADER")
						}),
						formElements : [ this.createFormElement(oBundle.getText("INCLUSION_FILTER_ONE_LABEL"), this.createTextField('iFilter1')),
								this.createFormElement(oBundle.getText("INCLUSION_FILTER_TWO_LABEL"), this.createTextField('iFilter2')),
								this.createFormElement(oBundle.getText("INCLUSION_FILTER_THREE_LABEL"), this.createTextField('iFilter3')),
								this.createFormElement(oBundle.getText("INCLUSION_FILTER_FOUR_LABEL"), this.createTextField('iFilter4')),
								this.createFormElement(oBundle.getText("INCLUSION_FILTER_FIVE_LABEL"), this.createTextField('iFilter5')) ],
						layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
							linebreak : true
						})

					}),
					new sap.ui.commons.form.FormContainer(this.createId("exclusionFiltersFc"), {
						title : new sap.ui.commons.Title({
							text : oBundle.getText("EXCLUSION_FILTERS_HEADER")
						}),
						formElements : [ this.createFormElement(oBundle.getText("EXCLUSION_FILTER_ONE_LABEL"), this.createTextField('eFilter1')),
								this.createFormElement(oBundle.getText("EXCLUSION_FILTER_TWO_LABEL"), this.createTextField('eFilter2')),
								this.createFormElement(oBundle.getText("EXCLUSION_FILTER_THREE_LABEL"), this.createTextField('eFilter3')),
								this.createFormElement(oBundle.getText("EXCLUSION_FILTER_FOUR_LABEL"), this.createTextField('eFilter4')),
								this.createFormElement(oBundle.getText("EXCLUSION_FILTER_FIVE_LABEL"), this.createTextField('eFilter5')) ],
						layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
							linebreak : true
						})
					}) ]

		});

		oController.readConfiguration();

		return oForm1;
	}
});