/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uiext.inbox.SubstitutionRulesManager.
jQuery.sap.declare("sap.uiext.inbox.SubstitutionRulesManager");
jQuery.sap.require("sap.uiext.inbox.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new SubstitutionRulesManager.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The SubstitutionRulesManager
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @experimental Since version 1.7.0. 
 * API is not yet finished and might change completely
 * @name sap.uiext.inbox.SubstitutionRulesManager
 */
sap.ui.core.Control.extend("sap.uiext.inbox.SubstitutionRulesManager", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"bindSubstitutionRules"
	],

	// ---- control specific ----
	library : "sap.uiext.inbox"
}});


/**
 * Creates a new subclass of class sap.uiext.inbox.SubstitutionRulesManager with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.uiext.inbox.SubstitutionRulesManager.extend
 * @function
 */


/**
 * Binds the Substitution Rules to the given path.
 *
 * @name sap.uiext.inbox.SubstitutionRulesManager.prototype.bindSubstitutionRules
 * @function
 * @param {string} 
 *         sPath
 *         The path

 * @type sap.uiext.inbox.SubstitutionRulesManager
 * @public
 */


// Start of sap/uiext/inbox/SubstitutionRulesManager.js
/*!
 * @copyright@
 */
 
jQuery.sap.require("sap.uiext.inbox.InboxUtils");
jQuery.sap.require("sap.uiext.inbox.SubstitutionRulesManagerConstants");
jQuery.sap.require("sap.uiext.inbox.SubstitutionRulesManagerUtils");
/*global OData */// declare unusual global vars for JSLint/SAPUI5 validation
/**
 * This file defines behavior for the control,
 */
sap.uiext.inbox.SubstitutionRulesManager.prototype.init = function(){
//	this.setParent(oInbox);
	var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
	this._imgResourcePath = sap.ui.resource('sap.uiext.inbox', 'themes/' + sCurrentTheme + '/img/');
	this._oBundle = sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox");
	this.sUrl = "";
	this.sPath = "/SubstitutionRuleCollection"	//TODO: sPath should not be hard coded.
	this.inboxUtils = sap.uiext.inbox.InboxUtils;
	this.substitutionRulesManagerUtils = sap.uiext.inbox.SubstitutionRulesManagerUtils;
	this.inboxConstants = sap.uiext.inbox.InboxConstants;
	this.substitutionConstants = sap.uiext.inbox.SubstitutionRulesManagerConstants;
};

sap.uiext.inbox.SubstitutionRulesManager.prototype.exit = function() {
	this.vLayout.destroy();
	this.vLayout = null;
	
	function remove(id) {
		  var oItem = sap.ui.getCore().byId(id);
		  oItem && oItem.destroy();
	}
	this._oBundle = undefined;
};

sap.uiext.inbox.SubstitutionRulesManager.prototype.open = function() {
	this.sUrl = this.getModel().sServiceUrl;
	this.overlayContainer = this.populateOverlayContainer();
	this.overlayContainer.open();	
};

sap.uiext.inbox.SubstitutionRulesManager.prototype.populateOverlayContainer = function() {
	var that = this;
	var dynamicId = this.getId() + '--';
	//Creating the Overlay Container once a user selects Manage Substitution.
	var oSRMOverlayContainer = sap.ui.getCore().byId(dynamicId + 'substitutionOverlayContainer');
	if( oSRMOverlayContainer === undefined){
			oSRMOverlayContainer = new sap.ui.ux3.OverlayContainer(dynamicId + "substitutionOverlayContainer");
			oSRMOverlayContainer.setParent(this);
	//}
	oSRMOverlayContainer.setOpenButtonVisible(false);
	oSRMOverlayContainer.attachClose(that, that.deleteMessage);
	//The complete Overlay Container will have a main Vertical Layout as content 
	var overlayVLayout = sap.ui.getCore().byId(dynamicId + 'substitutionVLayout');
	if(overlayVLayout === undefined){
			overlayVLayout = new sap.ui.commons.layout.VerticalLayout(dynamicId + "substitutionVLayout");
	}
	overlayVLayout.setWidth("95%");
	overlayVLayout.addStyleClass("verticalLayoutStyle");

	//First Row is an empty Label for spacing, //TODO: Need to check if padding can be use, so that we avoid creation of controls which are heavy weights.
	var emptyLabel0 =  sap.ui.getCore().byId(dynamicId + 'substDummyLabel0')
	if(emptyLabel0 === undefined){
		emptyLabel0 = new sap.ui.commons.Label(this.getId() + '--' + "substDummyLabel0", {text : ""});
	}
	
	//Third Row is for the Creation of 'New' link for Create Substitution Rule. 
	var newSubstitutionLink = sap.ui.getCore().byId(dynamicId + 'newSubstitutionLink');
	if(newSubstitutionLink === undefined){
		newSubstitutionLink = new sap.ui.commons.Link(dynamicId + 'newSubstitutionLink', {text: this._oBundle.getText("SUBSTITUTION_RULE_CREATE_NEW_BUTTON"), tooltip: this._oBundle.getText("SUBSTITUTION_RULE_CREATE_TOOLTIP")});
	}
	newSubstitutionLink.attachPress(that, that.openCreateSubstRulePopup);
	newSubstitutionLink.addStyleClass("newSubstitutionLink");
	//Second Row for Creating Navigation Bar with item "My Substitutes" and "I am Substituting".
	var oNavigationBar = sap.ui.getCore().byId(dynamicId + 'subsNavBar');
	if( oNavigationBar === undefined){
			oNavigationBar = new sap.ui.ux3.NavigationBar(dynamicId + "subsNavBar",{
				items : [new sap.ui.ux3.NavigationItem(dynamicId + "mySubstitutes",{
					key : dynamicId + "mySubstitutes",
					text : this._oBundle.getText("SUBSTITUTION_MY_SUBSTITUTES_TAB_TITLE")}),
					new sap.ui.ux3.NavigationItem(dynamicId + "iamSubstituting",{
						key : dynamicId + "iamSubstituting",
						text : this._oBundle.getText("SUBSTITUTION_I_AM_SUBSTITUTING_TAB_TITLE")
					})]
			});
	}
	oNavigationBar.setSelectedItem(dynamicId + "mySubstitutes");
	oNavigationBar.addStyleClass("navigationBarMargin");
	
	//Fourth is an empty Label for spacing, //TODO: Need to check if padding can be use, so that we avoid creation of controls which are heavy weights.
	var emptyLabel =  sap.ui.getCore().byId(dynamicId + 'substDummyLabel')
	if(emptyLabel === undefined){
		emptyLabel = new sap.ui.commons.Label(this.getId() + '--' + "substDummyLabel", {text : ""});
	}

	
	//Inserting Empty Row in the zeroth index. FIXME: Use Padding instead. TODO: Research on this.
	//FIXME: VERY IMPORTANT, get Rid of counters instead add indexes in a constants file.
	var verticalLayoutContentIndex = 0;
		overlayVLayout.insertContent(emptyLabel0, verticalLayoutContentIndex);
	//Inserting MessageBar in the first index.
	if (sap.ui.getCore().byId(this.getId() + '--' + 'msgBarContainer') === undefined) {
		overlayVLayout.insertContent(this.populateMsgBar(), ++verticalLayoutContentIndex);
	}
	//Inserting Navigation Bar in the second index.
	overlayVLayout.insertContent(oNavigationBar, ++verticalLayoutContentIndex);
	//Inserting 'New' link in the third index.
	overlayVLayout.insertContent(newSubstitutionLink, ++verticalLayoutContentIndex);
	//Inserting Empty Label in the fourth index.
	overlayVLayout.insertContent(emptyLabel, ++verticalLayoutContentIndex);
	
	var activeAndinactiveRulesVLayout = sap.ui.getCore().byId(dynamicId + 'activeAndinactiveRulesVLayout');
	if(activeAndinactiveRulesVLayout === undefined){
		 activeAndinactiveRulesVLayout = new sap.ui.commons.layout.VerticalLayout(dynamicId + "activeAndinactiveRulesVLayout");
	activeAndinactiveRulesVLayout.setWidth("100%");
	//TODO: Add dynamic ID's VERY IMPORTANT.
	activeAndinactiveRulesVLayout.insertContent(new sap.ui.commons.Label({text:that._oBundle.getText("SUBSTITUTION_ACTIVE_SUBSTITUTION_RULE"), design: sap.ui.commons.LabelDesign.Bold}),0);//TODO:Externalize
	activeAndinactiveRulesVLayout.insertContent(new sap.ui.commons.Label({text:""}),1);
	activeAndinactiveRulesVLayout.insertContent(new sap.ui.commons.Label({text:""}),2);//Dummy will be replaced by the active rules content.
	activeAndinactiveRulesVLayout.insertContent(new sap.ui.commons.Label({text:""}),3);
	activeAndinactiveRulesVLayout.insertContent(new sap.ui.commons.Label({text:""}),4);
	activeAndinactiveRulesVLayout.insertContent(new sap.ui.commons.Label({text:""}),5);
	activeAndinactiveRulesVLayout.insertContent(new sap.ui.commons.Label({text:that._oBundle.getText("SUBSTITUTION_INACTIVE_SUBSTITUTION_RULE"), design: sap.ui.commons.LabelDesign.Bold}),6);//TODO:Externalize
	activeAndinactiveRulesVLayout.insertContent(new sap.ui.commons.Label({text:""}),7);
	activeAndinactiveRulesVLayout.insertContent(new sap.ui.commons.Label({text:""}),8);//Dummy will be replaced by the inactive rules content.
	
	}
	var mySubstitutesVerticalLayoutContentIndex = ++verticalLayoutContentIndex;
	overlayVLayout.insertContent(that.getOverlayContent(dynamicId + "mySubstitutes", activeAndinactiveRulesVLayout), mySubstitutesVerticalLayoutContentIndex);
	oSRMOverlayContainer.addContent(overlayVLayout);
	
	oNavigationBar.attachSelect( function (oEvent){
								that.deleteMessage();
								var itemKey = oEvent.getParameter("item").getKey();
									// remove all content
								overlayVLayout.removeContent(mySubstitutesVerticalLayoutContentIndex);
								overlayVLayout.insertContent(that.getOverlayContent(itemKey, activeAndinactiveRulesVLayout), mySubstitutesVerticalLayoutContentIndex);
								oSRMOverlayContainer.rerender();
        			});
   } else {
       var oNavigationBar = sap.ui.getCore().byId(dynamicId + 'subsNavBar');
	   oNavigationBar.setSelectedItem(dynamicId + "mySubstitutes");   
	   var activeAndinactiveRulesVLayout = sap.ui.getCore().byId(dynamicId + 'activeAndinactiveRulesVLayout');
	   var overlayVLayout = sap.ui.getCore().byId(dynamicId + 'substitutionVLayout');
	   overlayVLayout.insertContent(that.getOverlayContent(dynamicId + "mySubstitutes", activeAndinactiveRulesVLayout), mySubstitutesVerticalLayoutContentIndex);
	   oSRMOverlayContainer.addContent(overlayVLayout);	   
    }	
	return oSRMOverlayContainer;
};


