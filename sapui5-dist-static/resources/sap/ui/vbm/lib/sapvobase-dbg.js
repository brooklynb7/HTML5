//...........................................................................//
// VisualObjects namespace...................................................//

// Author: Ulrich Roegelein


//...........................................................................//
// visual objects are the items that can be placed in a scene................//
// they support full databinding to the visual business datacontext..........//
//...........................................................................//

// jQuery.sap.declare("VBI.VisualObjects.Object");

//...........................................................................//
// vo properties.............................................................//

VBI.NodeProperty = function( dat, name, pnp, ctx )
{
   // a datanode can be bound or not.........................................//
   // in both cases a data node is referenced................................//                  
   var path = null;
   if( !(path = dat[ name ] ))
      path = dat[ name +".bind" ];

   this.m_NPath = path.split(".");           // store the data source path...//
   this.m_Path = path.split(".");            // store the original data path.//
   this.m_PNP = pnp;                         // store the parentnodeproperty.//
   this.m_nCurElement = 0;                   // current element index........//
   this.m_CurElement = null;                 // current element instance.....//

   // determine the real parent node for this node...........................//
   // and the relative path of this node to the parents node.................//            

   // update members.........................................................//
   this.m_DTN = ctx.m_DataTypeProvider.FindTypeNodeFromPath( this.m_Path );

   // determine the real responsible node parent.............................//
   var tmp = this;
   while( tmp = tmp.m_PNP )
   {
      if( ctx.m_DataTypeProvider.isParentOf( tmp.m_DTN, this.m_DTN ) )
      {
         // adjust the path..................................................//
         var nJ, tmppath = tmp.m_DTN.GetPath();
         for( nJ = 0; nJ < tmppath.length; ++nJ )
         {
            if( this.m_NPath[0] == tmppath[nJ] )
               this.m_NPath.splice(0,1);    // remove first
            else                  
               break;   
         }
         break;
      }
   }
   this.m_PNP = tmp;

   //........................................................................//   
   // data change notification...............................................//

   this.NotifyDataChange = function( ctx )
   { 
      // current element instance is lazy determined later, therefore reset..//
      // when data has changed...............................................//
      this.m_CurElement = null;  

      // update members......................................................//
      this.m_DTN = ctx.m_DataTypeProvider.FindTypeNodeFromPath( this.m_Path );
   };

   this.clear = function()
   { 
      // clear the node property.............................................//
      this.m_PNP = null;         // reset parent node property
      this.m_CurElement = null;  // reset current element reference
      this.m_DTN = null;         // reset data type node reference
      this.m_NPath = null;       // reset adjusted node path
      this.m_Path = null;        // reset original node path			
   };

   //........................................................................//
   // helper functions.......................................................//

   this.GetCurrentElement = function( ctx )
   {
      if( this.m_CurElement ) 
         return this.m_CurElement;              // return the cached element.//

      var dn = this.GetCurrentNode( ctx );
      if( !dn ) return null;
      
      // cache the current iterated element..................................//
      return ( this.m_CurElement = dn.m_dataelements[ this.m_nCurElement ] );
   };

   this.GetIndexedElement = function( ctx, idx )
   {
      var dn = this.GetCurrentNode( ctx );
      if( !dn ) return null;
      return dn.m_dataelements[ idx ];
   };

   this.GetCurrentNode = function( ctx )
   {
      var dn;
      if( this.m_PNP )
      {
         // there is a parent, get the right index there.....................//
         var de = this.m_PNP.GetCurrentElement( ctx );
         dn = de.FindNodeFromPathArray( this.m_NPath );
      } else
      {
         // determine the datanode directly..................................//
         dn = ctx.m_DataProvider.FindNodeFromPath( this.m_NPath );
      }
      return dn;
   };

   // this is the selection iterator.........................................//
   // and is just set to be able to iterate over elements....................//

   this.Select = function( idx )
   {
      // reset current element first, determine the current element when.....//
      //  necessary again....................................................//
      this.m_CurElement = null;
      this.m_nCurElement = idx;
   };

      
   this.IsSelected = function( ctx )
   {
      // todo: determine the selection state.................................//
      return false;
   };

   this.SetSelected = function( ctx, bSelect )
   {
      // todo: set the selection state in the current selected item..........// 
      return;
   };

   return this;
};

//...........................................................................//
// bindable attribute object.................................................//

VBI.AttributeProperty = function( dat, name, pnp, ctx )
{
   var val;
   if( val = dat[ name ] )
   {
      // there is no binding
      this.m_Name = name;
      this.m_Value = val;
   } else
   if( val = dat[ name + ".bind" ] )
   {
      this.m_PNP = pnp;      
      this.m_Name = name;
      this.m_RelBind = val.split(".");   // relative binding path............//
      this.m_AbsBind = val.split(".");   // absoulte original binding path...//

      // determine the datatype attribute....................................//
      this.m_DTA = ctx.m_DataTypeProvider.FindTypeAttributeFromPath( this.m_AbsBind );

      // determine the real parent node and the relative the binding path....//
      var tmp = this;
      while( tmp = tmp.m_PNP )
      {
         if( ctx.m_DataTypeProvider.isParentOf( tmp.m_DTN, this.m_DTA ) )
         {
            // adjust the path...............................................//
            var nJ, tmppath = tmp.m_DTN.GetPath();
            for( nJ = 0; nJ < tmppath.length; ++nJ )
            {
               if( this.m_RelBind[0] == tmppath[nJ] )
                  this.m_RelBind.splice(0,1);    // remove first
               else                  
                  break;   
            }
            break;
         }
      }
      this.m_PNP = tmp;
   }
   
   // data change notification...............................................//

   this.NotifyDataChange = function( ctx )
   {
      // data in the datacontext has changed.................................//
      // determine the new datatype attribute when...........................//
      if( this.m_AbsBind )
         this.m_DTA = ctx.m_DataTypeProvider.FindTypeAttributeFromPath( this.m_AbsBind );
   };

   this.clear = function()
   { 
      // clear the attribute properties......................................//
      this.m_PNP = null;            // reset the parent
      this.m_DTA = null;            // reset the type reference
   };

   //........................................................................//
   // data accessors.........................................................//

   this.GetAttributeObject = function( ctx )
   {
      // this can only be called when binding is valid, in this case.........//
      // the data attribute is delivered.....................................//
      if( this.m_RelBind )
      {
         if( this.m_PNP )  // realtive node property
            return this.m_PNP.GetCurrentElement( ctx ).FindAttributeFromPathArray( this.m_RelBind );
         else
            ctx.m_DataProvider.FindTypeAttributeFromPath( this.m_RelBind );
      }
      return null;
   };

   this.GetValueFloat = function( ctx )
   {
      // when this is an explicit property then return it immediately........//
      if( this.m_Value ) 
         return VBI.Types.string2float( this.m_Value );

      if( this.m_RelBind )
      {
         var attrib = this.GetAttributeObject( ctx );
         {
            if( attrib.m_dta.m_Type == VBI.Types.st_float )
               return attrib.m_Value;
            if( attrib.m_dta.m_Type == VBI.Types.st_string )
               return VBI.Types.string2float( attrib.m_Value ) ;
            if( attrib.m_dta.m_Type == VBI.Types.st_long )
               return VBI.Types.long2float( attrib.m_Value );

            // todo: do other conversions here
         }
      };

      return null;
   };

   this.GetValueString = function( ctx )
   {
      // when this is an explicit property then return it immediately........//
      if( this.m_Value ) 
         return this.m_Value;

      if( this.m_RelBind )
      {
         var attrib;
         if( attrib = this.GetAttributeObject( ctx ) )
         {
            if( attrib.m_dta.m_Type == VBI.Types.st_string )
               return attrib.m_Value;
            else
               return attrib.GetStringValue();
         }
      };

      return null;
   };

   this.GetValueLong = function( ctx )
   {
      if( this.m_Value ) 
         VBI.Types.string2long( this.m_Value );

      if( this.m_RelBind )
      {
         var attrib;
         if( attrib = this.GetAttributeObject( ctx ) )
         {
            if( attrib.m_dta.m_Type == VBI.Types.st_long )
               return attrib.m_Value;
            if( attrib.m_dta.m_Type == VBI.Types.st_string )
               return VBI.Types.string2long( attrib.m_Value );
            if( attrib.m_dta.m_Type == VBI.Types.st_float )
               return VBI.Types.float2long( attrib.m_Value );

            // todo: do other conversions here

         }
      };
      
      return null;
   };

   this.GetValueBool = function( ctx )
   {
      if( this.m_Value )
         return VBI.Types.string2bool( this.m_Value );

      if( this.m_RelBind )
      {
         var attrib;
         if( attrib = this.GetAttributeObject( ctx ) )
         {
            if( attrib.m_dta.m_Type == VBI.Types.st_bool )
               return attrib.m_Value;
            if( attrib.m_dta.m_Type == VBI.Types.st_string )
               return VBI.Types.string2bool( attrib.m_Value );

            // todo: do other conversions here

         }
      };
      
      return false;
   };

   this.GetValueVector = function( ctx )
   {
      // when this is an explicit property then return it immediately........//
      if( this.m_Value )
         return VBI.Types.string2vector( this.m_Value );

      if( this.m_RelBind )
      {
         var attrib;
         if( attrib = this.GetAttributeObject( ctx ) )
         {
            if( ( attrib.m_dta.m_Type == VBI.Types.st_vector)  || ( attrib.m_dta.m_Type == VBI.Types.st_vectorarray ) )
               return attrib.m_Value;
            if( attrib.m_dta.m_Type == VBI.Types.st_string )
               return VBI.Types.string2vector( attrib.m_Value );

            // todo: do other conversions here
         }
      }
      
      return null;
   };

   this.GetValueColor = function( ctx )
   {
      // when this is an explicit property then return it immediately........//
      if( this.m_Value )
         return VBI.Types.string2color( this.m_Value );

      if( this.m_RelBind )
      {
         // assume that the data is already a color..........................//
         var attrib;
         if( attrib = this.GetAttributeObject( ctx ) )
         {
            if( ( attrib.m_dta.m_Type == VBI.Types.st_color  ) )
               return attrib.m_Value;
            if( attrib.m_dta.m_Type == VBI.Types.st_string )
               return VBI.Types.string2color( attrib.m_Value );

            // todo: do other conversions here
         }
      }
     
      return null;
   };

   // diagnostics............................................................//
   this.IsBound = function()
   {
      return this.m_RelBind ? true : false;
   };
   
   return this;
};

