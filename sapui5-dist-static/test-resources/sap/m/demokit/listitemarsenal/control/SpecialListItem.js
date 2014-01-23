sap.m.ListItemBase.extend("arsenal.control.SpecialListItem", {

	metadata: {
		properties : {
			"name": {type: "string", defaultValue: ""},
			"description": {type: "string", defaultValue: ""},
			"price": {type: "string", defaultValue: ""},
			"currency": {type: "string", defaultValue: ""},
			"image": {type: "string", defaultValue: ""}
		},
		events: {
			"myTap": {},
		},
	},

	init: function(){
		this._image = new sap.m.Image({src: this.getImage()}).addStyleClass("customListItemImage").setParent(this);
	},
	
	renderer: {
		renderLIContent : function(oRm, oControl) {	
			oRm.write("<div class='specialListItem'");
				oRm.writeControlData(oControl);
				oRm.write(">");
					oRm.renderControl(oControl._image);	
					oRm.write("<div class='customListItemContent'");
					oRm.write(">");	
						oRm.write("<div class='customListItemDiv'");
						oRm.write(">");	
							oRm.write("<div class='customListItemName customListItemNameActive'>");
							oRm.writeEscaped(oControl.getDescription());
							oRm.write("</div>");		
							oRm.write("<div class='customListItemDivPrice'");
							oRm.write(">");		
							oRm.write("<div class='customListItemPrice customListItemPriceActive'>");
							oRm.writeEscaped(oControl.getPrice());
							oRm.write("</div>");
							oRm.write("<div class='customListItemUnit'>");
							oRm.writeEscaped(oControl.getCurrency());
							oRm.write("</div>");
						oRm.write("</div>");
					oRm.write("</div>");
					oRm.write("<div id='"+ oControl.getId() +"-customListItemDesc' class='customListItemDesc customListItemDescActive'>");
					oRm.writeEscaped(oControl.getName());
					oRm.write("</div>");	
				oRm.write("</div>");
			oRm.write("</div>");	
		}
	}
});


arsenal.control.SpecialListItem.prototype.setImage = function(sSrc){
	this._image.setSrc(sSrc);
	this.setProperty("image", sSrc, true);
	return this;
};

arsenal.control.SpecialListItem.prototype.ontap = function(){
	this.fireMyTap({});
	sap.m.ListItemBase.prototype.ontap.apply(this, arguments);
};