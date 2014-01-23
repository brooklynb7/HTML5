(function(jQuery){
	
	var NEW_RESSOURCE = "sap.ui.thirdparty.jqueryui.jquery-ui-position";
	var MESSAGE = "The file jquery-ui-position.js has been moved to sap.ui.thirdparty.jqueryui! Please update the dependencies accordingly.";
	
	if(jQuery && jQuery.sap && jQuery.sap.require){
		jQuery.sap.require(NEW_RESSOURCE);
		jQuery.sap.log.warning(MESSAGE);
	}else{
		throw new Error(MESSAGE);
	}

})(window.jQuery);