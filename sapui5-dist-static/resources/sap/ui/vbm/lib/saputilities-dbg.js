//...........................................................................//
// utilities object..........................................................//

// Author: Ulrich Roegelein

//...........................................................................//
// this module is just a utility collection..................................//

VBI.Utilities = VBI.Utilities || {};


//...........................................................................//
// HTMLCanvasElement element prototyes.......................................//

HTMLCanvasElement.prototype.getPixelWidth = function() 
{ 
   if( this.style.pixelWidth !== undefined )
      return this.style.pixelWidth;

   return parseInt( this.style.width );   // due to ff 
};

HTMLCanvasElement.prototype.getPixelHeight = function() 
{ 
   if( this.style.pixelHeight !== undefined )
      return this.style.pixelHeight;

   return parseInt( this.style.height );  // due to ff 
};

HTMLCanvasElement.prototype.getPixelLeft = function() 
{ 
   if( this.style.pixelLeft !== undefined )
      return this.style.pixelLeft; 

   return parseInt( this.style.left );    // due to ff 
};

HTMLCanvasElement.prototype.getPixelTop = function() 
{
   if( this.style.pixelTop !== undefined )
      return this.style.pixelTop; 

   return parseInt( this.style.top );     // due to ff 
};

HTMLCanvasElement.prototype.setPixelWidth = function( val ) 
{ 
   (this.style.pixelWidth !== undefined) ? ( this.style.pixelWidth = val) : ( this.style.width = val + 'px' ); 
};

HTMLCanvasElement.prototype.setPixelHeight = function( val ) 
{ 
   (this.style.pixelHeight !== undefined) ? ( this.style.pixelHeight = val) : ( this.style.height = val + 'px' ); 
};

HTMLCanvasElement.prototype.setPixelLeft = function( val ) 
{ 
   (this.style.pixelLeft !== undefined) ? ( this.style.pixelLeft = val) : ( this.style.left = val + 'px' ); 
};

HTMLCanvasElement.prototype.setPixelTop = function( val ) 
{
   (this.style.pixelTop !== undefined) ? ( this.style.pixelTop = val) : ( this.style.top = val + 'px' ); 
};

//...........................................................................//
// create a dummy element....................................................//

VBI.Utilities.CreateWifiObject = function ()
{
   var newElement = document.createElement('object');
   if( !newElement ) return null;

   newElement.classid="CLSID:00100000-2013-0070-2000-651572487E69";
   return newElement;
};

VBI.Utilities.CreateDOMElement = function ( type, id, width, height )
{
    var newElement = document.createElement(type);
    newElement.style.height = width ? width : "1px";
    newElement.style.width = height ? height : "1px";
    newElement.id = id;

    return newElement;
};


VBI.Utilities.GetDOMElement = function (element)
{
    var elements = [];

    for (var i = 0, len = arguments.length; i < len; i++)
    {
        var element = arguments[i];
        if( typeof element == 'string' )
        {
            element = document.getElementById( element );
        }
        if (arguments.length == 1) {
            return element;
        }
        elements.push( element );
    }
    return elements;
};

//...........................................................................//
// create a new DOM element..................................................//

VBI.Utilities.CreateDOMVBIDivElement = function ( id, width, height )
{
    // <div id="myDiv" style="overflow:hidden;position:absolute;left:0px;top:0px;width:300px;height:300px">

    var newElement = document.createElement('div');
    newElement.id = id;
    newElement.style.height = "300x";
    newElement.style.width = "300px";
    newElement.style.overflow = "hidden";
    newElement.style.position = "absolute";
    newElement.style.left = "0px";
    newElement.style.top = "0px";

    return newElement;
};

VBI.Utilities.CreateGeoSceneDiv = function ( id )
{
    var newElement = document.createElement('div');

    newElement.id = id;
    newElement.style.left = "0px";
    newElement.style.top = "0px";
    newElement.style.width = "100%";
    newElement.style.height = "100%";
    newElement.style.position = "relative";
    newElement.style.overflow = "hidden";

    return newElement;
};

