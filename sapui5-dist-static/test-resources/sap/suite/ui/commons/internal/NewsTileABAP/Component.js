jQuery.sap.declare("WebContent.Component");
jQuery.sap.require("sap.ui.core.UIComponent");

sap.ui.core.UIComponent.extend("WebContent.Component", {

	metadata : {

		"library" : "WebComponent",

		"version" : "1.0",

		"includes" : [

		],

		"dependencies" : {
			"libs" : [ "sap.m", "sap.suite.ui.commons" ],
			"components" : [],
			"ui5version" : "1.13.1"
		}

	},

	createContent : function() {

		var sNewsTileViewId = this.getComponentData().startupParameters["newsTileViewId"].toString();
		var oNewsTileView = sap.ui.getCore().byId(sNewsTileViewId);

		return sap.ui.view({
			type : sap.ui.core.mvc.ViewType.JS,
			viewName : "WebContent.newstile.NewsTileDrillDown",
			viewData : oNewsTileView.getViewData()
		});
	},

});