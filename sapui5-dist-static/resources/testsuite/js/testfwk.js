/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("testsuite.js.testfwk",false);
function setCookie(n,v,d){var e="";if(d){var a=new Date();a.setTime(a.getTime()+(d*24*60*60*1000));e="; expires="+a.toGMTString()}document.cookie=n+"="+v+e+"; path=/"}
function readCookie(n){var a=n+"=";var b=document.cookie.split(';');for(var i=0;i<b.length;i++){var c=b[i];while(c.charAt(0)==' '){c=c.substring(1,c.length)}if(c.indexOf(a)==0){return c.substring(a.length,c.length)}}return null}
function eraseCookie(n){setCookie(n,"",-1)}
if(!window.sap){sap={}}if(!sap.ui){sap.ui={}}if(!sap.ui.testfwk){sap.ui.testfwk={}}sap.ui.testfwk.TestFWK={sLanguage:navigator.language||navigator.userLanguage,sTheme:"sap_bluecrystal",bRTL:false,bAccessibilityMode:true,bSimulateTouch:false,sJQueryVersion:"1.7.1"};sap.ui.testfwk.TestFWK.LANGUAGES={"en_US":"English (US)","de":"Deutsch"};sap.ui.testfwk.TestFWK.THEMES={"base":"Base","sap_bluecrystal":"Blue Crystal","sap_goldreflection":"Gold Reflection","sap_platinum":"Platinum","sap_hcb":"High Contrast Black","sap_ux":"Ux Target Design","edding":"Edding (EXPERIMENTAL!)","sap_mvi":"Mobile Visual Identity (only for Mobile)"};sap.ui.testfwk.TestFWK.JQUERY_VERSIONS={"1.7.1":"jQuery 1.7.1","1.8.1":"jQuery 1.8.1","1.10.1":"jQuery 1.10.1"};sap.ui.testfwk.TestFWK.LIBRARY_THEMES={"sap.ui.core":{"default":"sap_bluecrystal","supports":["sap_bluecrystal","sap_goldreflection","sap_hcb","sap_platinum","sap_ux","edding"]},"sap.m":{"default":"sap_bluecrystal","supports":["sap_bluecrystal","sap_mvi"]},"sap.me":{"default":"sap_bluecrystal","supports":["sap_bluecrystal"]},"sap.service.visualization":{"default":"sap_bluecrystal","supports":["sap_bluecrystal","sap_goldreflection","sap_hcb","sap_platinum","sap_mvi"]},"sap.ui.commons":{"default":"sap_bluecrystal","supports":["sap_bluecrystal","sap_goldreflection","sap_hcb","sap_platinum","sap_ux","edding"]},"sap.ui.composite":{"default":"sap_bluecrystal","supports":["sap_bluecrystal","sap_goldreflection","sap_hcb","sap_platinum","sap_ux","edding"]},"sap.ui.dev":{"default":"sap_bluecrystal","supports":["sap_bluecrystal","sap_goldreflection","sap_hcb","sap_platinum","sap_ux","edding","sap_mvi"]},"sap.ui.richtexteditor":{"default":"sap_bluecrystal","supports":["sap_bluecrystal","sap_goldreflection","sap_hcb","sap_platinum","sap_ux","edding","sap_mvi"]},"sap.ui.suite":{"default":"sap_goldreflection","supports":["sap_goldreflection","sap_hcb","sap_bluecrystal"]},"sap.ui.table":{"default":"sap_bluecrystal","supports":["sap_bluecrystal","sap_goldreflection","sap_hcb","sap_platinum","sap_ux","edding"]},"sap.ui.ux3":{"default":"sap_bluecrystal","supports":["sap_bluecrystal","sap_goldreflection","sap_hcb"]},"all":{"default":"sap_bluecrystal","supports":["sap_bluecrystal","sap_goldreflection","sap_hcb","sap_platinum","sap_ux","edding","sap_mvi"]}};
sap.ui.testfwk.TestFWK.init=function(c){this.oContentWindow=c;this.oThemeConstraints=null;this.updateContent()};
sap.ui.testfwk.TestFWK.getAllowedThemes=function(){if(!this.oThemeConstraints){return this.THEMES}else{var r={};var t=this.oThemeConstraints.supports,l=t.length;for(var i=0;i<l;i++){r[t[i]]=this.THEMES[t[i]]}return r}};
sap.ui.testfwk.TestFWK.getContentURL=function(){return this.sContentURL};
sap.ui.testfwk.TestFWK.setContentURL=function(u,t,l){this.sContentURL=u;var n=this.getEffectiveTheme(this.sTheme,t);var s=false;if(this.sTheme!==n){this.sTheme=n;s=true}if(!jQuery.sap.equal(t,this.oThemeConstraints)){this.oThemeConstraints=t;s=true}if(s){this.fireThemeConfigurationChanged()}this.updateContent(l)};
sap.ui.testfwk.TestFWK.updateContent=function(l){if(!this.oContentWindow||!this.sContentURL){return}this.fireContentWillChange(l);var u=this.addSettingsToURL(this.sContentURL);this.oContentWindow.document.location.href=u};
sap.ui.testfwk.TestFWK.getLanguage=function(){return this.sLanguage};
sap.ui.testfwk.TestFWK.setLanguage=function(l){if(this.sLanguage!==l){this.sLanguage=l;this.applySettings()}};
sap.ui.testfwk.TestFWK.getTheme=function(){return this.sTheme};
sap.ui.testfwk.TestFWK.setTheme=function(t){if(this.sTheme!==t){this.sTheme=t;if(this.oContentWindow&&this.oContentWindow.sap&&this.oContentWindow.sap.ui&&this.oContentWindow.sap.ui.getCore){this.oContentWindow.sap.ui.getCore().applyTheme(t);return}this.applySettings()}};
sap.ui.testfwk.TestFWK.getRTL=function(){return this.bRTL};
sap.ui.testfwk.TestFWK.setRTL=function(r){if(this.bRTL!==r){this.bRTL=r;this.applySettings()}};
sap.ui.testfwk.TestFWK.getAccessibilityMode=function(){return this.bAccessibilityMode};
sap.ui.testfwk.TestFWK.setAccessibilityMode=function(a){if(this.bAccessibilityMode!==a){this.bAccessibilityMode=a;this.applySettings()}};
sap.ui.testfwk.TestFWK.getSimulateTouch=function(){return this.bSimulateTouch};
sap.ui.testfwk.TestFWK.setSimulateTouch=function(s){if(this.bSimulateTouch!==s){this.bSimulateTouch=s;this.applySettings()}};
sap.ui.testfwk.TestFWK.getJQueryVersion=function(){return this.sJQueryVersion};
sap.ui.testfwk.TestFWK.setJQueryVersion=function(j){if(this.sJQueryVersion!==j){this.sJQueryVersion=j;this.applySettings()}};
sap.ui.testfwk.TestFWK.getEffectiveTheme=function(r,t){if(r){if(t){for(var i=0;i<t.supports.length;i++){if(t.supports[i]===r){return r}}return t["default"]}else{return r}}else{return t?t["default"]:null}};
sap.ui.testfwk.TestFWK.applySettings=function(){this.fireSettingsChanged();this.updateContent()};
sap.ui.testfwk.TestFWK.addSettingsToURL=function(u,t){if(!!!sap.ui.Device.browser.webkit){top.window.location.hash=u.replace(/\?/g,"_")}function a(p,v){if(u.indexOf("?")!=-1){u+="&"}else{u+="?"}u+=p+"="+v}a("sap-ui-debug",true);if(this.sLanguage){a("sap-ui-language",this.sLanguage)}var b=this.getEffectiveTheme(this.sTheme,t);if(b){a("sap-ui-theme",b)}if(this.bRTL){a("sap-ui-rtl",this.bRTL)}if(this.bSimulateTouch){a("sap-ui-xx-test-mobile",this.bSimulateTouch)}a("sap-ui-accessibility",this.bAccessibilityMode);if(this.sJQueryVersion){a("sap-ui-jqueryversion",this.sJQueryVersion)}return u};
sap.ui.testfwk.TestFWK.onContentLoad=function(){};
sap.ui.testfwk.TestFWK.mSettingsListeners=[];
sap.ui.testfwk.TestFWK.attachSettingsChanged=function(c){this.mSettingsListeners.push(c)};
sap.ui.testfwk.TestFWK.detachSettingsChanged=function(c){for(var i=0;i<this.mSettingsListeners.length;){if(this.mSettingsListeners[i]===c){this.mSettingsListeners.splice(i,1)}else{i++}}};
sap.ui.testfwk.TestFWK.fireSettingsChanged=function(){for(var i=0;i<this.mSettingsListeners.length;i++){this.mSettingsListeners[i]()}};
sap.ui.testfwk.TestFWK.mThemeConfigListeners=[];
sap.ui.testfwk.TestFWK.attachThemeConfigurationChanged=function(c){this.mThemeConfigListeners.push(c)};
sap.ui.testfwk.TestFWK.detachThemeConfigurationChanged=function(c){for(var i=0;i<this.mThemeConfigListeners.length;){if(this.mThemeConfigListeners[i]===c){this.mThemeConfigListeners.splice(i,1)}else{i++}}};
sap.ui.testfwk.TestFWK.fireThemeConfigurationChanged=function(){for(var i=0;i<this.mThemeConfigListeners.length;i++){this.mThemeConfigListeners[i]()}};
sap.ui.testfwk.TestFWK.mContentListeners=[];
sap.ui.testfwk.TestFWK.attachContentWillChange=function(c){this.mContentListeners.push(c)};
sap.ui.testfwk.TestFWK.detachContentWillChange=function(c){for(var i=0;i<this.mContentListeners.length;){if(this.mContentListeners[i]===c){this.mContentListeners.splice(i,1)}else{i++}}};
sap.ui.testfwk.TestFWK.fireContentWillChange=function(l){for(var i=0;i<this.mContentListeners.length;i++){try{this.mContentListeners[i](this.getContentURL(),this.getTheme(),l)}catch(e){}}};
