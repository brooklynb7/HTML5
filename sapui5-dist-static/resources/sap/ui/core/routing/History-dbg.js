/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.require("sap.ui.core.routing.HashChanger");
jQuery.sap.declare("sap.ui.core.routing.History");

/**
 * 
 * Used to determine the {sap.ui.core.HistoryDirection} of the current or a future navigation, done with a 
 * {sap.ui.core.routing.Router} or {sap.ui.core.routing.HashChanger}.
 * ATTENTION: this class will not be accurate if someone does hash-replacement without the named classes above
 * 
 * @public
 * @class
 * @name sap.ui.core.routing.History
 */
sap.ui.core.routing.History = function() {
	this._iHistoryLength = window.history.length;
	this._reset();
};



/**
 * Determines what the navigation direction for a newly given hash would be
 * @param sNewHash {string} - optional, if this parameter is not passed the current hash is taken.
 * @public
 * @returns {sap.ui.core.routing.HistoryDirection} or undefined, if no navigation has taken place and a newHash was not provided
 */
sap.ui.core.routing.History.prototype.getDirection = function(sNewHash) {
	if(sNewHash === undefined) {
		return this._sCurrentDirection;
	}
	
	//no navigation has taken place and someone asks for a direction
	if(sNewHash !== undefined && this._sCurrentDirection === undefined) {
		return undefined;
	}
	
	return this._getDirection(sNewHash);
};


sap.ui.core.routing.History.prototype._reset = function() {	
	this._aHistory = [];
	this._iHistoryPosition = -1;
	this._bUnknown = true;
}


/**
 * Determines what the navigation direction for a newly given hash would be
 * @param sNewHash {string} the new hash
 * @private
 * @returns {sap.ui.core.routing.HistoryDirection}
 */
sap.ui.core.routing.History.prototype._getDirection = function(sNewHash, bHistoryLengthIncreased) {	
	var oDirection = sap.ui.core.routing.HistoryDirection;
	
	if(this._bUnknown) {
		
		//we have not had a direction yet and the application did not trigger navigation + the browser history does not increase
		//the user is navigating in his history but we cannot determine the direction
		return oDirection.Unknown;
	}

	//We don't want to record replaced hashes
	if(this._oNextHash && this._oNextHash.sHash === sNewHash) {
		return oDirection.NewEntry;
	}
		
	if(bHistoryLengthIncreased) {
		//increasing the history length will add entries but we cannot rely on this since the history length is capped
		return oDirection.NewEntry;
	}
	
	//both directions contain the same hash we don't know the direction
	if(!bHistoryLengthIncreased  && this._aHistory[this._iHistoryPosition + 1] === sNewHash && this._aHistory[this._iHistoryPosition - 1] === sNewHash) {
		return oDirection.Unknown;
	}
	
	if(this._aHistory[this._iHistoryPosition - 1] === sNewHash) {
		return oDirection.Backwards;
	}
	
	if(this._aHistory[this._iHistoryPosition + 1] === sNewHash) {
		return oDirection.Forwards;
	}

	//TODO: this is wrong if you navigate from an unknown state to known and then browser back is pressed, it should not be a new entry but will return it here.
	return oDirection.NewEntry;
};


/**
 * Handles a hash change and cleans up the History
 * @private
 */
sap.ui.core.routing.History.prototype._hashChange = function(sNewHash, sOldHash) {
	var oDirection = sap.ui.core.routing.HistoryDirection,
		iHistoryIndex = jQuery.inArray(sNewHash, this._aHistory),
		sDirection = this._sCurrentDirection = this._getDirection(sNewHash, this._iHistoryLength < window.history.length);
	
	this._iHistoryLength = window.history.length;
	
	if(this._oNextHash && this._oNextHash.sHash !== sNewHash) {
		this._oNextHash = null;
	}
	
	//We don't know the state of the history, don't record it set it back to unknown, since we cant say what comes up until the app navigates again
	if(sDirection === oDirection.Unknown) {
		this._reset();
		return;
	}
	
	//We don't want to record replaced hashes
	if(this._oNextHash && this._oNextHash.bWasReplaced && this._oNextHash.sHash === sNewHash) {
		return;
	}
	
	//new history entry
	if(sDirection === oDirection.NewEntry) {
		//new item and there where x back navigations before - remove all the forward items from the history
		if(this._iHistoryPosition + 1 < this._aHistory.length) {
			this._aHistory = this._aHistory.slice(0, this._iHistoryPosition + 1);
		}
		
		this._aHistory.push(sNewHash);
		this._iHistoryPosition += 1;
		return;
	} 
	
	if(sDirection === oDirection.Forwards) {
		this._iHistoryPosition++;
		return;
	}
	
	if(sDirection === oDirection.Backwards) {
		this._iHistoryPosition--;
	}
};


/**
 * Sets the next hash that is going to happen in the hashChange function - used to determine if the app or the browserHistory/links triggered this navigation
 * @param
 */

sap.ui.core.routing.History.prototype._hashChangedByApp = function(sNewHash, bWasReplaced) {
	this._bUnknown = false;
	this._oNextHash = { sHash : sNewHash, bWasReplaced : bWasReplaced };
};



(function() {
	var instance = new sap.ui.core.routing.History(),
		oHashChanger = sap.ui.core.routing.HashChanger.getInstance();
		
	oHashChanger.attachEvent("hashChanged", function(oEvent) {
		instance._hashChange(oEvent.getParameter("newHash"), oEvent.getParameter("oldHash"));
	});
	
	oHashChanger.attachEvent("hashReplaced", function(oEvent) {
		instance._hashChangedByApp(oEvent.getParameter("sHash"), true);
	});
	
	oHashChanger.attachEvent("hashSet", function(oEvent) {
		instance._hashChangedByApp(oEvent.getParameter("sHash"), false);
	});
	
	sap.ui.core.routing.History.getInstance = function() {
		return instance;
	};
}());
