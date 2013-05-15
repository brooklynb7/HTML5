/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.m.MessageToast");
jQuery.sap.require("sap.ui.core.Popup");
jQuery.sap.require("sap.m.InstanceManager");

/**
 * @class
 * A message toast notification offers simple feedback about an operation in a Pop-up.
 * Toasts automatically disappear after a timeout and will never receive focus in order to be
 * unobtrusive as possible.
 * Toasts appears close the bottom of the screen, centered horizontally, but you can change
 * this position which is not dependent on the default values of the position settings.
 * The default position applies as long as the application does not do any position setting.
 * Position settings are "my, at, of and offset".
 *
 * Beware that only one message toast can be shown at a time in the same place.
 * If you want to have multiple message toasts visible at the same time, you need to position
 * the message toasts in different places.
 * This positioning needs to be handled in the application logic.
 *
 * As <code>MessageToast</code> is a static class, a <code>jQuery.sap.require("sap.m.MessageToast");</code>
 * statement must be explicitly executed before the class can be used.
 *
 * Basic example:
 *
 * <pre>
 * jQuery.sap.require("sap.m.MessageToast");
 *
 * sap.m.MessageToast.show("This message should appear in the message toast");
 * </pre>
 *
 * Other example:
 * <pre>
 * jQuery.sap.require("sap.m.MessageToast");
 *
 * sap.m.MessageToast.show("This message should appear in the message toast", {
 *     duration: 3000,                  // default
 *     width: "15em",                   // default
 *     my: "center bottom",             // default
 *     at: "center bottom",             // default
 *     of: document,                    // default
 *     offset: "0 0",                   // default
 *     collision: "fit fit"             // default
 *     onClose: null,                   // default
 *     autoClose: true,                 // default
 *     animationTimingFunction: "ease", // default
 *     animationDuration: 1000          // default
 *	});
 * </pre>
 *
 * @author SAP AG
 * @since 1.9.2
 *
 * @static
 * @public
 * @name sap.m.MessageToast
 */
sap.m.MessageToast = {};

/* =========================================================== */
/*        begin: internal methods and properties               */
/* =========================================================== */

sap.m.MessageToast._aPopups = [];

sap.m.MessageToast._iOpenedPopups = 0;

sap.m.MessageToast._bNotBoundToOrientationChange = true;

sap.m.MessageToast._validateSettings = function(mSettings) {
	var aMy = mSettings.my.split(" "),
		aAt = mSettings.at.split(" "),
		core = sap.ui.core,
		Dock = core.Popup.Dock,
		sMy = this._getDockFormat(aMy),
		sAt = this._getDockFormat(aAt),
		aValidTimingFn = ["ease", "linear", "ease-in", "ease-out", "ease-in-out"],
		aValidCollisions = ["fit", "flip", "none"],
		sCollitionErrorMessage = '"collision" needs to be a single value “fit”, “flip” or “none”, or a pair for horizontal and vertical e.g. "fit flip”, "fit none"';

	// duration
	if (typeof mSettings.duration !== "number" || !isFinite(mSettings.duration) || !(Math.floor(mSettings.duration) === mSettings.duration) || mSettings.duration <= 0) {
		throw new Error('"duration" needs to be a finite positive nonzero integer');
	}

	// width
	if (!core.CSSSize.isValid(mSettings.width)) {
		throw new Error(mSettings.width + ' is not of type ' + '"sap.ui.core.CSSSize" for property "width"');
	}

	// my
	if (typeof sMy !== "string" || !(sMy in Dock)) {
		throw new Error(mSettings.my + ' is not of type ' + '"sap.ui.core.Popup.Dock" for property "my"');
	}

	// at
	if (typeof sAt !== "string" || !(sAt in Dock)) {
		throw new Error(mSettings.at + ' is not of type ' + '"sap.ui.core.Popup.Dock" for property "at"');
	}

	// offset
	if (typeof mSettings.offset !== "string") {
		throw new Error(mSettings.offset + ' is of type ' + typeof mSettings.offset + ', expected "string" for property "offset"');
	}

	// collision
	if (mSettings.collision.split(" ").length === 1) {
		if (aValidCollisions.indexOf(mSettings.collision) === -1) {
			throw new Error(sCollitionErrorMessage);
		}
	} else if (mSettings.collision.split(" ").length === 2) {
		if (aValidCollisions.indexOf(mSettings.collision.split(" ")[0]) === -1 || aValidCollisions.indexOf(mSettings.collision.split(" ")[1]) === -1) {
			throw new Error(sCollitionErrorMessage);
		}
	} else {
		throw new Error(sCollitionErrorMessage);
	}

	// onClose
	if (typeof mSettings.onClose !== "function" && mSettings.onClose !== null) {
		throw new Error('"onClose" should be a function or null');
	}

	// autoClose
	if (typeof mSettings.autoClose !== "boolean") {
		throw new Error('"autoClose" should be a boolean');
	}

	// animationTimingFunction
	if (aValidTimingFn.indexOf(mSettings.animationTimingFunction) === -1) {
		throw new Error('"animationTimingFunction" should be a string, expected values: ' + aValidTimingFn.toString());
	}

	// animationDuration
	if (typeof mSettings.animationDuration !== "number" || !isFinite(mSettings.animationDuration) || !(Math.floor(mSettings.animationDuration) === mSettings.animationDuration) || mSettings.animationDuration < 0) {
		throw new Error('"animationDuration" needs to be a finite positive integer');
	}
};

