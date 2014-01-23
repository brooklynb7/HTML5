sap.ui.controller("views.categories", {

	itemPress : function (evt) {
		var item = evt.getSource();
		sap.ui.getCore().getEventBus().publish("nav", "to", {
			id : util.Id.CONTROLS,
			data : {
				context : item.getBindingContext()
			}
		});
	}
}); 