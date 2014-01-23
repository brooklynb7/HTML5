/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.ThingAction");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.ux3.ThingAction",{metadata:{library:"sap.ui.ux3",properties:{"text":{type:"string",group:"Misc",defaultValue:null},"enabled":{type:"boolean",group:"Misc",defaultValue:true}},events:{"select":{}}}});sap.ui.ux3.ThingAction.M_EVENTS={'select':'select'};
sap.ui.ux3.ThingAction.prototype.onclick=function(e){this.fireSelect({id:this.getId(),action:this})};
sap.ui.ux3.ThingAction.prototype.onsapselect=function(e){this.fireSelect({id:this.getId(),action:this})};
sap.ui.ux3.ThingAction.prototype.setTooltip=function(t){var o=this.getTooltip();if(o instanceof sap.ui.core.TooltipBase){this.removeDelegate(o)}if(t instanceof sap.ui.core.TooltipBase){t._currentControl=this;this.addDelegate(t)}this.setAggregation("tooltip",t,true);return this};
