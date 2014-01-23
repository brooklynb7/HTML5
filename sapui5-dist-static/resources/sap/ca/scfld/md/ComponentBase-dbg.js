// define a root UIComponent which exposes the main view
jQuery.sap.declare("sap.ca.scfld.md.ComponentBase");
jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.ca.scfld.md.ConfigurationBase");
jQuery.sap.require("sap.ui.core.routing.Router");
jQuery.sap.require("sap.ui.core.routing.History");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

sap.ui.core.UIComponent.extend("sap.ca.scfld.md.ComponentBase", {
	constructor : function(sId, mSettings) {
		this._aQueue = [];
		this._bRouterCloseDialogs = true;

		// merge base Init and app init
		var fAppInit;
		var fBaseInit = jQuery.proxy(function() {
			sap.ui.core.UIComponent.prototype.init.apply(this, arguments); // calls createContent (among others)

			//this guy handles the navigation
			// this._bRouterCloseDialogs might have been set in the init of the application
			this._routeMatchedHandler = new sap.m.routing.RouteMatchedHandler(this.getRouter(), this._bRouterCloseDialogs);
		}, this);
		
		fAppInit = jQuery.proxy(this.init, this);
		this.init = function() {
			fBaseInit();
			fAppInit();
			
			var oRouter = this.getRouter();
			oRouter.initialize();
		};
		sap.ui.core.UIComponent.prototype.constructor.apply(this, arguments);
	},

	init : function() {

	},	
	setRouterSetCloseDialogs: function(bCloseDialogs){
		this._bRouterCloseDialogs = bCloseDialogs;
		if (this._routeMatchedHandler){
			this._routeMatchedHandler.setCloseDialogs(bCloseDialogs);
		}
	}
});

sap.ca.scfld.md.ComponentBase.createMetaData = function(sAppType, oAppMeta) {
	var setRouteDefaults = function(oDefaults, oRoutes) {
		for ( var sRouteName in oRoutes) {
			if (!oRoutes[sRouteName].targetControl && oDefaults.targetControl) {
				oRoutes[sRouteName].targetControl = oDefaults.targetControl;
			}

			if (!oRoutes[sRouteName].targetAggregation && oDefaults.targetAggregation) {
				oRoutes[sRouteName].targetAggregation = oDefaults.targetAggregation;
			}

			if (!oRoutes[sRouteName].viewPath && oDefaults.viewPath) {
				oRoutes[sRouteName].viewPath = oDefaults.viewPath;
			}

			if (!oRoutes[sRouteName].viewLevel && oDefaults.viewLevel) {
				oRoutes[sRouteName].viewLevel = oDefaults.viewLevel;
			}
		}
		return oRoutes;
	};

	var oMeta = {};

	// build header data
	for ( var sPropName in oAppMeta) {
		if (sPropName !== "viewPath" && sPropName !== "masterPageRoutes" && sPropName !== "detailPageRoutes"
				&& sPropName !== "fullScreenPageRoutes") {
			oMeta[sPropName] = oAppMeta[sPropName];
		}
	}

	if (sAppType === "MD") {
		oMeta.routing = {
			"config" : {
				"viewType" : "XML",
				"viewPath" : oAppMeta.viewPath,
				"targetAggregation" : "detailPages",
				"viewLevel" : undefined, // the masterDetailRoute and the fioriContentRoute should rely on the browser
				// history direction
				"clearTarget" : false
			},
			"routes" : {
				"masterDetail" : {
					"view" : "MainSplitContainer",
					"name" : "masterDetail",
					"viewPath" : "sap.ca.scfld.md.view",
					"targetControl" : "fioriContent", // This is the control in which the new view will be placed
					"targetAggregation" : "pages", // This is the aggregation in which the new view will be placed
					"subroutes" : {
						"master" : { // master is the name of the route
							"pattern" : "", // will be the url and from has to be provided in the data
							"view" : "S2",
							"targetControl" : "MainSplitContainer",
							"targetAggregation" : "masterPages",
							"viewLevel" : 0,
							"subroutes" : {
								"detail" : {
									"pattern" : "detail/{contextPath}",
									"view" : "S3",
									"viewLevel" : 1
								},
								"noData" : {
									"pattern" : "noData/{viewTitle}/{languageKey}",
									"viewPath" : "sap.ca.scfld.md.view",
									"view" : "empty",
									"viewLevel" : 1
								}
							}
						},
					}
				},
				"fullScreen" : {
					"view" : "App",
					"viewPath" : "sap.ca.scfld.md.view",
					"targetControl" : "fioriContent", // This is the control in which the new view will be placed
					"targetAggregation" : "pages", // This is the aggregation in which the new view will be placed
					"subroutes" : {}
				}
			}
		};
	} else {
		oMeta.routing = {
			"config" : {
				"viewType" : "XML",
				"viewPath" : oAppMeta.viewPath,
				"targetAggregation" : "pages",
				"viewLevel" : undefined, // the masterDetailRoute and the fioriContentRoute should rely on the browser
				// history direction
				"clearTarget" : false
			},
			"routes" : {
				"fullScreen" : {
					"view" : "App",
					"viewPath" : "sap.ca.scfld.md.view",
					"targetControl" : "fioriContent", // This is the control in which the new view will be placed
					"targetAggregation" : "pages", // This is the aggregation in which the new view will be placed
					"subroutes" : {
						"noData" : {
							"pattern" : "noData/{viewTitle}/{languageKey}",
							"viewPath" : "sap.ca.scfld.md.view",
							"view" : "empty",
							"viewLevel" : 2
						}
					}
				}
			}
		};
	}
	var oDetailRoutes;
	var oMasterRoutes;
	var oFullScreenRoutes;
	try {
		oDetailRoutes = oMeta.routing.routes.masterDetail.subroutes.master.subroutes;
	} catch (e) {
	}
	try {
		oMasterRoutes = oMeta.routing.routes.masterDetail.subroutes;
	} // We only support one master
	catch (e) {
	}
	try {
		oFullScreenRoutes = oMeta.routing.routes.fullScreen.subroutes;
	} catch (e) {
	}

	if (oDetailRoutes) {
		jQuery.extend(true, oDetailRoutes, oAppMeta.detailPageRoutes);
	}
	if (oMasterRoutes) {
		jQuery.extend(true, oMasterRoutes, oAppMeta.masterPageRoutes);
	}
	if (oFullScreenRoutes) {
		jQuery.extend(true, oFullScreenRoutes, oAppMeta.fullScreenPageRoutes);
	}

	setRouteDefaults({
		targetControl : "MainSplitContainer",
		targetAggregation : "masterPages",
		viewPath : oAppMeta.viewPath,
		viewLevel : 0
	}, oMasterRoutes);
	setRouteDefaults({
		// targetControl : "MainSplitContainer",
		targetAggregation : "detailPages",
		viewPath : oAppMeta.viewPath,
		viewLevel : 1
	}, oDetailRoutes);
	setRouteDefaults({
		targetControl : "app",
		targetAggregation : "pages",
		viewPath : oAppMeta.viewPath,
		viewLevel : 2
	}, oFullScreenRoutes);

	return oMeta;

};