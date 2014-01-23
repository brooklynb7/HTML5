module("sap.suite.ui.commons.NoteTaker");

test("TestRenderedOK", function() {
    var sNoteTakerId1 = "NT1";

    notEqual(jQuery.sap.domById(sNoteTakerId1), null, "NoteTaker outer HTML Element is rendered.");
});


module("sap.suite.ui.commons.NoteTaker. Test Defaults");

test("Default config test", function() {
    var noteTaker2 = sap.ui.getCore().byId("NT2");
    var card;

    card = new sap.suite.ui.commons.NoteTakerCard({
        id: "NT2_NTC1",
        header: "Card header 1",
        body: "Card text body 1"
    });
    noteTaker2.addCard(card);

    card = new sap.suite.ui.commons.NoteTakerCard({
        id: "NT2_NTC2",
        header: "Card header 2",
        body: "Card text body 2"
    });
    noteTaker2.addCard(card);

    card = new sap.suite.ui.commons.NoteTakerCard({
        id: "NT2_NTC3",
        header: "Card header 3",
        body: "Card text body 3"
    });
    noteTaker2.addCard(card);

    equal(noteTaker2._carousel.getVisibleItems(), 2, "Default value for visible items is correct");
    equal(noteTaker2._carousel.getContent().length, 4, "Carousel cards set correctly");
});

module("sap.suite.ui.commons.NoteTaker. Add operations");

test("Check carousel is updated on Add button click", function() {
    var noteTaker2 = sap.ui.getCore().byId("NT2");
    var noteTaker2Feeder = sap.ui.getCore().byId("NT2-feeder");

    noteTaker2Feeder._oAddButton.setEnabled(true);
    qutils.triggerEvent("click", "NT2-feeder-add-button");
    
        equal(noteTaker2._carousel.getContent().length, 5, "New Note card is added to carousel by Add button click");
});

test("Check if programatic add of Note card is working correctly in NoteTaker control",function(){
    var noteTakerAddTest = new sap.suite.ui.commons.NoteTaker({
        id: "NT_ADD_TEST"
    });

    var addedcard = new sap.suite.ui.commons.NoteTakerCard({
        id: "NT_ADDED_NOTE",
        header: "Card header",
        body: "Card text body"
    });

    noteTakerAddTest.addCard(addedcard);
    noteTakerAddTest.placeAt("uiArea2");

    equal(noteTakerAddTest._carousel.getContent().length, 2, "New note card is added to carousel control programmatically");
});

module("sap.suite.ui.commons.NoteTaker. Test overriden methods for cards aggregation", {
    setup: function () {
        var noteTakerAddTest = new sap.suite.ui.commons.NoteTaker({
            id: "NT_AGGR1"
        });
        noteTakerAddTest.placeAt("uiArea4");
    }, teardown: function () {
        sap.ui.getCore().getControl("NT_AGGR1").destroy();
    }
  });

test("Check add method",function(){

    var addedcard = new sap.suite.ui.commons.NoteTakerCard({
        header: "Added card title 1",
        body: "Added card body 1"
     });
    
    var noteTakerAddTest = sap.ui.getCore().getControl("NT_AGGR1");
    noteTakerAddTest.addCard(addedcard);

    equal(noteTakerAddTest.getCards().length, 1, "New note card is added to cards aggregation");
});

test("Check insert method",function(){
    var addedcard = new sap.suite.ui.commons.NoteTakerCard({
        header: "Added card title 1",
        body: "Added card body 1"
     });
    
    var noteTakerAddTest = sap.ui.getCore().getControl("NT_AGGR1");
    noteTakerAddTest.addCard(addedcard);
    
    addedcard = new sap.suite.ui.commons.NoteTakerCard({
        header: "Added card title 2",
        body: "Added card body 2"
     });
    
    noteTakerAddTest.insertCard(addedcard, 0);
    
    equal(noteTakerAddTest.getCards().length, 2, "New note card is inserted to cards aggregation");
});

test("Check indexOf method",function(){
    var addedcard = new sap.suite.ui.commons.NoteTakerCard({
        header: "Added card title 1",
        body: "Added card body 1"
     });
    
    var noteTakerAddTest = sap.ui.getCore().getControl("NT_AGGR1");
    noteTakerAddTest.addCard(addedcard);
    
    equal(noteTakerAddTest.indexOfCard(addedcard), 0, "Index of card is correct");
});

