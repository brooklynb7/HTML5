jQuery.sap.require("sap.ca.ui.model.type.Date");
jQuery.sap.require("sap.ca.ui.model.type.DateTime");
jQuery.sap.require("sap.ca.ui.model.type.Time");

sap.ui.controller("sap.ca.ui.sample.views.type.Date", {

    onInit : function() {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.FORMAT_DATE);

        var today = new Date();
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        var twoDaysAgo = new Date();
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
        var sixDaysAgo = new Date();
        sixDaysAgo.setDate(sixDaysAgo.getDate() - 6);
        var sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        var yesterdayNight = new Date();
        yesterdayNight.setHours(23, 59, 0, 0);
        yesterdayNight.setDate(yesterdayNight.getDate() - 1);
        
        var thisMorning = new Date(yesterdayNight);
        thisMorning.setHours(0, 1, 0, 0);
        thisMorning.setDate(thisMorning.getDate() + 1);
        
        var utcDesc = thisMorning.getTimezoneOffset() > 0 ? "Yesterday Night" : "This Morning";
        var utcDate = thisMorning.getTimezoneOffset() > 0 ? yesterdayNight : thisMorning;
        
        var model = new sap.ui.model.json.JSONModel(
            {
            	DaysAgo:
            		[
			            {
			                "Name" : "Today",
			                "Date" : today
			            },           
			            {
			                "Name" : "Yesterday",
			                "Date" : yesterday
			            },
			            {
			                "Name" : "2 days ago",
			                "Date" : twoDaysAgo
			            },
			            {
			                "Name" : "6 days ago",
			                "Date" : sixDaysAgo
			            },
			            {
			                "Name" : "7 days ago",
			                "Date" : sevenDaysAgo
			            },
			            {
			                "Name" : "Tomorrow",
			                "Date" : tomorrow
			            }
			        ],
		        UTC:
		        	[
			            {
			                "Name" : utcDesc,
			                "Date" : utcDate
			            }
		            ]
            }
        );

        this.getView().setModel(model);
    },

});