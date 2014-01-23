sap.ui.controller("views.code", {

	onInit : function () {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
	},

	_handleRouteMatched : function (evt) {

		if (evt.getParameter("name") !== "code") {
			return;
		}

		var that = this;
		this._catId = evt.getParameter("arguments").catId;
		this._controlId = evt.getParameter("arguments").id;

		// get control object from navigation model
		var model = this.getView().getModel("nav");
		var path = util.ObjectSearch.getPath(model.getData(), "id", this._controlId);
		if (!path) {
			this.router.myNavToWithoutHash("views.notFound", "XML", false, { path: this._controlId });
			return;
		}
		var controlData = model.getProperty(path);

		// scroll to top of page
		var page = this.getView().byId("page");
		page.scrollTo(0);

		// start data object
		var data = {
			title : "Code: " + controlData.name
		};

		// 1. ajax for javascript view
		var targetJs = "views/control/" + this._controlId + ".view.js";
		jQuery.ajax(targetJs, {
			async: false,
			dataType: "text",
			error: function (jqXHR, status, error) {
				jQuery.sap.log.info("no file found for: " + targetJs);
				data.showJs = false;
			},
			success: function (result) {
				data.selectedTab = "js";
				data.showJs = true;
				data.jsCodeRaw = result;
				data.jsCode = that._convertCodeToHtml(result);
			}
		});

		// 2. ajax for controller code
		var targetController = "views/control/" + this._controlId + ".controller.js";
		jQuery.ajax(targetController, {
			async: false,
			dataType: "text",
			error: function (jqXHR, status, error) {
				jQuery.sap.log.info("no file found for: " + targetController);
				data.showController = false;
			},
			success: function (result) {
				data.selectedTab = "controller";
				data.showController = true;
				data.controllerCodeRaw = result;
				data.controllerCode = that._convertCodeToHtml(result);
			}
		});

		// 3. ajax for view code
		var targetView = "views/control/" + this._controlId + ".view.xml";
		jQuery.ajax(targetView, {
			async: false,
			dataType: "text",
			error: function (jqXHR, status, error) {
				jQuery.sap.log.info(status + ", " + error + ", " + targetView);
				data.showView = false;
			},
			success: function (result) {
				data.selectedTab = "view";
				data.showView = true;
				data.viewCodeRaw = result;
				data.viewCode = that._convertCodeToHtml(result);
			}
		});

		// 4. ajax for xml fragments
		if (controlData.fragments) {
			data.showFragments = false;
			data.fragmentsCodeRaw = {};
			for (var f = 0; f < controlData.fragments.length; f++) {
				var fragmentName = controlData.fragments[f];
				var targetFragment = "views/control/" + this._controlId + "/" + fragmentName + ".fragment.xml";
				jQuery.ajax(targetFragment, {
					async: false,
					dataType: "text",
					error: function (jqXHR, status, error) {
						jQuery.sap.log.info("no file found for: " + targetFragment);
					},
					success: function (result) {
						data.showFragments = true;
						data.fragmentsCodeRaw[fragmentName] = result;
						data.fragmentsCode = data.fragmentsCode + that._convertCodeToHtml(result) + "<hr />";
					}
				});
			}
		} else {
			data.showFragments = false;
		}

		// set model
		var newModel = new sap.ui.model.json.JSONModel(data);
		that.getView().setModel(newModel);
	},

	/**
	 * 
	 */
	handleDownload : function (evt) {
		
		jQuery.sap.require("sap.ui.thirdparty.jszip");
		var zipFile = new JSZip();
		
		// add data
		var data = this.getView().getModel().getData();
		if (data.viewCodeRaw) {
			zipFile.file(this._controlId + ".view.xml", data.viewCodeRaw);
		}
		if (data.controllerCodeRaw) {
			zipFile.file(this._controlId + ".controller.js", data.controllerCodeRaw);
		}
		if (data.jsCodeRaw) {
			zipFile.file(this._controlId + ".view.js", data.jsCodeRaw);
		}
		if (data.fragmentsCodeRaw) {
			for (var f in data.fragmentsCodeRaw) {
				zipFile.file(this._controlId + "/" + f + ".fragment.xml", data.fragmentsCodeRaw[f]);
			}
		}
		var content = zipFile.generate();
		
		location.href = "data:application/zip;base64," + content;
	},

	handleNavBack : function () {
		this.router.navTo("sample", {
			catId: this._catId,
			id: this._controlId
		}, !jQuery.device.is.phone);
	},

	/**
	 * 
	 */
	_convertCodeToHtml : function (code) {
		
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
		code = code.replace(/\t/g, "  ");
		
		return '<pre><code>' + jQuery.sap.encodeHTML(code) + '</code></pre>';
	}
});