//Copyright (c) 2013 SAP AG, All Rights Reserved
/**
 * @fileOverview This file contains an annotation parser for factsheets.
 */

(function () {
    "use strict";
    /*global sap, jQuery, $, setTimeout, window, console */

    jQuery.sap.declare("sap.ushell.components.factsheet.factory.ThingInspector");

    var cbesh;
    if (typeof cbesh === "undefined") {
        cbesh = sap.ushell.components.factsheet;
    }
    cbesh.factory = (function () {

        jQuery.sap.require("sap.suite.ui.commons.UnifiedThingInspector");
        jQuery.sap.require("sap.ushell.components.factsheet.annotation.Mapping");

        var oTI, oMapping = {}, getServiceFromUri, getEntitySetFromUri, getEntitySetFromType, getEntityType, getAssociation, getNavEntitySet, getAssociationMultiplicity,
            getExpand, propertyPartsWithStrings, newJSONModels = {}, newModelValue, dataField, labelBinding, fieldBinding, getEntityKeyFromUri, getKeyProperty, 
            navigationBinding, columnHAlign, annotationFormLayout, showHTML, Table, RowRepeater, genericThingViewer,
            FACTSHEET = "displayFactSheet",
            ANNOTATION = "annotation=",//"__anno=",
            ENTITY = "entity=";//"__entity="; 

        //Until a formatter is available to short numbers for the KPIs the following workaround does this
        //Begin workaround
        jQuery.sap.require("sap.ui.base.Object");
        jQuery.sap.require("sap.ui.core.format.NumberFormat");

        var oLocale = sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale();
        if (sap.ui.getCore().getConfiguration().getLanguage() == "ZH") {
            oLocale = new sap.ui.core.Locale("zh_CN");
        }

        var oShortDecimalFormat = sap.ui.core.LocaleData.getInstance(oLocale)._get("decimalFormat-short");

        function toShortValue(value) {
            var shortFormat = "";
            var shortValue = "";
            var shortNumberAsString = "";
            var indexOfZero = 0;
            var result = "";
            var positiveNumberWithoutDecimals = toPositiveNumberWithoutDecimals(value);
            var sourceType = Math.pow(10, positiveNumberWithoutDecimals.toString().length - 1);

            if (oShortDecimalFormat == null)
                return sap.ui.core.format.NumberFormat.getIntegerInstance().format(value);
            if (oShortDecimalFormat[sourceType] == null
                    || oShortDecimalFormat[sourceType] == undefined
                    || oShortDecimalFormat[sourceType] == "0")
                return sap.ui.core.format.NumberFormat.getIntegerInstance().format(value);

            shortFormat = oShortDecimalFormat[sourceType];
            var numberOfZerosInPattern = shortFormat.match(/0/g).length;

            var numberPart = shortFormat.substring(0, shortFormat.lastIndexOf("0") + 1);
            var abbreviationPart = shortFormat.substring(shortFormat.lastIndexOf("0") + 1, shortFormat.length);
            abbreviationPart = abbreviationPart.replace(/'.'/g, ".");

            shortValue = numberPart;
            shortNumberAsString = positiveNumberWithoutDecimals.toString();

            for ( var i = 0; i < numberOfZerosInPattern; i += 1) {
                indexOfZero = shortValue.indexOf("0", indexOfZero);
                if (indexOfZero == -1)
                    break;
                shortValue = shortValue.substring(0, indexOfZero) + shortNumberAsString[i]
                + shortValue.substring(indexOfZero + 1);
                indexOfZero += 1;
            }

            if (isNegativeValue(value)) {
                shortValue = toNegativeValue(shortValue);
            }
            result = sap.ui.core.format.NumberFormat.getFloatInstance().format(shortValue);
            result = result + abbreviationPart;
            return result;
        }

        function toPositiveNumberWithoutDecimals(value) {
            var result = Number(value).toFixed(0);
            if (isNegativeValue(value)) {
                result = Number(result) * -1;
            }
            return result;
        }

        function toNegativeValue(value) {
            return Number(value) * -1;
        }

        function isNegativeValue(value) {
            return value < 0 ? true : false;
        }  

        function kpiValueFormatter(value, fractionDigits) {
            var result, oRegExp;
            if (!value) {
                return "";
            }
            oRegExp = new RegExp(sap.ui.core.format.NumberFormat.oDefaultFloatFormat.groupingSeparator,"g");
            if (fractionDigits && fractionDigits > 0) {
                var oNumberFormatter = sap.ui.core.format.NumberFormat.getFloatInstance({minFractionDigits: fractionDigits, maxFractionDigits: fractionDigits}, oLocale);
                result = oNumberFormatter.format(value);
                if (result && result.length > 6) {
                    value = value.replace(oRegExp, "");
                    return(toShortValue(value));
                }
                else {
                    return result;
                }
            } else {
            	var oNumberFormatter = sap.ui.core.format.NumberFormat.getFloatInstance({minFractionDigits: 1, maxFractionDigits: 99}, oLocale);
                result = oNumberFormatter.format(value);
                if (result && result.length > 6) {
                    value = value.replace(oRegExp, "");
                    return(toShortValue(value));
                } else {
                    return result;
                }
            }
        };
        //End workaround
        // HANA Live
        function fnChange() {
        	var sProperty, sPropertyValue, oUrl= "";
        	var sPath = this.getElementBinding().sPath.split("/")[1];
        	var oModel = this.getModel();
        	var aUrl = this.mBindingInfos.value.parameters;
        	var aParameters = this.mBindingInfos.value.parts;

        	for (var i=0;i<aUrl.length;i++){
//        		if (oHANAUrl[i].Type == "Path"){
//        			sProperty = oHANAUrl[i].Value;
//        			sPropertyValue = oModel.oData[sPath][sProperty];
//        			oUrl = oUrl + sPropertyValue;
//        		} else {
        			oUrl = oUrl + aUrl[i].string;
//        		}
        	}
        	for (var j=0;j<aParameters.length;j++){
        		sProperty = aParameters[j].path;
        		var sPropertyName = "{"+sProperty+"}";
        		sPropertyValue = oModel.oData[sPath][sProperty];
        		oUrl = oUrl.replace(sPropertyName, sPropertyValue);
        	}
        	var sNewValue = newModelValue(oUrl);
        	if ($.isNumeric(sNewValue)){
        		var sValueFormat = this.mBindingInfos.value.parts.filter(function(obj) {
        		    return (obj.path == sProperty);
        		});
        		sNewValue = kpiValueFormatter(sNewValue, sValueFormat[0].type.oFormatOptions.maxFractionDigits);
        		this.setDoubleFontSize(true);
        	}
        	this.setValue(sNewValue);
        	
        	this.getElementBinding().detachChange(fnChange);
        }

        getServiceFromUri = function (sUri) {
            var aUriParts, sService, i;
            aUriParts = sUri.slice(1).split("/");
            sService = "/";
            for (i = 0; i < aUriParts.length; i += 1) {
                if (aUriParts[i].indexOf("(") > 0) {
                    break;
                } else {
                    sService += aUriParts[i] + "/";
                }
            }
            return sService;
        };
        getEntitySetFromUri = function (sUri, oModel) {
            var sEntitySet, sEntityUri, aServiceParts, sNavProperty;
            sEntityUri = sUri.slice(oModel.sServiceUrl.length + 1);
            if (sEntityUri.indexOf("/") >= 0) {
                aServiceParts = sEntityUri.split("/");
                sNavProperty = aServiceParts[aServiceParts.length];
                sEntitySet = aServiceParts[aServiceParts.length - 1];
                if (sEntitySet.indexOf("(") >= 0) {
                    sEntitySet = sEntitySet.slice(sEntitySet.indexOf("("));
                }
                sEntitySet = this.getNavEntitySet(sEntitySet, sNavProperty, oModel.getMetadata());
            } else {
                if (sEntityUri.indexOf("(") >= 0) {
                    sEntitySet = sEntityUri.slice(0, sEntityUri.indexOf("("));
                } else {
                    if (sEntityUri.indexOf("?") >= 0) {
                        sEntitySet = sEntityUri.slice(0, sEntityUri.indexOf("?"));
                    } else {
                        sEntitySet = sEntityUri;
                    }
                }
            }
            return sEntitySet;
        };
        getEntityKeyFromUri = function (sUri, oModel) {
            var sEntityUri, sKey, oMetadata, sEntityType;
            sEntityUri = sUri.slice(oModel.sServiceUrl.length + 1);
            if (sEntityUri.indexOf("(") >= 0) {
                sKey = sEntityUri.slice(sEntityUri.indexOf("(")+1, sEntityUri.indexOf(")"));
                if (sKey.indexOf("=") <= 0) {
//                  there is just one key property and the shortened notation was used, get name of the key property
                    oMetadata = oModel.getServiceMetadata();
                    sEntityType = getEntityType(getEntitySetFromUri(sUri, oModel), oMetadata);
                    sKey = getKeyProperty(sEntityType, oMetadata)+"="+sKey;
                }
            } else {
                sKey = new String();
            }
            return sKey;
        };
        getKeyProperty = function (sEntityType, oMetadata) {
            var i, metadataSchema, j;
            for (i = oMetadata.dataServices.schema.length - 1; i >= 0; i -= 1) {
                metadataSchema = oMetadata.dataServices.schema[i];
                if (metadataSchema.namespace === sEntityType.slice(0, sEntityType.lastIndexOf("."))) {
                    for (j = 0; j < metadataSchema.entityType.length; j += 1) {
                        if (metadataSchema.entityType[j].name === sEntityType.slice(sEntityType.lastIndexOf(".")+1)) {
                            return metadataSchema.entityType[j].key.propertyRef[0].name;
                        }
                    }
                }
            }
        };

        getEntitySetFromType = function (sEntityType, oMetadata) {
            var modelEntityType = sEntityType;
            for (var i = oMetadata.dataServices.schema.length-1; i >= 0 ; i--) {
                var metadataSchema = oMetadata.dataServices.schema[i];
                if (metadataSchema.entityContainer) {
                    var aEntitySets = metadataSchema.entityContainer[0].entitySet;
                    for (var j = aEntitySets.length-1; j >= 0; j--) {
                        if (aEntitySets[j].entityType == modelEntityType) {
                            return aEntitySets[j].name;
                        }
                    }				
                }
            }
        };
        getEntityType = function (sEntitySet, oMetadata, bWithoutNamespace) {
            var i, metadataSchema, aEntitySets, j;
            for (i = oMetadata.dataServices.schema.length - 1; i >= 0; i -= 1) {
                metadataSchema = oMetadata.dataServices.schema[i];
                if (metadataSchema.entityContainer) {
                    aEntitySets = metadataSchema.entityContainer[0].entitySet;
                    for (j = aEntitySets.length - 1; j >= 0; j -= 1) {
                        if (aEntitySets[j].name === sEntitySet) {
                            if (bWithoutNamespace) {
                                return aEntitySets[j].entityType.slice(metadataSchema.namespace.length+1)
                            } else {
                                return aEntitySets[j].entityType;
                            }
                        }
                    }
                }
            }
        };
        getAssociation = function (sEntityType, sNavProperty, oMetadata) {
            var aNsEntityType, i, metadataSchema, sNameSpace, k, j, oNavProperty;
            aNsEntityType = sEntityType.split(".");
            for (i = oMetadata.dataServices.schema.length - 1; i >= 0; i -= 1) {
                metadataSchema = oMetadata.dataServices.schema[i];
                sNameSpace = aNsEntityType[0];
                if (aNsEntityType.length > 2) {
                    for (k = 1; k < aNsEntityType.length - 1; k += 1) {
                        sNameSpace += "." + aNsEntityType[k];
                    }
                }
                if (metadataSchema.namespace === sNameSpace) {
                    for (j = 0; j < metadataSchema.entityType.length; j += 1) {
                        if (metadataSchema.entityType[j].name === aNsEntityType[aNsEntityType.length - 1]) {
                            if (metadataSchema.entityType[j].navigationProperty) {
                                for (k = 0; k < metadataSchema.entityType[j].navigationProperty.length; k += 1) {
                                    if (metadataSchema.entityType[j].navigationProperty[k].name === sNavProperty) {
                                        oNavProperty = metadataSchema.entityType[j].navigationProperty[k];
                                        return {name: oNavProperty.relationship, toRole: oNavProperty.toRole};
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        getNavEntitySet = function (sEntitySet, sNavProperty, oMetadata) {
            var sEntityType, termTargetType, oAssociation, i, metadataSchema, j, sAssociationSet, k;
            sEntityType = getEntityType(sEntitySet, oMetadata);
            if (sNavProperty.charAt(0) === "@") {
                if (oMapping.termDefinitions && oMapping.termDefinitions[sNavProperty]) {
                    termTargetType = oMapping.termDefinitions[sNavProperty];
                    if (termTargetType.indexOf("Collection") >= 0) {
                        termTargetType = termTargetType.slice(termTargetType.indexOf("(") + 1, termTargetType.indexOf(")"));
                    }
                    return getEntitySetFromType(termTargetType, oMetadata);
                }
            } else {
                oAssociation = getAssociation(sEntityType, sNavProperty, oMetadata);
                if (oAssociation) {
                    for (i = oMetadata.dataServices.schema.length - 1; i >= 0; i -= 1) {
                        metadataSchema = oMetadata.dataServices.schema[i];
                        if (metadataSchema.entityContainer && metadataSchema.entityContainer[0].associationSet) {
                            for (j = metadataSchema.entityContainer[0].associationSet.length - 1; j >= 0; j -= 1) {
                                sAssociationSet = metadataSchema.entityContainer[0].associationSet[j];
                                if (sAssociationSet.association === oAssociation.name) {
                                    for (k = 0; k <  sAssociationSet.end.length; k += 1) {
                                        if (sAssociationSet.end[k].role === oAssociation.toRole) {
                                            return sAssociationSet.end[k].entitySet;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        getAssociationMultiplicity = function (sEntitySet, sNavProperty, oMetadata) {
            var sEntityType, oAssociation, i, metadataSchema, j, sAssociation, k;
            sEntityType = getEntityType(sEntitySet, oMetadata);
            oAssociation = getAssociation(sEntityType, sNavProperty, oMetadata);
            for (i = oMetadata.dataServices.schema.length - 1; i >= 0; i -= 1) {
                metadataSchema = oMetadata.dataServices.schema[i];
                for (j = metadataSchema.association.length - 1; j >= 0; j -= 1) {
                    sAssociation = metadataSchema.association[j];
                    if (metadataSchema.namespace + '.' + sAssociation.name === oAssociation.name) {
                        for (k = 0; k <  sAssociation.end.length; k += 1) {
                            if (sAssociation.end[k].role.substr(0, 7) === "ToRole_") {
                                return sAssociation.end[k].multiplicity;
                            }
                        }
                    }
                }
            }
        };
        getExpand = function (sEntitySet, oMetadata) {
            var oExpand, oExpandEntities, aExpand, elem;
            oExpand = {};
            if (oMapping.expand) {
                if (oMapping.expand[getEntityType(sEntitySet, oMetadata)]) {
                    oExpandEntities = oMapping.expand[getEntityType(sEntitySet, oMetadata)];
                    aExpand = [];
                    for (elem in oExpandEntities) {
                        aExpand.push(oExpandEntities[elem]);
                    }
                    oExpand.expand = aExpand.join(", ");
                }
            }
            return oExpand;
        };

        /* UI Renderer */

        propertyPartsWithStrings = function (aParts, oFormatter) {
            var that, oBinding = {}, j;
            oBinding.parts = [];
            oBinding.parameters = [];
            for (j = aParts.length - 1; j >= 0; j -= 1) {
                if (aParts[j].Type === "Path") {
                    if (aParts[j].EdmType) {
                        switch (aParts[j].EdmType) {
                            case "Edm.DateTimeOffset":
                            case "Edm.DateTime":
                                oBinding.parts.push({path: aParts[j].Value, type: new sap.ui.model.type.DateTime()});
                                break;
                            case "Edm.Time":
                                oBinding.parts.push({path: aParts[j].Value + "/ms", type: new sap.ui.model.type.Time({
                                    source: {
                                        pattern: "timestamp"
                                    }
                                })});
                                break;
                            case "Edm.Date":
                                oBinding.parts.push({path: aParts[j].Value, type: new sap.ui.model.type.Date()});
                                break;
                            case "Edm.Decimal":
                            case "Edm.Double":
                            case "Edm.Single":
                                oBinding.parts.push({path: aParts[j].Value, type: new sap.ui.model.type.Float()});
                                break;
                            case "Edm.Int16":
                            case "Edm.Int32":
                            case "Edm.Int64":
                                oBinding.parts.push({path: aParts[j].Value, type: new sap.ui.model.type.Integer()});
                                break;
                            default:
                                oBinding.parts.push({path: aParts[j].Value});
                            break;
                        }
                    } else {
                        oBinding.parts.push({path: aParts[j].Value});
                    }
                }
                // HANA Live: set strings as parameter
                else if (aParts[j].Type === "String") {
                	oBinding.parameters.unshift({string: aParts[j].Value});
                }
            }
            oBinding.formatter = function () {
                var sValue = "", sPathIndex, k, sLastValue, aValueLastLen, sLastSeparator="";
                that = this;
                if (arguments && arguments.length >= 1) {
                    sPathIndex = arguments.length - 1;
                    sLastValue = ""; 
                    aValueLastLen = 0;
                    for (k = 0; k < aParts.length; k += 1) {
                        if (aParts[k].Type === "Path") {
                            sLastValue = arguments[sPathIndex];
                            if (!sLastValue || sLastValue.length == 0) {
                                if (sValue.length > aValueLastLen) {
                                    // remove last separator if argument is empty
                                    sValue = sValue.substr(0,aValueLastLen);
                                }
                            } else {
                                sValue += sLastValue;      
                            }
                            sPathIndex -= 1;
                            aValueLastLen = sValue.length;
                        } else {
                            aValueLastLen = sValue.length;
                            sLastSeparator = aParts[k].Value;
                            if ((sLastValue && sLastValue.length > 0) || sLastSeparator.indexOf("(") !== -1  || (sLastSeparator && sLastSeparator.substr(0, 1) == "#")) { 
                                // only add separator if last argument was not empty
                                sValue += aParts[k].Value;
                            } else {
                                sLastSeparator = "";
                            }
                        } 
                    }
                    if (oFormatter) {
                        sValue = oFormatter(sValue);
                    }
                    return sValue.trim();
                }
            };
            return oBinding;
        };

        var searchObj = function (obj,property){
            for ( var key in obj ) {
                if (key == '__metadata'){
                    continue;
                } else if ( key == property ){
                    return obj[key];		            
                } else if ( typeof obj[key] === 'object' ){
                    return searchObj( obj[key], property ); 
                }
            }
        };

        newModelValue = function (sUrl) {
            var iLastSlash, newUrl, newProp, newJSONModel = {}, returnValue;
            iLastSlash = sUrl.lastIndexOf("/");
            newUrl = sUrl.slice(0, iLastSlash);
            newProp = sUrl.slice(iLastSlash + 1);
            if (!newJSONModels[sUrl]) {
                newJSONModel = new sap.ui.model.json.JSONModel();
                newJSONModel.loadData(newUrl, null, false);
                newJSONModels[sUrl] = newJSONModel.getData();
            } else {
                newJSONModel = newJSONModels[sUrl];
            }
            if (newJSONModels[sUrl] && newJSONModels[sUrl].d){
            	if (!newJSONModels[sUrl].d[newProp]){
            		returnValue = searchObj(newJSONModels[sUrl].d,newProp);
            	} else {
            		returnValue = newJSONModels[sUrl].d[newProp];
            	}	
            }
            
            return returnValue;
        };

        dataField = function (oField, sEntityType, oMetadata) {
            var oControl, oBinding;
            oControl = new sap.ui.core.Control();
            oBinding = fieldBinding(oField.Value, oField.EdmType, sEntityType);
            if (oField.Value && oField.Value["com.sap.vocabularies.UI.v1.IsImageURL"]) {
                oControl = new sap.m.Image({height: "50px"});
                if (oBinding.BindingInfo) {
                    oControl.bindProperty("src", oBinding.BindingInfo);
                } else {
                    oControl.setProperty("src", oBinding.String);
                }
            } else {
                if (oField.UrlRef || (oField.Target && oField.Target.Path)) {
                    oControl = new sap.m.Link({ wrapping: true });
                } else {
                    oControl = new sap.m.Text();
                }
                oControl.addStyleClass("sapFactsheetUtiDataField");
                if (oBinding.BindingInfo) {
                    oControl.bindProperty("text", oBinding.BindingInfo);
                } else {
                    oControl.setProperty("text", oBinding.String);
                }
                if (oField.EdmType === "Edm.Decimal" || oField.EdmType === "Edm.Double" || oField.EdmType === "Edm.Single" ||
                        oField.EdmType === "Edm.Int16" || oField.EdmType === "Edm.Int32" || oField.EdmType === "Edm.Int64") {
                    oControl.setTextAlign(sap.ui.core.TextAlign.End);
                }
            }
            if ((oField.RecordType === "com.sap.vocabularies.UI.v1.DataFieldWithNavigation") && oMetadata) {
                var sNavProperty = oField.Target.Path;
                if (oMapping[sEntityType][sNavProperty.slice(1)]) {
                    oControl.bindProperty("href", navigationBinding(sEntityType, sNavProperty, oMetadata));
                }
                oControl.attachPress(function(oEvent) {
                    oEvent.preventDefault();
                    oEvent.stopPropagation();
                }); 
            }
            //TODO: Check
//          else if (oField.RecordType === "com.sap.vocabularies.UI.v1.DataFieldWithNavigation") {
//          var sNavPath = oField.Target.AnnotationPath;
//          var sAnnoPath = sNavPath.substring(sNavPath.lastIndexOf("@")+1);
//          sNavPath = sNavPath.substring(0, sNavPath.lastIndexOf("@")-1);
//          var aAnnoPath = sAnnoPath.split("#");
//          }

            return oControl;
        };

        labelBinding = function (oField, oLabelProperties, aPropExtensions, bWithColon) {
            var oLabel = new sap.m.Label(oLabelProperties);
            oLabel.addStyleClass("sapFactsheetUtiLabel");
            var sColon = "";
            if (bWithColon) {
                sColon = ":";
            }
            if (oField.Label) {
                if (oField.Label.String) {
                    oLabel.setText(oField.Label.String.trim()+sColon);
                    oLabel.setTooltip(oField.Label.String.trim());
                }
                else {
                    if (oField.Label.Path) {
                        oLabel.bindProperty("text", oField.Label.Path);
                        oLabel.bindProperty("tooltip", oField.Label.Path);
                    }			
                }
            } else {
                if (oField.Value) {
                    var sLabel = new String();
                    if (oField.Value.Path && aPropExtensions){
                        var oPropertyExt = aPropExtensions[oField.Value.Path];
                        for (var j in oPropertyExt){
                            if (j = "http://www.sap.com/Protocols/SAPData") {
                                if (oPropertyExt[j].label) {
                                    sLabel = oPropertyExt[j].label;
                                    break;														
                                }
                            }
                        }
                    } else if (oField.Value.Apply && oField.Value.Apply.Name == "odata.concat") {
                        for (var k in oField.Value.Apply.Parameters){
                            var oParameter = oField.Value.Apply.Parameters[k];
                            if (oParameter.Type == "Path"){
                                var oPropertyExt = aPropExtensions[oParameter.Value];
                                for (var j in oPropertyExt){
                                    if (j = "http://www.sap.com/Protocols/SAPData") {
                                        if (oPropertyExt[j].label) {
                                            sLabel = oPropertyExt[j].label;
                                            break;														
                                        }
                                    }
                                }						
                                break;
                            }
                        }
                    }
                    oLabel.setText(sLabel+sColon);
                    oLabel.setTooltip(sLabel);
                }
            }
            return oLabel;
        };

        var fieldBinding = function (oFieldValue, sEdmType, sEntityType) {
            if (!oFieldValue) {
                return false;
            }
            var oBinding = {};
            if (oFieldValue.Apply) {  //apply function
                if (oFieldValue.Apply.Name = "odata.concat") {
                    if (sEntityType && oMapping.propertyAnnotations && oMapping.propertyAnnotations[sEntityType]) {
                        var oPropAnnotations = oMapping.propertyAnnotations[sEntityType];
                        var aParts = oFieldValue.Apply.Parameters;
                        var aPartsWithPropAnnotations = [];
                        for (j = 0; j < aParts.length; j += 1) {
                            if (aParts[j].Type === "Path") {
                                aPartsWithPropAnnotations.push(aParts[j]);
                                if (oPropAnnotations && oPropAnnotations[aParts[j].Value] && oPropAnnotations[aParts[j].Value]["Org.OData.Measures.V1.ISOCurrency"]) {       
                                    aPartsWithPropAnnotations.push({Type: "String", Value: " "});
                                    if (oPropAnnotations[aParts[j].Value]["Org.OData.Measures.V1.ISOCurrency"].Path) {
                                        aPartsWithPropAnnotations.push({Type: "Path", Value: oPropAnnotations[aParts[j].Value]["Org.OData.Measures.V1.ISOCurrency"].Path});
                                    } else {
                                        aPartsWithPropAnnotations.push({Type: "String", Value: oPropAnnotations[aParts[j].Value]["Org.OData.Measures.V1.ISOCurrency"].String});
                                    }
                                }
                                else {
                                    if (oPropAnnotations && oPropAnnotations[aParts[j].Value] && oPropAnnotations[aParts[j].Value]["Org.OData.Measures.V1.Unit"]) {
                                        aPartsWithPropAnnotations.push({Type: "String", Value: " "});
                                        if (oPropAnnotations[aParts[j].Value]["Org.OData.Measures.V1.Unit"].Path) {
                                            aPartsWithPropAnnotations.push({Type: "Path", Value: oPropAnnotations[aParts[j].Value]["Org.OData.Measures.V1.Unit"].Path});
                                        } else {
                                            aPartsWithPropAnnotations.push({Type: "String", Value: oPropAnnotations[aParts[j].Value]["Org.OData.Measures.V1.Unit"].String});
                                        }
                                    }
                                }
                            } else {
                                aPartsWithPropAnnotations.push(aParts[j]);
                            }
                        }
                        oBinding.BindingInfo = propertyPartsWithStrings(aPartsWithPropAnnotations);
                    } else {
                        oBinding.BindingInfo = propertyPartsWithStrings(oFieldValue.Apply.Parameters);
                    }
                }			
            } else {  //property path 
                if (oFieldValue.Path) {
                    if (oFieldValue.Path.charAt(0)=="@") {  //property path with navigation defined in annotation
                        var oUrl = oMapping[sEntityType][oFieldValue.Path.slice(1, oFieldValue.Path.indexOf("/"))].UrlRef;
                        var sUrlProperties = oFieldValue.Path.slice(oFieldValue.Path.indexOf("/")+1);
                        var aParameters = [];	
                        if (oUrl && oUrl.Apply) {
                            var aParams = oUrl.Apply.Parameters;
                            switch (oUrl.Apply.Name) {
                                case "odata.concat":						
                                    aParameters = aParams;
                                    aParameters.push({Type: "String", Value: "/"+sUrlProperties});
                                    break;
                                case "odata.fillUriTemplate":
                                    var aTemplProperties = aParams[0].Value.split("{");
                                    for (var i in aTemplProperties) {
                                        if (aTemplProperties[i].indexOf("}") < 0) {
                                            aParameters.push({Type: "String", Value: aTemplProperties[i]});
                                        } else {	
                                            var aUrlPathProperties = aTemplProperties[i].split("}");
                                            for (var j = 1; j < aParams.length; j += 1) {
                                                if (aParams[j].Name == aUrlPathProperties[0]) {
                                                    var oParaValue = aParams[j].Value;
                                                    if (oParaValue.Path){
                                                        aParameters.push({Type: "Path", Value: oParaValue.Path});										
                                                    } else {
                                                        if (oParaValue.Apply && oParaValue.Apply.Name == "odata.UriEncode") {
                                                            var oParam = oParaValue.Apply.Parameters[0];
                                                            aParameters.push({Type: oParam.Type, Value: encodeURIComponent(oParam.Value)});
                                                            // HANA Live - put property as string to parameters (later needed for constructing URL)
                                                            aParameters.push({Type:"String", Value: "{"+encodeURIComponent(oParam.Value)+"}"});
                                                        }
                                                    }
                                                }
                                            }
                                            aParameters.push({Type: "String", Value: aUrlPathProperties[1]});
                                        }
                                    }
                                    aParameters.push({Type: "String", Value: "/"+sUrlProperties});
                                  //HANA Live
                                    oBinding.fnChange = fnChange;
                                    break;
                                default:
                                    break;
                            }
                            oBinding.BindingInfo = propertyPartsWithStrings(aParameters, newModelValue);				
                        } else {
                            if (oUrl && oUrl.Path) {
                                aParameters.push({Type: "Path", Value: oUrl.Path}, {Type: "String", Value: "/"+sUrlProperties});
                                oBinding.BindingInfo = propertyPartsWithStrings(aParameters, newModelValue);
                            } else {
                                if (oUrl && oUrl.String) {
                                    oBinding.String = newModelValue(oUrl.String+"/"+sUrlProperties);
                                }
                            }
                        }					
                    } else {   //property path defined in the model
                        oBinding.BindingInfo = {};
                        var fnType;
                        switch (sEdmType) {
                            case "Edm.DateTimeOffset":
                            case "Edm.DateTime":	
                                oBinding.BindingInfo = {path: oFieldValue.Path, type: new sap.ui.model.type.DateTime()};				
                                break;
                            case "Edm.Time":
                                oBinding.BindingInfo = {path: oFieldValue.Path+"/ms", type: new sap.ui.model.type.Time({
                                    source: {
                                        pattern: "timestamp"
                                    }
                                })};				
                                break;
                            case "Edm.Date":	
                                oBinding.BindingInfo = {path: oFieldValue.Path, type: new sap.ui.model.type.Date()};				
                                break;
                            case "Edm.Decimal":
                            case "Edm.Double":
                            case "Edm.Single":
                            case "Edm.Int16":
                            case "Edm.Int32":
                            case "Edm.Int64":
                                if ((sEdmType === "Edm.Decimal") || (sEdmType === "Edm.Double") || (sEdmType === "Edm.Single")) {
                                    fnType = new sap.ui.model.type.Float();
                                } else if ((sEdmType === "Edm.Int16") || (sEdmType === "Edm.Int32") || (sEdmType === "Edm.Int64")) {
                                    fnType = new sap.ui.model.type.Integer();
                                }
                                if (oMapping.propertyAnnotations) {
                                    var aTextParts = [];
                                    var oPropAnnotations = oMapping.propertyAnnotations[sEntityType];
                                    aTextParts.push({Type: "Path", Value: oFieldValue.Path, EdmType: sEdmType}, {Type: "String", Value: " "});
                                    if (oPropAnnotations && oPropAnnotations[oFieldValue.Path] && oPropAnnotations[oFieldValue.Path]["Org.OData.Measures.V1.ISOCurrency"]) {	   
                                        if (oPropAnnotations[oFieldValue.Path]["Org.OData.Measures.V1.ISOCurrency"].Path)
                                            aTextParts.push({Type: "Path", Value: oPropAnnotations[oFieldValue.Path]["Org.OData.Measures.V1.ISOCurrency"].Path});
                                        else
                                            aTextParts.push({Type: "String", Value: oPropAnnotations[oFieldValue.Path]["Org.OData.Measures.V1.ISOCurrency"].String});
                                    }
                                    else {
                                        if (oPropAnnotations && oPropAnnotations[oFieldValue.Path] && oPropAnnotations[oFieldValue.Path]["Org.OData.Measures.V1.Unit"]) {			
                                            if (oPropAnnotations[oFieldValue.Path]["Org.OData.Measures.V1.Unit"].Path)
                                                aTextParts.push({Type: "Path", Value: oPropAnnotations[oFieldValue.Path]["Org.OData.Measures.V1.Unit"].Path});
                                            else
                                                aTextParts.push({Type: "String", Value: oPropAnnotations[oFieldValue.Path]["Org.OData.Measures.V1.Unit"].String});				
                                        }
                                    }
                                    oBinding.BindingInfo = propertyPartsWithStrings(aTextParts);
                                } else {
                                    oBinding.BindingInfo = {path: oFieldValue.Path, type: fnType};
                                }	
                                break;
                            default:
                                oBinding.BindingInfo = {path: oFieldValue.Path};
                            break;				
                        }					
                    }
                } else {  //hard coded string in annotation
                    if (oFieldValue.String) {
                        oBinding.String = oFieldValue.String;
                    }
                }
            }
            return oBinding;	
        };

        navigationBinding = function (sEntityType, sNavProperty, oMetadata) {
            var oUrl = {}, aUrlParts = [], aParams, sUrlProperties, aTemplateParts, j, aTemplValueParts, oUrlParts = {}, j, oParaValue, sAnnotation, oElement;
            if (sNavProperty.charAt(0) === "@") {
                if (sNavProperty.indexOf("/") < 0) {
                    oUrl = oMapping[sEntityType][sNavProperty.slice(1)].UrlRef;
                } else {
                    oUrl = oMapping[sEntityType][sNavProperty.slice(1, sNavProperty.indexOf("/"))].UrlRef;
                    sUrlProperties = sNavProperty.slice(sNavProperty.indexOf("/") + 1);
                }
                if (oUrl && oUrl.Apply) {
                    aParams = oUrl.Apply.Parameters;
                    switch (oUrl.Apply.Name) {
                        case "odata.fillUriTemplate":
                            aTemplateParts = aParams[0].Value.split("{");
                            for (j = 0; j < aTemplateParts.length; j += 1) {
                                if (aTemplateParts[j].indexOf("}") < 0) {
                                    aUrlParts.push({"Value" : aTemplateParts[j], "Type" : "String"});
                                } else {
                                    aTemplValueParts = aTemplateParts[j].split("}");
                                    oUrlParts = {};
                                    oUrlParts.Value = aTemplValueParts[0];
                                    oUrlParts.Type = "Path";
                                    for (j = 1; j < aParams.length; j += 1) {
                                        if (aParams[j].Name === oUrlParts.Value) {
                                            oParaValue = aParams[j].Value;
                                            if (oParaValue.Path) {
                                                oUrlParts.Value = oParaValue.Path;
                                            } else {
                                                if (oParaValue.Apply && oParaValue.Apply.Name === "odata.UriEncode") {
                                                    oUrlParts.Value = oParaValue.Apply.Parameters[0].Value;
                                                }
                                            }
                                            break;
                                        }
                                    }
                                    aUrlParts.push(oUrlParts);
                                    aUrlParts.push({"Value" : aTemplValueParts[1], "Type" : "String"});
                                }
                            }
                            for (oElement in oMapping.aliasAnnotations) {
                                if (aParams[0].Value.indexOf("/" + oElement + "/") >= 0) {
                                    sAnnotation = oMapping.aliasAnnotations[oElement];
                                    break;
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }
                return propertyPartsWithStrings(aUrlParts);
            }/* else {
//          var sNavEntitySet = getNavEntitySet(sEntitySet, sNavProperty, oMetadata);
//          oControl.setTooltip(this.QuickView(oModel, sNavEntitySet, sAnnotationUri, aColumns[i].NavigationPath.NavigationPropertyPath, oPressCallBack, oMetadata));
//          oControl.setHref(sNavProperty);
//          oControl.attachPress(function (oEvent) {});
        }*/
        };

        columnHAlign = function (oField) {
            var hAlign = sap.ui.core.TextAlign.Begin;
            if (oField.EdmType === "Edm.Decimal" || oField.EdmType === "Edm.Double" || oField.EdmType === "Edm.Single" ||
                    oField.EdmType === "Edm.Int16" || oField.EdmType === "Edm.Int32" || oField.EdmType === "Edm.Int64") {
                hAlign = sap.ui.core.TextAlign.End;
            }
            return hAlign;
        };

        var annotationFormLayout = function (oModel, sEntitySet, sAnnotationUri, aFormData, oMaxItems, oMetadata, aColumnSize) {
            if (!oMetadata) {
                var oMetadata = oModel.getServiceMetadata();	
            }			
            if (!aFormData) aFormData = [];
            var sEntityType = getEntityType(sEntitySet, oMetadata);
            if (!aColumnSize) {
                aColumnSize = ["50%", "50%"];
            }
            
            var oContent = new sap.m.Table({
                backgroundDesign: sap.m.BackgroundDesign.Transparent,
                showSeparators: sap.m.ListSeparators.None,
                columns: [
                          new sap.m.Column({
                              width: aColumnSize[0],
                              hAlign: sap.ui.core.TextAlign.End
                          }),
                          new sap.m.Column({
                              width: aColumnSize[1]
                          })
                          ]
            });
            oContent.addStyleClass("sapFactsheetUtiTilePadding");
            var sEntity = sEntityType.substr(sEntityType.indexOf(".")+1);
            var aPropertyExtensions = (oMapping.propertyExtensions) ? oMapping.propertyExtensions[sEntityType] : [];
            var j = 0;
            var iSumPrioHigh = 0;
            var iSumPrioMedium = 0;
            var iSumPrioLow = 0;
            if (oMaxItems && oMaxItems.High) {
                iSumPrioHigh = oMaxItems.High;
            }
            if (oMaxItems && oMaxItems.Medium) {
                iSumPrioMedium = oMaxItems.Medium;
            }

            if (oMaxItems && oMaxItems.Low) {
                iSumPrioLow = oMaxItems.Low;
            }
            var oImportance;
            for (var i=0; i < aFormData.length; i += 1) {
                oImportance = aFormData[i].Importance || aFormData[i]["com.sap.vocabularies.UI.v1.Importance"];
                if (oMaxItems && oImportance && oImportance.EnumMember === "com.sap.vocabularies.UI.v1.Priority/High") {
                    if (iSumPrioHigh) {
                        iSumPrioHigh -= 1;
                    } else {
                        continue;
                    }
                }
                else if (oMaxItems && oImportance && oImportance.EnumMember === "com.sap.vocabularies.UI.v1.Priority/Medium") {
                    if (iSumPrioMedium) {
                        iSumPrioMedium -= 1;
                    } else {
                        continue;
                    }
                }
                else if (oMaxItems && oImportance && oImportance.EnumMember === "com.sap.vocabularies.UI.v1.Priority/Low") {
                    if (iSumPrioLow) {
                        iSumPrioLow -= 1;
                    } else {
                        continue;
                    }
                }
                if (oMaxItems && oMaxItems.Total && j >= oMaxItems.Total) {
                    break;
                }
                j += 1;
                var oControl = new sap.ui.core.Control().setModel(oModel);
                var oLabel = labelBinding(aFormData[i], {textAlign: sap.ui.core.TextAlign.End}, aPropertyExtensions, true);
                oControl = dataField(aFormData[i], sEntityType, oMetadata);
                oContent.addItem(new sap.m.ColumnListItem({	cells : [ oLabel, oControl ] }));
            }
            return oContent;	
        };

        var createFacet = function(oModel, sEntitySet, sAnnotationUri, oSelectedFacet, sBindingPath) {
            var oMetadata = oModel.getServiceMetadata();
            var sAssociationMultiplicity = "";
            switch (oSelectedFacet.RecordType) {
                case "com.sap.vocabularies.UI.v1.ReferenceFacet":				
                    var oTG = new sap.suite.ui.commons.UnifiedThingGroup();
                    if (oSelectedFacet.Label && oSelectedFacet.Label.String) 
                        oTG.setTitle(oSelectedFacet.Label.String);
                    var sNavPath = oSelectedFacet.Target.AnnotationPath;
                    var sAnnoPath = sNavPath.substring(sNavPath.lastIndexOf("@")+1);
                    sNavPath = sNavPath.substring(0, sNavPath.lastIndexOf("@")-1);
                    if (sNavPath) {
                        sAssociationMultiplicity = getAssociationMultiplicity(sEntitySet, sNavPath, oMetadata);
                    }
                    var aAnnoPath = sAnnoPath.split("#");
                    switch (aAnnoPath[0]) {
                        case "com.sap.vocabularies.UI.v1.LineItem":
                        case "com.sap.vocabularies.UI.v1.Badge":
                        case "com.sap.vocabularies.UI.v1.Identification":					
                            if (sNavPath) {
                                var sNavEntitySet = getNavEntitySet(sEntitySet, sNavPath, oMetadata);
                                //TODO: Remove check for identification
                                if (sAssociationMultiplicity == "*" && aAnnoPath[0] != "com.sap.vocabularies.UI.v1.Identification") {
                                    if (sNavPath.charAt(0)!="@") {										
                                        var list = itemList(oModel, sNavEntitySet, sAnnotationUri, oMetadata, sNavPath, sBindingPath+"/"+sNavPath, oSelectedFacet); 
                                        oTG.setContent(list);
                                    }  						
                                } else {
                                    if (aAnnoPath[0]=="com.sap.vocabularies.UI.v1.Identification") {
                                        var oNavHeaderInfo = oMapping[getEntityType(sNavEntitySet, oMetadata)]["com.sap.vocabularies.UI.v1.HeaderInfo"];
                                        var aIdentification = oMapping[getEntityType(sNavEntitySet, oMetadata)]["com.sap.vocabularies.UI.v1.Identification"];							
                                        var oVL = new sap.ui.layout.VerticalLayout({width:"100%"}).setModel(oModel);
                                        oVL.addContent(annotationFormLayout(oModel, sNavEntitySet, sAnnotationUri, aIdentification)).addStyleClass("sapFactsheetUtiPanel").bindElement(sBindingPath+"/"+sNavPath);
                                        oTG.setContent(oVL);										
                                    } else {
                                        oTG.setContent(new sap.m.Text({text: "You should use Identification for 1:1 relations."}));
                                    }
                                }
                            } else {
                                if (sAssociationMultiplicity == "*") {
                                    var list = itemList(oModel, sEntitySet, sAnnotationUri, oMetadata, sNavPath, sBindingPath+"/"+sNavPath, oSelectedFacet);
                                    oTG.setContent(list);
                                } else {
                                    if (aAnnoPath[0]=="com.sap.vocabularies.UI.v1.Identification") {
                                        var oHeaderInfo = oMapping[getEntityType(sEntitySet, oMetadata)]["com.sap.vocabularies.UI.v1.HeaderInfo"];
                                        var aIdentification = oMapping[getEntityType(sEntitySet, oMetadata)]["com.sap.vocabularies.UI.v1.Identification"];
                                        var oVL = new sap.ui.layout.VerticalLayout({width:"100%"}).setModel(oModel);
                                        oVL.addContent(annotationFormLayout(oModel, sEntitySet, sAnnotationUri, aIdentification).addStyleClass("sapFactsheetUtiPanel"));
                                        oTG.setContent(oVL);								
                                    } else {
                                        oTG.setContent(new sap.m.Text({text: "You should use Identification for 1:1 relations."}));
                                    }
                                }
                            }			
                            break;								
                        case "com.sap.vocabularies.UI.v1.StatusInfo":
                            if (sNavPath) {
                                var sNavEntitySet = getNavEntitySet(sEntitySet, sNavPath, oMetadata);
                                var aStatusInfo = oMapping[getEntityType(sNavEntitySet, oMetadata)]["com.sap.vocabularies.UI.v1.StatusInfo"];
                                oTG.setContent(annotationFormLayout(oModel, sNavEntitySet, sAnnotationUri, aStatusInfo).addStyleClass("sapFactsheetUtiPanel").bindElement(sBindingPath+"/"+sNavPath));
                            } else {
                                var aStatusInfo = oMapping[getEntityType(sEntitySet, oMetadata)]["com.sap.vocabularies.UI.v1.StatusInfo"];
                                oTG.setContent(annotationFormLayout(oModel, sEntitySet, sAnnotationUri, aStatusInfo).addStyleClass("sapFactsheetUtiPanel"));	    		  					  					
                            }
                            break;
                        case "com.sap.vocabularies.UI.v1.FieldGroup":
                            var oFG = oMapping[getEntityType(sEntitySet, oMetadata)][sAnnoPath];
                            if (oFG) {
                                if (!oTG.getTitle() || oTG.getTitle() == "") {
                                    if (oFG.Label) {
                                        if (oFG.Label.String) {
                                            oTG.setTitle(oFG.Label.String);
                                        } else {
                                            if (oFG.Label.Path) oTG.bindProperty("title", oFG.Label.Path);							
                                        }
                                    }
                                }
                                if (sNavPath) {
                                    var sNavEntitySet = getNavEntitySet(sEntitySet, sNavPath, oMetadata);					
                                    oTG.setContent(annotationFormLayout(oModel, sNavEntitySet, sAnnotationUri, oFG.Data).addStyleClass("sapFactsheetUtiPanel").bindElement(sBindingPath+"/"+sNavPath));
                                } else {
                                    oTG.setContent(annotationFormLayout(oModel, sEntitySet, sAnnotationUri, oFG.Data).addStyleClass("sapFactsheetUtiPanel"));	    		  					  					
                                }
                            }
                            break;					
                        default:
                            oTG.setContent(new sap.m.Text({text:"not yet implemented"}));
                        break;
                    }
                    return oTG;
                    break;		
                case "com.sap.vocabularies.UI.v1.ReferenceURLFacet":
                    //TODO: Check
                    var oTG = new sap.ui.ux3.ThingGroup({title: oSelectedFacet.Label.String});
                    oTG.setContent(showHTML(oSelectedFacet));                                                		
                    return oTG;
                    break;			
                case "com.sap.vocabularies.UI.v1.CollectionFacet":	
                    var aTG = [];
                    for (var i = 0; i < oSelectedFacet.Facets.length; i += 1) {
                        aTG.push(createFacet(oModel, sEntitySet, sAnnotationUri, oSelectedFacet.Facets[i], sBindingPath));
                    }
                    return aTG;
                    break;
                default:
                    return new sap.suite.ui.commons.UnifiedThingGroup().setContent(new sap.m.Text({text:"Not yet implemented"}));
                break;
            }
        };

        showHTML = function (oHTMLData) {
            var oImage, oHTMLCtrl, sIframe;
            switch (oHTMLData.UrlContentType.String) {
                case "image/png":
                case "image/jpeg":
                case "image/gif":
                    oImage =  new sap.m.Image({width: "100%"});
                    if (oHTMLData.Url.String) {
                        oImage.setSrc(oHTMLData.Url.String);
                    }
                    return oImage;
                default:
                    oHTMLCtrl = new sap.ui.core.HTML();
                if (oHTMLData.Url.String) {
                    oHTMLCtrl.setContent("<iframe src = '" + oHTMLData.Url.String + "' width='100%' height='250px' frameborder='0'></iframe>");
                } else {
                    if (oHTMLData.Url.Path) {
                        oHTMLCtrl.bindProperty("content",
                                {path: oHTMLData.Url.Path,
                            formatter: function (value) {
                                sIframe = "<iframe src = '" + oHTMLData.Url.Path + "' width='100%' height='250px' frameborder='0'></iframe>";
                                return sIframe;
                            }
                                }
                        );
                    }
                }
                return oHTMLCtrl;
            }
        };

        var itemList =  function (oModel, sEntitySet, sAnnotationUri, oMetadata, sNavPath, sBindingPath, oFacet) {
            if (!oMetadata) {
                oMetadata = oModel.getServiceMetadata();	
            }			
            var sEntityType = getEntityType(sEntitySet, oMetadata);		
            var sEntity = sEntityType.substr(sEntityType.indexOf(".")+1);
            var aPropertyExtensions = (oMapping.propertyExtensions) ? oMapping.propertyExtensions[sEntityType] : [];
            var aColumns = oMapping[sEntityType]["com.sap.vocabularies.UI.v1.LineItem"];

            var iMaxColumns = 6; //Default value for desktop
            if (jQuery.device.is.tablet && jQuery.device.is.landscape) {
                iMaxColumns = 5;
            } else if (jQuery.device.is.tablet && jQuery.device.is.portrait) {
                iMaxColumns = 4;
            } else if (jQuery.device.is.phone && jQuery.device.is.landscape) {
                iMaxColumns = 4;
            } else if (jQuery.device.is.phone && jQuery.device.is.portrait) {
                iMaxColumns = 3;
            }
            var iPrioHighColumnCount = 0;
            var iPrioMediumColumnCount = 0;
            var oImportance;
            for (var i=0; i < aColumns.length; i += 1) {
                oImportance = aColumns[i].Importance || aColumns[i]["com.sap.vocabularies.UI.v1.Importance"];
                if (oImportance && (oImportance.EnumMember === "com.sap.vocabularies.UI.v1.Priority/High")) {
                    iPrioHighColumnCount += 1;
                }
            }
            if (iMaxColumns > iPrioHighColumnCount) {
                iPrioMediumColumnCount = iMaxColumns - iPrioHighColumnCount;
            }

            var cells = [];
            var columns = [];
            var aLabels = [];
            var aControls = [];
            var oLabel;
            var bVisible;
            columns.push(new sap.m.Column({visible:false}));
            cells.push(new sap.m.Text().bindText("__metadata/uri"));
            for (var i=0; i < aColumns.length; i += 1) {
                var oControl = new sap.ui.core.Control();
                oImportance = aColumns[i].Importance || aColumns[i]["com.sap.vocabularies.UI.v1.Importance"];
                oControl = dataField(aColumns[i], sEntityType, oMetadata);
                oLabel = labelBinding(aColumns[i], null, aPropertyExtensions);
                aLabels.push(oLabel);
                aControls.push(oControl);
                if (oImportance && (oImportance.EnumMember === "com.sap.vocabularies.UI.v1.Priority/High")) {
                    if (iPrioHighColumnCount > 0) {
                        bVisible = true;
                        iPrioHighColumnCount -= 1;
                    } else {
                        bVisible = false;
                    }
                } else if (oImportance && (oImportance.EnumMember === "com.sap.vocabularies.UI.v1.Priority/Medium")) {
                    if (iPrioMediumColumnCount > 0) {
                        bVisible = true;
                        iPrioMediumColumnCount -= 1;
                    } else {
                        bVisible = false;
                    }
                } else {
                    bVisible = false;
                }
                columns.push(new sap.m.Column({header: oLabel, hAlign: columnHAlign(aColumns[i]), visible: bVisible}));
                cells.push(oControl);
            }  


            var oTemplateData = new sap.m.ColumnListItem({
                type : sap.m.ListType.Navigation,	        
                unread : false,
                cells : cells,
            });
            var sTitle;
            if (oFacet) {
                sTitle = oFacet.Label.String;
            }

            oTemplateData.attachPress({aColumns:aColumns, aLabels:aLabels, aControls:aControls, sTitle:sTitle}, function(oEvent, oData){ 
                var oTableData = {};
                oTableData.items = {};

                var sItem = oEvent.getSource().getCells()[0].getText().substr(oEvent.getSource().getCells()[0].getText().lastIndexOf("/"));
                var oContent = new sap.m.Table({
                    backgroundDesign: sap.m.BackgroundDesign.Transparent,
                    showSeparators: sap.m.ListSeparators.None,
                    columns: [
                              new sap.m.Column({ hAlign: sap.ui.core.TextAlign.End }),
                              new sap.m.Column()
                              ]
                });
                oContent.addStyleClass("sapFactsheetUtiPanel");
                oContent.addStyleClass("sapFactsheetUtiTilePadding");
                oContent.bindElement(sItem);
                var oLabel;
                for (var i = 0;i < aColumns.length; i += 1) {
                    oLabel = aLabels[i].clone();
                    oLabel.setText(oLabel.getText()+":");
                    oContent.addItem(new sap.m.ColumnListItem({	cells : [ oLabel, aControls[i].clone() ] }));
                }

                var sTGDescription = ""; 
                if (oTI.getName() && oTI.getDescription())
                    sTGDescription = oTI.getName() + ", " + oTI.getDescription();
                else if (oTI.getName() && !oTI.getDescription())
                    sTGDescription = oTI.getName();
                else if (!oTI.getName() && oTI.getDescription())
                    sTGDescription = oTI.getDescription();
                var oThingGroup = new sap.suite.ui.commons.UnifiedThingGroup({
                    content: oContent,
                    title : sTitle,
                    description: sTGDescription
                });

                var oPage = new sap.m.Page({
                    title : oTI.getTitle(),
                    showNavButton : true,
                    content : [ oThingGroup ]
                });
                oTI.navigateToPage(oPage, true);

            });

            var oTable = new sap.m.Table({growing : true, columns: columns});
            oTable.setModel(oModel);
            oTable.bindItems({
                path : sBindingPath,
                template : oTemplateData
            });
            //While data is loading display a loading text
            oTable.setNoDataText(sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("PULL2REFRESH_LOADING_LONG"));
            //When data gets updated check if there are no items and set a no data text in that case
            var fnUpdated = function() {
                if(this.getItems().length === 0) {
                    this.setNoDataText(sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons").getText("FACETOVERVIEW_NO_CONTENT_TEXT"));
                } else {
                    this.setNoDataText(sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("PULL2REFRESH_LOADING_LONG"));
                }                         
            };
            oTable.attachUpdateFinished(fnUpdated);
            return oTable;
        };

        /**
         * Returns tile height in rem, depending on device type and number of segments the tile consists of.
         * @param {number=} [iSegments=1] Number of segments the tile will take vertically in the grid (optional).
         *                  Currently expected values are 1, 2, 3, however any positive number is supported.
         *                  Default value is 1.
         * @return {string} Tile height in rem.
         */
        var fnGetTeaserTileHeight = function(iSegments) {
            iSegments = iSegments || 1;
            if (jQuery.device.is.phone) {
                return (7 * iSegments)+"rem";
            } else {
                return (11 * iSegments - 1)+"rem";
            }
        };
        
        var fnGetFieldSumsByPriority = function(aFields) {
            var i, iFieldsWithPrioHigh = 0, iFieldsWithPrioMedium = 0, iFieldsWithPrioLow = 0;
            var oImportance;
            for (i = 0; i < aFields.length; i += 1) {
                oImportance = aFields[i].Importance || aFields[i]["com.sap.vocabularies.UI.v1.Importance"];
                if (oImportance) {
                    switch(oImportance.EnumMember) {
                        case "com.sap.vocabularies.UI.v1.Priority/High":
                            iFieldsWithPrioHigh += 1;
                            break
                        case "com.sap.vocabularies.UI.v1.Priority/Medium":
                            iFieldsWithPrioMedium += 1;
                            break
                        case "com.sap.vocabularies.UI.v1.Priority/Low":
                            iFieldsWithPrioLow += 1;                            
                    }
                }
            }
            return {High: iFieldsWithPrioHigh, Medium: iFieldsWithPrioMedium, Low: iFieldsWithPrioLow};
        }

        genericThingViewer = function (sUri, sAnnotationUri, oTI, oThingCollection) {
            var sService, oModel, sEntitySet, sBindingPath, oMetadata, sEntityType, oHeaderInfo, aFacets, oBindingInfo, aHeaderInfoFacets,
            i, oContent = {}, sNavPath, sTargetEntitySet, sTargetEntityType, aRelatedLinks, that, modelReadCallback, jsonModel, oTable,
            sCount, functionParameters, oNavigationItem, j, k, sBusinessParams,
            oGeneralFacet, oNavModel, oTransactionSheet, aOverviewColumnSize, sLinkPath, oTransactionSheet, oActionSheet, oConfigurationSheet;
            sService = getServiceFromUri(sUri);
            oModel = new sap.ui.model.odata.ODataModel(sService, true);
            oModel.setCountSupported(false);
            oTI.setModel(oModel);
            sEntitySet = getEntitySetFromUri(sUri, oModel);
            sBindingPath = "/" + sUri.slice(sService.length);
            oMetadata = oModel.getServiceMetadata();
            //Because of a bug in icm the bsp application name and file name must be in lower case
            var sAnnotationUriPath = sAnnotationUri.substring(0, sAnnotationUri.substring(0, sAnnotationUri.lastIndexOf("/")).lastIndexOf("/"));
            var sAnnotationUriAppAndFilename = sAnnotationUri.substring(sAnnotationUri.substring(0, sAnnotationUri.lastIndexOf("/")).lastIndexOf("/"));
            sAnnotationUriAppAndFilename =  sAnnotationUriAppAndFilename.toLowerCase()
            oMapping = cbesh.annotation.Mapping.parse(oMetadata, sAnnotationUriPath+sAnnotationUriAppAndFilename);
            sEntityType = getEntityType(sEntitySet, oMetadata);
            oHeaderInfo = oMapping[sEntityType]["com.sap.vocabularies.UI.v1.HeaderInfo"];
            aFacets = oMapping[sEntityType]["com.sap.vocabularies.UI.v1.Facets"];
            aOverviewColumnSize = ["40%", "60%"];
            oTI.bindElement(sBindingPath, getExpand(sEntitySet, oMetadata));
            var oSapSuiteRb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
            // KPI's
            var numKpiTiles = 0;
            for (var key in oMapping[sEntityType] ){
                if (key.search("com.sap.vocabularies.UI.v1.DataPoint") != -1){
                    var aDataPoint = oMapping[sEntityType][key];
                    if (aDataPoint){
                        var bIsNumeric = false;
                        var oTile = new sap.suite.ui.commons.KpiTile({
                            doubleFontSize: false,
                        });
                        // set ValueFormat
                        var fractionDigits = 0; 
                        var oValueFormat;
                        if (aDataPoint.ValueFormat){
                            oValueFormat = new sap.ui.model.type.Float({
                                minFractionDigits: aDataPoint.ValueFormat.NumberOfFractionalDigits.Int,
                                maxFractionDigits: aDataPoint.ValueFormat.NumberOfFractionalDigits.Int
                            });    
                            fractionDigits = aDataPoint.ValueFormat.NumberOfFractionalDigits.Int;
                        } else oValueFormat = undefined;
                        if (aDataPoint.Title && aDataPoint.Title.String) {
                            oTile.setDescription(aDataPoint.Title.String);
                        } else {
                            if (aDataPoint.Title && aDataPoint.Title.Path) {
                                oTile.bindProperty("description", {path: aDataPoint.Title.Path} );
                            }
                        }
                        if (aDataPoint.Value && aDataPoint.Value.String) {
                            oTile.setValue(aDataPoint.Value.String);
                        } else {
                            if (aDataPoint.Value && aDataPoint.Value.Path) {
                                var oBinding = fieldBinding(aDataPoint.Value, aDataPoint.Value.EdmType, sEntityType);
                                // HANA Live                       
                                if (oBinding.fnChange){                        	
                                	oTile.setModel(oModel);
                                	oTile.bindElement(sBindingPath);
                                	oTile.getElementBinding().attachChange(oBinding.fnChange, oTile);
                                }
                                if (oBinding.String) {
                                    // live KPIs detected
                                    if ($.isNumeric(oBinding.String)) {
                                        bIsNumeric = true;
                                        oTile.setValue(kpiValueFormatter(oBinding.String, fractionDigits));
                                    } else {
                                        oTile.setValue(oBinding.String);
                                    }
                                } else if (oBinding.BindingInfo) {
                                    // check for currencies/unit of measures
                                    var oBindingInfo = oBinding.BindingInfo;
                                    if (oBindingInfo.parts && oBindingInfo.parts.length == 2){
                                        oTile.bindProperty("valueUnit", oBindingInfo.parts[0]);
                                        if (fractionDigits > 0) {
                                            oBindingInfo.parts[1].type = oValueFormat;   
                                        } else {
                                            oBindingInfo.parts[1].formatter = kpiValueFormatter;
                                            oBindingInfo.parts[1].type = oValueFormat;
                                        }   
                                        oTile.bindProperty("value", oBindingInfo.parts[1]);                                            
                                    } else if (oBindingInfo.parts && oBindingInfo.parts.length == 1) {
                                        if (fractionDigits > 0)                                                                 
                                            oBindingInfo.parts[0].type = oValueFormat;
                                        else
                                            oBindingInfo.parts[0].formatter = kpiValueFormatter;                                                               
                                        oTile.bindProperty("value",  oBindingInfo);
                                    }
                                    else {
                                        oTile.bindProperty("value", oBindingInfo);
                                    }
                                }
                            }
                        }
                        // set font size
                        if (aDataPoint.Value.EdmType === "Edm.Decimal" || aDataPoint.Value.EdmType === "Edm.Double" || aDataPoint.Value.EdmType === "Edm.Single" ||
                                aDataPoint.Value.EdmType === "Edm.Int16" || aDataPoint.Value.EdmType === "Edm.Int32" || aDataPoint.Value.EdmType === "Edm.Int64" || bIsNumeric == true) {
                            oTile.setDoubleFontSize(true);
                        }
                        oTI.addKpi(oTile);
                        numKpiTiles += 1;
                    }
                }
                // max. 3 KPIs supported
                if (numKpiTiles >= 3) 
                    break;
            }

            if (oHeaderInfo.TypeName.String) {
                oTI.setTitle(oHeaderInfo.TypeName.String);
            } else {
                if (oHeaderInfo.TypeName.Path) {
                    oTI.bindProperty("title", {path: oHeaderInfo.TypeName.Path});
                }
            }

            if (oHeaderInfo.Title.Value.String) {
                oTI.setName(oHeaderInfo.Title.Value.String);
            } else {
                oTI.bindProperty("name", fieldBinding(oHeaderInfo.Title.Value, oHeaderInfo.Title.EdmType, sEntityType).BindingInfo);
            }
            if (oHeaderInfo.Description && oHeaderInfo.Description.Value) {
                if (oHeaderInfo.Description.Value.String) {
                    oTI.setDescription(oHeaderInfo.Description.Value.String);
                } else {
                    oTI.bindProperty("description", fieldBinding(oHeaderInfo.Description.Value, oHeaderInfo.Description.EdmType, sEntityType).BindingInfo);
                }
            }
            
            // Image/Icon to the left of the title
            if (oHeaderInfo.ImageUrl && oHeaderInfo.ImageUrl.String) {
                oTI.setIcon(oHeaderInfo.ImageUrl.String);
            } else if (oHeaderInfo.ImageUrl && oHeaderInfo.ImageUrl.Path) {
                oTI.bindProperty("icon", {path: oHeaderInfo.ImageUrl.Path});                
            } else if (oHeaderInfo.TypeImageUrl && oHeaderInfo.TypeImageUrl.String) {
                oTI.setIcon(oHeaderInfo.ImageUrl.String);
            } else if (oHeaderInfo.TypeImageUrl && oHeaderInfo.TypeImageUrl.Path) {
                oTI.bindProperty("icon", {path: oHeaderInfo.TypeImageUrl.Path});                
            }

            for (i = 0;i < aFacets.length; i += 1) {
                if (aFacets[i]["com.sap.vocabularies.UI.v1.IsSummary"]) {
                    oGeneralFacet = aFacets[i];
                    break;
                }
            }
            if (oGeneralFacet) {
                var iMaxItemsInGeneral = 17;
                var iFieldsWithPrioHigh = 0;
                var iFieldsWithPrioMedium = 0;
                var iSeparators = 0;
                var aAllReferenceFacets = [];
                var aDisplayFields = [];
                for (var j = 0; j < oGeneralFacet.Facets.length; j += 1) {
                    var sUseTerm = oGeneralFacet.Facets[j].Target.AnnotationPath.substring(oGeneralFacet.Facets[j].Target.AnnotationPath.lastIndexOf("@") + 1);
                    var sNavPath = oGeneralFacet.Facets[j].Target.AnnotationPath;
                    sNavPath = sNavPath.substring(0, sNavPath.lastIndexOf("@") - 1);
                    oGeneralFacet.Facets[j].NavPath = sNavPath;
                    var sNavEntitySet = getNavEntitySet(sEntitySet, sNavPath, oMetadata);
                    oGeneralFacet.Facets[j].NavEntitySet = sNavEntitySet;
                    var sEntitySetForFacet;
                    if (sNavEntitySet) {
                        sEntitySetForFacet = sNavEntitySet;
                    } else {
                        sEntitySetForFacet = sEntitySet;
                    }
                    oGeneralFacet.Facets[j].EntitySet = sEntitySetForFacet;
                    var sNavEntityType = getEntityType(sNavEntitySet, oMetadata);
                    var sEntityTypeForFacet;
                    if (sNavEntityType) {
                        sEntityTypeForFacet = sNavEntityType;
                    } else {
                        sEntityTypeForFacet = sEntityType;
                    }
                    oGeneralFacet.Facets[j].EntityType = sEntityTypeForFacet;
                    var aFacetContent = [];
                    if (oMapping[sEntityTypeForFacet][sUseTerm].length) {
                        aFacetContent = oMapping[sEntityTypeForFacet][sUseTerm];
                    }
                    else if (oMapping[sEntityTypeForFacet][sUseTerm].Data.length) {
                        aFacetContent = oMapping[sEntityTypeForFacet][sUseTerm].Data;
                    }
                    oGeneralFacet.Facets[j].Content = aFacetContent;
                    var oImportance;
                    for (var i = 0;i < aFacetContent.length; i += 1) {
                        oImportance = aFacetContent[i].Importance || aFacetContent[i]["com.sap.vocabularies.UI.v1.Importance"];
                        if (oImportance && (oImportance.EnumMember === "com.sap.vocabularies.UI.v1.Priority/High")){
                            iFieldsWithPrioHigh += 1;
                        } else if (oImportance && (oImportance.EnumMember === "com.sap.vocabularies.UI.v1.Priority/Medium")){
                            iFieldsWithPrioMedium += 1;
                        }
                    }
                }
                if ((iFieldsWithPrioHigh + iFieldsWithPrioMedium) > iMaxItemsInGeneral) {
                    iFieldsWithPrioMedium = iMaxItemsInGeneral - iFieldsWithPrioHigh;
                    if (iFieldsWithPrioMedium < 0) {
                        iFieldsWithPrioMedium = 0;
                    }
                }
                //On mobile phones only fields with priority high should be displayed
                if (jQuery.device.is.phone) {
                    iFieldsWithPrioMedium = 0;
                }
                var iFreeSpaceBuffer = iMaxItemsInGeneral - iFieldsWithPrioHigh - iFieldsWithPrioMedium;
                var aContent = []; 
                var oFieldSumsByPriority;
                var iFieldsOnOverview = iFieldsWithPrioMedium + iFieldsWithPrioHigh;
                var oFormLayout;
                for (var j = 0; j < oGeneralFacet.Facets.length; j += 1) {
                    oFormLayout = annotationFormLayout(oModel, oGeneralFacet.Facets[j].EntitySet, sAnnotationUri, oGeneralFacet.Facets[j].Content, {High: iFieldsWithPrioHigh, Medium: iFieldsWithPrioMedium, Low: 0}, null, aOverviewColumnSize).addStyleClass("sapFactsheetUtiTilePadding").addStyleClass("sapFactsheetUtiTable");
                    if (j > 0) {
                        oFormLayout.addStyleClass("sapFactsheetUtiPaddingTop"); 
                    }
                    if (oGeneralFacet.Facets[j].NavPath) {
                        oFormLayout.bindElement(sBindingPath+"/"+oGeneralFacet.Facets[j].NavPath);   
                    }                        
                    oFieldSumsByPriority = fnGetFieldSumsByPriority(oGeneralFacet.Facets[j].Content);
                    iFieldsWithPrioHigh -= oFieldSumsByPriority.High;
                    iFieldsWithPrioMedium -= oFieldSumsByPriority.Medium;
                    if (((oFieldSumsByPriority.High > 0) && ((iFieldsWithPrioHigh + oFieldSumsByPriority.High) > 0)) || ((oFieldSumsByPriority.Medium > 0) && ((iFieldsWithPrioMedium + oFieldSumsByPriority.Medium) > 0))) {
                        aContent.push(oFormLayout);
                        //If there is more than one facet there will be some space between the facets. Because of this the number of fields
                        //to be displayed must be reduced.
                        if (j > 0) {
                            if (iFreeSpaceBuffer > 0) {
                                iFreeSpaceBuffer -= 1;
                            }
                            else if (iFieldsWithPrioMedium > 0) {
                                iFieldsWithPrioMedium -= 1;
                            } else if (iFieldsWithPrioHigh > 0) {
                                iFieldsWithPrioHigh -= 1;
                            }
                        }
                    }
                    if ((iFieldsWithPrioHigh < 1) && (iFieldsWithPrioMedium < 1)) {
                        break;
                    }
                }
                if (iFieldsWithPrioHigh < 0) {
                    iFieldsWithPrioHigh = 0;
                }
                if (iFieldsWithPrioMedium < 0) {
                    iFieldsWithPrioMedium = 0;
                }
                var oContent = new sap.ui.layout.VerticalLayout({content: aContent, width: "100%"});
                var sGeneralTileHeight = fnGetTeaserTileHeight();
                var iRowSpan = 1;
                if ((iFieldsOnOverview > 3) && (iFieldsOnOverview <= 9)) {
                    sGeneralTileHeight = fnGetTeaserTileHeight(2);
                    iRowSpan = 2;
                } else if (iFieldsOnOverview > 9) {
                    sGeneralTileHeight = fnGetTeaserTileHeight(3);
                    iRowSpan = 3;
                }
                facet = new sap.suite.ui.commons.FacetOverview({
                    title: oSapSuiteRb.getText("UNIFIEDTHINGINSPECTOR_GENERAL_INFORMATION_HEADER_TEXT"),
                    height: sGeneralTileHeight,
                    rowSpan: iRowSpan,
                    content: oContent 
                });

                facet.attachPress({facets: oGeneralFacet}, function(oEvent, oData){ 
                    var sDefaultSpan, oGrid;
                    oTI.removeAllFacetContent();
                    var oTG = new sap.suite.ui.commons.UnifiedThingGroup();
                    var sTGDescription = ""; 
                    if (oTI.getName() && oTI.getDescription())
                        sTGDescription = oTI.getName() + ", " + oTI.getDescription();
                    else if (oTI.getName() && !oTI.getDescription())
                        sTGDescription = oTI.getName();
                    else if (!oTI.getName() && oTI.getDescription())
                        sTGDescription = oTI.getDescription();
                    oTG.setDescription(sTGDescription);
                    oTG.setTitle(oSapSuiteRb.getText("UNIFIEDTHINGINSPECTOR_GENERAL_INFORMATION_HEADER_TEXT"));
                    oTG.addStyleClass("sapFactsheetUtiGeneralInformationUtg");
                    if(oData.facets.Facets.length > 1) {
                        sDefaultSpan = "L6 M12 S12";
                    } else {
                        sDefaultSpan = "L12 M12 S12";
                    }
                    var oVL = new sap.ui.layout.VerticalLayout({width: "100%"});
                    for (i = 0;i < oData.facets.Facets.length; i += 1) {
                        if(i%2 === 0) {
                            oGrid = new sap.ui.layout.Grid({
                                hSpacing: 1,
                                vSpacing: 1,
                                defaultSpan: sDefaultSpan});
                        }
                        var oContent = createFacet(oModel, sEntitySet, sAnnotationUri, oData.facets.Facets[i], sBindingPath);
                        oContent.addStyleClass("sapFactsheetUtiGeneralInformationUtgContent");
                        if((i == 0) && (oData.facets.Facets.length > 1) && (oContent.getTitle().trim() === "")) {
                            oContent.setTitle(oSapSuiteRb.getText("UNIFIEDTHINGINSPECTOR_GENERAL_INFORMATION_HEADER_TEXT"));
                        }
                        oGrid.addContent(oContent); 
                        if(i%2 !== 0) {
                            oVL.addContent(oGrid);
                        }
                    }   
                    if(i%2 !== 0) {
                        oVL.addContent(oGrid);
                    }
                    oTG.setContent(oVL);
                    oTI.addFacetContent(oTG);
                    oTI.navigateToDetail();
                });
                oTI.addFacet(facet);
            }
            modelReadCallback = function (functionParameters) {
                return function (data) {
                    var oJsonModel = new sap.ui.model.json.JSONModel();
                    var sFacetEntityType = getEntityType(sEntitySet, oMetadata);
                    var oBadge = oMapping[functionParameters.navigationType]["com.sap.vocabularies.UI.v1.Badge"];
                    if (functionParameters.cardinality == "*") {
                        if(data.results && data.results.length) {
                            oJsonModel.setData(data);
                            var tableItemFactory = function(sId, oContext) {
                                var oTitle = dataField(oBadge.Title, functionParameters.navigationType, oMetadata);
                                var oData = oContext.oModel.oData.results[oContext.sPath.substring(oContext.sPath.lastIndexOf("/") + 1)];
                                if (oBadge.Title.RecordType && (oBadge.Title.RecordType === "com.sap.vocabularies.UI.v1.DataField")) {
                                    oTitle.addStyleClass("sapFactsheetUtiLabel");
                                }
                                if (oBadge.MainInfo) {
                                    var oMainInfo = dataField(oBadge.MainInfo, functionParameters.navigationType, oMetadata);    
                                } else {
                                    var oMainInfo = new sap.m.Text({text:""});
                                }

                                var oHLayout = new sap.ui.layout.HorizontalLayout();
                                var sSetTitle = false;
                                if(oData[oBadge.Title.Value.Path]) {
                                    sSetTitle = true;
                                }                                
                                if(oBadge.Title.Value.Apply) {
                                    for(var i=0; i<oBadge.Title.Value.Apply.Parameters.length; i++){
                                        if(oBadge.Title.Value.Apply.Parameters[i].Type === "Path"){
                                            if(oData[oBadge.Title.Value.Apply.Parameters[i].Value]){
                                                sSetTitle = true;
                                                break;
                                            }
                                        }
                                    }
                                }                                
                                if(sSetTitle) {
                                    oHLayout.addContent(oTitle);

                                    var sSeparator = "";
                                    if (oBadge.MainInfo && ((oBadge.MainInfo.EdmType && oBadge.MainInfo.EdmType == "Edm.Decimal") ||
                                            (oBadge.MainInfo.Value && oBadge.MainInfo.Value.Apply && oBadge.MainInfo.Value.Apply.Parameters[0]
                                            && oBadge.MainInfo.Value.Apply.Parameters[0].EdmType && oBadge.MainInfo.Value.Apply.Parameters[0].EdmType == "Edm.Decimal"))) {
                                        sSeparator = "comma";
                                    } else if(oBadge.MainInfo && oBadge.MainInfo.Value.Path && oData[oBadge.MainInfo.Value.Path]) {
                                        sSeparator = "dash";
                                    } else if(oBadge.MainInfo && oBadge.MainInfo.Value.Apply) {
                                        for (var i = 0; i<oBadge.MainInfo.Value.Apply.Parameters.length; i += 1) {
                                            if (oBadge.MainInfo.Value.Apply.Parameters[i].Type === "Path") {
                                                if (oData[oBadge.MainInfo.Value.Apply.Parameters[i].Value]) {
                                                    sSeparator = "dash";
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    if (sSeparator == "dash") {
                                        oHLayout.addContent(new sap.ui.core.HTML({content: "<span class=\"sapFactsheetUtiSeparatorPadding sapMText\"> &ndash; </span>"}));
                                    }
                                    if (sSeparator == "comma") {
                                        oHLayout.addContent(new sap.m.Text({text: ", "}).addStyleClass("sapFactsheetUtiSeparatorPaddingForDecimal"));
                                    }
                                }
                                if(oBadge.MainInfo) {
                                    oHLayout.addContent(oMainInfo);
                                }
                                return new sap.m.ColumnListItem({
                                    cells: [ oHLayout ]
                                })
                            };

                            var oContent = new sap.m.Table({
                                backgroundDesign: sap.m.BackgroundDesign.Transparent,
                                showSeparators: sap.m.ListSeparators.None,
                                columns: [
                                          new sap.m.Column({width: "100%" })
                                          ],
                                          items: 
                                          {
                                              path: "/results",
                                              factory: tableItemFactory
                                          }
                            });
                            oContent.setModel(oJsonModel);
                            oContent.addStyleClass("sapFactsheetUtiTilePadding");
                            oContent.addStyleClass("sapFactsheetUtiTable");

                            var count = parseInt(data.__count);
                            if (Number(count)) {
                                functionParameters.facet.setQuantity(count);
                            }
                            functionParameters.facet.setContent(oContent);
                            
                            functionParameters.facet.attachPress({ facet: functionParameters.facetContent }, function(oEvent, oData){ 
                                oTI.removeAllFacetContent();
                                var oContent = createFacet(oModel, functionParameters.entitySet, sAnnotationUri, oData.facet, functionParameters.bindingPath);
                                var sTGDescription = ""; 
                                if (oTI.getName() && oTI.getDescription())
                                    sTGDescription = oTI.getName() + ", " + oTI.getDescription();
                                else if (oTI.getName() && !oTI.getDescription())
                                    sTGDescription = oTI.getName();
                                else if (!oTI.getName() && oTI.getDescription())
                                    sTGDescription = oTI.getDescription();
                                oContent.setDescription(sTGDescription);
                                oTI.addFacetContent(oContent);
                                oTI.navigateToDetail();
                            });
                            
                        } else {
                            functionParameters.facet.setQuantity(0);
                            functionParameters.facet.addStyleClass("sapFactsheetUtiEmptyTile");
                        }                        
                    } else {
                        oJsonModel.setData({result: data});
                        var oVLayoutForLabelValuePairs = new sap.ui.layout.VerticalLayout();
                        var aPropertyExtensions = (oMapping.propertyExtensions) ? oMapping.propertyExtensions[functionParameters.navigationType] : [];
                        var oHLayoutForTitle = new sap.ui.layout.HorizontalLayout().addStyleClass("sapFactsheetUtiHLayoutLabelValue");
                        var oTitleLabel = labelBinding(oBadge.Title, {}, aPropertyExtensions, true).addStyleClass("sapFactsheetUtiLabelMargin");
                        var oTitle = dataField(oBadge.Title, functionParameters.navigationType, oMetadata);
                        oTitle.setModel(oJsonModel);
                        oTitle.bindElement("/result");
                        oHLayoutForTitle.addContent(oTitleLabel);
                        oHLayoutForTitle.addContent(oTitle);
                        oVLayoutForLabelValuePairs.addContent(oHLayoutForTitle);
                        if(oBadge.MainInfo) {
                            var oHLayoutForMainInfo = new sap.ui.layout.HorizontalLayout().addStyleClass("sapFactsheetUtiHLayoutLabelValue");
                            var oMainInfoLabel = labelBinding(oBadge.MainInfo, {}, aPropertyExtensions, true).addStyleClass("sapFactsheetUtiLabelMargin");
                            var oMainInfo = dataField(oBadge.MainInfo, functionParameters.navigationType, oMetadata);
                            oMainInfo.setModel(oJsonModel);
                            oMainInfo.bindElement("/result");
                            oHLayoutForMainInfo.addContent(oMainInfoLabel);
                            oHLayoutForMainInfo.addContent(oMainInfo);
                            oVLayoutForLabelValuePairs.addContent(oHLayoutForMainInfo);
                        }
                        if(oBadge.SecondaryInfo) {
                            var oHLayoutForSecondaryInfo = new sap.ui.layout.HorizontalLayout().addStyleClass("sapFactsheetUtiHLayoutLabelValue");
                            var oSecondaryInfoLabel = labelBinding(oBadge.SecondaryInfo, {}, aPropertyExtensions, true).addStyleClass("sapFactsheetUtiLabelMargin");
                            var oSecondaryInfo = dataField(oBadge.SecondaryInfo, functionParameters.navigationType, oMetadata);
                            oSecondaryInfo.setModel(oJsonModel);
                            oSecondaryInfo.bindElement("/result");
                            oHLayoutForSecondaryInfo.addContent(oSecondaryInfoLabel);
                            oHLayoutForSecondaryInfo.addContent(oSecondaryInfo);
                            oVLayoutForLabelValuePairs.addContent(oHLayoutForSecondaryInfo);
                        }
                        if(oBadge.TypeImageUrl || oBadge.ImageUrl) {
                            var oImageUrl;
                            if(oBadge.ImageUrl) {
                                oImageUrl = oBadge.ImageUrl;
                            } else {
                                oImageUrl = oBadge.TypeImageUrl;
                            }
                            var oHLayoutForIconAndText = new sap.ui.layout.HorizontalLayout();
                            var iSize = "64px";
                            if(jQuery.device.is.phone) {
                                iSize = "48px";
                            }
                            var oImage;
                            if(oImageUrl.String && (oImageUrl.String.substr(0,11) === "sap-icon://")) {
                                oImage = new sap.ui.core.Icon({size: iSize, width: iSize});
                            } else {
                                oImage = new sap.m.Image({ width: iSize });
                            }                             
                            oImage.addStyleClass("sapFactsheetUtiRelIcon");
                            if (oImageUrl && oImageUrl.String) {
                                oImage.setSrc(oImageUrl.String);
                            } else {
                                if (oImageUrl && oImageUrl.Path) {
                                    oImage.bindProperty("src", oImageUrl.Path);
                                }
                            }    
                            oHLayoutForIconAndText.addContent(oImage);
                            oHLayoutForIconAndText.addContent(oVLayoutForLabelValuePairs);

                            functionParameters.facet.setContent(oHLayoutForIconAndText);  
                        } else {
                            functionParameters.facet.setContent(oVLayoutForLabelValuePairs);
                        }
                        
                        functionParameters.facet.attachPress({ facet: functionParameters.facetContent }, function(oEvent, oData){ 
                            oTI.removeAllFacetContent();
                            var oContent = createFacet(oModel, functionParameters.entitySet, sAnnotationUri, oData.facet, functionParameters.bindingPath);
                            var sTGDescription = ""; 
                            if (oTI.getName() && oTI.getDescription())
                                sTGDescription = oTI.getName() + ", " + oTI.getDescription();
                            else if (oTI.getName() && !oTI.getDescription())
                                sTGDescription = oTI.getName();
                            else if (!oTI.getName() && oTI.getDescription())
                                sTGDescription = oTI.getDescription();
                            oContent.setDescription(sTGDescription);
                            oTI.addFacetContent(oContent);
                            oTI.navigateToDetail();
                        });
                    }
                };
            };

            var facet;
            var sNavType;
            for (var i=0; i < aFacets.length; i += 1) {
                if (aFacets[i].Target) {
                    var sNavPath = aFacets[i].Target.AnnotationPath;
                    sNavPath = sNavPath.substring(0, sNavPath.lastIndexOf("@")-1);
                    if (sNavPath) {

                        var aNsEntityType = sEntityType.split(".");	
                        for (var m = oMetadata.dataServices.schema.length-1; m >= 0 ; m--) {
                            var metadataSchema = oMetadata.dataServices.schema[m];
                            var sNameSpace = aNsEntityType[0];
                            if (aNsEntityType.length > 2) {
                                for (var k = 1; k < aNsEntityType.length-1; k += 1) {
                                    sNameSpace += "."+aNsEntityType[k];					
                                }
                            }
                            if (metadataSchema.namespace == sNameSpace) {
                                for (var j = 0; j < metadataSchema.association.length; j += 1) {
                                    if (metadataSchema.association[j].name == sNavPath) {
                                        sNavType = metadataSchema.association[j].end[1].type;
                                    }
                                }
                            }
                        }
                        facet = new sap.suite.ui.commons.FacetOverview({
                            title: aFacets[i].Label.String,
                            height: fnGetTeaserTileHeight(),
                        });
                        var cardinality = getAssociationMultiplicity(sEntitySet, sNavPath, oMetadata);
                        functionParameters = { cardinality: cardinality, navigationPath: sNavPath, facet: facet, facetContent: aFacets[i], navigationType: sNavType, metadata: oMetadata, bindingPath: sBindingPath, entitySet: sEntitySet };
                        var parameters;
                        if (cardinality == "*") {
                            parameters = ["$inlinecount=allpages","$top=3"];
                        } else {
                            parameters = [];
                        }
                        oModel.read(sBindingPath+"/"+sNavPath, "", parameters, true, modelReadCallback(functionParameters));
                        oTI.addFacet(facet);
                    }
                }
            }
            
            //Footer area
            oTI.setActionsVisible(true);
            var oEmailBtn = new sap.m.Button({text: oSapSuiteRb.getText("UNIFIEDTHINGINSPECTOR_FOOTER_BUTTON_EMAIL_LINK"),
              icon : "sap-icon://email",
              press : function(oE) {
              sap.m.URLHelper.triggerEmail("", oTI.getName(), window.location.href);
            }});
            oActionSheet = new sap.m.ActionSheet({ placement: sap.m.PlacementType.Top });
            oActionSheet.addButton(new sap.ushell.ui.footerbar.JamDiscussButton()); 
            oActionSheet.addButton(new sap.ushell.ui.footerbar.JamShareButton());
            var oAddBookmarkButton = new sap.ushell.ui.footerbar.AddBookmarkButton();
            var fnBindingChanged = function() {
                oAddBookmarkButton.setAppData({title: oTI.getTitle(), subtitle: oTI.getName() + " - " + oTI.getDescription()});
                oAddBookmarkButton.setEnabled(true);
                oNavModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/UI2/INTEROP", true);
                sLinkPath = "/SemanticObjects('"+getEntityType(sEntitySet, oMetadata, true)+"')/Links";
                oTransactionSheet = new sap.suite.ui.commons.LinkActionSheet({
                    showCancelButton: true,
                    placement: sap.m.PlacementType.Top
                });
                sBusinessParams = getEntityKeyFromUri(sUri, oModel);
                var aBusinessParams = sBusinessParams.split(",");
                for(i = 0; i < aBusinessParams.length; i += 1) {
                    aBusinessParams[i] = aBusinessParams[i].replace("='", "=", "g");
                    if (aBusinessParams[i].lastIndexOf("'") == aBusinessParams[i].length-1) 
                        aBusinessParams[i] = aBusinessParams[i].slice(0,-1);
                }
                for (var sTerm in oMapping[sEntityType] ){ 
                    if (sTerm.indexOf("com.sap.vocabularies.Common.v1.SecondaryKey") == 0) {
                        var aTerm = oMapping[sEntityType][sTerm];
                        for(i = 0; i < aTerm.length; i += 1) {
                            var oParaValue = this.getBoundContext().getProperty(aTerm[i].PropertyPath);
                            if (oParaValue) {
                                aBusinessParams.push(aTerm[i].PropertyPath+"="+oParaValue)                                               
                            }
                        }                          
                    }
                }
                sBusinessParams = aBusinessParams.join("&");
                oNavModel.read(sLinkPath, "", "", true, function (data) {
                    var i, sHashValue;
                    if (data && data.results) {
                        for (i = 0; i < data.results.length; i += 1) {
                            if (data.results[i].id.indexOf(FACTSHEET) < 0) {
                                if(data.results[i].applicationType !== "URL" && (jQuery.device.is.phone || jQuery.device.is.tablet)) {
                                    continue;
                                }
                                sHashValue = "#" + data.results[i].id + "?" + sBusinessParams; 
                                oTransactionSheet.addItem( new sap.m.Link({text: data.results[i].text, href: sHashValue}) );
                                oTI.setTransactionsVisible(true);
                            }
                        }
                    }
                });
                oTI.attachTransactionsButtonPress(function(oEvent) { oTransactionSheet.openBy(oEvent.getParameter("caller"))});
                this.detachChange(fnBindingChanged);                          
            };

            oTI.getElementBinding().attachChange(fnBindingChanged);

            oActionSheet.addButton(oAddBookmarkButton);
            oActionSheet.addButton(oEmailBtn);
            oTI.attachActionsButtonPress(function(oEvent) { oActionSheet.openBy(oEvent.getParameter("caller")) });

            oConfigurationSheet = new sap.m.ActionSheet({placement: sap.m.PlacementType.Top});
            oConfigurationSheet.addButton(new sap.ushell.ui.footerbar.AboutButton());  
            oConfigurationSheet.addButton(new sap.ushell.ui.footerbar.LoginDetailsButton());         
            oConfigurationSheet.addButton(new sap.ushell.ui.footerbar.LogoutButton());
            oTI.attachConfigurationButtonPress(function(oEvent) { oConfigurationSheet.openBy(oEvent.getParameter("caller")) });

            oTI.attachBackAction(function (oEvent) {
                history.back();
            });
            
            return oTI;
        };

        return {
            ThingViewer :  function (sUri, sAnnotationUri) {

                try {
                    oTI = genericThingViewer(sUri, sAnnotationUri, new sap.suite.ui.commons.UnifiedThingInspector());
                } catch (e) {
                    throw e;
                }
                return oTI;
            }
        };
    })();
}());
