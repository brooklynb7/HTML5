jQuery.sap.declare("i2d.qm.qualityissue.confirm.appref.Configuration");
jQuery.sap.require("sap.ca.scfld.md.ConfigurationBase");

sap.ca.scfld.md.ConfigurationBase.extend("i2d.qm.qualityissue.confirm.appref.Configuration", {


    /**
     * the list contains the service definition
     */
    aServiceList:[{
            name:"Z_I2D_QM_QUALITYISSUE_CONFIRM_SRV",
            serviceUrl:"",
            isDefault:true,
            mockedDataSource:jQuery.sap.getModulePath("i2d.qm.qualityissue.confirm.appref")+"/model/metadata.xml"
    }
    ],

    /**
     * @override
     * Getter for the service list to be used as source for the Connection Manager
     *
     * @returns {object} the list of ODataModel to instantiate with their
     *          corresponding url / mock url
     */
    getServiceList:function () {
        return this.aServiceList;
    },

    isMock : function() {
        return true; /* difference 3/3 with real app: this one always runs on mock data */
    }
});
