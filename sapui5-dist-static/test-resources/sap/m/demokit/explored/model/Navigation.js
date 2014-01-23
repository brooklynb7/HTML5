jQuery.sap.declare("model.Navigation");

model.Navigation = {

	items: [

		{parent: null, type: "DIR", id: "root", name: "Categories" },

		{parent: "root", type: "DIR", id: "action", name: "Action" },
		{parent: "root", type: "DIR", id: "containers", name: "Container" },
		{parent: "root", type: "DIR", id: "display", name: "Display" },
		{parent: "root", type: "DIR", id: "inputs", name: "User Input" },
		{parent: "root", type: "DIR", id: "list", name: "List" },
		{parent: "root", type: "DIR", id: "listItems", name: "List Items" },
		{parent: "root", type: "DIR", id: "popups", name: "Popup" },

		{parent: "action", type: "JS",  id: "listItemAction", name: "Action List Item" },
		{parent: "action", type: "XML", id: "actionSheet", name: "Action Sheet" },
		{parent: "action", type: "JS",  id: "button", name: "Button" },
		{parent: "action", type: "JS",  id: "link", name: "Link" },
		{parent: "action", type: "JS",  id: "pullToRefresh", name: "Pull To Refresh" },
		{parent: "action", type: "JS",  id: "urlHelper", name: "URL Helper" },

		{parent: "containers", type: "JS",  id: "carousel", name: "Carousel"},
		{parent: "containers", type: "JS",  id: "flexBox", name: "Flex Box"},
		{parent: "containers", type: "JS",  id: "navContainer", name: "Nav Container"},
		{parent: "containers", type: "JS",  id: "scrollContainer", name: "Scroll Container"},
		{parent: "containers", type: "JS",  id: "tileContainer", name: "Tile Container", noMVI: true},
		{parent: "containers", type: "XML", id: "panel", name: "Panel", noMVI: true},
		{parent: "containers", type: "DIR", id: "iconTabBars", name: "Icon Tab Bar", noMVI: true},
		{parent: "containers", type: "DIR", id: "pages", name: "Page & Bar"},
		{parent: "containers", type: "DIR", id: "forms", name: "Form"},

		{parent: "forms", type: "XML", id: "form354", name: "Form - Single 3:5:4", fragments: [ "formChange", "formDisplay" ], noMVI: true},
		{parent: "forms", type: "XML", id: "form471", name: "Form - Single 4:7:1", fragments: [ "formChange", "formDisplay" ], noMVI: true},
		{parent: "forms", type: "XML", id: "form480", name: "Form - Dual 4:8:0", fragments: [ "formChange", "formDisplay" ], noMVI: true},

		{parent: "pages", type: "JS",  id: "page", name: "Page & Bar"},
		{parent: "pages", type: "XML", id: "pageSpacing", name: "Page Spacing"},

		{parent: "iconTabBars", type: "XML", id: "iconTabBar", name: "Icon Tab Bar - Filter", noMVI: true},
		{parent: "iconTabBars", type: "XML", id: "iconTabBarMulti", name: "Icon Tab Bar - Tabs", noMVI: true},
		{parent: "iconTabBars", type: "XML", id: "iconTabBarProcess", name: "Icon Tab Bar - Process", noMVI: true},
		{parent: "iconTabBars", type: "XML", id: "iconTabBarNoIcons", name: "Icon Tab Bar - Only Text", noMVI: true},

		{parent: "display", type: "JS",  id: "busyIndicator", name: "Busy Indicator"},
		{parent: "display", type: "JS",  id: "html", name: "HTML" },
		{parent: "display", type: "JS",  id: "image", name: "Image" },
		{parent: "display", type: "JS",  id: "label", name: "Label" },
		{parent: "display", type: "JS",  id: "progressIndicator", name: "Progress Indicator", noMVI: true},
		{parent: "display", type: "JS",  id: "text", name: "Text"},
		{parent: "display", type: "JS",  id: "icon", name: "Icon"},
		{parent: "display", type: "DIR", id: "objectHeaders", name: "Object Header", noMVI: true},

		{parent: "objectHeaders", type: "XML", id: "objectHeader", name: "Object Header", noMVI: true},
		{parent: "objectHeaders", type: "XML", id: "objectHeaderTitleSel", name: "Object Header - Title Selection", noMVI: true},

		{parent: "inputs", type: "JS",  id: "checkBox", name: "Check Box" },
		{parent: "inputs", type: "JS",  id: "dateTimeInput", name: "Date Time Input" },
		{parent: "inputs", type: "JS",  id: "radioButton", name: "Radio Button" },
		{parent: "inputs", type: "JS",  id: "ratingIndicator", name: "Rating Indicator", noMVI: true },
		{parent: "inputs", type: "XML", id: "searchField", name: "Search Field" },
		{parent: "inputs", type: "JS",  id: "segmentedButton", name: "Segmented Button" },
		{parent: "inputs", type: "XML", id: "select", name: "Select"},
		{parent: "inputs", type: "JS",  id: "slider", name: "Slider" },
		{parent: "inputs", type: "JS",  id: "textArea", name: "Text Area" },
		{parent: "inputs", type: "JS",  id: "switch", name: "Switch" },
		{parent: "inputs", type: "DIR", id: "input", name: "Input" },
		{parent: "inputs", type: "DIR", id: "facetfilter", name: "FacetFilter" },

		{parent: "facetfilter", type: "XML", id: "facetFilterSimple", name: "Facet Filter - Simple", noMVI: true},
		{parent: "facetfilter", type: "XML", id: "facetFilterLight", name: "Facet Filter - Light", noMVI: true},

		{parent: "input", type: "JS",  id: "inputTypes", name: "Input - Types" },
		{parent: "input", type: "JS",  id: "inputPassword", name: "Input - Password" },
		{parent: "input", type: "XML", id: "inputAssisted", name: "Input - Assisted" },
		{parent: "input", type: "XML", id: "inputChecked", name: "Input - Checked" },

		{parent: "list", type: "XML", id: "listToolbar", name: "Header & Info Toolbar", noMVI: true },
		{parent: "list", type: "JS",  id: "listNoData", name: "No Data Indication" },
		{parent: "list", type: "JS",  id: "listFooter", name: "Footer" },
		{parent: "list", type: "XML", id: "listSelection", name: "Selection" },
		{parent: "list", type: "JS",  id: "listDeletion", name: "Deletion" },
		{parent: "list", type: "JS",  id: "listSwipe", name: "Swipe" },
		{parent: "list", type: "XML", id: "listGrowing", name: "Growing" },
		{parent: "list", type: "XML", id: "listGrouping", name: "Grouping", noMVI: true},
		{parent: "list", type: "JS",  id: "listUnread", name: "Unread Indication" },
		{parent: "list", type: "JS",  id: "listNavType", name: "Navigation Indication" },
		{parent: "list", type: "JS",  id: "listCounter", name: "Counter" },
		{parent: "list", type: "DIR", id: "listTables", name: "Table" },

		{parent: "listTables", type: "XML", id: "table", name: "Columns", noMVI: true},
		{parent: "listTables", type: "XML", id: "tableViewSettingsDialog", name: "View Settings", noMVI: true},
		{parent: "listTables", type: "XML", id: "tablePerso", name: "Personalization", noMVI: true},
		{parent: "listTables", type: "JS",  id: "tableMergeCells", name: "Merge Cells", noMVI: true},

		{parent: "listItems", type: "JS",  id: "listItemAction", name: "Action List Item" },
		{parent: "listItems", type: "JS",  id: "listItemCustom", name: "Custom List Item" },
		{parent: "listItems", type: "JS",  id: "listItemDisplay", name: "Display List Item" },
		{parent: "listItems", type: "JS",  id: "listItemFeed", name: "Feed List Item", noMVI : true},
		{parent: "listItems", type: "JS",  id: "listItemInput", name: "Input List Item" },
		{parent: "listItems", type: "XML", id: "listItemObject", name: "Object List Item", noMVI : true},
		{parent: "listItems", type: "DIR",  id: "listItemStandards", name: "Standard List Item" },

		{parent: "listItemStandards", type: "XML", id: "listItemStandard", name: "Standard List Item" },
		{parent: "listItemStandards", type: "XML", id: "listItemStandardTitle", name: "Standard List Item - Adapt Title" },

		{parent: "popups", type: "JS",  id: "actionSheet", name: "Action Sheet" },
		{parent: "popups", type: "JS",  id: "busyDialog", name: "Busy Dialog" },
		{parent: "popups", type: "JS",  id: "messageBox", name: "Message Box" },
		{parent: "popups", type: "JS",  id: "messageToast", name: "Message Toast" },
		{parent: "popups", type: "JS",  id: "dialog", name: "Dialog" },
		{parent: "popups", type: "JS",  id: "popover", name: "Popover" },
		{parent: "popups", type: "JS",  id: "responsivePopover", name: "Responsive Popover" },
		{parent: "popups", type: "JS",  id: "viewSettingsDialog", name: "View Settings Dialog", noMVI: true},
		{parent: "popups", type: "JS",  id: "selectDialog", name: "Select Dialog" },
		{parent: "popups", type: "JS",  id: "tableSelectDialog", name: "Table Select Dialog" }
	]
};

// calculate the sample counts
(function () {

	// map items 2 indizes
	var itemIndizes = {};
	jQuery.each(model.Navigation.items, function (i, item) {
		itemIndizes[item.id] = i;
	});
	
	// define recursive count function
	var fnCalcCounts = function (id, level) {
		var itemCount = 0;
		jQuery.each(model.Navigation.items, function (i, item) {
			if (id === item.parent) {
				if ("DIR" === item.type) {
					itemCount += fnCalcCounts(item.id, level + 1);
				} else {
					itemCount++;
					item.level = level + 1;
				}
			}
		});
		var i = itemIndizes[id];
		model.Navigation.items[i].count = itemCount;
		model.Navigation.items[i].level = level;
		return itemCount;
	};
	
	// start recursion with root
	fnCalcCounts("root", 0);
}
)();