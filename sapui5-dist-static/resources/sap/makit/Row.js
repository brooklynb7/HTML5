/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.makit.Row");jQuery.sap.require("sap.makit.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.makit.Row",{metadata:{library:"sap.makit",aggregations:{"cells":{type:"sap.makit.Column",multiple:true,singularName:"cell"}}}});
/*!
 * @copyright@
 */

sap.makit.Row.prototype.init=function(){this._datarow={}};
sap.makit.Row.prototype.addCell=function(c){sap.ui.core.Element.prototype.addAggregation.call(this,"cells",c,false);var i=this.getId();if(!jQuery.sap.endsWith(i,"dummyrows")){this._datarow[c.getName()]=c.getValue();c.attachEvent("_change",this.onCellChanged,this)}};
sap.makit.Row.prototype.onCellChanged=function(e){if(e.mParameters['name']==="name"){var o=e.mParameters['oldValue'];var n=e.mParameters['newValue'];this._datarow[n]=undefined;if(o&&o!==""){this._datarow[n]=this._datarow[o];this._datarow[o]=null;this._datarow[o]=undefined;delete this._datarow[o]}}else if(e.mParameters['name']==="value"){var c=e.oSource.getName();this._datarow[c]=e.mParameters['newValue']}};
