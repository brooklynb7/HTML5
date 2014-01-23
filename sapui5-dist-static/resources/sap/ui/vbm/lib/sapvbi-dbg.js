//...........................................................................//
// VBI namespace.............................................................//

// Author: Ulrich Roegelein


/*global URI *///declare unusual global vars for JSLint/SAPUI5 validation


(function() 
{
    //.......................................................................//
    // check if there is already a VBI object................................//
    //.......................................................................//

    var bInitialized = (typeof VBI == "object") || window.VBI;

    // return immediately when vbi is already initialized....................//
    if( bInitialized ) 
        return;

   //........................................................................//
   // create the vbi object..................................................//

   window.VBI =
   {
      //.....................................................................//
      // get the location service............................................//

      GetGeoLocationService:    
         function()
         {
            if( this.GeoLocationService )
               return this.GeoLocationService;
                     
            this.GeoLocationService = new VBI.GeoLocation();
            return this.GeoLocationService;
         },

      //.....................................................................//
      // logging and tracing.................................................//

      m_Log : "",
      m_bTrace : 
         (function()
         { 
            // trace is active when VBITrace div is available................//
            var el = document.getElementById('VBITrace');
            return ( el != null) ? true : false; 
         })(),

      Trace: function( text )
      {
         // do a log on the console, a crlf is appended......................//
         if( typeof console != "undefined" )
            console.log( text + "\r\n" );

         // add the text to a trace element, the <br> linebreak tag is added.//
         var trace = document.getElementById('VBITrace');
         if( trace == null )
            return;
         VBI.m_Log = VBI.m_Log + text + "<br>";
         trace.innerHTML = VBI.m_Log;
      }
   },

   //.......................................................................//
   // this is the list of java script files needed for VBI..................//

   VBIScriptFiles = [
      "saputilities",
      "sapvbicontext",     // control context
      "sapdataprovider",	// data provider
      "sapresources",
      "sapgeomath",
      "sapmaplayer",
      "sapmapprovider",
      "sapmapmanager",
      "sapvobase",			// visual objects base and vo implementation
      "sapscene",			   // scene handling, scenes
      "sapwindow",			// window handling, detail and so on
      "sapactions",			// actions handling, framework event subscription
      "sapgeolocation",
      "sapscale",
      "sapnavigation"
   ]; 

   // use sap require to load additional scripts.............................//
   for( var nJ = 0, len = VBIScriptFiles.length; nJ < len; ++nJ )
   {
	   jQuery.sap.require( "sap.ui.vbm.lib." + VBIScriptFiles[nJ] );
   }
    
})();
