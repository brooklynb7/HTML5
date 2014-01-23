jQuery.sap.declare("sap.ca.scfld.md.app.ButtonListHelper");
jQuery.sap.require("sap.ca.ui.dialog.Dialog");

sap.ui.base.Object.extend("sap.ca.scfld.md.app.ButtonListHelper", {

	constructor : function(oApplicationImplementation, iMode) {
		this.oApplicationImplementation = oApplicationImplementation;
		this.iMode = iMode;
		if (this.iMode == 20) {
			this.oBar = new sap.m.Bar();
		} else if (this.iMode >= 10) {
			this.oActionSheet = new sap.m.ActionSheet();
			this.oActionSheet.setPlacement(sap.m.PlacementType.Top);
			this.oActionSheet.setShowCancelButton(true);
		}
		this.aButtons = [];
		this.startBuild();
		if (this.iMode == 25){
			this.sDirection = "Left";
		} else {
			this.sDirection = "Right"
		}
	},

	addButtonListHelper : function(oButtonListHelper) {
		if (this.oChild) {
			this.oChild.addButtonListHelper(oButtonListHelper);
		} else {
			this.oChild = oButtonListHelper;
		}
	},

	startBuild : function() {
		this.mButtons = {};
		this.aCallBacks = [];
		this.oPositions = {
			iActive : 0,
			iControlPosition : 0
		};
		this.bHasOverflow = false;
		if (this.oChild) {
			this.oChild.startBuild();
		}
	},

	endBuild : function() {
		for ( var i = this.oPositions.iActive; i < this.aButtons.length; i++) {
			var oControl = this.aButtons[i];
			if (oControl.oButton) {
				oControl.oButton.setVisible(false);
			}
			if (oControl.oSelect) {
				oControl.oSelect.setVisible(false);
			}
		}
		if (this.oChild) {
			this.oChild.endBuild();
		}
		this.bIsOverflowReplaced = false;
	},
	
	destroy : function(){
		for (var i = 0; i < this.aButtons.length; i++){
			var oControlObject = this.aButtons[i];
			if (oControlObject.oButton){
				oControlObject.oButton.destroy(true);
			}
			if (oControlObject.oSelect){
				oControlObject.oSelect.destroy(true);
			}
		}
		if (this.oBar){
			this.oBar.destroy();
		}
		if (this.oActionSheet){
			this.oActionSheet.destroy();
		}
		if (this.oChild) {
			this.oChild.destroy();
		}
	},

	ensureButton : function(oBtnMeta, sType, iMaxCountBeforeOverflow) {
		if (iMaxCountBeforeOverflow && this.oPositions.iActive >= iMaxCountBeforeOverflow) {
			if (!this.bHasOverflow) {
				if (!this.oOverflowList) {
					this.oOverflowList = new sap.ca.scfld.md.app.ButtonListHelper(this.oApplicationImplementation, 10);
					this.addButtonListHelper(this.oOverflowList);
					this.oOverflowList.oBarList = this;
				}
				this.iOverflowPosition = this.oPositions.iActive;
				this.ensureButton(sap.ca.scfld.md.app.ButtonListHelper.getOverflowMeta(this), "b");
				this.bHasOverflow = true;
			}
			return this.oOverflowList.ensureButton(oBtnMeta, sType);
		} else {
			var iButtonsCount = this.oPositions.iActive;
			if (iButtonsCount == this.aButtons.length) {
				this.aButtons.push({});
			}
		}
		return this.ensureControlAtPosition(oBtnMeta, sType, iButtonsCount, this.oPositions);
	},

	setBtnEnabled : function(sId, bEnabled) {
		var oButton = this.mButtons[sId];
		if (oButton) {
			oButton.setEnabled(bEnabled);
		} else if (this.oChild) {
			this.oChild.setBtnEnabled(sId, bEnabled);
		}
	},

	ensureControlAtPosition : function(oBtnMeta, sType, iButtonsCount, oPositions) {
		var oControlObject = this.aButtons[iButtonsCount];
		if (sType == "b" || this.iMode < 20) { // selects are only possible in bars
			if (oControlObject.oSelect) {
				oPositions.iControlPosition = this.oBar["indexOfContent" + this.sDirection](oControlObject.oSelect);
				oControlObject.oSelect.setVisible(false);
			}
			if (oControlObject.oButton) {
				oControlObject.oButton.setVisible(true);
				if (this.oBar) {
					var iControlPosition = this.oBar["indexOfContent" + this.sDirection](oControlObject.oButton);
					if (iControlPosition > oPositions.iControlPosition) {
						oPositions.iControlPosition = iControlPosition;
					}
				}
			} else {
				oControlObject.oButton = new sap.m.Button();
				oControlObject.oButton.attachPress(jQuery.proxy(function(oEvent) {
					if (this.aCallBacks[iButtonsCount]) {
						this.aCallBacks[iButtonsCount](oEvent);
					}
				}, this));
				oPositions.iControlPosition++;
				if (this.iMode >= 20) {
					this.oBar["insertContent"+ this.sDirection](oControlObject.oButton, oPositions.iControlPosition);
				} else if (this.iMode >= 10) {
					this.oActionSheet.addButton(oControlObject.oButton);
				} else if (this.iMode == 5){
					this.oBar.insertContentLeft(oControlObject.oButton, oPositions.iControlPosition);
				}
			}
			if (this.iMode < 20 || !oBtnMeta.sIcon){
			  if (oBtnMeta.sI18nBtnTxt) {
			 	var oBundle = this.oApplicationImplementation.AppI18nModel.getResourceBundle();
				var sText = oBundle.getText(oBtnMeta.sI18nBtnTxt)
			  } else {
				var sText = oBtnMeta.sBtnTxt
			  }
			} else {
				var sText = "";
			}
			if (sText != oControlObject.oButton.getText()) {
			  oControlObject.oButton.setText(sText);
			}
			if (this.iMode == 20) { // styles are only used in bars
				if (oControlObject.oButton.getType() != oBtnMeta.style) {
					oControlObject.oButton.setType(oBtnMeta.style)
				}
			}
			if (sType == "b") {
				this.aCallBacks[iButtonsCount] = oBtnMeta.onBtnPressed;
			} else {
				this.aCallBacks[iButtonsCount] = this.getSelectReplacement(oBtnMeta);
			}
			var oRet = oControlObject.oButton;
		} else { // select
			if (oControlObject.oButton) {
				oPositions.iControlPosition = this.oBar["indexOfContent" + this.sDirection](oControlObject.oButton);
				oControlObject.oButton.setVisible(false);
			}
			if (oControlObject.oSelect) {
				oControlObject.oSelect.setVisible(true);
				var iControlPosition = this.oBar["indexOfContent" + this.sDirection](oControlObject.oSelect);
				if (iControlPosition > oPositions.iControlPosition) {
					oPositions.iControlPosition = iControlPosition;
				}
				oControlObject.oSelect.destroyItems();
			} else {
				oControlObject.oSelect = new sap.m.Select();
				oControlObject.oSelect.setType(sap.m.SelectType.IconOnly);
				oControlObject.oSelect.setAutoAdjustWidth(true);
				oPositions.iControlPosition++;
				this.oBar["insertContent" + this.sDirection](oControlObject.oSelect, oPositions.iControlPosition);
				oControlObject.oSelect.attachChange(jQuery.proxy(function(oEvent) {
					var sKey = oEvent.getSource().getSelectedKey();
					if (this.aCallBacks[iButtonsCount]) {
						this.aCallBacks[iButtonsCount](sKey);
					}
				}, this));
			}
			if (oBtnMeta.sSelectedItemKey) {
				oControlObject.oSelect.setSelectedItem(oBtnMeta.sSelectedItemKey);
			}
			for ( var i = 0; i < oBtnMeta.aItems.length; i++) {
				var oSettings = oBtnMeta.aItems[i];
				var oItem = new sap.ui.core.Item(oSettings);
				oControlObject.oSelect.addItem(oItem);
			}
			if (oBtnMeta.sSelectedItemKey) {
				oControlObject.oSelect.setSelectedKey(oBtnMeta.sSelectedItemKey);
			}
			this.aCallBacks[iButtonsCount] = oBtnMeta.onChange;
			oRet = oControlObject.oSelect;
		}
		if (oBtnMeta.sIcon != oRet.getIcon()) {
			oRet.setIcon(oBtnMeta.sIcon);
		}
		if (oBtnMeta.sId) {
			this.mButtons[oBtnMeta.sId] = oRet;
		}
		oRet.setEnabled(!oBtnMeta.bDisabled);
		oPositions.iActive++;
		return oRet;
	},

	/*
	 * getSelectReplacement: function(oBtnMeta){ return jQuery.proxy(function(oEvent){ var iButtonsCount =
	 * this.oBarList.iOverflowPosition; oPositions = { iActive : 0, iControlPosition :
	 * this.oBarList.oBar.indexOfContentRight(this.oBarList.aButtons[iButtonsCount].oButton), }; var oSelectMeta = {}
	 * jQuery.extend(oSelectMeta, oBtnMeta); var oBarList = this.oBarList; oSelectMeta.onChange = function(oKey){
	 * oBarList.revertOverflowReplacement(); oBtnMeta.onChange(oKey); };
	 * this.oBarList.ensureControlAtPosition(oSelectMeta, "s", iButtonsCount, oPositions); //
	 * this.oBarList.aButtons[iButtonsCount].oSelect.getPopup().open(); this.oBarList.bIsOverflowReplaced = true; },
	 * this); },
	 */

	getSelectReplacement : function(oBtnMeta) {
		var sSelectedItemKey = oBtnMeta.sSelectedItemKey;
		var fClose = function(oResult){
			if (oResult.selectedIndex >= 0){
				var sSelectedItemKeyNew = oBtnMeta.aItems[oResult.selectedIndex].key;
				if (sSelectedItemKeyNew != sSelectedItemKey){
					sSelectedItemKey = sSelectedItemKeyNew;
				  oBtnMeta.onChange(sSelectedItemKey);
				}
			}			
		};		
		return function(oEvent) {
			var aItems = [];
			var iSelection = 0;
			for ( var i = 0; i < oBtnMeta.aItems.length; i++) {
				aItems.push({
					itemContent : oBtnMeta.aItems[i].text
				});
				if (oBtnMeta.aItems[i].key == sSelectedItemKey) {
					iSelection = i;
				}
			}
			sSelectedItemKey = oBtnMeta.aItems[iSelection].key;
			sap.ca.ui.dialog.selectItem.open({
				title : oEvent.getSource().getText(),
				items : aItems,
				defaultIndex : iSelection
			}, fClose);
		};
	},

	revertOverflowReplacement : function() {
		if (this.bIsOverflowReplaced) {
			this.ensureControlAtPosition(sap.ca.scfld.md.app.ButtonListHelper.getOverflowMeta(this), "b",
					this.iOverflowPosition, {});
			this.bIsOverflowReplaced = false;
		}
	},

	setBtnText : function(sId, sText) {
		var oButton = this.mButtons[sId];
		if (oButton) {
			oButton.setText(sText);
		} else if (this.oChild) {
			this.oChild.setBtnText(sId, sText);
		}
	}
});

sap.ca.scfld.md.app.ButtonListHelper.getOverflowMeta = function(oOwner) {
	return {
		sIcon : "sap-icon://overflow",
		onBtnPressed : function(evt) {
			oOwner.oOverflowList.oActionSheet.openBy(evt.getSource());
		}
	};
};
