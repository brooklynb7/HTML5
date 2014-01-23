jQuery.sap.declare("sap.ca.ui.utils.TablePersonalizer");

jQuery.sap.require("sap.ushell.services.Personalization");
jQuery.sap.require("sap.m.TablePersoController");


sap.ca.ui.utils.TablePersonalizer = function(oMobileTable, oStartPersButton, oPersId){


    try {
        var oPersonalizer = sap.ushell.Container.getService("Personalization").getPersonalizer(oPersId);

        var oTablePersoController = new sap.m.TablePersoController({
            table : oMobileTable,
            persoService : oPersonalizer
        });
        oTablePersoController.activate();


        oStartPersButton.attachPress(function() {
            oTablePersoController.openDialog();
        });

    }
    catch(oError){
        jQuery.sap.log.error("TablePersonalizer : cannot load personalization service from ushell " + oError.message);
    }



};
