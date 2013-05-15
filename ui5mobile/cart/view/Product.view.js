jQuery.sap.require("util.Formatter");

sap.ui.jsview("view.Product", {

	getControllerName: function() {
		return "view.Product";
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
			headerContent : [
				new sap.m.Button({
					icon : "{img>/icon/cart}",
					tap : [ oCon.toCartButtonTap, oCon ]
				})    
			],
			footer: new sap.m.Bar({
				contentMiddle : [
					new sap.m.Button({
						text : "Add to Cart",
						tap : [ oCon.addToCartButtonTap, oCon ]
					}) 
				]
			}),         
			content: [
		  		new sap.m.List({
					items : [
						new sap.m.DisplayListItem({
							label : "Name",
							value : "{name}"
						}),
						new sap.m.DisplayListItem({
							label : "Price",
							value : {
								path : "price", 
								formatter : util.Formatter.price
							},
						}),
						new sap.m.DisplayListItem({
							label : "Vendor",
							value : "{vendor}"
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