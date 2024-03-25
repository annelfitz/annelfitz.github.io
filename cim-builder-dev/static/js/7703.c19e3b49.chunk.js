/*! For license information please see 7703.c19e3b49.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[7703],{77703:(t,e,n)=>{n.r(e),n.d(e,{calcite_button:()=>C});var a=n(85610),o=n(68884),i=n(65224),r=n(64761),c=n(73972),l=n(98101),s=n(41057),d=n(44300),u=n(3993);n(49244);!function(t){function e(t,e,n){throw new t("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+e+".",n)}"function"!=typeof t.requestSubmit&&(t.requestSubmit=function(t){t?(!function(t,n){t instanceof HTMLElement||e(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==t.type||e(TypeError,"The specified element is not a submit button"),t.form==n||e(DOMException,"The specified element is not owned by this form element","NotFoundError")}(t,this),t.click()):((t=document.createElement("input")).type="submit",t.hidden=!0,this.appendChild(t),t.click(),this.removeChild(t))})}(HTMLFormElement.prototype);const h="calcite-button--loader",p="content",b="content--slotted",v="icon",g="icon--start",m="icon--end",f="loading-in",k="loading-out",x="icon-start-empty",w="icon-end-empty",y="button-padding",E="button-padding--shrunk",C=class{constructor(t){(0,a.r)(this,t),this.mutationObserver=(0,d.c)("mutation",(()=>this.updateHasContent())),this.handleClick=()=>{const{type:t}=this;this.href||("submit"===t?(0,i.s)(this):"reset"===t&&(0,i.r)(this))},this.alignment="center",this.appearance="solid",this.label=void 0,this.kind="brand",this.disabled=!1,this.href=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.loading=!1,this.name=void 0,this.rel=void 0,this.round=!1,this.scale="m",this.splitChild=!1,this.target=void 0,this.type="button",this.width="auto",this.messages=void 0,this.messageOverrides=void 0,this.hasContent=!1,this.hasLoader=!1,this.effectiveLocale="",this.defaultMessages=void 0}loadingChanged(t,e){t&&!e&&(this.hasLoader=!0),!t&&e&&window.setTimeout((()=>{this.hasLoader=!1}),300)}onMessagesChange(){}async connectedCallback(){(0,s.c)(this),(0,u.c)(this),this.hasLoader=this.loading,this.setupTextContentObserver(),(0,c.c)(this),this.formEl=(0,o.c)(this.el,"form")}disconnectedCallback(){this.mutationObserver?.disconnect(),(0,c.d)(this),(0,s.d)(this),(0,u.d)(this),this.formEl=null}async componentWillLoad(){(0,l.s)(this),this.updateHasContent(),await(0,u.s)(this)}componentDidLoad(){(0,l.a)(this)}componentDidRender(){(0,r.u)(this)}render(){const t=this.href?"a":"button",e=t,n=this.hasLoader?(0,a.h)("div",{class:h},(0,a.h)("calcite-loader",{class:this.loading?f:k,inline:!0,label:this.messages.loading,scale:"l"===this.scale?"m":"s"})):null,o=!this.iconStart&&!this.iconEnd,i=(0,a.h)("calcite-icon",{class:{[v]:!0,[g]:!0},flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"l"===this.scale?"m":"s"}),r=(0,a.h)("calcite-icon",{class:{[v]:!0,[m]:!0},flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"l"===this.scale?"m":"s"}),l=(0,a.h)("span",{class:p},(0,a.h)("slot",null));return(0,a.h)(e,{"aria-label":(0,c.g)(this),class:{[y]:o,[E]:!o,[b]:this.hasContent,[x]:!this.iconStart,[w]:!this.iconEnd},disabled:this.disabled||this.loading,href:"a"===t&&this.href,name:"button"===t&&this.name,onClick:this.handleClick,rel:"a"===t&&this.rel,tabIndex:this.disabled||this.loading?-1:null,target:"a"===t&&this.target,type:"button"===t&&this.type,ref:t=>this.childEl=t},n,this.iconStart?i:null,this.hasContent?l:null,this.iconEnd?r:null)}async setFocus(){await(0,l.c)(this),this.childEl?.focus()}effectiveLocaleChange(){(0,u.u)(this,this.effectiveLocale)}updateHasContent(){const t=this.el.textContent.trim().length>0||this.el.childNodes.length>0;this.hasContent=1===this.el.childNodes.length&&"#text"===this.el.childNodes[0]?.nodeName?this.el.textContent?.trim().length>0:t}setupTextContentObserver(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}onLabelClick(){this.handleClick(),this.setFocus()}static get assetsDirs(){return["assets"]}get el(){return(0,a.g)(this)}static get watchers(){return{loading:["loadingChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};C.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline-block;inline-size:auto;vertical-align:middle}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-color:transparent}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host button,:host a{--calcite-button-content-margin-internal:0.5rem;--calcite-button-padding-x-internal:7px;--calcite-button-padding-y-internal:3px;padding-block:var(--calcite-button-padding-y-internal);padding-inline:var(--calcite-button-padding-x-internal);position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-appearance:none;appearance:none;align-items:center;justify-content:center;border-radius:0px;border-style:none;text-align:center;font-family:inherit;font-weight:var(--calcite-font-weight-normal);text-decoration-line:none;transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, box-shadow var(--calcite-animation-timing) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out}:host button:hover,:host a:hover{text-decoration-line:none}.content{display:flex;flex-basis:auto;margin-inline:var(--calcite-button-content-margin-internal)}.icon-start-empty .content{margin-inline-start:unset}.icon-end-empty .content{margin-inline-end:unset}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-content-margin-internal:0.75rem}:host([scale=l]) button,:host([scale=l]) a{--calcite-button-content-margin-internal:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-inline-end:auto}:host([alignment=icon-start-space-between]:not([width=auto])) a,:host([alignment=icon-start-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-inline-start:auto}:host([alignment=icon-end-space-between]:not([width=auto])) a,:host([alignment=icon-end-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:var(--calcite-button-content-margin-internal)}.icon{position:relative;margin:0px;display:inline-flex;font-weight:var(--calcite-font-weight-normal);line-height:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([loading]){pointer-events:none}:host([loading]) button,:host([loading]) a{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}@keyframes loader-in{0%{inline-size:0;opacity:0;transform:scale(0.5)}100%{inline-size:1em;opacity:1;transform:scale(1)}}@keyframes loader-out{0%{inline-size:1em;opacity:1;transform:scale(1)}100%{inline-size:0;opacity:0;transform:scale(0.5)}}.calcite-button--loader{display:flex}.calcite-button--loader calcite-loader{margin:0px;transition:inline-size var(--calcite-internal-animation-timing-slow) ease-in-out, opacity var(--calcite-internal-animation-timing-slow) ease-in-out, transform var(--calcite-internal-animation-timing-slow) ease-in-out}.calcite-button--loader calcite-loader.loading-in{animation-name:loader-in;animation-duration:var(--calcite-internal-animation-timing-slow)}.calcite-button--loader calcite-loader.loading-out{animation-name:loader-out;animation-duration:var(--calcite-internal-animation-timing-slow)}:host([loading]) button.content--slotted .calcite-button--loader calcite-loader,:host([loading]) a.content--slotted .calcite-button--loader calcite-loader{margin-inline-end:var(--calcite-button-content-margin-internal)}:host([loading]) button:not(.content--slotted) .icon--start,:host([loading]) button:not(.content--slotted) .icon--end,:host([loading]) a:not(.content--slotted) .icon--start,:host([loading]) a:not(.content--slotted) .icon--end{display:none}:host([appearance]) button,:host([appearance]) a{border-width:1px;border-style:solid;border-color:transparent}:host([kind=brand]) button,:host([kind=brand]) a{background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([kind=brand]) button:hover,:host([kind=brand]) button:focus,:host([kind=brand]) a:hover,:host([kind=brand]) a:focus{background-color:var(--calcite-ui-brand-hover)}:host([kind=brand]) button:active,:host([kind=brand]) a:active{background-color:var(--calcite-ui-brand-press)}:host([kind=brand]) button calcite-loader,:host([kind=brand]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([kind=danger]) button,:host([kind=danger]) a{background-color:var(--calcite-ui-danger);color:var(--calcite-ui-text-inverse)}:host([kind=danger]) button:hover,:host([kind=danger]) button:focus,:host([kind=danger]) a:hover,:host([kind=danger]) a:focus{background-color:var(--calcite-ui-danger-hover)}:host([kind=danger]) button:active,:host([kind=danger]) a:active{background-color:var(--calcite-ui-danger-press)}:host([kind=danger]) button calcite-loader,:host([kind=danger]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([kind=neutral]) button,:host([kind=neutral]) a{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}:host([kind=neutral]) button:hover,:host([kind=neutral]) button:focus,:host([kind=neutral]) a:hover,:host([kind=neutral]) a:focus{background-color:var(--calcite-ui-foreground-2)}:host([kind=neutral]) button:active,:host([kind=neutral]) a:active{background-color:var(--calcite-ui-foreground-1)}:host([kind=neutral]) button calcite-loader,:host([kind=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([kind=inverse]) button,:host([kind=inverse]) a{color:var(--calcite-ui-text-inverse);background-color:var(--calcite-ui-inverse)}:host([kind=inverse]) button:hover,:host([kind=inverse]) button:focus,:host([kind=inverse]) a:hover,:host([kind=inverse]) a:focus{background-color:var(--calcite-ui-inverse-hover)}:host([kind=inverse]) button:active,:host([kind=inverse]) a:active{background-color:var(--calcite-ui-inverse-press)}:host([kind=inverse]) button calcite-loader,:host([kind=inverse]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([appearance=outline-fill]) button,:host([appearance=outline-fill]) a{border-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline-fill][kind=brand]) button,:host([appearance=outline-fill][kind=brand]) a{border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-brand)}:host([appearance=outline-fill][kind=brand]) button:hover,:host([appearance=outline-fill][kind=brand]) a:hover{border-color:var(--calcite-ui-brand-hover);color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}:host([appearance=outline-fill][kind=brand]) button:focus,:host([appearance=outline-fill][kind=brand]) a:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([appearance=outline-fill][kind=brand]) button:active,:host([appearance=outline-fill][kind=brand]) a:active{border-color:var(--calcite-ui-brand-press);color:var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=outline-fill][kind=brand]) button calcite-loader,:host([appearance=outline-fill][kind=brand]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=outline-fill][kind=danger]) button,:host([appearance=outline-fill][kind=danger]) a{border-color:var(--calcite-ui-danger);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-danger)}:host([appearance=outline-fill][kind=danger]) button:hover,:host([appearance=outline-fill][kind=danger]) a:hover{border-color:var(--calcite-ui-danger-hover);color:var(--calcite-ui-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover)}:host([appearance=outline-fill][kind=danger]) button:focus,:host([appearance=outline-fill][kind=danger]) a:focus{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger)}:host([appearance=outline-fill][kind=danger]) button:active,:host([appearance=outline-fill][kind=danger]) a:active{border-color:var(--calcite-ui-danger-press);color:var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=outline-fill][kind=danger]) button calcite-loader,:host([appearance=outline-fill][kind=danger]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=outline-fill][kind=neutral]) button,:host([appearance=outline-fill][kind=neutral]) a{background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button:hover,:host([appearance=outline-fill][kind=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button:focus,:host([appearance=outline-fill][kind=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button:active,:host([appearance=outline-fill][kind=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button calcite-loader,:host([appearance=outline-fill][kind=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline-fill][kind=inverse]) button,:host([appearance=outline-fill][kind=inverse]) a{background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-inverse)}:host([appearance=outline-fill][kind=inverse]) button:hover,:host([appearance=outline-fill][kind=inverse]) a:hover{border-color:var(--calcite-ui-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover)}:host([appearance=outline-fill][kind=inverse]) button:focus,:host([appearance=outline-fill][kind=inverse]) a:focus{border-color:var(--calcite-ui-inverse);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse)}:host([appearance=outline-fill][kind=inverse]) button:active,:host([appearance=outline-fill][kind=inverse]) a:active{border-color:var(--calcite-ui-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press)}:host([appearance=outline-fill][kind=inverse]) button calcite-loader,:host([appearance=outline-fill][kind=inverse]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline]) button,:host([appearance=outline]) a{border-width:1px;border-style:solid;background-color:transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][kind=brand]) button,:host([appearance=outline][kind=brand]) a{border-color:var(--calcite-ui-brand);background-color:transparent;color:var(--calcite-ui-brand)}:host([appearance=outline][kind=brand]) button:hover,:host([appearance=outline][kind=brand]) a:hover{border-color:var(--calcite-ui-brand-hover);color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}:host([appearance=outline][kind=brand]) button:focus,:host([appearance=outline][kind=brand]) a:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([appearance=outline][kind=brand]) button:active,:host([appearance=outline][kind=brand]) a:active{border-color:var(--calcite-ui-brand-press);color:var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=outline][kind=brand]) button calcite-loader,:host([appearance=outline][kind=brand]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=outline][kind=danger]) button,:host([appearance=outline][kind=danger]) a{border-color:var(--calcite-ui-danger);background-color:transparent;color:var(--calcite-ui-danger)}:host([appearance=outline][kind=danger]) button:hover,:host([appearance=outline][kind=danger]) a:hover{border-color:var(--calcite-ui-danger-hover);color:var(--calcite-ui-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover)}:host([appearance=outline][kind=danger]) button:focus,:host([appearance=outline][kind=danger]) a:focus{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger)}:host([appearance=outline][kind=danger]) button:active,:host([appearance=outline][kind=danger]) a:active{border-color:var(--calcite-ui-danger-press);color:var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=outline][kind=danger]) button calcite-loader,:host([appearance=outline][kind=danger]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=outline][kind=neutral]) button,:host([appearance=outline][kind=neutral]) a{background-color:transparent;color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-1)}:host([appearance=outline][kind=neutral]) button:hover,:host([appearance=outline][kind=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=outline][kind=neutral]) button:focus,:host([appearance=outline][kind=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline][kind=neutral]) button:active,:host([appearance=outline][kind=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline][kind=neutral]) button calcite-loader,:host([appearance=outline][kind=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][kind=inverse]) button,:host([appearance=outline][kind=inverse]) a{background-color:transparent;color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-inverse)}:host([appearance=outline][kind=inverse]) button:hover,:host([appearance=outline][kind=inverse]) a:hover{border-color:var(--calcite-ui-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover)}:host([appearance=outline][kind=inverse]) button:focus,:host([appearance=outline][kind=inverse]) a:focus{border-color:var(--calcite-ui-inverse);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse)}:host([appearance=outline][kind=inverse]) button:active,:host([appearance=outline][kind=inverse]) a:active{border-color:var(--calcite-ui-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press)}:host([appearance=outline][kind=inverse]) button calcite-loader,:host([appearance=outline][kind=inverse]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline-fill][split-child=primary]) button,:host([appearance=outline][split-child=primary]) button{border-inline-end-width:0;border-inline-start-width:1px}:host([appearance=outline-fill][split-child=secondary]) button,:host([appearance=outline][split-child=secondary]) button{border-inline-start-width:0;border-inline-end-width:1px}:host([appearance=transparent]:not(.enable-editing-button)) button,:host([appearance=transparent]:not(.enable-editing-button)) a{background-color:transparent}:host([appearance=transparent]:not(.enable-editing-button)) button:hover,:host([appearance=transparent]:not(.enable-editing-button)) button:focus,:host([appearance=transparent]:not(.enable-editing-button)) a:hover,:host([appearance=transparent]:not(.enable-editing-button)) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent]:not(.enable-editing-button)) button:active,:host([appearance=transparent]:not(.enable-editing-button)) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][kind=brand]) button,:host([appearance=transparent][kind=brand]) a{color:var(--calcite-ui-brand)}:host([appearance=transparent][kind=brand]) button:hover,:host([appearance=transparent][kind=brand]) a:hover{color:var(--calcite-ui-brand-hover)}:host([appearance=transparent][kind=brand]) button:focus,:host([appearance=transparent][kind=brand]) a:focus{color:var(--calcite-ui-brand)}:host([appearance=transparent][kind=brand]) button:active,:host([appearance=transparent][kind=brand]) a:active{color:var(--calcite-ui-brand-press)}:host([appearance=transparent][kind=brand]) button calcite-loader,:host([appearance=transparent][kind=brand]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=transparent][kind=danger]) button,:host([appearance=transparent][kind=danger]) a{color:var(--calcite-ui-danger)}:host([appearance=transparent][kind=danger]) button:hover,:host([appearance=transparent][kind=danger]) a:hover{color:var(--calcite-ui-danger-hover)}:host([appearance=transparent][kind=danger]) button:focus,:host([appearance=transparent][kind=danger]) a:focus{color:var(--calcite-ui-danger)}:host([appearance=transparent][kind=danger]) button:active,:host([appearance=transparent][kind=danger]) a:active{color:var(--calcite-ui-danger-press)}:host([appearance=transparent][kind=danger]) button calcite-loader,:host([appearance=transparent][kind=danger]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) button,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) a,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=transparent][kind=neutral].cancel-editing-button) button{border-block-start-width:1px;border-block-end-width:1px;color:var(--calcite-ui-text-3);border-block-start-color:var(--calcite-ui-border-input);border-block-end-color:var(--calcite-ui-border-input);border-block-style:solid}:host([appearance=transparent][kind=neutral].cancel-editing-button) button:not(.content--slotted){--calcite-button-padding-y-internal:0}:host([appearance=transparent][kind=neutral].cancel-editing-button) button:hover{color:var(--calcite-ui-text-1)}:host([appearance=transparent][kind=neutral].enable-editing-button) button{background-color:transparent}:host(.confirm-changes-button) button:focus,:host(.cancel-editing-button) button:focus,:host(.enable-editing-button) button:focus{outline-offset:-2px}:host([appearance=transparent][kind=inverse]) button,:host([appearance=transparent][kind=inverse]) a,:host([appearance=transparent][kind=inverse]) calcite-loader{color:var(--calcite-ui-text-inverse)}:host([scale=s]) button.content--slotted,:host([scale=s]) a.content--slotted{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s][appearance=transparent]) button.content--slotted,:host([scale=s][appearance=transparent]) a.content--slotted{--calcite-button-padding-x-internal:0.5rem}:host([scale=s]) button,:host([scale=s]) a{--calcite-button-padding-y-internal:3px}:host([scale=m]) button.content--slotted,:host([scale=m]) a.content--slotted{--calcite-button-padding-x-internal:11px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-padding-y-internal:7px}:host([scale=m][appearance=transparent]) button.content--slotted,:host([scale=m][appearance=transparent]) a.content--slotted{--calcite-button-padding-x-internal:0.75rem}:host([scale=l]) button.content--slotted,:host([scale=l]) a.content--slotted{--calcite-button-padding-x-internal:15px;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .button-padding{--calcite-button-padding-x-internal:1rem;--calcite-button-padding-y-internal:11px}:host([scale=l]) .button-padding--shrunk{--calcite-button-padding-y-internal:9px}:host([scale=s]) button:not(.content--slotted),:host([scale=s]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:3px;inline-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:1.5rem}:host([scale=m]) button:not(.content--slotted),:host([scale=m]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:7px;inline-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2rem}:host([scale=l]) button:not(.content--slotted),:host([scale=l]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:9px;inline-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2.75rem}:host([scale=l][appearance=transparent]) button:not(.content--slotted),:host([scale=l][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y-internal:0.625rem}:host([scale=s][icon-start][icon-end]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:23px;block-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=s][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:1.5rem}:host([scale=m][icon-start][icon-end]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:2rem;block-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:33px}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:43px;block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted) .icon--start+.icon--end,:host([scale=l][icon-start][icon-end]) a:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:1rem}:host([scale=l][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:2.75rem}"},65224:(t,e,n)=>{n.d(e,{H:()=>f,a:()=>b,c:()=>u,d:()=>p,r:()=>d,s:()=>s});var a=n(68884),o=n(85610);const i="hidden-form-input";function r(t){return"checked"in t}const c=new WeakMap,l=new WeakSet;function s(t){const{formEl:e}=t;return!!e&&("requestSubmit"in e?e.requestSubmit():e.submit(),!0)}function d(t){t.formEl?.reset()}function u(t){const{el:e,value:n}=t,o=(0,a.c)(e,"form");if(!o||function(t,e){const n="calciteInternalFormComponentRegister";let a=!1;return t.addEventListener(n,(t=>{a=t.composedPath().some((t=>l.has(t))),t.stopPropagation()}),{once:!0}),e.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),a}(o,e))return;t.formEl=o,t.defaultValue=n,r(t)&&(t.defaultChecked=t.checked);const i=(t.onFormReset||h).bind(t);o.addEventListener("reset",i),c.set(t.el,i),l.add(e)}function h(){r(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function p(t){const{el:e,formEl:n}=t;if(!n)return;const a=c.get(e);n.removeEventListener("reset",a),c.delete(e),t.formEl=null,l.delete(e)}function b(t,e){t.defaultValue=e}const v=t=>{t.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},g=t=>t.removeEventListener("change",v);function m(t,e,n){const{defaultValue:a,disabled:o,name:i,required:c}=t;e.defaultValue=a,e.disabled=o,e.name=i,e.required=c,e.tabIndex=-1,r(t)?(e.checked=t.checked,e.defaultChecked=t.defaultChecked,e.value=t.checked?n||"on":""):e.value=n||"",t.syncHiddenFormInput?.(e)}const f=t=>{let{component:e}=t;return function(t){const{el:e,formEl:n,name:a,value:o}=t,{ownerDocument:r}=e,c=e.querySelectorAll('input[slot="hidden-form-input"]');if(!n||!a)return void c.forEach((t=>{g(t),t.remove()}));const l=Array.isArray(o)?o:[o],s=[],d=new Set;let u;c.forEach((e=>{const n=l.find((t=>t==e.value));null!=n?(d.add(n),m(t,e,n)):s.push(e)})),l.forEach((e=>{if(d.has(e))return;let n=s.pop();n||(n=r.createElement("input"),n.slot=i),u||(u=r.createDocumentFragment()),u.append(n),n.addEventListener("change",v),m(t,n,e)})),u&&e.append(u),s.forEach((t=>{g(t),t.remove()}))}(e),(0,o.h)("slot",{name:i})}},64761:(t,e,n)=>{function a(){}function o(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=a);t.el.click=HTMLElement.prototype.click,"function"===typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}n.d(e,{u:()=>o})},73972:(t,e,n)=>{n.d(e,{a:()=>r,c:()=>p,d:()=>b,g:()=>v,l:()=>i});var a=n(68884);const o="calciteInternalLabelClick",i="calciteInternalLabelConnected",r="calciteInternaLabelDisconnected",c="calcite-label",l=new WeakMap,s=new WeakMap,d=new WeakMap,u=new Set,h=t=>{const{id:e}=t,n=e&&(0,a.q)(t,{selector:`calcite-label[for="${e}"]`});if(n)return n;const o=(0,a.c)(t,c);return!o||function(t,e){let n;const a="custom-element-ancestor-check",o=a=>{a.stopImmediatePropagation();const o=a.composedPath();n=o.slice(o.indexOf(e),o.indexOf(t))};t.addEventListener(a,o,{once:!0}),e.dispatchEvent(new CustomEvent(a,{composed:!0,bubbles:!0})),t.removeEventListener(a,o);return n.filter((n=>n!==e&&n!==t)).filter((t=>t.tagName?.includes("-"))).length>0}(o,t)?null:o};function p(t){const e=h(t.el);if(l.has(e)||!e&&u.has(t))return;const n=f.bind(t);if(e){t.labelEl=e;const a=g.bind(t);l.set(t.labelEl,a),t.labelEl.addEventListener(o,a),u.delete(t),document.removeEventListener(i,s.get(t)),d.set(t,n),document.addEventListener(r,n)}else u.has(t)||(n(),document.removeEventListener(r,d.get(t)))}function b(t){if(u.delete(t),document.removeEventListener(i,s.get(t)),document.removeEventListener(r,d.get(t)),s.delete(t),d.delete(t),!t.labelEl)return;const e=l.get(t.labelEl);t.labelEl.removeEventListener(o,e),l.delete(t.labelEl)}function v(t){return t.label||t.labelEl?.textContent?.trim()||""}function g(t){if(this.disabled)return;this.el.contains(t.detail.sourceEvent.target)||this.onLabelClick(t)}function m(){u.has(this)&&p(this)}function f(){u.add(this);const t=s.get(this)||m.bind(this);s.set(this,t),document.addEventListener(i,t)}},98101:(t,e,n)=>{n.d(e,{a:()=>r,c:()=>c,s:()=>i});const a=new WeakMap,o=new WeakMap;function i(t){o.set(t,new Promise((e=>a.set(t,e))))}function r(t){a.get(t)()}function c(t){return o.get(t)}}}]);
//# sourceMappingURL=7703.c19e3b49.chunk.js.map