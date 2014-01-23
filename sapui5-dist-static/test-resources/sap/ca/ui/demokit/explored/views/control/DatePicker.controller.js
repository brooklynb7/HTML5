jQuery.sap.require("sap.ca.ui.model.type.Date");

sap.ui.controller("sap.ca.ui.sample.views.control.DatePicker", {

    onInit : function() {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.DATE_PICKER);

        // Databinding
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData({
            modelDateValue : new Date(1330470000000),
            modelDateValue1 : new Date(1379055600000),
            modelDateValue2 : new Date(1341903600000),
            modelDateValue3 : new Date(1384070400000)
        });
        //sap.ui.getCore().setModel(oModel);

        page.setModel(oModel);

        this.oPicker = this.byId('myDatePicker');
        this.oText = this.byId("TextView1");
        var oText3 = this.byId("TextView3");
        this.iEvents = 0;

        var showEventProperties = this.eventParametersToString;

        // Binding Parse Error
        sap.ui
        .getCore()
        .attachParseError(
                function(oEvent) {
                    var oElement = oEvent
                            .getParameter("element");

                    var oValue = oEvent.getParameter('newValue');

                    oText3.setText("ParseError: Entered value: "
                                    + showEventProperties(oEvent));
                    // oText3.setValueState(sap.ui.core.ValueState.Error);

                    if (oElement.setValueState) {
                        oElement.setValueState(sap.ui.core.ValueState.Error);
                    }
                });

        // Binding Validation Success
        sap.ui
            .getCore()
            .attachValidationSuccess(
                    function(oEvent) {
                        var oElement = oEvent
                                .getParameter("element");

                        var oValue = oEvent.getParameter('newValue');

                        oText3.setText("ValidationSuccess: Entered value: "
                                        + showEventProperties(oEvent));
                        //oText3.setValueState(sap.ui.core.ValueState.Success);

                        if (oElement.setValueState) {
                            oElement.setValueState(sap.ui.core.ValueState.Success);
                        }
                    });

        // Datepicker in Popup
        var oLyt = new sap.m.VBox();
        oLyt
                .addItem(new sap.ca.ui.DatePicker("DP_Popup"));

        var oDialog = new sap.m.Dialog(
                "myDialog",
                {
                    modal : true,
                    title : "Test DatePicker",
                    height : "200px",
                    width : "200px",
                    content : [ oLyt ],
                    buttons : [ new sap.m.Button(
                            "myDialog_Cancel",
                            {
                                text : "Cancel",
                                press : function(
                                        oEvent) {
                                    oDialog
                                            .close();
                                }
                            }) ]
                });
        this.oDialog = oDialog;

        this.displayMyDatePickerAttributes();
    },

    openDialog : function() {
        this.oDialog.open();
    },

    //Event handler for DatePicker change
    handleChange : function(oEvent) {

        if (oEvent
                .getParameter("invalidValue")) {
            oEvent.oSource
                    .setValueState(sap.ui.core.ValueState.Error);
            //this.oText.setValueState(sap.ui.core.ValueState.Error);
        } else {
            oEvent.oSource
                    .setValueState(sap.ui.core.ValueState.Success);
            //this.oText.setValueState(sap.ui.core.ValueState.Success);
        }
        this.iEvents++;

        this.oText
                .setText("Eventcounter: "
                        + this.iEvents + ". "
                        + this.eventParametersToString(oEvent));

        this.displayMyDatePickerAttributes();
    },

    eventParametersToString : function(oEvent) {
        var oParameters = oEvent.getParameters();

        var strParameters = "";
        for (var parameter in oParameters) {
            if (oParameters.hasOwnProperty(parameter)) {
                strParameters = strParameters + parameter + "='" + oParameters[parameter] + "' ";
            }
        }

        return strParameters;
    },


    liveChangeOffset : function(oEvent) {
        var sValue = oEvent.mParameters.newValue;
        this.oPicker.setFirstDayOffset(parseInt(sValue,0));

        this.displayMyDatePickerAttributes();
    },

    displayMyDatePickerAttributes : function() {
        var oProperties = this.oPicker.mProperties;
        var strProperties = "";

        for (var property in oProperties) {
            if (oProperties.hasOwnProperty(property)) {
                strProperties = strProperties + property + "='" + oProperties[property] + "' ";
            }
        }

        this.byId("TextView2").setText(strProperties);
    },


});