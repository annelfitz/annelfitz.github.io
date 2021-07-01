(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[27],{524:function(e,t,i){"use strict";i.d(t,"a",(function(){return S}));var a=i(0),r=(i(6),i(5)),l=i(1),s=i(32),n=i(2),o=i(12),c=i(4),h=(i(8),i(9),i(133)),p=i(15),u=i(63),d=i(19),b=i(50),m=i(46),v=i(18),y=i(324),f=i(10),O=i(107);class j{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%8,r=i>>3,l=this._tileAvailabilityBitSet;return r<0||r>l.length?"unknown":l[r]&1<<a?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let a=!0,r=!0;const l=Math.ceil(t*i/8),s=new Uint8Array(l);let n=0;for(let o=0;o<e.length;o++){const t=o%8;e[o]?(r=!1,s[n]|=1<<t):a=!1,7===t&&++n}r?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=s,this.byteSize+=s.length)}static fromDefinition(e,t){const i=e.service.request||b.default,{row:a,col:r,width:l,height:s}=e,n={query:{f:"json"}};return t=t?{...n,...t}:n,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then(e=>e.data).catch(e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:a,left:r,width:l,height:s},valid:!0,data:Object(O.b)(l*s,0)};throw e}).then(e=>{if(e.location&&(e.location.top!==a||e.location.left!==r||e.location.width!==l||e.location.height!==s))throw new o.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:a,left:r,width:l,height:s}});return j.fromJSON(e)})}static fromJSON(e){j.validateJSON(e);const t=new j;return t.location=Object.freeze(Object(f.a)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new o.a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new o.a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new o.a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new o.a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new o.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function g(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}var w;const _=r.a.getLogger("esri.layers.support.TilemapCache");let S=w=class extends d.a{constructor(e){super(e),this._handles=new m.a,this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=b.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new y.a(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],()=>this._initializeTilemapDefinition()),Object(v.a)(this,"layer.tileInfo.lods",e=>this._initializeAvailableLevels(e),!0)]),this._initializeTilemapDefinition()}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}castLevels(e){return e<=2?(_.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,a){if(!this._availableLevels[e])return Promise.reject(new o.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const r=this._tmpTilemapDefinition,l=this._tilemapFromCache(e,t,i,r);if(l)return Promise.resolve(l);const s=a&&a.signal;return a={...a,signal:null},new Promise((e,t)=>{Object(p.p)(s,()=>t(Object(p.e)()));const i=g(r);let l=this._pendingTilemapRequests[i];if(!l){l=j.fromDefinition(r,a).then(e=>(this._tilemapCache.put(i,e,e.byteSize),e));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=l,l.then(e,e)}l.then(e,t)})}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}getAvailabilityUpsample(e,t,i,a){a.level=e,a.row=t,a.col=i;const r=this.layer.tileInfo;for(r.updateTileInfo(a);;){const e=this.getAvailability(a.level,a.row,a.col);if("unavailable"!==e)return e;if(!r.upsampleTile(a))return"unavailable"}}fetchAvailability(e,t,i,a){return this._availableLevels[e]?this.fetchTilemap(e,t,i,a).catch(e=>e).then(a=>{if(a instanceof j){const r=a.getAvailability(t,i);return"unavailable"===r?Promise.reject(new o.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):r}if(Object(p.m)(a))throw a;return"unknown"}):Promise.reject(new o.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,a,r){a.level=e,a.row=t,a.col=i;const l=this.layer.tileInfo;l.updateTileInfo(a);const s=this.fetchAvailability(e,t,i,r).catch(e=>{if(Object(p.m)(e))throw e;if(l.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a);throw e});return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,r,s),s}async _fetchAvailabilityUpsamplePrefetch(e,t,i,a,r,l){if(!this._prefetchingEnabled)return;const s="prefetch-"+e;if(this._handles.has(s))return;const n=Object(p.d)();l.then(()=>n.abort(),()=>n.abort());let o=!1;const c={remove(){o||(o=!0,n.abort())}};if(this._handles.add(c,s),await Object(u.c)(10,n.signal).catch(()=>{}),o||(o=!0,this._handles.remove(s)),Object(p.n)(n))return;const h={id:e,level:t,row:i,col:a},d={...r,signal:n.signal},b=this.layer.tileInfo;for(let p=0;w._prefetches.length<w._maxPrefetch&&b.upsampleTile(h);++p){const e=this.fetchAvailability(h.level,h.row,h.col,d);w._prefetches.push(e);const t=()=>{w._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?Object(c.D)(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const r=g(a);return this._tilemapCache.get(r)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(e=>this._availableLevels[e.level]=!0)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}};S._maxPrefetch=4,S._prefetches=new h.a({initialSize:w._maxPrefetch}),Object(a.a)([Object(l.b)({constructOnly:!0,type:Number})],S.prototype,"levels",void 0),Object(a.a)([Object(s.a)("levels")],S.prototype,"castLevels",null),Object(a.a)([Object(l.b)({readOnly:!0,type:Number})],S.prototype,"size",null),Object(a.a)([Object(l.b)({constructOnly:!0,type:Number})],S.prototype,"cacheByteSize",void 0),Object(a.a)([Object(l.b)({constructOnly:!0})],S.prototype,"layer",void 0),Object(a.a)([Object(l.b)({constructOnly:!0})],S.prototype,"request",void 0),S=w=Object(a.a)([Object(n.a)("esri.layers.support.TilemapCache")],S)},542:function(e,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return r}));var a=i(312);const r={type:a.a,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}};function l(e,t,i,r){if(!e)return null;const{minScale:l,maxScale:s,minLOD:n,maxLOD:o}=t;if(null!=n&&null!=o)return r&&r.ignoreMinMaxLOD?a.a.fromJSON(e):a.a.fromJSON({...e,lods:e.lods.filter(({level:e})=>null!=e&&e>=n&&e<=o)});if(0!==l&&0!==s){const t=e=>Math.round(1e4*e)/1e4,i=l?t(l):1/0,r=s?t(s):-1/0;return a.a.fromJSON({...e,lods:e.lods.filter(e=>{const a=t(e.scale);return a<=i&&a>=r})})}return a.a.fromJSON(e)}},586:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var a=i(0),r=(i(6),i(5),i(7),i(1)),l=i(17),s=i(2),n=(i(4),i(8),i(9),i(28)),o=(i(61),i(542)),c=i(524);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new c.a({layer:this}):null}};return Object(a.a)([Object(r.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(a.a)([Object(r.b)()],t.prototype,"minScale",void 0),Object(a.a)([Object(l.a)("service","minScale")],t.prototype,"readMinScale",null),Object(a.a)([Object(r.b)()],t.prototype,"maxScale",void 0),Object(a.a)([Object(l.a)("service","maxScale")],t.prototype,"readMaxScale",null),Object(a.a)([Object(r.b)({type:n.a})],t.prototype,"spatialReference",void 0),Object(a.a)([Object(r.b)({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(a.a)([Object(r.b)(o.b)],t.prototype,"tileInfo",void 0),Object(a.a)([Object(r.b)()],t.prototype,"tilemapCache",void 0),Object(a.a)([Object(l.a)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(a.a)([Object(r.b)()],t.prototype,"version",void 0),t=Object(a.a)([Object(s.a)("esri.layers.mixins.ArcGISCachedService")],t),t}},651:function(e,t,i){"use strict";i.r(t);var a=i(0),r=(i(6),i(3)),l=i(5),s=(i(7),i(1)),n=i(17),o=i(2),c=i(12),h=i(4),p=(i(8),i(9),i(15)),u=i(50),d=i(193),b=i(314),m=i(150),v=i(89),y=i(317),f=i(326),O=i(316),j=i(586),g=i(201),w=i(107),_=i(247);const S=l.a.getLogger("esri.core.workers.WorkerHandle");class T extends class{constructor(e,t,i,a={}){this._mainMethod=t,this._listeners=[],this._promise=Object(_.b)(e,{...a,scheduler:i}).then(e=>{if(void 0===this._thread){this._thread=e,this._promise=null,a.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()}),this._promise.catch(t=>S.error(`Failed to initialize ${e} worker: ${t}`))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),Object(g.b)(()=>{i.removed=!0,Object(w.i)(this._listeners,i),this._thread&&Object(r.i)(i.threadHandle)&&i.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const a=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:a,signal:i})}return this._promise?this._promise.then(()=>(Object(p.u)(i),this.invokeMethod(e,t,i))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}}{constructor(e){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.scheduler=e}decode(e,t,i){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}getTransferList(e){return[e.buffer]}}const L=new Map;const x=l.a.getLogger("esri.layers.ElevationLayer");let D=class extends(Object(j.a)(Object(f.a)(Object(y.a)(Object(O.a)(Object(b.a)(d.a)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function(e){let t=L.get(e);return t||(t={instance:new T(e),ref:0},L.set(e,t)),++t.ref,t.instance}()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){(function(e){if(null==e)return;const t=e.scheduler,i=L.get(t);i&&--i.ref<=0&&(i.instance.destroy(),L.delete(t))})(this._lercDecoder),this._lercDecoder=null}set minScale(e){this.constructed&&x.warn(this.declaredClass+".minScale support has been removed (since 4.5)")}get minScale(){}set maxScale(e){this.constructed&&x.warn(this.declaredClass+".maxScale support has been removed (since 4.5)")}get maxScale(){}readVersion(e,t){let i=t.currentVersion;return i||(i=9.3),i}load(e){const t=Object(r.i)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new c.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).then(()=>this._fetchImageService(t),()=>this._fetchImageService(t))),Promise.resolve(this)}fetchTile(e,t,i,a){const l=Object(r.i)((a=a||{signal:null}).signal)?a.signal:a.signal=Object(p.d)().signal,s={responseType:"array-buffer",signal:l},n={noDataValue:a.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,t,i,a)).then(()=>Object(u.default)(this.getTileUrl(e,t,i),s)).then(e=>this._lercDecoder.decode(e.data,n,l)).then(e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}))}getTileUrl(e,t,i){const a=!this.tilemapCache&&this.supportsBlankTile,r=Object(h.D)({...this.parsedUrl.query,blankTile:!a&&null});return`${this.parsedUrl.path}/tile/${e}/${t}/${i}${r?"?"+r:""}`}async queryElevation(e,t){const{ElevationQuery:a}=await i.e(10).then(i.bind(null,917));return Object(p.u)(t),(new a).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:a}=await i.e(10).then(i.bind(null,917));return Object(p.u)(t),(new a).createSampler(this,e,t)}_fetchTileAvailability(e,t,i,a){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,i,a):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},i=await Object(u.default)(this.parsedUrl.path,t);i.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl})}};Object(a.a)([Object(s.b)({json:{read:{source:"copyrightText"}}})],D.prototype,"copyright",void 0),Object(a.a)([Object(s.b)({readOnly:!0,type:m.a})],D.prototype,"heightModelInfo",void 0),Object(a.a)([Object(s.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],D.prototype,"path",void 0),Object(a.a)([Object(s.b)({type:["show","hide"]})],D.prototype,"listMode",void 0),Object(a.a)([Object(s.b)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],D.prototype,"minScale",null),Object(a.a)([Object(s.b)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],D.prototype,"maxScale",null),Object(a.a)([Object(s.b)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],D.prototype,"opacity",void 0),Object(a.a)([Object(s.b)({type:["ArcGISTiledElevationServiceLayer"]})],D.prototype,"operationalLayerType",void 0),Object(a.a)([Object(s.b)()],D.prototype,"sourceJSON",void 0),Object(a.a)([Object(s.b)({json:{read:!1},value:"elevation",readOnly:!0})],D.prototype,"type",void 0),Object(a.a)([Object(s.b)(v.n)],D.prototype,"url",void 0),Object(a.a)([Object(s.b)()],D.prototype,"version",void 0),Object(a.a)([Object(n.a)("version",["currentVersion"])],D.prototype,"readVersion",null),D=Object(a.a)([Object(o.a)("esri.layers.ElevationLayer")],D);var A=D;t.default=A}}]);
//# sourceMappingURL=27.6b81a678.chunk.js.map