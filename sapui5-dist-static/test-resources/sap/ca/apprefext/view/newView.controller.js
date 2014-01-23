sap.ca.scfld.md.controller.BaseDetailController.extend("i2d.qm.qualityissue.confirm.apprefExt.view.newView", {
    onInit : function(){
        var view = this.getView();
        this.oRouter.attachRouteMatched(function(oEvent) {
            if (oEvent.getParameter("name") === "taskDetail") {
                var context = new sap.ui.model.Context(view.getModel(), '/' + oEvent.getParameter("arguments").contextPath);
                view.setBindingContext(context);
            }
        }, this);
    },

    goToDetailPage : function(oEvent){
        window.history.back();

    }
});
