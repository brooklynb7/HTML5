
/*
 * my.storage definition
 * to provide events inherited from event provider
 * uses different storages(local as default) to save records as string
 */
sap.ui.base.EventProvider.extend("my.Storage", {

	constructor : function(engine, key) {
		this._key = key || "todolist";
		this._engine = engine || window.localStorage;
		this._records = $.parseJSON(this._engine.getItem(this._key) || "[]");
		sap.ui.base.EventProvider.apply(this);
	},

	_update : function() {
		try {
			this._engine.setItem(this._key, JSON.stringify(this._records));
			return true;
		} catch(e) {
			this.fireEvent("error", this._records);
			return false;
		}
	},

	_isIndexValid : function(index) {
		if (typeof index == "number") {
			return (index >= 0 && index < this._records.length);
		}
		return false;
	},

	get : function (index) {
		if (typeof index == "undefined") {
			return this._records;
		}
		if (this._isIndexValid(index)) {
			return this._records[index];
		}
		return null;
	},

	save : function (record) {
		var action, index = record.index;
		if (typeof index == "undefined") {
			action = "create";
			record.index = this._records.length;
			this._records.push(record);
		} else if (this._isIndexValid(index)) {
			action = "edit";
			this._records[index] = record;
		} else {
			return false;
		}

		if (this._update()) {
			this.fireEvent(action, record);
			return true;
		}
		return false;
	},

	remove : function (index) {
		var record, i, len;
		if (this._isIndexValid(index)) {
			record = this._records.splice(index, 1);
			for (i = index, len = this._records.length; i < len; i++) {
				this._records[i].index--;
			}

			if (this._update()) {
				this.fireEvent("remove", record[0]);
				return true;
			}
		}
		return false;
	},

	setComplete : function(index, completed) {
		if (this._isIndexValid(index)) {
			if (completed) {
				this._records[index].completed = +new Date();
			} else {
				delete this._records[index].completed;
			}

			this._update();
		}
		return this;
	},

	search : function(query, records) {
		var re = new RegExp(query, "i");
		records = records || this._records;
		return $.grep(records, function(record) {
			return (re.test(record.title))
				|| (record.notes && re.test(record.notes))
				|| (record.time && re.test(record.time))
				|| (record.date && re.test(record.date));
		});
	},

	sort : function (field, order) {
		if (order === "DESC") {
			this._records.sort(function (r1, r2) {
				return r1[field] < r2[field];
			});
		} else {
			this._records.sort(function (r1, r2) {
				return r1[field] > r2[field];
			});
		}
		return this;
	}
});

// create storage object with default values
my.storage = new my.Storage();