sap.uiext.inbox.SubstitutionRulesManager.prototype.getOverlayContent = function(itemKey, activeAndinactiveRulesVLayout) {
	var dynamicId = this.getId() + '--';
	var that = this;
	var subsContent = {};
	var oSRMOverlayContainer = sap.ui.getCore().byId(dynamicId + 'substitutionOverlayContainer');
	var newSubstitutionLink = sap.ui.getCore().byId(dynamicId + 'newSubstitutionLink');
	var overlayVLayout = sap.ui.getCore().byId(dynamicId + 'substitutionVLayout');
	
	if(subsContent[itemKey]) return subsContent[itemKey];
	if (itemKey === dynamicId + "mySubstitutes") {
		//Enabling 'New' link for creation of new substitution rule.
		newSubstitutionLink.setVisible(true);
		activeAndinactiveRulesVLayout.removeContent(2);
		// your code for content creation goes here
		activeAndinactiveRulesVLayout.insertContent(that.createSubtRuleRowReapterContent(itemKey, true), 2);
		activeAndinactiveRulesVLayout.removeContent(8);
		activeAndinactiveRulesVLayout.insertContent(that.createSubtRuleRowReapterContent(itemKey, false), 8);
		
		subsContent[itemKey] = activeAndinactiveRulesVLayout
	}else if(itemKey === dynamicId + "iamSubstituting"){
	 //Disabling 'New' link for creation of new substitution rule.
		newSubstitutionLink.setVisible(false);
		// your code for content creation goes here
		activeAndinactiveRulesVLayout.removeContent(2);
		activeAndinactiveRulesVLayout.insertContent(that.createSubtRuleRowReapterContent(itemKey, true), 2);
		activeAndinactiveRulesVLayout.removeContent(8);
		activeAndinactiveRulesVLayout.insertContent(that.createSubtRuleRowReapterContent(itemKey, false), 8);
	
		subsContent[itemKey] = activeAndinactiveRulesVLayout;
	}
	return subsContent[itemKey];
};

sap.uiext.inbox.SubstitutionRulesManager.prototype.openCreateSubstRulePopup = function(
		oEvent, oSubtRuleManager) {
		
	var that=this;
	var dynamicId = oSubtRuleManager.getId() + '--';
	var newSubstitutionLink = sap.ui.getCore().byId(
			dynamicId + 'newSubstitutionLink');
	var createSubsRulePopup = sap.ui.getCore().byId(
			dynamicId + 'createSubsRulePopup');
	if (createSubsRulePopup === undefined) {
		createSubsRulePopup = new sap.ui.ux3.ToolPopup(dynamicId
				+ 'createSubsRulePopup',{modal: true});
		var popupMainMatrix = new sap.ui.commons.layout.MatrixLayout(dynamicId
				+ 'popupMainMatrix', {
			layoutFixed : true,
			width : '300px',
			columns : 2,
			widths : [ "35%", "65%" ]
		});
		// popupMainMatrix.setWidths('100px', '200px');

		var popupMainMatrixCell1 = new sap.ui.commons.layout.MatrixLayoutCell(
				dynamicId + 'popupMainMatrixCell1', {
					colSpan : 2
				});

		var popupMainMatrixCellMsgBar = new sap.ui.commons.layout.MatrixLayoutCell(
				dynamicId + 'popupMainMatrixCellMsgBar', {
					colSpan : 2
				});

		popupMainMatrixCell1.addContent(new sap.ui.commons.TextView(dynamicId
				+ 'popupCreateSubstRuleTxt', {
			text :oSubtRuleManager._oBundle.getText("CREATE_SUBSTITUTION_RULE"), /*'Create Substitution Rule',*/
			design : sap.ui.commons.TextViewDesign.H3
		}).addStyleClass("textFontColour"));
		popupMainMatrix.createRow(popupMainMatrixCell1);
		popupMainMatrix.createRow(popupMainMatrixCellMsgBar);

		// Msg Bar
		oSubtRuleManager.populateMessageBar(oSubtRuleManager);

		// End Msg Bar

		var popupMainMatrixCell2 = new sap.ui.commons.layout.MatrixLayoutCell(
				dynamicId + 'popupMainMatrixCell2', {
					colSpan : 2
				});
		popupMainMatrixCell2.addContent(new sap.ui.commons.HorizontalDivider(
				dynamicId + 'popHorzDivdr1'));
		popupMainMatrix.createRow(popupMainMatrixCell2);

		var popupSubstLbl = new sap.ui.commons.Label(dynamicId
				+ 'popupSubstLbl', {
			text : oSubtRuleManager._oBundle.getText("SUBSTITUTION_RULE_SUBSTITUTE_LABEL")
		});

		var popupValueHelp = new sap.ui.commons.ValueHelpField(dynamicId
				+ 'popupValueHelp', {
			width : '100%',
			value : ""
		});

		popupValueHelp.attachValueHelpRequest(oSubtRuleManager,
				oSubtRuleManager.openUsersDialog);
		popupValueHelp.setRequired(true);
		popupValueHelp.setTooltip(oSubtRuleManager._oBundle.getText("SUBSTITUTION_RULE_SUBSTITUTE_TOOLTIP"));

		popupSubstLbl.setLabelFor(popupValueHelp);
		popupMainMatrix.createRow(popupSubstLbl, popupValueHelp);

		var popupAutoFwdtLbl = new sap.ui.commons.Label(dynamicId
				+ 'popupAutoFwdtLbl', {
			text : oSubtRuleManager._oBundle.getText("SUBSTITUTION_AUTOMATIC_FORWARDING_LABEL")/*'Automatic Forwarding:'*/
		});
		var popupSegBtn = new sap.ui.commons.SegmentedButton(dynamicId
				+ 'popupSegBtn', {
			buttons : [
					new sap.ui.commons.Button(dynamicId + 'popupSegBtnON', {
						text : oSubtRuleManager._oBundle.getText("SUBSTITUTION_AUTOMATIC_FORWARDING_ON_STATE")//"ON"
					}),
					new sap.ui.commons.Button(dynamicId + 'popupSegBtnOFF', {
						text :oSubtRuleManager._oBundle.getText("SUBSTITUTION_AUTOMATIC_FORWARDING_OFF_STATE") //"OFF"
					}) 
			]
		});

		popupSegBtn.attachSelect(function(oEvent) {
			if (sap.ui.getCore().byId

			(oEvent.getParameters().selectedButtonId).getText() == oSubtRuleManager._oBundle.getText("SUBSTITUTION_AUTOMATIC_FORWARDING_ON_STATE")) {
				
				
				//make the label and the DatePicket invisible. QuickFix. TODO: Create Rows and add or remove Rows. 
				sap.ui.getCore().byId(dynamicId +

				'popupFromDatePicker').setProperty("visible", true);
				sap.ui.getCore().byId(dynamicId +

				'popupToDatePicker').setProperty("visible", true);
				
				//labels visibility set to false
				
				sap.ui.getCore().byId(dynamicId +

				'popupFromLbl').setProperty("visible", true);
				sap.ui.getCore().byId(dynamicId +

				'popupToLbl').setProperty("visible", true);
				
				
				//reset the required property to true
				
				sap.ui.getCore().byId(dynamicId +

				'popupFromDatePicker').setProperty("required", true);
				sap.ui.getCore().byId(dynamicId +

				'popupToDatePicker').setProperty("required", true);
				

			} else {
				
				//make the label and the DatePicker invisible. QuickFix. TODO: Create Rows and add or remove Rows. 
				sap.ui.getCore().byId(dynamicId +

				'popupFromDatePicker').setProperty("visible", false);
				sap.ui.getCore().byId(dynamicId +

				'popupToDatePicker').setProperty("visible", false);
				
				//labels visibility set to false
				
				sap.ui.getCore().byId(dynamicId +

				'popupFromLbl').setProperty("visible", false);
				sap.ui.getCore().byId(dynamicId +

				'popupToLbl').setProperty("visible", false);
				
				//set the required property to false
				
				sap.ui.getCore().byId(dynamicId +

				'popupFromDatePicker').setProperty("required", false);
				sap.ui.getCore().byId(dynamicId +

				'popupToDatePicker').setProperty("required", false);
				
			}

			popupMainMatrix.rerender();
		});
		popupSegBtn.setSelectedButton(dynamicId + "popupSegBtnON");
		popupAutoFwdtLbl.setLabelFor(popupSegBtn);
		popupAutoFwdtLbl.setWrapping(true);
		popupMainMatrix.createRow(popupAutoFwdtLbl, popupSegBtn);

		var popupFromLbl = new sap.ui.commons.Label(dynamicId + 'popupFromLbl',
				{
					text :oSubtRuleManager._oBundle.getText("SUBSTITUTION_SUBSTITUTION_FROM_DATE_LABEL") /*'From:'*/
				});
		var popupFromDatePicker = new sap.ui.commons.DatePicker(dynamicId
				+ 'popupFromDatePicker', {
			text : oSubtRuleManager._oBundle.getText("SUBSTITUTION_SUBSTITUTION_FROM_DATE_LABEL"),/*'fromDate',*/
			width : '100%'
		});
		popupFromDatePicker.setRequired(true);
		popupFromDatePicker.setYyyymmdd(oSubtRuleManager.substitutionRulesManagerUtils._getTodaysDateinYYYYMMDD()); 
		// popupFromDatePicker.setLocale("en-US");//TODO: Donot hard code
		// Locale, should automatically pick from sap.ui.getCore().getLocale().
		popupFromLbl.setLabelFor(popupFromDatePicker);
		
		
		popupMainMatrix.createRow(popupFromLbl, popupFromDatePicker);

		var popupToLbl = new sap.ui.commons.Label(dynamicId + 'popupToLbl', {
			text : oSubtRuleManager._oBundle.getText("SUBSTITUTION_SUBSTITUTION_TO_DATE_LABEL")/*'To:'*/
		});
		var popupToDatePicker = new sap.ui.commons.DatePicker(dynamicId
				+ 'popupToDatePicker', {
			text :  oSubtRuleManager._oBundle.getText("SUBSTITUTION_SUBSTITUTION_TO_DATE_LABEL"),
			width : '100%'
		});
		popupToDatePicker.setRequired(true);
		// popupToDatePicker.setLocale("en-US");//TODO: Donot Hard Code Locale,
		// should automatically pick from sap.ui.getCore().getLocale().
		popupToLbl.setLabelFor(popupToDatePicker);
		popupMainMatrix.createRow(popupToLbl, popupToDatePicker);

		var popupMainMatrixCell3 = new sap.ui.commons.layout.MatrixLayoutCell(
				dynamicId + 'popupMainMatrixCell3', {
					colSpan : 2
				});
		popupMainMatrixCell3.addContent(new sap.ui.commons.HorizontalDivider(
				dynamicId + 'popHorzDivdr2'));
		popupMainMatrix.createRow(popupMainMatrixCell3);

		// var popupMainMatrixCell4 = new
		// sap.ui.commons.layout.MatrixLayoutCell(dynamicId +
		// 'popupMainMatrixCell4',{colSpan : 2});
		var popupCreateBtn = new sap.ui.commons.Button(dynamicId
				+ 'popupCreateBtn', {
			text :  oSubtRuleManager._oBundle.getText("SUBSTITUTION_SUBSTITUTIN_RULE_CREATE_BUTTON")/*'Create'*/
		});
		popupCreateBtn.attachPress(oSubtRuleManager,
				oSubtRuleManager.createSubstitutionRule);
		// popupCreateBtn.addStyleClass("customMargin");
		// popupMainMatrixCell4.addContent(popupCreateBtn);
		var popupCancelBtn = new sap.ui.commons.Button(dynamicId
				+ 'popupCancelBtn', {
			text : oSubtRuleManager._oBundle.getText("SUBSTITUTION_SUBSTITUTIN_RULE_CANCEL_BUTTON"),/*'Cancel'*/ 
			press : function() {

				//oSubtRuleManager.resetSubstRulePopup(oSubtRuleManager);
				createSubsRulePopup.close();
				createSubsRulePopup.destroy();
			}
		});
		// popupMainMatrixCell4.addContent(popupCancelBtn);
		popupMainMatrix.createRow(popupCreateBtn, popupCancelBtn);

		createSubsRulePopup.addContent(popupMainMatrix);
	}
	oSubtRuleManager.deleteMessage();
	createSubsRulePopup.setPosition(sap.ui.core.Popup.Dock.LeftTop,
			sap.ui.core.Popup.Dock.RightTop, newSubstitutionLink.getDomRef(),
			"13 -10", "none");
	createSubsRulePopup.open();
};

