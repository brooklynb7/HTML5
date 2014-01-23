jQuery.sap.require("sap.ca.ui.charts.ChartPopover");

sap.ui.controller("sap.ca.ui.sample.views.control.BubbleChart", {

    onInit:function () {
        var page = this.getView().byId("pageBubble");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.BUBBLE_CHART);

        var oData = { businessData:[
            {Country:"Canada", City:"Toronto", revenue:1410.87, profit:-141.25, date:1379421492000, label:"Canada Label"},
            {Country:"China", City:"Shanghai", revenue:3338.29, profit:133.82, date:1379422492000, label:"China Label"},
            {Country:"France", City:"Paris", revenue:987.66, profit:348.76, date:1387422592000, label:"France Label"},
            {Country:"Germany", City:"Berlin", revenue:2170.23, profit:417.29, date:1369422492000, label:"Germany Label"},
            {Country:"India", City:"Delhi", revenue:6170.93, profit:517.00, date:1379422492000, label:"India Label"},
            {Country:"Ireland", City:"Galway", revenue:1370.93, profit:167.00, date:1373422492000, label:"IR LAbel"},
            {Country:"United States", City:"Texas", revenue:1005.08, profit:609.16, date:1377422492000, label:"States label"},
            {Country:"United States", City:"NY", revenue:490.87, profit:-141.25, date:1373422492000, label:"US Label"},
            {Country:"Spain", City:"Madrid", revenue:4705.23, profit:217.29, date:1375422492000, label:"Spain Label"},
            {Country:"Spain", City:"Barcelona", revenue:905.08, profit:659.16, date:1374422492000, label:"IN Label"}
        ]};

        this._oModel = new sap.ui.model.json.JSONModel();
        this._oModel.setData(oData);
        this.getView().setModel(this._oModel);

        this.oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions:[
                {axis:1, name:'Country', value:"{Country}"},
                {axis:1, name:'City', value:"{City}"}
            ],
            measures:[
                {group:1, name:'Date', value:{path:'date', formatter:function ($) {
                    return ((new Date(parseInt($)).getTime() - Date.now()) / 1000 / 3600 / 24).toFixed(2);
                }}},
                {group:2, name:'Profit', value:'{profit}'},
                {group:3, name:'Revenue', value:'{revenue}'}
            ],
            data:{
                path:"/businessData"
            }
        });

        this.byId("myChart").setXAxisFormatFunction(jQuery.proxy(this.xAxisFormatter, this));
        this.byId("myChart").setLabelProperty(["label", "revenue"]);
        this.byId("myChart").setDataset(this.oDataset);
        this.byId("myChart").setTitle("Test Bubble Chart");

        this.oPopoverList = new sap.ca.ui.charts.ClusterList();
        var oCustHeader = new sap.m.Bar({
            contentMiddle:[new sap.m.Label({text:"Custom Popover"})],
            contentRight:[new sap.m.Button({icon:"sap-icon://decline",press:jQuery.proxy(this.onClosePopover, this)})
        ]});

        this.oPopover = new sap.ca.ui.charts.ChartPopover({
            modal:false,
            enableScrolling:true,
            verticalScrolling:true,
            horizontalScrolling:false,
            content:[ this.oPopoverList.getControl() ],
            customHeader:oCustHeader

        });

        this.bResetList = true;
    },

    xAxisFormatter:function (v, p) {
        jQuery.sap.require("sap.ui.core.format.DateFormat");
        if (p == this.xAxisFormatString || p == this.aTooltipFormatString[0]) {
            v = v.toFixed(0);
            if (v < 0) {
                return v + " days ago";
            }
            else if (v > 0) {
                return "in " + v + " days";
            }
            else {
                return "today";
            }
        } else {
            return v;
        }
    },

    onClosePopover:function () {
        this.oPopover.close();
        this.bResetList = false;
    },

    pressSampleDataChange:function (oEvent) {
        var oData = {
            businessData:[
                {Country:"Canada",revenue:1410.87,profit:-141.25,population:347890008},
                {Country:"China",revenue:3338.29,profit:133.82,population:1339724852},
                {Country:"France",revenue:987.66,profit:348.76,population:1339724852},
                {Country:"Germany",revenue:2170.23,profit:417.29,population:81799600},
                {Country:"India",revenue:6170.93,profit:517.00,population:1210193424},
                {Country:"United States",revenue:1005.08,profit:609.16,population:313490000},
                {Country:"US",revenue:490.87,profit:-141.25,population:34789000}
            ]
        };

        this._oModel.setData(oData);
    },
    pressLegendButton:function (oEvent) {
        var state = oEvent.getParameters().selected;
        var chart = this.byId("myChart");
        chart.setShowLegend(state);
    }
});
