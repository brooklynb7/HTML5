sap.ui.jsview("view.Order", {

	getControllerName: function() {
		return "view.Order";
	},
	
	createContent : function(oCon) {

		// create busy dialog
		this.busyDialog = new sap.m.BusyDialog({
			title : "Submitting Order",
			text : 'Your order is now submitted to our shop system.',
			showCancelButton : false,
			close : [ oCon.busyDialogClose, oCon ]
		});
		
		// create input controls
		this.inputName = new sap.m.Input({
			value: {
				path : "name",
				type : new sap.ui.model.type.String(null, {minLength: 1, maxLength: 30})
			},
			placeholder: "Name",
			type: sap.m.InputType.Text,
		});
		this.inputAddress =  new sap.m.Input({
				value: {
					path : "address",
					type : new sap.ui.model.type.String(null, {minLength: 1, maxLength: 30})
				},
				placeholder: "Address",
				type: sap.m.InputType.Text,
		});
		this.inputMail = new sap.m.Input({
			value: {
				path : "mail",
				type : new sap.ui.model.type.String(null, {minLength: 1, maxLength: 40, contains: "@"})
			},
			placeholder: "Mail",
			type: sap.m.InputType.Email,
		});
		this.inputTel = new sap.m.Input({
			value: {
				path : "tel",
				type : new sap.ui.model.type.String(null, {minLength: 1, maxLength: 20})
			},
			placeholder: "Telefon",
			type: sap.m.InputType.Tel,
		});
		this.inputNumber = new sap.m.Input({
			value: {
				path : "number",
				type : new sap.ui.model.type.String(null, {minLength : 16, maxLength: 16})
			},
			placeholder: "Number",
			type: sap.m.InputType.Number,
		});
		this.selectCard = new sap.m.Select({
			items: [
				new sap.ui.core.Item({text: "American Express", key: "AE"}),
		    	new sap.ui.core.Item({text: "Mastercard", key: "MC"}),
				new sap.ui.core.Item({text: "VISA", key: "VISA"})
			]
		});
		this.checkBoxNewsletter = new sap.m.CheckBox({
			value : "{newsletter}",
			selected : true
		});
		this.textArea = new sap.m.TextArea("commentArea", { 
			rows : 5
		});
		
		// create order button
		this.orderButton = new sap.m.Button({
			text : "Order",
			type : sap.m.ButtonType.Accept,
			tap : [ oCon.orderButtonTap, oCon ]
		});
		
		// create page
		this.page = new sap.m.Page({
			title : "Your Data",
			icon : "{img>/icon/ui5}",
			showNavButton : true,
			navButtonTap : [ oCon.navButtonTap, oCon ],
			headerContent : [ this.orderButton ],
			content : [
				new sap.m.List({
					headerText : "Contact",
					items: [
						new sap.m.InputListItem({
							label: "Name",
							content: this.inputName
						}),
						new sap.m.InputListItem({
							label: "Address",
							content: this.inputAddress
						}),
						new sap.m.InputListItem({
							label: "Telefon",
							content: this.inputTel
						}),
						new sap.m.InputListItem({
							label: "EMail",
							content: this.inputMail
						})
					]
				}),
				new sap.m.List({
					headerText : "Credit Card",
					items: [
						new sap.m.InputListItem({
							label: "Type",
							content: this.selectCard
						}),
						new sap.m.InputListItem({
							label: "Number",
							content: this.inputNumber
						}),
					]
				}),
				new sap.m.List({
					headerText : "Newsletter",
					items: [
						new sap.m.InputListItem({
							label: "Subscribe Now",
							content: this.checkBoxNewsletter
						})
					]
				}),
				new sap.m.List({
					headerText : "Additional Comments",
					showNoData : false,
					items: [
					]
				}),
				this.textArea
			]
		});
		
		return this.page;
	}
});