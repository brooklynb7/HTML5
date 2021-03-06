/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.declare("sap.ui.commons.form.GridLayoutRenderer");
jQuery.sap.require("sap.ui.commons.form.FormLayoutRenderer");

/**
 * @class form/GridLayout renderer.
 * @static
 */
sap.ui.commons.form.GridLayoutRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.form.FormLayoutRenderer);

/**
 * Renders the HTML for the given form content, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oLayout an object representation of the Layout control that should be rendered
 * @param {sap.ui.commons.form.Form} oForm, a form control to render its content
 */
sap.ui.commons.form.GridLayoutRenderer.renderForm = function(rm, oLayout, oForm){

	var bSingleColumn = oLayout.getSingleColumn();
	var iColumns = 16;
	var bSeparatorColumn = false;
	var iColumnsHalf = 0;
	var aContainers = oForm.getFormContainers();
	var iContainerLength = aContainers.length;

	if (bSingleColumn) {
		iColumns = iColumns/2;
		iColumnsHalf = iColumns;
	}else{
		iColumnsHalf = iColumns/2;
		//check if the separator column is needed -> if there are half containers
		for ( var i = 0; i < iContainerLength; i++) {
			var oContainerData = this.getContainerData(oLayout, aContainers[i]);
			if (oContainerData && oContainerData.getHalfGrid()) {
				bSeparatorColumn = true;
				break;
			}
		}
	}

	rm.write("<table role=\"presentation\"");
	rm.writeControlData(oLayout);
	rm.write(" cellpadding=\"0\" cellspacing=\"0\"");
	rm.addStyle("border-collapse", "collapse");
	rm.addStyle("table-layout", "fixed");
	rm.addStyle("width", "100%");
	rm.addClass("sapUiGrid");

	rm.writeStyles();
	rm.writeClasses();
	rm.write(">");
	rm.write("<colgroup>");
	rm.write("<col span="+iColumnsHalf+">");
	if (bSeparatorColumn) {
		rm.write("<col class = \"sapUiGridSpace\"span=1>");
	}
	if (!bSingleColumn) {
		rm.write("<col span="+iColumnsHalf+">");
	}
	rm.write("</colgroup><tbody>");

	// form header as table header
	if (oForm.getTitle()) {
		var iTitleCells = iColumns;
		if (bSeparatorColumn) {
			iTitleCells++;
		}
		rm.write("<tr><th colspan="+iTitleCells+">");
		this.renderTitle(rm, oForm.getTitle(), undefined, false, sap.ui.commons.TitleLevel.H3, oForm.getId());
		rm.write("</th></tr>")
	}

	var i = 0;
	while (i < iContainerLength) {
		var oContainer = aContainers[i];
		var oContainerData = this.getContainerData(oLayout, oContainer);
		if (oContainerData && oContainerData.getHalfGrid() && !bSingleColumn) {
			var oContainer2 = aContainers[i+1];
			var oContainerData2;
			if (oContainer2) {
				oContainerData2 = this.getContainerData(oLayout, oContainer2);
			}
			if (oContainerData2 && oContainerData2.getHalfGrid()) {
				this.renderContainerHalfSize(rm, oLayout, oContainer, oContainer2, iColumns);
				i++;
			}else{
				// second container is full size or does not exist -> render only 1 container as half size
				this.renderContainerHalfSize(rm, oLayout, oContainer, undefined, iColumns);
			}
		} else {
			this.renderContainerFullSize(rm, oLayout, oContainer, iColumns, bSeparatorColumn);
		}

		i++;
	}

	if (jQuery.browser.msie && jQuery.browser.version.substring(0,1) == "9") {
		// As IE9 is buggy wth colspan and layout fixed if not all columns are defined least once
		rm.write("<tr style=\"visibility:hidden;\">")
		for ( var i = 0; i < iColumns; i++) {
			rm.write("<td style=\"visibility:hidden; padding:0; height: 0;\"></td>")
		}
		if (bSeparatorColumn) {
			rm.write("<td style=\"visibility:hidden; padding:0; height: 0;\"></td>")
		}
		rm.write("</tr>")
	}

	rm.write("</tbody></table>");

};

