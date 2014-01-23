jQuery.sap.declare("launchtile.LaunchTileUtils");

launchtile.LaunchTileUtils = {

	getTileTitleConfig : function(oView) {

		var oChipApi = oView.getViewData().chip;

		return oChipApi.configuration.getParameterValueAsString("tile-title");
	},

	getTileIconConfig : function(oView) {

		var oChipApi = oView.getViewData().chip;
		var sIconName = oChipApi.configuration.getParameterValueAsString("tile-icon");

		if (!sIconName) {
			return null;
		}

		return sap.ui.core.IconPool.getIconURI(sIconName);
	},

	getSemanticObjLinkConfig : function(oView) {

		var oChipApi = oView.getViewData().chip;

		var sSemanticObj = oChipApi.configuration.getParameterValueAsString("semantic-dropdown");

		// Change URL and remove username/password as the service is on same server

		var sOdataUrl = "http://localhost:8080/uilib-sample/proxy/http/ldciu31.wdf.sap.corp:50036/sap/opu/odata/UI2/INTEROP/ResolveLink?linkId='" + sSemanticObj + "'";

		var sSemanticObjLink = null;
		
		$.ajax({
			url : sOdataUrl,
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

				if (data && data[0]) {
					sSemanticObjLink = data[0]["url"];
				}
			},

			error : function(xhr, status, error) {

				jQuery.sap.log.error("Could not invoke oData service to get url for semantic object because of:" + error);
			}
		});

		if (!sSemanticObjLink) {
			jQuery.sap.log.error("Could not obtain URL from Odata Service for Semantic Object: " + sSemanticObj);
		}
		
		return sSemanticObjLink;
	}

};
