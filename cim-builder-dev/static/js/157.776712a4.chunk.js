(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[157],{890:function(e,t,r){"use strict";r.r(t),r.d(t,"createLabelFunction",(function(){return f})),r.d(t,"formatField",(function(){return y}));var n=r(5),a=r(12),u=r(80),i=r(44),l=r(93),s=r(87),o=r(315),c=r(158);const p=n.a.getLogger("esri.layers.support.labelFormatUtils"),d={type:"simple",evaluate:()=>null},b={getAttribute:(e,t)=>e.field(t)};async function f(e,t,n){if(!e||!e.symbol)return d;const l=e.where,s=Object(c.b)(e),f=l?await r.e(5).then(r.bind(null,424)):null;let m;if("arcade"===s.type){const e=await Object(u.c)(s.expression,n,t);m={type:"arcade",evaluate(r){try{const t=e.evaluate({$feature:"attributes"in r?e.repurposeFeature(r):e.repurposeAdapter(r)});if(null!=t)return t.toString()}catch(t){p.error(new a.a("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:r,expression:s}))}return null},needsHydrationToEvaluate:()=>null==Object(c.e)(s.expression)}}else m={type:"simple",evaluate:e=>s.expression.replace(/{[^}]*}/g,r=>{const n=r.slice(1,-1),a=Object(i.n)(t,n);if(!a)return r;let u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[a.name]):u=e.field(a.name),null==u?"":y(u,a)})};if(l){let e;try{e=f.WhereClause.create(l,new o.a(t))}catch(g){return d}const r=m.evaluate;m.evaluate=t=>{const n="attributes"in t?void 0:b;return e.testFeature(t,n)?r(t):null}}return m}function y(e,t){if(null==e)return"";const r=t.domain;if(r)if("codedValue"===r.type||"coded-value"===r.type){const t=e;for(const e of r.codedValues)if(e.code===t)return e.name}else if("range"===r.type){const t=+e,n="range"in r?r.range[0]:r.minValue,a="range"in r?r.range[1]:r.maxValue;if(n<=t&&t<=a)return r.name}let n=e;return"date"===t.type||"esriFieldTypeDate"===t.type?n=Object(l.b)(n,Object(l.a)("short-date")):Object(i.q)(t)&&(n=Object(s.b)(+n)),n||""}}}]);
//# sourceMappingURL=157.776712a4.chunk.js.map