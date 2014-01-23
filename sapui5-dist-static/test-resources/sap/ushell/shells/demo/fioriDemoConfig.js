// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview This file contains a sample Fiori sandbox application configuration.
 */

(function () {
    "use strict";
    /*global sap */

    jQuery.sap.declare("sap.ushell.shells.demo.fioriDemoConfig");

    sap.ushell.shells.demo.fioriDemoConfig = {
        //Define groups for the dashboard
        groups: [
            {
                id: "group_0",
                title: "KPIs",
                isPreset: true,
                tiles: [
                    {
                        id : "tile_00",
                        title : "Sales Performance",
                        size : "1x1",
                        tileType : "sap.ushell.ui.tile.DynamicTile",
                        properties : {
                            title : "Sales Performance",
                            numberValue : 3.75,
                            info : 'Change to Last Month in %',
                            numberFactor : '%',
                            numberDigits : 2,
                            stateNumber : "Positive",
                            stateArrow : "Up",
                            icon: "sap-icon://Fiori2/F0002",
                            targetURL: "#UI2Fiori2SampleApps-defaultapp",
                            keywords: ["sales", "performance"]
                        }
                    },
                    {
                        id: "tile_01",
                        title: "US Profit Margin is at",
                        size: "1x1",
                        tileType : "sap.ushell.ui.tile.DynamicTile",
                        properties : {
                            title: "US Profit Margin is at",
                            numberValue : 21.599,
                            info : '',
                            infoState: "Positive",
                            numberFactor: '%',
                            numberUnit : 'Relative Improvement',
                            numberDigits : 1,
                            numberState : "Positive",
                            stateArrow : "Up",
                            targetURL: "#UI2Fiori2SampleApps-appnavsample",
                            keywords: ["profit", "profit margin", "sales"]
                        }
                    },
                    {
                        id: "tile_02",
                        title: "Gross Revenue under Target at",
                        size: "1x1",
                        tileType : "sap.ushell.ui.tile.DynamicTile",
                        properties : {
                            title: "Gross Revenue under Target at",
                            numberValue : 347.765,
                            info : 'Absolute Deviation',
                            infoState: "Negative",
                            numberFactor: "M",
                            numberUnit : 'EUR',
                            numberDigits : 0,
                            numberState : "Negative",
                            stateArrow : "Down",
                            targetURL: "#UI2Fiori2SampleApps-approvepurchaseorders",
                            //targetURL: "#UI2Fiori2SampleApps-approvepurchaseorders?responderOn=true",
                            //targetURL: "/ushell/test-resources/sap/ushell/shells/sandbox/FioriSandbox.html#UI2Fiori2SampleApps-approvepurchaseorders",
                            //targetURL: "http://localhost:8080/ushell/test-resources/sap/ushell/demoapps/ApprovePurchaseOrders/index.html",
                            keywords: ["profit", "revenue", "target"]
                        }
                    },
                    {
                        id: "tile_03",
                        title: "Net Order Value is at",
                        size: "1x1",
                        tileType : "sap.ushell.ui.tile.DynamicTile",
                        properties : {
                            title: "Net Order Value is at",
                            numberValue : 85.851,
                            info : 'Absolute Deviation',
                            numberFactor: "M",
                            numberUnit : 'EUR',
                            numberDigits : 2,
                            numberState : "Negative",
                            stateArrow : "Up",
                            targetURL: "#UI2Fiori2SampleApps-defaultapp",
                            keywords: ["profit", "order", "sales"]
                        }
                    },
                    {
                        id: "tile_04",
                        title: "Net Order Value is at",
                        size: "1x1",
                        tileType : "sap.ushell.ui.tile.DynamicTile",
                        properties : {
                            title: "Net Order Value is at",
                            numberValue : 63.121,
                            info : 'Absolute Deviation',
                            infoState: "Critical",
                            icon: "sap-icon://BusinessSuiteInAppSymbols/icon-filter-menu",
                            numberFactor: "M",
                            numberUnit : '€',
                            numberDigits : 0,
                            numberState : "Critical",
                            stateArrow : "Up",
                            targetURL: "#UI2Fiori2SampleApps-defaultapp"
                        }
                    }
                ]
            },
            {
                id: "group_1",
                title: "Employee Self Service",
                isPreset: true,
                tiles: [
                    {
                        id: "tile_10",
                        title: "I am a short title!",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.StaticTile",
                        properties: {
                            title: "I am a short title!",
                            subtitle: "This shows a StaticTile with a long subtitle that may be misleading",
                            infoState: "Neutral",
                            info: "0 days running without bugs",
                            icon: "sap-icon://flight",
                            targetURL: "#UI2Fiori2SampleApps-defaultapp"
                        }
                    },
                    {
                        id: "tile_11",
                        title: "Just another long long long long long title",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties : {
                            title: "Just another long long long long long title",
                            subtitle: "This shows a DynamicTile",
                            numberValue: 20,
                            numberState: "Positive",
                            numberUnit: "days",
                            stateArrow: "Down",
                            infoState: "Positive",
                            info: "running without any crashes",
                            icon: "sap-icon://flight",
                            targetURL: "#UI2Fiori2SampleApps-defaultapp"
                        }
                    },
                    {
                        id: "tile_12",
                        title: "Financial Close Tasks",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.ImageTile",
                        properties: {
                            title: "Financial Close Tasks",
                            subtitle: "Tasks Overview",
                            imageSource: "img/Incoming_Customer_Complaints_wNumbers.png",
                            info: "currently inactive",
                            infoState: "Critical",
                            targetURL: "http://www.heise.de"
                        }
                    },
                    {
                        id: "tile_13",
                        title: "User maintenance",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.TileBase",
                        properties: {
                            title: "User maintenance",
                            subtitle: "Opens WebGUI",
                            infoState: "Neutral",
                            info: "",
                            icon: "sap-icon://employee",
                            targetURL: "#UI2Fiori2SampleApps-webdynpro"
                        }
                    },
                    {
                        id: "tile_14",
                        title: "I am a tile!",
                        size: "1x2"
                    },
                    {
                        id: "tile_15",
                        title: "Wikipedia",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.TileBase",
                        properties: {
                            title: "Wikipedia",
                            subtitle: "Opens Wikipedia",
                            infoState: "Neutral",
                            info: "",
                            icon: "sap-icon://world",
                            targetURL: "#UI2Fiori2SampleApps-wikipedia"
                        }
                    },
                    {
                        id: "tile_16",
                        title: "My Leave Request",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.TileBase",
                        properties: {
                            title: "My Leave Request",
                            subtitle: "Opens Fiori 1 App",
                            infoState: "Neutral",
                            info: "",
                            icon: "sap-icon://world",
                            targetURL: "#UI2Fiori2SampleApps-MyLeaveRequest"
                        }
                    },
                    {
                        id: "tile_17",
                        title: "XSS Example",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.TileBase",
                        properties: {
                            title: "<script>alert('Hi');</script>XSS",
                            subtitle: "Opens Fiori 1 App<script>alert('Hi');</script>",
                            infoState: "Neutral",
                            info: "",
                            icon: "sap-icon://<script>alert('Hi');</script>",
                            targetURL: "#UI2Fiori2SampleApps-MyLeaveRequest"
                        }
                    }
                ]
            }
        ],
        catalogs: [
            {
                id: "catalog_0",
                title: "Cash Management",
                tiles: [
                    {
                        id: "catalogTile_00",
                        title: "Bank Risk",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties: {
                            title: "Bank Risk",
                            subtitle: "Rating A- and below",
                            infoState: "Neutral",
                            info: "Today",
//                            icon: "sap-icon://flight",
                            numberValue: 106.6,
                            numberDigits: 1,
                            numberState: "Neutral",
                            numberUnit: "M€",
                            targetURL: "#UI2Fiori2SampleApps-appnavsample",
                            keywords: ["risk", "neutral", "account"]
                        }
                    },
                    {
                        id: "catalogTile_01",
                        title: "Bank Statement Import",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties : {
                            title: "Bank Statement Import",
                            subtitle: "Accounts completed import",
                            numberValue: 16.7,
                            numberState: "Neutral",
                            numberUnit: "%",
                            stateArrow: "Down",
                            infoState: "Neutral",
                            info: "Today",
                            targetURL: "#UI2Fiori2SampleApps-approvepurchaseorders",
                            keywords: ["risk", "import", "account"]
                        }
                    },
                    {
                        id: "catalogTile_02",
                        title: "Liquidity Forecast",
                        size: "1x1",
                        // note: will be KPI Line chart
                        tileType: "sap.ushell.ui.tile.ImageTile",
                        properties: {
                            title: "Liquidity Forecast",
                            subtitle: "Forecast for 30 days",
                            imageSource: "img/Gross_Revenue_Chart_wNumbers.png",
                            targetURL: "#UI2Fiori2SampleApps-appperssample",
                            keywords: ["forecast", "cash", "flow"]
                        }
                    },
                    {
                        id: "catalogTile_03",
                        title: "Liquidity Structure",
                        size: "1x1",
                        // note: will be KPI Comparison chart
                        tileType: "sap.ushell.ui.tile.ImageTile",
                        properties: {
                            title: "Liquidity Structure",
                            subtitle: "Structure of current account, deposit, and debt",
                            imageSource: "img/Incoming_Customer_Complaints_wNumbers.png",
                            targetURL: "#UI2Fiori2SampleApps-appnavsample2",
                            keywords: ["liquidity"]
                        }
                    },
                    {
                        id: "catalogTile_04",
                        title: "Current Accounts Balance",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties: {
                            title: "Current Accounts Balance",
                            subtitle: "Cumulated Balance",
                            infoState: "Neutral",
                            info: "Yesterday",
                            numberValue: 18.46,
                            numberDigits: 2,
                            numberState: "Negative",
                            numberUnit: "M€",
                            targetURL: "#UI2Fiori2SampleApps-appnavsample",
                            keywords: ["account", "banking", "balance"]
                        }
                    },
                    {
                        id: "catalogTile_05",
                        title: "Current Accounts Balance",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties: {
                            title: "Current Accounts Balance",
                            subtitle: "Cumulated balance",
                            info : "Today",
                            infoState: "Neutral",
                            numberValue : 689.5,
                            numberUnit : "M€",
                            numberDigits : 2,
                            numberState: "Positive",
                            targetURL: "#UI2Fiori2SampleApps-config",
                            keywords: ["meh", "account"]
                        }
                    },
                    {
                        id: "catalogTile_06",
                        title: "Deficit in Bank Accounts",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties: {
                            title: "Deficit in Bank Accounts",
                            subtitle: "Cumulated Balance",
                            icon: "sap-icon://soccor",
                            infoState: "Neutral",
                            info: "Today",
                            numberValue: -314,
                            numberDigits: 0,
                            numberState: "Negative",
                            numberUnit: "M€",
                            targetURL: "#UI2Fiori2SampleApps-appperssample2",
                            keywords: ["account", "minus"]
                        }
                    },
                    {
                        id: "catalogTile_07",
                        title: "Surplus in Current Accounts",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties: {
                            title: "Surplus in Current Accounts",
                            subtitle: "Surplus",
                            infoState: "Neutral",
                            info: "Today",
                            numberValue: 921.4,
                            numberDigits: 1,
                            numberState: "Positive",
                            numberUnit: "M€",
                            targetURL: "#UI2Fiori2SampleApps-defaultapp",
                            keywords: ["account", "plus"]
                        }
                    },
                    {
                        id: "catalogTile_08",
                        title: "I am a long tile!",
                        size: "1x2"
                    },
                ]
            },

            {
                id: "catalog_1",
                title: "Financial Close",
                tiles: [
                    {
                        id: "catalogTile_10",
                        title: "Financial Close Tasks",
                        size: "1x1",
                        // note: will be KPI Comparison chart
                        tileType: "sap.ushell.ui.tile.ImageTile",
                        properties: {
                            title: "Financial Close Tasks",
                            subtitle: "Tasks Overview",
                            imageSource: "img/Incoming_Customer_Complaints_wNumbers.png",
                            icon: "sap-icon://task",
                            targetURL: "#UI2Fiori2SampleApps-approvepurchaseorders",
                            keywords: ["task"]
                        }
                    },
                    {
                        id: "catalogTile_11",
                        title: "Erroneous Tasks",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties : {
                            title: "Erroneous Tasks",
                            subtitle: "Tasks completed with error",
                            numberValue: 3,
                            numberState: "Negative",
                            numberUnit: "",
                            stateArrow: "None",
                            infoState: "Negative",
                            info: "tasks are erroneous",
                            icon: "sap-icon://error",
                            targetURL: "#UI2Fiori2SampleApps-NavigationWithoutMasterDetailPattern",
                            keywords: ["task"]
                        }
                    },
                    {
                        id: "catalogTile_12",
                        title: "Delayed Tasks",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties : {
                            title: "Delayed Tasks",
                            subtitle: "",
                            numberValue: 9,
                            numberState: "Negative",
                            numberUnit: "",
                            stateArrow: "None",
                            infoState: "Negative",
                            info: "tasks with delay",
                            icon: "sap-icon://task",
                            targetURL: "#UI2Fiori2SampleApps-NavigationWithoutRoutes",
                            keywords: ["task"]
                        }
                    },
                    {
                        id: "catalogTile_12",
                        title: "Completed Tasks",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties : {
                            title: "Completed Tasks",
                            subtitle: "Tasks Due Today",
                            numberValue: 90,
                            numberState: "Positive",
                            numberFactor: "%",
                            stateArrow: "None",
                            infoState: "Positive",
                            info: "Completed Due Today",
                            icon: "sap-icon://task",
                            targetURL: "#UI2Fiori2SampleApps-navigationwithroutes",
                            keywords: ["task"]
                        }
                    }
                ]
            },
            {
                id: "catalog_2",
                title: "Project Execution",
                tiles: [
                    {
                        id: "catalogTile_20",
                        title: "WBS Cost Variance",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties: {
                            title: "WBS Cost Variance",
                            subtitle: "Variance",
                            numberValue : 34,
                            info : "Today",
                            unit : "",
                            numberDigits : 0,
                            numberState: "Negative",
                            targetURL: "#UI2Fiori2SampleApps-approvepurchaseorders",
                            keywords: ["variance"]
                        }
                    },
                    {
                        id: "catalogTile_21",
                        title: "Due Activities",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties: {
                            title: "Due Activities",
                            subtitle: "Activities due today",
                            numberValue : 12,
                            info : 'Today',
                            unit : '',
                            decimalDigits : 0,
                            numberState: "Neutral",
                            targetURL: "#UI2Fiori2SampleApps-appperssample2",
                            keywords: ["task"]
                        }
                    },
                    {
                        id: "catalogTile_22",
                        title: "Purchase Orders",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties: {
                            title: "Purchase Orders",
                            subtitle: "Overdue Purchase Order Items",
                            numberValue : 97,
                            info : 'Today',
                            unit : '',
                            numberDigits : 0,
                            numberState: "Negative",
                            targetURL: "#UI2Fiori2SampleApps-appperssample",
                            keywords: ["task"]
                        }
                    },
                    {
                        id: "catalogTile_23",
                        title: "Missing Parts",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties: {
                            title: "Missing Parts",
                            subtitle: "",
                            numberValue : 7,
                            info : "Today",
                            unit : "",
                            numberDigits : 0,
                            numberState: "Negative",
                            targetURL: "#UI2Fiori2SampleApps-appnavsample2",
                            keywords: ["parts"]
                        }
                    }
                ]
            },
            {
                id: "catalog_3",
                title: "Employee Self Service",
                tiles: [
                    {
                        id: "catalogTile_30",
                        title: "Leave Request",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.TileBase",
                        properties: {
                            title: "Request Leave",
                            subtitle: "",
                            infoState: "Neutral",
                            info: "",
                            icon: "sap-icon://create-leave-request",
                            targetURL: "#UI2Fiori2SampleApps-appnavsample",
                            keywords: ["leave request", "request", "personal"]
                        }
                    },
                    {
                        id: "catalogTile_31",
                        title: "My Benefits",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties : {
                            title: "My Benefits",
                            subtitle: "",
                            numberValue: 3,
                            numberState: "Neutral",
                            numberUnit: "",
                            info: "pending",
                            icon: "sap-icon://family-care",
                            targetURL: "#UI2Fiori2SampleApps-config",
                            keywords: ["benefits", "personal"]
                        }
                    },
                    {
                        id: "catalogTile_32",
                        title: "My Timesheets",
                        size: "1x1",
                        tileType: "sap.ushell.ui.tile.DynamicTile",
                        properties : {
                            title: "My Timesheets",
                            subtitle: "",
                            numberValue: 30,
                            numberState: "Neutral",
                            numberUnit: "",
                            info: "days missing",
                            icon: "sap-icon://time-entry-request",
                            targetURL: "#UI2Fiori2SampleApps-defaultapp",
                            keywords: ["time", "personal"]
                        }
                    }
                ]
            }
        ],
        applications: {
            "" : { //default application - empty URL hash
                additionalInformation: "SAPUI5.Component=sap.ushell.demoapps.FioriSandboxDefaultApp",
                applicationType: "URL",
                url: "/ushell/test-resources/sap/ushell/demoapps/FioriSandboxDefaultApp"
            },

            "UI2Fiori2SampleApps-defaultapp" : { //default application as explicit navigation target
                additionalInformation: "SAPUI5.Component=sap.ushell.demoapps.FioriSandboxDefaultApp",
                applicationType: "URL",
                url: "/ushell/test-resources/sap/ushell/demoapps/FioriSandboxDefaultApp",
                description : "Default App : show statically registered apps (fioriSandboxConfig.js) "
            },

            "UI2Fiori2SampleApps-wikipedia" : {
                applicationType: "URL",
                url: "http://www.wikipedia.org",
                description : "Wikipedia"
            },

            "UI2Fiori2SampleApps-MyLeaveRequest" : {
                applicationType: "URL",
                url: "http://d5htdc00.wdf.sap.corp:57180/sap/bc/ui5_ui5/sap/ui5_hcm_lr_cr/index.html?sap-client=800",
                description : "My Leave Request"
            },

            "UI2Fiori2SampleApps-config"  : {
                additionalInformation: "SAPUI5.Component=sap.ushell.demoapps.FioriSandboxConfigApp",
                applicationType: "URL",
                url: "/ushell/test-resources/sap/ushell/demoapps/FioriSandboxConfigApp",
                description : "Config App : Configure Test-local1 and Test-local2 apps"
            },

            "UI2Fiori2SampleApps-appnavsample"  : {
                /*
                 * Sample app from git\unified.shell\ushell\src\main\webapp\staging\demoapps\AppNavSample
                 *
                 * Demonstrates resource-based navigation inside a shell runtime
                 *
                 * Run e.g. as :
                 * http://localhost:8080/ushell/test-resources/sap/ushell/shells/sandbox/fioriSandbox.html#AppNavSample-display&/Detail
                 * http://localhost:8080/ushell/test-resources/sap/ushell/shells/sandbox/fioriSandbox.html#AppNavSample-display&/View1
                 *
                */

                additionalInformation: "SAPUI5.Component=AppNavSample",
                applicationType: "URL",
                url: "/ushell/test-resources/sap/ushell/demoapps/AppNavSample?fixed-param1=value1&array-param1=value1&array-param1=value2",
                description : "AppNavSample : Demos startup parameter passing ( albeit late bound in model!) and late instantiation of navigator in view (low level manual routing only) "
            },


            "UI2Fiori2SampleApps-appnavsample2" : {
                /*
                 * Sample app from git\unified.shell\ushell\src\main\webapp\staging\demoapps\AppNavSample
                 *
                 * Demonstrates resource-based navigation inside a shell runtime
                 *
                 * Run e.g. as :
                 * http://localhost:8080/ushell/staging/shells/sandbox/fioriSandbox.html#AppNavSample2-display&/Detail
                 * http://localhost:8080/ushell/staging/shells/sandbox/fioriSandbox.html#AppNavSample2-display&/View1
                 *
                */
                additionalInformation: "SAPUI5.Component=AppNavSample2",
                applicationType: "URL",
                url: "/ushell/test-resources/sap/ushell/demoapps/AppNavSample2",
                description : "AppNavSample2 Inner App Navigation: Do it your self (Early(component) navigator instantiation, simple route registration example, no model binding, explicit view changes within the app)"
            },

            "UI2Fiori2SampleApps-appperssample" : {
                /*
                 * Sample app from git\unified.shell\ushell-lib\src\test\js\sap\ushell\demoapps\AppPersSample2
                */
                additionalInformation: "SAPUI5.Component=AppPersSample",
                applicationType: "URL",
                url: "/ushell/test-resources/sap/ushell/demoapps/AppPersSample",
                description : "AppPersSample 1: NOT YET READY - Sample app for generic usage of personalization service"
            },

            "UI2Fiori2SampleApps-appperssample2" : {
                /*
                 * Sample app from git\unified.shell\ushell-lib\src\test\js\sap\ushell\demoapps\AppPersSample22
                */
                additionalInformation: "SAPUI5.Component=AppPersSample2",
                applicationType: "URL",
                url: "/ushell/test-resources/sap/ushell/demoapps/AppPersSample2",
                description : "AppPersSample 2: INTERMEDIATE VERSION - Sample app for personalization of tables (intermediate version until table personalization is directly supported by UI5 Mobile)"
            },

            "UI2Fiori2SampleApps-approvepurchaseorders" : {
                /* Sample app from git\unified.shell\ushell\src\main\webapp\staging\demoapps\ApprovePurchaseOrders
                 *
                 */
                additionalInformation: "SAPUI5.Component=ApprovePurchaseOrders",
                applicationType: "URL",
                url: "/ushell/test-resources/sap/ushell/demoapps/ApprovePurchaseOrders",
                description : "ApprovePurchaseOrders:SAP UI5 Best practice App (Inner App Navigation): explicit mapping of routes to model bindings and views, automatic view changes by the Nav framework"
            },

            "UI2Fiori2SampleApps-navigationwithroutes" : {
                /* Sample app from git\unified.shell\ushell\src\main\webapp\staging\demoapps\ApprovePurchaseOrders
                 *
                 */
                additionalInformation: "SAPUI5.Component=NavigationWithRoutes",
                applicationType: "URL",
                url: "/ushell/test-resources/sap/ushell/demoapps/NavigationWithRoutes",
                description : "NavgationWithRoutes:Shows how to navigate using routes without the context property"
            },

            "UI2Fiori2SampleApps-NavigationWithoutRoutes" : {
                /* Sample app from git\unified.shell\ushell\src\main\webapp\staging\demoapps\ApprovePurchaseOrders
                 *
                 */
                additionalInformation: "SAPUI5.Component=NavigationWithoutRoutes",
                applicationType: "URL",
                url: "/ushell/test-resources/sap/ushell/demoapps/NavigationWithoutRoutes",
                description : "NavigationWithoutRoutes:Shows how to navigate without using routes(that means you cannot bookmark the resulting links)"
            },

            "UI2Fiori2SampleApps-NavigationWithoutMasterDetailPattern" : {
                /* Sample app from git\unified.shell\ushell\src\main\webapp\staging\demoapps\NavigationWithoutMasterDetailPattern
                 *
                 */
                additionalInformation: "SAPUI5.Component=NavigationWithoutMasterDetailPattern",
                applicationType: "URL",
                url: "/ushell/test-resources/sap/ushell/demoapps/NavigationWithoutMasterDetailPattern",
                description : "Shows how to navigate without using routes without the master-detail pattern"
            },

            "UI2Fiori2SampleApps-webdynpro" : {
                applicationType: "NWBC",
                url: "https://ldciu31.wdf.sap.corp:44336/sap/bc/ui2/nwbc/~canvas;window=embedded;decoration=FLP/wda/S_EPM_FPM_PD/?sap-wd-htmlrendermode=STANDARDS&sap-theme=sap_corbu&sap-wd-configId=s_epm_fpm_pd&sap-client=111",
                description : "Web Dynpro for ABAP Application Integration"
            },

            "UI2Fiori2SampleApps-webgui" : {
                applicationType: "NWBC",
                url: "https://ldciu31.wdf.sap.corp:44336/sap/bc/ui2/nwbc/~canvas;window=embedded;decoration=FLP/transaction/su01",
                description : "WebGUI Application Integration"
            }

            /* Put your own application here
            "MySO-Action" : {
                additionalInformation: "SAPUI5.Component=<component-name>",
                applicationType: "URL",
                url: "/<path-to-component-root>"    // folder where Component.js is stored
            },
            */

            /** UI5 Mobile reference app,
             *  found in git ssh://d0NNNNN@git.wdf.sap.corp:29418/sapui5/sapui5.runtime.git
             *  project uilib-sample
             *  standalone start url http://localhost:8080/uilib-sample/blueprint/ApprovePurchaseOrders/index.html#/Purchase%20Order/2/id-1376393210277-6/
             */
            /*"UI5Sample-ApprovePurchaseOrdersOLD" : {
                additionalInformation: "SAPUI5=ApprovePurchaseOrders/view.App.view.js",
                applicationType: "URL",
                url: "/uilib-sample/blueprint/"
            }, */
        },
        // data for the personalization service
        personalizationData: {
            "sap.ushell.personalization#sap.ushell.services.UserRecents#RecentApps": [
                {"iCount": 1, "iTimestamp": 1378479383874, "oItem": {"semanticObject": "UI2Fiori2SampleApps", "action": "approvepurchaseorders", "sTargetHash": "#UI2Fiori2SampleApps-approvepurchaseorders"}},
                {"iCount": 2, "iTimestamp": 1378479383873, "oItem": {"semanticObject": "UI2Fiori2SampleApps", "action": "appnavsample", "sTargetHash": "#UI2Fiori2SampleApps-appnavsample"}},
                {"iCount": 2, "iTimestamp": 1378479383872, "oItem": {"semanticObject": "UI2Fiori2SampleApps", "action": "appnavsample2", "sTargetHash": "#UI2Fiori2SampleApps-appnavsample2"}}
            ],
            "sap.ushell.personalization#sap.ushell.services.UserRecents#RecentSearches": [
                {"iCount": 1, "iTimestamp": 1378478828153, "oItem": {"sTerm": "Sally", "oObjectName": {"label": "Employees", "value": "Employees"}}},
                {"iCount": 1, "iTimestamp": 1378478828152, "oItem": {"sTerm": "Test"}},
                {"iCount": 1, "iTimestamp": 1378478828151, "oItem": {"sTerm": "Recent search 3"}},
                {"iCount": 1, "iTimestamp": 1378478828149, "oItem": {"sTerm": "Recent search 4", "oObjectName": {"label": "Business Partners", "value": "Business Partners"}}},
                {"iCount": 1, "iTimestamp": 1378478828148, "oItem": {"sTerm": "Recent search 5"}},
                {"iCount": 1, "iTimestamp": 1378478828147, "oItem": {"sTerm": "Recent search 6"}},
                {"iCount": 1, "iTimestamp": 1378478828137, "oItem": {"sTerm": "Recent search 16"}},
                {"iCount": 1, "iTimestamp": 1378478828136, "oItem": {"sTerm": "Recent search 17"}},
                {"iCount": 1, "iTimestamp": 1378478828133, "oItem": {"sTerm": "Recent search 20"}},
                {"iCount": 1, "iTimestamp": 1378478828132, "oItem": {"sTerm": "Recent search 21"}},
                {"iCount": 1, "iTimestamp": 1378478828131, "oItem": {"sTerm": "Recent search 22"}},
                {"iCount": 1, "iTimestamp": 1378478828146, "oItem": {"sTerm": "Recent search 7"}},
                {"iCount": 1, "iTimestamp": 1378478828145, "oItem": {"sTerm": "Recent search 8"}},
                {"iCount": 1, "iTimestamp": 1378478828144, "oItem": {"sTerm": "Recent search 9"}},
                {"iCount": 1, "iTimestamp": 1378478828143, "oItem": {"sTerm": "Recent search 10"}},
                {"iCount": 1, "iTimestamp": 1378478828135, "oItem": {"sTerm": "Recent search 18"}},
                {"iCount": 1, "iTimestamp": 1378478828134, "oItem": {"sTerm": "Recent search 19"}},
                {"iCount": 1, "iTimestamp": 1378478828142, "oItem": {"sTerm": "Recent search 11"}},
                {"iCount": 1, "iTimestamp": 1378478828141, "oItem": {"sTerm": "Recent search 12"}},
                {"iCount": 1, "iTimestamp": 1378478828140, "oItem": {"sTerm": "Recent search 13"}},
                {"iCount": 1, "iTimestamp": 1378478828139, "oItem": {"sTerm": "Recent search 14"}},
                {"iCount": 1, "iTimestamp": 1378478828138, "oItem": {"sTerm": "Recent search 15"}}
            ]
        }
    };

}());
