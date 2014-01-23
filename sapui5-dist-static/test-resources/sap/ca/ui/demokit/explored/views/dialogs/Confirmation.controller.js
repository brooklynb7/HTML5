jQuery.sap.require("sap.ca.ui.dialog.factory");

sap.ui.controller("sap.ca.ui.sample.views.dialogs.Confirmation", {
    onInit:function () {
    },

    onPressApprove:function (e) {
        //open the confirmation dialog
        sap.ca.ui.dialog.confirmation.open({
            question : "Approve the shopping card submitted by Henry Emerald?",
            showNote : false,
            title : "Approve",
            confirmButtonLabel : "Approve"
        }, this.fnClose);
    },
    
    onPressReject:function (e) {
        //open the confirmation dialog
        sap.ca.ui.dialog.confirmation.open({
            question : "Reject the shopping card submitted by Henry Emerald?",
            showNote : true,
            title : "Reject",
            confirmButtonLabel : "Reject"
        }, this.fnClose);
    },
    
    onPressSubmit:function (e) {
        //open the confirmation dialog
        sap.ca.ui.dialog.confirmation.open({
            question : 'You have selected "Reject", Submit?',
            noteMandatory : true,//default value: false; if adding note is mandatory, the Conform button won't be accepted before the user adds the note.
            title : "Submit Decision", 
            confirmButtonLabel : "Submit"
        }, this.fnClose);
    },
    
    onPressConfirm:function (e) {
        //open the confirmation dialog
        sap.ca.ui.dialog.confirmation.open({
            question : 'Reject the leave request submitted by Frank Jones?',
            showNote : true, //default value: true
            additionalInformation: [{label: "Leave Type", text: "Vacation"},{label: "Between", text: "Jun 26, 2013"},{label: "To", text: "Jun 27, 2013"}, {label: "Comment", text: "Vacation conflict with Mary"}],
            title : "Reject", 
            confirmButtonLabel : "Reject"
        }, this.fnClose);
    },
    
    fnClose:function(oResult){
        if (oResult) {
            jQuery.sap.log.info("ConfirmDialog - isConfirmed: " + oResult.isConfirmed);
            if (oResult.sNote) {
                jQuery.sap.log.info("ConfirmDialog - note: " + oResult.sNote);
            }
        }
    }
})
;
