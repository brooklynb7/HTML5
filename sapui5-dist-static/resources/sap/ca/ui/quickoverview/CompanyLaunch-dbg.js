jQuery.sap.declare("sap.ca.ui.quickoverview.CompanyLaunch");
jQuery.sap.require("sap.ui.base.Object");
jQuery.sap.require("sap.ca.ui.quickoverview.Quickoverview");

sap.ui.base.Object
		.extend(
				"sap.ca.ui.quickoverview.CompanyLaunch",
				{

					// Public interface: constructor
					constructor : function(oConfig) {
						// create an explicit model - merge information from the
						// application in case an application model is provided

						var utils = sap.ca.ui.quickoverview.QuickviewUtils;

						//handle image
						var sImgUrl = oConfig.imgurl;
						if ( !sImgUrl )
							{
							 sImgUrl = "sap-icon://account";
							}							
						
						var oCompData = {
							imgurl : sImgUrl,								
							companyname : utils.getAttrValue(oConfig.companyname,
									oConfig.oModel),
							companyphone : utils.getAttrValue(
									oConfig.companyphone, oConfig.oModel),	
							companyaddress : utils.getAttrValue(
									oConfig.companyaddress, oConfig.oModel),
							maincontactname : utils.getAttrValue(oConfig.maincontactname,
									oConfig.oModel),
							maincontactmobile : utils.getAttrValue(
									oConfig.maincontactmobile, oConfig.oModel),
							maincontactphone : utils.getAttrValue(oConfig.maincontactphone,
									oConfig.oModel),
							maincontactemail : utils.getAttrValue(oConfig.maincontactemail,
									oConfig.oModel),
							maincontactemailsubj : utils.getAttrValue(oConfig.maincontactemailsubj,
									oConfig.oModel),

						};

						var oCompModel = new sap.ui.model.json.JSONModel(
								oCompData);

						var oQVConfig = {
							popoverHeight : "34rem",
							title : utils.getAttrValue(oConfig.title,
										oConfig.oModel),
							headerTitle : utils.getAttrValue(oConfig.companyname,
									oConfig.oModel),
							headerSubTitle : utils.getAttrValue(
									oConfig.maincontactname, oConfig.oModel),
							headerImgURL : sImgUrl,
							subViewName : "sap.ca.ui.quickoverview.Company",
							oModel : oCompModel,
							beforeExtNav : oConfig.beforeExtNav,							
						};

						this.oQuickView = new sap.ca.ui.quickoverview.Quickoverview(
								oQVConfig);

					},

					// Public interface: openBy
					openBy : function(oSourceControl, sPlacement) {

						this.oQuickView.openBy(oSourceControl);

						return;
					},
					
				});