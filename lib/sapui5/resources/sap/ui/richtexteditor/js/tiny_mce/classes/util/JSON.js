/**
 * JSON.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(){function serialize(o,q){var i,v,t,n;q=q||'"';if(o==null)return'null';t=typeof o;if(t=='string'){v='\bb\tt\nn\ff\rr\""\'\'\\\\';return q+o.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g,function(a,b){if(q==='"'&&a==="'")return a;i=v.indexOf(b);if(i+1)return'\\'+v.charAt(i+1);a=b.charCodeAt().toString(16);return'\\u'+'0000'.substring(a.length)+a})+q}if(t=='object'){if(o.hasOwnProperty&&Object.prototype.toString.call(o)==='[object Array]'){for(i=0,v='[';i<o.length;i++)v+=(i>0?',':'')+serialize(o[i],q);return v+']'}v='{';for(n in o){if(o.hasOwnProperty(n)){v+=typeof o[n]!='function'?(v.length>1?','+q:q)+n+q+':'+serialize(o[n],q):''}}return v+'}'}return''+o};tinymce.util.JSON={serialize:serialize,parse:function(s){try{return eval('('+s+')')}catch(ex){}}}})();
