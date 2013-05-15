/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/**
 * @class Provides base functionality of the SAP jQuery plugin as extension of the jQuery framework.<br/>
 * See also <a href="http://api.jquery.com/jQuery/">jQuery</a> for details.<br/>
 * Although these functions appear as static ones, they are meant to be used on jQuery instances.<br/>
 * If not stated differently, the functions follow the fluent interface paradigm and return the jQuery instance for chaining of statements.
 *
 * Example for usage of an instance method:
 * <pre>
 *   var oRect = jQuery("#myDiv").rect();
 *   alert("Top Position: " + oRect.top);
 * </pre>
 *
 * @name jQuery
 * @static
 * @public
 */

(function() {
	
	if (!window.jQuery ) {
		throw new Error("SAPUI5 requires jQuery as a prerequisite (>= version 1.7)");
	}

	/**
	 * Window that the sap plugin has been initialized for.
	 * @private
	 */
	var _window = window;

	var _earlyErrors = [];

	var _sBootstrapUrl = undefined;

	if ( parseFloat(jQuery.prototype.jquery) < 1.7 ) {
		_earlyErrors.push("SAPUI5 requires at least jQuery 1.7, current version is " + jQuery.prototype.jquery);
	}
	
	//ensure not to initialize twice
	if (jQuery.sap) {
		return;
	}

	// Fixes the CORS issue (introduced by jQuery 1.7) when loading resources
	// (e.g. SAPUI5 script) from other domains for IE browsers.
	// The CORS check in jQuery filters out such browsers who do not have the
	// property "withCredentials" which is the IE and Opera and prevents those
	// browsers to request data from other domains with jQuery.ajax. The CORS
	// requests are simply forbidden nevertheless if it works. In our case we
	// simply load our script resources from another domain when using the CDN
	// variant of SAPUI5. The following fix is also recommended by jQuery:
	if (jQuery.browser.msie) {
		jQuery.support.cors = true;
	}


	/**
	 * Find the script URL where the SAPUI5 is loaded from and return an object which
	 * contains the identified script-tag and resource root
	 */
	var _oBootstrap = (function() {
		var oTag, sUrl, sResourceRoot,
			reConfigurator = /\/download\/configurator[\/\?]/,
			reBootScripts = /\/(sap-ui-(core|custom|boot)(-.*)?)\.js([?#]|$)/,
			reResources = /^(.*\/)?resources\//;

		// check all script tags that have a src attribute
		jQuery("script[src]").each(function() {
			var src = this.getAttribute("src"),
				m;
			if ( m = src.match(reConfigurator) ) {
				// guess 1: script tag src contains "/download/configurator[/?]" (for dynamically created bootstrap files)
				oTag = this;
				sUrl = src;
				sResourceRoot = src.substring(0, m.index) + "/resources/";
				return false;
			} else if ( m = src.match(reBootScripts) ) {
				// guess 2: src contains one of the well known boot script names
				oTag = this;
				sUrl = src;
				sResourceRoot = src.substring(0, m.index) + "/";
				return false;
			} else if ( this.id == 'sap-ui-bootstrap' && (m=src.match(reResources)) ) {
				// guess 2: script tag has well known id and src contains "resources/"
				oTag = this;
				sUrl = src;
				sResourceRoot = m[0];
				return false;
			}
		});
		return {
			tag: oTag,
			url: sUrl,
			resourceRoot: sResourceRoot
		};
	})();

	/**
	 * Determine whether sap-bootstrap-debug is set, run debugger statement and allow
	 * to restart the core from a new URL
	 */
	(function() {
		if (/sap-bootstrap-debug=(true|x|X)/.test(location.search)) {
			window["sap-ui-bRestart"] = false;
			window["sap-ui-sRestartUrl"] = "http://localhost:8080/sapui5/resources/sap-ui-core.js";

			// function to replace the bootstrap tag with a newly created script tag to enable
			// restarting the core from a different server
			function restartCore() {
				var oScript = _oBootstrap.tag,
					sScript = "<script src=\"" + window["sap-ui-sRestartUrl"] + "\"";
				jQuery.each(oScript.attributes, function(i, oAttr) {
					if (oAttr.nodeName.indexOf("data-sap-ui-") == 0) {
						sScript += " " + oAttr.nodeName + "=\"" + oAttr.nodeValue + "\"";
					}
				});
				sScript += "></script>";
				oScript.parentNode.removeChild(oScript);
				
				// clean up cachebuster stuff
				jQuery("#sap-ui-bootstrap-cachebusted").remove();
				window["sap-ui-config"] && window["sap-ui-config"].resourceRoots && (window["sap-ui-config"].resourceRoots[""] = undefined);
				
				document.write(sScript);
				var oRestart = new Error("Aborting UI5 bootstrap and restarting from: " + window["sap-ui-sRestartUrl"]);
				oRestart.name = "Restart";
				
				// clean up
				delete window["sap-ui-bRestart"];
				delete window["sap-ui-sRestartUrl"];
				
				throw oRestart;
			};

			// debugger stops here. To restart UI5 from somewhere else (default: localhost), set:
			//    window["sap-ui-bRestart"] = true
			// If you want to restart from a different server than localhost, you can adapt the URL, e.g.: 
			//    window["sap-ui-sRestartUrl"] = "http://someserver:8080/sapui5/resources/sap-ui-core.js"
			debugger;
			if (window["sap-ui-bRestart"]) {
				restartCore();
			}
		}
	})();

	/**
	 * Determine whether to use debug sources depending on URL parameter and local storage
	 * and load debug library if necessary
	 */
	(function() {
		//Check URI param
		var bDebugSources = /sap-ui-debug=(true|x|X)/.test(location.search),
			bIsOptimized = window["sap-ui-optimized"];

		//Check local storage
		try { //Necessary for FF when Cookies are deactivated
			bDebugSources = bDebugSources || (window.localStorage.getItem("sap-ui-debug") == "X");
		} catch(e) {}

		window["sap-ui-debug"] = bDebugSources;

		// if bootstap URL already contains -dbg URL, just set sap-ui-loaddbg
		if (/-dbg\.js([?#]|$)/.test(_oBootstrap.url)) {
			window["sap-ui-loaddbg"] = true;
			window["sap-ui-debug"] = true;
		}

		// if current sources are optimized and debug sources are wanted, restart with debug URL
		if (bIsOptimized && bDebugSources) {
			var sDebugUrl = _oBootstrap.url.replace(/\/(?:sap-ui-cachebuster\/)?([^\/]+)\.js/, "/$1-dbg.js");
			window["sap-ui-optimized"] = false;
			window["sap-ui-loaddbg"] = true;
			document.write("<script type=\"text/javascript\" src=\"" + sDebugUrl + "\"></script>");
			var oRestart = new Error("Aborting UI5 bootstrap and restarting from: " + sDebugUrl);
			oRestart.name = "Restart";
			throw oRestart;
		}
	})();

	/*
	 * Merged, raw (un-interpreted) configuration data from the following sources
	 * (last one wins)
	 * <ol>
	 * <li>global configuration object <code>window["sap-ui-config"]</code>
	 * <li><code>data-sap-ui-config</code> attribute of the bootstrap script tag
	 * <li>other <code>data-sap-ui-<i>xyz</i></code> attributes of the bootstrap tag
	 * </ol>
	 */
	var oCfgData = _window["sap-ui-config"] = (function() {

		function normalize(o) {
			jQuery.each(o, function(i, v) {
				var il=i.toLowerCase();
				if ( !o.hasOwnProperty(il) ) {
					o[il] = v;
					delete o[i];
				}
			});
			return o;
		}

		var oCfg = normalize(_window["sap-ui-config"] || {}),
			oScriptTag = _oBootstrap.tag;

		oCfg.resourceroots = oCfg.resourceroots || {};
		oCfg.themeroots = oCfg.themeroots || {};
		oCfg.resourceroots[''] = oCfg.resourceroots[''] || _oBootstrap.resourceRoot;

		oCfg['xx-loadallmode'] = /(^|\/)(sap-?ui5|[^\/]+-all).js([?#]|$)/.test(_oBootstrap.url);

		// if a script tag has been identified, collect its configuration info
		if ( oScriptTag ) {
			// evaluate the config attribute first - if present
			var sConfig = oScriptTag.getAttribute("data-sap-ui-config");
			if ( sConfig ) {
				try {
				  jQuery.extend(oCfg, normalize((new Function("return {" + sConfig + "};"))())); // TODO jQuery.parseJSON would be better but imposes unwanted restrictions on valid syntax
				} catch(e) {
				  // no log yet, how to report this error?
				  _earlyErrors.push("failed to parse data-sap-ui-config attribute: " + (e.message || e));
				}
			}

			// merge with any existing "data-sap-ui-" attributes
			jQuery.each(oScriptTag.attributes, function(i, attr) {
				var m = attr.name.match(/^data-sap-ui-(.*)$/);
				if ( m ) {
					// the following (deactivated) conversion would implement multi-word names like "resource-roots"
					m = m[1].toLowerCase(); // .replace(/\-([a-z])/g, function(s,w) { return w.toUpperCase(); })
					if ( m === 'resourceroots' ) {
						// merge map entries instead of overwriting map
						jQuery.extend(oCfg[m], jQuery.parseJSON(attr.value));
					} else if ( m === 'theme-roots' ) {
						// merge map entries, but rename to camelCase
						jQuery.extend(oCfg.themeroots, jQuery.parseJSON(attr.value));
					} else if ( m !== 'config' ) {
						oCfg[m] = attr.value;
					}
				}
			});
		}

		return oCfg;
	}());

	// check whether noConflict must be used...
	if ( oCfgData.noconflict === true || oCfgData.noconflict === "true"  || oCfgData.noconflict === "x" ) {
		jQuery.noConflict();
	}

	/**
	 * Root Namespace for the jQuery plug-in provided by SAP AG.
	 *
	 * @version 1.10.0
	 * @namespace
	 * @public
	 * @static
	 */
	jQuery.sap = {};

	// -------------------------- DEBUG LOCAL STORAGE -------------------------------------

	jQuery.sap.debug = function(bEnable) {
		if(!window.localStorage){
			return null;
		}
		
		function reloadHint(bUsesDbgSrc){
			alert("Usage of debug sources is " + (bUsesDbgSrc ? "on" : "off") + " now.\nFor the change to take effect, you need to reload the page.");
		};

		if (bEnable === true) {
			window.localStorage.setItem("sap-ui-debug", "X");
			reloadHint(true);
		} else if (bEnable === false) {
			window.localStorage.removeItem("sap-ui-debug");
			reloadHint(false);
		}

		return window.localStorage.getItem("sap-ui-debug") == "X";
	};

	// -------------------------- Logging -------------------------------------

	(function() {

		var FATAL=0, ERROR=1, WARNING=2, INFO=3, DEBUG=4, TRACE=5;

		/**
		 * Unique prefix for this instance of the core in a multi-frame environment.
		 */
		var sWindowName = (window.top == window) ? "" : "[" + window.location.pathname.split('/').slice(-1)[0] + "] ";
		// Note: comparison must use type coercion (==, not ===), otherwise test fails in IE

		/**
		 * The array that holds the log entries that have been recorded so far
		 */
		var aLog = [];

		/**
		 * Maximum log level to be recorded (per component).
		 */
		var mMaxLevel = { '' : ERROR };

		/**
		 * Registered listener to be informed about new log entries.
		 */
		var oListener = null;

		function pad0(i,w) { return ("000" + String(i)).slice(-w); }

		function level(sComponent) {
			return (!sComponent || isNaN(mMaxLevel[sComponent])) ? mMaxLevel[''] : mMaxLevel[sComponent];
		}
		
		function listener(){
			if(!oListener){
				oListener = {
					listeners: [],
					onLogEntry: function(oLogEntry){
						for(var i=0; i<oListener.listeners.length; i++){
							if(oListener.listeners[i].onLogEntry){
								oListener.listeners[i].onLogEntry(oLogEntry);
							}
						}
					},
					attach: function(oLogger, oLstnr){
						if(oLstnr){
							oListener.listeners.push(oLstnr);
							if(oLstnr.onAttachToLog){
								oLstnr.onAttachToLog(oLogger);
							}
						}
					},
					detach: function(oLogger, oLstnr){
						for(var i=0; i<oListener.listeners.length; i++){
							if(oListener.listeners[i] === oLstnr){
								if(oLstnr.onDetachFromLog){
									oLstnr.onDetachFromLog(oLogger);
								}
								oListener.listeners.splice(i,1);
								return;
							}
						}
					}
				};
			}
			return oListener;
		}

		/**
		 * Creates a new log entry depending on its level and component.
		 *
		 * If the given level is higher than the max level for the given component
		 * (or higher than the global level, if no component is given),
		 * then no entry is created.
		 */
		function log(iLevel, sMessage, sDetails, sComponent) {
			if (iLevel <= level(sComponent) ) {
				var oNow = new Date(),
					oLogEntry = {
						time     : pad0(oNow.getHours(),2)+":"+pad0(oNow.getMinutes(),2)+":"+pad0(oNow.getSeconds(),2),
						date     : pad0(oNow.getFullYear(),4) + "-" + pad0(oNow.getMonth()+1,2) + "-" + pad0(oNow.getDate(),2),
						timestamp: oNow.getTime(),
						level    : iLevel,
						message  : sMessage || "",
						details  : sDetails || "",
						component: sComponent || ""
					};
				aLog.push( oLogEntry );
				if (oListener) {
					oListener.onLogEntry(oLogEntry);
				}

				/*
				 * Console Log, also tries to log to the window.console, if available.
				 *
				 * Unfortunately, the support for window.console is quite different between the UI5 browsers. The most important differences are:
				 * - in IE (checked until IE9), the console object does not exist in a window, until the developer tools are opened for that window.
				 *   After opening the dev tools, the console remains available even when the tools are closed again. Only using a new window (or tab)
				 *   restores the old state without console.
				 *   When the console is available, it provides most standard methods, but not debug and trace
				 * - in FF3.6 the console is not available, until FireBug is opened. It disappears again, when fire bug is closed.
				 *   But when the settings for a web site are stored (convenience), the console remains open
				 *   When the console is available, it supports all relevant methods
				 * - in FF9.0, the console is always available, but method assert is only available when firebug is open
				 * - in Webkit browsers, the console object is always available and has all required methods
				 *   - Exception: in the iOS Simulator, console.info() does not exist
				 */
				if (window.console) { // in IE and FF, console might not exist; in FF it might even disappear
					var logText = oLogEntry.date + " " + oLogEntry.time + " " + sWindowName + oLogEntry.message + " - " + oLogEntry.details + " " + oLogEntry.component;
					switch(iLevel) {
					case FATAL:
					case ERROR: console.error(logText); break;
					case WARNING: console.warn(logText); break;
					case INFO: console.info ? console.info(logText) : console.log(logText); break;    // info not available in iOS simulator
					case DEBUG: console.debug ? console.debug(logText) : console.log(logText); break; // debug not available in IE, fallback to log
					case TRACE: console.trace ? console.trace(logText) : console.log(logText); break; // trace not available in IE, fallback to log (no trace)
					}
				}
				return oLogEntry;
			}
		}

		/**
		 * @class A Logger class
		 * @param sDefaultComponent
		 * @name jQuery.sap.log.Logger
		 * @since 1.1.2
		 * @public
		 */
		function Logger(sDefaultComponent) {

			/**
			 * Creates a new fatal-level entry in the log with the given message, details and calling component.
			 *
			 * @param {string} sMessage Message text to display
			 * @param {string} [sDetails=""] Details about the message, might be omitted
			 * @param {string} [sComponent=""] Name of the component that produced the log entry
			 * @return {jQuery.sap.log.Logger} The log instance for method chaining
			 * @name jQuery.sap.log.Logger#fatal
			 * @function
			 * @public
			 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
			 */
			this.fatal = function (sMessage, sDetails, sComponent) {
				log(FATAL, sMessage, sDetails, sComponent || sDefaultComponent);
				return this;
			};

			/**
			 * Creates a new error-level entry in the log with the given message, details and calling component.
			 *
			 * @param {string} sMessage Message text to display
			 * @param {string} [sDetails=""] Details about the message, might be omitted
			 * @param {string} [sComponent=""] Name of the component that produced the log entry
			 * @return {jQuery.sap.log.Logger} The log instance
			 * @name jQuery.sap.log.Logger#error
			 * @function
			 * @public
			 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
			 */
			this.error = function error(sMessage, sDetails, sComponent) {
				log(ERROR, sMessage, sDetails, sComponent || sDefaultComponent);
				return this;
			};

			/**
			 * Creates a new warning-level entry in the log with the given message, details and calling component.
			 *
			 * @param {string} sMessage Message text to display
			 * @param {string} [sDetails=""] Details about the message, might be omitted
			 * @param {string} [sComponent=""] Name of the component that produced the log entry
			 * @return {jQuery.sap.log.Logger} The log instance
			 * @name jQuery.sap.log.Logger#warning
			 * @function
			 * @public
			 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
			 */
			this.warning = function warning(sMessage, sDetails, sComponent) {
				log(WARNING, sMessage, sDetails, sComponent || sDefaultComponent);
				return this;
			};
			/**
			 * Creates a new info-level entry in the log with the given message, details and calling component.
			 *
			 * @param {string} sMessage Message text to display
			 * @param {string} [sDetails=""] Details about the message, might be omitted
			 * @param {string} [sComponent=""] Name of the component that produced the log entry
			 * @return {jQuery.sap.log.Logger} The log instance
			 * @name jQuery.sap.log.Logger#info
			 * @function
			 * @public
			 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
			 */
			this.info = function info(sMessage, sDetails, sComponent) {
				log(INFO, sMessage, sDetails, sComponent || sDefaultComponent);
				return this;
			};
			/**
			 * Creates a new debug-level entry in the log with the given message, details and calling component.
			 *
			 * @param {string} sMessage Message text to display
			 * @param {string} [sDetails=""] Details about the message, might be omitted
			 * @param {string} [sComponent=""] Name of the component that produced the log entry
			 * @return {jQuery.sap.log.Logger} The log instance
			 * @name jQuery.sap.log.Logger#debug
			 * @function
			 * @public
			 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
			 */
			this.debug = function debug(sMessage, sDetails, sComponent) {
				log(DEBUG, sMessage, sDetails, sComponent || sDefaultComponent);
				return this;
			};
			/**
			 * Creates a new trace-level entry in the log with the given message, details and calling component.
			 *
			 * @param {string} sMessage Message text to display
			 * @param {string} [sDetails=""] Details about the message, might be omitted
			 * @param {string} [sComponent=""] Name of the component that produced the log entry
			 * @return {jQuery.sap.log.Logger} The log-instance
			 * @name jQuery.sap.log.Logger#trace
			 * @function
			 * @public
			 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
			 */
			this.trace = function trace(sMessage, sDetails, sComponent) {
				log(TRACE, sMessage, sDetails, sComponent || sDefaultComponent);
				return this;
			};

			/**
			 * Defines the maximum jQuery.sap.log.Level of log entries that will be recorded.
			 * Log entries with a higher (less important) log level will be omitted from the log.
			 * When a component name is given, the log level will be configured for that component
			 * only, otherwise the log level for the default component of this logger is set.
			 * For the global logger, the global default level is set.
			 *
			 * <b>Note</b>: Setting a global default log level has no impact on already defined
			 * component log levels. They always override the global default log level.
			 *
			 * @param {jQuery.sap.log.Level} iLogLevel
			 * @param {string} [sComponent] The log component to set the log level for.
			 * @return {jQuery.sap.log} The global logger to allow method chaining
			 * @name jQuery.sap.log.Logger#setLevel
			 * @function
			 * @public
			 */
			this.setLevel = function setLevel(iLogLevel, sComponent) {
				sComponent = sComponent || sDefaultComponent || '';
				mMaxLevel[sComponent] = iLogLevel;
				var mBackMapping = [];
				jQuery.each(jQuery.sap.log.LogLevel, function(idx, v){
					mBackMapping[v] = idx;
				});
				log(INFO, "Changing log level " + (sComponent ? "for '" + sComponent + "' " : "") + "to " + mBackMapping[iLogLevel], "", "jQuery.sap.log");
				return this;
			};

			/**
			 * Returns the log level currently effective for the given component.
			 * If no component is given or when no level has been configured for a
			 * given component, the log level for the default component of this logger is returned.
			 *
			 * @param {string} [sComponent] Name of the component to retrieve the log level for
			 * @return {int} The log level for the given component or the default log level
			 * @name jQuery.sap.log.Logger#getLevel
			 * @function
			 * @public
			 * @since 1.1.2
			 */
			this.getLevel = function getLevel(sComponent) {
				return level(sComponent || sDefaultComponent);
			};

		}

		/**
		 * A Logging API for JavaScript.
		 *
		 * Provides methods to manage a client-side log and to create entries in it. Each of the logging methods
		 * {@link jQuery.sap.log.#debug}, {@link jQuery.sap.log.#info}, {@link jQuery.sap.log.#warning},
		 * {@link jQuery.sap.log.#error} and {@link jQuery.sap.log.#fatal} creates and records a log entry,
		 * containing a timestamp, a log level, a message with details and a component info.
		 * The log level will be one of {@link jQuery.sap.log.Level} and equals the name of the concrete logging method.
		 *
		 * By using the {@link jQuery.sap.log#setLevel} method, consumers can determine the least important
		 * log level which should be recorded. Less important entries will be filtered out. (Note that higher numeric
		 * values represent less important levels). The initially set level depends on the mode that UI5 is running in.
		 * When the optimized sources are executed, the default level will be {@link jQuery.sap.log.Level.ERROR}.
		 * For normal (debug sources), the default level is {@link jQuery.sap.log.Level.DEBUG}.
		 *
		 * All logging methods allow to specify a <b>component</b>. These components are simple strings and
		 * don't have a special meaning to the UI5 framework. However they can be used to semantically group
		 * log entries that belong to the same software component (or feature). There are two APIs that help
		 * to manage logging for such a component. With <code>{@link jQuery.sap.log.getLogger}(sComponent)</code>,
		 * one can retrieve a logger that automatically adds the given <code>sComponent</code> as component
		 * parameter to each log entry, if no other component is specified. Typically, JavaScript code will
		 * retrieve such a logger once during startup and reuse it for the rest of its lifecycle.
		 * Second, the {@link jQuery.sap.log.Logger#setLevel}(iLevel, sComponent) method allows to set the log level
		 * for a specific component only. This allows a more fine granular control about the created logging entries.
		 * {@link jQuery.sap.log.Logger.getLevel} allows to retrieve the currently effective log level for a given
		 * component.
		 *
		 * {@link jQuery.sap.log#getLog} returns an array of the currently collected log entries.
		 *
		 * Furthermore, a listener can be registered to the log. It will be notified whenever a new entry
		 * is added to the log. The listener can be used for displaying log entries in a separate page area,
		 * or for sending it to some external target (server).
		 *
		 * @author SAP AG
		 * @since 0.9.0
		 * @namespace
		 * @public
		 * @borrows jQuery.sap.log.Logger#fatal as this.fatal
		 * @borrows jQuery.sap.log.Logger#error as this.error
		 * @borrows jQuery.sap.log.Logger#warning as this.warning
		 * @borrows jQuery.sap.log.Logger#info as this.info
		 * @borrows jQuery.sap.log.Logger#debug as this.debug
		 * @borrows jQuery.sap.log.Logger#trace as this.trace
		 * @borrows jQuery.sap.log.Logger#getLevel as this.getLevel
		 * @borrows jQuery.sap.log.Logger#setLevel as this.setLevel
		 */
		jQuery.sap.log = jQuery.extend(new Logger(), /** @lends jQuery.sap.log */ {

			/**
			 * Enumeration of the configurable log levels that a Logger should persist to the log.
			 *
			 * Only if the current LogLevel is higher than the level {@link jQuery.sap.log.Level} of the currently added log entry,
			 * then this very entry is permanently added to the log. Otherwise it is ignored.
			 * @see jQuery.sap.log.Logger#setLevel
			 * @namespace
			 * @public
			 */
			Level : {

				/**
				 * Do not log anything
				 * @public
				 */
				NONE : FATAL-1,

				/**
				 * Fatal level. Use this for logging unrecoverable situations
				 * @public
				 */
				FATAL : FATAL,

				/**
				 * Error level. Use this for logging of erroneous but still recoverable situations
				 * @public
				 */
				ERROR : ERROR,

				/**
				 * Warning level. Use this for logging unwanted but foreseen situations
				 * @public
				 */
				WARNING : WARNING,

				/**
				 * Info level. Use this for logging information of purely informative nature
				 * @public
				 */
				INFO : INFO,

				/**
				 * Debug level. Use this for logging information necessary for debugging
				 * @public
				 */
				DEBUG : DEBUG,

				/**
				 * Trace level. Use this for tracing the program flow.
				 * @public
				 */
				TRACE : TRACE, /* TODO Think about changing to 10 and thus to pull out of logging... -> Make tracing explicit */

				/**
				 * Trace level to log everything.
				 */
				ALL : (TRACE + 1) /* TODO if TRACE is changed to make sure this is 6 again. There would then be some special TRACE handling. */
			},

			/**
			 * Returns a {@link jQuery.sap.log.Logger} for the given component.
			 *
			 * The method might or might not return the same logger object across multiple calls.
			 * While loggers are assumed to be light weight objects, consumers should try to
			 * avoid redundant calls and instead keep references to already retrieved loggers.
			 *
			 * @param {string} sComponent Component to create the logger for
			 * @return {jQuery.sap.log.Logger} A logger for the component.
			 * @public
			 * @static
			 * @since 1.1.2
			 */
			getLogger : function(sComponent) {
				return new Logger(sComponent);
			},

			/**
			 * Returns the logged entries recorded so far as an array.
			 *
			 * Log entries are plain JavaScript objects with the following properties
			 * <ul>
			 * <li>timestamp {number} point in time when the entry was created
			 * <li>level {int} LogLevel level of the entry
			 * <li>message {string} message text of the entry
			 * </ul>
			 *
			 * @return {object[]} an array containing the recorded log entries
			 * @public
			 * @static
			 * @since 1.1.2
			 */
			getLogEntries : function () {
				return aLog.slice();
			},
			
			/**
			 * Allows to add a new LogListener that will be notified for new log entries.
			 * The given object must provide method <code>onLogEntry</code> and can also be informed
			 * about <code>onDetachFromLog</code> and <code>onAttachToLog</code>
			 * @param {object} oListener The new listener object that should be informed
			 * @return {jQuery.sap.log} The global logger
			 * @public
			 * @static
			 */
			addLogListener : function(oListener) {
				listener().attach(this, oListener);
				return this;
			},
			
			/**
			 * Allows to remove a registered LogListener.
			 * @param {object} oListener The new listener object that should be removed
			 * @return {jQuery.sap.log} The global logger
			 * @public
			 * @static
			 */
			removeLogListener : function(oListener) {
				listener().detach(this, oListener);
				return this;
			}
			
		});

		/**
		 * Deprecated duplicate of {@link jQuery.sap.log.Level}.
		 * @deprecated Since 1.1.2. To streamline the Logging API a bit, the separation between Level and LogLevel has been given up.
		 * Use the (enriched) enumeration {@link jQuery.sap.log.Level} instead.
		 * @namespace Enumeration of levels that can be used in a call to {@link jQuery.sap.log.Logger#setLevel}(iLevel, sComponent).
		 * @public
		 */
		jQuery.sap.log.LogLevel = jQuery.sap.log.Level;

		/**
		 * Retrieves the currently recorded log entries.
		 * @deprecated Since 1.1.2. To avoid confusion with getLogger, this method has been renamed to {@link jQuery.sap.log.getLogEntries}.
		 * @function
		 * @public
		 * @static
		 */
		jQuery.sap.log.getLog = jQuery.sap.log.getLogEntries;

		/**
		 * A simple assertion mechanism that logs a message when a given condition is not met.
		 *
		 * <b>Note:</b> Calls to this method might be removed when the JavaScript code
		 *              is optimized during build. Therefore, callers should not rely on any side effects
		 *              of this method.
		 *
		 * @public
		 * @static
		 * @SecSink {1|SECRET} Could expose secret data in logs
		 */
		jQuery.sap.assert = function(bResult, sMessage) {
			if( !bResult ) {
				if ( window.console && console.assert ) {
					console.assert(bResult, sWindowName + sMessage);
				} else {
					// console is not always available (IE, FF) and IE doesn't support console.assert
					jQuery.sap.log.debug("[Assertions] " + sMessage);
				}
			}
		};

		// against all our rules: use side effect of assert to differentiate between optimized and productive code
		jQuery.sap.assert( !!(mMaxLevel[''] = DEBUG), "will be removed in optimized version");
		// evaluate configuration
		oCfgData.loglevel = oCfgData.loglevel || (function() { var m=/(?:\?|&)sap-ui-log(?:L|-l)evel=([^&]*)/.exec(window.location.search); return m && m[1];}());
		if ( oCfgData.loglevel ) {
			jQuery.sap.log.setLevel(jQuery.sap.log.Level[oCfgData.loglevel.toUpperCase()] || parseInt(oCfgData.loglevel,10));
		}

		jQuery.sap.log.info("SAP Logger started.");
		// log early errors
		jQuery.each(_earlyErrors, function(i,e) { jQuery.sap.log.error(e); }); _earlyErrors = null;


	}());

	// ---------------------------------------------------------------------------------------------------

	/**
	 * Returns a new constructor function that creates objects with
	 * the given prototype.
	 *
	 * @return {function} the newly created constructor function
	 * @public
	 * @static
	 */
	jQuery.sap.factory = function factory(oPrototype) {
		function Factory() {}
		Factory.prototype = oPrototype;
		return Factory;
	};

	/**
	 * Returns a new object which has the given oPrototype as its prototype.
	 *
	 * If several objects with the same prototype are to be created,
	 * {@link jQuery.sap.factory} should be used instead.
	 *
	 * @public
	 * @static
	 */
	jQuery.sap.newObject = function newObject(oPrototype) {
		return new (jQuery.sap.factory(oPrototype))();
	};

	/**
	 * Returns a new function that returns the given <code>oValue</code> (using its closure).
	 *
	 * Avoids the need for a dedicated member for the value.
	 *
	 * As closures don't come for free, this function should only be used when polluting
	 * the enclosing object is an absolute "must-not" (as it is the case in public base classes).
	 *
	 * @public
	 * @static
	 */
	jQuery.sap.getter = function getter(oValue) {
		return function() {
			return oValue;
		};
	};

	/**
	 * Returns a JavaScript object which is identified by a sequence of names.
	 *
	 * A call to <code>getObject("a.b.C")</code> has essentially the same effect
	 * as accessing <code>window.a.b.C</code> but with the difference that missing
	 * intermediate objects (a or b in the example above) don't lead to an exception.
	 *
	 * When the addressed object exists, it is simply returned. If it doesn't exists,
	 * the behavior depends on the value of the second, optional parameter
	 * <code>iNoCreates</code> (assuming 'n' to be the number of names in the name sequence):
	 * <ul>
	 * <li>NaN: if iNoCreates is not a number and the addressed object doesn't exist,
	 *          then <code>getObject()</code> returns <code>undefined</code>.
	 * <li>0 &lt; iNoCreates &lt; n: any non-existing intermediate object is created, except
	 *          the <i>last</i> <code>iNoCreates</code> ones.
	 * </ul>
	 *
	 * Example:
	 * <pre>
	 *   getObject()            -- returns the context object (either param or window)
	 *   getObject("a.b.C")     -- will only try to get a.b.C and return undefined if not found.
	 *   getObject("a.b.C", 0)  -- will create a, b, and C in that order if they don't exists
	 *   getObject("a.b.c", 1)  -- will create a and b, but not C.
	 * </pre>
	 *
	 * When a <code>oContext</code> is given, the search starts in that object.
	 * Otherwise it starts in the <code>window</code> object that this plugin
	 * has been created in.
	 *
	 * Note: Although this method internally uses <code>object["key"]</code> to address object
	 *       properties, it does not support all possible characters in a name.
	 *       Especially the dot ('.') is not supported in the individual name segments,
	 *       as it is always interpreted as a name separator.
	 *
	 * @param {string} sName  a dot separated sequence of names that identify the required object
	 * @param {int}    [iNoCreates=NaN] number of objects (from the right) that should not be created
	 * @param {object} [oContext=window] the context to execute the search in
	 *
	 * @public
	 * @static
	 */
	jQuery.sap.getObject = function getObject(sName, iNoCreates, oContext) {
		var oObject = oContext || _window,
			aNames = (sName || "").split("."),
			l = aNames.length,
			iEndCreate = isNaN(iNoCreates) ? 0 : l - iNoCreates,
			i;

		for (i=0; oObject && i<l; i++) {
			if (!oObject[aNames[i]] && i<iEndCreate ) {
				oObject[aNames[i]] = {};
			}
			oObject = oObject[aNames[i]];
		}
		return oObject;

	};

	/**
	 * Sets an object property to a given value, where the property is
	 * identified by a sequence of names (path).
	 *
	 * When a <code>oContext</code> is given, the path starts in that object.
	 * Otherwise it starts in the <code>window</code> object that this plugin
	 * has been created for.
	 *
	 * Note: Although this method internally uses <code>object["key"]</code> to address object
	 *       properties, it does not support all possible characters in a name.
	 *       Especially the dot ('.') is not supported in the individual name segments,
	 *       as it is always interpreted as a name separator.
	 *
	 * @param {string} sName  a dot separated sequence of names that identify the property
	 * @param {any}    vValue value to be set, can have any type
	 * @param {object} [oContext=window] the context to execute the search in
	 * @public
	 * @static
	 */
	jQuery.sap.setObject = function (sName, vValue, oContext) {
		var oObject = oContext || _window,
			aNames = (sName || "").split("."),
			l = aNames.length, i;

		if ( l>0 ) {
			for (i=0; oObject && i<l-1; i++) {
				if (!oObject[aNames[i]] ) {
					oObject[aNames[i]] = {};
				}
				oObject = oObject[aNames[i]];
			}
			oObject[aNames[l-1]] = vValue;
		}
	};

	// ---------------------- sync point -------------------------------------------------------------
	
	/*
	 * Internal class that can help to synchronize a set of asynchronous tasks.
	 * Each task must be registered in the sync point by calling startTask with 
	 * an (purely informative) title. The returned value must be used in a later 
	 * call to finishTask. 
	 * When finishTask has been called for all tasks that have been started, 
	 * the fnCallback will be fired. 
	 * When a timeout is given and reached, the callback is called at that 
	 * time, no matter whether all tasks have been finished or not. 
	 */
	function SyncPoint(sName, fnCallback, iTimeout) {
		var aTasks = [],
			iOpenTasks = 0,
			iFailures = 0,
			sTimer;

		this.startTask = function(sTitle) {
			var iId = aTasks.length;
			aTasks[iId] = { name : sTitle, finished : false };
			iOpenTasks++;
			return iId;
		};
		
		this.finishTask = function(iId, bSuccess) {
			if ( !aTasks[iId] || aTasks[iId].finished ) {
				throw new Error("trying to finish non existing or already finished task");
			}
			aTasks[iId].finished = true;
			iOpenTasks--;
			if ( bSuccess === false ) {
				iFailures++;
			}
			if (iOpenTasks === 0 ) {
				jQuery.sap.log.info("Sync point '" + sName + "' finished (tasks:" + aTasks.length + ", open:" + iOpenTasks + ", failures:" + iFailures + ")");
				if ( sTimer ) {
					clearTimeout(sTimer);
					sTimer = null;
				};
				finish();
			}
		};

		function finish() {
			fnCallback && fnCallback(iOpenTasks, iFailures);
			fnCallback = null;
		}
		
		if ( !isNaN(iTimeout) ) {
			sTimer = setTimeout(function() {
				jQuery.sap.log.info("Sync point '" + sName + "' timed out (tasks:" + aTasks.length + ", open:" + iOpenTasks + ", failures:" + iFailures + ")");
				finish();
			}, iTimeout);
		};
		
		jQuery.sap.log.info("Sync point '" + sName + "' created" + (iTimeout ? "(timeout after " + iTimeout + " ms)" : ""));
		
	}
	
	/**
	 * Internal function to create a sync point.
	 * @private
	 */
	jQuery.sap.syncPoint = function(sName, fnCallback, iTimeout) {
		return new SyncPoint(sName, fnCallback, iTimeout);
	}
	
	// ---------------------- require/declare --------------------------------------------------------

	/**
	 * A map of URL prefixes keyed by the corresponding module name prefix.
	 * @see jQuery.sap.registerModulePath
	 *
	 * Note that the empty prefix ('') will always match and thus serves as a fallback.
	 */
	var mUrlPrefixes = { '' : 'resources/' };

	// take resource roots from configuration
	if ( oCfgData.resourceroots ) {
		jQuery.extend(true, mUrlPrefixes, oCfgData.resourceroots);
	}

	// dump the URL prefixes
	jQuery.sap.log.info("URL prefixes set to:");
	for(var n in mUrlPrefixes) {
		jQuery.sap.log.info("  " + (n ? "'" + n + "'" : "(default)") + " : " + mUrlPrefixes[n]);
	}

	// find prefix for module name
	var _getModulePath = function _getModulePath(sModuleName, sSuffix) {

		// split name into segments
		var aSegments = sModuleName.split(/\./);

		// search for a defined name prefix, starting with the full name and successively removing one segment
		for(var l=aSegments.length; l>=0; l--) {
			var sNamePrefix = aSegments.slice(0, l).join('.');
			if ( mUrlPrefixes[sNamePrefix] ) {
				var sResult = mUrlPrefixes[sNamePrefix];
				if ( l < aSegments.length ) {
					sResult += aSegments.slice(l).join("/");
				}
				if ( sResult.slice(-1) === '/' ) {
					sResult = sResult.slice(0, -1);
				}
				return sResult + (sSuffix || '');
			}
		}

		jQuery.sap.assert(false, "should never happen");
	};

	/* ==== Begin of HACK ==== */
	// this HACK wraps the _getModulePath function to implement some special handling
	// for the jquery.sap. modules, which contain a dot in their name
	var _HACK_orig_getModulePath = _getModulePath;
	var _getModulePath = function HACK_modified_getModulePath(sModuleName, sSuffix) {
		if ( sModuleName.indexOf("jquery.sap.") === 0 ) {
			sModuleName = sModuleName.replace(/\./gi, "%2E");
			var sPath = _HACK_orig_getModulePath(sModuleName, sSuffix);
			return sPath.replace(/%2E/gi, ".");
		}
		return _HACK_orig_getModulePath(sModuleName, sSuffix);
	};
	/* ==== End of HACK ==== */

	/**
	 * Constructs an URL to load the module with the given name and file type (suffix).
	 *
	 * Searches the longest prefix of the given module name for which a registration
	 * exists (see {@link jQuery.sap.registerModulePath}) and replaces that prefix
	 * by the registered URL prefix.
	 *
	 * The remainder of the module name is appended to the URL, replacing any dot with a slash.
	 *
	 * Finally, the given suffix (typically a file name extension) is added (unconverted).
	 *
	 * The returned name (without the suffix) doesn't end with a slash.
	 *
	 * @public
	 * @static
	 */
	jQuery.sap.getModulePath = function(sModuleName, sSuffix) {
		return _getModulePath(sModuleName, sSuffix);
	};

	/**
	 * Registers an URL prefix for a module name prefix.
	 *
	 * Before a module is loaded, the longest registered prefix of its module name
	 * is searched for and the associated URL prefix is used as a prefix for the request URL.
	 * The remainder of the module name is attached to the request URL by replacing
	 * dots ('.') with slashes ('/').
	 *
	 * The registration and search operates on full name segments only. So when a prefix
	 *
	 *    'sap.com'  ->  'http://www.sap.com/ui5/resources/'
	 *
	 * is registered, then it will match the name
	 *
	 *    'sap.com.Button'
	 *
	 * but not
	 *
	 *    'sap.commons.Button'
	 *
	 * Note that the empty prefix ('') will always match and thus serves as a fallback for
	 * any search.
	 *
	 * @public
	 * @static
	 * @SecSink {1|PATH} Parameter is used for future HTTP requests
	 */
	jQuery.sap.registerModulePath = function registerModulePath(sModuleName, sUrlPrefix) {
		// must not be empty
		sUrlPrefix = sUrlPrefix || '.';

		// ensure that the prefix ends with a '/'
		if ( sUrlPrefix.slice(-1) != '/' ) {
			sUrlPrefix += '/';
		}

		mUrlPrefixes[sModuleName] = sUrlPrefix;

		jQuery.sap.log.info("sap.registerModulePath ('" + sModuleName + "', '" + sUrlPrefix + "')");

	};


	/**
	 * Set of modules that have been loaded (required) so far
	 * @private
	 */
	var mModules = {};

	// make the module loading more verbose
	var _verbose = false; // not yet configurable as Url params are not available here... oCfgData.debug === true || oCfgData.debug === "true" || oCfgData.debug === "x";

	/**
	 * Stack of modules that are currently executed.
	 * Allows to identify the containing module in case of multi module files (e.g. sap-ui-core)
	 */
	var _execStack = [ ];
	var sLogPrefix = "";

	/**
	 * Check whether a given module has been loaded / declared already.
	 * 
	 * Returns true as soon as a module has been required the first time, even when 
	 * loading/executing it has not finished yet. So the main assertion of a  
	 * return value of <code>true</code> is that the necessary actions have been taken
	 * to make the module available in the near future. It does not mean, that 
	 * the content of the module is already available!
	 * 
	 * This fuzzy behavior is necessary to avoid multiple requests for the same module. 
	 * As a consequence of the assertion above, a <i>preloaded</i> module does not
	 * count as <i>declared</i>. For preloaded modules, an explicit call to 
	 * <code>jQuery.sap.require</code> is necessary to make them available. 
	 * 
	 * @param {string} sModuleName name of the module to be checked
	 * @return {boolean} whether the module has been declared already
	 * @public
	 * @static
	 */
	jQuery.sap.isDeclared = function isDeclared(sModuleName) {
		return mModules[sModuleName] && mModules[sModuleName].state !== "preloaded";
	};
	
	/**
	 * Returns the names of all declared modules.
	 * @return {string[]} the names of all declared modules
	 * @see jQuery.sap.isDeclared
	 * @public
	 * @static
	 */
	jQuery.sap.getAllDeclaredModules = function() {
		var aModules = [];
		jQuery.each(mModules, function(i,v) {
			// filter out preloaded modules
			if ( jQuery.sap.isDeclared(i) ) {
				aModules.push(i);
			}
		});
		return aModules;
	};

	/**
	 * Declares a module as existing.
	 *
	 * By default, this function assumes that the module will create a JavaScript object
	 * with the same name as the module. As a convenience it ensures that the parent
	 * namespace for that object exists (by calling jQuery.sap.getObject).
	 * If such an object creation is not desired, <code>bCreateNamespace</code> must be set to false.
	 *
	 * @param {string || object} sModuleName name of the module to be declared
	 *                           or in case of an object {modName: "...", type: "..."}
	 *                           where modName is the name of the module and the type
	 *                           could be a specific dot separated extension e.g.
	 *                           <code>{modName: "sap.ui.core.Dev", type: "view"}</code>
	 *                           loads <code>sap/ui/core/Dev.view.js</code> and
	 *                           registers as <code>sap.ui.core.Dev.view</code>
	 * @param {string} [bCreateNamespace=true] whether to create the parent namespace
	 *
	 * @public
	 * @static
	 */
	jQuery.sap.declare = function declare(sModuleName, bCreateNamespace) {
		if ( _verbose ) {
			jQuery.sap.log.debug(sLogPrefix + "sap.declare '" + sModuleName + "'");
		}

		// check for an object as parameter for sModuleName
		// in case of this the object contains the module name and the type
		// which could be {modName: "sap.ui.core.Dev", type: "view"}
		var sType = "";
		if (typeof(sModuleName) === "object") {
			sType = sModuleName.type ? "." + sModuleName.type : "";
			sModuleName = sModuleName.modName + sType;
		}

		if ( !jQuery.sap.isDeclared(sModuleName) ) {
			if ( !mModules[sModuleName] ) {
				mModules[sModuleName] = { };
			}
			mModules[sModuleName].state = 'ready';
		}

		// identify the bootstrap module
		// Note: this is only a guess and fails e.g. when multiple modules are loaded via a script tag
		// to make it safe, we could convert 'declare' calls to e.g. 'subdeclare' calls at build time.
		if ( _execStack.length === 0 && sModuleName !== "jquery.sap.global" ) {
			_execStack.push(sModuleName);
			mModules[sModuleName].url = mModules[sModuleName].url || _sBootstrapUrl;
		}

		// remember parent module if any
		if ( !mModules[sModuleName].parent ) {
		  mModules[sModuleName].parent = _execStack[_execStack.length-1];
		}

		// ensure parent namespace even if module was declared already
		// (as declare might have been called by require)
		if (bCreateNamespace !== false) {
			// ensure parent namespace
			jQuery.sap.getObject(sModuleName, 1);
		}

		return this;
	};

	function requireModule(sModuleName) {

		// handle multiple imports
		if ( arguments.length > 1 ) {
			for(var i=0; i<arguments.length; i++) {
				jQuery.sap.require(arguments[i]);
			}
			return this;
		}

		// check for an object as parameter for sModuleName
		// in case of this the object contains the module name and the type
		// which could be {modName: "sap.ui.core.Dev", type: "view"}
		var sType = "";
		if (typeof(sModuleName) === "object") {
			sType = sModuleName.type ? "." + sModuleName.type : "";
			sModuleName = sModuleName.modName + sType;
		}

		if ( _verbose ) {
			jQuery.sap.log.debug(sLogPrefix + "require '" + sModuleName + "' of type '" + sType + "'");
		}

		// check if module has been loaded already
		if ( mModules[sModuleName] ) {
			if ( mModules[sModuleName].state === 'preloaded' ) {
				mModules[sModuleName].state = 'loaded';
				execModule(sModuleName);
			}

			if ( mModules[sModuleName].state === 'ready' ) {
				if ( _verbose ) {
					jQuery.sap.log.debug("module '" + sModuleName + "' has already been loaded (skipped).");
				}
				return this;
			} else if ( mModules[sModuleName].state === 'failed' ) {
				throw new Error("found in negative cache: '" + sModuleName+  "' from " + mModules[sModuleName].url + ": " + mModules[sModuleName].error);
			} else {
				// currently loading
				return this;
			}
		}

		// set marker for loading modules (to break cycles)
		var mod = mModules[sModuleName] = { state: 'loading' };

		// in case of having a type specified ignore the type for the module path creation and add it as file extension
		var sBaseName = sType ? sModuleName.substring(0, sModuleName.length - sType.length) : sModuleName;

		// if debug is enabled, try to load debug module first
		if (window["sap-ui-loaddbg"]) {
			// create module URL for the debug version
			mod.url = jQuery.sap.getModulePath(sBaseName + "-dbg", sType + '.js');
			if ( _verbose ) {
				jQuery.sap.log.debug("loading debug version of '" + sModuleName + "' from '" + mod.url + "'");
			}
			jQuery.ajax({
				url : mod.url,
				dataType : 'text',
				async : false,
				success : function(response, textStatus, xhr) {
					mod.state = 'loaded';
					mod.data = response;
				},
				error : function(xhr, textStatus, error) {
					mod.state = 'failed';
					mod.error = xhr ? xhr.status + " - " + xhr.statusText : textStatus;
				}
			});
		}

		// try to load the module, if debug was not enabled/not successful
		if ( mod.state !== 'loaded' ) {
			// create module URL
			mod.url = jQuery.sap.getModulePath(sBaseName, sType + '.js');
			if ( _verbose ) {
				jQuery.sap.log.debug("loading '" + sModuleName + "' from '" + mod.url + "'");
			}
			jQuery.ajax({
				url : mod.url,
				dataType : 'text',
				async : false,
				success : function(response, textStatus, xhr) {
					mod.state = 'loaded';
					mod.data = response;
				},
				error : function(xhr, textStatus, error) {
					mod.state = 'failed';
					mod.error = xhr ? xhr.status + " - " + xhr.statusText : textStatus;
				}
			});
		}

		// execute module __after__ loading it, this reduces the required stack space!
		if ( mod.state === 'loaded' ) {
			execModule(sModuleName);
		}

		if ( mod.state !== 'ready' ) {
			throw new Error("failed to load '" + sModuleName+  "' from " + mod.url + ": " + mod.error);
		}

		return this;

	}

	// max size a script should have when executing it with execScript (IE). Otherwise fallback to eval
	var MAX_EXEC_SCRIPT_LENGTH = 512*1024;
	
	function execModule(sModuleName) {

		var mod = mModules[sModuleName];

		if ( mod && mod.state === 'loaded' && typeof mod.data !== "undefined" ) {
			try {

				if ( _verbose ) {
					var oldPrefix = sLogPrefix;
					sLogPrefix = sLogPrefix + "  ";
					jQuery.sap.log.debug(sLogPrefix + "executing '" + sModuleName + "'");
				}

				// execute the script in the window context
				mod.state = 'executing';
				_execStack.push(sModuleName);
				if (_window.execScript && (!mod.data || mod.data.length < MAX_EXEC_SCRIPT_LENGTH) ) { 
					try {
						mod.data && _window.execScript(mod.data); // execScript fails if data is empty
					} catch (e) {
						_execStack.pop();
						// eval again with different approach - should fail with a more informative exception
						jQuery.sap.globalEval(mod.data);
						throw e; // rethrow err in case globalEval succeeded unexpectedly
					}
				} else {
					_window.eval(mod.data + "\r\n//@ sourceURL=" + mod.url); // Firebug and Safari debugging help, seems to cost ZERO performance
				}
				_execStack.pop();
				mod.state = 'ready';
				mod.data = undefined;
				if ( _verbose ) {
					jQuery.sap.log.debug(sLogPrefix + "finished executing '" + sModuleName + "'");
					sLogPrefix = oldPrefix;
				}

			} catch (err) {
				mod.state = 'failed';
				mod.error = ((err.toString && err.toString()) || err.message) + (err.line ? "(line " + err.line + ")" : "" );
				mod.data = undefined;
			}
		}
	}

	/**
	 * Ensures that the given module is loaded and executed before execution of the
	 * current script continues.
	 *
	 * By issuing a call to this method, the caller declares a dependency to the listed modules.
	 *
	 * Any required and not yet loaded script will be loaded and execute synchronously.
	 * Already loaded modules will be skipped.
	 *
	 * @param {string... || object} sModuleName one or more names of modules to be loaded
	 *                              or in case of an object {modName: "...", type: "..."}
	 *                              where modName is the name of the module and the type
	 *                              could be a specific dot separated extension e.g.
	 *                              <code>{modName: "sap.ui.core.Dev", type: "view"}</code>
	 *                              loads <code>sap/ui/core/Dev.view.js</code> and
	 *                              registers as <code>sap.ui.core.Dev.view</code>
	 *
	 * @public
	 * @static
	 * @function
	 * @SecSink {0|PATH} Parameter is used for future HTTP requests
	 */
	jQuery.sap.require = requireModule;

	var mPreloadModules = {};
	
	jQuery.sap.preloadModules = function(sPreloadModule, bAsync, oSyncPoint) {
		
		jQuery.sap.assert(!bAsync ||oSyncPoint, "if mode is async, a syncpoint object must be given");
		
		if ( mPreloadModules[sPreloadModule] )
			return;

		mPreloadModules[sPreloadModule] = true;

		var sURL = jQuery.sap.getModulePath(sPreloadModule, ".json");
		
		jQuery.sap.log.debug("preload file " + sPreloadModule);
		var iTask = oSyncPoint && oSyncPoint.startTask("load " + sPreloadModule);
		jQuery.ajax({
			dataType : "json",
			async : bAsync,
			url : sURL,
			success : function(data) {
				if ( data ) {
					data.url = sURL;
				}
				jQuery.sap.registerPreloadedModules(data, bAsync, oSyncPoint);
				oSyncPoint && oSyncPoint.finishTask(iTask);
			},
			error : function(data) {
				oSyncPoint && oSyncPoint.finishTask(iTask, false);
			}
		});

	};
	
	jQuery.sap.registerPreloadedModules = function(oData, bAsync, oSyncPoint) {
		if ( _verbose ) {
			jQuery.sap.log.debug(sLogPrefix + "adding preloaded modules from '" + oData.url + "'");
		}
		jQuery.each(oData.modules, function(sName,sContent) {
			if ( !mModules[sName] ) {
				mModules[sName] = { state : 'preloaded', url : oData.url + "/" + sName, data : sContent };
			}
		});
		if ( oData.dependencies ) {
			jQuery.each(oData.dependencies, function(idx,sModuleName) {
				jQuery.sap.preloadModules(sModuleName, bAsync, oSyncPoint);
			});
		}
	};

	// declare our own module
	jQuery.sap.declare("jquery.sap.global", false);

	// --------------------- script and stylesheet handling --------------------------------------------------

	// appends a link object to the head
	function appendHead(oElement) {
		var head = window.document.getElementsByTagName("head")[0];
		if (head) {
			head.appendChild(oElement);
		}
	}

	/**
	 * Includes the script (via &lt;script&gt;-tag) into the head for the
	 * specified <code>sUrl</code> and optional <code>sId</code>.
	 *
	 * @param {string}
	 *            sUrl the URL of the script to load
	 * @param {string}
	 *            [sId] id that should be used for the script include tag
	 *
	 * @public
	 * @static
	 * @SecSink {0|PATH} Parameter is used for future HTTP requests
	 */
	jQuery.sap.includeScript = function includeScript(sUrl, sId){
		var oScript = window.document.createElement("script");
		oScript.src = sUrl;
		oScript.type = "text/javascript";
		if (sId) {
			oScript.id = sId;
		}
		// jQuery("head").append(oScript) doesn't work because they filter for the script
		// and execute them directly instead adding the SCRIPT tag to the head
		appendHead(oScript);
	};

	/**
	 * Includes the specified stylesheet via a &lt;link&gt;-tag in the head of the current document.
	 * If there is call to <code>includeStylesheet</code> providing the sId of an already included stylesheet,
	 * the existing element will be replaced.
	 *
	 * @param {string} sUrl the URL of the script to load
	 * @param {string} [sId] id that should be used for the script include tag
	 *
	 * @public
	 * @static
	 * @SecSink {0|PATH} Parameter is used for future HTTP requests
	 */
	jQuery.sap.includeStyleSheet = function includeStyleSheet(sUrl, sId){

		// create the new link element
		var oLink = document.createElement("link");
		oLink.type = "text/css";
		oLink.rel = "stylesheet";
		oLink.href = sUrl;
		if (sId) {
			oLink.id = sId;
		}

		// check for existence of the link
		var oOld, bReplace;
		if ((sId && (oOld = jQuery.sap.domById(sId)) && (bReplace = oOld.tagName === "LINK" && oOld.rel ==="stylesheet")) || window.document.body) {
			if (bReplace) {
				jQuery(oOld).replaceWith(oLink);
			} else {
				appendHead(oLink);
			}
		} else {
			appendHead(oLink);
		}

	};

	// TODO should be in core, but then the 'callback' could not be implemented
	if ( !(oCfgData.productive === true || oCfgData.productive === "true"  || oCfgData.productive === "x") ) {
		jQuery(function() {
			jQuery(document.body).keydown(function(e) {
				if ( e.keyCode == 80 && e.shiftKey && e.altKey && e.ctrlKey ) {
					try {
						jQuery.sap.require("sap.ui.debug.TechnicalInfo");
					} catch (e) {
						// alert("Sorry, failed to activate 'P'-mode!");
						return;
					}
					sap.ui.debug.TechnicalInfo.open(function() {
						return { modules : mModules, prefixes : mUrlPrefixes, config: oCfgData };
					});
				}
			});
		});
		
		jQuery(function() {
			jQuery(document.body).keydown(function(e) {
				if ( e.keyCode == 83 /*S*/ && e.shiftKey && e.altKey && e.ctrlKey ) { //TODO: Is this ok?
					try {
						jQuery.sap.require("sap.ui.core.support.Support");
						var oSupport = sap.ui.core.support.Support.getStub();
						if(oSupport.getType() != sap.ui.core.support.Support.StubType.APPLICATION){
							return;
						}
						oSupport.openSupportTool();
					} catch(e) {
					}
				}
			});
		});
	}

	// *********** feature detection, enriching jQuery.support *************
	// this might go into its own file once there is more stuff added

	if (!jQuery.support) {
		jQuery.support = {};
	}

	/**
	 * jQuery.support.flexBoxLayout is true if the current browser supports the OLD CSS3 Flexible Box Layout directly or via vendor prefixes
	 */
	if (jQuery.support.flexBoxLayout === undefined) {
		jQuery.support.flexBoxLayout =
			((document.documentElement.style.MozBoxFlex !== undefined) ||
				(document.documentElement.style.webkitBoxFlex !== undefined) ||
				(document.documentElement.style.boxFlex !== undefined));
	}

	/**
	 * jQuery.support.newFlexBoxLayout is true if the current browser supports the NEW CSS3 Flexible Box Layout directly or via vendor prefixes
	 */
	if (jQuery.support.newFlexBoxLayout === undefined) {
		jQuery.support.newFlexBoxLayout =
			((document.documentElement.style.MozFlex !== undefined) ||
				(document.documentElement.style.webkitFlex !== undefined) ||
				(document.documentElement.style.flex !== undefined));
	}

	// *********** fixes for (pending) jQuery bugs **********
	if (!jQuery.support.opacity) {
		(function() {
			// jQuery cssHook for setOpacity[IE8] doesn't properly cleanup the CSS filter property
			var oldSet = jQuery.cssHooks.opacity.set;
			jQuery.cssHooks.opacity.set = function( elem, value ) {
				oldSet.apply(this, arguments);
				if ( !jQuery.trim(elem.style.filter) ) {
					elem.style.removeAttribute("filter");
				}
			};
		}());
	}

	// *** Performance measure ***
	function PerfMeasurement(){

		function Measurement( sId, sInfo, iStart, iEnd ){
			this.id = sId;
			this.info = sInfo;
			this.start = iStart;
			this.end = iEnd;
			this.pause = 0;
			this.resume = 0;
			this.duration = 0; // used time
			this.time = 0; // time from start to end
		}

		var bActive = false;
		var fnAjax = jQuery.ajax;

		/**
		 * Gets the current state of the perfomance measurement functionality
		 *
		 * @return {boolean} current state of the perfomance measurement functionality
		 * @name jQuery.sap.measure#getActive
		 * @function
		 * @public
		 */
		this.getActive = function(){
			return bActive;
		};

		/**
		 * Activates or deactivates the performance measure functionality
		 *
		 * @param {boolean} bOn state of the perfomance measurement functionality to set
		 * @return {boolean} current state of the perfomance measurement functionality
		 * @name jQuery.sap.measure#setActive
		 * @function
		 * @public
		 */
		this.setActive = function( bOn ){

			if (bActive == bOn) {
				return bActive;
			}

			bActive = bOn;

			if (bActive){
				// redefine AJAX call
				jQuery.ajax = function( url, options ){
					jQuery.sap.measure.start(url.url, "Request for "+ url.url);
					fnAjax.apply(this,arguments);
					jQuery.sap.measure.end(url.url);
				};
			}else if(fnAjax){
				jQuery.ajax = fnAjax;
			}

			return bActive;

		};

		this.setActive(/sap-ui-measure=(true|x|X)/.test(location.search));

		this.mMeasurements = {};

		/**
		 * Starts a performance measure
		 *
		 * @param {string} sId ID of the measurement
		 * @param {string} sInfo Info for the measurement
		 * @return {object} current measurement containing id, info and start-timestamp (false if error)
		 * @name jQuery.sap.measure#start
		 * @function
		 * @public
		 */
		this.start = function( sId, sInfo ){
			if (!bActive) {
				return;
			}

			var iTime = new Date().getTime();
			var oMeasurement = new Measurement( sId, sInfo, iTime, 0);
//			jQuery.sap.log.info("Performance measurement start: "+ sId + " on "+ iTime);

			if (oMeasurement) {
				this.mMeasurements[sId] = oMeasurement;
				return({id: oMeasurement.id, info: oMeasurement.info, start: oMeasurement.start });
			}else{
				return false;
			}
		};

		/**
		 * Pauses a performance measure
		 *
		 * @param {string} sId ID of the measurement
		 * @return {object} current measurement containing id, info and start-timestamp, pause-timestamp (false if error)
		 * @name jQuery.sap.measure#pause
		 * @function
		 * @public
		 */
		this.pause = function( sId ){
			if (!bActive) {
				return;
			}

			var iTime = new Date().getTime();
			var oMeasurement = this.mMeasurements[sId];
			if(oMeasurement && oMeasurement.end > 0){
				// already ended -> no pause possible
				return false;
			}

			if (oMeasurement && oMeasurement.pause == 0) {
				// not already paused
				oMeasurement.pause = iTime;
				if (oMeasurement.pause >= oMeasurement.resume && oMeasurement.resume > 0) {
					oMeasurement.duration = oMeasurement.duration + oMeasurement.pause - oMeasurement.resume;
					oMeasurement.resume = 0;
				}else if (oMeasurement.pause >= oMeasurement.start) {
					oMeasurement.duration = oMeasurement.pause - oMeasurement.start;
				}
			}
//			jQuery.sap.log.info("Performance measurement pause: "+ sId + " on "+ iTime + " duration: "+ oMeasurement.duration);

			if (oMeasurement) {
				return({id: oMeasurement.id, info: oMeasurement.info, start: oMeasurement.start, pause: oMeasurement.pause });
			}else{
				return false;
			}
		};

		/**
		 * Resumes a performance measure
		 *
		 * @param {string} sId ID of the measurement
		 * @return {object} current measurement containing id, info and start-timestamp, resume-timestamp (false if error)
		 * @name jQuery.sap.measure#resume
		 * @function
		 * @public
		 */
		this.resume = function( sId ){
			if (!bActive) {
				return;
			}

			var iTime = new Date().getTime();
			var oMeasurement = this.mMeasurements[sId];
//			jQuery.sap.log.info("Performance measurement resume: "+ sId + " on "+ iTime + " duration: "+ oMeasurement.duration);

			if (oMeasurement && oMeasurement.pause > 0) {
				// already paused
				oMeasurement.pause = 0;
				oMeasurement.resume = iTime;
			}

			if (oMeasurement) {
				return({id: oMeasurement.id, info: oMeasurement.info, start: oMeasurement.start, resume: oMeasurement.resume });
			}else{
				return false;
			}
		};

		/**
		 * Ends a performance measure
		 *
		 * @param {string} sId ID of the measurement
		 * @return {object} current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
		 * @name jQuery.sap.measure#end
		 * @function
		 * @public
		 */
		this.end = function( sId ){
			if (!bActive) {
				return;
			}

			var iTime = new Date().getTime();
			var oMeasurement = this.mMeasurements[sId];
//			jQuery.sap.log.info("Performance measurement end: "+ sId + " on "+ iTime);

			if (oMeasurement && !oMeasurement.end) {
				oMeasurement.end = iTime;
				if (oMeasurement.end >= oMeasurement.resume && oMeasurement.resume > 0) {
					oMeasurement.duration = oMeasurement.duration + oMeasurement.end - oMeasurement.resume;
					oMeasurement.resume = 0;
				}else if (oMeasurement.pause > 0) {
					// duration already calculated
					oMeasurement.pause = 0;
				}else if (oMeasurement.end >= oMeasurement.start) {
					oMeasurement.duration = oMeasurement.end - oMeasurement.start;
				}
				if (oMeasurement.end >= oMeasurement.start) {
					oMeasurement.time = oMeasurement.end - oMeasurement.start;
				}
			}

			if (oMeasurement) {
				return({id: oMeasurement.id,
					    info: oMeasurement.info,
					    start: oMeasurement.start,
					    end: oMeasurement.end,
					    time: oMeasurement.time,
					    duration: oMeasurement.duration});
			}else{
				return false;
			}
		};

		/**
		 * Gets a performance measure
		 *
		 * @param {string} sId ID of the measurement
		 * @return {object} current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
		 * @name jQuery.sap.measure#getMeasurement
		 * @function
		 * @public
		 */
		this.getMeasurement = function( sId ){
			if (!bActive) {
				return;
			}

			var oMeasurement = this.mMeasurements[sId];

			if (oMeasurement) {
				return({id: oMeasurement.id,
						info: oMeasurement.info,
						start: oMeasurement.start,
						end: oMeasurement.end,
						time: oMeasurement.time,
						duration: oMeasurement.duration});
			}else{
				return false;
			}
		};

		/**
		 * Clears all performance measurements
		 *
		 * @return
		 * @name jQuery.sap.measure#clear
		 * @function
		 * @public
		 */
		this.clear = function( ){
			if (!bActive) {
				return;
			}

			this.mMeasurements = {};
			return;
		};

		/**
		 * Removes a performance measure
		 *
		 * @param {string} sId ID of the measurement
		 * @return
		 * @name jQuery.sap.measure#remove
		 * @function
		 * @public
		 */
		this.remove = function( sId ){
			if (!bActive) {
				return;
			}

			delete this.mMeasurements[sId];
			return;
		};

		/**
		 * Gets all performance measurements
		 *
		 * @return {object} [] current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
		 * @name jQuery.sap.measure#getAllMeasurements
		 * @function
		 * @public
		 */
		this.getAllMeasurements = function( ){
			if (!bActive) {
				return;
			}

			var aMeasurements = new Array();

			jQuery.each(this.mMeasurements, function(sId, oMeasurement){
				aMeasurements.push({id: oMeasurement.id,
					                info: oMeasurement.info,
					                start: oMeasurement.start,
					                end: oMeasurement.end,
					                duration: oMeasurement.duration,
					                time: oMeasurement.time});
			});
			return aMeasurements;
		};

		/**
		 * Adds a performance measurement with all data 
		 * This is usefull to add external measurements (e.g. from a backend) to the common measurement UI
		 *
		 * @param {string} sId ID of the measurement
		 * @param {string} sInfo Info for the measurement
		 * @param {int} iStart start timestamp
		 * @param {int} iEnd end timestamp
		 * @param {int} iTime time in milliseconds
		 * @param {int} iDuration effective time in milliseconds
		 * @return {object} [] current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
		 * @name jQuery.sap.measure#add
		 * @function
		 * @public
		 */
		this.add = function( sId, sInfo, iStart, iEnd, iTime, iDuration ){
			if (!bActive) {
				return;
			}

			var oMeasurement = new Measurement( sId, sInfo, iStart, iEnd);
			oMeasurement.time = iTime;
			oMeasurement.duration = iDuration;

			if (oMeasurement) {
				this.mMeasurements[sId] = oMeasurement;
				return({id: oMeasurement.id,
					    info: oMeasurement.info,
					    start: oMeasurement.start,
					    end: oMeasurement.end,
					    time: oMeasurement.time,
					    duration: oMeasurement.duration});
			}else{
				return false;
			}
		};
	}

	/**
	 * Namespace for the jQuery performance measurement plug-in provided by SAP AG.
	 *
	 * @namespace
	 * @name jQuery.sap.measure
	 * @public
	 * @static
	 */
	jQuery.sap.measure = new PerfMeasurement();

}());

/**
 * Executes an 'eval' for its arguments in the global context (without closure variables).
 *
 * This is a synchronous replacement for <code>jQuery.globalEval</code> which in some
 * browsers (e.g. FireFox) behaves asynchronously.
 *
 * @type void
 * @public
 * @static
 * @SecSink {0|XSS} Parameter is evaluated
 */
jQuery.sap.globalEval = function() {
	eval(arguments[0]);
};
