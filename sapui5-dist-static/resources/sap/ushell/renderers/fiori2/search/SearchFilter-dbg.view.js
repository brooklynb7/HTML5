//Copyright (c) 2013 SAP AG, All Rights Reserved
(function () {
    "use strict";
    /*global jQuery, sap */

    sap.m.ListItemBase.extend("sap.search.CategoryTreeItem", {
        metadata : {
            aggregations: {
                left: {multiple:false },
                right: {multiple:false }
            }
        },

        renderer : function(oRm, oControl) {      // the part creating the HTML

            oRm.write("<div");
            oRm.writeControlData(oControl);  // writes the Control ID
            oRm.writeClasses();
            oRm.write(">");

            oRm.write("<div class=treeRight>");
            if (oControl.getRight())
            {
                oRm.renderControl( oControl.getRight());
            }
            oRm.write("</div>");

            oRm.write("<div class=treeLeft>");
            if (oControl.getLeft()){
                oRm.renderControl( oControl.getLeft());
            }
            oRm.write("</div>");

            oRm.write("</div>");

        }
    });

    sap.ui.jsview("sap.ushell.renderers.fiori2.search.SearchFilter", {

        createContent: function (controller) {

            var self = this;
            var list = new sap.m.List({

            });


            list.bindAggregation("items", "SearchFilter>/categoryTree", function (sId, oContext) {
                var category = oContext.getObject();
                var item= self.assembleCategoryListItem(controller,category);
                return item;
            });


            list.addStyleClass("searchFilterList");
            return list;
        },

        assembleCategoryListItem: function (controller,category) {
            // var item = new sap.m.CustomListItem();

            var content = [];

            var link;
            var number;


            if(category.dataSource.label === ''){
                return null;
            }

            if(category.dataSource.level === 0){
                link = new sap.m.Link({text : "All Content"});
//              link = new sap.m.Link({text :category.dataSource.label+" + "+category.current.toString() + " + " + category.dataSource.level});
//                item.addContent(link);

            }else{
                link = new sap.m.Link({text :category.dataSource.label});
//              link = new sap.m.Link({text :category.dataSource.label+" + "+category.current.toString() + " + " + category.dataSource.level});
            }
            // item.addContent(link);
            content.push(link);
            link.attachPress(category,controller.selectCategory,controller);
            link.addStyleClass("link");


            if(category.value !== undefined){
                number = new sap.m.Label({text :category.value.toString()});
                number.addStyleClass("number");
                if(category.value === -1){
                    number.addStyleClass("hide");
                }else{
                    number.removeStyleClass("hide");
                }
                // item.addContent(number);
                content.push(number);
            }

            var item = new sap.search.CategoryTreeItem({
                left : link,
                right: number
            });


            item.addStyleClass("searchFilterItem");
            item.addStyleClass("searchFilterItemLevel" + category.dataSource.level);
            if(category.current){
                item.addStyleClass("active");
            }
            return item;
        },

        getControllerName: function () {
            return "sap.ushell.renderers.fiori2.search.SearchFilter";
        },

    });
}());