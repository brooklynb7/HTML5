/**
 * Created by i041099 on 14/08/13.
 * Performance UI monitor
 */
window.f2pMonitor = (function () {
    'use strict';
    /*global jQuery, sap, window, document, f2p */

    jQuery.sap.declare("sap.ushell.components.perf.monitor");
    jQuery.sap.require("sap.m.library");

    var oPerfMonitorApp,
        sRootPageId,
        oItemTemplate,
        oPerfMonitorModel;

    function setItemsIconColor (aItems){
        for (var i = 0; i < aItems.length;i++){
            var icon = aItems[i].getIcon();
            if (icon && icon.indexOf('alert') !== -1){
                aItems[i].addStyleClass('PerfMonitorRedIcon');
            }else if(icon && icon.indexOf('accept') !== -1){
                aItems[i].addStyleClass('PerfMonitorGreenIcon');
            }
        }
    }

    function _navigate(event) {
        event.stopImmediatePropagation();
        var oCtx, sCurrentPath, sNewPath, oNewData;
        oCtx = event.srcControl.getBindingContext();
        sCurrentPath = oPerfMonitorModel.getProperty('/currentListPath');
        sNewPath = sCurrentPath + oCtx.sPath.replace('/currentModel','');
        oNewData = oPerfMonitorModel.getProperty('/data' + sNewPath);
        if (oNewData.items && oNewData.items.length){
            oPerfMonitorModel.setProperty('/currentListPath', sNewPath);
            oPerfMonitorModel.setProperty('/currentModel', oNewData);
        }
    }
    
    function _navigateBack(event){
        var sNewPath, oNewData,
            sCurrentPath = oPerfMonitorModel.getProperty('/currentListPath');
        if (sCurrentPath){
            sNewPath = sCurrentPath.substring(0,sCurrentPath.lastIndexOf('/'));
            sNewPath = sNewPath.substring(0,sNewPath.lastIndexOf('/'));
            oNewData = oPerfMonitorModel.getProperty('/data' + sNewPath);
            oPerfMonitorModel.setProperty('/currentListPath', sNewPath);
            oPerfMonitorModel.setProperty('/currentModel', oNewData);
        }else{
            oPerfMonitorApp.backToTop();
        }
    }

    oItemTemplate = new sap.m.ObjectListItem({
        title: "{title}",
        type: "{type}",
        number: "{number}",
        numberUnit: "{i18n>milliseconds}",
        icon : "{icon}"
    }).addEventDelegate({
        onclick: _navigate    // workaround, press event should be used
    });

    function _addPage(oData, sPath, showNavButton) {
        var oPage ,oList = new sap.m.List({
            inset: false
        });
        oPerfMonitorModel.setProperty("/currentListPath","");
        oPerfMonitorModel.setProperty('/currentModel', oPerfMonitorModel.getProperty('/data'));
        oList.setModel(oPerfMonitorModel);
        oList.bindItems("/currentModel/items", oItemTemplate);
        oList.onBeforeRendering  = function (event){
            setItemsIconColor(event.srcControl.getItems());
        };
        oPage = new sap.m.Page(oData.id, {
            title: "{i18n>fioriLaunchPadMonitor}",
            showNavButton: showNavButton,
            content: [oList]
        }).addEventDelegate({
            onclick: _navigateBack
        });
        oPerfMonitorApp.addPage(oPage);
    }

    return {
        _getStaticJSON : function () {
        return {
            id: "overview",
            title: "Overview",
            items: [
                {
                    id: "homepage",
                    title: "All Groups",
                    type: "Navigation",
                    number: 10500,
                    items: [
                        {
                            title: "Self Service Group",
                            /*  type: "Navigation",*/
                            number: 100
                        },
                        {
                            id: "salesGroup",
                            title: "Sales Group",
                            type: "Navigation",
                            number: 10250,
                            items: [
                                {
                                    title: "Create Sales Order Tile",
                                    number: 300
                                },
                                {
                                    title: "Product HT-1000 Tile",
                                    number: 250
                                },
                                {
                                    title: "Approve Shopping Cart Tile",
                                    number: 350
                                },
                                {
                                    title: "Sales Order 27 Tile",
                                    number: 8000
                                },
                                {
                                    title: "Npr News Tile",
                                    number: 250
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "shell",
                    title: "Shell bootstrap",
                    /*type: "Navigation",*/
                    number: 1000
                },
                {
                    id: "searches",
                    title: "Searches Terms",
                    /*type: "Navigation",*/
                    number: 1000
                },
                {
                    id: "appNavigation",
                    title: "App Navigation",
                    /*type: "Navigation",*/
                    number: 250
                }
            ]
        };
    },
        open: function () {
            if (!oPerfMonitorApp) {
                this.init();
            }
            else {
               this.update();                    
            }
            oPerfMonitorApp.to(sRootPageId);
        },
        close: function () {
            if (oPerfMonitorApp) {
                oPerfMonitorApp.backToTop();
            }

        },
        load: function (loadDataFunction) {
            var data = loadDataFunction();
            if (!oPerfMonitorModel){
                oPerfMonitorModel = new sap.ui.model.json.JSONModel();
            }
            oPerfMonitorModel.setProperty('/data',data);
            sRootPageId = data.id;
            _addPage(data, "/items/", true);
        },
        registerWindowKeyCombo: function () {
            jQuery(document).keydown(function (e) {
                //CTRL + ALT +  L keydown combo
                if (e.ctrlKey && e.altKey && e.keyCode === 76) {
                    if (!oPerfMonitorApp) {
                        this.init();
                    }
                    else {
                        this.update();
                    }
                    oPerfMonitorApp.to(sRootPageId);
                }
                //ESC
                if (e.keyCode === 27) {
                    if (oPerfMonitorApp) {
                        oPerfMonitorApp.backToTop();
                    }
                }
            }.bind(this));
        },
        update: function() {
            if (window.f2p) {
                var oData = f2p.get();
                oPerfMonitorModel.setProperty('/data', oData);
                oPerfMonitorModel.setProperty('/currentModel', oData);
            }
        },
        /***
         *
         * @param {object}
         *   navigationApp
         */
        init: function (navigationApp) {
//            this.registerWindowKeyCombo();
            if (navigationApp) {
                oPerfMonitorApp = navigationApp;
            } else {
                return;
            }
            
            if (window.f2p)
                this.load(f2p.get);
            else
                this.load(this._getStaticJSON);
        }

    };
}());