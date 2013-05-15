/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uiext.inbox.Inbox.
jQuery.sap.declare("sap.uiext.inbox.Inbox");
jQuery.sap.require("sap.uiext.inbox.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Inbox.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTaskExecutionURLThemeValue taskExecutionURLThemeValue} : string</li>
 * <li>{@link #getHandleBindings handleBindings} : boolean (default: true)</li>
 * <li>{@link #getOpenCompletedTasks openCompletedTasks} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.uiext.inbox.Inbox#event:oDataRequestCompleted oDataRequestCompleted} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.uiext.inbox.Inbox#event:refresh refresh} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.uiext.inbox.Inbox#event:taskAction taskAction} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A comprehensive UI design approach with graphical and functional elements for search tasks, filter tasks, and take actions on the tasks
 * ("Inbox Pattern").
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.10.0
 *
 * @constructor   
 * @public
 * @experimental Since version 1.5.2. 
 * API is not yet finished and might change completely
 * @name sap.uiext.inbox.Inbox
 */
sap.ui.core.Control.extend("sap.uiext.inbox.Inbox", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"clearDrillDownFilter", "clearRowSettings", "bindTaskTable", "getTaskTableBinding", "bindTaskExecutionURL", "bindTaskTypeDynamicFilter", "bindSearch", "setSubstitutionEnabled", "getSubstitutionEnabled"
	],

	// ---- control specific ----
	library : "sap.uiext.inbox",
	properties : {
		"taskExecutionURLThemeValue" : {type : "string", group : "Misc", defaultValue : null},
		"handleBindings" : {type : "boolean", group : "Misc", defaultValue : true},
		"openCompletedTasks" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	events : {
		"oDataRequestCompleted" : {}, 
		"refresh" : {}, 
		"taskAction" : {}
	}
}});


/**
 * Creates a new subclass of class sap.uiext.inbox.Inbox with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.uiext.inbox.Inbox.extend
 * @function
 */

sap.uiext.inbox.Inbox.M_EVENTS = {'oDataRequestCompleted':'oDataRequestCompleted','refresh':'refresh','taskAction':'taskAction'};


/**
 * Getter for property <code>taskExecutionURLThemeValue</code>.
 * set the theme URL parameter string to be appended to the task Execution URL. In case of a function callback set for Task Execution PopUp, this string will not be appended.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>taskExecutionURLThemeValue</code>
 * @public
 * @name sap.uiext.inbox.Inbox#getTaskExecutionURLThemeValue
 * @function
 */


/**
 * Setter for property <code>taskExecutionURLThemeValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTaskExecutionURLThemeValue  new value for property <code>taskExecutionURLThemeValue</code>
 * @return {sap.uiext.inbox.Inbox} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.Inbox#setTaskExecutionURLThemeValue
 * @function
 */

/**
 * Getter for property <code>handleBindings</code>.
 * set this as true for oData Model. If set as false, the user will need to handle task Actions, search and Task Execution URL population. See function call back methods.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>handleBindings</code>
 * @public
 * @name sap.uiext.inbox.Inbox#getHandleBindings
 * @function
 */


/**
 * Setter for property <code>handleBindings</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bHandleBindings  new value for property <code>handleBindings</code>
 * @return {sap.uiext.inbox.Inbox} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.Inbox#setHandleBindings
 * @function
 */

/**
 * Getter for property <code>openCompletedTasks</code>.
 * set this to true to enable opening of completed tasks.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>openCompletedTasks</code>
 * @public
 * @name sap.uiext.inbox.Inbox#getOpenCompletedTasks
 * @function
 */


/**
 * Setter for property <code>openCompletedTasks</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bOpenCompletedTasks  new value for property <code>openCompletedTasks</code>
 * @return {sap.uiext.inbox.Inbox} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.Inbox#setOpenCompletedTasks
 * @function
 */

/**
 * If handleBindings property is set to true , the control assumes an oData model is set and handles the complete logic within. In this case once the oData request is complete, this event is fired with additional parameters. 
 *
 * @name sap.uiext.inbox.Inbox#oDataRequestCompleted
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'oDataRequestCompleted' event of this <code>sap.uiext.inbox.Inbox</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.uiext.inbox.Inbox</code>.<br/> itself. 
 *  
 * If handleBindings property is set to true , the control assumes an oData model is set and handles the complete logic within. In this case once the oData request is complete, this event is fired with additional parameters. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.uiext.inbox.Inbox</code>.<br/> itself.
 *
 * @return {sap.uiext.inbox.Inbox} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.Inbox#attachODataRequestCompleted
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'oDataRequestCompleted' event of this <code>sap.uiext.inbox.Inbox</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.uiext.inbox.Inbox} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.Inbox#detachODataRequestCompleted
 * @function
 */


/**
 * Fire event oDataRequestCompleted to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.uiext.inbox.Inbox} <code>this</code> to allow method chaining
 * @protected
 * @name sap.uiext.inbox.Inbox#fireODataRequestCompleted
 * @function
 */

/**
 * this event is fires to handle refresh Action, when the handleBindings property is set to false. 
 *
 * @name sap.uiext.inbox.Inbox#refresh
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'refresh' event of this <code>sap.uiext.inbox.Inbox</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.uiext.inbox.Inbox</code>.<br/> itself. 
 *  
 * this event is fires to handle refresh Action, when the handleBindings property is set to false. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.uiext.inbox.Inbox</code>.<br/> itself.
 *
 * @return {sap.uiext.inbox.Inbox} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.Inbox#attachRefresh
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'refresh' event of this <code>sap.uiext.inbox.Inbox</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.uiext.inbox.Inbox} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.Inbox#detachRefresh
 * @function
 */


/**
 * Fire event refresh to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.uiext.inbox.Inbox} <code>this</code> to allow method chaining
 * @protected
 * @name sap.uiext.inbox.Inbox#fireRefresh
 * @function
 */

/**
 * this event is fires to handle task Actions - Claim, Release, when the handleBindings property is set to false. 
 *
 * @name sap.uiext.inbox.Inbox#taskAction
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'taskAction' event of this <code>sap.uiext.inbox.Inbox</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.uiext.inbox.Inbox</code>.<br/> itself. 
 *  
 * this event is fires to handle task Actions - Claim, Release, when the handleBindings property is set to false. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.uiext.inbox.Inbox</code>.<br/> itself.
 *
 * @return {sap.uiext.inbox.Inbox} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.Inbox#attachTaskAction
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'taskAction' event of this <code>sap.uiext.inbox.Inbox</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.uiext.inbox.Inbox} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.Inbox#detachTaskAction
 * @function
 */


/**
 * Fire event taskAction to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.uiext.inbox.Inbox} <code>this</code> to allow method chaining
 * @protected
 * @name sap.uiext.inbox.Inbox#fireTaskAction
 * @function
 */

/**
 * Clears all the filters applied in Drill Down. (Status, Priority, Date/Time and TaskType).
 *
 * @name sap.uiext.inbox.Inbox.prototype.clearDrillDownFilter
 * @function

 * @type void
 * @public
 */


/**
 * Row Settings applied using the Settings button shall be cleared. <TO be Implemented>
 *
 * @name sap.uiext.inbox.Inbox.prototype.clearRowSettings
 * @function

 * @type void
 * @public
 */


/**
 * Binds the Task Table Rows to the given path.
 *
 * @name sap.uiext.inbox.Inbox.prototype.bindTaskTable
 * @function
 * @param {string} 
 *         sPath
 *         Binding path for the rows of the Task Table
 * @param {object} 
 *         oTaskFilters
 *         Predefined filter for the Task Table (sap.ui.ux3.TaskInitialFilters)

 * @type sap.uiext.inbox.Inbox
 * @public
 */


/**
 * returns the binding for the Task Table
 *
 * @name sap.uiext.inbox.Inbox.prototype.getTaskTableBinding
 * @function

 * @type object
 * @public
 */


/**
 * Registers a callback function to be invoked to populate the Task Execution PopUp.
 *
 * @name sap.uiext.inbox.Inbox.prototype.bindTaskExecutionURL
 * @function
 * @param {object} 
 *         oId
 *         callback function for getting the execution URL, will be supplied with the task ID and should return the URL to be displayed with the Task Execution PopUp.
 * @param {object} 
 *         oStatus
 *         callback function for getting the status of the task, will be supplied with the task ID and should return the Task Status.

 * @type sap.uiext.inbox.Inbox
 * @public
 */


/**
 * Registers a callback function to be invoked to populate the TaskType Drill Down.
 * This should return the array of Values to be populated in the Task Type Drill Down.
 *
 * @name sap.uiext.inbox.Inbox.prototype.bindTaskTypeDynamicFilter
 * @function

 * @type sap.uiext.inbox.Inbox
 * @public
 */


/**
 * Registers a callback function to be invoked to search on the Task Table.
 *
 * @name sap.uiext.inbox.Inbox.prototype.bindSearch
 * @function

 * @type sap.uiext.inbox.Inbox
 * @public
 */


/**
 * Setter for property isSubstitutionEnabled.
 * 
 * Boolean property to enable the sap.uiext.inbox.SubstitutionRulesManager control (default is false). If set to true, 'Manage Substitution Rules' is visible in settings button, else if set to false the option will not be visible under settings.
 * 
 * Default value is false
 *
 * @name sap.uiext.inbox.Inbox.prototype.setSubstitutionEnabled
 * @function
 * @param {boolean} 
 *         bIsSubstitutionEnabled
 *         isSubstitutionEnabled
 * @param {string} 
 *         sPath
 *         the path

 * @type void
 * @public
 */


/**
 * Getter for property isSubstitutionEnabled.
 * 
 * Boolean property to enable the sap.uiext.inbox.SubstitutionRulesManager control (default is false). If is true, 'Manage Substitution Rules' is visible in settings button, else if it is false the option will not be visible under settings.
 * 
 * Default value is false
 *
 * @name sap.uiext.inbox.Inbox.prototype.getSubstitutionEnabled
 * @function

 * @type boolean
 * @public
 */


// Start of sap/uiext/inbox/Inbox.js
/*!
 * @copyright@
 */

jQuery.sap.require("sap.uiext.inbox.InboxConstants");
jQuery.sap.require("sap.uiext.inbox.TaskInitialFilters");
jQuery.sap.require("sap.uiext.inbox.InboxUtils");
jQuery.sap.require("sap.uiext.inbox.SubstitutionRulesManager");
jQuery.sap.require("sap.ui.core.format.DateFormat");
jQuery.sap.require("sap.ui.ux3.FacetFilter");
jQuery.sap.require("sap.ui.ux3.FacetFilterList");
jQuery.sap.require("sap.ui.commons.layout.MatrixLayout");
jQuery.sap.require("sap.ui.commons.Image");
jQuery.sap.require("sap.ui.commons.ToggleButton");
jQuery.sap.require("sap.ui.commons.DropdownBox");
jQuery.sap.require("sap.ui.core.ListItem");
jQuery.sap.require("sap.ui.commons.SearchField");
jQuery.sap.require("sap.ui.commons.Toolbar");
jQuery.sap.require("sap.ui.commons.TextView");
jQuery.sap.require("sap.ui.commons.Label");
jQuery.sap.require("sap.ui.commons.Button");
jQuery.sap.require("sap.ui.commons.ToolbarSeparator");
jQuery.sap.require("sap.ui.commons.Link");
jQuery.sap.require("sap.ui.table.Table");
jQuery.sap.require("sap.ui.commons.TextField");
jQuery.sap.require("sap.ui.ux3.OverlayContainer");
jQuery.sap.require("sap.ui.core.HTML");
jQuery.sap.require("sap.ui.commons.layout.BorderLayout");
jQuery.sap.require("sap.ui.commons.layout.VerticalLayout");
jQuery.sap.require("sap.ui.commons.RadioButtonGroup");
jQuery.sap.require("sap.ui.commons.Dialog");
jQuery.sap.require("sap.ui.model.Sorter");
jQuery.sap.require("sap.ui.model.Filter");
jQuery.sap.require("sap.ui.core.Locale");

/*global OData */// declare unusual global vars for JSLint/SAPUI5 validation
// /**
// * This file defines behavior for the control,
// */
sap.uiext.inbox.Inbox.prototype.init = function() {
	//initialize inboxUtils, inboxConstants, resource bundle and other bootstrapping
	this.inboxUtils = sap.uiext.inbox.InboxUtils;
	this.constants = sap.uiext.inbox.InboxConstants;
	this._oBundle = sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox");
	var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
	this._imgResourcePath = sap.ui.resource('sap.uiext.inbox', 'themes/' + sCurrentTheme + '/img/');
	
	//check for URL Parameter for the defaultView rendering.
	var oUriParams = jQuery.sap.getUriParameters();
	var defaultView_URLParam = this.constants.defaultView_URLParameter;
	var sURLViewValue = oUriParams.get(defaultView_URLParam);
    if(sURLViewValue === null){
    	var cookieValue = this.inboxUtils.getCookieValue(defaultView_URLParam);
        this.defaultView  =  cookieValue !== undefined ? cookieValue : this.constants.tableView;
    }else{
    	this.defaultView = jQuery.inArray(sURLViewValue, this.constants.inboxViews) === -1 ? this.constants.tableView : sURLViewValue;
    	this.inboxUtils.setCookieValue (defaultView_URLParam,this.defaultView,1);
    }
    
    //TODO: this does not seem to be required anymore, as the status and priority mappings on GW side are in place. Remove and Test.
    this.sProviderHost = "";
    
    this.bRefreshTaskTypes = true;
    this.selectedContexts = [];
    
    //Model binding related stuff
    this.sTypeOfModel = "";
    this.bpmSvcUrl = "";
    
    //enable/Disable some features in Inbox
    this.isSubstitutionEnabled = false;
    this.isCustomAttributesEnabled = false;
    this.isCustomActionsEnabled = false;
    this.showTaskDescription = false;
    this.isBatchOperationSupported = true;
    this.isForwardActionEnabled = false;
    
    this._substitutionPath = "";
    // default value
    this.sCollectionPath = "TaskCollection";
    this.filtersToApply = {};
    
    this.resetMessages = true;
    //this.attachTaskAction(this, this.defaultActionHandler);
    this.httpMethodForAction = 'POST';
    this.currentView = this.defaultView;
    
    //default callbacks
    this.getDefaultTaskExecutionURLCallBack = function(id,sapOriginId) {
        // var IDURIPart = "getTaskExecutionUrl"+"?ID='"+ id +"'&$format=json";
        var IDURIPart = this.sCollectionPath + "(InstanceID='" + id + "',SAP__Origin='" + sapOriginId + "')/UIExecutionLink?$format=json";
        var requestURI = this.bpmSvcUrl + IDURIPart;
        var url = "";
        var oModel = this.getCoreModel();
        var that = this;
        /****************/
        var requestOptions = {
            async:false,
            requestUri : requestURI,
            method : "GET",
            headers : {
                Accept : "application/json",
                "x-csrf-token" : oModel.oHeaders["x-csrf-token"]
            }
        };
        OData.request(requestOptions, function(data, request) {
            // TO-DO : make this generic
            url = data.GUI_Link;
        }, function(error) {
            if(error.response.statusCode == 205){
                var eventParams = {statusCode : error.response.statusCode, statusText : error.response.statusText};
                oModel.fireRequestFailed(eventParams);
            }else{
            //TODO: use enums for messageType.
                that.showMessage("error", that._oBundle.getText("INBOX_MSG_ERR_EXUI") + id);
            }
        });
        return url;
    };

    this.getTaskExecURLStatusCallBack = function(id,sapOriginId) {
        var status = "";
        var requrl = this.bpmSvcUrl + this.sCollectionPath + "(InstanceID='" + id + "',SAP__Origin='" + sapOriginId + "')?$format=json";
        var oModel = this.getCoreModel();
        var that = this;
        var requestOptions = {
            async:false,
            requestUri : requrl,
            method : "GET",
            headers : {
                Accept : "application/json",
                "x-csrf-token" : oModel.oHeaders["x-csrf-token"]
            }
        };
        OData.request(requestOptions, function(data, request) {
            // TO-DO : make this generic
            status = data.Status;
        }, function(error) {
            if(error.response.statusCode == 205){
                var eventParams = {statusCode : error.response.statusCode, statusText : error.response.statusText};
                oModel.fireRequestFailed(eventParams);
            }else{
            //TODO: use enums for messageType.
                that.showMessage("error", that._oBundle.getText("INBOX_MSG_ERR_EXUI") + id);
            }
        });
        return status;
    };
    this.searchCallBack = "";
    this.dynamicTaskTypeFilterCallBack = "";
    this.getTaskExecutionURLCallBack = this.getDefaultTaskExecutionURLCallBack;
    
    this.lastRefreshedOnDateTime = new Date();
    
    //Inbox creation starts
    this.vLayout = this.createInboxUI();
    this.vLayout.setParent(this);
    this.addAndRemoveSubstDropDowns();
    this.constants = sap.uiext.inbox.InboxConstants;
    this.lastRefreshedOnDateTime = new Date();
};

sap.uiext.inbox.Inbox.prototype.exit = function() {
	this.vLayout.destroy();
	this.vLayout = null;
	
	function remove(id) {
		  var oItem = sap.ui.getCore().byId(id);
		  oItem && oItem.destroy();
	}
	remove(this.getId() + '--' + "dropdownCell1");
	remove(this.getId() + '--' + "dropdownCell2");
	remove(this.getId() + '--' + "dropdownCell3");
	remove(this.getId() + '--' + "manageSubstitutionMI");
	
	this._oBundle = undefined;
};

sap.uiext.inbox.Inbox.prototype.createAttributes = function(oAttData, oParent) {
    var that = this;
    var oAtt = new sap.ui.ux3.FacetFilterList(this.getId()+'--'+oAttData.name);
    oAtt.setTitle(this._oBundle.getText(oAttData.name));
    // oAtt.setAdditionalData({data: (oAttData.name+" (ID: "+oAtt.getId()+")")});
    for(var idx = 0; idx < oAttData.attributes.length; idx++){
        if(typeof oAttData.attributes[idx] == "string" || oAttData.attributes[idx].key != undefined){
            var attributeID;
            var oAttribute;
            if(oAttData.attributes[idx].key != undefined){
            	var attributeMetaData = oAttData.attributes[idx];
                attributeID = that.inboxUtils.scrub(attributeMetaData.key);
                oAttribute = new sap.ui.core.ListItem(this.getId() +'--'+ attributeID, {text : oAttData.attributes[idx].value, key:oAttData.attributes[idx].key});
                if(attributeMetaData.instanceID){
                	oAttribute.data("InstanceID",attributeMetaData.instanceID);
                	oAttribute.data("SAP__Origin",attributeMetaData.sap__Origin);
                }

            }else{
                attributeID = that.inboxUtils.scrub(oAttData.attributes[idx]);
                oAttribute = new sap.ui.core.ListItem(this.getId() +'--'+ attributeID, {text : this._oBundle.getText(oAttData.attributes[idx]), key:attributeID});

            }
            oAtt.addItem(oAttribute);
        }else{
            that.createAttributes(oAttData.attributes[idx], oAtt);
        }
    }
    oParent.addList(oAtt);

};

sap.uiext.inbox.Inbox.prototype.toggleFilterView = function(oEvent, oInbox) {
    var that = oInbox;
    var oFacet = sap.ui.getCore().byId(that.getId()+'--'+"filterFacet");
    that.showBusyLoader();
    if(oFacet === undefined){
        oFacet = new sap.ui.ux3.FacetFilter(that.getId()+'--'+"filterFacet"); 

        for(var idx=0;idx < sap.uiext.inbox.InboxConstants.aFilterMetaData.length; idx++){
            that.createAttributes(sap.uiext.inbox.InboxConstants.aFilterMetaData[idx], oFacet);
        }
        var verticalLayout = sap.ui.getCore().byId(that.getId()+'--'+"verticalLayoutContainer");
        verticalLayout.insertContent(oFacet, 2);
    }

    var list = oFacet.getLists();
    for(var i=0; i<list.length; i++) {
        if(list[i].getId()===that.getId()+'--'+"INBOX_FILTER_PRIORITY"){
            list[i].attachSelect(that,that.applyDrillDownFilterForPriority);
        } else if(list[i].getId()===that.getId()+'--'+"INBOX_FILTER_STATUS") {
            list[i].attachSelect(that,that.applyDrillDownFilterForStatus);
        } else if(list[i].getId()===that.getId()+'--'+"INBOX_FILTER_CREATION_DATE"){
            list[i].setMultiSelect(false);
            list[i].attachSelect(that,that.applyDrillDownFilterForDateTime);
        } else if(list[i].getId()===that.getId()+'--'+"INBOX_FILTER_TASK_TYPE"){
            list[i].attachSelect(that,that.applyDrillDownFilterForTaskType);
        } else if(list[i].getId()===that.getId()+'--'+"INBOX_FILTER_DUE_DATETIME"){
            list[i].setMultiSelect(false);
      list[i].attachSelect(that,that.applyDrillDownFilterForDueDate);
        }
}

    var statusAttr = sap.ui.getCore().byId(that.getId()+'--'+"INBOX_FILTER_STATUS");            
    if(sap.ui.getCore().byId(that.getId()+'--'+"filterComboBox2").getSelectedItemId() === that.getId()+'--'+"li_completedTasks"){
        if(statusAttr != undefined ){
            oFacet.removeList(statusAttr);
        }
        
    if (oFilterDateTime !== undefined) {
      oFacet.removeList(oFilterDateTime);
    }

    }
    var oFilterDateTime = sap.ui.getCore().byId(that.getId()+'--'+"INBOX_FILTER_CREATION_DATE");
    var oFilterDueDateTime = sap.ui.getCore().byId(that.getId()+'--'+"INBOX_FILTER_DUE_DATETIME");
    var sSelectedItemId = sap.ui.getCore().byId(that.getId()+'--'+"filterComboBox2").getSelectedItemId();
    if(sSelectedItemId === that.getId()+'--'+"li_overdueTasks" || sSelectedItemId === that.getId()+'--'+"li_escalatedTasks" ){
        if(oFilterDateTime !== undefined && oFacet.indexOfList(oFilterDateTime) !== -1 ){
            oFacet.removeList(oFilterDateTime);
        }
        if(oFilterDueDateTime !== undefined && oFacet.indexOfList(oFilterDueDateTime) !== -1){
            oFacet.removeList(oFilterDueDateTime);
     }

    }
    
    /*
     * if (sSelectedItemId === that.getId() + '--' + "li_overdueTasks" || sSelectedItemId === that.getId() + '--' +
     * "li_escalatedTasks") { if (oFilterDateTime != undefined && oFilterDateTime.getSelected() === true) {
     * oFilterDateTime.setSelected(false); } }
     */

    var filterImg = oEvent.getSource();
    if(filterImg.getIcon() === that._imgResourcePath+sap.uiext.inbox.InboxConstants.filterViewImageUnSelected){
        // filterImg.setStyle(sap.ui.commons.ButtonStyle.Emph);
        filterImg.setIcon(that._imgResourcePath+sap.uiext.inbox.InboxConstants.filterViewImageSelected);
        oFacet.setVisible(true);
    }else{
        filterImg.setIcon(that._imgResourcePath+sap.uiext.inbox.InboxConstants.filterViewImageUnSelected);
        // filterImg.setStyle(sap.ui.commons.ButtonStyle.Default);
        oFacet.setVisible(false);
        // oController.resetFilterView();
    }
    that.resetSearchCriteria();
    that.hideBusyLoader();
};

sap.uiext.inbox.Inbox.prototype.populateFilterButtonContainer = function(filterButtonContainer) {
    var filterViewCell = new sap.ui.commons.layout.MatrixLayoutCell({
        id : this.getId() + '--' + "filterButtonCell"
    });
    var selected = false;

    var filterViewButton = new sap.ui.commons.ToggleButton(this.getId() + '--' + "filterViewButton", {
        icon : this._imgResourcePath + sap.uiext.inbox.InboxConstants.filterViewImageUnSelected,
    //    text : this._oBundle.getText("INBOX_FILTER_TEXT"),
        pressed : false,
        tooltip : this._oBundle.getText("INBOX_BUTTON_FILTER_VIEW_TOOLTIP")
    });
    filterViewButton.attachPress(this, this.toggleFilterView)
    filterViewButton.addStyleClass("sapUiExtInboxToolBarContainerHeight");
    filterViewCell.addContent(filterViewButton);
    filterViewCell.setPadding(sap.ui.commons.layout.Padding.None);
    filterButtonContainer.createRow(filterViewCell);
};
/*
sap.uiext.inbox.Inbox.prototype.populateDropDownContainer = function(dropDownContainer) {
    var dropdownCell = new sap.ui.commons.layout.MatrixLayoutCell(this.getId() + '--' + "dropdownCell2");
    dropdownCell.setPadding(sap.ui.commons.layout.Padding.None);
    var dropdownComboBox = new sap.ui.commons.DropdownBox(this.getId() + '--' + "filterComboBox2", {
        tooltip : this._oBundle.getText("INBOX_TASKS_FILTER_DROPDOWN_TOOLTIP"),
        items : [new sap.ui.core.ListItem(this.getId() + '--' + "li_openTasks", {
            text : this._oBundle.getText("INBOX_DROP_DOWN_VALUE_MY_OPEN_TASKS")
        }), new sap.ui.core.ListItem(this.getId() + '--' + "li_completedTasks", {
            text : this._oBundle.getText("INBOX_DROP_DOWN_VALUE_MY_COMPLETED_TASKS")
        }), new sap.ui.core.ListItem(this.getId() + '--' + "li_overdueTasks", {
            text : this._oBundle.getText("INBOX_DROP_DOWN_VALUE_MY_OVERDUE_TASKS")
        }), new sap.ui.core.ListItem(this.getId() + '--' + "li_escalatedTasks", {
            text : this._oBundle.getText("INBOX_DROP_DOWN_VALUE_MY_ESCALATED_TASKS")
        })]
    });
    dropdownComboBox.attachChange(this, this.applyDropDownFilter);
    dropdownComboBox.setValue(this._oBundle.getText("INBOX_DROP_DOWN_VALUE_MY_OPEN_TASKS"));
    dropdownComboBox.addStyleClass("sapUiExtInboxToolBarContainerHeight");
    dropdownComboBox.addStyleClass("sapUiExtInboxComboBox");
    dropdownCell.addContent(dropdownComboBox);
    dropDownContainer.createRow(dropdownCell);
};*/

sap.uiext.inbox.Inbox.prototype.addAndRemoveSubstDropDowns = function() {
	var dropDownRow = sap.ui.getCore().byId(this.getId() + '--' + "dropdownRow");
	var settingsMenu = sap.ui.getCore().byId(this.getId() + '--' +'inboxSettingsMenu');
	var rrSettingsMenu = sap.ui.getCore().byId(this.getId() + '--' +'rrSettingsMenu');
	var dropdowncell1 = sap.ui.getCore().byId(this.getId() + '--' + "dropdownCell1");
	var dropdowncell2 = sap.ui.getCore().byId(this.getId() + '--' + "dropdownCell2");
	var dropdowncell3 = sap.ui.getCore().byId(this.getId() + '--' + "dropdownCell3");
	var settingsButton = sap.ui.getCore().byId(this.getId() + '--' + "manageSubstitutionMI");
	//var rrSettingsButton =	sap.ui.getCore().byId(this.getId() + '--' + "rrSettingsButton");

	if(this.getSubstitutionEnabled()) { //Do not add this combo box if substitution is disabled 
			dropDownRow.addCell(dropdowncell1);
			dropDownRow.addCell(dropdowncell2);
			dropDownRow.addCell(dropdowncell3);
			settingsMenu.addItem(settingsButton);
		//	rrSettingsMenu.addItem(rrSettingsButton);
			//dropDownRow.rerender();
		} else {
			if(dropDownRow != undefined) {
			dropDownRow.removeCell(dropdowncell1);
			dropDownRow.removeCell(dropdowncell3);
			//dropDownRow.rerender();
			}
			if(settingsMenu != undefined) {
			settingsMenu.removeItem(settingsButton);
		//	rrSettingsMenu.removeItem(rrSettingsButton);
			}
		}
};

sap.uiext.inbox.Inbox.prototype.populateDropDownContainer = function(dropDownContainer) {
    var dropdownRow = new sap.ui.commons.layout.MatrixLayoutRow(this.getId() + '--' + "dropdownRow");
    
    var dropdownCell1 = new sap.ui.commons.layout.MatrixLayoutCell(this.getId() + '--' + "dropdownCell1");
    dropdownCell1.setPadding(sap.ui.commons.layout.Padding.None);
    //if(this.getSubstitutionEnabled()) { //Do not add this combo box if substitution is disabled 
    var dropdownComboBox1 = new sap.ui.commons.DropdownBox(this.getId() + '--' + "filterComboBox1", {
        tooltip : this._oBundle.getText("INBOX_TASKS_FILTER_DROPDOWN_TOOLTIP"),
        items : [new sap.ui.core.ListItem(this.getId() + '--' + "li_allTasks", {
            text : this._oBundle.getText("INBOX_DROP_DOWN_VALUE_ALL_TASKS")
        }), new sap.ui.core.ListItem(this.getId() + '--' + "li_myTasks", {
            text : this._oBundle.getText("INBOX_MY_TASKS_TEXT")
        }), new sap.ui.core.ListItem(this.getId() + '--' + "li_substitutedTasks", {
            text : this._oBundle.getText("SUBSTITUTION_INBOX_DROP_DOWN_VALUE_TASKS_ASSIGNED_TO_ME")
        })]
    });
    dropdownComboBox1.attachChange(this, this.applyDropDownFilter1);
    dropdownComboBox1.setValue(this._oBundle.getText("INBOX_DROP_DOWN_VALUE_ALL_TASKS"));
    dropdownComboBox1.addStyleClass("sapUiExtInboxToolBarContainerHeight");
    dropdownComboBox1.addStyleClass("sapUiExtInboxComboBox");
    
    dropdownCell1.addContent(dropdownComboBox1);
    dropdownRow.addCell(dropdownCell1);
    //}
    /***/
    var dropdownCell2 = new sap.ui.commons.layout.MatrixLayoutCell(this.getId() + '--' + "dropdownCell2");
    dropdownCell2.setPadding(sap.ui.commons.layout.Padding.None);
    var dropdownComboBox2 = new sap.ui.commons.DropdownBox(this.getId() + '--' + "filterComboBox2", {
        tooltip : this._oBundle.getText("INBOX_TASKS_FILTER_DROPDOWN_TOOLTIP"),
        items : [new sap.ui.core.ListItem(this.getId() + '--' + "li_openTasks", {
            text : this._oBundle.getText("INBOX_DROP_DOWN_VALUE_OPEN_TASKS")
        }), new sap.ui.core.ListItem(this.getId() + '--' + "li_completedTasks", {
            text : this._oBundle.getText("INBOX_DROP_DOWN_VALUE_COMPLETED_TASKS")
        }), new sap.ui.core.ListItem(this.getId() + '--' + "li_overdueTasks", {
            text : this._oBundle.getText("INBOX_DROP_DOWN_VALUE_OVERDUE_TASKS")
        }), new sap.ui.core.ListItem(this.getId() + '--' + "li_escalatedTasks", {
            text : this._oBundle.getText("INBOX_DROP_DOWN_VALUE_ESCALATED_TASKS")
        })]
    });
    dropdownComboBox2.attachChange(this, this.applyDropDownFilter);
    dropdownComboBox2.setValue(this._oBundle.getText("INBOX_DROP_DOWN_VALUE_OPEN_TASKS"));
    dropdownComboBox2.addStyleClass("sapUiExtInboxToolBarContainerHeight");
    dropdownComboBox2.addStyleClass("sapUiExtInboxComboBox");
    dropdownCell2.addContent(dropdownComboBox2);
    dropdownRow.addCell(dropdownCell2);
    /***/
    //if(this.getSubstitutionEnabled()) {   //Do not add this combo box if substitution is disabled
    var dropdownCell3 = new sap.ui.commons.layout.MatrixLayoutCell(this.getId() + '--' + "dropdownCell3");
    dropdownCell3.setPadding(sap.ui.commons.layout.Padding.None);
    var dropdownComboBox3 = new sap.ui.commons.DropdownBox(this.getId() + '--' + "filterComboBox3",{maxPopupItems:10});/*, {
        tooltip : this._oBundle.getText("INBOX_TASKS_FILTER_DROPDOWN_TOOLTIP"),
        items : [new sap.ui.core.ListItem(this.getId() + '--' + "li_allUsers", {
            text : this._oBundle.getText("INBOX_DROP_DOWN_VALUE_ALL_USERS")
        })]

    });*/
    
    var onBehalfOf = '';
    if(sap.ui.getCore().byId(this.getId() + '--' + 'onBehalfOfListItem') === undefined) {
        var onBehalfOf = new sap.ui.core.ListItem(this.getId() + '--' + 'onBehalfOfListItem');
    }
    onBehalfOf.setText(this._oBundle.getText("SUBSTITUTION_INBOX_FILTER_ON_BEHALF_OF"));
    onBehalfOf.setKey("onBehalfOf");
    
    dropdownComboBox3.addItem(onBehalfOf);

    var allUsers = '';
    if(sap.ui.getCore().byId(this.getId() + '--' + 'li_allUsers') === undefined) {
        allUsers = new sap.ui.core.ListItem(this.getId() + '--' + 'li_allUsers');
    }   
    allUsers.setText(this._oBundle.getText("INBOX_DROP_DOWN_VALUE_ALL_USERS"));
    allUsers.setKey("allUsers");
    
    dropdownComboBox3.addItem(allUsers);

    dropdownComboBox3.attachChange(this, this.applyDropDownFilter3);
    dropdownComboBox3.setValue(this._oBundle.getText("SUBSTITUTION_INBOX_FILTER_ON_BEHALF_OF"));
    dropdownComboBox3.addStyleClass("sapUiExtInboxToolBarContainerHeight");
    dropdownComboBox3.addStyleClass("sapUiExtInboxComboBox");
    dropdownComboBox3.setEnabled(false);
    dropdownCell3.addContent(dropdownComboBox3);
    dropdownRow.addCell(dropdownCell3);
    //}

    dropDownContainer.addRow(dropdownRow);
    this.addAndRemoveSubstDropDowns();
};

// Populating the Search Bar.
sap.uiext.inbox.Inbox.prototype.populateSearchFieldContainer = function(searchFieldContainer) {

    var searchBoxCell = new sap.ui.commons.layout.MatrixLayoutCell(this.getId() + '--' + "searchBoxCell");
    searchBoxCell.setPadding(sap.ui.commons.layout.Padding.None);
    // create a simple SearchField
    var searchField = new sap.ui.commons.SearchField(this.getId() + '--' + "searchField", {
        enableListSuggest : false,
        enableClear : true,
        startSuggestion : 0,
        tooltip : this._oBundle.getText("INBOX_SEARCH_TEXT")
    });
    searchField.addStyleClass("sapUiExtInboxSearchField");
    searchField.attachSuggest(this, function(oEvent, that) {
        if (oEvent.getParameter("value") === "") {
            that.resetSearchCriteria();
            that.applyFilterOnResponse(null);
        }
    });
    searchField.attachSearch(this, this.localSearch);
    searchBoxCell.addContent(searchField);
    searchFieldContainer.createRow(searchBoxCell);
};

sap.uiext.inbox.Inbox.prototype.populateMsgBar = function() {
    var msgBarContainer = new sap.ui.commons.Toolbar(this.getId() + '--' + "msgBarContainer", {
        visible : false
    });
    var msbBarTypeImg = new sap.ui.commons.Image({
        id : this.getId() + '--' + "msbBarTypeImg",
        text : "",
        decorative : false
    });
    var msbBarTypeMsg = new sap.ui.commons.TextView({
        id : this.getId() + '--' + "msbBarTextView",
        text : ""
    });
    var msbBarCloseImg = new sap.ui.commons.Image({
        id : this.getId() + '--' + "msbBarCloseImg",
        text : "",
        decorative : false,
        tooltip : this._oBundle.getText("INBOX_MSGBAR_CLOSE_TOOLTIP")
    });
    msbBarCloseImg.addStyleClass("sapUiExtInboxToolbarRight");
    msbBarCloseImg.setSrc(this._imgResourcePath + sap.uiext.inbox.InboxConstants.closeImg);
    msbBarCloseImg.attachPress(this, this.deleteMessage);
    msgBarContainer.addItem(msbBarTypeImg);
    msgBarContainer.addItem(msbBarTypeMsg);
    msgBarContainer.addItem(msbBarCloseImg);
    return msgBarContainer;
};

sap.uiext.inbox.Inbox.prototype.populateToolBar = function() {
    var toolBarContainer = new sap.ui.commons.layout.MatrixLayout(this.getId() + '--' + "toolbarContainer", {
        layoutFixed : false,
        width : "100%",
        columns : 6,
        // other widths except empty label does not matter, rest of the space will be now filled with empty Label snippix #293
        //older %'s are: ["2%","10%","1%","12%","50%", "11%"] (not good in big screen) 
        widths : ["1px","1px","1px","1px","100%", "1px"] 
    });
   
    var viewButtonsContainer = new sap.ui.commons.layout.MatrixLayout(this.getId() + '--' + "viewButtonsContainer", {
      layoutFixed : false
    });
    
    var filterButtonContainer = new sap.ui.commons.layout.MatrixLayout(this.getId() + '--' + "filterButtonContainer", {
        layoutFixed : false
    });
    
    var refreshButtonContainer = new sap.ui.commons.layout.MatrixLayout(this.getId() + '--' + "refreshButtonContainer", {
      layoutFixed : false
    });
    
    var dropDownContainer = new sap.ui.commons.layout.MatrixLayout(this.getId() + '--' + "dropDownContainer", {
        layoutFixed : false
    });
    var emptyLabel = new sap.ui.commons.Label(this.getId() + '--' + "emptyLabel", {
        text : ""
    });
    emptyLabel.addStyleClass("sapUiExtInboxEmptyLabel");
    var searchFieldContainer = new sap.ui.commons.layout.MatrixLayout(this.getId() + '--' + "searchFieldContainer", {
        layoutFixed : false
    });

    toolBarContainer.createRow(viewButtonsContainer, dropDownContainer, filterButtonContainer, refreshButtonContainer, emptyLabel, searchFieldContainer);

    this.populateViewButtonsContainer(viewButtonsContainer);
    this.populateDropDownContainer(dropDownContainer);
    this.populateFilterButtonContainer(filterButtonContainer);
    this.populateRefreshButtonContainer(refreshButtonContainer);
    this.populateSearchFieldContainer(searchFieldContainer);

    return toolBarContainer;
};

sap.uiext.inbox.Inbox.prototype.populateViews = function() {
    var that = this;
    var verticalLayout = sap.ui.getCore().byId(this.getId() + '--' + 'verticalLayoutContainer');
    var actionButtonsToolBar = new sap.ui.commons.Toolbar(this.getId() + '--' + "actionButtonsToolbarContainer");
    actionButtonsToolBar.addStyleClass("sapUiExtInboxActionButtonsToolbarContainer");

    if (sap.ui.getCore().byId(this.getId() + '--' + 'openActionButton') === undefined) {
        var completeButton = new sap.ui.commons.Button(this.getId() + '--' + "openActionButton", {
            icon : this._imgResourcePath + sap.uiext.inbox.InboxConstants.completeImage,
            text : this._oBundle.getText("INBOX_ACTION_BUTTON_OPEN"),
            enabled : false,
            tooltip : this._oBundle.getText("INBOX_ACTION_BUTTON_OPEN")
        });
        completeButton.attachPress(this, function(oEvent, view) {
            that.showBusyLoader();
            that.populateTaskExecutionContent();
            that.hideBusyLoader();
        });
        actionButtonsToolBar.addItem(completeButton);
    }
    if (sap.ui.getCore().byId(this.getId() + '--' + 'claimActionButton') === undefined) {
        var claimButton = new sap.ui.commons.Button(this.getId() + '--' + "claimActionButton", {
            icon : this._imgResourcePath + sap.uiext.inbox.InboxConstants.claimImage,
            text : this._oBundle.getText("INBOX_ACTION_BUTTON_CLAIM"),
            enabled : false,
            tooltip : this._oBundle.getText("INBOX_ACTION_BUTTON_CLAIM"),
            visible : false
        });
        claimButton.attachPress({inbox:that,view:that.constants.tableView,action:"Claim"}, that.executeActionOnTask);
        claimButton.setVisible(false);
        actionButtonsToolBar.addItem(claimButton);
    }
    if (sap.ui.getCore().byId(this.getId() + '--' + 'releaseActionButton') === undefined) {
        var releaseButton = new sap.ui.commons.Button(this.getId() + '--' + "releaseActionButton", {
            icon : this._imgResourcePath + sap.uiext.inbox.InboxConstants.releaseImage,
            text : this._oBundle.getText("INBOX_ACTION_BUTTON_RELEASE"),
            enabled : false,
            tooltip : this._oBundle.getText("INBOX_ACTION_BUTTON_RELEASE"),
            visible : false
        });
        releaseButton.attachPress({inbox:that,view:that.constants.tableView,action:"Release"}, that.executeActionOnTask);
        releaseButton.setVisible(false);
        actionButtonsToolBar.addItem(releaseButton);
    }
    if (sap.ui.getCore().byId(this.getId() + '--' + 'forwardActionButton') === undefined) {
    	var forwardButton = new sap.ui.commons.Button(this.getId() + '--' + "forwardActionButton", {
    		icon : this._imgResourcePath + sap.uiext.inbox.InboxConstants.forwardTaskImage,
    		text : this._oBundle.getText("INBOX_ACTION_BUTTON_FORWARD"),
    		enabled : true,
    		tooltip : this._oBundle.getText("INBOX_ACTION_BUTTON_FORWARD"),
    		visible : false //TODO: Do we show it or hide it ? 
    	});
    	forwardButton.attachPress({inbox:that,view:that.constants.tableView,action:"Forward"}, that._executeForwardAction);
    	actionButtonsToolBar.addItem(forwardButton);
    }
 /*   if (sap.ui.getCore().byId(this.getId() + '--' + 'refreshButton') === undefined) {
        var seprtr = new sap.ui.commons.ToolbarSeparator();
        actionButtonsToolBar.addItem(seprtr);

        var refreshButton = new sap.ui.commons.Image(this.getId() + '--' + "refreshButton", {
            tooltip : this._oBundle.getText("INBOX_REFRESH_BUTTON_TOOLTIP"),
            decorative : false
        });
        refreshButton.setSrc(this._imgResourcePath + sap.uiext.inbox.InboxConstants.refreshImage);
        refreshButton.attachPress(that, that.refreshTaskList);
        refreshButton.addStyleClass("sapUiExtInboxRefreshButtonHeight");
        actionButtonsToolBar.addItem(refreshButton);

        var refreshLink = new sap.ui.commons.Link(this.getId() + '--' + "refreshLink", {
            text : this._oBundle.getText("INBOX_REFRESH_TEXT"),
            tooltip : this._oBundle.getText("INBOX_REFRESH_BUTTON_TOOLTIP")
        });
        refreshLink.attachPress(that, that.refreshTaskList);
        actionButtonsToolBar.addItem(refreshLink);

    }*/
    if (sap.ui.getCore().byId(this.getId() + '--' + 'settingsButton') === undefined) {
        var settingsButton = new sap.ui.commons.MenuButton(this.getId() + '--' + "settingsButton", {
            tooltip : this._oBundle.getText("INBOX_SETTINGS_BUTTON_TOOLTIP"),
            icon : this._imgResourcePath + sap.uiext.inbox.InboxConstants.settingsImage,
            iconHovered: this._imgResourcePath + sap.uiext.inbox.InboxConstants.settingsImageHover,
            iconSelected: this._imgResourcePath + sap.uiext.inbox.InboxConstants.settingsImageHover,	
            lite : true
        });
        settingsButton.addStyleClass("sapUiExtInboxToolbarRight");
        //settingsButton.addStyleClass("sapUiExtInboxSettingsButton");
        
        //Creating the menu
        var inboxSettingsMenu = new sap.ui.commons.Menu(this.getId() + '--' +'inboxSettingsMenu', {tooltip: this._oBundle.getText("INBOX_SETTINGS_BUTTON_TOOLTIP")});
        //Creating items and adding them to the menu
        var rowSettingsMenuItem = new sap.ui.commons.MenuItem(this.getId() + '--' +"rowSettingsMenuItem",{
                                                                                                                        text: this._oBundle.getText("INBOX_TABLE_ROW_SETTINGS_MENU_ITEM"),
                                                                                                                        tooltip: this._oBundle.getText("INBOX_TABLE_ROW_SETTINGS_MENU_ITEM")
                                                                                                                        });
        inboxSettingsMenu.addItem(rowSettingsMenuItem);
        //TODO: Later We should enable disable Substitution Menu according to the property, setter/getters are already available. 
        //Adding substitution menu only if it is enabled, by default the property is false so it will not be enabled.
    //if(this.getSubstitutionEnabled()){ //Do not add this combo box if substitution is disabled
            var manageSubstitutionMenuItem = new sap.ui.commons.MenuItem(this.getId() + '--' + "manageSubstitutionMI",{
                                                                                                                    text: this._oBundle.getText("INBOX_MANAGE_SUBSTITUTION_RULES_MENU_ITEM"),
                                                                                                                    tooltip: this._oBundle.getText("INBOX_MANAGE_SUBSTITUTION_RULES_MENU_ITEM")
                                                                                                                    });
            inboxSettingsMenu.addItem(manageSubstitutionMenuItem);
//      }
        
        settingsButton.setMenu(inboxSettingsMenu);
      //Attaching an event respective to the selection made.
        settingsButton.attachItemSelected(that, that.menuButtonActionEvent);        
    //  settingsButton.attachPress(that, that.openToolPopUp);
        actionButtonsToolBar.addItem(settingsButton);
    }
    verticalLayout.addContent(actionButtonsToolBar);

    // START TABLE
    if (sap.ui.getCore().byId(this.getId() + '--' + 'listViewTable') === undefined) {
        var oTable = new sap.ui.table.Table(this.getId() + '--' + "listViewTable");
        oTable.addStyleClass("sapUiExtInboxCustomTable");
        oTable.setThreshold(10000);
        oTable.setEditable(false);
        oTable.bDynamic = true;
        // oTable.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);
        /*var userSettingsNoOfRows = that.getRowSettingsCookieValue();
        var userSettingsNoOfRows;
        if (userSettingsNoOfRows != undefined) {
            oTable.setVisibleRowCount(parseInt(userSettingsNoOfRows, 10));
        }*/
        for ( var i = 0; i < sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties.length; i++) {
            if (i == 0) {
                var taskLink = new sap.ui.commons.Link();
                taskLink.addDelegate({
                    onAfterRendering : function() {
                        if (!this.getEnabled()) {
                            this.addStyleClass('sapUiExtInboxLnkDsbl');
                        }
                    }
                });
                taskLink.bindProperty("text", sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i]);
                taskLink.bindProperty("tooltip", sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i]);	
                taskLink.bindProperty("enabled", "Status", function(value) {
                    // TODO: Check this Task Execution URL, keep translation in mind
                    // Remove it from here, may be perform is operation
                    // when a user selects My Completed Tasks, just
                    // before the binding rows.(Independent of the Status value)
                    // addedd COMMITTED for GW URL support
                    if (value === "COMMITTED") {
                    	this.addStyleClass("sapUiExtInboxLnkDsbl");
                    	return false;
                    } else if (that.getOpenCompletedTasks() === false && value == "COMPLETED") {
                    	this.addStyleClass("sapUiExtInboxLnkDsbl");
                    	return false;
                    }
                    this.removeStyleClass("sapUiExtInboxLnkDsbl");
                    return true;
                });
                taskLink.attachPress(this, function(oEvent, view) {
                    that.showBusyLoader();
                    var oRow = oEvent.getSource().getParent();
                    var oContext = oEvent.getSource().getBindingContext();
                    var oModel = that.getCoreModel();

                    // var oTaskExecMeta = {};
                    var aTaskExecutionURLs = [];
                    var aTaskExecIDs = [];
                    var aTaskExecTitles = [];
                    var aTaskExecSAPOrigins = [];

                    aTaskExecIDs.push(oModel.getProperty("InstanceID", oContext));
                    aTaskExecTitles.push(oModel.getProperty("TaskTitle", oContext));
                    aTaskExecSAPOrigins.push(oModel.getProperty("SAP__Origin", oContext));

                    if (that.getTaskExecutionURLCallBack != "" && that.getTaskExecutionURLCallBack != undefined && that.getTaskExecutionURLCallBack !== null){
                        aTaskExecutionURLs.push(that.getTaskExecutionURLCallBack(aTaskExecIDs[0],aTaskExecSAPOrigins[0]));
                    }else{
                        aTaskExecutionURLs.push("");
                    }

                    /*
                     * oTaskExecMeta["arrayURLs"] = aTaskExecutionURLs; oTaskExecMeta["arrayIDs"] = aTaskExecIDs;
                     * oTaskExecMeta["arrayTitles"] = aTaskExecTitles;
                     */
                    var evt = window.event;
                    if(!evt.ctrlKey && !(evt.button==1) && !evt.shiftKey){
	                    view.populateTaskExecutionContent({
	                        arrayURLs : aTaskExecutionURLs,
	                        arrayIDs : aTaskExecIDs,
	                        arrayTitles : aTaskExecTitles,
	                        aTaskSAPOrigins : aTaskExecSAPOrigins
	                    });
        			}else{
        				window.open(aTaskExecutionURLs[0]);
        			}
                    that.hideBusyLoader();
                });
                oTable.addColumn(new sap.ui.table.Column({
        					id : this.getId() + '--' + sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i]
            // }).setWidth("20%").setLabel(new sap.ui.commons.Label({ //FIXME: Column  is not visible  
        			}).setLabel(new sap.ui.commons.Label({
        					text : this._oBundle.getText(sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.propertiesLabel[i]),
        					design : sap.ui.commons.LabelDesign.Bold
        				})).setTemplate(taskLink).setSortProperty(sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i])
        				.setWidth("330px")//fixing the Task Title Column width, width cannot be in '%' as setFlexible will not work otherwise.
        				.setFlexible(false)

        				);
        			} else if (i == 1) {
        				oTable.addColumn(new sap.ui.table.Column({
        					id : this.getId() + '--' + sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i]
        				}).setLabel(new sap.ui.commons.Label({
        					text : this._oBundle.getText(sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.propertiesLabel[i]),
        					design : sap.ui.commons.LabelDesign.Bold
        				})).setTemplate(
        						new sap.ui.commons.TextView({
        							text : {
        								formatter : that.dateFormat,
        								path : sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i]
        							}
        						}).bindProperty("tooltip", sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i],
        								that.tooltipFormatForDateTime)).setSortProperty(
        						sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i]).setFlexible(true));// .setWidth("26%"));
        			} else if (i == 2) {
        				oTable.addColumn(new sap.ui.table.Column({
        					id : this.getId() + '--' + sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i]
        				}).setLabel(new sap.ui.commons.Label({
        					text : this._oBundle.getText(sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.propertiesLabel[i]),
        					design : sap.ui.commons.LabelDesign.Bold
        				})).setTemplate(
        						new sap.ui.commons.TextView({
        							text : {
        								formatter : that.dateFormat,
        								path : sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i]
        							}
        						}).bindProperty("tooltip", sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i],
        								that.tooltipFormatForDateTime)).setSortProperty(
        						sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i]).setFlexible(true));// .setWidth("26%"));
        			} else if (i == 3) {
      				var statusTxt = new sap.ui.commons.TextView();
      				// statusImage.setDecorative(false);
      				statusTxt.bindProperty("text", "Status", function(value) {
      					if (value != null && value != "" && value != undefined) {
      						return that._oBundle.getText(sap.uiext.inbox.InboxConstants.statusTooltip[value]);
      					}
      					return "";
      				});
      				// statusImage.bindProperty("alt", "Status");
      				// statusImage.bindProperty("src", "Status", function(value) {
      				// if (value != null && value != "" && value != undefined) {
      				// return that._imgResourcePath + sap.uiext.inbox.InboxConstants.statusImages[value];
      				// }
      				// return "";
      				// });

      				oTable.addColumn(new sap.ui.table.Column({
      					id : this.getId() + '--' + sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i]
      				}).setLabel(new sap.ui.commons.Label({
      					text : this._oBundle.getText(sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.propertiesLabel[i]),
      					design : sap.ui.commons.LabelDesign.Bold
      				})).setTemplate(statusTxt).setSortProperty(sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i])
      						.setFlexible(true));// .setWidth("11%"));
      			} else {
      				var priorityTxt = new sap.ui.commons.TextView();
      				// prioImage.setDecorative(false);
      				priorityTxt.bindProperty("text", "Priority", function(value) {
      					if (value != null && value != "" && value != undefined) {
      						return that._oBundle.getText(sap.uiext.inbox.InboxConstants.prioTooltip[value]);
      					}
      					return "";
      				});
      				// prioImage.bindProperty("alt", "Priority");
      				// prioImage.bindProperty("src", "Priority", function(value) {
      				// if (value != null && value != "" && value != undefined) {
      				// return that._imgResourcePath + sap.uiext.inbox.InboxConstants.prioImages[value];
      				// }
      				// return "";
      				// });
      				oTable.addColumn(new sap.ui.table.Column({
      					id : this.getId() + '--' + sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i]
      				}).setLabel(new sap.ui.commons.Label({
      					text : this._oBundle.getText(sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.propertiesLabel[i]),
      					design : sap.ui.commons.LabelDesign.Bold
      				})).setTemplate(priorityTxt).setSortProperty(
      						sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[i]).setFlexible(true));// .setWidth("11%"));
      			}
      		}

        var that = this;
        // code to capture sort event and reset search
        /*
         * oTable.addDelegate({ onAfterRendering : function() { var oTable$ = oTable.$(); var cols =
         * oTable$.find(".sapUiTableCol").get(); for ( var i = 0; i < cols.length; i++) { if
         * (cols[i].attributes['aria-sort']) { var sortValue = cols[i].attributes['aria-sort'].value; if (sortValue ===
         * "ascending" || sortValue === "descending") that.resetSearchCriteria(); } } } });
         */
        oTable.attachSort(function(oEvent) {
            that.resetSearchCriteria();
        });
        oTable.attachRowSelectionChange(function(oEvent) {
            var oDataModel = that.getCoreModel();
            var selectedStatus = [];
            var selectedTaskDefinitionID = [];
            var selectedInstanceID = [];
            var selectedIndices = this.getSelectedIndices();
            var oListTable = this;
            var mParameters = oEvent.getParameters();
						var supportsAction = {
            		supportsClaim:[],
            		supportsRelease:[]
            };
			var sapOrigin = [];			
            jQuery.each(selectedIndices, function(i, selIndex) {
                var rowContext = oListTable.getContextByIndex(selIndex);
                selectedStatus.push(oDataModel.getProperty("Status", rowContext));
                var taskDefnID = oDataModel.getProperty("TaskDefinitionID", rowContext)
                if(jQuery.inArray(taskDefnID,selectedTaskDefinitionID) === -1){
                	selectedTaskDefinitionID.push(oDataModel.getProperty("TaskDefinitionID", rowContext));
                }
                selectedInstanceID.push(oDataModel.getProperty("InstanceID", rowContext));
                supportsAction.supportsClaim.push(oDataModel.getProperty("SupportsClaim", rowContext));
                supportsAction.supportsRelease.push(oDataModel.getProperty("SupportsRelease", rowContext));
                sapOrigin.push(oDataModel.getProperty("SAP__Origin", rowContext))
            });
            that.disableActionButtonsOnMultiStatus(selectedStatus, supportsAction);
            if(that.isCustomActionsEnabled){
            	if(mParameters.rowIndex !== -1){
            		that._deleteCustomActionsForTableView();
            	}
            	var isCompletedTasksSelectedinDD =  that._isCompletedTasksSelected();
            	if(selectedTaskDefinitionID && selectedTaskDefinitionID.length === 1 && !isCompletedTasksSelectedinDD){
            		var aCustomActions = that._getCustomActionsDefinition(selectedInstanceID[0],selectedTaskDefinitionID[0],sapOrigin[0]);
            		if(aCustomActions && aCustomActions.length > 0)
            			that._createCustomActionsForTableView(aCustomActions,selectedInstanceID.length > 1 ? false : true);
            	}
            }
        });
        oTable.clearSelection();
    }
    verticalLayout.addContent(oTable);
    
   //Creating but will be hidden.
  	that.createRowRepeaterView();
  	
};

