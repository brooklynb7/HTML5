jQuery.sap.require("sap.ca.ui.utils.TablePersonalizer");

sap.ui.controller("sap.ca.ui.sample.views.utils.TablePersonalizer", {
    onInit:function () {

        jQuery.sap.registerModulePath('sap.ushell', '/ushell/resources/sap/ushell');
        jQuery.sap.registerModulePath("sap.ushell.shells.sandbox", "/ushell/test-resources/sap/ushell/shells/sandbox");
        jQuery.sap.registerModulePath("sap.ushell.adapters.sandbox", "/ushell/test-resources/sap/ushell/adapters/sandbox");
        jQuery.sap.require("sap.ushell.services.Container");


        sap.ushell.bootstrap("sandbox");
        var oData = {

            rows: [
                {cell1: "a", cell2 : "b", cell3 :"c"},
                {cell1: "a1", cell2 : "b1", cell3 :"c1"},
                {cell1: "a2", cell2 : "b2", cell3 :"c2"},
                {cell1: "a3", cell2 : "b3", cell3 :"c3"},
                {cell1: "a4", cell2 : "b4", cell3 :"c4"}
            ]
        };

        var oModel = new sap.ui.model.json.JSONModel(oData);

        this.getView().setModel(oModel);
        
        var oPersId = {
                container : "AppPersSample2",
                item : "mobiletable",
            };
            var oMobileTable = this.getView().byId("SampleTableMobile");
            var oStartPersButton = this.getView().byId("personalize");

            var oTablePersonalizer = new sap.ca.ui.utils.TablePersonalizer(oMobileTable, oStartPersButton, oPersId);

    },

});
