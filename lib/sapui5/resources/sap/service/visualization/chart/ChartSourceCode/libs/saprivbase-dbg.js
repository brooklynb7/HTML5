(function() {
	var undefined = void (0);
	if (window.sap !== undefined && window.sap.riv !== undefined && window.sap.riv.require !== undefined) {
		// In case of already defined
		return;
	}

	if (window.sap !== undefined && window.sap.riv !== undefined && window.sap.riv.module !== undefined) {
		// In case of already defined
		return;
	}

	var isJQueryUsed = jQuery !== undefined ? true : false

	var jQueryHoldReady = function(shouldHold) {
		if (isJQueryUsed) {
			if (jQuery.holdReady) {
				jQuery.holdReady(shouldHold);
			} else if (shouldHold) {
				jQuery.readyWait += 1;
			} else {
				jQuery.ready(true);
			}
		}
	}
	var curScript = undefined;
	var context_path = '/';
	var scripts = document.getElementsByTagName("script");
	var trace = function() {
	};
	// A ugly way to determine whether the script tag is used for
	// loading sap.riv.base.js
	// Sometimes the base js is not loaded via script tag
	if (scripts.length && scripts[scripts.length - 1].getAttribute('src')
			&& scripts[scripts.length - 1].getAttribute('src').lastIndexOf('sap.riv.base.js')) {
		curScript = scripts[scripts.length - 1];
		if (((curScript.getAttribute('trace') || '').toLowerCase() === 'true') && (typeof console !== undefined)) {
			trace = function(traceLog) {
				console.log(traceLog);
			};
		}

		var context_path = curScript.getAttribute('base-url');

		if (!context_path) {
			var src = curScript.getAttribute('src');
			context_path = src.substring(0, src.lastIndexOf('/'));
		}
		if (context_path.charAt(context_path.length - 1) !== '/')
			context_path = context_path + '/';
	}

	window.sap = window.sap || {};
	window.sap.riv = window.sap.riv || {};

	var ModuleStatus = {
		ENTRY_CREATED : 0,
		IN_LOADING : 1,
		DEFINED : 2,
		ERROR : 3
	};

	var hasOwn = Object.prototype.hasOwnProperty;

	var class2type = {
		'[object Boolean]' : 'boolean',
		'[object Number]' : 'number',
		'[object String]' : 'string',
		'[object Function]' : 'function',
		'[object Array]' : 'array',
		'[object Date]' : 'date',
		'[object RegExp]' : 'regexp',
		'[object Object]' : 'object'
	};

	var type = function(obj) {
		return obj == null ? String(obj) : class2type[Object.prototype.toString.call(obj)] || "object";
	};

	var isFunction = function(obj) {
		return type(obj) === "function";
	};

	var isArray = Array.isArray || function(obj) {
		return type(obj) === "array";
	};

	var isString = function(obj) {
		return type(obj) === "string";
	};

	// A crude way of determining if an object is a window
	var isWindow = function(obj) {
		return obj && typeof obj === "object" && "setInterval" in obj;
	};

	var isNaN = function(obj) {
		return obj == null || !/\d/.test(obj) || isNaN(obj);
	};

	var isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};

	var isDefined = function(v) {
		return typeof (v) !== 'undefined';
	};

	var isUndefined = function(v) {
		return typeof (v) === 'undefined';
	};

	var isPlainObject = function(obj) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the
		// constructor property.
		// Make sure that DOM nodes and window objects don't pass through,
		// as well
		if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
			return false;
		}

		// Not own constructor property must be Object
		if (obj.constructor && !hasOwn.call(obj, "constructor")
				&& !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for (key in obj) {
		}

		return key === undefined || hasOwn.call(obj, key);
	};

	var isEmptyObject = function(obj) {
		for ( var name in obj) {
			return false;
		}
		return true;
	};

	var ModuleEntry = function(qname, version) {
		this._qname = qname;
		this._version = version;
		this._moduleSetupFunc = undefined;
		this._status = ModuleStatus.ENTRY_CREATED;
		this._moduleObject = undefined;
		this._exportToGlobal = false;
		this._depList = [];
		this._pendingDefTaskList = [];
		jQueryHoldReady(true);
	};
	ModuleEntry.prototype.moduleObject = function(moduleObj) {
		return this._moduleObject;
	};
	ModuleEntry.prototype.setupFunction = function(setupFunction) {
		if (isDefined(setupFunction)) {
			this._moduleSetupFunc = setupFunction;
			return this;
		} else {
			return this._moduleSetupFunc;
		}
	};
	ModuleEntry.prototype.setModuleObject = function(moduleObj) {
		this._moduleObject = moduleObj;
	};
	ModuleEntry.prototype.qname = function() {
		return this._qname;
	};
	ModuleEntry.prototype.version = function() {
		return this._version;
	};
	ModuleEntry.prototype.status = function(status) {
		if (status !== undefined) {
			this._status = status;
			return this;
		} else {
			return this._status;
		}
	};
	ModuleEntry.prototype.dependentModules = function(depList) {
		if (isDefined(depList)) {
			this._depList = depList;
			return this;
		} else {
			return this._depList;
		}
	};
	ModuleEntry.prototype.exportToGlobal = function(exportToGlobal) {
		if (isDefined(exportToGlobal)) {
			this._exportToGlobal = exportToGlobal;
			return this;
		} else {
			return this._exportToGlobal;
		}

	};

	ModuleEntry.prototype.waitUntilDefined = function(pendingDefTask) {
		this._pendingDefTaskList.push(pendingDefTask);
	};
	ModuleEntry.prototype.getPendingDefTasks = function() {
		return this._pendingDefTaskList;
	};

	// A global pool for containing all of the managed modules
	var modulesPool = {};
	// Register loaded url
	var loadedURLs = {};

	var loader = function(url) {
		if (!loadedURLs.hasOwnProperty(url)) {
			loadedURLs[url] = false;
			var head = document.getElementsByTagName("head")[0] || document.documentElement;
			var script = document.createElement("script");
			script.type = 'text/javascript';
			script.src = url;
			// Handle Script loading
			var done = false;
			// Attach handlers for all browsers
			script.onload = script.onreadystatechange = function() {
				if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
					done = true;
					// Handle memory leak in IE
					script.onload = script.onreadystatechange = null;
					if (head && script.parentNode) {
						head.removeChild(script);
					}
					loadedURLs[url] = true;
				}
			};
			if (script.addEventListener) {
				script.addEventListener('error', function() {
					throw new Error('Loading ' + url + ' failed.')
				}, true);
			}
			// Use insertBefore instead of appendChild to circumvent an IE6 bug.
			// This arises when a base node is used (#2709 and #4378).
			head.insertBefore(script, head.firstChild);
			// We handle everything using the script element injection
		}

		return undefined;
	};

	var isValidSemanticVersion = function(semver) {
		if (semver === undefined || typeof semver !== 'string') {
			return false;
		}
		var components = semver.split('.');
		if (components.length > 3) {
			return false;
		}
		for ( var i = 0, len = components.length; i < len; i++) {
			if (parseInt(components[i]) === NaN) {
				return false;
			}
		}
		return true;
	};

	var buildModuleURL = function(qname, version) {
		var paths = qname.split('.');
		var fileName = paths.splice(paths.length - 1, 1);
		return context_path + paths.join('/') + '/' + fileName + '.' + version + '.js';
	};

	var setupModule = function(moduleEntry) {
		var moduleObject;
		if (isFunction(moduleEntry.setupFunction())) {
			var args = [];
			for ( var i = 0, depModule, depModuleList = moduleEntry.dependentModules(), len = depModuleList.length; i < len; i++) {
				depModule = depModuleList[i];
				args.push(modulesPool[depModule.qname][depModule.version].moduleObject());
			}
			moduleObject = moduleEntry.setupFunction().apply(window, args);
		} else {
			moduleObject = moduleEntry.moduleObject();
		}
		if (moduleEntry.exportToGlobal()) {
			var qnameComps = moduleEntry.qname().split('.');
			var attachTo = window;
			for ( var i = 0, part, len = qnameComps.length; i < len; i++) {
				part = qnameComps[i];
				if (i === len - 1) {
					attachTo[part] = moduleObject;
				} else {
					attachTo[part] = attachTo[part] || {};
					attachTo = attachTo[part];
				}
			}
		}
		moduleEntry.setModuleObject(moduleObject);
		moduleEntry.status(ModuleStatus.DEFINED);
		trace(moduleEntry.qname() + ' ' + moduleEntry.version() + ' loaded')
		// Resume the definition tasks that are blocked on this module
		var pendingTasks = moduleEntry.getPendingDefTasks();
		while (pendingTasks.length) {
			var pendingTask = pendingTasks.pop();
			pendingTask(moduleEntry);
		}
		jQueryHoldReady(false)
	};

	var createPendingDefTask = function(waitedModules, moduleEntry) {
		return (function(availableModuleEntry) {
			// remove the available module from the waited modules
			delete waitedModules[availableModuleEntry.qname()][availableModuleEntry.version()];
			if (isEmptyObject(waitedModules[availableModuleEntry.qname()])) {
				delete waitedModules[availableModuleEntry.qname()];
			}
			if (isEmptyObject(waitedModules)) {
				setupModule(moduleEntry);
			}
		});
	};

	sap.riv.module = function(moduleCfg, dependencies, moduleSetupFunc) {
		if (isUndefined(moduleCfg) || isUndefined(moduleCfg.qname) || isUndefined(moduleCfg.version)) {
			throw new Error('Bad Arguments: you have to specify the qname and version for the module.');
		}
		if (!isString(moduleCfg.qname) || !isValidSemanticVersion(moduleCfg.version)) {
			throw new Error('Invalid qname or version string');
		}
		if (arguments.length === 2) {
			if (!isPlainObject(dependencies) && !isFunction(dependencies)) {
				throw new Error('You must specify a plain object or a module setup function');
			}
			moduleSetupFunc = dependencies;
			dependencies = [];
		}
		if (arguments.length === 3) {
			if (!isArray(dependencies) || (!isPlainObject(moduleSetupFunc) && !isFunction(moduleSetupFunc))) {
				throw new Error(
						'Dependencies must be array, and you must specify an plain object or a module setup function');
			}
		}
		var qname = moduleCfg.qname, version = moduleCfg.version, exportToGlobal = isUndefined(moduleCfg.exported) ? false
				: moduleCfg.exported, moduleEntry;

		if (!hasOwn.call(modulesPool, qname) || !hasOwn.call(modulesPool, version)) {
			modulesPool[qname] = modulesPool[qname] || {};
			modulesPool[qname][version] = modulesPool[qname][version] || new ModuleEntry(qname, version);
		}
		moduleEntry = modulesPool[qname][version];

		if (moduleEntry.status() === ModuleStatus.ENTRY_CREATED) {
			// The depending module is just created for the loading
			if (typeof moduleSetupFunc === 'object') {
				// Module is just a plain object
				moduleEntry.exportToGlobal(exportToGlobal).setModuleObject(moduleSetupFunc);
			} else {
				var depList = [];
				for ( var i = 0, depModule, len = dependencies.length; i < len; i++) {
					depModule = dependencies[i];
					if (!isString(depModule.qname) || !isValidSemanticVersion(depModule.version)) {
						throw new Error('You must specify qname and version for the depending module');
					}
					depList.push({
						qname : depModule.qname,
						version : depModule.version
					});
				}
				moduleEntry.exportToGlobal(exportToGlobal).dependentModules(depList).setupFunction(moduleSetupFunc);
			}
		}

		if (moduleEntry.status() === ModuleStatus.DEFINED || moduleEntry.status() === ModuleStatus.IN_LOADING) {
			return;
		}
		moduleEntry.status(ModuleStatus.IN_LOADING);

		if (moduleEntry.dependentModules().length === 0) {
			setupModule(moduleEntry);
			return;
		} else {
			var waitedModules = {};
			for ( var i = 0, dep, depList = moduleEntry.dependentModules(), len = depList.length; i < len; i++) {
				dep = depList[i];
				if (!(hasOwn.call(modulesPool, dep.qname) && hasOwn.call(modulesPool[dep.qname], dep.version))
						|| (modulesPool[dep.qname][dep.version].status() !== ModuleStatus.DEFINED)) {
					// The depending module is not ready, either because of not
					// loaded yet or because of pending on defining
					waitedModules[dep.qname] = waitedModules[dep.qname] || {};
					waitedModules[dep.qname][dep.version] = waitedModules[dep.qname][dep.version] || {
						qname : dep.qname,
						version : dep.version,
						url : dep.url || buildModuleURL(dep.qname, dep.version)
					};
				}
			}
			if (isEmptyObject(waitedModules)) {
				// All the depending modules are ready
				setupModule(moduleEntry);
				return;
			} else {
				// Some of the depending modules are not ready, either because
				// of not loaded yet or because of pending on defining
				for ( var qname in waitedModules) {
					for ( var version in waitedModules[qname]) {
						if (!hasOwn.call(modulesPool, qname) || !hasOwn.call(modulesPool[qname], version)) {
							// if it's a brand new module, then create a entry
							// for it
							modulesPool[qname] = modulesPool[qname] || {};
							modulesPool[qname][version] = modulesPool[qname][version]
									|| new ModuleEntry(qname, version);
							// TODO check circular dependencies
							modulesPool[qname][version].waitUntilDefined(createPendingDefTask(waitedModules,
									moduleEntry));
							// TODO handle loading error
							loader(waitedModules[qname][version].url);
						} else {
							// if it's not ready(either is loading or not), wait
							// until it's done
							modulesPool[qname][version].waitUntilDefined(createPendingDefTask(waitedModules,
									moduleEntry));
						}
					}
				}
			}
		}
	};

	var executeRequiredFunction = function(requiredFunction, requiredModules) {
		var args = [];
		for ( var i = 0, requiredModule, len = requiredModules.length; i < len; i++) {
			requiredModule = requiredModules[i];
			args.push(modulesPool[requiredModule.qname][requiredModule.version].moduleObject());
		}
		requiredFunction.apply(window, args);
	};

	var createPendingRequireTask = function(waitedModules, requiredFunc, requiredModules) {
		return (function(availableModuleEntry) {
			// remove the available module from the waited modules
			delete waitedModules[availableModuleEntry.qname()][availableModuleEntry.version()];
			if (isEmptyObject(waitedModules[availableModuleEntry.qname()])) {
				delete waitedModules[availableModuleEntry.qname()];
			}
			if (isEmptyObject(waitedModules)) {
				executeRequiredFunction(requiredFunc, requiredModules);
			}
		});
	};

	sap.riv.require = function(dependencies, requireFunc) {
		if (arguments.length === 1) {
			if (!isFunction(dependencies)) {
				throw new Error('You have to specify a function to run');
			}
			requireFunc = dependencies;
			dependencies = [];
		}
		if (arguments.length === 2) {
			if (!isArray(dependencies) || !isFunction(requireFunc)) {
				throw new Error(
						'the first argument has to be array of depending modules, the second argument should be function type');
			}
		}

		if (!dependencies.length) {
			// No dependencies specified, execute it right away.
			executeRequiredFunction(requireFunc, dependencies);
			return;
		}

		var waitedModules = {};
		for ( var i = 0, dep, len = dependencies.length; i < len; i++) {
			dep = dependencies[i];
			if (!(hasOwn.call(modulesPool, dep.qname) && hasOwn.call(modulesPool[dep.qname], dep.version))
					|| (modulesPool[dep.qname][dep.version].status() !== ModuleStatus.DEFINED)) {
				// The depending module is not ready, either because of not
				// loaded yet or because of pending on defining
				waitedModules[dep.qname] = waitedModules[dep.qname] || {};
				waitedModules[dep.qname][dep.version] = waitedModules[dep.qname][dep.version] || {
					qname : dep.qname,
					version : dep.version,
					url : dep.url || buildModuleURL(dep.qname, dep.version)
				};
			}
		}
		if (isEmptyObject(waitedModules)) {
			// All the depending modules are ready
			executeRequiredFunction(requireFunc, dependencies);
			return;
		} else {
			// Some of the depending modules are not ready, either because
			// of not loaded yet or because of pending on defining
			for ( var qname in waitedModules) {
				for ( var version in waitedModules[qname]) {
					if (!hasOwn.call(modulesPool, qname) || !hasOwn.call(modulesPool[qname], version)) {
						// if it's a brand new module, then create a entry
						// for it
						modulesPool[qname] = modulesPool[qname] || {};
						modulesPool[qname][version] = modulesPool[qname][version] || new ModuleEntry(qname, version);
						// TODO check circular dependencies
						modulesPool[qname][version].waitUntilDefined(createPendingRequireTask(waitedModules,
								requireFunc, dependencies));
						// TODO handle loading error
						loader(waitedModules[qname][version].url);
					} else {
						// if it's not ready(either is loading or not), wait
						// until it's done
						modulesPool[qname][version].waitUntilDefined(createPendingRequireTask(waitedModules,
								requireFunc, dependencies));
					}
				}
			}
		}
	};

	// Evalulates a script in a global context
	var globalEval = function(data) {
		if (data && /\S/.test(data)) {
			// Inspired by code by Andrea Giammarchi
			// http://webreflection.blogspot.com/2007/08/global-scope-evaluation-and-dom.html
			var head = document.getElementsByTagName("head")[0] || document.documentElement, script = document
					.createElement("script");

			script.type = "text/javascript";

			try {
				script.appendChild(document.createTextNode(data));
			} catch (e) {
				script.text = data;
			}

			// Use insertBefore instead of appendChild to circumvent an IE6 bug.
			// This arises when a base node is used (#2709).
			head.insertBefore(script, head.firstChild);
			head.removeChild(script);
		}
	};

	sap.riv.setBaseUrl = function(url) {
		context_path = url;
	};
	// if the base js is not loaded via script tag, skip the evaluating of
	// embeded script.
	if (curScript) {
		var script = curScript.innerHTML;
		if (script) {
			globalEval(script);
		}
	}
})();