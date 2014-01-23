(function (global) {
    "use strict";

    var sap = global.sap;
    var console = global.console;

    sap.ui.model.json.JSONModel.extend("sap.ushell.renderers.fiori2.search.SearchModel", {

        searchInit: function () {
            var self = this;
            if (self.searchInitialized) {
                return;
            }
            self.searchInitialized = true;
            self.searchRequestID = 0;
            self.searchDataSource = new sap.bc.ina.api.impl.inav2.filter.DataSource({
                objectName: "$$ALL$$",
                packageName: "ABAP",
                type: "Category",
                label: "All"
            });
            self.searchDataSource.level = 0;
            self.searchTerm = "";
            self.searchCategoryTree = [];
            self.searchTop=5;
            self.searchSkip=0;
        },

        searchGetGenericResults: function (results) {

            function getImageUrl(result) {
                var imageAttr = { 
                                    imageUrl: '',
                                    name: ''
                                };
                for (var prop in result) {
                    if (result[prop].label && result[prop].value) {
                        if (result[prop].value && jQuery.type(result[prop].value) === 'string' &&
                            (result[prop].value.split('.').pop() === 'jpg' || result[prop].value.split('.').pop() === 'png')) {
                            imageAttr.imageUrl = result[prop].value;
                            imageAttr.name = prop;
                            return imageAttr;
                        }
                    }
                }
                return imageAttr;

            }
            
            var moveWhyFound2ResponseAttr = function (whyfounds, property) {
                var l = whyfounds.length;
                while (l--) {
                    if (whyfounds[l].labelRaw === property.labelRaw && property !== undefined) {
                        property.value = whyfounds[l].value;
                        whyfounds.splice(l, 1);
                    }
                }
            };
            
            var genericResults = [];
            for (var i = 0; i < results.length; i++) {
                var result = results[i];

                var uri = '';
                var relatedActions = result.$$RelatedActions$$;
                for (var relatedAction in relatedActions) {
                    if (relatedActions[relatedAction].type === "Navigation") {
                        uri = relatedActions[relatedAction].uri;
//                        uri = "#SalesOrder-DisplayFactSheet?SalesOrder=27";
//                        uri = "/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?sap-client=111#SalesOrder-DisplayFactSheet?SalesOrder=27"
                    }
                }
                var whyfounds = result.$$WhyFound$$ || [];

                var summaryAttrs = [];
                var detailAttrs = [];
                var title = '';

                for (var prop in result) {
                    if(result[prop].label && result[prop].value) {
                        var presentationUsage = result[prop].$$MetaData$$.presentationUsage || [];
                        if (presentationUsage && presentationUsage.length>0) {
                            if (result[prop].$$MetaData$$.isTitle === true) {
                                moveWhyFound2ResponseAttr(whyfounds, result[prop]);
                                title = title + " " + result[prop].value;
                            } else if (presentationUsage.indexOf("Summary")>-1) {
                                summaryAttrs.push(prop);
                            } else if (presentationUsage.indexOf("Detail")>-1) {
                                detailAttrs.push(prop);
                            }
                        }
                    }
                }

                var displayRelevantAttrs = summaryAttrs.concat(detailAttrs);
                var attNum = 1;
                var listResult = {};
                var imageAttr = getImageUrl(result);
                listResult.imageUrl = imageAttr.imageUrl;
                listResult.dataSourceName = result.$$DataSourceMetaData$$.label;
                listResult.uri = uri;
                listResult.$$Name$$ = '';
                
                for (var z=0; z<displayRelevantAttrs.length; z++){
                    var propDisplay = displayRelevantAttrs[z];
                    // image attribute shall not be displayed as a normal key value pair
                    if (propDisplay !== imageAttr.name){
                        moveWhyFound2ResponseAttr(whyfounds, result[propDisplay]);
                        listResult["attr"+attNum+"Name"] = result[propDisplay].label;
                        listResult["attr"+attNum] = result[propDisplay].value;

                        attNum = attNum + 1;                        
                    }
                }

                
                listResult.$$Name$$ = title.trim();
                listResult.numberofattributes = attNum;
                //TODO: replace it with dataSourceName + $$Name$$ in view
                listResult.title=result.title;
                listResult.whyfounds = whyfounds;
                genericResults.push(listResult);
            }

            return genericResults;

        },

        searchPrepareResultList: function (resultset, append) {
            var self = this;

            var resultListHeader = {};
            resultListHeader.type = "title";
            resultListHeader.title = sap.ushell.resources.i18n.getText("searchResults") + " (" + resultset.getSearchResultSet().totalcount + ")";

            var resultsForList;
            if (append) {
                self.resultsForList.pop(); //Remove footer
                resultsForList = self.resultsForList;

            } else {
                resultsForList = [];
                resultsForList.push(resultListHeader); //Add footer to new lists
            }

            var results = resultset.getSearchResultSet().getElements();
            resultsForList = resultsForList.concat(self.searchGetGenericResults(results));

            if (results.length === this.searchTop) // There is more
            {
                var resultListFooter = {};
                resultListFooter.type = "footer";
                resultsForList.push(resultListFooter);
            }

            self.resultsForList = resultsForList;

            var oModel = self;
            oModel.setProperty("/results", {});
            oModel.setProperty("/results", resultsForList);
            // oModel.setProperty("/stats/number", results.length);

            if (window.f2p) window.f2p.add(window.f2p.m.endSearch, {
                    st: ""
                });

        },

//        searchPrepareCategoryFacet: function (resultset) {
//            var self = this;
//
//            // remove old categories
//            for (var i = 0; i < self.searchCategoryTree.length; ++i) {
//                var category = self.searchCategoryTree[i];
//                if (category.dataSource.level === self.searchDataSource.level) {
//                    self.searchCategoryTree.splice(i, self.searchCategoryTree.length - i);
//                    break;
//                }else{
//                    category.value=-1;
//                    category.current=false;
//                }
//            }
//
//            // add current category
//            self.searchCategoryTree.push({
//                dataSource: self.searchDataSource,
//                value     : resultset.getSearchResultSet().totalcount,
//                current   : true
//            });
//
//            // add child categories
//            var chartFacets = resultset.getChartFacets();
//            if (chartFacets.length !== 0) {
//                var categoryFacet = chartFacets[0];
//                if (categoryFacet.facetType === 'datasource') {
//                    var categoryFacetResultSet = categoryFacet.getQuery().getResultSetSync();
//                    var elements = categoryFacetResultSet.getElements();
//                    for (i = 0; i < elements.length; ++i) {
//                        var element = elements[i];
//                        element.current=false;
//                        element.dataSource.level = self.searchDataSource.level + 1;
//                        self.searchCategoryTree.push(element);
//                    }
//                }
//            }
//
//            self.setProperty("/categoryTree", []);
//            self.setProperty("/categoryTree", self.searchCategoryTree);
//        },

        searchLoadedResultset: function (resultset, append) {
            var self = this;
            self.searchPrepareResultList(resultset, append);
            self.searchPrepareCategoryFacet(resultset);
        },

        searchWithObjectName: function (searchTerm, objectNameValue) {
        	var self = this;
        	var dataSource = null;
        	if (objectNameValue) {
        		dataSource = new sap.bc.ina.api.impl.inav2.filter.DataSource({
                    objectName: objectNameValue,
                    packageName: "",
                    type: ""
                });
        	}
        	self.setQuery(searchTerm, dataSource);
        },
        
        setDataSource: function (dataSource) {
            var self = this;
            self.searchInit();
            self.searchDataSource = dataSource;
            self.searchSkip = 0;
            sap.ui.getCore().getEventBus().publish("searchDataSourceChange", dataSource);
            self.searchFireQuery();
        },

        setSearchTerm: function (searchTerm) {
            var self = this;
            self.setQuery(searchTerm, null);
        },

        setQuery: function (searchTerm, dataSource) {
            var self = this;
            self.searchInit();
            if (searchTerm!==null) {
            	self.searchTerm = searchTerm;
            }
            if (dataSource!==null) {
            	self.searchDataSource = dataSource;
            }
            self.searchSkip = 0;
            self.searchFireQuery();
        },
        	
        searchAppendNextPage : function(){
            var self = this;
            self.searchInit();
            self.searchSkip+=self.searchTop;
            self.searchFireQuery();
        },
        
        searchFireQuery: function () {
            var self = this;
            var sina = sap.ushell.Container.getService("Search").getSina();
            if (!sina) {
                jQuery.sap.log.info("Current Search adapter does not support Sina queries");
                return;
            }
            // create query
            var query = sina.createPerspectiveQuery();
            query.top(self.searchTop);
            query.skip(self.searchSkip);
            query.setSearchTerms(self.searchTerm);
            query.dataSource(self.searchDataSource);
            query.filter.addFilterCondition('$$RenderingTemplatePlatform$$', '=', 'html', '', '', false);
            query.filter.addFilterCondition('$$RenderingTemplateTechnology$$', '=', 'Tempo', '', '', false);
            query.filter.addFilterCondition('$$RenderingTemplateVariant$$', '=', '', '', '', false);
            query.filter.addFilterCondition('$$RenderingTemplateType$$', '=', 'ItemDetails', '', '', false);
            query.filter.addFilterCondition('$$RenderingTemplateType$$', '=', 'ResultItem', '', '', false);

            // increment request id
            self.searchRequestID = self.searchRequestID + 1;
            var currentSearchRequestID = self.searchRequestID;

            // fire query
            query.getResultSet(function (resultset) {
                if (currentSearchRequestID !== self.searchRequestID) //Request is deprecated
                {
                    console.log("Searchrequest deprecated");
                    return;
                }
                self.searchLoadedResultset(resultset, self.searchSkip !== 0);
            });

        }

    });

})(window);