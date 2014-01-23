jQuery.sap.declare("sap.ca.ui.quickoverview.Quickoverview");
jQuery.sap.require("sap.ui.base.Object");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");

sap.ca.ui.quickoverview.QuickviewUtils = (function() {
	var _INIT = "initstuff";

	return ({

		getAttrValue : function(sValue, oModel) {
			// take over the value or read the value-'path' from model in case
			// model is provided
			//deep attributes:  oModel.getData()["deeptest"]["deepattr1"]

			if (!sValue) {
				return "";
			}
			var iBrStart = sValue.indexOf('{');
			var iBrEnd = sValue.indexOf('}')
			if (iBrStart > -1 && oModel) {
				// read modelattribute

				var sPath = sValue;
				sPath = sPath.substring(iBrStart + 1);
				sPath = sPath.substring(0, iBrEnd - 1);

				sPath = sPath.replace(/\//g, ".")
				// remove the first '.'
				var sFirstChar = sPath.substring(0, 1)
				if (sFirstChar === ".") {
					sPath = sPath.substring(1)
				}

				var sPathValue = oModel.getData()[sPath];
				return sPathValue;
			} else {
				return sValue;
			}

		}

	});
}());

sap.ca.ui.quickoverview.QuickviewBase = (function() {
	var _QVPOPOVERID = "qvPopover";
	var _QVVIEWNAME = "qvView";
	var _QVBACKBUTTON = "qvBackBtn";
	var _QVTITLE =  "qvTitle"; 	
	var _QVNAVCNT =  "qvNavCnt";
	var _QVINITPAGE = "p1";
	var _DEFAULTHEIGHT = "38rem";
	var _oApp = null;
	
//  todo: replace 'byId() statements - rather use the following variable 	
//	var _oQvControls = {};
//	_oQvControls.oPopover = null;
	

	var getViewName = function() {
		return "sap.ca.ui.quickoverview.Quickview";
	};
	
	var showHideBackButton = function(){
		//compare current displayed page with initial page
		var oBackButton = sap.ui.getCore().byId(_QVBACKBUTTON);
		var oNav = sap.ui.getCore().byId(_QVNAVCNT);
		oBackButton.setVisible((oNav.getCurrentPage().sId !== oNav.getInitialPage()));
		
	};
	
	
	var configureQvView = function(oQvView, oConfig, oQvPage, oQuickoverview) {
		//hosting view: set model for application attributes
		oQvView.setModel(oConfig.oModel);
		
		//hosting controller: set additional properties
		var oController = oQvView.getController();
		configController(oController, oConfig, oQuickoverview);
		
		//configure quickoverview...embed subview etc.
		var oQvViewSetup = oController.configureView();
		
		//popover Title and popoverheight
		configPopover( oConfig.title, oQvPage, oConfig.popoverHeight);
		
		//call application 'exit'
		var sCallback = oConfig.afterQvConfigured;
		if ( typeof(sCallback) == "function"){
			sCallback(oQvViewSetup.oQvView, oQvViewSetup.oSubView);
		}	
		
	};
	

	var configPopover = function(sTitle, oPage, sHeight) {
		if (!sTitle) {
			sTitle = sap.ca.ui.utils.resourcebundle
					.getText("Quickoverview.popovertitle")
		}

		var oTitle = sap.ui.getCore().byId(_QVTITLE);
		oTitle.setText(sTitle);
		//set title also for page: ( during 'backnavigation'
		//this page title will be taken for the popover title ) 
		oPage.setTitle(sTitle);

		
		var sThisHeight = sHeight;
		if (!sThisHeight)
			{ 
				sThisHeight = _DEFAULTHEIGHT;
			}

		var oPopover = sap.ui.getCore().byId(_QVPOPOVERID);
		
		oPopover.setContentHeight(sThisHeight);
		oPage.qvHeight = sThisHeight; //hack to buffer popoverheight !
	};
	
	
	var setPopoverTitleFromPage = function(oPage){
		var oTitle = sap.ui.getCore().byId(_QVTITLE);
		oTitle.setText(oPage.getTitle());
	};
	
	var setPopoverHeightFromPage = function(oPage){
		var oPopover = sap.ui.getCore().byId(_QVPOPOVERID);
		oPopover.setContentHeight(oPage.qvHeight);
	};

	var configController = function(oController, oConfig, oQuickoverview) {
		//QUICKOVERVIEW HOSTVIEW controller: add configuration properties 
		var sEmpty = "";
		oController.viewConfig = {};
		oController.viewConfig.headerNoIcon = (oConfig.headerNoIcon) ? oConfig.headerNoIcon
				: false;		
		oController.viewConfig.headerTitle = (oConfig.headerTitle) ? oConfig.headerTitle
				: sEmpty;
		oController.viewConfig.headerSubTitle = (oConfig.headerSubTitle) ? oConfig.headerSubTitle
				: sEmpty;
		oController.viewConfig.headerImgURL = (oConfig.headerImgURL) ? oConfig.headerImgURL	: sEmpty;
		oController.viewConfig.subViewName = (oConfig.subViewName) ? oConfig.subViewName : sEmpty;
		oController.viewConfig.quickOverview = oQuickoverview;
		oController.viewConfig.beforeExtNav = (oConfig.beforeExtNav) ? oConfig.beforeExtNav : sEmpty;
		oController.viewConfig.beforeExtNavSubHdr = (oConfig.beforeExtNavSubHdr) ? oConfig.beforeExtNavSubHdr : sEmpty;		

	};

	// create initial popover and page and view
	var createQVPopover = function() {

		var popoverId = _QVPOPOVERID;
		var oPopover = sap.ui.getCore().byId(popoverId);
		if (!oPopover) {

			// add nav container + page + view
			var oNavContainer = new sap.m.NavContainer(_QVNAVCNT, {
				initialPage : _QVINITPAGE,
				height : "100%",
				pages : [ new sap.m.Page(_QVINITPAGE, {
					showHeader : false,
					enableScrolling : true,
					content : [ new sap.ui.view({
						id : "qvView",
						viewName : "sap.ca.ui.quickoverview.Quickview",
						type : sap.ui.core.mvc.ViewType.XML
					})
					]
				}) ]
			});

			
			var fAfterNavigate = function(oData) {
				
				var sPageId;
				if (oData.mParameters.isBack) {
					// destroy and remove previous page
					sPageId = oData.mParameters.fromId;
					var oPrevPage = this.getPage(sPageId);
					if ( oPrevPage ) {
						oPrevPage.destroy();
						this.removePage(sPageId);						
					}

					//update popover title
					setPopoverTitleFromPage(this.getPage(oData.mParameters.toId));
					setPopoverHeightFromPage(this.getPage(oData.mParameters.toId));					
				} else if (oData.mParameters.isBackToTop) {
					// destroy and remove previous page stack
					var count = this.getPages().length;
					for ( var i = count - 1; i > -1; i--) {
						sPageId = this.getPages()[i].sId;
						if (sPageId !== this.getInitialPage()) {
							this.getPage(sPageId).destroy();
							this.removePage(sPageId);
						}
					}
				}
				showHideBackButton();

			}
			oNavContainer.attachAfterNavigate(fAfterNavigate);

			//prepare header
			var oBackButton = new sap.m.Button({
				id : _QVBACKBUTTON,
				icon : "sap-icon://nav-back",
				visible : false,
				tap : function() {
					var nav = sap.ui.getCore().byId(_QVNAVCNT);
					nav.back();
				}
			});
			
			var oTitle = new sap.m.Label({
				id : _QVTITLE,
				visible : true
			});
		
			var oCustHeader = new sap.m.Bar({	
				translucent : false,
				contentLeft : oBackButton,
				contentMiddle : oTitle
			});

			oPopover = new sap.m.ResponsivePopover(popoverId, {
				customHeader : oCustHeader,
				//modal : true, //required for analyzing
				showHeader : true,
				placement : sap.m.PlacementType.Right,
				verticalScrolling : true,
				contentWidth : "20em", // "320px", // width of an IPhone
				contentHeight : _DEFAULTHEIGHT,
				content : oNavContainer
			});
			
			
			var fnPopoverClose = function() {
				var nav = sap.ui.getCore().byId(_QVNAVCNT);
				nav.backToTop();
				showHideBackButton();				
			};
			oPopover.attachAfterClose(fnPopoverClose);
			
			//load stylesheet for object header icon coloring
			//"sap/ca/ui/themes/base/QuickOverview.css"
			var sPath = jQuery.sap.getModulePath("sap/ca/ui") + "/themes/base/QuickOverview.css";
			jQuery.sap.includeStyleSheet(sPath);			
			
		}

		return oPopover;
	};

	return ({

		initQVPopover : function(oParentCard) {
			var oPopover = createQVPopover();
		},

		openQVPopover : function(oSourceControl, oConfig, oLocation,
				oQuickoverview) {

			// set additional attributes to the viewcontroller
			var oView = sap.ui.getCore().byId(_QVVIEWNAME);
			var oPage = sap.ui.getCore().byId(_QVINITPAGE);
			
			//set up content of popover
			configureQvView(oView, oConfig, oPage, oQuickoverview);

			//open popover ...with placement! 
			try {
				// jQuery.sap.history.addVirtualHistory();
				// fix: dynamic calculation of placement type
				var oPopover = sap.ui.getCore().byId(_QVPOPOVERID);				
				if (!oLocation) {
					var $link = oSourceControl.$ ? oSourceControl.$()
						: jQuery(oSourceControl);
					var iScreenWidth = $(window).width();
					var iOffsetLeft = $link.offset().left;

					var sPlacement = sap.m.PlacementType.Left;
				
					if (iOffsetLeft < iScreenWidth / 2) {
						sPlacement = sap.m.PlacementType.Right;
						var iControlWidth = $link.width();
						oPopover.setOffsetX(-iControlWidth + 50);
					} else {
						oPopover.setOffsetX(0);
					}
					oPopover.setOffsetY(0);
					oPopover.setPlacement(sPlacement);
				}
				else {
					oPopover.setOffsetX(oLocation.offsetX);
					oPopover.setOffsetY(oLocation.offsetY);		
					oPopover.setPlacement(oLocation.placement);					
				}
				oPopover.openBy(oSourceControl);
			} catch (err) {
				// jQuery.sap.log.error(sap.ca.common.uilib.dialogResourceBundle.getText("YMSG_BC_ERROR",
				// [err.message]));
			}
		},

		navQVPopover : function(oConfig, oQuickoverview) {

			//create target (Quickview ) view
			var oView = new sap.ui.view({
				viewName : "sap.ca.ui.quickoverview.Quickview",
				type : sap.ui.core.mvc.ViewType.XML
			});
			
			//create target page
			var oPage = new sap.m.Page({
				showHeader : false,
				enableScrolling : true,
				content : [ oView ]
			});			
			
			//set up content of popover
			configureQvView(oView, oConfig, oPage, oQuickoverview);
			
			var nav = sap.ui.getCore().byId(_QVNAVCNT);
			nav.addPage(oPage);
			nav.to(oPage.getId(), "show");

		},


	});
}());

// ///////////////////////////////////////////////
// Public Interface: sap.ca.ui.quickoverview...
// ///////////////////////////////////////////////
sap.ui.base.Object.extend("sap.ca.ui.quickoverview.Quickoverview", {

	iControlType : 0, // popover
	oConfig : {}, // QV Configuration
	oParentCard : undefined,
	oSourceControl : undefined,

	// Public interface: constructor
	constructor : function(oConfig, oApp, oParentCard) {
		if (!oConfig)
			return;

		//SIL - TODO - filter/verify the incoming parameters!
		this.oInitialConfig = oConfig;

		// init
		sap.ca.ui.quickoverview.QuickviewBase.initQVPopover(this.oParentCard);
	},

	// Public interface: openBy - initially called when opening the popover
	openBy : function(oSourceControl, oLocation) {
		if (!this.oInitialConfig)
			return;
		this.oSourceControl = oSourceControl;
		
		// use ResponsivePopover
		sap.ca.ui.quickoverview.QuickviewBase.openQVPopover(oSourceControl,
				this.oInitialConfig, oLocation, this);

		return;
	},

	navigateTo : function(oConfig) {
		sap.ca.ui.quickoverview.QuickviewBase.navQVPopover(oConfig, this);

	},

});