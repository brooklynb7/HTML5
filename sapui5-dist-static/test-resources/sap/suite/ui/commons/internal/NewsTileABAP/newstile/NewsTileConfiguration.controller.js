sap.ui.controller("WebContent.newstile.NewsTileConfiguration", {

	onInit : function() {

		var oChipApi = this.getView().getViewData().chip;

		if (oChipApi.configurationUi && oChipApi.configurationUi.isEnabled()) {
			var that = this;
			oChipApi.configurationUi.attachSave(function() {

				that.submit();
			});

		}
	},

	readConfiguration : function() {

		var oView = this.getView();
		var oChipApi = oView.getViewData().chip;

		oView.byId("defaultImage").setValue(oChipApi.configuration.getParameterValueAsString("defaultImage"));
		var bUseDefaultImage = oChipApi.configuration.getParameterValueAsString("useDefaultImage");
		if (bUseDefaultImage === "true") {
			oView.byId("useDefaultImage").setChecked(true);
		} else {
			oView.byId("useDefaultImage").setChecked(false);

		}
		var cycleInterval = parseInt(oChipApi.configuration.getParameterValueAsString("cycleInterval"), 10);
		if (Math.floor(cycleInterval) === cycleInterval) {
			if (cycleInterval < 5 || cycleInterval > 15) {
				jQuery.sap.log.error("Invalid cycleInterval value " + cycleInterval + ". Configuration not read.");
				oView.byId("cycleInterval").setValue("5");
			} else {
				oView.byId("cycleInterval").setValue(cycleInterval);
			}
		} else {
			jQuery.sap.log.error("Invalid cycleInterval value " + cycleInterval + ". Configuration not read.");
			oView.byId("cycleInterval").setValue("5");
		}
		oView.byId("refreshInterval").setValue(oChipApi.configuration.getParameterValueAsString("refreshInterval"));
		this.validateUrlConfiguration("feed1");
		this.validateUrlConfiguration("feed2");
		this.validateUrlConfiguration("feed3");
		this.validateUrlConfiguration("feed4");
		this.validateUrlConfiguration("feed5");
		this.validateUrlConfiguration("feed6");
		this.validateUrlConfiguration("feed7");
		this.validateUrlConfiguration("feed8");
		this.validateUrlConfiguration("feed9");
		this.validateUrlConfiguration("feed10");
		oView.byId("iFilter1").setValue(oChipApi.configuration.getParameterValueAsString("iFilter1"));
		oView.byId("iFilter2").setValue(oChipApi.configuration.getParameterValueAsString("iFilter2"));
		oView.byId("iFilter3").setValue(oChipApi.configuration.getParameterValueAsString("iFilter3"));
		oView.byId("iFilter4").setValue(oChipApi.configuration.getParameterValueAsString("iFilter4"));
		oView.byId("iFilter5").setValue(oChipApi.configuration.getParameterValueAsString("iFilter5"));
		oView.byId("eFilter1").setValue(oChipApi.configuration.getParameterValueAsString("eFilter1"));
		oView.byId("eFilter2").setValue(oChipApi.configuration.getParameterValueAsString("eFilter2"));
		oView.byId("eFilter3").setValue(oChipApi.configuration.getParameterValueAsString("eFilter3"));
		oView.byId("eFilter4").setValue(oChipApi.configuration.getParameterValueAsString("eFilter4"));
		oView.byId("eFilter5").setValue(oChipApi.configuration.getParameterValueAsString("eFilter5"));
	},

	validateUrlConfiguration : function(sFeed) {

		var oView = this.getView();
		var oChipApi = oView.getViewData().chip;

		var sUrl = oChipApi.configuration.getParameterValueAsString(sFeed);
		var validUrl = jQuery.sap.validateUrl(sUrl);
		if (validUrl) {
			oView.byId(sFeed).setValue(sUrl);
		} else {
			jQuery.sap.log.error("Invalid " + sFeed + "feed URL: " + sUrl + ". Configuration not read.");
		}
	},
	
	isValidUrl : function(sUrl) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return regexp.test(sUrl);
    },


	validateUrlTextField : function(oTextField) {

		var sUrl = oTextField.getValue();

		if (sUrl) {
			var validUrl = this.isValidUrl(sUrl);
			if (validUrl) {
				oTextField.setValueState(sap.ui.core.ValueState.None);
			} else {
				oTextField.setValueState(sap.ui.core.ValueState.Error);
			}
		} else {
			oTextField.setValueState(sap.ui.core.ValueState.None);
		}
	},

	validateCycleInterval : function(oTextField) {

		var cycleInterval = parseInt(oTextField.getValue(), 10);

		if (cycleInterval) {
			if (cycleInterval < 5 || cycleInterval > 15) {
				oTextField.setValueState(sap.ui.core.ValueState.Error);
			} else {
				oTextField.setValueState(sap.ui.core.ValueState.None);
			}
		} else {
			oTextField.setValueState(sap.ui.core.ValueState.Error);
		}
	},

	submit : function() {

		var oView = this.getView();
		var oChipApi = oView.getViewData().chip;

		var mConfigurationUpdates = {};
		var bConfigurationValid = true;
		var sErrorMessage = "";

		var oDefaultImage = oView.byId("defaultImage");
		if (oDefaultImage.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid defaultImage Url:'" + oDefaultImage.getValue() + "'.\n";
		}
		var oCycleInterval = oView.byId("cycleInterval");
		if (oCycleInterval.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid cycleInterval Value:'" + oCycleInterval.getValue() + "'.\n";
		}
		var oFeed1 = oView.byId("feed1");
		if (oFeed1.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid feed1 Url:'" + oFeed1.getValue() + "'.\n";
		}
		var oFeed2 = oView.byId("feed2");
		if (oFeed2.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid feed2 Url:'" + oFeed2.getValue() + "'.\n";
		}
		var oFeed3 = oView.byId("feed3");
		if (oFeed3.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid feed3 Url:'" + oFeed3.getValue() + "'.\n";
		}
		var oFeed4 = oView.byId("feed4");
		if (oFeed4.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid feed4 Url:'" + oFeed4.getValue() + "'.\n";
		}
		var oFeed5 = oView.byId("feed5");
		if (oFeed5.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid feed5 Url:'" + oFeed5.getValue() + "'.\n";
		}
		var oFeed6 = oView.byId("feed6");
		if (oFeed6.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid feed6 Url:'" + oFeed6.getValue() + "'.\n";
		}
		var oFeed7 = oView.byId("feed7");
		if (oFeed7.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid feed7 Url:'" + oFeed7.getValue() + "'.\n";
		}
		var oFeed8 = oView.byId("feed8");
		if (oFeed8.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid feed8 Url:'" + oFeed8.getValue() + "'.\n";
		}
		var oFeed9 = oView.byId("feed9");
		if (oFeed9.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid feed9 Url:'" + oFeed9.getValue() + "'.\n";
		}
		var oFeed10 = oView.byId("feed10");
		if (oFeed10.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid feed10 Url:'" + oFeed10.getValue() + "'.\n";
		}

		if (bConfigurationValid) {
			mConfigurationUpdates["defaultImage"] = oDefaultImage.getValue();
			mConfigurationUpdates["cycleInterval"] = oCycleInterval.getValue();
			mConfigurationUpdates["refreshInterval"] = oView.byId("refreshInterval").getValue();
			mConfigurationUpdates["useDefaultImage"] = oView.byId("useDefaultImage").getChecked().toString();
			mConfigurationUpdates["feed1"] = oFeed1.getValue();
			mConfigurationUpdates["feed2"] = oFeed2.getValue();
			mConfigurationUpdates["feed3"] = oFeed3.getValue();
			mConfigurationUpdates["feed4"] = oFeed4.getValue();
			mConfigurationUpdates["feed5"] = oFeed5.getValue();
			mConfigurationUpdates["feed6"] = oFeed6.getValue();
			mConfigurationUpdates["feed7"] = oFeed7.getValue();
			mConfigurationUpdates["feed8"] = oFeed8.getValue();
			mConfigurationUpdates["feed9"] = oFeed9.getValue();
			mConfigurationUpdates["feed10"] = oFeed10.getValue();
			mConfigurationUpdates["iFilter1"] = oView.byId("iFilter1").getValue();
			mConfigurationUpdates["iFilter2"] = oView.byId("iFilter2").getValue();
			mConfigurationUpdates["iFilter3"] = oView.byId("iFilter3").getValue();
			mConfigurationUpdates["iFilter4"] = oView.byId("iFilter4").getValue();
			mConfigurationUpdates["iFilter5"] = oView.byId("iFilter5").getValue();
			mConfigurationUpdates["eFilter1"] = oView.byId("eFilter1").getValue();
			mConfigurationUpdates["eFilter2"] = oView.byId("eFilter2").getValue();
			mConfigurationUpdates["eFilter3"] = oView.byId("eFilter3").getValue();
			mConfigurationUpdates["eFilter4"] = oView.byId("eFilter4").getValue();
			mConfigurationUpdates["eFilter5"] = oView.byId("eFilter5").getValue();

			oChipApi.writeConfiguration.setParameterValues(mConfigurationUpdates);
		} else {
			jQuery.sap.log.error(sErrorMessage + "Invalid values. Configuration not saved.");
		}

	}

});