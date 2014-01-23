(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.require("sap.ushell.components.factsheet.tools.ODataUrlTemplating");
    sap.ui.jsview("sap.ushell.components.factsheet.views.ThingViewer", {

        getControllerName : function () {
            return "sap.ushell.components.factsheet.views.ThingViewer";
        },
        createContent : function (oController) {
            var sEntityUrl, sAnnotationUrl, sEntityUrlTemplate, oTI, businessParameter, i, parameter, value, oViewData;
            oViewData = this.getViewData();

            jQuery.sap.require("sap.ushell.components.factsheet.factory.ThingInspector");

            // Sample Hash UI2_DEMO_PRODUCT-DisplayFactSheet~6bpO?ProductID=HT-1000
            sEntityUrl = oViewData.entity || oViewData.service;// Old Parameter Name was Service
            if (!sEntityUrl) {
                sEntityUrlTemplate = oViewData.entityTemplateURI || oViewData.template;
                
                if (sEntityUrlTemplate) {
                    // Parameters may be arrays 
                    if (typeof sEntityUrlTemplate !== "string") {
                        sEntityUrlTemplate = sEntityUrlTemplate[0];
                    }
                    //regEx = /{[A-Za-z0-9_]*}/g;
  
                    sEntityUrl = sap.ushell.components.factsheet.tools.ODataUrlTemplating.resolve(sEntityUrlTemplate, oViewData);
                  }

            }
            sAnnotationUrl = oViewData.annotationURI || oViewData.annotation;

            if (typeof sEntityUrl !== "string") {
                sEntityUrl = sEntityUrl[0];
            }
            if (typeof sAnnotationUrl !== "string") {
                sAnnotationUrl = sAnnotationUrl[0];
            }

            //TODO: Replace the 3rd Parameter which was originally for the carousel control with something else. Maybe
            //      a callback function or something???
            oTI = sap.ushell.components.factsheet.factory.ThingViewer(sEntityUrl, sAnnotationUrl, new sap.ui.core.Control());

            //Add min-height
            oTI.addStyleClass("ThingInspector");
            return oTI;
        }
    });
}());
