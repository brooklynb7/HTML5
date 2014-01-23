/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.Hierarchy");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ca.ui.Hierarchy",{metadata:{library:"sap.ca.ui",properties:{"hideOptionalLevels":{type:"boolean",group:"Appearance",defaultValue:true}},aggregations:{"items":{type:"sap.ca.ui.HierarchyItem",multiple:true,singularName:"item",bindable:"bindable"}}}});
sap.ca.ui.Hierarchy.prototype._getExpandButton=function(){return new sap.m.Link({text:"...",press:jQuery.proxy(this.expand,this)})};
sap.ca.ui.Hierarchy.prototype.expand=function(e){var b=e.getSource();var $=b.$().parent();var a=$.children(".sapCaUiHierarchyItem");b.$().remove();jQuery(a).removeClass("sapCaUiHierarchyHidden");var l=jQuery(".sapCaUiHierarchyItemLine");var s=false;jQuery.each(l,function(i,c){if(c==$[0]){s=true;return}if(s){if(jQuery(c).hasClass("sapCaUiHierarchyHidden")){jQuery(c).removeClass("sapCaUiHierarchyHidden")}else{s=false;return}}});this.indent()};
sap.ca.ui.Hierarchy.prototype.onAfterRendering=function(){this.indent();jQuery(window).resize(jQuery.proxy(this.indent,this))};
sap.ca.ui.Hierarchy.prototype.exit=function(){jQuery(window).unbind("resize",jQuery.proxy(this.indent,this))};
sap.ca.ui.Hierarchy.prototype.indent=function(){var s=20;var m=8;var a=s;var l=jQuery(".sapCaUiHierarchyItemLine").not(".sapCaUiHierarchyHidden");var b=this.$().width()*0.5;var c=(s*l.length)+m;if(c>b){s=Math.floor(b/l.length)}jQuery.each(l,function(i,d){if(i>0){var $=jQuery(d).children(".sapCaUiHierarchyIconContainer");var w=i*s;if(w<a){w=a}jQuery($).width(w+m+"px").css("min-width",w+m+"px")}})};
