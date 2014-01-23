jQuery.sap.declare("sap.ca.ui.PictureViewerRenderer");jQuery.sap.require("sap.m.TileContainerRenderer");sap.ca.ui.PictureViewerRenderer={};
sap.ca.ui.PictureViewerRenderer.render=function(r,c){jQuery.sap.log.debug("PictureViewerRenderer :: begin rendering");sap.m.TileContainerRenderer.render(r,c);jQuery.sap.log.debug("PictureViewerRenderer :: end rendering")};
