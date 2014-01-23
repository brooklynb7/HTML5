/*!
 * @copyright@
 */

jQuery.sap.require("sap.collaboration.components.utils.OdataUtil");
jQuery.sap.require("sap.collaboration.components.utils.CommonUtil");
jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.declare("sap.collaboration.components.fiori.sharing.dialog.Component");
jQuery.sap.require("sap.m.MessageToast");


/**
* Constructor for the share dialog component
* @since version 1.16
* @constructor
* @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the share component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
* @param {JSON object} [object] A JSon object passed to the share component. This object contains the following properties:
*		<ul>
* 			<li>id (optional): is the object Id to be shared in SAP Jam, i.e a url that navigates back to the same object in the application</li>
*			<li>display (optional): is a UI5 control to be displayed in the component UI</li>
*			<li>share (optional): is a note that will be displayed in the component UI and shared to SAP Jam too</li>
*		</ul>
* 	
* @class Share Dialog Component
* 
* A Share Dialog Component is a ui5 component that applications 
* can use to render the share component in a dialog and then can 
* be used to share information to SAP Jam
* @name sap.collaboration.components.fiori.sharing.dialog.Component
* @public
*/


sap.ui.core.UIComponent.extend("sap.collaboration.components.fiori.sharing.dialog.Component", 
		/** @lends sap.collaboration.components.fiori.sharing.dialog.Component */ 
		{		
	
		metadata: {
			/*
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
				width: 		 			{type: "sap.ui.core.CSSSize"}, // not used for 1.16
				height:		 			{type: "sap.ui.core.CSSSize"}, // not used for 1.16
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
		 * Creates the sharing component
		 * @private
		 */
		createSharingComponent : function() {
			var oObjectDisplay= this.getObject();
			var sOdataServiceUrl = this.getODataServiceUrl();
			var oSettings = {
					oDataServiceUrl: 	sOdataServiceUrl,
					object: 			oObjectDisplay
			};
			
			if (!this.sharingComponent){
				this.sharingComponent = sap.ui.getCore().createComponent({
			 		name: "sap.collaboration.components.fiori.sharing",
			 		id: this.getId() + "_SharingComponent"
			 		//settings: oSettings
			 	});
				
			 	this.sharingComponentContainer = new sap.ui.core.ComponentContainer(this.getId() + "SharingComponentContainer", {
			 		component: this.sharingComponent
			 	});
			 	
				this.sharingComponent.bOdataOn = false;
			}
			
			this.sharingComponent.setSettings(oSettings);
			try{
				this.sharingComponent.setGroupsData();
			}
			catch(oError)
			{
				this.oCommonUtil.displayError(oError);
				
				this.bStopRendering = true;
			}

		},
		
		/**
		 * Creates the sharing component
		 * @private
		 */
		createSharingDialog: function() {
			
		 	this.sResultMessage = "";
		 	var self = this;
			
			var oSharingDialog = new sap.m.Dialog(this.getId() + "_SharingDialog", {
				title: this.oLangBundle.getText("SHARING_PAGE_TITLE"),
				stretch: false,
				//contentWidth: this.getWidth(),
				content: [
				          	this.sharingComponentContainer
				],
				afterClose : function(){
					self.showMessage();
				}
			}).addStyleClass("sapUiPopupWithPadding"); 
			
			return oSharingDialog;
		},
		
		/**
		 * Opens a dialog that will contain the share component
		 * @public
		 */
		open : function(){
			
			this.createSharingComponent();
			
			if(this.bStopRendering === undefined || this.bStopRendering  === false){
				if (!this.oSharingDialog){
					this.oSharingDialog = this.createSharingDialog();
				}
				
				this.createDialogButtons();
				this.setDialogButtons();
				
				if(jQuery.device.is.phone){
					this.oSharingDialog.setStretch(true);
				}
				
				this.oSharingDialog.open();
			}
		},
		
		createDialogButtons : function() {
			var self = this;
			if (!sap.ui.getCore().byId(this.getId() + "_OkButton")){
				this.oOkButton = new sap.m.Button(this.getId() + "_OkButton", {
					text: this.oLangBundle.getText("OK_BUTTON_TEXT"),
					press : function() {
						self.oSharingDialog.getBeginButton().setEnabled(false);
						self.sResultMessage = self.sharingComponent.shareToJam();
						self.oSharingDialog.close();
					}
				});
			}
			
			if(!this.oCancelButton){
				this.oCancelButton = new sap.m.Button(this.getId() + "_CancelButton", {
					text: this.oLangBundle.getText("CANCEL_BUTTON_TEXT"),
					press : function() {
						self.oSharingDialog.close();
					}
				});
			}
			
			if(!this.oCloseButton){
				this.oCloseButton = new sap.m.Button(this.getId() + "_CloseButton", {
					text: this.oLangBundle.getText("CLOSE_BUTTON_TEXT"),
					press : function() {
						self.oSharingDialog.close();
					}
				});
			}
		},
		
		setDialogButtons : function() {
			if (this.sharingComponent.aJamGroups.length === 0){
				this.oSharingDialog.destroyBeginButton();
				this.oSharingDialog.setEndButton(this.oCloseButton);
			}
			else{
					this.oSharingDialog.setBeginButton(this.oOkButton);
					this.oOkButton.setEnabled(true);
					this.oSharingDialog.setEndButton(this.oCancelButton);
			}
		},
		
		/**
		 * Creates a Message Toast to inform the user about the success/failure of the sharing to Jam
		 * @private
		 */
		showMessage : function() {
			if (this.sResultMessage !== ""){
				sap.m.MessageToast.show(this.sResultMessage, {duration: 3000});
				this.sResultMessage = "";
			}
			
			
		}
	}
);
