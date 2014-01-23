//Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for sap.ushell.services.LogonSystem
 */
(function() {
    "use strict";
    /*
     * global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
     * notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
     * jQuery, sap, sinon, testResultData, testAnnoUrl, testMetaData
     */

    jQuery.sap
            .require("sap.ushell.components.factsheet.tools.ODataUrlTemplating");

    module("sap.ushell.components.factsheet.tools.ODataUrlTemplating", {
        /**
         * This method is called after each test. Add every restoration code
         * here.
         */
        teardown : function() {
            if (jQuery.sap.require.restore) {
                jQuery.sap.require.restore();
            }
            // if (sap.ushell.adapters.demo.LogonSystemAdapter.restore) {
            // sap.ushell.adapters.demo.LogonSystemAdapter.restore();
            // }
            delete sap.ushell.URLParsing;
        }
    });

    test(
            "resolve good data",
            function() {
                var oTempl, oResult, oTestData, i;
                oTempl = sap.ushell.components.factsheet.tools.ODataUrlTemplating;

                ok(oTempl !== undefined, "ODataUrlTemplating loaded");

                // extract hash from url

                oTestData = [
                        {
                            entityTemplateURI : "/sap/opu/odata/sap/CB_MAINTENANCE_ORDER_SRV/MaintenanceOrders('{MaintenanceOrder}')",
                            FunctionalLocation : "4000003",
                            MaintenanceOrder : "4000003",
                            entityURI : "/sap/opu/odata/sap/CB_MAINTENANCE_ORDER_SRV/MaintenanceOrders('4000003')"
                        },
                        {
                            entityTemplateURI : "/sap/opu/odata/sap/CB_CONTRACT_SRV/Contracts(binary'{GUID}')",
                            GUID : "DD102320D87968F1997900300577E931",
                            entityURI : "/sap/opu/odata/sap/CB_CONTRACT_SRV/Contracts(binary'DD102320D87968F1997900300577E931')"
                        },
                        {
                            entityTemplateURI : "/sap/opu/odata/sap/CB_SITE_SRV/WRF3s(SiteCustomer='{SiteCustomer}',ValidityEndDate=datetime'{ValidityEndDate}',ValidityStartDate=datetime'{ValidityStartDate}',SupplyingSite='{SupplyingSite}',MerchandiseCategory='{MerchandiseCategory}')",
                            SiteCustomer : "R300",
                            ValidityEndDate : "9999-12-31T00%3A00%3A00",
                            ValidityStartDate : "2013-09-24T00%3A00%3A00",
                            MerchandiseCategory : "",
                            SupplyingSite : "R100",
                            entityURI : "/sap/opu/odata/sap/CB_SITE_SRV/WRF3s(SiteCustomer='R300',ValidityEndDate=datetime'9999-12-31T00%3A00%3A00',ValidityStartDate=datetime'2013-09-24T00%3A00%3A00',SupplyingSite='R100',MerchandiseCategory='')"
                        },

                ];

               
                // Test good data
                for (i = oTestData.length - 1; i >= 0; i -= 1) {
                    oResult = oTempl.resolve(oTestData[i].entityTemplateURI,
                            oTestData[i]);
                    equal(oResult, oTestData[i].entityURI,
                            "Template resolved: " + oResult);
                }
                
               
            });
    
    test(
            "resolve bad data",
            function() {
                var oTempl, oResult, oBadData, i, testException;
                oTempl = sap.ushell.components.factsheet.tools.ODataUrlTemplating;

                ok(oTempl !== undefined, "ODataUrlTemplating loaded");                
                oBadData = [
                            {
                              entityTemplateURI : "/sap/opu/odata/sap/CB_MAINTENANCE_ORDER_SRV/MaintenanceOrders('{MaintenanceOrder}')",
                              MaintenanceOrders : "4000003",
                              entityURI : "/sap/opu/odata/sap/CB_MAINTENANCE_ORDER_SRV/MaintenanceOrders('4000003')"
                            }
                          ];
                          
                // Test exceptions for bad data
                for (i = oBadData.length - 1; i >= 0; i -= 1) {
                    testException = (function(badData) { return function() {
                        oResult = oTempl.resolve(badData.entityTemplateURI, badData);
                    }})(oBadData[i]);
                    throws(testException, 
                            sap.ushell.components.factsheet.tools.ODataUrlTemplating.ParameterException,
                            "succesfully throwed ParameterException"
                    );
                }
            });
}());
