/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ca.ui.FileUpload.
jQuery.sap.declare("sap.ca.ui.FileUpload");
jQuery.sap.require("sap.ca.ui.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new FileUpload.
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
 * <li>{@link #getUploadUrl uploadUrl} : string</li>
 * <li>{@link #getFileName fileName} : string</li>
 * <li>{@link #getSize size} : string</li>
 * <li>{@link #getUrl url} : string</li>
 * <li>{@link #getUploadedDate uploadedDate} : string</li>
 * <li>{@link #getContributor contributor} : string</li>
 * <li>{@link #getFileExtension fileExtension} : string</li>
 * <li>{@link #getMimeType mimeType} : string</li>
 * <li>{@link #getItems items} : string</li>
 * <li>{@link #getUploadEnabled uploadEnabled} : boolean</li>
 * <li>{@link #getEditMode editMode} : boolean (default: false)</li>
 * <li>{@link #getFileId fileId} : string</li>
 * <li>{@link #getXsrfToken xsrfToken} : string</li>
 * <li>{@link #getUseMultipart useMultipart} : boolean (default: false)</li>
 * <li>{@link #getAcceptRequestHeader acceptRequestHeader} : string (default: 'application/json')</li>
 * <li>{@link #getEncodeUrl encodeUrl} : string</li>
 * <li>{@link #getRenameEnabled renameEnabled} : boolean</li>
 * <li>{@link #getShowNoData showNoData} : boolean (default: false)</li>
 * <li>{@link #getShowAttachmentsLabelInEditMode showAttachmentsLabelInEditMode} : boolean (default: true)</li>
 * <li>{@link #getUseEditControls useEditControls} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getUploadProgressLabel uploadProgressLabel} : sap.m.Label</li>
 * <li>{@link #getAttachmentNumberLabel attachmentNumberLabel} : sap.m.Label</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.FileUpload#event:deleteFile deleteFile} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.FileUpload#event:renameFile renameFile} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.FileUpload#event:uploadFile uploadFile} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.FileUpload#event:fileUploadFailed fileUploadFailed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.FileUpload#event:beforeUploadFile beforeUploadFile} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.FileUpload#event:saveClicked saveClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.FileUpload#event:cancelClicked cancelClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Allows you to display a list of uploaded files. You can also upload a new one, edit or delete them
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @name sap.ca.ui.FileUpload
 */
sap.ui.core.Control.extend("sap.ca.ui.FileUpload", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"removeFile", "abandonPendingRenames", "commitPendingRenames", "commitFileUpload", "setCustomHeader", "removeCustomHeader", "preventEdits"
	],

	// ---- control specific ----
	library : "sap.ca.ui",
	properties : {
		"uploadUrl" : {type : "string", group : "Misc", defaultValue : null},
		"fileName" : {type : "string", group : "Misc", defaultValue : null},
		"size" : {type : "string", group : "Misc", defaultValue : null},
		"url" : {type : "string", group : "Misc", defaultValue : null},
		"uploadedDate" : {type : "string", group : "Misc", defaultValue : null},
		"contributor" : {type : "string", group : "Misc", defaultValue : null},
		"fileExtension" : {type : "string", group : "Misc", defaultValue : null},
		"mimeType" : {type : "string", group : "Misc", defaultValue : null},
		"items" : {type : "string", group : "Misc", defaultValue : null},
		"uploadEnabled" : {type : "boolean", group : "Misc", defaultValue : null},
		"editMode" : {type : "boolean", group : "Misc", defaultValue : false},
		"fileId" : {type : "string", group : "Misc", defaultValue : null},
		"xsrfToken" : {type : "string", group : "Misc", defaultValue : null},
		"useMultipart" : {type : "boolean", group : "Misc", defaultValue : false},
		"acceptRequestHeader" : {type : "string", group : "Misc", defaultValue : 'application/json'},
		"encodeUrl" : {type : "string", group : "Misc", defaultValue : null},
		"renameEnabled" : {type : "boolean", group : "Misc", defaultValue : null},
		"showNoData" : {type : "boolean", group : "Misc", defaultValue : false},
		"showAttachmentsLabelInEditMode" : {type : "boolean", group : "Misc", defaultValue : true},
		"useEditControls" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	aggregations : {
    	"fileList" : {type : "sap.m.List", multiple : false, visibility : "hidden"}, 
    	"oProgressText" : {type : "sap.m.Text", multiple : false, visibility : "hidden"}, 
    	"uploadProgressLabel" : {type : "sap.m.Label", multiple : false}, 
    	"attachmentNumberLabel" : {type : "sap.m.Label", multiple : false}, 
    	"toolBar" : {type : "sap.m.Toolbar", multiple : false, visibility : "hidden"}
	},
	events : {
		"deleteFile" : {}, 
		"renameFile" : {}, 
		"uploadFile" : {}, 
		"fileUploadFailed" : {}, 
		"beforeUploadFile" : {}, 
		"saveClicked" : {}, 
		"cancelClicked" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ca.ui.FileUpload with name <code>sClassName</code> 
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
 * @name sap.ca.ui.FileUpload.extend
 * @function
 */

sap.ca.ui.FileUpload.M_EVENTS = {'deleteFile':'deleteFile','renameFile':'renameFile','uploadFile':'uploadFile','fileUploadFailed':'fileUploadFailed','beforeUploadFile':'beforeUploadFile','saveClicked':'saveClicked','cancelClicked':'cancelClicked'};


/**
 * Getter for property <code>uploadUrl</code>.
 * Url of server we wish to upload to
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>uploadUrl</code>
 * @public
 * @name sap.ca.ui.FileUpload#getUploadUrl
 * @function
 */

/**
 * Setter for property <code>uploadUrl</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUploadUrl  new value for property <code>uploadUrl</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setUploadUrl
 * @function
 */


/**
 * Getter for property <code>fileName</code>.
 * Relative path in model, pointing to property that stores the name of a file.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>fileName</code>
 * @public
 * @name sap.ca.ui.FileUpload#getFileName
 * @function
 */

/**
 * Setter for property <code>fileName</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFileName  new value for property <code>fileName</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setFileName
 * @function
 */


/**
 * Getter for property <code>size</code>.
 * Relative path in model, pointing to property that stores the size of a file.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>size</code>
 * @public
 * @name sap.ca.ui.FileUpload#getSize
 * @function
 */

/**
 * Setter for property <code>size</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSize  new value for property <code>size</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setSize
 * @function
 */


/**
 * Getter for property <code>url</code>.
 * Relative path in model, pointing to property that stores the url at which the file is stored.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>url</code>
 * @public
 * @name sap.ca.ui.FileUpload#getUrl
 * @function
 */

/**
 * Setter for property <code>url</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUrl  new value for property <code>url</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setUrl
 * @function
 */


/**
 * Getter for property <code>uploadedDate</code>.
 * Relative path in model, pointing to property that stores the date at which a file was uploaded.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>uploadedDate</code>
 * @public
 * @name sap.ca.ui.FileUpload#getUploadedDate
 * @function
 */

/**
 * Setter for property <code>uploadedDate</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUploadedDate  new value for property <code>uploadedDate</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setUploadedDate
 * @function
 */


/**
 * Getter for property <code>contributor</code>.
 * Relative path in model, pointing to property that stores the name of the person who uploaded the file.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>contributor</code>
 * @public
 * @name sap.ca.ui.FileUpload#getContributor
 * @function
 */

/**
 * Setter for property <code>contributor</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sContributor  new value for property <code>contributor</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setContributor
 * @function
 */


/**
 * Getter for property <code>fileExtension</code>.
 * Relative path in model, pointing to property that stores the uploaded files extension. Note: either fileExtension or mimeType may be used, but mimeType is preferable.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>fileExtension</code>
 * @public
 * @name sap.ca.ui.FileUpload#getFileExtension
 * @function
 */

/**
 * Setter for property <code>fileExtension</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFileExtension  new value for property <code>fileExtension</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setFileExtension
 * @function
 */


/**
 * Getter for property <code>mimeType</code>.
 * Relative path in model, pointing to property that stores the file's mimeType. Note: either fileExtension or mimeType may be used, but mimeType is preferable.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>mimeType</code>
 * @public
 * @name sap.ca.ui.FileUpload#getMimeType
 * @function
 */

/**
 * Setter for property <code>mimeType</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sMimeType  new value for property <code>mimeType</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setMimeType
 * @function
 */


/**
 * Getter for property <code>items</code>.
 * The base path in the model for the control. Avoid trailing forward slashes in value, as per default value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>items</code>
 * @public
 * @name sap.ca.ui.FileUpload#getItems
 * @function
 */

/**
 * Setter for property <code>items</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sItems  new value for property <code>items</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setItems
 * @function
 */


/**
 * Getter for property <code>uploadEnabled</code>.
 * This property enables & disables the ability to upload a file
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>uploadEnabled</code>
 * @public
 * @name sap.ca.ui.FileUpload#getUploadEnabled
 * @function
 */

/**
 * Setter for property <code>uploadEnabled</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bUploadEnabled  new value for property <code>uploadEnabled</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setUploadEnabled
 * @function
 */


/**
 * Getter for property <code>editMode</code>.
 * Property to allow toggling between edit and view screens.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>editMode</code>
 * @public
 * @name sap.ca.ui.FileUpload#getEditMode
 * @function
 */

/**
 * Setter for property <code>editMode</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEditMode  new value for property <code>editMode</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setEditMode
 * @function
 */


/**
 * Getter for property <code>fileId</code>.
 * An identifier property name that is used to uniquely reference the file on the server.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>fileId</code>
 * @public
 * @name sap.ca.ui.FileUpload#getFileId
 * @function
 */

/**
 * Setter for property <code>fileId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFileId  new value for property <code>fileId</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setFileId
 * @function
 */


/**
 * Getter for property <code>xsrfToken</code>.
 * The XSRF token the control should use when making the upload request. If it is not set, the control will not use a security token.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>xsrfToken</code>
 * @public
 * @name sap.ca.ui.FileUpload#getXsrfToken
 * @function
 */

/**
 * Setter for property <code>xsrfToken</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sXsrfToken  new value for property <code>xsrfToken</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setXsrfToken
 * @function
 */


/**
 * Getter for property <code>useMultipart</code>.
 * Indicates if the control should send multipart/form data request when uploading
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>useMultipart</code>
 * @public
 * @name sap.ca.ui.FileUpload#getUseMultipart
 * @function
 */

/**
 * Setter for property <code>useMultipart</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bUseMultipart  new value for property <code>useMultipart</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setUseMultipart
 * @function
 */


/**
 * Getter for property <code>acceptRequestHeader</code>.
 * The Accept request header the control should use when sending the upload request
 *
 * Default value is <code>application/json</code>
 *
 * @return {string} the value of property <code>acceptRequestHeader</code>
 * @public
 * @name sap.ca.ui.FileUpload#getAcceptRequestHeader
 * @function
 */

/**
 * Setter for property <code>acceptRequestHeader</code>.
 *
 * Default value is <code>application/json</code> 
 *
 * @param {string} sAcceptRequestHeader  new value for property <code>acceptRequestHeader</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setAcceptRequestHeader
 * @function
 */


/**
 * Getter for property <code>encodeUrl</code>.
 * Url of server that will base64 encode the file
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>encodeUrl</code>
 * @public
 * @name sap.ca.ui.FileUpload#getEncodeUrl
 * @function
 */

/**
 * Setter for property <code>encodeUrl</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sEncodeUrl  new value for property <code>encodeUrl</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setEncodeUrl
 * @function
 */


/**
 * Getter for property <code>renameEnabled</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>renameEnabled</code>
 * @public
 * @name sap.ca.ui.FileUpload#getRenameEnabled
 * @function
 */

/**
 * Setter for property <code>renameEnabled</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bRenameEnabled  new value for property <code>renameEnabled</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setRenameEnabled
 * @function
 */


/**
 * Getter for property <code>showNoData</code>.
 * Show the label "No data" when the control doesn't have files
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showNoData</code>
 * @public
 * @name sap.ca.ui.FileUpload#getShowNoData
 * @function
 */

/**
 * Setter for property <code>showNoData</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowNoData  new value for property <code>showNoData</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setShowNoData
 * @function
 */


/**
 * Getter for property <code>showAttachmentsLabelInEditMode</code>.
 * Show the Attachments label in edit mode
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showAttachmentsLabelInEditMode</code>
 * @public
 * @name sap.ca.ui.FileUpload#getShowAttachmentsLabelInEditMode
 * @function
 */

/**
 * Setter for property <code>showAttachmentsLabelInEditMode</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowAttachmentsLabelInEditMode  new value for property <code>showAttachmentsLabelInEditMode</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setShowAttachmentsLabelInEditMode
 * @function
 */


/**
 * Getter for property <code>useEditControls</code>.
 * Show the edit user controls which include the save, edit and cancel button. Previously, these buttons were controlled by the app but this approach has now been deprecated.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>useEditControls</code>
 * @public
 * @name sap.ca.ui.FileUpload#getUseEditControls
 * @function
 */

/**
 * Setter for property <code>useEditControls</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bUseEditControls  new value for property <code>useEditControls</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setUseEditControls
 * @function
 */


/**
 * Getter for aggregation <code>uploadProgressLabel</code>.<br/>
 * 
 * 
 * @return {sap.m.Label}
 * @public
 * @name sap.ca.ui.FileUpload#getUploadProgressLabel
 * @function
 */


/**
 * Setter for the aggregated <code>uploadProgressLabel</code>.
 * @param oUploadProgressLabel {sap.m.Label}
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setUploadProgressLabel
 * @function
 */
	

/**
 * Destroys the uploadProgressLabel in the aggregation 
 * named <code>uploadProgressLabel</code>.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#destroyUploadProgressLabel
 * @function
 */


/**
 * Getter for aggregation <code>attachmentNumberLabel</code>.<br/>
 * 
 * 
 * @return {sap.m.Label}
 * @public
 * @name sap.ca.ui.FileUpload#getAttachmentNumberLabel
 * @function
 */


/**
 * Setter for the aggregated <code>attachmentNumberLabel</code>.
 * @param oAttachmentNumberLabel {sap.m.Label}
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#setAttachmentNumberLabel
 * @function
 */
	

/**
 * Destroys the attachmentNumberLabel in the aggregation 
 * named <code>attachmentNumberLabel</code>.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#destroyAttachmentNumberLabel
 * @function
 */


/**
 * Fired when a file deletion event occurs typically by clicking a the delete icon. The file descriptor json for the file to be deleted is passed in the event data 
 *
 * @name sap.ca.ui.FileUpload#deleteFile
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'deleteFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired when a file deletion event occurs typically by clicking a the delete icon. The file descriptor json for the file to be deleted is passed in the event data 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 *
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#attachDeleteFile
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'deleteFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#detachDeleteFile
 * @function
 */

/**
 * Fire event deleteFile to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.FileUpload#fireDeleteFile
 * @function
 */


/**
 * Fired when a file is renamed. The file descripter json for the file to be renamed is passed in the event data and also a property, newFilename, that contains the new filename. 
 *
 * @name sap.ca.ui.FileUpload#renameFile
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'renameFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired when a file is renamed. The file descripter json for the file to be renamed is passed in the event data and also a property, newFilename, that contains the new filename. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 *
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#attachRenameFile
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'renameFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#detachRenameFile
 * @function
 */

/**
 * Fire event renameFile to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.FileUpload#fireRenameFile
 * @function
 */


/**
 * Fired when a file is uploaded and the response comes back from service. The service response for the file to be added to the list is passed in the event data and the consumer must format it in the correct json structure and pass it back to the control using commitUploadFile method. 
 *
 * @name sap.ca.ui.FileUpload#uploadFile
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'uploadFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired when a file is uploaded and the response comes back from service. The service response for the file to be added to the list is passed in the event data and the consumer must format it in the correct json structure and pass it back to the control using commitUploadFile method. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 *
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#attachUploadFile
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'uploadFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#detachUploadFile
 * @function
 */

/**
 * Fire event uploadFile to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.FileUpload#fireUploadFile
 * @function
 */


/**
 * Fired when a file fails to upload. The error code and response data is passed in this event. The consumer should handle the error by showing the appropriate message. 
 *
 * @name sap.ca.ui.FileUpload#fileUploadFailed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'fileUploadFailed' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired when a file fails to upload. The error code and response data is passed in this event. The consumer should handle the error by showing the appropriate message. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 *
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#attachFileUploadFailed
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'fileUploadFailed' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#detachFileUploadFailed
 * @function
 */

/**
 * Fire event fileUploadFailed to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.FileUpload#fireFileUploadFailed
 * @function
 */


/**
 * Fired just before the control is about to make a file upload request. The data passed is the file object selected by the user. You may handle this event to attach custom headers for example if your service implementation requires it. 
 *
 * @name sap.ca.ui.FileUpload#beforeUploadFile
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeUploadFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired just before the control is about to make a file upload request. The data passed is the file object selected by the user. You may handle this event to attach custom headers for example if your service implementation requires it. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 *
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#attachBeforeUploadFile
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeUploadFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#detachBeforeUploadFile
 * @function
 */

/**
 * Fire event beforeUploadFile to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.FileUpload#fireBeforeUploadFile
 * @function
 */


/**
 * Fired when the save button is clicked. The consumer should handle the event and save all the file renames to backend. 
 *
 * @name sap.ca.ui.FileUpload#saveClicked
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'saveClicked' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired when the save button is clicked. The consumer should handle the event and save all the file renames to backend. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 *
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#attachSaveClicked
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'saveClicked' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#detachSaveClicked
 * @function
 */

/**
 * Fire event saveClicked to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.FileUpload#fireSaveClicked
 * @function
 */


/**
 * Fired when the cancel button is clicked. The consumer may handle the event if required. 
 *
 * @name sap.ca.ui.FileUpload#cancelClicked
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'cancelClicked' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired when the cancel button is clicked. The consumer may handle the event if required. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 *
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#attachCancelClicked
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'cancelClicked' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @name sap.ca.ui.FileUpload#detachCancelClicked
 * @function
 */

/**
 * Fire event cancelClicked to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ca.ui.FileUpload#fireCancelClicked
 * @function
 */


/**
 * Remove the specified file from the control
 *
 * @name sap.ca.ui.FileUpload.prototype.removeFile
 * @function

 * @type void
 * @public
 */


/**
 * Commit any pending renames to update the filenames
 *
 * @name sap.ca.ui.FileUpload.prototype.abandonPendingRenames
 * @function

 * @type void
 * @public
 */


/**
 * Commit the pending renames so the filename is updated in the model
 *
 * @name sap.ca.ui.FileUpload.prototype.commitPendingRenames
 * @function

 * @type void
 * @public
 */


/**
 * Commit the file upload by sending the control the JSON structure of the file descriptor.
 *
 * @name sap.ca.ui.FileUpload.prototype.commitFileUpload
 * @function

 * @type void
 * @public
 */


/**
 * method to set a custom header for a request. Takes the header name and the value as parameters.
 *
 * @name sap.ca.ui.FileUpload.prototype.setCustomHeader
 * @function

 * @type void
 * @public
 */


/**
 * method to remove request headers set. Takes name of header to remove.
 *
 * @name sap.ca.ui.FileUpload.prototype.removeCustomHeader
 * @function

 * @type void
 * @public
 */


/**
 * Enable/Disable editing while in edit mode, typically to be used during saves or deletes and other server updates
 *
 * @name sap.ca.ui.FileUpload.prototype.preventEdits
 * @function

 * @type void
 * @public
 */


// Start of sap\ca\ui\FileUpload.js
/**
 * This file defines behavior for the control,
 */
jQuery.sap.declare("sap.ca.ui.FileUpload");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
jQuery.sap.require("sap.ca.ui.dialog.factory");
jQuery.sap.require("sap.ca.ui.model.format.FileSizeFormat");
jQuery.sap.require("sap.ca.ui.model.type.Date");

var Formatter = sap.ca.ui.model.format.FileSizeFormat.getInstance();

//************** Control events handlers *********************

sap.ca.ui.FileUpload.prototype.init = function() {

    this._oCustomHeaderArray = [];
    this._oBundle = sap.ca.ui.utils.resourcebundle;

    // initialise the localisation texts as private properties
    this._sUploadText = this._oBundle.getText("FileUploader.upload");
    this._sOverallUploadingText = this._oBundle.getText("FileUploader.uploadingOutOf", ["{filesUploaded} "," {filesToUpload}"]);
    this._sOutOf = this._oBundle.getText("FileUploader.outOf");
    this._sDeleteFile = this._oBundle.getText("FileUploader.deleteFile");
    this._sContinue = this._oBundle.getText("FileUploader.continue");
    this._sDeleteQuestion = this._oBundle.getText("FileUploader.deleteQuestion");

    var oControl = this;

    this._oAddButton = new sap.m.Button({
        icon: "sap-icon://add",
        type: sap.m.ButtonType.Transparent,
        press :  jQuery.proxy(function() {
            jQuery.sap.domById(this.getId()+ '-upload').click();
        }, this)
    });

    this._oEditButton = new sap.m.Button({
        icon: "sap-icon://edit",
        type: sap.m.ButtonType.Transparent,
        press : jQuery.proxy( this._editButtonClicked, this)
    });

    this._oSaveButton = new sap.m.Button({
        type: sap.m.ButtonType.Transparent,
        text : sap.ca.ui.utils.resourcebundle.getText("FileUploader.save"),
        press : jQuery.proxy( this._saveButtonClicked, this)
    });


    this._oCancelButton = new sap.m.Button({
        type: sap.m.ButtonType.Transparent,
        text : sap.ca.ui.utils.resourcebundle.getText("FileUploader.cancel"),
        press : jQuery.proxy(this._cancelButtonClicked, this)
    });

    this._oToolBar = new sap.m.Toolbar({
        width : '55%',
        content : [
            this._oAddButton
            , this._oEditButton
            , this._oSaveButton
            , this._oCancelButton
        ]
    }).addStyleClass('sapCaUiFUToolbar');

    this._oProgressLabel = new sap.m.Label(this.getId() + "-progress", {
        text : {
            path : "uploadPercent",
            formatter : function(value) {
                var sBindingContext = this.getBindingContext().getPath();
                var path = sBindingContext + "/uploadPercent";
                var percent = this.getModel().getProperty(path);
                var sValue =  oControl._oBundle.getText("FileUploader.uploading", [percent]);
                return sValue;
            }
        },
        visible : {path: "isUploading",
            formatter: function(oValue){
                if(oControl._isIE9OrBelow()){
                    return false;
                }
                return oValue;
            }
        }
    });

    this._oNumberOfAttachmentsLabel = new sap.m.Label(this.getId() + "-attachmentLabel", {design: sap.m.LabelDesign.Standard}).addStyleClass("sapCaUiFileUploadAttachmentLabel");
    this._oFileSizeLabel = new sap.m.Label(this.getId() + "-fileSizeLabel").addStyleClass("sapCaUiFileUploadFileSizeText");
    this._oUploadedDateLabel = new sap.m.Label(this.getId() + "-uploadedDate",	{visible : "{isUploaded}"});
    this._oUploadingProgressLabel = new sap.m.Label(this.getId() + "-uploadProgressLabel",{
        design: sap.m.LabelDesign.Bold,
        text: oControl._sOverallUploadingText
    }).addStyleClass("sapCaUiFileUploadProgressLabel");
    this._oFileExtensionLabel = new sap.m.Label(this.getId() + "-extension", {text :"{parsedFileExtension}"}).addStyleClass('sapCaUiFUExtension');
    this._oFileNameLabel = new sap.m.Link(this.getId() + "-filename", { target : "_blank" }).addStyleClass('sapCaUiFileUploadFileLoadedText');
    this._oFileNameEditBox =  new sap.m.Input(this.getId() + "-editFileName", {type: sap.m.Input.Text}).addStyleClass('sapCaUiFileUploadEditBox');
    this._oFileNameEditBox.attachChange(this, this._nameChanged);

    this._oDateSizeHL = new sap.ui.layout.HorizontalLayout(this.getId() + "-ba-datesizelayout", {
        content : [ this._oUploadedDateLabel,
            this._oFileSizeLabel,
            this._oProgressLabel ],
        allowWrapping: true
    }).addStyleClass('sapCaUiFUInnerHL');

    this._oInputExtensionHL = new sap.ui.layout.HorizontalLayout({
        content:[
            this._oFileNameEditBox,
            this._oFileExtensionLabel
        ],
        allowWrapping: true}).addStyleClass("sapCaUiInnerEditHL");

    var oInnerLayout = new sap.ui.layout.VerticalLayout(this.getId() + "-ba-inner", {
        content : [ this._oFileNameLabel,
            this._oInputExtensionHL,
            this._oDateSizeHL ]
    }).addStyleClass('sapCaUiFUInner');

    this._oItemIcon = new sap.ui.core.Icon(this.getId() + "-icon", {visible: "{isUploaded}"	}).setWidth('2.5rem').setHeight('2.5rem').addStyleClass("sapCaUiFileUploadItemIcon");

    var _oDeleteIcon = sap.ui.core.IconPool.createControlByURI({
        id : this.getId() + "-deleteIcon",
        src : sap.ui.core.IconPool.getIconURI("sys-cancel"),
        press : jQuery.proxy(this._handleDelete, this),
        visible : "{isDeleteVisible}",
        enabled : "{isEditEnabled}"
    }).addStyleClass("sapCaUiFileUploadDeleteIcon");
    var _oCancelIcon = sap.ui.core.IconPool.createControlByURI({
        id : this.getId() + "-cancelIcon",
        src : sap.ui.core.IconPool.getIconURI("sys-cancel-2"),
        visible : "{isUploading}",
        press: jQuery.proxy(function(oEv) {
            // remove the current item and stop uploading
            var oControl = oEv.getSource();
            var sPath = oControl.getBindingContext().getPath();
            var fnAbort = oControl.getModel().getProperty(sPath + "/abortUpl");
            fnAbort();
            var aTokens = sPath.split('/');
            var nInd = aTokens[aTokens.length-1];
            var oItems = oControl.getModel().getProperty(this.getItems());
            oItems.splice(nInd,1);
            oControl.getModel().setProperty(this.getItems(), oItems);
            oControl.getModel().setProperty(this.getItems()+"/filesToUpload", oControl.getModel().getProperty(this.getItems()+"/filesToUpload")-1);
            this._maintainUploadingProgress();
        }, this)
    }).addStyleClass("sapCaUiFileUploadCancelIcon");

    var oHL = new sap.ui.layout.HorizontalLayout(this.getId() + "-ba-hl", {
        content : [
            new sap.m.BusyIndicator({
                id : this.getId() + "-indicator",
                visible : "{isUploading}"
            }).setSize('2.5rem').addStyleClass('sapCaUiFileUploadloadingIcon'),
            this._oItemIcon,
            oInnerLayout,
            _oDeleteIcon,
            _oCancelIcon],
        allowWrapping: true
    }).addStyleClass("sapCaUiFUItemHL");

    this._oViewPageList = new sap.m.List();
    this._oViewPageList.addStyleClass("sapCaFileUploadListBorder");

    this._oTemplate = new sap.m.CustomListItem({content : [ oHL ]});

    this.setAggregation("attachmentNumberLabel", this._oNumberOfAttachmentsLabel);
    this.setAggregation("fileList", this._oViewPageList);
    this.setAggregation("uploadProgressLabel", this._oUploadingProgressLabel);
    this.setAggregation("toolBar", this._oToolBar);
};


sap.ca.ui.FileUpload.prototype.onAfterRendering = function() {
    var sUploadUrl = this.getUploadUrl();
    //Set if the "No data" label have to be displayed.
    this._oViewPageList.setShowNoData(this.getShowNoData());

    var sId = this.getId();
    // escape the jQuery selector for initialisation of the file uploader
    sId = sId.replace(/[#;&,.+*~':"!^$[\]()=>|\/]/g, "\\$&");
    sId = '#' + sId + '-upload';

    // for IE9 or below, we need to first send the multipart/form request to the base64
    // encoder service
    if (this._isIE9OrBelow() && !this.getUseMultipart()) {
        if (this.getEncodeUrl() === "") {
            jQuery.sap.log.warning("FileUpload: encodeUrl property is empty (required by IE9 to base64 encode the file before sending it)")
        }

        sUploadUrl = this.getEncodeUrl();
    }

    jQuery(sId).fileupload({
        multipart : this.getUseMultipart(),
        url : sUploadUrl,
        add : jQuery.proxy(function(e, data) {
            this.onAdd(e, data);
        }, this),
        send : jQuery.proxy(function(e, data) {
            this.sending(e, data);
        }, this),
        progress : jQuery.proxy(function(e, data) {
            this.calculateProgress(e, data);
        }, this),
        done : jQuery.proxy(function(e, data) {
            this.uploadDone(e, data);
        }, this),
        fail: jQuery.proxy(function(e, data) {
            this.handleUploadFailure(e,data);
        }, this),
        beforeSend: jQuery.proxy(function(xhr, data) {
            //allow consumer to handle before file upload in case they want to set custom headers based on file info
            this.fireBeforeUploadFile(data.files[0]);
            this._setRequestHeaders(xhr);
        }, this)
    });

    //this fix is required for IE10 xhr2 fileupload with multipart=false support
    //it was taken from this commit in the jQuery FileUpload control
    //https://github.com/blueimp/jQuery-File-Upload/commit/41d50543c6392118323a39320b3cf62594546106
    //TODO: this should be removed once we have approval to update to the latest release of jQuery FileUpload
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
};

sap.ca.ui.FileUpload.prototype.exit = function() {

    this._oViewPageList.destroy();
    this._oViewPageList = null;
    this._oTemplate.destroy();
    this._oTemplate = null;
    this._oFileNameLabel.destroy();
    this._oFileNameLabel = null;
    this._oUploadedDateLabel.destroy();
    this._oUploadedDateLabel = null;
    this._oProgressLabel.destroy();
    this._oProgressLabel = null;
    if (this._oInputExtensionHL){
        this._oInputExtensionHL.destroy();
        this._oInputExtensionHL = null;
    }
    if (this._oDateSizeHL){
        this._oDateSizeHL.destroy();
        this._oDateSizeHL = null;
    }};




//****************** API METHODS *****************************

/**
 * Enable/Disable editing while in edit mode, typically to be used during saves
 * or deletes and other server updates
 */
sap.ca.ui.FileUpload.prototype.preventEdits = function(bLock) {
    var listContext = this.getItems();
    this.getModel().setProperty(listContext + "/isEditEnabled", !bLock);
};

/**
 * removes file from list by id
 * @param fileId
 */
sap.ca.ui.FileUpload.prototype.removeFile = function(fileId) {

    //this is a backwards compatibility fix as previously, passing an array
    //used to work and now it does not (due to strict equal change below)
    if ((fileId instanceof Array) && fileId.length > 0) {
        fileId = fileId[0];
    }

    var oNewItems = [];
    var oItems = this.getModel().getProperty(this.getItems());

    for(var i=0;i<oItems.length;i++){
        if(oItems[i][this.getFileId()] !==  fileId){
            oNewItems.push(oItems[i]);
        }
    }

    // preserve the state for remaining uploads
    oNewItems.isUploading = oItems.isUploading;
    oNewItems.filesToUpload = oItems.filesToUpload;
    oNewItems.filesUploaded = oItems.filesUploaded;
    oNewItems.isEditMode = oItems.isEditMode;

    this.getModel().setProperty(this.getItems(), oNewItems);
    this.commitPendingRenames(true);  //update model with any changes to filenames which have not been handled before delete
};

/**
 * sets the Control's model
 * @param model
 */
sap.ca.ui.FileUpload.prototype.setModel = function(model)
{
    sap.ui.core.Control.prototype.setModel.call(this, model);

    // set the initial states of the existing files
    jQuery.each(this.getModel().getProperty(this.getItems()),
        jQuery.proxy(function(index, value) {
            this.getModel().setProperty(
                this.getItems() + "/" + index + "/isUploaded", true);
            this.getModel().setProperty(
                this.getItems() + "/" + index + "/isUploading", false);
            this.getModel().setProperty(
                this.getItems() + "/" + index + "/isPending", false);
            this.getModel().setProperty(
                this.getItems() + "/" + index + "/isDeleteVisible", false);

            // add states to allow succesful rename of files
            this.getModel().setProperty(
                this.getItems() + "/" + index + "/isPendingFileRename", false);
            this.getModel().setProperty(
                this.getItems() + "/" + index + "/isFileNameSwapped", false);

            this.getModel().setProperty(this.getItems() + "/" + index + "/isHiddenFile", false);

            // we need to parse the file type from the filename.

            // split the filename into an array, the final index contains the file extension
            var sParsedFileExtension = this.getModel().getProperty(this.getItems() +"/" + index + "/" + this.getFileName()).split(".");

            // case to deal with a file that has no extension, return an empty string for the extension
            if( sParsedFileExtension.length === 1){
                sParsedFileExtension =  "";

                // If a[0] == "" and a.length == 2 it's a hidden file with no extension ie. .htaccess
            }else if(sParsedFileExtension[0] === "" && sParsedFileExtension.length === 2){
                this.getModel().setProperty(this.getItems() + "/" + index + "/isHiddenFile", true);
                sParsedFileExtension =  "";

                // otherwise pop off everything at the front of the array, and we know have the file extension
            }else{
                sParsedFileExtension = "." + sParsedFileExtension.pop();
            }

            this.getModel().setProperty(
                this.getItems() + "/" + index + "/parsedFileExtension", sParsedFileExtension);
            var isUploadedBinding = this.getModel().bindProperty(this.getItems() + "/" + index + "/isUploaded");
            isUploadedBinding.attachChange(this.getItems(), this._isUploadedChange);
        }, this)
    );

    // initialise overall state of the control
    this.getModel().setProperty(this.getItems() + "/isUploading", false);
    this.getModel().setProperty(this.getItems() + "/filesToUpload", 0);
    this.getModel().setProperty(this.getItems() + "/filesUploaded", 1);
    this.getModel().setProperty(this.getItems() + "/isEditEnabled", true);
    this.getModel().setProperty(this.getItems() + "/isRenameEnabled", this.getRenameEnabled());

    var isEditBinding = this.getModel().bindProperty(this.getItems() + "/isEditMode");
    isEditBinding.attachChange(this.getItems(), this._isEditChange);
    this.getModel().setProperty(this.getItems() + "/isEditMode", this.getEditMode());

    this._oNumberOfAttachmentsLabel.bindProperty("text", this.getProperty("items") + "/length", function(length){
        var sLabelText = sap.ca.ui.utils.resourcebundle.getText("FileUploader.attachments") + " (" + length + ")";
        return sLabelText;
    });

    this._oFileSizeLabel.bindProperty("visible",{parts: [ {path: this.getItems() + "/isEditMode"}, {path: "isUploaded"}],
        formatter: jQuery.proxy(function(bEditMode, bIsUploaded){
            // if it's IE9 or below hide the upload
            if(this._isIE9OrBelow()){
                return bEditMode && bIsUploaded;
            }
            return bEditMode;
        }, this)
    });

    if (this.getShowAttachmentsLabelInEditMode()) {
        this._oNumberOfAttachmentsLabel.bindProperty("visible", this.getProperty("items") + "/isEditMode");
    } else {
        this._oNumberOfAttachmentsLabel.setVisible(false);
    }

    this._oUploadingProgressLabel.bindProperty("visible", this.getProperty("items") + '/isUploading');
    this._oUploadingProgressLabel.bindElement(this.getProperty("items"));
    this._oNumberOfAttachmentsLabel.bindElement(this.getProperty("items"));

    this._oViewPageList.bindItems(this.getProperty("items"), this._oTemplate, null, null);
};


/**
 * sets a custom request http header
 * @param sHeader
 * @param sValue
 */
sap.ca.ui.FileUpload.prototype.setCustomHeader = function (sHeader, sValue){
    if(this._oCustomHeaderArray === []){
        this._oCusomHeaderArray.push({
            key: sHeader,
            value: sValue
        });
    }else{
        var nLength = this._oCustomHeaderArray.length;
        for(var i = 0; i< nLength; i++){
            if(this._oCustomHeaderArray[i].key === sHeader){
                this._oCustomHeaderArray[i].value = sValue;
                return;
            }
        }

        this._oCustomHeaderArray.push({
            key: sHeader,
            value: sValue
        });
    }
};

/**
 * removes a custom http request header
 * @param sHeader
 */
sap.ca.ui.FileUpload.prototype.removeCustomHeader = function(sHeader){
    var nIndex = -1;
    for(var i = 0; i < this._oCustomHeaderArray.length; i++){
        if(this._oCustomHeaderArray[i].key === sHeader){
            nIndex = i;
        }
    }
    if(nIndex !== -1){
        this._oCustomHeaderArray.splice(nIndex, 1);
    }
};

/**
 * commits file upload for the provided file descriptor
 * @param data
 */
sap.ca.ui.FileUpload.prototype.commitFileUpload = function(data) {
    // Remove encodings of the format file%name - to file name
    var uploadedFileName = decodeURI(data[this.getFileName()]);
    //  format the size
    data.size = Formatter.format(data.size);
    var dataLength = this.getModel().getProperty(this.getItems() + "/").length;

    for ( var i = 0; i < dataLength; i++) {

        // if the uploaded filename matches one in the local model, update the status
        // even if there are multiple files uploaded with the same name we can tolerate this
        // since we update all properties
        var path = this.getItems() + "/" + i;
        if (this.getModel().getProperty(path + "/" + this.getFileName()) === uploadedFileName &&
            this.getModel().getProperty(path + "/isUploading")) {

            this.getModel().setProperty(path + "/" + this.getFileId(),
                data[this.getFileId()]);
            this.getModel().setProperty(path + "/" + this.getFileExtension(),
                data[this.getFileExtension()]);
            this.getModel().setProperty(path + "/" + this.getMimeType(),
                data[this.getMimeType()]);
            this.getModel().setProperty(path + "/" + this.getContributor(),
                data[this.getContributor()]);
            this.getModel().setProperty(path + "/" + this.getUploadedDate(),
                data[this.getUploadedDate()]);
            this.getModel().setProperty(path + "/" + this.getFileName(),
                data[this.getFileName()]);
            this.getModel().setProperty(path + "/" + this.getUrl(),
                data[this.getUrl()]);
            this.getModel().setProperty(path + "/" + this.getFileId(),
                data[this.getFileId()]);
            this.getModel().setProperty(path + "/" + this.getSize(),
                data[this.getSize()]);


            this.getModel().setProperty(path + "/isHiddenFile", false);

            // we need to parse the file type from the filename.
            // split the filename into an array, the final index contains the file extension
            var sParsedFileExtension = uploadedFileName.split(".");

            // case to deal with a file that has no extension, return an empty string for the extension
            if( sParsedFileExtension.length === 1){
                sParsedFileExtension =  "";

                // If a[0] == "" and a.length == 2 it's a hidden file with no extension ie. .htaccess
            }else if(sParsedFileExtension[0] === "" && sParsedFileExtension.length === 2){
                sParsedFileExtension =  "";
                this.getModel().setProperty(path + "/isHiddenFile", true);

                // otherwise pop off everything at the front of the array, and we know have the file extension
            }else{
                sParsedFileExtension = "." + sParsedFileExtension.pop();
            }
            this.getModel().setProperty(path + "/parsedFileExtension", sParsedFileExtension );

            this.getModel().setProperty(path + "/isPending", false);
            this.getModel().setProperty(path + "/isUploading", false);
            this.getModel().setProperty(path + "/isUploaded", true);
            // no longer need the abort href
            this.getModel().setProperty(path + "/abortUpl", undefined);
            this.getModel().setProperty(this.getItems()+"/filesUploaded", this.getModel().getProperty(this.getItems()+"/filesUploaded")+1);
            this._maintainUploadingProgress();
        }
    }
};

/**
 * Changes to filenames are set into the model as the new filename TODO: This is
 * not sufficent, we would also need to update the URLs for the renamed files
 *
 * @param bDontToggleEdit - indicates the edit mode should not be toggled
 */
sap.ca.ui.FileUpload.prototype.commitPendingRenames = function(bDontToggleEdit) {
    var listContext = this.getItems();
    var oItems = this.getModel().getProperty(listContext);

    for(var i=0;i<oItems.length;i++){
        if(oItems[i].newFilename !== undefined && oItems[i][this.getFileName()] !==  oItems[i].newFilename){
            var bFileHidden = oItems[i]["isHiddenFile"];
            var sNewFileName = "";
            if( oItems[i].isPendingFileRename){
                // append the extension to the new fileName
                if(bFileHidden){
                    sNewFileName = "." + oItems[i].newFilename;
                }else{
                    sNewFileName = oItems[i].newFilename + oItems[i]["parsedFileExtension"];
                }
            }
            else if( oItems[i].isFileNameSwapped){
                if(bFileHidden){
                    sNewFileName = "." + oItems[i][this.getFileName()];
                }else{
                    sNewFileName = oItems[i][this.getFileName()] + oItems[i]["parsedFileExtension"];
                }
            }
            this.getModel().setProperty(listContext + "/" + i + "/" + this.getFileName(), sNewFileName);
            this.getModel().setProperty(listContext + "/" + i + "/newFilename", undefined);
        }

        oItems[i].isPendingFileRename = false;
        oItems[i].isFileNameSwapped = false;
    }

    //toggle edit mode if required and if control is using edit controls
    if (!bDontToggleEdit && this.getUseEditControls()) {
        this.preventEdits(false);
        this._oSaveButton.setEnabled(true);
        this._oCancelButton.setEnabled(true);
        this._toggleEdit();
    }
};

/**
 * Changes to filenames rolled back to the model versions
 */
sap.ca.ui.FileUpload.prototype.abandonPendingRenames = function() {
    var listContext = this.getItems();
    var oItems = this.getModel().getProperty(listContext);

    // refresh no longer enough
    for(var i = 0; i < oItems.length; i++){
        if( oItems[i].isFileNameSwapped){
            // swap back the items so they display correctly
            oItems[i][this.getFileName()] = oItems[i].newFilename;
        }
        // reset everything
        oItems[i].isPendingFileRename = false;
        oItems[i].isFileNameSwapped = false;
    }

    this.getModel().refresh(true);

    if (this.getUseEditControls()) {
        this._toggleEdit();
    }
};

//*******************SETTERS*****************

sap.ca.ui.FileUpload.prototype._setUploadedDateBinding = function(sDatePath, sContributorPath, sSize) {
    var sDate = (sDatePath === null) ? this.getUploadedDate() : sDatePath;
    var sDateFormatted = "{path: '"+sDate+"', type:'sap.ca.ui.model.type.Date', formatOptions : { style:'medium'}}";
    var sContributor = (sContributorPath === null) ? this.getContributor() : sContributorPath;
    sSize = (sSize === null) ? this.getSize() : sSize;

    var sAttachedText;
    if (this._isPhone()){
        sAttachedText = this._oBundle.getText("FileUploader.attached_phone", [sDateFormatted,"{"+sContributor+"}"]);
    }
    else {
        sAttachedText = this._oBundle.getText("FileUploader.attached", [sDateFormatted,"{"+sContributor+"}"]);
    }
    this._oUploadedDateLabel.setText(sAttachedText);
    this._oFileSizeLabel.setText(" ({"+sSize+"})");
};

/**
 * sets the items control property
 * @param oValue
 * @override
 */
sap.ca.ui.FileUpload.prototype.setItems = function(oValue) {

    var oldItems = this.getItems();
    if (oldItems !== oValue) {
        this._oFileNameLabel.bindProperty("visible", {parts: [ {path:oValue + "/isEditMode"}, {path: "isUploading"}], formatter: function(bEdit, bUpl){
            return !bEdit || bUpl;
        }});
        this._oInputExtensionHL.bindProperty("visible", {parts: [{path: oValue + "/isEditMode"}, {path: "isUploading"}], formatter: function (bEdit, bUpl) {
            return bEdit && !bUpl;
        }});
        this._oDateSizeHL.bindProperty("visible", {parts: [{path: oValue + "/isEditMode"}, {path: "isUploading"}], formatter: function (bEdit, bUpl) {
            return !(bEdit && !bUpl);
        }});
        this._oFileNameEditBox.bindProperty("enabled", {parts: [{path: oValue + "/isEditEnabled"}, {path: oValue + "/isRenameEnabled"}], formatter: function(bEdit, bRename){
            return bEdit && bRename;
        }});
        this.setProperty("items", oValue);
    }
};

/**
 * sets the fileName control property
 * @param oValue
 * @override
 */
sap.ca.ui.FileUpload.prototype.setFileName = function(oValue) {
    var oldname = this.getFileName();
    if (oldname !== oValue) {
        this._oFileNameLabel.bindProperty("text", oValue);
        // dont write edits back to model unless saved
        this._oFileNameEditBox.bindValue(oValue,function(sValue){
            var sOutput = sValue.substr(0, sValue.lastIndexOf('.')) || sValue;
            return sOutput;
        }, sap.ui.model.BindingMode.OneWay );
        this.setProperty("fileName", oValue);
    }
};


/**
 *  sets the editMode control property
 * @param oValue
 * @override
 */
sap.ca.ui.FileUpload.prototype.setEditMode = function(oValue) {
    var oldMode = this.getEditMode();

    if(oldMode !== oValue) {
        if(this.getModel()){
            this.getModel().setProperty(this.getItems() + "/isEditMode", oValue);
            this.getModel().refresh(true);
        }

        this.setProperty("editMode", oValue);
    }

    if(this.getModel() && oValue === false){
        // reenable edit
        this.getModel().setProperty(this.getItems() + "/isEditEnabled", true);
    }

    this._setToolBarControls();
};

/**
 * sets the useEditControls control property
 * @param oValue
 * @override
 */
sap.ca.ui.FileUpload.prototype.setUseEditControls = function(oValue) {
    this.setProperty("useEditControls", oValue);
    this._setToolBarControls();
};

/**
 * sets the contributor control property
 * @param oValue
 * @override
 */
sap.ca.ui.FileUpload.prototype.setContributor = function(oValue) {
    var oldContributor = this.getContributor();
    if (oldContributor !== oValue) {

        this._setUploadedDateBinding(null, oValue, null);
        this.setProperty("contributor", oValue);
    }
};

/**
 * sets the uploadedDate control property
 * @param oValue
 * @override
 */
sap.ca.ui.FileUpload.prototype.setUploadedDate = function(oValue) {
    var olddate = this.getUploadedDate();
    if (olddate !== oValue) {
        this._setUploadedDateBinding(oValue, null, null);
        this.setProperty("uploadedDate", oValue);
    }
};

/**
 * sets the size control property
 * @param oValue
 * @override
 */
sap.ca.ui.FileUpload.prototype.setSize = function(oValue) {
    var size = this.getSize();
    if (size !== oValue) {
        this._setUploadedDateBinding(null, null,oValue );
        this.setProperty("size", oValue);
    }
};

/**
 * sets the url control property
 * @param oValue
 * @override
 */
sap.ca.ui.FileUpload.prototype.setUrl = function(oValue) {
    var oldurl = this.getUrl();
    if (oldurl !== oValue) {
        this._oFileNameLabel.bindProperty("href", { path: oValue, formatter : this._removeStartingSlash });
        this.setProperty("url", oValue);
    }
};

/**
 * sets the uploadEnabled control property
 * @param oValue
 * @override
 */
sap.ca.ui.FileUpload.prototype.setUploadEnabled = function(oValue) {
    this._oAddButton.setVisible(oValue);
    this.setProperty("uploadEnabled", oValue);

    this._setToolBarControls();
};

/**
 * sets the mimeType control property
 * @param oValue
 * @override
 */
sap.ca.ui.FileUpload.prototype.setMimeType = function(oValue) {
    var oldmimetype = this.getMimeType();
    if (oldmimetype !== oValue) {
        this._oItemIcon.bindProperty("src", { path: oValue,
            formatter: this._getIconFromMimeType });

        this.setProperty("mimeType", oValue);
    }
};

/**
 * sets the fileExtension control property
 * @param oValue
 * @override
 */
sap.ca.ui.FileUpload.prototype.setFileExtension = function(oValue) {
    var oldextension = this.getFileExtension();
    //only use fileExtension if mimeType hasn't been set as mimeType takes precedence
    if (oldextension !== oValue && !this.getProperty("mimeType")) {
        this._oItemIcon.bindProperty("src", { path: oValue,
            formatter: this._getIconFromExtension });

        this.setProperty("fileExtension", oValue);
    }
};


//****************PRIVATES****************************


/**
 * handle cancel button click
 * @param event
 * @param control
 * @private
 */
sap.ca.ui.FileUpload.prototype._cancelButtonClicked = function() {
    this.fireCancelClicked();

    //required fix for phone/tablet due to timing issue
    if (jQuery.device.is.phone || jQuery.device.is.tablet) {
        this._oSaveButton.setEnabled(false);
        this._oCancelButton.setEnabled(false);
        this.preventEdits(true);

        setTimeout(jQuery.proxy(function(){
            this.preventEdits(false);
            this._oSaveButton.setEnabled(true);
            this._oCancelButton.setEnabled(true);
            this.abandonPendingRenames();
        },this), 500);
    } else {
        this.abandonPendingRenames();
    }
};

/**
 * handle save button click
 * @param event
 * @param control
 * @private
 */
sap.ca.ui.FileUpload.prototype._saveButtonClicked = function() {
    this._oSaveButton.setEnabled(false);
    this._oCancelButton.setEnabled(false);
    this.preventEdits(true);

    this.fireSaveClicked();
};

/**
 * handle edit button click
 * @param event
 * @param control
 * @private
 */
sap.ca.ui.FileUpload.prototype._editButtonClicked = function() {
    this._oSaveButton.setEnabled(true);
    this._oCancelButton.setEnabled(true);
    this._toggleEdit();
};

/**
 * toggle edit mode
 * @param event
 * @param control
 * @private
 */
sap.ca.ui.FileUpload.prototype._toggleEdit = function() {
    var bEdit = this.getEditMode();
    this.setEditMode(!bEdit);
    bEdit = this.getEditMode();
    this._oEditButton.setVisible(!bEdit);
    this._oCancelButton.setVisible(bEdit);
    this._oSaveButton.setVisible(bEdit && this.getRenameEnabled());
};

/**
 * set visibility of edit controls
 * @param event
 * @param control
 * @private
 */
sap.ca.ui.FileUpload.prototype._setToolBarControls = function() {
    var bUseEditControls = this.getUseEditControls();
    var bIsEditMode = this.getEditMode();
    var bIsUploadEnabled = this.getUploadEnabled();

    this._oToolBar.setVisible(bIsUploadEnabled || bUseEditControls);

    this._oEditButton.setVisible(bUseEditControls && !bIsEditMode);
    this._oSaveButton.setVisible(bUseEditControls && bIsEditMode);
    this._oCancelButton.setVisible(bUseEditControls && bIsEditMode);
};

/**
 * handle name change event
 * @param event
 * @param control
 * @private
 */
sap.ca.ui.FileUpload.prototype._nameChanged = function(event, control) {
    var fileToRename = event.getSource().getBindingContext().getProperty();
    fileToRename.newFilename = event.getSource().getValue();
    // save new name in case of rollback
    this.getModel().setProperty(event.getSource().getBindingContext().getPath() + "/newFilename", fileToRename.newFilename);
    // file has been renamed, set the state to pending
    this.getModel().setProperty(event.getSource().getBindingContext().getPath() + "/isPendingFileRename", true);
    control.fireRenameFile(fileToRename);
};

/**
 * determines file the icon from the file extension.
 * @param sVal
 * @return {String}
 * @private
 */
sap.ca.ui.FileUpload.prototype._getIconFromExtension = function(sVal) {

    if(sVal === "pdf") {
        return "sap-icon://pdf-attachment";
    }
    else if(sVal === "jpg" || sVal === "png" || sVal === "bmp") {
        return "sap-icon://attachment-photo";
    }
    else if(sVal === "txt") {
        return "sap-icon://document-text";
    }
    else if(sVal === "doc" || sVal === "docx" || sVal === "odt") {
        return "sap-icon://doc-attachment";
    }
    else if(sVal === "xls" || sVal === "csv") {
        return "sap-icon://excel-attachment";
    }
    else if(sVal === "ppt" || sVal === "pptx" ) {
        return "sap-icon://ppt-attachment";
    }
    else {
        return "sap-icon://document";
    }
};

/**
 * determines the icon from the mime type
 * @param sVal
 * @return {String}
 * @private
 */
sap.ca.ui.FileUpload.prototype._getIconFromMimeType = function(sVal) {

    var sIcon = "";
    if (!sVal) {
        return "sap-icon://document";
    }
    if (sVal.indexOf('image') === 0) {
        sIcon = "sap-icon://attachment-photo";
    } else if (sVal.indexOf('video') === 0) {
        sIcon = "sap-icon://attachment-video";
    } else if (sVal.indexOf('text') === 0) {
        sIcon = "sap-icon://attachment-text-file";
    } else if (sVal.indexOf('audio') === 0) {
        sIcon = "sap-icon://attachment-audio";
    } else if (sVal.indexOf('audio') === 0) {
        sIcon = "sap-icon://attachment-audio";
    } else if (sVal.indexOf('application') === 0) {

        switch (sVal) {
            case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
            case 'application/vnd.ms-powerpoint':
            case 'application/vnd.openxmlformats-officedocument.presentationml.template':
                sIcon =  "sap-icon://ppt-attachment";
                break;
            case 'application/msword':
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.template':
                sIcon =  "sap-icon://doc-attachment";
                break;
            case 'application/vnd.ms-excel':
            case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            case 'application/vnd.openxmlformats-officedocument.spreadsheetml.template':
                sIcon = "sap-icon://excel-attachment";
                break;
            case 'application/pdf':
                sIcon = "sap-icon://pdf-attachment";
                break;
            case 'application/xhtml+xml':
                sIcon = "sap-icon://attachment-html";
                break;
            case 'application/zip':
            case 'application/gzip':
                sIcon = "sap-icon://attachment-zip-file";
                break;
            default:
                sIcon = "sap-icon://document";
        }
    } else {
        sIcon = "sap-icon://document";
    }
    return sIcon;
};


/**
 * gets the Add icon
 * @return {*}
 * @private
 */
sap.ca.ui.FileUpload.prototype._getAddIcon = function() {
    var u = sap.ui.core.IconPool.getIconURI("add");
    this.oAddIcon = sap.ui.core.IconPool.createControlByURI({
        src : u
    });
    this.oAddIcon.addStyleClass("sapCaUiFileUploadGlyphicon");
    this.oAddIcon.addStyleClass("sapCaUiFileUploadGlyphiconPlus");

    return this.oAddIcon;
};

/**
 * remove starting slash
 * @param sVal
 * @return {*}
 * @private
 */
sap.ca.ui.FileUpload.prototype._removeStartingSlash = function(sVal) {
    if(sVal && sVal.charAt(0) === '/') {
        return sVal.substr(1);
    }
    return sVal;
};

/**
 * maintains uploading progress label
 * @private
 */
sap.ca.ui.FileUpload.prototype._maintainUploadingProgress = function() {
    // reinitialise
    if( this.getModel().getProperty(this.getItems()+"/filesUploaded") >  this.getModel().getProperty(this.getItems()+"/filesToUpload")	) {
        this.getModel().setProperty(this.getItems() + "/isUploading", false);
        this.getModel().setProperty(this.getItems() + "/filesToUpload", 0);
        this.getModel().setProperty(this.getItems() + "/filesUploaded", 1);
    }
};
/*
 * Remove the files that are not uploded from the model
 */
sap.ca.ui.FileUpload.prototype._cancelPendingUpload = function() {
    var aItems = this.getModel().getProperty(this.getItems());
    var aItemsUploaded = [];

    //Create array with the file uploaded completely in the server
    jQuery.each(aItems,
        jQuery.proxy(function(index, value) {
            if(value && value.isUploaded) {
                aItemsUploaded.push(value);
            }
        },this)
    );

    this.getModel().setProperty(this.getItems(), aItemsUploaded);
    //Copy old values to the regenerated model
    this.getModel().setProperty(this.getItems()+"/filesToUpload", 0);
    this.getModel().setProperty(this.getItems()+"/filesUploaded", aItems.filesUploaded);
    this.getModel().setProperty(this.getItems()+"/isUploading", false);
    this.getModel().setProperty(this.getItems()+"/isEditEnabled", aItems.isEditEnabled);
    this.getModel().setProperty(this.getItems()+"/isEditMode", aItems.isEditMode);
    this.getModel().setProperty(this.getItems()+"/isUploading", aItems.isRenameEnabled);

    this._maintainUploadingProgress();
};

/**
 * Change handler for isUploaded and isEditMode to derive a calculated property
 * @param e
 */
sap.ca.ui.FileUpload.prototype._isUploadedChange = function(e, itemsPath){

    var isUploaded = e.getSource().getValue();
    var isEdit =  this.getModel().getProperty(itemsPath + "/isEditMode");
    this.getModel().setProperty(e.getSource().getPath().replace("isUploaded","isDeleteVisible"), isUploaded && isEdit);
};

/**
 * handles edit change
 * @param e
 * @param sItemsPath
 * @private
 */
sap.ca.ui.FileUpload.prototype._isEditChange = function(e, sItemsPath){
    var isEdit =  e.getSource().getValue();
    var allFiles = this.getModel().getProperty(sItemsPath + "/");

    for(var i=0;i<allFiles.length;i++){
        var isUploaded = this.getModel().getProperty(sItemsPath + "/" + i + "/isUploaded");
        this.getModel().setProperty(sItemsPath + "/" + i + "/isDeleteVisible", isUploaded && isEdit);
    }
};

/**
 * determines if device is phone
 * @return {*}
 * @private
 */
sap.ca.ui.FileUpload.prototype._isPhone = function() {
    return jQuery.device.is.phone;
};

/**
 * determines if browser is IE9
 * @return {*}
 * @private
 */
sap.ca.ui.FileUpload.prototype._isIE9OrBelow = function() {
    return (sap.ui.Device.browser.name === sap.ui.Device.browser.BROWSER.INTERNET_EXPLORER) && (sap.ui.Device.browser.version < 10);
};

/**
 * set common request headers
 */
sap.ca.ui.FileUpload.prototype._setRequestHeaders = function(xhr) {
    if (this.getAcceptRequestHeader()) {
        xhr.setRequestHeader("Accept", this.getAcceptRequestHeader());
    }
    if (this.getXsrfToken()) {
        xhr.setRequestHeader('x-csrf-token', this.getXsrfToken());
    }
    // set custom headers
    for(var i = 0; i< this._oCustomHeaderArray.length; i++){
        xhr.setRequestHeader(this._oCustomHeaderArray[i].key, this._oCustomHeaderArray[i].value);
    }
};

/**
 * handle delete event
 * @param event
 * @private
 */
sap.ca.ui.FileUpload.prototype._handleDelete = function(event) {
    var fileToDelete = event.oSource.getBindingContext().getProperty();

    sap.ca.ui.dialog.confirmation.open({
        question : this._sDeleteQuestion,
        showNote : false,
        title : this._sDeleteFile,
        confirmButtonLabel : this._sContinue
    }, jQuery.proxy(function(oData) {
        if(oData.isConfirmed) {
            this.fireDeleteFile(fileToDelete);
        }
    }, this));
};



//************jQuery FileUpload event handlers *****************



/**
 * handle jQuery FileUpload sending event
 * @param e
 * @param data
 */
sap.ca.ui.FileUpload.prototype.sending = function(e, data) {
    for(var j = 0; j < data.files.length; j++) {
        var oDataItems = data.files[j];
        var sfileInternalId = oDataItems.internalId;
        // search through the current list of items we have
        var nDataLength = this.getModel().getProperty(this.getItems()).length;
        for ( var i = 0; i < nDataLength; i++) {
            // if the uploaded fileId matches one in the local model, update the status
            var sPath = this.getItems() + "/" + i;

            if (this.getModel().getProperty(sPath)[this.getFileId()] === sfileInternalId &&
                this.getModel().getProperty(sPath).isPending) {
                this.getModel().setProperty(sPath + "/isUploading", true);
                this.getModel().setProperty(sPath + "/isPending", false);
                this.getModel().setProperty(sPath + "/isUploaded", false);
            }
        }
    }
};

/**
 * handle jQuery FileUpload onAdd event
 * @param e
 * @param data
 */
sap.ca.ui.FileUpload.prototype.onAdd = function(e, data) {
    // add the file items into the model on adding
    for(var j = 0; j < data.files.length; j++) {
        var file = data.files[0];
        var internalId = Math.random().toString();
        data.files[0].internalId = internalId;

        var oItems = this.getModel().getProperty(this.getItems());

        var oNewItem = {};
        oNewItem[this.getFileId()] = internalId;
        oNewItem[this.getFileName()] = file.name;
        oNewItem[this.getSize()] = Formatter.format(file.size);
        oNewItem["isPending"] = true;
        oNewItem["isUploading"] = false;
        oNewItem["isUploaded"] = false;
        oNewItem["uploadPercent"] = 0;
        oNewItem["isDeleteVisible"] = false;
        oNewItem["isPendingFileRename"] = false;
        oNewItem["isFileNameSwapped"] = false;

        oItems.unshift(oNewItem);

        this.getModel().setProperty(this.getItems(),oItems);

        var _oCancelUpload = data.submit();

        // store ref to abort
        this.getModel().setProperty(this.getItems() + "/0/abortUpl", _oCancelUpload.abort);
        // add a pending item
        this.getModel().setProperty(this.getItems()+"/filesToUpload", this.getModel().getProperty(this.getItems()+"/filesToUpload")+1);
        this.getModel().setProperty(this.getItems()+"/isUploading", true);
    }

    //has to be a better way than adding and removing bindings like this
    var newSize = this.getModel().getProperty(this.getItems()).length;
    var isUploadedBinding = this.getModel().bindProperty(this.getItems() + "/" + (newSize-1).toString() + "/isUploaded");
    isUploadedBinding.attachChange(this.getItems(), this._isUploadedChange);

    var dataLength = this.getModel().getProperty(this.getItems() + "/").length;

    // when a new file is added we may need to update the models so that renamed files don't change
    for ( var i = 0; i < dataLength; i++) {
        var path = this.getItems() + "/" + i;
        // check if a file has a pending rename, we need to set the filename to be the rename file
        // and the backup file to be the original name...this is to allow a names to appear renamed on a model refresh

        // if files are already swapped don't swap them again
        if (this.getModel().getProperty(path + "/isPendingFileRename")){

            var sTemp = this.getModel().getProperty(path + "/" + this.getFileName());
            var sNewFileName = this.getModel().getProperty(path + "/newFilename");

            // set the filename to the rename
            this.getModel().setProperty(path + "/" + this.getFileName(),
                sNewFileName);
            // set the rename to the old file name
            this.getModel().setProperty(path + "/newFilename",
                sTemp);
            // set state of file to swapped
            this.getModel().setProperty(path + "/isFileNameSwapped", true);
            // if another file is uploaded, don't want to reswap files so set pending to false
            this.getModel().setProperty(path + "/isPendingFileRename", false);
        }
    }
};

/**
 * calculate file upload progress
 * @param e
 * @param data
 */
sap.ca.ui.FileUpload.prototype.calculateProgress = function(e, data) {
    // search through the current list of items we have
    var dataLength = this.getModel().getProperty(this.getItems()).length;
    for ( var i = 0; i < dataLength; i++) {
        // search for the file with the uploading state.
        var progress = parseInt(data.loaded / data.total * 100, 10);
        var path = this.getItems() + "/" + i;
        var property = this.getModel().getProperty(path);

        // always one event per file, no need to iterate over the array
        if (property.isUploading &&
            property[this.getFileId()] === data.files[0].internalId ) {

            this.getModel().setProperty(path + "/uploadPercent", progress);
            this.getModel().setProperty(path + "/isUploaded", false);
        }
    }
};

/*
 * Handles the jQuery FileUpload failures event
 */
sap.ca.ui.FileUpload.prototype.handleUploadFailure = function(oEvt, data) {
    if(data.textStatus !== "abort") {
        this._cancelPendingUpload();
        this.fireFileUploadFailed({
            exception : new Error(this._oBundle.getText("FileUploader.error.connectionLost")),
            response : data
        });
    }
};


/*
 * handle the jQuery FileUpload uploadDone event
 */
sap.ca.ui.FileUpload.prototype.uploadDone = function(e, data) {

    try {
        //for IE9 or below, we need to build a second request and send the base64 encoded string to server
        if (this._isIE9OrBelow()) {
            // the response is inside <html><body><pre> when using the iFrame
            var sEncodedFile;

            // check that we have a result object
            if(this.getUseMultipart()){
                sEncodedFile = $( 'pre', data.result ).text();
                var json = jQuery.parseJSON(sEncodedFile);
                this.fireUploadFile(json);
            }else{
                if (null !== data && null !== data.result) {
                    var sFilename = data.files[0].name;
                    var oSelectedFile = data.files[0];
                    sEncodedFile = $( 'pre', data.result ).text();
                    var oJson;
                    //handle error
                    try { oJson = jQuery.parseJSON(sEncodedFile);
                    } catch (e) {} //not parsable, ignore}

                    if (oJson && oJson.error && oJson.error.code && oJson.error.code === '413'){
                        throw new Error(this._oBundle.getText("FileUploader.error.fileSizeError"));
                    }
                    var sMimeType = sEncodedFile.match(/^data\:(.*);base64,/)[1];
                    sEncodedFile = sEncodedFile.replace(/^data\:(.*);base64,/, '');

                    if (null !== sEncodedFile && "" !== sEncodedFile) {
                        //POST encoded file
                        //create the data object expected by jquery
                        $.ajax({
                            contentType: sMimeType,
                            data: sEncodedFile,
                            type: "POST",
                            url: this.getUploadUrl(),
                            success: jQuery.proxy(function (data, status) {
                                var oData = data.d ? data.d : data;
                                this.fireUploadFile(oData);
                            },this),
                            error: function(XMLHttpRequest, textStatus, errorThrown) {
                                throw new Error(this._oBundle.getText("FileUploader.error.fileUploadFail") + " " + errorThrown);
                            },
                            beforeSend: jQuery.proxy(function(xhr, data) {
                                //allow consumer to handle before file upload in case they want to set custom headers based on file info
                                this.fireBeforeUploadFile(oSelectedFile);
                                this._setRequestHeaders(xhr);
                                xhr.setRequestHeader("Content-Transfer-Encoding", 'Base64');
                                xhr.setRequestHeader("Content-Disposition", 'attachment; filename="' + sFilename + '"');
                            }, this)
                        });
                    }
                    // it could be a HTML page returned (error case) - session timeout, not logged on
                    else if (null !== data.result[0] && null !== data.result[0].title){
                        throw new Error(this._oBundle.getText("FileUploader.error.base64Error")+ ": " + data.result[0].title);
                    }else{
                        throw new Error(this._oBundle.getText("FileUploader.error.base64Error"));
                    }
                }
            }
        }
        else if (data && data.result){
            //fire uploadFile event for consumer to handle
            this.fireUploadFile(data.result);
        }else{
            throw new Error(this._oBundle.getText("FileUploader.error.invalidResponse"));
        }
    }
    catch(err) {
        // provide information on event so that custom error message can be used
        this._cancelPendingUpload();
        this.fireFileUploadFailed({
            exception : err,
            response : data
        });
    }
};


//*************** control native events *******************

/**
 * handle touchstart to give highlight effect for upload button where the <input> overlaps with button
 */
sap.ca.ui.FileUpload.prototype.ontouchstart = function(oEvent) {
    if (jQuery.os.ios && oEvent.target.id === this.getId()+"-upload") {
        this._oAddButton._activeButton();
    }
};

/**
 * handle touchend to give highlight effect for upload button where the <input> overlaps with button
 */
sap.ca.ui.FileUpload.prototype.ontouchend = function(oEvent) {
    if (jQuery.os.ios){
        this._oAddButton._inactiveButton();
    }
};

/**
 * handle touchcancel to give highlight effect for upload button where the <input> overlaps with button
 */
sap.ca.ui.FileUpload.prototype.ontouchcancel = function(oEvent) {
    if (jQuery.os.ios){
        this._oAddButton._inactiveButton();
    }
};

/**
 * Function is called when tap occurs on button.
 *
 * @private
 */
sap.ca.ui.FileUpload.prototype.ontap = function(oEvent) {

    if (jQuery.os.ios && oEvent.target.id === this.getId()+"-upload") {
        this._oAddButton.fireTap();
    }
};
