//load the global data model
var oJSONDataModel = new sap.ui.model.json.JSONModel("js/splitapp/model/data.json");
sap.ui.getCore().setModel(oJSONDataModel);

//load the global image source model
var oImgModel = new sap.ui.model.json.JSONModel("js/splitapp/model/img.json");
sap.ui.getCore().setModel(oImgModel, "img");

jQuery.sap.registerModulePath("view", "js/splitapp/view/");
// create app view and add to html
sap.ui.jsview("app", "view.App").placeAt("content");