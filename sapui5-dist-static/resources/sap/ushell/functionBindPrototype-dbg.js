// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview This file adds the missing Function.bind function for Webkit browsers.
 */

(function () {
    "use strict";
    /*global jQuery, sap */

    // ensure that sap.ushell exists
    jQuery.sap.declare("sap.ushell.functionBindPrototype");

    if (!Function.prototype.bind) {
        Function.prototype.bind = function(oThis) {
            if (typeof this !== "function") {
                // closest thing possible to the ECMAScript 5 internal IsCallable function
                throw new TypeError(
                        "Function.prototype.bind - what is trying to be bound is not callable");
            }

            var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function() {
            }, fBound = function() {
                return fToBind.apply(this instanceof fNOP && oThis ? this
                        : oThis, aArgs.concat(Array.prototype.slice
                        .call(arguments)));
            };

            fNOP.prototype = this.prototype;
            fBound.prototype = new fNOP();

            return fBound;
        };
    }
}());
