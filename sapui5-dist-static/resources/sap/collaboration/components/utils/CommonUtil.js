/*!
 * @copyright@
 */
jQuery.sap.require("sap.m.MessageBox");jQuery.sap.declare("sap.collaboration.components.utils.CommonUtil");sap.ui.base.Object.extend("sap.collaboration.components.utils.CommonUtil",{getLanguageBundle:function(){if(!this.oLangBundle){jQuery.sap.require("jquery.sap.resources");var l=sap.ui.getCore().getConfiguration().getLanguage();this.oLangBundle=jQuery.sap.resources({url:jQuery.sap.getModulePath("sap.collaboration.components")+"/i18n/messagebundle.properties",locale:l})}return this.oLangBundle},displayError:function(e){var m=this.getLanguageBundle().getText("SYSTEM_ERROR_MESSAGEBOX_GENERAL_TEXT");sap.m.MessageBox.show(m,sap.m.MessageBox.Icon.ERROR,this.getLanguageBundle().getText("SYSTEM_ERROR_MESSAGEBOX_TITLE"))}});
