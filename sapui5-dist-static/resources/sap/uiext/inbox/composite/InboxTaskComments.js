/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.composite.InboxTaskComments");jQuery.sap.require("sap.uiext.inbox.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.uiext.inbox.composite.InboxTaskComments",{metadata:{library:"sap.uiext.inbox",properties:{"feederSender":{type:"string",group:"Data",defaultValue:null},"feederThumbnailSrc":{type:"sap.ui.core.URI",group:"Data",defaultValue:null}},aggregations:{"comments":{type:"sap.uiext.inbox.composite.InboxComment",multiple:true,singularName:"comment"}},events:{"commentSubmit":{}}}});sap.uiext.inbox.composite.InboxTaskComments.M_EVENTS={'commentSubmit':'commentSubmit'};
/*!
 * @copyright@
 */
jQuery.sap.require("sap.ui.core.theming.Parameters");jQuery.sap.require("sap.ui.ux3.Feeder");
sap.uiext.inbox.composite.InboxTaskComments.prototype.init=function(){this.maxComments=2;this.allComments=false;this.rb=sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox");this.initCommentFeeder()};
sap.uiext.inbox.composite.InboxTaskComments.prototype.initCommentFeeder=function(){if(!this.oCommentFeeder){this.oCommentFeeder=new sap.ui.ux3.Feeder(this.getId()+'-InboxTaskCommentFeeder',{type:sap.ui.ux3.FeederType.Comment,thumbnailSrc:this.getFeederThumbnailSrc()}).setParent(this);this.oCommentFeeder.attachEvent('submit',this.handleCommentFeederSubmit,this);this.showCommentFeeder=true}};
sap.uiext.inbox.composite.InboxTaskComments.prototype.exit=function(){if(this.oCommentFeeder){this.oCommentFeeder.destroy();delete this.oCommentFeeder}this.rb=undefined;this.showCommentFeeder=undefined;this.oText=undefined};
sap.uiext.inbox.composite.InboxTaskComments.prototype.onclick=function(e){var t=e.target.getAttribute('ID');if(t){switch(t){case(this.getId()+'-all'):this.showAllComments();break}}e.stopPropagation()};
sap.uiext.inbox.composite.InboxTaskComments.prototype.onAfterRendering=function(){jQuery.sap.byId(this.getId()+'-InboxTaskCommentFeeder'+"-input").bind("keyup",this,this.keyupHandler)};
sap.uiext.inbox.composite.InboxTaskComments.prototype.keyupHandler=function(e){var t=e.data;var i=t.getId()+'-InboxTaskCommentFeeder'+"-input";var I=jQuery.sap.byId(i).text();var M=500;if(I.length>M){jQuery.sap.byId(i).text(I.slice(0,M));t.placeCaretAtEnd(document.getElementById(i))}};
sap.uiext.inbox.composite.InboxTaskComments.prototype.placeCaretAtEnd=function(c){c.focus();if(typeof window.getSelection!="undefined"&&typeof document.createRange!="undefined"){var r=document.createRange();r.selectNodeContents(c);r.collapse(false);var s=window.getSelection();s.removeAllRanges();s.addRange(r)}else if(typeof document.body.createTextRange!="undefined"){var t=document.body.createTextRange();t.moveToElementText(c);t.collapse(false);t.select()}};
sap.uiext.inbox.composite.InboxTaskComments.prototype.showAllComments=function(){this.allComments=!this.allComments;var $=jQuery.sap.byId(this.getId()+" > section");if($.length>0){var r=sap.ui.getCore().createRenderManager();this.getRenderer().renderComments(r,this);r.flush($[0]);r.destroy()}};
sap.uiext.inbox.composite.InboxTaskComments.prototype.handleCommentFeederSubmit=function(e){var s=this._sanitizeText(e.getParameter('text'));this.fireCommentSubmit({text:s})};
sap.uiext.inbox.composite.InboxTaskComments.prototype.setFeederThumbnailSrc=function(v){this.setProperty("feederThumbnailSrc",v);if(this.oCommentFeeder){this.oCommentFeeder.setThumbnailSrc(v)}};
sap.uiext.inbox.composite.InboxTaskComments.prototype.insertComment=function(c,i){this.insertAggregation("comments",c,i);this.initCommentFeeder();return this};
sap.uiext.inbox.composite.InboxTaskComments.prototype.addComment=function(c){this.addAggregation("comments",c);this.initCommentFeeder();return this};
sap.uiext.inbox.composite.InboxTaskComments.prototype._sanitizeText=function(t){return jQuery.sap._sanitizeHTML(t)};
