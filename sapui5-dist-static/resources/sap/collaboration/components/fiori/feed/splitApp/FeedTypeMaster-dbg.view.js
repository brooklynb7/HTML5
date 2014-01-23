/*!
 * @copyright@
 */

/*******************************************************
* FeedTypeMaster View
*
* Is a view that displays the ui for a ui5 page.
* This page will contain a list of Feed Types
* It will be used as a mater page for the ui5 split app
********************************************************/

sap.ui.jsview("sap.collaboration.components.fiori.feed.splitApp.FeedTypeMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf master
	*/ 
	getControllerName : function() {
		return "sap.collaboration.components.fiori.feed.splitApp.FeedTypeMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away.
	* @param {sap.ui.controller} oController The view Controller  
	* It creates a page with a list of feed types.
	* @memberOf master
	*/ 
	createContent : function(oController) {
		
		this.oLangBundle = this.getViewData().langBundle;
		this.sPrefixId  = this.getViewData().controlId;
		
 		return new sap.m.Page(this.sPrefixId + "feedTypePage", {
			title: this.oLangBundle.getText("FEED_MASTER_PAGE_TITLE"),
			content: [
						new sap.m.List(this.sPrefixId + "FeedTypes", 
							{
								//mode: sap.m.ListMode.SingleSelectMaster,
								inset: true,
								items: [
							         	new sap.m.StandardListItem({
							         		title : this.oLangBundle.getText("FRV_DOMAIN_DATA_FEED_TYPES_FOLLOWS"),
											type : sap.m.ListType.Active,
											selected: true,
											press : function(){
												oController.listItemPress("follows");
											}
										}),
										new sap.m.StandardListItem({
											title : this.oLangBundle.getText("FRV_DOMAIN_DATA_FEED_TYPES_COMPANY"),
											type : sap.m.ListType.Active,
											press : function(){
												oController.listItemPress("company");
											}
										}),
										new sap.m.StandardListItem({
											title : this.oLangBundle.getText("FRV_DOMAIN_DATA_FEED_TYPES_GROUP"),
											type : sap.m.ListType.Active,
											press : function(){
												oController.listItemPress("group");
											}
										}),
										new sap.m.StandardListItem({
											title : this.oLangBundle.getText("FRV_DOMAIN_DATA_FEED_TYPES_BO"),
											type : sap.m.ListType.Active,
											press : function(){
												oController.listItemPress("context");
											}
										})
                                     ]})
			]
		});
	}

});