sap.ui.commons.form.GridLayoutRenderer.renderContainerFullSize = function(rm, oLayout, oContainer, iColumns, bSeparatorColumn){

	var bExpandable = oContainer.getExpandable();

	// as container has no own DOM Element no element data is rendered.
	// This should not be a problem as it is an element, not a control.

	// render Container tooltip at header cell
	var sTooltip = oContainer.getTooltip_AsString();

	// container header
	if (oContainer.getTitle()) {
		var iTitleCells = iColumns;
		if (bSeparatorColumn) {
			iTitleCells++;
		}
		rm.write("<tr><td colspan="+iTitleCells+" class=\"sapUiGridHeader\"");
		if (sTooltip) {
			rm.writeAttributeEscaped('title', sTooltip);
		}
		rm.write(">");
		this.renderTitle(rm, oContainer.getTitle(), oContainer._oExpandButton, bExpandable, sap.ui.commons.TitleLevel.H4, oContainer.getId());
		rm.write("</td></tr>")
	}

	if (!bExpandable || oContainer.getExpanded()) {
		// container is not expandable or is expanded -> render elements
		var aElements = oContainer.getFormElements();
		var aReservedCells = [];
		for (var j = 0, jl = aElements.length; j < jl; j++) {

			var oElement = aElements[j];
			var bEmptyRow = aReservedCells[0] && (aReservedCells[0][0] == iColumns);

			rm.write("<tr");
			if (aReservedCells[0] != "full" && !bEmptyRow) {
				rm.writeElementData(oElement);
				rm.addClass("sapUiFormElement");
			}
			rm.writeClasses();
			rm.write(">");
			if (!bEmptyRow) {
				aReservedCells = this.renderElement(rm, oLayout, oElement, false, iColumns, bSeparatorColumn, aReservedCells);
			}else{
				// the complete line is reserved -> render only an empty row
				aReservedCells.splice(0,1);
			}
			rm.write("</tr>")
			if (aReservedCells[0] == "full" || bEmptyRow) {
				// this is a full size element -> just render it again in the next line
				j = j-1;
			}
		}
		if (aReservedCells.length > 0) {
			// still rowspans left -> render dummy rows to fill up
			for ( var i = 0; i < aReservedCells.length; i++) {
			rm.write("<tr></tr>");
			}
		}
	}

};

// no bSeparartor needed because between 2 containers there must be a separator
sap.ui.commons.form.GridLayoutRenderer.renderContainerHalfSize = function(rm, oLayout, oContainer1, oContainer2, iColumns){

	var iContainerColumns = iColumns/2;

	var bExpandable1 = oContainer1.getExpandable();

	var sTooltip1 = oContainer1.getTooltip_AsString();
	var sTooltip2;

	var oTitle1 = oContainer1.getTitle();
	var oTitle2;

	var aElements1 = [];
	if (!bExpandable1 || oContainer1.getExpanded()) {
		aElements1 = oContainer1.getFormElements();
	}
	var iLength1 = aElements1.length;
	var aElements2 = [];
	var iLength2 = 0;

	var bExpandable2 = false;
	if (oContainer2) {
		bExpandable2 = oContainer2.getExpandable();
		sTooltip2 = oContainer2.getTooltip_AsString();
		oTitle2 = oContainer2.getTitle();
		if (!bExpandable2 || oContainer2.getExpanded()) {
			aElements2 = oContainer2.getFormElements();
		}
		iLength2 = aElements2.length;
	}

	if (oTitle1 || oTitle2) {
		// render title row (if one container has a title, the other has none leave the cells empty)
		rm.write("<tr><td colspan="+iContainerColumns+" class=\"sapUiGridHeader\"");
		if (sTooltip1) {
			rm.writeAttributeEscaped('title', sTooltip1);
		}
		rm.write(">");
		if (oTitle1) {
			this.renderTitle(rm, oTitle1, oContainer1._oExpandButton, bExpandable1, sap.ui.commons.TitleLevel.H4, oContainer1.getId());
		}
		rm.write("</td><td></td><td colspan="+iContainerColumns+" class=\"sapUiGridHeader\"")
		if (sTooltip2) {
			rm.writeAttributeEscaped('title', sTooltip2);
		}
		rm.write(">");
		if (oTitle2) {
			this.renderTitle(rm, oTitle2, oContainer2._oExpandButton, bExpandable2, sap.ui.commons.TitleLevel.H4, oContainer2.getId());
		}
		rm.write("</td></tr>")
	}

	if ((!bExpandable1 || oContainer1.getExpanded()) || (!bExpandable2 || oContainer2.getExpanded())) {
		var aReservedCells1 = [],
			aReservedCells2 = [];
		var i1 = 0, i2 = 0;

		while (i1 < iLength1 || i2 < iLength2) {
			var oElement1 = aElements1[i1];
			var oElement2 = aElements2[i2];
			var bEmptyRow1 = aReservedCells1[0] && (aReservedCells1[0][0] == iContainerColumns);
			var bEmptyRow2 = aReservedCells2[0] && (aReservedCells2[0][0] == iContainerColumns);

			rm.write("<tr>");
			if (!bEmptyRow1) {
				if (oElement1 && (!bExpandable1 || oContainer1.getExpanded())) {
					aReservedCells1 = this.renderElement(rm, oLayout, oElement1, true, iContainerColumns, false, aReservedCells1);
				}else{
					rm.write("<td colspan="+iContainerColumns+"></td>")
				}
				if (aReservedCells1[0] != "full") {
					i1++;
				}
			}else {
				if (aReservedCells1[0][2] > 0) {
					// render empty label cell
					rm.write("<td colspan="+aReservedCells1[0][2]+"></td>")
				}
				aReservedCells1.splice(0,1);
			}
			rm.write("<td></td>"); // separator column
			if (!bEmptyRow2) {
				if (oElement2 && (!bExpandable2 || oContainer2.getExpanded())) {
					aReservedCells2 = this.renderElement(rm, oLayout, oElement2, true, iContainerColumns, false, aReservedCells2);
				}else{
					rm.write("<td colspan="+iContainerColumns+"></td>")
				}
				if (aReservedCells2[0] != "full") {
					i2++;
				}
			}else {
				if (aReservedCells2[0][2] > 0) {
					// render empty label cell
					rm.write("<td colspan="+aReservedCells2[0][2]+"></td>")
				}
				aReservedCells2.splice(0,1);
			}
			rm.write("</tr>")
		}
		if (aReservedCells1.length > 0 || aReservedCells2.length > 0) {
			// still rowspans left -> render dummy rows to fill up
			for ( var i = 0; i < aReservedCells1.length || i < aReservedCells2.length; i++) {
			rm.write("<tr></tr>");
			}
		}
	}
};

