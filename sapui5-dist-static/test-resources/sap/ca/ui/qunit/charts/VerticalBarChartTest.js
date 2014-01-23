/* 
 *  testing for the vertical bar chart control
 */
var chartID = "testID";

module('Vertical Bar Chart', {
  setup: function() {
    // prepare something for all following tests

    var oVBarChart = new sap.ca.ui.charts.VerticalBarChart({
      chartTitle: "testTitle",
      id: chartID
    });

    var oData = {
      data: {
        businessData: [{
          Country: "Canada",
          revenue: 410.87,
          profit: -141.25,
          population: 34789000
        }, {
          Country: "China",
          revenue: 338.29,
          profit: 133.82,
          population: 1339724852
        }, {
          Country: "France",
          revenue: 487.66,
          profit: 348.76,
          population: 65350000
        }, {
          Country: "Germany",
          revenue: 470.23,
          profit: 217.29,
          population: 81799600
        }, {
          Country: "India",
          revenue: 170.93,
          profit: 117.00,
          population: 1210193422
        }, {
          Country: "United States",
          revenue: 905.08,
          profit: 609.16,
          population: 313490000
        }]
      }
    };

    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
      dimensions: [{
        axis: 1,
        name: 'Country',
        value: "{Country}"
      }],
      measures: [{
        name: 'Profit',
        value: '{profit}'
      }, {
        name: 'Revenue',
        value: '{revenue}'
      }],
      data: {
        path: "/businessData"
      }
    });


    var oModel = new sap.ui.model.json.JSONModel();
    oModel.setData(oData);
    sap.ui.getCore().setModel(oModel);

    oVBarChart.placeAt("contentHolder");
    oVBarChart.setDataset(oDataset);
    oVBarChart.setData(oData);
  },
  teardown: function() {
    //oVBarChart.destroy();
    //debugger;
  }
});

/*
 * Test that the vertical bar chart has been created
 */
test("Vertical Bar Chart Creation with Id", function() {
  var oVerticalBarChart = sap.ui.getCore().byId(chartID);

  equal(oVerticalBarChart.getId(), chartID, "The chart is failing to initalise with id: " + chartID);

  alert("test complete");

});