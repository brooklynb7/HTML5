// Provides default renderer for control sap.ui.richtexteditor.RichTextEditor
jQuery.sap.declare("sap.ui.richtexteditor.RichTextEditorRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * RichTextEditorRenderer
 * @class
 * @static
 * @author Malte Wedel, Andreas Kunz
 */
sap.ui.richtexteditor.RichTextEditorRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the Render-Output-Buffer.
 * @param {sap.ui.richtexteditor.RichTextEditor}
 *            oRichTextEditor The RichTextEditor control that should be rendered.
 */
sap.ui.richtexteditor.RichTextEditorRenderer.render = function(oRenderManager, oRichTextEditor) {
	var rm = oRenderManager,
	    r  = sap.ui.richtexteditor.RichTextEditorRenderer;
	
	// root tag
	rm.write('<div');
	rm.writeControlData(oRichTextEditor);
	rm.addClass("sapUiRTE");
	if (oRichTextEditor.getRequired()) {
		rm.addClass("sapUiRTEReq");
	}
	rm.writeClasses();
	rm.addStyle("width", oRichTextEditor.getWidth());
	rm.addStyle("height", oRichTextEditor.getHeight());
	rm.writeStyles();
	if(oRichTextEditor.getTooltip_AsString()) // ensure not to render null
		rm.writeAttributeEscaped("title", oRichTextEditor.getTooltip_AsString());
	rm.write('>');
	
	// render the actual editor - could be different ones depending on configuration
	var renderMethodName = "render" + oRichTextEditor.getEditorType() + "Editor";
	if (r[renderMethodName] && typeof(r[renderMethodName]) == "function") {
		r[renderMethodName].call(r, rm, oRichTextEditor);
	} else {
		// TODO?: no valid editor configured; render a plain textarea - but it will not be a full-fledged sap.ui.commons.TextArea!!
		/*
		rm.write('<textarea class="sapUiRTEPlainTextarea sapUiTf sapUiTfBack sapUiTfBrd sapUiTfStd sapUiTxtA" ');
		rm.writeAttribute('id', oRichTextEditor.getId() + "-textarea");
		rm.addStyle("width", oRichTextEditor.getWidth());
		rm.addStyle("height", oRichTextEditor.getHeight());
		rm.writeStyles();
		rm.write('></textarea>');
		 */
	}
	
	// close the tag
	rm.write('</div>');
};



/* Editor-implementation-dependent code 
 * The following code will only be executed if the configured editor is TinyMCE */

/**
 * Creates the HTML required to run the TinyMCE editor
 * @private
 */
sap.ui.richtexteditor.RichTextEditorRenderer.renderTinyMCEEditor = function(rm, oRichTextEditor) {

	if (!sap.ui.richtexteditor.RichTextEditorRenderer.bTinyMCELoaded) {
		if(sap.ui.richtexteditor.TinyMCELicense === "sap.only"){
			// load tinymce script
			jQuery.sap.includeScript(sap.ui.resource('sap.ui.richtexteditor', oRichTextEditor.getEditorLocation()));
			sap.ui.richtexteditor.RichTextEditorRenderer.bTinyMCELoaded = true;
		}else{
			sap.ui.richtexteditor.RichTextEditorRenderer.bTinyMCELicenseMissing = true;
			jQuery.sap.log.error(
				"You try to use the RichTextEditor control with TinyMCE plugin without valid license.",
				"Please read the API documentation of the RichTextEditor carefully.",
				"sap.ui.richtexteditor.RichTextEditor"
			);
		}
	}

	rm.write('<textarea ');
	rm.writeAttribute('id', oRichTextEditor.getId() + "-textarea");
	rm.addStyle("width", oRichTextEditor.getWidth());
	rm.addStyle("height", oRichTextEditor.getHeight());
	rm.writeStyles();
	if(oRichTextEditor.getTooltip_AsString())
		rm.writeAttributeEscaped("title", oRichTextEditor.getTooltip_AsString());
	rm.write('>');
	rm.writeEscaped(oRichTextEditor.getValue());
	rm.write('</textarea>');
};
