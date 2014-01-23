/*!
 * @copyright@
 */

/*******************************************************
* App View Controller
*
* Is the controller for the App View and is responsible 
* for creating and setting a page for the ui5 none-split
* app. This page will display the JAM Feed Widget
********************************************************/

sap.ui.controller("sap.collaboration.components.fiori.feed.app.App", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* It initialize class variables
* @memberOf App
*/
	onInit: function() {
		this.oApp = this.getView().oApp;
		this.oOdataModel = this.getView().getViewData().odataModel;
		this.oLangBundle = this.getView().getViewData().langBundle;
		this.sPrefixId = this.getView().getViewData().controlId;
		this.sAppType = this.getView().getViewData().appType;
		this.sFeedType = this.getView().getViewData().feedType;
		this.sGroupIds = this.getView().getViewData().groupIds;
		this.oBusinessObject = this.getView().getViewData().object;
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* It calls the initializeUtils() and the createDetailPage() functions. Refer to these function for the JSDoc.
* @memberOf App
*/
	onBeforeRendering: function() {
		this.initializeUtils();
		this.createDetailPage();
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf App
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf App
*/
//	onExit: function() {
//
//	}
	
/**
 * Initializes an object from the sap.collaboration.components.utils.OdataUtil class
 * @private
 */
	initializeUtils : function() {
		this.oODataUtil = new sap.collaboration.components.utils.OdataUtil();
	},
	
/**
 * Creates and sets a page for the app. This page is the detail view
 * @private
 */
	createDetailPage : function() {
		var sJamUrl = this.oODataUtil.getJamUrl(this.oOdataModel);
		var sJamToken = this.oODataUtil.getJamToken(this.oOdataModel);
		
		if (this.sAppType === sap.collaboration.AppType.widget){
			this.getGroupIds();
		}
		
		var oDetailView = sap.ui.view({
			id: this.sPrefixId + "detailView", 
			viewData : {
				controlId: this.sPrefixId,
				jamURL:	sJamUrl,
				jamToken: sJamToken,
				appType: this.sAppType,
				feedType: this.sFeedType,
				groupIds: this.sGroupIds,
				object: this.oBusinessObject,
				langBundle: this.oLangBundle
			}, 
			type: sap.ui.core.mvc.ViewType.JS, 
			viewName: "sap.collaboration.components.fiori.feed.commons.Detail"
		});
		
		this.oApp.addPage(oDetailView); 
		this.oApp.setInitialPage(oDetailView); 
	},
	
/**
 * Gets the IDs of the JAM groups belonging to a user or the IDs of the JAM groups belonging to a user and related to a context in a backend system.
 * In case the feed type is "group" and the groups IDs are not set by the developer, it gets all the JAM groups belonging to a user
 * In case the feed type is "context" and the groups IDs are not set by the developer, it gets JAM groups belonging to a user and related to a context 
 * in the same time
 * In case the feed type is "context" and the groups IDs are set by the developer, it gets JAM groups belonging to a user and related to a context in 
 * the same time and uses them to filter the IDs set by the developer
 * @private
 */
	getGroupIds : function() {
		var aGroupData;
		if (this.sFeedType === sap.collaboration.FeedType.group && (this.sGroupIds === undefined || this.sGroupIds === "")){
			aGroupData = this.oODataUtil.getGroupsData(this.oOdataModel, "/Groups");
			this.sGroupIds = this.oODataUtil.getGroupIds(aGroupData);
		}
		else if (this.sFeedType === sap.collaboration.FeedType.objectGroup && (this.sGroupIds === undefined || this.sGroupIds === "")){
		    aGroupData = this.oODataUtil.getGroupsData(this.oOdataModel, "/BusinessObjects('" + this.oBusinessObject.id + "')/AssignedGroups");
		    this.sGroupIds = this.oODataUtil.getGroupIds(aGroupData);
		}
		else if (this.sFeedType === sap.collaboration.FeedType.objectGroup && !(this.sGroupIds === undefined || this.sGroupIds === "")){
			aGroupData = this.oODataUtil.getGroupsData(this.oOdataModel, "/BusinessObjects('" + this.oBusinessObject.id + "')/AssignedGroups");
			var sContextRelatedGroupsId = this.oODataUtil.getGroupIds(aGroupData);
			this.sGroupIds = this.filterGroupIds(sContextRelatedGroupsId);
		}
	},
	
/**
 * filter the JAM groups IDs set by the developer using the context related JAM groups IDs 
 * @param {string} sContextRelatedGroupsId
 * @private
 */
	filterGroupIds : function(sContextRelatedGroupIds) {
		var sGroupIds;
		var aContextRelatedGroupIds = sContextRelatedGroupIds.split(",");
		var aInputGroupIds = this.sGroupIds.split(",");
		
		for(var i=0; i<aInputGroupIds.length; i++){
			if(aContextRelatedGroupIds.indexOf(aInputGroupIds[i]) === -1){
				aInputGroupIds.splice(i,1);
				i = i - 1;
			}
		}
		
		if (aInputGroupIds.length !== 0){
			sGroupIds = aInputGroupIds.join();
		} else{
			sGroupIds = "";
		}
		
		return sGroupIds;
	}
	
});