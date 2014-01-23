/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.composite.InboxTaskCommentsRenderer");

/**
 * @class InboxTaskComments renderer. 
 * @static
 */
sap.uiext.inbox.composite.InboxTaskCommentsRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.uiext.inbox.composite.InboxTaskCommentsRenderer.render = function(oRenderManager, oControl){ 
	// convenience variable
	var rm = oRenderManager;
	var oChunk = oControl;
	
	var sMyId = oChunk.getId();

	rm.write('<ARTICLE');
    rm.writeControlData(oChunk);
	rm.addClass('sapuiextInboxTaskCommentsChunk');
	rm.writeClasses();
    rm.write('>');
    
 // comments
    if(oChunk.getComments().length > 0  || oChunk.showCommentFeeder){
		rm.write("<SECTION>");
		this.renderComments(rm, oChunk);
		rm.write("</SECTION>");
    }
    
    rm.write('</ARTICLE>');
    
};

/*
 *	Render comment section content
 */
sap.uiext.inbox.composite.InboxTaskCommentsRenderer.renderComments = function(rm, oChunk){

	var oComments = oChunk.getComments();
	var iLength = oComments.length;

	// number of comments
	rm.write('<HEADER class= "sapuiextInboxTaskComments" >');
	if(oChunk.rb) {
		rm.write(oChunk.rb.getText('INBOX_TASK_NO_COMMENTS', [iLength]));

		if (iLength > oChunk.maxComments){
			rm.write('<a id=' + oChunk.getId() + '-all ');
			rm.writeAttribute('href', 'javascript:void(0);');
			rm.write('>');
			if (!oChunk.allComments) {
				rm.write(oChunk.rb.getText('INBOX_TASK_ALL_COMMENTS'));
			} else {
				rm.write(oChunk.rb.getText('INBOX_TASK_MAX_COMMENTS'));
			}
			rm.write('</a>');
		}
	}
	rm.write("</HEADER>");

	// comments are sorted from old to new. Newest comment is on the bottom
	var iNumberChunks = iLength;
	if (!oChunk.allComments && oChunk.maxComments < iNumberChunks) {
		iNumberChunks = oChunk.maxComments;
	}

	for ( var i = 0; i < iNumberChunks; i++) {
		rm.renderControl(oComments[iLength - iNumberChunks + i]);
	}

	// comment feeder
	if (oChunk.oCommentFeeder) {
		rm.renderControl(oChunk.oCommentFeeder);
	}

};