sap.m.MessageToast._getDockFormat = function(aMy) {
	return jQuery.map(aMy, function(sMy) {
		return sMy.charAt(0).toUpperCase() + sMy.slice(1);
	}).join("");
};

sap.m.MessageToast._handleOrientationChange = function() {
	var i,
		oPopup,
		mPos;

	for (i = 0; i < this._aPopups.length; i++) {
		oPopup = this._aPopups[i];
		if (oPopup instanceof sap.ui.core.Popup) {
			mPos = oPopup._oPosition;	// TODO _oPosition is a private property, use a public method when available because Popup.js does not have a getPosition() method.
			oPopup.setPosition(mPos.my, mPos.at, mPos.of, mPos.offset);
		}
	}
};

sap.m.MessageToast._isDefaulPosition = function(mOptions) {
	var mProp = ["my", "at", "of", "offset"],
		i;

	for (i = 0; i < mProp.length; i++) {
		if (typeof mOptions[mProp[i]] !== "undefined") {
			return false;
		}
	}

	return true;
};

/* =========================================================== */
/*       end: internal methods and properties                  */
/* =========================================================== */


/* =========================================================== */
/*                   begin: API method and properties          */
/* =========================================================== */

/**
 * Creates and displays a simple message toast notification message with the given text, and optionally other options.
 *
 * The only mandatory parameter is <code>sMessage</code>.
 *
 * @param {string} sMessage The message to be displayed.
 * @param {object} [mOptions] Optionally other options.
 * @param {int} [mOptions.duration=3000] Time in milliseconds before the close animation starts. Needs to be a finite positive nonzero integer.
 * @param {sap.ui.core/CSSSize} [mOptions.width="15em"] The width of the message toast, this value can be provided in %, em, px and all possible CSS measures.
 * @param {sap.ui.core.Popup.Dock} [mOptions.my="center bottom"] Specifies which point of the message toast should be aligned.
 * @param {sap.ui.core.Popup.Dock} [mOptions.at="center bottom"] Specifies the point of the reference element to which the message toast should be aligned.
 * @param {string|sap.ui.core.Control|Element|jQuery} [mOptions.of=document] Specifies the reference element to which the message toast should be aligned.
 * @param {string} [mOptions.offset="0 0"] The offset relative to the docking point, specified as a string with space-separated pixel values (e.g. "0 10" to move the message toast 10 pixels to the right).
 * @param {string} [mOptions.collision="fit fit"] Specifies how the position of the message toast should be adjusted in case it overflows the screen in some direction. Possible values “fit”, “flip”, “none”, or a pair for horizontal and vertical e.g. "fit flip”, "fit none".
 * @param {function} [mOptions.onClose=null] Function to be called when the message toast closes.
 * @param {boolean} [mOptions.autoClose=true] Specify whether the message toast should close as soon as the end user touches the screen.
 * @param {string} [mOptions.animationTimingFunction="ease"] Describes how the close animation will progress. Possible values "ease", "linear", "ease-in", "ease-out", "ease-in-out".
 * @param {int} [mOptions.animationDuration=1000] Time in milliseconds that the close animation takes to complete. Needs to be a finite positive integer. For not animation set to 0.
 *
 * @type void
 * @public
 * @name sap.m.MessageToast.show
 * @function
 */
