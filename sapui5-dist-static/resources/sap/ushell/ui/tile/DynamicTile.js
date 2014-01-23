/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ushell.ui.tile.DynamicTile");jQuery.sap.require("sap.ushell.library");jQuery.sap.require("sap.ushell.ui.tile.TileBase");sap.ushell.ui.tile.TileBase.extend("sap.ushell.ui.tile.DynamicTile",{metadata:{library:"sap.ushell",properties:{"numberValue":{type:"string",group:"Data",defaultValue:'0.0'},"numberState":{type:"sap.ushell.ui.tile.State",group:"Appearance",defaultValue:sap.ushell.ui.tile.State.Neutral},"numberUnit":{type:"string",group:"Data",defaultValue:null},"numberDigits":{type:"int",group:"Appearance",defaultValue:0},"stateArrow":{type:"sap.ushell.ui.tile.StateArrow",group:"Appearance",defaultValue:sap.ushell.ui.tile.StateArrow.None},"numberFactor":{type:"string",group:"Data",defaultValue:null}}}});
// Copyright (c) 2013 SAP AG, All Rights Reserved
