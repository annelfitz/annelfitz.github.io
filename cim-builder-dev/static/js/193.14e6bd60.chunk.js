(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[193],{1036:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a(22),n=a(1),s=(a(5),a(6)),o=(a(4),a(2)),l=a(53),c=a(50),u=a(45),p=a(9),y=a(3),d=a(18),b=a(14),f=a(82),m=a(350),h=a(19),g=a(37),O=a(26);let j=class extends h.a{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}};Object(r.a)([Object(n.b)({type:O.a})],j.prototype,"outSpatialReference",void 0),Object(r.a)([Object(n.b)({type:g.a})],j.prototype,"processExtent",void 0),Object(r.a)([Object(n.b)({type:O.a})],j.prototype,"processSpatialReference",void 0),Object(r.a)([Object(n.b)({nonNullable:!0})],j.prototype,"returnFeatureCollection",void 0),Object(r.a)([Object(n.b)({nonNullable:!0})],j.prototype,"returnM",void 0),Object(r.a)([Object(n.b)({nonNullable:!0})],j.prototype,"returnZ",void 0),j=Object(r.a)([Object(o.a)("esri/rest/geoprocessor/GPOptions")],j),j.from=Object(s.m)(j);var v=j,S=a(246),w=a(199),P=a(10);let x=class extends P.a{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null}};Object(r.a)([Object(n.b)({type:g.a})],x.prototype,"extent",void 0),Object(r.a)([Object(n.b)()],x.prototype,"height",void 0),Object(r.a)([Object(n.b)()],x.prototype,"href",void 0),Object(r.a)([Object(n.b)()],x.prototype,"opacity",void 0),Object(r.a)([Object(n.b)()],x.prototype,"rotation",void 0),Object(r.a)([Object(n.b)()],x.prototype,"scale",void 0),Object(r.a)([Object(n.b)()],x.prototype,"visible",void 0),Object(r.a)([Object(n.b)()],x.prototype,"width",void 0),x=Object(r.a)([Object(o.a)("esri.layer.support.MapImage")],x);var D=x,I=a(62);let M=class extends P.a{constructor(e){super(e),this.itemId=null,this.url=null}};Object(r.a)([Object(n.b)({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],M.prototype,"itemId",void 0),Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],M.prototype,"url",void 0),M=Object(r.a)([Object(o.a)("esri.rest.support.DataFile")],M);var G=M,L=a(100);const V=new i.a({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let T=class extends P.a{constructor(e){super(e),this.distance=0,this.units=null}};Object(r.a)([Object(n.b)({json:{write:!0}})],T.prototype,"distance",void 0),Object(r.a)([Object(n.b)({json:{read:V.read,write:V.write}})],T.prototype,"units",void 0),T=Object(r.a)([Object(o.a)("esri/rest/support/LinearUnit")],T);var J=T;const N=new i.a({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let R=class extends P.a{constructor(e){super(e),this.dataType=null,this.value=null}};Object(r.a)([Object(n.b)({json:{read:N.read,write:N.write}})],R.prototype,"dataType",void 0),Object(r.a)([Object(n.b)()],R.prototype,"value",void 0),R=Object(r.a)([Object(o.a)("esri.rest.support.ParameterValue")],R);var F=R;let k=class extends P.a{constructor(e){super(e),this.format=null,this.itemId=null,this.url=null}};Object(r.a)([Object(n.b)()],k.prototype,"format",void 0),Object(r.a)([Object(n.b)({json:{read:{source:"itemID"},write:{target:"itemID"}}})],k.prototype,"itemId",void 0),Object(r.a)([Object(n.b)()],k.prototype,"url",void 0),k=Object(r.a)([Object(o.a)("esri/rest/support/RasterData")],k);var E=k;async function A(e,t,a,r,i){const n={},s={},o=[];return function(e,t,a){for(const r in e){const i=e[r];if(i&&"object"==typeof i&&i instanceof L.default){const{features:e}=i;a[r]=[t.length,t.length+e.length],e.forEach(e=>{t.push(e.geometry)})}}}(r,o,n),Object(S.a)(o).then(o=>{const{outSpatialReference:l,processExtent:c,processSpatialReference:p,returnFeatureCollection:y,returnM:d,returnZ:b}=a,{path:f}=Object(I.c)(e);for(const e in n){const t=n[e];s[e]=o.slice(t[0],t[1])}const m=l?l.wkid||l:null,h=p?p.wkid||p:null,g="execute"===t?{returnFeatureCollection:y||void 0,returnM:d||void 0,returnZ:b||void 0}:null,O=U({...c?{context:{extent:c,outSR:m,processSR:h}}:{"env:outSR":m,"env:processSR":h},...r,...g,f:"json"},null,s),j={...i,query:O};return Object(u.default)(`${f}/${t}`,j)})}function C(e){const t=e.dataType,a=F.fromJSON(e);switch(t){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":return a;case"GPDate":a.value=new Date(a.value);break;case"GPDataFile":a.value=G.fromJSON(a.value);break;case"GPLinearUnit":a.value=J.fromJSON(a.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const t=e.value.url;a.value=t?G.fromJSON(a.value):L.default.fromJSON(a.value);break}case"GPRasterData":case"GPRasterDataLayer":{const t=e.value.mapImage;a.value=t?D.fromJSON(t):E.fromJSON(a.value);break}case"GPField":a.value=w.a.fromJSON(a.value);break;case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return a;case"GPMultiValue:GPDate":{const e=a.value;a.value=e.map(e=>new Date(e));break}case"GPMultiValue:GPDataFile":a.value=a.value.map(e=>G.fromJSON(e));break;case"GPMultiValue:GPLinearUnit":a.value=a.value.map(e=>J.fromJSON(e));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":a.value=a.value.map(e=>L.default.fromJSON(e));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":a.value=a.value.map(e=>e?D.fromJSON(e):E.fromJSON(a.value));break;case"GPMultiValue:GPField":a.value=a.value.map(e=>w.a.fromJSON(e))}return a}function U(e,t,a){for(const r in e){const t=e[r];Array.isArray(t)?e[r]=JSON.stringify(t.map(e=>U({item:e},!0).item)):t instanceof Date&&(e[r]=t.getTime())}return Object(I.b)(e,t,a)}var _=a(620);var $,q=a(12);const z=new i.a({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let B=$=class extends P.a{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null}cancelJob(e){const{jobId:t,sourceUrl:a}=this,{path:r}=Object(I.c)(a),i={...this.requestOptions,...e,query:{f:"json"}};return this._clearTimer(),Object(u.default)(`${r}/jobs/${t}/cancel`,i).then(e=>{const t=$.fromJSON(e.data);return this.messages=t.messages,this.jobStatus=t.jobStatus,this})}destroy(){clearInterval(this._timer)}checkJobStatus(e){const{path:t}=Object(I.c)(this.sourceUrl),a={...this.requestOptions,...e,query:{f:"json"}},r=`${t}/jobs/${this.jobId}`;return Object(u.default)(r,a).then(({data:e})=>{const t=$.fromJSON(e);return this.messages=t.messages,this.jobStatus=t.jobStatus,this})}fetchResultData(e,t,a){t=v.from(t||{});const{returnFeatureCollection:r,returnM:i,returnZ:n,outSpatialReference:s}=t,{path:o}=Object(I.c)(this.sourceUrl),l=U({returnFeatureCollection:r,returnM:i,returnZ:n,outSR:s,returnType:"data",f:"json"},null),c={...this.requestOptions,...a,query:l},p=`${o}/jobs/${this.jobId}/results/${e}`;return Object(u.default)(p,c).then(e=>C(e.data))}fetchResultImage(e,t,a){const{path:r}=Object(I.c)(this.sourceUrl),i=U({...t.toJSON(),f:"json"}),n={...this.requestOptions,...a,query:i},s=`${r}/jobs/${this.jobId}/results/${e}`;return Object(u.default)(s,n).then(e=>C(e.data))}async fetchResultMapImageLayer(){const{path:e}=Object(I.c)(this.sourceUrl),t=e.indexOf("/GPServer/"),r=`${e.substring(0,t)}/MapServer/jobs/${this.jobId}`;return new(0,(await Promise.all([a.e(17),a.e(32)]).then(a.bind(null,722))).default)({url:r})}async waitForJobCompletion(e={}){const{interval:t=1e3,signal:a,statusCallback:r}=e;return new Promise((e,i)=>{Object(q.q)(a,()=>{this._clearTimer(),i(Object(q.e)())}),this._clearTimer();const n=setInterval(()=>{this._timer||i(Object(q.e)()),this.checkJobStatus(this.requestOptions).then(t=>{const{jobStatus:a}=t;switch(this.jobStatus=a,a){case"job-succeeded":this._clearTimer(),e(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":r&&r(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),i(this)}})},t);this._timer=n})}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null)}};Object(r.a)([Object(n.b)()],B.prototype,"jobId",void 0),Object(r.a)([Object(n.b)({json:{read:z.read}})],B.prototype,"jobStatus",void 0),Object(r.a)([Object(n.b)({type:[_.a]})],B.prototype,"messages",void 0),Object(r.a)([Object(n.b)()],B.prototype,"requestOptions",void 0),Object(r.a)([Object(n.b)({json:{write:!0}})],B.prototype,"sourceUrl",void 0),B=$=Object(r.a)([Object(o.a)("esri.rest.support.JobInfo")],B);var K=B;const W=new i.a({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"}),Z=(W.fromJSON.bind(W),W.toJSON.bind(W)),Q=new i.a({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"}),Y=(Q.fromJSON.bind(Q),Q.toJSON.bind(Q));function H(e,t){const{graphic:a,renderer:r,symbol:i}=t,n=i.type;if("text"===n||"shield-label-symbol"===n||!("visualVariables"in r)||!r.visualVariables)return;const s=r.getVisualVariablesForType("size"),o=r.getVisualVariablesForType("color"),l=r.getVisualVariablesForType("opacity"),c=r.getVisualVariablesForType("rotation"),u=s&&s[0],p=o&&o[0],y=l&&l[0],b=c&&c[0];if(u){const t="simple-marker"===n?i.style:null,r=Object(m.getSize)(u,a,{shape:t});null!=r&&("simple-marker"===n?e.size=Object(d.d)(r):"picture-marker"===n?(e.width=Object(d.d)(r),e.height=Object(d.d)(r)):"simple-line"===n?e.width=Object(d.d)(r):e.outline&&(e.outline.width=Object(d.d)(r)))}if(p){const t=Object(m.getColor)(p,a);(t&&"simple-marker"===n||"simple-line"===n||"simple-fill"===n)&&(e.color=t?t.toJSON():void 0)}if(y){const t=Object(m.getOpacity)(y,a);null!=t&&e.color&&(e.color[3]=Math.round(255*t))}b&&(e.angle=-Object(m.getRotationAngle)(r,a))}function X(e){return e&&"bing-maps"===e.type}function ee(e){return e&&"csv"===e.type}function te(e){return e&&"feature"===e.type}function ae(e){return e&&"geojson"===e.type}function re(e){return e&&"graphics"===e.type}function ie(e){return e&&"group"===e.type}function ne(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function se(e){return e&&"imagery"===e.type}function oe(e){return e&&"kml"===e.type}function le(e){return e&&"map-image"===e.type}function ce(e){return e&&"map-notes"===e.type}function ue(e){return e&&"open-street-map"===e.type}function pe(e){return e&&"stream"===e.type}function ye(e){return e&&"tile"===e.type}function de(e){return e&&"vector-tile"===e.type}function be(e){return e&&"web-tile"===e.type}function fe(e){return e&&"wms"===e.type}function me(e){return e&&"wmts"===e.type}let he=class extends h.a{constructor(e){super(e),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}};Object(r.a)([Object(n.b)()],he.prototype,"attributionVisible",void 0),Object(r.a)([Object(n.b)()],he.prototype,"exportOptions",void 0),Object(r.a)([Object(n.b)()],he.prototype,"forceFeatureAttributes",void 0),Object(r.a)([Object(n.b)()],he.prototype,"format",void 0),Object(r.a)([Object(n.b)()],he.prototype,"label",void 0),Object(r.a)([Object(n.b)()],he.prototype,"layout",void 0),Object(r.a)([Object(n.b)()],he.prototype,"layoutOptions",void 0),Object(r.a)([Object(n.b)()],he.prototype,"outScale",void 0),Object(r.a)([Object(n.b)()],he.prototype,"scalePreserved",void 0),Object(r.a)([Object(n.b)()],he.prototype,"showLabels",void 0),he=Object(r.a)([Object(o.a)("esri.rest.support.PrintTemplate")],he);var ge=he,Oe=a(65),je=a(358);const ve={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},Se=new i.a({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),we=new i.a({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),Pe=new Oe.a({returnGeometry:!0}),xe=new Map;async function De(e,t,a){const r=Me(e);let i=xe.get(r);return Promise.resolve().then(()=>i?{data:i.gpMetadata}:(i={gpServerUrl:r,is11xService:!1,legendLayerNameMap:[],legendLayers:[]},Object(u.default)(r,{query:{f:"json"}}))).then(e=>(i.gpMetadata=e.data,i.cimVersion=i.gpMetadata.cimVersion,i.is11xService=!!i.cimVersion,xe.set(r,i),Ie(t,i))).then(r=>{const n=Ye(i);let s;const o=e=>"sync"===n?e.results&&e.results[0]&&e.results[0].value:s.fetchResultData("Output_File",null,a).then(e=>e.value);return"async"===n?async function(e,t,a,r){return a=v.from(a||{}),A(e,"submitJob",a,t,r).then(t=>{const a=K.fromJSON(t.data);return a.sourceUrl=e,a})}(e,r,null,a).then(e=>(s=e,e.waitForJobCompletion({interval:t.updateDelay}).then(o))):async function(e,t,a,r){return A(e,"execute",a=v.from(a||{}),t,r).then(e=>{const t=e.data.results||[],a=e.data.messages||[];return{results:t.map(C),messages:a.map(e=>_.a.fromJSON(e))}})}(e,r,null,a).then(o)})}async function Ie(e,t){t=t||{is11xService:!1,legendLayerNameMap:[],legendLayers:[]};const a=e.template||new ge;null==a.showLabels&&(a.showLabels=!0);const r=a.exportOptions;let i;const n=Y(a.layout);if(r&&(i={dpi:r.dpi},"map_only"===n.toLowerCase()||""===n)){const e=r.width,t=r.height;i.outputSize=[e,t]}const s=a.layoutOptions;let o;if(s){let e,t;"Miles"===s.scalebarUnit||"Kilometers"===s.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==s.scalebarUnit&&"Feet"!==s.scalebarUnit||(e="Meters",t="Feet"),o={titleText:s.titleText,authorText:s.authorText,copyrightText:s.copyrightText,customTextElements:s.customTextElements,scaleBarOptions:{metricUnit:Se.toJSON(e),metricLabel:ve[e],nonMetricUnit:Se.toJSON(t),nonMetricLabel:ve[t]}}}let l=null;s&&s.legendLayers&&(l=s.legendLayers.map(e=>{t.legendLayerNameMap[e.layerId]=e.title;const a={id:e.layerId};return e.subLayerIds&&(a.subLayerIds=e.subLayerIds),a}));const c=await async function(e,t,a){const r=e.view;let i=r.spatialReference;const n={operationalLayers:await Ge(r,t,a)};let s=a.ssExtent||e.extent||r.extent;if(i&&i.isWrappable&&(s=s.clone()._normalize(!0),i=s.spatialReference),n.mapOptions={extent:s&&s.toJSON(),spatialReference:i&&i.toJSON(),showAttribution:t.attributionVisible},a.ssExtent=null,r.background&&(n.background=r.background.toJSON()),r.rotation&&(n.mapOptions.rotation=-r.rotation),t.scalePreserved&&(n.mapOptions.scale=t.outScale||r.scale),r.timeExtent){const e=Object(y.i)(r.timeExtent.start)?r.timeExtent.start.getTime():null,t=Object(y.i)(r.timeExtent.end)?r.timeExtent.end.getTime():null;n.mapOptions.time=[e,t]}return n}(e,a,t);if(c.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),a=/[\u0600-\u06FF]/,r=t=>{const r=t.text,i=t.font,n=i&&i.family&&i.family.toLowerCase();r&&i&&("arial"===n||"arial unicode ms"===n)&&(i.family=e.test(r)?"Arial Unicode MS":"Arial","normal"!==i.style&&a.test(r)&&(i.family="Arial Unicode MS"))},i=()=>{throw new p.a("print-task:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};c.operationalLayers.forEach(e=>{var a,n,s;null!=(a=e.featureCollection)&&a.layers?e.featureCollection.layers.forEach(e=>{var a,n,s,o;if(null!=(a=e.layerDefinition)&&null!=(n=a.drawingInfo)&&null!=(s=n.renderer)&&s.symbol){const a=e.layerDefinition.drawingInfo.renderer;"esriTS"===a.symbol.type?r(a.symbol):"CIMSymbolReference"!==a.symbol.type||t.is11xService||i()}null!=(o=e.featureSet)&&o.features&&e.featureSet.features.forEach(e=>{e.symbol&&("esriTS"===e.symbol.type?r(e.symbol):"CIMSymbolReference"!==e.symbol.type||t.is11xService||i())})}):!t.is11xService&&null!=(n=e.layerDefinition)&&null!=(s=n.drawingInfo)&&s.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&i()})}e.outSpatialReference&&(c.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(c,{exportOptions:i,layoutOptions:o||{}}),Object.assign(c.layoutOptions,{legendOptions:{operationalLayers:null!=l?l:t.legendLayers.slice()}}),t.legendLayers.length=0,xe.set(t.gpServerUrl,t);const u={Web_Map_as_JSON:JSON.stringify(c),Format:Z(a.format),Layout_Template:n};return e.extraParameters&&Object.assign(u,e.extraParameters),u}function Me(e){let t=e;const a=t.lastIndexOf("/GPServer/");return a>0&&(t=t.slice(0,a+9)),t}async function Ge(e,t,a){const r=[],i={layerView:null,printTemplate:t,view:e};let n=0;t.scalePreserved&&(n=t.outScale||e.scale);const s=function(e,t){const a=e.allLayerViews.items;if(t===e.scale)return a.filter(e=>!e.suspended);const r=new Array;for(const i of a)ne(i.parent)&&!r.includes(i.parent)||!i.visible||t&&"isVisibleAtScale"in i&&!i.isVisibleAtScale(t)||r.push(i);return r}(e,n);for(const o of s){const e=o.layer;if(!e.loaded||ie(e))continue;let t;i.layerView=o,t=X(e)?Le(e):ee(e)?await Ve(e,i,a):te(e)?await Je(e,i,a):ae(e)?await Ne(e,i,a):re(e)?await Re(e,i,a):se(e)?Fe(e,a):oe(e)?await ke(e,i,a):le(e)?Ee(e,i,a):ce(e)?await Ae(i,a):ue(e)?{type:"OpenStreetMap"}:pe(e)?await Ue(e,i,a):ye(e)?_e(e):de(e)?await $e(e,i,a):be(e)?qe(e):fe(e)?ze(e):me(e)?Be(e):await Ce(e,i,a),t&&(Array.isArray(t)?r.push(...t):(t.id=e.id,t.title=a.legendLayerNameMap[e.id]||e.title,t.opacity=e.opacity,t.minScale=e.minScale||0,t.maxScale=e.maxScale||0,r.push(t)))}if(n&&r.forEach(e=>{e.minScale=0,e.maxScale=0}),e.graphics&&e.graphics.length){const i=await Te(null,e.graphics,t,a);i&&r.push(i)}return r}function Le(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async function Ve(e,{layerView:t,printTemplate:a},r){let i;return r.legendLayers&&r.legendLayers.push({id:e.id}),r.is11xService?(i={type:"CSV"},e.write(i,{origin:"web-map"}),delete i.popupInfo,delete i.layerType,i.showLabels=a.showLabels&&e.labelsVisible,i):Te(e,await Qe(t),a,r)}async function Te(e,t,a,r){let i;const n={layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}},s={layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}},o={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}},l={layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}},c={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}};if(c.layerDefinition.name="textLayer",delete c.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?n.layerDefinition.name=s.layerDefinition.name=o.layerDefinition.name=l.layerDefinition.name=r.legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON();n.layerDefinition.drawingInfo.renderer=t,s.layerDefinition.drawingInfo.renderer=t,o.layerDefinition.drawingInfo.renderer=t,l.layerDefinition.drawingInfo.renderer=t}if(a.showLabels&&e.labelsVisible&&"function"==typeof e.write){var u,p;const t=null==(u=e.write({},{origin:"web-map"}).layerDefinition)||null==(p=u.drawingInfo)?void 0:p.labelingInfo;t&&(i=!0,n.layerDefinition.drawingInfo.labelingInfo=t,s.layerDefinition.drawingInfo.labelingInfo=t,o.layerDefinition.drawingInfo.labelingInfo=t,l.layerDefinition.drawingInfo.labelingInfo=t)}}let y;null!=e&&e.renderer||i||(delete n.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo);const d=null==e?void 0:e.fieldsIndex,b=null==e?void 0:e.renderer;if(d){if(b&&"function"==typeof b.collectRequiredFields){const e=new Set;await b.collectRequiredFields(e,d),y=Array.from(e)}const e=d.fields.map(e=>e.toJSON());n.layerDefinition.fields=e,s.layerDefinition.fields=e,o.layerDefinition.fields=e,l.layerDefinition.fields=e}const m=t&&t.length;let h;for(let O=0;O<m;O++){const i=t[O]||t.getItemAt(O);if(!1===i.visible||!i.geometry)continue;if(h=i.toJSON(),h.hasOwnProperty("popupTemplate")&&delete h.popupTemplate,h.geometry&&h.geometry.z&&delete h.geometry.z,h.symbol&&h.symbol.outline&&"esriCLS"===h.symbol.outline.type&&!r.is11xService)continue;!r.is11xService&&h.symbol&&h.symbol.outline&&h.symbol.outline.color&&h.symbol.outline.color[3]&&(h.symbol.outline.color[3]=255);const u=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!h.symbol&&e&&e.renderer&&u&&!r.is11xService){const t=e.renderer,a=await t.getSymbolAsync(i);if(!a)continue;h.symbol=a.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&H(h.symbol,{renderer:t,graphic:i,symbol:a})}if(h.symbol&&(h.symbol.angle||delete h.symbol.angle,He(h.symbol)?h.symbol=await We(h.symbol,r):h.symbol.text&&delete h.attributes),(!a||!a.forceFeatureAttributes)&&y&&y.length){const e={};y.forEach(t=>{h.attributes&&h.attributes.hasOwnProperty(t)&&(e[t]=h.attributes[t])}),h.attributes=e}"polygon"===i.geometry.type?n.featureSet.features.push(h):"polyline"===i.geometry.type?s.featureSet.features.push(h):"point"===i.geometry.type?h.symbol&&h.symbol.text?c.featureSet.features.push(h):o.featureSet.features.push(h):"multipoint"===i.geometry.type?l.featureSet.features.push(h):"extent"===i.geometry.type&&(h.geometry=f.a.fromExtent(i.geometry).toJSON(),n.featureSet.features.push(h))}const g=[n,s,l,o,c].filter(e=>e.featureSet.features.length>0);for(const f of g){const e=f.featureSet.features.every(e=>e.symbol);!e||a&&a.forceFeatureAttributes||f.featureSet.features.forEach(e=>{delete e.attributes}),e&&delete f.layerDefinition.drawingInfo,f.layerDefinition.drawingInfo&&f.layerDefinition.drawingInfo.renderer&&await Ze(f.layerDefinition.drawingInfo.renderer,r)}return g.length?{featureCollection:{layers:g},showLabels:i}:null}async function Je(e,t,a){var r,i;let n;a.legendLayers&&a.legendLayers.push({id:e.id});const s=e.renderer;if(e.featureReduction||s&&"dot-density"===s.type&&(!a.is11xService||parseFloat(a.cimVersion)<2.6))return Ce(e,t,a);const{layerView:o,printTemplate:l,view:c}=t,u=s&&("valueExpression"in s&&s.valueExpression||"hasVisualVariables"in s&&s.hasVisualVariables()),p="feature-layer"!==(null==(r=e.source)?void 0:r.type)&&"ogc-feature"!==(null==(i=e.source)?void 0:i.type);if(!a.is11xService&&u||e.featureReduction||p||!s||"field"in s&&null!=s.field&&("string"!=typeof s.field||!e.getField(s.field))){const t=await Qe(o);n=await Te(e,t,l,a)}else{var y,d;if(n={id:(b=e.write()).id,title:b.title,opacity:b.opacity,minScale:b.minScale,maxScale:b.maxScale,url:b.url,layerDefinition:b.layerDefinition},n.showLabels=l.showLabels&&e.labelsVisible,Ke(n,e),null!=(y=n.layerDefinition)&&null!=(d=y.drawingInfo)&&d.renderer&&(delete n.layerDefinition.minScale,delete n.layerDefinition.maxScale,await Ze(n.layerDefinition.drawingInfo.renderer,a),"visualVariables"in s&&s.visualVariables&&s.visualVariables[0])){const e=s.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=Object(m.getSizeRangeAtScale)(e,c.scale);n.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,n.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize}}}var b;return n}async function Ne(e,{layerView:t,printTemplate:a},r){return r.legendLayers&&r.legendLayers.push({id:e.id}),Te(e,await Qe(t),a,r)}async function Re(e,{printTemplate:t},a){return Te(e,null,t,a)}function Fe(e,t){t.legendLayers&&t.legendLayers.push({id:e.id});const a={bandIds:e.bandIds,compressionQuality:e.compressionQuality,format:e.format,interpolation:e.interpolation};if((e.mosaicRule||e.definitionExpression)&&(a.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(t.is11xService)e.renderingRule&&(a.renderingRule=e.renderingRule.toJSON()),e.renderer&&(a.layerDefinition=a.layerDefinition||{},a.layerDefinition.drawingInfo=a.layerDefinition.drawingInfo||{},a.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const t=e.exportImageServiceParameters.combineRendererWithRenderingRule();t&&(a.renderingRule=t.toJSON())}return Ke(a,e),a}async function ke(e,t,a){const r=t.printTemplate;if(a.is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=Object(b.D)(e.url),t}{const i=[],n=t.layerView;n.allVisibleMapImages.forEach((t,a)=>{const r={id:`${e.id}_image${a}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?r.imageData=t.href.substr(22):r.url=t.href,i.push(r)});const s=[...n.allVisiblePoints.items,...n.allVisiblePolylines.items,...n.allVisiblePolygons.items],o={id:e.id,...await Te(null,s,r,a)};return i.push(o),i}}function Ee(e,{view:t},a){let r;const i={id:e.id,subLayerIds:[]};let n=[];const s=t.scale,o=e=>{const t=0===s,a=0===e.minScale||s<=e.minScale,r=0===e.maxScale||s>=e.maxScale;if(e.visible&&(t||a&&r))if(e.sublayers)e.sublayers.forEach(o);else{const t=e.toExportImageJSON(),a={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};n.unshift(a),i.subLayerIds.push(e.id)}};return e.sublayers&&e.sublayers.forEach(o),n.length&&(n=n.map(({id:e,name:t,layerDefinition:a})=>({id:e,name:t,layerDefinition:a})),r={layers:n,visibleLayers:e.capabilities.exportMap.supportsDynamicLayers?void 0:i.subLayerIds},Ke(r,e),a.legendLayers.push(i)),r}async function Ae({layerView:e,printTemplate:t},a){const r=[],i=e.layer;if(Object(y.i)(i.featureCollections))for(const n of i.featureCollections){const e=await Te(n,n.source,t,a);e&&r.push(...e.featureCollection.layers)}else if(Object(y.i)(i.sublayers))for(const n of i.sublayers){const e=await Te(null,n.graphics,t,a);e&&r.push(...e.featureCollection.layers)}return{featureCollection:{layers:r}}}async function Ce(e,{printTemplate:t,view:a},r){const i={type:"image"},n={format:"png",ignoreBackground:!0,layers:[e],rotation:0},s=r.ssExtent||a.extent.clone();let o=96,l=!0,c=!0;if(t.exportOptions){const e=t.exportOptions;e.dpi>0&&(o=e.dpi),e.width>0&&(l=e.width%2==a.width%2),e.height>0&&(c=e.height%2==a.height%2)}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===a.scale)&&96===o&&(!l||!c)&&(n.area={x:0,y:0,width:a.width,height:a.height},l||(n.area.width-=1),c||(n.area.height-=1),!r.ssExtent)){const e=a.toMap(Object(d.a)(n.area.width,n.area.height));s.ymin=e.y,s.xmax=e.x,r.ssExtent=s}i.extent=s.clone()._normalize(!0).toJSON();const u=await a.takeScreenshot(n),{data:p}=Object(b.i)(u.dataUrl);return i.imageData=p,i}async function Ue(e,{layerView:t,printTemplate:a},r){return r.legendLayers&&r.legendLayers.push({id:e.id}),Te(e,await Qe(t),a,r)}function _e(e){const t={customParameters:e.customParameters};return Ke(t,e),t}async function $e(e,t,a){if(a.is11xService&&e.serviceUrl&&e.styleUrl){const t=c.b&&c.b.findCredential(e.styleUrl),r=c.b&&c.b.findCredential(e.serviceUrl);if(!t&&!r||"2.1.0"!==a.cimVersion){const a={type:"VectorTileLayer"};return a.styleUrl=Object(b.D)(e.styleUrl),t&&(a.token=t.token),r&&r.token!==a.token&&(a.additionalTokens=[{url:e.serviceUrl,token:r.token}]),a}}return Ce(e,t,a)}function qe(e){const t={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(t.subDomains=e.subDomains),t}function ze(e){let t;const a=[],r=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(r):e.name&&a.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(r),a.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:a,url:Object(b.D)(e.url),version:e.version}),t}function Be(e){const t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:Object(b.D)(e.url)}}function Ke(e,t){if(t.url)if(e.url=Object(b.D)(e.url||t.url),"apiKey"in t&&t.apiKey)e.token=t.apiKey;else if(l.a.apiKey&&Object(je.a)(t.url))e.token=l.a.apiKey;else{var a,r;e.token=null==(a=c.b)||null==(r=a.findCredential(t.url))?void 0:r.token}}async function We(e,t){t.canvas||(t.canvas=document.createElement("canvas"));const a=1024;t.canvas.width=a,t.canvas.height=a;const r=t.canvas.getContext("2d");let i,n;if(e.path){var s;const t=new Path2D(e.path);t.closePath(),r.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",r.fill(t);const o=function(e,t=15){const a=e.canvas.width,r=e.canvas.height,i=e.getImageData(0,0,a,r).data;let n,s,o,l,c,u;e:for(s=r;s--;)for(n=a;n--;)if(i[4*(a*s+n)+3]>t){u=s;break e}if(!u)return null;e:for(n=a;n--;)for(s=u+1;s--;)if(i[4*(a*s+n)+3]>t){c=n;break e}e:for(n=0;n<=c;++n)for(s=u+1;s--;)if(i[4*(a*s+n)+3]>t){o=n;break e}e:for(s=0;s<=u;++s)for(n=o;n<=c;++n)if(i[4*(a*s+n)+3]>t){l=s;break e}return{x:o,y:l,width:c-o,height:u-l}}(r);if(!o)return null;r.clearRect(0,0,a,a);const l=Object(d.c)(e.size)/Math.max(o.width,o.height);r.scale(l,l);const c=a/l,u=c/2-o.width/2-o.x,p=c/2-o.height/2-o.y;if(r.translate(u,p),Array.isArray(e.color)&&r.fill(t),null!=(s=e.outline)&&s.width&&Array.isArray(e.outline.color)){const a=e.outline;r.lineWidth=Object(d.c)(a.width)/l,r.lineJoin="round",r.strokeStyle=`rgba(${a.color[0]},${a.color[1]},${a.color[2]},${a.color[3]/255})`,r.stroke(t),o.width+=r.lineWidth,o.height+=r.lineWidth}o.width*=l,o.height*=l;const y=r.getImageData(512-o.width/2,512-o.height/2,Math.ceil(o.width),Math.ceil(o.height));i=y.width,n=y.height,r.canvas.width=i,r.canvas.height=n,r.putImageData(y,0,0)}else{const t="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,a=(await Object(u.default)(t,{responseType:"image"})).data;i=Object(d.c)(e.width),n=Object(d.c)(e.height),r.canvas.width=i,r.canvas.height=n,r.drawImage(a,0,0,r.canvas.width,r.canvas.height)}return{type:"esriPMS",imageData:r.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:Object(d.d)(n),width:Object(d.d)(i),xoffset:e.xoffset,yoffset:e.yoffset}}async function Ze(e,t){const a=e.type;if("simple"===a&&He(e.symbol))e.symbol=await We(e.symbol,t);else if("uniqueValue"===a||"classBreaks"===a){He(e.defaultSymbol)&&(e.defaultSymbol=await We(e.defaultSymbol,t));const r=e["uniqueValue"===a?"uniqueValueInfos":"classBreakInfos"];if(r)for(const e of r)He(e.symbol)&&(e.symbol=await We(e.symbol,t))}}async function Qe(e){return e.queryFeatures(Pe).then(e=>e.features)}function Ye(e){return e.gpMetadata&&e.gpMetadata.executionType?we.fromJSON(e.gpMetadata.executionType):"sync"}function He(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}var Xe=a(344);const et=new i.a({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"});let tt=class extends Xe.a{constructor(...e){super(...e),this._gpMetadata=null,this.updateDelay=1e3}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?et.fromJSON(this._gpMetadata.executionType):"sync"}execute(e,t){return e&&(e.updateDelay=this.updateDelay),De(this.url,e,{...this.requestOptions,...t})}async _getGpPrintParams(e){const t=Me(this.url);return Ie(e,xe.get(t))}};Object(r.a)([Object(n.b)()],tt.prototype,"_gpMetadata",void 0),Object(r.a)([Object(n.b)({readOnly:!0})],tt.prototype,"mode",null),Object(r.a)([Object(n.b)()],tt.prototype,"updateDelay",void 0),tt=Object(r.a)([Object(o.a)("esri.tasks.PrintTask")],tt);var at=tt;t.default=at},620:function(e,t,a){"use strict";var r=a(0),i=a(22),n=a(10),s=a(1),o=(a(5),a(6),a(4),a(2));const l=new i.a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let c=class extends n.a{constructor(e){super(e),this.description=null,this.type=null}};Object(r.a)([Object(s.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(r.a)([Object(s.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(r.a)([Object(o.a)("esri.rest.support.GPMessage")],c);var u=c;t.a=u}}]);
//# sourceMappingURL=193.14e6bd60.chunk.js.map