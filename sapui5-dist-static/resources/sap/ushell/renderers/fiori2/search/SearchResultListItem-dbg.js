// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview
 *
 * @version
 */
(function () {
    "use strict";
    /*global jQuery, sap */

    //////////  Internally-Used Button //////////

    sap.ui.core.Control.extend("SearchResultListItemButton", {
        metadata : {
            properties : {
                status: "string", // closed (default) or open
            },
            events: {
                press: {}
            }
        },
        renderer : function(oRm, oControl) { // static function, so use the given "oControl" instance instead of "this" in the renderer function
            /// outer div
            oRm.write('<a href="javascript:void(0);"');
            oRm.writeControlData(oControl);  // writes the Control ID
            oRm.addClass("searchResultListItemButton");
            oRm.writeClasses();              // this call writes the above class plus enables support for Square.addStyleClass(...)
            oRm.write(">");

            var open = new sap.ui.core.Icon({
                src: sap.ui.core.IconPool.getIconURI("open-command-field")
            });
            oRm.renderControl(open);
            // oRm.write('<span data-sap-ui-icon-content="'+"\ue1c6"+'" style="font-family:\'SAP-icons\'" class="sapMBtnCustomIcon sapUiIcon sapUiIconMirrorInRTL');
            // if (oControl.getStatus() !== "open") {
                // oRm.write(" searchResultListItemButton-closed");
            // }
            // oRm.write('"></span>');

            oRm.write("</a>");
        },
        onclick : function(evt) {
            this.firePress();
        }
    });


    //////////  The ResultListItem Control //////////

    sap.m.ListItemBase.extend("SearchResultListItem", {
        // the control API:
        metadata : {
            properties : {
                title: "string",
                titleUrl: "string",
                type: "string",
                imageUrl: "string",
                status: "string",  // closed (default) or open
                previewButton: "string", // true (default) or false, implemented for tablet only acc. to. visual design
                data: "object",
                visibleAttributes: "int"
            },
            events: {
                navigate: {},
                previewOpen: {},
                previewClose: {}
            }
        },

        // the part creating the HTML:
        renderer : function(oRm, oControl) { // static function, so use the given "oControl" instance instead of "this" in the renderer function
            var labelText,
                valueText,
                label,
                value;

            /// outer div
            oRm.write("<div");
            oRm.writeControlData(oControl);  // writes the Control ID
            if (oControl.getStatus() === "open" || oControl.getData()['selected'] === true ) {
                oRm.addClass("searchResultListItem-open");
            }
            oRm.addClass("searchResultListItem");
            oRm.writeClasses();              // this call writes the above class plus enables support for Square.addStyleClass(...)
            oRm.write(">");

            oRm.write('<div class="searchResultListItem-main"><div>');
            oRm.write('<div class="searchResultListItem-left">');

            /// /// image1 (phone)
            /// use as background because of cover feature
            oRm.write('<div class="searchResultListItem-image searchResultListItem-image1" style="background-image:url(\'');
            oRm.write(oControl.getImageUrl());
            oRm.write('\')"></div>');

            /// /// type 2 (tablet)
            var type1 = new sap.m.Text({text: oControl.getType()});
            type1.setTooltip(oControl.getType().replace(/<b>/gi, '').replace(/<\/b>/gi, ''));
            type1.addStyleClass("searchResultListItem-type searchResultListItem-type1");
            oRm.renderControl(type1);

            /// /// title
            var title = new sap.m.Link({text: oControl.getTitle(), href: oControl.getTitleUrl()});
            title.setTooltip(oControl.getTitle().replace(/<b>/gi, '').replace(/<\/b>/gi, ''));
            title.addStyleClass("searchResultListItem-title");
            oRm.renderControl(title);
            //oControl._setSaveText(title.getDomRef(), oControl.getTitle());

            /// /// type 2 (tablet)
            var type2 = new sap.m.Text({text: oControl.getType()});
            type2.setTooltip(oControl.getType().replace(/<b>/gi, '').replace(/<\/b>/gi, ''));
            type2.addStyleClass("searchResultListItem-type searchResultListItem-type2");
            oRm.renderControl(type2);

            /// /// attributes
            oRm.write('<div class="searchResultListItem-attributes">');
            for (var i = 1; i <= oControl.getVisibleAttributes(); i++) {
                var attrName = "attr"+i+"Name";
                var attr = "attr"+i;
                labelText = oControl.getData()[attrName];
                valueText = oControl.getData()[attr];
                if(labelText===undefined||valueText===undefined){
                    continue;
                }
                oRm.write('<div class="searchResultListItem-attribute">');
                label = new sap.m.Label({text: labelText});
                label.setTooltip((''+labelText).replace(/<b>/gi, '').replace(/<\/b>/gi, ''));
                label.addStyleClass("searchResultListItem-attribute-label");
                oRm.renderControl(label);
                value = new sap.m.Text({text: valueText});
                value.setTooltip((''+valueText).replace(/<b>/gi, '').replace(/<\/b>/gi, ''));
                value.addStyleClass("searchResultListItem-attribute-value");
                oRm.renderControl(value);
                oRm.write("</div>");
            }
            oRm.write("</div>");

            /// why found attributes
            // oRm.write('<div class="searchResultListItem-attributes">');
            // for (i = 0; i < oControl.getData().whyfounds.length; i++) {
            //     labelText = oControl.getData().whyfounds[i].label;
            //     valueText = oControl.getData().whyfounds[i].valueHighlighted;
            //     if(labelText===undefined||valueText===undefined){
            //         continue;
            //     }
            //     oRm.write('<div class="searchResultListItem-attribute">');
            //     label = new sap.m.Label({text: labelText});
            //     label.setTooltip((''+labelText).replace(/<b>/gi, '').replace(/<\/b>/gi, ''));
            //     label.addStyleClass("searchResultListItem-attribute-label");
            //     oRm.renderControl(label);
            //     value = new sap.m.Text({text: valueText});
            //     value.setTooltip((''+valueText).replace(/<b>/gi, '').replace(/<\/b>/gi, ''));
            //     value.addStyleClass("searchResultListItem-attribute-value");
            //     oRm.renderControl(value);
            //     oRm.write("</div>");
            // }
            // oRm.write("</div>");

            oRm.write("</div>");

            /// /// image2 (tablet+)
            /// use as background because of cover feature
            oRm.write('<div class="searchResultListItem-image2Container"><div class="searchResultListItem-image searchResultListItem-image2" style="background-image:url(\'');
            oRm.write(oControl.getImageUrl());
            oRm.write('\')"></div></div>');

            oRm.write("</div></div>"); // close main

            /// /// button
            if (oControl.getPreviewButton() !== "false") {
                this.button = new SearchResultListItemButton({
                    status: oControl.getStatus(),
                    press: function(){
                        if (oControl.getStatus() === "open") {
                            oControl.firePreviewClose();
                            // oControl.setStatus("closed");
                        } else {
                            oControl.firePreviewOpen();
                            // oControl.setStatus("open");

                        }
                    }
                });
                oRm.renderControl(this.button);
            }

            /// close outer div
            oRm.write("</div>"); // end of the complete control
        },

        // allow <b> in title and attributes
        onAfterRendering: function() {
            var self = this;
            $(this.getDomRef()).find(".searchResultListItem-main").on("click", function(){ self.fireNavigate(); });
            this._setSafeText(
                $(this.getDomRef()).find(".searchResultListItem-title, .searchResultListItem-attribute-value"));
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


    sap.m.ListItemBase.extend("SearchResultListItemFooter", {
        // the control API:
        metadata : {
            properties : {
                showSpinner: {type : "boolean", defaultValue : false},
                text: "string"
            },
            aggregations: {
                content: {singularName: "content"} // default type is "sap.ui.core.Control", multiple is "true"
            },
            events: {
                showMore: {}
            }
        },

        // the part creating the HTML:
        renderer : function(oRm, oControl) { // static function, so use the given "oControl" instance instead of "this" in the renderer function

            var footertext = new sap.m.Label({
                text: oControl.getText()
            });
            footertext.addStyleClass('resultListMoreFooter');

            var dotted = new sap.ui.core.Icon({
                src: sap.ui.core.IconPool.getIconURI("sys-overflow")
            });

            this.busy = new sap.m.BusyIndicator({
                // visible: false
                size:"22px"
            });
            this.busy.addStyleClass('resultListBusyFooter');
            if (oControl.getShowSpinner() === false)
            {
                this.busy.addStyleClass('hidden');
            }


            oRm.write("<div");
            oRm.writeControlData(oControl);  // writes the Control ID
            oRm.addClass("resultListFooterContainer");
            oRm.writeClasses();
            oRm.write(">");

            oRm.write("<div class='resultListFooterContent'>");
            oRm.renderControl(dotted);
            oRm.renderControl(footertext);
            oRm.renderControl(this.busy);
            oRm.write("</div>");

            oRm.write("</div>");
        },

        // allow <b> in title and attributes
        onAfterRendering: function(oRm, oControl) {
            var self = this;
            var $item = $(this.getDomRef());
            $item.click(function(){
                self.setShowSpinner(true);
                self.fireShowMore();
                $item.off('click'); // Prevent multiple more clicks
            });
        }
    });


    sap.m.ListItemBase.extend("CategoryTreeItem", {
        // the control API:
        metadata : {
            properties : {
                name: "string",
                count: "int"
            },
            events: {
                clicked: {}
            }
        },

        // the part creating the HTML:
        renderer : function(oRm, oControl) { // static function, so use the given "oControl" instance instead of "this" in the renderer function

            oRm.write("<div");
            oRm.writeControlData(oControl);  // writes the Control ID
            oRm.addClass("resultListFooterContainer");
            oRm.writeClasses();
            oRm.write(">");

            oRm.write("<div class='resultListFooterContent'>");
            oRm.write("</div>");

            oRm.write("</div>");
        },

        // allow <b> in title and attributes
        onAfterRendering: function(oRm, oControl) {
            var self = this;
            var $item = $(this.getDomRef());
            $item.click(function(){
                self.fireClicked();
            });
        }
    });



}());