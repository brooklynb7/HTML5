///////////////
//Testing Part: Hierarchical Select Dialog
///////////////
var HIERARCHY_SELECT_DIALOG_ID = "CA_VIEW_HIERARCHYSELECTDIALOG--HIERARCHYSELECTDIALOG";

module("HierarchicalSelectDialog - Properties tests");

test("HierarchicalSelectDialog - Creation ", function () {
    var oHierarchicalSelectDialog = new sap.ca.ui.HierarchicalSelectDialog({id : HIERARCHY_SELECT_DIALOG_ID});
    notEqual(oHierarchicalSelectDialog, undefined, "The HierarchicalSelectDialog control should exist");
    strictEqual(oHierarchicalSelectDialog.getId(), HIERARCHY_SELECT_DIALOG_ID, "The HierarchicalSelectDialogItem should have ID = " + HIERARCHY_SELECT_DIALOG_ID);
});

module("HierarchicalSelectDialog - Events tests");

// Use the search field
asyncTest("HierarchicalSelectDialog - Search", function () {
    expect(6);

    var core = sap.ui.getCore();
    var oButton = core.byId("ButtonId");
    // Open the Dialog
    oButton.fireTap();

    // asserts in 300ms
    setTimeout(function() {

        ok( true, "Passed and ready to resume!" );

        // Check visibility
        equals(jQuery("#__dialog0").css("visibility"), "visible", "The HierarchicalSelectDialog should be visible after opening");

        setTimeout(function() {
            // Fill The search field and check that the filter works
            var oSearchField = core.byId("p0-searchfield");

            var bEventHandlerCalled = false;
            var handler = function(oControlEvent){
                bEventHandlerCalled = true;
                // Check The search value
                equals(oControlEvent.getParameter("newValue"), "third", "Value of livechange event:");
                oSearchField.detachSearch(handler);
            };
            oSearchField.attachLiveChange(handler);

            // simulate user value "third"
            var aKeys = ["t", "h", "i", "r", "d"];
            for(var i=0; i<aKeys.length; i++){
                sap.ui.test.qunit.triggerCharacterInput(oSearchField.getFocusDomRef(), aKeys[i]);
                sap.ui.test.qunit.triggerKeyEvent("keyup", oSearchField.getFocusDomRef(), aKeys[i]);
            }

            oSearchField.setValue("third");
            oSearchField.fireLiveChange({newValue: oSearchField.getValue()});

            oSearchField.detachLiveChange(handler);
            ok(bEventHandlerCalled, "LiveChange handler called.");

            setTimeout(function() {

                ok( true, "Passed and ready to resume 2!" );
                var oLine = sap.ui.getCore().byId("__item0-p0list-0");
                strictEqual(oLine.getTitle(), "WorkItem_3", "The result of 'third' search should be 'the WorkItem_3'");
                start();
            }, 500);
        }, 500);
    }, 500)
});

// Navigate to the last child.
asyncTest("HierarchicalSelectDialog - Navigate", function () {
    expect(13);

    var core = sap.ui.getCore();
    var oButton = core.byId("ButtonId");
    // Open the Dialog
    oButton.fireTap();

    // asserts in 500ms
    setTimeout(function() {
        ok( true, "Passed and ready to resume!" );

        var oSearchField = core.byId("p0-searchfield");
        oSearchField.setValue("");
        oSearchField.fireLiveChange({newValue: oSearchField.getValue()});

        // Check Title value
        var oTitleText = core.byId("p0-title").getText();
        equals(oTitleText,"Work Items","The Navigation title should be 'Work Items' now");

        // Navigate using the first item.
        var oItem = core.byId("__item0-p0list-0");
        oItem.firePress();

        // asserts in 500ms
        setTimeout(function() {
            ok( true, "Passed and ready to resume 2!" );

            // Check Title value
            var oTitleText = core.byId("p1-title").getText();
            equals(oTitleText,"WorkItem_1","The Navigation title should be 'WorkItem_1' now");

            //Check Page 1 Enabled
            var oHiddenPages = document.getElementsByClassName("sapMNavItem sapMPage sapMPageBgStandard sapMPageWithHeader sapMPageWithSubHeader sapMNavItemHidden");
            equals(oHiddenPages[0].id,"p0","Page 0 should be disabled now");

            // Navigate using the first sub-item.
            var oItem = core.byId("__item2-p1list-0");
            oItem.firePress();

            // asserts in 500ms
            setTimeout(function() {
                ok( true, "Passed and ready to resume 3!" );

                // Check Title value
                var oTitleText = core.byId("p2-title").getText();
                equals(oTitleText,"WI-1-Item-1","The Navigation title text should be 'WI-1-Item-1' now");

                // Check only page 2 is visible
                var oHiddenPages = document.getElementsByClassName("sapMNavItem sapMPage sapMPageBgStandard sapMPageWithHeader sapMPageWithSubHeader sapMNavItemHidden");
                equals(oHiddenPages[0].id,"p0","Page 0 should be disabled now");
                equals(oHiddenPages[1].id,"p1","Page 1 should be disabled now");

                // Navigate using the first sub-sub-item.
                var oItem = core.byId("__item4-p2list-0");
                oItem.firePress();

                // asserts in 500ms
                setTimeout(function() {
                    ok( true, "Passed and ready to resume 4!" );

                    // Check that Box is closed
                    // Destroy object
                    var oDialog = sap.ui.getCore().byId("__dialog0");
                    oDialog.destroy();

                    ok( oDialog.$().size() == 0, "DOM content destroyed");

                    // try to find destroyed object
                    setTimeout(function() {

                        var oDialog2 = new sap.ca.ui.HierarchicalSelectDialog("__dialog0");
                        ok(oDialog2, "UI5 Object still can be found");
                        ok(oDialog2.$().size() == 0, "But DOM content is still destroyed");

                        start();
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 500);
});
