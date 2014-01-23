jQuery.sap.declare('sap.portal.ui5.externals.es5shims.arrayprototypeindexof');

if (!Array.prototype.indexOf) {

    Array.prototype.indexOf = function indexOf(find, startAt) {

        if (typeof(startAt) === 'undefined') {
            startAt = 0;
        }

        var length = this.length;

        if (startAt < 0) {
            startAt += length;
        }

        if (startAt < 0) {
            startAt = 0;
        }

        var index;

        for (index = startAt; index < length; index++) {
            if (typeof(this[index]) !== 'undefined' && this[index] === find) {
                return index;
            }
        }

        return -1;

    };

}
