/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
// Utility functions for TCMFunctionImport calls
jQuery.sap.declare("sap.uiext.inbox.tcm.fI.TCMFunctionImport");

jQuery.sap.require("sap.uiext.inbox.tcm.fI.TCMFunctionImportMetaData");

/*global OData */// declare unusual global vars for JSLint/SAPUI5 validation
sap.ui.base.Object.extend("sap.uiext.inbox.tcm.fI.TCMFunctionImport",{ 
	
    constructor : function() {
      
       sap.ui.base.Object.apply(this);
       this.sTcmServiceURL= undefined;
       this.oHeaders = {};
       this.ofIMetadata =  sap.uiext.inbox.tcm.fI.TCMFunctionImportMetaData;
    }

});

sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype.setHeaders = function(mHeaders) {
	this.oHeaders = mHeaders;
};

sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype.getHeaders = function() {
    return this.oHeaders;
};

sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype.setServiceURL = function(sServiceURL) {
	this.sTcmServiceURL = sServiceURL;
};

sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype.getServiceURL = function() {
    return this.sTcmServiceURL;
};

sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype.callSearchUsers = function(params, fnSuccess, fnError){
	var oSearchUsersFIMetadata = this.ofIMetadata.SEARCHUSERS;
	var aUrlParams = this._createURLParamsArray(params, oSearchUsersFIMetadata);
	var request = this._createRequest(oSearchUsersFIMetadata.name, aUrlParams, false, oSearchUsersFIMetadata.httpMethod);
	return OData.request(request, fnSuccess, fnError);
};


sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype._createURLParamsArray = function(params, oFIMetadata){
	var that = this;
	var oFIParamsMetaData = oFIMetadata.params, aURLParams = [], sUrlParam;
	var sFIParamName, sFIParamType, vParamValue;
	jQuery.each(oFIParamsMetaData,function(index,oFIParamMetaData){
		sFIParamName = oFIParamMetaData.name;
		sFIParamType = oFIParamMetaData.type;
		vParamValue = params[sFIParamName];
		if(vParamValue){
			sUrlParam = sFIParamName + "=" + that._formatParamValue(vParamValue,sFIParamType);
			aURLParams.push(sUrlParam);
		}else{
			if(oFIParamMetaData.nullable){
				jQuery.sap.log.warning('No parameter Value provided for a non nullable input paramater for function Import:' + oFIMetadata.name);
			}
		}
	});
	return aURLParams;
};

sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype._createRequest = function(sPath, aUrlParams, bAsync, httpMethod) {

    // create the url for the service
    var sUrl = this.sTcmServiceURL;
    if (sPath) {
        if (!jQuery.sap.startsWith(sPath, "/")) {
            sUrl += "/";
        }
        sUrl += sPath;
    }
    
    if (aUrlParams && aUrlParams.length > 0) {
        sUrl += "?" + aUrlParams.join("&");
    }

    // create a request object for the url, url params and async option
    return {
        requestUri: sUrl,
        headers: this.oHeaders,
        method: httpMethod,
        async: bAsync,
        user: this.sUser,
        password: this.sPassword
    };

};

/**
 * Format a JavaScript value according to the given EDM type
 * http://www.odata.org/documentation/overview#AbstractTypeSystem
 * 
 * @param {any} vValue the value to format
 * @param {string} sType the EDM type (e.g. Edm.Decimal)
 * @return {string} the formatted value
 */
sap.uiext.inbox.tcm.fI.TCMFunctionImport.prototype._formatParamValue = function(vParamValue,sFIParamType) {
	// Lazy creation of format objects
	if (!this.oDateTimeFormat) {
		this.oDateTimeFormat = sap.ui.core.format.DateFormat.getDateInstance({
			pattern: "'datetime'''yyyy-MM-dd'T'HH:mm:ss''"
		});
		this.oDateTimeOffsetFormat = sap.ui.core.format.DateFormat.getDateInstance({
			pattern: "'datetimeoffset'''yyyy-MM-dd'T'HH:mm:ss'Z'''"
		});
		this.oTimeFormat = sap.ui.core.format.DateFormat.getTimeInstance({
			pattern: "'time'''HH:mm:ss''"
		});
	}

	// Format according to the given type
	var sFormattedParamValue;
	switch(sFIParamType) {
		case "Edm.String":
			// quote
			sFormattedParamValue = "'" + String(vParamValue).replace(/'/g, "''") + "'";
			break;
		case "Edm.Time":
			sFormattedParamValue = "time'" + vParamValue + "'";
			break;			
		case "Edm.DateTime":
			sFormattedParamValue = this.oDateTimeFormat.format(new Date(vParamValue), true);
			break;
		case "Edm.DateTimeOffset":
			sFormattedParamValue = this.oDateTimeOffsetFormat.format(new Date(vParamValue), true);
			break;
		case "Edm.Guid":
			sFormattedParamValue = "guid'" + vParamValue + "'";
			break;
		case "Edm.Decimal":
			sFormattedParamValue = vParamValue + "M";
			break;
		case "Edm.Int64":
			sFormattedParamValue = vParamValue + "L";
			break;
		case "Edm.Single":
			sFormattedParamValue = vParamValue + "f";
			break;				
		case "Edm.Binary":
			sFormattedParamValue = "binary'" + vParamValue + "'";
			break;
		default: 
			sFormattedParamValue = new String(vParamValue);
			break;
	}
	return sFormattedParamValue;
};