sap.uiext.inbox.SubstitutionRulesManager.prototype.createSubtRuleRowReapterContent = function(itemKey, isActiveSubstRule) {
	var isSubstitutedUserRules = (itemKey ===  this.getId() + '--' + 'mySubstitutes') ? true : false; 
	var dynamicId = itemKey;
	
	if(isActiveSubstRule){
		dynamicId = dynamicId + 'active' +'--';
	}else{
		dynamicId = dynamicId + 'inactive' +'--';
	}
	
	var that = this;
	var oSubstRuleRowRepater = sap.ui.getCore().byId(dynamicId + 'subsRowRepeater');
	if(oSubstRuleRowRepater === undefined){
			 oSubstRuleRowRepater = new sap.ui.commons.RowRepeater(dynamicId + 'subsRowRepeater',{numberOfRows : 2});
			 oSubstRuleRowRepater.attachPage(that, that.deleteMessage);
			 oSubstRuleRowRepater.setDesign(sap.ui.commons.RowRepeaterDesign.Transparent);
			 oSubstRuleRowRepater.setNoData( new sap.ui.commons.TextView({text:  that._oBundle.getText("SUBSTITUTION_VALIDATION_MESSAGE_NO_SUBSTITUTION_RULES_FOUND")}));
				// main matrix
				var rowRepMainMatrix = new sap.ui.commons.layout.MatrixLayout(dynamicId + 'rowRepMainMatrix',{
					layoutFixed : true,
//					columns : 6, //UX:FEEDBACK CODE
	//				widths : ['1%', '40%', '24%', '20%', '12%', '3%']////UX:FEEDBACK CODE
					columns : 6,
					//widths : ['1.5%', '2%', '37%', '24%', '21%', '12%', '3%']
					widths : ['2%', '37%', '24%', '21%', '12%', '3%']
				});
				if(isActiveSubstRule){
					rowRepMainMatrix.addStyleClass('borderFillColorGreen');
					rowRepMainMatrix.addStyleClass('shadowEffectGreen');
					rowRepMainMatrix.addStyleClass('mySapUiMltPadRight');
					
				}else{
					rowRepMainMatrix.addStyleClass('borderFillColorGray');
					rowRepMainMatrix.addStyleClass('shadowEffectGray');
					//rowRepMainMatrix.addStyleClass('mySapUiMltPadRight');
				}
			
//				var rowRepGreyCell = new sap.ui.commons.layout.MatrixLayoutCell(dynamicId + 'rowRepGreyCell');
//				//rowRepGreyCell.addStyleClass("greyFillColor");
//				if(isActiveSubstRule){
//					rowRepGreyCell.addStyleClass("shadowEffectGreen");
//				}
			
				var rowRepEmptyCell = new sap.ui.commons.layout.MatrixLayoutCell(dynamicId + 'rowRepEmptyCell');
				var rowRepEmpltyTxt = new sap.ui.commons.TextView(dynamicId +'substitutionID');
				rowRepEmpltyTxt.setVisible(false);
				rowRepEmpltyTxt.bindProperty("text","SubstitutionRuleId");
				rowRepEmptyCell.addContent(rowRepEmpltyTxt);
				
				var rowRepSubsDetailMatLyt = new sap.ui.commons.layout.MatrixLayout(dynamicId + 'rowRepSubsDetailMatLyt',{
																			columns : 1,
																			layoutFixed : true
																		});
			
				// Creating Empty Row above Substitute Name.
				var rowRepEmptyRow1 = new sap.ui.commons.layout.MatrixLayoutRow(dynamicId + 'rowRepEmptyRow1');
				var rowRepEmpltyTxt1 = new sap.ui.commons.TextView(dynamicId +'rowRepEmpltyTxt1', {text : ""});
				var rowRepEmpltyCell1 = new sap.ui.commons.layout.MatrixLayoutCell(dynamicId +'rowRepEmpltyCell1', {
																			backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent
																			});
				rowRepEmpltyCell1.addContent(rowRepEmpltyTxt1);
				rowRepEmptyRow1.addCell(rowRepEmpltyCell1);
			//	rowRepSubsDetailMatLyt.addRow(rowRepEmptyRow1);
			
				// Creating Row for Substitute(d) User Name
				var rowRepSubstNameRow = new sap.ui.commons.layout.MatrixLayoutRow(dynamicId + 'rowRepSubstNameRow');
				var rowRepSubstNameTxtView;
					rowRepSubstNameTxtView = new sap.ui.commons.TextView(dynamicId + 'rowRepSubstNameTxtView');
					rowRepSubstNameTxtView.bindProperty("text", "FullName", function(value) {
						if(value !== null && value !== ""){
					//		var indexOfComma = value.indexOf(",");
					//		var lastName = value.substring(indexOfComma + 1);
					//		if(lastName === " ")value = value.substring(0, indexOfComma);//Removing comma in case there is no last name for a user.
							//TODO: Uncommented Code to remove commas, as decided will fetch last name and first name from the service, decision on this still pending.
							return value;
						}
					});
				rowRepSubstNameTxtView.addStyleClass('blueFontColor');
				
				var rowRepSubstNameCell = new sap.ui.commons.layout.MatrixLayoutCell(dynamicId + 'rowRepSubstNameCell',{
																				backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent
																			});
				rowRepSubstNameCell.addContent(rowRepSubstNameTxtView);
				rowRepSubstNameRow.addCell(rowRepSubstNameCell);
				rowRepSubsDetailMatLyt.addRow(rowRepSubstNameRow);
			
				// Creating Row for User Friendly Text below the Substitute(d) User Name
				var rowRepUsrFriendlyRow = new sap.ui.commons.layout.MatrixLayoutRow(dynamicId + 'rowRepUsrFriendlyRow');
				var rowRepUsrFriendlyTxt = new sap.ui.commons.TextView(dynamicId + 'rowRepUsrFriendlyTxt');
				rowRepUsrFriendlyTxt.addStyleClass('blackFontColor');
				
				
				rowRepUsrFriendlyTxt.bindProperty("text", "FullName", function(value) {
					if(value !== null && value !== "" && value){
						var oModel = this.getModel();
						return that.substitutionRulesManagerUtils._getText(value, isSubstitutedUserRules,isActiveSubstRule, 
																			oModel.getProperty('IsEnabled',this.getBindingContext(),false),
																			oModel.getProperty('Mode',this.getBindingContext(),false),
																			oModel.getProperty('BeginDate',this.getBindingContext(),false),
																			oModel.getProperty('EndDate',this.getBindingContext(),false));
						}
					}); 
				

				var rowRepUsrFriendlyCell = new sap.ui.commons.layout.MatrixLayoutCell(dynamicId + 'rowRepUsrFriendly');
				rowRepUsrFriendlyCell.addContent(rowRepUsrFriendlyTxt);
				rowRepUsrFriendlyRow.addCell(rowRepUsrFriendlyCell);
				rowRepSubsDetailMatLyt.addRow(rowRepUsrFriendlyRow);
				 
				
				//TODO: Empty Row below the user friendly text.
				/*var matrixSubRow = new sap.ui.commons.layout.MatrixLayoutRow();
				control = new sap.ui.commons.TextView({
					text : ""
				});
				matrixCell = new sap.ui.commons.layout.MatrixLayoutCell({
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent
				});
				matrixCell.addContent(control);
				matrixSubRow.addCell(matrixCell);*/
			//	rowRepSubsDetailMatLyt.addRow(rowRepEmptyRow1);
			
				//Second column for since and until dates.
				var rowRepSinceUntilMatLyt = new sap.ui.commons.layout.MatrixLayout(dynamicId + 'rowRepSinceUntilMatLyt', {
																					columns : 1,
																					layoutFixed : true
																				});
			
			/*	var rowRepSinceUntilRow = new sap.ui.commons.layout.MatrixLayoutRow();
				control = new sap.ui.commons.TextView({
					text : ""
				});
				matrixCell = new sap.ui.commons.layout.MatrixLayoutCell({
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent
				});
				matrixCell.addContent(control);
				matrixSubRow.addCell(matrixCell);*/
			//	rowRepSinceUntilMatLyt.addRow(rowRepEmptyRow1);
			
				// Second Column Since Date Row
				var rowRepSinceDateRow = new sap.ui.commons.layout.MatrixLayoutRow(dynamicId + 'rowRepSinceDateRow');
				var rowRepSinceDateTxt = new sap.ui.commons.TextView(dynamicId + 'rowRepSinceDateTxt');	//TODO: From Service
				rowRepSinceDateTxt.addStyleClass('grayFontColor');
				var sinceNFromTxt = that._oBundle.getText("SUBSTITUTION_RULE_SINCE_LABEL");//"Since : ";
				if(!isActiveSubstRule){
					sinceNFromTxt = that._oBundle.getText("SUBSTITUTION_SUBSTITUTION_FROM_DATE_LABEL");//"From : ";
				}
				//rowRepSinceDateTxt.setText(sinceNFromTxt + "02/02/2012");
				rowRepSinceDateTxt.bindProperty("text", "BeginDate", function(value) {
					//display the From and To only in case of Push (Auto Forward ON Rules)
					if(value !== undefined && value !== null & value !== ""){
						var oModel = this.getModel();
						if(oModel.getProperty('Mode',this.getBindingContext(),false) === "RECEIVE_TASKS")
							return sinceNFromTxt + " : "+ that.substitutionRulesManagerUtils._getFormattedDate(value);//TODO: Generate User Friendly Text.
					}
				}); 
				var rowRepSinceDateCell = new sap.ui.commons.layout.MatrixLayoutCell(dynamicId + 'rowRepSinceDate',{
																			backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent
																		});
				rowRepSinceDateCell.addContent(rowRepSinceDateTxt);
				rowRepSinceDateRow.addCell(rowRepSinceDateCell);
				rowRepSinceUntilMatLyt.addRow(rowRepSinceDateRow);
			
				//Second Column Until Date Row
				var rowRepUntilDateRow = new sap.ui.commons.layout.MatrixLayoutRow(dynamicId + 'rowRepUntilDateRow');
				var rowRepUntilDateTxt = new sap.ui.commons.TextView(dynamicId + 'rowRepUntilDateTxt');//, {text : "Until : " + "05/02/2012"});//TODO From Service
				rowRepUntilDateTxt.addStyleClass('grayFontColor');
				rowRepUntilDateTxt.bindProperty("text", "EndDate", function(value) {
					//display the From and To only in case of Push (Auto Forward ON Rules)
					if(value !== undefined && value !== null & value !== ""){
						var oModel = this.getModel();
						if(oModel.getProperty('Mode',this.getBindingContext(),false) === "RECEIVE_TASKS")
							return that._oBundle.getText("SUBSTITUTION_RULE_UNTIL_LABEL")+" : "+ that.substitutionRulesManagerUtils._getFormattedDate(value);//"Until : "
					}
				}); 
				var rowRepUntilDateCell = new sap.ui.commons.layout.MatrixLayoutCell(dynamicId + 'rowRepUntilDateCell');
				rowRepUntilDateCell.addContent(rowRepUntilDateTxt);
				rowRepUntilDateRow.addCell(rowRepUntilDateCell);
				rowRepSinceUntilMatLyt.addRow(rowRepUntilDateRow);
			
			/*	matrixSubRow = new sap.ui.commons.layout.MatrixLayoutRow();
				control = new sap.ui.commons.TextView({
					text : ""
				});
				matrixCell = new sap.ui.commons.layout.MatrixLayoutCell({
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent
				});
				matrixCell.addContent(control);
				matrixSubRow.addCell(matrixCell);*/
			//	rowRepSinceUntilMatLyt.addRow(rowRepEmptyRow1);
			
			
				//Third column for Active For/In Time. 
				var rowRepActiveTimeMatLyt = new sap.ui.commons.layout.MatrixLayout(dynamicId + 'rowRepActiveTimeMatLyt',{columns : 1,	layoutFixed : true});
			
				// sub matrix row
			/*	matrixSubRow = new sap.ui.commons.layout.MatrixLayoutRow();
				control = new sap.ui.commons.TextView({
					text : ""
				});
				matrixCell = new sap.ui.commons.layout.MatrixLayoutCell({
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent
				});
				matrixCell.addContent(control);
				matrixSubRow.addCell(matrixCell);*/
				
				//TODO: Different controls have to be created and added for the empty space. Same control cannot be added at multiple places. Else try with padding through CSS. 
		//		rowRepActiveTimeMatLyt.addRow(rowRepEmptyRow1);
			
				// Third column row for Text Active For/In
				var rowRepActiveRow = new sap.ui.commons.layout.MatrixLayoutRow(dynamicId + 'rowRepActiveRow');
				var rowRepActiveTxt = new sap.ui.commons.TextView(dynamicId + 'rowRepActiveTxt');
				rowRepActiveTxt.addStyleClass('grayFontColor');
				
				//TODO: externalize and modify for/In according to active or inactive.
				//From utils
				
				rowRepActiveTxt.bindProperty("text", "FullName", function(value) {
					if(value !== null && value !== ""){
						var oModel = this.getModel();
						var mode = oModel.getProperty('Mode',this.getBindingContext(),false);
						if(mode === "RECEIVE_TASKS"){
							var activeTxt = that.substitutionRulesManagerUtils._getStatus(isSubstitutedUserRules,isActiveSubstRule, 
									oModel.getProperty('IsEnabled',this.getBindingContext(),false),
									mode,
									oModel.getProperty('BeginDate',this.getBindingContext(),false),
									oModel.getProperty('EndDate',this.getBindingContext(),false));
							return activeTxt;
						}
					}});
				
				rowRepActiveTxt.addStyleClass('blueFontColor');
				//
				//rowRepActiveTxt.setText(activeTxt);
				var rowRepActiveCell = new sap.ui.commons.layout.MatrixLayoutCell(dynamicId + 'rowRepActiveCell', {
																		backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent
																	});
				rowRepActiveCell.addContent(rowRepActiveTxt);
				rowRepActiveRow.addCell(rowRepActiveCell);
				rowRepActiveTimeMatLyt.addRow(rowRepActiveRow);
			
				// Third Column Row for Time in Days.
				var rowRepTimeInDaysRow = new sap.ui.commons.layout.MatrixLayoutRow(dynamicId + 'rowRepTimeInDaysRow');
				var rowRepTimeInDaysTxt = new sap.ui.commons.TextView(dynamicId + 'rowRepTimeInDaysTxt');
				rowRepTimeInDaysTxt.addStyleClass('blueFontColor');
				
				var timeInDaysTxt = ''; //TODO Use Service. 
				var rowRepTimeInDaysCell = new sap.ui.commons.layout.MatrixLayoutCell(dynamicId + 'rowRepTimeInDaysCell');
				rowRepTimeInDaysCell.addContent(rowRepTimeInDaysTxt);
				rowRepTimeInDaysRow.addCell(rowRepTimeInDaysCell);
				rowRepActiveTimeMatLyt.addRow(rowRepTimeInDaysRow);
			
				/*matrixSubRow = new sap.ui.commons.layout.MatrixLayoutRow();
				control = new sap.ui.commons.TextView({
					text : ""
				});
				matrixCell = new sap.ui.commons.layout.MatrixLayoutCell({
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent
				});
				matrixCell.addContent(control);
				matrixSubRow.addCell(matrixCell);*/
				rowRepActiveTimeMatLyt.addRow(rowRepTimeInDaysRow);
			
				//Fouth Column On Off Segemented Button
				var rowRepOnOffSegBtn = new sap.ui.commons.SegmentedButton(dynamicId + 'rowRepOnOffSegBtn',{visible:false, buttons : [new sap.ui.commons.Button(dynamicId + 'rowRepOnSegBtn', {text : that._oBundle.getText("SUBSTITUTION_AUTOMATIC_FORWARDING_ON_STATE")}),//"ON"
				                                                                                                       new sap.ui.commons.Button(dynamicId + 'rowRepOffSegBtn', {text : that._oBundle.getText("SUBSTITUTION_AUTOMATIC_FORWARDING_OFF_STATE")})//"OFF"
																																																				]});
				
				var onOff = "IsEnabled";
				
				//We use this variable to enable/disable the Segmented Button.
				//We disable it when the Mode is "RECIEVE_TASKS" and view is I Am Substituting and if Mode is null, true in all other cases.
				/*var enableSegBtn = true;*/ 
				
				if (itemKey === this.getId() + '--iamSubstituting') {
					rowRepOnOffSegBtn.bindProperty("visible", "Mode" , function(value){
						var oModel = that.getModel();
						var oContext = rowRepOnOffSegBtn.getBindingContext();
						var isSupportsEnable = oModel.getProperty("SupportsEnable",oContext);
						    
						if(value !== null){
							if(value ==="RECEIVE_TASKS"){
								return false;
							}else{
								return isSupportsEnable;//true;
							}
						}else{
							return false;
						}
						});
					onOff = "TakenOver";
				}else{
                	rowRepOnOffSegBtn.bindProperty("visible", "Mode" , function(value){
						var oModel = that.getModel();
						var oContext = rowRepOnOffSegBtn.getBindingContext();
						var isSupportsEnable = oModel.getProperty("SupportsEnable",oContext);

                		if(value !== null){
							if(value ==="RECEIVE_TASKS"){
								return isSupportsEnable;//true;
							}else{
								return false;
							}
						}else{
							return false;
						}
					});
					onOff = "IsEnabled";
				}

				rowRepOnOffSegBtn.bindProperty("enabled", "IsEnabled" , function(value){
					if(value !=null && value !==""){
						if(!value)
						{
							this.setSelectedButton(this.getButtons()[1].getId());
						}else{
							this.setSelectedButton(this.getButtons()[0].getId());
						}
					}
					return true;
				});
				rowRepOnOffSegBtn.attachSelect(this, function(oEvent, subRulesMgr){
					var enabled = true;
					var takeOver = true;
					if(onOff === "IsEnabled"){ //My Rules (Action : Enable/Disable Rule)
						if(oEvent.getParameters().selectedButtonId.indexOf('rowRepOnSegBtn') === -1){
							enabled = false;
							takeOver = true;
						}else{
							enabled = true;
							takeOver = true;
						}
					}else{//I am substituting rules (Action : Take over)
						if(oEvent.getParameters().selectedButtonId.indexOf('rowRepOnSegBtn') === -1){
							takeOver = false;
							enabled = true;
						}else{
							takeOver = true;
							enabled = true;
						}
					}
					that.updateSubstitutionRule(oEvent, enabled, takeOver, subRulesMgr);
				});

				//Fifth Row Delete Image.
				if(isSubstitutedUserRules){
					var rowRepDeleteImg = new sap.ui.commons.Image(dynamicId + 'rowRepDeleteImg',{src : that._imgResourcePath + sap.uiext.inbox.SubstitutionRulesManagerConstants.deleteSubstRule,
						tooltip : this._oBundle.getText("SUBSTITUTION_RULE_DELETE"),
						decorative : false
					});
					rowRepDeleteImg.setWidth("21px");
					rowRepDeleteImg.setHeight("21px");
					rowRepDeleteImg.attachPress(this, this.deleteSubstitutionRule);
				//UX FEEDBACK CODE
				//	rowRepMainMatrix.createRow(rowRepEmptyCell, rowRepSubsDetailMatLyt, rowRepSinceUntilMatLyt, rowRepActiveTimeMatLyt, rowRepOnOffSegBtn, rowRepDeleteImg);
					rowRepMainMatrix.createRow(rowRepEmptyCell, rowRepSubsDetailMatLyt, rowRepSinceUntilMatLyt, rowRepActiveTimeMatLyt, rowRepOnOffSegBtn, rowRepDeleteImg);
				}else{
					//UX FEEDBACK CODE
					//rowRepMainMatrix.createRow(rowRepEmptyCell, rowRepSubsDetailMatLyt, rowRepSinceUntilMatLyt, rowRepActiveTimeMatLyt, rowRepOnOffSegBtn);
					rowRepMainMatrix.createRow(rowRepEmptyCell, rowRepSubsDetailMatLyt, rowRepSinceUntilMatLyt, rowRepActiveTimeMatLyt, rowRepOnOffSegBtn);
				}
				
			
			  var	rowRepMainMatrixWapperMatrix = new sap.ui.commons.layout.MatrixLayout(dynamicId + 'rowRepMainMatrixWapperMatrix', {layoutFixed : true});
			  rowRepMainMatrixWapperMatrix.createRow(rowRepMainMatrix);
			  rowRepMainMatrixWapperMatrix.createRow(new sap.ui.commons.TextView(dynamicId + 'rowRepWapperMatEmptyTxt', {text : ""}));
			
				//oSubstRuleRowRepater.setModel(this.getModel());
				var isSubstituted = "true";
				if (itemKey === this.getId() + '--iamSubstituting') {
					isSubstituted = "false";
				}
				var oFilter = [];
				var filter = new sap.ui.model.Filter("IsSubstituted", sap.ui.model.FilterOperator.EQ, isSubstituted);
				oFilter.push(filter);
				filter = new sap.ui.model.Filter("IsActive", sap.ui.model.FilterOperator.EQ, isActiveSubstRule?"true":"false");
				oFilter.push(filter);

				oSubstRuleRowRepater.bindRows(this.sPath, rowRepMainMatrixWapperMatrix, null, oFilter);
		}else{
		    this._refreshBindings(itemKey, isActiveSubstRule);    
		}
				
	return oSubstRuleRowRepater;

};

