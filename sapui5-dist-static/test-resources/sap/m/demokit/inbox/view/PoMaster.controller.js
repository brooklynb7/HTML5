jQuery.sap.require("util.Formatter");

sap.ui.controller("view.PoMaster", {

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
	
	onBeforeRendering: function(){
		var oList = this.byId("poItems");
		var poSorter = new sap.ui.model.Sorter("orderNumber", false, true);
		oList.getBinding("items").sort(poSorter);
		
		if(!jQuery.device.is.phone) {
			oList.setSelectedItem(oList.getItems()[1], true);
			sap.ui.getCore().getEventBus().publish("nav", "to", { 
				id : "PoDetail",
				data : {
					context : oList.getItems()[1].getBindingContext("po")
				}
			});
		}
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
					var list = that.getView().byId("poItems");
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
					new sap.m.StandardListItem("PoMasterFilterItemAll", {
						 title: "All",
						 selected: true
					}),
					new sap.m.StandardListItem("PoMasterFilterItemMonth", {
						 title: "Month"
					}),
					new sap.m.StandardListItem("PoMasterFilterItemWeek", {
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
	
	listSelect : function(evt) {
		sap.ui.getCore().getEventBus().publish("nav", "to", {
			id : "PoDetail",
			data : {
				context : evt.getParameter("listItem").getBindingContext("po")
			}
		});
		// TODO: fire selection events instead for non-phones
	},

	tapHomeButton : function(evt) {
		sap.ui.getCore().getEventBus().publish("nav", "back", {});
	},
	
	updateRefresh : function(oDate) {
		var oNewDate = new Date(), iSec = Math
				.floor((oNewDate - this._refreshDate) / 1000);
		sTimeString = "";
		if (iSec < 60) {
			sTimeString = Math.floor(iSec) + " sec ago";
		} else if (iSec > 60 && iSec < 60 * 60) {
			sTimeString = Math.floor(iSec / 60) + " min ago";
		} else if (iSec > 60 * 60 && iSec < 60 * 60 * 24) {
			sTimeString = Math.floor(iSec / 60 / 60)
					+ " hours ago";
		} else if (iSec > 60 * 60 * 24) {
			if (Math.floor(iSec / 60 / 60 / 24) == 1) {
				sTimeString = Math.floor(iSec / 60 / 60 / 24)
						+ " day ago";
			} else {
				sTimeString = Math.floor(iSec / 60 / 60 / 24)
						+ " days ago";
			}
		}

		this._refreshSource.hide();
		this._refreshSource.setDescription("Last Updated: "
				+ sTimeString);
	},

	refresh : function(evt) {
		var oSource = evt.getSource(), that = this;
		this._refreshDate = new Date();
		this._refreshSource = oSource;
		setInterval(function() {
			that.updateRefresh();
		}, 30000);
		setTimeout(function() {
			that.updateRefresh();
		}, 1000);
		this.addRandomData();
	},

	search : function(evt) {
		var searchValue = evt.getSource().getValue();
		var binding = this.getView().byId("poItems")
				.getBinding("items");
		var filter = new sap.ui.model.Filter("supplier",
				sap.ui.model.FilterOperator.Contains,
				searchValue);
		binding.filter([ filter ]);
	},

	approve : function(evt) {

		// hide button
		var list = this.getView().byId("poItems");
		var swipedItem = list.getSwipedItem();
		list.swipeOut();

		// open busy dialog
		if (!this.busyDialog) {
			this.busyDialog = new sap.m.BusyDialog({
				title : "Approving Purchase Order",
				showCancelButton : false,
				close : function() {

					// update model
					var deleteId = swipedItem
							.getBindingContext("po")
							.getObject().id;
					var oModel = sap.ui.getCore()
							.getModel("po");
					var requests = oModel.getData().orders;
					var newRequests = jQuery
							.grep(
									requests,
									function(request) {
										return orders.id != deleteId;
									});
					oModel.setData({
						requests : newRequests
					});

					// show confirmation toast
					sap.m.MessageToast
							.show('The Purchase Order t has been approved.');
				}
			});
		}
		this.busyDialog.open();

		// close busy dialog after 1 sec
		setTimeout(jQuery.proxy(function() {
			this.busyDialog.close();
		}, this), 1000);
	},
	
	addRandomData : function() {
		var oModel = this.getView().getModel("po");
		var oNumberModel = this.getView().getModel("number");
		var aSuppliers = [ "C.E.B. Tokyo", "C.E.B. Berlin",
				"Office Masters", "Reisswolf",
				"Enterprise Office Suppies","Kraut  ÑagçyfoxÑagçyfox", "Simply Software", "Easy" ];
		var aBy = [ "Albert Manager", "Michael Miles",
							"Song Jun", "Joachim Friesinger",
							"Markus Wolf", "Susi Wong", "Ayyampettai Arivudai Nambi Kaliyaperumaal Indiran" ];
		var aEmail = [ "Albert.Manager@the-other-company.com", 
		                 "Michael.Miles@the-other-company.com",
		                 "Song.Jun@the-other-company.com", 
		                 "Joachim.Friesinger@the-other-company.com",
		                 "Markus.Wolf@the-other-company.com", 
		                 "Susi.Wong@the-other-company.com", 
		                 "Ayyampettai.Arivudai.Nambi.Kaliyaperumaal.Indiran@the-other-company.com" ];
		var aPhone = [ "+1 555 111 1111", 
		                 "+1 555 222 2222",
		                 "+1 555 333 3333", 
		                 "+1 555 444 4444",
		                 "+1 555 555 5555", 
		                 "+1 555 666 6666", 
		                 "+1 555 777 7777" ];		
		
		var aCurrency = [ "EUR", "USD",
							"JPY", "AUD", "CHF","YER", "CAD"];
		var aMaterials = [
				{
					"name" : "Headphone",
					"text" : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
					"vendor" : "Sunshine Inc.",
					"price" : "12.00",
					"status" : "Sold out",
					"statusState" : "Error",
					"attachments" : false,
					"notes" : false,
					"people" : true
				},
				{
					"name" : "Mouse Pad",
					"text" : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
					"vendor" : "Monster GmbH",
					"price" : "3.00",
					"status" : "In Stock",
					"statusState" : "None",
					"info" : "10.10.2013",
					"infoState" : "Success",
					"attachments" : true,
					"notes" : true,
					"people" : true
				},
				{
					"name" : "Monitor",
					"text" : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
					"vendor" : "Sunshine Inc.",
					"price" : "45.00",
					"info" : "2 items left",
					"infoState" : "Warning",
					"status" : "In Stock",
					"statusState" : "Success",
					"attachments" : false,
					"notes" : false,
					"people" : false
				},
				{
					"name" : "Optic Mouse",
					"text" : "",
					"vendor" : "A company with a terribly long name that does not fit into a single line.",
					"price" : "15.00",
					"attachments" : true,
					"notes" : false,
					"people" : true
				},
				{
					"name" : "LED TV",
					"text" : "",
					"vendor" : "Samsung",
					"price" : "2300.00",
					"attachments" : true,
					"notes" : false,
					"people" : false
				},
				{
					"name" : "Net Phone (Bluetooth)",
					"text" : "",
					"vendor" : "Phillips",
					"price" : "39.00",
					"attachments" : false,
					"notes" : true,
					"people" : false
				} ,
				{
					"name" : "Conference Sound Station",
					"text" : "",
					"vendor" : "Ñagçyfox text Lorem ipsum ÑagçyfoxÑagçyfox text Lorem ipsum ÑagçyfoxÑagçyfox text Lorem ipsum ÑagçyfoxÑagçyfox text Lorem ipsum Ñagçyfox",
					"price" : "450.00",
					"attachments" : true,
					"notes" : true,
					"people" : true
				},
				{
					"name" : "Paper US Letter",
					"text" : "1000 pieces",
					"vendor" : "Ñagçyfox text Lorem ipsum ÑagçyfoxÑagçyfox text Lorem ipsum ÑagçyfoxÑagçyfox text Lorem ipsum ÑagçyfoxÑagçyfox text Lorem ipsum Ñagçyfox",
					"price" : "1.00",
					"attachments" : true,
					"notes" : true,
					"people" : true
				} ];
		var aNotes = [
				{
					"img" : "img/people/johannes.jpg",
					"text" : "Please order this. Department cost center cannot take over the costs.",
					"date" : "2012-12-03",
					"sender" : aBy[Math.floor(Math.random() * aBy.length)]
				},
				{
					"img" : "img/people/marietta.jpg",
					"text" : "Hi Johannes,\nHmmmmmm. I am not so sure yet.",
					"date" : "2012-12-04",
					"sender" : aBy[Math.floor(Math.random() * aBy.length)]
				},
				{
					"img" : "img/people/marietta.jpg",
					"text" : "Hi,\nHmmmmmm. I am not so sure yet. You know we have so m",
					"date" : "2012-12-04",
					"sender" : aBy[Math.floor(Math.random() * aBy.length)]
				},
				{
					"img" : "img/people/marietta.jpg",
					"text" : "Hi Johannes,\nHmmmmmm. I am not so sure yet. You know we have so much work open for the current project. Long sample text with some weired chars\nÑagçyfox Lorem ipsum Title Ñagçyfox text Lorem ipsum Ñagçyfox",
					"date" : "2012-12-04",
					"sender" : aBy[Math.floor(Math.random() * aBy.length)]
				},
				{
					"img" : "img/people/marietta.jpg",
					"text" : "Hi Johannes,\nHmmmmmm. Ñagçyfox Lorem ipsum Title Ñagçyfox text Lorem ipsum Ñagçyfox I am not so sure yet. You know we have so much work open for the current project. regards Michael",
					"date" : "2012-12-04",
					"sender" : aBy[Math.floor(Math.random() * aBy.length)]
				},
				{
					"img" : "img/people/marietta.jpg",
					"text" : "Hi Johannes,\n\n\rÑagçyfox Lorem ipsum Title Ñagçyfox text Lorem ipsum ÑagçyfoxHmmmmmm. I am not so sure yet. You know we have so much work open for the current project. regards Michael",
					"date" : "2012-12-04",
					"sender" : aBy[Math.floor(Math.random() * aBy.length)]
				} ];
		var aAttachments = [
			{
				"type" : "ppt",
				"description" : "Slide deck for the execution plan",
				"size" : Math.floor(Math.random()*10000) + " KB",
				"date" : "2012-12-16" 
			},
			{
				"type" : "pdf",
				"description" : "A brochure of the desired hotel",
				"size" : Math.floor(Math.random()*10000) + " KB",
				"date" : "2012-12-16" 
			},
			{
				"type" : "zip",
				"description" : "Archive of all those images from my vacation that i have taken while being away for a very long time",
				"size" : Math.floor(Math.random()*10000) + " KB",
				"date" : "2012-12-18"
			}
		];
		
		// create pseudo random PO numbers in the format PO-123457-123-X99
		var aOrderNumbers = Array();
		for(i=0; i<5; i++) { 
			aOrderNumbers.push("PO-" + (Math.floor(Math.random() * 1000000)) + "-" + (Math.floor(Math.random() * 1000)) + "-" + String.fromCharCode(65+((Math.floor(Math.random() * 100)%26))) + (Math.floor(Math.random() * 100)));
		}

		var createRandomData = function() {
			var iAmount = Math.floor(Math.random() * 1000000) + (Math.floor((Math.random() * 100))/100); 
			var sOrderNumber = aOrderNumbers[Math.floor(Math.random() * aOrderNumbers.length)];
			var sSupplier = aSuppliers[Math.floor(Math.random() * aSuppliers.length)];
			var sCurrency = aCurrency[Math.floor(Math.random() * aCurrency.length)];
			var iItems = Math.floor(Math.random() * aMaterials.length/2);
			var iNotes = Math.floor(Math.random() * aNotes.length/2);
			var iAttachments = Math.floor(Math.random() * aAttachments.length/2);
			var iAgo = Math.floor(Math.random() * 10);
			var iBy = Math.floor(Math.random() * aBy.length);
			var sBy = aBy[iBy];
			var sEmail = aEmail[iBy];
			var sPhone = aPhone[Math.floor(Math.random() * aPhone.length)];
			var sFax = aPhone[Math.floor(Math.random() * aPhone.length)];
			var aCurrentItems = [];
			var aCurrentAttachments = [];
			var aCurrentNotes = [];
			var sItemsShort = "";
				
			for (var i=0;i<iItems+1;i++) {
				var oItem = aMaterials[Math.floor(Math.random() * aMaterials.length)];
				if (sItemsShort != "") sItemsShort+=", ";
				sItemsShort+=oItem.name;
				aCurrentItems.push(oItem);
			}
			for (var i=0;i<iNotes+1;i++) {
				var oItem = aNotes[Math.floor(Math.random() * aNotes.length)];
				aCurrentNotes.push(oItem);
			}
			for (var i=0;i<iAttachments+1;i++) {
				var oItem = aAttachments[Math.floor(Math.random() * aAttachments.length)];
				aCurrentAttachments.push(oItem);
			}
			var sAssignments = "Multiple Assigments";
			if(iItems == 1) {
				sAssignments = "Single Assigments";
			}
			var dDeliveryDate = new Date();
			dDeliveryDate.setHours(Math.floor(Math.random() * 2000));
			
			var oOrder = {
				"id" : "lr1",
				"supplier" : sSupplier,
				"value" : iAmount,
				"currency" : sCurrency,
				"description" : (iItems+1) + " Items (" + sItemsShort + ")",
				"agoDays" : iAgo,
				"fromDate" : "2012-12-03",
				"toDate" : "2012-12-16",
				"overlaps" : true,
				"by" : sBy,
				"attachments" : aCurrentAttachments,
				"notes" : aCurrentNotes,
				"orderNumber" : sOrderNumber,
				"accountAssingment" : sAssignments,
				"companyCode": "IDES(1000)",
				"deliveryDate" : dDeliveryDate.toDateString(),
				"incoTerms" : "CPT To my home address",
				"paymentTerms" : "14 days 3%, 30/2%, 45 net",
				"plant":"Werk Hamburg",
				"requestorDetails" : {
					"phoneMobile" : sPhone,
					"phoneWork" : sFax,
					"email" : sEmail,
					"companyName" : "The Other Company",
					"companyStreet" : "Island Avenue",
					"companyCity" : "Palo Alto",
					"companyZIP" : "94022",
					"companyState" : "US"
				},
				"material" : aCurrentItems
			};
			return oOrder;
		};
		var iLength = Math.floor(Math.random() * 25);
		for ( var i = 0; i < iLength; i++) {
			oModel.oData.orders.push(JSON.parse(JSON.stringify(createRandomData())));
		}
		oNumberModel.oData.po.number = oModel.oData.orders.length;
		oModel.checkUpdate();
		oNumberModel.checkUpdate();
	}
});
