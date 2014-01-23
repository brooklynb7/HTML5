sap.ui.controller("views.control.objectHeaderTitleSel", {

	_getResponsivePopover: function() {

		var oView = this.getView();
		var oObjectHeader = oView.byId("idObjectHeader");

		if (! this.oResponsivePopover) {
			that = this;
			this.oResponsivePopover = new sap.m.ResponsivePopover({
				placement: sap.m.PlacementType.Bottom,
				title: "Select Product",
				content: [
					new sap.m.List({
						mode: "SingleSelectMaster",
						includeItemInSelection : true,
						select : function (evt) {
							var item = evt.getParameter("listItem");
							oObjectHeader.setTitle(item.getTitle());
							oObjectHeader.setBindingContext(item.getBindingContext());
							that.oResponsivePopover.close();
						},
						items: {
							path: "/ProductCollection",
							template: new sap.m.StandardListItem({
								title: "{Name}"
							})
						}
					})
				]
			});
		}

		return this.oResponsivePopover;

	},

	onInit: function() {
		this.getView().bindElement('/ProductCollection/0');
	},

	handleTitleSelectorPress: function(oEvent) {
		var oResponsivePopover = this._getResponsivePopover();
		oResponsivePopover.openBy(oEvent.getParameter("domRef"));
		oResponsivePopover.setModel(oEvent.getSource().getModel());
	}

});