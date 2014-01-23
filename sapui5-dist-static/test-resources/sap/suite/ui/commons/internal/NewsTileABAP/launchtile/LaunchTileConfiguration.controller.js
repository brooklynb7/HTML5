jQuery.sap.require("sap.ui.core.IconPool");

sap.ui.controller("launchtile.LaunchTileConfiguration", {

	readConfiguration : function() {

		var oView = this.getView();
		var oChipApi = oView.getViewData().chip; // instance specific CHIP API

		oView.byId("tile-title").setValue(oChipApi.configuration.getParameterValueAsString("tile-title"));
		oView.byId("tile-icon").setValue(oChipApi.configuration.getParameterValueAsString("tile-icon"));
		oView.byId("semantic-dropdown").setValue(oChipApi.configuration.getParameterValueAsString("semantic-dropdown"));

	},

	validateUrlTextField : function(oTextField) {

		var sIconName = oTextField.getValue();

		if (sIconName) {
			
			var oIconInfo = sap.ui.core.IconPool.getIconInfo(sIconName);
			if (oIconInfo == undefined) {
				oTextField.setValueState(sap.ui.core.ValueState.Error);
			} else {
				oTextField.setValueState(sap.ui.core.ValueState.None);
			}
		}
	},

	submit : function() {

		var oView = this.getView();
		var oChipApi = oView.getViewData().chip; // instance specific CHIP API
		var mConfigurationUpdates = {};
		var bConfigurationValid = true;
		var sErrorMessage = "";

		var oTileTitle = oView.byId("tile-title");
		var oTileIcon = oView.byId("tile-icon");
		var oSemanticDropdown = oView.byId("semantic-dropdown");

		if (oTileTitle.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage = "Invalid Text:'" + oTileTitle.getValue() + "'. Property 'tileTitle' not set" + "'.\n";
		}

		if (oTileIcon.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid Icon:'" + oTileIcon.getValue() + "'. Property 'tileIcon' not set" + "'.\n";
		}

		if (oSemanticDropdown.getValueState() === sap.ui.core.ValueState.Error) {
			bConfigurationValid = false;
			sErrorMessage += "Invalid Application To Launch:'" + oSemanticDropdown.getValue() + "'.\n";
		}

		if (bConfigurationValid) {
			mConfigurationUpdates["tile-title"] = oTileTitle.getValue();
			mConfigurationUpdates["tile-icon"] = oTileIcon.getValue();
			mConfigurationUpdates["semantic-dropdown"] = oSemanticDropdown.getValue();

			oChipApi.writeConfiguration.setParameterValues(mConfigurationUpdates);

		} else {
			jQuery.sap.log.error(sErrorMessage + "Invalid values. Configuration not saved.");
		}

	}

});