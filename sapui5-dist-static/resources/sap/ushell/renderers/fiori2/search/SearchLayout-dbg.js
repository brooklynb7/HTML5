// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview
 *
 * @version
 */
(function (global) {
    "use strict";
    /*global jQuery, sap */


    sap.ui.core.Control.extend("SearchResultListWithDetail", {
    // the control API:
    metadata : {
        properties : {

        },
        aggregations : {
            "resultList":      {type: "sap.ui.core.Control", multiple: false},
            "preview":         {type: "sap.ui.core.Control", multiple: false}
        }
    },

    // the part creating the HTML:
    renderer : function(oRm, oControl) { // static function, so use the given "oControl" instance instead of "this" in the renderer function
        /// outer div
        oRm.write("<div");
        oRm.writeControlData(oControl);  // writes the Control ID
        oRm.addClass("searchResultListWithDetail");
        oRm.writeClasses();              // this call writes the above class plus enables support for Square.addStyleClass(...)
        oRm.write('>');

        oRm.write('<div class="searchLayout-left">');
        if (oControl.getResultList())
        {
            oRm.renderControl(oControl.getResultList());
        }
        oRm.write('</div>');

        oRm.write('<div');
        oRm.addClass("searchLayout-right");
        oRm.writeClasses();
        oRm.write('>');
        if (oControl.getPreview())
        {
            oRm.renderControl(oControl.getPreview());
        }
        oRm.write('</div>');


        /// close outer div
        oRm.write("</div>"); // end of the complete control
    },

    onAfterRendering: function() {
        var self = this;
        var preview = $(this.getDomRef()).find('.searchResultListItemDetail');
        // var resultList = $(this.getDomRef()).find('.searchResultListWithDetail');
        var headerSize = 50; // offset() calculates the offset to the window, we have to consider the fat header as well

        var updatePos = function(){

            // var openItem = $(".searchResultListItem-open");
            // if (openItem.length !== 0)
            // {
            //     var currentPos = openItem.position().top;
            //     preview.css('margin-top', currentPos );
            // }

            if ($("#searchResultPage-scroll").length > 0) {

                var resultList = $('.searchResultListWithDetail');
                if (resultList.length > 0)
                {
                    if (resultList.offset().top - headerSize < 0) //resultlist scrolled outside, fix detail to top
                    {
                        preview.css('margin-top', -resultList.offset().top +headerSize );
                    }else{
                        preview.css('margin-top', 0 );
                    }
                }
                // var pos = - $("#searchResultPage-scroll").position().top; //TODO: Check position()
                // pos = Math.max(0, pos);
                // preview.css('margin-top', pos );

            }



        };

        $("#searchResultPage-cont").on("scroll", updatePos);

        var lastScrollTimeout;

        $("#searchResultPage-cont").bind('touchmove', function(e){
            e.preventDefault();
            updatePos();

            //****** This is a bugfix for the iPad, which triggers no event in the deceleration phase *******/
            if (lastScrollTimeout)
            {
                window.clearTimeout(lastScrollTimeout);
            }
            lastScrollTimeout = setTimeout(function(){
                updatePos();
            }, 1500);

        });

        updatePos();

    }

    });





    sap.ui.core.Control.extend("SearchLayout", {
    // the control API:
    metadata : {
        properties : {
            showMainHeader  : {type : "boolean", defaultValue : false},
            topHeader       : "string",
            topCount        : "int",
            bottomHeader    : "string",
            bottomHeaderIsUnspecific: {type : "boolean", defaultValue : true}, // is "Others" or similar, $$ALL$$
            bottomCount     : "int"
        },
        aggregations : {
            "topList"       : {type: "sap.ui.core.Control", multiple: false},
            "bottomList"    : {type: "sap.ui.core.Control", multiple: false},
        }
    },

    // the part creating the HTML:
    renderer : function(oRm, oControl) { // static function, so use the given "oControl" instance instead of "this" in the renderer function
        /// outer div
        oRm.write("<div");
        oRm.writeControlData(oControl);  // writes the Control ID
        oRm.addClass("searchLayout");
        oRm.writeClasses();              // this call writes the above class plus enables support for Square.addStyleClass(...)
        oRm.write('>');

        //Show main header when there are two lists, or no list
        // var topAndBottomList = oControl.getTopList() && oControl.getBottomList();
        // var noTopAndBottomList = !(oControl.getTopList() || oControl.getBottomList());

        if (oControl.getShowMainHeader() === true )
        {
            var totalCount = 0;
            if (oControl.getTopCount())
            {
                totalCount = totalCount + oControl.getTopCount();
            }
            if (oControl.getBottomCount())
            {
                totalCount = totalCount + oControl.getBottomCount();
            }
            oRm.write('<div class="searchLayout-mainHeader">');
            oRm.renderControl((new sap.m.Label({text: sap.ushell.resources.i18n.getText("searchResults") })).addStyleClass('searchLayout-mainHeaderName'));
            oRm.renderControl((new sap.m.Label({text: '('+totalCount+')' })).addStyleClass('searchLayout-mainHeaderCount'));
            oRm.write('</div>');
        }

        if (oControl.getTopList() && oControl.getTopHeader()) // no header without list
        {
            oRm.write('<div class="searchLayout-bucket">');
            oRm.renderControl((new sap.m.Label({text: oControl.getTopHeader()})).addStyleClass('searchLayout-bucketName'));
            if (oControl.getTopCount())
                oRm.renderControl((new sap.m.Label({text: '('+oControl.getTopCount()+')' })).addStyleClass('searchLayout-bucketCount'));
            oRm.write('</div>');
        }
        if (oControl.getTopList())
        {
            oRm.renderControl(oControl.getTopList());
        }

        if (oControl.getBottomList() && oControl.getBottomHeader()) // no header without list
        {
            if (oControl.getBottomHeaderIsUnspecific() === true && oControl.getTopCount() === 0)
            {

            }else{
                oRm.write('<div class="searchLayout-bucket">');
                oRm.renderControl((new sap.m.Label({text: oControl.getBottomHeader()})).addStyleClass('searchLayout-bucketName'));
                if (oControl.getBottomCount())
                    oRm.renderControl((new sap.m.Label({text: '('+oControl.getBottomCount()+')' })).addStyleClass('searchLayout-bucketCount'));
                oRm.write('</div>');
            }

        }
        if (oControl.getBottomList())
        {
            oRm.renderControl(oControl.getBottomList());
        }
        /// close outer div
        oRm.write("</div>"); // end of the complete control
    }

    });

}(window));