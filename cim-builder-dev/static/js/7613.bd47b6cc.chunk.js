/*! For license information please see 7613.bd47b6cc.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[7613],{77613:(e,t,i)=>{i.r(t),i.d(t,{calcite_pagination:()=>d});var a=i(85610),s=i(41057),n=i(3993);i(68884),i(49244);const r="page",o="is-selected",c="previous",l="next",h="is-disabled",p="ellipsis",m="ellipsis--start",g="ellipsis--end",d=class{constructor(e){(0,a.r)(this,e),this.calcitePaginationChange=(0,a.c)(this,"calcitePaginationChange",6),this.previousClicked=()=>{this.previousPage().then(),this.emitUpdate()},this.nextClicked=()=>{this.nextPage(),this.emitUpdate()},this.groupSeparator=!1,this.messageOverrides=void 0,this.pageSize=20,this.numberingSystem=void 0,this.startItem=1,this.totalItems=0,this.scale="m",this.defaultMessages=void 0,this.effectiveLocale="",this.messages=void 0}onMessagesChange(){}effectiveLocaleChange(){(0,n.u)(this,this.effectiveLocale)}effectiveLocaleWatcher(){s.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator}}connectedCallback(){(0,s.c)(this),(0,n.c)(this)}async componentWillLoad(){await(0,n.s)(this)}disconnectedCallback(){(0,s.d)(this),(0,n.d)(this)}async nextPage(){this.startItem=Math.min(this.getLastStart(),this.startItem+this.pageSize)}async previousPage(){this.startItem=Math.max(1,this.startItem-this.pageSize)}getLastStart(){const{totalItems:e,pageSize:t}=this;return(e%t===0?e-t:Math.floor(e/t)*t)+1}showLeftEllipsis(){return Math.floor(this.startItem/this.pageSize)>3}showRightEllipsis(){return(this.totalItems-this.startItem)/this.pageSize>3}emitUpdate(){this.calcitePaginationChange.emit()}renderPages(){const e=this.getLastStart();let t,i;this.totalItems/this.pageSize<=5?(i=1+this.pageSize,t=e-this.pageSize):this.startItem/this.pageSize<4?(i=1+this.pageSize,t=1+4*this.pageSize):this.startItem+3*this.pageSize>=this.totalItems?(i=e-4*this.pageSize,t=e-this.pageSize):(i=this.startItem-this.pageSize,t=this.startItem+this.pageSize);const a=[];for(;i<=t;)a.push(i),i+=this.pageSize;return a.map((e=>this.renderPage(e)))}renderPage(e){const t=Math.floor(e/this.pageSize)+(1===this.pageSize?0:1);s.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const i=s.n.localize(t.toString());return(0,a.h)("button",{class:{[r]:!0,[o]:e===this.startItem},onClick:()=>{this.startItem=e,this.emitUpdate()}},i)}renderLeftEllipsis(){if(this.totalItems/this.pageSize>5&&this.showLeftEllipsis())return(0,a.h)("span",{class:`${p} ${m}`},"\u2026")}renderRightEllipsis(){if(this.totalItems/this.pageSize>5&&this.showRightEllipsis())return(0,a.h)("span",{class:`${p} ${g}`},"\u2026")}render(){const{totalItems:e,pageSize:t,startItem:i}=this,s=1===t?i<=t:i<t,n=i+t>e;return(0,a.h)(a.F,null,(0,a.h)("button",{"aria-label":this.messages.previous,class:{[c]:!0,[h]:s},disabled:s,onClick:this.previousClicked},(0,a.h)("calcite-icon",{flipRtl:!0,icon:"chevronLeft",scale:"l"===this.scale?"m":"s"})),e>t?this.renderPage(1):null,this.renderLeftEllipsis(),this.renderPages(),this.renderRightEllipsis(),this.renderPage(this.getLastStart()),(0,a.h)("button",{"aria-label":this.messages.next,class:{[l]:!0,[h]:n},disabled:n,onClick:this.nextClicked},(0,a.h)("calcite-icon",{flipRtl:!0,icon:"chevronRight",scale:"l"===this.scale?"m":"s"})))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return(0,a.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange","effectiveLocaleWatcher"]}}};d.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([scale=s]){--calcite-pagination-spacing-internal:0.25rem 0.5rem}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .previous,:host([scale=s]) .next{padding-inline:0.25rem}:host([scale=m]){--calcite-pagination-spacing-internal:0.5rem 0.75rem}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .previous,:host([scale=m]) .next{padding-inline:0.5rem}:host([scale=l]){--calcite-pagination-spacing-internal:0.75rem 1rem}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .previous,:host([scale=l]) .next{padding-inline:1rem}:host{display:flex;writing-mode:horizontal-tb}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.previous,.next,.page{box-sizing:border-box;display:flex;cursor:pointer;align-items:center;border-style:none;--tw-border-opacity:0;background-color:transparent;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3);border-block:2px solid transparent}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.page:hover{border-block-end-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-block-end-color:var(--calcite-ui-brand)}.previous:hover,.next:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-brand)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{pointer-events:none;background-color:transparent}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:var(--calcite-ui-opacity-disabled)}.next{margin-inline-end:0px}.page,.ellipsis{padding:var(--calcite-pagination-spacing-internal)}.ellipsis{display:flex;align-items:flex-end;color:var(--calcite-ui-text-3)}"}}]);
//# sourceMappingURL=7613.bd47b6cc.chunk.js.map