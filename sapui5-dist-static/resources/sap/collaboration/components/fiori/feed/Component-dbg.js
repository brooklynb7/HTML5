/*!
 * @copyright@
 */

jQuery.sap.require("sap.collaboration.library");
jQuery.sap.require("sap.collaboration.components.utils.CommonUtil");
jQuery.sap.require("sap.collaboration.components.utils.JamUtil");
jQuery.sap.require("sap.collaboration.components.utils.OdataUtil");
jQuery.sap.require("sap.ui.core.UIComponent");

jQuery.sap.declare("sap.collaboration.components.fiori.feed.Component");


/**
* Constructor for the Feed Component.
* @since version 1.16
* @constructor
* @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the Feed Component, the default value is <tt>"/sap/opu/odata/sap/SM_INTEGRATION_SRV".</tt>
* @param {sap.collaboration.FeedType} feedType The type of feed to be displayed.
* @param {string} [groupIds] A comma separated list of group IDs.
* @param {JSON object} [object] A JSON object passed to the Feed component. 
* It is required when the value of <tt>feedType</tt> is <tt>sap.collaboration.FeedType.object</tt> or <tt>sap.collaboration.FeedType.objectGroup</tt>.
* This object represents business related information, such as a sales order, an opportunity, etc. It contains the following properties:
*		<ul>
*			<li><tt>id</tt>: the business object ID to be posted in the SAP Jam Feed. It can be any text as long as unique for each object or 
*							it can be an OData URL to the object in the application.</li>
*			<li><tt>type</tt>: the type of the business object. It can be any text or it can be the OData meta data URL to the object Entity Type.</li>
*			<li><tt>name</tt> (optional): the description of the business object to be displayed in SAP Jam, i.e. "SO 57746", "Opportunity 123", etc.</li>
*			<li><tt>ui_url</tt> (optional): the URL to navigate to the same business object in the application.</li>
*		</ul>
*
* @class Feed Component
*
* A Feed Component is a ui5 component that applications 
* can use to render a <tt>sap.m.App</tt> that 
* embeds the JAM Feed Widget.
* 
* @name sap.collaboration.components.fiori.feed.Component
* @public
*/
sap.ui.core.UIComponent.extend("sap.collaboration.components.fiori.feed.Component",
		/** @lends sap.collaboration.components.fiori.feed.Component */ {		
	
		metadata: {
			properties: {
				width: 		 			{type: "sap.ui.core.CSSSize", defaultValue: ""},
				height:		 			{type: "sap.ui.core.CSSSize", defaultValue: ""},				
				oDataServiceUrl:		{type: "sap.ui.core.URI", defaultValue: "/sap/opu/odata/sap/SM_INTEGRATION_SRV"},
				feedType:				{type: "string"},
				groupIds:				{type: "string"},
				object:					{type: "object"}
			},
			
			aggregations: {
			},
			
			events: {
			}
		},
		
		/**
		* Initialization of the Component
		* @private
		*/
		init: function(){
			//Initialize and apply constants for width and height 
			this.CollaborationFeedConstants = {
				defaultWidth: '100%',
				defaultHeight: '100%'
			 };
				
			this.setWidth(this.CollaborationFeedConstants.defaultWidth);
			this.setHeight(this.CollaborationFeedConstants.defaultHeight);
			// For SP06 the split app mode is disabled.
			this.mode = sap.collaboration.AppType.widget;
			
			this.oCommonUtil = new sap.collaboration.components.utils.CommonUtil();
			this.oLangBundle = this.oCommonUtil.getLanguageBundle();
			
			sap.ui.core.UIComponent.prototype.init.apply(this);
		},
		
		/**
		* Contract for passing the settings to the Component.
		* @public
		* @param {JSON Object} oSettings A JSON object containing the following attributes:
		* 		<ul>
		* 			<li><tt>{sap.ui.core.URI} oDataServiceUrl</tt>: the URL of the OData Service needed for the Feed Component.</li>
		* 			<li><tt>{sap.collaboration.FeedType} feedType</tt>: the type of feed to be displayed.</li>
		* 			<li><tt>{string} [groupIds?]</tt>: a comma separated list of group IDs.</li>
		* 			<li><tt>{JSON object} object</tt>: the representation of a business object.</li>
		* 		</ul>
		*/
		setSettings : function(oSettings) {
			this.setODataServiceUrl(oSettings.oDataServiceUrl);
			this.setFeedType(oSettings.feedType);
			this.setGroupIds(oSettings.groupIds);
			this.setObject(oSettings.object);
		},		
		
		/**
		* Invoked before the Component is rendered.
		* Initializes the OData model.
		* @private
		*/
		onBeforeRendering: function(){
			var asJson = true;
            this.sODataServiceUrl = this.getODataServiceUrl();
            this.oOdataModel = new sap.ui.model.odata.ODataModel(this.sODataServiceUrl, asJson);
            
            // delete views before rendering
            if( sap.ui.getCore().byId(this.getId() + "_oAppView") ){
                  sap.ui.getCore().byId(this.getId() + "_oAppView").destroy();
            }
            if( sap.ui.getCore().byId(this.getId() + "_oSplitAppView") ){
                  sap.ui.getCore().byId(this.getId() + "_oSplitAppView").destroy();
            }
		},
		
		/**
		* Called when the Component has been rendered 
		* Creates a View that represents a UI5 app or a UI5 split app and place this view in the Component main HTML DIV created by the render function
		* @function
		* @private
		*/
		onAfterRendering: function(){	
			// log properties
			jQuery.sap.log.debug("Feed Component properties:", "", 
					"sap.collaboration.components.fiori.feed.Component.onAfterRendering()");
			jQuery.sap.log.debug("width: " + this.getWidth());
	        jQuery.sap.log.debug("height: " + this.getHeight());
	        jQuery.sap.log.debug("oDataServiceUrl: " + this.getODataServiceUrl());
	        jQuery.sap.log.debug("feedType: " + this.getFeedType());
	        jQuery.sap.log.debug("groupIds: " + this.getGroupIds());
	        jQuery.sap.log.debug("object: " + JSON.stringify(this.getObject()));
	        
			if(this.getMode() === sap.collaboration.AppType.widget){
				var oAppView = 
					sap.ui.view({
						id: this.getId() + "_oAppView",
						viewData : {
							controlId: this.getId(),
							odataModel:  this.oOdataModel,
							appType: this.getMode(),	
							feedType: this.getFeedType(),
							groupIds: this.getGroupIds(),
							object: this.getObject(),
							langBundle: this.oLangBundle
						}, 
						type:sap.ui.core.mvc.ViewType.JS, 
						viewName:"sap.collaboration.components.fiori.feed.app.App"
					});
				
				oAppView.placeAt(this.getId());
			}
			else if(this.getMode() === sap.collaboration.AppType.split){
				var oSplitAppView = 
					sap.ui.view({
						id: this.getId() + "_oSplitAppView",
						viewData : {
							controlId: this.getId(),
							odataModel:  this.oOdataModel,
							appType: this.getMode(),
							object: this.getObject(),
							langBundle: this.oLangBundle
						}, 
						type:sap.ui.core.mvc.ViewType.JS, 
						viewName:"sap.collaboration.components.fiori.feed.splitApp.SplitApp"
					});
				
				oSplitAppView.placeAt(this.getId());
			}
		},
		
		/**
		 * Renders the outer HTML for the Component
		 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer
		 * @private
		 */
		render: function(oRm){
			oRm.write("<div id='" + this.getId() + "' style='width:" + this.getWidth() + ";height:" + this.getHeight() + "'");
			oRm.write(">");
			oRm.write("</div>");
			
		},
		
		/**
		 * Getter for the mode property
		 * @private
		 */
		getMode: function(){
			return this.mode;
		}
	}
);