// Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap, window */
    /*jslint nomen: true */
    jQuery.sap.declare("sap.ushell.renderers.fiori2.History");

    sap.ushell.renderers.fiori2.History = function () {
        this._history = [];
        this.backwards = false;
        this._historyPosition = -1;
        this._virtual = {};
    };

    sap.ushell.renderers.fiori2.History.prototype.hashChange = function (newHash, oldHash) {
        var historyIndex = this._history.indexOf(newHash);

        //new history entry
        if (historyIndex === -1) {
            //new item and there where x back navigations before - remove all the forward items from the history
            if (this._historyPosition + 1 < this._history.length) {
                this._history = this._history.slice(0, this._historyPosition + 1);
            }

            this._history.push(newHash);

            this._historyPosition += 1;
            this.backwards = false;
            this.forwards = false;
        } else {
            //internalNavigation
            this.backwards = this._historyPosition > historyIndex;
            this.forwards = this._historyPosition < historyIndex;

            this._historyPosition = historyIndex;
        }
    };

    sap.ushell.renderers.fiori2.History.prototype.isVirtualHashchange = function (newHash, oldHash) {
        //the old hash was flagged as virtual
        return this._virtual.hasOwnProperty(oldHash) &&
            //the new Hash is the current One
            this.getCurrentHash() === newHash &&
            //the history has forward entries
            this._history.length - 1 > this._historyPosition &&
            //the old hash was the hash in the forward history direction
            this._history[this._historyPosition + 1] === oldHash;
    };

    sap.ushell.renderers.fiori2.History.prototype.setVirtualNavigation = function (hash) {
        this._virtual[hash] = true;
    };

    sap.ushell.renderers.fiori2.History.prototype.getCurrentHash = function () {
        return this._history[this._historyPosition] || null;
    };

    sap.ushell.renderers.fiori2.History.prototype.getHashIndex = function (hash) {
        return this._history.indexOf(hash);
    };

    sap.ushell.renderers.fiori2.History.prototype.getHistoryLength = function () {
        return this._history.length;
    }
}());