sap.ui.jsview("launchtile.LaunchTileConfiguration", {

	getControllerName : function() {

		return "launchtile.LaunchTileConfiguration";
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

	createTextField : function(sId, fChange) {

		var oTextField = new sap.ui.commons.TextField(this.createId(sId), {
			layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
				weight : 4
			})
		});

		if (fChange) {
			oTextField.attachChange(fChange);
		}

		return oTextField;
	},

	createButtonElement : function(sId, sLabel, fPress) {

		var oButton = new sap.ui.commons.Button(this.createId(sId), {
			text : sLabel,
			width : "auto",
			layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
				weight : 4
			})
		});

		if (fPress) {
			oButton.attachPress(fPress);
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

	createSemanticObjDropDown : function(sId) {

		var oSemanticObjDropDown = new sap.ui.commons.DropdownBox(this.createId(sId), {
			layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
				weight : 4
			})
		});

		oSemanticObjDropDown.setEditable(true);

		var oSemanticObjList = [];

		// Change URL and remove username/password as the service is on same server
		var sUrl = "http://localhost:8080/uilib-sample/proxy/http/ldciu31.wdf.sap.corp:50036/sap/opu/odata/UI2/INTEROP/SemanticObjects";

		$.ajax({
			url : sUrl,
			dataType : "json",
			cache : "false",
			username : "Atlanta",
			password : "Abcd1234",
			async : false,
			success : function(response) {

				var data;

				if ((typeof response === 'object') && (('d' in response) && ('results' in response.d))) {

					data = response.d.results;
				} else {

					data = response.d || response;
				}

				if (Array.isArray(data)) {
					for ( var i = 0; i < data.length; i++) {
						var item = data[i]["id"];
						oSemanticObjList[i] = item;
					}
				}
			},

			error : function(xhr, status, error) {

				jQuery.sap.log.error("Could not invoke oData service to get list of Semantic Objects because of:" + error);
			}
		});

		for ( var iIndex = 0; iIndex < oSemanticObjList.length; iIndex++) {
			var sId1 = "A" + iIndex;
			var oItem = new sap.ui.core.ListItem(sId1);
			oItem.setText(oSemanticObjList[iIndex]);
			oSemanticObjDropDown.addItem(oItem);
		}

		return oSemanticObjDropDown;
	},

	createContent : function(oController) {

		var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
		var oChipApi = this.getViewData().chip; // instance specific CHIP API
		var oBundle = jQuery.sap.resources({
			url : oChipApi.url.toAbsoluteUrl("launchtile/launch_tile_configuration.properties"),
			locale : sLocale
		});

		var oLayout = new sap.ui.commons.form.ResponsiveLayout();

		var oForm = new sap.ui.commons.form.Form(this.createId("LaunchTileConfigurationForm"), {
			layout : oLayout,
			formContainers : [ new sap.ui.commons.form.FormContainer(this.createId("LaunchTileConfiguration"), {
				title : new sap.ui.commons.Title({
					text : oBundle.getText("LAUNCH_TILE_CONFIGURATION")
				}),

				formElements : [ this.createFormElement(oBundle.getText("TILE_TITLE"), this.createTextField('tile-title')),

				this.createFormElement(oBundle.getText("TILE_ICON"), this.createTextField('tile-icon', function() {

					oController.validateUrlTextField(this);
				})), this.createFormElement(oBundle.getText("APPLICATION_TO_LAUNCH"), this.createSemanticObjDropDown('semantic-dropdown')) ],

				layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
					linebreak : true
				})
			}),

			new sap.ui.commons.form.FormContainer(this.createId("SubmitButtonFC"), {
				formElements : [ this.createButtonElement('submit-button', oBundle.getText("SUBMIT_BUTTON_LABEL"), function() {

					oController.submit();
				}) ],
				layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
					linebreak : true
				})
			}) ]

		});

		oController.readConfiguration();
		return oForm;

	}
});
