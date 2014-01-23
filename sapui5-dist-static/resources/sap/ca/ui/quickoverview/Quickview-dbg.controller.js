try
{
	jQuery.sap.require("sap.ushell.services.CrossApplicationNavigation");
}
catch(e)
{
//currently unclear if the "require" - above - is necessary here
//..possibly this is provided by scfld ??	
}

sap.ui
		.controller(
				"sap.ca.ui.quickoverview.Quickview",
				{

					onInit : function() {
						//see API docu for sap.ushell.services.CrossApplicationNavigation
						var fgetService =  sap.ushell && sap.ushell.Container && sap.ushell.Container.getService; 
						if (fgetService) {
							this.oCrossAppNavigator = fgetService && fgetService("CrossApplicationNavigation");
						}
					},

					
					onExtNav : function(oEvt, oData) {
						//callback to the application - application has to set application parameters
						var sCallback = oData.callback; //this.viewConfig.beforeExtNav;
						if ( typeof(sCallback) == "function"){
							var oConfig = sCallback( this.getView() );
							if (oConfig.target.semanticObject && oConfig.target.action)
							 {
								//this.oCrossAppNavigator.toExternal(oConfig); ... not recommended ?
								var href = ( this.oCrossAppNavigator && this.oCrossAppNavigator.hrefForExternal(
										{ target : { semanticObject : oConfig.target.semanticObject,
													 action : oConfig.target.action }, 
													 params : oConfig.params 
										}
										)
										); 
								
								sap.m.URLHelper.redirect(href);

							 }
						}	
					},					
					
					onBeforeRendering : function() {

					},
					
					configureView: function ()	{

						//...for debugging...
						var oAnalyze = {};
						oAnalyze.bHeader = true;
						oAnalyze.bSubview = true;
						
						if (oAnalyze.bHeader)
						 {
							// set predefined ViewAttributes							
							this.configHeader();
						 }
						
						var sSubViewName = this.viewConfig.subViewName;
						var oVBox = this.byId("QVVBox");
						if (sSubViewName && oAnalyze.bSubview) {
							var oAppView = sap.ui.getCore().byId(sSubViewName);
							if (!oAppView) {
								oAppView = new sap.ui.core.mvc.XMLView(
										sSubViewName, {
											viewName : sSubViewName
										});
								oAppView.getController().QuickViewHandler = this.viewConfig.quickOverview;
								oAppView.getController().HostingView = this
										.getView();
							}

							var oModel = this.getView().getModel();

							oVBox.removeAllItems();
							oVBox.addItem(oAppView);

							// on the save side: in case the plugged in view is
							// controlled by a
							// sap.ca.scfld.md.controller.BaseMasterController.extend
							// the model has to be set explicitly!
							oAppView.setModel(oModel);
						} else {
							oVBox.removeAllItems();
						}
						
						var oQvViewSetup = {};
						oQvViewSetup.oQvView = this.getView();
						oQvViewSetup.oSubView = oAppView;						
						return oQvViewSetup; 

					},

					configHeader : function() {
	
						var sImage = this.viewConfig.headerImgURL;
							
						if (!sImage)
							{
							  sImage = "sap-icon://picture"
							}
						
						var oHeaderBox = this.byId("HeaderBox");
						oHeaderBox.destroyItems();
						oHeaderBox.removeAllItems();
						


						//create a new header - remove the old one!
						var oSubTitle = new sap.m.ObjectAttribute({
			            	text : this.viewConfig.headerSubTitle
			            })
						//navigation from subtitle - enable if callback for Parameters is provided
						var sCallbackSubHdr = this.viewConfig.beforeExtNavSubHdr;
						if ( typeof(sCallbackSubHdr) == "function"){
							var oData = {};
							oSubTitle.setActive(true);
							oData.callback = sCallbackSubHdr;
							oSubTitle.attachPress(oData, this.onExtNav, this);
						}
						
						
						var oHead = new sap.m.ObjectHeader( {
							title : this.viewConfig.headerTitle,
							attributes : [ oSubTitle ]
						});
						
						//navigation from header - enable if callback for Parameters is provided
						var sCallback = this.viewConfig.beforeExtNav;
						if ( typeof(sCallback) == "function"){
							var oDataHdr = {};
							oHead.setTitleActive(true);
							oDataHdr.callback = sCallback;							
							oHead.attachTitlePress(oDataHdr, this.onExtNav, this);
						}
						
						//header icon
						if ( !this.viewConfig.headerNoIcon)
							{
								oHead.setIcon(sImage);
								//color of header image:
								oHead.addStyleClass("sapCaUiQuickOverviewHdrImgColor");								
							}

						//add header
						oHeaderBox.addItem(oHead);

					},

				});