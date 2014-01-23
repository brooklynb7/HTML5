/*
 * Custom textarea control
 */

sap.ui.core.Control.extend("my.controls.Textarea", {

	metadata : {
		properties : {
			value : {
				type : "string",
				defaultValue : ""
			},
			placeholder : {
				type : "string",
				defaultValue : ""
			},
			width : {
				type : "sap.ui.core.CSSSize",
				defaultValue : "400px"
			},
			height : {
				type : "sap.ui.core.CSSSize",
				defaultValue : "200px"
			}
		},
		events : {
			change : {}
		}
	},

	renderer : function(oRm, oControl) {
		oRm.write("<textarea");
		oRm.writeControlData(oControl);
		oRm.addStyle("width", oControl.getWidth());
		oRm.addStyle("height", oControl.getHeight());
		oRm.writeStyles();
		oRm.addClass("sapMInputBase");
		oRm.writeClasses();
		oRm.writeAttributeEscaped("placeholder", oControl.getPlaceholder());
		oRm.write(">");
		oRm.writeEscaped(oControl.getValue());
		oRm.write("</textarea>");
	},

	onAfterRendering : function() {
		this.$().change($.proxy(this.onChange, this));
	},

	onChange : function() {
		var value = this.$().val();
		this.setProperty("value", value, true);
		this.fireChange({
			value : value
		});
	}

});