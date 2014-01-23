jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.ca.scfld.md.app.CommonHeaderFooterHelper");

sap.ui.core.mvc.Controller.extend("sap.ca.scfld.md.controller.ScfldMasterController", {
	_onMasterListChanged : function(oEvent) {
		if (oEvent.getParameter("reason") === "change") {
			this._oApplicationImplementation.onMasterChanged(this);
			this.selectItemMatchingTheLastNavigation();
		}
	},
	
	_handleItemPress : function(oEvent) {
		this.setListItem(oEvent.getSource());
	},
	_handleSelect : function(oEvent) {
		this.setListItem(oEvent.getParameter("listItem"));
		if (!sap.ui.Device.system.phone) {
			// note: this only applies when device is in
			// portrait mode
			this._oApplicationImplementation.oSplitContainer.hideMaster();
		}
	},
	_onMasterListLoaded : function(oEvent) {
		if (oEvent.getParameter("reason") === "change") {
			this.onDataLoaded();
			this._oApplicationImplementation.onMasterRefreshed(this);
			oEvent.oSource.detachChange(this._onMasterListLoaded, this);
			this._bListLoaded = true;
			this.fireEvent("_onMasterListLoaded");
		}
	},
	constructor : function() {
		sap.ui.core.mvc.Controller.apply(this, arguments);
	
		var that = this;
		this._bListLoaded = false;
		var iRequestCount = 0;
		var oConnectionManager = null;
		// Make sure that our init-coding is executed even if the App overrides onInit() and does not call
		// onInit() of the super class.
		var fMyOnInit = jQuery.proxy(function() {
			// get routing object for navigation
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	
			this._oApplicationImplementation = sap.ca.scfld.md.app.Application.getImpl();
			this.oApplicationFacade = this._oApplicationImplementation.oConfiguration.oApplicationFacade;
	
			oConnectionManager = this._oApplicationImplementation.getConnectionManager();
			iRequestCount = oConnectionManager.iRequestCount;
			this._oApplicationImplementation.setModels(this);
	
			this._iRequestCount = 0;
			var oModel = oConnectionManager.getModel(this.sModelName);
			oModel.attachRequestSent(null, function() {
				this._iRequestCount ++;
			}, this);

			oModel.attachRequestCompleted(null, function() {
				this._iRequestCount --;
				//some requests are sent before we attach us, we are only interested when 
				//there is no queue after initializing the controller
				if(this._iRequestCount < 0) {
					this._iRequestCount = 0;
				}
				if(this._iRequestCount === 0) {
					this.fireEvent("_allListModelUpdatesCompleted");
				}
			}, this);

			// needed for set item from bookmark navigation
			this.oRouter.attachRoutePatternMatched(function(oEvent) {
				this._sDetailContextPath = undefined;
	
				if (this.isDetailRoute(oEvent)) {
					this._onDetailMatched(oEvent);
				}
				if (this.isMasterRoute(oEvent)) {
					this._onMasterMatched(oEvent);
				}
			}, this);
		}, this);
	
		var fAppOnInit = jQuery.proxy(this.onInit, this);
		this.onInit = jQuery.proxy(function() {
			fMyOnInit();
			fAppOnInit();
			var oList = this.getList();
			if (oList) {
				var oBinding = oList.getBinding("items");
				this._oApplicationImplementation.setMasterListBinding(this, oBinding);
			}
			// when no request was sent, header and footer will be displayed immediately
			if (iRequestCount == oConnectionManager.iRequestCount) {
				this._oApplicationImplementation.oMHFHelper.defineMasterHeaderFooter(this);
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
	
	getList : function() {
		return this.byId("list");
	},
	
	/**
	 * Maybe overridden.
	 * Sets the list item and navigates to the corresponding hash
	 */
	setListItem : function(oItem) {
		var oList = this.getList();
		if (oList) { 
			oList.removeSelections(true); 
		}		
		oItem.setSelected(true);
		this._navToListItem(oItem);
	},
	
	/**
	 * @public may be overwritten to determine if the route is a detail route
	 * @param oEvent: the route matched event
	 */
	isDetailRoute : function (oEvent) {
		var sName = oEvent.getParameter("name");
		return sName === this.getDetailRouteName();
	},
	
	/**
	 * returns the name of the detail route
	 */
	getDetailRouteName : function() {
		return "detail";
	},
	
	/**
	 * @public may be overwritten to determine if the route is a master route
	 * @param oEvent: the route matched event
	 */
	isMasterRoute : function (oEvent) {
		var sName = oEvent.getParameter("name");
		return sName === this.getMasterRouteName();
	},
	
	/**
	 * returns the name of the master route
	 */
	getMasterRouteName : function() {
		return "master";
	},
	
	/**
	 * gets executed when the hash matches the pattern of the master route
	 */
	_onMasterMatched : function (oEvent) {
		//Do nothing on the phone, just show the list
		if(sap.ui.Device.system.phone) {
			return;
		}
	
		//Handle desktop
	
		//Wait for the list to load - then select the first item
		if(!this._bListLoaded) {
			this.attachEventOnce("_onMasterListLoaded", function() {
				this.selectFirstItem();
			}, this);
		} else {
			this.selectFirstItem();
		}
	},
	
	/**
	 * gets executed when the hash matches the pattern of the detail route
	 */
	_onDetailMatched : function (oEvent) {
		var sContextPath = this._sDetailContextPath = this.getBindingContextPathFor(oEvent.getParameter("arguments"));
		//List is still getting refreshed
		if(this._iRequestCount > 0) {
			this.attachEventOnce("_allListModelUpdatesCompleted", function () {
				this._handleDetailMatched(sContextPath);
			}, this);
			return;
		}
		
		//Wait for the list to load - then select the corresponding item
		if(!this._bListLoaded) {
			this.attachEventOnce("_onMasterListLoaded", function() {
				this._handleDetailMatched(sContextPath);
			}, this);
		} else {
			this._handleDetailMatched(sContextPath);
		}
	},
	
	/**
	 * checks if the item exists in the list, if it does not it will show the empty view
	 */
	_handleDetailMatched : function (sContextPath) {
		//no context path was given, an app might not have implemented this. Return before errors happen.
		if(sContextPath === undefined) {
			return;
		}
	
		var oItem = this.findItemByContextPath(sContextPath);
	
		//Item was not found
		if(!oItem) {
			//In the desktop case with backend search, the app can try to load more entries, if not the empty view will show up
			if (!sap.ui.Device.system.phone && this.isBackendSearch()) {
				this.applyFilterFromContext(sContextPath);
				return;
			}
			
			//we show the empty screen as default
			this.noItemFoundForContext(sContextPath);
			return;
		}
	
		var oList = this.getList();
		//Clear the list selection in the desktop case.
		if(!sap.ui.Device.system.phone && oItem) {
			if (oList) { 
				oList.removeSelections(true); 
			}			
			oItem.setSelected(true);
		}
	},

	/**
	 * selects the last item that was hit by the detail route
	 */
	selectItemMatchingTheLastNavigation : function() {
		var oList = this.getList();
		if(this._sDetailContextPath === undefined) {
			return;
		}

		var oItem = oList.getSelectedItem();
		var oContext = oItem && oItem.getBindingContext(this.sModelName);

		//If this item is already selected, don't iterate over the whole list again
		if(oContext && oContext.getPath === this._sDetailContextPath) {
			return;
		}

		oItem = this.findItemByContextPath(this._sDetailContextPath);
		
		if(oItem) {
			if (oList) { 
				oList.removeSelections(true); 
			}					
			oItem.setSelected(true);
		}
	},

	/**
	 * may be overwritten by the app - react on the case when an item was not found in the list after navigating
	 * default implementation shows the empty view
	 */
	noItemFoundForContext : function(sContextPath) {
		this.showEmptyView();
	},
	
	/**
	 * Finds an item by the given contextPath
	 * @param {string} sContextPath
	 * @returns a listItem or null if it was not found
	 */
	findItemByContextPath : function (sContextPath) {
		var oBindingContext;
		var oList = this.getList();
		var aItems = oList.getItems();
	
		var result = jQuery.grep(aItems, function(oItem) {
			oBindingContext = oItem.getBindingContext(this.sModelName);
	
			if (oItem instanceof sap.m.GroupHeaderListItem) {
				return false;
			}
	
			if (oBindingContext && (oBindingContext.getPath() !== sContextPath)) {
				return false;
			}
	
			return true;
		});
		
		return result[0] || null;
	},
	
	
	/**
	 * May be overwritten by the app: should create a Binding path from the arguments of the detail route, that matches a list item
	 */
	getBindingContextPathFor : function (oArguments) {
		if(oArguments.contextPath === undefined) {
			jQuery.sap.log.warning("The context path was undefined. If you are using a route without it please overwrite the function getBindingContextPathFor in your master controller.");
			return undefined;
		}
	
		return "/" + oArguments.contextPath;
	},
	
	/**
	 * Selects and navigates to the first item of the List
	 */
	selectFirstItem : function () {
		var oList = this.getList();
		var aItems = oList.getItems();
		var oListItem;
		
		if(aItems.length < 1) {
			return;
		}
		oListItem = this._oApplicationImplementation.getFirstListItem(this);
		
	  if (oListItem){
		  this.setListItem(oListItem);
	  }
	},

	/**
	 *  Navigates to a list item and adds a history on the phone. In desktop it is not history relevant
	 */
	_navToListItem : function(oListItem) {
		this.oRouter.navTo(this.getDetailRouteName(), 
				this.getDetailNavigationParameters(oListItem), 
				!jQuery.device.is.phone);
	},

	/**
	 * may be overwritten by the app: Should create the parameters necessary for injecting the values into the Detail route of the app.
	 * @params : oListItem
	 */
	getDetailNavigationParameters : function(oListItem) {
		return {
			contextPath : oListItem.getBindingContext(this.sModelName).getPath().substr(1)
		};
	},
	
	/***********************************************************************************************************
	 * this method is meant to be overridden by the app It shall return an object describing the header or
	 * footer content Return <code>null</code> if you want to define header and footer on your own (default
	 * behavior). Otherwise return an object with attributes determining the header and footer. The following
	 * attributes are supported: <code>onEditPress</code> a handler for the edit button on the master list.
	 * Note that this button will be displayed if this attribute is available. <code>sI18NMasterTitle</code>
	 * the i18n-key for the title of the master list in the i18n-properties file of the App. Note that the
	 * corresponding text should possess a placeholder for the number of displayed items (e.g. <i>Purchase
	 * Orders ({0})</i>) The <code>sI18NSearchFieldPlaceholder</code> the i18n-key for the placeholder text
	 * to be displayed in the search field. Note that this attribute should only be used if you want to display
	 * a more specific text then default ("Search"). E.g. "Search for Purchase Order ...". Normally, this will
	 * only be sensible, if backend search is enabled or the application defines a very specific frontend
	 * search.
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
		this._oApplicationImplementation.oMHFHelper.defineMasterHeaderFooterInner(this);
	},
	
	/**
	 * Can be overwritten by the app: where selection is not the default data load behavior
	 * 
	 */
	onDataLoaded : function() {
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
	 * @private
	 * Navigates to the empty view
	 */
	navToEmptyView : function() {
		this.showEmptyView();
	},
	
	/**
	 * Can be overwritten to define a App specific frontend search. Note that in most cases it is more sensible
	 * to override {@link applySearchPatternToListItem}
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
	 * should modify the list binding such that it reflects the filter entered in the search field. Sample
	 * coding: var oFilter = new sap.ui.model.Filter("MyField", sap.ui.model.FilterOperator.EQ, sFilterPattern);
	 * var aFilters = [oFilter]; oBinding.filter(aFilters);
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
	 *          contains the hash provided via bookmark navigation Deeplink navigation with backend search
	 *          active: when navigating to the app via bookmark, the bookmarked item might not be part of the
	 *          initially loaded list items (usually the case for scenarios where more items exist in the
	 *          backend than shown at once in the list). The assumption in this case is that the backend search
	 *          is active in order to be able to retrieve further list items. If the check on the initial list
	 *          against the navigation context value gives no result, this method is being called. This method
	 *          needs to be overridden by apps where this scenario applies; the app has then to take care about
	 *          retrieving the correct item via backend search
	 */
	applyFilterFromContext : function(sContext) {
		this.showEmptyView();
	},
	
	/**
	 * Override this method when defining a custom frontend search. This method will be called for each list
	 * item and decides whether it fulfills the search criteria.
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
				|| (oItem.getSecondStatus() && oItem.getSecondStatus().getText().toLowerCase()
						.indexOf(sFilterPattern) != -1)) {
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
		this._oApplicationImplementation.oMHFHelper.setMasterTitle(this, iCount);
	},
	
	/**
	 * determines whether search is triggered with each change of the search field content (or only when the
	 * user explicitly starts the search). Default implementation triggers search immediately, exactly when
	 * backend search is disabled (see {@link isBackendSearch}. Override this method if you want 'live' search
	 * on backend or explicit search on frontend.
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
	registerMasterListBind : function() {
		var oList = this.getList();
		var oBinding = oList.getBinding("items");
		var oConnectionManager = this._oApplicationImplementation.getConnectionManager()
		var iRequestCount = oConnectionManager.iRequestCount;
		this._oApplicationImplementation.setMasterListBinding(this, oBinding);
		// when no request was sent, header and footer will be displayed immediately
		if (iRequestCount == oConnectionManager.iRequestCount) {
			this._oApplicationImplementation.oMHFHelper.defineMasterHeaderFooter(this);
		}
	}
});
