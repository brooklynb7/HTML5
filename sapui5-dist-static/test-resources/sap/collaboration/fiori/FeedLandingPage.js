jQuery.sap.getObject("sap.ui.demokit", 0)._supportedThemes = ["sap_bluecrystal"];

// Helper Functions
//@bsp:registerModulePath
//@bsp:includeLibraryCollaboration
var createFeedPage = function(id, title) {
	return new sap.m.Page(
		id,
		{
			title: title,
			showHeader: true,
			showNavButton: true
		}
	);
}

var createFeedComponentContainer = function(id) {
	return new sap.ui.core.ComponentContainer(id);
}


var createFeedComponent = function(id, settings) {
	return sap.ui.getCore().createComponent(
		{
			name: "sap.collaboration.components.fiori.feed",
			id: id,
			settings: settings
		}
	);
}


// The createFeedPage Function creates a Feed Page meant to be navigated to
// by clicking on a Feed Tile. Feed Tiles are found in the Tile Page.
// The createFeedPage method takes two arguments:
// feedPageIdPrefix : String used
// feedPageId : String used to identify the Feed Page.
// feedComponentContainerId : String used to identify the Fiori Feed Component Container.
// feedComponentId : String used to identify the Fiori Feed Component.
// feedPageComponentSettings : This is an object containing the settings to be passed to the sap.collaboration.components.fiori.feed constructor
// function, which creates a sap.collaboration.components.fiori.feed component.
// feedPageTitle : String used as the Feed Page's Title.
var oFeedComponent;

var createFeedPageAndFeedPageContent = function(feedPageId, feedComponentContainerId, feedComponentId, feedComponentSettings, feedPageTitle) {
	var feedPage = createFeedPage(feedPageId, feedPageTitle);
	var feedComponentContainer = createFeedComponentContainer(feedComponentContainerId);
	var feedComponent = createFeedComponent(feedComponentId, feedComponentSettings);
	oFeedComponent = feedComponent;
	feedComponentContainer.setComponent(feedComponent);
	feedPage.addContent(feedComponentContainer);
	return feedPage;
}





// Global Variables
var proxy = "/proxy/https";
var contextPath = "/" + window.location.pathname.split("/")[1];
//if contexPath does not begin with /uilib-sample, use /uilib-sample
if (contextPath.toLowerCase().indexOf("/uilib-sample") != 0)
	contextPath = "/uilib-sample";
var hostUrl = window.location.protocol + "//" + window.location.host + contextPath + proxy;
// create model

var oDataServicePath =
	//"/vmw3814.wdf.sap.corp:44320/sap/opu/odata/sap/sm_integration_srv_u31_000";
	"/vmw3911.wdf.sap.corp:44335/sap/opu/odata/sap/SM_INTEGRATION_SRV";
	//"/vmw3815.wdf.sap.corp:44309/sap/opu/odata/sap/SM_INTEGRATION_SRV"; 

var oDataServiceUrl = hostUrl + oDataServicePath;
//@bsp:odataServiceUrl
	
// oDataServiceUrl = "https://integration3.sapjam.com/OData/OData.svc";
gEmptyObject = {};

gDefaultMode = "split";
gDefaultFeedType = "";





// Create App object.
var app = new sap.m.App();





// Page & Page Element Ids, Id Prefixes, and Page Titles

	// +++++++++++ Landing Page Id, Title, and Element Ids Start

		var landingPageId = "landingPage";

		var landingPageTitle = "Application Settings";

		var landingPageUrlInputId = "landingPageUrlInput";
		var landingPageModeInputId = "modeInput";
		var landingPageFeedTypeInputId = "feedTypeInput";
		var landingPageObjectInputId = "landingPageObjectInput";
		var landingPageGroupIdsInputId = "groupIdsInput";
		var landingPageObjectTypeInputId = "objectTypeInput"
		var landingPageGoButtonId = "landingPageGoButton";
		

	// ----------- Landing Page Id, Title, and Element End

	// +++++++++++ Tile Page Id, Title, and Element Ids Start

		var tilePageId = "tilePage";

		var tilePageTitle = "Feed Tiles";

		var tilePageFeedTileContatinerId = "tilePageFeedTileContainer";
		var tilePageFeedTile1Id = "tilePageFeedTile1";
		var tilePageFeedTile2Id = "tilePageFeedTile2";

	// ----------- Tile Page & Page Element Ids, Id Prefixes, and Page Title End

	// +++++++++++ Feed Page 1 Id, Title, and Element Ids Start

		var feedPage1Id = "feedPage1";
		var feedPage1Title = "Feed 1"

		var feedPage1FeedComponentContainerId = "feedPage1FeedComponentContainer";
		var feedPage1FeedComponentId = "feedPage1FeedComponent";

	// ----------- Feed Page 1 Id, Title, and Element Ids End

	// +++++++++++ Feed Page 2 Id, Title, and Element Ids Start

		var feedPage2Id = "feedPage2";
		var feedPage2Title = "Feed 2"

		var feedPage2FeedComponentContainerId = "feedPage2FeedComponentContainer";
		var feedPage2FeedComponentId = "feedPage2FeedComponent";

	// ----------- Feed Page 2 Id, Title, and Element Ids End





