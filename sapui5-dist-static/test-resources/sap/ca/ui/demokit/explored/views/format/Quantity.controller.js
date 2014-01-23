jQuery.sap.require("sap.ca.ui.model.format.QuantityFormat");

sap.ui.controller("sap.ca.ui.sample.views.format.Quantity", {

    onInit : function() {
        var page = this.getView().byId("pageQuantity");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.QUANTITY);

        var model = new sap.ui.model.json.JSONModel({Files:[
            {
                "Name" : "unitCode is PRM (minFractionDigits = 8)",
                "Quantity" : "5000000",
                "Unit" : "PCT",
                "minFractionDigits":"8"
            },
            {
                "Name" : "unitCode is DEG (minFractionDigits = 1) ",
                "Quantity" : "5000000",
                "Unit" : "DEG"
            },
            {
                "Name" : "unitCode is DEG (minFractionDigits = 1) ",
                "Quantity" : "5000000",
                "Unit" : "DEG",
                "minFractionDigits":"2"
            },
            {
                "Name" : "No unit code specified",
                "Quantity" : "5000000"
            }
        ]});

        this.getView().setModel(model);
    },


    formatQuantityShort : function (oValue, sUnitCode) {
        return sap.ca.ui.model.format.QuantityFormat.getInstance(sUnitCode, {style:"short"}, "en").format(oValue);
    },

    formatQuantityShort : function (oValue, sUnitCode) {
        var formatter = sap.ca.ui.model.format.QuantityFormat.getInstance(sUnitCode, {style:"standard"}, "en");
        return formatter.format(oValue);
    }
});