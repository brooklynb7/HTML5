/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.ValueHelpFieldRenderer");jQuery.sap.require("sap.ui.commons.TextFieldRenderer");sap.ui.commons.ValueHelpFieldRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.TextFieldRenderer);
sap.ui.commons.ValueHelpFieldRenderer.renderOuterAttributes=function(r,c){r.addClass("sapUiTfCombo");r.writeAttribute("aria-owns",c.getId()+'-input '+c.getId()+'-icon')};
sap.ui.commons.ValueHelpFieldRenderer.renderOuterContent=function(r,c){r.write('<img id=',c.getId()+'-icon');r.addClass("sapUiTfValueHelpIcon");if(c.getEnabled()&&c.getEditable()){r.addClass("sapUiTfValueHelpRegularIcon")}this.renderIcon(r,c);r.writeClasses();r.writeAttribute("role","button");r.write(">")};
sap.ui.commons.ValueHelpFieldRenderer.renderIcon=function(r,c){var i="";c.sIcon="";c.sIconRegularUrl="";c.sIconHoverUrl="";c.sIconDsblUrl="";if(!c.getEnabled()){if(c.getIconDisabledURL()){c.sIconDsblUrl=c.getIconDisabledURL()}else if(c.getIconURL()){c.sIconDsblUrl=c.getIconURL();var I=jQuery.sap.domById(c.getId()+'-icon');r.addClass('sapUiTfValueHelpDsblIcon')}else{c.sIcon=sap.ui.core.theming.Parameters.get('sap.ui.commons.ValueHelpField:sapUiValueHelpIconDsblUrl');c.sIconDsblUrl=jQuery.sap.getModulePath("sap.ui.commons",'/')+"themes/"+sap.ui.getCore().getConfiguration().getTheme()+c.sIcon}i=c.sIconDsblUrl}else{if(c.getIconURL()){c.sIconRegularUrl=c.getIconURL()}else{c.sIcon=sap.ui.core.theming.Parameters.get('sap.ui.commons.ValueHelpField:sapUiValueHelpIconRegularUrl');c.sIconRegularUrl=jQuery.sap.getModulePath("sap.ui.commons",'/')+"themes/"+sap.ui.getCore().getConfiguration().getTheme()+c.sIcon}i=c.sIconRegularUrl}r.writeAttributeEscaped('src',i)};
