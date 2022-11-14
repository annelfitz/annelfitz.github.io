/*! For license information please see 9528.c5cb5744.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[9528],{29528:(t,i,n)=>{n.r(i),n.d(i,{calcite_input_message:()=>r});var e,a=n(97164),o=n(23241);n(40178);!function(t){t.valid="check-circle",t.invalid="exclamation-mark-triangle",t.idle="information"}(e||(e={}));const r=class{constructor(t){(0,a.r)(this,t),this.active=!1,this.scale="m",this.status="idle"}handleIconEl(){this.requestedIcon=(0,o.s)(e,this.icon,this.status)}connectedCallback(){this.status=(0,o.e)(this.el,"status",this.status),this.scale=(0,o.e)(this.el,"scale",this.scale),this.requestedIcon=(0,o.s)(e,this.icon,this.status)}render(){const t=!this.active;return(0,a.h)(a.H,{"calcite-hydrated-hidden":t},this.renderIcon(this.requestedIcon),(0,a.h)("slot",null))}renderIcon(t){if(t)return(0,a.h)("calcite-icon",{class:"calcite-input-message-icon",icon:t,scale:"s"})}get el(){return(0,a.g)(this)}static get watchers(){return{status:["handleIconEl"],icon:["handleIconEl"]}}};r.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([active][scale=m]),:host([active][scale=l]){--calcite-input-message-spacing-value:0.25rem}:host{visibility:hidden;box-sizing:border-box;display:flex;block-size:0px;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([active]){visibility:visible;block-size:auto;opacity:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([active][scale=m]),:host([active][scale=l]){margin-block-start:var(--calcite-input-message-spacing-value)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-ui-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-ui-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-ui-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-ui-brand)}:host([status][active]){color:var(--calcite-ui-text-1)}:host([status][scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([status][scale=m]){margin-block-start:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([status][scale=l]){margin-block-start:0.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}"},23241:(t,i,n)=>{n.d(i,{a:()=>s,b:()=>g,c:()=>f,d:()=>c,e:()=>l,f:()=>y,g:()=>k,h:()=>o,i:()=>I,j:()=>p,k:()=>x,l:()=>u,m:()=>w,n:()=>r,q:()=>d,s:()=>_,t:()=>z});var e=n(40178),a=n(1950);function o(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,a.g)()}`:""}function r(t){return Array.isArray(t)?t:Array.from(t)}function c(t){const i=f(t,`.${e.C.darkTheme}, .${e.C.lightTheme}`);return(null===i||void 0===i?void 0:i.classList.contains("calcite-theme-dark"))?"dark":"light"}function s(t){const i=f(t,"[dir]");return i?i.getAttribute("dir"):"ltr"}function l(t,i,n){const e=`[${i}]`,a=t.closest(e);return a?a.getAttribute(i):n}function u(t){return t.getRootNode()}function m(t){return t.host||null}function d(t,i){let{selector:n,id:e}=i;return function t(i){if(!i)return null;i.assignedSlot&&(i=i.assignedSlot);const a=u(i),o=e?"getElementById"in a?a.getElementById(e):null:n?a.querySelector(n):null,r=m(a);return o||(r?t(r):null)}(t)}function f(t,i){return function t(n){return n?n.closest(i)||t(m(u(n))):null}(t)}function h(t,i){return v(t,i)}function v(t,i){if(!t)return;const n=i(t);if(void 0!==n)return n;const{parentNode:e}=t;return v(e instanceof ShadowRoot?e.host:e,i)}function g(t,i){return!!h(i,(i=>i===t||void 0))}function p(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}async function y(t){if(t)return p(t)?t.setFocus():t.focus()}const b=":not([slot])";function k(t,i,n){i&&!Array.isArray(i)&&"string"!==typeof i&&(n=i,i=null);const e=i?Array.isArray(i)?i.map((t=>`[slot="${t}"]`)).join(","):`[slot="${i}"]`:b;return(null===n||void 0===n?void 0:n.all)?function(t,i,n){let e=i===b?A(t,b):Array.from(t.querySelectorAll(i));e=n&&!1===n.direct?e:e.filter((i=>i.parentElement===t)),e=(null===n||void 0===n?void 0:n.matches)?e.filter((t=>null===t||void 0===t?void 0:t.matches(n.matches))):e;const a=null===n||void 0===n?void 0:n.selector;return a?e.map((t=>Array.from(t.querySelectorAll(a)))).reduce(((t,i)=>[...t,...i]),[]).filter((t=>!!t)):e}(t,e,n):function(t,i,n){let e=i===b?A(t,b)[0]||null:t.querySelector(i);e=n&&!1===n.direct||(null===e||void 0===e?void 0:e.parentElement)===t?e:null,e=(null===n||void 0===n?void 0:n.matches)?(null===e||void 0===e?void 0:e.matches(n.matches))?e:null:e;const a=null===n||void 0===n?void 0:n.selector;return a?null===e||void 0===e?void 0:e.querySelector(a):e}(t,e,n)}function A(t,i){return t?Array.from(t.children||[]).filter((t=>null===t||void 0===t?void 0:t.matches(i))):[]}function w(t,i){return Array.from(t.children).filter((t=>t.matches(i)))}function _(t,i,n){return"string"===typeof i&&""!==i?i:""===i?t[n]:void 0}function x(t,i){return!(i.left>t.right||i.right<t.left||i.top>t.bottom||i.bottom<t.top)}function z(t){return Boolean(t).toString()}function I(t){return!(!t.isPrimary||0!==t.button)}},1950:(t,i,n)=>{n.d(i,{g:()=>e});const e=()=>[2,1,1,1,3].map((t=>{let i="";for(let n=0;n<t;n++)i+=(65536*(1+Math.random())|0).toString(16).substring(1);return i})).join("-")}}]);
//# sourceMappingURL=9528.c5cb5744.chunk.js.map