/*! For license information please see 8738.82e2a1f7.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[8738],{58738:(i,t,e)=>{e.r(t),e.d(t,{calcite_switch:()=>l});var a=e(97164),n=e(23241),c=e(28634),o=e(34396),r=e(55716),s=e(22681);e(40178);const l=class{constructor(i){(0,a.r)(this,i),this.calciteSwitchChange=(0,a.c)(this,"calciteSwitchChange",6),this.disabled=!1,this.scale="m",this.switched=!1,this.checked=!1,this.keyDownHandler=i=>{!this.disabled&&(0,s.i)(i.key)&&(this.toggle(),i.preventDefault())},this.clickHandler=()=>{this.toggle()},this.setSwitchEl=i=>{this.switchEl=i}}switchedWatcher(i){this.checked=i}async setFocus(){(0,n.f)(this.switchEl)}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}toggle(){this.checked=!this.checked,this.calciteSwitchChange.emit({switched:this.checked})}connectedCallback(){const i=this.checked||this.switched;i&&(this.switched=this.checked=i),(0,c.c)(this),(0,o.c)(this)}disconnectedCallback(){(0,c.d)(this),(0,o.d)(this)}componentDidRender(){(0,r.u)(this)}render(){return(0,a.h)(a.H,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,a.h)("div",{"aria-checked":(0,n.t)(this.checked),"aria-label":(0,c.g)(this),class:"container",ref:this.setSwitchEl,role:"switch",tabIndex:0},(0,a.h)("div",{class:"track"},(0,a.h)("div",{class:"handle"})),(0,a.h)(o.H,{component:this})))}get el(){return(0,a.g)(this)}static get watchers(){return{switched:["switchedWatcher"]}}};l.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host{inline-size:auto;outline-color:transparent}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-2);vertical-align:top;transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]) .handle{border-color:var(--calcite-ui-brand);inset-inline:auto -1px}:host([checked]:hover) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}.container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"},22681:(i,t,e)=>{function a(i){return"Enter"===i||" "===i}e.d(t,{i:()=>a,n:()=>n});const n=["0","1","2","3","4","5","6","7","8","9"]}}]);
//# sourceMappingURL=8738.82e2a1f7.chunk.js.map