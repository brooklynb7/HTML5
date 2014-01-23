sap.ui.controller("views.code", {

	onInit : function () {
		// register for onBeforeShow events for 'pages'
		this.getView().addEventDelegate({
			onBeforeShow : jQuery.proxy(function (evt) {
				this._onBeforeShow(evt);
			}, this)
		});
	},

	_onBeforeShow : function (evt) {
		if (evt.data) {
			var data = {
				"title" : evt.data.title,
				"code" : evt.data.code
			};
			this.getView().setModel(new sap.ui.model.json.JSONModel(data));
		}
	},

	formatTitle : function (title) {
		return title + " - Code";
	},

	navBack : function () {
		sap.ui.getCore().getEventBus().publish("nav", "back");
	}
});