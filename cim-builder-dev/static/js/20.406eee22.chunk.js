(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[20],{866:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(1),s=(r(5),r(6)),o=(r(4),r(2)),a=r(45),c=r(62);r(56);var O=r(17);function l(e){return{geometryType:Object(O.c)(e[0]),geometries:e.map(e=>e.toJSON())}}function u(e,t,r){const n=Object(O.b)(t);return e.map(e=>{const t=n.fromJSON(e);return t.spatialReference=r,t})}var N=r(82);var f=r(22);const p=new f.a({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});var j=r(10);let y=class extends j.a{constructor(e){super(e),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],y.prototype,"deviationUnit",void 0),Object(n.a)([Object(i.b)({json:{read:{reader:e=>e?e.map(e=>Object(O.a)(e)):null},write:{writer:(e,t)=>{t.geometries=e.map(e=>e.toJSON())}}}})],y.prototype,"geometries",void 0),Object(n.a)([Object(i.b)({type:Number,json:{write:!0}})],y.prototype,"maxDeviation",void 0),y=Object(n.a)([Object(o.a)("esri.rest.support.GeneralizeParameters")],y),y.from=Object(s.m)(y);var b=y;const m=new f.a({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});async function d(e,t,r){const n=(t=b.from(t)).toJSON(),i=function(e){const{geometries:t,deviationUnit:r,maxDeviation:n}=e.toJSON(),i={maxDeviation:n};return t&&t.length&&(i.geometries=JSON.stringify({geometryType:Object(O.c)(t[0]),geometries:t}),i.sr=JSON.stringify(t[0].spatialReference)),m.write(r,i,"deviationUnit"),i}(t),s=Object(c.c)(e),o={...s.query,f:"json",...i},l=n.geometries[0].spatialReference,u=Object(c.a)(o,r);return Object(a.default)(s.path+"/generalize",u).then(({data:e})=>(e.geometries||[]).map(e=>Object(O.a)(e).set({spatialReference:l})))}var T=r(78);let I=class extends j.a{constructor(e){super(e),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],I.prototype,"calculationType",void 0),Object(n.a)([Object(i.b)({type:Boolean,json:{write:!0}})],I.prototype,"geodesic",void 0),Object(n.a)([Object(i.b)({json:{write:!0}})],I.prototype,"lengthUnit",void 0),Object(n.a)([Object(i.b)({type:[T.a],json:{read:{reader:e=>e?e.map(e=>Object(O.a)(e)):null},write:{writer:(e,t)=>{t.polylines=e.map(e=>e.toJSON())}}}})],I.prototype,"polylines",void 0),I=Object(n.a)([Object(o.a)("esri.rest.support.LengthsParameters")],I),I.from=Object(s.m)(I);var g=I;const S=new f.a({preserveShape:"preserve-shape"});async function _(e,t,r){const n=function(e){const{polylines:t,lengthUnit:r,geodesic:n,calculationType:i}=e.toJSON(),s={};s.polylines=JSON.stringify(t);const o=e.polylines[0].spatialReference;return s.sr=o.wkid?o.wkid:JSON.stringify(o.toJSON()),r&&(s.lengthUnit=r),n&&(s.geodesic=n),i&&(s.calculationType=S.toJSON(i)),s}(t=g.from(t)),i=Object(c.c)(e),s={...i.query,f:"json",...n},o=Object(c.a)(s,r);return Object(a.default)(i.path+"/lengths",o).then(({data:e})=>e)}let R=class extends j.a{constructor(e){super(e),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};Object(n.a)([Object(i.b)({type:Number,json:{write:!0}})],R.prototype,"bevelRatio",void 0),Object(n.a)([Object(i.b)({json:{read:{reader:e=>e?e.map(e=>Object(O.a)(e)):null},write:{writer:(e,t)=>{t.geometries=e.map(e=>e.toJSON())}}}})],R.prototype,"geometries",void 0),Object(n.a)([Object(i.b)({type:Number,json:{write:!0}})],R.prototype,"offsetDistance",void 0),Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],R.prototype,"offsetHow",void 0),Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],R.prototype,"offsetUnit",void 0),R=Object(n.a)([Object(o.a)("esri.rest.support.OffsetParameters")],R),R.from=Object(s.m)(R);var h=R;const U=new f.a({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),E=new f.a({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});async function A(e,t,r){const n=function(e){const{geometries:t,bevelRatio:r,offsetDistance:n,offsetHow:i,offsetUnit:s}=e.toJSON(),o={bevelRatio:r,offsetDistance:n};return t&&t.length&&(o.geometries=JSON.stringify({geometryType:Object(O.c)(t[0]),geometries:t}),o.sr=JSON.stringify(t[0].spatialReference)),i&&(o.offsetHow=U.toJSON(i)),s&&(o.offsetUnit=E.toJSON(s)),o}(t=h.from(t)),i=Object(c.c)(e),s={...i.query,f:"json",...n},o=t.geometries[0].spatialReference,l=Object(c.a)(s,r);return Object(a.default)(i.path+"/offset",l).then(({data:e})=>(e.geometries||[]).map(e=>Object(O.a)(e).set({spatialReference:o})))}var J=r(772);const v=Object(s.m)(J.a);let w=class extends j.a{constructor(e){super(e),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};Object(n.a)([Object(i.b)({json:{read:{reader:e=>e?e.map(e=>Object(O.a)(e)):null},write:{writer:(e,t)=>{t.geometries1=e.map(e=>e.toJSON())}}}})],w.prototype,"geometries1",void 0),Object(n.a)([Object(i.b)({json:{read:{reader:e=>e?e.map(e=>Object(O.a)(e)):null},write:{writer:(e,t)=>{t.geometries2=e.map(e=>e.toJSON())}}}})],w.prototype,"geometries2",void 0),Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],w.prototype,"relation",void 0),Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],w.prototype,"relationParameter",void 0),w=Object(n.a)([Object(o.a)("esri.rest.support.RelationParameters")],w),w.from=Object(s.m)(w);var D=w;const L=new f.a({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});async function C(e,t,r){const n=function(e){const{geometries1:t,geometries2:r,relation:n,relationParameter:i}=e.toJSON(),s={};if(t&&t.length){s.geometries1=JSON.stringify({geometryType:Object(O.c)(t[0]),geometries:t});const e=t[0].spatialReference;s.sr=e.wkid?e.wkid:JSON.stringify(e)}return r&&r.length>0&&(s.geometries2=JSON.stringify({geometryType:Object(O.c)(r[0]),geometries:r})),n&&(s.relation=L.toJSON(n)),i&&(s.relationParam=i),s}(t=D.from(t)),i=Object(c.c)(e),s={...i.query,f:"json",...n},o=Object(c.a)(s,r);return Object(a.default)(i.path+"/relation",o).then(({data:e})=>e.relations)}var M=r(14);let q=class extends j.a{constructor(e){super(e),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],q.prototype,"extendHow",void 0),Object(n.a)([Object(i.b)({type:[T.a],json:{read:{reader:e=>e?e.map(e=>Object(O.a)(e)):null},write:{writer:(e,t)=>{t.polylines=e.map(e=>e.toJSON())}}}})],q.prototype,"polylines",void 0),Object(n.a)([Object(i.b)({json:{read:{reader:e=>e?Object(O.a)(e):null},write:{writer:(e,t)=>{t.trimExtendTo=e.toJSON()}}}})],q.prototype,"trimExtendTo",void 0),q=Object(n.a)([Object(o.a)("esri.rest.support.TrimExtendParameters")],q),q.from=Object(s.m)(q);var G=q;const x=new f.a({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});async function H(e,t,r){const n=function(e){const{extendHow:t,polylines:r,trimExtendTo:n}=e.toJSON(),i={};return i.extendHow=x.toJSON(t),r&&r.length&&(i.polylines=JSON.stringify(r),i.sr=JSON.stringify(r[0].spatialReference)),n&&(i.trimExtendTo=JSON.stringify(n)),i}(t=G.from(t)),i=Object(c.c)(e),s={...i.query,f:"json",...n},o=t.sr,O=Object(c.a)(s,r);return Object(a.default)(i.path+"/trimExtend",O).then(({data:e})=>(e.geometries||[]).map(({paths:e})=>new T.a({spatialReference:o,paths:e})))}var Y=r(344);let K=class extends Y.a{constructor(e){super(e),this.url=null}areasAndLengths(e,t){return async function(e,t,r){const n=Object(c.c)(e),i={...n.query,f:"json",...t.toJSON()},s=Object(c.a)(i,r);return Object(a.default)(n.path+"/areasAndLengths",s).then(e=>e.data)}(this.url,e,t)}autoComplete(e,t,r){return async function(e,t,r,n){const i=t[0].spatialReference,s=Object(c.c)(e),o={...s.query,f:"json",sr:JSON.stringify(i.toJSON()),polygons:JSON.stringify(l(t).geometries),polylines:JSON.stringify(l(r).geometries)},O=Object(c.a)(o,n);return Object(a.default)(s.path+"/autoComplete",O).then(({data:e})=>(e.geometries||[]).map(({rings:e})=>new N.a({spatialReference:i,rings:e})))}(this.url,e,t,r)}buffer(e,t){return async function(e,t,r){const n=Object(c.c)(e),i={...n.query,f:"json",...t.toJSON()},s=t.outSpatialReference||t.geometries[0].spatialReference,o=Object(c.a)(i,r);return Object(a.default)(n.path+"/buffer",o).then(e=>(e.data.geometries||[]).map(({rings:e})=>new N.a({spatialReference:s,rings:e})))}(this.url,e,t)}convexHull(e,t){return async function(e,t,r){const n=t[0].spatialReference,i=Object(c.c)(e),s={...i.query,f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify(l(t))},o=Object(c.a)(s,r);return Object(a.default)(i.path+"/convexHull",o).then(({data:e})=>Object(O.a)(e.geometry).set({spatialReference:n}))}(this.url,e,t)}cut(e,t,r){return async function(e,t,r,n){const i=Object(c.c)(e),s=t[0].spatialReference,o={...n,query:{...i.query,f:"json",sr:JSON.stringify(s),target:JSON.stringify({geometryType:Object(O.c)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},l=await Object(a.default)(i.path+"/cut",o),{cutIndexes:u,geometries:N=[]}=l.data;return{cutIndexes:u,geometries:N.map(e=>{const t=Object(O.a)(e);return t.spatialReference=s,t})}}(this.url,e,t,r)}densify(e,t){return async function(e,t,r){const n=t.geometries[0].spatialReference,i=Object(c.c)(e),s={...i.query,f:"json",...t.toJSON()},o=Object(c.a)(s,r);return Object(a.default)(i.path+"/densify",o).then(({data:e})=>(e.geometries||[]).map(e=>Object(O.a)(e).set({spatialReference:n})))}(this.url,e,t)}difference(e,t,r){return async function(e,t,r,n){const i=t[0].spatialReference,s=Object(c.c)(e);let o={query:{...s.query,f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(l(t)),geometry:JSON.stringify({geometryType:Object(O.c)(r),geometry:r.toJSON()})}};return n&&(o={...n,...o}),Object(a.default)(s.path+"/difference",o).then(({data:e})=>(e.geometries||[]).map(e=>Object(O.a)(e).set({spatialReference:i})))}(this.url,e,t,r)}distance(e,t){return async function(e,t,r){const n=Object(c.c)(e),i={...n.query,f:"json",...t.toJSON()},s=Object(c.a)(i,r);return Object(a.default)(n.path+"/distance",s).then(({data:e})=>e&&e.distance)}(this.url,e,t)}fromGeoCoordinateString(e,t){return async function(e,t,r){const n={};null!=t.sr&&"object"==typeof t.sr?n.sr=t.sr.wkid||JSON.stringify(t.sr):n.sr=t.sr,n.strings=JSON.stringify(t.strings);const i=t.conversionType||"mgrs";n.conversionType=p.toJSON(i),n.conversionMode=t.conversionMode;const s=Object(c.c)(e),o={...s.query,f:"json",...n},O=Object(c.a)(o,r);return Object(a.default)(s.path+"/fromGeoCoordinateString",O).then(({data:e})=>e.coordinates)}(this.url,e,t)}generalize(e,t){return d(this.url,e,t)}intersect(e,t,r){return async function(e,t,r,n){const i=t[0].spatialReference,s=Object(c.c)(e),o={...s.query,f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(l(t)),geometry:JSON.stringify({geometryType:Object(O.c)(r),geometry:r.toJSON()})},u=Object(c.a)(o,n);return Object(a.default)(s.path+"/intersect",u).then(({data:e})=>(e.geometries||[]).map(e=>Object(O.a)(e).set({spatialReference:i})))}(this.url,e,t,r)}labelPoints(e,t){return function(e,t,r){const n=t.map(e=>e.toJSON()),i=t[0].spatialReference,s=Object(c.c)(e),o={...s.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i.toJSON()),polygons:JSON.stringify(n)},l=Object(c.a)(o,r);return Object(a.default)(s.path+"/labelPoints",l).then(({data:e})=>(e.labelPoints||[]).map(e=>Object(O.a)(e).set({spatialReference:i})))}(this.url,e,t)}lengths(e,t){return _(this.url,e,t)}offset(e,t){return A(this.url,e,t)}project(e,t){return async function(e,t,r){t=v(t);const n=Object(c.c)(e),i={...n.query,f:"json",...t.toJSON()},s=t.outSpatialReference,o=Object(O.c)(t.geometries[0]),l=Object(c.a)(i,r);return Object(a.default)(n.path+"/project",l).then(({data:{geometries:e}})=>u(e,o,s))}(this.url,e,t)}relation(e,t){return C(this.url,e,t)}reshape(e,t,r){return async function(e,t,r,n){const i=t.spatialReference,s=Object(c.c)(e),o={...s.query,f:"json",sr:JSON.stringify(i.toJSON()),target:JSON.stringify({geometryType:Object(O.c)(t),geometry:t.toJSON()}),reshaper:JSON.stringify(r.toJSON())},l=Object(c.a)(o,n);return Object(a.default)(s.path+"/reshape",l).then(({data:e})=>Object(O.a)(e.geometry).set({spatialReference:i}))}(this.url,e,t,r)}simplify(e,t){return async function(e,t,r){const n="string"==typeof e?Object(M.K)(e):e,i=t[0].spatialReference,s=Object(O.c)(t[0]),o={...r,query:{...n.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i),geometries:JSON.stringify(l(t))}},{data:c}=await Object(a.default)(n.path+"/simplify",o);return u(c.geometries,s,i)}(this.url,e,t)}toGeoCoordinateString(e,t){return async function(e,t,r){const n={};null!=t.sr&&"object"==typeof t.sr?n.sr=t.sr.wkid||JSON.stringify(t.sr):n.sr=t.sr,n.coordinates=JSON.stringify(t.coordinates);const i=t.conversionType||"mgrs";n.conversionType=p.toJSON(i),n.conversionMode=t.conversionMode,n.numOfDigits=t.numOfDigits,n.rounding=t.rounding,n.addSpaces=t.addSpaces;const s=Object(c.c)(e),o={...s.query,f:"json",...n},O=Object(c.a)(o,r);return Object(a.default)(s.path+"/toGeoCoordinateString",O).then(({data:e})=>e.strings)}(this.url,e,t)}trimExtend(e,t){return H(this.url,e,t)}union(e,t){return async function(e,t,r){const n=t[0].spatialReference,i=Object(c.c)(e),s={...i.query,f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify(l(t))},o=Object(c.a)(s,r);return Object(a.default)(i.path+"/union",o).then(({data:e})=>Object(O.a)(e.geometry).set({spatialReference:n}))}(this.url,e,t)}};K.UNIT_METER=9001,K.UNIT_GERMAN_METER=9031,K.UNIT_FOOT=9002,K.UNIT_SURVEY_FOOT=9003,K.UNIT_CLARKE_FOOT=9005,K.UNIT_FATHOM=9014,K.UNIT_NAUTICAL_MILE=9030,K.UNIT_SURVEY_CHAIN=9033,K.UNIT_SURVEY_LINK=9034,K.UNIT_SURVEY_MILE=9035,K.UNIT_KILOMETER=9036,K.UNIT_CLARKE_YARD=9037,K.UNIT_CLARKE_CHAIN=9038,K.UNIT_CLARKE_LINK=9039,K.UNIT_SEARS_YARD=9040,K.UNIT_SEARS_FOOT=9041,K.UNIT_SEARS_CHAIN=9042,K.UNIT_SEARS_LINK=9043,K.UNIT_BENOIT_1895A_YARD=9050,K.UNIT_BENOIT_1895A_FOOT=9051,K.UNIT_BENOIT_1895A_CHAIN=9052,K.UNIT_BENOIT_1895A_LINK=9053,K.UNIT_BENOIT_1895B_YARD=9060,K.UNIT_BENOIT_1895B_FOOT=9061,K.UNIT_BENOIT_1895B_CHAIN=9062,K.UNIT_BENOIT_1895B_LINK=9063,K.UNIT_INDIAN_FOOT=9080,K.UNIT_INDIAN_1937_FOOT=9081,K.UNIT_INDIAN_1962_FOOT=9082,K.UNIT_INDIAN_1975_FOOT=9083,K.UNIT_INDIAN_YARD=9084,K.UNIT_INDIAN_1937_YARD=9085,K.UNIT_INDIAN_1962_YARD=9086,K.UNIT_INDIAN_1975_YARD=9087,K.UNIT_FOOT_1865=9070,K.UNIT_RADIAN=9101,K.UNIT_DEGREE=9102,K.UNIT_ARCMINUTE=9103,K.UNIT_ARCSECOND=9104,K.UNIT_GRAD=9105,K.UNIT_GON=9106,K.UNIT_MICRORADIAN=9109,K.UNIT_ARCMINUTE_CENTESIMAL=9112,K.UNIT_ARCSECOND_CENTESIMAL=9113,K.UNIT_MIL6400=9114,K.UNIT_BRITISH_1936_FOOT=9095,K.UNIT_GOLDCOAST_FOOT=9094,K.UNIT_INTERNATIONAL_CHAIN=109003,K.UNIT_INTERNATIONAL_LINK=109004,K.UNIT_INTERNATIONAL_YARD=109001,K.UNIT_STATUTE_MILE=9093,K.UNIT_SURVEY_YARD=109002,K.UNIT_50KILOMETER_LENGTH=109030,K.UNIT_150KILOMETER_LENGTH=109031,K.UNIT_DECIMETER=109005,K.UNIT_CENTIMETER=109006,K.UNIT_MILLIMETER=109007,K.UNIT_INTERNATIONAL_INCH=109008,K.UNIT_US_SURVEY_INCH=109009,K.UNIT_INTERNATIONAL_ROD=109010,K.UNIT_US_SURVEY_ROD=109011,K.UNIT_US_NAUTICAL_MILE=109012,K.UNIT_UK_NAUTICAL_MILE=109013,K.UNIT_SQUARE_INCHES="esriSquareInches",K.UNIT_SQUARE_FEET="esriSquareFeet",K.UNIT_SQUARE_YARDS="esriSquareYards",K.UNIT_ACRES="esriAcres",K.UNIT_SQUARE_MILES="esriSquareMiles",K.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",K.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",K.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",K.UNIT_SQUARE_METERS="esriSquareMeters",K.UNIT_ARES="esriAres",K.UNIT_HECTARES="esriHectares",K.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",Object(n.a)([Object(i.b)()],K.prototype,"url",void 0),K=Object(n.a)([Object(o.a)("esri.tasks.GeometryService")],K);var k=K;t.default=k}}]);
//# sourceMappingURL=20.406eee22.chunk.js.map