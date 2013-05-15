/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.ValueHelpField");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.commons.TextField");sap.ui.commons.TextField.extend("sap.ui.commons.ValueHelpField",{metadata:{library:"sap.ui.commons",properties:{"iconURL":{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},"iconHoverURL":{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},"iconDisabledURL":{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null}},events:{"valueHelpRequest":{}}}});sap.ui.commons.ValueHelpField.M_EVENTS={'valueHelpRequest':'valueHelpRequest'};jQuery.sap.require("sap.ui.core.theming.Parameters");
sap.ui.commons.ValueHelpField.prototype.onmouseover=function(e){if(e.target.id==this.getId()+'-icon'&&this.getEnabled()&&this.getEditable()){if(this.getIconHoverURL()){this.sIconHoverUrl=this.getIconHoverURL()}else if(this.getIconURL()){this.sIconHoverUrl=this.sIconRegularUrl}else{this.sIcon=sap.ui.core.theming.Parameters.get('sap.ui.commons.ValueHelpField:sapUiValueHelpIconHoverUrl');this.sIconHoverUrl=jQuery.sap.getModulePath("sap.ui.commons",'/')+"themes/"+sap.ui.getCore().getConfiguration().getTheme()+this.sIcon}var i=jQuery.sap.byId(e.target.id);i.attr('src',this.sIconHoverUrl)}};
sap.ui.commons.ValueHelpField.prototype.onmouseout=function(e){if(e.target.id==this.getId()+'-icon'&&this.getEnabled()&&this.getEditable()){var i=jQuery.sap.byId(e.target.id);i.attr('src',this.sIconRegularUrl)}};
sap.ui.commons.ValueHelpField.prototype.onclick=function(e){if(e.target.id==this.getId()+'-icon'&&this.getEnabled()&&this.getEditable()){this.fireValueHelpRequest({})}};
sap.ui.commons.ValueHelpField.prototype.onsapshow=function(e){this._checkChange(e);this.fireValueHelpRequest({});e.preventDefault();e.stopPropagation()};
sap.ui.commons.ValueHelpField.prototype.getTooltip_AsString=function(){var t=sap.ui.commons.TextField.prototype.getTooltip_AsString.apply(this,arguments);if(this.getEnabled()&&this.getEditable()){var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");var s=r.getText("DDBX_SHI_ARIA");s=s==="DDBX_SHI_ARIA"?"Open search help via {0}":s;s=s.replace("{0}",r.getText("DDBX_SHIF4"));return(t?t+" - ":"")+s}else{return t}};
sap.ui.commons.ValueHelpField.prototype.onThemeChanged=function(e){var i=this.getIconURL();var I=jQuery.sap.byId(this.getId()+'-icon');I.attr('src',i)};
sap.ui.commons.ValueHelpField.prototype.exit=function(){this.sIcon=undefined;this.sIconRegularUrl=undefined;this.sIconHoverUrl=undefined;this.sIconDsblUrl=undefined};
sap.ui.commons.ValueHelpField.prototype.getFocusDomRef=function(){return jQuery.sap.domById(this.getId()+"-input")};
sap.ui.commons.ValueHelpField.prototype.getIdForLabel=function(){return this.getId()+"-input"};
