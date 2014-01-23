sap.ui.controller("sap.ca.ui.sample.views.control.OverviewTile", {

    onInit : function() {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.OVERVIEW_TILE);
        
        
        var model = new sap.ui.model.json.JSONModel(
        	{WorkItems:[
	            {
	            "Company" : "Advanced Metals International Ltd",
				"CreatedBy" : "Debra E. Smith",
				"Address" : "5322 Otter Ln Middleberge FL 32068",
				"Opportunities" : "5.1 Mio Euro",
				"revenuToDate" : "2.1 Mio Euro ",
				"Rating" : "Silver",
				"LastContact" : "May 5, 2013",
				"NextContact" : "October 12, 2013",
				"contactActive": true
				},
				{
				"Company" : "AEI Cables",
				"CreatedBy" : "Donald Binkley",
				"Address" : "PO Box 1230 Georgetown Grand Cayman CAYMAN ISLANDS - UK",
				"Opportunities" : "5.1 Mio Euro",
				"revenuToDate" : "2.1 Mio Euro ",
				"Rating" : "Silver",
				"LastContact" : "May 5, 2013",
				"NextContact" : "November 25, 2013",	
				"contactActive": false
				},
				{
				    "Company" : "ATA Grinding Processes Ltd",
				"CreatedBy" : "Debra E. Smith",
				"Address" : "5322 Otter Ln Middleberge FL 32068",
				"Opportunities" : "5.1 Mio Euro",
				"revenuToDate" : "2.1 Mio Euro ",
				"Rating" : "Silver",
				"LastContact" : "November 21, 2013",
				"NextContact" : "December 25, 2013"
				},
				{
				    "Company" : "Advanced Liquid Metals International Ltd, planes",
				"CreatedBy" : "Clyde Preston Hall",
				"Address" : "PO Box 1220 Georgetown Super Grand Tour Cayman CAYMAN ISLANDS - United Kingdom",
				"Opportunities" : "5.1 Mio Euro",
				"revenuToDate" : "2.1 Mio Euro ",
				"Rating" : "Silver",
				"LastContact" : "May 5, 2013",
				"NextContact" : "October 12, 2013"
				},
				{
				    "Company" : "British International Industries Ltd, toys and planes ",
				"CreatedBy" : "Theresa Maïerhofer",
				"Address" : "111 Example Lane Doncaster, South Yorkshire England DN59D2 ",
				"Opportunities" : "5.1 Mio Euro",
				"revenuToDate" : "2.1 Mio Euro ",
				"Rating" : "Silver",
				"LastContact" : "May 5, 2013",
				"NextContact" : "October 12, 2013"
				},
				{
				"Company" : "Baric (Consultants) Ltd",
				"CreatedBy" : "Thomas Faber",
				"Address" : "4321 MAPLE ST OAKTON MD 12345-6789",
				"Opportunities" : "5.1 Mio Euro",
				"revenuToDate" : "2.1 Mio Euro ",
				"Rating" : "Silver",
				"LastContact" : "May 5, 2013",
				"NextContact" : "October 12, 2013"
				},
				{
				"Company" : "Cranfield Defence and Security",
				"CreatedBy" : "Sheena Patricia Camille - Camille Prats",
				"Address" : "74 Green St Tunapuna TRINIDAD AND TOBAGO",
				"Opportunities" : "5.1 Mio Euro",
				"revenuToDate" : "2.1 Mio Euro ",
				"Rating" : "Silver",
				"LastContact" : "May 5, 2013",
				"NextContact" : "October 12, 2013",
				},
				{
				"Company" : "Dale Lifting and Handling Ltd",
				"CreatedBy" : " Cheng Li",
				"Address" : "7 301 Houjie Middle of JiangNan Rd Guang Zhou GuangDong 510240 CHINA P R C",
				"Opportunities" : "5.1 Mio Euro",
				"revenuToDate" : "2.1 Mio Euro ",
				"Rating" : "Silver",
				"LastContact" : "May 5, 2013",
				"NextContact" : "October 12, 2013"
				},
				{
				"Company" : "Eastern Petroleum Supplies Ltd",
				"CreatedBy" : "Anna Gianelli",
				"Address" : " PO Box 9239 Dhahran 31311 SAUDI ARABIA ",
				"Opportunities" : "5.1 Mio Euro",
				"revenuToDate" : "2.1 Mio Euro ",
				"Rating" : "Silver",
				"LastContact" : "May 5, 2013",
				"NextContact" : "October 12, 2013"
				},
				{
				"Company" : "Farnborough Aircraft Interiors Ltd ",
				"CreatedBy" : " Yuto Murase",
				"Address" : " 42 1 Motohakone Hakonemaci Ashigarashimo Gun Kanagawa 250 05 JAPAN ",
				"Opportunities" : "5.1 Mio Euro",
				"revenuToDate" : "2.1 Mio Euro ",
				"Rating" : "Silver",
				"LastContact" : "May 5, 2013",
				"NextContact" : "October 12, 2013"
				},
			]});
        
        this.getView().setModel(model);
    },
	onTileTap : function(evt) {
        setTimeout(function(){
            alert("Tile taped");
        }, 100);
	},
	showContact: function(evt) {
        setTimeout(function(){
            alert("Contact tapped");
        }, 100);
	}
	 
});