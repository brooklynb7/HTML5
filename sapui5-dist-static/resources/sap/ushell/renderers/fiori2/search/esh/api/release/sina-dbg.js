/*
 * SAP InA UI Toolkit DU - New Wave Search and Analytics
 * version 0.0.0 - 2013-10-21 - commit unknown (inofficial dev version)
 * http://help.sap.com/hana_platform
 * Copyright (c) 2013 SAP AG; All rights reserved
 */

 /*
 * @file Proxy class to buffer InA JSON requests/responses.
 * @author Mathias Baumann
 * @namespace sap.bc.inauitk
 * @copyright Copyright (c) 2012 SAP AG. All rights reserved.
 */
(function($){
    "use strict";
var global = window;

    // =========================================================================
    // create packages
    // =========================================================================
    global.sap = global.sap || {};
    global.sap.bc = global.sap.bc || {};
    global.sap.bc.inauitk = global.sap.bc.inauitk || {};
    var inauitk = global.sap.bc.inauitk;
    var module = inauitk;
    module.Proxy = function(){this.init.apply(this,arguments);};
    // var log;
    // if(inauitk.Log){
    //     log = new inauitk.Log("proxy");
    // }
    // else if(global.console){
    //     log = global.console;
    //     log.debug = log.info;
    // }

    // =========================================================================
    // import packages
    // =========================================================================
    var config = global.sap.bc.inauitk.config;

    //-----------------------------------------------------------------------------
    // Receives service calls from data boxes and forwards them to server side, either
    // as single GET requests or as POST with GETs as payload.
    //-----------------------------------------------------------------------------
    module.inaReqResBuffer = {};

    module.Proxy.prototype = {

        init : function(properties) {
            var self = this;
            self.properties = properties || {};
            self.xsrfToken = "";
            self.properties.cachelifetime = self.properties.cachelifetime || 0;
            // log.debug('sina: cachelifetime is '+self.properties.cachelifetime);
            self.properties.httpMethod = self.properties.httpMethod || 'post';
            // log.debug('sina: httpMethod is '+self.properties.httpMethod);
            // adjust cachelifetime in config.js, not here!
            if(self.properties.cachelifetime>0){
                global.window.setInterval(function(){
                    // log.debug("Deleting request buffer");
                    module.inaReqResBuffer = {};
                },self.properties.cachelifetime);
            }
        },

        /**
         * send an ajax request to the server if the request wasn't cached already
         * @param  {Object} request see @link http://api.jquery.com/jQuery.ajax/
         * @return {Object} returns jQuerys jqXHR Object. Or in case of a cache
         * hit it will return a clone of jQuerys jqXHR Object which supports
         * only done and fail callbacks.
         */
        ajax : function(request) {
            var self = this;
            var inaRequestString = JSON.stringify(request.data);
            if(self.properties.cachelifetime>0){
                var inaResponseString = module.inaReqResBuffer[inaRequestString];
                if(inaResponseString){
                    // use response from buffer
                    var jqXHRClone = {};
                    jqXHRClone.done = function(callback){
                        callback(inaResponseString);
                    };
                    jqXHRClone.fail = function(callback){

                    };
                    return jqXHRClone;
                }
            }
            request.processData = request.processData || false;
            request.type = request.type || self.properties.httpMethod || "POST";
            if(inaRequestString){
                if(request.type.toLowerCase()==='get'){
                    request.data = 'Request=' + inaRequestString;
                }
                else {
                    request.data = inaRequestString;
                }
            }
            if(!self.xsrfToken){
                request.headers = {  "X-CSRF-Token": "Fetch"  };
            }
            else{
                request.headers = {  "X-CSRF-Token": self.xsrfToken  };
            }
            var jqXHR = $.ajax(request);
            jqXHR.done(function(){
                self.xsrfToken = jqXHR.getResponseHeader("X-CSRF-Token") || self.xsrfToken || "";
            });
            if(self.properties.cachelifetime>0){
                jqXHR.done(function(data){
                    module.inaReqResBuffer[inaRequestString] = data;
                });
            }
            return jqXHR;
        }

    };

    //create global default proxy with settings from config.js
    var proxyProperties;
    if(config){
        proxyProperties = {
            httpMethod : config.hasOwnProperty("get")?"Get":config.httpMethod,
            cachelifetime : config.cachelifetime
        };

    }

    /** EXPORT **/
    inauitk.proxy = new module.Proxy(proxyProperties);

})(window.$);

/*
 * Simple info access (SINA) API: JSON Templates
 * Package: sap.bc.ina.api.simple.impl.inav2.jsontemplates
 * Copyright (c) 2013 SAP AG. All rights reserved.
 */

(function(global) {"use strict";

    // =========================================================================
    // import packages
    // =========================================================================
    var $ = global.$;
    global.sap = global.sap || {};
    global.sap.bc = global.sap.bc || {};
    global.sap.bc.ina = global.sap.bc.ina || {};
    global.sap.bc.ina.api = global.sap.bc.ina.api || {};
    global.sap.bc.ina.api.impl = global.sap.bc.ina.api.impl || {};
    global.sap.bc.ina.api.impl.inav2 = global.sap.bc.ina.api.impl.inav2 || {};
    global.sap.bc.ina.api.impl.inav2.jsontemplates = global.sap.bc.ina.api.impl.inav2.jsontemplates || {};
    var jsontemplates = global.sap.bc.ina.api.impl.inav2.jsontemplates;
    var module = jsontemplates;

    module.dataSourceMetaDataRequest = {
        "DataSource": {},
        "Options": [ "SynchronousRun" ],        
        "Metadata": { "Context": "Search",
                     "Expand": ["Cube"] },
        "ServiceVersion": 204
    };

    module.catalogRequest = { 
        "DataSource": {
        "ObjectName": "$$DataSources$$",
        "PackageName": "ABAP" 
        },
        "Options": ["SynchronousRun"],
        "Search": {
            "Top": 1000,
            "Skip": 0,
            "OrderBy": [
                          {
                             "AttributeName": "Description",
                             "SortOrder": "ASC"
                          },
                          {
                             "AttributeName": "ObjectName",
                             "SortOrder": "ASC"
                          }
            ],
            "Expand": ["Grid","Items"],
            "Filter":
                {
                    "Selection":{
                        "Operator":{
                            "Code":"And",
                            "SubSelections":[{
                                "MemberOperand":
                                {
                                    "AttributeName":"SupportedService",
                                    "Comparison":"=",
                                    "Value":"Search"
                                }
                            }]
                        }
                    }
                },
                "NamedValues": [{
                    "AttributeName": "ObjectName",
                    "Name": "ObjectName"
                },
                {
                    "AttributeName": "Description",
                    "Name": "Description"
                },
                {
                    "AttributeName": "Type",
                    "Name": "Type"
                }]
        },
        "SearchTerms": "*",
        "ServiceVersion": 204
    };

    module.suggestionRequest = {
        "DataSource": {},
        "Options": [ "SynchronousRun" ],        
        "Suggestions" : { 
            "Expand" : ["Grid","Items"],
            "Precalculated" : false,
            "SearchTerms" : "",
            "AttributeNames" : []
        },
        "ServiceVersion": 204
    };

    module.suggestion2Request = {
        "DataSource": {},
        "Options": [ "SynchronousRun" ],        
        "Suggestions2" : { 
            "Expand" : ["Grid","Items"],
            "Precalculated" : false,
            "AttributeNames" : []
        },
        "ServiceVersion": 204
    };

    module.perspectiveRequest = {
        "DataSource" : {},
        "Options" : 
            ["SynchronousRun"],
            "Search" : { 
                "Expand" : ["Grid", "Items", "ResultsetFacets", "TotalCount"],
                "Filter" : {
                    "Selection" : {
                        "Operator" : {
                            "Code" : "And",
                            "SubSelections" : [ { 
                                "MemberOperand" : { 
                                    "AttributeName" : "$$RenderingTemplatePlatform$$",
                                    "Comparison" : "=", "Value" : "html"
                                }
                            },
                            { 
                                "MemberOperand" : { 
                                    "AttributeName" : "$$RenderingTemplateTechnology$$",
                                    "Comparison" : "=", "Value" : "Tempo"
                                }
                            },
                            { "MemberOperand" : { 
                                "AttributeName" : "$$RenderingTemplateType$$",
                                "Comparison" : "=", "Value" : "ResultItem"
                                }
                            }]
                        }
                    }
                },
                "Top" : 10,
                "Skip" : 0,
                "SearchTerms" : "S*",
                "NamedValues" : [{
                    "Function" : "WhyFound",
                    "Name" : "$$WhyFound$$"
                },
                { 
                    "Function" : "RelatedActions",
                    "Name": "$$RelatedActions$$" 
                }]
            },
            "ServiceVersion": 204
    };
    
    module.perspectiveRequestFactsheet = {
            "DataSource" : {},
            "Options" : 
                ["SynchronousRun"],
                "Search" : { 
                    "Expand" : ["Grid", "Items", "ResultsetFacets", "TotalCount"],
                    "Filter" : {
                        "Selection" : {
                            "Operator" : {
                                "Code" : "And",
                                "SubSelections" : [ { 
                                    "MemberOperand" : { 
                                        "AttributeName" : "$$RenderingTemplatePlatform$$",
                                        "Comparison" : "=", "Value" : "html"
                                    }
                                },
                                { 
                                    "MemberOperand" : { 
                                        "AttributeName" : "$$RenderingTemplateTechnology$$",
                                        "Comparison" : "=", "Value" : "Tempo"
                                    }
                                },
                                { "MemberOperand" : { 
                                    "AttributeName" : "$$RenderingTemplateType$$",
                                    "Comparison" : "=", "Value" : "ResultItem"
                                    }
                                }]
                            }
                        }
                    },
                    "Top" : 10,
                    "Skip" : 0,
                    "SearchTerms" : "S*",
                    "NamedValues" : [{
                        "Function" : "WhyFound",
                        "Name" : "$$WhyFound$$"
                    },
                    { 
                        "AttributeName" : "$$RelatedActions$$" 
                    },
                    { 
                        "AttributeName" : "$$RelatedActions.Proxy$$" 
                    }]
                },
                "ServiceVersion": 204
        };

    // =========================================================================
    // template search request
    // =========================================================================
    module.searchRequest = {
        "DataSource" : {},
        "SearchTerms" : "DUMMY",
        "Search" : {
            "Expand" : ["Grid", "Items", "TotalCount"],
            "Top" : "DUMMY",
            "Skip" : "DUMMY",
            "SelectedValues" : "DUMMY",
            "NamedValues" : [{
                "AttributeName" : "$$ResultItemAttributes$$",
                "Name" : "$$ResultItemAttributes$$"
            },
            { 
                "AttributeName" : "$$RelatedActions$$",
                "Name": "$$RelatedActions$$" 
            }]
        }
    };

    // =========================================================================
    // template chart request
    // =========================================================================
    module.chartRequest = {
        "DataSource" : {},
        "SearchTerms" : "",
        "Analytics" : {
            "Definition" : {
                "Dimensions" : [{
                    "Axis" : "Rows",
                    "Name" : "CATEGORY",
                    "SortOrder" : 1,
                    "Top" : 5
                }, {
                    "Axis" : "Columns",
                    "Name" : "CustomDimension1",
                    "Members" : [{
                        "Aggregation" : "COUNT",
                        "AggregationDimension" : "CATEGORY",
                        "MemberOperand" : {
                            "AttributeName" : "Measures",
                            "Comparison" : "=",
                            "Value" : "COUNT"
                        },
                        "Name" : "COUNT",
                        "SortOrder" : 2
                    }]
                }],
                "Filter" : {}
            }
        }
    };

})(window);

/*
 * @file Simple info access (SINA) API: Filter
 * @namespace sap.bc.ina.api.impl.inav2.filter
 * @copyright Copyright (c) 2013 SAP AG. All rights reserved.
 */

