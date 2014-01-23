jQuery.sap.require("Config");
jQuery.sap.require("sap.ui.core.IconPool");

sap.ui.controller("App", {

	onInit : function () {
		
		// set model
		var model = new sap.ui.model.json.JSONModel(Config.data);
		this.getView().setModel(model);
		
		// register custom icons
		sap.ui.core.IconPool.addIcon("explored", "custom", "brandico", "e001", true);
		sap.ui.core.IconPool.addIcon("cart", "custom", "brandico", "e002", true);
		sap.ui.core.IconPool.addIcon("makit", "custom", "brandico", "e005", true);
		sap.ui.core.IconPool.addIcon("helloworld", "custom", "brandico", "e003", true);
		sap.ui.core.IconPool.addIcon("poa", "custom", "brandico", "e007", true);
		sap.ui.core.IconPool.addIcon("flexbox", "custom", "brandico", "e00A", true);
		sap.ui.core.IconPool.addIcon("crud", "custom", "brandico", "e009", true);
		sap.ui.core.IconPool.addIcon("icon-explorer", "custom", "brandico", "e006", true);
		sap.ui.core.IconPool.addIcon("splitapp", "custom", "brandico", "e00C", true);
		sap.ui.core.IconPool.addIcon("mvc", "custom", "brandico", "e00B", true);
	},

	onDestroy : function () {
		if (this._dialog) {
			this._dialog.destroy();
		}
	},

	_iconMap : {
		"Documentation" : "course-book",
		"Phone" : "iphone",
		"iPhone" : "iphone",
		"iPad" : "ipad",
		"Android Phone" : "iphone",
		"Android Tablet" : "ipad",
		"Tablet" : "ipad",
		"Desktop" : "sys-monitor"
	},

	_groupMap : {
		1 : "Blue Crystal",
		2 : "Mobile Visual Identity",
		3 : "About"
	},
	
	_dialog : null,

	press : function (evt) {
	
		// retrieve config from model
		var tile = evt.getSource();
		var bindingPath = tile.getBindingContext().getPath();
		var config = this.getView().getModel().getProperty(bindingPath);
		if (!config) {
			return;
		}
		
		if (jQuery.device.is.phone || jQuery.device.is.tablet) {
			
			// find default path
			var path = null;
			for (var i = 0 ; i < config.paths.length ; i++) {
				if (config.paths[i].standard) {
					path = config.paths[i];
					break;
				}
			}
			
			// open app
			if (path) {
				var isDocu = (path.name.indexOf("Documentation") !== -1);
				var target = this._getTarget(path.path, isDocu);
				sap.m.URLHelper.redirect(target, !isDocu);
			}
			
		} else {
			
			// create dialog
			if (!this._dialog) {
				this._dialog = new sap.m.Dialog({
					content : new sap.m.List({
					}),
					rightButton : new sap.m.Button({
						text : "Close",
						press : jQuery.proxy(function () {
							this._dialog.close();
						}, this)
					})
				});
			}
			
			// bind list
			var that = this;
			var list = this._dialog.getContent()[0];
			list.setModel(new sap.ui.model.json.JSONModel(config));
			list.bindAggregation("items", {
				path: "/paths",
				sorter: new sap.ui.model.Sorter("group", false, function (oContext) {
					var group = oContext.getProperty("group");
					var text = (that._groupMap[group]) ? that._groupMap[group] : "?";
					return {
						key: group, 
						text: text
					};
				}),
				template : new sap.m.StandardListItem({
					title : "{name}",
					type : "Active",
					icon : {
						path: "name",
						formatter: function (name) {
							var icon = (that._iconMap[name]) ? that._iconMap[name] : "question-mark";
							return "sap-icon://" + icon;
						}
					},
					customData : new sap.ui.core.CustomData({
						key : "path",
						value : "{path}"
					}),
					press : function (evt) {
						var name = evt.getSource().getTitle();
						var path = evt.getSource().data("path");
						var isDocu = name.indexOf("Documentation") !== -1;
						var target = that._getTarget(path, isDocu);
						that._dialog.close();
						sap.m.URLHelper.redirect(target, !isDocu);
					}
				})
			});
			
			// open dialog
			this._dialog.setTitle(config.name);
			this._dialog.open();
		}
	},
	
	_getTarget : function (path, isDocu) {
		return (isDocu) ? "../../../../../" + path : "../../../../../test-resources/sap/m/demokit/" + path;
	}
});