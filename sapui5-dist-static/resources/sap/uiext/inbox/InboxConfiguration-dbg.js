/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
// Provides a filter for list bindings
	jQuery.sap.declare("sap.uiext.inbox.InboxConfiguration");
	
	/**
	 * Constructor for InboxConfiguration
	 *
	 * @class
	 * Configuration for Inbox
	 * 
	 *  @public
	 *  @name sap.uiext.inbox.InboxConfiguration
	 */
	
	sap.ui.base.Object.extend("sap.uiext.inbox.InboxConfiguration",{
			
			    constructor : function() {
			
			        sap.ui.base.Object.apply(this);
			        this.iSearchUsersMaxLimit = 100;
			    }
			
		});
	
	/**
	 * 
	 * Setter for Max Limit for user search in Inbox
	 * 
	 * @name sap.uiext.inbox.InboxConfiguration.prototype.setSearchUersMaxLimit
	 * @function
	 * @param {number} 
	 *         iMaxLimit
	 *         
	 * @public
	 * 
	 */
	sap.uiext.inbox.InboxConfiguration.prototype.setSearchUsersMaxLimit = function(iMaxLimit){
		if(typeof iMaxLimit === "number"){
			this.iSearchUsersMaxLimit = iMaxLimit;
		}
	};
	
	/**
	 * 
	 * Getter for Max Limit for user search in Inbox
	 * 
	 *  @name sap.uiext.inbox.InboxFilters.prototype.getSearchUersMaxLimit
	 * 	@function
	 * 	  
	 *  @type number
	 *  @public
	 */
	sap.uiext.inbox.InboxFilters.prototype.getSearchUsersMaxLimit = function(){
		return this.iSearchUsersMaxLimit;
	};