(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[243],{484:function(t,e,a){"use strict";a.r(e),a.d(e,"calcite_sortable_list",(function(){return r}));var i=a(294),n=a(843),r=function(){function t(t){var e=this;Object(i.j)(this,t),this.calciteListOrderChange=Object(i.e)(this,"calciteListOrderChange",7),this.handleSelector="calcite-handle",this.disabled=!1,this.loading=!1,this.handleActivated=!1,this.items=[],this.observer=new MutationObserver((function(){e.items=Array.from(e.el.children),e.setUpDragAndDrop()}))}return t.prototype.connectedCallback=function(){this.items=Array.from(this.el.children),this.setUpDragAndDrop(),this.beginObserving()},t.prototype.disconnectedCallback=function(){this.observer.disconnect(),this.cleanUpDragAndDrop()},t.prototype.calciteHandleNudgeHandler=function(t){var e,a=this.items.find((function(e){return e.contains(t.detail.handle)||t.composedPath().includes(e)})),i=this.items.length-1,n=this.items.indexOf(a),r=!1;switch(t.detail.direction){case"up":t.preventDefault(),0===n?r=!0:e=n-1;break;case"down":t.preventDefault(),n===i?e=0:n===i-1?r=!0:e=n+2;break;default:return}this.observer.disconnect(),r?a.parentElement.appendChild(a):a.parentElement.insertBefore(a,this.items[e]),this.items=Array.from(this.el.children),t.detail.handle.activated=!0,t.detail.handle.setFocus(),this.beginObserving()},t.prototype.setUpDragAndDrop=function(){var t=this;this.cleanUpDragAndDrop();var e={dataIdAttr:"id",group:this.group,handle:this.handleSelector,onUpdate:function(){t.items=Array.from(t.el.children),t.calciteListOrderChange.emit()},onStart:function(){t.observer.disconnect()},onEnd:function(){t.beginObserving()}};this.dragSelector&&(e.draggable=this.dragSelector),this.sortable=n.a.create(this.el,e)},t.prototype.cleanUpDragAndDrop=function(){var t;null===(t=this.sortable)||void 0===t||t.destroy(),this.sortable=null},t.prototype.beginObserving=function(){this.observer.observe(this.el,{childList:!0,subtree:!0})},t.prototype.render=function(){return Object(i.h)("slot",null)},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.g)(this)},enumerable:!1,configurable:!0}),t}();r.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex}"}}]);
//# sourceMappingURL=243.8334a543.chunk.js.map