jQuery.sap.require("sap.ca.ui.model.format.AmountFormat");

sap.ui.controller("sap.ca.ui.sample.views.format.Amount", {

    onInit : function() {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.AMOUNT);
        var model = new sap.ui.model.json.JSONModel({
            Parts:[
                {
                    "Name" : "Small Amount",
                    "Amount" : "1234567.899087",
                    "Currency" : "EUR",
                    "currencyDec": "EUR (Decimals = 2)"
                },
                {
                    "Name" : "Large Amount",
                    "Amount" : "1234567.899087",
                    "Currency" : "EUR",
                    "currencyDec": "EUR (Decimals = 2)",
                    "decimals" : 3
                },
                {
                    "Name" : "Large Amount",
                    "Amount" : "1234567.899087",
                    "Currency" : "JPY",
                    "currencyDec": "JPY (Decimals = 0)",
                    "decimals" : 5
                }

            ],
            Parts2:[
                {
                    "Name" : "Small Amount",
                    "Amount" : "562.9908",
                    "Currency" : "EUR"
                },
                {
                    "Name" : "Large Amount",
                    "Amount" : "37.487",
                    "Currency" : "EUR"
                },
                {
                    "Name" : "Large Amount",
                    "Amount" : "1234.56",
                    "Currency" : "JPY"
                }

            ]});

        this.getView().setModel(model);
    },

    formatAmountStandard : function (oValue, sCurrency) {
        var formatter = sap.ca.ui.model.format.AmountFormat.getInstance(sCurrency, {style:"standard"}, "en_US");
        return formatter.formatWithCurrency(oValue, sCurrency);
    }

});