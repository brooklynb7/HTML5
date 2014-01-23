//Copyright (c) 2013 SAP AG, All Rights Reserved

(function () {
    "use strict";
    /*global jQuery, sap, $, document */
    /*jslint plusplus: true, nomen: true */

    jQuery.sap.require("sap.ushell.ui.launchpad.GroupListItem");
    jQuery.sap.require("sap.ui.core.IconPool");

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

            if (jQuery(".sapUshellDeleteArea_grouplist_functional").data("groupOver") === true) {
                var oGroup = sap.ui.getCore().byId(jQuery(that.currentItem).attr('id')),
                    bRemovable = oGroup.getRemovable(),
                    oResourceBundle = sap.ushell.resources.i18n,
                    sDeleteGroupMsg = oResourceBundle.getText(bRemovable ? "delete_group_msg" : "reset_group_msg", [jqHelper.find(".sapMSLITitleOnly").text()]),
                    sDeleteGroupTitleMsg = oResourceBundle.getText(bRemovable ? "delete_group" : "reset_group"),
                    sAcceptButtonTxt = oResourceBundle.getText("okBtn"),
                    sRejectButtonTxt = oResourceBundle.getText("cancelBtn"),
                    fOnConfirm = function (sAction) {
                        if (sAction === sAcceptButtonTxt) {
                            //User wants to delete
                            //Flag for deletion
                            jqHelper.data("deleteMe", true);
                            //Animation to grouplist delete area
                            jqHelper.animate({
                                top: (jQuery(document).height() - jqHelper.height() - 10) + "px",
                                left: "0px",
                                opacity: 0
                            }, !isNaN(dur) ? dur : 250, function () {
                                that._clear(event);
                            });
                            //Delete the group!
                            var oEventBus = sap.ui.getCore().getEventBus();
                            oEventBus.publish("launchpad", bRemovable ? "deleteGroup" : "resetGroup", {
                                groupId : oGroup.getGroupId()
                            });
                        } else if (sAction === sRejectButtonTxt) {
                            //User does not want to delete
                            //Flag for not deleting the group
                            jqHelper.data("deleteMe", false);
                            //Animation to the original position
                            jqHelper.animate({
                                left: cur.left - that.offset.parent.left - that.margins.left + (that.offsetParent[0] === document.body ? 0 : that.offsetParent[0].scrollLeft),
                                top: cur.top - that.offset.parent.top - that.margins.top + (that.offsetParent[0] === document.body ? 0 : that.offsetParent[0].scrollTop)
                            }, !isNaN(dur) ? dur : 250, function () {
                                that._clear(event);
                            });
                        }

                        //Save that nothing is "over" the delete area anymore
                        jQuery(".sapUshellDeleteArea_grouplist_functional").data("groupOver", false);
                    };

                oGroup.bDeletionFlag = true;

                sap.ushell.services.Message.confirm(sDeleteGroupMsg, fOnConfirm, sDeleteGroupTitleMsg, [sAcceptButtonTxt, sRejectButtonTxt]);

            } else if (jQuery(".sapUshellGroupList").data("dropGroup")) {
                var jqGroupListItem = jQuery.sap.byId(jQuery(".sapUshellGroupList").data("dropGroup").sId);

                //Animate tile right into the group list item
                jqHelper.animate({
                    top: jqGroupListItem.offset().top + 16,
                    left: jqGroupListItem.offset().left + 48,
                    height: "0px",
                    width: "0px",
                    opacity: 0
                }, !isNaN(dur) ? dur : 250, function () {
                    jQuery(".sapUshellGroupList").data("dropGroup", null);
                    _mouseStop.apply(that, args);
                });

            } else {
                _mouseStop.apply(that, args);
            }
        } else {
            this._clear(event, noPropagation);
        }

        return false;
    };

    sap.ui.jsview("sap.ushell.renderers.fiori2.launchpad.group_list.GroupList", {
        createContent: function (oController) {
            var that = this,
                oOpenCatalogItem =  this._getOpenCatalogItem(oController),
                oAddGroupItem = this._getAddGroupItem(oController),
                oGroupListItemTemplate = this._getGroupListItemTemplate(oController),
                nAddedListItemId = undefined;

            this.oGrouplistDeleteArea = new sap.ushell.ui.launchpad.DeleteArea({
                type: sap.ushell.ui.launchpad.DeleteAreaType.GroupList
            });

            this.oGroupList = new sap.m.List({
                items : {
                    path     : "/groups",
                    template : oGroupListItemTemplate
                }
            }).addStyleClass("sapUshellGroupItemList");

            var fChangeHandler = function(oEvent) {
                var oList = oEvent.getSource().oList;

                jQuery.each(oList, function(nIndex, oItem) {
                    if(oItem.editMode) {
                        var aListItems = that.oGroupList.getItems();

                        nAddedListItemId = aListItems[nIndex].getId();
                    }
                });
            };

            this.oGroupList.onAfterRendering = function() {
                oController._updateGroupSelection();

                jQuery.proxy(oController.makeSortable, oController)();

                if(nAddedListItemId) {
                    var jqAddedListItem = jQuery.sap.byId(nAddedListItemId);

                    jqAddedListItem
                        .css('opacity', 0)
                        .slideDown(300)
                        .animate(
                          { opacity: 1 },
                          { queue: false, duration: 300 }
                        );

                    nAddedListItemId = undefined;
                }

                this.getBinding("items").detachChange(fChangeHandler);
                this.getBinding("items").attachChange(fChangeHandler);
            };

            this.oGroupList.updateItems = sap.ushell.override.updateAggregatesFactory("items");

            this.oOpenCatalogList = new sap.m.List({
                mode : sap.m.ListMode.SingleSelectMaster,
                items : [ oOpenCatalogItem ]
            });

            this.addStyleClass("sapUshellGroupList");

            if(!jQuery.device.is.phone) {
                this.oAddGroupList = new sap.m.List({
                    items : [ oAddGroupItem ]
                }).addStyleClass("sapUshellAddGroupButton");

                return [this.oOpenCatalogList, this.oGroupList, this.oAddGroupList, this.oGrouplistDeleteArea];
            } else {
                return [this.oOpenCatalogList, this.oGroupList, this.oGrouplistDeleteArea];
            }
        },

        _getOpenCatalogItem : function () {
            var oOpenCatalogItem = new sap.m.InputListItem({
                content:  new sap.ui.core.Icon({
                    src : 'grid'
                }),
                label: "{i18n>open_catalog}"
            }).addStyleClass('sapUshellBrowseCatalogButton');

            /* WORKAROUNDS for broken "press" events */
            oOpenCatalogItem.attachBrowserEvent('click', function () {
                    sap.ui.getCore().getEventBus().publish("openCatalog", {
                        groupContext : null
                });
            });

            return oOpenCatalogItem;
        },

        _getGroupListItemTemplate : function (oController) {
            var fOnAfterRenderingHandler = function (oEvent) {
                jQuery.proxy(oController._updateGroupSelection, oController)();

                if (this.getParent().getItems()[0] === this) {
                    this.setAllowEditMode(false);
                    this.addStyleClass("sapUshellOver");

                    if( this.getDefaultGroup() ) {
                        this.addStyleClass("sapUshellDefaultGroupItem");
                    }
                } else {
                    this.addStyleClass("sapUshellGroupListItem");
                }

                oController._bindGroupListItemEvents(oEvent);
            };

            return new sap.ushell.ui.launchpad.GroupListItem({
                title : "{title}",
                defaultGroup : "{isDefaultGroup}",
                groupId : "{groupId}",
                editMode : "{editMode}",
                // TODO: This information does not belong into the ui element, but there is no other way to make it accessible to drop-event-handler (_mouseStop).
                removable : "{removable}",
                numberOfTiles : "{tiles/length}",
                afterRendering : fOnAfterRenderingHandler,
                press : [ function (oEvent) {
                    this._handleGroupListItemPress(oEvent.getSource());
                }, oController ],
                change : [ oController.onGroupTitleChange, oController],
                over : [ oController._handleGroupListItemOver, oController ],
                out : [ oController._handleGroupListItemOut, oController ],
                drop : [ oController._handleGroupListItemDrop, oController ]
            });
        },

        _getAddGroupItem : function (oController) {
            return new sap.m.CustomListItem({
                content : new sap.ui.core.Icon({
                    src : 'sys-cancel'
                }),
                type :  sap.m.ListType.Active,
                tooltip : "{i18n>addgroupBtn_tooltip}",
                press : [ oController._handleGroupCreate, oController ]
            }).addStyleClass("sapUshellAddTilesContainer");
        },

        getControllerName: function () {
            return "sap.ushell.renderers.fiori2.launchpad.group_list.GroupList";
        }
    });
}());
