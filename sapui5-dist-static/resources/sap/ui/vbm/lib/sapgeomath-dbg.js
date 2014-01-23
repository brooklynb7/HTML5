//...........................................................................//
// math library for geo......................................................//

// Author: Ulrich Roegelein

// !remark!, all arguments work with radians.................................//

VBI.MathLib = (function () {
   var mathlib = {};

   mathlib.min_longitude = -Math.PI;
   mathlib.max_longitude =  Math.PI;
   mathlib.min_latitude = (-85.05112878 * 2 * Math.PI) / 360.0;
   mathlib.max_latitude = (85.05112878 * 2 * Math.PI) / 360.0;
   mathlib.mercator_for_max_latitude       = 3.1415942;
   mathlib.div_mercator_for_max_latitude = (0.5 / mathlib.mercator_for_max_latitude);
   mathlib.div_max_longitude = (1.0 / mathlib.max_longitude);
   mathlib.earthradius = 6371000;

   //.......................................................................//
   // basic transformations.................................................//

   mathlib.DegToRad = function ( lonlat ) 
   {
      return [ lonlat[0] * Math.PI / 180.0, lonlat[1] * Math.PI / 180.0];
   };

   mathlib.RadToDeg = function (lonlat) 
   {
      return [ lonlat[0] * 180.0 / Math.PI, lonlat[1] * 180.0 / Math.PI];
   };
    
   // for mercator projection only..........................................//
   mathlib.LonLatToUCS = function (lonlat, uxy ) 
   {
	   // the original uxy contains the normalization values, store them....//
      var normX = uxy[0];
      var normY = uxy[1];

      var fLongitude = lonlat[0];
      var fLatitude = lonlat[1];

      // round world support -> keep longitude in the range of -pi to pi...//
      if (lonlat[0] < -mathlib.max_longitude || lonlat[0] > mathlib.max_longitude)
         fLongitude = ((lonlat[0] + mathlib.max_longitude) % Math.PI) - mathlib.max_longitude;

      if( fLatitude < mathlib.min_latitude )
         fLatitude = mathlib.min_latitude;
      else
      if( fLatitude > mathlib.max_latitude )
         fLatitude = mathlib.max_latitude;

      // geometry range is 0 to  for longitude -180 to 180.................//
      uxy[0] = fLongitude * mathlib.div_max_longitude;
      uxy[0] = (uxy[0] + 1) * normX * 0.5;

      // geometry range is 0 to normY for latitude -max_latitude to max_latitude using the mercator projection
      var fSinLatitude = Math.sin( fLatitude );
      uxy[1] = (Math.log((1.0 + fSinLatitude) / (1.0 - fSinLatitude)) * mathlib.div_mercator_for_max_latitude);  //scaled to 1
      uxy[1] = (uxy[1] + 1.0) * normY * 0.5;

      return uxy;
   };

   mathlib.UCSToLonLat = function ( uxy, lonlat )
   {
      // uxy must be in the range of [-1,1]..................................//
      lonlat[0] = uxy[0] * Math.PI;                     // range -pi ... pi..// 
      lonlat[1] = Math.atan( mathlib.sinh( -uxy[1] * mathlib.mercator_for_max_latitude ) );
      return lonlat;
   };

   mathlib.sinh = function( val )
   {
      var a = Math.pow( Math.E, val );
      var b = Math.pow( Math.E, -val );
   
      return (a-b)/2;
   };

   mathlib.PositiveLODModulo = function( nVal, nLOD )
   {
      var nNewModulo, nMod = (1 << nLOD);
      return ( (nNewModulo = nVal % nMod) >= 0 ) ? nNewModulo : ( nNewModulo + nMod );
   };

   mathlib.Distance = function( lonlat1, lonlat2 )
   {
      var R = mathlib.earthradius;
      var lat1 = lonlat1[1];
      var lon1 = lonlat1[0];
      var lat2 = lonlat2[1]; 
      var lon2 = lonlat2[0]; 
      var dLat = lat2 - lat1;
      var dLon = lon2 - lon1;

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
               Math.cos(lat1) * Math.cos(lat2) * 
               Math.sin(dLon/2) * Math.sin(dLon/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c;
 
      return d;
   };

   mathlib.EquidistantLonLat = function( lonlatcenter, distance, slices )
   {
      // radians 
      // var angle = distance / mathlib.earthradius      
      var result = [];
      slices = slices || 64;

      var brng, lat2, lon2;
      var angle = distance / mathlib.earthradius;      

      for( var nJ = 0; nJ < slices; nJ++ )
      {
         brng = nJ * 2 * Math.PI / slices;

         lat2 = Math.asin( Math.sin(lonlatcenter[1])*Math.cos(angle) + 
                           Math.cos(lonlatcenter[1])*Math.sin(angle)*Math.cos(brng) );

         lon2 = lonlatcenter[0] +  Math.atan2(Math.sin(brng)*Math.sin(angle)*Math.cos(lonlatcenter[1]), 
                                   Math.cos(angle)-Math.sin(lonlatcenter[1])*Math.sin(lat2));
         // create a lonlat item.............................................//
         var lonlatitem = [ lon2, lat2 ];
         // push the lonlat to the result vector.............................//
         result.push( lonlatitem );
      }

      return result;
   };

   return mathlib;
})();