sap.ui.controller("launchtile.LaunchMain", {

	onInit : function() {

		this.display();

		var oChipApi = this.getView().getViewData().chip; // instance specific CHIP API

		oChipApi.configurationUi.setConfigurationUi(sap.ui.view({
			type : sap.ui.core.mvc.ViewType.JS,
			viewData : this.getView().getViewData(),
			viewName : "launchtile.LaunchTileConfiguration"
		}));

	},

	display : function() {

		var oView = this.getView();
		oView.removeAllContent();
		var sViewName = "launchtile.LaunchApp";
		oView.addContent(this.getChildView(sViewName));
	},

	getChildView : function(sViewName) {

		var oView = sap.ui.view({
			type : sap.ui.core.mvc.ViewType.JS,
			viewName : sViewName,
			viewData : this.getView().getViewData(),
			height : '100%'
		});
		return oView;
	}

});