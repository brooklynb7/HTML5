// Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap, console, window, $ */
    /*jslint plusplus: true, nomen: true*/

    sap.ui.controller("sap.ushell.renderers.fiori2.launchpad.group_list.GroupList", {
        onInit : function () {
            // #groupList
            this.sViewId = "#" + this.getView().getId();
            // #__list4
            this.sGroupListId = "#" + this.getView().oGroupList.getId();

            jQuery(".sapUshellGroupList").data("dropGroup", null);

            //Internal counter for over and out events thrown by GroupListItems
            //This is needed because of a jQuery bug that throws over and out events in the wrong order
            this.iOutEventCounter = 0;
            this.iOverEventCounter = 0;
            //Internal flag to detect "real" GroupListOut-events
            this.iOutEventFlag = false;
        },

        onAfterRendering : function () {
            this.jqView = jQuery(this.sViewId);
            this.jgGroupList = jQuery(this.sGroupListId);

            this.lastItemWithEditMode = null;

            // The delete area is moved out of the scrollable area
            jQuery("#__area1").appendTo("#shell-cntnt");

            // Use a resize-handler to fix the size of input-fields (necessary for ie and firefox).
            var fResizeHandler = function (event) {
                var jqGrouplist = jQuery(event.currentTarget),
                    jqTitleOnly = jQuery(".sapMSLITitleOnly"),
                    jqInputField = jQuery(".sapUshellGroupLI").find(".sapMInput");

                jqTitleOnly.css("width", (jqGrouplist.width() - parseInt(jqTitleOnly.css("padding-left"))) + "px");
                jqInputField.css("width", (jqGrouplist.width() - (2 * parseInt(jqInputField.css("margin-left")))) + "px");
            };

            var jqOuterGroupList = jQuery("#groupList");
            jqOuterGroupList.unbind("resize", fResizeHandler);
            jqOuterGroupList.bind("resize", fResizeHandler);

            // TODO: This call seems to be unnecessary. Remove it if testers don't come up with bugs.
            //fResizeHandler({currentTarget : jqOuterGroupList});
        },
        onGroupTitleChange : function (oEvent) {
            this._publishAsync("launchpad", "changeGroupTitle", {
                groupId : oEvent.getSource().getGroupId(),
                newTitle : oEvent.getParameter("newTitle")
            });
        },
        makeSortable : function () {
            this.jgGroupList = jQuery(this.sGroupListId);
            this._sortable();
        },
        _getJqAllListItems : function () {
            this.jqView = jQuery(this.sViewId);
            return this.jqView.find(".sapUshellGroupListItem");
        },
        _getJqGroupListItems : function () {
            this.jgGroupList = jQuery(this.sGroupListId);
            return this.jgGroupList.find(".sapUshellGroupListItem");
        },

        _getGroupTopOffset : function (oGroup) {
            var iGroupTopOffset = 0,
                oDashboardPage = sap.ui.getCore().byId("groupListPage");

            iGroupTopOffset += oGroup.parent().parent().position().top;
            iGroupTopOffset += oGroup.position().top;
            iGroupTopOffset -= oGroup.parent().parent().parent().position().top;

            return iGroupTopOffset;
        },

        _sortable : function () {
            var that = this,
                jqParentGroupListPage = jQuery("#groupListPage").parent();

            that.bActive = false;

            this.jgGroupList.find(".sapMListUl").sortable({
                containment: jqParentGroupListPage,
                items: '>:not(.sapUshellDefaultGroupItem)',
                placeholder: "sapUshellGroupLI-placeholder",
                helper: function (event, element) {
                    var clone = element.clone(),
                        jqGroupListItem = jQuery(".sapUshellGroupListItem");
                    clone.addClass("sapUshellSortableHelperClone");
                    clone.addClass("sapUshellClonedGrouplistItem");
                    clone.removeClass("li");
                    clone.css("font-size", element.css("font-size"));
                    clone.css("width", jqGroupListItem.first().parent().width());
                    clone.css("height", jqGroupListItem.first().height() + parseInt(jqGroupListItem.first().css("border-bottom-width")));

                    clone.hide();
                    window.setTimeout(function () {
                        clone.appendTo('body');
                        clone.show();
                    }, 1);

                    return clone;
                },
                revert: jQuery.proxy(this._handleSortableRevert, this),
                start: jQuery.proxy(this._handleSortableStart, this),
                stop: jQuery.proxy(this._handleSortableStop, this),
                change: jQuery.proxy(this._handleSortableChange, this)
            }).disableSelection(); //disable text selection browser-behaviour

            if (!jQuery.device.is.desktop) {
                this.jgGroupList.find(".sapMListUl").sortable('disable');
            }
        },

        _bindGroupListItemEvents : function(oEvent) {
            var oGroupListItem = oEvent.getSource();

            if (!jQuery.device.is.tablet) {
                return;
            }

            var that = this;

            jQuery.sap.byId(oGroupListItem.sId).bind("mousedown", function (event) {
                var _this = jQuery(this);

                if (that.bActive === false && !_this.hasClass("sapUshellDefaultGroupItem")) {
                    var _event = event;

                    jQuery(".sapUshellGroupItemList").find(".ui-sortable").sortable('disable');

                    clearTimeout(this.fdownTimer);
                    this.fdownTimer = setTimeout(function () {
                        that.bActive = true;
                        jQuery(_this).effect("shake", {
                            times: 1,
                            distance: 5,
                            complete: function () {
                                if( !that.bActive ) {
                                    return;
                                }
                                jQuery(".sapUshellGroupItemList").find(".ui-sortable").sortable('enable');

                                //deactivate scrolling during drag and drop on mobile devices
                                var oGroupListPage = sap.ui.getCore().byId("groupListPage"),
                                    oScroller = oGroupListPage.getScrollDelegate();

                                oScroller._scroller.disable();

                                _this.trigger(_event);
                            }
                        }, 50);
                    }, 150);
                }
            });

            jQuery.sap.byId(oGroupListItem.sId).bind("mouseup", function (event) {
                clearTimeout(this.fdownTimer);
                that.bActive = false;

                if (!jQuery.device.is.desktop) {
                    //activate scrolling after drag and drop on mobile devices
                    var oGroupListPage = sap.ui.getCore().byId("groupListPage"),
                        oScroller = oGroupListPage.getScrollDelegate();

                    if(!oScroller._scroller.enabled) {
                        oScroller._scroller.enable();
                        //workaround to enable addGroup on iOS after enabling iScroll
                        oScroller._scroller.scrollTo(oScroller._scroller.absStartX, oScroller._scroller.absStartY);
                    }
                }
            });

            jQuery.sap.byId(oGroupListItem.sId).bind("mousemove", function (event) {
                clearTimeout(this.fdownTimer);
                that.bActive = false;
            });
        },

        _handleSortableRevert : function (event, ui) {
            //Return desired return duration
            return 250;
        },

        _handleSortableStart : function (event, ui) {
            ui.placeholder.height(ui.helper.outerHeight());
            var that = this,
                jqCloneArea = jQuery(this.sViewId).find(".sapUshellCloneArea");

            if (jqCloneArea.length <= 0) {
                jqCloneArea = jQuery("<div id='cloneArea' class='sapUshellCloneArea'></div>");
                jQuery(this.sViewId).append(jqCloneArea);
            }

            //Flag the original group that is currently being dragged
            ui.item.addClass("sapUshellExcludeMe");

            //Clone all existing groups
            //Iterate through all groups
            this._getJqAllListItems().each(function () {
                //Clone the current group (including style)
                var oGroup = jQuery(this),
                    oClonedGroup = oGroup.clone(),
                    //Position the clone inside the cloneArea
                    sGroupLeftOffset = oGroup.position().left,
                    iGroupTopOffset = that._getGroupTopOffset(oGroup),
                    jqGroupListItem = jQuery(".sapUshellGroupListItem");

                oClonedGroup.addClass("sapUshellClonedGrouplistItem");

                //Save the clone and the current group (sapUshellDashboardGroupsContainerItem)
                oGroup.data("clone", oClonedGroup);

                //Set the new position
                oClonedGroup.css("left", sGroupLeftOffset);
                oClonedGroup.css("top", iGroupTopOffset + "px");

                //Append the clone...
                jqCloneArea.append(oClonedGroup);

                //Fix some styling
                oClonedGroup.css("font-size", jqGroupListItem.first().css("font-size"));
                oClonedGroup.css("width", jqGroupListItem.first().parent().width());
                oClonedGroup.css("height", jqGroupListItem.first().height() + parseInt(jqGroupListItem.first().css("border-bottom-width")));
            });

            //Hide all other original groups
            this._getJqAllListItems().not(".sapUshellSortableHelperClone").not(".sapUshellExcludeMe").not(".sapUshellClonedGrouplistItem").css("visibility", "hidden");
            //Get the clone that is under the current original tile and hide it...
            ui.item.data("clone").hide();
            ui.item.startPos = ui.item.index();
            //show delete-area
            this.oView.oGrouplistDeleteArea.show();
        },

        _updateGroupSelection : function() {
            // Nothing to do if Grouplist is not shown.
            if(!this.getView().getModel().getProperty("/currentState/showPane")) {
                return;
            }

            //Check if something is currently being dragged or sorted (there is a helper in the dom)
            //If so, cancel this whole update action
            if(jQuery(".ui-sortable-helper").length > 0) {
                return;
            }

            var fHandleScroll = function (nScrollTop) {
                var jqContainer = jQuery('#dashboardGroups').find('.sapUshellTileContainer'),
                    oOffset = jqContainer && jqContainer.first().parent().offset(),
                    firstContainerOffset = oOffset && oOffset.top || 0,
                    oOffset = jQuery('#dashboardPage').offset(),
                    edgeMargin = oOffset && oOffset.top,
                    animationTime = 1200,
                    contentTop = [];

                // In some weird corner cases, those may not be defined -> bail out.
                if(!jqContainer || !oOffset) {
                    return;
                }

                jqContainer.each(function () {
                    var nContainerTopPos = jQuery(this).parent().offset().top;
                    contentTop.push([nContainerTopPos, nContainerTopPos + jQuery(this).parent().height()]);
                });

                var nBottomSpace = jQuery(window).height() - edgeMargin - jqContainer.last().parent().height();
                nBottomSpace = (nBottomSpace < 0) ? 0 : nBottomSpace;

                jQuery('.sapUshellDashboardGroupsContainer').css("margin-bottom", nBottomSpace + "px");

                var winTop = nScrollTop + firstContainerOffset;
                jQuery.each(contentTop, function (i, currentPos) {
                    if (currentPos[0] <= winTop && winTop <= currentPos[1]) {
                        jQuery('#groupList .sapUshellDefaultGroupItem, #groupList .sapUshellGroupListItem')
                            .removeClass('sapUshellOver')
                            .eq(i).addClass('sapUshellOver');
                    }
                });
            },
            oDashboardPageContent = jQuery("#dashboardPage-cont");

            if (!jQuery.device.is.desktop) {
                var that = this;

                if (!this.oDashboardPage) {
                    this.oDashboardPage = sap.ui.getCore().byId("dashboardPage");
                    this.oScroller = this.oDashboardPage.getScrollDelegate();
                    this.oOriginalScrollMove = this.oScroller._scroller.options.onScrollMove;
                }

                this.oScroller._scroller.options.onScrollMove = function (oEvent) {
                    that.oOriginalScrollMove.apply(that.oScroller);

                    var nScrollTop = that.oScroller.getScrollTop();
                    fHandleScroll.call(oDashboardPageContent, nScrollTop);
                };

                var nScrollTop = this.oScroller.getScrollTop();
                fHandleScroll.call(oDashboardPageContent, nScrollTop);
            } else {
                oDashboardPageContent.unbind('scroll');
                oDashboardPageContent.scroll(function () {
                    var nScrollTop = jQuery("#dashboardPage-cont").scrollTop();
                    fHandleScroll(nScrollTop);
                });

                var nScrollTop = jQuery("#dashboardPage-cont").scrollTop();
                fHandleScroll(nScrollTop);
            }
        },

        _handleSortableStop : function (event, ui) {
            //Show all original tiles and reset everything
            this._getJqAllListItems().removeData("clone").removeClass("sapUshellExcludeMe").css("visibility", "visible");
            //Delete all clones
            jQuery(".sapUshellClonedGrouplistItem").remove();

            //hide delete-area
            this.oView.oGrouplistDeleteArea.hide();

            var fromIndex = ui.item.startPos,
                toIndex = ui.item.index(),
                oGroupListItem = sap.ui.getCore().byId(ui.item[0].id);

            // If there is an oTile, something has been sorted.
            // Don't sort when we actually want to delete/reset tiles.
            if(oGroupListItem) {
                if(!oGroupListItem.bDeletionFlag) {
                    this._handleGroupMove(event, ui);

                    // Workaround: Prevent a new sort from being started before re-rendering has happened.
                    // This is necessary because the delayed rendering would corrupt an ongoing sort, as it
                    // deletes the current container (& sortable) and creates a new one.)
                    // (But don't do this, when we're deleting tiles. In this case rerendering was already
                    // triggered by the deletion handler in mouseStop.)
                    this.jgGroupList.find(".sapMListUl").sortable('disable');
                    // TODO: Rerendering is necessary to enable the sortable again.
                    //  But changing the order does not always trigger it, so we force it. Why is this necessary?
                    this.oView.oGroupList.invalidate();
                } else {
                    oGroupListItem.bDeletionFlag = false;
                }
            }

            this.jgGroupList.find(".sapMListUl").sortable('cancel');

            //Call the resize handler to trigger group name truncation (some delay for IE9)
            setTimeout(function () {
                var jqOuterGroupList = jQuery("#groupList");
                jqOuterGroupList.trigger("resize", [jqOuterGroupList.width(), jqOuterGroupList.height()]);
            }, 5);

            if (!jQuery.device.is.desktop) {
                this.bActive = false;
                this.jgGroupList.find(".sapMListUl").sortable('disable');
            }

            // Wait until dashboard is rerendered
            window.setTimeout(jQuery.proxy(function() {
                this._handleScrollToGroup(oGroupListItem);
                this._updateGroupSelection();
            }, this), 1000);
        },

        _handleSortableChange : function (event, ui) {
            var that = this,
                //Get all invisible, original tiles that are not placeholders
                oOriginalGroups = this._getJqAllListItems().not(".sapUshellExcludeMe").not(".sapUshellClonedTile");

            oOriginalGroups.each(function () {
                //Get the original tile and its clone
                var oGroup = jQuery(this),
                    oClonedGroup = oGroup.data("clone"),
                    //Position the clone inside the cloneArea
                    sGroupLeftOffset = oGroup.position().left,
                    iGroupTopOffset = that._getGroupTopOffset(oGroup);

                if (oClonedGroup) {
                    //Stop currently running animations
                    //Without this, animations would queue up
                    oClonedGroup.stop(true, false);

                    //Get the invisible tile that has snapped to the new
                    //location, get its position, and animate the visible
                    //clone to it

                    //Animate everything to their new locations
                    oClonedGroup.animate({
                        left: sGroupLeftOffset,
                        top: iGroupTopOffset + "px"
                    }, {
                        duration: 250
                    }, {
                        easing: "swing"
                    });
                }
            });
        },

        // Model Event Handlers
        _handleGroupCreate : function () {
            var focused = jQuery(':focus');
            if (focused) {
                focused.blur();
            }
            this._publishAsync("launchpad", "createGroup", {
                title : sap.ushell.resources.i18n.getText("new_group_name")
            });
        },
        
        _handleGroupListItemPress : function (oSource) {
            //Close the grouplist on phone if not editing
            if(jQuery.device.is.phone) {
                sap.ui.getCore().byId("shell").setShowPane(false);
                //Scroll to the new group
                var that = this;
                setTimeout(function () {
                    that._handleScrollToGroup(oSource);
                    that._updateGroupSelection();
                }, 1000);
            } else {
                this._handleScrollToGroup(oSource);
                this._updateGroupSelection();
            }
        },

        _handleScrollToGroup : function (oGroupItem) {
            if(!oGroupItem) {
                return;
            }

            this._publishAsync("launchpad", "scrollToGroup", {
                groupId : oGroupItem.getGroupId()
            });
        },

        _handleGroupMove : function (event, ui) {
            var oEventBus = sap.ui.getCore().getEventBus(),
                fromIndex = ui.item.startPos,
                toIndex = ui.item.index();

            if (fromIndex !== toIndex && toIndex !== -1) {
                this._publishAsync("launchpad", "moveGroup", {
                    fromIndex  : fromIndex,
                    toIndex    : toIndex
                });
            }
        },

        // TODO: This is done in _mouseStop in the view.js, but should be handled here.
        /*
        _handleGroupDelete : function (event, ui) {
            var oEventBus = sap.ui.getCore().getEventBus(),
                oGroup = sap.ui.getCore().byId(ui.draggable[0].id);
            oEventBus.publish("launchpad", "deleteGroup", {
                groupId : oGroup.getGroupId()
            });
        },
        */

        onCategoryFilter : function (oEvent) {
            var oBus = sap.ui.getCore().getEventBus(),
                sQuery = oEvent.getParameter("selectedItem").getText();

            // Async publication of category filter
            window.setTimeout(jQuery.proxy(oBus.publish, oBus, "catalog", "categoryFilter", {
                category : (sQuery !== "All") ? sQuery : null
            }), 1);
        },

        _publishAsync : function (sChannelId, sEventId, oData) {
            var oBus = sap.ui.getCore().getEventBus();
            window.setTimeout($.proxy(oBus.publish, oBus, sChannelId, sEventId, oData), 1);
        },

        //Group List Items
        _handleGroupListItemOver : function (oEvent) {
            //If this is the first GroupListItemOver, then the tile probably just started hovering the group list
            //Due to wrong order and number of events we still have to check if this has already happened
            if(this.iOutEventCounter === 0 && this.iOverEventCounter === 0) {
                this._handleGroupListOver(oEvent);
            }

            //Flag that this event has happened
            this.iOutEventFlag = true;

            //Notify dashboard
            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.publish("grouplist", "GroupListItemOver", oEvent);

            this.iOutEventCounter++;
        },
        _handleGroupListItemOut : function (oEvent) {
            this.iOutEventCounter--;

            //Check if there is an OVER-event happening within the next few ms
            this.iOutEventFlag = false;
            var that = this;
            setTimeout(function () {
                if(that.iOutEventFlag === false) {
                    //There was NO next over event, it could be a GroupListOut
                    //but we still have to check if the order and number of the events was correct
                    //If every over has an out, the tile cannot be over the group list anymore
                    if(that.iOutEventCounter === 0 && that.iOverEventCounter === 1) {
                        that._handleGroupListOut(oEvent);
                    }
                }
            }, 1);

            //Notify dashboard
            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.publish("grouplist", "GroupListItemOut", oEvent);
        },
        _handleGroupListItemDrop : function (oEvent) {
            //Reset some stuff
            this.iOutEventCounter = 0;
            this.iOverEventCounter = 0;
            this.iOutEventFlag = false;

            //Notify dashboard
            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.publish("grouplist", "GroupListItemDrop", oEvent);
        },

        //Group List
        _handleGroupListOver : function (oEvent) {
            this.iOverEventCounter++;

            //Notify dashboard
            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.publish("grouplist", "GroupListOver", oEvent);
        },
        _handleGroupListOut : function (oEvent) {
            this.iOverEventCounter = 0;

            //Notify dashboard
            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.publish("grouplist", "GroupListOut", oEvent);
        }
    });
}());
