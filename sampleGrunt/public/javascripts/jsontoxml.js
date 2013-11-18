var jsontoxml = function(jsonObject){
	var str = "";
	var questionnaire = jsonObject.questionnaire;
	$.each(questionnaire,function(k,v){
		str += "<section>\n"+
		       "  <sectionName><simpleText>"+questionnaire[k].sectionName.en+"</simpleText></sectionName>\n"+
		       "  <sectionContent>\n";

		str += getSections(questionnaire[k].sections);

		str += "  </sectionContent>\n"+
		       "</section>\n";
	});

	console.log(str);
};

var makeBlank = function(count){
	var blank = "";
	for(var i=0;i<count;i++){
		blank += " ";
	}
	return blank;
};

var getSections = function(sections){
	var sectionsStr = "";
	$.each(sections,function(k,v){
		sectionsStr += "    <section>\n"+
		               "      <sectionName><simpleText>"+sections[k].sectionName.en+"</simpleText></sectionName>\n"+
		               "      <sectionContent>\n";

        sectionsStr += getQuestions(sections[k].questions);

		sectionsStr += "      </sectionContent>\n"+
		               "    </section>\n";
	});

	return sectionsStr;
};

var getQuestions = function(questions){
	var questionsStr = "";
	var blank8 = makeBlank(8);
	$.each(questions,function(k,v){
		var questionId = this.questionId?this.questionId:"";
		var questionTitle = this.title.en;
		//var questionId = this[k]["questionId"]!==undefined?this[k].questionId:"";
		questionsStr += blank8 + "<question qItemId=\""+ questionId +"\">\n"+
				        blank8 + "  <questionTitle><simpleText>"+ questionTitle +"</simpleText></questionTitle>\n";

		questionsStr += getQuestionType(this.type,!!this.conditional,this.conditional,this.options);	   

		if(this.subQuestions){
			questionsStr += getSubQuestions(this.subQuestions);	   
		}

		questionsStr += blank8 + "</question>\n";
	});

	return questionsStr;
};

var getQuestionType = function(type,isConditional,conditional,selectOptions){
	var blank10 = makeBlank(10);

	var isConditional = isConditional || false;
	var conditional = conditional || {};
	var selectOptions = selectOptions || [];

	var questionType = blank10 + "<answer><answerType>";
	switch(type){
		case "boolean":
			questionType += "<boolean><result></result>";
			if(isConditional){
				questionType += "\n";
				var id = conditional.questionId;
				var condition = conditional.condition;
				var title = conditional.title.en;
				var conditionalType = conditional.type;
				questionType += blank10 + "  <contingent-question qItemId=\""+ id +"\" condition=\""+ condition +"\">\n"+
					            blank10 + "    <questionTitle><simpleText>"+ title +"</simpleText></questionTitle>\n"+
					            blank10 + "    <freetext format = \""+ conditionalType +"\"><result></result></freetext>\n"+
					            blank10 + "  </contingent-question>\n" + blank10;
			}
			questionType += "</boolean>";
			break;
		case "short-text":
		case "long-text":
		case "number":
			questionType += "<freetext format = \""+ type +"\" "+ (type=="number"?"min-value = \"0\"":"") + "><result></result></freetext>";
			break;
		case "select":
			questionType += "<singleChoice><result></result>\n";
			$.each(selectOptions,function(k,v){
				questionType += blank10 + "  <answerChoice qItemId = \""+ this.value +"\"><simpleText>"+ this.text.en +"</simpleText></answerChoice>\n";
			});
          	questionType += blank10 + "</singleChoice>";
			break;
		default:
			break;
	}
	questionType += "</answerType></answer>\n";

	return questionType;
};

var getSubQuestions = function(sub){
	var subQuestionStr = "";
	var blank10 = makeBlank(10);
	$.each(sub,function(k,v){
		var id = this.questionId;
		var title = this.text.en;
		subQuestionStr += blank10 + "<sub-question qItemId=\""+ id +"\">\n"+
				          blank10 + "  <questionTitle><simpleText>"+ title +"</simpleText></questionTitle>\n"+
				          blank10 + "  <result></result>\n"+
				          blank10 + "</sub-question>\n";
	}); 

	return subQuestionStr;		  
};

