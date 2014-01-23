/*!
 * @copyright@
 */

/*************************************************************
* OdataUtil helper class
*
* Is responsible for the integration and communication with the
* Backend OData Server
**************************************************************/

jQuery.sap.declare("sap.collaboration.components.utils.OdataUtil");

sap.ui.base.Object.extend("sap.collaboration.components.utils.OdataUtil",{

	/**
	 * Gets the JAM URL using OData
	 * @param {sap.ui.model.odata.ODataModel} oOdataModel The OData model object
	 * @private
	 */
	getJamUrl:function(oOdataModel) {
	   var sJamUrl = "";
	   var sErrorCode;
	   var fSuccessFn = function(oData,response){
		   sJamUrl = oData.GetCollaborationHostUrl.Url;
	   	};		   
	   	var fErrorFn = function(oError){
	   		jQuery.sap.log.error(JSON.stringify(oError));
	   		sErrorCode = oError.response.statusCode;
	   	};
	   	oOdataModel.read("/GetCollaborationHostUrl", null, null, false, fSuccessFn, fErrorFn);
	   	
	   	if (sErrorCode){
	   		throw new Error(sErrorCode);
	   	}
	   	
	   	return sJamUrl;

	},
	
	/**
	 * Gets the JAM token using OData
	 * @param {sap.ui.model.odata.ODataModel} oOdataModel The OData model object
	 * @private
	 */
	getJamToken:function(oOdataModel) {
	   var sJamToken = "";
	   var sErrorCode;
	   var fSuccessFn = function(oData,response){
			sJamToken = oData.GetSingleUseToken.Id;
	   	};		   
	   	var fErrorFn = function(oError){
	   		jQuery.sap.log.error(JSON.stringify(oError));
	   		sErrorCode = oError.response.statusCode;
	   	};
	   	oOdataModel.read("/GetSingleUseToken", null, null, false, fSuccessFn, fErrorFn);
	   	
		if (sErrorCode){
			throw new Error(sErrorCode);
		}
		
		return sJamToken;
	   	
	},
	
	/**
	 * Gets the JAM groups using OData
	 * @param {sap.ui.model.odata.ODataModel} oOdataModel The OData model object
	 * @param {string}	sODataEndPoint The OData end point
	 * @private
	 */
	getGroupsData:function(oOdataModel, sODataEndPoint) {		
		var aGroupsData;
		var sErrorCode = "";
		var fSuccessFn = function(oData,response){
		   aGroupsData = oData.results;
	   	};
	   	var fErrorFn = function(oError){
	   		jQuery.sap.log.error(JSON.stringify(oError));
	   		sErrorCode = oError.response.statusCode;
	   	};
	   	oOdataModel.read(sODataEndPoint, null, null, false, fSuccessFn, fErrorFn);
	   	
	   	if (sErrorCode){
	   		throw new Error(sErrorCode);
	   	}
	   	
	   	return aGroupsData;
	},
	
	/**
	 * Helper function to extract the JAM groups' IDs
	 * @param {array} aGroupData An array of JAM Groups 
	 * @private
	 */
	getGroupIds:function(aGroupData) {
		var sGroupsIds="";
		for (var i = 0; i < aGroupData.length; i++){
			if (i == 0){
				sGroupsIds += aGroupData[i].Id;
			} else{
				sGroupsIds +=  "," + aGroupData[i].Id;
			}
		}
		return sGroupsIds;
	},
	
	/**
	 * Creates JAM groups Feed using OData
	 * @param {sap.ui.model.odata.ODataModel} oOdataModel The OData model object
	 * @param {string}	sGroupId Jam Group Id
	 * @param {string}	sFeedContent The content of the Feed
	 * @private
	 */
	createGroupFeed: function(oOdataModel, sGroupId, sFeedContent) {
		var sOdataEndPoint = "/Groups(" + sGroupId + ")/Feed";
		var oPayload = {
				"Text": sFeedContent
		};
		var bStatus;
		var fSuccess = function(){
			bStatus = true;
		};
		var fError = function(oError){
			jQuery.sap.log.error(JSON.stringify(oError.response.body));
			bStatus = false;
		};
		
		oOdataModel.create(sOdataEndPoint, oPayload, null, fSuccess, fError);
		
		return bStatus;
	}
});