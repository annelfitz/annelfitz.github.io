(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[67],{515:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return s}));var n=r(5),o=r(7),i=r(527),a=r(164);function s(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.a:"esriGeometryPolyline"===e?a.c:a.b}}}function u(e,t){if(Object(n.a)("csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${t.indexOf(".")?`["${t}"]`:"."+t} = ${JSON.stringify(e[t])};`;const n=new Function(r);return()=>new n}catch(r){return()=>({[t]:null,...e})}}function c(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(o.a)(e)}}]}function l(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},527:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},540:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return w})),r.d(t,"d",(function(){return j}));var n=r(9),o=r(150),i=r(98);const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function s(e){return a[e]}function*u(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function l(e){for(const t of e)if(t.length>2)return!0;return!1}function p(e){let t=0;for(let r=0;r<e.length;r++){const n=e[r],o=e[(r+1)%e.length];t+=n[0]*o[1]-o[0]*n[1]}return t<=0}function d(e){const t=e[0],r=e[e.length-1];return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]||e.push(t),e}function y(e,t,r){switch(t.type){case"LineString":return function(e,t,r){return m(e,t.coordinates,r),e}(e,t,r);case"MultiLineString":return function(e,t,r){for(const n of t.coordinates)m(e,n,r);return e}(e,t,r);case"MultiPoint":return function(e,t,r){return m(e,t.coordinates,r),e}(e,t,r);case"MultiPolygon":return function(e,t,r){for(const n of t.coordinates){f(e,n[0],r);for(let t=1;t<n.length;t++)b(e,n[t],r)}return e}(e,t,r);case"Point":return function(e,t,r){return h(e,t.coordinates,r),e}(e,t,r);case"Polygon":return function(e,t,r){const n=t.coordinates;f(e,n[0],r);for(let o=1;o<n.length;o++)b(e,n[o],r);return e}(e,t,r)}}function f(e,t,r){const n=d(t);!function(e){return!p(e)}(n)?m(e,n,r):g(e,n,r)}function b(e,t,r){const n=d(t);!function(e){return p(e)}(n)?m(e,n,r):g(e,n,r)}function m(e,t,r){for(const n of t)h(e,n,r);e.lengths.push(t.length)}function g(e,t,r){for(let n=t.length-1;n>=0;n--)h(e,t[n],r);e.lengths.push(t.length)}function h(e,t,r){const[n,o,i]=t;e.coords.push(n,o),r.hasZ&&e.coords.push(i||0)}function O(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function j(e){if(!e)throw new n.a("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new n.a("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const r="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,o=new RegExp(".*(CRS84H?|4326)$","i");if(!r||!o.test(r))throw new n.a("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function w(e,t={}){const r=[],n=new Set,o=new Set;let i,a=!1,p=Number.NEGATIVE_INFINITY,d=null,y=!1,{geometryType:f=null}=t,b=!1;for(const g of u(e)){const{geometry:e,properties:t,id:u}=g;if((!e||(f||(f=s(e.type)),s(e.type)===f))&&(a||(a=l(c(e))),y||(y=null!=u,y&&(i=typeof u,"number"===i&&(d=Object.keys(t).filter(e=>t[e]===u)))),y&&"number"===i&&null!=u&&(p=Math.max(p,u),d.length>1?d=d.filter(e=>t[e]===u):1===d.length&&(d=t[d[0]]===u?d:[])),!b&&t)){let e=!0;for(const i in t){if(n.has(i))continue;const a=t[i];if(null==a){e=!1,o.add(i);continue}const s=O(a);"unknown"!==s?(o.delete(i),n.add(i),r.push({name:i,alias:i,type:s})):o.add(i)}b=e}}const m=d&&1===d.length&&d[0]||null;if(m)for(const s of r)s.name===m&&(s.type="esriFieldTypeOID");return{fields:r,geometryType:f,hasZ:a,maxObjectId:Math.max(0,p),objectIdFieldName:m,objectIdFieldType:i,unknownFields:Array.from(o)}}function v(e,t){return Array.from(function*(e,t={}){const{geometryType:r,objectIdField:n}=t;for(const u of e){var a;const{geometry:e,properties:c,id:l}=u;if(e&&s(e.type)!==r)continue;const p=c||{};let d=null!=(a=p[n])?a:null;n&&null!=l&&!p[n]&&(p[n]=d=l);const f=new o.a(e?y(new i.a,e,t):null,p,null,d);yield f}}(u(e),t))}},547:function(e,t,r){"use strict";function n(){n=function(e,t){return new r(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function r(e,n,o){var a=new RegExp(e,n);return t.set(a,o||t.get(e)),i(a,r.prototype)}function a(e,r){var n=t.get(r);return Object.keys(n).reduce((function(t,r){return t[r]=e[n[r]],t}),Object.create(null))}return o(r,RegExp),r.prototype.exec=function(t){var r=e.exec.call(this,t);return r&&(r.groups=a(r,this)),r},r.prototype[Symbol.replace]=function(r,n){if("string"==typeof n){var o=t.get(this);return e[Symbol.replace].call(this,r,n.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+o[t]})))}if("function"==typeof n){var i=this;return e[Symbol.replace].call(this,r,(function(){var e=arguments;return"object"!=typeof e[e.length-1]&&(e=[].slice.call(e)).push(a(e,i)),n.apply(this,e)}))}return e[Symbol.replace].call(this,r,n)},n.apply(this,arguments)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,"a",(function(){return n}))},673:function(e,t,r){"use strict";r.d(t,"a",(function(){return F})),r.d(t,"b",(function(){return C})),r.d(t,"c",(function(){return T})),r.d(t,"d",(function(){return U})),r.d(t,"e",(function(){return N})),r.d(t,"f",(function(){return E}));var n=r(547),o=(r(56),r(45)),i=r(9);function a(e,t){for(const r of e)if(null!=r&&t(r))return r}var s=r(3),u=r(12),c=r(14),l=r(296),p=r(25),d=r(151),y=r(540);function f(e){var t;return null!=(t=function(e){var t,r,n,o;const i=b.exec(e);if(!i)return null;const a=i.groups,s=+a.year,u=+a.month-1,c=+a.day,l=+(null!=(t=a.hours)?t:"0"),p=+(null!=(r=a.minutes)?r:"0"),d=+(null!=(n=a.seconds)?n:"0");if(l>23)return null;if(p>59)return null;if(d>59)return null;const y=null!=(o=a.ms)?o:"0",f=y?+y.padEnd(3,"0").substring(0,3):0;let m;if(a.isUTC)m=Date.UTC(s,u,c,l,p,d,f);else if(a.offsetSign){const e=+a.offsetHours,t=+a.offsetMinutes;m=6e4*("+"===a.offsetSign?-1:1)*(60*e+t)+Date.UTC(s,u,c,l,p,d,f)}else m=new Date(s,u,c,l,p,d,f).getTime();return Number.isNaN(m)?null:m}(e))?t:function(e){const t=new Date(e).getTime();return Number.isNaN(t)?null:t}(e)}const b=Object(n.a)(/^(?:(\x2D?[0-9]{4,})\x2D([0-9]{2})\x2D([0-9]{2}))(?:T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:\.([0-9]+))?)?(?:(Z)|(?:(\+|\x2D)([0-9]{2}):([0-9]{2})))?$/,{year:1,month:2,day:3,hours:4,minutes:5,seconds:6,ms:7,isUTC:8,offsetSign:9,offsetHours:10,offsetMinutes:11});function m(e,t){for(const r of e.children)if(r.localName in t){const e=t[r.localName];if("function"==typeof e){const t=e(r);t&&m(r,t)}else m(r,e)}}function*g(e,t){for(const r of e.children)if(r.localName in t){const e=t[r.localName];"function"==typeof e?yield e(r):yield*g(r,e)}}var h=r(199),O=r(26),j=r(37);const w="xlink:href",v="2.0.0",F="__esri_wfs_id__",S="wfs-layer:feature-type-not-found",x="wfs-layer:unknown-geometry-type";async function T(e,t){const r=function(e){const t=M(e);(function(e){const t=e.firstElementChild.getAttribute("version");if(t&&t!==v)throw new i.a("wfs-layer:unsupported-wfs-version",`Unsupported WFS version ${t}. Supported version: 2.0.0`)})(t),_(t);const r=t.firstElementChild,n=new Map;return{operations:R(r),get featureTypes(){return Array.from(I(r,n))},readFeatureTypes:()=>I(r,n)}}((await Object(o.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:v,...null==t?void 0:t.customParameters},signal:null==t?void 0:t.signal})).data);return function(e,t){Object(c.v)(e)&&(Object(c.q)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=Object(c.J)(t.operations.DescribeFeatureType.url)),Object(c.q)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=Object(c.J)(t.operations.GetFeature.url)))}(e,r),r}const P=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function R(e){let t=!1;const r={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(m(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{r.GetCapabilities.url=e.getAttribute(w)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{r.DescribeFeatureType.url=e.getAttribute(w)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{r.GetFeature.url=e.getAttribute(w)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{const t=e.textContent;P.has(t.toLowerCase())&&(r.GetFeature.outputFormat=t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{r.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new i.a("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if(Object(s.h)(r.GetFeature.outputFormat))throw new i.a("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return r}function I(e,t){return g(e,{FeatureTypeList:{FeatureType:e=>{if(t.has(e))return t.get(e);const r={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},o=new Set([4326]),i=e=>{var t,r;const i=parseInt(null==(t=e.textContent.match(Object(n.a)(/([0-9]+$)/i,{wkid:1})))||null==(r=t.groups)?void 0:r.wkid,10);Number.isNaN(i)||o.add(i)};return m(e,{Name:e=>{const{name:t,prefix:n}=A(e.textContent);r.typeName=`${n}:${t}`,r.name=t,r.namespacePrefix=n,r.namespaceUri=e.lookupNamespaceURI(n)},Abstract:e=>{r.description=e.textContent},Title:e=>{r.title=e.textContent},WGS84BoundingBox:e=>{r.extent=function(e){let t,r,n,o;for(const i of e.children)switch(i.localName){case"LowerCorner":[t,r]=i.textContent.split(" ").map(e=>Number.parseFloat(e));break;case"UpperCorner":[n,o]=i.textContent.split(" ").map(e=>Number.parseFloat(e))}return{xmin:t,ymin:r,xmax:n,ymax:o,spatialReference:p.a}}(e)},DefaultSRS:i,DefaultCRS:i,OtherSRS:i,OtherCRS:i}),r.title||(r.title=r.name),r.supportedSpatialReferences.push(...o),t.set(e,r),r}}})}function C(e,t,r){return a(e,e=>r?e.name===t&&e.namespaceUri===r:e.typeName===t||e.name===t)}async function N(e,t,r,n={}){var o;const{featureType:a,extent:c}=await async function(e,t,r,n={}){const{spatialReference:o=O.a.WGS84}=n,a=e.readFeatureTypes(),u=t?C(a,t,r):a.next().value;if(Object(s.h)(u))throw t?new i.a(S,`The type '${t}' could not be found in the service`):new i.a("wfs-layer:empty-service","The service is empty");let c=new j.a({...u.extent,spatialReference:o});if(!Object(p.c)(o,p.a))try{await Object(l.d)(p.a,o,void 0,n),c=Object(l.h)(c,p.a)}catch{throw new i.a("wfs-layer:unsupported-spatial-reference","Projection not supported")}return{extent:c,spatialReference:o,featureType:u}}(e,t,r,n),{fields:d,geometryType:y,swapXY:f,objectIdField:b,geometryField:m}=await async function(e,t,r={}){const[n,o]=await Object(u.j)([D(e.operations.DescribeFeatureType.url,t,r),k(e,t,r)]);if(n.error||o.error)throw new i.a("wfs-layer:getWFSLayerTypeInfo-error",`An error occurred while getting info about the feature type '${t}'`,{error:n.error||o.error});const{fields:a,errors:c}=n.value,l=n.value.geometryType||o.value.geometryType,p=o.value.swapXY;if(Object(s.h)(l))throw new i.a(x,"The geometry type could not be determined for type '"+t,{typeName:t,geometryType:l,fields:a,errors:c});return{...E(a),geometryType:l,swapXY:p}}(e,a.typeName,n);return{url:e.operations.GetCapabilities.url,name:a.name,namespaceUri:a.namespaceUri,fields:d,geometryField:m,geometryType:y,objectIdField:b,spatialReference:null!=(o=n.spatialReference)?o:O.a.WGS84,extent:c,swapXY:f,wfsCapabilities:e,customParameters:n.customParameters}}function E(e){var t;const r=e.find(e=>"geometry"===e.type);let n=e.find(e=>"oid"===e.type);return e=e.filter(e=>"geometry"!==e.type),n||(n=new h.a({name:F,type:"oid",alias:F}),e.unshift(n)),{geometryField:null!=(t=null==r?void 0:r.name)?t:null,objectIdField:n.name,fields:e}}async function k(e,t,r={}){var n;let i,a=!1;const[s,u]=await Promise.all([U(e.operations.GetFeature.url,t,e.operations.GetFeature.outputFormat,{...r,count:1}),Object(o.default)(e.operations.GetFeature.url,{responseType:"text",query:q(t,void 0,{...r,count:1}),signal:null==r?void 0:r.signal})]),c="FeatureCollection"===s.type&&(null==(n=s.features[0])?void 0:n.geometry);if(c){let e;switch(i=d.a.fromJSON(Object(y.b)(c.type)),c.type){case"Point":e=c.coordinates;break;case"LineString":case"MultiPoint":e=c.coordinates[0];break;case"MultiLineString":case"Polygon":e=c.coordinates[0][0];break;case"MultiPolygon":e=c.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);if(t){const r=e[0].toFixed(3),n=e[1].toFixed(3),o=parseFloat(t[1]).toFixed(3);r===parseFloat(t[2]).toFixed(3)&&n===o&&(a=!0)}}return{geometryType:i,swapXY:a}}async function D(e,t,r){return function(e,t){const{name:r}=A(e),n=M(t);_(n);const o=a(g(n.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:A(e.getAttribute("type")).name})}),({name:e})=>e===r);if(Object(s.i)(o)){const e=a(g(n.firstElementChild,{complexType:e=>e}),e=>e.getAttribute("name")===o.typeName);if(Object(s.i)(e))return function(e){var t,r;const n=[],o=[];let a;const s=g(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const u of s){const s=u.getAttribute("name");if(!s)continue;let c,l;if(u.hasAttribute("type")?c=A(u.getAttribute("type")).name:m(u,{simpleType:{restriction:e=>(c=A(e.getAttribute("base")).name,{maxLength:e=>{l=+e.getAttribute("value")}})}}),!c)continue;const p="true"===u.getAttribute("nillable");let d=!1;switch(c.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":o.push(new h.a({name:s,alias:s,type:"integer",nullable:p}));break;case"float":case"double":case"decimal":o.push(new h.a({name:s,alias:s,type:"double",nullable:p}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":o.push(new h.a({name:s,alias:s,type:"string",nullable:p,length:null!=(t=l)?t:255}));break;case"datetime":case"date":o.push(new h.a({name:s,alias:s,type:"date",nullable:p,length:null!=(r=l)?r:36}));break;case"pointpropertytype":a="point",d=!0;break;case"multipointpropertytype":a="multipoint",d=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",d=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",d=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":d=!0,n.push(new i.a(x,`geometry type '${c}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:n.push(new i.a("wfs-layer:unknown-field-type",`Unknown field type '${c}'`,{type:(new XMLSerializer).serializeToString(e)}))}d&&o.push(new h.a({name:s,alias:s,type:"geometry",nullable:p}))}for(const i of o)if("integer"===i.type&&!i.nullable&&G.has(i.name.toLowerCase())){i.type="oid";break}return{geometryType:a,fields:o,errors:n}}(e)}throw new i.a(S,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(n)})}(t,(await Object(o.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:v,TYPENAME:t,...null==r?void 0:r.customParameters},signal:null==r?void 0:r.signal})).data)}const G=new Set(["objectid","fid"]);async function U(e,t,r,n){let{data:a}=await Object(o.default)(e,{responseType:"text",query:q(t,r,n),signal:null==n?void 0:n.signal});a=a.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{var s;if(null!=n&&null!=(s=n.dateFields)&&s.length){const e=new Set(n.dateFields);return JSON.parse(a,(t,r)=>e.has(t)?f(r):r)}return JSON.parse(a)}catch(u){throw new i.a("wfs-layer:malformed-json","Error while parsing the\xa0response",{response:a,error:u})}}function q(e,t,r){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:v,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null==r?void 0:r.startIndex,COUNT:null==r?void 0:r.count,...null==r?void 0:r.customParameters}}function M(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function A(e){const[t,r]=e.split(":");return{prefix:r?t:"",name:null!=r?r:t}}function _(e){let t,r;if(m(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{r=e.textContent}})}),t)throw new i.a("wfs-layer:"+t,r)}},685:function(e,t,r){"use strict";r.r(t);var n=r(0),o=(r(56),r(163)),i=(r(248),r(299),r(301),r(302),r(89),r(229),r(225),r(251),r(230)),a=r(320),s=r(44),u=r(14),c=r(1),l=r(5),p=(r(6),r(4),r(15)),d=r(2),y=r(13),f=r(151),b=r(198),m=r(9),g=r(99),h=r(83),O=r(3),j=r(12),w=r(16),v=r(250),F=r(515),S=r(673),x=r(100),T=r(37);let P=class extends(Object(g.b)(h.a)){constructor(){super(...arguments),this.capabilities=Object(F.a)(!1,!1),this.type="wfs",this._updateCustomParameters=Object(j.i)(()=>{var e;const t=this.layer.customParameters;return null==(e=this._connection)?void 0:e.invoke("setCustomParameters",t)})}load(e){var t;const r=null!=(t=Object(O.i)(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return x.default.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:r.count,extent:T.a.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async refresh(e={}){await this.load(e);const{extent:t}=await this._connection.invoke("refresh",void 0,e);return this.sourceJSON.extent=t,{extent:t}}async _createLoadOptions(e){const{url:t,customParameters:r,name:n,namespaceUri:o,spatialReference:i,fields:a,geometryType:s,swapXY:u}=this.layer;if(!t)throw new m.a("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities=this.wfsCapabilities||await Object(S.c)(t,{customParameters:r,...e});const c=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some(e=>null==this.layer[e])?await Object(S.e)(this.wfsCapabilities,n,o,{spatialReference:i,customParameters:r,signal:null==e?void 0:e.signal}):{...Object(S.f)(a),geometryType:s,name:n,namespaceUri:o,spatialReference:i,swapXY:u},l=Object(O.p)(Object(S.b)(this.wfsCapabilities.readFeatureTypes(),c.name,c.namespaceUri)),p=f.a.toJSON(c.geometryType);return{customParameters:r,featureType:l,fields:c.fields.map(e=>e.toJSON()),geometryField:c.geometryField,geometryType:p,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:c.objectIdField,spatialReference:c.spatialReference.toJSON(),swapXY:c.swapXY}}async _startWorker(e){const[t,r]=await Object(j.j)([this._createLoadOptions(e),Object(v.b)("WFSSourceWorker",{...e,strategy:Object(l.a)("feature-layers-workers")?"dedicated":"local"})]),n=t.error||r.error||null,o=r.value||null;if(n)throw o&&o.close(),n;const i=t.value;this._connection=r.value;const{extent:a}=await this._connection.invoke("load",i,e);this.sourceJSON={extent:a,fields:i.fields,geometryType:i.geometryType,objectIdField:i.objectIdField,geometryField:i.geometryField,drawingInfo:Object(F.d)(i.geometryType),name:i.featureType.title,wfsInfo:{name:i.featureType.name,featureUrl:i.getFeatureUrl,maxFeatures:3e3,swapXY:i.swapXY,supportedSpatialReferences:i.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:i.featureType.namespaceUri}},this.handles.add(Object(w.a)(this.layer,"customParameters",()=>this._updateCustomParameters().catch(()=>{})))}};Object(n.a)([Object(c.b)()],P.prototype,"capabilities",void 0),Object(n.a)([Object(c.b)({constructOnly:!0})],P.prototype,"layer",void 0),Object(n.a)([Object(c.b)()],P.prototype,"sourceJSON",void 0),Object(n.a)([Object(c.b)()],P.prototype,"type",void 0),Object(n.a)([Object(c.b)()],P.prototype,"wfsCapabilities",void 0),P=Object(n.a)([Object(d.a)("esri.layers.graphics.sources.WFSSource")],P);var R,I=P,C=r(326),N=r(339),E=r(323),k=r(322),D=r(332),G=r(324),U=r(340),q=r(88),M=r(209),A=r(258),_=r(231),L=r(266),J=r(199),W=r(341),X=r(43),V=r(205),Y=r(303),$=r(65),Q=r(336),z=r(345),B=r(26);const H=Object(W.a)();let Z=R=class extends(Object(N.a)(Object(C.a)(Object(U.a)(Object(D.a)(Object(G.a)(Object(E.a)(Object(k.a)(Object(a.a)(b.a))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new I({layer:this}),this.spatialReference=B.a.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}static fromWFSLayerInfo(e){const{customParameters:t,fields:r,geometryField:n,geometryType:o,name:i,namespaceUri:a,objectIdField:s,spatialReference:u,swapXY:c,url:l,wfsCapabilities:p}=e;return new R({customParameters:t,fields:r,geometryField:n,geometryType:o,name:i,namespaceUri:a,objectIdField:s,spatialReference:u,swapXY:c,url:l,wfsCapabilities:p})}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),Object(X.j)(this.renderer,this.fieldsIndex),Object(X.k)(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,t){return Object(L.a)(e,t)}writeWebSceneFeatureReduction(e,t,r,n){Object(L.c)(e,t,"layerDefinition.featureReduction",n)}writeFields(e,t,r){const n=e.filter(e=>e.name!==S.a);this.geometryField&&n.unshift(new J.a({name:this.geometryField,alias:this.geometryField,type:"geometry"})),Object(s.c)(r,n.map(e=>e.toJSON()),t)}get parsedUrl(){return this.url?Object(u.K)(this.url):null}set renderer(e){Object(X.j)(e,this.fieldsIndex),this._set("renderer",e)}createPopupTemplate(e){return Object(Q.a)(this,e)}createQuery(){const e=new $.a;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:r}=this;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}getFieldDomain(e,t){var r;return null==(r=this.getField(e))?void 0:r.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures($.a.from(e)||this.createQuery(),t)).then(e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds($.a.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount($.a.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent($.a.from(e)||this.createQuery(),t))}refresh(){this.source.refresh().then(e=>{this.read(e,{origin:"service"}),super.refresh()})}};Object(n.a)([Object(c.b)({readOnly:!0,aliasOf:"source.capabilities"})],Z.prototype,"capabilities",void 0),Object(n.a)([Object(c.b)({type:String})],Z.prototype,"copyright",void 0),Object(n.a)([Object(c.b)({readOnly:!0})],Z.prototype,"createQueryVersion",null),Object(n.a)([Object(c.b)({json:{read:{source:"wfsInfo.customParameters"},write:{target:"wfsInfo.customParameters",ignoreOrigin:!0}}})],Z.prototype,"customParameters",void 0),Object(n.a)([Object(c.b)({readOnly:!0})],Z.prototype,"defaultPopupTemplate",null),Object(n.a)([Object(c.b)({type:String})],Z.prototype,"definitionExpression",void 0),Object(n.a)([Object(c.b)({type:String})],Z.prototype,"displayField",void 0),Object(n.a)([Object(c.b)({type:z.a})],Z.prototype,"elevationInfo",void 0),Object(n.a)([Object(c.b)({types:{key:"type",base:M.a,typeMap:{selection:_.a,cluster:A.a}},json:{write:{target:"layerDefinition.featureReduction"}}})],Z.prototype,"featureReduction",void 0),Object(n.a)([Object(p.a)("featureReduction",["layerDefinition.featureReduction"])],Z.prototype,"readFeatureReduction",null),Object(n.a)([Object(y.a)("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:L.b}})],Z.prototype,"writeWebSceneFeatureReduction",null),Object(n.a)([Object(c.b)({readOnly:!0,json:{read:{source:"wfsInfo.featureUrl"},write:{target:"wfsInfo.featureUrl",ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"featureUrl",void 0),Object(n.a)([Object(c.b)({type:[J.a],json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields",ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"fields"}}}}})],Z.prototype,"fields",void 0),Object(n.a)([Object(y.a)("fields")],Z.prototype,"writeFields",null),Object(n.a)([Object(c.b)(H.fieldsIndex)],Z.prototype,"fieldsIndex",void 0),Object(n.a)([Object(c.b)({type:T.a,json:{origins:{service:{read:{source:"extent"}}}}})],Z.prototype,"fullExtent",void 0),Object(n.a)([Object(c.b)()],Z.prototype,"geometryField",void 0),Object(n.a)([Object(c.b)({type:f.a.apiValues,json:{read:{source:"layerDefinition.geometryType",reader:f.a.read},write:{target:"layerDefinition.geometryType",writer:f.a.write,ignoreOrigin:!0},origins:{service:{read:f.a.read}}}})],Z.prototype,"geometryType",void 0),Object(n.a)([Object(c.b)({type:String})],Z.prototype,"id",void 0),Object(n.a)([Object(c.b)(q.d)],Z.prototype,"labelsVisible",void 0),Object(n.a)([Object(c.b)({type:[V.a],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:Y.a},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],Z.prototype,"labelingInfo",void 0),Object(n.a)([Object(c.b)(q.e)],Z.prototype,"legendEnabled",void 0),Object(n.a)([Object(c.b)({type:["show","hide"]})],Z.prototype,"listMode",void 0),Object(n.a)([Object(c.b)({type:String})],Z.prototype,"objectIdField",void 0),Object(n.a)([Object(c.b)({type:["WFS"]})],Z.prototype,"operationalLayerType",void 0),Object(n.a)([Object(c.b)({json:{read:{source:"wfsInfo.maxFeatures"},write:{target:"wfsInfo.maxFeatures",ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"maxFeatures",void 0),Object(n.a)([Object(c.b)({readOnly:!0,json:{read:{source:"mode"},write:{target:"mode",ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"mode",void 0),Object(n.a)([Object(c.b)({json:{read:{source:"wfsInfo.name"},write:{target:"wfsInfo.name",ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"name",void 0),Object(n.a)([Object(c.b)({json:{read:{source:"wfsInfo.wfsNamespace"},write:{target:"wfsInfo.wfsNamespace",ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"namespaceUri",void 0),Object(n.a)([Object(c.b)(H.outFields)],Z.prototype,"outFields",void 0),Object(n.a)([Object(c.b)({readOnly:!0})],Z.prototype,"parsedUrl",null),Object(n.a)([Object(c.b)(q.j)],Z.prototype,"popupEnabled",void 0),Object(n.a)([Object(c.b)({type:o.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],Z.prototype,"popupTemplate",void 0),Object(n.a)([Object(c.b)({types:i.a,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},read:{source:"layerDefinition.drawingInfo.renderer"},write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],Z.prototype,"renderer",null),Object(n.a)([Object(c.b)({type:Boolean})],Z.prototype,"screenSizePerspectiveEnabled",void 0),Object(n.a)([Object(c.b)({readOnly:!0})],Z.prototype,"source",void 0),Object(n.a)([Object(c.b)({type:B.a,json:{read:{source:"layerDefinition.spatialReference"},write:{target:"layerDefinition.spatialReference",ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"extent.spatialReference"}}}}})],Z.prototype,"spatialReference",void 0),Object(n.a)([Object(c.b)({readOnly:!0,json:{read:{source:"wfsInfo.supportedSpatialReferences"},write:{target:"wfsInfo.supportedSpatialReferences",ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"spatialReferences",void 0),Object(n.a)([Object(c.b)({json:{read:{source:"wfsInfo.swapXY"},write:{target:"wfsInfo.swapXY",ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"swapXY",void 0),Object(n.a)([Object(c.b)({json:{read:{source:"title"},write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"name"}}}}})],Z.prototype,"title",void 0),Object(n.a)([Object(c.b)({json:{read:!1},readOnly:!0})],Z.prototype,"type",void 0),Object(n.a)([Object(c.b)({type:String,json:{write:!0}})],Z.prototype,"url",void 0),Object(n.a)([Object(c.b)({readOnly:!0,json:{read:{source:"wfsInfo.version"},write:{target:"wfsInfo.version",ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"version",void 0),Object(n.a)([Object(c.b)({aliasOf:"source.wfsCapabilities"})],Z.prototype,"wfsCapabilities",void 0),Z=R=Object(n.a)([Object(d.a)("esri.layers.WFSLayer")],Z);var K=Z;t.default=K}}]);
//# sourceMappingURL=67.31a14a01.chunk.js.map