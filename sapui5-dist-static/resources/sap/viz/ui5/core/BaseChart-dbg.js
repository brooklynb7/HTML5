/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.core.BaseChart.
jQuery.sap.declare("sap.viz.ui5.core.BaseChart");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ui5/core/BaseChart.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '640px')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '480px')</li>
 * <li>{@link #getCss css} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDataset dataset} : sap.viz.ui5.data.Dataset</li>
 * <li>{@link #getNoData noData} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.viz.ui5.core.BaseChart#event:beforeCreateViz beforeCreateViz} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * An abstract base class for all VIZ charts
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.16.4
 *
 * @constructor   
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 * @name sap.viz.ui5.core.BaseChart
 */
sap.ui.core.Control.extend("sap.viz.ui5.core.BaseChart", { metadata : {

	// ---- object ----
	"abstract" : true,

	// ---- control specific ----
	library : "sap.viz",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '640px'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '480px'},
		"css" : {type : "string", group : "Appearance", defaultValue : null}
	},
	aggregations : {
    	"dataset" : {type : "sap.viz.ui5.data.Dataset", multiple : false}, 
    	"noData" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"beforeCreateViz" : {}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.core.BaseChart with name <code>sClassName</code> 
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
 * @name sap.viz.ui5.core.BaseChart.extend
 * @function
 */

sap.viz.ui5.core.BaseChart.M_EVENTS = {'beforeCreateViz':'beforeCreateViz'};


/**
 * Getter for property <code>width</code>.
 * Width of the Chart as a CSS size.
 *
 * Default value is <code>640px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.viz.ui5.core.BaseChart#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>640px</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.viz.ui5.core.BaseChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.core.BaseChart#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Height of the Chart as a CSS size.
 *
 * Default value is <code>480px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.viz.ui5.core.BaseChart#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>480px</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.viz.ui5.core.BaseChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.core.BaseChart#setHeight
 * @function
 */


/**
 * Getter for property <code>css</code>.
 * CSS style of Chart.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>css</code>
 * @public
 * @name sap.viz.ui5.core.BaseChart#getCss
 * @function
 */

/**
 * Setter for property <code>css</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sCss  new value for property <code>css</code>
 * @return {sap.viz.ui5.core.BaseChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.core.BaseChart#setCss
 * @function
 */


/**
 * Getter for aggregation <code>dataset</code>.<br/>
 * Dataset for this chart
 * 
 * @return {sap.viz.ui5.data.Dataset}
 * @public
 * @name sap.viz.ui5.core.BaseChart#getDataset
 * @function
 */


/**
 * Setter for the aggregated <code>dataset</code>.
 * @param oDataset {sap.viz.ui5.data.Dataset}
 * @return {sap.viz.ui5.core.BaseChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.core.BaseChart#setDataset
 * @function
 */
	

/**
 * Destroys the dataset in the aggregation 
 * named <code>dataset</code>.
 * @return {sap.viz.ui5.core.BaseChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.core.BaseChart#destroyDataset
 * @function
 */


/**
 * Getter for aggregation <code>noData</code>.<br/>
 * Control tree to display when there is no data available
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.viz.ui5.core.BaseChart#getNoData
 * @function
 */


/**
 * Setter for the aggregated <code>noData</code>.
 * @param oNoData {sap.ui.core.Control}
 * @return {sap.viz.ui5.core.BaseChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.core.BaseChart#setNoData
 * @function
 */
	

/**
 * Destroys the noData in the aggregation 
 * named <code>noData</code>.
 * @return {sap.viz.ui5.core.BaseChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.core.BaseChart#destroyNoData
 * @function
 */


/**
 * Fired before a new VIZ instance is created. Event parameter "usrOptions" contains the intended value for the parameter with the same name of the createViz call. 
 *
 * @name sap.viz.ui5.core.BaseChart#beforeCreateViz
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.usrOptions Value for the parameter with the same name of the createViz call.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeCreateViz' event of this <code>sap.viz.ui5.core.BaseChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.viz.ui5.core.BaseChart</code>.<br/> itself. 
 *  
 * Fired before a new VIZ instance is created. Event parameter "usrOptions" contains the intended value for the parameter with the same name of the createViz call. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.viz.ui5.core.BaseChart</code>.<br/> itself.
 *
 * @return {sap.viz.ui5.core.BaseChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.core.BaseChart#attachBeforeCreateViz
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeCreateViz' event of this <code>sap.viz.ui5.core.BaseChart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.viz.ui5.core.BaseChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.core.BaseChart#detachBeforeCreateViz
 * @function
 */

/**
 * Fire event beforeCreateViz to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'usrOptions' of type <code>object</code> Value for the parameter with the same name of the createViz call.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.viz.ui5.core.BaseChart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.viz.ui5.core.BaseChart#fireBeforeCreateViz
 * @function
 */


// Start of sap/viz/ui5/core/BaseChart.js
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");
jQuery.sap.require("sap.ui.core.theming.Parameters");

sap.viz.ui5.core.BaseChart.prototype._getSapVizCSS = function() {
  //@Alex Su: To be compatible with the less mode, the way is to load a css file by an ajax request and use less.Parser to parse it on fly.
  var sCSSText,sCSSUrl,sCSSContent;
  var oLink = jQuery.sap.domById("sap-ui-theme-sap.viz");
  if ( oLink ) {
    sCSSUrl = oLink.href;
    sCSSText = jQuery.sap.syncGetText(sCSSUrl+ "?", undefined, undefined);
    if (!sCSSText){
      sCSSText = "";
    }
  } 
  if (this.getCss()){
  	sCSSContent = sCSSText + this.getCss();
  }
  return sCSSContent;
};

sap.viz.ui5.core.BaseChart.prototype._getMergedChartOptions = function (){
  var usrOptions = this._getOptions();
  //work around for axis line and grid line, will be removed in next push
  var gridlineColor = sap.ui.core.theming.Parameters.get('sapVizChartAxisGridlineColor');
  var axislineColor = sap.ui.core.theming.Parameters.get('sapVizChartAxisColor');
  var cssOptions = {
      xAxis:{
        gridline:{
          color:gridlineColor
        }
      },
      yAxis:{
        gridline:{
          color:gridlineColor
        }
      }
  };
  var chartType = this.getVIZChartType();
  switch (chartType){
  case "viz/dual_bar":
    cssOptions.yAxis.color = axislineColor;
    break;
  case "viz/dual_combination":
  case "viz/dual_line":
  case "viz/dual_stacked_column":
  case "viz/100_dual_stacked_column":
  case "viz/dual_column":
    cssOptions.xAxis.color = axislineColor;
    break;
  default:
    cssOptions.xAxis.color = axislineColor;
    cssOptions.yAxis.color = axislineColor;
    break;
  }
  return jQuery.extend(true, cssOptions, usrOptions);
};

sap.viz.ui5.core.BaseChart.prototype._unregisterListener = function (){
  if ( this._sResizeListenerId ) {
    sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
    delete this._sResizeListenerId;
  }  
};

sap.viz.ui5.core.BaseChart.prototype._registerListener = function (){
  this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), jQuery.proxy(this.onresize, this) );
};

sap.viz.ui5.core.BaseChart.prototype._renderChart = function (){
  //TODO How to define feeding API?
  if ( !sap.viz.__svg_support || !this.getDataset() || !this.getDataset().getVIZDataset() ) {
    return;
  }

  // properly clean up an existing VIZ instance
  if ( this._oVIZInstance ) {
    this._oVIZInstance.destroy();
    delete this._oVIZInstance;
  }
  
  var cssSettings = this._getSapVizCSS();

  var chartOptions = this._getMergedChartOptions();
  
  // collect the options for the new VIZ instance
  var oUsrOptions = {
    type : this.getVIZChartType(),
    data : this.getDataset().getVIZDataset(),
    container : this.getDomRef(),
    options : chartOptions,
    css : cssSettings
   };

  // fire event to allow apps to enhance the options. This might change the options!
  this.fireBeforeCreateViz({
    usrOptions : oUsrOptions
  });
  
  // create a VIZ chart out of it
  this._oVIZInstance = sap.viz.core.createViz(oUsrOptions); 

  // attach event listeners to the VIZ instance
  var that = this;
  jQuery.sap.forIn(this._mVIZHandler, function(sName, fnHandler) {
    that._oVIZInstance.on(sName + sap.viz.ui5.core.BaseChart.EVENT_SUFFIX, fnHandler);
  });

  
};

sap.viz.ui5.core.BaseChart.prototype.init = function() {
	//sap.ui.core.Control.prototype.init.call(this);
	sap.viz._initializeVIZ();
	this._mVIZHandler = {};
};

sap.viz.ui5.core.BaseChart.prototype.exit = function() {
	// unregister from resize handler
  this._unregisterListener();
  // properly clean up an existing VIZ instance
	if ( this._oVIZInstance ) {
		this._oVIZInstance.destroy();
		delete this._oVIZInstance;
	}
};

sap.viz.ui5.core.BaseChart.prototype.onBeforeRendering = function() {
  this._unregisterListener();
};

sap.viz.ui5.core.BaseChart.prototype.onAfterRendering = function() {
  this._renderChart();
  this._registerListener();
};

sap.viz.ui5.core.BaseChart.prototype.onresize = function(o) {
	// retrieve new size and set it for the viz charts
	var size = {width : this.$().width(), height: this.$().height()};
	if ( this.getDomRef() && this._oVIZInstance ) {
		this._oVIZInstance.size(size);
	}
};

/**
 * Set chart's default selection.
 * 
 * @param {object[]} Array of default selection info 
 * 
 * @public
 */
sap.viz.ui5.core.BaseChart.prototype.setDefaultSelection = function(selectionInfos) {
  // retrieve new size and set it for the viz charts
  var ds = this.getDataset();
  if(ds){
    var vizds = this.getDataset().getVIZDataset();
    if(vizds){
      vizds.info({
        'type' : 'defaultSelection',
        'value' : selectionInfos
      });
      if(this._oVIZInstance){
        this._oVIZInstance.data(vizds);
      }
    }
  }
};

sap.viz.ui5.core.BaseChart.prototype.onThemeChanged = function (o){
  if (! this.getDomRef()){
    return;
  } 
  this._renderChart();
};

sap.viz.ui5.core.BaseChart.prototype.onLocalizationChanged = function (o){
  if (! this.getDomRef()){
    return;
  } 
  this._renderChart();
};


sap.viz.ui5.core.BaseChart.EVENT_SUFFIX = ".sap.viz.ui5.core";
sap.viz.ui5.core.BaseChart.prototype._getOrCreate = sap.viz.ui5.core.BaseStructuredType.prototype._getOrCreate;

sap.viz.ui5.core.BaseChart.prototype._getOptions = sap.viz.ui5.core.BaseStructuredType.prototype._getOptions;

sap.viz.ui5.core.BaseChart.prototype._attachVIZEvent = function(sName, oData, fnHandler, oListener) {
	var that=this;
	if ( !this.hasListeners(sName) ) {
		this._mVIZHandler[sName] = function(o) {
			that.fireEvent(sName, o);
		}
		if ( this._oVIZInstance ) {
			this._oVIZInstance.on(sName + sap.viz.ui5.core.BaseChart.EVENT_SUFFIX, this._mVIZHandler[sName]);
		}
	}
	sap.ui.core.Control.prototype.attachEvent.apply(this, arguments);
	return this;
};

sap.viz.ui5.core.BaseChart.prototype._detachVIZEvent = function(sName, oData, fnHandler, oListener) {
	sap.ui.core.Control.prototype.detachEvent.apply(this, arguments);
	if ( !this.hasListeners(sName) ) {
		if ( this._oVIZInstance ) {
			this._oVIZInstance.on(sName + sap.viz.ui5.core.BaseChart.EVENT_SUFFIX, null);
		}
		delete this._mVIZHandler[sName];
	}
  return this;
};

sap.viz.ui5.core.BaseChart.prototype.getVIZInstance = function() {
	return this._oVIZInstance || null;
};

/**
 * Get/Set selected data points
 * To get selection, please use selection() or selection(object) 
 * To set selection, please use selection(object[]) or selection(object[], object) 
 * 
 * 
 * @param {object[]} [aPoints]
 *       Points. Each point is
 *       {
 *           data: {key: "value", ...},//optional
 *           ctx:  [{mi: 0, ...}, {...}, ...], // optional. Higher priority than data. 
 *       }
 *       Either data or ctx should be set.
 * @param {object} oAction
 *       {
 *           clearSelection: Boolean,// optional . Default value is false. Useful only in setting selection.
 *           withDataCtx: Boolean, // optional. Default value is false. Useful only in getting selection.
 *           withInfo: Boolean // optional. Default value is false. Useful only in getting selection.
 *       }
 * @returns {object[]}
 *          Points. Each point is
 *          {
 *             data: {key: "value", ...},
 *             ctx:  [{mi: 0, ...}, {...}, ...], // optional. Depends on “withDataCtx”.
 *             info: [{obj}, null, ... } // optional. Depends on “withInfo”.
 *          }
 * @public
 */
sap.viz.ui5.core.BaseChart.prototype.selection = function(aPoints, oAction){
  if(this._oVIZInstance){
    return this._oVIZInstance.selection.apply(this._oVIZInstance, arguments);
  }
};
