/*
Portions of this software are based on a port of components from the OpenMap
com.bbn.openmap.proj.coords Java package. An initial port was initially created
by Patrice G. Cappelaere and included in Community Mapbuilder
(http://svn.codehaus.org/mapbuilder/), which is licensed under the LGPL license
as per http://www.gnu.org/copyleft/lesser.html. OpenMap is licensed under the
following license agreement:


               OpenMap Software License Agreement
               ----------------------------------

This Agreement sets forth the terms and conditions under which
the software known as OpenMap(tm) will be licensed by BBN
Technologies ("BBN") to you ("Licensee"), and by which Derivative 
Works (as hereafter defined) of OpenMap will be licensed by you to BBN.

Definitions:

 "Derivative Work(s)" shall mean any revision, enhancement,
 modification, translation, abridgement, condensation or
 expansion created by Licensee or BBN that is based upon the
 Software or a portion thereof that would be a copyright
 infringement if prepared without the authorization of the
 copyright owners of the Software or portion thereof.

 "OpenMap" shall mean a programmer's toolkit for building map
 based applications as originally created by BBN, and any
 Derivative Works thereof as created by either BBN or Licensee,
 but shall include only those Derivative Works BBN has approved
 for inclusion into, and BBN has integrated into OpenMap.

 "Standard Version" shall mean OpenMap, as originally created by
 BBN.

 "Software" shall mean OpenMap and the Derivative Works created
 by Licensee and the collection of files distributed by the
 Licensee with OpenMap, and the collection of files created
 through textual modifications.

 "Copyright Holder" is whoever is named in the copyright or
 copyrights for the Derivative Works.

 "Licensee" is you, only if you agree to be bound by the terms
 and conditions set forth in this Agreement.

 "Reasonable copying fee" is whatever you can justify on the
 basis of media cost, duplication charges, time of people
 involved.

 "Freely Available" means that no fee is charged for the item
 itself, though there may be fees involved in handling the item.
 It also means that recipients of the item may redistribute it
 under the same conditions that they received it.

1. BBN maintains all rights, title and interest in and to
OpenMap, including all applicable copyrights, trade secrets,
patents and other intellectual rights therein.  Licensee hereby
grants to BBN all right, title and interest into the compilation
of OpenMap.  Licensee shall own all rights, title and interest
into the Derivative Works created by Licensee (subject to the
compilation ownership by BBN).

2. BBN hereby grants to Licensee a royalty free, worldwide right
and license to use, copy, distribute and make Derivative Works of
OpenMap, and sublicensing rights of any of the foregoing in
accordance with the terms and conditions of this Agreement,
provided that you duplicate all of the original copyright notices
and associated disclaimers.

3. Licensee hereby grants to BBN a royalty free, worldwide right
and license to use, copy, distribute and make Derivative Works of
Derivative Works created by Licensee and sublicensing rights of
any of the foregoing.

4. Licensee's right to create Derivative Works in the Software is
subject to Licensee agreement to insert a prominent notice in
each changed file stating how and when you changed that file, and
provided that you do at least ONE of the following:

    a) place your modifications in the Public Domain or otherwise
       make them Freely Available, such as by posting said
       modifications to Usenet or an equivalent medium, or
       placing the modifications on a major archive site and by
       providing your modifications to the Copyright Holder.

    b) use the modified Package only within your corporation or
       organization.

    c) rename any non-standard executables so the names do not
       conflict with standard executables, which must also be
       provided, and provide a separate manual page for each
       non-standard executable that clearly documents how it
       differs from OpenMap.

    d) make other distribution arrangements with the Copyright
       Holder.

5. Licensee may distribute the programs of this Software in
object code or executable form, provided that you do at least ONE
of the following:

    a) distribute an OpenMap version of the executables and
       library files, together with instructions (in the manual
       page or equivalent) on where to get OpenMap.

    b) accompany the distribution with the machine-readable
       source code with your modifications.

    c) accompany any non-standard executables with their
       corresponding OpenMap executables, giving the non-standard
       executables non-standard names, and clearly documenting
       the differences in manual pages (or equivalent), together
       with instructions on where to get OpenMap.

    d) make other distribution arrangements with the Copyright
       Holder.

6. You may charge a reasonable copying fee for any distribution
of this Software.  You may charge any fee you choose for support
of this Software.  You may not charge a fee for this Software
itself.  However, you may distribute this Software in aggregate
with other (possibly commercial) programs as part of a larger
(possibly commercial) software distribution provided that you do
not advertise this Software as a product of your own.

7. The data and images supplied as input to or produced as output
from the Software do not automatically fall under the copyright
of this Software, but belong to whomever generated them, and may
be sold commercially, and may be aggregated with this Software.

8. BBN makes no representation about the suitability of OpenMap
for any purposes.  BBN shall have no duty or requirement to
include any Derivative Works into OpenMap.

9. Each party hereto represents and warrants that they have the
full unrestricted right to grant all rights and licenses granted
to the other party herein.

10. THIS PACKAGE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY
KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING (BUT NOT LIMITED TO)
ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS, AND
WITHOUT ANY WARRANTIES AS TO NONINFRINGEMENT.

11. IN NO EVENT SHALL COPYRIGHT HOLDER BE LIABLE FOR ANY DIRECT,
SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING
FROM LOSS OF USE OF DATA OR PROFITS, WHETHER IN AN ACTION OF
CONTRACT, NEGLIGENCE OR OTHER TORTIOUS CONDUCT, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS PACKAGE.

12. Without limitation of the foregoing, You agree to commit no
act which, directly or indirectly, would violate any U.S. law,
regulation, or treaty, or any other international treaty or
agreement to which the United States adheres or with which the
United States complies, relating to the export or re-export of
any commodities, software, or technical data.
*/
if(window.Proj4js&&!Proj4js.util){Proj4js.util={}}(window.Proj4js?Proj4js.util:window)["MGRS"]=(function(){var b=6;var S='AJSAJS';var c='AFAFAF';var A=65;var I=73;var O=79;var V=86;var Z=90;function f(a,e){e=e||5;return j(L({lat:a.lat,lon:a.lon}),e)}function d(a){var e=U(o(a.toUpperCase()));return[e.left,e.bottom,e.right,e.top]}function g(a){return(a*(Math.PI/180.0))}function r(a){return(180.0*(a/Math.PI))}function L(e){var i=e.lat;var n=e.lon;var a=6378137.0;var t=0.00669438;var u=0.9996;var v;var w;var N,T,C,A,M;var x=g(i);var y=g(n);var z;var B;B=Math.floor((n+180)/6)+1;if(n==180){B=60}if(i>=56.0&&i<64.0&&n>=3.0&&n<12.0){B=32}if(i>=72.0&&i<84.0){if(n>=0.0&&n<9.0)B=31;else if(n>=9.0&&n<21.0)B=33;else if(n>=21.0&&n<33.0)B=35;else if(n>=33.0&&n<42.0)B=37}v=(B-1)*6-180+3;z=g(v);w=(t)/(1-t);N=a/Math.sqrt(1-t*Math.sin(x)*Math.sin(x));T=Math.tan(x)*Math.tan(x);C=w*Math.cos(x)*Math.cos(x);A=Math.cos(x)*(y-z);M=a*((1-t/4-3*t*t/64-5*t*t*t/256)*x-(3*t/8+3*t*t/32+45*t*t*t/1024)*Math.sin(2*x)+(15*t*t/256+45*t*t*t/1024)*Math.sin(4*x)-(35*t*t*t/3072)*Math.sin(6*x));var D=(u*N*(A+(1-T+C)*A*A*A/6.0+(5-18*T+T*T+72*C-58*w)*A*A*A*A*A/120.0)+500000.0);var E=(u*(M+N*Math.tan(x)*(A*A/2+(5-T+9*C+4*C*C)*A*A*A*A/24.0+(61-58*T+T*T+600*C-330*w)*A*A*A*A*A*A/720.0)));if(i<0.0){E+=10000000.0}return{northing:Math.round(E),easting:Math.round(D),zoneNumber:B,zoneLetter:h(i)}}function U(u){var e=u.northing;var i=u.easting;var z=u.zoneLetter;var n=u.zoneNumber;if(n<0||n>60){return null}var t=0.9996;var a=6378137.0;var v=0.00669438;var w;var B=(1-Math.sqrt(1-v))/(1+Math.sqrt(1-v));var N,T,C,R,D,M;var E;var F,G;var x=i-500000.0;var y=e;if(z=='S'){y-=10000000.0}E=(n-1)*6-180+3;w=(v)/(1-v);M=y/t;F=M/(a*(1-v/4-3*v*v/64-5*v*v*v/256));G=F+(3*B/2-27*B*B*B/32)*Math.sin(2*F)+(21*B*B/16-55*B*B*B*B/32)*Math.sin(4*F)+(151*B*B*B/96)*Math.sin(6*F);N=a/Math.sqrt(1-v*Math.sin(G)*Math.sin(G));T=Math.tan(G)*Math.tan(G);C=w*Math.cos(G)*Math.cos(G);R=a*(1-v)/Math.pow(1-v*Math.sin(G)*Math.sin(G),1.5);D=x/(N*t);var H=G-(N*Math.tan(G)/R)*(D*D/2-(5+3*T+10*C-4*C*C-9*w)*D*D*D*D/24+(61+90*T+298*C+45*T*T-252*w-3*C*C)*D*D*D*D*D*D/720);H=r(H);var J=(D-(1+2*T+C)*D*D*D/6+(5-2*C+28*T-3*C*C+8*w+24*T*T)*D*D*D*D*D/120)/Math.cos(G);J=E+r(J);var K;if(u.accuracy){var P=U({northing:u.northing+u.accuracy,easting:u.easting+u.accuracy,zoneLetter:u.zoneLetter,zoneNumber:u.zoneNumber});K={top:P.lat,right:P.lon,bottom:H,left:J}}else{K={lat:H,lon:J}}return K}function h(a){var e='Z';if((84>=a)&&(a>=72))e='X';else if((72>a)&&(a>=64))e='W';else if((64>a)&&(a>=56))e='V';else if((56>a)&&(a>=48))e='U';else if((48>a)&&(a>=40))e='T';else if((40>a)&&(a>=32))e='S';else if((32>a)&&(a>=24))e='R';else if((24>a)&&(a>=16))e='Q';else if((16>a)&&(a>=8))e='P';else if((8>a)&&(a>=0))e='N';else if((0>a)&&(a>=-8))e='M';else if((-8>a)&&(a>=-16))e='L';else if((-16>a)&&(a>=-24))e='K';else if((-24>a)&&(a>=-32))e='J';else if((-32>a)&&(a>=-40))e='H';else if((-40>a)&&(a>=-48))e='G';else if((-48>a)&&(a>=-56))e='F';else if((-56>a)&&(a>=-64))e='E';else if((-64>a)&&(a>=-72))e='D';else if((-72>a)&&(a>=-80))e='C';return e}function j(u,a){var e=""+u.easting,i=""+u.northing;return u.zoneNumber+u.zoneLetter+k(u.easting,u.northing,u.zoneNumber)+e.substr(e.length-5,a)+i.substr(i.length-5,a)}function k(e,n,z){var a=l(z);var i=Math.floor(e/100000);var t=Math.floor(n/100000)%20;return m(i,t,a)}function l(i){var a=i%b;if(a==0)a=b;return a}function m(a,e,i){var n=i-1;var t=S.charCodeAt(n);var u=c.charCodeAt(n);var v=t+a-1;var w=u+e;var x=false;if(v>Z){v=v-Z+A-1;x=true}if(v==I||(t<I&&v>I)||((v>I||t<I)&&x)){v++}if(v==O||(t<O&&v>O)||((v>O||t<O)&&x)){v++;if(v==I){v++}}if(v>Z){v=v-Z+A-1}if(w>V){w=w-V+A-1;x=true}else{x=false}if(((w==I)||((u<I)&&(w>I)))||(((w>I)||(u<I))&&x)){w++}if(((w==O)||((u<O)&&(w>O)))||(((w>O)||(u<O))&&x)){w++;if(w==I){w++}}if(w>V){w=w-V+A-1}var y=String.fromCharCode(v)+String.fromCharCode(w);return y}function o(a){if(a==null||a.length==0){throw("MGRSPoint coverting from nothing")}var e=a.length;var n=null;var t="";var u;var i=0;while(!(/[A-Z]/).test(u=a.charAt(i))){if(i>=2){throw("MGRSPoint bad conversion from: "+a)}t+=u;i++}var z=parseInt(t,10);if(i==0||i+3>e){throw("MGRSPoint bad conversion from: "+a)}var v=a.charAt(i++);if(v<='A'||v=='B'||v=='Y'||v>='Z'||v=='I'||v=='O'){throw("MGRSPoint zone letter "+v+" not handled: "+a)}n=a.substring(i,i+=2);var w=l(z);var x=p(n.charAt(0),w);var y=q(n.charAt(1),w);while(y<s(v)){y+=2000000}var B=e-i;if(B%2!=0){throw("MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters"+a)}var C=B/2;var D=0.0;var E=0.0;if(C>0){var F=100000.0/Math.pow(10,C);var G=a.substring(i,i+C);D=parseFloat(G)*F;var H=a.substring(i+C);E=parseFloat(H)*F}easting=D+x;northing=E+y;return{easting:easting,northing:northing,zoneLetter:v,zoneNumber:z,accuracy:F}}function p(e,a){var i=S.charCodeAt(a-1);var n=100000.0;var t=false;while(i!=e.charCodeAt(0)){i++;if(i==I)i++;if(i==O)i++;if(i>Z){if(t){throw("Bad character: "+e)}i=A;t=true}n+=100000.0}return n}function q(n,a){if(n>'V'){throw("MGRSPoint given invalid Northing "+n)}var e=c.charCodeAt(a-1);var i=0.0;var t=false;while(e!=n.charCodeAt(0)){e++;if(e==I)e++;if(e==O)e++;if(e>V){if(t){throw("Bad character: "+n)}e=A;t=true}i+=100000.0}return i}function s(z){var n;switch(z){case'C':n=1100000.0;break;case'D':n=2000000.0;break;case'E':n=2800000.0;break;case'F':n=3700000.0;break;case'G':n=4600000.0;break;case'H':n=5500000.0;break;case'J':n=6400000.0;break;case'K':n=7300000.0;break;case'L':n=8200000.0;break;case'M':n=9100000.0;break;case'N':n=0.0;break;case'P':n=800000.0;break;case'Q':n=1700000.0;break;case'R':n=2600000.0;break;case'S':n=3500000.0;break;case'T':n=4400000.0;break;case'U':n=5300000.0;break;case'V':n=6200000.0;break;case'W':n=7000000.0;break;case'X':n=7900000.0;break;default:n=-1.0}if(n>=0.0){return n}else{throw("Invalid zone letter: "+z)}}return{forward:f,inverse:d}})();if(window.Proj4js&&Proj4js.Point){Proj4js.Point.fromMGRS=function(m){var l=Proj4js.util.MGRS.inverse(m);return new Proj4js.Point((l[2]+l[0])/2,(l[3]+l[1])/2)};Proj4js.Point.prototype.toMGRS=function(a){return Proj4js.util.MGRS.forward({lon:this.x,lat:this.y},a)}}
