/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Background_border");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Background_border",{metadata:{library:"sap.viz",aggregations:{"left":{type:"sap.viz.ui5.types.Background_border_left",multiple:false},"right":{type:"sap.viz.ui5.types.Background_border_right",multiple:false},"top":{type:"sap.viz.ui5.types.Background_border_top",multiple:false},"bottom":{type:"sap.viz.ui5.types.Background_border_bottom",multiple:false}}}});
sap.viz.ui5.types.Background_border.prototype.getLeft=function(){return this._getOrCreate("left")};
sap.viz.ui5.types.Background_border.prototype.getRight=function(){return this._getOrCreate("right")};
sap.viz.ui5.types.Background_border.prototype.getTop=function(){return this._getOrCreate("top")};
sap.viz.ui5.types.Background_border.prototype.getBottom=function(){return this._getOrCreate("bottom")}
