jQuery.sap.declare("sap.ca.ui.AppConfig");
sap.ca.ui.AppConfig=function(c){this.config=c;this._fnValidate()};
sap.ca.ui.AppConfig.prototype.getStringValue=function(p,a){var v=this.config[p];if(jQuery.isFunction(v)){v=v.apply(null,a)}if(typeof v=='string'||v instanceof String){return v}else{jQuery.sap.log.error("The app config is not correct, the function "+p+" has to return a string")}};
sap.ca.ui.AppConfig.prototype.getBoolValue=function(p,a){var v=this.config[p];if(jQuery.isFunction(v)){v=v.apply(null,a)}return!!v};
sap.ca.ui.AppConfig.prototype._fnValidate=function(){this._isStringOfFunction("defaultPageId");this._isStringOfFunction("isMaster");this._isStringOfFunction("viewName");this._isStringOfFunction("viewType");this._isStringOfFunction("transition")};
sap.ca.ui.AppConfig.prototype._isStringOfFunction=function(n){var v=this.config[n];if(!(typeof v=='string'||v instanceof String||jQuery.isFunction(v))){jQuery.sap.log.error("The app config is not correct, this property "+n+"has to be a string or a function")}};
