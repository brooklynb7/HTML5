jQuery.sap.declare('sap.portal.ui5.externals.es5shims.functionprototypebind');

if (!Function.prototype.bind) {

    /**
     * Creates a new function that, when called, itself calls this function in the context of the provided this value,
     * with a given sequence of arguments preceding any provided when the new function was called.
     */
    Function.prototype.bind = function bind(context) {

        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be fBound is not callable');
        }

        // Callee
        var fn = this;
        var bindFn;

        // If no custom arguments bound -> use 'light' bound version
        if (arguments.length < 2) {

            //noinspection NestedFunctionJS
            bindFn = function lightBind() {

                return (!arguments.length) ?
                    fn.call(context) :
                    fn.apply(context, arguments);

            };

        } else {

            // Else -> use 'heavy' bound version
            var fnSlice = Array.prototype.slice;
            var args = (arguments.length > 1) && fnSlice.call(arguments, 1);

            //noinspection NestedFunctionJS
            bindFn = function heavyBind() {

                return (arguments.length) ?
                    fn.apply(context, args.concat(fnSlice.call(arguments))) :
                    fn.apply(context, args);

            };

        }

        bindFn.displayName = fn.displayName || fn.name;
        return bindFn;

    };

}
