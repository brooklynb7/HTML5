jQuery.sap.require("sap.suite.ui.commons.util.FeedAggregator");
jQuery.sap.require("newstile.NewsTileUtils");

sap.ui.controller("newstile.NewsMain", {

	onInit : function() {

		this.initializeModel();
		this.display();
		var that = this;

		var oChipApi = this.getView().getViewData().chip;

		if (oChipApi.configurationUi && oChipApi.configurationUi.isEnabled()) {

			oChipApi.configurationUi.setUiProvider(function() {

				return that.getConfigurationUi();
			});
		}

		if (oChipApi.fullscreen) {
			oChipApi.fullscreen.attachFullscreen(function() {

				that.display();
			});
		}
	},

	getConfigurationUi : function() {

		var oChipApi = this.getView().getViewData().chip;

		if (!oChipApi.configurationUi || !oChipApi.configurationUi.isEnabled()) {
			return;
		}

		return sap.ui.view({
			type : sap.ui.core.mvc.ViewType.JS,
			viewData : this.getView().getViewData(),
			viewName : "newstile.NewsTileConfiguration"
		});
	},

	display : function() {

		var oView = this.getView();
		var oChipApi = oView.getViewData().chip;
		var sViewName = oChipApi.fullscreen && oChipApi.fullscreen.getFullscreen() ? "newstile.NewsTileDrillDown" : "newstile.NewsTile";
		oView.removeAllContent();
		var oModel = this.getView().getModel("news");
		this.getView().getViewData().newsModel = oModel;
		var oChildView = this.getChildView(sViewName);
		oView.addContent(oChildView);
	},

	getChildView : function(sViewName) {

		var oView = sap.ui.view({
			type : sap.ui.core.mvc.ViewType.JS,
			viewName : sViewName,
			viewData : this.getView().getViewData(),
			height : '100%'
		});

		return oView;
	},

	initializeModel : function() {

        var aFeedConfiguration = newstile.NewsTileUtils.getFeedConfiguration(this.getView());
        var aInclusionFiltersConfiguration = newstile.NewsTileUtils.getInclusionFiltersConfiguration(this.getView());
        var aExclusionFiltersConfiguration = newstile.NewsTileUtils.getExclusionFiltersConfiguration(this.getView());

		var oFeeds = sap.suite.ui.commons.util.FeedAggregator.getFeeds(aFeeds, aInclusionFiltersConfiguration, aExclusionFiltersConfiguration);
		this.getView().setModel(oFeeds, "news");

        //var model = sap.suite.ui.commons.util.FeedAggregator.getFeeds(newstile.NewsTileUtils.getFeedConfiguration(this.getView()));
        //sap.ui.getCore().setModel(model, "news"); // Make the model available to the details screen
		
	}

});