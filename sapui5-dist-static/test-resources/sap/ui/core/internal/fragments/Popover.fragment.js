sap.ui.jsfragment("sap.ui.core.fragmenttest.Popover", {


	createContent: function(oController) {
		var oLabel = new sap.m.Label(this.createId("myJSFragmentPopoverLabel"), {text:"Hello JS Fragment"});


		var oPopover = new sap.m.Popover({

			placement: sap.m.PlacementType.Right,
			content: [oLabel],
			title: "My Popover",
			contentWidth: "20rem",
			contentHeight: "10rem",

		});


		return oPopover;
	}

});