jQuery.sap.require("util.Const");

sap.ui.controller("view.Input", {

	onInit : function() {

		// set model
		var model = new sap.ui.model.json.JSONModel({
			bestBefore : "2012-03-13" // DateTimeInput cannot cope with null value
		});
		this.getView().setModel(model);
		
		// fill countries
		var select = this.byId("country");
		select.addItem(new sap.ui.core.Item({text : util.Formatter.country("GR"), key : "GR"}));
		select.addItem(new sap.ui.core.Item({text : util.Formatter.country("NL"), key : "NL"}));
		select.addItem(new sap.ui.core.Item({text : util.Formatter.country("NZ"), key : "NZ"}));
		select.addItem(new sap.ui.core.Item({text : util.Formatter.country("NO"), key : "NO"}));
		select.addItem(new sap.ui.core.Item({text : util.Formatter.country("MX"), key : "MX"}));
	},
	
	validate: function() {
		
		var name = this.byId("name").getValue();
		var nameValid = (name && name.length > 0);
		this.byId("name").setValueState((nameValid) ? sap.ui.core.ValueState.None : sap.ui.core.ValueState.Error);
		
		var vendor = this.byId("vendor").getValue();
		var vendorValid = (vendor && vendor.length > 0);
		this.byId("vendor").setValueState((vendorValid) ? sap.ui.core.ValueState.None : sap.ui.core.ValueState.Error);
		
		var price = this.byId("price").getValue();
		var priceValid = (price && price >= 0);
		this.byId("price").setValueState((priceValid) ? sap.ui.core.ValueState.None : sap.ui.core.ValueState.Error);
		
		var bestBefore = this.byId("bestBefore").getValue();
		var bestBeforeValid = (bestBefore && (NaN !== Date.parse(bestBefore)));
		this.byId("bestBefore").setValueState((bestBeforeValid) ? sap.ui.core.ValueState.None : sap.ui.core.ValueState.Error);
		
		return nameValid && vendorValid && priceValid && bestBeforeValid;
	},
	
	getResultFruit : function() {
		var result = this.getView().getModel().getData();
		if (!result.id) {
			result.id = jQuery.sap.uid();
		}
		if (!result.state) {
			result.state = util.Const.state.DIRTY;
		}
		if (!result.imgS) {
			result.imgS = "img/fruit/newS.png";
		}
		if (!result.imgL) {
			result.imgL = "img/fruit/newL.png";
		}
		return result;
	},
	
	setResultFruit: function(existingFruit) {
		var data = (existingFruit === undefined) ? {} : existingFruit;
		this.getView().getModel().setData(data);
	},
});