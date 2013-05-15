/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.StandardListItem");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.ListItemBase");sap.m.ListItemBase.extend("sap.m.StandardListItem",{metadata:{library:"sap.m",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"description":{type:"string",group:"Misc",defaultValue:null},"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"iconInset":{type:"boolean",group:"Appearance",defaultValue:true},"iconDensityAware":{type:"boolean",group:"Misc",defaultValue:true},"activeIcon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"info":{type:"string",group:"Misc",defaultValue:null},"infoState":{type:"sap.ui.core.ValueState",group:"Misc",defaultValue:sap.ui.core.ValueState.None}}}});jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.m.StandardListItem.prototype.exit=function(){if(this._image){this._image.destroy()}sap.m.ListItemBase.prototype.exit.apply(this,arguments)};
sap.m.StandardListItem.prototype._getImage=function(i,I,s,o){var a=this._image;if(a){a.setSrc(s);a.setDensityAware(o)}else{a=new sap.m.Image(i,{src:s,densityAware:o}).addStyleClass(I,true).setParent(this,null,true)}return this._image=a};
sap.m.StandardListItem.prototype._activeHandlingInheritor=function(){var i=sap.ui.getCore().byId(this.getId()+"-img");if(i&&this.getActiveIcon()){i.setSrc(this.getActiveIcon())}};
sap.m.StandardListItem.prototype._inactiveHandlingInheritor=function(){var i=sap.ui.getCore().byId(this.getId()+"-img");if(i){i.setSrc(this.getIcon())}};
