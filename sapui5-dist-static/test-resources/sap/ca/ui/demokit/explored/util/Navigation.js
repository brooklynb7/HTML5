jQuery.sap.declare("util.Navigation");

util.Navigation = {
    categories: [
        {
            name: util.Title.CATEGORY_CONTROLS,
            controls: [
                {id: util.Id.INPLACE_EDIT, name: util.Title.INPLACE_EDIT, desc: "sap.ca.ui.InPlaceEdit", img: "Control"},
                {id: util.Id.ADD_PICTURE, name: util.Title.ADD_PICTURE, desc: "sap.ca.ui.AddPicture", img: "Control"},
                {id: util.Id.PICTURE_VIEWER, name: util.Title.PICTURE_VIEWER, desc: "sap.ca.ui.PictureViewer", img: "Control"},
                {id: util.Id.CUSTOMER_CONTEXT, name: util.Title.CUSTOMER_CONTEXT, desc: "sap.ca.ui.CustomerContext", img: "Control"},
                {id: util.Id.DATE_PICKER, name: util.Title.DATE_PICKER, desc: "sap.ca.ui.DatePicker", img: "Control"},
                {id: util.Id.NOTES, name: util.Title.NOTES, desc: "sap.ca.ui.Notes", img: "Control"},
                {id: util.Id.EXPANSIBLE_FEED_LIST_ITEM, name: util.Title.EXPANSIBLE_FEED_LIST_ITEM, desc: "sap.ca.ui.ExpansibleFeedListItem", img: "Control"},
                {id: util.Id.HIERARCHY, name: util.Title.HIERARCHY, desc: "sap.ca.ui.Hierarchy", img: "Control"},
                {id: util.Id.QUICK_OVERVIEW, name: util.Title.QUICK_OVERVIEW, desc: "sap.ca.ui.quickoverview.Quickoverview", img: "Control"},
                {id: util.Id.OVERFLOW_CONTAINER, name: util.Title.OVERFLOW_CONTAINER, desc: "sap.ca.ui.OverflowContainer", img: "Control"},
                {id: util.Id.FILE_UPLOAD, name: util.Title.FILE_UPLOAD, desc: "sap.ca.ui.FileUpload", img: "Control"},
                {id: util.Id.HIERARCHICAL_SELECT_DIALOG, name: util.Title.HIERARCHICAL_SELECT_DIALOG, desc: "sap.ca.ui.HierarchicalSelectDialog", img: "Control"},
                {id: util.Id.OVERVIEW_TILE, name: util.Title. OVERVIEW_TILE, desc: "sap.ca.ui.OverviewTile", img: "Control"},
                {id: util.Id.GROWING_TILE_CONTAINER, name: util.Title.GROWING_TILE_CONTAINER, desc: "sap.ca.ui.GrowingTileContainer", img: "Control"}

            ]
        },
        {
            name:util.Title.CATEGORY_TYPES,
            controls:[
                {id:util.Id.FILE_SIZE, name:util.Title.TYPE_FILESIZE, desc:"sap.ca.ui.model.type.FileSize", img:"Control"},
                {id:util.Id.AMOUNT, name:util.Title.FORMAT_AMOUNT, desc:"sap.ca.ui.model.format.AmountFormat", img:"Control"},
                {id:util.Id.QUANTITY, name:util.Title.FORMAT_QUANTITY, desc:"sap.ca.ui.model.format.QuantityFormat", img:"Control"},
                {id:util.Id.NUMBER, name:util.Title.TYPE_NUMBER, desc:"sap.ca.ui.model.type.Number", img:"Control"},
                {id:util.Id.LIBRARY, name:util.Title.FORMAT_LIBRARY, desc:"sap.ca.ui.model.type.FormattingLibrary", img:"Control"},
                {id:util.Id.DATE, name:util.Title.FORMAT_DATE, desc:"sap.ca.ui.model.type.Date", img:"Control"}
            ]
        },
        {
            name:util.Title.CATEGORY_SAMPLE_APPS,
            controls:[
                {id:util.Id.IMAGE_GALLERY, name:util.Title.IMAGE_GALLERY, desc:"Image Gallery Sample", img:"App"} ,
                {id:util.Id.TAB_CONTAINER_AND_TOOLBAR, name:util.Title.TAB_CONTAINER_AND_TOOLBAR, desc:"Sample for Charts with Tab Container and Toolbar", img:"App"},
                {id:util.Id.OBJECT_HEADER_AND_CHART, name:util.Title.OBJECT_HEADER_AND_CHART, desc:"Sample Chart and Object Header", img:"App"},
                {id:util.Id.CHART_FORMATTER, name:util.Title.CHART_FORMATTER, desc:"Chart Formatter Samples", img:"App"},
                {id:util.Id.SEMANTIC_COLORING, name:util.Title.SEMANTIC_COLORING, desc:"Chart Semantic Coloring", img:"App"},

            ]
        },
        {
            name:util.Title.CATEGORY_REUSABLE_DIALOGS,
            controls:[
                {id:util.Id.ABOUT, name:util.Title.DIALOG_ABOUT, desc:"sap.ca.ui.dialog.about", img:"Control"},
                {id:util.Id.CONFIRM, name:util.Title.DIALOG_CONFIRM, desc:"sap.ca.ui.dialog.confirmation", img:"Control"},
                {id:util.Id.MESSAGE_HANDLING, name:util.Title.DIALOG_MESSAGE, desc:"sap.ca.ui.dialog.info", img:"Control"},
                {id:util.Id.FORWARD, name:util.Title.DIALOG_FORWARD, desc:"sap.ca.ui.dialog.forward", img:"Control"},
                {id:util.Id.LOGINDETAILS, name:util.Title.DIALOG_LOGIN, desc:"sap.ca.ui.message", img:"Control"},
                {id:util.Id.TABLE_PERSO, name: util.Title.TABLE_PERSO, desc:"sap.ca.ui.utils", img:"Control"}
            ]
        },
        {
            name:util.Title.CATEGORY_CHARTS,
            controls:[
//                {id:util.Id.CHART_TOOL_BAR, name: util.Title.CHART_TOOL_BAR, desc: "sap.ca.ui.charts.ChartToolBar", img: "Control"},
                {id:util.Id.COMBINED_CHART, name:util.Title.COMBINED_CHART, desc:"sap.ca.ui.chart.CombinedChart", img:"Control"},
                {id:util.Id.VERTICAL_BAR_CHART, name:util.Title.VERTICAL_BAR_CHART, desc:"sap.ca.ui.chart.VerticalBarChart", img:"Control"},
                {id:util.Id.HORIZONTAL_BAR_CHART, name:util.Title.HORIZONTAL_BAR_CHART, desc:"sap.ca.ui.chart.HorizontalBarChart", img:"Control"},
                {id:util.Id.STACKED_BAR_CHART, name: util.Title.STACKED_BAR_CHART, desc: "sap.ca.ui.charts.StackedHorizontalBarChart", img: "Control"},
                {id:util.Id.STACKED_COLUMN_CHART, name: util.Title.STACKED_COLUMN_CHART, desc: "sap.ca.ui.charts.StackedVerticalColumnChart", img: "Control"},
                {id:util.Id.BUBBLE_CHART, name: util.Title.BUBBLE_CHART, desc: "sap.ca.ui.charts.BubbleChart", img: "Control"},
//                {id:util.Id.LINE_CHART, name: util.Title.LINE_CHART, desc: "sap.ca.ui.charts.LineChart", img: "Control"},
//                {id:util.Id.CHART_OVERFLOW_CONTAINER, name: util.Title.CHART_OVERFLOW_CONTAINER, desc: "sap.ca.ui.OverflowContainer", img: "Control"},
//                {id:util.Id.SIMPLE_LINE_CHART, name: util.Title.SIMPLE_LINE_CHART, desc: "sap.ca.ui.charts.LineChart", img: "Control"}
                {id:util.Id.SIMPLE_LINE_CHART, name: util.Title.LINE_CHART, desc: "sap.ca.ui.charts.LineChart", img: "Control"}
            ]
        }
    ]
};
