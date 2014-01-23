jQuery.sap.require("sap.ui.core.Fragment");

sap.ui.controller("sap.ui.core.fragmenttest.TestFragment", {

	onInit: function(oEvent) {

	},

	openXMLDialog: function(oEvent) {
		this.oDialog = sap.ui.fragment("sap.ui.core.fragmenttest.Dialog", "XML", this);
		this.oDialog.setRightButton(new sap.m.Button({text:"Cancel", press:jQuery.proxy(this.onCancel, this)}));

		this.oDialog.open();
	},
	
	openXMLDialogWithId: function(oEvent) {
		var sKnownId = sap.ui.core.Fragment.getMetadata().uid();
		this.oDialog = sap.ui.xmlfragment(sKnownId, "sap.ui.core.fragmenttest.DialogWithId", this);
		this.oDialog.setRightButton(new sap.m.Button({text:"Cancel", press:jQuery.proxy(this.onCancel, this)}));

		this.oDialog.open();
	},
	
	openHTMLDialog: function(oEvent) {
		this.oDialog = sap.ui.fragment("sap.ui.core.fragmenttest.Dialog", "HTML", this);
		this.oDialog.setRightButton(new sap.m.Button({text:"Cancel", press:jQuery.proxy(this.onCancel, this)}));

		this.oDialog.open();
	},
	
	openHTMLDialogWithId: function(oEvent) {
		var sKnownId = sap.ui.core.Fragment.getMetadata().uid();
		this.oDialog = sap.ui.htmlfragment(sKnownId, "sap.ui.core.fragmenttest.DialogWithId", "HTML", this);
		this.oDialog.setRightButton(new sap.m.Button({text:"Cancel", press:jQuery.proxy(this.onCancel, this)}));

		this.oDialog.open();
	},

	openPopover: function(oEvent) {
		this.oPopover = sap.ui.fragment("sap.ui.core.fragmenttest.Popover", "JS", this);

		this.oPopover.openBy(oEvent.getSource());
	},

	onOk: function(){
		alert("OK pressed");
		this.oDialog.close();
	},

	onCancel: function(){
		this.oDialog.close();
	},

	onTry: function() {
		alert("You tried and it worked");
	}


});