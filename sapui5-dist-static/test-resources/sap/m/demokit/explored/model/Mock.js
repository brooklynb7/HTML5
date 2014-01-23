jQuery.sap.declare("model.Mock");

model.Mock = {
	"Text" : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",

	"ContactCollection" : [
		{
			"FirstName" : "George",
			"LastName" : "Washington",
			"ContactPicUrl" : "http://upload.wikimedia.org/wikipedia/commons/2/25/George_Washington_as_CIC_of_the_Continental_Army_bust.jpg"
		},
		{
			"FirstName" : "Alexandrina",
			"LastName" : "Victoria",
			"ContactPicUrl" : "http://upload.wikimedia.org/wikipedia/commons/a/aa/Dronning_victoria.jpg"
		},
		{
			"FirstName" : "Friedrich",
			"LastName" : "Der Große",
			"ContactPicUrl" : "http://upload.wikimedia.org/wikipedia/commons/f/fc/Frederic_II_de_prusse.jpg"
		},
		{
			"FirstName" : "Agnes",
			"LastName" : "Teresa",
			"ContactPicUrl" : "http://upload.wikimedia.org/wikipedia/commons/6/6e/The_Saint_Mother_Teresa.jpg"
		},
		{
			"FirstName" : "Sigmund",
			"LastName" : "Freud",
			"ContactPicUrl" : "http://upload.wikimedia.org/wikipedia/commons/6/69/Sigmund_Freud_Anciano.jpg"
		},
		{
			"FirstName" : "Christopher",
			"LastName" : "Columbus",
			"ContactPicUrl" : "http://upload.wikimedia.org/wikipedia/commons/0/06/CristobalColon.jpg"
		},
		{
			"FirstName" : "Winston",
			"LastName" : "Churchill",
			"ContactPicUrl" : "http://upload.wikimedia.org/wikipedia/commons/3/35/Churchill_portrait_NYP_45063.jpg"
		}
	],

	"FacetOptions":[
			{
				"type":"Suppliers",
				"key":"suppliers",
				"values":[
					{
						"text":"Technocom",
						"key":"technocom",
						"count":3
					},
					{
						"text":"RedPointStores",
						"key":"redpointstores",
						"count":7
					}
				]
			},
			{
				"type":"ProductTypes",
				"key":"producttypes",
				"values":[
					{
						"text":"GraphicsCards",
						"key":"GC",
						"count":2
					},
					{
						"text":"Accessories",
						"key":"AC",
						"count":2
					},
					{
						"text":"Printers",
						"key":"PR",
						"count":3
					}
				]
			}
		],


	"ProductCollection": [
		{
			"ProductId" : "1239102",
			"Name" : "Power Projector 4711",
			"Category" : "Projector",
			"SupplierName" : "Titanium",
			"Description" : "A very powerful projector with special features for Internet Usability, USB",
			"WeightMeasure" : 1467,
			"WeightUnit" : "g",
			"Price" : 856.49,
			"CurrencyCode" : "EUR",
			"Width" : 51,
			"Depth" : 42,
			"Height" : 18,
			"DimUnit" : "cm",
			"ProductPicUrl" :"img/product/large_HT-6100.jpg"
		}, {
			"ProductId" : "2212-121-828",
			"Name" : "Gladiator MX",
			"Category" : "Graphics Card",
			"SupplierName" : "Technocom",
			"Description" : "Gladiator MX: DDR2 RoHS 128MB Supporting 512MB Clock rate: 350 MHz Memory Clock: 533 MHz, Bus Type: PCI-Express, Memory Type: DDR2 Memory Bus: 32-bit Highlighted Features: DVI Out, TV Out , HDTV",
			"WeightMeasure" : 321,
			"WeightUnit" : "g",
			"Price" : 81.70,
			"CurrencyCode" : "EUR",
			"Width" : 34,
			"Depth" : 14,
			"Height" : 2,
			"DimUnit" : "cm",
			"ProductPicUrl" : "img/product/HT-1071.jpg"
		}, {
			"ProductId" : "K47322.1",
			"Name" : "Hurricane GX",
			"Category" : "Graphics Card",
			"SupplierName" : "Red Point Stores",
			"Description" : "Hurricane GX: DDR2 RoHS 512MB Supporting1024MB Clock rate: 550 MHz Memory Clock: 933 MHz, Bus Type: PCI-Express, Memory Type: DDR2 Memory Bus: 64-bit Highlighted Features: DVI Out, TV-In, TV-Out, HDTV",
			"WeightMeasure" : 588,
			"WeightUnit" : "g",
			"Price" : 219,
			"CurrencyCode" : "EUR",
			"Width" : 34,
			"Depth" : 14,
			"Height" : 2,
			"DimUnit" : "cm",
			"ProductPicUrl" :"img/product/HT-1072.jpg"
		}, {
			"ProductId" : "22134T",
			"Name" : "Webcam",
			"Category" : "Accessory",
			"SupplierName" : "Technocom",
			"Description" : "Web camera, colour, High-Speed USB",
			"WeightMeasure" : 700,
			"WeightUnit" : "g",
			"Price" : 59,
			"CurrencyCode" : "EUR",
			"Width" : 18,
			"Depth" : 19,
			"Height" : 21,
			"DimUnit" : "cm",
			"ProductPicUrl" :"img/product/HT-1112.jpg"
		}, {
			"ProductId" : "P1239823",
			"Name" : "Monitor Locking Cable",
			"Category" : "Accessory",
			"SupplierName" : "Technocom",
			"Description" : "Lock for Monitor",
			"WeightMeasure" : 40,
			"WeightUnit" : "g",
			"Price" : 13.49,
			"CurrencyCode" : "EUR",
			"Width" : 11,
			"Depth" : 11,
			"Height" : 3,
			"DimUnit" : "cm",
			"ProductPicUrl" :"img/product/HT-1111.jpg"
		}, {
			"ProductId" : "214-121-828",
			"Name" : "Laptop Case",
			"Category" : "Accessory",
			"SupplierName" : "Red Point Stores",
			"Description" : "Laptop Case with many room for pencils and other stationaries",
			"WeightMeasure" : 1289,
			"WeightUnit" : "g",
			"Price" : 78.99,
			"CurrencyCode" : "EUR",
			"Width" : 53,
			"Depth" : 34,
			"Height" : 7,
			"DimUnit" : "cm",
			"ProductPicUrl" :"img/product/HT-1114.jpg"
		}, {
			"ProductId" : "XKP-312548",
			"Name" : "USB Stick 16 GByte",
			"Category" : "Accessory",
			"SupplierName" : "Red Point Stores",
			"Description" : "USB 2.0 HighSpeed 16GB",
			"WeightMeasure" : 11,
			"WeightUnit" : "g",
			"Price" : 17.19,
			"CurrencyCode" : "EUR",
			"Width" : 6,
			"Depth" : 2,
			"Height" : 0.5,
			"DimUnit" : "cm",
			"ProductPicUrl" :"img/product/HT-6120.jpg"
		}, {
			"ProductId" : "KTZ-12012.V2",
			"Name" : "Deskjet Super Highspeed",
			"Category" : "Printer",
			"SupplierName" : "Red Point Stores",
			"Description" : "1200 dpi x 1200 dpi - up to 25 ppm (mono) / up to 24 ppm (colour) - capacity: 100 sheets - Hi-Speed USB2.0, Ethernet",
			"WeightMeasure" : 100,
			"WeightUnit" : "g",
			"Price" : 117.19,
			"CurrencyCode" : "EUR",
			"Width" : 87,
			"Depth" : 45,
			"Height" : 39,
			"DimUnit" : "cm",
			"ProductPicUrl" :"img/product/HT-1052.jpg"
		}, {
			"ProductId" : "89932-922",
			"Name" : "Laser Allround Pro",
			"Category" : "Printer",
			"SupplierName" : "Red Point Stores",
			"Description" : "Print up to 25 ppm letter and 24 ppm A4 color or monochrome, with a first-page-out-time of less than 13 seconds for monochrome and less than 15 seconds for color",
			"WeightMeasure" : 2134,
			"WeightUnit" : "g",
			"Price" : 39.99,
			"CurrencyCode" : "EUR",
			"Width" : 42,
			"Depth" : 29,
			"Height" :31,
			"DimUnit" : "cm",
			"ProductPicUrl" :"img/product/HT-1040.jpg"
		}, {
			"ProductId" : "38094020.1",
			"Name" : "Flat S",
			"Category" : "Monitor",
			"SupplierName" : "Very Best Screens",
			"Description" : "19 inches Optimum Resolution 1600 x 1200 @ 85Hz, Max resolution 1984 x 1488 @ 75Hz, Dot Pitch: 0.24mm",
			"WeightMeasure" : 1401,
			"WeightUnit" : "g",
			"Price" : 339,
			"CurrencyCode" : "EUR",
			"Width" : 88,
			"Depth" : 13,
			"Height" : 49,
			"DimUnit" : "cm",
			"ProductPicUrl" :"img/product/HT-1030.jpg"
		}, {
			"ProductId" : "870394932",
			"Name" : "Flat Medium",
			"Category" : "Monitor",
			"SupplierName" : "Very Best Screens",
			"Description" : "21 inches Optimum Resolution 1984 x 1488 @ 85Hz, Max resolution 1720 x 1280 @ 75Hz, Dot Pitch: 0.24mm",
			"WeightMeasure" : 1800,
			"WeightUnit" : "g",
			"Price" : 639,
			"CurrencyCode" : "EUR",
			"Width" : 102,
			"Depth" : 13,
			"Height" : 54,
			"DimUnit" : "cm",
			"ProductPicUrl" :"img/product/HT-1032.jpg"
		}, {
			"ProductId" : "282948303-02",
			"Name" : "Flat X-large II",
			"Category" : "Monitor",
			"SupplierName" : "Very Best Screens",
			"Description" : "23 inches Optimum Resolution 2048 × 1536 @ 85Hz, Max resolution 2080 × 1560 @ 75Hz, Dot Pitch: 0.24mm",
			"WeightMeasure" : 2100,
			"WeightUnit" : "g",
			"Price" : 1239,
			"CurrencyCode" : "EUR",
			"Width" : 112,
			"Depth" : 13,
			"Height" : 60,
			"DimUnit" : "cm",
			"ProductPicUrl" :"img/product/HT-1138.jpg"
		}, {
			"ProductId" : "OP-38800002",
			"Name" : "High End Laptop 2b",
			"Category" : "Laptop",
			"SupplierName" : "Titanium",
			"Description" : "Notebook Professional 17 with 2,3GHz - 17 inches XGA - 2048MB DDR2 SDRAM - 40GB Hard Disc - DVD-Writer (DVD-R/+R/-RW/-RAM)",
			"WeightMeasure" : 1190,
			"WeightUnit" : "g",
			"Price" : 939,
			"CurrencyCode" : "EUR",
			"Width" : 64,
			"Depth" : 34,
			"Height" : 4,
			"DimUnit" : "cm",
			"ProductPicUrl" :"img/product/HT-1010.jpg"
		}, {
			"ProductId" : "977700-11",
			"Name" : "Hardcore Hacker",
			"Category" : "Keyboard",
			"SupplierName" : "Titanium",
			"Description" : "Corded Keyboard with special keys for Media Usability, USB",
			"WeightMeasure" : 651,
			"WeightUnit" : "g",
			"Price" : 89,
			"CurrencyCode" : "EUR",
			"Width" : 53,
			"Depth" : 24,
			"Height" : 6,
			"DimUnit" : "cm",
			"ProductPicUrl" :"img/product/HT-1063.jpg"
		}
	],

	"SupplierCollection": [
		{
			SupplierName: "Red Point Stores",
			Street: "Main St",
			HouseNumber: "1618",
			ZIPCode: "31415",
			City: "Maintown",
			Country: "Germany",
			Url: "http://www.rps.corp",
			Twitter: "@rpscorp"
		}
	]
};