sap.uiext.inbox.Inbox.prototype.createRowRepeaterView = function (){
	var that = this;
	var verticalLayout = sap.ui.getCore().byId(that.getId() + '--' + 'verticalLayoutContainer');
 
	var oTasksRowRepeater = sap.ui.getCore().byId(that.getId() + '--'+'tasksRowRepeater');
	
	//RowRepeater Creation --Start--
 	if(!oTasksRowRepeater){
 		
 		//This is the Main Matix Layout which is the template for Row Repeater.
			var rrMainMatrixLayout = new sap.ui.commons.layout.MatrixLayout({
				id : that.getId() + '--' + "rrMainMatrixLayout",
				layoutFixed : false,
	 			columns : 3,
	 			width : '100%',
	 			widths : ['6%', '86%', '8%'] });
			
		// 1.First Row (Initiator Image, Task Title, Created On Date)
			var firstRow = new sap.ui.commons.layout.MatrixLayoutRow({
				id :  that.getId() + '--' + 'rrFirstRow',
				height: '25px' });

			rrMainMatrixLayout.addRow(firstRow);

			//Cell For Initiator Image
			var taskInitiatorImageCell = new sap.ui.commons.layout.MatrixLayoutCell({
				id :  that.getId() + '--' +  'taskInitiatorImageCell',
				rowSpan: 2 ,colSpan: 1,
				//padding: sap.ui.commons.layout.Padding.End,
				hAlign: sap.ui.commons.layout.HAlign.Center,
				vAlign: sap.ui.commons.layout.VAlign.Middle
			    });
			taskInitiatorImageCell.addStyleClass("sapUiExtInboxRRFirstRowStyle");
			 var taskInitiatorImg = new sap.ui.commons.Image(that.getId() + '--' + "taskInitiatorImg",{
	 	    	tooltip: this._oBundle.getText("INBOX_TASK_INITIATOR_PROFILE_PICTURE")
	 	    });
	 	    taskInitiatorImg.setSrc(that._imgResourcePath + sap.uiext.inbox.InboxConstants.taskInitiatorDefaultImage);
			  // TODO: After TaskInitiator Image is provided in Public API and in TCM, need to bind it from there, if
				// source URL is not defined and fall back on the default image.
	 	    /*taskInitiatorImg.bindProperty("alt", "Category");
	 	    taskInitiatorImg.bindProperty("src", "Category", function(value) {
	           if (value != null && value != "" && value != undefined) {
	        	   //TODO: Uncomment when Category is available
	               return that._imgResourcePath + sap.uiext.inbox.InboxConstants.taskInitiatorImages[value];
	           }
	           return "";
	 	    });*/
	 	    
				
				taskInitiatorImageCell.addContent(taskInitiatorImg);
				firstRow.addCell(taskInitiatorImageCell);

			//Cell For Task Title
			var taskTitleCell = new sap.ui.commons.layout.MatrixLayoutCell({
				id : that.getId() + '--' + 'taskTitleCell',
				padding: sap.ui.commons.layout.Padding.Bottom,
				hAlin: sap.ui.commons.layout.HAlign.Right
			});
			taskTitleCell.addStyleClass("sapUiExtInboxRRFirstRowStyle");

		// 1.Row : Task Title and Date
			/*var otaskStatusImage = new sap.ui.commons.Image({
			         id : that.getId() + '--' + "rrViewTaskTitleImage",
			         text : "",
			         decorative : false,
			         visible: false
//			         tooltip : this._oBundle.getText("INBOX_MSGBAR_CLOSE_TOOLTIP")
			     });
			otaskStatusImage.bindProperty("src","",function(value){
				return "";
			});*/
			
			var taskName = new sap.ui.commons.Link(that.getId() + '--' + "rrViewTaskTitle");
			taskName.addStyleClass('sapUiExtInboxfontBold');
			taskName.addDelegate({
	            onAfterRendering : function() {
	                if (this.data("overDue") === true) {
	                    this.addStyleClass('sapUiExtInboxRedColor');
	                }
	            }
	        });
			//taskName.addStyleClass("sapUiExtInboxNoUnderline");
	 	    taskName.bindProperty("text","TaskTitle", function(value){
	 	    	if(value !== null){
	 	    		var oModel = that.getCoreModel();
	 	    		var oContext = this.getBindingContext();
	 	    		var completionDeadline = oModel.getProperty("CompletionDeadLine",oContext);
	 	    		if(that._isOverDue(completionDeadline)){
	 	    			this.data("overDue",true);
	 	 	    		this.addStyleClass("sapUiExtInboxRedColor");
	 	 	    		return "! "+value;
	 	 	    	}else{
	 	 	    		this.data("overDue",false);
	 	 	    		this.removeStyleClass("sapUiExtInboxRedColor");
	 	 	    		return value;
	 	 	    	}
	 	    	}
	 	    	return "";
	 	    });
	 	    taskName.bindProperty("tooltip","TaskTitle");
	 	    taskName.bindProperty("enabled", "Status", function(value) {
	 	    	if (value === "COMMITTED") {
	 	    		this.addStyleClass("sapUiExtInboxLnkDsbl");
	 	    		return false;
	 	    	} else if (that.getOpenCompletedTasks() === false && value == "COMPLETED") {
	 	    		this.addStyleClass("sapUiExtInboxLnkDsbl");
	 	    		return false;
	 	    	}
	 	    	this.removeStyleClass("sapUiExtInboxLnkDsbl");
	 	    	return true;

	        });
	        taskName.attachPress(this, function(oEvent, view) {
	        	//TODO: Refactor so that need not be done at two places for the different Views
	            that.showBusyLoader();
	            var oRow = oEvent.getSource().getParent();
	            var oContext = oEvent.getSource().getBindingContext();
	            var oModel = that.getCoreModel();

	            // var oTaskExecMeta = {};
	            var aTaskExecutionURLs = [];
	            var aTaskExecIDs = [];
	            var aTaskExecTitles = [];
	            var aTaskExecSAPOrigins = [];

	            aTaskExecIDs.push(oModel.getProperty("InstanceID", oContext));
	            aTaskExecTitles.push(oModel.getProperty("TaskTitle", oContext));
	            aTaskExecSAPOrigins.push(oModel.getProperty("SAP__Origin", oContext));

	            if (that.getTaskExecutionURLCallBack != "" && that.getTaskExecutionURLCallBack != undefined && that.getTaskExecutionURLCallBack !== null){
	                aTaskExecutionURLs.push(that.getTaskExecutionURLCallBack(aTaskExecIDs[0],aTaskExecSAPOrigins[0]));
	            }else{
	                aTaskExecutionURLs.push("");
	            }

	            /*
	             * oTaskExecMeta["arrayURLs"] = aTaskExecutionURLs; oTaskExecMeta["arrayIDs"] = aTaskExecIDs;
	             * oTaskExecMeta["arrayTitles"] = aTaskExecTitles;
	             */
	            var evt = window.event;
	            if(!evt.ctrlKey && !(evt.button==1) && !evt.shiftKey){
                    view.populateTaskExecutionContent({
                        arrayURLs : aTaskExecutionURLs,
                        arrayIDs : aTaskExecIDs,
                        arrayTitles : aTaskExecTitles,
                        aTaskSAPOrigins : aTaskExecSAPOrigins
                    });
    			}else{
    				window.open(aTaskExecutionURLs[0]);
    			}
	            that.hideBusyLoader();
	        });

			taskTitleCell.addContent(taskName);
			firstRow.addCell(taskTitleCell);
				
			//Cell For Created On Date
			var createdOnCell = new sap.ui.commons.layout.MatrixLayoutCell({
				id : that.getId() + '--' + 'createdOnCell',
				padding: sap.ui.commons.layout.Padding.Both,
				hAlign: sap.ui.commons.layout.HAlign.Right
			});

			createdOnCell.addStyleClass("sapUiExtInboxRRFirstRowStyle");
			createdOnCell.addStyleClass("sapUiExtInboxRRPaddingRight");
			var createdOnDate = new sap.ui.commons.TextView(that.getId() + '--' + "rrViewCreatedOnDate");
			createdOnDate.addStyleClass("sapUIExtInboxRRTextColourStyle");
			createdOnDate.bindProperty("tooltip", "CreatedOn",that.tooltipFormatForDateTime);
			createdOnDate.bindProperty("text", "CreatedOn", function(value) {
				if (value !== null && value !== "") {
					return that.dateFormat(value, false);
				}
		  });

			createdOnCell.addContent(createdOnDate);
			firstRow.addCell(createdOnCell);	

			// 2. Second Row ((1st cell occupied by colSpan of Image), Task Description, Status)
			var secondRow = new sap.ui.commons.layout.MatrixLayoutRow({
				id : that.getId() + '--' + 'secondRow',
				height: '20px' });

			rrMainMatrixLayout.addRow(secondRow);

			//Cell For Task Desc
			var taskDescCell = new sap.ui.commons.layout.MatrixLayoutCell({
				id : that.getId() + '--' + 'taskDescCell',
				padding: sap.ui.commons.layout.Padding.End,
				rowSpan : 1 });

			 var taskDetails = new sap.ui.commons.TextView(that.getId() + '--' + "rrViewTaskDetails");
	 	    //taskDetails.bindElement("/TaskCollection/TaskDescription");
	 	    taskDetails.bindProperty("text","Description", function(value){
	 	    	if(value !== null && value != undefined){
	 	    		return value;
	 	    	}
	 	    	return "";
	 	    });

			taskDescCell.addContent(taskDetails);
			secondRow.addCell(taskDescCell);

			//Cell For Status
			var statusCell = new sap.ui.commons.layout.MatrixLayoutCell({
				id : that.getId() + '--' +  'statusCell',
				padding: sap.ui.commons.layout.Padding.End,
				hAlign: sap.ui.commons.layout.HAlign.Right
			});
			statusCell.addStyleClass("sapUiExtInboxRRPaddingRight");
			
		  var statusText = new sap.ui.commons.TextView(that.getId() + '--' + "rrViewStatus");
 	    statusText.addStyleClass("sapUIExtInboxRRTextColourStyle");
 	    statusText.bindProperty("text","Status", function(value) {
        if (value != null && value != "" && value != undefined) {
          return that._oBundle.getText(sap.uiext.inbox.InboxConstants.statusTooltip[value]);
        }
       return "";
 	    });

			statusCell.addContent(statusText);
			secondRow.addCell(statusCell);

			// 3.Row (Task Initiaor Name, Claim, ".", Release, SegmentedButtons(Attachments, Comments, CustomAttributes)
			var thirdRow = new sap.ui.commons.layout.MatrixLayoutRow({
				id : that.getId() + '--' + 'thirdRow',
				height: '25px' });

			rrMainMatrixLayout.addRow(thirdRow);

			//Cell for Task Initiator Name.	
			var taskInitiatorNameCell = new sap.ui.commons.layout.MatrixLayoutCell({
				id : that.getId() + '--' + 'taskInitiatorNameCell',
				hAlign: sap.ui.commons.layout.HAlign.Center,
				colSpan : 1 });

		   var taskInitiatorName = new sap.ui.commons.TextView(that.getId() + '--' + "taskInitiatorName",{design : sap.ui.commons.TextViewDesign.Small});
	 	    taskInitiatorName.bindProperty("text","CreatedBy");
	 	   // taskInitiatorVLayout.insertContent(taskInitiatorName, 1);

			taskInitiatorNameCell.addContent(taskInitiatorName);
			thirdRow.addCell(taskInitiatorNameCell);
				
				
			//Cell for Task Action Links.	
			var taskActionLayoutCell = new sap.ui.commons.layout.MatrixLayoutCell({
				id :  that.getId() + '--' +  'actionLinksCell',
				padding: sap.ui.commons.layout.Padding.None,
				colSpan : 1 });

			//TODO: This would be a actions specific layout inside the main Layout.
			//We should try to improve it in future.
	 	   var taskActionInnerMatLayt = new sap.ui.commons.layout.MatrixLayout({
				id : that.getId() + '--' + "taskActionMatrixLayout",
				layoutFixed : false
				});
	 	    
	 	   var claimActionCell = new sap.ui.commons.layout.MatrixLayoutCell({
	 	  	 id : that.getId() + '--' + 'claimActionCell',
	 	  	 hAlign: sap.ui.commons.layout.HAlign.Left,
	 	  	 vAlign: sap.ui.commons.layout.VAlign.Bottom,
	 	  	 colSpan : 1 });
	 	   
	 	    var claimActionLink = new sap.ui.commons.Link(that.getId() + '--' + "rrViewClaimAction",{tootltip:that._oBundle.getText("INBOX_ACTION_BUTTON_CLAIM")});
	 	    claimActionLink.addStyleClass("sapUiExtInboxLnkNoUnderline");
	 	    claimActionLink.bindProperty("enabled","Status",function(value){
	 	    	if((value !== null) && (value === "READY")){
	 	    			return true;
	 	    	}
	 	    	return false;
	 	     });	
	 	   
	 	   //DOT Seperator b/w Claim and Release Action Links
		 	   var dotLabel = new sap.ui.commons.Label({id:that.getId() + '--' + "dotSeparator", text:sap.uiext.inbox.InboxConstants.DOT});
		 	   dotLabel.addStyleClass("sapUIExtInboxDotSeperatorStyle"); 
	 	    
	 	   var isClaimSupported = false;
		   
	 	   claimActionLink.bindProperty("visible","SupportsClaim",function(value){
	 		   	isClaimSupported = value;
	 		   	if(isClaimSupported!==null && !isClaimSupported) {
	    			if(sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator"))
	    				sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator").setVisible(false);
	 		   	}
		    	return isClaimSupported;
		   });
		   
		   if(isClaimSupported) {
	 	    claimActionLink.bindProperty("visible","Status",function(value){
	 		   	if((value != null) && (value === "COMPLETED")){
	    			if(sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator"))
	    				sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator").setVisible(false);
	    			return false;
	    		}
	 		   	return true;
	 	   });
		   }
		   
	 	   	claimActionLink.setText(that._oBundle.getText("INBOX_ACTION_BUTTON_CLAIM"));
	 	    claimActionLink.attachPress({inbox:that,view:that.constants.rowRepeaterView,action:"Claim"}, that.executeActionOnTask);
	 	    claimActionCell.addContent(claimActionLink);

	 	    var releaseActionCell = new sap.ui.commons.layout.MatrixLayoutCell({
	 	    	id : that.getId() + '--' + 'releaseActionCell',
	 	    	hAlign: sap.ui.commons.layout.HAlign.Left,
	 	    	vAlign: sap.ui.commons.layout.VAlign.Bottom,
	 	    	colSpan : 1 });
	 	    
	 	    var releaseActionLink = new sap.ui.commons.Link(that.getId() + '--' + "rrViewReleaseAction",{tootltip:that._oBundle.getText("INBOX_ACTION_BUTTON_RELEASE")});
	 	    releaseActionLink.addStyleClass("sapUiExtInboxLnkNoUnderline");
	 	    releaseActionLink.bindProperty("enabled","Status",function(value){
	 	    	if(value !== null){
	 	    		if(value === "RESERVED" || value === "IN_PROGRESS") 
	 	    			return true;
	 	    		else if(value === "COMPLETED"){
	 	    			this.setVisible(false);
	 	    			sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator").setVisible(false);
	 	    		}
	 	    	}
	 	    	return false; 
		    });
	 	   
		 	var isReleaseSupported = false;
			   
		 	releaseActionLink.bindProperty("visible","SupportsRelease",function(value){
		 		 isReleaseSupported = value;
		 		   	if(isReleaseSupported!==null && !isReleaseSupported) {
		    			if(sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator"))
		    				sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator").setVisible(false);
		 		   	}
			    	return isReleaseSupported;
			 });
		 	
		 if(isReleaseSupported) { 
	 	   releaseActionLink.bindProperty("visible","Status",function(value){
	 		   	if((value != null) && (value === "COMPLETED")){
	    			if(sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator"))
	    				sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator").setVisible(false);
	    			return false;
	    		}
	 		   	return true;
	 	   });
		 }
	 	    releaseActionLink.setText(that._oBundle.getText("INBOX_ACTION_BUTTON_RELEASE"));
	 	    releaseActionLink.attachPress({inbox:that,view:that.constants.rowRepeaterView,action:"Release"}, that.executeActionOnTask);
	 	    releaseActionCell.addContent(releaseActionLink);
	 	    
	 	 //DOT Seperator b/w Release and Forward Action Links
		 	 var dotLabel2 = new sap.ui.commons.Label({id:that.getId() + '--' + "dotSeparator2", visible:true, text:sap.uiext.inbox.InboxConstants.DOT});
		 	 dotLabel2.addStyleClass("sapUIExtInboxDotSeperatorStyle");
		 	   
	 	    var forwardActionCell = that._createForwardActionLinkCell();
	 	    
//	 	   var dotLabelCell = new sap.ui.commons.layout.MatrixLayoutCell({
//	 	    	id : that.getId() + '--' + 'dotLabelCell',
//	 	    	hAlign: sap.ui.commons.layout.HAlign.Center,
//	 	    	vAlign: sap.ui.commons.layout.VAlign.Top,
//	 	    	colSpan : 1 });
//	 	  dotLabelCell.addContent(dotLabel);

	 	   taskActionInnerMatLayt.createRow(claimActionCell, dotLabel, releaseActionCell, dotLabel2, forwardActionCell);

	 	  taskActionLayoutCell.addContent(taskActionInnerMatLayt);
			thirdRow.addCell(taskActionLayoutCell);	
				
			//Cell for Other Actions Segmented Buttons.	
			var segmentedButtonsCell = new sap.ui.commons.layout.MatrixLayoutCell({
				id : that.getId() + '--' + 'segmentedButtonsCell',
				padding: sap.ui.commons.layout.Padding.None,
				hAlign: sap.ui.commons.layout.HAlign.End,
				colSpan : 1 });

			 var icons = that.createOtherActions(that);
			 segmentedButtonsCell.addContent(icons);
			 thirdRow.addCell(segmentedButtonsCell);	
 	    
			 rrMainMatrixLayout.addStyleClass("sapUiExtInboxRowRepeaterLayoutBorder");
		
	 	                         
 	    var oTasksRowRepeater = new sap.ui.commons.RowRepeater(that.getId() + '--'+'tasksRowRepeater',{numberOfRows : 5});	
 	   oTasksRowRepeater.setThreshold(10000);
 	    oTasksRowRepeater.setDesign(sap.ui.commons.RowRepeaterDesign.BareShell);
 	    oTasksRowRepeater.addStyleClass("sapUiExtInboxBackgroundColour");
 	   oTasksRowRepeater.addStyleClass("sapUiExtInboxRowRepeaterBorder");
 	   
 	    //var newModel = new sap.ui.model.odata.ODataModel(that.bpmSvcUrl,true);
 	    //var oModel = sap.ui.getCore().byId(that.getId() + '--' + 'listViewTable').getModel();
 	   
 	    //oTasksRowRepeater.setModel(oModel);
 	    /*var initialFilter = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.NE, "COMPLETED");
 	    var filters = [];
 	    filters.push(initialFilter);
 	    var initialSort = new sap.ui.model.Sorter("CreatedOn", true);
 	    //TODO: get it from 'this'(inbox) and not hard-code it.
 	   //oTasksRowRepeater.bindRows("/TaskCollection", rrMainMatrixLayout, initialSort, filters);//TODO: Actual Service.
 	   if(!(/^\//).test(that.sCollectionPath))
 		   that.sCollectionPath = "/"+ that.sCollectionPath;
 	   	var expand = that._getExpandParameters();
 	    if(expand.length > 0 ){
 	    	oTasksRowRepeater.bindRows({path: that.sCollectionPath,template: rrMainMatrixLayout, parameters: {expand: "TaskDescriptionCollection,CustomAttributesCollection"},sorter:initialSort,filters:filters});
 	    }else{
 	    	oTasksRowRepeater.bindRows({path: that.sCollectionPath,template: rrMainMatrixLayout,sorter:initialSort,filters:filters});
 	    }*/
 	   
 	   
 	    //TODO: Add Paginator
 	    //		oTasksRowRepeater.attachPage(function(e){
 	    //			updateText();
 	    //			});

 	    //RowRepeater Creation --Ends--     	
	 	}

 	
	//Adding Sorting Buttons Refresh Button and Settings
 	var rowRepeaterToolBar = that.createRowRepeaterToolBar(that);
 	rowRepeaterToolBar.setVisible(false);
 	verticalLayout.addContent(rowRepeaterToolBar);
 	
 	//This is based on the defaultView, after we introduce the concept of default view, we need to use that parameter and set visibility.
 	//If RR View is default then RR View visibilty will be true and List View Table will be false at the time of creation.
 	oTasksRowRepeater.setVisible(false);
 	verticalLayout.addContent(oTasksRowRepeater);
	 	
 	//Adding paginator and page settings(below rowrepeater).
 	var rowRepeaterToolsContent = that.createRowRepeaterToolsContent(that);
 	rowRepeaterToolsContent.setVisible(false);
 	verticalLayout.addContent(rowRepeaterToolsContent);
}

sap.uiext.inbox.Inbox.prototype.menuButtonActionEvent = function (oEvent, oInbox){
    var that = oInbox;
    var idOfItemSelected = oEvent.getParameter("itemId"); 
    if(idOfItemSelected === that.getId() + '--' +'rowSettingsMenuItem'){
        that.openToolPopUp(that);
    }else if(idOfItemSelected === that.getId() + '--' +'manageSubstitutionMI' || idOfItemSelected === that.getId() + '--' +'rrManageSubstitutionMI'){
            var substitutionRulesManager    = sap.ui.getCore().byId(that.getId() + '--' + 'substitutionRulesManager');
            if(substitutionRulesManager === undefined){
                    substitutionRulesManager = new sap.uiext.inbox.SubstitutionRulesManager(that.getId() + '--' + 'substitutionRulesManager');
                    substitutionRulesManager.setParent(that);
            }
            if(substitutionRulesManager.getModel() === undefined){
            	var newModel = new sap.ui.model.odata.ODataModel(that.bpmSvcUrl,true);
            	var oModel = that.getCoreModel();
            	newModel.oHeaders["x-csrf-token"] = oModel.oHeaders["x-csrf-token"];
            	substitutionRulesManager.setModel(newModel);
            }
            //substitutionRulesManager.bindSubstitutionRules(that._substitutionPath);
            substitutionRulesManager.open();
    }
};

sap.uiext.inbox.Inbox.prototype.populateTaskExecutionContent = function(oTaskExecMeta) {
    var that = this;
    this.showBusyLoader();

    var sTaskExecutionThemeURL = "";

    if (this.getTaskExecutionURLThemeValue() !== undefined && this.getTaskExecutionURLThemeValue() !== null
            && this.getTaskExecutionURLCallBack === this.getDefaultTaskExecutionURLCallBack) {
        sTaskExecutionThemeURL = this.getTaskExecutionURLThemeValue();
    }

    var executionUI = sap.ui.getCore().byId(this.getId() + '--' + 'taskExecUI');
    if (executionUI != undefined) {
        executionUI.destroy();
    }
    this.loadExecImages();
    this.deleteMessage();
    var i = 0;
    var urls, ids, titles, taskExecMeta,sapOrigins;
    if (oTaskExecMeta === undefined || oTaskExecMeta === null)
        oTaskExecMeta = this.getnavigateTaskExecMetadata();

    if (oTaskExecMeta != undefined) {
        urls = oTaskExecMeta.arrayURLs;
        ids = oTaskExecMeta.arrayIDs;
        titles = oTaskExecMeta.arrayTitles;
        sapOrigins = oTaskExecMeta.aTaskSAPOrigins;
    }

    executionUI = new sap.ui.ux3.OverlayContainer(this.getId() + '--' + "taskExecUI");
    executionUI.setOpenButtonVisible(false);
    executionUI.attachClose(this, function(oEvent, inBox) {
    	if(that.currentView === that.constants.tableView){
    		jQuery.sap.byId(that.getId() + '--' + "execURLFrame").attr('src', "");
    		var selectedContexts = [];
    		var oListTable = sap.ui.getCore().byId(inBox.getId() + '--' + 'listViewTable');
    		var selectedIndices = oListTable.getSelectedIndices();
    		jQuery.each(selectedIndices, function(i, selIndex) {
    			var rowContext = oListTable.getContextByIndex(selIndex);
    			selectedContexts.push(rowContext);
    		});
    		inBox.resetSearchCriteria();
    		inBox.applyFilterOnResponse(selectedContexts);
    		}
    	else{
    		inBox.resetSearchCriteria();
    		inBox.applyFilterOnResponse(selectedContexts);
    	}
    	//inBox.refreshTaskList(oEvent, inBox); TODO: Refresh on closing the task Execution UI
    });
    var nxtbtn = new sap.ui.commons.Button(this.getId() + '--' + "nxtBtn", {
        tooltip : this._oBundle.getText("INBOX_BUTTON_NEXT_TOOLTIP")
    });// icon : nxtBtnImage
    nxtbtn.addStyleClass("sapUiExtInboxNavigationButton");
    var nxtBtnCell = new sap.ui.commons.layout.MatrixLayoutCell({
        id : this.getId() + '--' + "nxtBtnCell"
    });
    nxtBtnCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
    nxtBtnCell.addContent(nxtbtn);

    var nxtBtnContainer = new sap.ui.commons.layout.MatrixLayout(this.getId() + '--' + "nxtBtnContainer", {
        layoutFixed : false,
        height : "100%"
    });
    nxtBtnContainer.createRow(nxtBtnCell);

    var prevbtn = new sap.ui.commons.Button(this.getId() + '--' + "prevBtn", {
        tooltip : this._oBundle.getText("INBOX_BUTTON_PREVIOUS_TOOLTIP")
    });// icon : prevBtnImage,
    prevbtn.addStyleClass("sapUiExtInboxNavigationButton");
    var prevBtnCell = new sap.ui.commons.layout.MatrixLayoutCell({
        id : this.getId() + '--' + "prevBtnCell"
    });
    prevBtnCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
    prevBtnCell.addContent(prevbtn);

    var prevBtnContainer = new sap.ui.commons.layout.MatrixLayout(this.getId() + '--' + "prevBtnContainer", {
        layoutFixed : false,
        height : "100%"
    });
    prevBtnContainer.createRow(prevBtnCell);

    var label = new sap.ui.commons.Label(this.getId() + '--' + "traverseLabel");

    var content = new sap.ui.core.HTML(this.getId() + '--' + "execURLFrame", {
        content : "<iframe name='myframe' src='" + urls[i] + sTaskExecutionThemeURL + "' scrolling='auto' id = '"
                + this.getId() + '--' + "execURLFrame"
                + "' style='position: absolute;height: 100%;width: 100%; border: none;'></iframe>"
    });

    var oBorderLayout = new sap.ui.commons.layout.BorderLayout(this.getId() + '--' + "taskExecBorderLayout", {
        width : "100%",
        height : "100%",
        top : new sap.ui.commons.layout.BorderLayoutArea({
            size : "20%",
            contentAlign : "center",
            visible : false,
            content : [new sap.ui.commons.TextView({
                text : 'Task:' + titles[i],
                design : sap.ui.commons.TextViewDesign.Bold
            })]
        }),
        bottom : new sap.ui.commons.layout.BorderLayoutArea({
            size : "4%",
            contentAlign : "center",
            visible : true,
            content : [label]
        }),
        begin : new sap.ui.commons.layout.BorderLayoutArea({
            size : "4%",
            contentAlign : "center",
            visible : true,
            content : [prevBtnContainer]
        }),
        center : new sap.ui.commons.layout.BorderLayoutArea({
            contentAlign : "left",
            visible : true,
            content : [content]
        }),
        end : new sap.ui.commons.layout.BorderLayoutArea({
            size : "4%",
            contentAlign : "center",
            visible : true,
            content : [nxtBtnContainer]
        })
    });
    executionUI.addContent(oBorderLayout);
    
    content.attachAfterRendering(function(){
        jQuery.sap.byId(that.getId() + '--' + "execURLFrame").bind('load', function(event) {
            
            var idsArrayLength = ids.length;
            if(i !== idsArrayLength - 1)
                nextB.setEnabled(true);
            else
                nextB.setEnabled(false);
            
            if(i===0)
                prevB.setEnabled(false);
            else
                prevB.setEnabled(true);
            
            label.setText((i+1) + " of " + ids.length);
            
        });
    });

    var prevB = sap.ui.getCore().byId(this.getId() + '--' + "prevBtn");
    prevB.setIcon(this._imgResourcePath + sap.uiext.inbox.InboxConstants.prevBtnImage);
    prevB.setEnabled(false);

    var nextB = sap.ui.getCore().byId(this.getId() + '--' + "nxtBtn");
    nextB.setIcon(this._imgResourcePath + sap.uiext.inbox.InboxConstants.nxtBtnImage);
    nextB.setEnabled(ids.length > 1);

    var label = sap.ui.getCore().byId(this.getId() + '--' + "traverseLabel");
    label.setText(i + 1 + " " + this._oBundle.getText("INBOX_OF") + " " + ids.length);

    nextB.attachPress(function() {
        // callBack
        
        //disable the next and prev buttons till the next one is loaded
        prevB.setEnabled(false);
        nextB.setEnabled(false);
        
        var status = "";
        if (that.getTaskExecURLStatusCallBack !== "" && that.getTaskExecURLStatusCallBack !== undefined && that.getTaskExecURLStatusCallBack !== null){ 
            status = that.getTaskExecURLStatusCallBack(ids[i],sapOrigins[i]);
        }
        if (status === "COMPLETED") {
            urls.splice(i, 1);
            ids.splice(i, 1);
        } else {
            i = i + 1;
        }

        if (urls[i] === undefined){
            // urls[i] = that.getTaskExecutionURL(ids[i]);
            urls[i] = ""; 
            if (that.getTaskExecutionURLCallBack !== "" && that.getTaskExecutionURLCallBack !== undefined && that.getTaskExecutionURLCallBack !== null){
                urls[i] = that.getTaskExecutionURLCallBack(ids[i],sapOrigins[i]);
            }
        }
        jQuery.sap.byId(that.getId() + '--' + "execURLFrame").attr('src', urls[i] + sTaskExecutionThemeURL);
        
    });

    prevB.attachPress(function() {
        // var status = that.getPropertyforTaskID("Status",ids[i]);

        //disable the next and prev buttons till the next one is loaded
        prevB.setEnabled(false);
        nextB.setEnabled(false);
        
        var status = "";
        if (that.getTaskExecURLStatusCallBack !== "" && that.getTaskExecURLStatusCallBack !== undefined && that.getTaskExecURLStatusCallBack !== null){
            that.getTaskExecURLStatusCallBack(ids[i],sapOrigins[i]);
        }
        if (status === "COMPLETED") {
            urls.splice(i, 1);
            ids.splice(i, 1);
        }

        i = i - 1;

        if (urls[i] === undefined){
            urls[i] = "";
            if (that.getTaskExecutionURLCallBack !== "" && that.getTaskExecutionURLCallBack !== undefined && that.getTaskExecutionURLCallBack !== null){
                // urls[i] = that.getTaskExecutionURL(ids[i]);
                urls[i] = that.getTaskExecutionURLCallBack(ids[i],sapOrigins[i]);
            }
        }
        jQuery.sap.byId(that.getId() + '--' + "execURLFrame").attr('src', urls[i] + sTaskExecutionThemeURL);

    });

    executionUI.open();
};

sap.uiext.inbox.Inbox.prototype.createInboxUI = function() {
    
	//Basic View: This view would be common for any view ex: Table View, Row Repeater View or Feed View
	var verticalLayout = new sap.ui.commons.layout.VerticalLayout(this.getId() + '--' + "verticalLayoutContainer");
    if (sap.ui.getCore().byId(this.getId() + '--' + 'msgBarContainer') === undefined) {
        verticalLayout.insertContent(this.populateMsgBar(), 0);
    }
    if (sap.ui.getCore().byId(this.getId() + '--' + 'toolbarContainer') === undefined) {
        verticalLayout.insertContent(this.populateToolBar(), 1);
    }
    
    this.populateViews();
    return verticalLayout;
};

sap.uiext.inbox.Inbox.prototype.openToolPopUp = function(inBox) {
    var that = inBox;
    //var rowSettingValue = that.getRowSettingsCookieValue();
    var rowSettingValue;
    var noOfrowsRBG = sap.ui.getCore().byId(that.getId() + '--' + "rowSettingsRBG");;
    var settingsPopUp = sap.ui.getCore().byId(that.getId() + '--' + "sPopup");
    if (settingsPopUp === undefined) {
        noOfrowsRBG = new sap.ui.commons.RadioButtonGroup(that.getId() + '--' + "rowSettingsRBG", {
            tooltip : "Select number of rows to be displayed on the Table",
            columns : 3
        // select: function() {oController.setRowSettingsCookieValue(this.getSelectedItem().getText(),1);}
        });
        var oItem = new sap.ui.core.Item({
            text : "10",
            key : "rows10"
        });
        noOfrowsRBG.addItem(oItem);
        oItem = new sap.ui.core.Item({
            text : "25",
            key : "rows25"
        });
        noOfrowsRBG.addItem(oItem);
        oItem = new sap.ui.core.Item({
            text : "50",
            key : "rows50"
        });
        noOfrowsRBG.addItem(oItem);
        settingsPopUp = new sap.ui.commons.Dialog(that.getId() + '--' + "sPopup", {
            title : inBox._oBundle.getText("INBOX_TABLE_SETTINGS_POPUP_TITLE"),
            content : [noOfrowsRBG],
            buttons : [new sap.ui.commons.Button({
                text : inBox._oBundle.getText("INBOX_BUTTON_OK_TEXT"),
                press : function() {
//                  that.setRowSettingsCookieValue(sap.ui.getCore().byId(that.getId() + '--' + 'rowSettingsRBG')
//                          .getSelectedItem().getText(), 1);
                    that.setNoOfRowsOnTable(sap.ui.getCore().byId(that.getId() + '--' + 'rowSettingsRBG')
                            .getSelectedItem().getText());
                    settingsPopUp.close();
                }
            })]
        });
        settingsPopUp.setWidth("231px");
        settingsPopUp.setHeight("137px");

    }
    if (rowSettingValue === undefined) {
        rowSettingValue = sap.ui.getCore().byId(that.getId() + '--' + 'listViewTable').getVisibleRowCount() + "";
    }
    if (rowSettingValue != undefined && noOfrowsRBG != undefined) {
        switch (rowSettingValue) {
            case "10" :
                noOfrowsRBG.setSelectedIndex(0);
                break;
            case "25" :
                noOfrowsRBG.setSelectedIndex(1);
                break;
            case "50" :
                noOfrowsRBG.setSelectedIndex(2);
                break;
        }
    }
    settingsPopUp.open();
};

sap.uiext.inbox.Inbox.prototype.setSubstitutionEnabled = function(isSubstitutionEnabled, path) {
    if(this.isSubstitutionEnabled != isSubstitutionEnabled) {
        this.isSubstitutionEnabled = isSubstitutionEnabled; 
        this._substitutionPath = path;
        this.addAndRemoveSubstDropDowns();
    }
    //TODO: Might need this code later point of time.
    //var settingsButton = sap.ui.getCore().byId(this.getId() + '--' + "settingsButton");
    //if(settingsButton != undefined){
    //  settingsButton.rerender();
    //}
};

sap.uiext.inbox.Inbox.prototype._setColumnVisibility = function(colList) {
	if(colList !== undefined && colList !== null){
		var that=this;
		var isTaskTitleVisible=false;
		var consts= sap.uiext.inbox.InboxConstants;
		var oTable= sap.ui.getCore().byId(this.getId() + '--' + 'listViewTable');
		var invisibleCols= this.getInvisibleCols(colList);
		var cols= oTable.getColumns();
		jQuery.each(cols,function(index,column){
			jQuery.each(invisibleCols,function(index,field){
				if(that.absId(column.getId())===sap.uiext.inbox.InboxConstants.TABLE_VIEW_TECH_NAMES[field])
					column.setVisible(false);
				
			});
		});
		this.resizeColumns();
	}
};

sap.uiext.inbox.Inbox.prototype.absId= function(string){
	return string.split("--")[1].replace(/^\s+|\s+$/g,'');
	
};
sap.uiext.inbox.Inbox.prototype.getInvisibleCols= function(colList){
	var invisibleCols= [];
	jQuery.each(colList.columns,function(index,col){
		if(col.visibility===false)
			invisibleCols.push(col.field);
		
	});
	return invisibleCols;
	
};
sap.uiext.inbox.Inbox.prototype.getColumnVisibility = function() {
	return this.colList;
};

sap.uiext.inbox.Inbox.prototype.getSubstitutionEnabled = function() {
    return this.isSubstitutionEnabled
};

sap.uiext.inbox.Inbox.prototype.clearDrillDownFilter = function(){
    this.resetFilterView(true);
}

sap.uiext.inbox.Inbox.prototype.getTaskTableBinding = function() {
    var oListTable = sap.ui.getCore().byId(this.getId() + '--' + 'listViewTable');
    return oListTable.getBinding('rows');
};

sap.uiext.inbox.Inbox.prototype.bindTaskExecutionURL = function(taskExecURLfnCallBack, taskExecURLStatusCallBack) {
    this.getTaskExecutionURLCallBack = taskExecURLfnCallBack;
    this.getTaskExecURLStatusCallBack = taskExecURLStatusCallBack;
    return this;
};

sap.uiext.inbox.Inbox.prototype.bindTaskTypeDynamicFilter = function(taskTypeDynamicFilterCallBack) {
    this.dynamicTaskTypeFilterCallBack = taskTypeDynamicFilterCallBack;
    return this;
};

sap.uiext.inbox.Inbox.prototype.bindSearch = function(searchCallBack) {
    this.searchCallBack = searchCallBack;
    return this;
};

sap.uiext.inbox.Inbox.prototype.bindSubstitutedUsers = function(sPath){
    var dropdownComboBox3 = sap.ui.getCore().byId(this.getId() + '--' + 'filterComboBox3');
    var onBehalfOf = sap.ui.getCore().byId(this.getId() + '--' + 'onBehalfOfListItem');
    if(onBehalfOf === undefined) {
        onBehalfOf = new sap.ui.core.ListItem(this.getId() + '--' + 'onBehalfOfListItem');
    }
    onBehalfOf.setText(this._oBundle.getText("SUBSTITUTION_INBOX_FILTER_ON_BEHALF_OF"));
    onBehalfOf.setKey("onBehalfOf");
    onBehalfOf.setEnabled(false);
    
    var allUsers = sap.ui.getCore().byId(this.getId() + '--' + 'li_allUsers');
    if(allUsers === undefined) {
        allUsers = new sap.ui.core.ListItem(this.getId() + '--' + 'li_allUsers');
    }   
    allUsers.setText(this._oBundle.getText("INBOX_DROP_DOWN_VALUE_ALL_USERS"));
    allUsers.setKey("allUsers");

//  var onBehalfOf = '';
//    if(sap.ui.getCore().byId(this.getId() + '--' + 'onBehalfOfListItem') === undefined) {
//      var onBehalfOf = new sap.ui.core.ListItem(this.getId() + '--' + 'onBehalfOfListItem');
//    }
//    onBehalfOf.setText(this._oBundle.getText("SUBSTITUTION_INBOX_FILTER_ON_BEHALF_OF"));
//    onBehalfOf.setKey("onBehalfOf");
//    onBehalfOf.setEnabled(false);
//    
//    dropdownComboBox3.addItem(onBehalfOf);
//
//    var allUsers = '';
//    if(sap.ui.getCore().byId(this.getId() + '--' + 'li_allUsers') === undefined) {
//      allUsers = new sap.ui.core.ListItem(this.getId() + '--' + 'li_allUsers');
//    } 
//    allUsers.setText(this._oBundle.getText("INBOX_DROP_DOWN_VALUE_ALL_USERS"));
//  allUsers.setKey("allUsers");
//  
//  dropdownComboBox3.addItem(allUsers);

    var IDURIPart = sPath+"?$format=json&$skip=0&$top=100&$filter=((SubstitutedUsers eq true))&$inlinecount=allpages";
    var requestURI = this.bpmSvcUrl + IDURIPart;
    var substitutes = "";
    var oModel = this.getCoreModel();
    var that = this;
    /****************/
    var requestOptions = {
        async:false,
        requestUri : requestURI,
        method : "GET",
        headers : {
            Accept : "application/json",
            "x-csrf-token" : oModel.oHeaders["x-csrf-token"]
        }
    };
    OData.request(requestOptions, function(data, request) {
        // TO-DO : make this generic
        //substitutes = data.DisplayName;
        //dropdownComboBox3
        
        if(data.results.length > 0) {
            if(dropdownComboBox3.getEnabled() === false) {
                dropdownComboBox3.setEnabled(true);
            }

        dropdownComboBox3.removeAllItems();
        dropdownComboBox3.addItem(onBehalfOf);
        dropdownComboBox3.addItem(allUsers);
        
        for (var i = 0; i < data.results.length; i++) {
            substitutes +=data.results[i].DisplayName;
            //if(that.doesThisItemExistInComboBox(listOfItems, data.results[i].UniqueName) === false) {
                var listItem = new sap.ui.core.ListItem();
                listItem.setKey(data.results[i].UniqueName);
                listItem.setText(data.results[i].DisplayName);
                dropdownComboBox3.addItem(listItem);
            //}
          }
        } else {
            dropdownComboBox3.setEnabled(false);
        }
    }, function(error) {
        if(error.response.statusCode == 205){
            var eventParams = {statusCode : error.response.statusCode, statusText : error.response.statusText};
            oModel.fireRequestFailed(eventParams);
        }else{
        //TODO: use enums for messageType.
            that.showMessage("error", that._oBundle.getText("INBOX_MSG_ERR_EXUI") + this.id);
        }
    });
    
//  var newOModel = new sap.ui.model.odata.ODataModel(this.oModel.sServiceUrl,true);
//  dropdownComboBox3.setModel(newOModel);
//  
//  var oItemTemplate1 = new sap.ui.core.ListItem();
//  oItemTemplate1.bindProperty("text", "DisplayName");
//  oItemTemplate1.bindProperty("key", "UniqueName");
//  var oFilter = [];
//  var filter = new sap.ui.model.Filter("SubstitutedUsers", sap.ui.model.FilterOperator.EQ, "true");
//  oFilter.push(filter);
//  dropdownComboBox3.bindItems(sPath, oItemTemplate1, null, oFilter); 
    
    //var oModel = this.getCoreModel();
    //oModel.oData["UserInfoCollection('USER.PRIVATE_DATASOURCE.un:allUsers')"] = {"DisplayName":"All Users", "UniqueID":"USER.PRIVATE_DATASOURCE.un:allUsers","__metadata":{"type":"Inbox.UserInfo","uri":""}};
    
    /*var allUsers = new sap.ui.core.ListItem(this.getId() + '--' + "li_allUsers");
    allUsers.bindProperty("text",this._oBundle.getText("INBOX_DROP_DOWN_VALUE_ALL_USERS"));
    allUsers.bindProperty("key","allUsers");
    dropdownComboBox3.addItem(allUsers);
    */
};

sap.uiext.inbox.Inbox.prototype.bindTaskTable = function(sPath, oTaskFilters) {
		//Forward action on/off
		if(this.isForwardActionEnabled)
		{
				var forwardButton = this._getComponent('forwardActionButton');
				forwardButton.setVisible(true);
		}
    
    this.modelRefreshed = true;
    this.oModel = this.getModel();

    if (this.oModel instanceof sap.ui.model.json.JSONModel) {
        this.typeOfModel = "JSON";
        this.setHandleBindings(false);
        this._resetFlags();
    } else if (this.oModel instanceof sap.ui.model.odata.ODataModel) {
        this.typeOfModel = "OData";
        this.attachTaskAction(this, this.defaultActionHandler);
        this.setHandleBindings(true);
    } else if (this.oModel instanceof sap.ui.model.xml.XMLModel) {
        this.typeOfModel = "xml";
        this.setHandleBindings(false);
        this._resetFlags();
    }
    if (this.getHandleBindings()) {
        if (this.typeOfModel === "OData") {
            //this.oModel.setCountSupported(true);
            this.bpmSvcUrl = this.oModel.sServiceUrl;
            //temp refctor this piece
            
        }
    }
    
    this.sCollectionPath = sPath;
    // Check for '/' in the path  (if any)
    if(!(/^\//).test(this.sCollectionPath))
        this.sCollectionPath = "/"+ this.sCollectionPath;
    //if(this.sProviderHost === undefined || this.sProviderHost === "") {
    //  this.sProviderHost = this.getProviderHost();
    //}

    this.oModel.attachRequestCompleted(this, function(oEvent, inBox) {
   	
        //var oListTable = sap.ui.getCore().byId(inBox.getId() + '--' + 'listViewTable');
        //var oTableBinding = oListTable.getBinding('rows');
    	
    	var currentViewElement = inBox._currentViewElement();
        var currentViewElementBinding = currentViewElement.getBinding('rows');
        var taskDefinitionFilter = false;
       // alert(currentViewElement);
        
        if(currentViewElementBinding.sFilterParams.indexOf('TaskDefinitionID') === -1){
        	if(inBox.bRefreshTaskTypes){
                inBox.refreshTaskTypes();
            }
        }else{
            	taskDefinitionFilter = true;
        }
        inBox.bRefreshTaskTypes = true;
        
        inBox.hideBusyLoader();
        
        var length = currentViewElementBinding.iLength;
        var appliedFilter = sap.ui.getCore().byId(inBox.getId() + '--' + 'filterComboBox2').getValue();
       // alert(length + appliedFilter);
        if (length <= 0) {
    		//TODO: use enums for messageType.
    		inBox.showMessage("info", inBox._oBundle.getText("INBOX_MSG_FOR_NO_DATA"));
    	} else {
    		if (inBox.resetMessages === true)
    			inBox.deleteMessage();
    		else
    			inBox.resetMessages = true;
    	}
        
        if(inBox.currentView ===sap.uiext.inbox.InboxConstants.tableView){
        	var rowContext, selectedStatus = [];
        	var reselectIndices = [];
            var supportsAction = {
            		supportsClaim:[],
            		supportsRelease:[]
            };
        	var selectedContexts = inBox._getSelectedContextsBeforeRequest();
        	var boundContextList = currentViewElement.getBinding('rows').getContexts();
        	var oModel = currentViewElement.getModel();
        	var index = -1;
        	jQuery.each(selectedContexts, function(i, context) {
        		jQuery.each(boundContextList, function(j, boundContext){
        			if(context.sPath === boundContext.sPath){
        				index = j;
        				return false;
        			}
        		});
        		if(index > -1){
        			reselectIndices.push(index);
            		rowContext = currentViewElement.getContextByIndex(index);
            		selectedStatus.push(oModel.getProperty("Status", rowContext));
								supportsAction.supportsClaim.push(oModel.getProperty("SupportsClaim", rowContext));
                supportsAction.supportsRelease.push(oModel.getProperty("SupportsRelease", rowContext));
        		}
        	});
        	for ( var i = 0; i < reselectIndices.length; i++) {
        		currentViewElement.addSelectionInterval(reselectIndices[i],reselectIndices[i]);
        	}
        	if(inBox.isCustomActionsEnabled){
	        	if(reselectIndices.length === 0){
	        		var isCompletedTasksSelectedinDD =  inBox._isCompletedTasksSelected();
	        		if(taskDefinitionFilter && !isCompletedTasksSelectedinDD){
	            		var oTaskTypefilterList = inBox._getComponent("INBOX_FILTER_TASK_TYPE");
	            		var aSelectedKeys = oTaskTypefilterList.getSelectedKeys();
	            		if(aSelectedKeys && aSelectedKeys.length === 1){
	            			var oSelItem = inBox._getSelectedItemfromKey(oTaskTypefilterList,aSelectedKeys[0])
	            			var aCustomActionsDefinitionArray = inBox._getCustomActionsDefinition(null,aSelectedKeys[0],oSelItem.data("SAP__Origin"));
	            			inBox._deleteCustomActionsForTableView();
	            		            //create Columns
	            		    if(aCustomActionsDefinitionArray && aCustomActionsDefinitionArray.length>0)
	            		    	inBox._createCustomActions(aCustomActionsDefinitionArray, false);
	            		}else{
	            			inBox._deleteCustomActionsForTableView();
	            		}
	            	}else{
	            		inBox._deleteCustomActionsForTableView();
	            	}
	        	}
        	}
        	inBox.disableActionButtonsOnMultiStatus(selectedStatus, supportsAction);
        }else if(inBox.currentView ===sap.uiext.inbox.InboxConstants.rowRepeaterView){
        	inBox._updatePaginator(length);
        }
        
        var refreshButton = sap.ui.getCore().byId(inBox.getId() + '--' + 'refreshButton');
        refreshButton.setSrc(inBox._imgResourcePath + sap.uiext.inbox.InboxConstants.refreshImage);
        var oDataEventParams = oEvent.getParameters();
        oDataEventParams.bindingLength = length;
        oDataEventParams.appliedFilter = appliedFilter;
        inBox.fireODataRequestCompleted(oDataEventParams);
        
        //apply search in case the seaRch field has an input
        var srchFld = inBox._getComponent('searchField');
        var srchText = srchFld.getValue();
        if(srchText !== "" && srchText !== null){
        	srchFld.fireSearch({query:srchText});
        }

    });
    this.oModel.attachRequestFailed(this, function(oControlEvent, inBox) {
        inBox.showMessage("error", inBox._oBundle.getText("INBOX_MSG_NO_ODATA_SRVC"));
        inBox.hideBusyLoader();
    });
    var table = sap.ui.getCore().byId(this.getId() + '--' + "listViewTable");
    table.setModel(this.oModel);
    
    var oTasksRowRepeater = sap.ui.getCore().byId(this.getId() + '--'+'tasksRowRepeater');
    oTasksRowRepeater.setModel(this.oModel);
    var oRowRepeaterTemplate = this._getComponent('rrMainMatrixLayout');
    
    // Define default Initial Sort and Filter for Table Binding
    var initialSort = new sap.ui.model.Sorter("CreatedOn", true);
    var initialFilter = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.NE, "COMPLETED");
    
    // select My Open Tasks in case something else is selected
    var dropdownComboBox = sap.ui.getCore().byId(this.getId() + '--' + "filterComboBox2");
    dropdownComboBox.setValue(this._oBundle.getText("INBOX_DROP_DOWN_VALUE_OPEN_TASKS"));
    
    var oFacet = sap.ui.getCore().byId(this.getId()+'--'+"filterFacet");
    
    var statusAttr = sap.ui.getCore().byId(this.getId() + '--' + "INBOX_FILTER_STATUS");
    if (statusAttr != undefined && oFacet.indexOfList(oFilterDateTime) === -1) {
        oFacet.addList(statusAttr);
    }

    var oFilterDateTime = sap.ui.getCore().byId(this.getId() + '--' + "INBOX_FILTER_CREATION_DATE");
    if (oFilterDateTime != undefined && oFacet.indexOfList(oFilterDateTime) === -1) {
        oFacet.addList(oFilterDateTime);
    }
    
    var oFilterDueDateTime = sap.ui.getCore().byId(this.getId() + '--' + "INBOX_FILTER_DUE_DATETIME");
    if (oFilterDueDateTime != undefined && oFacet.indexOfList(oFilterDueDateTime) === -1) {
        oFacet.addList(oFilterDueDateTime);
    }
    
    // Reset Drill Down Filters if already applied.
    this.resetFilterView(false);
    
    if (this.defaultView === this.constants.rowRepeaterView) {
    	//change this to get the RR button for segmented button
    	var viewButtonsSegBtns = sap.ui.getCore().byId(this.getId() + '--' + 'viewSelectionSegBtn');
    	if(viewButtonsSegBtns !== undefined){
    		var rrSegmentedButtonID = this.getId() + '--' + 'rrViewSelectionButton';
    		viewButtonsSegBtns.setSelectedButton(rrSegmentedButtonID);
    		var rrViewSelectionButton = sap.ui.getCore().byId(this.getId() + '--' + 'rrViewSelectionButton');
    		viewButtonsSegBtns.fireSelect({selectedButtonId: rrSegmentedButtonID,triggeredFrom : 'initialView'});
    		//var oEvent = new sap.ui.base.Event();
    		//oEvent.oSource = rrImage; 
    		//oEvent.triggeredFrom = 'initialView';
    		//viewButtonsSegBtns.firePress(oEvent);
    	}
    } 
    var toggleButton = sap.ui.getCore().byId(this.getId() + '--' + "filterViewButton");
    var filtersTobeApplied = [];
    // if(aFilters !== undefined && aFilters.length > 0)
    if (oTaskFilters !== undefined && oTaskFilters !== null) {
        // set the type of provider... needs to be done for Gateway services.
        oTaskFilters.setProviderHost(this.sProviderHost);
        // rendering change
        var oTaskFiltersTobeApplied = oTaskFilters.getFiltersTobeApplied();
        filtersTobeApplied = oTaskFiltersTobeApplied.filterOperatorArray;
        var toggleOnFilter = filtersTobeApplied.length > 0 ?  !toggleButton.getPressed() : toggleButton.getPressed();
        if(toggleOnFilter){
            toggleButton.setPressed(!toggleButton.getPressed());
        }
        if(filtersTobeApplied.length > 0){
            this.filtersToApply = oTaskFiltersTobeApplied.filtersAppliedMap;
            if (this.filtersToApply.readyStat === undefined && this.filtersToApply.resStat === undefined
                    && this.filtersToApply.InProStat === undefined) {
                filtersTobeApplied.push(initialFilter);
                this.filtersToApply.dropDownFilter = initialFilter;
            }
            
            if(oFacet === undefined){
                oFacet = sap.ui.getCore().byId(this.getId()+'--'+"filterFacet");
            }
            var attributesTobeSelected = oTaskFilters.getAttributesTobeSelected();
            var prioFilterList = sap.ui.getCore().byId(this.getId()+'--'+"INBOX_FILTER_PRIORITY");
            var statusFilterList = sap.ui.getCore().byId(this.getId()+'--'+"INBOX_FILTER_STATUS");
            var dateTimeFilterList = sap.ui.getCore().byId(this.getId()+'--'+"INBOX_FILTER_CREATION_DATE");
            var taskTypeFilterList = sap.ui.getCore().byId(this.getId()+'--'+"INBOX_FILTER_TASK_TYPE");
            var dueDateTimeFilterList = sap.ui.getCore().byId(this.getId()+'--'+"INBOX_FILTER_DUE_DATETIME");
            

            if(attributesTobeSelected.taskTypeAtts.length > 0 && taskTypeFilterList !== undefined){
                taskTypeFilterList.setSelectedKeys(attributesTobeSelected.taskTypeAtts);
            }
            if(attributesTobeSelected.prioAtts.length > 0 && prioFilterList !== undefined){
                prioFilterList.setSelectedKeys(attributesTobeSelected.prioAtts);
            }
            if(attributesTobeSelected.statusAtts.length > 0 && statusFilterList !== undefined){
                statusFilterList.setSelectedKeys(attributesTobeSelected.statusAtts);
            }
            if(attributesTobeSelected.dateAtts.length > 0 && dateTimeFilterList !== undefined){
                dateTimeFilterList.setSelectedKeys(attributesTobeSelected.dateAtts);
            }
            if(attributesTobeSelected.dueDateAtts.length > 0 && dueDateTimeFilterList !== undefined){
                dueDateTimeFilterList.setSelectedKeys(attributesTobeSelected.dueDateAtts);
            }
        }else{
            filtersTobeApplied.push(initialFilter);
            this.filtersToApply.dropDownFilter = initialFilter;
        }
        
        if (this.defaultView === this.constants.rowRepeaterView){
        	var expand = this._getExpandParameters();
        	if(expand.length > 0 ){
        		oTasksRowRepeater.bindRows({path: this.sCollectionPath,template: oRowRepeaterTemplate, parameters: {expand: expand},sorter:initialSort,filters:filtersTobeApplied});
        	}else{
        		oTasksRowRepeater.bindRows({path: this.sCollectionPath,template: oRowRepeaterTemplate,sorter:initialSort,filters:filtersTobeApplied});
        	}
        }
        
    	/*if(this.isCustomAttributesEnabled){
    		table.bindRows({path: this.sCollectionPath
    			,parameters: {expand: "CustomAttributeData"},sorter:initialSort,filters:filtersTobeApplied});
	    }else{*/
	         table.bindRows(this.sCollectionPath, initialSort, filtersTobeApplied);
	    //}
        
    } else {
        if(toggleButton.getPressed()){
            toggleButton.setPressed(!toggleButton.getPressed());
            toggleButton.firePress(null);
        }
        this.filtersToApply.dropDownFilter = initialFilter;
        filtersTobeApplied.push(initialFilter);

        //bind RowRepeater .. binding should not be here. introduce a concept of default Views, where the binding happens on the fly
        if (this.defaultView === this.constants.rowRepeaterView){
        	var expand = this._getExpandParameters();
        	if(expand.length > 0 ){
     	    	oTasksRowRepeater.bindRows({path: this.sCollectionPath,template: oRowRepeaterTemplate, parameters: {expand: expand},sorter:initialSort,filters:[initialFilter]});
        	}else{
     	    	oTasksRowRepeater.bindRows({path: this.sCollectionPath,template: oRowRepeaterTemplate,sorter:initialSort,filters:[initialFilter]});
        	}
        }
        
    	//bind Table
    	/*if(this.isCustomAttributesEnabled){
            table.bindRows({path: this.sCollectionPath
                ,parameters: {expand: "CustomAttributeData"},sorter:initialSort,filters:[initialFilter]});
        }else{*/
            table.bindRows(this.sCollectionPath, initialSort, [initialFilter]);
        //}
    }
    return this;
    /* Do we need this? */
    // return this.bindAggregation("inBox", sPath, undefined, undefined, aFilters);
};

sap.uiext.inbox.Inbox.prototype.localSearch = function(oEvent, inBox) {
	
   if (inBox.searchCallBack !== "" && inBox.searchCallBack !== undefined) {
        inBox.searchCallBack();
        return;
    }
    var oModel = inBox.getCoreModel();
    var srchText = jQuery.trim(oEvent.getParameter("query").toLowerCase());
    var srchRes = 0;
    var valueExists = 0;
    var oBindingInfo, currentViewElement;

    var currentViewElement = inBox._currentViewElement();

    // this variable maintains the latest odata state in the model
    if (inBox.modelRefreshed) {
        oModel._original_data = oModel.oData;
        inBox.modelRefreshed = false;
    }
    // this varaible maintains the latest state of the table bindings wrt selected filters
    if (!currentViewElement._originalKeys) {
    	currentViewElement._originalKeys = currentViewElement.getBinding('rows').aKeys;
    }
    
    var result = {};
    var keys = [];
    
    var oSearchIn = oModel._original_data;
    
    // check over the model's odata
    for ( var j in oModel._original_data) {
        var val = oModel._original_data[j];
        var valuePresent = false;
        var fieldValue;
        // check over the table's row bindings
        for ( var l in currentViewElement._originalKeys) {
            if (j == currentViewElement._originalKeys[l]) {
                if(inBox.currentView === inBox.constants.rowRepeaterView){
                    var description = val.Description;
                    if(description  && description.length > 0){
                        valuePresent = description.toLowerCase().indexOf(srchText) >= 0 ? true : false;
                    }
                }
                // Check for each field value of the row
                for ( var k = 0; k < sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties.length; k++) {
                    var fieldValue = eval('val.' + sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[k]);
                    if (fieldValue != null || fieldValue != undefined) {
                        if (jQuery.type(fieldValue) === "date") {
                            fieldValue = (inBox.dateFormat(fieldValue));// .toLowerCase();
                        }
                        if (sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[k] === "Priority"
                                || sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties[k] === "Status") {
                            fieldValue = fieldValue.replace("_", " ");
                            //special case handling for translated tooltips
                            if(fieldValue == "VERY HIGH")
                                fieldValue = inBox._oBundle.getText("INBOX_FILTER_PRIORITY_VERY_HIGH");
                            if(fieldValue == "HIGH")
                                fieldValue = inBox._oBundle.getText("INBOX_FILTER_PRIORITY_HIGH");
                            if(fieldValue == "MEDIUM")
                                fieldValue = inBox._oBundle.getText("INBOX_FILTER_PRIORITY_MEDIUM");
                            if(fieldValue == "LOW")
                                fieldValue = inBox._oBundle.getText("INBOX_FILTER_PRIORITY_LOW");
                            if(fieldValue == "READY")
                                fieldValue = inBox._oBundle.getText("INBOX_FILTER_STATUS_READY");
                            if(fieldValue == "RESERVED")
                                fieldValue = inBox._oBundle.getText("INBOX_FILTER_STATUS_RESERVED");
                            if(fieldValue == "IN PROGRESS")
                                fieldValue = inBox._oBundle.getText("INBOX_FILTER_STATUS_IN_PROGRESS");

                        }
                        fieldValue = fieldValue.toLowerCase();
                        if (fieldValue.indexOf(srchText) >= 0)
                            valuePresent = true;
                    }
                }
                if(!valuePresent){
                    if(val.CustomAttributesCollection){
                        var aCustomAttributeKeys = val.CustomAttributesCollection.__list;
                        if(aCustomAttributeKeys !== undefined){
                            for(var i = 0; i < aCustomAttributeKeys.length; i++ ){
                                var customAttributeKey = aCustomAttributeKeys[i];
                                var fieldValue = oSearchIn[customAttributeKey].Value;
                                //TODO: in two places... refactor
                                if (fieldValue != null || fieldValue != undefined) {
                                    fieldValue = fieldValue.toLowerCase();
                                    if (fieldValue.indexOf(srchText) >= 0)
                                        valuePresent = true;
                                }
                            }
                        }
                    }
                }
                // If the value is present, maintain the row's id
                if (valuePresent) {
                    var key = String(keys.length);
                    result[key] = val; // create a condensed result without gaps
                    keys.push(key); // collect keys
                }
            }
        }
    }
    oModel.oData = result;
    // update the bookkeeping in each affected binding, here only for the Table.rows

    oBindingInfo = currentViewElement.mBindingInfos["rows"];
    
    if (oBindingInfo && oBindingInfo.binding) {
        oBindingInfo.binding.iLength = keys.length; // update the length information
        oBindingInfo.binding.aKeys = keys; // update the key information for the filtered result
        // oBindingInfo.binding.checkUpdate();
        inBox.currentView === inBox.constants.tableView ? currentViewElement.rerender():currentViewElement.updateRows(false);
    }
    var iResultLength = currentViewElement.getBinding('rows').iLength;
    inBox._updatePaginator(iResultLength);
    if (iResultLength <= 0)
    //TODO: use enums for messageType.
        inBox.showMessage("info", inBox._oBundle.getText("INBOX_MSG_FOR_NO_DATA"));
    else
        inBox.deleteMessage();
    inBox.fireODataRequestCompleted({bindingLength:iResultLength,appliedFilter:inBox._oBundle.getText("INBOX_SEARCH_RESULTS_TEXT")});
};

sap.uiext.inbox.Inbox.prototype.applyFilterOnResponse = function(selectedContextsbeforeReq, rebind) {
 // TODO utility method - duplicate code..
    // var oModel = sap.ui.getCore().getModel();
    var oModel = this.getCoreModel();
    var that = this;
    this.showBusyLoader();
    var oListBinding;
    var currentViewElement;
    if(that.currentView === that.constants.tableView){
    	currentViewElement = sap.ui.getCore().byId(this.getId() + '--' + 'listViewTable');
    	if (currentViewElement !== undefined) {
            if (selectedContextsbeforeReq != undefined && selectedContextsbeforeReq != null) {
                that.selectedContexts = selectedContextsbeforeReq;
            } else {
                that.selectedContexts = [];
            }
            oListBinding = currentViewElement.getBinding('rows');
    	}
    }else if(this.currentView === that.constants.rowRepeaterView){
    	currentViewElement = sap.ui.getCore().byId(this.getId() + '--'+'tasksRowRepeater');
    	if (currentViewElement !== undefined) {
            oListBinding = currentViewElement.getBinding('rows');
    	}
    }
    
    var oFilter = [];
    if (oListBinding != null && oListBinding != undefined) {
    	// HACK:this is the hack applied by modifiying the internal variables of SAPUI5 - to remove the predefined filter
    	oListBinding.aPredefinedFilters = [];
    	for ( var item in that.filtersToApply) {
    		var filter = that.filtersToApply[item];
    		if(jQuery.isArray(filter)){
    			oFilter = oFilter.concat(filter)
    		}else
    			oFilter.push(filter);
    	}
    	if(this.currentView === that.constants.rowRepeaterView && rebind){
    		var oTemplate = that._getComponent("rrMainMatrixLayout");
    		var expand = that._getExpandParameters();
     	    if(expand.length > 0 ){
     	    	currentViewElement.bindRows({path: that.sCollectionPath,template: oTemplate, parameters: {expand: expand},sorter:new sap.ui.model.Sorter("CreatedOn", true),filters:oFilter});
     	    }else{
     	    	currentViewElement.bindRows({path: that.sCollectionPath,template: oTemplate,sorter:new sap.ui.model.Sorter("CreatedOn", true),filters:oFilter});
     	    }
    	}else{
    		oListBinding.filter(oFilter);
    	}
    }
    
    // variables maintained for search
    that.modelRefreshed = true;
    if(oListBinding){
    	currentViewElement._originalKeys = oListBinding.aKeys;
    }
    this.hideBusyLoader();
};

sap.uiext.inbox.Inbox.prototype.refreshTaskList = function(oEvent, inBox) {
    // FIXME:this causes a [problem to reset the gif in case of json/xml
    if (!inBox.getHandleBindings()) {
        inBox.fireRefresh(oEvent);
    } else {
        var refreshButton = sap.ui.getCore().byId(inBox.getId() + '--' + 'refreshButton');
        refreshButton.setSrc(inBox._imgResourcePath + sap.uiext.inbox.InboxConstants.refreshImageGif);
    }
    var oModel = inBox.getCoreModel();
    var oTable = sap.ui.getCore().byId(inBox.getId() + '--' + 'listViewTable');
    var oRowRepeater = sap.ui.getCore().byId(inBox.getId() + '--' + 'tasksRowRepeater');

    var oListBinding;
    var rowContext;
    var selectedIndices = inBox.getlistTableSelectedIndices();
    var selectedTasks = [];

    jQuery.each(selectedIndices, function(i, selIndex) {
        rowContext = oTable.getContextByIndex(selIndex);
        selectedTasks.push(rowContext);
    });
    
    var currentViewElement;
    if(inBox.currentView === sap.uiext.inbox.InboxConstants.tableView){
    	currentViewElement = oTable;
    }else if(inBox.currentView === sap.uiext.inbox.InboxConstants.rowRepeaterView){
    	currentViewElement = oRowRepeater;
    }

    if (currentViewElement != undefined) {
        if (selectedTasks != undefined && selectedTasks != null) {
            inBox.selectedContexts = selectedTasks;
        } else {
            inBox.selectedContexts = [];
        }

        
        oListBinding = currentViewElement.getBinding('rows');

        var oFilter = [];

        if (oListBinding != null && oListBinding != undefined) {
            // this is the hack applied by modifiying the internal variables of SAPUI5 - to remove the predefined filter
            oListBinding.aPredefinedFilters = [];
            for ( var item in inBox.filtersToApply) {
                var filter = inBox.filtersToApply[item];
                if(jQuery.isArray(filter)){
                    oFilter = oFilter.concat(filter)
                }else
                    oFilter.push(filter);
            }
            oListBinding.filter(oFilter);
        }
    }
    // variables maintained for search
    inBox.modelRefreshed = true;
    currentViewElement._originalKeys = currentViewElement.getBinding('rows').aKeys;
    inBox.resetSearchCriteria();
    
    var dropdownComboBox3 = sap.ui.getCore().byId(inBox.getId() + '--' + 'filterComboBox3');
    if(dropdownComboBox3 != undefined && dropdownComboBox3.getEnabled() === true) {
    inBox.bindSubstitutedUsers("/UserInfoCollection");
    }
    var refreshedOnText = sap.ui.getCore().byId(inBox.getId() + '--' + "refreshOnText");
    if(refreshedOnText){
    	 inBox.lastRefreshedOnDateTime = new Date();
    	 var refreshedTime = inBox._getFormattedRefreshOnDateTime();
    	 refreshedOnText.setText(inBox._oBundle.getText("INBOX_TEXT_ON") + sap.uiext.inbox.InboxConstants.SPACE + refreshedTime);
    	 refreshedOnText.setTooltip(inBox._getFormattedTooltipForLastRefreshedTime());
    }
};

sap.uiext.inbox.Inbox.prototype.applyDropDownFilter1 = function(oEvent, inBox) {
    var listItemID = oEvent.getSource().getSelectedItemId();
    
    if (listItemID === inBox.getId() + '--' + "li_substitutedTasks") {
        sap.ui.getCore().byId(inBox.getId() + '--' + 'filterComboBox3').setEnabled(false);
        inBox.filtersToApply.dropDownFilter1 = new sap.ui.model.Filter("IsSubstituted", sap.ui.model.FilterOperator.EQ, true);
        inBox.bindSubstitutedUsers("/UserInfoCollection");
        sap.ui.getCore().byId(inBox.getId() + '--' + 'onBehalfOfListItem').setEnabled(false);
        
    }else{
        //sap.ui.getCore().byId(inBox.getId() + '--' + 'filterComboBox3').setValue(inBox._oBundle.getText("INBOX_DROP_DOWN_VALUE_ALL_USERS"));
        sap.ui.getCore().byId(inBox.getId() + '--' + 'onBehalfOfListItem').setEnabled(true);
        sap.ui.getCore().byId(inBox.getId() + '--' + 'filterComboBox3').setSelectedItemId(inBox.getId() + '--' + 'onBehalfOfListItem');
        sap.ui.getCore().byId(inBox.getId() + '--' + 'filterComboBox3').setEnabled(false);
        delete inBox.filtersToApply.dropDownFilter3;
        
        if (listItemID === inBox.getId() + '--' + "li_allTasks") {
            delete inBox.filtersToApply.dropDownFilter1;
        }else if (listItemID === inBox.getId() + '--' + "li_myTasks") {
            inBox.filtersToApply.dropDownFilter1 = new sap.ui.model.Filter("IsSubstituted", sap.ui.model.FilterOperator.EQ, false);         
        }
    }
    inBox.applyFilterOnResponse(null);
};

sap.uiext.inbox.Inbox.prototype.applyDropDownFilter3 = function(oEvent, inBox) {
    var listItemID = oEvent.getSource().getSelectedItemId();
    
    if (listItemID === inBox.getId() + '--' + "li_allUsers") {
        delete inBox.filtersToApply.dropDownFilter3;
    }else{
        inBox.filtersToApply.dropDownFilter3 = new sap.ui.model.Filter("SubstitutedUser", sap.ui.model.FilterOperator.EQ, sap.ui.getCore().byId(inBox.getId() + '--' + 'filterComboBox3').getSelectedKey());
    }
    inBox.applyFilterOnResponse(null);
};

sap.uiext.inbox.Inbox.prototype.applyDropDownFilter = function(oEvent, inBox) {
    var isCompTasksSelectedinDD = false;
    var listItemID = oEvent.getSource().getSelectedItemId();
    var statusAttr = sap.ui.getCore().byId(inBox.getId() + '--' + "INBOX_FILTER_STATUS");
    var oFilterDateTime = sap.ui.getCore().byId(inBox.getId() + '--' + "INBOX_FILTER_CREATION_DATE");
    var oFilterDueDateTime = sap.ui.getCore().byId(inBox.getId() + '--' + "INBOX_FILTER_DUE_DATETIME");
    var oFacet = sap.ui.getCore().byId(inBox.getId()+'--'+"filterFacet");

    // clear search text for every new filter select
    inBox.resetSearchCriteria();

    if (listItemID === inBox.getId() + '--' + "li_completedTasks") {
    	isCompTasksSelectedinDD = true;
        inBox._deleteCustomActions();
        if (statusAttr !== undefined) {
            statusAttr.setSelectedKeys(["sapUiFacetFilter_ALL"]);
            // statusAttr.setSelected(false);
            oFacet.removeList(statusAttr);
            
        }
    
        if (oFilterDateTime !== undefined) {
            oFilterDateTime.setSelectedKeys(["sapUiFacetFilter_ALL"]);
            oFacet.removeList(oFilterDateTime);
    }
        if (oFilterDueDateTime !== undefined) {
            oFilterDueDateTime.setSelectedKeys(["sapUiFacetFilter_ALL"]);
        oFacet.removeList(oFilterDueDateTime);
    }

        
        delete inBox.filtersToApply.resStat;
        delete inBox.filtersToApply.readyStat;
        delete inBox.filtersToApply.InProStat;
        delete inBox.filtersToApply.neCompleted;
        
        delete inBox.filtersToApply.today;
        delete inBox.filtersToApply.last30;
        delete inBox.filtersToApply.last15;
        delete inBox.filtersToApply.last7;
        
        inBox.clearFiltersForDueDate();
        
        //if(inBox.sProviderHost !== "ODATA4J")// has to be oData4j
            inBox.filtersToApply.dropDownFilter = [new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.EQ, "COMPLETED"),new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.EQ, "COMMITTED")];
        //else
        //  inBox.filtersToApply.dropDownFilter = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.EQ, "COMPLETED");
    }
    if (listItemID === inBox.getId() + '--' + "li_openTasks") {
        if (statusAttr != undefined) {
            // statusAttr.setSelected(true);
            oFacet.addList(statusAttr);
        }
        if (oFilterDateTime != undefined && oFacet.indexOfList(oFilterDateTime) === -1) {
            oFacet.addList(oFilterDateTime);
        }
        if (oFilterDueDateTime !== undefined && oFacet.indexOfList(oFilterDueDateTime) === -1) {
        oFacet.addList(oFilterDueDateTime);
    }

        // this.filtersToApply['dropDownFilter'] would be anyways update with 'ne' completed filter
        delete inBox.filtersToApply.neCompleted;
        if ((inBox.filtersToApply.resStat === undefined) && (inBox.filtersToApply.readyStat === undefined)
                && (inBox.filtersToApply.InProStat === undefined)) {
            inBox.filtersToApply.dropDownFilter = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.NE,
                    "COMPLETED");
        } else {
            delete inBox.filtersToApply.dropDownFilter;
        }
        // this.filtersToApply['dropDownFilter'] = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.NE,
        // "COMPLETED");
    }
    if (listItemID === inBox.getId() + '--' + "li_overdueTasks") {
        if (statusAttr != undefined) {
            // statusAttr.setSelected(true);
            oFacet.addList(statusAttr);
        }
        
        if (oFilterDateTime != undefined && oFacet.indexOfList(oFilterDateTime) !== -1) {
            oFilterDateTime.setSelectedKeys(["sapUiFacetFilter_ALL"]);
            oFacet.removeList(oFilterDateTime);
        }
        if (oFilterDueDateTime !== undefined && oFacet.indexOfList(oFilterDueDateTime) !== -1) {
            oFilterDueDateTime.setSelectedKeys(["sapUiFacetFilter_ALL"]);
        oFacet.removeList(oFilterDueDateTime);
    }
        
        inBox.clearFiltersForDueDate();
        
        delete inBox.filtersToApply.today;
        delete inBox.filtersToApply.last30;
        delete inBox.filtersToApply.last15;
        delete inBox.filtersToApply.last7;
        var formD = inBox.getFormattedDateTimeOff(0, true);
        inBox.filtersToApply.dropDownFilter = new sap.ui.model.Filter("CompletionDeadLine", sap.ui.model.FilterOperator.LT,
                formD.toUTCString());
        if ((inBox.filtersToApply.resStat === undefined) && (inBox.filtersToApply.readyStat === undefined)
                && (inBox.filtersToApply.InProStat === undefined) && (inBox.filtersToApply.neCompleted === undefined) ) {       
            inBox.filtersToApply.neCompleted = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.NE, "COMPLETED");
        }
    }
    if (listItemID === inBox.getId() + '--' + "li_escalatedTasks") {
        if (statusAttr != undefined) {
            // statusAttr.setSelected(true);
            oFacet.addList(statusAttr);
        }
        if (oFilterDateTime != undefined && oFacet.indexOfList(oFilterDateTime) != -1) {
            oFilterDateTime.setSelectedKeys(["sapUiFacetFilter_ALL"]);
            oFacet.removeList(oFilterDateTime);
        }
        
        inBox.clearFiltersForDueDate();
        
        delete inBox.filtersToApply.today;
        delete inBox.filtersToApply.last30;
        delete inBox.filtersToApply.last15;
        delete inBox.filtersToApply.last7;
        inBox.filtersToApply.dropDownFilter = new sap.ui.model.Filter("IsEscalated", sap.ui.model.FilterOperator.EQ, true);
        if ((inBox.filtersToApply.resStat === undefined) && (inBox.filtersToApply.readyStat === undefined)
                && (inBox.filtersToApply.InProStat === undefined) && (inBox.filtersToApply.neCompleted === undefined) ) {       
            inBox.filtersToApply.neCompleted = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.NE, "COMPLETED");
        }
    }

    var taskDefinitionFilter = inBox._isDrillDownFilterSelected('TaskDefinitionID');
    
    if(!isCompTasksSelectedinDD && taskDefinitionFilter){
    	var oTaskTypefilterList = inBox._getComponent("INBOX_FILTER_TASK_TYPE");
	    var aSelectedKeys = oTaskTypefilterList.getSelectedKeys();
		if(aSelectedKeys && aSelectedKeys.length === 1){
			//need to check if with the key we can store an object. This is too much of an overhead.
			var aItems = oTaskTypefilterList.getItems();
			var key = aSelectedKeys[0];
    		var sapOrigin;
			
	    	for (var j = 0; j < aItems.length; j++) {
		    	if (key === aItems[j].getKey()) {
			    	sapOrigin = aItems[j].data("SAP__Origin"); 
				}
			}
    		var aCustomActionsDefinitionArray = inBox._getCustomActionsDefinition(null,aSelectedKeys[0],sapOrigin);
	    	//create Columns
		    if(aCustomActionsDefinitionArray && aCustomActionsDefinitionArray.length>0)
			  inBox._createCustomActions(aCustomActionsDefinitionArray, false);
		}
    	inBox.applyFilterOnResponse(null,true);
	 }else{
		 inBox.applyFilterOnResponse(null);
	 }
};

