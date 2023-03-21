"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[6505],{66505:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Xe});var s=r(27366),i=r(40281),o=r(77178),a=r(10064),n=r(84652),l=r(93002),p=r(32718),y=r(92026),d=r(97642),u=r(66978),c=r(35995),h=r(49861),b=r(25243),g=r(38511),f=r(69912),v=r(78952),_=r(30651),m=r(52639),w=r(44055),C=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),S=r(76200),j=r(43404),x=r(54472),O=r(67426),I=(r(63780),r(27135)),F=r(53866),L=r(64326),T=r(79056),q=r(45948);let B=class extends((0,T.IG)(d.w)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}};(0,s._)([(0,h.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],B.prototype,"title",void 0),(0,s._)([(0,g.r)("service","title",["alias","name"])],B.prototype,"readTitle",null),(0,s._)([(0,h.Cb)()],B.prototype,"layer",void 0),(0,s._)([(0,h.Cb)({type:b.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],B.prototype,"id",void 0),(0,s._)([(0,g.r)("service","id")],B.prototype,"readIdOnlyOnce",null),(0,s._)([(0,h.Cb)((0,q.Lx)(String))],B.prototype,"modelName",void 0),(0,s._)([(0,h.Cb)((0,q.Lx)(Boolean))],B.prototype,"isEmpty",void 0),(0,s._)([(0,h.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],B.prototype,"visible",void 0),(0,s._)([(0,h.Cb)({type:Number,json:{write:!0}})],B.prototype,"opacity",void 0),B=(0,s._)([(0,f.j)("esri.layers.buildingSublayers.BuildingSublayer")],B);const A=B;var Z=r(96978),E=r(25610),R=r(52410),k=r(80031),N=r(30494),P=r(34207),M=r(86638),U=r(81085),Q=r(64575),V=r(55664),D=r(24405);const K="esri.layers.buildingSublayers.BuildingComponentSublayer",J=p.Z.getLogger(K),G=(0,E.v)();let H=class extends(x.Z.LoadableMixin((0,O.v)(A))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new R.Z(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return(0,y.pC)(r)&&"number"==typeof s?new L.default({portalItem:r,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return(0,y.pC)(this.associatedLayer)?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=(0,y.pC)(e)?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,N.T)(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,J,t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return(0,U.eZ)(this,e)}async _fetchService(e){const t=(await(0,S.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&(0,y.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,y.pC)(this.associatedLayer)?this.associatedLayer.types??[]:[]}get typeIdField(){return(0,y.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=(0,y.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Z.C,{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}=e;return{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}}createQuery(){const e=new M.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}async queryCachedAttributes(e,t){const r=(0,k.Lk)(this.fieldsIndex,await(0,D.e)(this,(0,D.V)(this)));return(0,V.xe)(this.parsedUrl.path,this.attributeStorageInfo,e,t,r)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new a.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const s=new m.Z;return s.attributes=r[0],s.layer=this,s.sourceLayer=this,s}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:(0,y.pC)(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,y.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,y.Wi)(this.associatedLayer))throw new a.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(de){throw new a.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:de})}return this.associatedLayer}};(0,s._)([(0,h.Cb)({readOnly:!0})],H.prototype,"parsedUrl",null),(0,s._)([(0,h.Cb)({type:P.U4,readOnly:!0})],H.prototype,"nodePages",void 0),(0,s._)([(0,h.Cb)({type:[P.QI],readOnly:!0})],H.prototype,"materialDefinitions",void 0),(0,s._)([(0,h.Cb)({type:[P.Yh],readOnly:!0})],H.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,h.Cb)({type:[P.H3],readOnly:!0})],H.prototype,"geometryDefinitions",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],H.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],H.prototype,"store",void 0),(0,s._)([(0,h.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],H.prototype,"rootNode",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],H.prototype,"attributeStorageInfo",void 0),(0,s._)([(0,h.Cb)(G.fields)],H.prototype,"fields",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],H.prototype,"fieldsIndex",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:L.default})],H.prototype,"associatedLayer",void 0),(0,s._)([(0,g.r)("service","associatedLayer",["associatedLayerID"])],H.prototype,"readAssociatedLayer",null),(0,s._)([(0,h.Cb)(G.outFields)],H.prototype,"outFields",void 0),(0,s._)([(0,h.Cb)({type:String,readOnly:!0})],H.prototype,"objectIdField",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:String,json:{read:!1}})],H.prototype,"displayField",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:String})],H.prototype,"apiKey",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:F.Z})],H.prototype,"fullExtent",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:v.Z})],H.prototype,"spatialReference",null),(0,s._)([(0,h.Cb)({readOnly:!0})],H.prototype,"version",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:Q.Z})],H.prototype,"elevationInfo",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:Number})],H.prototype,"minScale",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:Number})],H.prototype,"maxScale",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:Number})],H.prototype,"effectiveScaleRange",null),(0,s._)([(0,h.Cb)({type:["hide","show"],json:{write:!0}})],H.prototype,"listMode",void 0),(0,s._)([(0,h.Cb)({types:C.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],H.prototype,"renderer",void 0),(0,s._)([(0,h.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],H.prototype,"definitionExpression",void 0),(0,s._)([(0,h.Cb)(q.C_)],H.prototype,"popupEnabled",void 0),(0,s._)([(0,h.Cb)({type:w.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],H.prototype,"popupTemplate",void 0),(0,s._)([(0,h.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],H.prototype,"normalReferenceFrame",void 0),(0,s._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],H.prototype,"defaultPopupTemplate",null),(0,s._)([(0,h.Cb)()],H.prototype,"types",null),(0,s._)([(0,h.Cb)()],H.prototype,"typeIdField",null),(0,s._)([(0,h.Cb)({json:{write:!1}}),(0,I.J)(new j.X({"3DObject":"3d-object",Point:"point"}))],H.prototype,"layerType",void 0),(0,s._)([(0,h.Cb)()],H.prototype,"geometryType",null),(0,s._)([(0,h.Cb)()],H.prototype,"profile",null),(0,s._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],H.prototype,"capabilities",null),H=(0,s._)([(0,f.j)(K)],H);const W=H;var z,X=r(51370);const Y={type:i.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:$}}},read:!1}};function $(e,t,r){if(e&&Array.isArray(e))return new i.Z(e.map((e=>{const t=function(e){return"group"===e.layerType?ee:W}(e);if(t){const s=new t;return s.read(e,r),s}return r&&r.messages&&e&&r.messages.push(new X.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null})))}let ee=z=class extends A{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,l.w)(this,(e=>z.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var te;(0,s._)([(0,h.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],ee.prototype,"listMode",void 0),(0,s._)([(0,h.Cb)(Y)],ee.prototype,"sublayers",void 0),ee=z=(0,s._)([(0,f.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],ee),(te=ee||(ee={})).sublayersProperty=Y,te.readSublayers=$,te.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const re=ee;var se=r(27961),ie=r(11936),oe=r(6061),ae=r(29598),ne=r(56811),le=r(54395),pe=r(46784),ye=r(71907);let de=class extends pe.wq{constructor(){super(...arguments),this.type=null}};(0,s._)([(0,h.Cb)({type:String,readOnly:!0,json:{write:!0}})],de.prototype,"type",void 0),de=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfo")],de);const ue=de;var ce;let he=ce=class extends pe.wq{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new ce({filterType:this.filterType,filterValues:(0,n.d9)(this.filterValues)})}};(0,s._)([(0,h.Cb)({type:String,json:{write:!0}})],he.prototype,"filterType",void 0),(0,s._)([(0,h.Cb)({type:[String],json:{write:!0}})],he.prototype,"filterValues",void 0),he=ce=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],he);const be=he;var ge;const fe=i.Z.ofType(be);let ve=ge=class extends pe.wq{clone(){return new ge({filterTypes:(0,n.d9)(this.filterTypes)})}};(0,s._)([(0,h.Cb)({type:fe,json:{write:!0}})],ve.prototype,"filterTypes",void 0),ve=ge=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],ve);const _e=ve;var me;const we=i.Z.ofType(_e);let Ce=me=class extends ue{constructor(){super(...arguments),this.type="checkbox"}clone(){return new me({filterBlocks:(0,n.d9)(this.filterBlocks)})}};(0,s._)([(0,h.Cb)({type:["checkbox"]})],Ce.prototype,"type",void 0),(0,s._)([(0,h.Cb)({type:we,json:{write:!0}})],Ce.prototype,"filterBlocks",void 0),Ce=me=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],Ce);const Se=Ce;let je=class extends pe.wq{};(0,s._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],je.prototype,"type",void 0),je=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterMode")],je);const xe=je;var Oe;let Ie=Oe=class extends xe{constructor(){super(...arguments),this.type="solid"}clone(){return new Oe}};(0,s._)([(0,h.Cb)({type:["solid"],readOnly:!0,json:{write:!0}})],Ie.prototype,"type",void 0),Ie=Oe=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterModeSolid")],Ie);const Fe=Ie;var Le,Te=r(12365);let qe=Le=class extends xe{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Le({edges:(0,n.d9)(this.edges)})}};(0,s._)([(0,I.J)({wireFrame:"wire-frame"})],qe.prototype,"type",void 0),(0,s._)([(0,h.Cb)(Te.Z)],qe.prototype,"edges",void 0),qe=Le=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterModeWireFrame")],qe);const Be=qe;var Ae;let Ze=Ae=class extends xe{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Ae}};(0,s._)([(0,h.Cb)({type:["x-ray"],readOnly:!0,json:{write:!0}})],Ze.prototype,"type",void 0),Ze=Ae=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterModeXRay")],Ze);const Ee=Ze;var Re;const ke={nonNullable:!0,types:{key:"type",base:xe,typeMap:{solid:Fe,"wire-frame":Be,"x-ray":Ee}},json:{read:e=>{switch(e&&e.type){case"solid":return Fe.fromJSON(e);case"wireFrame":return Be.fromJSON(e);case"x-ray":return Ee.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let Ne=Re=class extends pe.wq{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Fe,this.title=""}clone(){return new Re({filterExpression:this.filterExpression,filterMode:(0,n.d9)(this.filterMode),title:this.title})}};(0,s._)([(0,h.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ne.prototype,"filterExpression",void 0),(0,s._)([(0,h.Cb)(ke)],Ne.prototype,"filterMode",void 0),(0,s._)([(0,h.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ne.prototype,"title",void 0),Ne=Re=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterBlock")],Ne);const Pe=Ne;var Me;const Ue=i.Z.ofType(Pe);let Qe=Me=class extends pe.wq{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,ye.D)(),this.name=null}clone(){return new Me({description:this.description,filterBlocks:(0,n.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,n.d9)(this.filterAuthoringInfo)})}};(0,s._)([(0,h.Cb)({type:String,json:{write:!0}})],Qe.prototype,"description",void 0),(0,s._)([(0,h.Cb)({type:Ue,json:{write:{enabled:!0,isRequired:!0}}})],Qe.prototype,"filterBlocks",void 0),(0,s._)([(0,h.Cb)({types:{key:"type",base:ue,typeMap:{checkbox:Se}},json:{read:e=>"checkbox"===(e&&e.type)?Se.fromJSON(e):null,write:!0}})],Qe.prototype,"filterAuthoringInfo",void 0),(0,s._)([(0,h.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Qe.prototype,"id",void 0),(0,s._)([(0,h.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Qe.prototype,"name",void 0),Qe=Me=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilter")],Qe);const Ve=Qe;let De=class extends pe.wq{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,s._)([(0,h.Cb)({type:String})],De.prototype,"fieldName",void 0),(0,s._)([(0,h.Cb)({type:String})],De.prototype,"modelName",void 0),(0,s._)([(0,h.Cb)({type:String})],De.prototype,"label",void 0),(0,s._)([(0,h.Cb)({type:Number})],De.prototype,"min",void 0),(0,s._)([(0,h.Cb)({type:Number})],De.prototype,"max",void 0),(0,s._)([(0,h.Cb)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],De.prototype,"mostFrequentValues",void 0),(0,s._)([(0,h.Cb)({type:[Number]})],De.prototype,"subLayerIds",void 0),De=(0,s._)([(0,f.j)("esri.layers.support.BuildingFieldStatistics")],De);let Ke=class extends(x.Z.LoadableMixin((0,O.v)(pe.wq))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(p.Z.getLogger(this.declaredClass).error("building summary statistics are not loaded"),null)}load(e){const t=(0,y.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,S.default)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,s._)([(0,h.Cb)({constructOnly:!0,type:String})],Ke.prototype,"url",void 0),(0,s._)([(0,h.Cb)({readOnly:!0,type:[De],json:{read:{source:"summary"}}})],Ke.prototype,"fields",null),Ke=(0,s._)([(0,f.j)("esri.layers.support.BuildingSummaryStatistics")],Ke);const Je=Ke;var Ge=r(34785);const He=i.Z.ofType(Ve),We=(0,n.d9)(re.sublayersProperty);We.json.origins["web-scene"]={type:[W],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},We.json.origins["portal-item"]={type:[W],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let ze=class extends((0,le.Vt)((0,ie.Y)((0,oe.q)((0,ae.I)((0,ne.M)((0,d.R)((0,se.V)(_.Z)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new o.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new He,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const s=re.readSublayers(e,t,r);return re.forEachSublayer(s,(e=>e.layer=this)),this._sublayerOverrides&&(this.applySublayerOverrides(s,this._sublayerOverrides),this._sublayerOverrides=null),s}applySublayerOverrides(e,t){let{overrides:r,context:s}=t;re.forEachSublayer(e,(e=>e.read(r.get(e.id),s)))}readSublayerOverrides(e,t){const r=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?r.set(s.id,s):t.messages?.push(new a.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const s=[];re.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&s.push(t)})),s.length>0&&(t.sublayers=s)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push((0,n.d9)(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this._sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,c.v_)(this.parsedUrl?.path,t.statisticsHRef);return new Je({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=(0,y.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(u.r9).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return(0,l.G)(this,(e=>{re.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(le.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(le.xp.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new a.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&p.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&p.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new Ge.W(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(je){p.Z.getLogger(this.declaredClass).warn("Associated feature service item could not be loaded",je)}}};(0,s._)([(0,h.Cb)({type:["BuildingSceneLayer"]})],ze.prototype,"operationalLayerType",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],ze.prototype,"allSublayers",void 0),(0,s._)([(0,h.Cb)(We)],ze.prototype,"sublayers",void 0),(0,s._)([(0,g.r)("service","sublayers")],ze.prototype,"readSublayers",null),(0,s._)([(0,h.Cb)({type:He,nonNullable:!0,json:{write:!0}})],ze.prototype,"filters",void 0),(0,s._)([(0,h.Cb)({type:String,json:{write:!0}})],ze.prototype,"activeFilterId",void 0),(0,s._)([(0,h.Cb)({readOnly:!0,type:Je})],ze.prototype,"summaryStatistics",void 0),(0,s._)([(0,g.r)("summaryStatistics",["statisticsHRef"])],ze.prototype,"readSummaryStatistics",null),(0,s._)([(0,h.Cb)({type:[String],json:{read:!1}})],ze.prototype,"outFields",void 0),(0,s._)([(0,h.Cb)(q.vg)],ze.prototype,"fullExtent",void 0),(0,s._)([(0,h.Cb)({type:["show","hide","hide-children"]})],ze.prototype,"listMode",void 0),(0,s._)([(0,h.Cb)((0,q.Lx)(v.Z))],ze.prototype,"spatialReference",void 0),(0,s._)([(0,h.Cb)(q.PV)],ze.prototype,"elevationInfo",null),(0,s._)([(0,h.Cb)({json:{read:!1},readOnly:!0})],ze.prototype,"type",void 0),(0,s._)([(0,h.Cb)()],ze.prototype,"associatedFeatureServiceItem",void 0),ze=(0,s._)([(0,f.j)("esri.layers.BuildingSceneLayer")],ze);const Xe=ze}}]);
//# sourceMappingURL=6505.400365d5.chunk.js.map