jQuery.sap.declare("i2d.qm.qualityissue.confirm.apprefExt.Component");

//WHEN RUNNING THE APP INSIDE SANDBOX (USHELL) UNCOMMENT THE FOLLOWING CHANGES
//ONE MORE CHANGE IN sap.ca.configs

//jQuery.sap.registerModulePath("i2d.qm.qualityissue.confirm.apprefExt", '../../../../../');
//jQuery.sap.registerModulePath("i2d.qm.qualityissue.confirm.appref", '../../../../../../ui-appref');

//IF ABOVE TWO PARTS ARE COMMENTED THE APP RUNS WITH noShellIndex.html AS A STANDALONE APP

jQuery.sap.includeStyleSheet("css/style.css");

jQuery.sap.require("i2d.qm.qualityissue.confirm.appref.Component");

i2d.qm.qualityissue.confirm.appref.Component.extend("i2d.qm.qualityissue.confirm.apprefExt.Component",{

	metadata: {
		version : "1.0",
		config : {
			"sap.ca.i18Nconfigs": {
				"bundleName":"i2d.qm.qualityissue.confirm.apprefExt.i18n.i18n"
			},
			"sap.ca.serviceConfigs": [{
		            name:"Z_I2D_QM_QUALITYISSUE_CONFIRM_SRV",
		            serviceUrl:"",
		            isDefault:true,
		            mockedDataSource:jQuery.sap.getModulePath("i2d.qm.qualityissue.confirm.apprefExt")+"/model/metadata.xml"
			}]

		},
		routing : {
			"routes" : {
				"masterDetail" : {
					"subroutes" : {
						"master" : {
							"subroutes" : {
								"taskDetail": {
									"pattern":"detail/ReportedIssueCollection/taskDetail/{contextPath}",
									"viewPath":"i2d.qm.qualityissue.confirm.apprefExt.view",
									"targetAggregation":"detailPages",
									"view":"newView",
									"viewLevel":2,
								}
							}
						}
					}
				}
			}
		},

		customizing: {

			"sap.ui.viewReplacements": {
				"i2d.qm.qualityissue.confirm.appref.view.IssueForm": {
					viewName: "i2d.qm.qualityissue.confirm.apprefExt.view.newHomePage",
					type : "XML"
				}
			},

			"sap.ui.controllerExtensions": {
				"i2d.qm.qualityissue.confirm.appref.view.S3":{
					controllerName : "i2d.qm.qualityissue.confirm.apprefExt.view.extList"
				}
			},

			"sap.ui.viewExtensions": {
				"i2d.qm.qualityissue.confirm.appref.view.S3": {
					"extMoreInfo": {
						className: "sap.ui.core.Fragment",
						fragmentName: "i2d.qm.qualityissue.confirm.apprefExt.view.CustomFrag1",
						type : "XML"
					},
					"extTabQuantities": {
						className: "sap.ui.core.Fragment",
						fragmentName: "i2d.qm.qualityissue.confirm.apprefExt.view.CustomFrag2",
						type : "XML"
					},
					"extTaskList": {
						className: "sap.ui.core.Fragment",
						fragmentName: "i2d.qm.qualityissue.confirm.apprefExt.view.extList",
						type : "XML"
					},
					"extFooter": {
						className: "sap.ui.core.Fragment",
						fragmentName: "i2d.qm.qualityissue.confirm.apprefExt.view.extFooter",
						type : "XML"
					}
				}				
			},

			"sap.ui.viewModifications": {
				"i2d.qm.qualityissue.confirm.appref.view.S3": {
					"DEFECT": {
						"visible": false,
					}
				}
			}
		}
	}
});

//Activating Customizing on Customer Component
sap.ui.core.Component.activateCustomizing("i2d.qm.qualityissue.confirm.apprefExt");