sap.uiext.inbox.Inbox.prototype.clearFiltersForPriority = function() {
    delete this.filtersToApply.lowPrio;
    delete this.filtersToApply.medPrio;
    delete this.filtersToApply.hiPrio;
    delete this.filtersToApply.veryhiPrio;
};

sap.uiext.inbox.Inbox.prototype.clearFiltersForStatus = function() {
    delete this.filtersToApply.resStat;
    delete this.filtersToApply.readyStat;
    delete this.filtersToApply.InProStat;
    delete this.filtersToApply.neCompleted;
    // delete this.filtersToApply.openTasks;
    if (this.filtersToApply.dropDownFilter != undefined) {
    if ((this.filtersToApply["dropDownFilter"].sPath === "Status")
            && (this.filtersToApply["dropDownFilter"].sOperator === "NE")) {
        delete this.filtersToApply.dropDownFilter;
        }
    }
};

sap.uiext.inbox.Inbox.prototype.clearFiltersForDueDate = function() {
  delete this.filtersToApply.dueDateToday;
  delete this.filtersToApply.dueDatenext30;
  delete this.filtersToApply.dueDatenext15;
  delete this.filtersToApply.dueDatenext7;
};

sap.uiext.inbox.Inbox.prototype.clearFiltersForDateTime = function() {
    delete this.filtersToApply.today;
    delete this.filtersToApply.last30;
    delete this.filtersToApply.last15;
    delete this.filtersToApply.last7;
};


