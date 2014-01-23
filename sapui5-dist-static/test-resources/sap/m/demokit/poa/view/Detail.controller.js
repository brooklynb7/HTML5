jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("sap.m.SelectDialog");

sap.ui.controller("view.Detail", {

	/**
	 * Called by the UI5 runtime to init this controller
	 */
	onInit : function () {
		
		// subscribe for refresh events
		var bus = sap.ui.getCore().getEventBus();
		bus.subscribe("app", "RefreshDetail", this._refresh, this);
	},

	/**
	 * Called by the UI5 runtime to cleanup this controller
	 */
	onExit : function () {
		if (this._recipientDialog) {
			this._recipientDialog.destroy();
			this._recipientDialog = null;
		}
		if (this._lineItemViewDialog) {
			this._lineItemViewDialog.destroy();
			this._lineItemViewDialog = null;
		}
	},

	/**
	 * Refreshes the model
	 */
	_refresh : function (channelId, eventId, data) {
		
		if (data && data.context) {
			
			// set context of selected master object
			this.getView().setBindingContext(data.context);
			
			var context = this.getView().getBindingContext();
			var oModel = new sap.ui.model.json.JSONModel({
				actionsEnabled : context && !!context.getObject()
			});
			this.getView().setModel(oModel, "cfg");
			
			// scroll to top of page
			this.getView().byId("page").scrollTo(0);
		}
	},

	handleSearch : function(oEvent) {
		var filter = [];
		var sVal = oEvent.getParameter("value");

		if(sVal && sVal.length > 0) {
			// create the local filter to apply
			var selectFilter = new sap.ui.model.Filter("LastName", sap.ui.model.FilterOperator.Contains , sVal);
			filter.push(selectFilter);
		}

		//Get the bound items
		var itemsBinding = oEvent.getParameter("itemsBinding");

		// and apply the filter to the bound items, and the Select Dialog will update
		itemsBinding.filter(filter);
	},

	/**
	 * Lazy loading of tab content
	 */
	handleTabSelect : function (evt) {
		var key = evt.getParameter("key");
		var item = evt.getParameter("item");
		var tabBar = evt.getSource();
		if (item.getContent().length === 0) {
			var view = new sap.ui.view({
				id : "tabView" + key,
				viewName : "view.Detail" + key,
				type : "XML"
			});
			item.addContent(view);
		}
	},

	handleLineItemPress : function (evt) {
		sap.ui.getCore().getEventBus().publish("nav", "to", {
			id : "LineItem",
			data : {
				context : evt.getSource().getBindingContext()
			}
		});
	},
	
	handleNavBack : function (evt) {
		sap.ui.getCore().getEventBus().publish("nav", "back");
	},

	handleApprove : function (evt) {
		this._showApproveRejectDialog("approve");
	},
	
	handleReject : function (evt) {
		this._showApproveRejectDialog("reject");
	},
	
	/**
	 * Shows the approve or reject dialog
	 * @param {String} [mode] Allows to differ between APPROVE and REJECT mode
	 */
	_showApproveRejectDialog : function (mode, forwardRecipientName) {
		
		// to be on the safe side
		var selectedDetail = this.getView().getBindingContext().getObject();
		if (!selectedDetail) {
			return;
		}
		
		// get texts
		var bundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
		var dialogTitle = bundle.getText(mode + "DialogTitle");
		var confirmButtonText = bundle.getText(mode + "DialogConfirmAction");
		var busyTitle = bundle.getText(mode + "DialogBusyTitle");
		var successMsg = bundle.getText(mode + "DialogSuccessMsg");
		var confirmMsg = bundle.getText(mode + "DialogConfirmMsg");
		confirmMsg = confirmMsg.replace("{0}", selectedDetail.CreatedByName);
		confirmMsg = confirmMsg.replace("{1}", forwardRecipientName);
		
		// create dialog
		var that = this;
		var dialog = new sap.m.Dialog({
			title : dialogTitle,
			content : [
				new sap.m.Text({
					text : confirmMsg
				}).addStyleClass("sapUiSmallMarginBottom"),
				new sap.m.TextArea({
					rows : 4,
					width : "100%",
					placeholder : bundle.getText("dialogNotePlaceholder")
				})
			],
			contentWidth : "30rem",
			stretchOnPhone : true,
			leftButton : new sap.m.Button({
				text : confirmButtonText,
				press : function () {
					dialog.close();
				}
			}),
			rightButton : new sap.m.Button({
				text : bundle.getText("dialogCancelAction"),
				press : function () {
					dialog.close();
				}
			}),
			afterClose : function (evt) {
				
				// remove virtual state if dialog not closed by browser history
				var pressedButton = evt.getParameter("origin");
				if (pressedButton) {
					sap.ui.getCore().getEventBus().publish("nav", "back");
				}
				
				// open busy dialog if confirmed
				if (pressedButton === this.getLeftButton()) {
					
					// open busy dialog
					var busyDialog = new sap.m.BusyDialog({
						showCancelButton : false,
						title : busyTitle,
						close : function () {
							
							// remove detail from model
							var oModel = sap.ui.getCore().getModel();
							var oData = oModel.getData();
							var oldCollection = oData.PurchaseOrderCollection;
							var newCollection = jQuery.grep(oldCollection, function (detail) {
								return detail.ID !== selectedDetail.ID;
							});
							oData["PurchaseOrderCollection"] = newCollection;
							oModel.setData(oData);
							
							// tell list to update selection
							sap.ui.getCore().getEventBus().publish("app", "SelectDetail");
							
							// the app controller will close all message toast on a "nav back" event
							// this is why we can show this toast only after a delay
							setTimeout(function () {
								sap.m.MessageToast.show(successMsg);
							}, 200);
						}
					});
					busyDialog.open();
					
					// close busy dialog after some delay
					setTimeout(jQuery.proxy(function () {
						busyDialog.close();
						busyDialog.destroy();
					}, this), 2000);
				}
				
				// clean up
				dialog.destroy();
			}
		});
		
		// open dialog
		sap.ui.getCore().getEventBus().publish("nav", "virtual");
		dialog.open();
	},
	
	handleForward : function (evt) {
		// lazy creation of recipient dialog
		if (!this._recipientDialog) {
			this._createRecipientDialog();
		}

		// open dialog
		sap.ui.getCore().getEventBus().publish("nav", "virtual");
		this._recipientDialog.open();
	},

	_createRecipientDialog : function (evt) {
		
		// create the dialog as an internal member
		this._recipientDialog = sap.ui.xmlfragment("view.RecipientHelpDialog", this);
		this._recipientDialog.setModel(sap.ui.getCore().getModel("i18n"), "i18n"); // TODO: remove once ResourceModel issue is fixed
		
		// TODO: sort does not work with GrowingList yet
			/*sorter : new sap.ui.model.Sorter("LastName", false, function (oContext) {
				var lastName = oContext.getProperty("LastName"),
					letter = (lastName && lastName.length > 0) ? lastName.charAt(0).toUpperCase() : "?";
				return {
					key: letter,
					text: letter
				};
			}),*/
	},
	
	closeRecipientDialog : function (evt) {

		// display the reject dialog if an item was selected 
		var selectedItem = evt.getParameter("selectedItem");
		if (selectedItem) {
			sap.ui.getCore().getEventBus().publish("nav", "virtual");
			this._showApproveRejectDialog("forward", selectedItem.getTitle());
		}
	},

	searchRecipientDialog : function (evt) {
		// Now filter the list based on the value in the search field 
		var filter = [];
		var sVal = evt.getParameter("value");
		if(sVal !== undefined) {
			//Get the binded items for the list
			var itemsBinding = evt.getParameter("itemsBinding");
		
			//create the local filter to apply
			var selectFilter = new sap.ui.model.Filter("LastName", sap.ui.model.FilterOperator.Contains , sVal);
			filter.push(selectFilter);
		
			// and apply the filter to the bound items, and the Select Dialog will update
			itemsBinding.filter(filter);
		}
	},
	
	handleLineItemViewChange : function (evt) {
		
		// create dialog
		if (!this._lineItemViewDialog) {
			var view = this.getView();
			this._lineItemViewDialog = new sap.m.ViewSettingsDialog({
				sortItems : [
					new sap.m.ViewSettingsItem({
						text : "Product",
						key : "PurchaseOrderItemID",
						selected: true
					}),
					new sap.m.ViewSettingsItem({
						text : "Quantity",
						key : "Quantity"
					}),
					new sap.m.ViewSettingsItem({
						text : "Delivery Date",
						key : "DeliveryDate"
					}),
					new sap.m.ViewSettingsItem({
						text : "Price",
						key : "Amount"
					})
				],
				confirm : function (evt) {
					var params = evt.getParameters();
					var sortPath = params.sortItem.getKey();
					var sorter = new sap.ui.model.Sorter(sortPath, params.sortDescending);
					var binding = view.byId("lineItemList").getBinding("items");
					binding.sort(sorter);
				}
			});
		}
		
		// open dialog
		var button = this.getView().byId("lineItemViewButton");
		this._lineItemViewDialog.open();
	}
});
