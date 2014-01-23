/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ushell.ui.tile.TileBase");jQuery.sap.require("sap.ushell.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ushell.ui.tile.TileBase",{metadata:{library:"sap.ushell",properties:{"title":{type:"string",group:"Data",defaultValue:null},"subtitle":{type:"string",group:"Data",defaultValue:null},"icon":{type:"string",group:"Data",defaultValue:null},"info":{type:"string",group:"Data",defaultValue:null},"infoState":{type:"sap.ushell.ui.tile.State",group:"",defaultValue:sap.ushell.ui.tile.State.Neutral},"targetURL":{type:"string",group:"Behavior",defaultValue:null},"highlightTerms":{type:"any",group:"Appearance",defaultValue:[]}},aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},events:{"press":{}}}});sap.ushell.ui.tile.TileBase.M_EVENTS={'press':'press'};
// Copyright (c) 2013 SAP AG, All Rights Reserved
(function(){"use strict";sap.ushell.ui.tile.TileBase.prototype.ontap=function(){this.firePress({})}}());
