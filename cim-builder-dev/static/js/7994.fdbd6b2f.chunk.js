/*! For license information please see 7994.fdbd6b2f.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[7994],{67994:(t,e,n)=>{n.r(e),n.d(e,{CalciteListItem:()=>u,defineCustomElement:()=>m});var i=n(51554),a=n(92358),o=n(13160),c=n(93611),s=n(47242),l=n(57601);const r=new Map,d=(0,i.GH)(class extends i.mv{constructor(){var t;super(),t=this,this.__registerHost(),this.__attachShadow(),this.calciteListItemSelect=(0,i.yM)(this,"calciteListItemSelect",6),this.calciteInternalListItemSelect=(0,i.yM)(this,"calciteInternalListItemSelect",6),this.calciteInternalListItemActive=(0,i.yM)(this,"calciteInternalListItemActive",6),this.calciteInternalFocusPreviousItem=(0,i.yM)(this,"calciteInternalFocusPreviousItem",6),this.handleContentSlotChange=t=>{this.hasCustomContent=(0,a.s)(t)},this.handleActionsStartSlotChange=t=>{this.hasActionsStart=(0,a.s)(t)},this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=(0,a.s)(t)},this.handleContentStartSlotChange=t=>{this.hasContentStart=(0,a.s)(t)},this.handleContentEndSlotChange=t=>{this.hasContentEnd=(0,a.s)(t)},this.handleDefaultSlotChange=t=>{const{parentListEl:e}=this,n=(0,c.g)(t);(0,c.u)(n);const i=!!n.length;i&&e&&!e.openable&&(e.openable=!0),this.openable=i,i||(this.open=!1)},this.toggleOpen=()=>{this.open=!this.open},this.itemClicked=()=>{this.toggleSelected(),this.calciteInternalListItemActive.emit()},this.toggleSelected=()=>{this.disabled||("none"!==this.selectionMode&&(this.selected=!this.selected),this.calciteListItemSelect.emit())},this.handleItemKeyDown=t=>{const{key:e}=t,n=t.composedPath(),{containerEl:i,contentEl:a,actionsStartEl:o,actionsEndEl:c,open:s,openable:l}=this,r=[o,a,c].filter(Boolean),d=r.findIndex((t=>n.includes(t)));if(" "===e)t.preventDefault(),this.toggleSelected();else if("ArrowRight"===e){t.preventDefault();const e=d+1;-1===d?!s&&l?(this.open=!0,this.focusCell(null)):r[0]&&this.focusCell(r[0]):r[d]&&r[e]&&this.focusCell(r[e])}else if("ArrowLeft"===e){t.preventDefault();const e=d-1;-1===d?(this.focusCell(null),s&&l?this.open=!1:this.calciteInternalFocusPreviousItem.emit()):0===d?(this.focusCell(null),i.focus()):r[d]&&r[e]&&this.focusCell(r[e])}},this.focusCellNull=()=>{this.focusCell(null)},this.focusCell=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const{contentEl:i,actionsStartEl:a,actionsEndEl:o,parentListEl:c}=t;n&&r.set(c,null),[a,i,o].filter(Boolean).forEach(((t,i)=>{const a="tabindex";t===e?(t.setAttribute(a,"0"),n&&r.set(c,i)):t.removeAttribute(a)})),e?.focus()},this.active=!1,this.description=void 0,this.disabled=!1,this.label=void 0,this.metadata=void 0,this.open=!1,this.setSize=null,this.setPosition=null,this.selected=!1,this.value=void 0,this.selectionMode=null,this.selectionAppearance=null,this.level=null,this.visualLevel=null,this.parentListEl=void 0,this.openable=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasCustomContent=!1,this.hasContentStart=!1,this.hasContentEnd=!1}activeHandler(t){t||this.focusCell(null,!1)}handleSelectedChange(t){t&&this.calciteInternalListItemSelect.emit()}connectedCallback(){const{el:t}=this;this.parentListEl=t.closest("calcite-list"),this.level=(0,c.a)(t)+1,this.visualLevel=(0,c.a)(t,!0),this.setSelectionDefaults()}componentWillLoad(){(0,s.a)(this)}componentDidLoad(){(0,s.s)(this)}componentDidRender(){(0,o.u)(this,"managed")}async setFocus(){await(0,s.c)(this);const{containerEl:t,contentEl:e,actionsStartEl:n,actionsEndEl:i,parentListEl:a}=this,o=r.get(a);if("number"!==typeof o)t?.focus();else{const a=[n,e,i].filter(Boolean);a[o]?this.focusCell(a[o]):t?.focus()}}renderSelected(){const{selected:t,selectionMode:e,selectionAppearance:n}=this;return"none"===e||"border"===n?null:(0,i.h)("td",{class:c.C.selectionContainer,key:"selection-container",onClick:this.itemClicked},(0,i.h)("calcite-icon",{icon:t?"multiple"===e?c.I.selectedMultiple:c.I.selectedSingle:c.I.unselected,scale:"s"}))}renderOpen(){const{el:t,open:e,openable:n,parentListEl:o}=this,s=(0,a.c)(t);return n?(0,i.h)("td",{class:c.C.openContainer,key:"open-container",onClick:this.toggleOpen},(0,i.h)("calcite-icon",{icon:e?c.I.open:"rtl"===s?c.I.closedRTL:c.I.closedLTR,scale:"s"})):o?.openable?(0,i.h)("td",{class:c.C.openContainer,key:"open-container",onClick:this.itemClicked},(0,i.h)("calcite-icon",{icon:c.I.blank,scale:"s"})):null}renderActionsStart(){const{label:t,hasActionsStart:e}=this;return(0,i.h)("td",{"aria-label":t,class:c.C.actionsStart,hidden:!e,key:"actions-start-container",ref:t=>this.actionsStartEl=t,role:"gridcell"},(0,i.h)("slot",{name:c.S.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:t,hasActionsEnd:e}=this;return(0,i.h)("td",{"aria-label":t,class:c.C.actionsEnd,hidden:!e,key:"actions-end-container",ref:t=>this.actionsEndEl=t,role:"gridcell"},(0,i.h)("slot",{name:c.S.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}))}renderContentStart(){const{hasContentStart:t}=this;return(0,i.h)("div",{class:c.C.contentStart,hidden:!t},(0,i.h)("slot",{name:c.S.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:t}=this;return(0,i.h)("div",{class:c.C.customContent,hidden:!t},(0,i.h)("slot",{name:c.S.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:t}=this;return(0,i.h)("div",{class:c.C.contentEnd,hidden:!t},(0,i.h)("slot",{name:c.S.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentProperties(){const{label:t,description:e,hasCustomContent:n}=this;return n||!t&&!e?null:(0,i.h)("div",{class:c.C.content,key:"content"},t?(0,i.h)("div",{class:c.C.label,key:"label"},t):null,e?(0,i.h)("div",{class:c.C.description,key:"description"},e):null)}renderContentContainer(){const{description:t,label:e,selectionMode:n,hasCustomContent:a}=this,o=a||!!e||!!t,s=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return(0,i.h)("td",{"aria-label":e,class:{[c.C.contentContainer]:!0,[c.C.contentContainerSelectable]:"none"!==n,[c.C.contentContainerHasCenterContent]:o},key:"content-container",onClick:this.itemClicked,ref:t=>this.contentEl=t,role:"gridcell"},s)}render(){const{openable:t,open:e,level:n,setPosition:o,setSize:s,active:l,label:r,selected:d,selectionAppearance:h,selectionMode:u}=this,m="none"!==u&&"border"===h,p=m&&d,f=m&&!d;return(0,i.h)(i.AA,null,(0,i.h)("tr",{"aria-expanded":t?(0,a.t)(e):null,"aria-label":r,"aria-level":n,"aria-posinset":o,"aria-selected":(0,a.t)(d),"aria-setsize":s,class:{[c.C.container]:!0,[c.C.containerBorderSelected]:p,[c.C.containerBorderUnselected]:f},onFocus:this.focusCellNull,onKeyDown:this.handleItemKeyDown,ref:t=>this.containerEl=t,role:"row",style:{"--calcite-list-item-spacing-indent-multiplier":`${this.visualLevel}`},tabIndex:l?0:-1},this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),(0,i.h)("div",{class:{[c.C.nestedContainer]:!0,[c.C.nestedContainerHidden]:t&&!e}},(0,i.h)("slot",{onSlotchange:this.handleDefaultSlotChange})))}setSelectionDefaults(){const{parentListEl:t,selectionMode:e,selectionAppearance:n}=this;t&&(e||(this.selectionMode=t.selectionMode),n||(this.selectionAppearance=t.selectionAppearance))}get el(){return this}static get watchers(){return{active:["activeHandler"],selected:["handleSelectedChange"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-ui-brand);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}.container--border-selected{border-inline-start:4px solid var(--calcite-ui-brand)}.container--border-unselected{border-inline-start:4px solid transparent}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{z-index:300;outline:2px solid var(--calcite-ui-brand)}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-list-item-icon-color)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}[hidden]{display:none}"}},[1,"calcite-list-item",{active:[4],description:[1],disabled:[516],label:[1],metadata:[16],open:[1540],setSize:[2,"set-size"],setPosition:[2,"set-position"],selected:[1540],value:[8],selectionMode:[1025,"selection-mode"],selectionAppearance:[1025,"selection-appearance"],level:[32],visualLevel:[32],parentListEl:[32],openable:[32],hasActionsStart:[32],hasActionsEnd:[32],hasCustomContent:[32],hasContentStart:[32],hasContentEnd:[32],setFocus:[64]}]);function h(){if("undefined"===typeof customElements)return;["calcite-list-item","calcite-icon"].forEach((t=>{switch(t){case"calcite-list-item":customElements.get(t)||customElements.define(t,d);break;case"calcite-icon":customElements.get(t)||(0,l.d)()}}))}h();const u=d,m=h},57601:(t,e,n)=>{n.d(e,{I:()=>h,d:()=>u});var i=n(51554),a=n(92358),o=n(72021);const c="flip-rtl",s={},l={},r={s:16,m:24,l:32};async function d(t){let{icon:e,scale:n}=t;const a=r[n],o=function(t){const e=!isNaN(Number(t.charAt(0))),n=t.split("-");if(1===n.length)return e?`i${t}`:t;return n.map(((t,n)=>0===n?e?`i${t.toUpperCase()}`:t:t.charAt(0).toUpperCase()+t.slice(1))).join("")}(e),c="F"===o.charAt(o.length-1),d=`${c?o.substring(0,o.length-1):o}${a}${c?"F":""}`;if(s[d])return s[d];l[d]||(l[d]=fetch((0,i.K3)(`./assets/icon/${d}.json`)).then((t=>t.json())).catch((()=>(console.error(`"${d}" is not a valid calcite-ui-icon name`),""))));const h=await l[d];return s[d]=h,h}const h=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:e,pathData:n,scale:o,textLabel:s}=this,l=(0,a.c)(t),d=r[o],h=!!s,u=[].concat(n||"");return(0,i.h)(i.AA,{"aria-hidden":(0,a.t)(!h),"aria-label":h?s:null,role:h?"img":null},(0,i.h)("svg",{"aria-hidden":"true",class:{[c]:"rtl"===l&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${d} ${d}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},u.map((t=>"string"===typeof t?(0,i.h)("path",{d:t}):(0,i.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:e,visible:n}=this;i.Z5.isBrowser&&t&&n&&(this.pathData=await d({icon:t,scale:e}))}waitUntilVisible(t){this.intersectionObserver=(0,o.c)("intersection",(e=>{e.forEach((e=>{e.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function u(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((t=>{if("calcite-icon"===t)customElements.get(t)||customElements.define(t,h)}))}u()},13160:(t,e,n)=>{function i(){}function a(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=i);t.el.click=HTMLElement.prototype.click,"function"===typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}n.d(e,{u:()=>a})},47242:(t,e,n)=>{n.d(e,{a:()=>o,c:()=>s,s:()=>c});const i=new WeakMap,a=new WeakMap;function o(t){a.set(t,new Promise((e=>i.set(t,e))))}function c(t){i.get(t)()}function s(t){return a.get(t)}},72021:(t,e,n)=>{n.d(e,{c:()=>a});var i=n(51554);function a(t,e,n){if(!i.Z5.isBrowser)return;const a=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new a(e,n)}},93611:(t,e,n)=>{n.d(e,{C:()=>a,I:()=>s,M:()=>c,S:()=>o,a:()=>h,g:()=>r,u:()=>d});var i=n(51554);const a={container:"container",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerHidden:"nested-container--hidden",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",actionsEnd:"actions-end",selectionContainer:"selection-container",openContainer:"open-container"},o={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentEnd:"content-end",actionsEnd:"actions-end"},c=5,s={selectedMultiple:"check-circle-f",selectedSingle:"circle-f",unselected:"blank",closedLTR:"caret-right",closedRTL:"caret-left",open:"caret-down",blank:"blank"},l="calcite-list-item";function r(t){const e=t.target.assignedElements({flatten:!0});return[...e.filter((t=>t?.matches("calcite-list-item-group"))).map((t=>Array.from(t.querySelectorAll(l)))).reduce(((t,e)=>[...t,...e]),[]),...e.filter((t=>t?.matches(l)))]}function d(t){t.forEach((e=>{e.setPosition=t.indexOf(e)+1,e.setSize=t.length}))}function h(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!i.Z5.isBrowser)return 0;const n=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item",a=document.evaluate(n,t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return a.snapshotLength}}}]);
//# sourceMappingURL=7994.fdbd6b2f.chunk.js.map