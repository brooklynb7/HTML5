jQuery.sap.require("sap.ca.ui.charts.ChartToolBar");
jQuery.sap.require("sap.ca.ui.charts.ChartFormatter");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("sap.m.Text");
jQuery.sap.require("sap.m.Button");
jQuery.sap.require("sap.m.Image");

sap.ui.controller("views.sample.chart.chartFormatterSample", {
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

        var today = (new Date()).getTime();
        var hour = 3600 * 1000;
        var day = 24 * hour;
        var oData = {
            businessData: [{
                Country: "Canada",
                revenue: 1410.87,
                profit: -141.25,
//                date: 1379421492000,
                date: today - 5 * day - 16 * hour,
                label:"Canada Label"
            }, {
                Country: "China",
                revenue: 3338.29,
                profit: 133.82,
//                date: 1379422492000,
                date: today - 5 * day - 12 * hour,
                label:"China Label"
            }, {
                Country: "France",
                revenue: 987.66,
                profit: 348.76,
//                date: 1387422592000,
                date: today - 5 * day,
                label:"France Label"
            }, {
                Country: "Germany",
                revenue: 2170.23,
                profit: 417.29,
//                date: 1369422492000,
                date: today - 5 * day - 12 * hour,
                label:"Germany Label"
            }, {
                Country: "India",
                revenue: 6170.93,
                profit: 517.00,
//                date: 1379422492000,
                date: today - 4 * day,
                label:"India Label"
            }, {
                Country: "United States",
                revenue: 1005.08,
                profit: 609.16,
//                date: 1377422492000,
                date: today - 4 * day,
                label:"States label"
            },{
                Country: "US",
                revenue: 490.87,
                profit: -141.25,
//                date: 1373422492000,
                date: today - 3 * day,
                label:"US Label"
            }, {
                Country: "UK",
                revenue: 1038.29,
                profit: 133.82,
//                date: 1379482492000,
                date: today - 2 * day - 7 * hour,
                label:"UK Label"
            }, {
                Country: "IReland",
                revenue: 887.66,
                profit: 318.76,
//                date: 1369422492000,
                date: today - 2 * day - 4 * hour,
                label:"Ireland Label"
            }, {
                Country: "Spain",
                revenue: 4705.23,
                profit: 217.29,
//                date: 1375422492000,
                date: today - 2 * day,
                label:"Spain Label"
            }, {
                Country: "IR",
                revenue: 1370.93,
                profit: 167.00,
//                date: 1373422492000,
                date: today - 1 * day - 3 * hour,
                label:"IR LAbel"
            }, {
                Country: "IN",
                revenue: 905.08,
                profit: 659.16,
//                date: 1374422492000,
                date: today - 1 * day,
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
//                value : {path :'date', formatter : function($) { return (new Date(parseInt($)).getTime() - Date.now())/1000/3600/24; }}
                value : '{date}'
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


        this.chart1.setYAxisLabelFormatter(sap.ca.ui.charts.DefaultFormatterFunction.SHORTNUMBER);
        this.chart1.setDataLabelFormatter([[sap.ca.ui.charts.DefaultFormatterFunction.STANDARDNUMBER,this.noDecimals]]);

        this.chart2.setYAxisLabelFormatter(sap.ca.ui.charts.DefaultFormatterFunction.SHORTNUMBER);
        this.chart2.setDataLabelFormatter([[this.noDecimals,sap.ca.ui.charts.DefaultFormatterFunction.STANDARDNUMBER]]);

        var oImagePersonPlaceholder = new sap.m.Image(this.chart2.getId() + "-personPlaceholderImage");
        oImagePersonPlaceholder = sap.m.ImageHelper.getImageControl(this.chart2.getId() + "-personPlaceholderImage",
            oImagePersonPlaceholder, null ,
            {src : "sap-icon://person-placeholder",
            height : "2.5rem",
            width : "2.5rem",
            size : "2.5rem"});

        var oSubHeader = new sap.m.Bar({
            contentLeft : oImagePersonPlaceholder,
            contentMiddle : [new sap.m.Text({text: "Mike McQuota"})],
            contentRight: [new sap.m.Button({
                icon : "sap-icon://slim-arrow-right",
                press : jQuery.proxy(this._onNavigationHeaderPressed, this)
            })]
        });
        //Creation of a custom sub header in the chart popover
        this.chart2.setPopoverSubHeader(oSubHeader);
        var oFooter = new sap.m.Bar({
            contentRight : [new sap.m.Button({
                icon : "sap-icon://inspection",
                text : sap.ca.ui.utils.resourcebundle.getText("ChartPopover.details"),
                press : jQuery.proxy(this._onDetailsPressed, this)
            })]
        });
        //Creation of a custom footer in the chart popover
        this.chart2.setPopoverFooter(oFooter);


        this.chart3.setYAxisLabelFormatter(this.noDecimals);
        this.chart3.setDataLabelFormatter([[sap.ca.ui.charts.DefaultFormatterFunction.STANDARDNUMBER]]);
        var oList = new sap.m.List({
            items: [
                new sap.m.ActionListItem({
                    text: "Drill-in option 1",
                    tap: jQuery.proxy(this._onListTap, this)
                }),
                new sap.m.ActionListItem({
                    text: "Drill-in option 2",
                    tap: jQuery.proxy(this._onListTap, this)
                }),
                new sap.m.ActionListItem({
                    text: "Drill-in option 3",
                     tap: jQuery.proxy(this._onListTap, this)
                })
            ]
        });
        this.chart3.setPopoverFooter(oList);

        this.chart4.setYAxisLabelFormatter(sap.ca.ui.charts.DefaultFormatterFunction.SHORTNUMBER);
        this.chart4.setDataLabelFormatter([[sap.ca.ui.charts.DefaultFormatterFunction.STANDARDNUMBER]]);


        this.chart5.setYAxisLabelFormatter(sap.ca.ui.charts.DefaultFormatterFunction.SHORTNUMBER);
        this.chart5.setDataLabelFormatter([[sap.ca.ui.charts.DefaultFormatterFunction.STANDARDNUMBER]]);


        this.chart6.setYAxisLabelFormatter(sap.ca.ui.charts.DefaultFormatterFunction.SHORTNUMBER);
        this.chart6.setDataLabelFormatter([[sap.ca.ui.charts.DefaultFormatterFunction.STANDARDNUMBER]]);


        this.chart7.setYAxisLabelFormatter(sap.ca.ui.charts.DefaultFormatterFunction.SHORTNUMBER);
        this.chart7.setDataLabelFormatter([[sap.ca.ui.charts.DefaultFormatterFunction.STANDARDNUMBER]]);


        this.chart8.setYAxisLabelFormatter(sap.ca.ui.charts.DefaultFormatterFunction.SHORTNUMBER);
        this.chart8.setDataLabelFormatter([[sap.ca.ui.charts.DefaultFormatterFunction.STANDARDNUMBER]]);



        this.chart9.setYAxisLabelFormatter(sap.ca.ui.charts.DefaultFormatterFunction.SHORTNUMBER);
        this.chart9.setDataLabelFormatter([[this.noDecimals,this.noDecimals]]);
        this.chart9.setXAxisLabelFormatter(sap.ca.ui.charts.DefaultFormatterFunction.DAYSAGODATE);
        this.chart9.setPlotAreaAxisTooltipFormatter([sap.ca.ui.charts.DefaultFormatterFunction.DAYSAGODATE,this.noDecimals]);
        this.chart9.setPopoverFormatter([[sap.ca.ui.charts.DefaultFormatterFunction.DAYSAGODATE],[sap.ca.ui.charts.DefaultFormatterFunction.SHORTNUMBER],[sap.ca.ui.charts.DefaultFormatterFunction.SHORTNUMBER]])
        var advancedSettings =
            {
                xAxis:{
                    scale:{
                       fixedRange:true,
                       minValue: today - 6 * day,
                       maxValue: today
                    }
                }
            }
        this.chart9.setAdvancedChartSettings(advancedSettings);
        // Set the Model
        this.getView().setModel(this._oModel);
        this.getView().setModel(this._oModelBubble, "bubble");

    },

    noDecimals: function(v){
        jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");
        var numberFormatter = sap.ca.ui.model.format.NumberFormat.getInstance({style: 'Standard', decimals:0});
        return numberFormatter.format(v);
    },

    onPersonalizationPressed: function (oEvent) {
        alert("Personalization button was pressed !");
    },

    onAnyDimensionKeySelected: function (oEvent) {
        alert("user is selecting " + oEvent.getParameter("selectedKey"));
    },

    _onDetailsPressed: function (oEvent) {
        sap.m.MessageToast.show("Detail button was pressed");
    },

    _onNavigationHeaderPressed: function (oEvent) {
        sap.m.MessageToast.show("Navigation button was pressed");
    },

    _onListTap: function (oEvent) {
        sap.m.MessageToast.show("List item was pressed");
    }
});





