/*!
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.model.type.Number");jQuery.sap.require("sap.ui.model.SimpleType");jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");sap.ui.model.SimpleType.extend("sap.ca.ui.model.type.Number",{constructor:function(){sap.ui.model.SimpleType.apply(this,arguments);this.sName="Number"}});
sap.ca.ui.model.type.Number.prototype.formatValue=function(v,i){if(v==undefined||v==null){return null}switch(i){case"string":return this.oFormat.format(v);case"int":return Math.floor(v);case"float":return v;default:throw new sap.ui.model.FormatException("Don't know how to format Number to "+i)}};
sap.ca.ui.model.type.Number.prototype.parseValue=function(v,i){var r;switch(i){case"string":r=this.oFormat.parse(v);if(isNaN(r)){throw new sap.ui.model.ParseException(v+" is not a valid Number value")}return r;case"int":case"float":return v;default:throw new sap.ui.model.ParseException("Don't know how to parse Number from "+i)}};
sap.ca.ui.model.type.Number.prototype.validateValue=function(v){if(this.oConstraints){var V=[];jQuery.each(this.oConstraints,function(n,c){switch(n){case"minimum":if(v<c){V.push("minimum")}break;case"maximum":if(v>c){V.push("maximum")}}});if(V.length>0){throw new sap.ui.model.ValidateException("Validation of type constraints failed",V)}}};
sap.ca.ui.model.type.Number.prototype.setFormatOptions=function(f){this.oFormatOptions=f;this._handleLocalizationChange()};
sap.ca.ui.model.type.Number.prototype._handleLocalizationChange=function(){this.oFormat=sap.ca.ui.model.format.NumberFormat.getInstance(this.oFormatOptions)};
