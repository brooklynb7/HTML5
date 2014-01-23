// Copyright (c) 2013 SAP AG, All Rights Reserved
/*global sap */
sap.ui
        .controller(
                "AppPersSample.App",
                {

                    onInit : function() {
                        // Read potentially existing personalization favorites.
                        var oId = {
                            container : "AppPersSample",
                            item : "favorites",
                        };

                        this.oPersonalizer = sap.ushell.Container.getService(
                                "Personalization").getPersonalizer(oId);
                        this.applyExistingFavorites(oId);
                    },

                    /**
                     * Gets the favorites from browser storage
                     */
                    applyExistingFavorites : function(oId) {
                        this.oPersonalizer
                                .getPersData()
                                .done(this.onFavoritesRead.bind(this))
                                .fail(
                                        function() {
                                            jQuery.sap.log
                                                    .error("Reading personalization data failed.");
                                        });
                    },

                    /**
                     * Called by applyExistingFavorites Sets the check-boxes if
                     * favorites were saved
                     */
                    onFavoritesRead : function(aCheckBoxValues) {
                        var sDisplayValue;

                        if (aCheckBoxValues === null) {
                            // TODO The following string is never used...
                            sDisplayValue = "(Personalization data is not available from service)";
                        } else {
                            for ( var i = 0; i < aCheckBoxValues.length; i++) {
                                this.getView().byId("PanelFavorites")
                                        .getContent()[i]
                                        .setSelected(aCheckBoxValues[i]);
                            }
                        }
                    },

                    /**
                     * Called when "Save Your Favorites" button is pressed
                     */
                    onSaveFavorites : function() {
                        var aCheckBoxValues = new Array();
                        var aPanelFavorites = this.getView().byId(
                                "PanelFavorites").getContent();

                        for ( var i = 0; i < aPanelFavorites.length - 1; i++) {
                            aCheckBoxValues[i] = aPanelFavorites[i]
                                    .getSelected();
                        }

                        this.oPersonalizer.setPersData(aCheckBoxValues);
                        // neither the done nor the fail is checked
                    },
                });