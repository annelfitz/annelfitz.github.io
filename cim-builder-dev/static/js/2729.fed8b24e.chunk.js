/*! For license information please see 2729.fed8b24e.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[2729],{62729:(e,t,i)=>{i.r(t),i.d(t,{calcite_card:()=>v});var a=i(85610),n=i(15774),c=i(68884),o=i(41057),l=i(3993);i(49244);const s="container",r="header",d="footer",h="checkbox-wrapper",m="thumbnail-wrapper",f="thumbnail",u="title",g="subtitle",p="footer-start",b="footer-end",v=class{constructor(e){(0,a.r)(this,e),this.calciteCardSelect=(0,a.c)(this,"calciteCardSelect",6),this.cardSelectClick=()=>{this.selectCard()},this.cardSelectKeyDown=e=>{switch(e.key){case" ":case"Enter":this.selectCard(),e.preventDefault()}},this.loading=!1,this.selected=!1,this.selectable=!1,this.thumbnailPosition="block-start",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}onMessagesChange(){}connectedCallback(){(0,n.c)(this),(0,o.c)(this),(0,l.c)(this)}disonnectedCallback(){(0,n.d)(this),(0,o.d)(this),(0,l.d)(this)}async componentWillLoad(){await(0,l.s)(this)}render(){const e=this.thumbnailPosition.startsWith("inline"),t=this.thumbnailPosition.endsWith("start");return(0,a.h)("div",{class:{"calcite-card-container":!0,inline:e}},this.loading?(0,a.h)("div",{class:"calcite-card-loader-container"},(0,a.h)("calcite-loader",{label:this.messages.loading})):null,t&&this.renderThumbnail(),(0,a.h)("section",{"aria-busy":(0,c.t)(this.loading),class:{[s]:!0}},this.selectable?this.renderCheckbox():null,this.renderHeader(),(0,a.h)("div",{class:"card-content"},(0,a.h)("slot",null)),this.renderFooter()),!t&&this.renderThumbnail())}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}selectCard(){this.selected=!this.selected,this.calciteCardSelect.emit()}renderThumbnail(){return(0,c.g)(this.el,f)?(0,a.h)("section",{class:m},(0,a.h)("slot",{name:f})):null}renderCheckbox(){const e=this.selected?this.messages.deselect:this.messages.select;return(0,a.h)("calcite-label",{class:h,onClick:this.cardSelectClick,onKeyDown:this.cardSelectKeyDown},(0,a.h)("calcite-checkbox",{checked:this.selected,label:e}))}renderHeader(){const{el:e}=this,t=(0,c.g)(e,u),i=(0,c.g)(e,g);return t||i?(0,a.h)("header",{class:r},(0,a.h)("slot",{name:u}),(0,a.h)("slot",{name:g})):null}renderFooter(){const{el:e}=this,t=(0,c.g)(e,p),i=(0,c.g)(e,b);return t||i?(0,a.h)("footer",{class:d},(0,a.h)("slot",{name:p}),(0,a.h)("slot",{name:b})):null}static get assetsDirs(){return["assets"]}get el(){return(0,a.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};v.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block;max-inline-size:100%}:host .calcite-card-container{position:relative;display:flex;block-size:100%;flex-direction:column;justify-content:space-between;overflow:hidden;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:var(--calcite-border-radius-base)}.container{position:relative;display:flex;flex:1 1 auto;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){pointer-events:none;opacity:0}:host([loading]) .calcite-card-loader-container{position:absolute;inset:0px;display:flex;align-items:center}.header,.footer{display:flex;padding-inline:0.75rem;padding-block:0.75rem 0.25rem}.header{flex-direction:column}.footer{margin-block-start:auto;flex-direction:row;align-content:space-between;justify-content:space-between;padding-inline:0.75rem;padding-block:0.25rem 0.75rem}.card-content{padding:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-brand)}slot[name=title]::slotted(*),*::slotted([slot=title]){margin:0px;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selectable]) .header{padding-inline-end:2rem}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){margin:0px;margin-block-start:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){min-inline-size:100%;max-inline-size:100%}slot[name=footer-start]::slotted(*),*::slotted([slot=footer-start]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;margin-inline-end:auto}slot[name=footer-end]::slotted(*),*::slotted([slot=footer-end]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375}.checkbox-wrapper{position:absolute;margin:0px;padding:0px;inset-block-start:0.5rem;inset-inline-end:0.5rem}.thumbnail-wrapper{display:flex}.calcite-card-container.inline{flex-direction:row}.calcite-card-container.inline>.container{inline-size:60%}.calcite-card-container.inline>.thumbnail-wrapper{inline-size:40%;align-items:flex-start}.calcite-card-container.inline slot[name=thumbnail]::slotted(img),.calcite-card-container.inline img::slotted([slot=thumbnail]){inline-size:100%}slot[name=footer-start]::slotted(*),slot[name=footer-end]::slotted(*){display:flex;gap:0.25rem}"},15774:(e,t,i)=>{i.d(t,{c:()=>s,d:()=>r});var a=i(85610),n=i(44300);const c=new Set;let o;const l={childList:!0};function s(e){o||(o=(0,n.c)("mutation",d)),o.observe(e.el,l)}function r(e){c.delete(e.el),d(o.takeRecords()),o.disconnect();for(const[t]of c.entries())o.observe(t,l)}function d(e){e.forEach((e=>{let{target:t}=e;(0,a.f)(t)}))}}}]);
//# sourceMappingURL=2729.fed8b24e.chunk.js.map