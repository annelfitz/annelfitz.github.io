"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[519,3139,3388],{74368:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(41226);async function n(e,a){const r=await(0,t.T)(e,a);r.layers=r.layers.filter(i);const n={serviceJSON:r};if((r.currentVersion??0)<10.5)return n;const y=await(0,t.T)(e+"/layers",a);return n.layersJSON={layers:y.layers.filter(i),tables:y.tables},n}function i(e){return!e.type||"Feature Layer"===e.type}},20519:(e,a,r)=>{r.r(a),r.d(a,{populateOperationalLayers:()=>c});var t=r(40281),n=(r(93169),r(66978)),i=r(19610),y=r(98995);function l(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}var s=r(43139),o=r(21371);async function c(e,a,r){if(!a)return;const t=[];for(const n of a){const e=S(n,r);"GroupLayer"===n.layerType?t.push(g(e,n,r)):t.push(e)}const i=await(0,n.as)(t);for(const n of i)n.value&&e.add(n.value)}const u={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},p={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},L={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},d={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},f={ArcGISFeatureLayer:"FeatureLayer"},m={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function S(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&w(a)&&await async function(e,a,r){const t=i.T.FeatureLayer,n=await t(),y=a.featureCollection,l=y?.showLegend,s=y?.layers?.map(((t,i)=>{const y=new n;y.read(t,r);const s={...r,ignoreDefaults:!0};return y.read({id:`${e.id}-sublayer-${i}`,visibility:a.visibleLayers?.includes(i)??!0},s),null!=l&&y.read({showLegend:l},s),y}));e.layers.addMany(s??[])}(t,a,r.context),await(0,o.y)(t,r.context),t}(await async function(e,a){const r=a.context,t=T(r);let n=e.layerType||e.type;!n&&a&&a.defaultLayerType&&(n=a.defaultLayerType);const o=t[n];let c=o?i.T[o]:i.T.UnknownLayer;if(I(e)){const a=r?.portal;if(e.itemId){const r=new y.default({id:e.itemId,portal:a});await r.load();const t=(await(0,s.selectLayerClassPath)(r)).className||"UnknownLayer";c=i.T[t]}}else"ArcGISFeatureLayer"===n?function(e){return l(e,"notes")}(e)||function(e){return l(e,"markup")}(e)?c=i.T.MapNotesLayer:function(e){return l(e,"route")}(e)?c=i.T.RouteLayer:w(e)&&(c=i.T.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?c=i.T.WMTSLayer:"WFS"===n&&"2.0.0"!==e.wfsInfo?.version&&(c=i.T.UnsupportedLayer);return c()}(e,a),e,a)}function w(e){return"ArcGISFeatureLayer"===e.layerType&&!I(e)&&(e.featureCollection?.layers?.length??0)>1}function I(e){return"Feature Collection"===e.type}function T(e){let a;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":a=L;break;case"ground":a=p;break;default:a=u}else switch(e.layerContainerType){case"basemap":a=m;break;case"tables":a=f;break;default:a=d}return a}async function g(e,a,r){const n=new t.Z,i=c(n,Array.isArray(a.layers)?a.layers:[],r),y=await e;if(await i,"group"===y.type)return y.layers.addMany(n),y}},19610:(e,a,r)=>{r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await r.e(165).then(r.bind(r,60165))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(5731),r.e(9973),r.e(6146),r.e(5675),r.e(6505)]).then(r.bind(r,66505))).default,CSVLayer:async()=>(await r.e(8435).then(r.bind(r,98435))).default,DimensionLayer:async()=>(await r.e(7406).then(r.bind(r,47406))).default,ElevationLayer:async()=>(await r.e(6816).then(r.bind(r,46816))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,64326))).default,GroupLayer:async()=>(await r.e(5069).then(r.bind(r,65069))).default,GeoRSSLayer:async()=>(await r.e(54).then(r.bind(r,70054))).default,GeoJSONLayer:async()=>(await r.e(5064).then(r.bind(r,5064))).default,ImageryLayer:async()=>(await Promise.all([r.e(5345),r.e(9672),r.e(132),r.e(8137)]).then(r.bind(r,98137))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(5345),r.e(394),r.e(9672),r.e(9736),r.e(132),r.e(3938)]).then(r.bind(r,83938))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(5731),r.e(6251)]).then(r.bind(r,56251))).default,KMLLayer:async()=>(await r.e(3838).then(r.bind(r,13838))).default,LineOfSightLayer:async()=>(await r.e(4910).then(r.bind(r,44910))).default,MapImageLayer:async()=>(await Promise.all([r.e(680),r.e(9583)]).then(r.bind(r,19583))).default,MapNotesLayer:async()=>(await r.e(9622).then(r.bind(r,69622))).default,MediaLayer:async()=>(await Promise.all([r.e(4735),r.e(8663)]).then(r.bind(r,98663))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(7213),r.e(6741)]).then(r.bind(r,98701))).default,OpenStreetMapLayer:async()=>(await r.e(1656).then(r.bind(r,31656))).default,OrientedImageryLayer:async()=>(await r.e(5440).then(r.bind(r,15440))).default,PointCloudLayer:async()=>(await Promise.all([r.e(5731),r.e(9532)]).then(r.bind(r,9532))).default,RouteLayer:async()=>(await Promise.all([r.e(729),r.e(8257)]).then(r.bind(r,88257))).default,SceneLayer:async()=>(await Promise.all([r.e(5731),r.e(9973),r.e(6146),r.e(5675),r.e(5838)]).then(r.bind(r,5838))).default,StreamLayer:async()=>(await r.e(2668).then(r.bind(r,2668))).default,SubtypeGroupLayer:async()=>(await r.e(255).then(r.bind(r,50255))).default,TileLayer:async()=>(await Promise.all([r.e(680),r.e(2977)]).then(r.bind(r,42977))).default,UnknownLayer:async()=>(await r.e(4917).then(r.bind(r,74917))).default,UnsupportedLayer:async()=>(await r.e(8101).then(r.bind(r,88101))).default,VectorTileLayer:async()=>(await Promise.all([r.e(969),r.e(6045)]).then(r.bind(r,47409))).default,VoxelLayer:async()=>(await Promise.all([r.e(5731),r.e(1080)]).then(r.bind(r,11080))).default,WebTileLayer:async()=>(await r.e(9200).then(r.bind(r,89200))).default,WFSLayer:async()=>(await Promise.all([r.e(2622),r.e(8566)]).then(r.bind(r,38566))).default,WMSLayer:async()=>(await r.e(4227).then(r.bind(r,84227))).default,WMTSLayer:async()=>(await r.e(6951).then(r.bind(r,46951))).default}},32698:(e,a,r)=>{r.d(a,{Y:()=>y,h:()=>i});var t=r(35995),n=r(70032);function i(e){return{origin:"portal-item",url:(0,t.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function y(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,t.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}},33388:(e,a,r)=>{r.r(a),r.d(a,{getFirstLayerOrTableId:()=>I,getNumLayersAndTables:()=>T,getSubtypeGroupLayerIds:()=>g,load:()=>L,preprocessFSItemData:()=>w});var t=r(10064),n=r(30651),i=r(25899),y=r(74368),l=r(70032),s=r(98995),o=r(32698),c=r(73117),u=r(21371),p=r(41226);async function L(e,a){const r=e.instance.portalItem;if(r&&r.id)return await r.load(a),function(e){const a=e.instance.portalItem;if(!a?.type||!e.supportedTypes.includes(a.type))throw new t.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a?.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,a){const r=e.instance,n=r.portalItem;if(!n)return;const{url:i,title:l}=n,s=(0,o.h)(n);if("group"===r.type)return r.read({title:l},s),async function(e,a){let r;const{portalItem:n}=e;if(!n)return;const i=n.type,l=a.layerModuleTypeMap,s=(0,c._$)(n,"Oriented Imagery Layer")??!1;switch(i){case"Feature Service":r=s?l.OrientedImageryLayer:l.FeatureLayer;break;case"Stream Service":r=l.StreamLayer;break;case"Scene Service":r=l.SceneLayer;break;case"Feature Collection":r=l.FeatureLayer;break;default:throw new t.Z("portal:unsupported-item-type-as-group",`The item type '${i}' is not supported as a 'IGroupLayer'`)}let[o,u]=await Promise.all([r(),S(a)]),L=()=>o;if("Feature Service"===i){if(u=n.url?await w(u,n.url):{},g(u).length){const e=l.SubtypeGroupLayer,a=await e();L=e=>"SubtypeGroupLayer"===e.layerType?a:o}return f(e,L,u,await async function(e){const{layersJSON:a}=await(0,y.V)(e);if(!a)return null;const r=[...a.layers,...a.tables];return e=>r.find((a=>a.id===e.id))}(n.url))}return T(u)>0?f(e,L,u):async function(e,a){const{portalItem:r}=e;if(!r?.url)return;const t=await(0,p.T)(r.url);t&&f(e,a,{layers:t.layers?.map(d),tables:t.tables?.map(d)})}(e,L)}(r,e);i&&r.read({url:i},s);const L=await S(e,a);return L&&r.read(L,s),r.resourceReferences={portalItem:n,paths:s.readResourcePaths??[]},"subtype-group"!==r.type&&r.read({title:l},s),(0,u.y)(r,s)}(e,a)}function d(e){return{id:e.id,name:e.name}}function f(e,a,r,y){let l=r.layers||[];const o=r.tables||[];if("Feature Collection"===e.portalItem?.type&&(l.forEach((e=>{"Table"===e?.layerDefinition?.type&&o.push(e)})),l=l.filter((e=>"Table"!==e?.layerDefinition?.type))),"coverage"in r){const a=function(e){const{coverage:a}=e;if(!a)return null;const r=new URL(a);if(a.toLowerCase().includes("item.html")){const e=r.searchParams.get("id"),a=r.origin;return n.Z.fromPortalItem({portalItem:new s.default({id:e,url:a})})}if((0,i.B5)(a))return n.Z.fromArcGISServerUrl({url:a});throw new t.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(r);a&&e.add(a)}l.reverse().forEach((t=>{const n=m(e,a(t),r,t,y?.(t));e.add(n)})),o.reverse().forEach((t=>{const n=m(e,a(t),r,t,y?.(t));e.tables.add(n)}))}function m(e,a,r,t,n){const i=e.portalItem,y=new a({portalItem:i.clone(),layerId:t.id});if("sourceJSON"in y&&(y.sourceJSON=n),"subtype-group"!==y.type&&(y.sublayerTitleMode="service-name"),"Feature Collection"===i.type){const e={origin:"portal-item",portal:i.portal||l.Z.getDefault()};y.read(t,e);const a=r.showLegend;null!=a&&y.read({showLegend:a},e)}return y}async function S(e,a){if(!1===e.supportsData)return;const r=e.instance,t=r.portalItem;if(!t)return;let n=null;try{n=await t.fetchData("json",a)}catch(i){}if(function(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}(r)){let e=null,a=!0;if(n&&T(n)>0){if(null==r.layerId){const e=g(n);r.layerId="subtype-group"===r.type?e?.[0]:I(n)}e=function(e,a){const{layerId:r}=a,t=e.layers?.find((e=>e.id===r))||e.tables?.find((e=>e.id===r));return t&&function(e,a){return!("feature"===a.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===a.type&&!("layerType"in e))}(t,a)?t:null}(n,r),e&&(1===T(n)&&(a=!1),null!=n.showLegend&&(e.showLegend=n.showLegend))}return a&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),e}return n}async function w(e,a){if(null==e?.layers||null==e?.tables){const r=await(0,p.T)(a);(e=e||{}).layers=e.layers||r?.layers,e.tables=e.tables||r?.tables}return e}function I(e){const a=e.layers;if(a&&a.length)return a[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function T(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function g(e){const a=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&a.push(e.id)})),a}},43139:(e,a,r)=>{r.r(a),r.d(a,{fromItem:()=>c,selectLayerClassPath:()=>u});var t=r(10064),n=r(37933),i=r(19610),y=r(98995),l=r(33388),s=r(73117),o=r(41226);async function c(e){!e.portalItem||e.portalItem instanceof y.default||(e={...e,portalItem:new y.default(e.portalItem)});const a=await async function(e){return await e.load(),async function(e){const a=i.T[e.className];return{constructor:await a(),properties:e.properties}}(await u(e))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function u(e){switch(e.type){case"Map Service":return async function(e){return await async function(e){return(await(0,o.T)(e.url)).tileInfo}(e)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e);case"Feature Service":return async function(e){if((0,s._$)(e,"Oriented Imagery Layer"))return async function(e){await e.load();const a=await e.fetchData();return a.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:a}}(e);const a=await p(e);if("object"==typeof a){const e={};return null!=a.id&&(e.layerId=a.id),{className:a.className||"FeatureLayer",properties:e}}return{className:"GroupLayer"}}(e);case"Feature Collection":return async function(e){await e.load();const a=(0,s._$)(e,"Map Notes"),r=(0,s._$)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,s._$)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,l.getNumLayersAndTables)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return async function(e){const a=await p(e);if("object"==typeof a){const r={};let t;if(null!=a.id?(r.layerId=a.id,t=`${e.url}/layers/${a.id}`):t=e.url,e.typeKeywords?.length)for(const a of Object.keys(n.fb))if(e.typeKeywords.includes(a))return{className:n.fb[a]};const i=await(0,o.T)(t);return{className:n.fb[i?.layerType]||"SceneLayer",properties:r}}if(!1===a)return"Voxel"===(await(0,o.T)(e.url))?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"};return{className:"GroupLayer"}}(e);case"Image Service":return async function(e){await e.load();const a=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=(await e.fetchData())?.layerType;if("ArcGISTiledImageServiceLayer"===r)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===r)return{className:"ImageryLayer"};const t=await(0,o.T)(e.url),n=t.cacheType?.toLowerCase(),i=t.capabilities?.toLowerCase().includes("tilesonly");return"map"===n||i?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:throw new t.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function p(e){const a=e.url;if(!a||a.match(/\/\d+$/))return{};await e.load();const r=await e.fetchData();if("Feature Service"===e.type){const e=L(await(0,l.preprocessFSItemData)(r,a));if("object"==typeof e){const a=(0,l.getSubtypeGroupLayerIds)(r);e.className=null!=e.id&&a.includes(e.id)?"SubtypeGroupLayer":"FeatureLayer"}return e}return(0,l.getNumLayersAndTables)(r)>0?L(r):L(await(0,o.T)(a))}function L(e){return 1===(0,l.getNumLayersAndTables)(e)&&{id:(0,l.getFirstLayerOrTableId)(e)}}},41226:(e,a,r)=>{r.d(a,{T:()=>n});var t=r(76200);async function n(e,a){const{data:r}=await(0,t.default)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);
//# sourceMappingURL=519.10dacb5b.chunk.js.map