sap.ui.jsfragment("sap.ui.core.fragmenttest.MultiRootFragment", {

	createContent: function(oController) {
		var oLabel = new sap.m.Label({text:"These controls are within one multi-root Fragment:"});

		var oInput = new sap.m.Input({width:"5em"});

		var oButton = new sap.m.Button({text: "Still in the same Fragment"});

		return [ oLabel, oInput, oButton ];
	}

});