test("Check remove method",function(){
    var addedcard = new sap.suite.ui.commons.NoteTakerCard({
        header: "Added card title 1",
        body: "Added card body 1"
     });
    
    var noteTakerAddTest = sap.ui.getCore().getControl("NT_AGGR1");
    noteTakerAddTest.addCard(addedcard);
    noteTakerAddTest.removeCard(addedcard);
    equal(noteTakerAddTest.getCards().length, 0, "Card was removed");
});

test("Check removeAll method",function(){
    var noteTakerAddTest = sap.ui.getCore().getControl("NT_AGGR1");
    
    var addedcard = new sap.suite.ui.commons.NoteTakerCard({
        header: "Added card title 1",
        body: "Added card body 1"
     });
    noteTakerAddTest.addCard(addedcard);
    
    addedcard = new sap.suite.ui.commons.NoteTakerCard({
        header: "Added card title 2",
        body: "Added card body 2"
     });
    noteTakerAddTest.addCard(addedcard);
    
    noteTakerAddTest.removeAllCards();
    
    equal(noteTakerAddTest.getCards().length, 0, "All cards was removed");
    equal(noteTakerAddTest._carousel.getContent().length, 1, "Feeder is in place");
});

test("Check manual sorting when addCard method called",function(){
    var noteTakerAddTest = sap.ui.getCore().getControl("NT_AGGR1");
    
    var addedcard1 = new sap.suite.ui.commons.NoteTakerCard({
        header: "Added card title 1",
        body: "Added card body 1",
        timestamp: new Date(2011, 10, 15)
     });
    noteTakerAddTest.addCard(addedcard1);
    
    var addedcard2 = new sap.suite.ui.commons.NoteTakerCard({
        header: "Added card title 2",
        body: "Added card body 2",
        timestamp: new Date(2011, 11, 15)
     });
    noteTakerAddTest.addCard(addedcard2);
    
    equal(noteTakerAddTest.indexOfCard(addedcard2), 0, "Cards sorted correctly");
});

test("Check manual sorting when insertCard method is called",function(){
    var noteTakerAddTest = sap.ui.getCore().getControl("NT_AGGR1");
    
    var addedcard1 = new sap.suite.ui.commons.NoteTakerCard({
        header: "Added card title 1",
        body: "Added card body 1",
        timestamp: new Date(2011, 10, 15)
     });
    noteTakerAddTest.insertCard(addedcard1, 0);
    
    var addedcard2 = new sap.suite.ui.commons.NoteTakerCard({
        header: "Added card title 2",
        body: "Added card body 2",
        timestamp: new Date(2011, 11, 15)
     });
    noteTakerAddTest.insertCard(addedcard2, 1);
    
    equal(noteTakerAddTest.indexOfCard(addedcard2), 1, "Cards sorted correctly");
});

test("Check note taker trigger value set into card", function(){
	var noteTakerAddTest = sap.ui.getCore().getControl("NT_AGGR1");
	noteTakerAddTest.setCardViewAllTrigger(20);
	
	var eData = {};
    eData.title = "title";
    eData.body = "body";
    eData.timestamp = new Date();

    noteTakerAddTest._handleAddNote( new sap.ui.base.Event("addEvent", noteTakerAddTest._feeder, eData) );

	var oCard = noteTakerAddTest.getCards()[0];
	
	equal(oCard.getViewAllTrigger(), 20, "Trigger value set into card correctly");
});


module("Tag processing with binding", {
    setup: function() {
        this.nt = new sap.suite.ui.commons.NoteTaker();

        this.oJsonData = {
            visibleNotes: 2,
            cards: [
                {
                    header : "Card title 1",
                    body : "Card body 1",
                    timestamp: new Date(2012, 1, 21, 15, 25, 30, 0),
                    tags: ["PRM", "1on1"],
                    isFiltered: false
                },
                {
                    header : "Card title 2",
                    body : "Card body 2",
                    timestamp: new Date(2010, 1, 22, 15, 25, 30, 0),
                    tags: ["PRM", "360"]
                },
                {
                    header : "Card title 3",
                    body : "EVIL NO TAGS CARD",
                    timestamp: new Date(2010, 1, 22, 15, 25, 30, 0)
                },
                {
                    header : "Card title 4",
                    body : "the card INITIALLY HIDDEN by filter",
                    timestamp: new Date(2010, 1, 22, 15, 25, 30, 0),
                    isFiltered: true
                }
            ]
        };

        this.oNtcTemplate = new sap.suite.ui.commons.NoteTakerCard({
            header : "{header}",
            body : "{body}",
            timestamp: "{timestamp}",
            tags: "{tags}",
            isFiltered: "{isFiltered}"
        });
    }
});

