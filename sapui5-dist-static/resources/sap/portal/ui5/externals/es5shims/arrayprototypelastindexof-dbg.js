jQuery.sap.declare('sap.portal.ui5.externals.es5shims.arrayprototypelastindexof');

if (!Array.prototype.lastIndexOf) {

    Array.prototype.lastIndexOf = function lastIndexOf(find, startAt) {

        var length = this.length;
        var lastIndex = length - 1;

        if (typeof(startAt) === 'undefined') {
            startAt = lastIndex;
        }

        if (startAt < 0) {
            startAt += length;
        }

        if (startAt > lastIndex) {
            startAt = lastIndex;
        }

        var index;

        for (index = startAt; index > 0; index--) {
            if (typeof(this[index]) !== 'undefined' && this[index] === find) {
                return index;
            }
        }

        return -1;

    };

}
