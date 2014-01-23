/*******************************************************************************
NAME                            NEW ZEALAND MAP GRID

PURPOSE:	Transforms input longitude and latitude to Easting and
		Northing for the New Zealand Map Grid projection.  The
		longitude and latitude must be in radians.  The Easting
		and Northing values will be returned in meters.


ALGORITHM REFERENCES

1.  Department of Land and Survey Technical Circular 1973/32
      http://www.linz.govt.nz/docs/miscellaneous/nz-map-definition.pdf

2.  OSG Technical Report 4.1
      http://www.linz.govt.nz/docs/miscellaneous/nzmg.pdf


IMPLEMENTATION NOTES

The two references use different symbols for the calculated values. This
implementation uses the variable names similar to the symbols in reference [1].

The alogrithm uses different units for delta latitude and delta longitude.
The delta latitude is assumed to be in units of seconds of arc x 10^-5.
The delta longitude is the usual radians. Look out for these conversions.

The algorithm is described using complex arithmetic. There were three
options:
   * find and use a Javascript library for complex arithmetic
   * write my own complex library
   * expand the complex arithmetic by hand to simple arithmetic

This implementation has expanded the complex multiplication operations
into parallel simple arithmetic operations for the real and imaginary parts.
The imaginary part is way over to the right of the display; this probably
violates every coding standard in the world, but, to me, it makes it much
more obvious what is going on.

The following complex operations are used:
   - addition
   - multiplication
   - division
   - complex number raised to integer power
   - summation

A summary of complex arithmetic operations:
   (from http://en.wikipedia.org/wiki/Complex_arithmetic)
   addition:       (a + bi) + (c + di) = (a + c) + (b + d)i
   subtraction:    (a + bi) - (c + di) = (a - c) + (b - d)i
   multiplication: (a + bi) x (c + di) = (ac - bd) + (bc + ad)i
   division:       (a + bi) / (c + di) = [(ac + bd)/(cc + dd)] + [(bc - ad)/(cc + dd)]i

The algorithm needs to calculate summations of simple and complex numbers. This is
implemented using a for-loop, pre-loading the summed value to zero.

The algorithm needs to calculate theta^2, theta^3, etc while doing a summation.
There are three possible implementations:
   - use Math.pow in the summation loop - except for complex numbers
   - precalculate the values before running the loop
   - calculate theta^n = theta^(n-1) * theta during the loop
This implementation uses the third option for both real and complex arithmetic.

For example
   psi_n = 1;
   sum = 0;
   for (n = 1; n <=6; n++) {
      psi_n1 = psi_n * psi;       // calculate psi^(n+1)
      psi_n = psi_n1;
      sum = sum + A[n] * psi_n;
   }


TEST VECTORS

NZMG E, N:         2487100.638      6751049.719     metres
NZGD49 long, lat:      172.739194       -34.444066  degrees

NZMG E, N:         2486533.395      6077263.661     metres
NZGD49 long, lat:      172.723106       -40.512409  degrees

NZMG E, N:         2216746.425      5388508.765     metres
NZGD49 long, lat:      169.172062       -46.651295  degrees

Note that these test vectors convert from NZMG metres to lat/long referenced
to NZGD49, not the more usual WGS84. The difference is about 70m N/S and about
10m E/W.

These test vectors are provided in reference [1]. Many more test
vectors are available in
   http://www.linz.govt.nz/docs/topography/topographicdata/placenamesdatabase/nznamesmar08.zip
which is a catalog of names on the 260-series maps.


EPSG CODES

NZMG     EPSG:27200
NZGD49   EPSG:4272

http://spatialreference.org/ defines these as
  Proj4js.defs["EPSG:4272"] = "+proj=longlat +ellps=intl +datum=nzgd49 +no_defs ";
  Proj4js.defs["EPSG:27200"] = "+proj=nzmg +lat_0=-41 +lon_0=173 +x_0=2510000 +y_0=6023150 +ellps=intl +datum=nzgd49 +units=m +no_defs ";


LICENSE
  Copyright: Stephen Irons 2008
  Released under terms of the LGPL as per: http://www.gnu.org/copyleft/lesser.html

*******************************************************************************/
Proj4js.Proj.nzmg={iterations:1,init:function(){this.A=new Array();this.A[1]=+0.6399175073;this.A[2]=-0.1358797613;this.A[3]=+0.063294409;this.A[4]=-0.02526853;this.A[5]=+0.0117879;this.A[6]=-0.0055161;this.A[7]=+0.0026906;this.A[8]=-0.001333;this.A[9]=+0.00067;this.A[10]=-0.00034;this.B_re=new Array();this.B_im=new Array();this.B_re[1]=+0.7557853228;this.B_im[1]=0.0;this.B_re[2]=+0.249204646;this.B_im[2]=+0.003371507;this.B_re[3]=-0.001541739;this.B_im[3]=+0.041058560;this.B_re[4]=-0.10162907;this.B_im[4]=+0.01727609;this.B_re[5]=-0.26623489;this.B_im[5]=-0.36249218;this.B_re[6]=-0.6870983;this.B_im[6]=-1.1651967;this.C_re=new Array();this.C_im=new Array();this.C_re[1]=+1.3231270439;this.C_im[1]=0.0;this.C_re[2]=-0.577245789;this.C_im[2]=-0.007809598;this.C_re[3]=+0.508307513;this.C_im[3]=-0.112208952;this.C_re[4]=-0.15094762;this.C_im[4]=+0.18200602;this.C_re[5]=+1.01418179;this.C_im[5]=+1.64497696;this.C_re[6]=+1.9660549;this.C_im[6]=+2.5127645;this.D=new Array();this.D[1]=+1.5627014243;this.D[2]=+0.5185406398;this.D[3]=-0.03333098;this.D[4]=-0.1052906;this.D[5]=-0.0368594;this.D[6]=+0.007317;this.D[7]=+0.01220;this.D[8]=+0.00394;this.D[9]=-0.0013},forward:function(p){var l=p.x;var a=p.y;var d=a-this.lat0;var b=l-this.long0;var c=d/Proj4js.common.SEC_TO_RAD*1E-5;var e=b;var f=1;var g=0;for(var n=1;n<=10;n++){f=f*c;g=g+this.A[n]*f}var t=g;var h=e;var i=1;var j=0;var k;var m;var z=0;var o=0;for(var n=1;n<=6;n++){k=i*t-j*h;m=j*t+i*h;i=k;j=m;z=z+this.B_re[n]*i-this.B_im[n]*j;o=o+this.B_im[n]*i+this.B_re[n]*j}p.x=(o*this.a)+this.x0;p.y=(z*this.a)+this.y0;return p},inverse:function(p){var x=p.x;var y=p.y;var d=x-this.x0;var a=y-this.y0;var z=a/this.a;var b=d/this.a;var c=1;var e=0;var f;var g;var t=0;var h=0;for(var n=1;n<=6;n++){f=c*z-e*b;g=e*z+c*b;c=f;e=g;t=t+this.C_re[n]*c-this.C_im[n]*e;h=h+this.C_im[n]*c+this.C_re[n]*e}for(var i=0;i<this.iterations;i++){var j=t;var k=h;var l;var m;var o=z;var q=b;for(var n=2;n<=6;n++){l=j*t-k*h;m=k*t+j*h;j=l;k=m;o=o+(n-1)*(this.B_re[n]*j-this.B_im[n]*k);q=q+(n-1)*(this.B_im[n]*j+this.B_re[n]*k)}j=1;k=0;var r=this.B_re[1];var s=this.B_im[1];for(var n=2;n<=6;n++){l=j*t-k*h;m=k*t+j*h;j=l;k=m;r=r+n*(this.B_re[n]*j-this.B_im[n]*k);s=s+n*(this.B_im[n]*j+this.B_re[n]*k)}var u=r*r+s*s;t=(o*r+q*s)/u;h=(q*r-o*s)/u}var v=t;var w=h;var A=1;var B=0;for(var n=1;n<=9;n++){A=A*v;B=B+this.D[n]*A}var C=this.lat0+(B*Proj4js.common.SEC_TO_RAD*1E5);var D=this.long0+w;p.x=D;p.y=C;return p}};
