// Copyright (c) 2013 SAP AG, All Rights Reserved
(function() {
    "use strict";
    /* global jQuery, sap */
    jQuery.sap.declare("util.TablePers");
    jQuery.sap.require("sap.ushell.services.Personalization");
    jQuery.sap.require("sap.m.TablePersoController");

    /**
     * TODO constructor documentation...
     */
    util.TablePersonalizer = function(oTableControl,
            oStartPersonalizationButton, oPersId) {
        var oPersonalizer, oTablePersoController;
        oPersonalizer = sap.ushell.Container.getService("Personalization")
                .getPersonalizer(oPersId);
        oTablePersoController = new sap.m.TablePersoController({
            table : oTableControl,
            persoService : oPersonalizer
        });
        oTablePersoController.activate();
        oStartPersonalizationButton.attachPress(function() {
            oTablePersoController.openDialog();
        });

    };
}());