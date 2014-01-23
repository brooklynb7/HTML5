jQuery.sap.require("sap.m.Label");
jQuery.sap.require("sap.m.List");
jQuery.sap.require("sap.m.ResponsivePopover");
jQuery.sap.require("sap.m.StandardListItem");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
jQuery.sap.require("sap.ui.model.json.JSONModel");

/**
 * ChartPopover provides a popover used with charts to display chart selections. The selection can be added and removed.
 * Below is an example how to use with your chart:
 * 
 * var oPopover = new sap.ca.ui.charts.ChartPopover(<POPOVER_ID>, <ITEM_TEMPLATE>);
 * 
 * onChartClick = function(oEvent) {
 *    if ( !oPopover.isOpen() ) {
 *       oPopover.resetSelection();
 *          oPopover.openBy(this);
 *       }
 *          
 *       var sKey = <UNIQUE_KEY>;
 *       var sName = <NAME_TO_DISPLAY>;
 *       var sValue = <VALUE_TO_DISPLAY>;
 *
 *       if ( oPopover.getSelectionIndexFor(sKey) !== -1 ) {
 *          oPopover.removeSelection(sKey);
 *           
 *       } else {
 *          oPopover.addSelection({
 *             key:    sKey,
 *             name:   sName,
 *             value:  sValue
 *          });
 *       }
 *    }); 
 * }
 * 
 * @author I071883
 */

sap.ca.ui.charts.ChartPopover = function(sId, oData) {
   if ( typeof sId === "undefined" ) {
      throw new Error("The 'id' is undefined!");
   }
   
   this._oPopover = new sap.m.ResponsivePopover(sId, oData);
   if(!jQuery.device.is.phone){
       this._oPopover._oControl.oPopup.setAutoClose(false);
   }
   this._oPopover.setContentWidth('100%');
   this._oPopover.setContentHeight('100%');
   this._oPopover.addStyleClass('sapCaUiChartPopOver');

};

/**
 * Returns true if the popover is open, otherwise false.
 * 
 * @returns {boolean} true if the popover is open, otherwise false
 * 
 */
sap.ca.ui.charts.ChartPopover.prototype.isOpen = function() {
   return this._oPopover.isOpen();
};

/**
 * Opens the popover.
 */
sap.ca.ui.charts.ChartPopover.prototype.openBy = function(oControl, bSkipInstanceManager) {
   this._oPopover.openBy(oControl, bSkipInstanceManager);
};

/**
 * Closes the popover.
 */
sap.ca.ui.charts.ChartPopover.prototype.close = function() {
   this._oPopover.close();
};

/**
 * Returns the instance of the popover.
 */
sap.ca.ui.charts.ChartPopover.prototype.getControl = function() {
   return this._oPopover;
};
