/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

//Provides common helper functions for the mobile version of UI5 
jQuery.sap.declare("jquery.sap.mobile");
jQuery.sap.require("jquery.sap.dom");
jQuery.sap.require("jquery.sap.events");

(function( $ ) {
	var FAKE_OS_PATTERN = /(?:\?|&)sap-ui-xx-fakeOS=([^&]+)/;

	// OS overriding mechanism
	if (jQuery.browser.webkit && !jQuery.support.touch) { // on non-touch webkit browsers we are interested in overriding
		var result = document.location.search.match(FAKE_OS_PATTERN);
		var resultUA = result && result[1] || jQuery.sap.byId("sap-ui-bootstrap").attr("data-sap-ui-xx-fakeOS");
		if (resultUA) {
			var ua = { // for "ios"/"android"/"blackberry" we have defined fake user-agents; these will affect all other browser/platform detection mechanisms
					ios: "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.48 (KHTML, like Gecko) Version/5.1 Mobile/9A406 Safari/7534.48.3",
					iphone: "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.48 (KHTML, like Gecko) Version/5.1 Mobile/9A406 Safari/7534.48.3",
					ipad: "Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206",
					android: "Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; GT-I9100 Build/IML74K) AppleWebKit/534.46 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.46",
					android_phone: "Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; GT-I9100 Build/IML74K) AppleWebKit/534.46 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.46",
					android_tablet: "Mozilla/5.0 (Linux; Android 4.1.2; Nexus 7 Build/JZ054K) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19",
					blackberry: "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+",
					blackberry10: "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+"
			}[resultUA];

			if (ua) {
				// code for modifying the real user-agent
				if (jQuery.browser.safari) {
					var __originalNavigator = window.navigator;
					window.navigator = new Object();
					window.navigator.__proto__ = __originalNavigator;
					window.navigator.__defineGetter__('userAgent', function(){ return ua; });

				} else { // Chrome - we have already verified we have a webkit browser
					window.navigator.__defineGetter__('userAgent', function(){ return ua; });
				}

				// all downstream checks will be fine with the faked user-agent. Now we also need to adjust the wrong upstream settings in jQuery:
				jQuery.browser.msie = jQuery.browser.opera = jQuery.browser.mozilla = false;
				jQuery.browser.webkit = true;
				jQuery.browser.version = "534.46"; // this is not exactly true for all UAs, but there are much bigger shortcomings of this approach than a minor version of the browser, so giving the exact value is not worth the effort
			}
		}
	}

	// OS detection
	function getOS(userAgent) {
		userAgent = userAgent || navigator.userAgent;
		var platform = /\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/;
		var result = userAgent.match(platform);
		if (result) {
			var appleDevices = /iPhone|iPad|iPod/;
			var bbDevices = /PlayBook|BlackBerry/;
			if (result[0].match(appleDevices)){
				result[3] = result[3].replace(/_/g, ".");
				//result[1] contains info of devices
				return({os:"ios", version:result[3]});
			} else if (result[2].match(/Android/)) {
				result[2] = result[2].replace(/\s/g, "");
				return({os:"android", version:result[3]});
			} else if (result[0].match(bbDevices)) {
				return({os:"blackberry", version:result[4]});
			} else {
				// currently we only support iOS, Android, BlackBerry 10.0+ , everything else will be ignored, if more platforms should be supported, logic can be placed here
				return;
			}
			
		} else if (userAgent.indexOf("(BB10;") > 0) { 
			// BlackBery 10 has a different structure...
			platform = /\sVersion\/([\d.]+)\s/;
			result = userAgent.match(platform);
			if (result){
				return {os: "blackberry", version:result[1]};
			} else {
				return {os: "blackberry", version:10};
			}
			
		} else {
			// Windows phone has a different structure, so we need to check with another regExp.
			platform = /Windows Phone (?:OS )?([\d.]*)/;
			result = userAgent.match(platform);
			if (result){
				return {os: "winphone", version:result[1]};
			} else {
				return;
			}
		}
	}

	var os = getOS() || {};
	var $window = $(window);

	if (os.os) {
		var f = parseFloat(os.version);

		/**
		 * Holds information about the current operating system
		 * 
		 * @name jQuery.os
		 * @namespace
		 * @public
		 */
		$.os = $.extend(/** @lends jQuery.os */ {
			/**
			 * The name of the operating system; currently supported are: "ios", "android", "blackberry"
			 * @type {string}
			 * @public
			 */
			os: os.os,
			/**
			 * The version of the operating system as a string (including minor versions)
			 * @type {string}
			 * @public
			 */
			version: os.version,
			/**
			 * The version of the operating system parsed as a float (major and first minor version)
			 * @type {float}
			 * @public
			 */
			fVersion: f
		}, $.os);
		$.os[os.os] = true;
		/**
		 * Whether the current operating system is Android
		 * @type {boolean}
		 * @public
		 * @name jQuery.os.android
		 */
		/**
		 * Whether the current operating system is BlackBerry
		 * @type {boolean}
		 * @public
		 * @name jQuery.os.blackberry
		 */
		/**
		 * Whether the current operating system is Apple iOS
		 * @type {boolean}
		 * @public
		 * @name jQuery.os.ios
		 */
	} else {
		if (!$.os) $.os = {};
	}

	// feature and state detection
	$.extend( $.support, {
		/**
		 * Whether the device has a retina display (window.devicePixelRatio >= 2)
		 * @type {boolean}
		 * @public 
		 */
		retina: window.devicePixelRatio >= 2
	});

	function isLandscape(){
		if(jQuery.sap.touchEventMode === "ON"){
			//if runs in real device, landscape/portrait is decided by the window.orientation
			//we can't simply compare the width and height on window because when keyboard is open in android, it makes the window smaller which can turn a device from portrait to landscape, for example in Nexus 7
			//because the height may get smaller than the width when keyboard opens.
			return window.orientation === undefined || window.orientation === 90 || window.orientation === -90;
		}else{
			return $window.width() > $window.height();
		}
	}

	var landscape = isLandscape();
	var android_phone = (/(?=android)(?=.*mobile)/i.test(navigator.userAgent));
	/**
	 * @name jQuery.device
	 * @namespace
	 * @public
	 */
	$.device = $.extend({}, $.device);

	/**
	 * Holds information about the current device and its state
	 * 
	 * @name jQuery.device.is
	 * @namespace
	 * @public
	 */
	$.device.is = $.extend( /** @lends jQuery.device.is */ {
		/**
		 * Whether the application runs in standalone mode without browser UI (launched from the iOS home screen)
		 * @type {boolean}
		 * @public 
		 */
		standalone: window.navigator.standalone,
		/**
		 * Whether the device is in "landscape" orientation (also "true" when the device does not know about the orientation)
		 * @type {boolean}
		 * @public 
		 */
		landscape: landscape,
		/**
		 * Whether the device is in portrait orientation
		 * @type {boolean}
		 * @public 
		 */
		portrait: !landscape,
		/**
		 * Whether the application runs on an iPhone
		 * @type {boolean}
		 * @public 
		 */
		iphone: /iphone/i.test(navigator.userAgent),
		/**
		 * Whether the application runs on an iPad
		 * @type {boolean}
		 * @public 
		 */
		ipad: /ipad/i.test(navigator.userAgent),
		/**
		 * Whether the application runs on an Android phone
		 * https://developers.google.com/chrome/mobile/docs/user-agent
		 * Some device vendors however do not follow this rule
		 * @type {boolean}
		 * @public
		 */
		android_phone: android_phone,
		/**
		 * Whether the application runs on an Android tablet
		 * https://developers.google.com/chrome/mobile/docs/user-agent
		 * Some device vendors however do not follow this rule
		 * @type {boolean}
		 * @public
		 */
		android_tablet: (!!$.os.android && !android_phone)
	},$.device.is);

	$(window).bind("resize", function(){
		var landscape = isLandscape(); 
		$.device.is.landscape = landscape;
		$.device.is.portrait = !landscape;
	});
	
	var tablet = (function(){
		if($.os.ios){
			return $.device.is.ipad;
		}else{
			//this is how android distinguishes between tablet and phone
			//http://android-developers.blogspot.de/2011/07/new-tools-for-managing-screen-sizes.html
			if(jQuery.sap.touchEventMode === "ON"){
				//in real mobile device
				return (Math.min(window.screen.width / window.devicePixelRatio, window.screen.height / window.devicePixelRatio) >= 600);
			}else{
				//in desktop browser
				//return (Math.min($window.width(), $window.height()) >= 600);
				return $.device.is.android_tablet;
			}
		}
	}());

	$.device.is = $.extend( /** @lends jQuery.device.is */ { 
		/**
		 * Whether the running device is a tablet. If the desktop browser runs with URL parameter sap-ui-xx-fakeOS or sap-ui-xx-test-mobile, this property will also be set according to the window size.
		 * This property will be false when runs in desktop browser without touch support. 
		 * This property will only be set once when the application starts up, and it won't be updated when the window resizes in a touch enabled desktop browser.
		 * @type {boolean}
		 * @public
		 */
		tablet: tablet && ($.sap.touchEventMode !== "OFF"),
		/**
		 * Whether the running device is a phone. If the desktop browser runs with URL parameter sap-ui-xx-fakeOS or sap-ui-xx-test-mobile, this property will also be set according to the window size.
		 * This property will be false when runs in desktop browser without touch support. 
		 * This property will only be set once when the application starts up, and it won't be updated when the window resizes in a touch enabled desktop browser.
		 * @type {boolean}
		 * @public
		 */
		phone: !tablet && ($.sap.touchEventMode !== "OFF"),
		/**
		 * Whether the running device is a desktop browser without touch support.
		 * @type {boolean}
		 * @public
		 */
		desktop: ($.sap.touchEventMode === "OFF")
	}, $.device.is);

	var _bInitMobileTriggered = false;

	/**
	 * Does some basic modifications to the HTML page that make it more suitable for mobile apps.
	 * The "options" parameter configures what exactly should be done.
	 *  
	 * It can have the following properties:
	 * <ul>
	 * <li>viewport: whether to set the viewport in a way that disables zooming (default: true)</li>
	 * <li>statusBar: the iOS status bar color, "default", "black" or "black-translucent" (default: "default")</li>
	 * <li>hideBrowser: whether the browser UI should be hidden as far as possible to make the app feel more native (default: true)</li>
	 * <li>preventScroll: whether native scrolling should be disabled in order to prevent the "rubber-band" effect where the whole window is moved (default: true)</li>
	 * <li>rootId: the ID of the root element that should be made fullscreen; only used when hideBrowser is set (default: the document.body)</li>
	 * <li>useFullScreenHeight: a boolean that defines whether the height of the html root element should be set to 100%, which is required for other elements to cover the full height (default: true)</li>
	 * <li>homeIcon: The icon to be displayed on the home screen of iOS devices after the user does "add to home screen" (default: no icon).
	 *     This icon must be in PNG format. The property can either hold the URL of one single icon which is used for all devices (and possibly scaled, 
	 *     which looks not perfect), or an object holding icon URLs for the different required sizes; one example is:
	 *     <pre>
	 *     {
	 *        'phone':'phone-icon.png',
	 *        'phone@2':'phone-retina.png',
	 *        'tablet':'tablet-icon.png',
	 *        'tablet@2':'tablet-retina.png'
	 *     }
	 *     </pre>
	 *     The respective image sizes are 57/114 px for the phone and 72/144 px for the tablet. If an object is given but the required size is missing 
	 *     from the object, the largest given URL will be used.</li>
	 * <li>homeIconPrecomposed: whether the home icon already has some glare effect (otherwise iOS will add it) (default: false)</li>
	 * </ul>
	 * 
	 * @param {object}  [options] configures what exactly should be done
	 * @param {boolean} [options.viewport=true] whether to set the viewport in a way that disables zooming
	 * @param {string}  [options.statusBar='default'] the iOS status bar color, "default", "black" or "black-translucent"
	 * @param {boolean} [options.hideBrowser=true] whether the browser UI should be hidden as far as possible to make the app feel more native
	 * @param {boolean} [options.preventScroll=true] whether native scrolling should be disabled in order to prevent the "rubber-band" effect where the whole window is moved
	 * @param {string}  [options.rootId] the ID of the root element that should be made fullscreen; only used when hideBrowser is set. If not set, the body is used
	 * @param {boolean} [options.useFullScreenHeight=true] whether the height of the html root element should be set to 100%, which is required for other elements to cover the full height 
	 * @param {string}  [options.homeIcon=undefined] The icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
	 * @param {boolean} [options.homeIconPrecomposed=false] whether the home icon already has some glare effect (otherwise iOS will add it) 
	 * 
	 * @name jQuery.sap.initMobile
	 * @function
	 * @public
	 */
	$.sap.initMobile = function(options) {
		if (!_bInitMobileTriggered) { // only one initialization per HTML page
			_bInitMobileTriggered = true;

			options = $.extend({}, { // merge in the default values
				viewport: true,
				statusBar: "default",
				hideBrowser: true,
				preventScroll: true,
				useFullScreenHeight: true,
				homeIconPrecomposed: false
			}, options);

			$(function() {
				var $head = $("head");

				// initialize viewport
				if (options.viewport) {
					if ($.device.is.iphone && (Math.max(window.screen.height, window.screen.width) === 568)) {
						// iPhone 5
						$head.append($('<meta name="viewport" content="user-scalable=0, initial-scale=1.0">'));
					} else if ($.os.android && $.os.fVersion < 3){
						$head.append($('<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">'));
					} else {
						// all other devices
						$head.append($('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">'));
					}
				}

				if ($.os.ios) {
					// enable fullscreen when possible
					$head.append($('<meta name="apple-mobile-web-app-capable" content="yes">')); // since iOS 2.1

					// set the status bar style on Apple devices
					$head.append($('<meta name="apple-mobile-web-app-status-bar-style" content="' + options.statusBar + '">')); // "default" or "black" or "black-translucent", since iOS 2.1

					// splash screen
					//<link rel="apple-touch-startup-image" href="/startup.png">

				} else if ($.browser.msie) {
					$head.append($('<meta http-equiv="cleartype" content="on">'));
				}

				// Home Icon (also working in Android depending on version and other circumstances)
				var icon = options.homeIcon;
				if (icon) {
					var precomposed = options.homeIconPrecomposed ? "-precomposed" : "";
					if (typeof icon === "string") { // case 1: one home icon to rule them all
						$head.append($('<link rel="apple-touch-icon' + precomposed + '" href="' + icon + '">'));

					} else if (typeof icon === "object") { // case 2: a config object with optimized home icons for different devices
						var getBestIcon = function(res) {
							return icon[res] || icon['tablet@2'] || icon['phone@2'] || icon['phone'] || icon['tablet']; // fallback logic
						};
						var requiredSize = ($.device.is.ipad ? "tablet" : "phone") + ($.support.retina ?  "@2": "");
						var size = ($.device.is.ipad ? 72 : 57) * ($.support.retina ?  2 : 1);
						var sizes = (size === 57) ? '' : 'sizes="' + size + 'x' + size + '"';
						$head.append($('<link rel="apple-touch-icon"' + precomposed + ' ' + sizes + ' href="' + getBestIcon(requiredSize) + '">'));
					}
				}

				// hide browser address bar
				if (options.hideBrowser && !jQuery.browser.msie) {
					/*var hideAddressBar = function() {
						document.body.style.height = (window.outerHeight + 120) + 'px'; // must be large enough to scroll out

						window.setTimeout(function(){
							window.scrollTo(0, 1); 
							var $root = options.rootId ? $.sap.byId(options.rootId) : $(document.body); // TODO: does body work?
							var height = window.innerHeight  + "px";
							$root.css("height", height);
						}, 0);
					};*/

					//	$(window)
					//		.bind("load", hideAddressBar)
					//		.bind("resize", hideAddressBar); // this one helps iOS, but only AFTER initial loading
					//.bind("orientationchange", hideAddressBar) // this one does not seem to be required
				}

				if (options.preventScroll) {
					$(window).bind("touchmove", function sapInitMobileTouchMoveHandle(oEvent){
						if (!oEvent.isDefaultPrevented()) {
							oEvent.preventDefault();	// this one prevents the rubber-band effect - and disables native scrolling
						}
					});
				}

				if (options.useFullScreenHeight) {
					$(function() {
						document.documentElement.style.height = "100%"; // set html root tag to 100% height
					});
				}
			});

			// platform depending checks to show mobile support message
			$(function() {
				var bShowSupportMessage = false;
				var sSupportMessage = "";
				var sPopupWidth = "240px";
				var iTimeOut = 3000;

				var getRB = sap.ui.getCore().getLibraryResourceBundle;

				// check mobile devices
				if (jQuery.device.is.ipad ||
						jQuery.device.is.iphone ||
						jQuery.os.os == "android" ||
						jQuery.os.os == "blackberry" ||
						jQuery.os.os == "winphone") {

					// check OS version
					if ((jQuery.os.ios && jQuery.os.fVersion < 5) ||
							(jQuery.os.android && jQuery.os.fVersion < 2.3) ||
							(jQuery.os.blackberry && jQuery.os.fVersion < 10) ||
							(jQuery.os.winphone) ||
							(!jQuery.browser.webkit)) { 
						bShowSupportMessage = true;
						sSupportMessage = getRB("sap.ui.core").getText("MOBILE_SUPPORT_MESSAGE_DEVICE", [jQuery.os.os, jQuery.os.fVersion]);
					}

					// check browser
				} else {

					// check if browser is webkit-based
					if (!jQuery.browser.webkit){
						sPopupWidth = "auto";
						bShowSupportMessage = true;
						sSupportMessage = getRB("sap.ui.core").getText("MOBILE_SUPPORT_MESSAGE_BROWSER");

					} else {
						// show message only if no URL parameter is set
						var result = window.location.search.match(FAKE_OS_PATTERN);
						var resultUA = result && result[1] || jQuery.sap.byId("sap-ui-bootstrap").attr("data-sap-ui-xx-fakeOS");
						if (!resultUA || (
								resultUA !== "ios" &&
								resultUA !== "iphone" && 
								resultUA !== "ipad" && 
								resultUA !== "android" && 
								resultUA !== "android_tablet" &&
								resultUA !== "android_phone" && 
								resultUA !== "blackberry")) {
							sPopupWidth = "480px";
							iTimeOut = 5000;
							bShowSupportMessage = true;
							sSupportMessage = getRB("sap.ui.core").getText("MOBILE_SUPPORT_MESSAGE_URL_PARAM");
						}

					}

				}

				if (bShowSupportMessage) {

					jQuery.sap.require("sap.ui.core.Popup");

					var oHtml = new sap.ui.core.HTML("mSAPUI5SupportMessage", {
						content: "<div id=\"mSAPUI5SupportMessage\"" +
						"style=\"" +
						"background-color:white;" +
						"border:solid 1px #cccccc;" +
						"border-radius:0.3125em;" +
						"-webkit-border-radius:0.3125em;" +
						"padding:0.3125em;" +
						"text-align:center;" +
						"width:" + sPopupWidth +
						"\"" +
						"tabindex=\"0\">" +
						"<img src=\"" + sap.ui.resource("sap.ui.core", "mimes/logo/icotxt_white_220x72.png") + "\"\>" +
						"<br>" +
						"<span style=\"color:#ff0000;\">" + sSupportMessage + "</span>" +
						"<br>" +
						"</div>"
					});

					var oPopup = new sap.ui.core.Popup(oHtml, false, true, false);

					window.setTimeout(function() {
						if(oPopup) {
							oPopup.open(0, "center center", "center center", document.body);
						}
					}, 0);

					window.setTimeout(function() {
						if(oPopup) {
							oPopup.close();
						}
					}, iTimeOut);

				}
			});

		}
	};

})( jQuery );
