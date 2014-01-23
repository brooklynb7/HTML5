jQuery.sap.require("util.baseAppController");

util.baseAppController("view.App", {
	
	onInit : function () {
		
		// Any of the strings can be replaced with a function, that returns a string
		var oAppConfig = {
				
				defaultPageId : "Master",
				
				isMaster : function (sPageId) {
					return ("Detail" !== sPageId && "LineItem" !== sPageId);
				},
				
				viewName : function (sPageId) {
					return "view." + sPageId;
				},
				
				viewType : "XML",
				
				transition : "slide"
			};
		
		this.configureApplication(this.getView().app, oAppConfig);
	}
});