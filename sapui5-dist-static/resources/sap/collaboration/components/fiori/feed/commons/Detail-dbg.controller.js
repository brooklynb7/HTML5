/*!
 * @copyright@
 */
jQuery.sap.require("sap.collaboration.components.utils.JamUtil");

/**********************************************************
* Detail View Controller
*
* Is the controller for the Detail View and is responsible 
* for loading JAM API Script and for creating and rendering
* the JAM Feed Widget
***********************************************************/

sap.ui.controller("sap.collaboration.components.fiori.feed.commons.Detail", {
	
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* It initializes class variables.
* @memberOf detail
*/
	onInit: function() {
		var self = this;
		this.sJamToken = this.getView().getViewData().jamToken;
		this.sJamURL = this.getView().getViewData().jamURL;
		this.oLangBundle = this.getView().getViewData().langBundle;
		this.sPrefixId  = this.getView().getViewData().controlId;
		this.oBusinessObject = this.getView().getViewData().object;
		
		if (this.getView().getViewData().appType === sap.collaboration.AppType.split){
			this.sFeedType = sap.collaboration.FeedType.follows;
		} else{
			this.sFeedType = this.getView().getViewData().feedType;
			this.getView().oDetailPage.setShowHeader(false);
		}
		
		this.oJamUtil = new sap.collaboration.components.utils.JamUtil();
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf detail
*/
	onBeforeRendering: function() {
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* It calls the loadFeedWidgetScript() function. Please refer to this function for the JSDoc.
* @memberOf detail
*/
	onAfterRendering: function() {		
		try{
			this.loadFeedWidgetScript(this.sJamURL);			
		} catch(oError){
			jQuery.sap.log.error(oError, "", "sap.collaboration.components.fiori.feed.commons.Detail.onInit()");
			throw oError;
		}
	},
	
	/**
	 * Loads the JAM API scripts used to create feed widget
	 * @private
	 */
	loadFeedWidgetScript: function(sJamURL){
	   var self = this;	 
		   
	   try{
		   //1) Prepare the widget data
		   var sGroupIds = self.getView().getViewData().groupIds;
		   var oWidgetData = this.oJamUtil.prepareWidgetData(self.sJamToken, self.sFeedType, sGroupIds, self.oBusinessObject);
		   	   
		   // Callback function to get notified once the script has been loaded
		   var fLoadSuccess = function(response){
			   jQuery.sap.log.info("Jam Feed Widget Loaded Successfully","sap.collaboration.components.fiori.feed.commons.Detail.onInit()");
			   //3) Initialize the jam widget
			   self.oJamUtil.initializeJamWidget(self.sJamURL);	
			   
			   //4) Create the Feed Widget
			   self.oJamUtil.createJamWidget(self.sPrefixId + "widgetContainer", oWidgetData);
	   		};	
		   		   	
		   	var fLoadError = function(oError){
		   		jQuery.sap.log.error(oError, "", "sap.collaboration.components.fiori.feed.commons.Detail.loadFeedWidgetScript()");
		   		throw oError;
		   	};
		   	
		    //2) Load the feed widget
		   	this.oJamUtil.loadFeedWidgetScript(sJamURL, fLoadSuccess, fLoadError);
			
		} catch(oError){
			jQuery.sap.log.error(oError, "", "sap.collaboration.components.fiori.feed.commons.Detail.loadFeedWidgetScript()");
			throw oError;
		}
			
	}
	   
/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf detail
*/
//	onExit: function() {
//
//	}
	
});