//TODO: Need to reuse this function instead of duplicating the code in methods above, had some issue so not not this try this.
// The same needs to be done for user friendly text.
//Can remove this peice of code, it not being used anywhere.
sap.uiext.inbox.SubstitutionRulesManager.prototype.formatUserName = function(value) {
	if(value !== null && value !== ""){
		var indexOfComma = value.indexOf(",");
		var lastName = value.substring(indexOfComma + 1);
		if(lastName === " ")value = value.substring(0, indexOfComma);
		return value;//Removing comma in case there is no last name for a user.
	}
}

sap.uiext.inbox.SubstitutionRulesManager.prototype.bindSubstitutionRules = function(path) {
	/*var oFilter = [];
	var filter = new sap.ui.model.Filter("IsSubstituted", sap.ui.model.FilterOperator.EQ, isSubstituted);
	oFilter.push(filter);
	filter = new sap.ui.model.Filter("Active", sap.ui.model.FilterOperator.EQ, isActiveSubstRule?"true":"false");
	oFilter.push(filter);
	var oSubstRuleRowRepater = this._getComponent("subsRowRepeater");
	var rowRepMainMatrixWapperMatrix = this._getComponent("rowRepMainMatrixWapperMatrix");
	oSubstRuleRowRepater.bindRows(this.sPath, rowRepMainMatrixWapperMatrix, null, oFilter);
*/};

