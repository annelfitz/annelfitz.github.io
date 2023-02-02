"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[729],{5732:(e,t,i)=>{i.d(t,{c:()=>s,g:()=>n});var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},69801:(e,t,i)=>{i.d(t,{WJ:()=>h,Xq:()=>a});var s,n,r=i(70586),o=i(44553);(n=s||(s={}))[n.ALL=0]="ALL",n[n.SOME=1]="SOME";class a{constructor(e,t,i){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",i&&(this._storage.registerRemoveFunc(this._namespace,i),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(e,t,i,s=0){this._storage.put(this._namespace+e,t,i,s)}get(e){const t=this._storage.get(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}updateSize(e,t,i){this._storage.updateSize(this._namespace+e,t,i)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class h{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new o.Z,this._users=new o.Z}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace((t=>t[0]!==e))}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}put(e,t,i,n){const r=this._db.get(e);if(r&&(this._size-=r.size,this._db.delete(e),r.entry!==t&&this._notifyRemove(e,r.entry,s.ALL)),i>this._maxSize)return void this._notifyRemove(e,t,s.ALL);if(void 0===t)return void console.warn("Refusing to cache undefined entry ");if(!i||i<0)return void console.warn("Refusing to cache entry with invalid size "+i);const o=1+Math.max(n,-3)- -3;this._db.set(e,{entry:t,size:i,lifetime:o,lives:o}),this._size+=i,this._checkSizeLimit()}updateSize(e,t,i){const n=this._db.get(e);if(n&&n.entry===t){for(this._size-=n.size;i>this._maxSize;){const n=this._notifyRemove(e,t,s.SOME);if(!((0,r.pC)(n)&&n>0))return void this._db.delete(e);i=n}n.size=i,this._size+=i,this._checkSizeLimit()}}pop(e){const t=this._db.get(e);if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}get(e){const t=this._db.get(e);if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},i=new Array;this._db.forEach(((e,s)=>{const n=e.lifetime;i[n]=(i[n]||0)+e.size,this._users.forAll((i=>{const n=i.namespace;if(s.startsWith(n)){const i=t[n]||0;t[n]=i+e.size}}))}));const s={};this._users.forAll((e=>{const i=e.namespace;if(!isNaN(e.hitRate)&&e.hitRate>0){const n=t[i]||0;t[i]=n,s[i]=Math.round(100*e.hitRate)+"%"}else s[i]="0%"}));const n=Object.keys(t);n.sort(((e,i)=>t[i]-t[e])),n.forEach((i=>e[i]=Math.round(t[i]/2**20)+"MB / "+s[i]));for(let t=i.length-1;t>=0;--t){const s=i[t];s&&(e["Priority "+(t+-3-1)]=Math.round(s/this.size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll((e=>e.resetHitRate()))}clear(e){this._db.forEach(((t,i)=>{i.startsWith(e)&&(this._size-=t.size,this._db.delete(i),this._notifyRemove(i,t.entry,s.ALL))}))}clearAll(){this._db.forEach(((e,t)=>this._notifyRemove(t,e.entry,s.ALL))),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,i){let s;return this._removeFuncs.some((n=>{if(e.startsWith(n[0])){const e=n[1](t,i);return"number"==typeof e&&(s=e),!0}return!1})),s}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[e,t]of this._db){if(this._db.delete(e),t.lives<=1){this._size-=t.size;const i=this._notifyRemove(e,t.entry,s.SOME);(0,r.pC)(i)&&i>0&&(this._size+=i,t.lives=t.lifetime,t.size=i,this._db.set(e,t))}else--t.lives,this._db.set(e,t);if(this._size<=.9*this.maxSize)return}}}},24133:(e,t,i)=>{i.d(t,{Q:()=>a});var s=i(67676),n=i(70586),r=i(44553),o=i(88764);class a{constructor(e=9,t){this._compareMinX=c,this._compareMinY=u,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),b.prune(),v.prune(),B.prune(),M.prune()}all(e){this._all(this._data,e)}search(e,t){let i=this._data;const s=this._toBBox;if(y(e,i))for(b.clear();i;){for(let n=0,r=i.children.length;n<r;n++){const r=i.children[n],o=i.leaf?s(r):r;y(e,o)&&(i.leaf?t(r):g(e,o)?this._all(r,t):b.push(r))}i=b.pop()}}collides(e){let t=this._data;const i=this._toBBox;if(!y(e,t))return!1;for(b.clear();t;){for(let s=0,n=t.children.length;s<n;s++){const n=t.children[s],r=t.leaf?i(n):n;if(y(e,r)){if(t.leaf||g(e,r))return!0;b.push(n)}}t=b.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new w([]),this}remove(e){if(!e)return this;let t,i=this._data,r=null,o=0,a=!1;const h=this._toBBox(e);for(B.clear(),M.clear();i||B.length>0;){if(i||(i=(0,n.j0)(B.pop()),r=B.data[B.length-1],o=M.pop()??0,a=!0),i.leaf&&(t=(0,s.cq)(i.children,e,i.children.length,i.indexHint),-1!==t))return i.children.splice(t,1),B.push(i),this._condense(B),this;a||i.leaf||!g(i,h)?r?(o++,i=r.children[o],a=!1):i=null:(B.push(i),M.push(o),o=0,r=i,i=i.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,t){let i=e;for(v.clear();i;){if(!0===i.leaf)for(const e of i.children)t(e);else v.pushArray(i.children);i=v.pop()??null}}_build(e,t,i,s){const n=i-t+1;let r=this._maxEntries;if(n<=r){const s=new w(e.slice(t,i+1));return h(s,this._toBBox),s}s||(s=Math.ceil(Math.log(n)/Math.log(r)),r=Math.ceil(n/r**(s-1)));const o=new F([]);o.height=s;const a=Math.ceil(n/r),l=a*Math.ceil(Math.sqrt(r));x(e,t,i,l,this._compareMinX);for(let n=t;n<=i;n+=l){const t=Math.min(n+l-1,i);x(e,n,t,a,this._compareMinY);for(let i=n;i<=t;i+=a){const n=Math.min(i+a-1,t);o.children.push(this._build(e,i,n,s-1))}}return h(o,this._toBBox),o}_chooseSubtree(e,t,i,s){for(;s.push(t),!0!==t.leaf&&s.length-1!==i;){let i,s=1/0,n=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=f(o),h=_(e,o)-a;h<n?(n=h,s=a<s?a:s,i=o):h===n&&a<s&&(s=a,i=o)}t=i||t.children[0]}return t}_insert(e,t,i){const s=this._toBBox,n=i?e:s(e);B.clear();const r=this._chooseSubtree(n,this._data,t,B);for(r.children.push(e),d(r,n);t>=0&&B.data[t].children.length>this._maxEntries;)this._split(B,t),t--;this._adjustParentBBoxes(n,B,t)}_split(e,t){const i=e.data[t],s=i.children.length,n=this._minEntries;this._chooseSplitAxis(i,n,s);const r=this._chooseSplitIndex(i,n,s);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=i.children.splice(r,i.children.length-r),a=i.leaf?new w(o):new F(o);a.height=i.height,h(i,this._toBBox),h(a,this._toBBox),t?e.data[t-1].children.push(a):this._splitRoot(i,a)}_splitRoot(e,t){this._data=new F([e,t]),this._data.height=e.height+1,h(this._data,this._toBBox)}_chooseSplitIndex(e,t,i){let s,n,r;s=n=1/0;for(let o=t;o<=i-t;o++){const t=l(e,0,o,this._toBBox),a=l(e,o,i,this._toBBox),h=p(t,a),d=f(t)+f(a);h<s?(s=h,r=o,n=d<n?d:n):h===s&&d<n&&(n=d,r=o)}return r}_chooseSplitAxis(e,t,i){const s=e.leaf?this._compareMinX:c,n=e.leaf?this._compareMinY:u;this._allDistMargin(e,t,i,s)<this._allDistMargin(e,t,i,n)&&e.children.sort(s)}_allDistMargin(e,t,i,s){e.children.sort(s);const n=this._toBBox,r=l(e,0,t,n),o=l(e,i-t,i,n);let a=m(r)+m(o);for(let s=t;s<i-t;s++){const t=e.children[s];d(r,e.leaf?n(t):t),a+=m(r)}for(let s=i-t-1;s>=t;s--){const t=e.children[s];d(o,e.leaf?n(t):t),a+=m(o)}return a}_adjustParentBBoxes(e,t,i){for(let s=i;s>=0;s--)d(t.data[s],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const i=e.data[t];if(0===i.children.length)if(t>0){const n=e.data[t-1],r=n.children;r.splice((0,s.cq)(r,i,r.length,n.indexHint),1)}else this.clear();else h(i,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function h(e,t){l(e,0,e.children.length,t,e)}function l(e,t,i,s,n){n||(n=new w([])),n.minX=1/0,n.minY=1/0,n.maxX=-1/0,n.maxY=-1/0;for(let r,o=t;o<i;o++)r=e.children[o],d(n,e.leaf?s(r):r);return n}function d(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function c(e,t){return e.minX-t.minX}function u(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function m(e){return e.maxX-e.minX+(e.maxY-e.minY)}function _(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function p(e,t){const i=Math.max(e.minX,t.minX),s=Math.max(e.minY,t.minY),n=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,n-i)*Math.max(0,r-s)}function g(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function y(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function x(e,t,i,s,r){const a=[t,i];for(;a.length;){const t=(0,n.j0)(a.pop()),i=(0,n.j0)(a.pop());if(t-i<=s)continue;const h=i+Math.ceil((t-i)/s/2)*s;(0,o.q)(e,h,i,t,r),a.push(i,h,h,t)}}const b=new r.Z,v=new r.Z,B=new r.Z,M=new r.Z({deallocator:void 0});class S{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class I extends S{constructor(){super(...arguments),this.height=1,this.indexHint=new s.SO}}class w extends I{constructor(e){super(),this.children=e,this.leaf=!0}}class F extends I{constructor(e){super(),this.children=e,this.leaf=!1}}},17445:(e,t,i)=>{i.d(t,{N1:()=>u,YP:()=>h,Z_:()=>_,gx:()=>l,nn:()=>p,on:()=>c,tX:()=>g});var s=i(91460),n=i(50758),r=i(70586),o=i(95330),a=i(26258);function h(e,t,i={}){return d(e,t,i,f)}function l(e,t,i={}){return d(e,t,i,m)}function d(e,t,i={},s){let n=null;const o=i.once?(e,i)=>{s(e)&&((0,r.hw)(n),t(e,i))}:(e,i)=>{s(e)&&t(e,i)};if(n=(0,a.aQ)(e,o,i.sync,i.equals),i.initial){const t=e();o(t,t)}return n}function c(e,t,i,o={}){let a=null,l=null,d=null;function c(){a&&l&&(l.remove(),o.onListenerRemove?.(a),a=null,l=null)}function u(e){o.once&&o.once&&(0,r.hw)(d),i(e)}const f=h(e,((e,i)=>{c(),(0,s.vT)(e)&&(a=e,l=(0,s.on)(e,t,u),o.onListenerAdd?.(e))}),{sync:o.sync,initial:!0});return d=(0,n.kB)((()=>{f.remove(),c()})),d}function u(e,t){return function(e,t,i){if((0,o.Hc)(i))return Promise.reject((0,o.zE)());const s=e();if(t?.(s))return Promise.resolve(s);let a=null;function h(){a=(0,r.hw)(a)}return new Promise(((s,r)=>{a=(0,n.AL)([(0,o.fu)(i,(()=>{h(),r((0,o.zE)())})),d(e,(e=>{h(),s(e)}),{sync:!1,once:!0},t??f)])}))}(e,m,t)}function f(e){return!0}function m(e){return!!e}i(87538);const _={sync:!0},p={initial:!0},g={sync:!0,initial:!0}},16306:(e,t,i)=>{i.d(t,{aX:()=>M});var s=i(68773),n=i(20102),r=i(92604),o=i(70586),a=i(38913),h=i(58901),l=i(73913),d=i(8744),c=i(40488),u=(i(66577),i(3172)),f=i(33955),m=i(11282),_=i(17452);async function p(e,t,i){const s="string"==typeof e?(0,_.mN)(e):e,n=t[0].spatialReference,r=(0,f.Ji)(t[0]),o={...i,query:{...s.query,f:"json",sr:n.wkid?n.wkid:JSON.stringify(n),geometries:JSON.stringify((h=t,{geometryType:(0,f.Ji)(h[0]),geometries:h.map((e=>e.toJSON()))}))}},{data:a}=await(0,u.default)(s.path+"/simplify",o);var h;return function(e,t,i){const s=(0,f.q9)(t);return e.map((e=>{const t=s.fromJSON(e);return t.spatialReference=i,t}))}(a.geometries,r,n)}const g=r.Z.getLogger("esri.geometry.support.normalizeUtils");function y(e){return"polygon"===e[0].type}function x(e){return"polyline"===e[0].type}function b(e,t,i){if(t){const t=function(e,t){if(!(e instanceof h.Z||e instanceof a.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw g.error(e),new n.Z(e)}const i=(0,l.x3)(e),s=[];for(const e of i){const i=[];s.push(i),i.push([e[0][0],e[0][1]]);for(let s=0;s<e.length-1;s++){const n=e[s][0],r=e[s][1],o=e[s+1][0],a=e[s+1][1],h=Math.sqrt((o-n)*(o-n)+(a-r)*(a-r)),l=(a-r)/h,d=(o-n)/h,c=h/t;if(c>1){for(let e=1;e<=c-1;e++){const s=e*t,o=d*s+n,a=l*s+r;i.push([o,a])}const e=(h+Math.floor(c-1)*t)/2,s=d*e+n,o=l*e+r;i.push([s,o])}i.push([o,a])}}return function(e){return"polygon"===e.type}(e)?new a.Z({rings:s,spatialReference:e.spatialReference}):new h.Z({paths:s,spatialReference:e.spatialReference})}(e,1e6);e=(0,c.Sx)(t,!0)}return i&&(e=(0,l.Sy)(e,i)),e}function v(e,t,i){if(Array.isArray(e)){const s=e[0];if(s>t){const i=(0,l.XZ)(s,t);e[0]=s+i*(-2*t)}else if(s<i){const t=(0,l.XZ)(s,i);e[0]=s+t*(-2*i)}}else{const s=e.x;if(s>t){const i=(0,l.XZ)(s,t);e=e.clone().offset(i*(-2*t),0)}else if(s<i){const t=(0,l.XZ)(s,i);e=e.clone().offset(t*(-2*i),0)}}return e}function B(e,t){let i=-1;for(let s=0;s<t.cutIndexes.length;s++){const n=t.cutIndexes[s],r=t.geometries[s],o=(0,l.x3)(r);for(let e=0;e<o.length;e++){const t=o[e];t.some((i=>{if(i[0]<180)return!0;{let i=0;for(let e=0;e<t.length;e++){const s=t[e][0];i=s>i?s:i}i=Number(i.toFixed(9));const s=-360*(0,l.XZ)(i,180);for(let i=0;i<t.length;i++){const t=r.getPoint(e,i);r.setPoint(e,i,t.clone().offset(s,0))}return!0}}))}if(n===i){if(y(e))for(const t of(0,l.x3)(r))e[n]=e[n].addRing(t);else if(x(e))for(const t of(0,l.x3)(r))e[n]=e[n].addPath(t)}else i=n,e[n]=r}return e}async function M(e,t,i){if(!Array.isArray(e))return M([e],t);t&&"string"!=typeof t&&g.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n="string"==typeof t?t:t?.url??s.Z.geometryServiceUrl;let r,_,y,x,S,I,w,F,z=0;const X=[],Z=[];for(const t of e)if((0,o.Wi)(t))Z.push(t);else if(r||(r=t.spatialReference,_=(0,d.C5)(r),y=r.isWebMercator,I=y?102100:4326,x=l.UZ[I].maxX,S=l.UZ[I].minX,w=l.UZ[I].plus180Line,F=l.UZ[I].minus180Line),_)if("mesh"===t.type)Z.push(t);else if("point"===t.type)Z.push(v(t.clone(),x,S));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>v(e,x,S))),Z.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,_);Z.push(e.rings?new a.Z(e):e)}else if(t.extent){const e=t.extent,i=(0,l.XZ)(e.xmin,S)*(2*x);let s=0===i?t.clone():(0,l.Sy)(t.clone(),i);e.offset(i,0),e.intersects(w)&&e.xmax!==x?(z=e.xmax>z?e.xmax:z,s=b(s,y),X.push(s),Z.push("cut")):e.intersects(F)&&e.xmin!==S?(z=e.xmax*(2*x)>z?e.xmax*(2*x):z,s=b(s,y,360),X.push(s),Z.push("cut")):Z.push(s)}else Z.push(t.clone());else Z.push(t);let Y=(0,l.XZ)(z,x),R=-90;const L=Y,T=new h.Z;for(;Y>0;){const e=360*Y-180;T.addPath([[e,R],[e,-1*R]]),R*=-1,Y--}if(X.length>0&&L>0){const t=B(X,await async function(e,t,i,s){const n=(0,m.en)(e),r=t[0].spatialReference,o={...s,query:{...n.query,f:"json",sr:JSON.stringify(r),target:JSON.stringify({geometryType:(0,f.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(i)}},a=await(0,u.default)(n.path+"/cut",o),{cutIndexes:h,geometries:l=[]}=a.data;return{cutIndexes:h,geometries:l.map((e=>{const t=(0,f.im)(e);return t.spatialReference=r,t}))}}(n,X,T,i)),s=[],r=[];for(let i=0;i<Z.length;i++){const n=Z[i];if("cut"!==n)r.push(n);else{const n=t.shift(),a=e[i];(0,o.pC)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&n.rings.length>=a.rings.length?(s.push(n),r.push("simplify")):r.push(y?(0,c.$)(n):n)}}if(!s.length)return r;const a=await p(n,s,i),h=[];for(let e=0;e<r.length;e++){const t=r[e];"simplify"!==t?h.push(t):h.push(y?(0,c.$)(a.shift()):a.shift())}return h}const A=[];for(let e=0;e<Z.length;e++){const t=Z[e];if("cut"!==t)A.push(t);else{const e=X.shift();A.push(!0===y?(0,c.$)(e):e)}}return A}},73913:(e,t,i)=>{i.d(t,{Sy:()=>h,UZ:()=>o,XZ:()=>a,x3:()=>l});var s=i(58901),n=i(82971),r=i(33955);const o={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new s.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator}),minus180Line:new s.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new s.Z({paths:[[[180,-180],[180,180]]],spatialReference:n.Z.WGS84}),minus180Line:new s.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:n.Z.WGS84})}};function a(e,t){return Math.ceil((e-t)/(2*t))}function h(e,t){const i=l(e);for(const e of i)for(const i of e)i[0]+=t;return e}function l(e){return(0,r.oU)(e)?e.rings:e.paths}},37549:(e,t,i)=>{i.d(t,{H:()=>a});var s=i(80442),n=i(24133),r=i(24470);const o={minX:0,minY:0,maxX:0,maxY:0};class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new n.Q(9,(0,s.Z)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((i,s)=>{e[t++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.cS)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),function(e,t,i){(function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]})(t),e.search(o,i)}(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},57191:(e,t,i)=>{i.d(t,{Z:()=>g});var s=i(20102),n=i(32448),r=i(92604),o=i(70586),a=i(60437),h=i(24470),l=i(98732),d=i(37549),c=i(29730),u=i(70272),f=i(5428);const m={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new u.u_(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>((0,o.Wi)(e.centroid)&&(e.centroid=(0,c.Y)(new f.Z,e.geometry,t.hasZ,t.hasM)),e.centroid)};var _=i(11490);const p=(0,a.Ue)();class g{constructor(e){this.geometryInfo=e,this._boundsStore=new d.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new n.Z,this.featureAdapter=m}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{(0,o.pC)(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if((0,o.Wi)(this.fullBounds))return null;const[t,i,s,n]=this.fullBounds;return{xmin:t,ymin:i,xmax:s,ymax:n,spatialReference:(0,_.S2)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const i of e){const e=this._boundsStore.get(i.objectId);e&&t((0,a.JR)(p,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,i)=>{this._markedIds.has(i)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.Z("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(t);let n;if(this._markedIds.add(t),i?(e.displayId=i.displayId,n=this._boundsStore.get(t),this._boundsStore.delete(t)):(0,o.pC)(this.onFeatureAdd)&&this.onFeatureAdd(e),(0,o.Wi)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);n=(0,l.$)((0,o.pC)(n)?n:(0,h.Ue)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,o.pC)(n)&&this._boundsStore.set(t,n),this._featuresById.set(t,e)}_remove(e){(0,o.pC)(this.onFeatureRemove)&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}},23095:(e,t,i)=>{i.d(t,{O0:()=>u,av:()=>h,b:()=>p,d1:()=>d,og:()=>_});var s=i(70586),n=i(8744),r=i(35671);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function h(e){return new a(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function d(e){return new l(e)}const c=new Set;function u(e,t,i,s=!1,n){c.clear();for(const o in i){const a=e.get(o);if(!a)continue;const l=i[o],d=f(a,l);if(d!==l&&n&&n.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:l,sanitizedValue:d}}),c.add(a.name),a&&(s||a.editable)){const e=(0,r.Qc)(a,d);if(e)return h((0,r.vP)(e,a,d));t[a.name]=d}}for(const t of e?.requiredFields??[])if(!c.has(t.name))return h(`missing required field "${t.name}"`);return null}function f(e,t){let i=t;return"string"==typeof t&&(0,r.H7)(e)?i=parseFloat(t):null!=t&&(0,r.qN)(e)&&"string"!=typeof t&&(i=String(t)),(0,r.Pz)(i)}let m;function _(e,t){if(!e||!(0,n.JY)(t))return e;if("rings"in e||"paths"in e){if((0,s.Wi)(m))throw new TypeError("geometry engine not loaded");return m.simplify(t,e)}return e}async function p(e,t){!(0,n.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return(0,s.Wi)(m)&&(m=await Promise.all([i.e(5837),i.e(247)]).then(i.bind(i,30247))),m}()}},99514:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(35671);function n(e){return"oid"===e.type||"esriFieldTypeOID"===e.type}function r(e){return"global-id"===e.type||"esriFieldTypeGlobalID"===e.type}class o{constructor(e=[]){if(this.fields=[],this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,!e)return;this.fields=e;const t=[];for(const o of e){const e=o?.name,l=h(o?.name);if(e&&l){const h=a(e);this._fieldsMap.set(e,o),this._fieldsMap.set(h,o),this._normalizedFieldsMap.set(l,o),t.push(h),"date"===(i=o).type||"esriFieldTypeDate"===i.type?(this.dateFields.push(o),this._dateFieldsSet.add(o)):(0,s.H7)(o)&&(this._numericFieldsSet.add(o),this.numericFields.push(o)),n(o)||r(o)||(o.editable=null==o.editable||!!o.editable,o.nullable=null==o.nullable||!!o.nullable)}}var i;t.sort(),this.uid=t.join(",")}destroy(){this._fieldsMap.clear()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)n(e)||r(e)||e.nullable||void 0!==(0,s.os)(e)||this._requiredFields.push(e)}return this._requiredFields}has(e){return null!=this.get(e)}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(a(e))??this._normalizedFieldsMap.get(h(e)),t&&this._fieldsMap.set(e,t),t)}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){const t=this.get(e);if(t)return t.name??void 0}}function a(e){return e.trim().toLowerCase()}function h(e){return(0,s.q6)(e)?.toLowerCase()??""}},86719:(e,t,i)=>{i.d(t,{v:()=>s});const s=new(i(35454).X)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},11282:(e,t,i)=>{i.d(t,{cv:()=>a,en:()=>o,lA:()=>r}),i(68773),i(40330);var s=i(22974),n=i(17452);function r(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function o(e){return"string"==typeof e?(0,n.mN)(e):(0,s.d9)(e)}function a(e,t,i){const s={};for(const n in e){if("declaredClass"===n)continue;const r=e[n];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){s[n]=[];for(let e=0;e<r.length;e++)s[n][e]=a(r[e])}else if("object"==typeof r)if(r.toJSON){const e=r.toJSON(i&&i[n]);s[n]=t?e:JSON.stringify(e)}else s[n]=t?r:JSON.stringify(r);else s[n]=r}return s}i(71058)}}]);