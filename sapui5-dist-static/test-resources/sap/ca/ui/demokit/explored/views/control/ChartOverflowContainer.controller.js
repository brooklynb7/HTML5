sap.ui.controller("sap.ca.ui.sample.views.control.ChartOverflowContainer", {

    onInit : function() {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.CHART_OVERFLOW_CONTAINER);

         var tabBar = this.byId("chartTabBar");
        tabBar.attachSelect(jQuery.proxy(function(oControlEvent) {
                var params = oControlEvent.getParameters();
                var item = params.item;
                var key = params.key;
                this.internalData(item, key);
        }, this));
    },

    // Chart data

    /**
     * Create some random data
     * @return {array} oBusinessData An array of data
     */
    internalBusinessData : function() {
      var oBusinessData = [];

      var _randomInt = function( iMaxValue ) {
        return Math.floor(Math.random() * iMaxValue);
      };

      var _randomNumber = function( iMaxValue ) {
        return (Math.random() * iMaxValue).toFixed(4);
      };

      var size = 6;
      while (oBusinessData.length < size) {
        var day = _randomInt(28);
        var month = _randomInt(12);
        var element = {
          //country : "Country " + _randomInt(1000), needs de-duplicate to use
          revenue : _randomNumber(1000),
          profit : _randomNumber(200),
          population : _randomInt(1000000),
          datetime : this.setRandomDate(oBusinessData)
        };
        oBusinessData.push(element);
      }
      return this.sortByKey(oBusinessData, 'datetime');
    },

    /**
     * Return a random date between 2 dates
     * @param  {date} start A start date
     * @param  {date} end   An end date
     * @return {date}       A random date
     */
    randomDate: function(start, end) {
      var t = start.getTime() + Math.random() * (end.getTime() - start.getTime());
      var d = new Date(t);
      d.setUTCHours(0);
      d.setUTCMinutes(0);
      d.setUTCSeconds(0);
      d.setUTCMilliseconds(0);     
      return d;
    },

    /**
     * Create a datetime
     * @param {array} oBusinessData An array of data
     * @return {date} A random date
     */
    setRandomDate: function(oBusinessData) {
      var nLen = oBusinessData.length;
      var bFound = false;
      var dNewDate;

      while (!bFound) {
        dNewDate = this.randomDate(new Date(2012, 0, 1), new Date());
        for (var i = 0; i < nLen; i++) {
          if (oBusinessData[i].datetime === dNewDate) {
            bFound = true;
            break;
          }
        }
        if (bFound) {
          bFound = false;
        } else {
          bFound = true;
        }
      }
      return dNewDate;
    },

    /**
     * Sort an array by key
     * @param  {array} array An array to sort
     * @param  {string} key  The key to be sorted by
     * @return {array}
     */
    sortByKey: function(array, key) {
      return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];

        if (typeof x == "string") {
          x = x.toLowerCase();
          y = y.toLowerCase();
        }

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    },

    // Create the dimension and measure definition to go with the data
    internalData : function(oControl, oKey) {
      var datasetSettings = {
        dimensions : [{
          axis : 1,
          name : 'Date',
          value : {
            path : "datetime",
            formatter : function( val ) {
              if ( val ) {
                return val.getUTCFullYear() + "-" + (val.getUTCMonth() + 1) + "-" + val.getUTCDate();
              } else {
                return val;
              }
            }
          }
        }],
        measures : [{
          name : 'Profit',
          value : '{profit}'
        }, {
          name : 'Revenue',
          value : '{revenue}'
        }],
      data : {
        path : "/businessData"
      }
      };

	 var oData = {};
    oData["businessData"] = this.internalBusinessData();
    var oModel = new sap.ui.model.json.JSONModel();
    oModel.setData(oData);
    var oDataset = new sap.viz.ui5.data.FlattenedDataset(datasetSettings);
    
    var controlName = null;
    switch (oKey) {
            case "line":
            controlName =  "tabbedLineChart";
            break;
            case "lineOverflow":
            controlName =  "overflowLineChart";
            break;
             case "bar":
            controlName =  "barChart";
            break;
            case "text":
            break;
            default:
            jQuery.sap.log.warning("Unknown key: " + oKey);
            controlName = null;
            break;
    }
    if ( controlName != null) {
    var lineChart = this.byId(controlName);
    lineChart.setModel(oModel);
    lineChart.setDataset(oDataset);
    }
    },

});