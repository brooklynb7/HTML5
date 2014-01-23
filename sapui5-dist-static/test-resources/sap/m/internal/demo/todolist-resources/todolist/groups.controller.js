sap.ui.controller("todolist.groups", {

	onInit: function() {
		this._groupsPopover = gCore.byId("groupsPopover");
		this._notesController = gCore.byId("notesView").getController();

		var groupsList = gCore.byId("groupsList"),
			model = new sap.ui.model.json.JSONModel(),
			groupsData = [
				// set different filters and use them as an list items
				this._notesController.getFilter(this._notesController.defaultFilter),
				this._notesController.addFilter("all", gBundle.getText("ALL_TASKS"), function() {
					return true;
				}),
				this._notesController.addFilter("completed", gBundle.getText("COMPLETED"), function(record) {
					return !!record.completed;
				}),
				this._notesController.addFilter("incomplete", gBundle.getText("INCOMPLETE"), function(record) {
					return !record.completed;
				}),
				this._notesController.addFilter("priority", gBundle.getText("HIGH_PRIORITY"), function(record) {
					return record.priority === "prio1";
				}),
				this._notesController.addFilter("overdue", gBundle.getText("OVERDUE"), this._notesController.isOverdue)
			];

		model.setData(groupsData);
		groupsList.setModel(model);
	},

	showList : function(item) {
		this._groupsPopover.close();
		this._notesController.showNotes(item.name);
	}

});
