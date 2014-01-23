/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.composite.InboxTaskCommentsRenderer");sap.uiext.inbox.composite.InboxTaskCommentsRenderer={};
sap.uiext.inbox.composite.InboxTaskCommentsRenderer.render=function(r,c){var a=r;var C=c;var m=C.getId();a.write('<ARTICLE');a.writeControlData(C);a.addClass('sapuiextInboxTaskCommentsChunk');a.writeClasses();a.write('>');if(C.getComments().length>0||C.showCommentFeeder){a.write("<SECTION>");this.renderComments(a,C);a.write("</SECTION>")}a.write('</ARTICLE>')};
sap.uiext.inbox.composite.InboxTaskCommentsRenderer.renderComments=function(r,c){var C=c.getComments();var l=C.length;r.write('<HEADER class= "sapuiextInboxTaskComments" >');if(c.rb){r.write(c.rb.getText('INBOX_TASK_NO_COMMENTS',[l]));if(l>c.maxComments){r.write('<a id='+c.getId()+'-all ');r.writeAttribute('href','javascript:void(0);');r.write('>');if(!c.allComments){r.write(c.rb.getText('INBOX_TASK_ALL_COMMENTS'))}else{r.write(c.rb.getText('INBOX_TASK_MAX_COMMENTS'))}r.write('</a>')}}r.write("</HEADER>");var n=l;if(!c.allComments&&c.maxComments<n){n=c.maxComments}for(var i=0;i<n;i++){r.renderControl(C[l-n+i])}if(c.oCommentFeeder){r.renderControl(c.oCommentFeeder)}};
