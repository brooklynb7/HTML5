/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.OverviewTile");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.m.Tile");sap.m.Tile.extend("sap.ca.ui.OverviewTile",{metadata:{publicMethods:["init"],library:"sap.ca.ui",properties:{"title":{type:"string",group:"Misc",defaultValue:'null'},"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:'null'},"contact":{type:"string",group:"Misc",defaultValue:'null'},"address":{type:"string",group:"Misc",defaultValue:'null'},"opportunities":{type:"string",group:"Misc",defaultValue:'null'},"rating":{type:"string",group:"Misc",defaultValue:'null'},"lastContact":{type:"string",group:"Misc",defaultValue:'null'},"nextContact":{type:"string",group:"Misc",defaultValue:'null'},"revenue":{type:"string",group:"Misc",defaultValue:'null'},"visible":{type:"boolean",group:"Misc",defaultValue:true},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"contactActive":{type:"boolean",group:"Behavior",defaultValue:false}},events:{"contactPress":{}}}});sap.ca.ui.OverviewTile.M_EVENTS={'contactPress':'contactPress'};jQuery.sap.require("sap.ui.core.IconPool");jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
sap.ca.ui.OverviewTile.prototype.init=function(){this._address=new sap.m.Text({maxLines:1});this._address.setParent(this);this._address.addStyleClass("sapCaUiOTAddress");this._oppLabel=new sap.m.Label();this._opp=new sap.m.Text({maxLines:1});this._createFormLine(this._oppLabel,this._opp,"OverviewTile.opportunities");this._revenueLabel=new sap.m.Label();this._revenue=new sap.m.Text({maxLines:1});this._createFormLine(this._revenueLabel,this._revenue,"OverviewTile.revenue");this._ratingLabel=new sap.m.Label();this._rating=new sap.m.Text({maxLines:1});this._createFormLine(this._ratingLabel,this._rating,"OverviewTile.rating");this._lastCtxLabel=new sap.m.Label();this._lastCtx=new sap.m.Text({maxLines:1});this._createFormLine(this._lastCtxLabel,this._lastCtx,"OverviewTile.lastAppointment");this._nextCtxLabel=new sap.m.Label();this._nextCtx=new sap.m.Text({maxLines:1});this._createFormLine(this._nextCtxLabel,this._nextCtx,"OverviewTile.nextAppointment");this._title=new sap.m.Text({maxLines:2});this._title.setParent(this);this._title.addStyleClass("sapCaUiOverviewTileTitle");this._ctxlink=new sap.m.Link(this.getId()+"-link");this._ctxlink.setParent(this);this._ctxlink.addStyleClass("sapCaUiOverviewTileContact");this._sapCaUiPath=jQuery.sap.getModulePath("sap.ca.ui");this._ctxlink.setEnabled(false)};
sap.ca.ui.OverviewTile.prototype._createFormLine=function(l,t,L){l.setText(sap.ca.ui.utils.resourcebundle.getText(L));l.setParent(this);l.addStyleClass("sapCaUiOTFormLbl");l.setTextAlign(sap.ui.core.TextAlign.Right);t.setParent(this);t.addStyleClass("sapCaUiOTFormVal");l.setLabelFor(t)};
sap.ca.ui.OverviewTile.prototype._getImageCtrl=function(){return this._image};
sap.ca.ui.OverviewTile.prototype._getTitleCtrl=function(){return this._title};
sap.ca.ui.OverviewTile.prototype._getContactCtrl=function(){return this._ctxlink};
sap.ca.ui.OverviewTile.prototype._getAddressCtrl=function(){return this._address};
sap.ca.ui.OverviewTile.prototype._getOppLabelCtrl=function(){return this._oppLabel};
sap.ca.ui.OverviewTile.prototype._getOppCtrl=function(){return this._opp};
sap.ca.ui.OverviewTile.prototype._getRevenueLabelCtrl=function(){return this._revenueLabel};
sap.ca.ui.OverviewTile.prototype._getRevenueCtrl=function(){return this._revenue};
sap.ca.ui.OverviewTile.prototype._getRatingLabelCtrl=function(){return this._ratingLabel};
sap.ca.ui.OverviewTile.prototype._getRatingCtrl=function(){return this._rating};
sap.ca.ui.OverviewTile.prototype._getLastCtxCtrl=function(){return this._lastCtx};
sap.ca.ui.OverviewTile.prototype._getLastCtxLabelCtrl=function(){return this._lastCtxLabel};
sap.ca.ui.OverviewTile.prototype._getNextCtxCtrl=function(){return this._nextCtx};
sap.ca.ui.OverviewTile.prototype._getNextCtxLabelCtrl=function(){return this._nextCtxLabel};
sap.ca.ui.OverviewTile.prototype.exit=function(){if(this._image){this._image.destroy();this._image=null}this._ctxlink.destroy();this._ctxlink=null;this._title.destroy();this._title=null;this._address.destroy();this._address=null;this._oppLabel.destroy();this._oppLabel=null;this._opp.destroy();this._opp=null;this._revenueLabel.destroy();this._revenueLabel=null;this._revenue.destroy();this._revenue=null;this._ratingLabel.destroy();this._ratingLabel=null;this._rating.destroy();this._rating=null;this._lastCtxLabel.destroy();this._lastCtxLabel=null;this._lastCtx.destroy();this._lastCtx=null;this._nextCtxLabel.destroy();this._nextCtxLabel=null;this._nextCtx.destroy();this._nextCtx=null};
sap.ca.ui.OverviewTile.prototype.getIcon=function(){if(!this.getProperty("icon")){this.setProperty("icon",this._sapCaUiPath+"/images/placeholder.png")}return this.getProperty("icon")};
sap.ca.ui.OverviewTile.prototype.setTitle=function(t){this.setProperty("title",t);this._title.setText(t)};
sap.ca.ui.OverviewTile.prototype.setContact=function(c){this.setProperty("contact",c);this._ctxlink.setText(c)};
sap.ca.ui.OverviewTile.prototype.setAddress=function(a){this.setProperty("address",a);this._address.setText(a)};
sap.ca.ui.OverviewTile.prototype.setOpportunities=function(o){this.setProperty("opportunities",o);this._opp.setText(o)};
sap.ca.ui.OverviewTile.prototype.setRevenue=function(r){this.setProperty("revenue",r);this._revenue.setText(r)};
sap.ca.ui.OverviewTile.prototype.setRating=function(r){this.setProperty("rating",r);this._rating.setText(r)};
sap.ca.ui.OverviewTile.prototype.setLastContact=function(l){this.setProperty("lastContact",l);this._lastCtx.setText(l)};
sap.ca.ui.OverviewTile.prototype.setNextContact=function(n){this.setProperty("nextContact",n);this._nextCtx.setText(n)};
sap.ca.ui.OverviewTile.prototype.setContactActive=function(c){var a=(c===true);this.setProperty("contactActive",a);this._ctxlink.setEnabled(a)};
sap.ca.ui.OverviewTile.prototype.onBeforeRendering=function(){var p={src:this.getIcon(),padding:"0 0 0 0",height:"3rem",width:"3rem",size:"3rem"};this._image=sap.m.ImageHelper.getImageControl(this.getId()+"-img",this._image,null,p)};
sap.ca.ui.OverviewTile.prototype.ontap=function(e){if(e.target&&e.target.id===this._ctxlink.getId()&&this.getContactActive()){this.fireContactPress(this._ctxlink)}else{sap.m.Tile.prototype.ontap.call(this)}};
