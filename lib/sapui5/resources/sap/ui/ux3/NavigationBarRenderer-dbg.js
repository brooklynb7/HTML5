/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.NavigationBar
jQuery.sap.declare("sap.ui.ux3.NavigationBarRenderer");

/**
 * @class NavigationBar renderer.
 * @static
 */
sap.ui.ux3.NavigationBarRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.NavigationBarRenderer.render = function(oRenderManager, oControl) {

	// return immediately if control is invisible
	if (!oControl.getVisible()) {
		return;
	}

	// convenience variable
	var rm = oRenderManager;
	var sId = oControl.getId();

	// write the HTML into the render manager
	rm.addClass("sapUiUx3NavBar" + (oControl.getToplevelVariant() ? " sapUiUx3NavBarToplevel" : ""));
	rm.addClass("sapUiUx3NavBarUpperCase");
	rm.write("<nav");
	rm.writeControlData(oControl);
	rm.writeClasses();
	rm.write(" role='navigation'><ul id='" + sId + "-list' role='menubar' class='sapUiUx3NavBarList'>");
	rm.write(sap.ui.ux3.NavigationBarRenderer.getItemsHtml(oControl));
	rm.write("</ul>");
	rm.write("<a id='" + sId + "-ofb' tabindex='-1' role='presentation' class='sapUiUx3NavBarBack' href='javascript:void(0)'>&lt;&lt;</a>");
	rm.write("<a id='" + sId + "-off' tabindex='-1' role='presentation' class='sapUiUx3NavBarForward' href='javascript:void(0)'>&gt;&gt;</a>");
	rm.write("</nav>");
};



sap.ui.ux3.NavigationBarRenderer.getItemsHtml = function(oControl) {
	var html = [];
	var aItems = oControl.getItems();
	var bNeedToGetInstances = false;
	if (!aItems || aItems.length == 0) { // use the association instead, if the aggregation is empty
		aItems = oControl.getAssociatedItems();
		bNeedToGetInstances = true; // avoid type checks in the loop
	}
	
	var iNoOfItems = aItems.length;

	// dummy item to avoid jumping while animating
	html.push("<li><a id='" + oControl.getId() + "-dummyItem' class='sapUiUx3NavBarDummyItem sapUiUx3NavBarItem'>&nbsp;</a></li>");
	var selId = oControl.getSelectedItem();
	
	for (var i = 0; i < iNoOfItems; i++) {
		var item = bNeedToGetInstances ? sap.ui.getCore().byId(aItems[i]) : aItems[i];
		if (item.getVisible()) {
			var itemId = item.getId();
			var bIsSelected = itemId == selId;
			html.push("<li");
			if (bIsSelected) {
				html.push(" class='sapUiUx3NavBarItemSel'");
			}
			var url = item.getHref() || "javascript:void(0);";
			html.push("><a href='" + url + "' id='" + itemId + "' aria-setsize='" + iNoOfItems + "' aria-posinset='" + (i+1) + "' role='menuitemradio' class='sapUiUx3NavBarItem'");
			if (bIsSelected) {
				html.push(" tabindex='0'");
			}
			html.push(" aria-checked='" + (bIsSelected ? "true" : "false") + "'");
			
			var tooltip = item.getTooltip_AsString();
			if (tooltip) {
				html.push(" title='" + jQuery.sap.escapeHTML(tooltip) + "'");
			}
		
			html.push(">");
			html.push(jQuery.sap.escapeHTML(item.getText()));
			html.push("</a></li>");
		}
	}

	var arrowPos;
	if (oControl._bRtl) {
		arrowPos = "right:" + oControl._iLastArrowPos;
	} else {
		arrowPos = "left:" + oControl._iLastArrowPos;
	}
	html.push("<span id='" + oControl.getId() + "-arrow' style='" + arrowPos + "px;");
	if ((aItems.length == 1) && !oControl.getToplevelVariant() && jQuery.browser.msie && (jQuery.browser.version == 8 || jQuery.browser.version == 7)) { // IE8 workaround; other browsers understand nth-child, see Base-CSS
		html.push("display:none;"); // hide arrow when there is only one item
	}
	html.push("' class='sapUiUx3NavBarArrow'></span>");

	return html.join("");
};
