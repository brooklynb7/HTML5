jQuery.sap.declare("util.Formatter");

jQuery.sap.require("sap.ui.core.format.DateFormat");

util.Formatter = {
	
	_statusStateMap : {
		"Neu" : "Warning",
		"Initial" : "Success"
	},
	
	StatusState :  function (value) {
		return (value && util.Formatter._statusStateMap[value]) ? util.Formatter._statusStateMap[value] : "None";
	},
	
	Quantity :  function (value) {
		try {
			return (value) ? parseFloat(value).toFixed(0) : value;
		} catch (err) {
			return "Not-A-Number";
		}
	},
	
	Date : function (value) {
		if (value) {
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "yyyy-MM-dd"}); 
			return oDateFormat.format(new Date(value));
		} else {
			return value;
		}
	},
	
	AttachmentMap : {
		"ppt" : "ppt-attachment",
		"pdf" : "pdf-attachment",
		"zip" : "attachment-zip-file"
	},
	
	AttachmentIcon : function(value) {
		var map = util.Formatter.AttachmentMap;
		var code = (value && map[value]) ? map[value] : "question-mark";
		return "sap-icon://" + code;
	}
};