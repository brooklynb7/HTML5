///////////////
//Testing Part: NumberFormat
///////////////


// require module to be tested
jQuery.sap.require("sap.ca.ui.model.format.DateFormat");
jQuery.sap.require("sap.ca.ui.model.type.Date");
jQuery.sap.require("sap.ca.ui.model.type.DateTime");
jQuery.sap.require("sap.ca.ui.model.type.Time");
jQuery.sap.require("sap.ca.ui.model.format.FormatHelper");

// Formatter Aliases
var daysAgoDateFormatter = sap.ca.ui.model.format.DateFormat.getDateInstance({style: "daysAgo"});
var mediumDateFormatter = sap.ca.ui.model.format.DateFormat.getDateInstance({style: "medium"});
var mediumDateTimeFormatter = sap.ca.ui.model.format.DateFormat.getDateTimeInstance({style: "medium"});
var mediumSapUiDateFormatter = sap.ui.core.format.DateFormat.getDateInstance({style: "medium"});

var shortSapUiDateFormatter = sap.ui.core.format.DateFormat.getDateInstance({style: "short"});

var mediumDateTimeType = new sap.ca.ui.model.type.DateTime();
mediumDateTimeType.setFormatOptions({style: "medium"});

var mediumUTCDateTimeType = new sap.ca.ui.model.type.DateTime();
mediumUTCDateTimeType.setFormatOptions({style: "medium", UTC: true});


var today = new Date();
var inTwoHours = new Date();
inTwoHours.setHours(inTwoHours.getHours() + 2);
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


var testDaysAgo =  [ 
                     { date: today, dateVariableName: "today", expectedResult: sap.ca.ui.utils.resourcebundle.getText("DateFormatter.Today") },
                     { date: inTwoHours, dateVariableName: "inTwoHours", expectedResult: sap.ca.ui.utils.resourcebundle.getText("DateFormatter.Today") },
                     { date: yesterday, dateVariableName: "yesterday", expectedResult: sap.ca.ui.utils.resourcebundle.getText("DateFormatter.Yesterday") },
                     { date: twoDaysAgo, dateVariableName: "twoDaysAgo", expectedResult: sap.ca.ui.utils.resourcebundle.getText("DateFormatter.DaysAgo", [ 2 ]) },
                     { date: sixDaysAgo, dateVariableName: "sixDaysAgo", expectedResult: sap.ca.ui.utils.resourcebundle.getText("DateFormatter.DaysAgo", [ 6 ]) },
                     { date: sevenDaysAgo, dateVariableName: "sevenDaysAgo", expectedResult: mediumDateFormatter.format(sevenDaysAgo) },
                     { date: tomorrow, dateVariableName: "tomorrow", expectedResult: mediumDateFormatter.format(tomorrow) }
];


// --------------------------------------------------------------------------------
module("DateFormat");

test("DateFormat daysAgo formats", function () {
    for (var i = 0; i < testDaysAgo.length; ++i) {
        var testData = testDaysAgo[i];
        equal(daysAgoDateFormatter.format(testData.date), testData.expectedResult, 'daysAgoDateFormatter.format(' + testData.dateVariableName + ') == ' + testData.expectedResult);
    }
});

test("DateFormat format of a datajs date", function () {
    // Test that date at datajs format will be formated as a date in Date, DateTime and Time types
    var todayDatajsStr = "\\\/Date(" + today.valueOf() + ")\\\/";
    expectedResult = mediumDateTimeFormatter.format(today);
    equal(mediumDateTimeFormatter.format(todayDatajsStr), expectedResult, 'mediumDateTimeFormatter.format("' + todayDatajsStr + '") == ' + expectedResult);
});

test("DateFormat parse", function () {
	// Test parse method of DateFormat for a Date
	var todayStr = mediumDateFormatter.format(today);
	var result = mediumDateFormatter.parse(todayStr).toString();
	var expected = mediumSapUiDateFormatter.parse(todayStr).toString();
    equal(result, expected, 'mediumDateFormatter.format("' + todayStr + '") == ' + expected);

    // "Today" will not be recognized as a date by the parse method
	var todayDaysAgoStr = daysAgoDateFormatter.format(today);
	result = daysAgoDateFormatter.parse(todayDaysAgoStr);
	expected = mediumSapUiDateFormatter.parse(todayDaysAgoStr);
    equal(result, expected, 'daysAgoDateFormatter.format("' + todayDaysAgoStr + '") == ' + expected);
});

test("DateFormat DateTime type format", function () {
	var expectedResult = mediumDateTimeFormatter.format(today);
    equal(mediumDateTimeType.formatValue(today, "string"), expectedResult, 'mediumDateTimeType.formatValue(today, "string") == ' + expectedResult);

	expectedResult = mediumDateTimeFormatter.format(today, true);
    equal(mediumUTCDateTimeType.formatValue(today, "string"), expectedResult, 'mediumUTCDateTimeType.formatValue(today, "string") == ' + expectedResult);

});


