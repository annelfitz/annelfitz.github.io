/*! For license information please see 8195.8f4bf427.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[8195],{21615:(e,t,n)=>{n.d(t,{c:()=>c,d:()=>l});var i=n(76340),s=n(96515);const r=new Set;let a;const o={childList:!0};function c(e){a||(a=(0,s.c)("mutation",u)),a.observe(e.el,o)}function l(e){r.delete(e.el),u(a.takeRecords()),a.disconnect();for(const[t]of r.entries())a.observe(t,o)}function u(e){e.forEach((e=>{let{target:t}=e;(0,i.f)(t)}))}},88956:(e,t,n)=>{function i(e){return"Enter"===e||" "===e}n.d(t,{i:()=>i,n:()=>s});const s=["0","1","2","3","4","5","6","7","8","9"]},34018:(e,t,n)=>{n.d(t,{a:()=>I,b:()=>y,c:()=>$,d:()=>C,g:()=>F,i:()=>l,n:()=>k,p:()=>u,s:()=>p});var i=n(63614),s=n(88956),r=n(96515);const a=new RegExp("-","g"),o=new RegExp("\\.?0+$");class c{constructor(e){if(this.add=e=>c.fromBigInt(this.value+new c(e).value),this.subtract=e=>c.fromBigInt(this.value-new c(e).value),this.multiply=e=>c._divRound(this.value*new c(e).value,c.SHIFT),this.divide=e=>c._divRound(this.value*c.SHIFT,new c(e).value),e instanceof c)return e;const[t,n]=String(e).split(".").concat("");this.value=BigInt(t+n.padEnd(c.DECIMALS,"0").slice(0,c.DECIMALS))+BigInt(c.ROUNDED&&n[c.DECIMALS]>="5"),this.isNegative="-"===e.charAt(0)}getIntegersAndDecimals(){const e=this.value.toString().replace(a,"").padStart(c.DECIMALS+1,"0");return{integers:e.slice(0,-c.DECIMALS),decimals:e.slice(-c.DECIMALS).replace(o,"")}}toString(){const{integers:e,decimals:t}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${e}${t.length?"."+t:""}`}formatToParts(e){const{integers:t,decimals:n}=this.getIntegersAndDecimals(),i=e.numberFormatter.formatToParts(BigInt(t));return this.isNegative&&i.unshift({type:"minusSign",value:e.minusSign}),n.length&&(i.push({type:"decimal",value:e.decimal}),n.split("").forEach((e=>i.push({type:"fraction",value:e})))),i}format(e){const{integers:t,decimals:n}=this.getIntegersAndDecimals();return`${`${this.isNegative?e.minusSign:""}${e.numberFormatter.format(BigInt(t))}`}${n.length?`${e.decimal}${n.split("").map((t=>e.numberFormatter.format(Number(t)))).join("")}`:""}`}}function l(e){return!(!e||isNaN(Number(e)))}function u(e){return e&&(t=e,s.n.some((e=>t.includes(e))))?f(e,(e=>{let t=!1;const n=e.split("").filter(((e,n)=>e.match(/\./g)&&!t?(t=!0,!0):!(!e.match(/\-/g)||0!==n)||s.n.includes(e))).reduce(((e,t)=>e+t));return l(n)?new c(n).toString():""})):"";var t}c.DECIMALS=100,c.ROUNDED=!0,c.SHIFT=BigInt("1"+"0".repeat(c.DECIMALS)),c._divRound=(e,t)=>c.fromBigInt(e/t+(c.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0))),c.fromBigInt=e=>Object.assign(Object.create(c.prototype),{value:e});const g=/^([-0])0+(?=\d)/,m=/(?!^\.)\.$/,h=/(?!^-)-/g,d=/^-\b0\b\.?0*$/,p=e=>f(e,(e=>{const t=e.replace(h,"").replace(m,"").replace(g,"$1");return l(t)?d.test(t)?t:new c(t).toString():e}));function f(e,t){if(!e)return e;const n=e.toLowerCase().indexOf("e")+1;return n?e.replace(/[eE]*$/g,"").substring(0,n).concat(e.slice(n).replace(/[eE]/g,"")).split(/[eE]/).map(((e,n)=>t(1===n?e.replace(/\./g,""):e))).join("e").replace(/^e/,"1e"):t(e)}const b="en",v=["ar","bg","bs","ca","cs","da","de","el",b,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],w=["ar","bg","bs","ca","cs","da","de","de-CH","el",b,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],_=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],S=e=>_.includes(e),E=(new Intl.NumberFormat).resolvedOptions().numberingSystem,I="arab"!==E&&S(E)?E:"latn",y=e=>S(e)?e:I;function F(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cldr";const n="cldr"===t?w:v;return e?n.includes(e)?e:"nb"===(e=e.toLowerCase())?"no":"t9n"===t&&"pt"===e?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,((e,t,n)=>`${t}-${n.toUpperCase()}`)),n.includes(e)||(e=e.split("-")[0])),"zh"===e?"zh-CN":n.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),b)):b}const O=new Set;function $(e){!function(e){e.effectiveLocale=function(e){return e.el.lang||(0,i.c)(e.el,"[lang]")?.lang||document.documentElement.lang||b}(e)}(e),0===O.size&&N?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),O.add(e)}function C(e){O.delete(e),0===O.size&&N.disconnect()}const N=(0,r.c)("mutation",(e=>{e.forEach((e=>{const t=e.target;O.forEach((e=>{if(!(0,i.a)(t,e.el))return;const n=(0,i.c)(e.el,"[lang]");if(!n)return void(e.effectiveLocale=b);const s=n.lang;e.effectiveLocale=n.hasAttribute("lang")&&""===s?b:s}))}))}));const k=new class{constructor(){this.delocalize=e=>this._numberFormatOptions?f(e,(e=>e.trim().replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex))):e,this.localize=e=>this._numberFormatOptions?f(e,(e=>l(e.trim())?new c(e.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):e)):e}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(e){if(e.locale=F(e?.locale),e.numberingSystem=y(e?.numberingSystem),!this._numberFormatOptions&&e.locale===b&&e.numberingSystem===I&&2===Object.keys(e).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(e))return;this._numberFormatOptions=e,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const t=new Map(this._digits.map(((e,t)=>[e,t]))),n=new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-12345678.9);this._actualGroup=n.find((e=>"group"===e.type)).value,this._group=0===this._actualGroup.trim().length?" ":this._actualGroup,this._decimal=n.find((e=>"decimal"===e.type)).value,this._minusSign=n.find((e=>"minusSign"===e.type)).value,this._getDigitIndex=e=>t.get(e)}}},96515:(e,t,n)=>{function i(e,t,n){const i=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new i(t,n)}n.d(t,{c:()=>i})},27624:(e,t,n)=>{n.d(t,{I:()=>s,S:()=>i});const i={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},s={menu:"ellipsis"}},5690:(e,t,n)=>{n.d(t,{C:()=>i,I:()=>r,S:()=>s});const i={menu:"menu",defaultTrigger:"default-trigger"},s={tooltip:"tooltip",trigger:"trigger"},r={menu:"ellipsis"}},64920:(e,t,n)=>{n.d(t,{c:()=>g,d:()=>m,s:()=>c,u:()=>u});var i=n(76340),s=n(34018);const r={};function a(){throw new Error("could not fetch component message bundle")}function o(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function c(e){e.defaultMessages=await l(e,e.effectiveLocale),o(e)}async function l(e,t){const{el:n}=e,o=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return r[n]||(r[n]=fetch((0,i.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||a(),e.json()))).catch((()=>a()))),r[n]}((0,s.g)(t,"t9n"),o)}async function u(e,t){e.defaultMessages=await l(e,t),o(e)}function g(e){e.onMessagesChange=h}function m(e){e.onMessagesChange=void 0}function h(){o(this)}}}]);
//# sourceMappingURL=8195.8f4bf427.chunk.js.map