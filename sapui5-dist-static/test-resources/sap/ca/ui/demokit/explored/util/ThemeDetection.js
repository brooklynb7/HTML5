jQuery.sap.declare("util.ThemeDetection"); 
 
util.ThemeDetection = {
	
	isBC :  function (value) {
		return "sap_bluecrystal" === sap.ui.getCore().getConfiguration().getTheme();
	}
};