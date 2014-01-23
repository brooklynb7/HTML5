sap.ui.controller("views.sample.chart.tabContainerAndToolBar", {

    /**
     * Initialisation of the view
     */
    onInit : function() {
        var page = this.getView().byId("page");
        this.oCombined = this.byId("fioriCombinedChartInsideToolBar");
        this.oCombined2 = this.byId("fioriCombinedChartInsideToolBar2");
        this.oCombined3 = this.byId("fioriCombinedChartInsideToolBar3");
        this.oCombined4 = this.byId("fioriCombinedChartInsideToolBar4");
        this.oCombined5 = this.byId("fioriCombinedChartInsideToolBar5");


        var oModel1 = this.internalTestModel();
        var oDataset1 = this.internalTestDataset(oModel1);

        this.oCombined.setDataset(oDataset1);

        var oModel2 = this.internalTestModel();
        var oDataset2 = this.internalTestDataset(oModel2);

        this.oCombined2.setDataset(oDataset2);

        var oModel3 = this.internalTestModel();
        var oDataset3 = this.internalTestDataset(oModel3);

        this.oCombined3.setDataset(oDataset3);

        var oModel4 = this.internalTestModel();
        var oDataset4 = this.internalTestDataset(oModel4);

        this.oCombined4.setDataset(oDataset4);

        var oModel5 = this.internalTestModel();
        var oDataset5 = this.internalTestDataset(oModel5);

        this.oCombined5.setDataset(oDataset5);

        this.getView().setModel(oModel1);

    },

    onAfterRendering:   function (oEvent) {

    },

    onPersonalizationPressed: function (oEvent) {
        alert("Personalization button was pressed !");
    },

    onAnyDimensionKeySelected: function (oEvent) {
        alert("user is selecting "+oEvent.getParameter("selectedKey"));
    },

    internalTestDataset:function (oModel) {
        var dataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions:[
                {
                    axis:1,
                    name:'Country',
                    value:"{Country}"
                }
            ],
            measures:[
                {
                    name:'Profit',
                    value:'{profit}'
                },
                {
                    name:'Revenue',
                    value:'{revenue}'
                }
            ],
            data:{
                path:"/businessData"
            }
        });
        if (oModel) {
            dataset.setModel(oModel);
        }
        return dataset;
    },

    internalTestModel:function (oBusinessData, bUseTimeout) {
        if (!oBusinessData) {
            oBusinessData = this.internalTestBusinessData();
        }
        var oModel = new sap.ui.model.json.JSONModel();
        if (bUseTimeout) {
            setTimeout(function () {
                oModel.setData({
                    businessData:oBusinessData
                });
            }, 4000);
        } else {
            oModel.setData({
                businessData:oBusinessData
            });
        }
        return oModel;
    },

    internalTestBusinessData:function () {
        var oBusinessData = [];

        var _randomInt = function (iMaxValue) {
            return Math.floor(Math.random() * iMaxValue);
        };


        while (oBusinessData.length < 100) {
            var element = {
                Country:"Country " + _randomInt(1000),
                revenue:_randomInt(1000),
                profit:_randomInt(200),
                population:_randomInt(1000000)
            };
            oBusinessData.push(element);
        }
        return oBusinessData;
    }

});