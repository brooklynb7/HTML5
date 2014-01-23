sap.ui.controller("AppNavSample2.view.List", {
    oApplication : null,
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.List
*/
	onInit: function() {
    
    },

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Detail
*/
//onBeforeRendering: function() {
//
//},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.List
*/
//	onBeforeRendering: function() {
//
//	},
    
    getRouter: function() {
        return sap.ui.core.UIComponent.getRouterFor(this);
    },
    
    handleDefaultDetailPress : function() {
        this.getRouter().navTo("toDetail");
    },

    handleBtn1Press : function() {
        this.getRouter().navTo("toView1");
    },

    handleBtn2Press : function() {
        this.getRouter().navTo("toView2");
    },

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.List
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.List
*/
//	onExit: function() {
//
//	}

});