jQuery.sap.require('sap.portal.ui5.core.View');

jQuery.sap.declare('sap.portal.ui5.plugins.UI5PanelView');

sap.portal.ui5.core.View.extend('sap.portal.ui5.plugins.UI5PanelView', {

    metadata: {
        properties: {
            uiControl: {
                type: 'any',
                defaultValue: {
                    uctype: 'sap.ui.commons.Panel',
                    areaDesign: '{/areaDesign}',
                    borderDesign: '{/borderDesign}',
                    // buttons: '{/buttons}', - throws error
                    collapsed: '{/collapsed}',
                    // content: '{/content}', - not allowed in order to avoid contradiction with `childComponents` of component
                    // customData: '{/customData}', - throws error
                    enabled: '{/enabled}',
                    height: '{/height}',
                    // id: '{/id}', - ID can't be binded
                    // layoutData: '{/layoutData}', - not allowed in order to avoid contradiction with `layout` of component
                    scrollLeft: '{/scrollLeft}',
                    scrollTop: '{/scrollTop}',
                    showCollapseIcon: '{/showCollapseIcon}',
                    text: '{/text}',
                    // title: '{/title}', - throws error
                    // tooltip: '{/tooltip}', - throws error
                    visible: '{/visible}',
                    width: '{/width}'
                }
            },
            componentModelClass: {
                type: 'string',
                defaultValue: 'sap.ui.model.json.JSONModel'
            }
        }
    },

    _processUiControl: sap.portal.ui5.core.PropertyObserver('uiControl',function processUiControl(sKey, oValue, oOldValue, oObserver) {

        if (jQuery.isPlainObject(oValue)) {
            jQuery.sap.require(oValue.uctype);
            var fnClass = jQuery.sap.getObject(oValue.uctype);
            oValue = new fnClass(oValue);
            oObserver.updatePropertyValue(oValue);
        }

    }).callOnInit(),

    _processModel: sap.portal.ui5.core.PropertyObserver(
            [
                'componentModel', // Describes why I created such property in view.
                'uiControl'
            ],
            function (sKey) {

                var oCmpModel = this.getPropertyByPath('componentModel'),
                        oUiControl = this.getProperty('uiControl');

                // if not ready
                if (!oCmpModel || !oUiControl) {
                    return;
                }

                oUiControl.setModel(oCmpModel);

            }
    ).callOnInit(),

    render: function render() {

        var oUiControl = this.getUiControl(),
                oPlaceAt = this.getPlaceAt(),
                fnOrigAfterRendering,
                oData,
                oCss,
                fnApplyCss;

        fnApplyCss = function () {
            var mComputedStyle;

            fnOrigAfterRendering.apply(this, arguments);
            oData = oUiControl.getModel().getData();
            oCss = {};
            if (oData.hasOwnProperty('position')) {
                oCss.position = oData.position;
            }
            if (oData.hasOwnProperty('top')) {
                oCss.top = oData.top;
            }
            if (oData.hasOwnProperty('left')) {
                oCss.left = oData.left;
            }
            if (oData.hasOwnProperty('bottom')) {
                oCss.bottom = oData.bottom;
            }
            if (oData.hasOwnProperty('right')) {
                oCss.right = oData.right;
            }
            if (oData.hasOwnProperty('contentWidth')) {
                mComputedStyle = window.getComputedStyle(oUiControl.getDomRef());
                // Add borders width
                oCss.width = parseFloat(oData.contentWidth.slice(0, -2)) + parseFloat((mComputedStyle['border-left-width'] || '0px').slice(0, -2)) + parseFloat((mComputedStyle['border-right-width'] || '0px').slice(0, -2));
            }
            oUiControl.$().css(oCss);

            if (oData.hasOwnProperty('contentHeight')) {
                // Set component height by defining content area height
                oUiControl.$().children('.sapUiPanelCont').css({
                    position: oData.contentPosition,
                    height: oData.contentHeight
                })
            }
        };
        fnApplyCss.changed = true;

        if (!oUiControl.onAfterRendering.changed) {
            fnOrigAfterRendering = oUiControl.onAfterRendering;
            oUiControl.onAfterRendering = fnApplyCss;
        }
        oUiControl.placeAt(oPlaceAt);

    },

    renderChildComponents: function renderChildComponents(oChildComponents, oLayoutData) {

        var iIndex,
                iLength,
                oChild,
                sChildComponentId,
                oUiControl,
                mLayoutDataItem,
                oComponentModel,
                oComponentModelData,
                fnModelConstructor;

        fnModelConstructor = jQuery.sap.getObject(this.getProperty('componentModelClass'));

        if (typeof fnModelConstructor !== 'function') {
            throw new TypeError('Class ' + this.getProperty('componentModelClass') + ' is not found');
        }

        oUiControl = this.getUiControl();
        for (iIndex = 0, iLength = oChildComponents.getLength(); iIndex < iLength; iIndex++) {
            oChild = oChildComponents.getItemAtIndex(iIndex);
            sChildComponentId = oChild.getComponentId();
            if (oLayoutData && sChildComponentId && (mLayoutDataItem = oLayoutData[sChildComponentId])) {
                oComponentModel = oChild.getComponentModel();
                if (!oComponentModel) {
                    oComponentModel = new fnModelConstructor();
                    oChild.setComponentModel(oComponentModel);
                }
                oComponentModelData = oComponentModel.getData() || {};
                oComponentModelData = jQuery.extend(oComponentModelData, mLayoutDataItem);
                oComponentModel.setData(oComponentModelData);
            }

            oChild.setPlaceAt(oUiControl);
        }


    }

});
