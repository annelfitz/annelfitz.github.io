"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[6461],{16461:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});r(59486);var s=r(92026),o=r(42306),i=r(96212),a=r(45502),n=r(17314),l=r(68312),c=r(80394),m=r(21449),f=r(64145),p=r(77960),u=r(43238),S=r(55185),d=r(53866);class h{convertVectorFieldData(e){const t=i.Z.fromJSON(e.pixelBlock),r=(0,f.KC)(t,e.type);return Promise.resolve((0,s.pC)(r)?r.toJSON():null)}async decode(e){const t=await(0,a.J)(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=i.Z.fromJSON(e.pixelBlock),e.extent=e.extent?d.Z.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve((0,s.pC)(t)?t.toJSON():null)}async updateSymbolizer(e){this.symbolizer=u.Z.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=(0,l.Ue)(e.rasterFunctionJSON)}async process(e){const t=this.rasterFunction.process({extent:d.Z.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map((e=>(0,s.pC)(e)?i.Z.fromJSON(e):null)),primaryRasterIds:e.primaryRasterIds});return(0,s.pC)(t)?t.toJSON():null}stretch(e){const t=this.symbolizer.simpleStretch(i.Z.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve((0,s.pC)(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=(0,m.Hv)(i.Z.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=(0,n.Vl)(i.Z.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach(((e,r)=>{t.set(r,e?.toJSON())})),Promise.resolve(t)}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map((e=>e?new i.Z(e):null)),r=(0,n.us)(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let o,a=r;return e.coefs&&(a=(0,n.Uk)(r,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(o=(0,n.Qh)(e.destDimension,e.gcsGrid),a=(0,s.Wg)((0,f.xQ)(a,e.isUV?"vector-uv":"vector-magdir",o))),{pixelBlock:a?.toJSON(),localNorthDirections:o}}async createFlowMesh(e,t){const r={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:s,indexData:o}=await(0,S.GE)(e.meshType,e.simulationSettings,r,t.signal);return{result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const t=d.Z.fromJSON(e.projectedExtent),r=d.Z.fromJSON(e.srcBufferExtent);let s=null;e.datumTransformationSteps&&(s=new o.Z({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,c.Mk)(t.spatialReference,r.spatialReference,s))&&await(0,c.zD)();const i=e.rasterTransform?(0,p.c)(e.rasterTransform):null;return(0,c.Qp)({...e,projectedExtent:t,srcBufferExtent:r,datumTransformation:s,rasterTransform:i})}}}}]);
//# sourceMappingURL=6461.299e6249.chunk.js.map