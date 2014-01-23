/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.me.CalendarLegend.
jQuery.sap.declare("sap.me.CalendarLegend");
jQuery.sap.require("sap.me.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new CalendarLegend.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLegendForType00 legendForType00} : string</li>
 * <li>{@link #getLegendForType01 legendForType01} : string</li>
 * <li>{@link #getLegendForType04 legendForType04} : string</li>
 * <li>{@link #getLegendForType06 legendForType06} : string</li>
 * <li>{@link #getLegendForType07 legendForType07} : string</li>
 * <li>{@link #getLegendForToday legendForToday} : string</li>
 * <li>{@link #getLegendForSelected legendForSelected} : string</li>
 * <li>{@link #getLegendForSelected00 legendForSelected00} : string</li>
 * <li>{@link #getLegendForNormal legendForNormal} : string</li>
 * <li>{@link #getExpandable expandable} : boolean (default: true)</li>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getLegendWidth legendWidth} : sap.ui.core.CSSSize (default: '12.5rem')</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getDesign design} : sap.me.CalendarDesign (default: sap.me.CalendarDesign.Approval)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Legend for the calendar control
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * @name sap.me.CalendarLegend
 */
sap.ui.core.Control.extend("sap.me.CalendarLegend", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.me",
	properties : {
		"legendForType00" : {type : "string", group : "Misc", defaultValue : null},
		"legendForType01" : {type : "string", group : "Misc", defaultValue : null},
		"legendForType04" : {type : "string", group : "Misc", defaultValue : null},
		"legendForType06" : {type : "string", group : "Misc", defaultValue : null},
		"legendForType07" : {type : "string", group : "Misc", defaultValue : null},
		"legendForToday" : {type : "string", group : "Misc", defaultValue : null},
		"legendForSelected" : {type : "string", group : "Misc", defaultValue : null},
		"legendForSelected00" : {type : "string", group : "Misc", defaultValue : null},
		"legendForNormal" : {type : "string", group : "Misc", defaultValue : null},
		"expandable" : {type : "boolean", group : "Misc", defaultValue : true},
		"expanded" : {type : "boolean", group : "Misc", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
		"legendWidth" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '12.5rem'},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"design" : {type : "sap.me.CalendarDesign", group : "Appearance", defaultValue : sap.me.CalendarDesign.Approval}
	},
	aggregations : {
    	"labels" : {type : "sap.m.Label", multiple : true, singularName : "label", visibility : "hidden"}, 
    	"colors" : {type : "sap.ui.core.Control", multiple : true, singularName : "color", visibility : "hidden"}, 
    	"icon" : {type : "sap.ui.core.Icon", multiple : false, visibility : "hidden"}
	}
}});


/**
 * Creates a new subclass of class sap.me.CalendarLegend with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.me.CalendarLegend.extend
 * @function
 */


/**
 * Getter for property <code>legendForType00</code>.
 * legend for type 00
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>legendForType00</code>
 * @public
 * @name sap.me.CalendarLegend#getLegendForType00
 * @function
 */

/**
 * Setter for property <code>legendForType00</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLegendForType00  new value for property <code>legendForType00</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setLegendForType00
 * @function
 */


/**
 * Getter for property <code>legendForType01</code>.
 * legend for type 01
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>legendForType01</code>
 * @public
 * @name sap.me.CalendarLegend#getLegendForType01
 * @function
 */

/**
 * Setter for property <code>legendForType01</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLegendForType01  new value for property <code>legendForType01</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setLegendForType01
 * @function
 */


/**
 * Getter for property <code>legendForType04</code>.
 * legend for type 04
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>legendForType04</code>
 * @public
 * @name sap.me.CalendarLegend#getLegendForType04
 * @function
 */

/**
 * Setter for property <code>legendForType04</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLegendForType04  new value for property <code>legendForType04</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setLegendForType04
 * @function
 */


/**
 * Getter for property <code>legendForType06</code>.
 * legend for type 06
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>legendForType06</code>
 * @public
 * @name sap.me.CalendarLegend#getLegendForType06
 * @function
 */

/**
 * Setter for property <code>legendForType06</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLegendForType06  new value for property <code>legendForType06</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setLegendForType06
 * @function
 */


/**
 * Getter for property <code>legendForType07</code>.
 * legend for type 07
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>legendForType07</code>
 * @public
 * @name sap.me.CalendarLegend#getLegendForType07
 * @function
 */

/**
 * Setter for property <code>legendForType07</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLegendForType07  new value for property <code>legendForType07</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setLegendForType07
 * @function
 */


/**
 * Getter for property <code>legendForToday</code>.
 * legend for today
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>legendForToday</code>
 * @public
 * @name sap.me.CalendarLegend#getLegendForToday
 * @function
 */

/**
 * Setter for property <code>legendForToday</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLegendForToday  new value for property <code>legendForToday</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setLegendForToday
 * @function
 */


/**
 * Getter for property <code>legendForSelected</code>.
 * legend for selected
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>legendForSelected</code>
 * @public
 * @name sap.me.CalendarLegend#getLegendForSelected
 * @function
 */

/**
 * Setter for property <code>legendForSelected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLegendForSelected  new value for property <code>legendForSelected</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setLegendForSelected
 * @function
 */


/**
 * Getter for property <code>legendForSelected00</code>.
 * legend for selected 00
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>legendForSelected00</code>
 * @public
 * @name sap.me.CalendarLegend#getLegendForSelected00
 * @function
 */

/**
 * Setter for property <code>legendForSelected00</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLegendForSelected00  new value for property <code>legendForSelected00</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setLegendForSelected00
 * @function
 */


/**
 * Getter for property <code>legendForNormal</code>.
 * legend for normal
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>legendForNormal</code>
 * @public
 * @name sap.me.CalendarLegend#getLegendForNormal
 * @function
 */

/**
 * Setter for property <code>legendForNormal</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLegendForNormal  new value for property <code>legendForNormal</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setLegendForNormal
 * @function
 */


/**
 * Getter for property <code>expandable</code>.
 * Indicates if the legend can be collapsed and expanded
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>expandable</code>
 * @public
 * @name sap.me.CalendarLegend#getExpandable
 * @function
 */

/**
 * Setter for property <code>expandable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bExpandable  new value for property <code>expandable</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setExpandable
 * @function
 */


/**
 * Getter for property <code>expanded</code>.
 * Indicates if the legend is expanded or not
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * @name sap.me.CalendarLegend#getExpanded
 * @function
 */

/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setExpanded
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Indicates the whole component width
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.me.CalendarLegend#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setWidth
 * @function
 */


/**
 * Getter for property <code>legendWidth</code>.
 * Indicates the legend items width
 *
 * Default value is <code>12.5rem</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>legendWidth</code>
 * @public
 * @name sap.me.CalendarLegend#getLegendWidth
 * @function
 */

/**
 * Setter for property <code>legendWidth</code>.
 *
 * Default value is <code>12.5rem</code> 
 *
 * @param {sap.ui.core.CSSSize} sLegendWidth  new value for property <code>legendWidth</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setLegendWidth
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Indicates if the legend is visible
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.me.CalendarLegend#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setVisible
 * @function
 */


/**
 * Getter for property <code>design</code>.
 * design name for the legend
 *
 * Default value is <code>sap.me.CalendarDesign.Approval</code>
 *
 * @return {sap.me.CalendarDesign} the value of property <code>design</code>
 * @public
 * @name sap.me.CalendarLegend#getDesign
 * @function
 */

/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>sap.me.CalendarDesign.Approval</code> 
 *
 * @param {sap.me.CalendarDesign} oDesign  new value for property <code>design</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * @name sap.me.CalendarLegend#setDesign
 * @function
 */


// Start of sap/me/CalendarLegend.js
///**
// * This file defines behavior for the control,
// */

jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.ui.core.theming.Parameters");
sap.me.CalendarLegend.prototype.init = function() {
	this._createIcon();
	sap.ui.core.IconPool.insertFontFaceStyle();
	this._legendIndex = [];
};


sap.me.CalendarLegend.prototype.setLegendForType00 = function( iValue ){
	this._setLegendLabelByName("ForType00",iValue);
};
sap.me.CalendarLegend.prototype.setLegendForType01 = function( iValue ){
	this._setLegendLabelByName("ForType01",iValue);
};
sap.me.CalendarLegend.prototype.setLegendForType04 = function( iValue ){
	this._setLegendLabelByName("ForType04",iValue);
};
sap.me.CalendarLegend.prototype.setLegendForType06 = function( iValue ){
	this._setLegendLabelByName("ForType06",iValue);
};
sap.me.CalendarLegend.prototype.setLegendForType07 = function( iValue ){
	this._setLegendLabelByName("ForType07",iValue);
};
sap.me.CalendarLegend.prototype.setLegendForToday= function( iValue ){
	this._setLegendLabelByName("ForToday",iValue);
};
sap.me.CalendarLegend.prototype.setLegendForSelected = function( iValue ){
	this._setLegendLabelByName("ForSelected",iValue);
};
sap.me.CalendarLegend.prototype.setLegendForSelected00 = function( iValue ){
	this._setLegendLabelByName("ForSelected00",iValue);
};
sap.me.CalendarLegend.prototype.setLegendForNormal = function( iValue ){
	this._setLegendLabelByName("ForNormal",iValue);
};
sap.me.CalendarLegend.prototype.setExpanded = function( iValue ){
	this.setProperty("expanded", iValue);
	this._changeIconSrc();
};

sap.me.CalendarLegend.prototype._setLegendLabelByName = function(iName,iValue){
	var olabel = sap.ui.getCore().byId(this.getId()+"-"+iName);
 	var oColor = sap.ui.getCore().byId(this.getId()+'-Color'+iName);	
		if(!olabel){ // create label and add to aggregation
			olabel = new sap.m.Label(this.getId() + '-'+iName,{
				width:"auto"
		});
		olabel.addStyleClass("sapUIMeCalendarLegendLabels");
		this.addAggregation("labels",olabel,true);
		olabel.setText(iValue);
		// create box label
		 oColor = new sap.m.Label(this.getId() + '-Color'+iName);
		oColor.addStyleClass("sapUIMeLegendColor");
		oColor.addStyleClass("sapUIMeLegendColor"+iName);
		this.addAggregation("colors",oColor,true);
		this._legendIndex.push(iName);
		}
		else{
		
		olabel.setText(iValue);
		if(!iValue){
			this.removeAggregation("colors",oColor,true);
			this.removeAggregation("labels",olabel,true);

		}
		else{
			var index = this._legendIndex.indexOf(iName);
			this.insertAggregation("colors",oColor,index,true);
			this.insertAggregation("labels",olabel,index,true);
		}

	}
	this.setProperty("legend"+iName,iValue);

};
sap.me.CalendarLegend.prototype.setExpandable= function( iValue ){
	this.setProperty("expandable",iValue);
	if(!iValue && !this.getExpanded()){
		this.toggleExpandCollapse();
	}
};
sap.me.CalendarLegend.prototype.setVisible= function( iValue ){
	this.setProperty("visible",iValue);
};

sap.me.CalendarLegend.prototype.toggleExpandCollapse = function() {
	if(!this.getExpandable())
		return;
	var bExpand = !this.getExpanded();
	//this.setExpanded(bExpand);
	var $container = jQuery.sap.byId(this.getId() + "-LegendMenu");	
	if (bExpand) {
		jQuery.sap.byId(this.getId() + "-LegendMenu").css("display","none").css("height","auto");
		$container.slideDown('600', "swing",jQuery.proxy(this.onTransitionEnded, this));
	} else {
		$container.slideUp('600', jQuery.proxy(this.onTransitionEnded, this));
	}
	this.setProperty("expanded", bExpand,true);
	this._changeIconSrc();

};
sap.me.CalendarLegend.prototype._createIcon = function() {
	var sName = this.getExpanded() ? "Collapse" : "Expand";
	var sIconName = sap.ui.core.theming.Parameters.get("sapMeCalendarLegendIcon"+sName);
	var sColor = sap.ui.core.theming.Parameters.get("sapUiLightIcon");
	var sActiveBgColor = sap.ui.core.theming.Parameters.get("sapUiHighlight");
	var sActiveColor = sap.ui.core.theming.Parameters.get("sapUiIconInverted");
	var oIcon = new sap.ui.core.Icon(this.getId() + sIconName,{
	       src: sIconName,
	       color: sColor,
	       activeBackgroundColor: sActiveBgColor,
	       activeColor: sActiveColor,
	       press: jQuery.proxy(this.toggleExpandCollapse,this)
	       
	});
	oIcon.addStyleClass("sapUIMeLegendIcon");
	this.setAggregation("icon",oIcon,true);
};
sap.me.CalendarLegend.prototype._getColorBoxStyle = function(oID) {
	var id = this.getId() + "-";
	var styleName = oID.substr(oID.indexOf(id) + id.length);
	styleName = "sapUIMeLegendColor"+styleName;
	return styleName;
};

sap.me.CalendarLegend.prototype._changeIconSrc =function () {
   var sName = null;
   if(this.getExpanded() || !this.getExpandable()){
	   sName = "Collapse"; 
   }
   else{
	   sName = "Expand"; 
   }
   var sIconName = sap.ui.core.theming.Parameters.get("sapMeCalendarLegendIcon"+sName);
   this.getAggregation("icon").setSrc(sIconName); 
};


