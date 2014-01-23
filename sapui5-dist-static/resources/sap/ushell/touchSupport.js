/*!
 * Modified version of
 * jquery.ui.touch-punch.js - jQuery UI Touch Punch
 *
 * Version: 0.2.2
 *
 * Author: Dave Furfero
 * Web: http://touchpunch.furf.com/
 *
 * Licensed under
 *   Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function($){"use strict";jQuery.sap.declare("sap.ushell.touchSupport");jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-core');jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-widget');jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-mouse');jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-draggable');$.support.touch='ontouchend'in document;if(!$.support.touch){return}var m=$.ui.mouse.prototype,_=m._mouseInit,t,a,l=0;function s(e,b){if(e.originalEvent.touches.length>1){return}var c=e.originalEvent.changedTouches[0],d=document.createEvent('MouseEvents');if($(c.target).is("input")||$(c.target).is("textarea")){e.stopPropagation()}else{e.preventDefault()}d.initMouseEvent(b,true,true,window,1,c.screenX,c.screenY,c.clientX,c.clientY,false,false,false,false,0,null);e.target.dispatchEvent(d)}m._touchStart=function(e){var b=this;t=new Date().getTime();a=true;b._touchMoved=false;s(e,'mouseover');s(e,'mousemove');s(e,'mousedown')};m._touchMove=function(e){if(!a){return}this._touchMoved=true;s(e,'mousemove')};m._touchEnd=function(e){if(!a){return}var n=new Date().getTime();s(e,'mouseout');s(e,'mouseup');if((n-t)>500){a=false;e.preventDefault();return}if(!this._touchMoved){if((n-l)<500&&l>0){l=0;s(e,'dblclick')}else{l=n;s(e,'click')}}a=false};m._mouseInit=function(){var b=this;b.element.bind('touchstart',$.proxy(b,'_touchStart')).bind('touchmove',$.proxy(b,'_touchMove')).bind('touchcancel',$.proxy(b,'_touchEnd')).bind('touchend',$.proxy(b,'_touchEnd'));_.call(b)}})(jQuery);