// Create Pages

// +++++++++++ Landing Page Start

	// Create the landing page object.
	var landingPage = new sap.m.Page(
		landingPageId,
		{ title: landingPageTitle }
	);

	// Create a text field for the URL to be passed to the tile page.
	var landingPageUrlInput = new sap.m.Input(
		landingPageUrlInputId,
		{
			type: sap.m.InputType.Url,
			placeholder: oDataServiceUrl
		}
	);	
	
	// Create list with supported modes
	var oComponentModeSelect = new sap.m.Select(landingPageModeInputId, {
		items: [
		        new sap.ui.core.Item({ key: "0", text: "split"}),
		        new sap.ui.core.Item({ key: "1", text: "widget"})
		        ]
	});
	
	// Create list with supported feed types
	var oFeedTypeSelect = new sap.m.Select(landingPageFeedTypeInputId, {
		items: [
		        new sap.ui.core.Item({ key: "0", text: ""}),
		        new sap.ui.core.Item({ key: "1", text: "follows"}),
		        new sap.ui.core.Item({ key: "2", text: "company"}),
		        new sap.ui.core.Item({ key: "3", text: "group"}),
		        new sap.ui.core.Item({ key: "4", text: "objectGroup"}),
		        new sap.ui.core.Item({ key: "5", text: "object"})
		        ]
	});

	// Create a text field for the object id to be passed to the tile page.
	var landingPageObjectIdInput = new sap.m.Input(
		landingPageObjectInputId,
		{
			type: sap.m.InputType.Url,
			placeholder: "Business Object ID"
		}
	);

	var landingPageGroupIdsInput = new sap.m.Input(
		landingPageGroupIdsInputId,
		{
			type: sap.m.InputType.Text,
			placeholder: "Comma separated list of groups"
		}
	);
	
	var landingPageObjectTypeInput = new sap.m.Input(
			landingPageObjectTypeInputId,
			{
				type: sap.m.InputType.Text,
				placeholder: "Business Object Type"
			}
		);

	// Create a container for the URL and object id to be passed to the tile page.
	var landingPageSettingsForm = new sap.ui.layout.form.SimpleForm(
		{
			minWidth: 1024,
			maxContainerCols: 2,
			editable: true,
			content: [ 
				//new sap.m.Label({ text: "Settings" }),
				new sap.m.Label({ text: "OData Service Url" }),
				landingPageUrlInput,
		        new sap.m.Label({ text: "Mode" }),
		        oComponentModeSelect,
		        new sap.m.Label({ text: "Feed Type" }),
		        oFeedTypeSelect,
				new sap.m.Label({ text: "Group IDs" }),
				landingPageGroupIdsInput,
				new sap.m.Label({ text: "Object ID" }),
				landingPageObjectIdInput,
				new sap.m.Label({ text: "Object Type" }),
				landingPageObjectTypeInput
		    ]
		}
	);

	// Create a button that will navigate and pass the contents of the URL and object id
	// text fields to the tile page.
	var landingPageGoButton = new sap.m.Button(
		landingPageGoButtonId,
		{
			text: "GO!",
		}
	);

	// Add the elements of the landing page to the landing page.
	landingPage.addContent(landingPageSettingsForm);
	landingPage.addContent(landingPageGoButton);

// ----------- Landing Page End

