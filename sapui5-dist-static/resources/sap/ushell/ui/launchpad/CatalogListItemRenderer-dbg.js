// Copyright (c) 2013 SAP AG, All Rights Reserved
jQuery.sap.declare("sap.ushell.ui.launchpad.CatalogListItemRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListItemBaseRenderer");

/**
 * @class CatalogListItem renderer.
 * @static
 * 
 * @private
 */
sap.ushell.ui.launchpad.CatalogListItemRenderer = sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);

sap.ushell.ui.launchpad.CatalogListItemRenderer.renderLIAttributes = function(rm, oLI) {
    rm.addClass("sapUshellCatalogLI");
    if(oLI._showSeparators  == sap.m.ListSeparators.None && !oLI.getIconInset()){
        rm.addClass("sapUshellCatalogLIShowSeparatorNone");
    }
    if(oLI.getIcon())
        rm.addClass("sapUshellCatalogLIIcon");
    if(!oLI.getIconInset())
        rm.addClass("sapUshellCatalogLIIconThumb");
    if(oLI.getDescription() && oLI.getIcon() &&  oLI.getIconInset())
        rm.addClass("sapUshellCatalogLIDescIcon");
    if(oLI.getDescription() && !oLI.getIcon())
        rm.addClass("sapUshellCatalogLIDescNoIcon");
    if(!oLI.getDescription() && oLI.getIcon())
        rm.addClass("sapUshellCatalogLINoDescIcon");
    if(oLI.getType() == sap.m.ListType.Detail || oLI.getType() == sap.m.ListType.DetailAndActive)
        rm.addClass("sapUshellCatalogLIDetail");

};

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager}
 *          oRenderManager the RenderManager that can be used for writing to the
 *          Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *          oLI an object representation of the control that should be
 *          rendered
 */
sap.ushell.ui.launchpad.CatalogListItemRenderer.renderLIContent = function(rm, oLI) {

    var isDescription = oLI.getTitle() && oLI.getDescription() || (oLI._showSeparators  == sap.m.ListSeparators.None && !oLI.getIconInset());
    var isInfo = oLI.getInfo();

    if (isDescription) {
        rm.write("<div");
        rm.addClass("sapUshellCatalogLIDiv");
        rm.writeClasses();
        rm.write(">");
    }

    rm.write("<div");
    if (!isDescription){
        rm.addClass("sapUshellCatalogLIDiv");
    }
    rm.addClass("sapUshellCatalogLITitleDiv");
    rm.writeClasses();
    rm.write(">");

    //noFlex: make an additional div for the contents table
    if(!isDescription && oLI._bNoFlex){
        rm.write('<div class="sapMLIBNoFlex">');
    }
    // List item text (also written when no title for keeping the space)
    rm.write("<");
    rm.write(oLI.getHeaderLevel().toLowerCase());
    if (isDescription) {
        rm.addClass("sapUshellCatalogLITitle");
    } else {
        rm.addClass("sapUshellCatalogLITitleOnly");
    }
    rm.writeClasses();
    rm.write(">");

    if (oLI.getEditMode()) {
        rm.renderControl(oLI.getEditInputField());
    } else {
        rm.writeEscaped(oLI.getTitle());
    }

    rm.write("</");
    rm.write(oLI.getHeaderLevel().toLowerCase());
    rm.write(">");

    //info div top when @sapUiInfoTop: true;
    if(isInfo && (sap.ui.core.theming.Parameters.get("sapUiInfoTop") == "true" || !isDescription)){
        rm.write("<div");
        rm.writeAttribute("id", oLI.getId() + "-info");
        rm.addClass("sapUshellCatalogLIInfo");
        rm.addClass("sapUshellCatalogLIInfo" + oLI.getInfoState());
        rm.writeClasses();
        rm.write(">");
        rm.writeEscaped(isInfo);
        rm.write("</div>");
    }

    //noFlex: make an additional div for the contents table
    if(!isDescription && oLI._bNoFlex){
        rm.write('</div>');
    }
    rm.write("</div>");

    rm.write("<div");
    rm.addClass("sapUshellCatalogLIDescriptionDiv");
    rm.writeClasses();
    rm.write(">");

    // List item text
    if (isDescription) {
        rm.write("<div");
        rm.addClass("sapUshellCatalogLIDescription");
        rm.writeClasses();
        rm.write(">");
        rm.writeEscaped(oLI.getDescription());
        rm.write("</div>");
    }

        if(isInfo && sap.ui.core.theming.Parameters.get("sapUiInfoTop") == "false" && isDescription){
        rm.write("<div");
        rm.writeAttribute("id", oLI.getId() + "-info");
        rm.addClass("sapUshellCatalogLIInfo");
        if(oLI._showSeparators == sap.m.ListSeparators.None && oLI.getInfoState() == sap.ui.core.ValueState.None)
            rm.addClass("sapUshellCatalogLIInfo" + oLI.getInfoState() + "ShowSeparatorNone");
        else
            rm.addClass("sapUshellCatalogLIInfo" + oLI.getInfoState());
        rm.writeClasses();
        rm.write(">");
        rm.writeEscaped(isInfo);
        rm.write("</div>");
    }
    rm.write("</div>");

    if (isDescription) {
        rm.write("</div>");
    }

    // image
    if (oLI.getIcon()) {
        if (oLI.getIconInset()) {
            var oList = sap.ui.getCore().byId(oLI._listId);
            if(oList && oList.getMode() == sap.m.ListMode.None && !oList.getShowUnread()){
                rm.renderControl(oLI._getImage((oLI.getId() + "-img"), "sapUshellCatalogLIImgFirst", oLI.getIcon(), oLI.getIconDensityAware()));
            }
            else{
                rm.renderControl(oLI._getImage((oLI.getId() + "-img"), "sapUshellCatalogLIImg", oLI.getIcon(), oLI.getIconDensityAware()));
            }
        } else {
            rm.renderControl(oLI._getImage((oLI.getId() + "-img"), "sapUshellCatalogLIImgThumb", oLI.getIcon(), oLI.getIconDensityAware()));
        }
    }

};
