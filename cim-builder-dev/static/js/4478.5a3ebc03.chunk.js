/*! For license information please see 4478.5a3ebc03.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[4478],{84478:(e,t,i)=>{i.r(t),i.d(t,{calcite_input_time_picker:()=>D,calcite_time_picker:()=>x});var n=i(85610),a=i(65224),o=i(86308),s=i(64761),r=i(12243),l=i(73972),c=i(98101),u=i(41057),d=i(3993);i(68884),i(49244);function h(e,t){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];try{const n={hour:"2-digit",minute:"2-digit",timeZone:"UTC",numberingSystem:(0,u.b)(t)};return i&&(n.second="2-digit"),new Intl.DateTimeFormat((0,u.g)(e),n)}catch(n){throw new Error(`Invalid locale supplied while attempting to create a DateTime formatter: ${e}`)}}function m(e){const t=e.toString();return e>=0&&e<=9?t.padStart(2,"0"):t}function p(e,t){if(!e||!t)return null;if("hourSuffix"===e){const e=t.indexOf(t.find((e=>{let{type:t}=e;return"hour"===t}))),i=t.indexOf(t.find((e=>{let{type:t}=e;return"minute"===t}))),n=t[e+1];return n&&"literal"===n.type&&i-e===2&&n.value?.trim()||null}if("minuteSuffix"===e){const e=t.indexOf(t.find((e=>{let{type:t}=e;return"minute"===t}))),i=t.indexOf(t.find((e=>{let{type:t}=e;return"second"===t}))),n=t[e+1];return n&&"literal"===n.type&&i-e===2&&n.value?.trim()||null}if("secondSuffix"===e){const e=t.indexOf(t.find((e=>{let{type:t}=e;return"second"===t}))),i=t[e+1];return i&&"literal"===i.type&&i.value?.trim()||null}return t.find((t=>{let{type:i}=t;return"meridiem"==e?"dayPeriod"===i:i===e}))?.value||null}function f(e){if(!(0,u.i)(e))return null;const t=parseInt(e);return t>=0&&t<=11?"AM":"PM"}function v(e){if(!e||e.startsWith(":")||e.endsWith(":"))return!1;const t=e.split(":");if(!(t.length>1&&t.length<4))return!1;const[i,n,a]=t,o=parseInt(t[0]),s=parseInt(t[1]),r=parseInt(t[2]),l=(0,u.i)(i)&&o>=0&&o<24,c=(0,u.i)(n)&&s>=0&&s<60,d=(0,u.i)(a)&&r>=0&&r<60;return!!(l&&c&&!a||l&&c&&d)||void 0}function b(e){let{value:t,part:i,locale:n,numberingSystem:a}=e;if(!function(e,t){if("meridiem"===t)return"AM"===e||"PM"===e;if(!(0,u.i)(e))return!1;const i=Number(e);return"hour"===t?i>=0&&i<24:i>=0&&i<60}(t,i))return;const o=parseInt(t),s=new Date(Date.UTC(0,0,0,"hour"===i?o:"meridiem"===i?"AM"===t?0:12:0,"minute"===i?o:0,"second"===i?o:0));if(!s)return;return p(i,h(n,a).formatToParts(s))}function g(e){let{value:t,locale:i,numberingSystem:n,includeSeconds:a=!0}=e;if(!v(t))return null;const{hour:o,minute:s,second:r="0"}=k(t),l=new Date(Date.UTC(0,0,0,parseInt(o),parseInt(s),parseInt(r)));return h(i,n,a)?.format(l)||null}function w(e){let{value:t,locale:i,numberingSystem:n}=e;if(!v(t))return null;const{hour:a,minute:o,second:s="0"}=k(t),r=new Date(Date.UTC(0,0,0,parseInt(a),parseInt(o),parseInt(s)));if(r){const e=h(i,n).formatToParts(r);return{localizedHour:p("hour",e),localizedHourSuffix:p("hourSuffix",e),localizedMinute:p("minute",e),localizedMinuteSuffix:p("minuteSuffix",e),localizedSecond:p("second",e),localizedSecondSuffix:p("secondSuffix",e),localizedMeridiem:p("meridiem",e)}}return null}function y(e){let{value:t,locale:i,numberingSystem:n}=e;if(!v(t))return null;const{hour:a,minute:o,second:s="0"}=k(t),r=new Date(Date.UTC(0,0,0,parseInt(a),parseInt(o),parseInt(s)));if(r){return h(i,n).formatToParts(r)}return null}function k(e){if(v(e)){const[t,i,n]=e.split(":");return{hour:t,minute:i,second:n}}return{hour:null,minute:null,second:null}}const D=class{constructor(e){(0,n.r)(this,e),this.calciteInputTimePickerChange=(0,n.c)(this,"calciteInputTimePickerChange",7),this.internalValueChange=!1,this.previousValidValue=null,this.referenceElementId=`input-time-picker-${(0,o.g)()}`,this.calciteInternalInputBlurHandler=()=>{this.open=!1;const e=this.shouldIncludeSeconds(),{effectiveLocale:t,numberingSystem:i,value:n,calciteInputEl:a}=this;u.n.numberFormatOptions={locale:t,numberingSystem:i,useGrouping:!1};const o=g({value:u.n.delocalize(a.value),includeSeconds:e,locale:t,numberingSystem:i});this.setInputValue(o||g({value:n,locale:t,numberingSystem:i,includeSeconds:e}))},this.calciteInternalInputFocusHandler=e=>{this.readOnly||(this.open=!0,e.stopPropagation())},this.calciteInputInputHandler=e=>{const t=e.target;u.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:!1};const i=u.n.delocalize(t.value);this.setValue({value:i});const n=i.split("").map((e=>r.n.includes(e)?u.n.numberFormatter.format(Number(e)):e)).join("");this.setInputValue(n)},this.timePickerChangeHandler=e=>{e.stopPropagation();const t=e.target.value;this.setValue({value:t,origin:"time-picker"})},this.keyDownHandler=e=>{const{defaultPrevented:t,key:i}=e;t||("Enter"===i&&(0,a.s)(this)&&e.preventDefault(),"Escape"===i&&this.open&&(this.open=!1,e.preventDefault()))},this.setCalcitePopoverEl=e=>{this.popoverEl=e},this.setCalciteInputEl=e=>{this.calciteInputEl=e},this.setCalciteTimePickerEl=e=>{this.calciteTimePickerEl=e},this.setInputValue=e=>{this.calciteInputEl&&(this.calciteInputEl.value=e)},this.setValue=e=>{let{value:t,origin:i="input"}=e;const n=this.value,a=function(e){if(!v(e))return null;const[t,i,n]=e.split(":"),a=m(parseInt(t)),o=m(parseInt(i));if(n)return`${a}:${o}:${m(parseInt(n))}`;return`${a}:${o}`}(t),o=g({value:a,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,includeSeconds:this.shouldIncludeSeconds()});this.internalValueChange="external"!==i&&"loading"!==i;const s="loading"!==i&&"external"!==i&&(t!==this.previousValidValue&&!t||!(this.previousValidValue||!a)||a!==this.previousValidValue&&a);if(t?(s&&(this.previousValidValue=a),a&&a!==this.value&&(this.value=a),this.localizedValue=o):(this.value=t,this.localizedValue=null),"time-picker"!==i&&"external"!==i||this.setInputValue(o),s){this.calciteInputTimePickerChange.emit().defaultPrevented?(this.internalValueChange=!1,this.value=n,this.setInputValue(n),this.previousValidValue=n):this.previousValidValue=a}},this.open=!1,this.disabled=!1,this.readOnly=!1,this.messagesOverrides=void 0,this.name=void 0,this.numberingSystem=void 0,this.required=!1,this.scale="m",this.overlayPositioning="absolute",this.placement="auto",this.step=60,this.value=null,this.effectiveLocale="",this.localizedValue=void 0}openHandler(e){this.disabled||this.readOnly?this.open=!1:e&&this.reposition(!0)}handleDisabledAndReadOnlyChange(e){e||(this.open=!1)}valueWatcher(e){this.internalValueChange||this.setValue({value:e,origin:"external"}),this.internalValueChange=!1}effectiveLocaleWatcher(){this.setInputValue(g({value:this.value,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,includeSeconds:this.shouldIncludeSeconds()}))}clickHandler(e){e.composedPath().includes(this.calciteTimePickerEl)||this.setFocus()}timePickerBlurHandler(e){e.preventDefault(),e.stopPropagation(),this.open=!1}timePickerFocusHandler(e){e.preventDefault(),e.stopPropagation(),this.readOnly||(this.open=!0)}async setFocus(){await(0,c.c)(this),this.el.focus()}async reposition(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.popoverEl?.reposition(e)}onLabelClick(){this.setFocus()}shouldIncludeSeconds(){return this.step<60}connectedCallback(){(0,u.c)(this),this.value&&this.setValue({value:v(this.value)?this.value:void 0,origin:"loading"}),(0,l.c)(this),(0,a.c)(this)}componentWillLoad(){(0,c.s)(this)}componentDidLoad(){(0,c.a)(this),this.setInputValue(this.localizedValue)}disconnectedCallback(){(0,l.d)(this),(0,a.d)(this),(0,u.d)(this)}componentDidRender(){(0,s.u)(this)}render(){const e=`${this.referenceElementId}-popover`;return(0,n.h)(n.H,{onKeyDown:this.keyDownHandler},(0,n.h)("div",{"aria-controls":e,"aria-haspopup":"dialog","aria-label":this.name,"aria-owns":e,id:this.referenceElementId,role:"combobox"},(0,n.h)("calcite-input",{disabled:this.disabled,icon:"clock",label:(0,l.g)(this),onCalciteInputInput:this.calciteInputInputHandler,onCalciteInternalInputBlur:this.calciteInternalInputBlurHandler,onCalciteInternalInputFocus:this.calciteInternalInputFocusHandler,readOnly:this.readOnly,scale:this.scale,step:this.step,ref:this.setCalciteInputEl})),(0,n.h)("calcite-popover",{focusTrapDisabled:!0,id:e,label:"Time Picker",open:this.open,overlayPositioning:this.overlayPositioning,placement:this.placement,referenceElement:this.referenceElementId,triggerDisabled:!0,ref:this.setCalcitePopoverEl},(0,n.h)("calcite-time-picker",{lang:this.effectiveLocale,messageOverrides:this.messagesOverrides,numberingSystem:this.numberingSystem,onCalciteInternalTimePickerChange:this.timePickerChangeHandler,scale:this.scale,step:this.step,value:this.value,ref:this.setCalciteTimePickerEl})),(0,n.h)(a.H,{component:this}))}static get delegatesFocus(){return!0}get el(){return(0,n.g)(this)}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledAndReadOnlyChange"],readOnly:["handleDisabledAndReadOnlyChange"],value:["valueWatcher"],effectiveLocale:["effectiveLocaleWatcher"]}}};D.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline-block;-webkit-user-select:none;user-select:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";const S={button:"button",buttonBottomLeft:"button--bottom-left",buttonBottomRight:"button--bottom-right",buttonHourDown:"button--hour-down",buttonHourUp:"button--hour-up",buttonMeridiemDown:"button--meridiem-down",buttonMeridiemUp:"button--meridiem-up",buttonMinuteDown:"button--minute-down",buttonMinuteUp:"button--minute-up",buttonSecondDown:"button--second-down",buttonSecondUp:"button--second-up",buttonTopLeft:"button--top-left",buttonTopRight:"button--top-right",column:"column",delimiter:"delimiter",hour:"hour",input:"input",meridiem:"meridiem",minute:"minute",second:"second",showMeridiem:"show-meridiem",showSecond:"show-second","scale-s":"scale-s","scale-m":"scale-m","scale-l":"scale-l",timePicker:"time-picker",meridiemStart:"meridiem--start"};function I(e){return e.charAt(0).toUpperCase()+e.slice(1)}const x=class{constructor(e){var t=this;(0,n.r)(this,e),this.calciteInternalTimePickerBlur=(0,n.c)(this,"calciteInternalTimePickerBlur",6),this.calciteInternalTimePickerChange=(0,n.c)(this,"calciteInternalTimePickerChange",6),this.calciteInternalTimePickerFocus=(0,n.c)(this,"calciteInternalTimePickerFocus",6),this.decrementHour=()=>{const e=this.hour?"00"===this.hour?23:parseInt(this.hour)-1:0;this.setValuePart("hour",e)},this.decrementMeridiem=()=>{const e="PM"===this.meridiem?"AM":"PM";this.setValuePart("meridiem",e)},this.decrementMinuteOrSecond=e=>{let t;if((0,u.i)(this[e])){const i=parseInt(this[e]);t=0===i?59:i-1}else t=59;this.setValuePart(e,t)},this.decrementMinute=()=>{this.decrementMinuteOrSecond("minute")},this.decrementSecond=()=>{this.decrementMinuteOrSecond("second")},this.focusHandler=e=>{this.activeEl=e.currentTarget},this.hourDownButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.decrementHour()},this.hourKeyDownHandler=e=>{const{key:t}=e;if(r.n.includes(t)){const e=parseInt(t);let i;if((0,u.i)(this.hour))switch(this.hourCycle){case"12":i="01"===this.hour&&e>=0&&e<=2?`1${e}`:e;break;case"24":i="01"===this.hour?`1${e}`:"02"===this.hour&&e>=0&&e<=3?`2${e}`:e}else i=e;this.setValuePart("hour",i)}else switch(t){case"Backspace":case"Delete":this.setValuePart("hour",null);break;case"ArrowDown":e.preventDefault(),this.decrementHour();break;case"ArrowUp":e.preventDefault(),this.incrementHour();break;case" ":e.preventDefault()}},this.hourUpButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.incrementHour()},this.incrementMeridiem=()=>{const e="AM"===this.meridiem?"PM":"AM";this.setValuePart("meridiem",e)},this.incrementHour=()=>{const e=(0,u.i)(this.hour)?"23"===this.hour?0:parseInt(this.hour)+1:1;this.setValuePart("hour",e)},this.incrementMinuteOrSecond=e=>{const t=(0,u.i)(this[e])?"59"===this[e]?0:parseInt(this[e])+1:0;this.setValuePart(e,t)},this.incrementMinute=()=>{this.incrementMinuteOrSecond("minute")},this.incrementSecond=()=>{this.incrementMinuteOrSecond("second")},this.meridiemDownButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.decrementMeridiem()},this.meridiemKeyDownHandler=e=>{switch(e.key){case"a":this.setValuePart("meridiem","AM");break;case"p":this.setValuePart("meridiem","PM");break;case"Backspace":case"Delete":this.setValuePart("meridiem",null);break;case"ArrowUp":e.preventDefault(),this.incrementMeridiem();break;case"ArrowDown":e.preventDefault(),this.decrementMeridiem();break;case" ":e.preventDefault()}},this.meridiemUpButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.incrementMeridiem()},this.minuteDownButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.decrementMinute()},this.minuteKeyDownHandler=e=>{const{key:t}=e;if(r.n.includes(t)){const e=parseInt(t);let i;if((0,u.i)(this.minute)&&this.minute.startsWith("0")){const t=parseInt(this.minute);i=t>5?e:`${t}${e}`}else i=e;this.setValuePart("minute",i)}else switch(t){case"Backspace":case"Delete":this.setValuePart("minute",null);break;case"ArrowDown":e.preventDefault(),this.decrementMinute();break;case"ArrowUp":e.preventDefault(),this.incrementMinute();break;case" ":e.preventDefault()}},this.minuteUpButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.incrementMinute()},this.secondDownButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.decrementSecond()},this.secondKeyDownHandler=e=>{const{key:t}=e;if(r.n.includes(t)){const e=parseInt(t);let i;if((0,u.i)(this.second)&&this.second.startsWith("0")){const t=parseInt(this.second);i=t>5?e:`${t}${e}`}else i=e;this.setValuePart("second",i)}else switch(t){case"Backspace":case"Delete":this.setValuePart("second",null);break;case"ArrowDown":e.preventDefault(),this.decrementSecond();break;case"ArrowUp":e.preventDefault(),this.incrementSecond();break;case" ":e.preventDefault()}},this.secondUpButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.incrementSecond()},this.setHourEl=e=>this.hourEl=e,this.setMeridiemEl=e=>this.meridiemEl=e,this.setMinuteEl=e=>this.minuteEl=e,this.setSecondEl=e=>this.secondEl=e,this.setValue=function(e){let i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(v(e)){const{hour:i,minute:n,second:a}=k(e),{effectiveLocale:o,numberingSystem:s}=t,{localizedHour:r,localizedHourSuffix:l,localizedMinute:c,localizedMinuteSuffix:u,localizedSecond:d,localizedSecondSuffix:h,localizedMeridiem:m}=w({value:e,locale:o,numberingSystem:s});if(t.localizedHour=r,t.localizedHourSuffix=l,t.localizedMinute=c,t.localizedMinuteSuffix=u,t.localizedSecond=d,t.localizedSecondSuffix=h,t.hour=i,t.minute=n,t.second=a,m){t.localizedMeridiem=m,t.meridiem=f(t.hour);const i=y({value:e,locale:o,numberingSystem:s});t.meridiemOrder=t.getMeridiemOrder(i)}}else t.hour=null,t.localizedHour=null,t.localizedHourSuffix=null,t.localizedMeridiem=null,t.localizedMinute=null,t.localizedMinuteSuffix=null,t.localizedSecond=null,t.localizedSecondSuffix=null,t.meridiem=null,t.minute=null,t.second=null,t.value=null;i&&t.calciteInternalTimePickerChange.emit()},this.setValuePart=function(e,i){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const{effectiveLocale:a,numberingSystem:o}=t;if("meridiem"===e){if(t.meridiem=i,(0,u.i)(t.hour)){const e=parseInt(t.hour);switch(i){case"AM":e>=12&&(t.hour=m(e-12));break;case"PM":e<12&&(t.hour=m(e+12))}t.localizedHour=b({value:t.hour,part:"hour",locale:a,numberingSystem:o})}}else t[e]="number"===typeof i?m(i):i,t[`localized${I(e)}`]=b({value:t[e],part:e,locale:a,numberingSystem:o});if(t.hour&&t.minute){const e=t.second&&t.showSecond;t.value=`${t.hour}:${t.minute}:${e?t.second:"00"}`}else t.value=null;t.localizedMeridiem=t.value?w({value:t.value,locale:a,numberingSystem:o})?.localizedMeridiem||null:b({value:t.meridiem,part:"meridiem",locale:a,numberingSystem:o}),n&&t.calciteInternalTimePickerChange.emit()},this.scale="m",this.step=60,this.numberingSystem=void 0,this.value=null,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.hour=void 0,this.hourCycle=void 0,this.localizedHour=void 0,this.localizedHourSuffix=void 0,this.localizedMeridiem=void 0,this.localizedMinute=void 0,this.localizedMinuteSuffix=void 0,this.localizedSecond=void 0,this.localizedSecondSuffix=void 0,this.meridiem=void 0,this.minute=void 0,this.second=void 0,this.showSecond=this.step<60,this.defaultMessages=void 0}valueWatcher(e){this.setValue(e,!1)}onMessagesChange(){}effectiveLocaleWatcher(){this.updateLocale()}hostBlurHandler(){this.calciteInternalTimePickerBlur.emit()}hostFocusHandler(){this.calciteInternalTimePickerFocus.emit()}keyDownHandler(e){const{defaultPrevented:t,key:i}=e;if(!t)switch(this.activeEl){case this.hourEl:"ArrowRight"===i&&(this.focusPart("minute"),e.preventDefault());break;case this.minuteEl:switch(i){case"ArrowLeft":this.focusPart("hour"),e.preventDefault();break;case"ArrowRight":60!==this.step?(this.focusPart("second"),e.preventDefault()):"12"===this.hourCycle&&(this.focusPart("meridiem"),e.preventDefault())}break;case this.secondEl:switch(i){case"ArrowLeft":this.focusPart("minute"),e.preventDefault();break;case"ArrowRight":"12"===this.hourCycle&&(this.focusPart("meridiem"),e.preventDefault())}break;case this.meridiemEl:if("ArrowLeft"===i)60!==this.step?(this.focusPart("second"),e.preventDefault()):(this.focusPart("minute"),e.preventDefault())}}async setFocus(){await(0,c.c)(this),this.el?.focus()}async focusPart(e){await(0,c.c)(this),this[`${e||"hour"}El`]?.focus()}buttonActivated(e){const{key:t}=e;return" "===t&&e.preventDefault(),(0,r.i)(t)}getMeridiemOrder(e){const t=this.effectiveLocale;if(e&&!("ar"===t||"he"===t)){return e.findIndex((e=>e.value===this.localizedMeridiem))}return 0}updateLocale(){var e,t;(0,d.u)(this,this.effectiveLocale),this.hourCycle=(e=this.effectiveLocale,t=this.numberingSystem,p("meridiem",h(e,t).formatToParts(new Date(Date.UTC(0,0,0,0,0,0))))?"12":"24"),this.setValue(this.value,!1)}connectedCallback(){(0,u.c)(this),this.updateLocale(),(0,d.c)(this),this.meridiemOrder=this.getMeridiemOrder(y({value:"0:00:00",locale:this.effectiveLocale,numberingSystem:this.numberingSystem}))}async componentWillLoad(){(0,c.s)(this),await(0,d.s)(this)}componentDidLoad(){(0,c.a)(this)}disconnectedCallback(){(0,u.d)(this),(0,d.d)(this)}render(){const e=(0,u.i)(this.hour),t="s"===this.scale||"m"===this.scale?"s":"m",i=(0,u.i)(this.minute),a=(0,u.i)(this.second),o="12"===this.hourCycle;return(0,n.h)("div",{class:{[S.timePicker]:!0,[S.showMeridiem]:o,[S.showSecond]:this.showSecond,[S[`scale-${this.scale}`]]:!0},dir:"ltr"},(0,n.h)("div",{class:S.column,role:"group"},(0,n.h)("span",{"aria-label":this.messages.hourUp,class:{[S.button]:!0,[S.buttonHourUp]:!0,[S.buttonTopLeft]:!0},onClick:this.incrementHour,onKeyDown:this.hourUpButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-up",scale:t})),(0,n.h)("span",{"aria-label":this.messages.hour,"aria-valuemax":"23","aria-valuemin":"1","aria-valuenow":e&&parseInt(this.hour)||"0","aria-valuetext":this.hour,class:{[S.input]:!0,[S.hour]:!0},onFocus:this.focusHandler,onKeyDown:this.hourKeyDownHandler,role:"spinbutton",tabIndex:0,ref:this.setHourEl},this.localizedHour||"--"),(0,n.h)("span",{"aria-label":this.messages.hourDown,class:{[S.button]:!0,[S.buttonHourDown]:!0,[S.buttonBottomLeft]:!0},onClick:this.decrementHour,onKeyDown:this.hourDownButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-down",scale:t}))),(0,n.h)("span",{class:S.delimiter},this.localizedHourSuffix),(0,n.h)("div",{class:S.column,role:"group"},(0,n.h)("span",{"aria-label":this.messages.minuteUp,class:{[S.button]:!0,[S.buttonMinuteUp]:!0},onClick:this.incrementMinute,onKeyDown:this.minuteUpButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-up",scale:t})),(0,n.h)("span",{"aria-label":this.messages.minute,"aria-valuemax":"12","aria-valuemin":"1","aria-valuenow":i&&parseInt(this.minute)||"0","aria-valuetext":this.minute,class:{[S.input]:!0,[S.minute]:!0},onFocus:this.focusHandler,onKeyDown:this.minuteKeyDownHandler,role:"spinbutton",tabIndex:0,ref:this.setMinuteEl},this.localizedMinute||"--"),(0,n.h)("span",{"aria-label":this.messages.minuteDown,class:{[S.button]:!0,[S.buttonMinuteDown]:!0},onClick:this.decrementMinute,onKeyDown:this.minuteDownButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-down",scale:t}))),this.showSecond&&(0,n.h)("span",{class:S.delimiter},this.localizedMinuteSuffix),this.showSecond&&(0,n.h)("div",{class:S.column,role:"group"},(0,n.h)("span",{"aria-label":this.messages.secondUp,class:{[S.button]:!0,[S.buttonSecondUp]:!0},onClick:this.incrementSecond,onKeyDown:this.secondUpButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-up",scale:t})),(0,n.h)("span",{"aria-label":this.messages.second,"aria-valuemax":"59","aria-valuemin":"0","aria-valuenow":a&&parseInt(this.second)||"0","aria-valuetext":this.second,class:{[S.input]:!0,[S.second]:!0},onFocus:this.focusHandler,onKeyDown:this.secondKeyDownHandler,role:"spinbutton",tabIndex:0,ref:this.setSecondEl},this.localizedSecond||"--"),(0,n.h)("span",{"aria-label":this.messages.secondDown,class:{[S.button]:!0,[S.buttonSecondDown]:!0},onClick:this.decrementSecond,onKeyDown:this.secondDownButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-down",scale:t}))),this.localizedSecondSuffix&&(0,n.h)("span",{class:S.delimiter},this.localizedSecondSuffix),o&&(0,n.h)("div",{class:{[S.column]:!0,[S.meridiemStart]:0===this.meridiemOrder},role:"group"},(0,n.h)("span",{"aria-label":this.messages.meridiemUp,class:{[S.button]:!0,[S.buttonMeridiemUp]:!0,[S.buttonTopRight]:!0},onClick:this.incrementMeridiem,onKeyDown:this.meridiemUpButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-up",scale:t})),(0,n.h)("span",{"aria-label":this.messages.meridiem,"aria-valuemax":"2","aria-valuemin":"1","aria-valuenow":"PM"===this.meridiem?"2":"1","aria-valuetext":this.meridiem,class:{[S.input]:!0,[S.meridiem]:!0},onFocus:this.focusHandler,onKeyDown:this.meridiemKeyDownHandler,role:"spinbutton",tabIndex:0,ref:this.setMeridiemEl},this.localizedMeridiem||"--"),(0,n.h)("span",{"aria-label":this.messages.meridiemDown,class:{[S.button]:!0,[S.buttonMeridiemDown]:!0,[S.buttonBottomRight]:!0},onClick:this.decrementMeridiem,onKeyDown:this.meridiemDownButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-down",scale:t}))))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{value:["valueWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleWatcher"]}}};x.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:inline-block}.time-picker{display:flex;-webkit-user-select:none;user-select:none;align-items:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius)}.time-picker .column{display:flex;flex-direction:column}.time-picker .meridiem--start{order:-1}.time-picker .button{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1)}.time-picker .button:hover,.time-picker .button:focus{background-color:var(--calcite-ui-foreground-2);outline:2px solid transparent;outline-offset:2px;z-index:400;outline-offset:0}.time-picker .button:active{background-color:var(--calcite-ui-foreground-3)}.time-picker .button.top-left{border-start-start-radius:var(--calcite-border-radius)}.time-picker .button.bottom-left{border-end-start-radius:var(--calcite-border-radius)}.time-picker .button.top-right{border-start-end-radius:var(--calcite-border-radius)}.time-picker .button.bottom-right{border-end-end-radius:var(--calcite-border-radius)}.time-picker .button calcite-icon{color:var(--calcite-ui-text-3)}.time-picker .input{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium)}.time-picker .input:hover{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-2);z-index:400}.time-picker .input:focus,.time-picker .input:hover:focus{outline:2px solid transparent;outline-offset:2px;box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);z-index:400;outline-offset:0}.time-picker.scale-s{font-size:var(--calcite-font-size--1)}.time-picker.scale-s .button,.time-picker.scale-s .input{padding-inline:0.75rem;padding-block:0.25rem}.time-picker.scale-s:not(.show-meridiem) .delimiter:last-child{padding-inline-end:0.75rem}.time-picker.scale-m{font-size:var(--calcite-font-size-0)}.time-picker.scale-m .button,.time-picker.scale-m .input{padding-inline:1rem;padding-block:0.5rem}.time-picker.scale-m:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1rem}.time-picker.scale-l{font-size:var(--calcite-font-size-1)}.time-picker.scale-l .button,.time-picker.scale-l .input{padding-inline:1.25rem;padding-block:0.75rem}.time-picker.scale-l:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1.25rem}"},65224:(e,t,i)=>{i.d(t,{H:()=>g,a:()=>p,c:()=>d,d:()=>m,r:()=>u,s:()=>c});var n=i(68884),a=i(85610);const o="hidden-form-input";function s(e){return"checked"in e}const r=new WeakMap,l=new WeakSet;function c(e){const{formEl:t}=e;return!!t&&("requestSubmit"in t?t.requestSubmit():t.submit(),!0)}function u(e){e.formEl?.reset()}function d(e){const{el:t,value:i}=e,a=(0,n.c)(t,"form");if(!a||function(e,t){const i="calciteInternalFormComponentRegister";let n=!1;return e.addEventListener(i,(e=>{n=e.composedPath().some((e=>l.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0})),n}(a,t))return;e.formEl=a,e.defaultValue=i,s(e)&&(e.defaultChecked=e.checked);const o=(e.onFormReset||h).bind(e);a.addEventListener("reset",o),r.set(e.el,o),l.add(t)}function h(){s(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function m(e){const{el:t,formEl:i}=e;if(!i)return;const n=r.get(t);i.removeEventListener("reset",n),r.delete(t),e.formEl=null,l.delete(t)}function p(e,t){e.defaultValue=t}const f=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},v=e=>e.removeEventListener("change",f);function b(e,t,i){const{defaultValue:n,disabled:a,name:o,required:r}=e;t.defaultValue=n,t.disabled=a,t.name=o,t.required=r,t.tabIndex=-1,s(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?i||"on":""):t.value=i||"",e.syncHiddenFormInput?.(t)}const g=e=>{let{component:t}=e;return function(e){const{el:t,formEl:i,name:n,value:a}=e,{ownerDocument:s}=t,r=t.querySelectorAll('input[slot="hidden-form-input"]');if(!i||!n)return void r.forEach((e=>{v(e),e.remove()}));const l=Array.isArray(a)?a:[a],c=[],u=new Set;let d;r.forEach((t=>{const i=l.find((e=>e==t.value));null!=i?(u.add(i),b(e,t,i)):c.push(t)})),l.forEach((t=>{if(u.has(t))return;let i=c.pop();i||(i=s.createElement("input"),i.slot=o),d||(d=s.createDocumentFragment()),d.append(i),i.addEventListener("change",f),b(e,i,t)})),d&&t.append(d),c.forEach((e=>{v(e),e.remove()}))}(t),(0,a.h)("slot",{name:o})}},64761:(e,t,i)=>{function n(){}function a(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void(e.el.click=n);e.el.click=HTMLElement.prototype.click,"function"===typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}i.d(t,{u:()=>a})},73972:(e,t,i)=>{i.d(t,{a:()=>s,c:()=>m,d:()=>p,g:()=>f,l:()=>o});var n=i(68884);const a="calciteInternalLabelClick",o="calciteInternalLabelConnected",s="calciteInternaLabelDisconnected",r="calcite-label",l=new WeakMap,c=new WeakMap,u=new WeakMap,d=new Set,h=e=>{const{id:t}=e,i=t&&(0,n.q)(e,{selector:`calcite-label[for="${t}"]`});if(i)return i;const a=(0,n.c)(e,r);return!a||function(e,t){let i;const n="custom-element-ancestor-check",a=n=>{n.stopImmediatePropagation();const a=n.composedPath();i=a.slice(a.indexOf(t),a.indexOf(e))};e.addEventListener(n,a,{once:!0}),t.dispatchEvent(new CustomEvent(n,{composed:!0,bubbles:!0})),e.removeEventListener(n,a);return i.filter((i=>i!==t&&i!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(a,e)?null:a};function m(e){const t=h(e.el);if(l.has(t)||!t&&d.has(e))return;const i=g.bind(e);if(t){e.labelEl=t;const n=v.bind(e);l.set(e.labelEl,n),e.labelEl.addEventListener(a,n),d.delete(e),document.removeEventListener(o,c.get(e)),u.set(e,i),document.addEventListener(s,i)}else d.has(e)||(i(),document.removeEventListener(s,u.get(e)))}function p(e){if(d.delete(e),document.removeEventListener(o,c.get(e)),document.removeEventListener(s,u.get(e)),c.delete(e),u.delete(e),!e.labelEl)return;const t=l.get(e.labelEl);e.labelEl.removeEventListener(a,t),l.delete(e.labelEl)}function f(e){return e.label||e.labelEl?.textContent?.trim()||""}function v(e){if(this.disabled)return;this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e)}function b(){d.has(this)&&m(this)}function g(){d.add(this);const e=c.get(this)||b.bind(this);c.set(this,e),document.addEventListener(o,e)}},98101:(e,t,i)=>{i.d(t,{a:()=>s,c:()=>r,s:()=>o});const n=new WeakMap,a=new WeakMap;function o(e){a.set(e,new Promise((t=>n.set(e,t))))}function s(e){n.get(e)()}function r(e){return a.get(e)}}}]);
//# sourceMappingURL=4478.5a3ebc03.chunk.js.map