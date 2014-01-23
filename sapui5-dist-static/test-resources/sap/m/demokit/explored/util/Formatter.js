jQuery.sap.declare("util.Formatter");

jQuery.sap.require("sap.ui.core.format.DateFormat");

util.Formatter = {
	
	navIcon : function (type) {
		return ("DIR" === type) ? "sap-icon://folder-full" : "sap-icon://paper-plane";
	},
	
	navListItemType : function (type) {
		return ("DIR" === type) ? "Active" : ((jQuery.device.is.phone) ? "Active" : "Inactive");
	},

	weightState :  function (fValue) {
		try {
			fValue = parseFloat(fValue);
			if (fValue < 0) {
				return "None";
			} else if (fValue < 1000) {
				return "Success";
			} else if (fValue < 2000) {
				return "Warning";
			} else {
				return "Error";
			}
		} catch (err) {
			return "None";
		}
	},
	
	quantity :  function (value) {
		try {
			return (value) ? parseFloat(value).toFixed(0) : value;
		} catch (err) {
			return "Not-A-Number";
		}
	},
	
	date : function (value) {
		if (value) {
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "yyyy-MM-dd"}); 
			return oDateFormat.format(new Date(value));
		} else {
			return value;
		}
	},
	
	randomBoolean : function () {
		return (Math.random() < 0.5);
	},
	
	randomNumber100 : function () {
		return Math.floor(Math.random() * 100);
	}
};