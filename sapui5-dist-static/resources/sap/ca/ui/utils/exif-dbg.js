jQuery.sap.declare("sap.ca.ui.utils.exif");

sap.ui.base.Object.extend("sap.ca.ui.utils.exif", {});

(function() {

	
	var bDebug = false;
	
	sap.ca.ui.utils.exif.TiffTags = {
		0x0100 : "ImageWidth",
		0x0101 : "ImageHeight",
		0x8769 : "ExifIFDPointer",
		0x8825 : "GPSInfoIFDPointer",
		0xA005 : "InteroperabilityIFDPointer",
		0x0102 : "BitsPerSample",
		0x0103 : "Compression",
		0x0106 : "PhotometricInterpretation",
		0x0112 : "Orientation",
		0x0115 : "SamplesPerPixel",
		0x011C : "PlanarConfiguration",
		0x0212 : "YCbCrSubSampling",
		0x0213 : "YCbCrPositioning",
		0x011A : "XResolution",
		0x011B : "YResolution",
		0x0128 : "ResolutionUnit",
		0x0111 : "StripOffsets",
		0x0116 : "RowsPerStrip",
		0x0117 : "StripByteCounts",
		0x0201 : "JPEGInterchangeFormat",
		0x0202 : "JPEGInterchangeFormatLength",
		0x012D : "TransferFunction",
		0x013E : "WhitePoint",
		0x013F : "PrimaryChromaticities",
		0x0211 : "YCbCrCoefficients",
		0x0214 : "ReferenceBlackWhite",
		0x0132 : "DateTime",
		0x010E : "ImageDescription",
		0x010F : "Make",
		0x0110 : "Model",
		0x0131 : "Software",
		0x013B : "Artist",
		0x8298 : "Copyright"
	};
	
	
	
	function findEXIFinJPEG(oFile) {
		var aMarkers = [];
	
		if (oFile.getByteAt(0) != 0xFF || oFile.getByteAt(1) != 0xD8) {
			return false; // not a valid jpeg
		}
	
		var iOffset = 2;
		var iLength = oFile.getLength();
		while (iOffset < iLength) {
			if (oFile.getByteAt(iOffset) != 0xFF) {
				if (bDebug) 
					jQuery.sap.log.error("Not a valid marker at offset " + iOffset + ", found: " + oFile.getByteAt(iOffset));
				return false; // not a valid marker, something is wrong
			}
	
			var iMarker = oFile.getByteAt(iOffset+1);
	
			// we could implement handling for other markers here, 
			// but we're only looking for 0xFFE1 for EXIF data
	
			if (iMarker == 22400) {
				if (bDebug) 
					jQuery.sap.log.error("Found 0xFFE1 marker");
				return readEXIFData(oFile, iOffset + 4, oFile.getShortAt(iOffset+2, true)-2);
				
			} 
			else if (iMarker == 225) {
				// 0xE1 = Application-specific 1 (for EXIF)
				if (bDebug) 
					jQuery.sap.log.error("Found 0xFFE1 marker");
				return readEXIFData(oFile, iOffset + 4, oFile.getShortAt(iOffset+2, true)-2);
	
			} else {
				iOffset += 2 + oFile.getShortAt(iOffset+2, true);
			}
	
		}
	
	}
	
	
	function readTags(oFile, iTIFFStart, iDirStart, oStrings, bBigEnd) 
	{
		var iEntries = oFile.getShortAt(iDirStart, bBigEnd);
		var oTags = {};
		for (var i=0;i<iEntries;i++) {
			var iEntryOffset = iDirStart + i*12 + 2;
			var strTag = oStrings[oFile.getShortAt(iEntryOffset, bBigEnd)];
			if (!strTag && bDebug) 
				jQuery.sap.log.error("Unknown tag: " + oFile.getShortAt(iEntryOffset, bBigEnd));
			oTags[strTag] = readTagValue(oFile, iEntryOffset, iTIFFStart, iDirStart, bBigEnd);
		}
		return oTags;
	}
	
	
	function readTagValue(oFile, iEntryOffset, iTIFFStart, iDirStart, bBigEnd)
	{
		var iType = oFile.getShortAt(iEntryOffset+2, bBigEnd);
		var iNumValues = oFile.getLongAt(iEntryOffset+4, bBigEnd);
		var iValueOffset = oFile.getLongAt(iEntryOffset+8, bBigEnd) + iTIFFStart;
	
		switch (iType) {
			case 1: // byte, 8-bit unsigned int
			case 7: // undefined, 8-bit byte, value depending on field
				if (iNumValues == 1) {
					return oFile.getByteAt(iEntryOffset + 8, bBigEnd);
				} else {
					var iValOffset = iNumValues > 4 ? iValueOffset : (iEntryOffset + 8);
					var aVals = [];
					for (var n=0;n<iNumValues;n++) {
						aVals[n] = oFile.getByteAt(iValOffset + n);
					}
					return aVals;
				}
				break;
	
			case 2: // ascii, 8-bit byte
				var iStringOffset = iNumValues > 4 ? iValueOffset : (iEntryOffset + 8);
				return oFile.getStringAt(iStringOffset, iNumValues-1);
				break;
	
			case 3: // short, 16 bit int
				if (iNumValues == 1) {
					return oFile.getShortAt(iEntryOffset + 8, bBigEnd);
				} else {
					var iValOffset = iNumValues > 2 ? iValueOffset : (iEntryOffset + 8);
					var aVals = [];
					for (var n=0;n<iNumValues;n++) {
						aVals[n] = oFile.getShortAt(iValOffset + 2*n, bBigEnd);
					}
					return aVals;
				}
				break;
	
			case 4: // long, 32 bit int
				if (iNumValues == 1) {
					return oFile.getLongAt(iEntryOffset + 8, bBigEnd);
				} else {
					var aVals = [];
					for (var n=0;n<iNumValues;n++) {
						aVals[n] = oFile.getLongAt(iValueOffset + 4*n, bBigEnd);
					}
					return aVals;
				}
				break;
			case 5:	// rational = two long values, first is numerator, second is denominator
				if (iNumValues == 1) {
					return oFile.getLongAt(iValueOffset, bBigEnd) / oFile.getLongAt(iValueOffset+4, bBigEnd);
				} else {
					var aVals = [];
					for (var n=0;n<iNumValues;n++) {
						aVals[n] = oFile.getLongAt(iValueOffset + 8*n, bBigEnd) / oFile.getLongAt(iValueOffset+4 + 8*n, bBigEnd);
					}
					return aVals;
				}
				break;
			case 9: // slong, 32 bit signed int
				if (iNumValues == 1) {
					return oFile.getSLongAt(iEntryOffset + 8, bBigEnd);
				} else {
					var aVals = [];
					for (var n=0;n<iNumValues;n++) {
						aVals[n] = oFile.getSLongAt(iValueOffset + 4*n, bBigEnd);
					}
					return aVals;
				}
				break;
			case 10: // signed rational, two slongs, first is numerator, second is denominator
				if (iNumValues == 1) {
					return oFile.getSLongAt(iValueOffset, bBigEnd) / oFile.getSLongAt(iValueOffset+4, bBigEnd);
				} else {
					var aVals = [];
					for (var n=0;n<iNumValues;n++) {
						aVals[n] = oFile.getSLongAt(iValueOffset + 8*n, bBigEnd) / oFile.getSLongAt(iValueOffset+4 + 8*n, bBigEnd);
					}
					return aVals;
				}
				break;
		}
	}
	
	/**
	 * Reads file and returns EXIF metadata
	 */
	function readEXIFData(oFile, iStart, iLength) 
	{
		if (oFile.getStringAt(iStart, 4) != "Exif") {
			if (bDebug) 
				jQuery.sap.log.error("Not valid EXIF data! " + oFile.getStringAt(iStart, 4));
			return false;
		}
	
		var bBigEnd;
	
		var iTIFFOffset = iStart + 6;
	
		// test for TIFF validity and endianness
		if (oFile.getShortAt(iTIFFOffset) == 0x4949) {
			bBigEnd = false;
		} 
		else if (oFile.getShortAt(iTIFFOffset) == 0x4D4D) {
			bBigEnd = true;
		} 
		else {
			if (bDebug) 
				jQuery.sap.log.error("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
			return false;
		}
	
		if (oFile.getShortAt(iTIFFOffset+2, bBigEnd) != 0x002A) {
			if (bDebug) 
				jQuery.sap.log.error("Not valid TIFF data! (no 0x002A)");
			return false;
		}
	
		if (oFile.getLongAt(iTIFFOffset+4, bBigEnd) != 0x00000008) {
			if (bDebug) 
				jQuery.sap.log.error("Not valid TIFF data! (First offset not 8)", oFile.getShortAt(iTIFFOffset+4, bBigEnd));
			return false;
		}
	
		var oTags = readTags(oFile, iTIFFOffset, iTIFFOffset+8, sap.ca.ui.utils.exif.TiffTags, bBigEnd);
		
		return oTags;
	}
	
	
	/**
	 * Takes a binary file and retrieve EXIF metadata from it
	 */
	sap.ca.ui.utils.exif.readFromBinary = function(oFile) {
		return findEXIFinJPEG(oFile);
	}



})();

