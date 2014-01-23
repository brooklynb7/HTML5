module("note taker card logic", {
    setup: function() {

        // JSON data
        this.oJsonData = {
            header : "Card title",
            body : "Card body",
            timestamp: new Date(2013, 1, 21, 15, 25, 30, 0)
        };

        // JSON model
        this.oJsonModel = new sap.ui.model.json.JSONModel();
        this.oJsonModel.setData(this.oJsonData);

        // Create the control with binding
        this.card = new sap.suite.ui.commons.NoteTakerCard({
            id: "NTC",
            header: "{/header}",
            body: "{/body}",
        	timestamp: "{/timestamp}",
            filters: [new sap.ui.model.Filter("isFiltered", sap.ui.model.FilterOperator.EQ, true)]
        });

        this.card.setModel(this.oJsonModel);
    },

    teardown: function() {
        this.card.destroy();
    }
});

test("NTC control exists", function() {
    ok(this.card, "NTC found");
});

test("card knows its header from the model", function() {
    equal(this.card.getHeader(), this.oJsonData.header,
          "header '" + this.oJsonData.header + "' comes from model");
});

test("card knows its body text from the model", function() {
    equal(this.card.getBody(), this.oJsonData.body,
          "body text '" + this.oJsonData.body + "' comes from model");
});

test("card formats timestamp", function() {
	equal(this.card.getFormattedTimestamp(), "Feb 21, 2013 3:25:30 PM", "timestamp property correctly formatted");
});

test("tag formatter: returns 'No tags' when it has empty tag list", function() {
    var msg = this.card._rb.getText("NOTETAKERCARD_LABEL_TAGS_EMPTY");
    ok(this.card._getFormattedTags().indexOf(msg) != -1, msg + " returned");
});

test("tag formatter: returns tag if the note has one, XSS checked", function() {
    this.card.setTags(["<PRM>"]);
    var msg = this.card._rb.getText("NOTETAKERCARD_LABEL_TAGS_FULL") +":";
    ok(this.card._getFormattedTags().indexOf(msg + " <span title='&lt;PRM&gt;'>&lt;PRM&gt;</span>") != -1, "tags formatted, script escaped");
});

test("tag formatter: returns sorted tag list if the note has several tags", function() {
    this.card.setTags(["PRM", "1on1", "360"]);
    var msg = this.card._rb.getText("NOTETAKERCARD_LABEL_TAGS_FULL") +":";
    ok(this.card._getFormattedTags().indexOf(msg + " <span title='1on1&#x20;360&#x20;PRM'>1on1&#x20;360&#x20;PRM</span>") != -1, "tags sorted");
});

test("attachment panel ids and classes", function() {
    var oCardAttachment = this.card._prepareAttachmentPanel(false);
    equal(oCardAttachment.getId(), "NTC-attachmentPanel", "card: layout id");
    ok(oCardAttachment.hasStyleClass("suiteUiNtcAttachmentPanel"), "card: layout style class");
    notEqual(oCardAttachment.getContent()[0].getContent().indexOf("suiteUiNtcAttachmentIcon"), -1, "card: icon style class");
    equal(oCardAttachment.getContent()[1].getId(), "NTC-attachmentLink", "card: link id");

    var oOverlayAttachment = this.card._prepareAttachmentPanel(true);
    equal(oOverlayAttachment.getId(), "NTC-overlay-attachmentPanel", "overlay: layout id");
    ok(oOverlayAttachment.hasStyleClass("suiteUiNtcOverlayAttachmentPanel"), "overlay: layout style class");
    notEqual(oOverlayAttachment.getContent()[0].getContent().indexOf("suiteUiNtcAttachmentIcon"), -1, "overlay: icon style class");
    equal(oOverlayAttachment.getContent()[1].getId(), "NTC-overlay-attachmentLink", "overlay: link id");
});

asyncTest("download event", function() {
    expect(3);
    var card = this.card;

    var btn = new sap.ui.commons.Button();
    btn._ntc = card;

    card.setUid("uid1");
    card.setAttachmentUrl("url1");
    card.setAttachmentFilename("name1");

    card.attachAttachmentClick(function(oEvent) {
        equal(oEvent.getParameter("uid"), "uid1");
        equal(oEvent.getParameter("url"), "url1");
        equal(oEvent.getParameter("filename"), "name1");
        start();
    });

    card._handleAttachmentDownload.apply(btn);
});

