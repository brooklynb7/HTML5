jQuery.sap.require("model.Config");

sap.ui.controller("view.Group", {

	onInit : function() {
		
		// set ui model
		var oModel = new sap.ui.model.json.JSONModel({
			listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
			listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive",
			listPageSize : model.Config.getPageSize()
		});
		this.getView().setModel(oModel, "ui");
		
		// remove footer on phone
		if (jQuery.device.is.phone) {
			this.getView().byId("page").destroyFooter();
		}
		
		// subscribe to onBeforeShow events
		this.getView().addEventDelegate({
			onBeforeShow : jQuery.proxy(function(evt) {
				this.onBeforeShow(evt);
			}, this)
		});
	},
	
	onBeforeShow : function(evt) {
		if (evt.data && evt.data.context) {
			this.getView().setBindingContext(evt.data.context);
		}
	},
	
	toFavorite : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Favorite"
		});
	},
	
	navBack : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back");
	},
	
	selectIconList : function(evt) {
		this._showDetail(evt.getParameter("listItem"));
	},
	
	pressIconListItem : function(evt) {
		this._showDetail(evt.getSource());
	},
	
	_showDetail : function(item) {
		
		// tell app controller to navigate
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Detail"
		});
		
		// tell detail to update
		bus.publish("app", "RefreshDetail", {
			name : item.getBindingContext().getObject().name
		});
	}
});