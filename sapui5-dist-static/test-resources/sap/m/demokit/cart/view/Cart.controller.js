jQuery.sap.require("util.Formatter");
jQuery.sap.require("sap.m.MessageBox");

sap.ui.controller("view.Cart", {

	onInit : function () {
		
		// TODO: remove this global references
		jQuery.sap.declare("app.ref.CartView");
		app.ref.CartView = this.getView();
		
		// set initial ui configuration model
		cfgModel = new sap.ui.model.json.JSONModel({});
		this.getView().setModel(cfgModel, "cfg");
		this._toggleCfgModel();
		
		// init cart
		this.resetCart();
	},
	
	onExit : function () {
		if (this.orderDialog) {
			this.orderDialog.destroy();
		}
		if (this.orderBusyDialog) {
			this.orderBusyDialog.destroy();
		}
	},
	
	resetCart : function () {
		var data = {
			entries : [],
			totalPrice : 0
		};
		var model = new sap.ui.model.json.JSONModel(data);
		this.getView().setModel(model, "cart");
		this._enableEditAndProceedButton();
	},
	
	handleEditOrDoneButtonPress : function (evt) {
		this._toggleCfgModel();
	},
		
	_toggleCfgModel : function () {
		var cfgModel = this.getView().getModel("cfg");
		var data = cfgModel.getData();
		var dataNoSetYet = !data.hasOwnProperty("inDelete");
		var inDelete = (dataNoSetYet) ? true : data.inDelete;
		var bundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
		cfgModel.setData({
			inDelete : !inDelete,
			notInDelete : inDelete,
			listMode : (!inDelete) ? "Delete" : (jQuery.device.is.phone) ? "None": "SingleSelectMaster",
			listItemType : (!inDelete) ? "Inactive" : (jQuery.device.is.phone) ? "Active": "Inactive",
			pageTitle : (inDelete) ? bundle.getText("CART_TITLE_DISPLAY") : bundle.getText("CART_TITLE_EDIT")
		});
	},
	
	handleNavButtonPress : function (evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back");
	},
	
	_enableEditAndProceedButton : function () {
		var view = this.getView();
		enabled = view.getModel("cart").getData().entries.length > 0;
		view.byId("editButton").setEnabled(enabled);
		view.byId("proceedButton").setEnabled(enabled);
	},
	
	addEntry : function (product) {
		
		// find existing entry for product
		var model = this.getView().getModel("cart");
		var data = model.getData();
		var entries = data.entries; 
		var entry = null;
		var entryIndex = -1;
		for (var i = 0 ; i < entries.length ; i ++) {
			if (entries[i].ProductId === product.ProductId) {
				entry = entries[i];
				entryIndex = i;
				break;
			}
		}
		
		if (entry === null) {

			// create new entry
			entry = {
				Id : jQuery.sap.uid(),
				Quantity : 1,
				Name : product.Name,
				ProductId : product.ProductId,
				ProductName : product.Name,
				Price : product.Price,
				SupplierName : product.SupplierName,
				Status : product.status,
				Weight : product.Weight,
				PictureUrl : product.PictureUrl
			};
			data.entries[data.entries.length] = entry;
				
		} else {
			
			// update existing entry
			entry.Quantity = entry.Quantity + 1;
			entry.Name = product.Name;
			entry.Price = product.Price * entry.Quantity;
			entries[entryIndex] = entry;
			data.entries = entries;
		}
		
		// recalculate total price
		data.totalPrice = 0;
		for (var j = 0 ; j < data.entries.length ; j ++) {
			data.totalPrice += parseFloat(data.entries[j].Price);
		}
		
		// update model
		model.setData(data);
		
		// enable buttons
		this._enableEditAndProceedButton();
	},
	
	getTotalQuantity : function (productId) {
		var model = this.getView().getModel("cart");
		var entries = model.getData().entries;
		var sum = 0;
		for (var i = 0 ; i < entries.length ; i++) {
			if (entries[i].ProductId === productId) {
				sum += data[i].Quantity;
			}
		}
		return sum;
	},
	
	handleEntryListPress : function (evt) {
		this._showProduct(evt.getSource());
	},
	
	handleEntryListSelect : function (evt) {
		this._showProduct(evt.getParameter("listItem"));
	},
	
	_showProduct : function (item) {
		
		// nav to page (w/o parameter)
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Product"
		});
		
		// send event to refresh
		var path = item.getBindingContext("cart").getPath();
		var entry = this.getView().getModel("cart").getProperty(path);
		bus.publish("app", "RefreshDetail", {
			ProductId :  entry.ProductId
		});
	},
	
	handleEntryListDelete : function (evt) {
		
		// show confirmation dialog
		var entryId = evt.getParameter("listItem").getBindingContext("cart").getObject().Id;
		var bundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
		sap.ui.getCore().getEventBus().publish("nav", "virtual");
		sap.m.MessageBox.show(
			bundle.getText("CART_DELETE_DIALOG_MSG"),
			null,
			bundle.getText("CART_DELETE_DIALOG_TITLE"),
			[sap.m.MessageBox.Action.DELETE, sap.m.MessageBox.Action.CANCEL],
			jQuery.proxy(function (oAction) {
				// remove virtual state if dialog not closed by browser history
				if (oAction) {
					sap.ui.getCore().getEventBus().publish("nav", "back");
				}
				if (sap.m.MessageBox.Action.DELETE === oAction) {
					var model = this.getView().getModel("cart");
					var data = model.getData();
					var newEntries = jQuery.grep(data.entries, function (entry) {
						var keep = (entry.Id !== entryId);
						if (!keep) {
							data.totalPrice = parseFloat(data.totalPrice).toFixed(2) - parseFloat(entry.Price).toFixed(2);
						}
						return keep;
					});
					data.entries = newEntries;
					data.hasEntries = newEntries.length > 0;
					model.setData(data);
					this._enableEditAndProceedButton();
				}
			}, this)
		);
	},

	handleProceedButtonPress : function (evt) {
		
		var that = this;
		if (!this.orderDialog) {
			
			// create busy dialog
			var bundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
			this.orderBusyDialog = new sap.m.BusyDialog({
				title : bundle.getText("CART_BUSY_DIALOG_TITLE"),
				text : bundle.getText("CART_BUSY_DIALOG_TEXT"),
				showCancelButton : false,
				close : function () {
					sap.ui.getCore().getEventBus().publish("nav", "virtual");
					sap.m.MessageBox.show(
						bundle.getText("CART_ORDER_SUCCESS_MSG"),
						null,
						bundle.getText("CART_ORDER_SUCCESS_TITLE"),
						[sap.m.MessageBox.Action.CLOSE],
						function (oAction) {
							// remove virtual state if dialog not closed by browser history
							if (oAction) {
								sap.ui.getCore().getEventBus().publish("nav", "back");
							}
							// reset cart
							app.ref.CartView.getController().resetCart();
							// show welcome page
							if (!jQuery.device.is.phone) {
								sap.ui.getCore().getEventBus().publish("nav", "to", {
									id : "Welcome"
								});
							}
							// this will jump to the first entry in the browser history, i.e. bring you back to the home page
							jQuery.sap.history.backToHash("");
						}
					);
				}
			});
			
			// create order dialog
			var inputView = sap.ui.view({
				id : "Order",
				viewName : "view.Order",
				type : "XML"
			});
			this.orderDialog = new sap.m.Dialog({
				title : bundle.getText("CART_ORDER_DIALOG_TITLE"),
				stretch: jQuery.device.is.phone,
				content : [
					inputView
				],
				leftButton : new sap.m.Button({
					text : bundle.getText("CART_ORDER_DIALOG_CONFIRM_ACTION"),
					type : "Accept",
					press : function () {
						var inputValid = inputView.getController().checkInput();
						if (inputValid) {
							that.orderDialog.close();
						}
					}
				}),
				rightButton : new sap.m.Button({
					text : bundle.getText("DIALOG_CANCEL_ACTION"),
					press : function () {
						that.orderDialog.close();
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
						that.orderBusyDialog.open();
						setTimeout(function () {
							that.orderBusyDialog.close();
						}, 3500);
					}
				}
			});
		}
		
		// open order dialog
		sap.ui.getCore().getEventBus().publish("nav", "virtual");
		this.orderDialog.open();
	}
});
