(function() {
var axisColor = "#AAAAAA";
var axisGridlineColor = "#333333";
var barEffect = {
  background : {
    border : {
      top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
    },
    drawingEffect : "normal",
  },
  legend : {
    drawingEffect : "normal",
    title : { visible : true },
  },
  tooltip : {
    drawingEffect : "normal"
  },
  xAxis : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      type : "line",
      color : axisGridlineColor,
      showLastLine : true,
    },
    color : axisColor,
  },
  yAxis : {
    title : {
      visible : true,
    },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  },
  xAxis2 : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  },
  plotArea : {
    drawingEffect : "normal",
  },
};

var bar3dEffect = {
		  background : {
		    border : {
		      top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false }
		    },
		    drawingEffect : "normal"
		  },
		  legend : {
		    drawingEffect : "normal",
		    title : { visible : true }
		  },
		  tooltip : {
		    drawingEffect : "normal"
		  },
		  xAxis : {
		    title : {
		      visible : true
		    },
		    axisline : { visible : false },
		    gridline : {
		      type : "line",
		      color : axisGridlineColor
		    },
		    color : axisColor
		  },
		  yAxis : {
		    title : {
		      visible : true
		    },
		    gridline : {
		      color : axisGridlineColor
		    },
		    color : axisColor
		  },
		  xAxis2 : {
		    title : {
		      visible : true
		    },
		    axisline : { visible : false},
		    gridline : {
		      color : axisGridlineColor
		    },
		    color : axisColor
		  },
		  plotArea : {
		    drawingEffect : "normal"
		  },
		  zAxis:{
		    title : {
		      visible : true
		    },
		    color : axisColor
		  }
};
var dualbarEffect = {
    background : {
      border : {
        top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
      },
      drawingEffect : "normal",
    },
    legend : {
      drawingEffect : "normal",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "normal"
    },
    xAxis : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        type : "line",
        color : axisGridlineColor,
        showLastLine : true,
      },
    },
    yAxis : {
      title : {
        visible : true,
      },
      gridline : {
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    xAxis2 : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        color : axisGridlineColor,
      },
    },
    plotArea : {
      drawingEffect : "normal",
    },
  };

var verticalbarEffect = {
  background : {
    border : {
      top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
    },
    drawingEffect : "normal"
  },
  legend : {
    drawingEffect : "normal",
    title : { visible : true },
  },
  tooltip : {
    drawingEffect : "normal"
  },
  plotArea : {
    drawingEffect : "normal"
  },
  yAxis : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      type : "line",
      color : axisGridlineColor,
      showFirstLine : true,
    },
    color : axisColor,
  },
  xAxis : {
    title : {
      visible : true,
    },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  },
  yAxis2 : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  },
};
var vertical3dbarEffect = {
		  background : {
		    border : {
		      top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false }
		    },
		    drawingEffect : "normal"
		  },
		  legend : {
		    drawingEffect : "normal",
		    title : { visible : true },
		  },
		  tooltip : {
		    drawingEffect : "normal"
		  },
		  plotArea : {
		    drawingEffect : "normal"
		  },
		  yAxis : {
		    title : {
		      visible : true,
		    },
		    axisline : { visible : false, },
		    gridline : {
		      type : "line",
		      color : axisGridlineColor,
		      showFirstLine : true,
		    },
		    color : axisColor,
		  },
		  xAxis : {
		    title : {
		      visible : true,
		    },
		    gridline : {
		      color : axisGridlineColor,
		    },
		    color : axisColor,
		  },
		  yAxis2 : {
		    title : {
		      visible : true,
		    },
		    axisline : { visible : false, },
		    gridline : {
		      color : axisGridlineColor,
		    },
		    color : axisColor,
		  },
		zAxis : {
		    title : {
		      visible : true,
		    },
		    color : axisColor
		  }
};
var dualverticalbarEffect = {
    background : {
      border : {
        top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
      },
      drawingEffect : "normal"
    },
    legend : {
      drawingEffect : "normal",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "normal"
    },
    plotArea : {
      drawingEffect : "normal"
    },
    yAxis : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        type : "line",
        color : axisGridlineColor,
        showFirstLine : true,
      },
    },
    xAxis : {
      title : {
        visible : true,
      },
      gridline : {
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    yAxis2 : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        color : axisGridlineColor,
      },
    },
  };

