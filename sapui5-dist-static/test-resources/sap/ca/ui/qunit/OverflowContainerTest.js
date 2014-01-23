//////////////////////////////////////
//  Testing Part: OverflowContainer //
//////////////////////////////////////

module("Initial Check");
//testing
test("Initialization", function() {
    ok(jQuery.sap.domById("TabContainer"), "IconTabBar should be rendered");
    ok(jQuery.sap.domById("iconTabFilter1"), "First IconTabBarFilter should be rendered");
    ok(jQuery('.sapCaUiOCOverlay'), "Overlay should be rendered");
    equal(jQuery('.sapCaUiOCOverlay:visible').length,  1, "Overlay initial state is visible");
    equal(sap.ui.getCore().byId("iconTabFilter1").getText(), "Simple Form", "Text of first IconTabBarFilter should be 'Simple Form'");
});

module("Open and Close");

asyncTest("Open : Expand first overflow container ", function(){
    ok(!oOverflowContainer1.getExpanded(), "oOverflowContainer is fold");
    oOverflowContainer1._getButton().fireTap();
    setTimeout(function(){
        equal(oOverflowContainer1.getExpanded(), true,"oOverflowContainer is now open");
        equal(jQuery('.sapCaUiOCOverlay:visible').length, 0, "Overlay is not displayed");
        ok(jQuery.sap.domById("OverflowContainer1"), "First OverflowContainer is rendered after it's opened.");
        start();
    }, 450);
});

asyncTest("Close : Collapse first overflow container ", function(){
    ok(oOverflowContainer1.getExpanded(), "oOverflowContainer is expanded");
    oOverflowContainer1._getButton().fireTap();
    setTimeout(function(){
        equal(oOverflowContainer1.getExpanded(), false, "oOverflowContainer is now fold");
        equal(jQuery('.sapCaUiOCOverlay:visible').length,  1, "Overlay is displayed");
        ok(jQuery.sap.domById("OverflowContainer1"), "First OverflowContainer is rendered after it's opened.");
        start();
    }, 450);
});

asyncTest("Change iconTabFilter and  of the IconTabBar", function() {
    //selectEvent should be fired
    oTabContainer.setSelectedItem(oIconTabFilter1);
    //no selectEvent should be fired
    oTabContainer.setSelectedItem(oIconTabFilter2);
    setTimeout(function(){
        equal(oOverflowContainer2.getExpanded(), false, "oOverflowContainer is fold");
        equal(jQuery('.sapCaUiOCOverlay:visible').length,  1, "Overlay is displayed"); // Selects all elements that are visible. (hidden
        ok(jQuery.sap.domById("OverflowContainer2"), "Second OverflowContainer is rendered after IconTabFilter change.");
        start();
    }, 1000);
});