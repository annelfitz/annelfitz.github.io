"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9369],{84552:(e,t,i)=>{i.d(t,{Z:()=>c});var r,s=i(43697),n=i(10736),o=i(35463),a=i(5600),l=(i(80442),i(75215),i(92604),i(52525)),u=i(78981);let p=r=class extends n.wq{constructor(e){super(e),this.value=0,this.unit="milliseconds"}toMilliseconds(){return(0,o.rJ)(this.value,this.unit,"milliseconds")}clone(){return new r({value:this.value,unit:this.unit})}};(0,s._)([(0,a.Cb)({type:Number,json:{write:!0},nonNullable:!0})],p.prototype,"value",void 0),(0,s._)([(0,a.Cb)({type:u.v.apiValues,json:{type:u.v.jsonValues,read:u.v.read,write:u.v.write},nonNullable:!0})],p.prototype,"unit",void 0),p=r=(0,s._)([(0,l.j)("esri.TimeInterval")],p);var c=p},74085:(e,t,i)=>{function r(e){}i.d(t,{Bg:()=>r}),i(80442)},88068:(e,t,i)=>{i.r(t),i.d(t,{default:()=>L});var r=i(43697),s=(i(66577),i(51773)),n=(i(16050),i(12501),i(95088),i(79056),i(5499),i(84382),i(30687),i(91423)),o=i(32400),a=i(16453),l=i(5600),u=(i(80442),i(75215),i(92604),i(52525)),p=i(30556),c=i(86973),d=i(29600),y=i(20102),m=i(83379),f=i(70586),v=i(16467),h=i(82971);const b="http://www.opengis.net/def/crs/OGC/1.3/CRS84";let w=class extends m.Z{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:i,supportedCrs:r},layer:{apiKey:s,capabilities:n,customParameters:o}}=this;return{capabilities:n,collection:e,layerDefinition:t,queryParameters:{apiKey:s,customParameters:o},spatialReference:i,supportedCrs:r}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){const i=this.getFeatureDefinition();return this.load(t).then((()=>(0,v.KG)(i,e,t)))}queryFeaturesJSON(e,t={}){const i=this.getFeatureDefinition();return this.load(t).then((()=>(0,v.yN)(i,e,t)))}queryObjectIds(e,t={}){return null}supportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator&&!this.featureDefinition.supportedCrs[e.wkid])}_conformsToType(e,t){var i;const r=new RegExp(`^${t}$`,"i");return null!=(i=e.conformsTo.some((e=>r.test(e))))&&i}_getCapabilities(e,t){var i,r,s,n,o,a,l;const u=(0,f.pC)(t)?null==(i=t.components)?void 0:i.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!=(r=null!=(s=null==u||null==(n=u.limit)||null==(o=n.schema)?void 0:o.maximum)?s:null==u||null==(a=u.limitFeatures)||null==(l=a.schema)?void 0:l.maximum)?r:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const i=null==(t=e.extent)?void 0:t.spatial;if(!i)return null;const r=i.bbox[0],s=4===r.length,n=r[0],o=r[1],a=s?void 0:r[2];return{xmin:n,ymin:o,xmax:s?r[2]:r[3],ymax:s?r[3]:r[4],zmin:a,zmax:s?void 0:r[5],spatialReference:h.Z.WGS84.toJSON()}}_getStorageSpatialReference(e){var t;const i=null!=(t=e.storageCrs)?t:b,r=(0,v.d)(i);return(0,f.Wi)(r)?h.Z.WGS84:new h.Z({wkid:r})}_getSupportedSpatialReferences(e,t){var i;const r="#/crs",s=null!=(i=e.crs)?i:[b],n=s.includes(r)?s.filter((e=>e!==r)).concat(t.crs):s,o=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter((e=>!o.test(e)))}async _loadOGCServices(e,t){const i=(0,f.pC)(t)?t.signal:null,{apiKey:r,collectionId:s,customParameters:n,fields:o,geometryType:a,hasZ:l,objectIdField:u,timeInfo:p,url:d}=e,m={fields:null==o?void 0:o.map((e=>e.toJSON())),geometryType:c.P$.toJSON(a),hasZ:l,objectIdField:u,timeInfo:null==p?void 0:p.toJSON()},h={apiKey:r,customParameters:n,signal:i},b=await(0,v.gp)(d,h),[w,g]=await Promise.all([(0,v.G4)(b,h),(0,v.j)(b,h)]);if(!this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new y.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");const x=g.collections.find((e=>e.id===s));if(!x)throw new y.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const C=this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await(0,v.eS)(b,h):null,_=await(0,v.w9)(x,m,h),S=this._getCapabilities(_.hasZ,C),T=this._getExtent(x),F=this._getStorageSpatialReference(x).toJSON(),E=this._getSupportedSpatialReferences(x,g),I={};for(const e of E){const t=(0,v.d)(e);(0,f.pC)(t)&&(I[t]=e)}_.extent=T,this.featureDefinition={capabilities:S,collection:x,layerDefinition:_,queryParameters:{},spatialReference:F,supportedCrs:I}}};(0,r._)([(0,l.Cb)()],w.prototype,"featureDefinition",void 0),(0,r._)([(0,l.Cb)({constructOnly:!0})],w.prototype,"layer",void 0),(0,r._)([(0,l.Cb)()],w.prototype,"type",void 0),w=(0,r._)([(0,u.j)("esri.layers.graphics.sources.OGCFeatureSource")],w);var g=w,x=i(54295),C=i(78096),_=i(17017),S=i(38009),T=i(68825),F=i(16859),E=i(34760),I=i(72965),j=i(28294),D=i(21506),R=i(55785),O=i(16451),V=i(1231),Z=i(53518),z=i(69165),N=i(54306),M=i(30707),P=i(57444),q=i(32163),U=i(6570);const k=(0,Z.v)();let B=class extends((0,x.V)((0,_.N)((0,C.h)((0,T.c)((0,j.n)((0,I.M)((0,S.q)((0,F.I)((0,E.Q)((0,a.R)(d.Z))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new g({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}writeWebSceneFeatureReduction(e,t,i,r){(0,R.Q6)(e,t,"layerDefinition.featureReduction",r)}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){(0,z.YN)(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,q.eZ)(this,e)}createQuery(){return new P.Z}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var i;let r,s=!1;const n=null==t||null==(i=t.feature)?void 0:i.attributes,o=this.typeIdField&&(null==n?void 0:n[this.typeIdField]);return null!=o&&this.types&&(s=this.types.some((t=>{var i,s;return t.id==o&&(r=null==(i=t.domains)?void 0:i[e],"inherited"===(null==(s=r)?void 0:s.type)&&(r=this._getLayerDomain(e)),!0)}))),s||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(P.Z.from(e)||this.createQuery(),t))).then((e=>{var t;return null==e||null==(t=e.features)||t.forEach((e=>{e.layer=e.sourceLayer=this})),e}))}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),(0,z.YN)(this.renderer,this.fieldsIndex),(0,z.UF)(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};(0,r._)([(0,l.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],B.prototype,"capabilities",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],B.prototype,"collectionId",void 0),(0,r._)([(0,l.Cb)({type:String})],B.prototype,"copyright",void 0),(0,r._)([(0,l.Cb)({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),(0,r._)([(0,l.Cb)({type:String})],B.prototype,"definitionExpression",void 0),(0,r._)([(0,l.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],B.prototype,"description",void 0),(0,r._)([(0,l.Cb)({type:String})],B.prototype,"displayField",void 0),(0,r._)([(0,l.Cb)(D.PV)],B.prototype,"elevationInfo",void 0),(0,r._)([(0,l.Cb)(R.dm)],B.prototype,"featureReduction",void 0),(0,r._)([(0,p.c)("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:R.Gx}})],B.prototype,"writeWebSceneFeatureReduction",null),(0,r._)([(0,l.Cb)({type:[V.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],B.prototype,"fields",void 0),(0,r._)([(0,l.Cb)(k.fieldsIndex)],B.prototype,"fieldsIndex",void 0),(0,r._)([(0,l.Cb)({readOnly:!0,type:U.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],B.prototype,"fullExtent",void 0),(0,r._)([(0,l.Cb)({type:c.Mk.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:c.Mk.read}}}}})],B.prototype,"geometryType",void 0),(0,r._)([(0,l.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],B.prototype,"hasZ",void 0),(0,r._)([(0,l.Cb)({type:Boolean,readOnly:!0})],B.prototype,"isTable",null),(0,r._)([(0,l.Cb)({type:[N.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:M.r},write:!0}}}})],B.prototype,"labelingInfo",void 0),(0,r._)([(0,l.Cb)(D.iR)],B.prototype,"labelsVisible",void 0),(0,r._)([(0,l.Cb)(D.rn)],B.prototype,"legendEnabled",void 0),(0,r._)([(0,l.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],B.prototype,"objectIdField",void 0),(0,r._)([(0,l.Cb)({type:["OGCFeatureLayer"]})],B.prototype,"operationalLayerType",void 0),(0,r._)([(0,l.Cb)(D.C_)],B.prototype,"popupEnabled",void 0),(0,r._)([(0,l.Cb)({type:s.Z,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),(0,r._)([(0,l.Cb)({types:o.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:o.o,name:"layerDefinition.drawingInfo.renderer",write:{writer:n.cW}}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],B.prototype,"renderer",null),(0,r._)([(0,l.Cb)({type:Boolean})],B.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,l.Cb)({readOnly:!0})],B.prototype,"source",void 0),(0,r._)([(0,l.Cb)({readOnly:!0,type:h.Z,json:{origins:{service:{read:!0}}}})],B.prototype,"spatialReference",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],B.prototype,"title",void 0),(0,r._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],B.prototype,"type",void 0),(0,r._)([(0,l.Cb)({type:String,readOnly:!0})],B.prototype,"typeIdField",void 0),(0,r._)([(0,l.Cb)({type:[O.Z]})],B.prototype,"types",void 0),(0,r._)([(0,l.Cb)(D.HQ)],B.prototype,"url",void 0),B=(0,r._)([(0,u.j)("esri.layers.OGCFeatureLayer")],B);var L=B},61159:(e,t,i)=>{i.d(t,{g:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},54295:(e,t,i)=>{i.d(t,{V:()=>o});var r=i(43697),s=i(5600),n=(i(80442),i(75215),i(92604),i(52525));const o=e=>{let t=class extends e{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):function(e){return"portalItem"in e}(this)?null==(e=this.portalItem)?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,r._)([(0,s.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,r._)([(0,n.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17017:(e,t,i)=>{i.d(t,{N:()=>o});var r=i(43697),s=i(5600),n=(i(80442),i(75215),i(92604),i(52525));const o=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,r._)([(0,s.Cb)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,r._)([(0,n.j)("esri.layers.mixins.CustomParametersMixin")],t),t}},68825:(e,t,i)=>{i.d(t,{c:()=>f});var r,s=i(43697),n=i(78286),o=i(5600),a=(i(80442),i(75215),i(92604),i(52525)),l=i(35454),u=i(10736);const p=new l.Xn({asc:"ascending",desc:"descending"});let c=r=class extends u.wq{constructor(){super(...arguments),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new r({field:this.field,valueExpression:this.valueExpression,order:this.order})}};(0,s._)([(0,o.Cb)({type:String,json:{write:!0}})],c.prototype,"field",void 0),(0,s._)([(0,o.Cb)({type:String,json:{write:!0}})],c.prototype,"valueExpression",void 0),(0,s._)([(0,o.Cb)({type:p.apiValues,json:{read:p.read,write:p.write}})],c.prototype,"order",void 0),c=r=(0,s._)([(0,a.j)("esri.layers.support.OrderByInfo")],c);var d=c;function y(e,t,i){if(!e)return null;const r=e.find((e=>!!e.field));if(!r)return null;const s=new d;return s.read(r,i),[s]}function m(e,t,i,r){const s=e.find((e=>!!e.field));s&&(0,n.RB)(i,[s.toJSON()],t)}const f=e=>{let t=class extends e{constructor(){super(...arguments),this.orderBy=null}};return(0,s._)([(0,o.Cb)({type:[d],json:{origins:{"web-scene":{write:!1,read:!1}},read:{source:"layerDefinition.orderBy",reader:y},write:{target:"layerDefinition.orderBy",writer:m}}})],t.prototype,"orderBy",void 0),t=(0,s._)([(0,a.j)("esri.layers.mixins.OrderedLayer")],t),t}},28294:(e,t,i)=>{i.d(t,{n:()=>d});var r=i(43697),s=i(92835),n=i(84552),o=i(5600),a=(i(80442),i(75215),i(92604),i(71715)),l=i(52525),u=i(30547),p=i(69165),c=i(78981);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const i=t.timeInfo.exportOptions;if(!i)return null;const r=i.timeOffset,s=c.v.fromJSON(i.timeOffsetUnits);return r&&s?new n.Z({value:r,unit:s}):null}set timeInfo(e){(0,p.UF)(e,this.fieldsIndex),this._set("timeInfo",e)}};return(0,r._)([(0,o.Cb)({type:s.Z,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,r._)([(0,o.Cb)({type:n.Z})],t.prototype,"timeOffset",void 0),(0,r._)([(0,a.r)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,r._)([(0,o.Cb)({value:null,type:u.Z,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,r._)([(0,o.Cb)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=(0,r._)([(0,l.j)("esri.layers.mixins.TemporalLayer")],t),t}},61960:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(43697),s=i(10736),n=i(5600),o=(i(80442),i(75215),i(92604),i(52525));let a=class extends s.wq{constructor(){super(...arguments),this.type=null}};(0,r._)([(0,n.Cb)({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=(0,r._)([(0,o.j)("esri.layers.support.FeatureReduction")],a);var l=a},85857:(e,t,i)=>{i.d(t,{Z:()=>u});var r,s=i(43697),n=i(5600),o=(i(80442),i(75215),i(92604),i(52525)),a=i(61960);let l=r=class extends a.Z{constructor(e){super(e),this.type="selection"}clone(){return new r}};(0,s._)([(0,n.Cb)({type:["selection"]})],l.prototype,"type",void 0),l=r=(0,s._)([(0,o.j)("esri.layers.support.FeatureReductionSelection")],l);var u=l},70082:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(43697),s=i(35454),n=i(10736),o=i(22974),a=i(5600),l=(i(75215),i(80442),i(92604),i(52525)),u=i(30556);const p=new s.Xn({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let c=class extends n.wq{constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}writeDrawingTool(e,t){t.drawingTool=p.toJSON(e)}writePrototype(e,t){t.prototype=(0,o.yd)((0,o.d9)(e),!0)}writeThumbnail(e,t){t.thumbnail=(0,o.yd)((0,o.d9)(e))}};(0,r._)([(0,a.Cb)({json:{write:!0}})],c.prototype,"name",void 0),(0,r._)([(0,a.Cb)({json:{write:!0}})],c.prototype,"description",void 0),(0,r._)([(0,a.Cb)({json:{read:p.read,write:p.write}})],c.prototype,"drawingTool",void 0),(0,r._)([(0,u.c)("drawingTool")],c.prototype,"writeDrawingTool",null),(0,r._)([(0,a.Cb)({json:{write:!0}})],c.prototype,"prototype",void 0),(0,r._)([(0,u.c)("prototype")],c.prototype,"writePrototype",null),(0,r._)([(0,a.Cb)({json:{write:!0}})],c.prototype,"thumbnail",void 0),(0,r._)([(0,u.c)("thumbnail")],c.prototype,"writeThumbnail",null),c=(0,r._)([(0,l.j)("esri.layers.support.FeatureTemplate")],c);var d=c},16451:(e,t,i)=>{i.d(t,{Z:()=>f});var r=i(43697),s=i(10736),n=i(22974),o=i(5600),a=(i(75215),i(80442),i(92604),i(71715)),l=i(52525),u=i(30556),p=(i(29655),i(70082)),c=i(91764),d=i(35643),y=i(69150);let m=class extends s.wq{constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const i in e)if(e.hasOwnProperty(i)){const r=e[i];switch(r.type){case"range":t[i]=y.Z.fromJSON(r);break;case"codedValue":t[i]=d.Z.fromJSON(r);break;case"inherited":t[i]=c.Z.fromJSON(r)}}return t}writeDomains(e,t){const i={};for(const t in e)e.hasOwnProperty(t)&&(i[t]=e[t]&&e[t].toJSON());(0,n.yd)(i),t.domains=i}readTemplates(e){return e&&e.map((e=>new p.Z(e)))}writeTemplates(e,t){t.templates=e&&e.map((e=>e.toJSON()))}};(0,r._)([(0,o.Cb)({json:{write:!0}})],m.prototype,"id",void 0),(0,r._)([(0,o.Cb)({json:{write:!0}})],m.prototype,"name",void 0),(0,r._)([(0,o.Cb)({json:{write:!0}})],m.prototype,"domains",void 0),(0,r._)([(0,a.r)("domains")],m.prototype,"readDomains",null),(0,r._)([(0,u.c)("domains")],m.prototype,"writeDomains",null),(0,r._)([(0,o.Cb)({json:{write:!0}})],m.prototype,"templates",void 0),(0,r._)([(0,a.r)("templates")],m.prototype,"readTemplates",null),(0,r._)([(0,u.c)("templates")],m.prototype,"writeTemplates",null),m=(0,r._)([(0,l.j)("esri.layers.support.FeatureType")],m);var f=m},30547:(e,t,i)=>{i.d(t,{Z:()=>w});var r,s=i(43697),n=i(92835),o=i(84552),a=i(10736),l=i(22974),u=i(70586),p=i(5600),c=(i(75215),i(80442),i(92604),i(71715)),d=i(52525),y=i(30556);let m=r=class extends a.wq{constructor(e){super(e),this.respectsDaylightSaving=!1,this.timezone=null}readRespectsDaylightSaving(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}clone(){const{respectsDaylightSaving:e,timezone:t}=this;return new r({respectsDaylightSaving:e,timezone:t})}};(0,s._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"respectsDaylightSaving",void 0),(0,s._)([(0,c.r)("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],m.prototype,"readRespectsDaylightSaving",null),(0,s._)([(0,p.Cb)({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],m.prototype,"timezone",void 0),m=r=(0,s._)([(0,d.j)("esri.layers.support.TimeReference")],m);var f,v=m,h=i(78981);let b=f=class extends a.wq{constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const i=new Date(t.timeExtent[0]),r=new Date(t.timeExtent[1]);return new n.Z({start:i,end:r})}writeFullTimeExtent(e,t){e&&(0,u.pC)(e.start)&&(0,u.pC)(e.end)?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?new o.Z({value:t.timeInterval,unit:h.v.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new o.Z({value:t.defaultTimeInterval,unit:h.v.fromJSON(t.defaultTimeIntervalUnits)}):null}writeInterval(e,t){if(e){const i=e.toJSON();t.timeInterval=i.value,t.timeIntervalUnits=i.unit}else t.timeInterval=null,t.timeIntervalUnits=null}clone(){const{cumulative:e,endField:t,hasLiveData:i,interval:r,startField:s,timeReference:n,fullTimeExtent:o,trackIdField:a,useTime:u}=this;return new f({cumulative:e,endField:t,hasLiveData:i,interval:r,startField:s,timeReference:(0,l.d9)(n),fullTimeExtent:(0,l.d9)(o),trackIdField:a,useTime:u})}};(0,s._)([(0,p.Cb)({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],b.prototype,"cumulative",void 0),(0,s._)([(0,p.Cb)({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],b.prototype,"endField",void 0),(0,s._)([(0,p.Cb)({type:n.Z,json:{write:{enabled:!0,allowNull:!0}}})],b.prototype,"fullTimeExtent",void 0),(0,s._)([(0,c.r)("fullTimeExtent",["timeExtent"])],b.prototype,"readFullTimeExtent",null),(0,s._)([(0,y.c)("fullTimeExtent")],b.prototype,"writeFullTimeExtent",null),(0,s._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],b.prototype,"hasLiveData",void 0),(0,s._)([(0,p.Cb)({type:o.Z,json:{write:{enabled:!0,allowNull:!0}}})],b.prototype,"interval",void 0),(0,s._)([(0,c.r)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],b.prototype,"readInterval",null),(0,s._)([(0,y.c)("interval")],b.prototype,"writeInterval",null),(0,s._)([(0,p.Cb)({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],b.prototype,"startField",void 0),(0,s._)([(0,p.Cb)({type:v,json:{write:{enabled:!0,allowNull:!0}}})],b.prototype,"timeReference",void 0),(0,s._)([(0,p.Cb)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],b.prototype,"trackIdField",void 0),(0,s._)([(0,p.Cb)({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],b.prototype,"useTime",void 0),b=f=(0,s._)([(0,d.j)("esri.layers.support.TimeInfo")],b);var w=b},55785:(e,t,i)=>{i.d(t,{dm:()=>j,ij:()=>E,Gx:()=>F,Q6:()=>I});var r,s=i(20102),n=i(78286),o=i(61960),a=i(43697),l=i(51773),u=i(78223),p=i(10736),c=i(22974),d=i(62357),y=i(5600),m=(i(75215),i(80442),i(92604),i(52525));let f=r=class extends p.wq{constructor(){super(...arguments),this.statisticType=null,this.onStatisticField=null,this.onStatisticValueExpression=null}clone(){return new r({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})}};(0,a._)([(0,y.Cb)({type:String,json:{write:!0}})],f.prototype,"statisticType",void 0),(0,a._)([(0,y.Cb)({type:String,json:{write:!0}})],f.prototype,"onStatisticField",void 0),(0,a._)([(0,y.Cb)({type:String,json:{write:!0}})],f.prototype,"onStatisticValueExpression",void 0),f=r=(0,a._)([(0,m.j)("esri.layers.support.OutStatistic")],f);var v,h=f;let b=v=class extends p.wq{constructor(){super(...arguments),this.name=null}clone(){return new v({name:this.name,outStatistic:this.outStatistic.clone()})}};(0,a._)([(0,y.Cb)({type:String,json:{write:!0}})],b.prototype,"name",void 0),(0,a._)([(0,y.Cb)({type:h,json:{write:!0}})],b.prototype,"outStatistic",void 0),b=v=(0,a._)([(0,m.j)("esri.layers.support.AggregateField")],b);var w,g=b,x=i(21506),C=i(54306);let _=w=class extends p.wq{constructor(e){super(e),this.type="cluster",this.clusterRadius=(0,d.t_)("80px"),this.clusterMinSize=(0,d.t_)("12px"),this.clusterMaxSize=(0,d.t_)("50px"),this.popupEnabled=!0,this.popupTemplate=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}clone(){return new w({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:(0,c.d9)(this.labelingInfo),labelsVisible:this.labelsVisible,fields:(0,c.d9)(this.fields),popupEnabled:this.popupEnabled,popupTemplate:(0,c.d9)(this.popupTemplate)})}};(0,a._)([(0,y.Cb)({type:["cluster"],readOnly:!0,json:{write:!0}})],_.prototype,"type",void 0),(0,a._)([(0,y.Cb)({type:Number,cast:e=>"auto"===e?e:(0,d.t_)(e),json:{write:!0}})],_.prototype,"clusterRadius",void 0),(0,a._)([(0,y.Cb)({type:Number,cast:d.t_,json:{write:!0}})],_.prototype,"clusterMinSize",void 0),(0,a._)([(0,y.Cb)({type:Number,cast:d.t_,json:{write:!0}})],_.prototype,"clusterMaxSize",void 0),(0,a._)([(0,y.Cb)(x.C_)],_.prototype,"popupEnabled",void 0),(0,a._)([(0,y.Cb)({type:l.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],_.prototype,"popupTemplate",void 0),(0,a._)([(0,y.Cb)({types:u.AH})],_.prototype,"symbol",void 0),(0,a._)([(0,y.Cb)({type:[C.Z],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],_.prototype,"labelingInfo",void 0),(0,a._)([(0,y.Cb)(x.iR)],_.prototype,"labelsVisible",void 0),(0,a._)([(0,y.Cb)({type:[g],json:{write:!0}})],_.prototype,"fields",void 0),_=w=(0,a._)([(0,m.j)("esri.layers.support.FeatureReductionCluster")],_);var S=_,T=i(85857);const F={key:"type",base:o.Z,typeMap:{selection:T.Z}};function E(e,t){const i=(t=t.layerDefinition||t).featureReduction;if(i)switch(i.type){case"selection":return T.Z.fromJSON(i);case"cluster":return S.fromJSON(i)}return null}function I(e,t,i,r){const o=function(e,t,i){return e?"selection"!==e.type?(i.messages&&i.messages.push(new s.Z("featureReduction:unsupported",`FeatureReduction of type '${e.declaredClass}' are not supported in scenes.`,{featureReduction:e,context:i})),null):e.write({},i):null}(e,0,r);o&&(0,n.RB)(i,o,t)}const j={types:{key:"type",base:o.Z,typeMap:{selection:T.Z,cluster:S}},json:{write:{target:"layerDefinition.featureReduction",allowNull:!0}}}},53518:(e,t,i)=>{i.d(t,{v:()=>l});var r=i(92604),s=i(1231),n=i(99514),o=i(69165);const a=r.Z.getLogger("esri.layers.support.fieldProperties");function l(){return{fields:{type:[s.Z],value:null},fieldsIndex:{readOnly:!0,get(){return new n.Z(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e)this.fieldsIndex.has(t)||a.error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e});return(0,o.Q0)(this.fieldsIndex,e)}}}}},30707:(e,t,i)=>{i.d(t,{r:()=>n});var r=i(54306);const s=/\[([^\[\]]+)\]/gi;function n(e,t,i){return e?e.map((e=>{const n=new r.Z;if(n.read(e,i),n.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields;n.labelExpression=n.labelExpression.replace(s,((t,i)=>`[${function(e,t){if(!t)return e;const i=e.toLowerCase();for(let e=0;e<t.length;e++){const r=t[e].name;if(r.toLowerCase()===i)return r}return e}(i,e)}]`))}return n})):null}},78981:(e,t,i)=>{i.d(t,{v:()=>r});const r=(0,i(35454).wY)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0})},99282:(e,t,i)=>{i.d(t,{a:()=>n});var r=i(67900),s=i(68441);const n={inches:(0,r.En)(1,"meters","inches"),feet:(0,r.En)(1,"meters","feet"),"us-feet":(0,r.En)(1,"meters","us-feet"),yards:(0,r.En)(1,"meters","yards"),miles:(0,r.En)(1,"meters","miles"),"nautical-miles":(0,r.En)(1,"meters","nautical-miles"),millimeters:(0,r.En)(1,"meters","millimeters"),centimeters:(0,r.En)(1,"meters","centimeters"),decimeters:(0,r.En)(1,"meters","decimeters"),meters:(0,r.En)(1,"meters","meters"),kilometers:(0,r.En)(1,"meters","kilometers"),"decimal-degrees":1/(0,r.ty)(1,"meters",s.sv.radius)}},51706:(e,t,i)=>{function r(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function s(e){return null!=e&&!isNaN(e)&&isFinite(e)}function n(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function o(e,t){const i=t||n(e),r=e.valueUnit||"unknown";return"unknown"===i?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===r?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}i.d(t,{PS:()=>n,QW:()=>o,iY:()=>r,qh:()=>s})},28101:(e,t,i)=>{i.d(t,{PR:()=>C,Lq:()=>m,Km:()=>f,cM:()=>v,ap:()=>h,V3:()=>g,B3:()=>y});var r=i(22303),s=i(38171),n=i(74085),o=i(92604),a=i(70586),l=i(99282),u=i(51706);const p=o.Z.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),c=new s.Z,d=Math.PI,y=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function m(e,t,i){const s="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"color"===e.type))[0]:e;if(!s)return;if("esri.renderers.visualVariables.ColorVariable"!==s.declaredClass)return void p.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const n="number"==typeof t,o=n?null:t,l=o&&o.attributes;let u=n?t:null;const c=s.field,{ipData:d,hasExpression:y}=s.cache;let m=s.cache.compiledFunc;if(!c&&!y){const e=s.stops;return e&&e[0]&&e[0].color}if("number"!=typeof u)if(y){if(!(0,a.pC)(i)||!(0,a.pC)(i.arcade))return void p.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,r=t.getViewInfo(e),n=t.createExecContext(o,r);if(!m){const e=t.createSyntaxTree(s.valueExpression);m=t.createFunction(e),s.cache.compiledFunc=m}u=t.executeFunction(m,n)}else l&&(u=l[c]);const f=s.normalizationField,v=l?parseFloat(l[f]):void 0;if(null!=u&&(!f||n||!isNaN(v)&&0!==v)){isNaN(v)||n||(u/=v);const e=x(u,d);if(e){const t=e[0],n=e[1],o=t===n?s.stops[t].color:r.Z.blendColors(s.stops[t].color,s.stops[n].color,e[2],(0,a.pC)(i)?i.color:void 0);return new r.Z(o)}}}function f(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"opacity"===e.type))[0]:e;if(!r)return;if("esri.renderers.visualVariables.OpacityVariable"!==r.declaredClass)return void p.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const s="number"==typeof t,n=s?null:t,o=n&&n.attributes;let l=s?t:null;const u=r.field,{ipData:c,hasExpression:d}=r.cache;let y=r.cache.compiledFunc;if(!u&&!d){const e=r.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(d){if((0,a.Wi)(i)||(0,a.Wi)(i.arcade))return void p.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,s=t.getViewInfo(e),o=t.createExecContext(n,s);if(!y){const e=t.createSyntaxTree(r.valueExpression);y=t.createFunction(e),r.cache.compiledFunc=y}l=t.executeFunction(y,o)}else o&&(l=o[u]);const m=r.normalizationField,f=o?parseFloat(o[m]):void 0;if(null!=l&&(!m||s||!isNaN(f)&&0!==f)){isNaN(f)||s||(l/=f);const e=x(l,c);if(e){const t=e[0],i=e[1];if(t===i)return r.stops[t].opacity;{const s=r.stops[t].opacity;return s+(r.stops[i].opacity-s)*e[2]}}}}function v(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"rotation"===e.type))[0]:e;if(!r)return;if("esri.renderers.visualVariables.RotationVariable"!==r.declaredClass)return void p.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const s=r.axis||"heading",n="heading"===s&&"arithmetic"===r.rotationType?90:0,o="heading"===s&&"arithmetic"===r.rotationType?-1:1,l="number"==typeof t?null:t,u=l&&l.attributes,c=r.field,{hasExpression:d}=r.cache;let y=r.cache.compiledFunc,m=0;if(!c&&!d)return m;if(d){if((0,a.Wi)(i)||(0,a.Wi)(i.arcade))return void p.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,s=t.getViewInfo(e),n=t.createExecContext(l,s);if(!y){const e=t.createSyntaxTree(r.valueExpression);y=t.createFunction(e),r.cache.compiledFunc=y}m=t.executeFunction(y,n)}else u&&(m=u[c]||0);return m="number"!=typeof m||isNaN(m)?null:n+o*m,m}function h(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"size"===e.type))[0]:e;if(!r)return;if("esri.renderers.visualVariables.SizeVariable"!==r.declaredClass)return void p.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const s=function(e,t,i,r,s){switch(t.transformationType){case"additive":return function(e,t,i,r){return e+(b(t.minSize,i,r)||t.minDataValue)}(e,t,i,r);case"constant":return function(e,t,i){const r=e.stops;let s=r&&r.length&&r[0].size;return null==s&&(s=e.minSize),b(s,t,i)}(t,i,r);case"clamped-linear":return function(e,t,i,r){const s=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),n=b(t.minSize,i,r),o=b(t.maxSize,i,r),l=(0,a.pC)(r)?r.shape:void 0;if(e<=t.minDataValue)return n;if(e>=t.maxDataValue)return o;if("area"===t.scaleBy&&l){const e="circle"===l,t=e?d*(n/2)**2:n*n,i=t+s*((e?d*(o/2)**2:o*o)-t);return e?2*Math.sqrt(i/d):Math.sqrt(i)}return n+s*(o-n)}(e,t,i,r);case"proportional":return function(e,t,i,r){const s=(0,a.pC)(r)?r.shape:void 0,n=e/t.minDataValue,o=b(t.minSize,i,r),l=b(t.maxSize,i,r);let u=null;return u="circle"===s?2*Math.sqrt(n*(o/2)**2):"square"===s||"diamond"===s||"image"===s?Math.sqrt(n*o**2):n*o,w(u,o,l)}(e,t,i,r);case"stops":return function(e,t,i,r,s){const[n,o,a]=x(e,s);if(n===o)return b(t.stops[n].size,i,r);{const e=b(t.stops[n].size,i,r);return e+(b(t.stops[o].size,i,r)-e)*a}}(e,t,i,r,s);case"real-world-size":return function(e,t,i,r){const s=((0,a.pC)(r)&&r.resolution?r.resolution:1)*l.a[t.valueUnit],n=b(t.minSize,i,r),o=b(t.maxSize,i,r),{valueRepresentation:u}=t;let p=null;return p="area"===u?2*Math.sqrt(e/d)/s:"radius"===u||"distance"===u?2*e/s:e/s,w(p,n,o)}(e,t,i,r);case"identity":return e;case"unknown":return null}}(function(e,t,i){const r="number"==typeof t,s=r?null:t,n=s&&s.attributes;let o=r?t:null;const{isScaleDriven:l}=e.cache;let c=e.cache.compiledFunc;if(l){const t=(0,a.pC)(i)?i.scale:void 0,r=(0,a.pC)(i)?i.view:void 0;o=null==t||"3d"===r?function(e){let t=null,i=null;const r=e.stops;return r?(t=r[0].value,i=r[r.length-1].value):(t=e.minDataValue||0,i=e.maxDataValue||0),(t+i)/2}(e):t}else if(!r)switch(e.inputValueType){case"expression":{if((0,a.Wi)(i)||(0,a.Wi)(i.arcade))return void p.error("Use of arcade expressions requires an arcade context");const t={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},r=i.arcade.arcadeUtils,n=r.getViewInfo(t),l=r.createExecContext(s,n);if(!c){const t=r.createSyntaxTree(e.valueExpression);c=r.createFunction(t),e.cache.compiledFunc=c}o=r.executeFunction(c,l);break}case"field":n&&(o=n[e.field]);break;case"unknown":o=null}if(!(0,u.qh)(o))return null;if(r||!e.normalizationField)return o;const d=n?parseFloat(n[e.normalizationField]):null;return(0,u.qh)(d)&&0!==d?o/d:null}(r,t,i),r,t,i,r.cache.ipData);return null==s||isNaN(s)?0:s}function b(e,t,i){return null==e?null:(0,u.iY)(e)?h(e,t,i):(0,u.qh)(e)?e:null}function w(e,t,i){return(0,u.qh)(i)&&e>i?i:(0,u.qh)(t)&&e<t?t:e}function g(e,t,i){const{isScaleDriven:r}=e.cache;if(!(r&&"3d"===i||t))return null;const s={scale:t,view:i};let n=b(e.minSize,c,s),o=b(e.maxSize,c,s);if(null!=n||null!=o){if(n>o){const e=o;o=n,n=e}return{minSize:n,maxSize:o}}}function x(e,t){if(!t)return;let i=0,r=t.length-1;return t.some(((t,s)=>e<t?(r=s,!0):(i=s,!1))),[i,r,(e-t[i])/(t[r]-t[i])]}function C(e,t,i){const r=["proportional","proportional","proportional"];for(const s of e){const e=s.useSymbolValue?"symbol-value":h(s,t,i);switch(s.axis){case"width":r[0]=e;break;case"depth":r[1]=e;break;case"height":r[2]=e;break;case"width-and-depth":r[0]=e,r[1]=e;break;case"all":case void 0:case null:r[0]=e,r[1]=e,r[2]=e;break;default:(0,n.Bg)(s.axis)}}return r}}}]);