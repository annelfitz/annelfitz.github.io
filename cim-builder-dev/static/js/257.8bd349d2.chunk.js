(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[257],{596:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));r(64);var s=r(2),o=r(280),i=r(721),a=r(863),c=r(659),n=r(735),l=r(722),m=r(975),f=r(929),u=r(764),O=r(35);class b{convertVectorFieldData(e){const t=i.a.fromJSON(e.pixelBlock),r=Object(l.b)(t,e.type);return Promise.resolve(Object(s.j)(r)&&r.toJSON())}async decode(e){const t=await Object(a.a)(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=i.a.fromJSON(e.pixelBlock),e.extent=e.extent?O.a.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(Object(s.j)(t)&&t.toJSON())}async updateSymbolizer(e){var t;this.symbolizer=f.a.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(t=this.symbolizer)?void 0:t.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(i.a.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(Object(s.j)(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=Object(c.g)(i.a.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=Object(c.p)(i.a.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach((e,r)=>{t.set(r,null==e?void 0:e.toJSON())}),Promise.resolve(t)}async mosaicAndTransform(e){var t;const r=e.srcPixelBlocks.map(e=>e?new i.a(e):null),o=Object(c.l)(r,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let a,n=o;return e.coefs&&(n=Object(c.a)(o,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(a=Object(c.i)(e.destDimension,e.gcsGrid),n=Object(s.q)(Object(l.a)(n,e.isUV?"vector-uv":"vector-magdir",a))),{pixelBlock:null==(t=n)?void 0:t.toJSON(),localNorthDirections:a}}async createStreamlinesMesh(e,t){const r={data:new Float32Array(e.flowData.buffer),width:e.flowData.width,height:e.flowData.height},{vertexData:s,indexData:o}=await Object(u.a)(e.rendererSettings,r,t.signal);return{result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const t=O.a.fromJSON(e.projectedExtent),r=O.a.fromJSON(e.srcBufferExtent);let s=null;e.datumTransformationSteps&&(s=new o.a({steps:e.datumTransformationSteps})),(e.includeGCSGrid||Object(n.k)(t.spatialReference,r.spatialReference,s))&&await Object(n.g)();const i=e.rasterTransform?Object(m.b)(e.rasterTransform):null;return Object(n.c)({...e,projectedExtent:t,srcBufferExtent:r,datumTransformation:s,rasterTransform:i})}}}}]);
//# sourceMappingURL=257.8bd349d2.chunk.js.map