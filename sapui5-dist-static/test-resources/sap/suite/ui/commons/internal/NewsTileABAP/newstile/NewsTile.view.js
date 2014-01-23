jQuery.sap.require("sap.ui.model.Sorter");
jQuery.sap.require("WebContent.newstile.NewsTileUtils");
jQuery.sap.require("sap.suite.ui.commons.FeedTile");
jQuery.sap.require("sap.suite.ui.commons.FeedItem");
jQuery.sap.require("sap.suite.ui.commons.util.FeedAggregator");

sap.ui.jsview("WebContent.newstile.NewsTile", {

	getControllerName : function() {

		return "WebContent.newstile.NewsTile";
	},

	createContent : function(oController) {

		this.setHeight('100%');

		var oChipApi = this.getViewData().chip;
		jQuery.sap.includeStyleSheet(oChipApi.url.toAbsoluteUrl("newstile/news_tile.css"));

		var oFeedItemTemplate = new sap.suite.ui.commons.FeedItem({
			title : "{title}",
			image : "{image}",
			link : "{link}",
			source : "{source}",
			publicationDate : "{pubDate}"
		});

		var oDefaultImages = [];
		var sTooltip = "";
		if (!oChipApi.preview.isEnabled()) {
			var oDefaultImage = WebContent.newstile.NewsTileUtils.getDefaultImageConfig(oChipApi);
			if (!oDefaultImage) {
				oDefaultImages = WebContent.newstile.NewsTileUtils.getFinalDefaultImages(oChipApi);
			} else {
				oDefaultImages.push(oDefaultImage);
			}
			
			sTooltip = oController.getNewsTileTooltip();
		}

		this._newsTile = new sap.suite.ui.commons.FeedTile(oController.createId("feedTile"), {
			defaultImages : oDefaultImages,

			displayArticleImage : WebContent.newstile.NewsTileUtils.getUseDefaultImageConfig(oChipApi),
			tooltip : sTooltip,
			displayDuration : parseInt(WebContent.newstile.NewsTileUtils.getCycleIntervalConfig(oChipApi), 10),
			press : function(evt) {

				oController.select(evt);
			},
			items : {
				path : "/items",
				template : oFeedItemTemplate
			}
		});

		if (!oChipApi.preview.isEnabled()) {
			var aFeedConfiguration = WebContent.newstile.NewsTileUtils.getFeedConfiguration(oChipApi);
			var aInclusionFiltersConfiguration = WebContent.newstile.NewsTileUtils.getInclusionFiltersConfiguration(oChipApi);
			var aExclusionFiltersConfiguration = WebContent.newstile.NewsTileUtils.getExclusionFiltersConfiguration(oChipApi);

			var that = this;
			var oFeeds = sap.suite.ui.commons.util.FeedAggregator.getFeeds(aFeedConfiguration, aInclusionFiltersConfiguration, aExclusionFiltersConfiguration, function() {

				that._newsTile.rerender();
			});
			this._newsTile.setModel(oFeeds);
			this.getViewData().newsModel = oFeeds;
		}

		this._newsTile.addStyleClass("newsTileStyle");
		return this._newsTile;

	}
});