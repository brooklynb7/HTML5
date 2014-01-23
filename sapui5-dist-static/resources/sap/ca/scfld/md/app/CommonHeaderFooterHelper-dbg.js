jQuery.sap.declare("sap.ca.scfld.md.app.CommonHeaderFooterHelper");
jQuery.sap.require("sap.ushell.ui.footerbar.JamShareButton");
jQuery.sap.require("sap.ushell.ui.footerbar.JamDiscussButton");
jQuery.sap.require("sap.ushell.ui.footerbar.AddBookmarkButton");
jQuery.sap.require("sap.ca.scfld.md.app.ButtonListHelper");
jQuery.sap.require("sap.ushell.services.AppConfiguration");

// hack: only a temporary workaround
if (!sap.ushell.services.AppConfiguration.getSettingsControl) {
	sap.ushell.services.AppConfiguration.getSettingsControl = function() {
		return new sap.m.Button({
			icon : "sap-icon://accidental-leave"
		});
	}
}

sap.ui.base.Object
		.extend(
				"sap.ca.scfld.md.app.CommonHeaderFooterHelper",
				{

					constructor : function(oApplicationImplementation, detailHeaderFooterRules) {
						this.oAppImp = oApplicationImplementation;
						this.detailHeaderFooterRules = detailHeaderFooterRules;
					},

					startBuild : function(oController, oOptions, oStartOptions) {
						oController._oHeaderFooterOptions = oOptions;
						var oPage = oController.getPage();
						if (oController._oControlStore) {
							oController._oControlStore.oButtonListHelper.startBuild();
						} else {
							oController._oControlStore = {};
							if (oStartOptions) {
								jQuery.extend(oController._oControlStore, oStartOptions);
							}
							oController._oControlStore.oButtonListHelper = new sap.ca.scfld.md.app.ButtonListHelper(this.oAppImp, 20);
							this.oAppImp.registerExitModule(function(){
								oController._oControlStore.oButtonListHelper.destroy();
							});
							oPage.setFooter(oController._oControlStore.oButtonListHelper.oBar);
						}
						// ToDo Header
						return oPage;
					},

					endBuild : function(oController) {
						oController._oControlStore.oButtonListHelper.endBuild();
					},

					defineFooterRight : function(oController, oPage, iFooterRightCount, bIncludeGenerics, bIncludePosNeg) {

						var bHasButton = false;
						// standard Buttons
						if (oController._oHeaderFooterOptions.oEditBtn) {
							var oBtnMeta = {};
							jQuery.extend(oBtnMeta, oController._oHeaderFooterOptions.oEditBtn);
							oBtnMeta.style = sap.m.ButtonType.Emphasized;
							oController._oControlStore.oButtonListHelper.ensureButton(oBtnMeta, "b", iFooterRightCount);
							bHasButton = true;
						} else /* if (bIncludePosNeg) */{
							if (oController._oHeaderFooterOptions.oPositiveAction) {
								var oBtnMeta = {};
								jQuery.extend(oBtnMeta, oController._oHeaderFooterOptions.oPositiveAction);
								oBtnMeta.style = sap.m.ButtonType.Accept;
								oController._oControlStore.oButtonListHelper.ensureButton(oBtnMeta, "b", iFooterRightCount);
								bHasButton = true;
							}
							if (oController._oHeaderFooterOptions.oNegativeAction) {
								var oBtnMeta = {};
								jQuery.extend(oBtnMeta, oController._oHeaderFooterOptions.oNegativeAction);
								oBtnMeta.style = sap.m.ButtonType.Reject;
								oController._oControlStore.oButtonListHelper.ensureButton(oBtnMeta, "b", iFooterRightCount);
								bHasButton = true;
							}
						}

						// App specific buttons
						if (oController._oHeaderFooterOptions.buttonList) {
							for (var i = 0; i < oController._oHeaderFooterOptions.buttonList.length; i++) {
								var oBtnMeta = {};
								jQuery.extend(oBtnMeta, oController._oHeaderFooterOptions.buttonList[i]);
								oBtnMeta.style = sap.m.ButtonType.Default;
								oController._oControlStore.oButtonListHelper.ensureButton(oBtnMeta, "b", iFooterRightCount);
								bHasButton = true;
							}
						}
						if (bIncludeGenerics) {
							var aGenButtons = this.getGenericButtons(iFooterRightCount, oController,
									oController._oControlStore.oButtonListHelper);
							bHasButton = bHasButton || aGenButtons.length > 0;
						}
						bHasButton = this.defineShareButton(oController) || bHasButton;
						return bHasButton;
					},

					defineShareButton : function(oController) {
						var aButtons = this.getShareButtons(oController);
						if (aButtons.length == 0) {
							return false;
						}
						if (!oController._oControlStore.oShareSheet) {
							oController._oControlStore.oShareSheet = new sap.m.ActionSheet();
							oController._oControlStore.oShareSheet.setShowCancelButton(true);
							oController._oControlStore.oShareSheet.setPlacement(sap.m.PlacementType.Top);
						} else {
							oController._oControlStore.oShareSheet.removeAllButtons();
						}
						var oBtnMeta = {
							sIcon : "sap-icon://action",
							onBtnPressed : function(evt) {
								if (oController._oHeaderFooterOptions.oJamOptions){
								  if (oController._oHeaderFooterOptions.oJamOptions.fGetShareSettings) {
									  var oShareSettings = oController._oHeaderFooterOptions.oJamOptions.fGetShareSettings();
									  if (oShareSettings) {
									  	oController._oControlStore.oJamShareButton.setJamData(oShareSettings);
									  }
								  }
								  if (oController._oHeaderFooterOptions.oJamOptions.fGetDiscussSettings) {
								  	var oDiscussSettings = oController._oHeaderFooterOptions.oJamOptions.fGetDiscussSettings();
									  if (oDiscussSettings) {
									  	oController._oControlStore.oJamDiscussButton.setJamData(oDiscussSettings);
									  }
									}
								}
								oController._oControlStore.oShareSheet.openBy(evt.getSource());
							}
						};
						oController._oControlStore.oButtonListHelper.ensureButton(oBtnMeta, "b");
						for (var i = 0; i < aButtons.length; i++) {
							oController._oControlStore.oShareSheet.addButton(aButtons[i]);
						}
						return true;
					},


					hasShareButtons : function(oController) {
						return oController.isMainScreen() || !!(oController._oHeaderFooterOptions.oEmailSettings
								|| (oController._oHeaderFooterOptions.oJamOptions && (oController._oHeaderFooterOptions.oJamOptions.oShareSettings
										|| oController._oHeaderFooterOptions.oJamOptions.fGetShareSettings || oController._oHeaderFooterOptions.oJamOptions.oDiscussSettings || oController._oHeaderFooterOptions.oJamOptions.fGetDiscussSettings))
								|| oController._oHeaderFooterOptions.oAddBookmarkSettings || (oController._oHeaderFooterOptions.additionalShareButtonList && oController._oHeaderFooterOptions.additionalShareButtonList.length > 0));
					},

					getShareButtons : function(oController) {
						var aRet = [];
						var oEmailButton = this.getEmailButton(oController);
						var oJamShareButton = this.getJamShareButton(oController);
						var oJamDiscussButton = this.getJamDiscussButton(oController);
						var oBookmarksButton = this.getBookmarkButton(oController);
						if (oEmailButton) {
							aRet.push(oEmailButton);
						}
						if (oJamShareButton) {
							aRet.push(oJamShareButton);
						}
						if (oJamDiscussButton) {
							aRet.push(oJamDiscussButton);
						}
						if (oBookmarksButton) {
							aRet.push(oBookmarksButton);
						}
						if (oController._oHeaderFooterOptions.additionalShareButtonList) {
							var aAddButtons = this.getAdditionalShareButtons(oController);
							aRet = aRet.concat(aAddButtons);
						}
						return aRet;
					},

					getEmailButton : function(oController) {
						if (!oController._oHeaderFooterOptions.oEmailSettings) {
							return null;
						}
						if (!oController._oControlStore.oEmailButton) {
							oController._oControlStore.oEmailButton = new sap.m.Button();
							oController._oControlStore.oEmailButton.setIcon("sap-icon://email");
							oController._oControlStore.oEmailButton.setText(this.oAppImp.UilibI18nModel.getResourceBundle().getText(
									"SEND_EMAIL"));
							oController._oControlStore.oEmailButton.attachPress(function() {
								if (oController._oHeaderFooterOptions.oEmailSettings.fGetMailBody) {
									var sBody = oController._oHeaderFooterOptions.oEmailSettings.fGetMailBody();
								} else {
									var sBody = null;
								}
								sap.m.URLHelper.triggerEmail(oController._oHeaderFooterOptions.oEmailSettings.sRecepient,
										oController._oHeaderFooterOptions.oEmailSettings.sSubject, sBody);
							});
						}
						this.supportEnablement(oController, oController._oControlStore.oEmailButton,
								oController._oHeaderFooterOptions.oEmailSettings);
						return oController._oControlStore.oEmailButton;
					},

					getJamShareButton : function(oController) {
						if (!oController._oHeaderFooterOptions.oJamOptions
								|| !(oController._oHeaderFooterOptions.oJamOptions.oShareSettings || oController._oHeaderFooterOptions.oJamOptions.fGetShareSettings)) {
							return null;
						}
						if (!oController._oControlStore.oJamShareButton) {
							oController._oControlStore.oJamShareButton = new sap.ushell.ui.footerbar.JamShareButton({});
						}
						if (oController._oHeaderFooterOptions.oJamOptions.oShareSettings) {
							oController._oControlStore.oJamShareButton
									.setJamData(oController._oHeaderFooterOptions.oJamOptions.oShareSettings);
							this.supportEnablement(oController, oController._oControlStore.oJamShareButton,
									oController._oHeaderFooterOptions.oJamOptions.oShareSettings);
						}
						return oController._oControlStore.oJamShareButton;
					},

					getJamDiscussButton : function(oController) {
						if (!oController._oHeaderFooterOptions.oJamOptions ||
								 !(oController._oHeaderFooterOptions.oJamOptions.oDiscussSettings ||  oController._oHeaderFooterOptions.oJamOptions.fGetDiscussSettings)) {
							return null;
						}
						if (!oController._oControlStore.oJamDiscussButton) {
							oController._oControlStore.oJamDiscussButton = new sap.ushell.ui.footerbar.JamDiscussButton({});
						}
						if (oController._oHeaderFooterOptions.oJamOptions.oDiscussSettings) {
						  oController._oControlStore.oJamDiscussButton.setJamData(oController._oHeaderFooterOptions.oJamOptions.oDiscussSettings);
						  this.supportEnablement(oController, oController._oControlStore.oJamDiscussButton,
								oController._oHeaderFooterOptions.oJamOptions.oDiscussSettings);
						}
						return oController._oControlStore.oJamDiscussButton;
					},

					getBookmarkButton : function(oController) {
						if (oController._oHeaderFooterOptions.bSuppressBookmarkButton || !oController._oHeaderFooterOptions.oAddBookmarkSettings && !oController.isMainScreen()) {
							return null;
						}
						if (!oController._oControlStore.oBookmarkButton) {
							oController._oControlStore.oBookmarkButton = new sap.ushell.ui.footerbar.AddBookmarkButton({});
						}

						var oAppData = {
							url : document.URL,
							title : oController._oControlStore.oTitle.getText()
						};
						jQuery.extend(oAppData, oController._oHeaderFooterOptions.oAddBookmarkSettings || {});
						oController._oControlStore.oBookmarkButton.setAppData(oAppData);
						this.supportEnablement(oController, oController._oControlStore.oBookmarkButton,
								oController._oHeaderFooterOptions.oAddBookmarkSettings || {});
						return oController._oControlStore.oBookmarkButton;
					},

					supportEnablement : function(oController, oButton, oSettings) {
						oButton.setEnabled(!oSettings.bDisabled);
						if (oSettings.sId) {
							oController._oControlStore.oButtonListHelper.mButtons[oSettings.sId] = oButton;
						}
					},

					getAdditionalShareButtons : function(oController) {
						var aRet = [];
						if (!oController._oControlStore.shareButtons) {
							oController._oControlStore.shareButtons = new sap.ca.scfld.md.app.ButtonListHelper(this.oAppImp, 1);
							oController._oControlStore.oButtonListHelper.addButtonListHelper(oController._oControlStore.shareButtons);
						}
						for ( var i = 0; i < oController._oHeaderFooterOptions.additionalShareButtonList.length; i++) {
							var oBtnMeta = {};
							jQuery.extend(oBtnMeta, oController._oHeaderFooterOptions.additionalShareButtonList[i]);
							//additional share buttons shall show the configured icon 
							//delete oBtnMeta.sIcon;
							var oBtn = oController._oControlStore.shareButtons.ensureButton(oBtnMeta, "b");
							aRet.push(oBtn);
						}
						return aRet;
					},

					getFooterRightCount : function(oController, sTSize) {
						var iLimit;
						var iCount = this.getActionsCount(oController);
						
						switch(sTSize)
						{
						case "XL" :
							iLimit = this.detailHeaderFooterRules.maxBtnCountXL;
						  break;
						case "L":
							iLimit = this.detailHeaderFooterRules.maxBtnCountL;
						  break;
						case "M":
							iLimit = this.detailHeaderFooterRules.maxBtnCountM;
						  break;
						case "S":
							iLimit = this.detailHeaderFooterRules.maxBtnCountS;
						  break;						  
						default:
							iLimit = this.detailHeaderFooterRules.maxBtnCountXL;
						}
						
//						if (iCount <= iLimit + 1) {
//							//SIL: has to be refined: this rule shall be valid only for 
//							//generic buttons (sort,group,filter)
//							return iCount;
//						}
						return iLimit;
					},
					
					getActionsCount : function(oController){
						var iCount = 0;
						if (oController._oHeaderFooterOptions.buttonList) {
							iCount = oController._oHeaderFooterOptions.buttonList.length;
						}
						if (oController._oHeaderFooterOptions.oEditBtn) {
							iCount++;
						} else {
							if (oController._oHeaderFooterOptions.oPositiveAction) {
								iCount++;
							}
							if (oController._oHeaderFooterOptions.oNegativeAction) {
								iCount++;
							}
						}
						return iCount;
					},

					createSettingsButton : function(oController) {
						if (oController._oControlStore.oSettingsButton) {
							var bRet = false;
						} else {
							var bRet = true;
							oController._oControlStore.oSettingsButton = sap.ushell.services.AppConfiguration.getSettingsControl();
						}
						if (oController._oHeaderFooterOptions.aAdditionalSettingButtons) {
							if (!oController._oControlStore.oSettingsButtonListHelper) {
								oController._oControlStore.oSettingsButtonListHelper = new sap.ca.scfld.md.app.ButtonListHelper(
										this.oAppImp, 0);
								oController._oControlStore.oButtonListHelper
										.addButtonListHelper(oController._oControlStore.oSettingsButtonListHelper);
							}
							var aButtons = [];
							for ( var i = 0; i < oController._oHeaderFooterOptions.aAdditionalSettingButtons.length; i++) {
								var oBtnMeta = {};
								jQuery.extend(oBtnMeta, oController._oHeaderFooterOptions.aAdditionalSettingButtons[i]);
								delete oBtnMeta.sIcon;
								var oButton = oController._oControlStore.oSettingsButtonListHelper.ensureButton(oBtnMeta, "b");
								oButton.setWidth("100%");
								aButtons.push(oButton);
							}
							oController._oControlStore.oSettingsButton.setMenuItems(aButtons);
						}
						return bRet;
					},

					getGenericButtons : function(iFooterRightCount, oController, oButtonListHelper) {
						var aRet = [];
						if (oController._oHeaderFooterOptions.oSortOptions) {
							aRet.push(this.addSortButton(iFooterRightCount, oController, oButtonListHelper));
						}
						if (oController._oHeaderFooterOptions.oFilterOptions) {
							aRet.push(this.addFilterButton(iFooterRightCount, oController, oButtonListHelper));
						}
						if (oController._oHeaderFooterOptions.oGroupOptions) {
							aRet.push(this.addGroupButton(iFooterRightCount, oController, oButtonListHelper));
						}						
						return aRet;
					},

					addFilterButton : function(iFooterRightCount, oController, oButtonListHelper) {
						var oBtnMeta = {
							sId : oController._oHeaderFooterOptions.oFilterOptions.sId,
							bDisabled : oController._oHeaderFooterOptions.oFilterOptions.bDisabled,
							sIcon : "sap-icon://filter",
							sBtnTxt : this.oAppImp.UilibI18nModel.getResourceBundle().getText("FILTER")
						};
						if (oController._oHeaderFooterOptions.oFilterOptions.aFilterItems) {
							oBtnMeta.onChange = jQuery.proxy(function(oKey) {
								oController._oHeaderFooterOptions.oFilterOptions.onFilterSelected(oKey);
							}, this);
							oBtnMeta.aItems = oController._oHeaderFooterOptions.oFilterOptions.aFilterItems;
							oBtnMeta.sSelectedItemKey = oController._oHeaderFooterOptions.oFilterOptions.sSelectedItemKey;
							var sType = "s"
						} else {
							oBtnMeta.onBtnPressed = jQuery.proxy(function(oEvent) {
								oController._oHeaderFooterOptions.oFilterOptions.onFilterPressed(oEvent);
							}, this);
							var sType = "b";
						}
						return oButtonListHelper.ensureButton(oBtnMeta, sType, iFooterRightCount);
					},

					addSortButton : function(iFooterRightCount, oController, oButtonListHelper) {
						var oBtnMeta = {
							sId : oController._oHeaderFooterOptions.oSortOptions.sId,
							bDisabled : oController._oHeaderFooterOptions.oSortOptions.bDisabled,
							sIcon : "sap-icon://sort",
							sBtnTxt : this.oAppImp.UilibI18nModel.getResourceBundle().getText("SORT")
						};
						if (oController._oHeaderFooterOptions.oSortOptions.aSortItems) {
							oBtnMeta.onChange = jQuery.proxy(function(oKey) {
								oController._oHeaderFooterOptions.oSortOptions.onSortSelected(oKey);
							}, this);
							oBtnMeta.aItems = oController._oHeaderFooterOptions.oSortOptions.aSortItems;
							oBtnMeta.sSelectedItemKey = oController._oHeaderFooterOptions.oSortOptions.sSelectedItemKey;
							var sType = "s"
						} else {
							oBtnMeta.onBtnPressed = jQuery.proxy(function(oEvent) {
								oController._oHeaderFooterOptions.oSortOptions.onSortPressed(oEvent);
							}, this);
							var sType = "b";
						}
						return oButtonListHelper.ensureButton(oBtnMeta, sType, iFooterRightCount);
					},

					addGroupButton : function(iFooterRightCount, oController, oButtonListHelper) {
						var oBtnMeta = {
							sId : oController._oHeaderFooterOptions.oGroupOptions.sId,
							bDisabled : oController._oHeaderFooterOptions.oGroupOptions.bDisabled,
							sIcon : "sap-icon://group-2",
							sBtnTxt : this.oAppImp.UilibI18nModel.getResourceBundle().getText("GROUP")
						};
						if (oController._oHeaderFooterOptions.oGroupOptions.aGroupItems) {
							oBtnMeta.onChange = jQuery.proxy(function(oKey) {
								oController._oHeaderFooterOptions.oGroupOptions.onGroupSelected(oKey);
							}, this);
							oBtnMeta.aItems = oController._oHeaderFooterOptions.oGroupOptions.aGroupItems;
							oBtnMeta.sSelectedItemKey = oController._oHeaderFooterOptions.oGroupOptions.sSelectedItemKey;
							var sType = "s"
						} else {
							oBtnMeta.onBtnPressed = jQuery.proxy(function(oEvent) {
								oController._oHeaderFooterOptions.oGroupOptions.onGroupPressed(oEvent);
							}, this);
							var sType = "b";
						}
						return oButtonListHelper.ensureButton(oBtnMeta, sType, iFooterRightCount);
					},

					ensureHeader : function(oController, oPage, bGenericBackButton, bSuppressBackButton) {
						if (!oController._oControlStore.oHeaderBar) {
							oController._oControlStore.oHeaderBar = new sap.m.Bar();
							oController._oControlStore.oTitle = new sap.m.Label();
							oController._oControlStore.oHeaderBar.addContentMiddle(oController._oControlStore.oTitle);
							oPage.setCustomHeader(oController._oControlStore.oHeaderBar);
						}
						this.setBackButton(oController, oController._oControlStore.oHeaderBar, bGenericBackButton, bSuppressBackButton);
					},
					
					setBackButton : function(oController, oBar, bGenericBackButton, bSuppressBackButton){
						if (bSuppressBackButton){
							oController._oControlStore.fBack = null;
						} else if (bGenericBackButton && oController._oHeaderFooterOptions.onBack == undefined){
							if (window.history.length == 0){
								oController._oControlStore.fBack = null;
							} else {
								oController._oControlStore.fBack = function(){
									window.history.back(1);
								};
							}
						} else {
							oController._oControlStore.fBack = oController._oHeaderFooterOptions.onBack;
						}
						if (oController._oControlStore.oBackButton) {
							oController._oControlStore.oBackButton.setVisible(!!oController._oControlStore.fBack);
						} else if (oController._oControlStore.fBack) {
							oController._oControlStore.oBackButton = new sap.m.Button();
							oController._oControlStore.oBackButton.setIcon("sap-icon://nav-back");
							oController._oControlStore.oBackButton.attachPress(function(oEvent) {
								oController._oControlStore.fBack(oEvent);
							});
							oBar.addContentLeft(oController._oControlStore.oBackButton)
						}
					},

					getGenericCount : function(oController) {
						var iRet = 0
						if (oController._oHeaderFooterOptions.oSortOptions) {
							iRet++;
						}
						if (oController._oHeaderFooterOptions.oFilterOptions) {
							iRet++;
						}
						if (oController._oHeaderFooterOptions.oGroupOptions) {
							iRet++;
						}
						return iRet;
					}

				});

// default implementation how page is retireved from the controller
sap.ca.scfld.md.app.CommonHeaderFooterHelper.getPageFromController = function(oController){
	return oController.getView().getContent()[0];
};