VBI.Utilities.CreateGeoSceneCanvas = function ( id, width, height, zindex ) 
{
   var newElement = document.createElement('canvas');
   newElement.id = id;
   newElement.style.left = "0px";
   newElement.style.top = "0px";
   newElement.width = width;
   newElement.height = height;
   newElement.style.width = width ? (width + "px") : "512px";
   newElement.style.height = height ? (height + "px") : "512px";
   newElement.style.position = "absolute";
   newElement.style.zIndex = zindex;
   newElement.className= "VBIGeoSceneCanvas";
   return newElement;
};

VBI.Utilities.CreateGeoSceneDivCSS = function ( id, classname, title  )
{
    var newElement = document.createElement('div');

    newElement.id = id;
    newElement.className = classname;
    if ( title )
   	 newElement.title = title;

    return newElement;
};


VBI.Utilities.CreateDOMImageFromData = function ( data, lcb ) 
{
   // the function will create an image......................................//
   // the lcb is the load callback...........................................//

   var img = document.createElement('img');
   if( lcb )
   {
      img.onload = function()
      {
         if( typeof lcb === 'function' ) 
            lcb( img );
         
         this.onload = null;
      };
   }

   img.src = "data:image;base64," + data;
   return img;
};


//...........................................................................//
// rectangle functions.......................................................//

VBI.Utilities.PtInRect = function( pt, rect )
{
   return ( ( pt[0] > rect[0] ) && ( pt[0] < rect[2] ) &&
            ( pt[1] > rect[1] ) && ( pt[1] < rect[3] ) ) ? true : false;
};

VBI.Utilities.cImg;
VBI.Utilities.GetImagePixelData = function(img)
{
	
	if ( !VBI.Utilities.cImg )
	{
		VBI.Utilities.cImg = document.createElement('canvas');
	}
	VBI.Utilities.cImg.width = img.naturalWidth;
	VBI.Utilities.cImg.height = img.naturalHeight;
	VBI.Utilities.cImg.style.width = (img.naturalWidth + "px");
	VBI.Utilities.cImg.style.height = (img.naturalHeight + "px");
	VBI.Utilities.cImg.style.top = "0px";
	VBI.Utilities.cImg.style.left = "0px";
	VBI.Utilities.cImg.style.position = "absolute";
	var ctx=VBI.Utilities.cImg.getContext("2d");
	ctx.drawImage(img, 0, 0 );
	var imgData=ctx.getImageData(0,0,VBI.Utilities.cImg.width,VBI.Utilities.cImg.height);
	return imgData;

};

VBI.Utilities.pointInPolygon = function( poly, pt )
{
   for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
       ((poly[i][1] <= pt[1] && pt[1] < poly[j][1]) || (poly[j][1] <= pt[1] && pt[1] < poly[i][1]))
       && (pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])
       && (c = !c);
   return c;
};

VBI.Utilities.pointInTriangle2 = function( tri, pt )
{
   var vx0 = tri[2][0] - tri[0][0];    // first plane spanning vector
   var vy0 = tri[2][1] - tri[0][1];
   var vx1 = tri[1][0] - tri[0][0];    // second plane spanning vector
   var vy1 = tri[1][1] - tri[0][1];    
   var vx2 = pt[0]   - tri[0][0];        // vector from points  
   var vy2 = pt[1]   - tri[0][1];
 
   // create cross products
   var d00 = vx0 * vx0 +  vy0 * vy0;
   var d01 = vx0 * vx1 +  vy0 * vy1;
   var d02 = vx0 * vx2 +  vy0 * vy2;
   var d11 = vx1 * vx1 +  vy1 * vy1;
   var d12 = vx1 * vx2 +  vy1 * vy2;
 
   var norm = 1 / (d00 * d11 - d01 * d01);
   var u = (d11 * d02 - d01 * d12) * norm;
   var v = (d00 * d12 - d01 * d02) * norm;
 
   return ((u >= 0) && (v >= 0) && (u + v < 1));
 };

