/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.layout.ResponsiveFlowLayoutData");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.LayoutData");sap.ui.core.LayoutData.extend("sap.ui.commons.layout.ResponsiveFlowLayoutData",{metadata:{library:"sap.ui.commons",properties:{"minWidth":{type:"int",group:"Misc",defaultValue:100},"weight":{type:"int",group:"Misc",defaultValue:1},"linebreak":{type:"boolean",group:"Misc",defaultValue:false}}}});
/*!
 * @copyright@
 */
sap.ui.commons.layout.ResponsiveFlowLayoutData.MIN_WIDTH=100;sap.ui.commons.layout.ResponsiveFlowLayoutData.WEIGHT=1;sap.ui.commons.layout.ResponsiveFlowLayoutData.LINEBREAK=false;
sap.ui.commons.layout.ResponsiveFlowLayoutData.prototype.setWeight=function(w){if(w<1){var W="Values smaller than 1 are not valid. Default value '1' is used instead";jQuery.sap.log.warning(W,this);this.setProperty("weight",1)}else{this.setProperty("weight",w)}return this};
