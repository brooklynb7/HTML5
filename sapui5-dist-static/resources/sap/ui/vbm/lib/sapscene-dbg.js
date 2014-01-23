//...........................................................................//
// this module does the scene handling.......................................//

// Author: Ulrich Roegelein

//...........................................................................//
// the scene manager manages the scene instances in a component context......//

VBI.SceneManager = function()
{
   var scenemanager = {};
   scenemanager.vbiclass = "SceneManager";
   scenemanager.m_SceneArray = [];

   // finding................................................................//
   scenemanager.find = function( name )
   {
      // the scene array.....................................................//
      for( var nJ = 0; nJ < scenemanager.m_SceneArray.length; ++nJ )
         if( scenemanager.m_SceneArray[nJ].id == name )
            return scenemanager.m_SceneArray[nJ];
      
      return null;
   };

   // clearing...............................................................//
   scenemanager.clear = function()
   {
      // clear the scene array...............................................//
      for( var nJ = 0; nJ < scenemanager.m_SceneArray.length; ++nJ )
         scenemanager.m_SceneArray[nJ].clear();
      
      // reset array
      scenemanager.m_SceneArray = [];
   };

   // loading from the project file..........................................//
   scenemanager.load = function( dat, ctx )
   {
      if( dat.Set )
      {
         // todo: refine scene delta handling
         var scene;
         if( jQuery.type( dat.Set ) == 'object' )
         {
            if( dat.Set.name )
            {
               // set a scene by name........................................//
               if( scene = scenemanager.find( dat.Set.name ) )
               {
                  // reload the scene........................................//
                  if( dat.Set.SceneGeo )
                     scene.load( dat.Set.SceneGeo, ctx );
                  else
                     scene.load( dat.Set.Scene, ctx );

                  return;
               }
            } else
            {
               // clear all scenes...........................................//
               scenemanager.clear();
            }

            // this is an object.............................................//
            if( dat.Set.SceneGeo )
            {
               if( jQuery.type( dat.Set.SceneGeo ) == 'object' )
               {
                  // create the new scene load it and add it to the scene
                  // manager
                  var scene = new VBI.GeoScene( null, null, null );
                  scene.load( dat.Set.SceneGeo, ctx );
                  scenemanager.Add( scene ); 
               } else
               if( jQuery.type( dat.Set.SceneGeo ) == 'array' )
               {
                  // load array of scenes
                  for( var nJ = 0; nJ < dat.Set.SceneGeo.length; ++nJ )
                  {
                     // create the new scene load it and add it to the scene
                     // manager
                     var scene = new VBI.GeoScene( null, null, null );
                     scene.load( dat.Set.SceneGeo[ nJ ], ctx );
                     scenemanager.Add( scene ); 
                  }
               }
            } else
            if( dat.Set.Scene && jQuery.type( dat.Set.Scene ) == 'object' )
            {
               // todo: load a non geo scene
               if( jQuery.type( dat.Set.Scene ) == 'object' )
               {
                  // create the new scene load it and add it to the scene
                  // manager
                  var scene = new VBI.Scene( null, null, null );
                  scene.load( dat.Set.Scene, ctx );
                  scenemanager.Add( scene ); 
               } else
               if( jQuery.type( dat.Set.Scene ) == 'array' )
               {
                  // load array of scenes
                  for( var nJ = 0; nJ < dat.Set.Scene.length; ++nJ )
                  {
                     // create the new scene load it and add it to the scene
                     // manager
                     var scene = new VBI.Scene( null, null, null );
                     scene.load( dat.Set.Scene[ nJ ], ctx );
                     scenemanager.Add( scene ); 
                  }
               }

               VBI.m_bTrace && VBI.Trace( "ERROR: non geo  scenes are not yet supported" );
            }
         }  else
         if( jQuery.type( dat.Set ) == 'array' )
         {
            // this is an array
         }
      }
   };
   
   // functions..............................................................//
   scenemanager.Add = function (scene) { scenemanager.m_SceneArray.push( scene ); };

   // access a specific scene inside vbi.....................................//
   scenemanager.GetScene = function ( target ) 
   {
      for( var i = 0; i < scenemanager.m_SceneArray.length; ++i)
      {
         if( scenemanager.m_SceneArray[i].m_TargetName == target )
            return scenemanager.m_SceneArray[i];
      }
      return null;   // scene not known
   };        

   // access a specific scene by name........................................//
   scenemanager.GetSceneByName = function ( name ) 
   {
      for( var i = 0; i < scenemanager.m_SceneArray.length; ++i)
      {
         if( scenemanager.m_SceneArray[i].m_ID == name )
            return scenemanager.m_SceneArray[i];
      }
      return null;   // scene not known
   };        

   return scenemanager;
};


// ...........................................................................//
// Scene object..............................................................//

VBI.Scene = function( target )
{
   var scene = {};
   scene.vbiclass = "Scene";
   scene.m_TargetName = target;   

   scene.m_ID = "";
   scene.m_Ctx = null;                 // application context of scene.......//
   scene.m_Div = null;                 // the div dom element associated with
                                       // the scene
   scene.m_DivCopyright = null;

   scene.m_CaptureVO = null;           // the vo that currently captures mouse
                                       // input
   scene.m_VOS = [];                   // visual objects
   
   scene.m_nCanvasXOversize = 2;       // Canvas is sized viewport + 2 tiles
   scene.m_nCanvasYOversize = 2;       // Canvas is sized viewport + 2 tiles
   scene.m_nCanvasStdXPos = scene.m_nCanvasXOversize / 4;
   scene.m_nCanvasStdYPos = scene.m_nCanvasYOversize / 4;

   scene.m_nOverzoom = 0.0;
   scene.m_nMapMovePreLoad = 120;
   
   scene.m_nTicksInALod = 5;
   scene.m_nLodFactorZoomIn  = Math.pow( 2 , 1 / scene.m_nTicksInALod );
   scene.m_nLodFactorZoomOut = 1 / scene.m_nLodFactorZoomIn;
   
   
   // assign members.........................................................//
   scene.m_Target = target;

   // scene loading..........................................................//
   scene.load = function( dat, ctx )
   {
      // store the application context in the scene..........................//
      // this is necessary to have access to the application context.........//
      scene.m_Ctx = ctx;   

      // loading scene members. todo: enhance loading of scene members.......//
      if( dat.id )
         scene.m_ID = dat.id;
   };

   scene.clear = function()
   {
      // debugger;
   };

   scene.Render = function()
   {
      // todo: do rendering for scene (not the geo scene)....................//
   };

   scene.Awake = function( target )
   {   
      // todo: awake the scene internally....................................//
   };

   scene.NotifyDataChange = function()
   {
      // notify all vo's about a datacontext change..........................//
      for( var nJ = 0; nJ < scene.m_VOS.length; ++nJ )
         scene.m_VOS[nJ].NotifyDataChange( scene.m_Ctx );
   };
   
   scene.GetPosFromPoint = function( pt )
   {
      // todo: implementation for non geo scene..............................//
      return pt;
   };

   // .......................................................................//
   // do event dispatching...................................................//

   scene.SetCapture = function( vo )
   {
      m_CaptureVO = vo;
   };

   scene.DispatchEvent = function( e )
   {
      var func;
      
      // dispatch the events to the vos......................................//
      e.m_Scene = scene;

      // do some adjustments for offset parameters, usually only done for ff.//
      if( e.offsetX == undefined || e.offsetY == undefined )
      {
         if( e.clientX !== undefined && e.clientY !== undefined )
         {
            // due to ff, there is no correct offsetX/Y therefore set it now.//
            var rect = e.target.getBoundingClientRect();
            e.offsetX = e.clientX - rect.left;        
            e.offsetY = e.clientY - rect.top;
         }
      }

      // when a vo wants to have events first it can capture them, events....//
      // are not further dispatched when the event handler returns true......//
      if( scene.m_CaptureVO )
      {         
         if( ( func = scene.m_CaptureVO[ "on" + e.type ] ) && typeof( func ) == 'function' )
         {
            // bind the function to the visual objects context, this ensures.//
            // that the this reference points to the vo......................//
            // and call the handler..........................................//
            if( (func.bind( m_CaptureVO ))( e ) == true ) 
               return true;   // handled
         }
      }      

      var idx;
      for( var nJ = 0; nJ < scene.m_VOS.length; ++nJ )
      {
    	 // call the event handler on the objects in reverse order...........//

         idx = scene.m_VOS.length - nJ - 1;
         if( ( func = scene.m_VOS[ idx ][ "on" + e.type ] ) && typeof( func ) == 'function' )
         {
        	// bind the function to the visual objects context, this ensures.//
            // that the this reference references the vo instance itself.....//
            // and call the handler..........................................//
            if( (func.bind( scene.m_VOS[ idx ] ))( e ) == true ) 
               return true;   // handled
         }
      }

      return false;
   };

   return scene;
};

// ...........................................................................//
// GeoScene object...........................................................//

