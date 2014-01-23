/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.require("sap.ui.core.routing.HashChanger");jQuery.sap.declare("sap.ui.core.routing.History");
sap.ui.core.routing.History=function(){this._iHistoryLength=window.history.length;this._reset()};
sap.ui.core.routing.History.prototype.getDirection=function(n){if(n===undefined){return this._sCurrentDirection}if(n!==undefined&&this._sCurrentDirection===undefined){return undefined}return this._getDirection(n)};
sap.ui.core.routing.History.prototype._reset=function(){this._aHistory=[];this._iHistoryPosition=-1;this._bUnknown=true};
sap.ui.core.routing.History.prototype._getDirection=function(n,h){var d=sap.ui.core.routing.HistoryDirection;if(this._bUnknown){return d.Unknown}if(this._oNextHash&&this._oNextHash.sHash===n){return d.NewEntry}if(h){return d.NewEntry}if(!h&&this._aHistory[this._iHistoryPosition+1]===n&&this._aHistory[this._iHistoryPosition-1]===n){return d.Unknown}if(this._aHistory[this._iHistoryPosition-1]===n){return d.Backwards}if(this._aHistory[this._iHistoryPosition+1]===n){return d.Forwards}return d.NewEntry};
sap.ui.core.routing.History.prototype._hashChange=function(n,o){var d=sap.ui.core.routing.HistoryDirection,h=jQuery.inArray(n,this._aHistory),D=this._sCurrentDirection=this._getDirection(n,this._iHistoryLength<window.history.length);this._iHistoryLength=window.history.length;if(this._oNextHash&&this._oNextHash.sHash!==n){this._oNextHash=null}if(D===d.Unknown){this._reset();return}if(this._oNextHash&&this._oNextHash.bWasReplaced&&this._oNextHash.sHash===n){return}if(D===d.NewEntry){if(this._iHistoryPosition+1<this._aHistory.length){this._aHistory=this._aHistory.slice(0,this._iHistoryPosition+1)}this._aHistory.push(n);this._iHistoryPosition+=1;return}if(D===d.Forwards){this._iHistoryPosition++;return}if(D===d.Backwards){this._iHistoryPosition--}};
sap.ui.core.routing.History.prototype._hashChangedByApp=function(n,w){this._bUnknown=false;this._oNextHash={sHash:n,bWasReplaced:w}};
(function(){var i=new sap.ui.core.routing.History(),h=sap.ui.core.routing.HashChanger.getInstance();h.attachEvent("hashChanged",function(e){i._hashChange(e.getParameter("newHash"),e.getParameter("oldHash"))});h.attachEvent("hashReplaced",function(e){i._hashChangedByApp(e.getParameter("sHash"),true)});h.attachEvent("hashSet",function(e){i._hashChangedByApp(e.getParameter("sHash"),false)});sap.ui.core.routing.History.getInstance=function(){return i}}());
