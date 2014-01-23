sap.ui.controller("todolist.details", {

	onInit : function() {
		this._page = this.getView().getContent()[0];
		gApp.addPage(this._page);

		this._title = gCore.byId("title");
		this._priority = gCore.byId("priority");
		this._model = new sap.ui.model.json.JSONModel();
		this._page.setModel(this._model);
		this._isSpeechAvailable = (typeof document.createElement("input").webkitSpeech != "undefined");

		// enable speech input if possible after rendering
		this._title.addDelegate({
			onAfterRendering : $.proxy(function() {
				if (this._isSpeechAvailable) {
					this._title.$().attr("x-webkit-speech", "yes");
				}
			}, this)
		});
	},

	_validate : function() {
		// check if title is empty
		var title = gCore.byId("title");
		if (!$.trim(title.getValue())) {
			title.setValueState("Error");
			return false;
		} else {
			title.setValueState("None");
			return true;
		}
	},

	save : function() {
		if (!this._validate()) {
			return;
		}

		// get record from model and overwrite priority
		// because no way to bind selected item changes
		var record = $.extend(this._model.getData(), {
			priority : this._priority.getSelectedItem().getId()
		});
		my.storage.save(record);
		this.goBack();
	},

	show : function(record) {
		record = record || {
			priority : "prio0" // default value for priority
		};

		gApp.to(this._page, "slide");
		this._model.setData(record);

		// set priority because we cannot bind selected item
		this._priority.setSelectedItem(record.priority);
	},

	remove : function() {
		//TODO: change confirm with dialog with OK/CANCEL buttons
		if (confirm(gBundle.getText("ARE_YOU_SURE"))) {
			var record = this._model.getData();
			my.storage.remove(record.index);
			this.goBack();
		}
	},

	goBack : function() {
		gApp.back();
	},

	onExit : function() {
		delete this._model;
	}

});
