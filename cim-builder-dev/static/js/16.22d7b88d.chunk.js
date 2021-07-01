(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[16],{745:function(e,t,r){"use strict";r.r(t);var n=r(0),s=(r(6),r(5),r(7)),i=r(1),o=r(2),a=r(4),c=(r(8),r(9),r(327)),O=r(50),l=r(95);var u=r(82),N=(r(61),r(21));function f(e){return{geometryType:Object(N.c)(e[0]),geometries:e.map(e=>e.toJSON())}}function p(e,t,r){const n=Object(N.b)(t);return e.map(e=>{const t=n.fromJSON(e);return t.spatialReference=r,t})}var j=r(24);const y=new j.a({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});const b=new j.a({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});var m=r(13);let d=class extends m.a{constructor(e){super(e),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],d.prototype,"deviationUnit",void 0),Object(n.a)([Object(i.b)({json:{read:{reader:e=>e?e.map(e=>Object(N.a)(e)):null},write:{writer:(e,t)=>{t.geometries=e.map(e=>e.toJSON())}}}})],d.prototype,"geometries",void 0),Object(n.a)([Object(i.b)({type:Number,json:{write:!0}})],d.prototype,"maxDeviation",void 0),d=Object(n.a)([Object(o.a)("esri.tasks.support.GeneralizeParameters")],d),d.from=Object(s.m)(d);var T=d;async function I(e,t,r){const n=(t=T.from(t)).toJSON(),s=function(e){const{geometries:t,deviationUnit:r,maxDeviation:n}=e.toJSON(),s={maxDeviation:n};return t&&t.length&&(s.geometries=JSON.stringify({geometryType:Object(N.c)(t[0]),geometries:t}),s.sr=JSON.stringify(t[0].spatialReference)),b.write(r,s,"deviationUnit"),s}(t),i=Object(l.c)(e),o={...i.query,f:"json",...s},a=n.geometries[0].spatialReference,c=Object(l.a)(o,r);return Object(O.default)(i.path+"/generalize",c).then(({data:e})=>(e.geometries||[]).map(e=>Object(N.a)(e).set({spatialReference:a})))}const g=new j.a({preserveShape:"preserve-shape"});var S=r(78);let _=class extends m.a{constructor(e){super(e),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],_.prototype,"calculationType",void 0),Object(n.a)([Object(i.b)({type:Boolean,json:{write:!0}})],_.prototype,"geodesic",void 0),Object(n.a)([Object(i.b)({json:{write:!0}})],_.prototype,"lengthUnit",void 0),Object(n.a)([Object(i.b)({type:[S.a],json:{read:{reader:e=>e?e.map(e=>Object(N.a)(e)):null},write:{writer:(e,t)=>{t.polylines=e.map(e=>e.toJSON())}}}})],_.prototype,"polylines",void 0),_=Object(n.a)([Object(o.a)("esri.tasks.support.LengthsParameters")],_),_.from=Object(s.m)(_);var R=_;async function h(e,t,r){const n=function(e){const{polylines:t,lengthUnit:r,geodesic:n,calculationType:s}=e.toJSON(),i={};i.polylines=JSON.stringify(t);const o=e.polylines[0].spatialReference;return i.sr=o.wkid?o.wkid:JSON.stringify(o.toJSON()),r&&(i.lengthUnit=r),n&&(i.geodesic=n),s&&(i.calculationType=g.toJSON(s)),i}(t=R.from(t)),s=Object(l.c)(e),i={...s.query,f:"json",...n},o=Object(l.a)(i,r);return Object(O.default)(s.path+"/lengths",o).then(({data:e})=>e)}const U=new j.a({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),E=new j.a({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});let A=class extends m.a{constructor(e){super(e),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};Object(n.a)([Object(i.b)({type:Number,json:{write:!0}})],A.prototype,"bevelRatio",void 0),Object(n.a)([Object(i.b)({json:{read:{reader:e=>e?e.map(e=>Object(N.a)(e)):null},write:{writer:(e,t)=>{t.geometries=e.map(e=>e.toJSON())}}}})],A.prototype,"geometries",void 0),Object(n.a)([Object(i.b)({type:Number,json:{write:!0}})],A.prototype,"offsetDistance",void 0),Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],A.prototype,"offsetHow",void 0),Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],A.prototype,"offsetUnit",void 0),A=Object(n.a)([Object(o.a)("esri.tasks.support.OffsetParameters")],A),A.from=Object(s.m)(A);var J=A;async function v(e,t,r){const n=function(e){const{geometries:t,bevelRatio:r,offsetDistance:n,offsetHow:s,offsetUnit:i}=e.toJSON(),o={bevelRatio:r,offsetDistance:n};return t&&t.length&&(o.geometries=JSON.stringify({geometryType:Object(N.c)(t[0]),geometries:t}),o.sr=JSON.stringify(t[0].spatialReference)),s&&(o.offsetHow=U.toJSON(s)),i&&(o.offsetUnit=E.toJSON(i)),o}(t=J.from(t)),s=Object(l.c)(e),i={...s.query,f:"json",...n},o=t.geometries[0].spatialReference,a=Object(l.a)(i,r);return Object(O.default)(s.path+"/offset",a).then(({data:e})=>(e.geometries||[]).map(e=>Object(N.a)(e).set({spatialReference:o})))}var w=r(674);const D=Object(s.m)(w.a);const L=new j.a({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});let C=class extends m.a{constructor(e){super(e),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};Object(n.a)([Object(i.b)({json:{read:{reader:e=>e?e.map(e=>Object(N.a)(e)):null},write:{writer:(e,t)=>{t.geometries1=e.map(e=>e.toJSON())}}}})],C.prototype,"geometries1",void 0),Object(n.a)([Object(i.b)({json:{read:{reader:e=>e?e.map(e=>Object(N.a)(e)):null},write:{writer:(e,t)=>{t.geometries2=e.map(e=>e.toJSON())}}}})],C.prototype,"geometries2",void 0),Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],C.prototype,"relation",void 0),Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],C.prototype,"relationParameter",void 0),C=Object(n.a)([Object(o.a)("esri.tasks.support.RelationParameters")],C),C.from=Object(s.m)(C);var M=C;async function q(e,t,r){const n=function(e){const{geometries1:t,geometries2:r,relation:n,relationParameter:s}=e.toJSON(),i={};if(t&&t.length){i.geometries1=JSON.stringify({geometryType:Object(N.c)(t[0]),geometries:t});const e=t[0].spatialReference;i.sr=e.wkid?e.wkid:JSON.stringify(e)}return r&&r.length>0&&(i.geometries2=JSON.stringify({geometryType:Object(N.c)(r[0]),geometries:r})),n&&(i.relation=L.toJSON(n)),s&&(i.relationParam=s),i}(t=M.from(t)),s=Object(l.c)(e),i={...s.query,f:"json",...n},o=Object(l.a)(i,r);return Object(O.default)(s.path+"/relation",o).then(({data:e})=>e.relations)}const G=new j.a({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});let x=class extends m.a{constructor(e){super(e),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};Object(n.a)([Object(i.b)({type:String,json:{write:!0}})],x.prototype,"extendHow",void 0),Object(n.a)([Object(i.b)({type:[S.a],json:{read:{reader:e=>e?e.map(e=>Object(N.a)(e)):null},write:{writer:(e,t)=>{t.polylines=e.map(e=>e.toJSON())}}}})],x.prototype,"polylines",void 0),Object(n.a)([Object(i.b)({json:{read:{reader:e=>e?Object(N.a)(e):null},write:{writer:(e,t)=>{t.trimExtendTo=e.toJSON()}}}})],x.prototype,"trimExtendTo",void 0),x=Object(n.a)([Object(o.a)("esri.tasks.support.TrimExtendParameters")],x),x.from=Object(s.m)(x);var H=x;async function k(e,t,r){const n=function(e){const{extendHow:t,polylines:r,trimExtendTo:n}=e.toJSON(),s={};return s.extendHow=G.toJSON(t),r&&r.length&&(s.polylines=JSON.stringify(r),s.sr=JSON.stringify(r[0].spatialReference)),n&&(s.trimExtendTo=JSON.stringify(n)),s}(t=H.from(t)),s=Object(l.c)(e),i={...s.query,f:"json",...n},o=t.sr,a=Object(l.a)(i,r);return Object(O.default)(s.path+"/trimExtend",a).then(({data:e})=>(e.geometries||[]).map(({paths:e})=>new S.a({spatialReference:o,paths:e})))}let Y=class extends c.a{constructor(e){super(e),this.url=null}areasAndLengths(e,t){return async function(e,t,r){const n=Object(l.c)(e),s={...n.query,f:"json",...t.toJSON()},i=Object(l.a)(s,r);return Object(O.default)(n.path+"/areasAndLengths",i).then(e=>e.data)}(this.url,e,t)}autoComplete(e,t,r){return async function(e,t,r,n){const s=t[0].spatialReference,i=Object(l.c)(e),o={...i.query,f:"json",sr:JSON.stringify(s.toJSON()),polygons:JSON.stringify(f(t).geometries),polylines:JSON.stringify(f(r).geometries)},a=Object(l.a)(o,n);return Object(O.default)(i.path+"/autoComplete",a).then(({data:e})=>(e.geometries||[]).map(({rings:e})=>new u.a({spatialReference:s,rings:e})))}(this.url,e,t,r)}buffer(e,t){return async function(e,t,r){const n=Object(l.c)(e),s={...n.query,f:"json",...t.toJSON()},i=t.outSpatialReference||t.geometries[0].spatialReference,o=Object(l.a)(s,r);return Object(O.default)(n.path+"/buffer",o).then(e=>(e.data.geometries||[]).map(({rings:e})=>new u.a({spatialReference:i,rings:e})))}(this.url,e,t)}convexHull(e,t){return async function(e,t,r){const n=t[0].spatialReference,s=Object(l.c)(e),i={...s.query,f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify(f(t))},o=Object(l.a)(i,r);return Object(O.default)(s.path+"/convexHull",o).then(({data:e})=>Object(N.a)(e.geometry).set({spatialReference:n}))}(this.url,e,t)}cut(e,t,r){return async function(e,t,r,n){const s=Object(l.c)(e),i=t[0].spatialReference,o={...n,query:{...s.query,f:"json",sr:JSON.stringify(i),target:JSON.stringify({geometryType:Object(N.c)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},a=await Object(O.default)(s.path+"/cut",o),{cutIndexes:c,geometries:u=[]}=a.data;return{cutIndexes:c,geometries:u.map(e=>{const t=Object(N.a)(e);return t.spatialReference=i,t})}}(this.url,e,t,r)}densify(e,t){return async function(e,t,r){const n=t.geometries[0].spatialReference,s=Object(l.c)(e),i={...s.query,f:"json",...t.toJSON()},o=Object(l.a)(i,r);return Object(O.default)(s.path+"/densify",o).then(({data:e})=>(e.geometries||[]).map(e=>Object(N.a)(e).set({spatialReference:n})))}(this.url,e,t)}difference(e,t,r){return async function(e,t,r,n){const s=t[0].spatialReference,i=Object(l.c)(e);let o={query:{...i.query,f:"json",sr:JSON.stringify(s.toJSON()),geometries:JSON.stringify(f(t)),geometry:JSON.stringify({geometryType:Object(N.c)(r),geometry:r.toJSON()})}};return n&&(o={...n,...o}),Object(O.default)(i.path+"/difference",o).then(({data:e})=>(e.geometries||[]).map(e=>Object(N.a)(e).set({spatialReference:s})))}(this.url,e,t,r)}distance(e,t){return async function(e,t,r){const n=Object(l.c)(e),s={...n.query,f:"json",...t.toJSON()},i=Object(l.a)(s,r);return Object(O.default)(n.path+"/distance",i).then(({data:e})=>e&&e.distance)}(this.url,e,t)}fromGeoCoordinateString(e,t){return async function(e,t,r){const n={};null!=t.sr&&"object"==typeof t.sr?n.sr=t.sr.wkid||JSON.stringify(t.sr):n.sr=t.sr,n.strings=JSON.stringify(t.strings);const s=t.conversionType||"mgrs";n.conversionType=y.toJSON(s),n.conversionMode=t.conversionMode;const i=Object(l.c)(e),o={...i.query,f:"json",...n},a=Object(l.a)(o,r);return Object(O.default)(i.path+"/fromGeoCoordinateString",a).then(({data:e})=>e.coordinates)}(this.url,e,t)}generalize(e,t){return I(this.url,e,t)}intersect(e,t,r){return async function(e,t,r,n){const s=t[0].spatialReference,i=Object(l.c)(e),o={...i.query,f:"json",sr:JSON.stringify(s.toJSON()),geometries:JSON.stringify(f(t)),geometry:JSON.stringify({geometryType:Object(N.c)(r),geometry:r.toJSON()})},a=Object(l.a)(o,n);return Object(O.default)(i.path+"/intersect",a).then(({data:e})=>(e.geometries||[]).map(e=>Object(N.a)(e).set({spatialReference:s})))}(this.url,e,t,r)}labelPoints(e,t){return function(e,t,r){const n=t.map(e=>e.toJSON()),s=t[0].spatialReference,i=Object(l.c)(e),o={...i.query,f:"json",sr:s.wkid?s.wkid:JSON.stringify(s.toJSON()),polygons:JSON.stringify(n)},a=Object(l.a)(o,r);return Object(O.default)(i.path+"/labelPoints",a).then(({data:e})=>(e.labelPoints||[]).map(e=>Object(N.a)(e).set({spatialReference:s})))}(this.url,e,t)}lengths(e,t){return h(this.url,e,t)}offset(e,t){return v(this.url,e,t)}project(e,t){return async function(e,t,r){t=D(t);const n=Object(l.c)(e),s={...n.query,f:"json",...t.toJSON()},i=t.outSpatialReference,o=Object(N.c)(t.geometries[0]),a=Object(l.a)(s,r);return Object(O.default)(n.path+"/project",a).then(({data:{geometries:e}})=>p(e,o,i))}(this.url,e,t)}relation(e,t){return q(this.url,e,t)}reshape(e,t,r){return async function(e,t,r,n){const s=t.spatialReference,i=Object(l.c)(e),o={...i.query,f:"json",sr:JSON.stringify(s.toJSON()),target:JSON.stringify({geometryType:Object(N.c)(t),geometry:t.toJSON()}),reshaper:JSON.stringify(r.toJSON())},a=Object(l.a)(o,n);return Object(O.default)(i.path+"/reshape",a).then(({data:e})=>Object(N.a)(e.geometry).set({spatialReference:s}))}(this.url,e,t,r)}simplify(e,t){return async function(e,t,r){const n="string"==typeof e?Object(a.J)(e):e,s=t[0].spatialReference,i=Object(N.c)(t[0]),o={...r,query:{...n.query,f:"json",sr:s.wkid?s.wkid:JSON.stringify(s),geometries:JSON.stringify(f(t))}},{data:c}=await Object(O.default)(n.path+"/simplify",o);return p(c.geometries,i,s)}(this.url,e,t)}toGeoCoordinateString(e,t){return async function(e,t,r){const n={};null!=t.sr&&"object"==typeof t.sr?n.sr=t.sr.wkid||JSON.stringify(t.sr):n.sr=t.sr,n.coordinates=JSON.stringify(t.coordinates);const s=t.conversionType||"mgrs";n.conversionType=y.toJSON(s),n.conversionMode=t.conversionMode,n.numOfDigits=t.numOfDigits,n.rounding=t.rounding,n.addSpaces=t.addSpaces;const i=Object(l.c)(e),o={...i.query,f:"json",...n},a=Object(l.a)(o,r);return Object(O.default)(i.path+"/toGeoCoordinateString",a).then(({data:e})=>e.strings)}(this.url,e,t)}trimExtend(e,t){return k(this.url,e,t)}union(e,t){return async function(e,t,r){const n=t[0].spatialReference,s=Object(l.c)(e),i={...s.query,f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify(f(t))},o=Object(l.a)(i,r);return Object(O.default)(s.path+"/union",o).then(({data:e})=>Object(N.a)(e.geometry).set({spatialReference:n}))}(this.url,e,t)}};Y.UNIT_METER=9001,Y.UNIT_GERMAN_METER=9031,Y.UNIT_FOOT=9002,Y.UNIT_SURVEY_FOOT=9003,Y.UNIT_CLARKE_FOOT=9005,Y.UNIT_FATHOM=9014,Y.UNIT_NAUTICAL_MILE=9030,Y.UNIT_SURVEY_CHAIN=9033,Y.UNIT_SURVEY_LINK=9034,Y.UNIT_SURVEY_MILE=9035,Y.UNIT_KILOMETER=9036,Y.UNIT_CLARKE_YARD=9037,Y.UNIT_CLARKE_CHAIN=9038,Y.UNIT_CLARKE_LINK=9039,Y.UNIT_SEARS_YARD=9040,Y.UNIT_SEARS_FOOT=9041,Y.UNIT_SEARS_CHAIN=9042,Y.UNIT_SEARS_LINK=9043,Y.UNIT_BENOIT_1895A_YARD=9050,Y.UNIT_BENOIT_1895A_FOOT=9051,Y.UNIT_BENOIT_1895A_CHAIN=9052,Y.UNIT_BENOIT_1895A_LINK=9053,Y.UNIT_BENOIT_1895B_YARD=9060,Y.UNIT_BENOIT_1895B_FOOT=9061,Y.UNIT_BENOIT_1895B_CHAIN=9062,Y.UNIT_BENOIT_1895B_LINK=9063,Y.UNIT_INDIAN_FOOT=9080,Y.UNIT_INDIAN_1937_FOOT=9081,Y.UNIT_INDIAN_1962_FOOT=9082,Y.UNIT_INDIAN_1975_FOOT=9083,Y.UNIT_INDIAN_YARD=9084,Y.UNIT_INDIAN_1937_YARD=9085,Y.UNIT_INDIAN_1962_YARD=9086,Y.UNIT_INDIAN_1975_YARD=9087,Y.UNIT_FOOT_1865=9070,Y.UNIT_RADIAN=9101,Y.UNIT_DEGREE=9102,Y.UNIT_ARCMINUTE=9103,Y.UNIT_ARCSECOND=9104,Y.UNIT_GRAD=9105,Y.UNIT_GON=9106,Y.UNIT_MICRORADIAN=9109,Y.UNIT_ARCMINUTE_CENTESIMAL=9112,Y.UNIT_ARCSECOND_CENTESIMAL=9113,Y.UNIT_MIL6400=9114,Y.UNIT_BRITISH_1936_FOOT=9095,Y.UNIT_GOLDCOAST_FOOT=9094,Y.UNIT_INTERNATIONAL_CHAIN=109003,Y.UNIT_INTERNATIONAL_LINK=109004,Y.UNIT_INTERNATIONAL_YARD=109001,Y.UNIT_STATUTE_MILE=9093,Y.UNIT_SURVEY_YARD=109002,Y.UNIT_50KILOMETER_LENGTH=109030,Y.UNIT_150KILOMETER_LENGTH=109031,Y.UNIT_DECIMETER=109005,Y.UNIT_CENTIMETER=109006,Y.UNIT_MILLIMETER=109007,Y.UNIT_INTERNATIONAL_INCH=109008,Y.UNIT_US_SURVEY_INCH=109009,Y.UNIT_INTERNATIONAL_ROD=109010,Y.UNIT_US_SURVEY_ROD=109011,Y.UNIT_US_NAUTICAL_MILE=109012,Y.UNIT_UK_NAUTICAL_MILE=109013,Y.UNIT_SQUARE_INCHES="esriSquareInches",Y.UNIT_SQUARE_FEET="esriSquareFeet",Y.UNIT_SQUARE_YARDS="esriSquareYards",Y.UNIT_ACRES="esriAcres",Y.UNIT_SQUARE_MILES="esriSquareMiles",Y.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",Y.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",Y.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",Y.UNIT_SQUARE_METERS="esriSquareMeters",Y.UNIT_ARES="esriAres",Y.UNIT_HECTARES="esriHectares",Y.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",Object(n.a)([Object(i.b)()],Y.prototype,"url",void 0),Y=Object(n.a)([Object(o.a)("esri.tasks.GeometryService")],Y);var F=Y;t.default=F}}]);
//# sourceMappingURL=16.22d7b88d.chunk.js.map