test("Test getAllTags() method", function() {

    deepEqual(this.nt.getAllTags(), [], "no tags for empty taker");

    this.nt.setModel(new sap.ui.model.json.JSONModel(this.oJsonData));
    this.nt.bindAggregation( "cards", {
        path: "/cards",
        template: this.oNtcTemplate
    });
    deepEqual(this.nt.getAllTags(), "PRM 1on1 360".split(" ").sort(), "bound tags returned from taker's cards");
});

test("filtering: no binding filter applied", function() {
    this.nt.setModel(new sap.ui.model.json.JSONModel(this.oJsonData));
    this.nt.bindAggregation( "cards", {
        path: "/cards",
        template: this.oNtcTemplate
    });

    equal(this.nt.getCards().length, 4, "4 cards shown");
});

test("filtering: binding filter applied", function() {
    this.nt.setModel(new sap.ui.model.json.JSONModel(this.oJsonData));
    this.nt.bindAggregation( "cards", {
        path: "/cards",
        template: this.oNtcTemplate,
        filters: [new sap.ui.model.Filter("isFiltered", sap.ui.model.FilterOperator.EQ, false)]
    });

    //TODO: why default value for isFiltered is not applied?
    //equal(this.nt.getCards().length, 3, "3 (false and unset) cards shown");
    equal(this.nt.getCards().length, 1, "1(explicitly set) card shown");
});

test("filtering: empty filter shows all cards", function() {
    this.nt.setModel(new sap.ui.model.json.JSONModel(this.oJsonData));
    this.nt.bindAggregation( "cards", {
        path: "/cards",
        template: this.oNtcTemplate
    });

    this.nt.setFilterCriteria(null);
    equal(this.nt.getCards().length, 4, "all cards shown for NULL filter");
    this.nt.setFilterCriteria({});
    equal(this.nt.getCards().length, 4, "all cards shown for empty filter");
    this.nt.setFilterCriteria({tags:[]});
    equal(this.nt.getCards().length, 4, "all cards shown if no tags in filter");
});

test("filtering: 'PRM' filter shows two cards", function() {
    this.nt.setModel(new sap.ui.model.json.JSONModel(this.oJsonData));
    this.nt.bindAggregation( "cards", {
        path: "/cards",
        template: this.oNtcTemplate
    });

    this.nt.setFilterCriteria({tags:["PRM"]});
    equal(this.nt.getCards().length, 2, "only 2 cards shown for PRM tag filter");
});

module("Tag processing without binding", {
    setup: function() {
        this.nt = new sap.suite.ui.commons.NoteTaker({
            cards: [
                new sap.suite.ui.commons.NoteTakerCard({
                    header : "Card title 1",
                    body : "Card body 1",
                    timestamp: new Date(2012, 1, 21, 15, 25, 30, 0),
                    tags: ["PRM", "1on1"],
                    isFiltered: false
                }),
                new sap.suite.ui.commons.NoteTakerCard({
                    header : "Card title 2",
                    body : "Card body 2",
                    timestamp: new Date(2010, 1, 22, 15, 25, 30, 0),
                    tags: ["PRM", "360"]
                }),
                new sap.suite.ui.commons.NoteTakerCard({
                    header : "Card title 3",
                    body : "EVIL NO TAGS CARD",
                    timestamp: new Date(2010, 1, 22, 15, 25, 30, 0)
                }),
                new sap.suite.ui.commons.NoteTakerCard({
                    header : "Card title 4",
                    body : "the card INITIALLY HIDDEN by filter",
                    timestamp: new Date(2010, 1, 22, 15, 25, 30, 0),
                    isFiltered: true
                })
            ]
        });
    },
    teardown: function() {
        this.nt.destroy();
    }
});

