/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.App");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.NavContainer");sap.m.NavContainer.extend("sap.m.App",{metadata:{library:"sap.m",properties:{"homeIcon":{type:"any",group:"Misc",defaultValue:null}},events:{"orientationChange":{}}}});sap.m.App.M_EVENTS={'orientationChange':'orientationChange'};
sap.m.App.prototype.init=function(){sap.m.NavContainer.prototype.init.apply(this,arguments);this.addStyleClass("sapMApp");jQuery(jQuery.proxy(function(){jQuery.sap.initMobile({viewport:!this._debugZoomAndScroll,statusBar:"default",hideBrowser:true,preventScroll:!this._debugZoomAndScroll,homeIcon:this.getHomeIcon(),rootId:this.getId()});jQuery(window).bind("resize",jQuery.proxy(this._handleOrientationChange,this))},this))};
sap.m.App.prototype.onAfterRendering=function(){if(!this._bParentHeightSet){var r=this.getDomRef().parentNode;while(r&&r!==document.documentElement){if(!r.style.height)r.style.height="100%";r=r.parentNode}this._bParentHeightSet=true}};
sap.m.App.prototype.exit=function(){jQuery(window).unbind("resize",this._handleOrientationChange);if(this._sInitTimer){jQuery.sap.clearDelayedCall(this._sInitTimer)}};
sap.m.App.prototype._handleOrientationChange=function(){var $=jQuery(window);var i=$.width()>$.height();if(this._oldIsLandscape!==i){this.fireOrientationChange({landscape:i});this._oldIsLandscape=i}};
