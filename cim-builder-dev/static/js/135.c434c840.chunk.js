(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[135,162],{674:function(e,t,r){"use strict";var n=r(0),o=(r(6),r(5),r(7),r(1)),i=r(2),a=(r(4),r(8),r(9),r(13)),s=r(21);let c=class extends a.a{constructor(e){super(e),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map((function(e){return e.toJSON()})),t=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:Object(s.c)(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};Object(n.a)([Object(o.b)()],c.prototype,"geometries",void 0),Object(n.a)([Object(o.b)({json:{read:{source:"outSR"}}})],c.prototype,"outSpatialReference",void 0),Object(n.a)([Object(o.b)()],c.prototype,"transformation",void 0),Object(n.a)([Object(o.b)()],c.prototype,"transformForward",void 0),c=Object(n.a)([Object(i.a)("esri.tasks.support.ProjectParameters")],c);var l=c;t.a=l},809:function(e,t,r){"use strict";r.r(t),r.d(t,"create",(function(){return s})),r.d(t,"projectGeometry",(function(){return c}));var n=r(52),o=r(12),i=r(70),a=r(674);async function s(e=null,t){if(n.a.geometryServiceUrl)return new(0,(await r.e(16).then(r.bind(null,745))).default)({url:n.a.geometryServiceUrl});if(!e)throw new o.a("internal:geometry-service-url-not-configured");let a;if(a="portal"in e?e.portal||i.a.getDefault():e,await a.load({signal:t}),a.helperServices&&a.helperServices.geometry&&a.helperServices.geometry.url)return new(0,(await r.e(16).then(r.bind(null,745))).default)({url:a.helperServices.geometry.url});throw new o.a("internal:geometry-service-url-not-configured")}async function c(e,t,r=null,n){const i=await s(r,n),c=new a.a;c.geometries=[e],c.outSpatialReference=t;const l=await i.project(c,{signal:n});if(l&&Array.isArray(l)&&1===l.length)return l[0];throw new o.a("internal:geometry-service-projection-failed")}}}]);
//# sourceMappingURL=135.c434c840.chunk.js.map