(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[94],{487:function(t,e,n){"use strict";n.r(e),n.d(e,"calcite_switch",(function(){return u}));var i=n(294),r=n(507),o=n(640),a=n(503),c=n(523),l=function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{l(i.next(t))}catch(t){o(t)}}function c(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){t.done?n(t.value):r(t.value).then(a,c)}l((i=i.apply(t,e||[])).next())}))},s=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(e){return l([t,e])}}function l(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},u=function(){function t(t){Object(i.j)(this,t),this.calciteSwitchChange=Object(i.e)(this,"calciteSwitchChange",7),this.disabled=!1,this.scale="m",this.switched=!1,this.inputEl=document.createElement("input")}return t.prototype.disabledWatcher=function(t){this.inputEl.disabled=t,this.tabindex=t?-1:0},t.prototype.nameChanged=function(t){this.inputEl.name=t},t.prototype.switchedWatcher=function(t){this.inputEl.checked=t},t.prototype.setFocus=function(){return l(this,void 0,void 0,(function(){return s(this,(function(t){return Object(r.h)(this.inputEl),[2]}))}))},t.prototype.setupInput=function(){this.switched&&this.inputEl.setAttribute("checked",""),this.inputEl.disabled=this.disabled,this.inputEl.id=this.guid+"-input",this.inputEl.name=this.name,this.inputEl.style.cssText=o.a,this.inputEl.type="checkbox",this.value&&(this.inputEl.value=null!=this.value?this.value.toString():""),this.el.appendChild(this.inputEl)},t.prototype.toggle=function(){this.switched=!this.switched,this.calciteSwitchChange.emit({switched:this.switched})},t.prototype.handleLabelFocus=function(t){this.disabled||this.el.contains(t.detail.interactedEl)||!Object(r.j)(t.detail.labelEl,this.el)||this.el.focus()},t.prototype.onClick=function(t){(!this.disabled&&this.el.closest("label")&&t.target===this.inputEl||!this.el.closest("label")&&t.target===this.el)&&this.toggle()},t.prototype.keyDownHandler=function(t){var e=Object(c.a)(t.key);this.disabled||" "!==e&&"Enter"!==e||this.toggle()},t.prototype.componentWillLoad=function(){this.guid=this.el.id||"calcite-switch-"+Object(a.a)(),this.tabindex=this.el.getAttribute("tabindex")||this.disabled?-1:0,this.setupInput()},t.prototype.render=function(){var t,e=Object(r.i)(this.el);return Object(i.h)(i.b,{tabindex:this.tabindex},Object(i.h)("div",{"aria-checked":this.switched.toString(),class:(t={container:!0},t[r.a.rtl]="rtl"===e,t)},Object(i.h)("div",{class:"track"},Object(i.h)("div",{class:"handle"}))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledWatcher"],name:["nameChanged"],switched:["switchedWatcher"]}},enumerable:!1,configurable:!0}),t}();u.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]) .container{height:0.75rem}:host([scale=s]) .track{width:1.5rem;height:0.75rem}:host([scale=s]) .handle{width:0.5rem;height:0.5rem}:host([scale=m]) .container{height:1rem}:host([scale=m]) .track{width:2rem;height:1rem}:host([scale=m]) .handle{width:0.75rem;height:0.75rem}:host([scale=l]) .container{height:1.5rem}:host([scale=l]) .track{width:3rem;height:1.5rem}:host([scale=l]) .handle{width:1.25rem;height:1.25rem}:host{display:inline-block;position:relative;width:auto;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none;cursor:default}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;width:auto}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.track{position:relative;display:inline-block;vertical-align:top;background-color:var(--calcite-ui-foreground-2);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:9999px}.handle{position:absolute;display:block;right:auto;background-color:var(--calcite-ui-foreground-1);border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:9999px;pointer-events:none;top:-1px;left:-1px}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([switched]) .track{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand-hover)}:host([switched]) .handle{left:auto;border-color:var(--calcite-ui-brand);right:-1px}:host([switched]:hover) .track{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand-hover)}:host([switched]:hover) .handle{border-color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}.calcite--rtl .handle{left:auto;right:-1px}:host([switched]) .calcite--rtl .handle{right:auto;left:-1px}:host([switched]:active) .calcite--rtl .handle{right:auto;left:-1px}:host([switched]:focus) .calcite--rtl .handle{right:auto;left:-1px}"},503:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(){return[2,1,1,1,3].map((function(t){for(var e="",n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}},507:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return k})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return y})),n.d(e,"f",(function(){return f})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return v})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return D})),n.d(e,"k",(function(){return g})),n.d(e,"l",(function(){return m})),n.d(e,"m",(function(){return A})),n.d(e,"n",(function(){return x})),n.d(e,"o",(function(){return u})),n.d(e,"p",(function(){return w})),n.d(e,"q",(function(){return E}));var i=n(503),r=function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{l(i.next(t))}catch(t){o(t)}}function c(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){t.done?n(t.value):r(t.value).then(a,c)}l((i=i.apply(t,e||[])).next())}))},o=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(e){return l([t,e])}}function l(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},a=function(t,e){for(var n=0,i=e.length,r=t.length;n<i;n++,r++)t[r]=e[n];return t},c={autoTheme:"calcite-theme-auto",darkTheme:"calcite-theme-dark",lightTheme:"calcite-theme-light",rtl:"calcite--rtl"},l={loading:"Loading"};function s(t){return t?t.id=t.id||t.tagName.toLowerCase()+"-"+Object(i.a)():""}function u(t){return Array.isArray(t)?t:Array.from(t)}function h(t){return y(t,"."+c.darkTheme)?"dark":"light"}function d(t){var e=y(t,"[dir]");return e?e.getAttribute("dir"):"ltr"}function f(t,e,n){var i="["+e+"]",r=t.closest(i);return r?r.getAttribute(e):n}function p(t){return t.getRootNode()}function b(t){return t.host||null}function m(t,e){return function t(n,i){if(!n)return i;n.assignedSlot&&(n=n.assignedSlot);var r=p(n),o=Array.from(r.querySelectorAll(e)).filter((function(t){return!i.includes(t)}));i=a(a([],i),o);var c=b(r);return c?t(c,i):i}(t,[])}function w(t,e){return function t(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);var i=p(n),r=i.querySelector(e),o=b(i);return r||(o?t(o):null)}(t)}function y(t,e){return function t(n){return n?n.closest(e)||t(b(p(n))):null}(t)}function g(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}function v(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){return t?[2,g(t)?t.setFocus():t.focus()]:[2]}))}))}function k(t,e,n){var i='[slot="'+e+'"]';return(null===n||void 0===n?void 0:n.all)?function(t,e,n){var i=Array.from(t.querySelectorAll(e));i=n&&!1===n.direct?i:i.filter((function(e){return e.parentElement===t}));var r=null===n||void 0===n?void 0:n.selector;return r?i.map((function(t){return Array.from(t.querySelectorAll(r))})).reduce((function(t,e){return a(a([],t),e)}),[]).filter((function(t){return!!t})):i}(t,i,n):function(t,e,n){var i=t.querySelector(e);i=n&&!1===n.direct||(null===i||void 0===i?void 0:i.parentElement)===t?i:null;var r=null===n||void 0===n?void 0:n.selector;return r?i.querySelector(r):i}(t,i,n)}function x(t,e){return Array.from(t.children).filter((function(t){return t.matches(e)}))}function D(t,e){return t.contains(e)}function E(t,e,n){return"string"===typeof e&&""!==e?e:""===e?t[n]:void 0}function A(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}},523:function(t,e,n){"use strict";function i(t,e){var n={Up:"ArrowUp",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Spacebar:" ",Esc:"Escape"}[t]||t,i="rtl"===e;return i&&"ArrowLeft"===n?"ArrowRight":i&&"ArrowRight"===n?"ArrowLeft":n}function r(t){return"Enter"===(t=i(t))||" "===t}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o}));var o=["0","1","2","3","4","5","6","7","8","9"]},640:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i="\n  bottom: 0 !important;\n  left: 0 !important;\n  margin: 0 !important;\n  opacity: 0 !important;\n  outline: none !important;\n  padding: 0 !important;\n  position: absolute !important;\n  right: 0 !important;\n  top: 0 !important;\n  transform: none !important;\n  -webkit-appearance: none !important;\n  z-index: -1 !important;\n"}}]);
//# sourceMappingURL=94.fcf308f7.chunk.js.map