"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3529],{63529:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>o});var t=r(20102),n=r(70586),l=r(17452),s=r(66677),i=r(52104),y=r(87344);async function o(e){const a=e.properties?.customParameters,l=await async function(e,a){let r=(0,s.Qc)(e);if((0,n.Wi)(r)&&(r=await c(e,a)),(0,n.Wi)(r))throw new t.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:l,sublayer:o}=r;let u;const d={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(l){case"MapServer":u=null!=o?"FeatureLayer":async function(e,a){return(await(0,i.C)(e,{customParameters:a})).tileInfo}(e,a).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":u=(0,i.C)(e,{customParameters:a}).then((e=>{const a=e.tileInfo&&e.tileInfo.format;return e.tileInfo?"LERC"!==a?.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":u=(0,i.C)(r.url.path,{customParameters:a}).then((e=>{if(e){if("Voxel"===e?.layerType)return"VoxelLayer";if(e?.layers&&Array.isArray(e.layers)&&e.layers.length>0){const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},r=e.layers[0]?.layerType;if(null!=a[r])return a[r]}}return"SceneLayer"}));break;default:u=d[l]}const f="FeatureServer"===l,m={parsedUrl:r,Constructor:null,layerOrTableId:f?o:null,sublayerIds:null,tableIds:null},b=await u;if({FeatureLayer:!0,SceneLayer:!0}[b]&&null==o){const r=await async function(e,a,r){let t,n=!1;if("FeatureServer"===a){const a=await(0,i.V)(e,{customParameters:r});n=!!a.layersJSON,t=a.layersJSON||a.serviceJSON}else t=await(0,i.C)(e,{customParameters:r});const l=t?.layers,s=t?.tables;return{layerIds:l?.map((e=>e.id)).reverse()||[],tableIds:s?.map((e=>e.id)).reverse()||[],layerInfos:n?l:[],tableInfos:n?s:[]}}(e,l,a);f&&(m.sublayerInfos=r.layerInfos,m.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length?(m.sublayerIds=r.layerIds,m.tableIds=r.tableIds):f&&(m.layerOrTableId=r.layerIds[0]??r.tableIds[0],m.sourceJSON=r.layerInfos[0]??r.tableInfos[0])}return m.Constructor=await async function(e){return(0,y.T[e])()}(b),m}(e.url,a),o={...e.properties,url:e.url};if(!l.sublayerIds)return null!=l.layerOrTableId&&(o.layerId=l.layerOrTableId,o.sourceJSON=l.sourceJSON),new l.Constructor(o);const d=new(0,(await Promise.all([r.e(6968),r.e(5787)]).then(r.bind(r,89348))).default)({title:l.parsedUrl.title});return function(e,a,r){function t(e,t){const l={...r,layerId:e,sublayerTitleMode:"service-name"};return(0,n.pC)(t)&&(l.sourceJSON=t),new a.Constructor(l)}a.sublayerIds.forEach((r=>{const n=t(r,u(a.sublayerInfos,r));e.add(n)})),a.tableIds.forEach((r=>{const n=t(r,u(a.tableInfos,r));e.tables.add(n)}))}(d,l,o),d}function u(e,a){return e?e.find((e=>e.id===a)):null}async function c(e,a){const r=await(0,i.C)(e,{customParameters:a});let t=null,y=null;const o=r.type;if("Feature Layer"===o||"Table"===o?(t="FeatureServer",y=r.id):"indexedVector"===o?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":d(r)?(t="SceneServer",y=r.id):r.hasOwnProperty("layers")&&d(r.layers?.[0])&&(t="SceneServer"),!t)return null;const u=null!=y?(0,s.DR)(e):null;return{title:(0,n.pC)(u)&&r.name||(0,l.vt)(e),serverType:t,sublayer:y,url:{path:(0,n.pC)(u)?u.serviceUrl:(0,l.mN)(e).path}}}function d(e){return e?.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}},52104:(e,a,r)=>{r.d(a,{C:()=>s,V:()=>n});var t=r(3172);async function n(e,a){let r=await s(e,a);r=r||{},r.layers=r.layers?.filter(l)||[];const t={serviceJSON:r};if(r.currentVersion<10.5)return t;const n=await s(e+"/layers",a);return t.layersJSON={layers:n?.layers?.filter(l)||[],tables:n?.tables||[]},t}function l(e){return!e.type||"Feature Layer"===e.type}async function s(e,a){return(await(0,t.default)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}})).data}},87344:(e,a,r)=>{r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(6968),r.e(2723)]).then(r.bind(r,2723))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(8244),r.e(1423),r.e(1819),r.e(1491),r.e(8326),r.e(3121),r.e(4133),r.e(2485)]).then(r.bind(r,30223))).default,CSVLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(8244),r.e(1423),r.e(1819),r.e(1491),r.e(8326),r.e(3121),r.e(4910)]).then(r.bind(r,45425))).default,ElevationLayer:async()=>(await Promise.all([r.e(1938),r.e(9932)]).then(r.bind(r,49932))).default,FeatureLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(8244),r.e(1423),r.e(1819),r.e(1491),r.e(8326),r.e(3121),r.e(4477)]).then(r.bind(r,3121))).default,GroupLayer:async()=>(await Promise.all([r.e(6968),r.e(9348)]).then(r.bind(r,89348))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(3723)]).then(r.bind(r,3723))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(8244),r.e(1423),r.e(1819),r.e(1491),r.e(7202)]).then(r.bind(r,23477))).default,ImageryLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(8244),r.e(8326),r.e(176),r.e(9147),r.e(7175)]).then(r.bind(r,47175))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(6968),r.e(4547),r.e(9454),r.e(1773),r.e(8244),r.e(1938),r.e(176),r.e(9147),r.e(2398),r.e(9032)]).then(r.bind(r,52294))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(4547),r.e(4133),r.e(734)]).then(r.bind(r,9310))).default,KMLLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(8244),r.e(1423),r.e(739)]).then(r.bind(r,42756))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(4547),r.e(9454),r.e(1773),r.e(9779)]).then(r.bind(r,99779))).default,MapImageLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(8244),r.e(1423),r.e(1491),r.e(3128),r.e(7374)]).then(r.bind(r,27374))).default,MapNotesLayer:async()=>(await Promise.all([r.e(6968),r.e(4547),r.e(9454),r.e(1773),r.e(8244),r.e(1423),r.e(1819),r.e(1491),r.e(8326),r.e(3121),r.e(3750)]).then(r.bind(r,62128))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(8244),r.e(1423),r.e(1819),r.e(1491),r.e(2855)]).then(r.bind(r,88068))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(6968),r.e(6199),r.e(6237)]).then(r.bind(r,66237))).default,PointCloudLayer:async()=>(await Promise.all([r.e(1773),r.e(4133),r.e(1197)]).then(r.bind(r,10608))).default,RouteLayer:async()=>(await Promise.all([r.e(6968),r.e(4547),r.e(9454),r.e(1773),r.e(8244),r.e(1423),r.e(4286)]).then(r.bind(r,40153))).default,SceneLayer:async()=>(await Promise.all([r.e(6968),r.e(4547),r.e(9454),r.e(1773),r.e(8244),r.e(1423),r.e(1819),r.e(1491),r.e(8326),r.e(3121),r.e(4133),r.e(8238),r.e(1380)]).then(r.bind(r,10586))).default,StreamLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(8244),r.e(1423),r.e(1819),r.e(1408)]).then(r.bind(r,88387))).default,TileLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(8244),r.e(1423),r.e(1491),r.e(1938),r.e(3128),r.e(8636)]).then(r.bind(r,98636))).default,UnknownLayer:async()=>(await r.e(4166).then(r.bind(r,44166))).default,UnsupportedLayer:async()=>(await r.e(9296).then(r.bind(r,39296))).default,VectorTileLayer:async()=>(await Promise.all([r.e(6968),r.e(1938),r.e(4325),r.e(1785),r.e(4109)]).then(r.bind(r,24109))).default,VoxelLayer:async()=>(await Promise.all([r.e(4133),r.e(7304)]).then(r.bind(r,91398))).default,WebTileLayer:async()=>(await Promise.all([r.e(6968),r.e(6199)]).then(r.bind(r,16199))).default,WFSLayer:async()=>(await Promise.all([r.e(6968),r.e(4547),r.e(9454),r.e(1773),r.e(8244),r.e(1423),r.e(1819),r.e(3974)]).then(r.bind(r,12653))).default,WMSLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(5906)]).then(r.bind(r,25906))).default,WMTSLayer:async()=>(await Promise.all([r.e(6968),r.e(6199),r.e(5853)]).then(r.bind(r,55853))).default}}}]);