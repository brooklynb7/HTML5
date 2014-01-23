sap.ui.controller("todolist.notes", {

	onInit : function() {
		this._model = new sap.ui.model.json.JSONModel();
		this._busyDialog = new sap.m.BusyDialog({
			title : gBundle.getText("LOADING")
		});

		this._notesList = gCore.byId("notesList");
		this._notesList.setModel(this._model);
		this._notesList.attachSelect(this._onSelect, this);

		// to catch afterRendering event of list we need to add delegate
		// because list selection is possible after rendering
		this._notesList.addDelegate({
			onAfterRendering : $.proxy(function() {
				this._onAfterRendering();
			}, this)
		});

		// catch storage events and process
		my.storage.attachEvent("create", function() {
			this.showNotes(this.defaultFilter);
		}, this).attachEvent("edit", function() {
			this.showNotes(this._currentFilter);
		}, this).attachEvent("remove", function() {
			this.showNotes(this._currentFilter);
		}, this);

		// set default filter
		this.defaultFilter = "personal";
		this.addFilter(this.defaultFilter, gBundle.getText("PERSONAL_REMINDERS"), this._isPersonal);
		this.showNotes();
	},

	// get the records that we see on the screen useful for filtering
	_getCurrentRecords : function() {
		return $.grep(my.storage.get(), this._filters[this._currentFilter].grep).reverse();
	},

	// checks incomplete tasks and only today completed tasks
	_isPersonal : function(record) {
		if (!record.completed) {
			return true;
		}
		if (new Date(record.completed).toDateString() == new Date().toDateString()) {
			return true;
		}
		return false;
	},

	// on select toggle completed/incomplete
	_onSelect : function(event) {
		var item = event.getParameters().listItem,
			record = item.getBindingContext().getObject();

		my.storage.setComplete(record.index, item.isSelected());
		item.toggleStyleClass("overdue", !record.completed && this.isOverdue(record));
	},

	// check completed tasks and indicate overdue tasks
	_onAfterRendering : function() {
		$.each(this._notesList.getItems(), $.proxy(function(index, item) {
			var record = item.getBindingContext().getObject();
			if (record.completed) {
				item.setSelected(true);
			}
			if (!record.completed && this.isOverdue(record)) {
				item.addStyleClass("overdue");
			}
		}, this));
	},

	// add filter with grep function and return filter as object
	// then we can use it as a JSON object
	addFilter : function(name, title, grep) {
		this._filters = this._filters || {};
		return (this._filters[name] = {
			name : name,
			title : title,
			grep : grep
		});
	},

	getFilter : function(name) {
		return this._filters[name];
	},

	isOverdue : function(record) {
		var date, now = +new Date();
		if (record.date) {
			date = record.date;
			if (record.time) {
				date += " " + record.time;
			}

			date = +new Date(date);
			if (!isNaN(date) && date < now) {
				return true;
			}
		}
		return false;
	},

	// search current records
	search : function(query) {
		var records = this._getCurrentRecords();
		if (query) {
			records = my.storage.search(query, records);
		}
		this._model.setData(records);
	},

	// show all notes/tasks depending on filter
	showNotes : function(sFilter) {
		this._currentFilter = sFilter || this._currentFilter || this.defaultFilter;
		this._model.setData(this._getCurrentRecords());
		this._model.updateBindings(true);
		this._notesList.setHeaderText(this._filters[this._currentFilter].title);
	},

	// load groups view on the fly once
	// then show it
	showGroups : function(btn) {
		if (!this._groupsPopover) {
			this._busyDialog.open();
			var view = sap.ui.jsview("todolist.groups");
			this._groupsPopover = view.getContent()[0];
			this._busyDialog.close();
		}
		this._groupsPopover.openBy(btn);
	},

	// load details view on the fly once
	// then show according the record
	showDetails : function(record) {
		if (!this._detailsView) {
			this._busyDialog.open();
			this._detailsView = sap.ui.jsview("todolist.details");
			this._busyDialog.close();
		}
		this._detailsView.getController().show(record);
	},

	// delete created instances onInit
	onExit : function() {
		//TODO: detach events from storage
		delete this._busyDialog;
		delete this._model;
	}

});
