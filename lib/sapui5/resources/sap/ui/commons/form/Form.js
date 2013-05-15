/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.form.Form");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.form.Form",{metadata:{library:"sap.ui.commons",properties:{"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null}},aggregations:{"formContainers":{type:"sap.ui.commons.form.FormContainer",multiple:true,singularName:"formContainer"},"title":{type:"sap.ui.commons.Title",altTypes:["string"],multiple:false},"layout":{type:"sap.ui.commons.form.FormLayout",multiple:false}}}});(function(){sap.ui.commons.form.Form.prototype.toggleContainerExpanded=function(c){var l=this.getLayout();if(l){l.toggleContainerExpanded(c)}};sap.ui.commons.form.Form.prototype.contentOnAfterRendering=function(f,c){var l=this.getLayout();if(l&&l.contentOnAfterRendering){l.contentOnAfterRendering(f,c)}};sap.ui.commons.form.Form.prototype.onLayoutDataChange=function(e){var l=this.getLayout();if(l&&l.onLayoutDataChange){l.onLayoutDataChange(e)}}}());
