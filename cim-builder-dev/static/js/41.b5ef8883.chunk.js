/*! For license information please see 41.b5ef8883.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[41,95,96,101,109,114,115],{453:function(t,e,n){"use strict";n.r(e),n.d(e,"g",(function(){return i}));var i=function(){return[2,1,1,1,3].map((function(t){for(var e="",n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}},454:function(t,e,n){"use strict";n.r(e),n.d(e,"C",(function(){return c})),n.d(e,"T",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return m})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return w})),n.d(e,"g",(function(){return k})),n.d(e,"h",(function(){return v})),n.d(e,"i",(function(){return g})),n.d(e,"j",(function(){return O})),n.d(e,"k",(function(){return E})),n.d(e,"n",(function(){return s})),n.d(e,"q",(function(){return b})),n.d(e,"s",(function(){return A}));var i=n(453),o=function(t,e,n,i){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function a(t){try{u(i.next(t))}catch(t){r(t)}}function c(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){t.done?n(t.value):o(t.value).then(a,c)}u((i=i.apply(t,e||[])).next())}))},r=function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(t){return function(e){return u([t,e])}}function u(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},a=function(t,e,n){if(n||2===arguments.length)for(var i,o=0,r=e.length;o<r;o++)!i&&o in e||(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o]);return t.concat(i||Array.prototype.slice.call(e))},c={autoTheme:"calcite-theme-auto",darkTheme:"calcite-theme-dark",lightTheme:"calcite-theme-light",rtl:"calcite--rtl"},u={loading:"Loading"};function l(t){return t?t.id=t.id||"".concat(t.tagName.toLowerCase(),"-").concat(Object(i.g)()):""}function s(t){return Array.isArray(t)?t:Array.from(t)}function f(t){var e=y(t,".".concat(c.darkTheme,", .").concat(c.lightTheme));return(null===e||void 0===e?void 0:e.classList.contains("calcite-theme-dark"))?"dark":"light"}function d(t){var e=y(t,"[".concat("dir","]"));return e?e.getAttribute("dir"):"ltr"}function m(t,e,n){var i="[".concat(e,"]"),o=t.closest(i);return o?o.getAttribute(e):n}function p(t){return t.getRootNode()}function h(t){return t.host||null}function v(t,e){return function t(n,i){if(!n)return i;n.assignedSlot&&(n=n.assignedSlot);var o=p(n),r=Array.from(o.querySelectorAll(e)).filter((function(t){return!i.includes(t)}));i=a(a([],i,!0),r,!0);var c=h(o);return c?t(c,i):i}(t,[])}function b(t,e){var n=e.selector,i=e.id;return function t(e){if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);var o=p(e),r=i?o.getElementById(i):n?o.querySelector(n):null,a=h(o);return r||(a?t(a):null)}(t)}function y(t,e){return function t(n){return n?n.closest(e)||t(h(p(n))):null}(t)}function g(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}function w(t){return o(this,void 0,void 0,(function(){return r(this,(function(e){return t?[2,g(t)?t.setFocus():t.focus()]:[2]}))}))}function k(t,e,n){e&&!Array.isArray(e)&&"string"!==typeof e&&(n=e,e=null);var i=e?Array.isArray(e)?e.map((function(t){return'[slot="'.concat(t,'"]')})).join(","):'[slot="'.concat(e,'"]'):":not([slot])";return(null===n||void 0===n?void 0:n.all)?function(t,e,n){var i=":not([slot])"===e?x(t,":not([slot])"):Array.from(t.querySelectorAll(e));i=n&&!1===n.direct?i:i.filter((function(e){return e.parentElement===t})),i=(null===n||void 0===n?void 0:n.matches)?i.filter((function(t){return null===t||void 0===t?void 0:t.matches(n.matches)})):i;var o=null===n||void 0===n?void 0:n.selector;return o?i.map((function(t){return Array.from(t.querySelectorAll(o))})).reduce((function(t,e){return a(a([],t,!0),e,!0)}),[]).filter((function(t){return!!t})):i}(t,i,n):function(t,e,n){var i=":not([slot])"===e?x(t,":not([slot])")[0]||null:t.querySelector(e);i=n&&!1===n.direct||(null===i||void 0===i?void 0:i.parentElement)===t?i:null,i=(null===n||void 0===n?void 0:n.matches)?(null===i||void 0===i?void 0:i.matches(n.matches))?i:null:i;var o=null===n||void 0===n?void 0:n.selector;return o?null===i||void 0===i?void 0:i.querySelector(o):i}(t,i,n)}function x(t,e){return t?Array.from(t.children||[]).filter((function(t){return null===t||void 0===t?void 0:t.matches(e)})):[]}function E(t,e){return Array.from(t.children).filter((function(t){return t.matches(e)}))}function A(t,e,n){return"string"===typeof e&&""!==e?e:""===e?t[n]:void 0}function O(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}},455:function(t,e,n){"use strict";function i(t,e,n){return new(function(t){return"intersection"===t?window.IntersectionObserver:"mutation"===t?window.MutationObserver:window.ResizeObserver}(t))(e,n)}n.r(e),n.d(e,"c",(function(){return i}))},458:function(t,e,n){"use strict";n.r(e),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return l}));var i,o=n(255),r=n(455),a=new Set,c={childList:!0};function u(t){i||(i=Object(r.c)("mutation",s)),i.observe(t.el,c)}function l(t){a.delete(t.el),s(i.takeRecords()),i.disconnect();for(var e=0,n=a.entries();e<n.length;e++){var o=n[e][0];i.observe(o,c)}}function s(t){t.forEach((function(t){var e=t.target;Object(o.f)(e)}))}},463:function(t,e,n){"use strict";n.r(e),n.d(e,"C",(function(){return i})),n.d(e,"I",(function(){return r})),n.d(e,"S",(function(){return o}));var i={menu:"menu",defaultTrigger:"default-trigger"},o={tooltip:"tooltip",trigger:"trigger"},r={menu:"ellipsis"}},466:function(t,e,n){"use strict";function i(t,e){return(t+e)%e}n.r(e),n.d(e,"g",(function(){return i}))},484:function(t,e,n){"use strict";n.r(e),n.d(e,"calcite_action_menu",(function(){return p}));var i=n(255),o=n(463),r=n(454),a=n(466),c=n(453),u=n(455),l=n(458),s=function(t,e,n,i){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function a(t){try{u(i.next(t))}catch(t){r(t)}}function c(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){t.done?n(t.value):o(t.value).then(a,c)}u((i=i.apply(t,e||[])).next())}))},f=function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(t){return function(e){return u([t,e])}}function u(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},d=["ArrowUp","ArrowDown"],m=["ArrowUp","ArrowDown","End","Home"],p=function(){function t(t){var e=this;Object(i.r)(this,t),this.calciteActionMenuOpenChange=Object(i.c)(this,"calciteActionMenuOpenChange",7),this.expanded=!1,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.actionElements=[],this.mutationObserver=Object(u.c)("mutation",(function(){return e.getActions()})),this.guid="calcite-action-menu-".concat(Object(c.g)()),this.menuId="".concat(this.guid,"-menu"),this.menuButtonId="".concat(this.guid,"-menu-button"),this.activeMenuItemIndex=-1,this.connectMenuButtonEl=function(){var t=e,n=t.el,i=t.menuButtonId,a=t.menuId,c=t.open,u=t.label,l=Object(r.g)(n,o.S.trigger)||e.defaultMenuButtonEl;e.menuButtonEl!==l&&(e.disconnectMenuButtonEl(),e.menuButtonEl=l,e.setTooltipReferenceElement(),l&&(l.active=c,l.setAttribute("aria-controls",a),l.setAttribute("aria-expanded",c.toString()),l.setAttribute("aria-haspopup","true"),l.id||(l.id=i),l.label||(l.label=u),l.text||(l.text=u),l.addEventListener("click",e.menuButtonClick),l.addEventListener("keydown",e.menuButtonKeyDown),l.addEventListener("keyup",e.menuButtonKeyUp)))},this.disconnectMenuButtonEl=function(){var t=e.menuButtonEl;t&&(t.removeEventListener("click",e.menuButtonClick),t.removeEventListener("keydown",e.menuButtonKeyDown),t.removeEventListener("keyup",e.menuButtonKeyUp))},this.setDefaultMenuButtonEl=function(t){e.defaultMenuButtonEl=t,e.connectMenuButtonEl()},this.handleCalciteActionClick=function(){e.open=!1,e.setFocus()},this.menuButtonClick=function(){e.toggleOpen()},this.setTooltipReferenceElement=function(){var t=e,n=t.el,i=t.expanded,a=t.menuButtonEl,c=Object(r.g)(n,o.S.tooltip),u="SLOT"===(null===c||void 0===c?void 0:c.tagName)?c.assignedElements()[0]:c;"CALCITE-TOOLTIP"===(null===u||void 0===u?void 0:u.tagName)&&(u.referenceElement=i?null:a)},this.updateAction=function(t,n){var i=e,o=i.guid,r=i.activeMenuItemIndex,a="".concat(o,"-action-").concat(n);t.tabIndex=-1,t.setAttribute("role","menuitem"),t.id||(t.id=a),t.active=n===r},this.updateActions=function(t){null===t||void 0===t||t.forEach(e.updateAction)},this.getActions=function(){var t=e.el,n=Object(r.g)(t,{all:!0,matches:"calcite-action"});e.updateActions(n),e.actionElements=n,e.connectMenuButtonEl()},this.menuButtonKeyUp=function(t){var n=t.key,i=e.actionElements;e.isValidKey(n,d)&&(t.preventDefault(),i.length&&(e.toggleOpen(!0),e.handleActionNavigation(n,i)))},this.menuButtonKeyDown=function(t){var n=t.key;e.isValidKey(n,d)&&t.preventDefault()},this.menuActionsContainerKeyDown=function(t){var n=t.key,i=e,o=i.actionElements,r=i.activeMenuItemIndex;if("Tab"!==n)if(" "!==n&&"Enter"!==n)e.isValidKey(n,m)&&t.preventDefault();else{t.preventDefault();var a=o[r];a?a.click():e.toggleOpen(!1)}else e.open=!1},this.menuActionsContainerKeyUp=function(t){var n=t.key,i=e.actionElements;"Escape"!==n?e.isValidKey(n,m)&&(t.preventDefault(),i.length&&e.handleActionNavigation(n,i)):e.toggleOpen(!1)},this.handleActionNavigation=function(t,n){var i=e.activeMenuItemIndex;"Home"===t&&(e.activeMenuItemIndex=0),"End"===t&&(e.activeMenuItemIndex=n.length-1),"ArrowUp"===t&&(e.activeMenuItemIndex=Object(a.g)(Math.max(i-1,-1),n.length)),"ArrowDown"===t&&(e.activeMenuItemIndex=Object(a.g)(i+1,n.length))},this.toggleOpenEnd=function(){e.setFocus(),e.el.removeEventListener("calcitePopoverOpen",e.toggleOpenEnd)},this.toggleOpen=function(t){void 0===t&&(t=!e.open),e.el.addEventListener("calcitePopoverOpen",e.toggleOpenEnd),e.open=t}}return t.prototype.connectedCallback=function(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.getActions(),Object(l.c)(this)},t.prototype.disconnectedCallback=function(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect(),this.disconnectMenuButtonEl(),Object(l.d)(this)},t.prototype.expandedHandler=function(){this.open=!1,this.setTooltipReferenceElement()},t.prototype.openHandler=function(t){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=t),this.calciteActionMenuOpenChange.emit(t)},t.prototype.closeCalciteActionMenuOnClick=function(t){t.composedPath().includes(this.el)||(this.open=!1)},t.prototype.activeMenuItemIndexHandler=function(){this.updateActions(this.actionElements)},t.prototype.setFocus=function(){return s(this,void 0,void 0,(function(){return f(this,(function(t){return Object(r.f)(this.open?this.menuEl:this.menuButtonEl),[2]}))}))},t.prototype.renderMenuButton=function(){var t=this,e=t.el,n=t.label,a=t.scale,c=Object(i.h)("slot",{name:o.S.trigger},Object(i.h)("calcite-action",{class:o.C.defaultTrigger,icon:o.I.menu,ref:this.setDefaultMenuButtonEl,scale:a,text:n}));return Object(r.g)(e,o.S.tooltip)?Object(i.h)("calcite-tooltip-manager",null,c):c},t.prototype.renderMenuItems=function(){var t=this,e=this,n=e.actionElements,r=e.activeMenuItemIndex,a=e.open,c=e.menuId,u=e.menuButtonEl,l=e.label,s=e.placement,f=e.overlayPositioning,d=e.flipPlacements,m=n[r],p=(null===m||void 0===m?void 0:m.id)||null;return Object(i.h)("calcite-popover",{disablePointer:!0,flipPlacements:d,label:l,offsetDistance:0,open:a,overlayPositioning:f,placement:s,referenceElement:u},Object(i.h)("div",{"aria-activedescendant":p,"aria-labelledby":null===u||void 0===u?void 0:u.id,class:o.C.menu,id:c,onClick:this.handleCalciteActionClick,onKeyDown:this.menuActionsContainerKeyDown,onKeyUp:this.menuActionsContainerKeyUp,ref:function(e){return t.menuEl=e},role:"menu",tabIndex:-1},Object(i.h)("slot",null)))},t.prototype.render=function(){return Object(i.h)(i.F,null,this.renderMenuButton(),this.renderMenuItems(),Object(i.h)("slot",{name:o.S.tooltip}))},t.prototype.getAssignedElements=function(){return Array.from(this.el.querySelectorAll("slot")).map((function(t){return t.assignedElements({flatten:!0})})).reduce((function(t,e){return t.concat(e)}),[])},t.prototype.isValidKey=function(t,e){return!!e.find((function(e){return e===t}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}},enumerable:!1,configurable:!0}),t}();p.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:-ms-flexbox;display:flex;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-brand);outline-offset:0px}.default-trigger{position:relative;height:100%;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;height:100%;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch}.menu{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}"}}]);
//# sourceMappingURL=41.b5ef8883.chunk.js.map