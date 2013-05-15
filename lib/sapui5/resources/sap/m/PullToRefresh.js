/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.PullToRefresh");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.PullToRefresh",{metadata:{publicMethods:["hide"],library:"sap.m",properties:{"description":{type:"string",group:"Misc",defaultValue:null},"showIcon":{type:"boolean",group:"Appearance",defaultValue:true},"customIcon":{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null}},events:{"refresh":{}}}});sap.m.PullToRefresh.M_EVENTS={'refresh':'refresh'};
sap.m.PullToRefresh.prototype.init=function(){this._iState=0;this.oRb=sap.ui.getCore().getLibraryResourceBundle("sap.m");jQuery(window).on("resize.sapMP2R",jQuery.proxy(this.calculateTopTrigger,this))};
sap.m.PullToRefresh.prototype.exit=function(){if(this._oCustomImage){this._oCustomImage.destroy()}};
sap.m.PullToRefresh.prototype.onBeforeRendering=function(){var p=this.getParent();this._oScroller=p&&p.getScrollDelegate?p.getScrollDelegate():null;if(this._oScroller){this._oScroller.setPullDown(this)}};
sap.m.PullToRefresh.prototype.calculateTopTrigger=function(){this._iTopTrigger=1;if(this._oDomRef&&this._oDomRef.parentNode&&this._oDomRef.parentNode.parentNode&&this._oDomRef.parentNode.parentNode.offsetHeight<this._oDomRef.offsetHeight*1.5){this._iTopTrigger=jQuery.sap.domById(this.getId()+"-T").offsetTop}};
sap.m.PullToRefresh.prototype.onAfterRendering=function(){if(this._oScroller){this._oScroller.refresh()}this._oDomRef=this.getDomRef();this.calculateTopTrigger()};
sap.m.PullToRefresh.prototype.exit=function(){jQuery(window).off("resize.sapMP2R");if(this._oScroller){this._oScroller.setPullDown(null)}this._oScroller=null};
sap.m.PullToRefresh.prototype.doScrollMove=function(){if(!this._oScroller){return}var _=this._oScroller._scroller;if(_.y>-this._iTopTrigger&&this._iState<1){this.setState(1);_.minScrollY=0}else if(_.y<-this._iTopTrigger&&this._iState==1){this.setState(0);_.minScrollY=-this._oDomRef.offsetHeight}};
sap.m.PullToRefresh.prototype.doRefresh=function(){this.setState(0)};
sap.m.PullToRefresh.prototype.doScrollEnd=function(){if(this._iState==1){this.setState(2);this.fireRefresh()}};
sap.m.PullToRefresh.prototype.setState=function(s){if(this._iState==s){return}var $=this.$();var a=$.find(".sapMPullDownText");switch(s){case 0:$.toggleClass("sapMFlip",false).toggleClass("sapMLoading",false);a.html(this.oRb.getText("PULL2REFRESH_PULLDOWN"));this._iState=s;break;case 1:$.toggleClass("sapMFlip",true);a.html(this.oRb.getText("PULL2REFRESH_RELEASE"));this._iState=s;break;case 2:$.toggleClass("sapMFlip",false).toggleClass("sapMLoading",true);a.html(this.oRb.getText("PULL2REFRESH_LOADING"));this._iState=s;break}};
sap.m.PullToRefresh.prototype.setDescription=function(d){this.$().find(".sapMPullDownInfo").html(jQuery.sap.encodeHTML(d));return this.setProperty("description",d,true)};
sap.m.PullToRefresh.prototype.getCustomIconImage=function(){if(!this._oCustomImage){this._oCustomImage=new sap.m.Image({src:this.getCustomIcon()}).addStyleClass("sapMPullDownCIImg")}else{this._oCustomImage.setSrc(this.getCustomIcon())}return this._oCustomImage};
sap.m.PullToRefresh.prototype.hide=function(){if(this._oScroller){this._oScroller.refresh()}else{this.setState(0)}};
