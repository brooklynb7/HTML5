///////////////
//Testing Part: FormatHelper
///////////////


// require module to be tested
jQuery.sap.require("sap.ca.ui.model.format.FormatHelper");

// Alias
var NumberFormatter = sap.ca.ui.model.format.FormatHelper;

function createOptions(locale, decimals, lazy) {
    var options = {};
    options.locale = locale;
    if (lazy) {
        options.shortDecimals = decimals;
    } else {
        options.decimals = decimals;
    }
    return options;
}


// --------------------------------------------------------------------------------

module("roundNumber");
test("options", function () {
    equal(NumberFormatter.roundNumber(12345.678901), 12345.678901, "roundNumber(12345.678901) == 12345.678901");
    equal(NumberFormatter.roundNumber(12345.678901, {decimals: 2}), 12345.68, "roundNumber(12345.678901, {decimals:2}) == 12345.68");
    equal(NumberFormatter.roundNumber(12345.678901, {decimals: function(){return 1;}}), 12345.7, "roundNumber(12345.678901, {decimals:function(){return 1;}}) == 12345.7");
    equal(NumberFormatter.roundNumber(12345.678901, {rounding: function(x){return Math.ceil(x);}}), 12346, "roundNumber(12345.678901, {rounding:function(x){return Math.ceil(x);}}) == 12346");
    equal(NumberFormatter.roundNumber(12345.678901, {formatStyle:"short", shortDecimals: 1}), 12345.7, "roundNumber(12345.678901, {formatStyle:'short'', shortDecimals: 1}) == 12345.7");
    equal(NumberFormatter.roundNumber(12345.678901, {formatStyle:"short", shortDecimals:function(){return 1;}}), 12345.7, "roundNumber(12345.678901, {formatStyle:'short', shortDecimals:function(){return 1;}}) == 12345.7");
    equal(NumberFormatter.roundNumber(12345.678901, {formatStyle:"short", shortRounding:function(x){return Math.ceil(x);}}), 12346, "roundNumber(12345.678901, {formatStyle:'short', shortRounding:function(x){return Math.ceil(x);}}) == 12346");
});

