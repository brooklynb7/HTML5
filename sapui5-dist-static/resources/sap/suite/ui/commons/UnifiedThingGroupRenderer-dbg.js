/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.UnifiedThingGroupRenderer");

/**
 * @class UnifiedThingGroup renderer. 
 * @static
 */
sap.suite.ui.commons.UnifiedThingGroupRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.UnifiedThingGroupRenderer.render = function(rm, oControl){ 
	 // write the HTML into the render manager
	 rm.write("<div");
	 rm.writeControlData(oControl);
	 rm.addClass("sapSuiteUtg");
	 rm.writeClasses();
	 rm.write(">"); // div element
	 
	 // header div
	 rm.write("<div");
	 rm.addClass("sapSuiteUtgHeader");
	 rm.writeClasses();
	 rm.writeAttribute("id", oControl.getId() + "-thing-group-header");
	 rm.write(">");
         // title div
         rm.write("<div");
         rm.addClass("sapSuiteUtgTitle");
         rm.writeClasses();
         rm.writeAttribute("id", oControl.getId() + "-thing-group-title");
         rm.write(">");
            rm.writeEscaped(oControl.getTitle());
         rm.write("</div>");

         // description div
         rm.write("<div");
         rm.addClass("sapSuiteUtgDesc");
         rm.writeClasses();
         rm.writeAttribute("id", oControl.getId() + "-thing-group-desc");
         rm.write(">");
            rm.writeEscaped(oControl.getDescription());
         rm.write("</div>");
	 rm.write("</div>");

	 // content div
	 rm.write("<div");
	 rm.addClass("sapSuiteUtgContent");
     rm.addClass("sapSuiteUtgContent"+oControl.getDesign());
	 rm.writeClasses();
	 rm.writeAttribute("id", oControl.getId() + "-thing-group-content");
	 rm.write(">");
	 	 rm.renderControl(oControl.getContent());
	 rm.write("</div>");

	 rm.write("</div>");
};
