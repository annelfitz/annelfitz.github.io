(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[166],{700:function(t,e,r){"use strict";var o=r(0),s=r(10),a=r(1),i=(r(5),r(6),r(4),r(2)),n=r(17);let c=class extends s.a{constructor(t){super(t),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const t=this.geometries.map((function(t){return t.toJSON()})),e=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=e.spatialReference.wkid||JSON.stringify(e.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:Object(n.c)(e),geometries:t}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};Object(o.a)([Object(a.b)()],c.prototype,"geometries",void 0),Object(o.a)([Object(a.b)({json:{read:{source:"outSR"}}})],c.prototype,"outSpatialReference",void 0),Object(o.a)([Object(a.b)()],c.prototype,"transformation",void 0),Object(o.a)([Object(a.b)()],c.prototype,"transformForward",void 0),c=Object(o.a)([Object(i.a)("esri.rest.support.ProjectParameters")],c);var p=c;e.a=p}}]);
//# sourceMappingURL=166.1bdf0a95.chunk.js.map