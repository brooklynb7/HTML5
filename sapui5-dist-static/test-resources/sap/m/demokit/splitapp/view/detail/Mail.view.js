// This is the view in detail area which is instantiate within mailInbox.controller.js.
sap.ui.jsview("view.detail.Mail", {
	getControllerName: function() {
		return "view.detail.Mail";
	},
	
	onBeforeFirstShow: function(oEvent){
		this.getController().onBeforeFirstShow(oEvent);
	},
	
	createContent : function(oController) {
		this.oOuterBox = new sap.m.VBox({
			items: [
				new sap.m.HBox({
					items: [ 
						new sap.m.Text({
							text: "{title}"
						}),
						new sap.m.Image({
							src: {
								path: "important",
								formatter: function(bValue){
									if(bValue){
										return "img/important.png";
									}else{
										return "img/important_grey.png";
									}
								}
							}
						})],
					justifyContent : "SpaceBetween"
				}),

				new sap.m.VBox({
					items: [
						new sap.m.Text({
							text: {
								path: "from",
								formatter: function(sValue) {
									return "From: " + sValue;
								}
							}
						}),
						new sap.m.Text({
							text : "{date}"
						}),
						new sap.m.Text({
							text : "{content}"
						})]
				}) ]
		});

		this.page = new sap.m.Page({
			title: "{title}",
			showNavButton: jQuery.device.is.phone,
			icon: "{img>/icon/UI5}",
			navButtonText: "Back",
			navButtonPress: [oController.onNavButtonTap, oController],
			content: [this.oOuterBox]
		}).addStyleClass("sapUiStdPage");

		return this.page;
	}
});
