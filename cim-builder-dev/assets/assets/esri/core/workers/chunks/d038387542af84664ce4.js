self.webpackChunkRemoteClient([78],{172:function(e,a,t){"use strict";t.r(a),t.d(a,"fromItem",(function(){return c})),t.d(a,"selectLayerClassPath",(function(){return o}));var n=t(0),r=t(16),l=t(54),i=t(108),u=t(389),s=t(271);function c(e){return!e.portalItem||e.portalItem instanceof i.default||(e={...e,portalItem:new i.default(e.portalItem)}),function(e){return e.load().then(o).then(y)}(e.portalItem).then(a=>{const t={portalItem:e.portalItem,...a.properties},n=a.constructor;return Promise.resolve(new n(t))})}function o(e){switch(e.type){case"Map Service":return function(e){return function(e){return p(e.url).then(e=>e.tileInfo)}(e).then(e=>e?{className:"TileLayer"}:{className:"MapImageLayer"})}(e);case"Feature Service":return function(e){return d(e).then(e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}})}(e);case"Feature Collection":return async function(e){return await e.load(),Object(u.a)(e,"Map Notes")?{className:"MapNotesLayer"}:Object(u.a)(e,"Route Layer")?{className:"RouteLayer"}:1===L(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return d(e).then(a=>{if("object"==typeof a){const t={};let n;if(null!=a.id?(t.layerId=a.id,n=`${e.url}/layers/${a.id}`):n=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(a))if(-1!==e.typeKeywords.indexOf(t))return{className:a[t]}}return p(n).then(e=>{let a="SceneLayer";const n={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&n[e.layerType]&&(a=n[e.layerType]),{className:a,properties:t}})}return{className:"GroupLayer"}})}(e);case"Image Service":return async function(e){var a,t,n;await e.load();const r=null!=(a=null==(t=e.typeKeywords)?void 0:t.map(e=>e.toLowerCase()))?a:[];if(r.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(r.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const l=await e.fetchData(),i=null==l?void 0:l.layerType;return"ArcGISTiledImageServiceLayer"===i?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===i?{className:"ImageryLayer"}:"map"===(null==(n=(await p(e.url)).cacheType)?void 0:n.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new r.a("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function y(e){return(0,s.a[e.className])().then(a=>({constructor:a,properties:e.properties}))}function d(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then(()=>e.fetchData()).then(a=>L(a)>0?f(a):p(e.url).then(f))}function f(e){return 1===L(e)&&{id:Object(n.n)(m(e))}}function m(e){const a=e.layers;if(a&&a.length)return a[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function L(e){var a,t,n,r;return(null!=(a=null==e||null==(t=e.layers)?void 0:t.length)?a:0)+(null!=(n=null==e||null==(r=e.tables)?void 0:r.length)?n:0)}function p(e){return Object(l.default)(e,{responseType:"json",query:{f:"json"}}).then(e=>e.data)}},271:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));const n={BingMapsLayer:async()=>(await t.e(44).then(t.bind(null,426))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(17),t.e(76)]).then(t.bind(null,408))).default,CSVLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(54)]).then(t.bind(null,427))).default,ElevationLayer:async()=>(await t.e(15).then(t.bind(null,418))).default,FeatureLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(60)]).then(t.bind(null,167))).default,GroupLayer:async()=>(await Promise.all([t.e(18),t.e(146)]).then(t.bind(null,356))).default,GeoRSSLayer:async()=>(await t.e(47).then(t.bind(null,393))).default,ImageryLayer:async()=>(await Promise.all([t.e(1),t.e(10),t.e(14),t.e(46)]).then(t.bind(null,409))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(1),t.e(10),t.e(14),t.e(61)]).then(t.bind(null,407))).default,IntegratedMeshLayer:async()=>(await t.e(40).then(t.bind(null,415))).default,KMLLayer:async()=>(await Promise.all([t.e(1),t.e(34)]).then(t.bind(null,420))).default,MapImageLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(12),t.e(45)]).then(t.bind(null,360))).default,MapNotesLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(49)]).then(t.bind(null,421))).default,OpenStreetMapLayer:async()=>(await Promise.all([t.e(11),t.e(160)]).then(t.bind(null,397))).default,PointCloudLayer:async()=>(await t.e(33).then(t.bind(null,411))).default,RouteLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(55)]).then(t.bind(null,398))).default,SceneLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(3),t.e(17),t.e(161)]).then(t.bind(null,428))).default,StreamLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(41)]).then(t.bind(null,429))).default,TileLayer:async()=>(await Promise.all([t.e(1),t.e(2),t.e(12),t.e(48)]).then(t.bind(null,399))).default,UnknownLayer:async()=>(await t.e(73).then(t.bind(null,400))).default,UnsupportedLayer:async()=>(await t.e(74).then(t.bind(null,401))).default,VectorTileLayer:async()=>(await Promise.all([t.e(22),t.e(36)]).then(t.bind(null,410))).default,WebTileLayer:async()=>(await t.e(11).then(t.bind(null,311))).default,WMSLayer:async()=>(await t.e(37).then(t.bind(null,416))).default,WMTSLayer:async()=>(await Promise.all([t.e(11),t.e(162)]).then(t.bind(null,412))).default}},389:function(e,a,t){"use strict";function n(e,a){return!!e.typeKeywords&&e.typeKeywords.indexOf(a)>-1}t.d(a,"a",(function(){return n}))}});