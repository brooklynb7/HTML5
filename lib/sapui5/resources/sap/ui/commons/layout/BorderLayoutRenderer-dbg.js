/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.layout.BorderLayout
jQuery.sap.declare("sap.ui.commons.layout.BorderLayoutRenderer");

/**
 * @class BorderLayout renderer.
 * @static
 */
sap.ui.commons.layout.BorderLayoutRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.commons.layout.BorderLayoutRenderer.render = function(oRenderManager, oControl){

	// convenience variable
	var rm = oRenderManager,
		mAreas = {
			top : oControl.getTop(),
			begin : oControl.getBegin(),
			center : oControl.getCenter(),
			end : oControl.getEnd(),
			bottom : oControl.getBottom()
		},
		mAreaSizes = {
			top : sizeOf(mAreas.top),
			begin : sizeOf(mAreas.begin),
			center : sizeOf(mAreas.center),
			end : sizeOf(mAreas.end),
			bottom : sizeOf(mAreas.bottom)
		},
		bRTL = sap.ui.getCore().getConfiguration().getRTL();

	function sizeOf(oArea) {
		var oSize = oArea && oArea.getVisible() && oArea.getSize();
		return oSize || "0";
	}

	function renderArea(sAreaId) {
		var oArea = mAreas[sAreaId];
		var aAreaControls = oArea.getContent();
		var length = aAreaControls.length;

		rm.write("<div");
		rm.writeAttribute("id", oArea.getId());
		// collect styles and classes depending on area type
		switch(sAreaId)
		{
			case "top":
				rm.addClass("sapUiBorderLayoutTop");
				rm.addStyle("height", mAreaSizes.top);
				break;
			case "begin":
				rm.addClass("sapUiBorderLayoutBegin");
				rm.addStyle("width", mAreaSizes.begin);
				rm.addStyle("top", mAreaSizes.top);
				rm.addStyle("bottom", mAreaSizes.bottom);
				break;
			case "center":	
				rm.addClass("sapUiBorderLayoutCenter");
				rm.addStyle("top", mAreaSizes.top);
				rm.addStyle("right", bRTL ? mAreaSizes.begin : mAreaSizes.end);
				rm.addStyle("bottom", mAreaSizes.bottom);
				rm.addStyle("left", bRTL ? mAreaSizes.end : mAreaSizes.begin);
				break;
			case "end":		
				rm.addClass("sapUiBorderLayoutEnd");
				rm.addStyle("width", mAreaSizes.end);
				rm.addStyle("top", mAreaSizes.top);
				rm.addStyle("bottom", mAreaSizes.bottom);
				break;
			case "bottom":	
				rm.addClass("sapUiBorderLayoutBottom");
				rm.addStyle("height", mAreaSizes.bottom);
				break;
			default:
				jQuery.sap.assert("default branch must not be reached");
				break;
		}

		//add overflow definition to the style-attribute value
		rm.addStyle("overflow-x", oArea.getOverflowX());
		rm.addStyle("overflow-y", oArea.getOverflowY());
		
		//write alignment
		var sAlign = oArea.getContentAlign();
		if (bRTL) {
			if (sAlign === "right") {
				sAlign = "left";
			} else if (sAlign === "left"){
				sAlign = "right";
			}
		}
		rm.addStyle("text-align", sAlign);
		
		rm.writeClasses(oArea);
		rm.writeStyles();
		
		rm.write(">");

		//render the controls
		for(var i=0;i<length;i++) {
			rm.renderControl(aAreaControls[i]);
		}

		rm.write("</div>");
	}

	// open the outer HTML tag
	rm.write("<div");
	// let control data be written so that connection to SAPUI5 eventing gets established
	rm.writeControlData(oControl);
	rm.addClass("sapUiBorderLayout");
	rm.addStyle("width", oControl.getWidth());
	rm.addStyle("height", oControl.getHeight());
	rm.writeClasses();
	rm.writeStyles();
	// don't forget to close the HTML tag
	rm.write(">");

	/* render areas */
	if (mAreas.top/* && oTop.getVisible()*/) {
		renderArea("top");
	}
	if(mAreas.begin/* && oBegin.getVisible()*/) {
		renderArea("begin");
	}
	if(mAreas.center && mAreas.center.getVisible()) {
		renderArea("center");
	}
	if(mAreas.end/* && oEnd.getVisible()*/) {
		renderArea("end");
	}
	if(mAreas.bottom/* && oBottom.getVisible()*/)	{
		renderArea("bottom");
	}

	// close surrounding div
	rm.write("</div>");
};

sap.ui.commons.layout.BorderLayoutRenderer.animate = function(oArea, bVisible) {
	
	var oBorderLayout = oArea.getParent(),
		sBorderLayoutId = oBorderLayout.getId(),
		bRTL = sap.ui.getCore().getConfiguration().getRTL(),
		end = bVisible ? oArea.getSize() : "0";

	function $area(sAreaId) {
		var oOtherArea = oArea.getParent().getArea(sAreaId);
		return oOtherArea ? jQuery.sap.byId(oOtherArea.getId()) : jQuery();
	}
	
	switch (oArea.getAreaId()) {
	case "top":		
		$area("top").animate({height: end});
		$area("begin").animate({top: end});
		$area("center").animate({top: end});
		$area("end").animate({top: end});
		break;
		
	case "begin":	
		$area("begin").animate({width: end});
		$area("center").animate(bRTL ? {right: end} : {left: end});
		break;
		
	case "end":		
		$area("center").animate(bRTL ? {left: end} : {right: end});
		$area("end").animate({width: end});
		break;
		
	case "bottom":
		$area("begin").animate({bottom: end});
		$area("center").animate({bottom: end});
		$area("end").animate({bottom: end});
		$area("bottom").animate({height: end});
		break;
	
	default:
		break;
	}

	
};
