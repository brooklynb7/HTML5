sap.ui.controller("WebContent.newstile.NewsTileDrillDown", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created. Can be used to modify the View before it is displayed, to bind event
	 * handlers and do other one-time initialization.
	 */
	onInit : function() {

		var bus = sap.ui.getCore().getEventBus();
		bus.subscribe("app", "FocusSelectedNewsItem", this._focusSelectedNewsItem, this);
		this.itemIx = null;
	},

	onBeforeRendering : function() {

		// sort feed list
		var newsList = this.getView().byId("newsList");

		var binding = newsList.getBinding("items");
		if (binding !== undefined) {
			var sorter = new sap.ui.model.Sorter("pubDate", true);
			binding.sort([ sorter ]);
		}

	},

	onAfterRendering : function() {

		// the 'selected' style gets applied on the list item
		var selectedItem = this.getView().getViewData().selectedItem;
		if (selectedItem) {
			var itemIx = selectedItem.getId().substring(selectedItem.getId().lastIndexOf("-") + 1);
			var newsList = this.getView().byId("newsList");

			// Scroll the selected item into view
			var listItems = newsList.getItems();
			if (listItems && listItems.length > 0) { // Should always have items, but check just in case
				var listItemIdPrefix = listItems[0].getId().substring(0, listItems[0].getId().lastIndexOf("-") + 1);

				var firstItemOffset = jQuery.sap.byId(listItemIdPrefix + "0").offset();
				var currentItemOffset = jQuery.sap.byId(listItemIdPrefix + itemIx).offset();

				if (firstItemOffset && currentItemOffset) {
					this.getView().byId("page").scrollTo(currentItemOffset.top - firstItemOffset.top, 400);
				}
			}
		}
	},

	search : function(evt) {

		this._search();
	},

	_search : function() {

		var newsList = this.getView().byId("newsList");
		var searchField = this.getView().byId("searchField");

		// filter product list
		var binding = newsList.getBinding("items");
		if (binding !== undefined) {
			var filter = new sap.ui.model.Filter("title", sap.ui.model.FilterOperator.Contains, searchField.getValue());
			binding.filter([ filter ]);
		}

	},

	select : function(evt) {

		this._select(evt.getParameter("listItem"));
	},

	_select : function(item) {

		window.open(item.getLink(), "_blank");
	},

	_focusSelectedNewsItem : function(channelId, eventId, data) {

		// Store the Main NewsTile item's index to apply selection on DrillDown NewsItem List
		this.itemIx = data.newsItem.getId().substring(data.newsItem.getId().lastIndexOf("-") + 1);
	},

	image : function(value) {

		var oChipApi = this.getView().getViewData().chip;
		var bDisplayArticleImage = WebContent.newstile.NewsTileUtils.getUseDefaultImageConfig(oChipApi);

		if (bDisplayArticleImage) {
			return value;
		} else {
			var oDefaultImage = WebContent.newstile.NewsTileUtils.getDefaultImageConfig(oChipApi);
			if (!oDefaultImage) {
				oDefaultImage = WebContent.newstile.NewsTileUtils.getFinalDefaultImageForDrillDown(oChipApi);
			}

			return oDefaultImage;
		}
	}

});