test("filtering: no filter applied", function() {
    equal(this.nt.getCards().length, 4, "4 cards shown");
});

test("filtering: empty filter shows all cards", function() {
    this.nt.setFilterCriteria(null);
    equal(this.nt.getCards().length, 4, "all cards shown for NULL filter");
    this.nt.setFilterCriteria({});
    equal(this.nt.getCards().length, 4, "all cards shown for empty filter");
    this.nt.setFilterCriteria({tags:[]});
    equal(this.nt.getCards().length, 4, "all cards shown if no tags in filter");
});

test("filtering: PRM filter shows two cards", function() {
    this.nt.setFilterCriteria({tags:["PRM"]});
    equal(this.nt.getCards().length, 2, "only 2 cards shown for PRM tag filter");
});

module("Process delete card. No data binding", {
    setup: function () {
        var noteTakerAddTest = new sap.suite.ui.commons.NoteTaker({
            id: "NT1_DELETE_NO_BINDING"
        });
        
        var addedcard1 = new sap.suite.ui.commons.NoteTakerCard({
            header: "Added card title 1",
            body: "Added card body 1",
            timestamp: new Date(2012, 11, 15),
            tags: ["PRM", "1on1"]
         });
        noteTakerAddTest.addCard(addedcard1);
    }, 
    teardown: function () {
       sap.ui.getCore().getControl("NT1_DELETE_NO_BINDING").destroy();
    }
  });
test("Delete card", function(){
    var isCalled = false;
    var taker = sap.ui.getCore().getControl("NT1_DELETE_NO_BINDING");
    taker.attachDeleteCard(function(oEvent){
        isCalled = true;
        
        var title =  oEvent.getParameter("title");
        equals(title, "Added card title 1", "Title of deleted card is correct");
        
        var body = oEvent.getParameter("body");
        equals(body, "Added card body 1", "Body of deleted card is correct");
    });
    
    deepEqual(taker.getAllTags(), "PRM 1on1".split(" ").sort(), "bound tags returned from taker's cards are correct");
    
    var card0 = taker.getCards()[0];
    card0._handleDeleteClick();
    equal(taker.getCards().length, 0);
    ok(isCalled, "delete card event was called");
    deepEqual(taker.getAllTags(), [], "updated bound tags returned from taker's cards are correct");
});

module("Process delete card. With Data binding", {
    setup: function () {
        var noteTaker = new sap.suite.ui.commons.NoteTaker({id: "NT1_DELETE_BINDING"});

        var oJsonData = {
            visibleNotes: 2,
            cards: [
                {
                    id : "card1",
                    header : "Card title 1",
                    body : "Card body 1",
                    timestamp: new Date(2012, 1, 21, 15, 25, 30, 0),
                    tags: ["PRM", "1on1"]
                },
                {
                    id : "card2",
                    header : "Card title 2",
                    body : "Card body 2",
                    timestamp: new Date(2010, 1, 22, 15, 25, 30, 0),
                    tags: ["PRM", "360"]
                },
                {
                    id : "card3",
                    header : "Card title 3",
                    body : "Card body 3",
                    timestamp: new Date(2010, 1, 22, 15, 25, 30, 0),
                    tags: ["CATS"]
                }
            ]
        };
        noteTaker.setModel(new sap.ui.model.json.JSONModel(oJsonData));

        var oNoteTakerCardTemplate = new sap.suite.ui.commons.NoteTakerCard({
            uid : "{id}",
            header : "{header}",
            body : "{body}",
            timestamp: "{timestamp}",
            tags: "{tags}"
        });

        noteTaker.bindAggregation( "cards", {
            path: "/cards",
            template: oNoteTakerCardTemplate
        });

    }, 
    teardown: function () {
       sap.ui.getCore().getControl("NT1_DELETE_BINDING").destroy();
    }
});

