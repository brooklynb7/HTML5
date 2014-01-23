/*!
 * @copyright@
 */

jQuery.sap.require("sap.collaboration.library");
jQuery.sap.require("sap.collaboration.components.utils.CommonUtil");
jQuery.sap.require("sap.collaboration.components.utils.JamUtil");
jQuery.sap.require("sap.collaboration.components.utils.OdataUtil");
jQuery.sap.require("sap.ui.core.UIComponent");

jQuery.sap.declare("sap.collaboration.components.fiori.feed.dialog.Component");

/**
* Constructor for the Feed Dialog Component.
* @since version 1.16
* @constructor
* @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the Feed Dialog Component, the default value is <tt>"/sap/opu/odata/sap/SM_INTEGRATION_SRV".</tt>
* @param {sap.collaboration.FeedType} feedType The type of feed to be displayed.
* @param {string} [groupIds] A comma separated list of group IDs.
* @param {JSON object} [object] A JSON object passed to the Feed Dialog component. 
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
* @class Feed Dialog Component
*
* A Feed Dialog Component is a ui5 component that applications 
* can use to render the feed widget view in a dialog and then can
* be used to share information in SAP JAM.
* 
* @name sap.collaboration.components.fiori.feed.dialog.Component
* @public
*/
sap.ui.core.UIComponent.extend("sap.collaboration.components.fiori.feed.dialog.Component",
		/** @lends sap.collaboration.components.fiori.feed.dialog.Component */ {
		metadata: {
			includes: ["../../../css/Sharing.css"],
			properties: {
				width: 		 			{type: "sap.ui.core.CSSSize", defaultValue: "575px"}, // Value defined by Central UX. Internal Message 3216022/2013
				//We need to pass a value in pixels, otherwise the dialog won't render correctly
				height:		 			{type: "sap.ui.core.CSSSize", defaultValue: "605px"}, // Value defined by Central UX. Internal Message 3216022/2013
				oDataServiceUrl:		{type: "sap.ui.core.URI", defaultValue: "/sap/opu/odata/sap/SM_INTEGRATION_SRV"},
				feedType:				{type: "string", defaultValue: sap.collaboration.FeedType.object},
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
			this.oCommonUtil = new sap.collaboration.components.utils.CommonUtil();
			this.oLangBundle = this.oCommonUtil.getLanguageBundle();	
			
			sap.ui.core.UIComponent.prototype.init.apply(this);
		},
		
		/**
		* Contract for passing the settings to the Component.
		* @public
		* @param {JSON Object} oSettings A JSON object containing the following attributes:
		* 		<ul>
		* 			<li><tt>{sap.ui.core.URI} oDataServiceUrl</tt>: the URL of the OData Service needed for the Feed Dialog Component.</li>
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
		},
		
		/**
		* Called when the Component has been rendered 
		* Creates a View that represents a UI5 app or a UI5 split app and place this view in the Component main HTML DIV created by the render function
		* @function
		* @private
		*/
		onAfterRendering: function(){
		},
		
		/**
		 * Renders the outer HTML for the Component
		 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer
		 * @private
		 */
		render: function(oRm){
		},
		
		/**
		 * Initializes the OData needed by the feed widget:
		 * The model, OData Util class. 
		 * Then get the Jam Url from our OData service and Token from Jam
		 * The values will be assigned to member variables to be used later when the Feed View is created
		 * @private
		 */
		initOdata: function(){
			// The variable asJson is used instead of just passing the boolean value 
			// to explain what is the effect of passing true to the ODataModel Constructor
			var asJson = true;            
			//Using a variable for better maintenance and debugging
			var sODataServiceUrl = this.getODataServiceUrl();
			
			// Initialize the OData Model
            this.oOdataModel = new sap.ui.model.odata.ODataModel(sODataServiceUrl, asJson);
            if(!this.oOdataModel.oMetadata.oMetadata){
            	var oErrorMetadataUndefined = new Error("Metadata is undefined");
            	jQuery.sap.log.error(oErrorMetadataUndefined, "", "sap.collaboration.components.fiori.feed.dialog.Component.initOdata()");
            	throw oErrorMetadataUndefined;
            }		            	
			
            // Use the OData utility class to get the jam url and token
			var oODataUtil = new sap.collaboration.components.utils.OdataUtil();
			
			try{
				this.sJamUrl = oODataUtil.getJamUrl(this.oOdataModel);  //Throws exception
				this.sJamToken = oODataUtil.getJamToken(this.oOdataModel); //Throws exception
			} catch(oError){				
				jQuery.sap.log.error(oError, "", "sap.collaboration.components.fiori.feed.dialog.Component.initOdata()");
				throw oError;
			}
		},
		
		/**
		 * Create the Feed Dialog Component
		 * @private
		 */
		createFeedDialogComponent: function(){
			//The following initialization and creation  methods cannot be called in the init() method 
			//because the parameters passed to the constructor are not available (SAPUI5 bug).
			try{				
				this.initOdata();								
				this.createFeedView();
				this.createFeedDialog();			
			} catch(oError){				
				jQuery.sap.log.error(oError, "", "sap.collaboration.components.fiori.feed.dialog.Component.createFeedDialogComponent()");
				throw oError;
			}
		},
		
		/**
		 * Creates the View that wraps the Feed Widget
		 * @private
		 */
		createFeedView : function() {
			try{							
				if(!this.oFeedView){					
					this.oFeedView  = sap.ui.view({
						id: this.getId() + "_FeedView", 
						height: "100%",
						viewData : {
							controlId: this.getId(),
							jamURL:	this.sJamUrl,
							jamToken: this.sJamToken,
							appType: sap.collaboration.AppType.widget,
							feedType: this.getFeedType(),
							groupIds: this.getGroupIds(),
							object: this.getObject(),
							langBundle: this.oLangBundle
						}, 
						type: sap.ui.core.mvc.ViewType.JS, 
						viewName: "sap.collaboration.components.fiori.feed.commons.Detail"
					});
				}
				else{
					//If the Feed View already exists, we pass the new settings
					this.oFeedView.getController().sFeedType = this.getFeedType();
					this.oFeedView.getViewData().groupIds = this.getGroupIds();
					this.oFeedView.getController().oBusinessObject = this.getObject();
				}
			} catch(oError){
				jQuery.sap.log.error(oError, "", "sap.collaboration.components.fiori.feed.dialog.Component.createFeedView()");
				throw oError;
			}
		},
		
		/**
		 * Creates the Dialog Mobile Control and passes the view in the content.
		 * @returns oFeedDialog A Feed Dialog Object of class sap.m.Dialog
		 * @private
		 */
		createFeedDialog: function() {
			var self = this;
			
			if (!this.oFeedDialog){
				this.oFeedDialog = new sap.m.Dialog(this.getId() + "FeedDialog", {
					title: this.oLangBundle.getText("FEED_DIALOG_TITLE"),
					stretch: false,
					contentWidth: this.getWidth(),
					contentHeight: this.getHeight(),
					content: [
					          this.oFeedView
					],
					endButton:
						new sap.m.Button({
							text: this.oLangBundle.getText("CLOSE_BUTTON_TEXT"),
							press : function() {
								self.oFeedDialog.close();
							}
						})
				}); 
			
				if(jQuery.device.is.phone){
					this.oFeedDialog.setStretch(true);
				}
			}
		},
		
		/**
		 * Open the Feed Dialog.
		 * @public
		 */
		open : function(){
			
			// log properties
			jQuery.sap.log.debug("Feed Dialog Component properties:", "", 
					"sap.collaboration.components.fiori.feed.dialog.Component.open()");
			jQuery.sap.log.debug("width: " + this.getWidth());
	        jQuery.sap.log.debug("height: " + this.getHeight());
	        jQuery.sap.log.debug("oDataServiceUrl: " + this.getODataServiceUrl());
	        jQuery.sap.log.debug("feedType: " + this.getFeedType());
	        jQuery.sap.log.debug("groupIds: " + this.getGroupIds());
	        jQuery.sap.log.debug("object: " + JSON.stringify(this.getObject()));
	        
			try{
					this.createFeedDialogComponent();
					this.oFeedDialog.open();			
			} catch (oError){
					jQuery.sap.log.error(oError, "", "sap.collaboration.components.fiori.feed.dialog.Component.open()");
					this.oCommonUtil.displayError(oError);
			}							
		}

	}
);