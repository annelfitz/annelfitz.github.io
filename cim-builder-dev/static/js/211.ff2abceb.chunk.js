(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[211],{716:function(e,t,o){"use strict";o.r(t);var r=o(0),i=o(53),a=o(45),l=(o(41),o(3)),s=o(321),c=o(12),n=o(14),p=o(1),b=(o(5),o(6),o(4),o(15)),y=o(2),u=o(197),d=o(327),j=o(324),O=o(323),S=o(333),h=o(325),v=o(88),f=o(54),m=o(71),g=o(166),C=o(124),R=o(103);const k=["atom","xml"],w={base:f.a,key:"type",typeMap:{"simple-line":m.a},errorContext:"symbol"},F={base:f.a,key:"type",typeMap:{"picture-marker":g.a,"simple-marker":C.a},errorContext:"symbol"},x={base:f.a,key:"type",typeMap:{"simple-fill":R.a},errorContext:"symbol"};let M=class extends(Object(d.a)(Object(S.a)(Object(j.a)(Object(O.a)(Object(h.a)(Object(s.a)(u.a))))))){constructor(...e){super(...e),this.description=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.outSpatialReference=null,this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(n.k)(this.url,k)||"GeoRSS":e||""}set title(e){this._set("title",e)}readFeatureCollections(e,t){return t.featureCollection.layers.forEach(e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")}),t.featureCollection.layers}load(e){const t=Object(l.i)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(c.u).then(()=>this._fetchService(t))),Promise.resolve(this)}async _fetchService(e){const{data:t}=await Object(a.default)(i.a.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e});this.read(t,{origin:"service"})}};Object(r.a)([Object(p.b)()],M.prototype,"description",void 0),Object(r.a)([Object(p.b)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],M.prototype,"title",null),Object(r.a)([Object(p.b)()],M.prototype,"featureCollections",void 0),Object(r.a)([Object(b.a)("service","featureCollections",["featureCollection.layers"])],M.prototype,"readFeatureCollections",null),Object(r.a)([Object(p.b)(v.c)],M.prototype,"id",void 0),Object(r.a)([Object(p.b)(v.e)],M.prototype,"legendEnabled",void 0),Object(r.a)([Object(p.b)({types:w,json:{write:!0}})],M.prototype,"lineSymbol",void 0),Object(r.a)([Object(p.b)({type:["show","hide"]})],M.prototype,"listMode",void 0),Object(r.a)([Object(p.b)({types:F,json:{write:!0}})],M.prototype,"pointSymbol",void 0),Object(r.a)([Object(p.b)({types:x,json:{write:!0}})],M.prototype,"polygonSymbol",void 0),Object(r.a)([Object(p.b)({type:["GeoRSS"]})],M.prototype,"operationalLayerType",void 0),Object(r.a)([Object(p.b)()],M.prototype,"outSpatialReference",void 0),Object(r.a)([Object(p.b)(v.n)],M.prototype,"url",void 0),Object(r.a)([Object(p.b)({readOnly:!0,json:{read:!1},value:"geo-rss"})],M.prototype,"type",void 0),M=Object(r.a)([Object(y.a)("esri.layers.GeoRSSLayer")],M);var G=M;t.default=G}}]);
//# sourceMappingURL=211.ff2abceb.chunk.js.map