/*!
 * @copyright@
 */

sap.ui.jsview("sap.collaboration.components.fiori.sharing.Sharing", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf Sharing
	*/ 
	getControllerName : function() {
		return "sap.collaboration.components.fiori.sharing.Sharing";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away.
	* Creates and returns a UI5 mobile VBox 
	* @memberOf Sharing
	*/ 
	createContent : function(oController) {
		var sPrefixId = this.getViewData().controlId;
		
		this.prepareSharingVBoxContent(oController);
		
		this.oSharingVBox = new sap.m.VBox(sPrefixId + "_SharingVbox");
		
		return this.oSharingVBox;
	},
	
	/** 
	* Prepares the UI5 elements/controls that should be rendered in the VBox
	* @param {sap.ui.controller} oController The view Controller
	* @private
	*/ 
	prepareSharingVBoxContent : function(oController) {
		var sPrefixId = this.getViewData().controlId;
		var oLangBundle = this.getViewData().langBundle;
		var sJamUrl = this.getViewData().jamUrl;
		
		// Prepare the UI controls in case of no groups available 
		this.oNoDataLayout = new sap.ui.layout.VerticalLayout(sPrefixId + "_NoDataLayout", {
			width: "100%",
		    content: [
						new sap.ui.core.HTML(sPrefixId + "_NoDataDiv", {content: "<div>" + oLangBundle.getText("No_GROUPS_ERROR") + "</div>"}),
						new sap.m.VBox(sPrefixId + "_LinkVbox",{
							alignItems: sap.m.FlexAlignItems.End,
							items: [
				                new sap.m.Link(sPrefixId + "_JamLink", {
				                	text : oLangBundle.getText("JAM_URL_TEXT"),
				                	target: "_blank",
				                	href : sJamUrl
				                })
			                ]
						}).addStyleClass("linkVBox")
			]
		});
		
		//***************** In case there are groups ********************//
		// Prepare the UI that will be displayed in the VBox, ie DDB, Text Areas, labels .....
		var oGroupLabel = new sap.m.Label(sPrefixId + "_GroupLabel", {
			text: oLangBundle.getText("GRP_SELECT_LABEL"),
			required : true,
			width: "100%"
		}); 
		
		var oGroupSelect = new sap.m.Select(sPrefixId + "_GroupSelect", {
			width: "100%",
			items: [],
			change: function(oControlEvent) {
				oController.onGroupSelectChange(oControlEvent);
			}
		});
		
		this.oGroupSelectionLayout = new sap.ui.layout.VerticalLayout(sPrefixId + "_GroupSelectionLayout", {
			width: "100%",
			layoutData: new sap.m.FlexItemData({growFactor: 1}),
		    content: [
						oGroupLabel, 
						oGroupSelect
			]
		}).addStyleClass("sharingVBox");
		
		var oNoteLabel = new sap.m.Label(sPrefixId + "_NoteLabel", {
			text: oLangBundle.getText("ADD_NOTE_LABEL"),
			width: "100%"
		}); 
		
		var iObjectId_CharLength;
		this.getViewData().objectId ? iObjectId_CharLength = this.getViewData().objectId.length : iObjectId_CharLength = 0;
		var iNoteTextArea_MaxChar = 1000 - iObjectId_CharLength - 1; // -1 to account for the newline we add as separator bet the Obj Id and the note in the feed
		var oNoteTextArea = new sap.m.TextArea(sPrefixId + "_NoteTextArea", {
			rows: 6,
			width : "100%",
			maxLength: iNoteTextArea_MaxChar
		});
		
		this.oNoteLayout = new sap.ui.layout.VerticalLayout(sPrefixId + "_NoteLayout", {
			width: "100%",
			layoutData: new sap.m.FlexItemData({growFactor: 2}),
		    content: [
						oNoteLabel, 
						oNoteTextArea
			]
		}).addStyleClass("sharingVBox");
	}

});