/*
 * aReservedCells : Array of already used cells of vCells (Rowspan) of previous elements, "full" if a full-size field
 */
sap.ui.commons.form.GridLayoutRenderer.renderElement = function(rm, oLayout, oElement, bHalf, iCells, bSeparatorColumn, aReservedCells){

	var oLabel = oElement.getLabelControl(); // do not use getLabel() because it returns just text if only text is maintained
	var iLabelFromRowspan = 0;
	var aFields = oElement.getFields();
	var iCellsUsed = 0;
	var iAutoCellsUsed = 0;
	var bMiddleSet = false;

	if (aFields.length == 1 && this.getElementData(oLayout, aFields[0]) && this.getElementData(oLayout, aFields[0]).getHCells() == "full") {
		// field must be full size - render label in a separate row
		if (aReservedCells.length > 0 && aReservedCells[0] != "full") {
			// already rowspans left -> ignore full line and raise error
			jQuery.sap.log.error("Element \""+ oElement.getId() +"\" - Too much fields for one row!", "Renderer", "GridLayout");
			return aReservedCells;
		}
		if (bSeparatorColumn) {
			iCells = iCells + 1;
		}
		if (oLabel && aReservedCells[0] != "full") {
			rm.write("<td colspan="+iCells+" >");
			rm.renderControl(oLabel);
			rm.write("</td>");
			return ["full"];
		}else{
			aReservedCells.splice(0,1);
			var iRowspan = this.getElementData(oLayout, aFields[0]).getVCells();
			rm.write("<td colspan="+iCells);
			if (iRowspan > 1 && bHalf) {
				// Rowspan on full size cells -> reserve cells for next line (makes only sense in half size containers);
				rm.write(" rowspan="+iRowspan);
				for ( var x = 0; x < iRowspan-1; x++) {
					aReservedCells.push([iCells, undefined, false]);
				}
			}
			rm.write(" >");
			rm.renderControl(aFields[0]);
			rm.write("</td>");
			return aReservedCells;
		}
	}

	if (aReservedCells.length > 0 && aReservedCells[0][0] > 0) {
		// already cells reserved by previous lines via vCells
		// add label cells to free cells because they are reduced by rendering the label
		iCells = iCells - aReservedCells[0][0] + aReservedCells[0][2];
		bMiddleSet = aReservedCells[0][1];
		iLabelFromRowspan = aReservedCells[0][2];
		aReservedCells.splice(0,1);
	}

	var iLabelCells = iLabelFromRowspan;
	if (oLabel || iLabelFromRowspan > 0) {
		iLabelCells = 3;
		if (oLabel && iLabelFromRowspan == 0) {
			// if there is a rowspan in rows above, the label can not have a different size
			var oElementData = this.getElementData(oLayout, oLabel);

			if (oElementData) {
				var sColspan = oElementData.getHCells();
				if (sColspan != "auto" && sColspan != "full") {
					iLabelCells = parseInt(sColspan);
				}
			}
		}

		rm.write("<td colspan="+iLabelCells+" class=\"sapUiGridLabel\">");
		if (oLabel) {
			rm.renderControl(oLabel);
		}
		iCells = iCells - iLabelCells;
		rm.write("</td>");
	}

	if (aFields && aFields.length > 0) {
		// calculate free cells for auto size
		var iAutoCells = iCells;
		var iAutoFields = aFields.length;
		for (var i = 0, il = aFields.length; i < il; i++) {
			var oField = aFields[i];
			var oElementData = this.getElementData(oLayout, oField);
			if (oElementData && oElementData.getHCells() != "auto") {
				iAutoCells = iAutoCells - parseInt(oElementData.getHCells());
				iAutoFields = iAutoFields - 1;
			}
		}

		for (var i = 0, iAutoI = 0, il = aFields.length; i < il; i++) {
			var oField = aFields[i];
			var oElementData = this.getElementData(oLayout, oField);
			var sColspan = "auto";
			var iColspan = 1;
			var iRowspan = 1;
			if (oElementData) {
				sColspan = oElementData.getHCells();
				iRowspan = oElementData.getVCells();
			}
			// calculate real colspan
			if (sColspan == "auto") {
				if (iAutoCells > 0) {
					iColspan = Math.floor(iAutoCells / iAutoFields);
					if (iColspan < 1) {
						iColspan = 1;
					}
					iAutoI++;
					iAutoCellsUsed = iAutoCellsUsed + iColspan;
					if ((iAutoI == iAutoFields) && (iAutoCells > iAutoCellsUsed)) {
						iColspan = iColspan + (iAutoCells-iAutoCellsUsed);
					}
				} else {
					// no space for auto cells -> render it with 1 cell
					iColspan = 1;
				}
			}else{
				iColspan = parseInt(sColspan);
			}
			iCellsUsed = iCellsUsed + iColspan;
			if (iCellsUsed > iCells) {
				// too much cells
				jQuery.sap.log.error("Element \""+ oElement.getId() +"\" - Too much fields for one row!", "Renderer", "GridLayout");
				iCellsUsed = iCellsUsed - iColspan; // to add empty dummy cell
				break;
			}

			if (iRowspan > 1) {
				// Rowspan is used -> reserve cells for next line
				for ( var x = 0; x < iRowspan-1; x++) {
					if (oLabel) {
						iLabelFromRowspan = iLabelCells;
					}
					if (aReservedCells.length > x) {
						aReservedCells[x][0] = aReservedCells[x][0] + iColspan;
						aReservedCells[x][2] = iLabelFromRowspan;
					}else{
						aReservedCells.push([iLabelCells + iColspan, undefined, iLabelFromRowspan]);
					}
				}
			}

			if (bSeparatorColumn && iCellsUsed >= Math.floor(iCells/2) && !bMiddleSet) {
				// for the middle cell add the separator column
				iColspan = iColspan + 1;
				bMiddleSet = true;
				if (iRowspan > 1) {
					// Rowspan is used -> reserve cells for next line
					for ( var x = 0; x < iRowspan-1; x++) {
						aReservedCells[x][1] = true;
					}
				}
			}

			rm.write("<td");
			if (iColspan > 1) {
				rm.write(" colspan="+iColspan);
			}
			if (iRowspan > 1) {
				rm.write(" rowspan="+iRowspan);
			}
			rm.write(" >");
			rm.renderControl(oField);
			rm.write("</td>")
		}
	}
	if (bHalf && iCellsUsed < iCells) {
		// add an empty cell if not all cells are filled
		var iEmpty = iCells - iCellsUsed;
		rm.write("<td colspan="+iEmpty+" ></td>");
	}

	return aReservedCells;

};

sap.ui.commons.form.GridLayoutRenderer.getContainerData = function(oLayout, oContainer){

	return oLayout.getLayoutDataForElement(oContainer, "sap.ui.commons.form.GridContainerData")

};

sap.ui.commons.form.GridLayoutRenderer.getElementData = function(oLayout, oControl){

	return oLayout.getLayoutDataForElement(oControl, "sap.ui.commons.form.GridElementData")

};