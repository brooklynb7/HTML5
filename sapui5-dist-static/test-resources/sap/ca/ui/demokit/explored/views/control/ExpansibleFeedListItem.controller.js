sap.ui.controller("sap.ca.ui.sample.views.control.ExpansibleFeedListItem", {

    onInit : function() {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.EXPANSIBLE_FEED_LIST_ITEM);

        this._oPopover = new sap.m.Popover({
            placement: sap.m.PlacementType.Auto,
            content: [
                new sap.m.Label({text:"This could be a business card, if we really wanted to."})
            ]
        });
    },

    _openPopover: function (oEvent) {
        this._oPopover.openBy(oEvent.getParameter("domRef"));
    }
});