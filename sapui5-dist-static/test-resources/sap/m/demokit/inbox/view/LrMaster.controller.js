jQuery.sap.require("util.Formatter"); 

sap.ui.controller("view.LrMaster", {

	onInit : function() {
	},
	
	onExit : function() {
		if (this.busyDialog) {
			this.busyDialog.destroy();
		}
		if (this.filterPopover) {
			this.filterPopover.destroy();
		}
	},
	
	onBeforeRendering : function() {
		var oList = this.byId("lrItems");
		if(!jQuery.device.is.phone) {
			oList.setSelectedItem(oList.getItems()[0], true);
			sap.ui.getCore().getEventBus().publish("nav", "to", { 
				id : "LrDetail",
				data : {
					context : oList.getItems()[0].getBindingContext("lr")
				}
			});
		}
	},
	
	listSelect : function(evt) {
		sap.ui.getCore().getEventBus().publish("nav", "to", { 
			id : "LrDetail",
			data : {
				context : evt.getParameter("listItem").getBindingContext("lr")
			}
		});
		// TODO: fire selection events instead for non-phones
	},
	
	tapHomeButton : function(evt) {
		sap.ui.getCore().getEventBus().publish("nav", "back", {
			home: "true"
		});
	},
	
	updateRefresh : function(oDate) {
		var oNewDate = new Date(),
			iSec = Math.floor((oNewDate - this._refreshDate)/1000);
			sTimeString = "";
		if (iSec <60) {
			sTimeString = Math.floor(iSec) + " sec ago";
		} else if (iSec>60 && iSec<60*60) {
			sTimeString = Math.floor(iSec/60) + " min ago";
		} else if (iSec>60*60 && iSec<60*60*24) {
			sTimeString = Math.floor(iSec/60/60) + " hours ago";
		} else if (iSec>60*60*24) {
			if (Math.floor(iSec/60/60/24) == 1) {
				sTimeString = Math.floor(iSec/60/60/24) + " day ago";
			} else {
				sTimeString = Math.floor(iSec/60/60/24) + " days ago";
			}
		}
		this._refreshSource.hide();
		this._refreshSource.setDescription("Last Updated: " + sTimeString);
	},
	
	refresh : function(evt) {
		var oSource = evt.getSource(),
			that = this;
		this._refreshDate = new Date();
		this._refreshSource = oSource;
		setInterval(function() {
			that.updateRefresh();
		},30000);
		setTimeout(function() {
			that.updateRefresh();
		},1000);
	},
	
	search : function(evt) {
		var searchValue = evt.getSource().getValue();
		var binding = this.getView().byId("lrItems").getBinding("items");
		var filter = new sap.ui.model.Filter("requestor", sap.ui.model.FilterOperator.Contains, searchValue);
		binding.filter([filter]);
	},
	
	filter : function(evt) {
		
		// create popover (but only once)
		var that = this;
		if (!this.filterPopover) {
			this.filterList = new sap.m.List({
				mode : "SingleSelectLeft",
				includeItemInSelection : true,
				select : function(evt) {
					that.filterPopover.close();
					var key = evt.getParameter("listItem").getTitle();
					var list = that.getView().byId("lrItems");
					var binding = list.getBinding("items");
					var filter;
					if (key === "Month") {
						filter = [ new sap.ui.model.Filter("agoDays", sap.ui.model.FilterOperator.LE, 31) ];
					} else if (key === "Week") {
						filter = [ new sap.ui.model.Filter("agoDays", sap.ui.model.FilterOperator.LE, 7) ];
					} else {
						filter = [ ];
					} 
					binding.filter(filter);
				},
				items : [
					new sap.m.StandardListItem("LrMasterFilterItemAll", {
						 title: "All",
						 selected: true
					}),
					new sap.m.StandardListItem("LrMasterFilterItemMonth", {
						 title: "Month"
					}),
					new sap.m.StandardListItem("LrMasterFilterItemWeek", {
						 title: "Week"
					})
				]
			});
			this.filterPopover = new sap.m.Popover({
				placement : sap.m.PlacementType.Top,
				title : "Show Requests",
				content : [ that.filterList ]
			});
		}
		
		// show popover
		this.filterPopover.openBy(evt.getSource());
	},
	
	approve : function(evt) {

		// hide button
		var list = this.getView().byId("lrItems");
		var swipedItem = list.getSwipedItem(); 
		list.swipeOut(); 
		
		// open busy dialog
		if (!this.busyDialog) {
			this.busyDialog = new sap.m.BusyDialog({
				title : "Approving Leave Request",
				showCancelButton : false,
				close : function() {
					
					// update model
					var deleteId = swipedItem.getBindingContext("lr").getObject().id;
					var oModel = sap.ui.getCore().getModel("lr");
					var requests = oModel.getData().requests;
					var newRequests = jQuery.grep(requests, function(request){
						return request.id != deleteId;
					});
					oModel.setData({requests : newRequests});
					
					// show confirmation toast
					sap.m.MessageToast.show('The leave request has been approved.');
				}
			});
		}
		this.busyDialog.open();
		
		// close busy dialog after 1 sec
		setTimeout(jQuery.proxy(function() {
			this.busyDialog.close();
		}, this), 1000);
	}
});
