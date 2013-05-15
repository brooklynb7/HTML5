/**
 * ForceBlocks.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
tinymce.ForceBlocks=
function(e){var s=e.settings,d=e.dom,a=e.selection,b=e.schema.getBlockElements();function c(){var n=a.getStart(),r=e.getBody(),f,g,h,i,j,k,t,o=-0xFFFFFF,w,l;if(!n||n.nodeType!==1||!s.forced_root_block)return;while(n&&n!=r){if(b[n.nodeName])return;n=n.parentNode}f=a.getRng();if(f.setStart){g=f.startContainer;h=f.startOffset;i=f.endContainer;j=f.endOffset}else{if(f.item){n=f.item(0);f=e.getDoc().body.createTextRange();f.moveToElementText(n)}l=f.parentElement().ownerDocument===e.getDoc();tmpRng=f.duplicate();tmpRng.collapse(true);h=tmpRng.move('character',o)*-1;if(!tmpRng.collapsed){tmpRng=f.duplicate();tmpRng.collapse(false);j=(tmpRng.move('character',o)*-1)-h}}n=r.firstChild;while(n){if(n.nodeType===3||(n.nodeType==1&&!b[n.nodeName])){if(n.nodeType===3&&n.nodeValue.length==0){t=n;n=n.nextSibling;d.remove(t);continue}if(!k){k=d.create(s.forced_root_block);n.parentNode.insertBefore(k,n);w=true}t=n;n=n.nextSibling;k.appendChild(t)}else{k=null;n=n.nextSibling}}if(w){if(f.setStart){f.setStart(g,h);f.setEnd(i,j);a.setRng(f)}else{if(l){try{f=e.getDoc().body.createTextRange();f.moveToElementText(r);f.collapse(true);f.moveStart('character',h);if(j>0)f.moveEnd('character',j);f.select()}catch(m){}}}e.nodeChanged()}};if(s.forced_root_block){e.onKeyUp.add(c);e.onNodeChange.add(c)}}
;