test("Delete card. With databinding", function(){
    var isCalled = false;
    var taker = sap.ui.getCore().getControl("NT1_DELETE_BINDING");
    taker.attachDeleteCard(function(oEvent){
        isCalled = true;
//        var title =  oEvent.getParameter("title");
//        var timestamp = oEvent.getParameter("timestamp");
        var uid = oEvent.getParameter("uid");
        equals(uid, "card1", "id of deleted element is correct");
        var cardsJson = this.getModel().getData().cards;

        // this code is written for IE8 browser :)
        var pos = 0;
        var card2deletePos = 0;
        for(var entry in cardsJson) {
          if(cardsJson[entry].uid == uid) {
              card2deletePos = pos;
          }
          pos++;
        }
        
        cardsJson.splice(card2deletePos,1);
        this.getModel().checkUpdate();
        
    });
    var card0 = taker.getCards()[0];
    card0._handleDeleteClick();
    ok(isCalled, "delete card event was called");
    equal(taker.getCards().length, 2);
    
    deepEqual(taker.getAllTags(), "PRM 360 CATS".split(" ").sort(), "updated bound tags returned from taker's cards");
});

module("Thumbs processing");

test("Thumbs filtering without binding.", function() {
    var oNoteTaker = new sap.suite.ui.commons.NoteTaker({
        id: "NT_THUMBS",
        cards: [
            new sap.suite.ui.commons.NoteTakerCard({
                body : "Card body 1",
                tags: ["PRM", "1on1"],
                thumbUp: true,
                thumbDown: false
            }),
            new sap.suite.ui.commons.NoteTakerCard({
                body : "Card body 2",
                tags: ["PRM", "360"],
                thumbUp: false,
                thumbDown: true
            }),
            new sap.suite.ui.commons.NoteTakerCard({
                body : "EVIL NO TAGS CARD",
                thumbUp: true,
                thumbDown: false
            }),
            new sap.suite.ui.commons.NoteTakerCard({
                body : "Card body 3",
                thumbUp: false,
                thumbDown: false
            }),
            new sap.suite.ui.commons.NoteTakerCard({
                body : "no thumbs defined",
                isFiltered: true
            })
        ]
    });

    oNoteTaker.setFilterCriteria({ thumbUp: true });
    equal(oNoteTaker.getCards().length, 2, "thumb up filter shows two cards");

    oNoteTaker.setFilterCriteria({ thumbDown: true });
    equal(oNoteTaker.getCards().length, 1, "thumb down filter shows one card");

    oNoteTaker.setFilterCriteria({ thumbUp: true, thumbDown: true });
    equal(oNoteTaker.getCards().length, 3, "thumbs up and down filter shows three cards");

    oNoteTaker.setFilterCriteria({ thumbUp: false, thumbDown: false });
    equal(oNoteTaker.getCards().length, 5, "negative filter shows all five cards");

    oNoteTaker.setFilterCriteria({ tags:["PRM"], thumbUp: true, thumbDown: false });
    equal(oNoteTaker.getCards().length, 1, "combined filter with tag and thumb up shows one card");
});

test("Thumbs filtering with binding.", function() {
    var oNoteTaker = new sap.suite.ui.commons.NoteTaker();

    var oJsonData = {
        visibleNotes: 2,
        cards: [
            {
                body : "Card body 1",
                tags: ["PRM", "1on1"],
                thumbUp: true,
                thumbDown: false,
                isFiltered: false
            },
            {
                body : "Card body 2",
                tags: ["PRM", "360"],
                thumbUp: false,
                thumbDown: true
            },
            {
                body : "EVIL NO TAGS CARD",
                thumbUp: true,
                thumbDown: false
            },
            {
                body : "Card body 3",
                thumbUp: false,
                thumbDown: false
            },
            {
                body : "no thumbs defined",
                isFiltered: true
            }
        ]
    };

    var oNtcTemplate = new sap.suite.ui.commons.NoteTakerCard({
        header : "{header}",
        body : "{body}",
        timestamp: "{timestamp}",
        tags: "{tags}",
        thumbUp: "{thumbUp}",
        thumbDown: "{thumbDown}",
        isFiltered: "{isFiltered}"
    });

    oNoteTaker.setModel(new sap.ui.model.json.JSONModel(oJsonData));
    oNoteTaker.bindAggregation("cards", {
        path: "/cards",
        template: oNtcTemplate
    });

    oNoteTaker.setFilterCriteria({ thumbUp: true });
    equal(oNoteTaker.getCards().length, 2, "thumb up filter shows two cards");

    oNoteTaker.setFilterCriteria({ thumbDown: true });
    equal(oNoteTaker.getCards().length, 1, "thumb down filter shows one card");

    oNoteTaker.setFilterCriteria({ thumbUp: true, thumbDown: true });
    equal(oNoteTaker.getCards().length, 3, "thumbs up and down filter shows three cards");

    oNoteTaker.setFilterCriteria({ thumbUp: false, thumbDown: false });
    equal(oNoteTaker.getCards().length, 5, "negative filter shows all five cards");

    oNoteTaker.setFilterCriteria({ tags:["PRM"], thumbUp: true, thumbDown: false });
    equal(oNoteTaker.getCards().length, 1, "combined filter with tag and thumb up shows one card");

});

