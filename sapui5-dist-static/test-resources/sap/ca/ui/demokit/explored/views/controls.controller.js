sap.ui.controller("views.controls", {

	onInit : function () {

		// register for onBeforeShow events for 'pages'
		this.getView().addEventDelegate({
			onBeforeShow : jQuery.proxy(function (evt) {
				this._onBeforeShow(evt);
			}, this)
		});
	},

	_onBeforeShow : function (evt) {
		if (evt && evt.data) {
			this.getView().setBindingContext(evt.data.context);
		}
	},

	itemPress : function (evt) {
		this._navigate(evt.getSource());
	},

	listSelect: function (evt) {
		this._navigate(evt.getParameter("listItem"));
	},

	_navigate : function (item) {
		
		var model = sap.ui.getCore().getModel();
		var path = item.getBindingContext().getPath();
		var control = model.getProperty(path);
		
		// check theme support
		if (control.noMVI && util.ThemeDetection.isMVI()) {
			this._showThemeNotSupportedMsg("Mobile Visual Identity");
		} else if (control.noBC && util.ThemeDetection.isBC()) {
			this._showThemeNotSupportedMsg("Blue Crystal");
		} else {
			sap.ui.getCore().getEventBus().publish("nav", "to", {
				id : control.id
			});
		}
	},
	
	_showThemeNotSupportedMsg : function (themeName) {
		jQuery.sap.require("sap.m.MessageBox");
		sap.ui.getCore().getEventBus().publish("nav", "virtual");
		sap.m.MessageBox.alert("This control does not support the '" + themeName + "' theme",
			function (oAction) {
				if (oAction) {
					sap.ui.getCore().getEventBus().publish("nav", "back");
				}
			}
		);
	},

	navBack : function () {
		sap.ui.getCore().getEventBus().publish("nav", "back");
	},

	formatIcon : function (img, noMVI, noBC) {
		if (noMVI && util.ThemeDetection.isMVI()) {
			return "sap-icon://alert";
		} else if (noBC && util.ThemeDetection.isBC()) {
			return "sap-icon://alert";
		} else if ("Control" === img) {
			return "sap-icon://database";
		} else if ("Experiment" === img) {
			return "sap-icon://lab";
		} else {
			return "sap-icon://question-mark";
		}
	}
}); 