(function(global) {"use strict";

    var executeFilter = function($) {
        // =========================================================================
        // create packages
        // =========================================================================
        if (!$)
        {
            $ = global.$;
        }
        global.sap = global.sap || {};
        global.sap.bc = global.sap.bc || {};
        global.sap.bc.ina = global.sap.bc.ina || {};
        global.sap.bc.ina.api = global.sap.bc.ina.api || {};
        global.sap.bc.ina.api.impl = global.sap.bc.ina.api.impl || {};
        global.sap.bc.ina.api.impl.inav2 = global.sap.bc.ina.api.impl.inav2 || {};
        global.sap.bc.ina.api.impl.inav2.filter = global.sap.bc.ina.api.impl.inav2.filter || {};
        var filter = global.sap.bc.ina.api.impl.inav2.filter;
        var module = filter;
        module.DataSource = function(){this.init.apply(this,arguments);};
        module.DataSourceMetaData = function(){this.init.apply(this,arguments);};
        module.Filter = function(){this.init.apply(this,arguments);};
        module.Condition = function(){this.init.apply(this,arguments);};
        module.ConditionGroup = function(){this.init.apply(this,arguments);};

        // =========================================================================
        // class datasource metadata
        // =========================================================================
        module.DataSourceMetaData.prototype = {

            /**
             * Meta data for a data source object.
             * @ignore
             * @constructs sap.bc.ina.api.impl.inav2.filter.DataSourceMetaData
             * @param  {Object} properties Configuration object.
             */
            init : function(properties){
                properties = properties||{};
                this.datasource = properties.datasource||{};
                this.description = properties.description||"";
                this.dimensions = {};
            },

            _getMetaDataRequest : function(){
                var request = global.sap.bc.ina.api.impl.inav2.jsontemplates.dataSourceMetaDataRequest;
                request.DataSource = this.datasource.toInAJson();
                return request;
            },

            _getMetaData : function(isAsync,callback){
                var self = this;
                var request = {
                    async : isAsync,
                    url : global.sap.bc.ina.api.sina.system().properties.inaUrl,
                    processData : false,
                    contentType : 'application/json',
                    dataType : 'json',
                    data : this._getMetaDataRequest()
                };
                var jqXHR = global.sap.bc.ina.api.sina.system().proxy.ajax(request);
                jqXHR.done(function(data){
                    if(!self.rawMetadata){
                        self._parseServerMetaData(data);
                    }
                    if(callback){
                        callback(self);
                    }
                });
                return this;
            },

            _parseServerMetaData : function(json){
                this.rawMetadata = json;
                this.description = this.rawMetadata.Cube.Description;
                this.datasource.setLabel(this.description);
                for (var i = 0; i < this.rawMetadata.Cube.Dimensions.length; i++) {
                    var dimension = {};
                    dimension.name = this.rawMetadata.Cube.Dimensions[i].Name;
                    dimension.description = this.rawMetadata.Cube.Dimensions[i].Description;
                    dimension.attributes = {};
                    for (var j = 0; j < this.rawMetadata.Cube.Dimensions[i].Attributes.length; j++) {
                        dimension.attributes[this.rawMetadata.Cube.Dimensions[i].Attributes[j].Name] = {
                            name : this.rawMetadata.Cube.Dimensions[i].Attributes[j].Name,
                            description : this.rawMetadata.Cube.Dimensions[i].Attributes[j].Description
                        };
                    }
                    this.dimensions[dimension.name] = dimension;
                }
            }

        };

        // =========================================================================
        // class datasource
        // =========================================================================
        module.DataSource.prototype = {

            /**
             * The data source of a query that is a view in SAP HANA.
             * @constructs sap.bc.ina.api.impl.inav2.filter.DataSource
             * @param  {Object} properties Configuration object that can have the
             * properties 'schemaName', 'packageName' and 'objectName'.
             * The default for schemaName is '_SYS_BIC'.
             * @example <caption>Properties object for a view which resides in the 'SYSTEM' schema
             * and has the name 'J_EPM_PRODUCT'</caption>
             * { schemaName  : 'SYSTEM',
             *   objectName  : 'J_EPM_PRODUCT' }
             * @example <caption>Properties object for a view which resides in the repository
             * in package 'sap.bc.ina.demos.epm.views'</caption>
             * { packageName : 'sap.bc.ina.demos.epm.views',
             *   objectName  : 'V_EPM_PRODUCT' }
             */
            init : function(properties){
                properties = properties||{};
                properties.schemaName = properties.schemaName||properties.SchemaName||{};
                this.setSchemaName(properties.schemaName);
                properties.packageName = properties.packageName||properties.PackageName||{};
                this.setPackageName(properties.packageName);
                properties.objectName = properties.objectName||properties.ObjectName||{};
                this.setObjectName(properties.objectName);
                properties.type = properties.type||properties.Type||{};
                this.setType(properties.type);
                this.label = properties.label||properties.Label||properties.Description||'';
                this.setMetaData(properties.metaData);
            },

            /**
             * Returns the metadata for this data source asynchronously from the server.
             * @ignore
             * @memberOf sap.bc.ina.api.impl.inav2.filter.DataSource
             * @instance
             * @param  {Function} callback Function will be called after the meta data arrives
             * from the server. This function must have one argument through which it will
             * receive the metadata object.
             */
            getMetaData : function(callback){
                var self = this;
                if(!self.metaData){
                    self.metaData = new module.DataSourceMetaData({datasource:this});
                }
                self.metaData._getMetaData(true,callback);
            },

            /**
             * Returns the metadata for this data source synchronously from the server.
             * @ignore
             * @memberOf sap.bc.ina.api.impl.inav2.filter.DataSource
             * @instance
             * Warning: Calling the function will block the javascript thread until
             * a result has been received.
             * @return {sap.bc.ina.api.impl.inav2.filter.DataSourceMetaData} The metadata for this datasource.
             */
            getMetaDataSync : function(){
                var self = this;
                if(!self.metaData){
                    self.metaData = new module.DataSourceMetaData({datasource:this});
                    self.metaData._getMetaData(false);
                }
                return self.metaData;
            },

            setMetaData : function(dataSourceMetaData){
                this.metaData = dataSourceMetaData;
            },

            /**
             * Returns the schema name for this data source.
             * @memberOf sap.bc.ina.api.impl.inav2.filter.DataSource
             * @instance
             * @since SAP HANA SPS 06
             * @return {String} The schema name for this data source.
            */
            getSchemaName : function(){
                return this.schemaName;
            },

            /**
             * Sets the schema name for this data source.
             * @memberOf sap.bc.ina.api.impl.inav2.filter.DataSource
             * @instance
             * @since SAP HANA SPS 06
             * @param {String} schemaName The new schemaName.
            */
            setSchemaName : function(schemaName){
                if(!this.schemaName){
                    this.schemaName = {};
                }
                if($.type(schemaName)==='object'){
                    this.schemaName.label = schemaName.label||schemaName.value||'';
                    this.schemaName.value = schemaName.value||'';
                }
                if($.type(schemaName)==='string'){
                    this.schemaName.label = schemaName;
                    this.schemaName.value = schemaName;
                }
            },

            /**
             * Returns the package name for this data source.
             * @memberOf sap.bc.ina.api.impl.inav2.filter.DataSource
             * @instance
             * @since SAP HANA SPS 06
             * @return {String} The package name for this data source.
            */
            getPackageName : function(){
                return this.packageName;
            },

            /**
             * Sets the package name for this data source.
             * @memberOf sap.bc.ina.api.impl.inav2.filter.DataSource
             * @instance
             * @since SAP HANA SPS 06
             * @param {String} packageName The new package name.
            */
            setPackageName : function(packageName){
                if(!this.packageName){
                    this.packageName = {};
                }
                if($.type(packageName)==='object'){
                    this.packageName.label = packageName.label||packageName.value||'';
                    this.packageName.value = packageName.value||'';
                }
                if($.type(packageName)==='string'){
                    this.packageName.label = packageName;
                    this.packageName.value = packageName;
                }
            },

            /**
             * Returns the object name for this data source.
             * @memberOf sap.bc.ina.api.impl.inav2.filter.DataSource
             * @instance
             * @since SAP HANA SPS 06
             * @return {String} The object name for this data source.
            */
            getObjectName : function(){
                return this.objectName;
            },

            /**
             * Sets the object name for this data source.
             * @memberOf sap.bc.ina.api.impl.inav2.filter.DataSource
             * @instance
             * @since SAP HANA SPS 06
             * @param {String} objectName The new object name.
            */
            setObjectName : function(objectName){
                if(!this.objectName){
                    this.objectName = {};
                }
                if($.type(objectName)==='object'){
                    this.objectName.label = objectName.label||objectName.value||'';
                    this.objectName.value = objectName.value||'';
                }
                if($.type(objectName)==='string'){
                    this.objectName.label = objectName;
                    this.objectName.value = objectName;
                }
            },

            setObjectNameValue : function(value){
                if(!this.objectName){
                    this.objectName = {};
                }
                this.objectName.value = value||'';
            },

            setObjectNameLabel : function(label){
                if(!this.objectName){
                    this.objectName = {};
                }
                this.objectName.label = label||'';
            },

            getType : function(){
                return this.type;
            },

            setType : function(type){
                if(!this.type){
                    this.type = {};
                }
                if($.type(type)==='object'){
                    this.type.label = type.label||type.value||'';
                    this.type.value = type.value||'';
                }
                if($.type(type)==='string'){
                    this.type.label = type;
                    this.type.value = type;
                }
            },

            getLabel : function(){
                if (typeof this.label !=="undefined" && this.label !=="") {
                    return this.label;
                }
                if (typeof this.getObjectName().label !=="undefined" && this.getObjectName().label!=="") {
                    return this.getObjectName().label;
                }

                if (typeof this.getObjectName().value !=="undefined" && this.getObjectName().value!=="") {
                    return this.getObjectName().value;
                }
                return "";
            },

            setLabel : function(label){
                this.label = label||'';
            },

            fromInAJson : function(inaJson){
                this.setSchemaName({ value: inaJson.SchemaName, label: inaJson.SchemaLabel });
                this.setPackageName({ value: inaJson.PackageName, label: inaJson.PackageLabel });
                this.setObjectName({ value: inaJson.ObjectName, label: inaJson.ObjectLabel });
                this.setType({ value: inaJson.Type, label: '' });
            },

            toInAJson : function(){
                var json = { "SchemaName" : this.getSchemaName().value,
                             "PackageName" : this.getPackageName().value,
                             "ObjectName" : this.getObjectName().value
                };
                if(this.getType().value){
                    json.Type = this.getType().value;
                }
                return json;
            },

            toURL : function(){
                var json = { "sn" : this.getSchemaName().value,
                             "pn" : this.getPackageName().value,
                             "on" : this.getObjectName().value
                             // "sl" : this.getSchemaName().label,
                             // "pl" : this.getPackageName().label,
                             // "ol" : this.getObjectName().label,
                             // "l": this.label
                };
                if(this.getType().value){
                    json.tn = this.getType().value;
                    // json.tl = this.getType().label;
                }
                return json;
            },

            fromURL : function(inaJson){
                this.setSchemaName(inaJson.sn);
                this.setPackageName(inaJson.pn);
                this.setObjectName(inaJson.on);
                // this.setLabel(inaJson.l);
                this.setType(inaJson.tn);
            }

        };

        // =========================================================================
        // class filter
        // =========================================================================
        module.Filter.prototype = {

            /**
             * A simple filter for SINA queries.
             * @ignore
             * @constructs sap.bc.ina.api.impl.inav2.filter.Filter
             * @param  {Object} properties Configuration object.
             * @since SAP HANA SPS 06
             */
            init : function(properties){
                properties = properties||{};
                this.setDataSource(properties.dataSource,false);
                this.root = null;
                this.conditionGroupsByAttribute = {};
                this.defaultConditionGroup = new module.ConditionGroup({ operator : 'And' });
                this.searchTerms = "";
            },

            addFilterConditionGroup : function(conditionGroup){
                this.defaultConditionGroup.addCondition(conditionGroup);
            },

            /**
             * Adds a filter condition to the current set of filter conditions. By default
             * conditions of the same attribute will be 'OR'ed. Conditions between different
             * attributes will have an 'AND' operator.
             * @ignore
             * @memberOf sap.bc.ina.api.impl.inav2.filter.Filter
             * @instance
             * @since SAP HANA SPS 06
             * @param {String} attribute            Technical identifier of the attribute, as defined in the database.
             * @param {String} operator             Operator of the filter condition. The default value is "=".
             * @param {String} value                Value that should be filtered within the attribute.
             */
            addFilterCondition : function(attribute, operator, value) {
                if(attribute===undefined||operator===undefined||value===undefined){
                    return this;
                }
                if(this.conditionGroupsByAttribute[attribute]===undefined){
                    this.conditionGroupsByAttribute[attribute] = new module.ConditionGroup({ operator: "OR" });
                    this.defaultConditionGroup.addCondition(this.conditionGroupsByAttribute[attribute]);
                }
                this.conditionGroupsByAttribute[attribute].addCondition(new module.Condition(attribute,operator,value));
                return this;
            },

            getFilterConditions : function(){
                return this.defaultConditionGroup;
            },

            getJson : function() {
                var root = [];
                this.defaultConditionGroup.getJson(root);
                var result = {
                    Selection : root[0]
                };
                return result;
            },

            getSearchTerms : function(){
                return this.searchTerms;
            },

            empty : function() {
                this.root = null;
                this.conditionGroupsByAttribute = {};
                this.defaultConditionGroup = new module.ConditionGroup({ operator : 'And' });
                this.searchTerms = "";
                return this;
            },

            /**
             * Gets the data source that is currently in use by the filter instance.
             * @return {sap.bc.ina.api.impl.inav2.filter.DataSource} The data source instance.
             */
            getDataSource : function(){
                return this.dataSource;
            },

            removeFilterCondition : function(attribute, operator, value){
                this.defaultConditionGroup.removeCondition(new module.Condition(attribute,operator,value));
            },

            /**
             * Sets the data source for the filter.
             * @param {sap.bc.ina.api.impl.inav2.filter.DataSource} dataSource A SINA data source.
             */
            setDataSource : function(dataSource){
                if (dataSource !== undefined && dataSource !== null)
                {
                    if(!(dataSource instanceof module.DataSource)){
                        dataSource = new module.DataSource(dataSource);
                    }
                    this.dataSource = dataSource;
                }
                return this;
            },

            setSearchTerms : function(searchTerms){
                this.searchTerms = searchTerms;
            },

            setJson : function(json){
                if(json.Selection===undefined){
                    return;
                }
                var group = new module.ConditionGroup();
                group.setJson(json);
                this.defaultConditionGroup.addCondition(group);
            }

        };

        // =========================================================================
        // class condition
        // =========================================================================
        module.Condition.prototype = {

            /**
             * Creates a new filter condition.
             * @ignore
             * @constructs sap.bc.ina.api.impl.inav2.filter.Condition
             * @param {String|Object} attribute     Technical identifier of the attribute, as defined in the database.
             * If the type is Object, this object can have properties with the name and value of the arguments.
             * @param {String} operator             Operator of the filter condition. The default value is "=".
             * @param {String} value                Value that should be filtered in the attribute.
            */
            init : function(attribute,operator,value,operandType) {
                if ($.type(attribute)==='object') {
                    var props = attribute;
                    attribute = props.attribute;
                    operator = props.operator;
                    value = props.value;
                    operandType = props.operandType;
                }
                this.attribute = attribute || "";
                this.operator = operator || "=";
                this.value = value;
                this.operandType = operandType || 'Member';
            },

            getJson : function(parent) {
                var operand;
                if(this.operandType.toLowerCase()==='search'){
                    operand = 'SearchOperand';
                }
                else{
                    operand = 'MemberOperand';
                }
                var json = {};
                json[operand] = {
                            "AttributeName" : this.attribute,
                            "Comparison" : this.operator,
                            "Value" : this.value
                };
                if(this.operator==='='&&this.value===null){
                    json.MemberOperand.Comparison = 'IS NULL';
                    json.MemberOperand.Value = '';
                }
                parent.push(json);
            },

            setJson : function(json){
                this.attribute = json.MemberOperand.AttributeName;
                this.operator = json.MemberOperand.Comparison;
                this.value = json.MemberOperand.Value;
                if(json.MemberOperand.Comparison === 'IS NULL'&&json.MemberOperand.Value === ''){
                    this.operator = '=';
                    this.value = null;
                }
            },

            toString : function(){
                return this.attribute+this.operator+this.value+'';
            }

        };


        // =========================================================================
        // class condition group
        // =========================================================================
        module.ConditionGroup.prototype = {

            init : function(properties) {
                properties = properties || {};
                this.label = properties.label || '';
                this.conditions = properties.conditions || [];
                this.setOperator(properties.operator || 'And');
            },

            addCondition : function(condition) {
                this.conditions.push(condition);
                return this;
            },

            getConditions : function(){
                return this.conditions;
            },

            getConditionsAsArray : function(group,conditions){
                conditions = conditions || [];
                group = group || this;
                for (var i = 0; i < group.conditions.length; i++) {
                    if(group.conditions[i] instanceof module.ConditionGroup){
                        this.getConditionsAsArray(group.conditions[i],conditions);
                    }
                    else {
                        conditions.push(group.conditions[i]);
                    }
                }
                return conditions;
            },

            removeCondition : function(condition){
                this.conditions.splice(this.conditions.indexOf(condition),1);
                return this;
            },

            setLabel : function(label){
                this.label = label;
                return this;
            },

            setOperator : function(operator){
                switch (operator.toLowerCase()){
                    case 'or':
                        operator = 'Or';
                        break;
                    case 'and':
                        operator = 'And';
                        break;
                    default:
                        throw { message: 'unknown operator for condition group: '+operator };
                }
                this.operator = operator;
                return this;
            },

            toString : function(){
                return this.label;
            },

            getJson : function(parent) {
                if(this.conditions.length===0){
                    return {};
                }
                var children = [];
                for (var i = 0; i < this.conditions.length; ++i) {
                    this.conditions[i].getJson(children);
                }
                var json = {
                        "Operator" : {
                            "Code" : this.operator,
                            "SubSelections" : children
                        }
                };
                if(parent){
                    parent.push(json);
                }
                else{
                    var result = {
                        Selection : json
                    };
                    return result;
                }
            },

            setJson : function(json){
                if(json.Selection===undefined&&json.Operator){
                    json.Selection = {};
                    json.Selection.Operator = json.Operator;
                }
                this.setOperator(json.Selection.Operator.Code);
                var conditions = json.Selection.Operator.SubSelections;
                for(var i=0; i<conditions.length; i++){
                    var condition;
                    if(conditions[i].Operator){
                        condition = new module.ConditionGroup();
                    }
                    else{
                        condition = new module.Condition();
                    }
                    condition.setJson(conditions[i]);
                    this.addCondition(condition);
                }
            }

        };
    };

    if ( typeof define === "function" && define.amd) {
        define( ["jquery", './jsontemplates'], function($){
            executeFilter($);
        });
    }else{
        executeFilter();
    }

}(this));

/*
 * @file Simple info access (SINA) API: System representation
 * @ignore
 * @namespace sap.bc.ina.api.system
 * @copyright Copyright (c) 2013 SAP AG. All rights reserved.
 */

(function(global) {"use strict";

    var executeSystem = function($) {

        // =========================================================================
        // create packages
        // =========================================================================
        if (!$)
        {
            $ = global.$;
        }
        global.sap = global.sap || {};
        global.sap.bc = global.sap.bc || {};
        global.sap.bc.ina = global.sap.bc.ina || {};
        global.sap.bc.ina.api = global.sap.bc.ina.api || {};
        global.sap.bc.ina.api.system = global.sap.bc.ina.api.system || {};
        var module = global.sap.bc.ina.api.system;
        module.System = function(){this.init.apply(this,arguments);};
        module.ABAPSystem = function(){this.init.apply(this,arguments);};
        module.HANASystem = function(){this.init.apply(this,arguments);};
        module.Service = function(){this.init.apply(this,arguments);};
        module.Capability = function(){this.init.apply(this,arguments);};

        // =========================================================================
        // import packages
        // =========================================================================
        var config = global.sap.bc.inauitk.config;

        module.Capability.prototype = {
            /**
             * Describes a capability offered by a service.
             * @ignore
             * @constructs sap.bc.ina.api.system.Capability
             * @param {Object} properties Configures the capability instance with this
             * object.
             */
            init : function(properties) {
                this.properties = properties || {};
                this.name = this.properties.Capability || "";
                this.minVersion = this.properties.MinVersion || 0;
                this.maxVersion = this.properties.MaxVersion || 0;
            }

        };

        // =========================================================================
        // Service
        // =========================================================================
        module.Service.prototype = {

            /**
             * Describes the services offered by a system.
             * @ignore
             * @constructs sap.bc.ina.api.system.Service
             *
             * @param  {Object} properties Configuration object.
             */
            init : function(properties) {
                this.properties = properties || {};
                this.name = this.properties.Service;
                this.minVersion = this.properties.MinVersion || 0;
                this.maxVersion = this.properties.MaxVersion || 0;
                this.capabilities = {};
                for (var i = 0; i < this.properties.Capabilities.length; i++) {
                    this.capabilities[this.properties.Capabilities[i].Capability] = new module.Capability(this.properties.Capabilities[i]);
                }

            },

            getCapability : function(name){
                return this.capabilities[name];
            },

            getCapabilities : function(){
                return this.capabilities;
            }

        };

        // =========================================================================
        // system
        // =========================================================================

        module.System.prototype = {

            /**
             * A system representation that offers services to SINA.
             * @ignore
             * @constructs sap.bc.ina.api.system.System
             * @param  {Object} properties Configuration object.
             */
            init : function(properties) {
                this.properties = properties || {};
                this.services = {};
                this.proxy = properties.proxy || new global.sap.bc.inauitk.Proxy();
            },

            getService : function(name){
                return this.services[name];
            },

            getServices : function(){
                return this.services;
            },

            getSystemType : function(){
                return this.systemType;
            },

            _getServerInfo : function(isAsync){
                var self = this;
                if(self.jqXHR&&isAsync===true){
                    return self.jqXHR.promise();
                }

                self.jqXHR = jQuery.Deferred();
                var request = {
                   async : isAsync,
                   type : "GET",
                   url : self.properties.infoUrl,
                   processData : false,
                   contentType : 'application/json',
                   dataType : 'json'
                };
                self.proxy.ajax(request).done(function(data){
                    self.setServerInfo(data);
                    self.jqXHR.resolve(self.properties);

                });
                return self.properties;
            },

            getServerInfo : function(){
                return this._getServerInfo(true);
            },

            getServerInfoSync : function(){
                return this._getServerInfo(false);
            },

            setServerInfo : function(json){
                this.properties.rawServerInfo = json;
                if(this instanceof module.ABAPSystem){
                    if(!this.properties.sapclient){
                        //dont overwrite value from url!
                        this.properties.sapclient = json.ServerInfo.Client;
                    }
                    //TODO: move this code out of if(ABAP) when HANA INA Service supports these values
                    this.properties.dbms = json.ServerInfo.DataBaseManagementSystem;
                    this.properties.dbmsVersion = json.ServerInfo.DataBaseManagementSystemVersion;
                    if(this.properties.inaUrl.indexOf("sap-client")===-1&&this.properties.sapclient){
                        if(this.properties.inaUrl.indexOf("?")===-1){
                            this.properties.inaUrl = this.properties.inaUrl+"?sap-client="+this.properties.sapclient;
                        }
                        else{
                            this.properties.inaUrl = this.properties.inaUrl+"&sap-client="+this.properties.sapclient;
                        }
                        if(this.properties.infoUrl.indexOf("?")===-1){
                            this.properties.infoUrl = this.properties.infoUrl+"?sap-client="+this.properties.sapclient;
                        }
                        else{
                            this.properties.infoUrl = this.properties.infoUrl+"&sap-client="+this.properties.sapclient;
                        }
                    }
                }
                for (var i = 0; i < json.Services.length; i++) {
                    this.services[json.Services[i].Service] = new module.Service(json.Services[i]);
                }
            }

        };

        module.ABAPSystem.prototype = $.extend({}, module.System.prototype, {

            init : function(properties) {
                this.properties = properties || {};
                module.System.prototype.init.apply(this, [this.properties]);
                this.systemType = 'ABAP';
                this.properties.inaUrl =  this.properties.inaUrl || "/sap/es/ina/GetResponse";
                this.properties.infoUrl = this.properties.infoUrl ||  "/sap/es/ina/GetServerInfo";
                if(this.properties.sapclient){
                    this.sapclient(this.properties.sapclient);
                }
                else {
                    var sapclient = this._readSapClientFromUrl();
                    this.sapclient(sapclient);
                    if(!sapclient){
                        this.getServerInfoSync(); // last chance is to read the serverinfo to get the default es sap client
                    }
                }

                var saplanguage = this._readSapLanguageFromUrl();
                if(saplanguage&&this.properties.inaUrl.indexOf("sap-client")===-1){
                    if(this.properties.inaUrl.indexOf("?")===-1){
                        this.properties.inaUrl = this.properties.inaUrl+"?sap-language="+saplanguage;
                    }
                    else{
                        this.properties.inaUrl = this.properties.inaUrl+"&sap-language="+saplanguage;
                    }
                }
                if(saplanguage&&this.properties.infoUrl.indexOf("sap-client")===-1){
                    if(this.properties.infoUrl.indexOf("?")===-1){
                        this.properties.infoUrl = this.properties.infoUrl+"?sap-language="+saplanguage;
                    }
                    else{
                        this.properties.infoUrl = this.properties.infoUrl+"&sap-language="+saplanguage;
                    }
                }

            },

            getUrlParameter : function(name) {
                var search = location.search;
                var value = (new RegExp(name + '=' + '(.+?)(&|$)').exec(search) || [ null ])[1];
                if (!value) {
                    return value;
                }
                value = decodeURIComponent(value.replace(/\+/g, " "));
                return value;
            },

            _readSapClientFromUrl : function(){
                // dont read sap client from url in fiori scenario where
                // frontend (ui) server is not the search server
                if(config&&config.noSapClientFromUrl===true){
                    return "";
                }
                return this.getUrlParameter("sap-client");
            },

            _readSapLanguageFromUrl : function(){
                return this.getUrlParameter("sap-language");
            },

            sapclient : function(sapclient) {
                if(sapclient){
                    this.properties.sapclient = sapclient;
                    this.properties.inaUrl = this.properties.inaUrl+"?sap-client="+this.properties.sapclient;
                    this.properties.infoUrl = this.properties.infoUrl+"?sap-client="+this.properties.sapclient;
                    this.getServerInfoSync();
                }
                else {
                    return this.properties.sapclient;
                }

            }

        });

        module.HANASystem.prototype = $.extend({}, module.System.prototype, {

            init : function(properties) {
                this.properties = properties || {};
                module.System.prototype.init.apply(this, [this.properties]);
                this.systemType = 'HANA';
                this.properties.infoUrl = this.properties.infoUrl ||  "/sap/bc/ina/service/v2/GetServerInfo";
                this.properties.inaUrl =  this.properties.inaUrl || "/sap/bc/ina/service/v2/GetResponse";
                this._setUpAjaxErrorHandler();
                this.getServerInfo();
            },

            _setUpAjaxErrorHandler : function(){
                //global ajax setup for errors
                $(global.document).ajaxError(function(event,jqXHR,ajaxSettings,thrownError){
                    // log.debug("Error: call to "+ajaxSettings.url+" with argument "+ajaxSettings.data+" had status "+jqXHR.status+" ("+jqXHR.statusText+") - Response was: "+jqXHR.responseText); //log message for debugging

                    switch(jqXHR.status){
                        case 401 :  global.window.location = "/sap/hana/xs/formLogin/login.html?x-sap-origin-location="+
                                    encodeURIComponent(global.window.location.pathname)+
                                    encodeURIComponent(global.window.location.search);
                                    break;
                        case 404 : return;
                    }

                    // var message = '';
                    // if(jqXHR.status!==200){
                    //     message = 'Server responded with status code ' + jqXHR.status+'. ';
                    // }
                    // if(thrownError&&thrownError.message){
                    //     message += thrownError.message;
                    // }
                    // if(message){
                    //     log.error(message); //message to the user
                    // }

                });
            }

        });
    };

    if ( typeof define === "function" && define.amd) {
        define( ["jquery"], function($){
            executeSystem($);
        });
    }else{
        executeSystem();
    }


}(this));

