jQuery.sap.require("sap.ca.ui.CustomerContext");
jQuery.sap.require("sap.ca.ui.message.message");
sap.ui.controller("sap.ca.ui.sample.views.control.CustomerContext", {


    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     */
    onInit : function() {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.CUSTOMER_CONTEXT);

        //look for the ushell in sandbox mode
        try {
            //if the shell is deployed locally you can try the following
           /*
            jQuery.sap.registerModulePath('sap.ushell', '/ushell/resources/sap/ushell');
            jQuery.sap.registerModulePath("sap.ushell.shells.sandbox", "/ushell/test-resources/sap/ushell/shells/sandbox");
            jQuery.sap.registerModulePath("sap.ushell.adapters.sandbox", "/ushell/test-resources/sap/ushell/adapters/sandbox");
            jQuery.sap.require("sap.ushell.services.Container");
            sap.ushell.bootstrap("sandbox");
            */
            jQuery.sap.require("sap.ushell.services.Container");
            sap.ushell.Container.getService("Personalization");
        }
        catch (oError) {
            var oSettings = {
                type : sap.ca.ui.message.Type.ERROR,
                message : "The selected customer won't be persisted since the ushell Personalization service can't be started: " + oError.message
            };
            sap.ca.ui.message.showMessageBox(oSettings);
            this.getView().byId("resetButton").setEnabled(false);
        }

        sap.ui.getCore().attachInitEvent(function() {
            var oComponentContainer = new sap.ui.core.ComponentContainer({
                name : "sap.ca.scfld.md.sample"
            });
            oComponentContainer.placeAt("content");
        });

        var oData = {
            CustomerCollection : [
                { CustomerName:"Becker Berlin", CustomerID: "0000500098", SalesOrganizationName: "IDES", DistributionChannelName: "IDES America", DivisionName: "Local Distributors" },
                { CustomerName:"Clinton Industries", CustomerID: "0000300701", SalesOrganizationName: "AMID", DistributionChannelName: "AMID Europe", DivisionName: "Central shipment" },
                { CustomerName:"JNM Manufacturing", CustomerID: "JPMO002", SalesOrganizationName: "CGU", DistributionChannelName: "CGU Asia", DivisionName: "Local Distributors" },
                { CustomerName:"Jupp Schmitz & Soehne", CustomerID: "0000500060", SalesOrganizationName: "IDES", DistributionChannelName: "IDES Australia", DivisionName: "Central shipment" }
            ]
        };

        this.model = new sap.ui.model.json.JSONModel(oData);

        this.CustomerContext = new sap.ca.ui.CustomerContext({
            customerSelected:jQuery.proxy(this.onCustomerSelected, this),
            personalizationPageName: "SRA021_SD_INV_MON",
            showSalesArea: true,
            path: "/CustomerCollection"
        });

        this.CustomerContext.setModel(this.model);

        this.CustomerContext.select();
    },

    changeInCustomerContext: function (oEvent) {
        this.CustomerContext.change();
    },

    onCustomerSelected: function (oEvent) {

        var oCustomer = oEvent.getParameters();
        var oSettings = {
            type : sap.ca.ui.message.Type.ERROR,
            message : "no customer has been selected for the current context, please select one"
        };

        if (oCustomer.CustomerID) {
            oSettings.message = 'new customer selected: ' + oCustomer.CustomerName;
            oSettings.type = sap.ca.ui.message.Type.SUCCESS;
        }

        sap.ca.ui.message.showMessageBox(oSettings);
    },

    onResetCustomer: function(oEvent) {
        this.CustomerContext.reset();
        var oSettings = {
            type : sap.ca.ui.message.Type.SUCCESS,
            message : "The selected customer has been reset in the shell, please reload for initializing a new selection"
        };
        sap.ca.ui.message.showMessageBox(oSettings);
    }
});