/*! For license information please see 4478.32bef95c.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[4478],{84478:(e,t,i)=>{i.r(t),i.d(t,{calcite_input_time_picker:()=>y,calcite_time_picker:()=>F});var n=i(97164),a=i(1950),r=i(57247),o=i(28634),s=i(34396),l=i(55716),c=i(22681);i(23241),i(40178);function u(e,t){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];try{const n={hour:"2-digit",minute:"2-digit",timeZone:"UTC",numberingSystem:(0,r.b)(t)};return i&&(n.second="2-digit"),new Intl.DateTimeFormat((0,r.g)(e),n)}catch(n){throw new Error(`Invalid locale supplied while attempting to create a DateTime formatter: ${e}`)}}function d(e){const t=e.toString();return e>=0&&e<=9?t.padStart(2,"0"):t}function h(e,t){var i,n,a,r;if(!e||!t)return null;if("hourSuffix"===e){const e=t.indexOf(t.find((e=>{let{type:t}=e;return"hour"===t}))),n=t.indexOf(t.find((e=>{let{type:t}=e;return"minute"===t}))),a=t[e+1];return a&&"literal"===a.type&&n-e===2&&(null===(i=a.value)||void 0===i?void 0:i.trim())||null}if("minuteSuffix"===e){const e=t.indexOf(t.find((e=>{let{type:t}=e;return"minute"===t}))),i=t.indexOf(t.find((e=>{let{type:t}=e;return"second"===t}))),a=t[e+1];return a&&"literal"===a.type&&i-e===2&&(null===(n=a.value)||void 0===n?void 0:n.trim())||null}if("secondSuffix"===e){const e=t.indexOf(t.find((e=>{let{type:t}=e;return"second"===t}))),i=t[e+1];return i&&"literal"===i.type&&(null===(a=i.value)||void 0===a?void 0:a.trim())||null}return(null===(r=t.find((t=>{let{type:i}=t;return"meridiem"==e?"dayPeriod"===i:i===e})))||void 0===r?void 0:r.value)||null}function m(e){if(!(0,r.i)(e))return null;const t=parseInt(e);return t>=0&&t<=11?"AM":"PM"}function p(e){if(!e||e.startsWith(":")||e.endsWith(":"))return!1;const t=e.split(":");if(!(t.length>1&&t.length<4))return!1;const[i,n,a]=t,o=parseInt(t[0]),s=parseInt(t[1]),l=parseInt(t[2]),c=(0,r.i)(i)&&o>=0&&o<24,u=(0,r.i)(n)&&s>=0&&s<60,d=(0,r.i)(a)&&l>=0&&l<60;return!!(c&&u&&!a||c&&u&&d)||void 0}function f(e){let{value:t,part:i,locale:n,numberingSystem:a}=e;if(!function(e,t){if("meridiem"===t)return"AM"===e||"PM"===e;if(!(0,r.i)(e))return!1;const i=Number(e);return"hour"===t?i>=0&&i<24:i>=0&&i<60}(t,i))return;const o=parseInt(t),s=new Date(Date.UTC(0,0,0,"hour"===i?o:"meridiem"===i?"AM"===t?0:12:0,"minute"===i?o:0,"second"===i?o:0));if(!s)return;return h(i,u(n,a).formatToParts(s))}function v(e){let{value:t,locale:i,numberingSystem:n,includeSeconds:a=!0}=e;if(!p(t))return null;const{hour:r,minute:o,second:s="0"}=w(t),l=new Date(Date.UTC(0,0,0,parseInt(r),parseInt(o),parseInt(s))),c=u(i,n,a);return(null===c||void 0===c?void 0:c.format(l))||null}function b(e){let{value:t,locale:i,numberingSystem:n}=e;if(!p(t))return null;const{hour:a,minute:r,second:o="0"}=w(t),s=new Date(Date.UTC(0,0,0,parseInt(a),parseInt(r),parseInt(o)));if(s){const e=u(i,n).formatToParts(s);return{localizedHour:h("hour",e),localizedHourSuffix:h("hourSuffix",e),localizedMinute:h("minute",e),localizedMinuteSuffix:h("minuteSuffix",e),localizedSecond:h("second",e),localizedSecondSuffix:h("secondSuffix",e),localizedMeridiem:h("meridiem",e)}}return null}function g(e){let{value:t,locale:i,numberingSystem:n}=e;if(!p(t))return null;const{hour:a,minute:r,second:o="0"}=w(t),s=new Date(Date.UTC(0,0,0,parseInt(a),parseInt(r),parseInt(o)));if(s){return u(i,n).formatToParts(s)}return null}function w(e){if(p(e)){const[t,i,n]=e.split(":");return{hour:t,minute:i,second:n}}return{hour:null,minute:null,second:null}}const y=class{constructor(e){(0,n.r)(this,e),this.calciteInputTimePickerChange=(0,n.c)(this,"calciteInputTimePickerChange",7),this.active=!1,this.open=!1,this.disabled=!1,this.readOnly=!1,this.required=!1,this.scale="m",this.overlayPositioning="absolute",this.placement="auto",this.step=60,this.value=null,this.internalValueChange=!1,this.previousValidValue=null,this.referenceElementId=`input-time-picker-${(0,a.g)()}`,this.effectiveLocale="",this.calciteInternalInputBlurHandler=()=>{this.open=!1;const e=this.shouldIncludeSeconds(),{effectiveLocale:t,numberingSystem:i,value:n,calciteInputEl:a}=this;r.n.numberFormatOptions={locale:t,numberingSystem:i,useGrouping:!1};const o=v({value:r.n.delocalize(a.value),includeSeconds:e,locale:t,numberingSystem:i});this.setInputValue(o||v({value:n,locale:t,numberingSystem:i,includeSeconds:e}))},this.calciteInternalInputFocusHandler=e=>{this.readOnly||(this.open=!0,e.stopPropagation())},this.calciteInputInputHandler=e=>{const t=e.target;r.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:!1};const i=r.n.delocalize(t.value);this.setValue({value:i});const n=i.split("").map((e=>c.n.includes(e)?r.n.numberFormatter.format(Number(e)):e)).join("");this.setInputValue(n)},this.timePickerChangeHandler=e=>{e.stopPropagation();const t=e.target.value;this.setValue({value:t,origin:"time-picker"})},this.keyDownHandler=e=>{const{defaultPrevented:t,key:i}=e;t||("Enter"===i&&(0,s.s)(this)&&e.preventDefault(),"Escape"===i&&this.open&&(this.open=!1,e.preventDefault()))},this.setCalcitePopoverEl=e=>{this.popoverEl=e},this.setCalciteInputEl=e=>{this.calciteInputEl=e},this.setCalciteTimePickerEl=e=>{this.calciteTimePickerEl=e},this.setInputValue=e=>{this.calciteInputEl&&(this.calciteInputEl.value=e)},this.setValue=e=>{let{value:t,origin:i="input"}=e;const n=this.value,a=function(e){if(!p(e))return null;const[t,i,n]=e.split(":"),a=d(parseInt(t)),r=d(parseInt(i));if(n)return`${a}:${r}:${d(parseInt(n))}`;return`${a}:${r}`}(t),r=v({value:a,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,includeSeconds:this.shouldIncludeSeconds()});this.internalValueChange="external"!==i&&"loading"!==i;const o="loading"!==i&&"external"!==i&&(t!==this.previousValidValue&&!t||!(this.previousValidValue||!a)||a!==this.previousValidValue&&a);if(t?(o&&(this.previousValidValue=a),a&&a!==this.value&&(this.value=a),this.localizedValue=r):(this.value=t,this.localizedValue=null),"time-picker"!==i&&"external"!==i||this.setInputValue(r),o){this.calciteInputTimePickerChange.emit().defaultPrevented?(this.internalValueChange=!1,this.value=n,this.setInputValue(n),this.previousValidValue=n):this.previousValidValue=a}}}activeHandler(e){this.open=e}openHandler(e){this.active=e,this.disabled||this.readOnly?this.open=!1:e&&this.reposition(!0)}handleDisabledAndReadOnlyChange(e){e||(this.open=!1)}localeChanged(){(0,r.u)(this)}valueWatcher(e){this.internalValueChange||this.setValue({value:e,origin:"external"}),this.internalValueChange=!1}effectiveLocaleWatcher(){this.setInputValue(v({value:this.value,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,includeSeconds:this.shouldIncludeSeconds()}))}clickHandler(e){e.composedPath().includes(this.calciteTimePickerEl)||this.setFocus()}timePickerBlurHandler(e){e.preventDefault(),e.stopPropagation(),this.open=!1}timePickerFocusHandler(e){e.preventDefault(),e.stopPropagation(),this.readOnly||(this.open=!0)}async setFocus(){var e;null===(e=this.calciteInputEl)||void 0===e||e.setFocus()}async reposition(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;null===(t=this.popoverEl)||void 0===t||t.reposition(e)}onLabelClick(){this.setFocus()}shouldIncludeSeconds(){return this.step<60}connectedCallback(){(0,r.c)(this);const{active:e,open:t}=this;this.value&&this.setValue({value:p(this.value)?this.value:void 0,origin:"loading"}),(0,o.c)(this),(0,s.c)(this),t?this.active=t:e&&(this.open=e)}componentDidLoad(){this.setInputValue(this.localizedValue)}disconnectedCallback(){(0,o.d)(this),(0,s.d)(this),(0,r.d)(this)}componentDidRender(){(0,l.u)(this)}render(){const e=`${this.referenceElementId}-popover`;return(0,n.h)(n.H,{onKeyDown:this.keyDownHandler},(0,n.h)("div",{"aria-controls":e,"aria-haspopup":"dialog","aria-label":this.name,"aria-owns":e,id:this.referenceElementId,role:"combobox"},(0,n.h)("calcite-input",{disabled:this.disabled,icon:"clock",label:(0,o.g)(this),onCalciteInputInput:this.calciteInputInputHandler,onCalciteInternalInputBlur:this.calciteInternalInputBlurHandler,onCalciteInternalInputFocus:this.calciteInternalInputFocusHandler,readOnly:this.readOnly,ref:this.setCalciteInputEl,scale:this.scale,step:this.step})),(0,n.h)("calcite-popover",{id:e,label:"Time Picker",open:this.open,overlayPositioning:this.overlayPositioning,placement:this.placement,ref:this.setCalcitePopoverEl,referenceElement:this.referenceElementId,triggerDisabled:!0},(0,n.h)("calcite-time-picker",{intlHour:this.intlHour,intlHourDown:this.intlHourDown,intlHourUp:this.intlHourUp,intlMeridiem:this.intlMeridiem,intlMeridiemDown:this.intlMeridiemDown,intlMeridiemUp:this.intlMeridiemUp,intlMinute:this.intlMinute,intlMinuteDown:this.intlMinuteDown,intlMinuteUp:this.intlMinuteUp,intlSecond:this.intlSecond,intlSecondDown:this.intlSecondDown,intlSecondUp:this.intlSecondUp,lang:this.effectiveLocale,numberingSystem:this.numberingSystem,onCalciteInternalTimePickerChange:this.timePickerChangeHandler,ref:this.setCalciteTimePickerEl,scale:this.scale,step:this.step,value:this.value})),(0,n.h)(s.H,{component:this}))}get el(){return(0,n.g)(this)}static get watchers(){return{active:["activeHandler"],open:["openHandler"],disabled:["handleDisabledAndReadOnlyChange"],readOnly:["handleDisabledAndReadOnlyChange"],locale:["localeChanged"],value:["valueWatcher"],effectiveLocale:["effectiveLocaleWatcher"]}}};y.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline-block;-webkit-user-select:none;user-select:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";const D={button:"button",buttonBottomLeft:"button--bottom-left",buttonBottomRight:"button--bottom-right",buttonHourDown:"button--hour-down",buttonHourUp:"button--hour-up",buttonMeridiemDown:"button--meridiem-down",buttonMeridiemUp:"button--meridiem-up",buttonMinuteDown:"button--minute-down",buttonMinuteUp:"button--minute-up",buttonSecondDown:"button--second-down",buttonSecondUp:"button--second-up",buttonTopLeft:"button--top-left",buttonTopRight:"button--top-right",column:"column",delimiter:"delimiter",hour:"hour",input:"input",meridiem:"meridiem",minute:"minute",second:"second",showMeridiem:"show-meridiem",showSecond:"show-second","scale-s":"scale-s","scale-m":"scale-m","scale-l":"scale-l",timePicker:"time-picker",meridiemStart:"meridiem--start"},S="Hour",k="Decrease hour",I="Increase hour",M="AM/PM",x="Decrease AM/PM",H="Increase AM/PM",E="Minute",C="Decrease minute",P="Increase minute",z="Second",_="Decrease second",A="Increase second";function O(e){return e.charAt(0).toUpperCase()+e.slice(1)}const F=class{constructor(e){var t=this;(0,n.r)(this,e),this.calciteInternalTimePickerBlur=(0,n.c)(this,"calciteInternalTimePickerBlur",6),this.calciteInternalTimePickerChange=(0,n.c)(this,"calciteInternalTimePickerChange",6),this.calciteInternalTimePickerFocus=(0,n.c)(this,"calciteInternalTimePickerFocus",6),this.intlHour=S,this.intlHourDown=k,this.intlHourUp=I,this.intlMeridiem=M,this.intlMeridiemDown=x,this.intlMeridiemUp=H,this.intlMinute=E,this.intlMinuteDown=C,this.intlMinuteUp=P,this.intlSecond=z,this.intlSecondDown=_,this.intlSecondUp=A,this.scale="m",this.step=60,this.value=null,this.effectiveLocale="",this.showSecond=this.step<60,this.decrementHour=()=>{const e=this.hour?"00"===this.hour?23:parseInt(this.hour)-1:0;this.setValuePart("hour",e)},this.decrementMeridiem=()=>{const e="PM"===this.meridiem?"AM":"PM";this.setValuePart("meridiem",e)},this.decrementMinuteOrSecond=e=>{let t;if((0,r.i)(this[e])){const i=parseInt(this[e]);t=0===i?59:i-1}else t=59;this.setValuePart(e,t)},this.decrementMinute=()=>{this.decrementMinuteOrSecond("minute")},this.decrementSecond=()=>{this.decrementMinuteOrSecond("second")},this.focusHandler=e=>{this.activeEl=e.currentTarget},this.hourDownButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.decrementHour()},this.hourKeyDownHandler=e=>{const{key:t}=e;if(c.n.includes(t)){const e=parseInt(t);let i;if((0,r.i)(this.hour))switch(this.hourCycle){case"12":i="01"===this.hour&&e>=0&&e<=2?`1${e}`:e;break;case"24":i="01"===this.hour?`1${e}`:"02"===this.hour&&e>=0&&e<=3?`2${e}`:e}else i=e;this.setValuePart("hour",i)}else switch(t){case"Backspace":case"Delete":this.setValuePart("hour",null);break;case"ArrowDown":e.preventDefault(),this.decrementHour();break;case"ArrowUp":e.preventDefault(),this.incrementHour();break;case" ":e.preventDefault()}},this.hourUpButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.incrementHour()},this.incrementMeridiem=()=>{const e="AM"===this.meridiem?"PM":"AM";this.setValuePart("meridiem",e)},this.incrementHour=()=>{const e=(0,r.i)(this.hour)?"23"===this.hour?0:parseInt(this.hour)+1:1;this.setValuePart("hour",e)},this.incrementMinuteOrSecond=e=>{const t=(0,r.i)(this[e])?"59"===this[e]?0:parseInt(this[e])+1:0;this.setValuePart(e,t)},this.incrementMinute=()=>{this.incrementMinuteOrSecond("minute")},this.incrementSecond=()=>{this.incrementMinuteOrSecond("second")},this.meridiemDownButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.decrementMeridiem()},this.meridiemKeyDownHandler=e=>{switch(e.key){case"a":this.setValuePart("meridiem","AM");break;case"p":this.setValuePart("meridiem","PM");break;case"Backspace":case"Delete":this.setValuePart("meridiem",null);break;case"ArrowUp":e.preventDefault(),this.incrementMeridiem();break;case"ArrowDown":e.preventDefault(),this.decrementMeridiem();break;case" ":e.preventDefault()}},this.meridiemUpButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.incrementMeridiem()},this.minuteDownButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.decrementMinute()},this.minuteKeyDownHandler=e=>{const{key:t}=e;if(c.n.includes(t)){const e=parseInt(t);let i;if((0,r.i)(this.minute)&&this.minute.startsWith("0")){const t=parseInt(this.minute);i=t>5?e:`${t}${e}`}else i=e;this.setValuePart("minute",i)}else switch(t){case"Backspace":case"Delete":this.setValuePart("minute",null);break;case"ArrowDown":e.preventDefault(),this.decrementMinute();break;case"ArrowUp":e.preventDefault(),this.incrementMinute();break;case" ":e.preventDefault()}},this.minuteUpButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.incrementMinute()},this.secondDownButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.decrementSecond()},this.secondKeyDownHandler=e=>{const{key:t}=e;if(c.n.includes(t)){const e=parseInt(t);let i;if((0,r.i)(this.second)&&this.second.startsWith("0")){const t=parseInt(this.second);i=t>5?e:`${t}${e}`}else i=e;this.setValuePart("second",i)}else switch(t){case"Backspace":case"Delete":this.setValuePart("second",null);break;case"ArrowDown":e.preventDefault(),this.decrementSecond();break;case"ArrowUp":e.preventDefault(),this.incrementSecond();break;case" ":e.preventDefault()}},this.secondUpButtonKeyDownHandler=e=>{this.buttonActivated(e)&&this.incrementSecond()},this.setHourEl=e=>this.hourEl=e,this.setMeridiemEl=e=>this.meridiemEl=e,this.setMinuteEl=e=>this.minuteEl=e,this.setSecondEl=e=>this.secondEl=e,this.setValue=function(e){let i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(p(e)){const{hour:i,minute:n,second:a}=w(e),{effectiveLocale:r,numberingSystem:o}=t,{localizedHour:s,localizedHourSuffix:l,localizedMinute:c,localizedMinuteSuffix:u,localizedSecond:d,localizedSecondSuffix:h,localizedMeridiem:p}=b({value:e,locale:r,numberingSystem:o});if(t.localizedHour=s,t.localizedHourSuffix=l,t.localizedMinute=c,t.localizedMinuteSuffix=u,t.localizedSecond=d,t.localizedSecondSuffix=h,t.hour=i,t.minute=n,t.second=a,p){t.localizedMeridiem=p,t.meridiem=m(t.hour);const i=g({value:e,locale:r,numberingSystem:o});t.meridiemOrder=t.getMeridiemOrder(i)}}else t.hour=null,t.localizedHour=null,t.localizedHourSuffix=null,t.localizedMeridiem=null,t.localizedMinute=null,t.localizedMinuteSuffix=null,t.localizedSecond=null,t.localizedSecondSuffix=null,t.meridiem=null,t.minute=null,t.second=null,t.value=null;i&&t.calciteInternalTimePickerChange.emit()},this.setValuePart=function(e,i){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];var a;const{effectiveLocale:o,numberingSystem:s}=t;if("meridiem"===e){if(t.meridiem=i,(0,r.i)(t.hour)){const e=parseInt(t.hour);switch(i){case"AM":e>=12&&(t.hour=d(e-12));break;case"PM":e<12&&(t.hour=d(e+12))}t.localizedHour=f({value:t.hour,part:"hour",locale:o,numberingSystem:s})}}else t[e]="number"===typeof i?d(i):i,t[`localized${O(e)}`]=f({value:t[e],part:e,locale:o,numberingSystem:s});if(t.hour&&t.minute){const e=t.second&&t.showSecond;t.value=`${t.hour}:${t.minute}:${e?t.second:"00"}`}else t.value=null;t.localizedMeridiem=t.value?(null===(a=b({value:t.value,locale:o,numberingSystem:s}))||void 0===a?void 0:a.localizedMeridiem)||null:f({value:t.meridiem,part:"meridiem",locale:o,numberingSystem:s}),n&&t.calciteInternalTimePickerChange.emit()}}localeChanged(){(0,r.u)(this)}valueWatcher(e){this.setValue(e,!1)}effectiveLocaleWatcher(){this.updateLocale()}hostBlurHandler(){this.calciteInternalTimePickerBlur.emit()}hostFocusHandler(){this.calciteInternalTimePickerFocus.emit()}keyDownHandler(e){const{defaultPrevented:t,key:i}=e;if(!t)switch(this.activeEl){case this.hourEl:"ArrowRight"===i&&(this.setFocus("minute"),e.preventDefault());break;case this.minuteEl:switch(i){case"ArrowLeft":this.setFocus("hour"),e.preventDefault();break;case"ArrowRight":60!==this.step?(this.setFocus("second"),e.preventDefault()):"12"===this.hourCycle&&(this.setFocus("meridiem"),e.preventDefault())}break;case this.secondEl:switch(i){case"ArrowLeft":this.setFocus("minute"),e.preventDefault();break;case"ArrowRight":"12"===this.hourCycle&&(this.setFocus("meridiem"),e.preventDefault())}break;case this.meridiemEl:if("ArrowLeft"===i)60!==this.step?(this.setFocus("second"),e.preventDefault()):(this.setFocus("minute"),e.preventDefault())}}async setFocus(e){var t;null===(t=this[`${e||"hour"}El`])||void 0===t||t.focus()}buttonActivated(e){const{key:t}=e;return" "===t&&e.preventDefault(),(0,c.i)(t)}getMeridiemOrder(e){const t=this.effectiveLocale;if(e&&!("ar"===t||"he"===t)){return e.findIndex((e=>e.value===this.localizedMeridiem))}return 0}updateLocale(){var e,t;this.hourCycle=(e=this.effectiveLocale,t=this.numberingSystem,h("meridiem",u(e,t).formatToParts(new Date(Date.UTC(0,0,0,0,0,0))))?"12":"24"),this.setValue(this.value,!1)}connectedCallback(){(0,r.c)(this),this.updateLocale(),this.meridiemOrder=this.getMeridiemOrder(g({value:"0:00:00",locale:this.effectiveLocale,numberingSystem:this.numberingSystem}))}disconnectedCallback(){(0,r.d)(this)}render(){const e=(0,r.i)(this.hour),t="s"===this.scale||"m"===this.scale?"s":"m",i=(0,r.i)(this.minute),a=(0,r.i)(this.second),o="12"===this.hourCycle;return(0,n.h)("div",{class:{[D.timePicker]:!0,[D.showMeridiem]:o,[D.showSecond]:this.showSecond,[D[`scale-${this.scale}`]]:!0},dir:"ltr"},(0,n.h)("div",{class:D.column,role:"group"},(0,n.h)("span",{"aria-label":this.intlHourUp,class:{[D.button]:!0,[D.buttonHourUp]:!0,[D.buttonTopLeft]:!0},onClick:this.incrementHour,onKeyDown:this.hourUpButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-up",scale:t})),(0,n.h)("span",{"aria-label":this.intlHour,"aria-valuemax":"23","aria-valuemin":"1","aria-valuenow":e&&parseInt(this.hour)||"0","aria-valuetext":this.hour,class:{[D.input]:!0,[D.hour]:!0},onFocus:this.focusHandler,onKeyDown:this.hourKeyDownHandler,ref:this.setHourEl,role:"spinbutton",tabIndex:0},this.localizedHour||"--"),(0,n.h)("span",{"aria-label":this.intlHourDown,class:{[D.button]:!0,[D.buttonHourDown]:!0,[D.buttonBottomLeft]:!0},onClick:this.decrementHour,onKeyDown:this.hourDownButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-down",scale:t}))),(0,n.h)("span",{class:D.delimiter},this.localizedHourSuffix),(0,n.h)("div",{class:D.column,role:"group"},(0,n.h)("span",{"aria-label":this.intlMinuteUp,class:{[D.button]:!0,[D.buttonMinuteUp]:!0},onClick:this.incrementMinute,onKeyDown:this.minuteUpButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-up",scale:t})),(0,n.h)("span",{"aria-label":this.intlMinute,"aria-valuemax":"12","aria-valuemin":"1","aria-valuenow":i&&parseInt(this.minute)||"0","aria-valuetext":this.minute,class:{[D.input]:!0,[D.minute]:!0},onFocus:this.focusHandler,onKeyDown:this.minuteKeyDownHandler,ref:this.setMinuteEl,role:"spinbutton",tabIndex:0},this.localizedMinute||"--"),(0,n.h)("span",{"aria-label":this.intlMinuteDown,class:{[D.button]:!0,[D.buttonMinuteDown]:!0},onClick:this.decrementMinute,onKeyDown:this.minuteDownButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-down",scale:t}))),this.showSecond&&(0,n.h)("span",{class:D.delimiter},this.localizedMinuteSuffix),this.showSecond&&(0,n.h)("div",{class:D.column,role:"group"},(0,n.h)("span",{"aria-label":this.intlSecondUp,class:{[D.button]:!0,[D.buttonSecondUp]:!0},onClick:this.incrementSecond,onKeyDown:this.secondUpButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-up",scale:t})),(0,n.h)("span",{"aria-label":this.intlSecond,"aria-valuemax":"59","aria-valuemin":"0","aria-valuenow":a&&parseInt(this.second)||"0","aria-valuetext":this.second,class:{[D.input]:!0,[D.second]:!0},onFocus:this.focusHandler,onKeyDown:this.secondKeyDownHandler,ref:this.setSecondEl,role:"spinbutton",tabIndex:0},this.localizedSecond||"--"),(0,n.h)("span",{"aria-label":this.intlSecondDown,class:{[D.button]:!0,[D.buttonSecondDown]:!0},onClick:this.decrementSecond,onKeyDown:this.secondDownButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-down",scale:t}))),this.localizedSecondSuffix&&(0,n.h)("span",{class:D.delimiter},this.localizedSecondSuffix),o&&(0,n.h)("div",{class:{[D.column]:!0,[D.meridiemStart]:0===this.meridiemOrder},role:"group"},(0,n.h)("span",{"aria-label":this.intlMeridiemUp,class:{[D.button]:!0,[D.buttonMeridiemUp]:!0,[D.buttonTopRight]:!0},onClick:this.incrementMeridiem,onKeyDown:this.meridiemUpButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-up",scale:t})),(0,n.h)("span",{"aria-label":this.intlMeridiem,"aria-valuemax":"2","aria-valuemin":"1","aria-valuenow":"PM"===this.meridiem?"2":"1","aria-valuetext":this.meridiem,class:{[D.input]:!0,[D.meridiem]:!0},onFocus:this.focusHandler,onKeyDown:this.meridiemKeyDownHandler,ref:this.setMeridiemEl,role:"spinbutton",tabIndex:0},this.localizedMeridiem||"--"),(0,n.h)("span",{"aria-label":this.intlMeridiemDown,class:{[D.button]:!0,[D.buttonMeridiemDown]:!0,[D.buttonBottomRight]:!0},onClick:this.decrementMeridiem,onKeyDown:this.meridiemDownButtonKeyDownHandler,role:"button",tabIndex:-1},(0,n.h)("calcite-icon",{icon:"chevron-down",scale:t}))))}get el(){return(0,n.g)(this)}static get watchers(){return{locale:["localeChanged"],value:["valueWatcher"],effectiveLocale:["effectiveLocaleWatcher"]}}};F.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-block}.time-picker{display:flex;-webkit-user-select:none;user-select:none;align-items:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius)}.time-picker .column{display:flex;flex-direction:column}.time-picker .meridiem--start{order:-1}.time-picker .button{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1)}.time-picker .button:hover,.time-picker .button:focus{background-color:var(--calcite-ui-foreground-2);outline:2px solid transparent;outline-offset:2px}.time-picker .button:active{background-color:var(--calcite-ui-foreground-3)}.time-picker .button.top-left{border-start-start-radius:var(--calcite-border-radius)}.time-picker .button.bottom-left{border-end-start-radius:var(--calcite-border-radius)}.time-picker .button.top-right{border-start-end-radius:var(--calcite-border-radius)}.time-picker .button.bottom-right{border-end-end-radius:var(--calcite-border-radius)}.time-picker .button calcite-icon{color:var(--calcite-ui-text-3)}.time-picker .input{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium)}.time-picker .input:hover{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-2)}.time-picker .input:focus,.time-picker .input:hover:focus{outline:2px solid transparent;outline-offset:2px;box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}.time-picker.scale-s{font-size:var(--calcite-font-size--1)}.time-picker.scale-s .button,.time-picker.scale-s .input{padding-inline:0.75rem;padding-block:0.25rem}.time-picker.scale-s:not(.show-meridiem) .delimiter:last-child{padding-inline-end:0.75rem}.time-picker.scale-m{font-size:var(--calcite-font-size-0)}.time-picker.scale-m .button,.time-picker.scale-m .input{padding-inline:1rem;padding-block:0.5rem}.time-picker.scale-m:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1rem}.time-picker.scale-l{font-size:var(--calcite-font-size-1)}.time-picker.scale-l .button,.time-picker.scale-l .input{padding-inline:1.25rem;padding-block:0.75rem}.time-picker.scale-l:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1.25rem}"},22681:(e,t,i)=>{function n(e){return"Enter"===e||" "===e}i.d(t,{i:()=>n,n:()=>a});const a=["0","1","2","3","4","5","6","7","8","9"]},57247:(e,t,i)=>{i.d(t,{a:()=>y,b:()=>D,c:()=>I,d:()=>x,g:()=>S,i:()=>s,n:()=>E,p:()=>l,s:()=>m,u:()=>M});var n=i(22681),a=i(4620),r=i(23241);class o{constructor(e){if(e instanceof o)return e;const[t,i]=String(e).split(".").concat("");this.value=BigInt(t+i.padEnd(o.DECIMALS,"0").slice(0,o.DECIMALS))+BigInt(o.ROUNDED&&i[o.DECIMALS]>="5"),this.isNegative="-"===e.charAt(0)}static _divRound(e,t){return o.fromBigInt(e/t+(o.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0)))}static fromBigInt(e){return Object.assign(Object.create(o.prototype),{value:e})}toString(){const e=this.value.toString().replace(new RegExp("-","g"),"").padStart(o.DECIMALS+1,"0"),t=e.slice(0,-o.DECIMALS),i=e.slice(-o.DECIMALS).replace(/\.?0+$/,""),n=t.concat(i.length?"."+i:"");return`${this.isNegative?"-":""}${n}`}formatToParts(e){const t=this.value.toString().replace(new RegExp("-","g"),"").padStart(o.DECIMALS+1,"0"),i=t.slice(0,-o.DECIMALS),n=t.slice(-o.DECIMALS).replace(/\.?0+$/,""),a=e.formatToParts(BigInt(i));return this.isNegative&&a.unshift({type:"minusSign",value:E.minusSign}),n.length&&(a.push({type:"decimal",value:E.decimal}),n.split("").forEach((e=>a.push({type:"fraction",value:e})))),a}format(e){const t=this.value.toString().replace(new RegExp("-","g"),"").padStart(o.DECIMALS+1,"0"),i=t.slice(0,-o.DECIMALS),n=t.slice(-o.DECIMALS).replace(/\.?0+$/,"");return`${`${this.isNegative?E.minusSign:""}${e.format(BigInt(i))}`}${n.length?`${E.decimal}${e.format(BigInt(n))}`:""}`}add(e){return o.fromBigInt(this.value+new o(e).value)}subtract(e){return o.fromBigInt(this.value-new o(e).value)}multiply(e){return o._divRound(this.value*new o(e).value,o.SHIFT)}divide(e){return o._divRound(this.value*o.SHIFT,new o(e).value)}}function s(e){return!(!e||isNaN(Number(e)))}function l(e){return e&&(t=e,n.n.some((e=>t.includes(e))))?p(e,(e=>{let t=!1;const i=e.split("").filter(((e,i)=>e.match(/\./g)&&!t?(t=!0,!0):!(!e.match(/\-/g)||0!==i)||n.n.includes(e))).reduce(((e,t)=>e+t));return s(i)?new o(i).toString():""})):"";var t}o.DECIMALS=100,o.ROUNDED=!0,o.SHIFT=BigInt("1"+"0".repeat(o.DECIMALS));const c=/^([-0])0+(?=\d)/,u=/(?!^\.)\.$/,d=/(?!^-)-/g,h=/^-\b0\b\.?0*$/,m=e=>p(e,(e=>{const t=e.replace(d,"").replace(u,"").replace(c,"$1");return s(t)?h.test(t)?t:new o(t).toString():e}));function p(e,t){if(!e)return e;const i=e.toLowerCase().indexOf("e")+1;return i?e.replace(/[eE]*$/g,"").substring(0,i).concat(e.slice(i).replace(/[eE]/g,"")).split(/[eE]/).map(((e,i)=>t(1===i?e.replace(/\./g,""):e))).join("e").replace(/^e/,"1e"):t(e)}const f="en",v=["ar","bg","bs","ca","cs","da","de","de-CH","el",f,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","nb","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],b=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],g=e=>b.includes(e),w=(new Intl.NumberFormat).resolvedOptions().numberingSystem,y="arab"!==w&&g(w)?w:"latn",D=e=>g(e)?e:y;function S(e){return v.indexOf(e)>-1?e:e?"nb"===(e=e.toLowerCase())?"no":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,((e,t,i)=>`${t}-${i.toUpperCase()}`)),v.includes(e)||(e=e.split("-")[0])),v.includes(e)?e:f):f}const k=new Set;function I(e){M(e),0===k.size&&H.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),k.add(e)}function M(e){e.effectiveLocale=function(e){var t;return e.el.lang||e.locale||(null===(t=(0,r.c)(e.el,"[lang]"))||void 0===t?void 0:t.lang)||document.documentElement.lang||f}(e)}function x(e){k.delete(e),0===k.size&&H.disconnect()}const H=(0,a.c)("mutation",(e=>{e.forEach((e=>{const t=e.target;k.forEach((e=>{const i=!(!e.locale||e.el.lang),n=!(0,r.b)(t,e.el);if(i||n)return;const a=(0,r.c)(e.el,"[lang]");if(!a)return void(e.effectiveLocale=f);const o=a.lang;e.effectiveLocale=a.hasAttribute("lang")&&""===o?f:o}))}))}));const E=new class{constructor(){this.delocalize=e=>this._numberFormatOptions?p(e,(e=>e.trim().replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex))):e,this.localize=e=>this._numberFormatOptions?p(e,(e=>s(e.trim())?new o(e.trim()).format(this._numberFormatter).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):e)):e}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(e){if(e.locale=S(null===e||void 0===e?void 0:e.locale),e.numberingSystem=D(null===e||void 0===e?void 0:e.numberingSystem),!this._numberFormatOptions&&e.locale===f&&e.numberingSystem===y&&2===Object.keys(e).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(e))return;this._numberFormatOptions=e,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const t=new Map(this._digits.map(((e,t)=>[e,t]))),i=new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-12345678.9);this._actualGroup=i.find((e=>"group"===e.type)).value,this._group=0===this._actualGroup.trim().length?" ":this._actualGroup,this._decimal=i.find((e=>"decimal"===e.type)).value,this._minusSign=i.find((e=>"minusSign"===e.type)).value,this._getDigitIndex=e=>t.get(e)}}},4620:(e,t,i)=>{function n(e,t,i){const n=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new n(t,i)}i.d(t,{c:()=>n})}}]);
//# sourceMappingURL=4478.32bef95c.chunk.js.map