test("full URL (incl. protocol) recognized", function() {
    var card = this.card;
    ok (card._isFullUrl("http://www.sap.com"), "http://www.sap.com is a full URL");
    ok (!card._isFullUrl("www.sap.com"), "www.sap.com is not a full URL");
});

test("short URL (w/o protocol) recognized", function() {
    var card = this.card;
    ok (!card._isShortUrl("http://www.sap.com"), "http://www.sap.com is not a short URL");
    ok (card._isShortUrl("www.sap.com"), "www.sap.com is a short URL");
});

test("email recognized", function() {
    //valid email
    var card = this.card;
    var testToTest = "teddy.bear@sap.com";
    ok (card._isEmail(testToTest), testToTest + " is an email address");
    //no @ sign
    testToTest = "tomcat_at_sap.com";
    ok (!card._isEmail(testToTest), testToTest + " is an not an email address");
    //no domain suffix
    testToTest = "mickey.Mouse@noDomain";
    ok (!card._isEmail(testToTest), testToTest + " is an not an email address");
    //domain suffix is longer than 5 characters
    testToTest = "dolly.sheep@long.domain";
    ok (!card._isEmail(testToTest), testToTest + " is an not an email address");
    //illegal character used
    testToTest = "do$ald.duck@sap.com";
    ok (!card._isEmail(testToTest), testToTest + " is an not an email address");
});


module("note taker card rendering", {
    setup: function() {

        // JSON data
        this.oJsonData = {
            header : "Card title",
            body : "Card body"
        };

        // JSON model
        this.oJsonModel = new sap.ui.model.json.JSONModel();
        this.oJsonModel.setData(this.oJsonData);

        // Get the control and set binding
        this.card = sap.ui.getCore().byId("NTCR1");
        this.card.bindProperty("header", "/header");
        this.card.bindProperty("body", "/body");
        this.card.setModel(this.oJsonModel);

        this.superOnAfterRendering = this.card.onAfterRendering || function(){};

        this.eColors = {
            NEUTRAL:    {value : 1, codeHEX: "#999999", codeRGB: "rgb(153, 153, 153)"},
            GREEN:      {value : 2, codeHEX: "#007833", codeRGB: "rgb(0, 120, 51)"},
            RED:        {value : 3, codeHEX: "#cc1919", codeRGB: "rgb(204, 25, 25)"}
        };
        this.fnAssertColor = function(oJQueryObject, eColor, sMessage) {
            if (eColor) {
                var borderColor = oJQueryObject.css("border-top-color");
                ok(borderColor == eColor.codeRGB || borderColor == eColor.codeHEX, sMessage);
            }
        }
    },

    teardown: function() {
        this.card.onAfterRendering = this.superOnAfterRendering;

        this.card.setThumbUp(false);
        this.card.setThumbDown(false);
    }
});

test("card is rendered", function() {
   ok($("#contentArea").html(), "content area is not empty");
});

asyncTest("header is rendered", 1, function() {
    var sHeader = this.oJsonData.header;
    setTimeout( function() {
        equal($("#contentArea").find("div.sapSuiteUiCommonsNoteTakerCardHeader label").text(),
              sHeader,
              "header '" + sHeader + "' rendered to the page");
        start();
    }, 10);
});

asyncTest("body is rendered", 1, function() {
    var sBody = this.oJsonData.body;
    setTimeout( function() {
        equal($("#contentArea").find("div.sapSuiteUiCommonsNoteTakerCardBody").text(),
              sBody,
              "body text '" + sBody + "' rendered to the page");
        start();
    }, 10);
});

asyncTest("full link is rendered as link", 1, function() {

    // JSON data with full URL
     var oJsonDataWithFullUrl = {
        header : "Card title",
        body : "http://www.sap.com"
    };
    this.oJsonModel.setData(oJsonDataWithFullUrl);

    setTimeout( function() {
        var iAnchors = $("#contentArea").find("div.sapSuiteUiCommonsNoteTakerCardBody").find("a").length;
        ok(iAnchors, "Anchor tag(s) found: " + iAnchors);
        start();
    }, 10);
});

asyncTest("short link is rendered as link", 1, function() {

    // JSON data with short URL
    var oJsonDataWithShortUrl = {
        header : "Card title",
        body : "www.sap.com"
    };
    this.oJsonModel.setData(oJsonDataWithShortUrl);

    setTimeout( function() {
        var iAnchors = $("#contentArea").find("div.sapSuiteUiCommonsNoteTakerCardBody").find("a").length;
        ok(iAnchors, "Anchor tag(s) found: " + iAnchors);
        start();
    }, 10);
});