var stackedbarEffect = {

  background : {
    border : {
      top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
    },
    drawingEffect : "normal"
  },
  legend : {
    drawingEffect : "normal",
    title : { visible : true },
  },
  tooltip : {
    drawingEffect : "normal"
  },
  plotArea : {
    drawingEffect : "normal"
  },
  xAxis : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      type : "line",
      color : axisGridlineColor,
      showLastLine : true,
    },
    color : axisColor,
  },
  yAxis : {
    title : {
      visible : true,
    },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  },
  xAxis2 : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  }
};

var dualstackedbarEffect = {

    background : {
      border : {
        top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
      },
      drawingEffect : "normal"
    },
    legend : {
      drawingEffect : "normal",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "normal"
    },
    plotArea : {
      drawingEffect : "normal"
    },
    xAxis : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        type : "line",
        color : axisGridlineColor,
        showLastLine : true,
      },
    },
    yAxis : {
      title : {
        visible : true,
      },
      gridline : {
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    xAxis2 : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        color : axisGridlineColor,
      },
    }
  };

var stackedverticalbarEffect = {

  background : {
    border : {
      top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
    },
    drawingEffect : "normal"
  },
  legend : {
    drawingEffect : "normal",
    title : { visible : true },
  },
  tooltip : {
    drawingEffect : "normal"
  },
  plotArea : {
    drawingEffect : "normal"
  },
  yAxis : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      type : "line",
      color : axisGridlineColor,
      showFirstLine : true,
    },
    color : axisColor,
  },
  xAxis : {
    title : {
      visible : true,
    },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  },
  yAxis2 : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  }
};

var dualstackedverticalbarEffect = {

    background : {
      border : {
        top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
      },
      drawingEffect : "normal"
    },
    legend : {
      drawingEffect : "normal",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "normal"
    },
    plotArea : {
      drawingEffect : "normal"
    },
    yAxis : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        type : "line",
        color : axisGridlineColor,
        showFirstLine : true,
      },
    },
    xAxis : {
      title : {
        visible : true,
      },
      gridline : {
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    yAxis2 : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        color : axisGridlineColor,
      },
    }
  };

var lineEffect = {

  background : {
    border : {
      top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
    },
    drawingEffect : "normal"
  },
  legend : {
    drawingEffect : "normal",
    title : { visible : true },
  },
  tooltip : {
    drawingEffect : "normal"
  },
  plotArea : {
    drawingEffect : "normal"
  },
  yAxis : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      type : "line",
      color : axisGridlineColor,
      showFirstLine : true,
    },
    color : axisColor,
  },
  xAxis : {
    title : {
      visible : true,
    },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  },
  yAxis2 : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  }
};
var duallineEffect = {

    background : {
      border : {
        top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
      },
      drawingEffect : "normal"
    },
    legend : {
      drawingEffect : "normal",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "normal"
    },
    plotArea : {
      drawingEffect : "normal"
    },
    yAxis : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        type : "line",
        color : axisGridlineColor,
        showFirstLine : true,
      },
    },
    xAxis : {
      title : {
        visible : true,
      },
      gridline : {
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    yAxis2 : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        color : axisGridlineColor,
      },
    }
  };
var horizontallineEffect = {

  background : {
    border : {
      top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
    },
    drawingEffect : "normal"
  },
  legend : {
    drawingEffect : "normal",
    title : { visible : true },
  },
  tooltip : {
    drawingEffect : "normal"
  },
  plotArea : {
    drawingEffect : "normal"
  },
  xAxis : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      type : "line",
      color : axisGridlineColor,
      showLastLine : true,
    },
    color : axisColor,
  },
  yAxis : {
    title : {
      visible : true,
    },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  },
  xAxis2 : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  }
};

var dualhorizontallineEffect = {

    background : {
      border : {
        top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
      },
      drawingEffect : "normal"
    },
    legend : {
      drawingEffect : "normal",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "normal"
    },
    plotArea : {
      drawingEffect : "normal"
    },
    xAxis : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        type : "line",
        color : axisGridlineColor,
        showLastLine : true,
      },
    },
    yAxis : {
      title : {
        visible : true,
      },
      gridline : {
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    xAxis2 : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        color : axisGridlineColor,
      },
    }
  };