/*var obj = {
    "questionnaire":     [
        {
            "sectionName": {
                "en": "General" 
            },
            "sections": [
                {
                    "sectionName": {
                        "en": "The tabs General, SAP HANA Installation &amp; Database Migration are mandatory. All other tabs are optional based on your individual landscape. The questions on the General tab will tell you if you need to fill in the optional ones.&lt;br/&gt;&lt;br/&gt;&lt;br/&gt;1.Customer Address"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Company Name:"
                            },
                            "type":"short-text",
                            "questionId": "RDBMS-a101"
                        },
                        {
                            "title": {
                                "en": "Customer Number:"
                            },
                            "type":"short-text",
                            "questionId": "RDBMS-a102"
                        },
                        {
                            "title": {
                                "en": "Primary Contact Person:"
                            },
                            "type":"short-text",
                            "questionId": "RDBMS-a103"
                        },
                        {
                            "title": {
                                "en": "Primary customer contact details (address, email, telephone,..)"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a104"
                        }
                    ]
                },
                {
                    "sectionName": {
                        "en": "2.Customer Contacts(if applicable)"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Project Manager (email, telephone):"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a201"
                        },
                        {
                            "title": {
                                "en": "Business Lead (Decision Maker) (email, telephone):"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a202"
                        },
                        {
                            "title": {
                                "en": "Business Subject Matter Experts  (email, telephone):"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a203"
                        },
                        {
                            "title": {
                                "en": "Business Super User and Master Trainer (Power user) (email, telephone):"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a204"
                        },
                        {
                            "title": {
                                "en": "IT Functional Lead, Master data (email, telephone):"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a205"
                        },
                        {
                            "title": {
                                "en": "IT Development and Reporting (email, telephone):"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a206"
                        },
                        {
                            "title": {
                                "en": "Basis Staff/Security/Hosting partner (email, telephone):"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a207"
                        },
                        {
                            "title": {
                                "en": "Organization change management (email, telephone):"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a208"
                        }
                    ]
                },
                {
                    "sectionName":{
                        "en": "3.General Landscape"
                    },
                    "questions":[
                        {
                            "title": {
                                "en": "What is the SAP Landscape layout? Please enrich the information with available documentation"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a301"
                        },
                        {
                            "title": {
                                "en": "List the type of systems used in the transport landscape of SAP NetWeaver BW (e.g.DEV, QA,…, PROD)"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a302"
                        },
                        {
                            "title": {
                                "en": "Please specify the database and version used (If the landscape is using heterogeneous database, please specify for each system)"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a303"
                        },
                        {
                            "title": {
                                "en": "DB Size (in GB) per system of the landscape"
                            },
                            "type":"short-text",
                            "questionId": "RDBMS-a304"
                        },
                        {
                            "title": {
                                "en": "Please specify the operating system and version used (If the landscape is using heterogeneous OS, please specify for each system)"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a305"
                        },
                        {
                            "title": {
                                "en": "Please provide db size w/o PSAPTEMP, PSAPROLL/PSAPUNDO"
                            },
                            "type":"short-text",
                            "questionId": "RDBMS-a306"
                        },
                        {
                            "title": {
                                "en": "BW Production system (SID)"
                            },
                            "type":"short-text",
                            "questionId": "RDBMS-a307"
                        },
                        {
                            "title": {
                                "en": "What release is your BW system currently on? "
                            },
                            "type":"short-text",
                            "questionId": "RDBMS-a308"
                        },
                        {
                            "title": {
                                "en": "Is your BW system on SAP NetWeaver 7.30 SP07 or higher?"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-a309",
                            "conditional": {
                                "condition": false,
                                "title": {
                                    "en": "Please fill in the questions on the tab &lt;span style=\\&quot;font-weight:bold\\&quot;&gt;Technical Upgrade&lt;/span&gt;. Do you need support to do the migration"
                                },
                                "type": "short-text",
                                "questionId": "RDBMS-a309-2"
                            }
                        },
                        {
                            "title": {
                                "en": "Please indicate the current SAP kernel and patch versions of the source SAP BW systems:"
                            },
                            "type": "short-text",
                            "subQuestions": [
                                {
                                    "questionId": "RDBMS-a310-1",
                                    "text": {
                                        "en": "SAP_ABA" 
                                    }
                                },
                                {
                                    "questionId": "RDBMS-a310-2",
                                    "text": {
                                        "en": "SAP_BASIS" 
                                    }
                                },
                                {
                                    "questionId": "RDBMS-a310-3",
                                    "text": {
                                        "en": "ST_PI" 
                                    }
                                },
                                {
                                    "questionId": "RDBMS-a310-4",
                                    "text": {
                                        "en": "SAP_BW" 
                                    }
                                },
                                {
                                    "questionId": "RDBMS-a310-5",
                                    "text": {
                                        "en": "FINBASIS" 
                                    }
                                },
                                {
                                    "questionId": "RDBMS-a310-6",
                                    "text": {
                                        "en": "BW_CONT" 
                                    }
                                },
                                {
                                    "questionId": "RDBMS-a310-7",
                                    "text": {
                                        "en": "SEM_BW" 
                                    }
                                },
                                {
                                    "questionId": "RDBMS-a310-8",
                                    "text": {
                                        "en": "SAP kernel" 
                                    }
                                }
                            ]
                        },
                        {
                            "title":{
                                "en":"Do you operate your BW system with SAP NetWeaver ABAP and Java in one DB (dual-stack)? (note: the RDS can be executed for SAP NetWeaver BW ABAP only)."
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a311-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Do you need help in splitting the dual-stack system?"
                                },
                                "type": "short-text",
                                "questionId": "RDBMS-a311-2"
                            }
                        },
                        {
                            "title":{
                                "en":"Do you use BW 7.X data flows?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a312-1",
                            "conditional": {
                                "condition": false,
                                "title": {
                                    "en": "Please fill in the questions on the tab &lt;span style=\\&quot;font-weight:bold\\&quot;&gt;Functional Upgrade&lt;/span&gt;. Do you need help to migrate the data flow from 3.X to 7.X?"
                                },
                                "type": "short-text",
                                "questionId": "RDBMS-a312-2"
                            }
                        },
                        {
                            "title":{
                                "en":"What languages are used to access BW system (e.g. English, Spanish, Japanese, Russian, French)?"
                            },
                            "type":"short-text",
                            "questionId": "RDBMS-a313-1"
                        },
                        {
                            "title":{
                                "en":"Number of code pages in TCPDB table"
                            },
                            "type":"number",
                            "questionId": "RDBMS-a314"
                        },
                        {
                            "title":{
                                "en":"Do you use the SAP BW system in a multiple time zone environment?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a315"
                        },
                        {
                            "title":{
                                "en":"Do you have any other non-SAP Data Warehouses?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a316"
                        }, 
                        {
                            "title":{
                                "en":"Do you have BW Accelerator?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a317"
                        }, 
                        {
                            "title":{
                                "en":"Is your BW system a Unicode system?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a318-1",
                            "conditional": {
                                "condition": false,
                                "title": {
                                    "en": "Please fill in the questions on the tab &lt;span style=\\&quot;font-weight:bold\\&quot;&gt;Unicode Conversion&lt;/span&gt;. Do you need support to convert it?"
                                },
                                "type": "short-text",
                                "questionId": "RDBMS-a318-2"
                            }
                        },
                        {
                            "title":{
                                "en":"Did you already perform the BW Authorization Migration to the new BI authorization concept?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a319-1",
                            "conditional": {
                                "condition": false,
                                "title": {
                                    "en": "Please fill in the questions on the tab &lt;span style=\\&quot;font-weight:bold\\&quot;&gt;Authorization Migration&lt;/span&gt;. Do you need support to do the migration?"
                                },
                                "type": "short-text",
                                "questionId": "RDBMS-a319-2"
                            }
                        },
                        {
                            "title":{
                                "en":"Do you use Enterprise Portal?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a320-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please specify version"
                                },
                                "type": "short-text",
                                "questionId": "RDBMS-a320-2"
                            }
                        },
                        {
                            "title":{
                                "en":"Please specify whether you have J2EE in BW system?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a321-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please specify version"
                                },
                                "type": "short-text",
                                "questionId": "RDBMS-a321-2"
                            }
                        },
                        {
                            "title":{
                                "en":"Are other SAP systems installed on the same server?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a323-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please indicate the available downtime window for these systems (e.g. R / 3, Enterprise Portal, APO, CRM, BW, SRM, XI, MDM)"
                                },
                                "type": "long-text",
                                "questionId": "RDBMS-a323-2"
                            }
                        },
                        {
                            "title":{
                                "en":"Which SAP-dependent systems are in use in the landscape? Please specify these in the \\&quot;Comments\\&quot; section (System / Release)."
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-a324"
                        },
                        {
                            "title":{
                                "en":"Are the SAP systems operated by hosting partners?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a325"
                        },
                        {
                            "title":{
                                "en":"Will your SAP system be available on a  24x7 basis"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a326"
                        },
                        {
                            "title":{
                                "en":"Have you configured high availability?"
                            },
                            "type":"boolean",
                            "subQuestions":[
                                {
                                    "questionId": "RDBMS-a327-1",
                                    "text": {
                                        "en": "Hardware" 
                                    }
                                },
                                {
                                    "questionId": "RDBMS-a327-2",
                                    "text": {
                                        "en": "DB cluster" 
                                    }
                                }
                            ]
                        }
                        
                    ]
                },
                {
                    "sectionName": {
                        "en": "4.Applications"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Are you running POS DM on BW and/or Integrated Planning? There are some restrictions in relation to the use of add-ons. For more information, see SAP notes 1600929 and 1648861."
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a401"
                        },
                        {
                            "title": {
                                "en": "Are you using SEM-BCS?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a402",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "If you use the component SEM-BCS, which version do you have? Please check also SAP Note 1648413"
                                },
                                "type": "short-text",
                                "questionId": "RDBMS-a403"
                            }
                        },
                        {
                            "title": {
                                "en": "Are you using any other IS or add-in that will prevent you from upgrading to BW 7.3 SP07?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a404"
                        },
                        {
                            "title": {
                                "en": "Do you have any other business applications running on the BW that would influence the outage window?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a405"
                        }
                    ]
                },
                {
                    "sectionName": {
                        "en": "5.Support Information"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Is the EarlyWatch Alert (EWA) implemented and available? See SAP note 1591839"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a501"
                        },
                        {
                            "title": {
                                "en": "Do you use the SAP Solution Manager?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a502-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please name the current release and enhancement package status"
                                },
                                "type": "short-text",
                                "questionId": "RDBMS-a502-2"
                            }
                        },
                        {
                            "title": {
                                "en": "Remote connection details (eg SAP OSS, VPN):"
                            },
                            "type":"boolean",
                            "subQuestions":[
                                {
                                    "questionId":"RDBMS-a503-1",
                                    "text":{"en":"Is the access to the server at any time (24x7) ensured?"}
                                },
                                {
                                    "questionId":"RDBMS-a503-2",
                                    "text":{"en":"Is your system ready to SAP remote connection according to the SAP Notes 35010 and 605795?"}
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Please provide connectivity details per server"
                            },
                            "type":"short-text",
                            "subQuestions":[
                                {
                                    "questionId":"RDBMS-a504-1",
                                    "text":{"en":"Hostname/IP Address"}
                                },
                                {
                                    "questionId":"RDBMS-a504-2",
                                    "text":{"en":"SAP Client"}
                                },
                                {
                                    "questionId":"RDBMS-a504-3",
                                    "text":{"en":"User-ID"}
                                },
                                {
                                    "questionId":"RDBMS-a504-4",
                                    "text":{"en":"Password"}
                                },
                                {
                                    "questionId":"RDBMS-a504-5",
                                    "text":{"en":"OS User-ID"}
                                },
                                {
                                    "questionId":"RDBMS-a504-6",
                                    "text":{"en":"OS Password"}
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Please provide additional hardware details per server"
                            },
                            "type":"short-text",
                            "subQuestions":[
                                {
                                    "questionId":"RDBMS-a505-1",
                                    "text":{"en":"Model/Make"}
                                },
                                {
                                    "questionId":"RDBMS-a505-2",
                                    "text":{"en":"No of CPU/speed"}
                                },
                                {
                                    "questionId":"RDBMS-a505-3",
                                    "text":{"en":"User-ID"}
                                },
                                {
                                    "questionId":"RDBMS-a505-4",
                                    "text":{"en":"Memory in GB"}
                                },
                                {
                                    "questionId":"RDBMS-a505-5",
                                    "text":{"en":"Hard disk storage"}
                                }
                            ]
                        }
                    ]
                },
                {
                    "sectionName": {
                        "en": "6.SAP HANA"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Is the Hardware of SAP HANA properly sized?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a601"
                        },
                        {
                            "title": {
                                "en": "Do you need help in sizing the HANA appliance? "
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a602"
                        },
                        {
                            "title": {
                                "en": "How many HANA appliances did you order?"
                            },
                            "type":"number",
                            "questionId":"RDBMS-a603"
                        },
                        {
                            "title": {
                                "en": "When do you expect the delivery of the HANA appliances by your hardware partner?"
                            },
                            "type":"short-text",
                            "questionId":"RDBMS-a604"
                        },
                        {
                            "title": {
                                "en": "Please provide the following Information about your SAP HANA hardware"
                            },
                            "type":"short-text",
                            "subQuestions":[
                                {
                                    "questionId":"RDBMS-a605-1",
                                    "text":{"en":"Server"}
                                },
                                {
                                    "questionId":"RDBMS-a605-2",
                                    "text":{"en":"Model/Make"}
                                },
                                {
                                    "questionId":"RDBMS-a605-3",
                                    "text":{"en":"No. Of CPU"}
                                },
                                {
                                    "questionId":"RDBMS-a605-4",
                                    "text":{"en":"RAM"}
                                },
                                {
                                    "questionId":"RDBMS-a605-5",
                                    "text":{"en":"Hard disk/Details"}
                                }
                            ]
                        }
                    ]
                },
                {
                    "sectionName": {
                        "en": "7.Additional Information"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Do you need help in testing?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a701-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Specify in which testing phase"
                                },
                                "type": "short-text",
                                "questionId": "RDBMS-a701-2"
                            }
                        },
                        {
                            "title": {
                                "en": "Do you need full-time onsite support after go-live? (note: the RDS post go-live support is limited to 6 days)"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-a702-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please indicate how long"
                                },
                                "type": "short-text",
                                "questionId": "RDBMS-a702-2"
                            }                            
                        },
                        {
                            "title": {
                                "en": "Do you need help in the operation management of the SAP HANA Appliance? (note: this is not part of the RDS)"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-a703"
                        },
                        {
                            "title": {
                                "en": "Do you need help in the installation and configuration of SAP BI-Java 7.30? (note: this is not part of the RDS)"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-a704"
                        },
                        {
                            "title": {
                                "en": "Do you need help in the installation and configuration of SAP front-end tools? (note: This is not part of the RDS)"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-a705"
                        },
                        {
                            "title": {
                                "en": "Do you need help in implementing a high availability solution of SAP NetWeaver BW? (note: this is not part of the RDS)"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-a706"
                        },
                        {
                            "title": {
                                "en": "Do you need to optimize your DB volume?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-a707",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please fill in the questions on the tab &lt;span style=\\&quot;font-weight:bold\\&quot;&gt;Data Volume Optimization&lt;/span&gt;. Do you need to support to the Optimization"
                                },
                                "type": "short-text",
                                "questionId": "RDBMS-a707-2"
                            }     
                        }
                    ]
                }
            ]
        },
        {
            "sectionName":{"en":"Data Volume Optimization"},
            "sections":[
                {
                    "sectionName": 
                    {
                        "en": "Data Volume Optimization"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "What is your PSA/Change log deletion process?"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-b101"
                        },
                        {
                            "title": {
                                "en": "Do you delete master data which is not being used on a regular basis?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b102"
                        },
                        {
                            "title": {
                                "en": "Have you analyze the size of your dimensions within all InfoCubes on a regular basis?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b103"
                        },
                        {
                            "title": {
                                "en": "Are the sizes of some dimension tables greater than 15% of the fact table?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b104"
                        },
                        {
                            "title": {
                                "en": "How large are the largest DSO&apos;s?"
                            },
                            "type":"short-text",
                            "questionId": "RDBMS-b105"
                        },
                        {
                            "title": {
                                "en": "Do you regularly reorganize BW workbooks which do not have any references?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b106"
                        },
                        {
                            "title": {
                                "en": "Do you regularly reorganize old BW bookmarks?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b107"
                        },
                        {
                            "title": {
                                "en": "Do you regularly delete unused BW queries?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b108"
                        },
                        {
                            "title": {
                                "en": "Do you check the usage of aggregates on a regular basis?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b109-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Do you delete unused aggregates?"
                                },
                                "type": "short-text",
                                "questionId": "RDBMS-b109-2"
                            }
                        },
                        {
                            "title": {
                                "en": "Do you make use InfoCube compression?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b110"
                        },
                        {
                            "title": {
                                "en": "BW Statistic: Do you delete RSDDSTAT* tables on a regular basis?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b111"
                        },
                        {
                            "title": {
                                "en": "RSTT Traces: Do you delete old traces tables on a regular basis?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b112"
                        },
                        {
                            "title": {
                                "en": "Do you check and delete old cache entries on a regular basis?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b113"
                        },
                        {
                            "title": {
                                "en": "Do you check and delete expired application logs on a regular basis?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b114"
                        },
                        {
                            "title": {
                                "en": "Do you archive or delete old IDocs?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b115"
                        },
                        {
                            "title": {
                                "en": "Do you delete old Idocs and monitorig?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b116"
                        },
                        {
                            "title": {
                                "en": "Do you delete old messages and parameters from BI Background Management on a regular basis?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b117"
                        },
                        {
                            "title": {
                                "en": "Do you archive request administration data?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b118"
                        },
                        {
                            "title": {
                                "en": "Do you archive or delete BI authorization protocols?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b119"
                        },
                        {
                            "title": {
                                "en": "Do you archive BI authorization change logs?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b120"
                        },
                        {
                            "title": {
                                "en": "Do you delete inconsistent error DTPs on a regular basis?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b121"
                        },
                        {
                            "title": {
                                "en": "Do your regularly remove old error logs?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b122"
                        },
                        {
                            "title": {
                                "en": "Do you regularly delete old process chain logs?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b123"
                        },
                        {
                            "title": {
                                "en": "Do you regularly delete old job logs?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b124"
                        },
                        {
                            "title": {
                                "en": "Do you regularly delete old DDIC logs?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b125"
                        },
                        {
                            "title": {
                                "en": "Do you delete old tRFC queues?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b126"
                        },
                        {
                            "title": {
                                "en": "Do you reorganize TemSe and Spool requests on a regular basis?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-b127"
                        }
                    ]
                }
            ]
        },
        {
            "sectionName":{"en":"SAP HANA Installation"},
            "sections":[
                {
                    "sectionName": 
                    {
                        "en": "SAP HANA Installation"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "How many instances should be installed?"
                            },
                            "type":"number",
                            "questionId": "RDBMS-c101"
                        },
                        {
                            "title": {
                                "en": "Is the HANA licence available?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-c102"
                        },
                        {
                            "title": {
                                "en": "Please confirm specifications and availability of hardware and software for SAP HANA (e.g. required Kernel and Add-on for SLT replication)"
                            },
                            "type":"long-text",
                            "questionId": "RDBMS-c103"
                        },
                        {
                            "title": {
                                "en": "Has the hardware verification been done? (Verify with Hardware Partner, if the SAP HANA appliance software is fully supplied, i.e. if the hardware partner ships the HW-Box together with a ready-installed SAP HANA database with latest SP level )"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-c104"
                        },
                        {
                            "title": {
                                "en": "If planned to be used: Is  the BO environment available? (Check availability for the SAP BO components (BO Enterprise server, Frontends, Data services (DS), etc), in case DS is used for replication and also, if any of the SAP BO Frontend clients will be used.)"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-c105"
                        }
                    ]
                }
            ]
        },
        {
            "sectionName":{"en":"Technical Upgrade"},
            "sections":[
                {
                    "sectionName": 
                    {
                        "en": "Technical Upgrade"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Is Cluster Installation used?"
                            },                            
                            "type":"boolean",
                            "questionId":"RDBMS-d101-1"
                        },
                        {
                            "title": {
                                "en": "Any hardware change during upgrade?"
                            },                            
                            "type":"boolean",
                            "questionId":"RDBMS-d101-2",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please specify new hardware details"
                                },
                                "type": "long-text",
                                "questionId": "RDBMS-d101-3"
                            }   
                        },
                        {
                            "title": {
                                "en": "Proposed Timeframe for BW Upgrade?"
                            },                            
                            "type":"long-text",
                            "questionId":"RDBMS-d102"
                        },
                        {
                            "title": {
                                "en": "Please indicate if your system has been upgraded in the past"
                            },                            
                            "type":"boolean",
                            "questionId":"RDBMS-d103-1",
                            "conditional":{
                                "condition":true,
                                "title":{
                                    "en":"Please state the Source &amp; Target releases"
                                },
                                "type":"short-text",
                                "questionId":"RDBMS-d103-2"
                            }
                        },
                        {
                            "title": {
                                "en": "List the data sources used by the BW system (Kind and number of data sources, frequency of update)"
                            },                            
                            "type":"long-text",
                            "questionId":"RDBMS-d104"
                        },
                        {
                            "title": {
                                "en": "Number of named and concurrent users for production server"
                            },                            
                            "type":"number",
                            "questionId":"RDBMS-d105"
                        },
                        {
                            "title": {
                                "en": "Are you planning for Unicode conversion along with upgrade?"
                            },                            
                            "type":"boolean",
                            "questionId":"RDBMS-d106"
                        },
                        {
                            "title": {
                                "en": "Have you implemented Business Process Simulation?"
                            },                            
                            "type":"boolean",
                            "questionId":"RDBMS-d107"
                        },
                        {
                            "title": {
                                "en": "Have you implemented Strategic Enterprise Management?"
                            },                            
                            "type":"boolean",
                            "questionId":"RDBMS-d108"
                        },
                        {
                            "title": {
                                "en": "What are types of Front-end Usage?"
                            },                            
                            "type":"short-text",
                            "subQuestions":[
                                {
                                    "questionId":"RDBMS-d109-1",
                                    "text":{
                                        "en":"SAPgui Version info"
                                    }
                                },
                                {
                                    "questionId":"RDBMS-d109-2",
                                    "text":{
                                        "en":"Webgui Version info"
                                    }
                                },
                                {
                                    "questionId":"RDBMS-d109-3",
                                    "text":{
                                        "en":"Portal Version info"
                                    }
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Please describe third party products used with SAP BW systems"
                            },                            
                            "type":"long-text",
                            "questionId":"RDBMS-d110"
                        },
                        {
                            "title": {
                                "en": "Please describe your LDAP usage"
                            },                            
                            "type":"short-text",
                            "subQuestions":[
                                {
                                    "questionId":"RDBMS-d111-1",
                                    "text":{
                                        "en":"Central"
                                    }
                                },
                                {
                                    "questionId":"RDBMS-d111-2",
                                    "text":{
                                        "en":"Individual"
                                    }
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Do you have inactive InfoCubes?"
                            },                            
                            "type":"boolean",
                            "questionId":"RDBMS-d112"
                        },
                        {
                            "title": {
                                "en": "Please Indicate Defect Management Tool deployed (SolMan, HP Quality Center,..) If none, would you like to setup Solution Manger for Test and Defect Management?"
                            },                            
                            "type":"long-text",
                            "questionId":"RDBMS-d113"
                        },
                        {
                            "title": {
                                "en": "Functional Test"
                            },                            
                            "type":"boolean",
                            "subQuestions":[
                                {
                                    "questionId":"RDBMS-d114-1",
                                    "text":{
                                        "en":"Would you like SAP to do Functional test execution (Integration Testing) for the technical upgrade?"
                                    }
                                },
                                {
                                    "questionId":"RDBMS-d114-2",
                                    "text":{
                                        "en":"Do you have defined test cases available?"
                                    }
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Would you like SAP to do Test Management (Strategizing, Planning, Monitoring and Reporting) for functional testing of technical upgrade?"
                            },                            
                            "type":"boolean",
                            "questionId":"RDBMS-d115"
                        },
                        {
                            "title": {
                                "en": "Interfaces to External or related systems (List Major Sub Systems)"
                            },                            
                            "type":"long-text",
                            "questionId":"RDBMS-d116"
                        },
                        {
                            "title": {
                                "en": "Please indicate if there are any other systems sharing the SAP operating system/ DBMS"
                            },                            
                            "type":"boolean",
                            "questionId":"RDBMS-d117"
                        },
                        {
                            "title": {
                                "en": "Maximum permissible downtime (in hrs)"
                            },                            
                            "type":"number",
                            "questionId":"RDBMS-d118"
                        },
                        {
                            "title": {
                                "en": "Please indicate if you have test systems for test/trial upgrade?"
                            },                            
                            "type":"boolean",
                            "questionId":"RDBMS-d119"
                        },
                        {
                            "title": {
                                "en": "Please indicate if your have any other on-going project/s that will impact the upgrade"
                            },                            
                            "type":"boolean",
                            "questionId":"RDBMS-d120"
                        }
                    ]
                }
            ]
        },
        {
            "sectionName":{"en":"Authorization Migration"},
            "sections":[
                {
                    "sectionName": 
                    {
                        "en": "Authorization Migration"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Please Answer"
                            },
                            "type":"number",
                            "subQuestions":[
                                {
                                    "questionId":"RDBMS-e101",
                                    "text":{
                                        "en":"Number of InfoProviders with queries and/or planning functionalities"
                                    }
                                },
                                {
                                    "questionId":"RDBMS-e102",
                                    "text":{
                                        "en":"Number of queries"
                                    }
                                },
                                {
                                    "questionId":"RDBMS-e103",
                                    "text":{
                                        "en":"Number of users"
                                    }
                                },
                                {
                                    "questionId":"RDBMS-e104",
                                    "text":{
                                        "en":"Number of roles with authorization objects belonging to object class RSR"
                                    }
                                },
                                {
                                    "questionId":"RDBMS-e105",
                                    "text":{
                                        "en":"Number of all roles with Planning objects (BPS/IP)"
                                    }
                                },
                                {
                                    "questionId":"RDBMS-e106",
                                    "text":{
                                        "en":"Number of RSR authorization objects (created in transaction RSSM)"
                                    }
                                },
                                {
                                    "questionId":"RDBMS-e107",
                                    "text":{
                                        "en":"Maximum dimensionality (Infoobjects per RSR authorization object without 0TCTAUTHH)"
                                    }
                                },
                                {
                                    "questionId":"RDBMS-e108",
                                    "text":{
                                        "en":"Number of implemented applications (or products or processes) eg. Sales Reporting, Cost Center Accounting reporting, etc"
                                    }
                                }
                            ]
                        }                       
                    ]
                },
                {
                    "sectionName": 
                    {
                        "en": "Remarks or further information about your current BW Reporting Authorization concept (eg. using generation of authorizations, using variables ($VARNAME), …)"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "a) Maximum number of fields in RSR Authorization objects"
                            },
                            "type":"number",
                            "questionId":"RDBMS-e109-1"
                        },
                        {
                            "title": {
                                "en": "b) Generation via DSO?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-e109-2"
                        },
                        {
                            "title": {
                                "en": "c) Variables in Authorization?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-e109-3"
                        },
                        {
                            "title": {
                                "en": "d) Special customer coding or solutions?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-e109-4",
                            "conditional":{
                                "condition": true,
                                "title": {
                                    "en": "Please specify"
                                },
                                "type": "long-text",
                                "questionId": "RDBMS-e109-5"
                            }
                        }                     
                    ]
                }
            ]
        },
        {
            "sectionName":{"en":"Functional Upgrade"},
            "sections":[
                {
                    "sectionName": 
                    {
                        "en": "1.BW Landscape / SAP Source Systems"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Is there more than one source system connected to your production BW System?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-f101-1",
                            "conditional":{
                                "condition": true,
                                "title": {
                                    "en": "List the Source Systems + Release"
                                },
                                "type": "long-text",
                                "questionId": "RDBMS-f101-2"
                            }
                        },                        
                        {
                            "title": {
                                "en": "Have you used the user exits for transaction data, master data, text or hierarchies?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-f102"
                        },
                        {
                            "title": {
                                "en": "Modifications"
                            },
                            "type":"boolean",
                            "subQuestions":[
                                {
                                    "text":{"en":"Have you made any modifications to SAP standard datasource function modules"},
                                    "questionId": "RDBMS-f103-1"
                                },
                                {
                                    "text":{"en":"Is so to what extent"},
                                    "questionId": "RDBMS-f103-2"
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Do you have non-SAP source systems feeds into BW?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-f104-1",
                            "conditional":{
                                "condition": true,
                                "title": {
                                    "en": "which ones"
                                },
                                "type": "long-text",
                                "questionId": "RDBMS-f104-2"
                            }
                        },
                        {
                            "title": {
                                "en": "Do you use the delta handling when possible?"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-f105"
                        },
                        {
                            "title": {
                                "en": "Do you use the Open Hub Service? (Remark: With NW BW 7.X it is no longer possible to create new InfoSpokes. You can still use, display, change or delete existing InfoSpokes)"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-f106"
                        },
                        {
                            "title": {
                                "en": "Do you actively make use of BW statistics? (Remark: A new statistics concept was added in NW BW 7.0.)"
                            },
                            "type":"boolean",
                            "questionId": "RDBMS-f107"
                        }
                    ]
                },
                {
                    "sectionName": 
                    {
                        "en": "2.Master Data"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Do you use hierarchies? (Remark:  With NW BW 7.3 hierarchies are integrated into the BW 7.0 Data Flow)"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f201"
                        }
                    ]
                },
                {
                    "sectionName": 
                    {
                        "en": "3.InfoProvider"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Have you documented the data model of all your InfoCubes, DSO object and addressed master data?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f301"
                        },
                        {
                            "title": {
                                "en": "How many InfoProviders do you have?"
                            },
                            "type":"number",
                            "questionId":"RDBMS-f302"
                        },                        
                        {
                            "title": {
                                "en": "Do you use MultiProviders for reporting?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f303"
                        },                        
                        {
                            "title": {
                                "en": "Do you use DSO objects?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f304"
                        },
                        {
                            "title": {
                                "en": "Do you need to delete records out of your InfoCubes/DSO?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f305"
                        },
                        {
                            "title": {
                                "en": "Do you fill InfoCubes or DSO objects from different InfoSources?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f306"
                        },
                        {
                            "title": {
                                "en": "Do you use time dependent master data as navigational attributes?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f307"                            
                        },
                        {
                            "title": {
                                "en": "Do you report directly on the DSO object? Please explain the reporting needs."
                            },
                            "type":"long-text",
                            "questionId":"RDBMS-f308"                            
                        },
                        {
                            "title": {
                                "en": "Is the DSO used for operational reporting (line item) or as a consolidation point in the loading process?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f309"                            
                        },
                        {
                            "title": {
                                "en": "Are you using table interface? (Remark: Not supported in BW NW 7.3)"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f310"                            
                        },
                        {
                            "title": {
                                "en": "Are you using MOLAP functionality? (Remark: Not supported in BW NW 7.3)"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f311"                            
                        },
                        {
                            "title": {
                                "en": "Are you using POS type data?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f312"                            
                        }
                    ]
                },
                {
                    "sectionName": 
                    {
                        "en": "4.Datasources / Data Staging"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Are you using still the BW 3.X data flow? (Remark: Data Flow Migration tool available with NW BW 7.3)"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f401"
                        },
                        {
                            "title": {
                                "en": "What is your main strategy in uploading data?"
                            },
                            "type": "select",
                            "multipleAllowed": false,
                            "questionId": "RDBMS-f402",
                            "options": [
                                {
                                    "value": "Daily",
                                    "text": {
                                        "en": "Daily" 
                                    }
                                },
                                {
                                    "value": "Weekly",
                                    "text": {
                                        "en": "Weekly" 
                                    }
                                },
                                {
                                    "value": "Other",
                                    "text": {
                                        "en": "Other" 
                                    }
                                },
                                {
                                    "value": "No main strategy",
                                    "text": {
                                        "en": "No main strategy" 
                                    }
                                }
                            ]
                        },                       
                        {
                            "title": {
                                "en": "Do you make extensive use of start routines and routines using ABAP code? (Remark: ABAP in NW BW 7.X requires ABAP OO)"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f403"
                        },
                        {
                            "title": {
                                "en": "Do you use complex transfer rules to validate or enhance data?"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f404"
                        },                        
                        {
                            "title": {
                                "en": "Number of individual transfer and update rules to be migrated to transformations"
                            },
                            "type": "number",
                            "subQuestions":[
                                {
                                    "text":{"en":"Low Complexity (direct mappings with very little or no coding)"},
                                    "questionId":"RDBMS-f405-1"
                                },
                                {
                                    "text":{"en":"Medium Complexity (mapping with some ABAP coding)"},
                                    "questionId":"RDBMS-f405-2"
                                },
                                {
                                    "text":{"en":"High Complexity  (mapping with complex ABAP coding)"},
                                    "questionId":"RDBMS-f405-3"
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Number of Process Chains to be adjusted"
                            },
                            "type": "number",
                            "subQuestions":[
                                {
                                    "text":{"en":"Low Complexity"},
                                    "questionId":"RDBMS-f406-1"
                                },
                                {
                                    "text":{"en":"Medium Complexity"},
                                    "questionId":"RDBMS-f406-2"
                                },
                                {
                                    "text":{"en":"High Complexity"},
                                    "questionId":"RDBMS-f406-3"
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Do you use conversion exits?"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f407"
                        },
                        {
                            "title": {
                                "en": "Do you have any requirements to write your own update routines into InfoCubes or DSO objects?"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f408"
                        },
                        {
                            "title": {
                                "en": "Do you use Process Chains to organize/schedule loads into BW?  (Remark: Process Chains must be used in NW BW 7.3.  Advanced Process Chain Monitor is available with BW NW 7.3.)"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f409"
                        }, 
                        {
                            "title": {
                                "en": "Do you use selection criteria’s within InfoPackages?"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f410"
                        }, 
                        {
                            "title": {
                                "en": "Do you use selection variables within selection criteria for InfoPackages?"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f411"
                        }, 
                        {
                            "title": {
                                "en": "Do you have a need to execute different process chains depending on results of prior steps?"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f412"
                        },
                        {
                            "title": {
                                "en": "Are you using any third party reporting, ETL, scheduling, monitoring, etc. tools.?"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f413"
                        },
                        {
                            "title": {
                                "en": "Are you using infopackage groups? (Remark: No longer supported, must be migrated to process chains)"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f414"
                        },
                        {
                            "title": {
                                "en": "Are you using the reporting agent? (Remark: Is obsolte in NW BW 7.3)"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f415"
                        },
                        {
                            "title": {
                                "en": "Are you using event chains? (Remark: Is obsolte in NW BW 7.3)"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f416"
                        },
                        {
                            "title": {
                                "en": "Do you use special mapping routines in several transfer rules?"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f417"
                        },
                        {
                            "title": {
                                "en": "Do you use the “start routine” in update rules?"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f418"
                        },
                        {
                            "title": {
                                "en": "Do you use the “start routine” in transformations?"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f419"
                        },
                        {
                            "title": {
                                "en": "Are using 3rd party extractors?"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f420"
                        },
                        {
                            "title": {
                                "en": "Are you using return tables? (Remark: No longer supported in NW BW 7.X)"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f421"
                        },
                        {
                            "title": {
                                "en": "In your custom ABAP code are you utilizing standard SAP Function Modules?"
                            },
                            "type": "boolean",
                            "questionId": "RDBMS-f422"
                        },                        
                        {
                            "title": {
                                "en": "Does the customer have world wide operations and users all over the world?"
                            },
                            "type": "boolean",
                            "questionId":"RDBMS-f423"
                        }
                    ]
                },
                {
                    "sectionName": 
                    {
                        "en": "5.Front End"
                    },
                    "questions": [       
                        {
                            "title": {
                                "en": "Do you use the BW BEx Browser? (Remark: No longer supported with NW BW 7.X)"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f501"
                        },
                        {
                            "title": {
                                "en": "Do you use the reporting agent functionality?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f502-1",
                            "conditional":{
                                "condition":true,
                                "title":{
                                    "en":"How many queries do you define for reporting agent? (Remark: No longer supported with NW BW 7.X)"
                                },
                                "type":"short-text",
                                "questionId":"RDBMS-f502-2"
                            }
                        },
                        {
                            "title": {
                                "en": "Are you using download scheduler? (Remark: No longer supported with NW BW 7.X)"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f503"
                        },
                        {
                            "title": {
                                "en": "Are you using GIS in BEx analyzer? (Remark: No longer supported with NW BW 7.X)"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f504"
                        },
                        {
                            "title": {
                                "en": "Do you use the role menu in the 3.x Web Application Designer (Remark: Does no longer exists in NW BW 7.X.  Needs to be migrated to portal roles in 7.X frontend)"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-f505"
                        }
                    ]
                }
            ]
        },
        {
            "sectionName":{"en":"Unicode Conversion"},
            "sections":[
                {
                    "sectionName": 
                    {
                        "en": "Unicode Conversion"
                    },
                    "questions": [
                         {
                            "title": {
                                "en": "What is the acceptable business downtime?"
                            },
                            "type":"short-text",
                            "questionId": "RDBMS-g101"
                        },
                        {
                            "title": {
                                "en": "Please list all RFC-MDMP interfaces with:"
                            },
                            "type":"short-text",
                            "subQuestions":[
                                {
                                    "text":{"en":"name"},
                                    "questionId":"RDBMS-g102-1"
                                },
                                {
                                    "text":{"en":"type"},
                                    "questionId":"RDBMS-g102-2"
                                },
                                {
                                    "text":{"en":"code page handling"},
                                    "questionId":"RDBMS-g102-3"
                                },
                                {
                                    "text":{"en":"language requirements"},
                                    "questionId":"RDBMS-g102-4"
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Please list all ALE-MDMP interfaces with:"
                            },
                            "type":"short-text",
                            "subQuestions":[
                                {
                                    "text":{"en":"name"},
                                    "questionId":"RDBMS-g103-1"
                                },
                                {
                                    "text":{"en":"type"},
                                    "questionId":"RDBMS-g103-2"
                                },
                                {
                                    "text":{"en":"code page handling"},
                                    "questionId":"RDBMS-g103-3"
                                },
                                {
                                    "text":{"en":"language requirements"},
                                    "questionId":"RDBMS-g103-4"
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Please list all RFC-SCP interfaces with:"
                            },
                            "type":"short-text",
                            "subQuestions":[
                                {
                                    "text":{"en":"name"},
                                    "questionId":"RDBMS-g104-1"
                                },
                                {
                                    "text":{"en":"type"},
                                    "questionId":"RDBMS-g104-2"
                                },
                                {
                                    "text":{"en":"code page handling"},
                                    "questionId":"RDBMS-g104-3"
                                },
                                {
                                    "text":{"en":"language requirements"},
                                    "questionId":"RDBMS-g104-4"
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Please list all ALE-SCP interfaces with:"
                            },
                            "type":"short-text",
                            "subQuestions":[
                                {
                                    "text":{"en":"name"},
                                    "questionId":"RDBMS-g105-1"
                                },
                                {
                                    "text":{"en":"type"},
                                    "questionId":"RDBMS-g105-2"
                                },
                                {
                                    "text":{"en":"code page handling"},
                                    "questionId":"RDBMS-g105-3"
                                },
                                {
                                    "text":{"en":"language requirements"},
                                    "questionId":"RDBMS-g105-4"
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Please list all FILE interfaces with:"
                            },
                            "type":"short-text",
                            "subQuestions":[
                                {
                                    "text":{"en":"name"},
                                    "questionId":"RDBMS-g106-1"
                                },
                                {
                                    "text":{"en":"type"},
                                    "questionId":"RDBMS-g106-2"
                                },
                                {
                                    "text":{"en":"code page handling"},
                                    "questionId":"RDBMS-g106-3"
                                },
                                {
                                    "text":{"en":"language requirements"},
                                    "questionId":"RDBMS-g106-4"
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Please list number of UCCHECK Errors:"
                            },
                            "type":"number",
                            "questionId":"RDBMS-g107"
                        },
                        {
                            "title": {
                                "en": "Please list number of custom objects:"
                            },
                            "type":"number",
                            "questionId":"RDBMS-g108"
                        }
                    ]
                }
            ]
        },
        {
            "sectionName":{"en":"Database Migration"},
            "sections":[
                {
                    "sectionName": 
                    {
                        "en": "Database Migration"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Do you use third-party tools (Reporting, ETL, Scheduling, Monitoring)?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-h101-1",
                            "conditional":{
                                "condition":true,
                                "title":{
                                    "en":"Specify these"
                                },
                                "type":"long-text",
                                "questionId":"RDBMS-h101-2"
                            }
                        },
                        {
                            "title": {
                                "en": "Do you plan to migrate other systems than your productive system?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-h102"
                        },
                        {
                            "title": {
                                "en": "Do you plan to rename the system ID (SID) of your productive BW system during migration?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-h103"
                        },
                        {
                            "title": {
                                "en": "Did you order the SAP OS/DB MIGRATION CHECK Service? The service can be found under the following link: https://service.sap.com/osdbmigration"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-h104"
                        },
                        {
                            "title": {
                                "en": "Would you like to use your SAP BW system as source system for other data warehouse systems?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-h105-1",
                            "conditional":{
                                "condition":true,
                                "title":{
                                    "en":"Please indicate the usage"
                                },
                                "type":"long-text",
                                "questionId":"RDBMS-h105-2"
                            }
                        },
                        {
                            "title": {
                                "en": "Do you use non-SAP BW source systems?"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-h106",
                            "conditional":{
                                "condition":true,
                                "title":{
                                    "en":"What kind of non-SAP BW source systems? Please specify these"
                                },
                                "type":"long-text",
                                "questionId":"RDBMS-h107"
                            }
                        },
                        {
                            "title": {
                                "en": "How many non-SAP BW source systems and how many SAP BW source systems are in use? Please specify these:"
                            },
                            "type":"long-text",
                            "questionId":"RDBMS-h108"
                        },
                        {
                            "title": {
                                "en": "How many InfoProviders are intended to convert to HANA-optimized InfoProviders? Please specify these:"
                            },
                            "type":"long-text",
                            "questionId":"RDBMS-h109"
                        },
                        {
                            "title": {
                                "en": "Do you need support in installing additional dialog instances after migration? (note: this is not part of the service and must be priced separately)"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-h110"
                        },
                        {
                            "title": {
                                "en": "Do you need to tune the performance of the migrated system? (note: this is not part of the service and must be priced separately)"
                            },
                            "type":"boolean",
                            "questionId":"RDBMS-h111"
                        }
                    ]
                }
            ]
        }
    ],
    "answers" : {
    }
};*/

