"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7374],{84552:(e,t,r)=>{r.d(t,{Z:()=>p});var i,s=r(43697),a=r(96674),o=r(35463),l=r(5600),n=(r(67676),r(80442),r(75215),r(52011)),d=r(78981);let u=i=class extends a.wq{constructor(e){super(e),this.value=0,this.unit="milliseconds"}toMilliseconds(){return(0,o.rJ)(this.value,this.unit,"milliseconds")}clone(){return new i({value:this.value,unit:this.unit})}};(0,s._)([(0,l.Cb)({type:Number,json:{write:!0},nonNullable:!0})],u.prototype,"value",void 0),(0,s._)([(0,l.Cb)({type:d.v.apiValues,json:{type:d.v.jsonValues,read:d.v.read,write:d.v.write},nonNullable:!0})],u.prototype,"unit",void 0),u=i=(0,s._)([(0,n.j)("esri.TimeInterval")],u);const p=u},68668:(e,t,r)=>{r.d(t,{G:()=>l,w:()=>n});var i=r(66643),s=r(80539),a=r(83379),o=r(70586);async function l(e,t){return await e.load(),n(e,t)}async function n(e,t){const r=[],l=(...e)=>{for(const t of e)(0,o.Wi)(t)||(Array.isArray(t)?l(...t):s.Z.isCollection(t)?t.forEach((e=>l(e))):a.Z.isLoadable(t)&&r.push(t))};t(l);let n=null;if(await(0,i.UI)(r,(async e=>{!1!==(await(0,i.q6)(function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?e.loadAll():e.load())).ok||n||(n=e)})),n)throw n.loadError;return e}},91040:(e,t,r)=>{r.d(t,{yZ:()=>s});var i=r(67900);function s(e,t){const r=t||e.extent,s=e.width,a=(0,i.c9)(r&&r.spatialReference);return r&&s?r.width/s*a*i.hd*96:0}},27374:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var i=r(43697),s=r(3172),a=r(92835),o=r(20102),l=r(3920),n=r(68668),d=r(70586),u=r(16453),p=r(95330),y=r(5600),c=(r(67676),r(80442),r(75215)),m=r(71715),h=r(52011),f=r(30556),v=r(31263),g=r(6570),b=r(91040),w=r(87085),I=r(54295),S=r(7944),_=r(17287),x=r(71612),C=r(17017),T=r(38009),E=r(16859),O=r(34760),D=r(72965),U=r(10343),L=r(28294),F=r(21506),j=r(15923),N=r(42033);function P(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?function(e,t){if(!e?.length)return null;const r=e.filter((e=>""!==e)).map((e=>`'${e}'`));return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}(e,t.floorInfo.floorField):null}var Z=r(32073);const R={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let M=class extends((0,l.p)(j.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=P(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,Z.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(R[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const r=P(this.floors,t),i=(0,N._)(r,t.definitionExpression);return(0,d.pC)(i)&&(e[t.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=t=>{const i=this.scale,s=0===i,a=0===t.minScale||i<=t.minScale,o=0===t.maxScale||i>=t.maxScale;t.visible&&(s||a&&o)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((t,r)=>e[r]!==t))?e:i}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,i._)([(0,y.Cb)({readOnly:!0})],M.prototype,"dynamicLayers",null),(0,i._)([(0,y.Cb)()],M.prototype,"floors",void 0),(0,i._)([(0,y.Cb)({readOnly:!0})],M.prototype,"hasDynamicLayers",null),(0,i._)([(0,y.Cb)()],M.prototype,"layer",null),(0,i._)([(0,y.Cb)({readOnly:!0})],M.prototype,"layers",null),(0,i._)([(0,y.Cb)({readOnly:!0})],M.prototype,"layerDefs",null),(0,i._)([(0,y.Cb)({type:Number})],M.prototype,"scale",void 0),(0,i._)([(0,y.Cb)(F.qG)],M.prototype,"timeExtent",void 0),(0,i._)([(0,y.Cb)({readOnly:!0})],M.prototype,"version",null),(0,i._)([(0,y.Cb)({readOnly:!0})],M.prototype,"visibleSublayers",null),M=(0,i._)([(0,h.j)("esri.layers.mixins.ExportImageParameters")],M);var k=r(49867),J=r(60199);let q=class extends((0,x.h)((0,L.n)((0,D.M)((0,U.x)((0,S.O)((0,_.Y)((0,T.q)((0,E.I)((0,u.R)((0,O.Q)((0,I.V)((0,C.N)((0,l.p)(w.Z)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,d.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(p.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,i){if(!this.loaded||!e)return;const s=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=(0,v.M9)(i.origin);if(e===v.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;a=(0,Z.QV)(s,e,v.s3.SERVICE)}else if(e>v.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");a=(0,Z.QV)(s,e.sublayers,(0,v.M9)(e.origin))}}const o=[],l={writeSublayerStructure:a,...i};let n=a;s.forEach((e=>{const t=e.write({},l);o.push(t),n=n||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),n&&(t.visibleLayers=s.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,i){const s=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new M({layer:this,floors:i?.floors,scale:(0,b.yZ)({extent:e,width:t})*s}),o=a.toJSON();a.destroy();const l=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},n=e&&e.spatialReference,d=n.wkid||JSON.stringify(n.toJSON());o.dpi*=s;const u={};if(i?.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();u.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(u.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:d,imageSR:d,size:t+","+r,...o,...l,...u}}async fetchImage(e,t,r,i){const a={responseType:"image",signal:i?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,r,i),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(null!=a.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)throw new o.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:a.query});return(0,s.default)(l,a).then((e=>e.data)).catch((e=>{if((0,p.D_)(e))throw e;throw new o.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:e})}))}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,s.default)(this.url,t),{extent:i,fullExtent:o,timeExtent:l}=r,n=i||o;return{fullExtent:n&&g.Z.fromJSON(n),timeExtent:l&&a.Z.fromJSON({start:l[0],end:l[1]})}}loadAll(){return(0,n.G)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,J.D)(this,e)}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,s.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,y.Cb)({type:Boolean})],q.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,y.Cb)()],q.prototype,"dpi",void 0),(0,i._)([(0,y.Cb)()],q.prototype,"gdbVersion",void 0),(0,i._)([(0,y.Cb)()],q.prototype,"imageFormat",void 0),(0,i._)([(0,m.r)("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),(0,i._)([(0,y.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),(0,i._)([(0,y.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),(0,i._)([(0,y.Cb)()],q.prototype,"imageTransparency",void 0),(0,i._)([(0,y.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),(0,i._)([(0,y.Cb)({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),(0,i._)([(0,y.Cb)({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),(0,i._)([(0,y.Cb)({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),(0,i._)([(0,y.Cb)()],q.prototype,"sourceJSON",void 0),(0,i._)([(0,y.Cb)({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),(0,i._)([(0,f.c)("sublayers",{layers:{type:[k.Z]},visibleLayers:{type:[c.z8]}})],q.prototype,"writeSublayers",null),(0,i._)([(0,y.Cb)({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),(0,i._)([(0,y.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),(0,i._)([(0,y.Cb)(F.HQ)],q.prototype,"url",void 0),q=(0,i._)([(0,h.j)("esri.layers.MapImageLayer")],q);const A=q},16859:(e,t,r)=>{r.d(t,{I:()=>w});var i=r(43697),s=r(40330),a=r(3172),o=r(66643),l=r(20102),n=r(92604),d=r(70586),u=r(95330),p=r(17452),y=r(5600),c=(r(67676),r(80442),r(75215),r(71715)),m=r(52011),h=r(30556),f=r(65587),v=r(15235),g=r(86082);const b=n.Z.getLogger("esri.layers.mixins.PortalLayer"),w=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem?.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new v.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(8062).then(r.bind(r,18062));return(0,u.k_)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,u.D_)(e)||b.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,u.r9)(e),!0))))}async _fetchUserHasEditingPrivileges(e){const t=this.url?s.id?.findCredential(this.url):null;if(!t)return!0;const r=I.credential===t?I.user:await this._fetchEditingUser(e);return I.credential=t,I.user=r,(0,d.Wi)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=s.id.findServerInfo(this.url);if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,l=f.Z.getDefault();if(l&&l.loaded&&(0,p.Fv)(l.restUrl)===(0,p.Fv)(i))return l.user;const n=`${i}/community/self`,u=(0,d.pC)(e)?e.signal:null,y=await(0,o.q6)((0,a.default)(n,{authMode:"no-prompt",query:{f:"json"},signal:u}));return y.ok?g.default.fromJSON(y.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||f.Z.getDefault());return r&&i&&!(0,p.tm)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,y.Cb)({type:v.default})],t.prototype,"portalItem",null),(0,i._)([(0,c.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,h.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,y.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,y.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,i._)([(0,m.j)("esri.layers.mixins.PortalLayer")],t),t},I={credential:null,user:null}},28294:(e,t,r)=>{r.d(t,{n:()=>y});var i=r(43697),s=r(92835),a=r(84552),o=r(5600),l=(r(67676),r(80442),r(75215),r(71715)),n=r(52011),d=r(35671),u=r(30547),p=r(78981);const y=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const r=t.timeInfo.exportOptions;if(!r)return null;const i=r.timeOffset,s=p.v.fromJSON(r.timeOffsetUnits);return i&&s?new a.Z({value:i,unit:s}):null}set timeInfo(e){(0,d.UF)(e,this.fieldsIndex),this._set("timeInfo",e)}};return(0,i._)([(0,o.Cb)({type:s.Z,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,i._)([(0,o.Cb)({type:a.Z})],t.prototype,"timeOffset",void 0),(0,i._)([(0,l.r)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,i._)([(0,o.Cb)({value:null,type:u.Z,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,i._)([(0,o.Cb)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=(0,i._)([(0,n.j)("esri.layers.mixins.TemporalLayer")],t),t}},30547:(e,t,r)=>{r.d(t,{Z:()=>b});var i,s=r(43697),a=r(92835),o=r(84552),l=r(96674),n=r(22974),d=r(70586),u=r(5600),p=(r(75215),r(71715)),y=r(52011),c=r(30556);r(67676),r(80442);let m=i=class extends l.wq{constructor(e){super(e),this.respectsDaylightSaving=!1,this.timezone=null}readRespectsDaylightSaving(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}clone(){const{respectsDaylightSaving:e,timezone:t}=this;return new i({respectsDaylightSaving:e,timezone:t})}};(0,s._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"respectsDaylightSaving",void 0),(0,s._)([(0,p.r)("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],m.prototype,"readRespectsDaylightSaving",null),(0,s._)([(0,u.Cb)({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],m.prototype,"timezone",void 0),m=i=(0,s._)([(0,y.j)("esri.layers.support.TimeReference")],m);const h=m;var f,v=r(78981);let g=f=class extends l.wq{constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const r=new Date(t.timeExtent[0]),i=new Date(t.timeExtent[1]);return new a.Z({start:r,end:i})}writeFullTimeExtent(e,t){e&&(0,d.pC)(e.start)&&(0,d.pC)(e.end)?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?new o.Z({value:t.timeInterval,unit:v.v.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new o.Z({value:t.defaultTimeInterval,unit:v.v.fromJSON(t.defaultTimeIntervalUnits)}):null}writeInterval(e,t){if(e){const r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null}clone(){const{cumulative:e,endField:t,hasLiveData:r,interval:i,startField:s,timeReference:a,fullTimeExtent:o,trackIdField:l,useTime:d}=this;return new f({cumulative:e,endField:t,hasLiveData:r,interval:i,startField:s,timeReference:(0,n.d9)(a),fullTimeExtent:(0,n.d9)(o),trackIdField:l,useTime:d})}};(0,s._)([(0,u.Cb)({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],g.prototype,"cumulative",void 0),(0,s._)([(0,u.Cb)({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],g.prototype,"endField",void 0),(0,s._)([(0,u.Cb)({type:a.Z,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"fullTimeExtent",void 0),(0,s._)([(0,p.r)("fullTimeExtent",["timeExtent"])],g.prototype,"readFullTimeExtent",null),(0,s._)([(0,c.c)("fullTimeExtent")],g.prototype,"writeFullTimeExtent",null),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],g.prototype,"hasLiveData",void 0),(0,s._)([(0,u.Cb)({type:o.Z,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"interval",void 0),(0,s._)([(0,p.r)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],g.prototype,"readInterval",null),(0,s._)([(0,c.c)("interval")],g.prototype,"writeInterval",null),(0,s._)([(0,u.Cb)({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],g.prototype,"startField",void 0),(0,s._)([(0,u.Cb)({type:h,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"timeReference",void 0),(0,s._)([(0,u.Cb)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"trackIdField",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],g.prototype,"useTime",void 0),g=f=(0,s._)([(0,y.j)("esri.layers.support.TimeInfo")],g);const b=g},60199:(e,t,r)=>{r.d(t,{D:()=>a});var i=r(66677);const s=[];function a(e,t){if((0,i.M8)(e.url))return!0;const{wkid:r}=t;for(const t of s){if(e.version>=t[0])return!0;if("function"==typeof t[1]&&(t[1]=t[1]()),t[1].has(r))return!1}return!0}s.push([10.91,()=>{const e=new Set([9709,9716,9741,9761,9766]);for(let t=9712;t<=9713;t++)e.add(t);for(let t=9748;t<=9749;t++)e.add(t);for(let t=20904;t<=20932;t++)e.add(t);for(let t=21004;t<=21032;t++)e.add(t);for(let t=21207;t<=21264;t++)e.add(t);for(let t=21307;t<=21364;t++)e.add(t);for(let t=102759;t<=102760;t++)e.add(t);for(let t=102901;t<=102960;t++)e.add(t);return e}]),s.push([10.9,()=>{const e=new Set([9300,9354,9364,9367,9373,9377,9387,9456,9473,9498,9678,9680,29874,103599,103872,104028]);for(let t=9356;t<=9360;t++)e.add(t);for(let t=9404;t<=9407;t++)e.add(t);for(let t=9476;t<=9482;t++)e.add(t);for(let t=9487;t<=9494;t++)e.add(t);for(let t=9697;t<=9699;t++)e.add(t);return e}]),s.push([10.81,()=>{const e=new Set([9265,9333,103598,103699]);for(let t=9248;t<=9254;t++)e.add(t);for(let t=9271;t<=9273;t++)e.add(t);for(let t=9284;t<=9285;t++)e.add(t);for(let t=21453;t<=21463;t++)e.add(t);return e}]),s.push([10.8,()=>{const e=new Set([8088,8395,8428,8433,8531,8687,8692,8694,8699,8900,9003,9006,9009,9012,9017,9191]);for(let t=8035;t<=8036;t++)e.add(t);for(let t=8455;t<=8456;t++)e.add(t);for(let t=8518;t<=8529;t++)e.add(t);for(let t=8533;t<=8536;t++)e.add(t);for(let t=8538;t<=8540;t++)e.add(t);for(let t=8677;t<=8679;t++)e.add(t);for(let t=8902;t<=8903;t++)e.add(t);for(let t=8907;t<=8910;t++)e.add(t);for(let t=8949;t<=8951;t++)e.add(t);for(let t=8972;t<=8987;t++)e.add(t);for(let t=9039;t<=9040;t++)e.add(t);for(let t=9068;t<=9069;t++)e.add(t);for(let t=9140;t<=9141;t++)e.add(t);for(let t=9148;t<=9150;t++)e.add(t);for(let t=9153;t<=9159;t++)e.add(t);for(let t=9205;t<=9218;t++)e.add(t);for(let t=9221;t<=9222;t++)e.add(t);for(let t=54098;t<=54101;t++)e.add(t);return e}]),s.push([10.71,()=>{const e=new Set([6316]);for(let t=8351;t<=8353;t++)e.add(t);for(let t=9294;t<=9297;t++)e.add(t);for(let t=103586;t<=103594;t++)e.add(t);for(let t=103696;t<=103698;t++)e.add(t);return e}]),s.push([10.7,()=>{const e=new Set([8387,8391,8427,8545,8682,8685,8818,31370,104022,104024,104975]);for(let t=8065;t<=8068;t++)e.add(t);for(let t=8082;t<=8083;t++)e.add(t);for(let t=8379;t<=8385;t++)e.add(t);for(let t=8836;t<=8840;t++)e.add(t);for(let t=8857;t<=8860;t++)e.add(t);for(let t=53035;t<=53037;t++)e.add(t);for(let t=54090;t<=54091;t++)e.add(t);for(let t=102498;t<=102499;t++)e.add(t);return e}]),s.push([10.61,()=>new Set([102497])]),s.push([10.6,()=>{const e=new Set([7803,7805,7887,8086,8232,8237,8240,8246,8249,8252,8255,9019,9391]);for(let t=7755;t<=7787;t++)e.add(t);for(let t=7791;t<=7795;t++)e.add(t);for(let t=7799;t<=7801;t++)e.add(t);for(let t=7825;t<=7831;t++)e.add(t);for(let t=7877;t<=7878;t++)e.add(t);for(let t=7882;t<=7883;t++)e.add(t);for(let t=7991;t<=7992;t++)e.add(t);for(let t=8042;t<=8043;t++)e.add(t);for(let t=8058;t<=8059;t++)e.add(t);for(let t=8311;t<=8348;t++)e.add(t);for(let t=9060;t<=9067;t++)e.add(t);for(let t=102562;t<=102568;t++)e.add(t);for(let t=102799;t<=102900;t++)e.add(t);return e}]),s.push([10.51,()=>{const e=new Set([7683,7881,7886,7899,8888,9e3]);for(let t=8013;t<=8032;t++)e.add(t);for(let t=9053;t<=9057;t++)e.add(t);for(let t=104017;t<=104018;t++)e.add(t);for(let t=104971;t<=104974;t++)e.add(t);return e}]),s.push([10.5,()=>{const e=new Set([6962,7035,7037,7039,7041,7084,7086,7133,7798,102399]);for(let t=4087;t<=4088;t++)e.add(t);for(let t=5896;t<=5899;t++)e.add(t);for(let t=7005;t<=7007;t++)e.add(t);for(let t=7057;t<=7070;t++)e.add(t);for(let t=7073;t<=7082;t++)e.add(t);for(let t=7109;t<=7128;t++)e.add(t);for(let t=7844;t<=7859;t++)e.add(t);return e}])},78981:(e,t,r)=>{r.d(t,{v:()=>i});const i=(0,r(35454).w)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0})}}]);