var combinationEffect = {

  background : {
    border : {
      top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
    },
    drawingEffect : "normal"
  },
  legend : {
    drawingEffect : "normal",
    title : { visible : true },
  },
  tooltip : {
    drawingEffect : "normal"
  },
  plotArea : {
    drawingEffect : "normal"
  },
  yAxis : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      type : "line",
      color : axisGridlineColor,
      showFirstLine : true,
    },
    color : axisColor,
  },
  xAxis : {
    title : {
      visible : true,
    },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  },
  yAxis2 : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  }
};

var dualcombinationEffect = {

    background : {
      border : {
        top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
      },
      drawingEffect : "normal"
    },
    legend : {
      drawingEffect : "normal",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "normal"
    },
    plotArea : {
      drawingEffect : "normal" 
    },
    yAxis : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        type : "line",
        color : axisGridlineColor,
        showFirstLine : true,
      },
    },
    xAxis : {
      title : {
        visible : true,
      },
      gridline : {
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    yAxis2 : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        color : axisGridlineColor,
      },
    }
  };
var horizontalcombinationEffect = {

  background : {
    border : {
      top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
    },
    drawingEffect : "normal"
  },
  legend : {
    drawingEffect : "normal",
    title : { visible : true },
  },
  tooltip : {
    drawingEffect : "normal"
  },
  plotArea : {
    drawingEffect : "normal"
  },
  xAxis : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      type : "line",
      color : axisGridlineColor,
      showLastLine : true,
    },
    color : axisColor,
  },
  yAxis : {
    title : {
      visible : true,
    },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  },
  xAxis2 : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  }
};

