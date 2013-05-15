/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* EXPERIMENTAL */
// This function will probably be moved and in that process be renamed
// So don't rely on the current naming

jQuery.sap.declare("sap.m.PerformanceRecorder");

/**
 * @class Performance Recorder
 * @static
 */

sap.m.PerformanceRecorder = {};

/**
 * Initialize and start the recording of performance measurements
 *
 * @param oConfig The object holding the configuration
 * @param aInteractionSteps The array holding the interaction steps
 * @return void
 * @function
 * @public
 */
sap.m.PerformanceRecorder.start = function(oConfig, aInteractionSteps) {
	sap.m.PerformanceRecorder.config = oConfig;
	sap.m.PerformanceRecorder.interactionSteps = aInteractionSteps;
	sap.m.PerformanceRecorder.interactionPointer = 0;
	sap.m.PerformanceRecorder.stepPointer = 0;

	jQuery.sap.measure.setActive(true);

	sap.m.PerformanceRecorder.processStepStart();
};

/**
 * Process a step's start trigger
 *
 * @return void
 * @function
 * @private
 */
sap.m.PerformanceRecorder.processStepStart = function() {
	var currentInteraction = sap.m.PerformanceRecorder.interactionSteps[sap.m.PerformanceRecorder.interactionPointer];
	var currentStep = currentInteraction.steps[sap.m.PerformanceRecorder.stepPointer];

	// Start timer or attach trigger event or delegate
	if (currentStep.startTriggerEvent == "immediate") {
		// Start timer for interaction step
		if (sap.m.PerformanceRecorder.stepPointer == 0) {
			jQuery.sap.measure.start(currentInteraction.id, currentInteraction.description);
		}
		jQuery.sap.measure.start(currentStep.id, currentInteraction.id);
		sap.m.PerformanceRecorder.processStepStop();
	} else if (currentStep.startTriggerEvent == "UIUpdated") {
		sap.ui.getCore().attachEvent(sap.ui.core.Core.M_EVENTS.UIUpdated, function() {
			// Start timer for interaction step
			if (sap.m.PerformanceRecorder.stepPointer == 0) {
				jQuery.sap.measure.start(currentInteraction.id, currentInteraction.description);
			}
			jQuery.sap.measure.start(currentStep.id, currentInteraction.id);
			sap.m.PerformanceRecorder.processStepStop();
		});
	} else if (currentStep.startTriggerId && currentStep.startTriggerEvent) {
		var oTrigger = sap.ui.getCore().byId(currentStep.startTriggerId);
		sap.m.PerformanceRecorder.oTriggerEvent = {};
		sap.m.PerformanceRecorder.oTriggerEvent[currentStep.startTriggerEvent] = function() {
			// Start timer for interaction step
			if (sap.m.PerformanceRecorder.stepPointer == 0) {
				jQuery.sap.measure.start(currentInteraction.id, currentInteraction.description);
			}
			jQuery.sap.measure.start(currentStep.id, currentInteraction.id);
			sap.m.PerformanceRecorder.processStepStop();
		};
		oTrigger.addDelegate(sap.m.PerformanceRecorder.oTriggerEvent, true);
	}
};

/**
 * Process a step's stop trigger
 *
 * @return void
 * @function
 * @private
 */
sap.m.PerformanceRecorder.processStepStop = function() {
	var currentInteraction = sap.m.PerformanceRecorder.interactionSteps[sap.m.PerformanceRecorder.interactionPointer];
	var currentStep = currentInteraction.steps[sap.m.PerformanceRecorder.stepPointer];

	// Detach trigger event or delegate
	if (currentStep.startTriggerEvent == "UIUpdated") {
		sap.ui.getCore().detachEvent(sap.ui.core.Core.M_EVENTS.UIUpdated, sap.m.PerformanceRecorder.processStepStop);
	} else if (currentStep.startTriggerId && currentStep.startTriggerEvent) {
		var oTrigger = sap.ui.getCore().byId(currentStep.startTriggerId);
		oTrigger.removeDelegate(sap.m.PerformanceRecorder.oTriggerEvent);
	}

	if (currentStep.stopTriggerEvent == "UIUpdated") {
		sap.ui.getCore().attachEvent(sap.ui.core.Core.M_EVENTS.UIUpdated, sap.m.PerformanceRecorder.concludeStep);
	}
};

/**
 * Conclude step/interaction/recording
 *
 * @return void
 * @function
 * @private
 */
