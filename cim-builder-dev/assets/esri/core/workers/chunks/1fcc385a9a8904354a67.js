"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7035,7541],{41123:(e,t,a)=>{a.d(t,{D:()=>n});const r="randomUUID"in crypto;function n(){if(r)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}},16306:(e,t,a)=>{a.d(t,{aX:()=>S});var r=a(68773),n=a(20102),s=a(92604),i=a(70586),o=a(38913),l=a(58901),u=a(73913),d=a(8744),p=a(40488),c=(a(66577),a(3172)),f=a(33955),h=a(11282),y=a(17452);async function m(e,t,a){const r="string"==typeof e?(0,y.mN)(e):e,n=t[0].spatialReference,s=(0,f.Ji)(t[0]),i={...a,query:{...r.query,f:"json",sr:n.wkid?n.wkid:JSON.stringify(n),geometries:JSON.stringify((l=t,{geometryType:(0,f.Ji)(l[0]),geometries:l.map((e=>e.toJSON()))}))}},{data:o}=await(0,c.default)(r.path+"/simplify",i);var l;return function(e,t,a){const r=(0,f.q9)(t);return e.map((e=>{const t=r.fromJSON(e);return t.spatialReference=a,t}))}(o.geometries,s,n)}const g=s.Z.getLogger("esri.geometry.support.normalizeUtils");function w(e){return"polygon"===e[0].type}function b(e){return"polyline"===e[0].type}function F(e,t,a){if(t){const t=function(e,t){if(!(e instanceof l.Z||e instanceof o.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw g.error(e),new n.Z(e)}const a=(0,u.x3)(e),r=[];for(const e of a){const a=[];r.push(a),a.push([e[0][0],e[0][1]]);for(let r=0;r<e.length-1;r++){const n=e[r][0],s=e[r][1],i=e[r+1][0],o=e[r+1][1],l=Math.sqrt((i-n)*(i-n)+(o-s)*(o-s)),u=(o-s)/l,d=(i-n)/l,p=l/t;if(p>1){for(let e=1;e<=p-1;e++){const r=e*t,i=d*r+n,o=u*r+s;a.push([i,o])}const e=(l+Math.floor(p-1)*t)/2,r=d*e+n,i=u*e+s;a.push([r,i])}a.push([i,o])}}return function(e){return"polygon"===e.type}(e)?new o.Z({rings:r,spatialReference:e.spatialReference}):new l.Z({paths:r,spatialReference:e.spatialReference})}(e,1e6);e=(0,p.Sx)(t,!0)}return a&&(e=(0,u.Sy)(e,a)),e}function Z(e,t,a){if(Array.isArray(e)){const r=e[0];if(r>t){const a=(0,u.XZ)(r,t);e[0]=r+a*(-2*t)}else if(r<a){const t=(0,u.XZ)(r,a);e[0]=r+t*(-2*a)}}else{const r=e.x;if(r>t){const a=(0,u.XZ)(r,t);e=e.clone().offset(a*(-2*t),0)}else if(r<a){const t=(0,u.XZ)(r,a);e=e.clone().offset(t*(-2*a),0)}}return e}function A(e,t){let a=-1;for(let r=0;r<t.cutIndexes.length;r++){const n=t.cutIndexes[r],s=t.geometries[r],i=(0,u.x3)(s);for(let e=0;e<i.length;e++){const t=i[e];t.some((a=>{if(a[0]<180)return!0;{let a=0;for(let e=0;e<t.length;e++){const r=t[e][0];a=r>a?r:a}a=Number(a.toFixed(9));const r=-360*(0,u.XZ)(a,180);for(let a=0;a<t.length;a++){const t=s.getPoint(e,a);s.setPoint(e,a,t.clone().offset(r,0))}return!0}}))}if(n===a){if(w(e))for(const t of(0,u.x3)(s))e[n]=e[n].addRing(t);else if(b(e))for(const t of(0,u.x3)(s))e[n]=e[n].addPath(t)}else a=n,e[n]=s}return e}async function S(e,t,a){if(!Array.isArray(e))return S([e],t);t&&"string"!=typeof t&&g.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n="string"==typeof t?t:t?.url??r.Z.geometryServiceUrl;let s,y,w,b,R,v,I,x,E=0;const $=[],O=[];for(const t of e)if((0,i.Wi)(t))O.push(t);else if(s||(s=t.spatialReference,y=(0,d.C5)(s),w=s.isWebMercator,v=w?102100:4326,b=u.UZ[v].maxX,R=u.UZ[v].minX,I=u.UZ[v].plus180Line,x=u.UZ[v].minus180Line),y)if("mesh"===t.type)O.push(t);else if("point"===t.type)O.push(Z(t.clone(),b,R));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>Z(e,b,R))),O.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,y);O.push(e.rings?new o.Z(e):e)}else if(t.extent){const e=t.extent,a=(0,u.XZ)(e.xmin,R)*(2*b);let r=0===a?t.clone():(0,u.Sy)(t.clone(),a);e.offset(a,0),e.intersects(I)&&e.xmax!==b?(E=e.xmax>E?e.xmax:E,r=F(r,w),$.push(r),O.push("cut")):e.intersects(x)&&e.xmin!==R?(E=e.xmax*(2*b)>E?e.xmax*(2*b):E,r=F(r,w,360),$.push(r),O.push("cut")):O.push(r)}else O.push(t.clone());else O.push(t);let U=(0,u.XZ)(E,b),C=-90;const L=U,T=new l.Z;for(;U>0;){const e=360*U-180;T.addPath([[e,C],[e,-1*C]]),C*=-1,U--}if($.length>0&&L>0){const t=A($,await async function(e,t,a,r){const n=(0,h.en)(e),s=t[0].spatialReference,i={...r,query:{...n.query,f:"json",sr:JSON.stringify(s),target:JSON.stringify({geometryType:(0,f.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(a)}},o=await(0,c.default)(n.path+"/cut",i),{cutIndexes:l,geometries:u=[]}=o.data;return{cutIndexes:l,geometries:u.map((e=>{const t=(0,f.im)(e);return t.spatialReference=s,t}))}}(n,$,T,a)),r=[],s=[];for(let a=0;a<O.length;a++){const n=O[a];if("cut"!==n)s.push(n);else{const n=t.shift(),o=e[a];(0,i.pC)(o)&&"polygon"===o.type&&o.rings&&o.rings.length>1&&n.rings.length>=o.rings.length?(r.push(n),s.push("simplify")):s.push(w?(0,p.$)(n):n)}}if(!r.length)return s;const o=await m(n,r,a),l=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?l.push(t):l.push(w?(0,p.$)(o.shift()):o.shift())}return l}const J=[];for(let e=0;e<O.length;e++){const t=O[e];if("cut"!==t)J.push(t);else{const e=$.shift();J.push(!0===w?(0,p.$)(e):e)}}return J}},73913:(e,t,a)=>{a.d(t,{Sy:()=>l,UZ:()=>i,XZ:()=>o,x3:()=>u});var r=a(58901),n=a(82971),s=a(33955);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new r.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator}),minus180Line:new r.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new r.Z({paths:[[[180,-180],[180,180]]],spatialReference:n.Z.WGS84}),minus180Line:new r.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:n.Z.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function l(e,t){const a=u(e);for(const e of a)for(const a of e)a[0]+=t;return e}function u(e){return(0,s.oU)(e)?e.rings:e.paths}},3388:(e,t,a)=>{var r;a.d(t,{i:()=>r}),function(e){e[e.PROJECT_VERTICES=1]="PROJECT_VERTICES"}(r||(r={}))},87269:(e,t,a)=>{a.r(t),a.d(t,{applyEdits:()=>y});var r,n=a(38171),s=a(46791),i=a(20102),o=a(22974),l=a(70586),u=a(17452),d=a(41123),p=a(16306),c=a(3388),f=a(66361);!function(e){e.GLTF_BINARY="3D_glb",e.GLTF_JSON="3D_gltf"}(r||(r={}));var h=a(84230);async function y(e,t,a,n={}){let u,d;const p={edits:a,result:new Promise(((e,t)=>{u=e,d=t}))};e.emit("apply-edits",p);try{const{results:d,edits:p}=await async function(e,t,a,n){if(await e.load(),!function(e){return e&&null!=e.applyEdits}(t))throw new i.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,h.ln)(e))throw new i.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:o,options:u}=await async function(e,t,a){const n=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),o=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=(0,l.pC)(e.infoFor3D);if(!t||!n&&!o)throw new i.Z(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");const d=(0,h.S1)(e);if(!d.data.isVersioned&&a?.gdbVersion)throw new i.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!d.editing.supportsRollbackOnFailure&&a?.rollbackOnFailureEnabled)throw new i.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!d.editing.supportsGlobalId&&a?.globalIdUsed)throw new i.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!d.editing.supportsGlobalId&&o)throw new i.Z(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!a?.globalIdUsed&&o)throw new i.Z(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const p={...a};if(null!=p.rollbackOnFailureEnabled||d.editing.supportsRollbackOnFailure||(p.rollbackOnFailureEnabled=!0),!1===p.rollbackOnFailureEnabled&&"original-and-current-features"===p.returnServiceEditsOption)throw new i.Z(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!d.editing.supportsReturnServiceEditsInSourceSpatialReference&&p.returnServiceEditsInSourceSR)throw new i.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(p.returnServiceEditsInSourceSR&&"original-and-current-features"!==p.returnServiceEditsOption)throw new i.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const c={...t};if(c.addFeatures=t&&s.Z.isCollection(t.addFeatures)?t.addFeatures.toArray():c.addFeatures||[],c.updateFeatures=t&&s.Z.isCollection(t.updateFeatures)?t.updateFeatures.toArray():c.updateFeatures||[],c.deleteFeatures=t&&s.Z.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():c.deleteFeatures||[],c.addFeatures.length&&!d.operations.supportsAdd)throw new i.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(c.updateFeatures.length&&!d.operations.supportsUpdate)throw new i.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(c.deleteFeatures.length&&!d.operations.supportsDelete)throw new i.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");c.addAttachments=c.addAttachments||[],c.updateAttachments=c.updateAttachments||[],c.deleteAttachments=c.deleteAttachments||[],c.addFeatures=c.addFeatures.map(b),c.updateFeatures=c.updateFeatures.map(b),c.addAssets=[];const f=a?.globalIdUsed||u;return c.addFeatures.forEach((t=>function(e,t,a){m(e,t,a)}(t,e,f))),c.updateFeatures.forEach((t=>function(e,t,a){m(e,t,a);const r=(0,h.S1)(t);if("geometry"in e&&(0,l.pC)(e.geometry)&&!r?.editing.supportsGeometryUpdate)throw new i.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,f))),c.deleteFeatures.forEach((t=>function(e,t,a){m(e,t,a)}(t,e,f))),c.addAttachments.forEach((t=>g(t,e))),c.updateAttachments.forEach((t=>g(t,e))),u&&await async function(e,t){if((0,l.Wi)(t.infoFor3D))return;const{infoFor3D:a}=t;let n=!1;for(const e of a.editFormats)if(e===r.GLTF_BINARY){n=!0;break}const s=[];for(const a of e.addFeatures??[])s.push(F(a,e,t,n));for(const a of e.updateFeatures??[])s.push(F(a,e,t,n));const i=await Promise.allSettled(s);for(const e of i)if("rejected"===e.status)throw e.reason}(c,e),{edits:await w(c),options:p}}(e,a,n);return o.addFeatures?.length||o.updateFeatures?.length||o.deleteFeatures?.length||o.addAttachments?.length||o.updateAttachments?.length||o.deleteAttachments?.length?{edits:o,results:await t.applyEdits(o,u)}:{edits:o,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,n),c=e=>e.filter((e=>!e.error)).map(o.d9),y={edits:p,addedFeatures:c(d.addFeatureResults),updatedFeatures:c(d.updateFeatureResults),deletedFeatures:c(d.deleteFeatureResults),addedAttachments:c(d.addAttachmentResults),updatedAttachments:c(d.updateAttachmentResults),deletedAttachments:c(d.deleteAttachmentResults),exceededTransferLimit:!1};return d.editedFeatureResults?.length&&(y.editedFeatures=d.editedFeatureResults),(y.addedFeatures.length||y.updatedFeatures.length||y.deletedFeatures.length||y.addedAttachments.length||y.updatedAttachments.length||y.deletedAttachments.length)&&(e.emit("edits",y),(0,f.lQ)(e)&&f.dU.emit("edits",{layer:e,event:y})),u(y),d}catch(e){throw d(e),e}}function m(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new i.Z(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&(0,l.pC)(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new i.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new i.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function g(e,t){const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name||r.name))throw new i.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&r.uploadId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=(0,u.sJ)(r.data);if(e&&!e.isBase64)throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function w(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map((e=>e.geometry)),n=await(0,p.aX)(r),s=t.length,i=a.length;return n.slice(0,s).forEach(((e,a)=>t[a].geometry=e)),n.slice(s,s+i).forEach(((e,t)=>a[t].geometry=e)),e}function b(e){const t=new n.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function F(e,t,a,n){if((0,l.Wi)(e.geometry)||"mesh"!==e.geometry.type)return;const s=e.geometry,o=a.globalIdField;if((0,l.pC)(a.parsedUrl)&&(0,l.pC)(s.external)&&Array.isArray(s.external.source)&&1===s.external.source.length&&"source"in s.external.source[0]&&"string"==typeof s.external.source[0].source&&s.external.source[0].source.startsWith(a.parsedUrl.path))return;if(!n)throw new i.Z(`${a.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");const u=await s.toBinaryGLTF({ignoreLocalTransform:!0}),p=await u.buffer(),f=`{${(0,d.D)()}}`,h=`${f}.glb`;t.addAssets?.push({featureGlobalId:e.getAttribute(o),assetMapGlobalId:f,assetName:h,flags:(0,l.pC)(s.transform)&&s.transform.geographic?c.i.PROJECT_VERTICES:0,data:p.data,mimeType:p.type,assetType:r.GLTF_BINARY,feature:e})}},11282:(e,t,a)=>{a.d(t,{cv:()=>o,en:()=>i,lA:()=>s}),a(68773),a(40330);var r=a(22974),n=a(17452);function s(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function i(e){return"string"==typeof e?(0,n.mN)(e):(0,r.d9)(e)}function o(e,t,a){const r={};for(const n in e){if("declaredClass"===n)continue;const s=e[n];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){r[n]=[];for(let e=0;e<s.length;e++)r[n][e]=o(s[e])}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(a&&a[n]);r[n]=t?e:JSON.stringify(e)}else r[n]=t?s:JSON.stringify(s);else r[n]=s}return r}a(71058)}}]);