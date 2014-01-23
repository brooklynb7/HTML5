//define a root UIComponent which exposes the main view
jQuery.sap.declare("sap.ushell.components.factsheet.Component");
jQuery.sap.require("sap.ui.core.UIComponent");

//new Component
sap.ui.core.UIComponent.extend("factsheet.Component", {

    oMainView : null,

    // use inline declaration instead of component.json to save 1 round trip
    metadata : {
        version : "1.16.4",
        library : "factsheet",
        includes : [ "css/custom.css" ],
        dependencies : {
            libs : [ "sap.m" ],
            components : []
        },
    },

    createContent : function() {
        var oComponentData = this.getComponentData();
        // startup parameters are passed as a property bag as componentData.startupParameters
        var oStartupParameters = ( oComponentData && oComponentData.startupParameters) || {};
        // factsheet component needs 100% height otherwise it does not work
        this.oMainView = sap.ui.view({
            type: sap.ui.core.mvc.ViewType.JS,
            viewName:  "sap.ushell.components.factsheet.views.ThingViewer",
            viewData: oStartupParameters,
            height: "100%"
        }).addStyleClass("ThingViewer");

        /* *StartupParameters* (2)   */
        /* http://localhost:8080/ushell/test-resources/sap/ushell/shells/sandbox/fioriSandbox.html#UI2Fiori2SampleApps-appnavsample?AAA=BBB&DEF=HIJ */
        /* results in   { AAA : [ "BBB"], DEF: ["HIJ"] }  */
//      var oComponentData = this.getComponentData();
//      console.log("app was started with parameters " + JSON.stringify(oComponentData));

//      oModel.setData( this.createStartupParametersData(oComponentData));
//      this.oMainView.setModel(oModel, "startupParameters");

        return this.oMainView;
    },

//  createStartupParametersData : function(oComponentData) {
//  // convert the raw componentData into a model that is consumed by the UI
//  var aParameters = [];
//  if (oComponentData) {
//  for (sKey in oComponentData) {
//  aParameters.push({
//  key : sKey,
//  value : oComponentData[sKey].toString()
//  });
//  }
//  }
//  return {
//  "parameters" : aParameters
//  };
//  },

    exit : function() {
        window.console.log("On Exit of factsheet Component.js called : this.getView().getId()" + this.getId() );
    },

    // this event does not exist !?
    onExit : function() {
        window.console.log("On Exit of factsheet Component.js called : this.getView().getId()" + this.getId() );
    }
});