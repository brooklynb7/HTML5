sap.ui.controller("AppNavSample.view.List", {
    oApplication : null,
    oDialog: null,
    oPopover: null,
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.List
*/
    onInit: function() {
        var myComponent = this.getMyComponent();
        if (myComponent.getComponentData().startupParameters) {
            jQuery.sap.log.debug("startup parameters of appnavsample are " + JSON.stringify(myComponent.getComponentData().startupParameters));
        }
    },

    getMyComponent: function() {
        var sComponentId = sap.ui.core.Component.getOwnerIdFor(this.getView());
        return sap.ui.component(sComponentId);
    },
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.List
*/
//  onBeforeRendering: function() {
//
//  },

    handleDefaultDetailPress : function() {
        this.oApplication.navigate("toView","Detail");
    },

    handleBtn1Press : function() {
        this.oApplication.navigate("toView","View1");
    },

    handleBtn2Press : function() {
        this.oApplication.navigate("toView","View2");
    },
    handleBtnBackPress : function() {
        this.oApplication.navigate("back","");
    },
    handleBtnBackDetailPress : function() {
        this.oApplication.navigate("backDetail","");
    },
    handleBtnFwdPress : function() {
        this.oApplication.navigate("Fwd","");
    },
    handleOpenDialogPress: function() {

        if (!this.oDialog) {
            var that = this;
            this.oDialog = new sap.m.Dialog({
                id: this.getView().createId("dialog"),
                title : "Sample Dialog",
                type : sap.m.DialogType.Message,
                leftButton : new sap.m.Button({
                    text : "Cancel",
                    press : function() {
                        that.oDialog.close();
                    }
                }),
                content : [
                           new sap.m.Link({
                               href: "{/DefaultApp_display_href}",
                               text: "Cross app link (Default App)",
                               tooltip: "Dialog should be closed automatically when navigating to another app"
                           }),
                           ],
            });
            this.oDialog.setModel( this.oApplication.oView.getModel() );

        }
        this.oDialog.open();
    },
    handleOpenPopoverPress: function() {
        if (!this.oPopover) {
            var oModel = this.oApplication.oView.getModel();
            var sHref = oModel.getProperty("/DefaultApp_display_href");
            this.oPopover = new sap.m.Popover({
                id: this.getView().createId("popover"),
                title: "Sample Popover",
                content: [
                          new sap.m.Link({
                              href: sHref,
                              text: "Cross app link (Default App)",
                              tooltip: "Popover should be closed automatically when navigating to another app"
                          })
                          ]
            });
        }
        if (!this.oPopover.isOpen()) {
            this.oPopover.openBy(this.getView().byId("openPopover"));
        } else {
            this.oPopover.close();
        }
    },
    handleOpenMessageToastPress: function() {
        sap.m.MessageToast.show("Sample message toast", { duration: 5000});
    },

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.List
*/
//  onAfterRendering: function() {
//
//  },

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.List
*/
    onExit: function() {

        // dialogs and popovers are not part of the UI composition tree and must
        // therefore be
        // destroyed explicitly in the exit handler
        if (this.oDialog) {
            this.oDialog.destroy();
        }

        if (this.oPopover) {
            this.oPopover.destroy();
        }
    }

});