sap.uiext.inbox.Inbox.prototype.clearFiltersForTaskType = function() {
    for ( var item in this.filtersToApply ){ 
        if(this.filtersToApply[item].sPath === 'TaskDefinitionID') {
            delete this.filtersToApply[item];
        }
    }
};



sap.uiext.inbox.Inbox.prototype.applyDrillDownFilterForPriority = function(oEvent, inBox) {
    var filterOperatorPrioLow, filterOperatorPrioMedium, filterOperatorPrioHigh, filterOperatorPrioVeryHigh;
    var attributeChanged = oEvent.getParameter("selectedItems");
    inBox.resetSearchCriteria();
    inBox.clearFiltersForPriority();
    for(var i=0; i<attributeChanged.length; i++) {
    switch(attributeChanged[i].getId()){
    case inBox.getId()+'--'+"INBOX_FILTER_PRIORITY_LOW":
        if (this.filterOperatorPrioLow === undefined )
            filterOperatorPrioLow = inBox.inboxUtils._getPriorityFilters("LOW",inBox.sProviderHost);
        inBox.filtersToApply['lowPrio']=filterOperatorPrioLow;
        break;
    case inBox.getId()+'--'+"INBOX_FILTER_PRIORITY_MEDIUM":
        if (filterOperatorPrioMedium === undefined)
            filterOperatorPrioMedium = inBox.inboxUtils._getPriorityFilters("MEDIUM",inBox.sProviderHost);
        inBox.filtersToApply['medPrio']=filterOperatorPrioMedium;
        break;
    case inBox.getId()+'--'+"INBOX_FILTER_PRIORITY_HIGH":
        if (filterOperatorPrioHigh === undefined)
            filterOperatorPrioHigh = inBox.inboxUtils._getPriorityFilters("HIGH",inBox.sProviderHost);
        inBox.filtersToApply['hiPrio']=filterOperatorPrioHigh;
        break;
    case inBox.getId()+'--'+"INBOX_FILTER_PRIORITY_VERY_HIGH":
        if (filterOperatorPrioVeryHigh === undefined)
            filterOperatorPrioVeryHigh = inBox.inboxUtils._getPriorityFilters("VERY_HIGH",inBox.sProviderHost);
        inBox.filtersToApply['veryhiPrio']=filterOperatorPrioVeryHigh;
        break;    
    };
    }
    inBox.applyFilterOnResponse(null);
};

