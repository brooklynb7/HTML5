sap.ui.controller("AppNavSample.MainXML", {
    mViewNamesToViews : {},
    oInnerAppRouter : null,
    oApp : null, // the SplitApp Control instance of this view

    getMyComponent : function() {
        var sComponentId = sap.ui.core.Component.getOwnerIdFor(this.getView());
        var myComponent = sap.ui.component(sComponentId); 
        return myComponent;        
    },

    
    /* *Nav* (7) callback for route changes */
    /**
     * Callback for hash changes, this is registered with the navigation framework
     *
     * our route has one argument, which is passed as the first argument
     *
     *  (for the _home route, sViewName is undefined)
     */
    _handleNavEvent : function(oEvent) {
        var sRouteName = oEvent.getParameter("name");
        jQuery.sap.log.debug("AppNav2: Navigate to route " + sRouteName);
        if (sRouteName == "toaView") {
            var sViewName = oEvent.getParameter("arguments")["viewName"];
            jQuery.sap.log.debug("AppNav2: Navigate to view " + sViewName);
            this.doNavigate("toView", sViewName);
        }
     },


     /**
      * Called when a controller is instantiated and its View controls (if available) are already created.
      * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
      * @memberOf MainXML
      */
	onInit: function() {
	    jQuery.sap.log.info("On Init of Main.XML.controller called : this.getView().getId()" + this.getView().getId() );	    
	    this.mViewNamesToViews = {};
        this.oApp = this.byId("app");
        var sComponentId = sap.ui.core.Component.getOwnerIdFor(this.getView());
        this.oComponent = sap.ui.component(sComponentId); 
        jQuery.sap.log.debug("located Component" + typeof this.oComponent); 
        
	    var vw =  sap.ui.view({ type: sap.ui.core.mvc.ViewType.XML,
            viewName: "AppNavSample.view.List",
            id : this.createId("List")
          });

        vw.getController().oApplication = this;

        this.oApp.addMasterPage(vw);

	    var vw =  sap.ui.view({ type: sap.ui.core.mvc.ViewType.XML,
            viewName: "AppNavSample.view.Detail",
          });
	    this.mViewNamesToViews["Detail"] = vw;
	    vw.getController().oApplication = this;
	    this.oApp.addDetailPage(vw);

	    this.oApp.setInitialDetail(vw); // use the object, not the (generated) id!

		/* obtain the (Controller) Navigator instance */
	    this.oInnerAppRouter = this.getMyComponent().getInnerAppRouter();

	    /* *Nav* (4) register callback handler for routes */
        this.oInnerAppRouter.attachRouteMatched(this._handleNavEvent,this);

        /* *Nav* (5) initialize with the (Split)App
         *
         * Compare MainXML.view.xml
         *   <SplitApp id="app">
         *
         *  */
//        this.oAppNavigator.init(this.byId("app"));

        /* reentrant loading : app triggers navigation on init 
        var that = this; 
        setTimeout(function(){
            that.oCrossAppNavigator.toExternal({ target : { semanticObject : "UI2Fiori2SampleApps", action: "approvepurchaseorders" }}); 
        },200);
        */                            
        /* *Nav* (6) generate links, this may also be done later  */       
       
        // *XNav* (1) obtain cross app navigation interface
        var fgetService =  sap.ushell && sap.ushell.Container && sap.ushell.Container.getService; 
        this.oCrossAppNavigator = fgetService && fgetService("CrossApplicationNavigation");

        // we also have to call the shell's CrossAppNavigation service for creating correct links for inner-app navigation
        // because the shell part of the hash has to be set 
        var toView1 = this.oCrossAppNavigator && this.oCrossAppNavigator.hrefForAppSpecificHash("View1/") || ""; // this.oAppNavigator.hrefForRoute("toaView", {viewName : "View1"});
        var toView2 = this.oCrossAppNavigator && this.oCrossAppNavigator.hrefForAppSpecificHash("View2/") || ""; // this.oAppNavigator.hrefForRoute("toaView", {viewName : "View2"});        
        
        // *XNav (2) generate cross application link 
        var toDefaultApp = this.oCrossAppNavigator && this.oCrossAppNavigator.hrefForExternal( { target: { semanticObject : "UI2Fiori2SampleApps", action: "defaultapp" }}) || "";
        // an "external navigation" to the same app, as it has a different startup parameter
        // (date), it will be reloaded!
        var toOurApp = this.oCrossAppNavigator && this.oCrossAppNavigator.hrefForExternal({
            target: { semanticObject : "UI2Fiori2SampleApps", action: "appnavsample" },
            params : { date : new Date().toString(),}
        }) || "";
        
        var sShellHash =  "#UI2Fiori2SampleApps~appnavsample&date=" + encodeURIComponent( new Date().toString() );
        
        var toOurApp2 = this.oCrossAppNavigator && this.oCrossAppNavigator.hrefForExternal({
            target: { "shellHash" : sShellHash }
        }) || "";
        
        var mdl = new sap.ui.model.json.JSONModel({
           toView2_href : toView2,
           toView1_href : toView1,
           DefaultApp_display_href :  toDefaultApp, // "#DefaultApp-display"
           AppNavSample_display_args_href : toOurApp,
           AppNavSample_display_args_href2 : toOurApp2,
        });

        
        if( toOurApp2 === sShellHash ) {
            jQuery.sap.log.error("naaah! Behold of the encoding changes");
        }
            
        
        /*
         * elements of this model are bound to href tags in views :
         * e.g. (Detail.view.xml) :
         * <Link href="{/DefaultApp_display_href}" text="cross app link (Default App)" tooltip="Back to Fiori Sandbox Default Application (note href is generated!)"></Link>
        */

        this.getView().setModel(mdl);

	},

	// construct and register a view if not yet present
    makeViewUilib : function(sViewname) {

        if( this.mViewNamesToViews[sViewname] ){
            return this.mViewNamesToViews[sViewname];
        }
        //construct
        jQuery.sap.log.info("AppNavSample: Creating view + " + sViewname + "... ");        
        // run with owner to pass component! 
        
        var oView = null; 
        sap.ui.base.ManagedObject.runWithOwner(function() {
            /* create View */
            oView =  sap.ui.view({ type: sap.ui.core.mvc.ViewType.XML,
                viewName: "AppNavSample.view." + sViewname
                // use a generated id!              
            });
        }, this.oComponent);

        
        
        jQuery.sap.log.info("AppNavSample:  Creating view + " + sViewname + " assigned id : " + oView.getId());
        this.mViewNamesToViews[sViewname] = oView;
        return oView;
    },

    navigate : function(sEvent,sNavTarget) {
        var oView = null;
        if( sEvent === "toView") {
            var sView = sNavTarget; // navtarget;
            if ( sView === "" || !(sView === "Detail" || sView === "View1" || sView === "View2") ) {
              var vw = this.mViewNamesToViews["Detail"];
              this.oApp.toDetail(vw);
              return;
            }
            /* *Nav* (7) Trigger inner app navigation */
//            this.oAppNavigator.toRoute("toaView",{ viewName : sView},true);
            this.oInnerAppRouter.navTo("toaView",{ viewName : sView}, true);
            return;
        }
        if (sEvent == "back") {
          this.oApp.back();
        } else if (sEvent == "backDetail") {
          this.oApp.backDetail();
        } else {
            jQuery.sap.log.info("AppNavSample: Unknown navigation");
        }                          

    },



    doNavigate : function(sEvent,sNavTarget) {
        var oView = null;
        if( sEvent === "toView") {
            var sView = sNavTarget; // navtarget;
            if ( sView === "" || !(sView === "Detail" || sView === "View1" || sView === "View2") ) {
              var vw = this.mViewNamesToViews["Detail"];
              this.oApp.toDetail(vw);
              return;
            }
            var bNew = !this.mViewNamesToViews[sView];
            var oView = this.makeViewUilib(sView);
            if (bNew)
                this.oApp.addPage(oView);            
            this.oApp.toDetail(oView);
            oView.getController().oApplication = this;
            return;
        }
        if (sEvent == "back") {
          this.oApp.back();
        } else if (sEvent == "backDetail") {
          this.oApp.backDetail();
        } else {
            jQuery.sap.log.info("AppNavSample: Unknown navigation");
        }                          
    },

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf MainXML
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf MainXML
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf MainXML
*/
	onExit: function() {
	    jQuery.sap.log.info("AppNavSample: On Exit of Main.XML.controller called : this.getView().getId():" + this.getView().getId() );
	    this.mViewNamesToViews = {};
	    if (this.oInnerAppRouter) {
	        this.oInnerAppRouter.destroy();
	    }
	}

});
