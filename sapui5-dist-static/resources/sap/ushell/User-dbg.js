// Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview The <code>sap.ushell.User</code> object with related functions.
 */

(function () {
    "use strict";
    /*global jQuery, sap */
    jQuery.sap.declare("sap.ushell.User");

    // "private" methods (static) without need to access properties -------------

    // "public class" -----------------------------------------------------------

    /**
     * Constructs a new representation (wrapper) of the user object as loaded by the
     * startup service.
     *
     * @param {object} oData
     *    the result of the startup service call
     * @class A representation of a user
     * @constructor
     * @since 1.15.0
     */
    sap.ushell.User = function (oData) {

        // BEWARE: constructor code below!

        // "private" or hidden methods --------------------------------------------

        // "public" methods -------------------------------------------------------

        /**
         * Returns this user's email address.
         *
         * @returns {string}
         *   this user's email address
         * @since 1.15.0
         */
        this.getEmail = function () {
            return oData.email;
        };

        /**
         * Returns this user's first name.
         *
         * @returns {string}
         *   this user's first name
         * @since 1.15.0
         */
        this.getFirstName = function () {
            return oData.firstName;
        };

        /**
         * Returns this user's full name.
         *
         * @returns {string}
         *   this user's full name
         * @since 1.15.0
         */
        this.getFullName = function () {
            return oData.fullName;
        };

        /**
         * Returns this user's ID.
         *
         * @returns {string}
         *   this user's ID
         * @since 1.15.0
         */
        this.getId = function () {
            return oData.id;
        };

        /**
         * Returns this user's language.
         *
         * @returns {string}
         *   this user's language
         * @since 1.15.0
         */
        this.getLanguage = function () {
            return oData.language;
        };

        /**
         * Returns this user's language tag as defined by this
         * <a href="http://tools.ietf.org/html/bcp47">spec</a>.
         *
         * @returns {string}
         *   this user's language tag according to BCP 47
         * @since 1.15.0
         */
        this.getLanguageBcp47 = function () {
            return oData.languageBcp47;
        };

        /**
         * Returns this user's last name.
         *
         * @returns {string}
         *   this user's last name
         * @since 1.15.0
         */
        this.getLastName = function () {
            return oData.lastName;
        };

        /**
         * Returns <code>true</code> if SAP Jam is active for this user.
         *
         * @returns {boolean}
         *   <code>true</code> if SAP Jam is active for this user
         * @since 1.15.0
         */
        this.isJamActive = function () {
            return oData.isJamActive === true;
        };
      // constructor code -------------------------------------------------------

      // "public" methods (static) ------------------------------------------------

    };

}());
