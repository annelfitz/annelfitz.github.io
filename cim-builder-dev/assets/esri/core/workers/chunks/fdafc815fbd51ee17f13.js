"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8297],{10699:(e,t,r)=>{r.d(t,{I:()=>n});var i=r(43697),o=r(52011);let s=0;const n=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+s++})}};return t=(0,i._)([(0,o.j)("esri.core.Identifiable")],t),t};let a=class extends(n(class{})){};a=(0,i._)([(0,o.j)("esri.core.Identifiable")],a)},16453:(e,t,r)=>{r.d(t,{R:()=>b,w:()=>S});var i=r(43697),o=r(15923),s=r(70586),n=r(41103),a=r(22974),l=r(31263);class p{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(l.kk),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new p,r=this._originStores[l.s3.DEFAULTS];r&&r.forEach(((e,r)=>{t.set(r,(0,a.d9)(e),l.s3.DEFAULTS)}));for(let r=l.s3.SERVICE;r<l.kk;r++){const i=this._originStores[r];i&&i.forEach(((i,o)=>{e&&e.has(o)||t.set(o,(0,a.d9)(i),r)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=l.s3.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||(0,s.j0)(this._propertyOriginMap.get(e))<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=l.s3.USER){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r&&r.get(e),o=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),o!==i}originOf(e){return this._propertyOriginMap.get(e)||l.s3.DEFAULTS}forEach(e){this._values.forEach(e)}}var c=r(50549),u=r(1153),d=r(52011);const y=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,s.j0)((0,u.vw)(this)),r=t.store,i=new p;t.store=i,(0,n.M)(t,r,i)}read(e,t){(0,c.i)(this,e,t)}getAtOrigin(e,t){const r=h(this),i=(0,l.M9)(t);if("string"==typeof e)return r.get(e,i);const o={};return e.forEach((e=>{o[e]=r.get(e,i)})),o}originOf(e){return(0,l.x3)(this.originIdOf(e))}originIdOf(e){return h(this).originOf(e)}revert(e,t){const r=h(this),i=(0,l.M9)(t),o=(0,u.vw)(this);let s;s="string"==typeof e?"*"===e?r.keys(i):[e]:e,s.forEach((e=>{o.invalidate(e),r.revert(e,i),o.commit(e)}))}};return t=(0,i._)([(0,d.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function h(e){return(0,u.vw)(e).store}let m=class extends(y(o.Z)){};m=(0,i._)([(0,d.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],m);var g=r(76169);const f=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return v(this).delete(e,(0,l.M9)(t))}write(e={},t){return(0,g.c)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,u.vw)(this).setAtOrigin(e,t,(0,l.M9)(r))}removeOrigin(e){const t=v(this),r=(0,l.M9)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),l.s3.USER)}updateOrigin(e,t){const r=v(this),i=(0,l.M9)(t),o=this.get(e);for(let t=i+1;t<l.kk;++t)r.delete(e,t);r.set(e,o,i)}toJSON(e){return this.write({},e)}};return t=(0,i._)([(0,d.j)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function v(e){return(0,u.vw)(e).store}const b=e=>{let t=class extends(f(y(e))){constructor(...e){super(...e)}};return t=(0,i._)([(0,d.j)("esri.core.MultiOriginJSONSupport")],t),t};let S=class extends(b(o.Z)){};S=(0,i._)([(0,d.j)("esri.core.MultiOriginJSONSupport")],S)},79235:(e,t,r)=>{r.d(t,{Z:()=>b});var i,o=r(43697),s=r(67676),n=r(35454),a=r(96674),l=r(67900),p=r(20941),c=r(5600),u=(r(80442),r(75215),r(71715)),d=r(52011),y=r(30556);const h=(0,n.w)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),m=h.jsonValues.slice();(0,s.e$)(m,"orthometric");const g=(0,n.w)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let f=i=class extends a.wq{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return h.write(e,t,r)}readHeightModel(e,t,r){return h.read(e)||(r&&r.messages&&r.messages.push(function(e,t){return new p.Z("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(e,{context:r})),null)}readHeightUnit(e,t,r){return g.read(e)||(r&&r.messages&&r.messages.push(v(e,{context:r})),null)}readHeightUnitService(e,t,r){return(0,l.$C)(e)||g.read(e)||(r&&r.messages&&r.messages.push(v(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new i({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=(0,l.cM)(t);return new i({heightModel:e.heightModel,heightUnit:r,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new i;return t.read(e,{origin:"web-scene"}),t}};function v(e,t){return new p.Z("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}(0,o._)([(0,c.Cb)({type:h.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:m,default:"ellipsoidal"}}}})],f.prototype,"heightModel",void 0),(0,o._)([(0,y.c)("web-scene","heightModel")],f.prototype,"writeHeightModel",null),(0,o._)([(0,u.r)(["web-scene","service"],"heightModel")],f.prototype,"readHeightModel",null),(0,o._)([(0,c.Cb)({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g.jsonValues,write:g.write}}}})],f.prototype,"heightUnit",void 0),(0,o._)([(0,u.r)("web-scene","heightUnit")],f.prototype,"readHeightUnit",null),(0,o._)([(0,u.r)("service","heightUnit")],f.prototype,"readHeightUnitService",null),(0,o._)([(0,c.Cb)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],f.prototype,"vertCRS",void 0),(0,o._)([(0,u.r)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],f.prototype,"readVertCRS",null),f=i=(0,o._)([(0,d.j)("esri.geometry.HeightModelInfo")],f);const b=f},4717:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Q});var i=r(43697),o=r(20102),s=r(61247),n=r(70586),a=r(16453),l=r(95330),p=r(17445),c=r(5600),u=(r(67676),r(80442),r(75215),r(71715)),d=r(52011),y=r(81153),h=r(17452),m=r(41123),g=r(7628),f=r(31263);function v(e){return b[function(e){return e instanceof Blob?e.type:function(e){const t=(0,h.Ml)(e);return _[t]||S}(e.url)}(e)]||w}const b={},S="text/plain",w=b[S],_={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const e in _)b[_[e]]=e;var C=r(25929);function I(e){const t=(0,n.pC)(e)&&e.origins?e.origins:[void 0];return(r,i)=>{const o=function(e,t,r){if((0,n.pC)(e)&&"resource"===e.type)return function(e,t,r){const i=(0,g.VZ)(t,r);return{type:String,read:(e,t,r)=>{const o=(0,C.r)(e,t,r);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{writer(t,o,s,a){if(!a||!a.resources)return"string"==typeof t?void(o[s]=(0,C.t)(t,a)):void(o[s]=t.write({},a));const l=function(e){return(0,n.Wi)(e)?null:"string"==typeof e?e:e.url}(t),p=l?(0,C.t)(l,{...a,verifyItemRelativeUrls:a&&a.verifyItemRelativeUrls?{writtenUrls:a.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},C.M.NO):null,c=i.type!==String&&(!(0,y.l)(this)||a&&a.origin&&this.originIdOf(r)>(0,f.M9)(a.origin));a&&a.portalItem&&(0,n.pC)(p)&&!(0,h.YP)(p)?c?function(e,t,r,i,o,s,n,a){const l=n.portalItem.resourceFromPath(i),p=O(r,i,n);v(p)===(0,h.Ml)(l.path)?(M(e,t,l,p,n.resources.toUpdate),o[s]=i):x(e,t,r,i,o,s,n,a)}(this,r,t,p,o,s,a,e):function(e,t,r,i){i.resources.toKeep.push({resource:i.portalItem.resourceFromPath(e)}),t[r]=e}(p,o,s,a):a&&a.portalItem&&((0,n.Wi)(p)||(0,n.pC)((0,C.i)(p))||(0,h.jc)(p)||c)?x(this,r,t,p,o,s,a,e):o[s]=p}}}}(e,t,r);switch((0,n.pC)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=C.p;return{read:e,write:t}}}}(e,r,i);for(const e of t){const t=(0,c.CJ)(r,e,i);for(const e in o)t[e]=o[e]}}}function x(e,t,i,o,s,a,l,p){const c=(0,m.D)(),u=O(i,o,l),d=(0,h.v_)((0,n.U2)(p,"prefix"),c),y=`${d}.${v(u)}`,g=l.portalItem.resourceFromPath(y);(0,h.jc)(o)&&l.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(r.bind(r,3172))).default,{data:i}=await t(e,{responseType:"blob"});return i}(o).then((e=>{g.path=`${d}.${v(e)}`,s[a]=g.itemRelativeUrl})).catch((()=>{}))),M(e,t,g,u,l.resources.toAdd),s[a]=g.itemRelativeUrl}function M(e,t,r,i,o){o.push({resource:r,content:i,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function O(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}var L,j=r(87085),T=r(54295),R=r(17287),E=r(38009),N=r(16859),U=r(72965),A=r(32271),G=r(21506),k=r(51161),D=r(3172),Z=r(80539),F=r(96674),V=(r(66577),r(22974)),q=r(20941),J=r(30556),P=r(44547),B=r(38913);let $=L=class extends F.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,i){if(i.layer&&i.layer.spatialReference&&!i.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,P.Up)(e.spatialReference,i.layer.spatialReference))return void(i&&i.messages&&i.messages.push(new q.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:i.layer.spatialReference,context:i})));const o=new B.Z;(0,P.Wt)(e,o,i.layer.spatialReference),t[r]=o.toJSON(i)}else t[r]=e.toJSON(i);delete t[r].spatialReference}clone(){return new L({geometry:(0,V.d9)(this.geometry),type:this.type})}};(0,i._)([(0,c.Cb)({type:B.Z}),I()],$.prototype,"geometry",void 0),(0,i._)([(0,J.c)(["web-scene","portal-item"],"geometry")],$.prototype,"writeGeometry",null),(0,i._)([(0,c.Cb)({type:["clip","mask","replace"],nonNullable:!0}),I()],$.prototype,"type",void 0),$=L=(0,i._)([(0,d.j)("esri.layers.support.SceneModification")],$);const H=$;var W;let z=W=class extends((0,F.eC)(Z.Z.ofType(H))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}clone(){return new W({url:this.url,items:this.items.map((e=>e.clone()))})}_readModifications(e,t){for(const r of e)this.add(H.fromJSON(r,t))}static fromJSON(e,t){const r=new W;return r._readModifications(e,t),r}static async fromUrl(e,t,r){const i={url:(0,h.mN)(e),origin:"service"},o=await(0,D.default)(e,{responseType:"json",signal:(0,n.U2)(r,"signal")}),s=t.toJSON(),a=[];for(const e of o.data)a.push(H.fromJSON({...e,geometry:{...e.geometry,spatialReference:s}},i));return new W({url:e,items:a})}};(0,i._)([(0,c.Cb)({type:String})],z.prototype,"url",void 0),z=W=(0,i._)([(0,d.j)("esri.layers.support.SceneModifications")],z);const K=z;let Y=class extends((0,A.Vt)((0,R.Y)((0,E.q)((0,N.I)((0,U.M)((0,a.R)((0,T.V)(j.Z)))))))){constructor(...e){super(...e),this.handles=new s.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add((0,p.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),p.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:(0,C.f)(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=(0,n.U2)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(e){(0,l.r9)(e)}if(await this._fetchService(t),(0,n.pC)(this._modificationsSource)){const t=await K.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!(0,n.Wi)(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(A.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(A.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new o.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new o.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new o.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,i._)([(0,c.Cb)({type:String,readOnly:!0})],Y.prototype,"geometryType",void 0),(0,i._)([(0,c.Cb)({type:["show","hide"]})],Y.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)({type:["IntegratedMeshLayer"]})],Y.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.Cb)({json:{read:!1},readOnly:!0})],Y.prototype,"type",void 0),(0,i._)([(0,c.Cb)({type:k.U4,readOnly:!0})],Y.prototype,"nodePages",void 0),(0,i._)([(0,c.Cb)({type:[k.QI],readOnly:!0})],Y.prototype,"materialDefinitions",void 0),(0,i._)([(0,c.Cb)({type:[k.Yh],readOnly:!0})],Y.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,c.Cb)({type:[k.H3],readOnly:!0})],Y.prototype,"geometryDefinitions",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],Y.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,c.Cb)({type:K}),I({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],Y.prototype,"modifications",void 0),(0,i._)([(0,u.r)(["web-scene","portal-item"],"modifications")],Y.prototype,"readModifications",null),(0,i._)([(0,c.Cb)(G.PV)],Y.prototype,"elevationInfo",void 0),(0,i._)([(0,c.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],Y.prototype,"path",void 0),Y=(0,i._)([(0,d.j)("esri.layers.IntegratedMeshLayer")],Y);const Q=Y},87085:(e,t,r)=>{r.d(t,{Z:()=>S});var i=r(43697),o=(r(66577),r(3172)),s=r(20102),n=r(32448),a=r(10699),l=r(83379),p=r(92604),c=r(95330),u=r(17452),d=r(5600),y=(r(67676),r(80442),r(75215),r(52011)),h=r(68773);const m=p.Z.getLogger("esri.layers.support.fromPortalItem");var g=r(6570),f=r(82971);let v=0,b=class extends(n.Z.EventedMixin((0,a.I)(l.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new g.Z(-180,-90,180,90,f.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+v++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=f.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await r.e(3529).then(r.bind(r,63529))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},i=await Promise.all([r.e(4547),r.e(8008)]).then(r.bind(r,28008));try{return await i.fromItem(t)}catch(e){const r=t&&t.portalItem,i=r&&r.id||"unset",o=r&&r.portal&&r.portal.url||h.Z.portalUrl;throw m.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+o+"', id: '"+i+"')",e),e}}(e)}initialize(){this.when().catch((e=>{(0,c.D_)(e)||p.Z.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){if(this.parent){const e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url;return e?(0,u.mN)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,o.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new s.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,d.Cb)({type:String})],b.prototype,"attributionDataUrl",void 0),(0,i._)([(0,d.Cb)({type:g.Z})],b.prototype,"fullExtent",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],b.prototype,"hasAttributionData",null),(0,i._)([(0,d.Cb)({type:String,clonable:!1})],b.prototype,"id",void 0),(0,i._)([(0,d.Cb)({type:Boolean,nonNullable:!0})],b.prototype,"legendEnabled",void 0),(0,i._)([(0,d.Cb)({type:["show","hide","hide-children"]})],b.prototype,"listMode",void 0),(0,i._)([(0,d.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],b.prototype,"opacity",void 0),(0,i._)([(0,d.Cb)({clonable:!1})],b.prototype,"parent",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],b.prototype,"parsedUrl",null),(0,i._)([(0,d.Cb)({type:Boolean})],b.prototype,"popupEnabled",void 0),(0,i._)([(0,d.Cb)({type:Boolean})],b.prototype,"attributionVisible",void 0),(0,i._)([(0,d.Cb)({type:f.Z})],b.prototype,"spatialReference",void 0),(0,i._)([(0,d.Cb)({type:String})],b.prototype,"title",void 0),(0,i._)([(0,d.Cb)({readOnly:!0,json:{read:!1}})],b.prototype,"type",void 0),(0,i._)([(0,d.Cb)()],b.prototype,"url",void 0),(0,i._)([(0,d.Cb)({type:Boolean,nonNullable:!0})],b.prototype,"visible",void 0),b=(0,i._)([(0,y.j)("esri.layers.Layer")],b);const S=b},38009:(e,t,r)=>{r.d(t,{q:()=>y});var i=r(43697),o=r(20102),s=r(17452),n=r(5600),a=(r(67676),r(80442),r(75215),r(52011)),l=r(30556),p=r(50549),c=r(76169);const u={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,OGCFeatureLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}};var d=r(21506);const y=e=>{let t=class extends e{constructor(){super(...arguments),this.title=null}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&(0,c.d)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){!e||i&&"tables"===i.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=e||"Layer"}read(e,t){t&&(t.layer=this),(0,p.$)(this,e,(t=>super.read(e,t)),t)}write(e,t){if(t?.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=u[e];let i=r&&r[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),!i)return t.messages?.push(new o.Z("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof o.Z&&"web-document-write:property-required"===e.name)).length;return(0,s.jc)(r?.url)?(t?.messages?.push(new o.Z("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&i?null:r}beforeSave(){}};return(0,i._)([(0,n.Cb)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),(0,i._)([(0,n.Cb)(d.rT)],t.prototype,"listMode",void 0),(0,i._)([(0,l.c)("listMode")],t.prototype,"writeListMode",null),(0,i._)([(0,n.Cb)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),(0,i._)([(0,l.c)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),(0,i._)([(0,n.Cb)(d.Oh)],t.prototype,"opacity",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),(0,i._)([(0,l.c)("title")],t.prototype,"writeTitle",null),(0,i._)([(0,n.Cb)({type:Boolean,json:{name:"visibility"}})],t.prototype,"visible",void 0),t=(0,i._)([(0,a.j)("esri.layers.mixins.OperationalLayer")],t),t}},72965:(e,t,r)=>{r.d(t,{M:()=>n});var i=r(43697),o=r(5600),s=(r(67676),r(80442),r(75215),r(52011));const n=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const r=this._get("effectiveScaleRange");return r&&r.minScale===e.minScale&&r.maxScale===e.maxScale?r:e}};return(0,i._)([(0,o.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,i._)([(0,o.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,i._)([(0,s.j)("esri.layers.mixins.ScaleRangeLayer")],t),t}},51161:(e,t,r)=>{r.d(t,{H3:()=>f,QI:()=>u,U4:()=>l,Yh:()=>y});var i=r(43697),o=r(96674),s=r(5600),n=(r(67676),r(80442),r(75215),r(36030)),a=r(52011);let l=class extends o.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,i._)([(0,s.Cb)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,i._)([(0,s.Cb)({type:Number})],l.prototype,"rootIndex",void 0),(0,i._)([(0,s.Cb)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,i._)([(0,a.j)("esri.layer.support.I3SNodePageDefinition")],l);let p=class extends o.wq{constructor(){super(...arguments),this.factor=1}};(0,i._)([(0,s.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],p.prototype,"id",void 0),(0,i._)([(0,s.Cb)({type:Number})],p.prototype,"factor",void 0),p=(0,i._)([(0,a.j)("esri.layer.support.I3SMaterialTexture")],p);let c=class extends o.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,i._)([(0,s.Cb)({type:[Number]})],c.prototype,"baseColorFactor",void 0),(0,i._)([(0,s.Cb)({type:p})],c.prototype,"baseColorTexture",void 0),(0,i._)([(0,s.Cb)({type:p})],c.prototype,"metallicRoughnessTexture",void 0),(0,i._)([(0,s.Cb)({type:Number})],c.prototype,"metallicFactor",void 0),(0,i._)([(0,s.Cb)({type:Number})],c.prototype,"roughnessFactor",void 0),c=(0,i._)([(0,a.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],c);let u=class extends o.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,i._)([(0,n.J)({opaque:"opaque",mask:"mask",blend:"blend"})],u.prototype,"alphaMode",void 0),(0,i._)([(0,s.Cb)({type:Number})],u.prototype,"alphaCutoff",void 0),(0,i._)([(0,s.Cb)({type:Boolean})],u.prototype,"doubleSided",void 0),(0,i._)([(0,n.J)({none:"none",back:"back",front:"front"})],u.prototype,"cullFace",void 0),(0,i._)([(0,s.Cb)({type:p})],u.prototype,"normalTexture",void 0),(0,i._)([(0,s.Cb)({type:p})],u.prototype,"occlusionTexture",void 0),(0,i._)([(0,s.Cb)({type:p})],u.prototype,"emissiveTexture",void 0),(0,i._)([(0,s.Cb)({type:[Number]})],u.prototype,"emissiveFactor",void 0),(0,i._)([(0,s.Cb)({type:c})],u.prototype,"pbrMetallicRoughness",void 0),u=(0,i._)([(0,a.j)("esri.layer.support.I3SMaterialDefinition")],u);let d=class extends o.wq{};(0,i._)([(0,s.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),(0,i._)([(0,n.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,i._)([(0,a.j)("esri.layer.support.I3STextureFormat")],d);let y=class extends o.wq{constructor(){super(...arguments),this.atlas=!1}};(0,i._)([(0,s.Cb)({type:[d]})],y.prototype,"formats",void 0),(0,i._)([(0,s.Cb)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,i._)([(0,a.j)("esri.layer.support.I3STextureSetDefinition")],y);let h=class extends o.wq{};(0,i._)([(0,n.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),(0,i._)([(0,s.Cb)({type:Number})],h.prototype,"component",void 0),h=(0,i._)([(0,a.j)("esri.layer.support.I3SGeometryAttribute")],h);let m=class extends o.wq{};(0,i._)([(0,n.J)({draco:"draco"})],m.prototype,"encoding",void 0),(0,i._)([(0,s.Cb)({type:[String]})],m.prototype,"attributes",void 0),m=(0,i._)([(0,a.j)("esri.layer.support.I3SGeometryCompressedAttributes")],m);let g=class extends o.wq{constructor(){super(...arguments),this.offset=0}};(0,i._)([(0,s.Cb)({type:Number})],g.prototype,"offset",void 0),(0,i._)([(0,s.Cb)({type:h})],g.prototype,"position",void 0),(0,i._)([(0,s.Cb)({type:h})],g.prototype,"normal",void 0),(0,i._)([(0,s.Cb)({type:h})],g.prototype,"uv0",void 0),(0,i._)([(0,s.Cb)({type:h})],g.prototype,"color",void 0),(0,i._)([(0,s.Cb)({type:h})],g.prototype,"uvRegion",void 0),(0,i._)([(0,s.Cb)({type:h})],g.prototype,"featureId",void 0),(0,i._)([(0,s.Cb)({type:h})],g.prototype,"faceRange",void 0),(0,i._)([(0,s.Cb)({type:m})],g.prototype,"compressedAttributes",void 0),g=(0,i._)([(0,a.j)("esri.layer.support.I3SGeometryBuffer")],g);let f=class extends o.wq{};(0,i._)([(0,n.J)({triangle:"triangle"})],f.prototype,"topology",void 0),(0,i._)([(0,s.Cb)()],f.prototype,"geometryBuffers",void 0),f=(0,i._)([(0,a.j)("esri.layer.support.I3SGeometryDefinition")],f)},21506:(e,t,r)=>{r.d(t,{qG:()=>S,PV:()=>g,id:()=>_,iR:()=>y,rn:()=>m,rT:()=>x,u1:()=>I,rO:()=>C,Oh:()=>v,bT:()=>b,C_:()=>d,Lx:()=>f,vg:()=>w,YI:()=>u,HQ:()=>h});var i=r(92835),o=r(6570),s=r(82971),n=r(25929),a=r(70586),l=(r(95330),r(35463)),p=r(20682),c=r(65242);const u={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},d={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},y={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},h={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:n.w}}},m={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},g={value:null,type:p.Z,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function f(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const v={type:Number,json:{origins:{"web-document":{write:!0,read:!0},"portal-item":{write:!0}}}},b={...v,json:{...v.json,origins:{"web-document":{...v.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?(0,c.b)(t.layerDefinition.drawingInfo.transparency):void 0:(0,c.b)(t.drawingInfo.transparency)}}},S={type:i.Z,readOnly:!0,get(){if(!this.layer?.timeInfo)return null;const{datesInUnknownTimezone:e,timeOffset:t,useViewTime:r}=this.layer,o=this.view?.timeExtent;let s=this.layer.timeExtent;e&&(s=function(e){if(!e)return e;const{start:t,end:r}=e;return new i.Z({start:(0,a.pC)(t)?(0,l.Nm)(t,t.getTimezoneOffset(),"minutes"):t,end:(0,a.pC)(r)?(0,l.Nm)(r,r.getTimezoneOffset(),"minutes"):r})}(s));let n=r?o&&s?o.intersection(s):o||s:s;if(!n||n.isEmpty||n.isAllTime)return n;t&&(n=n.offset(-t.value,t.unit)),e&&(n=function(e){if(!e)return e;const{start:t,end:r}=e;return new i.Z({start:(0,a.pC)(t)?(0,l.Nm)(t,-t.getTimezoneOffset(),"minutes"):t,end:(0,a.pC)(r)?(0,l.Nm)(r,-r.getTimezoneOffset(),"minutes"):r})}(n));const p=this._get("timeExtent");return n.equals(p)?p:n}},w={type:o.Z,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const r=o.Z.fromJSON(e);return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(r.spatialReference=s.Z.fromJSON(t.spatialReference)),r}}}},read:!1}},_={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},C={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},I={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}},x={json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}}},99282:(e,t,r)=>{r.d(t,{a:()=>s});var i=r(67900),o=r(68441);const s={inches:(0,i.En)(1,"meters","inches"),feet:(0,i.En)(1,"meters","feet"),"us-feet":(0,i.En)(1,"meters","us-feet"),yards:(0,i.En)(1,"meters","yards"),miles:(0,i.En)(1,"meters","miles"),"nautical-miles":(0,i.En)(1,"meters","nautical-miles"),millimeters:(0,i.En)(1,"meters","millimeters"),centimeters:(0,i.En)(1,"meters","centimeters"),decimeters:(0,i.En)(1,"meters","decimeters"),meters:(0,i.En)(1,"meters","meters"),kilometers:(0,i.En)(1,"meters","kilometers"),"decimal-degrees":1/(0,i.ty)(1,"meters",o.sv.radius)}},20682:(e,t,r)=>{r.d(t,{Z:()=>w});var i,o=r(43697),s=r(35454),n=r(96674),a=r(70586),l=r(5600),p=(r(67676),r(80442),r(75215),r(71715)),c=r(52011),u=r(30556),d=r(35671);let y=i=class extends n.wq{async collectRequiredFields(e,t){return(0,d.io)(e,t,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}};(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],y.prototype,"expression",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],y.prototype,"title",void 0),y=i=(0,o._)([(0,c.j)("esri.layers.support.FeatureExpressionInfo")],y);const h=y;var m=r(99282);const g=function(){const e=Object.keys(m.a);return e.sort(),e}();var f;const v=(0,s.w)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),b=new s.X({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let S=f=class extends n.wq{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,i){t[r]=e.write({},i),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):(0,a.pC)(e)||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new f({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};(0,o._)([(0,l.Cb)({type:h,json:{write:!0}})],S.prototype,"featureExpressionInfo",void 0),(0,o._)([(0,p.r)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],S.prototype,"readFeatureExpressionInfo",null),(0,o._)([(0,u.c)("featureExpressionInfo",{featureExpressionInfo:{type:h},"featureExpression.value":{type:[0]}})],S.prototype,"writeFeatureExpressionInfo",null),(0,o._)([(0,l.Cb)({type:v.apiValues,nonNullable:!0,json:{type:v.jsonValues,read:v.read,write:{writer:v.write,isRequired:!0}}})],S.prototype,"mode",null),(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],S.prototype,"offset",void 0),(0,o._)([(0,l.Cb)({type:g,json:{type:String,read:b.read,write:b.write}})],S.prototype,"unit",null),S=f=(0,o._)([(0,c.j)("esri.layers.support.ElevationInfo")],S);const w=S},65242:(e,t,r)=>{r.d(t,{a:()=>o,b:()=>s});var i=r(75215);function o(e){const t=(0,i.vU)(100*(1-e));return Math.max(0,Math.min(t,100))}function s(e){const t=1-e/100;return Math.max(0,Math.min(t,1))}}}]);