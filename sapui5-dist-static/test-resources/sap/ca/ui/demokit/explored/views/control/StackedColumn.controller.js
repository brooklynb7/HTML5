/*jQuery.sap.require("sap.ca.ui.charts.bar.StackedHorizontal");*/

sap.ui.controller("sap.ca.ui.sample.views.control.StackedColumn", {

    onInit: function () {

        /*
         * Stacked bar chart data
         */
        var oData = {
            data: {
                businessData: [
                    {Region: 'Hamburg', Division: 'H-524-720', Available: 20, Inspection: 30, Blocked: 16 },
                    {Region: 'Hamburg', Division: 'H-524-703', Available: 10, Inspection: 40, Blocked: 56 },
                    {Region: 'Hamburg', Division: 'H-524-723', Available: 21, Inspection: 25, Blocked: 66 },
                    {Region: 'Brandenburg ', Division: '001', Available: 29, Inspection: 60, Blocked: 61 },
                ],
                businessData1: [
                    { plant: "Expense of assembly", Division: 'H-524-720', actual: 10, planned: 34, commitment: 43 },
                    { plant: "Production Machines", Division: 'H-524-703', actual: 23, planned: 34, commitment: 93 },
                    { plant: "Insurence", Division: 'H-524-703', actual: 123, planned: 34, commitment: 49 },
                    { plant: "Internal Materials", Division: '001', actual: 123, planned: 34, commitment: 49 },
                ]
            }
        };

        this._oModel = new sap.ui.model.json.JSONModel();
        this._oModel.setData(oData.data);

        this.getView().setModel(this._oModel);

        var oDataset = new sap.viz.ui5.data.FlattenedDataset({

            dimensions: [
                {
                    axis: 1,
                    name: 'Region',
                    value: "{Region}"

                },

                {
                    axis: 2,
                    name: 'Division',
                    value: "{Division}"

                }
            ],

            measures: [
                {
                    name: 'Available',
                    value: '{Available}'
                },
                {
                    name: 'Inspection',
                    value: '{Inspection}'
                } ,
                {
                    name: 'Blocked',
                    value: '{Blocked}'
                }
            ],

            data: {
                path: "/businessData",
                factory: function () {
                }
            }
        });

        this.byId("scChart").setDataset(oDataset.clone());
        this.byId("sc100Chart").setDataset(oDataset.clone());
        /*
         * Dual Stacked bar chart
         */

        var oDataset1 = new sap.viz.ui5.data.FlattenedDataset({

            dimensions: [
                {
                    axis: 1,
                    name: 'plant',
                    value: "{plant}"
                },
                {
                    axis: 2,
                    name: 'Division',
                    value: "{Division}"

                }
            ],

            measures: [
                {
                    name: 'Commitment',
                    value: '{commitment}',
                    group: 1
                } ,
                {
                    name: 'Actual',
                    value: '{actual}',
                    group: 2
                } ,
                {
                    name: 'Planned',
                    value: '{planned}',
                    group: 2
                } ,
            ],

            data: {
                path: "/businessData1",
                factory: function () {
                }
            }
        });

        this.byId("dscChart").setDataset(oDataset1.clone());
        this.byId("dsc100Chart").setDataset(oDataset1.clone());

        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.STACKED_COLUMN_CHART);
    }

});
