//Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap, $, document, self */
    /*jslint plusplus: true, nomen: true, vars: true */

    jQuery.sap.require("sap.ushell.ui.launchpad.TileContainer");
    jQuery.sap.require("sap.ushell.ui.launchpad.Tile");
    jQuery.sap.require("sap.ushell.override");

    var _mouseStop = $.ui.sortable.prototype._mouseStop;

    $.ui.sortable.prototype._mouseStop = function (event, noPropagation) {
        if (!event) {
            return;
        }

        if (this.options.revert) {
            var that = this,
                args = arguments,
                cur = that.placeholder.offset(),
                // the dur[ation] will not determine how long the revert animation is
                dur = $.isFunction(this.options.revert) ? this.options.revert.apply(this.element[0], [event, that._uiHash(this)]) : this.options.revert,
                jqHelper = jQuery(this.helper);

            self.reverting = true;

            if (jQuery(".sapUshellDeleteArea_dashboard_functional").data("tileOver") === true) {
                //Animation to dashboard delete area

                //On IE and Safari use jQuery's animate(), otherwise use css transition (hardware accelerated)
                //See http://stackoverflow.com/questions/5899783/detect-safari-using-jquery
                var bIsIE       = $.browser.msie,
                    bIsIE10     = (bIsIE && (parseInt($.browser.version, 10) === 10)) ? true : false,
                    bIsSafari   = (!(navigator.userAgent.indexOf('Chrome') > -1)) && (navigator.userAgent.indexOf("Safari") > -1);

                if (!bIsIE10 && (bIsIE || bIsSafari)) {
                    $(this.helper).animate({
                        top: (jQuery(document).height() - this.helper.height() - 10) + "px",
                        left: (jQuery(document).width() - this.helper.width() - 10) + "px",
                        opacity: 0
                    }, !isNaN(dur) ? dur : 250, function () {
                        var sTileId = jQuery(that.currentItem).attr('id'),
                        oTile = sap.ui.getCore().byId(sTileId);
                        oTile.bDeletionFlag = true;
                        //Save that nothing is "over" the delete area anymore
                        jQuery(".sapUshellDeleteArea_dashboard_functional").data("tileOver", false);
                        _mouseStop.apply(that, args);
                    });
                } else {
                    jQuery(this.helper).css({
                        top                 : (jQuery(document).height() - this.helper.height() - 10),
                        left                : (jQuery(document).width() - this.helper.width() - 10),
                        opacity             : 0,
                        WebkitTransition    : 'top ' + dur + 'ms ease-in-out, left ' + dur + 'ms ease-in-out, opacity ' + dur + 'ms ease-in-out, ',
                        MozTransition       : 'top ' + dur + 'ms ease-in-out, left ' + dur + 'ms ease-in-out, opacity ' + dur + 'ms ease-in-out, ',
                        MsTransition        : 'top ' + dur + 'ms ease-in-out, left ' + dur + 'ms ease-in-out, opacity ' + dur + 'ms ease-in-out, ',
                        OTransition         : 'top ' + dur + 'ms ease-in-out, left ' + dur + 'ms ease-in-out, opacity ' + dur + 'ms ease-in-out, ',
                        transition          : 'top ' + dur + 'ms ease-in-out, left ' + dur + 'ms ease-in-out, opacity ' + dur + 'ms ease-in-out'
                    });

                    setTimeout(function () {
                        var sTileId = jQuery(that.currentItem).attr('id'),
                        oTile = sap.ui.getCore().byId(sTileId);
                        oTile.bDeletionFlag = true;
                        //Save that nothing is "over" the delete area anymore
                        jQuery(".sapUshellDeleteArea_dashboard_functional").data("tileOver", false);
                        _mouseStop.apply(that, args);
                    }, dur);
                }
            } else {
                _mouseStop.apply(that, args);
            }
        } else {
            this._clear(event, noPropagation);
        }

        return false;
    };

    sap.ui.jsview("sap.ushell.renderers.fiori2.launchpad.dashboard.DashboardContent", {

        createContent: function (oController) {
            var that = this,
                oEventBus = sap.ui.getCore().getEventBus();

            this.oDashboardGroupsBox = this._getDashboardGroupsBox(oController);
            this.oDashboardDeleteArea =  this._getDashboardDeleteArea(oController);

            this.oDashboardDeleteArea.attachEvent("tileOver", function () {
                jQuery(".sapUshellTile-placeholder").hide();
                jQuery(".sapUshellExcludeMe.sapUshellSortableHelperClone").hide();
                that.oController._handleSortableChange();
            });

            this.oDashboardDeleteArea.attachEvent("tileOut", function () {
                jQuery(".sapUshellTile-placeholder").show();
                jQuery(".sapUshellExcludeMe.sapUshellSortableHelperClone").show();
                that.oController._handleSortableChange();
            });

            return [this.oDashboardGroupsBox, this.oDashboardDeleteArea ];
        },

        _getDashboardDeleteArea : function (oController) {
            var oDashboardDeleteArea =  new sap.ushell.ui.launchpad.DeleteArea({
                type: sap.ushell.ui.launchpad.DeleteAreaType.Dashboard
            });

            return oDashboardDeleteArea;
        },

        _getDashboardGroupsBox : function (oController) {
            var oTilesContainerTemplate = this._getTileContainerTemplate(oController);

            //Bind the custom resize handler
            var fResizeHandler = function (event, iAvailableWidth, iAvailableHeight) {
                var jqTilePrototype = jQuery("<div>").css("display", "none").addClass("sapUshellTile");
                jQuery("body").append(jqTilePrototype);

                try {
                    var jqDashboardGroups       = jQuery("#dashboardGroups"),
                        oGroupListController    = sap.ui.getCore().byId("groupList").getController(),
                        iTileWidth              = parseInt(jqTilePrototype.css("width")),
                        iTileMargin             = parseInt(jqTilePrototype.css("margin-right")),
                        iTileBorderWidth        = parseInt(jqTilePrototype.css("border-top-width")),
                        iTileTotalWidth         = iTileWidth + iTileMargin + (2 * iTileBorderWidth),
                        //5 Tiles and one extra spacing on the left side to be symmetrical
                        iDesiredWidth           = iTileMargin + (5 * iTileTotalWidth),
                        iMinWidth               = iTileMargin + (2 * iTileTotalWidth);

                    oGroupListController._updateGroupSelection();

                    // We can fit 5 tiles
                    if (iAvailableWidth >= iDesiredWidth) {
                        //Enough space for 5 Tiles in a row
                        jqDashboardGroups.css("width", iDesiredWidth);
                    //We can fit less than 5 tiles but more than 2
                    } else if (iAvailableWidth >= iMinWidth) {
                        //Not enough space for 5 Tiles in a row
                        //How many tiles can we fit?
                        var iPossibleNumberOfTiles = Math.floor((iAvailableWidth - iTileMargin) / iTileTotalWidth);
                        //Fit the maximum number of tiles
                        jqDashboardGroups.css("width", iTileMargin + (iPossibleNumberOfTiles * iTileTotalWidth));
                    //We actually can't even fit 2 Tiles, so we have to force it
                    } else {
                        //Fit the maximum number of tiles
                        jqDashboardGroups.css("width", iMinWidth);
                    }
                } finally {
                    jqTilePrototype.remove();
                }
            };

            var fAfterRenderingHandler = function () {
                //Get the dashboard and the first tile container (default group)
                var jqDashboard = jQuery("#dashboard"),
                    jqFirstContainer = jQuery(".sapUshellDashboardGroupsContainerItem").first();

                //Bind to dashboard and to the first tile container
                jqDashboard.unbind("resize", fResizeHandler);
                jqDashboard.bind("resize", fResizeHandler);

                jqFirstContainer.unbind("resize", fResizeHandler);
                jqFirstContainer.bind("resize", fResizeHandler);

                //Trigger the event manually for the first time to generate a good initial layout
                fResizeHandler({target: jqDashboard}, jqDashboard.width(), jqDashboard.height());
                fResizeHandler({target: jqFirstContainer}, jqDashboard.width(), jqDashboard.height());
            };

            var oGroupsContainer = new sap.ushell.ui.launchpad.DashboardGroupsContainer("dashboardGroups", {
                groups : {
                    path: "/groups",
                    template : oTilesContainerTemplate
                },
                afterRendering : fAfterRenderingHandler
            });
            return oGroupsContainer;
        },

        _getTileContainerTemplate : function (oController) {
            var oTilesContainerTemplate = new sap.ushell.ui.launchpad.TileContainer({
                headerText : "{title}",
                groupId: "{groupId}",
                defaultGroup: "{isDefaultGroup}",
                showHeader: true,
                showPlaceholder : true,
                tiles: {
                    path : "tiles",
                    template : new sap.ushell.ui.launchpad.Tile({
                        draggable : false,
                        "long" : "{long}",
                        uuid : "{uuid}",
                        target : "{target}",
                        tileViews : {
                            path : "content",
                            factory : function(sId, oContext){
                                return oContext.getObject();
                            }
                        },
                        afterRendering : [ oController._bindTileEvents, oController ]
                    })
                },
                add : function (oEvent) {
                    sap.ui.getCore().getEventBus().publish("openCatalog", {
                        groupContext : oEvent.getSource().getBindingContext()
                    });
                },
                afterRendering: function() {
                    var jqTileContainer = jQuery('#' + this.getId());
                    oController.makeGroupSortable(jqTileContainer);
                },
                removable: "{removable}",
                sortable: "{sortable}"
            });

            return oTilesContainerTemplate;
        },

        getControllerName: function () {
            return "sap.ushell.renderers.fiori2.launchpad.dashboard.DashboardContent";
        }
    });
}());
