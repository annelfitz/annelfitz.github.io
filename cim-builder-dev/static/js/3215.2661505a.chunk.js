/*! For license information please see 3215.2661505a.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[3215],{43215:(e,t,i)=>{i.r(t),i.d(t,{calcite_dropdown:()=>m,calcite_dropdown_group:()=>w,calcite_dropdown_item:()=>S});var n=i(85610),o=i(68884),a=i(46800),r=i(86308),s=i(64761),c=i(12243),l=i(44300),d=i(88378),p=i(98101);i(49244),i(57969);const h="trigger",m=class{constructor(e){(0,n.r)(this,e),this.calciteDropdownSelect=(0,n.c)(this,"calciteDropdownSelect",6),this.calciteDropdownBeforeClose=(0,n.c)(this,"calciteDropdownBeforeClose",6),this.calciteDropdownClose=(0,n.c)(this,"calciteDropdownClose",6),this.calciteDropdownBeforeOpen=(0,n.c)(this,"calciteDropdownBeforeOpen",6),this.calciteDropdownOpen=(0,n.c)(this,"calciteDropdownOpen",6),this.items=[],this.groups=[],this.mutationObserver=(0,l.c)("mutation",(()=>this.updateItems())),this.resizeObserver=(0,l.c)("resize",(e=>this.resizeObserverCallback(e))),this.openTransitionProp="opacity",this.guid=`calcite-dropdown-${(0,r.g)()}`,this.defaultAssignedElements=[],this.slotChangeHandler=e=>{this.defaultAssignedElements=e.target.assignedElements({flatten:!0}),this.updateItems()},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?(0,a.f)(t,e):null},this.updateTriggers=e=>{this.triggers=e.target.assignedElements({flatten:!0}),this.reposition(!0)},this.updateItems=()=>{this.items=this.groups.map((e=>Array.from(e?.querySelectorAll("calcite-dropdown-item")))).reduce(((e,t)=>[...e,...t]),[]),this.updateSelectedItems(),this.reposition(!0)},this.updateGroups=e=>{const t=e.target.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-dropdown-group")));this.groups=t,this.updateItems()},this.resizeObserverCallback=e=>{e.forEach((e=>{const{target:t}=e;t===this.referenceEl?this.setDropdownWidth():t===this.scrollerEl&&this.setMaxScrollerHeight()}))},this.setDropdownWidth=()=>{const{referenceEl:e,scrollerEl:t}=this,i=e?.clientWidth;i&&t&&(t.style.minWidth=`${i}px`)},this.setMaxScrollerHeight=()=>{const{scrollerEl:e}=this;if(!e)return;this.reposition(!0);const t=this.getMaxScrollerHeight();e.style.maxHeight=t>0?`${t}px`:"",this.reposition(!0)},this.setScrollerAndTransitionEl=e=>{this.resizeObserver.observe(e),this.scrollerEl=e,this.transitionEl=e,(0,d.c)(this)},this.setReferenceEl=e=>{this.referenceEl=e,(0,a.c)(this,this.referenceEl,this.floatingEl),this.resizeObserver.observe(e)},this.setFloatingEl=e=>{this.floatingEl=e,(0,a.c)(this,this.referenceEl,this.floatingEl)},this.keyDownHandler=e=>{if(e.target!==this.referenceEl)return;const{defaultPrevented:t,key:i}=e;if(!t){if(this.open){if("Escape"===i)return this.closeCalciteDropdown(),void e.preventDefault();if(e.shiftKey&&"Tab"===i)return this.closeCalciteDropdown(),void e.preventDefault()}(0,c.i)(i)?(this.openCalciteDropdown(),e.preventDefault()):"Escape"===i&&(this.closeCalciteDropdown(),e.preventDefault())}},this.focusOnFirstActiveOrFirstItem=()=>{this.getFocusableElement(this.items.find((e=>e.selected))||this.items[0])},this.toggleOpenEnd=()=>{this.focusOnFirstActiveOrFirstItem(),this.el.removeEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.openCalciteDropdown=()=>{this.open=!this.open,this.open&&this.el.addEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.open=!1,this.closeOnSelectDisabled=!1,this.disabled=!1,this.flipPlacements=void 0,this.maxItems=0,this.overlayPositioning="absolute",this.placement=a.d,this.scale="m",this.selectedItems=[],this.type="click",this.width=void 0}openHandler(e){this.disabled?(e||(0,a.u)(this.floatingEl),this.open=!1):e?this.reposition(!0):(0,a.u)(this.floatingEl)}handleDisabledChange(e){e||(this.open=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),this.reposition(!0),this.open&&this.openHandler(this.open),(0,d.c)(this)}componentDidLoad(){this.reposition(!0)}componentDidRender(){(0,s.u)(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),(0,a.a)(this,this.referenceEl,this.floatingEl),this.resizeObserver?.disconnect(),(0,d.d)(this)}render(){const{open:e,guid:t}=this;return(0,n.h)(n.H,null,(0,n.h)("div",{class:"calcite-trigger-container",id:`${t}-menubutton`,onClick:this.openCalciteDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},(0,n.h)("slot",{"aria-controls":`${t}-menu`,"aria-expanded":(0,o.t)(e),"aria-haspopup":"menu",name:h,onSlotchange:this.updateTriggers})),(0,n.h)("div",{"aria-hidden":(0,o.t)(!e),class:"calcite-dropdown-wrapper",ref:this.setFloatingEl},(0,n.h)("div",{"aria-labelledby":`${t}-menubutton`,class:{"calcite-dropdown-content":!0,[a.F.animation]:!0,[a.F.animationActive]:e},id:`${t}-menu`,role:"menu",ref:this.setScrollerAndTransitionEl},(0,n.h)("slot",{onSlotchange:this.updateGroups}))))}async reposition(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{floatingEl:t,referenceEl:i,placement:n,overlayPositioning:o,filteredFlipPlacements:r}=this;return(0,a.r)(this,{floatingEl:t,referenceEl:i,overlayPositioning:o,placement:n,flipPlacements:r,type:"menu"},e)}closeCalciteDropdownOnClick(e){(0,o.i)(e)&&this.open&&!e.composedPath().includes(this.el)&&this.closeCalciteDropdown(!1)}closeCalciteDropdownOnEvent(e){this.closeCalciteDropdown(),e.stopPropagation()}closeCalciteDropdownOnOpenEvent(e){e.composedPath().includes(this.el)||(this.open=!1)}mouseEnterHandler(){"hover"===this.type&&this.openCalciteDropdown()}mouseLeaveHandler(){"hover"===this.type&&this.closeCalciteDropdown()}calciteInternalDropdownItemKeyEvent(e){const{keyboardEvent:t}=e.detail,i=t.target;switch(t.key){case"Tab":this.items.indexOf(i)!==this.items.length-1||t.shiftKey?0===this.items.indexOf(i)&&t.shiftKey&&this.closeCalciteDropdown():this.closeCalciteDropdown();break;case"ArrowDown":(0,o.u)(this.items,i,"next");break;case"ArrowUp":(0,o.u)(this.items,i,"previous");break;case"Home":(0,o.u)(this.items,i,"first");break;case"End":(0,o.u)(this.items,i,"last")}e.stopPropagation()}handleItemSelect(e){this.updateSelectedItems(),e.stopPropagation(),this.calciteDropdownSelect.emit(),this.closeOnSelectDisabled&&"none"!==e.detail.requestedDropdownGroup.selectionMode||this.closeCalciteDropdown(),e.stopPropagation()}onBeforeOpen(){this.calciteDropdownBeforeOpen.emit()}onOpen(){this.calciteDropdownOpen.emit()}onBeforeClose(){this.calciteDropdownBeforeClose.emit()}onClose(){this.calciteDropdownClose.emit()}updateSelectedItems(){this.selectedItems=this.items.filter((e=>e.selected))}getMaxScrollerHeight(){const{maxItems:e,items:t}=this;let i,n=0,o=0;return this.groups.forEach((t=>{e>0&&n<e&&Array.from(t.children).forEach(((t,a)=>{0===a&&(isNaN(i)&&(i=t.offsetTop),o+=i),n<e&&(o+=t.offsetHeight,n+=1)}))})),t.length>e?o:0}closeCalciteDropdown(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.open=!1,e&&(0,o.f)(this.triggers[0])}getFocusableElement(e){if(!e)return;const t=e.attributes.isLink?e.shadowRoot.querySelector("a"):e;(0,o.f)(t)}static get delegatesFocus(){return!0}get el(){return(0,n.g)(this)}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"]}}};m.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline-flex;flex:0 1 auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:600;display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;flex:1 1 auto}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width=s]){--calcite-dropdown-width:12rem}:host([width=m]){--calcite-dropdown-width:14rem}:host([width=l]){--calcite-dropdown-width:16rem}";const u="container--s",f="container--m",g="container--l",w=class{constructor(e){(0,n.r)(this,e),this.calciteInternalDropdownItemChange=(0,n.c)(this,"calciteInternalDropdownItemChange",6),this.groupTitle=void 0,this.selectionMode="single",this.scale=void 0}componentWillLoad(){this.groupPosition=this.getGroupPosition()}render(){const e=this.scale||(0,o.h)(this.el,"scale","m"),t=this.groupTitle?(0,n.h)("span",{"aria-hidden":"true",class:"dropdown-title"},this.groupTitle):null,i=this.groupPosition>0?(0,n.h)("div",{class:"dropdown-separator",role:"separator"}):null;return(0,n.h)(n.H,{"aria-label":this.groupTitle,role:"group"},(0,n.h)("div",{class:{container:!0,[u]:"s"===e,[f]:"m"===e,[g]:"l"===e},title:this.groupTitle},i,t,(0,n.h)("slot",null)))}updateActiveItemOnChange(e){this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}static get delegatesFocus(){return!0}get el(){return(0,n.g)(this)}};w.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;display:block}.container{text-align:start}.container--s{font-size:var(--calcite-font-size--2);line-height:1rem}.container--s .dropdown-title{padding:0.5rem}.container--m{font-size:var(--calcite-font-size--1);line-height:1rem}.container--m .dropdown-title{padding:0.75rem}.container--l{font-size:var(--calcite-font-size-0);line-height:1.25rem}.container--l .dropdown-title{padding:1rem}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-ui-border-3)}";const v="container--link",b="container--s",y="container--m",D="container--l",k="container--multi-selection",x="container--single-selection",E="container--none-selection",I="dropdown-item-icon",C="dropdown-item-icon-end",z="dropdown-item-icon-start",O="dropdown-item-content",P="dropdown-link",S=class{constructor(e){(0,n.r)(this,e),this.calciteDropdownItemSelect=(0,n.c)(this,"calciteDropdownItemSelect",6),this.calciteInternalDropdownItemSelect=(0,n.c)(this,"calciteInternalDropdownItemSelect",6),this.calciteInternalDropdownItemKeyEvent=(0,n.c)(this,"calciteInternalDropdownItemKeyEvent",6),this.calciteInternalDropdownCloseRequest=(0,n.c)(this,"calciteInternalDropdownCloseRequest",6),this.scale="m",this.selected=!1,this.iconFlipRtl=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.href=void 0,this.label=void 0,this.rel=void 0,this.target=void 0}async setFocus(){await(0,p.c)(this),this.el?.focus()}componentWillLoad(){(0,p.s)(this),this.initialize()}componentDidLoad(){(0,p.a)(this)}connectedCallback(){this.initialize()}render(){const e=(0,o.h)(this.el,"scale",this.scale),t=(0,n.h)("calcite-icon",{class:z,flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"l"===e?"m":"s"}),i=(0,n.h)("span",{class:O},(0,n.h)("slot",null)),a=(0,n.h)("calcite-icon",{class:C,flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"l"===e?"m":"s"}),r=this.iconStart&&this.iconEnd?[t,i,a]:this.iconStart?[t,i]:this.iconEnd?[i,a]:i,s=this.href?(0,n.h)("a",{"aria-label":this.label,class:P,href:this.href,rel:this.rel,tabIndex:-1,target:this.target,ref:e=>this.childLink=e},r):r,c=this.href?null:"single"===this.selectionMode?"menuitemradio":"multiple"===this.selectionMode?"menuitemcheckbox":"menuitem",l="none"!==this.selectionMode?(0,o.t)(this.selected):null;return(0,n.h)(n.H,{"aria-checked":l,role:c,tabindex:"0"},(0,n.h)("div",{class:{container:!0,[v]:!!this.href,[b]:"s"===e,[y]:"m"===e,[D]:"l"===e,[k]:"multiple"===this.selectionMode,[x]:"single"===this.selectionMode,[E]:"none"===this.selectionMode}},"none"!==this.selectionMode?(0,n.h)("calcite-icon",{class:I,icon:"multiple"===this.selectionMode?"check":"bullet-point",scale:"l"===e?"m":"s"}):null,s))}onClick(){this.emitRequestedItem()}keyDownHandler(e){switch(e.key){case" ":case"Enter":this.emitRequestedItem(),this.href&&this.childLink.click(),e.preventDefault();break;case"Escape":this.calciteInternalDropdownCloseRequest.emit(),e.preventDefault();break;case"Tab":this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break;case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault(),this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e})}}updateActiveItemOnChange(e){e.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.determineActiveItem()),e.stopPropagation()}initialize(){this.selectionMode=(0,o.h)(this.el,"selection-mode","single"),this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),"none"===this.selectionMode&&(this.selected=!1)}determineActiveItem(){switch(this.selectionMode){case"multiple":this.el===this.requestedDropdownItem&&(this.selected=!this.selected);break;case"single":this.el===this.requestedDropdownItem?this.selected=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.selected=!1);break;case"none":this.selected=!1}}emitRequestedItem(){this.calciteDropdownItemSelect.emit(),this.calciteInternalDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}get el(){return(0,n.g)(this)}};S.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}.container--s{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}.container--s.container--none-selection{padding-inline-start:0.25rem}.container--s.container--none-selection .dropdown-link{padding-inline-start:0px}.container--m.container--none-selection{padding-inline-start:0.5rem}.container--m.container--none-selection .dropdown-link{padding-inline-start:0px}.container--l.container--none-selection{padding-inline-start:0.75rem}.container--l.container--none-selection .dropdown-link{padding-inline-start:0px}:host{position:relative;display:flex;flex-grow:1;align-items:center}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem;padding-inline-end:auto;padding-inline-start:0.25rem}:host,.container--link a{outline-color:transparent}:host(:focus){outline:2px solid transparent;outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.container--link{padding:0px}.container--link a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.container--s .dropdown-link{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m .dropdown-link{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l .dropdown-link{padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}:host(:hover) .container,:host(:active) .container{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none}:host(:hover) .container--link .dropdown-link,:host(:active) .container--link .dropdown-link{color:var(--calcite-ui-text-1)}:host(:focus) .container{color:var(--calcite-ui-text-1);text-decoration-line:none}:host(:active) .container{background-color:var(--calcite-ui-foreground-3)}:host(:hover) .container:before,:host(:active) .container:before,:host(:focus) .container:before{opacity:1}:host([selected]) .container:not(.container--none-selection),:host([selected]) .container--link .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected]) .container:not(.container--none-selection):before,:host([selected]) .container--link .dropdown-link:before{opacity:1;color:var(--calcite-ui-brand)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .container--link .dropdown-link calcite-icon{color:var(--calcite-ui-brand)}.container--multi-selection:before,.container--none-selection:before{display:none}.container--s:before{inset-inline-start:0.5rem}.container--m:before{inset-inline-start:0.75rem}.container--l:before{inset-inline-start:1rem}.dropdown-item-icon{position:absolute;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}.container--s .dropdown-item-icon{inset-inline-start:0.25rem}.container--m .dropdown-item-icon{inset-inline-start:0.5rem}.container--l .dropdown-item-icon{inset-inline-start:0.75rem}:host(:hover) .dropdown-item-icon{color:var(--calcite-ui-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-ui-brand);opacity:1}.container--s .dropdown-item-icon-start{margin-inline-end:0.5rem;margin-inline-start:0.25rem}.container--s .dropdown-item-icon-end{margin-inline-start:0.5rem}.container--m .dropdown-item-icon-start{margin-inline-end:0.75rem;margin-inline-start:0.25rem}.container--m .dropdown-item-icon-end{margin-inline-start:0.75rem}.container--l .dropdown-item-icon-start{margin-inline-end:1rem;margin-inline-start:0.25rem}.container--l .dropdown-item-icon-end{margin-inline-start:1rem}"},64761:(e,t,i)=>{function n(){}function o(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void(e.el.click=n);e.el.click=HTMLElement.prototype.click,"function"===typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}i.d(t,{u:()=>o})},12243:(e,t,i)=>{function n(e){return"Enter"===e||" "===e}i.d(t,{i:()=>n,n:()=>o});const o=["0","1","2","3","4","5","6","7","8","9"]},98101:(e,t,i)=>{i.d(t,{a:()=>r,c:()=>s,s:()=>a});const n=new WeakMap,o=new WeakMap;function a(e){o.set(e,new Promise((t=>n.set(e,t))))}function r(e){n.get(e)()}function s(e){return o.get(e)}},44300:(e,t,i)=>{function n(e,t,i){const n=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new n(t,i)}i.d(t,{c:()=>n})}}]);
//# sourceMappingURL=3215.2661505a.chunk.js.map