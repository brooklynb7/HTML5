sap.ui.controller("view.Order", {

	onInit : function () {
		
		var model = new sap.ui.model.json.JSONModel({});
		this.getView().setModel(model);

		// handle data binding validation results
		sap.ui.getCore().attachValidationError(
			function (evt) {
				var element = evt.getParameter("element");
				if (element.setValueState) {
					element.setValueState(sap.ui.core.ValueState.Error);
				}
			}
		);
		sap.ui.getCore().attachValidationSuccess(
			function (evt) {
				var element = evt.getParameter("element");
				if (element.setValueState) {
					element.setValueState(sap.ui.core.ValueState.None);
				}
			}
		);
	},
	
	checkInput : function () {
		
		var view = this.getView();
		var inputs = [
			view.byId("inputName"),
			view.byId("inputAddress"),
			view.byId("inputMail"),
			view.byId("inputNumber")
		];
		
		// make sure all fields are not empty 
		// (this is not done by data binding validation
		//  as data binding only runs on changing values)
		jQuery.each(inputs, function (i, input) {
			if (!input.getValue()) {
				input.setValueState(sap.ui.core.ValueState.Error);
			}
		});

		// check that all fields are ok
		for (var i = 0 ; i < inputs.length ; i++) {
			if (inputs[i].getValueState() === sap.ui.core.ValueState.Error) {
				return false;
			}
		}
		return true;
	}
});