///////////////
//Testing Part: InPlace Edit
///////////////

module("InPlace Edit - Object Create");



test("Object Creation with Id", function () {
    strictEqual(oIPE.getId(), "inplaceedit", "IPE control has ID 'inplaceedit'");
});

test("Data renders properly", function () {
    var $span = jQuery.sap.byId(oIPE.getId()+"--TV");
    ok($span, "InPlaceEdit readonly should be rendered");
});

