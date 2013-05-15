/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.EnabledPropagator");jQuery.sap.require("sap.ui.core.Control");
sap.ui.core.EnabledPropagator=function(d){if(!(this instanceof sap.ui.core.Control)){return}var w=function(c){var p=c.getParent();while(p&&!p.getEnabled&&p.getParent){p=p.getParent()}return p};if(this.getEnabled===undefined){this.getEnabled=function(){var p=w(this);return(p&&p.getEnabled&&!p.getEnabled())?false:this.getProperty('Enabled')};this.getMetadata().addProperty('Enabled',{type:"boolean",group:"Behavior",defaultValue:d===true});this.getMetadata().addPublicMethods('getEnabled')}else{var o=this.getEnabled;this.getEnabled=function(){var p=w(this);return(p&&p.getEnabled&&!p.getEnabled())?false:o.apply(this)}}if(this.setEnabled===undefined){this.setEnabled=function(e){this.setProperty('Enabled',e)};this.getMetadata().addPublicMethods('setEnabled')}};
