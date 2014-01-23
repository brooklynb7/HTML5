// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview
 *
 * @version
 */
(function () {
    "use strict";
    /*global jQuery, sap */


    //////////  The ResultListItemDetail Control //////////
    sap.ui.core.Control.extend("SearchResultListItemDetail", {
        // the control API:
        metadata : {
            properties : {
                itemTitle: "string",
                itemTitleUrl: "string",
                itemType: "string",
                status: "string",  // closed (default) or open
                itemData: "object",
                firstDetailAttribute: {type:"int", defaultValue:4},
                maxDetailAttributes: {type:"int", defaultValue:8}
            }
        },

        // the part creating the HTML:
        renderer : function(oRm, oControl) { // static function, so use the given "oControl" instance instead of "this" in the renderer function
            /// outer div
            oRm.write('<div');
            oRm.writeControlData(oControl);  // writes the Control ID
            oRm.addClass('searchResultListItemDetail');
            oRm.writeClasses();
            oRm.write('>');

            // detail title and attributes (aka the detail)
            oRm.write('<div class="searchResultListItemDetail-content">');

            // header of the item
            oRm.write('<div class="searchResultListItemDetail-contentTitle">');

            // item type
            // if ( oControl.getItemType() )
            // {
            //     oRm.write('<div>');
            //     var type1 = new sap.m.Text({text: oControl.getItemType()});
            //     type1.addStyleClass("searchResultListItemDetail-type");
            //     oRm.renderControl(type1);
            //     oRm.write("</div>");
            // }


            // // item title
            // if (oControl.getItemTitle())
            // {
            //     oRm.write('<div>');
            //     var title = new sap.m.Link({text: oControl.getItemTitle(), href: oControl.getItemTitleUrl()});
            //     title.addStyleClass("searchResultListItemDetail-title");
            //     oRm.renderControl(title);
            //     oRm.write("</div>");
            // }


            // close header
            oRm.write("</div>");

           // whyfound attributes
           oRm.write('<div class="searchResultListItemDetail-attributes">');
           if (oControl.getItemData())
           {
               var whyFoundAttributes = oControl.getItemData().whyfounds;
               for (var i = 0; i < whyFoundAttributes.length; i++) {
                   var whyFoundLabelText = whyFoundAttributes[i].label;
                   var whyFoundValueText = whyFoundAttributes[i].valueHighlighted;
                   if(whyFoundLabelText===undefined||whyFoundValueText===undefined){
                       continue;
                   }
                   oRm.write('<div class="searchResultListItemDetail-attribute">');

                   var whyFoundLabel = new sap.m.Label({text: whyFoundLabelText});
                   whyFoundLabel.setTooltip((''+whyFoundLabelText).replace(/<b>/gi, '').replace(/<\/b>/gi, ''));
                   whyFoundLabel.addStyleClass("searchResultListItemDetail-attribute-label");
                   oRm.renderControl(whyFoundLabel);

                   var whyFoundValue = new sap.m.Text({text: whyFoundValueText});
                   whyFoundValue.setTooltip((''+whyFoundValueText).replace(/<b>/gi, '').replace(/<\/b>/gi, ''));
                   whyFoundValue.addStyleClass("searchResultListItemDetail-attribute-value");
                   oRm.renderControl(whyFoundValue);

                   // close detail content block
                   oRm.write("</div>");
               }
           } 

            // detail attributes
            oRm.write('<div class="searchResultListItemDetail-attributes">');
            if (oControl.getItemData())
            {
                var detailAttributes = oControl.getFirstDetailAttribute() + oControl.getMaxDetailAttributes();
                for (var j = oControl.getFirstDetailAttribute(); j < detailAttributes; j++) {
                    var attrName = "attr"+j+"Name";
                    var attr = "attr"+j;
                    var labelText = oControl.getItemData()[attrName];
                    var valueText = oControl.getItemData()[attr];
                    if(labelText===undefined||valueText===undefined){
                        continue;
                    }
                    oRm.write('<div class="searchResultListItemDetail-attribute">');

                    var label = new sap.m.Label({text: labelText});
                    label.setTooltip((''+labelText).replace(/<b>/gi, '').replace(/<\/b>/gi, ''));
                    label.addStyleClass("searchResultListItemDetail-attribute-label");
                    oRm.renderControl(label);

                    var value = new sap.m.Text({text: valueText});
                    value.setTooltip((''+valueText).replace(/<b>/gi, '').replace(/<\/b>/gi, ''));
                    value.addStyleClass("searchResultListItemDetail-attribute-value");
                    oRm.renderControl(value);

                    // close detail content block
                    oRm.write("</div>");
                }
            }

            // close attributes div
            oRm.write("</div>");
            // close detail div
            oRm.write("</div>");
            // close outer div
            oRm.write("</div>"); // end of the complete control
        },

        // allow <b> in title and attributes
        onAfterRendering: function() {
            var self = this;
            // $(this.getDomRef()).find(".searchResultListItem-left").on("click", function(){ self.fireNavigate(); });
            this._setSafeText(
                $(this.getDomRef()).find(".searchResultListItemDetail-title, .searchResultListItemDetail-attribute-value"));
        },

        _setSafeText: function(objs) {
            objs.each(function(i,d) {
                var $d = $(d);
                var s = $d.text().replace(/<b>/gi, '').replace(/<\/b>/gi, '');  /// Only those two HTML tags are allowed.
                if (s.indexOf('<') === -1) {
                    $d.html($d.text());
                }
            });
        }


    });

}());