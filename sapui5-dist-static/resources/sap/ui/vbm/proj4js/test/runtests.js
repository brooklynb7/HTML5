var src,dest;
function runTests(){for(var i=0;i<Proj4js.testPoints.length;++i){var t=Proj4js.testPoints[i];var p=new Proj4js.Proj(t.code,Proj4js.bind(showResults,this,t))}}
function cb1(){dest=new Proj4js.Proj("EPSG:2303X",cb2)}
function cb2(a){}
function showResults(t,p){var x=1.0e-2;var l=1.0e-6;var r=document.createElement('tr');var a=document.createElement('td');a.innerHTML=t.code;r.appendChild(a);var a=document.createElement('td');a.innerHTML=p.projName;r.appendChild(a);var b=Proj4js.transform(Proj4js.WGS84,p,new Proj4js.Point(t.ll));if(b){var d=Math.abs(b.x-t.xy[0]);var c=Math.abs(b.y-t.xy[1]);a=document.createElement('td');a.innerHTML="in:"+t.ll[0]+","+t.ll[1];r.appendChild(a);a=document.createElement('td');a.innerHTML="out:"+b.x+","+b.y;r.appendChild(a);a=document.createElement('td');a.innerHTML="dx:"+d+" dy:"+c;if(d>x||c>x)a.style.backgroundColor='red';r.appendChild(a)}else{a=document.createElement('td');a.innerHTML="proj undefined";r.appendChild(a)}var e=Proj4js.transform(p,Proj4js.WGS84,new Proj4js.Point(t.xy));if(e){var d=Math.abs(e.x-t.ll[0]);var c=Math.abs(e.y-t.ll[1]);a=document.createElement('td');a.innerHTML="in:"+t.xy[0]+","+t.xy[1];r.appendChild(a);a=document.createElement('td');a.innerHTML="out:"+e.x+","+e.y;r.appendChild(a);a=document.createElement('td');a.innerHTML="dx:"+d+" dy:"+c;if(d>l||c>l)a.style.backgroundColor='red';r.appendChild(a)}else{a=document.createElement('td');a.innerHTML="proj undefined";r.appendChild(a)}var f=document.getElementById('testResult');f.tBodies[0].appendChild(r)}
;