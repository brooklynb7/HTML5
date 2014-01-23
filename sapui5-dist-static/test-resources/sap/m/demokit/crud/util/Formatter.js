jQuery.sap.declare("util.Formatter");
jQuery.sap.require("util.Const");

util.Formatter = {
		
	price :  function(fValue) {
		return fValue + "€";
	},
	
	state : function(fValue) {
		return (fValue === util.Const.state.CLEAN) ? sap.ui.core.ValueState.Success : sap.ui.core.ValueState.Error;
	},
	
	bestBefore : function(fValue) {
		// see also ui5 docu: http://.../sapui5/wiki/Documentation/AdvancedTopics/DataBinding/TypeSystem#Isitpossibletousethedatatypeswithoutdatabinding
		jQuery.sap.require("sap.ui.core.format.DateFormat");
		var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "yyyy-MM-dd"}); 
		return oDateFormat.format(new Date(fValue));
	},
	
	country : function(code) {
		if (!this.map) {
			this.map = {
				"NL" : "Netherlands",
				"NO" : "Norway",
				"NZ" : "New Zealand",
				"MX" : "Mexico",
				"GR" : "Greece",
			};
		}
		return (this.map[code]) ? this.map[code] : "?";
	}
};