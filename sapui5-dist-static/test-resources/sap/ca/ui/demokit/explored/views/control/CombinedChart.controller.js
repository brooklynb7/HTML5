sap.ui.controller("sap.ca.ui.sample.views.control.CombinedChart", {

    onInit:function () {
        var page = this.getView().byId("page");
        this.oCombined = this.byId("fioriCombinedChart");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.COMBINED_CHART);
        var oModel1 = this.internalTestModel();
        var oDataset1 = this.internalTestDataset(oModel1);
        this.oCombined.setData(oModel1);
        this.oCombined.setDataset(oDataset1);

         //Add this line if you want to handle a custom popover (+ showPopover="false in the view")
        //this.oCombined.attachSelectDataPoint(jQuery.proxy(this.openSelectData,this));
    },

    openSelectData:function(){
      //put your custom popover here
    },

    onAfterRendering:function(){
        //var oModel1 = this.internalTestModel();
        //var oDataset1 = this.internalTestDataset(oModel1);
       // this.oCombined.setDatasetAndModel(oDataset1, oModel1)

    },

    onChangeLegend:function(oControlEvent){
        var state = !(this.oCombined.getShowLegend());
        this.oCombined.setShowLegend(state);
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
