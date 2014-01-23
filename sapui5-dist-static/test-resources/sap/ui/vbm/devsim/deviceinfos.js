
// the default fallback device
var oDefaultDevice = {
	name : "Generic Phone",
	shortName: "Phone",
	directAccess: false,
	landscapeDefault : false,
	ua : "Mozilla/5.0 (Generic Phone) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/x Safari/7534.48.3",
	portrait: {
		img: "iPhone.png",
		height: 460,
		width: 320,
		padding: "153px 32px"
	},
	landscape: {
		img: "iPhone-landscape.png",
		width: 480,
		height: 300,
		padding: "52px 130px"
	}
};



//list of known devices
var aDevices = [
{
	
	name : "iPhone 4S (iOS 5.0.1)",
	shortName: "iPhone 4S",
	directAccess: true,
	ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A406 Safari/7534.48.3",
	portrait: {
		img: "iPhone.png",
		height: 460,
		width: 320,
		padding: "153px 32px 127px 32px"
	},
	landscape: {
		img: "iPhone-landscape.png",
		width: 480,
		height: 300,
		padding: "52px 133px 28px 130px"
	},
	clock: {
		"color": "#333",
		"width": "50px",
		"height": "17px",
		"leftLandscape": "344px",
		"leftPortrait": "166px",
		"topLandscape": "34px",
		"topPortrait": "135px",
		"fontFamily": "Helvetica, sans-serif",
		"fontWeight": "bold",
		"fontSize": "12px",
		"textShadow": "rgba(0, 0, 0, 0.5) 0px 0px 1px"
	}
	
}, {
	
	name : "iPhone 5 (iOS 6)",
	shortName: "iPhone 5",
	directAccess: true,
	ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25",
	portrait: {
		img: "iPhone5.png",
		height: 548,
		width: 320,
		padding: "136px 29px 111px 32px"
	},
	landscape: {
		img: "iPhone5-landscape.png",
		width: 568,
		height: 300,
		padding: "52px 116px 26px 115px"
	},
	clock: {
		"color": "#bbb",
		"width": "50px",
		"height": "17px",
		"leftLandscape": "372px",
		"leftPortrait": "166px",
		"topLandscape": "34px",
		"topPortrait": "119px",
		"fontFamily": "Helvetica, sans-serif",
		"fontWeight": "bold",
		"fontSize": "12px"
	}
	
}, {
	
	// personal Galaxy S2, as delivered, will be upgraded to ICS... CSS screen size (incl. header) is 320x533.333
	name : "Samsung Galaxy S2 (Android 2.3.3)",
	shortName: "Galaxy S2",
	directAccess: true,
	ua : "Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; GT-I9100 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",
	portrait: {
		img: "GalaxyS2.png",
		width: 320,
		height: 508,
		padding: "116px 32px 92px 32px"
	},
	landscape: {
		img: "GalaxyS2-landscape.png",
		width: 533,
		height: 294,
		padding: "58px 88px 32px 93px"
	},
	clock: {
		"color": "#abc",
		"width": "50px",
		"height": "19px",
		"leftLandscape": "570px",
		"leftPortrait": "295px",
		"topLandscape": "36px",
		"topPortrait": "95px",
		"fontFamily": "Helvetica, sans-serif",
		"fontWeight": "normal",
		"fontSize": "17px",
		"textShadow": "none"
	}

}, {
	
	// personal Galaxy S3
	name : "Samsung Galaxy S3 (Android 4.1.1)",
	shortName: "Galaxy S3",
	directAccess: true,
	ua : "Mozilla/5.0 (Linux; U; Android 4.1.1; en-us; SAMSUNG GT-I9300/I9300XXDLIH Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
	portrait: {
		img: "GalaxyS3.png",
		width: 360,
		height: 615,
		padding: "106px 29px 146px 34px"
	},
	landscape: {
		img: "GalaxyS3-landscape.png",
		width: 640,
		height: 335,
		padding: "59px 188px 67px 101px"
	},
	clock: {
		"color": "#888",
		"width": "50px",
		"height": "19px",
		"leftLandscape": "687px",
		"leftPortrait": "340px",
		"topLandscape": "37px",
		"topPortrait": "85px",
		"fontFamily": "Helvetica, sans-serif",
		"fontWeight": "normal",
		"fontSize": "16px",
		"textShadow": "none"
	}
	
}, {
	
	// personal Galaxy S3 with Chrome browser
	name : "Samsung Galaxy S3 with CHROME (Android 4.1.1)",
	shortName: "Galaxy S3 (Chrome)",
	//directAccess: true,
	ua : "Mozilla/5.0 (Linux; Android 4.1.1; GT-I9300 Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19",
	portrait: {
		img: "GalaxyS3.png",
		width: 360,
		height: 615,
		padding: "106px 29px 146px 34px"
	},
	landscape: {
		img: "GalaxyS3-landscape.png",
		width: 640,
		height: 335,
		padding: "59px 188px 67px 101px"
	},
	clock: {
		"color": "#888",
		"width": "50px",
		"height": "19px",
		"leftLandscape": "687px",
		"leftPortrait": "340px",
		"topLandscape": "37px",
		"topPortrait": "85px",
		"fontFamily": "Helvetica, sans-serif",
		"fontWeight": "normal",
		"fontSize": "16px",
		"textShadow": "none"
	}
	
}, { 
	
	name : "Huawei U8180",
	shortName: "Huawei",
	directAccess: true,
	landscapeDefault : false,
	ua : "Mozilla/5.0 (Linux; U; Android 2.2.2; en-us; U8180 Build/HuaweiU8180) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",
	portrait: {
		img: "huawei.png",
		width: 320,
		height: 400,
		padding: "122px 49px 241px 48px"
	},
	landscape: {
		img: "huawei-landscape.png",
		width: 427,
		height: 295,
		padding: "72px 95px 47px 245px"
	},
	clock: {
		"color": "#222",
		"width": "50px",
		"height": "17px",
		"leftLandscape": "601px",
		"leftPortrait": "296px",
		"topLandscape": "50px",
		"topPortrait": "100px",
		"fontFamily": "Helvetica, sans-serif",
		"fontWeight": "bold",
		"fontSize": "16px",
		"textShadow": "0px 0px 2px black"
	}
	
}, { 
	
	name : "Apple iPad2 (iOS 5.1.1)",
	shortName: "iPad",
	directAccess: true,
	landscapeDefault : true,
	ua : "Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206",
	portrait: {
		img: "iPad.png",
		width: 768,
		height: 1004,
		padding: "137px 99px"
	},
	landscape: {
		img: "iPad-landscape.png",
		width: 1024,
		height: 748,
		padding: "121px 118px"
	},
	clock: {
		"color": "#bbb",
		"width": "50px",
		"height": "17px",
		"leftLandscape": "604px",
		"leftPortrait": "458px",
		"topLandscape": "104px",
		"topPortrait": "118px",
		"fontFamily": "Helvetica, sans-serif",
		"fontWeight": "bold",
		"fontSize": "13px",
		"textShadow": "none"
	}
	
}, { 
	
	name : "Apple iPad mini (iOS 6.0)",
	shortName: "iPad mini",
	directAccess: true,
	landscapeDefault: true,
	ua : "Mozilla/5.0 (iPad; CPU OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10A523",
	portrait: {
		img: "iPadMini.png",
		width: 768,
		height: 1004,
		padding: "137px 37px 118px"
	},
	zoom: 0.72536,
	landscape: {
		img: "iPadMini-landscape.png",
		width: 1024,
		height: 748,
		padding: "59px 118px 36px"
	},
	clock: {
		"color": "#bbb",
		"width": "50px",
		"height": "17px",
		"leftLandscape": "604px",
		"leftPortrait": "396px",
		"topLandscape": "42px",
		"topPortrait": "118px",
		"fontFamily": "Helvetica, sans-serif",
		"fontWeight": "bold",
		"fontSize": "13px",
		"textShadow": "none"
	}

}, {

	name : "BlackBerry 10 Dev Alpha B (Blackberry 10)",
	shortName: "BlackBerry 10",
	ua : "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+",
	directAccess: true,
	portrait: {
		img: "bb10.png",
		width: 342,  // actually it is 342,284108 because of the odd CSS pixel ratio
		height: 521, // the browser URL bar is subtracted
		padding: "74px 18px 137px"
	},
	landscape: {
		img: "bb10-landscape.png",
		width: 570,
		height: 293, // the browser URL bar is subtracted
		padding: "18px 74px 63px 88px"
	},
	landscapeDefault : false,
	clock: {
		"color": "transparent",
		"textShadow": "none",
		"leftLandscape": "0px",
		"leftPortrait": "0px",
		"topLandscape": "0px",
		"topPortrait": "0px",
	}

}, {
	
	name : "Nokia Lumia 920 (Windows Phone 8)",
	shortName: "Lumia 920",
	directAccess: true,
	ua: "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)",
	portrait: {
		img: "nokiaPortrait.png",
		height: 533,
		width: 320,
		padding: "56px 32px 113px 30px"
	},
	landscape: {
		img: "nokiaLandscape.png",
		width: 533,
		height: 320,
		padding: "30px 56px 28px 116px"
	},
	clock: {
		"color": "#333",
		"width": "50px",
		"height": "17px",
		"leftLandscape": "344px",
		"leftPortrait": "164px",
		"topLandscape": "13px",
		"topPortrait": "39px",
		"fontFamily": "Helvetica, sans-serif",
		"fontWeight": "bold",
		"fontSize": "12px",
		"textShadow": "rgba(0, 0, 0, 0.5) 0px 0px 1px"
	}
	
}, {
	
	
	
	
	// the following devices do not have suitable images available yet and the correct dimensions are not provided
	
	name : "iPhone 3GS (iOS 4.3.3)",
	shortName: "iPhone 3",
	ua : "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5",
	portrait: {
		img: "iPhone.png",
		height: 460,
		width: 320,
		padding: "153px 32px 127px 32px"
	},
	landscape: {
		img: "iPhone-landscape.png",
		width: 480,
		height: 300,
		padding: "52px 130px 28px 130px"
	},
	clock: {
		"color": "#444",
		"width": "50px",
		"height": "17px",
		"leftLandscape": "342px",
		"leftPortrait": "163px",
		"topLandscape": "34px",
		"topPortrait": "135px",
		"fontFamily": "Helvetica, sans-serif",
		"fontWeight": "bold",
		"fontSize": "12px",
		"textShadow": "0px 1px 0 #777, 0px 2px 1px #f2f2f2"
	}

}, { 

	
	// our Nokia Lumia 800, as delivered
	name : "Nokia Lumia 800 (Windows Phone 7.5)",
	shortName: "Lumia 800",
	"long" : 800,
	"short" : 480,
	ua : "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; NOKIA; Lumia 800)"
}, { 
	
	// our BlackBerry 9900 Bold, as delivered
	name : "BlackBerry 9900 Bold (Blackberry 7)",
	shortName: "BlackBerry 9900",
	"long" : 640,
	"short" : 480,
	landscapeDefault : true,
	ua : "Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; de) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.296 Mobile Safari/534.11+"
} 
];
