/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.Notes.
jQuery.sap.declare("sap.ca.ui.Notes");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.m.List");


/**
 * Constructor for a new Notes.
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
 * <li>{@link #getShowNoteInput showNoteInput} : boolean (default: true)</li>
 * <li>{@link #getTextMaxLength textMaxLength} : int (default: 1000)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.Notes#event:addNote addNote} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.List#constructor sap.m.List}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control is a List with the ability to render an additional control on top of it to add new notes. The developer is responsible to give the correct template to use to display notes (recommended are either the FeedListItem or the ExpansibleFeedListItem). The developer is also responsible to implement the code to send the notes to the backend system, by responding to the addNote event.
 * @extends sap.m.List
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.Notes
 */
sap.m.List.extend("sap.ca.ui.Notes", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"clear", "reset"
	],

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"showNoteInput" : {type : "boolean", group : "Misc", defaultValue : true},
		"textMaxLength" : {type : "int", group : "Misc", defaultValue : 1000}
	},
	events : {
		"addNote" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.Notes with name <code>sClassName</code> 
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
 * @name sap.ca.ui.Notes.extend
 * @function
 */

sap.ca.ui.Notes.M_EVENTS = {'addNote':'addNote'};


/**
 * Getter for property <code>showNoteInput</code>.
 * If set to true, this control will render an additional control to create new notes.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showNoteInput</code>
 * @public
 * @name sap.ca.ui.Notes#getShowNoteInput
 * @function
 */

/**
 * Setter for property <code>showNoteInput</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowNoteInput  new value for property <code>showNoteInput</code>
 * @return {sap.ca.ui.Notes} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.Notes#setShowNoteInput
 * @function
 */


/**
 * Getter for property <code>textMaxLength</code>.
 * max text input length
 *
 * Default value is <code>1000</code>
 *
 * @return {int} the value of property <code>textMaxLength</code>
 * @public
 * @name sap.ca.ui.Notes#getTextMaxLength
 * @function
 */

/**
 * Setter for property <code>textMaxLength</code>.
 *
 * Default value is <code>1000</code> 
 *
 * @param {int} iTextMaxLength  new value for property <code>textMaxLength</code>
 * @return {sap.ca.ui.Notes} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.Notes#setTextMaxLength
 * @function
 */


/**
 * press event for button
 * 
 * (oControlEvent) Event is fired when the user clicks on the control.
 * 
 * fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject] 
 *
 * @name sap.ca.ui.Notes#addNote
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'addNote' event of this <code>sap.ca.ui.Notes</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.Notes</code>.<br/> itself. 
 *  
 * press event for button
 * 
 * (oControlEvent) Event is fired when the user clicks on the control.
 * 
 * fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject] 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.Notes</code>.<br/> itself.
 *
 * @return {sap.ca.ui.Notes} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.Notes#attachAddNote
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'addNote' event of this <code>sap.ca.ui.Notes</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.Notes} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.Notes#detachAddNote
 * @function
 */

/**
 * Fire event addNote to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.Notes} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.Notes#fireAddNote
 * @function
 */


/**
 * Clear the content of the inner text box
 *
 * @name sap.ca.ui.Notes.prototype.clear
 * @function

 * @type void
 * @public
 */


/**
 * Calls clear() and reset growing metadata
 *
 * @name sap.ca.ui.Notes.prototype.reset
 * @function

 * @type void
 * @public
 */


// Start of sap\ca\ui\Notes.js
jQuery.sap.require("sap.m.MessageToast"); 
jQuery.sap.require("sap.ui.core.IconPool");

sap.ca.ui.Notes.prototype.init = function() {
    if (sap.m.List.prototype.init) {
        sap.m.List.prototype.init.apply(this);
    }

    var textAreaDefaultHeight;
    var sFourRowHeight;
    var sThreeRowHeight;
    var iRowCount = 2;

    this._oTextArea = new sap.m.TextArea(this.getId()+"-textarea", {
        maxLength : this.getTextMaxLength(),
        placeholder : sap.ca.ui.utils.resourcebundle.getText("notes.addNotePlaceHolder"),
        liveChange : function(oEvent) {
            var _oTextArea = this.$().find("textarea");
            var oTextAreaDomRef = _oTextArea.get(0); // this.getDomRef();

            if (!jQuery.device.is.phone) {
                if (!textAreaDefaultHeight) {
                    textAreaDefaultHeight = oTextAreaDomRef.scrollHeight;
                }

                if (textAreaDefaultHeight < oTextAreaDomRef.scrollHeight) {
                    oTextAreaDomRef.style.overflow = "hidden";
                    _oTextArea.height(oTextAreaDomRef.scrollHeight);
                }

            } // end of not a phone
            else {
                if (!textAreaDefaultHeight) {
                    textAreaDefaultHeight = oTextAreaDomRef.scrollHeight;
                }

                if (textAreaDefaultHeight == oTextAreaDomRef.scrollHeight) {
                    _oTextArea.height(oTextAreaDomRef.scrollHeight);
                    oTextAreaDomRef.style.overflow = "hidden";
                }

                if (textAreaDefaultHeight < oTextAreaDomRef.scrollHeight
                        && !sThreeRowHeight) {
                    iRowCount = iRowCount + 1;
                    sThreeRowHeight = oTextAreaDomRef.scrollHeight;
                    _oTextArea.height(oTextAreaDomRef.scrollHeight);
                    oTextAreaDomRef.style.overflow = "hidden";

                }
                if (sThreeRowHeight < oTextAreaDomRef.scrollHeight
                        && !sFourRowHeight && sThreeRowHeight) {
                    iRowCount = iRowCount + 1;
                    sFourRowHeight = oTextAreaDomRef.scrollHeight;
                    _oTextArea.height(oTextAreaDomRef.scrollHeight);
                    oTextAreaDomRef.style.overflow = "hidden";
                }

                if (sFourRowHeight < oTextAreaDomRef.scrollHeight
                        && sFourRowHeight && sThreeRowHeight) {
                    iRowCount = iRowCount + 1;
                    _oTextArea.height(sFourRowHeight);
                    oTextAreaDomRef.style.overflow = "auto";
                }

            } // end of is phone
        } // liveChange
    });

    this._oTextArea.setParent(this);
    this._oTextArea.attachLiveChange(this.liveChangeMonitor,this);

    // create button
    this._oButton = new sap.m.Button(this.getId()+"-add", {
        //text : sap.ca.ui.utils.resourcebundle.getText("Add"),
        icon: sap.ui.core.IconPool.getIconURI("add"),
        type: sap.m.ButtonType.Emphasized,
        press : jQuery.proxy(function(event) {
            this.fireAddNote({
                value : this._oTextArea.getValue()
            });
            this._oTextArea.setValue('');
            this._oTextArea.setHeight('auto');
        }, this)
    });
    this._oButton.setParent(this);
};

sap.ca.ui.Notes.prototype.liveChangeMonitor = function(oEvent) 
{
	if (oEvent.mParameters.newValue.length === this._maxLength)
	{
		var messageText = sap.ca.ui.utils.resourcebundle.getText("TextOverlimit", [this._maxLength]);

		sap.m.MessageToast.show(messageText);
	}
};

sap.ca.ui.Notes.prototype.exit = function() {
    if (sap.m.List.prototype.exit) {
        sap.m.List.prototype.exit.apply(this);
    }

    this._oTextArea.destroy();
    this._oButton.destroy();
};

sap.ca.ui.Notes.prototype.setTextMaxLength = function(iTextMaxLength) {
    if (iTextMaxLength > 1000) 
    {
        console.error("Notes maximum length set to "+iTextMaxLength+", which is greater than the maximum length allowed. TextMaxLength will be reset to 1000 characters");
        iTextMaxLength = 1000;
    }

    this._maxLength = iTextMaxLength;

    this._oTextArea.setProperty("maxLength", iTextMaxLength, true);
    this.setProperty("textMaxLength", iTextMaxLength);
};


/**
 *  Clear the textarea content
 */
sap.ca.ui.Notes.prototype.clear = function() {
    this._oTextArea.setValue("");
};

/**
 *  Reset
 */
sap.ca.ui.Notes.prototype.reset = function() {
    this.clear();

    // reset growing metadata
    this._oGrowingDelegate && this._oGrowingDelegate.reset();
};