sap.uiext.inbox.SubstitutionRulesManager.prototype.populateMsgBar = function() {
	var msgBarContainer = new sap.ui.commons.Toolbar(this.getId() + '--' + "msgBarContainer", {
		visible : false
	});
	var msbBarTypeImg = new sap.ui.commons.Image({
		id : this.getId() + '--' + "msbBarTypeImg",
		text : "",
		decorative : false
	});
	var msbBarTypeMsg = new sap.ui.commons.TextView({
		id : this.getId() + '--' + "msbBarTextView",
		text : ""
	});
	var msbBarCloseImg = new sap.ui.commons.Image({
		id : this.getId() + '--' + "msbBarCloseImg",
		text : "",
		decorative : false,
		tooltip : this._oBundle.getText("INBOX_MSGBAR_CLOSE_TOOLTIP")
	});
	msbBarCloseImg.addStyleClass("sapUiExtInboxToolbarRight");
	msbBarCloseImg.setSrc(this._imgResourcePath + sap.uiext.inbox.InboxConstants.closeImg);
	msbBarCloseImg.attachPress(this, this.deleteMessage);
	msgBarContainer.addItem(msbBarTypeImg);
	msgBarContainer.addItem(msbBarTypeMsg);
	msgBarContainer.addItem(msbBarCloseImg);
	return msgBarContainer;
};