/*
 * @file Simple info access (SINA) API: Implementation of the interface
 * @namespace sap.bc.ina.api.impl.inav2
 * @requires sap.bc.ina.api
 * @requires sap.bc.ina.api.impl.inav2.filter
 * @requires sap.bc.ina.api.impl.inav2.system
 * @requires jQuery
 * @copyright Copyright (c) 2013 SAP AG. All rights reserved.
 */

(function(global) {"use strict";

    var executeSinaImpl = function($) {
        // =========================================================================
        // create packages
        // =========================================================================
        if (!$)
        {
            $ = global.$;
        }
        global.sap = global.sap || {};
        global.sap.bc = global.sap.bc || {};
        global.sap.bc.ina = global.sap.bc.ina || {};
        global.sap.bc.inauitk = global.sap.bc.inauitk || {};
        global.sap.bc.ina.api = global.sap.bc.ina.api || {};
        global.sap.bc.ina.api.impl = global.sap.bc.ina.api.impl || {};
        global.sap.bc.ina.api.impl.inav2 = global.sap.bc.ina.api.impl.inav2 || {};
        global.sap.bc.ina.api.impl.inav2.Sina = function(){this.init.apply(this,arguments);};
        var module = global.sap.bc.ina.api.impl.inav2;

        module.Facet = function(){this.init.apply(this,arguments);};
        module.Perspective = function(){this.init.apply(this,arguments);};
        module.Query = function(){this.init.apply(this,arguments);};
        module.QueryBuilder = function(){this.init.apply(this,arguments);};
        module.CatalogQuery = function(){this.init.apply(this,arguments);};
        module.CatalogResultSet = function(){this.init.apply(this,arguments);};
        module.PerspectiveQuery = function(){this.init.apply(this,arguments);};
        module.Suggestion = function(){this.init.apply(this,arguments);};
        module.SuggestionQuery = function(){this.init.apply(this,arguments);};
        module.SuggestionResultSet = function(){this.init.apply(this,arguments);};
        module.Suggestion2Query = function(){this.init.apply(this,arguments);};
        module.Suggestion2ResultSet = function(){this.init.apply(this,arguments);};
        module.ChartQuery = function(){this.init.apply(this,arguments);};
        module.ChartResultSet = function(){this.init.apply(this,arguments);};
        module.GroupBarChartQuery = function(){this.init.apply(this,arguments);};
        module.GroupBarChartResultSet = function(){this.init.apply(this,arguments);};
        module.LineChartQuery = function(){this.init.apply(this,arguments);};
        module.LineChartResultSet = function(){this.init.apply(this,arguments);};
        module.SearchQuery = function(){this.init.apply(this,arguments);};
        module.SearchResultSet = function(){this.init.apply(this,arguments);};


        // =========================================================================
        // import packages
        // =========================================================================
        var jsontemplates = global.sap.bc.ina.api.impl.inav2.jsontemplates;
        var filter = global.sap.bc.ina.api.impl.inav2.filter;
        var system = global.sap.bc.ina.api.system;
        var config = global.sap.bc.inauitk.config;
        module.Condition = filter.Condition;

        module.Sina.prototype = {

            /**
             * Creates a new instance of SINA that uses the INA V2 service. Use it with
             * the SINA factory {@link sap.bc.ina.api}
             * @this {sap.bc.ina.api.impl.inav2.Sina}
             * @constructs sap.bc.ina.api.impl.inav2.Sina
             * @param  {Object} properties Configuration properties for the instance.
             * @since SAP HANA SPS 06
             */
            init : function(properties){
                properties = properties || {};
                this.system(properties.system || new system.HANASystem());
            },

            /**
             * Gets or sets an SAP client. Only used with system type ABAP.
             * @ignore
             * @since SAP HANA SPS 06
             * @memberOf sap.bc.ina.api.impl.inav2.Sina
             * @instance
             * @param  {Integer} sapclient Number of the SAP client to be used with the service.
             * @return {Integer} The SAP client number that is currently set, but only if called
             * without a parameter.
             */
            sapclient : function(sapclient){
                var sys;
                if(sapclient){
                    if(sapclient<0){
                        sys = new system.HANASystem();
                    }
                    else{
                        sys = new system.ABAPSystem({"sapclient":sapclient});
                    }
                    this.system(sys);
                }
                else {
                    return this.system().properties.sapclient();
                }
            },

            _registerPostProcessor : function(postProcessor){
                if (!this.postProcessor)
                {
                    this.postProcessor = [];
                }
                this.postProcessor.push(postProcessor);
            },

            _postprocess : function(sinAction, sourceTitle){
                if (this.postProcessor)
                {
                    for (var i = 0; i < this.postProcessor.length; i++) {
                        this.postProcessor[i](sinAction, sourceTitle);
                    }
                }

            },

            /**
             * Gets or sets a system that will be used for data access. The system must have the
             * INA V2 service up and running.
             * @ignore
             * @since SAP HANA SPS 06
             * @memberOf sap.bc.ina.api.impl.inav2.Sina
             * @instance
             * @param  {sap.bc.ina.api.impl.inav2.system.HANASystem|sap.bc.ina.api.impl.inav2.system.ABAPSystem} sys The system representation.
             * @return {sap.bc.ina.api.impl.inav2.system.HANASystem|sap.bc.ina.api.impl.inav2.system.ABAPSystem} The system currently set,
             * but only if no parameter has been set.
             */
            system : function(sys){
                if(sys){
                    this.sys = sys;
                }
                else {
                    return this.sys;
                }
            },

            /**
             * Creates and returns a chart query for simple analytics.
             * @memberOf sap.bc.ina.api.impl.inav2.Sina
             * @instance
             * @since SAP HANA SPS 06
             * @param  {Object} properties Configuration object.
             * @return {sap.bc.ina.api.impl.inav2.ChartQuery} The instance of a chart query.
             * See {@link sap.bc.ina.api.impl.inav2.ChartResultSet} for the result set format.
             * @example
             * <caption>Create a query that returns a result set suitable for a bar or pie chart:</caption>
             * var query = sap.bc.ina.api.sina.createChartQuery()
             * .dataSource({ schemaName : "SYSTEM",
             *               objectName : "J_EPM_PRODUCT"
             *  })
             * .addDimension("CATEGORY")
             * .addMeasure({ name : "CATEGORY",
             *               aggregationFunction : "COUNT"
             * }); //end of query
             * var resultSet = query.getResultSetSync();
             * var elements = resultSet.getElements();
             * // contents of elements:
             * [
                {
                  "label": "Others",
                  "labelRaw": "Others",
                  "value": "13",
                  "valueRaw": 13
                },
                {
                  "label": "Notebooks",
                  "labelRaw": "Notebooks",
                  "value": "10",
                  "valueRaw": 10
                },
                {
                  "label": "Flat screens",
                  "labelRaw": "Flat screens",
                  "value": "9",
                  "valueRaw": 9
                },
                {
                  "label": "Software",
                  "labelRaw": "Software",
                  "value": "8",
                  "valueRaw": 8
                },
                {
                  "label": "Electronics",
                  "labelRaw": "Electronics",
                  "value": "5",
                  "valueRaw": 5
                }
              ]
             */
            createChartQuery : function(properties) {
                properties = properties || {};
                properties.system = properties.system || this.system();
                return new module.ChartQuery(properties);
            },

            /**
             * Creates a chart query that delivers a result set suitable for a group bar chart.
             * @memberOf sap.bc.ina.api.impl.inav2.Sina
             * @instance
             * @since SAP HANA SPS 06
             * @param  {Object} properties Configuration object.
             * @return {sap.bc.ina.api.impl.inav2.GroupBarChartQuery} The instance of a chart query.
             * See {@link sap.bc.ina.api.impl.inav2.GroupBarChartResultSet} for the result set format.
             * @example
             * <caption>Grouped bar chart query with two dimensions and one measure:</caption>
             * var query = sap.bc.ina.api.sina.createGroupBarChartQuery({
             *      dataSource : { "schemaName"  :  "SYSTEM" ,
             *                     "objectName"  :  "J_EPM_PRODUCT" },
             *      dimensions : ['YEAR', 'COUNTRY'],
             *      measures   : [{ name: 'PROFIT', aggregationFunction: 'SUM' }]
             *  });
             *  var resultSet = query.getResultSetSync();
             *  var elements = resultSet.getElements();
             * @example
             *  <caption>Grouped bar chart query with two dimensions and one measure:</caption>
             * var query = sap.bc.ina.api.sina.createGroupBarChartQuery();
             * query.dataSource({ schemaName : "SYSTEM",
             *                    objectName : "J_EPM_PRODUCT"
             * });
             * query.addDimension('CURRENCY_CODE');
             * query.addDimension('CATEGORY');
             * query.count('PRODUCT_ID');
             * var resultSet = query.getResultSetSync();
             * var elements = resultSet.getELements();
             * // contents of elements:
             * [
                {
                  "label": "EUR",
                  "value": [
                    {
                      "label": "Notebooks",
                      "value": [
                        {
                          "label": "COUNT",
                          "value": {
                            "value": "6",
                            "valueRaw": 6
                          }
                        }
                      ]
                    },
                    {
                      "label": "Others",
                      "value": [
                        {
                          "label": "COUNT",
                          "value": {
                            "value": "5",
                            "valueRaw": 5
                          }
                        }
                      ]
                    },
                    {
                      "label": "Software",
                      "value": [
                        {
                          "label": "COUNT",
                          "value": {
                            "value": "3",
                            "valueRaw": 3
                          }
                        }
                      ]
                    }
                  ]
                }
                ]
             */
            createGroupBarChartQuery : function(properties){
                properties = properties || {};
                properties.system = properties.system || this.system();
                return new module.GroupBarChartQuery(properties);
            },

            /**
             * Creates a chart query that delivers a result set suitable for a line chart.
             * @memberOf sap.bc.ina.api.impl.inav2.Sina
             * @instance
             * @since SAP HANA SPS 06
             * @param  {Object} properties Configuration object.
             * @return {sap.bc.ina.api.impl.inav2.LineChartQuery} Instance of a chart query.
             * See {@link sap.bc.ina.api.impl.inav2.LineChartResultSet} for the result set format.
             * @example
             *  <caption>Line chart with two dimensions and one measure:</caption>
             * var queryProperties = {
             *     dataSource      : { schemaName  : "SYSTEM",
                                       objectName  : "J_EPM_PRODUCT"
                                     },
                   dimensionX      : {name: 'CATEGORY'},
                   dimensionLine   : {name: 'CURRENCY_CODE'},
                   measureY        : {name: 'PRODUCT_ID', aggregationFunction: 'COUNT'}
               };
               query = sap.bc.ina.api.sina.createLineChartQuery(queryProperties);
             * var resultSet = query.getResultSetSync();
             * var elements = resultSet.getEements();
             * // contents of elements (shortened):
             * [
                 {
                   "label": "EUR",
                   "value": [
                     {
                       "x": "Notebooks",
                       "y": 6
                     },
                     {
                       "x": "Others",
                       "y": 5
                     },
                     {
                       "x": "Software",
                       "y": 3
                     },
                     {
                       "x": "Speakers",
                       "y": 3
                     },
                     {
                       "x": "Electronics",
                       "y": 2
                     },
                     {
                       "x": "Flat screens",
                       "y": 2
                     },
                     {
                       "x": "Laser printers",
                       "y": 2
                     },
                     {
                       "x": "Mice",
                       "y": 2
                     },
                     {
                       "x": "PC",
                       "y": 2
                     },
                     {
                       "x": "Workstation ensemble",
                       "y": 2
                     }
                   ]
                 },
                 {
                   "label": "USD",
                   "value": [
                     {
                       "x": "Others",
                       "y": 4
                     },
                     {
                       "x": "Flat screens",
                       "y": 2
                     },
                     {
                       "x": "Handhelds",
                       "y": 2
                     },
                     {
                       "x": "High Tech",
                       "y": 2
                     },
                     {
                       "x": "Notebooks",
                       "y": 2
                     },
                     {
                       "x": "Software",
                       "y": 2
                     },
                     {
                       "x": "Electronics",
                       "y": 1
                     },
                     {
                       "x": "Graphic cards",
                       "y": 1
                     },
                     {
                       "x": "Handheld",
                       "y": 1
                     },
                     {
                       "x": "Headset",
                       "y": 1
                     }
                   ]
                 }
              ]
             */
            createLineChartQuery : function(properties){
                properties = properties || {};
                properties.system = properties.system || this.system();
                properties.dimensions = [properties.dimensionLine, properties.dimensionX];
                properties.measures = [{name: properties.measureY.name, aggregationFunction: properties.measureY.aggregationFunction}];
                return new module.LineChartQuery(properties);
            },

            /**
             * Creates and returns a search query for text queries.
             * @memberOf sap.bc.ina.api.impl.inav2.Sina
             * @instance
             * @since SAP HANA SPS 06
             * @param  {Object} properties Configuration object.
             * @return {sap.bc.ina.api.impl.inav2.SearchQuery} The instance of a search query.
             * See {@link sap.bc.ina.api.impl.inav2.SearchResultSet} for the result set format.
             * @example
             * <caption>Simple search for the term "basic" in view J_EPM_PRODUCT. If the term is
             * found in a column marked as freestyle search relevant, the content of columns
             * in the attributes array is returned, in this case PRODUCT_ID, TEXT, CATEGORY, PRICE,
             * and CURRENCY_CODE. The return attributes do not have to be marked as freestyle search relevant though.</caption>
             * var query = sap.bc.ina.api.sina.createSearchQuery({
                dataSource          : { schemaName  : "SYSTEM",
                                        objectName  : "J_EPM_PRODUCT" },
                attributes          : [ "PRODUCT_ID",
                                        "TEXT",
                                        "CATEGORY",
                                        "PRICE",
                                        "CURRENCY_CODE"],
                searchTerms         : "basic",
                skip                : 0,
                top                 : 5
               });
             * var resultSet = query.getResultSetSync();
             * var elements = resultSet.getElements();
             * // contents of elements:
             * [{ "PRODUCT_ID":{"label":"PRODUCT_ID","valueRaw":"HT-1000","value":"HT-1000"},
             *     "TEXT":{"label":"TEXT","valueRaw":"Notebook Basic 15 with 1,7GHz - 15","value":"Notebook Basic 15 with 1,7GHz - 15"},
             *     "CATEGORY":{"label":"CATEGORY","valueRaw":"Notebooks","value":"Notebooks"},
             *     "PRICE":{"label":"PRICE","valueRaw":"956.00","value":"956.00"},
             *     "CURRENCY_CODE":{"label":"CURRENCY_CODE","valueRaw":"EUR","value":"EUR"}},
             *     // second result item:
             *     {"PRODUCT_ID":{"label":"PRODUCT_ID","valueRaw":"HT-1001","value":"HT-1001"},
             *     "TEXT":{"label":"TEXT","valueRaw":"Notebook Basic 17 with 1,7GHz - 17","value":"Notebook Basic 17 with 1,7GHz - 17"},
             *     "CATEGORY":{"label":"CATEGORY","valueRaw":"Notebooks","value":"Notebooks"},
             *     "PRICE":{"label":"PRICE","valueRaw":"1249.00","value":"1249.00"},
             *     "CURRENCY_CODE":{"label":"CURRENCY_CODE","valueRaw":"EUR","value":"EUR"}},
             *     // third result item:
             *     {"PRODUCT_ID":{"label":"PRODUCT_ID","valueRaw":"HT-1002","value":"HT-1002"},
             *     "TEXT":{"label":"TEXT","valueRaw":"Notebook Basic 18 with 1,7GHz - 18","value":"Notebook Basic 18 with 1,7GHz - 18"},
             *     "CATEGORY":{"label":"CATEGORY","valueRaw":"Notebooks","value":"Notebooks"},
             *     "PRICE":{"label":"PRICE","valueRaw":"1570.00","value":"1570.00"},
             *     "CURRENCY_CODE":{"label":"CURRENCY_CODE","valueRaw":"USD","value":"USD"}},
             *     // fourth result item:
             *     {"PRODUCT_ID":{"label":"PRODUCT_ID","valueRaw":"HT-1003","value":"HT-1003"},
             *     "TEXT":{"label":"TEXT","valueRaw":"Notebook Basic 19 with 1,7GHz - 19","value":"Notebook Basic 19 with 1,7GHz - 19"},
             *     "CATEGORY":{"label":"CATEGORY","valueRaw":"Notebooks","value":"Notebooks"},
             *     "PRICE":{"label":"PRICE","valueRaw":"1650.00","value":"1650.00"},
             *     "CURRENCY_CODE":{"label":"CURRENCY_CODE","valueRaw":"EUR","value":"EUR"}},
             *     // fifth result item:
             *     {"PRODUCT_ID":{"label":"PRODUCT_ID","valueRaw":"HT-8000","value":"HT-8000"},
             *     "TEXT":{"label":"TEXT","valueRaw":"1,5 Ghz, single core, 40 GB HDD, Windows Vista Home Basic, 512 MB RAM","value":"1,5 Ghz, single core, 40 GB HDD, Windows Vista Home Basic, 512 MB RAM"},
             *     "CATEGORY":{"label":"CATEGORY","valueRaw":"Notebooks","value":"Notebooks"},
             *     "PRICE":{"label":"PRICE","valueRaw":"799.00","value":"799.00"},
             *     "CURRENCY_CODE":{"label":"CURRENCY_CODE","valueRaw":"EUR","value":"EUR"}}
             *  ]
             * @example
             * <caption>The same search as in the previous example but now with term highlighting. If the term
             * "basic" is found in the TEXT attribute, it will be returned as &lt;b&gt;basic&lt;/b&gt;.
             * The maxLength and startPosition parameters can be omitted. In this case, the default values
             * shown in the example below are used.</caption>
             * var searchQuery = sap.bc.ina.api.sina.createSearchQuery({
             *  dataSource          : { "schemaName"  :  "SYSTEM" ,
             *                          "objectName"  :  "J_EPM_PRODUCT" },
             *  attributes          : [ "PRODUCT_ID",
             *                          { attributeName: "TEXT", highlighted:true,
             *                            maxLength:4095, startPosition:1 } ],
             *  searchTerms         : "basic",
             *  skip                : 0,
             *  top                 : 5
             * });
             *  var resultSet = searchQuery.getResultSetSync();
             *  var searchResults = resultSet.getElements();
             * @example
             * <caption>The same search as in the previous example, but now with the snippet function. If the term
             * "basic" is found in the TEXT attribute, and the content is longer than 4095 characters,
             * the content is shortened to 4095 chars and will begin and end with three dots (...)
             * In addition to the snippet, the search term is highlighted the same way as in the highlighted function (see previous example).
             * It is therefore not necessary to use highlighted and snippet for the same attribute.
             * The maxLength and startPosition parameters can be omitted. In this case, the default values
             * shown in the example below are used.
             * </caption>
             * var searchQuery = sap.bc.ina.api.sina.createSearchQuery({
             *  dataSource          : { "schemaName"  :  "SYSTEM" ,
             *                          "objectName"  :  "J_EPM_PRODUCT" },
             *  attributes          : [ "PRODUCT_ID",
             *                          { attributeName: "TEXT", snippet:true,
             *                            maxLength:4095, startPosition:1 } ],
             *  searchTerms         : "basic",
             *  skip                : 0,
             *  top                 : 5
             * });
             *  var resultSet = searchQuery.getResultSetSync();
             *  var searchResults = resultSet.getElements();
             */
            createSearchQuery : function(properties) {
                properties = properties || {};
                properties.system = properties.system || this.system();
                return new module.SearchQuery(properties);
            },

            /**
             * Creates and returns a suggestion for text queries.
             * @memberOf sap.bc.ina.api.impl.inav2.Sina
             * @instance
             * @since SAP HANA SPS 06
             * @param  {Object} properties Configuration object.
             * @return {sap.bc.ina.api.impl.inav2.SuggestionQuery} The instance of a suggestion query.
             * @example
             * <caption>Getting suggestions asynchronously for attributes CATEGORY
             * and PRODUCT_ID:</caption>
             *  var properties = {
             *      dataSource : { "schemaName"  : "SYSTEM",
             *                    "objectName"  : "J_EPM_PRODUCT"
             *                   },
             *      searchTerms : "s*",
             *      top   : 10,
             *      skip  : 0,
             *      onSuccess : function(resultset) {
             *                        var suggestions = resultset.getElements();
             *                        console.dir(suggestions);
             *      },
             *      onError :   function(error){
             *                        console.error(error);
             *      },
             *      attributes : ["CATEGORY","PRODUCT_ID"]
             *  };
             *  var suggestion_query = sap.bc.ina.api.sina.createSuggestionQuery(properties);
             *  suggestion_query.getResultSet(); //returns immediately, see onSuccess on how to go on
             */
            createSuggestionQuery : function(properties) {
                properties = properties || {};
                properties.system = properties.system || this.system();
                if(properties.system instanceof system.ABAPSystem){
                    return new module.Suggestion2Query(properties);
                }
                if(properties.system instanceof system.HANASystem){
                    return new module.SuggestionQuery(properties);
                }
            },

            /**
             * Creates and returns a perspective query.
             * @ignore
             * @since SAP HANA SPS 06
             * @memberOf sap.bc.ina.api.impl.inav2.Sina
             * @instance
             * @private
             * @param  {Object} properties Configuration object.
             * @return {sap.bc.ina.api.impl.inav2.PerspectiveQuery} The instance of a perspective query.
             */
            createPerspectiveQuery : function(properties) {
                properties = properties || {};
                properties.system = properties.system || this.system();
                return new module.PerspectiveQuery(properties);
            }

        };


        // =========================================================================
        // class query. Base for chart, search and perspective queries
        // =========================================================================
        module.Query.prototype = {

            /**
            *  The base query for chart, search, and suggestions queries.
            *  Use the sina.create*Query factory methods instead of this class.
            *  @constructs sap.bc.ina.api.impl.inav2.Query
            *  @private
            */
            init : function(properties) {
                properties = properties || {};
                this.system = properties.system;
                this.onSuccess = properties.onSuccess;
                this.onError = properties.onError;
                this._responseJson = null;
                this.setTop(properties.top || 10);
                this.setSkip(properties.skip || 0);
                this.resultSet = properties.resultSet || null;
                this.resultSetProperties = properties;
                this.filterConditions = properties.filterConditions || null;
                this.filter = properties.filter || new filter.Filter({dataSource:properties.dataSource});
                this.setSearchTerms(properties.searchTerms);
            },

            /**
             * Gets the data source object for this query.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @return {sap.bc.ina.api.impl.inav2.filter.DataSource} The data source for this query.
             */
            getDataSource : function(){
                return this.filter.getDataSource();
            },

            /**
             * Sets the data source for this query object. Results already retrieved by this query are deleted.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @param {sap.bc.ina.api.impl.inav2.filter.DataSource|Object} dataSource The current data source of this query.
             * This can be an instance of sap.bc.ina.api.impl.inav2.filter.DataSource or it can be a plain object, like
             * { "schemaName"  : "SYSTEM",
             *   "objectName"  : "J_EPM_PRODUCT" };
             * that the system uses to create an instance of sap.bc.ina.api.impl.inav2.filter.DataSource
             */
            setDataSource : function(dataSource) {
                this.filter.setDataSource(dataSource);
                this.resultSet = null;
                return this;
            },

            /**
             * Returns the filter instance for this query.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @return {sap.bc.api.impl.inav2.filter.Filter} The filter instance for this query object.
             */
            getFilter : function(){
                return this.filter;
            },

            /**
             * Sets the new filter instance for this query. Results already retrieved by this query are deleted.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @param {sap.bc.api.impl.inav2.filter.Filter} filterInstance The filter instance to be used by this query.
             */
            setFilter : function(filterInstance){
                this.filter = filterInstance;
                this.resultSet = null;
                return this;
            },

            /**
             * Sets the search terms for this query. Results already retrieved by this query are deleted.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @param {String} terms The search terms to searched for by this query.
             */
            setSearchTerms : function(terms) {
                this.filter.setSearchTerms(terms);
                this.resultSet = null;
                return this;
            },

            /**
             * Returns the search terms currently set.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @return {String} The search terms.
             */
            getSearchTerms : function() {
                return this.filter.getSearchTerms();
            },

            /**
             * Returns the skip value of this query.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @return {int} The current skip value of this query.
             */
            getSkip : function(){
                //underscore is needed because of the skip function in QueryBuilder
                return this._skip;
            },

            /**
             * Sets the skip value for this query.
             * To use the new skip value, call getResultSet again.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @param {int} skip The skip value for this query.
             */
            setSkip : function(skip){
                this._skip = skip;
                this.resultSet = null;
                return this;
            },

            /**
             * Returns the top value of this query.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @return {int} The current top value of this query.
             */
            getTop : function(){
                //underscore is needed because of the top function in QueryBuilder
                return this._top;
            },

            /**
             * Sets the top value for this query.
             * To use the new top value, call getResultSet of this query again.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @param {int} top The new top value of this query.
             */
            setTop : function(top){
                this._top = top;
                this.resultSet = null;
                return this;
            },

            /**
             * Adds a filter condition for this query.
             * In the standard setting, the filter uses the AND operator for filter conditions on different
             * attributes and the OR operator for filter conditions on the same attribute.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @param {String} attribute The attribute that the filter condition is applied to.
             * @param {String} operator  The operator used to filter the value.
             * @param {String} value     The value of the attribute to be filtered in conjunction with the operator.
             * @return {sap.bc.ina.api.impl.inav2.Query} this
             * @example
             *  var query = sap.bc.ina.api.sina.createChartQuery();
             *  query.addFilterCondition("CATEGORY", "=", "Notebooks")
             *  .addFilterCondition("PRICE","<","1000")
             *  .addFilterCondition("CURRENCY_CODE", "=", "EUR");
             */
            addFilterCondition : function(attribute, operator, value) {
                if (!(this.filter instanceof filter.Filter)) {
                    this.filter = new filter.Filter();
                }
                this.filter.addFilterCondition(attribute, operator, value);
                this.resultSet = null;
                return this;
            },

            /**
             * Removes a previously added filter condition.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @param {String} attribute The attribute that the filter condition was applied to.
             * @param {String} operator  The operator that was used to filter the value.
             * @param {String} value     The value of the attribute that was filtered in conjunction with the operator.
             * @return {sap.bc.ina.api.impl.inav2.Query} this
             * @example
             *  query.removeFilterCondition("CATEGORY", "=", "Notebooks")
             *  .removeFilterCondition("PRICE","<","1000")
             *  .removeFilterCondition("CURRENCY_CODE", "=", "EUR");
             */
            removeFilterCondition : function(attribute, operator, value) {
                if (!(this.filter instanceof filter.Filter)) {
                    this.filter = new filter.Filter();
                }
                this.filter.removeFilterCondition(attribute, operator, value);
                this.resultSet = null;
                return this;
            },

            /**
             * Returns the result set of the query asynchronously.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @param  {function} onSuccess This function is called once  the result has been
             * retrieved from the server. The first parameter of this function is the result set.
             * The result set has the function getElements() . This contains  all result set elements.
             * @param  {function} onError This function is called if the result set of the query could
             * not be retrieved from the server. The first argument is an error object.
             */
            getResultSet : function(onSuccess,onError) {
                var self = this;
                onSuccess = onSuccess || self.onSuccess;
                onError = onError || self.onError;
                if (self.resultSet !== null) {
                    onSuccess(self.resultSet);
                    return;
                }
                var jsonRequest = self.createJsonRequest();
                self._fireRequest(jsonRequest, true, function(data) {
                    self._responseJson = data;
                    if(data.error){
                        onError(data.error);
                    }
                    self.resultSet = new self.resultSetClass(self.resultSetProperties);
                    self.resultSet.setJsonData(data);
                    onSuccess(self.resultSet);
                }, function(error){
                    self._responseJson = error;
                    if(onError){
                        onError(error);
                    }
                });
            },

            /**
             * Returns the result set of the query synchronously. This function blocks the JS
             * thread until the server call is made. Use getResultSet() for an asynchronous version
             * of this function that does not block the thread.
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @return {Object} The result set of this query. Call getElements() on this object to
             * get the result set elements.
             */
            getResultSetSync : function() {
                var self = this;
                if (self.resultSet !== null) {
                    return self.resultSet;
                }
                var jsonRequest = self.createJsonRequest();
                var data = self._fireRequest(jsonRequest, false);
                self._responseJson = data;
                self.resultSet = new self.resultSetClass(self.resultSetProperties);
                if(data&&data.responseText){
                    var response = JSON.parse(data.responseText);
                    self.resultSet.setJsonData(response);
                }
                return self.resultSet;
            },

            /**
             * Calls the server for the query instances.
             * @private
             * @ignore
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @param  {Object} jsonRequest   Request data that is sent to the server.
             * @param  {boolean} async        Should the request be asynchronous?
             * @param  {function} onSuccess   Function to be called after a successful server request.
             * @param  {function} onError     Function to be called after a server request that terminates with errors.
             */
            _fireRequest : function(jsonRequest, async, onSuccess, onError) {

                var request = {
                    async : async,
                    url : this.system.properties.inaUrl,
                    contentType : 'application/json',
                    dataType : 'json',
                    data : jsonRequest
                };

                if (async) {
                    var jqXHR = this.system.proxy.ajax(request);
                    if(onError){
                        jqXHR.fail(onError);
                    }
                    if(onSuccess){
                        jqXHR.done(onSuccess);
                    }
                    return;
                }
                else {
                    var response = this.system.proxy.ajax(request);
                    return response;
                }

            },

            /**
             * Assembles the order-by expression needed for calling ina.v2 service.
             * @private
             * @ignore
             * @memberOf sap.bc.ina.api.impl.inav2.Query
             * @instance
             * @return {Object} Order-by expression.
             */            
            _assembleOrderBy : function(){
                
                var orderByList= [];

                function orderByToInaSyntax(orderBy,sortOrder){
                    var inaOrderObj = {};
                    if(orderBy.toLowerCase()==='$$score$$'){
                        inaOrderObj.Function = 'Score';
                    }
                    else {
                        inaOrderObj.AttributeName = orderBy;
                    }
                    inaOrderObj.SortOrder = sortOrder.toUpperCase();
                    return inaOrderObj;
                }

                var orderObj;
                if($.type(this.orderBy)==='array'){
                    for (var j = 0; j < this.orderBy.length; j++) {
                        orderObj = orderByToInaSyntax(this.orderBy[j].orderBy,this.orderBy[j].sortOrder);
                        orderByList.push(orderObj);
                    }
                }
                else if($.type(this.orderBy)==='object'){
                    orderObj = orderByToInaSyntax(this.orderBy.orderBy,this.orderBy.sortOrder);
                    orderByList.push(orderObj);
                }
                
                return orderByList;
            }
            
        };

        // =========================================================================
        // class query builder
        // =========================================================================
        module.QueryBuilder.prototype = $.extend({}, module.Query.prototype, {

            /**
            *  Base query builder for a fluent interface.
            *  Use the create*Query factory methods of SINA instead of this class.
            *  @constructs sap.bc.ina.api.impl.inav2.QueryBuilder
            *  @augments {sap.bc.ina.api.impl.inav2.Query}
            */
            init : function(properties){
                module.Query.prototype.init.apply(this, [properties]);
            },

            /**
             * Returns or sets a new data source for this query. If no
             * parameters are given, the current data source is returned.
             * Otherwise, the data source is set.
             * @instance
             * @memberOf sap.bc.ina.api.impl.inav2.QueryBuilder
             * @param {sap.bc.ina.api.impl.inav2.filter.DataSource|Object} newDataSource The current data source of this query.
             * This can be an instance of sap.bc.ina.api.impl.inav2.filter.DataSource or it can be a plain object, like
             * { "schemaName"  : "SYSTEM",
             *   "objectName"  : "J_EPM_PRODUCT" };
             * that the system uses to create an instance of sap.bc.ina.api.impl.inav2.filter.DataSource.
             * @return {sap.bc.ina.api.impl.inav2.filter.DataSource|sap.bc.ina.api.impl.inav2.QueryBuilder} The current
             * data source of this query if no parameter is supplied, otherwise "this".
             */
            dataSource : function(newDataSource){
                if(newDataSource){
                    this.setDataSource(newDataSource);
                    return this;
                }
                else{
                    return this.getDataSource();
                }
            },

            /**
             * Returns or sets a new skip value for this query. If no
             * parameter is given, the current skip value is returned.
             * Otherwise, the skip value is set.
             * @instance
             * @memberOf sap.bc.ina.api.impl.inav2.QueryBuilder
             * @param  {int} newSkip The new skip value for this query.
             * @return {int|sap.bc.ina.api.impl.inav2.QueryBuilder} The current skip value of this query if no parameter
             * was supplied, otherwise "this".
             */
            skip : function(newSkip){
                if(newSkip!==undefined){
                    this._skip = newSkip;
                    this.resultSet = null;
                }
                else{
                    return this._skip;
                }
                return this;
            },

            /**
             * Returns or sets a new top value for this query. If no
             * parameter is given, the current top value is returned.
             * Otherwise, the top value is set.
             * @instance
             * @memberOf sap.bc.ina.api.impl.inav2.QueryBuilder
             * @param  {int} newTop The new top value for this query.
             * @return {int|sap.bc.ina.api.impl.inav2.QueryBuilder} The current top value of this query if no parameter
             * was supplied, otherwise "this".
             */
            top : function(newTop){
                if(newTop!==undefined){
                    this._top = newTop;
                    this.resultSet = null;
                }
                else{
                    return this._top;
                }
                return this;
            }

        });

        // =========================================================================
        // class catalog query
        // =========================================================================
        module.CatalogQuery.prototype = $.extend({}, module.QueryBuilder.prototype, {

            /**
             * A catalog query.
             * @constructs sap.bc.ina.api.impl.inav2.CatalogQuery
             * @augments {sap.bc.ina.api.impl.inav2.QueryBuilder}
             * @param  {Object} properties Configuration object.
             * @since SAP HANA SPS 06
             * @private
             * @ignore
             */
            init : function(properties) {
                properties = properties || {};
                module.QueryBuilder.prototype.init.apply(this, [properties]);
                this.resultSetClass = module.SearchResultSet;
            },

            createJsonRequest : function() {
                return jsontemplates.catalogRequest;
            }

        });

        // =========================================================================
        // class Facet
        // =========================================================================
        module.Facet.prototype = {

            /**
            * A facet that is contained in a perspective.
            * @ignore
            * @constructs sap.bc.ina.api.impl.inav2.Facet
            */
            init : function(properties){
                properties = properties || {};
                this.title = "";
                this.query = null;
                this.facetType = properties.facetType.toLowerCase();
                if(this.facetType==='$$datasources$$'){
                    this.facetType = 'datasource';
                    this.query = new module.ChartQuery();
                    this.query.resultSet = new module.ChartResultSet({"type":"datasource"});
                }
                else if(this.facetType!=='searchresult'){
                    this.facetType = 'attribute';
                    this.query = new module.ChartQuery();
                    this.query.resultSet = new module.ChartResultSet();
                }
                else if(this.facetType==='searchresult'){
                    this.query = new module.SearchQuery();
                    this.query.resultSet = new module.SearchResultSet();
                }
            },

            getChartType : function(){

            },

            getTitle : function(){
                return this.title;
            },

            getDimension : function(){
                return this.dimension;
            },

            getQuery : function(){
                return this.query;
            },

            getLayout : function(){

            },

            getLayoutBinding : function(){

            },

            getColorPalette : function(){

            },

            // getResultSet : function(){
            //     return this.resultSet;
            // },

            setJsonData : function(data){
                this.query.resultSet.setJsonData(data);
                this._parseServerSideFacetMetaData(data.Metadata);
            },

            _parseServerSideFacetMetaData : function(data){
                if(data&&data.Cube){
                    this.title = data.Cube.Description;
                    this.dimension = data.Cube.ObjectName;
                }

            }

        };

        // =========================================================================
        // class perspective query
        // =========================================================================
        module.PerspectiveQuery.prototype = $.extend({}, module.QueryBuilder.prototype, {

            /**
             * Creates a perspective query.
             * @ignore
             * @constructs sap.bc.ina.api.impl.inav2.PerspectiveQuery
             * @param  {Object} properties Configuration object.
             * @augments {sap.bc.ina.api.impl.inav2.Query}
             */
            init : function(properties){
                var self = this;
                self.chartFacets = [];
                self.searchFacet = null;
                self.searchresultset = null;
                self.layout = null;
                self.templateFactsheet = properties.templateFactsheet || false;
                properties = properties || {};
                module.QueryBuilder.prototype.init.apply(this, [properties]);
                this.setOrderBy(properties.orderBy);
                this.resultSetClass = module.Perspective;
            },

            /**
             * Sets how the result will be ordered.
             * @memberOf sap.bc.ina.api.impl.inav2.PerspectiveQuery
             * @instance
             * @param {Object|Array} orderBy If orderBy is an object, it must have the
             * properties 'orderBy' (string) and 'sortOrder' (string).
             * The orderBy property can either be the name of a database attribute that
             * the result will be sorted alphabetically for, or it can be the special
             * '$$score$$' string. The result will then be ordered according to the SAP HANA
             * Score function.
             * This function can also receive an array of these objects for multiple
             * order-by values, for example to order by $$score$$ and then alphabetically
             * for an attribute. The result will then be ordered after the first entry.
             * If two results have the same rank however, they will be ordered after the
             * second order-by value, and so on.
             * @default {orderBy:'$$score$$', sortOrder:'DESC'}
             * See {@link sap.bc.ina.api.impl.inav2.Sina#createSearchQuery} for examples.
             */
            setOrderBy : function(orderBy){
                this.resultSet = null;
                this.orderBy = orderBy || { orderBy:'$$score$$', sortOrder:'DESC' };
            },

            createJsonRequest : function() {
                if (this.templateFactsheet) {
                    jsontemplates.perspectiveRequest = jsontemplates.perspectiveRequestFactsheet;
                }
                jsontemplates.perspectiveRequest.DataSource = this.filter.dataSource.toInAJson();
                var searchterms = this.filter.getSearchTerms();
                jsontemplates.perspectiveRequest.Search.SearchTerms = searchterms;
                if(config&&config.startWithSearch!==undefined&&config.startWithSearch==='false'){
                    if(!searchterms&&this.filter.dataSource.getObjectName().value.toLowerCase()==='$$all$$'){
                        //TODO: remove workaround: return a catalog request and only show datasource facet,
                        //due to high response time while searching for '*' in $$ALL$$
                        var cq = new module.CatalogQuery();
                        return cq.createJsonRequest();
                    }
                }
                jsontemplates.perspectiveRequest.Search.Top = this._top;
                jsontemplates.perspectiveRequest.Search.Skip = this._skip;
                jsontemplates.perspectiveRequest.Search.Filter = this.filter.getJson();
                jsontemplates.perspectiveRequest.Search.OrderBy = this._assembleOrderBy();
                return jsontemplates.perspectiveRequest;
            },

            getPerspective : function(onSuccess,onError) {
                this.getResultSet(onSuccess,onError);
            },

            generatePerspectiveSync : function(){
                return this.getResultSetSync();
            }

        });

        // =========================================================================
        // class Perspective (ResultSet)
        // =========================================================================
        module.Perspective.prototype = {

            /**
            *  A perspective.
            *  @constructs sap.bc.ina.api.impl.inav2.Perspective
            *  @ignore
            */
            init : function(properties){
                var self = this;
                self.chartFacets = [];
                self.searchFacet = null;
                self.searchresultset = null;
                self.layout = null;
                properties = properties || {};
            },

            getSearchResultSet : function(){
                return this.searchresultset;
            },

            getChartFacets : function(){
                return this.chartFacets;
            },

            getSearchFacet : function(){
                return this.searchFacet;
            },

            getLayout : function(){
                return this.layout;
            },

            setJsonData : function(data){
                var self = this;
                //there is always a searchresult
                self.searchFacet = new module.Facet({"facetType":"searchresult"});
                self.searchFacet.setJsonData(data);
                self.searchresultset = self.searchFacet.getQuery().getResultSetSync();
                if(data.ResultsetFacets&&data.ResultsetFacets.Elements){
                    for(var j=0;j<data.ResultsetFacets.Elements.length;j++){
                        var facet = new module.Facet({"facetType":data.ResultsetFacets.Elements[j].Metadata.Cube.ObjectName});
                        facet.setJsonData(data.ResultsetFacets.Elements[j]);
                        self.chartFacets.push(facet);
                    }
                }
                else{
                    //TODO: remove workaround
                    //convert catalogquery searchresult to a datasource facet
                    var dsFacet = new module.Facet({facetType:'$$datasources$$'});
                    for (var i = 0; i < self.searchFacet.getQuery().getResultSetSync().getElements().length; i++) {
                        var dataSource = new filter.DataSource();
                        var resultElement = self.searchFacet.getQuery().getResultSetSync().getElements()[i];
                        dataSource.setObjectName(resultElement.ObjectName.valueRaw);
                        dataSource.setPackageName(resultElement.PackageName.valueRaw);
                        dataSource.setSchemaName(resultElement.SchemaName.valueRaw);
                        dataSource.setType(resultElement.Type.valueRaw);
                        dataSource.setLabel(resultElement.Description.value);
                        dsFacet.getQuery().getResultSetSync().getElements()[i] = {dataSource: dataSource};
                    }
                    self.searchFacet.getQuery().getResultSetSync().elements = [];
                    self.searchFacet.getQuery().getResultSetSync().totalcount = -1;
                    self.chartFacets.push(dsFacet);
                }

            }

        };

        // =========================================================================
        // class suggestion query
        // =========================================================================
        module.SuggestionQuery.prototype = $.extend({}, module.QueryBuilder.prototype, {

            /**
             * A suggestion query for a SAP HANA system.
             * @constructs sap.bc.ina.api.impl.inav2.SuggestionQuery
             * @augments {sap.bc.ina.api.impl.inav2.QueryBuilder}
             * @param  {Object} properties Configuration object.
             * @since SAP HANA SPS 06
             * @private
             */
            init : function(properties) {
                properties = properties || {};
                this.attributes = properties.attributes || [];
                module.QueryBuilder.prototype.init.apply(this, [properties]);
                this.resultSetClass = module.SuggestionResultSet;
            },

            /**
             * Adds a response attribute to this suggestion query. This attributes is used
             * to look for suitable suggestions for the search term of this query. At least one term is required.
             * @instance
             * @since SAP HANA SPS 06
             * @memberOf sap.bc.ina.api.impl.inav2.SuggestionQuery
             * @param {String} attribute The name of the attribute as given in the SAP HANA database.
             */
            addResponseAttribute : function(attribute) {
                this.attributes.push(attribute);
                this.resultSet = null;
                return this;
            },

            /**
             * Sets a list of response attributes for this suggestion query. These attributes are used
             * to look for suitable suggestions for the search term of this query. At least one term is required.
             * @instance
             * @since SAP HANA SPS 06
             * @memberOf sap.bc.ina.api.impl.inav2.SuggestionQuery
             * @param {Array} attributes A list of names of the attributes as given in the SAP HANA database.
             */
            setResponseAttributes : function(attributes) {
                this.attributes = attributes;
                this.resultSet = null;
                return this;
            },

            createJsonRequest : function() {
                jsontemplates.suggestionRequest.Suggestions.Precalculated = false;
                var searchterms = this.filter.getSearchTerms();
                if(this.attributes.length===0){
                    throw "add at least one response attribute to your query";
                }
                if(searchterms.charAt(searchterms.length-1)!=='*'){
                    searchterms += '*';
                }
                jsontemplates.suggestionRequest.Suggestions.SearchTerms = searchterms;
                jsontemplates.suggestionRequest.Suggestions.AttributeNames = this.attributes;
                jsontemplates.suggestionRequest.DataSource = this.filter.dataSource.toInAJson();
                jsontemplates.suggestionRequest.Suggestions.Top = this._top;
                // jsontemplate.Analytics.Definition.Filter = this.filter.getJson();
                return jsontemplates.suggestionRequest;
            }

        });


        // =========================================================================
        // class suggestion result set
        // =========================================================================
        module.SuggestionResultSet.prototype = {

            /**
             * A suggestion result set for a SAP HANA system.
             * @constructs sap.bc.ina.api.impl.inav2.SuggestionResultSet
             * @since SAP HANA SPS 06
             * @private
             */
            init : function() {
                this.suggestions = [];
            },

            setJsonData : function(data) {
                this.suggestions = [];
                var itemLists = {};
                for (var i=0;i<data.ItemLists.length;i++){
                    itemLists[data.ItemLists[i].Name] = data.ItemLists[i];
                }
                // only Suggestions ItemList is relevant here
                for(var a=0;a<itemLists.Suggestions.Items.length;a++){
                    var item = itemLists.Suggestions.Items[a],
                    term = "",
                    attribute = "",
                    attributeDescription = "";
                    // dataSource = new filter.DataSource(),
                    // dataSourceDescription = "";
                    var suggestion = {};
                    for (var d = 0; d < item.NamedValues.length; ++d) {
                        var namedValue = item.NamedValues[d];
                        switch(namedValue.Name){
                            case "Term":
                                term = namedValue.Value;
                                suggestion.label = term;
                            break;
                            // case "$$DataSource$$":
                            //     dataSource = namedValue.Value;
                            //     dataSource.setObjectName(dataSource);
                            // break;
                            // case "$$DataSourceDescription$$":
                            //     dataSourceDescription = namedValue.Value;
                            //     dataSource.setLabel(dataSourceDescription);
                            // break;
                            case "AttributeName":
                                attribute = namedValue.Value;
                                suggestion.attribute = attribute;
                            break;
                            case "$$AttributeDescription$$":
                                attributeDescription = namedValue.Value;
                                suggestion.attributeDescription = attributeDescription;
                            break;
                            case "Score":
                                var score = namedValue.Value;
                                suggestion.score = parseInt(score,10);
                            break;
                        }

                    }
                    // suggestion.dataSource = dataSource;
                    this.suggestions.push(suggestion);
                }
                this.suggestions.sort(function(a,b){
                    return b.score - a.score;
                });
                for (var o = this.suggestions.length - 1; o >= 0; o--) {
                    delete this.suggestions[o].score;
                }
            },

            /**
             * Returns the elements of the result set, ordered by relevancy score.
             * @memberOf sap.bc.ina.api.impl.inav2.SuggestionResultSet
             * @instance
             * @since SAP HANA SPS 06
             * @return {Array} A list of result set elements.
             * @example
             * var queryProperties = {
             *     dataSource  : { schemaName : "SYSTEM",
             *                     objectName : "J_EPM_PRODUCT"
             *     },
             *     searchTerms : "s*",
             *     attributes  : ['CATEGORY','PRODUCT_ID','TEXT','PRICE','CURRENCY_CODE']
             * };
             * var query = sap.bc.ina.api.sina.createSuggestionQuery(queryProperties);
             * var resultSet = query.getResultSetSync();
             * var elements = resultSet.getElements();
             * // contents of elements (shortened):
             * [{"label":"USD","attribute":"CURRENCY_CODE"},
             *   {"label":"Software","attribute":"CATEGORY"},
             *   {"label":"Scanner","attribute":"CATEGORY"},
             *   {"label":"Speakers","attribute":"CATEGORY"},
             *   {"label":"1200 dpi x 1200 dpi - up to 25 ppm (mono) / up to 24 ppm (colour) - capacity: 100 sheets - Hi-Speed USB2.0, Ethernet","attribute":"TEXT"},
             *   {"label":"1000 dpi x 1000 dpi - up to 16 ppm (mono) / up to 15 ppm (colour)- capacity 80 sheets - scanner (216 x 297 mm, 1200dpi x 2400dpi)","attribute":"TEXT"},
             *   {"label":"Print 2400 dpi image quality color documents at speeds of up to 32 ppm¹ (color) or 36 ppm¹ (monochrome), letter/A4. Powerful 500 MHz processor, 512MB of memory","attribute":"TEXT"},
             *   {"label":"Scanner and Printer","attribute":"CATEGORY"},
             *   {"label":"1000 dpi x 1000 dpi - up to 15 ppm (mono) / up to 13 ppm (colour) - capacity: 40 sheets - Hi-Speed USB - excellent dimesions for the small office","attribute":"TEXT"},
             *   {"label":"Print up to 25 ppm letter and 24 ppm A4 color or monochrome, with a first-page-out-time of less than 13 seconds for monochrome and less than 15 seconds for color","attribute":"TEXT"}
             *  ]
             */
            getElements : function() {
                return this.suggestions;
            }

        };

        // =========================================================================
        // class suggestion 2 query
        // =========================================================================
        module.Suggestion2Query.prototype = $.extend({}, module.QueryBuilder.prototype, {

            init : function(properties) {
                properties = properties || {};
                this.attributes = properties.attributes || [];
                module.QueryBuilder.prototype.init.apply(this, [properties]);
                this.resultSetClass = module.Suggestion2ResultSet;
                this.searchTerms = properties.searchTerms || {};
                this.suggestionTerm = properties.suggestionTerm || '';
            },

            /**
             * Adds a response attribute to this suggestion query. Instead of the SuggestionQuery
             * which searches within these attributes. This Suggestion2Query will search everywhere
             * but only returns these response attributes.
             * @ignore
             * @instance
             * @since SAP HANA SPS 06
             * @memberOf sap.bc.ina.api.impl.inav2.Suggestion2Query
             * @param {String} attribute the name of the attribute as given in the HANA database
             */
            addResponseAttribute : function(attribute) {
                this.attributes.push(attribute);
                this.resultSet = null;
                return this;
            },


            addSearchTerm : function(term) {
                if(term){
                    this.searchTerms[term] = term;
                }
                this.resultSet = null;
                return this;
            },

            setSuggestionTerm : function(term){
                if(term.charAt(term.length-1)!=='*'){
                    term += '*';
                }
                this.suggestionTerm = term;
                this.resultSet = null;
                return this;
            },


            /**
             * Adds a response attribute to this suggestion query. Instead of the SuggestionQuery
             * which searches within these attributes. This Suggestion2Query will search everywhere
             * but only returns these response attributes.
             * @ignore
             * @instance
             * @memberOf sap.bc.ina.api.impl.inav2.Suggestion2Query
             * @param {Array} attributes list with the names of the attribute as given in the SAP HANA database.
             */
            setResponseAttributes : function(attributes) {
                this.attributes = attributes;
                this.resultSet = null;
                return this;
            },

            createJsonRequest : function() {
                jsontemplates.suggestion2Request.Suggestions2.Precalculated = false;
                jsontemplates.suggestion2Request.Suggestions2.NamedValues = [];
                for (var i = 0; i < this.attributes.length; i++) {
                    jsontemplates.suggestion2Request.Suggestions2.NamedValues.push({AttributeName:this.attributes[i],Name:this.attributes[i]});
                }
                jsontemplates.suggestion2Request.DataSource = this.filter.dataSource.toInAJson();
                jsontemplates.suggestion2Request.Suggestions2.Top = this.getTop();
                jsontemplates.suggestion2Request.Suggestions2.Skip = this.getSkip();
                var rootConditionGroup = new filter.ConditionGroup();
                var searchTermConditions = new filter.ConditionGroup();
                for(var searchTerm in this.searchTerms){
                    var stCondition = new filter.Condition('$$SearchTerms$$','=',searchTerm,'search');
                    rootConditionGroup.addCondition(stCondition);
                }
                var suggestionCondition = new filter.Condition('$$SuggestionTerms$$','=',this.suggestionTerm,'search');
                rootConditionGroup.addCondition(suggestionCondition);
                rootConditionGroup.addCondition(this.getFilter().getFilterConditions());
                jsontemplates.suggestion2Request.Suggestions2.Filter = rootConditionGroup.getJson();
                return jsontemplates.suggestion2Request;
            }

        });

        // =========================================================================
        // class suggestion 2 result set
        // =========================================================================
        module.Suggestion2ResultSet.prototype = {

            init : function() {
                this.datasources = {};
                this.suggestions = [];
            },

            setJsonData : function(data) {
                this.datasources = {};
                this.suggestions = [];

                function isNamedValueSuitable(name){
                    switch(name) {
                        //upper and lower bounds are not needed now
                        case "Value1":
                        case "Value2":
                        case "Order":
                            return false;
                        default: return true;
                    }
                }

                var itemLists = {};
                if(!data.ItemLists){
                    return;
                }
                for (var i=0;i<data.ItemLists.length;i++){
                    itemLists[data.ItemLists[i].Name] = data.ItemLists[i];
                }

                for(var a=0;a<data.Grids.length;a++){
                    var axes = data.Grids[a].Axes;
                    var cells = data.Grids[a].Cells;
                    if(axes===undefined||cells===undefined){
                        return;
                    }
                    var suggestionDict = {};
                    for (var cellIndex = 0; cellIndex < cells.length; ++cellIndex) {
                        var cell = cells[cellIndex],
                        attributeName = "",
                        attributeLabel = "",
                        dataSourceLabel = "",
                        suggestion = {};
                        suggestion.dataSource = new filter.DataSource();
                        suggestion.attribute = {};
                        for (var j = 0; j < cell.Index.length; j++) {
                            var cellIndexValue = cell.Index[j];
                            var tuple = axes[j].Tuples[cellIndexValue];
                            if(tuple===undefined){
                                continue;
                            }
                            for (var c = 0; c < tuple.length; c++) {
                                var dimension = axes[j].Dimensions[c];
                                var tupleValueForDimension = tuple[c];
                                var itemlist = itemLists[dimension.ItemListName];
                                var namedValues = itemlist.Items[tupleValueForDimension].NamedValues;
                                for (var d = 0; d < namedValues.length; ++d) {
                                    var namedValue = namedValues[d];
                                    switch(namedValue.Name){
                                        case "$$Term$$":
                                            suggestion.valueRaw = cell.Value || cell.ValueFormatted || null;
                                            suggestion.value    = cell.ValueFormatted || cell.Value || null;
                                            suggestion.labelRaw = namedValue.Value;
                                            suggestion.label = namedValue.ValueFormatted;
                                            if(!suggestion.filter){
                                                suggestion.filter = {};
                                            }
                                            suggestion.filter.value = suggestion.labelRaw ;
                                            suggestion.filter.valueLabel = suggestion.labelRaw ;

                                        break;
                                        case "$$DataSource$$":
                                            var objectName = namedValue.Value;
                                            suggestion.dataSource.setObjectNameValue(objectName);
                                        break;
                                        case "$$DataSourceDescription$$":
                                            var objectNameLabel = namedValue.Value;
                                            suggestion.dataSource.setObjectNameLabel(objectNameLabel);
                                        break;
                                        case "$$Attribute$$":
                                            var attribute = namedValue.Value;
                                            if(!suggestion.filter){
                                                suggestion.filter = {};
                                            }
                                            suggestion.filter.attribute = attribute;
                                            suggestion.attribute.value = attribute;
                                        break;
                                        case "$$AttributeDescription$$":
                                            attributeLabel = namedValue.Value;
                                            if(!suggestion.filter){
                                                suggestion.filter = {};
                                            }
                                            suggestion.filter.attributeLabel = attributeLabel;
                                            suggestion.attribute.label = attributeLabel;
                                        break;
                                    }

                                }
                            }
                        }
                        this.suggestions.push(suggestion);
                    }

                }

            },


            getElements : function() {
                return this.suggestions;
            }

        };

        // =========================================================================
        // class chart query
        // =========================================================================
        module.ChartQuery.prototype = $.extend({}, module.QueryBuilder.prototype, {

            /**
             * A query that yields results suitable for simple chart controls, like
             * pie or bar charts.
             * @since SAP HANA SPS 06
             * @constructs sap.bc.ina.api.impl.inav2.ChartQuery
            *  @augments {sap.bc.ina.api.impl.inav2.QueryBuilder}
            *  @private
            */
            init : function(properties) {
                properties = properties || {};
                module.QueryBuilder.prototype.init.apply(this, [properties]);
                this.dimensions = {};
                this.dimensions.CustomDimension1 = {
                    Axis : "Columns",
                    Name : "CustomDimension1",
                    Members : []
                };
                properties.dimensions = properties.dimensions || {};
                if($.type(properties.dimensions)==='array'){
                    for (var i = 0; i < properties.dimensions.length; i++) {
                        this.addDimension(properties.dimensions[i]);
                    }
                }
                else if($.type(properties.dimensions)==='string'||$.type(properties.dimensions)==='object') {
                    this.addDimension(properties.dimensions);
                }
                properties.measures = properties.measures || {};
                if($.type(properties.measures)==='array'){
                    for (var j = 0; j < properties.measures.length; j++) {
                        this.addMeasure(properties.measures[j]);
                    }
                }
                else if($.type(properties.measures)==='object') {
                    this.addMeasure(properties.measures);
                }
                this.resultSetClass = module.ChartResultSet;
            },

            createJsonRequest : function() {
                jsontemplates.chartRequest.DataSource = this.filter.dataSource.toInAJson();
                jsontemplates.chartRequest.SearchTerms = this.filter.getSearchTerms();
                jsontemplates.chartRequest.Analytics.Definition.Filter = this.filter.getJson();
                jsontemplates.chartRequest.Analytics.Definition.Dimensions = [];
                for(var dimension in this.dimensions){
                    jsontemplates.chartRequest.Analytics.Definition.Dimensions.push(this.dimensions[dimension]);
                }
                return jsontemplates.chartRequest;
            },

            /**
             * Adds a count measure for the given dimension to the chart query.
             * @memberOf sap.bc.ina.api.impl.inav2.ChartQuery
             * @instance
             * @param  {string} dimension The dimension that the count is computed for.
             * @return {sap.bc.ina.api.impl.inav2.ChartQuery} The chart query to allow chained method calls.
             */
            count : function(dimension){
                this.addMeasure({name:dimension,aggregationFunction:'COUNT'});
                return this;
            },

            /**
             * Adds one of the following aggregations to a dimension: 'COUNT', 'AVG', 'SUM', 'MIN', 'MAX'
             * @memberOf sap.bc.ina.api.impl.inav2.ChartQuery
             * @instance
             * @since SAP HANA SPS 06
             * @param {Object} properties The configuration object can have the following properties:
             * name, aggregationFunction, sortOrder, top.
             * @example
             * var query = sina.createChartQuery()
             *  .dataSource({ "schemaName"  : {"value":"SYSTEM"},
             *                "objectName"  : {"value":"J_EPM_PRODUCT"})
             * .addDimension("CATEGORY")
             * .addMeasure({name:"CATEGORY",aggregationFunction:"COUNT"});
             * var resultSet = query.getResultSetSync();
             */
            addMeasure : function(properties){
                if($.isEmptyObject(properties)){
                    return;
                }
                var axis = "Columns";
                var name = "CustomDimension1";//COUNT_"+dimension;
                var member;
                if(properties.aggregationFunction.toUpperCase()==='COUNT'||properties.aggregationFunction.toUpperCase()==='AVG'){
                    member = this._createAggregationDimension(properties.aggregationFunction,properties.name,properties.aggregationFunction,properties.sortOrder,properties.top);
                }
                else {
                    member = this._createAggregationDimension(properties.aggregationFunction,"",properties.name,properties.sortOrder,properties.top);
                    delete member.AggregationDimension;
                    delete member.Name;
                    delete member.SortOrder;
                }
                this.dimensions.CustomDimension1.Members.push(member);
                return this;
            },

            /**
             * Adds a dimension to the query.
             * @memberOf sap.bc.ina.api.impl.inav2.ChartQuery
             * @instance
             * @since SAP HANA SPS 06
             * @param {String|Object} dimension The name of the dimension. This is the same as the name of the corresponding database attribute.
             * If it is an object, the name and values of this object must be the same as the functions parameters.
             * @param {int} sortOrder Sort order of this dimension. 1 for ascending, 2 for descending.
             * Default is 1.
             * @param {int} top How many members does the dimension have? The default value is 5.
             * @example <caption>Plain function call</caption>
             * var query = sina.createChartQuery()
             * .addDimension("CATEGORY",1,5)
             * @example <caption>Call with properties object</caption>
             * var query = sina.createChartQuery({
             *     dimensions: [{name: "YEAR", sortOrder: 1, top:5}]
             * });
             */
            addDimension : function(dimension,sortOrder,top){
                if($.type(dimension)==='object'){
                    if($.isEmptyObject(dimension)){
                        return;
                    }
                    this.dimensions[dimension.name] = this._createDimension(dimension.name,null,dimension.sortOrder,dimension.top);
                }
                else if($.type(dimension)==='string'){
                    if(!dimension){
                        return;
                    }
                    this.dimensions[dimension] = this._createDimension(dimension,null,sortOrder,top);
                }
                return this;
            },

            _createDimension : function(dimension,axis,sortOrder,top){
                return { "Axis"      : axis||"Rows",
                         "Name"      : dimension,
                         "SortOrder" : sortOrder||1,
                         "Top"       : top||5 };
            },

            /**
             * Creates an aggregation for a dimension.
             * @private
             * @ignore
             * @param  {String} aggregation Type of aggregation to be created. The default value is SUM.
             * @param  {String} dimension   Dimension that the aggregation is created for.
             * @param  {int}    sortOrder   Sort order of the aggregation dimension. 1 for ascending, 2 for descending.
             * @param  {String} name        Name of the aggregation to be created.
             * @return {Object}             An object suitable for an INA request.
             */
            _createAggregationDimension : function(aggregationFunction,aggregationDimension,name,sortOrder,top){
                return {
                    "Aggregation" : aggregationFunction,
                    "AggregationDimension" : aggregationDimension,
                    "MemberOperand" : {
                        "AttributeName" : "Measures",
                        "Comparison" : "=",
                        "Value" : name
                    },
                    "Name" : name,
                    "SortOrder" : sortOrder||2
                };
            }

        });

        // =========================================================================
        // class chart result set
        // =========================================================================
        module.ChartResultSet.prototype = {

            /**
             * A result set that yields elements suitable for simple chart controls, like
             * pie or bar charts.
             * @since SAP HANA SPS 06
             * @constructs sap.bc.ina.api.impl.inav2.ChartResultSet
             * @private
            */
            init : function(properties) {
                properties = properties || {};
                this.type = properties.type;
                this.elements = [];
            },

            /**
             * Creates filter conditions for simple charts based on named values.
             * It also decides whether the element sets a filter range or an 'equals' filter.
             * There are the following cases:
             * 1) Value1 and Value2 both have values that are not the empty string:
             * It is a range with upper and lower boundary.
             * 2) Value2 has no value:
             * It is not a range but an equals ("=") filter condition.
             * 3) Either Value1 or Value2 have an empty string ("") as value:
             * It is a range with only one boundary, upper or lower.
             * @private
             * @ignore
             * @param  {object} element     The chart element that the filter condition is added to.
             * @param  {object} namedValues Server side data.
             * @param  {object} metadata    Server side meta data.
             */
            _parseNamedValues : function(element,namedValues,metadata){
                var self = this;

                for (var i = 0; i < namedValues.length; i++) {
                    var name = namedValues[i].Name;
                    var value = namedValues[i].Value;
                    element.label = namedValues[i].ValueFormatted;
                    element.labelRaw = namedValues[i].Value;
                    switch(name) {
                      case '$$DataSource$$':      self._parseNamedValuesForDataSource(element,value);
                                                  break;
                      case '$$AttributeValue$$' : self._parseNamedValuesForRange(element,value,metadata);
                                                  break;
                    }

                }
            },

            _parseNamedValuesForRange : function(element,values,metadata){
                var valueIDRaw,
                value1,
                value2;

                for (var d = 0; d < values.length; ++d) {
                    var namedValue = values[d];
                    switch(namedValue.Name) {
                        case "ValueID":
                            element.label = namedValue.ValueFormatted;
                            valueIDRaw = namedValue.Value;
                            break;
                        case "Value1":
                            if(metadata.Cube.ObjectName&&(namedValue.Value!==undefined)){
                                value1 = new filter.Condition(metadata.Cube.ObjectName,">=",namedValue.Value);
                            }
                            break;
                        case "Value2":
                            if(metadata.Cube.ObjectName&&(namedValue.Value!==undefined)){
                                value2 = new filter.Condition(metadata.Cube.ObjectName,"<=",namedValue.Value);
                            }
                            break;
                        case "Order":
                            break;
                    }
                }
                if(valueIDRaw){
                    if(value1&&value2){
                        // 1) range
                        var group = new filter.ConditionGroup();
                        group.setOperator("AND");
                        group.setLabel(element.label);
                        if(value1.value){
                            // 3) upper boundary of the range
                            group.addCondition(value1);
                        }
                        if(value2.value){
                            // 3) lower boundary of the range
                            group.addCondition(value2);
                        }
                        element.labelRaw = group;
                    }
                    else if(value1&&value1.value&&(!value2)){
                        // 2) not a range
                        value1.operator = '=';
                        element.labelRaw = value1;
                    }
                    else if(value2&&value2.value&&(!value1)){
                        // 2) not a range
                        value2.operator = '=';
                        element.labelRaw = value2;
                    }
                }
            },

            // DataSource chart (category tree)
            _parseNamedValuesForDataSource : function(element,values){

                element.dataSource = new filter.DataSource();
                for (var d = 0; d < values.length; ++d) {
                    var namedValue = values[d];
                    switch(namedValue.Name){
                        case "ObjectName":
                            var label = namedValue.ValueFormatted;
                            element.dataSource.setLabel(label);
                            element.dataSource.setObjectName(namedValue.Value,namedValue.ValueFormatted);
                            break;
                        case "PackageName":
                            element.dataSource.setPackageName(namedValue.Value,namedValue.ValueFormatted);
                            break;
                        case "SchemaName":
                            element.dataSource.setSchemaName(namedValue.Value,namedValue.ValueFormatted);
                            break;
                        case "Type":
                            element.dataSource.setType(namedValue.Value,namedValue.ValueFormatted);
                            break;
                        default:
                            element[namedValue.Name] = namedValue.Value;
                        break;
                    }
                }
            },

            setJsonData : function(data) {
                this.elements = [];
                var metadata;
                if(data.Metadata){
                    metadata = data.Metadata;
                }
                if(data.ResultSet){
                    data = data.ResultSet;
                }
                var itemLists = {};
                for (var i=0;i<data.ItemLists.length;i++){
                    itemLists[data.ItemLists[i].Name] = data.ItemLists[i];
                }

                for(var a=0;a<data.Grids.length;a++){
                    var axes = data.Grids[a].Axes;
                    var cells = data.Grids[a].Cells;
                    for (var cellIndex = 0; cellIndex < cells.length; ++cellIndex) {
                        //one dimension chart
                        if (axes[0].Dimensions.length === 1) {
                            var cell = cells[cellIndex];
                            var element = {
                                valueRaw : cell.Value || cell.ValueFormatted || null,
                                value    : cell.ValueFormatted || cell.Value || null
                            };
                            // only axes 0 is relevant for chart results
                            for (var j = 0; j < 1; j++) {
                                var cellIndexValue = cell.Index[j];
                                var tuple = axes[j].Tuples[cellIndexValue];
                                if(tuple===undefined){
                                    continue;
                                }
                                for (var c = 0; c < tuple.length; c++) {
                                    var dimension = axes[j].Dimensions[c];
                                    var tupleValueForDimension = tuple[c];
                                    var itemlist = itemLists[dimension.ItemListName];
                                    var namedValues = itemlist.Items[tupleValueForDimension].NamedValues;
                                    this._parseNamedValues(element,namedValues,metadata);
                                }
                            }
                            this.elements.push(element);
                        }

                    }
                }

            },

            /**
             * Returns the elements of the result set.
             * @memberOf sap.bc.ina.api.impl.inav2.ChartResultSet
             * @instance
             * @since SAP HANA SPS 06
             * @return {Array} A list of result set elements.
             * @example
             * var query = sap.bc.ina.api.sina.createChartQuery()
             * .dataSource({ schemaName : "SYSTEM",
             *               objectName : "J_EPM_PRODUCT"
             *  })
             * .addDimension("CATEGORY")
             * .addMeasure({ name : "CATEGORY",
             *               aggregationFunction : "COUNT"
             * }); //end of query
             * var resultSet = query.getResultSetSync();
             * var elements = resultSet.getElements();
             * // contents of elements:
             * [
                {
                  "label": "Others",
                  "labelRaw": "Others",
                  "value": "13",
                  "valueRaw": 13
                },
                {
                  "label": "Notebooks",
                  "labelRaw": "Notebooks",
                  "value": "10",
                  "valueRaw": 10
                },
                {
                  "label": "Flat screens",
                  "labelRaw": "Flat screens",
                  "value": "9",
                  "valueRaw": 9
                },
                {
                  "label": "Software",
                  "labelRaw": "Software",
                  "value": "8",
                  "valueRaw": 8
                },
                {
                  "label": "Electronics",
                  "labelRaw": "Electronics",
                  "value": "5",
                  "valueRaw": 5
                }
              ]
             */
            getElements : function() {
                return this.elements;
            }
        };

        // =======================================================================
        // result set parser
        // =======================================================================

        var ResultSetParser = function() {
            this.init.apply(this, arguments);
        };

        ResultSetParser.prototype = {

            init: function(options) {
                this.resultSet = options.resultSet;
                this.parse();
            },

            parse: function() {

                // enhance result set:
                // -> create link to item lists in dimensions of axes
                this.enhance(this.resultSet);

                // get reference to grid,row axis,col axis
                var grid = this.resultSet.Grids[0];
                var rowAxis = grid.Axes[0];
                var colAxis = grid.Axes[1];

                // key function for getting key of an item
                // (key needed for insertion into tree)
                var keyFunction = function(item) {
                    return item.NamedValues[0].Value;
                };

                // create new tree
                var tree = new Tree({
                    keyFunction: keyFunction
                });

                // loop at all cells and add cell to result tree
                for (var i = 0; i < grid.Cells.length; ++i) {

                    var cell = grid.Cells[i];

                    var rowIndex = cell.Index[0];
                    var rowItems = this.resolve(rowAxis, rowIndex);
                    var rowItemsDebug = rowItems.map(keyFunction);

                    var colIndex = cell.Index[1];
                    var colItems = this.resolve(colAxis, colIndex);
                    var colItemsDebug = colItems.map(keyFunction);
                    colItems = [$.extend({},colItems[0])];
                    // add cell info to col item
                    colItems[0].cell = cell;

                    // assemble tree path = rowItems + colItems
                    var treePath = rowItems;
                    treePath.push.apply(treePath, colItems);

                    // insert
                    tree.insert(treePath);

                }

                return tree;
            },

            resolve: function(axis, index) {
                var items = [];
                var tuples = axis.Tuples[index];
                for (var i = 0; i < tuples.length; ++i) {
                    var itemIndex = tuples[i];
                    var item = axis.Dimensions[i].ItemList.Items[itemIndex];
                    items.push(item);
                }
                return items;
            },

            enhance: function(resultSet) {

                // create dictionary with item lists
                var itemListByName = {};
                for (var i = 0; i < resultSet.ItemLists.length; ++i) {
                    var itemList = resultSet.ItemLists[i];
                    itemListByName[itemList.Name] = itemList;
                }

                // loop at all dimensions and set link to item list
                for (i = 0; i < resultSet.Grids.length; ++i) {
                    var grid = resultSet.Grids[i];
                    for (var j = 0; j < grid.Axes.length; ++j) {
                        var axis = grid.Axes[j];
                        for (var k = 0; k < axis.Dimensions.length; ++k) {
                            var dimension = axis.Dimensions[k];
                            dimension.ItemList = itemListByName[dimension.ItemListName];
                        }
                    }
                }

            }

        };

        // =======================================================================
        // tree
        // =======================================================================

        var Tree = function() {
            this.init.apply(this, arguments);
        };

        Tree.prototype = {

            init: function(options) {

                // create root tree element
                this.root = {
                    data: "root",
                    subTree: {}
                };

                // set key function
                if (options && options.keyFunction) {
                    this.keyFunction = options.keyFunction;
                } else {
                    this.keyFunction = function(obj) {
                        return obj;
                    };
                }
            },

            insert: function(path) {
                var parent = this.root;
                for (var i = 0; i < path.length; ++i) {
                    var pathElement = path[i];
                    var key = this.keyFunction(pathElement);
                    if (!parent.subTree.hasOwnProperty(key)) {
                        parent.subTree[key] = {
                            subTree: {},
                            data: pathElement
                        };
                    }
                    parent = parent.subTree[key];
                }
            },

            toString: function() {
                var stringStream = [];
                this.toStringHelper(this.root, [], stringStream);
                return stringStream.join("");
            },

            toStringHelper: function(tree, path, stringStream) {

                var pathElement = null;
                if (tree === this.root) {
                    pathElement = tree.data;
                } else {
                    pathElement = this.keyFunction(tree.data);
                }
                path.push(pathElement);


                var hasChildren = false;
                for (var child in tree.subTree) {
                    if (tree.subTree.hasOwnProperty(child)) {
                        hasChildren = true;
                        var subTree = tree.subTree[child];
                        var pathCopy = path.slice(0);
                        this.toStringHelper(subTree, pathCopy, stringStream);
                    }
                }

                if (!hasChildren) {
                    stringStream.push(path.toString() + "\n");
                }
            }
        };

        // =========================================================================
        // class group bar chart query
        // =========================================================================
        module.GroupBarChartQuery.prototype = $.extend({}, module.ChartQuery.prototype, {

            /**
             * A query that yields results suitable for a grouped bar chart control.
             * @constructs sap.bc.ina.api.impl.inav2.GroupBarChartQuery
            *  @augments {sap.bc.ina.api.impl.inav2.ChartQuery}
            *  @private
            */
            init : function(properties) {
                properties = properties || {};
                module.ChartQuery.prototype.init.apply(this, [properties]);
                this.resultSetClass = module.GroupBarChartResultSet;
            }
        });

        // =========================================================================
        // class goruped bar chart result set
        // =========================================================================
        module.GroupBarChartResultSet.prototype = {

            /**
             * A result set that yields elements suitable for a grouped bar chart.
             * @since SAP HANA SPS 06
             * @constructs sap.bc.ina.api.impl.inav2.GroupBarChartResultSet
             * @private
            */
            init : function(properties) {
                properties = properties || {};
                this.elements = [];
            },

            setJsonData : function(data) {
                var self = this;
                this.elements = [];
                var resultSetParser = new ResultSetParser({
                    resultSet: data
                });
                var tree = resultSetParser.parse();
                function parseSubTree(subTree,parentElem){
                    for(var itemName in subTree){
                        var item = subTree[itemName];
                        var elem = {label:item.data.NamedValues[0].ValueFormatted, value:[]};
                        if(item.data.cell){
                            elem.value = {value:item.data.cell.ValueFormatted, valueRaw:item.data.cell.Value};
                        }
                        if(parentElem){
                            parentElem.value.push(elem);
                        }
                        else{
                            self.elements.push(elem);
                        }
                        if(item.subTree){
                            parseSubTree(item.subTree,elem);
                        }
                    }
                }
                parseSubTree(tree.root.subTree);

            },

            /**
             * Returns the elements of the result set.
             * @memberOf sap.bc.ina.api.impl.inav2.GroupBarChartResultSet
             * @instance
             * @since SAP HANA SPS 06
             * @return {Array} A list of result set elements.
             * @example
             * var query = sap.bc.ina.api.sina.createGroupBarChartQuery();
             * query.dataSource({ schemaName : "SYSTEM",
             *                    objectName : "J_EPM_PRODUCT"
             * });
             * query.addDimension('CURRENCY_CODE');
             * query.addDimension('CATEGORY');
             * query.count('PRODUCT_ID');
             * var resultSet = query.getResultSetSync();
             * var elements = resultSet.getELements();
             * // contents of elements:
             * [
                {
                  "label": "EUR",
                  "value": [
                    {
                      "label": "Notebooks",
                      "value": [
                        {
                          "label": "COUNT",
                          "value": {
                            "value": "6",
                            "valueRaw": 6
                          }
                        }
                      ]
                    },
                    {
                      "label": "Others",
                      "value": [
                        {
                          "label": "COUNT",
                          "value": {
                            "value": "5",
                            "valueRaw": 5
                          }
                        }
                      ]
                    },
                    {
                      "label": "Software",
                      "value": [
                        {
                          "label": "COUNT",
                          "value": {
                            "value": "3",
                            "valueRaw": 3
                          }
                        }
                      ]
                    }
                  ]
                }
                ]
             */
            getElements : function() {
                return this.elements;
            }
        };

        // =========================================================================
        // class line chart query
        // =========================================================================
        module.LineChartQuery.prototype = $.extend({}, module.ChartQuery.prototype, {

            /**
             * A query that yields results suitable for a line chart control.
             * @constructs sap.bc.ina.api.impl.inav2.LineChartQuery
            *  @augments {sap.bc.ina.api.impl.inav2.ChartQuery}
            *  @private
            */
            init : function(properties) {
                properties = properties || {};
                module.ChartQuery.prototype.init.apply(this, [properties]);
                this.resultSetClass = module.LineChartResultSet;
            }
        });

        // =========================================================================
        // class line chart result set
        // =========================================================================
        module.LineChartResultSet.prototype = $.extend({}, module.GroupBarChartResultSet.prototype, {

            /**
             * A result set that yields elements suitable for a line chart.
             * @since SAP HANA SPS 06
             * @constructs sap.bc.ina.api.impl.inav2.LineChartResultSet
             * @private
            */
            init : function(properties) {
                properties = properties || {};
                this.elements = [];
            },

            setJsonData : function(data) {
                var self = this;
                this.elements = [];
                var resultSetParser = new ResultSetParser({
                    resultSet: data
                });
                var tree = resultSetParser.parse();

                //create line chart result format
                function parseSubTree(subTree,parentElem){
                    for(var dimensionLineItemName in subTree){
                        var dimensionLineItem = subTree[dimensionLineItemName];
                        var elem = {label:dimensionLineItem.data.NamedValues[0].ValueFormatted, value:[]};
                        for(var dimensionXItemName in dimensionLineItem.subTree){
                            var dimensionXItem = dimensionLineItem.subTree[dimensionXItemName];
                            var point = {x: dimensionXItem.data.NamedValues[0].ValueFormatted};
                            for(var measureYItemName in dimensionXItem.subTree){
                                var measureYItem = dimensionXItem.subTree[measureYItemName];
                                point.y = measureYItem.data.cell.Value;
                            }
                            elem.value.push(point);
                        }
                        self.elements.push(elem);
                    }
                }
                parseSubTree(tree.root.subTree);
            },

            /**
             * Returns the elements of the result set.
             * @memberOf sap.bc.ina.api.impl.inav2.LineChartResultSet
             * @instance
             * @since SAP HANA SPS 06
             * @return {Array} A list of result set elements.
             * @example
             * var queryProperties = {
             *     dataSource      : { schemaName  : "SYSTEM",
                                       objectName  : "J_EPM_PRODUCT"
                                     },
                   dimensionX      : {name: 'CATEGORY'},
                   dimensionLine   : {name: 'CURRENCY_CODE'},
                   measureY        : {name: 'PRODUCT_ID', aggregationFunction: 'COUNT'}
               };
               query = sap.bc.ina.api.sina.createLineChartQuery(queryProperties);
             * var resultSet = query.getResultSetSync();
             * var elements = resultSet.getEements();
             * // contents of elements (shortened):
             * [
                  {
                    "label": "EUR",
                    "value": [
                      {
                        "x": "Notebooks",
                        "y": 6
                      },
                      {
                        "x": "Others",
                        "y": 5
                      },
                      {
                        "x": "Software",
                        "y": 3
                      },
                      {
                        "x": "Speakers",
                        "y": 3
                      },
                      {
                        "x": "Electronics",
                        "y": 2
                      },
                      {
                        "x": "Flat screens",
                        "y": 2
                      },
                      {
                        "x": "Laser printers",
                        "y": 2
                      },
                      {
                        "x": "Mice",
                        "y": 2
                      },
                      {
                        "x": "PC",
                        "y": 2
                      },
                      {
                        "x": "Workstation ensemble",
                        "y": 2
                      }
                    ]
                  },
                  {
                    "label": "USD",
                    "value": [
                      {
                        "x": "Others",
                        "y": 4
                      },
                      {
                        "x": "Flat screens",
                        "y": 2
                      },
                      {
                        "x": "Handhelds",
                        "y": 2
                      },
                      {
                        "x": "High Tech",
                        "y": 2
                      },
                      {
                        "x": "Notebooks",
                        "y": 2
                      },
                      {
                        "x": "Software",
                        "y": 2
                      },
                      {
                        "x": "Electronics",
                        "y": 1
                      },
                      {
                        "x": "Graphic cards",
                        "y": 1
                      },
                      {
                        "x": "Handheld",
                        "y": 1
                      },
                      {
                        "x": "Headset",
                        "y": 1
                      }
                    ]
                  }
               ]
             */
            getElements : function() {
                return this.elements;
            }
        });

        // =========================================================================
        // class search query
        // =========================================================================
        module.SearchQuery.prototype = $.extend({}, module.QueryBuilder.prototype, {

            /**
             * A query that yields results suitable for a simple result list.
             * @constructs sap.bc.ina.api.impl.inav2.SearchQuery
             * @augments {sap.bc.ina.api.impl.inav2.Query}
             * @private
            */
            init : function(properties) {
                properties = properties || {};
                module.QueryBuilder.prototype.init.apply(this, [properties]);
                this.sqlSearch = (properties.sqlSearch===undefined||properties.sqlSearch===true) ? true : false;
                this.attributes = properties.attributes || [];
                this.setOrderBy(properties.orderBy);
                this.resultSetClass = module.SearchResultSet;
            },

            /**
             * Adds a response attribute to the search query. The content of this
             * attribute is returned if the search term was found in one of the
             * response attributes.
             * @memberOf sap.bc.ina.api.impl.inav2.SearchQuery
             * @instance
             * @param {String|Object} attribute If the argument is a string, it is
             * the name of an attribute of the database view. If it is an object, it can contain
             * the name of the attribute and additional server-side
             * functions, like snippet or highlighting.
             * See {@link sap.bc.ina.api.impl.inav2.Sina#createSearchQuery} for examples.
             */
            addResponseAttribute : function(attribute) {
                this.attributes.push(attribute);
                this.resultSet = null;
                return this;
            },

            createJsonRequest : function() {
                var self = this;
                jsontemplates.searchRequest.DataSource = this.filter.dataSource.toInAJson();
                if(this.system instanceof system.HANASystem){
                    if(this.attributes.length===0){
                        throw { message: "Add at least one response attribute to your query" };
                    }
                    if(this.sqlSearch===true){
                        // TODO: remove workaround for SPS6. See CSS 0001971234 2013
                        jsontemplates.searchRequest.Options = [ "SqlSearch" ];
                    }
                }
                var selectedValues = [];
                for (var i = 0; i < this.attributes.length; ++i) {
                    var attribute = this.attributes[i];
                    if($.type(attribute)==='string'){
                        selectedValues.push({
                            Name : attribute,
                            AttributeName : attribute
                        });
                    }
                    else if($.type(attribute)==='object'){
                        var selectedValue = {
                            Name : attribute.name || attribute.attributeName,
                            AttributeName : attribute.attributeName || attribute.name
                        };
                        if(attribute.highlighted===true){
                            selectedValue.Function = 'Highlighted';
                        }
                        if(attribute.snippet===true){
                            selectedValue.Function = 'Snippet';
                        }
                        if(attribute.startPosition!==undefined){
                            selectedValue.StartPosition = attribute.startPosition;
                        }
                        if(attribute.maxLength!==undefined){
                            selectedValue.MaxLength = attribute.maxLength;
                        }
                        selectedValues.push(selectedValue);
                    }
                }
                jsontemplates.searchRequest.Search.SelectedValues = selectedValues;
                var searchterms = this.filter.getSearchTerms();
                if(!searchterms){
                    searchterms = '*';
                }
                jsontemplates.searchRequest.SearchTerms = searchterms;
                jsontemplates.searchRequest.Search.Top = this._top;
                jsontemplates.searchRequest.Search.Skip = this._skip;
                jsontemplates.searchRequest.Search.Filter = this.filter.getJson();
                jsontemplates.searchRequest.Search.OrderBy = this._assembleOrderBy();

                return jsontemplates.searchRequest;
            },

            /**
             * Sets how the result will be ordered.
             * @memberOf sap.bc.ina.api.impl.inav2.SearchQuery
             * @instance
             * @param {Object|Array} orderBy If orderBy is an object, it must have the
             * properties 'orderBy' (string) and 'sortOrder' (string).
             * The orderBy property can either be the name of a database attribute that
             * the result will be sorted alphabetically for, or it can be the special
             * '$$score$$' string. The result will then be ordered according to the SAP HANA
             * Score function.
             * This function can also receive an array of these objects for multiple
             * order-by values, for example to order by $$score$$ and then alphabetically
             * for an attribute. The result will then be ordered after the first entry.
             * If two results have the same rank however, they will be ordered after the
             * second order-by value, and so on.
             * @default {orderBy:'$$score$$', sortOrder:'DESC'}
             * See {@link sap.bc.ina.api.impl.inav2.Sina#createSearchQuery} for examples.
             */
            setOrderBy : function(orderBy){
                this.resultSet = null;
                this.orderBy = orderBy || { orderBy:'$$score$$', sortOrder:'DESC' };
            }

        });

        // =========================================================================
        // class result set
        // =========================================================================
        module.SearchResultSet.prototype = {

            /**
             * A result set suitable for a simple result list. An instance of this
             * class will be returned by {@link sap.bc.ina.api.impl.inav2.SearchQuery#getResultSet}
             * @constructs sap.bc.ina.api.impl.inav2.SearchResultSet
             * @private
            */
            init : function(properties) {
                properties = properties||{};
                this.elements = [];
                this.totalcount = 0;
            },

            setJsonData : function(data) {
                this.elements = [];

                function ResultElementRenderingTemplateSpecification(){
                    this.type = "";
                    this.platform = "";
                    this.technology = "";
                    this.width = "";
                    this.height = "";
                    this.variant = "";
                    // this.description = "";
                    this.uri = "";
                    // this.request = null;
                    // this.encodedJSON = "";
                }

                ResultElementRenderingTemplateSpecification.prototype = {

                    _fromInaJson : function(inaJson){
                        this.type = inaJson.Type || "";
                        this.platform = inaJson.Platform || "";
                        this.technology = inaJson.Technology || "";
                        this.width = inaJson.Width || "";
                        this.height = inaJson.Height || "";
                        this.variant = inaJson.Variant || "";
                        // this.description = inaJson.Description || "";
                        this.uri = inaJson.Uri || "";
                    }

                };

                function ResultElementRelatedAction(){
                    this.type = "";
                    this.description = "";
                    this.uri = "";
                    this.request = null;
                    this.encodedJSON = "";
                }

                ResultElementRelatedAction.prototype = {

                    _fromInaJson : function(inaJson){
                        var self = this;
                        self.description = inaJson.Description;
                        self.uri = inaJson.Uri;

                        switch(inaJson.Type){
                            case "RelatedRequest":  self.type = 'Search';
                                                    var queryProps = {};
                                                    queryProps.dataSource = new filter.DataSource();
                                                    queryProps.dataSource.fromInAJson(inaJson.Request.DataSource);
                                                    queryProps.system = global.sap.bc.ina.api.sina.system();
                                                    queryProps.top = 1;
                                                    self.request = new module.SearchQuery(queryProps);
                                                    self.request.filter.setJson(inaJson.Request.Filter);
                                                    // mark request without filter condition as invalid
                                                    if(inaJson.Request.Filter.Selection===undefined){
                                                        self.request.invalid = true;
                                                        self.request.invalidMessage = "Related request '"+self.description+"' is invalid because of missing filter conditions.";
                                                    }
                            break;
                            case "GeneralUri":      self.type = 'Link';
                                                    self.url =self.uri;
                            break;
                            case "SAPNavigation":   self.type = 'Navigation';
                                                    self.url =self.uri;
                            break;
                        }
                        self.encodedJSON = encodeURIComponent(self);
                    }
                };

                function ResultElementAttributeMetaData(resultElementAttribute){
                    this.resultElementAttribute = resultElementAttribute;
                    this.correspondingSearchAttributeName = "";
                    this.description = "";
                    this.isTitle = false;
                    this.presentationUsage = [];
                    this.displayOrder = null;
                }

                ResultElementAttributeMetaData.prototype = {

                    _fromInaJson : function(inaAttributeMetaData){
                        var self = this;
                        self.correspondingSearchAttributeName = inaAttributeMetaData.correspondingSearchAttributeName || "";
                        self.description = inaAttributeMetaData.Description || "";
                        self.presentationUsage = inaAttributeMetaData.presentationUsage || [];
                        if(inaAttributeMetaData.IsTitle!==undefined){
                            self.isTitle = inaAttributeMetaData.IsTitle;
                        }
                        if (self.isTitle){
                            if (!self.resultElementAttribute.resultElement.title){
                                self.resultElementAttribute.resultElement.title = self.resultElementAttribute.resultElement.$$DataSourceMetaData$$.getLabel()+":";
                            }
                            self.resultElementAttribute.resultElement._registerPostProcessor(function(){
                                self.resultElementAttribute.resultElement.title = self.resultElementAttribute.resultElement.title+ " "+ self.resultElementAttribute.value;
                            });
                        }
                    }

                };

                function ResultElementAttribute(resultElement){
                    this.resultElement = resultElement;
                    this.$$MetaData$$ = new ResultElementAttributeMetaData(this);
                    this.label = "";
                    this.labelRaw = "";
                    this.value = "";
                    this.valueRaw = "";
                }

                ResultElementAttribute.prototype = {

                    _fromInaJson : function(inaAttribute){
                        var self = this;
                        self.labelRaw = this.$$MetaData$$.correspondingSearchAttributeName || inaAttribute.Name || "";
                        self.label = this.$$MetaData$$.description || inaAttribute.Name || "";
                        self.valueRaw = inaAttribute.Value || null;
                        self.value = inaAttribute.ValueFormatted || null;

                    },

                    toString : function(){
                        //stay compatible with result templates <= SAP HANA SPS 05
                        return this.value;
                    }
                };

                function ResultElement(){
                    //these members are always provided:
                    this.title = "";
                    this.$$DataSourceMetaData$$ = {};
                    this.$$RelatedActions$$ = {};
                    this.$$RenderingTemplateSpecification$$ = {};
                    this.$$WhyFound$$ = [];
                    this.$$PostProcessors$$ = [];
                    //the real result item attributes will be added to
                    //this object dynamically
                }

                ResultElement.prototype = {

                    _fromInaJson : function(namedValues){
                        var self = this;
                        for(var k = 0; k < namedValues.length; ++k){
                            var namedValue = namedValues[k];
                            switch(namedValue.Name){
                                case "$$DataSourceMetaData$$":
                                    var dataSourceMetaData = namedValue.Value[0];
                                    var dataSource = new filter.DataSource(dataSourceMetaData);
                                    self.$$DataSourceMetaData$$ = dataSource;
                                break;
                                case "$$AttributeMetadata$$":
                                    for (var m = 0; m < namedValue.Value.length; ++m) {
                                        var inaAttributeMetaData = namedValue.Value[m];
                                        if (!self[inaAttributeMetaData.Name]){
                                            self[inaAttributeMetaData.Name] = new ResultElementAttribute(self);
                                        }
                                        self[inaAttributeMetaData.Name].$$MetaData$$._fromInaJson(inaAttributeMetaData);
                                        self[inaAttributeMetaData.Name].$$MetaData$$.displayOrder = m;
                                    }

                            break;
                            case "$$ResultItemAttributes$$":
                                for (var l = 0; l < namedValue.Value.length; ++l) {
                                    var inaAttribute = namedValue.Value[l];
                                    if (!self[inaAttribute.Name]){
                                        self[inaAttribute.Name] = new ResultElementAttribute(self);
                                    }
                                    self[inaAttribute.Name]._fromInaJson(inaAttribute);
                                  }
                                break;
                                case "$$RelatedActions$$":
                                    var actions = {};
                                    for (var n = 0; n < namedValue.Value.length; ++n) {
                                        var action = namedValue.Value[n];
                                        var sinaAction = new ResultElementRelatedAction();
                                        sinaAction._fromInaJson(action);
                                        actions[action.ID] = sinaAction;
                                    }
                                    self.$$RelatedActions$$ = actions;
                                break;
                                case "$$RenderingTemplateSpecification$$":
                                    for (var o = 0; o < namedValue.Value.length; ++o) {
                                        var template = new ResultElementRenderingTemplateSpecification();
                                        template._fromInaJson(namedValue.Value[o]);
                                        // template = propertiesToLowerCase(template);
                                        if(template.type === "ItemDetails"){
                                            self._detailTemplate = template; //save for later, so no 2nd request is needed
                                        }
                                        else{
                                            self.$$RenderingTemplateSpecification$$ = template;
                                        }
                                    }
                                break;
                                case "$$WhyFound$$":
                                    for (var z = 0; z < namedValue.Value.length; ++z) {
                                        var whyfoundElem = {};
                                        whyfoundElem.label     = namedValue.Value[z].Description;
                                        whyfoundElem.labelRaw  = namedValue.Value[z].Name;
                                        whyfoundElem.value     = namedValue.Value[z].Value;
                                        whyfoundElem.valueHighlighted = whyfoundElem.value;
                                        whyfoundElem.valueRaw  = namedValue.Value[z].Value;
                                        self.$$WhyFound$$.push(whyfoundElem);
                                    }
                                break;
                                default:
                                    // we assume thats a (HANA InA) result element:
                                    self[namedValue.Name] = new ResultElementAttribute();
                                    self[namedValue.Name].label = namedValue.Name || "";
                                    self[namedValue.Name].valueRaw = namedValue.Value || namedValue.ValueFormatted || null;
                                    self[namedValue.Name].value = namedValue.ValueFormatted || namedValue.Value || null;
                            }
                        }
                        for (var i = 0; i < this.$$PostProcessors$$.length; i++) {
                            this.$$PostProcessors$$[i]();
                        }
                    },

                    _registerPostProcessor : function(fn){
                        this.$$PostProcessors$$.push(fn);
                    }


                };

                function _prepareDetails(element){
                    // TODO: remove service workaround: if there is no detail query -> try to create
                    if(element._detailTemplate && !element.$$RelatedActions$$.$$DETAILS$$){
                        element.$$RelatedActions$$.$$DETAILS$$ = {
                            request     : new module.SearchQuery(),
                            description : '',
                            encodedJSON : '',
                            type        : 'Search',
                            uri         : ''
                        };
                    }
                    // End of workaround
                    // prefill result set of detail query
                    if(element._detailTemplate&&element.$$RelatedActions$$.$$DETAILS$$){
                        var detailResultSet = new module.SearchResultSet();
                        detailResultSet.elements[0] = $.extend(true,{},element);
                        detailResultSet.elements[0].$$RenderingTemplateSpecification$$ = element._detailTemplate;
                        detailResultSet.totalcount = 1;
                        delete detailResultSet.elements[0].$$RelatedActions$$.$$DETAILS$$;
                        element.$$RelatedActions$$.$$DETAILS$$.request.resultSet = detailResultSet;
                        return detailResultSet.elements[0];
                    }
                    // return function(onSuccess,onError){
                    //     if(this._detailResultSet){
                    //         if(onSuccess){
                    //             onSuccess(this._detailResultSet);
                    //         }
                    //     }
                    //     else{
                    //         this.$$RelatedActions$$.$$DETAILS$$.request.getResultSet(onSuccess,onError);
                    //     }
                    // };
                }

                var itemLists = {};
                if(!data.ItemLists){
                    return;
                }
                for (var i=0;i<data.ItemLists.length;i++){
                    itemLists[data.ItemLists[i].Name] = data.ItemLists[i];
                    if(data.ItemLists[i].Name.toLowerCase()==="searchresult"){
                        this.totalcount = data.ItemLists[i].TotalCount.Value;
                    }
                }

                var axis0;
                if(data&&data.Grids&&data.Grids[0]&&data.Grids[0].Axes&&data.Grids[0].Axes[0]){
                    axis0 = data.Grids[0].Axes[0];
                }
                else {
                    return;
                }
                // only axes 0 is relevant for abap search results
                for (var j = 0; j < axis0.Tuples.length; j++) {
                    var tuple = axis0.Tuples[j];
                    if(tuple===undefined){
                        continue;
                    }
                    var element = new ResultElement();
                    for (var c = tuple.length - 1; c >= 0; c--) {
                    // for (var c = 0; c < tuple.length; c++) {
                        var dimension = axis0.Dimensions[c];
                        var tupleValueForDimension = tuple[c];
                        var itemlist = itemLists[dimension.ItemListName];
                        var namedValues = itemlist.Items[tupleValueForDimension].NamedValues;
                        element._fromInaJson(namedValues);
                    }
                    if (itemLists && itemLists.$$MetaData$$ && itemLists.$$MetaData$$.Items[0] &&
                            itemLists.$$MetaData$$.Items[0].NamedValues[2] && itemLists.$$MetaData$$.Items[0].NamedValues[2].Value){
                        element = this._postProcess4WhyFound(element, itemLists.$$MetaData$$.Items[0].NamedValues[2].Value);
                    }
                    var detail = _prepareDetails(element);
                    this._postProcessRelatedAction(element);
                    if (detail) {
                        this._postProcessRelatedAction(detail);
                    }
                    this.elements.push(element);
                }

            },

            /**
             * Returns the elements of the result set.
             * @memberOf sap.bc.ina.api.impl.inav2.SearchResultSet
             * @instance
             * @since SAP HANA SPS 06
             * @return {Array} A list of result set elements.
             * @example
             * var query = sap.bc.ina.api.sina.createSearchQuery({
                dataSource          : { schemaName  : "SYSTEM",
                                        objectName  : "J_EPM_PRODUCT" },
                attributes          : [ "PRODUCT_ID",
                                        "TEXT",
                                        "CATEGORY",
                                        "PRICE",
                                        "CURRENCY_CODE"],
                searchTerms         : "basic",
                top                 : 5
               });
             * var resultSet = query.getResultSetSync();
             * var elements = resultSet.getElements();
             * // contents of elements (shortened):
             * [{ "PRODUCT_ID":{"label":"PRODUCT_ID","valueRaw":"HT-1000","value":"HT-1000"},
             *     "TEXT":{"label":"TEXT","valueRaw":"Notebook Basic 15 with 1,7GHz - 15","value":"Notebook Basic 15 with 1,7GHz - 15"},
             *     "CATEGORY":{"label":"CATEGORY","valueRaw":"Notebooks","value":"Notebooks"},
             *     "PRICE":{"label":"PRICE","valueRaw":"956.00","value":"956.00"},
             *     "CURRENCY_CODE":{"label":"CURRENCY_CODE","valueRaw":"EUR","value":"EUR"}},
             *     // second result item:
             *     {"PRODUCT_ID":{"label":"PRODUCT_ID","valueRaw":"HT-1001","value":"HT-1001"},
             *     "TEXT":{"label":"TEXT","valueRaw":"Notebook Basic 17 with 1,7GHz - 17","value":"Notebook Basic 17 with 1,7GHz - 17"},
             *     "CATEGORY":{"label":"CATEGORY","valueRaw":"Notebooks","value":"Notebooks"},
             *     "PRICE":{"label":"PRICE","valueRaw":"1249.00","value":"1249.00"},
             *     "CURRENCY_CODE":{"label":"CURRENCY_CODE","valueRaw":"EUR","value":"EUR"}},
             *     // third result item:
             *     {"PRODUCT_ID":{"label":"PRODUCT_ID","valueRaw":"HT-1002","value":"HT-1002"},
             *     "TEXT":{"label":"TEXT","valueRaw":"Notebook Basic 18 with 1,7GHz - 18","value":"Notebook Basic 18 with 1,7GHz - 18"},
             *     "CATEGORY":{"label":"CATEGORY","valueRaw":"Notebooks","value":"Notebooks"},
             *     "PRICE":{"label":"PRICE","valueRaw":"1570.00","value":"1570.00"},
             *     "CURRENCY_CODE":{"label":"CURRENCY_CODE","valueRaw":"USD","value":"USD"}},
             *     // fourth result item:
             *     {"PRODUCT_ID":{"label":"PRODUCT_ID","valueRaw":"HT-1003","value":"HT-1003"},
             *     "TEXT":{"label":"TEXT","valueRaw":"Notebook Basic 19 with 1,7GHz - 19","value":"Notebook Basic 19 with 1,7GHz - 19"},
             *     "CATEGORY":{"label":"CATEGORY","valueRaw":"Notebooks","value":"Notebooks"},
             *     "PRICE":{"label":"PRICE","valueRaw":"1650.00","value":"1650.00"},
             *     "CURRENCY_CODE":{"label":"CURRENCY_CODE","valueRaw":"EUR","value":"EUR"}},
             *     // fifth result item:
             *     {"PRODUCT_ID":{"label":"PRODUCT_ID","valueRaw":"HT-8000","value":"HT-8000"},
             *     "TEXT":{"label":"TEXT","valueRaw":"1,5 Ghz, single core, 40 GB HDD, Windows Vista Home Basic, 512 MB RAM","value":"1,5 Ghz, single core, 40 GB HDD, Windows Vista Home Basic, 512 MB RAM"},
             *     "CATEGORY":{"label":"CATEGORY","valueRaw":"Notebooks","value":"Notebooks"},
             *     "PRICE":{"label":"PRICE","valueRaw":"799.00","value":"799.00"},
             *     "CURRENCY_CODE":{"label":"CURRENCY_CODE","valueRaw":"EUR","value":"EUR"}}
             *  ]
             */
            getElements : function() {
                return this.elements;
            },

            _postProcessRelatedAction : function(element){
                for (var relatedActionID in element.$$RelatedActions$$) {
                    var relatedAction = element.$$RelatedActions$$[relatedActionID];
                    //Postprocessing
                    if (relatedAction.type === "Search"){
                        global.sap.bc.ina.api.sina._postprocess(relatedAction, element.title);
                    }
                }
            },

            _postProcess4WhyFound : function(element, metaAttributes){
                if (element.$$WhyFound$$ && element.$$WhyFound$$.length>0){
                    var i = element.$$WhyFound$$.length;
                    var value;
                    var hasResponseAttribute;
                    while (i--){
                        hasResponseAttribute = false;
                        if (element[element.$$WhyFound$$[i].labelRaw] !== undefined && metaAttributes !== undefined){
    ////                        value = element.$$WhyFound$$[i].value.replace(/<b>/g, '<div class="InA-highlighter" data-sap-widget="highlighter">').replace(/<\/b>/g, '</div">');
    //                        value = element.$$WhyFound$$[i].value;
    //                        element[element.$$WhyFound$$[i].labelRaw].value    = value;
    //                        element[element.$$WhyFound$$[i].labelRaw].valueRaw = value;
    //                        element.$$WhyFound$$.splice(i,1);
                            var j = metaAttributes.length;
                            while (j--){
                                // The WhyFound attributes are requst attributes. Try to get its corresponding response attribute
                                if (metaAttributes[j].Name === element.$$WhyFound$$[i].labelRaw && metaAttributes[j].correspondingSearchAttributeName){
                                    element.$$WhyFound$$[i].labelRaw = metaAttributes[j].correspondingSearchAttributeName;
                                    hasResponseAttribute = true;
                                }
                            }
                        }
    //                    if (!hasResponseAttribute){
    //                        element.$$WhyFound$$[i].label = element.$$WhyFound$$[i].label + " (modeling error: add missing corresponding response attribute!)";
    //                    }
                    }
                }
                return element;
            }
        };
    };

    if ( typeof define === "function" && define.amd) {
        define( ["jquery", "./system", "./filter", "./jsontemplates"], function($){
            executeSinaImpl($);
        });
    }else{
        executeSinaImpl();
    }


}(window));

