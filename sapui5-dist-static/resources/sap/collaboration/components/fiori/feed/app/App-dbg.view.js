/*!
 * @copyright@
 */

/*******************************************************
* App View
*
* Is a view that displays the ui for a ui5 none-split app.
* This app will contain a page that will display the JAM
* Feed Widget
********************************************************/

sap.ui.jsview("sap.collaboration.components.fiori.feed.app.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf App
	*/ 
	getControllerName : function() {
		return "sap.collaboration.components.fiori.feed.app.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away.
	* It creates/returns a UI5 app
	* @param {sap.ui.controller} oController The view Controller  
	* @memberOf App
	*/ 
	createContent : function(oController) {
		this.sPrefixId = this.getViewData().controlId;
		this.oApp = new sap.m.App(this.sPrefixId + "app");
		return this.oApp;
	}

});