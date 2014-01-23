/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uiext.inbox.composite.InboxTaskComments.
jQuery.sap.declare("sap.uiext.inbox.composite.InboxTaskComments");
jQuery.sap.require("sap.uiext.inbox.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new composite/InboxTaskComments.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getFeederSender feederSender} : string</li>
 * <li>{@link #getFeederThumbnailSrc feederThumbnailSrc} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getComments comments} : sap.uiext.inbox.composite.InboxComment[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.uiext.inbox.composite.InboxTaskComments#event:commentSubmit commentSubmit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * InboxTaskComments
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments
 */
sap.ui.core.Control.extend("sap.uiext.inbox.composite.InboxTaskComments", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.uiext.inbox",
	properties : {
		"feederSender" : {type : "string", group : "Data", defaultValue : null},
		"feederThumbnailSrc" : {type : "sap.ui.core.URI", group : "Data", defaultValue : null}
	},
	aggregations : {
    	"comments" : {type : "sap.uiext.inbox.composite.InboxComment", multiple : true, singularName : "comment"}
	},
	events : {
		"commentSubmit" : {}
	}
}});


/**
 * Creates a new subclass of class sap.uiext.inbox.composite.InboxTaskComments with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.uiext.inbox.composite.InboxTaskComments.extend
 * @function
 */

sap.uiext.inbox.composite.InboxTaskComments.M_EVENTS = {'commentSubmit':'commentSubmit'};


/**
 * Getter for property <code>feederSender</code>.
 * Sender for the comment feeder
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>feederSender</code>
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments#getFeederSender
 * @function
 */

/**
 * Setter for property <code>feederSender</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFeederSender  new value for property <code>feederSender</code>
 * @return {sap.uiext.inbox.composite.InboxTaskComments} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments#setFeederSender
 * @function
 */


/**
 * Getter for property <code>feederThumbnailSrc</code>.
 * URL to the thumbnail image for the comment feeder.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>feederThumbnailSrc</code>
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments#getFeederThumbnailSrc
 * @function
 */

/**
 * Setter for property <code>feederThumbnailSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sFeederThumbnailSrc  new value for property <code>feederThumbnailSrc</code>
 * @return {sap.uiext.inbox.composite.InboxTaskComments} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments#setFeederThumbnailSrc
 * @function
 */


/**
 * Getter for aggregation <code>comments</code>.<br/>
 * URL to the thumbnail image.
 * 
 * @return {sap.uiext.inbox.composite.InboxComment[]}
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments#getComments
 * @function
 */


/**
 * Inserts a comment into the aggregation named <code>comments</code>.
 *
 * @param {sap.uiext.inbox.composite.InboxComment}
 *          oComment the comment to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the comment should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the comment is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the comment is inserted at 
 *             the last position        
 * @return {sap.uiext.inbox.composite.InboxTaskComments} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments#insertComment
 * @function
 */

/**
 * Adds some comment <code>oComment</code> 
 * to the aggregation named <code>comments</code>.
 *
 * @param {sap.uiext.inbox.composite.InboxComment}
 *            oComment the comment to add; if empty, nothing is inserted
 * @return {sap.uiext.inbox.composite.InboxTaskComments} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments#addComment
 * @function
 */

/**
 * Removes an comment from the aggregation named <code>comments</code>.
 *
 * @param {int | string | sap.uiext.inbox.composite.InboxComment} vComment the comment to remove or its index or id
 * @return {sap.uiext.inbox.composite.InboxComment} the removed comment or null
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments#removeComment
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>comments</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.uiext.inbox.composite.InboxComment[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments#removeAllComments
 * @function
 */

/**
 * Checks for the provided <code>sap.uiext.inbox.composite.InboxComment</code> in the aggregation named <code>comments</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.uiext.inbox.composite.InboxComment}
 *            oComment the comment whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments#indexOfComment
 * @function
 */
	

/**
 * Destroys all the comments in the aggregation 
 * named <code>comments</code>.
 * @return {sap.uiext.inbox.composite.InboxTaskComments} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments#destroyComments
 * @function
 */


/**
 * Event is raised when submit on the feeder is pressed. 
 *
 * @name sap.uiext.inbox.composite.InboxTaskComments#commentSubmit
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'commentSubmit' event of this <code>sap.uiext.inbox.composite.InboxTaskComments</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.uiext.inbox.composite.InboxTaskComments</code>.<br/> itself. 
 *  
 * Event is raised when submit on the feeder is pressed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.uiext.inbox.composite.InboxTaskComments</code>.<br/> itself.
 *
 * @return {sap.uiext.inbox.composite.InboxTaskComments} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments#attachCommentSubmit
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'commentSubmit' event of this <code>sap.uiext.inbox.composite.InboxTaskComments</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.uiext.inbox.composite.InboxTaskComments} <code>this</code> to allow method chaining
 * @public
 * @name sap.uiext.inbox.composite.InboxTaskComments#detachCommentSubmit
 * @function
 */

/**
 * Fire event commentSubmit to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.uiext.inbox.composite.InboxTaskComments} <code>this</code> to allow method chaining
 * @protected
 * @name sap.uiext.inbox.composite.InboxTaskComments#fireCommentSubmit
 * @function
 */


// Start of sap/uiext/inbox/composite/InboxTaskComments.js
/*!
 * @copyright@
 */
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.ux3.Feeder");

/**
 * This file defines behavior for the control,
 */