module("Filtering buttons rendering", {
    setup: function () {
    },
    teardown: function () {
        var oNoteTaker = sap.ui.getCore().byId("NT1");
        oNoteTaker.setFilterCriteria(null);
    }
});

test("Tag button rendering.", function() {
    var oNoteTaker = sap.ui.getCore().byId("NT1");

    oNoteTaker.setFilterCriteria({tags:["PRM"]});
    oNoteTaker.rerender();

    ok(oNoteTaker._oFilterTagButton.hasStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected"), "Tag button changes style when filtering criteria has tags");

    oNoteTaker.setFilterCriteria({});
    oNoteTaker.rerender();
    ok(!oNoteTaker._oFilterTagButton.hasStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected"), "Tag button has initial style when filtering criteria is empty");
});

test("Thumb Up button rendering.", function() {
    var oNoteTaker = sap.ui.getCore().byId("NT1");

    oNoteTaker.setFilterCriteria({thumbUp: true});
    oNoteTaker.rerender();

    ok(oNoteTaker._oFilterThumbUpButton.hasStyleClass("sapSuiteUiCommonsNoteTakerFilterThumbUpButton"), "Color icon set on pressed Thumb Up button");
    ok(oNoteTaker._oFilterThumbUpButton.hasStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected"), "Button color changes when filtering criteria applied");

    oNoteTaker.setFilterCriteria({thumbUp: false});
    oNoteTaker.rerender();

    ok(oNoteTaker._oFilterThumbUpButton.hasStyleClass("sapSuiteUiCommonsNoteTakerFilterThumbUpButton"), "Color icon set when filtering criteria cleared");
    ok(!oNoteTaker._oFilterThumbUpButton.hasStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected"), "Button has initial style when filtering criteria cleared");
});

test("Thumb Down button rendering.", function() {
    var oNoteTaker = sap.ui.getCore().byId("NT1");

    oNoteTaker.setFilterCriteria({thumbDown: true});
    oNoteTaker.rerender();

    ok(oNoteTaker._oFilterThumbDownButton.hasStyleClass("sapSuiteUiCommonsNoteTakerFilterThumbDownButton"), "Color icon set on pressed Thumb Down button");
    ok(oNoteTaker._oFilterThumbDownButton.hasStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected"), "Button color changes when filtering criteria applied");

    oNoteTaker.setFilterCriteria({thumbDown: false});
    oNoteTaker.rerender();

    ok(oNoteTaker._oFilterThumbDownButton.hasStyleClass("sapSuiteUiCommonsNoteTakerFilterThumbDownButton"), "Color icon set when filtering criteria cleared");
    ok(!oNoteTaker._oFilterThumbDownButton.hasStyleClass("sapSuiteUiCommonsNoteTakerFilterButtonSelected"), "Button has initial style when filtering criteria cleared");
});

module("Search");

test("Search without binding.", function() {
    var oNoteTaker = new sap.suite.ui.commons.NoteTaker({
        id: "NT_SEARCH",
        cards: [
            new sap.suite.ui.commons.NoteTakerCard({
                header : "first card title",
                body : "Lorem ipsum dolor",
                tags: ["PRM", "1on1"],
                thumbUp: true,
                thumbDown: false
            }),
            new sap.suite.ui.commons.NoteTakerCard({
                header : "second card title",
                body : "dolor sit Amet",
                tags: ["PRM", "360"],
                thumbUp: false,
                thumbDown: true
            }),
            new sap.suite.ui.commons.NoteTakerCard({
                body : "no header card",
                thumbUp: true,
                thumbDown: false
            }),
            new sap.suite.ui.commons.NoteTakerCard({
                header: "lorem ipsum",
                body : "no tags defined",
                thumbUp: false,
                thumbDown: false
            }),
            new sap.suite.ui.commons.NoteTakerCard({
                body : "no thumbs defined",
                isFiltered: true
            })
        ]
    });

    oNoteTaker.setFilterCriteria({ search: ["lorem", "amet"] });
    equal(oNoteTaker.getCards().length, 3, "search by text ignores case and shows three cards");

    oNoteTaker.setFilterCriteria({ search: ["lorem", "amet"], tags:["PRM"] });
    equal(oNoteTaker.getCards().length, 2, "search by text and filter by tags shows two cards");

    oNoteTaker.setFilterCriteria({ search: ["lorem", "amet"], tags:["PRM"], thumbUp: true });
    equal(oNoteTaker.getCards().length, 1, "search by text and filter by tags and thumb up shows one card");

    oNoteTaker._handleResetFilters();
    equal(oNoteTaker.getCards().length, 3, "resetting filters doesn't clear search so three cards are shown");

    oNoteTaker.setFilterCriteria({ search: [] });
    equal(oNoteTaker.getCards().length, 5, "empty search shows all five cards");
});

test("Search with binding.", function() {
    var oNoteTaker = new sap.suite.ui.commons.NoteTaker();

    var oJsonData = {
        visibleNotes: 2,
        cards: [
            {
                header : "first card title",
                body : "Lorem ipsum dolor",
                tags: ["PRM", "1on1"],
                thumbUp: true,
                thumbDown: false
            },
            {
                header : "second card title",
                body : "dolor sit Amet",
                tags: ["PRM", "360"],
                thumbUp: false,
                thumbDown: true
            },
            {
                body : "no header card",
                thumbUp: true,
                thumbDown: false
            },
            {
                header: "lorem ipsum",
                body : "no tags defined",
                thumbUp: false,
                thumbDown: false
            },
            {
                body : "no thumbs defined",
                isFiltered: true
            }
        ]
    };

    var oNtcTemplate = new sap.suite.ui.commons.NoteTakerCard({
        header : "{header}",
        body : "{body}",
        timestamp: "{timestamp}",
        tags: "{tags}",
        thumbUp: "{thumbUp}",
        thumbDown: "{thumbDown}",
        isFiltered: "{isFiltered}"
    });

    oNoteTaker.setModel(new sap.ui.model.json.JSONModel(oJsonData));
    oNoteTaker.bindAggregation("cards", {
        path: "/cards",
        template: oNtcTemplate
    });

    oNoteTaker.setFilterCriteria({ search: ["lorem", "amet"] });
    equal(oNoteTaker.getCards().length, 3, "search by text ignores case and shows three cards");

    oNoteTaker.setFilterCriteria({ search: ["lorem", "amet"], tags:["PRM"] });
    equal(oNoteTaker.getCards().length, 2, "search by text and filter by tags shows two cards");

    oNoteTaker.setFilterCriteria({ search: ["lorem", "amet"], tags:["PRM"], thumbUp: true });
    equal(oNoteTaker.getCards().length, 1, "search by text and filter by tags and thumb up shows one card");

    oNoteTaker.setFilterCriteria({ search: [] });
    equal(oNoteTaker.getCards().length, 5, "empty search shows all five cards");
});

module("Test attachment upload");

test("Attachment select event", function() {
    var noteTaker = new sap.suite.ui.commons.NoteTaker({
        attachmentSelect: function(oEvent) {
            equal(oEvent.getParameter("filename"), "test.txt", "selected file goes into outside event");
        }
    });
    noteTaker._feeder._oFileUploader.fireChange({newValue: "test.txt"});
});

test("Attachment upload complete event", function() {
    var noteTaker = new sap.suite.ui.commons.NoteTaker({
        attachmentUploadComplete: function(oEvent) {
            equal(oEvent.getParameter("response"), "OK 200", "upload completed response goes into outside event");
        }
    });
    noteTaker._feeder._oFileUploader.fireUploadComplete({response: "OK 200"});
});