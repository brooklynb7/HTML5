(function() {
  var axisColor = "#707070";
  var axisGridlineColor = "#dadada";
  var barEffect = {
    background : {
      border : {
        top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
      },
      drawingEffect : "glossy",
    },
    legend : {
      drawingEffect : "glossy",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "glossy"
    },
    xAxis : {
      title : {
        visible : true,
      },
      axisline : {
        visible : false,
      },
      gridline : {
        type : "incised",
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
      axisline : {
        visible : false,
      },
      gridline : {
        color : axisGridlineColor,
      },
      color : axisColor,
    },
    plotArea : {
      drawingEffect : "glossy",
    },
  };
  var bar3dEffect = {
          background : {
            border : {
              top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
            },
            drawingEffect : "glossy",
          },
          legend : {
            drawingEffect : "glossy",
            title : { visible : true },
          },
          tooltip : {
            drawingEffect : "glossy"
          },
          xAxis : {
            title : {
              visible : true,
            },
            axisline : {
              visible : false,
            },
            gridline : {
              type : "incised",
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
            color : axisColor,
          },
          xAxis2 : {
            title : {
              visible : true,
            },
            axisline : {
              visible : false,
            },
            gridline : {
              color : axisGridlineColor,
            },
            color : axisColor,
          },
          plotArea : {
            drawingEffect : "glossy",
          },
          zAxis : {
                title : {
                  visible : true,
                },
                color : axisColor
          }
  };
  var dualbarEffect = {
      background : {
        border : {
          top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
        },
        drawingEffect : "glossy",
      },
      legend : {
        drawingEffect : "glossy",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "glossy"
      },
      xAxis : {
        title : {
          visible : true,
          applyAxislineColor : true,
        },
        axisline : {
          visible : false,
        },
        gridline : {
          type : "incised",
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
        axisline : {
          visible : false,
        },
        gridline : {
          color : axisGridlineColor,
        },
      },
      plotArea : {
        drawingEffect : "glossy",
      },
    };
  
  
  var verticalbarEffect = {
    background : {
      border : {
        top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
      },
      drawingEffect : "glossy"
    },
    legend : {
      drawingEffect : "glossy",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "glossy"
    },
    plotArea : {
      drawingEffect : "glossy"
    },
    yAxis : {
      title : {
        visible : true,
      },
      axisline : {
        visible : false,
      },
      gridline : {
        type : "incised",
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
      axisline : {
        visible : false,
      },
      gridline : {
        color : axisGridlineColor,
      },
      color : axisColor,
    },
  };
  var vertical3dbarEffect = {
          background : {
            border : {
              top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
            },
            drawingEffect : "glossy"
          },
          legend : {
            drawingEffect : "glossy",
            title : { visible : true },
          },
          tooltip : {
            drawingEffect : "glossy"
          },
          plotArea : {
            drawingEffect : "glossy"
          },
          yAxis : {
            title : {
              visible : true,
            },
            axisline : {
              visible : false,
            },
            gridline : {
              type : "incised",
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
            axisline : {
              visible : false,
            },
            gridline : {
              color : axisGridlineColor,
            },
            color : axisColor,
          },
          zAxis : {
            title : {
              visible : true
            },
            color : axisColor
          }
  };
  var dualverticalbarEffect = {
      background : {
        border : {
          top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
        },
        drawingEffect : "glossy"
      },
      legend : {
        drawingEffect : "glossy",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "glossy"
      },
      plotArea : {
        drawingEffect : "glossy"
      },
      yAxis : {
        title : {
          visible : true,
          applyAxislineColor : true,
        },
        axisline : {
          visible : false,
        },
        gridline : {
          type : "incised",
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
        axisline : {
          visible : false,
        },
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
      drawingEffect : "glossy"
    },
    legend : {
      drawingEffect : "glossy",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "glossy"
    },
    plotArea : {
      drawingEffect : "glossy"
    },
    xAxis : {
      title : {
        visible : true,
      },
      axisline : {
        visible : false,
      },
      gridline : {
        type : "incised",
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
      axisline : {
        visible : false,
      },
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
        drawingEffect : "glossy"
      },
      legend : {
        drawingEffect : "glossy",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "glossy"
      },
      plotArea : {
        drawingEffect : "glossy"
      },
      xAxis : {
        title : {
          visible : true,
          applyAxislineColor : true,
        },
        axisline : {
          visible : false,
        },
        gridline : {
          type : "incised",
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
        axisline : {
          visible : false,
        },
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
      drawingEffect : "glossy"
    },
    legend : {
      drawingEffect : "glossy",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "glossy"
    },
    plotArea : {
      drawingEffect : "glossy"
    },
    yAxis : {
      title : {
        visible : true,
      },
      axisline : {
        visible : false,
      },
      gridline : {
        type : "incised",
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
      axisline : {
        visible : false,
      },
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
        drawingEffect : "glossy"
      },
      legend : {
        drawingEffect : "glossy",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "glossy"
      },
      plotArea : {
        drawingEffect : "glossy"
      },
      yAxis : {
        title : {
          visible : true,
          applyAxislineColor : true,
        },
        axisline : {
          visible : false,
        },
        gridline : {
          type : "incised",
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
        axisline : {
          visible : false,
        },
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
      drawingEffect : "glossy"
    },
    legend : {
      drawingEffect : "glossy",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "glossy"
    },
    plotArea : {
      drawingEffect : "glossy"
    },
    yAxis : {
      title : {
        visible : true,
      },
      axisline : {
        visible : false,
      },
      gridline : {
        type : "incised",
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
      axisline : {
        visible : false,
      },
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
        drawingEffect : "glossy"
      },
      legend : {
        drawingEffect : "glossy",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "glossy"
      },
      plotArea : {
        drawingEffect : "glossy"
      },
      yAxis : {
        title : {
          visible : true,
          applyAxislineColor : true,
        },
        axisline : {
          visible : false,
        },
        gridline : {
          type : "incised",
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
        axisline : {
          visible : false,
        },
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
      drawingEffect : "glossy"
    },
    legend : {
      drawingEffect : "glossy",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "glossy"
    },
    plotArea : {
      drawingEffect : "glossy"
    },
    xAxis : {
      title : {
        visible : true,
      },
      axisline : {
        visible : false,
      },
      gridline : {
        type : "incised",
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
      axisline : {
        visible : false,
      },
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
        drawingEffect : "glossy"
      },
      legend : {
        drawingEffect : "glossy",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "glossy"
      },
      plotArea : {
        drawingEffect : "glossy"
      },
      xAxis : {
        title : {
          visible : true,
          applyAxislineColor : true,
        },
        axisline : {
          visible : false,
        },
        gridline : {
          type : "incised",
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
        axisline : {
          visible : false,
        },
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
      drawingEffect : "glossy"
    },
    legend : {
      drawingEffect : "glossy",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "glossy"
    },
    plotArea : {
      drawingEffect : "glossy"
    },
    yAxis : {
      title : {
        visible : true,
      },
      axisline : {
        visible : false,
      },
      gridline : {
        type : "incised",
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
      axisline : {
        visible : false,
      },
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
        drawingEffect : "glossy"
      },
      legend : {
        drawingEffect : "glossy",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "glossy"
      },
      plotArea : {
        drawingEffect : "glossy"
      },
      yAxis : {
        title : {
          visible : true,
          applyAxislineColor : true,
        },
        axisline : {
          visible : false,
        },
        gridline : {
          type : "incised",
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
        axisline : {
          visible : false,
        },
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
      drawingEffect : "glossy"
    },
    legend : {
      drawingEffect : "glossy",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "glossy"
    },
    plotArea : {
      drawingEffect : "glossy"
    },
    xAxis : {
      title : {
        visible : true,
      },
      axisline : {
        visible : false,
      },
      gridline : {
        type : "incised",
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
      axisline : {
        visible : false,
      },
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
        drawingEffect : "glossy"
      },
      legend : {
        drawingEffect : "glossy",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "glossy"
      },
      plotArea : {
        drawingEffect : "glossy"
      },
      xAxis : {
        title : {
          visible : true,
          applyAxislineColor : true,
        },
        axisline : {
          visible : false,
        },
        gridline : {
          type : "incised",
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
        axisline : {
          visible : false,
        },
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
      drawingEffect : "glossy"
    },
    legend : {
      drawingEffect : "glossy",
      title : { visible : true },
    },
    plotArea : {
      drawingEffect : "glossy"
    },
    yAxis : {
      title : {
        visible : true,
      },
      axisline : {
        visible : false,
      },
      gridline : {
        type : "incised",
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
      drawingEffect : "glossy",
      title : { visible : true },
    },
    plotArea : {
      drawingEffect : "glossy"
    }  
  };
  
  var pieWithDepthEffect = {
      tooltip: {
        drawingEffect: "glossy"
      },
      legend : {
        drawingEffect : "glossy",
        title : { visible : true },
      },
      plotArea : {
        drawingEffect : "glossy"
      }  
    };
  
  var radarEffect = {
    background : {
      visible: false,
    },
    legend : {
      drawingEffect : "glossy",
      title : { visible : true },
    },
    tooltip : {
      drawingEffect : "glossy"
    },
    plotArea : {
      drawingEffect : "glossy",
      valueAxis : {
        title : { visible : true, },
        gridline : {
          color : axisGridlineColor,
        }
      },
    },
  };
  
  var mekkoEffect = {
      background : {
        border : {
          top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
        },
        drawingEffect : "glossy",
      },
      legend : {
        drawingEffect : "glossy",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "glossy"
      },
      yAxis : {
        title : {
          visible : true,
        },
        axisline : {
          visible : false,
        },
        gridline : {
          type : "incised",
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
        axisline : {
            visible : true,
        },
        gridline : {
          color : axisGridlineColor,
        },
        color : axisColor,
      },
      plotArea : {
        drawingEffect : "glossy",
      },
    };
  var horizontalmekkoEffect = {
  background : {
        border : {
          top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
        },
        drawingEffect : "glossy",
      },
      legend : {
        drawingEffect : "glossy",
        title : { visible : true },
      },
      tooltip : {
        drawingEffect : "glossy"
      },
      xAxis : {
        title : {
          visible : true,
        },
        axisline : {
          visible : false,
        },
        gridline : {
          type : "incised",
          color : axisGridlineColor
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
        axisline : {
          visible : true,
        },
        color : axisColor,
      },
      yAxis2 : {
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
      plotArea : {
        drawingEffect : "glossy",
      },    
  };
  var template = {
    id : "flashy",
    name : "Flashy",
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
          drawingEffect : "glossy"
        },
        legend : {
          drawingEffect : "glossy",
          title : { visible : true },
        },
        tooltip : {
          drawingEffect : "glossy"
        },
        plotArea : {
          drawingEffect : "glossy"
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
          drawingEffect : "glossy"
        },
        legend : {
          drawingEffect : "glossy",
          title : { visible : true },
        },
        tooltip : {
          drawingEffect : "glossy"
        },
        yAxis : {
          title : {
            visible : true,
          },
          axisline : {
            visible : false,
          },
          gridline : {
            type : "incised",
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
          drawingEffect : "glossy"
        }
      },
      'viz/horizontal_boxplot' : {
        background : {
          border : {
            top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
          },
          drawingEffect : "glossy"
        },
        legend : {
          drawingEffect : "glossy",
          title : { visible : true },
        },
        tooltip : {
          drawingEffect : "glossy"
        },
        xAxis : {
          title : {
            visible : true,
          },
          axisline : {
            visible : false,
          },
          gridline : {
            type : "incised",
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
          drawingEffect : "glossy"
        }
      },
      'viz/waterfall' : {
        background : {
          border : {
            top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
          },
          drawingEffect : "glossy"
        },
        legend : {
          drawingEffect : "glossy",
          title : { visible : true },
        },
        tooltip : {
          drawingEffect : "glossy"
        },
        yAxis : {
          title : {
            visible : true,
          },
          axisline : {
            visible : false,
          },
          gridline : {
            type : "incised",
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
          drawingEffect : "glossy"
        }
      },
      'viz/horizontal_waterfall' : {
        background : {
          border : {
            top : { visible : false }, bottom : { visible : false }, left : { visible : false }, right : { visible : false },
          },
          drawingEffect : "glossy"
        },
        legend : {
          drawingEffect : "glossy",
          title : { visible : true },
        },
        tooltip : {
          drawingEffect : "glossy"
        },
        xAxis : {
          title : {
            visible : true,
          },
          axisline : {
            visible : false,
          },
          gridline : {
            type : "incised",
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
          drawingEffect : "glossy"
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
      'viz/horizontal_area':horizontallineEffect,
      'viz/multi_horizontal_area':horizontallineEffect,
      'viz/100_horizontal_area': horizontallineEffect,
      'viz/multi_100_horizontal_area': horizontallineEffect,
      'viz/pie' : pieEffect,
      'viz/multi_pie' : pieEffect,
      'viz/donut' : pieEffect,
      'viz/multi_donut' : pieEffect,
      'viz/pie_with_depth': pieWithDepthEffect,
      'viz/donut_with_depth': pieWithDepthEffect,    
      'viz/multi_pie_with_depth': pieWithDepthEffect,
      'viz/multi_donut_with_depth': pieWithDepthEffect,    
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
    css : ".v-m-main .v-background-body{fill:#eeeeee;}"
  };
  sap.viz.extapi.env.Template.register(template);
})();
