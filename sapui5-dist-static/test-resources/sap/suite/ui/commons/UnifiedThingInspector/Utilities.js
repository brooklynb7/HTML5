var isPhone = jQuery.device.is.phone;
var sDevice = isPhone ? "phone" : "desktop";
var iSegmentsInGeneralTeaser = 2;

/**
 * Returns tile height in rem, depending on device type and number of segments the tile consists of.
 * @param {number=} [iSegments=1] Number of segments the tile will take vertically in the grid (optional).
 *                  Currently expected values are 1, 2, 3, however any positive number is supported.
 *                  Default value is 1.
 * @return {string} Tile height in rem.
 */
var fnGetTeaserTileHeight = function(iSegments) {
    iSegments = iSegments || 1;
    if (isPhone) {
        return (7 * iSegments)+"rem";
    } else {
        return (11 * iSegments - 1)+"rem";
    }
};