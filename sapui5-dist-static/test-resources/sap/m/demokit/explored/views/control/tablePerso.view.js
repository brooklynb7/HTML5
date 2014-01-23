sap.ui.jsview("views.control.tablePerso", {

	oPersoService : {
		init : function (oPersId) {
			this._sPersistenceId = oPersId;
			this._oBundle = {};
		},

		getPersData : function () {
			var oDeferred = new jQuery.Deferred();
			var oBundle = this._oBundle;
			oDeferred.resolve(oBundle);
			return oDeferred.promise();
		},

		setPersData : function (oBundle) {
			var oDeferred = new jQuery.Deferred();
			this._oBundle = oBundle;
			oDeferred.resolve();
			return oDeferred.promise();
		}
	},

	createContent : function (oController) {

		var oTable = util.UiFactory.createStdTable();

		// CODESNIP_START
		jQuery.sap.require("sap.m.TablePersoController");

		var oTPC = new sap.m.TablePersoController({
			table: oTable,
			persoService: this.oPersoService
		}).activate();

		// add a button to the table header for opening the dialog
		oTable.setHeaderToolbar(
			new sap.m.Toolbar({
				content: [
					new sap.m.Label({
						text: "Products"
					}),
					new sap.m.ToolbarSpacer({}),
					new sap.m.Button({
						icon: "sap-icon://person-placeholder",
						press: function (evt) {
							oTPC.openDialog();
						}
					})
				]
			})
		);
		// CODESNIP_END

		return new sap.ui.layout.VerticalLayout({
			width: "100%",
			content: [
				util.UiFactory.createDescription("The sap.m.TablePersoDialog is a simple dialog to be used for allowing the user to set table personalizations, specifically column visibility and order. Use the sap.m.TablePersoController in conjunction with a persistence service based on the abstract sap.m.TablePersoProvider to have changes made and persisted.", 'NoBottom'),
				oTable
			]
		});
	}
});