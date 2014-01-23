/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.uiext.inbox.composite.InboxCommentRenderer");

/**
 * @class InboxComment renderer. 
 * @static
 */
sap.uiext.inbox.composite.InboxCommentRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.uiext.inbox.composite.InboxCommentRenderer.render = function(oRenderManager, oControl){ 
	// convenience variable
	var rm = oRenderManager;
	var oChunk = oControl;
	
	var sMyId = oChunk.getId();

	rm.write('<ARTICLE');
    rm.writeControlData(oChunk);
	rm.addClass('sapuiextInboxCommentChunk');
	rm.addClass('sapuiextInboxComment');
	
	rm.writeClasses();
    rm.write('>');

    // thumbnail
	rm.write('<img id=' + sMyId + '-thumb');
	var sThumbnail = oChunk.getThumbnailSrc();
	if(!sThumbnail){
		sThumbnail = jQuery.sap.getModulePath("sap.uiext.inbox", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + "/img/comments/person_placeholder_48.png";
	}
	rm.writeAttributeEscaped('src', sThumbnail);
	rm.writeAttributeEscaped('alt', oChunk.getSender());
	rm.writeClasses();
	rm.write('>');

    // text (starting with sender)
    rm.write('<DIV class= "sapuiextInboxCommentText" >');
	rm.write('<SPAN id=' + sMyId + '-sender class= "sapuiextInboxCommentSenderText"');
	rm.write('>');
	rm.writeEscaped(oChunk.getSender());
	rm.write('</SPAN> ');
	
	this.renderText(rm, oChunk);
	rm.write('</DIV>');
	
	// date
    rm.write('<SPAN class= "sapuiextInboxCommentChunkByline" >');
	rm.writeEscaped(oChunk.getTimestamp());
	rm.write('</SPAN>');
	
	rm.write('</ARTICLE>');
};

/*
 *	Render text with @References
 */
sap.uiext.inbox.composite.InboxCommentRenderer.renderText = function(rm, oChunk){

	//var sText = jQuery.sap._sanitizeHTML(oChunk.getText());
	var sText = oChunk.getText();
	var i = 0;

	do{
		var iPos = sText.search(/\s/);
		var sSpace = "",
			sWord = "";

		if(iPos < 0){
			// only 1 word
			sWord = sText;
		}else{
			sWord = sText.slice(0, iPos);
			sSpace = sText.slice(iPos, iPos + 1);
			sText = sText.slice(iPos + 1);
		}

		// check for special strings - will keep them as in FeedChunk for now.
		if (/^@/.test(sWord)) {
			// @-reference
			rm.write('<a id=' + oChunk.getId() + '-Ref' + i);
			rm.writeAttribute('href', 'javascript:void(0);');
			rm.write('>');
			rm.writeEscaped(sWord, true);
			rm.write('</a>', sSpace);
			i++;
		}else if (/^(https?|ftp):\/\//i.test(sWord) && jQuery.sap.validateUrl(sWord)) {
			// web link - valid URL
			rm.write('<a');
			rm.writeAttribute('href', jQuery.sap.encodeHTML(sWord));
			rm.write('>');
			rm.writeEscaped(sWord, true);
			rm.write('</a>',sSpace);
		}else if (/^(www\.)/i.test(sWord) && jQuery.sap.validateUrl("http://"+sWord)) {
			// web link without protocol -> use HTTP - valid URL
			rm.write('<a');
			rm.writeAttribute('href', jQuery.sap.encodeHTML("http://"+sWord));
			rm.write('>');
			rm.writeEscaped(sWord, true);
			rm.write('</a>',sSpace);
		}else if (/^[\w\.=-]+@[\w\.-]+\.[\w]{2,5}$/.test(sWord)) {
			//email - not 100% validity check and validation missing
			rm.write('<a');
			rm.writeAttribute('href', "mailto:"+jQuery.sap.encodeHTML(sWord));
			rm.write('>');
			rm.writeEscaped(sWord, true);
			rm.write('</a>',sSpace);
		}else{
			// normal word
			rm.writeEscaped(sWord + sSpace, true);
			//rm.write(sWord + sSpace);
		}
	}while(iPos >= 0);

};