//calculate counts
(function () {
	model.Mock.ProductCollectionStats = {
		"Counts": {
			"Total": model.Mock.ProductCollection.length,
			"Weight": {
				"Ok": 0,
				"Heavy": 0,
				"Overweight": 0
			}
		},
		"Groups": {
			"Category": {},
			"SupplierName": {}
		},
		"Filters": []
	};
	// Work out the counts
	for (var i = 0, j = model.Mock.ProductCollection.length; i < j; i++) {
		var product = model.Mock.ProductCollection[i];

		// Weight-based
		var weightCategory =
			product.WeightMeasure > 2000 ?	"Overweight" :
			product.WeightMeasure > 1000 ?	"Heavy" :
											"Ok";
		model.Mock.ProductCollectionStats.Counts.Weight[weightCategory]++;

		// Group-based
		['Category', 'SupplierName'].map(function(sGroup) {
			var groupValue = product[sGroup];
			var currentCount = model.Mock.ProductCollectionStats.Groups[sGroup][groupValue];
			model.Mock.ProductCollectionStats.Groups[sGroup][groupValue] = currentCount ? currentCount + 1 : 1;
		});
	}

	// Marshall the group data ready for filters
	jQuery.each(model.Mock.ProductCollectionStats.Groups, function(group, groupData) {
		var filterObject = { type: group, values: [] };
		jQuery.each(groupData, function(filter, filterData) {
			filterObject.values.push({ text: filter, data: filterData});
		});
		model.Mock.ProductCollectionStats.Filters.push(filterObject);
	});

}
)();