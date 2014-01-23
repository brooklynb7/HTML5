/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.ZoomableScrollContainer");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.m.ScrollContainer");sap.m.ScrollContainer.extend("sap.ca.ui.ZoomableScrollContainer",{metadata:{library:"sap.ca.ui",properties:{"zoomable":{type:"boolean",group:"Misc",defaultValue:true},"initialScale":{type:"float",group:"Misc",defaultValue:1},"minScale":{type:"float",group:"Misc",defaultValue:1},"maxScale":{type:"float",group:"Misc",defaultValue:4}}}});
sap.ca.ui.ZoomableScrollContainer.prototype.init=function(){sap.m.ScrollContainer.prototype.init.apply(this)};
sap.ca.ui.ZoomableScrollContainer.prototype.onAfterRendering=function(){var c=this.getScrollDelegate().onAfterRendering;var s=this.getInitialScale();var m=this.getMinScale();var M=this.getMaxScale();var z=this.getZoomable();this.getScrollDelegate().onAfterRendering=function(){c.call(this);this._scroller.scale=s;this._scroller.options.zoom=z;this._scroller.options.zoomMin=m;this._scroller.options.zoomMax=M;this._scroller.zoom(0,0,s);this._scroller.options.onZoom=function(e){};this._scroller.options.onZoomStart=function(e){}}};
