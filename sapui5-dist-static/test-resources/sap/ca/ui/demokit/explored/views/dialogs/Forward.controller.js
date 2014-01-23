jQuery.sap.require("sap.ca.ui.dialog.factory");

sap.ui.controller("sap.ca.ui.sample.views.dialogs.Forward", {
    onInit:function () {
    },

    onForwardWithList:function (e) {
        sap.ca.ui.dialog.forwarding.start(this.fnStartSearch, this.fnForwardClose);
    },
    
    onForwardWithoutList:function (e) {
        sap.ca.ui.dialog.forwarding.start();
    },
    
    fnStartSearch:function(sQeury){
        //do the backend request based on the sQuery text       
        //...

        //get the results from backend
        var arrAgents =  [{
            UserId: "alan",
            FullName: "Alberto Andersen 1",
            Department: "Manager, Finance Department",
            ImageURL:""
        },{
            UserId: "jagi",
            FullName: "Japie Gierhuizen 2",
            Department: "Manager, Finance Department",
            ImageURL:""
        },{
            UserId: "jagil",
            FullName: "Xavier Zap 3",
            Department: "Senior Manager, Finance Department",
            ImageURL:""
        },{
            UserId: "jagip",
            FullName: "Alberto Andersen 4"
        },{
            UserId: "jagio",
            FullName: "Japie Gierhuizen 5",
            Department: "Manager, Finance Department",
            ImageURL: ""
        },{
            UserId: "jagii",
            FullName: "Xavier Zap 6",
            Department: "Senior Manager, Finance Department"
        },{
            UserId: "jagiu",
            FullName: "Alberto Andersen 7",
            Department: "Manager, Finance Department"
        }];

        //set the results back to the forward dialog
        sap.ca.ui.dialog.forwarding.setFoundAgents(arrAgents);
    },
    
    fnForwardClose:function (oResult) {
        if (oResult.bConfirmed) {
            //oSelectedAgent = oResult.oAgentToBeForwarded;
            jQuery.sap.log.info("ForwardDialog - forward agent userid: " + oResult.oAgentToBeForwarded.UserId + " note: " + oResult.sNote);
            //trigger confirmed forwarding process based on the result parameters          
            //...
            //...
        }
    }
})
;