var obj = {
    "questionnaire":     [
        {
            "sectionName": {
                "en": "Scoping General" 
            },
            "sections": [
                {
                    "sectionName": {
                        "en": "1. Company Data"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Company name"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b101"
                        },
                        {
                            "title": {
                                "en": "Customer number"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b102"
                        },
                        {
                            "title": {
                                "en": "Installation number"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b103"
                        },
                        {
                            "title": {
                                "en": "SAP Client Partner/SAM"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b104"
                        },
                        {
                            "title": {
                                "en": "Primary contact person"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b105"
                        },
                        {
                            "title": {
                                "en": "Primary customer contact details(address, email, telephone, ...)"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b106"
                        }
                    ]
                },
                {
                    "sectionName": {
                        "en": "2. Customer contacts(if applicate)"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Project Manager  (email, telephone)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b201"
                        },
                        {
                            "title": {
                                "en": "Business Lead(Decision Maker)  (email, telephone)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b202"
                        },
                        {
                            "title": {
                                "en": "Business Subject Matter Experts  (email, telephone)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b203"
                        },
                        {
                            "title": {
                                "en": "Business Super User and Master Trainer (Power user) (email, telephone)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b204"
                        },
                        {
                            "title": {
                                "en": "IT Functional Lead, Master data (email, telephone)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b205"
                        },
                        {
                            "title": {
                                "en": "IT Development and Reporting (email, telephone)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b206"
                        },
                        {
                            "title": {
                                "en": "Basis Staff/Security/Hosting partner (email, telephone)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b207"
                        },
                        {
                            "title": {
                                "en": "Organization change management (email, telephone)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b208"
                        }                        
                    ]
                },
                {
                    "sectionName": {
                        "en": "3. General Landscape"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "What is the SAP Landscape layout? Please enrich the information with available documentation"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b301"
                        },    
                        {
                            "title": {
                                "en": "List the SAP product release involved (e.g ECC6.0, SRM, SCM)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b302"
                        },
                        {
                            "title": {
                                "en": "List the type of systems used in the transport landscape of SAP system (e.g. DEV, QA,…, PROD)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b303"
                        },               
                        {
                            "title": {
                                "en": "Please specify the database and version used (If the landscape is using heterogeneous database, please specify for each system)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b304"
                        },
                        {
                            "title": {
                                "en": "DB Size (in GB) per system of the landscape, both used and allocated"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b305"
                        },
                        {
                            "title": {
                                "en": "Please specify the operating system and version used (If the landscape is using heterogeneous OS, please specify for each system)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b306"
                        },
                        {
                            "title": {
                                "en": "Please provide db size w/o PSAPTEMP, PSAPROLL/PSAPUNDO"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b307"
                        },
                        {
                            "title": {
                                "en": "Production SID"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b308"
                        },
                        {
                            "title": {
                                "en": "Please indicate the current SAP kernel and patch versions of the source systems:"
                            },
                            "type": "short-text",
                            "subQuestions": [
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b309-1",
                                    "text": {
                                        "en": "SAP_ABA" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b309-2",
                                    "text": {
                                        "en": "SAP_BASIS" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b309-3",
                                    "text": {
                                        "en": "ST-PI" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b309-4",
                                    "text": {
                                        "en": "SAP_BW" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b309-5",
                                    "text": {
                                        "en": "FINBASIS" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b309-6",
                                    "text": {
                                        "en": "BW_CONT" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b309-7",
                                    "text": {
                                        "en": "SEM_BW" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b309-8",
                                    "text": {
                                        "en": "SAP kernel" 
                                    }
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Do you use the your SAP system in a multiple time zone environment?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b310"
                        },
                        {
                            "title": {
                                "en": "Are other SAP systems installed on the same server?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b311-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please indicate the available downtime window for these systems (e.g. ECC, Enterprise Portal, APO, CRM, BW, SRM, XI, MDM)"
                                },
                                "type": "long-text",
                                "questionId": "RDS-DB-MIGRATION-TO-ASE-b311-2"
                            }
                        },
                        {
                            "title": {
                                "en": "Which SAP-dependent systems are in use in the landscape? Please specify these in the 'Comments' section (System / Release)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b312"
                        },
                        {
                            "title": {
                                "en": "Are the SAP systems operated by hosting partners?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b313-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please specify the hosting partner"
                                },
                                "type": "short-text",
                                "questionId": "RDS-DB-MIGRATION-TO-ASE-b313-2"
                            }
                        },
                        {
                            "title": {
                                "en": "Will your SAP system be available on a  24x7 basis?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b314"
                        },
                        {
                            "title": {
                                "en": "Have you configured high availability?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b315-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please specify Hardware / DB cluster"
                                },
                                "type": "long-text",
                                "questionId": "RDS-DB-MIGRATION-TO-ASE-b315-2"
                            }
                        },
                        {
                            "title": {
                                "en": "Describe your storage system - SAN / NAS"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b316"
                        },
                        {
                            "title": {
                                "en": "Which filesystems are used for the database?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b317"
                        },
                        {
                            "title": {
                                "en": "List sapgui version / patch level"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b318"
                        },
                        {
                            "title": {
                                "en": "List of third party tools used in sap environment"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b319"
                        },
                        {
                            "title": {
                                "en": "Do you use any data compression features in your database?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b320-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please provide details"
                                },
                                "type": "long-text",
                                "questionId": "RDS-DB-MIGRATION-TO-ASE-b320-2"
                            }
                        },
                        {
                            "title": {
                                "en": "Please specify the backup procedure (online, offline, other tools)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b321"
                        }
                    ]
                },
                {
                    "sectionName": {
                        "en": "4. Interfaces (Optional)"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "How many interfaces are in use?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b401"
                        },
                        {
                            "title": {
                                "en": "Can you supply a complete list of the interfaces?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b402"
                        },
                        {
                            "title": {
                                "en": "How many interfaces do not use RFC(SM59)?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b403"
                        },
                        {
                            "title": {
                                "en": "What are the types of interfaces, inbound/outbound (RFC, ALE, IDOC, other)?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b404"
                        },
                        {
                            "title": {
                                "en": "Have those interfaces been developed by you or are they third-party products / vendor?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b405"
                        },
                        {
                            "title": {
                                "en": "Which programming languages have been used for self-developed interfaces (e.g. C++, JAVA)?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b406"
                        },
                        {
                            "title": {
                                "en": "What are the code pages for the other systems that are interfacing with SAP ?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b407"
                        },
                        {
                            "title": {
                                "en": "Do you have any other business applications running with SAP applications that would influence the outage window?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b408"
                        }
                    ]
                },
                {
                    "sectionName": {
                        "en": "5. Support information"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Is the EarlyWatch Alert (EWA) implemented and available? See SAP note 1591839."
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b501"
                        },
                        {
                            "title": {
                                "en": "Do you use the SAP Solution Manager?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b502-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please name the current release and enhancement package status"
                                },
                                "type": "long-text",
                                "questionId": "RDS-DB-MIGRATION-TO-ASE-b502-2"
                            }
                        },
                        {
                            "title": {
                                "en": "Remote connection details (eg SAP OSS, VPN): Is the access to the server at any time (24x7) ensured? Is your system ready to SAP remote connection according to the SAP Notes 35010 and 605795?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b503"
                        },
                        {
                            "title": {
                                "en": "Please provide connectivity details per server (Hostname/IP Address, SAP Client, User-ID, Password, OS User-ID, OS Password)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b504"
                        },
                        {
                            "title": {
                                "en": "Please provide the following Information about your Source system (Application and Database) hardware (please specify these in the 'Comments' section):"
                            },
                            "type": "long-text",
                            "subQuestions": [
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b505-1",
                                    "text": {
                                        "en": "Server" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b505-2",
                                    "text": {
                                        "en": "Model/Make" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b505-3",
                                    "text": {
                                        "en": "Operating system and version" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b505-4",
                                    "text": {
                                        "en": "CPU Type" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b505-5",
                                    "text": {
                                        "en": "No. Of CPU" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b505-6",
                                    "text": {
                                        "en": "RAM" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b505-7",
                                    "text": {
                                        "en": "Hard disk/Details" 
                                    }
                                }
                            ]
                        },
                        {
                            "title": {
                                "en": "Please provide the following Information about your Target system (Application and Database) hardware (please specify these in the 'Comments' section):"
                            },
                            "type": "long-text",
                            "subQuestions": [
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b506-1",
                                    "text": {
                                        "en": "Server" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b506-2",
                                    "text": {
                                        "en": "Model/Make" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b506-3",
                                    "text": {
                                        "en": "Operating system and version" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b506-4",
                                    "text": {
                                        "en": "CPU Type" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b506-5",
                                    "text": {
                                        "en": "No. Of CPU" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b506-6",
                                    "text": {
                                        "en": "RAM" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-b506-7",
                                    "text": {
                                        "en": "Hard disk/Details" 
                                    }
                                }
                            ]
                        }                        
                    ]
                },
                {
                    "sectionName": {
                        "en": "6. Additional information"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Proposed Migration Project Start Date?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b601"
                        },
                        {
                            "title": {
                                "en": "Planned Productive Cutover Weekend?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b602"
                        },
                        {
                            "title": {
                                "en": "Do you need help in testing? Specify in which testing phase"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b603"
                        },
                        {
                            "title": {
                                "en": "Do you need full-time onsite support after go-live? (note: the RDS doesn't include post go-live support). Please indicate how long"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b604"
                        },
                        {
                            "title": {
                                "en": "Do you need help in the installation and configuration of SAP front-end tools? (note: This is not part of the RDS)"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b605"
                        },
                        {
                            "title": {
                                "en": "Do you need help in implementing a high availability solution of SAP NetWeaver systems? (note: this is not part of the RDS)."
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b606"
                        },
                        {
                            "title": {
                                "en": "Do you need to optimize your DB volume?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b607"
                        },
                        {
                            "title": {
                                "en": "Do you use third-party products for testing? Please specify"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b608"
                        },
                        {
                            "title": {
                                "en": "Do you have testing scripts?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b609"
                        },
                        {
                            "title": {
                                "en": "Are testing procedures documented?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b610"
                        },
                        {
                            "title": {
                                "en": "Are interfaces tested?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b611"
                        },
                        {
                            "title": {
                                "en": "Do you use third-party products for a printing solution?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b612"
                        },
                        {
                            "title": {
                                "en": "What fax solution do you use?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b613"
                        },
                        {
                            "title": {
                                "en": "Do you print barcodes?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b614"
                        },
                        {
                            "title": {
                                "en": "Do you currently print forms or reports in double-byte languages?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b615"
                        },
                        {
                            "title": {
                                "en": "Please include any additional information you think is important for SAP to understand your project as we examine the information"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-b616"
                        }                        
                    ]
                }
            ]
        },
        {
            "sectionName": {
                "en": "DB Migration" 
            },
            "sections": [
                {
                    "sectionName": {
                        "en": "Questions"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Is the hardware for SAP Sybase ASE properly sized?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c101"
                        },
                        {
                            "title": {
                                "en": "Do you need help in sizing the SAP Sybase ASE server?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c102"
                        }, 
                        {
                            "title": {
                                "en": "When do you expect the delivery of new servers by your hardware partner?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c103"
                        },
                        {
                            "title": {
                                "en": "Do you use third-party tools (Reporting, ETL, Scheduling, Monitoring)? Specify these in the 'Comments' section"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c104"
                        }, 
                        {
                            "title": {
                                "en": "Do you plan to migrate other systems than your productive system?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c105"
                        }, 
                        {
                            "title": {
                                "en": "Do you plan to rename the system ID (SID) of your productive system during migration?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c106"
                        },
                        {
                            "title": {
                                "en": "Did you order the SAP OS/DB MIGRATION CHECK Service? The service can be found under the following link: https://service.sap.com/osdbmigration"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c107"
                        },
                        {
                            "title": {
                                "en": "Are you changing operating systems (e.g. AIX, HPUX, Solaris, Windows, AS400, zOS)?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c108"
                        },
                        {
                            "title": {
                                "en": "Are you planning an upgrade in tandem with your migration?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c109"
                        },
                        {
                            "title": {
                                "en": "Is a unicode conversion planned with the database migration?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c110"
                        },
                        {
                            "title": {
                                "en": "How much downtime can the business tolerate?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c111"
                        },
                        {
                            "title": {
                                "en": "Do you need support in installing additional dialog instances after migration? (note: this is not part of the service and must be priced separately)"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c112"
                        },
                        {
                            "title": {
                                "en": "Do you need to tune the performance of the migrated system? (note: this is not part of the service and must be priced separately)"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c113"
                        },
                        {
                            "title": {
                                "en": "How many SAPS does the corresponding Productive System have?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c114"
                        },
                        {
                            "title": {
                                "en": "What't the average CPU and Memory usage of the Database Server?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c115"
                        },
                        {
                            "title": {
                                "en": "How many concurrent users are working with the productive system?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c116"
                        },
                        {
                            "title": {
                                "en": "List 10 largest tables from production system. Also, provide a file with a list of top 500 tables"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c117"
                        },
                        {
                            "title": {
                                "en": "List the name of Archived Tables &amp; Objects, frequency (weekly/monthly) and volume of data archived per month"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-c118"
                        }                      
                    ]
                }
            ]
        },
        {
            "sectionName": {
                "en": "Unicode Conversion" 
            },
            "sections": [
                {
                    "sectionName": {
                        "en": "Questions"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "What is the acceptable business downtime?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d101"
                        },
                        {
                            "title": {
                                "en": "Please list all RFC-MDMP interfaces with name/type/code page handling/language requirements"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d102"
                        },
                        {
                            "title": {
                                "en": "Please list all ALE-MDMP interfaces with name/type/code page handling/language requirements"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d103"
                        },
                        {
                            "title": {
                                "en": "Please list all RFC-SCP interfaces with name/type/code page handling/language requirements"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d104"
                        },
                        {
                            "title": {
                                "en": "Please list all ALE-SCP interfaces with name/type/code page handling/language requirements"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d105"
                        },  
                        {
                            "title": {
                                "en": "Please list all FILE interfaces with name/type/code page handling/language requirements"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d106"
                        },
                        {
                            "title": {
                                "en": "Please list number of custom objects"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d107"
                        },
                        {
                            "title": {
                                "en": "Has customer/modified code been made Unicode compliant?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d108"
                        },
                        {
                            "title": {
                                "en": "How many programs developed by you are in use?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d109"
                        },   
                        {
                            "title": {
                                "en": "Have the above been completely developed by you or are they based on copies of SAP coding?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d110"
                        },
                        {
                            "title": {
                                "en": "Have you run UCCHECK to determine the extent of non-unicode compliant programs?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d111-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please list the number of UCCHECK errors"
                                },
                                "type": "short-text",
                                "questionId": "RDS-DB-MIGRATION-TO-ASE-d111-2"
                            }
                        },   
                        {
                            "title": {
                                "en": "Which code page are you using? List contents of Table TCPDB"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d112"
                        }, 
                        {
                            "title": {
                                "en": "Which languages are installed?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d113"
                        }, 
                        {
                            "title": {
                                "en": "Are you running periodic supplementations on all languages?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d114"
                        },
                        {
                            "title": {
                                "en": "Please specify if you use HR / ESS / MSS functionality"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d115"
                        },
                        {
                            "title": {
                                "en": "Please specify if you use SAP office functionality"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d116"
                        },
                        {
                            "title": {
                                "en": "Please specify if you use SAP translation environment (transaction SE63)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-d117"
                        }                            
                    ]
                }
            ]
        },
        {
            "sectionName": {
                "en": "Technical EHP" 
            },
            "sections": [
                {
                    "sectionName": {
                        "en": "Questions"
                    },
                    "questions": [
                        {
                            "title": {
                                "en": "Type of EHP Implementation - Technical or Functional?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e101"
                        },
                        {
                            "title": {
                                "en": "Please indicate if your system has any previous version of EHP (EHP1/EHP2/..) installed?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e102"
                        }, 
                        {
                            "title": {
                                "en": "Specify the target EHP level for SAP ERP or Neweaver system"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e103"
                        },
                        {
                            "title": {
                                "en": "List the SAP Solutions that you are planning for an EHP update or Install"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e104"
                        },
                        {
                            "title": {
                                "en": "For EHP update, list all installed usage types and SPS levels"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e105"
                        },
                        {
                            "title": {
                                "en": "Is a Cluster installation used? Any hardware change during upgrade? (If yes, please specify new hardware details)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e106"
                        }, 
                        {
                            "title": {
                                "en": "Proposed Timeframe for EHP update?"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e107"
                        },
                        {
                            "title": {
                                "en": "Please indicate if your system has been upgraded in the past"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e108-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please state the Source &amp; Target releases"
                                },
                                "type": "long-text",
                                "questionId": "RDS-DB-MIGRATION-TO-ASE-e108-2"
                            }
                        },  
                        {
                            "title": {
                                "en": "Do you use any Country Version / Industry Solutions?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e109"
                        },
                        {
                            "title": {
                                "en": "Do you have third party/additional add-ons in the system?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e110-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please provide the name and version"
                                },
                                "type": "long-text",
                                "questionId": "RDS-DB-MIGRATION-TO-ASE-e110-2"
                            }
                        },  
                        {
                            "title": {
                                "en": "Do you want to retain the above mentioned add-on after EHP installation?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e111"
                        },
                        {
                            "title": {
                                "en": "Please indicate if you use any automated testing tools?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e112-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Please specify the name of the tool"
                                },
                                "type": "long-text",
                                "questionId": "RDS-DB-MIGRATION-TO-ASE-e112-2"
                            }
                        },     
                        {
                            "title": {
                                "en": "What are types of Front-end Usage? (SAPgui Version info, Webgui Version info, Portal Version info)"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e113"
                        },  
                        {
                            "title": {
                                "en": "Do you use Treasury?(in case you use Transaction Management, please fill in additional questionnaire for Treasury Migration) The additional questionnaire will be shared on confirmation"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e114"
                        },
                        {
                            "title": {
                                "en": "Do you use Fund Management?(in case you use Fund Management, please fill in additional questionnaire for Treasury Migration) The additional questionnaire will be shared on confirmation"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e115"
                        },
                        {
                            "title": {
                                "en": "Do you use HR Scenarios (ESS/MSS)?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e116"
                        },
                        {
                            "title": {
                                "en": "If ESS/MSS is implemented on a Portal , Please specify the version of Enterprise Portal"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e117"
                        }, 
                        {
                            "title": {
                                "en": "EHP installer allows selective installation or complete installation. Please provide the business functions to choose in case of 'Selective Installation' at the time of realization"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e118"
                        }, 
                        {
                            "title": {
                                "en": "Please specify the solution Manager Patch and version Details"
                            },
                            "type": "long-text",
                            "subQuestions": [
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-e119-1",
                                    "text": {
                                        "en": "SAP_BASIS" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-e119-2",
                                    "text": {
                                        "en": "ST-ICO" 
                                    }
                                },
                                {
                                    "questionId": "RDS-DB-MIGRATION-TO-ASE-e119-3",
                                    "text": {
                                        "en": "ST" 
                                    }
                                }
                            ]
                        },   
                        {
                            "title": {
                                "en": "Please indicate if you use any third party performance monitoring tools"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e120"
                        },  
                        {
                            "title": {
                                "en": "Have you configured any workflow involving external mail subsystems?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e121"
                        },
                        {
                            "title": {
                                "en": "Do you have java stack installed in landscape?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e122-1",
                            "conditional": {
                                "condition": true,
                                "title": {
                                    "en": "Is it dual stack or standalone?"
                                },
                                "type": "short-text",
                                "questionId": "RDS-DB-MIGRATION-TO-ASE-e122-2"
                            }

                        },
                        {
                            "title": {
                                "en": "Is your Global/central EP connected to the SAP system in scope for EHP update/Install?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e123"
                        },   
                        {
                            "title": {
                                "en": "Please Indicate Defect Management Tool deployed (SolMan, HP Quality Center,..). If none, would you like to setup Solution Manger for Test and Defect Management?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e125"
                        }, 
                        {
                            "title": {
                                "en": "Would you like SAP to do Functional test execution (Integration Testing) for the EHP Update? Do you have defined test cases available?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e126"
                        },
                        {
                            "title": {
                                "en": "Would you like SAP to do Test Management (Strategizing, Planning, Monitoring and Reporting) for functional testing of EHP Update?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e127"
                        },
                        {
                            "title": {
                                "en": "Maximum permissible downtime for EHP update/Install (in hrs)"
                            },
                            "type": "short-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e128"
                        },
                        {
                            "title": {
                                "en": "Please indicate if there are any other systems sharing the SAP operating system/ DBMS"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e129"
                        },   
                        {
                            "title": {
                                "en": "Please indicate if your have any other on-going project/s that will impact the EHP updtae/Install"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e130"
                        },
                        {
                            "title": {
                                "en": "Are there any special developments using Customer Name space other than Z* &amp; Y*?"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e131"
                        },
                        {
                            "title": {
                                "en": "How Many Productive Clients in your System? Please give details"
                            },
                            "type": "long-text",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e132"
                        },
                        {
                            "title": {
                                "en": "Do you use 'Application Link Enabling Shared Master Data Management'?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e133"
                        }, 
                        {
                            "title": {
                                "en": "Is this NWDI driven landscape?"
                            },
                            "type": "boolean",
                            "questionId": "RDS-DB-MIGRATION-TO-ASE-e134"
                        }
                    ]
                }
            ]
        }
    ],
    "answers" : {
    }
};

jsontoxml(obj);