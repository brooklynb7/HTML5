sap.ui.jsview("todolist.details", {

	getControllerName : function() {
		return "todolist.details";
	},

	createContent : function(oController) {

		// load custom textarea control
		jQuery.sap.require("my.controls.Textarea");

		return new sap.m.Page("detailsPage", {
			customHeader : new sap.m.Bar({
				contentLeft : [new sap.m.Button({
					text : "{i18n>BACK}",
					type : "Back",
					press : function() {
						oController.goBack();
					}
				})],
				contentMiddle : [new sap.m.Label({
					text : "{i18n>DETAILS}"
				})]
			}),
			content : [new sap.m.List({
				inset : false,
				width : "100%",
				items : [new sap.m.InputListItem({
					label : "Title",
					content : new sap.m.Input({
						id : "title",
						maxLength : 150,
						placeholder : "{i18n>TITLE}",
						type : "Text",
						value : "{/title}"
					})
				}), new sap.m.InputListItem({
					label : "{i18n>DATE}",
					content : new sap.m.Input({
						id : "date",
						placeholder : "{i18n>DATE}",
						type : "Date",
						value: "{/date}"
					})
				}), new sap.m.InputListItem({
					label : "{i18n>TIME}",
					content : new sap.m.Input({
						id: "time",
						placeholder : "{i18n>TIME}",
						type : "Time",
						value: "{/time}"
					})
				}), new sap.m.InputListItem({
					label : "{i18n>PRIORITY}",
					content : new sap.m.Select({
						id : "priority",
						selectedItem : "prio1",
						items : [new sap.ui.core.Item({
							id : "prio0",
							text : "{i18n>LOW}"
						}), new sap.ui.core.Item({
							id : "prio1",
							text : "{i18n>HIGH}"
						})]
					})
				})]
			}), new my.controls.Textarea({
				id : "notes",
				width : "100%",
				height : "200px",
				placeholder : "{i18n>NOTES}",
				value: "{/notes}"
			}), new sap.m.Button({
				text : "{i18n>SAVE}",
				icon : $.os.ios ? (gRoot + "img/accept.png") : null,
				type : "Accept",
				width : "100%",
				press : function() {
					oController.save();
				}
			}), new sap.m.Button({
				text : "{i18n>DELETE}",
				icon :  $.os.ios ? (gRoot + "img/cancel.png") : null,
				type : "Reject",
				width : "100%",
				press : function() {
					oController.remove();
				}
			})]
		});
	}
});
