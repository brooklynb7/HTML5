jQuery.sap.require("util.Formatter");

sap.ui.jsview("view.Category", {

	getControllerName: function() {
		return "view.Category";
	},
	
	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},
	
	createContent : function(oCon) {

		// create product list
		this.productList = new sap.m.List({}); 
		this.productList.bindAggregation("items", {
			path : "/products", 
			sorter : new sap.ui.model.Sorter("name", false),
			template : new sap.m.StandardListItem({
				title : "{name}",
				description : "{vendor}",
				info : {
					path : "price", 
					formatter : util.Formatter.price
				},
				icon : "{img}",
				iconInset : false,
				iconDensityAware : false,
				type : sap.m.ListType.Navigation,
				tap : [ oCon.productListTap, oCon ]
			})
		});
		
		// create page
		this.page = new sap.m.Page({
			title : "",
			icon : "{img>/icon/ui5}",
			showNavButton : true,
			navButtonTap : [ oCon.navButtonTap, oCon ],
			headerContent : [
				new sap.m.Button({
					icon : "{img>/icon/cart}",
					tap : [ oCon.toCartButtonTap, oCon ]
				})    
			],
			content : [
				this.productList
			] 
		});
		
		return this.page;
	}
});