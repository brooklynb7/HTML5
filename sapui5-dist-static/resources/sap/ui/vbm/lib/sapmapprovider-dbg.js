//...........................................................................//
// mapprovider object........................................................//

// Author: Ulrich Roegelein

VBI.MapProviders = function () {
   var mapproviders = {};
   mapproviders.vbiclass = "MapProviders";
   mapproviders.m_MapProviderArray = [];

   mapproviders.clear = function()
   {
      // clear the sources...................................................//
      for( var nJ = 0; nJ < mapproviders.m_MapProviderArray.length; ++nJ )
         mapproviders.m_MapProviderArray[nJ].clear();

      // clear the array.....................................................//
      mapproviders.m_MapProviderArray = [];
   };

   mapproviders.load = function( dat, ctx )
   {
      // load the json delta data............................................//
      // todo: do more than only set
      if( dat.Set )
      {
         var mp;

         // todo: refine delta loading
         mapproviders.clear();
         // load the mapproviders............................................//
         // todo: support specialized sets and removes.......................//
         if( dat.Set.MapProvider )
         {
            if( jQuery.type( dat.Set.MapProvider ) == 'object' )
            {
               mp = new VBI.MapProvider();
               mp.load( dat.Set.MapProvider );
               mapproviders.Add( mp );
            }  else
            if( jQuery.type( dat.Set.MapProvider ) == 'array' )
            {
               for( var nJ = 0; nJ < dat.Set.MapProvider.length; ++nJ )
               {
                  mp = new VBI.MapProvider();
                  mp.load( dat.Set.MapProvider[nJ] );
                  mapproviders.Add( mp );
               }
            }
         }
      }     
   };

   // add to map provider to array
   mapproviders.Add = function (mapprovider) { this.m_MapProviderArray.push( mapprovider ); };

   // determine the map provider by name.....................................//
   mapproviders.GetMapProviderByName = function( name )
   {
      for( var nJ = 0; nJ < mapproviders.m_MapProviderArray.length; ++nJ )
      {
         if( mapproviders.m_MapProviderArray[nJ].m_Name == name )
            return mapproviders.m_MapProviderArray[nJ];
      }
      return null;
   };

   return mapproviders;
};

//...........................................................................//
// MapProvider namespace.....................................................//

VBI.MapProvider = function( name, description, copyright, tileX, tileY, minLOD, maxLOD, fillStyle )
{
   var mapprovider = {};
   mapprovider.vbiclass = "MapProvider";
   mapprovider.m_SourceArray = [];

   // assign members.........................................................//
   mapprovider.m_Name = name;
   mapprovider.m_Description = description;
   mapprovider.m_Copyright = copyright;
   mapprovider.m_tileX =  typeof tileX !== 'undefined' ? tileX : 256;      
   mapprovider.m_tileY =  typeof tileY !== 'undefined' ? tileY : 256;
   mapprovider.m_maxLOD = typeof maxLOD !== 'undefined' ? maxLOD : 19;
   mapprovider.m_minLOD = typeof minLOD !== 'undefined' ? minLOD : 0;

   // set optional background style of map provider..........................//
   if (fillStyle != null)
      mapprovider.fillStyle = fillStyle;

   mapprovider.clear = function()
   {
      // clear the sources...................................................//
      for( var nJ = 0; nJ < mapprovider.m_SourceArray.length; ++nJ )
         mapprovider.m_SourceArray[nJ].clear();

         // clear the array..................................................//
         mapprovider.m_SourceArray = [];
   };

   mapprovider.load = function( dat )
   {
      // load dataprovider attributes........................................//
      // todo: add additional attributes
      if( dat.name )
         mapprovider.m_Name = dat.name;
      if( dat.description )
         mapprovider.m_Description = dat.description;
      if( dat.copyright )
         mapprovider.m_Copyright = dat.copyright;
      if( dat.tileX )
         mapprovider.m_tileX = dat.tileX;      
      if( dat.tileY )
         mapprovider.m_tileY = dat.tileY;
      if( dat.maxLOD )
         mapprovider.m_maxLOD = dat.maxLOD;
      if( dat.minLOD )
         mapprovider.m_minLOD = dat.minLOD;

      // the map provider has source urls, get them..........................//
      if( dat.Source )
      {
         if( jQuery.type( dat.Source ) == 'object' )
         {
            // load the source when it is an object type
            var source = new VBI.Source( null );
            source.load( dat.Source );
            mapprovider.Add( source );
         } else
         if( jQuery.type( dat.Source ) == 'array' )
         {
            // load multiple sources               
            for( var nJ = 0; nJ < dat.Source.length; ++nJ )
            {
               // load the source when it is an object type
               var source = new VBI.Source( null );
               source.load( dat.Source[ nJ ] );
               mapprovider.Add( source );
            }
         }
      }
   };
   
   // assign functions......................................................//
   mapprovider.Add = function (source) { this.m_SourceArray.push(source); };
   mapprovider.CombineUrl = function( x, y, lod )
   {
      // do load balancing for different sources...........................//

      var nMax = 1 << lod;

      // check levels......................................................//
      if( x < 0 || y < 0 || ( x >=  nMax ) || ( y >= nMax ) )
         return null;
   
      // check and determine size..........................................//
      if( this.m_SourceArray.length == 0 ) 
         return null;

      // do load balancing on server, assuring cache consistency...........//
      return this.m_SourceArray[((y + x * nMax) % this.m_SourceArray.length)].CombineUrl( x, y, lod );
   };

   mapprovider.GetMaxLOD = function()
   {
      return this.m_maxLOD;
   };

   mapprovider.GetMinLOD = function () 
   {
      return this.m_minLOD;
   };

   return mapprovider;
};

//...........................................................................//
// Source namespace..........................................................//

VBI.Source = function( url )
{
   var source = {};
   source.vbiclass = "Source";
   source.m_ID = null;   
   source.m_Url = url;

   source.clear = function( )
   {
   };

   source.load = function( dat )
   {
      if( dat.url )
         source.m_Url = dat.url;
      if( dat.id )
         source.m_ID = dat.id;
   };

   // assign functions......................................................//
   source.CombineUrl = function ( x, y, lod )
   {
      var temp = source.m_Url;

      // replace our placeholders..........................................//
      temp = temp.replace( "{X}", x );
      temp = temp.replace( "{Y}", y );
      temp = temp.replace("{LOD}", lod);
      temp = temp.replace("{QUAD}", this.TileXYToQuadKey( x, y, lod ) );
      temp = temp.replace("{NUMT}", this.TileXYToNumKey(x, y, lod ) );
       
      return temp;
   };

   //.......................................................................//
   // get a quad key for the specified tile.................................//

   source.TileXYToQuadKey = function ( x, y, lod )
   {
      var quadDigits = [];
      for( var i = lod; i > 0; --i ) 
      {
         var digit = '0';
         var mask = 1 << (i - 1);
         if( x & mask ) 
            digit++;

         if( y & mask ) 
         {
            digit++;
            digit++;
         }

         quadDigits.push( digit );
      }
      var quadKey = quadDigits.join("");
      return quadKey;
   };

   //.......................................................................//
   // get a numeric key for the specified tile..............................//

   source.TileXYToNumKey = function( x, y, lod )
   {
      // sum up tiles of prior lod's
      var numKey = 0;
      for( var i = 1; i < lod; ++i ) 
      {
         numKey += (1 << i) * (1 << i);
      }
   
      // add current LOD tiles
      numKey += (y * (1 << lod) + x + 1); // TileX 0 counts!
      return numKey;
   };

   return source;
};