sap.uiext.inbox.composite.InboxTaskComments.prototype.init = function(){
	this.maxComments = 2; // max. number of comments displayed initially
	this.allComments = false; // initially render only maxComments
	this.rb = sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox");
	this.initCommentFeeder();
};

sap.uiext.inbox.composite.InboxTaskComments.prototype.initCommentFeeder = function(){
	// create comment feeder if needed
	if (!this.oCommentFeeder) {
		this.oCommentFeeder = new sap.ui.ux3.Feeder( this.getId()+'-InboxTaskCommentFeeder', {
			type: sap.ui.ux3.FeederType.Comment, thumbnailSrc: this.getFeederThumbnailSrc()
		}).setParent(this);
		this.oCommentFeeder.attachEvent('submit', this.handleCommentFeederSubmit, this); // attach event this way to have the right this-reference in handler
		this.showCommentFeeder = true;
	}
};

sap.uiext.inbox.composite.InboxTaskComments.prototype.exit = function(){
	if (this.oCommentFeeder) {
		this.oCommentFeeder.destroy();
		delete this.oCommentFeeder;
	}
	this.rb = undefined;
	this.showCommentFeeder = undefined;
	this.oText = undefined;
};

/**
 * handler for click event
 *
 * @private
 */
sap.uiext.inbox.composite.InboxTaskComments.prototype.onclick = function(oEvent){
	var sTargetId = oEvent.target.getAttribute( 'ID' );

	if(sTargetId){
		switch ( sTargetId ){
		case ( this.getId() + '-all' ):
			// Click on sender
			this.showAllComments();
		break;
		}
	}
	oEvent.stopPropagation(); //to prevent comment chunks to propagate event to parentChunk
};

/**
 * After rendering, bind the keyupHandler to the input field of feeder
 * 
 *
 * @private
 */
sap.uiext.inbox.composite.InboxTaskComments.prototype.onAfterRendering = function () {
	
	jQuery.sap.byId(this.getId()+'-InboxTaskCommentFeeder'+"-input").bind("keyup",this, this.keyupHandler);
	
};


/**
 * handler for keyup
 *
 * Restrict the number of characters to 500 in a comment
 * @private
 */
sap.uiext.inbox.composite.InboxTaskComments.prototype.keyupHandler = function(oEvent){
	var that = oEvent.data;
	var sInputId = that.getId()+'-InboxTaskCommentFeeder'+"-input";
	var sInputText = jQuery.sap.byId(sInputId).text();
	var MAX_CHARACTER_LENGTH_FOR_COMMENTS=500;
	
	if(sInputText.length > MAX_CHARACTER_LENGTH_FOR_COMMENTS)
	{		
		jQuery.sap.byId(sInputId).text(sInputText.slice(0,MAX_CHARACTER_LENGTH_FOR_COMMENTS));		
		that.placeCaretAtEnd(document.getElementById(sInputId));
	}
		
}



	
sap.uiext.inbox.composite.InboxTaskComments.prototype.placeCaretAtEnd = function(commentTextElement) {   //Place cursor at end after the entered text is sliced 
	
	commentTextElement.focus();
	if (typeof window.getSelection != "undefined"
	&& typeof document.createRange != "undefined") 
	{
	var range = document.createRange();
	range.selectNodeContents(commentTextElement);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
	} 
	
	else if (typeof document.body.createTextRange != "undefined")
	{
	var textRange = document.body.createTextRange();
	textRange.moveToElementText(commentTextElement);
	textRange.collapse(false);
	textRange.select();
	} 
	
}


/**
 * show all comments
 * rerender comment section
 *
 * @private
 */
sap.uiext.inbox.composite.InboxTaskComments.prototype.showAllComments = function(){

	this.allComments = !this.allComments;

	var $commentSection = jQuery.sap.byId(this.getId() + " > section"); // use sap function instead of jQuery child selector because of escaping ID
	if ($commentSection.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		this.getRenderer().renderComments(rm, this);
		rm.flush($commentSection[0]);
		rm.destroy();
	}

};

/**
 * Handler for Comment feeder submit event
 *
 * @private
 */
sap.uiext.inbox.composite.InboxTaskComments.prototype.handleCommentFeederSubmit = function(oEvent){
	var sSanitizedText = this._sanitizeText(oEvent.getParameter('text'));
	//this behavior is different from the actual Feedchunk, because we need to add the comment first before displaying the comment.
	this.fireCommentSubmit({text: sSanitizedText});
};

/*
 * Overwrite standard getter for feeder thumbnail source:
 * If not set and feedChunk is child of a Feed or FeedChunk use the thumbnailsource of the parent
 * So it must not be set manual for each sub-control and is always synchron
 */
sap.uiext.inbox.composite.InboxTaskComments.prototype.setFeederThumbnailSrc = function(value) {
	this.setProperty("feederThumbnailSrc", value);

	if (this.oCommentFeeder) {
		this.oCommentFeeder.setThumbnailSrc(value);
	}
};


/*
 * Overwrite generated function
 */
sap.uiext.inbox.composite.InboxTaskComments.prototype.insertComment = function(oComment, iIndex) {

	this.insertAggregation("comments", oComment, iIndex);
	this.initCommentFeeder();
	return this;

};

sap.uiext.inbox.composite.InboxTaskComments.prototype.addComment = function(oComment) {

	this.addAggregation("comments", oComment);
	this.initCommentFeeder();
	return this;

};

sap.uiext.inbox.composite.InboxTaskComments.prototype._sanitizeText = function(sText) {
	//sText = jQuery.trim(sText);
	return jQuery.sap._sanitizeHTML(sText);
};