sap.uiext.inbox.Inbox.prototype.applyDrillDownFilterForStatus = function(oEvent, inBox) {
    var filterOperatorStatusRES, filterOperatorStatusREADY, filterOperatorStatusINPRO, filterOperatorStatusOPENTASKS;
    inBox.resetSearchCriteria();
    inBox.clearFiltersForStatus();
    
    if(oEvent.getParameter("all")){
        filterOperatorStatusOPENTASKS = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.NE, "COMPLETED");
        //inBox.filtersToApply['dropDownFilter'] = filterOperatorStatusOPENTASKS;
        inBox.filtersToApply['neCompleted'] = filterOperatorStatusOPENTASKS;
    }else{
            var attributeChanged = oEvent.getParameter("selectedItems");
            for(var i=0; i<attributeChanged.length; i++) {
            switch(attributeChanged[i].getId()){
        
            case inBox.getId()+'--'+"INBOX_FILTER_STATUS_RESERVED":
                if (filterOperatorStatusRES === undefined)
                    filterOperatorStatusRES = inBox.inboxUtils._getStatusFilters("RESERVED",inBox.sProviderHost);
                inBox.filtersToApply['resStat']=filterOperatorStatusRES;
                break;
            case inBox.getId()+'--'+"INBOX_FILTER_STATUS_READY":
                if (filterOperatorStatusREADY === undefined)
                    filterOperatorStatusREADY = inBox.inboxUtils._getStatusFilters("READY",inBox.sProviderHost);
                inBox.filtersToApply['readyStat']=filterOperatorStatusREADY;
                break;
            case inBox.getId()+'--'+"INBOX_FILTER_STATUS_IN_PROGRESS":
                if (filterOperatorStatusINPRO === undefined)
                    filterOperatorStatusINPRO = inBox.inboxUtils._getStatusFilters("IN_PROGRESS",inBox.sProviderHost);
                inBox.filtersToApply['InProStat']=filterOperatorStatusINPRO;
                break;
            };
            }
    }
    inBox.applyFilterOnResponse(null);
};

sap.uiext.inbox.Inbox.prototype.applyDrillDownFilterForDateTime = function(oEvent, inBox) {
    var filterOperatorDateToday, filterOperatorDate30, filterOperatorDate15, filterOperatorDate7;
    var todayAttr = sap.ui.getCore().byId(inBox.getId()+'--'+"INBOX_FILTER_DATETIME_TODAY");
    var last30Attr = sap.ui.getCore().byId(inBox.getId()+'--'+"INBOX_FILTER_DATETIME_MONTH"); 
    var last15Attr = sap.ui.getCore().byId(inBox.getId()+'--'+"INBOX_FILTER_DATETIME_15DAYS"); 
    var last7Attr = sap.ui.getCore().byId(inBox.getId()+'--'+"INBOX_FILTER_DATETIME_WEEK"); 
    var attributeChanged = oEvent.getParameter("selectedItems");
    inBox.resetSearchCriteria();
    inBox.clearFiltersForDateTime();
    var dropdownbox =  sap.ui.getCore().byId(inBox.getId()+'--'+'filterComboBox2');
    var isCompTasksSelected = false;
    if(dropdownbox.getSelectedItemId() === inBox.getId()+'--'+'li_completedTasks'){
        isCompTasksSelected = true;
    }
    for(var i=0; i<attributeChanged.length; i++) {
        switch(attributeChanged[i].getId()){
        case inBox.getId()+'--'+"INBOX_FILTER_DATETIME_TODAY":
            var formD = inBox.getFormattedDateTimeOff(0, false);
            // TODO: Can remove this check, one because we checking against null which is not valid in JavaScript,
            // two the variables are always undefined as they are created inside this function,
            // and the function is called for every selection.
            if (filterOperatorDateToday === undefined){
                    filterOperatorDateToday = new sap.ui.model.Filter("CreatedOn", sap.ui.model.FilterOperator.GE, formD.toUTCString());
            }
            inBox.filtersToApply['today']=filterOperatorDateToday;

            // Clear the filter from the stack.
            delete inBox.filtersToApply.last30;
            delete inBox.filtersToApply.last15;
            delete inBox.filtersToApply.last7;
            break;
        case inBox.getId()+'--'+"INBOX_FILTER_DATETIME_MONTH":
            var formD = inBox.getFormattedDateTimeOff(30, false);
            if (filterOperatorDate30 === undefined){
                    filterOperatorDate30 = new sap.ui.model.Filter("CreatedOn", sap.ui.model.FilterOperator.GE, formD.toUTCString());
            }
            inBox.filtersToApply['last30']=filterOperatorDate30;
            // Clear the filter from the stack.
            delete inBox.filtersToApply.today;
            delete inBox.filtersToApply.last15;
            delete inBox.filtersToApply.last7;
            break;
        case inBox.getId()+'--'+"INBOX_FILTER_DATETIME_15DAYS":
            var formD = inBox.getFormattedDateTimeOff(15, false);
            if (filterOperatorDate15 === undefined){
                    filterOperatorDate15 = new sap.ui.model.Filter("CreatedOn", sap.ui.model.FilterOperator.GE, formD.toUTCString());
            }
            inBox.filtersToApply['last15']=filterOperatorDate15;

            delete inBox.filtersToApply.today;
            delete inBox.filtersToApply.last30;
            delete inBox.filtersToApply.last7;
            break;
        case inBox.getId()+'--'+"INBOX_FILTER_DATETIME_WEEK":
            var formD = inBox.getFormattedDateTimeOff(7, false);
            if (filterOperatorDate7 === undefined){
                    filterOperatorDate7 = new sap.ui.model.Filter("CreatedOn", sap.ui.model.FilterOperator.GE, formD.toUTCString());
            }
            inBox.filtersToApply['last7']=filterOperatorDate7;
            delete inBox.filtersToApply.today;
            delete inBox.filtersToApply.last30;
            delete inBox.filtersToApply.last15;
            break;
        };

    }
    inBox.applyFilterOnResponse(null);
};


sap.uiext.inbox.Inbox.prototype.applyDrillDownFilterForTaskType = function(oEvent, inBox) {
	var constants = inBox.constants;
// var filterOperatorStatusRES, filterOperatorStatusREADY, filterOperatorStatusINPRO;
    inBox.resetSearchCriteria();
    inBox.clearFiltersForTaskType();
    var isOdataModelBound = (inBox.typeOfModel === "OData");
    if(!oEvent.getParameter("all")) {
        var attributeChanged = oEvent.getParameter("selectedItems");
        inBox.bRefreshTaskTypes = false;
        //TODO use reflectionish stuff and make it generic for adding new stuff.
        if(inBox.isCustomAttributesEnabled === true && isOdataModelBound){
            if(attributeChanged.length===1){
                //getCustomAttribute Metadata
            	//TODO : only if the view is Grid View
            	inBox._modifyListBindingForExpand(true,constants.customAttributeNavigationParam);
                var customAttributeDefinitionArray = inBox._getCustomAttributeMetaData(attributeChanged[0].getKey(),attributeChanged[0].data("SAP__Origin"));
                inBox._deleteCustomAttributeColumns(customAttributeDefinitionArray);
                //create Columns
                if(customAttributeDefinitionArray && customAttributeDefinitionArray.length>0)
                    inBox._createCustomAttributeColumns(customAttributeDefinitionArray);
            }else{
            	inBox._modifyListBindingForExpand(false,constants.customAttributeNavigationParam);
                //change to delete all columns other than the fixed..... 
                inBox._deleteCustomAttributeColumns(null);
            }
        }
        
        if(inBox.isCustomActionsEnabled === true && isOdataModelBound){
            if(attributeChanged.length===1){
            	inBox._deleteCustomActions();
            	var isCompletedTasksSelectedinDD =  inBox._isCompletedTasksSelected();
                //getCustomAttribute Metadata
            	//TODO : only if the view is Grid View
            	if(!isCompletedTasksSelectedinDD){
            		var aCustomActionsDefinitionArray = inBox._getCustomActionsDefinition(attributeChanged[0].data("InstanceID"),attributeChanged[0].getKey(),attributeChanged[0].data("SAP__Origin"));
            		//create Columns
            		if(aCustomActionsDefinitionArray && aCustomActionsDefinitionArray.length>0)
            			inBox._createCustomActions(aCustomActionsDefinitionArray, false);
            	}
            }else{
                //change to delete all columns other than the fixed..... 
                inBox._deleteCustomActions(null);
            }
        }

        for(var i=0; i<attributeChanged.length; i++) {
            inBox.filtersToApply[attributeChanged[i].getKey()]=new sap.ui.model.Filter("TaskDefinitionID", sap.ui.model.FilterOperator.EQ, decodeURIComponent(attributeChanged[i].getKey()));
        };
    }else{
        if(inBox.isCustomActionsEnabled === true && isOdataModelBound ){
            inBox._deleteCustomActions(null);
        }
        if(inBox.isCustomAttributesEnabled === true && isOdataModelBound){
            // change to delete all columns other than the fixed..... 
            inBox._deleteCustomAttributeColumns(null);
            inBox._modifyListBindingForExpand(false,constants.customAttributeNavigationParam);
         }
    }
    var rebind = (inBox.currentView === inBox.constants.rowRepeaterView)?true:false
    inBox.applyFilterOnResponse(null, rebind);
};



sap.uiext.inbox.Inbox.prototype._getCustomAttributeMetaData = function(taskDefinitionID,sapOriginID){
    var oModel = this.getCoreModel();
    var inBox = this;
    var IDURIPart = "/TaskDefinitionCollection(TaskDefinitionID='" + taskDefinitionID + "',SAP__Origin='" + sapOriginID + "')/CustomAttributeDefinitionData";
    //var IDURIPart = "/TaskDefinitionCollection('123')/CustomAttributeDefinitionCollection";
    
    var requestURI = inBox.bpmSvcUrl + IDURIPart;
    var customAttributeArray = [];
    
    var requestOptions = {
        async:false,
        requestUri : requestURI,
        method : "GET",
        headers : {
            Accept : "application/json",
            "x-csrf-token" : oModel.oHeaders["x-csrf-token"]
        }
    };
    
    OData.request(requestOptions, function(data, request) {
        
        // TO-DO : make this generic
        var customAttributeDefinitionArray = data.results;
        for(var i=0;i<customAttributeDefinitionArray.length;i++){
            var customAttribute = {};
            //columnMeta.bindingValue = productMetaArray[i].Description;
            customAttribute.Name = customAttributeDefinitionArray[i].Name;
            customAttribute.Type =  customAttributeDefinitionArray[i].Type;
            customAttribute.Label = customAttributeDefinitionArray[i].Label;
            customAttributeArray.push(customAttribute);
        }
        //alert(dynamicEntitiesArray[0].bindingValue)
        //url = data.GUI_Link;
    }, function(error) {
        inBox.showMessage("error", inBox._oBundle.getText("INBOX_MSG_ACTION_FAILED"));
    });
    return customAttributeArray;
};


