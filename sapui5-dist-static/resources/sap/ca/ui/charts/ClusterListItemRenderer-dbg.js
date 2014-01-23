/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.ca.ui.charts.ClusterListItemRenderer");

jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListItemBaseRenderer");

/**
 * @class ClusterListItem renderer.
 * @static
 */
sap.ca.ui.charts.ClusterListItemRenderer = sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *          oRenderManager the RenderManager that can be used for writing to the
 *          Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *          oControl an object representation of the control that should be
 *          rendered
 */
sap.ca.ui.charts.ClusterListItemRenderer.renderLIAttributes = function(rm, oLI) {
   rm.addClass("sapMCLI");
};

sap.ca.ui.charts.ClusterListItemRenderer.renderLIContent = function(rm, oLI) {
   var sTitle = oLI.getTitle();

   if (sTitle) {
      rm.write("<div");
      rm.writeAttributeEscaped("for", oLI.getId() + "-title");
      rm.writeAttributeEscaped("class", "sapMCLITitle");
      rm.write(">");
      rm.writeEscaped(sTitle);
      rm.write("</div>");
   }
   
   this.renderLIItems(rm, oLI, oLI.getItems());
};

sap.ca.ui.charts.ClusterListItemRenderer.renderLIItems = function(rm, oLI, oItems) {
   if ( typeof oItems === "undefined" ) {
      return;
   }
   
   for (var nIndex in oItems) {
      var oItem      = oItems[nIndex];
      var oSubItems  = oItem["items"];
      var bLeaf      = typeof oSubItems === "undefined";
      
      if ( bLeaf ) {
         var sLabel     = oItem["label"];
         var sValue     = oItem["value"];
         var vColor     = oItem["color"];
         
         rm.write("<div");
         rm.writeAttributeEscaped("id", oLI.getId() + "-item");
         rm.writeAttributeEscaped("class", "sapMCLIItem");
         rm.write(">");
         
         rm.write("<div");
         rm.writeAttributeEscaped("id", oLI.getId() + "-icon");
         rm.writeAttributeEscaped("class", "sapMCLIIcon");
         rm.write(">");
         
         rm.write("<div");
         rm.writeAttributeEscaped("id", oLI.getId() + "-colorBox");
         rm.writeAttributeEscaped("class", "sapMCLIColorBox");            
         rm.writeAttributeEscaped("style", "background: " + sap.ca.ui.charts.ClusterListItemRenderer.formatColor(vColor));
         rm.write(">");
         rm.write("</div>");
         
         rm.write("</div>");
         
         if (sLabel) {
            rm.write("<label");
            rm.writeAttributeEscaped("for", oLI.getId() + "-label");
            rm.writeAttributeEscaped("class", "sapMCLIGroup");
            rm.write(">");
            rm.writeEscaped(sLabel);
            rm.write("</label>");
         }
         
         if (sValue) {
            rm.write("<div");
            rm.writeAttributeEscaped("for", oLI.getId() + "-value");
            rm.writeAttributeEscaped("class", "sapMCLIValue");
            rm.write(">");
            rm.writeEscaped(sValue);
            rm.write("</div>");
         }
         
         rm.write("</div>");
         
      } else {
         var sTitle  = oItem["title"];

         if (sTitle) {
            rm.write("<div");
            rm.writeAttributeEscaped("for", oLI.getId() + "-title");
            rm.writeAttributeEscaped("class", "sapMCLITitle");
            rm.write(">");
            rm.writeEscaped(sTitle);
            rm.write("</div>");
         }
         
         this.renderLIItems(rm, oLI, oSubItems);
      }
   }
};

sap.ca.ui.charts.ClusterListItemRenderer.formatColor = function(vColor) {
   if ( typeof vColor === "string" ) {
      return vColor;
   }
   if ( typeof vColor !== "number" ) {
      return "#ffffff";
   }
   var sColor = vColor.toString(16);
   while ( sColor.length < 6 ) {
      sColor = "0" + sColor;
   }
   return "#" + sColor;
};