/*! For license information please see 9983.5831dc33.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[9983],{29983:(t,e,i)=>{i.r(e),i.d(e,{calcite_inline_editable:()=>f});var n=i(85610),a=i(68884),s=i(64761),l=i(73972),c=i(98101),o=i(41057),r=i(44300),d=i(3993);i(49244);const h="wrapper",u="confirm-changes-button",b="cancel-editing-button",m="input-wrapper",p="cancel-editing-button-wrapper",g="enable-editing-button",E="controls-wrapper",f=class{constructor(t){(0,n.r)(this,t),this.calciteInlineEditableEditCancel=(0,n.c)(this,"calciteInlineEditableEditCancel",6),this.calciteInlineEditableEditConfirm=(0,n.c)(this,"calciteInlineEditableEditConfirm",6),this.calciteInternalInlineEditableEnableEditingChange=(0,n.c)(this,"calciteInternalInlineEditableEnableEditingChange",6),this.mutationObserver=(0,r.c)("mutation",(()=>this.mutationObserverCallback())),this.enableEditing=()=>{this.valuePriorToEditing=this.inputElement?.value,this.editingEnabled=!0,this.inputElement?.setFocus(),this.calciteInternalInlineEditableEnableEditingChange.emit()},this.disableEditing=()=>{this.editingEnabled=!1},this.cancelEditing=()=>{this.inputElement&&(this.inputElement.value=this.valuePriorToEditing),this.disableEditing(),this.enableEditingButton.setFocus(),!this.editingEnabled&&this.shouldEmitCancel&&this.calciteInlineEditableEditCancel.emit()},this.escapeKeyHandler=async t=>{t.defaultPrevented||("Escape"===t.key&&(t.preventDefault(),this.cancelEditing()),"Tab"===t.key&&this.shouldShowControls&&(t.shiftKey||t.target!==this.inputElement||(t.preventDefault(),this.cancelEditingButton.setFocus()),t.shiftKey&&t.target===this.cancelEditingButton&&(t.preventDefault(),this.inputElement?.setFocus())))},this.cancelEditingHandler=async t=>{t.preventDefault(),this.cancelEditing()},this.enableEditingHandler=async t=>{this.disabled||t.target===this.cancelEditingButton||t.target===this.confirmEditingButton||(t.preventDefault(),this.editingEnabled||this.enableEditing())},this.confirmChangesHandler=async t=>{t.preventDefault(),this.calciteInlineEditableEditConfirm.emit();try{this.afterConfirm&&(this.loading=!0,await this.afterConfirm(),this.disableEditing(),this.enableEditingButton.setFocus())}catch(e){}finally{this.loading=!1}},this.disabled=!1,this.editingEnabled=!1,this.loading=!1,this.controls=!1,this.scale=void 0,this.afterConfirm=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale=void 0}disabledWatcher(t){this.inputElement&&(this.inputElement.disabled=t)}editingEnabledWatcher(t,e){this.inputElement&&(this.inputElement.editingEnabled=t),!t&&e&&(this.shouldEmitCancel=!0)}onMessagesChange(){}connectedCallback(){(0,l.c)(this),(0,o.c)(this),(0,d.c)(this),this.mutationObserver?.observe(this.el,{childList:!0}),this.mutationObserverCallback()}async componentWillLoad(){(0,c.s)(this),await(0,d.s)(this)}componentDidLoad(){(0,c.a)(this)}disconnectedCallback(){(0,l.d)(this),(0,o.d)(this),(0,d.d)(this),this.mutationObserver?.disconnect()}componentDidRender(){(0,s.u)(this)}render(){return(0,n.h)("div",{class:h,onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler},(0,n.h)("div",{class:m},(0,n.h)("slot",null)),(0,n.h)("div",{class:E},(0,n.h)("calcite-button",{appearance:"transparent",class:g,disabled:this.disabled,iconStart:"pencil",kind:"neutral",label:this.messages.enableEditing,onClick:this.enableEditingHandler,scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button",ref:t=>this.enableEditingButton=t}),this.shouldShowControls&&[(0,n.h)("div",{class:p},(0,n.h)("calcite-button",{appearance:"transparent",class:b,disabled:this.disabled,iconStart:"x",kind:"neutral",label:this.messages.cancelEditing,onClick:this.cancelEditingHandler,scale:this.scale,type:"button",ref:t=>this.cancelEditingButton=t})),(0,n.h)("calcite-button",{appearance:"solid",class:u,disabled:this.disabled,iconStart:"check",kind:"brand",label:this.messages.confirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,scale:this.scale,type:"button",ref:t=>this.confirmEditingButton=t})]))}blurHandler(){this.controls||this.disableEditing()}effectiveLocaleChange(){(0,d.u)(this,this.effectiveLocale)}async setFocus(){await(0,c.c)(this),this.el?.focus()}mutationObserverCallback(){this.updateSlottedInput(),this.scale=this.scale||this.inputElement?.scale||(0,a.h)(this.el,"scale",void 0)}onLabelClick(){this.setFocus()}updateSlottedInput(){const t=(0,a.g)(this.el,{matches:"calcite-input"});this.inputElement=t,t&&(this.inputElement.disabled=this.disabled,this.inputElement.label=this.inputElement.label||(0,l.g)(this))}get shouldShowControls(){return this.editingEnabled&&this.controls}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};f.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([scale=s]) .controls-wrapper{block-size:1.5rem}:host([scale=m]) .controls-wrapper{block-size:2rem}:host([scale=l]) .controls-wrapper{block-size:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-ui-foreground-2)}.wrapper{box-sizing:border-box;display:flex;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.wrapper .input-wrapper{flex:1 1 0%}.controls-wrapper{display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-ui-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}"},64761:(t,e,i)=>{function n(){}function a(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=n);t.el.click=HTMLElement.prototype.click,"function"===typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}i.d(e,{u:()=>a})},73972:(t,e,i)=>{i.d(e,{a:()=>l,c:()=>b,d:()=>m,g:()=>p,l:()=>s});var n=i(68884);const a="calciteInternalLabelClick",s="calciteInternalLabelConnected",l="calciteInternaLabelDisconnected",c="calcite-label",o=new WeakMap,r=new WeakMap,d=new WeakMap,h=new Set,u=t=>{const{id:e}=t,i=e&&(0,n.q)(t,{selector:`calcite-label[for="${e}"]`});if(i)return i;const a=(0,n.c)(t,c);return!a||function(t,e){let i;const n="custom-element-ancestor-check",a=n=>{n.stopImmediatePropagation();const a=n.composedPath();i=a.slice(a.indexOf(e),a.indexOf(t))};t.addEventListener(n,a,{once:!0}),e.dispatchEvent(new CustomEvent(n,{composed:!0,bubbles:!0})),t.removeEventListener(n,a);return i.filter((i=>i!==e&&i!==t)).filter((t=>t.tagName?.includes("-"))).length>0}(a,t)?null:a};function b(t){const e=u(t.el);if(o.has(e)||!e&&h.has(t))return;const i=f.bind(t);if(e){t.labelEl=e;const n=g.bind(t);o.set(t.labelEl,n),t.labelEl.addEventListener(a,n),h.delete(t),document.removeEventListener(s,r.get(t)),d.set(t,i),document.addEventListener(l,i)}else h.has(t)||(i(),document.removeEventListener(l,d.get(t)))}function m(t){if(h.delete(t),document.removeEventListener(s,r.get(t)),document.removeEventListener(l,d.get(t)),r.delete(t),d.delete(t),!t.labelEl)return;const e=o.get(t.labelEl);t.labelEl.removeEventListener(a,e),o.delete(t.labelEl)}function p(t){return t.label||t.labelEl?.textContent?.trim()||""}function g(t){if(this.disabled)return;this.el.contains(t.detail.sourceEvent.target)||this.onLabelClick(t)}function E(){h.has(this)&&b(this)}function f(){h.add(this);const t=r.get(this)||E.bind(this);r.set(this,t),document.addEventListener(s,t)}},98101:(t,e,i)=>{i.d(e,{a:()=>l,c:()=>c,s:()=>s});const n=new WeakMap,a=new WeakMap;function s(t){a.set(t,new Promise((e=>n.set(t,e))))}function l(t){n.get(t)()}function c(t){return a.get(t)}}}]);
//# sourceMappingURL=9983.5831dc33.chunk.js.map