jQuery.sap.require("sap.ca.ui.charts.ChartToolBar");
jQuery.sap.require("sap.ca.ui.charts.ChartPopover");
jQuery.sap.require("sap.ca.ui.charts.ClusterList");

sap.ui.controller("sap.ca.ui.sample.views.control.HorizontalBarChart", {

  // Define some sample data
  oData1: {
    businessData: [{
      'COUNTRY': "Canada",
      'REVENUE': 410.87,
      'PROFIT': 141.25,
      'POPULATION': 45
    }, {
      'COUNTRY': "China",
      'REVENUE': 338.29,
      'PROFIT': 133.82,
      'POPULATION': 90
    }]
  },

  // Define some sample data
  oData2: {
    businessData: [
      {'COUNTRY': "Canada",       'REVENUE': -410.87,  'PROFIT': 141.25},
      {'COUNTRY': "China",        'REVENUE': 338.29,  'PROFIT': 133.82},
      {'COUNTRY': "France",       'REVENUE': 487.66,  'PROFIT': -348.76},
      {'COUNTRY': "Germany",      'REVENUE': 470.23,  'PROFIT': 217.29},
      {'COUNTRY': "India",        'REVENUE': -170.93,  'PROFIT': 117.00},
      {'COUNTRY': "United States",'REVENUE': 905.08,  'PROFIT': 609.16},
      {'COUNTRY': "Italy",        'REVENUE': 410.87,  'PROFIT': 141.25},
      {'COUNTRY': "Spain",        'REVENUE': 338.29,  'PROFIT': 133.82},
      {'COUNTRY': "Portugal",     'REVENUE': 487.66,  'PROFIT': 348.76},
      {'COUNTRY': "Ireland",      'REVENUE': 470.23,  'PROFIT': 217.29},
      {'COUNTRY': "Scotland",     'REVENUE': 170.93,  'PROFIT': 117.00},
      {'COUNTRY': "Wales",        'REVENUE': 905.08,  'PROFIT': 609.16},
      {'COUNTRY': "England",      'REVENUE': 410.87,  'PROFIT': 141.25},
      {'COUNTRY': "Belgium",      'REVENUE': 338.29,  'PROFIT': 133.82},
      {'COUNTRY': "Andorra",      'REVENUE': 487.66,  'PROFIT': 348.76},
      {'COUNTRY': "Netherlands",  'REVENUE': 470.23,  'PROFIT': 217.29},
      {'COUNTRY': "Poland",       'REVENUE': 170.93,  'PROFIT': 117.00},
      {'COUNTRY': "Danemark",     'REVENUE': 905.08,  'PROFIT': 609.16},
      {'COUNTRY': "Sweden",       'REVENUE': 410.87,  'PROFIT': 141.25},
      {'COUNTRY': "Norway",       'REVENUE': 338.29,  'PROFIT': 133.82},
      {'COUNTRY': "Finland",      'REVENUE': 487.66,  'PROFIT': 348.76},
      {'COUNTRY': "Russia",       'REVENUE': 470.23,  'PROFIT': 217.29},
      {'COUNTRY': "Bularia",      'REVENUE': 170.93,  'PROFIT': 117.00},
      {'COUNTRY': "Romania",      'REVENUE': 905.08,  'PROFIT': 609.16},
      {'COUNTRY': "Alabania",     'REVENUE': 410.87,  'PROFIT': 141.25},
      {'COUNTRY': "Greece",       'REVENUE': 338.29,  'PROFIT': 133.82},
      {'COUNTRY': "Turkey",       'REVENUE': 487.66,  'PROFIT': 348.76},
      {'COUNTRY': "South Africa", 'REVENUE': 470.23,  'PROFIT': 217.29},
      {'COUNTRY': "Australia",    'REVENUE': 170.93,  'PROFIT': 117.00},
      {'COUNTRY': "New Zeland",   'REVENUE': 905.08,  'PROFIT': 609.16},
      {'COUNTRY': "Japan",        'REVENUE': 410.87,  'PROFIT': 141.25},
      {'COUNTRY': "Indonesia",    'REVENUE': 338.29,  'PROFIT': 133.82},
      {'COUNTRY': "Argentina",    'REVENUE': 487.66,  'PROFIT': 348.76},
      {'COUNTRY': "Mexico",       'REVENUE': 470.23,  'PROFIT': 217.29},
      {'COUNTRY': "Brazil",       'REVENUE': 170.93,  'PROFIT': 117.00},
      {'COUNTRY': "Chile",        'REVENUE': 905.08,  'PROFIT': 609.16},
      {'COUNTRY': "Peru",         'REVENUE': 410.87,  'PROFIT': 141.25},
      {'COUNTRY': "Colombia",     'REVENUE': 338.29,  'PROFIT': 133.82},
      {'COUNTRY': "Venezuela",    'REVENUE': 487.66,  'PROFIT': 348.76},
      {'COUNTRY': "Uruguay",      'REVENUE': 470.23,  'PROFIT': 217.29},
      {'COUNTRY': "Honduras",     'REVENUE': 170.93,  'PROFIT': 117.00},
      {'COUNTRY': "Ghana",        'REVENUE': 905.08,  'PROFIT': 609.16},
      {'COUNTRY': "Israel",       'REVENUE': 410.87,  'PROFIT': 141.25},
      {'COUNTRY': "Lybia",        'REVENUE': 338.29,  'PROFIT': 133.82},
      {'COUNTRY': "Algeria",      'REVENUE': 487.66,  'PROFIT': 348.76},
      {'COUNTRY': "Marroco",      'REVENUE': 470.23,  'PROFIT': 217.29},
      {'COUNTRY': "Guinea",       'REVENUE': 170.93,  'PROFIT': 117.00},
      {'COUNTRY': "Iran",         'REVENUE': 905.08,  'PROFIT': 609.16},
      {'COUNTRY': "Irak",         'REVENUE': 410.87,  'PROFIT': 141.25},
      {'COUNTRY': "Egypt",        'REVENUE': 338.29,  'PROFIT': 133.82},
      {'COUNTRY': "Kenya",        'REVENUE': 487.66,  'PROFIT': 348.76},
      {'COUNTRY': "Island",       'REVENUE': 470.23,  'PROFIT': 217.29},
      {'COUNTRY': "Cuba",         'REVENUE': 170.93,  'PROFIT': 117.00},
      {'COUNTRY': "Pakistan",     'REVENUE': 905.08,  'PROFIT': 609.16}
    ]
  },

  // Define a dimension object
  dimensions: new sap.viz.ui5.data.DimensionDefinition({
    axis: 1,
    name: 'Country',
    value: "{COUNTRY}"
  }),

  // Define some measure object
  measures1: new sap.viz.ui5.data.MeasureDefinition('HB_Profit', {
    name: 'Profit',
    value: '{PROFIT}'
  }),
  measures2: new sap.viz.ui5.data.MeasureDefinition('HB_Revenue', {
    name: 'Revenue',
    value: '{REVENUE}'
  }),
  measures3: new sap.viz.ui5.data.MeasureDefinition('HB_Population', {
    name: 'Population',
    value: '{POPULATION}'
  }),

  // Set a JSON Model
  _oModel: new sap.ui.model.json.JSONModel(),

  // Set a Flattened data set object
  _oDataset: new sap.viz.ui5.data.FlattenedDataset(),

  /**
   * Event attached to the button 'Generate New Data'
   * @return {[type]} [description]
   */
  pressSmpleBarButton: function() {
    // Add the population measure
    this._oDataset.addMeasure(this.measures3);

    // Set the Model
    this._oModel.setData(this.oData1);

    // Reset the chart size
    this.chart.reset(true);
  },

  /**
   * Event attached when the legend checkbox status is changed
   * @param {event} oEvent [description]
   */
  pressLegendButton: function(oEvent) {
	  this.chart.setShowLegend(oEvent.getParameters().selected);
  },

  /**
   * Event attached to the button 'OData'
   * @param {event} oEvent [description]
   */
  pressSampleBarODataButton: function(oEvent) {

    var url = "/uilib-sample/proxy/http/fiodevdsp.wdf.sap.corp:8080/com.sap.odata.dynamic.service.provider/odata/CHARTDATA/";
    //var url = "/com.sap.odata.dynamic.service.provider/odata/WBSCOST4/";
    var oModel = new sap.ui.model.odata.ODataModel(url, true);

    // Test that data can be read from DSP
    oModel.read('ChartDataSet', null, null, true, jQuery.proxy(function(oData, oResponse) {

      // Remove the population measure
      this._oDataset.removeMeasure('HB_Population');

      var myData = {
        businessData: oData.results
      };
      // Set the Model
      this._oModel.setData(myData);

      // Reset the chart size
      this.chart.reset(true);

    }, this), function() {
      jQuery.sap.log.error("Read failed");
    });

  },

  /**
   * Event attached when a data point is selected
   * @param {event} oEvent An event object 
   */
  onSelectDataPoint: function(oEvent) {
    var oParam = oEvent.getParameters();
    
    // sap.ui.base.Object.extend.constructor
    var oControl = oParam.control;
    
    // a filled sap.ca.ui.charts.ClusterList object
    var oList = oParam.list;
    
  },
  
  /**
   * Called when a controller is instantiated and its View controls (if available) are already created.
   * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
   */
  onInit: function() {

    var page = this.getView().byId("page");
    util.UiFactory.fillPageHeader(page, this.getView(), util.Title.HORIZONTAL_BAR_CHART);

    this.chart = this.byId("fhbChart");

    // Set the Data set
    this._oDataset.addDimension(this.dimensions);
    this._oDataset.addMeasure(this.measures1);
    this._oDataset.addMeasure(this.measures2);
    this._oDataset.bindData({
      path: "/businessData"
    });

    // Create a Model
    this._oModel.setData(this.oData2);

    // Set the Dataset
    this.chart.setDataset(this._oDataset);

    // Set the Model
    this.chart.setModel(this._oModel);
    
    // Show or not the default graph pop over
    this.chart.setShowPopover(true);
  }
});