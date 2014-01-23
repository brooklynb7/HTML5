jQuery.sap.require("util.Formatter");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("sap.m.MessageBox");

sap.ui.controller("view.Product", {

	onInit : function () {
		
		// register for events
		var bus = sap.ui.getCore().getEventBus();
		bus.subscribe("app", "RefreshDetail", this._refreshDetail, this);
	},
	
	_refreshDetail : function (channelId, eventId, data) {
		
		if (data && data.context) {
			
			// simply set context
			this.getView().setBindingContext(data.context);
			
		} else if (data && data.ProductId) {
			
			// compute model path from product id
			var modelData = sap.ui.getCore().getModel().getData();
			for (var i = 0 ; i < modelData.Products.length ; i++) {
				if (modelData.Products[i].ProductId === data.ProductId) {
					this.getView().bindElement("/Products/" + i);
					break;
				}
			}
			
			// scroll to top of page
			this.getView().byId("page").scrollTo(0);
		}
	},
	
	handleAddButtonPress : function (evt) {
		
		var bundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
		var product = this.getView().getBindingContext().getObject();
		if ("D" === product.status) {
			
			// show mesage dialog
			sap.ui.getCore().getEventBus().publish("nav", "virtual");
			sap.m.MessageBox.show(
				bundle.getText("PRODUCT_STATUS_DISCONTINUED_MSG"),
				sap.m.MessageBox.Icon.ERROR,
				bundle.getText("PRODUCT_STATUS_DISCONTINUED_TITLE"),
				[sap.m.MessageBox.Action.CLOSE],
				function (oAction) {
					// remove virtual state if dialog not closed by browser history
					if (oAction) {
						sap.ui.getCore().getEventBus().publish("nav", "back");
					}
				}
			);
			
		} else if ("O" === product.status) {
			
			// show mesage dialog
			sap.ui.getCore().getEventBus().publish("nav", "virtual");
			sap.m.MessageBox.show(
				bundle.getText("PRODUCT_STATUS_OUT_OF_STOCK_MSG"),
				sap.m.MessageBox.Icon.QUESTION,
				bundle.getText("PRODUCT_STATUS_OUT_OF_STOCK_TITLE"),
				[sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
				jQuery.proxy(function (oAction) {
					// remove virtual state if dialog not closed by browser history
					if (oAction) {
						sap.ui.getCore().getEventBus().publish("nav", "back");
					}
					// order
					if (sap.m.MessageBox.Action.OK === oAction) {
						var cartController = app.ref.CartView.getController();
						cartController.addEntry(product);
						// the app controller will close all message toast on a "nav back" event
						// this is why we can show this toast only after a delay
						setTimeout(function () {
							sap.m.MessageToast.show(bundle.getText("PRODUCT_MSG_ADDED_TO_CART"));
						}, 200);
					}
				}, this)
			);
			
		} else if ("A" === product.status || !model.Config.isMock) {
			
			// order
			var cartController = app.ref.CartView.getController();
			cartController.addEntry(product);
			sap.m.MessageToast.show(bundle.getText("PRODUCT_MSG_ADDED_TO_CART"));
		
		} else {
			
			// log error
			jQuery.sap.log.error("Unhandled product status: " + product.status + ", " + model.Config.isMock);
		}
	},
	
	handleCartButtonPress : function () {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Cart"
		});
	},
	
	handleNavButtonPress : function (evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back");
	}
});