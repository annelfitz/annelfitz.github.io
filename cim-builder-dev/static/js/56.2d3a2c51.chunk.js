(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[56,142,143],{434:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i}));"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof e||"undefined"!=typeof self&&self;function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function s(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return r(null==t&&n.path)}},n.exports),n.exports}function r(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}}).call(this,n(375))},532:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o}));var i=n(6),s=n(10),r=n(162);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?r.a:"esriGeometryPolyline"===e?r.c:r.b}}}function a(e,t){if(Object(i.a)("csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${t.indexOf(".")?`["${t}"]`:"."+t} = ${JSON.stringify(e[t])};`;const i=new Function(n);return()=>new i}catch(n){return()=>({[t]:null,...e})}}function u(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(s.a)(e)}}]}},533:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(3),s=n(107),r=n(133),o=n(481);class a{constructor(e=9,t){this.compareMinX=c,this.compareMinY=h,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this.toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),x.prune(),I.prune(),j.prune(),w.prune()}all(e){this._all(this.data,e)}search(e,t){let n=this.data;const i=this.toBBox;if(b(e,n))for(x.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;b(e,o)&&(n.leaf?t(r):g(e,o)?this._all(r,t):x.push(r))}n=x.pop()}}collides(e){let t=this.data;const n=this.toBBox;if(!b(e,t))return!1;for(x.clear();t;){for(let i=0,s=t.children.length;i<s;i++){const s=t.children[i],r=t.leaf?n(s):s;if(b(e,r)){if(t.leaf||g(e,r))return!0;x.push(s)}}t=x.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new O([]),this}remove(e){if(!e)return this;let t,n=this.data,r=null,o=0,a=!1;const u=this.toBBox(e);for(j.clear(),w.clear();n||j.length>0;){var l;if(n||(n=Object(i.c)(j.pop()),r=j.data[j.length-1],o=null!=(l=w.pop())?l:0,a=!0),n.leaf&&(t=Object(s.e)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),j.push(n),this._condense(j),this;a||n.leaf||!g(n,u)?r?(o++,n=r.children[o],a=!1):n=null:(j.push(n),w.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let n=e;for(I.clear();n;){var i;if(!0===n.leaf)for(const e of n.children)t(e);else I.pushArray(n.children);n=null!=(i=I.pop())?i:null}}_build(e,t,n,i){const s=n-t+1;let r=this._maxEntries;if(s<=r){const i=new O(e.slice(t,n+1));return u(i,this.toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new F([]);o.height=i;const a=Math.ceil(s/r),l=a*Math.ceil(Math.sqrt(r));_(e,t,n,l,this.compareMinX);for(let u=t;u<=n;u+=l){const t=Math.min(u+l-1,n);_(e,u,t,a,this.compareMinY);for(let n=u;n<=t;n+=a){const s=Math.min(n+a-1,t);o.children.push(this._build(e,n,s,i-1))}}return u(o,this.toBBox),o}_chooseSubtree(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=f(o),u=p(e,o)-a;u<s?(s=u,i=a<i?a:i,n=o):u===s&&a<i&&(i=a,n=o)}t=n||t.children[0]}return t}_insert(e,t,n){const i=this.toBBox,s=n?e:i(e);j.clear();const r=this._chooseSubtree(s,this.data,t,j);for(r.children.push(e),d(r,s);t>=0&&j.data[t].children.length>this._maxEntries;)this._split(j,t),t--;this._adjustParentBBoxes(s,j,t)}_split(e,t){const n=e.data[t],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),a=n.leaf?new O(o):new F(o);a.height=n.height,u(n,this.toBBox),u(a,this.toBBox),t?e.data[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this.data=new F([e,t]),this.data.height=e.height+1,u(this.data,this.toBBox)}_chooseSplitIndex(e,t,n){let i,s,r;i=s=1/0;for(let o=t;o<=n-t;o++){const t=l(e,0,o,this.toBBox),a=l(e,o,n,this.toBBox),u=y(t,a),d=f(t)+f(a);u<i?(i=u,r=o,s=d<s?d:s):u===i&&d<s&&(s=d,r=o)}return r}_chooseSplitAxis(e,t,n){const i=e.leaf?this.compareMinX:c,s=e.leaf?this.compareMinY:h;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,s)&&e.children.sort(i)}_allDistMargin(e,t,n,i){e.children.sort(i);const s=this.toBBox,r=l(e,0,t,s),o=l(e,n-t,n,s);let a=m(r)+m(o);for(let u=t;u<n-t;u++){const t=e.children[u];d(r,e.leaf?s(t):t),a+=m(r)}for(let u=n-t-1;u>=t;u--){const t=e.children[u];d(o,e.leaf?s(t):t),a+=m(o)}return a}_adjustParentBBoxes(e,t,n){for(let i=n;i>=0;i--)d(t.data[i],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const i=e.data[t-1],r=i.children;r.splice(Object(s.e)(r,n,r.length,i.indexHint),1)}else this.clear();else u(n,this.toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function u(e,t){l(e,0,e.children.length,t,e)}function l(e,t,n,i,s){s||(s=new O([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],d(s,e.leaf?i(r):r);return s}function d(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function c(e,t){return e.minX-t.minX}function h(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function m(e){return e.maxX-e.minX+(e.maxY-e.minY)}function p(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function y(e,t){const n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function g(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function b(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function _(e,t,n,s,r){const a=[t,n];for(;a.length;){const t=Object(i.c)(a.pop()),n=Object(i.c)(a.pop());if(t-n<=s)continue;const u=n+Math.ceil((t-n)/s/2)*s;Object(o.a)(e,u,n,t,r),a.push(n,u,u,t)}}const x=new r.a,I=new r.a,j=new r.a,w=new r.a({deallocator:void 0});class B extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new s.a}}class O extends B{constructor(e){super(),this.children=e,this.leaf=!0}}class F extends B{constructor(e){super(),this.children=e,this.leaf=!1}}},543:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(6),s=n(533);const r={minX:0,minY:0,maxX:0,maxY:0};class o{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.a(9,Object(i.a)("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach((n,i)=>{e[t++]=i}),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(e=>this._idByBounds.has(e))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),function(e,t,n){r.minX=t[0],r.minY=t[1],r.maxX=t[2],r.maxY=t[3],e.search(r,n)}(this._index,e,e=>t(this._idByBounds.get(e)))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},561:function(e,t,n){"use strict";var i=n(3),s=n(5),r=n(12),o=n(77),a=n(106),u=n(286),l=n(485),d=n(543),c=n(147),h=n(99),f=n(477);const m={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new c.a(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=Object(f.a)(new h.a,e.geometry,t.hasZ,t.hasM)),e.centroid)};t.a=class{constructor(e){this.geometryInfo=e,this._boundsStore=new d.a,this._featuresById=new Map,this._markedIds=new Set,this.events=new o.a,this.featureAdapter=m}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(a.e)(a.a);return this._featuresById.forEach(t=>{const n=this._boundsStore.get(t.objectId);n&&(e[0]=Math.min(n[0],e[0]),e[1]=Math.min(n[1],e[1]),e[2]=Math.max(n[2],e[2]),e[3]=Math.max(n[3],e[3]))}),e}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,n){for(const i of e){const e=this._boundsStore.get(i.objectId);e&&t(Object(l.h)(n,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,e=>{t(this._featuresById.get(e))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void s.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new r.a("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let o;if(this._markedIds.add(t),n?(e.displayId=n.displayId,o=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(i.i)(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);o=Object(u.r)(o||Object(a.e)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,o),this._featuresById.set(t,e)}_remove(e){return Object(i.i)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},678:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return x}));var i=n(12),s=n(147),r=n(99);function o(e){const t=[];return e.forEach(e=>t.push(e)),t}const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function*u(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*l(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function d(e){for(;;){const{value:t,done:n}=e.next();if(n)return!1;if(t.length>2)return!0}}function c(e){let t=0;for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t+=i[0]*s[1]-s[0]*i[1]}return t<=0}function h(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function f(e,t,n){switch(t.type){case"LineString":return function(e,t,n){return y(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const i of t.coordinates)y(e,i,n);return e}(e,t,n);case"MultiPoint":return function(e,t,n){return y(e,t.coordinates,n),e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const i of t.coordinates){m(e,i[0],n);for(let t=1;t<i.length;t++)p(e,i[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const i=t.coordinates;m(e,i[0],n);for(let s=1;s<i.length;s++)p(e,i[s],n);return e}(e,t,n)}}function m(e,t,n){const i=h(t);!function(e){return!c(e)}(i)?y(e,i,n):g(e,i,n)}function p(e,t,n){const i=h(t);!function(e){return c(e)}(i)?y(e,i,n):g(e,i,n)}function y(e,t,n){for(const i of t)b(e,i,n);e.lengths.push(t.length)}function g(e,t,n){for(let i=t.length-1;i>=0;i--)b(e,t[i],n);e.lengths.push(t.length)}function b(e,t,n){const[i,s,r]=t;e.coords.push(i,s),n.hasZ&&e.coords.push(r||0)}function _(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function x(e){if(!e)throw new i.a("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.a("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:null,s=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!s.test(n))throw new i.a("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function I(e,t={}){const n=u(e),i=[],s=new Set,r=new Set;let c,h=!1,f=Number.NEGATIVE_INFINITY,m=null,p=!1,{geometryType:y=null}=t,g=!1;for(;;){const{value:e,done:t}=n.next();if(t){const e=m&&1===m.length&&m[0]||null;if(e)for(const t of i)t.name===e&&(t.type="esriFieldTypeOID");return{fields:i,geometryType:y,hasZ:h,maxObjectId:Math.max(0,f),objectIdFieldName:e,objectIdFieldType:c,unknownFields:o(r)}}const{geometry:u,properties:b,id:x}=e;if((!u||(y||(y=a[u.type]),a[u.type]===y))&&(h||(h=d(l(u))),p||(p=null!=x,p&&(c=typeof x,"number"===c&&(m=Object.keys(b).filter(e=>b[e]===x)))),p&&"number"===c&&null!=x&&(f=Math.max(f,x),m.length>1?m=m.filter(e=>b[e]===x):1===m.length&&(m=b[m[0]]===x?m:[])),!g&&b)){let e=!0;for(const t in b){if(s.has(t))continue;const n=b[t];if(null==n){e=!1,r.add(t);continue}const o=_(n);"unknown"!==o?(r.delete(t),s.add(t),i.push({name:t,alias:t,type:o})):r.add(t)}g=e}}}function j(e,t){return function(e){const t=[];for(;;){const{value:n,done:i}=e.next();if(i)return t;t.push(n)}}(function*(e,t={}){const{geometryType:n,objectIdFieldName:i}=t;for(;;){const{value:o,done:u}=e.next();if(u)return;const{geometry:l,properties:d,id:c}=o;if(l&&a[l.type]!==n)continue;const h=d||{};i&&null!=c&&!h[i]&&(h[i]=c);const m=new s.a(l?f(new r.a,l,t):null,h);yield m}}(u(e),t))}},679:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return m}));var i=n(27),s=n(44);class r{constructor(){this.code=null,this.description=null}}class o{constructor(e){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function a(e){return new o(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function l(e){return new u(e)}const d=new Set;function c(e,t,n,i,r=!1,o){d.clear();for(const u in i){const t=e.get(u);if(!t)continue;const l=i[u],c=h(t,l);if(c!==l&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:t,originalValue:l,sanitizedValue:c}}),d.add(t.name),t&&(r||t.editable)){const e=Object(s.u)(t,c);if(e)return a(Object(s.v)(e,t,c));n[t.name]=c}}for(const s of t)if(!d.has(s.name))return a(`missing required field "${s.name}"`);return null}function h(e,t){let n=t;return"string"==typeof t&&Object(s.q)(e)?n=parseFloat(t):null!=t&&Object(s.r)(e)&&"string"!=typeof t&&(n=String(t)),Object(s.s)(n)}let f;function m(e,t){if(!e||!Object(i.i)(t))return e;if("rings"in e||"paths"in e){if(!f)throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function p(e,t){!Object(i.i)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return f||(f=await Promise.all([n.e(6),n.e(15)]).then(n.bind(null,634)),f)}()}},759:function(e,t,n){"use strict";n.r(t);var i=n(12),s=n(27),r=n(21),o=n(44),a=n(50),u=n(339),l=n(286),d=n(315),c=n(678),h=n(532),f=n(466),m=n(561),p=n(601),y=n(679);const g={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};t.default=class{constructor(){this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[];await this._checkProjection(e.spatialReference);let n=null;e.url&&(n=(await Object(a.default)(e.url,{responseType:"json"})).data,await Object(c.c)(n));const r=Object(c.b)(n,{geometryType:e.geometryType}),y=e.fields||r.fields||[],b=null!=e.hasZ?e.hasZ:r.hasZ,_=r.geometryType,x=e.objectIdField||("number"===r.objectIdFieldType?r.objectIdFieldName:"OBJECTID")||"OBJECTID",I=e.spatialReference||s.a;let j=e.timeInfo;if(!_)throw new i.a("geojson-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if("string"===r.objectIdFieldType&&t.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),y===r.fields&&r.unknownFields.length>0&&t.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:r.unknownFields}}),x){let e=null;y.some(t=>t.name===x&&(e=t,!0))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):y.unshift({alias:x,name:x,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const s of y){if(null==s.name&&(s.name=s.alias),null==s.alias&&(s.alias=s.name),!s.name)throw new i.a("geojson-layer:invalid-field-name","field name is missing",{field:s});if(s.name===x&&(s.type="esriFieldTypeOID"),-1===u.a.jsonValues.indexOf(s.type))throw new i.a("geojson-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s})}const w={};this._requiredFields=[];for(const i of y)if("esriFieldTypeOID"!==i.type&&"esriFieldTypeGlobalID"!==i.type){i.editable=null==i.editable||!!i.editable,i.nullable=null==i.nullable||!!i.nullable;const e=Object(o.o)(i);i.nullable||void 0!==e?w[i.name]=e:this._requiredFields.push(i)}if(this._fieldsIndex=new d.a(y),j){if(j.startTimeField){const e=this._fieldsIndex.get(j.startTimeField);e?(j.startTimeField=e.name,e.type="esriFieldTypeDate"):j.startTimeField=null}if(j.endTimeField){const e=this._fieldsIndex.get(j.endTimeField);e?(j.endTimeField=e.name,e.type="esriFieldTypeDate"):j.endTimeField=null}if(j.trackIdField){const e=this._fieldsIndex.get(j.trackIdField);e?j.trackIdField=e.name:(j.trackIdField=null,t.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:j}}))}j.startTimeField||j.endTimeField||(t.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:j}}),j=null)}const B={warnings:t,featureErrors:[],layerDefinition:{...g,drawingInfo:Object(h.c)(_),templates:Object(h.b)(w),extent:null,geometryType:_,objectIdField:x,fields:y,hasZ:!!b,timeInfo:j}};this._queryEngine=new p.a({fields:y,geometryType:_,hasM:!1,hasZ:b,objectIdField:x,spatialReference:I,timeInfo:j,featureStore:new m.a({geometryType:_,hasM:!1,hasZ:b}),cacheSpatialQueries:!0}),this._createDefaultAttributes=Object(h.a)(w,x),this._nextObjectId=r.maxObjectId+1;const O=Object(c.a)(n,{geometryType:_,hasZ:b,objectIdFieldName:"number"===r.objectIdFieldType?x:null});if(!Object(s.c)(I,s.a))for(const i of O)i.geometry&&(i.geometry=Object(l.d)(Object(f.b)(Object(l.k)(i.geometry,_,b,!1),s.a,I)));return this._loadInitialFeatures(B,O),B}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([Object(y.c)(t,n),Object(f.a)(e.adds,t),Object(f.a)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_loadInitialFeatures(e,t){const{featureStore:n,objectIdField:i}=this._queryEngine,s=[];for(const r of t){const t=this._createDefaultAttributes(),n=Object(y.d)(this._fieldsIndex,this._requiredFields,t,r.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,r.attributes,!0),r.attributes=t,r.objectId=t[i],s.push(r))}if(n.addMany(s),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:n}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}_applyEdits(e){const{adds:t,updates:n,deletes:i}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),n&&n.length&&this._applyUpdateEdits(s,n),i&&i.length){for(const e of i)s.deleteResults.push(Object(y.b)(e));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:s,hasZ:o,objectIdField:a,spatialReference:u,featureStore:d}=this._queryEngine,c=[];for(const l of t){if(l.geometry&&i!==Object(r.c)(l.geometry)){n.push(Object(y.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=Object(y.d)(this._fieldsIndex,this._requiredFields,t,l.attributes);if(s)n.push(s);else{if(this._assignObjectId(t,l.attributes),l.attributes=t,null!=l.uid){const t=l.attributes[a];e.uidToObjectId[l.uid]=t}l.geometry&&(l.geometry=Object(f.b)(Object(y.e)(l.geometry,u),l.geometry.spatialReference,u)),c.push(l),n.push(Object(y.b)(l.attributes[a]))}}d.addMany(Object(l.c)([],c,i,o,s,a))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:i,hasZ:s,objectIdField:o,spatialReference:a,featureStore:u}=this._queryEngine;for(const d of t){const{attributes:t,geometry:c}=d,h=t&&t[o];if(null==h){e.push(Object(y.a)(`Identifier field ${o} missing`));continue}if(!u.has(h)){e.push(Object(y.a)(`Feature with object id ${h} missing`));continue}const m=Object(l.i)(u.getFeature(h),n,s,i);if(c){if(n!==Object(r.c)(c)){e.push(Object(y.a)("Incorrect geometry type."));continue}m.geometry=Object(f.b)(Object(y.e)(c,a),c.spatialReference,a)}if(t){const n=Object(y.d)(this._fieldsIndex,this._requiredFields,m.attributes,t);if(n){e.push(n);continue}}u.add(Object(l.a)(m,n,s,i,o)),e.push(Object(y.b)(h))}}_assignObjectId(e,t,n=!1){const i=this._queryEngine.objectIdField;n&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}async _checkProjection(e){try{await Object(f.a)(s.a,e)}catch{throw new i.a("geojson-layer","Projection not supported")}}}}}]);
//# sourceMappingURL=56.2d3a2c51.chunk.js.map