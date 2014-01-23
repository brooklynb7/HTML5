/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides enumeration sap.ui.core.ws.ReadyState
jQuery.sap.declare("sap.ui.core.ws.ReadyState");

/**
 * @class Defines the different ready states for a WebSocket connection.
 *
 * @version 1.16.4
 * @static
 * @public
 */
sap.ui.core.ws.ReadyState = {

	/**
	 * The connection has not yet been established.
	 * @public
	 */
	CONNECTING: 0,

	/**
	 * The WebSocket connection is established and communication is possible.
	 * @public
	 */
	OPEN: 1,

	/**
	 * The connection is going through the closing handshake.
	 * @public
	 */
	CLOSING: 2,

	/**
	 * The connection has been closed or could not be opened.
	 * @public
	 */
	CLOSED: 3

};
