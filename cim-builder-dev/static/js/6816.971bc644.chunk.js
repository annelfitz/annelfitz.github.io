"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[6816],{46816:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var a=i(27366),l=i(76200),r=i(10064),s=i(92026),n=i(97642),o=i(66978),h=i(35995),c=i(49861),p=(i(25243),i(63780)),u=i(38511),d=i(69912),m=i(90724),v=i(30651),y=i(17775),_=i(11936),f=i(6061),b=i(29598),g=i(45948);class w{constructor(e,t,i,a){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=i,this.noDataValue=a)}get hasNoDataValues(){if((0,s.Wi)(this._hasNoDataValues)){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),(0,s.Wg)(this._minValue)}get maxValue(){return this._ensureBounds(),(0,s.Wg)(this._maxValue)}_ensureBounds(){if((0,s.pC)(this._minValue))return;const{noDataValue:e,values:t}=this;let i=1/0,a=-1/0,l=!0;for(const r of t)r===e?this._hasNoDataValues=!0:(i=r<i?r:i,a=r>a?r:a,l=!1);l?(this._minValue=0,this._maxValue=0):(this._minValue=i,this._maxValue=a>-3e38?a:0)}}var S=i(42537),C=i(32718),T=i(31009);class D extends class{constructor(e,t,i,a){let l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=(0,T.bA)(e,{...l,schedule:a}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,l.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>C.Z.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,S.kB)((()=>{i.removed=!0,(0,p.Od)(this._listeners,i),this._thread&&(0,s.pC)(i.threadHandle)&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const a=this._transferLists[e],l=a?a(t):[];return this._thread.invoke(e,t,{transferList:l,signal:i})}return this._promise?this._promise.then((()=>((0,o.k_)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}release(){--this.ref<=0&&(L.forEach(((e,t)=>{e===this&&L.delete(t)})),this.destroy())}}const L=new Map;let O=class extends((0,y.Z)((0,_.Y)((0,f.q)((0,b.I)((0,n.R)(v.Z)))))){constructor(){super(...arguments),this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=L.get((0,s.Wg)(e));return t||((0,s.pC)(e)?(t=new D((t=>e.immediate.schedule(t))),L.set(e,t)):(t=new D,L.set(null,t))),++t.ref,t}()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._lercDecoder=(0,s.RY)(this._lercDecoder)}readVersion(e,t){let i=t.currentVersion;return i||(i=9.3),i}load(e){const t=(0,s.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new r.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(o.r9).then((()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,i,a){const r=(0,s.pC)((a=a||{signal:null}).signal)?a.signal:a.signal=(new AbortController).signal,n={responseType:"array-buffer",signal:r},o={noDataValue:a.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,i,a))).then((()=>(0,l.default)(this.getTileUrl(e,t,i),n))).then((e=>this._lercDecoder.decode(e.data,o,r))).then((e=>new w(e)))}getTileUrl(e,t,i){const a=!this.tilemapCache&&this.supportsBlankTile,l=(0,h.B7)({...this.parsedUrl.query,blankTile:!a&&null});return`${this.parsedUrl.path}/tile/${e}/${t}/${i}${l?"?"+l:""}`}async queryElevation(e,t){const{ElevationQuery:a}=await i.e(5887).then(i.bind(i,35887));return(0,o.k_)(t),(new a).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:a}=await i.e(5887).then(i.bind(i,35887));return(0,o.k_)(t),(new a).createSampler(this,e,t)}_fetchTileAvailability(e,t,i,a){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,i,a):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},i=await(0,l.default)(this.parsedUrl.path,t);i.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,a._)([(0,c.Cb)({json:{read:{source:"copyrightText"}}})],O.prototype,"copyright",void 0),(0,a._)([(0,c.Cb)({readOnly:!0,type:m.Z})],O.prototype,"heightModelInfo",void 0),(0,a._)([(0,c.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),(0,a._)([(0,c.Cb)({type:["show","hide"]})],O.prototype,"listMode",void 0),(0,a._)([(0,c.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],O.prototype,"minScale",void 0),(0,a._)([(0,c.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],O.prototype,"maxScale",void 0),(0,a._)([(0,c.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],O.prototype,"opacity",void 0),(0,a._)([(0,c.Cb)({type:["ArcGISTiledElevationServiceLayer"]})],O.prototype,"operationalLayerType",void 0),(0,a._)([(0,c.Cb)()],O.prototype,"sourceJSON",void 0),(0,a._)([(0,c.Cb)({json:{read:!1},value:"elevation",readOnly:!0})],O.prototype,"type",void 0),(0,a._)([(0,c.Cb)(g.HQ)],O.prototype,"url",void 0),(0,a._)([(0,c.Cb)()],O.prototype,"version",void 0),(0,a._)([(0,u.r)("version",["currentVersion"])],O.prototype,"readVersion",null),O=(0,a._)([(0,d.j)("esri.layers.ElevationLayer")],O),O.prototype.fetchTile.__isDefault__=!0;const A=O},17775:(e,t,i)=>{i.d(t,{Z:()=>c});var a=i(27366),l=(i(59486),i(49861)),r=(i(25243),i(63780),i(38511)),s=i(69912),n=i(71466),o=i(23638),h=i(78952);const c=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.includes("Tilemap")?new o.y({layer:this}):null}};return(0,a._)([(0,l.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,a._)([(0,l.Cb)()],t.prototype,"minScale",void 0),(0,a._)([(0,r.r)("service","minScale")],t.prototype,"readMinScale",null),(0,a._)([(0,l.Cb)()],t.prototype,"maxScale",void 0),(0,a._)([(0,r.r)("service","maxScale")],t.prototype,"readMaxScale",null),(0,a._)([(0,l.Cb)({type:h.Z})],t.prototype,"spatialReference",void 0),(0,a._)([(0,l.Cb)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,a._)([(0,l.Cb)(n.h)],t.prototype,"tileInfo",void 0),(0,a._)([(0,l.Cb)()],t.prototype,"tilemapCache",void 0),(0,a._)([(0,r.r)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),(0,a._)([(0,l.Cb)()],t.prototype,"version",void 0),t=(0,a._)([(0,s.j)("esri.layers.mixins.ArcGISCachedService")],t),t}},23638:(e,t,i)=>{i.d(t,{y:()=>D});var a,l=i(27366),r=i(76200),s=i(85015),n=i(59896),o=i(10064),h=i(41691),c=i(32718),p=i(16054),u=i(27546),d=i(66978),m=i(94172),v=i(99346),y=i(35995),_=i(49861),f=i(89125),b=i(63780),g=i(69912),w=i(87960),S=i(84652);class C{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%8,l=i>>3,r=this._tileAvailabilityBitSet;return l<0||l>r.length?"unknown":r[l]&1<<a?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let a=!0,l=!0;const r=Math.ceil(t*i/8),s=new Uint8Array(r);let n=0;for(let o=0;o<e.length;o++){const t=o%8;e[o]?(l=!1,s[n]|=1<<t):a=!1,7===t&&++n}l?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=s,this.byteSize+=s.length)}static fromDefinition(e,t){const i=e.service.request||r.default,{row:a,col:l,width:s,height:n}=e,h={query:{f:"json"}};return t=t?{...h,...t}:h,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:a,left:l,width:s,height:n},valid:!0,data:(0,b.a9)(s*n,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==a||e.location.left!==l||e.location.width!==s||e.location.height!==n))throw new o.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:a,left:l,width:s,height:n}});return C.fromJSON(e)}))}static fromJSON(e){C._validateJSON(e);const t=new C;return t.location=Object.freeze((0,S.d9)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static _validateJSON(e){if(!e||!e.location)throw new o.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new o.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new o.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new o.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new o.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function T(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}let D=a=class extends((0,h.p)(s.Z)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*n.Y8.MEGABYTES,this.request=r.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new p.Z(this.cacheByteSize),this.addHandles([(0,m.YP)((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition())),(0,m.YP)((()=>this.layer?.tileInfo?.lods),(e=>this._initializeAvailableLevels(e)),m.tX)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(c.Z.getLogger(this.declaredClass).error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,a){if(!this._availableLevels[e])return Promise.reject(new o.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,r=this._tilemapFromCache(e,t,i,l);if(r)return Promise.resolve(r);const s=a&&a.signal;return a={...a,signal:null},new Promise(((e,t)=>{(0,d.fu)(s,(()=>t((0,d.zE)())));const i=T(l);let r=this._pendingTilemapRequests[i];if(!r){r=C.fromDefinition(l,a).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=r,r.then(e,e)}r.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,a){return this._availableLevels[e]?this.fetchTilemap(e,t,i,a).catch((e=>e)).then((a=>{if(a instanceof C){const l=a.getAvailability(t,i);if("unavailable"===l)throw new o.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return l}if((0,d.D_)(a))throw a;return"unknown"})):Promise.reject(new o.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,a,l){a.level=e,a.row=t,a.col=i;const r=this.layer.tileInfo;r.updateTileInfo(a);const s=this.fetchAvailability(e,t,i,l).catch((e=>{if((0,d.D_)(e))throw e;if(r.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a);throw e}));return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,l,s),s}async _fetchAvailabilityUpsamplePrefetch(e,t,i,l,r,s){if(!this._prefetchingEnabled||null==e)return;const n=`prefetch-${e}`;if(this.handles.has(n))return;const o=new AbortController;s.then((()=>o.abort()),(()=>o.abort()));let h=!1;const c={remove(){h||(h=!0,o.abort())}};if(this.handles.add(c,n),await(0,v.MU)(10,o.signal).catch((()=>{})),h||(h=!0,this.handles.remove(n)),(0,d.Hc)(o))return;const p=new w.f(e,t,i,l),u={...r,signal:o.signal},m=this.layer.tileInfo;for(let d=0;a._prefetches.length<a._maxPrefetch&&m.upsampleTile(p);++d){const e=this.fetchAvailability(p.level,p.row,p.col,u);a._prefetches.push(e);const t=()=>{a._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:(0,y.B7)({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const l=T(a);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}};D._maxPrefetch=4,D._prefetches=new u.Z({initialSize:a._maxPrefetch}),(0,l._)([(0,_.Cb)({constructOnly:!0,type:Number})],D.prototype,"levels",void 0),(0,l._)([(0,f.p)("levels")],D.prototype,"castLevels",null),(0,l._)([(0,_.Cb)({readOnly:!0,type:Number})],D.prototype,"size",null),(0,l._)([(0,_.Cb)({constructOnly:!0,type:Number})],D.prototype,"cacheByteSize",void 0),(0,l._)([(0,_.Cb)({constructOnly:!0})],D.prototype,"layer",void 0),(0,l._)([(0,_.Cb)({constructOnly:!0})],D.prototype,"request",void 0),D=a=(0,l._)([(0,g.j)("esri.layers.support.TilemapCache")],D)},71466:(e,t,i)=>{i.d(t,{d:()=>r,h:()=>l});var a=i(22824);const l={type:a.Z,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:r}}}}};function r(e,t,i,l){if(!e)return null;const{minScale:r,maxScale:s,minLOD:n,maxLOD:o}=t;if(null!=n&&null!=o)return l&&l.ignoreMinMaxLOD?a.Z.fromJSON(e):a.Z.fromJSON({...e,lods:e.lods.filter((e=>{let{level:t}=e;return null!=t&&t>=n&&t<=o}))});if(0!==r&&0!==s){const t=e=>Math.round(1e4*e)/1e4,i=r?t(r):1/0,l=s?t(s):-1/0;return a.Z.fromJSON({...e,lods:e.lods.filter((e=>{const a=t(e.scale);return a<=i&&a>=l}))})}return a.Z.fromJSON(e)}}}]);
//# sourceMappingURL=6816.971bc644.chunk.js.map