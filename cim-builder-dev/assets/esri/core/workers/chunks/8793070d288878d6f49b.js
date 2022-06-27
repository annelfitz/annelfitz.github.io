"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4133,7873],{65845:(e,t,r)=>{r.d(t,{D:()=>a});var i=r(81153);function a(e){e&&e.writtenProperties&&e.writtenProperties.forEach((e=>{const t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&(0,i.l)(t)&&t.updateOrigin(e.propName,e.newOrigin)}))}},81153:(e,t,r)=>{function i(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>i})},41123:(e,t,r)=>{r.d(t,{D:()=>a});const i="randomUUID"in crypto;function a(){if(i)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16);return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}},54295:(e,t,r)=>{r.d(t,{V:()=>o});var i=r(43697),a=r(5600),s=(r(67676),r(80442),r(75215),r(52011));const o=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,a.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,s.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17287:(e,t,r)=>{r.d(t,{Y:()=>p});var i=r(43697),a=r(92604),s=r(70586),o=r(5600),n=(r(67676),r(80442),r(75215),r(52011)),l=r(66677);const p=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,l.Qc)(this.url);if((0,s.pC)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,l.Nm)(e,a.Z.getLogger(this.declaredClass)))}};return(0,i._)([(0,o.Cb)()],t.prototype,"title",null),(0,i._)([(0,o.Cb)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,n.j)("esri.layers.mixins.ArcGISService")],t),t}},16859:(e,t,r)=>{r.d(t,{I:()=>I});var i=r(43697),a=r(40330),s=r(3172),o=r(66643),n=r(20102),l=r(92604),p=r(70586),u=r(95330),c=r(17452),d=r(5600),h=(r(67676),r(80442),r(75215),r(71715)),y=r(52011),m=r(30556),f=r(65587),g=r(15235),v=r(86082);const w=l.Z.getLogger("esri.layers.mixins.PortalLayer"),I=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem?.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new g.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(8062).then(r.bind(r,18062));return(0,u.k_)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,u.D_)(e)||w.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,u.r9)(e),!0))))}async _fetchUserHasEditingPrivileges(e){const t=this.url?a.id?.findCredential(this.url):null;if(!t)return!0;const r=S.credential===t?S.user:await this._fetchEditingUser(e);return S.credential=t,S.user=r,(0,p.Wi)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=a.id.findServerInfo(this.url);if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,n=f.Z.getDefault();if(n&&n.loaded&&(0,c.Fv)(n.restUrl)===(0,c.Fv)(i))return n.user;const l=`${i}/community/self`,u=(0,p.pC)(e)?e.signal:null,d=await(0,o.q6)((0,s.default)(l,{authMode:"no-prompt",query:{f:"json"},signal:u}));return d.ok?v.default.fromJSON(d.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||f.Z.getDefault());return r&&i&&!(0,c.tm)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new n.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,d.Cb)({type:g.default})],t.prototype,"portalItem",null),(0,i._)([(0,h.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,m.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,d.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,i._)([(0,y.j)("esri.layers.mixins.PortalLayer")],t),t},S={credential:null,user:null}},32271:(e,t,r)=>{r.d(t,{xp:()=>q,Vt:()=>E});var i=r(43697),a=r(3172),s=r(20102),o=(r(80442),r(92604)),n=r(70586),l=r(95330),p=r(17452),u=r(5600),c=(r(67676),r(75215),r(71715)),d=r(52011),h=r(30556),y=r(65845),m=r(6570),f=r(79235),g=r(82971),v=r(66677),w=r(21506),I=r(61064),S=r(65587),_=r(15235),b=r(66643),x=r(41123),P=r(97873);async function R(e,t,r){if(!t||!t.resources)return;const i=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map((e=>e.resource.path))),o=new Set,n=[];a.forEach((t=>{i.delete(t),e.paths.push(t)}));for(const s of t.resources.toUpdate)if(i.delete(s.resource.path),a.has(s.resource.path)||o.has(s.resource.path)){const{resource:t,content:i,finish:a,error:o}=s,l=(0,P.getSiblingOfSameTypeI)(t,(0,x.D)());e.paths.push(l.path),n.push(U({resource:l,content:i,finish:a,error:o},r))}else e.paths.push(s.resource.path),n.push(O(s,r)),o.add(s.resource.path);for(const i of t.resources.toAdd)n.push(U(i,r)),e.paths.push(i.resource.path);if(i.forEach((e=>{const r=t.portalItem.resourceFromPath(e);n.push(r.portalItem.removeResource(r).catch((()=>{})))})),0===n.length)return;const p=await(0,l.as)(n);(0,l.k_)(r);const u=p.filter((e=>"error"in e)).map((e=>e.error));if(u.length>0)throw new s.Z("save:resources","Failed to save one or more resources",{errors:u})}async function U(e,t){const r=await(0,b.q6)(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function O(e,t){const r=await(0,b.q6)(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}const C=o.Z.getLogger("esri.layers.mixins.SceneService"),E=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,l.Ds)((async(e,t,r)=>{switch(e){case q.SAVE:return this._save(t);case q.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return g.Z.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,i=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=i?new g.Z(i):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const i=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return m.Z.fromJSON(i,r)}const i=t.store,a=this._readSpatialReference(t);return null==a||null==i||null==i.extent||!Array.isArray(i.extent)||i.extent.some((e=>e<T))?null:new m.Z({xmin:i.extent[0],ymin:i.extent[1],xmax:i.extent[2],ymax:i.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,i=null!=r.version?r.version.toString():"";return this.parseVersionString(i)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return(0,v.a7)(this.url,t.name);let i=t.name;if(!i&&this.url){const e=(0,v.Qc)(this.url);(0,n.pC)(e)&&(i=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(i=r+" - "+i),(0,v.ld)(i)}set url(e){const t=(0,v.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:C});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,i){(0,v.wH)(this,e,"layers",t,i)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=(0,p.mN)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,I.T)(this.parsedUrl.path,this.rootNode,e,this.apiKey,C,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,r=e.rootPage?.nodes?.[t];if(null==r||null==r.obb||null==r.obb.center||null==r.obb.halfSize)throw new s.Z("sceneservice:invalid-node-page","Invalid node page.");if(r.obb.center[0]<T||null==this.fullExtent||this.fullExtent.hasZ)return;const i=r.obb.halfSize,a=r.obb.center[2],o=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=a-o,this.fullExtent.zmax=a+o}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<T)return;const r=t[2],i=t[3];this.fullExtent.zmin=r-i,this.fullExtent.zmax=r+i}}async _fetchService(e){if(null==this.url)throw new s.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,a.default)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,a.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let r=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(r=!0),r)return this._fetchVoxelServiceLayer();const i=t.data;this.read(i,{origin:"service",url:this.parsedUrl}),this.validateLayer(i)}async _fetchVoxelServiceLayer(e){const t=(await(0,a.default)(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl}),this.validateLayer(t)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const i=t.getTypeKeywords();for(const t of i)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===N.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...Z,...t};let i=_.default.from(e);i||(C.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new s.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),i.id&&(i=i.clone(),i.id=null);const a=i.portal||S.Z.getDefault();await this._ensureLoadBeforeSave(),i.type=j,i.portal=a;const o={origin:"portal-item",url:null,messages:[],portal:a,portalItem:i,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations),await this._validateAgainstJSONSchema(n,o,r),i.url=this.url,i.title||(i.title=this.title),this._updateTypeKeywords(i,r,N.newItem),await a._signIn(),await a.user.addItem({item:i,folder:r&&r.folder,data:n}),await R(this.resourceReferences,o,null),this.portalItem=i,(0,y.D)(o),o.portalItem=i,i}async _save(e){const t={...Z,...e};this.portalItem||(C.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new s.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==j&&(C.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+j),await Promise.reject(new s.Z("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${j}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&(0,p.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||S.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},i={layers:[this.write({},r)]};return await Promise.all(r.resources.pendingOperations),await this._validateAgainstJSONSchema(i,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,N.existingItem),await this.portalItem.update({data:i}),await R(this.resourceReferences,r,null),(0,y.D)(r),this.portalItem}async _validateAgainstJSONSchema(e,t,i){let a=t.messages.filter((e=>"error"===e.type)).map((e=>new s.Z(e.name,e.message,e.details)));if(i&&i.validationOptions.ignoreUnsupported&&(a=a.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),i.validationOptions.enabled||A){const t=(await r.e(7572).then(r.bind(r,87572))).validate(e,i.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(C.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===i.validationOptions.failPolicy){const e=t.map((e=>new s.Z("sceneservice:schema-validation",e))).concat(a);throw new s.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(a.length>0)throw new s.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}};return(0,i._)([(0,u.Cb)(w.id)],t.prototype,"id",void 0),(0,i._)([(0,u.Cb)({type:g.Z})],t.prototype,"spatialReference",void 0),(0,i._)([(0,c.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,i._)([(0,u.Cb)({type:m.Z})],t.prototype,"fullExtent",void 0),(0,i._)([(0,c.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,i._)([(0,u.Cb)({readOnly:!0,type:f.Z})],t.prototype,"heightModelInfo",void 0),(0,i._)([(0,u.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,i._)([(0,u.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,i._)([(0,c.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,i._)([(0,u.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,i._)([(0,u.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,i._)([(0,u.Cb)({type:String})],t.prototype,"title",void 0),(0,i._)([(0,c.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,i._)([(0,c.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,i._)([(0,u.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,i._)([(0,u.Cb)(w.HQ)],t.prototype,"url",null),(0,i._)([(0,h.c)("url")],t.prototype,"writeUrl",null),(0,i._)([(0,u.Cb)()],t.prototype,"parsedUrl",null),(0,i._)([(0,u.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,i._)([(0,u.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,i._)([(0,d.j)("esri.layers.mixins.SceneService")],t),t},T=-1e38,A=!1;var N,K;(K=N||(N={}))[K.existingItem=0]="existingItem",K[K.newItem=1]="newItem";const j="Scene Service",Z={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var q;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(q||(q={}))},61064:(e,t,r)=>{r.d(t,{T:()=>o});var i=r(3172),a=r(20102),s=r(70586);async function o(e,t,r,o,n,l){let p=null;if((0,s.pC)(r)){const t=`${e}/nodepages/`,a=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,i.default)(a,{query:{f:"json",token:o},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(e){(0,s.pC)(n)&&n.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",a,e),p=e}}if(!t)return null;const u=`${e}/nodes/`,c=u+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await(0,i.default)(c,{query:{f:"json",token:o},responseType:"json",signal:l})).data,urlPrefix:u}}catch(e){throw new a.Z("sceneservice:root-node-missing","Root node missing.",{pageError:p,nodeError:e,url:c})}}},97873:(e,t,r)=>{r.r(t),r.d(t,{addOrUpdateResource:()=>l,contentToBlob:()=>h,fetchResources:()=>n,getSiblingOfSameType:()=>y,getSiblingOfSameTypeI:()=>m,removeAllResources:()=>u,removeResource:()=>p,splitPrefixFileNameAndExtension:()=>d});var i=r(3172),a=r(20102),s=r(70586),o=r(17452);async function n(e,t={},r){await e.load(r);const i=(0,o.v_)(e.itemUrl,"resources"),{start:a=1,num:n=10,sortOrder:l="asc",sortField:p="created"}=t,u={query:{start:a,num:n,sortOrder:l,sortField:p,token:e.apiKey},signal:(0,s.U2)(r,"signal")},c=await e.portal._request(i,u);return{total:c.total,nextStart:c.nextStart,resources:c.resources.map((({created:t,size:r,resource:i})=>({created:new Date(t),size:r,resource:e.resourceFromPath(i)})))}}async function l(e,t,r,i){if(!e.hasPath())throw new a.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const n=e.portalItem;await n.load(i);const l=(0,o.v_)(n.userItemUrl,"add"===t?"addResources":"updateResources"),[p,u]=c(e.path),d=await h(r),y=new FormData;return p&&"."!==p&&y.append("resourcesPrefix",p),y.append("fileName",u),y.append("file",d,u),y.append("f","json"),(0,s.pC)(i)&&i.access&&y.append("access",i.access),await n.portal._request(l,{method:"post",body:y,signal:(0,s.U2)(i,"signal")}),e}async function p(e,t,r){if(!t.hasPath())throw new a.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const i=(0,o.v_)(e.userItemUrl,"removeResources");await e.portal._request(i,{method:"post",query:{resource:t.path},signal:(0,s.U2)(r,"signal")}),t.portalItem=null}async function u(e,t){await e.load(t);const r=(0,o.v_)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:(0,s.U2)(t,"signal")})}function c(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=function(e){const t=(0,o.Ml)(e);return(0,s.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[i,a]=c(t);return[i,a,r]}async function h(e){return e instanceof Blob?e:(await(0,i.default)(e.url,{responseType:"blob"})).data}function y(e,t){if(!e.hasPath())return null;const[r,,i]=d(e.path);return e.portalItem.resourceFromPath((0,o.v_)(r,t+i))}function m(e,t){if(!e.hasPath())return null;const[r,,i]=d(e.path);return e.portalItem.resourceFromPath((0,o.v_)(r,t+i))}}}]);