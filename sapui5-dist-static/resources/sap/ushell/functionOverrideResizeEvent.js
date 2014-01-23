/*!
 * Modified version of
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 *
 * Version: 1.1
 *
 * Author:    "Cowboy" Ben Alman
 * Web:       http://benalman.com/projects/jquery-resize-plugin/
 * License:   Dual licensed under the MIT and GPL licenses.
 *            http://benalman.com/about/license/
 *
 */
// About: License
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
(function(){"use strict";jQuery.sap.declare("sap.ushell.functionOverrideResizeEvent");var j=jQuery([]),a=jQuery.resize=jQuery.extend(jQuery.resize,{}),t,w;a.delay=250;a.throttleWindow=true;jQuery.event.special.resize={setup:function(){if(a.throttleWindow&&this.setTimeout){return false}var b=jQuery(this);j=j.add(b);jQuery.data(this,"resize-special-event",{width:b.width(),height:b.height()});if(j.length===1){w()}},teardown:function(){if(a.throttleWindow&&this.setTimeout){return false}var b=jQuery(this);j=j.not(b);b.removeData("resize-special-event");if(!j.length){clearTimeout(t)}},add:function(n){if(a.throttleWindow&&this.setTimeout){return false}var o,b=this,N;N=function(e,c,h){var d=jQuery(b),D=jQuery.data(b,"resize-special-event");if(c&&h){D.width=c;D.height=h}else{D.width=d.width();D.height=d.height()}o.apply(b,arguments)};if(jQuery.isFunction(n)){o=n;return N}o=n.handler;n.handler=N}};w=function(){t=window.setTimeout(function(){j.each(function(){var b=jQuery(this),c=b.width(),h=b.height(),d=jQuery.data(this,"resize-special-event");if(c!==d.width||h!==d.height){b.trigger("resize",[d.width=c,d.height=h])}});w()},a.delay)}}());