// +++++++++++ Tile Page Start

	// Create Tile Page Object.
	var tilePage = new sap.m.Page(
		tilePageId,
		{
			title: tilePageTitle
		}
	);

	// Create Feed Tiles Container
	var tilePageFeedTileContainer = new sap.m.TileContainer(
		tilePageFeedTileContatinerId,
		{}
	);

	// Create Feed Tiles

		// Create Feed Tile 1
		var tilePageFeedTile1 = new sap.m.StandardTile(
			tilePageFeedTile1Id,
			{
				icon: "sap-icon://feed",
				infoState: "Success",
				title: "SAP Jam Feed",
				numberUnit: "Notifications"
			}
		);

		// Create Feed Tile 2
		var tilePageFeedTile2 = new sap.m.StandardTile(
			tilePageFeedTile2Id,
			{
				icon: "sap-icon://feed",
				infoState: "Success",
				title: "Testing Busy Dialog"
				
			}
		);

	// Add Feed Tiles to Feed Tiles Container
	tilePageFeedTileContainer.addTile(tilePageFeedTile1);
	tilePageFeedTileContainer.addTile(tilePageFeedTile2);

	// Add the elements of the Tile Page to the Tile Page
	tilePage.addContent(tilePageFeedTileContainer);

	// Make the navigation button visible for the tile page.
	tilePage.setShowNavButton(true);

	// Scrolling must be turned off to properly display the tiles.
	tilePage.setEnableScrolling(false);

// ----------- Tile Page End

// +++++++++++ Feed Page 1 Start

	// Feed Page 1 will be generated on the fly.
	// See the Tile 1 Press Event Handler.
	var feedPage1 = gEmptyObject;

// ----------- Feed Page 1 End

// +++++++++++ Feed Page 2 Start

	// Feed Page 2 will be generated on the fly.
	// See the Tile 2 Press Event Handler.
	var feedPage2 = gEmptyObject;

// ----------- Feed Page 2 End





// Event Handlers

// Common Event Handlers

	var backNavButtonPressEventHandler = function() {
		app.back();
	};

// Create Page & Page Element Event Handlers

// +++++++++++ Landing Page Element Event Handlers Start

	var landingPageGoButtonPressEventHandler = function() {
		var ODataUrl = landingPageUrlInput.getValue();
		if (ODataUrl == "") {
			ODataUrl = oDataServiceUrl;
		}

		var mode = oComponentModeSelect.getSelectedItem().getText();
		if (mode == "") {
			mode = gDefaultMode;
		}

		var feedType = oFeedTypeSelect.getSelectedItem().getText();
		if (feedType == "") {
			feedType = gDefaultFeedType;
		}

		var groupIds = landingPageGroupIdsInput.getValue();
		
		var objectId = landingPageObjectIdInput.getValue();

		var objectType = landingPageObjectTypeInput.getValue();

		var settings = {
			oDataServiceUrl : ODataUrl,
			mode : mode,
			feedType : feedType,
			groupIds: groupIds,
			object:{
    			id: objectId,
    			type: objectType,
    			data: []
    		}			
		};
		
		// Tells the App to navigate to the tile page
		// and pass the tile page the data in the settings object.
		app.to(
			tilePageId,
			"slide",
			settings
		)
	};

// ----------- Landing Page & Page Element Event Handlers End

