jQuery.sap.declare("sap.ca.scfld.md.app.DetailHeaderFooterHelper");
jQuery.sap.require("sap.ca.scfld.md.app.CommonHeaderFooterHelper");

sap.ui.base.Object
		.extend(
				"sap.ca.scfld.md.app.DetailHeaderFooterHelper",
				{

					constructor : function(oApplicationImplementation) {
						this.oAppImp = oApplicationImplementation;
						this.oCommonHeaderFooterHelper = new sap.ca.scfld.md.app.CommonHeaderFooterHelper(oApplicationImplementation, this.detailHeaderFooterRules);
					},

					detailHeaderFooterRules : {
						maxBtnCountXL : 4,
						maxBtnCountL  : 3,
						maxBtnCountM  : 2,
						maxBtnCountS  : 1

					},

					defineDetailHeaderFooter : function(oController) {
						var oOptions = oController.getHeaderFooterOptions();
						this.setHeaderFooter(oController, oOptions);
					},						
						
					setHeaderFooter : function(oController, oOptions){
						if (!oOptions){
							return;
						}						
						// ToDo Header
						var oPage = this.oCommonHeaderFooterHelper.startBuild(oController, oOptions);
						// ToDo: define detail header -> back button + up down buttons
						// this.defineDetailHeader(oController, oPage, this.detailHeaderFooterRules);
// important to run header before footer, as the addBookmark button relies on the title
						this.defineHeader(oController, oPage);
						this.defineFooter(oController, oPage);
						
						this.oAppImp.oCurController.DetailCtrl = oController;	
						this.oAppImp.oCurController.FullCtrl = null;						

						this.oCommonHeaderFooterHelper.endBuild(oController);							
							
					},
//
					defineFooter : function(oController, oPage) {
						var sTSize;
						if (this.oAppImp.bIsPhone && !sap.ui.Device.orientation.landscape )
							{ sTSize = "S"; }
						else if (this.oAppImp.bIsPhone && sap.ui.Device.orientation.landscape )
							{ sTSize = "M"; }
						else 
							{ sTSize = "XL"; }

						var iFooterRightCount = this.oCommonHeaderFooterHelper.getFooterRightCount(oController, sTSize);
						var bHasButton = this.oCommonHeaderFooterHelper.defineFooterRight(oController, oPage, iFooterRightCount, false, true);
						oPage.setShowFooter(bHasButton || !!oController.isMainScreen());		// note that isMainScreen() may return "X"				
					},
					
					defineHeader : function(oController, oPage){
						var bSuppressBackButton = !this.oAppImp.bIsPhone && (oController.isMainScreen() == true);
						this.oCommonHeaderFooterHelper.ensureHeader(oController, oPage, this.oAppImp.bIsPhone, bSuppressBackButton);
						if (oController._oHeaderFooterOptions.oUpDownOptions){
							this.setUpDownButtons(oController, oController._oHeaderFooterOptions.oUpDownOptions.iPosition, oController._oHeaderFooterOptions.oUpDownOptions.iCount);
							var aPars = this.getPositionPars(oController);
							if (this.oAppImp.bIsPhone){
                if (oController._oHeaderFooterOptions.oUpDownOptions.sI18NPhoneTitle){
  								var oBundle = this.oAppImp.getResourceBundle();
  								var sKey = oController._oHeaderFooterOptions.oUpDownOptions.sI18NPhoneTitle;             	
                }	else {
  								var oBundle = this.oAppImp.getUiLibResourceBundle();
  								var sKey = "ITEM_TITLE_PHONE";                  	
                }							
							} else {
                if (oController._oHeaderFooterOptions.oUpDownOptions.sI18NDetailTitle){
  								var oBundle = this.oAppImp.getResourceBundle();
  								var sKey = oController._oHeaderFooterOptions.oUpDownOptions.sI18NDetailTitle;             	
                }	else {
  								var oBundle = this.oAppImp.getUiLibResourceBundle();
  								var sKey = "ITEM_TITLE";                  	
                }															
							}
              var sTitle = oBundle.getText(sKey, aPars);														
						} else {
							this.setUpDownButtons(oController, 0, 0);
							if (oController._oHeaderFooterOptions.sI18NDetailTitle){
								var oBundle = this.oAppImp.getResourceBundle();
								var sTitle = oBundle.getText(oController._oHeaderFooterOptions.sI18NDetailTitle);
							} else if (oController._oHeaderFooterOptions.sDetailTitle){
								var sTitle = oController._oHeaderFooterOptions.sDetailTitle;
							} else{
								var oBundle = this.oAppImp.getResourceBundle();
								var sTitle = oBundle.getText("DETAIL_TITLE");								
							}
						}
						oController._oControlStore.oTitle.setText(sTitle);
					},
					
					setUpDownButtons : function(oController, iPos, iCount){
						if (iCount <=1){
							if (oController._oControlStore.oUpButton){
								oController._oControlStore.oUpButton.setVisible(false);
								oController._oControlStore.oDownButton.setVisible(false);
							}
						} else {
							if (!oController._oControlStore.oUpButton){
								var fMoveUpDown = function(delta){
									oController._oHeaderFooterOptions.oUpDownOptions.fSetPosition(oController._oHeaderFooterOptions.oUpDownOptions.iPosition + delta); 
								};								
								oController._oControlStore.oUpButton = new sap.m.Button();
								oController._oControlStore.oUpButton.setIcon("sap-icon://down");
								oController._oControlStore.oUpButton.attachPress(function(){
									fMoveUpDown(1);
								});
								oController._oControlStore.oHeaderBar.addContentRight(oController._oControlStore.oUpButton);
								oController._oControlStore.oDownButton = new sap.m.Button();
								oController._oControlStore.oDownButton.setIcon("sap-icon://up");
								oController._oControlStore.oDownButton.attachPress(function(){
									fMoveUpDown(-1);
								});								
								oController._oControlStore.oHeaderBar.addContentRight(oController._oControlStore.oDownButton);								
							}
							oController._oControlStore.oUpButton.setVisible(true);
							oController._oControlStore.oDownButton.setVisible(true);							
							oController._oControlStore.oUpButton.setEnabled(iPos < iCount - 1);
							oController._oControlStore.oDownButton.setEnabled(iPos > 0);															
						}
					},
					
					getPositionPars : function(oController){
						if (oController._oHeaderFooterOptions){
						  var aRet = [oController._oHeaderFooterOptions.oUpDownOptions.iPosition + 1, oController._oHeaderFooterOptions.oUpDownOptions.iCount];
						  if (oController._oHeaderFooterOptions.oUpDownOptions.oParent){
						  	aRet = aRet.concat(this.getPositionPars(oController._oHeaderFooterOptions.oUpDownOptions.oParent));
						  }
						  return aRet;
						}
						return [];
					}
				});
