/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.PictureTile");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.m.CustomTile");sap.m.CustomTile.extend("sap.ca.ui.PictureTile",{metadata:{library:"sap.ca.ui",properties:{"height":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'32px'},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'32px'}},associations:{"tileContent":{type:"sap.ca.ui.PictureViewerItem",multiple:false}},events:{"pictureDelete":{}}}});sap.ca.ui.PictureTile.M_EVENTS={'pictureDelete':'pictureDelete'};
sap.ca.ui.PictureTile.prototype.init=function(t){this._oDeletePictureButton=new sap.m.Button({icon:"sap-icon://sys-cancel",press:jQuery.proxy(this._deletePictureRequestHandler,this),type:sap.m.ButtonType.Transparent}).addStyleClass("sapCaUiPTDeleteButton");if(!jQuery.device.is.desktop){this.attachPress(this._tilePressedHandler);this.attachBrowserEvent("swipe",jQuery.proxy(this._tileSwipedHandler,this));this._oDeletePictureButton.addStyleClass("hide")}};
sap.ca.ui.PictureTile.prototype.setTileContent=function(t){this.setContent(null);if(t){var i=t.getImage();if(jQuery.device.is.desktop){this.setContent(i)}else{this.setContent(new sap.ca.ui.ZoomableScrollContainer({content:t.getImage()}))}}else{this.setContent(null)}this.setAssociation("tileContent",t)};
sap.ca.ui.PictureTile.prototype.setSize=function(w,h){this._width=w;this._height=h;var $=this.$();if($){$.css({width:w+"px",height:h+"px"});jQuery.sap.byId(this.getId()+"-wrapper").addClass("sapCaUiPTWrapper")}};
sap.ca.ui.PictureTile.prototype._tilePressedHandler=function(e){this.switchVisibility()};
sap.ca.ui.PictureTile.prototype.switchVisibility=function(v){var $=this._oDeletePictureButton.$();if(v===undefined){$.toggleClass("hide")}else{$.toggleClass("hide",!v)}};
sap.ca.ui.PictureTile.prototype._tileSwipedHandler=function(e){var $=this._oDeletePictureButton.$();if($&&!$.hasClass("hide")){$.addClass("hide")}};
sap.ca.ui.PictureTile.prototype._deletePictureRequestHandler=function(){this.firePictureDelete()};
