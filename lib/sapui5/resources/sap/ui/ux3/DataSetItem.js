/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.DataSetItem");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.ux3.DataSetItem",{metadata:{library:"sap.ui.ux3",properties:{"iconSrc":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"title":{type:"string",group:"Misc",defaultValue:'Title'},"checkable":{type:"boolean",group:"Misc",defaultValue:true},"subtitle":{type:"string",group:"Misc",defaultValue:'Subtitle'}},events:{"selected":{}}}});sap.ui.ux3.DataSetItem.M_EVENTS={'selected':'selected'};sap.ui.ux3.DataSetItem.getMetadata()._mHiddenAggregations={"_template":{multiple:false,type:"sap.ui.core.Control"}};
sap.ui.ux3.DataSetItem.prototype.onclick=function(e){e.stopPropagation();this.fireSelected({itemId:this.getId()})};
sap.ui.ux3.DataSetItem.prototype._destroyTemplate=function(){this.destroyAggregation("_template",true);return this};
sap.ui.ux3.DataSetItem.prototype._setTemplate=function(t){this.setAggregation("_template",t,true);return this};
sap.ui.ux3.DataSetItem.prototype._getTemplate=function(){return this.getAggregation("_template")}
