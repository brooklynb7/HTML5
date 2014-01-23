/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.data.DimensionDefinition");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.viz.ui5.data.DimensionDefinition",{metadata:{library:"sap.viz",properties:{"axis":{type:"int",group:"Misc",defaultValue:null},"value":{type:"any",group:"Data",defaultValue:null},"name":{type:"string",group:"Misc",defaultValue:null}}}});
sap.viz.ui5.data.DimensionDefinition.prototype._getAdapter=function(){var t=this,b=this.getBindingInfo("value"),v,p,T,f;if(!b){v=this.getValue();return function(){return v}}if(b.parts.length>1){throw new Error("DimensionDefinition doesn't support calculated bindings yet")}p=b.parts[0].path;T=b.parts[0].type;f=b.formatter;if(!(T||f)){return function(c){return c.getProperty(p)}}return function(c){var v=c.getProperty(p);if(T){v=T.formatValue(v,"string")}if(f){v=f.call(t,v,c)}return v}}
