///////////////
//Testing Part: AmountFormat
///////////////
// require module to be tested
jQuery.sap.require("sap.ca.ui.model.format.AmountFormat");
// --------------------------------------------------------------------------------
module("AmountFormat");
// --------------------------------------------------------------------------------
module("AmountFormatter.formatNumber");
test("Default options input", function () {
    var formatter = sap.ca.ui.model.format.AmountFormat.getInstance();
    equal(formatter.format(1234.567), "1,234.57", "EUR.formatNumber(1234.567) == 1,234.57");
});
test("Invalid input", function () {
    var formatter = sap.ca.ui.model.format.AmountFormat.getInstance("EUR",{style:"standard"});
    equal(formatter.format("hello"), "", 'EUR.formatNumber("hello") == ""');
    equal(formatter.format(null), "", 'EUR.formatNumber(null) == ""');
    equal(formatter.format(), "", 'EUR.formatNumber() == ""');
});
test("Standard currency", function () {
    var formatter = sap.ca.ui.model.format.AmountFormat.getInstance("EUR", {style:"standard"}, "en");
    equal(formatter.format(1234.567), "1,234.57", "EUR.formatNumber(1234.567) == 1,234.57");
});
test("Currency with non-default decimals", function () {
    var formatter = sap.ca.ui.model.format.AmountFormat.getInstance("JPY", {style:"standard"}, "en");
    equal(formatter.format(1234.567), "1,235", "JPY.formatNumber(1234.567) == 1,235");
});

test("Decimals overload", function () {
    var formatter = sap.ca.ui.model.format.AmountFormat.getInstance("EUR", {decimals:3}, "en");
    equal(formatter.format(1234.567), "1,234.567", "EUR.formatNumber(1234.567, {decimals:3}) == 1,234.567");
});
// --------------------------------------------------------------------------------
module("AmountFormatter.short style");
test("Standard currency", function () {
    var formatter = sap.ca.ui.model.format.AmountFormat.getInstance("EUR", {style:"short"}, "en");
    equal(formatter.format(123.456), "123.46", "EUR.formatNumber(123.456, {style:short}) == 123.46");
    equal(formatter.format(123456.789), "123K", "EUR.formatNumber(123456.789, {style:short}) == 123K");
    equal(formatter.format(1234567.89), "1.2M", "EUR.formatNumber(1234567.89, {style:short}) == 1.2M");
});
test("Currency with non-default decimals", function () {
    var formatter = sap.ca.ui.model.format.AmountFormat.getInstance("JPY", {style:"short"}, "en");
    equal(formatter.format(123.456), "123", "JPY.formatNumber(123.456, {style:short}) == 123");
    equal(formatter.format(123456.789), "123K", "JPY.formatNumber(123456.789, {style:short}) == 123K");
    equal(formatter.format(1234567.89), "1.2M", "JPY.formatNumber(1234567.89, {style:short}) == 1.2M");
});
test("Decimals overload", function () {
    var formatter = sap.ca.ui.model.format.AmountFormat.getInstance("EUR", {style:"short", decimals:0},"en");
    equal(formatter.format(123.456), "123", "EUR.formatNumber(123.456, {style:short, decimals:0}}) == 123");
    equal(formatter.format(1234567.89), "1.2M", "EUR.formatNumber(1234567.89, {style:short, decimals:0}) == 1.2M");
});
test("Short decimals overload", function () {
    var formatter = sap.ca.ui.model.format.AmountFormat.getInstance("EUR", {style:"short", shortDecimals:3}, "en");
    equal(formatter.format(123.4567), "123.46", "EUR.formatNumber(123.4567, {style:short, shortDecimals:3}) == 123.46");
    equal(formatter.format(999.999), "1.000K", "EUR.formatNumber(999.999, {style:short, shortDecimals:3}) == 1.000K");
    equal(formatter.format(1234.567), "1.235K", "EUR.formatNumber(1234.567, {style:short, shortDecimals:3}) == 1.235K");
    equal(formatter.format(1234567), "1.235M", "EUR.formatNumber(1234567, {style:short, shortDecimals:3}) == 1.235M");
});
test("Decimals and short decimals overload", function () {
    var formatter = sap.ca.ui.model.format.AmountFormat.getInstance("EUR", {style:"short", decimals:0, shortDecimals:3}, "en");
    equal(formatter.format(123.4567), "123", "EUR.formatNumber(123.4567, {style:short, decimals:0, shortDecimals:3}) == 123");
    equal(formatter.format(999.999), "1.000K", "EUR.formatNumber(999.999, {style:short, decimals:0,shortDecimals:3}) == 1.000K");
    equal(formatter.format(1234.567), "1.235K", "EUR.formatNumber(1234.567, {style:short, decimals:0, shortDecimals:3}) == 1.235K");
});

test("FormatAmountStandardWithCurrency", function () {
    sap.ui.getCore().getConfiguration().setLanguage("en");
    equal(sap.ca.ui.model.format.AmountFormat.FormatAmountStandardWithCurrency(123.45, "EUR"), "EUR 123.45", "In en, 123.45 EUR == EUR 123.45");
    sap.ui.getCore().getConfiguration().setLanguage("fr");
    equal(sap.ca.ui.model.format.AmountFormat.FormatAmountStandardWithCurrency(123.45, "EUR"), "123,45"+"\u00a0"+"EUR", "In fr, 123.45 EUR == 123,45 EUR");
    sap.ui.getCore().getConfiguration().setLanguage("br");
    equal(sap.ca.ui.model.format.AmountFormat.FormatAmountStandardWithCurrency(123.45, "EUR"), "EUR"+"\u00a0"+"123,45", "In br, 123.45 EUR == EUR 123,45");
});