asyncTest("email is rendered as link", 1, function() {

    // JSON data with email
    var oJsonDataWithEmail = {
        header : "Card title",
        body : "dummy.user@sap.com"
    };
    this.oJsonModel.setData(oJsonDataWithEmail);

    setTimeout( function() {
        var iAnchors = $("#contentArea").find("div.sapSuiteUiCommonsNoteTakerCardBody").find("a").length;
        ok(iAnchors, "Anchor tag(s) found: " + iAnchors);
        start();
    }, 10);
});

test("truncated header calculation", function() {
    var sLongHeader = "_a34567890_b34567890_c34567890_d34567890_e345";
    equal(sap.suite.ui.commons.NoteTakerCardRenderer.getTruncatedHeader(sLongHeader), "_a34567890_b34567...");
});

asyncTest("truncated header has tooltip", function() {
    var sLongHeader = "_a34567890_b34567890_c34567890_d34567890_e345";

    // JSON data with long header
    var oJsonDataWithLongHeader = {
        header : sLongHeader,
        body : "Card body"
    };
    this.oJsonModel.setData(oJsonDataWithLongHeader);

    expect(2);
    setTimeout( function() {
        var oHeaderLabel = $("#contentArea").find("div.sapSuiteUiCommonsNoteTakerCardHeader").find("label");

        var sLabelTitle = oHeaderLabel.attr("title");
        equal(sLabelTitle, sLongHeader, "tooltip is correct" );

        var sLabelText = oHeaderLabel.text();
        equal(sLabelText, sap.suite.ui.commons.NoteTakerCardRenderer.getTruncatedHeader(sLongHeader),
              "header text is correct");
        start();
    }, 10);
});

asyncTest("open overlay in view mode", function() {
    var card = this.card;
    var fnAssert = function () {
        ok(true, "Overlay was opened in view mode");
        card._closeOverlay();
    };
    var fnResume = function () {
        card._oOverlayCard._oPopup.detachOpened(fnAssert);
        card._oOverlayCard._oPopup.detachClosed(fnResume);
        start();
    };

    card._oOverlayCard._oPopup.attachOpened(fnAssert);
    card._oOverlayCard._oPopup.attachClosed(fnResume);

    card._openOverlay();
});

asyncTest("open overlay in edit mode", function() {
    var card = this.card;
    var fnAssert = function () {
        ok(true, "Overlay was opened in view mode");
        card._closeOverlay();
    };
    var fnResume = function () {
        card._oOverlayCard._oPopup.detachOpened(fnAssert);
        card._oOverlayCard._oPopup.detachClosed(fnResume);
        start();
    };

    card._oOverlayCard._oPopup.attachOpened(fnAssert);
    card._oOverlayCard._oPopup.attachClosed(fnResume);

    card._openOverlay(true);
});

asyncTest("save/edit functions switches overlay mode", function() {
    expect(3);
    var card = this.card;
    var fnAssert = function () {
        strictEqual(card._oOverlayCard.bEditMode, false, "view mode");
        card._fnEdit();
        strictEqual(card._oOverlayCard.bEditMode, true, "edit mode");
        card._fnSave();
        strictEqual(card._oOverlayCard.bEditMode, false, "back to mode");
        card._closeOverlay();
    };
    var fnResume = function () {
        card._oOverlayCard._oPopup.detachOpened(fnAssert);
        card._oOverlayCard._oPopup.detachClosed(fnResume);
        start();
    };

    card._oOverlayCard._oPopup.attachOpened(fnAssert);
    card._oOverlayCard._oPopup.attachClosed(fnResume);

    card._openOverlay(); // view mode
});

test("edit button exists", function() {
    var buttonEdit = $("#NTCR1-edit-button").get();
    notDeepEqual(buttonEdit, [], "edit button found: " + buttonEdit );
});

asyncTest("if body text doesn't exceed default value then view all link is absent", function() {
	var aLongBody = new Array(this.card.getViewAllTrigger() + 1);	// +1 - exact trigger value

	this.card.setBody(aLongBody.join("a"));

	setTimeout( function() {
		equal($("#NTCR1-viewAll").length, 0, "viewAll division not found");
		start();
	}, 10);
});

asyncTest("if body text exceeds default value then view all link appears", function() {
	var aLongBody = new Array(this.card.getViewAllTrigger() + 2);	// +2 - trigger value + 1

	this.card.setBody(aLongBody.join("a"));

	setTimeout( function() {
		equal($("#NTCR1-viewAll-link").length, 1, "viewAll link found");
		start();
	}, 10);
});

