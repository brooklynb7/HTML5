sap.ui.jsview("todolist.notes", {

	getControllerName : function() {
		return "todolist.notes";
	},

	// combine date and time
	formatDescription : function(record) {
		var description = [];

		if (record.date) {
			description.push(new Date(record.date).toDateString());
		}
		if (record.time) {
			description.push(record.time);
		}

		return description.join(", ");
	},

	createContent : function(oController) {
		var view = this;
		view.sId = "notesView";
		view.setHeight("100%");

		return new sap.m.Page({
			customHeader : new sap.m.Bar({
				contentLeft : [new sap.m.Button({
					icon :  gRoot + "img/list.png",
					press : function() {
						oController.showGroups(this);
					}
				})],
				contentMiddle : [new sap.m.Label({
					text : "{i18n>MY_TODO_LIST}"
				})],
				contentRight : [new sap.m.Button({
					icon :  gRoot + "img/add.png",
					press : function() {
						oController.showDetails();
					}
				})]
			}),
			subHeader : new sap.m.Bar({
				contentMiddle: [new sap.m.SearchField({
					id : "search",
					placeholder : "{i18n>SEARCH_FOR}",
					width: "100%",
					search : function(e) {
						oController.search(e.getParameters().query);
					}
				})]
			}),
			content : [new sap.m.List({
				id : "notesList",
				inset : true,
				headerText : "{i18n>PERSONAL_REMINDERS}",
				mode : "MultiSelect",
				items : {
					path : "/",
					template : new sap.m.StandardListItem({
						title : "{title}",
						iconInset : true,
						type : "Navigation",
						description : {
							path : "date",
							formatter : function() {
								var record = this.getBindingContext().getObject();
								return view.formatDescription(record);
							}
						},
						icon : {
							path : "priority",
							formatter : function(priority) {
								return  gRoot + "img/" + priority + ".png";
							}
						},
						press : function() {
							var record = this.getBindingContext().getObject();
							oController.showDetails(record);
						}
					})
				}
			})]
		});
	}

});
