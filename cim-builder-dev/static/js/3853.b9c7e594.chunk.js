/*! For license information please see 3853.b9c7e594.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[3853],{43853:(t,e,a)=>{a.r(e),a.d(e,{calcite_flow_item:()=>y});var i=a(76340),o=a(63614),n=a(50676),s=a(47795),c=a(34018),l=a(64920),r=a(98458);a(35249);const d="back-button",h="chevron-left",m="chevron-right",u="header-actions-start",f="header-actions-end",b="header-menu-actions",p="header-content",g="fab",v="footer",k="footer-actions",y=class{constructor(t){(0,i.r)(this,t),this.calciteFlowItemBack=(0,i.c)(this,"calciteFlowItemBack",6),this.calciteFlowItemScroll=(0,i.c)(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=(0,i.c)(this,"calciteFlowItemClose",6),this.handlePanelScroll=t=>{t.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=t=>{t.stopPropagation(),this.calciteFlowItemClose.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=t=>{this.backButtonEl=t},this.setContainerRef=t=>{this.containerEl=t},this.closable=!1,this.closed=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.showBackButton=!1,this.backButtonEl=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){(0,c.c)(this),(0,l.c)(this)}async componentWillLoad(){await(0,l.s)(this),(0,s.s)(this)}componentDidRender(){(0,n.u)(this)}disconnectedCallback(){(0,c.d)(this),(0,l.d)(this)}componentDidLoad(){(0,s.a)(this)}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this);const{backButtonEl:t,containerEl:e}=this;t?t.setFocus():e?.setFocus()}async scrollContentTo(t){await(this.containerEl?.scrollContentTo(t))}renderBackButton(){const{el:t}=this,e="rtl"===(0,o.b)(t),{showBackButton:a,backButtonClick:n,messages:s}=this,c=s.back,l=e?m:h;return a?(0,i.h)("calcite-action",{"aria-label":c,class:d,icon:l,key:"flow-back-button",onClick:n,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:c}):null}render(){const{closable:t,closed:e,description:a,disabled:o,heading:n,headingLevel:s,loading:c,menuOpen:l,messages:d,backButtonEl:h}=this,m=d.back;return(0,i.h)(i.H,null,(0,i.h)("calcite-panel",{closable:t,closed:e,description:a,disabled:o,heading:n,headingLevel:s,loading:c,menuOpen:l,messageOverrides:d,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,ref:this.setContainerRef},this.renderBackButton(),(0,i.h)("slot",{name:u,slot:r.S.headerActionsStart}),(0,i.h)("slot",{name:f,slot:r.S.headerActionsEnd}),(0,i.h)("slot",{name:p,slot:r.S.headerContent}),(0,i.h)("slot",{name:b,slot:r.S.headerMenuActions}),(0,i.h)("slot",{name:g,slot:r.S.fab}),(0,i.h)("slot",{name:k,slot:r.S.footerActions}),(0,i.h)("slot",{name:v,slot:r.S.footer}),(0,i.h)("slot",null)),h?(0,i.h)("calcite-tooltip",{label:m,overlayPositioning:"fixed",placement:"top",referenceElement:h},m):null)}static get assetsDirs(){return["assets"]}get el(){return(0,i.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};y.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}"}}]);
//# sourceMappingURL=3853.b9c7e594.chunk.js.map