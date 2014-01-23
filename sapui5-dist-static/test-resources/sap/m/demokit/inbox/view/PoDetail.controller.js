jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("view.PoDetail", {

	onInit : function() {
		var contactsModel = new sap.ui.model.json.JSONModel("model/contacts.json");
		var oView = this.getView();
		
		oView.setModel(contactsModel, "contacts");
		oView.addEventDelegate({
			// not added the controller as delegate to avoid controller functions with similar names as the events
			onBeforeShow : jQuery.proxy(function(evt) {
				this.onBeforeShow(evt);
			}, this)
		});
		
		if(!jQuery.device.is.phone){
			oView.byId("page").setShowNavButton(false);
		}
	},
	
	onAfterRendering : function() {
		this.updateCounter();
	},
	
	onExit : function() {
		if (this.busyDialog) {
			this.busyDialog.destroy();
		}
		if (this.oActionSheet) {
			this.oActionSheet.destroy();
		}
		if (this.forwardDialog) {
			this.forwardDialog.destroy();
		}
	},
	
	onBeforeShow : function(evt) {
		if (evt.data && evt.data.context) {
			this.getView().setBindingContext(evt.data.context, "po");
		} 
	}, 
	
	switchChange : function() {
		this.updateCounter();
	},
	
	
	sendEmail : function(evt) {
		
		sap.m.URLHelper.triggerEmail(evt.getSource().data("email") || "", "Info", "Dear " + (evt.getSource().data("name") || "") + ",");
	},
	
	updateCounter : function() {
		
		/* 
		 * this UI pattern is not recommended by UX anymore
		 * 
		// calc counter
		var list = this.getView().byId("MaterialList");
		var items = list.getItems();
		var counterApprove = 0;
		var counterReject = 0;
		for (var f = 0 ; f < items.length ; f++ ) {  
			if (items[f].getCells) {
				var cells = items[f].getCells();
				if (cells && cells.length > 0) {
					var switchControl = cells[0];
					(switchControl.getState()) ? counterApprove++ : counterReject++;
				}
			}
		} 
		
		// update ui
		var labelApprove = this.getView().byId("PoDetailLabelApprove");
		var labelReject = this.getView().byId("PoDetailLabelReject");
		labelApprove.setText("(" + counterApprove + ")");
		labelReject.setText("(" + counterReject + ")");
		*/
	},
	
	back : function(evt) {
		sap.ui.getCore().getEventBus().publish("nav", "back", {});
	},
	
	showActionSheet : function(evt) {
		
		if (this.oActionSheet) {
			this.oActionSheet.openBy(evt.getSource());
			return;
		}
		var that = this;
		this.oActionSheet = new sap.m.ActionSheet({
			showCancelButton: false,
			buttons: [
				new sap.m.Button({
					type: sap.m.ButtonType.Default,
					text: "Send Via EMail",
					press : function () {
						that.showSendMailDialog(that);
					}
				}),
				new sap.m.Button({
					type: sap.m.ButtonType.Default,
					text: "Forward",
					press : function () {
						that.showForwardDialog(that);
					}
				})
			],
			showCancelButton : true,
			placement: sap.m.PlacementType.Top,
			cancelButtonPress: function(){
				jQuery.sap.log.info("sap.m.ActionSheet: cancelButton is pressed");
			}
		});
		this.showActionSheet(evt);
		
	},
	showSendMailDialog : function(evt) {
		
		// create buttons
		var cancelButton = new sap.m.Button({
			text: "Cancel",
			press: function() { 
				dialog.close(); 
			}
		});
		var confirmButton = new sap.m.Button({
			text: "Send",
			press: function() { 
				dialog.close(); 
			}
		});
		
		// define the after dialog close function
		var purchaseOrder = this.getView().getBindingContext("po").getObject();
		var afterDialogClose = function(oEvent){
		var that = this;
			var closeButton = oEvent.getParameter("origin");
			if (closeButton === cancelButton) {
				
				// remove virtual state if dialog not closed by browser history
				sap.ui.getCore().getEventBus().publish("nav", "back");
				
			} else if (closeButton === confirmButton) {
				
				// open busy dialog
				if (!this.busyDialog) {
					this.busyDialog = new sap.m.BusyDialog({
						showCancelButton : false,
						close : function() {
							
							// update model
							
							// navigate back
							sap.ui.getCore().getEventBus().publish("nav", "back", { step : 2 });
							
							// do NOT show confirmation toast because back navigation hides it anyway
						}
					});
				}
				this.busyDialog.setTitle("Sending via Email"),
				this.busyDialog.open();
				
				// close busy dialog after 1 sec
				setTimeout(jQuery.proxy(function() {
					this.busyDialog.close();
				}, this), 1000);
			}
		};
		
		function validateEmailInput(oEvent){
			var sValue = this.getValue();
			this.setValueState((sValue && sValue.indexOf("@") > 0) ? sap.ui.core.ValueState.None : sap.ui.core.ValueState.Error);
		};
		
		//create the content
		// create note text area
		var oForm = new sap.ui.commons.form.SimpleForm({editable:true});
		oForm.addContent(new sap.m.Label({text:"To"
	
		}));
		oForm.addContent(new sap.m.Input({
			value: "gustave.goose@somecomp.corp",
			valueStateText: "No valid E-Mail address",
			change: validateEmailInput
		}));
		oForm.addContent(new sap.m.Label({text:"From"}));
		oForm.addContent(new sap.m.Input({
			value: "me@somecomp.corp",
			valueStateText: "No valid E-Mail address",
			change: validateEmailInput
		}));
		oForm.addContent( new sap.m.TextArea({
				rows: 6,
				height: "250px",
				placeholder: "Add mail body (optional)",
				layoutData:new sap.ui.commons.layout.ResponsiveFlowLayoutData({linebreak:true,weight:8})
			})
		);
		/*
		var noteTextArea = new sap.m.TextArea({
			rows: 6,
			width: "100%",
			height: "250px",
			placeholder: "Add mail body (optional)"
		});
		var oSwipeList3 = new sap.m.List({
			width: "100%",
			items : [
			new sap.m.InputListItem({
				label : "To",
				content : new sap.m.Input({
					value: "gustave.goose@somecomp.corp",
					valueStateText: "No valid E-Mail address",
					change: validateEmailInput
				})
			}),
			new sap.m.InputListItem({
				label : "From",
				content : new sap.m.Input({
					value: "me@somecomp.corp",
					valueStateText: "No valid E-Mail address",
					change: validateEmailInput
				})
			})
			]});
		*/
		// open dialog
		sap.ui.getCore().getEventBus().publish("nav", "virtual");
		var dialog = new sap.m.Dialog({
			title: "Send via Email",
			content: [oForm],
			leftButton: confirmButton,
			rightButton: cancelButton,
			afterClose: afterDialogClose
		});
		dialog.setStretch(jQuery.device.is.phone);
		dialog.open();
		
	},
	
	send : function(evt) {
		
		// create buttons
		var cancelButton = new sap.m.Button({
			text: "Cancel",
			press: function() { 
				dialog.close(); 
			}
		});
		var confirmButton = new sap.m.Button({
			text: "Send",
			press: function() { 
				dialog.close(); 
			}
		});
		
		// create note text area
		var noteTextArea = new sap.m.TextArea({
			rows: 6,
			width: "100%",
			placeholder: "Add note (optional)"
		});
		
		// define the after dialog close function
		var leaveRequest = this.getView().getBindingContext("po").getObject();
		var afterDialogClose = function(oEvent){
			
			var closeButton = oEvent.getParameter("origin");
			if (closeButton === cancelButton) {
				
				// remove virtual state if dialog not closed by browser history
				sap.ui.getCore().getEventBus().publish("nav", "back");
				
			} else if (closeButton === confirmButton) {
				
				// open busy dialog
				if (!this.busyDialog) {
					this.busyDialog = new sap.m.BusyDialog({
						showCancelButton : false,
						title : "Sending Approval & Rejections",
						close : function() {
							
							// update model
							var deleteId = leaveRequest.id;
							var oModel = sap.ui.getCore().getModel("po");
							var requests = oModel.getData().requests;
							var newRequests = jQuery.grep(requests, function(request){
								return request.id != deleteId;
							});
							oModel.setData({requests : newRequests});
							
							// navigate back
							sap.ui.getCore().getEventBus().publish("nav", "back", { step : 2 });
							
							// do NOT show confirmation toast because back navigation hides it anyway
						}
					});
				}
				this.busyDialog.open();
				
				// close busy dialog after 1 sec
				setTimeout(jQuery.proxy(function() {
					this.busyDialog.close();
				}, this), 1000);
			}
		};
		
		// open dialog
		sap.ui.getCore().getEventBus().publish("nav", "virtual");
		var dialog = new sap.m.Dialog({
			title: "Send Approval & Rejections",
			content: noteTextArea,
			leftButton: confirmButton,
			rightButton: cancelButton,
			afterClose: afterDialogClose
		});
		dialog.setStretch(jQuery.device.is.phone);
		dialog.open();
	},
	
	showForwardDialog : function(evt) {
		// create buttons
		var that=this;
		var cancelButton = new sap.m.Button({
			text: "Cancel",
			press: function() { 
				that.forwardDialog.close();
			}
		});
		
		// open dialog
		sap.ui.getCore().getEventBus().publish("nav", "virtual");
		if (!this.forwardDialog){
			this.forwardDialog = new sap.m.Dialog({
				title: "Forward",
				contentHeight: "2000px",
				subHeader: new sap.m.Bar({
					contentMiddle: [
						new sap.m.SearchField({
							liveChange: function(evt){
								that.forwardDialog.getContent()[0].getController().search(evt);
							},
							width: "100%"
						})
					]
				}),
				content: sap.ui.view({
					id : "poForwardSearch",
					viewName : "view.PoForwardSearch",
					type : "HTML",
				}),
				rightButton: cancelButton,
			});
			
			this.forwardDialog.setModel(this.getView().getModel("contacts"), "contacts");
			this.forwardDialog.setBindingContext(this.getView().getModel("contacts"), "contacts");
			this.forwardDialog.setStretch(jQuery.device.is.phone);
			
			var contactsSorter = new sap.ui.model.Sorter("name", false, false);
			var list = this.forwardDialog.getContent()[0].byId("contactList");
			list.getBinding("items").sort(contactsSorter);
		}
		
		this.forwardDialog.open();
	}
});
