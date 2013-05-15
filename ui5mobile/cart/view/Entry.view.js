jQuery.sap.require("util.Formatter");

sap.ui.jsview("view.Entry", {

	getControllerName: function() {
		return "view.Entry";
	},
	
	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},
	
	createContent : function(oCon) {

		// create page
		this.page = new sap.m.Page({
			title : "{name}",
			icon : "{img>/icon/ui5}",
			showNavButton : true,
			navButtonTap : [ oCon.navButtonTap, oCon ],
			content: [
		  		new sap.m.List({
					items : [
						new sap.m.DisplayListItem({
							label : "Product",
							value : "{productName}"
						}),
						new sap.m.DisplayListItem({
							label : "Vendor",
							value : "{productVendor}"
						}),
						new sap.m.DisplayListItem({
							label : "Quantity",
							value : "{quantity}"
						}),
						new sap.m.DisplayListItem({
							label : "Total Price",
							value : {
								path : "price", 
								formatter : util.Formatter.price
							},
						}),
						new sap.m.DisplayListItem({
							label : "Single Price",
							value : {
								path : "productPrice", 
								formatter : util.Formatter.price
							},
						})
					],
				}),
				new sap.m.VBox({
					alignItems : sap.m.FlexAlignItems.Center,
					items : [ 
					    new sap.m.Image({
							src : "{img}",
							decorative : true,
							densityAware : false
						})
					]
				})
			] 
		});
		
		return this.page;
	}
});