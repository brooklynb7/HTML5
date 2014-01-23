sap.ui.controller("sap.ca.ui.sample.views.control.OverflowContainer", {

    onInit : function() {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.OVERFLOW_CONTAINER);
    }

});