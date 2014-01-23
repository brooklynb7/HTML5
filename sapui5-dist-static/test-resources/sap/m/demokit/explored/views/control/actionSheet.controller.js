sap.ui.controller("views.control.actionSheet", {

	onExit : function () {
		if (this._actionSheet) {
			this._actionSheet.destroy();
		}
	},

	handleOpen : function (evt) {

		// create action sheet only once
		if (!this._actionSheet) {
			this._actionSheet = new sap.m.ActionSheet({
				title: "Choose Your Action",
				showCancelButton: true,
				placement: sap.m.PlacementType.Bottom,
				buttons: [
					new sap.m.Button({
						icon: "sap-icon://decline",
						text: "Reject"
					}),
					new sap.m.Button({
						icon: "sap-icon://accept",
						text: "Accept"
					}),
					new sap.m.Button({
						icon: "sap-icon://email",
						text: "EMail"
					}),
					new sap.m.Button({
						icon: "sap-icon://forward",
						text: "Forward"
					}),
					new sap.m.Button({
						icon: "sap-icon://delete",
						text: "Delete"
					})
				]
			});
		}

		// open action sheet
		this._actionSheet.openBy(evt.getSource());
	}
});