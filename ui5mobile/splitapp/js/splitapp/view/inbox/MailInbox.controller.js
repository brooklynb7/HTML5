// The type of list item also needs to be set (see point 3) according to the type of running device. In phone, it should be Navigation, while it's None
// in tablet.
sap.ui.controller("view.inbox.MailInbox", {
	onBeforeFirstShow: function(oEvent){
		if(oEvent.data.filterProperty){
			var oFilter = new sap.ui.model.Filter(oEvent.data.filterProperty, sap.ui.model.FilterOperator.EQ, true);
			this.bindListData([oFilter]);
		}else{
			this.bindListData();
		}
		
		if(oEvent.data.title){
			this.getView().page.setTitle(oEvent.data.title);
		}
	},
	
	bindListData: function(aFilters){
		var that = this;
		this.getView().oList.bindAggregation("items", {
			path: "/items",
			factory: function(sId){
				return new sap.m.StandardListItem(sId, {
					title: "{from}",
					description: "{title}",
					unread: "{unread}",
					info: "{date}",
					//POINT 3
					type: jQuery.device.is.phone? sap.m.ListType.Navigation : sap.m.ListType.None,
					customData: [
						new sap.ui.core.CustomData({
							key: "id",
							value: "{id}"
						}),
					],
					//POINT 2
					tap: [that.onListItemTap, that]
				});
			},
			filters: aFilters
		});
	},
	
	onListSelect: function(oEvent){
		var oBindingContext = oEvent.getParameter("listItem").getBindingContext(),
			sViewId = "detailMail_" + oEvent.getParameter("listItem").data("id");
		
		sap.ui.getCore().getEventBus().publish("nav", "to", {
			viewName: "view.detail.Mail",
			viewId: sViewId,
			data: {
				bindingContext: oBindingContext
			}
		});
	},
	
	onNavButtonTap: function(){
		sap.ui.getCore().getEventBus().publish("nav", "back");
	},
	
	onListItemTap: function(oEvent){
		var oBindingContext = oEvent.oSource.getBindingContext(),
			sViewId = "detailMail_" + oEvent.oSource.data("id");
	
		sap.ui.getCore().getEventBus().publish("nav", "to", {
			viewName: "view.detail.Mail",
			viewId: sViewId,
			data: {
				bindingContext: oBindingContext
			}
		});
	}
});