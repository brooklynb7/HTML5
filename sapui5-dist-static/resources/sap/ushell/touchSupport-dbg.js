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
(function ($) {
    "use strict";
    /*global jQuery, sap, clearTimeout, console, window */

    // ensure that sap.ushell exists
    jQuery.sap.declare("sap.ushell.touchSupport");

    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-core');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-widget');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-mouse');
    jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-draggable');

    $.support.touch = 'ontouchend' in document;

    if (!$.support.touch) {
      return;
    }

    var mouseProto = $.ui.mouse.prototype,
        _mouseInit = mouseProto._mouseInit,
        touchStartTimer,
        touchHandled,
        lastTap = 0;

    function simulateMouseEvent (event, simulatedType) {

      if (event.originalEvent.touches.length > 1) {
        return;
      }

      var touch = event.originalEvent.changedTouches[0],
          simulatedEvent = document.createEvent('MouseEvents');

      if ($(touch.target).is("input") || $(touch.target).is("textarea")) {
          event.stopPropagation();
      } else {
          event.preventDefault();
      }

      simulatedEvent.initMouseEvent(
        simulatedType,    // type
        true,             // bubbles
        true,             // cancelable
        window,           // view
        1,                // detail
        touch.screenX,    // screenX
        touch.screenY,    // screenY
        touch.clientX,    // clientX
        touch.clientY,    // clientY
        false,            // ctrlKey
        false,            // altKey
        false,            // shiftKey
        false,            // metaKey
        0,                // button
        null              // relatedTarget
      );

      event.target.dispatchEvent(simulatedEvent);
    }

    mouseProto._touchStart = function (event) {
      var self = this;

      touchStartTimer = new Date().getTime();

      touchHandled = true;

      self._touchMoved = false;
      simulateMouseEvent(event, 'mouseover');
      simulateMouseEvent(event, 'mousemove');
      simulateMouseEvent(event, 'mousedown');
    };

    mouseProto._touchMove = function (event) {
      if (!touchHandled) {
        return;
      }

      this._touchMoved = true;
      simulateMouseEvent(event, 'mousemove');
    };

    mouseProto._touchEnd = function (event) {
      if (!touchHandled) {
        return;
      }
      var now = new Date().getTime();

      simulateMouseEvent(event, 'mouseout');
      simulateMouseEvent(event, 'mouseup');

      if((now - touchStartTimer) > 500) {
          touchHandled = false;
          event.preventDefault();
          return;
      }

      if (!this._touchMoved) {
            if ((now - lastTap) < 500 && lastTap > 0) {
                lastTap = 0;
                simulateMouseEvent(event, 'dblclick');
            } else {
                  lastTap = now;
                  simulateMouseEvent(event, 'click');
            }
      }

      touchHandled = false;
    };

    mouseProto._mouseInit = function () {
        //Overrides touchevents of objects depends on jquery.mouse like jquery.sortable or jquery.droppable 
      var self = this;

      self.element
        .bind('touchstart', $.proxy(self, '_touchStart'))
        .bind('touchmove', $.proxy(self, '_touchMove'))
        .bind('touchcancel', $.proxy(self, '_touchEnd'))
        .bind('touchend', $.proxy(self, '_touchEnd'));

      _mouseInit.call(self);
    };
})(jQuery);