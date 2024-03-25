"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4695],{90344:(e,t,n)=>{n.d(t,{LJ:()=>E,Xr:()=>f,Ze:()=>T,cZ:()=>u,i$:()=>L,o5:()=>s,o8:()=>D,p6:()=>b});var r=n(35454),o=n(70171),a=n(17126);const i={year:void 0,month:void 0,day:void 0,weekday:void 0},l={hour:void 0,minute:void 0,second:void 0},s={timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},u={timeZone:"Etc/UTC"},h={year:"numeric",month:"numeric",day:"numeric"},m={year:"numeric",month:"long",day:"numeric"},c={year:"numeric",month:"short",day:"numeric"},d={year:"numeric",month:"long",weekday:"long",day:"numeric"},g={hour:"numeric",minute:"numeric"},y={...g,second:"numeric"},p={"short-date":h,"short-date-short-time":{...h,...g},"short-date-short-time-24":{...h,...g,hour12:!1},"short-date-long-time":{...h,...y},"short-date-long-time-24":{...h,...y,hour12:!1},"short-date-le":h,"short-date-le-short-time":{...h,...g},"short-date-le-short-time-24":{...h,...g,hour12:!1},"short-date-le-long-time":{...h,...y},"short-date-le-long-time-24":{...h,...y,hour12:!1},"long-month-day-year":m,"long-month-day-year-short-time":{...m,...g},"long-month-day-year-short-time-24":{...m,...g,hour12:!1},"long-month-day-year-long-time":{...m,...y},"long-month-day-year-long-time-24":{...m,...y,hour12:!1},"day-short-month-year":c,"day-short-month-year-short-time":{...c,...g},"day-short-month-year-short-time-24":{...c,...g,hour12:!1},"day-short-month-year-long-time":{...c,...y},"day-short-month-year-long-time-24":{...c,...y,hour12:!1},"long-date":d,"long-date-short-time":{...d,...g},"long-date-short-time-24":{...d,...g,hour12:!1},"long-date-long-time":{...d,...y},"long-date-long-time-24":{...d,...y,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":g,"long-time":y},f=(0,r.w)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),w={ar:"ar-u-nu-latn-ca-gregory"};let x=new WeakMap,v=p["short-date-short-time"];function T(e){return p[e]}function b(e,t){return function(e){const t=e||v;let n=x.get(t);if(!n){const e=(0,o.Kd)(),r=w[e]||e;n=new Intl.DateTimeFormat(r,t),x.set(t,n)}return n}(t).format(e)}function D(e,t=p["short-date"]){return b(new Date(e),{...t,...u,...l})}function E(e,t=p["short-time"]){return b(new Date(`1970-01-01T${e}Z`),{...t,...u,...i})}function L(e,t=p["short-date-short-time"]){const n=a.ou.fromISO(e,{setZone:!0}),r=(0,o.Kd)(),i=w[r]??r;return n.toLocaleString(t,{locale:i})}(0,o.Ze)((()=>{x=new WeakMap,v=p["short-date-short-time"]}))},70171:(e,t,n)=>{let r;n.d(t,{Kd:()=>i,Ze:()=>h,qe:()=>s});const o=globalThis.esriConfig?.locale??globalThis.dojoConfig?.locale;function a(){return o??globalThis.navigator?.language??"en"}function i(){return void 0===r&&(r=a()),r}const l=[];function s(e){return l.push(e),{remove(){l.splice(l.indexOf(e),1)}}}const u=[];function h(e){return u.push(e),{remove(){l.splice(u.indexOf(e),1)}}}globalThis.addEventListener?.("languagechange",(function(){const e=a();r!==e&&(r=e,[...u].forEach((t=>{t.call(null,e)})),[...l].forEach((t=>{t.call(null,e)})))}))},18848:(e,t,n)=>{n.d(t,{sh:()=>s,uf:()=>u});var r=n(70586),o=n(70171);const a={ar:"ar-u-nu-latn"};let i=new WeakMap,l={};function s(e={}){const t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function u(e,t){return Object.is(e,-0)&&(e=0),function(e){const t=e||l;if(!i.has(t)){const n=(0,o.Kd)(),r=a[(0,o.Kd)()]||n;i.set(t,new Intl.NumberFormat(r,e))}return(0,r.j0)(i.get(t))}(t).format(e)}(0,o.Ze)((()=>{i=new WeakMap,l={}}))},14695:(e,t,n)=>{n.r(t),n.d(t,{createLabelFunction:()=>d,formatField:()=>g});var r=n(20102),o=n(92604),a=n(90344),i=n(18848),l=n(35671),s=n(8813),u=n(59266);const h=o.Z.getLogger("esri.layers.support.labelFormatUtils"),m={type:"simple",evaluate:()=>null},c={getAttribute:(e,t)=>e.field(t)};async function d(e,t,o){if(!e||!e.symbol||!t)return m;const a=e.where,i=(0,s.hV)(e),l=a?await Promise.resolve().then(n.bind(n,41534)):null;let d;if("arcade"===i.type){const e=await(0,u.WW)(i.expression,o,t);if(null==e)return m;d={type:"arcade",evaluate(t){try{const n=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):t},e.services);if(null!=n)return n.toString()}catch(e){h.error(new r.Z("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:t,expression:i}))}return null},needsHydrationToEvaluate:()=>null==(0,s.el)(i.expression)}}else d={type:"simple",evaluate:e=>i.expression.replaceAll(/{[^}]*}/g,(n=>{const r=n.slice(1,-1),o=t.get(r);if(!o)return n;let a=null;return"attributes"in e?e&&e.attributes&&(a=e.attributes[o.name]):a=e.field(o.name),null==a?"":g(a,o)}))};if(a){let e;try{e=l.WhereClause.create(a,t)}catch(e){return h.error(new r.Z("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:a,error:e})),m}const n=d.evaluate;d.evaluate=t=>{const o="attributes"in t?void 0:c;try{if(e.testFeature(t,o))return n(t)}catch(e){h.error(new r.Z("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:a,feature:t,error:e}))}return null}}return d}function g(e,t){if(null==e)return"";const n=t.domain;if(n)if("codedValue"===n.type||"coded-value"===n.type){const t=e;for(const e of n.codedValues)if(e.code===t)return e.name}else if("range"===n.type){const t=+e,r="range"in n?n.range[0]:n.minValue,o="range"in n?n.range[1]:n.maxValue;if(r<=t&&t<=o)return n.name}let r=e;return"date"===t.type||"esriFieldTypeDate"===t.type?r=(0,a.p6)(r,(0,a.Ze)("short-date")):(0,l.H7)(t)&&(r=(0,i.uf)(+r)),r||""}},8813:(e,t,n)=>{n.d(t,{UO:()=>p,YI:()=>y,dI:()=>f,el:()=>b,hV:()=>g,z7:()=>d});var r=n(19153);const o="__begin__",a="__end__",i=new RegExp(o,"ig"),l=new RegExp(a,"ig"),s=new RegExp("^"+o,"i"),u=new RegExp(a+"$","i"),h='"',m=h+" + ",c=" + "+h;function d(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function g(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=function(e){return e.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}(e.labelExpression),t.type="conventional"),t}function y(e){const t=g(e);if(!t)return null;switch(t.type){case"conventional":return f(t.expression);case"arcade":return t.expression}return null}function p(e){const t=g(e);if(!t)return null;switch(t.type){case"conventional":return function(e){const t=e?.match(w);return t&&t[1].trim()||null}(t.expression);case"arcade":return b(t.expression)}return null}function f(e){let t;return e?(t=(0,r.gx)(e,(e=>o+'$feature["'+e+'"]'+a)),t=s.test(t)?t.replace(s,""):h+t,t=u.test(t)?t.replace(u,""):t+h,t=t.replaceAll(i,m).replaceAll(l,c)):t='""',t}const w=/^\s*\{([^}]+)\}\s*$/i,x=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,v=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,T=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function b(e){if(!e)return null;let t=x.exec(e)||v.exec(e);return t?t[1]||t[3]:(t=T.exec(e),t?t[2]:null)}}}]);