/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.viz (1.10.0)
 */
jQuery.sap.declare("sap.viz.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 library containing chart controls based on the VIZ charting library
 *
 * @namespace
 * @name sap.viz
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.viz",
  dependencies : ["sap.ui.core"],
  types: [
    "sap.viz.ui5.types.Axis_gridline_type",
    "sap.viz.ui5.types.Axis_position",
    "sap.viz.ui5.types.Axis_type",
    "sap.viz.ui5.types.Background_direction",
    "sap.viz.ui5.types.Background_drawingEffect",
    "sap.viz.ui5.types.Bar_drawingEffect",
    "sap.viz.ui5.types.Bubble_drawingEffect",
    "sap.viz.ui5.types.Combination_drawingEffect",
    "sap.viz.ui5.types.Datalabel_orientation",
    "sap.viz.ui5.types.Datalabel_outsidePosition",
    "sap.viz.ui5.types.Datalabel_paintingMode",
    "sap.viz.ui5.types.Datalabel_position",
    "sap.viz.ui5.types.Legend_alignment",
    "sap.viz.ui5.types.Legend_drawingEffect",
    "sap.viz.ui5.types.Legend_position",
    "sap.viz.ui5.types.Legend_type",
    "sap.viz.ui5.types.Line_drawingEffect",
    "sap.viz.ui5.types.Line_marker_shape",
    "sap.viz.ui5.types.Pie_drawingEffect",
    "sap.viz.ui5.types.Pie_valign",
    "sap.viz.ui5.types.Scatter_drawingEffect",
    "sap.viz.ui5.types.StackedVerticalBar_drawingEffect",
    "sap.viz.ui5.types.StackedVerticalBar_mode",
    "sap.viz.ui5.types.Title_alignment",
    "sap.viz.ui5.types.Tooltip_drawingEffect",
    "sap.viz.ui5.types.VerticalBar_drawingEffect",
    "sap.viz.ui5.types.controller.Interaction_selectability_mode"
  ],
  interfaces: [],
  controls: [
    "sap.viz.ui5.Bar",
    "sap.viz.ui5.Bubble",
    "sap.viz.ui5.Column",
    "sap.viz.ui5.Combination",
    "sap.viz.ui5.Donut",
    "sap.viz.ui5.DualBar",
    "sap.viz.ui5.DualColumn",
    "sap.viz.ui5.DualCombination",
    "sap.viz.ui5.DualLine",
    "sap.viz.ui5.DualStackedColumn",
    "sap.viz.ui5.DualStackedColumn100",
    "sap.viz.ui5.Line",
    "sap.viz.ui5.Pie",
    "sap.viz.ui5.Scatter",
    "sap.viz.ui5.StackedColumn",
    "sap.viz.ui5.StackedColumn100",
    "sap.viz.ui5.core.BaseChart"
  ],
  elements: [
    "sap.viz.ui5.core.BaseStructuredType",
    "sap.viz.ui5.data.Dataset",
    "sap.viz.ui5.data.DimensionDefinition",
    "sap.viz.ui5.data.FlattenedDataset",
    "sap.viz.ui5.data.MeasureDefinition",
    "sap.viz.ui5.types.Axis",
    "sap.viz.ui5.types.Axis_axisline",
    "sap.viz.ui5.types.Axis_gridline",
    "sap.viz.ui5.types.Axis_label",
    "sap.viz.ui5.types.Axis_layoutInfo",
    "sap.viz.ui5.types.Axis_scale",
    "sap.viz.ui5.types.Axis_title",
    "sap.viz.ui5.types.Background",
    "sap.viz.ui5.types.Background_border",
    "sap.viz.ui5.types.Background_border_bottom",
    "sap.viz.ui5.types.Background_border_left",
    "sap.viz.ui5.types.Background_border_right",
    "sap.viz.ui5.types.Background_border_top",
    "sap.viz.ui5.types.Bar",
    "sap.viz.ui5.types.Bar_animation",
    "sap.viz.ui5.types.Bar_fillMode",
    "sap.viz.ui5.types.Bar_tooltip",
    "sap.viz.ui5.types.Bubble",
    "sap.viz.ui5.types.Bubble_animation",
    "sap.viz.ui5.types.Bubble_axisTooltip",
    "sap.viz.ui5.types.Combination",
    "sap.viz.ui5.types.Combination_animation",
    "sap.viz.ui5.types.Combination_bar",
    "sap.viz.ui5.types.Combination_dataShape",
    "sap.viz.ui5.types.Combination_line",
    "sap.viz.ui5.types.Combination_line_marker",
    "sap.viz.ui5.types.Combination_tooltip",
    "sap.viz.ui5.types.Datalabel",
    "sap.viz.ui5.types.Legend",
    "sap.viz.ui5.types.Legend_title",
    "sap.viz.ui5.types.Line",
    "sap.viz.ui5.types.Line_animation",
    "sap.viz.ui5.types.Line_hoverline",
    "sap.viz.ui5.types.Line_marker",
    "sap.viz.ui5.types.Line_tooltip",
    "sap.viz.ui5.types.Pie",
    "sap.viz.ui5.types.Pie_animation",
    "sap.viz.ui5.types.Pie_tooltip",
    "sap.viz.ui5.types.Scatter",
    "sap.viz.ui5.types.Scatter_animation",
    "sap.viz.ui5.types.Scatter_axisTooltip",
    "sap.viz.ui5.types.StackedVerticalBar",
    "sap.viz.ui5.types.StackedVerticalBar_animation",
    "sap.viz.ui5.types.StackedVerticalBar_tooltip",
    "sap.viz.ui5.types.Title",
    "sap.viz.ui5.types.Tooltip",
    "sap.viz.ui5.types.VerticalBar",
    "sap.viz.ui5.types.VerticalBar_animation",
    "sap.viz.ui5.types.VerticalBar_tooltip",
    "sap.viz.ui5.types.XYContainer",
    "sap.viz.ui5.types.controller.Interaction",
    "sap.viz.ui5.types.controller.Interaction_selectability"
  ],
  version: "1.10.0"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Axis_gridline_type.
jQuery.sap.declare("sap.viz.ui5.types.Axis_gridline_type");

/**
 * @class List (Enum) type ui5/types/Axis_gridline_type
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Axis_gridline_type = {
  
    /**
     * Value line 
     * @public
     */
    line : "line",

    /**
     * Value dotted 
     * @public
     */
    dotted : "dotted",

    /**
     * Value incised 
     * @public
     */
    incised : "incised"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Axis_position.
jQuery.sap.declare("sap.viz.ui5.types.Axis_position");

/**
 * @class List (Enum) type ui5/types/Axis_position
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Axis_position = {
  
    /**
     * Value left 
     * @public
     */
    left : "left",

    /**
     * Value right 
     * @public
     */
    right : "right",

    /**
     * Value top 
     * @public
     */
    top : "top",

    /**
     * Value bottom 
     * @public
     */
    bottom : "bottom"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Axis_type.
jQuery.sap.declare("sap.viz.ui5.types.Axis_type");

/**
 * @class List (Enum) type ui5/types/Axis_type
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Axis_type = {
  
    /**
     * Value value 
     * @public
     */
    value : "value",

    /**
     * Value category 
     * @public
     */
    category : "category"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Background_direction.
jQuery.sap.declare("sap.viz.ui5.types.Background_direction");

/**
 * @class List (Enum) type ui5/types/Background_direction
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Background_direction = {
  
    /**
     * Value horizontal 
     * @public
     */
    horizontal : "horizontal",

    /**
     * Value vertical 
     * @public
     */
    vertical : "vertical"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Background_drawingEffect.
jQuery.sap.declare("sap.viz.ui5.types.Background_drawingEffect");

/**
 * @class List (Enum) type ui5/types/Background_drawingEffect
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Background_drawingEffect = {
  
    /**
     * Value normal 
     * @public
     */
    normal : "normal",

    /**
     * Value glossy 
     * @public
     */
    glossy : "glossy"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Bar_drawingEffect.
jQuery.sap.declare("sap.viz.ui5.types.Bar_drawingEffect");

/**
 * @class List (Enum) type ui5/types/Bar_drawingEffect
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Bar_drawingEffect = {
  
    /**
     * Value normal 
     * @public
     */
    normal : "normal",

    /**
     * Value glossy 
     * @public
     */
    glossy : "glossy"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Bubble_drawingEffect.
jQuery.sap.declare("sap.viz.ui5.types.Bubble_drawingEffect");

/**
 * @class List (Enum) type ui5/types/Bubble_drawingEffect
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Bubble_drawingEffect = {
  
    /**
     * Value normal 
     * @public
     */
    normal : "normal",

    /**
     * Value glossy 
     * @public
     */
    glossy : "glossy"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Combination_drawingEffect.
jQuery.sap.declare("sap.viz.ui5.types.Combination_drawingEffect");

/**
 * @class List (Enum) type ui5/types/Combination_drawingEffect
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Combination_drawingEffect = {
  
    /**
     * Value normal 
     * @public
     */
    normal : "normal",

    /**
     * Value glossy 
     * @public
     */
    glossy : "glossy"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Datalabel_orientation.
jQuery.sap.declare("sap.viz.ui5.types.Datalabel_orientation");

/**
 * @class List (Enum) type ui5/types/Datalabel_orientation
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Datalabel_orientation = {
  
    /**
     * Value horizontal 
     * @public
     */
    horizontal : "horizontal",

    /**
     * Value vertical 
     * @public
     */
    vertical : "vertical"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Datalabel_outsidePosition.
jQuery.sap.declare("sap.viz.ui5.types.Datalabel_outsidePosition");

/**
 * @class List (Enum) type ui5/types/Datalabel_outsidePosition
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Datalabel_outsidePosition = {
  
    /**
     * Value up 
     * @public
     */
    up : "up",

    /**
     * Value down 
     * @public
     */
    down : "down",

    /**
     * Value left 
     * @public
     */
    left : "left",

    /**
     * Value right 
     * @public
     */
    right : "right"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Datalabel_paintingMode.
jQuery.sap.declare("sap.viz.ui5.types.Datalabel_paintingMode");

/**
 * @class List (Enum) type ui5/types/Datalabel_paintingMode
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Datalabel_paintingMode = {
  
    /**
     * Value rectCoordinate 
     * @public
     */
    rectCoordinate : "rectCoordinate",

    /**
     * Value polarCoordinate 
     * @public
     */
    polarCoordinate : "polarCoordinate"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Datalabel_position.
jQuery.sap.declare("sap.viz.ui5.types.Datalabel_position");

/**
 * @class List (Enum) type ui5/types/Datalabel_position
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Datalabel_position = {
  
    /**
     * Value inside 
     * @public
     */
    inside : "inside",

    /**
     * Value outside 
     * @public
     */
    outside : "outside"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Legend_alignment.
jQuery.sap.declare("sap.viz.ui5.types.Legend_alignment");

/**
 * @class List (Enum) type ui5/types/Legend_alignment
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Legend_alignment = {
  
    /**
     * Value start 
     * @public
     */
    start : "start",

    /**
     * Value middle 
     * @public
     */
    middle : "middle",

    /**
     * Value end 
     * @public
     */
    end : "end"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Legend_drawingEffect.
jQuery.sap.declare("sap.viz.ui5.types.Legend_drawingEffect");

/**
 * @class List (Enum) type ui5/types/Legend_drawingEffect
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Legend_drawingEffect = {
  
    /**
     * Value normal 
     * @public
     */
    normal : "normal",

    /**
     * Value glossy 
     * @public
     */
    glossy : "glossy"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Legend_position.
jQuery.sap.declare("sap.viz.ui5.types.Legend_position");

/**
 * @class List (Enum) type ui5/types/Legend_position
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Legend_position = {
  
    /**
     * Value right 
     * @public
     */
    right : "right"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Legend_type.
jQuery.sap.declare("sap.viz.ui5.types.Legend_type");

/**
 * @class List (Enum) type ui5/types/Legend_type
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Legend_type = {
  
    /**
     * Value ColorLegend 
     * @public
     */
    ColorLegend : "ColorLegend",

    /**
     * Value BubbleColorLegend 
     * @public
     */
    BubbleColorLegend : "BubbleColorLegend",

    /**
     * Value SizeLegend 
     * @public
     */
    SizeLegend : "SizeLegend",

    /**
     * Value MeasureBasedColoringLegend 
     * @public
     */
    MeasureBasedColoringLegend : "MeasureBasedColoringLegend"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Line_drawingEffect.
jQuery.sap.declare("sap.viz.ui5.types.Line_drawingEffect");

/**
 * @class List (Enum) type ui5/types/Line_drawingEffect
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Line_drawingEffect = {
  
    /**
     * Value normal 
     * @public
     */
    normal : "normal",

    /**
     * Value glossy 
     * @public
     */
    glossy : "glossy"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Line_marker_shape.
jQuery.sap.declare("sap.viz.ui5.types.Line_marker_shape");

/**
 * @class List (Enum) type ui5/types/Line_marker_shape
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Line_marker_shape = {
  
    /**
     * Value circle 
     * @public
     */
    circle : "circle",

    /**
     * Value diamond 
     * @public
     */
    diamond : "diamond",

    /**
     * Value triangleUp 
     * @public
     */
    triangleUp : "triangleUp",

    /**
     * Value triangleDown 
     * @public
     */
    triangleDown : "triangleDown",

    /**
     * Value triangleLeft 
     * @public
     */
    triangleLeft : "triangleLeft",

    /**
     * Value triangleRight 
     * @public
     */
    triangleRight : "triangleRight",

    /**
     * Value cross 
     * @public
     */
    cross : "cross",

    /**
     * Value intersection 
     * @public
     */
    intersection : "intersection"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Pie_drawingEffect.
jQuery.sap.declare("sap.viz.ui5.types.Pie_drawingEffect");

/**
 * @class List (Enum) type ui5/types/Pie_drawingEffect
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Pie_drawingEffect = {
  
    /**
     * Value normal 
     * @public
     */
    normal : "normal",

    /**
     * Value glossy 
     * @public
     */
    glossy : "glossy"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Pie_valign.
jQuery.sap.declare("sap.viz.ui5.types.Pie_valign");

/**
 * @class List (Enum) type ui5/types/Pie_valign
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Pie_valign = {
  
    /**
     * Value top 
     * @public
     */
    top : "top",

    /**
     * Value center 
     * @public
     */
    center : "center"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Scatter_drawingEffect.
jQuery.sap.declare("sap.viz.ui5.types.Scatter_drawingEffect");

/**
 * @class List (Enum) type ui5/types/Scatter_drawingEffect
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Scatter_drawingEffect = {
  
    /**
     * Value normal 
     * @public
     */
    normal : "normal",

    /**
     * Value glossy 
     * @public
     */
    glossy : "glossy"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.StackedVerticalBar_drawingEffect.
jQuery.sap.declare("sap.viz.ui5.types.StackedVerticalBar_drawingEffect");

/**
 * @class List (Enum) type ui5/types/StackedVerticalBar_drawingEffect
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.StackedVerticalBar_drawingEffect = {
  
    /**
     * Value normal 
     * @public
     */
    normal : "normal",

    /**
     * Value glossy 
     * @public
     */
    glossy : "glossy"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.StackedVerticalBar_mode.
jQuery.sap.declare("sap.viz.ui5.types.StackedVerticalBar_mode");

/**
 * @class List (Enum) type ui5/types/StackedVerticalBar_mode
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.StackedVerticalBar_mode = {
  
    /**
     * Value comparison 
     * @public
     */
    comparison : "comparison",

    /**
     * Value percentage 
     * @public
     */
    percentage : "percentage"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Title_alignment.
jQuery.sap.declare("sap.viz.ui5.types.Title_alignment");

/**
 * @class List (Enum) type ui5/types/Title_alignment
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Title_alignment = {
  
    /**
     * Value left 
     * @public
     */
    left : "left",

    /**
     * Value center 
     * @public
     */
    center : "center",

    /**
     * Value right 
     * @public
     */
    right : "right"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.Tooltip_drawingEffect.
jQuery.sap.declare("sap.viz.ui5.types.Tooltip_drawingEffect");

/**
 * @class List (Enum) type ui5/types/Tooltip_drawingEffect
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.Tooltip_drawingEffect = {
  
    /**
     * Value normal 
     * @public
     */
    normal : "normal",

    /**
     * Value glossy 
     * @public
     */
    glossy : "glossy"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.VerticalBar_drawingEffect.
jQuery.sap.declare("sap.viz.ui5.types.VerticalBar_drawingEffect");

/**
 * @class List (Enum) type ui5/types/VerticalBar_drawingEffect
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.VerticalBar_drawingEffect = {
  
    /**
     * Value normal 
     * @public
     */
    normal : "normal",

    /**
     * Value glossy 
     * @public
     */
    glossy : "glossy"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.viz.ui5.types.controller.Interaction_selectability_mode.
jQuery.sap.declare("sap.viz.ui5.types.controller.Interaction_selectability_mode");

/**
 * @class List (Enum) type ui5/types/controller/Interaction_selectability_mode
 *
 * @version 1.10.0
 * @static
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 */
sap.viz.ui5.types.controller.Interaction_selectability_mode = {
  
    /**
     * Value single 
     * @public
     */
    single : "single",

    /**
     * Value multiple 
     * @public
     */
    multiple : "multiple",

    /**
     * Value none 
     * @public
     */
    none : "none"

  };
  

// -----------------------------------------------------------------------------
// Begin of Library Initialization coding, copied from shared.js
// -----------------------------------------------------------------------------

// check whether browser supports svg
sap.viz.__svg_support = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;

if ( sap.viz.__svg_support ) {
	//enforce early loading of D3 and Charting lib to load sap.viz.core early 
	jQuery.sap.require("sap.ui.thirdparty.d3");
	jQuery.sap.require("sap.viz.libs.canvg");
	jQuery.sap.require("sap.viz.libs.rgbcolor");
	jQuery.sap.require("sap.viz.libs.sap-viz");
}

(function() {

  function initLegacySupport() {
    
    var LEGACY_NAMES = {
        "sap.viz.core.BaseChart" : "sap.viz.ui5.core.BaseChart",
        "sap.viz.core.BaseStructuredType" : "sap.viz.ui5.core.BaseStructuredType",
        "sap.viz.core.Dataset" : "sap.viz.ui5.data.Dataset",
        "sap.viz.core.DimensionDefinition" : "sap.viz.ui5.data.DimensionDefinition",
        "sap.viz.core.FlattenedDataset" : "sap.viz.ui5.data.FlattenedDataset",      
        "sap.viz.core.MeasureDefinition" : "sap.viz.ui5.data.MeasureDefinition",      
        "sap.viz.Bar" : "sap.viz.ui5.Bar",
        "sap.viz.Bubble" : "sap.viz.ui5.Bubble",
        "sap.viz.VerticalBar" : "sap.viz.ui5.Column",
        "sap.viz.Combination" : "sap.viz.ui5.Combination",
        "sap.viz.Donut" : "sap.viz.ui5.Donut",
        "sap.viz.Line" : "sap.viz.ui5.Line",
        "sap.viz.Pie" : "sap.viz.ui5.Pie",
        "sap.viz.Scatter" : "sap.viz.ui5.Scatter",
        "sap.viz.StackedVerticalBar" : "sap.viz.ui5.StackedColumn",
        "sap.viz.PercentageStackedVerticalBar" : "sap.viz.ui5.StackedColumn100"
    };
  
    // create stubs for the most important legacy class names
    jQuery.each(LEGACY_NAMES, function(sOld,sNew) {
      // delegate constructor
      jQuery.sap.setObject(sOld, function() {
        var oNewClass = jQuery.sap.getObject(sNew);
        var oInstance = jQuery.sap.newObject(oNewClass.prototype);
        return oNewClass.apply(oInstance, arguments) || oInstance;
      });
      // delegate extend
      jQuery.sap.setObject(sOld + ".extend", function() {
        return jQuery.sap.getObject(sNew).extend.apply(this, arguments);
      });
    });
    
    // create stubs for the enum types (static classes)
    var oLibrary = sap.ui.getCore().getLoadedLibraries()["sap.viz"];
    if ( oLibrary && oLibrary.types ) {
      jQuery.each(oLibrary.types, function(idx, sName) {
        if ( sName.indexOf("sap.viz.ui5.types.") === 0 ) {
          jQuery.sap.setObject("sap.viz.types." + sName.slice("sap.viz.ui5.types.".length), jQuery.sap.getObject(sName));
        }
      });
    }
  }
  
  initLegacySupport();
  
  var bInitialized = false;

	sap.viz._initializeVIZ = function() {
		
		if ( !bInitialized && sap.viz.__svg_support ) {

      if ( sap.viz.lang && sap.viz.lang.langManager && jQuery.isArray(sap.viz.lang.langManager.loadPath) ) {
        var sPath = jQuery.sap.getModulePath("sap.viz.resources.langs", "/");
        sap.viz.lang.langManager.loadPath = [sPath];
        jQuery.sap.log.info("VIZ: load path for lang manager set to " + sPath);
      }

      // initialize the environment
      var oLocale = sap.ui.getCore().getConfiguration().getLocale();
      var sVIZLanguageId = oLocale.getLanguage() + (oLocale.getRegion() ? "_" + oLocale.getRegion() : "");
      sap.viz.env.initialize({
        'locale': sVIZLanguageId,
        'log' : 'debug' // TODO translate levels, attach to logging to be notified about level changes
      });
      jQuery.sap.log.info("VIZ: env initialized (locale=" + sap.ui.getCore().getConfiguration().getLanguage() + ")");

      // attach to theme changes
      sap.ui.getCore().attachThemeChanged(function(evt) {
        // TODO propagate CSS content to VIZ TemplateManager
      });

      bInitialized = true;
    }
  };

}());
