
var DemoAppReuse = {

	HISTORY_PATH_PAGE: "page",
	
	/**
	 * function for navigating to page
	 */
	navToPage: function(app, pageFunctions, id, writeHistory, navType) {

		// check param
		if (app === undefined || id === undefined){
			jQuery.sap.log.error("navToPage failed due to insufficient params: " + app + ", " + id);
			return;
		}

		// add the page on demand
		if (pageFunctions !== undefined) {
			DemoAppReuse.addPageOnDemand(app, pageFunctions, id);
		}

		// tell app to navigate in the right direction
		if (navType === jQuery.sap.history.NavType.Back) {
			app.back();
		} else {
			app.to(id);
		}

		// write browser history
		if (writeHistory === undefined || writeHistory) {
			var bookmarkable = false;
			var stateData = {id: id};
			jQuery.sap.history.addHistory(DemoAppReuse.HISTORY_PATH_PAGE, stateData, bookmarkable);
		}

		// log
		jQuery.sap.log.info("navToPage '" + id + "' (" + writeHistory + "," + navType + ")");
	},

	/**
	 * function for adding pages on demand
	 */
	addPageOnDemand: function(app, pageFunctions, id) {
		if (!pageFunctions[id]) {
			jQuery.sap.log.error("no create function for id: " + id);
		} else if (pageFunctions[id] !== "executed") {
			var page = pageFunctions[id](id);
		app.addPage(page);
			pageFunctions[id] = "executed";
		} else {
			// page already created
		}
	},

	/**
	 * init history management
	 */ 
	initHistoryHandling: function(app, pageFunctions, homePage) {
		jQuery.sap.require("jquery.sap.history");
		jQuery.sap.history({
			routes: [{
				path: DemoAppReuse.HISTORY_PATH_PAGE,
				handler: function(params, navType) {
					// This handler is executed when you navigate back to the history state on the path HISTORY_PATH_PAGE
					if (!params || !params.id) {
						jQuery.sap.log.error("invalid page parameter: " + params);
					} else {
						DemoAppReuse.navToPage(app, pageFunctions, params.id, false, navType);
					}
				}
			}],
			defaultHandler: function(navType) {
				// The default handler is executed when you navigate back to the history state with an empty hash
				DemoAppReuse.navToPage(app, pageFunctions, homePage, false, navType);
			}
		});
	},

	/**
	 * convert function code into HTML string for display
	 */
	convertCodeToHtml: function(code) {
		jQuery.sap.require("jquery.sap.encoder");

		code = code.toString();

		// Get rid of function around code
		code = code.replace(/^function.+{/, "");
		//code = code.replace(/return \[[\s\S]*/, "");
		code = code.replace(/}[!}]*$/, "");

		// Get rid of unwanted code if CODESNIP tags are used
		code = code.replace(/^[\n\s\S]*\/\/\s*CODESNIP_START/, "");
		code = code.replace(/\/\/\s*CODESNIP_END[\n\s\S]*$/, "");
		
		// Improve indentation for display
		code = code.replace(/\n\t\t/g, "\n");
		code = code.replace(/\t/g, "  ");

		return '<pre><code>' + jQuery.sap.encodeHTML(code) + '</code></pre>';
	}
};