sap.uiext.inbox.SubstitutionRulesManager.prototype.deleteMessage = function(oEvent, subRulesMgr) {
	if (subRulesMgr === undefined)
		subRulesMgr = this;
	var msgBarTB = sap.ui.getCore().byId(subRulesMgr.getId() + '--' + 'msgBarContainer');
	if (msgBarTB != undefined) {
		msgBarTB.setVisible(false);
		sap.ui.getCore().byId(subRulesMgr.getId() + '--' + 'msbBarTextView').setText("");
		sap.ui.getCore().byId(subRulesMgr.getId() + '--' + 'msbBarTypeImg').setSrc("");
	}
};


sap.uiext.inbox.SubstitutionRulesManager.prototype.showMessage = function(messageType, messageText) {
	var msgBarTB = sap.ui.getCore().byId(this.getId() + '--' + 'msgBarContainer');
	if (msgBarTB != undefined) {
		msgBarTB.setVisible(true);
		
		var msgBarText = this._getComponent('msbBarTextView');
		msgBarText.setText(messageText);
		
		
		var msgBarTypeImg = this._getComponent('msbBarTypeImg');
		msgBarTypeImg.setSrc(
				this._imgResourcePath + sap.uiext.inbox.InboxConstants.messageTypeIcons[messageType]);
		msgBarTypeImg.setTooltip(this._oBundle.getText(sap.uiext.inbox.InboxConstants.messageTypeToolTip[messageType]) + " " +  messageText);

	}
};

sap.uiext.inbox.SubstitutionRulesManager.prototype._getComponent = function(sComponentName) { 
	return sap.ui.getCore().byId(this.getId() + '--' + sComponentName); 
};

sap.uiext.inbox.SubstitutionRulesManager.prototype.deleteSubstitutionRule = function(oEvent, subRulesMgr) {
	var oModel = subRulesMgr.getModel();
	//SAPUI5 by default makes it DataServiceVersion 2.0 as oData 1.0 does not support skip/top etc:
	oModel.oHeaders["DataServiceVersion"] = "1.0";
	oModel.remove(oEvent.getSource().getBindingContext().sPath, undefined,
			function(){
				 var oNavigationBar = sap.ui.getCore().byId(subRulesMgr.getId() + '--subsNavBar');
				 var selectedNavItemID = oNavigationBar.getSelectedItem();   
				 subRulesMgr._refreshBindings(selectedNavItemID);
				 subRulesMgr.showMessage("info", subRulesMgr._oBundle.getText("SUBSTITUTION_VALIDATION_MESSAGE_SUBSTITUTION_RULE_DELETED_SUCCESSFULLY"));
			},
			function(error){
				if(error.response === undefined || error.response.statusCode != 205){
					subRulesMgr.showMessage("error", subRulesMgr._oBundle.getText("SUBSTITUTION_VALIDATION_MESSAGE_SUBSTITUTION_RULE_DELETION_FAILURE_CONTACT_ADMIN"));
				}else if(error.response.statusCode == 205){
					var eventParams = {statusCode : error.response.statusCode, statusText : error.response.statusText};
					oModel.fireRequestFailed(eventParams);
				}
			});
};

sap.uiext.inbox.SubstitutionRulesManager.prototype.updateSubstitutionRule = function(oEvent, enabled, takeOver, subRulesMgr) {
    var oModel = subRulesMgr.getModel();
    var oContext = oEvent.getSource().getBindingContext();
    var ruleID = oModel.getProperty("SubstitutionRuleId",oContext);
    var sapOrigin = oModel.getProperty("SAP__Origin",oContext);
    var sTakenOver = (takeOver !== undefined)? takeOver : false;
    var sEnabled = (enabled !== undefined)? enabled : false;
    
    //SAPUI5 by default makes it DataServiceVersion 2.0 as oData 1.0 does not support skip/top etc:
    /*oModel.oHeaders["DataServiceVersion"] = "1.0"
     */
	 var IDURIPart = subRulesMgr.inboxConstants.forwardSlash + subRulesMgr.substitutionConstants.updateRuleExecutionFunctionImport + subRulesMgr.inboxConstants.query + "SubstitutionRuleId='" + ruleID +"'" + subRulesMgr.inboxConstants.amperSand + "Enabled='"+ sEnabled + "'" 
	                        + subRulesMgr.inboxConstants.amperSand + "TakenOver='" + sTakenOver + "'" + subRulesMgr.inboxConstants.amperSand + "SAP__Origin='" + sapOrigin + "'" + subRulesMgr.inboxConstants.amperSand + subRulesMgr.inboxConstants.formatJSONURLParam;
	 
	 var requestURI = subRulesMgr.sUrl + IDURIPart;
	 
	 var requestOptions = {
	      async:false,
	      requestUri : requestURI,
	      method : "POST",
	      headers : {
	             Accept : subRulesMgr.inboxConstants.acceptHeaderforJSON,
	             "x-csrf-token" : oModel.oHeaders["x-csrf-token"]
	      }
	 };

 OData.request(requestOptions, function(data, request) {
    var oNavigationBar = sap.ui.getCore().byId(subRulesMgr.getId() + '--subsNavBar');
           var selectedNavItemID = oNavigationBar.getSelectedItem();   
           subRulesMgr._refreshBindings(selectedNavItemID);
           subRulesMgr.showMessage("info", subRulesMgr._oBundle.getText("SUBSTITUTION_VALIDATION_MESSAGE_SUBSTITUTION_RULE_UPDATED_SUCCESSFULLY"));
 }, function(error) {
    if(error.response === undefined || error.response.statusCode != 205){
                  subRulesMgr.showMessage("error", subRulesMgr._oBundle.getText("SUBSTITUTION_VALIDATION_MESSAGE_SUBSTITUTION_RULE_UPDATION_FAILURE_CONTACT_ADMIN"));
           }else if(error.response.statusCode == 205){
                  var eventParams = {statusCode : error.response.statusCode, statusText : error.response.statusText};
                  oModel.fireRequestFailed(eventParams);
           }
 });
};

/*sap.uiext.inbox.SubstitutionRulesManager.prototype.updateSubstitutionRule = function(oEvent, enabled, takeOver, subRulesMgr) {
	
	var oModel = subRulesMgr.getModel();
	var oEntry = oEvent.getSource().getBindingContext().getObject(); 
	if(enabled != undefined)
		oEntry.Enabled = enabled;
	else if(takeOver != undefined)
		oEntry.TakenOver = takeOver;
	//SAPUI5 by default makes it DataServiceVersion 2.0 as oData 1.0 does not support skip/top etc:
	oModel.oHeaders["DataServiceVersion"] = "1.0"

	oModel.update(oEvent.getSource().getBindingContext().sPath, oEntry,null,
			function(){
				var oNavigationBar = sap.ui.getCore().byId(subRulesMgr.getId() + '--subsNavBar');
				var selectedNavItemID = oNavigationBar.getSelectedItem();   
				subRulesMgr._refreshBindings(selectedNavItemID);
				subRulesMgr.showMessage("info", subRulesMgr._oBundle.getText("SUBSTITUTION_VALIDATION_MESSAGE_SUBSTITUTION_RULE_UPDATED_SUCCESSFULLY"));
			},
			function(error){
				if(error.response === undefined || error.response.statusCode != 205){
					subRulesMgr.showMessage("error", subRulesMgr._oBundle.getText("SUBSTITUTION_VALIDATION_MESSAGE_SUBSTITUTION_RULE_UPDATION_FAILURE_CONTACT_ADMIN"));
				}else if(error.response.statusCode == 205){
					var eventParams = {statusCode : error.response.statusCode, statusText : error.response.statusText};
					oModel.fireRequestFailed(eventParams);
				}
			});
};*/


