///////////////
//Testing Part: Notes
///////////////
var NOTES_ID = "CA_VIEW_NOTES--NOTES";

module("Notes - Object Create");


function getComment (sText) {
    var iRandomNumber = Math.floor(Math.random()*sap.ui.core.IconPool.getIconNames().length);
        var sRandomIconName = sap.ui.core.IconPool.getIconNames()[iRandomNumber];
    var oComment = {
        sender: "Sender Name",
        timestamp: Date(),
        text:sText,
        icon:sap.ui.core.IconPool.getIconURI(sRandomIconName),
        info: "Approved"
    };
    return oComment;
}

function item(index) {
    var $ul = jQuery("#notes-listUl");
    var $Item = $ul.children(":eq(" + index + ")");
    var bSeeMore = $Item.hasClass("sapCaUiExpansibleFeedListItemSeeMore");
    var bSeeLess = $Item.hasClass("sapCaUiExpansibleFeedListItemSeeLess");
    return {
        showsSeeMore: bSeeMore,
        showsSeeLess: bSeeLess,
        ref: $Item
    };
}


test("Object Id", function () {
    strictEqual(oNotes.getId(), "notes", "Notes have ID 'notes'");
});

test("Data renders properly", function () {
    var $ul = jQuery("#notes-listUl");
    ok(jQuery.sap.domById("notes"), "Notes list should be rendered");
    equal($ul.length, 1, "Notes list should have its list rendered");
    equal($ul.children().length, 4, "Notes should have four items rendered");
});

asyncTest("Notes input", function () {
    var $div = jQuery("#notes-noteInput");
    equal($div.length, 0, "NoteInput should be rendered");
    oNotes.setShowNoteInput(true);
    window.setTimeout(function(){
        var $div = jQuery("#notes-noteInput");
        equal($div.length, 1, "NoteInput should NOT be rendered");

        start();
    }, 0);

});

asyncTest("ExpansibleFeedListItem", function () {
    equal(item(0).showsSeeMore, true, "First Item Should have See more visible");
    equal(item(1).showsSeeMore, false, "Second Item Should NOT have See more visible");
    oNotes.getItems()[0]._oSeeMoreLink.firePress();
    equal(item(0).showsSeeLess, true, "First Item Should show See less");
    equal(oNotes.getItems()[0].$().find("#"+oNotes.getItems()[0].getId()+"-text").get(0).style.height, "auto", "Height should be auto now, meaning that the element has been expanded");
    start();
});


module("Notes - input tests");

test("Notes input check init value", function () {
    var $div = jQuery("#__area0-inner");
    equal($div.text(), "", "NoteInput field should be empty");
});

test("Notes input check input value", function () {
    oNotes._oTextArea.setValue(sLongText);
    equal(oNotes._oTextArea.getValue().length, 1000, "NoteInput has the same value as assigned");
});

asyncTest("Notes input check add button", function () {
    var $addButton = jQuery("#__button0");

    oNotes._oTextArea.setValue(sLongText);
    equal(oNotes._oTextArea.getValue().length, 1000, "NoteInput has the value before click on Add button");

    $addButton.trigger('tap');

    window.setTimeout(function(){
        equal(oNotes._oTextArea.getValue().length, 0, "NoteInput has empty string after click on Add button");
        start();
    }, 0);
});

asyncTest("Object Creation and Destroy with Id", function () {

    var testID = "NOTES1", 
        oNotes = new sap.ca.ui.Notes(testID, {}),
        oNotes2;

    strictEqual(oNotes.getId(), testID, "Notes has ID: " + testID);
    oNotes.placeAt("contentHolder");


    setTimeout(function() {

        // find just created object byId
        oNotes2 = new sap.ui.getCore().byId(testID);
        ok( !!oNotes2, "Object created and found byId" );
        ok( oNotes2.$().size() > 0, "DOM has some content")

        // Destroy object
        oNotes2.destroy();

        ok( oNotes2.$().size() == 0, "DOM content destroyed")

        // try to find destroyed object
        setTimeout(function() {

            var oNotes3 = new sap.ca.ui.Notes(testID);
            ok(oNotes3, "UI5 Object still can be found");
            ok(oNotes3.$().size() == 0, "But DOM content is still destroyed")

            start();
        }, 0);
    }, 0);

    test("textMaxLength property test", function () {
        equal(oNotes.getTextMaxLength(), 1000, "Check default value is 1000");
        
        oNotes.setTextMaxLength(250);
        oNotes._oTextArea.setValue(sLongText);
        equal(oNotes._oTextArea.getValue().length, 250, "NoteInput has the same value as assigned");
    });

});
