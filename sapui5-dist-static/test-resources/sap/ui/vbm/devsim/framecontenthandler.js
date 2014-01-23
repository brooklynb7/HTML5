
var FrameContentHandler = {};

(function(){
	/**
	 * Returns a string containing JavaScript code which overrides the user-agent in the current browser with the given ua
	 * @param ua
	 * @returns {String}
	 */
	function getFakeUserAgentSetter(ua) {
		ua = ua || "MY FAKE BROWSER; Version 1.0";
	
		if (jQuery.browser.safari) {
			return "var __originalNavigator = window.navigator;window.navigator = new Object();window.navigator.__proto__ = __originalNavigator;window.navigator.__defineGetter__('userAgent', function () { return '"
					+ ua + "'; });";
	
		} else if ($.browser.msie) { 
			if (jQuery.browser.fVersion >= 10) {
				return "Object.defineProperty(navigator, 'userAgent', {get: function() {return '" + ua + "';}});";
			} else {
				// IE <10 is not a browser for mobile tests...
				return "alert('Overriding the user agent does not work in Internet Explorer 9 or lower. PLEASE consider a different browser.')";
			}
	
		} else {
			return "window.navigator.__defineGetter__('userAgent', function(){return '" + ua + "';});";
		}
	}
	
	function getFakeFontSetter() {
		var sCode ="mFakeFonts = {ios: \"'Helvetica Neue'\",android: \"Roboto,'Droid Sans'\",blackberry: \"'BBGlobal Sans','DejaVu Sans'\",winphone: \"'Segoe WP', 'Segoe UI'\"};";
		sCode += "var sFont = mFakeFonts[jQuery.os.os];";
		sCode += "$('head').append(\"<style>.sapUiBody{font-family:\" + sFont + \",Helvetica,Arial !important;</style>\");";
		return sCode;
	}
	
	
	/**
	 * Modifies the given HTML by adding code to the head which modifies the user-agent according to the given ua
	 * @param html
	 * @param ua
	 * @returns
	 */
	function addFakeUserAgent(html, ua) {
		var config = "window['sap-ui-config'] = {'xx-test-mobile':true};"; // could be overwritten
		html = html.replace("<head>", "<head><script>" + config + getFakeUserAgentSetter(ua) + "<" + "/script>");
		html = html.replace("</head>", "<script>" + getFakeFontSetter() + "</" + "script></head>");
		return html;
	}
	
	/**
	 * Tries to replace all relative src= and href= URLs in the given HTML code with absolute ones, based on the given document location
	 * Adapts calls to sap.ui.localResources in the same way. 
	 */
	function fixRelativeLinks(html, baseUrl) {
		return html;
		
		var iRelativeThreshold = 5;
	
		var relativeLinks = [];
		var localPkgs = [];
	
		function isRelative(url) {
			var trimmedUrl = jQuery.trim(url);
			return !jQuery.sap.startsWith(trimmedUrl, "http:") && !jQuery.sap.startsWith(trimmedUrl, "https:") && !jQuery.sap.startsWith(trimmedUrl, "javascript:")
					&& !jQuery.sap.startsWith(trimmedUrl, "/");
		}
	
		// replace any src="..." URLs 
		html = html.replace(/(src\s*=\s*[\'\"])([^\'\"]+)([\'\"])/gi, function(match, prefix, url, suffix) {
			if (isRelative(url)) {
				relativeLinks.push(url);
				return prefix + baseUrl + url + suffix;
			}
			return match;
		});
	
		// replace any href="..." URLs
		html = html.replace(/(href\s*=\s*[\'\"])([^\'\"]+)([\'\"])/gi, function(match, prefix, url, suffix) {
			if (isRelative(url)) {
				relativeLinks.push(url);
				return prefix + baseUrl + url + suffix;
			}
			return match;
		});
	
		// replace sap.ui.localResource() calls
		html = html.replace(/sap\.ui\.localResources\s*\(\s*[\'\"]([^\'\"]+)[\'\"]\s*\)/gi, function(sMatch, sModule) {
			localPkgs.push(sModule);
			return "jQuery.sap.registerModulePath('" + sModule + "', '" + baseUrl + sModule.replace('.', '/') + "')";
		});
	
		var msg = [];
		if (relativeLinks.length > 0) {
			msg.push("Found ", relativeLinks.length, " relative links and tried to fix them");
			if (relativeLinks.length >= iRelativeThreshold) {
				msg.push(", the first " + iRelativeThreshold + " ones were");
			}
			msg.push(":\n");
			msg.push(relativeLinks.splice(0, iRelativeThreshold).join('\n'));
		}
		if (localPkgs.length > 0) {
			if (msg.length > 0) {
				msg.push("\n\n");
			}
			msg.push("Found ", localPkgs.length, " local resource package declarations and tried to fix them");
			if (localPkgs.length >= iRelativeThreshold) {
				msg.push(", the first " + iRelativeThreshold + " ones were");
			}
			msg.push(":\n");
			msg.push(localPkgs.splice(0, iRelativeThreshold).join('\n'));
		}
	
		if (msg.length > 0) {
			//msg.push("\n\nYou may need to fix more URLs, e.g. image locations supplied to controls.");
			//jQuery.sap.require("sap.ui.commons.MessageBox");
			//sap.ui.commons.MessageBox.show(msg.join(""), sap.ui.commons.MessageBox.Icon.INFORMATION, "Snippet Import From URL: Fixed Relative URLs");
		}
		return html;
	}
	
	
	/**
	 * Loads the currently entered URL into the test frame and applies the given User-Agent
	 */
	FrameContentHandler.setFrameUrlAndUA = function($frame, url, device) {
		if (device) {
			//window.url = url;
			//var hasParameters = (url.indexOf("?") > -1);
			//var urlParam = (hasParameters ? "&" : "?") + "sap-ui-xx-test-mobile=true";
			//url = url + urlParam;
	
			var result = jQuery.sap.syncGet(url);
			var content = "";
			if (result.success) {
				// great!
				content = result.data;
			} else {
				jQuery.sap.require("sap.ui.commons.MessageBox");
				sap.ui.commons.MessageBox.show("Error when loading the code from URL'" + url + ".\nDoes the file exist? Note: cross-domain URLs cannot be loaded.",
						sap.ui.commons.MessageBox.Icon.ERROR, "Error");
				return;
			}
	
			if (content == "") {
				jQuery.sap.require("sap.ui.commons.MessageBox");
				sap.ui.commons.MessageBox.show("Error when loading the code from URL'" + url + ".\nDoes the file exist? Note: cross-domain URLs cannot be loaded.",
						sap.ui.commons.MessageBox.Icon.ERROR, "Error");
			} else {
				// content loaded successfully
				var baseUrl = url.split("?")[0].split("#")[0];
				if (jQuery.sap.endsWithIgnoreCase(baseUrl, ".html") || jQuery.sap.endsWithIgnoreCase(baseUrl, ".htm")
						|| jQuery.sap.endsWithIgnoreCase(baseUrl, ".epx") || jQuery.sap.endsWithIgnoreCase(baseUrl, ".asp")
						|| jQuery.sap.endsWithIgnoreCase(baseUrl, ".aspx") || jQuery.sap.endsWithIgnoreCase(baseUrl, ".jsp")) {
					baseUrl = baseUrl.substr(0, baseUrl.lastIndexOf("/"));
				}
				if (!jQuery.sap.endsWith(baseUrl, "/")) {
					baseUrl += "/";
				}
				content = fixRelativeLinks(content, baseUrl);
				content = addFakeUserAgent(content, device.ua);
	
				$frame = recreateIframe($frame);
				var frameDoc = $frame[0].contentDocument;
				frameDoc.open("replace");
				frameDoc.write(content);
				frameDoc.close();
			}
		}
	};
	
	//need to destroy the old iframe, as just re-writing its content does not clear up the JS objects reliably in Webkit
	function recreateIframe($frame) {
		var width = $frame.css("width");
		var height = $frame.css("height");
		var margin = $frame.css("margin");
		$frame.remove();
		//$frame.remove();
		$frame = $("<iframe id='theFrame' style='width:" + width + ";height:" + height + ";margin:" + margin + ";'></iframe>").appendTo($("#frameTray"));
		return $frame;
	}

})();

