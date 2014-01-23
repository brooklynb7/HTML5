$(function () {

	jQuery.getJSON('data.json', function(data) {
		window.site1 = (new sap.portal.ui5.core.Component()).setProperties(data);
	});

});