VBI.GeoScene = function( target, mapmanager, maplayerstack )
{
   var scene = new VBI.Scene( target );   // create scene and specialize.....//

   scene.vbiclass = "GeoScene";

   // persisting members.....................................................//
   scene.m_RefMapLayerStack = "";

   scene.m_UCS = [ 0.0, 0.0, 0.0 ];       // temp variable to prevent from array
                                          // creation
   scene.m_Canvas = [];                   // canvas elements
   scene.m_ZoomFactors = [ 1.0, 1.0 ];    // zoom factors

   // store the mapmanager and the maplayerstack that should be used.........//
   scene.m_MapManager = mapmanager;
   scene.m_MapLayerStack = maplayerstack;

   // device check...........................................................//
   scene.m_bIsIDevice = (/iphone|ipad/gi).test(navigator.appVersion);
   scene.m_bIsAndroid = (/android/gi).test(navigator.appVersion);

   // click handler on scene.................................................//
   scene.Click = null;

   // define overlay index...................................................//
   scene.m_nOverlayIndex = 2;
   scene.m_nTapCount = 0;
   var m_SingleTapTimeout = null;

   scene.GetHomeLocation = null;

   // event handling members.................................................//
   scene.m_currentMouseX = 0;
   scene.m_currentMouseY = 0;
   scene.m_oldMouseX = 0;
   scene.m_oldMouseY = 0;
   scene.m_currentMouseDownX = 0;
   scene.m_currentMouseDownY = 0;
   scene.m_midPointX = 0;
   scene.m_midPointY = 0;

   scene.m_currentTouchDistance = 0;
   scene.m_bMove = false;
   scene.m_bZoom = false;
   scene.m_bTwoFingerTap = false;
   scene.m_bAnimZoomDone = false;
   scene.m_BlendTimer = null;
   
   // initial start position
   scene.m_startPointLonLat = [0.0, 0.0];
   scene.m_startLOD = 0;
   
   // Navigation Control
   scene.m_bNavControlVisible = true;
   scene.m_NavControl = null;
   scene.m_RenderTimer = null;
   
   // Suppressed Navigation
   scene.m_SuppressedNavigation = { zoom:false, move:false };
   
   // Scale
   scene.m_bScaleVisible = true;

   // current overlay image data
   scene.m_OverlayImageData = null;  

   // .......................................................................//
   // events.................................................................//
   
   scene.onTileLoaded = null;  // function( image ), raised whe a new tile is
                                 // loaded

   // clear the scene........................................................//
   scene.clear = function()
   {
      // clear the vo array..................................................//
      for( var nJ = 0; nJ < scene.m_VOS.length; ++nJ )
         scene.m_VOS[ nJ ].clear();

      // reset visual objects array..........................................//
      scene.m_VOS = [];                   // emty visual objects array.......//

      // remove the scene reference in hen navigation control................//
      if( scene.m_NavControl )
         scene.m_NavControl.clear();

      scene.Remove();   // remove the dom elements

      // reset object references.............................................//
      scene.m_Ctx = null;
      scene.m_RefMapLayerStack = "";
      scene.m_MapManager = null;
      scene.m_MapLayerStack = null;
      scene.m_TargetName = null;   
      scene.m_NavControl = null;          
      scene.m_OverlayImageData = null;

      // remove references to DOM elements...................................//
      scene.m_DivCopyright = null;
      scene.m_Div = null;
      scene.m_Target = null;
   };

   // scene loading..........................................................//
   scene.load = function( dat, ctx )
   {
      // store the application context in the scene..........................//
      // this is necessary to have access to the application context.........//
      scene.m_Ctx = ctx;   

      // loading scene members
      // todo: enhance reading of data
      if( dat.id )
         scene.m_ID = dat.id;

      if( dat.refMapLayerStack )
         scene.m_RefMapLayerStack = ctx.m_MapLayerStackManager.GetMapLayerStack( dat.refMapLayerStack );
      else
         VBI.m_bTrace && VBI.Trace( "no map layer specified in geo scene" );

      // load visual objects
      if( dat.VO )
      {
         // create the vo and load
         var vos = new VBI.VisualObjects();

         if( jQuery.type( dat.VO ) == 'object' ) 
         {
            // load the single object........................................//
            var vo = vos.Factory.CreateInstance( dat.VO.type );            
            vo.load( dat.VO, ctx );
            vo.m_Scene = scene;
            scene.m_VOS.push( vo );
         } else
         if( jQuery.type( dat.VO ) == 'array' )
         {
            // load the vo array.............................................//
            for( var nJ = 0; nJ < dat.VO.length; ++nJ )
            {
               if( jQuery.type( dat.VO[nJ] ) == 'object' )
               { 
                  // load the single object..................................//
                  var vo = vos.Factory.CreateInstance( dat.VO[nJ].type );
                  vo.load( dat.VO[nJ], ctx );
                  vo.m_Scene = scene;
                  scene.m_VOS.push( vo );
               }
            }
         }
      }
      
      if ( dat.initialStartPosition ){
    	  var array = dat.initialStartPosition.split(';');

    	  scene.m_startPointLonLat = VBI.MathLib.DegToRad( [ parseFloat( array[0] ), parseFloat( array[1] ) ] );
      }
      if ( dat.initialZoom ){
    	  scene.m_startLOD = parseInt( dat.initialZoom );
      }
      
      // navigation enablement and navigation control visibility
      var patt = /[1ty]/i;
      var SuppressedNavControlVisibility = { zoom:false, move:false, fade:false };
      // read properties of navigation enablement
      if( dat.NavigationDisablement )
      {
    	  if( dat.NavigationDisablement.zoom )
    		  scene.m_SuppressedNavigation.zoom = patt.test(dat.NavigationDisablement.zoom);
    	  if( dat.NavigationDisablement.move )
    		  scene.m_SuppressedNavigation.move = patt.test(dat.NavigationDisablement.move);
      }
      
      // initialize Navigation visibility
      if ( scene.m_bIsIDevice || scene.m_bIsAndroid ){
      	scene.m_bNavControlVisible = false;
      }
      else{
      	SuppressedNavControlVisibility.zoom = scene.m_SuppressedNavigation.zoom;
      	SuppressedNavControlVisibility.move = scene.m_SuppressedNavigation.move;

      	if ( scene.m_SuppressedNavigation.zoom && scene.m_SuppressedNavigation.move )
      		scene.m_bNavControlVisible = false;
      	else{

      		// read properties of NavControl Visibility
      		if ( dat.navControlVisible )
      			scene.m_bNavControlVisible = patt.test(dat.navControlVisible);

      		if ( scene.m_bNavControlVisible ){
      			if ( dat.SuppressedNavControlVisibility ){
      				if ( !SuppressedNavControlVisibility.zoom && dat.SuppressedNavControlVisibility.zoom)
      					SuppressedNavControlVisibility.zoom = patt.test(dat.SuppressedNavControlVisibility.zoom );
      				if ( !SuppressedNavControlVisibility.move && dat.SuppressedNavControlVisibility.move)
      					SuppressedNavControlVisibility.move = patt.test(dat.SuppressedNavControlVisibility.move );
      				if (dat.SuppressedNavControlVisibility.fade)
      					SuppressedNavControlVisibility.fade = patt.test(dat.SuppressedNavControlVisibility.fade );
      			}
      			if (SuppressedNavControlVisibility.move && SuppressedNavControlVisibility.zoom)
      				scene.m_bNavControlVisible = false;
      		}
      	}
      }
      if ( scene.m_bNavControlVisible )
    	  	//scene.m_NavControl = new VBI.Navcontrol( SuppressedNavControlVisibility );
      	scene.m_NavControl = new VBI.NavigationControl( SuppressedNavControlVisibility );
      if ( dat.scaleVisible )
    	  scene.m_bScaleVisible = patt.test(dat.scaleVisible);
      if ( scene.m_bScaleVisible )
    	  scene.m_Scale = new VBI.Scale( scene );
   };

   // ........................................................................//
   // scene controlling interface............................................//

   scene.SetToolTip = function( tt )
   {
      var oCanvas = scene.m_Canvas[ scene.m_nOverlayIndex ];
      if( oCanvas.title != tt )
         oCanvas.title = tt;
   };

   scene.SetCursor = function( cc )
   {
      var oCanvas = scene.m_Canvas[ scene.m_nOverlayIndex ];
      if( oCanvas.style.cursor != cc )
         oCanvas.style.cursor = cc;
   };

   scene.RenderAsync = function()
   {
      // set timer for rendering if not yet set..............................//
      if( scene.m_RenderTimer != null )
         window.clearInterval( scene.m_RenderTimer );

      scene.m_RenderTimer = window.setInterval( scene.Render, 20 );
   };

   scene.Render = function()
   {
      // render the overlay..................................................//
      if( scene.m_RenderTimer )
      {
         // clear pending reder timers.......................................//
         window.clearInterval( scene.m_RenderTimer );      
         scene.m_RenderTimer = null;
      }
                  
      scene.InternalRenderLayer(scene.m_Canvas[ scene.m_nOverlayIndex ], false);
   };

   scene.GoToInitialStart = function()
   {
      scene.ZoomToGeoPosition( scene.m_startPointLonLat, scene.m_startLOD );
   };
   
   scene.ZoomToMultiplePositions = function( lons, lats )
   {
   	var minMaxX=[];
   	var minMaxY=[];
   	if ( lons.length != lats.length )
   		return;
   	for ( var nJ = 0; nJ < lons.length; nJ++ ){
   		var fLon = ( parseFloat( lons[nJ] ) );
   		if ( fLon < 0 )
   			fLon += 360;
   		minMaxX.push( fLon );
   		minMaxY.push( parseFloat( lats[nJ] ) );
   	}
   	if ( minMaxX.length != minMaxY.length || !minMaxX.length )
   		return;
   	// sort the arrays
   	minMaxX.sort(function (a, b) { return a-b; });
   	minMaxY.sort(function (a, b) { return a-b; });

   	var minX, maxX, minY, maxY;
   	minY = minMaxY[0];
   	maxY = minMaxY[minMaxY.length - 1];
   	var dist, from, to, tmp;
   	from = minMaxX[minMaxX.length - 1];
   	// find the largest distance between two points ( only x-axis )
   	for( var nJ = 0; nJ < minMaxX.length; nJ++){
   		to = minMaxX[nJ];
   		tmp = ( to < from ? ( to + 360 - from ) : (to - from));  
   		if ( dist == undefined || tmp > dist )	{
   			dist = tmp;
   			minX = ( to < from ? to + 360 : to );  
   			maxX = from;
   		}
   		from = to;
   	}
   	
   	// calculate the requested lod 
   	var lodY = 14;	// determine default value
   	var lodX = 14;	// determine default value
   	if ( maxY != minY ){
   		lodY = 180 / ( maxY - minY );
   		lodY = Math.log(lodY) * Math.LOG2E;
   	}
   	if( maxX != minX ){
   		if( maxX < minX )
   			maxX += 360;
   		lodX= 360 / ( maxX - minX );
   		lodX = Math.log(lodX) * Math.LOG2E;
   	}
   	// calculate midpoint to zoom in
   	var zoomPointLon = minX+(maxX-minX)/2;
   	if( zoomPointLon > 180 )
   		zoomPointLon = zoomPointLon - 360;
   	var zoomPointLat = minY+(maxY-minY)/2;
   	scene.ZoomToGeoPosition( VBI.MathLib.DegToRad( [ zoomPointLon, zoomPointLat ] ), lodX < lodY ? lodX : lodY  );
   	
   };
   
   scene.ZoomToGeoPosition = function( lonlat, lod )
   {
      var nx = 0;
      var ny = 0;
      var bPendingZoom = false;

      // todo: change is compatiple to previous version but should be changed
      // to be able to get the intension of the code
      var nExactLod = Math.max( lod, scene.GetMinLOD() );
      if ( nExactLod != lod )
      {
         lod = Math.floor(nExactLod);
         bPendingZoom = ( lod != nExactLod );
      }
      // if (scene.m_bIsIDevice || scene.m_bIsAndroid)
      // {
      // last solution created wrong zooming. Uldis
         var rect = scene.m_Div.getBoundingClientRect();
         nx = rect.width;
         ny = rect.height;
      /*
       * } else { nx = scene.m_Div.style.pixelWidth; ny =
       * scene.m_Div.style.pixelHeight; }
       */

      // the zooming position should be in the center of the viewport........//
      var nPixelX = ( 1<< lod ) * scene.m_MapManager.m_tileWidth;
      var nPixelY = ( 1<< lod ) * scene.m_MapManager.m_tileHeight;

      // determine the position in pixel space...............................//
      var uxy = [nPixelX, nPixelY];
      VBI.MathLib.LonLatToUCS( lonlat, uxy );
      uxy[1] =  nPixelY - uxy[1];

      // determine the left top tile number of the canvas....................//
      var dLeft = ( uxy[0] - nx / 2.0 ) / scene.m_MapManager.m_tileWidth;      
      var dTop = ( uxy[1] - ny / 2.0 ) / scene.m_MapManager.m_tileHeight;
      var newLeft = Math.floor( dLeft - scene.m_nCanvasStdXPos );
      var newTop  = Math.floor( dTop  - scene.m_nCanvasStdYPos);

      // determine the coordinate in canvas space............................//
      var nLeftOffset = Math.floor( ( uxy[0] - nx / 2 ) - newLeft * scene.m_MapManager.m_tileWidth );
      var nTopOffset = Math.floor( ( uxy[1] - ny / 2 ) - newTop * scene.m_MapManager.m_tileHeight );

      // move the current canvas.............................................//
      // and set it to a justified size......................................//
      
      var nSizeX = scene.m_nTilesX * scene.m_MapManager.m_tileWidth;
      var nSizeY = scene.m_nTilesY * scene.m_MapManager.m_tileHeight;
      var canvas = scene.m_Canvas[0];
      // move canvas and overlay to the new position.........................//
      // VBI.Trace("nLeftOffset="+nLeftOffset+"TopOffset="+nTopOffset+"Size="+nSizeX+","+nSizeY );
      scene.MoveCanvas( canvas, -nLeftOffset, -nTopOffset, nSizeX, nSizeY );
     
      var context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      context = scene.m_Canvas[1].getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // request new tiles into the current canvas...........................//
      scene.m_MapManager.RequestTiles( canvas, scene.m_MapLayerStack, newLeft, newTop, scene.m_nTilesX, scene.m_nTilesY, 0, 0, 0, 0, parseInt( lod ), false );
      
      canvas.m_nExactLOD = canvas.m_nCurrentLOD + Math.log(canvas.getPixelWidth()/(256*scene.m_nTilesX)) * Math.LOG2E;


      if ( bPendingZoom )  // ZoomMap will trigger render event
      	scene.ZoomMap ( 0, scene.m_Div.clientWidth / 2 + nLeftOffset, scene.m_Div.clientHeight / 2 + nTopOffset );
      else
      {   // trigger render event for the overlay.............................//
      	scene.InternalRenderLayer(scene.m_Canvas[ scene.m_nOverlayIndex ], false );
      	// notify NavControl.................................................//
      	if ( scene.m_bNavControlVisible && scene.m_NavControl )
      		scene.m_NavControl.AdjustScrollPoint( lod );
      }         
      
   };

   scene.SetMapLayerStack = function( name )
   {
      var item = VBI.GetMapLayerStack( name ); 
      if( item == null )
         return;           // do nothing

      // set the new layer stack.............................................//
      scene.m_MapLayerStack = item;

      // request new tiles into the current visible canvas...................//
      var canvas = scene.m_Canvas[0];
      scene.m_MapManager.RequestTiles( canvas, scene.m_MapLayerStack, canvas.m_nCurrentX, canvas.m_nCurrentY, scene.m_nTilesX, scene.m_nTilesY, 0, 0, 0, 0, canvas.m_nCurrentLOD, false );

      // set the map layer stack by name.....................................//
      scene.InternalRenderLayer(scene.m_Canvas[ scene.m_nOverlayIndex ], false);
   };
   
   scene.ZoomToZoomlevel = function( canvas, lonlat, newZoomLevel )
   {
      // Zooms to new ZoomLevel (does not need to be an integer one)
      // converts NewLOD to a factor in relation to current lod
      var nFactor = Math.pow(2, newZoomLevel - canvas.m_nExactLOD );

      scene.ZoomMap ( nFactor, scene.m_Div.clientWidth / 2 - canvas.getPixelLeft(), scene.m_Div.clientHeight / 2 - canvas.getPixelTop()  );
   };
   
   scene.GetMapLayerStack = function()
   {
      // just return the map layer stack.....................................//
      return scene.m_MapLayerStack;
   };

   scene.GetMinLOD = function()
   {
      var nSpace = scene.m_Div.clientWidth / scene.m_MapManager.m_tileWidth;
      var nMinimumLod = Math.log( nSpace ) * Math.LOG2E;

      return Math.max( nMinimumLod, scene.m_MapLayerStack.GetMinLOD() );
   };

   scene.GetMaxLOD = function()
   {
	   return scene.m_MapLayerStack.GetMaxLOD();
   };
   
   scene.GetCurrentZoomlevel = function()
   {
	   var factor = scene.m_Canvas[0].getPixelWidth() / scene.m_nWidthCanvas;
	   var zoomlevel = Math.log(factor) / Math.LN2 + scene.m_Canvas[0].m_nCurrentLOD;

	   return  zoomlevel;
   };

   scene.GetCenterPos = function()
   {
      // determine the center position on the viewport.......................//
      // in a geo scene this returned in lonlat and radians..................//
   
      var cv = scene.getCanvas();
      var rect = scene.m_Div.getBoundingClientRect();
      var point = [ rect.width / 2 - cv.getPixelLeft(), rect.height / 2 - cv.getPixelTop() ];
      return scene.GetGeoFromPoint( point );
   };
   
   scene.GetPosFromPoint = function( pt )
   {
      // in a geo scene this function returns the geo coordinates of a point.//
      return scene.GetGeoFromPoint( pt );
   };

   //........................................................................//
   // helper functions.......................................................//

   scene.GetEventVPCoords = function( event )
   {   
      // returns the relative pixel coordinates to the viewport of the....//
      // provided event...................................................//
         
      var rect = scene.m_Div.getBoundingClientRect();
      return [ event.clientX - rect.left, event.clientY - rect.top ];
   };

   scene.GetEventVPCoordsObj = function( event )
   {   
      var pos = scene.GetEventVPCoords( event );
      return { x: pos[0].toString() , y: pos[1].toString() };
   };

   scene.SetMoveMode = function( bSet )
   {
      // !capured event listeners on canvas will not work, <document> is.....//
      // is mandatory........................................................//

      if( bSet )
      {
         // remove documents event listeners.................................//
         // current positions must be set outside............................//
         document.addEventListener( 'mouseup', scene.processmouseup, true );
         document.addEventListener( 'mousemove', scene.processmousemove, true );
      } else
      {
         scene.m_bMove = false;
         scene.m_currentMouseX = 0;
         scene.m_currentMouseY = 0;

         document.removeEventListener('mouseup', scene.processmouseup, true );
         document.removeEventListener('mousemove', scene.processmousemove, true );
      }
   };

   // .......................................................................//
   // internal functions.....................................................//

   scene.InternalRenderVisualObjects = function( canvas, context )
   {
      // iterate through objects and render them.............................//
      var aVO = scene.m_VOS;
      for( var nJ = 0; nJ < scene.m_VOS.length; ++nJ )
         aVO[nJ].Render( canvas, context );
   };

   scene.InternalRenderLayer = function ( canvas, bClearLayer )
   {
      // whenever the overlay layer is rendered, reset the overlay image data//
      scene.m_OverlayImageData = null;

      // canvas is the object layer canvas...................................//
      var oldX = canvas.getPixelWidth();
      var oldY = canvas.getPixelHeight();
      canvas.setPixelWidth( scene.m_nWidthCanvas );
      canvas.setPixelHeight( scene.m_nHeightCanvas );

      // set the zoom factors here...........................................//
      scene.m_ZoomFactors[0] = oldX / scene.m_nWidthCanvas;
      scene.m_ZoomFactors[1] = oldY / scene.m_nHeightCanvas;

      var context = canvas.getContext('2d');

      if( bClearLayer ) 
      {
         context.clearRect(0, 0, canvas.width, canvas.height);

         // resize again.....................................................//
         canvas.setPixelWidth( oldX );
         canvas.setPixelHeight( oldY ); 
         return;
      }

      // render all visual objects in the layer..............................//
      context.clearRect( 0, 0, canvas.width, canvas.height );
      scene.InternalRenderVisualObjects( canvas, context );

      // resize again........................................................//
      canvas.setPixelWidth( oldX );
      canvas.setPixelHeight( oldY );
  
      // call event relevant function........................................//
      scene.InternalOnRenderLayer( canvas );
   };

   scene.InternalOnMoveLayer = function( canvas )
   {
      // call into event subscriptions.......................................//
      scene.m_Ctx.onMoveLayer( canvas );
   };

   scene.InternalOnZoomLayer = function( canvas )
   {
      // call into event subscriptions.......................................//
      scene.m_Ctx.onZoomLayer( canvas );
   };
   
   // ........................................................................//
   // scene events and their default implementation..........................//

   scene.InternalOnRenderLayer = function( canvas )
   {
      // call into event subscriptions.......................................//
      scene.m_Ctx.onRenderLayer( canvas );
   
      // do some default implementation......................................//
      if( scene.GetHomeLocation )
      {
         // canvas is the object layer canvas................................//
         var oldX = canvas.getPixelWidth();
         var oldY = canvas.getPixelHeight();


         var lonlat = [0, 0];
         var homeloc = scene.GetHomeLocation();

         lonlat[0] = homeloc[0];
         lonlat[1] = homeloc[1];

         var xy = scene.GetPointFromGeo( lonlat );

         canvas.setPixelWidth( scene.m_nWidthCanvas );
         canvas.setPixelHeight( scene.m_nHeightCanvas );

         var context = canvas.getContext('2d');
         context.clearRect( 0, 0, canvas.width, canvas.height );

         // draw a circle position...........................................//
         context.fillStyle = 'yellow';
         context.beginPath();
         context.arc(xy[0], xy[1], 5, 0, Math.PI * 2, true);
         context.closePath();
         context.fill();

         var image = null;
         if( scene.m_Ctx )
            image = scene.m_Ctx.GetImage("dummy", scene.RenderAsync.bind( scene ) );

         if( image )
            context.drawImage( image, xy[0] - image.naturalWidth / 2, xy[1] - image.naturalHeight );

         // resize
         // again.......................................................//
         canvas.setPixelWidth( oldX ); 
         canvas.setPixelHeight( oldY );
      }
   };
   
   // .......................................................................//
   // attach events to the canvases to get events............................//

   
   // standard event handling................................................//
   if (!scene.m_bIsIDevice && !scene.m_bIsAndroid)
   {
      scene.processmousedown = function (event) 
      {
         if( scene.DispatchEvent( event ) == true )   // dispatch the event
            return;

         VBI.m_bTrace && VBI.Trace("processmousedown");
         if ( !scene.m_SuppressedNavigation.move)
         {
            scene.m_bMove = true;
            scene.m_currentMouseX = event.clientX;
            scene.m_currentMouseY = event.clientY;
            scene.m_currentMouseDownX = event.clientX;
            scene.m_currentMouseDownY = event.clientY;

            // !capured event listeners on canvas will not work, document is.//
            // is mandatory..................................................//
            // it is important to remove the listener with the capture flag!.//

            scene.SetMoveMode( true );

        	   // do !not! prevent from default handling........................//
        	   // IE needs to activate the canvas...............................//
         }
      };

      scene.processcontextmenu = function( event ) 
      {
         // dispatch the event...............................................//
         if( scene.DispatchEvent( event ) == true )
            return;        // return due it has been handled by a VO

         // check for map based event........................................//
         var action, actions = scene.m_Ctx.m_Actions;
         if( actions )
         {
            if( action = actions.findAction( "ContextMenu", scene, "Map" ) )
               scene.m_Ctx.FireAction( action, scene, "Map", null, scene.GetEventVPCoordsObj( event ) );

            event.preventDefault(); // the event is handled
         }
      };
         
      scene.processmouseout = function( event ) 
      {
         // dispatch the event
         if( scene.DispatchEvent( event ) == true )
            return;
      };

      scene.processclick = function( event ) 
      {
         // raise a click event..............................................//
         // when the click is subscribed.....................................//
         // use the m_clientX and m_clientY values to get relative canvas....//
         // relative coordinates.............................................//

         // dispatch the event
         if( scene.DispatchEvent( event ) == true )
            return;

         if( scene.Click )  
         {
            var dx = scene.m_currentMouseDownX - event.clientX;
            var dy = scene.m_currentMouseDownY - event.clientY;
            if( (dx * dx + dy * dy ) <= 4 )
            {
               // enhance the event with canvas relative click coordinates...//
               var rect = scene.m_Canvas[ scene.m_nOverlayIndex ].getBoundingClientRect();
               event.m_clientX = event.clientX - rect.left;
               event.m_clientY = event.clientY - rect.top;
               scene.Click( event );
            }
         }
      };

      scene.processmouseup = function( event ) 
      {
         VBI.m_bTrace && VBI.Trace( "processmouseup" );

         if( scene.DispatchEvent( event ) == true )   // dispatch the event
            return;
         
         scene.SetMoveMode( false );   // reset move mode....................//

         // prevent from default handling....................................//
         event.preventDefault();
         return false;
      };

      scene.processmousemove = function( event ) 
      {
         var bTransparent;
         if( bTransparent = scene.IsTransparent( event.clientX, event.clientY ) )
         {
            scene.SetToolTip( "" );
            scene.SetCursor( 'default' );
         }

         scene.SetCursor( bTransparent ? 'default' : 'pointer' );

         // prevent from default handling always.............................//
         event.preventDefault();

         if( scene.DispatchEvent( event ) == true )   // dispatch the event
            return;
         
         if (scene.m_bMove ) 
         {
            if( !( event.buttons == 1 || event.which == 1 ) )
            {
               // button is no longer pressed, stop mouse capturing and move.//
               // mode.......................................................//
               scene.SetMoveMode( false );
               return false;
            }

            // we are in move mode...........................................//
            var dx = event.clientX - scene.m_currentMouseX;
            var dy = event.clientY - scene.m_currentMouseY;
            scene.m_currentMouseX = event.clientX;
            scene.m_currentMouseY = event.clientY;

            scene.MoveMap( dx, dy );            
            return false;
         }
      };

      scene.processmousewheel = function( event )
      {
         VBI.m_bTrace && VBI.Trace( "processmousewheel" );

         // set own browser independent event parameters.....................//
         event.m_OffsetX = event.offsetX;
         event.m_OffsetY = event.offsetY;
         event.m_Delta = event.wheelDelta;

         scene.processcommonwheel( event );
         return false;
      };

      scene.processwheel = function( event )
      {
         VBI.m_bTrace && VBI.Trace( "processwheel" );

         // set own browser independent event parameters.....................//
         // due to ff, there is no correct offsetX
         var rect = event.target.getBoundingClientRect();

         event.m_OffsetX = event.clientX - rect.left;        
         event.m_OffsetY = event.clientY - rect.top;
         event.m_Delta = -event.deltaY;

         scene.processcommonwheel( event );
         return false;
      };

      scene.processcommonwheel = function( event ) 
      {
         VBI.m_bTrace && VBI.Trace("processcommonwheel");

         if( scene.DispatchEvent( event ) == true )   // dispatch the event
            return;

         if (!scene.m_SuppressedNavigation.zoom )
         {
            if ( event.m_Delta > 0 /* && scene.GetMaxLOD() > currentLOD */ ) 
               scene.ZoomMap( scene.m_nLodFactorZoomIn, event.m_OffsetX, event.m_OffsetY );
            else 
            if ( event.m_Delta < 0  )
               scene.ZoomMap( scene.m_nLodFactorZoomOut, event.m_OffsetX, event.m_OffsetY );

            event.preventDefault();

            // notify NavControl
//            if ( scene.m_bNavControlVisible && scene.m_NavControl )
//               scene.m_NavControl.AdjustScrollPoint( );
         }
         return false;
      };

   } else
   {
      // mobile event handling...............................................//
      var bHandled = false;

      scene.ontouchstart = function( e )
      {  
         VBI.m_bTrace && VBI.Trace("touchstart");

         if( scene.DispatchEvent( e ) == true ) // dispatch the event
            return;

         window.clearTimeout(m_SingleTapTimeout);

         if( e.touches.length == 1  && !scene.m_SuppressedNavigation.move )
         {
            scene.m_bMove = true;
            // m_nTapCount += 1;

            var touch = e.touches[0];
            scene.m_currentMouseX = touch.clientX;
            scene.m_currentMouseY = touch.clientY;

            VBI.m_bTrace && VBI.Trace("touchstart" + "X:" + scene.m_currentMouseX + "Y:" + scene.m_currentMouseY);
            bHandled = true;
         } else
         if( e.touches.length == 2 )
         {
            scene.m_bMove = false;
            scene.m_bTwoFingerTap = true;
            var touch1 = e.touches[0];
            var touch2 = e.touches[1];

            var touchMidX = touch1.clientX + ( touch2.clientX - touch1.clientX ) / 2;
            var touchMidY = touch1.clientY + ( touch2.clientY - touch1.clientY ) / 2;

            scene.m_currentMouseX = touchMidX;
            scene.m_currentMouseY = touchMidY;

            scene.m_midPointX = touchMidX;
            scene.m_midPointY = touchMidY;

            // calculate touch distance......................................//
            // and store it..................................................//

            var touchDistance = Math.sqrt(   Math.pow(touch1.clientX - touch2.clientX, 2) +
                                             Math.pow(touch1.clientY - touch2.clientY, 2));

            scene.m_currentTouchDistance = touchDistance;

            VBI.m_bTrace && VBI.Trace("touchstart" + "X1:" + touch1.clientX + "Y1:" + touch1.clientY + "X2:" + touch2.clientX + "Y2:" + touch2.clientY);
            bHandled = true;
         }

         if( bHandled )
         {
            e.preventDefault();
            return false;
         }
      };

      scene.ontouchend = function( e )
      {
         VBI.m_bTrace && VBI.Trace( "touchend" );
         
         // get the finger tap XY position for further event processing
         var rect = scene.m_Canvas[ scene.m_nOverlayIndex ].getBoundingClientRect();
         e.offsetX = scene.m_currentMouseX - rect.left;
         e.offsetY = scene.m_currentMouseY - rect.top;

         if( scene.DispatchEvent( e ) == true )    // dispatch the event
            return;

         if (scene.m_bTwoFingerTap)
         {
            // if this is two finger tap => animate zoom out
            scene.AnimateZoom(false);
         }
         else
         {
            // check there is a double tap => animate zoom in
            scene.HandleDoubleTap(e);
         }

         // if (scene.m_bZoom)
         // {
         // scene.m_Canvas[0].m_Scene.ToggleCanvas(scene.m_Canvas[0].m_Scene);
         // scene.m_bZoom = false;
         // }

         // at the end of a zoom animation, the overlay layer is refreshed
         // if animation zoom is not done, refresh the overlay layer
         // this is done to prevent from refreshing the layer a few times which
         // causes flickering
         if (!scene.m_bAnimZoomDone)
            scene.InternalRenderLayer(scene.m_Canvas[ scene.m_nOverlayIndex ], false);

         // reset move state and touch distance..............................//
         scene.m_bMove = false;
         scene.m_bAnimZoomDone = false;
         scene.m_currentTouchDistance = 0;
         scene.m_currentMouseX = 0;
         scene.m_currentMouseY = 0;
         e.preventDefault();
      };

      scene.ontouchcancel = function( e ) 
      {
         VBI.m_bTrace && VBI.Trace("touchcancel");

         if( scene.DispatchEvent( e ) == true ) // dispatch the event
            return;

         scene.m_bMove = false;
         e.preventDefault();
      };

      scene.ontouchmove = function( e )
      {
         VBI.m_bTrace && VBI.Trace("touchmove");

         var bHandled = false;
         scene.m_nTapCount = 0;

         if( scene.DispatchEvent( e ) == true ) // dispatch the event
            return;

         if( e.touches.length == 1 )
         {
             if( !scene.m_bMove )
                return;

            // only deal with one finger.....................................//
            var touch = e.touches[0];

            VBI.m_bTrace && VBI.Trace( "ontouchmove " + "X1:" + touch.pageX + "Y1:" + touch.pageY );

            // we are in move mode.......................................//
            var dx = touch.clientX - scene.m_currentMouseX;
            var dy = touch.clientY - scene.m_currentMouseY;
            scene.m_currentMouseX = touch.clientX;
            scene.m_currentMouseY = touch.clientY;

            scene.MoveMap(  dx, dy );

            m_currentMouseX = touch.clientX;
            m_currentMouseY = touch.clientY;
            bHandled = true;
         } else
         if( e.touches.length == 2 )
         {
        	 if( !scene.m_SuppressedNavigation.zoom ){
        		 scene.m_bTwoFingerTap = false;

        		 var touch1 = e.touches[0];
        		 var touch2 = e.touches[1];

        		 var touchMidX = touch1.clientX + ( touch2.clientX - touch1.clientX ) / 2;
        		 var touchMidY = touch1.clientY + ( touch2.clientY - touch1.clientY ) / 2;

        		 // the touch mid is relative to page
               // (bug?)......................//
        		 // correct it to be canvas
               // relative..............................//

        		 var rect = scene.m_Canvas[0].getBoundingClientRect();
        		 touchMidX -= rect.left;
        		 touchMidY -= rect.top;

        		 // calculate touch distance and decide if it is a zoomin
               // or......//
        		 // a
               // zoomout.....................................................//

        		 var touchDistance = Math.sqrt(   Math.pow(touch1.clientX - touch2.clientX, 2) +
        				 Math.pow(touch1.clientY - touch2.clientY, 2) );

        		 if( Math.abs( scene.m_currentTouchDistance - touchDistance ) > 10 )
        		 {
        			 var bZoomIn = ( touchDistance > scene.m_currentTouchDistance ) ? true: false;
        			 scene.m_currentTouchDistance = touchDistance;

        			 VBI.m_bTrace && VBI.Trace( "ontouchmove " + " X1:" + touch1.pageX + " Y1:" + touch1.pageY + " X2:" + touch2.pageX + " Y2:" + touch2.pageY );

        			 scene.ZoomMap( bZoomIn ? scene.m_nLodFactorZoomIn : scene.m_nLodFactorZoomOut, touchMidX, touchMidY );
        		 }
        		 bHandled = true;
        	 }
         }

         if( bHandled )
         {
            e.preventDefault();
            return false;
         }
      };
   }

   scene.HandleClick = function(event)
   {
      var rect = scene.m_Canvas[ scene.m_nOverlayIndex ].getBoundingClientRect();
      event.m_clientX = scene.m_currentMouseX - rect.left;
      event.m_clientY = scene.m_currentMouseY - rect.top;

      if( scene.Click )  
         scene.Click(event);
};

   // .......................................................................//
   // helper move functions.................................................//

   scene.MoveObject = function( o, x, y, width, height )
   {
      o.style.left = x.toString() + "px";
      o.style.top = y.toString() + "px";
      if (width !== undefined)
         o.style.width = width.toString() + "px";
      if (height !== undefined)
         o.style.height = height.toString() + "px";
   };
      
   scene.MoveObjectCanvas = function( x, y, width, height )
   {
      var cv = scene.m_Canvas[2];

      VBI.m_bTrace && VBI.Trace("MoveObjectCanvas" + " X:" + x + " Y:" + y + " Width:" + width + " Height:" + height );
      scene.MoveObject( cv, x, y, width, height );
   };

   scene.MoveCanvas = function ( canvas, x, y, width, height )
   {
      scene.MoveObjectCanvas( x, y, width, height );
      scene.MoveObject( canvas, x, y, width, height );
   };

   scene.MoveOnlyThisCanvas = function( canvas, x, y, width, height)
   {
      scene.MoveObject( canvas, x, y, width, height );
   };
   
   scene.MoveMap = function ( dx, dy )
   {
      VBI.m_bTrace && VBI.Trace( "MoveMap" + " DX:" + dx + " DY:" + dy );

      var canvas = scene.m_Canvas[0];
      
       // width of a current tile...........................................//
      var nCurrentTilePixelWidth = canvas.getPixelWidth() / scene.m_nTilesX;
      var nCurrentTilePixelHeight = canvas.getPixelHeight() / scene.m_nTilesY;

      var nTemp;
      var newLeft = canvas.m_nCurrentX, newTop = canvas.m_nCurrentY, nOffsetX = 0, nOffsetY = 0;
      var nPosX = canvas.getPixelLeft() + dx;
      var nPosY = canvas.getPixelTop() + dy;

      // do x-direction calculation..........................................//
      if( (dx > 0 ) && (nTemp = nPosX + scene.m_nMapMovePreLoad) > 0)
      {
          // left side is missing tiles, calc number of missed
            // tiles..........//
         nOffsetX = Math.ceil(nTemp / nCurrentTilePixelWidth);
         newLeft -= nOffsetX;
      } else
      if( (dx < 0 ) && (nTemp = (scene.m_nMapMovePreLoad + scene.m_Div.clientWidth - (nPosX + canvas.getPixelWidth()))) > 0)
      {
          // right side is missing tiles, calc number of missed
            // tiles.........//
         nOffsetX = -Math.ceil(nTemp / nCurrentTilePixelWidth);
         newLeft -= nOffsetX;
      }

      // do y-direction calculation..........................................//
      if( (dy > 0 ) && (nTemp = nPosY + scene.m_nMapMovePreLoad) > 0)
      {
         // top side is missing tiles, calc number of missed tiles...........//
         nOffsetY = Math.ceil(nTemp / nCurrentTilePixelHeight);
         newTop -= nOffsetY;
      } else
      if ( (dy < 0 ) && (nTemp = (scene.m_nMapMovePreLoad + scene.m_Div.clientHeight - (nPosY + canvas.getPixelHeight()))) > 0)
      {
         // bottom side is missing tiles, calc number of missed tiles........//
         nOffsetY = -Math.ceil(nTemp / nCurrentTilePixelHeight);
         newTop -= nOffsetY;
      }

      if (nOffsetY && ((newTop >  ( 1 << canvas.m_nCurrentLOD)  - 2) || (newTop < -1)))
            return;

      // set properties of new canvas........................................//
      if( nOffsetX || nOffsetY )
      {
         var context = scene.m_Canvas[1].getContext("2d");
         // context.fillStyle = 'white';
         context.clearRect( 0, 0, canvas.m_Scene.m_Canvas[1].width, canvas.m_Scene.m_Canvas[1].height );
         if (scene.m_bIsIDevice)
			   scene.MoveWithTileJumpIDev(canvas, nPosX, nPosY, nOffsetX, nOffsetY, nCurrentTilePixelWidth, nCurrentTilePixelHeight, newLeft, newTop);
		   else
			   scene.MoveWithTileJumpDesktop(canvas, nPosX, nPosY, nOffsetX, nOffsetY, nCurrentTilePixelWidth, nCurrentTilePixelHeight, newLeft, newTop);
	   } else
	   {
	      // just set the new positions.......................................//
	      scene.MoveCanvas(canvas, nPosX, nPosY);
	      scene.MoveObject (scene.m_Canvas[1], scene.m_Canvas[1].getPixelLeft() + dx, scene.m_Canvas[1].getPixelTop() + dy);
	   }
      // when a move is done, call internal function.........................//
      if( nOffsetX || nOffsetY )
      {
         // call internal function only when a move is done and rerendering..//
         // of the vos is necessary..........................................//
         // this should raise events or have some default implementation.....//
         //scene.InternalRenderLayer(scene.m_Canvas[ scene.m_nOverlayIndex ], false);
         scene.InternalRenderLayer(scene.m_Canvas[ scene.m_nOverlayIndex ], false);

         scene.InternalOnMoveLayer(scene.m_Canvas[ scene.m_nOverlayIndex ]);
      }
   };
   
   scene.MoveWithTileJumpIDev = function (canvas, nPosX, nPosY, nOffsetX, nOffsetY, nCurrentTilePixelWidth, nCurrentTilePixelHeight, newLeft, newTop)
   {
	   // move the current canvas..........................................//
	   scene.MoveCanvas(canvas.m_Scene.m_Canvas[0], nPosX - nOffsetX * nCurrentTilePixelWidth, nPosY - nOffsetY * nCurrentTilePixelHeight);
	   var context = canvas.getContext("2d");
	   context.clearRect( 0 , 0 , canvas.getPixelWidth() , canvas.getPixelHeight());
	   // copy content of current canvas into the new canvas...............//
	   // if (!scene.m_bIsIDevice && !scene.m_bIsAndroid)
	   // scene.CopyCanvas(scene.m_Canvas[0].getContext('2d'), newLeft, newTop,
      // canvas.m_nCurrentLOD, scene.m_Canvas[0], true);
	   // request new tiles into the current canvas........................//
	   canvas.m_Scene.m_MapManager.RequestTiles(canvas.m_Scene.m_Canvas[0], canvas.m_Scene.m_MapLayerStack, newLeft, newTop, canvas.m_Scene.m_nTilesX, canvas.m_Scene.m_nTilesY, 0, 0, 0, 0,canvas.m_nCurrentLOD, false);
   };

   scene.MoveWithTileJumpDesktop = function (canvas, nPosX, nPosY, nOffsetX, nOffsetY, nCurrentTilePixelWidth, nCurrentTilePixelHeight, newLeft, newTop)
   {
     VBI.m_bTrace && VBI.Trace( "MoveWithTileJumpDesktop OffsetX=" + nOffsetX+" OffsetY=" + nOffsetY );
	  var cwidth  = canvas.width;
	  var cheight = canvas.height;
	  var nPixelOffsetX = nOffsetX * 256;
	  var nPixelOffsetY = nOffsetY * 256;
      
	  var x1  = 0;
	  var x2 = cwidth;
	  var nLeftOffset  = 0, nRightOffset  = 0, nTopOffset = 0, nBottomOffset = 0;
	  var nLeftOffset2 = 0, nRightOffset2 = 0;
	  
	  // clearing only not yet requested part
	  var context = canvas.getContext("2d");
	  context.fillStyle = 'white';

	  if (nOffsetX)
	  {
		  if (nOffsetX < 0)
	      {
	    	  x2 = cwidth + nPixelOffsetX;
	    	  for ( var ni = 0; ni < (scene.m_nTilesX + nOffsetX); ni++ )
	    	  {
	    		  context.clearRect( ni*256 , 0, 256, cheight );
	   		  context.drawImage( canvas, (ni-nOffsetX) * 256, 0, 256, cheight, ni * 256, 0, 256, cheight);
	    	  }
	    	  context.clearRect( x2 , 0, -nPixelOffsetX, cheight );
	    	  nLeftOffset  = canvas.m_Scene.m_nTilesX + nOffsetX;
	    	  nLeftOffset2 = -nOffsetX; 
	      } else
	      {
	    	  x1 = nPixelOffsetX;
	    	  for ( var ni = scene.m_nTilesX-1; ni >= nOffsetX; ni-- )
	    	  {
	    		  context.clearRect( ni*256 , 0 , 256 ,cheight);
	        	  context.drawImage( canvas, (ni-nOffsetX) * 256, 0, 256, cheight, ni * 256, 0, 256, cheight);
	    	  }
	     	  context.clearRect( 0, 0, x1, cheight );
	     	  nRightOffset = canvas.m_Scene.m_nTilesX - nOffsetX;
	     	  nRightOffset2 = nOffsetX;
	      }
		  canvas.m_Scene.m_MapManager.RequestTiles(canvas, canvas.m_Scene.m_MapLayerStack, newLeft, newTop, canvas.m_Scene.m_nTilesX, canvas.m_Scene.m_nTilesY, nLeftOffset, 0, nRightOffset, 0, canvas.m_nCurrentLOD, false);          
	  }
	  if (nOffsetY)
	  {
	      if (nOffsetY < 0)
	      {
	    	  for ( var ni = 0; ni < (scene.m_nTilesY + nOffsetY); ni++ )
	    	  {
	    		  context.clearRect( x1 , ni*256, x2, 256);
	    	     context.drawImage( canvas, x1, (ni-nOffsetY)*256, x2-x1, 256, x1, ni*256, x2-x1, 256 );
	    	  }
	    	  context.clearRect( x1 , cheight + nPixelOffsetY, x2, cheight);
	    	  nTopOffset = canvas.m_Scene.m_nTilesY + nOffsetY;
	      }
	    	  
	      if (nOffsetY > 0)
	      {
	    	  for ( var ni = scene.m_nTilesY-1; ni >= nOffsetY; ni-- )
	    	  {
	    		  context.clearRect( x1 , ni*256 , x2 ,256);
	        	  context.drawImage( canvas, x1, (ni-nOffsetY) * 256, cwidth-x1, 256, x1, ni*256, cwidth-x1, 256);
	    	  }
	    	  context.clearRect( x1 , 0, x2, nPixelOffsetY);
	    	  nBottomOffset = canvas.m_Scene.m_nTilesY - nOffsetY;
	      }
	      canvas.m_Scene.m_MapManager.RequestTiles(canvas, canvas.m_Scene.m_MapLayerStack, newLeft, newTop, canvas.m_Scene.m_nTilesX, canvas.m_Scene.m_nTilesY, nLeftOffset2, nTopOffset, nRightOffset2, nBottomOffset, canvas.m_nCurrentLOD, false);
	  }
	  scene.MoveCanvas(canvas, nPosX - nOffsetX * canvas.getPixelWidth() / scene.m_nTilesX, nPosY - nOffsetY * canvas.getPixelHeight() / scene.m_nTilesY);      
   };
   
   // .......................................................................//
   // map move occured.......................................................//

   scene.CopyCanvas = function( destContext, destLeft, destTop, destLOD, srcCanvas, bClear )
   {
      var deltaLOD = destLOD - srcCanvas.m_nCurrentLOD;

      var dPow = Math.pow( 2, deltaLOD );

      var destX = ( dPow * srcCanvas.m_nCurrentX - destLeft ) * scene.m_nWidthCanvas / scene.m_nTilesX;
      var destY = ( dPow * srcCanvas.m_nCurrentY - destTop ) * scene.m_nHeightCanvas / scene.m_nTilesY;
      var destWidth = dPow * scene.m_nWidthCanvas;
      var destHeight = dPow * scene.m_nHeightCanvas;

      if( bClear )
      {
         destContext.fillStyle = "#FFFFFF";
         destContext.fillRect( 0, 0, scene.m_Canvas[1].width, scene.m_Canvas[1].height );
      }

      destContext.drawImage( srcCanvas, 0, 0, scene.m_nWidthCanvas, scene.m_nHeightCanvas, destX, destY, destWidth, destHeight );
   };

   // .......................................................................//
   // map zoom occured.......................................................//

   scene.ZoomMap = function( factor, xOffset, yOffset )
   {
      var bAdaptToEvenLod = true;
      var canvas = scene.m_Canvas[0];
      var nMaxTiles = ( 1 << canvas.m_nCurrentLOD);
      scene.m_bZoom = true;

      if (( canvas.m_nCurrentY < 0 ) && ( yOffset < - canvas.m_nCurrentY * (canvas.getPixelHeight() / scene.m_nTilesY)))
         return;  // GeoPos is above northpole
      if ((( canvas.m_nCurrentY + scene.m_nTilesY ) > nMaxTiles ) && (yOffset > ( nMaxTiles - canvas.m_nCurrentY) * ( canvas.getPixelHeight() / scene.m_nTilesY )))
         return;  // GeoPos is beyond southpole
      if (factor < 1 )
      {
         var nNumberOfVisibleEarths = ( scene.m_Div.clientWidth / canvas.getPixelWidth() ) * ( scene.m_nTilesX / nMaxTiles );
         if ( factor < nNumberOfVisibleEarths ) // means NumEarths / factor would have result > 1
         {
            if ( (nNumberOfVisibleEarths >= 1) && (factor!=0) )  
               return;   // no zoom or zoom in wrong direction required -> skip
            factor = nNumberOfVisibleEarths; // change factor to max, so that we see exactly one earth.
            bAdaptToEvenLod = false;
         }
      }
      var nNewExactLod = canvas.m_nExactLOD + Math.log( factor ) * Math.LOG2E;
      if ( bAdaptToEvenLod && Math.round( scene.m_nTicksInALod * nNewExactLod ) != scene.m_nTicksInALod * nNewExactLod )
      {
         nNewExactLod = Math.round( scene.m_nTicksInALod * nNewExactLod ) / scene.m_nTicksInALod;
         factor = Math.pow(2, nNewExactLod - canvas.m_nExactLOD);
      }
      
      if (scene.m_bIsIDevice || scene.m_bIsAndroid)
         scene.InternalRenderLayer(scene.m_Canvas[ scene.m_nOverlayIndex ], true);
      
      var oldTilePixelWidth = canvas.getPixelWidth() / scene.m_nTilesX;
      var oldTilePixelHeight = canvas.getPixelHeight() / scene.m_nTilesY;
      var distanceOffsetToMiddleX = scene.m_Div.clientWidth  /2 - canvas.getPixelLeft() - xOffset;
      var distanceOffsetToMiddleY = scene.m_Div.clientHeight /2 - canvas.getPixelTop()  - yOffset;

      // calculating new width and height and checking wether zoom in/zoom out
      // is possible
      var newWidth  = Math.round( canvas.getPixelWidth() * factor );
      var newHeight = Math.round( canvas.getPixelHeight() * factor );
      
      var nNewLod = Math.floor(nNewExactLod + scene.m_nOverzoom);
      // VBI.Trace("ExactLod is "+nNewExactLod+", so we use LOD "+nNewLod+"\n");
      if ( ( nNewLod > scene.m_MapLayerStack.GetMaxLOD() ) ||
           ( nNewLod < scene.m_MapLayerStack.GetMinLOD() ))
         return;
      
      var newLeft = Math.round( canvas.getPixelLeft() - ((factor - 1) * xOffset ) ); 
      var newTop = Math.round( canvas.getPixelTop() - ((factor - 1) * yOffset ) );
      var xOffsetOtherCanvas = xOffset + canvas.getPixelLeft() - scene.m_Canvas[1].getPixelLeft();
      var yOffsetOtherCanvas = yOffset + canvas.getPixelTop()  - scene.m_Canvas[1].getPixelTop();

      // zoom in on top level, this is the current visible canvas.........//
      scene.MoveCanvas(canvas, newLeft, newTop, newWidth, newHeight);

      // potential width of the next tile....................................//
      var newTilePixelWidth = newWidth / scene.m_nTilesX;
      var newTilePixelHeight = newHeight / scene.m_nTilesY;

      if ( nNewLod > canvas.m_nCurrentLOD )
      {
         var nLodDistance = 1 << ( nNewLod - canvas.m_nCurrentLOD);

         var newViewportMidX = xOffset + distanceOffsetToMiddleX / nLodDistance ;
         var newViewportMidY = yOffset + distanceOffsetToMiddleY / nLodDistance;

         var nTilesX = Math.round( nLodDistance * newViewportMidX / oldTilePixelWidth  - scene.m_nTilesX / 2 );
         var nTilesY = Math.round( nLodDistance * newViewportMidY / oldTilePixelHeight - scene.m_nTilesY / 2 );
         
         var nPosX = Math.ceil( newLeft + nTilesX * newTilePixelWidth / nLodDistance);
         var nPosY = Math.ceil( newTop  + nTilesY * newTilePixelHeight/ nLodDistance);
         
         // set positions and size of the lower canvas.......................//

         newLeft = Math.ceil ( canvas.m_nCurrentX * nLodDistance + nTilesX );
         newTop  = Math.ceil ( canvas.m_nCurrentY * nLodDistance + nTilesY );

         scene.MoveCanvas(canvas.m_Scene.m_Canvas[1], nPosX, nPosY, Math.ceil(newWidth / nLodDistance), Math.ceil(newHeight / nLodDistance));

         // refresh tiles of the new canvas..................................//
         var context = canvas.m_Scene.m_Canvas[1].getContext("2d");
         // clearing the context here leads tom flickering...//
         context.fillStyle = 'white';
         context.clearRect( 0, 0, context.canvas.width, context.canvas.height );
         
         scene.m_MapManager.RequestTiles(scene.m_Canvas[1], scene.m_MapLayerStack, newLeft, newTop, scene.m_nTilesX, scene.m_nTilesY, 0, 0, 0, 0, nNewLod, true);

         // exchange the canvas..............................................//
         canvas.m_Scene.ToggleCanvas(canvas.m_Scene);
      } else
      if ( nNewLod < canvas.m_nCurrentLOD )
      {
         var nLodDistance = 1 << ( canvas.m_nCurrentLOD - nNewLod);
         var nOddPartOfX = (( canvas.m_nCurrentX % nLodDistance ) + nLodDistance ) % nLodDistance;
         var nOddPartOfY = (( canvas.m_nCurrentY % nLodDistance ) + nLodDistance ) % nLodDistance;

         var newViewportMidX = xOffset + nLodDistance * distanceOffsetToMiddleX;
         var newViewportMidY = yOffset + nLodDistance * distanceOffsetToMiddleY;
         
         var nTilesX = Math.round( ( newViewportMidX / oldTilePixelWidth  + nOddPartOfX )/ nLodDistance - scene.m_nTilesX / 2);
         var nTilesY = Math.round( ( newViewportMidY / oldTilePixelHeight + nOddPartOfY )/ nLodDistance - scene.m_nTilesY / 2);
         
         // calculate the new position and align when necessary..............//
         var nPosX = newLeft + newTilePixelWidth  * ( nTilesX * nLodDistance - nOddPartOfX);
         var nPosY = newTop  + newTilePixelHeight * ( nTilesY * nLodDistance - nOddPartOfY );
         
         // set positions and size...........................................//

         scene.MoveCanvas(canvas.m_Scene.m_Canvas[1], nPosX, nPosY, Math.ceil( newWidth * nLodDistance), Math.ceil( newHeight * nLodDistance ) );
         newLeft = Math.floor( canvas.m_nCurrentX / nLodDistance + nTilesX );
         newTop  = Math.floor( canvas.m_nCurrentY / nLodDistance + nTilesY );

         // copy content of current canvas into the new canvas...............//
         // if (!scene.m_bIsIDevice && !scene.m_bIsAndroid)
         // scene.CopyCanvas(scene.m_Canvas[1].getContext('2d'), newLeft,
         // newTop, newLod, scene.m_Canvas[0], false);
         var context = canvas.m_Scene.m_Canvas[1].getContext("2d");
         context.fillStyle = 'white';
         context.clearRect( 0, 0, context.canvas.width, context.canvas.height );

         // set properties of new canvas.....................................//
         canvas.m_Scene.m_MapManager.RequestTiles(canvas.m_Scene.m_Canvas[1], canvas.m_Scene.m_MapLayerStack, newLeft, newTop, canvas.m_Scene.m_nTilesX, canvas.m_Scene.m_nTilesY, 0, 0, 0, 0, nNewLod, true);
         canvas.m_Scene.ToggleCanvas(canvas.m_Scene);
      } else
      {  // no lod switch....................................................//

         //VBI.Trace("Zoom without switch with factor:"+factor+"\n");
         scene.ZoomOtherCanvas( scene.m_Canvas[1], canvas, factor, xOffsetOtherCanvas , yOffsetOtherCanvas );
         
         // when we run out of the viewport then correct it..................//
         if( newLeft > 0 || newTop > 0 || (newLeft + newWidth < scene.m_Div.clientWidth) || (newTop + newHeight < scene.m_Div.clientHeight))
         {
            //VBI.Trace("run out viewport newTop="+newTop+" nTilesY="+nTilesY+" nPosY="+nPosY+" nLodDist="+nLodDistance+" yOffset="+yOffset+"\n");
            var nTilesX = -Math.ceil(newLeft / newTilePixelWidth );
            var nTilesY = -Math.ceil(newTop / newTilePixelHeight );

            var nPosX = newLeft + nTilesX * newTilePixelWidth;
            var nPosY = newTop + nTilesY * newTilePixelHeight;

            newLeft = canvas.m_nCurrentX + nTilesX;
            newTop = canvas.m_nCurrentY + nTilesY;
            // VBI.Trace("run out viewport newTop="+newTop+" nTilesY="+nTilesY+" nPosY="+nPosY+" yOffset="+yOffset+"\n");

            // set positions and size of the background canvas...............//
            scene.MoveCanvas( canvas.m_Scene.m_Canvas[1], nPosX, nPosY, newWidth, newHeight );

            // copy content of current canvas into the new canvas............//
            // if (!scene.m_bIsIDevice && !scene.m_bIsAndroid)
            // scene.CopyCanvas(scene.m_Canvas[1].getContext('2d'), newLeft,
            // newTop, newLod, scene.m_Canvas[0], true);

            // set properties of new canvas..................................//
            canvas.m_Scene.m_MapManager.RequestTiles(canvas.m_Scene.m_Canvas[1], canvas.m_Scene.m_MapLayerStack, newLeft, newTop, canvas.m_Scene.m_nTilesX, canvas.m_Scene.m_nTilesY, 0, 0, 0, 0, canvas.m_nCurrentLOD , true);

            canvas.m_Scene.ToggleCanvas(canvas.m_Scene);
         }
      }
      
      var canvasNow = scene.m_Canvas[0];
      canvasNow.m_nExactLOD = canvasNow.m_nCurrentLOD + Math.log(canvasNow.getPixelWidth()/(256*scene.m_nTilesX)) * Math.LOG2E;
      // VBI.Trace("finished ZoomMap Size: ["+canvasNow.getPixelWidth()+"/"+canvasNow.getPixelHeight()+"] LeftOffset:"+(-canvasNow.getPixelLeft())+"("+Math.round(100*(-canvasNow.getPixelLeft()/canvasNow.getPixelWidth()))+"%) TopOffset:"+(-canvasNow.getPixelTop())+"("+Math.round(100*(-canvasNow.getPixelTop()/canvasNow.getPixelHeight()))+"%) \n");
      // update the current lod in the navigation control (for mobile devices)
      if ( scene.m_bNavControlVisible && scene.m_NavControl )
   	     scene.m_NavControl.AdjustScrollPoint( canvasNow.m_nCurrentLOD );
      
      // trigger render event................................................//
      if (!scene.m_bIsIDevice && !scene.m_bIsAndroid)
         scene.InternalRenderLayer(scene.m_Canvas[ scene.m_nOverlayIndex ], false);

      // call internal functionto be able to do additional default behavior...//
      scene.InternalOnZoomLayer( scene.m_Canvas[ scene.m_nOverlayIndex ] );
   };
   
   scene.ZoomOtherCanvas = function( otherCanvas, canvas, factor, xOffset, yOffset )
   {
     
      var newLeft = Math.round( otherCanvas.getPixelLeft() - ((factor - 1) * xOffset ) ); 
      var newTop = Math.round( otherCanvas.getPixelTop() - ((factor - 1) * yOffset ) );

      var otherCanvasWidth  = Math.round( otherCanvas.getPixelWidth() * factor );
      var otherCanvasHeight = Math.round( otherCanvas.getPixelHeight() * factor );
      
      scene.MoveObject( otherCanvas, newLeft, newTop, otherCanvasWidth, otherCanvasHeight);
      // VBI.Trace("Zoom Other Canvas "+otherCanvasWidth+","+otherCanvasHeight+"\n");
   };

   scene.AnimateZoom = function( zoomIn )
   {
      if (!zoomIn)
      {
         var autoZoomOut = window.setInterval
                          (
                             function ()
                             {
                                var rect2 = scene.m_Canvas[0].getBoundingClientRect();
                                var xxx2 = scene.m_midPointX;
                                var yyy2 = scene.m_midPointY;
                                xxx2 -= rect2.left;
                                yyy2 -= rect2.top;
                                scene.ZoomMap( 0.93, xxx2, yyy2);
                             }
                             , 33
                          );

         window.setTimeout
         (
            function ()
            {
               window.clearInterval( autoZoomOut );
               scene.InternalRenderLayer(scene.m_Canvas[ scene.m_nOverlayIndex ], false);
               scene.m_bTwoFingerTap = false;
               scene.m_bAnimZoomDone = true;
            }
            , 300
         );
      } else
      {
         var autoZoomIn = window.setInterval
                          (
                             function ()
                             {
                                var rect = scene.m_Canvas[0].getBoundingClientRect();
                                var xxx = scene.m_oldMouseX;
                                var yyy = scene.m_oldMouseY;
                                xxx -= rect.left;
                                yyy -= rect.top;
                                scene.ZoomMap( 1.07, xxx, yyy);
                             }
                             , 33
                          );

         window.setTimeout
         (
            function ()
            {
               window.clearInterval(autoZoomIn);
               scene.InternalRenderLayer(scene.m_Canvas[ scene.m_nOverlayIndex ], false);
               scene.m_bAnimZoomDone = true;
            }
            , 300
         );
      }
   };

   scene.HandleDoubleTap = function( event )
   {
      m_SingleTapEvent = event;

      var dx = scene.m_currentMouseX - scene.m_oldMouseX;
      var dy = scene.m_currentMouseY - scene.m_oldMouseY;

      // document.title = scene.m_currentMouseX + " " + scene.m_currentMouseY +
      // " " + scene.m_oldMouseX + " " + scene.m_oldMouseY + " " + dx + " " + dy
      // + " " + (dx * dx + dy * dy);

      if ((dx * dx + dy * dy) <= 1000)
      {
         scene.m_nTapCount++;

         if (scene.m_nTapCount > 2)
            scene.m_nTapCount = 0;
      }

      // double tap test on iPad
      if (scene.m_nTapCount == 2)
      {
         scene.AnimateZoom(true);
         return;
      }

      window.setTimeout(function () { scene.m_nTapCount = 0; }, 200);

      // set variables as one tap has happened
      scene.m_nTapCount = 1;
      scene.m_oldMouseX = scene.m_currentMouseX;
      scene.m_oldMouseY = scene.m_currentMouseY;

      // handle single tap - emulated click
      // m_SingleTapTimeout = window.setTimeout(function () {
      // scene.HandleClick(m_SingleTapEvent); }, 222);

      scene.HandleClick(event);
      
      event.preventDefault();
   };

   // ........................................................................//
   // helper functions.......................................................//

   scene.IsTransparent = function( clientX, clientY )
   {
      // check if the applied coordinate is on a transparent pixel...........//
      // the coordinates are client relative and are transformed here to.....//
      // canvas relative coords..............................................//

      var oCanvas = scene.m_Canvas[ scene.m_nOverlayIndex ];
      if( !oCanvas ) return false;

      var rect = oCanvas.getBoundingClientRect();
      var nx = Math.round( ( clientX - rect.left ) / scene.m_ZoomFactors[0] );
      var ny = Math.round( ( clientY - rect.top ) / scene.m_ZoomFactors[1] );

      // check for stored overlay image data.................................//
      if( !scene.m_OverlayImageData )
      {
         var ctx = oCanvas.getContext("2d");
         scene.m_OverlayImageData = ctx.getImageData( 0, 0, scene.m_nWidthCanvas, scene.m_nHeightCanvas ).data;      
      }

      var nIdx = ( ny * scene.m_nWidthCanvas + nx ) * 4 + 3;
      if( ( nIdx < 0 ) || ( nIdx >= ( scene.m_nWidthCanvas * scene.m_nHeightCanvas * 4 ) ) )
      {
         VBI.m_bTrace && VBI.Trace( "GeoScene::IsTransparent coordinate out of bounds");
         return true;
      }

      var alpha = scene.m_OverlayImageData[ nIdx ];
      return alpha ? false : true;
   };

   scene.GetCurrentZoomFactors = function()
   {
      // for performance reasons we use the pre calculated factors...........//
      return scene.m_ZoomFactors;         
   };

   scene.ToggleCanvas = function( scene )
   {
      // toggle canvas.......................................................//
      var tmp = scene.m_Canvas[0];
      scene.m_Canvas[0] = scene.m_Canvas[1];
      scene.m_Canvas[1] = tmp;

      scene.m_Canvas[0].style.opacity = 0.0;
      scene.m_Canvas[1].style.opacity = 1.0;

      // toggle the zindex as well...........................................//
      tmp = scene.m_Canvas[0].style.zIndex;
      scene.m_Canvas[0].style.zIndex = scene.m_Canvas[1].style.zIndex;
      scene.m_Canvas[1].style.zIndex = tmp;

      // do blending over the canvas.........................................//
      scene.BlendCanvas();
   };

   scene.BlendCanvas = function()
   {
      if (scene.m_BlendTimer != null)
         window.clearInterval( scene.m_BlendTimer );

      // get the current canvas opacity....................................//
      var nCurOpacity = parseFloat( scene.m_Canvas[0].style.opacity );

      // increase the opacity step by step.................................//
      if (nCurOpacity < 1.0)
      {
         scene.m_BlendTimer = window.setInterval(scene.BlendCanvas, 40);
         scene.m_Canvas[0].style.opacity = nCurOpacity + 0.1;
      } else
      {
         window.clearInterval( scene.m_BlendTimer );
      }
   };

   // .......................................................................//
   // determine the point from the geoposition...............................//

   scene.GetPointFromPos = function ( pos, adjust, lastPoint, bForceNearest )
   {
      // in a geoscene the pos is specified as lon/lat/height, where lon and.//
      // lat are specified in degrees
      var tmp = VBI.MathLib.DegToRad( pos );    // convert to radians........//
      return scene.GetPointFromGeo( tmp, adjust, lastPoint, bForceNearest );
   };

   scene.GetPointFromGeo = function ( lonlat, adjust, lastPoint, bForceNearest )
   {
      var cv = scene.m_Canvas[0];
      var nLOD = cv.m_nCurrentLOD;
      var tilePixelWidth = scene.m_nWidthCanvas / scene.m_nTilesX;
      var tilePixelHeight = scene.m_nHeightCanvas / scene.m_nTilesY;

      var nMaxLODTiles = (1 << nLOD);

      // normalize complete dimension on current LOD.........................//
      var completeX, completeY;
      var ucs = [ completeX = nMaxLODTiles * tilePixelWidth, completeY = nMaxLODTiles * tilePixelHeight ];

      ucs = VBI.MathLib.LonLatToUCS( lonlat, ucs );

      // correct position...................................................//
      ucs[0] = ucs[0] - (cv.m_nCurrentX  * tilePixelWidth );
      ucs[1] = ( completeY - ucs[1]) - (cv.m_nCurrentY  * tilePixelHeight ); 
 
      ucs.m_nIndex = 0;

      if( adjust )
      {
         // adjust to round world............................................//
         while ((ucs[0] < 0) && ((completeX < cv.getPixelWidth()) || ((ucs[0] + completeX) < ( cv.getPixelWidth() - ucs[0]))))
            ucs[0] += completeX;
         while ((ucs[0] > completeX ) && ((completeX < cv.getPixelWidth()) || ((completeX - ucs[0] ) < ( ucs[0] - cv.getPixelWidth()))))
            ucs[0] -= completeX;
         var nOversearch = bForceNearest ? 2 : 1; 
         if ( bForceNearest || (( 2 * scene.m_nWidthCanvas) > completeX ))
         {   // Canvas spawns more than half the world
            var nLeft  = (-cv.getPixelLeft() / cv.getPixelWidth()) * scene.m_nWidthCanvas;
            var nRight = ((scene.m_Div.clientWidth -cv.getPixelLeft()) / cv.getPixelWidth()) * scene.m_nWidthCanvas;
            var nCount = 0;
            for ( var xTest = ucs[0]-nOversearch*completeX ; xTest <= scene.m_nWidthCanvas+nOversearch*completeX ; xTest += completeX )
            {
               if (bForceNearest)
               {
                  if (Math.abs( lastPoint[0] - xTest) <= completeX / 2)
                  {
                     ucs[0] = xTest;
                     ucs.m_nIndex = nCount;
                     break;
                  }
               }
               else
               {
                  if ( ( xTest > nLeft ) && ( xTest < nRight ) )
                  {                                                  // search for entity in viewport  
                     ucs[0] = xTest;
                     ucs.m_nIndex = nCount;
                     break;
                  }
               }
               if (( lastPoint != undefined ) && ( Math.abs( lastPoint[0] - xTest) < completeX / 2 ))
                  ucs[0] = xTest;
                  
               nCount++;
            }
         }
       }
      if ( lastPoint != undefined )
         ucs.m_bIsNearest = (Math.abs( lastPoint[0] - ucs[0]) <= completeX / 2 );
      
      // do point clipping and set the visible state.........................//
      var x, y;         
      ucs.m_bVisible = ( ( (x = ucs[0]) > 0) && ( (y = ucs[1]) > 0) && 
                        (x < cv.getPixelWidth() ) && 
                        (y < cv.getPixelHeight() ) ) ;
      return ucs;
   };

   scene.GetPointsFromPos = function ( pos, bIncludeNearestOutside, lastPoint )
   {
      // in a geoscene the pos is specified as lon/lat/height, where lon and.//
      // lat are specified in degrees
      var tmp = VBI.MathLib.DegToRad( pos );    // convert to radians........//
      return scene.GetPointsFromGeo( tmp, bIncludeNearestOutside, lastPoint );
   };

   scene.GetPointsFromGeo = function ( lonlat, bIncludeNearestOutside, lastPoint )
   {
      var cv = scene.m_Canvas[0];
      var nLOD = cv.m_nCurrentLOD;
      var tilePixelWidth = scene.m_nWidthCanvas / scene.m_nTilesX;
      var tilePixelHeight = scene.m_nHeightCanvas / scene.m_nTilesY;

      var nMaxLODTiles = (1 << nLOD);

      // normalize complete dimension on current LOD.........................//
      var completeX, completeY;
      var ucs = [ completeX = nMaxLODTiles * tilePixelWidth, completeY = nMaxLODTiles * tilePixelHeight ];
      var ucsList = []; 

      ucs = VBI.MathLib.LonLatToUCS( lonlat, ucs );

      // correct position...................................................//
      ucs[0] = ucs[0] - (cv.m_nCurrentX  * tilePixelWidth );
      ucs[1] = ( completeY - ucs[1]) - (cv.m_nCurrentY  * tilePixelHeight ); 
 
      ucs.m_nIndex = 0;

      // adjust to round world............................................//
      // take the next East World as long as next one is not more outside than current one
      while ((ucs[0] < 0) && ((completeX < cv.getPixelWidth()) || ((ucs[0] + completeX) < ( cv.getPixelWidth() - ucs[0]))))
         ucs[0] += completeX;        
      // take the next West World as long as next one is not more outside than current one
      while ((ucs[0] > completeX ) && ((completeX < cv.getPixelWidth()) || ((completeX - ucs[0] ) < ( ucs[0] - cv.getPixelWidth()))))
         ucs[0] -= completeX;
      var cnt = 0;
      if ( (2 * scene.m_nWidthCanvas) > completeX)
      {   // Canvas spawns more than half the world
         var nStart = bIncludeNearestOutside ? ucs[0] - completeX : ucs[0];
         var nEnd   = bIncludeNearestOutside ? scene.m_nWidthCanvas + completeX : scene.m_nWidthCanvas;
         for ( var x = nStart ; x < nEnd ; x += completeX )
         {
            ucs[0] = x;
            ucsList.push([].concat(ucs));
            ucsList[cnt].m_bVisible = ( ( x > 0) && ( (y = ucs[1]) > 0) && 
                  (x < cv.getPixelWidth() ) && 
                  (y < cv.getPixelHeight() ) ) ;
            cnt ++;
         }
      }
      else
      {
         ucs.m_bVisible = ( ( ( x = ucs[0] ) > 0) && ( (y = ucs[1]) > 0) && 
               (x < cv.getPixelWidth() ) && 
               (y < cv.getPixelHeight() ) ) ;         
         ucsList.push(ucs);
      }
            
      return ucsList;
   };

   // .......................................................................//
   // determine the geoposition from a given pixel point of the zoomed.......//
   // canvas.................................................................//

   scene.GetGeoFromPoint = function ( pt )
   {
      var cv = scene.m_Canvas[0];
      var nLOD = cv.m_nCurrentLOD;

      // in pixel space we are
      var nMaxLODTiles = (1 << nLOD);
      var canvasPixelLeft = pt[0] * scene.m_nWidthCanvas / cv.getPixelWidth();
      var canvasPixelTop =  pt[1] * scene.m_nHeightCanvas / cv.getPixelHeight();

      var tilePixelWidth = scene.m_nWidthCanvas / scene.m_nTilesX;
      var tilePixelHeight = scene.m_nHeightCanvas / scene.m_nTilesY;

      // number of pixels outside............................................//
      var nOutsideX = cv.m_nCurrentX * tilePixelWidth;
      var nOutsideY = cv.m_nCurrentY * tilePixelHeight;

      // in pixel space for the current lod we are at........................//
      var currentX = nOutsideX + canvasPixelLeft;
      var currentY = nOutsideY + canvasPixelTop;

      // complete pixel space................................................//
      var completeX = nMaxLODTiles * tilePixelWidth;
      var completeY = nMaxLODTiles * tilePixelHeight;

      // normalize...........................................................//
      while( currentX < 0 )
         currentX += completeX;
      while( currentY < 0 )
         currentY += completeY;
      while( currentX > completeX )
         currentX -= completeX;
      while( currentY > completeY )
         currentY -= completeY;

      // normalize complete dimension on current LOD.........................//
      var lonlat = [0,0];
      var ucs = [  currentX / completeX * 2.0 - 1.0, currentY / completeY * 2.0 - 1.0 ];

      return VBI.MathLib.UCSToLonLat( ucs, lonlat );
   };
   
   scene.getCanvas = function()
   {
      return scene.m_Canvas[ 0 ];
   };

   // ........................................................................//
   // the following does the killing and genesis of the scene................//

   scene.Remove = function()
   {
      // remove the dom elements.............................................//
      if( scene.m_Div )
      {
         var nJ;
         for( nJ = 0; nJ < scene.m_Canvas.length; ++nJ )
            scene.m_Canvas[nJ].m_Scene = null;

         // remove the blend timer if active.................................//
         if( scene.m_BlendTimer )
         {
             window.clearInterval( scene.m_BlendTimer );
             scene.m_BlendTimer = null;
         }
         
         // unsubscribe events...............................................//
         var oCanvas = scene.m_Canvas[ scene.m_nOverlayIndex ];
         oCanvas.onmousedown = oCanvas.onmouseup = oCanvas.onmousewheel = 
         oCanvas.onclick = oCanvas.ontouchstart = oCanvas.ontouchend = 
         oCanvas.ontouchmove = oCanvas.ontouchcancel = oCanvas.onmousemove = oCanvas.onwheel =
         oCanvas.onmouseout = oCanvas.oncontextmenu = null;

         // remove potential event listeners from document...................//
         scene.SetMoveMode( false );

         // remove all childs of out div.....................................//
         while( scene.m_Div.firstChild ) 
            scene.m_Div.removeChild( scene.m_Div.firstChild );

         // reset div reference..............................................//
         scene.m_Div.parentElement.removeChild( scene.m_Div );
         scene.m_Div = null;

         // free references to canvas elements...............................//
         for( nJ = 0; nJ < scene.m_Canvas.length; ++nJ )
            scene.m_Canvas[nJ] = null;
      }

      if( scene.m_Target )
      {
         while( scene.m_Target.firstChild ) 
            scene.m_Target.removeChild( scene.m_Target.firstChild );
      }
   };

   scene.AddCopyright= function()
   {
      var CopyrightElement = VBI.Utilities.CreateGeoSceneDivCSS(scene.m_Target.id + "-copyright" , "copyright");
      scene.m_Div.appendChild(CopyrightElement);
		scene.m_DivCopyright = CopyrightElement;
      var sCopyright = scene.m_MapLayerStack.GetCopyright();
      if ( sCopyright ){
      	scene.m_DivCopyright.innerHTML = sCopyright;
      }
      else{
      	scene.m_DivCopyright.style.paddingRight = 0;
      	scene.m_DivCopyright.style.paddingLeft = 0;
      }
   };
   
   scene.Awake = function( target, mapmanager, maplayerstack )
   {
      if (!(scene.m_Target = VBI.Utilities.GetDOMElement( target )))
         scene.m_Target = VBI.Utilities.CreateDOMElement( target, "1px", "1px");

      // reuse scene parts...................................................//
      if( scene.m_Div )
      {
         // when the scenes div's parent is still the place holder, then.....//
         // everything is still fine and we can return.......................//
         if( scene.m_Div.parentNode == scene.m_Target )
            return;     

         // the scenes div is already but the parent is no longer the........//
         // placeholder. In this case we add again the div as a child element// 
         scene.m_Target.appendChild( scene.m_Div );
         if ( scene.m_bNavControlVisible && scene.m_NavControl )
        	  	//scene.m_NavControl.Awake( scene, target );
         	scene.m_NavControl.AttachEvents();
         return;
      }

      // assign scene information............................................//
      scene.m_TargetName = target;   

      scene.m_MapManager = typeof mapmanager !== 'undefined' ? mapmanager : VBI.MapManager;
      scene.m_MapLayerStack = typeof maplayerstack !== 'undefined' ? maplayerstack : scene.m_RefMapLayerStack;

      // create the viewport.................................................//
      scene.m_Div = VBI.Utilities.CreateGeoSceneDiv("GeoScene");
      
      // set the div as a child of the target................................//
      scene.m_Target.appendChild(scene.m_Div);

      // canvas dimensions...................................................//
      scene.CalcCanvasWidth = function () { return (Math.floor(scene.m_Div.clientWidth / scene.m_MapManager.m_tileWidth) + scene.m_nCanvasXOversize) * scene.m_MapManager.m_tileWidth; };
      scene.CalcCanvasHeight = function () { return ( Math.floor(scene.m_Div.clientHeight / scene.m_MapManager.m_tileHeight) + scene.m_nCanvasYOversize) * scene.m_MapManager.m_tileHeight; };
      scene.CalcNumTilesX = function () { return scene.CalcCanvasWidth() / scene.m_MapManager.m_tileWidth; };
      scene.CalcNumTilesY = function () { return scene.CalcCanvasHeight() / scene.m_MapManager.m_tileHeight; };

      scene.m_nWidthCanvas = scene.CalcCanvasWidth();
      scene.m_nHeightCanvas = scene.CalcCanvasHeight();
      scene.m_nTilesX = scene.CalcNumTilesX();
      scene.m_nTilesY = scene.CalcNumTilesY();
      scene.m_nMaximalOversizeZoom = Math.min( ( scene.m_nTilesX + scene.m_nCanvasXOversize ) / ( scene.m_nTilesX + 1 ) ,
                                               ( scene.m_nTilesY + scene.m_nCanvasYOversize ) / ( scene.m_nTilesY + 1 ) ) - 1;
      scene.m_nMinimalOversizeZoom = -1;
      scene.m_nMapMovePreLoad = Math.min( scene.m_nMapMovePreLoad , (256*scene.m_nTilesX - scene.m_Div.clientWidth) / 4, (256*scene.m_nTilesY - scene.m_Div.clientHeight) / 4);


      // create the switchable canvases......................................//
      scene.m_Canvas.push(VBI.Utilities.CreateGeoSceneCanvas("MapToggleLayer1", scene.m_nWidthCanvas, scene.m_nHeightCanvas, 2));     // map toggle layer
      scene.m_Canvas.push(VBI.Utilities.CreateGeoSceneCanvas("MapToggleLayer2", scene.m_nWidthCanvas, scene.m_nHeightCanvas, 1));     // map toggle layer
      scene.m_Canvas.push(VBI.Utilities.CreateGeoSceneCanvas("MapObjectLayer", scene.m_nWidthCanvas, scene.m_nHeightCanvas, 3));      // object layer

      for( var nJ = 0; nJ < scene.m_Canvas.length; ++nJ )
      {
         // set the scene reference..........................................//
         scene.m_Canvas[nJ].m_Scene = scene;

         // set current lod..................................................//
         scene.m_Canvas[nJ].m_nCurrentLOD = 2;
         scene.m_Canvas[nJ].m_nCurrentX = 0;
         scene.m_Canvas[nJ].m_nCurrentY = 0;
        
         // set the canvas as a child of the div.............................//
         scene.m_Div.appendChild( scene.m_Canvas[nJ] );
      }

      // append copyright 
      scene.AddCopyright();
      // attach overlay canvas to scene handled events.......................//
      var oCanvas = scene.m_Canvas[ scene.m_nOverlayIndex ];
      if (!scene.m_bIsIDevice && !scene.m_bIsAndroid)
      {
         // for non touch devices............................................//
         oCanvas.onmousedown = scene.processmousedown;
         oCanvas.onmouseup = scene.processmouseup;
         oCanvas.onmousewheel = scene.processmousewheel;
         oCanvas.onwheel = scene.processwheel;
         oCanvas.onmouseout = scene.processmouseout;
         oCanvas.onmousemove = scene.processmousemove;
         oCanvas.onclick = scene.processclick;
         oCanvas.oncontextmenu = scene.processcontextmenu;
      } else
      {
         // for touch devices................................................//
         oCanvas.ontouchstart = scene.ontouchstart;
         oCanvas.ontouchend = scene.ontouchend;
         oCanvas.ontouchmove = scene.ontouchmove;
         oCanvas.ontouchcancel = scene.ontouchcancel;
      }
      
      // awake Navigation Control
      if ( scene.m_bNavControlVisible && scene.m_NavControl ){
    	  scene.m_NavControl.Awake( scene, target );
      }
      
      // now go to StartPosition
      if ( scene.m_MapLayerStack.GetMinLOD() > scene.m_startLOD )
    	  scene.m_startLOD = scene.m_MapLayerStack.GetMinLOD();
      scene.GoToInitialStart();
      
      // request first tiles.................................................//

      // VBI.MapManager.RequestTiles( scene.m_Canvas[0], scene.m_MapLayerStack,
      // 0, 0, scene.m_nTilesX, scene.m_nTilesY, 2 );

      // final init..........................................................//
      // scene.InternalRenderLayer( scene.m_Canvas[ scene.m_nOverlayIndex ],
      // false );
   }; 

   // when a target is already specified, awake the scene to be alive........//
   if( target )
      scene.Awake( target, mapmanager, maplayerstack );

   return scene;
};


