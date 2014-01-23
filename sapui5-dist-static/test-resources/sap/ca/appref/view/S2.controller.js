jQuery.sap.require("sap.ca.scfld.md.controller.BaseMasterController");
jQuery.sap.require("sap.ca.ui.model.type.Date");
jQuery.sap.require("i2d.qm.qualityissue.confirm.appref.util.Formatter");

sap.ca.scfld.md.controller.BaseMasterController.extend("i2d.qm.qualityissue.confirm.appref.view.S2", {

    /**
     * @override
     *
     * Called by the UI5 runtime to init this controller
     *
     */
    onInit:function () {
        //Execute onInit for the base class BaseMasterController
        sap.ca.scfld.md.controller.BaseMasterController.prototype.onInit.call(this);

        var view = this.getView();

        this.oRouter.attachRouteMatched(function(oEvent) {
            if (oEvent.getParameter("name") === "detail") {
                var oModel = this.oApplicationFacade.getODataModel();
                var context = new sap.ui.model.Context(oModel, '/' + oEvent.getParameter("arguments").contextPath);
                view.setBindingContext(context);
            }
        }, this);


        //Retrieve the application bundle
        this.resourceBundle = this.oApplicationFacade.getResourceBundle();

        //Settings
        this.oMasterModel = new sap.ui.model.json.JSONModel({
            selectedFilter : "All",
            selectedSorter : "CreatedAt",
            toogleSubmit : false
        });
        this.getView().setModel(this.oMasterModel, "masterModel");

        //for later reference
        this.masterList = this.getView().byId("list");
    },

    /**
     * Handle for master list sort
     */
    handleSort : function (sSortKey) {
        // update master list binding
        var oSorter = new sap.ui.model.Sorter(sSortKey, true);

        var listBinding = this.getList().getBinding("items").sort(oSorter);
        this.oMasterModel.setProperty('/selectedSorter', sSortKey);
    },

    /**
     * Handle for master list filter
     */
    handleFilter : function (sfilterKey) {
        var filters = [];

        if (sfilterKey != "All") {
            filters.push(new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.EQ, sfilterKey));
            this.oMasterModel.setProperty('/toogleSubmit', true);

            //Changing the text of "filtered by ..."
            var oLabelToolbar = this.getView().byId("labelTB");
            oLabelToolbar.setText(this.resourceBundle.getText("FILTERED_BY", [sfilterKey]));
        }
        else{
            this.oMasterModel.setProperty('/toogleSubmit', false);
        }

        // update master list binding
        var bindings = this.masterList.getBinding("items").filter(filters, sap.ui.model.FilterType.Control);
        this.oMasterModel.setProperty('/selectedFilter', sfilterKey);
    },

    /**
     * Handle for adding a new issue
     */
    handleAdd:function (oEvent) {
        this.oRouter.navTo("IssueForm");
    },

    getHeaderFooterOptions : function() {
        var that = this;
        return {
            sI18NMasterTitle : "MASTER_DATA_TITLE",
            buttonList : [],
            oFilterOptions : {
                aFilterItems : [
                    {
                        text : "{i18n>STATUS_ALL}",
                        key : "All"
                    },
                    {
                        text : "{i18n>STATUS_NEW}",
                        key : "New"
                    },
                    {
                        text : "{i18n>STATUS_IN_PROCESS}",
                        key : "In Process"
                    },
                    {
                        text : "{i18n>STATUS_COMPLETED}",
                        key : "Completed"
                    }
                ],
                sSelectedItemKey : that.oMasterModel.getProperty("/selectedFilter"),
                onFilterSelected : jQuery.proxy(that.handleFilter, that)
            },
            oSortOptions : {
                aSortItems : [
                    {
                        text : "{i18n>DATE_OF_REPORT}",
                        key : "CreatedAt"
                    },
                    {
                        text : "{i18n>STATUS}",
                        key : "Status"
                    },
                    {
                        text : "{i18n>DEFECT}",
                        key : "Defect"
                    }
                ],
                sSelectedItemKey : that.oMasterModel.getProperty("/selectedSorter"),
                onSortSelected : jQuery.proxy(that.handleSort, that)
            },
            onAddPress : jQuery.proxy(that.handleAdd, that)
        };
    }

});