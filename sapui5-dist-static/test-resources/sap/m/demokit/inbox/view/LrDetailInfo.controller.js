sap.ui.controller("view.LrDetailInfo", {

	onInit : function() {
	},
	
	onExit : function() {
		if (this.popover) {
			this.popover.destroy();
		}
	},
	
	showCalendar : function(evt) {

		if (jQuery.device.is.phone) {
			
			// navigate to calendar page (which is lazy loaded)
			sap.ui.getCore().getEventBus().publish("nav", "to", { 
				id : "LrCalendar",
				data : {
					context : this.getView().getBindingContext("lr")
				}
			});
			
		} else {
			
			// create popover (but only once)
			var that = this;
			if (!this.popover) {
				this.popover = new sap.m.Popover({
					placement : sap.m.PlacementType.Right,
					title : "Team Calendar",
					contentWidth: '600px',
					content : sap.ui.view({
						id : "LrCalendarOnly",
						viewName : "view.LrCalendarOnly",
						type : "HTML"
					}),
					rightButton : new sap.m.Button({
						text : "Close",
						press : function() { 
							that.popover.close(); 
						},
					})
				});
			}
			
			// show popover
			this.popover.openBy(evt.getSource());
		}
	}
});