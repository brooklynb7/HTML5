jQuery.sap.require("WebContent.newstile.NewsTileUtils");

sap.ui.controller("WebContent.newstile.NewsTile", {
	onInit : function() {

		var oChipApi = this.getView().getViewData().chip;

		var that = this;
		oChipApi.refresh.attachRefresh(function() {

			return that.refresh(that);
		});

		if (oChipApi.configurationUi && oChipApi.configurationUi.isEnabled()) {

			oChipApi.configurationUi.setUiProvider(function() {

				return that.getConfigurationUi();
			});
		}

		if (!oChipApi.preview.isEnabled()) {
			this._feedsRefreshComplete = true;
			this.intervalRefObj = setInterval(function() {

				that.refreshFeeds();
			}, WebContent.newstile.NewsTileUtils.getRefreshIntervalConfig(oChipApi));
		}
	},

	onBeforeRendering : function() {

		// sort feed list
		var newsTile = this.byId("feedTile");
		var binding = newsTile.getBinding("items");
		if (binding !== undefined) {
			var sorter = new sap.ui.model.Sorter("pubDate", true);
			binding.sort([ sorter ]);
		}
	},

	select : function(evt) {

		var oChipApi = this.getView().getViewData().chip;

		if (oChipApi.configurationUi && oChipApi.configurationUi.isEnabled()) {

			oChipApi.configurationUi.display();
			return;
		}

		var itemId = evt.getParameter("itemId");
		var feedItem = sap.ui.getCore().byId(itemId);
		this.getView().getViewData().selectedItem = feedItem;

		var fgetService = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService;
		var oCrossAppNavigator = fgetService && fgetService("CrossApplicationNavigation");
		oCrossAppNavigator.toExternal({
			target : {
				semanticObject : "NewsFeed",
				action : "displayNewsList"
			},
			params : {
				newsViewId : this.getView().getId()
			}
		});
	},

	refreshFeeds : function() {

		var that = this;

		var oChipApi = this.getView().getViewData().chip;

		// TODO: Serialize calls to the aggregator so that we
		// don't have more than one feed refresh executing at
		// the same time.
		var aInclusionFiltersConfiguration = WebContent.newstile.NewsTileUtils.getInclusionFiltersConfiguration(oChipApi);
		var aExclusionFiltersConfiguration = WebContent.newstile.NewsTileUtils.getExclusionFiltersConfiguration(oChipApi);
		if (this._feedsRefreshComplete) {
			this._feedsRefreshComplete = false;
			jQuery.sap.log.debug("NewsTile.controller: Calling aggregator to refresh feeds.");
			this.model = sap.suite.ui.commons.util.FeedAggregator.getFeeds(WebContent.newstile.NewsTileUtils.getFeedConfiguration(oChipApi), aInclusionFiltersConfiguration,
					aExclusionFiltersConfiguration, function() {

						that.feedsRefreshed();
						that.getView()._newsTile.cycle();
						// sort feed list
						var newsTile = that.byId("feedTile");
						var binding = newsTile.getBinding("items");
						if (binding !== undefined) {
							var sorter = new sap.ui.model.Sorter("pubDate", true);
							binding.sort([ sorter ]);
						}
						that.getView().getViewData().newsModel = that.getView()._newsTile.getModel();
					});
		} else {
			jQuery.sap.log.debug("NewsTile.controller: Skipping feeds refresh, previous refresh not completed.");
		}
	},

	feedsRefreshed : function() {

		this.byId("feedTile").stageModel(this.model);
		this._feedsRefreshComplete = true;
	},

	getNewsTileTooltip : function() {

		var oChipApi = this.getView().getViewData().chip;

		var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
		var oBundle = jQuery.sap.resources({
			url : oChipApi.url.toAbsoluteUrl("newstile/news_tile.properties"),
			locale : sLocale
		});

		return oBundle.getText("NEWS_TILE_TOOLTIP");
	},

	onExit : function() {

		clearInterval(this.intervalRefObj);
	},

	getConfigurationUi : function() {

		var oChipApi = this.getView().getViewData().chip;

		if (!oChipApi.configurationUi || !oChipApi.configurationUi.isEnabled()) {
			return;
		}

		var configurationUi = sap.ui.view({
			type : sap.ui.core.mvc.ViewType.JS,
			viewName : "WebContent.newstile.NewsTileConfiguration",
			viewData : this.getView().getViewData()
		});

		return configurationUi;
	},

	refresh : function(oController) {

		oController.getView()._newsTile.rerender();
	},
});