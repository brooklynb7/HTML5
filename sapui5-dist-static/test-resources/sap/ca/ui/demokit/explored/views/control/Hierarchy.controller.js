sap.ui.controller("sap.ca.ui.sample.views.control.Hierarchy", {

    onInit : function() {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.HIERARCHY);
        this._oData = {
            items : [
                {
                    title:"Item Root"
                },
                {
                    icon:"refresh",
                    title:"Full Item",
                    activity:"Activity",
                    id:"19894794879847",
                    link:"Click Me!"
                },
                {
                    icon:"refresh",
                    title:"Full Item",
                    activity:"Activity",
                    id:"19894794879847",
                    link:"Click Me!",
                    optional:true
                },
                {

                    activity:"Activity",
                    id:"19894794879847",
                    optional:true
                },
                {
                    icon:"alert",
                    activity:"Activity",
                    link:"Click Me!"
                },
                {
                    icon:"present",
                    optional:true
                },
                {

                    id:"19894794879847",
                    link:"Click Me! I'm so long, I have so much to say!"
                },
                {
                    icon:"competitor",
                    title:"Full Item",
                    activity:"Activity",
                    id:"19894794879847",
                    link:"Click Me!",
                    optional:true
                },
                {
                    icon:"endoscopy",
                    title:"Full Item",
                    activity:"Activity",
                    id:"198947948798474307430470",
                    link:"Click Me! I'm so very very long, I have so much to say!"
                },
                {
                    title:"Full Item with a very long title",
                    activity:"Activity is quite long too",
                    id:"19894794879847",
                    link:"Click Me!",
                    selected:"ok"
                }
            ]
        };
        this.getView().setModel(new sap.ui.model.json.JSONModel(this._oData));
    } ,
    onPress:function(e){
           alert(e);
    },
    isEmphasized : function(selected){
        return (selected=="ok");
    },
    formatJSON : function(items){
        return JSON.stringify(items,null,2);
    },
    switchOptional:function(e){
        var bOptional = e.getParameter("state");
        this.byId("hierarchy").setHideOptionalLevels(!bOptional);
    },
    changeEmphasizedItems:function(e){
        var oItem = e.getParameter("selectedItem");
        var oModel = this.getView().getModel();
        var oldItem =  oModel.getProperty(oItem.getBindingContext().sPath);
        jQuery.each(oModel.getProperty("/items"), function(i, item){
            if( item == oldItem){
                oModel.setProperty("/items/"+i+"/selected","ok");
            } else if( item.selected=="ok"){
                oModel.setProperty("/items/"+i+"/selected","");
            }
        });
    }
});