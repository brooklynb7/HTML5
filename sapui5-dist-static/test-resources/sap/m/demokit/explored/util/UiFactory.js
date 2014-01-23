jQuery.sap.declare("util.UiFactory");
 
util.UiFactory = {
	
	createDescription : function (text, marginType) {
		var result = new sap.m.Text({text: text});
		result.addStyleClass('description');
		if (marginType !== undefined) {
			result.addStyleClass("margin" + marginType);
		}
		return result;
	},

	/**
	 * Reuses the table creation the sample view for table
	 */
	createStdTable : function (oInitialFilter) {
		
		// create table view on demand
		if (!this._oTableView) {
			this._oTableView = sap.ui.view({
				id : "UiFactoryTableView",
				viewName : "views.control.table",
				type : "JS"
			});
		}
		
		// create content and retrieve table instance
		var oPage = this._oTableView.createContent(null, oInitialFilter);
		var mPageContent = oPage.getContent();
		for (var i = 0 ; i < mPageContent.length ; i++) {
			var oControl = mPageContent[i];
			if (oControl && "sap.m.Table" === oControl.getMetadata().getName()) {
				return oControl;
			}
		}
		throw new Error("No table found in table view.");
	}
};