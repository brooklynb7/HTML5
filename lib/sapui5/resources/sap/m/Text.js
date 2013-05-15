/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.Text");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.Text",{metadata:{library:"sap.m",properties:{"text":{type:"string",group:"",defaultValue:'',bindable:"bindable"},"textDirection":{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"wrapping":{type:"boolean",group:"Appearance",defaultValue:true},"textAlign":{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:sap.ui.core.TextAlign.Begin},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null}}}});
sap.m.Text.prototype.setText=function(t){this.setProperty("text",t,true);var d=this.getDomRef();if(d){var l=this.getText().split("\n");for(var i=0;i<l.length;i++){l[i]=jQuery.sap.encodeHTML(l[i])}t=l.join("<br>");d.innerHTML=t}return this};