sap.uiext.inbox.Inbox.prototype._createCustomAttributeColumns= function(customAttributeDefinitionArray){
	var that = this;
	var oTable = this._getComponent('listViewTable');
	var oModel = this.getCoreModel();
	var columnIndex = 0;
	var NAME = "name";
	//check if columns present and if not add
	for (var i = 0; i < customAttributeDefinitionArray.length; i++) {
		var oColumn = this._getComponent(that.inboxUtils.scrub(customAttributeDefinitionArray[i].Name));
		var columnTextAlignment = sap.ui.core.TextAlign.Left;
		var customAttrDefArrayType = customAttributeDefinitionArray[i].Type;
		if(customAttrDefArrayType)
			if (jQuery.inArray(customAttrDefArrayType.replace("class ", ""),sap.uiext.inbox.InboxConstants.rightAlignedTypes) != -1)
				columnTextAlignment = sap.ui.core.TextAlign.Right;
		if(!oColumn){
			oTable.insertColumn(
		            new sap.ui.table.Column({id:that.getId() + '--' +that.inboxUtils.scrub(customAttributeDefinitionArray[i].Name)})
		            .data("customAttrName", customAttributeDefinitionArray[i].Name)
		            .setLabel(new sap.ui.commons.Label({text: customAttributeDefinitionArray[i].Label, design : sap.ui.commons.LabelDesign.Bold}))
		            .setTemplate(
		            	new sap.ui.commons.TextView({id:that.getId() + '--' +that.inboxUtils.scrub(customAttributeDefinitionArray[i].Name) + 'textView'}).data(NAME,customAttributeDefinitionArray[i].Name).bindProperty("text", "CustomAttributeData", function(value){
			            	var path = that.sCollectionPath.replace(/^\//,"")+"('"+this.data(NAME)+"')";
			            	var returnValue = "";
			                if(value !== undefined && value !== "" && value !== null){
			                	for(var i=0;i<value.length;i++){
			                		//refine this
			                		var oCustomAttribute = oModel.oData[value[i]] === undefined ? oModel._original_data[value[i]] : oModel.oData[value[i]];
			                		//TODO due to search oModel.oData values are getting replaced. So adding a workaround here. Needs to be properly investigated.
			                		if(oCustomAttribute.Name === this.data(NAME)){
			                			returnValue = oCustomAttribute.Value;
			                			break;
				                    }
			                	}
			                }
			                return returnValue;
		            }).setTextAlign(columnTextAlignment))
		            .setFlexible(true)
		            .bindProperty("sortProperty","CustomAttributeData",function(value){
		            	return "CustomAttributeData/"+this.data("customAttrName");
		            }),i+1
		    );
    	}else{
    		if(oTable.indexOfColumn(oColumn) === -1){
    			var oLabel = oColumn.getLabel();
    			if(oLabel.getText() !== customAttributeDefinitionArray[i].Label){
    				oLabel.setText(customAttributeDefinitionArray[i].Label);
    			}
    			oTable.insertColumn(oColumn,i+1);
    		}
    	}
    }
	this.resizeColumns();
};


sap.uiext.inbox.Inbox.prototype._createCustomAttributeLayout= function(customAttributeDefinitionArray){
	var that = this;
	var oTable = this._getComponent('listViewTable');
	var oModel = this.getCoreModel();
	var columnIndex = 0;
	//check if columns present and if not add
	for (var i = 0; i < customAttributeDefinitionArray.length; i++) {
		var oColumn = this._getComponent(that.inboxUtils.scrub(customAttributeDefinitionArray[i].Name));
		if(!oColumn){
			oTable.insertColumn(
		            new sap.ui.table.Column({id:that.getId() + '--' +that.inboxUtils.scrub(customAttributeDefinitionArray[i].Name)})
		            .data("customAttrName", customAttributeDefinitionArray[i].Name)
		            .setLabel(new sap.ui.commons.Label({text: customAttributeDefinitionArray[i].Label, design : sap.ui.commons.LabelDesign.Bold}))
		            .setTemplate(
		            	new sap.ui.commons.TextField({name:customAttributeDefinitionArray[i].Name, editable:false}).bindProperty("value", "CustomAttributeData", function(value){
			            	var path = that.sCollectionPath.replace(/^\//,"")+"('"+this.getName()+"')";
			            	var returnValue = "";
			                if(value !== undefined && value !== "" && value !== null){
			                	for(var i=0;i<value.length;i++){
			                		//refine this
			                		var oCustomAttribute = oModel.oData[value[i]] === undefined ? oModel._original_data[value[i]] : oModel.oData[value[i]];
			                		//TODO due to search oModel.oData values are getting replaced. So adding a workaround here. Needs to be properly investigated.
			                		if(oCustomAttribute.Name === this.getName()){
				                        returnValue = oCustomAttribute.Value;
				                    }
			                	}
			                }
			                return returnValue;
		            }))
		            .setFlexible(true)
		            .bindProperty("sortProperty","CustomAttributeData",function(value){
		            	return "CustomAttributeData/"+this.data("customAttrName");
		            }),i+1
		    );
    	}else{
    		if(oTable.indexOfColumn(oColumn) === -1){
    			var oLabel = oColumn.getLabel();
    			if(oLabel.getText() !== customAttributeDefinitionArray[i].Label){
    				oLabel.setText(customAttributeDefinitionArray[i].Label);
    			}
    			oTable.insertColumn(oColumn,i+1);
    		}
    	}
    }
};


sap.uiext.inbox.Inbox.prototype._deleteCustomAttributeColumns = function(customAttributeDefinitionArray){
    //TODO refine this to delete only the ones not in customAttributeDefinitionArray
    var oTable = this._getComponent('listViewTable');
    
    var aTableColumns = oTable.getColumns();
    for (var i=0; i<aTableColumns.length; i++){
        var oColumn = aTableColumns[i];
        if(jQuery.inArray(this._removeParentID(oColumn.getId()),sap.uiext.inbox.InboxConstants.mEntities.taskMetadata.properties)===-1){
            oTable.removeColumn(oColumn);
        }
    }
};

sap.uiext.inbox.Inbox.prototype.applyDrillDownFilterForDueDate = function(oEvent, inBox) {
       var filterOperatorDueDateToday, filterOperatorDueDate30, filterOperatorDueDate15, filterOperatorDueDate7,filterOperatorDueDateLowerRange;
       var todayAttr = sap.ui.getCore().byId(inBox.getId()+'--'+"INBOX_FILTER_DUE_DATETIME_TODAY");
       var next30Attr = sap.ui.getCore().byId(inBox.getId()+'--'+"INBOX_FILTER_DUE_DATETIME_MONTH"); 
       var next15Attr = sap.ui.getCore().byId(inBox.getId()+'--'+"INBOX_FILTER_DUE_DATETIME_15DAYS"); 
       var next7Attr = sap.ui.getCore().byId(inBox.getId()+'--'+"INBOX_FILTER_DUE_DATETIME_WEEK"); 
       inBox.resetSearchCriteria();
       inBox.clearFiltersForDueDate();

       if(!oEvent.getParameter("all")) {
         var attributeChanged = oEvent.getParameter("selectedItems");
         var fromDate = inBox.getFormattedDateTimeOff(0);
         //filterOperatorDueDateLowerRange = new sap.ui.model.Filter("CompletionDeadLine", sap.ui.model.FilterOperator.GE, fromDate.toUTCString());
         //inBox.filtersToApply['dueDateLowerRange']=filterOperatorDueDateLowerRange;
         
           for(var i=0; i<attributeChanged.length; i++) {
                  switch(attributeChanged[i].getId()){
                  case inBox.getId()+'--'+"INBOX_FILTER_DUE_DATETIME_TODAY":
                         var formD = inBox.getFormattedDueDateTimeOff(1);
                         if (filterOperatorDueDateToday === undefined){
                             filterOperatorDueDateToday = new sap.ui.model.odata.Filter("CompletionDeadLine", [{operator:sap.ui.model.FilterOperator.LE, value1: formD.toUTCString()},{operator:sap.ui.model.FilterOperator.GE, value1:fromDate.toUTCString()}], true);    
                         }
                         inBox.filtersToApply['dueDateToday']=filterOperatorDueDateToday;
    
                         // Clear the filter from the stack.
                         delete inBox.filtersToApply.next30;
                         delete inBox.filtersToApply.next15;
                         delete inBox.filtersToApply.next7;
                         break;
                  case inBox.getId()+'--'+"INBOX_FILTER_DUE_DATETIME_MONTH":
                         var formD = inBox.getFormattedDueDateTimeOff(30);
                         if (filterOperatorDueDate30 === undefined){
                               filterOperatorDueDate30 = new sap.ui.model.odata.Filter("CompletionDeadLine", [{operator:sap.ui.model.FilterOperator.LE, value1: formD.toUTCString()},{operator:sap.ui.model.FilterOperator.GE, value1:fromDate.toUTCString()}], true);
                         }
                         inBox.filtersToApply['dueDatenext30']=filterOperatorDueDate30;
                         // Clear the filter from the stack.
                         delete inBox.filtersToApply.dueDateToday;
                         delete inBox.filtersToApply.next15;
                         delete inBox.filtersToApply.next7;
                         break;
                  case inBox.getId()+'--'+"INBOX_FILTER_DUE_DATETIME_15DAYS":
                         var formD = inBox.getFormattedDueDateTimeOff(15);
                         if (filterOperatorDueDate15 === undefined){
                               filterOperatorDueDate15 = new sap.ui.model.odata.Filter("CompletionDeadLine", [{operator:sap.ui.model.FilterOperator.LE, value1: formD.toUTCString()},{operator:sap.ui.model.FilterOperator.GE, value1:fromDate.toUTCString()}], true);
                         }
                         inBox.filtersToApply['dueDatenext15']=filterOperatorDueDate15;
    
                         delete inBox.filtersToApply.dueDateToday;
                         delete inBox.filtersToApply.next30;
                         delete inBox.filtersToApply.next7;
                         break;
                  case inBox.getId()+'--'+"INBOX_FILTER_DUE_DATETIME_WEEK":
                         var formD = inBox.getFormattedDueDateTimeOff(7);
                         if (filterOperatorDueDate7 === undefined){
                               filterOperatorDueDate7 = new sap.ui.model.odata.Filter("CompletionDeadLine", [{operator:sap.ui.model.FilterOperator.LE, value1: formD.toUTCString()},{operator:sap.ui.model.FilterOperator.GE, value1:fromDate.toUTCString()}], true);
                         }
                         inBox.filtersToApply['dueDatenext7']=filterOperatorDueDate7;
                         delete inBox.filtersToApply.dueDateToday;
                         delete inBox.filtersToApply.next30;
                         delete inBox.filtersToApply.next15;
                         break;
                  };
    
           }
       }
       inBox.applyFilterOnResponse(null);
};

sap.uiext.inbox.Inbox.prototype.disableAllActionButtons = function() {
    var claimButton = sap.ui.getCore().byId(this.getId() + '--' + 'claimActionButton');
    var releaseButton = sap.ui.getCore().byId(this.getId() + '--' + 'releaseActionButton');
    var completeButton = sap.ui.getCore().byId(this.getId() + '--' + 'openActionButton');
    var forwardButton = sap.ui.getCore().byId(this.getId() + '--' + 'forwardActionButton');

    claimButton.setEnabled(false);
    releaseButton.setEnabled(false);
    completeButton.setEnabled(false);
    forwardButton.setEnabled(false);
};

sap.uiext.inbox.Inbox.prototype.disableActionButtonsOnStatus = function(status, disableAll) {
    var claimButton = sap.ui.getCore().byId(this.getId() + '--' + 'claimActionButton');
    var releaseButton = sap.ui.getCore().byId(this.getId() + '--' + 'releaseActionButton');
    var completeButton = sap.ui.getCore().byId(this.getId() + '--' + 'openActionButton');
    var forwardButton = sap.ui.getCore().byId(this.getId() + '--' + 'forwardActionButton');

    if (disableAll != undefined && disableAll === true) {
        claimButton.setEnabled(false);
        releaseButton.setEnabled(false);
        completeButton.setEnabled(false);
        forwardButton.setEnabled(false);
    } else {
        if (status === "READY") {
            claimButton.setEnabled(true);
            releaseButton.setEnabled(false);
            completeButton.setEnabled(false);
            forwardButton.setEnabled(false);
        } else if (status === "RESERVED" || status === "IN_PROGRESS" || status === "MULTIRESERVED" || status === "SELECTED"
                || status === "STARTED") {
            claimButton.setEnabled(false);
            releaseButton.setEnabled(true);
            completeButton.setEnabled(true);
           	forwardButton.setEnabled(true);
        } else if (this.getOpenCompletedTasks() === true && status === "COMPLETED") {
            claimButton.setEnabled(false);
            releaseButton.setEnabled(false);
            completeButton.setEnabled(true);
            forwardButton.setEnabled(false);
        } else if (status === "COMMITTED" || (this.getOpenCompletedTasks() === false && status === "COMPLETED")) {
            claimButton.setEnabled(false);
            releaseButton.setEnabled(false);
            completeButton.setEnabled(false);
            forwardButton.setEnabled(false);
        } 
    }
};

sap.uiext.inbox.Inbox.prototype._getSelectedContextsBeforeRequest = function() {
    return this.selectedContexts;
};

sap.uiext.inbox.Inbox.prototype.disableActionButtonsOnMultiStatus = function(selectedStatus, selectedActions) {
    var hasStatus = {};
    var containedStatus = [];
    var claimButton = sap.ui.getCore().byId(this.getId() + '--' + 'claimActionButton');
    var releaseButton = sap.ui.getCore().byId(this.getId() + '--' + 'releaseActionButton');
    var forwardButton = sap.ui.getCore().byId(this.getId() + '--' + 'forwardActionButton');
    if(jQuery.inArray(false, selectedActions.supportsClaim) > -1) {
    	claimButton.setVisible(false);
    } else {
    	claimButton.setVisible(true);
    }
    
    if(jQuery.inArray(false, selectedActions.supportsRelease) > -1) {
    	releaseButton.setVisible(false);
    	forwardButton.setVisible(false);
    } else {
    	releaseButton.setVisible(true);
      if(this.isForwardActionEnabled) {
      	forwardButton.setVisible(true);
      }
    }

    if (selectedStatus != null && selectedStatus.length > 0) {
        if (selectedStatus.length > 1) {
            if (jQuery.inArray("READY", selectedStatus) > -1) {
                hasStatus.READY = true;
            };
            if (jQuery.inArray("RESERVED", selectedStatus) > -1 || jQuery.inArray("IN_PROGRESS", selectedStatus) > -1 || jQuery.inArray("SELECTED", selectedStatus) > -1 || jQuery.inArray("STARTED", selectedStatus) > -1) {
                hasStatus.RESERVED = true;
            };
            if (jQuery.inArray("COMPLETED", selectedStatus) > -1 || jQuery.inArray("COMMITTED", selectedStatus) > -1) {
                hasStatus.COMPLETED = true;
            };
            for ( var item in hasStatus) {
                containedStatus.push(item);
            }
            if (containedStatus.length > 1) {
                this.disableActionButtonsOnStatus("", true);
            } else {
                if (containedStatus[0] === "RESERVED") {
                    containedStatus[0] = "MULTIRESERVED";

                }
                this.disableActionButtonsOnStatus(containedStatus[0], false);
            }
        } else {
            var status = selectedStatus[0];
            this.disableActionButtonsOnStatus(status, false);
        }
    } else {
        this.disableActionButtonsOnStatus("", true);
    }
};



sap.uiext.inbox.Inbox.prototype.dateFormat = function(dateValue, bDisplayYear) {
  if (dateValue != undefined && typeof (dateValue) == 'string' && dateValue != "") {
      var date;
      if (dateValue.indexOf('Date') != -1) {
          date = new Date();
          date.setTime(dateValue.substring((dateValue.indexOf("(") + 1), dateValue.indexOf(")")));
      } else {
          date = new Date(dateValue.substring((dateValue.indexOf("'") + 1), dateValue.length - 1));
      }
      dateValue = date;
  }

  if (dateValue != undefined && dateValue != "") {
      var ins = sap.ui.core.format.DateFormat.getDateInstance({
          style : "medium"
      });
      if(bDisplayYear !== undefined && bDisplayYear === false)
  	{
  		ins = sap.ui.core.format.DateFormat.getDateInstance({
  			pattern: "MMM dd",
              style : "medium"
          });
  	}
      return ins.format(dateValue);
  }
      //FOR Time Zone Support, do not forget to add timeoffset property in inbox control.
      /*var utc = Date.UTC(dateValue.getUTCFullYear(),dateValue.getUTCMonth(),dateValue.getUTCDate(),dateValue.getUTCHours(),dateValue.getUTCMinutes(),dateValue.getUTCSeconds(),dateValue.getUTCMilliseconds())
      var inboxInstance = this;
      while(inboxInstance != undefined && !(inboxInstance instanceof sap.uiext.inbox.Inbox))
      {
          inboxInstance = inboxInstance.getParent();
      }
      var localTime =  utc + inboxInstance.getTimezoneOffset() + (new Date().getTimezoneOffset()*60*1000);
      var ins = sap.ui.core.format.DateFormat.getDateTimeInstance({
          style : "medium"
      });
      return ins.format(new Date(localTime));*/
  return "";

};

sap.uiext.inbox.Inbox.prototype.tooltipFormatForDateTime = function(dateValue) {
    if (dateValue != undefined && typeof (dateValue) == 'string' && dateValue != "") {
        var date;
        if (dateValue.indexOf('Date') != -1) {
            date = new Date();
            date.setTime(dateValue.substring((dateValue.indexOf("(") + 1), dateValue.indexOf(")")));
        } else {
            date = new Date(dateValue.substring((dateValue.indexOf("'") + 1), dateValue.length - 1));
        }
        dateValue = date;
    }

    if (dateValue != undefined && dateValue != "") {
        var ins = sap.ui.core.format.DateFormat.getDateTimeInstance({
            style : "full"
        });
        return ins.format(dateValue);
    }       
    return "";

};

sap.uiext.inbox.Inbox.prototype.executeActionOnTask = function(oEvent, eventParameters) {
	
	var inBox = eventParameters.inbox;
	var view = eventParameters.view;
	var action = eventParameters.action;
	var isForwardAction = (action === inBox.constants.FORWARD) ? true : false;
	var forwardTo = isForwardAction ? eventParameters.forwardTo : '';
	
    inBox.showBusyLoader();
    var oListTable, rowContext, oModel;
    
    //var action = oEvent.getSource().getId();
    
    var selectedIDs = [], selectedContexts = [],selectedSAPOrigins = [], selectedForwardToUsers = [];
    var selectedStatus = [];
    var concatSelectedIDs = "'", concatSelectedSAPOrigins = "'", concatForwardToUsers = "'";
    var selectedID, selectedSAPOrigin;
    // reset search
    inBox.resetSearchCriteria();
    oModel = inBox.getCoreModel();
    
    if(view === inBox.constants.tableView){
    	oListTable = sap.ui.getCore().byId(inBox.getId() + '--' + 'listViewTable');
        if (oEvent.getSource())
            var selectedIndices = inBox.getlistTableSelectedIndices();
        
        jQuery.each(selectedIndices, function(i, selIndex) {
            rowContext = oListTable.getContextByIndex(selIndex);
            selectedContexts.push(rowContext);
            
            selectedID = oModel.getProperty("InstanceID", rowContext);
            selectedSAPOrigin = oModel.getProperty("SAP__Origin", rowContext);
            
            selectedIDs.push(selectedID);
            selectedSAPOrigins.push(selectedSAPOrigin);
            
            if (i == 0){
                concatSelectedIDs = concatSelectedIDs + selectedID;
            	concatSelectedSAPOrigins = concatSelectedSAPOrigins + selectedSAPOrigin;
            	if(isForwardAction){
            		concatForwardToUsers = concatForwardToUsers + forwardTo;
            	}
            }
            else{
                concatSelectedIDs = concatSelectedIDs + ";" + selectedID;
            	concatSelectedSAPOrigins = concatSelectedSAPOrigins + ";" + selectedSAPOrigin;
            	if(isForwardAction){
            		concatForwardToUsers = concatForwardToUsers + ";" + forwardTo;
            	}
            }
        });
        concatSelectedIDs = concatSelectedIDs + "'";
        concatSelectedSAPOrigins = concatSelectedSAPOrigins + "'";
        if(isForwardAction){
        	concatForwardToUsers = concatForwardToUsers + "'";
        }
   }else if(view === inBox.constants.rowRepeaterView){
	   var oContext = oEvent.getSource().getBindingContext();
	   selectedID = oModel.getProperty("InstanceID", oContext);
       selectedSAPOrigin = oModel.getProperty("SAP__Origin", oContext);
       
       selectedIDs.push(selectedID);
       selectedSAPOrigins.push(selectedSAPOrigin);
       
	   concatSelectedIDs = concatSelectedIDs + selectedID +"'";
	   concatSelectedSAPOrigins = concatSelectedSAPOrigins + selectedSAPOrigin +"'";
	   if(isForwardAction){
	  	 concatForwardToUsers = concatForwardToUsers + forwardTo + "'";
	   }
   }
    
    if (selectedIDs != null || selectedIDs.length > 0) {
        var IDURIPart, requestURI, requestOptions, status;
        if (action === "Complete") {
            action = "Complete";
        }
        if (action === "Claim") {
            action = "Claim";
        }
        if (action === "Release") {
            action = "Release";
        }if(isForwardAction){
        	action = "Forward";
        }
//      if (!inBox.getHandleBindings()) {
            var eventParams = oEvent.getParameters();
            // oDataEventParams.bindingLength = length;
            eventParams.action = action;
            eventParams.selectedIDs = concatSelectedIDs;
            eventParams.selectedSAPOrigins = concatSelectedSAPOrigins;
            
            eventParams.selectedIDList = selectedIDs;
            eventParams.selectedSAPOriginList = selectedSAPOrigins;
            
            if(isForwardAction){
            	eventParams.selectedForwardToUsers = concatForwardToUsers;
            }
            inBox.fireTaskAction(eventParams);
            inBox.applyFilterOnResponse(selectedContexts);
/*      } else { // var errorOccured = false;
            IDURIPart = action + "?InstanceID=" + concatSelectedIDs + "&$format=json";
            requestURI = inBox.bpmSvcUrl + IDURIPart;
            requestOptions = {
                requestUri : requestURI,
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "x-csrf-token" : oModel.oHeaders["x-csrf-token"]
                }
            };
            OData.request(requestOptions, function(data, request) {
                if (data.RESULT_CODE === "0") {
                    inBox.showMessage(inBox._oBundle.getText("INBOX_MSG_STATUS_ERROR"), inBox._oBundle
                            .getText("INBOX_MSG_ACTION_FAILED"));
                } else {
                    inBox.showMessage(inBox._oBundle.getText("INBOX_MSG_STATUS_SUCCESS"), inBox._oBundle
                            .getText("INBOX_MSG_ACTION_SUCCESS"));
                }
                inBox.applyFilterOnResponse(selectedContexts);
            }, function(error) {
                inBox.showMessage(inBox._oBundle.getText("INBOX_MSG_STATUS_ERROR"), inBox._oBundle
                        .getText("INBOX_MSG_ACTION_FAILED"));
            });
        }

*/  }
    inBox.resetMessages = false;
};

sap.uiext.inbox.Inbox.prototype.defaultActionHandler = function(oEvent, inBox) {
	var constants = inBox.constants;
    var action = oEvent.getParameter('action');
    var concatSelectedIDs = oEvent.getParameter('selectedIDs');
    var IDURIPart, requestURI, requestOptions, status;
    var concatSAPOrigins = oEvent.getParameter('selectedSAPOrigins');
    var oModel = inBox.getCoreModel();
    var selectedIDList = oEvent.getParameter('selectedIDList');
    var selectedSAPOriginList = oEvent.getParameter('selectedSAPOriginList');
    var commentsList = oEvent.getParameter('commentsList');
    var isForwardAction = (action === inBox.constants.FORWARD) ? true : false;
    
    var errorHandler = function(error){
    	inBox.showMessage("error", inBox._oBundle.getText("INBOX_MSG_ACTION_FAILED"));
    };
    
    if(inBox.isBatchOperationSupported){
    	var oBatchOperation, sPath, aBatchOperations = [];
    	for(var i = 0;i < selectedIDList.length; i ++){
    		sPath = action + constants.query + "InstanceID='" + selectedIDList[i] + "'" + constants.amperSand + constants.sapOrigin + "'" +  selectedSAPOriginList[i] + "'"; 
    		if(commentsList && commentsList.length > 0){
    			sPath = sPath + "&Comments='" +  commentsList[i] +"'";
    		}
        	oBatchOperation = oModel.createBatchOperation(sPath,inBox.httpMethodForAction);
        	aBatchOperations.push(oBatchOperation);
        }
    	oModel.addBatchChangeOperations(aBatchOperations);
    	oModel.submitBatch(function(data,response){
    		   var batchResponses = data.__batchResponses;
    	       var i, len;
    	       var noOfErrors = 0;
    	       for(i = 0, len = batchResponses.length; i < len; i++){
    	           var data = batchResponses[i];
    	           if(data.response.statusCode !== 200 && data.response.statusCode !== 201){
    	        	   noOfErrors = noOfErrors + 1;
    	           }
    	       }
    	       if(noOfErrors > 0){
    	    	   inBox.showMessage("error", noOfErrors + " " + inBox._oBundle.getText("INBOX_MSG_ACTION_FAILED"));
    	       }else{
    	    	   inBox.showMessage("success", inBox._oBundle.getText("INBOX_MSG_ACTION_SUCCESS"));
    	       }
    		},errorHandler,false);
    }else{
    	
    IDURIPart = '/' + action + "?InstanceID=" + concatSelectedIDs + "&SAP__Origin=" + concatSAPOrigins + "&$format=json";
    if(isForwardAction){
    	IDURIPart = IDURIPart + "&ForwardTo=" + oEvent.getParameter('selectedForwardToUsers');
    }
    requestURI = inBox.bpmSvcUrl + IDURIPart;
 
   
  requestOptions = {
		         async:false,
		         requestUri : requestURI,
		         method : inBox.httpMethodForAction,
		         headers : {
		                Accept : "application/json",
		                "x-csrf-token" : oModel.oHeaders["x-csrf-token"]
		         }
		  };

	    OData.request(requestOptions, function(data, request) {
	          inBox.showMessage("success", inBox._oBundle.getText("INBOX_MSG_ACTION_SUCCESS"));
	    }, errorHandler);
    }
};

sap.uiext.inbox.Inbox.prototype.fillAttributes = function() {
    var inBox = this;
    var oFacetFilter = sap.ui.getCore().byId(this.getId()+'--'+'filterFacet');
    if(oFacetFilter != undefined){
        var taskTypes = sap.uiext.inbox.InboxConstants.aFilterMetaData[0].attributes;
        var taskParentAttr = oFacetFilter.getLists()[0];
        if(taskParentAttr === undefined || taskParentAttr === null)
            return;
            
        var taskAttributes = taskParentAttr.getItems();

        jQuery.each(taskAttributes, function(i, attr) {
            // TODO : here comparison is dependent on the language of TaskTitle.
            var attrIDPos = inBox.inboxUtils.inArray(attr.getKey(),taskTypes);
            if(attr.getKey()!='sapUiFacetFilter_ALL') {
                if(attrIDPos === -1)
                {
                    taskParentAttr.removeItem(attr);
                }else{
                    taskTypes.splice(attrIDPos,1);
                }
            }
        });
        
        if (taskTypes.length > 0) {
            jQuery.each(taskTypes, function(i, taskType) {
                // If TaskTypes have specialCharacters this is failing - needs to be checked
                var taskTypeID = inBox.inboxUtils.scrub(taskType.key);
                var oAttribute = sap.ui.getCore().byId(inBox.getId() + '--' + taskTypeID);
                if (oAttribute === undefined)
                	oAttribute = new sap.ui.core.ListItem(inBox.getId() + '--' + taskTypeID,{text: taskType.value, key:taskType.key}).data("InstanceID",taskType.instanceID).data("SAP__Origin",taskType.sap__Origin);
                taskParentAttr.addItem(oAttribute);
            });
        }
    }
};

sap.uiext.inbox.Inbox.prototype.resetFilterView = function(bClearTableBinding) {
    var appliedDDFilter;
    if (this.filtersToApply.dropDownFilter) {
        appliedDDFilter = this.filtersToApply.dropDownFilter;
    } else if (this.filtersToApply.resStat != undefined || this.filtersToApply.readyStat != undefined
            || this.filtersToApply.InProStat != undefined) {
        appliedDDFilter = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.NE, "COMPLETED");
    }
    this.filtersToApply = {};
    if (appliedDDFilter != undefined) {
        this.filtersToApply.dropDownFilter = appliedDDFilter;
    }
    for (var idx = 0; idx < sap.uiext.inbox.InboxConstants.aFilterMetaData.length; idx++) {
        var attr = sap.ui.getCore().byId(this.getId() + '--' + sap.uiext.inbox.InboxConstants.aFilterMetaData[idx].name);
        if (attr != undefined)
            attr.setSelectedKeys(["sapUiFacetFilter_ALL"]);
    }
    if(bClearTableBinding)
        this.applyFilterOnResponse(null);
    
};

sap.uiext.inbox.Inbox.prototype.getlistTableSelectedIndices = function() {
    var listTable = sap.ui.getCore().byId(this.getId() + '--' + 'listViewTable');
    return listTable.getSelectedIndices();
};

sap.uiext.inbox.Inbox.prototype.getCoreModel = function() {
    return sap.ui.getCore().byId(this.getId() + '--' + 'listViewTable').getModel();
};

sap.uiext.inbox.Inbox.prototype.getnavigateTaskExecMetadata = function() {
    // var taskExecMeta = {};
    var oListTable = sap.ui.getCore().byId(this.getId() + '--' + 'listViewTable');
    var taskExecutionURLs = [];
    var taskExecIDs = [];
    var taskExecTitles = [];
    var aTaskExecSAPOrigins = [];
    var selectedIndices = this.getlistTableSelectedIndices();
    var oModel = this.getCoreModel();
    jQuery.each(selectedIndices, function(i, selIndex) {
        var rowContext = oListTable.getContextByIndex(selIndex);
        // taskExecIDs.push(oModel.getProperty("ID",rowContext));
        taskExecIDs.push(oModel.getProperty("InstanceID", rowContext));
        taskExecTitles.push(oModel.getProperty("TaskTitle", rowContext));
        aTaskExecSAPOrigins.push(oModel.getProperty("SAP__Origin", rowContext));
    });
    if (this.getTaskExecutionURLCallBack != "" && this.getTaskExecutionURLCallBack != undefined && this.getTaskExecutionURLCallBack !== null){
        taskExecutionURLs.push(this.getTaskExecutionURLCallBack(taskExecIDs[0],aTaskExecSAPOrigins[0]));
    }
    else{
        taskExecutionURLs.push("");
    }
    /*
     * taskExecMeta["arrayURLs"] = taskExecutionURLs; taskExecMeta["arrayIDs"] = taskExecIDs; taskExecMeta["arrayTitles"] =
     * taskExecTitles;
     */
    return {
        arrayURLs : taskExecutionURLs,
        arrayIDs : taskExecIDs,
        arrayTitles : taskExecTitles,
        aTaskSAPOrigins : aTaskExecSAPOrigins
    };
};

sap.uiext.inbox.Inbox.prototype.getlistTableSelectedContexts = function() {
    var selectedContexts = [];
    var selectedIndices = this.getlistTableSelectedIndices();
    var oListTable = sap.ui.getCore().byId(this.getId() + '--' + 'listViewTable');
    jQuery.each(selectedIndices, function(i, selIndex) {
        selectedContexts.push(oListTable.getContextByIndex(selIndex));
    });
    return selectedContexts;
};

sap.uiext.inbox.Inbox.prototype.showBusyLoader = function() {
    sap.ui.core.BusyIndicator.show(0);
    var busyLoader = jQuery.sap.byId("busy_loader");
    busyLoader.css('position', 'absolute');
    busyLoader.css('top', "50%");
    busyLoader.css('left', "50%");
    busyLoader.css('display', '');
    busyLoader.show();
    busyLoader.css('z-index', 99);

};

sap.uiext.inbox.Inbox.prototype.hideBusyLoader = function() {
    sap.ui.core.BusyIndicator.hide();
    var busyLoader = jQuery.sap.byId("busy_loader");
    busyLoader.css('display', 'none');
    busyLoader.css('z-index', -1);
};

sap.uiext.inbox.Inbox.prototype.resetSearchCriteria = function() {
    var srchFld = sap.ui.getCore().byId(this.getId() + '--' + 'searchField');
    srchFld.setValue("");
};

sap.uiext.inbox.Inbox.prototype.loadExecImages = function() {
    var requrl = this._imgResourcePath + sap.uiext.inbox.InboxConstants.prevBtnImage;
    var requrl1 = this._imgResourcePath + sap.uiext.inbox.InboxConstants.nxtBtnImage;
    jQuery.ajax({
        url : requrl,
        type : "GET",
        async : true,
        success : function(data, textStatus, XMLHttpRequest) {
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            // TODO Add proper Error handling and Messaging
        }
    });

    jQuery.ajax({
        url : requrl1,
        type : "GET",
        async : true,
        success : function(data, textStatus, XMLHttpRequest) {
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            // TODO Add proper Error handling and Messaging
        }
    });
};

/*sap.uiext.inbox.Inbox.prototype.getRowSettingsCookieValue = function() {
    var i, x, y, aCookies = document.cookie.split(";");
    for (i = 0; i < aCookies.length; i++) {
        x = aCookies[i].substr(0, aCookies[i].indexOf("="));
        y = aCookies[i].substr(aCookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == (this.getId() + "nOfRows")) {
            return unescape(y);
        }
    }
};*/

/*sap.uiext.inbox.Inbox.prototype.setRowSettingsCookieValue = function(value, exDays) {
    // var exdate = new Date();
    // exdate.setDate(exdate.getDate() + exDays);
    // var c_value = escape(value) + ((exDays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = this.getId() + "nOfRows" + "=" + escape(value);// c_value;
    this.setNoOfRowsOnTable(value);
};*/

sap.uiext.inbox.Inbox.prototype.setNoOfRowsOnTable = function(value) {
    var table = sap.ui.getCore().byId(this.getId() + '--' + 'listViewTable');
    if (table != undefined)
        table.setVisibleRowCount(parseInt(value, 10));
};

/*sap.uiext.inbox.Inbox.prototype.deleteCookie = function() {
    var d = new Date();
    document.cookie = this.getId() + "nOfRows" + "=" + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
};*/

sap.uiext.inbox.Inbox.prototype.showMessage = function(messageType, messageText) {
    var msgBarTB = sap.ui.getCore().byId(this.getId() + '--' + 'msgBarContainer');
    if (msgBarTB != undefined) {
        msgBarTB.setVisible(true);
        
        var msgBarText = this._getComponent('msbBarTextView');
        msgBarText.setText(messageText);
        
        
        var msgBarTypeImg = this._getComponent('msbBarTypeImg');
        msgBarTypeImg.setSrc(
                this._imgResourcePath + sap.uiext.inbox.InboxConstants.messageTypeIcons[messageType]);
        msgBarTypeImg.setTooltip(this._oBundle.getText(sap.uiext.inbox.InboxConstants.messageTypeToolTip[messageType]));

    }
};

sap.uiext.inbox.Inbox.prototype.deleteMessage = function(oEvent, inBox) {
    if (inBox === undefined)
        inBox = this;
    var msgBarTB = sap.ui.getCore().byId(inBox.getId() + '--' + 'msgBarContainer');
    if (msgBarTB != undefined) {
        msgBarTB.setVisible(false);
        sap.ui.getCore().byId(inBox.getId() + '--' + 'msbBarTextView').setText("");
        sap.ui.getCore().byId(inBox.getId() + '--' + 'msbBarTypeImg').setSrc("");
    }
};

sap.uiext.inbox.Inbox.prototype.getFormattedDateTimeOff = function(subT, isNow) {
    var myDate = new Date();
    myDate.setDate(myDate.getDate() - subT);
    if(!isNow){
        myDate.setHours(0);
        myDate.setSeconds(0);
        myDate.setMinutes(myDate.getTimezoneOffset());
    }
    return myDate;
};

sap.uiext.inbox.Inbox.prototype.getFormattedDueDateTimeOff = function(subT) {
  var myDate = new Date();
  myDate.setDate(myDate.getDate() + subT);
  myDate.setHours(0);
  myDate.setSeconds(0);
  myDate.setMinutes(myDate.getTimezoneOffset());
  return myDate;
};

sap.uiext.inbox.Inbox.prototype.getProviderHost = function() {
/*    var IDURIPart = '/$metadata';
    var requestURI = this.bpmSvcUrl + IDURIPart;
    var isProviderHostOData4J;
    jQuery.ajax({
           url : requestURI,
           type : "GET",
           async : false,
           success : function(data, textStatus, XMLHttpRequest) {
                  // TODO : make this generic
                  var server = XMLHttpRequest.getResponseHeader('Server');
                  if(server.indexOf('AS Java')>0) {
                    isProviderHostOData4J = 'ODATA4J';
                  }else{
                    isProviderHostOData4J = 'GW';
                  }
           },
           error : function(XMLHttpRequest, textStatus, errorThrown) {
                  // TODO Add proper Error handling and Messaging
                  if (XMLHttpRequest.status === 0) {
                        // oController.showMessage(_oBundle.getText("MSG_STATUS_ERROR"),_oBundle.getText("MSG_ACTION_FAILED")+"
                                                // "
                        // +action);
                        // window.location.reload();
                  } else if (XMLHttpRequest.status === 403) {
                        // oController.showMessage(_oBundle.getText("MSG_STATUS_ERROR"),_oBundle.getText("MSG_ACTION_FAILED")+"
                                                // "
                        // +action);
                  } else {
                        // oController.showMessage(_oBundle.getText("MSG_STATUS_ERROR"),_oBundle.getText("MSG_ACTION_FAILED")+"
                                                // "
                        // +action);
                  }
           }
    });
    return isProviderHostOData4J;
*/
};


sap.uiext.inbox.Inbox.prototype.refreshTaskTypes = function(){
    if (this.dynamicTaskTypeFilterCallBack != "" && this.dynamicTaskTypeFilterCallBack != undefined) {
        sap.uiext.inbox.InboxConstants.aFilterMetaData[0].attributes = this.dynamicTaskTypeFilterCallBack();
        this.fillAttributes();
        return;
    }
  var oTable = sap.ui.getCore().byId(this.getId() + '--' + 'listViewTable');
  var aTasks = [];
  var oMap = {};
  var sValue;
  if (this.getHandleBindings()) {
      var oContexts = this._currentViewElement().getBinding("rows").getContexts();
      var oModel = this.getCoreModel();
      jQuery.each(oContexts, function(i, oContext) {
    	  sValue = {"key":oModel.getProperty("TaskDefinitionID", oContext), "value":oModel.getProperty("TaskDefinitionName", oContext),"instanceID":oModel.getProperty("InstanceID", oContext),"sap__Origin":oModel.getProperty("SAP__Origin", oContext)};
            if (!oMap[sValue.key]) {
                oMap[sValue.key] = true;
                aTasks.push(sValue);
            }
      });
  }else{
      var listBinding = this._currentViewElement().getBinding("rows");
      jQuery.each(listBinding.oList, function(i, oEntry) {
          sValue = {"key":oEntry.TaskDefinitionID, "value":oEntry.TaskDefinitionName};
          if (!oMap[sValue.key]) {
            oMap[sValue.key] = true;
            aTasks.push(sValue);
          }
      });
  }
  
  if(aTasks.length > 0){
    sap.uiext.inbox.InboxConstants.aFilterMetaData[0].attributes = aTasks;
        this.fillAttributes();
  }
};

sap.uiext.inbox.Inbox.prototype.onAfterRendering = function() {
    // TODO: Apply CSS
    var oTable$ = sap.ui.getCore().byId(this.getId() + '--' + 'listViewTable').$();
    oTable$.find("a:disabled").addClass("sapUiExtInboxLnkDsbl");
    
    // TODO: focus CSS
  /*  var settingsButton$ = sap.ui.getCore().byId(this.getId() + '--' + 'settingsButton').$();
    settingsButton$.hover(function(){
        settingsButton$.css("background-color","transparent");
        });
    settingsButton$.focus(function(){
                                        settingsButton$.css("background-color","transparent");
                                        });
    settingsButton$.css("background-color","transparent");
    
   settingsButton$.addClass("sapUiExtInboxSettingsButton");*///TODO: Confirm the behaviour with PO.
};


sap.uiext.inbox.Inbox.prototype._getComponent = function(sComponentName) { 
    return sap.ui.getCore().byId(this.getId() + '--' + sComponentName); 
};

sap.uiext.inbox.Inbox.prototype._removeParentID = function(sComponentName) { 
    var parentID = this.getId();
    return sComponentName.replace(this.getId()+"--","");
    
};

sap.uiext.inbox.Inbox.prototype.populateViewButtonsContainer = function(viewButtonsContainer) {
	var listViewCell = new sap.ui.commons.layout.MatrixLayoutCell({id : this.getId() + '--' + "segmentedButtonCell"});
	/*var listViewImg = new sap.ui.commons.Image({
		id : this.getId() + '--' +  "tableViewImage",
		src : this._imgResourcePath + sap.uiext.inbox.InboxConstants.tableViewImageSelected,
		text : "",
		tooltip : this._oBundle.getText("INBOX_LIST_VIEW_TOOLTIP")
	});
	listViewImg.attachPress(this, this.switchViews);
	listViewImg.addStyleClass("sapUiExtInboxToolBarContainerHeight");
	listViewCell.addContent(listViewImg);
	listViewCell.setPadding(sap.ui.commons.layout.Padding.None);

	// Uncomment the code for Steam View button and also donot forget to
	// increase the width to 4% while creating the toolBarContainer.
	 var matrixViewCell = new sap.ui.commons.layout.MatrixLayoutCell();
	 var matrixViewImg = new sap.ui.commons.Image({
	 id: this.getId() + '--' + "rrViewImage",
	 src : this._imgResourcePath + sap.uiext.inbox.InboxConstants.rrViewImageUnselected,
	 text : "",
	 tooltip : this._oBundle.getText("INBOX_STREAM_VIEW_TOOLTIP")
	 });
	 matrixViewImg.attachPress(this, this.switchViews);
	 matrixViewImg.addStyleClass("sapUiExtInboxToolBarContainerHeight");
	 matrixViewCell.addContent(matrixViewImg);
	 matrixViewCell.setPadding(sap.ui.commons.layout.Padding.None);*/
	 
	 var oSegmentedButtonViewSelectionLite = new sap.ui.commons.SegmentedButton({id:this.getId() + '--' + 'viewSelectionSegBtn',
			buttons:[new sap.ui.commons.Button({id: this.getId() + '--' + 'tableViewSelectionButton',lite: true,icon: this._imgResourcePath + sap.uiext.inbox.InboxConstants.tableViewImageSelected,
													tooltip:this._oBundle.getText("INBOX_LIST_VIEW_TOOLTIP")}),//.addStyleClass("sapUiExtInboxToolBarContainerHeight"),
			         new sap.ui.commons.Button({id: this.getId() + '--' + 'rrViewSelectionButton',lite: true,icon: this._imgResourcePath + sap.uiext.inbox.InboxConstants.rrViewImageUnselected,
			        	 					tooltip:this._oBundle.getText("INBOX_STREAM_VIEW_TOOLTIP")})]})//.addStyleClass("sapUiExtInboxToolBarContainerHeight")]});
	 oSegmentedButtonViewSelectionLite.setSelectedButton(this.getId() + '--' + 'tableViewSelectionButton');
	 oSegmentedButtonViewSelectionLite.attachSelect(this, this.switchViews);
	 oSegmentedButtonViewSelectionLite.addStyleClass("sapUiExtInboxToolBarContainerHeight");
	 listViewCell.addContent(oSegmentedButtonViewSelectionLite);
	 listViewCell.setPadding(sap.ui.commons.layout.Padding.None);
	viewButtonsContainer.createRow(listViewCell);
};

sap.uiext.inbox.Inbox.prototype.switchViews = function(oEvent, oInbox) {
	//TODO : need to refresh model at each switch so as to see latest data
	var that = oInbox;
	var buttonClicked = sap.ui.getCore().byId(oEvent.getSource().getSelectedButton());
	var tableViewSelectionButtonId = that.getId() + '--' + "tableViewSelectionButton";
	var rrViewSelectionButtonId = that.getId() + '--' + "rrViewSelectionButton";
	var tableView = sap.ui.getCore().byId(that.getId() + '--' + 'listViewTable');
	
	//var oTextView = sap.ui.getCore().byId('testContent');
	var oTasksRowRepeater = sap.ui.getCore().byId(that.getId() + '--'+'tasksRowRepeater');
	var verticalLayout = sap.ui.getCore().byId(that.getId() + '--' + 'verticalLayoutContainer');
	var actionButtonsToolBar = sap.ui.getCore().byId(that.getId() + '--' + 'actionButtonsToolbarContainer');
	var rowRepeaterToolBar = sap.ui.getCore().byId(that.getId() + '--'+ 'rrToolbar'); 
	var rowRepeaterToolsContent = sap.ui.getCore().byId(that.getId() + '--'+ 'rowRepeaterToolsMatLayout'); 
	var rowRepeaterPaginator = sap.ui.getCore().byId(that.getId()+ '--' +"rowRepeaterPaginator")
	
	var currentViewElement = that._currentViewElement();
    var currentViewElementBinding = currentViewElement.getBinding('rows');
    var taskDefinitionFilter = false;
    
    
    if(currentViewElementBinding &&  currentViewElementBinding.sFilterParams && currentViewElementBinding.sFilterParams.indexOf('TaskDefinitionID') !== -1)
    	taskDefinitionFilter = true;
	
	if(buttonClicked.getId() === tableViewSelectionButtonId){
		that.currentView = that.constants.tableView;
		buttonClicked.setIcon(that._imgResourcePath + sap.uiext.inbox.InboxConstants.tableViewImageSelected);
		var rrViewSelectionButton = sap.ui.getCore().byId(rrViewSelectionButtonId);
		rrViewSelectionButton.setIcon(that._imgResourcePath + sap.uiext.inbox.InboxConstants.rrViewImageUnselected);
		actionButtonsToolBar.setVisible(true);
		tableView.setVisible(true);
		rowRepeaterToolBar.setVisible(false);
		oTasksRowRepeater.setVisible(false);
		rowRepeaterToolsContent.setVisible(false);
	}
	
	if(buttonClicked.getId() === rrViewSelectionButtonId){
		that.currentView = that.constants.rowRepeaterView;
		buttonClicked.setIcon(that._imgResourcePath + sap.uiext.inbox.InboxConstants.rrViewImageSelected);
		var tableViewSelectionButton = sap.ui.getCore().byId(tableViewSelectionButtonId);
		tableViewSelectionButton.setIcon(that._imgResourcePath + sap.uiext.inbox.InboxConstants.tableViewImageUnselected);
		if(that.isCustomAttributesEnabled){
			var customAttrButton = that._getComponent('customAttributesSegBtn');
			if(customAttrButton && !customAttrButton.getVisible()){
				customAttrButton.setVisible(true);
			}
		}
		actionButtonsToolBar.setVisible(false);
		tableView.setVisible(false);
		if(oTasksRowRepeater.getModel() === undefined || oTasksRowRepeater.getModel() === null){
			oTasksRowRepeater.setModel(that.getModel());
			//TODO: binding Context is null somehow.. Should check whether it is an Inbox bug. 
			//oTasksRowRepeater.getModel().refresh();
		}
		rowRepeaterToolBar.setVisible(true);
		oTasksRowRepeater.setVisible(true);
		rowRepeaterToolsContent.setVisible(true);
		if(oTasksRowRepeater.getBinding('rows')){
			//	oTasksRowRepeater.getBinding("rows").filter(tableView.getBinding('rows').aFilters);
			var numberOfRows = oTasksRowRepeater.getBinding('rows').iLength;
			rowRepeaterPaginator.setNumberOfPages(Math.ceil(numberOfRows/5));
		}else{
			var oRowRepeaterTemplate = that._getComponent('rrMainMatrixLayout');
			var initialSort = new sap.ui.model.Sorter("CreatedOn", true);
			var expand = that._getExpandParameters();
			var filtersTobeApplied = that._getFilterArray();
			if(expand.length > 0 ){
				oTasksRowRepeater.bindRows({path: that.sCollectionPath,template: oRowRepeaterTemplate,parameters: {expand: expand},sorter:initialSort,filters:filtersTobeApplied});
	        }else{
	        	oTasksRowRepeater.bindRows({path: that.sCollectionPath,template: oRowRepeaterTemplate,sorter:initialSort,filters:filtersTobeApplied});
	        }
		}
	}
	
	if(that.isCustomActionsEnabled){
			that._deleteCustomActions();
			var isCompletedTasksSelectedinDD =  that._isCompletedTasksSelected();
			if(!isCompletedTasksSelectedinDD && taskDefinitionFilter){
				var oTaskTypefilterList = that._getComponent("INBOX_FILTER_TASK_TYPE");
				var aSelectedKeys = oTaskTypefilterList.getSelectedKeys();
				if(aSelectedKeys && aSelectedKeys.length === 1){
					//need to check if with the key we can store an object. This is too much of an overhead.
					var aItems = oTaskTypefilterList.getItems();
					var key = aSelectedKeys[0];
					var sapOrigin;
			
					for (var j = 0; j < aItems.length; j++) {
					if (key === aItems[j].getKey()) {
						sapOrigin = aItems[j].data("SAP__Origin"); 
						}
					}
					var aCustomActionsDefinitionArray = that._getCustomActionsDefinition(null,aSelectedKeys[0],sapOrigin);
					//create Columns
					if(aCustomActionsDefinitionArray && aCustomActionsDefinitionArray.length>0)
						that._createCustomActions(aCustomActionsDefinitionArray, false);
				}
				that.applyFilterOnResponse(null,true);
			}
			that.applyFilterOnResponse(null);
	}else{
	//that.refreshTaskList(oEvent, oInbox); //TODO: Should we Refresh Tasks using this function call ? 
		if(oEvent.getParameters().triggeredFrom === undefined){
			if(that.oModel instanceof sap.ui.model.json.JSONModel && that.currentView === that.constants.rowRepeaterView){
				that.applyFilterOnResponse(null,true);
			}else{	
				that.applyFilterOnResponse(null);
			}
		}
	}
};

sap.uiext.inbox.Inbox.prototype.createOtherActions = function(oInbox) {
	var that = oInbox;
	var attachmentButton = new sap.ui.commons.ToggleButton({
		id : that.getId() + '--' + 'attachmentsSegBtn',
		visible : false,
		lite : true,
		icon : that._imgResourcePath + sap.uiext.inbox.InboxConstants.attachmentsImage,
		tooltip : this._oBundle.getText("INBOX_SHOW_ATTACHMENTS")
	});
	attachmentButton.bindProperty("visible", "HasAttachments");

	var commentsButton = new sap.ui.commons.ToggleButton({
		id : that.getId() + '--' + 'commentsSegBtn',
		visible : false,
		lite : true,
		icon : that._imgResourcePath + sap.uiext.inbox.InboxConstants.commentsImage,
		tooltip : this._oBundle.getText("INBOX_SHOW_COMMENTS")
	});
	commentsButton.bindProperty("visible", "HasComments");
	
	var customAttributesButton = new sap.ui.commons.ToggleButton({
			id : that.getId() + '--' + 'customAttributesSegBtn',
			enabled : true,
			lite : true,
			visible: false,
			tooltip : this._oBundle.getText("INBOX_SHOW_CUSTOM_ATTRIBUTES"),
			icon : that._imgResourcePath + sap.uiext.inbox.InboxConstants.customAttributesImage
		});
		
		/*
		 * var attachmentsImage = new sap.ui.commons.Image({ id : that.getId() + '--' + "attachmentsImg", decorative : false,
		 * src: that._imgResourcePath + sap.uiext.inbox.InboxConstants.attachmentsImage // tooltip :
		 * this._oBundle.getText("HAS ATTACHMENTS")//TODO: What Tootip ? });
		 * attachmentsImage.bindProperty("visible","HasAttachments");
		 * 
		 * var commentsImage = new sap.ui.commons.Image({ id : that.getId() + '--' + "commentsImg", decorative : false, src:
		 * that._imgResourcePath + sap.uiext.inbox.InboxConstants.commentsImage // tooltip :
		 * this._oBundle.getText("HAS_COMMENTS")//TODO: What Tootip ? }); commentsImage.bindProperty("visible","HasComments");
		 */
		
		var rrOtherActionMatLay = new sap.ui.commons.layout.MatrixLayout(that.getId() + '--'+ 'rrOtherActionsMatLay',{layoutFixed: true,columns:3, width:"100%"});
		rrOtherActionMatLay.createRow(attachmentButton, commentsButton, customAttributesButton);
	
		customAttributesButton.attachPress(function(oEvent) {
		//function createTasksDetailedLayout(oEvent) {
				//USE oEvent.getParameters().selectedButtonId to perform action according, as it has info of which icon of which row.
				var buttonClickedID = oEvent.getParameters().id;
				var tasksRowRepString = 'tasksRowRepeater-';
				var basicRowRepTaskDetailVLayoutID = that.getId() + '--' + 'rrMainMatrixLayout' + '-' + that.getId() + '--' + 'tasksRowRepeater-';
				var indexOfRowNumber = buttonClickedID.indexOf(tasksRowRepString) + tasksRowRepString.length;
				var rowNumber = buttonClickedID.substring(indexOfRowNumber, buttonClickedID.length);
	
				var lastRowRepMatLayoutID = that.getId() + '--' + 'lastRowOfRowRepeater-' + rowNumber;
				var	lastRowOfRowRepeater = sap.ui.getCore().byId(lastRowRepMatLayoutID);
				if(!lastRowOfRowRepeater){
					lastRowOfRowRepeater = new sap.ui.commons.layout.MatrixLayoutRow({
						id : lastRowRepMatLayoutID
					});
				}
				
				var lastRowCellID = that.getId() + '--' + 'lastRowCell-'+ rowNumber;
				var	lastRowCell = sap.ui.getCore().byId(lastRowCellID);
				if(!lastRowCell){
					lastRowCell = new sap.ui.commons.layout.MatrixLayoutCell({
						id : lastRowCellID,
						padding: sap.ui.commons.layout.Padding.None,
						vAlign: sap.ui.commons.layout.VAlign.Middle,
						hAlign: sap.ui.commons.layout.HAlign.End,
						colSpan : 3 });
				}
				
				var rrMatrixLayout = sap.ui.getCore().byId(basicRowRepTaskDetailVLayoutID + rowNumber);
					if(rrMatrixLayout){
							lastRowCell.removeAllContent();
							rrMatrixLayout.removeRow(lastRowRepMatLayoutID);
							if(buttonClickedID.indexOf(that.getId() + '--' + 'customAttributesSegBtn')!= -1){
								//if(this.data("previousSelection") !== buttonClickedID){
									if(oEvent.getSource().getPressed()){
										var sSelectedTaskDefinition = that.getModel().getProperty("TaskDefinitionID",oEvent.getSource().getParent().getBindingContext()); 
										var sSapOrigin = that.getModel().getProperty("SAP__Origin",oEvent.getSource().getParent().getBindingContext());
										var customAttributeDefinitionArray = that._getCustomAttributeMetaData(sSelectedTaskDefinition,sSapOrigin);
										if(customAttributeDefinitionArray && customAttributeDefinitionArray.length>0){
											lastRowCell.addContent(that._createCustomAttributesRRViewMatrixLayout(customAttributeDefinitionArray,sSelectedTaskDefinition,rowNumber)); 
											lastRowOfRowRepeater.addCell(lastRowCell);
											rrMatrixLayout.addRow(lastRowOfRowRepeater);
										}
										this.data("previousSelection",buttonClickedID);
									}
								//}
								//this.data("previousSelection",buttonClickedID);
							}//if(buttonClickedID.indexOf(that.getId() + '--' + 'commentsSegBtn') != -1){
	//							var comments = new sap.ui.ux3.Feeder({type:sap.ui.ux3.FeederType.Comment});
	//							if(oEvent.getSource().getPressed()){
	//								taskDetailsVLayout.insertContent(comments, 1);
						//		}
								//Implement Later
								//comments.setThumbnailSrc();
					//		}else{
								//Do Nothing
						//	}
					}else{
						//TODO: Handle in message bar. For Now
					//	alert("Could Not Find : " + basicRowRepTaskDetailVLayoutID + rowNumber);
					}
		//}    
		});
	//var taskActionLayout = new sap.ui.commons.layout.MatrixLayout(that.getId() + '--'+ 'rowRepeaterTaskActionLayout');
	//taskActionLayout.createRow(attachmentButton,commentsButton,customAttributesButton);
	//return  taskActionLayout;
	return  rrOtherActionMatLay;
};

sap.uiext.inbox.Inbox.prototype._isOverDue = function(value) {
	//need to be overrriddedn in app for different timezones
	if(value === undefined || value === null || value === "")
		return false;
	
	var now = new Date().getTime();
	var overdue = (value.getTime() - now) < 0 ? true : false;
	return overdue;
};

sap.uiext.inbox.Inbox.prototype._currentView = function() {
	return this.currentView;
};

sap.uiext.inbox.Inbox.prototype.createRowRepeaterToolBar = function(oInbox) {
		var that = oInbox;	
	 var actionButtonsToolBar = sap.ui.getCore().byId(this.getId() + '--' + 'rrToolbar');
	 var oRowRepeater = sap.ui.getCore().byId(this.getId() + '--'+'tasksRowRepeater');
	
	 if(!actionButtonsToolBar){
		 var actionButtonsToolBar = new sap.ui.commons.Toolbar(this.getId() + '--' + "rrToolbar");
		 actionButtonsToolBar.addStyleClass("sapUiExtInboxActionButtonsToolbarContainer");
		 
		 //TODO: Add Label SortBy:
		 var sortIndex = 0;
		 if (sap.ui.getCore().byId(this.getId() + '--' + 'sortByLabel') === undefined) {
			 var sortByLabel = new sap.ui.commons.Label(this.getId() + '--' + "sortByLabel", {text: this._oBundle.getText("INBOX_SORT_BY_LABEL") + sap.uiext.inbox.InboxConstants.COLON,
				 design: sap.ui.commons.LabelDesign.Bold});
			 actionButtonsToolBar.insertItem(sortByLabel, sortIndex);
		 }
		 //Sort by Drop down list
		var dropdownComboBox = new sap.ui.commons.DropdownBox(this.getId() + '--' + "sortByFilterComboBox", {
		    tooltip : this._oBundle.getText("INBOX_SORT_BY_LABEL"),
		    items : [new sap.ui.core.ListItem(this.getId() + '--' + "li_creationDate", {
		        text : this._oBundle.getText("INBOX_FILTER_CREATION_DATE"),
		        tooltip : this._oBundle.getText("INBOX_SORT_BY_LABEL") +" "+ this._oBundle.getText("INBOX_FILTER_CREATION_DATE")
		    }), new sap.ui.core.ListItem(this.getId() + '--' + "li_taskTitle", {
		        text : this._oBundle.getText("INBOX_TASK_TITLE"),
		        tooltip : this._oBundle.getText("INBOX_SORT_BY_LABEL") +" "+ this._oBundle.getText("INBOX_TASK_TITLE")
		    }), new sap.ui.core.ListItem(this.getId() + '--' + "li_status", {
		        text : this._oBundle.getText("INBOX_STATUS"),
		        tooltip : this._oBundle.getText("INBOX_SORT_BY_LABEL") +" "+ this._oBundle.getText("INBOX_STATUS")
		    })]
		});
		dropdownComboBox.setValue(this._oBundle.getText("INBOX_FILTER_CREATION_DATE"));
		dropdownComboBox.addStyleClass("sapUiExtInboxRowRepeaterSortBy");
		 var _sortByStartDate = new sap.ui.commons.RowRepeaterSorter(this.getId() + '--' + 'sortByStartDate',{sorter:new sap.ui.model.Sorter("CreatedOn",true)});//Ascending
		 var _sortByTaskTitle = new sap.ui.commons.RowRepeaterSorter(this.getId() + '--' + 'sortByTaskTitle',{sorter:new sap.ui.model.Sorter("TaskTitle",false)});//Ascending
		 var _sortByStatus = new sap.ui.commons.RowRepeaterSorter(this.getId() + '--' + 'sortByStatus',{sorter:new sap.ui.model.Sorter("Status",false)});//Ascending
		 oRowRepeater.addSorter(_sortByStartDate);
		 oRowRepeater.addSorter(_sortByTaskTitle);
		 oRowRepeater.addSorter(_sortByStatus);
		 
		dropdownComboBox.attachChange(this, function(oEvent, inBox){
		    var listItemID = oEvent.getSource().getSelectedItemId();
		    that.resetSearchCriteria();
		    var sorter;
		    if (listItemID === inBox.getId() + '--' + "li_creationDate") {
		    	oRowRepeater.triggerSort(that.getId() + '--' + 'sortByStartDate');
		    	sorter = sap.ui.getCore().byId(that.getId() + '--' + 'sortByStartDate').getSorter();
		    	sorter.bDescending = !sorter.bDescending;
		    }else if(listItemID === inBox.getId() + '--' + "li_taskTitle"){
		    	oRowRepeater.triggerSort(that.getId() + '--' + 'sortByTaskTitle');
		    	sorter = sap.ui.getCore().byId(that.getId() + '--' + 'sortByTaskTitle').getSorter();
		    	sorter.bDescending = !sorter.bDescending;
		    }else if(listItemID === inBox.getId() + '--' + "li_status"){
		    	oRowRepeater.triggerSort(that.getId() + '--' + 'sortByStatus');
		    	sorter = sap.ui.getCore().byId(that.getId() + '--' + 'sortByStatus').getSorter();
		    	sorter.bDescending = !sorter.bDescending;
		    }
	    	var sortImage  = sap.ui.getCore().byId(that.getId() + '--' + 'sortImage');
	    	if(!sorter.bDescending){
	    		sortImage.setSrc(that._imgResourcePath + sap.uiext.inbox.InboxConstants.sortDescImage);
	    		sortImage.setTooltip(inBox._oBundle.getText("INBOX_SORT_INDICATOR_DESC"));
	    	}else{
	    		sortImage.setSrc(that._imgResourcePath + sap.uiext.inbox.InboxConstants.sortAscImage);
	    		sortImage.setTooltip(inBox._oBundle.getText("INBOX_SORT_INDICATOR_ASC"));
	    	}
			
		});
		 actionButtonsToolBar.insertItem(dropdownComboBox,sortIndex+1);
		//Sorting indicator image
		 var sortIcon = new sap.ui.commons.Image(this.getId() + '--' + "sortImage", {
			 tooltip : this._oBundle.getText("INBOX_SORT_INDICATOR_ASC"),
			 decorative : false
		 });
		 sortIcon.setSrc(this._imgResourcePath + sap.uiext.inbox.InboxConstants.sortAscImage);
		 sortIcon.addStyleClass("sapUiExtInboxRefreshButtonHeight");
		 actionButtonsToolBar.insertItem(sortIcon, sortIndex+2);
	 }
		 
		 //Refresh Button and Refresh Link
/*		 if (sap.ui.getCore().byId(this.getId() + '--' + 'rrRefreshImage') === undefined) {
			 
			 var refreshButton = new sap.ui.commons.Image(this.getId() + '--' + "rrRefreshImage", {
				 tooltip : this._oBundle.getText("INBOX_REFRESH_BUTTON_TOOLTIP"),
				 decorative : false
			 });
			 refreshButton.setSrc(this._imgResourcePath + sap.uiext.inbox.InboxConstants.refreshImage);
			 refreshButton.attachPress(that, that.refreshTaskList);
			 refreshButton.addStyleClass("sapUiExtInboxRefreshButtonHeight");
			 actionButtonsToolBar.insertRightItem(refreshButton, 0);
			 
			 var refreshLink = new sap.ui.commons.Link(this.getId() + '--' + "rrRefreshLink", {
				 text : this._oBundle.getText("INBOX_REFRESH_TEXT"),
				 tooltip : this._oBundle.getText("INBOX_REFRESH_BUTTON_TOOLTIP")
			 });
			 refreshLink.attachPress(that, that.refreshTaskList);
			// actionButtonsToolBar.insertRightItem(refreshLink,1);
				/}*/
		 //Here
		 var settingsButton = that._createRRSettingsMenuButton();
		 actionButtonsToolBar.insertRightItem(settingsButton, 3);
		 //Seperator
		// var seprtr = new sap.ui.commons.ToolbarSeparator();
		// actionButtonsToolBar.insertRightItem(seprtr,3);

		
	 return actionButtonsToolBar;
}

sap.uiext.inbox.Inbox.prototype.createRowRepeaterToolsContent = function(oInbox) {
	var that = oInbox;
	var oTasksRowRepeater = sap.ui.getCore().byId(that.getId() + '--'+'tasksRowRepeater');
	var rowRepeaterToolsMatLayout = new sap.ui.commons.layout.MatrixLayout(that.getId() + '--'+ 'rowRepeaterToolsMatLayout');
//	var rowRepeaterToolsMatLayout = new sap.ui.commons.layout.MatrixLayout(that.getId() + '--'+ 'rowRepeaterToolsMatLayout',{columns:3, width:"100%",widths:["40.5%","44%","5.3%"]});
//["2%","39%","46%","5%"]

	//Paginator
	var oPaginator = new sap.ui.commons.Paginator(that.getId()+ '--' +"rowRepeaterPaginator", {page:onpage});
		function onpage(e) {
			var newPage = e.getParameter("targetPage");
			var oldPage = e.getParameter("srcPage");
			oTasksRowRepeater.gotoPage(newPage);
		}
		
		//Row Repeater Page Settings.
		var oSegmentedButtonIconLite = new sap.ui.commons.SegmentedButton({id:that.getId() + '--' + 'rowRepeaterRowSettingsSegBtn',
			buttons:[new sap.ui.commons.Button({id: that.getId() + '--' + '5RowsSegBtn',lite:true,text:'5',
													tooltip:this._oBundle.getText("INBOX_SET_NUMBER_OF_ROWS_TO") +" "+ this._oBundle.getText("INBOX_NUMBER_FIVE")}).addStyleClass("sapUiExtInboxSegmentedButtonTransparent"),
			         new sap.ui.commons.Button({id: that.getId() + '--' + '10RowsSegBtn',lite:true,text:'10',
			        	 					tooltip:this._oBundle.getText("INBOX_SET_NUMBER_OF_ROWS_TO") +" "+ this._oBundle.getText("INBOX_NUMBER_TEN")}).addStyleClass("sapUiExtInboxSegmentedButtonTransparent"),
		           new sap.ui.commons.Button({id: that.getId() + '--' + '20RowsSegBtn',lite:true,text:'20',
		          	 					tooltip:this._oBundle.getText("INBOX_SET_NUMBER_OF_ROWS_TO") +" "+ this._oBundle.getText("INBOX_NUMBER_TWENTY")}).addStyleClass("sapUiExtInboxSegmentedButtonTransparent")
	    ]});		
		oSegmentedButtonIconLite.attachSelect(function(oEvent) {
				var rowSettingValue = parseInt(sap.ui.getCore().byId(oEvent.getParameters().selectedButtonId).getText());
				var aButtons = this.getButtons();
				for (var i = 0; i < aButtons.length; i++) {
					aButtons[i].removeStyleClass("sapUiExtInboxSegmentedButtonTransparentSelected");
				}
				sap.ui.getCore().byId(oEvent.getParameters().selectedButtonId).addStyleClass("sapUiExtInboxSegmentedButtonTransparentSelected");
					oTasksRowRepeater.setNumberOfRows(rowSettingValue);
					//TODO: Need a null check here
					var numberOfRows = oTasksRowRepeater.getBinding('rows').iLength;
					oPaginator.setNumberOfPages(Math.ceil(numberOfRows/rowSettingValue));
					oTasksRowRepeater.rerender();
		 });
		oSegmentedButtonIconLite.setSelectedButton(that.getId() + '--' + '5RowsSegBtn');
		sap.ui.getCore().byId(oSegmentedButtonIconLite.getSelectedButton()).addStyleClass("sapUiExtInboxSegmentedButtonTransparentSelected");
	//rowRepeaterToolsMatLayout.createRow(new sap.ui.commons.TextView({text : ' '}));	
	var separatorCell = new sap.ui.commons.layout.MatrixLayoutCell(that.getId() + '--' + "separatorRRViewCell");
	var separatorView = new sap.ui.commons.TextView({id:that.getId() + '--' + 'separator',text:"|"});
	separatorCell.addContent(separatorView);
	separatorCell.setPadding(sap.ui.commons.layout.Padding.None);
	var oBorderLayout2 = new sap.ui.commons.layout.BorderLayout(that.getId() + '--'+ 'borderLayout', {width: "100%", height: "40px"});
	//oBorderLayout2.addStyleClass("sapUIExtInboxRRToolBarStyle");

//	var settingsButton = that._createRRSettingsMenuButton();
	 //Commenting this out as it creates a scrollbar in IE8, instead creating row with empty textview.
//	oBorderLayout2.createArea(sap.ui.commons.layout.BorderLayoutAreaTypes.top, new sap.ui.commons.TextView({text : ' '}));
//	oBorderLayout2.setAreaData(sap.ui.commons.layout.BorderLayoutAreaTypes.top, {
//		size : "10px",
//		contentAlign : "center",
//		visible : true
//	});
  
	/*oBorderLayout2.createArea(sap.ui.commons.layout.BorderLayoutAreaTypes.begin, settingsButton);
	oBorderLayout2.setAreaData(sap.ui.commons.layout.BorderLayoutAreaTypes.begin, {
		size : "20%",
		contentAlign : "left",
		visible : true
	});*/

	oBorderLayout2.createArea(sap.ui.commons.layout.BorderLayoutAreaTypes.center, oPaginator);
	oBorderLayout2.setAreaData(sap.ui.commons.layout.BorderLayoutAreaTypes.center, {
		size :"55%",
		contentAlign : "right",
		visible : true
	});

	oBorderLayout2.createArea(sap.ui.commons.layout.BorderLayoutAreaTypes.end, oSegmentedButtonIconLite);
	oBorderLayout2.setAreaData(sap.ui.commons.layout.BorderLayoutAreaTypes.end, {
		size : "45%",
		contentAlign : "right",
		visible : true
	});
	rowRepeaterToolsMatLayout.createRow(new sap.ui.commons.TextView({text : ' '}));//Fix For Footer scrollbar issue in IE8
	rowRepeaterToolsMatLayout.createRow(oBorderLayout2);
	return rowRepeaterToolsMatLayout;
	
};

sap.uiext.inbox.Inbox.prototype._createCustomAttributesRRViewMatrixLayout = function(customAttributeDefinitionArray,taskDefinitionID, rowNumber) {
	var that = this;
	var scrubbedID = this.inboxUtils.scrub(taskDefinitionID)
//	var oCustomAttributesRRViewMatrixLayout = this._getComponent("cARowRepeaterMatrixLayout"+scrubbedID);
//	if(!oCustomAttributesRRViewMatrixLayout){
		var oCustomAttributesRRViewMatrixLayout = new sap.ui.commons.layout.MatrixLayout({
		    layoutFixed : true,
		    width : "94%"
			});
		oCustomAttributesRRViewMatrixLayout.addStyleClass('sapUIExtInboxCustomAttributesBorder');
	//	oCustomAttributesRRViewMatrixLayout.createRow(new sap.ui.commons.TextView({text: ' '}));
//	}
	
	//TODO: Use this when individual Custom Attribute can be fetched.
	//oCustomAttributesRRViewMatrixLayout.bindElement("/TaskCollection('"+taskDefinitionID+"')");
	var numberOfCustomAttrValues = customAttributeDefinitionArray.length;
	
	var oModel = this.getCoreModel();
	//check if columns present and if not add
	for(var counter = 1; counter<= numberOfCustomAttrValues; counter++){
				
				var index = counter - 1;		
				
				var oLabelID =  that.getId() + '--' + 'customattr'+'-label-'+'-row-'+rowNumber+'-index-' + index;
				var oTViewID = that.getId() + '--' +  'customattr'+'-value-'+'-row-'+rowNumber+'-index-' + index;
			
				var oLabel = sap.ui.getCore().byId(oLabelID);
				var oTView = sap.ui.getCore().byId(oTViewID);
				
				if(!oLabel){
					oLabel = new sap.ui.commons.Label({id :oLabelID,text : customAttributeDefinitionArray[index].Label}).data("customAttrName", customAttributeDefinitionArray[index].Name);
				}
				
				if(!oTView){
					oTView = new sap.ui.commons.TextView({id : oTViewID}).data("customAttrName",customAttributeDefinitionArray[index].Name);
				}
				//oTView.bindText(customAttributeDefinitionArray[index].Value);
				oTView.bindText("CustomAttributeData", function(value){
					var path = that.sCollectionPath.replace(/^\//,"")+"('"+this.data("customAttrName")+"')";
					var returnValue = "";
					if(value !== undefined && value !== "" && value !== null){
						for(var i=0;i<value.length;i++){
							//refine this
							var oCustomAttribute = oModel.oData[value[i]] === undefined ? oModel._original_data[value[i]] : oModel.oData[value[i]];
							//TODO due to search oModel.oData values are getting replaced. So adding a workaround here. Needs to be properly investigated.
							if(oCustomAttribute.Name === this.data("customAttrName")){
								returnValue = oCustomAttribute.Value;
							}
						}
					}
					return returnValue;
				   	});
				oLabel.setLabelFor(oTView);
				//====Layout Logic STARTS===
				
				var custAttrLblValueMatLay = that._createLabelValueMatrixLayout(oLabel, oTView);
				
				if(counter % 3 === 1) {
					var oBorderLayout = new sap.ui.commons.layout.BorderLayout({width: "100%", height: "18px"});
					oBorderLayout.createArea(sap.ui.commons.layout.BorderLayoutAreaTypes.begin, custAttrLblValueMatLay);
					oBorderLayout.setAreaData(sap.ui.commons.layout.BorderLayoutAreaTypes.begin, {
						size : "33.33%",
						contentAlign : "left",
						visible : true
					});
				}

				if(counter % 3 === 2) {
					oBorderLayout.createArea(sap.ui.commons.layout.BorderLayoutAreaTypes.center, custAttrLblValueMatLay);
					oBorderLayout.setAreaData(sap.ui.commons.layout.BorderLayoutAreaTypes.center, {
						size : "33.33%",
						contentAlign : "center",
						visible : true
					});
			 if(counter === numberOfCustomAttrValues){
				 oBorderLayout.createArea(sap.ui.commons.layout.BorderLayoutAreaTypes.end, new sap.ui.commons.TextView({text:' '}));
				 oBorderLayout.setAreaData(sap.ui.commons.layout.BorderLayoutAreaTypes.end, {
						size : "33.33%",
						contentAlign : "left",
						visible : true
					});
					}
				}

				if(counter % 3 === 0) {
					oBorderLayout.createArea(sap.ui.commons.layout.BorderLayoutAreaTypes.end, custAttrLblValueMatLay);
					oBorderLayout.setAreaData(sap.ui.commons.layout.BorderLayoutAreaTypes.end, {
						size : "33.33%",
						contentAlign : "left",
						visible : true
					});
				}
				//====Layout Logic ENDS====
				var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
				oCell.addStyleClass("sapUiExtInboxPaddingBottom");//This is to reduce the spacing between two rows of custom attributes in Row repeater.
				oCell.addContent(oBorderLayout);
				oCustomAttributesRRViewMatrixLayout.createRow(oCell);
	}
	
	return oCustomAttributesRRViewMatrixLayout;
};

sap.uiext.inbox.Inbox.prototype._currentViewElement = function() {
	var oTable = sap.ui.getCore().byId(this.getId() + '--' + 'listViewTable');
	var oRowRepeater = sap.ui.getCore().byId(this.getId() + '--' + 'tasksRowRepeater');
	
	var oBindingInfo, currentViewElement;
	if(this.currentView === sap.uiext.inbox.InboxConstants.tableView){
		currentViewElement = oTable;
	}else if(this.currentView === sap.uiext.inbox.InboxConstants.rowRepeaterView){
		currentViewElement = oRowRepeater;
	}
	return currentViewElement;
};

sap.uiext.inbox.Inbox.prototype._updatePaginator = function(length) {
	var oPaginator = this._getComponent('rowRepeaterPaginator');
	var oSegmentedButton = this._getComponent('rowRepeaterRowSettingsSegBtn');
	var rowSettingValue = sap.ui.getCore().byId(oSegmentedButton.getSelectedButton()).getText();
	oPaginator.setNumberOfPages(Math.ceil(length/rowSettingValue));
};

sap.uiext.inbox.Inbox.prototype._createLabelValueMatrixLayout = function(sLabel, sValue){//TODO: Provide dynamic id to the controls.
	sLabel.addStyleClass("sapUiExtInboxCustomAttLabel").setWrapping(false);

	sValue.addStyleClass("sapUiExtInboxCustomAttValue").setWrapping(false);

var oMLCell1 = new sap.ui.commons.layout.MatrixLayoutCell({
	 hAlign : sap.ui.commons.layout.HAlign.Right,
	   vAlign : sap.ui.commons.layout.VAlign.Top,
	  padding: sap.ui.commons.layout.Padding.End,
	  content : [sLabel]
});
var oMLCell2 = new sap.ui.commons.layout.MatrixLayoutCell({
		hAlign : sap.ui.commons.layout.HAlign.Left,
		vAlign : sap.ui.commons.layout.VAlign.Top,
   padding: sap.ui.commons.layout.Padding.Begin, 
	  content : [sValue]
});

return new sap.ui.commons.layout.MatrixLayout().createRow(oMLCell1, oMLCell2);
};

sap.uiext.inbox.Inbox.prototype._getCustomActionsDefinition = function(instanceID, taskDefinitionID,sapOrigin) {
	var that = this;
	var aCustomActionArrayMap = sap.uiext.inbox.InboxConstants.taskDefinitionDecisionOptionsMap;
	var aCustomActionArray = aCustomActionArrayMap[taskDefinitionID];
	if(aCustomActionArray === undefined && instanceID){
		//TODO SAP Origin
		var oModel = this.getCoreModel();
		oModel.read(that.constants.decisionOptionsFunctionImport,null,["InstanceID='"+instanceID+"'&SAP__Origin='"+sapOrigin+"'",that.constants.formatJSONURLParam],false,function(oData, response){
			aCustomActionArray = aCustomActionArrayMap[taskDefinitionID] = oData.results;
		},function(oError){
			//TODO error message
			//that.showMessage("error", that._oBundle.getText("INBOX_MSG_ACTION_FAILED"));
		});
	}
	return aCustomActionArray;
};

sap.uiext.inbox.Inbox.prototype._executeCustomAction = function(oEvent, eventParameters) {
	var decisionKey = oEvent.getSource().data("key");
	var inBox = eventParameters.inbox;
	var view = eventParameters.view;
	
    inBox.showBusyLoader();

    var oListTable, rowContext, oModel;
    
    var selectedIDs = [], selectedContexts = [], selectedSAPOrigins = [];
    var selectedStatus = [];
    var concatSelectedIDs = "'", concatSelectedSAPOrigins = "'";
    var comments = [];
    var selectedID, selectedSAPOrigin;
    // reset search
    inBox.resetSearchCriteria();
    var oModel = inBox.getCoreModel();
    
    if(view === inBox.constants.tableView){
    	oListTable = inBox._getComponent('listViewTable');
        if (oEvent.getSource())
            var selectedIndices = inBox.getlistTableSelectedIndices();
        
        jQuery.each(selectedIndices, function(i, selIndex) {
            rowContext = oListTable.getContextByIndex(selIndex);
            selectedContexts.push(rowContext);
            
            selectedID = oModel.getProperty("InstanceID", rowContext);
            selectedSAPOrigin = oModel.getProperty("SAP__Origin", rowContext);
            
            selectedIDs.push(selectedID);
            selectedSAPOrigins.push(selectedSAPOrigin);
            
            if (i == 0){
                concatSelectedIDs = concatSelectedIDs + selectedID;
                concatSelectedSAPOrigins = concatSelectedSAPOrigins + selectedSAPOrigin;
            }
            else{
                concatSelectedIDs = concatSelectedIDs + ";" + selectedID;
                concatSelectedSAPOrigins = concatSelectedSAPOrigins + ";" + selectedSAPOrigin;
            }
        });
        concatSelectedIDs = concatSelectedIDs + "'";
        concatSelectedSAPOrigins = concatSelectedSAPOrigins + "'";
   }else if(view === inBox.constants.rowRepeaterView){
	   var oContext = oEvent.getSource().getBindingContext();
	   selectedID = oModel.getProperty("InstanceID", oContext);
       selectedSAPOrigin = oModel.getProperty("SAP__Origin", oContext);
       
       selectedIDs.push(selectedID);
       selectedSAPOrigins.push(selectedSAPOrigin);
       
	   concatSelectedIDs = concatSelectedIDs + selectedID +"'";
	   concatSelectedSAPOrigins = concatSelectedSAPOrigins + selectedSAPOrigin +"'";
   }
	
   
	//TODO SAP Origin
	/*var urlParams = ["InstanceID="+concatSelectedIDs,"DecisionKey='"+decisionKey+"'","$format=json"];
	if(comments !== undefined && comments !== null)
		urlParams.push("comments='"+comments+"'");
	oModel.read("Decision",null,urlParams,false,function(oData, response){
		inBox.showMessage("success", inBox._oBundle.getText("INBOX_MSG_ACTION_SUCCESS"));
		//try single update here...
	},function(oError){
		inBox.showMessage("error", inBox._oBundle.getText("INBOX_MSG_ACTION_FAILED"));
	});*/
    var IDURIPart, requestURI, requestOptions, status;
    
    if(inBox.isBatchOperationSupported){
    	var oBatchOperation, sPath, aBatchOperations = [];
    	for(var i = 0;i < selectedIDs.length; i ++){
    		sPath = inBox.constants.decisionExecutionFunctionImport + inBox.constants.query + "InstanceID='" + selectedIDs[i] + "'" + inBox.constants.amperSand + "SAP__Origin='" + selectedSAPOrigins[i] + "'" +inBox.constants.amperSand + "DecisionKey='"+ decisionKey + "'" ; 
    		if(comments && comments.length > 0){
    			sPath = sPath + "&Comments='" +  comments[i] +"'";
    		}
        	oBatchOperation = oModel.createBatchOperation(sPath,inBox.httpMethodForAction);
        	aBatchOperations.push(oBatchOperation);
        }
    	oModel.addBatchChangeOperations(aBatchOperations);
    	oModel.submitBatch(function(data,response){
    		   var batchResponses = data.__batchResponses;
    	       var i, len;
    	       var noOfErrors = 0;
    	       for(i = 0, len = batchResponses.length; i < len; i++){
    	           var data = batchResponses[i];
    	           if(data.response.statusCode !== 200 && data.response.statusCode !== 201){
    	        	   noOfErrors = noOfErrors + 1;
    	           }
    	       }
    	       if(noOfErrors > 0){
    	    	   inBox.showMessage("error", noOfErrors + " " + inBox._oBundle.getText("INBOX_MSG_ACTION_FAILED"));
    	       }else{
    	    	   inBox.showMessage("success", inBox._oBundle.getText("INBOX_MSG_ACTION_SUCCESS"));
    	       }
    		},function(error) {
    	        inBox.showMessage("error", inBox._oBundle.getText("INBOX_MSG_ACTION_FAILED"));
    	    },false);
    }else{
	    IDURIPart = inBox.constants.forwardSlash + inBox.constants.decisionExecutionFunctionImport + inBox.constants.query + "InstanceID=" + concatSelectedIDs + inBox.constants.amperSand + "SAP__Origin=" + concatSelectedSAPOrigins + inBox.constants.amperSand + "DecisionKey='"+ decisionKey + "'" 
	    				+ inBox.constants.amperSand + inBox.constants.formatJSONURLParam;
	    if(comments && comments.length > 0)
	    	IDURIPart = IDURIPart + "&comments='"+comments[0]+"'";
	    requestURI = inBox.bpmSvcUrl + IDURIPart;
	    
	    requestOptions = {
	         async:false,
	         requestUri : requestURI,
	         method : inBox.httpMethodForAction,
	         headers : {
	                Accept : inBox.constants.acceptHeaderforJSON,
	                "x-csrf-token" : oModel.oHeaders["x-csrf-token"]
	         }
	    };
	
	    OData.request(requestOptions, function(data, request) {
	            inBox.showMessage("success", inBox._oBundle.getText("INBOX_MSG_ACTION_SUCCESS"));
	            //update
	    }, function(error) {
	    //TODO: use enums for messageType.
	        inBox.showMessage("error", inBox._oBundle.getText("INBOX_MSG_ACTION_FAILED"));
	    });
    }
    
    inBox.applyFilterOnResponse(selectedContexts);
    inBox.resetMessages = false;
};

sap.uiext.inbox.Inbox.prototype._deleteCustomActions = function(customActionsDefinition) {
	if(this.currentView === this.constants.tableView){
		this._deleteCustomActionsForTableView();
	}else if(this.currentView === this.constants.rowRepeaterView){
		this._deleteCustomActionsForRowRepeaterView();
	}
};

sap.uiext.inbox.Inbox.prototype._createCustomActions = function(customActionsDefinition,enableButtons) {
	if(this.currentView === this.constants.tableView){
		this._createCustomActionsForTableView(customActionsDefinition,enableButtons);
	}else if(this.currentView === this.constants.rowRepeaterView){
		this._createCustomActionsForRowRepeaterView(customActionsDefinition,enableButtons);
	}
};

sap.uiext.inbox.Inbox.prototype._deleteCustomActionsForTableView = function(customActionsDefinition) {
	var that = this;
	var oActionButtonsToolBar = this._getActionButtonToolBarForTableView();
	//Get All ToolBar Iems
	var oToolBarItems = oActionButtonsToolBar.getItems();
	for(var i=0; i< oToolBarItems.length; i++){
		var oToolBarItem = oToolBarItems[i];
		if(oToolBarItem instanceof sap.ui.commons.Button &&  oToolBarItem.data("type") === that.constants.customAction){
			oActionButtonsToolBar.removeItem(oToolBarItem);
			oToolBarItem.destroy();
		}
		if(oToolBarItem instanceof sap.ui.commons.ToolbarSeparator &&  oToolBarItem.data("separatorFor") === that.constants.customAction){
			oActionButtonsToolBar.removeItem(oToolBarItem);
			oToolBarItem.destroy();
		}
	}
};


sap.uiext.inbox.Inbox.prototype._createCustomActionsForTableView = function(customActionsDefinition,enableButtons) {
	var that = this;
	var actionButtonsToolBar = this._getActionButtonToolBarForTableView();
	var noOfCustomActions = customActionsDefinition.length;
	var index = 3;
	if(noOfCustomActions > 0){
		var seprtr = new sap.ui.commons.ToolbarSeparator();
		seprtr.data("separatorFor",that.constants.customAction);
		actionButtonsToolBar.insertItem(seprtr,index);
		index++;
	}
	for(var i=0; i < noOfCustomActions; i++){
		var action = customActionsDefinition[i];
		var customActionButton = new sap.ui.commons.Button(this.getId() + '--' + action.DecisionKey+'button', {
		            text : action.DecisionText,
		            enabled : enableButtons,
		            tooltip :  action.Description
		        }).data("type",that.constants.customAction).data("key",action.DecisionKey);
		customActionButton.attachPress({inbox:that,view:that.constants.tableView}, that._executeCustomAction);
		        actionButtonsToolBar.insertItem(customActionButton,index);
		        index++;
	}
};

sap.uiext.inbox.Inbox.prototype._createCustomActionsForRowRepeaterView = function(customActionsDefinition) {
	var that = this;
	var actionButtonsToolBar = this._getActionButtonToolBarForTableView();
	var noOfCustomActions = customActionsDefinition.length;
	
	var oRowRepeaterTemplate = this._getComponent('rrMainMatrixLayout');
	var oRowRepeaterTemplateActionLayout = this._getComponent('taskActionMatrixLayout');
	var actionRow = oRowRepeaterTemplateActionLayout.getRows()[0];
	for(var i=0; i < noOfCustomActions; i++){
		var action = customActionsDefinition[i];
		var dotLabelCell = new sap.ui.commons.layout.MatrixLayoutCell({
			id : that.getId() + '--' + 'dotLabelCell' + action.DecisionKey,
			hAlign: sap.ui.commons.layout.HAlign.Center,
			vAlign: sap.ui.commons.layout.VAlign.Top,
			colSpan : 1 });
		//DOT Seperator b/w Claim and Release Action Links
		var dotLabel = new sap.ui.commons.Label(that.getId() + '--' + 'dotLabel' + action.DecisionKey,{text:sap.uiext.inbox.InboxConstants.DOT});
		dotLabel.addStyleClass("sapUIExtInboxDotSeperatorStyle");
		dotLabel.data("separatorFor",that.constants.customAction);
		dotLabelCell.addContent(dotLabel);
		actionRow.addCell(dotLabelCell);
		
		var customActionCell = new sap.ui.commons.layout.MatrixLayoutCell({
			id : that.getId() + '--' + 'customActionCell' + action.DecisionKey,
			hAlign: sap.ui.commons.layout.HAlign.Left,
			vAlign: sap.ui.commons.layout.VAlign.Bottom,
			colSpan : 1 });
		
		var customActionLink = new sap.ui.commons.Link(that.getId() + '--' + "rrView" + action.DecisionKey + "link",{tootltip:action.Description});
		customActionLink.data("type",that.constants.customAction);
		customActionLink.data("key",action.DecisionKey);
		customActionLink.addStyleClass("sapUiExtInboxLnkNoUnderline");
		customActionLink.setText(action.DecisionText);
		customActionLink.attachPress({inbox:that,view:that.constants.rowRepeaterView,action:action.DecisionKey}, that._executeCustomAction);
		customActionCell.addContent(customActionLink);
		actionRow.addCell(customActionCell);
	}
};

sap.uiext.inbox.Inbox.prototype._deleteCustomActionsForRowRepeaterView = function(customActionsDefinition) {
	var that = this;
	var oRowRepeaterTemplate = this._getComponent('rrMainMatrixLayout');
	var oRowRepeaterTemplateActionLayout = this._getComponent('taskActionMatrixLayout');
	var actionRow = oRowRepeaterTemplateActionLayout.getRows()[0];
	var actionCells = actionRow.getCells();
	for(var i=0; i < actionCells.length; i++){
		var oActionCell = actionCells[i];
		var oActionContent = oActionCell.getContent()[0];
		if(oActionContent instanceof sap.ui.commons.Link &&  oActionContent.data("type") === that.constants.customAction || oActionContent instanceof sap.ui.commons.Label &&  oActionContent.data("separatorFor") === that.constants.customAction){
			actionRow.removeCell(oActionCell);
			oActionCell.destroy();
			oActionContent.destroy();
		}
	}
};


//With Refactor this code moves to the TableView getToolBar
sap.uiext.inbox.Inbox.prototype._getActionButtonToolBarForTableView = function() {
	return this._getComponent("actionButtonsToolbarContainer");
};

sap.uiext.inbox.Inbox.prototype._modifyListBindingForExpand= function(add,paramName){
	var constants = this.constants;
	var currentViewElement, oListBinding;
	 if(this.currentView === this.constants.tableView){
	    	currentViewElement = sap.ui.getCore().byId(this.getId() + '--' + 'listViewTable');
	    	if (currentViewElement !== undefined) {
	    		oListBinding = currentViewElement.getBinding('rows');
	    	}
	    }else if(this.currentView === this.constants.rowRepeaterView){
	    	currentViewElement = sap.ui.getCore().byId(this.getId() + '--'+'tasksRowRepeater');
	    	if (currentViewElement !== undefined) {
	            oListBinding = currentViewElement.getBinding('rows');
	    	}
	    }
	var mParameters = oListBinding.mParameters;
	
	if(!mParameters){
		oListBinding.mParameters = {expand:""};
	}
	
	var expandParameters = oListBinding.mParameters.expand;
	
	if(add){
		if(expandParameters){
			if(expandParameters.indexOf(constants.customAttributeNavigationParam) === -1){
				if(expandParameters.length > 0){
					expandParameters = expandParameters + "," ;
				}
				expandParameters = expandParameters + paramName;
			}
		}else{
			expandParameters = paramName;
		}
	}else{
		if(expandParameters && expandParameters.length>0){
			var index = expandParameters.indexOf(paramName);
			if(index >= 0){
				expandParameters = expandParameters.charAt(index - 1) === "," ? expandParameters.replace("," + paramName, '') :expandParameters.replace(paramName, '');
			}
		}
	}
	
	if(expandParameters.length > 0){
		oListBinding.mParameters.expand = expandParameters;
	}else{
		delete oListBinding.mParameters.expand;
	}
	
	
	function getCustomParams(mParameters){
		var aCustomParams = [],
		mSupportedParams = {
				expand: true,
				select: true
		};
		
		for (var sName in mParameters) {
			if (sName in mSupportedParams) {
				aCustomParams.push("$" + sName + "=" + jQuery.sap.encodeURL(mParameters[sName]));
			}
		}
		return aCustomParams.join("&");
	}
	
	oListBinding.sCustomParams = getCustomParams(oListBinding.mParameters);
};

sap.uiext.inbox.Inbox.prototype.populateRefreshButtonContainer = function(refreshButtonContainer) {
	var that = this;
  var refreshViewCell = new sap.ui.commons.layout.MatrixLayoutCell({
      id : this.getId() + '--' + "refreshButtonCell"
  });
  var refreshButton = new sap.ui.commons.Image(this.getId() + '--' + "refreshButton", {
    tooltip : this._oBundle.getText("INBOX_REFRESH_BUTTON_TOOLTIP"),
    decorative : false
  });
  
  refreshButton.setSrc(this._imgResourcePath + sap.uiext.inbox.InboxConstants.refreshImage);
  refreshButton.attachPress(that, that.refreshTaskList);
  //refreshButton.addStyleClass("sapUiExtInboxRefreshButtonHeight");
  refreshViewCell.addContent(refreshButton);
  refreshViewCell.setPadding(sap.ui.commons.layout.Padding.None);

  
  var refreshedOnTextCell = new sap.ui.commons.layout.MatrixLayoutCell({
    id : this.getId() + '--' + "refreshedOnTextCell",
    vAlign: sap.ui.commons.layout.VAlign.Bottom,
    padding: sap.ui.commons.layout.Padding.Top
  });  
  // var separatorCell = new sap.ui.commons.layout.MatrixLayoutCell().setSeparation(sap.ui.commons.layout.Separation.Small);
  var refreshedOnText = new sap.ui.commons.Label(this.getId() + '--' + "refreshOnText");
  that.lastRefreshedOnDateTime = new Date();
  var refreshedTime = that._getFormattedRefreshOnDateTime();
  refreshedOnText.setText(that._oBundle.getText("INBOX_TEXT_ON") + sap.uiext.inbox.InboxConstants.SPACE + refreshedTime);
  refreshedOnText.setTooltip(that._getFormattedTooltipForLastRefreshedTime());
  refreshedOnText.addStyleClass("sapUiExtInboxRefreshedOnStyle");
  refreshedOnTextCell.addContent(refreshedOnText);
	refreshButtonContainer.createRow(refreshViewCell, new sap.ui.commons.Label({text:sap.uiext.inbox.InboxConstants.SPACE}), refreshedOnTextCell);
};

sap.uiext.inbox.Inbox.prototype. _getFormattedRefreshOnDateTime = function(){
	 var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: sap.uiext.inbox.InboxConstants.REFRESH_ON_DATE_PATTERN}); //Refreshed on Format "Sep 16, 17:22"
	 return oDateFormat.format(this.lastRefreshedOnDateTime);
}; 

