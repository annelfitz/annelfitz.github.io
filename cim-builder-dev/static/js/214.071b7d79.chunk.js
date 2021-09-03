(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[214],{755:function(e,t,r){"use strict";r.r(t);var i=r(0),a=r(163),s=(r(247),r(299),r(301),r(302),r(89),r(229),r(225),r(250),r(230)),o=r(45),n=r(9),l=r(4),p=r(3),d=r(321),c=r(12),y=r(14),u=r(16),b=r(1),h=(r(5),r(48)),f=(r(6),r(15)),j=r(2),O=r(197),g=r(339),m=r(334),v=r(324),I=r(323),w=r(325),L=r(664),F=r(851),S=r(88),E=r(209),T=r(231),_=r(852),P=r(342),x=r(326),A=r(43),D=r(715),R=r(204),U=r(303),Q=r(366),q=r(10);let N=class extends q.a{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};Object(i.a)([Object(b.b)({type:String,json:{read:!0,write:!0}})],N.prototype,"name",void 0),Object(i.a)([Object(b.b)({type:String,json:{read:!0,write:!0}})],N.prototype,"field",void 0),Object(i.a)([Object(b.b)({type:[Number],json:{read:!0,write:!0}})],N.prototype,"currentRangeExtent",void 0),Object(i.a)([Object(b.b)({type:[Number],json:{read:!0,write:!0}})],N.prototype,"fullRangeExtent",void 0),Object(i.a)([Object(b.b)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],N.prototype,"type",void 0),N=Object(i.a)([Object(j.a)("esri.layers.support.RangeInfo")],N);var k=N,C=r(343),G=r(65),V=r(337),K=r(117);const M=["3DObject","Point"],z=l.a.getLogger("esri.layers.SceneLayer"),W=Object(P.a)();let J=class extends(Object(L.a)(Object(m.a)(Object(v.a)(Object(I.a)(Object(w.a)(Object(d.a)(Object(g.a)(O.a)))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.definitionExpression=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,i,a,s;const o=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(i=r.domains)?void 0:i[e];return o&&"inherited"!==o.type?o:null!=(a=null==(s=this.getField(e))?void 0:s.domain)?a:null}getFeatureType(e){return e&&Object(p.i)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return Object(p.i)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return Object(p.i)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return Object(p.i)(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new x.a(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:D.c.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return B[this.profile]||"mesh"}set renderer(e){Object(A.j)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=Object(p.i)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:F.a,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:i,supportsUploadWithItemId:a,supportsReturnServiceEditsInSourceSpatialReference:s},data:{supportsZ:o,supportsM:n,isVersioned:l,supportsAttachment:d},operations:{supportsEditing:c,supportsUpdate:y,supportsQuery:u,supportsQueryAttachments:b}}=e,h=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:s,supportsRollbackOnFailure:i,supportsGeometryUpdate:!1,supportsUploadWithItemId:a},data:{supportsAttachment:d,supportsZ:o,supportsM:n,isVersioned:l},operations:{supportsQuery:u,supportsQueryAttachments:b,supportsEditing:c&&h,supportsAdd:!1,supportsDelete:!1,supportsUpdate:y&&h}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return Object(p.i)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e)),e||void 0}get displayField(){return Object(p.i)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&Z[r]?Z[r]:(z.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=Object(p.i)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(c.u).then(()=>this._fetchService(t)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t)])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>Object(C.a)(this,{origin:"service"},t)).then(()=>Object(A.j)(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}createQuery(){const e=new G.a;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e})}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(z.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return Object(V.a)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return Object(p.i)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),Object(p.h)(this.associatedLayer))throw new n.a("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new n.a("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new n.a("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new n.a("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const i of this.statisticsInfo)if(i.name===r.name){const e=Object(y.z)(this.parsedUrl.path,i.href);return Object(o.default)(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(e=>e.data)}throw new n.a("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(0,e)}async applyEdits(e,t){const i=await r.e(36).then(r.bind(null,878));if(await this.load(),Object(p.h)(this.associatedLayer))throw new n.a(this.type+"-layer:not-editable","Service is not editable");return await this.associatedLayer.load(),i.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&-1===M.indexOf(e.layerType))throw new n.a("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new n.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});!function(e,t){let r=!1,i=!1;if(null==e)r=!0,i=!0;else{const a=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,i=a;break;case"vertex-reference-frame":r=!0,i=!a;break;default:r=!1}}if(!r)throw new n.a("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!i)throw new n.a("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new n.a("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(t=>t.name===e.name)),r=!!(Object(p.i)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some(t=>t&&e.name===t.name)),i={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=i}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if(Object(p.h)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(Object(p.h)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=Object(h.a)(this);for(let r=0;r<e.length;r++){const i=e[r],a=this.originIdOf(i),s=this.associatedLayer.originIdOf(i);a<s&&(2===s||3===s)&&t.setAtOrigin(i,this.associatedLayer[i],s)}}async _setAssociatedFeatureLayer(e){if(-1===["mesh-pyramids","points"].indexOf(this.profile))return;const t=new _.a(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(r){Object(c.m)(r)||this._logWarningOnPopupEnabled()}}_logWarningOnPopupEnabled(){Object(u.m)(this,["popupTemplate","popupEnabled"],()=>this.popupEnabled&&null!=this.popupTemplate).then(()=>()=>{const e="this SceneLayer: "+this.title;null==this.attributeStorageInfo?z.warn("Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on "+e):z.info("Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on "+e)})}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&z.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&z.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};Object(i.a)([Object(b.b)({types:{key:"type",base:E.a,typeMap:{selection:T.a}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],J.prototype,"featureReduction",void 0),Object(i.a)([Object(b.b)({type:[k],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],J.prototype,"rangeInfos",void 0),Object(i.a)([Object(b.b)({json:{read:!1}})],J.prototype,"associatedLayer",void 0),Object(i.a)([Object(b.b)({type:["show","hide"]})],J.prototype,"listMode",void 0),Object(i.a)([Object(b.b)({type:["ArcGISSceneServiceLayer"]})],J.prototype,"operationalLayerType",void 0),Object(i.a)([Object(b.b)({json:{read:!1},readOnly:!0})],J.prototype,"type",void 0),Object(i.a)([Object(b.b)({...W.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],J.prototype,"fields",void 0),Object(i.a)([Object(b.b)()],J.prototype,"types",null),Object(i.a)([Object(b.b)()],J.prototype,"typeIdField",null),Object(i.a)([Object(b.b)()],J.prototype,"formTemplate",null),Object(i.a)([Object(b.b)({readOnly:!0})],J.prototype,"fieldsIndex",null),Object(i.a)([Object(b.b)({type:Q.a,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],J.prototype,"floorInfo",void 0),Object(i.a)([Object(b.b)(W.outFields)],J.prototype,"outFields",void 0),Object(i.a)([Object(b.b)({type:D.c,readOnly:!0,json:{read:!1}})],J.prototype,"nodePages",void 0),Object(i.a)([Object(f.a)("service","nodePages",["nodePages","pointNodePages"])],J.prototype,"readNodePages",null),Object(i.a)([Object(b.b)({type:[D.b],readOnly:!0})],J.prototype,"materialDefinitions",void 0),Object(i.a)([Object(b.b)({type:[D.d],readOnly:!0})],J.prototype,"textureSetDefinitions",void 0),Object(i.a)([Object(b.b)({type:[D.a],readOnly:!0})],J.prototype,"geometryDefinitions",void 0),Object(i.a)([Object(b.b)({readOnly:!0})],J.prototype,"serviceUpdateTimeStamp",void 0),Object(i.a)([Object(b.b)({readOnly:!0})],J.prototype,"attributeStorageInfo",void 0),Object(i.a)([Object(b.b)({readOnly:!0})],J.prototype,"statisticsInfo",void 0),Object(i.a)([Object(b.b)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],J.prototype,"definitionExpression",void 0),Object(i.a)([Object(b.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],J.prototype,"path",void 0),Object(i.a)([Object(b.b)(S.b)],J.prototype,"elevationInfo",null),Object(i.a)([Object(b.b)({type:String})],J.prototype,"geometryType",null),Object(i.a)([Object(b.b)(S.d)],J.prototype,"labelsVisible",void 0),Object(i.a)([Object(b.b)({type:[R.a],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:U.a},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:U.a},write:!0}})],J.prototype,"labelingInfo",void 0),Object(i.a)([Object(b.b)(S.e)],J.prototype,"legendEnabled",void 0),Object(i.a)([Object(b.b)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var r,i;if("number"==typeof e&&e>=0&&e<=1)return e;const a=null==(r=t.layerDefinition)||null==(i=r.drawingInfo)?void 0:i.transparency;return void 0!==a?Object(K.b)(a):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],J.prototype,"opacity",void 0),Object(i.a)([Object(b.b)({types:s.b,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],J.prototype,"renderer",null),Object(i.a)([Object(b.b)({json:{read:!1}})],J.prototype,"cachedDrawingInfo",void 0),Object(i.a)([Object(f.a)("service","cachedDrawingInfo")],J.prototype,"readCachedDrawingInfo",null),Object(i.a)([Object(b.b)({readOnly:!0,json:{read:!1}})],J.prototype,"capabilities",null),Object(i.a)([Object(b.b)({type:Boolean,json:{read:!1}})],J.prototype,"editingEnabled",null),Object(i.a)([Object(b.b)(S.j)],J.prototype,"popupEnabled",void 0),Object(i.a)([Object(b.b)({type:a.a,json:{name:"popupInfo",write:!0}})],J.prototype,"popupTemplate",void 0),Object(i.a)([Object(b.b)({readOnly:!0,json:{read:!1}})],J.prototype,"defaultPopupTemplate",null),Object(i.a)([Object(b.b)({type:String,json:{read:!1}})],J.prototype,"objectIdField",void 0),Object(i.a)([Object(f.a)("service","objectIdField",["objectIdField","fields"])],J.prototype,"readObjectIdField",null),Object(i.a)([Object(b.b)({type:String,json:{read:!1}})],J.prototype,"globalIdField",void 0),Object(i.a)([Object(f.a)("service","globalIdField",["globalIdField","fields"])],J.prototype,"readGlobalIdField",null),Object(i.a)([Object(b.b)({readOnly:!0,type:String,json:{read:!1}})],J.prototype,"displayField",null),Object(i.a)([Object(b.b)({type:String,json:{read:!1}})],J.prototype,"profile",void 0),Object(i.a)([Object(f.a)("service","profile",["store.profile"])],J.prototype,"readProfile",null),Object(i.a)([Object(b.b)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],J.prototype,"normalReferenceFrame",void 0),Object(i.a)([Object(b.b)(S.m)],J.prototype,"screenSizePerspectiveEnabled",void 0),J=Object(i.a)([Object(j.a)("esri.layers.SceneLayer")],J);const Z={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},B={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};var H=J;t.default=H}}]);
//# sourceMappingURL=214.071b7d79.chunk.js.map