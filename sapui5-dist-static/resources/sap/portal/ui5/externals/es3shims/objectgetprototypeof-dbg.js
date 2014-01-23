jQuery.sap.declare('sap.portal.ui5.externals.es3shims.objectgetprototypeof');

if ( typeof Object.getPrototypeOf !== "function" ) {

    Object.getPrototypeOf = function getPrototypeOf(object){

        return object.constructor.prototype;

    };

}