sap.m.MessageToast.show = function(sMessage, mOptions) {
	var self = this,
		$ = jQuery,
		mSettings = jQuery.extend({
			duration: 3000,
			width: "15em",
			my: "center bottom",
			at: "center bottom",
			of: document,
			offset: "0 0",
			collision: "fit fit",
			onClose: null,
			animationTimingFunction: "ease",
			animationDuration: 1000,
			autoClose: true
		}, {message: sMessage}),
		oPopup = new sap.ui.core.Popup(),
		handleMTClosed,
		iPos,
		$MTRef;

	if (mOptions) {

		// if no additional position options are provided, change the default offset
		if (this._isDefaulPosition(mOptions)) {
			mOptions.offset = "0 -64";
		}

		// merge mOptions into mSettings
		$.extend(mSettings, mOptions);
	} else {
		mSettings.offset = "0 -64";
	}

	// validate all settings
	this._validateSettings.call(this, mSettings);

	// create the markup
	$MTRef = $('<div class="sapMMT" style="width:' + mSettings.width + '">' + $.sap.escapeHTML(mSettings.message) + '</div>');

	// save this Popup instance and the position,
	// to be used inside fnMTAttachClosed closure
	iPos = this._aPopups.push(oPopup) - 1;

	// sets the content of the Popup
	oPopup.setContent($MTRef[0]);

	// sets the position of the Popup
	oPopup.setPosition(mSettings.my, mSettings.at, mSettings.of, mSettings.offset, mSettings.collision);

	// sets the animation functions to use for opening and closing the Popup
	// note: this custom animations are using css3 transitions
	oPopup.setAnimations(function fnMTOpen($MTRef, iDuration, fnOpened) {
		fnOpened();
		self._iOpenedPopups++;
	}, function fnMTClose($MTRef, iDuration, fnClose) {
		if (mSettings.animationDuration > 0) {
			$MTRef.css({
				"-webkit-transition": "opacity " + mSettings.animationTimingFunction + " " + mSettings.animationDuration + "ms",
				opacity: 0
			}).one("webkitTransitionEnd", function handleMTTransitionEnd() {	// one() method unbound the event handler after its first invocation
				fnClose();	// handleMTClosed() function is called
			});
		} else {
			fnClose();
		}
	});

	// no default shadow
	oPopup.setShadow(false);

	oPopup.setAutoClose(mSettings.autoClose);

	sap.m.InstanceManager.addPopoverInstance(oPopup);

	// do not bind if already bound
	if (this._bNotBoundToOrientationChange) {
		this._bNotBoundToOrientationChange = false;

		// bind to the resize event to handle orientation change
		$(window).on("resize.sapMMessageToast", jQuery.proxy(this._handleOrientationChange, this));
	}

	// opens the popup's content at the position specified via #setPosition
	oPopup.open();

	// attach event handler fnFunction to the 'closed' event
	oPopup.attachClosed(function handleMTClosed() {
		sap.m.InstanceManager.removePopoverInstance(self._aPopups[iPos]);
		$(self._aPopups[iPos].getContent()).remove();
		self._aPopups[iPos].detachClosed(handleMTClosed);
		self._aPopups[iPos].destroy();
		self._aPopups[iPos] = null;
		self._iOpenedPopups--;

		if (self._iOpenedPopups === 0) {
			self._aPopups = [];
			$(window).off("resize.sapMMessageToast");
			self._bNotBoundToOrientationChange = true;
		}

		if (typeof mSettings.onClose === "function") {
			mSettings.onClose.call(self);
		}
	});

	setTimeout(function() {
		var sOpenState = oPopup.getOpenState();

		// closes the Popup if is not already closed
		if (!(sOpenState === "CLOSED" || sOpenState === "CLOSING")) {
			oPopup.close();
		}

	}, mSettings.duration);
};

/* =========================================================== */
/*                  end: API method and properties             */
/* =========================================================== */