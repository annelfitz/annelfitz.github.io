"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[255],{50255:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_e});var i=r(27366),s=r(40281),n=r(10064),o=r(41691),l=r(100),a=r(92026),p=r(97642),u=r(66978),d=r(94172),y=r(76672),c=r(35995),h=r(49861),b=(r(25243),r(63780),r(38511)),f=r(69912),g=r(25265),m=r(30651),v=r(27961),_=r(11936),C=r(6693),w=r(46671),O=r(56601),S=r(32526),F=r(6061),I=r(29598),j=r(71684),T=r(56811),E=r(99063),L=r(25899),x=r(45948),P=r(62594),Z=r(25610),G=r(80031),D=r(46784),R=r(31201),k=r(66591);let V=class extends D.wq{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=(0,k.im)(e[r]);return t}writeDomains(e,t){if(!e)return;const r={};for(const i of Object.keys(e))e[i]&&(r[i]=e[i]?.toJSON());t.domains=r}};(0,i._)([(0,h.Cb)({type:Number,json:{write:!0}})],V.prototype,"code",void 0),(0,i._)([(0,h.Cb)({type:Object,json:{write:!0}})],V.prototype,"defaultValues",void 0),(0,i._)([(0,h.Cb)({json:{write:!0}})],V.prototype,"domains",void 0),(0,i._)([(0,b.r)("domains")],V.prototype,"readDomains",null),(0,i._)([(0,R.c)("domains")],V.prototype,"writeDomains",null),(0,i._)([(0,h.Cb)({type:String,json:{write:!0}})],V.prototype,"name",void 0),V=(0,i._)([(0,f.j)("esri.layers.support.Subtype")],V);const N=V;var q=r(44055),M=r(94931),U=(r(78451),r(98689),r(57823),r(32066),r(49018)),$=r(34999),A=r(28189),B=(r(9014),r(93169),r(79056)),J=r(84652),Q=r(54472),Y=r(18202),H=r(47492),z=r(40743),K=r(12224),X=r(77748),W=r(85116),ee=r(81085),te=r(61574);const re=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],ie={key:"type",base:U.Z,errorContext:"renderer",typeMap:{simple:$.Z,"unique-value":A.Z,"class-breaks":M.Z}},se=(0,Z.v)(),ne=(0,H.d)({types:ie});let oe=0;function le(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ae(e){switch(e){case"point":case"multipoint":return te.xA.clone();case"polyline":return te.CJ.clone();case"polygon":case"multipatch":return te.z3.clone();default:return null}}function pe(e,t){return null==e?null:t.subtypes?.find((t=>t.code===e))}function ue(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const i={},s=pe(e,t);if((0,a.pC)(s)){const{defaultValues:e}=s;for(const t in e)i[t]=e[t]}return i[t.subtypeField]=e,new K.Z({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}let de=class extends((0,o.p)((0,p.R)((0,B.IG)(Q.Z)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${oe++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}writeFieldOverrides(e,t,r){const{fields:i,parent:s}=this;let n;if(i){n=[];let e=0;i.forEach((t=>{let{name:r,alias:i,editable:o,visible:l}=t;if(!l)return;const a=s?.fields?.find((e=>e.name===r));if(!a)return;const p={name:r};let u=!1;i!==a.alias&&(p.alias=i,u=!0),o!==a.editable&&(p.editable=o,u=!0),n.push(p),u&&e++})),0===e&&n.length===i.length&&(n=null)}else n=(0,J.d9)(e);n?.length&&(0,Y.RB)(r,n,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=e?.fields;if(!e||!i?.length)return null;const{subtypes:s,subtypeField:n}=e,o=s?.find((e=>e.code===r)),l=o?.defaultValues,a=o?.domains,p=[];for(const u of i){const e=u.clone(),{name:i}=e,s=t?.find((e=>e.name===i));if(e.visible=!t||!!s,s){const{alias:t,editable:r}=s;t&&(e.alias=t),!1===r&&(e.editable=!1)}const o=l?.[i]??null;e.defaultValue=i===n?r:o;const d=a?.[i]??null;e.domain=i===n?null:d?"inherited"===d.type?e.domain:d.clone():null,p.push(e)}return p}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,G.YN)(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?function(e){return new $.Z({symbol:ae(e)})}(e.geometryType):null}readRendererFromService(e,t,r){if("Table"===t.type)return null;const i=t.drawingInfo?.renderer,s=ne(i,t,r);let n;const{subtypeCode:o}=this;if(null!=o&&function(e,t){return!!t&&"unique-value"===e?.type&&"string"==typeof e.field&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}(s,t.subtypeField)){const e=s.uniqueValueInfos?.find((e=>{let{value:t}=e;return(t="number"==typeof t?String(t):t)===String(o)}));e&&(n=new $.Z({symbol:e.symbol}))}else"simple"!==s?.type||s.visualVariables?.length||(n=s);return n}readRenderer(e,t,r){const i=t?.layerDefinition?.drawingInfo?.renderer;if(!i)return;const s=i.visualVariables?.some((e=>"rotationInfo"!==e.type));return s?void 0:ne(i,t,r)||void 0}get spatialReference(){return this.parent?.spatialReference}readTemplatesFromService(e,t){return[ue(this.subtypeCode,t)]}readTitleFromService(e,t){const r=pe(this.subtypeCode,t);return(0,a.pC)(r)?r.name:null}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:s}=this;if(r){const{displayField:e,editFieldsInfo:n,objectIdField:o}=r;t={displayField:e,editFieldsInfo:n,fields:i,objectIdField:o,title:s}}return(0,ee.eZ)(t,e)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return re.some((e=>this.originIdOf(e)===g.s3.USER))}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};(0,i._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"capabilities",null),(0,i._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"effectiveCapabilities",null),(0,i._)([(0,h.Cb)({json:{write:{ignoreOrigin:!0}}})],de.prototype,"charts",void 0),(0,i._)([(0,h.Cb)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],de.prototype,"editingEnabled",void 0),(0,i._)([(0,h.Cb)({type:Boolean,readOnly:!0})],de.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,h.Cb)({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],de.prototype,"fieldOverrides",void 0),(0,i._)([(0,R.c)("fieldOverrides")],de.prototype,"writeFieldOverrides",null),(0,i._)([(0,h.Cb)({...se.fields,readOnly:!0,json:{read:!1}})],de.prototype,"fields",null),(0,i._)([(0,h.Cb)(se.fieldsIndex)],de.prototype,"fieldsIndex",void 0),(0,i._)([(0,h.Cb)({type:z.Z,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],de.prototype,"formTemplate",void 0),(0,i._)([(0,h.Cb)({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],de.prototype,"id",void 0),(0,i._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"geometryType",null),(0,i._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"type",void 0),(0,i._)([(0,h.Cb)(le((0,J.d9)(x.iR)))],de.prototype,"labelsVisible",void 0),(0,i._)([(0,h.Cb)({type:[X.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:W.r},write:{ignoreOrigin:!0}}})],de.prototype,"labelingInfo",void 0),(0,i._)([(0,h.Cb)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],de.prototype,"layerType",void 0),(0,i._)([(0,h.Cb)(le((0,J.d9)(x.rn)))],de.prototype,"legendEnabled",void 0),(0,i._)([(0,h.Cb)({type:["show","hide"]})],de.prototype,"listMode",void 0),(0,i._)([(0,h.Cb)((()=>{const e=(0,J.d9)(x.rO);return e.json.origins.service.read=!1,le(e)})())],de.prototype,"minScale",void 0),(0,i._)([(0,h.Cb)((()=>{const e=(0,J.d9)(x.u1);return e.json.origins.service.read=!1,le(e)})())],de.prototype,"maxScale",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],de.prototype,"effectiveScaleRange",null),(0,i._)([(0,h.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],de.prototype,"opacity",void 0),(0,i._)([(0,h.Cb)()],de.prototype,"parent",void 0),(0,i._)([(0,h.Cb)(le((0,J.d9)(x.C_)))],de.prototype,"popupEnabled",void 0),(0,i._)([(0,h.Cb)({type:q.Z,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],de.prototype,"popupTemplate",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],de.prototype,"defaultPopupTemplate",null),(0,i._)([(0,h.Cb)({types:ie,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],de.prototype,"renderer",null),(0,i._)([(0,b.r)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],de.prototype,"readRendererFromService",null),(0,i._)([(0,b.r)("renderer",["layerDefinition.drawingInfo.renderer"])],de.prototype,"readRenderer",null),(0,i._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"spatialReference",null),(0,i._)([(0,h.Cb)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],de.prototype,"subtypeCode",void 0),(0,i._)([(0,h.Cb)({type:[K.Z],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],de.prototype,"templates",void 0),(0,i._)([(0,b.r)("service","templates",["geometryType","subtypeField","subtypes","type"])],de.prototype,"readTemplatesFromService",null),(0,i._)([(0,h.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],de.prototype,"title",void 0),(0,i._)([(0,b.r)("service","title",["subtypes"])],de.prototype,"readTitleFromService",null),(0,i._)([(0,h.Cb)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],de.prototype,"visible",void 0),de=(0,i._)([(0,f.j)("esri.layers.support.SubtypeSublayer")],de);const ye=de;var ce=r(57370),he=r(26704),be=r(86638);const fe="SubtypeGroupLayer";function ge(e,t){return new n.Z("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const me=(0,Z.v)();let ve=class extends((0,S.B)((0,O.o1)((0,C.h)((0,E.n)((0,T.M)((0,j.Q)((0,_.Y)((0,F.q)((0,I.I)((0,p.R)((0,w.N)((0,v.V)((0,o.p)(m.Z)))))))))))))){constructor(){super(...arguments),this._handles=new l.Z,this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(s.Z.ofType(ye)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles((0,d.YP)((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),d.Z_))}destroy(){this.source?.destroy(),this._handles=(0,a.SC)(this._handles)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,a.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(u.r9).then((async()=>{if(!this.url)throw new n.Z("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new n.Z("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))})).then((()=>this._setUserPrivileges(this.serviceItemId,e))).then((()=>(0,P.nU)(this,e)));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return(0,P.sX)(this)}get parsedUrl(){const e=(0,c.mN)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,c.v_)(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,t){let{name:r}=t;return this.url?(0,L.a7)(this.url,r):r}async addAttachment(e,t){return(0,P.JD)(this,e,t,fe)}async updateAttachment(e,t,r){return(0,P.Y5)(this,e,t,r,fe)}async applyEdits(e,t){return(0,P.Jj)(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await(0,u.Hl)(r.e(5026).then(r.bind(r,15026)),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=(0,P.rP)(this),t=this.sublayers.map((e=>e.subtypeCode));return e.where=(0,y._)(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return(0,P.FV)(this,e,t,fe)}async fetchRecomputedExtents(e){return(0,P.Ci)(this,e,fe)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this._sublayerLookup.get(r)}async queryAttachments(e,t){return(0,P.SU)(this,e,t,fe)}async queryFeatures(e,t){const r=await this.load(),i=be.Z.from(e)??r.createQuery(),s=(0,a.Pt)(i.outFields,[]);s.includes(this.subtypeField)||(s.push(this.subtypeField),i.outFields=s);const n=await r.source.queryFeatures(i,t);if(n?.features)for(const o of n.features)o.layer=this.findSublayerForFeature(o),o.sourceLayer=this;return n}async queryObjectIds(e,t){return(0,P.tD)(this,e,t,fe)}async queryFeatureCount(e,t){return(0,P.VG)(this,e,t,fe)}async queryExtent(e,t){return(0,P.KE)(this,e,t,fe)}async queryRelatedFeatures(e,t){return(0,P.kp)(this,e,t,fe)}async queryRelatedFeaturesCount(e,t){return(0,P.C9)(this,e,t,fe)}write(e,t){const{origin:r,layerContainerType:i,messages:s}=t;if(this.isTable){if("web-scene"===r||"web-map"===r&&"tables"!==i)return s?.push(ge(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===r&&"tables"===i)return s?.push(ge(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(s?.push(new n.Z("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&(0,he.D)(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new n.Z("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new n.Z("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),(0,G.UF)(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return(0,P.gG)(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null})),this.handles.remove("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",(e=>{let{item:t}=e;t.parent=this,this._sublayerLookup.set(t.subtypeCode,t)})),e.on("after-remove",(e=>{let{item:t}=e;t.parent=null,this._sublayerLookup.delete(t.subtypeCode)})),e.on("after-changes",(()=>{this._sublayersCollectionChanged=!0}))],"sublayers-owner"))}};(0,i._)([(0,h.Cb)({readOnly:!0})],ve.prototype,"createQueryVersion",null),(0,i._)([(0,h.Cb)({type:Boolean,readOnly:!0})],ve.prototype,"editingEnabled",null),(0,i._)([(0,h.Cb)({type:Boolean,readOnly:!0})],ve.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,h.Cb)({...me.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],ve.prototype,"fields",void 0),(0,i._)([(0,h.Cb)(me.fieldsIndex)],ve.prototype,"fieldsIndex",void 0),(0,i._)([(0,h.Cb)(x.id)],ve.prototype,"id",void 0),(0,i._)([(0,h.Cb)({type:["show","hide","hide-children"]})],ve.prototype,"listMode",void 0),(0,i._)([(0,h.Cb)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],ve.prototype,"operationalLayerType",void 0),(0,i._)([(0,h.Cb)(me.outFields)],ve.prototype,"outFields",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],ve.prototype,"parsedUrl",null),(0,i._)([(0,h.Cb)()],ve.prototype,"source",null),(0,i._)([(0,h.Cb)({type:[N],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ve.prototype,"subtypes",void 0),(0,i._)([(0,h.Cb)({type:s.Z.ofType(ye),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const i=e.map((e=>{let{code:i}=e;const s=new ye({subtypeCode:i});return s.read(t,r),s}));return new(s.Z.ofType(ye))(i)}}}},name:"layers",write:{overridePolicy(e,t,r){const i=this.originOf("sublayers"),s=g.s3.PORTAL_ITEM;let n=!0;if((0,g.M9)(i)===s&&(0,g.M9)(r.origin)>s){const t=e.some((e=>e.hasUserOverrides()));n=this._sublayersCollectionChanged||t}return{enabled:n,ignoreOrigin:!0}}}}})],ve.prototype,"sublayers",void 0),(0,i._)([(0,h.Cb)({type:ce.Z})],ve.prototype,"timeInfo",void 0),(0,i._)([(0,h.Cb)({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],ve.prototype,"title",void 0),(0,i._)([(0,b.r)("service","title",["name"])],ve.prototype,"readTitleFromService",null),(0,i._)([(0,h.Cb)({json:{read:!1}})],ve.prototype,"type",void 0),ve=(0,i._)([(0,f.j)("esri.layers.SubtypeGroupLayer")],ve);const _e=ve}}]);
//# sourceMappingURL=255.1959a6d2.chunk.js.map