jQuery.sap.declare("sap.ca.scfld.md.app.MasterHeaderFooterHelper");

sap.ui.base.Object.extend("sap.ca.scfld.md.app.MasterHeaderFooterHelper", {

	constructor : function(oApplicationImplementation) {
		this.oApplicationImplementation = oApplicationImplementation;
		this.oCommonHeaderFooterHelper = new sap.ca.scfld.md.app.CommonHeaderFooterHelper(oApplicationImplementation, {});
	},

	// set master header bar and footer bar
	defineMasterHeaderFooter : function(oController) {

		this.defineMasterHeaderFooterInner(oController);
	},

	defineMasterHeaderFooterInner : function(oController) {
		var oOptions = oController.getHeaderFooterOptions();
		this.setHeaderFooter(oController, oOptions);
	},
				
	setHeaderFooter : function(oController, oOptions){
		// get content information from app
		if (!oOptions) {
			return;
		}
		var oPage = this.oCommonHeaderFooterHelper.startBuild(oController, oOptions, { bEditState : false, bIsSearching : false });
		this.defineHeader(oController, oPage);
		this.defineFooter(oController, oPage);
		this.oApplicationImplementation.oCurController.MasterCtrl = oController;	
		this.oApplicationImplementation.oCurController.FullCtrl = null;			
		
		this.oCommonHeaderFooterHelper.endBuild(oController);
	},

	// function defining the master header
	defineHeader : function(oController, oPage) {
		var oCustHeader = oPage.getCustomHeader();
		if (!oCustHeader) {
			oCustHeader = new sap.m.Bar();
			oPage.setCustomHeader(oCustHeader);
		}
		this.defineMasterSubHeader(oController, oPage);
		var iCount = -1;
		if (!oController.isBackendSearch()) {
			if (oController._oControlStore.oMasterSearchField) {
				var sFilterPattern = oController._oControlStore.oMasterSearchField.getValue();
				if (sFilterPattern) {
					iCount = oController.applySearchPattern(sFilterPattern);
				}
			}
		}
		if (iCount < 0) {
			if (oController._oMasterListBinding){
				iCount = oController._oMasterListBinding.getLength();
			} else {
			  var oList = oController.getList();
			  var aItems = oList.getItems();
			  iCount = 0;
			  for (var i = 0; i < aItems.length; i++){
				  if (!(aItems[i] instanceof sap.m.GroupHeaderListItem)){
					  iCount++;
				  }
			  }
			}
		}
		this.defineMasterTitle(oController, oCustHeader, iCount);
		this.oCommonHeaderFooterHelper.setBackButton(oController, oCustHeader, true);
		this.defineEditButton(oController, oCustHeader);
	},

	// function defining the master footer
	defineFooter : function(oController, oPage) {
		this.defineSettingsButton(oController);
		this.defineFooterRight(oController);
	},

	// define subheader of master list
	defineMasterSubHeader : function(oController, oPage) {
		if (oController._oControlStore.oMasterSearchField || oController._oControlStore.oMasterPullToRefresh) {
			return; // subheader has already been set
		}
		var oSubHeader = new sap.m.Bar();
		oPage.setSubHeader(oSubHeader);
		var bIsTouch = sap.ui.Device.support.touch;
		this.createMasterSearchField(oController, oSubHeader, bIsTouch);
		if (bIsTouch) {
			this.createMasterPullToRefresh(oController, oPage);
		}
	},

	createMasterSearchField : function(oController, oSubHeader, bIsTouch) {
		oController._oControlStore.oMasterSearchField = new sap.m.SearchField();
		oController._oControlStore.oMasterSearchField.setShowRefreshButton(!bIsTouch);
		//init search text
		oController._oControlStore.sMasterSearchText = null;
		// currently required for refresh and search
		oController._oControlStore.oMasterSearchField.attachSearch(jQuery.proxy(function(oEvent) {
			this.handleMasterSearch(oController, oEvent);
		}, this));
		if (oController.isLiveSearch()) {
			oController._oControlStore.oMasterSearchField.attachLiveChange(jQuery.proxy(oController._applyClientSideSearch,
					oController));
		}
		if (oController._oHeaderFooterOptions.sI18NSearchFieldPlaceholder) {
			var oBundle = this.oApplicationImplementation.AppI18nModel.getResourceBundle();
			var sPlaceholder = oBundle.getText(oController._oHeaderFooterOptions.sI18NSearchFieldPlaceholder);
		} else {
			var oBundle = this.oApplicationImplementation.UilibI18nModel.getResourceBundle();
			var sPlaceholder = oBundle.getText("MASTER_PLACEHOLDER_SEARCHFIELD");
		}
		oController._oControlStore.oMasterSearchField.setPlaceholder(sPlaceholder);
		oSubHeader.addContentMiddle(oController._oControlStore.oMasterSearchField);
	},

	createMasterPullToRefresh : function(oController, oPage) {
		oController._oControlStore.oMasterPullToRefresh = new sap.m.PullToRefresh();
		oController._oControlStore.oMasterPullToRefresh.attachRefresh(jQuery.proxy(function() {
			this.handleMasterPullToRefresh(oController);
		}, this));
		oPage.insertContent(oController._oControlStore.oMasterPullToRefresh, 0);
	},

	handleMasterSearch : function(oController, oEvent) {
		var bBackendSearch = oController.isBackendSearch();
		var bIsRefresh = oEvent.getParameter("refreshButtonPressed");
		if (bIsRefresh || bBackendSearch) {
			this.refreshList(oController, bIsRefresh);
		}
		if (!bBackendSearch && !oController.isLiveSearch()) {
			oController._applyClientSideSearch();
		}
		// todo: handle paging case
	},

	handleMasterPullToRefresh : function(oController) {
		this.refreshList(oController, true);
	},

	refreshList : function(oController, bIsRefresh) {
		//restore old search pattern if we are in refresh mode
		var bIsBackendSearch = oController.isBackendSearch();
		bIsRefresh = bIsRefresh && oController._oControlStore.sMasterSearchText != null;
		oController._oControlStore.bIsSearching = !bIsRefresh;          // when we are in a search we will not do a renavigation later on
		if (bIsRefresh){
			//in this case not confirmed search text will be replaced by last entered
			var sTempSearchField = oController._oControlStore.sMasterSearchText; 
			oController._oControlStore.oMasterSearchField.setValue(sTempSearchField);			
		}else{
			var sTempSearchField = oController._oControlStore.oMasterSearchField.getValue();
		}
		var oList = oController.getList();
		//collect selected list items
		this.oApplicationImplementation.aKeyValues = null;
		if (this.oApplicationImplementation.aMasterKeys) {
			var aItems = oList.getItems();
			for ( var i = 0; i < aItems.length; i++) {
				var oListItem = aItems[i];
				if (oListItem.getSelected()) {
					this.oApplicationImplementation.aKeyValues = [];
					var oItemBinding = oListItem.getBindingContext(this.sModelName);
					for ( var j = 0; j < this.oApplicationImplementation.aMasterKeys.length; j++) {
						this.oApplicationImplementation.aKeyValues.push(oItemBinding
								.getProperty(this.oApplicationImplementation.aMasterKeys[j]));
					}
					i = aItems.length;
				}
			}
		}
		// give the application the possibility to step in. There are two possible scenarios for this:
		// 1. Application might want to prevent the refresh (e.g. because there are unsaved	changes)
		// 2. List is not bound to an oData model but to a json model -> must do refresh themselves
		if (oController._oHeaderFooterOptions.onRefresh){
			var fRefreshCompleted = jQuery.proxy(function(){
				this.oApplicationImplementation.onMasterRefreshed(oController);
		    if (oController._oControlStore.oMasterPullToRefresh){
		     	oController._oControlStore.oMasterPullToRefresh.hide();
		    }
			}, this);
			// possible outcomes:
			// >0: proceed as normal
			// =0: refresh has been aborted
			// <0: App will perform the refresh itself and call fRefreshCompleted when finished
	    var iDecision = oController._oHeaderFooterOptions.onRefresh(sTempSearchField, fRefreshCompleted);
	    if (iDecision == 0){
	    	this.aKeyValues = null;                           // prevent that this is used for future change events
	    	oController._oControlStore.bIsSearching = false;
	    	if (oController._oControlStore.oMasterPullToRefresh){
	     	  oController._oControlStore.oMasterPullToRefresh.hide();
	    	}
	    }
			if (iDecision <= 0){
				return;
			}			
		}
		var oBinding = oController._oMasterListBinding;
		var bBackendCalled = !oBinding;
		if (oBinding){
			oBinding.attachChange(oController._onMasterListLoaded, oController);
			var fReceivedHandler = jQuery.proxy(function() {
				if (oController._oControlStore.oMasterPullToRefresh) {
					oController._oControlStore.oMasterPullToRefresh.hide();
				}
				if (bIsBackendSearch){
					oController._oControlStore.sMasterSearchText = sTempSearchField;
					oController._oControlStore.oMasterSearchField.setValue(oController._oControlStore.sMasterSearchText);
				}
				oBinding.detachDataReceived(fReceivedHandler);
			}, this);

			//will be called synchronously
			var fRequestedHandler = jQuery.proxy(function() {
				bBackendCalled = true;
				oBinding.detachDataRequested(fRequestedHandler);
			}, this);
	
			oBinding.attachDataRequested(fRequestedHandler);
			oBinding.attachDataReceived(fReceivedHandler);
		}
		if (bIsBackendSearch && !bIsRefresh) {
			//we always give the application the hook independent from oBinding state 
			var bSearchRejected = oController.applyBackendSearchPattern(sTempSearchField, oBinding);
			if (bSearchRejected) {
				oBinding.detachDataRequested(fRequestedHandler);
				oBinding.detachDataReceived(fReceivedHandler);
				return; //Application said no refresh
			}
			//check if App has replaced the binding
			if (oBinding && oBinding != oController._oMasterListBinding){
				oBinding.detachDataRequested(fRequestedHandler);
				oBinding.detachDataReceived(fReceivedHandler);
				oController._oControlStore.sMasterSearchText = sTempSearchField;
				// backend call should have already been triggered by replacing the binding
				return;
			}
		}

		//if application does not bind because of invalid search pattern (e.g. too little characters)
		if (!bBackendCalled && oController._oMasterListBinding ) {
			oController._oMasterListBinding.refresh();
		}
	},

	defineMasterTitle : function(oController, oCustHeader, iCount) {
		if (!oController._oHeaderFooterOptions.sI18NMasterTitle) {
			return;
		}
		if (!oController._oControlStore.oMasterTitle) {
			oController._oControlStore.oMasterTitle = new sap.m.Label();
			oCustHeader.addContentMiddle(oController._oControlStore.oMasterTitle);
		}
		this.setMasterTitle(oController, iCount);
	},

	setMasterTitle : function(oController, iCount) {
		if (!oController._oControlStore.oMasterTitle) {
			return;
		}
		var oBundle = this.oApplicationImplementation.AppI18nModel.getResourceBundle();
		var sTitle = oBundle.getText(oController._oHeaderFooterOptions.sI18NMasterTitle, [iCount]);
		oController._oControlStore.oMasterTitle.setText(sTitle);
	},

	// handle standard edit button
	defineEditButton : function(oController, oCustHeader) {
		if (oController._oHeaderFooterOptions.onEditPress || oController._oHeaderFooterOptions.oEditBtn) {
			if (!oController._oControlStore.oEditBtn) {
				oController._oControlStore.oEditBtn = new sap.m.Button();
				oCustHeader.addContentRight(oController._oControlStore.oEditBtn);
				oController._oControlStore.oEditBtn.attachPress(jQuery.proxy(function() {
					if (oController._oControlStore.bEditState) {
						oController._oControlStore.oEditBtn.setIcon("sap-icon://multi-select");
					} else {
						oController._oControlStore.oEditBtn.setIcon("sap-icon://sys-cancel");
					}
					oController._oControlStore.bEditState = !oController._oControlStore.bEditState;
					oController._oControlStore.oSettingsButton.setVisible(!oController._oControlStore.bEditState);
					(oController._oHeaderFooterOptions.onEditPress || oController._oHeaderFooterOptions.oEditBtn.onBtnPressed)(oController._oControlStore.bEditState);
				}, this));
			}
			if (oController._oControlStore.bEditState) {
				oController._oControlStore.oEditBtn.setIcon("sap-icon://sys-cancel");
			} else {
				oController._oControlStore.oEditBtn.setIcon("sap-icon://multi-select");
			}
			oController._oControlStore.oEditBtn.setVisible(true);
			oController._oControlStore.oEditBtn.setEnabled(!!(oController._oHeaderFooterOptions.onEditPress || !oController._oHeaderFooterOptions.oEditBtn.bDisabled));
      if (oController._oHeaderFooterOptions.oEditBtn && oController._oHeaderFooterOptions.oEditBtn.sId){
      	oController._oControlStore.oButtonListHelper.mButtons[oController._oHeaderFooterOptions.oEditBtn.sId] = oController._oControlStore.oEditBtn;
      }
		} else if (oController._oControlStore.oEditBtn) {
			oController._oControlStore.oEditBtn.setVisible(false);
		}
	},

	defineSettingsButton : function(oController) {
		var bIsCreated = this.oCommonHeaderFooterHelper.createSettingsButton(oController);
		if (bIsCreated) {
			oController._oControlStore.oButtonListHelper.oBar.addContentLeft(oController._oControlStore.oSettingsButton);
		}
		oController._oControlStore.oSettingsButton.setVisible(!oController._oControlStore.bEditState);
	},

	defineFooterRight : function(oController) {
		var iFooterRightCount = this.getFooterRightCount(oController);
//		this.oCommonHeaderFooterHelper.getGenericButtons(iFooterRightCount, oController,
//				oController._oControlStore.oButtonListHelper);		
		if (oController._oHeaderFooterOptions.buttonList) {
			for ( var i = 0; i < oController._oHeaderFooterOptions.buttonList.length; i++) {
				var oBtnMeta = {};
				jQuery.extend(oBtnMeta, oController._oHeaderFooterOptions.buttonList[i]);
				delete oBtnMeta.sIcon;
				oController._oControlStore.oButtonListHelper.ensureButton(oBtnMeta, "b", iFooterRightCount);
			}
		}
		this.oCommonHeaderFooterHelper.getGenericButtons(iFooterRightCount, oController,
		oController._oControlStore.oButtonListHelper);		
		
		if (oController._oHeaderFooterOptions.onAddPress || oController._oHeaderFooterOptions.oAddOptions) {
			this.addAddButton(oController);
		}
	},

	getFooterRightCount : function(oController) {
		var iSmall = 1;
		var iMedium = 2;		
		var iLimit = iSmall;
		
		var iGenCount = this.oCommonHeaderFooterHelper.getGenericCount(oController);
		var iActCount = this.oCommonHeaderFooterHelper.getActionsCount(oController);			
		
		if ( this.oApplicationImplementation.bIsPhone
				&& sap.ui.Device.orientation.landscape ){
				if (iActCount === 1 && iGenCount < 4){
					return iActCount + iGenCount;
				}
				else {
					iLimit = iMedium;
				}
			}
		// avoid that the overflow contains only one generic item
		if (iActCount === 0) {
			return 3;
		}
		else if (iActCount === iLimit && iGenCount === 1)
			return iLimit + 1;
		else
		{
			return iLimit;
		}
	},

	addAddButton : function(oController) {
		if (oController._oHeaderFooterOptions.onAddPress) {
			var oBtnMeta = {
				onBtnPressed : oController._oHeaderFooterOptions.onAddPress
			}
		} else {
			var oBtnMeta = {};
			jQuery.extend(oBtnMeta, oController._oHeaderFooterOptions.oAddOptions);
			delete oBtnMeta.sBtnText;
			delete oBtnMeta.sI18nBtnTxt;
		}
		oBtnMeta.sIcon = "sap-icon://add";
		oController._oControlStore.oButtonListHelper.ensureButton(oBtnMeta, "b");
	}

});