sap.m.PerformanceRecorder.concludeStep = function() {
	var currentInteraction = sap.m.PerformanceRecorder.interactionSteps[sap.m.PerformanceRecorder.interactionPointer];
	var currentStep = currentInteraction.steps[sap.m.PerformanceRecorder.stepPointer];
	var lastInteraction = sap.m.PerformanceRecorder.interactionSteps.length - 1;
	var lastStep = currentInteraction.steps.length - 1;
	
	// Record stop time
	jQuery.sap.measure.end(currentStep.id);

	// Detach trigger event
	if (currentStep.stopTriggerEvent == "UIUpdated") {
		sap.ui.getCore().detachEvent(sap.ui.core.Core.M_EVENTS.UIUpdated, sap.m.PerformanceRecorder.concludeStep);
	}

	// Stop timer for interaction step
	if (sap.m.PerformanceRecorder.stepPointer == lastStep) {
		jQuery.sap.measure.end(currentInteraction.id);
	}

	// Advance pointers or end recording
	if (sap.m.PerformanceRecorder.interactionPointer < lastInteraction) {
		if (sap.m.PerformanceRecorder.stepPointer < lastStep) {
			sap.m.PerformanceRecorder.stepPointer++;
		} else {
			sap.m.PerformanceRecorder.interactionPointer++;
			sap.m.PerformanceRecorder.stepPointer = 0;
		}
		sap.m.PerformanceRecorder.processStepStart();
	} else {
		sap.m.PerformanceRecorder.endRecording();
	}
};

/**
 * End recording and beacon results
 *
 * @return void
 * @function
 * @private
 */
sap.m.PerformanceRecorder.endRecording = function() {
	var measurements = sap.m.PerformanceRecorder.getAllMeasurementsAsHAR();
	var data = {
	    log: {
	    	version: "1.2",
	    	creator: {
	    		name: "SAPUI5 Performance Recorder",
	    		version: "1.0"
	    	},
	    	browser: {
	    		name: navigator.userAgent,
	    		version: jQuery.browser.version
	    	}
	    }
	};

	var pages = [];
	var entries = [];
	for(var i in measurements) {
		if(measurements[i].id.substr(-5) === "_page") {
			var page = {
		        startedDateTime: measurements[i].startedDateTime,
		        id: measurements[i].id,
		        title: measurements[i].pageref,
		        pageTimings: {
		        	onContentLoad: -1,
		        	onLoad: measurements[i].time
		        }
			};

			pages.push(page);
		} else {
			entries.push(measurements[i]);
		}
	}

	data.log.pages = pages;
	data.log.entries = entries;

	jQuery.ajax({
		type: 'POST',
		url: sap.m.PerformanceRecorder.config.url,
		data: data,
		dataType: 'text'
	});
};

/**
 * Gets all performance measurements in HAR format
 *
 * @return {object} [] current measurement (false if error)
 * @function
 * @private
 */
sap.m.PerformanceRecorder.getAllMeasurementsAsHAR = function() {
	var origMeasurements = jQuery.sap.measure.getAllMeasurements();
	var aMeasurements = new Array();
	var oFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
		pattern: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
	});

	//TODO Improve the data that is being written into the fields
	jQuery.each(origMeasurements, function(sId, oMeasurement){
		var isoDate = oFormat.format(new Date(oMeasurement.start), true);

		aMeasurements.push({
			id: oMeasurement.id,
            pageref: oMeasurement.info,
            startedDateTime: isoDate,
            time: oMeasurement.duration,
            request: {
            	method: "GET",
            	url: oMeasurement.id,
            	httpVersion: "HTTP/1.1",
            	cookies: [
            	    {
            	    	dummy: ""
            	    }
            	],
            	headers: [
            	    {
            	    	name: "",
            	    	value: ""
            	    }
            	],
            	queryString: [
            	    {
            	    	name: "",
            	    	value: ""
            	    }
            	],
            	headersSize: 0,
            	bodySize: 0
            },
            response: {
            	status: 200,
            	statusText: "OK",
            	httpVersion: "HTTP/1.1",
            	cookies: [
            	    {
            	    	dummy: ""
            	    }
            	],
            	headers: [
            	    {
            	    	name: "",
            	    	value: ""
            	    }
            	],
            	content: {
                    size: 0,
                    compression: 0,
                    mimeType: "text/html; charset=utf-8",
                    text: "\n"
                },
            	redirectURL: "",
                headersSize: 0,
                bodySize: 0
            },
            cache: {
            	beforeRequest: {
            		lastAccess: "",
            		eTag: "",
            		hitCount: ""
            	},
                afterRequest: {
                	lastAccess: "",
            		eTag: "",
            		hitCount: ""
                }
            },
            timings: {
            	blocked: -1,
                dns: -1,
                connect: -1,
                send: -1,
                wait: -1,
                receive: oMeasurement.duration,
                ssl: -1,
            }
	    });
	});
	return aMeasurements;
};
