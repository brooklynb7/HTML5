/*!
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides class sap.ca.ui.model.format.FormattingLibrary
jQuery.sap.declare("sap.ca.ui.model.format.FormattingLibrary");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");

sap.ca.ui.model.format.FormattingLibrary = {};


/**
 * Returns the icon name based on the given mime type
 *
 * @param sMimeType the mime type of the file attachment
 * @return {string} the icon string as "sap-icon://icon-name"
 */
sap.ca.ui.model.format.FormattingLibrary.formatAttachmentIcon = function (sMimeType) {

    var myMap = {}; // Create empty map
    myMap["application/msword"] = "sap-icon://doc-attachment";
    myMap["application/vnd.openxmlformats-officedocument.wordprocessingml.document"] = "sap-icon://doc-attachment";
    myMap["application/rtf"] = "sap-icon://doc-attachment";
    myMap["application/pdf"] = "sap-icon://pdf-attachment";
    myMap["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"] = "sap-icon://excel-attachment";
    myMap["application/msexcel"] = "sap-icon://excel-attachment";
    myMap["application/vnd.ms-powerpoint"] = "sap-icon://ppt-attachment";
    myMap["application/vnd.openxmlformats-officedocument.presentationml.presentation"] = "sap-icon://ppt-attachment";
    myMap["application/vnd.openxmlformats-officedocument.presentationml.slideshow"] = "sap-icon://ppt-attachment";
    myMap["application/mspowerpoint"] = "sap-icon://ppt-attachment";
    myMap["application/xml"] = "sap-icon://attachment-html";
    myMap["application/xhtml+xml"] = "sap-icon://attachment-html";
    myMap["application/x-httpd-php"] = "sap-icon://attachment-html";
    myMap["application/x-javascript"] = "sap-icon://attachment-html";
    myMap["application/gzip"] = "sap-icon://attachment-zip-file";
    myMap["application/x-rar-compressed"] = "sap-icon://attachment-zip-file";
    myMap["application/x-tar"] = "sap-icon://attachment-zip-file";
    myMap["application/zip"] = "sap-icon://attachment-zip-file";
    myMap["audio/voxware"] = "sap-icon://attachment-audio";
    myMap["audio/x-aiff"] = "sap-icon://attachment-audio";
    myMap["audio/x-midi"] = "sap-icon://attachment-audio";
    myMap["audio/x-mpeg"] = "sap-icon://attachment-audio";
    myMap["audio/x-pn-realaudio"] = "sap-icon://attachment-audio";
    myMap["audio/x-pn-realaudio-plugin"] = "sap-icon://attachment-audio";
    myMap["audio/x-qt-stream"] = "sap-icon://attachment-audio";
    myMap["audio/x-wav"] = "sap-icon://attachment-audio";
    myMap["image/png"] = "sap-icon://attachment-photo";
    myMap["image/tiff"] = "sap-icon://attachment-photo";
    myMap["image/bmp"] = "sap-icon://attachment-photo";
    myMap["image/jpeg"] = "sap-icon://attachment-photo";
    myMap["image/gif"] = "sap-icon://attachment-photo";
    myMap["text/plain"] = "sap-icon://attachment-text-file";
    myMap["text/comma-separated-values"] = "sap-icon://attachment-text-file";
    myMap["text/css"] = "sap-icon://attachment-text-file";
    myMap["text/html"] = "sap-icon://attachment-text-file";
    myMap["text/javascript"] = "sap-icon://attachment-text-file";
    myMap["text/plain"] = "sap-icon://attachment-text-file";
    myMap["text/richtext"] = "sap-icon://attachment-text-file";
    myMap["text/rtf"] = "sap-icon://attachment-text-file";
    myMap["text/tab-separated-values"] = "sap-icon://attachment-text-file";
    myMap["text/xml"] = "sap-icon://attachment-text-file";
    myMap["video/mpeg"] = "sap-icon://attachment-video";
    myMap["video/quicktime"] = "sap-icon://attachment-video";
    myMap["video/x-msvideo"] = "sap-icon://attachment-video";
    myMap["application/x-shockwave-flash"] = "sap-icon://attachment-video";


    var iconName = myMap[sMimeType];
    if (iconName) {
        return iconName;
    }
    return "sap-icon://document";
};


/**
 * Returns the best option for the attachment title
 *
 * @param sDescription {string} The description of the attachment
 * @param sFileType {string} The file type of the attachment
 * @return {string} Returns the description if valid, otherwise returns filetype
 */
sap.ca.ui.model.format.FormattingLibrary.formatAttachmentTitle = function(sDescription, sFileType) {
    if (sDescription) {
        return sDescription;
    }
    return sFileType;
};


/**
 * Returns a ValueState object based on the given integer value
 *  1 : ValueState.Warning
 *  2 : ValueState.Success
 *  3 : ValueState.Error
 *
 * @param iStatusValue {int} The status as an integer
 * @return {sap.ui.core.ValueState} Returns the ValueStatus object or ValueState.None
 */
sap.ca.ui.model.format.FormattingLibrary.formatStatus = function (iStatusValue) {

    var oStatus = sap.ui.core.ValueState.None;

    if (iStatusValue !== null) {
        var oEquivalent = {
            1 : "Warning",
            2 : "Success",
            3 : "Error"
        };

        if (oEquivalent[iStatusValue])
            oStatus = sap.ui.core.ValueState[oEquivalent[iStatusValue]];
    }

    return oStatus;
};


/**
 * ID and Description Formatting
 *
 * @param sDescription {string} The description
 * @param sID {string} The Id
 * @return {string} Returns either the ID, Description or ID + Description depending on the validity of the inputs
 */
sap.ca.ui.model.format.FormattingLibrary.commonIDFormatter = function(sDescription, sID) {
    if (sID){
        if (sDescription){
            return sap.ca.ui.utils.resourcebundle.getText("FormattingLibrary.DescriptionAndId", [sDescription, sID]);
        }
        return sID;
    }
    if (sDescription){
        return sDescription;
    }
    return "";

};



