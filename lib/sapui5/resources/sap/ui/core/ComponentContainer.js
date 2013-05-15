/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.ComponentContainer");jQuery.sap.require("sap.ui.core.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.core.ComponentContainer",{metadata:{library:"sap.ui.core",associations:{"component":{type:"sap.ui.core.Component",multiple:false}}}});
/*!
 * @copyright@
 */

sap.ui.core.ComponentContainer.prototype.init=function(){this.oComponentArea=null};
sap.ui.core.ComponentContainer.prototype.onBeforeRendering=function(){};
sap.ui.core.ComponentContainer.prototype.onAfterRendering=function(){jQuery.sap.delayedCall(0,this,function(){this.oComponentArea=new sap.ui.getCore().createUIArea(this.getId()+"-uiarea");this.getComponentInstance().setUIArea(this.oComponentArea)})};
sap.ui.core.ComponentContainer.prototype.getComponentInstance=function(){var c=this.getComponent();return sap.ui.getCore().getComponent(c)};
