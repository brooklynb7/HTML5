"use strict";

jQuery.sap.require('sap.portal.ui5.core.View');
jQuery.sap.declare('sap.portal.ui5.core.UI5ControlView');

/**
 * @experimental
 * @class sap.portal.ui5.core.UI5ControlView
 * @extends sap.portal.ui5.core.View
 */
sap.portal.ui5.core.View.extend('sap.portal.ui5.core.UI5ControlView', {

    metadata: {
        properties: {

            /**
             * @cfg {Object}
             * @accessor
             */
            config: {
                type: 'any',
                defaultValue: {}
            },

            /**
             * @cfg {string}
             * @accessor
             */
            controlClass: {
                type: 'string',
                defaultValue: null
            },

            /**
             * @cfg {Object}
             * @accessor
             */
            control: {
                type: 'any',
                defaultValue: null
            },

            /**
             * @cfg {Object}
             * @accessor
             */
            layoutControl: {
                type: 'any',
                defaultValue: null
            },

            /**
             * @cfg {string}
             * @accessor
             */
            layoutClass: {
                type: 'string',
                defaultValue: null
            },

            /**
             * @cfg {Object}
             * @accessor
             */
            layoutConfig: {
                type: 'any',
                defaultValue: {}
            },

            /**
             * @cfg {string|Array}
             */
            controlStyleClass: {
                type: 'any',
                defaultValue: null
            },

            /**
             * @cfg {string|Array}
             */
            layoutStyleClass: {
                type: 'any',
                defaultValue: null
            },

            /**
             * @cfg {string}
             */
            width: {
                type: 'string',
                defaultValue: null
            },

            /**
             * @cfg {string}
             */
            height: {
                type: 'string',
                defaultValue: null
            },

            /**
             * @cfg {string}
             */
            innerWidth: {
                type: 'string',
                defaultValue: null
            },

            /**
             * @cfg {string}
             */
            innerHeight: {
                type: 'string',
                defaultValue: null
            },

            /**
             * @cfg {string}
             */
            minWidth: {
                type: 'string',
                defaultValue: null
            },

            /**
             * @cfg {string}
             */
            minHeight: {
                type: 'string',
                defaultValue: null
            },

            /**
             * @cfg {string}
             */
            maxWidth: {
                type: 'string',
                defaultValue: null
            },

            /**
             * @cfg {string}
             */
            maxHeight: {
                type: 'string',
                defaultValue: null
            }

        },

        events: {

            /**
             * Fired when internal layout reflow happen
             * @event
             */
            innerReflow: {
            }

        }

    },

    /**
     * Promise placeholder
     * @protected
     */
    renderPromise: null,

    /**
     * Promise placeholder
     * @protected
     */
    unrenderPromise: null,

    /**
     * Promise placeholder
     * @protected
     */
    renderChildComponentsPromise: null,

    /**
     * Promise placeholder
     * @protected
     */
    processDimensionsPromise: null,

    /**
     * Promise placeholder
     * @protected
     */
    processInnerDimensionsPromise: null,

    /**
     * @protected
     * @param oConfig
     * @returns {*}
     */
    processConfig: function processConfig(oConfig) {

        return oConfig;

    },

    /**
     * @protected
     * @param oConfig
     * @returns {*}
     */
    processLayoutConfig: function processLayoutConfig(oConfig) {

        return oConfig;

    },

    /**
     * @protected
     * @method
     */
    instantiateLayoutControl: sap.portal.ui5.core.PropertyObserver(
        'layoutConfig',
        /**
         * @member sap.portal.ui5.core.UI5ControlView
         */
        function instantiateLayoutControl() {

            var oConfig  = this.getLayoutConfig(),
                oControl = this.getLayoutControl();

            // Do not instantiate control if no config
            // or control is already exists
            if (oConfig === null || oControl) {
                return;
            }

            var sInterface   = 'sap.ui.core.Control',
                sConstructor = this.getProperty('layoutClass');

            if (!sConstructor) {
                return;
            }

            oConfig  = this.processLayoutConfig(oConfig);
            oControl = sap.portal.ui5.core.Object.factoryObject(oConfig || {}, sInterface, sConstructor);

            this.setLayoutControl(oControl);

        }
    ).callOnInit(),

    /**
     * Helper function
     * @protected
     * @param oControl
     */
    invalidateControl: function invalidateControl(oControl, sReason) {

        var aPendingControls = sap.portal.ui5.core.UI5ControlView.aPendingInvalidationControls;

        // Push into invalidation if control still not in invalidation
        if (aPendingControls.indexOf(oControl) === -1 && !oControl.isInvalidateSuppressed()) {
            aPendingControls.push(oControl);

            if (sReason) {
                //jQuery.sap.log.warning((this.getController() ? this.getController().getComponentId() : this.getId()) + ', invalidating control ' + oControl.getId() + ': ' + sReason);
            }

            return oControl.invalidate();
        }

    },

    /**
     * @protected
     * @method
     */
    instantiateControl: sap.portal.ui5.core.PropertyObserver(
        'config',
        /**
         * @member sap.portal.ui5.core.UI5ControlView
         */
        function instantiateControl() {

            var oConfig  = this.getConfig(),
                oControl = this.getControl();

            // Do not instantiate control if no config
            // or control is already exists
            if (oConfig === null || oControl) {
                return;
            }

            var sInterface   = 'sap.ui.core.Control',
                sConstructor = this.getProperty('controlClass');

            if (!sConstructor) {
                return;
            }

            oConfig  = this.processConfig(oConfig);
            oControl = sap.portal.ui5.core.Object.factoryObject(oConfig || {}, sInterface, sConstructor);

            this.setControl(oControl);

        }
    ).callOnInit(),

    /**
     * @protected
     * @method
     */
    attachLayoutControl: sap.portal.ui5.core.PropertyObserver(
        ['control', 'layoutControl'],
        /**
         * @member sap.portal.ui5.core.UI5ControlView
         */
        function attachLayoutControl() {

            var oControl = this.getControl(),
                oLayoutControl = this.getLayoutControl();

            if (!oControl || !oLayoutControl) {
                return;
            }

            oLayoutControl.placeAt(oControl);

            if (typeof(oControl.insertContent) !== 'function') {
                throw new Error('Control does not support inner content/inner layout');
            }

        }
    ),

    /**
     * @protected
     * @method
     */
    processComponentModel: sap.portal.ui5.core.PropertyObserver(
        ['control', 'componentModel'],
        /**
         * @member sap.portal.ui5.core.UI5ControlView
         */
        function processComponentModel() {

            var oControl = this.getControl(),
                oModel   = this.getComponentModel();

            if (oModel   instanceof sap.ui.model.Model
            &&  oControl instanceof sap.ui.core.Element) {
                oControl.setModel(oModel);
            }

        }
    ).callOnInit(),

    /**
     * @protected
     */
    destroyControl: function destroyControl() {

        var oControl = this.getControl();

        if (oControl) {
            // Do destroy w/o invalidation if not rendered
            oControl.destroy( this.isRendered() ? false : true );
        }

        this.setControl(null);

    },

    /**
     * @protected
     */
    destroyLayoutControl: function destroyLayoutControl() {

        var oControl = this.getLayoutControl();

        if (oControl) {
            oControl.destroy();
        }

        this.setLayoutControl(null);

    },

    /**
     *
     * @returns {*}
     */
    destroy: function destroy() {

        var aPromises = [],
            fnSuper   = this._super.bind(this, arguments),
            sId       = this.getId(),
            oDfd      = jQuery.Deferred();

        oDfd.bInUse = true;
        oDfd.sUid   = 'destroy-' + jQuery.sap.uid();

        aPromises.push( this.unrender() );
        aPromises.push( this.destroyLayoutControl() );
        aPromises.push( this.destroyControl() );

        // Make promise which will be resolved
        // only when all operations be resolved
        jQuery
            .when.apply(jQuery, aPromises)
            .always( function() {

                jQuery
                    .when(fnSuper())
                    .always( function() {

                        //jQuery.sap.log.debug('Resolving UI5ControlView.destroy promise', sId, oDfd.sUid);
                        oDfd.resolve();

                    });

            });

        return oDfd.promise();

    },

    /**
     *
     * @returns {jQuery.promise}
     */
    unrender: function unrender() {

        var sId = this.getId(),
            oRenderPromise = this.renderPromise,
            oRenderChildComponentsPromise = this.renderChildComponentsPromise;

        this.fireEvent('beforeUnrender');

        if (oRenderPromise
        &&  oRenderPromise.bInUse
        &&  oRenderPromise.state() === 'pending') {
            //jQuery.sap.log.debug('Rejecting UI5ControlView.render promise', sId, oRenderPromise.sUid);
            oRenderPromise.reject();
        }

        if (oRenderChildComponentsPromise
        &&  oRenderChildComponentsPromise.bInUse
        &&  oRenderChildComponentsPromise.state() === 'pending') {
            //jQuery.sap.log.debug('Rejecting UI5ControlView.renderChildComponents promise', sId, oRenderChildComponentsPromise.sUid);
            oRenderChildComponentsPromise.reject();
        }

        this.renderPromise = null;
        this.renderChildComponentsPromise = null;

        var oDfd = this.unrenderPromise = jQuery.Deferred();

        oDfd.bInUse = true;
        oDfd.sUid   = 'unrender-' + jQuery.sap.uid();

        oDfd.done( function fireEvent() {

            this.fireEvent('unrender');

        }.bind(this));

        try {

            var oControl = this.getControl();

            switch (true) {

            // No control - no rendering
            case (oControl === null || typeof(oControl) === 'undefined'):
                //jQuery.sap.log.debug('Resolving UI5ControlView.unrender promise', sId, oDfd.sUid);
                oDfd.resolve(false /* indicates no rendedering */);
                break;

            case (oControl instanceof sap.ui.core.Element):

                var oUIArea = oControl.getUIArea(),
                    oParent = oControl.getParent();

                switch (true) {

                // try to remove using UIArea
                case (oUIArea && oUIArea.indexOfContent(oControl) !== -1):
                    sap.portal.ui5.core.UI5ControlView.aPendingUIUpdatedPromises.push(oDfd);
                    oUIArea.removeContent(oControl);
                    break;

                // else, try to remove using it's parent (only if it supports aggregation)
                case (oParent && typeof(oParent.removeContent) === 'function'):

                    oParent.removeContent(oControl);

                    // Remove content anyway even if invalidation is supressed
                    if (oParent.isInvalidateSuppressed()) {

                        oControl.$().remove();
                        oDfd.resolve();

                    } else {

                        sap.portal.ui5.core.UI5ControlView.aPendingUIUpdatedPromises.push(oDfd);

                    }

                    break;

                // remove using native jquery
                // note: don't use control destroy here.
                default:
                    oControl.$().remove();
                    oDfd.resolve();
                    break;

                }

                break;

            default:
                throw new Error('Unsupported');

            }

        } catch(oException) {

            oDfd.rejectWith(this, oException);
            throw oException;

        }

        return oDfd.promise();

    },

    /**
     *
     * @returns {jQuery.promise}
     */
    render: function render() {

        var oDfd     = this.renderPromise,
            oPlaceAt = this.getPlaceAt(),
            sId      = this.getId(),
            oUnrenderPromise = this.unrenderPromise;

        // Reject unrender promise if pending
        if (oUnrenderPromise
            && oUnrenderPromise.bInUse
            && oUnrenderPromise.state() === 'pending') {
                //jQuery.sap.log.debug('Rejecting UI5ControlView.unrender promise', sId, oUnrenderPromise.sUid);
                oUnrenderPromise.reject();
        }

        this.unrenderPromise = null;

        //jQuery.sap.log.debug('Rendering UI5ControlView', sId);

        var oConfig = {
            placeAt: oPlaceAt
        };

        if (oDfd && oDfd.bInUse) {

            if (jQuery.sap.equal(oConfig, oDfd.oConfig) && oDfd.state() !== 'rejected') {
                //jQuery.sap.log.debug('Reusing UI5ControlView.render promise (same config)', sId, oDfd.sUid);
                return oDfd;
            }

            switch (oDfd.state()) {

            case 'pending':
                //jQuery.sap.log.debug('Rejecting UI5ControlView.render promise', sId, oDfd.sUid);
                oDfd.reject();
                oDfd = jQuery.Deferred();
                break;

            default:
                oDfd = jQuery.Deferred();
                break;

            }

        } else if (!oDfd) {

            oDfd = jQuery.Deferred();

        }

        this.renderPromise = oDfd;

        oDfd.sUid     = 'render-' + jQuery.sap.uid();
        oDfd.bInUse  = true;
        oDfd.oConfig  = oConfig;
        oDfd.oPromise = oDfd.promise();
        oDfd.oPromise.oDeferred = oDfd;

        // Ignore destroyed state
        if (this.isDestroyed()) {
            //jQuery.sap.log.debug('Rejecting UI5ControlView.render promise', sId, oDfd.sUid);
            oDfd.reject();
            return oDfd.oPromise;
        }

        oDfd.done( function fireEvent() {

            this.fireEvent('render');

        }.bind(this));

        var bInvalidate = false,
            oCore = sap.ui.getCore();

        try {

            var oControl = this.getControl();

            if (!oControl) {
                oDfd.reject();
                return oDfd.oPromise;
            }

            var oPlaceHolder = (jQuery.isPlainObject(oPlaceAt)) ?
                oPlaceAt.target :
                oPlaceAt;

            if (typeof (oPlaceAt) === 'object') {

                var aProperties = [
                        'width', 'minWidth', 'maxWidth',
                        'height', 'minHeight', 'maxHeight',
                        'innerWidth', 'innerHeight'
                    ];

                var iPropertyIndex,
                    iPropertiesLength = aProperties.length,
                    sProperty, sMessage;

                for (iPropertyIndex = 0; iPropertyIndex < iPropertiesLength; iPropertyIndex++) {
                    sProperty = aProperties[iPropertyIndex];
                    if (typeof(oPlaceAt[sProperty]) !== 'undefined' && String(this.mProperties[sProperty]) !== String(oPlaceAt[sProperty])) {
                        oControl.iSuppressInvalidate++;
                        sMessage = sProperty + ' is changed from ' + this.mProperties[sProperty] + ' to ' + oPlaceAt[sProperty];
                        this.setProperty(sProperty, oPlaceAt[sProperty]);
                        oControl.iSuppressInvalidate--;
                        if (!jQuery.when(this.processDimensionsPromise).isResolved()
                        ||  !jQuery.when(this.processInnerDimensionsPromise).isResolved()) {
                            bInvalidate = typeof(bInvalidate) === 'string' ?
                                (bInvalidate + ', ' + sMessage) :
                                (sMessage);
                        }
                    }
                }

            }

            switch(true) {

            case oPlaceHolder instanceof sap.ui.commons.layout.PositionContainer:

                if (oControl.getParent() !== oPlaceHolder) {

                    // Disabling invalidation if exists
                    // because the position container
                    // will do his own content invalidation
                    bInvalidate = oPlaceHolder.getParent() ? false : true;

                    oPlaceHolder.iSuppressInvalidate++;
                    oPlaceHolder.setControl(oControl);
                    oPlaceHolder.iSuppressInvalidate--;

                    if (!this.isRendered()) {
                        bInvalidate = 'Position container got a new control';
                    }

                }

                break;

            case oPlaceHolder instanceof sap.ui.core.Element:

                // If placeholder supports content aggregation
                if (typeof(oPlaceHolder.insertContent) === 'function') {

                    var iActualIndex = oPlaceHolder.indexOfContent(oControl);

                    switch (true) {

                    // If control is not present or is already present,
                    // but have to be inserted at specific position
                    case (typeof(oPlaceAt.index) !== 'undefined') && (iActualIndex !== oPlaceAt.index):

                        // Actual UI5 have no ability to move content,
                        // so we need to remove content first and insert after
                        if (iActualIndex !== -1) {
                            oControl.iSuppressInvalidate++;
                            oPlaceHolder.removeContent(oControl);
                            oControl.iSuppressInvalidate--;
                        }

                        oControl.iSuppressInvalidate++;
                        oPlaceHolder.insertContent(oControl, oPlaceAt.index);
                        oControl.iSuppressInvalidate--;

                        bInvalidate = 'Content inserterted into control at specific position';
                        break;

                    // If control is not present then push it inside
                    // into end of stack if position is not specified
                    case iActualIndex === -1:
                        oControl.iSuppressInvalidate++;
                        oPlaceHolder.insertContent(oControl);
                        oControl.iSuppressInvalidate--;
                        bInvalidate = 'Content inserted into control';
                        break;

                    // Default:
                        // If control does not require any change
                        // e.g. already exists at required position
                        // then just resolve it.

                    }

                } else {

                    oControl.iSuppressInvalidate++;
                    oControl.placeAt(oPlaceHolder);
                    oControl.iSuppressInvalidate--;
                    bInvalidate = 'Control got a new placeholder';

                }

                break;

            case typeof(oPlaceHolder) === 'string':
            case oPlaceHolder instanceof jQuery:
                oControl.iSuppressInvalidate++;
                oControl.placeAt(oPlaceHolder);
                oControl.iSuppressInvalidate--;
                bInvalidate = 'Control got a new jQuery placeholder';
                break;

            case oPlaceHolder instanceof sap.portal.ui5.core.UI5ControlView:
                oControl.iSuppressInvalidate++;
                oControl.placeAt(oPlaceHolder.getControl());
                oControl.iSuppressInvalidate--;
                bInvalidate = 'Control got a new UI5 control placeholder';
                break;

            default:
                throw new Error('Unsupported placeholder');

            }

            if (bInvalidate) {

                // Control be invalidated, so we need to put our promise to pending (until render) stack.
                oDfd.sInvalidateReason = bInvalidate;
                //jQuery.sap.log.debug('Invalidating control of ' + sId + ': ' + bInvalidate, oControl, oDfd.uid)
                sap.portal.ui5.core.UI5ControlView.aPendingUIUpdatedPromises.push(oDfd);
                this.invalidateControl(oControl, bInvalidate);

            } else {

                // Resolve immideately if no rerender required
                //jQuery.sap.log.debug('Resolving UI5ControlView.render promise', sId, oDfd.sUid);
                oDfd.resolve(false /* indicates no rendedering */);

            }

        } catch(oException) {

            //jQuery.sap.log.debug('Rejecting UI5ControlView.render promise', sId, oDfd.sUid);
            oDfd.rejectWith(this, oException);
            throw oException;

        }

        return oDfd.oPromise;

    },

    /**
     *
     * @param {sap.portal.ui5.core.ComponentCollection} oChildComponents
     * @param {Object} oChildLayoutData
     * @param {Object} oComponentLayoutData
     * @returns {jQuery.promise}
     */
    renderChildComponents: function renderChildComponents(oChildComponents, oChildLayoutData, oComponentLayoutData) {

        var oDfd             = this.renderChildComponentsPromise,
            sId              = this.getId(),
            oControl         = this.getControl(),
            oControlDOM      = this.getControl().$(),
            oChildsControl   = this.getChildComponentsControl(),
            aChildComponents;

        switch (true) {

        case (oChildComponents instanceof sap.portal.ui5.core.ComponentCollection):
            aChildComponents = oChildComponents.getItems();
            break;

        case (jQuery.isArray(oChildComponents)):
            aChildComponents = oChildComponents;
            break;

        default:
            throw new TypeError('Child components is wrong');

        }

        //jQuery.sap.log.debug('Rendering UI5ControlView child components of', sId);

        var oConfig = {
            childComponents:     aChildComponents,
            childLayoutData:     oChildLayoutData,
            componentLayoutData: oComponentLayoutData,
            control:             oControl,
            childsControl:       oChildsControl
        };

        if (oDfd && oDfd.bInUse) {

            if (jQuery.sap.equal(oConfig, oDfd.oConfig) && oDfd.state() !== 'rejected') {
                //jQuery.sap.log.debug('Reusing UI5ControlView.renderChildComponents promise (same config)', sId, oDfd.sUid);
                return oDfd.oPromise;
            }

            switch (oDfd.state()) {

            case 'pending':
                //jQuery.sap.log.debug('Rejecting UI5ControlView.renderChildComponents promise', sId, oDfd.sUid);
                oDfd.reject();
                oDfd = jQuery.Deferred();
                break;

            default:
                oDfd = jQuery.Deferred();
                break;

            }

        } else if (!oDfd) {

            oDfd = jQuery.Deferred();

        }

        this.renderChildComponentsPromise = oDfd;

        oDfd.sUid     = 'render-child-components-' + jQuery.sap.uid();
        oDfd.bInUse   = true;
        oDfd.oConfig  = oConfig;
        oDfd.oPromise = oDfd.promise();
        oDfd.oPromise.oDeferred = oDfd;
        oDfd.oDependencies = {
            childPromises: [],
            preprocessPromises: [],
            renderChildComponentEventSubscribers: []
        };

        if (!oComponentLayoutData && !aChildComponents.length) {
            //jQuery.sap.log.debug('Resolving UI5ControlView.renderChildComponents promise (no change required)', sId, oDfd.sUid);
            oDfd.resolve();
            return oDfd.oPromise;
        }

        if (this.isDestroyed() || !oChildsControl) {
            //jQuery.sap.log.debug('Rejecting UI5ControlView.renderChildComponents promise', sId, oDfd.sUid);
            oDfd.reject();
            return oDfd.oPromise;
        }

        if (oComponentLayoutData) {

            if (oComponentLayoutData.animation) {

                var oAnimationPromise = jQuery.Deferred(),
                    oAnimationCSS     = {},
                    bReflow           = false;

                jQuery.each(['top', 'left', 'right', 'bottom'], function(iIndex, sProperty) {

                    if (typeof(oComponentLayoutData[sProperty]) !== 'undefined') {

                        var sValue = oControlDOM.css(sProperty);

                        // Cast to px if required
                        if (typeof(oComponentLayoutData[sProperty]) === 'number') {
                            oComponentLayoutData[sProperty] = String(oComponentLayoutData[sProperty]) + 'px';
                        }

                        // Compare properties
                        if (oComponentLayoutData[sProperty] !== sValue) {
                            oAnimationCSS[sProperty] = oComponentLayoutData[sProperty];
                        }

                    }

                });

                jQuery.each([
                    'width', 'height',
                    'minWidth', 'minHeight',
                    'maxWidth', 'maxHeight'
                ], function(iIndex, sProperty) {

                    if (typeof(oComponentLayoutData[sProperty]) !== 'undefined') {

                        var sActualValue = oControlDOM.css(sProperty),
                            sValue = oComponentLayoutData[sProperty];

                        // Cast to px if required
                        if (typeof(sValue) === 'number') {
                            sValue = String(sValue) + 'px';
                        }

                        // Compare properties
                        if (sValue !== sActualValue) {
                            oAnimationCSS[sProperty] = sValue;
                            bReflow = true;
                        }

                    }

                });

                // If nothing should be changed -> immideately resolve
                if (jQuery.sap.equal(oAnimationCSS, {})) {

                    oAnimationPromise.resolve();

                } else {

                    oControlDOM.stop(true, true).animate(
                        oAnimationCSS,
                        jQuery.extend(
                            {
                                complete: function onAnimationComplete() {

                                    if (bReflow && this.hasListeners('reflow')) {

                                        this.fireEvent('reflow', {
                                            reason: 'Animation completed: ' + JSON.stringify(oAnimationCSS)
                                        });
                                    }

                                    oAnimationPromise.resolve();

                                }.bind(this)
                            },
                            oComponentLayoutData.animation
                        )
                    );

                }

                oDfd.oDependencies.preprocessPromises.push(oAnimationPromise);

            } else {

                //
                // TODO: Detect parent position container?
                //

                oControlDOM
                    .css({
                        top:       oComponentLayoutData.top,
                        left:      oComponentLayoutData.left,
                        right:     oComponentLayoutData.right,
                        bottom:    oComponentLayoutData.bottom
                    });

                //
                // TODO: Fire reflow if top/left/right/bottom has changed
                //

                jQuery.each([
                    'width',  'minWidth',  'maxWidth',
                    'height', 'minHeight', 'maxHeight'
                ], function (iIndex, sProperty) {

                    if (typeof(oComponentLayoutData[sProperty]) !== 'undefined') {
                        this.setProperty(sProperty, oComponentLayoutData[sProperty]);
                    }

                }.bind(this));

            }

        }

        // We need to invalidate control only in case
        // when no content present, else we need to invalidate
        // only new content controls and not the whole layout control
        var bInvalidateChildsControl = !oChildsControl.getContent().length;

        if (bInvalidateChildsControl) {
            oChildsControl.iSuppressInvalidate++;
        }

        // Iterate over all child components
        jQuery.each(aChildComponents, function renderChildComponent(iIndex, oChild) {

            // Ignore destroyed childs
            if (oChild.isDestroyed()) {
                return;
            }

            var sChildId    = oChild.getComponentId();
            var oLayoutData = oChildLayoutData ? oChildLayoutData[sChildId] || {} : {};
            var oPlaceAt    = jQuery.extend({}, oLayoutData, {
                target: oChildsControl,
                index:  (typeof(oLayoutData.index) !== 'undefined' ? oLayoutData.index : iIndex)
            });

            switch(true) {

            // For absolute layout we need create position container and set as target
            // for content rendering
            case (oChildsControl instanceof sap.ui.commons.layout.AbsoluteLayout):

                var oControlPositions = oChildsControl.getPositions(),
                    oChildPlaceAt     = oChild.getPlaceAt(),
                    oPositionCSS      = {
                        top:    typeof(oLayoutData.top)    === 'number' ? oLayoutData.top    + 'px' : oLayoutData.top,
                        left:   typeof(oLayoutData.left)   === 'number' ? oLayoutData.left   + 'px' : oLayoutData.left,
                        right:  typeof(oLayoutData.right)  === 'number' ? oLayoutData.right  + 'px' : oLayoutData.right,
                        bottom: typeof(oLayoutData.bottom) === 'number' ? oLayoutData.bottom + 'px' : oLayoutData.bottom
                    },
                    oPositionContainer,
                    oPositionDOM,
                    iPositionIndex;

                // If no positions, how we can layout it?
                if (jQuery.sap.equal(oPositionCSS, {})) {
                    //jQuery.sap.log.warning('Component ' + sChildId + ' does not exists in layout data. The positioning of that component be skipped.');
                    return;
                }

                if (jQuery.isPlainObject(oChildPlaceAt) && oChildPlaceAt.target) {
                    oChildPlaceAt = oChildPlaceAt.target;
                }

                iPositionIndex = oControlPositions.indexOf(oChildPlaceAt);

                if (iPositionIndex !== -1) {

                    oPositionContainer = oControlPositions[iPositionIndex];
                    oPositionDOM = oPositionContainer.$();

                    var fnUpdatePositions = function updatePositions(bForce) {

                        var oActual = oPositionContainer.mProperties;

                        jQuery.each(['top', 'left', 'right', 'bottom'], function (iIndex, sProperty) {

                            switch (true) {

                            // If update forced
                            case bForce:

                            // (or) It's not a junk values when both actual top value and ld.top are missing
                            case (oActual[sProperty] || oPositionCSS[sProperty]) && (oActual[sProperty] !== oPositionCSS[sProperty]):
                                oChildsControl.iSuppressInvalidate++;
                                oPositionContainer.setProperty(sProperty, oPositionCSS[sProperty]);
                                oChildsControl.iSuppressInvalidate--;
                                break;

                            }

                        });

                        // For optimization set outside loop
                        if (bForce) {
                            oPositionDOM.css(oPositionCSS);
                        }

                    };

                    var oAnimation = oLayoutData.animation || false,
                        oCallbacks = {};

                    if (oAnimation) {

                        var oAnimationPromise = jQuery.Deferred(),
                            oAnimationQueue = oPositionDOM.queue();

                        if (oAnimationQueue && oAnimationQueue.length) {
                            oPositionDOM.stop(true, true);
                        }

                        oCallbacks.complete = function onAnimationComplete() {

                            if (oLayoutData.force) {
                                oPositionDOM.css(oPositionCSS);
                            }

                            fnUpdatePositions(oLayoutData.force);

                            // Update animation promise state according
                            // to main deferred state
                            switch (oDfd.state()) {

                            case 'rejected':
                                oAnimationPromise.reject();
                                break;

                            default:
                                oAnimationPromise.resolve();
                                break;

                            }

                        };

                        // If dom element is present - do animation and execute callbacks on end of animation
                        if (oPositionDOM.length) {
                            oPositionDOM.stop(true, true).animate(oPositionCSS, jQuery.extend(oCallbacks, oAnimation));
                        } else { // Immideately execute callback
                            oCallbacks.complete();
                        }

                        oDfd.oDependencies.preprocessPromises.push( oAnimationPromise.promise() );

                    } else {

                        fnUpdatePositions(oLayoutData.force);
                        //jQuery.sap.log.debug('Invalidating position container: updated positions', oPositionContainer);
                        this.invalidateControl(oPositionContainer, 'Updated positions: ' + JSON.stringify(oPositionCSS));

                    }

                } else {

                    // TODO: isNaN?
                    oPositionContainer = new sap.ui.commons.layout.PositionContainer({
                        top:    typeof(oLayoutData.top)    === 'number' ? oLayoutData.top   + 'px' : oLayoutData.top,
                        left:   typeof(oLayoutData.left)   === 'number' ? oLayoutData.left  + 'px' : oLayoutData.left,
                        right:  typeof(oLayoutData.right)  === 'number' ? oLayoutData.right + 'px' : oLayoutData.right,
                        bottom: typeof(oLayoutData.bottom) === 'number' ? oLayoutData.top   + 'px' : oLayoutData.bottom
                    });

                }

                oPlaceAt.target = oPositionContainer;

                break;

            /// ... support for another engines here...

            }

            // Process child component unrender lifecycle:
            // We need to suppress layout control invalidation
            // when child beign unrendered.
            oChild.attachEvent('beforeUnrender', {}, function onBeforeUnrender(oEvent) {

                var oLayout = this.getChildComponentsControl();

                // If no layout control object - do nothing
                if (!oLayout) {
                    return;
                }

                var fnReleaseSuspend = function releaseSuspend() {

                    oLayout.iSuppressInvalidate--;

                }.bind(this);

                // TODO: Solution for error/exceptional cases like:
                // a) unrender is failed, so layout is stuck in suppresion
                // b) component is destroyed or whatever
                oChild.attachEvent('unrender', {}, fnReleaseSuspend);
                oLayout.iSuppressInvalidate++;

            }.bind(this));

            // Render child component inside itself
            var oChildPromise = oChild.setPlaceAt(oPlaceAt);

            if (iPositionIndex === -1) {
                oChildsControl.addPosition(oPositionContainer);
                // Position Container doesn't fire the UI_UPDATED event.
                // Therefore, we need to release the promises manually.
                // This fixes a bug that sometimes the widgets' content is not rendered.
                sap.portal.ui5.core.UI5ControlView.resolvePendingUIUpdatedPromises();
            }

            // Resolve child promise when child is done
            // Place at returns promise
            oDfd.oDependencies.childPromises.push(oChildPromise);

        }.bind(this));

        jQuery

            // Wait until preprocess/animations are done
            .when.apply(jQuery, oDfd.oDependencies.preprocessPromises)

            .always( function releaseSupress() {

                if (bInvalidateChildsControl) {
                    oChildsControl.iSuppressInvalidate--;
                }

            })

            // Then resume control re-rendering and reflow it
            .pipe( function onAfterPreprocess() {

                // Do not re-render control if all childs are already resolved
                if (bInvalidateChildsControl) {
                    this.invalidateControl(oChildsControl);
                }

                return oDfd.oDependencies.childPromises;

            }.bind(this))

            // After reflow, the childs are already re-rendedered
            // We need to notify about it and resolve main promise.
            .pipe( function onAfterRerendering() {

                this.fireEvent('renderChildComponents', {
                    view:            this,
                    promises:        oDfd.oDependencies.renderChildComponentEventSubscribers,
                    childComponents: oChildComponents,
                    childLayout:     oChildLayoutData,
                    componentLayout: oComponentLayoutData
                });

                return jQuery.when.apply(jQuery, oDfd.oDependencies.renderChildComponentEventSubscribers);

            }.bind(this))

            .then( function() {

                var oCore = sap.ui.getCore();

                if (bInvalidateChildsControl) {

                    sap.portal.ui5.core.UI5ControlView.aPendingUIUpdatedPromises.push(oDfd);

                } else {

                    //jQuery.sap.log.debug('Resolving UI5ControlView.renderChildComponents promise', sId, oDfd.sUid);
                    oDfd.resolve();

                }

            });

        return oDfd.oPromise;

    },

    /**
     * Returns reference to control where child components should be injected
     * @protected
     * @return {sap.ui.core.Control}
     */
    getChildComponentsControl: function getChildComponentsControl() {

        return this.getLayoutControl() || this.getControl();

    },

    /**
     *
     * @returns {boolean}
     */
    isRendered: function isRendered() {

        var oControl = this.getLayoutControl() || this.getControl();

        if (!oControl) {
            return false;
        }

        return Boolean(oControl.$().length);

    },

    /**
     *
     * @returns {string|undefined}
     */
    getWidth: function getWidth(sUnit) {

        return this.getSizeProperty('width', '', sUnit);

    },

    /**
     *
     * @returns {string|undefined}
     */
    getInnerWidth: function getInnerWidth(sUnit) {

        return this.getSizeProperty('width', 'inner', sUnit);

    },

    /**
     *
     * @returns {string|undefined}
     */
    getHeight: function getHeight(sUnit) {

        return this.getSizeProperty('height', '', sUnit);

    },

    /**
     *
     * @returns {string|undefined}
     */
    getInnerHeight: function getInnerHeight(sUnit) {

        return this.getSizeProperty('height', 'inner', sUnit);

    },

    /**
     *
     * @param sProperty
     * @param sContext
     * @param sUnit
     * @returns {*}
     */
    getSizeProperty: function getSizeProperty(sProperty, sContext, sUnit) {

        var sValue, oControl,
            sUnit    = sUnit ? String(sUnit).toLowerCase() : '',
            sContext = sContext || '';

        switch(sContext) {

        case 'inner':
            oControl = this.getLayoutControl() || this.getControl();
            break;

        default:
            oControl = this.getControl();
            break;

        }

        if (oControl) {

            var vControlValue = oControl.mProperties[sProperty];

            // Trying to do "fast" read
            if (vControlValue && sUnit && typeof(vControlValue) === 'string' && vControlValue.indexOf(sUnit) !== -1) {

                sValue = vControlValue;

            } else {

                var sjQueryGetter = sContext.toLowerCase() +
                                    (sContext ? sProperty.charAt(0).toUpperCase() + sProperty.substr(1) :
                                                sProperty);

                var sUi5Getter = 'get' + sjQueryGetter.charAt(0).toUpperCase() + sjQueryGetter.substr(1);

                var oDOM = oControl.$();

                // Layout does not have own size
                // So we need to use parent DOM element
                if (this.getLayoutControl()) {
                   oDOM = oControl.$().parent();
                }

                if (typeof(oDOM[sjQueryGetter]) === 'function') {
                    sValue = oDOM[sjQueryGetter]();
                } else if (typeof(oControl[sUi5Getter]) === 'function') {
                    sValue = oControl[sUi5Getter]();
                } else {
                    throw new Error('Unsupported property');
                }

            }

        }

        switch (true) {

        // Convert empty value to zero + unit
        case (sValue === null || typeof(sValue) === 'undefined'):
            sValue = '0' + sUnit;
            break;

        // Ignore values with unit within
        case (sUnit && typeof(sValue) === 'string' && sValue.indexOf(sUnit) !== -1):
            break;

        // Any value convert to value + unit (if unit present)
        case Boolean(sUnit):
            sValue = String(sValue) + sUnit;
            break;

        }

        return sValue;

    },

    /**
     * Assign css classes to control
     * @protected
     * @method
     */
    processControlStyleClass: sap.portal.ui5.core.PropertyObserver(
        ['controlStyleClass', 'control'],
        /**
         * @param sKey
         * @param sNewValue
         * @param sOldValue
         */
        function processControlStyleClass(sKey, sNewValue, sOldValue) {

            var oControl = this.getControl();

            if (!oControl) {
                return;
            }

            var sStyleClass = this.getControlStyleClass();

            if (jQuery.isArray(sStyleClass)) {
                sStyleClass = sStyleClass.join(' ');
            }

            // Don't process empty classes
            if (!sStyleClass) {
                return;
            }

            // Remove old css classes
            if (sKey === 'controlStyleClass' && sOldValue) {
                oControl.removeStyleClass(sOldValue);
            }

            oControl.addStyleClass(sStyleClass);

        }
    ),

    /**
     * Assign css classes to layout control
     * @protected
     * @method
     */
    processLayoutStyleClass: sap.portal.ui5.core.PropertyObserver(
        ['layoutStyleClass', 'layoutControl'],
        /**
         * @param sKey
         * @param sNewValue
         * @param sOldValue
         */
        function processLayoutControlStyleClass(sKey, sNewValue, sOldValue) {

            var oControl = this.getLayoutControl();

            if (!oControl) {
                return;
            }

            var sStyleClass = this.getLayoutStyleClass();

            if (jQuery.isArray(sStyleClass)) {
                sStyleClass = sStyleClass.join(' ');
            }

            // Don't process empty classes
            if (!sStyleClass) {
                return;
            }

            // Remove old css classes
            if (sKey === 'layoutStyleClass' && sOldValue) {
                oControl.removeStyleClass(sOldValue);
            }

            oControl.addStyleClass(sStyleClass);

        }
    ),

    /**
     * @protected
     */
    processDimensions: sap.portal.ui5.core.PropertyObserver(
        ['width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'control'],
        /**
         *
         * @param sKey
         * @param sValue
         */
        function processDimensions(sKey, sValue) {

            var oControl = this.getControl();

            if (!oControl) {
                return;
            }

            var sId         = this.getId(),
                sWidth      = this.getProperty('width'),
                sHeight     = this.getProperty('height'),
                oDOM        = oControl.$(),
                oDfd        = this.processDimensionsPromise,
                bInvalidate = false,
                bReflow     = false;

            if (oDfd && oDfd.bInUse) {

                switch (oDfd.state()) {

                case 'pending':
                    //jQuery.sap.log.debug('Rejecting UI5ControlView.processDimensions promise', sId, oDfd.sUid);
                    oDfd.reject();
                    oDfd = jQuery.Deferred();
                    break;

                default:
                    oDfd = jQuery.Deferred();
                    break;

                }

            } else if (!oDfd) {

                oDfd = jQuery.Deferred();

            }

            this.processDimensionsPromise = oDfd;

            oDfd.sUid     = 'process-dimensions-' + jQuery.sap.uid();
            oDfd.bInUse   = true;
            oDfd.oPromise = oDfd.promise();
            oDfd.oPromise.oDeferred = oDfd;

            oControl.iSuppressInvalidate++;

            if (sWidth !== '' && !isNaN(sWidth)) {
                sWidth = sWidth + 'px';
            }

            if (sWidth !== '' && oControl.getWidth() !== sWidth) {

                bReflow = 'Width updated from ' + oControl.getWidth() + ' to ' + sWidth;

                if (oDOM.length) {
                    oDOM.width(sWidth);
                    oControl.mProperties.width = sWidth;
                } else {
                    bInvalidate = true;
                    oControl.setWidth(sWidth);
                }

            }

            if (sHeight !== '' && !isNaN(sHeight)) {
                sHeight = sHeight + 'px';
            }

            if (sHeight !== '' && oControl.getHeight() !== sHeight) {

                bReflow = 'Height updated from ' + oControl.getHeight() + ' to ' + sHeight;

                if (oDOM.length) {
                    oDOM.height(sHeight);
                    oControl.mProperties.height = sHeight;
                } else {
                    bInvalidate = true;
                    oControl.setHeight(sHeight);
                }

            }

            if (oDOM.length) {

                //
                // TODO: bReflow = true;
                //

                var sMinWidth  = this.getProperty('minWidth'),
                    sMaxWidth  = this.getProperty('maxWidth'),
                    sMinHeight = this.getProperty('minHeight'),
                    sMaxHeight = this.getProperty('maxHeight');

                if (sMinWidth !== '' && !isNaN(sMinWidth)) {
                    sMinWidth = sMinWidth + 'px';
                }

                if (sMaxWidth !== '' && !isNaN(sMaxWidth)) {
                    sMaxWidth = sMaxWidth + 'px';
                }

                if (sMinHeight !== '' && !isNaN(sMinHeight)) {
                    sMinHeight = sMinHeight + 'px';
                }

                if (sMaxHeight !== '' && !isNaN(sMaxHeight)) {
                    sMaxHeight = sMaxHeight + 'px';
                }

                oDOM.css({
                    minWidth:  sMinWidth,
                    maxWidth:  sMaxWidth,
                    minHeight: sMinHeight,
                    maxHeight: sMaxHeight
                });

            }

            oControl.iSuppressInvalidate--;

            oDfd.sReason = bReflow;

            if (bInvalidate) {

                if (bReflow) {

                    var fnNotifyReflow = function notify() {

                        sap.ui.getCore().detachEvent(
                            sap.ui.core.Core.M_EVENTS.UIUpdated,
                            fnNotifyReflow
                        );

                        //jQuery.sap.log.debug('Resolving UI5ControlView.processDimensions promise', sId, oDfd.sUid);
                        oDfd.resolve();

                        if (this.hasListeners('reflow')) {
                            //jQuery.sap.log.warning((this.getController() ? this.getController().getComponentId() : this.getId()) + ', firing reflow event: ' + bReflow);
                        }

                        this.fireEvent('reflow', {
                            reason: bReflow
                        });

                    }.bind(this);

                    if (!oControl.iSuppressInvalidate) {

                        // Unsubscribe if promise be rejected
                        oDfd.fail( function() {

                            sap.ui.getCore().detachEvent(
                                sap.ui.core.Core.M_EVENTS.UIUpdated,
                                fnNotifyReflow
                            );

                        });

                        sap.ui.getCore().attachEvent(
                            sap.ui.core.Core.M_EVENTS.UIUpdated,
                            fnNotifyReflow
                        );

                    }

                }

                this.invalidateControl(oControl, bReflow);

            } else if (bReflow) {

                //jQuery.sap.log.debug('Resolving UI5ControlView.processDimensions promise', sId, oDfd.sUid);
                oDfd.resolve();

                if (this.hasListeners('reflow')) {
                    //jQuery.sap.log.warning((this.getController() ? this.getController().getComponentId() : this.getId())+ ', firing reflow event: ' + bReflow);
                }

                this.fireEvent('reflow', {
                    reason: bReflow
                });

            } else {

                //jQuery.sap.log.debug('Resolving UI5ControlView.processDimensions promise (nothing changed)', sId, oDfd.sUid);
                oDfd.resolve();

            }

        }

    ),

    /**
     * @protected
     */
    processInnerDimensions: sap.portal.ui5.core.PropertyObserver(
        ['innerWidth', 'innerHeight', 'control', 'layoutControl'],
        /**
         *
         * @param sKey
         * @param sValue
         */
        function processInnerDimensions(sKey, sValue) {

            var oControl = this.getChildComponentsControl();

            if (!oControl) {
                return;
            }

            var sId         = this.getId(),
                sWidth      = this.getProperty('innerWidth'),
                sHeight     = this.getProperty('innerHeight'),
                oDOM        = oControl.$(),
                oDfd        = this.processInnerDimensionsPromise,
                bInvalidate = false,
                bReflow     = false;

            if (oDfd && oDfd.bInUse) {

                switch (oDfd.state()) {

                case 'pending':
                    //jQuery.sap.log.debug('Rejecting UI5ControlView.processInnerDimensions promise', sId, oDfd.sUid);
                    oDfd.reject();
                    oDfd = jQuery.Deferred();
                    break;

                default:
                    oDfd = jQuery.Deferred();
                    break;

                }

            } else if (!oDfd) {

                oDfd = jQuery.Deferred();

            }

            this.processInnerDimensionsPromise = oDfd;

            oDfd.sUid     = 'process-inner-dimensions-' + jQuery.sap.uid();
            oDfd.bInUse   = true;
            oDfd.oPromise = oDfd.promise();
            oDfd.oPromise.oDeferred = oDfd;

            oControl.iSuppressInvalidate++;

            if (sWidth !== '' && oControl.getWidth() !== sWidth) {

                if (!isNaN(sWidth)) {
                    sWidth = sWidth + 'px';
                }

                bReflow = 'Inner width updated from ' + oControl.getWidth() + ' to ' + sWidth;

                if (oDOM.length) {
                    oDOM.width(sWidth);
                    oControl.mProperties.width = sWidth;
                } else {
                    bInvalidate = true;
                    oControl.setWidth(sWidth);
                }

            }

            if (sHeight !== '' && oControl.getHeight() !== sHeight) {

                if (!isNaN(sHeight)) {
                    sHeight = sHeight + 'px';
                }

                bReflow = 'Inner height updated from ' + oControl.getHeight() + ' to ' + sHeight;

                if (oDOM.length) {
                    oDOM.height(sHeight);
                    oControl.mProperties.height = sHeight;
                } else {
                    bInvalidate = true;
                    oControl.setHeight(sHeight);
                }

            }

            oControl.iSuppressInvalidate--;

            if (bInvalidate) {

                if (bReflow) {

                    var fnNotifyReflow = function notify() {

                        sap.ui.getCore().detachEvent(
                            sap.ui.core.Core.M_EVENTS.UIUpdated,
                            fnNotifyReflow
                        );

                        //jQuery.sap.log.debug('Resolving UI5ControlView.processInnerDimensions promise', sId, oDfd.sUid);
                        oDfd.resolve();

                        this.fireEvent('innerReflow', {
                            reason: bReflow
                        });

                    }.bind(this);

                    // Unsubscribe if promise be rejected
                    oDfd.fail( function() {

                        sap.ui.getCore().detachEvent(
                            sap.ui.core.Core.M_EVENTS.UIUpdated,
                            fnNotifyReflow
                        );

                    });

                    sap.ui.getCore().attachEvent(
                        sap.ui.core.Core.M_EVENTS.UIUpdated,
                        fnNotifyReflow
                    );

                }

                this.invalidateControl(oControl, bReflow);

            } else if (bReflow) {

                //jQuery.sap.log.debug('Resolving UI5ControlView.processInnerDimensions promise', sId, oDfd.sUid);
                oDfd.resolve();

                this.fireEvent('innerReflow', {
                    reason: bReflow
                });

            } else {

                //jQuery.sap.log.debug('Resolving UI5ControlView.processInnerDimensions promise', sId, oDfd.sUid);
                oDfd.resolve();

            }

        }
    ),

    /**
     *
     * @param oChild
     * @returns {Object}
     */
    getChildComponentPositions: function getChildComponentPositions(oChild) {

        var oChildsControl   = this.getChildComponentsControl(),
            oPositions       = {};

        switch(true) {

        // For absolute layout we need create position container and set as target
        // for content rendering
        case (oChildsControl instanceof sap.ui.commons.layout.AbsoluteLayout):

            var oControlPositions = oChildsControl.getPositions(),
                oChildPlaceAt     = oChild.getPlaceAt(),
                oPositionContainer,
                iPositionIndex;

            if (jQuery.isPlainObject(oChildPlaceAt) && oChildPlaceAt.target) {
                oChildPlaceAt = oChildPlaceAt.target;
            }

            iPositionIndex = oControlPositions.indexOf(oChildPlaceAt);

            if (iPositionIndex === -1) {
                break;
            }

            oPositionContainer = oControlPositions[iPositionIndex];
            oPositions.index   = oControlPositions.indexOf(oChildPlaceAt);
            oPositions.top     = oPositionContainer.getTop();
            oPositions.left    = oPositionContainer.getLeft();
            oPositions.right   = oPositionContainer.getRight();
            oPositions.bottom  = oPositionContainer.getBottom();

            break;

        default:
            oPositions.index   = oControlPositions.indexOf(oChildPlaceAt);
            break;

        }

        return oPositions;

    }

});

(function() {

    var oNS = sap.portal.ui5.core.UI5ControlView;

    /**
     * @static
     * @type {Array}
     */
    oNS.aPendingInvalidationControls = [];

    /**
     * @static
     * @type {Array}
     */
    oNS.aPendingUIUpdatedPromises = [];

    /**
     * @method
     * @static
     */
    oNS.resolvePendingUIUpdatedPromises = function resolvePendingUIUpdatedPromises() {

        var aPromises = oNS.aPendingUIUpdatedPromises;
        var iIndex, iLength = aPromises.length;

        if (!iLength) {
            return;
        }

        // Important, clean array by assigning new empty array
        // to prepare it for next rendering cycle
        oNS.aPendingUIUpdatedPromises    = [];
        oNS.aPendingInvalidationControls = [];

        for (iIndex =  0; iIndex < iLength; iIndex++) {
            //jQuery.sap.log.debug('Resolving pending UIUpdated promise #', iIndex, aPromises[iIndex].sUid);
            aPromises[iIndex].resolve();
        }

        //jQuery.sap.log.debug('Resolved ', iLength,' pending UIUpdated promises');

    };

    // Subscribe to UI Update event
    sap.ui.getCore().attachEvent(
        sap.ui.core.Core.M_EVENTS.UIUpdated,
        oNS.resolvePendingUIUpdatedPromises
    );

}());