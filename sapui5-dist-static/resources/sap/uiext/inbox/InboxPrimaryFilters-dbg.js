/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
// Provides a filter for list bindings
	jQuery.sap.declare("sap.uiext.inbox.InboxPrimaryFilters");
	
	jQuery.sap.require("sap.uiext.inbox.InboxUtils");
	jQuery.sap.require("sap.uiext.inbox.InboxPrimaryFilters");
	jQuery.sap.require("sap.uiext.inbox.InboxPrimaryFilterEnum");	

	
	/**
	 * Constructor for InboxPrimaryFilters
	 *
	 * @class
	 * Primary Filters for Inbox
	 *
	 *  
	 * @public
	 * @name sap.uiext.inbox.InboxPrimaryFilters
	 */
	
	sap.ui.base.Object.extend("sap.uiext.inbox.InboxPrimaryFilters",{
			
			    constructor : function() {
			
			        sap.ui.base.Object.apply(this);
			
			        this.oFilter = undefined;
			  	    this.inboxUtils = sap.uiext.inbox.InboxUtils;
			  	    this.oPrimaryFilterEnum = sap.uiext.inbox.InboxPrimaryFilterEnum;
			    }
			
		});
	
	/**
	 * set Primary filter
	 * 
	 * @name sap.uiext.inbox.InboxPrimaryFilters.prototype.setFilter
	 * @function
	 * 
	 * @param {sap.uiext.inbox.InboxPrimaryFilterEnum} oFilter
	 * 
	 * @public
	 * 
	 */
	sap.uiext.inbox.InboxPrimaryFilters.prototype.setFilter = function(oFilter){
			if(oFilter && oFilter.hasOwnProperty('key') && oFilter.hasOwnProperty('value')){
				this.oFilter = oFilter;
			}
	};
	
	/**
	 * get Primary filter
	 * 
	 *  @type sap.uiext.inbox.InboxPrimaryFilters
	 *   
	 */
	sap.uiext.inbox.InboxPrimaryFilters.prototype.getFilter = function(){
		return this.oFilter;
	};