(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[136],{541:function(e,t,r){"use strict";var a=r(0),i=(r(6),r(5),r(7),r(1)),s=r(24),n=r(2),o=(r(4),r(8),r(9),r(13));const l=new s.a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let c=class extends o.a{constructor(e){super(e),this.description=null,this.type=null}};Object(a.a)([Object(i.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(a.a)([Object(i.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(a.a)([Object(n.a)("esri.tasks.support.GPMessage")],c);var u=c;t.a=u},906:function(e,t,r){"use strict";r.r(t);var a=r(0),i=(r(6),r(3)),s=(r(5),r(7)),n=r(1),o=r(24),l=r(2),c=r(12),u=r(4),p=(r(8),r(9),r(82)),y=r(20),b=r(56),d=r(50),h=r(338),m=r(65),f=r(327),g=r(28),O=r(39),S=r(19);let j=class extends S.a{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}};Object(a.a)([Object(n.b)({type:g.a})],j.prototype,"outSpatialReference",void 0),Object(a.a)([Object(n.b)({type:O.a})],j.prototype,"processExtent",void 0),Object(a.a)([Object(n.b)({type:g.a})],j.prototype,"processSpatialReference",void 0),Object(a.a)([Object(n.b)({nonNullable:!0})],j.prototype,"returnFeatureCollection",void 0),Object(a.a)([Object(n.b)({nonNullable:!0})],j.prototype,"returnM",void 0),Object(a.a)([Object(n.b)({nonNullable:!0})],j.prototype,"returnZ",void 0),j=Object(a.a)([Object(l.a)("esri/rest/geoprocessor/GPOptions")],j),j.from=Object(s.m)(j);var v=j,w=r(541),_=r(313),P=r(194),L=r(111),J=r(95),x=r(13);let M=class extends x.a{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null}};Object(a.a)([Object(n.b)({type:O.a})],M.prototype,"extent",void 0),Object(a.a)([Object(n.b)()],M.prototype,"height",void 0),Object(a.a)([Object(n.b)()],M.prototype,"href",void 0),Object(a.a)([Object(n.b)()],M.prototype,"opacity",void 0),Object(a.a)([Object(n.b)()],M.prototype,"rotation",void 0),Object(a.a)([Object(n.b)()],M.prototype,"scale",void 0),Object(a.a)([Object(n.b)()],M.prototype,"visible",void 0),Object(a.a)([Object(n.b)()],M.prototype,"width",void 0),M=Object(a.a)([Object(l.a)("esri.layer.support.MapImage")],M);var N=M;let I=class extends x.a{constructor(e){super(e),this.itemId=null,this.url=null}};Object(a.a)([Object(n.b)({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],I.prototype,"itemId",void 0),Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],I.prototype,"url",void 0),I=Object(a.a)([Object(l.a)("esri.tasks.support.DataFile")],I);var D=I;const G=new o.a({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let T=class extends x.a{constructor(e){super(e),this.distance=0,this.units=null}};Object(a.a)([Object(n.b)({json:{write:!0}})],T.prototype,"distance",void 0),Object(a.a)([Object(n.b)({json:{read:G.read,write:G.write}})],T.prototype,"units",void 0),T=Object(a.a)([Object(l.a)("esri/tasks/support/LinearUnit")],T);var V=T;const R=new o.a({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let F=class extends x.a{constructor(e){super(e),this.dataType=null,this.value=null}};Object(a.a)([Object(n.b)({json:{read:R.read,write:R.write}})],F.prototype,"dataType",void 0),Object(a.a)([Object(n.b)()],F.prototype,"value",void 0),F=Object(a.a)([Object(l.a)("esri.tasks.support.ParameterValue")],F);var k=F;let C=class extends x.a{constructor(e){super(e),this.format=null,this.itemId=null,this.url=null}};Object(a.a)([Object(n.b)()],C.prototype,"format",void 0),Object(a.a)([Object(n.b)({json:{read:{source:"itemID"},write:{target:"itemID"}}})],C.prototype,"itemId",void 0),Object(a.a)([Object(n.b)()],C.prototype,"url",void 0),C=Object(a.a)([Object(l.a)("esri/tasks/support/RasterData")],C);var E=C;async function A(e,t,r,a,i){const s={},n={},o=[];return function(e,t,r){for(const a in e){const i=e[a];if(i&&"object"==typeof i&&i instanceof L.default){const{features:e}=i;r[a]=[t.length,t.length+e.length],e.forEach(e=>{t.push(e.geometry)})}}}(a,o,s),Object(_.a)(o).then(o=>{const{outSpatialReference:l,processExtent:c,processSpatialReference:u,returnFeatureCollection:p,returnM:y,returnZ:b}=r,{path:h}=Object(J.c)(e);for(const e in s){const t=s[e];n[e]=o.slice(t[0],t[1])}const m=l?l.wkid||l:null,f=u?u.wkid||u:null,g="execute"===t?{returnFeatureCollection:p||void 0,returnM:y||void 0,returnZ:b||void 0}:null,O=q({...c?{context:{extent:c,outSR:m,processSR:f}}:{"env:outSR":m,"env:processSR":f},...a,...g,f:"json"},null,n),S={...i,query:O};return Object(d.default)(`${h}/${t}`,S)})}function U(e){const t=e.dataType,r=k.fromJSON(e);switch(t){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":return r;case"GPDate":r.value=new Date(r.value);break;case"GPDataFile":r.value=D.fromJSON(r.value);break;case"GPLinearUnit":r.value=V.fromJSON(r.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const t=e.value.url;r.value=t?D.fromJSON(r.value):L.default.fromJSON(r.value);break}case"GPRasterData":case"GPRasterDataLayer":{const t=e.value.mapImage;r.value=t?N.fromJSON(t):E.fromJSON(r.value);break}case"GPField":r.value=P.a.fromJSON(r.value);break;case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return r;case"GPMultiValue:GPDate":{const e=r.value;r.value=e.map(e=>new Date(e));break}case"GPMultiValue:GPDataFile":r.value=r.value.map(e=>D.fromJSON(e));break;case"GPMultiValue:GPLinearUnit":r.value=r.value.map(e=>V.fromJSON(e));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":r.value=r.value.map(e=>L.default.fromJSON(e));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":r.value=r.value.map(e=>e?N.fromJSON(e):E.fromJSON(r.value));break;case"GPMultiValue:GPField":r.value=r.value.map(e=>P.a.fromJSON(e))}return r}function q(e,t,r){for(const a in e){const t=e[a];Array.isArray(t)?e[a]=JSON.stringify(t.map(e=>q({item:e},!0).item)):t instanceof Date&&(e[a]=t.getTime())}return Object(J.b)(e,t,r)}var $,z=r(15);const W=new o.a({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let Z=$=class extends x.a{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null}cancelJob(e){const{jobId:t,sourceUrl:r}=this,{path:a}=Object(J.c)(r),i={...this.requestOptions,...e,query:{f:"json"}};return this._clearTimer(),Object(d.default)(`${a}/jobs/${t}/cancel`,i).then(e=>{const t=$.fromJSON(e.data);return this.messages=t.messages,this.jobStatus=t.jobStatus,this})}destroy(){clearInterval(this._timer)}checkJobStatus(e){const{path:t}=Object(J.c)(this.sourceUrl),r={...this.requestOptions,...e,query:{f:"json"}},a=`${t}/jobs/${this.jobId}`;return Object(d.default)(a,r).then(({data:e})=>{const t=$.fromJSON(e);return this.messages=t.messages,this.jobStatus=t.jobStatus,this})}fetchResultData(e,t,r){t=v.from(t);const{returnFeatureCollection:a,returnM:i,returnZ:s,outSpatialReference:n}=t,{path:o}=Object(J.c)(this.sourceUrl),l=q({returnFeatureCollection:a||void 0,returnM:i||void 0,returnZ:s||void 0,outSR:n,returnType:"data",f:"json"},null),c={...this.requestOptions,...r,query:l},u=`${o}/jobs/${this.jobId}/results/${e}`;return Object(d.default)(u,c).then(e=>U(e.data))}fetchResultImage(e,t,r){const{path:a}=Object(J.c)(this.sourceUrl),i=q({...t.toJSON(),f:"json"}),s={...this.requestOptions,...r,query:i},n=`${a}/jobs/${this.jobId}/results/${e}`;return Object(d.default)(n,s).then(e=>U(e.data))}async fetchResultMapImageLayer(){const{path:e}=Object(J.c)(this.sourceUrl),t=e.indexOf("/GPServer/"),a=`${e.substring(0,t)}/MapServer/jobs/${this.jobId}`;return new(0,(await Promise.all([r.e(14),r.e(30)]).then(r.bind(null,627))).default)({url:a})}async waitForJobCompletion(e={}){const{interval:t=1e3,signal:r,statusCallback:a}=e;return new Promise((e,i)=>{Object(z.p)(r,()=>{this._clearTimer(),i(Object(z.e)())}),this._clearTimer();const s=setInterval(()=>{this._timer||i(Object(z.e)()),this.checkJobStatus(this.requestOptions).then(t=>{const{jobStatus:r}=t;switch(this.jobStatus=r,r){case"job-succeeded":this._clearTimer(),e(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":a&&a(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),i(this)}})},t);this._timer=s})}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null)}};Object(a.a)([Object(n.b)()],Z.prototype,"jobId",void 0),Object(a.a)([Object(n.b)({json:{read:W.read}})],Z.prototype,"jobStatus",void 0),Object(a.a)([Object(n.b)({type:[w.a]})],Z.prototype,"messages",void 0),Object(a.a)([Object(n.b)()],Z.prototype,"requestOptions",void 0),Object(a.a)([Object(n.b)({json:{write:!0}})],Z.prototype,"sourceUrl",void 0),Z=$=Object(a.a)([Object(l.a)("esri.tasks.support.JobInfo")],Z);var B=Z;let K=class extends f.a{constructor(e){super(e),this._jobs=new Map,this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}destroy(){this._jobs.forEach(e=>e.destroy()),this._jobs.clear()}cancelJob(e,t){const r=this._jobs.get(e),a={...this.requestOptions,...t};return r.cancelJob(a)}checkJobStatus(e,t){const r=this._jobs.get(e),a={...this.requestOptions,...t};return r.checkJobStatus(a)}execute(e,t){const r=new v({outSpatialReference:this.outSpatialReference,processExtent:this.processExtent,processSpatialReference:this.processSpatialReference,returnFeatureCollection:this.returnFeatureCollection,returnM:this.returnM,returnZ:this.returnZ}),a={...this.requestOptions,...t};return async function(e,t,r,a){return A(e,"execute",r=v.from(r),t,a).then(e=>{const t=e.data.results||[],r=e.data.messages||[];return{results:t.map(U),messages:r.map(e=>w.a.fromJSON(e))}})}(this.url,e,r,a)}getResultData(e,t,r){const a=this._jobs.get(e),{returnFeatureCollection:i,returnM:s,returnZ:n,outSpatialReference:o}=this,l=new v({returnFeatureCollection:i,returnM:s,returnZ:n,outSpatialReference:o,url:this.url}),c={...this.requestOptions,...r};return a.fetchResultData(t,l,c)}getResultImage(e,t,r,a){const i=this._jobs.get(e),s={...this.requestOptions,...a};return i.fetchResultImage(t,r,s)}async getResultMapImageLayer(e){return this._jobs.get(e).fetchResultMapImageLayer()}submitJob(e,t){const r=new v({outSpatialReference:this.outSpatialReference,processExtent:this.processExtent,processSpatialReference:this.processSpatialReference,returnFeatureCollection:this.returnFeatureCollection,returnM:this.returnM,returnZ:this.returnZ}),a={...this.requestOptions,...t};return async function(e,t,r,a){return r=v.from(r),A(e,"submitJob",r,t,a).then(t=>{const r=B.fromJSON(t.data);return r.sourceUrl=e,r})}(this.url,e,r,a).then(e=>(e.sourceUrl=this.url,this._jobs.set(e.jobId,e),e))}waitForJobCompletion(e,t={}){return this._jobs.get(e).waitForJobCompletion(t)}};Object(a.a)([Object(n.b)({type:g.a})],K.prototype,"outSpatialReference",void 0),Object(a.a)([Object(n.b)({type:O.a})],K.prototype,"processExtent",void 0),Object(a.a)([Object(n.b)({type:g.a})],K.prototype,"processSpatialReference",void 0),Object(a.a)([Object(n.b)({nonNullable:!0})],K.prototype,"returnFeatureCollection",void 0),Object(a.a)([Object(n.b)({nonNullable:!0})],K.prototype,"returnM",void 0),Object(a.a)([Object(n.b)({nonNullable:!0})],K.prototype,"returnZ",void 0),K=Object(a.a)([Object(l.a)("esri/tasks/Geoprocessor")],K);var Q=K;const Y=new o.a({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"}),H=(Y.fromJSON.bind(Y),Y.toJSON.bind(Y)),X=new o.a({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"}),ee=(X.fromJSON.bind(X),X.toJSON.bind(X));function te(e,t){const{graphic:r,renderer:a,symbol:i}=t,s=i.type;if("text"===s||"shield-label-symbol"===s||!("visualVariables"in a)||!a.visualVariables)return;const n=a.getVisualVariablesForType("size"),o=a.getVisualVariablesForType("color"),l=a.getVisualVariablesForType("opacity"),c=a.getVisualVariablesForType("rotation"),u=n&&n[0],p=o&&o[0],b=l&&l[0],d=c&&c[0];if(u){const t="simple-marker"===s?i.style:null,a=Object(h.getSize)(u,r,{shape:t});null!=a&&("simple-marker"===s?e.size=Object(y.e)(a):"picture-marker"===s?(e.width=Object(y.e)(a),e.height=Object(y.e)(a)):"simple-line"===s?e.width=Object(y.e)(a):e.outline&&(e.outline.width=Object(y.e)(a)))}if(p){const t=Object(h.getColor)(p,r);(t&&"simple-marker"===s||"simple-line"===s||"simple-fill"===s)&&(e.color=t?t.toJSON():void 0)}if(b){const t=Object(h.getOpacity)(b,r);null!=t&&e.color&&(e.color[3]=Math.round(255*t))}d&&(e.angle=-Object(h.getRotationAngle)(a,r))}function re(e){return e&&"bing-maps"===e.type}function ae(e){return e&&"csv"===e.type}function ie(e){return e&&"feature"===e.type}function se(e){return e&&"geojson"===e.type}function ne(e){return e&&"graphics"===e.type}function oe(e){return e&&"group"===e.type}function le(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function ce(e){return e&&"imagery"===e.type}function ue(e){return e&&"kml"===e.type}function pe(e){return e&&"map-image"===e.type}function ye(e){return e&&"map-notes"===e.type}function be(e){return e&&"open-street-map"===e.type}function de(e){return e&&"stream"===e.type}function he(e){return e&&"tile"===e.type}function me(e){return e&&"vector-tile"===e.type}function fe(e){return e&&"web-tile"===e.type}function ge(e){return e&&"wms"===e.type}function Oe(e){return e&&"wmts"===e.type}let Se=class extends S.a{constructor(e){super(e),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}};Object(a.a)([Object(n.b)()],Se.prototype,"attributionVisible",void 0),Object(a.a)([Object(n.b)()],Se.prototype,"exportOptions",void 0),Object(a.a)([Object(n.b)()],Se.prototype,"forceFeatureAttributes",void 0),Object(a.a)([Object(n.b)()],Se.prototype,"format",void 0),Object(a.a)([Object(n.b)()],Se.prototype,"label",void 0),Object(a.a)([Object(n.b)()],Se.prototype,"layout",void 0),Object(a.a)([Object(n.b)()],Se.prototype,"layoutOptions",void 0),Object(a.a)([Object(n.b)()],Se.prototype,"outScale",void 0),Object(a.a)([Object(n.b)()],Se.prototype,"scalePreserved",void 0),Object(a.a)([Object(n.b)()],Se.prototype,"showLabels",void 0),Se=Object(a.a)([Object(l.a)("esri.tasks.support.PrintTemplate")],Se);var je=Se;const ve={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},we=new o.a({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),_e=new o.a({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),Pe=new m.a({returnGeometry:!0});function Le(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}let Je=class extends f.a{constructor(...e){super(...e),this._ssExtent=null,this._legendLayers=[],this._legendLayerNameMap={},this._gpServerUrl=null,this._cimVersion=null,this._is11xService=!1,this._gpMetadata=null,this.updateDelay=1e3}get _geoprocessor(){return new Q({url:this.url})}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?_e.fromJSON(this._gpMetadata.executionType):"sync"}execute(e,t){let r=this.url;const a=r.lastIndexOf("/GPServer/");return a>0&&(r=r.slice(0,a+9)),Promise.resolve().then(()=>this._gpServerUrl===r?{data:this._gpMetadata}:(this._gpServerUrl=r,Object(d.default)(r,{query:{f:"json"}}))).then(t=>(this._gpMetadata=t.data,this._cimVersion=this._gpMetadata.cimVersion,this._is11xService=!!this._cimVersion,this._getGpPrintParams(e))).then(e=>{const r=e=>"sync"===this.mode?e.results&&e.results[0]&&e.results[0].value:this._geoprocessor.getResultData(e.jobId,"Output_File",t).then(e=>e.value);return"async"===this.mode?this._geoprocessor.submitJob(e,t).then(e=>this._geoprocessor.waitForJobCompletion(e.jobId,{interval:this.updateDelay}).then(r)):this._geoprocessor.execute(e,t).then(r)})}async _createOperationalLayers(e,t){const r=[],a={layerView:null,printTemplate:t,view:e};let i=0;t.scalePreserved&&(i=t.outScale||e.scale);const s=function(e,t){const r=e.allLayerViews.items;if(t===e.scale)return r.filter(e=>!e.suspended);const a=new Array;for(const i of r)le(i.parent)&&!a.includes(i.parent)||!i.visible||t&&"isVisibleAtScale"in i&&!i.isVisibleAtScale(t)||a.push(i);return a}(e,i);for(const n of s){const e=n.layer;if(!e.loaded||oe(e))continue;let t;a.layerView=n,t=re(e)?this._createBingMapsLayerJSON(e):ae(e)?await this._createCSVLayerJSON(e,a):ie(e)?await this._createFeatureLayerJSON(e,a):se(e)?await this._createGeoJSONLayer(e,a):ne(e)?await this._createGraphicsLayerJSON(e,a):ce(e)?this._createImageryLayerJSON(e):ue(e)?await this._createKMLLayerJSON(e,a):pe(e)?this._createMapImageLayerJSON(e,a):ye(e)?await this._createMapNotesLayerJSON(a):be(e)?this._createOpenStreetMapLayerJSON():de(e)?await this._createStreamLayerJSON(e,a):he(e)?this._createTileLayerJSON(e):me(e)?await this._createVectorTileLayerJSON(e,a):fe(e)?this._createWebTileLayerJSON(e):ge(e)?this._createWMSLayerJSON(e):Oe(e)?this._createWMTSLayerJSON(e):await this._createScreenshotJSON(e,a),t&&(Array.isArray(t)?r.push(...t):(t.id=e.id,t.title=this._legendLayerNameMap[e.id]||e.title,t.opacity=e.opacity,t.minScale=e.minScale||0,t.maxScale=e.maxScale||0,r.push(t)))}if(i&&r.forEach(e=>{e.minScale=0,e.maxScale=0}),e.graphics&&e.graphics.length){const a=await this._createFeatureCollectionJSON(null,e.graphics,t);a&&r.push(a)}return r}_createBingMapsLayerJSON(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async _createCSVLayerJSON(e,{layerView:t,printTemplate:r}){let a;if(this._legendLayers&&this._legendLayers.push({id:e.id}),!this._is11xService){const a=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,a,r)}return a={type:"CSV"},e.write(a,{origin:"web-map"}),delete a.popupInfo,delete a.layerType,a.showLabels=r.showLabels&&e.labelsVisible,a}async _createFeatureCollectionJSON(e,t,r){let a;const i={layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}},s={layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}},n={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}},o={layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}},l={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}};if(l.layerDefinition.name="textLayer",delete l.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?i.layerDefinition.name=s.layerDefinition.name=n.layerDefinition.name=o.layerDefinition.name=this._legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON();i.layerDefinition.drawingInfo.renderer=t,s.layerDefinition.drawingInfo.renderer=t,n.layerDefinition.drawingInfo.renderer=t,o.layerDefinition.drawingInfo.renderer=t}if(r.showLabels&&e.labelsVisible&&"function"==typeof e.write){var c,u;const t=null==(c=e.write({},{origin:"web-map"}).layerDefinition)||null==(u=c.drawingInfo)?void 0:u.labelingInfo;t&&(a=!0,i.layerDefinition.drawingInfo.labelingInfo=t,s.layerDefinition.drawingInfo.labelingInfo=t,n.layerDefinition.drawingInfo.labelingInfo=t,o.layerDefinition.drawingInfo.labelingInfo=t)}}let y;null!=e&&e.renderer||a||(delete i.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo,delete n.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo);const b=e&&e.fields,d=e&&e.renderer;if(b&&d&&"function"==typeof d.collectRequiredFields){const e=new Set;await d.collectRequiredFields(e,b),y=Array.from(e)}if(b){const e=b.map(e=>e.toJSON());i.layerDefinition.fields=e,s.layerDefinition.fields=e,n.layerDefinition.fields=e,o.layerDefinition.fields=e}const h=t&&t.length;let m;for(let g=0;g<h;g++){const a=t[g]||t.getItemAt(g);if(!1===a.visible||!a.geometry)continue;if(m=a.toJSON(),m.hasOwnProperty("popupTemplate")&&delete m.popupTemplate,m.geometry&&m.geometry.z&&delete m.geometry.z,m.symbol&&m.symbol.outline&&"esriCLS"===m.symbol.outline.type&&!this._is11xService)continue;!this._is11xService&&m.symbol&&m.symbol.outline&&m.symbol.outline.color&&m.symbol.outline.color[3]&&(m.symbol.outline.color[3]=255);const c=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!m.symbol&&e&&e.renderer&&c&&!this._is11xService){const t=e.renderer,r=await t.getSymbolAsync(a);if(!r)continue;m.symbol=r.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&te(m.symbol,{renderer:t,graphic:a,symbol:r})}if(m.symbol&&(m.symbol.angle||delete m.symbol.angle,Le(m.symbol)?m.symbol=await this._convertSvgToPictureMarkerSymbolJson(m.symbol):m.symbol.text&&delete m.attributes),(!r||!r.forceFeatureAttributes)&&y&&y.length){const e={};y.forEach(t=>{m.attributes&&m.attributes.hasOwnProperty(t)&&(e[t]=m.attributes[t])}),m.attributes=e}"polygon"===a.geometry.type?i.featureSet.features.push(m):"polyline"===a.geometry.type?s.featureSet.features.push(m):"point"===a.geometry.type?m.symbol&&m.symbol.text?l.featureSet.features.push(m):n.featureSet.features.push(m):"multipoint"===a.geometry.type?o.featureSet.features.push(m):"extent"===a.geometry.type&&(m.geometry=p.a.fromExtent(a.geometry).toJSON(),i.featureSet.features.push(m))}const f=[i,s,o,n,l].filter(e=>e.featureSet.features.length>0);for(const p of f){const e=p.featureSet.features.every(e=>e.symbol);!e||r&&r.forceFeatureAttributes||p.featureSet.features.forEach(e=>{delete e.attributes}),e&&delete p.layerDefinition.drawingInfo,p.layerDefinition.drawingInfo&&p.layerDefinition.drawingInfo.renderer&&await this._convertSvgRenderer(p.layerDefinition.drawingInfo.renderer)}return f.length?{featureCollection:{layers:f},showLabels:a}:null}async _createFeatureLayerJSON(e,t){var r,a;let i;this._legendLayers&&this._legendLayers.push({id:e.id});const s=e.renderer;if(e.featureReduction||s&&"dot-density"===s.type&&(!this._is11xService||parseFloat(this._cimVersion)<2.6))return this._createScreenshotJSON(e,t);const{layerView:n,printTemplate:o,view:l}=t,c=s&&("valueExpression"in s&&s.valueExpression||"hasVisualVariables"in s&&s.hasVisualVariables()),u="feature-layer"!==(null==(r=e.source)?void 0:r.type)&&"ogc-feature"!==(null==(a=e.source)?void 0:a.type);if(!this._is11xService&&c||e.featureReduction||u||!s||"field"in s&&null!=s.field&&("string"!=typeof s.field||!e.getField(s.field))){const t=await this._getGraphics(n);i=await this._createFeatureCollectionJSON(e,t,o)}else{var p,y;if(i={id:(b=e.write()).id,title:b.title,opacity:b.opacity,minScale:b.minScale,maxScale:b.maxScale,url:b.url,layerDefinition:b.layerDefinition},i.showLabels=o.showLabels&&e.labelsVisible,this._setURLandToken(i,e),null!=(p=i.layerDefinition)&&null!=(y=p.drawingInfo)&&y.renderer&&(delete i.layerDefinition.minScale,delete i.layerDefinition.maxScale,await this._convertSvgRenderer(i.layerDefinition.drawingInfo.renderer),"visualVariables"in s&&s.visualVariables&&s.visualVariables[0])){const e=s.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=Object(h.getSizeRangeAtScale)(e,l.scale);i.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,i.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize}}}var b;return i}async _createGeoJSONLayer(e,{layerView:t,printTemplate:r}){this._legendLayers&&this._legendLayers.push({id:e.id});const a=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,a,r)}async _createGraphicsLayerJSON(e,{printTemplate:t}){return this._createFeatureCollectionJSON(e,null,t)}_createImageryLayerJSON(e){this._legendLayers&&this._legendLayers.push({id:e.id});const t={bandIds:e.bandIds,compressionQuality:e.compressionQuality,format:e.format,interpolation:e.interpolation};if((e.mosaicRule||e.definitionExpression)&&(t.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(this._is11xService)e.renderingRule&&(t.renderingRule=e.renderingRule.toJSON()),e.renderer&&(t.layerDefinition=t.layerDefinition||{},t.layerDefinition.drawingInfo=t.layerDefinition.drawingInfo||{},t.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const r=e.exportImageServiceParameters.combineRendererWithRenderingRule();r&&(t.renderingRule=r.toJSON())}return this._setURLandToken(t,e),t}async _createKMLLayerJSON(e,t){const r=t.printTemplate;if(this._is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=Object(u.C)(e.url),t}{const a=[],i=t.layerView;i.allVisibleMapImages.forEach((t,r)=>{const i={id:`${e.id}_image${r}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?i.imageData=t.href.substr(22):i.url=t.href,a.push(i)});const s=[...i.allVisiblePoints.items,...i.allVisiblePolylines.items,...i.allVisiblePolygons.items],n={id:e.id,...await this._createFeatureCollectionJSON(null,s,r)};return a.push(n),a}}_createMapImageLayerJSON(e,{view:t}){let r;const a={id:e.id,subLayerIds:[]};let i=[];const s=t.scale,n=e=>{const t=0===s,r=0===e.minScale||s<=e.minScale,o=0===e.maxScale||s>=e.maxScale;if(e.visible&&(t||r&&o))if(e.sublayers)e.sublayers.forEach(n);else{const t=e.toExportImageJSON(),r={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};i.unshift(r),a.subLayerIds.push(e.id)}};return e.sublayers&&e.sublayers.forEach(n),i.length&&(i=i.map(({id:e,name:t,layerDefinition:r})=>({id:e,name:t,layerDefinition:r})),r={layers:i,visibleLayers:e.capabilities.exportMap.supportsDynamicLayers?void 0:a.subLayerIds},this._setURLandToken(r,e),this._legendLayers.push(a)),r}async _createMapNotesLayerJSON({layerView:e,printTemplate:t}){const r=[],a=e.layer;if(Object(i.i)(a.featureCollections))for(const i of a.featureCollections){const e=await this._createFeatureCollectionJSON(i,i.source,t);e&&r.push(...e.featureCollection.layers)}else if(Object(i.i)(a.sublayers))for(const i of a.sublayers){const e=await this._createFeatureCollectionJSON(null,i.graphics,t);e&&r.push(...e.featureCollection.layers)}return{featureCollection:{layers:r}}}_createOpenStreetMapLayerJSON(){return{type:"OpenStreetMap"}}async _createScreenshotJSON(e,{printTemplate:t,view:r}){const a={type:"image"},i={format:"png",ignoreBackground:!0,layers:[e],rotation:0},s=this._ssExtent||r.extent.clone();let n=96,o=!0,l=!0;if(t.exportOptions){const e=t.exportOptions;e.dpi>0&&(n=e.dpi),e.width>0&&(o=e.width%2==r.width%2),e.height>0&&(l=e.height%2==r.height%2)}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===r.scale)&&96===n&&(!o||!l)&&(i.area={x:0,y:0,width:r.width,height:r.height},o||(i.area.width-=1),l||(i.area.height-=1),!this._ssExtent)){const e=r.toMap(Object(y.b)(i.area.width,i.area.height));s.ymin=e.y,s.xmax=e.x,this._ssExtent=s}a.extent=s.clone()._normalize(!0).toJSON();const c=await r.takeScreenshot(i),p=Object(u.i)(c.dataUrl);return a.imageData=p.data,a}async _createStreamLayerJSON(e,{layerView:t,printTemplate:r}){this._legendLayers&&this._legendLayers.push({id:e.id});const a=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,a,r)}_createTileLayerJSON(e){const t={customParameters:e.customParameters};return this._setURLandToken(t,e),t}async _createVectorTileLayerJSON(e,t){if(this._is11xService&&e.serviceUrl&&e.styleUrl){const t=b.b&&b.b.findCredential(e.styleUrl),r=b.b&&b.b.findCredential(e.serviceUrl);if(!t&&!r||"2.1.0"!==this._cimVersion){const a={type:"VectorTileLayer"};return a.styleUrl=Object(u.C)(e.styleUrl),t&&(a.token=t.token),r&&r.token!==a.token&&(a.additionalTokens=[{url:e.serviceUrl,token:r.token}]),a}}return this._createScreenshotJSON(e,t)}_createWebTileLayerJSON(e){const t={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(t.subDomains=e.subDomains),t}_createWMSLayerJSON(e){let t;const r=[],a=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(a):e.name&&r.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(a),r.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:r,url:Object(u.C)(e.url),version:e.version}),t}_createWMTSLayerJSON(e){const t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:Object(u.C)(e.url)}}_setURLandToken(e,t){var r;if(!t.url)return;e.url=Object(u.C)(e.url||t.url);const a=null==(r=b.b)?void 0:r.findCredential(t.url);a&&(e.token=a.token)}async _convertSvgToPictureMarkerSymbolJson(e){this._canvas||(this._canvas=document.createElement("canvas"));const t=1024;this._canvas.width=t,this._canvas.height=t;const r=this._canvas.getContext("2d");let a,i;if(e.path){var s;const n=new Path2D(e.path);n.closePath(),r.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",r.fill(n);const o=function(e,t=15){const r=e.canvas.width,a=e.canvas.height,i=e.getImageData(0,0,r,a).data;let s,n,o,l,c,u;e:for(n=a;n--;)for(s=r;s--;)if(i[4*(r*n+s)+3]>t){u=n;break e}if(!u)return null;e:for(s=r;s--;)for(n=u+1;n--;)if(i[4*(r*n+s)+3]>t){c=s;break e}e:for(s=0;s<=c;++s)for(n=u+1;n--;)if(i[4*(r*n+s)+3]>t){o=s;break e}e:for(n=0;n<=u;++n)for(s=o;s<=c;++s)if(i[4*(r*n+s)+3]>t){l=n;break e}return{x:o,y:l,width:c-o,height:u-l}}(r);if(!o)return null;r.clearRect(0,0,t,t);const l=Object(y.d)(e.size)/Math.max(o.width,o.height);r.scale(l,l);const c=t/l,u=c/2-o.width/2-o.x,p=c/2-o.height/2-o.y;if(r.translate(u,p),Array.isArray(e.color)&&r.fill(n),null!=(s=e.outline)&&s.width&&Array.isArray(e.outline.color)){const t=e.outline;r.lineWidth=Object(y.d)(t.width)/l,r.lineJoin="round",r.strokeStyle=`rgba(${t.color[0]},${t.color[1]},${t.color[2]},${t.color[3]/255})`,r.stroke(n),o.width+=r.lineWidth,o.height+=r.lineWidth}o.width*=l,o.height*=l;const b=r.getImageData(512-o.width/2,512-o.height/2,Math.ceil(o.width),Math.ceil(o.height));a=b.width,i=b.height,r.canvas.width=a,r.canvas.height=i,r.putImageData(b,0,0)}else{const t="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,s=(await Object(d.default)(t,{responseType:"image"})).data;a=Object(y.d)(e.width),i=Object(y.d)(e.height),r.canvas.width=a,r.canvas.height=i,r.drawImage(s,0,0,r.canvas.width,r.canvas.height)}return{type:"esriPMS",imageData:r.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:Object(y.e)(i),width:Object(y.e)(a),xoffset:e.xoffset,yoffset:e.yoffset}}async _convertSvgRenderer(e){const t=e.type;if("simple"===t&&Le(e.symbol))e.symbol=await this._convertSvgToPictureMarkerSymbolJson(e.symbol);else if("uniqueValue"===t||"classBreaks"===t){Le(e.defaultSymbol)&&(e.defaultSymbol=await this._convertSvgToPictureMarkerSymbolJson(e.defaultSymbol));const r=e["uniqueValue"===t?"uniqueValueInfos":"classBreakInfos"];if(r)for(const e of r)Le(e.symbol)&&(e.symbol=await this._convertSvgToPictureMarkerSymbolJson(e.symbol))}}_getGraphics(e){return e.queryFeatures(Pe).then(e=>e.features)}async _getPrintDefinition(e,t){const r=e.view;let a=r.spatialReference;const i={operationalLayers:await this._createOperationalLayers(r,t)};let s=this._ssExtent||e.extent||r.extent;return a&&a.isWrappable&&(s=s.clone()._normalize(!0),a=s.spatialReference),i.mapOptions={extent:s&&s.toJSON(),spatialReference:a&&a.toJSON(),showAttribution:t.attributionVisible},this._ssExtent=null,r.background&&(i.background=r.background.toJSON()),r.rotation&&(i.mapOptions.rotation=-r.rotation),t.scalePreserved&&(i.mapOptions.scale=t.outScale||r.scale),i}async _getGpPrintParams(e){const t=e.template||new je;null==t.showLabels&&(t.showLabels=!0);const r=t.exportOptions;let a;const i=ee(t.layout);if(r&&(a={dpi:r.dpi},"map_only"===i.toLowerCase()||""===i)){const e=r.width,t=r.height;a.outputSize=[e,t]}const s=t.layoutOptions;let n;if(s){let e,t;"Miles"===s.scalebarUnit||"Kilometers"===s.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==s.scalebarUnit&&"Feet"!==s.scalebarUnit||(e="Meters",t="Feet"),n={titleText:s.titleText,authorText:s.authorText,copyrightText:s.copyrightText,customTextElements:s.customTextElements,scaleBarOptions:{metricUnit:we.toJSON(e),metricLabel:ve[e],nonMetricUnit:we.toJSON(t),nonMetricLabel:ve[t]}}}let o=null;s&&s.legendLayers&&(o=s.legendLayers.map(e=>{this._legendLayerNameMap[e.layerId]=e.title;const t={id:e.layerId};return e.subLayerIds&&(t.subLayerIds=e.subLayerIds),t}));const l=await this._getPrintDefinition(e,t);if(l.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),t=/[\u0600-\u06FF]/,r=r=>{const a=r.text,i=r.font,s=i&&i.family&&i.family.toLowerCase();a&&i&&("arial"===s||"arial unicode ms"===s)&&(i.family=e.test(a)?"Arial Unicode MS":"Arial","normal"!==i.style&&t.test(a)&&(i.family="Arial Unicode MS"))},a=()=>{throw new c.a("print-task:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};l.operationalLayers.forEach(e=>{var t,i,s;null!=(t=e.featureCollection)&&t.layers?e.featureCollection.layers.forEach(e=>{var t,i,s,n;if(null!=(t=e.layerDefinition)&&null!=(i=t.drawingInfo)&&null!=(s=i.renderer)&&s.symbol){const t=e.layerDefinition.drawingInfo.renderer;"esriTS"===t.symbol.type?r(t.symbol):"CIMSymbolReference"!==t.symbol.type||this._is11xService||a()}null!=(n=e.featureSet)&&n.features&&e.featureSet.features.forEach(e=>{e.symbol&&("esriTS"===e.symbol.type?r(e.symbol):"CIMSymbolReference"!==e.symbol.type||this._is11xService||a())})}):!this._is11xService&&null!=(i=e.layerDefinition)&&null!=(s=i.drawingInfo)&&s.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&a()})}e.outSpatialReference&&(l.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(l,{exportOptions:a,layoutOptions:n||{}}),Object.assign(l.layoutOptions,{legendOptions:{operationalLayers:null!=o?o:this._legendLayers.slice()}}),this._legendLayers.length=0;const u={Web_Map_as_JSON:JSON.stringify(l),Format:H(t.format),Layout_Template:i};return e.extraParameters&&Object.assign(u,e.extraParameters),u}};Object(a.a)([Object(n.b)()],Je.prototype,"_geoprocessor",null),Object(a.a)([Object(n.b)()],Je.prototype,"_gpMetadata",void 0),Object(a.a)([Object(n.b)({readOnly:!0})],Je.prototype,"mode",null),Object(a.a)([Object(n.b)()],Je.prototype,"updateDelay",void 0),Je=Object(a.a)([Object(l.a)("esri.tasks.PrintTask")],Je);var xe=Je;t.default=xe}}]);
//# sourceMappingURL=136.05f147e8.chunk.js.map