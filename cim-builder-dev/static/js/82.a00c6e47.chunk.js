(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[82],{425:function(e,a,t){"use strict";t.r(a),t.d(a,"fromItem",(function(){return c})),t.d(a,"selectLayerClassPath",(function(){return y}));var n=t(3),r=t(12),l=t(50),i=t(221),u=t(609),s=t(540);function c(e){return!e.portalItem||e.portalItem instanceof i.default||(e={...e,portalItem:new i.default(e.portalItem)}),function(e){return e.load().then(y).then(o)}(e.portalItem).then(a=>{const t={portalItem:e.portalItem,...a.properties},n=a.constructor;return Promise.resolve(new n(t))})}function y(e){switch(e.type){case"Map Service":return function(e){return function(e){return L(e.url).then(e=>e.tileInfo)}(e).then(e=>e?{className:"TileLayer"}:{className:"MapImageLayer"})}(e);case"Feature Service":return function(e){return d(e).then(e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}})}(e);case"Feature Collection":return async function(e){return await e.load(),Object(u.a)(e,"Map Notes")?{className:"MapNotesLayer"}:Object(u.a)(e,"Route Layer")?{className:"RouteLayer"}:1===p(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return d(e).then(a=>{if("object"==typeof a){const t={};let n;if(null!=a.id?(t.layerId=a.id,n=`${e.url}/layers/${a.id}`):n=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(a))if(-1!==e.typeKeywords.indexOf(t))return{className:a[t]}}return L(n).then(e=>{let a="SceneLayer";const n={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&n[e.layerType]&&(a=n[e.layerType]),{className:a,properties:t}})}return{className:"GroupLayer"}})}(e);case"Image Service":return async function(e){var a,t,n;await e.load();const r=null!=(a=null==(t=e.typeKeywords)?void 0:t.map(e=>e.toLowerCase()))?a:[];if(r.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(r.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const l=await e.fetchData(),i=null==l?void 0:l.layerType;return"ArcGISTiledImageServiceLayer"===i?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===i?{className:"ImageryLayer"}:"map"===(null==(n=(await L(e.url)).cacheType)?void 0:n.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new r.a("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function o(e){return(0,s.a[e.className])().then(a=>({constructor:a,properties:e.properties}))}function d(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then(()=>e.fetchData()).then(a=>p(a)>0?f(a):L(e.url).then(f))}function f(e){return 1===p(e)&&{id:Object(n.o)(m(e))}}function m(e){const a=e.layers;if(a&&a.length)return a[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function p(e){var a,t,n,r;return(null!=(a=null==e||null==(t=e.layers)?void 0:t.length)?a:0)+(null!=(n=null==e||null==(r=e.tables)?void 0:r.length)?n:0)}function L(e){return Object(l.default)(e,{responseType:"json",query:{f:"json"}}).then(e=>e.data)}},540:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));const n={BingMapsLayer:async()=>(await t.e(147).then(t.bind(null,654))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(23),t.e(148)]).then(t.bind(null,642))).default,CSVLayer:async()=>(await t.e(130).then(t.bind(null,655))).default,ElevationLayer:async()=>(await t.e(27).then(t.bind(null,651))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(null,195))).default,GroupLayer:async()=>(await t.e(32).then(t.bind(null,593))).default,GeoRSSLayer:async()=>(await t.e(149).then(t.bind(null,622))).default,ImageryLayer:async()=>(await Promise.all([t.e(11),t.e(21),t.e(150)]).then(t.bind(null,644))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(11),t.e(21),t.e(67)]).then(t.bind(null,641))).default,IntegratedMeshLayer:async()=>(await t.e(66).then(t.bind(null,649))).default,KMLLayer:async()=>(await t.e(77).then(t.bind(null,656))).default,MapImageLayer:async()=>(await Promise.all([t.e(14),t.e(30)]).then(t.bind(null,627))).default,MapNotesLayer:async()=>(await t.e(131).then(t.bind(null,657))).default,OpenStreetMapLayer:async()=>(await t.e(79).then(t.bind(null,629))).default,PointCloudLayer:async()=>(await t.e(53).then(t.bind(null,646))).default,RouteLayer:async()=>(await t.e(151).then(t.bind(null,630))).default,SceneLayer:async()=>(await Promise.all([t.e(23),t.e(152)]).then(t.bind(null,658))).default,StreamLayer:async()=>(await t.e(153).then(t.bind(null,659))).default,TileLayer:async()=>(await Promise.all([t.e(14),t.e(70)]).then(t.bind(null,631))).default,UnknownLayer:async()=>(await t.e(154).then(t.bind(null,632))).default,UnsupportedLayer:async()=>(await t.e(155).then(t.bind(null,633))).default,VectorTileLayer:async()=>(await Promise.all([t.e(24),t.e(57)]).then(t.bind(null,647))).default,WebTileLayer:async()=>(await t.e(132).then(t.bind(null,552))).default,WMSLayer:async()=>(await t.e(78).then(t.bind(null,652))).default,WMTSLayer:async()=>(await t.e(80).then(t.bind(null,648))).default}},609:function(e,a,t){"use strict";function n(e,a){return!!e.typeKeywords&&e.typeKeywords.indexOf(a)>-1}t.d(a,"a",(function(){return n}))}}]);
//# sourceMappingURL=82.a00c6e47.chunk.js.map