sap.uiext.inbox.Inbox.prototype._getFormattedTooltipForLastRefreshedTime = function(){
	var oTooltipDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({style : "medium"});
	return oTooltipDateFormat.format(this.lastRefreshedOnDateTime);
};	

sap.uiext.inbox.Inbox.prototype._createRRSettingsMenuButton = function(){
	var that = this;
	 var settingsButton = sap.ui.getCore().byId(this.getId() + '--' + 'rrSettingsButton');
	 //Creating Settings Button
	 if (!settingsButton) {
		 settingsButton = new sap.ui.commons.MenuButton(that.getId() + '--' + "rrSettingsButton", {
		 tooltip : that._oBundle.getText("INBOX_SETTINGS_BUTTON_TOOLTIP"),
		 icon : that._imgResourcePath + sap.uiext.inbox.InboxConstants.settingsImage,
		 iconHovered: this._imgResourcePath + sap.uiext.inbox.InboxConstants.settingsImageHover,
     iconSelected: this._imgResourcePath + sap.uiext.inbox.InboxConstants.settingsImageHover,
		 lite : true
		});
		//settingsButton.addStyleClass("sapUiExtInboxToolbarRight");
	//	settingsButton.addStyleClass("sapUiExtInboxSettingsButton");
				//Creating the menu Again
		var inboxSettingsMenu = new sap.ui.commons.Menu(that.getId() + '--' +'rrSettingsMenu', {tooltip: that._oBundle.getText("INBOX_SETTINGS_BUTTON_TOOLTIP")});
		settingsButton.setMenu(inboxSettingsMenu);
		settingsButton.attachItemSelected(that, that.menuButtonActionEvent); 
		var manageSubstitutionMenuItem = new sap.ui.commons.MenuItem(this.getId() + '--' + "rrManageSubstitutionMI",{
		text: this._oBundle.getText("INBOX_MANAGE_SUBSTITUTION_RULES_MENU_ITEM"),
		tooltip: this._oBundle.getText("INBOX_MANAGE_SUBSTITUTION_RULES_MENU_ITEM")
		});
		inboxSettingsMenu.addItem(manageSubstitutionMenuItem);
	 }
	 return settingsButton;
};

