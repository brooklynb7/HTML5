"use strict";

jQuery.sap.require('sap.portal.ui5.core.Object');
jQuery.sap.require('sap.portal.ui5.core.PropertyObserver');
jQuery.sap.require('sap.portal.ui5.core.ComponentManager');
jQuery.sap.require('sap.portal.ui5.core.View');
jQuery.sap.require('sap.portal.ui5.core.LayoutData');
jQuery.sap.declare('sap.portal.ui5.core.Component');


/**
 * @experimental
 * @class sap.portal.ui5.core.Component
 * @extends sap.portal.ui5.core.Object
 */
sap.portal.ui5.core.Object.extend('sap.portal.ui5.core.Component', {

    metadata: {
        properties: {

            /**
             * @cfg {string}
             * @accessor
             */
            componentId: {
                type: 'any',
                defaultValue: null
            },

            /**
             * @cfg {string}
             * @accessor
             */
            placeAt: {
                type: 'any',
                defaultValue: null
            },

            /**
             * @cfg {sap.portal.ui5.core.LayoutInterface}
             * @accessor
             */
            layout: {
                type: 'any',
                defaultValue: null
            },

            /**
             * @cfg {sap.portal.ui5.core.LayoutData}
             * @accessor
             */
            layoutData: {
                type: 'any',
                defaultValue: null
            },

            /**
             * @cfg {sap.portal.ui5.core.View}
             * @accessor
             */
            view: {
                type: 'any',
                defaultValue: null
            },

            /**
             * @cfg {sap.portal.ui5.core.Object}
             * @accessor
             */
            componentModel: {
                type: 'any',
                defaultValue: null
            },

            /**
             * @cfg {sap.portal.ui5.core.ComponentCollection}
             * @accessor
             */
            childComponents: {
                type: 'any',
                defaultValue: {}
            },

            /**
             * @private
             * @cfg {string}
             * @accessor
             */
            componentModelClass: {
                type: 'string',
                defaultValue: 'Object'
            },

            /**
             * @private
             * @cfg {string}
             * @accessor
             */
            childComponentsClass: {
                type: 'string',
                defaultValue: 'sap.portal.ui5.core.ComponentCollection'
            },

            /**
             * @private
             * @cfg {string}
             * @accessor
             */
            layoutClass: {
                type: 'string',
                defaultValue: 'sap.portal.ui5.core.LayoutInterface'
            },

            /**
             * @private
             * @cfg {string}
             * @accessor
             */
            layoutDataClass: {
                type: 'string',
                defaultValue: 'sap.portal.ui5.core.LayoutData'
            },

            /**
             * @private
             * @cfg {string}
             * @accessor
             */
            viewClass: {
                type: 'string',
                defaultValue: 'sap.portal.ui5.core.View'
            }

        },

        events: {

            /**
             * Before component became unrendered
             * @event
             */
            beforeUnrender: {},

            /**
             * Component became unrendered
             * @event
             */
            unrender: {},

            /**
             * Before component became rendered
             * @event
             */
            beforeRender: {},

            /**
             * Component is rendered
             * @event
             */
            render: {},

            /**
             * Before component layout process
             * @event
             */
            beforeLayout: {},

            /**
             * Component's content is layouted
             * @event
             */
            layout: {},

            /**
             * Before component repaint/dimension change
             * @event
             */
            beforeReflow: {},

            /**
             * Component repainted/dimension changed
             * @event
             */
            reflow: {}

        }

    },

    /**
     * Promise placeholder
     * @protected
     */
    renderViewPromise: null,

    /**
     * Promise placeholder
     * @protected
     */
    layoutChildComponentsPromise: null,

    /**
     * @protected
     */
    layoutChildComponentsSuspended: 0,

    /**
     * @private
     */
    _oOldPlaceAt: null,
    /**
     * @protected
     */
    unrenderViewPromise: null,

    /**
     * @public
     * @param oValue
     * @returns {jQuery.Promise|null}
     */
    setPlaceAt: function setPlaceAt(oValue) {

        this.setProperty('placeAt', oValue);

        if (oValue === null) {
            return this.unrenderViewPromise ?
                this.unrenderViewPromise.oPromise :
                null;
        } else {
            return this.renderViewPromise ?
                this.renderViewPromise.oPromise :
                null;
        }

    },

    /**
     * @public
     * @param oView
     * @returns {jQuery.Promise|null}
     */
    setView: function setView(oView) {

        var oRenderViewPromise = this.renderViewPromise,
            oLayoutChildComponentsPromise = this.layoutChildComponentsPromise;

        // Reject any already existing view rendering promise
        if (oRenderViewPromise
        &&  oRenderViewPromise.bInUse
        &&  oRenderViewPromise.state() === 'pending') {
            oRenderViewPromise.reject();
        }

        // Reject any already existing view rendering promise
        if (oLayoutChildComponentsPromise
        &&  oLayoutChildComponentsPromise.bInUse
        &&  oLayoutChildComponentsPromise.state() === 'pending') {
            oLayoutChildComponentsPromise.reject();
        }

        this.setProperty('view', oView);

        // It's a new object, not an actual oRenderViewPromise
        return this.renderViewPromise ?
            this.renderViewPromise.oPromise :
            null;

    },

    /**
     * @private
     * @method
     */
    _registerInComponentManager: sap.portal.ui5.core.PropertyObserver(
        ['componentId'],
        /**
         * @private
         * @member sap.portal.ui5.core.Component
         * @param sKey
         * @param sComponentId
         * @param sOldComponentId
         * @param oObserver
         */
        function registerInComponentManager(sKey, sComponentId, sOldComponentId, oObserver) {

            // Generating default value based on actual id
            if (sOldComponentId === null) {

                // Update view property in object without triggering observervation again
                if (sComponentId === null || sComponentId === '') {
                    sComponentId = this.getId();
                }

                oObserver.updatePropertyValue(sComponentId);

            } else {

                this.unregisterInComponentManager(sOldComponentId);

            }

            // TODO: Check for immutable?
            sap.portal.ui5.core.ComponentManager.registerComponent(sComponentId, this);

        }
    ).callOnInit(),

    /**
     * @private
     * @method
     */
    _processViewClass: sap.portal.ui5.core.PropertyObserver(
        ['viewClass', 'view'],
        /**
         * @private
         * @member sap.portal.ui5.core.Component
         * @param sKey
         * @param oValue
         * @param oOldValue
         * @param oObserver
         */
        function processViewClass(sKey, oValue, oOldValue, oObserver) {

            var sProperty       = 'view';
            var oObject         = this.getProperty(sProperty),
                sInterfaceClass = this.getProperty(sProperty + 'Class');

            if (oObject === null) {
                return;
            }

            if (jQuery.isPlainObject(oObject)) {

                oObject = sap.portal.ui5.core.Object.factoryUCTypeObject(oObject, sInterfaceClass);

                // Update property in object without triggering observervation again
                oObserver.updatePropertyValue(oObject, sProperty);

            } else if (sInterfaceClass && !sap.portal.ui5.core.Object.isInstanceOf(oObject, sInterfaceClass)) {

                throw new Error('Interface mismatch');

            }

        }
    ).callOnInit(),

    /**
     * @private
     * @method
     */
    _processChildComponentsClass: sap.portal.ui5.core.PropertyObserver(
        ['childComponentsClass', 'childComponents'],
        /**
         * @private
         * @member sap.portal.ui5.core.Component
         * @param sKey
         * @param oValue
         * @param oOldValue
         * @param oObserver
         */
        function processChildComponentsClass(sKey, oValue, oOldValue, oObserver) {

            var sProperty = 'childComponents';
            var oObject = this.getProperty(sProperty),
                sInterfaceClass = this.getProperty(sProperty + 'Class');

            // Convert child components array to hash with items
            if (jQuery.isArray(oObject)) {
                oObject = { items: oObject };
            }

            if (jQuery.isPlainObject(oObject)) {

                oObject = sap.portal.ui5.core.Object.factoryUCTypeObject(oObject, sInterfaceClass);

                // Update property in object without triggering observervation again
                oObserver.updatePropertyValue(oObject, sProperty);

            } else if (sInterfaceClass && !sap.portal.ui5.core.Object.isInstanceOf(oObject, sInterfaceClass)) {

                throw new Error('Interface mismatch');

            }

        }
    ).callOnInit(),

    /**
     * @private
     * @method
     */
    _processComponentModelClass: sap.portal.ui5.core.PropertyObserver(
        ['componentModelClass', 'componentModel'],
        /**
         * @private
         * @member sap.portal.ui5.core.Component
         * @param sKey
         * @param oValue
         * @param oOldValue
         * @param oObserver
         */
        function processComponentModelClass(sKey, oValue, oOldValue, oObserver) {

            var sProperty = 'componentModel';
            var oObject = this.getProperty(sProperty),
                sInterfaceClass  = this.getProperty(sProperty + 'Class');

            if (oObject === null) {
                return;
            }

            if (jQuery.isPlainObject(oObject)) {

                oObject = sap.portal.ui5.core.Object.factoryUCTypeObject(oObject, sInterfaceClass);

                // Update property in object without triggering observervation again
                oObserver.updatePropertyValue(oObject, sProperty);

            } else if (sInterfaceClass && !sap.portal.ui5.core.Object.isInstanceOf(oObject, sInterfaceClass)) {

                throw new Error('Interface mismatch');

            }

        }
    ).callOnInit(),

    /**
     * @private
     * @method
     */
    _processChildComponentsBinding: sap.portal.ui5.core.PropertyObserver(
        ['childComponents'],
        /**
         * @private
         * @member sap.portal.ui5.core.Component
         * @param sKey
         * @param oChildComponents
         * @param oOldChildComponents
         * @param oObserver
         */
        function processChildComponentsBinding(sKey, oChildComponents, oOldChildComponents, oObserver) {

            if (oOldChildComponents) {
                this.unbindChildComponents(oOldChildComponents);
            }

            if (oChildComponents) {
                this.bindChildComponents(oChildComponents);
            }

        }
    ).callOnInit(),

    /**
     * @protected
     * @param {sap.portal.ui5.core.ComponentCollection} oChildComponents
     */
    bindChildComponents: function bindChildComponents(oChildComponents) {

        this.bindChildComponentsObservation(oChildComponents);
        this.bindChildComponentsRelayoutObservation(oChildComponents);

    },

    /**
     * Hook method to do operations over new items in component collection
     * @protected
     * @param {sap.portal.ui5.core.Component} oChildComponent
     */
    bindChildComponent: function bindChildComponent(oChildComponent) {

        this.bindChildComponentRelayoutObservation(oChildComponent);

    },

    /**
     * Observe changes in component collection
     * @protected
     * @param {sap.portal.ui5.core.ComponentCollection} oChildComponents
     */
    bindChildComponentsObservation: function bindChildComponentsObservation(oChildComponents) {

        var fnBindItem = function bindItem(oEvent) {

            var oChild = oEvent.getParameter('item');
            this.bindChildComponent(oChild);

        }.bind(this);

        var fnBindAllItems = function bindAllItems() {

            this.getChildComponents().forEach( function bindItem(oChild) {

                this.bindChildComponent(oChild);

            }.bind(this));

        }.bind(this);

        oChildComponents.attachEvent('itemAdded',          {}, fnBindItem);
        oChildComponents.attachEvent('itemReplaced',       {}, fnBindItem);
        oChildComponents.attachEvent('collectionReplaced', {}, fnBindAllItems);

        fnBindAllItems();

    },

    /**
     * Observe changes in child component object
     * and trigger relayout when it is required
     * @protected
     * @param {sap.portal.ui5.core.Component} oChildComponent
     */
    bindChildComponentRelayoutObservation: function bindChildComponentRelayoutObservation(oChildComponent) {

        // We want to prevent additional relayout if relayout is already pending
        var bPendingRelayout = false;

        oChildComponent.attachEvent('reflow', {}, function onChildReflow(oEvent) {

            // If pending relayout exists -> further relayout are not relevant
            if (bPendingRelayout) {
                return;
            }

            var oRenderViewPromise = this.renderViewPromise,
                oLayoutChildComponentsPromise = this.layoutChildComponentsPromise;

            // Skip if already existing view rendering promise
            if (oRenderViewPromise
            && oRenderViewPromise.bInUse
            && oRenderViewPromise.state() === 'pending') {
                bPendingRelayout = true;
                oRenderViewPromise.always(function () {
                    bPendingRelayout = false;
                    this.layoutChildComponents();
                }.bind(this));
                return;
            }

            // Skip if already existing view rendering promise
            if (oLayoutChildComponentsPromise
            && oLayoutChildComponentsPromise.bInUse
            && oLayoutChildComponentsPromise.state() === 'pending') {
                bPendingRelayout = true;
                oLayoutChildComponentsPromise.always(function () {
                    bPendingRelayout = false;
                    this.layoutChildComponents();
                }.bind(this));
                return;
            }

            //jQuery.sap.log.warning('Relayouting ' + this.getComponentId() + ' due reflow event from ' + oChildComponent.getComponentId() + ': ' + oEvent.getParameter('reason'));
            this.layoutChildComponents();

        }.bind(this));

    },

    /**
     * Observe changes in child components collection
     * and trigger relayout when it is required
     * @protected
     * @param {sap.portal.ui5.core.ComponentCollection} oChildComponents
     */
    bindChildComponentsRelayoutObservation: function bindChildComponentsRelayoutObservation(oChildComponents) {

        // Do relayout if in collection item changed view or componentId property
        oChildComponents.attachEvent('itemModified', {}, function onItemModification(oEvent) {

            switch (oEvent.getParameter('property')) {

            case 'view':
            case 'componentId':
                this.layoutChildComponents();
                break;

            }

        }.bind(this));

        var activeEvents = {
            itemAdded:    true,
            itemRemoved:  true,
            itemReplaced: true
        };

        // Suspend listening for atomic changes
        oChildComponents.attachEvent('beforeCollectionReplaced', {}, function onBeforeCollectionReplaced() {

            activeEvents.itemAdded   = false;
            activeEvents.itemRemoved = false;

        }.bind(this));

        // Do relayout if whole collection changed
        oChildComponents.attachEvent('collectionReplaced', {}, function onCollectionReplaced() {

            activeEvents.itemAdded   = false;
            activeEvents.itemRemoved = false;
            this.layoutChildComponents();
            activeEvents.itemAdded   = true;
            activeEvents.itemRemoved = true;

        }.bind(this));

        for (var eventName in activeEvents) {
            oChildComponents.attachEvent(eventName, {}, function onCollectionEvent(oEvent) {

                // Exit if suspended
                if (!activeEvents[oEvent.sId]) {
                    return;
                }

                this.layoutChildComponents();

            }.bind(this));
        }

    },

    /**
     * @protected
     * @param oChildComponents
     */
    unbindChildComponents: function unbindChildComponents(oChildComponents) {

        // TBD

    },

    /**
     * @protected
     * @param oLayoutData
     */
    bindLayoutData: function bindLayoutData(oLayoutData) {

        // Do relayout if in collection change occured
        oLayoutData.attachEvent('itemModified', {}, function onItemModification(oEvent) {

             this.layoutChildComponents();

        }.bind(this));

        var activeEvents = {
            itemAdded:    true,
            itemRemoved:  true,
            itemReplaced: true
        };

        // Suspend listening for atomic changes
        oLayoutData.attachEvent('beforeCollectionReplaced', {}, function onBeforeCollectionReplaced() {

            activeEvents.itemAdded   = false;
            activeEvents.itemRemoved = false;

        }.bind(this));

        // Do relayout if whole collection changed
        oLayoutData.attachEvent('collectionReplaced', {}, function onCollectionReplaced() {

            this.layoutChildComponents();
            activeEvents.itemAdded   = true;
            activeEvents.itemRemoved = true;

        }.bind(this));

        for (var eventName in activeEvents) {
            oLayoutData.attachEvent(eventName, {}, function onCollectionEvent(oEvent) {

                // Exit if suspended
                if (!activeEvents[oEvent.sId]) {
                    return;
                }

                this.layoutChildComponents();

            }.bind(this));
        }

    },

    /**
     * @protected
     * @param oChildComponents
     */
    unbindLayoutData: function unbindLayoutData(oLayoutData) {

        // TBD

    },

    /**
     * @method
     * @private
     */
    _processLayoutClass: sap.portal.ui5.core.PropertyObserver(
        ['layoutClass', 'layout'],
        /**
         * @private
         * @member sap.portal.ui5.core.Component
         * @param sKey
         * @param oValue
         * @param oOldValue
         * @param oObserver
         */
        function processLayoutClass(sKey, oValue, oOldValue, oObserver) {

            var sProperty = 'layout';
            var oObject = this.getProperty(sProperty),
                sInterfaceClass  = this.getProperty(sProperty + 'Class');

            if (oObject === null) {
                return;
            }

            if (jQuery.isPlainObject(oObject)) {

                oObject = sap.portal.ui5.core.Object.factoryUCTypeObject(oObject, sInterfaceClass);

                // Update property in object without triggering observervation again
                oObserver.updatePropertyValue(oObject, sProperty);

            } else if (sInterfaceClass && !sap.portal.ui5.core.Object.isInstanceOf(oObject, sInterfaceClass)) {

                throw new Error('Interface mismatch');

            }

        }
    ).callOnInit(),

    /**
     * @method
     * @private
     */
    _processLayoutDataClass: sap.portal.ui5.core.PropertyObserver(
        ['layoutDataClass', 'layoutData'],
        /**
         * @member sap.portal.ui5.core.Component
         * @param sKey
         * @param oValue
         * @param oOldValue
         * @param oObserver
         */
        function processLayoutDataClass(sKey, oValue, oOldValue, oObserver) {

            var sProperty = 'layoutData';
            var oObject = this.getProperty(sProperty),
                sInterfaceClass = this.getProperty(sProperty + 'Class');

            if (oObject === null) {
                return;
            }

            // Convert data array to hash with items
            if (jQuery.isArray(oObject)) {
                oObject = { items: oObject };
            }

            if (jQuery.isPlainObject(oObject)) {

                oObject = sap.portal.ui5.core.Object.factoryUCTypeObject(oObject, sInterfaceClass);

                // Update property in object without triggering observervation again
                oObserver.updatePropertyValue(oObject, sProperty);

            } else if (sInterfaceClass && !sap.portal.ui5.core.Object.isInstanceOf(oObject, sInterfaceClass)) {

                throw new Error('Interface mismatch');

            }

        }
    ).callOnInit(),

    /**
     * @private
     * @method
     */
    _processLayoutDataBinding: sap.portal.ui5.core.PropertyObserver(
        ['layoutData'],
        /**
         * @private
         * @member sap.portal.ui5.core.Component
         * @param sKey
         * @param oLayoutData
         * @param oOldLayoutData
         * @param oObserver
         */
        function processLayoutDataBinding(sKey, oLayoutData, oOldLayoutData, oObserver) {

            if (oOldLayoutData) {
                this.unbindLayoutData(oOldLayoutData);
            }

            if (oLayoutData) {
                this.bindLayoutData(oLayoutData);
            }

        }
    ).callOnInit(),

    /**
     * @method
     * @protected
     */
    bindView: sap.portal.ui5.core.PropertyObserver(
        ['view'],
        /**
         * @private
         * @member sap.portal.ui5.core.Component
         * @method
         * @param sKey
         * @param oView
         * @param oOldView
         */
        function bindView(sKey, oView, oOldView) {

            if (oOldView) {
                this.unbindView(oOldView);
            }

            if (!oView || jQuery.isPlainObject(oView)) {
                return;
            }

            oView.attachController(this);

            var aForwardEvents = [
                'reflow',
                'unrender',
                'beforeReflow',
                'beforeUnrender'
            ];

            jQuery.each(aForwardEvents, function(iIndex, sEventName) {
                oView.attachEvent(sEventName, {}, function(oEvent) {
                    this.fireEvent(sEventName, oEvent.getParameters());
                }.bind(this));
            }.bind(this));

        }
    ).callOnInit(),

    /**
     * @method
     * @private
     */
    _bindComponentModelToView: sap.portal.ui5.core.PropertyObserver(
        ['view', 'componentModel'],
        /**
         * @member sap.portal.ui5.core.Component
         * @private
         */
        function bindComponentModelToView() {

            var oView  = this.getView(),
                oModel = this.getComponentModel();

            if (!oView || !oModel
            ||  jQuery.isPlainObject(oView)
            ||  jQuery.isPlainObject(oModel)) {
                return;
            }

            oView.setComponentModel(oModel);

        }
    ).callOnInit(),

    /**
     * @method
     * @private
     */
    _processPlaceAt: sap.portal.ui5.core.PropertyObserver(
        ['placeAt', 'view'],
        /**
         * @member sap.portal.ui5.core.Component
         * @private
         * @returns jQuery.promise
         */
        function processPlaceAt(sKey, oValue, oOldValue) {

            if (sKey === 'placeAt') {
                this._oOldPlaceAt = oOldValue;
            }

            if (oValue === null) {
                return this.unrender();
            } else {
                return this.render();
            }
        }
    ),

    /**
     * Unrender component
     * @returns {jQuery.Promise}
     */
    unrender: function unrender() {

        var oDfd = this.unrenderViewPromise,
            oView = this.getView(),
            sId = this.getId(),
            oRenderPromise = this.renderViewPromise,
            oLayoutChildComponentsPromise = this.layoutChildComponentsPromise;

        if (oRenderPromise
            && oRenderPromise.bInUse
            && oRenderPromise.state() === 'pending') {
            ////jQuery.sap.log.debug('Rejecting UI5ControlView.render promise', sId, oRenderPromise.sUid);
            oRenderPromise.reject();
        }

        if (oLayoutChildComponentsPromise
            && oLayoutChildComponentsPromise.bInUse
            && oLayoutChildComponentsPromise.state() === 'pending') {
            //jQuery.sap.log.debug('Rejecting UI5ControlView.renderChildComponents promise', sId, oLayoutChildComponentsPromise.sUid);
            oLayoutChildComponentsPromise.reject();
        }

        this.renderViewPromise = null;
        this.layoutChildComponentsPromise = null;

        if (oDfd && oDfd.bInUse) {

            switch (oDfd.state()) {

                case 'pending':

                    //jQuery.sap.log.debug('Rejecting Component.unrender promise', sId, oDfd.sUid);
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

        oDfd.oPromise = oDfd.promise();

        // For debug purposes only
        oDfd.oPromise.oDeferred = oDfd;

        oDfd.sUid = 'unrender-component-' + jQuery.sap.uid();
        //jQuery.sap.log.debug('Setting Component.unrender promise', sId, oDfd.sUid);

        this.unrenderViewPromise = oDfd;

        if (!oView || jQuery.isPlainObject(oView)) {
            return oDfd.oPromise;
        }

        // Keep dependendent promises for futher debug purposes
        oDfd.oDependencies = {
            beforeUnrenderEventSubscribers: [],
            unrenderEventSubscribers: [],
            unrender: null
        };

        oDfd.bInUse = true;

        //jQuery.sap.log.debug('Firing Component.beforeRender event', sId, oDfd.sUid);

        this.fireEvent('beforeUnrender', {
            view: oView,
            promises: oDfd.oDependencies.beforeUnrenderEventSubscribers
        });

        jQuery

            // When all before render promises be done (completed)
            // (empty array - means it's already done)
            .when.apply(jQuery, oDfd.oDependencies.beforeUnrenderEventSubscribers)

            // Then Unrender view
            .pipe(function () {

                oView.setPlaceAt(null);

                var oPromise = oView.unrender();

                // Reject main flow if render failed
                if (oPromise) {
                    oPromise.fail(function () {
                        oDfd.reject();
                    });
                }

                return oDfd.oDependencies.unrender = oPromise;

            })

            // When child components is unrendered, then notify that unrender is done
            .pipe(function () {

                //jQuery.sap.log.debug('Firing Component.unrender event', sId, oDfd.sUid);

                this.fireEvent('unrender', {
                    view: oView,
                    promises: oDfd.oDependencies.unrenderEventSubscribers
                });

                return jQuery.when.apply(jQuery, oDfd.oDependencies.unrenderEventSubscribers);

            }.bind(this))

            .then(function () {

                //jQuery.sap.log.debug('Resolving Component.unrender promise', sId, oDfd.sUid);
                oDfd.resolve();

            });

        return oDfd.oPromise;

    },

    /**
     * @protected
     * @param oView
     * @return {jQuery.Promise}
     */
    unbindView: function unbindView(oView) {

        oView = oView || this.getView();

        if (!oView || jQuery.isPlainObject(oView)) {
            return;
        }

        return oView.detachController(this);

    },

    /**
     * @protected
     * @returns {jQuery.Promise}
     */
    calculateChildComponentsLayout: function calculateChildComponentsLayout(oLayoutData) {

        var oLayoutEngine    = this.getLayout(),
            oView            = this.getView(),
            oChildComponents = this.getChildComponents();

        switch (true) {

        case jQuery.isPlainObject(oLayoutEngine):
            //jQuery.sap.log.warning('Component ' + this.getComponentId() + ' layout engine is not fully initialized yet');
            return {};

        case !oLayoutEngine:

            if (oChildComponents && oChildComponents.getLength()) {
                //jQuery.sap.log.warning('Component ' + this.getComponentId() + ' have no layout engine: childs layouting is not possible');
            }

            return {};

        }

        oLayoutData = oLayoutData || this.getLayoutData();

        var oCalculatedLayout = oLayoutEngine.processLayout(
            oChildComponents,
            oLayoutData,
            oView,
            this /* oComponent */
        );

        if (!oCalculatedLayout) {
            //jQuery.sap.log.warning('Component ' + this.getComponentId() + ' returns wrong (empty) layout data');
            return {};
        }

        return oCalculatedLayout;

    },

    /**
     * Render component
     * @returns {jQuery.Promise}
     */
    render: function render() {

        var oDfd     = this.renderViewPromise,
            oView    = this.getView(),
            oPlaceAt = this.getPlaceAt(),
            sId      = this.getId();

        var oConfig = {
            placeAt: oPlaceAt,
            view:    oView
        };

        if (this.unrenderViewPromise && this.unrenderViewPromise.state() === "pending") {
            this.unrenderViewPromise.reject();
        }

        this.unrenderViewPromise = null;

        if (oDfd && oDfd.bInUse) {

            if (jQuery.sap.equal(oConfig, oDfd.oConfig) && oDfd.state() !== 'rejected') {
                //jQuery.sap.log.debug('Reusing Component.render promise (same config)', sId, oDfd.sUid);
                return oDfd.oPromise;
            }

            switch (oDfd.state()) {

            case 'pending':

                if (jQuery.sap.equal(oConfig, oDfd.oConfig)) {

                    //jQuery.sap.log.debug('Reusing Component.render promise (same config)', sId, oDfd.sUid);
                    return oDfd.oPromise;

                } else {
                    //jQuery.sap.log.debug('Rejecting Component.render promise', sId, oDfd.sUid);
                    oDfd.reject();
                    oDfd = jQuery.Deferred();
                }

                break;

            default:
                oDfd = jQuery.Deferred();
                break;

            }

        } else if (!oDfd) {

            oDfd = jQuery.Deferred();

        }

        oDfd.oPromise = oDfd.promise();

        // For debug purposes only
        oDfd.oPromise.oDeferred = oDfd;

        oDfd.sUid = 'render-component-' + jQuery.sap.uid();
        //jQuery.sap.log.debug('Setting Component.render promise', sId, oDfd.sUid);

        this.renderViewPromise = oDfd;

        if (!oPlaceAt || !oView || jQuery.isPlainObject(oView)) {
            return oDfd.oPromise;
        }

        oDfd.oConfig = oConfig;

        // Keep dependendent promises for futher debug purposes
        oDfd.oDependencies = {
            beforeRenderEventSubscribers: [],
            renderEventSubscribers:       [],
            render:                       null,
            layoutChildComponents:        null
        };

        oDfd.bInUse = true;

        //jQuery.sap.log.debug('Firing Component.beforeRender event', sId, oDfd.sUid);

        this.fireEvent('beforeRender', {
            oldPlaceAt: this._oOldPlaceAt,
            placeAt:    oPlaceAt,
            view:       oView,
            promises:   oDfd.oDependencies.beforeRenderEventSubscribers
        });

        jQuery

            // When all before render promises be done (completed)
            // (empty array - means it's already done)
            .when.apply(jQuery, oDfd.oDependencies.beforeRenderEventSubscribers)

            // Then render view
            .pipe( function() {

                //jQuery.sap.log.debug('Placing Component.view at place', sId, oDfd.sUid);
                oView.setPlaceAt(oPlaceAt);

                var oPromise = oView.render();

                // Reject main flow if render failed
                if (oPromise) {
                    oPromise.fail( function() {
                        oDfd.reject();
                    });
                }

                return oDfd.oDependencies.render = oPromise;

            })

            // When view be rendered, then render child components
            .pipe( function() {

                if (!this.layoutChildComponentsSuspended) {

                    //jQuery.sap.log.debug('Layouting Component.childs', sId, oDfd.sUid);
                    var oPromise = this.layoutChildComponents();

                    // Reject main flow if layout child components failed
                    if (oPromise) {
                        oPromise.fail( function() {
                            oDfd.reject();
                        });
                    }

                    return oDfd.oDependencies.layoutChildComponents = oPromise;

                } else {

                    //jQuery.sap.log.debug('Skipping layouting Component.childs', sId, oDfd.sUid);

                }

            }.bind(this))

            // When child components be rendered, then notify that render is done
            .pipe( function() {

                //jQuery.sap.log.debug('Firing Component.render event', sId, oDfd.sUid);

                this.fireEvent('render', {
                    oldPlaceAt: this._oOldPlaceAt,
                    view:     oView,
                    placeAt:  oPlaceAt,
                    promises: oDfd.oDependencies.renderEventSubscribers
                });

                return jQuery.when.apply(jQuery, oDfd.oDependencies.renderEventSubscribers);

            }.bind(this))

            .then( function() {

                //jQuery.sap.log.debug('Resolving Component.render promise', sId, oDfd.sUid);
                oDfd.resolve();

            });

        return oDfd.oPromise;

    },

    /**
     * @protected
     * @param {Object|sap.portal.ui5.core.LayoutData} oCalculatedLayout
     * @param {Object} oParams (object used to provide additional parameters)
     * @returns {jQuery.promise}
     */
    layoutChildComponents: function layoutChildComponents(oCalculatedLayout, oParams) {

        var oDfd               = this.layoutChildComponentsPromise,
            oView              = this.getView(),
            oChildComponents   = this.getChildComponents(),
            oLayout            = this.getLayout(),
            sId                = this.getId(),
            oParams            = oParams || {};

        // If layout child components is force while already running layout flow present
        // then reject running flow and begin from scratch
        if (oParams && oDfd && oParams.force && oDfd.bInUse && oDfd.state() === 'pending') {
            oDfd.reject();
        }

        if (this.layoutChildComponentsSuspended > 0) {
            //jQuery.sap.log.debug('Skipping layouting Component.childs (suspended)', sId, oDfd ? oDfd.sUid : null);
            return oDfd ? oDfd.oPromise : null;
        }

        // Do not layout if not fully instantiated
        if (jQuery.isPlainObject(oChildComponents) ||
            jQuery.isPlainObject(oView)) {
            return oDfd ? oDfd.oPromise : null;
        }

        // Do not layout if view is not rendered
        if (!oView || !oView.isRendered()) {
            return oDfd ? oDfd.oPromise : null;
        }

        switch (true) {

        // If no calculated layout - calculate it
        case (!oCalculatedLayout):
            oCalculatedLayout = this.calculateChildComponentsLayout();
            break;

        // If given layout data instead of calculated layout then calculate layout
        // using given data
        case (oCalculatedLayout && oCalculatedLayout instanceof sap.portal.ui5.core.LayoutData):
            oCalculatedLayout = this.calculateChildComponentsLayout(oCalculatedLayout);
            break;

        //default: Calculated layout is ok

        }

        var oLayoutDfd      = jQuery.Deferred();
        oLayoutDfd.sUid     = 'layout-child-components-' + jQuery.sap.uid();
        oLayoutDfd.oPromise = oLayoutDfd.promise();
        oLayoutDfd.oPromise.oDeferred = oLayoutDfd;

        jQuery
            .when(oCalculatedLayout)
            .pipe( function doLayout(oCalculatedLayout) {

                var oConfig = {
                    layout: oLayout,
                    params: oParams,
                    calculatedLayout: oCalculatedLayout
                };

                if (oDfd && oDfd.bInUse) {

                    if (oLayout && jQuery.sap.equal(oConfig, oDfd.oConfig) && oDfd.state() !== 'rejected') {
                        //jQuery.sap.log.debug('Reusing Component.layoutChildComponents promise (same config)', sId, oDfd.sUid);
                        this.layoutChildComponentsPromise = oDfd;

                        if (oDfd.isRejected()) {
                            //jQuery.sap.log.debug('Rejecting Component.layoutChildComponents promise', sId, oLayoutDfd.sUid);
                            oLayoutDfd.reject();
                        } else {
                            //jQuery.sap.log.debug('Resolving Component.layoutChildComponents promise', sId, oLayoutDfd.sUid);
                            oLayoutDfd.resolve();
                        }

                        return oDfd.oPromise;
                    }

                    switch (oDfd.state()) {

                    case 'pending':

                        if (jQuery.sap.equal(oConfig, oDfd.oConfig)) {

                            //jQuery.sap.log.debug('Reusing Component.layoutChildComponents promise (same config)', sId, oDfd.sUid);
                            this.layoutChildComponentsPromise = oDfd;
                            return oDfd.oPromise;

                        } else {

                            //jQuery.sap.log.debug('Rejecting Component.layoutChildComponents promise', sId, oDfd.sUid);
                            oDfd.reject();
                            oDfd = oLayoutDfd;

                        }

                        break;

                    default:
                        oDfd = oLayoutDfd;
                        break;

                    }

                } else if (!oDfd) {

                    oDfd = oLayoutDfd;

                }

                oDfd.bInUse  = true;
                oDfd.oConfig = oConfig;
                oDfd.oDependencies = {
                    beforeLayoutEventSubscribers: [],
                    layoutEventSubscribers: [],
                    renderChildComponents: null
                };

                this.layoutChildComponentsPromise = oDfd;

                //jQuery.sap.log.debug('Firing Component.beforeLayout event', sId, oDfd.sUid);

                this.fireEvent('beforeLayout', {
                    layout:   oCalculatedLayout,
                    promises: oDfd.oDependencies.beforeLayoutEventSubscribers
                });

                jQuery

                    // When all before layout promises be done (completed)
                    // (empty array - means it's already done)
                    .when.apply(jQuery, oDfd.oDependencies.beforeLayoutEventSubscribers)

                    // Then let to view render child components
                    // using calculated data
                    .pipe( function renderChildComponents() {

                        //jQuery.sap.log.debug('Rendering Component.view child components', sId, oDfd.sUid);

                        // Check if further layout should be suspended by reading property from
                        // calculated layout
                        var bSuspendRelayout = (typeof(oCalculatedLayout.component) === 'object') ?
                            Boolean(oCalculatedLayout.component.suspendRelayout) :
                            false;

                        // Boolean which keep state if relayout was resumed
                        var bRelayoutResumed = bSuspendRelayout ? false : true;

                        var fnResumeRelayout = function() {

                            if (!bRelayoutResumed) {
                                this.resumeLayoutChildComponents();
                                bRelayoutResumed = true;
                            }

                        }.bind(this);

                        if (bSuspendRelayout) {
                            this.suspendLayoutChildComponents();
                        }

                        oDfd.oDependencies.renderChildComponents = oView.renderChildComponents(
                            oChildComponents,
                            oCalculatedLayout.childComponents,
                            oCalculatedLayout.component
                        );

                        if (bSuspendRelayout) {

                            // Restore state of relayout on end of the actual layout process
                            oDfd.oDependencies.renderChildComponents.always(fnResumeRelayout);

                            // Ensure that the state of relayout has been restored anyway
                            oDfd.always(fnResumeRelayout);

                        }

                        return oDfd.oDependencies.renderChildComponents;

                    }.bind(this))

                    // When relayout be done
                    // Then notify that layout is done
                    .pipe( function notify() {

                        //jQuery.sap.log.debug('Firing Component.layout event', sId, oDfd.sUid);
                        this.fireEvent('layout', {
                            layout:   oCalculatedLayout,
                            promises: oDfd.oDependencies.layoutEventSubscribers
                        });

                        return jQuery.when.apply(jQuery, oDfd.oDependencies.layoutEventSubscribers);

                    }.bind(this))

                    .fail( function fail() {

                        //jQuery.sap.log.debug('Rejecting Component.layoutChildComponents promise', sId, oDfd.sUid);
                        oDfd.reject();

                        //jQuery.sap.log.debug('Rejecting Component.layoutChildComponents promise', sId, oLayoutDfd.sUid);
                        oLayoutDfd.reject();

                    })

                    .done( function resolve() {

                        //jQuery.sap.log.debug('Resolving Component.layoutChildComponents promise', sId, oDfd.sUid);
                        oDfd.resolve();

                        //jQuery.sap.log.debug('Resolving Component.layoutChildComponents promise', sId, oLayoutDfd.sUid);
                        oLayoutDfd.resolve();

                    });

                return oDfd.oPromise;

            }.bind(this));

        return oLayoutDfd.oPromise;

    },

    /**
     * @protected
     * @method
     */
    renderChildComponents: sap.portal.ui5.core.PropertyObserver(
        ['layout', 'layoutData', 'childComponents'],
        /**
         * @private
         * @member sap.portal.ui5.core.Component
         * @returns jQuery.promise
         */
        function renderChildComponents() {

            return this.layoutChildComponents();

        }
    ),

    /**
     * @protected
     * @param sComponentId
     */
    unregisterInComponentManager: function unregisterInComponentManager(sComponentId) {

        sComponentId = sComponentId || this.getComponentId();
        sap.portal.ui5.core.ComponentManager.unregisterComponent(sComponentId);

    },

    /**
     * @protected
     * @returns {jQuery.Promise}
     */
    destroyChildComponents: function destroyChildComponents() {

        var oChildComponents = this.getChildComponents();

        if (!oChildComponents) {
            return;
        }

        return oChildComponents.destroy();

    },

    /**
     * @protected
     * @returns {jQuery.Promise}
     */
    destroyView: function destroyView() {

        var oView = this.getView(),
            oRenderViewPromise = this.renderViewPromise,
            oLayoutChildComponentsPromise = this.layoutChildComponentsPromise;

        if (!oView) {
            return;
        }

        // Reject any already existing view rendering promise
        if (oRenderViewPromise
        &&  oRenderViewPromise.bInUse
        &&  oRenderViewPromise.state() === 'pending') {
            oRenderViewPromise.reject();
        }

        // Reject any already existing view rendering promise
        if (oLayoutChildComponentsPromise
        &&  oLayoutChildComponentsPromise.bInUse
        &&  oLayoutChildComponentsPromise.state() === 'pending') {
            oLayoutChildComponentsPromise.reject();
        }

        return oView.destroy();

    },

    /**
     * @public
     * @return {jQuery.Promise}
     */
    destroy: function destroy() {

        var aPromises = [],
            fnSuper   = this._super.bind(this, arguments),
            sId       = this.getId(),
            oDfd      = jQuery.Deferred();

        aPromises.push( this.destroyChildComponents() );
        aPromises.push( this.destroyView() );
        aPromises.push( this.unregisterInComponentManager() );

        // Make promise which will be resolved
        // only when all operations be resolved
        jQuery
            .when.apply(jQuery, aPromises)
            .always( function() {

                jQuery
                    .when(fnSuper())
                    .always( function() {

                        //jQuery.sap.log.debug('Resolving Component.destroy promise', sId, oDfd.sUid);
                        oDfd.resolve();

                    });

            });

        return oDfd.promise();

    },

    /**
     *
     * @param sId
     * @param bRecursive
     * @returns {*}
     */
    getChildByComponentId: function getChildByComponentId(sId, bRecursive) {

        return this.getChildComponents().getByComponentId(sId, bRecursive);

    },

    /**
     * @param {Array} aComponents
     * @param {Array} aLayoutDataRecords (optional)
     * @returns {jQuery.promise}
     */
    addChildComponents: function addChildComponents(aComponents, aLayoutDataRecords) {

        if (!jQuery.isArray(aComponents)) {
            throw new TypeError('Components are not array');
        }

        var oLayoutChildComponentsPromise = this.layoutChildComponentsPromise;

        // Reject any already existing view rendering promise
        if (oLayoutChildComponentsPromise
        &&  oLayoutChildComponentsPromise.bInUse
        &&  oLayoutChildComponentsPromise.state() === 'pending') {
            oLayoutChildComponentsPromise.reject();
        }

        this.suspendLayoutChildComponents();

        var oDfd             = jQuery.Deferred(),
            oChildComponents = this.getChildComponents(),
            oLayoutData      = this.getLayoutData(),
            sId              = this.getId(),
            aPromises        = [];

        if (aLayoutDataRecords) {

            if (!oLayoutData) {
                // create layout data
                aPromises.push( this.setLayoutData({ items: aLayoutDataRecords }) );
            } else {
                aPromises.push( oLayoutData.addItems(aLayoutDataRecords) );
            }

        }

        if (oChildComponents && aComponents) {
            aPromises.push( oChildComponents.addItems(aComponents) );
        }

        this.resumeLayoutChildComponents();

        jQuery
            .when.apply(jQuery, aPromises)

            .pipe( function() {

                return this.layoutChildComponents();

            }.bind(this))

            .always( function() {

                //jQuery.sap.log.debug('Resolving Component.addChildComponents promise', sId, oDfd.sUid);
                oDfd.resolve();

            });

        return oDfd.promise();

    },

    /**
     * @param {sap.portal.ui5.core.Component} oComponents
     * @param {Object} oLayoutDataRecord (optional)
     * @returns {jQuery.promise}
     */
    addChildComponent: function addChildComponent(oComponent, oLayoutDataRecord) {

        if (!oLayoutDataRecord) {
            //jQuery.sap.log.warning('Adding component without layout data');
        }

        if (typeof(oLayoutDataRecord) === 'object') {

            var sComponentId = oComponent instanceof sap.portal.ui5.core.Component ?
                oComponent.getComponentId() :
                oComponent.componentId;

            // Completing component id if it missing in layout data record .
            if (typeof(oLayoutDataRecord.componentId) === 'undefined') {
                oLayoutDataRecord.componentId = sComponentId;
            }

            if (oLayoutDataRecord.componentId !== sComponentId) {
                throw new Error('Component id in layout data mismatch');
            }

        }

        return this.addChildComponents([oComponent], [oLayoutDataRecord]);

    },

    /**
     *
     * @param {Array} aComponents
     * @param {boolean|Array} aRemoveLayoutData
     * @param {boolean} bDestroyComponents
     * @returns {jQuery.promise}
     */
    removeChildComponents: function removeChildComponents(aRemoveComponents, aRemoveLayoutData, bDestroyComponents) {

        if (!jQuery.isArray(aRemoveComponents)) {
            throw new TypeError;
        }

        var oLayoutChildComponentsPromise = this.layoutChildComponentsPromise;

        // Reject any already existing view rendering promise
        if (oLayoutChildComponentsPromise
        &&  oLayoutChildComponentsPromise.bInUse
        &&  oLayoutChildComponentsPromise.state() === 'pending') {
            oLayoutChildComponentsPromise.reject();
        }

        this.suspendLayoutChildComponents();

        var oDfd             = jQuery.Deferred(),
            oChildComponents = this.getChildComponents(),
            oLayoutData      = this.getLayoutData(),
            aPromises        = [],
            sId              = this.getId();

        var iComponentIndex,
            iComponentLength = aRemoveComponents.length

        if (oLayoutData && aRemoveLayoutData) {

            if (aRemoveLayoutData === true) {

                var sComponentId, oFound;

                aRemoveLayoutData = [];

                for (iComponentIndex = 0; iComponentIndex < iComponentLength; iComponentIndex++) {
                    sComponentId = aRemoveComponents[iComponentIndex].getComponentId();
                    oFound = oLayoutData.getByComponentId(sComponentId);
                    if (oFound) {
                        aRemoveLayoutData.push(oFound);
                    }
                }

            }

            if (!jQuery.isArray(aRemoveLayoutData)) {
                throw new TypeError;
            }

            aPromises.push( oLayoutData.removeItems(aRemoveLayoutData) );

        }

        if (oChildComponents) {
            aPromises.push( oChildComponents.removeItems(aRemoveComponents) );
        }

        if (bDestroyComponents) {
            for (iComponentIndex = 0; iComponentIndex < iComponentLength; iComponentIndex++) {
                //jQuery.sap.log.debug('Destroing child component #' + iComponentIndex, aRemoveComponents[iComponentIndex].getId());
                aPromises.push( aRemoveComponents[iComponentIndex].destroy() );
            }
        }

        this.resumeLayoutChildComponents();

        jQuery
            .when.apply(jQuery, aPromises)

            .pipe( function() {

                return this.layoutChildComponents();

            }.bind(this))

            .always( function() {

                //jQuery.sap.log.debug('Resolving Component.removeChildComponents promise', sId, oDfd.sUid);
                oDfd.resolve();

            });

        return oDfd.promise();

    },

    /**
     *
     * @param oComponent
     * @param bRemoveLayoutData
     * @returns {jQuery.promise}
     */
    removeChildComponent: function removeChildComponent(oComponent, bRemoveLayoutData) {

        return this.removeChildComponents([oComponent], bRemoveLayoutData);

    },

    /**
     *
     * @returns {number}
     */
    getLength: function getLength() {

        return this.getChildComponents().getLength();

    },

    /**
     *
     * @param {Array} aItems
     * @return {jQuery.promise}
     */
    setChildComponentItems: function setChildComponentItems(aItems, aLayoutDataItems) {

        var oLayoutChildComponentsPromise = this.layoutChildComponentsPromise;

        // Reject any already existing view rendering promise
        if (oLayoutChildComponentsPromise
        &&  oLayoutChildComponentsPromise.bInUse
        &&  oLayoutChildComponentsPromise.state() === 'pending') {
            oLayoutChildComponentsPromise.reject();
        }

        this.suspendLayoutChildComponents();

        var aPromises        = [],
            oChildComponents = this.getChildComponents(),
            oDfd             = jQuery.Deferred(),
            sId              = this.getId();

        aPromises.push( oChildComponents.setItems(aItems) );

        if (aLayoutDataItems) {
            aPromises.push( this.setLayoutDataItems(aLayoutDataItems) );
        }

        this.resumeLayoutChildComponents();

        jQuery
            .when.apply(jQuery, aPromises)

            .pipe( function() {

                return this.layoutChildComponents();

            }.bind(this))

            .always( function() {

                //jQuery.sap.log.debug('Resolving Component.setChildComponents promise', sId, oDfd.sUid);
                oDfd.resolve();

            });

        return oDfd.promise();

    },

    /**
     *
     * @param {Array} aItems
     * @return {jQuery.promise}
     */
    setLayoutDataItems: function setLayoutDataItems(aItems) {

        var oLayoutChildComponentsPromise = this.layoutChildComponentsPromise;

        // Reject any already existing view rendering promise
        if (oLayoutChildComponentsPromise
        &&  oLayoutChildComponentsPromise.bInUse
        &&  oLayoutChildComponentsPromise.state() === 'pending') {
            oLayoutChildComponentsPromise.reject();
        }

        this.suspendLayoutChildComponents();

        var oLayoutData = this.getLayoutData(),
            aPromises   = [],
            oDfd        = jQuery.Deferred(),
            sId         = this.getId();

        if (!oLayoutData) {
            // create layout data
            aPromises.push( this.setLayoutData({ items: aItems }) );
        } else {
            aPromises.push( oLayoutData.setItems(aItems) );
        }

        this.resumeLayoutChildComponents();

        jQuery
            .when.apply(jQuery, aPromises)

            .pipe( function() {

                return this.layoutChildComponents();

            }.bind(this))

            .always( function() {

                //jQuery.sap.log.debug('Resolving Component.setLayoutDataItems promise', sId, oDfd.sUid);
                oDfd.resolve();

            });

        return oDfd.promise();

    },

    /**
     *
     * @returns {number}
     */
    suspendLayoutChildComponents: function suspendLayoutChildComponents() {

        return (++this.layoutChildComponentsSuspended);

    },

    /**
     *
     * @returns {number}
     */
    resumeLayoutChildComponents: function resumeLayoutChildComponents() {

        return (this.layoutChildComponentsSuspended > 0) ?
            (--this.layoutChildComponentsSuspended) :
            this.layoutChildComponentsSuspended;

    },

    /**
     * @returns {boolean}
     */
    isRendered: function isRendered() {

        var oView = this.getView();

        if (!(oView instanceof sap.portal.ui5.core.View)) {
            return false;
        }

        return oView.isRendered();

    }

});
