jQuery.sap.declare("WebContent.newstile.NewsTileUtils");

WebContent.newstile.NewsTileUtils = {

	getDefaultImageConfig : function(oChipApi) {

		return oChipApi.configuration.getParameterValueAsString("defaultImage");

	},

	getFinalDefaultImageForDrillDown : function(oChipApi) {

		return oChipApi.url.toAbsoluteUrl("images/NewsImage1.png");
	},

	getFinalDefaultImages : function(oChipApi) {

		var oNamesOfImagesList = [ "images/NewsImage1.png", "images/NewsImage2.png", "images/NewsImage3.png", "images/NewsImage4.png", "images/NewsImage5.png",
				"images/NewsImage6.png", "images/NewsImage7.png", "images/NewsImage8.png", "images/NewsImage9.png", "images/NewsImage10.png", "images/NewsImage11.png" ];
		var oImagesList = [];

		for ( var i = 0; i < oNamesOfImagesList.length; i++) {
			var oImage = oChipApi.url.toAbsoluteUrl(oNamesOfImagesList[i]);
			oImagesList.push(oImage);
		}

		return oImagesList;

	},

	getUseDefaultImageConfig : function(oChipApi) {

		var bool = oChipApi.configuration.getParameterValueAsString("useDefaultImage");
		return (oChipApi.configuration.getParameterValueAsString("useDefaultImage") !== "true");

	},

	getCycleIntervalConfig : function(oChipApi) {

		return (oChipApi.configuration.getParameterValueAsString("cycleInterval"));
	},

	getRefreshIntervalConfig : function(oChipApi) {

		var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
		var oBundle = jQuery.sap.resources({
			url : oChipApi.url.toAbsoluteUrl("newstile/news_tile_configuration.properties"),
			locale : sLocale
		});
		var sRefreshInterval = oChipApi.configuration.getParameterValueAsString("refreshInterval");
		var iRefreshInterval = 900000; // 15 minutes

		switch (sRefreshInterval) {
		case oBundle.getText("REFRESH_INTERVAL_ONE_ITEM"):
			iRefreshInterval = 900000; // 15 minutes
			break;
		case oBundle.getText("REFRESH_INTERVAL_TWO_ITEM"):
			iRefreshInterval = 1800000; // 30 minutes
			break;
		case oBundle.getText("REFRESH_INTERVAL_THREE_ITEM"):
			iRefreshInterval = 3600000; // 1 hour
			break;
		case oBundle.getText("REFRESH_INTERVAL_FOUR_ITEM"):
			iRefreshInterval = 14400000; // 4 hours
			break;
		case oBundle.getText("REFRESH_INTERVAL_FIVE_ITEM"):
			iRefreshInterval = 43200000;
			break;
		}

		return iRefreshInterval;
	},

	getFeedConfiguration : function(oChipApi) {

		var aFeeds = [];
		var oCurrentFeed = "";

		oCurrentFeed = oChipApi.configuration.getParameterValueAsString("feed1");
		if (oCurrentFeed) {
			aFeeds.push(oCurrentFeed);
		}
		oCurrentFeed = oChipApi.configuration.getParameterValueAsString("feed2");
		if (oCurrentFeed) {
			aFeeds.push(oCurrentFeed);
		}
		oCurrentFeed = oChipApi.configuration.getParameterValueAsString("feed3");
		if (oCurrentFeed) {
			aFeeds.push(oCurrentFeed);
		}
		oCurrentFeed = oChipApi.configuration.getParameterValueAsString("feed4");
		if (oCurrentFeed) {
			aFeeds.push(oCurrentFeed);
		}
		oCurrentFeed = oChipApi.configuration.getParameterValueAsString("feee5");
		if (oCurrentFeed) {
			aFeeds.push(oCurrentFeed);
		}
		oCurrentFeed = oChipApi.configuration.getParameterValueAsString("feed6");
		if (oCurrentFeed) {
			aFeeds.push(oCurrentFeed);
		}
		oCurrentFeed = oChipApi.configuration.getParameterValueAsString("feed7");
		if (oCurrentFeed) {
			aFeeds.push(oCurrentFeed);
		}
		oCurrentFeed = oChipApi.configuration.getParameterValueAsString("feed8");
		if (oCurrentFeed) {
			aFeeds.push(oCurrentFeed);
		}
		oCurrentFeed = oChipApi.configuration.getParameterValueAsString("feed9");
		if (oCurrentFeed) {
			aFeeds.push(oCurrentFeed);
		}
		oCurrentFeed = oChipApi.configuration.getParameterValueAsString("feed10");
		if (oCurrentFeed) {
			aFeeds.push(oCurrentFeed);
		}

		return aFeeds;
	},
	
	getExclusionFiltersConfiguration : function(oChipApi) {

        var aExclusionFilters = new Array();
        var sFilter = "";

        sFilter = oChipApi.configuration.getParameterValueAsString("eFilter1");
        if (sFilter) {
               aExclusionFilters.push(sFilter);
        }
        sFilter = oChipApi.configuration.getParameterValueAsString("eFilter2");
        if (sFilter) {
               aExclusionFilters.push(sFilter);
        }
        sFilter = oChipApi.configuration.getParameterValueAsString("eFilter3");
        if (sFilter) {
               aExclusionFilters.push(sFilter);
        }
        sFilter = oChipApi.configuration.getParameterValueAsString("eFilter4");
        if (sFilter) {
               aExclusionFilters.push(sFilter);
        }
        sFilter = oChipApi.configuration.getParameterValueAsString("eFilter5");
        if (sFilter) {
               aExclusionFilters.push(sFilter);
        }

        return aExclusionFilters;
	},
 
	getInclusionFiltersConfiguration : function(oChipApi) {

        var aInclusionFilters = new Array();
        var sFilter = "";

        sFilter = oChipApi.configuration.getParameterValueAsString("iFilter1");
        if (sFilter) {
               aInclusionFilters.push(sFilter);
        }
        sFilter = oChipApi.configuration.getParameterValueAsString("iFilter2");
        if (sFilter) {
               aInclusionFilters.push(sFilter);
        }
        sFilter = oChipApi.configuration.getParameterValueAsString("iFilter3");
        if (sFilter) {
               aInclusionFilters.push(sFilter);
        }
        sFilter = oChipApi.configuration.getParameterValueAsString("iFilter4");
        if (sFilter) {
               aInclusionFilters.push(sFilter);
        }
        sFilter = oChipApi.configuration.getParameterValueAsString("iFilter5");
        if (sFilter) {
               aInclusionFilters.push(sFilter);
        }

        return aInclusionFilters;
	}
};
