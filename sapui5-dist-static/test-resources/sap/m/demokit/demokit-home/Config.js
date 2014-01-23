jQuery.sap.declare("Config");

Config = {};

Config.data = {
	apps : [
		{
			name : "sap.m Explored",
			icon : "custom/explored",
			info : "A quick run through all those controls in the sap.m library",
			paths : [
				{
					group : 1,
					name : "Phone",
					path : "explored/index.html?sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 1,
					name : "Tablet",
					path : "explored/index.html?sap-ui-xx-fakeOS=ipad"
				},
				{
					group : 1,
					name : "Desktop",
					path : "explored/index.html",
					standard : true
				},
				{
					group : 2,
					name : "iPhone",
					path : "explored/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 2,
					name : "iPad",
					path : "explored/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=ipad"
				},
				{
					group : 2,
					name : "Android Phone",
					path : "explored/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_phone"
				},
				{
					group : 2,
					name : "Android Tablet",
					path : "explored/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_tablet"
				}
			]
		},
		{
			name : "Icon Explorer",
			icon : "custom/icon-explorer",
			info : "Helps you in finding icons out of a build-in set of almost 500 icons",
			paths : [
				{
					group : 1,
					name : "Phone",
					path : "icon-explorer/index.html?sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 1,
					name : "Tablet",
					path : "icon-explorer/index.html?sap-ui-xx-fakeOS=ipad"
				},
				{
					group : 1,
					name : "Desktop",
					path : "icon-explorer/index.html",
					standard : true
				},
				{
					group : 2,
					name : "iPhone",
					path : "icon-explorer/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 2,
					name : "iPad",
					path : "icon-explorer/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=ipad"
				},
				{
					group : 2,
					name : "Android Phone",
					path : "icon-explorer/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_phone"
				},
				{
					group : 2,
					name : "Android Tablet",
					path : "icon-explorer/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_tablet"
				}
			]
		},
		{
			name : "Approve Purchase Orders",
			icon : "custom/poa",
			info : "A real world example of an approval process app",
			paths : [
				{
					group : 1,
					name : "Phone",
					path : "poa/index.html?sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 1,
					name : "Tablet",
					path : "poa/index.html?sap-ui-xx-fakeOS=ipad"
				},
				{
					group : 1,
					name : "Desktop",
					path : "poa/index.html",
					standard : true
				}
			]
		},
		{
			name : "Shopping Cart",
			icon : "custom/cart",
			info : "The classical business process along finding & ordering products",
			paths : [
				{
					group : 1,
					name : "Phone",
					path : "cart/index.html?responderOn=true&sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 1,
					name : "Tablet",
					path : "cart/index.html?responderOn=true&sap-ui-xx-fakeOS=ipad"
				},
				{
					group : 1,
					name : "Desktop",
					path : "cart/index.html?responderOn=true",
					standard : true
				},
				{
					group : 2,
					name : "iPhone",
					path : "cart/index.html?responderOn=true&sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 2,
					name : "iPad",
					path : "cart/index.html?responderOn=true&sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=ipad"
				},
				{
					group : 2,
					name : "Android Phone",
					path : "cart/index.html?responderOn=true&sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_phone"
				},
				{
					group : 2,
					name : "Android Tablet",
					path : "cart/index.html?responderOn=true&sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_tablet"
				},
				{
					group : 3,
					name : "Documentation",
					path : "docs/guide/BestPractice.html"
				}
			]
		}, 
		{
			name : "MaKit",
			icon : "custom/makit",
			info : "Shows you how to realize business charts with the MaKit control",
			paths : [
				{
					group : 1,
					name : "Tablet",
					path : "makit/index.html?sap-ui-theme=sap_bluecrystal&sap-ui-xx-fakeOS=ipad"
				},
				{
					group : 1,
					name : "Desktop",
					path : "makit/index.html?sap-ui-theme=sap_bluecrystal",
					standard : true
				},
				{
					group : 2,
					name : "iPad",
					path : "makit/index.html?sap-ui-xx-fakeOS=ipad"
				},
				{
					group : 2,
					name : "Android Tablet",
					path : "makit/index.html?sap-ui-xx-fakeOS=android_tablet"
				},
				{
					group : 3,
					name : "Documentation",
					path : "docs/guide/MaKit.html"
				}
			]
		},
		{
			name : "Hello World",
			icon : "custom/helloworld",
			info : "This is were it all starts when developing with sap.m",
			paths : [
				{
					group : 1,
					name : "Phone",
					path : "helloworld/index.html?sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 1,
					name : "Desktop",
					path : "helloworld/index.html",
					standard : true
				},
				{
					group : 2,
					name : "iPhone",
					path : "helloworld/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 2,
					name : "Android Phone",
					path : "helloworld/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_phone"
				},
				{
					group : 3,
					name : "Documentation",
					path : "docs/guide/HelloWorld.1.html"
				}
			]
		},
		{
			name : "Best Practice Hello World",
			icon : "custom/helloworld",
			info : "A good code template to build a best practice app",
			paths : [
				{
					group : 1,
					name : "Phone",
					path : "helloworld_bp/index.html?sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 1,
					name : "Desktop",
					path : "helloworld_bp/index.html",
					standard : true
				},
				{
					group : 2,
					name : "iPhone",
					path : "helloworld_bp/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 2,
					name : "Android Phone",
					path : "helloworld_bp/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_phone"
				},
				{
					group : 3,
					name : "Documentation",
					path : "docs/guide/HelloWorld.1.html"
				}
			]
		}, 
		{
			name : "Split App",
			icon : "custom/splitapp",
			info : "The SplitApp control adapts between phone and tablet devices",
			paths : [
				{
					group : 1,
					name : "Phone",
					path : "splitapp/index.html?sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 1,
					name : "Tablet",
					path : "splitapp/index.html?sap-ui-xx-fakeOS=ipad"
				},
				{
					group : 1,
					name : "Desktop",
					path : "splitapp/index.html",
					standard : true
				},
				{
					group : 2,
					name : "iPhone",
					path : "splitapp/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 2,
					name : "iPad",
					path : "splitapp/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=ipad"
				},
				{
					group : 2,
					name : "Android Phone",
					path : "splitapp/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_phone"
				},
				{
					group : 2,
					name : "Android Tablet",
					path : "splitapp/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_tablet"
				},
				{
					group : 3,
					name : "Documentation",
					path : "docs/guide/SplitApp.html"
				}
			]
		}, 
		{
			name : "Flex Box",
			icon : "custom/flexbox",
			info : "Provides thorough documentation for the FlexBox layout control",
			paths : [
				{
					group : 1,
					name : "Phone",
					path : "flexbox/index.html?sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 1,
					name : "Tablet",
					path : "flexbox/index.html?sap-ui-xx-fakeOS=ipad"
				},
				{
					group : 1,
					name : "Desktop",
					path : "flexbox/index.html",
					standard : true
				},
				{
					group : 2,
					name : "iPhone",
					path : "flexbox/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 2,
					name : "iPad",
					path : "flexbox/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=ipad"
				},
				{
					group : 2,
					name : "Android Phone",
					path : "flexbox/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_phone"
				},
				{
					group : 2,
					name : "Android Tablet",
					path : "flexbox/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_tablet"
				},
				{
					group : 3,
					name : "Documentation",
					path : "docs/guide/FlexBox.html"
				}
			]
		}, 
		{
			name : "Model View Controller",
			icon : "custom/mvc",
			info : "Explores possible usages of SAPUI5 MVC with sap.m controls",
			paths : [
				{
					group : 1,
					name : "Phone",
					path : "mvc/App_with_rootView.html?sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 1,
					name : "Desktop",
					path : "mvc/App_with_rootView.html",
					standard : true
				},
				{
					group : 2,
					name : "iPhone",
					path : "mvc/App_with_rootView.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 2,
					name : "Android Phone",
					path : "mvc/App_with_rootView.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_phone"
				},
				{
					group : 3,
					name : "Documentation",
					path : "docs/guide/MVC.1.html"
				}
			]
		},
		{
			name : "Navigation",
			icon : "menu2",
			info : "React to the changes of browser history with the history plugin",
			paths : [
				{
					group : 1,
					name : "Phone",
					path : "navigation/index.html?sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 1,
					name : "Desktop",
					path : "navigation/index.html",
					standard : true
				},
				{
					group : 2,
					name : "iPhone",
					path : "navigation/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 2,
					name : "Android Phone",
					path : "navigation/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_phone"
				}
			]
		},
		{
			name : "CRUD Patterns",
			icon : "custom/crud",
			info : "A design best practice for realizing CRUD patterns on the phone",
			paths : [
				{
					group : 1,
					name : "Phone",
					path : "crud/index.html?sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 1,
					name : "Desktop",
					path : "crud/index.html",
					standard : true
				},
				{
					group : 2,
					name : "iPhone",
					path : "crud/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=iphone"
				},
				{
					group : 2,
					name : "Android Phone",
					path : "crud/index.html?sap-ui-theme=sap_mvi&sap-ui-xx-fakeOS=android_phone"
				}
			]
		}
	]
};