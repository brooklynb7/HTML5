/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ushell.ui.launchpad.PlusTile");jQuery.sap.require("sap.ushell.library");jQuery.sap.require("sap.ushell.ui.launchpad.Tile");sap.ushell.ui.launchpad.Tile.extend("sap.ushell.ui.launchpad.PlusTile",{metadata:{library:"sap.ushell",properties:{"groupId":{type:"string",group:"Misc",defaultValue:''}},events:{"press":{}}}});sap.ushell.ui.launchpad.PlusTile.M_EVENTS={'press':'press'};
// Copyright (c) 2013 SAP AG, All Rights Reserved
(function(){"use strict";sap.ushell.ui.launchpad.PlusTile.prototype.init=function(){this.oIcon=new sap.ui.core.Icon({src:'sys-cancel',tooltip:sap.ushell.resources.i18n.getText("open_catalog")})};sap.ushell.ui.launchpad.PlusTile.prototype.exit=function(){if(this.oIcon){this.oIcon.destroy()}};sap.ushell.ui.launchpad.PlusTile.prototype.onclick=function(){this.firePress()};sap.ushell.ui.launchpad.PlusTile.prototype.setGroupId=function(v){this.setProperty("groupId",v,true);return this}}());
