/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.SearchProvider");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.search.OpenSearchProvider");sap.ui.core.search.OpenSearchProvider.extend("sap.ui.commons.SearchProvider",{metadata:{deprecated:true,library:"sap.ui.commons"}});
sap.ui.commons.SearchProvider.prototype._doSuggest=function(s,S){this.suggest(S,function(v,a){if(s&&s.suggest){s.suggest(v,a)}})};
