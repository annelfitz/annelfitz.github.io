(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[219],{1019:function(e,t,r){"use strict";r.r(t),r.d(t,"createLabelFunction",(function(){return f})),r.d(t,"formatField",(function(){return b}));var n=r(9),a=r(4),u=r(92),i=r(81),l=r(43),s=r(160),o=r(70);const c=a.a.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},d={getAttribute:(e,t)=>e.field(t)};async function f(e,t,a){if(!e||!e.symbol)return p;const u=e.where,i=Object(s.b)(e),l=u?await r.e(5).then(r.bind(null,433)):null;let f;if("arcade"===i.type){const e=await Object(o.c)(i.expression,a,t);f={type:"arcade",evaluate(t){try{const r=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):e.repurposeAdapter(t)});if(null!=r)return r.toString()}catch(a){c.error(new n.a("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:t,expression:i}))}return null},needsHydrationToEvaluate:()=>null==Object(s.e)(i.expression)}}else f={type:"simple",evaluate:e=>i.expression.replace(/{[^}]*}/g,r=>{const n=r.slice(1,-1),a=t.get(n);if(!a)return r;let u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[a.name]):u=e.field(a.name),null==u?"":b(u,a)})};if(u){let e;try{e=l.WhereClause.create(u,t)}catch(y){return p}const r=f.evaluate;f.evaluate=t=>{const n="attributes"in t?void 0:d;return e.testFeature(t,n)?r(t):null}}return f}function b(e,t){if(null==e)return"";const r=t.domain;if(r)if("codedValue"===r.type||"coded-value"===r.type){const t=e;for(const e of r.codedValues)if(e.code===t)return e.name}else if("range"===r.type){const t=+e,n="range"in r?r.range[0]:r.minValue,a="range"in r?r.range[1]:r.maxValue;if(n<=t&&t<=a)return r.name}let n=e;return"date"===t.type||"esriFieldTypeDate"===t.type?n=Object(u.b)(n,Object(u.a)("short-date")):Object(l.o)(t)&&(n=Object(i.b)(+n)),n||""}}}]);
//# sourceMappingURL=219.601b1230.chunk.js.map