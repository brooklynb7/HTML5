/*!
 * @copyright@
 */

/*******************************************************
* Detail View
*
* Is a view that displays the ui for a ui5 page. This page
* will display the JAM Feed Widget
********************************************************/

sap.ui.jsview("sap.collaboration.components.fiori.feed.commons.Detail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf detail
	*/ 
	getControllerName : function() {
		return "sap.collaboration.components.fiori.feed.commons.Detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away.
	* It creates a UI5 page with a scroll container.
	* @param {sap.ui.controller} oController The view Controller 
	* @memberOf detail
	*/ 
	createContent : function(oController) {
		var oLangBundle = this.getViewData().langBundle;
		this.sPrefixId  = this.getViewData().controlId;
		
		this.oDetailPage = new sap.m.Page(this.sPrefixId + "feedDetailsPage",{
			title: oLangBundle.getText("FRV_DOMAIN_DATA_FEED_TYPES_FOLLOWS"),
			enableScrolling: false,
			content: [
						new sap.m.ScrollContainer(this.sPrefixId + "widgetContainer",{
							width: "100%",
							height: "100%",
							horizontal: false,
							vertical: false
						}) 
			]
		});
		
 		return this.oDetailPage;
	}

});