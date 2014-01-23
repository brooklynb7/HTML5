/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
sap.ui.base.Object.extend("sap.uiext.inbox.TCMMetadata",{ 
			
			    constructor : function() {
			
			       sap.ui.base.Object.apply(this);
			       this.oServiceMetadata= null;
			       this.serviceSupportsFilterOption=false;
			       this.oConstants = sap.uiext.inbox.SubstitutionRulesManagerConstants;
			    }
			
});
	


sap.uiext.inbox.TCMMetadata.prototype.setServiceMetadata= function(oServiceMetadata){
	if(oServiceMetadata)
	this.oServiceMetadata= oServiceMetadata;
	this._isCustomStatusSupported();
};

sap.uiext.inbox.TCMMetadata.prototype.getServiceMetadata= function(){
	return this.oServiceMetadata;
};

/*sap.uiext.inbox.TCMMetadata.prototype._isFilterOptionsSupported= function(){
	this.serviceSupportsFilterOption=false;
	var entityTypes= this.getServiceMetadata().dataServices.schema[0].entityType;
	var that=this;
	jQuery.each(entityTypes,function(index,entity){
		if(entity.name===sap.uiext.inbox.InboxConstants.customStatusData.ENTITY_NAME){
			that.serviceSupportsFilterOption=true;
			return false;
		}
		
	}); 
};*/
sap.uiext.inbox.TCMMetadata.prototype._isCustomStatusSupported = function(){
	this.serviceSupportsFilterOption=false;
	var that= this;
	var aEntityTypes= this.getServiceMetadata().dataServices.schema[0].entityType;
	var oTaskEntity=null;
	var aTaskProperties=null;
	jQuery.each(aEntityTypes,function(index,entity){
		if(entity.name===sap.uiext.inbox.InboxConstants.ENTITY_NAME_TASK_COLLECTION){
			aTaskProperties=entity.property;
			jQuery.each(aTaskProperties,function(index,prop){
				if(prop.name===sap.uiext.inbox.InboxConstants.PROPERTY_NAME_CUSTOM_STATUS){
					that.serviceSupportsFilterOption=true;
					return false;
				}
			});
			
			return false;
		}
		
	});
	
	
};

sap.uiext.inbox.TCMMetadata.prototype.isCreatesubstitutionRuleSupported = function(){
	var bServiceSupportsCreateSubstitutionRule=true;
	var that= this;
	var aFimports= this.getServiceMetadata().dataServices.schema[0].entityContainer[0].functionImport;
	var oTaskEntity=null;
	var aTaskProperties=null;
	jQuery.each(aFimports,function(index,fimport){
		if(fimport.name===that.oConstants.CREATE_SUBSTITUTION_RULE){
			bServiceSupportsCreateSubstitutionRule=false;
			return false;
		}
		
	});
	return bServiceSupportsCreateSubstitutionRule;
};

sap.uiext.inbox.TCMMetadata.prototype._isSupportsRelease = function(){
	var sEntityTypeName = sap.uiext.inbox.InboxConstants.ENTITY_NAME_TASK_COLLECTION;
	return this._isPropertyAvailable("SupportsRelease", sEntityTypeName);
};

sap.uiext.inbox.TCMMetadata.prototype._isSupportsClaim = function(){
	var sEntityTypeName = sap.uiext.inbox.InboxConstants.ENTITY_NAME_TASK_COLLECTION;
	return this._isPropertyAvailable("SupportsClaim", sEntityTypeName);
};

sap.uiext.inbox.TCMMetadata.prototype._isSupportsForward = function(){
	var sEntityTypeName = sap.uiext.inbox.InboxConstants.ENTITY_NAME_TASK_COLLECTION;
	return this._isPropertyAvailable("SupportsForward", sEntityTypeName);
};
	
sap.uiext.inbox.TCMMetadata.prototype._isPropertyAvailable = function(sPropertyName, sEntityTypeName){
	var isPropertyAvailable = false;
	var aEntityTypes= this.getServiceMetadata().dataServices.schema[0].entityType;
	var aTaskProperties=null;
	jQuery.each(aEntityTypes,function(index,entity){
		if(entity.name===sEntityTypeName){
			aTaskProperties=entity.property;
			jQuery.each(aTaskProperties,function(index,prop){
				if(prop.name===sPropertyName){
					isPropertyAvailable = true;
					return false;
				} 
			});
		}
	});
	return isPropertyAvailable;
};