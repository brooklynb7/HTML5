/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
 
 jQuery.sap.declare("sap.uiext.inbox.InboxLink");
 jQuery.sap.require("sap.uiext.inbox.InboxConstants");
 
 sap.ui.commons.Link.extend("sap.uiext.inbox.InboxLink", {
	init: function(){
		if (sap.ui.commons.Link.prototype.init) { 
		      sap.ui.commons.Link.prototype.init.apply(this, arguments); 
		    }
		this._oBundle = sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox");
	}, 
	
	metadata : {                             
		properties : {
        "overdue" : {type : "boolean", defaultValue : false}                
		}
	},
	
	setOverdue: function(value){
		this.setProperty('overdue',value);
		if(value){
			this.addStyleClass("sapUiExtInboxRedColor");
			//this.setText("! "+this.getText());
		}else{
			this.removeStyleClass("sapUiExtInboxRedColor");
		}
		return this;
	},
	
    onclick : function(oEvent) {
			 if (this.getEnabled()) {
				 if (!this.firePress({windowEvent:oEvent})) {
					oEvent.preventDefault();
				}
			} else {
				oEvent.preventDefault();
			}
		},
	setText: function(value) {
			if(value !== undefined)
			 {
			 	var sValue = value ? value.replace(/^\s+|\s+$/g,'') : value;
			 	var lessThanSymbol =  sap.uiext.inbox.InboxConstants.LESS_THAN;
			 	var greaterThanSymbol = sap.uiext.inbox.InboxConstants.GREATER_THAN;
			 	if(!sValue) {
					value = lessThanSymbol + this._oBundle.getText("INBOX_TASK_TITLE_NOTAVAILABLE_MSG") + greaterThanSymbol;
			 	}
			}
	    sap.ui.commons.Link.prototype.setText.call(this,[value]);
	},

	setTooltip : function(value) {
		    
		    var sValue = value ? value.replace(/^\s+|\s+$/g,'') : value;
			if(!sValue) {
				value = this._oBundle.getText("INBOX_TASK_TITLE_NOTAVAILABLE_MSG");
			}
			else {
			value = sValue+"\n"+this._oBundle.getText("INBOX_CURRENT_TASKTITLE_TOOLTIP");
			}
			 sap.ui.commons.Link.prototype.setTooltip.call(this,value);
	},
	
	renderer: function(oRenderManager, oLink) {
	var rm = oRenderManager,
		r = sap.ui.commons.LinkRenderer;

	// Return immediately if control is invisible
	if (!oLink.getVisible()) {
		return;
	}

	// Link is rendered as a "<Link>" element
	rm.write("<a");
	rm.writeControlData(oLink);

	rm.writeAccessibilityState(oLink);

	if (!oLink.getEnabled()) {
		rm.addClass("sapUiLnkDsbl");
		rm.writeAttribute("disabled", "true");
	} else {
		rm.addClass("sapUiLnk");
	}
	rm.writeClasses();

	if (oLink.getTooltip_AsString()) {
		rm.writeAttributeEscaped("title", oLink.getTooltip_AsString());
	}

	if (oLink.getHref()) {
		rm.writeAttributeEscaped("href", oLink.getHref());
	}	else {
		rm.writeAttribute("href", "javascript:void(0);");
	}

	if (oLink.getTarget()) {
		rm.writeAttributeEscaped("target", oLink.getTarget());
	}

	if (!oLink.getEnabled()) {
		rm.writeAttribute("tabIndex", "-1");
	} else {
		rm.writeAttribute("tabIndex", "0");
	}

	if (oLink.getWidth()) {
		rm.addStyle("width", oLink.getWidth());
	}
	rm.writeStyles();

	// Close the starting tag
	rm.write(">");

	// Write the Link label
	if (oLink.getText()) {
		var text = oLink.getText();
		if(oLink.getOverdue()){
			text = "! "+text;
		}
		rm.writeEscaped(text);
	}

	// Close all tags
	rm.write("</a>");

}

});