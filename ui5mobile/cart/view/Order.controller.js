jQuery.sap.require("sap.m.MessageBox");

sap.ui.controller("view.Order", {

	onInit : function() {
		var model = new sap.ui.model.json.JSONModel({});
		this.getView().setModel(model);	

		// handle data binding validation results
		sap.ui.getCore().attachValidationError(
			function(evt) {
				var element = evt.getParameter("element");
				if (element.setValueState) 
					element.setValueState(sap.ui.core.ValueState.Error);
			}
		);
		sap.ui.getCore().attachValidationSuccess(			
			function(evt) {
				var element = evt.getParameter("element");
				if (element.setValueState) {
					element.setValueState(sap.ui.core.ValueState.None);
				}
			}
		);
	},
	
	checkInput: function() {
		
		var view = this.getView();
		var inputs = [
			view.inputName,
			view.inputAddress,
			view.inputMail,
			view.inputTel,
			view.inputNumber
		];
		
		// make sure all fields are not empty 
		// (this is not done by data binding validation
		//  as data binding only runs on changing values)
		jQuery.each(inputs, function(i, input) {
			if (!input.getValue()) {
				input.setValueState(sap.ui.core.ValueState.Error);
			}
		});

		// check that all fields are ok
		for (var i=0 ; i < inputs.length ; i++) {
			if (inputs[i].getValueState() === sap.ui.core.ValueState.Error) {
				return false;
			}
		}
		return true;
	},
	
	navButtonTap : function(evt) { 
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back");
	},
	
	orderButtonTap : function (evt) {
		var inputValid = this.checkInput();
		if (inputValid) {
			this.getView().busyDialog.open();
			var proxy = jQuery.proxy(function() {
				this.getView().busyDialog.close();
			}, this);
			setTimeout(proxy, 3500);
		}
	},
	
	busyDialogClose : function(evt) {
		jQuery.sap.history.addVirtualHistory();
		sap.m.MessageBox.show(
			'The shopping cart has been ordered. You will receively shortly an eMail with further information.', 
			null, 
			"Confirmation",  
			[sap.m.MessageBox.Action.CLOSE],
			function(oAction) {
				// reset cart after order
				app.ref.CartView.getController().resetCart();
				// this will jump to the first entry in the browser history, i.e. bring you back to the home page
				jQuery.sap.history.backToHash("");
			}
		);
	}
});