jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.ca.scfld.md.app.CommonHeaderFooterHelper");

sap.ui.core.mvc.Controller
		.extend(
				"sap.ca.scfld.md.controller.BaseMasterController",
				{

					constructor : function() {
						var that = this;
						// Make sure that our init-coding is executed even if the App overrides onInit() and does not call
						// onInit() of the super class.
						var fMyOnInit = jQuery.proxy(function() {
							var bIsInitialCall = true;
							// get routing object for navigation
							this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);

							this.oApplicationImplementation = sap.ca.scfld.md.app.Application.getImpl();
							this.oApplicationFacade = this.oApplicationImplementation.oConfiguration.oApplicationFacade;

							this.oConnectionManager = this.oApplicationImplementation.getConnectionManager();
							this.iRequestCountStart = this.oConnectionManager.iRequestCount;
							this.oApplicationImplementation.setModels(this);
							
							// needed for set item from bookmark navigation
							this.oRouter.attachRoutePatternMatched(function(oEvent) {
								var sName = oEvent.getParameter("name");
								var sNewHash;
								var bIsInitial = bIsInitialCall;

								bIsInitialCall = false;
								this._bIsDetailRoute = false;
								this._bIsMasterRoute = false;

								if (sName === "detail") {
									this._bIsDetailRoute = true;
									// call of hook function for hash resolution
									var sResolvedHash = this.resolveHash(oEvent);										
									sNewHash = sResolvedHash === undefined ? "/" + oEvent.getParameter("arguments").contextPath : sResolvedHash

									//if the call is initial the function gets invoked anyway we don't want to invoke it twice
									if(!bIsInitial && this._hashParam !== sNewHash) {
										this._hashParam = sNewHash;
										this._selectDetail();
									}

								}
								if (sName === "master") {
									this._bIsMasterRoute = true;
								}

								this._hashParam = sNewHash;
							}, this);
						}, this);

						var fAppOnInit = jQuery.proxy(this.onInit, this);
						this.onInit = jQuery.proxy(function() {
							fMyOnInit();
							fAppOnInit();
							if (!this.bIsMasterListBindingExists) {
								var oList = this.getList();
								if (oList) {
									var oBinding = oList.getBinding("items");
									this.oApplicationImplementation.setMasterListBinding(this, oBinding);
								}
							}
							// when no request was sent, header and footer will be displayed immediately
							if (this.iRequestCountStart == this.oConnectionManager.iRequestCount) {
								this.oApplicationImplementation.oMHFHelper.defineMasterHeaderFooter(this);
							}
						}, this);
					},

					onInit : function() {
						// do not add any coding here. Just needed in case the App calls onInit() of the super class
					},
					
					/*
					 * override this method if you have not used the standard way to include the page in the view
					 */
					getPage : function(){
						return sap.ca.scfld.md.app.CommonHeaderFooterHelper.getPageFromController(this);
					}, 
					
					/**
					 * function resolveHash needs to be overridden to define a App specific navigation hash resolution
					 * the default navigation hash handler assumes that the hash parameter corresponds to a list item context binding
					 * @param oEvent
					 *          event from the attachRoutePatternMatched handler
					 * @return 
					 *          binding context derived from resolved Url. Decoding can be done by usage of global function decodeURIComponent
					 *          e.g. decodeURIComponent(oEvent.getParameter("arguments").contextPath)
					 */					
					resolveHash : function(oEvent){
						return;
					},

					_onMasterListLoaded : function(oEvent) { 
						if(oEvent.getParameter("reason") === "change") {
							this.onDataLoaded();
							this.oApplicationImplementation.onMasterRefreshed(this);
							oEvent.oSource.detachChange(this._onMasterListLoaded, this);

						}
					},

					_onMasterListChanged : function(oEvent) {
						if(oEvent.getParameter("reason") === "change") {
							this.oApplicationImplementation.onMasterChanged(this);
						}
					},

					/*************************************************************************************************************
					 * this method is meant to be overridden by the app It shall return an object describing the header or footer
					 * content Return <code>null</code> if you want to define header and footer on your own (default behavior).
					 * Otherwise return an object with attributes determining the header and footer. The following attributes are
					 * supported: <code>onEditPress</code> a handler for the edit button on the master list. Note that this
					 * button will be displayed if this attribute is available. <code>sI18NMasterTitle</code> the i18n-key for
					 * the title of the master list in the i18n-properties file of the App. Note that the corresponding text
					 * should possess a placeholder for the number of displayed items (e.g. <i>Purchase Orders ({0})</i>) The
					 * <code>sI18NSearchFieldPlaceholder</code> the i18n-key for the placeholder text to be displayed in the
					 * search field. Note that this attribute should only be used if you want to display a more specific text then
					 * default ("Search"). E.g. "Search for Purchase Order ...". Normally, this will only be sensible, if backend
					 * search is enabled or the application defines a very specific frontend search.
					 */
					getHeaderFooterOptions : function() {
						return null;
					},

					setBtnEnabled : function(sId, bEnabled) {
						if (this._oControlStore.oButtonListHelper) {
							this._oControlStore.oButtonListHelper.setBtnEnabled(sId, bEnabled);
						}
					},

					setBtnText : function(sId, sText) {
						if (this._oControlStore.oButtonListHelper) {
							this._oControlStore.oButtonListHelper.setBtnText(sId, sText);
						}
					},

					refreshHeaderFooterForEditToggle : function() {
						this.oApplicationImplementation.oMHFHelper.defineMasterHeaderFooterInner(this);
					},

					_handleSelect : function(oEvent) {
						this.setListItem(oEvent.getParameter("listItem"));
						if (!jQuery.device.is.phone) {
							// note: this only applies when device is in
							// portrait mode
							this.oApplicationImplementation.oSplitContainer.hideMaster();
						}
					},

					_handleItemPress : function(oEvent) {

						this.setListItem(oEvent.getSource());
					},

					getList : function() {
						return this.byId("list");
					},

					setListItem : function(oItem) {

						var oList = this.getList();
						oList.removeSelections();
						oItem.setSelected(true);
						oList.setSelectedItem(oItem, true);

						this.oRouter.navTo("detail", {
							contextPath : oItem.getBindingContext(this.sModelName).getPath().substr(1)
						}, !jQuery.device.is.phone);
					},

					/**
					 * Can be overridden where selection is not the default data load behavior
					 * 
					 */
					onDataLoaded : function() {
						this._selectDetail();
					},

					/**
					 * Initially selects the first item (excluding for phones) Select the second items in case of a grouped list,
					 * select the first one otherwhise
					 */
					_selectDetail : function() {
						var list = this.getList();
						var items = list.getItems();
						
						//Only do this on the master/detail view
						if (!(this._bIsDetailRoute || this._bIsMasterRoute)) {
							return;
						}

						// no items available in list: navigate to empty page
						if (items.length === 0 && this.oRouter._oRoutes.noData !== undefined) {
							this.navToEmptyView();
							return;
						}

						// in case items are available and there are no selected items, select the first item in the list
						// (grouping: select the second item)
						if (!jQuery.device.is.phone && this._bIsMasterRoute && !list.getSelectedItem()) {
							// in case of a grouped list, need to select the second item (first one is the group header)
							if (list.getBindingInfo("items").binding.isGrouped()) {
								if (items.length > 1) {
									this.setListItem(items[1]);
								} else {
									jQuery.sap.log.error("Selection of the first list item failed as there is only 1 item in a grouped list");
								}
							} else {
								this.setListItem(items[0]);
							}
						}

						if(this._bIsDetailRoute) {
							// deeplink scenario: identify corresponding list item from Url hash

							for ( var i = 0; i < items.length; i++) {
								if ((items[i] instanceof sap.m.GroupHeaderListItem)){
									continue;
								}
								if (items[i].getBindingContext(this.sModelName).getPath() != this._hashParam) {
									continue;
								}

								if(!jQuery.device.is.phone) {
									list.removeSelections();
									items[i].setSelected(true);
								}

								return;

							}

							//deeplink but the item was not in the list: pass hash to applyFilterFromContext (needs to be overridden by the app)
							if(this.isBackendSearch()) {
								this.applyFilterFromContext(this._hashParam);
							} else {
								this.navToEmptyView();
							}

						}
					},
					
					/**
					 * @private
					 * Navigates to the empty view
					 */
					navToEmptyView : function() {
            this.showEmptyView();
					},

					showEmptyView : function(sViewTitle, sLanguageKey) {
						var oList = this.getList();
						oList.removeSelections();
					
						var oView = this.oRouter.getView("sap.ca.scfld.md.view." + this.getNoDataViewName(), sap.ui.core.mvc.ViewType.XML);
						var oSplitContainer = this.getSplitContainer();

						oSplitContainer.addPage(oView);
						
						if (sViewTitle === undefined){
							sViewTitle = "DETAIL_TITLE"
						}		
						
						if (sLanguageKey === undefined){
							sLanguageKey = "NO_ITEMS_AVAILABLE"
						}

						oSplitContainer.to(oView.getId(), "show", {
							viewTitle : sViewTitle,
							languageKey : sLanguageKey
						});

						return this;
					},
					
					/**
					 * returns the split container, that contains the master view
					 */
					getSplitContainer : function () {
						return this.getView().getParent().getParent();
					},

					getNoDataViewName : function() {
						return "empty";
					},					
					
					/**
					 * Can be overrideden to define a App specific frontend search. Note that in most cases it is more sensible to
					 * override {@link applySearchPatternToListItem}
					 * 
					 * @param sFilterPattern
					 *          the content of the search field
					 * @return the number of list items still visible
					 */
					applySearchPattern : function(sFilterPattern) {
						sFilterPattern = sFilterPattern.toLowerCase();
						var aListItems = this.getList().getItems();
						var bVisibility;

						var iCount = 0;
						for ( var i = 0; i < aListItems.length; i++) {
							bVisibility = this.applySearchPatternToListItem(aListItems[i], sFilterPattern);
							aListItems[i].setVisible(bVisibility);
							if (bVisibility) {
								iCount++;
							}
						}
						return iCount;
					},

					/**
					 * This method needs to be overridden in case backend search is active (see {@link isBackendSearch}). It
					 * should modify the list binding such that it reflects the filter entered in the search field. Sample coding:
					 * var oFilter = new sap.ui.model.Filter("MyField", sap.ui.model.FilterOperator.EQ, sFilterPattern); var
					 * aFilters = [oFilter]; oBinding.filter(aFilters);
					 * 
					 * @param sFilterPattern
					 *          the content of the search field
					 * @param oBinding
					 *          the context binding of the list items to be modified.
					 * 
					 * list binding needs to be updated with filter parameter -> this will trigger a new oData get automatically
					 */
					applyBackendSearchPattern : function(sFilterPattern, oBinding) {

					},
					
					/**
					 * @param sContext
					 *           contains the hash provided via bookmark navigation
					 * Deeplink navigation with backend search active: when navigating to the app via bookmark, the bookmarked item
					 * might not be part of the initially loaded list items (usually the case for scenarios where more items exist in the backend
					 * than shown at once in the list). The assumption in this case is that the backend search is active in order to be able to retrieve
					 * further list items. If the check on the initial list against the navigation context value gives no result, this method is being called. 
					 * This method needs to be overridden by apps where this scenario applies; the app has then to take care about retrieving the correct item via backend search
					 */
					applyFilterFromContext : function(sContext) {
						this.navToEmptyView();
					},

					/**
					 * Override this method when defining a custom frontend search. This method will be called for each list item
					 * and decides whether it fulfills the search criteria.
					 * 
					 * @param oItem
					 *          the item to be tested
					 * @param sFilterPattern
					 *          the search pattern
					 * @returns {boolean} whether the item fulfills the search pattern
					 */
					applySearchPatternToListItem : function(oItem, sFilterPattern) {
						if (sFilterPattern == "") {
							return true;
						}
						var oIteshellata = oItem.getBindingContext(this.sModelName).getProperty();
						for ( var sKey in oIteshellata) {
							var sValue = oIteshellata[sKey];
							// if (sValue instanceof Date) {
							// //just for the filter take each number as string
							// sValue = sValue.getDate() + "." +
							// sValue.getMonth() + "." + sValue.getFullYear();
							// }
							if (typeof sValue == "string") {
								if (sValue.toLowerCase().indexOf(sFilterPattern) != -1) {
									return true;
								}
							}
						}
						// if nothing found in unformatted data, check UI
						// elements
						if ((oItem.getIntro() && oItem.getIntro().toLowerCase().indexOf(sFilterPattern) != -1)
								|| (oItem.getTitle() && oItem.getTitle().toLowerCase().indexOf(sFilterPattern) != -1)
								|| (oItem.getNumber() && oItem.getNumber().toLowerCase().indexOf(sFilterPattern) != -1)
								|| (oItem.getNumberUnit() && oItem.getNumberUnit().toLowerCase().indexOf(sFilterPattern) != -1)
								|| (oItem.getFirstStatus() && oItem.getFirstStatus().getText().toLowerCase().indexOf(sFilterPattern) != -1)
								|| (oItem.getSecondStatus() && oItem.getSecondStatus().getText().toLowerCase().indexOf(sFilterPattern) != -1)) {
							return true;
						}
						// last source is attribute array
						var aAttributes = oItem.getAttributes();
						for ( var j = 0; j < aAttributes.length; j++) {
							if (aAttributes[j].getText().toLowerCase().indexOf(sFilterPattern) != -1) {
								return true;
							}
						}
						return false;
					},

					_applyClientSideSearch : function() {
						var sFilterPattern = this._oControlStore.oMasterSearchField.getValue();
						var iCount = this.applySearchPattern(sFilterPattern);
						this.oApplicationImplementation.oMHFHelper.setMasterTitle(this, iCount);
					},

					/**
					 * determines whether search is triggered with each change of the search field content (or only when the user
					 * explicitly starts the search). Default implementation triggers search immediately, exactly when backend
					 * search is disabled (see {@link isBackendSearch}. Override this method if you want 'live' search on backend
					 * or explicit search on frontend.
					 */
					isLiveSearch : function() {
						return !this.isBackendSearch();
					},

					/**
					 * determines whether search (triggered by search field) is performed on backend or frontend (frontend being
					 * default behavior).
					 */
					isBackendSearch : function() {
						return false;
					},

					/**
					 * when ever you bind a master list dynamically you have to call this method
					 */
					registerMasterListBind : function(oList) {
						if (oList) {
							var oBinding = oList.getBinding("items");
							this.oApplicationImplementation.setMasterListBinding(this, oBinding);
						}
						// when no request was sent, header and footer will be displayed immediately
						if (this.iRequestCountStart == this.oConnectionManager.iRequestCount) {
							this.oApplicationImplementation.oMHFHelper.defineMasterHeaderFooter(this);
						}
					}
				});
