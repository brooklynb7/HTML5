// Copyright (c) 2013 SAP AG, All Rights Reserved
jQuery.sap.declare("sap.ushell.ui.launchpad.HeaderTileRenderer");sap.ushell.ui.launchpad.HeaderTileRenderer={};
sap.ushell.ui.launchpad.HeaderTileRenderer.render=function(r,c){r.write("<");r.write(c.getHeaderLevel().toLowerCase());r.writeControlData(c);r.addClass("sapUshellHeaderTile");if(!c.getVisible()){r.addClass("sapUshellHidden")}r.writeClasses();r.write(">");r.writeEscaped(c.getHeaderText());r.write("</");r.write(c.getHeaderLevel().toLowerCase());r.write(">")};
