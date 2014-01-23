jQuery.sap.require("sap.ui.ux3.Shell");

(function() {

	var newsMainView = {};
	var launchMainView = {};
	var oShell = {};

	var mConfigurationProperties = {
		"defaultImage" : "",
		"useDefaultImage" : "",
		"cycleInterval" : "5",
		"refreshInterval" : "",
		"feed1" : "http://www.npr.org/rss/rss.php?id=1001",
		"feed2" : "http://edge5.catalog.video.msn.com/videoByTag.aspx?mk=us&sf=HourlyCount&st=1&sd=-1&ns=VC_Supplier&tag=Fox%20Sports&vs=0&ind=&ps=&rct=&ff=88&responseEncoding=rss&title=FOX%20Sports%20Video%20on%20MSN%3A%20Most%20Watched&template=foxsports&p=foxsports",
		"feed3" : "",
		"feed4" : "",
		"feed5" : "",
		"feed6" : "",
		"feed7" : "",
		"feed8" : "",
		"feed9" : "",
		"feed10" : "",
		"iFilter1" : "",
		"iFilter2" : "",
		"iFilter3" : "",
		"iFilter4" : "",
		"iFilter5" : "",
		"eFilter1" : "",
		"eFilter2" : "",
		"eFilter3" : "",
		"eFilter4" : "",
		"eFilter5" : ""
	};

	var mLaunchConfigurationProperties = {
			"tile-title" : "Launch DSO",
			"tile-icon" : "shortcut",
			"semantic-dropdown" : "DSO"
	};

	sap.ui.jsview("view.App", {

		chipMock : {

			configurationUi : {
				_configurationUi : null,

				setConfigurationUi : function(oView) {

					this._configurationUi = oView;
				}
			},

			configuration : {
				getParameterValueAsString : function(sParameterName) {

					return mConfigurationProperties[sParameterName];
				}
			},

			writeConfiguration : {

				setParameterValues : function(mConfigurationUpdates, fnSuccess, fnFailure) {

					for ( var key in mConfigurationUpdates) {
						if (mConfigurationUpdates.hasOwnProperty(key) && mConfigurationProperties.hasOwnProperty(key)) {
							mConfigurationProperties[key] = mConfigurationUpdates[key];
						}
					}

					oShell.removeAllContent();
					newsMainView.getController().initializeModel();
					newsMainView.getController().display();
					
					oShell.addContent(new sap.ui.commons.layout.MatrixLayout({
						columns : 2,
						rows : [ new sap.ui.commons.layout.MatrixLayoutRow({
							height : '1450px',
							cells : [ new sap.ui.commons.layout.MatrixLayoutCell({
								content : newsMainView
							}), new sap.ui.commons.layout.MatrixLayoutCell({
								content : newsMainView.getViewData().chip.configurationUi._configurationUi
							}) ]
						}), new sap.ui.commons.layout.MatrixLayoutRow({
							height : '300px',
							cells : [ new sap.ui.commons.layout.MatrixLayoutCell({
								content : launchMainView
							}), new sap.ui.commons.layout.MatrixLayoutCell({
								content : launchMainView.getViewData().chip.configurationUi._configurationUi
							}) ]
						}) ]
					}));

				}
			},

			fullscreen : {

				_fullScreen : false,
				_fnEventHandler : null,

				attachFullscreen : function(fnEventHandler) {

					this._fnEventHandler = fnEventHandler;
				},

				getFullscreen : function() {

					return this._fullScreen;
				},

				setFullscreen : function(bOn) {

					this._fullScreen = bOn;
					if (this._fnEventHandler) {
						this._fnEventHandler();
					}
				}
			},

			refresh : {
				attachRefresh : function(fnEventHandler) {

				}
			},

			url : {
				toAbsoluteUrl : function(sUrl) {

					return sUrl;
				}
			}
		},

		launchChipMock : {

			configurationUi : {
				_configurationUi : null,

				setConfigurationUi : function(oView) {

					this._configurationUi = oView;
				}
			},

			configuration : {
				getParameterValueAsString : function(sParameterName) {

					return mLaunchConfigurationProperties[sParameterName];
				}
			},

			writeConfiguration : {

				setParameterValues : function(mConfigurationUpdates, fnSuccess, fnFailure) {

					for ( var key in mConfigurationUpdates) {
						if (mConfigurationUpdates.hasOwnProperty(key) && mLaunchConfigurationProperties.hasOwnProperty(key)) {
							mLaunchConfigurationProperties[key] = mConfigurationUpdates[key];
						}
					}
					
					
					oShell.removeAllContent();
					launchMainView.getController().display();
					
					oShell.addContent(new sap.ui.commons.layout.MatrixLayout({
						columns : 2,
						rows : [ new sap.ui.commons.layout.MatrixLayoutRow({
							height : '1450px',
							cells : [ new sap.ui.commons.layout.MatrixLayoutCell({
								content : newsMainView
							}), new sap.ui.commons.layout.MatrixLayoutCell({
								content : newsMainView.getViewData().chip.configurationUi._configurationUi
							}) ]
						}), new sap.ui.commons.layout.MatrixLayoutRow({
							height : '300px',
							cells : [ new sap.ui.commons.layout.MatrixLayoutCell({
								content : launchMainView
							}), new sap.ui.commons.layout.MatrixLayoutCell({
								content : launchMainView.getViewData().chip.configurationUi._configurationUi
							}) ]
						}) ]
					}));
				}
			},

			url : {
				toAbsoluteUrl : function(sUrl) {

					return sUrl;
				}
			}
		},

		getControllerName : function() {

			return "view.App";
		},

		createContent : function(oController) {

			oShell = new sap.ui.ux3.Shell("unifiedShell", {
				icon : jQuery.sap.getModulePath("sap.ui.core", '/') + "mimes/logo/sap_73x36.gif",
				showLogoutButton : false,
				showTools : false,
				showPane: false,
		        appTitle: "News Tile Application Shell"
			});

			newsMainView = sap.ui.view({
				type : sap.ui.core.mvc.ViewType.JS,
				id : this.createId("news_main_view"),
				viewName : "newstile.NewsMain",
				viewData : {
					chip : this.chipMock
				}
			});
			
			launchMainView = sap.ui.view({
				type : sap.ui.core.mvc.ViewType.JS,
				id : this.createId("launch_main_view"),
				viewName : "launchtile.LaunchMain",
				viewData : {
					chip : this.launchChipMock
				}
			});

			oShell.addContent(new sap.ui.commons.layout.MatrixLayout({
				columns : 2,
				rows : [ new sap.ui.commons.layout.MatrixLayoutRow({
					height : '1450px',
					cells : [ new sap.ui.commons.layout.MatrixLayoutCell({
						content : newsMainView
					}), new sap.ui.commons.layout.MatrixLayoutCell({
						content : newsMainView.getViewData().chip.configurationUi._configurationUi
					}) ]
				}), new sap.ui.commons.layout.MatrixLayoutRow({
					height : '300px',
					cells : [ new sap.ui.commons.layout.MatrixLayoutCell({
						content : launchMainView
					}), new sap.ui.commons.layout.MatrixLayoutCell({
						content : launchMainView.getViewData().chip.configurationUi._configurationUi
					}) ]
				}) ]
			}));

			return oShell;
		}
	});
}());
