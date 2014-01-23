/*!
 * @copyright@
 */

/*************************************************************
* JamUtil helper class
*
* Is responsible for the integration and communication with the
* JAM APIs
**************************************************************/

jQuery.sap.declare("sap.collaboration.components.utils.JamUtil");

sap.ui.base.Object.extend("sap.collaboration.components.utils.JamUtil",{
	
	FeedRenderedControllerConstants : {
		jamWidgetCSS :	{
			avatar: false, 
			skin: "gr", 
			post_mode: "inline", 
			reply_mode: "inline",
			mobile_mode: true,
			live_update: true
		}
	},
	
	JamFeedType: {
		Follows: "follows",
		Company: "company",
		Group: "group",
		ObjectGroup: "context",
		Object: "external"
	},
	
	JamCallback: {
		autocomplete: "autocomplete",
		post_status: "post_status",
		link: "link"		
	},	
	
	JamEventType: {
		mouseover: "mouseover",
		mouseout: "mouseout",
		click: "click"
	},
	
	/**
	 * Creates the feed widget
	 * @param {string} sJamURL The URL for the JAM System
	 * @param {callback} fLoadSuccess A call back function in case of success
	 * @param {callback} fLoadError A call back function in case of error
	 * @private
	 */
	loadFeedWidgetScript : function(sJamURL, fLoadSuccess, fLoadError) {
		var self = this;
		var sScriptUrl = sJamURL  + "/assets/feed_widget_v1.js";
		
		jQuery.sap.includeScript(sScriptUrl, "sap.collaboration.feed.JamFeedWidget", fLoadSuccess, fLoadError);
		jQuery.sap.log.info("Jam Feed Widget Script Loading Asynchronously","sap.collaboration.components.utils.JamUtil.loadFeedWidgetScript()");
		
	},
	
	/**
	 * Initialize the JAM feed widget by calling JAM API
	 * @param {string} sJamURL The URL for the JAM System
	 * @private
	 */
	initializeJamWidget : function(sJamURL) {
		try{
		   this.sapjam = eval('sapjam');
		   this.sapjam.feedWidget.init(sJamURL + "/widget/v1/feed", "single_use_token");
		   jQuery.sap.log.info("Jam Feed Widget Initialized", "sap.collaboration.components.utils.JamUtil.initializeJamWidget()");
		   // "/c/cubetree.com/widget/v1/feed", "single_use_token"
		} catch(oError){
			jQuery.sap.log.error(oError, "", "sap.collaboration.components.utils.JamUtil.initializeJamWidget()");
			throw oError;
		}
	},

   /**
	 * Creates the JAM feed widget by calling the JAM API
	 * @param {string} sJamToken A JAM token
	 * @param {string} sWidgetContainerID The DIV ID for the widget
	 * @param {string} sFeedType The widget feed type
	 * @param {string} sGroupIds The JAM groups ID in case feed type is "group"
	 * @param {object} oBusinessObject The object in case of object feed
	 * @private
	 */
	createJamWidget:function(sWidgetContainerID, oWidgetData){
		try{				
			//var oWidgetData = this.prepareWidgetData(sJamToken, sFeedType, sGroupIds, oBusinessObject);
			this.sapjam = eval('sapjam');
			this.sapjam.feedWidget.create(sWidgetContainerID, oWidgetData);
		} catch(oError){
			jQuery.sap.log.error(oError, "", "sap.collaboration.components.utils.JamUtil.createJamWidget()");
			throw oError;
		}

	},
	
	/**
	 * Creates the data needed by the JAM API to create the widget 
	 * @param {string} sJamToken A JAM token
	 * @param {string} sFeedType The widget feed type
	 * @param {string} sGroupIds The JAM groups ID in case feed type is "group"
	 * @param {object} oBusinessObject The object in case of object feed
	 * @private
	 */
	prepareWidgetData:function(sJamToken, sFeedType, sGroupIds, oBusinessObject) {
		var oWidgetData;
		
		oWidgetData = {
			type: sFeedType, 
			avatar: this.FeedRenderedControllerConstants.jamWidgetCSS.avatar, 
			//skin: this.FeedRenderedControllerConstants.jamWidgetCSS.skin, 
			live_update: this.FeedRenderedControllerConstants.jamWidgetCSS.live_update,
			post_mode: this.FeedRenderedControllerConstants.jamWidgetCSS.post_mode, 
			reply_mode: this.FeedRenderedControllerConstants.jamWidgetCSS.reply_mode,
			mobile_mode: this.FeedRenderedControllerConstants.jamWidgetCSS.mobile_mode,
			hide_bookmark: true,
			single_use_token: sJamToken
		};
		
		switch(sFeedType){
			case sap.collaboration.FeedType.follows:
	   		case sap.collaboration.FeedType.company:
				oWidgetData.type = sFeedType;
				break;
	   		case sap.collaboration.FeedType.group:
	   		case sap.collaboration.FeedType.objectGroup:
				oWidgetData.type 			= this.JamFeedType.Group;
				oWidgetData.group_id 		= sGroupIds;
				break;
	   		case sap.collaboration.FeedType.object:
				oWidgetData.type 			= this.JamFeedType.Object;
				if(!oBusinessObject){
					var oErrorObjectUndefined = new Error("Object is undefined");
					jQuery.sap.log.error(oErrorObjectUndefined, "", "sap.collaboration.components.utils.JamUtil.prepareWidgetData()");
					throw oErrorObjectUndefined;
				}
				if(!oBusinessObject.id){
					var oErrorIdUndefined = new Error("Property 'id' is undefined");
					jQuery.sap.log.error(oErrorIdUndefined, "", "sap.collaboration.components.utils.JamUtil.prepareWidgetData()");
					throw oErrorIdUndefined;
				}
				if(!oBusinessObject.type){
					var oErrorTypeUndefined = new Error("Property 'type' is undefined");
					jQuery.sap.log.error(oErrorTypeUndefined, "", "sap.collaboration.components.utils.JamUtil.prepareWidgetData()");
					throw oErrorTypeUndefined;
				}
				try{
					oWidgetData.external_id		= oBusinessObject.id;
					oWidgetData.external_type	= oBusinessObject.type;					
					oWidgetData.external_object = oBusinessObject;
				} catch(oError){
					jQuery.sap.log.error(oError, "", "sap.collaboration.components.utils.JamUtil.prepareWidgetData()");
					throw oError;
				}
				break;
	   		default:
				var sError = "Feed Type not supported";
				jQuery.sap.log.error(sError, "", "sap.collaboration.components.utils.JamUtil.prepareWidgetData()");
				throw new Error(sError);
		}
		
		return oWidgetData;
	}
});