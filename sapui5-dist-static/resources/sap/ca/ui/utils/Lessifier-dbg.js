jQuery.sap.declare("sap.ca.ui.utils.Lessifier");

sap.ca.ui.utils.Lessifier = {};
/**
 * Load a CSS File containing colors that have been coded with less variable and replace them dynamically
 * This is an experimental solution; a hack if you will that will be replaced by something much nicer in wave 3.
 *
 * @experimental
 * @param sModuleName {string} the module in which to load this file
 * @param sCssPath {string} the path to the CSS file
 */
sap.ca.ui.utils.Lessifier.lessifyCSS = function(sModuleName, sCssPath) {
    // Incorrect number of parameters...
    if(sModuleName == null || sModuleName.length == 0 || sCssPath == null || sCssPath.length == 0) {
        jQuery.sap.log.error("When trying to lessify a css make sure both the module name and the css file path are specified.");
        return;
    }
    // Unknown module, which means something is wrong
    var sModulePath = jQuery.sap.getModulePath(sModuleName);
    if(sModulePath == null) {
        jQuery.sap.log.error("The module "+sModuleName+" has never been registered for a specific path.");
        return;
    }
    // CSS already in DOM no need for duplicate effort
    if(jQuery("#"+sModuleName+"-less-css").length != 0) {
        jQuery.sap.log.warning("The css for module "+sModuleName+" has already been processed.");
        return;
    }
    var sCssUrl = sModulePath + sCssPath;
    if(!jQuery.sap.startsWith(sCssPath, "/") && !jQuery.sap.endsWith(sModulePath, "/")) {
        sCssUrl = sModulePath + "/" + sCssPath;
    }
    var stylesheetText = jQuery.ajax({
            url:  sCssUrl,
            async: false}
    ).responseText;

    if(stylesheetText != null && stylesheetText.length != 0) {
        var lessStylesheet = stylesheetText.replace(/@([\w]+)/g, function (match, compare) {
            return sap.ui.core.theming.Parameters.get(compare);
        });
        jQuery("head").append("<style id='"+sModuleName+"-less-css'>" + lessStylesheet + "</style>");
        jQuery.sap.log.info("The css for module "+sModuleName+" has been processed correctly.");
    }
};
