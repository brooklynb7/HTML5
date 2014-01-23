jQuery.sap.require("sap.ca.ui.charts.ChartToolBar");
sap.ui.controller("sap.ca.ui.sample.views.control.ChartToolBar", {


    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     */
    onInit: function () {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.CHART_TOOL_BAR);


        /* vertical bar chart data */
        this.chart1 = this.byId("fioriChart1");
        this.chart2 = this.byId("fioriChart2");
        this.chart3 = this.byId("fioriChart3");
        this.chart4 = this.byId("fioriChart4");
        this.chart5 = this.byId("fioriChart5");
        this.chart6 = this.byId("fioriChart6");
        this.chart7 = this.byId("fioriChart7");
        this.chart8 = this.byId("fioriChart8");
        this.chart9 = this.byId("fioriChart9");

        this._oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [
                {
                    axis: 1,
                    name: 'COUNTRY',
                    value: "{COUNTRY}"

                }
            ],

            measures: [
                {
                    name: 'PROFIT',
                    value: '{PROFIT}'
                },
                {
                    name: 'REVENUE',
                    value: '{REVENUE}'
                }
            ]
        });

        this._oDataset.bindData({
            path: "/businessData"
        });

        // Create a Model
        this._oModel = new sap.ui.model.json.JSONModel({
            businessData: [
                {COUNTRY: "Canada", REVENUE: 410.87, PROFIT: 141.25},
                {COUNTRY: "China", REVENUE: 338.29, PROFIT: 133.82},
                {COUNTRY: "France", REVENUE: 487.66, PROFIT: 348.76},
                {COUNTRY: "Germany", REVENUE: 470.23, PROFIT: 217.29},
                {COUNTRY: "India", REVENUE: 170.93, PROFIT: 117.00},
                {COUNTRY: "United States", REVENUE: 905.08, PROFIT: 609.16},
                {COUNTRY: "Italy", REVENUE: 410.87, PROFIT: 141.25},
                {COUNTRY: "Spain", REVENUE: 338.29, PROFIT: 133.82},
                {COUNTRY: "Portugal", REVENUE: 487.66, PROFIT: 348.76},
                {COUNTRY: "Ireland", REVENUE: 470.23, PROFIT: 217.29},
                {COUNTRY: "Scotland", REVENUE: 170.93, PROFIT: 117.00},
                {COUNTRY: "Wales", REVENUE: 905.08, PROFIT: 609.16},
                {COUNTRY: "England", REVENUE: 410.87, PROFIT: 141.25},
                {COUNTRY: "Belgium", REVENUE: 338.29, PROFIT: 133.82},
                {COUNTRY: "Andorra", REVENUE: 487.66, PROFIT: 348.76},
                {COUNTRY: "Netherlands", REVENUE: 470.23, PROFIT: 217.29},
                {COUNTRY: "Poland", REVENUE: 170.93, PROFIT: 117.00},
                {COUNTRY: "Danemark", REVENUE: 905.08, PROFIT: 609.16},
                {COUNTRY: "Sweden", REVENUE: 410.87, PROFIT: 141.25},
                {COUNTRY: "Norway", REVENUE: 338.29, PROFIT: 133.82},
                {COUNTRY: "Finland", REVENUE: 487.66, PROFIT: 348.76},
                {COUNTRY: "Russia", REVENUE: 470.23, PROFIT: 217.29},
                {COUNTRY: "Bularia", REVENUE: 170.93, PROFIT: 117.00},
                {COUNTRY: "Romania", REVENUE: 905.08, PROFIT: 609.16},
                {COUNTRY: "Alabania", REVENUE: 410.87, PROFIT: 141.25},
                {COUNTRY: "Greece", REVENUE: 338.29, PROFIT: 133.82},
                {COUNTRY: "Turkey", REVENUE: 487.66, PROFIT: 348.76},
                {COUNTRY: "South Africa", REVENUE: 470.23, PROFIT: 217.29},
                {COUNTRY: "Australia", REVENUE: 170.93, PROFIT: 117.00},
                {COUNTRY: "New Zeland", REVENUE: 905.08, PROFIT: 609.16},
                {COUNTRY: "Japan", REVENUE: 410.87, PROFIT: 141.25},
                {COUNTRY: "Indonesia", REVENUE: 338.29, PROFIT: 133.82},
                {COUNTRY: "Argentina", REVENUE: 487.66, PROFIT: 348.76},
                {COUNTRY: "Mexico", REVENUE: 470.23, PROFIT: 217.29},
                {COUNTRY: "Brazil", REVENUE: 170.93, PROFIT: 117.00},
                {COUNTRY: "Chile", REVENUE: 905.08, PROFIT: 609.16},
                {COUNTRY: "Peru", REVENUE: 410.87, PROFIT: 141.25},
                {COUNTRY: "Colombia", REVENUE: 338.29, PROFIT: 133.82},
                {COUNTRY: "Venezuela", REVENUE: 487.66, PROFIT: 348.76},
                {COUNTRY: "Uruguay", REVENUE: 470.23, PROFIT: 217.29},
                {COUNTRY: "Honduras", REVENUE: 170.93, PROFIT: 117.00},
                {COUNTRY: "Ghana", REVENUE: 905.08, PROFIT: 609.16},
                {COUNTRY: "Israel", REVENUE: 410.87, PROFIT: 141.25},
                {COUNTRY: "Lybia", REVENUE: 338.29, PROFIT: 133.82},
                {COUNTRY: "Algeria", REVENUE: 487.66, PROFIT: 348.76},
                {COUNTRY: "Marroco", REVENUE: 470.23, PROFIT: 217.29},
                {COUNTRY: "Guinea", REVENUE: 170.93, PROFIT: 117.00},
                {COUNTRY: "Iran", REVENUE: 905.08, PROFIT: 609.16},
                {COUNTRY: "Irak", REVENUE: 410.87, PROFIT: 141.25},
                {COUNTRY: "Egypt", REVENUE: 338.29, PROFIT: 133.82},
                {COUNTRY: "Kenya", REVENUE: 487.66, PROFIT: 348.76},
                {COUNTRY: "Island", REVENUE: 470.23, PROFIT: 217.29},
                {COUNTRY: "Cuba", REVENUE: 170.93, PROFIT: 117.00},
                {COUNTRY: "Pakistan", REVENUE: 905.08, PROFIT: 609.16}
            ]
        });

        var oData = {
            businessData: [{
                Country: "Canada",
                revenue: 1410.87,
                profit: -141.25,
                date: 1379421492000,
                label:"Canada Label"
            }, {
                Country: "China",
                revenue: 3338.29,
                profit: 133.82,
                date: 1379422492000,
                label:"China Label"
            }, {
                Country: "France",
                revenue: 987.66,
                profit: 348.76,
                date: 1387422592000,
                label:"France Label"
            }, {
                Country: "Germany",
                revenue: 2170.23,
                profit: 417.29,
                date: 1369422492000,
                label:"Germany Label"
            }, {
                Country: "India",
                revenue: 6170.93,
                profit: 517.00,
                date: 1379422492000,
                label:"India Label"
            }, {
                Country: "United States",
                revenue: 1005.08,
                profit: 609.16,
                date: 1377422492000,
                label:"States label"
            },{
                Country: "US",
                revenue: 490.87,
                profit: -141.25,
                date: 1373422492000,
                label:"US Label"
            }, {
                Country: "UK",
                revenue: 1038.29,
                profit: 133.82,
                date: 1379482492000,
                label:"UK Label"
            }, {
                Country: "IReland",
                revenue: 887.66,
                profit: 318.76,
                date: 1369422492000,
                label:"Ireland Label"
            }, {
                Country: "Spain",
                revenue: 4705.23,
                profit: 217.29,
                date: 1375422492000,
                label:"Spain Label"
            }, {
                Country: "IR",
                revenue: 1370.93,
                profit: 167.00,
                date: 1373422492000,
                label:"IR LAbel"
            }, {
                Country: "IN",
                revenue: 905.08,
                profit: 659.16,
                date: 1374422492000,
                label:"IN Label"
            }]
        };

        this._oModelBubble = new sap.ui.model.json.JSONModel();
        this._oModelBubble.setData(oData);


        this._oDatasetBubble = new sap.viz.ui5.data.FlattenedDataset({

            dimensions : [ {
                axis : 1,
                name : 'Country',
                value : "{Country}"
            } ],

            measures : [ {
                group : 1,
                name : 'Date',
                value : {path :'date', formatter : function($) { return (new Date(parseInt($)).getTime() - Date.now())/1000/3600/24; }}
            }, {
                group : 2,
                name : 'Profit',
                value : '{profit}'
            }, {
                group : 3,
                name : 'Revenue',
                value : '{revenue}'
            } ],

            data : {
                path : "bubble>/businessData"
            }

        });

        // Set the Dataset
        this.chart1.setDataset(this._oDataset.clone());
        this.chart2.setDataset(this._oDataset.clone());
        this.chart3.setDataset(this._oDataset.clone());
        this.chart4.setDataset(this._oDataset.clone());
        this.chart5.setDataset(this._oDataset.clone());
        this.chart6.setDataset(this._oDataset.clone());
        this.chart7.setDataset(this._oDataset.clone());
        this.chart8.setDataset(this._oDataset.clone());
        this.chart9.setDataset(this._oDatasetBubble.clone());

        // Set the Model
        this.getView().setModel(this._oModel);
        this.getView().setModel(this._oModelBubble, "bubble");

    },

    onPersonalizationPressed: function (oEvent) {
        alert("Personalization button was pressed !");
    },

    onAnyDimensionKeySelected: function (oEvent) {
        alert("user is selecting " + oEvent.getParameter("selectedKey"));
    }
});