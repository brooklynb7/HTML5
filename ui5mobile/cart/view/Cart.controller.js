jQuery.sap.require("sap.m.MessageBox");

sap.ui.controller("view.Cart", {

	onInit : function() {
		this.resetCart();
		var model = new sap.ui.model.json.JSONModel({ 
			inDelete : false,
			notInDelete : true
		});
		this.getView().setModel(model, "ui");
	},
	
	editOrDoneButtonTap : function(evt) {
		var view = this.getView();
		var inDelete = view.getModel("ui").getData().inDelete;
		view.getModel("ui").setData({
			inDelete : !inDelete,
			notInDelete : inDelete
		});
	},
	
	enableEditAndProceedButton : function() {
		var view = this.getView();
		enabled = view.getModel().getData().entries.length > 0;
		view.editButton.setEnabled(enabled);
		view.proceedButton.setEnabled(enabled);
	},
	
	resetCart : function() {
		var data = { 
			entries : [], 
			totalPrice : 0
		};
		var model = new sap.ui.model.json.JSONModel(data);
		this.getView().setModel(model);	
		this.enableEditAndProceedButton();
	},
	
	addEntry : function(product) {
		
		// find existing entry for product
		var model = this.getView().getModel();
		var data = model.getData();
		var entries = data.entries; 
		var entry = null;
		var entryIndex = -1;
		for (var i = 0 ; i < entries.length ; i ++) {
			if (entries[i].productId === product.id) {
				entry = entries[i];
				entryIndex = i;
				break;
			}
		}
		
		if (entry == null) {

			// create new entry
			var entry = {
				id : jQuery.sap.uid(),
				quantity : 1,
				name : "(1) " + product.name,
				price : product.price,
				productId : product.id,
				productName : product.name,
				productPrice : product.price,
				productVendor : product.vendor,
				img : product.img
			};
			data.entries[data.entries.length] = entry;
				
		} else {
			
			// update existing entry
			entry.quantity = entry.quantity + 1;
			entry.name = "(" + entry.quantity + ") " + product.name;
			entry.price = product.price * entry.quantity;
			entries[entryIndex] = entry;
			data.entries = entries;
		}
		
		// recalculate total price
		data.totalPrice = 0;
		for (var i = 0 ; i < data.entries.length ; i ++) {
			data.totalPrice += data.entries[i].price;
		}
		
		// update model
		model.setData(data);
		
		// enable buttons
		this.enableEditAndProceedButton();
	},
	
	getTotalQuantity : function(productId) {
		var model = this.getView().getModel();
		var entries = model.getData().entries;
		var sum = 0;
		for (var i = 0 ; i < entries.length ; i++) {
			if (entries[i].productId === productId) {
				sum += data[i].quantity;
			}
		}
		return sum;
	},
	
	entryListTap : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Entry",
			data : {
				context : evt.getSource().getBindingContext() 
			}
		});
	},
	
	entryListDelete : function(evt) {
		
		// define handler
		var entryId = evt.getParameter("listItem").getBindingContext().getObject().id;
		var handler = jQuery.proxy(function(oAction) {
			if(sap.m.MessageBox.Action.CANCEL !== oAction){
				var model = this.getView().getModel();
				var data = model.getData();
				var newEntries = jQuery.grep(data.entries, function(entry){
					var keep = (entry.id != entryId);
					if (!keep) {
						data.totalPrice = data.totalPrice - entry.price;
					}
					return keep;
				});
				data.entries = newEntries;
				data.hasEntries = newEntries.length > 0;
				model.setData(data);
				this.enableEditAndProceedButton();
			}
		}, this);
		
		// show confirmation dialog
		jQuery.sap.history.addVirtualHistory();
		sap.m.MessageBox.show(
			"Do you want to delete this entry from your cart?", 
			null, 
			"Confirmation",  
			[sap.m.MessageBox.Action.CANCEL, "Delete"],
			handler
		);
	},

	proceedButtonTap : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Order"
		});
	},
	
	navButtonTap : function(evt) { 
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back");
	}
});