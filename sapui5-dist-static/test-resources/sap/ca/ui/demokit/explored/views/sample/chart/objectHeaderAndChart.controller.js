sap.ui.controller("views.sample.chart.objectHeaderAndChart",  {

    onInit:function () {
        var page = this.getView().byId("page");
        this.oCombined = this.byId("fioriSampleCombinedCHartWithObjectHeader");

        var oModel1 = this.internalTestModel();
        var oDataset1 = this.internalTestDataset(oModel1);
        this.oCombined.setModel(oModel1);
        this.oCombined.setDataset(oDataset1);

        var header = new sap.m.ObjectHeader({
            title : "Turbine K7",
            titleSelectorPress : function (evt) {
                selectTitlePopover.openBy(evt.getParameter("domRef"));
            },
            number : "81.199",
            numberUnit : "€",
            statuses : [
                new sap.m.ObjectStatus({
                    text : "Some Damaged",
                    state : "Error"
                }),
                new sap.m.ObjectStatus({
                    text : "In Stock",
                    state : "Success"
                })
            ],
            attributes : [
                new sap.m.ObjectAttribute({
                    text : "8800 Horsepower"
                }), new sap.m.ObjectAttribute({
                    text : "37 l/hour Usage"
                }), new sap.m.ObjectAttribute({
                    text : "871kp Output"
                }), new sap.m.ObjectAttribute({
                    text : "8 years Duration"
                }), new sap.m.ObjectAttribute({
                    text : "www.sap.com",
                    active : true,
                    press : function () {
                        sap.m.URLHelper.redirect("http://www.sap.com", true);
                    }
                })
            ],
            markFavorite : true,
            markFlagged : true,
            showMarkers : true
        });

        page.insertContent(header, 0);

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
