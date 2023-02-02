/*! For license information please see 7474.3a4fb108.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[7474],{87474:(t,i,e)=>{e.r(i),e.d(i,{CalciteIcon:()=>n,defineCustomElement:()=>s});var a=e(57601);const n=a.I,s=a.d},57601:(t,i,e)=>{e.d(i,{I:()=>h,d:()=>d});var a=e(51554),n=e(92358),s=e(72021);const c="flip-rtl",r={},o={},l={s:16,m:24,l:32};async function m(t){let{icon:i,scale:e}=t;const n=l[e],s=function(t){const i=!isNaN(Number(t.charAt(0))),e=t.split("-");if(1===e.length)return i?`i${t}`:t;return e.map(((t,e)=>0===e?i?`i${t.toUpperCase()}`:t:t.charAt(0).toUpperCase()+t.slice(1))).join("")}(i),c="F"===s.charAt(s.length-1),m=`${c?s.substring(0,s.length-1):s}${n}${c?"F":""}`;if(r[m])return r[m];o[m]||(o[m]=fetch((0,a.K3)(`./assets/icon/${m}.json`)).then((t=>t.json())).catch((()=>(console.error(`"${m}" is not a valid calcite-ui-icon name`),""))));const h=await o[m];return r[m]=h,h}const h=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:i,pathData:e,scale:s,textLabel:r}=this,o=(0,n.c)(t),m=l[s],h=!!r,d=[].concat(e||"");return(0,a.h)(a.AA,{"aria-hidden":(0,n.t)(!h),"aria-label":h?r:null,role:h?"img":null},(0,a.h)("svg",{"aria-hidden":"true",class:{[c]:"rtl"===o&&i,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${m} ${m}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map((t=>"string"===typeof t?(0,a.h)("path",{d:t}):(0,a.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:i,visible:e}=this;a.Z5.isBrowser&&t&&e&&(this.pathData=await m({icon:t,scale:i}))}waitUntilVisible(t){this.intersectionObserver=(0,s.c)("intersection",(i=>{i.forEach((i=>{i.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function d(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((t=>{if("calcite-icon"===t)customElements.get(t)||customElements.define(t,h)}))}d()},72021:(t,i,e)=>{e.d(i,{c:()=>n});var a=e(51554);function n(t,i,e){if(!a.Z5.isBrowser)return;const n=function(t){class i extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,i){return this.observedEntry.push({target:t,options:i}),super.observe(t,i)}unobserve(t){const i=this.observedEntry.filter((i=>i.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),i.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?i:window.ResizeObserver}(t);return new n(i,e)}}}]);
//# sourceMappingURL=7474.3a4fb108.chunk.js.map