jQuery.sap.require("sap.m.SearchField");
jQuery.sap.require("sap.m.List");
jQuery.sap.require("sap.ui.layout.HorizontalLayout");

sap.ui.jsview("WebContent.newstile.NewsTileDrillDown", {

	getControllerName : function() {

		return "WebContent.newstile.NewsTileDrillDown";
	},

	createContent : function(oController) {

		this.setHeight('100%');
		var oChipApi = this.getViewData().chip; // instance specific CHIP API

		var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
		var oBundle = jQuery.sap.resources({
			url : oChipApi.url.toAbsoluteUrl("newstile/news_tile_detail.properties"),
			locale : sLocale
		});

		var sPageTitle = oBundle.getText("NEWS_PAGE_TITLE");
		var sSearchPlaceHolder = oBundle.getText("SEARCH_PLACE_HOLDER");
		var sSearchToolTip = oBundle.getText("SEARCH_TOOLTIP");
		var sNoNewsFound = oBundle.getText("NO_NEWS");

		jQuery.sap.includeStyleSheet(oChipApi.url.toAbsoluteUrl("newstile/news_tile_detail.css"));

		var oNewsTitle = new sap.ui.commons.TextView(this.createId("newsTitle"), {
			text : sPageTitle
		});

		oNewsTitle.addStyleClass("newsTitleDetail");

		var oSearchField = new sap.m.SearchField(this.createId("searchField"), {
			placeholder : sSearchPlaceHolder,
			tooltip : sSearchToolTip,
			liveChange : function(evt) {

				oController.search(evt);
			}
		});

		oSearchField.addStyleClass("searchFieldDetail");

		var oHeaderLayout = new sap.m.Bar({
			contentLeft : oNewsTitle,
			contentRight : oSearchField
		});

		var oNewsItemTemplate = new sap.suite.ui.commons.FeedItemHeader({
			title : "{title}",
			image : {
				path : 'image',
				formatter : function(value) {

					return oController.image(value);
				}
			},
			link : "{link}",
			source : "{source}",
			publicationDate : "{pubDate}",
			description : "{description}"
		});

		var oList = new sap.m.List(this.createId("newsList"), {
			noDataText : sNoNewsFound,
			mode : sap.m.ListMode.SingleSelectMaster,
			select : function(evt) {

				oController.select(evt);
			},
			items : {
				path : "/items",
				template : oNewsItemTemplate
			}
		});

		var model = this.getViewData().newsModel;
		oList.setModel(model);

		oList.addStyleClass("newsListDetail");

		var oPage = new sap.m.Page(this.createId("page"), {
			showHeader : true
		});
		
		oPage.setCustomHeader(oHeaderLayout);
		oPage.addContent(oList);

		return oPage;
	}

});
