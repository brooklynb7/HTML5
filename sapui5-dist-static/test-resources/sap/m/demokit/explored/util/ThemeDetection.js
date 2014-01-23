jQuery.sap.declare("util.ThemeDetection"); 
 
util.ThemeDetection = {
	
	isMVI :  function (value) {
		return "sap_mvi" === sap.ui.getCore().getConfiguration().getTheme();
	},
	
	isBC :  function (value) {
		return "sap_bluecrystal" === sap.ui.getCore().getConfiguration().getTheme();
	}
};