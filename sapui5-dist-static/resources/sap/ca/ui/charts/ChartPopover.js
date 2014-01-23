jQuery.sap.require("sap.m.Label");jQuery.sap.require("sap.m.List");jQuery.sap.require("sap.m.ResponsivePopover");jQuery.sap.require("sap.m.StandardListItem");jQuery.sap.require("sap.ca.ui.utils.resourcebundle");jQuery.sap.require("sap.ui.model.json.JSONModel");
sap.ca.ui.charts.ChartPopover=function(i,d){if(typeof i==="undefined"){throw new Error("The 'id' is undefined!")}this._oPopover=new sap.m.ResponsivePopover(i,d);if(!jQuery.device.is.phone){this._oPopover._oControl.oPopup.setAutoClose(false)}this._oPopover.setContentWidth('100%');this._oPopover.setContentHeight('100%');this._oPopover.addStyleClass('sapCaUiChartPopOver')};
sap.ca.ui.charts.ChartPopover.prototype.isOpen=function(){return this._oPopover.isOpen()};
sap.ca.ui.charts.ChartPopover.prototype.openBy=function(c,s){this._oPopover.openBy(c,s)};
sap.ca.ui.charts.ChartPopover.prototype.close=function(){this._oPopover.close()};
sap.ca.ui.charts.ChartPopover.prototype.getControl=function(){return this._oPopover};