// +++++++++++ Tile Page & Page Element Event Handlers Start

	var tilePageBeforeShowEventHandler = function(onBeforeShowEvent) {
		if (onBeforeShowEvent.isTo) {
//			var oldUrl = "";
//			if (tilePage.settings) {
//				oldUrl = tilePage.settings.oDataServiceUrl;
//			}
			tilePage.settings = onBeforeShowEvent.data;
//			if (oldUrl != tilePage.settings.oDataServiceUrl) {
//				tilePage.sapUIModel = new sap.ui.model.odata.ODataModel(tilePage.settings.oDataServiceUrl, true, null, null, null, true);
//			 	var busyDialog = (busyDialog) ? busyDialog : new sap.m.BusyDialog( {text:'Connecting to Jam', title: 'Loading'} );
//			
//				tilePage.sapUIModel.attachRequestSent(function(){ busyDialog.open(); });
//				tilePage.sapUIModel.attachRequestCompleted(function(){ busyDialog.close(); });
//				tilePage.sapUIModel.attachRequestFailed(function(){ busyDialog.close(); });
//			}
			
		}
	};

	var tilePageFeedTile1PressEventHandler = function() {

		var feedPage1FeedComponentSettings = {
				oDataServiceUrl: tilePage.settings.oDataServiceUrl,
				mode: tilePage.settings.mode,
				feedType: tilePage.settings.feedType,
				groupIds: tilePage.settings.groupIds,
				object: tilePage.settings.object
		};
		
		
		//if (feedPage1 == gEmptyObject) {
		if (feedPage1 !== gEmptyObject)
			sap.ui.getCore().byId(feedPage1Id).destroy();
			
			feedPage1 = createFeedPageAndFeedPageContent(feedPage1Id, feedPage1FeedComponentContainerId, feedPage1FeedComponentId, feedPage1FeedComponentSettings, feedPage1Title);
			feedPage1.attachNavButtonPress(backNavButtonPressEventHandler);
			app.addPage(feedPage1);
		/*}
		else {
			
			// only rerender if the settings have changed
			if( JSON.stringify(feedPage1FeedComponentSettings) != JSON.stringify(tilePageFeedTile1.settings) ){
				oFeedComponent.setBusinessObject(feedPage1FeedComponentSettings.businessObject);
				oFeedComponent.setOdataServiceUrl(feedPage1FeedComponentSettings.odataServiceUrl);
				oFeedComponent.setMode(feedPage1FeedComponentSettings.mode);
				sap.ui.getCore().byId(feedPage1FeedComponentContainerId).rerender();
			}
		}*/
		
		tilePageFeedTile1.settings = feedPage1FeedComponentSettings;
		app.to(feedPage1Id, "slide");
	}

	var tilePageFeedTile2PressEventHandler = function() {
			console.log("read");
			tilePage.sapUIModel.fireRequestSent();
			tilePage.sapUIModel.read( "/Groups",null, null, true, function(){tilePage.sapUIModel.fireRequestCompleted();}, function(){tilePage.sapUIModel.fireRequestFailed();});
	};

// ----------- Tile Page & Page Element Event Handlers End

// +++++++++++ Feed Page 1 & Page Element Event Handlers Start

	// Because Feed Page 2 is created on the fly, we attach the its related
	// event handlers when it is created.
	// See the Feed Tile 1 Press Event Handler.

// ----------- Feed Page 1 & Page Element Event Handlers End

// +++++++++++ Feed Page 2 & Page Element Event Handlers Start

	// Because Feed Page 2 is created on the fly, we attach the its related
	// event handlers when it is created.
	// See the Feed Tile 2 Press Event Handler.

// ----------- Feed Page 2 & Page Element Event Handlers End





// Register Page Element Event Handlers to their Corresponding Page Elements

// +++++++++++ Landing Page & Page Element Event Handler Registrations Start

	// Go Button Press Event Handler Registration
	landingPageGoButton.attachPress(landingPageGoButtonPressEventHandler);

// ----------- Landing Page & Page Element Event Handler Registrations End

// +++++++++++ Tile Page & Page Element Event Handler Registrations Start

	// Before Show Page Event Handler Registration
	tilePage.addEventDelegate(
		{
			onBeforeShow: tilePageBeforeShowEventHandler
		}
	);

	// Navigation Button Press Event Handler Registration
	tilePage.attachNavButtonPress(backNavButtonPressEventHandler);

	// Feed Tile 1 Press Event Handler Registration
	tilePageFeedTile1.attachPress(tilePageFeedTile1PressEventHandler);

	// Feed Tile 2 Press Event Handler Registration
	tilePageFeedTile2.attachPress(tilePageFeedTile2PressEventHandler);

// ----------- Tile Page & Page Element Event Handler Registrations End

// +++++++++++ Feed Page 1 & Page Element Event Handler Registrations Start

	// Because Feed Page 1 is created on the fly, we can only attach
	// the nav button press event handler to the feed page when it's
	// created.
	// See the Feed Tile 1 Press Event Handler.

// ----------- Feed Page 1 & Page Element Event Handler Registrations End

// +++++++++++ Feed Page 2 & Page Element Event Handler Registrations Start

	// Because Feed Page 1 is created on the fly, we can only attach
	// the nav button press event handler to the feed page when it's
	// created.
	// See the Feed Tile 2 Press Event Handler.

// ----------- Feed Page 2 & Page Element Event Handler Registrations End





// Add Pages to App
app.addPage(landingPage);
app.addPage(tilePage);
// Feed Page 1 and 2 are created on the fly, and are therefore added to the app when they're created.
// See the Feed Tile 1 and 2 Press Event Handlers.





// Place App in Content DIV
app.placeAt("content");