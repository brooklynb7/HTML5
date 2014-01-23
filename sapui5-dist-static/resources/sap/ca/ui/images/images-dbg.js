jQuery.sap.declare("sap.ca.ui.images.images");

sap.ca.ui.images.images = (function(){
		
	var sPrefix = jQuery.sap.getModulePath("sap.ca.ui")+ "/images/";
	
	return {
		Flower : sPrefix + "Flower.png",
		placeholder : sPrefix + "placeholder.png",
		person_placeholder : sPrefix + "person_placeholder.png"
	};	
}());