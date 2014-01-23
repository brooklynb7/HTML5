//...........................................................................//
// mapmanager object.........................................................//
//...........................................................................//

// Author: Ulrich Roegelein

function UnlinkImage( img )
{
   for ( var item = img.m_Prev; item ; item = item.m_Prev ){
      item.m_bOutdated=true;
   }
      
   for ( var item = img.m_Next; item ; item = item.m_Next ){
      item.m_bOutdated=true;
   }
   
   var curPrev = img.m_Prev;
   var curNext = img.m_Next;
   
   if( curPrev != null ) {
      img.m_Prev.m_Next = curNext;
      img.m_Prev = null;
   }
   if( curNext != null ) {
      img.m_Next.m_Prev = curPrev;
      img.m_Next = null;
   }
}

VBI.MapManager = (function () {
   var mapmanager = {};
   mapmanager.vbiclass = "MapManager";

   mapmanager.m_nRequest = 0;
   mapmanager.m_tileWidth = 256;
   mapmanager.m_tileHeight = 256;

   //........................................................................//
   // image is loaded........................................................//

   mapmanager.onAbort = function( event )
   {
      var image = event.srcElement;      
      
      VBI.m_bTrace && VBI.Trace( "onAbort " + image.src  );

      // unlink the image from within the image chain
      UnlinkImage( image );
   };

   mapmanager.onError = function ( event )
   {
      var image = event.srcElement;
      var imageRender = null;

      VBI.m_bTrace && VBI.Trace( "onError " + image.src  );

      // inherit the fillstyle 
      if( image.m_Next != null )
         image.m_Next.m_FillStyle = image.m_FillStyle;

      if( image.m_Prev == null && image.m_Next != null && image.m_Next.complete == true )
         imageRender = image.m_Next;

      // unlink the image from within the image chain
      UnlinkImage( image );

      // when the image is the first in current and would be rendered........//
      if( imageRender != null )
         mapmanager.RenderTile( imageRender );
   };

   mapmanager.onLoad = function (event)
   {
      var image = event.srcElement || event.target;

      VBI.m_bTrace && VBI.Trace( "VBI.MapManager: onLoad  " + image.src  );

      var bChainComplete = true; // i for myself am complete as I am in onLoad.
      for ( var item = image.m_Prev; item != null; item = item.m_Prev)
         bChainComplete &= item.complete;
      for ( var item = image.m_Next; item != null; item = item.m_Next)
         bChainComplete &= item.complete;
      if( !bChainComplete )
      {
         VBI.m_bTrace && VBI.Trace( "VBI.MapManager: onLoad skip due there is a a not yet loaded tile " );
         return;
      }
      mapmanager.RenderTile( image );
   };

   mapmanager.RenderTile = function( image )
   {
      var context = image.m_Target.getContext('2d');
      var nMaxX = nMaxY = ( 1 << context.canvas.m_nCurrentLOD );
      var nCol = (( image.m_nReqX - context.canvas.m_nCurrentX ) % nMaxX + nMaxX) %nMaxX; // double mod for neg.numbers
      if ( nMaxX < image.m_Target.m_Scene.m_nTilesX)
         nCol = image.m_nCol - image.m_nXOrigin + context.canvas.m_nCurrentX;

      var nRow = image.m_nReqY - context.canvas.m_nCurrentY;

      // unlink and return when image request is outdated....................//
      if ( image.m_bOutdated || (nCol < 0) || (nRow < 0) || (nCol >= image.m_numCol ) || (nRow >= image.m_numRow) || (image.m_nLOD != context.canvas.m_nCurrentLOD)) 
      {
         UnlinkImage( image );
   
         VBI.m_bTrace && VBI.Trace( "VBI.MapManager: RenderTile  " + image.src  + " is outdated" );
         //VBI.Trace("Skipping ("+image.m_nLOD+"/"+image.m_nReqX+","+image.m_nReqY+") to ("+nCol+","+nRow+") calculated from ("+context.canvas.m_nCurrentLOD+"/"+context.canvas.m_nCurrentX+","+context.canvas.m_nCurrentY+")\n");
         return;
      }
      // VBI.Trace("Rendering ["+image.m_nReqX+"|"+image.m_nReqY+"] - ("+image.m_nReqX+","+image.m_nReqY+") to ("+nCol+","+nRow+") calculated from ("+context.canvas.m_nCurrentLOD+"/"+context.canvas.m_nCurrentX+","+context.canvas.m_nCurrentY+")\n");

      VBI.m_bTrace && VBI.Trace( "VBI.MapManager: RenderTile  " + image.src  );

      // do regular work.....................................................//
      var canvasWidth = image.m_Target.getPixelWidth();
      var canvasHeight = image.m_Target.getPixelHeight();

      var nWidth = image.m_Target.m_Scene.m_nWidthCanvas;
      var nHeight = image.m_Target.m_Scene.m_nHeightCanvas;

      // size it down to prevent from fragments..............................//
      image.m_Target.setPixelWidth( nWidth );
      image.m_Target.setPixelHeight( nHeight );

      var tilewidth = nWidth / image.m_numCol;
      var tileheight = nHeight / image.m_numRow;
      var left = nCol * tilewidth;
      var top = nRow * tileheight;
      // VBI.m_bTrace && VBI.Trace( "new Tile("+image.m_nReqX+","+image.m_nReqY+") Pos:("+nCol+","+nRow+") Size:("+nWidth+","+nHeight+"), Number:("+image.m_numCol+","+image.m_numRow+")\n");


      // draw chained images in sequence.....................................//
      var imageTemp = image;
      while ( imageTemp.m_Prev != null)
         imageTemp = imageTemp.m_Prev;
      while( imageTemp != null && imageTemp.complete == true )
      {
         imageTemp.onload = null;
         imageTemp.onabort = null;
         imageTemp.onerror = null;
         // optional draw the image background into the canvas...............//
         if( imageTemp.m_FillStyle != null )
         {
            VBI.m_bTrace &&   VBI.Trace( "RenderTile fillRect " + imageTemp.src  );

            var tmpFillStyle = context.fillStyle;
            context.fillStyle = imageTemp.m_FillStyle;
            context.fillRect( left, top, tilewidth, tileheight );
            context.fillStyle = tmpFillStyle;
         }

         // as soon as an image is rendererd set the parent of the next......//
         // to null..........................................................//
         VBI.m_bTrace && VBI.Trace( "RenderTile drawImage " + imageTemp.src  );
         context.globalAlpha = imageTemp.m_Opacity;
         context.drawImage(imageTemp, left, top, tilewidth, tileheight);
         
         if (imageTemp.m_Next != null)
            imageTemp.m_Next.m_Prev = null;
         
         imageTemp = imageTemp.m_Next;
      }
         
      // draw debug information on tile......................................//
      if( VBI.m_bTrace )
      {
         var tmpFillStyle = context.fillStyle;
         context.fillStyle = "#FF0000";
         context.font = "18px Arial";
         context.fillText( image.m_nRequest + "." +image.m_nCount+":"+ image.m_nReqX + "/" + image.m_nReqY + "@("+left+","+top+")", left + 10, top + 30);
         // context.fillText( image.m_nRequest + "." +image.m_nCount+":"+ image.m_Target.m_nCurrentLOD + "/" + image.m_nReqX + "/" + image.m_nReqY + "@("+left+","+top+")", left + 10, top + 30);
         context.fillStyle = tmpFillStyle;
      }

      // size it up again....................................................//
      image.m_Target.setPixelWidth( canvasWidth );
      image.m_Target.setPixelHeight( canvasHeight );

      // raise the changed event.............................................//
      if (image.m_Target.onTileLoaded)
         image.m_Target.onTileLoaded( image );
      context.globalAlpha = 1.0;
   };

   //........................................................................//
   // request the tiles......................................................//

   mapmanager.RequestTiles = function ( targetCanvas, maplayerstack, x, y, nx, ny, leftOffset, topOffset, rightOffset, bottomOffset, lod, bclear )
   { 
      var nCount=0;
      var nMax = ( 1 << lod );
      // VBI.Trace("lod="+lod+",x="+(x+nx/2)+", y="+(y+ny/2)+"["+(x/nMax)+","+(y/nMax)+"]\n");
      // VBI.Trace("Requesting on LOD "+lod+": ["+x+".."+(x+nx-1)+","+y+".."+(y+ny-1)+"]\n");
      if( lod < 0 )  return;
      
      if (bclear)
      {
          var context = targetCanvas.getContext("2d");
          context.fillStyle = 'white';
          context.clearRect( 0, 0, context.canvas.width, context.canvas.height );
   	  }    	  
    	  
      // determine the minmax................................................//
      var maplayerarray = maplayerstack.m_MapLayerArray;

      targetCanvas.m_nRequest = mapmanager.m_nRequest++;

      // store current requested tile information in the canvas..............//
      targetCanvas.m_nCurrentX = x;
      targetCanvas.m_nCurrentY = y;
      targetCanvas.m_nCurrentLOD = lod;

      var ni = nx - leftOffset - rightOffset; // on LOD 0 and 1 there are less tiles
      var nk = ny - topOffset  - bottomOffset;
      
      for( var i = 0; i < ni; ++i )
      {
         for( var  k = 0; k < nk; ++k )
         {
            nCount++;
            var imagePrev = null;
            var fillStyle = null;
            var nReqX = (x + leftOffset + i) % nMax;
            if (nReqX < 0) nReqX = nMax + nReqX;
            var nReqY = y + topOffset + k;
            if ( nReqY < 0 || nReqY >= nMax)
               continue;
            
            // iterate over all map providers................................//
            for (var s = 0; s < maplayerarray.length; ++s)
            {
               var maplayer = maplayerarray[s];
               
               // remember the maplayer fill style...........................//
               // to inherit the style when image chain gets shortened due...//
               // to LOD limits..............................................//

               if( maplayer.fillStyle )
                  fillStyle = maplayer.fillStyle;

               // create the chained list only in the vaild LOD range........//
               if( maplayer.GetMinLOD() > lod )
                  continue;
               if( maplayer.GetMaxLOD() < lod )
                  continue;

               var imageObj = new Image();

               // enhance image object.......................................//
               imageObj.m_nXOrigin  = x;
               imageObj.m_nCol      = i + leftOffset;      // remember column    
               imageObj.m_nRow      = k + topOffset;      // remember row
               imageObj.m_numCol    = nx;   // remember column count
               imageObj.m_numRow    = ny;   // remember row count
               imageObj.m_Target    = targetCanvas;   // canvas to render into
               imageObj.m_nRequest  = targetCanvas.m_nRequest;
               // imageObj.m_MapProvider = maplayer.GetMapProvider();
               imageObj.m_Opacity = maplayer.m_fOpacity;
               imageObj.m_bOutdated = false;
               
               // do image linkage...........................................//
               // this leads to a uplink and downlink chain..................//
               imageObj.m_Prev = imagePrev;
               if (imagePrev != null) 
                  imagePrev.m_Next = imageObj;

               // set the inherited fill style only when image is the chain..//
               // root.......................................................//
               if( imageObj.m_Prev == null )
                  imageObj.m_FillStyle = fillStyle;   

               // this is for round world continuation.......................//
//               var nReqY = (y + topOffset + k) % nMax;
//               if (nReqY < 0) nReqY = nMax + nReqY;
               
               // for debugging purposes only
               imageObj.m_nReqX = nReqX;
               imageObj.m_nReqY = nReqY;
               imageObj.m_nLOD = lod;

               var url = maplayer.GetMapProvider().CombineUrl( nReqX, nReqY, lod );

               // subscribe to events........................................//
               imageObj.onload = mapmanager.onLoad;
               imageObj.onabort = mapmanager.onAbort;
               imageObj.onerror = mapmanager.onError;
               imageObj.src = url;
               imageObj.m_nCount = nCount;

               VBI.m_bTrace && VBI.Trace( "RequestTiles " + url  );

               // remember previous image....................................//
               imagePrev = imageObj;
               // VBI.Trace("Requesting from origin ("+x+","+y+") m_col/row:("+lod+"/"+imageObj.m_nCol+","+imageObj.m_nRow+") m_NumCol/Row:"+imageObj.m_numCol+","+imageObj.m_numRow+")\n");
            }
         }
      }
   };

   return mapmanager;
})();





