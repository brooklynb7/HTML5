jQuery.sap.require("sap.m.TablePersoController");
sap.ui.controller("views.control.tablePerso", {

	// Very simple page-context personalization
	// persistence service, not for productive use!
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

	onInit : function() {

		this.oTPC = new sap.m.TablePersoController({
			table: this.getView().byId("idProductsTable"),
			persoService: this.oPersoService
		}).activate();

	},

	onPersoButtonPressed: function(oEvent) {
		this.oTPC.openDialog();
	},

});