// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap, console, setTimeout, clearTimeout */
    /*jslint plusplus: true, nomen: true */
    jQuery.sap.require("sap.ushell.ui.launchpad.TileContainer");

    sap.ui.controller("sap.ushell.renderers.fiori2.launchpad.dashboard.DashboardContent", {

        onInit : function () {
            this.sViewId = "#" + this.oView.getId();
        },

        onAfterRendering : function () {
            var oEventBus = sap.ui.getCore().getEventBus();

            //Bind launchpad event handlers
            oEventBus.unsubscribe("launchpad", "scrollToGroup", this._scrollToGroup, this);
            oEventBus.subscribe("launchpad", "scrollToGroup", this._scrollToGroup, this);

            //Bind grouplist event handlers
            oEventBus.unsubscribe("grouplist", "GroupListOver", this._handleGroupListOver, this);
            oEventBus.unsubscribe("grouplist", "GroupListOut", this._handleGroupListOut, this);
            oEventBus.unsubscribe("grouplist", "GroupListItemOver", this._handleGroupListItemOver, this);
            oEventBus.unsubscribe("grouplist", "GroupListItemOut", this._handleGroupListItemOut, this);
            oEventBus.unsubscribe("grouplist", "GroupListItemDrop", this._handleGroupListItemDrop, this);
            oEventBus.subscribe("grouplist", "GroupListOver", this._handleGroupListOver, this);
            oEventBus.subscribe("grouplist", "GroupListOut", this._handleGroupListOut, this);
            oEventBus.subscribe("grouplist", "GroupListItemOver", this._handleGroupListItemOver, this);
            oEventBus.subscribe("grouplist", "GroupListItemOut", this._handleGroupListItemOut, this);
            oEventBus.subscribe("grouplist", "GroupListItemDrop", this._handleGroupListItemDrop, this);

            // The delete area is moved out of the scrollable area
            jQuery("#__area0").appendTo("#shell-cntnt");
        },

        _scrollToGroup : function (sChannelId, sEventId, oData) {
            var sGroupId = oData.groupId,
                that = this;

            jQuery.each(this.oView.oDashboardGroupsBox.getGroups(), function (nIndex, oGroup) {
                if (oGroup.getGroupId() === sGroupId) {
                    if (nIndex === 0) {
                        sap.ui.getCore().byId("dashboardPage").scrollTo(0, 500);
                    } else {
                        var iY;

                        if (jQuery.device.is.desktop) {
                            var jqDashboardPageCont = jQuery("#dashboardPage-cont");

                            iY = jQuery.sap.byId(oGroup.sId).offset().top + jqDashboardPageCont.scrollTop() - 76;
                            sap.ui.getCore().byId("dashboardPage").scrollTo(iY, 500);
                        } else {
                            var oDashboardPage = sap.ui.getCore().byId("dashboardPage"),
                                oScroller = oDashboardPage.getScrollDelegate();

                            oScroller._scroller.scrollToElement("#" + oGroup.sId + " .sapUshellContainerPositionAnchor", 500);
                        }


                    }

                    jQuery('#groupList .sapUshellDefaultGroupItem, #groupList .sapUshellGroupListItem')
                        .removeClass('sapUshellOver')
                        .eq(nIndex).addClass('sapUshellOver');

                    return false;
                }
            });
        },

        makeGroupSortable : function (jqTileContainer) {
            var jqGroup = jqTileContainer.find('.sapUshellInner');

            if (jqGroup.hasClass("ui-sortable")) {
                return;
            }

            this._sortable(jqGroup);
        },

        _getTileTopOffset : function (oTile) {
            var iTileTopOffset = 0;
            iTileTopOffset += oTile.parents("#dashboardPage-cont").scrollTop();
            iTileTopOffset += oTile.parents(".sapUshellDashboardGroupsContainerItem").position().top;
            iTileTopOffset += oTile.position().top;
            return iTileTopOffset;
        },

        _sortable : function (jqGroup) {
            var that = this,
                jqDashboardGroup = jQuery.sap.byId(this.oView.oDashboardGroupsBox.getId()),
                jqCloneArea = jqDashboardGroup.find(".sapUshellCloneArea");

            that.bActive = false;

            //Check if there already is a clone area
            if (jqCloneArea.length <= 0) {
                jqCloneArea = jQuery("<div id='cloneArea' class='sapUshellCloneArea sapUshellDashboardGroupsContainerItem'></div>");
                jqDashboardGroup.append(jqCloneArea);
            }

            jqGroup.sortable({ //create sortable tiles
                containment: "document", // this.jqParentParent.parent().parent(),
                items: '>:not(.sapUshellPlusTile)',
                connectWith: ".sapUshellInner.sapUshellTilesContainer-sortable",
                placeholder: "sapUshellTile-placeholder",
                tolerance: "pointer",
                helper: function (event, element) {
                    var clone = element.clone();
                    clone.attr("id", clone.attr("id") + '-helperclone');
                    clone.addClass("sapUshellSortableHelperClone");
                    clone.css("font-size", element.css("font-size"));
                    clone.hide();
                    setTimeout(function () {
                        clone.appendTo('body');
                        clone.show();
                    }, 1);
                    return clone;
                },
                revert: jQuery.proxy(this._handleSortableRevert, this),
                start: jQuery.proxy(this._handleSortableStart, this),
                stop: jQuery.proxy(this._handleSortableStop, this),
                change: function (event, ui) {
                    that._handleSortableChange(event, ui, true);
                }
            }).disableSelection(); //disable text selection browser-behaviour

            if (jQuery.device.is.phone) {
                jqGroup.sortable('disable');
            }
        },

        _bindTileEvents : function (oEvent) {
            var oTile = oEvent.getSource();

            if (!jQuery.device.is.tablet) {
                return;
            }

            var that = this;

            jQuery.sap.byId(oTile.sId).bind("mousedown", function (event) {
                if (that.bActive === false) {
                    jQuery(".sapUshellInner.sapUshellTilesContainer-sortable").sortable('disable');

                    var _this = jQuery(this),
                        _event = event;

                    clearTimeout(that.fdownTimer);
                    that.fdownTimer = setTimeout(function () {
                        that.bActive = true;

                        jQuery(_this).effect("shake", {
                            times: 1,
                            distance: 5,
                            complete: function () {
                                if( !that.bActive ) {
                                    return;
                                }

                                jQuery(".sapUshellInner.sapUshellTilesContainer-sortable").sortable('enable');

                                //deactivate scrolling during drag and drop on mobile devices
                                var oDashboardPage = sap.ui.getCore().byId("dashboardPage"),
                                    oScroller = oDashboardPage.getScrollDelegate();

                                oScroller._scroller.disable();

                                jQuery(this).trigger(_event);
                            }
                        }, 50);
                    }, 150);
                }
            });


            jQuery.sap.byId(oTile.sId)
                .bind('mouseup', $.proxy(that, '_resetDraggingTimeout'))
                .bind('mousemove', $.proxy(that, '_resetDraggingTimeout'))
                .bind('scrollstart', $.proxy(that, '_resetDraggingTimeout'))
                .bind('touchmove', $.proxy(that, '_resetDraggingTimeout'))
                .bind('touchcancel', $.proxy(that, '_resetDraggingTimeout'));
        },
        _resetDraggingTimeout : function () {
            clearTimeout(this.fdownTimer);
            this.bActive = false;

            if (!jQuery.device.is.desktop) {
                //activate scrolling after drag and drop on mobile devices
                var oDashboardPage = sap.ui.getCore().byId("dashboardPage"),
                    oScroller = oDashboardPage.getScrollDelegate();

                oScroller._scroller.enable();
            }
        },

        _handleSortableRevert : function (event, ui) {
            //Return desired return duration
            return 250;
        },

        _handleSortableStart : function (event, ui) {
            sap.ui.getCore().getEventBus().publish("launchpad", "sortableStart");

            var oTile = sap.ui.getCore().byId(ui.item[0].id),
                jqDashboardGroup = jQuery.sap.byId(this.oView.oDashboardGroupsBox.getId()),
                that = this,
                // Get the clone area
                jqCloneArea = jqDashboardGroup.find("#cloneArea"),
                //Refresh the current margin (window scaling and opening the sidebar change the margin)
                containerOffsetLeft = parseFloat(jQuery("#shell-container-canvas").css("left")),
                dashboardOffsetLeft = jqDashboardGroup.offset().left;//css("width")

            if (oTile.getLong()) {
                jQuery(".sapUshellTile-placeholder").addClass("sapUshellLong");
            }

            jqCloneArea.css("left", dashboardOffsetLeft - containerOffsetLeft);

            //Flag the original tile that is currently being dragged
            ui.item.addClass("sapUshellExcludeMe");

            // Make the dragged item "unclickable" to prevent opening apps while/immediately after
            // drag'n'drop, because doing this produces ui errors.
            ui.item.click(function(oEvent) {
                oEvent.preventDefault();
                oEvent.stopPropagation();
            });

            if (jQuery.device.is.desktop) {
                //Clone all existing tiles
                //Iterate through all groups
                jqDashboardGroup.find(".sapUshellDashboardGroupsContainerItem").not(".sapUshellCloneArea").each(function () {
                    var jqGroup = jQuery(this);

                    //Iterate through all tiles
                    jQuery(this).find(".sapUshellTile").not(".sapUshellSortableHelperClone").each(function () {
                        //Clone the current tile (including style)
                        var oTile = jQuery(this),
                            oClonedTile = oTile.clone();
                        oClonedTile.attr("id", oClonedTile.attr("id") + '-clone');
                        oClonedTile.css("font-size", oTile.css("font-size"));
                        oClonedTile.addClass("sapUshellClonedTile");
                        // Make the clones "unclickable" to prevent opening apps while/immediately after
                        // drag'n'drop, because doing this produces ui errors.
                        oClonedTile.click(function(oEvent) {
                            oEvent.preventDefault();
                            oEvent.stopPropagation();
                        });

                        //Save the clone and the current group (sapUshellDashboardGroupsContainerItem)
                        oTile.data("clone", oClonedTile);
                        oTile.data("group", jqGroup);

                        //Position the clone inside the cloneArea
                        var sTileLeftOffset = parseInt(oTile.position().left) + parseInt(jQuery(".sapUshellDashboardGroupsContainer .sapUshellTileContainer").css("margin-left")) + "px",
                            iTileTopOffset = that._getTileTopOffset(oTile);

                        //Set the new position
                        oClonedTile.css("left", sTileLeftOffset);
                        oClonedTile.css("top", iTileTopOffset + "px");

                        //Append the clone...
                        jqCloneArea.append(oClonedTile);
                    });
                });

                //Hide all other original tiles
                jqDashboardGroup.find(".sapUshellTile").not(".sapUshellSortableHelperClone").not(".sapUshellExcludeMe").not(".sapUshellClonedTile").css("visibility", "hidden");
                //Get the clone that is under the current original tile and hide it...
                ui.item.data("clone").hide();
            }

            //jqDashboardGroup.find(".sapUshellSortableHelperClone").effect("shake", {times: 3},75,false);
            //show delete-area
            this.oView.oDashboardDeleteArea.show();
        },

        _handleSortableStop : function (event, ui) {
            // Make sure that helper is disposed
            jQuery(".sapUshellSortableHelperClone").remove();

            var sTileId = ui.item[0].id,
                oTile = sap.ui.getCore().byId(sTileId),
                oEventBus = sap.ui.getCore().getEventBus();

            if(oTile) {
                var oOldGroup = oTile.getParent();

                if (!oTile.bDeletionFlag) {
                    // Move tile in model if user actually moved a tile directly between groups.
                    // Only process if the event is not thrown by a helper and the tile was not
                    // deleted.
                    // If the tile was dropped on a group, oTile == undefined, as the drop handler
                    // destroyed it (see _handleGroupListItemDrop()). Nothing to be done here.
                    if (oTile.getLong()) {
                        jQuery(".sapUshellTile-placeholder").removeClass("sapUshellLong");
                    }

                    var oNewGroup = sap.ui.getCore().byId(ui.item.parents(".sapUshellTileContainer").attr("id")),
                        sNewGroupId = oNewGroup.getGroupId(),
                        nNewIndex = ui.item.index();

                    oOldGroup.removeTile(oTile, true);
                    oNewGroup.insertTile(oTile, nNewIndex, true);

                    oEventBus.publish("launchpad", "moveTile", {
                        sTileId    : oTile.getUuid(),
                        toGroupId  : sNewGroupId,
                        toIndex    : nNewIndex
                    });

                    // Workaround: Prevent a new sort from being started before re-rendering has happened.
                    // This is necessary because the delayed rendering would corrupt an ongoing sort, as it
                    // deletes the current container (& sortable) and creates a new one.)
                    // (But don't do this, when we're deleting tiles. In this case rerendering was already
                    // triggered by the deletion handler in mouseStop.)
                    ui.item.parent().sortable('disable');

                } else if (oTile.bDeletionFlag) {
                    oOldGroup.removeTile(oTile, true);
                    oTile.bDeletionFlag = false;

                    oEventBus.publish("launchpad", "deleteTile", {
                        tileId  : oTile.getUuid()
                    });

                    oTile.destroy();
                }
            }

            //hide delete-area
            this.oView.oDashboardDeleteArea.hide();

            if (jQuery.device.is.desktop) {
                //Show all original tiles and reset everything
                var jqShellTile = jQuery(".sapUshellTile").not(".sapUshellClonedTile");
                jqShellTile.removeData("clone");
                jqShellTile.removeClass("sapUshellExcludeMe");
                jqShellTile.css("visibility", "visible");

                //Delete all clones
                var jqDashboardGroup = jQuery.sap.byId(this.oView.oDashboardGroupsBox.getId()),
                    jqCloneArea = jqDashboardGroup.find("#cloneArea");
                jqCloneArea.empty();
            }

            if (jQuery.device.is.phone) {
                that.bActive = false;
                jQuery(".sapUshellInner.sapUshellTilesContainer-sortable").sortable('disable');
            }

            oEventBus.publish("launchpad", "sortableStop");
        },

        _handleSortableChange : function (event, ui, bAnimate) {
            var that = this,
                jqDashboardGroup = jQuery.sap.byId(this.oView.oDashboardGroupsBox.getId());

            //Get all invisible, original tiles that are not placeholders
            var oOriginalTiles = jqDashboardGroup.find(".sapUshellTile");
            oOriginalTiles = oOriginalTiles.not(".sapUshellExcludeMe");
            oOriginalTiles = oOriginalTiles.not(".sapUshellTile-placeholder");
            oOriginalTiles = oOriginalTiles.not(".sapUshellTile-placeholder.sapUshellLong");
            oOriginalTiles = oOriginalTiles.not(".sapUshellClonedTile");

            // when moving from one group to another this should only be called for the target group
            if (ui && ui.sender) {
                var jqPlaceholder = ui.placeholder;
                if (jqPlaceholder.length > 0) {
                    // jqTarget is the target group
                    var jqTarget = jqPlaceholder.first().parent();
                    if (jqTarget) {
                        var jqPlusTiles = jqTarget.find(".sapUshellPlusTile");
                        if (jqPlusTiles.length > 0) {
                            jqPlusTiles.detach();
                            jqTarget.append(jqPlusTiles);
                        }
                    }
                }
            }
            oOriginalTiles.each(function () {
                //Get the original tile and its clone
                var oTile = jQuery(this),
                    oClonedTile = oTile.data("clone");

                if (!oClonedTile) {
                    return false;
                }

                //Get the invisible tile that has snapped to the new
                //location, get its position, and animate the visible
                //clone to it

                //Position the clone inside the cloneArea
                var sTileLeftOffset = parseInt(oTile.position().left) + parseInt(jQuery(".sapUshellDashboardGroupsContainer .sapUshellTileContainer").css("margin-left")) + "px",
                    iTileTopOffset = that._getTileTopOffset(oTile);

                //Animate / move everything to their new locations
                if(bAnimate) {
                    //Stop currently running animations
                    //Without this, animations would queue up
                    oClonedTile.stop(true, false);

                    oClonedTile.animate({
                        left: sTileLeftOffset,
                        top: iTileTopOffset + "px"
                    }, {
                        duration: 250
                    }, {
                        easing: "swing"
                    });
                } else {
                    oClonedTile.css("left", sTileLeftOffset);
                    oClonedTile.css("top", iTileTopOffset + "px");
                }
            });
        },

        _handleGroupListOver : function (sChannel, sEventId, oEvent) {
            //Toggle transparency of the hovering tile
            jQuery(".sapUshellSortableHelperClone").toggleClass("sapUshellOverGroupList");

            //Hide the old placeholder
            jQuery(".sapUshellTile-placeholder").hide();
        },
        _handleGroupListOut : function (sChannel, sEventId, oEvent) {
            //Toggle transparency of the hovering tile
            jQuery(".sapUshellSortableHelperClone").toggleClass("sapUshellOverGroupList");

            //Show the old placeholder
            jQuery(".sapUshellTile-placeholder").show();

            //Reset the target drop group
            jQuery(".sapUshellGroupList").data("dropGroup", null);

            //Make the cloned tiles animate themselves to their new positions
            this._handleSortableChange(undefined, undefined, false);
        },
        _handleGroupListItemOver : function (sChannel, sEventId, oEvent) {
            //Memorize the group over which the tile is hovering
            jQuery(".sapUshellGroupList").data("dropGroup", oEvent.getSource());

            //Clone the old placeholder
            var jqPlaceholderClone = jQuery(".sapUshellTile-placeholder").not(".sapUshellPlaceholderClone").clone();
            jqPlaceholderClone.addClass("sapUshellPlaceholderClone");
            jqPlaceholderClone.attr("id", "placeholder-clone_" + oEvent.getSource().sId);

            //Identify the jQuery object of target group
            var jqTargetGroup;
            jQuery.each(this.oView.oDashboardGroupsBox.getGroups(), function (nIndex, oGroup) {
                if (oGroup.getGroupId() === oEvent.getSource().getGroupId()) {
                    jqTargetGroup = jQuery("#" + oGroup.sId).find(".sapUshellTilesContainer-sortable");
                    return false;
                }
            });

            //Attach cloned placeholder to last position of target group
            //Check if target group contains a plus tile (if so, insert before that)
            if(jqTargetGroup.find(".sapUshellPlusTile").length > 0) {
                //Append before plus tile
                jqTargetGroup.find(".sapUshellPlusTile").before(jqPlaceholderClone);
                jqPlaceholderClone.show();
            } else {
                //Append as last element
                jqTargetGroup.append(jqPlaceholderClone);
                jqPlaceholderClone.show();
            }

            //Make the original tile and the original placeholder invisible (if not already)
            jQuery(".sapUshellExcludeMe.sapUshellSortableHelperClone").hide();
            jQuery(".sapUshellTile-placeholder").not(".sapUshellPlaceholderClone").hide();

            //Make the cloned tiles animate themselves to their new positions
            this._handleSortableChange(undefined, undefined, false);
        },
        _handleGroupListItemOut : function (sChannel, sEventId, oEvent) {
            //Remove my placeholder clones
            jQuery("#placeholder-clone_" + oEvent.getSource().sId).remove();

            //Make the cloned tiles animate themselves to their new positions
            //In theory, this should only be necessary in "over", but due to the wrong order of events,
            //a placeholder could be removed AFTER the over event, thus leading to strange behavior
            this._handleSortableChange(undefined, undefined, false);
        },

        _handleGroupListItemDrop : function (sChannel, sEventId, oEvent) {
            //Move the tile
            var oTile = oEvent.getParameter("control"),
                oOldGroup = oTile.getParent();

            oOldGroup.removeTile(oTile, true);

            this._publishAsync("launchpad", "moveTile", {
                sTileId    : oTile.getUuid(),
                toGroupId  : oEvent.getSource().getGroupId(),
                toIndex    : null
            });

            //Clean up the missing events
            this._handleGroupListOut(sChannel, sEventId, oEvent);
            this._handleGroupListItemOut(sChannel, sEventId, oEvent);

            // TODO: It would be good if we could move the tile to its new container.
            // But that requires the drag-item and the oTile to be moved.
            oTile.destroy();
        },
        _publishAsync : function (sChannelId, sEventId, oData) {
            var oBus = sap.ui.getCore().getEventBus();
            window.setTimeout($.proxy(oBus.publish, oBus, sChannelId, sEventId, oData), 1);
        },
    });
}());