sap.uiext.inbox.Inbox.prototype._executeForwardAction = function(oEvent, mParameters){
	var linkSource = oEvent.getSource();
	var inbox = mParameters.inbox;
	var dynamicId = inbox.getId() + '--';
	var forwardTasksPopUp = sap.ui.getCore().byId(dynamicId + "forwardTasksPopUp");
	var oTable = sap.ui.getCore().byId(dynamicId + "userTable"); 
	if(forwardTasksPopUp===undefined){
		var dLayout = new sap.ui.commons.layout.MatrixLayout({
			id : dynamicId + 'dLayout',
			layoutFixed : true,
			width : '100%',
			columns : 2,
			widths : ['91%', '9%']
		});

		var searchFld = new sap.ui.commons.TextField({
			id : dynamicId + 'searchF',
			value: inbox._oBundle.getText("INBOX_SEARCH_FOR_A_COLLEAGUE"),
			editable : true,
			width : '100%'});
		
		searchFld.addStyleClass("sapUiExtInboxValueHelpTextStyle");
		searchFld.onfocusin = function(){
			searchFld.removeStyleClass("sapUiExtInboxValueHelpTextStyle");
			if(searchFld.getLiveValue() === inbox._oBundle.getText("INBOX_SEARCH_FOR_A_COLLEAGUE")){
				searchFld.setValue("");
			}
		};
		searchFld.onfocusout = function(){
			if(searchFld.getLiveValue() === ""){
				searchFld.addStyleClass("sapUiExtInboxValueHelpTextStyle");
				searchFld.setValue(inbox._oBundle.getText("INBOX_SEARCH_FOR_A_COLLEAGUE"));
			}else{
				searchFld.setValue(searchFld.getLiveValue());
			}
		};

		//searchLabel.setLabelFor(searchFld);
		var goBtn = new sap.ui.commons.Button(dynamicId + "goBtn",{
			text : inbox._oBundle.getText("SUBSTITUTION_USERS_PICKLIST_SEARCH_GO_BUTTON"),//"Go",
			tooltip : inbox._oBundle.getText("SUBSTIUTION_RULE_SEARCH_FOR_USERS"),//"Search For Users",
			press:function(oEvent){
				var searchTerm = sap.ui.getCore().byId(dynamicId + 'searchF').getValue();
				var oFilter = [];
				var filter = new sap.ui.model.Filter("SearchPattern", sap.ui.model.FilterOperator.EQ, searchTerm);
				oFilter.push(filter);
				oTable.bindRows("/UserInfoCollection", null, oFilter);//fetch from configration, not to be hard coded.
		}
		});

		dLayout.createRow(searchFld, goBtn);
		var users = {
				collection: "UserInfoCollection", //fetch from configration, not to be hardcoded.
				propertiesLabel: [inbox._oBundle.getText("SUBSTITUTION_USERS_PICKLIST_LOGONID"),
				                  inbox._oBundle.getText("SUBSTITUTION_USERS_PICKLIST_NAME")],
				properties: ["UniqueName", "DisplayName"]
		};
		if(oTable === undefined){
			oTable = new sap.ui.table.Table(dynamicId + "userTable",{selectionMode: sap.ui.table.SelectionMode.Single});
		}
		oTable.setModel(inbox.getModel());
		//oTable.setTitle( "User Table");
		oTable.setVisibleRowCount(5);
		oTable.bDynamic=true;
		for (var i = 0; i <= users.properties.length-1; i++) {
			oTable.addColumn(
					new sap.ui.table.Column().
					setLabel(new sap.ui.commons.Label({text: inbox._oBundle.getText(users.propertiesLabel[i]),design : sap.ui.commons.LabelDesign.Bold })).
					setTemplate(new sap.ui.commons.TextField({
						editable: false,
						value: {path: users.properties[i]}}))
			);
		}

		var dLayoutCont = new sap.ui.commons.layout.VerticalLayout(dynamicId + "userDialogVLayout", {width:"100%"});
		dLayoutCont.insertContent(dLayout, 0);
		dLayoutCont.insertContent(oTable, 1);
		var selUserUniqueName;
		forwardTasksPopUp = new sap.ui.commons.Dialog(dynamicId + "forwardTasksPopUp", {modal: true,
			title : inbox._oBundle.getText("INBOX_FORWARD_SELECTED_TASKS"),//"Search For Users",
			content:[dLayoutCont],
		//	opener : sap.ui.getCore().byId(this.getId() + '--' + 'forwardActionButton'),
			buttons:[new sap.ui.commons.Button(dynamicId + "forwardTasksPopUpFrwBtn",{text: inbox._oBundle.getText("INBOX_ACTION_BUTTON_FORWARD"),press:function(pressEvent){
				var table = sap.ui.getCore().byId(dynamicId + "userTable");
				var selIndex = table.getSelectedIndex();
				var rowContext = table.getContextByIndex(selIndex);
				var tabModel = sap.ui.getCore().byId(dynamicId + 'userTable').getModel();
				var selUsesDisplayName = tabModel.getProperty("DisplayName", rowContext);
				if(selUsesDisplayName === null)
					selUsesDisplayName = "";
				selUserUniqueName = tabModel.getProperty("UniqueName", rowContext);
				var parentEvent = new sap.ui.base.Event();
				parentEvent.oSource = linkSource; 
				parentEvent.mParameters = {};
				inbox.executeActionOnTask(parentEvent,{inbox:inbox,view:mParameters.view,action:"Forward",forwardTo:selUserUniqueName,source:linkSource});
				forwardTasksPopUp.close();
				forwardTasksPopUp.destroy();
			}
			})]
		});
	}
	forwardTasksPopUp.setWidth("400px");
	forwardTasksPopUp.open();

};

sap.uiext.inbox.Inbox.prototype._getExpandParameters = function(){
	var expand = "";
	if(this.showTaskDescription){
	    	expand = "Description";
	}
	if(this.isCustomAttributesEnabled){
		if(expand.length > 0){
			expand = expand + ",";
	    }
		expand = expand + "CustomAttributeData";
	}
	return expand;
};

sap.uiext.inbox.Inbox.prototype._getFilterArray = function(){
	var oFilter = [];
	for ( var item in this.filtersToApply) {
		var filter = this.filtersToApply[item];
		if(jQuery.isArray(filter)){
			oFilter = oFilter.concat(filter)
		}else
			oFilter.push(filter);
	}
	return oFilter;
};

sap.uiext.inbox.Inbox.prototype._getSelectedItemfromKey = function(oTaskTypefilterList, selectedKey){
//need to check if with the key we can store an object. This is too much of an overhead.
var aItems = oTaskTypefilterList.getItems();
var key = selectedKey;
var sapOrigin;

for (var j = 0; j < aItems.length; j++) {
if (key === aItems[j].getKey()) {
		return aItems[j];
		//sapOrigin = aItems[j].data("SAP__Origin"); 
	}
}
};

sap.uiext.inbox.Inbox.prototype._resetFlags = function(){
	this.isSubstitutionEnabled = false;
    this.isCustomAttributesEnabled = false;
    this.isCustomActionsEnabled = false;
    this.showTaskDescription = false;
};

sap.uiext.inbox.Inbox.prototype._createForwardActionLinkCell = function(){
	var that = this; 
	var forwardActionCell = new sap.ui.commons.layout.MatrixLayoutCell({
    	id : that.getId() + '--' + 'forwardActionCell',
    	hAlign: sap.ui.commons.layout.HAlign.Left,
    	vAlign: sap.ui.commons.layout.VAlign.Bottom,
    	colSpan : 1 });
    
    var forwardActionLink = new sap.ui.commons.Link(that.getId() + '--' + "rrViewForwardAction",{visible:false, tootltip:that._oBundle.getText("INBOX_ACTION_BUTTON_FORWARD")});
    forwardActionLink.addStyleClass("sapUiExtInboxLnkNoUnderline");
    forwardActionLink.bindProperty("enabled","Status",function(value){
    	if(value !== null){
    		if(value === "RESERVED" || value === "IN_PROGRESS") 
    			return true;
    		else if(value === "COMPLETED"){
    			this.setVisible(false);
    		//	sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator2").setVisible(false);
    		}
    	}
    	return false; 
   });
   
	var isForwardSupported = false;
	if(that.isForwardActionEnabled) {
		forwardActionLink.bindProperty("visible","SupportsForward",function(value){
			isForwardSupported = value;
			if(isForwardSupported!==null && !isForwardSupported) {
				//	if(sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator2"))
				//sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator2").setVisible(false);
			}
			return isForwardSupported;
		});
		
		if(isForwardSupported) { 
			forwardActionLink.bindProperty("visible","Status",function(value){
				if((value != null) && (value === "COMPLETED")){
					//if(sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator2"))
					//sap.ui.getCore().byId(that.getId() + "--" + "dotSeparator2").setVisible(false);
					return false;
				}
				return true;
			});
	} 
}
    forwardActionLink.setText(that._oBundle.getText("INBOX_ACTION_BUTTON_FORWARD"));
    forwardActionLink.attachPress({inbox:that, view:that.constants.rowRepeaterView}, that._executeForwardAction);
    forwardActionCell.addContent(forwardActionLink);
    
   return  forwardActionCell;
};

/*sap.uiext.inbox.Inbox.prototype._enableForwardActionSupport = function(){
	
	this.isForwardActionEnabled = true;
	
	var forwardActionButton = sap.ui.getCore().byId(this.getId() + '--' + 'forwardActionButton');
	var forwardActionLink = sap.ui.getCore().byId(this.getId() + '--' + 'rrViewForwardAction');
	var dotSeperator = sap.ui.getCore().byId(this.getId() + '--' + 'dotSeparator2');

	if(forwardActionButton && this.constants.tableView){
		forwardActionButton.setVisible(true);
	}
	if((forwardActionLink && dotSeperator) & this.constants.rowRepeaterView){
		forwardActionLink.setVisible(true);
		dotSeperator.setVisible(true);
	}
	
};*/ //TODO: Remove it 

sap.uiext.inbox.Inbox.prototype._setInboxFiltersVisibility= function(visiblility){
	if(visiblility ===false || visiblility === true){
		sap.ui.getCore().byId(this.getId() + '--' + "filterViewButton").setVisible(visiblility);
		sap.ui.getCore().byId(this.getId() + '--' + "filterComboBox1").setVisible(visiblility);
		sap.ui.getCore().byId(this.getId() + '--' + "filterComboBox2").setVisible(visiblility);
		sap.ui.getCore().byId(this.getId() + '--' + "filterComboBox3").setVisible(visiblility);
	}
};
sap.uiext.inbox.Inbox.prototype._setInboxViewSelectionVisibility = function(visiblility){
	if(visiblility === false || visiblility === true){
		sap.ui.getCore().byId(this.getId() + '--' + "tableViewImage").setVisible(visiblility);
		sap.ui.getCore().byId(this.getId() + '--' + "rrViewImage").setVisible(visiblility);
	}
};

sap.uiext.inbox.Inbox.prototype.resizeColumns=function(){
	var that=this;
	var width=0;
	var oTable= sap.ui.getCore().byId(that.getId() + '--' + 'listViewTable');
	var cols= oTable.getColumns();
	var taskTitleColumn="";
	jQuery.each(cols,function(index,column){
		if(that.absId(column.getId())==="TaskTitle"){
			taskTitleColumn= column;
			return false;
		}	
	});
		if(taskTitleColumn && (taskTitleColumn.getVisible()===true)&&((cols.length)&&(100/cols.length<25))){
			taskTitleColumn.setWidth("20%");
			width=100/(cols.length-1);
			jQuery.each(cols,function(index,column){
				if(that.absId(column.getId())!=="TaskTitle"){
					column.setWidth(width+"%");
				}	
				
			});
			
		}
};

sap.uiext.inbox.Inbox.prototype._isCompletedTasksSelected = function(){
	var dropdownbox =  this._getComponent('filterComboBox2');
    var isCompTasksSelected = false;
    if(dropdownbox.getSelectedItemId() === this.getId()+'--'+'li_completedTasks'){
        isCompTasksSelected = true;
    }
    return isCompTasksSelected; 
};


sap.uiext.inbox.Inbox.prototype._isDrillDownFilterSelected = function(filter){
	var bFilterApplied = false;

	var currentViewElement = this._currentViewElement();
    var currentViewElementBinding = currentViewElement.getBinding('rows');
    
	if(currentViewElementBinding &&  currentViewElementBinding.sFilterParams && currentViewElementBinding.sFilterParams.indexOf(filter) !== -1)
		bFilterApplied = true;
	
	return bFilterApplied;
};