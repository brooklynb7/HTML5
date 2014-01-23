"use strict";

jQuery.sap.require('sap.portal.ui5.core.Object');
jQuery.sap.require('sap.portal.ui5.core.PropertyObserver');
jQuery.sap.declare('sap.portal.ui5.core.Collection');

/**
 * @experimental
 * @class sap.portal.ui5.core.Collection
 * @extends sap.portal.ui5.core.Object
 */
sap.portal.ui5.core.Object.extend('sap.portal.ui5.core.Collection', {

    metadata: {
        properties: {

            /**
             * Private array representation of collection
             * @cfg {array}
             * @accessor
             */
            items: {
                type: 'any',
                defaultValue: null
            },

            /**
             * String that defines class to which items should be casted
             * @cfg {string}
             * @accessor
             */
            itemType: {
                type: 'string',
                defaultValue: null
            },

            /**
             * Flag that defined weather casting to be enabled
             * @cfg {boolean}
             * @accessor
             */
            castItems: {
                type: 'boolean',
                defaultValue: false
            },

            /**
             * @cfg {boolean}
             * @accessor
             */
            autoDestroyItems: {
                type: 'boolean',
                defaultValue: false
            }

        },

        events: {

            /**
             * @event
             */
            itemAdded: {},

            /**
             * @event
             */
            itemRemoved: {},

            /**
             * @event
             */
            itemModified: {},

            /**
             * @event
             */
            itemReplaced: {},

            /**
             * @event
             */
            collectionModified: {},

            /**
             * @event
             */
            collectionReplaced: {},

            /**
             * @event
             */
            beforeCollectionReplaced: {},

        }

    },

    /**
     * @protected
     * @property {array}
     */
    aCollection: null,

    /**
     * @template
     */
    init: function init() {

        this.aCollection = this.factoryCollection();

        if (this._super) {
            this._super.apply(this, arguments);
        }

    },

    /**
     * @protected
     */
    factoryCollection: function factoryCollection() {

        return [];

    },

    /**
     * @private
     * @method
     */
    _processCollection: sap.portal.ui5.core.PropertyObserver(
        ['items'],
        /**
         * @member sap.portal.ui5.core.Collection
         * @param sKey
         * @param aCollection
         * @param aOldCollection
         * @param oObserver
         */
        function processCollection(sKey, aCollection, aOldCollection, oObserver) {

            this.fireEvent('beforeCollectionReplaced', {
                newValue: aCollection,
                oldValue: aOldCollection
            });

            if (aCollection === null && aOldCollection === null) {
                aCollection = this.factoryCollection();
            }

            if (!jQuery.isArray(aCollection)) {
                throw new TypeError('Given collection items is not array');
            }

            if (aOldCollection) {
                this.removeItems(aOldCollection);
            }

            this.aCollection = aCollection;

            this.addItems(aCollection, 0);

            oObserver.updatePropertyValue(aCollection);

            this.fireEvent('collectionReplaced', {
                newValue: aCollection,
                oldValue: aOldCollection
            });

        }

    ).callOnInit(),

    /**
     * Validate single item content type
     *
     * If given string value, then validator will lookup for object using
     * string value as path.
     *
     * If given function value, then validator will check items using instanceof operator.
     *
     * @protected
     * @method
     * @param  {*} item Item to be checked
     * @return {Boolean}
     */
    validateContentItemType: function validateContentItemType(oItem) {

        var sType = this.getItemType();

        // Check if content type is native class and item matches to it.
        if (jQuery.type(oItem) === sType) {
            return true;
        }

        var fnItemClass = jQuery.sap.getObject(sType);

        switch (true) {

        case typeof(fnItemClass) === 'function':
            return (oItem instanceof fnItemClass);

        default:
            throw new Error('Path: ' + sType + ' is not function');

        }

    },

    /**
     * Casts item to class defined in itemType property of collection.
     *
     * @param oItem
     * parameter to be passed to constructor of class defined in itemType
     * @return instance of class defined in itemType
     * @throws TypeError in case itemType does not define any class
     */
    castItem: function castItem(oItem) {

        var sType = this.getItemType();

        if (jQuery.isPlainObject(oItem) && oItem.uctype) {
            sType = oItem.uctype;
            delete oItem.uctype;
        }

        var fnConstructor = jQuery.sap.getObject(sType),
            oResult = oItem;

        if (!fnConstructor) {
            jQuery.sap.require(sType);
            fnConstructor = jQuery.sap.getObject(sType);
        }

        switch (true) {

        case typeof(fnConstructor) === 'function':
            oResult = new fnConstructor(oItem);
            break;

        default:
            throw new Error('Path: ' + sType + ' is not function');

        }

        if (!this.validateContentItemType(oResult)) {
            throw new Error;
        }

        return oResult;

    },

    /**
     *
     * @returns {number}
     */
    getLength: function getLength() {

        return this.aCollection.length;

    },

    /**
     *
     * @param aNewItems
     * @param iStartIndex
     * @returns {boolean}
     */
    addItems: function addItems(aNewItems, iStartIndex) {

        if (!jQuery.isArray(aNewItems)) {
            throw new TypeError();
        }

        // Run validator over all items
        var iIndex, oItem,
            iLength = aNewItems.length,
            iStartIndex = (iStartIndex === undefined ? this.getLength() : iStartIndex);

        for (iIndex = 0; iIndex < iLength; iIndex++) {
            oItem = aNewItems[iIndex];
            this.addByIndex(iStartIndex++, oItem);
        }

        return true;

    },

    /**
     *
     * @param aItems
     * @returns {boolean}
     */
    removeItems: function removeItems(aItems) {

        if (!jQuery.isArray(aItems)) {
            throw new TypeError();
        }

        // Run validator over all items
        var iIndex, oItem,
            iLength = aItems.length,
            iRemovalIndex;

        for (iIndex = 0; iIndex < iLength; iIndex++) {

            oItem = aItems[iIndex];
            iRemovalIndex = this.indexOf(oItem);

            if (iRemovalIndex === -1) {
                continue;
            }

            this.removeByIndex(iRemovalIndex);

        }

        return true;

    },

    /**
     * Adds item to collection.
     *
     * @param oItem
     * item to be added to collection
     * @return updated collection
     */
    addItem: function addItem(oItem) {

        return this.addItems([oItem]);

    },

    /**
     * Removes item from collection.
     *
     * @param oItem
     * item to be removed from collection
     * @return updated collection
     */
    removeItem: function removeItem(oItem) {

        return this.removeItems([oItem]);

    },

    /**
     *
     * @param iIndex
     * @param oItem
     */
    addByIndex: function addByIndex(iIndex, oItem) {

        if (this.getItemType() && !this.validateContentItemType(oItem)) {

            var sType = this.getItemType();

            // If casting option not enabled -> throw validation exception
            if (!this.getCastItems()) {
                throw new TypeError('Item #' + iIndex + ' ' + String(oItem) + ' is not type of ' + sType);
            }

            // If casting fails -> throw exception with explanation.
            try {

                oItem = this.castItem(oItem);

            } catch (oException) {

                var oError = new Error('Unable to cast item #' + iIndex + ' ' + String(oItem) + ' into ' + sType + ': ' + oException.message);

                // Store parent exception for further investigation
                oError.parent = oException;

                throw oError;

            }

        }

        this.observeItemModifications(oItem);

        var aCollection = this.aCollection,
            iCollectionLength = aCollection.length;

        if (iIndex < 0) {

            throw new Error('Out of range');

        } else if ((iCollectionLength - 1) < iIndex || iIndex === 0) {

            aCollection[iIndex] = oItem;

            this.fireEvent('_change', {
                "id": this.getId(),
                "name": 'items.length',
                "oldValue": iCollectionLength,
                "newValue": aCollection.length
            });

            this.fireEvent('itemAdded', {
                index: iIndex,
                item: oItem
            });

            this.fireEvent('collectionModified', {
                action: 'itemAdded',
                index: iIndex,
                item: oItem
            });


        } else {

            var oldItem = aCollection.splice(iIndex, 1, oItem)[0];

            this.fireEvent('itemReplaced', {
                index: iIndex,
                item: oItem,
                oldItem: oldItem
            });

            this.fireEvent('collectionModified', {
                action: 'itemReplaced',
                index: iIndex,
                item: oItem
            });

        }

    },

    /**
     *
     * @param iIndex
     * @returns {boolean}
     */
    removeByIndex: function removeByIndex(iIndex) {

        var oItem = this.getItemAtIndex(iIndex),
            aCollection = this.aCollection;

        var iCollectionLength = aCollection.length;

        if (iIndex < 0 || !(iIndex < iCollectionLength)) {
            throw new Error('out of range');
        }

        this.unobserveItemModifications(oItem);

        aCollection.splice(iIndex, 1);

        this.fireEvent('_change', {
            "id":       this.getId(),
            "name":     'items.length',
            "oldValue": iCollectionLength,
            "newValue": aCollection.length
        });

        this.fireEvent('itemRemoved', {
            index: iIndex,
            item:  oItem
        });

        this.fireEvent('collectionModified', {
            action: 'itemRemoved',
            index:  iIndex,
            item:   oItem
        });

        return true;

    },

    /**
     *
     * @param iIndex
     * @returns {*}
     */
    getItemAtIndex: function getItemAtIndex(iIndex) {

        return this.aCollection[iIndex];

    },

    /**
     * Get item index in the array of _items
     *
     * @param item
     * Item to be searched in the array of _items
     * @return Item index in case it is found, -1 otherwise
     */
    indexOf: function indexOf(oItem) {

        var aCollection = this.aCollection;

        if (aCollection.indexOf instanceof Function) {
            return aCollection.indexOf(oItem);
        } else if (aCollection instanceof Array) {
            return jQuery.indexOf(oItem);
        } else {
            throw new Error;
        }

    },

    /**
     * Get item index in the array of _items
     *
     * @param item
     * Item to be searched in the array of _items
     * @return Item index in case it is found, -1 otherwise
     */
    lastIndexOf: function lastIndexOf(oItem) {

        var aCollection = this.aCollection;

        if (aCollection.lastIndexOf instanceof Function) {
            return aCollection.lastIndexOf(oItem);
        } else if (aCollection instanceof Array) {
            return jQuery.lastIndexOf(oItem);
        } else {
            throw new Error;
        }

    },

    /**
     * Callback to be invoked each time one of the items
     * in the collection fires _change event
     *
     * @protected
     * @param evt {sap.ui.base.Event}
     * _change event thrown by one of the items
     */
    notifyItemModification: function notifyItemModification(oEvent) {

        var oItem       = oEvent.getSource(),
            oParameters = oEvent.getParameters(),
            sProperty   = oEvent.getParameter('name');

        var iItemIndex = this.indexOf(oItem);

        this.fireEvent('itemModified', {
            oldValue: oParameters.oldValue,
            newValue: oParameters.newValue,
            index:    iItemIndex,
            property: sProperty,
            target:   this
        });

        this.fireEvent('collectionModified', {
            action:   'itemModified',
            index:    iItemIndex,
            property: sProperty,
            item:     oItem
        });

    },

    /**
     * @protected
     * @param oItem
     */
    observeItemModifications: function observeItemModifications(oItem) {

        if (oItem instanceof sap.ui.base.EventProvider) {
            oItem.attachEvent('_change', this.notifyItemModification.bind(this));
        }

    },

    /**
     * @protected
     * @param oItem
     */
    unobserveItemModifications: function unobserveItemModifications(oItem) {

        // TODO:

    },

    /**
     *
     * @param fnCallback
     * @returns {Array}
     */
    forEach: function forEach(fnCallback) {

        if (typeof(fnCallback) !== 'function') {
            throw new TypeError;
        }

        var aCollection = this.aCollection,
            iIndex, iLength = aCollection.length,
            aResults = [];

        for (iIndex = 0; iIndex < iLength; iIndex++) {
            aResults.push( fnCallback.call(this, aCollection[iIndex], iIndex) );
        }

        return aResults;

    },

    /**
     *
     * @param fnCallback
     * @returns {Array}
     */
    queryBy: function queryBy(fnCallback) {

        if (typeof(fnCallback) !== 'function') {
            throw new TypeError;
        }

        var aCollection = this.aCollection,
            iIndex, iLength = aCollection.length,
            aResults = [];

        for (iIndex = 0; iIndex < iLength; iIndex++) {
            if (fnCallback.call(this, aCollection[iIndex], iIndex) === true) {
                aResults.push(aCollection[iIndex]);
            }
        }

        return aResults;

    },

    /**
     *
     * @param fnCallback
     * @param iFromIndex
     * @returns {number}
     */
    findBy: function findBy(fnCallback, iFromIndex) {

        if (typeof(fnCallback) !== 'function') {
            throw new TypeError;
        }

        var aCollection = this.aCollection,
            iIndex, iLength = aCollection.length;

        for (iIndex = (iFromIndex || 0); iIndex < iLength; iIndex++) {
            if (fnCallback.call(this, aCollection[iIndex], iIndex) === true) {
                return iIndex;
            }
        }

        return -1;

    },

    /**
     *
     * @param sProperty
     * @param vValue
     * @returns {number}
     */
    findByProperty: function findByProperty(sProperty, vValue) {

        return this.findBy(function fnIterator(oItem) {

            if (oItem instanceof sap.ui.base.ManagedObject) {

                return (oItem.getProperty(sProperty) === vValue);

            } else if (oItem instanceof Object && oItem !== null) {

                return (oItem[sProperty] === vValue);

            } else {

                throw new TypeError;

            }

        });

    },

    /**
     * @param sProperty
     * @param vValue
     * @returns {*}
     */
    getByProperty: function getByProperty(sProperty, vValue) {

        var aCollection = this.aCollection,
            oItem, iIndex,
            iLength = aCollection.length;

        for (iIndex = 0; iIndex < iLength; iIndex++) {

            oItem = aCollection[iIndex];

            if (oItem instanceof sap.ui.base.ManagedObject) {

                if (oItem.getProperty(sProperty) === vValue) {
                    return oItem;
                }

            } else if (oItem instanceof Object && oItem !== null) {

                if (oItem[sProperty] === vValue) {
                    return oItem;
                }

            } else {

                throw new TypeError;

            }

        }

        return undefined;

    },

    /**
     *
     * @param sProperty
     * @param sValue
     * @returns {Array}
     */
    queryByProperty: function queryByProperty(sProperty, vValue) {

        return this.queryBy(function fnIterator(oItem) {

            if (oItem instanceof sap.ui.base.ManagedObject) {

                return (oItem.getProperty(sProperty) === vValue);

            } else if (oItem instanceof Object && oItem !== null) {

                return (oItem[sProperty] === vValue);

            } else {

                throw new TypeError;

            }

        });

    },

    /**
     * @public
     */
    destroy: function destroy() {

        var aPromises = [],
            fnSuper = this._super.bind(this, arguments),
            sId = this.getId();

        if (this.getAutoDestroyItems()) {
            aPromises.push( this.destroyItems() );
        }

        // Make promise which will be resolved
        // only when all operations be resolved
        return jQuery
            .when.apply(jQuery, aPromises)
            .always( function() {

                return fnSuper();

            });
            //.done( function() {
            //
            //    jQuery.sap.log.debug('Resolving Collection.destroy promise', sId);
            //
            //});

    },

    /**
     * @public
     */
    destroyItems: function destroyItems() {

        var aCollection = this.aCollection,
            oItem, iIndex,
            iLength   = aCollection.length,
            aPromises = [];

        for (iIndex = 0; iIndex < iLength; iIndex++) {

            oItem = aCollection[iIndex];

            if (oItem instanceof sap.ui.base.ManagedObject || (
                typeof(oItem) === 'object'
                && oItem !== null
                && typeof(oItem.destroy) === 'function'
            )) {
                aPromises.push(oItem.destroy());
            }
        }

        return jQuery.when.apply(jQuery, aPromises);

    }

});