/*
 * @file Simple info access (SINA) API: Factory
 * @namespace sap.bc.ina.api
 * @requires jQuery
 * @copyright Copyright (c) 2013 SAP AG. All rights reserved.
 */

( function(global) {
    "use strict";

    var executeSina = function() {
        global.sap = global.sap || {};
        global.sap.bc = global.sap.bc || {};
        global.sap.bc.ina = global.sap.bc.ina || {};
        global.sap.bc.ina.api = global.sap.bc.ina.api || {};
        global.sap.bc.ina.api.impl = global.sap.bc.ina.api.impl || {};
        var api = global.sap.bc.ina.api;
        var config = global.sap.bc.inauitk.config;
        var inauitk = global.sap.bc.inauitk;
        var system = global.sap.bc.ina.api.system;

        // =========================================================================
        // global fields
        // =========================================================================
        /**
         * SAP HANA info access HTTP service implementation of SINA.
         * @memberOf sap.bc.ina.api
         * @constant
         */
        global.sap.bc.ina.api.SINA_TYPE_INAV2      = "inav2";
        global.sap.bc.ina.api.SINA_TYPE_INAV2_IMPL = global.sap.bc.ina.api.impl.inav2.Sina;

        /**
         * Factory method for the SINA API. Optionally, you can choose a service implementation to be used.
         * @memberOf sap.bc.ina.api
         * @param  {Object} properties              Optionally, define the service type to be used by the API.
         * @return {sap.bc.ina.api.impl.inav2.Sina} The instance of SINA. If no properties object was provided, it will return an instance
         * that uses the info access HTTP service (V2) on an SAP HANA system.
         * @since SAP HANA SPS 06
         * @public
         */
        global.sap.bc.ina.api.getSina = function(properties) {
            properties = properties || {};
            properties.impl_type = properties.impl_type||api.SINA_TYPE_INAV2;
            if(properties.impl_type===api.SINA_TYPE_INAV2) {
                return new api.SINA_TYPE_INAV2_IMPL(properties);
            }
            else{
                throw "Unknown SINA_TYPE:'" + properties.impl_type + "' (use sap.bc.ina.api.SINA_TYPE_INAV2)";
            }

        };

        var sinaProperties = {};
        if(inauitk&&config){
            //create default proxy with settings from config.js
            var proxyProperties, sys;
            if(config){
                proxyProperties = {
                    httpMethod : config.hasOwnProperty("get")?"Get":config.httpMethod,
                    cachelifetime : config.cachelifetime
                };
            }
            var proxy = new inauitk.Proxy(proxyProperties);
            if(config.systemType&&config.systemType.toUpperCase()==="ABAP"){
                sys = new system.ABAPSystem({'proxy':proxy});
            }
            else{
                sys = new system.HANASystem({'proxy':proxy});
            }
            sinaProperties.system = sys;
        }

        /**
         * Default instantiation of SINA. After page load a SINA instance will be provided with default
         * settings. If you need other settings, create your own SINA instance using the factory
         * {@link sap.bc.ina.api.getSina}
         * @memberOf sap.bc.ina.api
         * @type {sap.bc.ina.api.impl.inav2.Sina}
         * @since SAP HANA SPS 06
         */
        global.sap.bc.ina.api.sina = global.sap.bc.ina.api.getSina(sinaProperties);

        return global.sap.bc.ina.api.sina;
    };

    if ( typeof define === "function" && define.amd) {
        define( ["./impl/inav2/filter", "./impl/inav2/sina_impl", "./impl/inav2/system", "./impl/inav2/proxy", "./impl/inav2/jsontemplates"], function(){
            var sina = executeSina();
            sina.filter = global.sap.bc.ina.api.impl.inav2.filter;
            sina.systems = global.sap.bc.ina.api.system;
            return sina;
        });
    }else{
        executeSina();
    }


}(window));
