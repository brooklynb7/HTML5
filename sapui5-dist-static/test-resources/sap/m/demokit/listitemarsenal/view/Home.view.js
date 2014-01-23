jQuery.sap.require("arsenal.control.SpecialListItem");
jQuery.sap.require("arsenal.control.ListContent");
		
sap.ui.jsview("view.Home", {

	getControllerName: function() {
		return "view.Home";
	},
	
	createContent : function(oController) {

		this.page = new sap.m.Page("page1", {
			title: "List Item Arsenal",
			showNavButton: false,
			icon: "{img>/icon/ui5}" 
		});

		this.page.addContent(new sap.m.Text("description", {
			text : 'This app serves as a source of inspiration how to build custom list items as notepad controls.'
		}));
		
		var oList = new sap.m.List({headerText: "List Item Arsenal"});

		/*var oListItem = new arsenal.control.SpecialListItem({
			name: "{data>/name}",
			description: "{data>/description}",
			price: "{data>/price}",    	
			currency: "{data>/currency}",
			image: "{img>/icon/elevator}"
		}).addStyleClass('baseListCSS');
		oList.addItem(oListItem);*/

		var oListItem2 = new sap.m.CustomListItem({ 
			content: [
				new arsenal.control.ListContent({
					name: "{data>/name}",
					description: "{data>/description}",
					price: "{data>/price}",    	
					currency: "{data>/currency}",
					image: "{img>/icon/elevator}"
				})
			]
		});
		oList.addItem(oListItem2);

		this.page.addContent(oList);

		// done
		return this.page;
	}
});