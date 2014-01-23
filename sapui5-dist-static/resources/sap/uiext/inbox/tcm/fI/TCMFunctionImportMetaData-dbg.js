/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.tcm.fI.TCMFunctionImportMetaData");
	

sap.uiext.inbox.tcm.fI.TCMFunctionImportMetaData = {
			/**
			 * Function Import for SearchUsers
			 * 
			 * name: Name of the Function Import
			 * params: The Parameters of the function Import defined in the format : 
			 * eg: {name:"SAP__Origin", type: "Edm.String", Mode: "In", nullable: true} where nullable defines whether the parmater is optional while executing the Function Import.
			 * httpMethod: GET/POST , the method to be used while executing the Function Import. 
			 * 
			 */
			SEARCHUSERS: {name:"SearchUsers", 
							params: [
							         	{name:"SAP__Origin", type: "Edm.String", Mode: "In"},
							         	{name:"SearchPattern", type: "Edm.String", Mode: "In", nullable: true},
							         	{name:"MaxResults", type: "Edm.Int16", Mode: "In", nullable: true}
							         ],
							httpMethod: "GET"
						  }
};