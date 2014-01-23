// Annotation Loader
var testAnnoUrl = "/ushell/test-resources/sap/ushell/test/components/factsheet/annotation/data/Annotation.xml";

// Metadata of SalesOrder in E17
var testMetaData = {
    "version": "1.0",
    "dataServices": {
        "dataServiceVersion": "2.0",
        "schema": [
            {
                "namespace": "CB_SALES_ORDER_SRV",
                "entityType": [
                    {
                        "name": "Customer",
                        "key": {
                            "propertyRef": [
                                {
                                    "name": "Customer"
                                }
                            ]
                        },
                        "property": [
                            {
                                "name": "FormOfAddress",
                                "type": "Edm.String",
                                "maxLength": "15",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Title",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Customer",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Customer Number",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CustomerName",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Customer Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CustomerAdditionalName",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Additional Customer Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "StreetAddressName",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Street Address and House Number",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CityName",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "City",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "RegionName",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Region Description",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CountryName",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Country",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "PostalCode",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Postal Code",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "AddressPhoneNumber",
                                "type": "Edm.String",
                                "maxLength": "30",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Telephone",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "PhoneNumberExtension",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Telephone Extension",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ADRNR",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Address",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "FaxNumber",
                                "type": "Edm.String",
                                "maxLength": "30",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Fax",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "FaxNumberExtension",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Fax Extension",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SearchTerm",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Search Term",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "navigationProperty": [
                            {
                                "name": "CustomerToCE",
                                "relationship": "CB_SALES_ORDER_SRV.CustomerToCE",
                                "fromRole": "FromRole_CustomerToCE",
                                "toRole": "ToRole_CustomerToCE"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "CustomerCE",
                        "hasStream": "true",
                        "key": {
                            "propertyRef": [
                                {
                                    "name": "Customer"
                                },
                                {
                                    "name": "Id"
                                }
                            ]
                        },
                        "property": [
                            {
                                "name": "Customer",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Customer Number",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContentType",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "256",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Text",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Text",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "255",
                                "FC_TargetPath": "SyndicationTitle",
                                "FC_KeepInContent": "true",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Text",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Id",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "1000",
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "extensions": [
                            {
                                "name": "semantics",
                                "value": "callableEntities",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "OutboundDelivery",
                        "key": {
                            "propertyRef": [
                                {
                                    "name": "DeliveryDocument"
                                }
                            ]
                        },
                        "property": [
                            {
                                "name": "DeliveryDocument",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Outbound Delivery",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "DeliveryDocumentType",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Delivery Type",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "LFART_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Delivery Type Description",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OverallSDProcessStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Overall Processing Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "GBSTK_DESCRIPTION",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Overall Processing Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "KUNNR_WE",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Ship-to Party ID",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToParty",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sold-to Party ID",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NAME1_AG",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sold-to Party Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NAME2_AG",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Additional Sold-to Party Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "KUNNR_SP",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Forwarding Agent ID",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NAME1_SP",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Forwarding Agent Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NAME2_SP",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Additional Forwarding Agent Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "TotalGrossWeight",
                                "type": "Edm.Decimal",
                                "precision": "15",
                                "scale": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Total Weight",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "GEWEI_1_HEAD_MSEH3",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "External Unit of Measurement in Commercial Format (3-Char.)",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "GEWEI_1",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Weight Unit",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "TotalNetWeight",
                                "type": "Edm.Decimal",
                                "precision": "15",
                                "scale": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Net Weight",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "GEWEI_2_HEAD_MSEH3",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Weight Unit",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "GEWEI_2",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Weight Unit",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NAME1_WE",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Ship-to Party Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NAME2_WE",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Additional Ship-to Party Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VOLUM",
                                "type": "Edm.Decimal",
                                "precision": "15",
                                "scale": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Volume",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VOLEH_HEAD_MSEH3",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Volume Unit",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VOLEH",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Volume Unit",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VBTYP",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Document Type",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "TransportationPlanningStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Transportation Planning Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "TRSTA_DESCRIPTION",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Transportation Planning Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OverallPickingStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Overall Picking Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OverallWarehouseActivityStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Status Warehouse Management Activities",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "KOSTK_DESCRIPTION",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Overall Picking Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "LVSTK_DESCRIPTION",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Status Warehouse Management Activities",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OverallPackingStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Packing Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "PKSTK_DESCRIPTION",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Reference Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OverallGoodsMovementStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Total Goods Movement Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "WBSTK_DESCRIPTION",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Total Goods Movement Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OverallDelivReltdBillgStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Billing Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "FKSTK_DESCRIPTION",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Billing Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CreatedByUser",
                                "type": "Edm.String",
                                "maxLength": "12",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Created by",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "USER_NAME_CREATE",
                                "type": "Edm.String",
                                "maxLength": "80",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Created by",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CreationDate",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Created on",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CreationTime",
                                "type": "Edm.Time",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Creation Time",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "LastChangedByUser",
                                "type": "Edm.String",
                                "maxLength": "12",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Changed by",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "USER_NAME_CHANGE",
                                "type": "Edm.String",
                                "maxLength": "80",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Changed by",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "LastChangeDate",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Changed on",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VSTEL",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Shipping Point",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VKORG",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Organization",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "WADAT",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Planned Goods Issue Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "LDDAT",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Loading Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "TDDAT",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Transportation Planning Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "LFDAT",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Delivery Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "KODAT",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Picking Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "WADAT_IST",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Actual Goods Movement Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "navigationProperty": [
                            {
                                "name": "OutboundDeliveryToCE",
                                "relationship": "CB_SALES_ORDER_SRV.OutboundDeliveryToCE",
                                "fromRole": "FromRole_OutboundDeliveryToCE",
                                "toRole": "ToRole_OutboundDeliveryToCE"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "OutboundDeliveryCE",
                        "hasStream": "true",
                        "key": {
                            "propertyRef": [
                                {
                                    "name": "DeliveryDocument"
                                },
                                {
                                    "name": "Id"
                                }
                            ]
                        },
                        "property": [
                            {
                                "name": "DeliveryDocument",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Outbound Delivery",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContentType",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "256",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Text",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Text",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "255",
                                "FC_TargetPath": "SyndicationTitle",
                                "FC_KeepInContent": "true",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Text",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Id",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "1000",
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "extensions": [
                            {
                                "name": "semantics",
                                "value": "callableEntities",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "SD_VBAP",
                        "key": {
                            "propertyRef": [
                                {
                                    "name": "SalesOrderItem"
                                }
                            ]
                        },
                        "property": [
                            {
                                "name": "Material",
                                "type": "Edm.String",
                                "maxLength": "18",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Material",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOrder",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Order",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OrderQuantity",
                                "type": "Edm.Decimal",
                                "precision": "15",
                                "scale": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Order Quantity",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OrderQuantityUnit_E",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "External Unit of Measurement in Commercial Format (3-Char.)",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NetAmount",
                                "type": "Edm.Decimal",
                                "precision": "15",
                                "scale": "2",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Net Value",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "WAERK_NETWR",
                                "type": "Edm.String",
                                "maxLength": "5",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Currency",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOrderItem",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "6",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Item",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOrderItemText",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Item Description",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOrderItemCategory",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Item Category",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "PSTYV_TEXT",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Item Category",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "MaterialByCustomer",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Customer Material Number",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "MaterialName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Material Description",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "MaterialGroup",
                                "type": "Edm.String",
                                "maxLength": "9",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Material Group",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "MATKL_TEXT",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Material Group",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NetPriceAmount",
                                "type": "Edm.Decimal",
                                "precision": "11",
                                "scale": "2",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Net Price",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "WAERK_NETPR",
                                "type": "Edm.String",
                                "maxLength": "5",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Currency",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Plant",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Plant",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "StorageLocation",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Storage Location",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "StorageLocationName",
                                "type": "Edm.String",
                                "maxLength": "16",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Storage Location",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShippingPoint",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Shipping Point",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VSTEL_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Shipping Point",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "WERKS_TEXT",
                                "type": "Edm.String",
                                "maxLength": "30",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Plant",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SDProcessStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Overall Processing Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "GBSTA_TEXT",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Overall Processing Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "DeliveryStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Delivery Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "LFSTA_TEXT",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Delivery Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "extensions": [
                            {
                                "name": "label",
                                "value": "Items",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "SalesContract",
                        "key": {
                            "propertyRef": [
                                {
                                    "name": "SalesContract"
                                }
                            ]
                        },
                        "property": [
                            {
                                "name": "SalesContract",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Contract",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VBELN_DESCR",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Document Description",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "AUART_EXT",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Document Type",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToParty",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sold-To Party (ID)",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToPartyCityName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "City",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToPartyCountry",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Cty",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToParty",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Ship-To Party (ID)",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToPartyCityName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "City",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToPartyCountry",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Cty",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPerson",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Contact Person",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPersonFirstName",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "First Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VBTYP",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Document Category",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPersonLastName",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Last Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPersonCityName",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "City",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToPartyName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToPartyName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPersonPhoneNumber",
                                "type": "Edm.String",
                                "maxLength": "16",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Telephone",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToPartyAdditionalName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Name 2",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesContractValidityStartDate",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Valid From",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesContractValidityEndDate",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Valid To",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToPartyAdditionalName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Name 2",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesContractDate",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Document Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "PurchaseOrderByCustomer",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Purchase Order Number",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NetAmount",
                                "type": "Edm.Decimal",
                                "precision": "15",
                                "scale": "2",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Net Value",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOrganization",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Organisation",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "RFSTK_TEXT",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Reference Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VKORG_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Organisation",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "DistributionChannel",
                                "type": "Edm.String",
                                "maxLength": "2",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Distribution Channel",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VTWEG_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Distribution Channel",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Division",
                                "type": "Edm.String",
                                "maxLength": "2",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Division",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SPART_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Division",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesGroup",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Group",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VKGRP_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Group",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOffice",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Office",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VKBUR_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Office",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "WAERK_NETWR",
                                "type": "Edm.String",
                                "maxLength": "5",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Currency",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "AUART_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Document Type",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CreationDate",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Created On",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CreationTime",
                                "type": "Edm.Time",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Time",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CreatedByUser",
                                "type": "Edm.String",
                                "maxLength": "12",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Created By",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "AcademicTitleName",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Title",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NAME_FIRST",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "First Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NAME_LAST",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Last Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "TransactionGrouo",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Transaction Group",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "GBSTK_TEXT",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Overall Processing Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "navigationProperty": [
                            {
                                "name": "SalesContractToCE",
                                "relationship": "CB_SALES_ORDER_SRV.SalesContractToCE",
                                "fromRole": "FromRole_SalesContractToCE",
                                "toRole": "ToRole_SalesContractToCE"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "SalesContractCE",
                        "hasStream": "true",
                        "key": {
                            "propertyRef": [
                                {
                                    "name": "SalesContract"
                                },
                                {
                                    "name": "Id"
                                }
                            ]
                        },
                        "property": [
                            {
                                "name": "SalesContract",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Contract",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContentType",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "256",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Text",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Text",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "255",
                                "FC_TargetPath": "SyndicationTitle",
                                "FC_KeepInContent": "true",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Text",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Id",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "1000",
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "extensions": [
                            {
                                "name": "semantics",
                                "value": "callableEntities",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "SalesOrder",
                        "key": {
                            "propertyRef": [
                                {
                                    "name": "SalesOrder"
                                }
                            ]
                        },
                        "property": [
                            {
                                "name": "SalesOrder",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Order",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "AUART_L_D",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Document Type",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "AUART_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Document Type",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToParty",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sold-To Party",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToPartyCityName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "City",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToPartyCountry",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Country",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VBELN_DESCR",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Document Description",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "PurchaseOrderByCustomer",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Purchase Order Number",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOrderDate",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Document Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToPartyName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NetAmount",
                                "type": "Edm.Decimal",
                                "precision": "15",
                                "scale": "2",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Net Value",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToPartyAdditionalName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Additional Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToParty",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Ship-To Party",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToPartyCityName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "City",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToPartyCountry",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Cty",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPerson",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Contact Person",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPersonFirstName",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "First Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPersonLastName",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Last Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPersonCityName",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "City",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPersonPhoneNumber",
                                "type": "Edm.String",
                                "maxLength": "16",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Telephone",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToPartyName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToPartyAdditionalName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Name 2",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOrganization",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Organisation",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VKORG_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Organisation",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "DistributionChannel",
                                "type": "Edm.String",
                                "maxLength": "2",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Distribution Channel",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VTWEG_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Distribution Channel",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Division",
                                "type": "Edm.String",
                                "maxLength": "2",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Division",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SPART_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Division",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesGroup",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Group",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VKGRP_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Group",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOffice",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Office",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VKBUR_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Office",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "TransactionCurrency",
                                "type": "Edm.String",
                                "maxLength": "5",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Currency",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "RequestedDeliveryDate",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Requested Delivery Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CreationDate",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Created On",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CreationTime",
                                "type": "Edm.Time",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Time",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CreatedByUser",
                                "type": "Edm.String",
                                "maxLength": "12",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Created By",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "AcademicTitleName",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Title",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NAME_FIRST",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "First Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NAME_LAST",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Last Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "TransactionGroup",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Transaction Group",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SDDocumentCategory",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Document Category",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OverallSDProcessStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Overall Processing Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "GBSTK_TEXT",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Overall Processing Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OverallDeliveryStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Delivery Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "LFSTK_TEXT",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Delivery Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "TotalCreditCheckStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Credit Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CMGST_TEXT",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Credit Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "navigationProperty": [
                            {
                                "name": "SalesOrderToCE",
                                "relationship": "CB_SALES_ORDER_SRV.SalesOrderToCE",
                                "fromRole": "FromRole_SalesOrderToCE",
                                "toRole": "ToRole_SalesOrderToCE"
                            },
                            {
                                "name": "SNAV_SO_VBAP",
                                "relationship": "CB_SALES_ORDER_SRV.SNAV_SO_VBAP",
                                "fromRole": "FromRole_SNAV_SO_VBAP",
                                "toRole": "ToRole_SNAV_SO_VBAP"
                            },
                            {
                                "name": "CCUSTOMER_AG",
                                "relationship": "CB_SALES_ORDER_SRV.CCUSTOMER_AG",
                                "fromRole": "FromRole_CCUSTOMER_AG",
                                "toRole": "ToRole_CCUSTOMER_AG"
                            },
                            {
                                "name": "CCUSTOMER_WE",
                                "relationship": "CB_SALES_ORDER_SRV.CCUSTOMER_WE",
                                "fromRole": "FromRole_CCUSTOMER_WE",
                                "toRole": "ToRole_CCUSTOMER_WE"
                            },
                            {
                                "name": "CUSER_ERNAM",
                                "relationship": "CB_SALES_ORDER_SRV.CUSER_ERNAM",
                                "fromRole": "FromRole_CUSER_ERNAM",
                                "toRole": "ToRole_CUSER_ERNAM"
                            },
                            {
                                "name": "CPREVIOUS_QUOTATION",
                                "relationship": "CB_SALES_ORDER_SRV.CPREVIOUS_QUOTATION",
                                "fromRole": "FromRole_CPREVIOUS_QUOTATION",
                                "toRole": "ToRole_CPREVIOUS_QUOTATION"
                            },
                            {
                                "name": "CPREVIOUS_CONTRACT",
                                "relationship": "CB_SALES_ORDER_SRV.CPREVIOUS_CONTRACT",
                                "fromRole": "FromRole_CPREVIOUS_CONTRACT",
                                "toRole": "ToRole_CPREVIOUS_CONTRACT"
                            },
                            {
                                "name": "CSUBS_OUTBOUND_DELIVERY",
                                "relationship": "CB_SALES_ORDER_SRV.CSUBS_OUTBOUND_DELIVERY",
                                "fromRole": "FromRole_CSUBS_OUTBOUND_DELIVERY",
                                "toRole": "ToRole_CSUBS_OUTBOUND_DELIVERY"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "SalesOrderCE",
                        "hasStream": "true",
                        "key": {
                            "propertyRef": [
                                {
                                    "name": "SalesOrder"
                                },
                                {
                                    "name": "Id"
                                }
                            ]
                        },
                        "property": [
                            {
                                "name": "SalesOrder",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Order",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContentType",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "256",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Text",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Text",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "255",
                                "FC_TargetPath": "SyndicationTitle",
                                "FC_KeepInContent": "true",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Text",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Id",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "1000",
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "extensions": [
                            {
                                "name": "semantics",
                                "value": "callableEntities",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "SalesQuotation",
                        "key": {
                            "propertyRef": [
                                {
                                    "name": "SalesQuotation"
                                }
                            ]
                        },
                        "property": [
                            {
                                "name": "SalesQuotation",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Quotation",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "AUART_EXT",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Document Type",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "AUART_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Document Type",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToParty",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sold-To Party",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VBELN_DESCR",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Document Type",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToPartyCityName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "City",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToPartyCountry",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Country",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToPartyName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sold-To Party",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SoldToPartyAdditionalName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Name 2",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPerson",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Contact Person",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesQuotationValdtyStartDate",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Valid From",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesQuotationValidityEndDate",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Valid To",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToParty",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Ship-To Party",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToPartyName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Ship-To Party",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToPartyAdditionalName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Name 2",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToPartyCityName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "City",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ShipToPartyCountry",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Country",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPersonFirstName",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "First Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPersonLastName",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Last Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPersonCityName",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "City",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContactPersonPhoneNumber",
                                "type": "Edm.String",
                                "maxLength": "16",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Telephone",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesQuotationNetAmount",
                                "type": "Edm.Decimal",
                                "precision": "15",
                                "scale": "2",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Net Value",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesQuotationDate",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Document Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "PurchaseOrderByCustomer",
                                "type": "Edm.String",
                                "maxLength": "35",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Purchase Order Number",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOrganization",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Organisation",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VKORG_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Organisation",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "DistributionChannel",
                                "type": "Edm.String",
                                "maxLength": "2",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Distribution Channel",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VTWEG_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Distribution Channel",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Division",
                                "type": "Edm.String",
                                "maxLength": "2",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Division",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SPART_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Division",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesGroup",
                                "type": "Edm.String",
                                "maxLength": "3",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Group",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VKGRP_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Group",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOffice",
                                "type": "Edm.String",
                                "maxLength": "4",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Office",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VKBUR_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Office",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "TransactionCurrency",
                                "type": "Edm.String",
                                "maxLength": "5",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Currency",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CreationDate",
                                "type": "Edm.DateTime",
                                "extensions": [
                                    {
                                        "name": "display-format",
                                        "value": "Date",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "label",
                                        "value": "Created On",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CreationTime",
                                "type": "Edm.Time",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Time",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CreatedByUser",
                                "type": "Edm.String",
                                "maxLength": "12",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Created By",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "AcademicTitleName",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Title",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NAME_FIRST",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "First Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NAME_LAST",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Last Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SDDocumentCategory",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Document Category",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OverallSDProcessStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Overall Processing Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "GBSTK_TEXT",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Overall Processing Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OverallSDDocReferenceStatus",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Reference Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "RFSTK_TEXT",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Reference Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OverallSDDocumentRejectionSts",
                                "type": "Edm.String",
                                "maxLength": "1",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Rejection Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ABSTK_TEXT",
                                "type": "Edm.String",
                                "maxLength": "20",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Rejection Status",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "navigationProperty": [
                            {
                                "name": "SalesQuotationToCE",
                                "relationship": "CB_SALES_ORDER_SRV.SalesQuotationToCE",
                                "fromRole": "FromRole_SalesQuotationToCE",
                                "toRole": "ToRole_SalesQuotationToCE"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "SalesQuotationCE",
                        "hasStream": "true",
                        "key": {
                            "propertyRef": [
                                {
                                    "name": "SalesQuotation"
                                },
                                {
                                    "name": "Id"
                                }
                            ]
                        },
                        "property": [
                            {
                                "name": "SalesQuotation",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Sales Quotation",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContentType",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "256",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Text",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Text",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "255",
                                "FC_TargetPath": "SyndicationTitle",
                                "FC_KeepInContent": "true",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Text",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Id",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "1000",
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "extensions": [
                            {
                                "name": "semantics",
                                "value": "callableEntities",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "USER_H",
                        "key": {
                            "propertyRef": [
                                {
                                    "name": "User"
                                }
                            ]
                        },
                        "property": [
                            {
                                "name": "User",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "12",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "User Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "AddressID",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Addr. no.",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VALUE_TEXT",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Title",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "VALUE_TEXT1",
                                "type": "Edm.String",
                                "maxLength": "60",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Academic Title",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "FirstName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "First Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "LastName",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Last Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "PersonFullName",
                                "type": "Edm.String",
                                "maxLength": "80",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Full Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "NAME1",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Company",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "DEPARTMENT",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Department",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "FUNCTION",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Function",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "EmailAddress",
                                "type": "Edm.String",
                                "maxLength": "241",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "E-Mail",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "PROFESSION",
                                "type": "Edm.String",
                                "maxLength": "40",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Profession",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "InternationalPhoneNumber",
                                "type": "Edm.String",
                                "maxLength": "30",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Telephone",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "TELNR_LONG1",
                                "type": "Edm.String",
                                "maxLength": "30",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Mobile",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "BUILDING",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Building",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "FLOOR",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Floor",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ROOMNUMBER",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Room No.",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "InternationalFaxNumber",
                                "type": "Edm.String",
                                "maxLength": "30",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Fax number",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "IH_MAIL",
                                "type": "Edm.String",
                                "maxLength": "10",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Int. mail",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "navigationProperty": [
                            {
                                "name": "USER_HToCE",
                                "relationship": "CB_SALES_ORDER_SRV.USER_HToCE",
                                "fromRole": "FromRole_USER_HToCE",
                                "toRole": "ToRole_USER_HToCE"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "label",
                                "value": "User",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "USER_HCE",
                        "hasStream": "true",
                        "key": {
                            "propertyRef": [
                                {
                                    "name": "User"
                                },
                                {
                                    "name": "Id"
                                }
                            ]
                        },
                        "property": [
                            {
                                "name": "User",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "12",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "User Name",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "ContentType",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "256",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Text",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Text",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "255",
                                "FC_TargetPath": "SyndicationTitle",
                                "FC_KeepInContent": "true",
                                "extensions": [
                                    {
                                        "name": "label",
                                        "value": "Text",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Id",
                                "type": "Edm.String",
                                "nullable": "false",
                                "maxLength": "1000",
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "sortable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "filterable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "extensions": [
                            {
                                "name": "semantics",
                                "value": "callableEntities",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    }
                ],
                "association": [
                    {
                        "name": "CustomerToCE",
                        "end": [
                            {
                                "type": "CB_SALES_ORDER_SRV.Customer",
                                "multiplicity": "1",
                                "role": "FromRole_CustomerToCE"
                            },
                            {
                                "type": "CB_SALES_ORDER_SRV.CustomerCE",
                                "multiplicity": "*",
                                "role": "ToRole_CustomerToCE"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "label",
                                "value": "Related Applications",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "SalesContractToCE",
                        "end": [
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesContract",
                                "multiplicity": "1",
                                "role": "FromRole_SalesContractToCE"
                            },
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesContractCE",
                                "multiplicity": "*",
                                "role": "ToRole_SalesContractToCE"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "label",
                                "value": "Related Applications",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "OutboundDeliveryToCE",
                        "end": [
                            {
                                "type": "CB_SALES_ORDER_SRV.OutboundDelivery",
                                "multiplicity": "1",
                                "role": "FromRole_OutboundDeliveryToCE"
                            },
                            {
                                "type": "CB_SALES_ORDER_SRV.OutboundDeliveryCE",
                                "multiplicity": "*",
                                "role": "ToRole_OutboundDeliveryToCE"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "label",
                                "value": "Related Applications",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "SalesOrderToCE",
                        "end": [
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesOrder",
                                "multiplicity": "1",
                                "role": "FromRole_SalesOrderToCE"
                            },
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesOrderCE",
                                "multiplicity": "*",
                                "role": "ToRole_SalesOrderToCE"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "label",
                                "value": "Related Applications",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "SNAV_SO_VBAP",
                        "end": [
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesOrder",
                                "multiplicity": "1",
                                "role": "FromRole_SNAV_SO_VBAP"
                            },
                            {
                                "type": "CB_SALES_ORDER_SRV.SD_VBAP",
                                "multiplicity": "*",
                                "role": "ToRole_SNAV_SO_VBAP"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "label",
                                "value": "Related Applications",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "CCUSTOMER_AG",
                        "end": [
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesOrder",
                                "multiplicity": "1",
                                "role": "FromRole_CCUSTOMER_AG"
                            },
                            {
                                "type": "CB_SALES_ORDER_SRV.Customer",
                                "multiplicity": "*",
                                "role": "ToRole_CCUSTOMER_AG"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "label",
                                "value": "Related Applications",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "CCUSTOMER_WE",
                        "end": [
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesOrder",
                                "multiplicity": "1",
                                "role": "FromRole_CCUSTOMER_WE"
                            },
                            {
                                "type": "CB_SALES_ORDER_SRV.Customer",
                                "multiplicity": "*",
                                "role": "ToRole_CCUSTOMER_WE"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "label",
                                "value": "Related Applications",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "CUSER_ERNAM",
                        "end": [
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesOrder",
                                "multiplicity": "1",
                                "role": "FromRole_CUSER_ERNAM"
                            },
                            {
                                "type": "CB_SALES_ORDER_SRV.USER_H",
                                "multiplicity": "*",
                                "role": "ToRole_CUSER_ERNAM"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "label",
                                "value": "Related Applications",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "CPREVIOUS_QUOTATION",
                        "end": [
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesOrder",
                                "multiplicity": "1",
                                "role": "FromRole_CPREVIOUS_QUOTATION"
                            },
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesQuotation",
                                "multiplicity": "*",
                                "role": "ToRole_CPREVIOUS_QUOTATION"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "label",
                                "value": "Related Applications",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "CPREVIOUS_CONTRACT",
                        "end": [
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesOrder",
                                "multiplicity": "1",
                                "role": "FromRole_CPREVIOUS_CONTRACT"
                            },
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesContract",
                                "multiplicity": "*",
                                "role": "ToRole_CPREVIOUS_CONTRACT"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "label",
                                "value": "Related Applications",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "CSUBS_OUTBOUND_DELIVERY",
                        "end": [
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesOrder",
                                "multiplicity": "1",
                                "role": "FromRole_CSUBS_OUTBOUND_DELIVERY"
                            },
                            {
                                "type": "CB_SALES_ORDER_SRV.OutboundDelivery",
                                "multiplicity": "*",
                                "role": "ToRole_CSUBS_OUTBOUND_DELIVERY"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "label",
                                "value": "Related Applications",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "SalesQuotationToCE",
                        "end": [
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesQuotation",
                                "multiplicity": "1",
                                "role": "FromRole_SalesQuotationToCE"
                            },
                            {
                                "type": "CB_SALES_ORDER_SRV.SalesQuotationCE",
                                "multiplicity": "*",
                                "role": "ToRole_SalesQuotationToCE"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "label",
                                "value": "Related Applications",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    },
                    {
                        "name": "USER_HToCE",
                        "end": [
                            {
                                "type": "CB_SALES_ORDER_SRV.USER_H",
                                "multiplicity": "1",
                                "role": "FromRole_USER_HToCE"
                            },
                            {
                                "type": "CB_SALES_ORDER_SRV.USER_HCE",
                                "multiplicity": "*",
                                "role": "ToRole_USER_HToCE"
                            }
                        ],
                        "extensions": [
                            {
                                "name": "content-version",
                                "value": "1",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            },
                            {
                                "name": "label",
                                "value": "Related Applications",
                                "namespace": "http://www.sap.com/Protocols/SAPData"
                            }
                        ]
                    }
                ],
                "entityContainer": [
                    {
                        "name": "CB_SALES_ORDER_SRV",
                        "isDefaultEntityContainer": "true",
                        "entitySet": [
                            {
                                "name": "CustomerCE",
                                "entityType": "CB_SALES_ORDER_SRV.CustomerCE",
                                "extensions": [
                                    {
                                        "name": "pageable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "addressable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OutboundDeliverys",
                                "entityType": "CB_SALES_ORDER_SRV.OutboundDelivery",
                                "extensions": [
                                    {
                                        "name": "searchable",
                                        "value": "true",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OutboundDeliveryCE",
                                "entityType": "CB_SALES_ORDER_SRV.OutboundDeliveryCE",
                                "extensions": [
                                    {
                                        "name": "pageable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "addressable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SD_VBAPs",
                                "entityType": "CB_SALES_ORDER_SRV.SD_VBAP",
                                "extensions": [
                                    {
                                        "name": "searchable",
                                        "value": "true",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesContracts",
                                "entityType": "CB_SALES_ORDER_SRV.SalesContract",
                                "extensions": [
                                    {
                                        "name": "searchable",
                                        "value": "true",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesContractCE",
                                "entityType": "CB_SALES_ORDER_SRV.SalesContractCE",
                                "extensions": [
                                    {
                                        "name": "pageable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "addressable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOrders",
                                "entityType": "CB_SALES_ORDER_SRV.SalesOrder",
                                "extensions": [
                                    {
                                        "name": "searchable",
                                        "value": "true",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOrderCE",
                                "entityType": "CB_SALES_ORDER_SRV.SalesOrderCE",
                                "extensions": [
                                    {
                                        "name": "pageable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "addressable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesQuotations",
                                "entityType": "CB_SALES_ORDER_SRV.SalesQuotation",
                                "extensions": [
                                    {
                                        "name": "searchable",
                                        "value": "true",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesQuotationCE",
                                "entityType": "CB_SALES_ORDER_SRV.SalesQuotationCE",
                                "extensions": [
                                    {
                                        "name": "pageable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "addressable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "USER_Hs",
                                "entityType": "CB_SALES_ORDER_SRV.USER_H",
                                "extensions": [
                                    {
                                        "name": "searchable",
                                        "value": "true",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "USER_HCE",
                                "entityType": "CB_SALES_ORDER_SRV.USER_HCE",
                                "extensions": [
                                    {
                                        "name": "pageable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "addressable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "Customers",
                                "entityType": "CB_SALES_ORDER_SRV.Customer",
                                "extensions": [
                                    {
                                        "name": "searchable",
                                        "value": "true",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ],
                        "associationSet": [
                            {
                                "name": "SalesContractToCE_AssocSet",
                                "association": "CB_SALES_ORDER_SRV.SalesContractToCE",
                                "end": [
                                    {
                                        "entitySet": "SalesContracts",
                                        "role": "FromRole_SalesContractToCE"
                                    },
                                    {
                                        "entitySet": "SalesContractCE",
                                        "role": "ToRole_SalesContractToCE"
                                    }
                                ],
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "deletable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "OutboundDeliveryToCE_AssocSet",
                                "association": "CB_SALES_ORDER_SRV.OutboundDeliveryToCE",
                                "end": [
                                    {
                                        "entitySet": "OutboundDeliverys",
                                        "role": "FromRole_OutboundDeliveryToCE"
                                    },
                                    {
                                        "entitySet": "OutboundDeliveryCE",
                                        "role": "ToRole_OutboundDeliveryToCE"
                                    }
                                ],
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "deletable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesQuotationToCE_AssocSet",
                                "association": "CB_SALES_ORDER_SRV.SalesQuotationToCE",
                                "end": [
                                    {
                                        "entitySet": "SalesQuotations",
                                        "role": "FromRole_SalesQuotationToCE"
                                    },
                                    {
                                        "entitySet": "SalesQuotationCE",
                                        "role": "ToRole_SalesQuotationToCE"
                                    }
                                ],
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "deletable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "USER_HToCE_AssocSet",
                                "association": "CB_SALES_ORDER_SRV.USER_HToCE",
                                "end": [
                                    {
                                        "entitySet": "USER_Hs",
                                        "role": "FromRole_USER_HToCE"
                                    },
                                    {
                                        "entitySet": "USER_HCE",
                                        "role": "ToRole_USER_HToCE"
                                    }
                                ],
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "deletable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SNAV_SO_VBAP_AssocSet",
                                "association": "CB_SALES_ORDER_SRV.SNAV_SO_VBAP",
                                "end": [
                                    {
                                        "entitySet": "SalesOrders",
                                        "role": "FromRole_SNAV_SO_VBAP"
                                    },
                                    {
                                        "entitySet": "SD_VBAPs",
                                        "role": "ToRole_SNAV_SO_VBAP"
                                    }
                                ],
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "deletable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CCUSTOMER_WE_AssocSet",
                                "association": "CB_SALES_ORDER_SRV.CCUSTOMER_WE",
                                "end": [
                                    {
                                        "entitySet": "SalesOrders",
                                        "role": "FromRole_CCUSTOMER_WE"
                                    },
                                    {
                                        "entitySet": "Customers",
                                        "role": "ToRole_CCUSTOMER_WE"
                                    }
                                ],
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "deletable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CPREVIOUS_QUOTATION_AssocSet",
                                "association": "CB_SALES_ORDER_SRV.CPREVIOUS_QUOTATION",
                                "end": [
                                    {
                                        "entitySet": "SalesOrders",
                                        "role": "FromRole_CPREVIOUS_QUOTATION"
                                    },
                                    {
                                        "entitySet": "SalesQuotations",
                                        "role": "ToRole_CPREVIOUS_QUOTATION"
                                    }
                                ],
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "deletable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CPREVIOUS_CONTRACT_AssocSet",
                                "association": "CB_SALES_ORDER_SRV.CPREVIOUS_CONTRACT",
                                "end": [
                                    {
                                        "entitySet": "SalesOrders",
                                        "role": "FromRole_CPREVIOUS_CONTRACT"
                                    },
                                    {
                                        "entitySet": "SalesContracts",
                                        "role": "ToRole_CPREVIOUS_CONTRACT"
                                    }
                                ],
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "deletable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CustomerToCE_AssocSet",
                                "association": "CB_SALES_ORDER_SRV.CustomerToCE",
                                "end": [
                                    {
                                        "entitySet": "Customers",
                                        "role": "FromRole_CustomerToCE"
                                    },
                                    {
                                        "entitySet": "CustomerCE",
                                        "role": "ToRole_CustomerToCE"
                                    }
                                ],
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "deletable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CCUSTOMER_AG_AssocSet",
                                "association": "CB_SALES_ORDER_SRV.CCUSTOMER_AG",
                                "end": [
                                    {
                                        "entitySet": "SalesOrders",
                                        "role": "FromRole_CCUSTOMER_AG"
                                    },
                                    {
                                        "entitySet": "Customers",
                                        "role": "ToRole_CCUSTOMER_AG"
                                    }
                                ],
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "deletable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "SalesOrderToCE_AssocSet",
                                "association": "CB_SALES_ORDER_SRV.SalesOrderToCE",
                                "end": [
                                    {
                                        "entitySet": "SalesOrders",
                                        "role": "FromRole_SalesOrderToCE"
                                    },
                                    {
                                        "entitySet": "SalesOrderCE",
                                        "role": "ToRole_SalesOrderToCE"
                                    }
                                ],
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "deletable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CSUBS_OUTBOUND_DELIVERY_AssocSet",
                                "association": "CB_SALES_ORDER_SRV.CSUBS_OUTBOUND_DELIVERY",
                                "end": [
                                    {
                                        "entitySet": "SalesOrders",
                                        "role": "FromRole_CSUBS_OUTBOUND_DELIVERY"
                                    },
                                    {
                                        "entitySet": "OutboundDeliverys",
                                        "role": "ToRole_CSUBS_OUTBOUND_DELIVERY"
                                    }
                                ],
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "deletable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            },
                            {
                                "name": "CUSER_ERNAM_AssocSet",
                                "association": "CB_SALES_ORDER_SRV.CUSER_ERNAM",
                                "end": [
                                    {
                                        "entitySet": "SalesOrders",
                                        "role": "FromRole_CUSER_ERNAM"
                                    },
                                    {
                                        "entitySet": "USER_Hs",
                                        "role": "ToRole_CUSER_ERNAM"
                                    }
                                ],
                                "extensions": [
                                    {
                                        "name": "creatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "updatable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "deletable",
                                        "value": "false",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    },
                                    {
                                        "name": "content-version",
                                        "value": "1",
                                        "namespace": "http://www.sap.com/Protocols/SAPData"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "extensions": [
                    {
                        "name": "lang",
                        "value": "en",
                        "namespace": "http://www.w3.org/XML/1998/namespace"
                    },
                    {
                        "name": "link",
                        "value": null,
                        "attributes": [
                            {
                                "name": "rel",
                                "value": "self",
                                "namespace": null
                            },
                            {
                                "name": "href",
                                "value": "https://wdfn00298757a.dhcp.wdf.sap.corp:8443/e17-003/sap/opu/odata/sap/CB_SALES_ORDER_SRV/$metadata",
                                "namespace": null
                            }
                        ],
                        "children": [],
                        "namespace": "http://www.w3.org/2005/Atom"
                    },
                    {
                        "name": "link",
                        "value": null,
                        "attributes": [
                            {
                                "name": "rel",
                                "value": "latest-version",
                                "namespace": null
                            },
                            {
                                "name": "href",
                                "value": "https://wdfn00298757a.dhcp.wdf.sap.corp:8443/e17-003/sap/opu/odata/sap/CB_SALES_ORDER_SRV/$metadata",
                                "namespace": null
                            }
                        ],
                        "children": [],
                        "namespace": "http://www.w3.org/2005/Atom"
                    }
                ]
            }
        ]
    }
};

// Test data of existing Mapping.js at 20137.08.11
var testResultData =
    {
        "CB_OUTBOUND_DELIVERY_SRV.OutboundDeliveryCE": {
            "UI.IsCallableEntity": {}
        },
        "CB_SALES_CONTRACT_SRV.SalesContractCE": {
            "UI.IsCallableEntity": {}
        },
        "CB_SALES_ORDER_SRV.Customer": {
            "UI.Badge": {
                "Headline": {
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": "Customer"
                    }
                },
                "MainInfo": {
                    "EdmType": "Edm.String",
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "AddressPhoneNumber"
                    }
                },
                "RecordType": null,
                "Title": {
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "DummyRole"
                    }
                },
                "TypeImageUrl": {
                    "String": "PathToGenericSalesOrderIcon"
                }
            },
            "UI.Facets": [
                {
                    "FacetID": {
                        "String": "1 "
                    },
                    "FacetLabel": {
                        "String": "Overview "
                    },
                    "Facets": [
                        {
                            "FacetID": {
                                "String": "100 "
                            },
                            "FacetLabel": {
                                "String": "General "
                            },
                            "Facets": [
                                {
                                    "FacetID": {
                                        "String": "1000 "
                                    },
                                    "FacetLabel": {
                                        "String": "Customer"
                                    },
                                    "RecordType": "UI.ReferenceFacet",
                                    "UseTerm": {
                                        "String": "UI.Identification"
                                    }
                                }
                            ],
                            "RecordType": "UI.CollectionFacet"
                        }
                    ],
                    "RecordType": "UI.CollectionFacet"
                }
            ],
            "UI.HeaderInfo": {
                "RecordType": null,
                "Title": {
                    "RecordType": null,
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "CustomerName"
                                }
                            ]
                        }
                    }
                },
                "TypeName": {
                    "String": "Customer"
                },
                "TypeNamePlural": {
                    "String": "Customer"
                }
            },
            "UI.Identification": [
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "Customer"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "CustomerName"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "AddressPhoneNumber"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "PhoneNumberExtension"
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "EmailAddress"
                    }
                }
            ],
            "UI.LineItem": [
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "Customer"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "CustomerName"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "AddressPhoneNumber"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "PhoneNumberExtension"
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "EmailAddress"
                    }
                }
            ]
        },
        "CB_SALES_ORDER_SRV.OutboundDelivery": {
            "CB_SALES_ORDER_SRVAnnotation.OutboundDelivery": {
                "Url": {
                    "Apply": {
                        "Name": "odata.fillUriTemplate",
                        "Parameters": [
                            {
                                "Type": "String",
                                "Value": "/sap/opu/odata/sap/CB_OUTBOUND_DELIVERY_SRV/OutboundDeliverys(DeliveryDocument='{ID3}')"
                            },
                            {
                                "Name": "ID3",
                                "Value": {
                                    "Apply": {
                                        "Name": "odata.UriEncode",
                                        "Parameters": [
                                            {
                                                "Type": "Path",
                                                "Value": "DeliveryDocument"
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                }
            },
            "UI.Badge": {
                "Headline": {
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": "Outbound Delivery"
                    }
                },
                "MainInfo": {
                    "EdmType": "Edm.String",
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "LFART_TEXT"
                    }
                },
                "RecordType": null,
                "Title": {
                    "EdmType": "Edm.String",
                    "NavigationPath": {
                        "NavigationPropertyPath": "@CB_SALES_ORDER_SRVAnnotation.OutboundDelivery"
                    },
                    "RecordType": "UI.DataFieldWithNavigationPath",
                    "Value": {
                        "Path": "DeliveryDocument"
                    }
                },
                "TypeImageUrl": {
                    "String": "/sap/public/BusinessSuite/CBESH_ICONS/OutboundDelivery/grey_32.png"
                }
            },
            "UI.Facets": [
                {
                    "FacetID": {
                        "String": "1 "
                    },
                    "FacetLabel": {
                        "String": "Overview "
                    },
                    "Facets": [
                        {
                            "FacetID": {
                                "String": "100 "
                            },
                            "FacetLabel": {
                                "String": "General "
                            },
                            "Facets": [
                                {
                                    "FacetID": {
                                        "String": "1000 "
                                    },
                                    "FacetLabel": {
                                        "String": "Outbound Delivery"
                                    },
                                    "RecordType": "UI.ReferenceFacet",
                                    "UseTerm": {
                                        "String": "UI.Identification"
                                    }
                                }
                            ],
                            "RecordType": "UI.CollectionFacet"
                        }
                    ],
                    "RecordType": "UI.CollectionFacet"
                }
            ],
            "UI.HeaderInfo": {
                "Description": {
                    "EdmType": "Edm.String",
                    "RecordType": null,
                    "Value": {
                        "Path": "LFART_TEXT"
                    }
                },
                "RecordType": null,
                "Title": {
                    "EdmType": "Edm.String",
                    "NavigationPath": {
                        "NavigationPropertyPath": "@CB_SALES_ORDER_SRVAnnotation.OutboundDelivery"
                    },
                    "RecordType": "UI.DataFieldWithNavigationPath",
                    "Value": {
                        "Path": "DeliveryDocument"
                    }
                },
                "TypeImageUrl": {
                    "String": "/sap/public/BusinessSuite/CBESH_ICONS/OutboundDelivery/grey_32.png"
                },
                "TypeName": {
                    "String": "Outbound Delivery"
                },
                "TypeNamePlural": {
                    "String": "Outbound Delivery"
                }
            },
            "UI.Identification": [
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": ""
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Ship-To Party "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "NAME1_WE"
                                },
                                {
                                    "Type": "String",
                                    "Value": " "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "NAME2_WE"
                                }
                            ]
                        }
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Sold-To Party "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "NAME1_AG"
                                },
                                {
                                    "Type": "String",
                                    "Value": " "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "NAME2_AG"
                                }
                            ]
                        }
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": null,
                    "Value": {
                        "Path": "GBSTK_DESCRIPTION"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": null,
                    "Value": {
                        "Path": "FKSTK_DESCRIPTION"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": null,
                    "Value": {
                        "Path": "WBSTK_DESCRIPTION"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": null,
                    "Value": {
                        "Path": "TRSTA_DESCRIPTION"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "LFDAT"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "WADAT"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "LDDAT"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "KODAT"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "TDDAT"
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": null,
                    "Value": {
                        "Path": "TotalGrossWeight"
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": null,
                    "Value": {
                        "Path": "TotalNetWeight"
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": null,
                    "Value": {
                        "Path": "VOLUM"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "CreationDate"
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Created By "
                    },
                    "RecordType": "UI.DataFiel",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "USER_NAME_CREATE"
                                }
                            ]
                        }
                    }
                }
            ],
            "UI.LineItem": [
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.High"
                    },
                    "NavigationPath": {
                        "NavigationPropertyPath": "@CB_SALES_ORDER_SRVAnnotation.OutboundDelivery"
                    },
                    "RecordType": "UI.DataFieldWithNavigationPath",
                    "Value": {
                        "Path": "DeliveryDocument"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.High"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "LFART_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "LFDAT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "GBSTK_DESCRIPTION"
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": null,
                    "Value": {
                        "Path": "TotalGrossWeight"
                    }
                }
            ]
        },
        "CB_SALES_ORDER_SRV.SD_VBAP": {
            "UI.Badge": {
                "Headline": {
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": "Items"
                    }
                },
                "MainInfo": {
                    "EdmType": "Edm.String",
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "MaterialName"
                    }
                },
                "RecordType": null,
                "Title": {
                    "EdmType": "Edm.String",
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "Material"
                    }
                },
                "TypeImageUrl": {
                    "String": "/sap/public/BusinessSuite/CBESH_ICONS/Material/grey_32.png"
                }
            },
            "UI.Facets": [
                {
                    "FacetID": {
                        "String": "1 "
                    },
                    "FacetLabel": {
                        "String": "Overview "
                    },
                    "Facets": [
                        {
                            "FacetID": {
                                "String": "100 "
                            },
                            "FacetLabel": {
                                "String": "General "
                            },
                            "Facets": [
                                {
                                    "FacetID": {
                                        "String": "1000 "
                                    },
                                    "FacetLabel": {
                                        "String": "Items"
                                    },
                                    "RecordType": "UI.ReferenceFacet",
                                    "UseTerm": {
                                        "String": "UI.Identification"
                                    }
                                }
                            ],
                            "RecordType": "UI.CollectionFacet"
                        }
                    ],
                    "RecordType": "UI.CollectionFacet"
                }
            ],
            "UI.HeaderInfo": {
                "Description": {
                    "EdmType": "Edm.String",
                    "RecordType": null,
                    "Value": {
                        "Path": "MaterialName"
                    }
                },
                "ImageUrl": {
                    "String": "/sap/public/BusinessSuite/CBESH_ICONS/Material/grey_32.png"
                },
                "RecordType": null,
                "Title": {
                    "EdmType": "Edm.String",
                    "RecordType": null,
                    "Value": {
                        "Path": "Material"
                    }
                },
                "TypeName": {
                    "String": "Items"
                },
                "TypeNamePlural": {
                    "String": "Items"
                }
            },
            "UI.Identification": [
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": ""
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.High"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesOrderItem"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "MATKL_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "MaterialByCustomer"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "PSTYV_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "WERKS_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "GBSTA_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "LFSTA_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "NetPriceAmount"
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "OrderQuantity"
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "NetAmount"
                    }
                }
            ],
            "UI.LineItem": [
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.High"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesOrderItem"
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.High"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "Material"
                                },
                                {
                                    "Type": "String",
                                    "Value": " - "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "MaterialName"
                                }
                            ]
                        }
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "NetPriceAmount"
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "OrderQuantity"
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "NetAmount"
                    }
                }
            ]
        },
        "CB_SALES_ORDER_SRV.SalesContract": {
            "CB_SALES_ORDER_SRVAnnotation.SalesContract": {
                "Url": {
                    "Apply": {
                        "Name": "odata.fillUriTemplate",
                        "Parameters": [
                            {
                                "Type": "String",
                                "Value": "/sap/opu/odata/sap/CB_SALES_CONTRACT_SRV/SalesContracts(SalesContract='{ID2}')"
                            },
                            {
                                "Name": "ID2",
                                "Value": {
                                    "Apply": {
                                        "Name": "odata.UriEncode",
                                        "Parameters": [
                                            {
                                                "Type": "Path",
                                                "Value": "SalesContract"
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                }
            },
            "UI.Badge": {
                "Headline": {
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": "Sales Contract"
                    }
                },
                "MainInfo": {
                    "EdmType": "Edm.String",
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "VBELN_DESCR"
                    }
                },
                "RecordType": null,
                "Title": {
                    "EdmType": "Edm.String",
                    "NavigationPath": {
                        "NavigationPropertyPath": "@CB_SALES_ORDER_SRVAnnotation.SalesContract"
                    },
                    "RecordType": "UI.DataFieldWithNavigationPath",
                    "Value": {
                        "Path": "SalesContract"
                    }
                },
                "TypeImageUrl": {
                    "String": "/sap/public/BusinessSuite/CBESH_ICONS/SalesContract/grey_32.png"
                }
            },
            "UI.Facets": [
                {
                    "FacetID": {
                        "String": "1 "
                    },
                    "FacetLabel": {
                        "String": "Overview "
                    },
                    "Facets": [
                        {
                            "FacetID": {
                                "String": "100 "
                            },
                            "FacetLabel": {
                                "String": "General "
                            },
                            "Facets": [
                                {
                                    "FacetID": {
                                        "String": "1000 "
                                    },
                                    "FacetLabel": {
                                        "String": "Sales Contract"
                                    },
                                    "RecordType": "UI.ReferenceFacet",
                                    "UseTerm": {
                                        "String": "UI.Identification"
                                    }
                                }
                            ],
                            "RecordType": "UI.CollectionFacet"
                        }
                    ],
                    "RecordType": "UI.CollectionFacet"
                }
            ],
            "UI.HeaderInfo": {
                "Description": {
                    "EdmType": "Edm.String",
                    "RecordType": null,
                    "Value": {
                        "Path": "VBELN_DESCR"
                    }
                },
                "RecordType": null,
                "Title": {
                    "EdmType": "Edm.String",
                    "NavigationPath": {
                        "NavigationPropertyPath": "@CB_SALES_ORDER_SRVAnnotation.SalesContract"
                    },
                    "RecordType": "UI.DataFieldWithNavigationPath",
                    "Value": {
                        "Path": "SalesContract"
                    }
                },
                "TypeImageUrl": {
                    "String": "/sap/public/BusinessSuite/CBESH_ICONS/SalesContract/grey_32.png"
                },
                "TypeName": {
                    "String": "Sales Contract"
                },
                "TypeNamePlural": {
                    "String": "Sales Contract"
                }
            },
            "UI.Identification": [
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": ""
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Sold-To Party "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "SoldToPartyName"
                                },
                                {
                                    "Type": "String",
                                    "Value": " "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "SoldToPartyAdditionalName"
                                }
                            ]
                        }
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Ship-To Party "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "ShipToPartyName"
                                },
                                {
                                    "Type": "String",
                                    "Value": " "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "ShipToPartyAdditionalName"
                                }
                            ]
                        }
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "GBSTK_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "RFSTK_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesContractValidityStartDate"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesContractValidityEndDate"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesContractDate"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "PurchaseOrderByCustomer"
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "NetAmount"
                    }
                },
                {
                    "Label": {
                        "String": "Sales Area "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "VKORG_TEXT"
                                },
                                {
                                    "Type": "String",
                                    "Value": ", "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "VTWEG_TEXT"
                                },
                                {
                                    "Type": "String",
                                    "Value": ", "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "SPART_TEXT"
                                }
                            ]
                        }
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": ""
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Sales Group "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "VKGRP_TEXT"
                                }
                            ]
                        }
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Sales Office "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "VKBUR_TEXT"
                                }
                            ]
                        }
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "CreationDate"
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Created By "
                    },
                    "RecordType": "UI.DataFiel",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "AcademicTitleName"
                                },
                                {
                                    "Type": "String",
                                    "Value": " "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "CreatedByUserName"
                                }
                            ]
                        }
                    }
                }
            ],
            "UI.LineItem": [
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.High"
                    },
                    "NavigationPath": {
                        "NavigationPropertyPath": "@CB_SALES_ORDER_SRVAnnotation.SalesContract"
                    },
                    "RecordType": "UI.DataFieldWithNavigationPath",
                    "Value": {
                        "Path": "SalesContract"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.High"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "VBELN_DESCR"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesContractValidityStartDate"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesContractValidityEndDate"
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.High"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "NetAmount"
                    }
                }
            ]
        },
        "CB_SALES_ORDER_SRV.SalesOrder": {
            "UI.Badge": {
                "Headline": {
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": "Sales Order"
                    }
                },
                "MainInfo": {
                    "EdmType": "Edm.String",
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "AUART_TEXT"
                    }
                },
                "RecordType": null,
                "Title": {
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "DummyRole"
                    }
                },
                "TypeImageUrl": {
                    "String": "PathToGenericSalesOrderIcon"
                }
            },
            "UI.Facets": [
                {
                    "FacetID": {
                        "String": "1 "
                    },
                    "FacetLabel": {
                        "String": "Overview "
                    },
                    "Facets": [
                        {
                            "FacetID": {
                                "String": "100 "
                            },
                            "FacetLabel": {
                                "String": "General "
                            },
                            "Facets": [
                                {
                                    "FacetID": {
                                        "String": "1000 "
                                    },
                                    "FacetLabel": {
                                        "String": "General "
                                    },
                                    "RecordType": "UI.ReferenceFacet",
                                    "UseTerm": {
                                        "String": "UI.Identification"
                                    }
                                },
                                {
                                    "FacetID": {
                                        "String": "1001 "
                                    },
                                    "FacetLabel": {
                                        "String": "Status "
                                    },
                                    "RecordType": "UI.ReferenceFacet",
                                    "UseTerm": {
                                        "String": "UI.StatusInfo"
                                    }
                                }
                            ],
                            "RecordType": "UI.CollectionFacet"
                        },
                        {
                            "FacetID": {
                                "String": "101 "
                            },
                            "FacetLabel": {
                                "String": "Items"
                            },
                            "NavigationPath": {
                                "NavigationPropertyPath": "SNAV_SO_VBAP"
                            },
                            "RecordType": "UI.ReferenceFacet",
                            "UseTerm": {
                                "String": "UI.LineItem"
                            }
                        },
                        {
                            "FacetID": {
                                "String": "102 "
                            },
                            "FacetLabel": {
                                "String": "Sales Quotation"
                            },
                            "NavigationPath": {
                                "NavigationPropertyPath": "CPREVIOUS_QUOTATION"
                            },
                            "RecordType": "UI.ReferenceFacet",
                            "UseTerm": {
                                "String": "UI.Badge"
                            }
                        },
                        {
                            "FacetID": {
                                "String": "103 "
                            },
                            "FacetLabel": {
                                "String": "Sales Contract"
                            },
                            "NavigationPath": {
                                "NavigationPropertyPath": "CPREVIOUS_CONTRACT"
                            },
                            "RecordType": "UI.ReferenceFacet",
                            "UseTerm": {
                                "String": "UI.Badge"
                            }
                        },
                        {
                            "FacetID": {
                                "String": "104 "
                            },
                            "FacetLabel": {
                                "String": "Outbound Delivery"
                            },
                            "NavigationPath": {
                                "NavigationPropertyPath": "CSUBS_OUTBOUND_DELIVERY"
                            },
                            "RecordType": "UI.ReferenceFacet",
                            "UseTerm": {
                                "String": "UI.Badge"
                            }
                        }
                    ],
                    "RecordType": "UI.CollectionFacet"
                },
                {
                    "FacetID": {
                        "String": "2 "
                    },
                    "FacetLabel": {
                        "String": "Items"
                    },
                    "NavigationPath": {
                        "NavigationPropertyPath": "SNAV_SO_VBAP"
                    },
                    "RecordType": "UI.ReferenceFacet",
                    "UseTerm": {
                        "String": "UI.LineItem"
                    }
                },
                {
                    "FacetID": {
                        "String": "3 "
                    },
                    "FacetLabel": {
                        "String": "Sales Quotation"
                    },
                    "NavigationPath": {
                        "NavigationPropertyPath": "CPREVIOUS_QUOTATION"
                    },
                    "RecordType": "UI.ReferenceFacet",
                    "UseTerm": {
                        "String": "UI.LineItem"
                    }
                },
                {
                    "FacetID": {
                        "String": "4 "
                    },
                    "FacetLabel": {
                        "String": "Sales Contract"
                    },
                    "NavigationPath": {
                        "NavigationPropertyPath": "CPREVIOUS_CONTRACT"
                    },
                    "RecordType": "UI.ReferenceFacet",
                    "UseTerm": {
                        "String": "UI.LineItem"
                    }
                },
                {
                    "FacetID": {
                        "String": "5 "
                    },
                    "FacetLabel": {
                        "String": "Outbound Delivery"
                    },
                    "NavigationPath": {
                        "NavigationPropertyPath": "CSUBS_OUTBOUND_DELIVERY"
                    },
                    "RecordType": "UI.ReferenceFacet",
                    "UseTerm": {
                        "String": "UI.LineItem"
                    }
                }
            ],
            "UI.HeaderInfo": {
                "Description": {
                    "EdmType": "Edm.String",
                    "RecordType": null,
                    "Value": {
                        "Path": "AUART_TEXT"
                    }
                },
                "ImageUrl": {
                    "String": "/sap/public/BusinessSuite/CBESH_ICONS/SalesOrder/grey_64.png"
                },
                "RecordType": null,
                "Title": {
                    "EdmType": "Edm.String",
                    "RecordType": null,
                    "Value": {
                        "Path": "SalesOrder"
                    }
                },
                "TypeName": {
                    "String": "Sales Order"
                },
                "TypeNamePlural": {
                    "String": "Sales Order"
                }
            },
            "UI.Identification": [
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Sold-To Party "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "SoldToPartyName"
                                },
                                {
                                    "Type": "String",
                                    "Value": " "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "SoldToPartyAdditionalName"
                                }
                            ]
                        }
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Ship-To Party "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "ShipToPartyName"
                                },
                                {
                                    "Type": "String",
                                    "Value": " "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "ShipToPartyAdditionalName"
                                }
                            ]
                        }
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": ""
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesOrderDate"
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": ""
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "PurchaseOrderByCustomer"
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": ""
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "NetAmount"
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": ""
                    }
                },
                {
                    "Label": {
                        "String": "Sales Area "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "VKORG_TEXT"
                                },
                                {
                                    "Type": "String",
                                    "Value": ", "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "VTWEG_TEXT"
                                },
                                {
                                    "Type": "String",
                                    "Value": ", "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "SPART_TEXT"
                                }
                            ]
                        }
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "VKGRP_TEXT"
                                }
                            ]
                        }
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Sales Office "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "VKBUR_TEXT"
                                }
                            ]
                        }
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": ""
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "RequestedDeliveryDate"
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": ""
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "CreationDate"
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Created By "
                    },
                    "RecordType": "UI.DataFiel",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "AcademicTitleName"
                                },
                                {
                                    "Type": "String",
                                    "Value": " "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "CreatedByUserName"
                                }
                            ]
                        }
                    }
                }
            ],
            "UI.LineItem": {},
            "UI.StatusInfo": [
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "GBSTK_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "LFSTK_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "CMGST_TEXT"
                    }
                }
            ]
        },
        "CB_SALES_ORDER_SRV.SalesQuotation": {
            "CB_SALES_ORDER_SRVAnnotation.SalesQuotation": {
                "Url": {
                    "Apply": {
                        "Name": "odata.fillUriTemplate",
                        "Parameters": [
                            {
                                "Type": "String",
                                "Value": "/sap/opu/odata/sap/CB_SALES_QUOTATION_SRV/SalesQuotations(SalesQuotation='{ID1}')"
                            },
                            {
                                "Name": "ID1",
                                "Value": {
                                    "Apply": {
                                        "Name": "odata.UriEncode",
                                        "Parameters": [
                                            {
                                                "Type": "Path",
                                                "Value": "SalesQuotation"
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                }
            },
            "UI.Badge": {
                "Headline": {
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": "Sales Quotation"
                    }
                },
                "MainInfo": {
                    "EdmType": "Edm.String",
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "VBELN_DESCR"
                    }
                },
                "RecordType": null,
                "Title": {
                    "EdmType": "Edm.String",
                    "NavigationPath": {
                        "NavigationPropertyPath": "@CB_SALES_ORDER_SRVAnnotation.SalesQuotation"
                    },
                    "RecordType": "UI.DataFieldWithNavigationPath",
                    "Value": {
                        "Path": "SalesQuotation"
                    }
                },
                "TypeImageUrl": {
                    "String": "/sap/public/BusinessSuite/CBESH_ICONS/SalesQuotation/grey_32.png"
                }
            },
            "UI.Facets": [
                {
                    "FacetID": {
                        "String": "1 "
                    },
                    "FacetLabel": {
                        "String": "Overview "
                    },
                    "Facets": [
                        {
                            "FacetID": {
                                "String": "100 "
                            },
                            "FacetLabel": {
                                "String": "General "
                            },
                            "Facets": [
                                {
                                    "FacetID": {
                                        "String": "1000 "
                                    },
                                    "FacetLabel": {
                                        "String": "Sales Quotation"
                                    },
                                    "RecordType": "UI.ReferenceFacet",
                                    "UseTerm": {
                                        "String": "UI.Identification"
                                    }
                                }
                            ],
                            "RecordType": "UI.CollectionFacet"
                        }
                    ],
                    "RecordType": "UI.CollectionFacet"
                }
            ],
            "UI.HeaderInfo": {
                "Description": {
                    "EdmType": "Edm.String",
                    "RecordType": null,
                    "Value": {
                        "Path": "VBELN_DESCR"
                    }
                },
                "RecordType": null,
                "Title": {
                    "EdmType": "Edm.String",
                    "NavigationPath": {
                        "NavigationPropertyPath": "@CB_SALES_ORDER_SRVAnnotation.SalesQuotation"
                    },
                    "RecordType": "UI.DataFieldWithNavigationPath",
                    "Value": {
                        "Path": "SalesQuotation"
                    }
                },
                "TypeImageUrl": {
                    "String": "/sap/public/BusinessSuite/CBESH_ICONS/SalesQuotation/grey_32.png"
                },
                "TypeName": {
                    "String": "Sales Quotation"
                },
                "TypeNamePlural": {
                    "String": "Sales Quotation"
                }
            },
            "UI.Identification": [
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": ""
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Sold-To Party "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "SoldToPartyName"
                                },
                                {
                                    "Type": "String",
                                    "Value": " "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "SoldToPartyAdditionalName"
                                }
                            ]
                        }
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Ship-To Party "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "ShipToPartyName"
                                },
                                {
                                    "Type": "String",
                                    "Value": " "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "ShipToPartyAdditionalName"
                                }
                            ]
                        }
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "GBSTK_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "RFSTK_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "ABSTK_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesQuotationValdtyStartDate"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesQuotationValidityEndDate"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesQuotationDate"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "PurchaseOrderByCustomer"
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesQuotationNetAmount"
                    }
                },
                {
                    "Label": {
                        "String": "Sales Area "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "VKORG_TEXT"
                                },
                                {
                                    "Type": "String",
                                    "Value": ", "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "VTWEG_TEXT"
                                },
                                {
                                    "Type": "String",
                                    "Value": ", "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "SPART_TEXT"
                                }
                            ]
                        }
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "VKGRP_TEXT"
                                }
                            ]
                        }
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Sales Office "
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "VKBUR_TEXT"
                                }
                            ]
                        }
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "CreationDate"
                    }
                },
                {
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "Label": {
                        "String": "Created By "
                    },
                    "RecordType": "UI.DataFiel",
                    "Value": {
                        "Apply": {
                            "Name": "odata.concat",
                            "Parameters": [
                                {
                                    "Type": "Path",
                                    "Value": "AcademicTitleName"
                                },
                                {
                                    "Type": "String",
                                    "Value": " "
                                },
                                {
                                    "Type": "Path",
                                    "Value": "CreatedByUserName"
                                }
                            ]
                        }
                    }
                }
            ],
            "UI.LineItem": [
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.High"
                    },
                    "NavigationPath": {
                        "NavigationPropertyPath": "@CB_SALES_ORDER_SRVAnnotation.SalesQuotation"
                    },
                    "RecordType": "UI.DataFieldWithNavigationPath",
                    "Value": {
                        "Path": "SalesQuotation"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "VBELN_DESCR"
                    }
                },
                {
                    "EdmType": "Edm.DateTime",
                    "Importance": {
                        "EnumMember": "UI.Priority.High"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesQuotationDate"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "GBSTK_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "RFSTK_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "ABSTK_TEXT"
                    }
                },
                {
                    "EdmType": "Edm.Decimal",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "SalesQuotationNetAmount"
                    }
                }
            ]
        },
        "CB_SALES_ORDER_SRV.USER_H": {
            "UI.Badge": {
                "Headline": {
                    "RecordType": "UI.DataField",
                    "Value": {
                        "String": "User"
                    }
                },
                "MainInfo": {
                    "EdmType": "Edm.String",
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "AddressID"
                    }
                },
                "RecordType": null,
                "Title": {
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "DummyRole"
                    }
                },
                "TypeImageUrl": {
                    "String": "PathToGenericSalesOrderIcon"
                }
            },
            "UI.Facets": [
                {
                    "FacetID": {
                        "String": "1 "
                    },
                    "FacetLabel": {
                        "String": "Overview "
                    },
                    "Facets": [
                        {
                            "FacetID": {
                                "String": "100 "
                            },
                            "FacetLabel": {
                                "String": "General "
                            },
                            "Facets": [
                                {
                                    "FacetID": {
                                        "String": "1000 "
                                    },
                                    "FacetLabel": {
                                        "String": "User"
                                    },
                                    "RecordType": "UI.ReferenceFacet",
                                    "UseTerm": {
                                        "String": "UI.Identification"
                                    }
                                }
                            ],
                            "RecordType": "UI.CollectionFacet"
                        }
                    ],
                    "RecordType": "UI.CollectionFacet"
                }
            ],
            "UI.HeaderInfo": {
                "RecordType": null,
                "Title": {
                    "EdmType": "Edm.String",
                    "RecordType": null,
                    "Value": {
                        "Path": "PersonFullName"
                    }
                },
                "TypeName": {
                    "String": "User"
                },
                "TypeNamePlural": {
                    "String": "User"
                }
            },
            "UI.Identification": [
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "PersonFullName"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "DEPARTMENT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "BUILDING"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "InternationalPhoneNumber"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "EmailAddress"
                    }
                }
            ],
            "UI.LineItem": [
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "PersonFullName"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "DEPARTMENT"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "BUILDING"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "InternationalPhoneNumber"
                    }
                },
                {
                    "EdmType": "Edm.String",
                    "Importance": {
                        "EnumMember": "UI.Priority.Medium"
                    },
                    "RecordType": "UI.DataField",
                    "Value": {
                        "Path": "EmailAddress"
                    }
                }
            ]
        },
        "CB_SALES_QUOTATION_SRV.SalesQuotationCE": {
            "UI.IsCallableEntity": {}
        },
        "aliasAnnotations": {
            "CB_OUTBOUND_DELIVERY_SRV": "/sap/bc/bsp/sap/CBESH_UI_ANF_LE/CB_OUTBOUND_DELIVERY_SRV_ANNO.xml",
            "CB_SALES_CONTRACT_SRV": "/sap/bc/bsp/sap/CB_UI_ANFSDSLS/CB_SALES_CONTRACT_SRV_anno.xml",
            "CB_SALES_QUOTATION_SRV": "/sap/bc/bsp/sap/CB_UI_ANFSDSLS/CB_SALES_QUOTATION_SRV_anno.xml"
        },
        "aliasDefinitions": {
            "CB_OUTBOUND_DELIVERY_SRV": "CB_OUTBOUND_DELIVERY_SRV",
            "CB_SALES_CONTRACT_SRV": "CB_SALES_CONTRACT_SRV",
            "CB_SALES_ORDER_SRV": "CB_SALES_ORDER_SRV",
            "CB_SALES_QUOTATION_SRV": "CB_SALES_QUOTATION_SRV",
            "CQP": "com.sap.vocabularies.CurrQuan",
            "UI": "com.sap.vocabularies.UI",
            "vCard": "com.sap.vocabularies.Communication"
        },
        "propertyAnnotations": {
            "CB_SALES_ORDER_SRV.OutboundDelivery": {
                "TotalGrossWeight": {
                    "CQP.UnitOfMeasure": {
                        "Path": "GEWEI_1"
                    }
                },
                "TotalNetWeight": {
                    "CQP.UnitOfMeasure": {
                        "Path": "GEWEI_2"
                    }
                },
                "VOLUM": {
                    "CQP.UnitOfMeasure": {
                        "Path": "VOLEH_HEAD_MSEH3"
                    }
                }
            },
            "CB_SALES_ORDER_SRV.SD_VBAP": {
                "NetAmount": {
                    "CQP.IsoCurrency": {
                        "Path": "WAERK_NETWR"
                    }
                },
                "NetPriceAmount": {
                    "CQP.IsoCurrency": {
                        "Path": "WAERK_NETPR"
                    }
                },
                "OrderQuantity": {
                    "CQP.UnitOfMeasure": {
                        "Path": "OrderQuantityUnit_E"
                    }
                }
            },
            "CB_SALES_ORDER_SRV.SalesContract": {
                "NetAmount": {
                    "CQP.IsoCurrency": {
                        "Path": "WAERK_NETWR"
                    }
                }
            },
            "CB_SALES_ORDER_SRV.SalesOrder": {
                "NetAmount": {
                    "CQP.IsoCurrency": {
                        "Path": "TransactionCurrency"
                    }
                }
            },
            "CB_SALES_ORDER_SRV.SalesQuotation": {
                "SalesQuotationNetAmount": {
                    "CQP.IsoCurrency": {
                        "Path": "TransactionCurrency"
                    }
                }
            }
        },
        "propertyMetadata": {
            "Customer": [
                {
                    "label": "Title",
                    "name": "FormOfAddress",
                    "type": "Edm.String"
                },
                {
                    "label": "Customer Number",
                    "name": "Customer",
                    "type": "Edm.String"
                },
                {
                    "label": "Customer Name",
                    "name": "CustomerName",
                    "type": "Edm.String"
                },
                {
                    "label": "Additional Customer Name",
                    "name": "CustomerAdditionalName",
                    "type": "Edm.String"
                },
                {
                    "label": "Street Address and House Number",
                    "name": "StreetAddressName",
                    "type": "Edm.String"
                },
                {
                    "label": "City",
                    "name": "CityName",
                    "type": "Edm.String"
                },
                {
                    "label": "Region Description",
                    "name": "RegionName",
                    "type": "Edm.String"
                },
                {
                    "label": "Country",
                    "name": "CountryName",
                    "type": "Edm.String"
                },
                {
                    "label": "Postal Code",
                    "name": "PostalCode",
                    "type": "Edm.String"
                },
                {
                    "label": "Telephone",
                    "name": "AddressPhoneNumber",
                    "type": "Edm.String"
                },
                {
                    "label": "Telephone Extension",
                    "name": "PhoneNumberExtension",
                    "type": "Edm.String"
                },
                {
                    "label": "Address",
                    "name": "ADRNR",
                    "type": "Edm.String"
                },
                {
                    "label": "Fax",
                    "name": "FaxNumber",
                    "type": "Edm.String"
                },
                {
                    "label": "Fax Extension",
                    "name": "FaxNumberExtension",
                    "type": "Edm.String"
                },
                {
                    "label": "Search Term",
                    "name": "SearchTerm",
                    "type": "Edm.String"
                }
            ],
            "OutboundDelivery": [
                {
                    "label": "Outbound Delivery",
                    "name": "DeliveryDocument",
                    "type": "Edm.String"
                },
                {
                    "label": "Delivery Type",
                    "name": "DeliveryDocumentType",
                    "type": "Edm.String"
                },
                {
                    "label": "Delivery Type Description",
                    "name": "LFART_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Overall Processing Status",
                    "name": "OverallSDProcessStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Overall Processing Status",
                    "name": "GBSTK_DESCRIPTION",
                    "type": "Edm.String"
                },
                {
                    "label": "Ship-to Party ID",
                    "name": "KUNNR_WE",
                    "type": "Edm.String"
                },
                {
                    "label": "Sold-to Party ID",
                    "name": "SoldToParty",
                    "type": "Edm.String"
                },
                {
                    "label": "Sold-to Party Name",
                    "name": "NAME1_AG",
                    "type": "Edm.String"
                },
                {
                    "label": "Additional Sold-to Party Name",
                    "name": "NAME2_AG",
                    "type": "Edm.String"
                },
                {
                    "label": "Forwarding Agent ID",
                    "name": "KUNNR_SP",
                    "type": "Edm.String"
                },
                {
                    "label": "Forwarding Agent Name",
                    "name": "NAME1_SP",
                    "type": "Edm.String"
                },
                {
                    "label": "Additional Forwarding Agent Name",
                    "name": "NAME2_SP",
                    "type": "Edm.String"
                },
                {
                    "label": "Total Weight",
                    "name": "TotalGrossWeight",
                    "type": "Edm.Decimal"
                },
                {
                    "label": "External Unit of Measurement in Commercial Format (3-Char.)",
                    "name": "GEWEI_1_HEAD_MSEH3",
                    "type": "Edm.String"
                },
                {
                    "label": "Weight Unit",
                    "name": "GEWEI_1",
                    "type": "Edm.String"
                },
                {
                    "label": "Net Weight",
                    "name": "TotalNetWeight",
                    "type": "Edm.Decimal"
                },
                {
                    "label": "Weight Unit",
                    "name": "GEWEI_2_HEAD_MSEH3",
                    "type": "Edm.String"
                },
                {
                    "label": "Weight Unit",
                    "name": "GEWEI_2",
                    "type": "Edm.String"
                },
                {
                    "label": "Ship-to Party Name",
                    "name": "NAME1_WE",
                    "type": "Edm.String"
                },
                {
                    "label": "Additional Ship-to Party Name",
                    "name": "NAME2_WE",
                    "type": "Edm.String"
                },
                {
                    "label": "Volume",
                    "name": "VOLUM",
                    "type": "Edm.Decimal"
                },
                {
                    "label": "Volume Unit",
                    "name": "VOLEH_HEAD_MSEH3",
                    "type": "Edm.String"
                },
                {
                    "label": "Volume Unit",
                    "name": "VOLEH",
                    "type": "Edm.String"
                },
                {
                    "label": "Document Type",
                    "name": "VBTYP",
                    "type": "Edm.String"
                },
                {
                    "label": "Transportation Planning Status",
                    "name": "TransportationPlanningStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Transportation Planning Status",
                    "name": "TRSTA_DESCRIPTION",
                    "type": "Edm.String"
                },
                {
                    "label": "Overall Picking Status",
                    "name": "OverallPickingStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Status Warehouse Management Activities",
                    "name": "OverallWarehouseActivityStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Overall Picking Status",
                    "name": "KOSTK_DESCRIPTION",
                    "type": "Edm.String"
                },
                {
                    "label": "Status Warehouse Management Activities",
                    "name": "LVSTK_DESCRIPTION",
                    "type": "Edm.String"
                },
                {
                    "label": "Packing Status",
                    "name": "OverallPackingStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Reference Status",
                    "name": "PKSTK_DESCRIPTION",
                    "type": "Edm.String"
                },
                {
                    "label": "Total Goods Movement Status",
                    "name": "OverallGoodsMovementStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Total Goods Movement Status",
                    "name": "WBSTK_DESCRIPTION",
                    "type": "Edm.String"
                },
                {
                    "label": "Billing Status",
                    "name": "OverallDelivReltdBillgStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Billing Status",
                    "name": "FKSTK_DESCRIPTION",
                    "type": "Edm.String"
                },
                {
                    "label": "Created by",
                    "name": "CreatedByUser",
                    "type": "Edm.String"
                },
                {
                    "label": "Created by",
                    "name": "USER_NAME_CREATE",
                    "type": "Edm.String"
                },
                {
                    "label": "Created on",
                    "name": "CreationDate",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Creation Time",
                    "name": "CreationTime",
                    "type": "Edm.Time"
                },
                {
                    "label": "Changed by",
                    "name": "LastChangedByUser",
                    "type": "Edm.String"
                },
                {
                    "label": "Changed by",
                    "name": "USER_NAME_CHANGE",
                    "type": "Edm.String"
                },
                {
                    "label": "Changed on",
                    "name": "LastChangeDate",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Shipping Point",
                    "name": "VSTEL",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Organization",
                    "name": "VKORG",
                    "type": "Edm.String"
                },
                {
                    "label": "Planned Goods Issue Date",
                    "name": "WADAT",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Loading Date",
                    "name": "LDDAT",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Transportation Planning Date",
                    "name": "TDDAT",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Delivery Date",
                    "name": "LFDAT",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Picking Date",
                    "name": "KODAT",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Actual Goods Movement Date",
                    "name": "WADAT_IST",
                    "type": "Edm.DateTime"
                }
            ],
            "SD_VBAP": [
                {
                    "label": "Material",
                    "name": "Material",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Order",
                    "name": "SalesOrder",
                    "type": "Edm.String"
                },
                {
                    "label": "Order Quantity",
                    "name": "OrderQuantity",
                    "type": "Edm.Decimal"
                },
                {
                    "label": "External Unit of Measurement in Commercial Format (3-Char.)",
                    "name": "OrderQuantityUnit_E",
                    "type": "Edm.String"
                },
                {
                    "label": "Net Value",
                    "name": "NetAmount",
                    "type": "Edm.Decimal"
                },
                {
                    "label": "Currency",
                    "name": "WAERK_NETWR",
                    "type": "Edm.String"
                },
                {
                    "label": "Item",
                    "name": "SalesOrderItem",
                    "type": "Edm.String"
                },
                {
                    "label": "Item Description",
                    "name": "SalesOrderItemText",
                    "type": "Edm.String"
                },
                {
                    "label": "Item Category",
                    "name": "SalesOrderItemCategory",
                    "type": "Edm.String"
                },
                {
                    "label": "Item Category",
                    "name": "PSTYV_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Customer Material Number",
                    "name": "MaterialByCustomer",
                    "type": "Edm.String"
                },
                {
                    "label": "Material Description",
                    "name": "MaterialName",
                    "type": "Edm.String"
                },
                {
                    "label": "Material Group",
                    "name": "MaterialGroup",
                    "type": "Edm.String"
                },
                {
                    "label": "Material Group",
                    "name": "MATKL_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Net Price",
                    "name": "NetPriceAmount",
                    "type": "Edm.Decimal"
                },
                {
                    "label": "Currency",
                    "name": "WAERK_NETPR",
                    "type": "Edm.String"
                },
                {
                    "label": "Plant",
                    "name": "Plant",
                    "type": "Edm.String"
                },
                {
                    "label": "Storage Location",
                    "name": "StorageLocation",
                    "type": "Edm.String"
                },
                {
                    "label": "Storage Location",
                    "name": "StorageLocationName",
                    "type": "Edm.String"
                },
                {
                    "label": "Shipping Point",
                    "name": "ShippingPoint",
                    "type": "Edm.String"
                },
                {
                    "label": "Shipping Point",
                    "name": "VSTEL_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Plant",
                    "name": "WERKS_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Overall Processing Status",
                    "name": "SDProcessStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Overall Processing Status",
                    "name": "GBSTA_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Delivery Status",
                    "name": "DeliveryStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Delivery Status",
                    "name": "LFSTA_TEXT",
                    "type": "Edm.String"
                }
            ],
            "SalesContract": [
                {
                    "label": "Sales Contract",
                    "name": "SalesContract",
                    "type": "Edm.String"
                },
                {
                    "label": "Document Description",
                    "name": "VBELN_DESCR",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Document Type",
                    "name": "AUART_EXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Sold-To Party (ID)",
                    "name": "SoldToParty",
                    "type": "Edm.String"
                },
                {
                    "label": "City",
                    "name": "SoldToPartyCityName",
                    "type": "Edm.String"
                },
                {
                    "label": "Cty",
                    "name": "SoldToPartyCountry",
                    "type": "Edm.String"
                },
                {
                    "label": "Ship-To Party (ID)",
                    "name": "ShipToParty",
                    "type": "Edm.String"
                },
                {
                    "label": "City",
                    "name": "ShipToPartyCityName",
                    "type": "Edm.String"
                },
                {
                    "label": "Cty",
                    "name": "ShipToPartyCountry",
                    "type": "Edm.String"
                },
                {
                    "label": "Contact Person",
                    "name": "ContactPerson",
                    "type": "Edm.String"
                },
                {
                    "label": "First Name",
                    "name": "ContactPersonFirstName",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Document Category",
                    "name": "VBTYP",
                    "type": "Edm.String"
                },
                {
                    "label": "Last Name",
                    "name": "ContactPersonLastName",
                    "type": "Edm.String"
                },
                {
                    "label": "City",
                    "name": "ContactPersonCityName",
                    "type": "Edm.String"
                },
                {
                    "label": "Name",
                    "name": "SoldToPartyName",
                    "type": "Edm.String"
                },
                {
                    "label": "Name",
                    "name": "ShipToPartyName",
                    "type": "Edm.String"
                },
                {
                    "label": "Telephone",
                    "name": "ContactPersonPhoneNumber",
                    "type": "Edm.String"
                },
                {
                    "label": "Name 2",
                    "name": "ShipToPartyAdditionalName",
                    "type": "Edm.String"
                },
                {
                    "label": "Valid From",
                    "name": "SalesContractValidityStartDate",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Valid To",
                    "name": "SalesContractValidityEndDate",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Name 2",
                    "name": "SoldToPartyAdditionalName",
                    "type": "Edm.String"
                },
                {
                    "label": "Document Date",
                    "name": "SalesContractDate",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Purchase Order Number",
                    "name": "PurchaseOrderByCustomer",
                    "type": "Edm.String"
                },
                {
                    "label": "Net Value",
                    "name": "NetAmount",
                    "type": "Edm.Decimal"
                },
                {
                    "label": "Sales Organisation",
                    "name": "SalesOrganization",
                    "type": "Edm.String"
                },
                {
                    "label": "Reference Status",
                    "name": "RFSTK_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Organisation",
                    "name": "VKORG_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Distribution Channel",
                    "name": "DistributionChannel",
                    "type": "Edm.String"
                },
                {
                    "label": "Distribution Channel",
                    "name": "VTWEG_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Division",
                    "name": "Division",
                    "type": "Edm.String"
                },
                {
                    "label": "Division",
                    "name": "SPART_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Group",
                    "name": "SalesGroup",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Group",
                    "name": "VKGRP_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Office",
                    "name": "SalesOffice",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Office",
                    "name": "VKBUR_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Currency",
                    "name": "WAERK_NETWR",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Document Type",
                    "name": "AUART_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Created On",
                    "name": "CreationDate",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Time",
                    "name": "CreationTime",
                    "type": "Edm.Time"
                },
                {
                    "label": "Created By",
                    "name": "CreatedByUser",
                    "type": "Edm.String"
                },
                {
                    "label": "Title",
                    "name": "AcademicTitleName",
                    "type": "Edm.String"
                },
                {
                    "label": "First Name",
                    "name": "NAME_FIRST",
                    "type": "Edm.String"
                },
                {
                    "label": "Last Name",
                    "name": "NAME_LAST",
                    "type": "Edm.String"
                },
                {
                    "label": "Transaction Group",
                    "name": "TransactionGrouo",
                    "type": "Edm.String"
                },
                {
                    "label": "Overall Processing Status",
                    "name": "GBSTK_TEXT",
                    "type": "Edm.String"
                }
            ],
            "SalesOrder": [
                {
                    "label": "Sales Order",
                    "name": "SalesOrder",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Document Type",
                    "name": "AUART_L_D",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Document Type",
                    "name": "AUART_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Sold-To Party",
                    "name": "SoldToParty",
                    "type": "Edm.String"
                },
                {
                    "label": "City",
                    "name": "SoldToPartyCityName",
                    "type": "Edm.String"
                },
                {
                    "label": "Country",
                    "name": "SoldToPartyCountry",
                    "type": "Edm.String"
                },
                {
                    "label": "Document Description",
                    "name": "VBELN_DESCR",
                    "type": "Edm.String"
                },
                {
                    "label": "Purchase Order Number",
                    "name": "PurchaseOrderByCustomer",
                    "type": "Edm.String"
                },
                {
                    "label": "Document Date",
                    "name": "SalesOrderDate",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Name",
                    "name": "SoldToPartyName",
                    "type": "Edm.String"
                },
                {
                    "label": "Net Value",
                    "name": "NetAmount",
                    "type": "Edm.Decimal"
                },
                {
                    "label": "Additional Name",
                    "name": "SoldToPartyAdditionalName",
                    "type": "Edm.String"
                },
                {
                    "label": "Ship-To Party",
                    "name": "ShipToParty",
                    "type": "Edm.String"
                },
                {
                    "label": "City",
                    "name": "ShipToPartyCityName",
                    "type": "Edm.String"
                },
                {
                    "label": "Cty",
                    "name": "ShipToPartyCountry",
                    "type": "Edm.String"
                },
                {
                    "label": "Contact Person",
                    "name": "ContactPerson",
                    "type": "Edm.String"
                },
                {
                    "label": "First Name",
                    "name": "ContactPersonFirstName",
                    "type": "Edm.String"
                },
                {
                    "label": "Last Name",
                    "name": "ContactPersonLastName",
                    "type": "Edm.String"
                },
                {
                    "label": "City",
                    "name": "ContactPersonCityName",
                    "type": "Edm.String"
                },
                {
                    "label": "Telephone",
                    "name": "ContactPersonPhoneNumber",
                    "type": "Edm.String"
                },
                {
                    "label": "Name",
                    "name": "ShipToPartyName",
                    "type": "Edm.String"
                },
                {
                    "label": "Name 2",
                    "name": "ShipToPartyAdditionalName",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Organisation",
                    "name": "SalesOrganization",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Organisation",
                    "name": "VKORG_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Distribution Channel",
                    "name": "DistributionChannel",
                    "type": "Edm.String"
                },
                {
                    "label": "Distribution Channel",
                    "name": "VTWEG_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Division",
                    "name": "Division",
                    "type": "Edm.String"
                },
                {
                    "label": "Division",
                    "name": "SPART_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Group",
                    "name": "SalesGroup",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Group",
                    "name": "VKGRP_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Office",
                    "name": "SalesOffice",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Office",
                    "name": "VKBUR_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Currency",
                    "name": "TransactionCurrency",
                    "type": "Edm.String"
                },
                {
                    "label": "Requested Delivery Date",
                    "name": "RequestedDeliveryDate",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Created On",
                    "name": "CreationDate",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Time",
                    "name": "CreationTime",
                    "type": "Edm.Time"
                },
                {
                    "label": "Created By",
                    "name": "CreatedByUser",
                    "type": "Edm.String"
                },
                {
                    "label": "Title",
                    "name": "AcademicTitleName",
                    "type": "Edm.String"
                },
                {
                    "label": "First Name",
                    "name": "NAME_FIRST",
                    "type": "Edm.String"
                },
                {
                    "label": "Last Name",
                    "name": "NAME_LAST",
                    "type": "Edm.String"
                },
                {
                    "label": "Transaction Group",
                    "name": "TransactionGroup",
                    "type": "Edm.String"
                },
                {
                    "label": "Document Category",
                    "name": "SDDocumentCategory",
                    "type": "Edm.String"
                },
                {
                    "label": "Overall Processing Status",
                    "name": "OverallSDProcessStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Overall Processing Status",
                    "name": "GBSTK_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Delivery Status",
                    "name": "OverallDeliveryStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Delivery Status",
                    "name": "LFSTK_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Credit Status",
                    "name": "TotalCreditCheckStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Credit Status",
                    "name": "CMGST_TEXT",
                    "type": "Edm.String"
                }
            ],
            "SalesQuotation": [
                {
                    "label": "Sales Quotation",
                    "name": "SalesQuotation",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Document Type",
                    "name": "AUART_EXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Document Type",
                    "name": "AUART_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Sold-To Party",
                    "name": "SoldToParty",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Document Type",
                    "name": "VBELN_DESCR",
                    "type": "Edm.String"
                },
                {
                    "label": "City",
                    "name": "SoldToPartyCityName",
                    "type": "Edm.String"
                },
                {
                    "label": "Country",
                    "name": "SoldToPartyCountry",
                    "type": "Edm.String"
                },
                {
                    "label": "Sold-To Party",
                    "name": "SoldToPartyName",
                    "type": "Edm.String"
                },
                {
                    "label": "Name 2",
                    "name": "SoldToPartyAdditionalName",
                    "type": "Edm.String"
                },
                {
                    "label": "Contact Person",
                    "name": "ContactPerson",
                    "type": "Edm.String"
                },
                {
                    "label": "Valid From",
                    "name": "SalesQuotationValdtyStartDate",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Valid To",
                    "name": "SalesQuotationValidityEndDate",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Ship-To Party",
                    "name": "ShipToParty",
                    "type": "Edm.String"
                },
                {
                    "label": "Ship-To Party",
                    "name": "ShipToPartyName",
                    "type": "Edm.String"
                },
                {
                    "label": "Name 2",
                    "name": "ShipToPartyAdditionalName",
                    "type": "Edm.String"
                },
                {
                    "label": "City",
                    "name": "ShipToPartyCityName",
                    "type": "Edm.String"
                },
                {
                    "label": "Country",
                    "name": "ShipToPartyCountry",
                    "type": "Edm.String"
                },
                {
                    "label": "First Name",
                    "name": "ContactPersonFirstName",
                    "type": "Edm.String"
                },
                {
                    "label": "Last Name",
                    "name": "ContactPersonLastName",
                    "type": "Edm.String"
                },
                {
                    "label": "City",
                    "name": "ContactPersonCityName",
                    "type": "Edm.String"
                },
                {
                    "label": "Telephone",
                    "name": "ContactPersonPhoneNumber",
                    "type": "Edm.String"
                },
                {
                    "label": "Net Value",
                    "name": "SalesQuotationNetAmount",
                    "type": "Edm.Decimal"
                },
                {
                    "label": "Document Date",
                    "name": "SalesQuotationDate",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Purchase Order Number",
                    "name": "PurchaseOrderByCustomer",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Organisation",
                    "name": "SalesOrganization",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Organisation",
                    "name": "VKORG_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Distribution Channel",
                    "name": "DistributionChannel",
                    "type": "Edm.String"
                },
                {
                    "label": "Distribution Channel",
                    "name": "VTWEG_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Division",
                    "name": "Division",
                    "type": "Edm.String"
                },
                {
                    "label": "Division",
                    "name": "SPART_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Group",
                    "name": "SalesGroup",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Group",
                    "name": "VKGRP_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Office",
                    "name": "SalesOffice",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Office",
                    "name": "VKBUR_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Currency",
                    "name": "TransactionCurrency",
                    "type": "Edm.String"
                },
                {
                    "label": "Created On",
                    "name": "CreationDate",
                    "type": "Edm.DateTime"
                },
                {
                    "label": "Time",
                    "name": "CreationTime",
                    "type": "Edm.Time"
                },
                {
                    "label": "Created By",
                    "name": "CreatedByUser",
                    "type": "Edm.String"
                },
                {
                    "label": "Title",
                    "name": "AcademicTitleName",
                    "type": "Edm.String"
                },
                {
                    "label": "First Name",
                    "name": "NAME_FIRST",
                    "type": "Edm.String"
                },
                {
                    "label": "Last Name",
                    "name": "NAME_LAST",
                    "type": "Edm.String"
                },
                {
                    "label": "Sales Document Category",
                    "name": "SDDocumentCategory",
                    "type": "Edm.String"
                },
                {
                    "label": "Overall Processing Status",
                    "name": "OverallSDProcessStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Overall Processing Status",
                    "name": "GBSTK_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Reference Status",
                    "name": "OverallSDDocReferenceStatus",
                    "type": "Edm.String"
                },
                {
                    "label": "Reference Status",
                    "name": "RFSTK_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Rejection Status",
                    "name": "OverallSDDocumentRejectionSts",
                    "type": "Edm.String"
                },
                {
                    "label": "Rejection Status",
                    "name": "ABSTK_TEXT",
                    "type": "Edm.String"
                }
            ],
            "USER_H": [
                {
                    "label": "User Name",
                    "name": "User",
                    "type": "Edm.String"
                },
                {
                    "label": "Addr. no.",
                    "name": "AddressID",
                    "type": "Edm.String"
                },
                {
                    "label": "Title",
                    "name": "VALUE_TEXT",
                    "type": "Edm.String"
                },
                {
                    "label": "Academic Title",
                    "name": "VALUE_TEXT1",
                    "type": "Edm.String"
                },
                {
                    "label": "First Name",
                    "name": "FirstName",
                    "type": "Edm.String"
                },
                {
                    "label": "Last Name",
                    "name": "LastName",
                    "type": "Edm.String"
                },
                {
                    "label": "Full Name",
                    "name": "PersonFullName",
                    "type": "Edm.String"
                },
                {
                    "label": "Company",
                    "name": "NAME1",
                    "type": "Edm.String"
                },
                {
                    "label": "Department",
                    "name": "DEPARTMENT",
                    "type": "Edm.String"
                },
                {
                    "label": "Function",
                    "name": "FUNCTION",
                    "type": "Edm.String"
                },
                {
                    "label": "E-Mail",
                    "name": "EmailAddress",
                    "type": "Edm.String"
                },
                {
                    "label": "Profession",
                    "name": "PROFESSION",
                    "type": "Edm.String"
                },
                {
                    "label": "Telephone",
                    "name": "InternationalPhoneNumber",
                    "type": "Edm.String"
                },
                {
                    "label": "Mobile",
                    "name": "TELNR_LONG1",
                    "type": "Edm.String"
                },
                {
                    "label": "Building",
                    "name": "BUILDING",
                    "type": "Edm.String"
                },
                {
                    "label": "Floor",
                    "name": "FLOOR",
                    "type": "Edm.String"
                },
                {
                    "label": "Room No.",
                    "name": "ROOMNUMBER",
                    "type": "Edm.String"
                },
                {
                    "label": "Fax number",
                    "name": "InternationalFaxNumber",
                    "type": "Edm.String"
                },
                {
                    "label": "Int. mail",
                    "name": "IH_MAIL",
                    "type": "Edm.String"
                }
            ]
        },
        "termDefinitions": {
            "@CB_SALES_ORDER_SRVAnnotation.OutboundDelivery": "CB_OUTBOUND_DELIVERY_SRV.OutboundDelivery",
            "@CB_SALES_ORDER_SRVAnnotation.SalesContract": "CB_SALES_CONTRACT_SRV.SalesContract",
            "@CB_SALES_ORDER_SRVAnnotation.SalesQuotation": "CB_SALES_QUOTATION_SRV.SalesQuotation"
        }
    };