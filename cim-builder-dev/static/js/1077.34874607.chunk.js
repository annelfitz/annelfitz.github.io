/*! For license information please see 1077.34874607.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[1077],{21077:(t,e,i)=>{i.r(e),i.d(e,{calcite_value_list:()=>b,calcite_value_list_item:()=>k});var a=i(76340),n=i(34446),s=i(50676),l=i(47795),o=i(34018),c=i(96515),r=i(64920),d=i(18334),h=i(21615),m=i(63614),u=i(7847);i(39494),i(35249);const p="handle";var g;function v(t,e,i){const{items:a,messages:n}=i,s=a.length,l=(0,d.g)(i,t)+1;return function(t,e,i,a){const n=t.replace("${position}",i.toString());return n.replace("${itemLabel}",e).replace("${total}",a.toString())}("idle"===e?n.dragHandleIdle:"active"===e?n.dragHandleActive:"change"===e?n.dragHandleChange:n.dragHandleCommit,t.label,l,s)}function f(t){const e=t.composedPath().find((t=>void 0!==t.dataset?.jsHandle));return{handle:e,item:t.composedPath().find((t=>"calcite-value-list-item"===t.tagName?.toLowerCase()))}}!function(t){t.grip="grip"}(g||(g={}));const b=class{constructor(t){(0,a.r)(this,t),this.calciteListChange=(0,a.c)(this,"calciteListChange",6),this.calciteListOrderChange=(0,a.c)(this,"calciteListOrderChange",6),this.calciteListFilter=(0,a.c)(this,"calciteListFilter",6),this.lastSelectedItem=null,this.mutationObserver=(0,c.c)("mutation",d.m.bind(this)),this.setFilterEl=t=>{this.filterEl=t},this.setFilteredItems=t=>{this.filteredItems=t},this.deselectRemovedItems=d.d.bind(this),this.deselectSiblingItems=d.a.bind(this),this.selectSiblings=d.s.bind(this),this.handleFilter=d.h.bind(this),this.handleFilterEvent=d.b.bind(this),this.getItemData=d.c.bind(this),this.keyDownHandler=t=>{if(t.defaultPrevented)return;const{handle:e,item:i}=f(t);if(e&&!i.handleActivated&&" "===t.key&&this.updateScreenReaderText(v(i,"commit",this)),!e||!i.handleActivated)return void d.k.call(this,t);const{items:a}=this;if(" "===t.key&&this.updateScreenReaderText(v(i,"active",this)),"ArrowUp"!==t.key&&"ArrowDown"!==t.key||a.length<=1)return;t.preventDefault();const{el:n}=this,s=(0,d.e)(this,i,"ArrowUp"===t.key?"up":"down");if(s===a.length-1)n.appendChild(i);else{const t=n.children[s],e=t===i.nextElementSibling?t.nextElementSibling:t;n.insertBefore(i,e)}this.items=this.getItems(),this.calciteListOrderChange.emit(this.items.map((t=>{let{value:e}=t;return e}))),requestAnimationFrame((()=>e?.focus())),i.handleActivated=!0,this.updateHandleAriaLabel(e,v(i,"change",this))},this.storeAssistiveEl=t=>{this.assistiveTextEl=t},this.handleFocusIn=t=>{const{handle:e,item:i}=f(t);!i?.handleActivated&&i&&e&&this.updateHandleAriaLabel(e,v(i,"idle",this))},this.disabled=!1,this.dragEnabled=!1,this.filteredItems=[],this.filteredData=[],this.filterEnabled=!1,this.filterPlaceholder=void 0,this.filterText=void 0,this.group=void 0,this.loading=!1,this.multiple=!1,this.selectionFollowsFocus=!1,this.messageOverrides=void 0,this.messages=void 0,this.dataForFilter=[],this.defaultMessages=void 0,this.effectiveLocale="",this.selectedValues=new Map}onMessagesChange(){}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}connectedCallback(){(0,o.c)(this),(0,r.c)(this),d.i.call(this),d.f.call(this)}async componentWillLoad(){(0,l.s)(this),await(0,r.s)(this)}componentDidLoad(){(0,l.a)(this),this.setUpDragAndDrop(),d.j.call(this)}componentDidRender(){(0,s.u)(this)}disconnectedCallback(){(0,o.d)(this),(0,r.d)(this),d.l.call(this),this.cleanUpDragAndDrop()}calciteListFocusOutHandler(t){d.n.call(this,t)}calciteListItemRemoveHandler(t){d.r.call(this,t)}calciteListItemChangeHandler(t){d.o.call(this,t)}calciteInternalListItemPropsChangeHandler(t){t.stopPropagation(),this.setUpFilter()}calciteInternalListItemValueChangeHandler(t){d.p.call(this,t),t.stopPropagation()}getItems(){return Array.from(this.el.querySelectorAll("calcite-value-list-item"))}setUpItems(){d.q.call(this,"calcite-value-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpDragAndDrop(){this.cleanUpDragAndDrop(),this.dragEnabled&&(this.sortable=n.S.create(this.el,{dataIdAttr:"id",handle:`.${p}`,draggable:"calcite-value-list-item",group:this.group,onSort:()=>{this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const t=this.items.map((t=>t.value));this.calciteListOrderChange.emit(t)}}))}cleanUpDragAndDrop(){this.sortable?.destroy(),this.sortable=null}handleBlur(){this.dragEnabled&&this.updateScreenReaderText("")}async getSelectedItems(){return this.selectedValues}async setFocus(t){return await(0,l.c)(this),d.t.call(this,t)}getIconType(){let t=null;return this.dragEnabled&&(t=g.grip),t}updateScreenReaderText(t){this.assistiveTextEl.textContent=t}updateHandleAriaLabel(t,e){t.ariaLabel=e}render(){return(0,a.h)(d.L,{onBlur:this.handleBlur,onFocusin:this.handleFocusIn,onKeyDown:this.keyDownHandler,props:this})}static get assetsDirs(){return["assets"]}get el(){return(0,a.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};b.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}calcite-value-list-item:last-of-type{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:center;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:300}calcite-filter{margin-block-end:1px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";const w="drag",y="actions-end",x="actions-start",k=class{constructor(t){(0,a.r)(this,t),this.calciteListItemRemove=(0,a.c)(this,"calciteListItemRemove",7),this.pickListItem=null,this.guid=`calcite-value-list-item-${(0,u.g)()}`,this.getPickListRef=t=>this.pickListItem=t,this.handleKeyDown=t=>{" "===t.key&&(t.preventDefault(),this.handleActivated=!this.handleActivated)},this.handleBlur=()=>{this.handleActivated=!1},this.handleSelectChange=t=>{this.selected=t.detail.selected},this.description=void 0,this.disabled=!1,this.deselectDisabled=!1,this.nonInteractive=!1,this.handleActivated=!1,this.icon=null,this.iconFlipRtl=!1,this.label=void 0,this.metadata=void 0,this.removable=!1,this.selected=!1,this.value=void 0}connectedCallback(){(0,h.c)(this)}disconnectedCallback(){(0,h.d)(this)}componentWillLoad(){(0,l.s)(this)}componentDidLoad(){(0,l.a)(this)}componentDidRender(){(0,s.u)(this,!!this.el.closest("calcite-value-list")&&"managed")}async toggleSelected(t){this.pickListItem.toggleSelected(t)}async setFocus(){await(0,l.c)(this),this.pickListItem?.setFocus()}calciteListItemChangeHandler(t){t.detail.item=this.el}renderActionsEnd(){const{el:t}=this;return(0,m.g)(t,y)?(0,a.h)("slot",{name:y,slot:d.S.actionsEnd}):null}renderActionsStart(){const{el:t}=this;return(0,m.g)(t,x)?(0,a.h)("slot",{name:x,slot:d.S.actionsStart}):null}renderHandle(){const{icon:t,iconFlipRtl:e}=this;if(t===d.I.grip)return(0,a.h)("span",{class:{[d.C.handle]:!0,[d.C.handleActivated]:this.handleActivated},"data-js-handle":!0,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabindex:"0"},(0,a.h)("calcite-icon",{flipRtl:e,icon:w,scale:"s"}))}render(){return(0,a.h)(a.H,{id:this.el.id||this.guid},this.renderHandle(),(0,a.h)("calcite-pick-list-item",{description:this.description,deselectDisabled:this.deselectDisabled,disabled:this.disabled,label:this.label,metadata:this.metadata,nonInteractive:this.nonInteractive,onCalciteListItemChange:this.handleSelectChange,ref:this.getPickListRef,removable:this.removable,selected:this.selected,value:this.value},this.renderActionsStart(),this.renderActionsEnd()))}get el(){return(0,a.g)(this)}};k.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{margin-block-end:1px;box-sizing:border-box;display:flex;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}:host *{box-sizing:border-box}calcite-pick-list-item{position:relative;margin:0px;flex-grow:1;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([active]),:host([selected]){--tw-shadow:0 0 0 1px var(--calcite-ui-brand);--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.handle{display:flex;cursor:move;align-items:center;justify-content:center;border-style:none;background-color:transparent;padding-block:0px;padding-inline:0.25rem;color:var(--calcite-ui-border-input);outline-color:transparent}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}"}}]);
//# sourceMappingURL=1077.34874607.chunk.js.map