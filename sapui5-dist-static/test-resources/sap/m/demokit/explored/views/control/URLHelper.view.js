sap.ui.jsview("views.control.urlHelper", {

	createContent : function (oController) {

		// CODESNIP_START
		var person = {
			name : "John Smith",
			tel : "+49 6227 747474",
			sms : "+49 173 123456",
			email : "john.smith@sap.com",
			website : "http://www.sap.com"
		};
		
		var list = new sap.m.List({
			headerText : person.name,
			items : [
				new sap.m.DisplayListItem({
					label : "Telephone",
					value : person.tel,
					type : "Active",
					press : function () {
						sap.m.URLHelper.triggerTel(person.tel);
					}
				}),
				new sap.m.DisplayListItem({
					label : "SMS",
					value : person.sms,
					type : "Active",
					press : function () {
						sap.m.URLHelper.triggerSms(person.sms);
					}
				}),
				new sap.m.DisplayListItem({
					id : "email",
					label : "Email",
					value : person.email,
					type : "Active",
					press : function () {
						sap.m.URLHelper.triggerEmail(person.email, "Info", "Dear " + person.name + ",");
					}
				}),
				new sap.m.DisplayListItem({
					id : "website",
					label : "Website",
					value : person.website,
					type : "Active",
					press : function () {
						sap.m.URLHelper.redirect(person.website, true);
					}
				})
			]
		});
		// CODESNIP_END

		return new sap.m.VBox({
			items : [
				list,
				util.UiFactory.createDescription('The URL Helper is an API to easily trigger a phone\'s native apps like E-Mail, Telephone and SMS. It can be used with any UI control but typically an active Display List Item is chosen', "All")
			]
		});
	}
});