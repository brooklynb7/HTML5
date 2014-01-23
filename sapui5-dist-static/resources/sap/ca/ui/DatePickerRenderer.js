jQuery.sap.declare("sap.ca.ui.DatePickerRenderer");jQuery.sap.require("sap.m.InputBaseRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.ca.ui.DatePickerRenderer=sap.ui.core.Renderer.extend(sap.m.InputBaseRenderer);
sap.ca.ui.DatePickerRenderer.writeInnerContent=function(r,c){r.write('<div class="sapMInputValHelp">');r.renderControl(c._getCalendarIcon());r.write('</div>')};
sap.ca.ui.DatePickerRenderer.addInnerClasses=function(r,c){r.addClass("sapMInputInnerVH")};
