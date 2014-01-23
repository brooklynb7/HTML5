jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");
jQuery.sap.require("sap.ca.ui.model.type.Number");

sap.ui.controller("sap.ca.ui.sample.views.type.Number", {

    onInit:function () {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.NUMBER);

        var model = new sap.ui.model.json.JSONModel({
            Styles:[
                {
                     "Number":123.456
                },
                {
                     "Number":1234.567
                },
                {
                    "Number":123456.789
                },
                {
                     "Number":123456789.012
                },
                {
                    "Number":123456789012.345
                }
            ],
            Decimals:[
                {
                    "Number":123,
                    "Decimals":1
                },
                {
                    "Number":123.4,
                    "Decimals":2
                },
                {
                    "Number":123.456789,
                    "Decimals":3
                }
            ],
            Percents:[
                {
                    "Number":0.123
                },
                {
                    "Number":0.1234
                },
                {
                    "Number":0.123456789
                }
            ],
            Roundings:[
                {
                    "Number":0.9999
                },
                {
                    "Number":1.1277
                },
                {
                    "Number":2.5e-18
                }
            ]});

        this.getView().setModel(model);
    },


    formatNumber:function (oValue, oDecimals) {
        var formatter = sap.ca.ui.model.format.NumberFormat.getInstance({decimals:oDecimals});
        return formatter.format(oValue);
    }
});