asyncTest("if body text doesn't exceed specified value then view all link is absent", function() {
	this.card.setViewAllTrigger(20);

	var aLongBody = new Array(21);	// +1 - exact trigger value

	this.card.setBody(aLongBody.join("a"));

	setTimeout( function() {
		equal($("#NTCR1-viewAll").length, 0, "viewAll division not found when body length 20");
		start();
	}, 10);
});

asyncTest("if body text exceeds specified value then view all link appears", function() {
	this.card.setViewAllTrigger(20);

	var aLongBody = new Array(22);	// +2 - trigger value + 1

	this.card.setBody(aLongBody.join("a"));

	setTimeout( function() {
		equal($("#NTCR1-viewAll-link").length, 1, "viewAll link found when body length 21");
		start();
	}, 10);
});

test("the card is marked 'No tags' when it has empty tag list", function() {
    var msg = this.card._rb.getText("NOTETAKERCARD_LABEL_TAGS_EMPTY");
    equal($("#NTCR1-tag-list").text(), msg, "The card without tags is marked: " + msg);
});

asyncTest("the card shows tag if the note has one", function() {
    this.card.setTags(["PRM"]);

    setTimeout( function() {
        equal($("#NTCR1-tag-list").text(), "Tags: PRM", "The card shows its tags.");
        start();
    }, 10);
});

asyncTest("the card shows tags sorted if the note has several", function() {
    this.card.setTags(["PRM", "1on1", "360"]);

    setTimeout( function() {
        equal($("#NTCR1-tag-list").text(), "Tags: 1on1 360 PRM", "The card shows its tags sorted.");
        start();
    }, 10);
});

test("Test delete event", function() {
    var isCalled = false;
    this.card.attachDeleteNote(function (oEvent) {
        var title =  oEvent.getParameter("title");
        equals(title, "Card title", "Title of deleted card is correct");
        var body = oEvent.getParameter("body");
        equals(body, "Card body", "Body of deleted card is correct");
        isCalled = true;
    });
    this.card._handleDeleteClick();
    ok(isCalled, "Delete is event is called");
});

test("Test wrapThumbToDiv", function () {
	var sHtml;
    var sId = "thumb";
	
	this.card.setThumbUp(true);
	this.card.setThumbDown(false);
    sHtml = this.card._wrapThumbToDiv(sId);
	equal(sHtml, "<div id='" + sId + "' class='sapSuiteUiCommonsNoteTakerCardThumbUp' title='" +
			this.card._rb.getText("NOTETAKERCARD_ICON_THUMB_UP_TOOLTIP") + "'></div>");
	
	this.card.setThumbUp(false);
	this.card.setThumbDown(true);
	sHtml = this.card._wrapThumbToDiv(sId);
	equal(sHtml, "<div id='" + sId + "' class='sapSuiteUiCommonsNoteTakerCardThumbDown' title='" +
			this.card._rb.getText("NOTETAKERCARD_ICON_THUMB_DOWN_TOOLTIP") + "'></div>");
	
	this.card.setThumbUp(false);
	this.card.setThumbDown(false);
	sHtml = this.card._wrapThumbToDiv(sId);
	equal(sHtml, "<div id='" + sId + "'></div>");
});

asyncTest("color indication: basic flow #1, card", function() {
    expect(2);

    var card = this.card;
    var that = this;
    var superOAR = this.superOnAfterRendering;

    card.onAfterRendering = function() {
        superOAR.call(card);
        var cardStyle = $(".sapSuiteUiCommonsNoteTakerCard");
        var borderWidth = cardStyle.css("border-top-width");
        equal(borderWidth, "4px", "4px border");
        that.fnAssertColor( cardStyle, that.eColors.GREEN, "green card");
        start();
    };

    card.setThumbUp(true);
});

asyncTest("color indication: basic flow #1, overlay", function() {
    expect(2);
    var card = this.card;
    var that = this;
    var fnAssert = function () {
        var overlayStyle = $(".sapUiUx3OCContent");
        var borderWidth = overlayStyle.css("border-top-width");
        equal(borderWidth, "4px", "4px border");
        that.fnAssertColor( overlayStyle, that.eColors.GREEN, "green overlay");

        card._closeOverlay();
    };
    var fnResume = function () {
        card._oOverlayCard._oPopup.detachOpened(fnAssert);
        card._oOverlayCard._oPopup.detachClosed(fnResume);
        start();
    };

    card._oOverlayCard._oPopup.attachOpened(fnAssert);
    card._oOverlayCard._oPopup.attachClosed(fnResume);

    card.setThumbUp(true);
    card._openOverlay();
});

