(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[57],{431:function(e,t,i){"use strict";i.d(t,"a",(function(){return j})),i.d(t,"b",(function(){return A})),i.d(t,"c",(function(){return u})),i.d(t,"d",(function(){return E})),i.d(t,"e",(function(){return n})),i.d(t,"f",(function(){return D})),i.d(t,"g",(function(){return s})),i.d(t,"h",(function(){return T})),i.d(t,"i",(function(){return x})),i.d(t,"j",(function(){return _})),i.d(t,"k",(function(){return I})),i.d(t,"l",(function(){return o})),i.d(t,"m",(function(){return w})),i.d(t,"n",(function(){return r})),i.d(t,"o",(function(){return N})),i.d(t,"p",(function(){return l})),i.d(t,"q",(function(){return C})),i.d(t,"r",(function(){return y})),i.d(t,"s",(function(){return f})),i.d(t,"t",(function(){return m})),i.d(t,"u",(function(){return b})),i.d(t,"v",(function(){return d})),i.d(t,"w",(function(){return p})),i.d(t,"x",(function(){return v})),i.d(t,"y",(function(){return g})),i.d(t,"z",(function(){return O})),i.d(t,"A",(function(){return S})),i.d(t,"B",(function(){return h})),i.d(t,"C",(function(){return c})),i.d(t,"D",(function(){return U})),i.d(t,"E",(function(){return a})),i.d(t,"F",(function(){return L})),i.d(t,"G",(function(){return R})),i.d(t,"H",(function(){return P}));const r=1e-30,l=4294967295,a=512,s=8,o=29,n=16,c=8,u={metrics:{width:15,height:17,left:0,top:-7,advance:14}},h=0,p=0,d=0,y=1,f=2,m=3,b=4,v=5,g=6,O=5,S=6,j=1,A=2,w=2,_=1,x=2,T=4,U=2.5,I=6,P=5,R=6,L=1.15,C=2,D=7,N=500,E=128},524:function(e,t,i){"use strict";i.d(t,"a",(function(){return w}));var r=i(0),l=(i(6),i(5)),a=i(1),s=i(32),o=i(2),n=i(12),c=i(4),u=(i(8),i(9),i(133)),h=i(15),p=i(63),d=i(19),y=i(50),f=i(46),m=i(18),b=i(324),v=i(10),g=i(107);class O{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),r=i%8,l=i>>3,a=this._tileAvailabilityBitSet;return l<0||l>a.length?"unknown":a[l]&1<<r?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let r=!0,l=!0;const a=Math.ceil(t*i/8),s=new Uint8Array(a);let o=0;for(let n=0;n<e.length;n++){const t=n%8;e[n]?(l=!1,s[o]|=1<<t):r=!1,7===t&&++o}l?this._allAvailability="unavailable":r?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=s,this.byteSize+=s.length)}static fromDefinition(e,t){const i=e.service.request||y.default,{row:r,col:l,width:a,height:s}=e,o={query:{f:"json"}};return t=t?{...o,...t}:o,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then(e=>e.data).catch(e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:l,width:a,height:s},valid:!0,data:Object(g.b)(a*s,0)};throw e}).then(e=>{if(e.location&&(e.location.top!==r||e.location.left!==l||e.location.width!==a||e.location.height!==s))throw new n.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:r,left:l,width:a,height:s}});return O.fromJSON(e)})}static fromJSON(e){O.validateJSON(e);const t=new O;return t.location=Object.freeze(Object(v.a)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new n.a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new n.a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new n.a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new n.a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new n.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function S(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}var j;const A=l.a.getLogger("esri.layers.support.TilemapCache");let w=j=class extends d.a{constructor(e){super(e),this._handles=new f.a,this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=y.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new b.a(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],()=>this._initializeTilemapDefinition()),Object(m.a)(this,"layer.tileInfo.lods",e=>this._initializeAvailableLevels(e),!0)]),this._initializeTilemapDefinition()}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}castLevels(e){return e<=2?(A.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,r){if(!this._availableLevels[e])return Promise.reject(new n.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,a=this._tilemapFromCache(e,t,i,l);if(a)return Promise.resolve(a);const s=r&&r.signal;return r={...r,signal:null},new Promise((e,t)=>{Object(h.p)(s,()=>t(Object(h.e)()));const i=S(l);let a=this._pendingTilemapRequests[i];if(!a){a=O.fromDefinition(l,r).then(e=>(this._tilemapCache.put(i,e,e.byteSize),e));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=a,a.then(e,e)}a.then(e,t)})}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}getAvailabilityUpsample(e,t,i,r){r.level=e,r.row=t,r.col=i;const l=this.layer.tileInfo;for(l.updateTileInfo(r);;){const e=this.getAvailability(r.level,r.row,r.col);if("unavailable"!==e)return e;if(!l.upsampleTile(r))return"unavailable"}}fetchAvailability(e,t,i,r){return this._availableLevels[e]?this.fetchTilemap(e,t,i,r).catch(e=>e).then(r=>{if(r instanceof O){const l=r.getAvailability(t,i);return"unavailable"===l?Promise.reject(new n.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):l}if(Object(h.m)(r))throw r;return"unknown"}):Promise.reject(new n.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,r,l){r.level=e,r.row=t,r.col=i;const a=this.layer.tileInfo;a.updateTileInfo(r);const s=this.fetchAvailability(e,t,i,l).catch(e=>{if(Object(h.m)(e))throw e;if(a.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e});return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,l,s),s}async _fetchAvailabilityUpsamplePrefetch(e,t,i,r,l,a){if(!this._prefetchingEnabled)return;const s="prefetch-"+e;if(this._handles.has(s))return;const o=Object(h.d)();a.then(()=>o.abort(),()=>o.abort());let n=!1;const c={remove(){n||(n=!0,o.abort())}};if(this._handles.add(c,s),await Object(p.c)(10,o.signal).catch(()=>{}),n||(n=!0,this._handles.remove(s)),Object(h.n)(o))return;const u={id:e,level:t,row:i,col:r},d={...l,signal:o.signal},y=this.layer.tileInfo;for(let h=0;j._prefetches.length<j._maxPrefetch&&y.upsampleTile(u);++h){const e=this.fetchAvailability(u.level,u.row,u.col,d);j._prefetches.push(e);const t=()=>{j._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?Object(c.D)(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const l=S(r);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(e=>this._availableLevels[e.level]=!0)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}};w._maxPrefetch=4,w._prefetches=new u.a({initialSize:j._maxPrefetch}),Object(r.a)([Object(a.b)({constructOnly:!0,type:Number})],w.prototype,"levels",void 0),Object(r.a)([Object(s.a)("levels")],w.prototype,"castLevels",null),Object(r.a)([Object(a.b)({readOnly:!0,type:Number})],w.prototype,"size",null),Object(r.a)([Object(a.b)({constructOnly:!0,type:Number})],w.prototype,"cacheByteSize",void 0),Object(r.a)([Object(a.b)({constructOnly:!0})],w.prototype,"layer",void 0),Object(r.a)([Object(a.b)({constructOnly:!0})],w.prototype,"request",void 0),w=j=Object(r.a)([Object(o.a)("esri.layers.support.TilemapCache")],w)},542:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return l}));var r=i(312);const l={type:r.a,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:a}}}}};function a(e,t,i,l){if(!e)return null;const{minScale:a,maxScale:s,minLOD:o,maxLOD:n}=t;if(null!=o&&null!=n)return l&&l.ignoreMinMaxLOD?r.a.fromJSON(e):r.a.fromJSON({...e,lods:e.lods.filter(({level:e})=>null!=e&&e>=o&&e<=n)});if(0!==a&&0!==s){const t=e=>Math.round(1e4*e)/1e4,i=a?t(a):1/0,l=s?t(s):-1/0;return r.a.fromJSON({...e,lods:e.lods.filter(e=>{const r=t(e.scale);return r<=i&&r>=l})})}return r.a.fromJSON(e)}},548:function(e,t,i){"use strict";function r(){return new Float32Array(4)}function l(e,t,i,r){const l=new Float32Array(4);return l[0]=e,l[1]=t,l[2]=i,l[3]=r,l}function a(){return r()}function s(){return l(1,1,1,1)}function o(){return l(1,0,0,0)}function n(){return l(0,1,0,0)}function c(){return l(0,0,1,0)}function u(){return l(0,0,0,1)}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return l}));const h=a(),p=s(),d=o(),y=n(),f=c(),m=u();Object.freeze({__proto__:null,create:r,clone:function(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:l,createView:function(e,t){return new Float32Array(e,t,4)},zeros:a,ones:s,unitX:o,unitY:n,unitZ:c,unitW:u,ZEROS:h,ONES:p,UNIT_X:d,UNIT_Y:y,UNIT_Z:f,UNIT_W:m})},586:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i(0),l=(i(6),i(5),i(7),i(1)),a=i(17),s=i(2),o=(i(4),i(8),i(9),i(28)),n=(i(61),i(542)),c=i(524);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new c.a({layer:this}):null}};return Object(r.a)([Object(l.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(r.a)([Object(l.b)()],t.prototype,"minScale",void 0),Object(r.a)([Object(a.a)("service","minScale")],t.prototype,"readMinScale",null),Object(r.a)([Object(l.b)()],t.prototype,"maxScale",void 0),Object(r.a)([Object(a.a)("service","maxScale")],t.prototype,"readMaxScale",null),Object(r.a)([Object(l.b)({type:o.a})],t.prototype,"spatialReference",void 0),Object(r.a)([Object(l.b)({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(r.a)([Object(l.b)(n.b)],t.prototype,"tileInfo",void 0),Object(r.a)([Object(l.b)()],t.prototype,"tilemapCache",void 0),Object(r.a)([Object(a.a)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(r.a)([Object(l.b)()],t.prototype,"version",void 0),t=Object(r.a)([Object(s.a)("esri.layers.mixins.ArcGISCachedService")],t),t}},647:function(e,t,i){"use strict";i.r(t);var r=i(0),l=i(29),a=(i(6),i(10)),s=i(5),o=(i(7),i(1)),n=i(17),c=i(2),u=i(16),h=i(12),p=i(4),d=(i(8),i(9),i(15)),y=i(28),f=i(39),m=i(50),b=i(193),v=i(314),g=i(317),O=i(326),S=i(320),j=i(316),A=i(318),w=i(312),_=i(524),x=i(586);const T=s.a.getLogger("esri.layers.support.SpriteSource");var U=class{constructor(e,t,i,r){this.baseURL=e,this.devicePixelRatio=t,this.maxTextureSize=i,this._spriteImageFormat=r,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const e=[];for(const t in this._spritesData)e.push(t);return e.sort(),e}getSpriteInfo(e){return this._spritesData[e]}async load(e){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(e),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(e){this._isRetina=this.devicePixelRatio>1.15;const t=Object(p.J)(this.baseURL),i=t.query?"?"+Object(p.D)(t.query):"",r=this._isRetina?"@2x":"",l=`${t.path}${r}.${this._spriteImageFormat}${i}`,a=`${t.path}${r}.json${i}`;return Promise.all([Object(m.default)(a,e),Object(m.default)(l,{responseType:"image",...e})]).then(([e,i])=>{const r=Object.keys(e.data);if(!r||0===r.length||1===r.length&&"_ssl"===r[0]||!i||!i.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=e.data;const l=i.data,a=Math.max(this.maxTextureSize,4096);if(l.width>a||l.height>a){const e=`Sprite resource for style ${t.path} is bigger than the maximum allowed of ${a} pixels}`;throw T.error(e),new h.a("SpriteSource",e)}this.width=l.width,this.height=l.height;const s=document.createElement("canvas"),o=s.getContext("2d");s.width=l.width,s.height=l.height,o.drawImage(l,0,0,l.width,l.height);const n=o.getImageData(0,0,l.width,l.height),c=new Uint8Array(n.data);let u;for(let t=0;t<c.length;t+=4)u=c[t+3]/255,c[t]=c[t]*u,c[t+1]=c[t+1]*u,c[t+2]=c[t+2]*u;this.image=c})}},I=i(52),P=i(542),R=i(695);var L=class{constructor(e,t,i){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=e,this.sourceUrl=t,t&&(this.parsedUrl=Object(p.J)(this.sourceUrl));const r=this.parsedUrl.path,l=this.parsedUrl.query?"?"+Object(p.D)(this.parsedUrl.query):"",s=Object(a.a)(i),o=s.tiles;t&&o.forEach((e,t)=>{Object(p.s)(e)||(o[t]=Object(p.y)(r,e)+l)}),this.tileServers=o,i.tileMap&&(this.tileMapURL=Object(p.y)(t,i.tileMap));const n=i.capabilities&&i.capabilities.split(",").map(e=>e.toLowerCase().trim()),c=!!i.exportTilesAllowed,u=!!n&&-1!==n.indexOf("tilemap"),h=c&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:c,supportsTileMap:u},exportTiles:c?{maxExportTilesCount:+h}:null},this.tileInfo=Object(P.a)(s.tileInfo,s,null,{ignoreMinMaxLOD:!0}),u&&(this.type="vector-tile",this.tilemapCache=new _.a({layer:this}),this.tilemapCache&&(this.tileIndex=new R.a(this.tilemapCache))),this.fullExtent=f.a.fromJSON(i.fullExtent)}getRefKey(e,t){return this.tileIndex?this.tileIndex.dataKey(e,t):Promise.resolve(e)}getSourceTileUrl(e,t,i){let r=this.tileServers[t%this.tileServers.length];return r=r.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString()),r}isCompatibleWith(e){const t=this.tileInfo,i=e.tileInfo;if(!t.spatialReference.equals(i.spatialReference))return!1;if(!t.origin.equals(i.origin))return!1;if(Math.round(t.dpi)!==Math.round(i.dpi))return!1;const r=t.lods,l=i.lods,a=Math.min(r.length,l.length);for(let s=0;s<a;s++){const e=r[s],t=l[s];if(e.level!==t.level||Math.round(e.scale)!==Math.round(t.scale))return!1}return!0}};const C=I.a.defaults&&I.a.defaults.io.corsEnabledServers;function D(e){if(!e)return;const t=Object(p.m)(e);C&&-1===C.indexOf(t)&&C.push(t)}function N(...e){let t;for(let i=0;i<e.length;++i)if(Object(p.v)(e[i])){if(t){const r=t.split("://")[0];t=r+":"+e[i].trim()}}else t=Object(p.s)(e[i])?e[i]:Object(p.y)(t,e[i]);return Object(p.H)(t)}async function E(e,t,i,r,l){let a,s,o;if(Object(d.u)(l),"string"==typeof i){const e=Object(p.C)(i);D(e);const t=Object(p.J)(e);o=await Object(m.default)(t.path,{query:{f:"json"},responseType:"json",...l}),a=e,s=e}else o={data:i},a=i.jsonUrl||null,s=r;const n=o.data;return o.ssl&&(a&&(a=a.replace(/^http:/i,"https:")),s&&(s=s.replace(/^http:/i,"https:"))),z(n)?(e.styleUrl=a||null,async function(e,t,i,r){const l=i?Object(p.F)(i):p.f;e.styleBase=l,e.style=t,e.styleUrl&&D(e.styleUrl),t["sprite-format"]&&"webp"===t["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const a=[];if(t.sources&&t.sources.esri){const i=t.sources.esri;i.url?await E(e,"esri",N(l,i.url),void 0,r):a.push(E(e,"esri",i,l,r))}for(const s of Object.keys(t.sources))"esri"!==s&&"vector"===t.sources[s].type&&(t.sources[s].url?a.push(E(e,s,N(l,t.sources[s].url),void 0,r)):t.sources[s].tiles&&a.push(E(e,s,t.sources[s],l,r)));await Promise.all(a)}(e,n,s,l)):function(e){return!z(e)}(n)?e.sourceUrl?M(e,n,s,!1,t,l):(e.sourceUrl=a||null,M(e,n,s,!0,t,l)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")}function z(e){return!!e.sources}async function M(e,t,i,r,l,a){const s=i?Object(p.H)(i)+"/":p.f,o=function(e,t){if(e.hasOwnProperty("tileInfo"))return e;const i={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}};let r=78271.51696400007,l=295828763.7957775;const a=[],s=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,o=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):22;for(let n=0;n<=o;n++)n>=s&&a.push({level:n,scale:l,resolution:r}),r/=2,l/=2;for(const n of e.tiles)D(N(t,n));return{capabilities:"TilesOnly",initialExtent:i,fullExtent:i,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:a,spatialReference:{wkid:102100}}}}(t,s),n=new L(l,s,o);if(!r&&e.primarySourceName in e.sourceNameToSource){const t=e.sourceNameToSource[e.primarySourceName];if(!t.isCompatibleWith(n))return Promise.resolve();null!=n.fullExtent&&(null!=t.fullExtent?t.fullExtent.union(n.fullExtent):t.fullExtent=n.fullExtent.clone()),t.tileInfo.lods.length<n.tileInfo.lods.length&&(t.tileInfo=n.tileInfo)}if(r?(e.sourceBase=s,e.source=t,e.validatedSource=o,e.primarySourceName=l,e.sourceUrl&&D(e.sourceUrl)):D(s),e.sourceNameToSource[l]=n,!e.style)return null==t.defaultStyles?Promise.reject():"string"==typeof t.defaultStyles?E(e,"",N(s,t.defaultStyles,"root.json"),void 0,a):E(e,"",t.defaultStyles,N(s,"root.json"),a)}var B=i(686),$=i(200);var k=class{constructor(e,t){this.lockedSchemaPixelSize=e,this.isGCS=t}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,t){let i=0,r=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(i=t),e[1]%2&&(r=t)),[i,r]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]&&256===e.size[1])return e;const t=e.spatialReference.isGeographic,i=[],r=e.lods.length;for(let l=0;l<r;l++){const r=e.lods[l],a=t?r.resolution:2*r.resolution;i.push(new $.a({level:r.level,scale:r.scale,resolution:a}))}return new w.a({size:[256,256],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:i})}static create512x512CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]||256===e.size[1])return null;const t=[],i=e.lods.length;for(let r=0;r<i;r++){const i=e.lods[r],l=.5*i.resolution;t.push(new $.a({level:i.level,scale:i.scale,resolution:l}))}return new w.a({size:[512,512],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:t})}};function J(e,t){if(e===t)return!0;if(!e&&null!=t)return!1;if(null!=e&&!t)return!1;if(!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const i=e.origin,r=t.origin;if(Math.abs(i.x-r.x)>=1e-6||Math.abs(i.y-r.y)>=1e-6)return!1;let l,a;e.lods[0].scale>t.lods[0].scale?(l=e,a=t):(a=e,l=t);for(let s=l.lods[0].scale;s>=a.lods[a.lods.length-1].scale-1e-6;s/=2)if(Math.abs(s-a.lods[0].scale)<1e-6)return!0;return!1}function F(e,t){if(e===t)return e;if(!e&&null!=t)return t;if(null!=e&&!t)return e;const i=e.size[0],r=e.format,l=e.dpi,a={x:e.origin.x,y:e.origin.y},s=e.spatialReference.toJSON(),o=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],c=o.scale,u=o.resolution,h=n.scale,p=[];let d=c,y=u,f=0;for(;d>h;)p.push({level:f,resolution:y,scale:d}),f++,d/=2,y/=2;return new w.a({size:[i,i],dpi:l,format:r||"pbf",origin:a,lods:p,spatialReference:s})}var q=i(617),Q=i(319);let V=class extends(Object(S.a)(Object(A.a)(Object(x.a)(Object(O.a)(Object(g.a)(Object(j.a)(Object(v.a)(b.a)))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(l.a.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const t=this.portalItem.itemUrl+"/resources/styles/root.json";(await Object(m.default)(t,{...e,query:{f:"json"}})).data&&this.read({url:t},Object(B.a)(this.portalItem))}).then(()=>this._loadStyle(e),()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&Object(p.J)(e.serviceUrl);return t?this._getDefaultAttribution(t.path):null}get capabilities(){const e=this._getPrimarySource();return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){const e=this._getPrimarySource();return e?e.fullExtent:null}get parsedUrl(){return this.serviceUrl?Object(p.J)(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&Object(p.v)(e)&&(e="https:"+e),t.styleUrl=e}get tileIndexType(){const e=this._getPrimarySource();return e?e.type:""}get tileIndexUrl(){const e=this._getPrimarySource();return e?e.tileMapURL:""}get tileInfo(){var e;const t=[];for(const r in this.sourceNameToSource)t.push(this.sourceNameToSource[r]);let i=(null==(e=this._getPrimarySource())?void 0:e.tileInfo)||new w.a;if(t.length>1)for(let r=0;r<t.length;r++)J(i,t[r].tileInfo)&&(i=F(i,t[r].tileInfo));return i}get tilemapCache(){const e=this._getPrimarySource();return e&&e.capabilities.operations.supportsTileMap?e.tilemapCache:null}get tileServers(){const e=this._getPrimarySource();return e?e.tileServers:[]}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}get compatibleTileInfo256(){return k.create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return k.create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const i=Object(Q.a)(),r=new U(this.styleRepository.sprite,e,i.maxTextureSize,this.currentStyleInfo.spriteFormat);await r.load(t),this._spriteSourceMap.set(e,r)}return Promise.resolve(this._spriteSourceMap.get(e))}async loadStyle(e,t){const i=e||this.style||this.url;if(this._loadingPromise&&"string"==typeof i&&this.url===i&&!Object(d.n)(this._abortController))return this._loadingPromise;const r=this._abortController;r&&r.abort();const l=Object(d.d)();return this._loadingPromise=new Promise((e,r)=>{const a={signal:l.signal};this._spriteSourceMap.clear(),this._getSourceAndStyle(i,a).then(e,r),Object(d.p)(t,()=>{l.abort()})}),this._abortController=l,this._loadingPromise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return Object(a.a)(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const i=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const r=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layerName:e,paint:t,isDataDriven:i||r})}getStyleLayer(e){return Object(a.a)(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layerName:e})}getLayoutProperties(e){return Object(a.a)(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}getTileUrl(e,t,i){let r=this.tileServers[t%this.tileServers.length];return r=r.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString()),r}write(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new h.a("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const i=await async function(e,t){const i={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[r,l]="string"==typeof e?[e,null]:[null,e.jsonUrl],a=r?Object(p.J)(r):null;await E(i,"esri",e,l,t);const s={layerDefinition:i.validatedSource,url:r,parsedUrl:a,serviceUrl:i.sourceUrl,style:i.style,styleUrl:i.styleUrl,spriteUrl:i.style.sprite&&N(i.styleBase,i.style.sprite),spriteFormat:i.spriteFormat,glyphsUrl:i.style.glyphs&&N(i.styleBase,i.style.glyphs),sourceNameToSource:i.sourceNameToSource,primarySourceName:i.primarySourceName};return D(s.spriteUrl),D(s.glyphsUrl),s}(e,t);"webp"===i.spriteFormat&&(await function(e){const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return new Promise(i=>{const r=new Image;r.onload=()=>{r.onload=r.onerror=null,i(r.width>0&&r.height>0)},r.onerror=()=>{r.onload=r.onerror=null,i(!1)},r.src="data:image/webp;base64,"+t[e]})}("lossy")||(i.spriteFormat="png")),this._set("currentStyleInfo",{...i}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",i.sourceNameToSource),this._set("primarySourceName",i.primarySourceName),this._set("styleRepository",new q.a(i.style,i)),this.read(i.layerDefinition,{origin:"service"}),this.emit("load-style",{})}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),i=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const r=t[2]&&t[2].toLowerCase();if(!r)return;const l=t[1]||"";for(const a of i)if(a.toLowerCase().indexOf(r)>-1)return Object(p.C)(`//static.arcgis.com/attribution/Vector${l}/${a}`)}_getPrimarySource(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null}async _loadStyle(e){return this._loadingPromise?this._loadingPromise:this.loadStyle(null,e)}};Object(r.a)([Object(o.b)({readOnly:!0})],V.prototype,"attributionDataUrl",null),Object(r.a)([Object(o.b)({type:["show","hide"]})],V.prototype,"listMode",void 0),Object(r.a)([Object(o.b)({readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"],json:{read:!1}})],V.prototype,"capabilities",null),Object(r.a)([Object(o.b)({readOnly:!0})],V.prototype,"currentStyleInfo",void 0),Object(r.a)([Object(o.b)({json:{read:!1},readOnly:!0,type:f.a})],V.prototype,"fullExtent",null),Object(r.a)([Object(o.b)()],V.prototype,"style",void 0),Object(r.a)([Object(o.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],V.prototype,"isReference",void 0),Object(r.a)([Object(o.b)({type:["VectorTileLayer"]})],V.prototype,"operationalLayerType",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],V.prototype,"parsedUrl",null),Object(r.a)([Object(o.b)({readOnly:!0})],V.prototype,"serviceUrl",null),Object(r.a)([Object(o.b)({type:y.a,readOnly:!0})],V.prototype,"spatialReference",null),Object(r.a)([Object(o.b)({readOnly:!0})],V.prototype,"styleRepository",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],V.prototype,"sourceNameToSource",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],V.prototype,"primarySourceName",void 0),Object(r.a)([Object(o.b)({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],V.prototype,"styleUrl",null),Object(r.a)([Object(u.a)(["portal-item","web-document"],"styleUrl")],V.prototype,"writeStyleUrl",null),Object(r.a)([Object(o.b)({json:{read:!1},readOnly:!0})],V.prototype,"tileIndexType",null),Object(r.a)([Object(o.b)({json:{read:!1},readOnly:!0})],V.prototype,"tileIndexUrl",null),Object(r.a)([Object(o.b)({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:w.a})],V.prototype,"tileInfo",null),Object(r.a)([Object(o.b)({json:{read:!1},readOnly:!0,type:_.a})],V.prototype,"tilemapCache",null),Object(r.a)([Object(o.b)({json:{read:!1},readOnly:!0})],V.prototype,"tileServers",null),Object(r.a)([Object(o.b)({json:{read:!1},readOnly:!0,value:"vector-tile"})],V.prototype,"type",void 0),Object(r.a)([Object(o.b)({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],V.prototype,"url",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],V.prototype,"version",void 0),Object(r.a)([Object(n.a)("version",["version","currentVersion"])],V.prototype,"readVersion",null),Object(r.a)([Object(o.b)({readOnly:!0})],V.prototype,"compatibleTileInfo256",null),Object(r.a)([Object(o.b)({readOnly:!0})],V.prototype,"compatibleTileInfo512",null),V=Object(r.a)([Object(c.a)("esri.layers.VectorTileLayer")],V);var G=V;t.default=G},686:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(4),l=i(70);function a(e){return{origin:"portal-item",url:Object(r.J)(e.itemUrl),portal:e.portal||l.a.getDefault(),portalItem:e,readResourcePaths:[]}}},695:function(e,t,i){"use strict";var r=i(15),l=i(524),a=i(175);t.a=class{constructor(e){if(e instanceof l.a)this._tilemapCache=e;else{if(!e||!("index"in e))throw new Error("Invalid tilemap!");this._tilemap=e.index}}dataKey(e,t){if(this._tilemapCache){const{level:i,row:l,col:s}=e,o=new a.a(e);return this._tilemapCache.fetchAvailabilityUpsample(i,l,s,o,t).then(()=>(o.world=e.world,o)).catch(e=>{if(Object(r.m)(e))throw e;return null})}return this._getIndexedDataKey(e)}forEach(e,t,i,r,l){this._callback=l,this._maxLevel=t+e,this._forEach(this._tilemap,t,i,r)}_forEach(e,t,i,r){0!==e&&(this._callback(t,i,r),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*i,2*r),this._forEach(e[1],t+1,2*i,2*r+1),this._forEach(e[2],t+1,2*i+1,2*r),this._forEach(e[3],t+1,2*i+1,2*r+1)))}_getIndexedDataKey(e){const t=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return Promise.resolve(null);let i=e;for(;0!==i.level;)i=new a.a(i.level-1,i.row>>1,i.col>>1,i.world),t.push(i);let r,l,s=this._tilemap,o=t.pop();if(1===s)return Promise.resolve(o);for(;t.length;)if(r=t.pop(),l=(1&r.col)+((1&r.row)<<1),s){if(0===s[l]){o=null;break}if(1===s[l]){o=r;break}o=r,s=s[l]}return Promise.resolve(o)}}}}]);
//# sourceMappingURL=57.b510fbae.chunk.js.map