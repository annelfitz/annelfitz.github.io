"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[3388],{74368:(e,t,r)=>{r.d(t,{V:()=>n});var a=r(41226);async function n(e,t){const r=await(0,a.T)(e,t);r.layers=r.layers.filter(l);const n={serviceJSON:r};if((r.currentVersion??0)<10.5)return n;const o=await(0,a.T)(e+"/layers",t);return n.layersJSON={layers:o.layers.filter(l),tables:o.tables},n}function l(e){return!e.type||"Feature Layer"===e.type}},32698:(e,t,r)=>{r.d(t,{Y:()=>o,h:()=>l});var a=r(35995),n=r(70032);function l(e){return{origin:"portal-item",url:(0,a.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function o(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,a.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}},33388:(e,t,r)=>{r.r(t),r.d(t,{getFirstLayerOrTableId:()=>w,getNumLayersAndTables:()=>I,getSubtypeGroupLayerIds:()=>T,load:()=>d,preprocessFSItemData:()=>h});var a=r(10064),n=r(30651),l=r(25899),o=r(74368),s=r(70032),i=r(98995),u=r(32698),c=r(73117),y=r(21371),p=r(41226);async function d(e,t){const r=e.instance.portalItem;if(r&&r.id)return await r.load(t),function(e){const t=e.instance.portalItem;if(!t?.type||!e.supportedTypes.includes(t.type))throw new a.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:t?.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,t){const r=e.instance,n=r.portalItem;if(!n)return;const{url:l,title:s}=n,i=(0,u.h)(n);if("group"===r.type)return r.read({title:s},i),async function(e,t){let r;const{portalItem:n}=e;if(!n)return;const l=n.type,s=t.layerModuleTypeMap,i=(0,c._$)(n,"Oriented Imagery Layer")??!1;switch(l){case"Feature Service":r=i?s.OrientedImageryLayer:s.FeatureLayer;break;case"Stream Service":r=s.StreamLayer;break;case"Scene Service":r=s.SceneLayer;break;case"Feature Collection":r=s.FeatureLayer;break;default:throw new a.Z("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}let[u,y]=await Promise.all([r(),g(t)]),d=()=>u;if("Feature Service"===l){if(y=n.url?await h(y,n.url):{},T(y).length){const e=s.SubtypeGroupLayer,t=await e();d=e=>"SubtypeGroupLayer"===e.layerType?t:u}return m(e,d,y,await async function(e){const{layersJSON:t}=await(0,o.V)(e);if(!t)return null;const r=[...t.layers,...t.tables];return e=>r.find((t=>t.id===e.id))}(n.url))}return I(y)>0?m(e,d,y):async function(e,t){const{portalItem:r}=e;if(!r?.url)return;const a=await(0,p.T)(r.url);a&&m(e,t,{layers:a.layers?.map(f),tables:a.tables?.map(f)})}(e,d)}(r,e);l&&r.read({url:l},i);const d=await g(e,t);return d&&r.read(d,i),r.resourceReferences={portalItem:n,paths:i.readResourcePaths??[]},"subtype-group"!==r.type&&r.read({title:s},i),(0,y.y)(r,i)}(e,t)}function f(e){return{id:e.id,name:e.name}}function m(e,t,r,o){let s=r.layers||[];const u=r.tables||[];if("Feature Collection"===e.portalItem?.type&&(s.forEach((e=>{"Table"===e?.layerDefinition?.type&&u.push(e)})),s=s.filter((e=>"Table"!==e?.layerDefinition?.type))),"coverage"in r){const t=function(e){const{coverage:t}=e;if(!t)return null;const r=new URL(t);if(t.toLowerCase().includes("item.html")){const e=r.searchParams.get("id"),t=r.origin;return n.Z.fromPortalItem({portalItem:new i.default({id:e,url:t})})}if((0,l.B5)(t))return n.Z.fromArcGISServerUrl({url:t});throw new a.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(r);t&&e.add(t)}s.reverse().forEach((a=>{const n=b(e,t(a),r,a,o?.(a));e.add(n)})),u.reverse().forEach((a=>{const n=b(e,t(a),r,a,o?.(a));e.tables.add(n)}))}function b(e,t,r,a,n){const l=e.portalItem,o=new t({portalItem:l.clone(),layerId:a.id});if("sourceJSON"in o&&(o.sourceJSON=n),"subtype-group"!==o.type&&(o.sublayerTitleMode="service-name"),"Feature Collection"===l.type){const e={origin:"portal-item",portal:l.portal||s.Z.getDefault()};o.read(a,e);const t=r.showLegend;null!=t&&o.read({showLegend:t},e)}return o}async function g(e,t){if(!1===e.supportsData)return;const r=e.instance,a=r.portalItem;if(!a)return;let n=null;try{n=await a.fetchData("json",t)}catch(l){}if(function(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}(r)){let e=null,t=!0;if(n&&I(n)>0){if(null==r.layerId){const e=T(n);r.layerId="subtype-group"===r.type?e?.[0]:w(n)}e=function(e,t){const{layerId:r}=t,a=e.layers?.find((e=>e.id===r))||e.tables?.find((e=>e.id===r));return a&&function(e,t){return!("feature"===t.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===t.type&&!("layerType"in e))}(a,t)?a:null}(n,r),e&&(1===I(n)&&(t=!1),null!=n.showLegend&&(e.showLegend=n.showLegend))}return t&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),e}return n}async function h(e,t){if(null==e?.layers||null==e?.tables){const r=await(0,p.T)(t);(e=e||{}).layers=e.layers||r?.layers,e.tables=e.tables||r?.tables}return e}function w(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function I(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function T(e){const t=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}},41226:(e,t,r)=>{r.d(t,{T:()=>n});var a=r(76200);async function n(e,t){const{data:r}=await(0,a.default)(e,{responseType:"json",query:{f:"json",...t?.customParameters,token:t?.apiKey}});return r}}}]);
//# sourceMappingURL=3388.73dfa014.chunk.js.map