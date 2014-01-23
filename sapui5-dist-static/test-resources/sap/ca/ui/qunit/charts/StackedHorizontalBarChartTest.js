(function () {
	module('sample module', {
		setup : function () {
			var oData = {
					data: {
						businessData: [
						               {Region:'Hamburg', Division:'H-524-720', Available: 20, Inspection: 30, Blocked : 16 },
						               {Region:'Hamburg', Division:'H-524-703', Available: 20, Inspection: 40, Blocked : 16 },
						               {Region:'Hamburg', Division:'H-524-723', Available: 20, Inspection: 10, Blocked : 16 },
						               {Region:'Brandenburg ', Division:'001', Available: 20, Inspection: 40, Blocked : 16 },
						               ],
						               businessData1: [
						                               { plant: "Expense of assembly",  actual:10 , planned: 34, commitment: 43 },  	
						                               { plant: "Production Machines",  actual:23, planned: 34, commitment: 93 },  	
						                               { plant: "Insurence", actual:123, planned: 34, commitment: 49 }, 
						                               { plant: "Internal Materials", actual:123, planned: 34, commitment: 49 },                
						                               ]               
					}
			};


			this._oModel = new sap.ui.model.json.JSONModel();
			this._oModel.setData(oData.data);

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({

				dimensions : [ {
					axis : 1,
					name : 'Country',
					value : "{Region}"

				},

				{
					axis : 1,
					name : 'Product',
					value : "{Division}"

				} ],

				measures : [ {
					name : 'Available',
					value : '{Available}'
				}, {
					name : 'Inspection',
					value : '{Inspection}'
				}, {
					name : 'Blocked',
					value : '{Blocked}'
				} ],

				data : {
					path : "/businessData",
					factory : function() {
					}
				}
			});


			/*
			 * Dual Stacked bar chart
			 */		

			var oDataset1 = new sap.viz.ui5.data.FlattenedDataset({

				dimensions : [ 
				              {
				            	  axis : 1,
				            	  name : 'Plant',
				            	  value : "{plant}"
				              }, 
				              ],

				              measures : [ 
				                          {
				                        	  name : 'Commitment',
				                        	  value : '{commitment}',
				                        	  group: 1
				                          } ,
				                          {
				                        	  name : 'Actual',
				                        	  value : '{actual}',
				                        	  group:2
				                          } ,
				                          {
				                        	  name : 'Planned',
				                        	  value : '{planned}',
				                        	  group:2
				                          } ,
				                          ],

				                          data : {
				                        	  path : "/businessData1",
				                        	  factory : function() {}
				                          }
			});

			//for stacked bar
			this.oStackedChart = new sap.ca.ui.charts.StackedHorizontalBarChart({

				width : "60%",
				height : "450px",
				dataset : oDataset,
				type : 'viz/stacked_bar',
				chartTitle : "QUNIT CHART",
				id : "stackedChart"
			});
			this.oStackedChart.setModel(this._oModel);

			//for dual stacked bar
			this.oStackedChart1 = new sap.ca.ui.charts.StackedHorizontalBarChart({

				width : "60%",
				height : "450px",
				dataset : oDataset1,
				type : 'viz/dual_stacked_bar',
				chartTitle : "QUNIT CHART",
				id : "stackedChart1"
			});
			this.oStackedChart1.setModel(this._oModel);

			this.oStackedChart.placeAt("contentHolder");

		}
	});
	asyncTest('sample test',function () {
		
		var self = this;
		setTimeout(function() {

			ok( !!self.oStackedChart, "Object created and found byId" );
			ok( self.oStackedChart.$().size() > 0, "DOM has some content");
			ok( self.oStackedChart.mProperties.minTouchSize >= "48px", "Bar height check");
			ok( self.oStackedChart.mProperties.showLegend != undefined, " Data legend value check");
			ok( self.oStackedChart.mProperties.showDataLabel != undefined, " Data label value check");
			ok( self.oStackedChart.mProperties.dataLabelFormat  != undefined, " Data label format value check");
			ok( self.oStackedChart.colorPalette != undefined, " color palette check");
			ok( self.oStackedChart.mProperties.type == ("viz/stacked_bar" || "viz/dual_stacked_bar"), " Chart type check");

	
			self.oStackedChart.destroy();
			start();

		},0);
	})
})();