// --------------------------------------------------------------------------------
module("formatNumber");
test("Invalid input", function () {
    equal(NumberFormatter.formatNumber("hello"), "", 'formatNumber("hello") == ""');
});
test("Separators from locale", function () {
    equal(NumberFormatter.formatNumber(1234.5678, createOptions("en")), "1,234.5678", "formatNumber(1234.5678, {locale:'en'}) == 1,234.5678");
    equal(NumberFormatter.formatNumber(-1234.5678, createOptions("en")), "-1,234.5678", "formatNumber(-1234.5678, {locale:'en'}) == -1,234.5678");
    equal(NumberFormatter.formatNumber(1234.5678, createOptions("fr")), "1\u00A0234,5678", "formatNumber(1234.5678, {locale:'fr'}) == 1 234,5678");
    equal(NumberFormatter.formatNumber(-1234.5678, createOptions("fr")), "-1\u00A0234,5678", "formatNumber(-1234.5678, {locale:'fr'}) == -1 234,5678");
});
test("Separators from current locale", function () {
    var options = NumberFormatter.getFormatOptions();
    var localeData = sap.ui.core.LocaleData.getInstance(options.locale);
    var localeDataInfo = sap.ui.core.format.NumberFormat.getLocaleFormatOptions(localeData);

    var expected = "1" + localeDataInfo.groupingSeparator + "234" + localeDataInfo.decimalSeparator + "5678";
    strictEqual(NumberFormatter.formatNumber(1234.5678), expected, "formatNumber(1234.5678) == " + expected);
});
test("Decimals", function () {
    var options = NumberFormatter.getFormatOptions();
    var localeData = sap.ui.core.LocaleData.getInstance(options.locale);
    var localeDataInfo = sap.ui.core.format.NumberFormat.getLocaleFormatOptions(localeData);

    var expected = "1" + localeDataInfo.groupingSeparator + "234" + localeDataInfo.decimalSeparator + "568";
    strictEqual(NumberFormatter.formatNumber(1234.5678, 3), expected, "formatNumber(1234.5678, 3) == " + expected);

    equal(NumberFormatter.formatNumber(1.2345678901234, createOptions("en")), "1.2345678901234", "formatNumber(1.2345678901234, {locale:'en'}) == 1.2345678901234");
    equal(NumberFormatter.formatNumber(1.2345678901234, createOptions("en", 2)), "1.23", "formatNumber(1.2345678901234, {locale:'en', decimals:2}) == 1.23");
    equal(NumberFormatter.formatNumber(1.2345678901234, createOptions("en", 3)), "1.235", "formatNumber(1.2345678901234, {locale:'en', decimals:3}) == 1.235");
    equal(NumberFormatter.formatNumber(1.2, createOptions("en", 0)), "1", "formatNumber(1.2, {locale:'en', decimals:0}) == 1");
    equal(NumberFormatter.formatNumber(1.5, createOptions("en", 0)), "2", "formatNumber(1.5, {locale:'en', decimals:0}) == 2");
    equal(NumberFormatter.formatNumber(1.7, createOptions("en", 0)), "2", "formatNumber(1.7, {locale:'en', decimals:0}) == 2");
    equal(NumberFormatter.formatNumber(-1.2, createOptions("en", 0)), "-1", "formatNumber(-1.2, {locale:'en', decimals:0}) == -1");
    equal(NumberFormatter.formatNumber(-1.5, createOptions("en", 0)), "-2", "formatNumber(-1.5, {locale:'en', decimals:0}) == -2");
    equal(NumberFormatter.formatNumber(-1.7, createOptions("en", 0)), "-2", "formatNumber(-1.7, {locale:'en', decimals:0}) == -2");
});
test("Functional options.decimals", function () {
    equal(NumberFormatter.formatNumber(1.2345678901234, createOptions("en", function (value) {
        return (Math.abs(value) < 10 ? 5 : 3);
    })), "1.23457", "formatNumber(1.2345678901234, {locale:'en', decimals:function(value){return (Math.abs(value)<10?5:3);}}) == 1.23457");
    equal(NumberFormatter.formatNumber(-1.2345678901234, createOptions("en", function (value) {
        return (Math.abs(value) < 10 ? 5 : 3);
    })), "-1.23457", "formatNumber(-1.2345678901234, {locale:'en', decimals:function(value){return (Math.abs(value)<10?5:3);}}) == -1.23457");
    equal(NumberFormatter.formatNumber(12.345678901234, createOptions("en", function (value) {
        return (Math.abs(value) < 10 ? 5 : 3);
    })), "12.346", "formatNumber(1.2345678901234, {locale:'en', decimals:function(value){return (Math.abs(value)<10?5:3);}}) == 12.346");
    equal(NumberFormatter.formatNumber(-12.345678901234, createOptions("en", function (value) {
        return (Math.abs(value) < 10 ? 5 : 3);
    })), "-12.346", "formatNumber(1.2345678901234, {locale:'en', decimals:function(value){return (Math.abs(value)<10?5:3);}}) == -12.346");
});
test("Preserve server side formatting", function () {
    var options = NumberFormatter.getFormatOptions();
    var localeData = sap.ui.core.LocaleData.getInstance(options.locale);
    var localeDataInfo = sap.ui.core.format.NumberFormat.getLocaleFormatOptions(localeData);

    var expected = "1" + localeDataInfo.groupingSeparator + "234" + localeDataInfo.decimalSeparator + "50";
    strictEqual(NumberFormatter.formatNumber("1234.50"), expected, 'formatNumber("1234.50") == ' + expected);

    expected = "1,234.00";
    strictEqual(NumberFormatter.formatNumber("1234.00", {locale: "en"}), expected, 'formatNumber("1234.00", {locale:"en"}) == ' + expected);
});
// --------------------------------------------------------------------------------
module("getMagnitude");
function dumpMagnitude(mag) {
    return "{ value: " + mag.value.toExponential() + ", suffix: '" + mag.suffix + "' }";
}
test("", function () {
    var expectedMagnitudes =  [ { value: 1, suffix: "" }
        , { value: 1e3, suffix: "Kilo" }
        , { value: 1e6, suffix: "Mega" }
        , { value: 1e9, suffix: "Giga" }
        , { value: 1e12, suffix: "Tera" }
        , { value: 1e15, suffix: "Peta" }
        , { value: 1e18, suffix: "Exa" }
        , { value: 1e21, suffix: "Zetta" }
        , { value: 1e24, suffix: "Yotta" }
    ];
    var testValues = [ 0.9999999999, 1, 1.0000000001 ];

    deepEqual(NumberFormatter.getMagnitude(0), expectedMagnitudes[0], "getMagnitude(0) == " + dumpMagnitude(expectedMagnitudes[0]));
    deepEqual(NumberFormatter.getMagnitude(1), expectedMagnitudes[0], "getMagnitude(1) == " + dumpMagnitude(expectedMagnitudes[0]));
    deepEqual(NumberFormatter.getMagnitude(-1), expectedMagnitudes[0], "getMagnitude(-1) == " + dumpMagnitude(expectedMagnitudes[0]));

    for (var m = 1; m < expectedMagnitudes.length; ++m ) {
        var expectedM = expectedMagnitudes[m];
        for (var v = 0; v < testValues.length; ++v) {
            var testValue =  testValues[v] * expectedM.value;
            var expected = (testValues[v] < 1 ? expectedMagnitudes[m - 1] : expectedM );
            deepEqual(NumberFormatter.getMagnitude(testValue), expected, "getMagnitude(" + testValue + ") == " + dumpMagnitude(expected));
            deepEqual(NumberFormatter.getMagnitude(-testValue), expected, "getMagnitude(-" + testValue + ") == " + dumpMagnitude(expected));
        }
    }
});

