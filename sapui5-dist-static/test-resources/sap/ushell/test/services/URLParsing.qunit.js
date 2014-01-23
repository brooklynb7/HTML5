// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview QUnit tests for sap.ushell.services.URLParsing
 */
(function () {
    "use strict";
    /*global asyncTest, deepEqual, equal, expect, module, notDeepEqual,
    notEqual, notStrictEqual, ok, raises, start, strictEqual, stop, test,
    jQuery, sap, sinon */

    jQuery.sap.require("sap.ushell.services.Container");

    module("sap.ushell.services.URLParsing", {
        setup: function () {
            sap.ushell.bootstrap("demo");
        },
        /**
         * This method is called after each test. Add every restoration code here.
         */
        teardown: function () {
            delete sap.ushell.Container;
        }
    });


    // hash parsing functions
    // breakdown a unified shell hash into segments
    // #SO-Action~CONTEXT?a=1&b=2;c=3&/def
    //

    test("getShellHash", function () {
        // prepare test
        var sShellHash =  sap.ushell.Container.getService("URLParsing").getShellHash("http://urlabc#SO-ABC~CONTXT?ABC=3&DEF=4&/detail/1?A=B");
        deepEqual(sShellHash,"SO-ABC~CONTXT?ABC=3&DEF=4");
    });


    test("getShellHash", function () {
        var sHash = sap.ushell.Container.getService("URLParsing").getHash("http://urlabc?A=B~DEF#SO-ABC~CONTXT?ABC=3&DEF=4&/detail/1?A=B");
        deepEqual(sHash,"SO-ABC~CONTXT?ABC=3&DEF=4&/detail/1?A=B");
    });

    test("parseShellHashSO_ACT", function () {
        var oShellHash = sap.ushell.Container.getService("URLParsing").parseShellHash("SO-ABC?");
        deepEqual(oShellHash.semanticObject,"SO");
        deepEqual(oShellHash.action,"ABC");
    });

    test("parseShellHashFull", function () {
        var oShellHash = sap.ushell.Container.getService("URLParsing").parseShellHash("SO-ABC~CONTXT?ABC=3A&DEF=4B&/detail/1?A=B");
        deepEqual(oShellHash.semanticObject, "SO");
        deepEqual(oShellHash.action, "ABC");
        deepEqual(oShellHash.contextRaw, "CONTXT");
        deepEqual(oShellHash.params,{ ABC : [ "3A" ], DEF: [ "4B" ]});
        deepEqual(oShellHash.appSpecificRoute, "&/detail/1?A=B");
    });

    test("parseShellHashFullDuplicates", function () {
        var oShellHash = sap.ushell.Container.getService("URLParsing").parseShellHash("/Seman/tic-Action-name~AEFHIJ==?ABC=3&DEF=5&ABC=4&/detail/1?A=B");
        deepEqual(oShellHash.semanticObject, "/Seman/tic");
        deepEqual(oShellHash.action, "Action-name");
        deepEqual(oShellHash.contextRaw, "AEFHIJ==");
        deepEqual(oShellHash.params,{ ABC : ["3" , "4" ], DEF: [ "5" ] });
        deepEqual(oShellHash.appSpecificRoute, "&/detail/1?A=B");
    });



    test("parseShellHashOnlySOABC", function () {
        var oShellHash = sap.ushell.Container.getService("URLParsing").parseShellHash("SO-ABC~CONTXT");
        deepEqual(oShellHash.semanticObject, "SO");
        deepEqual(oShellHash.action, "ABC");
        deepEqual(oShellHash.contextRaw, "CONTXT");
        deepEqual(oShellHash.params, { });
        deepEqual(oShellHash.appSpecificRoute, undefined);
    });


    test("parseShellHashNoParams", function () {
        var oShellHash = sap.ushell.Container.getService("URLParsing").parseShellHash("SO-ABC~CONTXT&/detail/1?A=B");
        deepEqual(oShellHash.semanticObject,"SO");
        deepEqual(oShellHash.action,"ABC");
        deepEqual(oShellHash.contextRaw, "CONTXT");
        deepEqual(oShellHash.params,{ });
        deepEqual(oShellHash.appSpecificRoute,"&/detail/1?A=B");
    });


    test("parseShellHashFullNoRoute", function () {
        var oShellHash = sap.ushell.Container.getService("URLParsing").parseShellHash("/Seman/tic-Action-name~AEFHIJ==?ABC=3&DEF=5&ABC=4%205");
        deepEqual(oShellHash.semanticObject, "/Seman/tic");
        deepEqual(oShellHash.action, "Action-name");
        deepEqual(oShellHash.contextRaw, "AEFHIJ==");
        deepEqual(oShellHash.params,{ ABC : [ "3", "4 5" ], DEF: [ "5" ] });
    });

    test("parseShellHashFullNoParams", function () {
        var oShellHash = sap.ushell.Container.getService("URLParsing").parseShellHash("/Seman/tic-/Act/ion-name~AEFHIJ==?&/detail/1?A=B");
        deepEqual(oShellHash.semanticObject, "/Seman/tic");
        deepEqual(oShellHash.action, "/Act/ion-name");
        deepEqual(oShellHash.contextRaw, "AEFHIJ==");
        deepEqual(oShellHash.params,{ });
        deepEqual(oShellHash.appSpecificRoute, "&/detail/1?A=B");
    });

    test("parseShellHashNoContext", function () {
        var oShellHash = sap.ushell.Container.getService("URLParsing").parseShellHash("/Seman/tic-/Act/ion-name?&/detail/1?A=B");
        deepEqual(oShellHash.semanticObject, "/Seman/tic");
        deepEqual(oShellHash.action, "/Act/ion-name");
        deepEqual(oShellHash.contextRaw, undefined);
        deepEqual(oShellHash.params, { });
        deepEqual(oShellHash.appSpecificRoute, "&/detail/1?A=B");
    });

    test("constructShellHashFullNoRoute", function () {
        var sShellHash = sap.ushell.Container.getService("URLParsing").constructShellHash(
                { target :
                    { semanticObject : "/Seman/tic",
                         action : "Action-name",
                         contextRaw : "AEFHIJ==",
                    },
                    params : { ABC : [ "3", "4" ], DEF: [ "5" ] }
                }
        );
        deepEqual("/Seman/tic-Action-name~AEFHIJ==?ABC=3&ABC=4&DEF=5",sShellHash);
    });

    test("constructShellHashURLEnc", function () {
        var sShellHash = sap.ushell.Container.getService("URLParsing").constructShellHash(
                { target :
                    { semanticObject : "Semantic",
                         action : "Action-name",
                         contextRaw : "AEFHIJ==",
                    },
                    params : {  DEF: [ "5" ], ABC : [ "3", "4 5" ] }
                }
        );
        deepEqual("Semantic-Action-name~AEFHIJ==?ABC=3&ABC=4%205&DEF=5",sShellHash);
    });
    test("constructShellHashOrder", function () {
        var sShellHash = sap.ushell.Container.getService("URLParsing").constructShellHash(
                { target :
                    { semanticObject : "/Seman/tic",
                         action : "Action-name",
                         contextRaw : "AEFHIJ==",
                    },
                    params : {  DEF: [ "5" ], ABC : [ "3", "4" ] }
                }
        );
        deepEqual("/Seman/tic-Action-name~AEFHIJ==?ABC=3&ABC=4&DEF=5",sShellHash);
    });

    test("constructShellHashSemiFlat", function () {
        var sShellHash = sap.ushell.Container.getService("URLParsing").constructShellHash(
                { target :
                    { semanticObject : "/Seman/tic",
                         action : "Action-name",
                         contextRaw : "AEFHIJ==",
                    },
                    params : {  DEF: "5", ABC : [ "3", "4" ] }
                }
        );
        deepEqual("/Seman/tic-Action-name~AEFHIJ==?ABC=3&ABC=4&DEF=5",sShellHash);
    });

    test("constructShellHashNoParam", function () {
        var sShellHash = sap.ushell.Container.getService("URLParsing").constructShellHash(
                { target :
                    { semanticObject : "/Seman/tic",
                         action : "Action-name",
                    }
                }
        );
        deepEqual("/Seman/tic-Action-name",sShellHash);
    });


    test("splitHash", function () {
        var sShellHash = sap.ushell.Container.getService("URLParsing").splitHash("#Object-name~AFE2==?PV1=PV2&PV4=V5&/display/detail/7?UU=HH");
        deepEqual( { shellPart : "Object-name~AFE2==?PV1=PV2&PV4=V5",
                     appSpecificRoute : "&/display/detail/7?UU=HH",
                    },sShellHash);
    });

    test("splitHash2", function () {
        var sShellHash = sap.ushell.Container.getService("URLParsing").splitHash("Object-name~AFE2==?PV1=PV2&PV4=V5&/display/detail/7?UU=HH");
        deepEqual( { shellPart : "Object-name~AFE2==?PV1=PV2&PV4=V5",
                     appSpecificRoute : "&/display/detail/7?UU=HH",
                    }, sShellHash);
    });


    test("splitHashRobust", function () {
        var sShellHash = sap.ushell.Container.getService("URLParsing").splitHash("");
        deepEqual( { }, sShellHash);
    });
    test("splitHashRobust2", function () {
        var sShellHash = sap.ushell.Container.getService("URLParsing").splitHash("#");
        deepEqual( { }, sShellHash);
    });


    // end of hash breakdown

    test("getServiceURLParser", function () {
        //var oURLParsing = sap.ushell.Container.getService("URLParsing");
        var oURLParsing= sap.ushell.Container.getService("URLParsing");

        ok(oURLParsing !== undefined);

        // extract hash from url

  	    var sShellHash = oURLParsing.getShellHash("http://urlabc?A=B~DEF#SO-ABC~CONTXT?ABC=3&DEF=4&/detail/1?A=B");
   	    deepEqual("SO-ABC~CONTXT?ABC=3&DEF=4",sShellHash);

   	    var sHash = oURLParsing.getHash("http://urlabc?A=B~DEF#SO-ABC~CONTXT?ABC=3&DEF=4&/detail/1?A=B");
   	    deepEqual("SO-ABC~CONTXT?ABC=3&DEF=4&/detail/1?A=B",sHash);

        // break down hash into parts
        var oShellHash = oURLParsing.parseShellHash("SO-ABC~CONTXT?ABC=3A&DEF=4B&/detail/1?A=B");
        deepEqual(oShellHash.semanticObject,"SO");
	    deepEqual(oShellHash.action,"ABC");
	    deepEqual(oShellHash.contextRaw,"CONTXT");
	    deepEqual(oShellHash.params,{ ABC : ["3A"] , DEF: ["4B"] });
	    deepEqual(oShellHash.appSpecificRoute,"&/detail/1?A=B");

    });
}());
