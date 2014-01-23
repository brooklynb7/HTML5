jQuery.sap.declare("sap.ca.ui.TabContainerOverflowRenderer");
jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.ui.core.IconPool");
sap.ui.core.EnabledPropagator.apply(sap.ca.ui.TabContainerOverflow.prototype, [true]);


sap.ca.ui.TabContainerOverflowRenderer = {
};

/**
 * Array of all available icon color CSS classes
 * 
 * @private
 */
sap.ca.ui.TabContainerOverflowRenderer._aAllIconColors = ['sapMITFilterCritical', 'sapMITFilterPositive', 'sapMITFilterNegative', 'sapMITFilterDefault'];


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ca.ui.TabContainerOverflowRenderer.render = function(oRM, oControl){
	
	// return immediately if control is not visible
	if (!oControl.getVisible()) {
		return;
	}
	
	var aItems = oControl.getItems();
	var bTextOnly = oControl._checkTextOnly(aItems);
	var bNoText = oControl._checkNoText(aItems);
	
	
	
	oRM.write("<div ");
	oRM.addClass("sapTCOB");
	oRM.writeControlData(oControl);
	oRM.writeClasses();
	oRM.write(">");
	oRM.write("<div");
	oRM.addClass("sapMITBHead");
	if (bTextOnly) {
		oRM.addClass("sapMITTextOnly");
	}
	if (bNoText) {
		oRM.addClass("sapMITNoText");
	}
	oRM.writeClasses();
	oRM.write(">");
	jQuery.each(aItems, function(iIndex, oItem) {
		oRM.write("<div ");
		oRM.writeElementData(oItem);
		oRM.addClass("sapTCO");
		if (oItem instanceof sap.m.IconTabFilter) {
			if (oItem.getShowAll()) {
				oRM.addClass("sapMITAll");
			} else {
				oRM.addClass("sapMITFilter");
				oRM.addClass("sapMITFilter" + oItem.getIconColor());
			}
			if (!oItem.getEnabled()) {
				oRM.addClass("sapMITDisabled");
			}
 			oRM.writeClasses();
			oRM.write(">");
			oRM.write("<div class='sapMITTab'>");
			if (!oItem.getShowAll() || !oItem.getIcon()) {
				oRM.renderControl(oItem._getImageControl(['sapMITFilterIcon', 'sapMITFilter' + oItem.getIconColor()], oControl, sap.ca.ui.TabContainerOverflowRenderer._aAllIconColors));	
			}
			if (!oItem.getShowAll() && !oItem.getIcon() && !bTextOnly)  {
				oRM.write("<span class='sapMITFilterNoIcon'> </span>");
			}
		//	oRM.write("<span class=\"sapMITDesc\">");
			oRM.write("<span class=\"sapMITCount\">");
			oRM.writeEscaped(oItem.getCount());
			oRM.write("</span>");
			oRM.write("</div>");
			if (oItem.getText().length) {
				oRM.write("<div class=\"sapMITText\">");
				oRM.writeEscaped(oItem.getText());
				oRM.write("</div>");
			}
			
		//	oRM.write("</span>");
		} 
		else if (oItem instanceof sap.m.IconTabSeparator) {
			oRM.addClass("sapMITSep");
			if (!oItem.getIcon()) {
				oRM.addClass("sapMITSepLine");
			}
			oRM.writeClasses();
			oRM.write(">");
			
			if (oItem.getIcon()) {
				oRM.renderControl(oItem._getImageControl(['sapMITSepIcon'], oControl));	
			}
		}
		oRM.write("</div>");
	});
	oRM.write("</div>");
	var oContent = oControl.getContent();

	oRM.write("<div");
	oRM.writeAttributeEscaped("id", oControl.getId()+"-containerContent");
	oRM.write( "class='sapTCOBContainerContent'>");
	oRM.write("<div");
	oRM.writeAttributeEscaped("id", oControl.getId()+"-arrow");
	oRM.write( " class=\"sapTCOBArrow\"></div>");
	oRM.write("<div");
	oRM.writeAttributeEscaped("id", oControl.getId()+"-content");
	oRM.write("class=\"sapTCOBContent\">");
		
	if (oControl.oSelectedItem) {
		if (oControl.oSelectedItem.getContent()) {
			var oContentSelectedTab = oControl.oSelectedItem.getContent();
			if (oContentSelectedTab.length > 0) {
				oContent = oContentSelectedTab;
			}
		}
	}
	if (oContent.length > 0) {
		for (var i = 0; i < oContent.length; i++) {
			oRM.renderControl(oContent[i]);
		}
	}

	oRM.write("</div>");
	oRM.write("<div");
	oRM.writeAttributeEscaped("id", oControl.getId()+"-overlay");
	oRM.write("class=\"sapTCOBOverlay\">");
	oRM.write("</div>");
	oRM.renderControl(oControl.moreLessButton);

	oRM.write("</div>");
	oRM.write("</div>");
};