sap.uiext.inbox.SubstitutionRulesManager.prototype.createSubstitutionRule = function(oEvent, oSubRuleMgr) {
    var that=this;
	var error = oSubRuleMgr.validate(oSubRuleMgr);
	if (error === false) {

		var oModel = oSubRuleMgr.getModel();
		//SAPUI5 by default makes it DataServiceVersion 2.0 as oData 1.0 does not support skip/top etc: 
		oModel.oHeaders["DataServiceVersion"] = "1.0"
	
		
		var oEntry = {};
		
		var oFormat = sap.ui.core.format.DateFormat.getDateInstance({pattern:"yyyyMMdd"});
		var startDate;
		var endDate;
		var endDateInputValue = oSubRuleMgr._getComponent('popupToDatePicker').getYyyymmdd(); 
		
		if(endDateInputValue != undefined && endDateInputValue !== ""){
			var endDateYear =  endDateInputValue.substr(0,4);
			var endDateMonth = endDateInputValue.substr(4,2);
			var endDateDate = endDateInputValue.substr(6,8);
			//endDate = oFormat.parse(endDateInputValue); 
			var offset = oSubRuleMgr.substitutionRulesManagerUtils._getTimeZoneOffset();
			if(offset !== undefined){
				offset = offset/(60*1000);
				endDate = new Date(Date.UTC(endDateYear,endDateMonth-1,endDateDate,23,59-offset,59,59))
			}else{
				endDate = oFormat.parse(endDateInputValue); 
				endDate.setHours(23,59,59,59);
			}
		}else{
			endDate = new Date(2100,01,01);
		}
		
		var startDateInputValue = oSubRuleMgr._getComponent('popupFromDatePicker').getYyyymmdd();
		
		if(startDateInputValue != undefined && startDateInputValue !== ""){
			var startDateYear =  startDateInputValue.substr(0,4);
			var startDateMonth = startDateInputValue.substr(4,2);
			var startDateDate = startDateInputValue.substr(6,8);
			var offset = oSubRuleMgr.substitutionRulesManagerUtils._getTimeZoneOffset();
			if(offset !== undefined){
				offset = offset/(60*1000);
				startDate = new Date(Date.UTC(startDateYear,startDateMonth-1,startDateDate,0,-offset,0,0))
			}else{
				startDate = oFormat.parse(startDateInputValue);
			}
		}else{
			startDate = new Date();
			startDate.setHours(0,0,0,0);
		}

	oEntry.EndDate = "\/Date(" + endDate.getTime() + ")\/";
	oEntry.BeginDate = "\/Date(" + startDate.getTime() + ")\/";
	
	// how do we get the logged in user details???//Chances have been made at server side, i donn think we this anymore.
	//oEntry.SubstitutedUser = "Administrator, ";
	//oEntry.SubstitutedUserId = "USER.PRIVATE_DATASOURCE.un:Administrator";
	
	
	var popupValueHelp = oSubRuleMgr._getComponent('popupValueHelp');
	oEntry.FullName = popupValueHelp.getValue();
	oEntry.User = popupValueHelp.data("uniqueName");
	
	var forwardSegmentButton = oSubRuleMgr._getComponent('popupSegBtn');
	var forwardSegmentSelectedButton = forwardSegmentButton.getSelectedButton();
	
	//assuming that Automatic forwarding is the mode
	if(forwardSegmentSelectedButton.indexOf("popupSegBtnON") >= 0){
		oEntry.Mode = "RECEIVE_TASKS";
		//oEntry.Active = true;
		oEntry.IsEnabled = true;
		//oEntry.TakenOver = true;
	}else{
		oEntry.Mode = "TAKE_OVER";
		//oEntry.Active = true;
		oEntry.IsEnabled = true;
		//oEntry.TakenOver = false;
	}
	
	var createSubsRulePopup = sap.ui.getCore().byId(oSubRuleMgr.getId()+ '--createSubsRulePopup');
	oModel.create(oSubRuleMgr.sPath,oEntry,null,
												function(oData, response){
													oSubRuleMgr.showMessage("info", oSubRuleMgr._oBundle.getText("SUBSTITUTION_VALIDATION_MESSAGE_SUBSTITUTION_RULE_CREATED_SUCCESSFULLY"));
													oSubRuleMgr._refreshBindings(oSubRuleMgr.getId()+"--mySubstitutes");
													oModel.oHeaders["DataServiceVersion"] = "2.0"
												},
												function(error){
													if(error.response === undefined || error.response.statusCode != 205){
														oSubRuleMgr.showMessage("error", oSubRuleMgr._oBundle.getText("SUBSTITUTION_VALIDATION_MESSAGE_SUBSTITUTION_RULE_CREATION_FAILURE_CONTACT_ADMIN"));
													}else if(error.response.statusCode == 205){
														var eventParams = {statusCode : error.response.statusCode, statusText : error.response.statusText};
														oModel.fireRequestFailed(eventParams);
													}
												});
		createSubsRulePopup.close();
		createSubsRulePopup.destroy();	
	}
};



sap.uiext.inbox.SubstitutionRulesManager.prototype.openUsersDialog = function(oEvent, oSubRuleMgr){
	var dynamicId = oSubRuleMgr.getId() + '--';
	var usersDialog = sap.ui.getCore().byId(dynamicId + "usersDialog");
	var oTable = sap.ui.getCore().byId(dynamicId + "userTable"); 
	if(usersDialog===undefined){
		var dLayout = new sap.ui.commons.layout.MatrixLayout({
			id : dynamicId + 'dLayout',
			layoutFixed : true,
			width : '100%',
			columns : 2,
			widths : ['91%', '9%'] });

		/*var searchLabel = new sap.ui.commons.Label({
			id : dynamicId + 'searchLabel',
			text : oSubRuleMgr._oBundle.getText("SUBSTITUTION_USERS_PICKLIST_SEARCH_LABEL")+":"
		});*/

		var searchFld = new sap.ui.commons.TextField({
			id : dynamicId + 'searchF',	
			value: oSubRuleMgr._oBundle.getText("SUBSTITUTION_USERS_PICKLIST_SEARCH_LABEL"),
			editable : true,
			width : '100%'});
		
		searchFld.addStyleClass("sapUiExtInboxSubstitutionValueHelpTextStyle");
		searchFld.onfocusin = function(){
			searchFld.removeStyleClass("sapUiExtInboxSubstitutionValueHelpTextStyle");
			if(searchFld.getLiveValue() === oSubRuleMgr._oBundle.getText("SUBSTITUTION_USERS_PICKLIST_SEARCH_LABEL")){
				searchFld.setValue("");
			}
		};
		searchFld.onfocusout = function(){
			if(searchFld.getLiveValue() === ""){
				searchFld.addStyleClass("sapUiExtInboxSubstitutionValueHelpTextStyle");
				searchFld.setValue(oSubRuleMgr._oBundle.getText("SUBSTITUTION_USERS_PICKLIST_SEARCH_LABEL"));
			}else{
				searchFld.setValue(searchFld.getLiveValue());
			}
		};

		//searchLabel.setLabelFor(searchFld);
		var goBtn = new sap.ui.commons.Button(dynamicId + "goBtn",{
			text : oSubRuleMgr._oBundle.getText("SUBSTITUTION_USERS_PICKLIST_SEARCH_GO_BUTTON"),//"Go",
			tooltip : oSubRuleMgr._oBundle.getText("SUBSTIUTION_RULE_SEARCH_FOR_USERS"),//"Search For Users",
			press:function(oEvent){
				var searchTerm = sap.ui.getCore().byId(dynamicId + 'searchF').getValue();
				var oFilter = [];
				var filter = new sap.ui.model.Filter("SearchPattern", sap.ui.model.FilterOperator.EQ, searchTerm);
				oFilter.push(filter);
				oTable.bindRows("/UserInfoCollection", null, oFilter);//fetch from configration, not to be hard coded.
		}
		});

		dLayout.createRow(searchFld, goBtn);
		var users = {
				collection: "UserInfoCollection", //fetch from configration, not to be hardcoded.
				propertiesLabel: [oSubRuleMgr._oBundle.getText("SUBSTITUTION_USERS_PICKLIST_LOGONID"),
				                  oSubRuleMgr._oBundle.getText("SUBSTITUTION_USERS_PICKLIST_NAME")],
				properties: ["UniqueName", "DisplayName"]
		};
		if(oTable === undefined){
			oTable = new sap.ui.table.Table(dynamicId + "userTable",{selectionMode: sap.ui.table.SelectionMode.Single});
		}
		oTable.setModel(oSubRuleMgr.getModel());
		//oTable.setTitle( "User Table");
		oTable.setVisibleRowCount(5);
		oTable.bDynamic=true;
		for (var i = 0; i <= users.properties.length-1; i++) {
			oTable.addColumn(
					new sap.ui.table.Column().
					setLabel(new sap.ui.commons.Label({text: oSubRuleMgr._oBundle.getText(users.propertiesLabel[i]),design : sap.ui.commons.LabelDesign.Bold })).
					setTemplate(new sap.ui.commons.TextField({
						editable: false,
						value: {path: users.properties[i]}}))
			);
		}

		var dLayoutCont = new sap.ui.commons.layout.VerticalLayout(dynamicId + "userDialogVLayout", {width:"100%"});
		dLayoutCont.insertContent(dLayout, 0);
		dLayoutCont.insertContent(oTable, 1);
		usersDialog = new sap.ui.commons.Dialog(dynamicId + "usersDialog", {modal: true,
			title : oSubRuleMgr._oBundle.getText("SUBSTIUTION_RULE_SEARCH_FOR_USERS"),//"Search For Users",
			content:[dLayoutCont],
			buttons:[new sap.ui.commons.Button(dynamicId + "usersDialogOKBtn",{text: oSubRuleMgr._oBundle.getText("INBOX_BUTTON_OK_TEXT"),press:function(){
				var table = sap.ui.getCore().byId(dynamicId + "userTable");
				var selIndex = table.getSelectedIndex();
				var rowContext = table.getContextByIndex(selIndex);
				var tabModel = sap.ui.getCore().byId(dynamicId + 'userTable').getModel();
				var selUsesDisplayName = tabModel.getProperty("DisplayName", rowContext);
				if(selUsesDisplayName === null)
					selUsesDisplayName = "";
				var selUserUniqueName = tabModel.getProperty("UniqueName", rowContext);
				var popupValueHelp = oSubRuleMgr._getComponent('popupValueHelp');
				popupValueHelp.setValue(selUsesDisplayName);
				popupValueHelp.data("uniqueName",selUserUniqueName);
				
				/*var uniqueNameData = sap.ui.getCore().byId(dynamicId + "popupValueHelp" + "uniqueNameData");
				if(uniqueNameData === undefined){
					uniqueNameData = new sap.ui.core.CustomData(dynamicId + "popupValueHelp" + "uniqueNameData" , mSettings?)
				}*/
				usersDialog.destroy();
				usersDialog.close();
			}
			})]
		});
	}
	usersDialog.setWidth("400px");
	usersDialog.open();

};
sap.uiext.inbox.SubstitutionRulesManager.prototype.validate = function(
		oSubRuleMgr) {

	var that=this;
	var validationError = false;
	var reason = "";
	var toDate, frmDate;
	var oFormat = sap.ui.core.format.DateFormat.getDateInstance({pattern:"yyyyMMdd"});
	
	var endDateInputValue = oSubRuleMgr._getComponent('popupToDatePicker').getYyyymmdd();
	var startDateInputValue = oSubRuleMgr._getComponent('popupFromDatePicker').getYyyymmdd();
	
	if(endDateInputValue != undefined && endDateInputValue !== ""){
		var endDateYear =  endDateInputValue.substr(0,4);
		var endDateMonth = endDateInputValue.substr(4,2);
		var endDateDate = endDateInputValue.substr(6,8);
		//endDate = oFormat.parse(endDateInputValue); 
		var offset = oSubRuleMgr.substitutionRulesManagerUtils._getTimeZoneOffset();
		if(offset !== undefined){
			offset = offset/(60*1000);
			toDate = new Date(Date.UTC(endDateYear,endDateMonth-1,endDateDate,23,59-offset,59,59))
		}else{
			toDate = oFormat.parse(endDateInputValue); 
			toDate.setHours(23,59,59,59);
		}
	}
	
	if(startDateInputValue != undefined && startDateInputValue !== ""){
		var startDateYear =  startDateInputValue.substr(0,4);
		var startDateMonth = startDateInputValue.substr(4,2);
		var startDateDate = startDateInputValue.substr(6,8);
		var offset = oSubRuleMgr.substitutionRulesManagerUtils._getTimeZoneOffset();
		if(offset !== undefined){
			offset = offset/(60*1000);
			frmDate = new Date(Date.UTC(startDateYear,startDateMonth-1,startDateDate,0,-offset,0,0))
		}else{
			frmDate = oFormat.parse(startDateInputValue);
		}
	}
	
	//var toDate = new Date(oSubRuleMgr._getComponent('popupToDatePicker').getValue());
	//var frmDate = new Date(oSubRuleMgr._getComponent('popupFromDatePicker').getValue());
	var substituteUser= oSubRuleMgr._getComponent('popupValueHelp').getValue();
	
	var prop = oSubRuleMgr._getComponent('popupFromDatePicker').getProperty(
			"required");

	
	if(substituteUser===null || substituteUser==="")
	{
		validationError=true;
		reason= oSubRuleMgr._oBundle.getText("SUBSTITUTION_VALIDATION_MESSAGE_SELECT_SUBSTITUTE");
		
	}
	if (validationError!=true && prop === true) {
		if (toDate === null || frmDate === null || toDate === ""|| frmDate === ""||isNaN(toDate)||isNaN(frmDate)){
			validationError = true;
			reason= oSubRuleMgr._oBundle.getText("SUBSTITUTION_VALIDATION_MESSAGE_ENTER_VALID_DATE_RANGE");
			}
			if(validationError!=true){
				if(toDate<frmDate){
				validationError=true;
				reason=oSubRuleMgr._oBundle.getText("SUBSTITUTION_VALIDATION_MESSAGE_FROM_DATE_AFTER_TODATE");
			}
			}
	}
	if(validationError != true && prop!=true)
	{
		if(toDate!=null && frmDate!=null){
			
			
			if(validationError!= true && toDate<frmDate){
				validationError=true;
				reason=oSubRuleMgr._oBundle.getText("SUBSTITUTION_VALIDATION_MESSAGE_FROM_DATE_AFTER_TODATE");
			}
			
		}
	}
	
	if (validationError === true) {

		oSubRuleMgr.displayMessage(oSubRuleMgr,"error", reason);

	}
	return validationError;

};
sap.uiext.inbox.SubstitutionRulesManager.prototype.populateMessageBar = function(oSubRuleMgr) {

	var dynamicId= oSubRuleMgr.getId() + '--';
	var msgBarContainer = new sap.ui.commons.Toolbar(dynamicId+"msgBarContainer1", {
		visible : false
	});
	var msbBarTypeImg = new sap.ui.commons.Image({
		id : dynamicId+"msbBarTypeImg1",
		text : "",
		decorative : false
	});
	var msbBarTypeMsg = new sap.ui.commons.TextView({
		id : dynamicId+"msbBarTextView1",
		text : ""
	});
	var msbBarCloseImg = new sap.ui.commons.Image({
		id : dynamicId+"msbBarCloseImg1",
		text : "",
		decorative : false,
		tooltip : this._oBundle.getText("INBOX_MSGBAR_CLOSE_TOOLTIP")
	});
	msbBarCloseImg.addStyleClass("sapUiExtInboxToolbarRight");
	msbBarCloseImg.setSrc(this._imgResourcePath
			+ sap.uiext.inbox.InboxConstants.closeImg);
	msbBarCloseImg.attachPress(oSubRuleMgr, this.hideMsgBar);
	msgBarContainer.addItem(msbBarTypeImg);
	msgBarContainer.addItem(msbBarTypeMsg);
	msgBarContainer.addItem(msbBarCloseImg);
	// oSubRuleMgr._getComponent('popupMainMatrixCellMsgBar').addContent(msgBarContainer);
	var cell = oSubRuleMgr._getComponent('popupMainMatrixCellMsgBar');
	cell.addContent(msgBarContainer);
	// oSubRuleMgr._getComponent('popupMainMatrix').rerender();
};