var dualhorizontalcombinationEffect = {

    background : {
      border : {
        top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
      },
      drawingEffect : "normal"
    },
    legend : {
      drawingEffect : "normal",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "normal"
    },
    plotArea : {
      drawingEffect : "normal"
    },
    xAxis : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        type : "line",
        color : axisGridlineColor,
        showLastLine : true,
      },
     },
    yAxis : {
      title : {
        visible : true,
      },
      gridline : {
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    xAxis2 : {
      title : {
        visible : true,
        applyAxislineColor : true,
      },
      axisline : { visible : false, },
      gridline : {
        color : axisGridlineColor,
      },
    }
  };
var bubbleEffect = {
  background : {
    border : {
      top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
    },
    drawingEffect : "normal"
  },
  legend : {
    drawingEffect : "normal",
    title : { visible : true },
  },
  plotArea : {
    drawingEffect : "normal"
  },
  yAxis : {
    title : {
      visible : true,
    },
    axisline : { visible : false, },
    gridline : {
      type : "line",
      color : axisGridlineColor,
      showFirstLine : true,
    },
    color : axisColor,
  },
  xAxis : {
    title : {
      visible : true,
    },
    gridline : {
      color : axisGridlineColor,
    },
    color : axisColor,
  },
};

var pieEffect = {
  legend : {
    drawingEffect : "normal",
    title : { visible : true },
  },
  plotArea : {
    drawingEffect : "normal"
  }  
};

var radarEffect = {
  background : {
    visible: false,
  },
  legend : {
    drawingEffect : "normal",
    title : { visible : true },
  },
  tooltip : {
    drawingEffect : "normal"
  },
  plotArea : {
    drawingEffect : "normal",
    valueAxis : {
      title : { visible : true, },
      gridline : {
        color : axisGridlineColor,
      }
    },
    dataline : {
      fill : {
        transparency : 0,
      },
    },
	polarGrid : {
	  color : axisGridlineColor
	},
  },
};

var mekkoEffect = {
    background : {
      border : {
        top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
      },
      drawingEffect : "normal",
    },
    legend : {
      drawingEffect : "normal",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "normal"
    },
    yAxis : {
      title : {
        visible : true,
      },
      axisline : { visible : false, },
      gridline : {
        type : "line",
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    xAxis : {
      title : {
        visible : true,
      },
      axisline : {
        visible : true,
      },
      gridline : {
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    xAxis2 : {
      title : {
        visible : true,
      },
      axisline : { visible : true},
      gridline : {
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    plotArea : {
      drawingEffect : "normal",
    },
  };
var horizontalmekkoEffect = {
    background : {
      border : {
        top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
      },
      drawingEffect : "normal",
    },
    legend : {
      drawingEffect : "normal",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "normal"
    },
    xAxis : {
      title : {
        visible : true,
      },
      axisline : { visible : false, },
      gridline : {
        type : "line",
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    yAxis : {
      title : {
        visible : true,
      },
      gridline : {
        color : axisGridlineColor,
      },
      axisline : { visible : true, },
      color : axisColor,
    },
    yAxis2 : {
      title : {
        visible : true,
      },
      axisline : { visible : true, },
      gridline : {
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    plotArea : {
      drawingEffect : "normal",
    },
  };
sap.viz.extapi.env.Template.register({
  id : "highcontrast",
  name : "HighContrast",
  version : "4.0.0",
  properties : {
    'viz/bar' : barEffect,
    'viz/3d_bar' : bar3dEffect,
    'viz/image_bar' : barEffect,
    'viz/multi_bar' : barEffect,
    'viz/dual_bar' : dualbarEffect,
    'viz/multi_dual_bar' : dualbarEffect,
    'viz/column' : verticalbarEffect,
    'viz/3d_column' : vertical3dbarEffect,
    'viz/multi_column' : verticalbarEffect,
    'viz/dual_column' : dualverticalbarEffect,
    'viz/multi_dual_column' : dualverticalbarEffect,
    'viz/stacked_bar' : stackedbarEffect,
    'viz/multi_stacked_bar' : stackedbarEffect,
    'viz/dual_stacked_bar' : dualstackedbarEffect,
    'viz/multi_dual_stacked_bar' : dualstackedbarEffect,
    'viz/100_stacked_bar' : stackedbarEffect,
    'viz/multi_100_stacked_bar' : stackedbarEffect,
    'viz/100_dual_stacked_bar' : dualstackedbarEffect,
    'viz/multi_100_dual_stacked_bar' : dualstackedbarEffect,
    'viz/stacked_column' : stackedverticalbarEffect,
    'viz/multi_stacked_column' : stackedverticalbarEffect,
    'viz/dual_stacked_column' : dualstackedverticalbarEffect,
    'viz/multi_dual_stacked_column' : dualstackedverticalbarEffect,
    'viz/100_stacked_column' : stackedverticalbarEffect,
    'viz/multi_100_stacked_column' : stackedverticalbarEffect,
    'viz/100_dual_stacked_column' : dualstackedverticalbarEffect,
    'viz/multi_100_dual_stacked_column' : dualstackedverticalbarEffect,
    'riv/cbar' : {
      background : {
        drawingEffect : "normal"
      },
      legend : {
        drawingEffect : "normal",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "normal"
      },
      plotArea : {
        drawingEffect : "normal"
      },
      yAxis : {
        title : {
          visible : true,
        },    
        gridline : {
          color : axisGridlineColor,
        },
        color : axisColor,
      },
    },
    'viz/combination' : combinationEffect,
    'viz/horizontal_combination' : horizontalcombinationEffect,
    'viz/dual_combination' : dualcombinationEffect,
    'viz/dual_horizontal_combination' : dualhorizontalcombinationEffect,
    'viz/boxplot' : {
      background : {
        border : {
          top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
        },
        drawingEffect : "normal"
      },
      legend : {
        drawingEffect : "normal",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "normal"
      },
      yAxis : {
        title : {
          visible : true,
        },    
        axisline : {
          visible : false,
        },
        gridline : {
          type : "line",
          color : axisGridlineColor,
          showFirstLine : true,
        },
        color : axisColor,
      },
      xAxis : {
        title : {
          visible : true,
        },    
        gridline : {
          color : axisGridlineColor,
        },
        color : axisColor,
      },
      plotArea : {
        drawingEffect : "normal"
      }
    },
    'viz/horizontal_boxplot' : {
      background : {
        border : {
          top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
        },
        drawingEffect : "normal"
      },
      legend : {
        drawingEffect : "normal",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "normal"
      },
      xAxis : {
        title : {
          visible : true,
        },    
        axisline : {
          visible : false,
        },
        gridline : {
          type : "line",
          color : axisGridlineColor,
          showLastLine : true,
        },
        color : axisColor,
      },
      yAxis : {
        title : {
          visible : true,
        },    
        gridline : {
          color : axisGridlineColor,
        },
        color : axisColor,
      },
      plotArea : {
        drawingEffect : "normal"
      }
    },
    'viz/waterfall' : {
      background : {
        border : {
          top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
        },
        drawingEffect : "normal"
      },
      legend : {
        drawingEffect : "normal",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "normal"
      },
      yAxis : {
        title : {
          visible : true,
        },
        axisline : {
          visible : false,
        },
        gridline : {
          type : "line",
          color : axisGridlineColor,
          showFirstLine : true,
        },
        color : axisColor,
      },
      xAxis : {
        title : {
          visible : true,
        },
        color : axisColor,
      },
      plotArea : {
        drawingEffect : "normal"
      }
    },
    'viz/horizontal_waterfall' : {
      background : {
        border : {
          top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
        },
        drawingEffect : "normal"
      },
      legend : {
        drawingEffect : "normal",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "normal"
      },
      xAxis : {
        title : {
          visible : true,
        },
        axisline : {
          visible : false,
        },
        gridline : {
          type : "line",
          color : axisGridlineColor,
          showLastLine : true,
        },
        color : axisColor,
      },
      yAxis : {
        title : {
          visible : true,
        },
        color : axisColor,
      },
      plotArea : {
        drawingEffect : "normal"
      }
    },
    
    'viz/stacked_waterfall' : stackedverticalbarEffect,
    'viz/horizontal_stacked_waterfall' :stackedbarEffect,
    
    'viz/line' : lineEffect,
    'viz/multi_line' : lineEffect,
    'viz/dual_line' : duallineEffect,
    'viz/multi_dual_line' : duallineEffect,
    'viz/horizontal_line' : horizontallineEffect,
    'viz/multi_horizontal_line' : horizontallineEffect,
    'viz/dual_horizontal_line' : dualhorizontallineEffect,
    'viz/multi_dual_horizontal_line' : dualhorizontallineEffect,
    
    'viz/area': lineEffect,
    'viz/multi_area': lineEffect,
    'viz/100_area': lineEffect,
    'viz/multi_100_area': lineEffect,
    'viz/horizontal_area': horizontallineEffect,
    'viz/multi_horizontal_area': horizontallineEffect,
    'viz/100_horizontal_area': horizontallineEffect,
    'viz/multi_100_horizontal_area': horizontallineEffect,
    'viz/pie' : pieEffect,
    'viz/multi_pie' : pieEffect,
    'viz/donut' : pieEffect,
    'viz/multi_donut' : pieEffect,
    'viz/bubble' : bubbleEffect,
    'viz/multi_bubble' : bubbleEffect,
    'viz/scatter' : bubbleEffect,
    'viz/multi_scatter' : bubbleEffect,
    'viz/scatter_matrix' : bubbleEffect,
    'viz/radar' : radarEffect,
    'viz/multi_radar' : radarEffect,
    'viz/tagcloud' : {
      legend : {
        title : { visible : true },
      },
    },
    'viz/heatmap' : {
      legend : {
        title : { visible : true },
      },
      xAxis : {
        title : {
          visible : true,
        },
        color : axisColor,
      },
      yAxis : {
        title : {
          visible : true,
        },
        color : axisColor,
      },
    },
    'viz/treemap' : {
      legend : {
        title : { visible : true },
      }
    },
    'viz/mekko': mekkoEffect,
    'viz/100_mekko' : mekkoEffect,
    'viz/horizontal_mekko' : horizontalmekkoEffect,
    'viz/100_horizontal_mekko' : horizontalmekkoEffect
  },
  css : "\
  .v-m-title .v-title{fill:#D8D8D8;}\
  .v-subtitle{fill:#D8D8D8;}\
  .v-title{fill:#D8D8D8;}\
  .v-label{fill:#D8D8D8;}\
  .v-background-body{fill:#1B1B1B;}\
  .v-pie .v-sector{stroke:black;}\
  .v-pie .v-donut-title{fill:#D8D8D8;}\
  .viz-polar-axis-label{fill:#D8D8D8;}\
  .v-datalabel{fill:#D8D8D8;}\
  .v-hoverline{stroke:#606060;}\
  .v-hovershadow{fill:#606060;}\
  .v-hovershadow-mousedown{fill:#cccccc;}\
  .v-m-tooltip .v-background{fill:#1B1B1B;stroke:#FFFFFF;}\
  .v-m-tooltip .v-body-title{fill:#D8D8D8;}\
  .v-m-tooltip .v-body-label{fill:#D8D8D8;}\
  .v-m-tooltip .v-body-value{fill:#D8D8D8;}\
  .v-m-tooltip .v-footer-label{fill:#D8D8D8;}\
  .v-m-tooltip .v-footer-value{fill:#D8D8D8;}\
  .v-datapoint-default{stroke:#000000}\
  .v-datapoint-hover{stroke:#000000}\
  .v-datapoint-selected{stroke:#cccccc}\
  .v-innerwhisker{stroke:#333333}\
  ",
});
})();
