VBI.NavigationControl = function( SuppressedNavControlVisibility ){
	var nc = {};
	nc.scene = null;
	nc.suppressedVisibility = SuppressedNavControlVisibility;
	nc.m_MinLOD = null;
	nc.m_MaxLOD = null;
	nc.m_lengthScrollLine = 94-18;
	nc.m_startScrollPoint = null;
	nc.m_ID = null;
	nc.m_Div = nc.m_Divmapnav = nc.m_Divmapscrollarea = 
		nc.m_Divmapscrollpoint = nc.m_Divmapcursorgrip = 
		nc.m_Divmapcursor = nc.m_Divmapcursorreset = 
		nc.m_Divmapcursorleft = nc.m_Divmapcursortop = 
		nc.m_Divmapcursorright = nc.m_Divmapcursordown = null;
	
   nc.clear = function()
   { 
      // remove references ...........................................//
      nc.scene = null;
      nc.m_Div = nc.m_Divmapnav = nc.m_Divmapscrollarea = 
      	nc.m_Divmapscrollpoint = nc.m_Divmapcursorgrip = 
     		nc.m_Divmapcursor = nc.m_Divmapcursorreset = 
   		nc.m_Divmapcursorleft = nc.m_Divmapcursortop = 
      	nc.m_Divmapcursorright = nc.m_Divmapcursordown = null;
   };

	nc.getId = function( a, b ){
		return b + '-' +  a;
	};

	nc.AttachEvents = function(  ){
		var opacity = 1.0;
		var timerFrequency = 50;
		var timer_mapnav;
		
		// fade handling 
		if ( nc.suppressedVisibility.fade ){
			nc.m_Divmapnav.style.opacity = 1;
		}
		else {
			jQuery( nc.m_Divmapnav ).on("mouseleave", function(){
				opacity = 1.0;
				timer_mapnav = setInterval(function(){
					if ( opacity <= 0.5 ){
						clearInterval(timer_mapnav);
					}
					else{
						opacity -= 0.01;
						nc.m_Divmapnav.style.opacity = opacity;
					}
				}, timerFrequency);
			});
			jQuery( nc.m_Divmapnav ).on("mouseenter", function(){
				clearInterval(timer_mapnav);
				nc.m_Divmapnav.style.opacity = 1;
			});				
		}	// fade handling 
		
		// zoom handling
		if  ( !nc.suppressedVisibility.zoom ){
			if ( nc.suppressedVisibility.move )
				nc.m_Divmapscrollarea.style.top = 10;
			var startScrollPoint = 0;
			nc.m_Divmapscrollpoint.style.top = nc.CalcScrollPointPos( nc.m_lengthScrollLine, startScrollPoint );

			var midpointForZoom = [0,0];

			jQuery(nc.m_Divmapscrollpoint).on("mousedown", function(){
				var currCanvas = nc.scene.getCanvas();
				var rect = nc.scene.m_Div.getBoundingClientRect(); 
				var point = [rect.width / 2 - currCanvas.getPixelLeft(), rect.height / 2 - currCanvas.getPixelTop()];
				midpointForZoom = nc.scene.GetGeoFromPoint( point );
			});

			jQuery(nc.m_Divmapscrollpoint).on("mouseup", function(){
				midpointForZoom = [0,0];
			});


			var tmpSp = 0;
			jQuery(nc.m_Divmapscrollpoint).draggable({ 
				containment: "parent", axis: "y" },{
					drag: function(){
						var scrollPointPos = jQuery(nc.m_Divmapscrollpoint).position().top;
						if(scrollPointPos != tmpSp){
							var zoomlevel = nc.m_MinLOD + ( ( ( nc.m_MaxLOD - nc.m_MinLOD) * ( scrollPointPos - startScrollPoint ) ) / nc.m_lengthScrollLine );
							nc.scene.ZoomToZoomlevel( nc.scene.getCanvas(), midpointForZoom, zoomlevel ); 
						}
						tmpSp = scrollPointPos;
					}
				});
		}	// zoom handling
		
		// move handling
		if  ( !nc.suppressedVisibility.move ){
			var timer_move;
			var tint = 20;
			var dx = 0;
			var dy = 0;
			var bInitDrag = false;
			jQuery( nc.m_Divmapnav ).on("mouseleave", function(){
				bInitDrag = false;
			});
			jQuery(nc.m_Divmapcursorgrip).on("mouseenter", function(){
				jQuery(nc.m_Divmapcursor).css("background-position","-5px 228px");
			}).live("mouseleave", function(){
				jQuery(nc.m_Divmapcursor).css("background-position","-5px 305px");
			});

			var distance = 10;


			jQuery(nc.m_Divmapcursorleft).on("mousedown", function(){
				jQuery(this).css("background-position","-134px 194px");
				timer_move = setInterval(function(){
					nc.scene.MoveMap(distance, 0,false,false,false,false);	
				}, tint);
			}).on("mouseup", function(){
				clearInterval(timer_move);
				jQuery(this).css("background-position","-134px 211px");
			}).on("mouseout", function(){
				clearInterval(timer_move);
				jQuery(this).css("background-position","-134px 228px");
			});

			jQuery(nc.m_Divmapcursorright).on("mousedown", function(){
				jQuery(this).css("background-position","-116px 194px");
				timer_move = setInterval(function(){
					nc.scene.MoveMap( -distance, 0, false,false,false,false);	
				}, tint);
			}).on("mouseup", function(){
				clearInterval(timer_move);
				jQuery(this).css("background-position","-116px 211px");
			}).on("mouseout", function(){
				clearInterval(timer_move);
				jQuery(this).css("background-position","-116px 228px");
			});

			jQuery(nc.m_Divmapcursortop).on("mousedown", function(){
				jQuery(this).css("background-position","-82px 192px");
				timer_move = setInterval(function(){
					nc.scene.MoveMap( 0, distance, false,false,false,false );	
				}, tint);
			}).on("mouseup", function(){
				clearInterval(timer_move);
				jQuery(this).css("background-position","-82px 210px");
			}).on("mouseout", function(){
				clearInterval(timer_move);
				jQuery(this).css("background-position","-82px 228px");
			});

			jQuery(nc.m_Divmapcursordown).on("mousedown", function(){
				jQuery(this).css("background-position","-99px 192px");
				timer_move = setInterval(function(){
					nc.scene.MoveMap( 0, -distance,false,false,false,false);	
				}, tint);
			}).on("mouseup", function(){
				clearInterval(timer_move);
				jQuery(this).css("background-position","-99px 210px");
			}).on("mouseout", function(){
				clearInterval(timer_move);
				jQuery(this).css("background-position","-99px 228px");
			});

			//var cursX = jQuery('#' + nc.getId( 'viz-map-cursor-reset', nc.m_ID ) ).position().left;
			var cursX = 21;	// does not work in Chrome otherwise
			//var cursY = jQuery('#' + nc.getId( 'viz-map-cursor-reset', nc.m_ID ) ).position().top;
			var cursY = 21;	// does not work in Chrome otherwise
			var offsetX, offsetY;
			jQuery(nc.m_Divmapcursorreset).on("mousedown", function(e){
				// change appearance of arrows to inactive
				jQuery(nc.m_Divmapcursorleft).css("background-position","-134px 177px");
				jQuery(nc.m_Divmapcursorright).css("background-position","-116px 177px");
				jQuery(nc.m_Divmapcursordown).css("background-position","-99px 174px");
				jQuery(nc.m_Divmapcursortop).css("background-position","-82px 174px");

				jQuery(this).css("background-position", "-222px 263px");
				offsetX = e.pageX - cursX;
				offsetY = e.pageY - cursY;
				if(timer_move){
					clearInterval(timer_move);
					dx = 0;
					dy = 0;
				}
				bInitDrag = true; 
			}).on("mouseup", function(){
				nc.StopAnimatedMove( timer_move, dx, dy );
				bInitDrag = false; 
			});

			var pX = 0;
			var pY = 0;
			var newPosTop, newPosLeft;
			
			jQuery(nc.m_Divmapcursorreset).draggable({ 
				containment	: "parent",
				revert		: true
			},{drag: function(e, ui){
				if(timer_move){
					clearInterval(timer_move);
					dx = 0;
					dy = 0;
				}
				if ( bInitDrag ){
					var newCursX = jQuery(nc.m_Divmapcursorreset).position().left;
					var newCursY = jQuery(nc.m_Divmapcursorreset).position().top;
					var newMouseX = e.pageX - offsetX;
					var newMouseY = e.pageY - offsetY;
					var currentDeviationLength = parseInt(Math.sqrt(Math.pow(newMouseX - cursX, 2) + Math.pow(newMouseY - cursY, 2)));
					var maxDeviationLength = 17;
					if ( currentDeviationLength > maxDeviationLength ){
						var angle = Math.atan2( newMouseX - cursX, newMouseY - cursY );
						newPosTop = Math.ceil((cursY + (Math.cos( angle ) * maxDeviationLength)));
						newPosLeft = Math.ceil((cursX + (Math.sin( angle ) * maxDeviationLength)));
						ui.position.left = newPosLeft;
						ui.position.top  = newPosTop;
						currentDeviationLength = maxDeviationLength;
					}
					var scaleFactor = currentDeviationLength / maxDeviationLength;
					var newXOffset = -(newCursX - cursX) * scaleFactor;
					var newYOffset = -(newCursY - cursY) * scaleFactor;
					timer_move = setInterval(function(){
						nc.scene.MoveMap( newXOffset, newYOffset, false,false,false,false );
					}, tint);
				}
			}});
			
			jQuery(nc.m_Divmapcursorreset).css("position","");	// does not work in Chrome otherwise

			jQuery(nc.m_Divmapcursorreset).bind('dragstop',   function( ){ 
				nc.StopAnimatedMove( timer_move, dx, dy );
			});
			jQuery(nc.m_Divmapcursorreset).on("dblclick", function( ){
				nc.scene.GoToInitialStart();
			});
			jQuery(nc.m_Divmapnav).on("mouseleave", function( ){
				nc.StopAnimatedMove( timer_move, dx, dy );				
			});
		}	// move handling
	};
	

	nc.AppendDiv = function(  )
	{
		var oResourceBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.vbm");
		var sTooltipArrows = oResourceBundle.getText("NAVCTL_TITLE_MOVE_ARROWS");
		var sTooltipZoom = oResourceBundle.getText("NAVCTL_TITLE_ZOOM", [0]);
		sTooltipZoom = sTooltipZoom.substr(0, sTooltipZoom.search(/[0-9]/) );

		// create the divs
		nc.m_Divmapnav = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-nav', nc.m_ID ), 'viz-map-nav' );
		nc.m_Divmapcursor = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-cursor', nc.m_ID ), 'viz-map-cursor' );
		nc.m_Divmapscrollarea = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-scrollarea', nc.m_ID ), 'viz-map-scrollarea' );
		nc.m_Divmapcursorgrip = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-cursor-grip', nc.m_ID ), 'viz-map-cursor-grip' );
		var mapcursormiddle = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-cursor-middle', nc.m_ID ), 'viz-map-cursor-middle' );
		var mapscrolllineupperending = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-scrolllineupperending', nc.m_ID ), 'viz-map-scrolllineupperending' );
		var mapscrollline = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-scrollline', nc.m_ID ), 'viz-map-scrollline' );
		var mapscrolllinelowerending = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-scrolllinelowerending', nc.m_ID ), 'viz-map-scrolllinelowerending' );
		nc.m_Divmapscrollpoint = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-scrollpoint', nc.m_ID ), 'viz-map-scrollpoint', sTooltipZoom );
		nc.m_Divmapcursorleft = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-cursor-left', nc.m_ID ), 'viz-map-cursor-left', sTooltipArrows );
		nc.m_Divmapcursorright = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-cursor-right', nc.m_ID ), 'viz-map-cursor-right', sTooltipArrows );
		nc.m_Divmapcursortop = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-cursor-top', nc.m_ID ), 'viz-map-cursor-top', sTooltipArrows );
		nc.m_Divmapcursordown = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-cursor-down', nc.m_ID ), 'viz-map-cursor-down', sTooltipArrows );
		nc.m_Divmapcursorreset = VBI.Utilities.CreateGeoSceneDivCSS( nc.getId( 'viz-map-cursor-reset', nc.m_ID ), 'viz-map-cursor-reset', oResourceBundle.getText("NAVCTL_TITLE_MOVE") );
		
		mapcursormiddle.appendChild( nc.m_Divmapcursorleft );
		mapcursormiddle.appendChild( nc.m_Divmapcursorright );
		mapcursormiddle.appendChild( nc.m_Divmapcursortop );
		mapcursormiddle.appendChild( nc.m_Divmapcursordown );
		mapcursormiddle.appendChild( nc.m_Divmapcursorreset );
		
		nc.m_Divmapcursorgrip.appendChild( mapcursormiddle );
		
		nc.m_Divmapscrollarea.appendChild( mapscrolllineupperending ); 
		nc.m_Divmapscrollarea.appendChild( mapscrollline );
		nc.m_Divmapscrollarea.appendChild( mapscrolllinelowerending );
		nc.m_Divmapscrollarea.appendChild( nc.m_Divmapscrollpoint );

		if ( !nc.suppressedVisibility.move ){
			nc.m_Divmapnav.appendChild( nc.m_Divmapcursor );
			nc.m_Divmapnav.appendChild( nc.m_Divmapcursorgrip );
		}
		if ( !nc.suppressedVisibility.zoom ){
			nc.m_Divmapnav.appendChild( nc.m_Divmapscrollarea );
		}
		
		nc.scene.m_Div.appendChild( nc.m_Divmapnav );
	};
	
	nc.Awake = function( scene, target ){
		nc.scene = scene;
		nc.m_MinLOD = nc.scene.GetMinLOD();
		nc.m_MaxLOD = nc.scene.GetMaxLOD();
		var l_vbiObj = jQuery.sap.byId( target );
		nc.m_ID = jQuery(l_vbiObj).attr('id');
		
      nc.AppendDiv();
      nc.AttachEvents();
		
		nc.m_startScrollPoint = 0;

	};
	nc.AdjustScrollPoint = function( lod ){
		if ( lod )
		{
			var currentScrollPointPos = ( ( nc.m_lengthScrollLine * ( lod - nc.m_MinLOD ) ) /  ( nc.m_MaxLOD - nc.m_MinLOD ) ) + nc.m_startScrollPoint;
			jQuery(nc.m_Divmapscrollpoint).css('top', currentScrollPointPos + 'px');
		}
		else{
			var currentZoomLevel = nc.scene.GetCurrentZoomlevel();
			var currentScrollPointPos = ( ( nc.m_lengthScrollLine * ( currentZoomLevel - nc.m_MinLOD ) ) /  ( nc.m_MaxLOD - nc.m_MinLOD ) ) + nc.m_startScrollPoint;
			jQuery(nc.m_Divmapscrollpoint).css('top', currentScrollPointPos + 'px');
		}
	};
	nc.CalcScrollPointPos = function( lengthScrollLine, startScrollPoint ){
		var currentZoomLevel = nc.scene.GetCurrentZoomlevel();
		var currentScrollPointPos = ( ( lengthScrollLine * ( currentZoomLevel - nc.m_MinLOD ) ) /  ( nc.m_MaxLOD - nc.m_MinLOD ) ) + startScrollPoint;
		return currentScrollPointPos;
	};
	nc.StopAnimatedMove = function( timer, dx, dy ){
		if(timer){
			clearInterval(timer);
			dx = 0;
			dy = 0;
		}
		jQuery(nc.m_Divmapcursorleft).removeAttr("style");
		jQuery(nc.m_Divmapcursorright).removeAttr("style");
		jQuery(nc.m_Divmapcursordown).removeAttr("style");
		jQuery(nc.m_Divmapcursortop).removeAttr("style");
		jQuery(nc.m_Divmapcursorreset).removeAttr("style");
	}
	
	return nc;
};

