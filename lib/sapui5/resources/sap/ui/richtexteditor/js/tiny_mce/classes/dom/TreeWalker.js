/**
 * TreeWalker.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
tinymce.dom.TreeWalker=
function(s,r){var n=s;function f(n,a,b,c){var d,p;if(n){if(!c&&n[a])return n[a];if(n!=r){d=n[b];if(d)return d;for(p=n.parentNode;p&&p!=r;p=p.parentNode){d=p[b];if(d)return d}}}};this.current=function(){return n};this.next=function(a){return(n=f(n,'firstChild','nextSibling',a))};this.prev=function(a){return(n=f(n,'lastChild','previousSibling',a))}}
;
