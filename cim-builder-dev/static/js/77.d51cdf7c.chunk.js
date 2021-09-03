(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[77,10],{647:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return c})),r.d(t,"contentToBlob",(function(){return b})),r.d(t,"fetchResources",(function(){return s})),r.d(t,"getSiblingOfSameType",(function(){return y})),r.d(t,"getSiblingOfSameTypeI",(function(){return h})),r.d(t,"removeAllResources",(function(){return p})),r.d(t,"removeResource",(function(){return l})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return d}));var o=r(45),a=r(9),i=r(3),n=r(14);async function s(e,t={},r){await e.load(r);const o=Object(n.z)(e.itemUrl,"resources"),{start:a=1,num:s=10,sortOrder:c="asc",sortField:l="created"}=t,p={query:{start:a,num:s,sortOrder:c,sortField:l,token:e.apiKey},signal:Object(i.g)(r,"signal")},u=await e.portal._request(o,p);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map(({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)}))}}async function c(e,t,r,o){if(!e.hasPath())throw new a.a(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const s=e.portalItem;await s.load(o);const c=Object(n.z)(s.userItemUrl,"add"===t?"addResources":"updateResources"),[l,p]=u(e.path),d=await b(r),y=new FormData;return l&&"."!==l&&y.append("resourcesPrefix",l),y.append("fileName",p),y.append("file",d,p),y.append("f","json"),Object(i.i)(o)&&o.access&&y.append("access",o.access),await s.portal._request(c,{method:"post",body:y,signal:Object(i.g)(o,"signal")}),e}async function l(e,t,r){if(!t.hasPath())throw new a.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=Object(n.z)(e.userItemUrl,"removeResources");await e.portal._request(o,{method:"post",query:{resource:t.path},signal:Object(i.g)(r,"signal")}),t.portalItem=null}async function p(e,t){await e.load(t);const r=Object(n.z)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:Object(i.g)(t,"signal")})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=function(e){const t=Object(n.n)(e);return Object(i.h)(t)?[e,""]:[e.slice(0,e.length-t.length-1),"."+t]}(e),[o,a]=u(t);return[o,a,r]}async function b(e){return e instanceof Blob?e:(await Object(o.default)(e.url,{responseType:"blob"})).data}function y(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath(Object(n.z)(r,t+o))}function h(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath(Object(n.z)(r,t+o))}},654:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r(45),a=r(9),i=r(3);async function n(e,t,r,n,s,c){let l=null;if(Object(i.i)(r)){const t=e+"/nodepages/",a=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await Object(o.default)(a,{query:{f:"json",token:n},responseType:"json",signal:c})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(d){Object(i.i)(s)&&s.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",a,d),l=d}}if(!t)return null;const p=e+"/nodes/",u=p+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await Object(o.default)(u,{query:{f:"json",token:n},responseType:"json",signal:c})).data,urlPrefix:p}}catch(d){throw new a.a("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:d,url:u})}}},655:function(e,t,r){"use strict";function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,"a",(function(){return o}))},664:function(e,t,r){"use strict";r.d(t,"a",(function(){return U}));var o=r(0),a=r(45),i=r(9),n=(r(5),r(4)),s=r(3),c=r(12),l=r(14),p=r(1),u=(r(6),r(15)),d=r(2),b=r(13),y=r(655);function h(e){e&&e.writtenProperties&&e.writtenProperties.forEach(e=>{const t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&Object(y.a)(t)&&t.updateOrigin(e.propName,e.newOrigin)})}var O=r(37),f=r(152),m=r(26),j=r(121),v=r(88),g=r(654),w=r(67),S=r(227),x=r(122),I=r(345),T=r(647);async function R(e,t,r){if(!t||!t.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map(e=>e.resource.path)),n=new Set,s=[];a.forEach(t=>{o.delete(t),e.paths.push(t)});for(const i of t.resources.toUpdate)if(o.delete(i.resource.path),a.has(i.resource.path)||n.has(i.resource.path)){const{resource:t,content:o,finish:a,error:n}=i,c=Object(T.getSiblingOfSameTypeI)(t,Object(I.a)());e.paths.push(c.path),s.push(N({resource:c,content:o,finish:a,error:n},r))}else e.paths.push(i.resource.path),s.push(_(i,r)),n.add(i.resource.path);for(const i of t.resources.toAdd)s.push(N(i,r)),e.paths.push(i.resource.path);if(o.forEach(e=>{const r=t.portalItem.resourceFromPath(e);s.push(r.portalItem.removeResource(r).catch(()=>{}))}),0===s.length)return;const l=await Object(c.j)(s);Object(c.v)(r);const p=l.filter(e=>"error"in e).map(e=>e.error);if(p.length>0)throw new i.a("save:resources","Failed to save one or more resources",{errors:p})}async function N(e,t){const r=await Object(x.c)(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function _(e,t){const r=await Object(x.c)(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}const P=n.a.getLogger("esri.layers.mixins.SceneService"),U=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=Object(c.i)(async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return m.a.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new m.a(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e)return O.a.fromJSON(e,r);const o=t.store,a=this._readSpatialReference(t);return null==a||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some(e=>e<F)?null:new O.a({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:a})}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"",a={major:Number.NaN,minor:Number.NaN,versionString:o},i=o.split(".");return i.length>=2&&(a.major=parseInt(i[0],10),a.minor=parseInt(i[1],10)),a}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(j.i)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=Object(j.e)(this.url);Object(s.i)(e)&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),Object(j.a)(o)}set url(e){const t=Object(j.h)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:P});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){Object(j.j)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=Object(l.K)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=Object(g.a)(this.parsedUrl.path,this.rootNode,e,this.apiKey,P,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,a=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[o];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new i.a("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<F||null==this.fullExtent||this.fullExtent.hasZ)return;const n=a.obb.halfSize,s=a.obb.center[2],c=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);this.fullExtent.zmin=s-c,this.fullExtent.zmax=s+c}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<F)return;const r=t[2],a=t[3];this.fullExtent.zmin=r-a,this.fullExtent.zmax=r+a}}async _fetchService(e){if(null==this.url)throw new i.a("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await Object(a.default)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await Object(a.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const a of o)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t),1===r&&(e.typeKeywords=e.typeKeywords.filter(e=>"Hosted Service"!==e)))}async _saveAs(e,t){const r={...K,...t};let o=S.default.from(e);o||(P.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new i.a("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const a=o.portal||w.a.getDefault();await this._ensureLoadBeforeSave(),o.type=A,o.portal=a;const n={origin:"portal-item",url:null,messages:[],portal:a,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},s={layers:[this.write(null,n)]};return await Promise.all(n.resources.pendingOperations),await this._validateAgainstJSONSchema(s,n,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,1),await a._signIn(),await a.user.addItem({item:o,folder:r&&r.folder,data:s}),await R(this.resourceReferences,n,null),this.portalItem=o,h(n),n.portalItem=o,o}async _save(e){const t={...K,...e};this.portalItem||(P.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new i.a("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==A&&(P.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+A),await Promise.reject(new i.a("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${A}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&Object(l.K)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||w.a.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,r)]};return await Promise.all(r.resources.pendingOperations),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await R(this.resourceReferences,r,null),h(r),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let a=t.messages.filter(e=>"error"===e.type).map(e=>new i.a(e.name,e.message,e.details));if(o&&o.validationOptions.ignoreUnsupported&&(a=a.filter(e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)),o.validationOptions.enabled||M){const t=(await r.e(184).then(r.bind(null,1040))).validate(e,o.portalItemLayerType);if(t.length>0){const e="Layer item did not validate:\n"+t.join("\n");if(P.error("_validateAgainstJSONSchema(): "+e),"throw"===o.validationOptions.failPolicy){const e=t.map(e=>new i.a("sceneservice:schema-validation",e)).concat(a);throw new i.a("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(a.length>0)throw new i.a("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}};return Object(o.a)([Object(p.b)(v.c)],t.prototype,"id",void 0),Object(o.a)([Object(p.b)({type:m.a})],t.prototype,"spatialReference",void 0),Object(o.a)([Object(u.a)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),Object(o.a)([Object(p.b)({type:O.a})],t.prototype,"fullExtent",void 0),Object(o.a)([Object(u.a)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),Object(o.a)([Object(p.b)({readOnly:!0,type:f.a})],t.prototype,"heightModelInfo",void 0),Object(o.a)([Object(p.b)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),Object(o.a)([Object(p.b)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],t.prototype,"version",void 0),Object(o.a)([Object(u.a)("version",["store.version"])],t.prototype,"readVersion",null),Object(o.a)([Object(p.b)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(o.a)([Object(p.b)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),Object(o.a)([Object(p.b)({type:String})],t.prototype,"title",void 0),Object(o.a)([Object(u.a)("portal-item","title")],t.prototype,"readTitlePortalItem",null),Object(o.a)([Object(u.a)("service","title",["name"])],t.prototype,"readTitleService",null),Object(o.a)([Object(p.b)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),Object(o.a)([Object(p.b)(v.n)],t.prototype,"url",null),Object(o.a)([Object(b.a)("url")],t.prototype,"writeUrl",null),Object(o.a)([Object(p.b)()],t.prototype,"parsedUrl",null),Object(o.a)([Object(p.b)({readOnly:!0})],t.prototype,"store",void 0),Object(o.a)([Object(p.b)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=Object(o.a)([Object(d.a)("esri.layers.mixins.SceneService")],t),t},F=-1e38,M=!1,A="Scene Service",K={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},715:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return b}));var o=r(0),a=r(10),i=r(1),n=(r(5),r(6),r(4),r(20)),s=r(2);let c=class extends a.a{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};Object(o.a)([Object(i.b)({type:Number})],c.prototype,"nodesPerPage",void 0),Object(o.a)([Object(i.b)({type:Number})],c.prototype,"rootIndex",void 0),Object(o.a)([Object(i.b)({type:String})],c.prototype,"lodSelectionMetricType",void 0),c=Object(o.a)([Object(s.a)("esri.layer.support.I3SNodePageDefinition")],c);let l=class extends a.a{constructor(){super(...arguments),this.factor=1}};Object(o.a)([Object(i.b)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),Object(o.a)([Object(i.b)({type:Number})],l.prototype,"factor",void 0),l=Object(o.a)([Object(s.a)("esri.layer.support.I3SMaterialTexture")],l);let p=class extends a.a{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};Object(o.a)([Object(i.b)({type:[Number]})],p.prototype,"baseColorFactor",void 0),Object(o.a)([Object(i.b)({type:l})],p.prototype,"baseColorTexture",void 0),Object(o.a)([Object(i.b)({type:l})],p.prototype,"metallicRoughnessTexture",void 0),Object(o.a)([Object(i.b)({type:Number})],p.prototype,"metallicFactor",void 0),Object(o.a)([Object(i.b)({type:Number})],p.prototype,"roughnessFactor",void 0),p=Object(o.a)([Object(s.a)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],p);let u=class extends a.a{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};Object(o.a)([Object(n.a)({opaque:"opaque",mask:"mask",blend:"blend"})],u.prototype,"alphaMode",void 0),Object(o.a)([Object(i.b)({type:Number})],u.prototype,"alphaCutoff",void 0),Object(o.a)([Object(i.b)({type:Boolean})],u.prototype,"doubleSided",void 0),Object(o.a)([Object(n.a)({none:"none",back:"back",front:"front"})],u.prototype,"cullFace",void 0),Object(o.a)([Object(i.b)({type:l})],u.prototype,"normalTexture",void 0),Object(o.a)([Object(i.b)({type:l})],u.prototype,"occlusionTexture",void 0),Object(o.a)([Object(i.b)({type:l})],u.prototype,"emissiveTexture",void 0),Object(o.a)([Object(i.b)({type:[Number]})],u.prototype,"emissiveFactor",void 0),Object(o.a)([Object(i.b)({type:p})],u.prototype,"pbrMetallicRoughness",void 0),u=Object(o.a)([Object(s.a)("esri.layer.support.I3SMaterialDefinition")],u);let d=class extends a.a{};Object(o.a)([Object(i.b)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:""+t.index}}})],d.prototype,"name",void 0),Object(o.a)([Object(n.a)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=Object(o.a)([Object(s.a)("esri.layer.support.I3STextureFormat")],d);let b=class extends a.a{constructor(){super(...arguments),this.atlas=!1}};Object(o.a)([Object(i.b)({type:[d]})],b.prototype,"formats",void 0),Object(o.a)([Object(i.b)({type:Boolean})],b.prototype,"atlas",void 0),b=Object(o.a)([Object(s.a)("esri.layer.support.I3STextureSetDefinition")],b);let y=class extends a.a{};Object(o.a)([Object(n.a)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),Object(o.a)([Object(i.b)({type:Number})],y.prototype,"component",void 0),y=Object(o.a)([Object(s.a)("esri.layer.support.I3SGeometryAttribute")],y);let h=class extends a.a{};Object(o.a)([Object(n.a)({draco:"draco"})],h.prototype,"encoding",void 0),Object(o.a)([Object(i.b)({type:[String]})],h.prototype,"attributes",void 0),h=Object(o.a)([Object(s.a)("esri.layer.support.I3SGeometryCompressedAttributes")],h);let O=class extends a.a{constructor(){super(...arguments),this.offset=0}};Object(o.a)([Object(i.b)({type:Number})],O.prototype,"offset",void 0),Object(o.a)([Object(i.b)({type:y})],O.prototype,"position",void 0),Object(o.a)([Object(i.b)({type:y})],O.prototype,"normal",void 0),Object(o.a)([Object(i.b)({type:y})],O.prototype,"uv0",void 0),Object(o.a)([Object(i.b)({type:y})],O.prototype,"color",void 0),Object(o.a)([Object(i.b)({type:y})],O.prototype,"uvRegion",void 0),Object(o.a)([Object(i.b)({type:y})],O.prototype,"featureId",void 0),Object(o.a)([Object(i.b)({type:y})],O.prototype,"faceRange",void 0),Object(o.a)([Object(i.b)({type:h})],O.prototype,"compressedAttributes",void 0),O=Object(o.a)([Object(s.a)("esri.layer.support.I3SGeometryBuffer")],O);let f=class extends a.a{};Object(o.a)([Object(n.a)({triangle:"triangle"})],f.prototype,"topology",void 0),Object(o.a)([Object(i.b)()],f.prototype,"geometryBuffers",void 0),f=Object(o.a)([Object(s.a)("esri.layer.support.I3SGeometryDefinition")],f)},742:function(e,t,r){"use strict";r.r(t);var o=r(0),a=r(9),i=r(49),n=r(3),s=r(321),c=r(12),l=r(16),p=r(1),u=(r(5),r(6),r(4),r(15)),d=r(2),b=r(655),y=r(14),h=r(345),O=r(96),f=r(72);function m(e){return j[function(e){return e instanceof Blob?e.type:function(e){const t=Object(y.n)(e);return w[t]||v}(e.url)}(e)]||g}const j={},v="text/plain",g=j[v],w={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const Y in w)j[w[Y]]=Y;var S=r(58);function x(e){const t=Object(n.i)(e)&&e.origins?e.origins:[void 0];return(r,o)=>{const a=function(e,t,r){if(Object(n.i)(e)&&"resource"===e.type)return function(e,t,r){const o=Object(O.b)(t,r);return{type:String,read:(e,t,r)=>{const a=Object(S.d)(e,t,r);return o.type===String?a:"function"==typeof o.type?new o.type({url:a}):void 0},write:{writer(t,a,i,s){if(!s||!s.resources)return"string"==typeof t?void(a[i]=Object(S.e)(t,s)):void(a[i]=t.write({},s));const c=(u=t,Object(n.h)(u)?null:"string"==typeof u?u:u.url),l=c?Object(S.e)(c,{...s,verifyItemRelativeUrls:s&&s.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,p=o.type!==String&&(!Object(b.a)(this)||s&&s.origin&&this.originIdOf(r)>Object(f.d)(s.origin));var u;s&&s.portalItem&&Object(n.i)(l)&&!Object(y.s)(l)?p?function(e,t,r,o,a,i,n,s){const c=n.portalItem.resourceFromPath(o),l=R(r,o,n);m(l)===Object(y.n)(c.path)?(T(e,t,c,l,n.resources.toUpdate),a[i]=o):I(e,t,r,o,a,i,n,s)}(this,r,t,l,a,i,s,e):function(e,t,r,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(e)}),t[r]=e}(l,a,i,s):s&&s.portalItem&&(Object(n.h)(l)||Object(n.i)(Object(S.b)(l))||Object(y.t)(l)||p)?I(this,r,t,l,a,i,s,e):a[i]=l}}}}(e,t,r);switch(Object(n.i)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=S.c;return{read:e,write:t}}}}(e,r,o);for(const e of t){const t=Object(p.c)(r,e,o);for(const e in a)t[e]=a[e]}}}function I(e,t,o,a,i,s,c,l){const p=Object(h.a)(),u=R(o,a,c),d=Object(y.z)(Object(n.g)(l,"prefix"),p),b=`${d}.${m(u)}`,O=c.portalItem.resourceFromPath(b);Object(y.t)(a)&&c.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(r.bind(null,45))).default,{data:o}=await t(e,{responseType:"blob"});return o}(a).then(e=>{O.path=`${d}.${m(e)}`,i[s]=O.itemRelativeUrl}).catch(()=>{})),T(e,t,O,u,c.resources.toAdd),i[s]=O.itemRelativeUrl}function T(e,t,r,o,a){a.push({resource:r,content:o,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function R(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}var N,_=r(197),P=r(339),U=r(334),F=r(324),M=r(323),A=r(325),K=r(664),L=r(88),E=r(715),z=r(45),k=r(21),q=r(10),J=(r(56),r(7)),D=r(90),C=r(13),B=r(296),$=r(82);let G=N=class extends q.a{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!Object(B.a)(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new D.a("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const a=new $.a;Object(B.l)(e,a,o.layer.spatialReference),t[r]=a.toJSON(o)}else t[r]=e.toJSON(o);delete t[r].spatialReference}clone(){return new N({geometry:Object(J.a)(this.geometry),type:this.type})}};Object(o.a)([Object(p.b)({type:$.a}),x()],G.prototype,"geometry",void 0),Object(o.a)([Object(C.a)(["web-scene","portal-item"],"geometry")],G.prototype,"writeGeometry",null),Object(o.a)([Object(p.b)({type:["clip","mask","replace"],nonNullable:!0}),x()],G.prototype,"type",void 0),G=N=Object(o.a)([Object(d.a)("esri.layers.support.SceneModification")],G);var V,Z=G;let H=V=class extends(Object(q.b)(k.a.ofType(Z))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(e=>!!e.geometry)}clone(){return new V({url:this.url,items:this.items.map(e=>e.clone())})}_readModifications(e,t){for(const r of e)this.add(Z.fromJSON(r,t))}static fromJSON(e,t){const r=new V;return r._readModifications(e,t),r}static async fromUrl(e,t,r){const o={url:Object(y.K)(e),origin:"service"},a=await Object(z.default)(e,{responseType:"json",signal:Object(n.g)(r,"signal")}),i=t.toJSON(),s=[];for(const n of a.data)s.push(Z.fromJSON({...n,geometry:{...n.geometry,spatialReference:i}},o));return new V({url:e,items:s})}};Object(o.a)([Object(p.b)({type:String})],H.prototype,"url",void 0),H=V=Object(o.a)([Object(d.a)("esri.layers.support.SceneModifications")],H);var Q=H;let W=class extends(Object(K.a)(Object(U.a)(Object(F.a)(Object(M.a)(Object(A.a)(Object(s.a)(Object(P.a)(_.a)))))))){constructor(...e){super(...e),this.handles=new i.a,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(Object(l.b)(this,"modifications","after-changes",()=>this.modifications=this.modifications,null,null,!0))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:Object(S.a)(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=Object(n.g)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){Object(c.u)(r)}if(await this._fetchService(t),Object(n.i)(this._modificationsSource)){const t=await Q.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!Object(n.h)(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new a.a("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new a.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new a.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};Object(o.a)([Object(p.b)({type:String,readOnly:!0})],W.prototype,"geometryType",void 0),Object(o.a)([Object(p.b)({type:["show","hide"]})],W.prototype,"listMode",void 0),Object(o.a)([Object(p.b)({type:["IntegratedMeshLayer"]})],W.prototype,"operationalLayerType",void 0),Object(o.a)([Object(p.b)({json:{read:!1},readOnly:!0})],W.prototype,"type",void 0),Object(o.a)([Object(p.b)({type:E.c,readOnly:!0})],W.prototype,"nodePages",void 0),Object(o.a)([Object(p.b)({type:[E.b],readOnly:!0})],W.prototype,"materialDefinitions",void 0),Object(o.a)([Object(p.b)({type:[E.d],readOnly:!0})],W.prototype,"textureSetDefinitions",void 0),Object(o.a)([Object(p.b)({type:[E.a],readOnly:!0})],W.prototype,"geometryDefinitions",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],W.prototype,"serviceUpdateTimeStamp",void 0),Object(o.a)([Object(p.b)({type:Q}),x({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],W.prototype,"modifications",void 0),Object(o.a)([Object(u.a)(["web-scene","portal-item"],"modifications")],W.prototype,"readModifications",null),Object(o.a)([Object(p.b)(L.b)],W.prototype,"elevationInfo",void 0),Object(o.a)([Object(p.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],W.prototype,"path",void 0),W=Object(o.a)([Object(d.a)("esri.layers.IntegratedMeshLayer")],W);var X=W;t.default=X}}]);
//# sourceMappingURL=77.d51cdf7c.chunk.js.map