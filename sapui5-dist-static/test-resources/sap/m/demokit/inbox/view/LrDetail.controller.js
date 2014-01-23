jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("view.LrDetail", {

	onInit : function() {
		var oView = this.getView();
		
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
	
	onExit : function() {
		if (this.busyDialog) {
			this.busyDialog.destroy();
		}
		if (this.popover) {
			this.popover.destroy();
		}
	},
	
	onBeforeShow : function(evt) {
		if (evt.data && evt.data.context) {
			this.getView().setBindingContext(evt.data.context, "lr");
		} 
	}, 
	
	back : function(evt) {
		sap.ui.getCore().getEventBus().publish("nav", "back", {});
	},
	
	showRequestor : function(evt) {
		
		if(jQuery.device.is.phone){
			
			// navigate to business card page (which is lazy loaded)
			sap.ui.getCore().getEventBus().publish("nav", "to", { 
				id : "LrBCard",
				data : {
					context : this.getView().getBindingContext("lr")
				}
			});
			
		} else {
			
			// create popover (but only once)
			var that = this;
			if (!this.popover) {
				this.popover = new sap.m.Popover({
					placement: sap.m.PlacementType.Right,
					title: "Business Card",
					content: sap.ui.view({
						id : "LrBCardOnly",
						viewName : "view.LrBCardOnly",
						type : "HTML"
					}),
					rightButton: new sap.m.Button({
						text: "Close",
						press: function() { 
							that.popover.close(); 
						},
					}),
					footer : new sap.m.Bar({
						contentMiddle : [
							new sap.m.Button({
								text : "Send Message",
								press : function() { }
							}),
							new sap.m.Button({
								text : "Add to Contacts",
								press : function() { }
							})
						]
					})
				});
			}
			
			this.popover.setBindingContext(this.getView().getBindingContext("lr"), "lr");
			// show popover
			this.popover.openBy(evt.getParameters().domRef);
		}
	},
	
	approve : function(evt) {
		this.showApproveRejectDialog("Approve Leave Request", "Confirm", "Approving Leave Request")
	},
	
	reject : function(evt) {
		this.showApproveRejectDialog("Reject Leave Request", "Confirm", "Rejecting Leave Request")
	},
	
	showApproveRejectDialog : function(dialogTitle, confirmButtonText, busyDialogTitle) {
		var leaveRequest = this.getView().getBindingContext("lr").getObject();
		if(!leaveRequest) { // CSN#1835804/2013
			return;
		}
		
		// create buttons
		var cancelButton = new sap.m.Button({
			text: "Cancel",
			press: function() { 
				dialog.close(); 
			}
		});
		var confirmButton = new sap.m.Button({
			text: confirmButtonText,
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
						close : function() {
							
							// update model
							var deleteId = leaveRequest.id;
							var oModel = sap.ui.getCore().getModel("lr");
							var requests = oModel.getData().requests;
							var newRequests = jQuery.grep(requests, function(request){
								return request.id != deleteId;
							});
							oModel.setData({requests : newRequests});
							
							//update number model
							var oNumberModel = sap.ui.getCore().getModel("number");
							var iRequestCount = newRequests.length;
							var oNumberData = oNumberModel.getData();
							oNumberData.lr.number = iRequestCount;
							oNumberModel.setData(oNumberData);
							
							// navigate back
							sap.ui.getCore().getEventBus().publish("nav", "back", { step : 2 });
							
							// do NOT show confirmation toast because back navigation hides it anyway
						}
					});
				}
				this.busyDialog.setTitle(busyDialogTitle),
				this.busyDialog.open();
				
				// close busy dialog after 1 sec
				setTimeout(jQuery.proxy(function() {
					this.busyDialog.close();
				}, this), 1000);
			}
		}
		
		// open dialog
		sap.ui.getCore().getEventBus().publish("nav", "virtual");
		var dialog = new sap.m.Dialog({
			title: dialogTitle,
			content: noteTextArea,
			leftButton: confirmButton,
			rightButton: cancelButton,
			afterClose: afterDialogClose
		});
		dialog.open();
	}
});