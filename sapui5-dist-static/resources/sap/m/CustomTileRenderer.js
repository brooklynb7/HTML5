/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.CustomTileRenderer");jQuery.sap.require("sap.m.TileRenderer");sap.m.CustomTileRenderer=sap.ui.core.Renderer.extend(sap.m.TileRenderer);
sap.m.CustomTileRenderer.render=function(r,c){r.write("<div ");r.writeControlData(c);r.addClass("sapMCustomTile");r.writeClasses();r.write(">");r.write("<div id=\""+c.getId()+"-remove\" class=\"sapMTCRemove\"></div>");r.write("<div class=\"sapMCustomTileContent\">");this._renderContent(r,c);r.write("</div></div>")};
sap.m.CustomTileRenderer._renderContent=function(r,t){r.renderControl(t.getContent())};
