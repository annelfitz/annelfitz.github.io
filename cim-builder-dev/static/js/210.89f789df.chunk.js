(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[210],{738:function(e,t,r){"use strict";r.r(t);var i=r(0),s=r(21),a=r(136),o=r(9),l=r(7),n=r(252),c=r(4),p=r(3),y=r(321),d=r(12),b=r(14),u=r(1),O=r(6),j=(r(5),r(15)),h=r(2),f=r(26),v=r(197),g=r(163),m=(r(247),r(299),r(301),r(302),r(89),r(229),r(225),r(250),r(230)),w=r(45),S=r(22),F=r(83),x=r(134),I=r(20),L=r(37),T=r(199),B=r(244),E=r(88);let A=class extends(Object(B.a)(y.b)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}};Object(i.a)([Object(u.b)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],A.prototype,"title",void 0),Object(i.a)([Object(j.a)("service","title",["alias","name"])],A.prototype,"readTitle",null),Object(i.a)([Object(u.b)()],A.prototype,"layer",void 0),Object(i.a)([Object(u.b)({type:O.a,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],A.prototype,"id",void 0),Object(i.a)([Object(j.a)("service","id")],A.prototype,"readIdOnlyOnce",null),Object(i.a)([Object(u.b)(Object(E.k)(String))],A.prototype,"modelName",void 0),Object(i.a)([Object(u.b)(Object(E.k)(Boolean))],A.prototype,"isEmpty",void 0),Object(i.a)([Object(u.b)({type:Boolean,json:{name:"visibility",write:!0}})],A.prototype,"visible",void 0),Object(i.a)([Object(u.b)({type:Number,json:{write:!0}})],A.prototype,"opacity",void 0),A=Object(i.a)([Object(h.a)("esri.layers.buildingSublayers.BuildingSublayer")],A);var q=A,k=r(851),N=r(342),P=r(326),_=r(654),M=r(715),R=r(65),Q=r(337),U=r(346);const D=c.a.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),K=Object(N.a)();let C=class extends(F.a.LoadableMixin(Object(x.b)(q))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new P.a(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,i=t.associatedLayerID;return Object(p.i)(r)&&"number"==typeof i?new T.default({portalItem:r,layerId:i}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return Object(p.i)(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=Object(p.i)(e)?e.signal:null,r=this._fetchService(t).then(()=>{this.indexInfo=Object(_.a)(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,D,t)});return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return Object(Q.a)(this,e)}async _fetchService(e){const t=(await Object(w.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,i,s,a;const o=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(i=r.domains)?void 0:i[e];return o&&"inherited"!==o.type?o:null!=(s=null==(a=this.getField(e))?void 0:a.domain)?s:null}getFeatureType(e){return e&&Object(p.i)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return Object(p.i)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return Object(p.i)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=Object(p.i)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:k.a,{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}=e;return{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}}createQuery(){const e=new R.a;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e})}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:Object(p.i)(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return Object(p.i)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),Object(p.h)(this.associatedLayer))throw new o.a("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new o.a("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};Object(i.a)([Object(u.b)({readOnly:!0})],C.prototype,"parsedUrl",null),Object(i.a)([Object(u.b)({type:M.c,readOnly:!0})],C.prototype,"nodePages",void 0),Object(i.a)([Object(u.b)({type:[M.b],readOnly:!0})],C.prototype,"materialDefinitions",void 0),Object(i.a)([Object(u.b)({type:[M.d],readOnly:!0})],C.prototype,"textureSetDefinitions",void 0),Object(i.a)([Object(u.b)({type:[M.a],readOnly:!0})],C.prototype,"geometryDefinitions",void 0),Object(i.a)([Object(u.b)({readOnly:!0})],C.prototype,"serviceUpdateTimeStamp",void 0),Object(i.a)([Object(u.b)({readOnly:!0})],C.prototype,"store",void 0),Object(i.a)([Object(u.b)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],C.prototype,"rootNode",void 0),Object(i.a)([Object(u.b)({readOnly:!0})],C.prototype,"attributeStorageInfo",void 0),Object(i.a)([Object(u.b)(K.fields)],C.prototype,"fields",void 0),Object(i.a)([Object(u.b)({readOnly:!0})],C.prototype,"fieldsIndex",null),Object(i.a)([Object(u.b)({readOnly:!0,type:T.default})],C.prototype,"associatedLayer",void 0),Object(i.a)([Object(j.a)("service","associatedLayer",["associatedLayerID"])],C.prototype,"readAssociatedLayer",null),Object(i.a)([Object(u.b)(K.outFields)],C.prototype,"outFields",void 0),Object(i.a)([Object(u.b)({type:String,readOnly:!0})],C.prototype,"objectIdField",null),Object(i.a)([Object(u.b)({readOnly:!0,type:String,json:{read:!1}})],C.prototype,"displayField",null),Object(i.a)([Object(u.b)({readOnly:!0,type:String,aliasOf:"layer.apiKey"})],C.prototype,"apiKey",void 0),Object(i.a)([Object(u.b)({readOnly:!0,type:L.a,aliasOf:"layer.fullExtent"})],C.prototype,"fullExtent",void 0),Object(i.a)([Object(u.b)({readOnly:!0,type:f.a,aliasOf:"layer.spatialReference"})],C.prototype,"spatialReference",void 0),Object(i.a)([Object(u.b)({readOnly:!0,aliasOf:"layer.version"})],C.prototype,"version",void 0),Object(i.a)([Object(u.b)({readOnly:!0,type:U.a,aliasOf:"layer.elevationInfo"})],C.prototype,"elevationInfo",void 0),Object(i.a)([Object(u.b)({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],C.prototype,"minScale",void 0),Object(i.a)([Object(u.b)({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],C.prototype,"maxScale",void 0),Object(i.a)([Object(u.b)({type:["hide","show"],json:{write:!0}})],C.prototype,"listMode",void 0),Object(i.a)([Object(u.b)({types:m.b,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],C.prototype,"renderer",void 0),Object(i.a)([Object(u.b)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],C.prototype,"definitionExpression",void 0),Object(i.a)([Object(u.b)(E.j)],C.prototype,"popupEnabled",void 0),Object(i.a)([Object(u.b)({type:g.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],C.prototype,"popupTemplate",void 0),Object(i.a)([Object(u.b)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],C.prototype,"normalReferenceFrame",void 0),Object(i.a)([Object(u.b)({readOnly:!0,json:{read:!1}})],C.prototype,"defaultPopupTemplate",null),Object(i.a)([Object(u.b)()],C.prototype,"types",null),Object(i.a)([Object(u.b)()],C.prototype,"typeIdField",null),Object(i.a)([Object(u.b)({json:{write:!1}}),Object(I.a)(new S.a({"3DObject":"3d-object",Point:"point"}))],C.prototype,"layerType",void 0),Object(i.a)([Object(u.b)()],C.prototype,"geometryType",null),Object(i.a)([Object(u.b)()],C.prototype,"profile",null),Object(i.a)([Object(u.b)({readOnly:!0,json:{read:!1}})],C.prototype,"capabilities",null),C=Object(i.a)([Object(h.a)("esri.layers.buildingSublayers.BuildingComponentSublayer")],C);var V,J=C,H=r(90);const Z={type:s.a,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:z}}},read:!1}};function z(e,t,r){if(e&&Array.isArray(e))return new s.a(e.map(e=>{const t=function(e){return"group"===e.layerType?G:J}(e);if(t){const i=new t;return i.read(e,r),i}r&&r.messages&&e&&r.messages.push(new H.a("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))}))}let G=V=class extends q{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Object(n.b)(this,e=>V.forEachSublayer(this.sublayers,t=>{"building-group"!==t.type&&e(t)}))}};var $;Object(i.a)([Object(u.b)({type:["hide","show","hide-children"],json:{write:!0}})],G.prototype,"listMode",void 0),Object(i.a)([Object(u.b)(Z)],G.prototype,"sublayers",void 0),G=V=Object(i.a)([Object(h.a)("esri.layers.buildingSublayers.BuildingGroupSublayer")],G),($=G||(G={})).sublayersProperty=Z,$.readSublayers=z,$.forEachSublayer=function e(t,r){t.forEach(t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)})};var W=G,X=r(339),Y=r(334),ee=r(324),te=r(323),re=r(325),ie=r(664),se=r(10),ae=r(345);let oe=class extends se.a{constructor(){super(...arguments),this.type=null}};Object(i.a)([Object(u.b)({type:String,readOnly:!0,json:{write:!0}})],oe.prototype,"type",void 0),oe=Object(i.a)([Object(h.a)("esri.layers.support.BuildingFilterAuthoringInfo")],oe);var le,ne=oe;let ce=le=class extends se.a{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new le({filterType:this.filterType,filterValues:Object(l.a)(this.filterValues)})}};Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],ce.prototype,"filterType",void 0),Object(i.a)([Object(u.b)({type:[String],json:{write:!0}})],ce.prototype,"filterValues",void 0),ce=le=Object(i.a)([Object(h.a)("esri.layers.support.BuildingFilterAuthoringInfoType")],ce);var pe,ye=ce;const de=s.a.ofType(ye);let be=pe=class extends se.a{clone(){return new pe({filterTypes:Object(l.a)(this.filterTypes)})}};Object(i.a)([Object(u.b)({type:de,json:{write:!0}})],be.prototype,"filterTypes",void 0),be=pe=Object(i.a)([Object(h.a)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],be);var ue,Oe=be;const je=s.a.ofType(Oe);let he=ue=class extends ne{constructor(){super(...arguments),this.type="checkbox"}clone(){return new ue({filterBlocks:Object(l.a)(this.filterBlocks)})}};Object(i.a)([Object(u.b)({type:["checkbox"]})],he.prototype,"type",void 0),Object(i.a)([Object(u.b)({type:je,json:{write:!0}})],he.prototype,"filterBlocks",void 0),he=ue=Object(i.a)([Object(h.a)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],he);var fe=he;let ve=class extends se.a{};Object(i.a)([Object(u.b)({readOnly:!0,json:{read:!1}})],ve.prototype,"type",void 0),ve=Object(i.a)([Object(h.a)("esri.layers.support.BuildingFilterMode")],ve);var ge,me=ve;let we=ge=class extends me{constructor(){super(...arguments),this.type="solid"}clone(){return new ge}};Object(i.a)([Object(u.b)({type:["solid"],readOnly:!0,json:{write:!0}})],we.prototype,"type",void 0),we=ge=Object(i.a)([Object(h.a)("esri.layers.support.BuildingFilterModeSolid")],we);var Se,Fe=we,xe=r(269);let Ie=Se=class extends me{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Se({edges:Object(l.a)(this.edges)})}};Object(i.a)([Object(I.a)({wireFrame:"wire-frame"})],Ie.prototype,"type",void 0),Object(i.a)([Object(u.b)(xe.a)],Ie.prototype,"edges",void 0),Ie=Se=Object(i.a)([Object(h.a)("esri.layers.support.BuildingFilterModeWireFrame")],Ie);var Le,Te=Ie;let Be=Le=class extends me{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Le}};Object(i.a)([Object(u.b)({type:["x-ray"],readOnly:!0,json:{write:!0}})],Be.prototype,"type",void 0),Be=Le=Object(i.a)([Object(h.a)("esri.layers.support.BuildingFilterModeXRay")],Be);var Ee,Ae=Be;const qe={nonNullable:!0,types:{key:"type",base:me,typeMap:{solid:Fe,"wire-frame":Te,"x-ray":Ae}},json:{read:e=>{switch(e&&e.type){case"solid":return Fe.fromJSON(e);case"wireFrame":return Te.fromJSON(e);case"x-ray":return Ae.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let ke=Ee=class extends se.a{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Fe,this.title=""}clone(){return new Ee({filterExpression:this.filterExpression,filterMode:Object(l.a)(this.filterMode),title:this.title})}};Object(i.a)([Object(u.b)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ke.prototype,"filterExpression",void 0),Object(i.a)([Object(u.b)(qe)],ke.prototype,"filterMode",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ke.prototype,"title",void 0),ke=Ee=Object(i.a)([Object(h.a)("esri.layers.support.BuildingFilterBlock")],ke);var Ne,Pe=ke;const _e=s.a.ofType(Pe);let Me=Ne=class extends se.a{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Object(ae.a)(),this.name=null}clone(){return new Ne({description:this.description,filterBlocks:Object(l.a)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:Object(l.a)(this.filterAuthoringInfo)})}};Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],Me.prototype,"description",void 0),Object(i.a)([Object(u.b)({type:_e,json:{write:{enabled:!0,isRequired:!0}}})],Me.prototype,"filterBlocks",void 0),Object(i.a)([Object(u.b)({types:{key:"type",base:ne,typeMap:{checkbox:fe}},json:{read:e=>{switch(e&&e.type){case"checkbox":return fe.fromJSON(e);default:return null}},write:!0}})],Me.prototype,"filterAuthoringInfo",void 0),Object(i.a)([Object(u.b)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Me.prototype,"id",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Me.prototype,"name",void 0),Me=Ne=Object(i.a)([Object(h.a)("esri.layers.support.BuildingFilter")],Me);var Re=Me;const Qe=c.a.getLogger("esri.layers.support.BuildingSummaryStatistics");let Ue=class extends se.a{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};Object(i.a)([Object(u.b)({type:String})],Ue.prototype,"fieldName",void 0),Object(i.a)([Object(u.b)({type:String})],Ue.prototype,"modelName",void 0),Object(i.a)([Object(u.b)({type:String})],Ue.prototype,"label",void 0),Object(i.a)([Object(u.b)({type:Number})],Ue.prototype,"min",void 0),Object(i.a)([Object(u.b)({type:Number})],Ue.prototype,"max",void 0),Object(i.a)([Object(u.b)({json:{read:e=>Array.isArray(e)&&(e.every(e=>"string"==typeof e)||e.every(e=>"number"==typeof e))?e.slice():null}})],Ue.prototype,"mostFrequentValues",void 0),Object(i.a)([Object(u.b)({type:[Number]})],Ue.prototype,"subLayerIds",void 0),Ue=Object(i.a)([Object(h.a)("esri.layers.support.BuildingFieldStatistics")],Ue);let De=class extends(F.a.LoadableMixin(Object(x.b)(se.a))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(Qe.error("building summary statistics are not loaded"),null)}load(e){const t=Object(p.i)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await Object(w.default)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};Object(i.a)([Object(u.b)({constructOnly:!0,type:String})],De.prototype,"url",void 0),Object(i.a)([Object(u.b)({readOnly:!0,type:[Ue],json:{read:{source:"summary"}}})],De.prototype,"fields",null),De=Object(i.a)([Object(h.a)("esri.layers.support.BuildingSummaryStatistics")],De);var Ke=De,Ce=r(852);const Ve=c.a.getLogger("esri.layers.BuildingSceneLayer"),Je=s.a.ofType(Re),He=Object(l.a)(W.sublayersProperty);He.json.origins["web-scene"]={type:[J],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},He.json.origins["portal-item"]={type:[J],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let Ze=class extends(Object(ie.a)(Object(Y.a)(Object(ee.a)(Object(te.a)(Object(re.a)(Object(y.a)(Object(X.a)(v.a)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new a.a({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new Je,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const i=W.readSublayers(e,t,r);return W.forEachSublayer(i,e=>e.layer=this),this.sublayerOverrides&&(this.applySublayerOverrides(i,this.sublayerOverrides),this.sublayerOverrides=null),i}applySublayerOverrides(e,{overrides:t,context:r}){W.forEachSublayer(e,e=>e.read(t.get(e.id),r))}readSublayerOverrides(e,t){const r=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?r.set(i.id,i):t.messages.push(new o.a("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const i=[];W.forEachSublayer(this.sublayers,e=>{const t=e.write({},r);Object.keys(t).length>1&&i.push(t)}),i.length>0&&(t.sublayers=i)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach(e=>{t.sublayers.push(Object(l.a)(e))})}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this.sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=Object(b.z)(this.parsedUrl.path,t.statisticsHRef);return new Ke({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=Object(p.i)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(d.u).then(()=>this._fetchService(t)).then(()=>this._fetchAssociatedFeatureService(t));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return Object(n.a)(this,e=>{W.forEachSublayer(this.sublayers,t=>{"building-group"!==t.type&&e(t)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new o.a("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&Ve.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&Ve.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new Ce.a(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(r){Ve.warn("Associated feature service item could not be loaded",r)}}};Object(i.a)([Object(u.b)({type:["BuildingSceneLayer"]})],Ze.prototype,"operationalLayerType",void 0),Object(i.a)([Object(u.b)({readOnly:!0})],Ze.prototype,"allSublayers",void 0),Object(i.a)([Object(u.b)(He)],Ze.prototype,"sublayers",void 0),Object(i.a)([Object(j.a)("service","sublayers")],Ze.prototype,"readSublayers",null),Object(i.a)([Object(u.b)({type:Je,nonNullable:!0,json:{write:!0}})],Ze.prototype,"filters",void 0),Object(i.a)([Object(u.b)({type:String,json:{write:!0}})],Ze.prototype,"activeFilterId",void 0),Object(i.a)([Object(u.b)({readOnly:!0,type:Ke})],Ze.prototype,"summaryStatistics",void 0),Object(i.a)([Object(j.a)("summaryStatistics",["statisticsHRef"])],Ze.prototype,"readSummaryStatistics",null),Object(i.a)([Object(u.b)({type:[String],json:{read:!1}})],Ze.prototype,"outFields",void 0),Object(i.a)([Object(u.b)(E.l)],Ze.prototype,"fullExtent",void 0),Object(i.a)([Object(u.b)({type:["show","hide","hide-children"]})],Ze.prototype,"listMode",void 0),Object(i.a)([Object(u.b)(Object(E.k)(f.a))],Ze.prototype,"spatialReference",void 0),Object(i.a)([Object(u.b)(E.b)],Ze.prototype,"elevationInfo",null),Object(i.a)([Object(u.b)({json:{read:!1},readOnly:!0})],Ze.prototype,"type",void 0),Object(i.a)([Object(u.b)()],Ze.prototype,"associatedFeatureServiceItem",void 0),Ze=Object(i.a)([Object(h.a)("esri.layers.BuildingSceneLayer")],Ze);var ze=Ze;t.default=ze}}]);
//# sourceMappingURL=210.89f789df.chunk.js.map