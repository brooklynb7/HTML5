/*!
 * @copyright@
 */

jQuery.sap.require("sap.collaboration.components.utils.OdataUtil");
jQuery.sap.require("sap.collaboration.components.utils.CommonUtil");
jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.declare("sap.collaboration.components.fiori.sharing.Component");
jQuery.sap.require("sap.m.MessageBox");

/**
* Constructor for the share component
* @since version 1.16
* @constructor
* @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the share component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
* @param {JSON object} [object] A JSon object passed to the share component. This object contains the following properties:
*		<ul>
* 			<li>id (optional): is the object Id to be shared in SAP Jam, i.e a URL that navigates back to the same object in the application</li>
*			<li>display (optional): is a UI5 control to be displayed in the component UI</li>
*			<li>share (optional): is a note that will be displayed in the component UI and shared to SAP Jam too</li>
*		</ul>
* 		
* @class Share Component
*
* A Share Component is a ui5 component that applications 
* can use to share information to JAM
* @name sap.collaboration.components.fiori.sharing.Component
* @public
*/

sap.ui.core.UIComponent.extend("sap.collaboration.components.fiori.sharing.Component",
		/** @lends sap.collaboration.components.fiori.sharing.Component */ {		
	
		metadata: {
			includes: ["../../css/Sharing.css"],
			/**
			 * the Properties are:
			 * 		component width
			 * 		component height
			 * 		OData Service URL
			 * 		JSON like Object that looks like:
			 *		{
             *   		display: display,
             *   		id:"id",
             *   		share: "share"
			 *		}
			 *		
			 *		where: 
			 *				display is a UI5 control to be displayed in the component UI
			 * 				id is the Object Id to be shared in JAM
			 *				share: is a note that will be displayed in the component UI that is used also as sharing info to jam
			 * */
			properties: {
				width: 		 			{type: "sap.ui.core.CSSSize", defaultValue: "100%"},
				height:		 			{type: "sap.ui.core.CSSSize", defaultValue: "100%"},
				oDataServiceUrl:		{type: "sap.ui.core.URI", defaultValue: "/sap/opu/odata/sap/SM_INTEGRATION_SRV"},
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
			
			this.aJamGroups = [];
			
			// a flag that can be set to inform this component to bypass any OData call
			// so in this case the groups "this.aJamGroups" should be initialized by the caller like:
			// var oComp =  sap.ui.getCore().createComponent(....);
			// oComp.aJamGroups = aGroups;
			this.bOdataOn = true;
		},
		
		/**
		* Invoked before the Component is rendered.
		* It calls the setGroupsData() function. Refer to the setGroupsData() for the JSDoc 
		* @private
		*/
		onBeforeRendering: function(){
			
			if (this.bOdataOn === true){
				try{
					this.setGroupsData();
				}
				catch(oError){					
					this.oCommonUtil.displayError(oError);
					this.bStopRendering = true;
				}
			}
		},
		
		/**
		* Called when the Component has been rendered 
		* Creates the sharing View or rerender it
		* @function
		* @private
		*/
		onAfterRendering: function(){
			// log properties
			jQuery.sap.log.debug("Share Component properties:", "", 
					"sap.collaboration.components.fiori.sharing.Component.onAfterRendering()");
			jQuery.sap.log.debug("width: " + this.getWidth());
	        jQuery.sap.log.debug("height: " + this.getHeight());
	        jQuery.sap.log.debug("oDataServiceUrl: " + this.getODataServiceUrl());
	        if(this.getObject()) {
	        	jQuery.sap.log.debug("object->id: " + this.getObject().id);
	        	jQuery.sap.log.debug("object->share: " + this.getObject().share);
	        	jQuery.sap.log.debug("object->display: " + this.getObject().display);
	        } else {
	        	jQuery.sap.log.debug("object: undefined");
	        }
	        
			var oObject = this.getObject();
			var oObjectDisplay;
			var sObjectShare;
			var sObjectId;
			
			if (oObject){
				oObjectDisplay = oObject.display; 
				sObjectShare = oObject.share; 
				sObjectId = oObject.id;
			}
			
			if(this.bStopRendering === undefined || this.bStopRendering === false){
				if(!this.oSharingView)
				{
					var sJamUrl = this.getJamUrl();
					
					this.oSharingView = sap.ui.view({
						id: this.getId() + "_SharingView",
						viewData : {
							controlId: 	this.getId(), 
							langBundle: this.oLangBundle,
							jamGroups: this.aJamGroups,
							jamUrl:	sJamUrl,
							objectDisplay: oObjectDisplay,
							objectShare: sObjectShare,
							objectId: sObjectId
						}, 
						type: sap.ui.core.mvc.ViewType.JS, 
						viewName: "sap.collaboration.components.fiori.sharing.Sharing"
					});
					
				}
				else{
						this.oSharingView.getController().aJamGroups = this.aJamGroups;
						this.oSharingView.getController().sObjectShare = sObjectShare;
						this.oSharingView.getController().oObjectDisplay = oObjectDisplay;
						//**** Note: we dont rerender the view here because when the component container rerender this component, it deleted the domRef and the rerender
						//**** for the view can not be accomplished without the domRef, so we depend on the "placeAt" to do the trick
						//this.oSharingView.rerender();
				}
				
				this.oSharingView.placeAt(this.getId());
			}
		},
		
		/**
		* Called when the Component is destroyed. Use this one to free resources and finalize activities.
		* Destroys the sharing view
		* @private
		*/
		exit: function() {
			// destroy the view in case the component is destroyed as the view will not be destroyed by default. It's not in the aggregation of the component.
			this.oView.destroy();
		},
		
		/**
		* Setter for the Component settings.
		* @param {JSON Object} oSettings A JSON object used to set the component settings, this object should contains the same 
		* properties used in the constructor. 
		* @public
		*/
		setSettings : function(oSettings) {
			this.setODataServiceUrl(oSettings.oDataServiceUrl);
			this.setObject(oSettings.object);
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
		* Initializes the OData model.
		* It calls initializeOdataModel(), initializeOdataUtils() and getJamGroups(). Refer to these functions for the JSDoc
		* @private
		*/
		setGroupsData : function() {
			this.initializeOdataModel();
			this.initializeOdataUtils();
			
			try{
				this.aJamGroups = this.getJamGroups();
			}
			catch(oError){
				throw new Error(oError.message);
			}
		},
		
		/**
		 * Initializes the OData Model
		 * @private
		 */
		initializeOdataModel : function() {
			var asJson = true;
            this.sODataServiceUrl = this.getODataServiceUrl();
        	this.oOdataModel = new sap.ui.model.odata.ODataModel(this.sODataServiceUrl, asJson);
		},
		
		/**
		 * Initialize the OData Utility Class
		 * @private
		 */
		initializeOdataUtils : function() {
			this.oODataUtil = new sap.collaboration.components.utils.OdataUtil();
		},
		
		/**
		 * Gets the Jam groups
		 * @private
		 */
		getJamGroups : function() {
			return this.oODataUtil.getGroupsData(this.oOdataModel, "/Groups");
		},
		
		/**
		 * Gets the Jam URL
		 * @private
		 */
		getJamUrl : function() {
			return this.oODataUtil.getJamUrl(this.oOdataModel);
		},
		
		/**
		 * Shares the data to Jam group
		 * @public
		 */
		shareToJam : function() {
			var oSharingData = this.oSharingView.getController().getSharingData();
			
			var self = this;
			var sNote = oSharingData.note;
			var sGroupId = oSharingData.groupId;
			var sFeedContent = sNote; 
			var sObjectId;
			var resultMessage;
			
			if(this.getObject()){
				sObjectId = this.getObject().id;
			}
			
			if(sObjectId && sFeedContent !== ""){
				sFeedContent = sFeedContent + "\n" + this.getObject().id;
			} else if(sObjectId){
				sFeedContent = this.getObject().id;
			}
			
			// log sFeedContent
			jQuery.sap.log.debug("Share Component sFeedContent: " + sFeedContent, "", 
					"sap.collaboration.components.fiori.sharing.Component.shareToJam()");

			
			var result = this.oODataUtil.createGroupFeed(this.oOdataModel, sGroupId, sFeedContent);
			if(result === true){
				resultMessage = self.oLangBundle.getText("SHARING_SUCCESS_MSG");
			} else{
				resultMessage = self.oLangBundle.getText("SHARING_ERROR_MSG");
			}
			
			return resultMessage;
		}
	}
);