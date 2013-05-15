/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.ImageMapRenderer");sap.ui.commons.ImageMapRenderer={};
sap.ui.commons.ImageMapRenderer.render=function(i,I){var r=i;r.write("<map tabindex='-1'");r.writeControlData(I);r.writeAttributeEscaped("name",I.getName());if(I.getTooltip_AsString()){r.writeAttributeEscaped("title",I.getTooltip_AsString())}r.write(">");var a=I.getAreas();for(var b=0,l=a.length;b<l;b++){r.write("<area ");r.writeElementData(a[b]);var s=a[b].getShape();var c=a[b].getCoords();var h=a[b].getHref();var A=a[b].getAlt();var t=a[b].getTooltip_AsString();if((s==="rect")||(s==="circle")||(s==="poly")){r.writeAttribute("shape",s)}else{r.writeAttribute("shape","default")}if(c){r.writeAttributeEscaped("coords",c)}if(h){r.writeAttributeEscaped("href",h)}if(A){r.writeAttributeEscaped("alt",A)}if(t){r.writeAttributeEscaped("title",t)}r.writeAttribute("tabIndex",0);r.write(">")}r.write("</map>")};
