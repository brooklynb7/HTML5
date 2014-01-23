/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
sap.ui.base.Object.extend("sap.uiext.inbox.TCMMetadata",{constructor:function(){sap.ui.base.Object.apply(this);this.oServiceMetadata=null;this.serviceSupportsFilterOption=false;this.oConstants=sap.uiext.inbox.SubstitutionRulesManagerConstants}});
sap.uiext.inbox.TCMMetadata.prototype.setServiceMetadata=function(s){if(s)this.oServiceMetadata=s;this._isCustomStatusSupported()};
sap.uiext.inbox.TCMMetadata.prototype.getServiceMetadata=function(){return this.oServiceMetadata};
sap.uiext.inbox.TCMMetadata.prototype._isCustomStatusSupported=function(){this.serviceSupportsFilterOption=false;var t=this;var e=this.getServiceMetadata().dataServices.schema[0].entityType;var T=null;var a=null;jQuery.each(e,function(i,b){if(b.name===sap.uiext.inbox.InboxConstants.ENTITY_NAME_TASK_COLLECTION){a=b.property;jQuery.each(a,function(i,p){if(p.name===sap.uiext.inbox.InboxConstants.PROPERTY_NAME_CUSTOM_STATUS){t.serviceSupportsFilterOption=true;return false}});return false}})};
sap.uiext.inbox.TCMMetadata.prototype.isCreatesubstitutionRuleSupported=function(){var s=true;var t=this;var f=this.getServiceMetadata().dataServices.schema[0].entityContainer[0].functionImport;var T=null;var a=null;jQuery.each(f,function(i,b){if(b.name===t.oConstants.CREATE_SUBSTITUTION_RULE){s=false;return false}});return s};
sap.uiext.inbox.TCMMetadata.prototype._isSupportsRelease=function(){var e=sap.uiext.inbox.InboxConstants.ENTITY_NAME_TASK_COLLECTION;return this._isPropertyAvailable("SupportsRelease",e)};
sap.uiext.inbox.TCMMetadata.prototype._isSupportsClaim=function(){var e=sap.uiext.inbox.InboxConstants.ENTITY_NAME_TASK_COLLECTION;return this._isPropertyAvailable("SupportsClaim",e)};
sap.uiext.inbox.TCMMetadata.prototype._isSupportsForward=function(){var e=sap.uiext.inbox.InboxConstants.ENTITY_NAME_TASK_COLLECTION;return this._isPropertyAvailable("SupportsForward",e)};
sap.uiext.inbox.TCMMetadata.prototype._isPropertyAvailable=function(p,e){var i=false;var E=this.getServiceMetadata().dataServices.schema[0].entityType;var t=null;jQuery.each(E,function(a,b){if(b.name===e){t=b.property;jQuery.each(t,function(a,c){if(c.name===p){i=true;return false}})}});return i};
