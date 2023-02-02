/*! For license information please see 6537.db0a41d4.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[6537],{6537:(e,t,i)=>{i.r(t),i.d(t,{calcite_input_text:()=>k});var n=i(76340),a=i(63614),s=i(77964),l=i(50676),r=i(52932),o=i(47795),c=i(34018),u=i(96515),d=i(35249),h=i(64920);const m="loader",p="clear-button",g="editing-enabled",b="inline-child",f="icon",v="prefix",x="suffix",E="element-wrapper",y="wrapper",w="action-wrapper",I="action",k=class{constructor(e){(0,n.r)(this,e),this.calciteInternalInputTextFocus=(0,n.c)(this,"calciteInternalInputTextFocus",7),this.calciteInternalInputTextBlur=(0,n.c)(this,"calciteInternalInputTextBlur",7),this.calciteInputTextInput=(0,n.c)(this,"calciteInputTextInput",7),this.calciteInputTextChange=(0,n.c)(this,"calciteInputTextChange",7),this.previousValueOrigin="initial",this.mutationObserver=(0,u.c)("mutation",(()=>this.setDisabledAction())),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||(this.isClearable&&"Escape"===e.key&&(this.clearInputTextValue(e),e.preventDefault()),"Enter"!==e.key||e.defaultPrevented||(0,s.s)(this)&&e.preventDefault())},this.clearInputTextValue=e=>{this.setValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{"user"===this.previousValueOrigin&&this.value!==this.previousEmittedValue&&this.calciteInputTextChange.emit(),this.previousEmittedValue=this.value},this.inputTextBlurHandler=()=>{this.calciteInternalInputTextBlur.emit({element:this.childEl,value:this.value}),this.emitChangeIfUserModified()},this.clickHandler=e=>{const t=(0,a.g)(this.el,"action");e.target!==t&&this.setFocus()},this.inputTextFocusHandler=()=>{this.calciteInternalInputTextFocus.emit({element:this.childEl,value:this.value})},this.inputTextInputHandler=e=>{this.disabled||this.readOnly||this.setValue({nativeEvent:e,origin:"user",value:e.target.value})},this.inputTextKeyDownHandler=e=>{this.disabled||this.readOnly||"Enter"===e.key&&this.emitChangeIfUserModified()},this.hiddenInputChangeHandler=e=>{e.target.name===this.name&&this.setValue({value:e.target.value,origin:"direct"}),e.stopPropagation()},this.setChildElRef=e=>{this.childEl=e},this.setInputValue=e=>{this.childEl&&(this.childEl.value=e)},this.setPreviousEmittedValue=e=>{this.previousEmittedValue=e},this.setPreviousValue=e=>{this.previousValue=e},this.setValue=e=>{let{committing:t=!1,nativeEvent:i,origin:n,previousValue:a,value:s}=e;if(this.setPreviousValue(a||this.value),this.previousValueOrigin=n,this.userChangedValue="user"===n&&s!==this.value,this.value=s,"direct"===n&&this.setInputValue(s),i){this.calciteInputTextInput.emit().defaultPrevented?this.value=this.previousValue:t&&this.emitChangeIfUserModified()}},this.alignment="start",this.autofocus=!1,this.clearable=!1,this.disabled=!1,this.hidden=!1,this.icon=void 0,this.iconFlipRtl=!1,this.label=void 0,this.loading=!1,this.maxLength=void 0,this.minLength=void 0,this.name=void 0,this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.autocomplete=void 0,this.inputMode="text",this.enterKeyHint=void 0,this.pattern=void 0,this.suffixText=void 0,this.editingEnabled=!1,this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0,this.slottedActionElDisabledInternally=!1}disabledWatcher(){this.setDisabledAction()}onMessagesChange(){}valueWatcher(e,t){this.userChangedValue||this.setValue({origin:"direct",previousValue:t,value:e||""}),this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=(0,a.d)({},this.icon,"text")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}connectedCallback(){(0,c.c)(this),(0,h.c)(this),this.scale=(0,a.h)(this.el,"scale",this.scale),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value),(0,r.c)(this),(0,s.c)(this),this.mutationObserver?.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}disconnectedCallback(){(0,r.d)(this),(0,s.d)(this),(0,c.d)(this),(0,h.d)(this),this.mutationObserver?.disconnect(),this.el.removeEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}async componentWillLoad(){(0,o.s)(this),this.requestedIcon=(0,a.d)({},this.icon,"text"),await(0,h.s)(this)}componentDidLoad(){(0,o.a)(this)}componentDidRender(){(0,l.u)(this)}async setFocus(){await(0,o.c)(this),this.childEl?.focus()}async selectText(){this.childEl?.select()}onLabelClick(){this.setFocus()}onFormReset(){this.setValue({origin:"reset",value:this.defaultValue})}syncHiddenFormInput(e){null!=this.minLength&&(e.minLength=this.minLength),null!=this.maxLength&&(e.maxLength=this.maxLength)}setDisabledAction(){const e=(0,a.g)(this.el,"action");e&&(this.disabled?(null==e.getAttribute("disabled")&&(this.slottedActionElDisabledInternally=!0),e.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(e.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}render(){const e=(0,a.b)(this.el),t=(0,n.h)("div",{class:m},(0,n.h)("calcite-progress",{label:this.messages.loading,type:"indeterminate"})),i=(0,n.h)("button",{"aria-label":this.messages.clear,class:p,disabled:this.disabled||this.readOnly,onClick:this.clearInputTextValue,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"})),l=(0,n.h)("calcite-icon",{class:f,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:"l"===this.scale?"m":"s"}),o=(0,n.h)("div",{class:v},this.prefixText),c=(0,n.h)("div",{class:x},this.suffixText),u=(0,n.h)("input",{"aria-label":(0,r.g)(this),autocomplete:this.autocomplete,autofocus:!!this.autofocus||null,class:{[g]:this.editingEnabled,[b]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,maxLength:this.maxLength,minLength:this.minLength,name:this.name,onBlur:this.inputTextBlurHandler,onFocus:this.inputTextFocusHandler,onInput:this.inputTextInputHandler,onKeyDown:this.inputTextKeyDownHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:!!this.required||null,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:"text",value:this.value});return(0,n.h)(n.H,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,n.h)("div",{class:{[y]:!0,[d.C.rtl]:"rtl"===e}},this.prefixText?o:null,(0,n.h)("div",{class:E},u,this.isClearable?i:null,this.requestedIcon?l:null,this.loading?t:null),(0,n.h)("div",{class:w},(0,n.h)("slot",{name:I})),this.suffixText?c:null,(0,n.h)(s.H,{component:this})))}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}};k.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}:host input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:1;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.inline-child .editing-enabled{background-color:inherit}.inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"},77964:(e,t,i)=>{i.d(t,{H:()=>v,a:()=>p,c:()=>d,d:()=>m,r:()=>u,s:()=>c});var n=i(63614),a=i(76340);const s="hidden-form-input";function l(e){return"checked"in e}const r=new WeakMap,o=new WeakSet;function c(e){const{formEl:t}=e;return!!t&&("requestSubmit"in t?t.requestSubmit():t.submit(),!0)}function u(e){e.formEl?.reset()}function d(e){const{el:t,value:i}=e,a=(0,n.c)(t,"form");if(!a||function(e,t){const i="calciteInternalFormComponentRegister";let n=!1;return e.addEventListener(i,(e=>{n=e.composedPath().some((e=>o.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0})),n}(a,t))return;e.formEl=a,e.defaultValue=i,l(e)&&(e.defaultChecked=e.checked);const s=(e.onFormReset||h).bind(e);a.addEventListener("reset",s),r.set(e.el,s),o.add(t)}function h(){l(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function m(e){const{el:t,formEl:i}=e;if(!i)return;const n=r.get(t);i.removeEventListener("reset",n),r.delete(t),e.formEl=null,o.delete(t)}function p(e,t){e.defaultValue=t}const g=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},b=e=>e.removeEventListener("change",g);function f(e,t,i){const{defaultValue:n,disabled:a,name:s,required:r}=e;t.defaultValue=n,t.disabled=a,t.name=s,t.required=r,t.tabIndex=-1,l(e)?(t.defaultChecked=e.defaultChecked,t.value=e.checked?i||"on":"",a||e.checked||(t.disabled=!0)):t.value=i||"",e.syncHiddenFormInput?.(t)}const v=e=>{let{component:t}=e;return function(e){const{el:t,formEl:i,name:n,value:a}=e,{ownerDocument:l}=t,r=t.querySelectorAll('input[slot="hidden-form-input"]');if(!i||!n)return void r.forEach((e=>{b(e),e.remove()}));const o=Array.isArray(a)?a:[a],c=[],u=new Set;let d;r.forEach((t=>{const i=o.find((e=>e==t.value));null!=i?(u.add(i),f(e,t,i)):c.push(t)})),o.forEach((t=>{if(u.has(t))return;let i=c.pop();i||(i=l.createElement("input"),i.slot=s),d||(d=l.createDocumentFragment()),d.append(i),i.addEventListener("change",g),f(e,i,t)})),d&&t.append(d),c.forEach((e=>{b(e),e.remove()}))}(t),(0,a.h)("slot",{name:s})}},50676:(e,t,i)=>{function n(){}function a(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void(e.el.click=n);e.el.click=HTMLElement.prototype.click,"function"===typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}i.d(t,{u:()=>a})},88956:(e,t,i)=>{function n(e){return"Enter"===e||" "===e}i.d(t,{i:()=>n,n:()=>a});const a=["0","1","2","3","4","5","6","7","8","9"]},52932:(e,t,i)=>{i.d(t,{a:()=>l,c:()=>m,d:()=>p,g:()=>g,l:()=>s});var n=i(63614);const a="calciteInternalLabelClick",s="calciteInternalLabelConnected",l="calciteInternaLabelDisconnected",r="calcite-label",o=new WeakMap,c=new WeakMap,u=new WeakMap,d=new Set,h=e=>{const{id:t}=e,i=t&&(0,n.q)(e,{selector:`calcite-label[for="${t}"]`});if(i)return i;const a=(0,n.c)(e,r);return!a||function(e,t){let i;const n="custom-element-ancestor-check",a=n=>{n.stopImmediatePropagation();const a=n.composedPath();i=a.slice(a.indexOf(t),a.indexOf(e))};e.addEventListener(n,a,{once:!0}),t.dispatchEvent(new CustomEvent(n,{composed:!0,bubbles:!0})),e.removeEventListener(n,a);return i.filter((i=>i!==t&&i!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(a,e)?null:a};function m(e){const t=h(e.el);if(o.has(t)||!t&&d.has(e))return;const i=v.bind(e);if(t){e.labelEl=t;const n=b.bind(e);o.set(e.labelEl,n),e.labelEl.addEventListener(a,n),d.delete(e),document.removeEventListener(s,c.get(e)),u.set(e,i),document.addEventListener(l,i)}else d.has(e)||(i(),document.removeEventListener(l,u.get(e)))}function p(e){if(d.delete(e),document.removeEventListener(s,c.get(e)),document.removeEventListener(l,u.get(e)),c.delete(e),u.delete(e),!e.labelEl)return;const t=o.get(e.labelEl);e.labelEl.removeEventListener(a,t),o.delete(e.labelEl)}function g(e){return e.label||e.labelEl?.textContent?.trim()||""}function b(e){if(this.disabled)return;this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e)}function f(){d.has(this)&&m(this)}function v(){d.add(this);const e=c.get(this)||f.bind(this);c.set(this,e),document.addEventListener(s,e)}},47795:(e,t,i)=>{i.d(t,{a:()=>l,c:()=>r,s:()=>s});const n=new WeakMap,a=new WeakMap;function s(e){a.set(e,new Promise((t=>n.set(e,t))))}function l(e){n.get(e)()}function r(e){return a.get(e)}},34018:(e,t,i)=>{i.d(t,{a:()=>I,b:()=>k,c:()=>_,d:()=>D,g:()=>C,i:()=>c,n:()=>F,p:()=>u,s:()=>g});var n=i(63614),a=i(88956),s=i(96515);const l=new RegExp("-","g"),r=new RegExp("\\.?0+$");class o{constructor(e){if(this.add=e=>o.fromBigInt(this.value+new o(e).value),this.subtract=e=>o.fromBigInt(this.value-new o(e).value),this.multiply=e=>o._divRound(this.value*new o(e).value,o.SHIFT),this.divide=e=>o._divRound(this.value*o.SHIFT,new o(e).value),e instanceof o)return e;const[t,i]=String(e).split(".").concat("");this.value=BigInt(t+i.padEnd(o.DECIMALS,"0").slice(0,o.DECIMALS))+BigInt(o.ROUNDED&&i[o.DECIMALS]>="5"),this.isNegative="-"===e.charAt(0)}getIntegersAndDecimals(){const e=this.value.toString().replace(l,"").padStart(o.DECIMALS+1,"0");return{integers:e.slice(0,-o.DECIMALS),decimals:e.slice(-o.DECIMALS).replace(r,"")}}toString(){const{integers:e,decimals:t}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${e}${t.length?"."+t:""}`}formatToParts(e){const{integers:t,decimals:i}=this.getIntegersAndDecimals(),n=e.numberFormatter.formatToParts(BigInt(t));return this.isNegative&&n.unshift({type:"minusSign",value:e.minusSign}),i.length&&(n.push({type:"decimal",value:e.decimal}),i.split("").forEach((e=>n.push({type:"fraction",value:e})))),n}format(e){const{integers:t,decimals:i}=this.getIntegersAndDecimals();return`${`${this.isNegative?e.minusSign:""}${e.numberFormatter.format(BigInt(t))}`}${i.length?`${e.decimal}${i.split("").map((t=>e.numberFormatter.format(Number(t)))).join("")}`:""}`}}function c(e){return!(!e||isNaN(Number(e)))}function u(e){return e&&(t=e,a.n.some((e=>t.includes(e))))?b(e,(e=>{let t=!1;const i=e.split("").filter(((e,i)=>e.match(/\./g)&&!t?(t=!0,!0):!(!e.match(/\-/g)||0!==i)||a.n.includes(e))).reduce(((e,t)=>e+t));return c(i)?new o(i).toString():""})):"";var t}o.DECIMALS=100,o.ROUNDED=!0,o.SHIFT=BigInt("1"+"0".repeat(o.DECIMALS)),o._divRound=(e,t)=>o.fromBigInt(e/t+(o.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0))),o.fromBigInt=e=>Object.assign(Object.create(o.prototype),{value:e});const d=/^([-0])0+(?=\d)/,h=/(?!^\.)\.$/,m=/(?!^-)-/g,p=/^-\b0\b\.?0*$/,g=e=>b(e,(e=>{const t=e.replace(m,"").replace(h,"").replace(d,"$1");return c(t)?p.test(t)?t:new o(t).toString():e}));function b(e,t){if(!e)return e;const i=e.toLowerCase().indexOf("e")+1;return i?e.replace(/[eE]*$/g,"").substring(0,i).concat(e.slice(i).replace(/[eE]/g,"")).split(/[eE]/).map(((e,i)=>t(1===i?e.replace(/\./g,""):e))).join("e").replace(/^e/,"1e"):t(e)}const f="en",v=["ar","bg","bs","ca","cs","da","de","el",f,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],x=["ar","bg","bs","ca","cs","da","de","de-CH","el",f,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],E=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],y=e=>E.includes(e),w=(new Intl.NumberFormat).resolvedOptions().numberingSystem,I="arab"!==w&&y(w)?w:"latn",k=e=>y(e)?e:I;function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cldr";const i="cldr"===t?x:v;return e?i.includes(e)?e:"nb"===(e=e.toLowerCase())?"no":"t9n"===t&&"pt"===e?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,((e,t,i)=>`${t}-${i.toUpperCase()}`)),i.includes(e)||(e=e.split("-")[0])),"zh"===e?"zh-CN":i.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),f)):f}const L=new Set;function _(e){!function(e){e.effectiveLocale=function(e){return e.el.lang||(0,n.c)(e.el,"[lang]")?.lang||document.documentElement.lang||f}(e)}(e),0===L.size&&z?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),L.add(e)}function D(e){L.delete(e),0===L.size&&z.disconnect()}const z=(0,s.c)("mutation",(e=>{e.forEach((e=>{const t=e.target;L.forEach((e=>{if(!(0,n.a)(t,e.el))return;const i=(0,n.c)(e.el,"[lang]");if(!i)return void(e.effectiveLocale=f);const a=i.lang;e.effectiveLocale=i.hasAttribute("lang")&&""===a?f:a}))}))}));const F=new class{constructor(){this.delocalize=e=>this._numberFormatOptions?b(e,(e=>e.trim().replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex))):e,this.localize=e=>this._numberFormatOptions?b(e,(e=>c(e.trim())?new o(e.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):e)):e}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(e){if(e.locale=C(e?.locale),e.numberingSystem=k(e?.numberingSystem),!this._numberFormatOptions&&e.locale===f&&e.numberingSystem===I&&2===Object.keys(e).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(e))return;this._numberFormatOptions=e,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const t=new Map(this._digits.map(((e,t)=>[e,t]))),i=new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-12345678.9);this._actualGroup=i.find((e=>"group"===e.type)).value,this._group=0===this._actualGroup.trim().length?" ":this._actualGroup,this._decimal=i.find((e=>"decimal"===e.type)).value,this._minusSign=i.find((e=>"minusSign"===e.type)).value,this._getDigitIndex=e=>t.get(e)}}},96515:(e,t,i)=>{function n(e,t,i){const n=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new n(t,i)}i.d(t,{c:()=>n})},64920:(e,t,i)=>{i.d(t,{c:()=>d,d:()=>h,s:()=>o,u:()=>u});var n=i(76340),a=i(34018);const s={};function l(){throw new Error("could not fetch component message bundle")}function r(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function o(e){e.defaultMessages=await c(e,e.effectiveLocale),r(e)}async function c(e,t){const{el:i}=e,r=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return s[i]||(s[i]=fetch((0,n.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||l(),e.json()))).catch((()=>l()))),s[i]}((0,a.g)(t,"t9n"),r)}async function u(e,t){e.defaultMessages=await c(e,t),r(e)}function d(e){e.onMessagesChange=m}function h(e){e.onMessagesChange=void 0}function m(){r(this)}}}]);
//# sourceMappingURL=6537.db0a41d4.chunk.js.map