sap.uiext.inbox.SubstitutionRulesManager.prototype.displayMessage = function(oSubRuleMngr, messageType, messageText) {
	var dynamicId= oSubRuleMngr.getId() + '--';
	var msgBarTB = sap.ui.getCore().byId(dynamicId+'msgBarContainer1');
	if (msgBarTB != undefined) {
		msgBarTB.setVisible(true);

		var msgBarText = sap.ui.getCore().byId(dynamicId+'msbBarTextView1');
		msgBarText.setProperty("text", messageText);

		var msgBarTypeImg = sap.ui.getCore().byId(dynamicId+'msbBarTypeImg1');
		msgBarTypeImg.setProperty("src", this._imgResourcePath
				+ sap.uiext.inbox.InboxConstants.messageTypeIcons[messageType]);
		msgBarTypeImg.setTooltip(this._oBundle.getText(sap.uiext.inbox.InboxConstants.messageTypeToolTip[messageType]) + " " + messageText);
		/*
		 * msgBarTypeImg.setSrc( this._imgResourcePath +
		 * sap.uiext.inbox.InboxConstants.messageTypeIcons[messageType]);
		 * msgBarTypeImg.setTooltip(this._oBundle.getText(sap.uiext.inbox.InboxConstants.messageTypeToolTip[messageType]));
		 */

	}
};

sap.uiext.inbox.SubstitutionRulesManager.prototype.hideMsgBar = function(oEvent, oSubMngr) {
	var dynamicId= oSubMngr.getId()+"--";
	// oSubMngr._getComponent('msgBarContainer1').getProperty("visible",false);
	if (oSubMngr === undefined)
		oSubMngr = this;
	var msgBarTB = sap.ui.getCore().byId(dynamicId+'msgBarContainer1');
	if (msgBarTB != undefined) {
		msgBarTB.setVisible(false);
		sap.ui.getCore().byId(dynamicId+'msbBarTextView1').setText("");
		sap.ui.getCore().byId(dynamicId+'msbBarTypeImg1').setSrc("");
	}	
	

};

sap.uiext.inbox.SubstitutionRulesManager.prototype._refreshBindings =  function(itemKey, isActiveRule){
	var dynamicId = itemKey;
	var isSubstituted = "true";
	if (itemKey === this.getId() + '--iamSubstituting') {
			isSubstituted = "false";
	}

	//Here in JavaScript isActiveRule can be undefined, true or false.
	//It will be undefined in all the case where it is being called with just one parameter(itemKey).
	
	//For example in case of deleteSubtitutionRule and createSubtitution we do not pass 'isActiveRule' param.
	if(isActiveRule === undefined){
		 this._refreshBindings(itemKey, true);
		 this._refreshBindings(itemKey, false);
	}
	// Bind Rows for Active RowRepeater 
	else if(isActiveRule){
			var oFilterActive = [];
			var filter1 = new sap.ui.model.Filter("IsSubstituted", sap.ui.model.FilterOperator.EQ, isSubstituted);
			oFilterActive.push(filter1);
			filter1 = new sap.ui.model.Filter("IsActive", sap.ui.model.FilterOperator.EQ, "true");
			oFilterActive.push(filter1);
			var wrapperTemp1 = sap.ui.getCore().byId(dynamicId + 'active' +'--'+ 'rowRepMainMatrixWapperMatrix');
			var oSubstRuleRowRepaterActive = sap.ui.getCore().byId(dynamicId + 'active' +'--'+ 'subsRowRepeater');
			oSubstRuleRowRepaterActive.bindRows(this.sPath, wrapperTemp1, null, oFilterActive);
			oSubstRuleRowRepaterActive.rerender();	
	}else{//Bind Rows for InActive RowRepater
			var oFilterInActive = [];
			var filter2 = new sap.ui.model.Filter("IsSubstituted", sap.ui.model.FilterOperator.EQ, isSubstituted);
			oFilterInActive.push(filter2);
			filter2 = new sap.ui.model.Filter("IsActive", sap.ui.model.FilterOperator.EQ, "false");
			oFilterInActive.push(filter2);
			var wrapperTemp2 = sap.ui.getCore().byId(dynamicId + 'inactive' +'--'+ 'rowRepMainMatrixWapperMatrix');
			var oSubstRuleRowRepaterInActive = sap.ui.getCore().byId(dynamicId + 'inactive' +'--'+ 'subsRowRepeater');
			oSubstRuleRowRepaterInActive.bindRows(this.sPath, wrapperTemp2, null, oFilterInActive);
			oSubstRuleRowRepaterInActive.rerender();
	}
			
};

sap.uiext.inbox.SubstitutionRulesManager.prototype.getSubstitutionRulesManagerUtils =  function(){
	return this.substitutionRulesManagerUtils;
}