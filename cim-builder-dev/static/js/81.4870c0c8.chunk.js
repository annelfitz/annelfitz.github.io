(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[81,96],{434:function(e,t,a){"use strict";a.r(t),a.d(t,"getFirstLayerOrTableId",(function(){return m})),a.d(t,"getNumLayersAndTables",(function(){return L})),a.d(t,"load",(function(){return o})),a.d(t,"preprocessFSItemData",(function(){return f}));var r=a(9),n=a(603),l=a(67),i=a(630),u=a(343),s=a(631);async function o(e,t){const a=e.instance.portalItem;return a&&a.id?(await a.load(t),function(e){const t=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(t.type))throw new r.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:t.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,t){const a=e.instance,r=a.portalItem,{url:n,title:l}=r,s=Object(i.a)(r);if("group"===a.type)return a.read({title:l},s),c(a,e);n&&a.read({url:n},s);const o=await p(e,t);return o&&a.read(o,s),a.resourceReferences={portalItem:r,paths:s.readResourcePaths},a.read({title:l},s),Object(u.a)(a,s)}(e,t)):Promise.resolve()}function c(e,t){let a;const l=e.portalItem.type;switch(l){case"Feature Service":a=n.a.FeatureLayer;break;case"Stream Service":a=n.a.StreamLayer;break;case"Scene Service":a=n.a.SceneLayer;break;case"Feature Collection":a=n.a.FeatureLayer;break;default:throw new r.a("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}let i;return a().then(e=>(i=e,p(t))).then(async t=>"Feature Service"===l?(t=await f(t,e.portalItem.url),y(e,i,t)):L(t)>0?y(e,i,t):function(e,t){return e.portalItem.url?Object(s.a)(e.portalItem.url).then(a=>{var r,n;function l(e){return{id:e.id,name:e.name}}a&&y(e,t,{layers:null==(r=a.layers)?void 0:r.map(l),tables:null==(n=a.tables)?void 0:n.map(l)})}):Promise.resolve()}(e,i))}function y(e,t,a){let r=a.layers||[];const n=a.tables||[];"Feature Collection"===e.portalItem.type&&(r.forEach(e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&n.push(e)}),r=r.filter(e=>{var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)})),r.reverse().forEach(r=>{const n=d(e,t,a,r);e.add(n)}),n.reverse().forEach(r=>{const n=d(e,t,a,r);e.tables.add(n)})}function d(e,t,a,r){const n=new t({portalItem:e.portalItem.clone(),layerId:r.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||l.a.getDefault()};n.read(r,t);const i=a.showLegend;null!=i&&n.read({showLegend:i},t)}return n}function p(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const a=e.instance;return a.portalItem.fetchData("json",t).catch(()=>null).then(async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(a)){let t,r=!0;return e&&L(e)>0&&(null==a.layerId&&(a.layerId=m(e)),t=function(e,t){const a=e.layers;if(a)for(let n=0;n<a.length;n++)if(a[n].id===t)return a[n];const r=e.tables;if(r)for(let n=0;n<r.length;n++)if(r[n].id===t)return r[n];return null}(e,a.layerId),t&&(1===L(e)&&(r=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),r&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),t}return e})}async function f(e,t){var a,r;if(null==(null==(a=e)?void 0:a.layers)||null==(null==(r=e)?void 0:r.tables)){const a=await Object(s.a)(t);(e=e||{}).layers=e.layers||(null==a?void 0:a.layers),e.tables=e.tables||(null==a?void 0:a.tables)}return e}function m(e){const t=e.layers;if(t&&t.length)return t[0].id;const a=e.tables;return a&&a.length?a[0].id:null}function L(e){var t,a,r,n;return(null!=(t=null==e||null==(a=e.layers)?void 0:a.length)?t:0)+(null!=(r=null==e||null==(n=e.tables)?void 0:n.length)?r:0)}},435:function(e,t,a){"use strict";a.r(t),a.d(t,"fromItem",(function(){return o})),a.d(t,"selectLayerClassPath",(function(){return c}));var r=a(9),n=a(603),l=a(227),i=a(434),u=a(698),s=a(631);function o(e){return!e.portalItem||e.portalItem instanceof l.default||(e={...e,portalItem:new l.default(e.portalItem)}),function(e){return e.load().then(c).then(y)}(e.portalItem).then(t=>{const a={portalItem:e.portalItem,...t.properties},r=t.constructor;return Promise.resolve(new r(a))})}function c(e){switch(e.type){case"Map Service":return function(e){return Object(s.a)(e.url).then(e=>e.tileInfo)}(e).then(e=>e?{className:"TileLayer"}:{className:"MapImageLayer"});case"Feature Service":return function(e){return d(e).then(e=>{if("object"==typeof e){const t={};return null!=e.id&&(t.layerId=e.id),{className:"FeatureLayer",properties:t}}return{className:"GroupLayer"}})}(e);case"Feature Collection":return async function(e){if(await e.load(),Object(u.a)(e,"Map Notes"))return{className:"MapNotesLayer"};if(Object(u.a)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===Object(i.getNumLayersAndTables)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return d(e).then(t=>{if("object"==typeof t){const a={};let r;if(null!=t.id?(a.layerId=t.id,r=`${e.url}/layers/${t.id}`):r=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const t={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const a of Object.keys(t))if(-1!==e.typeKeywords.indexOf(a))return{className:t[a]}}return Object(s.a)(r).then(e=>{let t="SceneLayer";const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&r[e.layerType]&&(t=r[e.layerType]),{className:t,properties:a}})}return{className:"GroupLayer"}})}(e);case"Image Service":return async function(e){var t,a,r;await e.load();const n=null!=(t=null==(a=e.typeKeywords)?void 0:a.map(e=>e.toLowerCase()))?t:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const l=await e.fetchData(),i=null==l?void 0:l.layerType;return"ArcGISTiledImageServiceLayer"===i?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===i?{className:"ImageryLayer"}:"map"===(null==(r=(await Object(s.a)(e.url)).cacheType)?void 0:r.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Feed":return{className:"StreamLayer"};default:return Promise.reject(new r.a("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function y(e){return(0,n.a[e.className])().then(t=>({constructor:t,properties:e.properties}))}function d(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then(()=>e.fetchData()).then(async t=>"Feature Service"===e.type?p(t=await Object(i.preprocessFSItemData)(t,e.url)):Object(i.getNumLayersAndTables)(t)>0?p(t):Object(s.a)(e.url).then(p))}function p(e){return 1===Object(i.getNumLayersAndTables)(e)&&{id:Object(i.getFirstLayerOrTableId)(e)}}},603:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={BingMapsLayer:async()=>(await a.e(209).then(a.bind(null,750))).default,BuildingSceneLayer:async()=>(await Promise.all([a.e(26),a.e(210)]).then(a.bind(null,738))).default,CSVLayer:async()=>(await a.e(120).then(a.bind(null,751))).default,ElevationLayer:async()=>(await a.e(29).then(a.bind(null,746))).default,FeatureLayer:async()=>(await Promise.resolve().then(a.bind(null,200))).default,GroupLayer:async()=>(await a.e(35).then(a.bind(null,683))).default,GeoRSSLayer:async()=>(await a.e(211).then(a.bind(null,716))).default,ImageryLayer:async()=>(await Promise.all([a.e(9),a.e(14),a.e(23),a.e(212)]).then(a.bind(null,739))).default,ImageryTileLayer:async()=>(await Promise.all([a.e(9),a.e(14),a.e(23),a.e(87)]).then(a.bind(null,737))).default,IntegratedMeshLayer:async()=>(await a.e(77).then(a.bind(null,742))).default,KMLLayer:async()=>(await a.e(118).then(a.bind(null,752))).default,MapImageLayer:async()=>(await Promise.all([a.e(17),a.e(32)]).then(a.bind(null,722))).default,MapNotesLayer:async()=>(await a.e(189).then(a.bind(null,753))).default,OGCFeatureLayer:async()=>(await a.e(73).then(a.bind(null,754))).default,OpenStreetMapLayer:async()=>(await a.e(121).then(a.bind(null,724))).default,PointCloudLayer:async()=>(await a.e(57).then(a.bind(null,740))).default,RouteLayer:async()=>(await a.e(213).then(a.bind(null,725))).default,SceneLayer:async()=>(await Promise.all([a.e(26),a.e(214)]).then(a.bind(null,755))).default,StreamLayer:async()=>(await a.e(215).then(a.bind(null,756))).default,TileLayer:async()=>(await Promise.all([a.e(17),a.e(95)]).then(a.bind(null,726))).default,UnknownLayer:async()=>(await a.e(216).then(a.bind(null,727))).default,UnsupportedLayer:async()=>(await a.e(217).then(a.bind(null,728))).default,VectorTileLayer:async()=>(await Promise.all([a.e(18),a.e(68)]).then(a.bind(null,741))).default,WebTileLayer:async()=>(await a.e(190).then(a.bind(null,628))).default,WFSLayer:async()=>(await a.e(74).then(a.bind(null,757))).default,WMSLayer:async()=>(await a.e(119).then(a.bind(null,747))).default,WMTSLayer:async()=>(await a.e(122).then(a.bind(null,743))).default}},630:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(14),n=a(67);function l(e){return{origin:"portal-item",url:Object(r.K)(e.itemUrl),portal:e.portal||n.a.getDefault(),portalItem:e,readResourcePaths:[]}}},631:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(45);async function n(e){const{data:t}=await Object(r.default)(e,{responseType:"json",query:{f:"json"}});return t}},698:function(e,t,a){"use strict";function r(e,t){return!!e.typeKeywords&&e.typeKeywords.indexOf(t)>-1}a.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=81.4870c0c8.chunk.js.map