VBI.Utilities.updateBoundRect = function( oArray, rect )
{
   // update bounding box....................................................//
   // using the new array of coords and calculating new values...............//

   var xyz, nCount = oArray.length;
   var minX = rect[0];
   var maxX = rect[2];
   var minY = rect[1];
   var maxY = rect[3];
   for( var nJ = 0; nJ < nCount; ++nJ )
   {
      xyz = oArray[ nJ ];
      if( minX > xyz[0] ) minX = xyz[0];
      if( maxX < xyz[0] ) maxX = xyz[0];
      if( minY > xyz[1] ) minY = xyz[1];
      if( maxY < xyz[1] ) maxY = xyz[1];
   }

   // set the new values.....................................................//
   rect[0] = minX;
   rect[2] = maxX;
   rect[1] = minY;
   rect[3] = maxY;
};

VBI.Utilities.inflateRect = function( rect, val )
{
   // inflate the rectangle..................................................//
   rect[0] -= val;
   rect[1] -= val;
   rect[2] += val;
   rect[3] += val;
};




// calculates the square distance between a point and a line.................//
// x1,y1,x2,y2 are points of the line........................................//
// x3, y3 is the point to be dostant measuresd...............................//

VBI.Utilities.sqDistance = function( x1, y1, x2, y2, x3, y3 )
{
   // vector between points
   var px = x2 - x1;                  
   var py = y2 - y1;

   // squared length of p
   var sqlp = px * px + py * py;    

   var u = ( (x3 - x1) * px + ( y3 - y1 ) * py ) / sqlp;

   // process raise conditions   
   if( u > 1 )     
      u = 1;
   else
   if( u < 0 ) 
      u = 0;

   var dx = x1 + u * px - x3;
   var dy = y1 + u * py - y3;

   return dx * dx + dy * dy;
};


//Returns true if point P inside the triangle with vertices at A, B and C
//representing 2D vectors and points as [x,y]. Based on                        
//http://www.blackpawn.com/texts/pointinpoly/default.html
VBI.Utilities.pointInTriangle = function (P, A, B, C) {
//	Compute vectors        
	function vec(from, to) {  return [to[0] - from[0], to[1] - from[1]];  }
	var v0 = vec(A, C);
	var v1 = vec(A, B);
	var v2 = vec(A, P);
//	Compute dot products
	function dot(u, v) {  return u[0] * v[0] + u[1] * v[1];  }
	var dot00 = dot(v0, v0);
	var dot01 = dot(v0, v1);
	var dot02 = dot(v0, v2);
	var dot11 = dot(v1, v1);
	var dot12 = dot(v1, v2);
//	Compute barycentric coordinates
	var invDenom = 1.0 / (dot00 * dot11 - dot01 * dot01);
	var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
	var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
//	Check if point is in triangle
	return (u >= 0) && (v >= 0) && (u + v < 1);
};

VBI.Utilities.pointInPolygon = function (poly, pt){
   for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
       ((poly[i][1] <= pt[1] && pt[1] < poly[j][1]) || (poly[j][1] <= pt[1] && pt[1] < poly[i][1]))
       && (pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])
       && (c = !c);
   return c;
};

//...........................................................................//
// drawing methods...........................................................//

VBI.Utilities.DrawFrameRect = function( ctx, col, p1, p2, p3, p4 )
{
   ctx.lineWidth = 1;
   ctx.strokeStyle = col;

   if( typeof p1 == 'object' )
      // assume array object.................................................//
      ctx.strokeRect( p1[0], p1[1], p1[2] - p1[0], p1[3] - p1[1] );  
   else
      // assume coordinates..................................................//
      ctx.strokeRect( p1, p2, p3 - p1, p4 - p2 );  
};