asyncTest("color indication: alt flow #2, card", function() {
    expect(2);

    var card = this.card;
    var that = this;
    var superOAR = this.superOnAfterRendering;

    card.onAfterRendering = function() {
        superOAR.call(card);
        var cardStyle = $(".sapSuiteUiCommonsNoteTakerCard");
        var borderWidth = cardStyle.css("border-top-width");
        equal(borderWidth, "4px", "4px border");
        that.fnAssertColor( cardStyle, that.eColors.RED, "red card");
        start();
    };

    card.setThumbDown(true);
});

asyncTest("color indication: alt flow #2, overlay", function() {
    expect(3);
    var card = this.card;
    var that = this;

    var fnAssertRed = function () {
        // STEP 1. Assert red on 1st overlay opening
        that.fnAssertColor( $(".sapUiUx3OCContent"), that.eColors.RED, "red overlay");

        card.setThumbDown(false);
        card._closeOverlay();
    };
    card._oOverlayCard._oPopup.attachOpened(fnAssertRed);

    var fnResumeAfterRed = function () {
        // STEP 2. Assert grey on card after overlay 's closed
        that.fnAssertColor( $(".sapSuiteUiCommonsNoteTakerCard"), that.eColors.NEUTRAL, "grey card");

        card._oOverlayCard._oPopup.detachOpened(fnAssertRed);
        card._oOverlayCard._oPopup.detachClosed(fnResumeAfterRed);
        card._oOverlayCard._oPopup.attachOpened(fnAssertGrey);
        card._oOverlayCard._oPopup.attachClosed(fnResumeAfterGrey);
        card._openOverlay(true);
    };
    card._oOverlayCard._oPopup.attachClosed(fnResumeAfterRed);

    var fnAssertGrey = function () {
        // STEP 3. Assert grey on 2nd overlay opening
        that.fnAssertColor( $(".sapUiUx3OCContent"), that.eColors.NEUTRAL, "grey overlay");

        card._closeOverlay();
    };

    var fnResumeAfterGrey = function () {
        card._oOverlayCard._oPopup.detachOpened(fnAssertGrey);
        card._oOverlayCard._oPopup.detachClosed(fnResumeAfterGrey);
        start();
    };

    card.setThumbDown(true);
    card._openOverlay(true);
});

test("color indication: alt flow #3, card", function() {
    var card = this.card;
    var cardStyle = $(".sapSuiteUiCommonsNoteTakerCard");
    var borderWidth = cardStyle.css("border-top-width");
    equal(borderWidth, "4px", "4px border");
    this.fnAssertColor( cardStyle, this.eColors.NEUTRAL, "grey card");
});

asyncTest("color indication: alt flow #3, overlay", function() {
    expect(3);
    var card = this.card;
    var that = this;

    var fnAssertRed = function () {
        // STEP 1. Assert grey on 1st overlay opening
        that.fnAssertColor( $(".sapUiUx3OCContent"), that.eColors.NEUTRAL, "grey overlay");

        // Change Thumbs according to test plan
        card.setThumbDown(true);
        card.setThumbDown(false);
        card.setThumbUp(true);
        card._closeOverlay();
    };
    card._oOverlayCard._oPopup.attachOpened(fnAssertRed);

    var fnResumeAfterRed = function () {
        // STEP 2. Assert green on card after overlay 's closed
        that.fnAssertColor( $(".sapSuiteUiCommonsNoteTakerCard"), that.eColors.GREEN, "green card");

        card._oOverlayCard._oPopup.detachOpened(fnAssertRed);
        card._oOverlayCard._oPopup.detachClosed(fnResumeAfterRed);
        card._oOverlayCard._oPopup.attachOpened(fnAssertGrey);
        card._oOverlayCard._oPopup.attachClosed(fnResumeAfterGrey);
        card._openOverlay(true);
    };
    card._oOverlayCard._oPopup.attachClosed(fnResumeAfterRed);

    var fnAssertGrey = function () {
        // STEP 3. Assert green on 2nd overlay opening
        that.fnAssertColor( $(".sapUiUx3OCContent"), that.eColors.GREEN, "green overlay");

        card._closeOverlay();
    };

    var fnResumeAfterGrey = function () {
        card._oOverlayCard._oPopup.detachOpened(fnAssertGrey);
        card._oOverlayCard._oPopup.detachClosed(fnResumeAfterGrey);
        start();
    };

    card._openOverlay(true);
});
