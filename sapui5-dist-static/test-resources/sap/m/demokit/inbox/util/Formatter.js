jQuery.sap.declare("util.Formatter"); 
 
util.Formatter = {
		
	lrType : function(value) {
		if (!this.lrTypeMap) {
			this.lrTypeMap = {
				"V" : "Vacation",
				"S" : "Sickness"
			};
		}
		return (this.lrTypeMap[value]) ? this.lrTypeMap[value] : "?";
	},
	
	lrNoteType : function(value) {
		if (!this.lrNoteTypeMap) {
			this.lrNoteTypeMap = {
				"R" : "Request"
			};
		}
		return (this.lrNoteTypeMap[value]) ? this.lrNoteTypeMap[value] : "?";
	},
	
	agoDays : function(value) {
		if (value == 0) {
			return "Today";
		} else if (value == 1) {
			return "1 day ago";
		} else {
			return value + " days ago"; 
		}
	},
	
	currency : function(value) {
		var s = value + "";
		return s;
	},
	
	by : function(value) {
		return "by " + value;
	},
	
	attachmentIcon : function(value) {
		if (!this.attachmentMap) {
			this.attachmentMap = {
				"ppt" : "ppt-attachment",
				"pdf" : "pdf-attachment",
				"zip" : "attachment-zip-file"
			};
		}
		var code = (this.attachmentMap[value]) ? this.attachmentMap[value] : "question-mark";
		return "sap-icon://" + code;
	},
	
	isNotEmpty: function (value){
		return !!value;
	},
};