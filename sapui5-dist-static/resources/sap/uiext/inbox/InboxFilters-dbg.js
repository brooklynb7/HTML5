/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
// Provides a filter for list bindings
	jQuery.sap.declare("sap.uiext.inbox.InboxFilters");
	
	jQuery.sap.require("sap.uiext.inbox.InboxUtils");
	jQuery.sap.require("sap.uiext.inbox.InboxSecondaryFilters");
	jQuery.sap.require("sap.uiext.inbox.InboxPrimaryFilters");	
	/**
	 * Constructor for InboxFilters
	 *
	 * @class
	 * PreDefined Filters for Inbox
	 * 
	 *  @public
	 *  @name sap.uiext.inbox.InboxFilters
	 */
	
	sap.ui.base.Object.extend("sap.uiext.inbox.InboxFilters",{
			
			    constructor : function() {
			
			        sap.ui.base.Object.apply(this);
			
			        this.oPrimaryFilter = undefined;
			        this.oSecondaryFilter = undefined;
			        this.inboxUtils = sap.uiext.inbox.InboxUtils;
			    }
			
		});
	
	/**
	 * 
	 * Setter for the Primary filters to be applied
	 * 
	 * @name sap.uiext.inbox.InboxFilters.prototype.setPrimaryFilter
	 * @function
	 * @param {sap.uiext.inbox.InboxPrimaryFilters} 
	 *         oPrimaryFilter
	 *         
	 * @public
	 * 
	 */
	sap.uiext.inbox.InboxFilters.prototype.setPrimaryFilter = function(oPrimaryFilter){
		//TODO: add type checking..
		if(oPrimaryFilter instanceof  sap.uiext.inbox.InboxPrimaryFilters){
			this.oPrimaryFilter = oPrimaryFilter;
		}
	};
	
	/**
	 * 
	 * Setter for Secondary filters to be applied
	 * 
	 *  @name sap.uiext.inbox.InboxFilters.prototype.setSecondaryFilter
	 * 	@function
	 * 	@param {sap.uiext.inbox.InboxSecondaryFilters} 
	 *         oSecondaryFilter
	 *         
	 *  @public
	 */
	sap.uiext.inbox.InboxFilters.prototype.setSecondaryFilter = function(oSecondaryFilter){
		if(oSecondaryFilter instanceof  sap.uiext.inbox.InboxSecondaryFilters || oSecondaryFilter instanceof  sap.uiext.inbox.TaskInitialFilters){
			this.oSecondaryFilter = oSecondaryFilter;
		}
	};
	
	/**
	 * 
	 * Getter for Primary filters
	 * 
	 *  @name sap.uiext.inbox.InboxFilters.prototype.getPrimaryFilterr
	 * 	@function
	 * 	  
	 *  @type sap.uiext.inbox.InboxPrimaryFilters
	 *  @public
	 */
	sap.uiext.inbox.InboxFilters.prototype.getPrimaryFilter = function(oPrimaryFilter){
		return this.oPrimaryFilter;
	};
	
	/**
	 * 
	 * Getter for Secondary filters
	 * 
	 *  @name sap.uiext.inbox.InboxFilters.prototype.getSecondaryFilter
	 * 	@function
	 * 	
	 *  @type sap.uiext.inbox.InboxSecondaryFilters       
	 *  @public
	 */
	sap.uiext.inbox.InboxFilters.prototype.getSecondaryFilter = function(oSecondaryFilter){
		return this.oSecondaryFilter;
	};