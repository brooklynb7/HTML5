jQuery.sap.declare("sap.ca.ui.quickoverview.EmployeeLaunch");
jQuery.sap.require("sap.ui.base.Object");
jQuery.sap.require("sap.ca.ui.quickoverview.Quickoverview");

sap.ui.base.Object
		.extend(
				"sap.ca.ui.quickoverview.EmployeeLaunch",
				{

					// Public interface: constructor
					constructor : function(oConfig) {
						// create an explicit model - merge information from the
						// application in
						// case an application model is provided

						var utils = sap.ca.ui.quickoverview.QuickviewUtils;

						//handle employee image
						var sImgUrl = oConfig.imgurl;
						if ( !sImgUrl )
							{
							 sImgUrl = "sap-icon://person-placeholder";
							}	
						
						var oEmpData = {
							imgurl : sImgUrl,
							department : utils.getAttrValue(oConfig.department,
									oConfig.oModel),
							contactmobile : utils.getAttrValue(
									oConfig.contactmobile, oConfig.oModel),
							contactphone : utils.getAttrValue(oConfig.contactphone,
									oConfig.oModel),
							companyname : utils.getAttrValue(
									oConfig.companyname, oConfig.oModel),
							contactemail : utils.getAttrValue(oConfig.contactemail,
									oConfig.oModel),
							contactemailsubj : utils.getAttrValue(oConfig.contactemailsubj,
									oConfig.oModel),
							companyaddress : utils.getAttrValue(
									oConfig.companyaddress, oConfig.oModel),
						};
						

						
						if (oConfig.companycard) {
							//handle image
							var sCompImgUrl = oConfig.companycard.imgurl;
							if ( !sCompImgUrl )
								{
								 sCompImgUrl = "sap-icon://account";
								 
								}							
							var oCompData = 
							{
									title  : utils.getAttrValue(oConfig.companycard.title, oConfig.oModel),
									beforeExtNav : oConfig.companycard.beforeExtNav,
									imgurl : sCompImgUrl,								
									companyname : utils.getAttrValue(oConfig.companyname, oConfig.oModel),
									companyphone : utils.getAttrValue(
											oConfig.companycard.companyphone, oConfig.oModel),	
									companyaddress : utils.getAttrValue(
											oConfig.companyaddress, oConfig.oModel),
									maincontactname : utils.getAttrValue(oConfig.companycard.maincontactname,
											oConfig.oModel),
									maincontactmobile : utils.getAttrValue(
											oConfig.companycard.maincontactmobile, oConfig.oModel),
									maincontactphone : utils.getAttrValue(oConfig.companycard.maincontactphone,
											oConfig.oModel),
									maincontactemail : utils.getAttrValue(oConfig.companycard.maincontactemail,
											oConfig.oModel),
									maincontactemailsubj : utils.getAttrValue(oConfig.companycard.maincontactemailsubj,
											oConfig.oModel),
									}
							
							oEmpData.companycard = oCompData;
						}

						var oEmpModel = new sap.ui.model.json.JSONModel(
								oEmpData);
						
						var oQVConfig = {
							popoverHeight : "32rem",
							title : utils.getAttrValue(oConfig.title,
									oConfig.oModel),
							headerTitle : utils.getAttrValue(oConfig.name,
									oConfig.oModel),
							headerSubTitle : utils.getAttrValue(
									oConfig.department, oConfig.oModel),
							headerImgURL : sImgUrl,
							subViewName : "sap.ca.ui.quickoverview.Employee",
							oModel : oEmpModel,
							beforeExtNav : oConfig.beforeExtNav,
						};

						this.oQuickView = new sap.ca.ui.quickoverview.Quickoverview(
								oQVConfig);

					},

					// Public interface: openBy
					openBy : function(oSourceControl, sPlacement) {

						this.oQuickView.openBy(oSourceControl);
						return;
					}
				});