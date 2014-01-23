// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for ushell-lib project
 */
(function () {
    "use strict";
    /*global sap */

    sap.ui2.srvc.test.qunit.addProject({
        name: 'ushell-lib',
        codebase: "ushell/resources/sap/ushell",
        testbase: "ushell/test-resources/sap/ushell/test",
        scripts: [
            // the code under test (prefer using jQuery.sap.require unless you need testPublishAt)
            "components/container/ApplicationContainer.js"
        ],
        tests: [
            // the unit tests (alphabetic order, please)
            "adapters/demo/ContainerAdapter.qunit.js",
            "adapters/sandbox/PersonalizationAdapter.qunit.js",
            "components/container/ApplicationContainer.qunit.js",
            "components/factsheet/annotation/Mapping.qunit.js",
            "components/factsheet/annotation/ODataURLTemplating.qunit.js",
            "services/Bookmark.qunit.js",
            "services/CrossApplicationNavigation.qunit.js",
            "services/Container.qunit.js",
            "services/LaunchPage.qunit.js",
            "services/PageBuilding.qunit.js",
            "services/Personalization.qunit.js",
            "services/ShellNavigation.qunit.js",
            "services/URLParsing.qunit.js",
            "services/UserInfo.qunit.js",
            "utils.qunit.js"
        ],
        integrationTests: [
            "services/Bookmark.integration.qunit.js",
            "services/PageBuilding.integration.qunit.js"
        ]
    });
}());
