"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2584],{92835:(e,t,s)=>{s.d(t,{Z:()=>g});var i,n=s(43697),r=s(96674),o=s(70586),h=s(35463),l=s(5600),a=(s(75215),s(67676),s(71715)),c=s(52011),u=s(30556);let f=i=class extends r.wq{static get allTime(){return _}static get empty(){return m}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=(0,o.pC)(this.start)?this.start.getTime():this.start,s=(0,o.pC)(this.end)?this.end.getTime():this.end,i=(0,o.pC)(e.start)?e.start.getTime():e.start,n=(0,o.pC)(e.end)?e.end.getTime():e.end;return t===i&&s===n}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=(0,o.yw)(this.start,(t=>(0,h.JE)(t,e))),s=(0,o.yw)(this.end,(t=>{const s=(0,h.JE)(t,e);return t.getTime()===s.getTime()?s:(0,h.Nm)(s,1,e)}));return new i({start:t,end:s})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=(0,o.R2)(this.start,-1/0,(e=>e.getTime())),s=(0,o.R2)(this.end,1/0,(e=>e.getTime())),n=(0,o.R2)(e.start,-1/0,(e=>e.getTime())),r=(0,o.R2)(e.end,1/0,(e=>e.getTime()));let h,l;if(n>=t&&n<=s?h=n:t>=n&&t<=r&&(h=t),s>=n&&s<=r?l=s:r>=t&&r<=s&&(l=r),null!=h&&null!=l&&!isNaN(h)&&!isNaN(l)){const e=new i;return e.start=h===-1/0?null:new Date(h),e.end=l===1/0?null:new Date(l),e}return i.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const s=new i,{start:n,end:r}=this;return(0,o.pC)(n)&&(s.start=(0,h.Nm)(n,e,t)),(0,o.pC)(r)&&(s.end=(0,h.Nm)(r,e,t)),s}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return _.clone();const t=(0,o.pC)(this.start)&&(0,o.pC)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,s=(0,o.pC)(this.end)&&(0,o.pC)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:s})}};(0,n._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],f.prototype,"end",void 0),(0,n._)([(0,a.r)("end")],f.prototype,"readEnd",null),(0,n._)([(0,u.c)("end")],f.prototype,"writeEnd",null),(0,n._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],f.prototype,"isAllTime",null),(0,n._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],f.prototype,"isEmpty",null),(0,n._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],f.prototype,"start",void 0),(0,n._)([(0,a.r)("start")],f.prototype,"readStart",null),(0,n._)([(0,u.c)("start")],f.prototype,"writeStart",null),f=i=(0,n._)([(0,c.j)("esri.TimeExtent")],f);const _=new f,m=new f({start:void 0,end:void 0}),g=f},5732:(e,t,s)=>{s.d(t,{c:()=>i,g:()=>n});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},2368:(e,t,s)=>{s.d(t,{J:()=>c,j:()=>u});var i=s(43697),n=s(15923),r=(s(80442),s(22974)),o=(s(92604),s(70586)),h=s(31263),l=s(1153),a=s(52011);const c=e=>{let t=class extends e{clone(){const e=(0,o.s3)((0,l.vw)(this),"unable to clone instance of non-accessor class"),t=e.metadatas,s=e.store,i={},n=new Map;for(const e in t){const o=t[e],l=s?.originOf(e),a=o.clonable;if(o.readOnly||!1===a||l!==h.s3.USER&&l!==h.s3.DEFAULTS&&l!==h.s3.WEB_MAP&&l!==h.s3.WEB_SCENE)continue;const c=this[e];let u=null;u="function"==typeof a?a(c):"reference"===a?c:(0,r.Vo)(c),null!=c&&null==u||(l===h.s3.DEFAULTS?n.set(e,u):i[e]=u)}const a=new(0,Object.getPrototypeOf(this).constructor)(i);if(n.size){const e=(0,l.vw)(a)?.store;if(e)for(const[t,s]of n)e.set(t,s,h.s3.DEFAULTS)}return a}};return t=(0,i._)([(0,a.j)("esri.core.Clonable")],t),t};let u=class extends(c(n.Z)){};u=(0,i._)([(0,a.j)("esri.core.Clonable")],u)},46791:(e,t,s)=>{s.d(t,{Z:()=>R});var i,n=s(43697),r=s(3894),o=s(32448),h=s(22974),l=s(70586),a=s(71143);!function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"}(i||(i={}));var c,u=s(1654),f=s(5600),_=s(75215),m=s(52421),g=s(52011),d=s(58971),p=s(10661);const b=new a.Z(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,(e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1})),v=()=>{};function y(e){return e?e instanceof O?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function E(e){if(e&&e.length)return e[0]}function w(e,t,s,i){const n=Math.min(e.length-s,t.length-i);let r=0;for(;r<n&&e[s+r]===t[i+r];)r++;return r}function A(e,t,s,i){t&&t.forEach(((t,n,r)=>{e.push(t),A(e,s.call(i,t,n,r),s,i)}))}const C=new Set,D=new Set,M=new Set,z=new Map;let S=0,O=c=class extends o.Z.EventedAccessor{static isCollection(e){return null!=e&&e instanceof c}constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new p.s,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:S++})}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof c?{items:e}:e:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return(0,d.it)(this._observable),this._items}set items(e){this._emitBeforeChanges(i.ADD)||(this._splice(0,this.length,y(e)),this._emitAfterChanges(i.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,s={removed:!1,callback:t};return e.push(s),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=v,s.removed=!0,e.splice(e.indexOf(s),1)}}}return this._emitter.on(e,t)}once(e,t){const s=this.on(e,t);return{remove(){s.remove()}}}add(e,t){if((0,d.it)(this._observable),this._emitBeforeChanges(i.ADD))return this;const s=this.getNextIndex(t??null);return this._splice(s,0,[e]),this._emitAfterChanges(i.ADD),this}addMany(e,t=this._items.length){if((0,d.it)(this._observable),!e||!e.length)return this;if(this._emitBeforeChanges(i.ADD))return this;const s=this.getNextIndex(t);return this._splice(s,0,y(e)),this._emitAfterChanges(i.ADD),this}at(e){if((0,d.it)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if((0,d.it)(this._observable),!this.length||this._emitBeforeChanges(i.REMOVE))return[];const e=this._splice(0,this.length)||[];return this._emitAfterChanges(i.REMOVE),e}clone(){return(0,d.it)(this._observable),this._createNewInstance({items:this._items.map(h.d9)})}concat(...e){(0,d.it)(this._observable);const t=e.map(y);return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if((0,d.it)(this._observable),!this.length||this._emitBeforeChanges(i.REMOVE))return;const s=(0,l.j0)(this._splice(0,this.length)),n=s.length;for(let i=0;i<n;i++)e.call(t,s[i],i,s);this._emitAfterChanges(i.REMOVE)}every(e,t){return(0,d.it)(this._observable),this._items.every(e,t)}filter(e,t){let s;return(0,d.it)(this._observable),s=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:s})}find(e,t){return(0,d.it)(this._observable),this._items.find(e,t)}findIndex(e,t){return(0,d.it)(this._observable),this._items.findIndex(e,t)}flatten(e,t){(0,d.it)(this._observable);const s=[];return A(s,this,e,t),new c(s)}forEach(e,t){return(0,d.it)(this._observable),this._items.forEach(e,t)}getItemAt(e){return(0,d.it)(this._observable),this._items[e]}getNextIndex(e){(0,d.it)(this._observable);const t=this.length;return(e=e??t)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return(0,d.it)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return(0,d.it)(this._observable),this._items.indexOf(e,t)}join(e=","){return(0,d.it)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return(0,d.it)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){(0,d.it)(this._observable);const s=this._items.map(e,t);return new c({items:s})}reorder(e,t=this.length-1){(0,d.it)(this._observable);const s=this.indexOf(e);if(-1!==s){if(t<0?t=0:t>=this.length&&(t=this.length-1),s!==t){if(this._emitBeforeChanges(i.MOVE))return e;this._splice(s,1),this._splice(t,0,[e]),this._emitAfterChanges(i.MOVE)}return e}}pop(){if((0,d.it)(this._observable),!this.length||this._emitBeforeChanges(i.REMOVE))return;const e=E(this._splice(this.length-1,1));return this._emitAfterChanges(i.REMOVE),e}push(...e){return(0,d.it)(this._observable),this._emitBeforeChanges(i.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(i.ADD)),this.length}reduce(e,t){(0,d.it)(this._observable);const s=this._items;return 2===arguments.length?s.reduce(e,t):s.reduce(e)}reduceRight(e,t){(0,d.it)(this._observable);const s=this._items;return 2===arguments.length?s.reduceRight(e,t):s.reduceRight(e)}remove(e){return(0,d.it)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if((0,d.it)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(i.REMOVE))return;const t=E(this._splice(e,1));return this._emitAfterChanges(i.REMOVE),t}removeMany(e){if((0,d.it)(this._observable),!e||!e.length||this._emitBeforeChanges(i.REMOVE))return[];const t=e instanceof c?e.toArray():e,s=this._items,n=[],r=t.length;for(let e=0;e<r;e++){const i=t[e],r=s.indexOf(i);if(r>-1){const i=1+w(t,s,e+1,r+1),o=this._splice(r,i);o&&o.length>0&&n.push.apply(n,o),e+=i-1}}return this._emitAfterChanges(i.REMOVE),n}reverse(){if((0,d.it)(this._observable),this._emitBeforeChanges(i.MOVE))return this;const e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(i.MOVE),this}shift(){if((0,d.it)(this._observable),!this.length||this._emitBeforeChanges(i.REMOVE))return;const e=E(this._splice(0,1));return this._emitAfterChanges(i.REMOVE),e}slice(e=0,t=this.length){return(0,d.it)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return(0,d.it)(this._observable),this._items.some(e,t)}sort(e){if((0,d.it)(this._observable),!this.length||this._emitBeforeChanges(i.MOVE))return this;const t=(0,l.j0)(this._splice(0,this.length));return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(i.MOVE),this}splice(e,t,...s){(0,d.it)(this._observable);const n=(t?i.REMOVE:0)|(s.length?i.ADD:0);if(this._emitBeforeChanges(n))return[];const r=this._splice(e,t,s)||[];return this._emitAfterChanges(n),r}toArray(){return(0,d.it)(this._observable),this._items.slice()}toJSON(){return(0,d.it)(this._observable),this.toArray()}toLocaleString(){return(0,d.it)(this._observable),this._items.toLocaleString()}toString(){return(0,d.it)(this._observable),this._items.toString()}unshift(...e){return(0,d.it)(this._observable),!e.length||this._emitBeforeChanges(i.ADD)||(this._splice(0,0,e),this._emitAfterChanges(i.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,s){const i=this._items,n=this.itemType;let r,o;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=(0,u.Os)((()=>this._dispatchChange()))),t){if(o=i.splice(e,t),this.hasEventListener("before-remove")){const t=b.acquire();t.target=this,t.cancellable=!0;for(let s=0,n=o.length;s<n;s++)r=o[s],t.reset(r),this.emit("before-remove",t),t.defaultPrevented&&(o.splice(s,1),i.splice(e,0,r),e+=1,s-=1,n-=1);b.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=b.acquire();e.target=this,e.cancellable=!1;const t=o.length;for(let s=0;s<t;s++)e.reset(o[s]),this.emit("after-remove",e);b.release(e)}}if(s&&s.length){if(n){const e=[];for(const t of s){const s=n.ensureType(t);null==s&&null!=t||e.push(s)}s=e}const t=this.hasEventListener("before-add"),r=this.hasEventListener("after-add"),o=e===this.length;if(t||r){const n=b.acquire();n.target=this,n.cancellable=!0;const h=b.acquire();h.target=this,h.cancellable=!1;for(const l of s)t?(n.reset(l),this.emit("before-add",n),n.defaultPrevented||(o?i.push(l):i.splice(e++,0,l),this._set("length",i.length),r&&(h.reset(l),this.emit("after-add",h)))):(o?i.push(l):i.splice(e++,0,l),this._set("length",i.length),h.reset(l),this.emit("after-add",h));b.release(h),b.release(n)}else{if(o)for(const e of s)i.push(e);else i.splice(e,0,...s);this._set("length",i.length)}}return(s&&s.length||o&&o.length)&&this._notifyChangeEvent(s,o),o}_emitBeforeChanges(e){let t=!1;if(this.hasEventListener("before-changes")){const s=b.acquire();s.target=this,s.cancellable=!0,s.type=e,this.emit("before-changes",s),t=s.defaultPrevented,b.release(s)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=b.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),b.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return;const e=this._notifications;this._notifications=null;for(const t of e){const e=t.changes;C.clear(),D.clear(),M.clear();for(const{added:t,removed:s}of e){if(t)if(0===M.size&&0===D.size)for(const e of t)C.add(e);else for(const e of t)D.has(e)?(M.add(e),D.delete(e)):M.has(e)||C.add(e);if(s)if(0===M.size&&0===C.size)for(const e of s)D.add(e);else for(const e of s)C.has(e)?C.delete(e):(M.delete(e),D.add(e))}const s=r.Z.acquire();C.forEach((e=>{s.push(e)}));const i=r.Z.acquire();D.forEach((e=>{i.push(e)}));const n=this._items,o=t.items,h=r.Z.acquire();if(M.forEach((e=>{o.indexOf(e)!==n.indexOf(e)&&h.push(e)})),t.listeners&&(s.length||i.length||h.length)){const e={target:this,added:s,removed:i,moved:h},n=t.listeners.length;for(let s=0;s<n;s++){const i=t.listeners[s];i.removed||i.callback.call(this,e)}}r.Z.release(s),r.Z.release(i),r.Z.release(h)}C.clear(),D.clear(),M.clear()}};O.ofType=e=>{if(!e)return c;if(z.has(e))return z.get(e);let t=null;if("function"==typeof e)t=e.prototype.declaredClass;else if(e.base)t=e.base.prototype.declaredClass;else for(const s in e.typeMap){const i=e.typeMap[s].prototype.declaredClass;t?t+=` | ${i}`:t=i}let s=class extends c{};return(0,n._)([(0,m.c)({Type:e,ensureType:"function"==typeof e?(0,_.se)(e):(0,_.N7)(e)})],s.prototype,"itemType",void 0),s=(0,n._)([(0,g.j)(`esri.core.Collection<${t}>`)],s),z.set(e,s),s},(0,n._)([(0,f.Cb)()],O.prototype,"length",void 0),(0,n._)([(0,f.Cb)()],O.prototype,"items",null),O=c=(0,n._)([(0,g.j)("esri.core.Collection")],O);const R=O},69801:(e,t,s)=>{s.d(t,{WJ:()=>l,Xq:()=>h});var i,n,r=s(70586),o=s(44553);(n=i||(i={}))[n.ALL=0]="ALL",n[n.SOME=1]="SOME";class h{constructor(e,t,s){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",s&&(this._storage.registerRemoveFunc(this._namespace,s),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(e,t,s,i=0){this._storage.put(this._namespace+e,t,s,i)}get(e){const t=this._storage.get(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}updateSize(e,t,s){this._storage.updateSize(this._namespace+e,t,s)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class l{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new o.Z,this._users=new o.Z}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace((t=>t[0]!==e))}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}put(e,t,s,n){const r=this._db.get(e);if(r&&(this._size-=r.size,this._db.delete(e),r.entry!==t&&this._notifyRemove(e,r.entry,i.ALL)),s>this._maxSize)return void this._notifyRemove(e,t,i.ALL);if(void 0===t)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return void console.warn("Refusing to cache entry with invalid size "+s);const o=1+Math.max(n,-3)- -3;this._db.set(e,{entry:t,size:s,lifetime:o,lives:o}),this._size+=s,this._checkSizeLimit()}updateSize(e,t,s){const n=this._db.get(e);if(n&&n.entry===t){for(this._size-=n.size;s>this._maxSize;){const n=this._notifyRemove(e,t,i.SOME);if(!((0,r.pC)(n)&&n>0))return void this._db.delete(e);s=n}n.size=s,this._size+=s,this._checkSizeLimit()}}pop(e){const t=this._db.get(e);if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}get(e){const t=this._db.get(e);if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},s=new Array;this._db.forEach(((e,i)=>{const n=e.lifetime;s[n]=(s[n]||0)+e.size,this._users.forAll((s=>{const n=s.namespace;if(i.startsWith(n)){const s=t[n]||0;t[n]=s+e.size}}))}));const i={};this._users.forAll((e=>{const s=e.namespace;if(!isNaN(e.hitRate)&&e.hitRate>0){const n=t[s]||0;t[s]=n,i[s]=Math.round(100*e.hitRate)+"%"}else i[s]="0%"}));const n=Object.keys(t);n.sort(((e,s)=>t[s]-t[e])),n.forEach((s=>e[s]=Math.round(t[s]/2**20)+"MB / "+i[s]));for(let t=s.length-1;t>=0;--t){const i=s[t];i&&(e["Priority "+(t+-3-1)]=Math.round(i/this.size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll((e=>e.resetHitRate()))}clear(e){this._db.forEach(((t,s)=>{s.startsWith(e)&&(this._size-=t.size,this._db.delete(s),this._notifyRemove(s,t.entry,i.ALL))}))}clearAll(){this._db.forEach(((e,t)=>this._notifyRemove(t,e.entry,i.ALL))),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,s){let i;return this._removeFuncs.some((n=>{if(e.startsWith(n[0])){const e=n[1](t,s);return"number"==typeof e&&(i=e),!0}return!1})),i}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[e,t]of this._db){if(this._db.delete(e),t.lives<=1){this._size-=t.size;const s=this._notifyRemove(e,t.entry,i.SOME);(0,r.pC)(s)&&s>0&&(this._size+=s,t.lives=t.lifetime,t.size=s,this._db.set(e,t))}else--t.lives,this._db.set(e,t);if(this._size<=.9*this.maxSize)return}}}},52421:(e,t,s)=>{function i(e){return(t,s)=>{t[s]=e}}s.d(t,{c:()=>i})},22862:(e,t,s)=>{s.d(t,{Hg:()=>g,V7:()=>m,uD:()=>_});var i=s(15923),n=s(46791),r=s(70586),o=s(1153);const h=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function l(e){return e instanceof i.Z}function a(e){return e instanceof n.Z?Object.keys(e.items):l(e)?(0,o.vw)(e).keys():e?Object.keys(e):[]}function c(e,t){return e instanceof n.Z?e.items[t]:e[t]}function u(e){return e?e.declaredClass:null}function f(e,t){const s=e.diff;if(s&&"function"==typeof s)return s(e,t);const i=a(e),n=a(t);if(0===i.length&&0===n.length)return;if(!i.length||!n.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};const o=n.filter((e=>!i.includes(e))),_=i.filter((e=>!n.includes(e))),m=i.filter((s=>n.includes(s)&&c(e,s)!==c(t,s))).concat(o,_).sort(),g=u(e);if(g&&h.includes(g)&&m.length)return{type:"complete",oldValue:e,newValue:t};let d;const p=l(e)&&l(t);for(const i of m){const n=c(e,i),o=c(t,i);let h;if((p||"function"!=typeof n&&"function"!=typeof o)&&n!==o&&(null!=n||null!=o)){if(s&&s[i]&&"function"==typeof s[i])h=s[i](n,o);else if(n instanceof Date&&o instanceof Date){if(n.getTime()===o.getTime())continue;h={type:"complete",oldValue:n,newValue:o}}else h="object"==typeof n&&"object"==typeof o&&u(n)===u(o)?f(n,o):{type:"complete",oldValue:n,newValue:o};(0,r.pC)(h)&&((0,r.pC)(d)?d.diff[i]=h:d={type:"partial",diff:{[i]:h}})}}return d}function _(e,t){if((0,r.Wi)(e))return!1;const s=t.split(".");let i=e;for(const e of s){if("complete"===i.type)return!0;if("partial"!==i.type)return!1;{const t=i.diff[e];if(!t)return!1;i=t}}return!0}function m(e,t){for(const s of t)if(_(e,s))return!0;return!1}function g(e,t){if(!("function"==typeof e||"function"==typeof t||(0,r.Wi)(e)&&(0,r.Wi)(t)))return(0,r.Wi)(e)||(0,r.Wi)(t)||"object"==typeof e&&"object"==typeof t&&u(e)!==u(t)?{type:"complete",oldValue:e,newValue:t}:f(e,t)}},17445:(e,t,s)=>{s.d(t,{N1:()=>f,YP:()=>l,Z_:()=>g,gx:()=>a,nn:()=>d,on:()=>u,tX:()=>p});var i=s(91460),n=s(50758),r=s(70586),o=s(95330),h=s(26258);function l(e,t,s={}){return c(e,t,s,_)}function a(e,t,s={}){return c(e,t,s,m)}function c(e,t,s={},i){let n=null;const o=s.once?(e,s)=>{i(e)&&((0,r.hw)(n),t(e,s))}:(e,s)=>{i(e)&&t(e,s)};if(n=(0,h.aQ)(e,o,s.sync,s.equals),s.initial){const t=e();o(t,t)}return n}function u(e,t,s,o={}){let h=null,a=null,c=null;function u(){h&&a&&(a.remove(),o.onListenerRemove?.(h),h=null,a=null)}function f(e){o.once&&o.once&&(0,r.hw)(c),s(e)}const _=l(e,((e,s)=>{u(),(0,i.vT)(e)&&(h=e,a=(0,i.on)(e,t,f),o.onListenerAdd?.(e))}),{sync:o.sync,initial:!0});return c=(0,n.kB)((()=>{_.remove(),u()})),c}function f(e,t){return function(e,t,s){if((0,o.Hc)(s))return Promise.reject((0,o.zE)());const i=e();if(t?.(i))return Promise.resolve(i);let h=null;function l(){h=(0,r.hw)(h)}return new Promise(((i,r)=>{h=(0,n.AL)([(0,o.fu)(s,(()=>{l(),r((0,o.zE)())})),c(e,(e=>{l(),i(e)}),{sync:!1,once:!0},t??_)])}))}(e,m,t)}function _(e){return!0}function m(e){return!!e}s(87538);const g={sync:!0},d={initial:!0},p={sync:!0,initial:!0}},35463:(e,t,s)=>{s.d(t,{JE:()=>o,Nm:()=>r,rJ:()=>h}),s(80442);const i={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},n={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function r(e,t,s){const i=new Date(e.getTime());if(t&&s){const e=n[s],{getter:r,setter:o,multiplier:h}=e;if("months"===s){const e=function(e,t){const s=new Date(e,t+1,1);return s.setDate(0),s.getDate()}(i.getFullYear(),i.getMonth()+t);i.getDate()>e&&i.setDate(e)}i[o](i[r]()+t*h)}return i}function o(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function h(e,t,s){return 0===e?0:e*i[t]/i[s]}}}]);