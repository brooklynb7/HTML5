/*!
 * Modified version of
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 *
 * Version: 1.1
 *
 * Author:    "Cowboy" Ben Alman
 * Web:       http://benalman.com/projects/jquery-resize-plugin/
 * License:   Dual licensed under the MIT and GPL licenses.
 *            http://benalman.com/about/license/
 *
 */
// Script: jQuery resize event
//
// *Version: 1.1, Last updated: 3/14/2010*
// 
// Project Home - http://benalman.com/projects/jquery-resize-plugin/
// GitHub       - http://github.com/cowboy/jquery-resize/
// Source       - http://github.com/cowboy/jquery-resize/raw/master/jquery.ba-resize.js
// (Minified)   - http://github.com/cowboy/jquery-resize/raw/master/jquery.ba-resize.min.js (1.0kb)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// This working example, complete with fully commented code, illustrates a few
// ways in which this plugin can be used.
// 
// resize event - http://benalman.com/code/projects/jquery-resize/examples/resize/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome, Opera 9.6-10.1.
// Unit Tests      - http://benalman.com/code/projects/jquery-resize/unit/
// 
// About: Release History
// 
// 1.1 - (3/14/2010) Fixed a minor bug that was causing the event to trigger
//       immediately after bind in some circumstances. Also changed $.fn.data
//       to $.data to improve performance.
// 1.0 - (2/10/2010) Initial release

(function () {
    "use strict";
    /*global jQuery, sap, clearTimeout, console, window */

    // ensure that sap.ushell exists
    jQuery.sap.declare("sap.ushell.functionOverrideResizeEvent");

    //This method will create a watch deamon to check for resizing of dom elements

        //Elements to be watched
    var jqaElements = jQuery([]),
        //Extend the jQuery resize event if it already exists, otherwise create it
        jqResizeEvent = jQuery.resize = jQuery.extend(jQuery.resize, {}),
        //Window timeout id
        sTimeoutId,
        watchDeamon;

    //Watch interval
    jqResizeEvent.delay = 250;
    //Throttle the default resize event
    jqResizeEvent.throttleWindow = true;

    jQuery.event.special.resize = {

        //Setup is called when this event is bound for the first time
        setup: function () {

            //Check if this event is being bound to the window object
            //If so: Don't use this custom binding, but the default DOM event
            if (jqResizeEvent.throttleWindow && this.setTimeout) {
                return false;
            }

            //Get the current element
            var jqCurrentElement = jQuery(this);

            //Add the current element to the watch list
            jqaElements = jqaElements.add(jqCurrentElement);

            //Store the current dimensions of the element in the jQuery data hub
            jQuery.data(this, "resize-special-event", {
                width:  jqCurrentElement.width(),
                height: jqCurrentElement.height()
            });

            //If this is the first element in the watch list, start the deamon
            if (jqaElements.length === 1) {
                watchDeamon();
            }
        },

        //Reset everything if the last element has been removed from the watchlist
        teardown: function () {
            //Check if this event is being unbound from the window object
            //If so: Don't unbind here, but forward the unbinding to the default DOM event
            if (jqResizeEvent.throttleWindow && this.setTimeout) {
                return false;
            }

            //Get the current element
            var jqCurrentElement = jQuery(this);

            //Remove the current element from the watch list
            jqaElements = jqaElements.not(jqCurrentElement);

            //Remove all data stored in that element
            jqCurrentElement.removeData("resize-special-event");

            //If this was the last element in the watchlist, stop the deamon
            if (!jqaElements.length) {
                clearTimeout(sTimeoutId);
            }
        },

        //Add a new element to the watchlist
        add: function (oNewElement) {

            //Check if this event is being bound to the window object
            //If so: Don't use this custom binding, but the default DOM event
            if (jqResizeEvent.throttleWindow && this.setTimeout) {
                return false;
            }

            //Save the old event handler
            var oOldEventHandler,
                that = this,
                fNewEventHandler;

            //This will be the new event handler
            fNewEventHandler = function (event, width, height) {

                    //Get the current element
                var jqCurrentElement = jQuery(that),
                    //Get the event data object for the current element
                    oData = jQuery.data(that, "resize-special-event");

                //If called from the deamon, the width and height will be passed over as arguments
                //When triggered manually, these values will have to be computed
                if (width && height) {
                    oData.width = width;
                    oData.height = height;
                } else {
                    oData.width = jqCurrentElement.width();
                    oData.height = jqCurrentElement.height();
                }

                oOldEventHandler.apply(that, arguments);
            };

            //jQuery version compatibility
            if (jQuery.isFunction(oNewElement)) {
                oOldEventHandler = oNewElement;
                return fNewEventHandler;
            }
            oOldEventHandler = oNewElement.handler;
            oNewElement.handler = fNewEventHandler;
        }
    };

    watchDeamon = function () {
        //Start the deamon asynchonously
        sTimeoutId = window.setTimeout(function () {

            //Loop through all elements in the watchlist
            jqaElements.each(function () {
                    //Get the current element
                var jqCurrentElement = jQuery(this),
                    //Get the current dimensions of the element
                    width  = jqCurrentElement.width(),
                    height = jqCurrentElement.height(),
                    //Get the previous dimensions of the element
                    oData = jQuery.data(this, "resize-special-event");

                //Check if the element's size has changed
                if (width !== oData.width || height !== oData.height) {
                    //Raise the resize event
                    jqCurrentElement.trigger("resize", [oData.width = width, oData.height = height]);
                }
            });

            //And repeat (regarding the timeout)
            watchDeamon();

        }, jqResizeEvent.delay);

    };

}());
