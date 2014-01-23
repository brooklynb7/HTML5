jQuery.sap.require("sap.ca.ui.model.format.DateFormat")

sap.ui.controller("sap.ca.ui.sample.views.control.Notes", {

    onInit : function() {
        var page = this.getView().byId("page");
        util.UiFactory.fillPageHeader(page, this.getView(), util.Title.NOTES);

        this._oDataFormatter = sap.ca.ui.model.format.DateFormat.getDateTimeInstance({pattern: "EEE MMM dd HH:mm yyyy"});
        this.oData = {text:"batman", comments:[]};
        var sLongText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur diam non hendrerit posuere. Fusce quis purus in nunc porttitor fringilla. Suspendisse commodo ullamcorper convallis. Maecenas placerat erat eget enim blandit porta. Aliquam ac lectus venenatis, ornare mi a, venenatis lectus. Aenean elementum metus condimentum tellus volutpat, nec lobortis massa sodales. Morbi sem felis, eleifend iaculis mauris non, egestas vestibulum libero. Duis lacinia adipiscing elit nec molestie. Donec at nibh arcu. Nam viverra varius felis vitae posuere. Praesent faucibus pulvinar fringilla. Donec ultricies laoreet nisi. Cras venenatis leo eu dolor pharetra, at porta arcu accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent malesuada est at magna posuere dictum. Aenean ut rhoncus erat. Phasellus sed fermentum magna. Cras commodo condimentum orci et semper. Pellentesque nec nunc dui. Pellentesque laoreet orci quis mauris imperdiet, sit amet tincidunt libero dapibus. Proin velit sem, tincidunt sed odio et, interdum ullamcorper ante. Integer mauris lorem, venenatis et odio a, pellentesque dignissim mauris. Sed sollicitudin nisi sed turpis vulputate pharetra. Sed porttitor massa est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam pulvinar justo commodo auctor. Praesent hendrerit tellus quis nisl laoreet, in elementum massa tincidunt. Aliquam adipiscing arcu velit, non fringilla leo varius at. Donec lorem lorem, vestibulum nec lectus eu, mattis dapibus purus. Vestibulum posuere nisi at urna accumsan rutrum. Quisque sagittis malesuada nisi, eu malesuada velit dignissim vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nisl arcu, dapibus eu gravida id, tincidunt eget nisi. Fusce a porttitor elit. In hendrerit ligula at mauris semper, nec interdum velit tincidunt. Vivamus porttitor posuere metus, eget tincidunt lectus sodales nec. Aenean venenatis, diam scelerisque lacinia bibendum, risus orci congue mauris, ut auctor nisi mauris ut metus. Nunc ultrices ac turpis a imperdiet. Curabitur non bibendum massa. Nam eu arcu volutpat, congue risus eu, aliquet elit. Aenean consequat malesuada orci eget ullamcorper. Aliquam gravida vel tortor lacinia condimentum. Donec sed leo at purus porttitor fermentum ut non metus. Nunc vitae ipsum mauris. Phasellus mollis mattis magna, a dictum mauris porttitor id. Ut sit amet accumsan libero. Aenean eu justo odio. Morbi eu placerat ipsum. Nunc vulputate turpis at tellus aliquam, ut rhoncus dui vulputate. Integer accumsan est eget bibendum malesuada. Quisque nec velit dui. Sed adipiscing viverra metus, a tristique est convallis quis. Ut mollis purus tellus, ut pharetra libero gravida vel. Vivamus vehicula egestas dolor a commodo. Ut ut ligula odio. Cras et ante a est consectetur lobortis. In ut diam id urna aliquet tincidunt at eu turpis. Morbi convallis elit eu elit venenatis sodales. Integer congue faucibus urna quis rutrum.";
        this.oData.comments.push(this._getComment(sLongText));
        this.oData.comments.push(this._getComment());
        this.oData.comments.push(this._getComment());
        this.oData.comments.push(this._getComment(sLongText));
        this.oData.comments.push(this._getComment());
        this.oData.comments.push(this._getComment());

        this.oModel = new sap.ui.model.json.JSONModel(this.oData);

        this.getView().setModel(this.oModel);

        this._oPopover = new sap.m.Popover({
            placement: sap.m.PlacementType.Auto,
            content: [
                new sap.m.Label({text:"This could be a business card, if we really wanted to."})
            ]
        });
    },

    _getComment: function (sText) {
            var iRandomNumber = Math.floor(Math.random()*sap.ui.core.IconPool.getIconNames().length);
            var sRandomIconName = sap.ui.core.IconPool.getIconNames()[iRandomNumber];
            var oComment = {
                sender: "Sender Name",
                timestamp: this._oDataFormatter.format(new Date()),
                text: sText || "Some more text"+Math.random(),
                icon: sap.ui.core.IconPool.getIconURI(sRandomIconName),
                info: "Approved"
            };
            return oComment;
    },
    
    _handleAddNote: function (oEvent) {
        var sText = oEvent.getParameter("value");
        var oNote = this._getComment(sText);
        
        this.oData.comments.unshift(oNote);
        this.oModel.setData(this.oData);
        
    },
    
    _openPopover: function (oEvent) {
        this._oPopover.openBy(oEvent.getParameter("domRef"));
    }
});