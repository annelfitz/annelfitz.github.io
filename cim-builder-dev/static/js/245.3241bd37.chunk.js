/*! For license information please see 245.3241bd37.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[245],{889:function(t,s,e){"use strict";e.r(s),e.d(s,"scopeCss",(function(){return k}));const o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),r=new RegExp("(-shadowcsscontext"+o,"gim"),n=new RegExp("(-shadowcssslotted"+o,"gim"),l=/-shadowcsshost-no-combinator([^\s]*)/,a=[/::shadow/g,/::content/g],h=/-shadowcsshost/gim,i=/:host/gim,p=/::slotted/gim,d=/:host-context/gim,u=/\/\*\s*[\s\S]*?\*\//g,g=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,f=(t,s)=>{const e=x(t);let o=0;return e.escapedString.replace(m,(...t)=>{const c=t[2];let r="",n=t[4],l="";n&&n.startsWith("{%BLOCK%")&&(r=e.blocks[o++],n=n.substring("%BLOCK%".length+1),l="{");const a=s({selector:c,content:r});return`${t[1]}${a.selector}${t[3]}${l}${a.content}${n}`})},x=t=>{const s=t.split(w),e=[],o=[];let c=0,r=[];for(let n=0;n<s.length;n++){const t=s[n];"}"===t&&c--,c>0?r.push(t):(r.length>0&&(o.push(r.join("")),e.push("%BLOCK%"),r=[]),e.push(t)),"{"===t&&c++}r.length>0&&(o.push(r.join("")),e.push("%BLOCK%"));return{escapedString:e.join(""),blocks:o}},$=(t,s,e)=>t.replace(s,(...t)=>{if(t[2]){const s=t[2].split(","),o=[];for(let c=0;c<s.length;c++){const r=s[c].trim();if(!r)break;o.push(e("-shadowcsshost-no-combinator",r,t[3]))}return o.join(",")}return"-shadowcsshost-no-combinator"+t[3]}),_=(t,s,e)=>t+s.replace("-shadowcsshost","")+e,b=(t,s,e)=>s.indexOf("-shadowcsshost")>-1?_(t,s,e):t+s+e+", "+s+" "+t+e,O=(t,s)=>!(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(s).test(t),S=(t,s,e)=>{const o="."+(s=s.replace(/\[is=([^\]]*)\]/g,(t,...s)=>s[0])),c=t=>{let c=t.trim();if(!c)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)c=((t,s,e)=>{if(h.lastIndex=0,h.test(t)){const s="."+e;return t.replace(l,(t,e)=>e.replace(/([^:]*)(:*)(.*)/,(t,e,o,c)=>e+s+o+c)).replace(h,s+" ")}return s+" "+t})(t,s,e);else{const s=t.replace(h,"");if(s.length>0){const t=s.match(/([^:]*)(:*)(.*)/);t&&(c=t[1]+o+t[2]+t[3])}}return c},r=(t=>{const s=[];let e,o=0;e=(t=t.replace(/(\[[^\]]*\])/g,(t,e)=>{const c=`__ph-${o}__`;return s.push(e),o++,c})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(t,e,c)=>{const r=`__ph-${o}__`;return s.push(c),o++,e+r});return{content:e,placeholders:s}})(t);let n,a="",i=0;const p=/( |>|\+|~(?!=))\s*/g;let d=!((t=r.content).indexOf("-shadowcsshost-no-combinator")>-1);for(;null!==(n=p.exec(t));){const s=n[1],e=t.slice(i,n.index).trim();d=d||e.indexOf("-shadowcsshost-no-combinator")>-1;a+=`${d?c(e):e} ${s} `,i=p.lastIndex}const u=t.substring(i);return d=d||u.indexOf("-shadowcsshost-no-combinator")>-1,a+=d?c(u):u,g=r.placeholders,a.replace(/__ph-(\d+)__/g,(t,s)=>g[+s]);var g},W=(t,s,e,o,c)=>f(t,t=>{let c=t.selector,r=t.content;"@"!==t.selector[0]?c=((t,s,e,o)=>t.split(",").map(t=>o&&t.indexOf("."+o)>-1?t.trim():O(t,s)?S(t,s,e).trim():t.trim()).join(", "))(t.selector,s,e,o):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(r=W(t.content,s,e,o));return{selector:c.replace(/\s{2,}/g," ").trim(),content:r}}),j=(t,s,e,o,l)=>{const h=((t,s)=>{const e="."+s+" > ",o=[];return t=t.replace(n,(...t)=>{if(t[2]){const s=t[2].trim(),c=t[3],r=e+s+c;let n="";for(let e=t[4]-1;e>=0;e--){const s=t[5][e];if("}"===s||","===s)break;n=s+n}const l=n+r,a=`${n.trimRight()}${r.trim()}`;if(l.trim()!==a.trim()){const t=`${a}, ${l}`;o.push({orgSelector:l,updatedSelector:t})}return r}return"-shadowcsshost-no-combinator"+t[3]}),{selectors:o,cssText:t}})(t=(t=>$(t,r,b))(t=(t=>$(t,c,_))(t=t.replace(d,"-shadowcsscontext").replace(i,"-shadowcsshost").replace(p,"-shadowcssslotted"))),o);return t=(t=>a.reduce((t,s)=>t.replace(s," "),t))(t=h.cssText),s&&(t=W(t,s,e,o)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+e)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:h.selectors}},k=(t,s,e)=>{const o=s+"-h",c=s+"-s",r=t.match(g)||[];t=(t=>t.replace(u,""))(t);const n=[];if(e){const s=t=>{const s=`/*!@___${n.length}___*/`,e=`/*!@${t.selector}*/`;return n.push({placeholder:s,comment:e}),t.selector=s+t.selector,t};t=f(t,t=>"@"!==t.selector[0]?s(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=f(t.content,s),t):t)}const l=j(t,s,o,c);return t=[l.cssText,...r].join("\n"),e&&n.forEach(({placeholder:s,comment:e})=>{t=t.replace(s,e)}),l.slottedSelectors.forEach(s=>{t=t.replace(s.orgSelector,s.updatedSelector)}),t}}}]);
//# sourceMappingURL=245.3241bd37.chunk.js.map