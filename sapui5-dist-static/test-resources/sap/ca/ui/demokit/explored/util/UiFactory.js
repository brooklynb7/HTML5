jQuery.sap.declare("util.UiFactory"); 
 
util.UiFactory = {
	
	createDescription : function (text) {
		var result = new sap.m.Text({text: text});
		result.addStyleClass('description');
		return result;
	},

	fillPageHeader : function (page, view, title) {
		
		var handlePress = jQuery.proxy(function (evt) {
			var code = this._convertCodeToHtml(view._xContent);
			if (jQuery.device.is.phone) {
				sap.ui.getCore().getEventBus().publish("nav", "to", {
					id : util.Id.CODE,
					data : {
						title : title,
						code : code
					}
				});
			} else {
				var popover = new sap.m.Popover({
					title : "Code",
					placement: sap.m.PlacementType.Bottom,
					content : [ 
						new sap.ui.core.HTML({ content: code })
					]
				});
				popover.openBy(evt.getSource());
			}
		}, this);
		
		page.setTitle(title)
			.setIcon("images/144_iPad_Retina_Web_Clip.png")
			.setShowNavButton(jQuery.device.is.phone)
			.attachNavButtonPress(function () {
				sap.ui.getCore().getEventBus().publish("nav", "back");
			})
			.addHeaderContent(new sap.m.Button({
				icon : "sap-icon://zoom-in", 
				press : handlePress
			}));
		
		return page;
	},
	
	_convertCodeToHtml : function (code) {
		
		jQuery.sap.require("jquery.sap.encoder");

		code = (new XMLSerializer()).serializeToString(code);

		// Get rid of function around code
		code = code.replace(/^function.+{/, "");
		//code = code.replace(/return \[[\s\S]*/, "");
		code = code.replace(/}[!}]*$/, "");

		// Get rid of unwanted code if CODESNIP tags are used
		code = code.replace(/^[\n\s\S]*\/\/\s*CODESNIP_START/, "");
		code = code.replace(/\/\/\s*CODESNIP_END[\n\s\S]*$/, "");
		
		// Improve indentation for display
		code = code.replace(/\n\t\t/g, "\n");
		code = code.replace(/\t/g, "  ");

		return '<pre><code>' + jQuery.sap.encodeHTML(code) + '</code></pre>';
	}
};