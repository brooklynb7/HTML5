jQuery.sap.require("sap.ca.ui.message.message");

sap.ui.controller("sap.ca.ui.sample.views.dialogs.MessageHandling", {
    onInit:function () {
    },

    onPressMessageToast:function (e) {
        // show the success message in a MessageToast
        sap.ca.ui.message.showMessageToast("It's a great success!");
    },
    
    onPressError : function(e) {
        sap.ca.ui.message.showMessageBox({
            type: sap.ca.ui.message.Type.ERROR,
            message: "No connection can be established to the backend system ABC",
            details: "Lorem ipsum dolor sit amet, eum an vidit porro ocurreret, has elit illud probatus ut. Ut est audire necessitatibus, case denique scribentur vel no. Ipsum suscipit te quo, eam ne justo insolens. His dico impedit offendit ea, decore eripuit volumus sea an, ut omnes cetero delectus eos.\n\nTota paulo graecis ei usu, mei te alii alia harum. Nulla singulis in nec, qui vide solum inani no. Lorem timeam posidonium nec te, decore noster ut eum, sit mazim delicata deterruisset cu. Id mea nemore delenit, eu ignota propriae eum.\n\nSolum atqui persecuti ut est, altera corrumpit te his. Nam justo epicurei mnesarchum ut, ne nam error ludus. Aeque utinam eum ad, homero audiam recteque nec ne, mazim constituam ne pri. Cum tollit dolorum interesset at. Pri partem tempor reprehendunt in, delectus vulputate sed ne. Etiam aeterno dolores eum ut.\n\nEx conceptam omittantur quo. Sit et petentium scripserit, te mea simul civibus scaevola. Mel solum ludus ea, ut sed cibo choro exerci. Eum discere quaestio ei, sed legendos platonem necessitatibus in. Eu duo populo mnesarchum vituperata."
        });
    },
    
    onPressInfo : function(e) {
        sap.ca.ui.message.showMessageBox({
            type: sap.ca.ui.message.Type.INFO,
            message: "You got notifications...",
            details: "          message1:1\nmessage2:2\nmessage3:3\n"
        });
    },
    
    onPressWarning : function(e) {
        sap.ca.ui.message.showMessageBox({
            type: sap.ca.ui.message.Type.WARNING,
            message: "No Recipients found"
        });
    },
    
    onPressSuccess : function(e) {
        sap.ca.ui.message.showMessageBox({
            type: sap.ca.ui.message.Type.SUCCESS,
            message: "   You may need to use Message Toast\n",
            details: "You may need to use Message Toast\n"
        });
    }
})
;
