// Copyright (c) 2013 SAP AG, All Rights Reserved

// TODO Where to put "use strict" in UI5 files?

/* global sap */
jQuery.sap.require("AppPersSample2.util.TablePers");

sap.ui.controller("AppPersSample2.App", {
    /**
     * Called when a controller is instantiated and its View controls (if
     * available) are already created. Can be used to modify the View before it
     * is displayed, to bind event handlers and do other one-time
     * initialization.
     */
    onInit : function() {
        var that = this;
        // Dummy model with test data
        var oDummyData = {
            rows : [ {
                cell1 : "Cell 1",
                cell2 : "Cell 2",
                cell3 : "Cell 3",
            }, {
                cell1 : "Cell 4",
                cell2 : "Cell 5",
                cell3 : "Cell 6",
            }, {
                cell1 : "Cell 7",
                cell2 : "Cell 8",
                cell3 : "Cell 9",
            } ]
        };

        var oPersId = {
            container : "AppPersSample2",
            item : "mobiletable",
        };

        var oDummyModel = new sap.ui.model.json.JSONModel(oDummyData);
        this.getView().setModel(oDummyModel);

        // Apply existing personalization for mobile table.
        /* global util */
        var oMobileTable = this.getView().byId("SampleTableMobile");
        var oStartPersButton = this.getView().byId("personalize");
        this.oTablePersonalizer = new util.TablePersonalizer(oMobileTable,
                oStartPersButton, oPersId);
    },

    onExit : function() {
        // Release potentially registered listeners etc.
        // this.oTablePers.destroy();
    },
});