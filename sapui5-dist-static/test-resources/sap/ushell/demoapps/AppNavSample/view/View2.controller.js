sap.ui.controller("AppNavSample.view.View2", {
    oApplication : null, 
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Detail
*/
    onInit: function() {
        var sComponentId = sap.ui.core.Component.getOwnerIdFor(this.getView());
        var myComponent = sap.ui.component(sComponentId); 
        if (myComponent.getComponentData().startupParameters) {
            jQuery.sap.log.debug("startup parameters of appnavsample are " + JSON.stringify(myComponent.getComponentData().startupParameters)); 
        }
    },


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Detail
*/
//	onBeforeRendering: function() {
//
//	},

    
    handleBtn1Press : function() {
        this.oApplication.navigate("toView","View1"); 
    },
    
    handleBtn2Press : function() {
        this.oApplication.navigate("toView","Detail"); 
    },
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Detail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Detail
*/
//	onExit: function() {
//
//	}

});