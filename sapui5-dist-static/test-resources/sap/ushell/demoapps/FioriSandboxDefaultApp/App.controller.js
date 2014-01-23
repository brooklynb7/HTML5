// Copyright (c) 2013 SAP AG, All Rights Reserved

/* global jQuery, sap */
jQuery.sap.require("sap.m.MessageToast");

/* global sap */
sap.ui
        .controller(
                "sap.ushell.demoapps.FioriSandboxDefaultApp.App",
                {
                  onInit: function() {

                    var aApps = [],
                        crossAppNavService = sap.ushell.Container.getService("CrossApplicationNavigation"),
                        sAppName,
                        href;

                    sap.ushell = sap.ushell || {}; 
                    sap.ushell.fiorisandbox = sap.ushell.fiorisandbox || {}; 
                    sap.ushell.fiorisandbox.configuration = sap.ushell.fiorisandbox.configuration || {}; 
                    sap.ushell.fiorisandbox.configuration.applications = sap.ushell.fiorisandbox.configuration.applications || {}; 

                    for (sAppName in sap.ushell.fiorisandbox.configuration.applications) {
                      if (sAppName != "") {

                        // use cross-application navigation service to construct link targets with proper encoding
                        href = crossAppNavService.hrefForExternal({
                            target : {
                                shellHash : sAppName
                            }
                        });

                        aApps
                                .push({
                                  href: href,
                                  appDescription: sap.ushell.fiorisandbox.configuration.applications[sAppName].description
                                          || sAppName
                                });
                      }
                    }

                    var oModel = new sap.ui.model.json.JSONModel();
                    oModel.setData({
                      "apps": aApps
                    });

                    this.getView().setModel(oModel);
                  },
                
                  onSelectFromList : function() {
                    var oButton = this.getView().byId("configAsLocal1");
                    oButton.setEnabled(true);
                  },

                  onConfigureAsAppLocal1 : function(oEvent) {
                    // Determine selected app.
                    // TODO Any better way to find out which app is selected?
                    var oList = this.getView().byId("applist");
                    var oListItem = oList.getSelectedItem();
                    var aListItemContents = oListItem.getContent();
                    var oLink = aListItemContents[0];
                    var sHref = oLink.getHref();
                    var sAppName = sHref.substring(1); // sHref.split("#")[1];
                    var oApp = sap.ushell.fiorisandbox.configuration.applications[sAppName];
                    
                    var sAppConfigO = JSON.stringify(oApp); 
                    
                    var oAppClone = JSON.parse(sAppConfigO);
                    
                    // patch for relative sample applications: 
                    var sRelStart = "../../../../../test-resources/sap/ushell/demoapps";
                    var ilen = sRelStart.length; 
                    if (oAppClone.url.length > ilen && oAppClone.url.substr(0,ilen) === sRelStart) {
                        oAppClone.url = "/ushell/test-resources/sap/ushell/demoapps" + oAppClone.url.substr(ilen);
                    }                    
                    var sAppConfig = JSON.stringify(oAppClone); 
                    
                    // Store details of selected app for hash "#Test-local1".
                    localStorage["sap.ushell.#Test-local1"] = sAppConfig;
                    
                    sap.m.MessageToast.show("App " + sAppName + " is now available as #Test-local1 in the Fiori Launchpad.");
                  },

                });