// --------------------------------------------------------------------------------

var benchCount = 100000;
var toNumericBench = {}
toNumericBench.run = function(obj) {
    for (var i = 1; i < benchCount; ++i) {
        NumberFormatter.toNumeric(obj);
    }
    return NumberFormatter.toNumeric(obj);
};

var numericObject = {
    valueOf: function () { return 0; },
    toString: function () { return "1"; }
};

var stringNumericObject = {
    toString: function () { return "0"; }
};

module("toNumeric - Non numeric literals");
test("null", function () {
    ok(isNaN(toNumericBench.run(null)), "toNumeric(null) = NaN");
});
test("undefined", function () {
    ok(isNaN(toNumericBench.run(undefined)), "toNumeric(undefined) = NaN");
});
test("true", function () {
    ok(isNaN(toNumericBench.run(true)), "toNumeric(true) = NaN");
});
test("false", function () {
    ok(isNaN(toNumericBench.run(false)), "toNumeric(false) = NaN");
});
test("NaN", function () {
    ok(isNaN(toNumericBench.run(NaN)), "toNumeric(NaN) = NaN");
});
test("Number.NaN", function () {
    ok(isNaN(toNumericBench.run(Number.NaN)), "toNumeric(Number.NaN) = Number.NaN");
});
test("Infinity", function () {
    strictEqual(toNumericBench.run(Infinity), Infinity, "toNumeric(Infinity) = Infinity");
});
test("Number.POSITIVE_INFINITY", function () {
    strictEqual(toNumericBench.run(Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY, "toNumeric(Number.POSITIVE_INFINITY) = Number.POSITIVE_INFINITY");
});
test("Number.NEGATIVE_INFINITY", function () {
    strictEqual(toNumericBench.run(Number.NEGATIVE_INFINITY), Number.NEGATIVE_INFINITY, "toNumeric(Number.NEGATIVE_INFINITY) = Number.NEGATIVE_INFINITY");
});

// --------------------------------------------------------------------------------
module("toNumeric - Numeric literals");
test("Zero", function () {
    strictEqual(toNumericBench.run(0), 0, "toNumeric(0) = 0");
});
test("Positive integer", function () {
    strictEqual(toNumericBench.run(123), 123, "toNumeric(123) = 123");
});
test("Negative integer", function () {
    strictEqual(toNumericBench.run(-567), -567, "toNumeric(-567) = -567");
});
test("Positive floating point number", function () {
    strictEqual(toNumericBench.run(1987654.235), 1987654.235, "toNumeric(1987654.235) = 1987654.235");
});
test("Negative floating point number", function () {
    strictEqual(toNumericBench.run(-1987654.235), -1987654.235, "toNumeric(-1987654.235) = -1987654.235");
});
test("Floating point in scientific notation", function () {
    strictEqual(toNumericBench.run(-478e35), -478e35, "toNumeric(-478e35) = -478e35");
});
test("Hexadecimal number", function () {
    strictEqual(toNumericBench.run(0x4a0), 0x4a0, "toNumeric(0x4a0) = 0x4a0");
});
test("Negative hexadecimal number", function () {
    strictEqual(toNumericBench.run(-0x4a0), -0x4a0, "toNumeric(-0x4a0) = -0x4a0");
});

// --------------------------------------------------------------------------------
module("toNumeric - Numeric string literals");
test("Zero string", function () {
    strictEqual(toNumericBench.run("0"), 0, 'toNumeric("0") = 0');
});
test("Positive integer string", function () {
    strictEqual(toNumericBench.run("  123"), 123, 'toNumeric("  123") = 123');
});
test("Explicit positive integer string", function () {
    strictEqual(toNumericBench.run("+234"), 234, 'toNumeric("+234") = 234');
});
test("Negative integer string", function () {
    strictEqual(toNumericBench.run("-567"), -567, 'toNumeric("-567") = -567');
});
test("Positive floating point number string", function () {
    strictEqual(toNumericBench.run("1987654.235"), 1987654.235, 'toNumeric("1987654.235") = 1987654.235');
});
test("Negative floating point number string", function () {
    strictEqual(toNumericBench.run("-1987654.235"), -1987654.235, 'toNumeric("-1987654.235") = -1987654.235');
});
test("Floating point in scientific notation string", function () {
    strictEqual(toNumericBench.run("-478e+35"), -478e35, 'toNumeric("-478e+35") = -478e35');
});
test("Hexadecimal number string", function () {
    strictEqual(toNumericBench.run(" 0x4a0"), 0x4a0, 'toNumeric(" 0x4a0") = 0x4a0');
});
test("Explicit positive hexadecimal number string", function () {
    strictEqual(toNumericBench.run("+0x4a0"), 0x4a0, 'toNumeric("+0x4a0") = 0x4a0');
});
test("Negative hexadecimal number", function () {
    strictEqual(toNumericBench.run("  -0x4a0"), -0x4a0, 'toNumeric("  -0x4a0") = -0x4a0');
});
test('"hello" string', function () {
    ok(isNaN(toNumericBench.run("hello")), 'toNumeric("hello") = NaN');
});
test("Empty string", function () {
    ok(isNaN(toNumericBench.run("")), 'toNumeric("") = NaN');
});

// --------------------------------------------------------------------------------
module("toNumeric - objects");
test("Empty object", function () {
    ok(isNaN(toNumericBench.run( {} )), 'toNumeric( {} ) = NaN');
});
test("Dummy object", function () {
    ok(isNaN(toNumericBench.run( { a: 0, b: "1"} )), 'toNumeric( { a: 0, b: "1"} ) = NaN');
});
test("Number", function () {
    strictEqual(toNumericBench.run(new Number(3.67)), 3.67, 'toNumeric(new Number(3.67) = 3.67');
});
test("String", function () {
    strictEqual(toNumericBench.run(new String("3.67")), 3.67, 'toNumeric(new String("3.67") = 3.67');
});
test("Numeric object", function () {
    strictEqual(toNumericBench.run(numericObject), 0, "toNumeric(obj) = 0 // obj.valueOf() = 0");
});
test("String numeric object", function () {
    strictEqual(toNumericBench.run(stringNumericObject), 0, 'toNumeric(obj) = 0 // obj.toString() = "0"');
});

// --------------------------------------------------------------------------------
module("toNumeric - arrays");
test("Array", function () {
    ok(isNaN(toNumericBench.run( [] )), "toNumeric( [ ]) = NaN");
});
test("Numeric Array", function () {
    ok(isNaN(toNumericBench.run( [123] )), "toNumeric( [123]) = NaN");
});