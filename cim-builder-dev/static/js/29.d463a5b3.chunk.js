(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[29],{597:function(e,t,i){"use strict";i.d(t,"a",(function(){return S}));var a=i(0),r=i(45),l=i(19),s=i(9),n=i(49),o=i(4),c=i(332),h=i(201),p=i(12),u=i(63),d=i(14),b=i(16),m=i(1),v=(i(5),i(30)),y=i(2),f=i(94),O=i(7);class j{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%8,r=i>>3,l=this._tileAvailabilityBitSet;return r<0||r>l.length?"unknown":l[r]&1<<a?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let a=!0,r=!0;const l=Math.ceil(t*i/8),s=new Uint8Array(l);let n=0;for(let o=0;o<e.length;o++){const t=o%8;e[o]?(r=!1,s[n]|=1<<t):a=!1,7===t&&++n}r?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=s,this.byteSize+=s.length)}static fromDefinition(e,t){const i=e.service.request||r.default,{row:a,col:l,width:n,height:o}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then(e=>e.data).catch(e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:a,left:l,width:n,height:o},valid:!0,data:Object(f.b)(n*o,0)};throw e}).then(e=>{if(e.location&&(e.location.top!==a||e.location.left!==l||e.location.width!==n||e.location.height!==o))throw new s.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:a,left:l,width:n,height:o}});return j.fromJSON(e)})}static fromJSON(e){j.validateJSON(e);const t=new j;return t.location=Object.freeze(Object(O.a)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new s.a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new s.a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new s.a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new s.a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new s.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function g(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}var _;const w=o.a.getLogger("esri.layers.support.TilemapCache");let S=_=class extends l.a{constructor(e){super(e),this._handles=new n.a,this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=r.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new c.a(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],()=>this._initializeTilemapDefinition()),Object(b.a)(this,"layer.tileInfo.lods",e=>this._initializeAvailableLevels(e),!0)]),this._initializeTilemapDefinition()}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}castLevels(e){return e<=2?(w.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,a){if(!this._availableLevels[e])return Promise.reject(new s.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const r=this._tmpTilemapDefinition,l=this._tilemapFromCache(e,t,i,r);if(l)return Promise.resolve(l);const n=a&&a.signal;return a={...a,signal:null},new Promise((e,t)=>{Object(p.q)(n,()=>t(Object(p.e)()));const i=g(r);let l=this._pendingTilemapRequests[i];if(!l){l=j.fromDefinition(r,a).then(e=>(this._tilemapCache.put(i,e,e.byteSize),e));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=l,l.then(e,e)}l.then(e,t)})}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}getAvailabilityUpsample(e,t,i,a){a.level=e,a.row=t,a.col=i;const r=this.layer.tileInfo;for(r.updateTileInfo(a);;){const e=this.getAvailability(a.level,a.row,a.col);if("unavailable"!==e)return e;if(!r.upsampleTile(a))return"unavailable"}}fetchAvailability(e,t,i,a){return this._availableLevels[e]?this.fetchTilemap(e,t,i,a).catch(e=>e).then(a=>{if(a instanceof j){const r=a.getAvailability(t,i);return"unavailable"===r?Promise.reject(new s.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):r}if(Object(p.m)(a))throw a;return"unknown"}):Promise.reject(new s.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,a,r){a.level=e,a.row=t,a.col=i;const l=this.layer.tileInfo;l.updateTileInfo(a);const s=this.fetchAvailability(e,t,i,r).catch(e=>{if(Object(p.m)(e))throw e;if(l.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a);throw e});return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,r,s),s}async _fetchAvailabilityUpsamplePrefetch(e,t,i,a,r,l){if(!this._prefetchingEnabled)return;const s="prefetch-"+e;if(this._handles.has(s))return;const n=Object(p.d)();l.then(()=>n.abort(),()=>n.abort());let o=!1;const c={remove(){o||(o=!0,n.abort())}};if(this._handles.add(c,s),await Object(u.c)(10,n.signal).catch(()=>{}),o||(o=!0,this._handles.remove(s)),Object(p.n)(n))return;const h={id:e,level:t,row:i,col:a},d={...r,signal:n.signal},b=this.layer.tileInfo;for(let p=0;_._prefetches.length<_._maxPrefetch&&b.upsampleTile(h);++p){const e=this.fetchAvailability(h.level,h.row,h.col,d);_._prefetches.push(e);const t=()=>{_._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?Object(d.E)(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const r=g(a);return this._tilemapCache.get(r)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(e=>this._availableLevels[e.level]=!0)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}};S._maxPrefetch=4,S._prefetches=new h.a({initialSize:_._maxPrefetch}),Object(a.a)([Object(m.b)({constructOnly:!0,type:Number})],S.prototype,"levels",void 0),Object(a.a)([Object(v.a)("levels")],S.prototype,"castLevels",null),Object(a.a)([Object(m.b)({readOnly:!0,type:Number})],S.prototype,"size",null),Object(a.a)([Object(m.b)({constructOnly:!0,type:Number})],S.prototype,"cacheByteSize",void 0),Object(a.a)([Object(m.b)({constructOnly:!0})],S.prototype,"layer",void 0),Object(a.a)([Object(m.b)({constructOnly:!0})],S.prototype,"request",void 0),S=_=Object(a.a)([Object(y.a)("esri.layers.support.TilemapCache")],S)},621:function(e,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return r}));var a=i(322);const r={type:a.a,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}};function l(e,t,i,r){if(!e)return null;const{minScale:l,maxScale:s,minLOD:n,maxLOD:o}=t;if(null!=n&&null!=o)return r&&r.ignoreMinMaxLOD?a.a.fromJSON(e):a.a.fromJSON({...e,lods:e.lods.filter(({level:e})=>null!=e&&e>=n&&e<=o)});if(0!==l&&0!==s){const t=e=>Math.round(1e4*e)/1e4,i=l?t(l):1/0,r=s?t(s):-1/0;return a.a.fromJSON({...e,lods:e.lods.filter(e=>{const a=t(e.scale);return a<=i&&a>=r})})}return a.a.fromJSON(e)}},672:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var a=i(0),r=(i(56),i(1)),l=(i(5),i(6),i(4),i(15)),s=i(2),n=i(621),o=i(597),c=i(26);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new o.a({layer:this}):null}};return Object(a.a)([Object(r.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(a.a)([Object(r.b)()],t.prototype,"minScale",void 0),Object(a.a)([Object(l.a)("service","minScale")],t.prototype,"readMinScale",null),Object(a.a)([Object(r.b)()],t.prototype,"maxScale",void 0),Object(a.a)([Object(l.a)("service","maxScale")],t.prototype,"readMaxScale",null),Object(a.a)([Object(r.b)({type:c.a})],t.prototype,"spatialReference",void 0),Object(a.a)([Object(r.b)({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(a.a)([Object(r.b)(n.b)],t.prototype,"tileInfo",void 0),Object(a.a)([Object(r.b)()],t.prototype,"tilemapCache",void 0),Object(a.a)([Object(l.a)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(a.a)([Object(r.b)()],t.prototype,"version",void 0),t=Object(a.a)([Object(s.a)("esri.layers.mixins.ArcGISCachedService")],t),t}},746:function(e,t,i){"use strict";i.r(t);var a=i(0),r=i(45),l=i(9),s=i(4),n=i(3),o=i(321),c=i(12),h=i(14),p=i(1),u=(i(5),i(6),i(15)),d=i(2),b=i(152),m=i(197),v=i(672),y=i(334),f=i(324),O=i(323),j=i(88),g=i(94),_=i(165),w=i(249);const S=s.a.getLogger("esri.core.workers.WorkerHandle");class T extends class{constructor(e,t,i,a={}){this._mainMethod=t,this._listeners=[],this._promise=Object(w.b)(e,{...a,schedule:i}).then(e=>{if(void 0===this._thread){this._thread=e,this._promise=null,a.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()}),this._promise.catch(t=>S.error(`Failed to initialize ${e} worker: ${t}`))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),Object(_.b)(()=>{i.removed=!0,Object(g.i)(this._listeners,i),this._thread&&Object(n.i)(i.threadHandle)&&i.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const a=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:a,signal:i})}return this._promise?this._promise.then(()=>(Object(c.v)(i),this.invokeMethod(e,t,i))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}}{constructor(e=null){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}getTransferList(e){return[e.buffer]}release(){--this.ref<=0&&(L.forEach((e,t)=>{e===this&&L.delete(t)}),this.destroy())}}const L=new Map;const x=s.a.getLogger("esri.layers.ElevationLayer");let D=class extends(Object(v.a)(Object(y.a)(Object(f.a)(Object(O.a)(Object(o.a)(m.a)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function(e=null){let t=L.get(Object(n.p)(e));return t||(Object(n.i)(e)?(t=new T(t=>e.schedule(t)),L.set(e,t)):(t=new T,L.set(null,t))),++t.ref,t}()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._lercDecoder=Object(n.n)(this._lercDecoder)}set minScale(e){this.constructed&&x.warn(this.declaredClass+".minScale support has been removed (since 4.5)")}get minScale(){}set maxScale(e){this.constructed&&x.warn(this.declaredClass+".maxScale support has been removed (since 4.5)")}get maxScale(){}readVersion(e,t){let i=t.currentVersion;return i||(i=9.3),i}load(e){const t=Object(n.i)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new l.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(c.u).then(()=>this._fetchImageService(t))),Promise.resolve(this)}fetchTile(e,t,i,a){const l=Object(n.i)((a=a||{signal:null}).signal)?a.signal:a.signal=Object(c.d)().signal,s={responseType:"array-buffer",signal:l},o={noDataValue:a.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,t,i,a)).then(()=>Object(r.default)(this.getTileUrl(e,t,i),s)).then(e=>this._lercDecoder.decode(e.data,o,l)).then(e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}))}getTileUrl(e,t,i){const a=!this.tilemapCache&&this.supportsBlankTile,r=Object(h.E)({...this.parsedUrl.query,blankTile:!a&&null});return`${this.parsedUrl.path}/tile/${e}/${t}/${i}${r?"?"+r:""}`}async queryElevation(e,t){const{ElevationQuery:a}=await i.e(12).then(i.bind(null,1048));return Object(c.v)(t),(new a).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:a}=await i.e(12).then(i.bind(null,1048));return Object(c.v)(t),(new a).createSampler(this,e,t)}_fetchTileAvailability(e,t,i,a){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,i,a):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},i=await Object(r.default)(this.parsedUrl.path,t);i.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};Object(a.a)([Object(p.b)({json:{read:{source:"copyrightText"}}})],D.prototype,"copyright",void 0),Object(a.a)([Object(p.b)({readOnly:!0,type:b.a})],D.prototype,"heightModelInfo",void 0),Object(a.a)([Object(p.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],D.prototype,"path",void 0),Object(a.a)([Object(p.b)({type:["show","hide"]})],D.prototype,"listMode",void 0),Object(a.a)([Object(p.b)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],D.prototype,"minScale",null),Object(a.a)([Object(p.b)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],D.prototype,"maxScale",null),Object(a.a)([Object(p.b)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],D.prototype,"opacity",void 0),Object(a.a)([Object(p.b)({type:["ArcGISTiledElevationServiceLayer"]})],D.prototype,"operationalLayerType",void 0),Object(a.a)([Object(p.b)()],D.prototype,"sourceJSON",void 0),Object(a.a)([Object(p.b)({json:{read:!1},value:"elevation",readOnly:!0})],D.prototype,"type",void 0),Object(a.a)([Object(p.b)(j.n)],D.prototype,"url",void 0),Object(a.a)([Object(p.b)()],D.prototype,"version",void 0),Object(a.a)([Object(u.a)("version",["currentVersion"])],D.prototype,"readVersion",null),D=Object(a.a)([Object(d.a)("esri.layers.ElevationLayer")],D),D.prototype.fetchTile.__isDefault__=!0;var A=D;t.default=A}}]);
//# sourceMappingURL=29.d463a5b3.chunk.js.map