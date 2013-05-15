jQuery.sap.declare("util.Formatter"); 
 
util.Formatter = {
		
	price :  function(value) {
		jQuery.sap.require("sap.ui.core.format.NumberFormat");
		var numberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
			maxFractionDigits: 2,
			groupingEnabled: true,
			groupingSeparator: ".",
			decimalSeparator: ","
		});
		return numberFormat.format(value) + "\u20AC";
	}
 };