//...........................................................................//
// visual objects............................................................//

VBI.VisualObjects = function()
{
	var visualobjects = {};
	visualobjects.vbiclass = "VisualObjects";	

   //........................................................................//
   // class factory mapping for objects......................................//

   visualobjects.Factory = 
   {
      "{00100000-2012-0004-B001-64592B8DB964}" : function(){ return new  VBI.VisualObjects.Spot();       },
      "{00100000-2012-0004-B001-64592B8DB965}" : function(){ return new  VBI.VisualObjects.Link();       },
      "{00100000-2012-0004-B001-C46BD7336A1A}" : function(){ return new  VBI.VisualObjects.Route();      },
      "{00100000-2013-0004-B001-7EB3CCC039C4}" : function(){ return new  VBI.VisualObjects.Circle();     }, // circle    
      "{00100000-2013-0004-B001-686F01B57873}" : function(){ return new  VBI.VisualObjects.CircleDist(); }, // distant circle
      "{00100000-2012-0004-B001-383477EA1DEB}" : function(){ return new  VBI.VisualObjects.Pie();        },
      "{00100000-2012-0004-B001-BFED458C3076}" : function(){ return new  VBI.VisualObjects.Box();        },
      "{00100000-2012-0004-B001-F311DE491C77}" : function(){ return new  VBI.VisualObjects.Dummy();      }, // Area
   };

   // class factory instance creation........................................// 
   visualobjects.Factory.CreateInstance = function( clsid )
   {
      return visualobjects.Factory[ clsid ]();
   };

   //........................................................................//
   // base class for visual objects..........................................//
   
   VBI.VisualObjects.Base =
   {
      // vo properties.......................................................//
      m_Props : null,
      m_Scene : null,               // scene backreference...................//

      // bounding box array..................................................//
      m_BB : [],
      m_nHotItem : -1,
      m_nSelectedItem : -1,

      // hittest the bounding box............................................//
      HitTestBoundingBox : function( xy )
      { 
         var tmp, hits = [];
         // returns an array of fitting item indexes.........................//
         // hit testing must be done in the reverese order...................//
         for( var nJ = this.m_BB.length - 1; nJ >= 0; --nJ )
         {
            if( tmp = this.m_BB[ nJ ] )
               if( VBI.Utilities.PtInRect( xy, tmp ) )
                  hits.push( nJ );
         }
         return hits;
      },

      // clear the vo........................................................//
      clear : function()
      { 
         // call the clear on the properties.................................//
         if( this.m_Props )
         {
            for( var nJ = 0; nJ < this.m_Props.length; ++nJ )
               this.m_Props[nJ].clear();
          
            // destroy the props array.......................................//
            this.m_Props = null;
         }

         // reset the backreference..........................................//
         this.m_Scene = null;
      },

      // load the basic properties of a visual object........................//
      load : function( instance, dat, ctx )
      { 
         // non bindable properties
         if( dat.id )
            instance.m_ID = dat.id;

         // load generic properties here.....................................//
         // ...
      },

      //.....................................................................//
      // interface functions.................................................//

      RenderDummyInstance : function( nJ, canvas, dc, pos )
      {
         var scene = canvas.m_Scene;
         var xyz = scene.GetPointFromPos( pos );
         var radius = 10;

         // draw the spot....................................................//
         dc.beginPath();
         dc.arc( xyz[0], xyz[1], radius, 0, 2 * Math.PI, false);
         dc.fillStyle = 'red';
         dc.fill();
         dc.lineWidth = 5;
         dc.strokeStyle = '#003300';
         dc.stroke();
         return;
      },

      Render : function( canvas, dc )
      {
         // do nothing in default implementation.............................//
      },

      NotifyDataChange : function( ctx )
      {
         // iterate through properties and update them due data has changed..//
         if( this.m_Props )
         {
            for( var nJ = 0; nJ < this.m_Props.length; ++nJ )
               this.m_Props[nJ].NotifyDataChange( ctx ); 
         }
      }
   };

   //........................................................................//
   // spot object............................................................//

   VBI.VisualObjects.Spot =  function() 
   {
      this.load = function( dat, ctx )
      {
         // call prototype...................................................//
         Object.getPrototypeOf(this).load( this, dat, ctx ); 

         // load bindable properties.........................................//
         this.m_Props = [];
         this.m_Props.push( this.m_DataSource = new VBI.NodeProperty( dat, 'datasource', null, ctx ) );
         this.m_Props.push( this.m_Pos = new VBI.AttributeProperty( dat, 'pos', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Image = new VBI.AttributeProperty( dat, 'image', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Icon = new VBI.AttributeProperty( dat, 'icon', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Tooltip = new VBI.AttributeProperty( dat, 'tooltip', this.m_DataSource, ctx ) );
      };

      this.HitTest = function( nIndex, nSubIndex, xy, zf, ctx )
      {
         this.m_DataSource.Select( nIndex );

         var image = null;
         var iname = this.m_Image.GetValueString( ctx );

         var alpha = 0;
         image = ctx.GetResources().GetImageBits( iname );
         if( image )
         {
        	  var imageData = image[0];
        	  var imgXY = null;
        	  if ( this.m_nHotItem  == nIndex ) 
        		  imgXY = [Math.round((xy[0] -  this.m_BB[nIndex][nSubIndex][0]) * zf[0]/1.2), Math.round( ( xy[1] - this.m_BB[nIndex][nSubIndex][1] ) * zf[1]/1.2 )];
        	  else
        		  imgXY = [Math.round((xy[0] -  this.m_BB[nIndex][nSubIndex][0]) * zf[0]), Math.round( ( xy[1] - this.m_BB[nIndex][nSubIndex][1] ) * zf[1] )];
        	  alpha = imageData[imgXY[1] * image[1] * 4 + ( imgXY[0] * 4 ) + 3];
          }
          return alpha;
      };

      this.GetHitArray = function( x, y )
      {
         // determine the array of instances that are hit....................//
         // x and y are the canvas relative coordinates......................//
         var hits = [];
         var zf = this.m_Scene.GetCurrentZoomFactors();

         // bounding boxes are defined always in non stretched canvas........//
         // coordinates, therefore transform them............................//
         var xy =[ x / zf[0], y / zf[1] ];

         var tmp, alpha = 0;
         for( var nJ = this.m_BB.length - 1; nJ >= 0 && alpha < 255; --nJ )
         {
            for ( var nK = 0; nK < this.m_BB[ nJ ].length; nK++) 
            if( tmp = this.m_BB[ nJ ][ nK ] )
            {
               if( VBI.Utilities.PtInRect( xy, tmp ) )
               {
                  // hit on bounding box -> now check precisely
                  alpha = this.HitTest( nJ, nK, xy, zf, this.m_Scene.m_Ctx );
                  if( alpha > 0 )
                     hits.push(nJ);
               }
            }
         }

         return hits;
      };
      
      // render the single instance..........................................//
      this.RenderInstance = function( nIndex, canvas, dc, pos, image )
      {
         VBI.m_bTrace && VBI.Trace( "Spot: RenderInstance" );

         if( !image ) return; // when image is not available, return.........//

         var scene = canvas.m_Scene;
         var xyzList = scene.GetPointsFromPos( pos, false );
         this.m_BB[ nIndex ] = [];
         for (var i = 0; i < xyzList.length; i++ )
         {
            xyz = xyzList[i];
            if( xyz.m_bVisible )
            {
               var zf = scene.GetCurrentZoomFactors();
               var left, top;
               var width = image.naturalWidth / zf[0];
               var height = image.naturalHeight / zf[1];
      
               // draw the spot.................................................//
           	   if( this.m_nHotItem == nIndex )
               {
           		   width = Math.round( width * 1.2 );
           		   height = Math.round( height * 1.2 );
           	   }
      
               /* selection must come from datacontext, till then commented out
               /* todo: move code into utilities to autocreate selection state image
               if ( this.m_nSelectedItem == nIndex ){
               	// the following should be commented out when image to switch comes from the backend
               	var dummycanvas = document.createElement('canvas');
               	
               	dummycanvas.width = width;
               	dummycanvas.height = height;
               	dummycanvas.style.width = (width + "px");
               	dummycanvas.style.height = (height + "px");
               	dummycanvas.style.top = "0px";
               	dummycanvas.style.left = "0px";
               	dummycanvas.style.position = "absolute";
               	var dummyctx = dummycanvas.getContext("2d");
               	dummyctx.drawImage(image, 0, 0, width, height );
               	var dummyImage = dummyctx.getImageData( 0, 0, width,  height );
               	var dummyImageData = dummyImage.data;
      
                  // the image is always a 32bbp image, do not override buffer!!
                  var nPixel = dummyImageData.length / 4;   
               	for( var nJ = 0; nJ < nPixel; nJ++ ){
               		if( dummyImageData[nJ*4+3] > 0 ){	// if alpha channel > 0 -> convert RGB
               			for ( var nK = 0; nK < 3; nK++ ){
               				dummyImageData[nJ*4+nK]   = 255 - dummyImageData[nJ*4+nK];
               			}
               		}
               	}
               	dummyctx.putImageData( dummyImage, 0, 0 ); 
               	context.drawImage( dummycanvas, left = xyz[0] - width / 2, top = xyz[1] - height, width,  height );
               }
               else{
               	
               }
               */
        
               dc.drawImage( image, left = xyz[0] - width / 2, top = xyz[1] - height, width,  height );
      
               // store the bounding box as a rectangle as array [left, top, right, bottom]
              // var thisBoundingBox = [ left, top, left + width, top + height ];
               this.m_BB[ nIndex ].push( [ left, top, left + width, top + height ]);
            }
         }
      };

      // render with respect to data binding.................................//
      this.Render = function( canvas, dc )
      {
         // clear bounding boxes.............................................//
		   Object.getPrototypeOf(this).m_BB.length = 0;

         // render the spot data.............................................//
         var scene = canvas.m_Scene;
         var ctx = scene.m_Ctx;

         // determine the binding information................................//
         var node;
         if( node = this.m_DataSource.GetCurrentNode( ctx ) )
         {
            this.m_BB = [];   // clear the array.............................//

            // the element count determines the number of rendered instances.// 
            for( var nJ = 0; nJ < node.m_dataelements.length; ++nJ )
            {
               this.m_DataSource.Select( nJ );

               // render the instance........................................//
               var lonlat = this.m_Pos.GetValueVector( ctx );
               var iname = this.m_Image.GetValueString( ctx );

               // it is possible that the image is not loaded, therefore we..//
               // bind the on load function to the renderascyn function of...//
               // the current scene..........................................//
               var image = ctx.GetResources().GetImage( iname, scene.RenderAsync.bind( scene ) );

               this.RenderInstance( nJ, canvas, dc, lonlat, image );
            }
         } else
         {
            // this is a single instance rendering...........................//
            // todo: do single instance rendering............................//
         }
      };

      this.onmouseout = function( event )
      {
      };

      this.oncontextmenu = function( event )
      {
         // determine the instances that are hit.............................//
         var hits = this.GetHitArray( event.offsetX, event.offsetY );

         // set the hot item.................................................//
         if( hits.length > 0 )
         {
            // check for subscribed action and raise it......................//
            var actions;
            if( actions = this.m_Scene.m_Ctx.m_Actions )
            {
               // check if action is subscribed..............................//
               var action;
               if( action = actions.findAction( "ContextMenu", this.m_Scene, this ) )
                  this.m_Scene.m_Ctx.FireAction( action, this.m_Scene, this, this.m_DataSource.GetIndexedElement( this.m_Scene.m_Ctx, hits[0] ), this.m_Scene.GetEventVPCoordsObj( event ) );

               // prevent from default handling..............................//
               event.preventDefault();
            }
         }

         return hits.length > 0 ? true : false;
      };

      this.onmousemove = function( event )
      {
         // determine the instances that are hit.............................//
         var hits = this.GetHitArray( event.offsetX, event.offsetY );

         // set the hot item.................................................//
         if( hits.length > 0 )
         {
            this.m_Scene.RenderAsync();  // trigger async rendering..........//
            this.m_nHotItem = hits[0];

            // set the tooltip...............................................//
            this.m_DataSource.Select( hits[0] );
            this.m_Scene.SetToolTip( this.m_Tooltip.GetValueString( this.m_Scene.m_Ctx) );
         } else 
         if ( this.m_nHotItem > -1)
         {
            this.m_Scene.RenderAsync();    // trigger async rendering........//
            this.m_nHotItem = -1;
         }

         return hits.length > 0 ? true : false;
      };

      this.onclick = function( event )
      {
         var hits = this.GetHitArray( event.offsetX, event.offsetY );

         // set the hot item and raise click event...........................//
         if( hits.length > 0 )
         {
            this.m_Scene.RenderAsync();  // trigger async rendering..........//
            this.m_nSelectedItem = ( this.m_nSelectedItem == hits[0] ) ? -1 : hits[0];

            // determine the data element of the instance that is hit........//
            // and select it.................................................//
            var ele;
            if( ele = this.m_DataSource.GetIndexedElement( this.m_Scene.m_Ctx, hits[0] ) )
               ele.Select( true );

            // check for subscribed action and fire event....................//
            var actions;
            if( actions = this.m_Scene.m_Ctx.m_Actions )
            {
               var action;
               if( action = actions.findAction( "Click", this.m_Scene, this ) )
                  this.m_Scene.m_Ctx.FireAction( action, this.m_Scene, this, ele, this.m_Scene.GetEventVPCoordsObj( event ) );
            }
         }

         return hits.length > 0 ? true : false;
      };

      this.ontouchend = function( event )
      {
         // this is the analogy to onclick function on mobile devices........//
         // call the click...................................................//
         // due used parameters offsetX, and offsetY are the same............//
         return this.onclick( event );
      };
      
      // return this;      automatically returned
   };
   VBI.VisualObjects.Spot.prototype =  VBI.VisualObjects.Base;


   //........................................................................//
   // link object............................................................//
   
   VBI.VisualObjects.Link = function() 
   {
      this.load = function( dat, ctx )
      {
         // call prototype...................................................//
		   Object.getPrototypeOf(this).load( this, dat, ctx );  

         // load link data...................................................//
      };

      // return this;      automatically returned
   };
   VBI.VisualObjects.Link.prototype =  VBI.VisualObjects.Base;

   //........................................................................//
   // route object...........................................................//

   VBI.VisualObjects.Route = function() 
   {
      this.m_LP = [];                // array of line point arrays............//
   
      this.load = function( dat, ctx )
      {
         // call prototype...................................................//
		   Object.getPrototypeOf(this).load( this, dat, ctx  );  

         // load bindable properties.........................................//
         this.m_Props = [];
         this.m_Props.push( this.m_DataSource = new VBI.NodeProperty( dat, 'datasource', null, ctx ) );
         this.m_Props.push( this.m_PosArray = new VBI.AttributeProperty( dat, 'posarray', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Scale = new VBI.AttributeProperty( dat, 'scale', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_FxDir = new VBI.AttributeProperty( dat, 'fxdir', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_FxSize = new VBI.AttributeProperty( dat, 'fxsize', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Color = new VBI.AttributeProperty( dat, 'color', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Start = new VBI.AttributeProperty( dat, 'start', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_End = new VBI.AttributeProperty( dat, 'end', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Tooltip = new VBI.AttributeProperty( dat, 'tooltip', this.m_DataSource, ctx ) );
         
         this.m_LineWidth = 6;
      };

      this.DrawArrow = function( ctx, a, color, offset)
      {
         if (offset == undefined) 
            offset = 0;
         if( a.length < 3 ) return;
         ctx.beginPath();
         ctx.moveTo( a[0][0] + offset, a[0][1] );
         ctx.lineTo( a[1][0] + offset, a[1][1] );
         ctx.lineTo( a[2][0] + offset, a[2][1] );
         ctx.lineTo( a[0][0] + offset, a[0][1] );
         ctx.fillStyle = color;
         ctx.fill();
      };

      this.CalcArrow = function( scene, posarray, arrowwidth, reverse, result, nHalfWorldDist, lastPoint )
      {
         var nItems = posarray.length/3;

         var dist = 2 * arrowwidth * arrowwidth;   // quad distance
         var nJ, nOffset;                          // counters
         var start, tmp, xyz = [0,0,0];            // positions
         var bFound = false;

         // determine the start point........................................//
         nOffset = reverse ? nItems - 1 : 0;
         tmp = start = scene.GetPointFromPos( [ posarray[ nOffset * 3 ], posarray[ nOffset * 3 + 1 ], 0.0 ], true, lastPoint, lastPoint != undefined  );
         var xDistance;
         var yDistance;
         // iterate dependent on reverse flag................................//
         for( nJ = 1; nJ < nItems; ++nJ )
         {
            nOffset = reverse ? nItems - 1 - nJ : nJ;
            xyz = scene.GetPointFromPos( [ posarray[ nOffset * 3 ], posarray[ nOffset * 3 + 1 ], 0.0 ], true, tmp, true  );
            yDistance = tmp[1] - xyz[1];
            xDistance = tmp[0] - xyz[0];
            if (Math.abs(xDistance) > nHalfWorldDist)
            {
               xyz[0] += (tmp[0] > xyz[0] ? 2 : -2) * nHalfWorldDist;
               xDistance = tmp[0] - xyz[0];
            }
            // when the distance is too small between projected points.......//
            // skip rendering................................................//
            if( ( xDistance * xDistance + yDistance * yDistance) > dist )
            {
               bFound = true; 
               break;
            }
         }
         
         if( !bFound ) return false;   // makes no sense to render an arrow..//

         // calc vector between first points.................................//
         var dx = xyz[0] - start[0];                  
         var dy = xyz[1] - start[1];
         var l = Math.sqrt( dx * dx + dy * dy );      // length
         
         dx = dx/l * arrowwidth;                      // normalize and scale
         dy = dy/l * arrowwidth;     

         // we return the first index to render in the line..................//
         // calc first point for array rendering.............................//

         var ptx = start[0] + dx;    
         var pty = start[1] + dy;
         result.idx = reverse ? nItems - nJ - 1 : nJ;
         result.ta =  [ [ start[0], start[1] ],   // first start pos 
                        [ ptx + dy, pty - dx ],             // top arrow point  
                        [ ptx - dy, pty + dx ] ];           // bottom arrow point  
         result.pt = [ ptx, pty ];                          // base point
         result.pt.m_bVisible = xyz.m_bVisible;
            
         return true;
      };
      
      this.RenderInstance = function( nIndex, canvas, dc, posarray, color, start, end, linewidth  )
      {
         var scene = canvas.m_Scene;
         var sqdistance = linewidth * linewidth / 2;
         var nWorldDist = (scene.m_nWidthCanvas / scene.m_nTilesX) * (1 << scene.m_Canvas[0].m_nCurrentLOD );
         var nHalfWorldDist = nWorldDist / 2;
         //VBI.Trace("width:"+scene.m_nWidthCanvas+",tiles:"+scene.m_nTilesX+",Tilepixelwidth:"+(scene.m_nWidthCanvas/scene.m_nTilesX)+",#tiles="+nHalfWorldDist+"\n")

         // return immediately when there is no position array...............//
         if( !posarray ) 
            return;

         // draw lines between the points....................................//
         var nItems = posarray.length/3;
         if( nItems < 2 ) return;

         var nStart = 1;
         var nEnd = nItems - 1;
         // calculate the triangles at the end...............................//
         var rs = {};
         if( start && this.CalcArrow( scene, posarray, linewidth + 5, false, rs, nHalfWorldDist ) )   {
            nStart = rs.idx;
         }

         var firstPoint = rs.pt ? [ rs.pt[ 0 ], rs.pt[ 1 ] ] : scene.GetPointFromPos( [ posarray[ 0 ], posarray[ 1 ], 0.0 ], true  );
         var lastPoint = firstPoint;
         lastPoint.m_nIndex = 0;
         var renderList = [lastPoint];
         var thisX, lastUsedX;
         var nMaxDistanceToLeft  = firstPoint[0];
         var nMaxDistanceToRight = scene.m_nWidthCanvas - firstPoint[0];
         lastX = lastUsedX = firstPoint[0];
         
         for ( var nJ = nStart; nJ <= nEnd; nJ++ )
         {
            var thisPoint = scene.GetPointFromPos( [ posarray[ nJ * 3 ], posarray[ nJ * 3 + 1 ], 0.0 ], true, lastPoint, true );
            thisX = thisPoint[0];
            
            nMaxDistanceToLeft  = Math.max( nMaxDistanceToLeft,  thisX); 
            nMaxDistanceToRight = Math.max( nMaxDistanceToRight, scene.m_nWidthCanvas - thisX );

            if( ( ( lastUsedX - thisX ) * ( lastUsedX - thisX) +
                ( lastPoint[1] - thisPoint[1] ) * ( lastPoint[1] - thisPoint[1] ) ) >= sqdistance )
            {
               thisPoint.m_nIndex = nJ;
               renderList.push(thisPoint);
               lastUsedX = thisX;
            }
               
            lastPoint = thisPoint;
         }  
         
         var re = {};
         if( end && this.CalcArrow( scene, posarray, linewidth + 5, true, re, nHalfWorldDist, lastPoint ) )
         {
            while (( renderList.length > 0 ) && ( renderList[renderList.length-1].m_nIndex > re.idx ))
               renderList.pop();
            renderList.push( [ re.pt[ 0 ], re.pt[ 1 ] ] );
         }
         
         dc.strokeStyle = color ;
         dc.lineWidth = linewidth;
         dc.lineCap = 'round';
         this.m_BB[nIndex] = [];
         
         for ( var i = -Math.floor( nMaxDistanceToLeft / nWorldDist ); i <= Math.floor( nMaxDistanceToRight / nWorldDist ); i++ )
         {
            var aLinePoints = [];
            
            nOff = i * nWorldDist;
            
            if ( rs.ta != undefined ) {
               this.DrawArrow( dc, rs.ta, color, nOff);
               aLinePoints.m_RS = [ [ rs.ta[0][0] + nOff , rs.ta[0][1] ] , [ rs.ta[1][0] + nOff , rs.ta[1][1] ], [ rs.ta[2][0] + nOff , rs.ta[2][1] ] ];
            }
            dc.beginPath();
            dc.moveTo( firstPoint[0] + nOff , firstPoint[1] );
            aLinePoints.push( [firstPoint[0] + nOff , firstPoint[1] ] );
            for ( var j = 1; j < renderList.length; j++)
            {
               dc.lineTo( renderList[j][0] + nOff, renderList[j][1] );
               aLinePoints.push( [renderList[j][0] + nOff, renderList[j][1] ] );
            }
            dc.stroke();
            
            if ( re.ta != undefined ) {
               this.DrawArrow( dc, re.ta, color, nOff);
               aLinePoints.m_RE = [ [ re.ta[0][0] + nOff , re.ta[0][1] ] , [ re.ta[1][0] + nOff , re.ta[1][1] ], [ re.ta[2][0] + nOff , re.ta[2][1] ] ];
            }
            
            this.m_LP[nIndex].push ( aLinePoints );
            var bounds = [ Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE ];
            VBI.Utilities.updateBoundRect( aLinePoints, bounds );
            VBI.Utilities.inflateRect( bounds, linewidth/2 );

            VBI.Utilities.updateBoundRect( bounds, linewidth/2 );
            if( aLinePoints.m_RS )
               VBI.Utilities.updateBoundRect(  aLinePoints.m_RS, bounds );   // include the start array
            if( aLinePoints.m_RE )
               VBI.Utilities.updateBoundRect(  aLinePoints.m_RE, bounds );   // include the end array
            bounds.m_nIndex = nIndex;      
            this.m_BB[nIndex].push( bounds);
            // draw the bounding box............................................//
            if( VBI.m_bTrace )
               VBI.Utilities.DrawFrameRect( dc, "red", bounds );
         }
      };

      // render with respect to data binding.................................//
      this.Render = function( canvas, dc )
      {
         // clear bounding boxes.............................................//
         Object.getPrototypeOf(this).m_BB.length = 0;

         // render the spot data.............................................//
         var scene = canvas.m_Scene;
         // determine the binding information................................//
         var node;
         if( node = this.m_DataSource.GetCurrentNode( scene.m_Ctx ) )
         {
            this.m_BB = [];   // clear the array.............................//
            this.m_LP = [];   // line points array...........................//    

            // the element count determines the number of rendered instances.// 
            for( var nJ = 0; nJ < node.m_dataelements.length; ++nJ )
            {
               this.m_DataSource.Select( nJ );
               
               // create a subarray on the index and append the minmax struct//
               this.m_LP[ nJ ] = [];
               
               // render the instance........................................//
               var pa = this.m_PosArray.GetValueVector( scene.m_Ctx );
               // this.m_Scale.GetValueVector( scene.m_Ctx );
               // this.m_FxDir.GetValueVector( scene.m_Ctx );
               // this.m_FxSize.GetValueString( scene.m_Ctx );
               var col = this.m_Color.GetValueColor(  scene.m_Ctx ); 
               if ( nJ == this.m_nHotItem )
               	col = '#f0ab00';
               var start = this.m_Start.GetValueLong(  scene.m_Ctx ); 
               var end = this.m_End.GetValueLong(  scene.m_Ctx ); 
               // var tt = this.m_Tooltip.GetValueString(  scene.m_Ctx ); 

               this.RenderInstance( nJ, canvas, dc, pa, col, start, end, this.m_LineWidth ); 
            }
         } else
         {
            // this is a single instance rendering...........................//
            // todo: do single instance rendering............................//
         }
      };
      
      this.HitTest = function( nIndex, nIndex2, ptxy )
      {
         var x = ptxy[0], y = ptxy[1],  x0, y0, x1, y1;

         var linerad = this.m_LineWidth / 2;    // half of the thickness of the line
         var sqlinerad = linerad * linerad;     // square of half of the thickness of the line

         var aLP = this.m_LP[ nIndex ][ nIndex2 ];

      // get first linepoint..............................................//
         x0 = aLP[0][0];      
         y0 = aLP[0][1];
         var nCount = aLP.length;
         for( var nK = 1; nK < nCount; ++nK )
         {
            x1 = aLP[nK][0];
            y1 = aLP[nK][1];
               
            // check if not outside segment box and continue.................//
            if(  !( ( x < ( Math.min( x0, x1 ) - linerad ) ) || // outside left 
                    ( x > ( Math.max( x0, x1 ) + linerad ) ) || // outside right
                    ( y < ( Math.min( y0, y1 ) - linerad ) ) || // outside top 
                    ( y > ( Math.max( y0, y1 ) + linerad ) )    // outside bottom 
                  ) && 
                  ( sqlinerad > VBI.Utilities.sqDistance( x0, y0, x1, y1, x, y ) )
            )
            {
               VBI.m_bTrace && VBI.Trace( "VBI.VisualObjects.Route hit line" + nIndex );
               return true;
            }

            // set positions for the next iteration..........................//
            x0 = x1; 
            y0 = y1;               
         }
         // check the arrows.................................................//
         if     ( aLP.m_RS && VBI.Utilities.pointInTriangle2( aLP.m_RS, ptxy ) ) 
            return true;      // start arrow hit
         return ( aLP.m_RE && VBI.Utilities.pointInTriangle2( aLP.m_RE, ptxy ) ); 
      };

      this.onclick = function( event )
      {
         var alpha = 0;
         var hits=[];

         var scene = event.m_Scene;
         var zf = scene.GetCurrentZoomFactors();

         var xy =[event.offsetX / zf[0], event.offsetY / zf[1]];
         for( var nJ = this.m_BB.length - 1; nJ >= 0 && alpha < 255; --nJ )
         {
           for ( var nK= 0; nK < this.m_BB[nJ].length ; ++nK )
              if( tmp = this.m_BB[ nJ ][nK] )
               {
                  if( VBI.Utilities.PtInRect( xy, tmp ) ){
       	            // hit on bounding box -> now check precisely
       	            alpha = this.HitTest( nJ, xy );
       	            if ( alpha > 0 ){
       		            hits.push( nJ );
       	            }
                  }
               }
         }
         // set the hot item and raise click event...........................//
         if( hits.length > 0 )
         {
            scene.RenderAsync();  // trigger async rendering.................//
            this.m_nSelectedItem = ( this.m_nSelectedItem == hits[0] ) ? -1 : hits[0];

            // check for subscribed action and raise it......................//
            var actions = scene.m_Ctx.m_Actions;
            if( actions )
            {
               var action;
               // check if action is subscribed..............................//
               if( action = actions.findAction( "Click", scene, this ) )
               {
                  // determine the element from which the hit instance was...//
                  // rendered................................................//
                  var ele = null;
                  var node = this.m_DataSource.GetCurrentNode( scene.m_Ctx );
                  if( node )
                  {
                     ele = node.FindElementByIndex( hits[0] );

                     // select the element...................................//
                     ele.Select( true );
                  }
                  if( scene.m_Ctx )
                     scene.m_Ctx.FireAction( action, scene, this, ele, this.m_Scene.GetEventVPCoordsObj( event ) );
               }
            }
         }
      };

      // this is the analogy to onclick function on mobile devices 
      this.ontouchend = function( event )
      {
         var alpha = 0;
         var hits=[];

         var scene = event.m_Scene;
         var zf = scene.GetCurrentZoomFactors();

         var xy =[event.offsetX / zf[0], event.offsetY / zf[1]];
         
         for( var nJ = this.m_BB.length - 1; nJ >= 0 && alpha < 255; --nJ )
         {
            for ( var nK= 0; nK < this.m_BB[nJ].length ; ++nK )
               if( tmp = this.m_BB[ nJ ][ nK ] )
               {
                  if( VBI.Utilities.PtInRect( xy, tmp ) )
                  {
       	            // hit on bounding box -> now check precisely
       	            alpha = this.HitTest( nJ, xy );
       	            if ( alpha > 0 )
       		            hits.push( nJ );
                  }
               }
         }
         // set the hot item and raise click event...........................//
         if( hits.length > 0 )
         {
            scene.RenderAsync();  // trigger async rendering.................//
            this.m_nHotItem = hits[0];
            this.m_nSelectedItem = ( this.m_nSelectedItem == hits[0] ) ? -1 : hits[0];

            // check for subscribed action and raise it......................//
            var actions = scene.m_Ctx.m_Actions;
            if( actions )
            {
               var action;
               // check if action is subscribed..............................//
               if( action = actions.findAction( "Click", scene, this ) )
               {
                  // determine the element from which the hit instance was...//
                  // rendered................................................//
                  var ele = null;
                  var node = this.m_DataSource.GetCurrentNode( scene.m_Ctx );
                  if( node )
                  {
                     ele = node.FindElementByIndex( hits[0] );

                     // select the element...................................//
                     ele.Select( true );
                  }
                  if( scene.m_Ctx )
                     scene.m_Ctx.FireAction( action, scene, this, ele, this.m_Scene.GetEventVPCoordsObj( event ) );
               }
            }
         }
      };
      
      this.onmousemove = function( event )
      {
         var hits=[];
         
         var scene = event.m_Scene;
         var zf = scene.GetCurrentZoomFactors();
         var xy = [event.offsetX / zf[0], event.offsetY / zf[1]];

         for( var nJ = this.m_BB.length - 1; nJ >= 0; --nJ )
         {
            for ( var nK= 0; nK < this.m_BB[nJ].length ; ++nK )
               if( ( tmp = this.m_BB[ nJ ][ nK ] ) && VBI.Utilities.PtInRect( xy, tmp ) )
               {
                  // hit on bounding box, nex is precise check..................//
                  if( this.HitTest( nJ, nK, xy ) )
                     hits.push( nJ );
               }
         }
         // set the hot item.................................................//
         if( hits.length > 0 )
         {
            scene.RenderAsync();  // trigger async rendering.........//
            this.m_nHotItem = hits[0];

            // set the tooltip...............................................//
            this.m_DataSource.Select( hits[0] );
            scene.SetToolTip( this.m_Tooltip.GetValueString( scene.m_Ctx) );
         } else 
         if ( this.m_nHotItem > -1)
         {
            event.m_Scene.RenderAsync();  // trigger async rendering.........//
            this.m_nHotItem = -1;
         }

         return hits.length > 0 ? true : false;
      };
   };
   VBI.VisualObjects.Route.prototype =  VBI.VisualObjects.Base;


   //........................................................................//
   // circle object..........................................................//

   VBI.VisualObjects.Circle = function()
   {
      this.load = function( dat, ctx )
      {
         // call prototype...................................................//
		   Object.getPrototypeOf(this).load( this, dat, ctx );  

         // load circle data.................................................//
         this.m_Props = [];
         this.m_Props.push( this.m_DataSource = new VBI.NodeProperty( dat, 'datasource', null, ctx ) );
         this.m_Props.push( this.m_Pos = new VBI.AttributeProperty( dat, 'pos', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_ColorBorder = new VBI.AttributeProperty( dat, 'colorBorder', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Radius = new VBI.AttributeProperty( dat, 'radius', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Tooltip = new VBI.AttributeProperty( dat, 'tooltip', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Color = new VBI.AttributeProperty( dat, 'color', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Slices = new VBI.AttributeProperty( dat, 'slices', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_FxSize = new VBI.AttributeProperty( dat, 'fxsize', this.m_DataSource, ctx ) );
      };
      // return this;      automatically returned


      // render the single instance..........................................//
      this.RenderInstance = function( nIndex, canvas, dc, pos, color, colorBorder, radius, slices )
      {
         var scene = canvas.m_Scene;
         // correct zoom factor
         var zf = scene.GetCurrentZoomFactors();
         var r = radius / zf[0];

         // get the center point 
         var tmpList = scene.GetPointsFromPos( pos, false );
         for (var i = 0; i< tmpList.length;i++)
         {
            var tmp = tmpList[i];
   
            // fill arc.........................................................// 
            dc.beginPath();
            dc.lineWidth = 1;
            dc.beginPath();
            dc.arc( tmp[0], tmp[1], r, 0 , 2 * Math.PI );
            dc.fillStyle = color;
            dc.fill();
   
            // draw border line.................................................//              
            dc.lineWidth = 1;
            dc.strokeStyle = colorBorder;
            dc.stroke();
         }
      };

      // render with respect to data binding.................................//
      this.Render = function( canvas, dc )
      {
         // clear bounding boxes.............................................//
		   Object.getPrototypeOf(this).m_BB.length = 0;

         // render the spot data.............................................//
         var scene = canvas.m_Scene;
         
         // determine the binding information................................//
         var node;
         if( node = this.m_DataSource.GetCurrentNode( scene.m_Ctx ) )
         {
            // the element count determines the number of rendered instances.// 
            for( var nJ = 0; nJ < node.m_dataelements.length; ++nJ )
            {
               this.m_DataSource.Select( nJ );

               var p = this.m_Pos.GetValueVector( scene.m_Ctx );
               var cb = this.m_ColorBorder.GetValueColor( scene.m_Ctx );
               var r = this.m_Radius.GetValueFloat( scene.m_Ctx );
               // var tt = this.m_Tooltip.GetValueString( scene.m_Ctx );
               var c = this.m_Color.GetValueColor( scene.m_Ctx );
               var s = this.m_Slices.GetValueLong( scene.m_Ctx );
               // var fx = this.m_FxSize.GetValueBool( scene.m_Ctx );

               this.RenderInstance( nJ, canvas, dc, p, c, cb, r, s ); 
            }
         } else
         {
            // this is a single instance rendering...........................//
            // todo: do single instance rendering............................//
         }
      };

   };
   VBI.VisualObjects.Circle.prototype =  VBI.VisualObjects.Base;

   //........................................................................//
   // CircleDist object......................................................//

   VBI.VisualObjects.CircleDist = function() 
   {
      this.load = function( dat, ctx )
      {
         // call prototype...................................................//
		   Object.getPrototypeOf(this).load( this, dat, ctx );

         // load circle data.................................................//
         this.m_Props = [];
         this.m_Props.push( this.m_DataSource = new VBI.NodeProperty( dat, 'datasource', null, ctx ) );
         this.m_Props.push( this.m_Pos = new VBI.AttributeProperty( dat, 'midpoint', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_ColorBorder = new VBI.AttributeProperty( dat, 'colorBorder', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Radius = new VBI.AttributeProperty( dat, 'radius', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Tooltip = new VBI.AttributeProperty( dat, 'tooltip', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Color = new VBI.AttributeProperty( dat, 'color', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Slices = new VBI.AttributeProperty( dat, 'slices', this.m_DataSource, ctx ) );
      };

      // render the single instance..........................................//
      this.RenderInstance = function( nIndex, canvas, dc, pos, color, colorBorder, radius, slices )
      {
         var scene = canvas.m_Scene;

         // determine the positions..........................................//
         // all the math functions deliver radians...........................//
         var data = VBI.MathLib.EquidistantLonLat( VBI.MathLib.DegToRad( pos ), radius, slices );

         dc.beginPath();
   
         // because radians are delivered, GetPointFromGeo must be used......//
         // this accepts radians only........................................//
         var xy; 
         var tmpList = scene.GetPointsFromGeo( data[0], false );
         for ( var i = 0; i < tmpList.length; i++)
         {
            tmp = tmpList[i];
            dc.moveTo(tmp[0], tmp[1]);
            for (var nJ = 1; nJ < data.length; nJ++) 
            {
               xy = scene.GetPointFromGeo( data[nJ], true, tmp, true );
   
               // when the distance is too small between projected points......//
               // skip rendering...............................................//
               if( ( ( tmp[0] - xy[0] ) * ( tmp[0] - xy[0] ) +
                     ( tmp[1] - xy[1] ) * ( tmp[1] - xy[1] ) ) < 5.0 )
                  continue;
   
               dc.lineTo( xy[0], xy[1] );
               tmp = xy;
            }
            dc.closePath();
   
            // set the colors and styles........................................//
            dc.strokeStyle = colorBorder; 
            dc.lineWidth   = 1;
            dc.stroke();         
            
            dc.fillStyle = color;                    
            dc.fill();
         }
      };
      

      // render with respect to data binding.................................//
      this.Render = function( canvas, dc )
      {
         // clear bounding boxes.............................................//
		   Object.getPrototypeOf(this).m_BB.length = 0;

         // get access to scene..............................................//
         var scene = canvas.m_Scene;
         
         // determine the binding information................................//
         var node;
         if( node = this.m_DataSource.GetCurrentNode( scene.m_Ctx ) )
         {
            // the element count determines the number of rendered instances.// 
            for( var nJ = 0; nJ < node.m_dataelements.length; ++nJ )
            {
               this.m_DataSource.Select( nJ );

               var p = this.m_Pos.GetValueVector( scene.m_Ctx );
               var cb = this.m_ColorBorder.GetValueColor( scene.m_Ctx );
               var r = this.m_Radius.GetValueFloat( scene.m_Ctx );
               // var tt = this.m_Tooltip.GetValueString( scene.m_Ctx );
               var c = this.m_Color.GetValueColor( scene.m_Ctx );
               var s = this.m_Slices.GetValueLong( scene.m_Ctx );

               this.RenderInstance( nJ, canvas, dc, p, c, cb, r, s ); 
            }
         } else
         {
            // this is a single instance rendering...........................//
            // todo: do single instance rendering............................//
         }
      };


      // return this;      automatically returned
   };
   VBI.VisualObjects.CircleDist.prototype =  VBI.VisualObjects.Base;

   //........................................................................//
   // pie object.............................................................//

   VBI.VisualObjects.m_AC =        // analytic colors........................//
   [
      "rgba(0,143,211,1.0)",
      "rgba(153,209,1,1.0)",
      "rgba(243,155,2,1.0)",
      "rgba(159,207,236,1.0)",
      "rgba(75,167,7,1.0)",
      "rgba(246,209,51,1.0)",
      "rgba(203,77,44,1.0)",
      "rgba(202,199,186,1.0)",
      "rgba(13,134,156,1.0)",
      "rgba(205,215,46,1.0)",
      "rgba(36,114,48,1.0)",
      "rgba(108,222,220,1.0)",
      "rgba(235,115,0,1.0)",
      "rgba(185,187,209,1.0)",
      "rgba(0,109,211,1.0)",
      "rgba(61,185,127,1.0)",
      "rgba(165,84,148,1.0)",
      "rgba(1,88,43,1.0)",
      "rgba(77,182,239,1.0)",
      "rgba(175,43,23,1.0)",
      "rgba(212,153,18,1.0)",
      "rgba(187,204,210,1.0)",
      "rgba(48,146,13,1.0)",
      "rgba(29,169,193,1.0)",
      "rgba(42,71,201,1.0)",
      "rgba(209,153,194,1.0)",
      "rgba(204,88,38,1.0)",
      "rgba(114,191,68,1.0)",
      "rgba(10,72,157,1.0)",
      "rgba(151,156,163,1.0)",
      "rgba(14,145,144,1.0)",
      "rgba(97,32,154,1.0)" ];

   VBI.VisualObjects.Pie = function() 
   {
      this.load = function( dat, ctx )
      {
         // call prototype...................................................//
         Object.getPrototypeOf(this).load( this, dat, ctx );  

         // load bindable properties.........................................//
         this.m_Props = [];
         this.m_Props.push( this.m_DataSource = new VBI.NodeProperty( dat, 'datasource', null, ctx ) );
         this.m_Props.push( this.m_Series = new VBI.NodeProperty( dat, 'series', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Scale = new VBI.AttributeProperty( dat, 'scale', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Pos = new VBI.AttributeProperty( dat, 'pos', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Values = new VBI.AttributeProperty( dat, 'value', this.m_Series, ctx ) );
         this.m_Props.push( this.m_Texts = new VBI.AttributeProperty( dat, 'text', this.m_Series, ctx ) );
         this.m_Props.push( this.m_Tooltips = new VBI.AttributeProperty( dat, 'tooltip', this.m_Series, ctx ) );
      };

      
      // render the single instance..........................................//
      this.RenderInstance = function( nIndex, canvas, dc, xyz, radius, values, texts, tooltips )
      {
         // calc sum of values...............................................//
         var nSum = 0;
         for( var nJ = 0; nJ < values.length; ++nJ )
            nSum += values[nJ];
         
         var lastPosition = 3 * Math.PI / 2;

         for( var nJ = 0; nJ < values.length; ++nJ ) 
         {
            var gradient = dc.createRadialGradient( xyz[0], xyz[1], 0, xyz[0], xyz[1], radius);
            var col = VBI.VisualObjects.m_AC[ nJ % VBI.VisualObjects.m_AC.length ];
            gradient.addColorStop( 0, col );                        
            gradient.addColorStop( 0.95, col );
            gradient.addColorStop( 1.0, 'rgba(255, 255, 255, 0.0 )' );
            dc.fillStyle = gradient;

            dc.beginPath();
            dc.moveTo( xyz[0], xyz[1]);
            dc.arc( xyz[0], xyz[1], radius, lastPosition, lastPosition +( Math.PI*2*(values[nJ]/nSum) ),false);
            dc.lineTo(xyz[0],xyz[1]);
            dc.fill();
            lastPosition += Math.PI*2*(values[nJ] / nSum);
         }

         // todo: store the boundings
      };

      // render with respect to data binding.................................//
      this.Render = function( canvas, dc )
      {
         // clear bounding boxes.............................................//
         Object.getPrototypeOf(this).m_BB.length = 0;

         // render the spot data.............................................//
         var scene = canvas.m_Scene;
         
         var nData, nSeries;

         // get zoom factors.................................................//
         var zf = scene.GetCurrentZoomFactors();

         if( nData = this.m_DataSource.GetCurrentNode( scene.m_Ctx ) )
            for( var nJ = 0; nJ < nData.m_dataelements.length; ++nJ )
            {
               this.m_DataSource.Select( nJ );
               var aPos  = this.m_Pos.GetValueVector( scene.m_Ctx );
               var aScale= this.m_Scale.GetValueVector( scene.m_Ctx );
               var radius = 16 * aScale[0] / zf[0];
               
               // do clipping...................................................//
               var xyzList = scene.GetPointsFromPos( aPos, true);
               for ( var i = 0; i < xyzList.length; ++i)
               {
                  var xyz = xyzList[i];
                  if ( ( xyz[0]+radius < 0) || ( xyz[0]-radius > scene.m_nWidthCanvas ) || ( xyz[1]+radius < 0 ) || ( xyz[1]-radius > scene.m_nHeightCanvas ) )
                     continue;
                  // select the series item........................................//
                  var aValue = [], aText = [], aTooltip = [];
                  if( nSeries = this.m_Series.GetCurrentNode( scene.m_Ctx ) )
                  for( var nS = 0; nS < nSeries.m_dataelements.length; ++nS )
                  {
                     this.m_Series.Select( nS );
                     aValue.push( this.m_Values.GetValueFloat( scene.m_Ctx ) );
                     aText.push( this.m_Texts.GetValueString( scene.m_Ctx ) );
                     aTooltip.push( this.m_Tooltips.GetValueString( scene.m_Ctx ) );
                  }
      
                  this.RenderInstance( nJ, canvas, dc, xyz, radius, aValue, aText, aTooltip );
               }
            }
      };


      // return this;      automatically returned
   };
   VBI.VisualObjects.Pie.prototype =  VBI.VisualObjects.Base;

   //........................................................................//
   // box object.............................................................//

   VBI.VisualObjects.Box = function() 
   {
      this.load = function( dat, ctx )
      {
         // call prototype...................................................//
		   Object.getPrototypeOf(this).load( this, dat, ctx );  

         // load bindable properties.........................................//
         this.m_Props = [];
         this.m_Props.push( this.m_DataSource = new VBI.NodeProperty( dat, 'datasource', null, ctx ) );
         this.m_Props.push( this.m_Pos = new VBI.AttributeProperty( dat, 'pos', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Scale = new VBI.AttributeProperty( dat, 'scale', this.m_DataSource, ctx ) );
         this.m_Props.push( this.m_Tooltip = new VBI.AttributeProperty( dat, 'tooltip', this.m_Series, ctx ) );
         this.m_Props.push( this.m_Color = new VBI.AttributeProperty( dat, 'color', this.m_DataSource, ctx ) );
      };

      // render the single instance..........................................//
      this.RenderInstance = function( nIndex, canvas, dc, xyz, scale, color )
      {
         var scene = canvas.m_Scene;

         if( !scale ) scale = [ 1.0, 1.0, 1.0 ];   
         if( !color ) color ="#6f6f7a";

         // get the current zoom factors.....................................//
         var zf = scene.GetCurrentZoomFactors();

         // todo: do correct box rendering...................................//            
         var baseSize = 500;
         var bx = baseSize * scale[0] / zf[0];
         var by = baseSize * scale[1] / zf[1];    

         var l =  xyz[0] - bx/2;
         var t =  xyz[1] - by/2;
         var r =  xyz[0] + bx/2;
         var b =  xyz[1] + by/2;
   
         // draw the filled rectangle........................................//
         dc.fillStyle = color;
         dc.fillRect( l, t, bx, by );

         // daw a border around..............................................//
         dc.lineWidth = 1;
         dc.strokeStyle = "red";
         dc.strokeRect( l, t, bx, by );  

         this.m_BB[ nIndex ] = [ l, t, r, b ];     
      };

      // render with respect to data binding.................................//
      this.Render = function( canvas, dc )
      {
         // clear bounding boxes.............................................//
		   Object.getPrototypeOf(this).m_BB.length = 0;

         // render the spot data.............................................//
         var scene = canvas.m_Scene;
         
         var nData;
         if( nData = this.m_DataSource.GetCurrentNode( scene.m_Ctx ) )
         {
            for( var nJ = 0; nJ < nData.m_dataelements.length; ++nJ )
            {
               this.m_DataSource.Select( nJ );
               var aPos  = this.m_Pos.GetValueVector( scene.m_Ctx );

               // do clipping...................................................//
               var xyzList = scene.GetPointsFromPos( aPos, false );
               for (var i=0; i <xyzList.length;i++)
               {
                  xyz = xyzList[i];
                  if( !xyz.m_bVisible )
                     return;
   
                  var aScale  = this.m_Scale.GetValueVector( scene.m_Ctx );
                  var aColor  = this.m_Color.GetValueColor( scene.m_Ctx );
   
                  this.RenderInstance( nJ, canvas, dc, xyz, aScale, aColor );
               }
            }
         } else
         {
            // todo: do single instance rendering
         }
      };


      // return this;      automatically returned
   };
   VBI.VisualObjects.Box.prototype =  VBI.VisualObjects.Base;

   //........................................................................//
   // dummy object...........................................................//

   VBI.VisualObjects.Dummy = function() 
   {
      this.load = function( dat, ctx )
      {
         // call prototype...................................................//
		   Object.getPrototypeOf(this).load( this, dat, ctx );  
      };

      // render the single instance..........................................//
      this.RenderInstance = function( nIndex, canvas, dc, xyz, scale, color )
      {
      };

      // render with respect to data binding.................................//
      this.Render = function( canvas, dc )
      {
      };

      // return this;      automatically returned
   };
   VBI.VisualObjects.Dummy.prototype =  VBI.VisualObjects.Base;

   // return the visual object...............................................//
   return visualobjects;
};   

