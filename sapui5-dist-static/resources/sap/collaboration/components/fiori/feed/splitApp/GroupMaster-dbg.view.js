/*!
 * @copyright@
 */

/*******************************************************
* GroupMaster View
*
* Is a view that displays the ui for a ui5 page.
* This page will contain a list of JAM groups
* It will be used as a mater page for the ui5 split app
********************************************************/

sap.ui.jsview("sap.collaboration.components.fiori.feed.splitApp.GroupMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf detail
	*/ 
	getControllerName : function() {
		return "sap.collaboration.components.fiori.feed.splitApp.GroupMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away.
	* It creates a UI5 page that has a list. 
	* @param {sap.ui.controller} oController The view Controller 
	* @memberOf detail
	*/ 
	createContent : function(oController) {
		
		this.sPrefixId  = this.getViewData().controlId;
		
		this.groupMasterPage = 
			new sap.m.Page(this.sPrefixId  + "groupPage", {
				title: this.getViewData().groupMasterpageTitle,
				showNavButton : true,
				navButtonPress: oController.onNavButtonTap,
				content: [
				          	new sap.m.List(this.sPrefixId + "groupsList",{inset: true})
				          ]
		});
		
		return this.groupMasterPage;
	}

});