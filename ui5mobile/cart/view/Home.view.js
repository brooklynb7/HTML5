jQuery.sap.require("util.Formatter");

sap.ui.jsview("view.Home", {

	getControllerName: function() {
		return "view.Home";
	},
	
	createContent : function(oCon) {

		// create product list
		this.productList = new sap.m.List({}); 
		this.productList.bindAggregation("items", {
			path : "/products", 
			sorter : new sap.ui.model.Sorter("name", false),
			template : new sap.m.StandardListItem({
				title : "{name}",
				icon : "{img}",
				iconInset : false,
				iconDensityAware : false,
				type : sap.m.ListType.Navigation,
				description : "{vendor}",
				info : {
					path : "price", 
					formatter : util.Formatter.price
				},
				tap : [ oCon.productListTap, oCon ]
			})
		});
		
		// create categeory list
		this.categoryList = new sap.m.List({
			headerText : "Categories",
			showNoData : false
		}); 
		this.categoryList.bindAggregation("items", {
			path : "/categories", 
			sorter : new sap.ui.model.Sorter("name", false),
			template : new sap.m.StandardListItem({
				title : "{name}",
				counter : "{count}",
				type : sap.m.ListType.Navigation,
				customData : [
					new sap.ui.core.CustomData({
						key: "id",
						value: "{id}" 
					}),
				],
				tap : [ oCon.categoryListTap, oCon ]
			})
		});
		
		// create search field
		this.searchField = new sap.m.SearchField("searchField", {
			placeholder : "Search for products",
			value : "",
			layoutData : new sap.m.FlexItemData({growFactor: 1}),
			liveChange : [ oCon.searchLiveChange, oCon ]
		});
		
		// create page
		this.page = new sap.m.Page({
			title : "Shopping Cart",
			icon : "{img>/icon/ui5}",
			headerContent : [
				new sap.m.Button({
					icon : "{img>/icon/cart}",
					tap : [ oCon.toCartButtonTap ]
				})
			],
			content : [
				new sap.m.Bar({
					enableFlexBox : true,
					contentMiddle : [ this.searchField ]
				}),
				this.productList,
				this.categoryList
			] 
		});
		
		// done
		return this.page;
	}
});