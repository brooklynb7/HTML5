/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.PictureViewerItem");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ca.ui.PictureViewerItem",{metadata:{library:"sap.ca.ui",properties:{"src":{type:"string",group:"Misc",defaultValue:null}},aggregations:{"image":{type:"sap.m.Image",multiple:false}}}});
sap.ca.ui.PictureViewerItem.prototype.setSrc=function(s){this.setProperty("src",s);var i=this.getImage();if(i==null){i=new sap.m.Image()}i.setSrc(s);this.setImage(i);return this};
sap.ca.ui.PictureViewerItem.prototype.exit=function(){var i=this.getImage();if(i){i.destroy()}};
