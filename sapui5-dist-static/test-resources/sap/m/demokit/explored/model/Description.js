jQuery.sap.declare("model.Description");

// Q: why are these text not in a property file?
// A: we do not want to translate the explored app for now.

model.Description = {

	actionSheet : "Action Sheet provides an easier way of showing a list of actions and let user select one from them. Title and cancel button can be set to show or hide",

	iconTabBar : "In this example the Icon Tab Bar is used to apply filters on the same content and give the user a quick preview how many items can be expected for each view.",
	iconTabBarNoIcons : "This is similar to the 'Icon Tab Bar - Multi' example but has no icons. Instead, the text is highlighted on selection.",
	iconTabBarProcess : "In this example the Icon Tab Bar is used to apply filters on the same content along a business process.",
	iconTabBarMulti : "In this example the Icon Tab Bar is used to organize multiple different content objects with only one being visible at a time",

	facetFilterSimple : "With the Facet Filter you can offer multiple filters ('facets') to assist the user in narrowing down the data in, say, a table. With this default 'Simple' type, each filter is displayed in a row for selection.",
	facetFilterLight : "This is a 'Light' version of the Facet Filter. It is for small displays where only a selectable summary bar is shown, and a dialog is shown for setting the facet values.",

	form354 : "With a form you can easily layout (a) lists of properties (b) input fields. The form automatically adapts to the screen size. Even though the form is not part of sap.m it can and shall be used for building mobile user interfaces. This is an example of a single-column 3:5:4 layout (label:input:emptyspace)",
	form471 : "With a form you can easily layout (a) lists of properties (b) input fields. The form automatically adapts to the screen size. Even though the form is not part of sap.m it can and shall be used for building mobile user interfaces. This is an example of a single-column 4:7:1 layout (label:input:emptyspace)",
	form480 : "With a form you can easily layout (a) lists of properties (b) input fields. The form automatically adapts to the screen size. Even though the form is not part of sap.m it can and shall be used for building mobile user interfaces. This is an example of a dual-column 4:8:0 layout (label:input:emptyspace)",

	panel : "Panels are helpful to group custom content. They can be decorated with header and info toolbars.",
	pageSpacing : "This page shows a standard setup for showing the details of an object based on: Object Header, Icon Tab Bar, Form, List, Table and Panel. By applying the CSS class 'sapUiFioriObjectPage' you arrange all the controls with a standard spacing.",

	objectHeader : "This is a Object Header which displays brief information about objects similar to the Object List Item",
	objectHeaderTitleSel : "This is a Object Header with a title selection. This can be used to switch between variants of the business object",

	inputAssisted : "Assisted input based on a data model is available via suggestions - shown as you type in the input - and a value help dialog.",
	inputChecked : "Input checks are handled via the validation of the data binding. In this example there are 2 inputs that are validated (a) while the user types and (b) when the user continues the process. If the build-in validation types are not sufficient you can build your own types. Like the email type in this example.",
	inputPassword : "To make sure the password is not shown as clear text you set the 'type' of an input control to 'Password'",
	inputTypes : "On touch devices the 'type' of the input controls the keyboard layout. On keyboard devices this setting has no effect.",
	select : "Choose one out of multiple options with the Select control. Use the control in the header, footer or main content section of the page. Note the different display options.",
	searchField : "Use the Search Field to let the user enter a search input and trigger the search process",

	listFooter : "With the 'footerText' property you can set a message that is shown in the very end of the list",
	listNavType : "If only a subset of the list items are navigable you should indicate those by setting their 'type' to 'Navigation'. This displays an navigation arrow. Do not show arrows if all items are navigable. This achieved by setting the 'type' to 'Active'.",
	listNoData : "If the list is empty it indicates this state by displaying a message text.",
	listToolbar : "The 'headerText' property is an easy but limited way of setting the list header. If you need more flexibility you should assemble your own header or info toolbar that can also contain buttons.",
	listGrowing : "The Growing feature helps if your content is too big to be loaded/shown at once. It paginates the content into smaller chunks - aka pages - which are loaded/shown one after another. Random access to pages further in the end is not possible. Depending on the model the content is loaded on demand (oData) or shown on demand (JSON)",
	listGrouping : "Grouping your items makes it easier for the user to browse and find the desired content",
	listSelection : "'Single selection' forces the user to choose exactly one out of many items. With the 'multi' selection the user can pick multiple items at the same time. This is helpful for e.g. batch processing. With 'includeItem' the selection is also changed when pressing the item",

	listItemStandardTitle : "By default the title size adapts to the available space and gets bigger if the description is empty. If you have list items with and without description this results in titles with different sizes. In this cases it is better to switch the size adaption off.",
	listItemObject : "The Object List Item has many possibilities to provide a quick overview for an object within a list",
	listItemStandard : "This list item offers a standardized user interface for list content. Use any combination of title, description, info and icon",

	table : "The Table shares many features with the List and introduces columns in addition",
	tablePerso : "The sap.m.TablePersoDialog is a simple dialog to be used for allowing the user to set table personalizations, specifically column visibility and order. Use the sap.m.TablePersoController in conjunction with a persistence service based on the abstract sap.m.TablePersoProvider to have changes made and persisted.",
	tableViewSettingsDialog : "The View Settings Dialog is standard UI pattern for specifying sorting, grouping and filtering. For a table it should be triggered by a button in the table header with the 'drop-down-list' icon. The active filter should be shown with the table's info bar including an 'add-filter' icon"

};
