"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[6761],{11873:(e,t,n)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function i(e,t,n,r,i,o,s,c,a){return[e,t,n,r,i,o,s,c,a]}function o(e,t){return new Float64Array(e,t,9)}n.d(t,{a:()=>o,c:()=>r,f:()=>i});Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:r,createView:o,fromValues:i},Symbol.toStringTag,{value:"Module"}))},81949:(e,t,n)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t){return new Float64Array(e,t,16)}n.d(t,{I:()=>s,a:()=>o,b:()=>i,c:()=>r});const s=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:i,create:r,createView:o,fromValues:function(e,t,n,r,i,o,s,c,a,f,u,l,h,d,m,g){return[e,t,n,r,i,o,s,c,a,f,u,l,h,d,m,g]}},Symbol.toStringTag,{value:"Module"}))},98131:(e,t,n)=>{function r(){return[0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3]]}function o(e,t){return new Float64Array(e,t,4)}n.d(t,{I:()=>s,a:()=>r,b:()=>i,c:()=>o});const s=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:i,create:r,createView:o,fromValues:function(e,t,n,r){return[e,t,n,r]}},Symbol.toStringTag,{value:"Module"}))},71417:(e,t,n)=>{n.d(t,{a:()=>b,c:()=>g,g:()=>y,h:()=>_,j:()=>M,m:()=>I});n(93169);var r,i=n(32718),o=n(16889),s=n(92026),c=n(14226),a=n(11186),f=n(71353),u=n(90045),l=n(67077);!function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(r||(r={}));var h=n(40885),d=n(40927),m=n(51378);function g(){return(0,l.c)()}function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g();return(0,u.c)(t,e)}function b(e){return e[3]}function y(e){return e}function p(e,t,n){if((0,s.Wi)(t))return!1;const{origin:r,direction:i}=t,o=w;o[0]=r[0]-e[0],o[1]=r[1]-e[1],o[2]=r[2]-e[2];const c=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===c)return!1;const a=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),f=a*a-4*c*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(f<0)return!1;const u=Math.sqrt(f);let l=(-a-u)/(2*c);const h=(-a+u)/(2*c);return(l<0||h<l&&h>0)&&(l=h),!(l<0)&&(n&&(n[0]=r[0]+i[0]*l,n[1]=r[1]+i[1]*l,n[2]=r[2]+i[2]*l),!0)}const w=(0,f.c)();function M(e,t){return p(e,t,null)}function E(e,t,n){const r=m.WM.get(),i=m.MP.get();(0,a.f)(r,t.origin,t.direction);const o=b(e);(0,a.f)(n,r,t.origin),(0,a.g)(n,n,1/(0,a.l)(n)*o);const s=S(e,t.origin),f=(0,d.EU)(t.origin,n);return(0,c.d)(i,f+s,r),(0,a.m)(n,n,i),n}function P(e,t,n){const r=(0,a.b)(m.WM.get(),t,e),i=(0,a.g)(m.WM.get(),r,e[3]/(0,a.l)(r));return(0,a.a)(n,i,e)}function S(e,t){const n=(0,a.b)(m.WM.get(),t,e),r=(0,a.l)(n),i=b(e),s=i+Math.abs(i-r);return(0,o.ZF)(i/s)}const A=(0,f.c)();function v(e,t,n,i){const s=(0,a.b)(A,t,e);switch(n){case r.X:{const e=(0,o.jE)(s,A)[2];return(0,a.s)(i,-Math.sin(e),Math.cos(e),0)}case r.Y:{const e=(0,o.jE)(s,A),t=e[1],n=e[2],r=Math.sin(t);return(0,a.s)(i,-r*Math.cos(n),-r*Math.sin(n),Math.cos(t))}case r.Z:return(0,a.n)(i,s);default:return}}function T(e,t){const n=(0,a.b)(L,t,e);return(0,a.l)(n)-e[3]}function I(e,t){const n=(0,a.d)(e,t),r=b(e);return n<=r*r}const L=(0,f.c)(),U=g();Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:T,angleToSilhouette:S,axisAt:v,clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,n){return p(e,t,n)?n:((0,h.JI)(t,e,n),P(e,n,n))},closestPointOnSilhouette:E,containsPoint:I,copy:_,create:g,distanceToSilhouette:function(e,t){const n=(0,a.b)(m.WM.get(),t,e),r=(0,a.p)(n),i=e[3]*e[3];return Math.sqrt(Math.abs(r-i))},elevate:function(e,t,n){return e!==n&&(0,a.c)(n,e),n[3]=e[3]+t,n},fromCenterAndRadius:function(e,t){return(0,l.f)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:function(e,t,n,r){return(0,l.f)(e,t,n,r)},getCenter:y,getRadius:b,intersectRay:p,intersectRayClosestSilhouette:function(e,t,n){if(p(e,t,n))return n;const r=E(e,t,m.WM.get());return(0,a.a)(n,t.origin,(0,a.g)(m.WM.get(),t.direction,(0,a.i)(t.origin,r)/(0,a.l)(t.direction))),n},intersectsRay:M,projectPoint:P,setAltitudeAt:function(e,t,n,i){const o=T(e,t),s=v(e,t,r.Z,L),c=(0,a.g)(L,s,n-o);return(0,a.a)(i,t,c)},setExtent:function(e,t,n){return i.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),e===n?n:_(e,n)},tmpSphere:U,wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},21530:(e,t,n)=>{n.d(t,{x:()=>i});var r=n(70758);class i{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,r.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,o));e++)this._items.push(this._allocator())}}const o=1024},40885:(e,t,n)=>{n.d(t,{JI:()=>f,Ue:()=>s,re:()=>a});n(63780);var r=n(21530),i=n(11186),o=n(71353);n(51378);function s(e){return e?c((0,o.a)(e.origin),(0,o.a)(e.direction)):c((0,o.c)(),(0,o.c)())}function c(e,t){return{origin:e,direction:t}}function a(e,t){const n=u.get();return n.origin=e,n.direction=t,n}function f(e,t,n){const r=(0,i.e)(e.direction,(0,i.b)(n,t,e.origin));return(0,i.a)(n,e.origin,(0,i.g)(n,e.direction,r)),n}const u=new r.x((()=>s()))},40927:(e,t,n)=>{n.d(t,{EU:()=>s});var r=n(16889),i=n(11186),o=n(71353);function s(e,t){const n=(0,i.e)(e,t)/((0,i.l)(e)*(0,i.l)(t));return-(0,r.ZF)(n)}(0,o.c)(),(0,o.c)()},51378:(e,t,n)=>{n.d(t,{MP:()=>m,WM:()=>d});var r=n(59896),i=n(70758),o=n(11873),s=n(81949),c=n(98131),a=n(6394),f=n(71353),u=n(67077);class l{constructor(e,t,n){this._itemByteSize=e,this._itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(n/this._itemByteSize)}get(){0===this._itemsPtr&&(0,i.Y)((()=>this._reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const e=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let t=0;t<this._itemsPerBuffer;++t)this._items.push(this._itemCreate(e,t*this._itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(16,a.c,e)}static createVec3f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(24,f.b,e)}static createVec4f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(32,u.a,e)}static createMat3f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(72,o.a,e)}static createMat4f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(128,s.a,e)}static createQuatf64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(32,c.c,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const h=4*r.Y8.KILOBYTES,d=(l.createVec2f64(),l.createVec3f64()),m=(l.createVec4f64(),l.createMat3f64(),l.createMat4f64());l.createQuatf64()},6761:(e,t,n)=>{n.r(t),n.d(t,{destroyContext:()=>p,dracoDecompressPointCloudData:()=>g,filterObbsForModifications:()=>_,filterObbsForModificationsSync:()=>A,initialize:()=>I,interpretObbModificationResults:()=>S,process:()=>m,setLegacySchema:()=>y,setModifications:()=>b,setModificationsSync:()=>E,test:()=>L});var r,i,o=n(92026);!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(r||(r={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(i||(i={}));var s=n(65905);function c(e){return(0,s.V)(`esri/libs/i3s/${e}`)}let a;var f,u,l,h,d;n(71417);!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(f||(f={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(u||(u={}));!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(l||(l={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(h||(h={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(d||(d={}));async function m(e){await I();const t=[e.geometryBuffer];return{result:P(e,t),transferList:t}}async function g(e){await I();const t=[e.geometryBuffer],{geometryBuffer:n}=e,r=n.byteLength,i=M._malloc(r),o=new Uint8Array(M.HEAPU8.buffer,i,r);o.set(new Uint8Array(n));const s=M.dracoDecompressPointCloudData(i,o.byteLength);if(M._free(i),s.error.length>0)throw new Error(`i3s.wasm: ${s.error}`);const c=s.featureIds?.length>0?s.featureIds.slice():null,a=s.positions.slice();return c&&t.push(c.buffer),t.push(a.buffer),{result:{positions:a,featureIds:c},transferList:t}}async function _(e){await I(),A(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function b(e){await I(),E(e)}async function y(e){await I(),M.setLegacySchema(e.context,e.jsonSchema)}function p(e){v(e)}let w,M;function E(e){const t=e.modifications,n=M._malloc(8*t.length),r=new Float64Array(M.HEAPU8.buffer,n,t.length);for(let i=0;i<t.length;++i)r[i]=t[i];M.setModifications(e.context,n,t.length,e.isGeodetic),M._free(n)}function P(e,t){if(!M)return null;const{context:n,localOrigin:i,globalTrafo:s,mbs:c,obb:a,elevationOffset:f,geometryBuffer:u,geometryDescriptor:l,indexToVertexProjector:h,vertexToRenderProjector:d}=e,m=M._malloc(u.byteLength),g=M._malloc(33*Float64Array.BYTES_PER_ELEMENT),_=new Uint8Array(M.HEAPU8.buffer,m,u.byteLength);_.set(new Uint8Array(u));const b=new Float64Array(M.HEAPU8.buffer,g,33);T(b,i);let y=b.byteOffset+3*b.BYTES_PER_ELEMENT,p=new Float64Array(b.buffer,y);T(p,s),y+=16*b.BYTES_PER_ELEMENT,p=new Float64Array(b.buffer,y),T(p,c),y+=4*b.BYTES_PER_ELEMENT,(0,o.pC)(a)&&(p=new Float64Array(b.buffer,y),T(p,a.center),y+=3*b.BYTES_PER_ELEMENT,p=new Float64Array(b.buffer,y),T(p,a.halfSize),y+=3*b.BYTES_PER_ELEMENT,p=new Float64Array(b.buffer,y),T(p,a.quaternion));const w=l,E={isDraco:!1,isLegacy:!1,color:e.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:e.needNormals&&e.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:e.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:e.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:w.featureIndex},P=M.process(n,!!e.obb,m,_.byteLength,w,E,g,f,h,d,e.normalReferenceFrame);if(M._free(g),M._free(m),P.error.length>0)throw new Error(`i3s.wasm: ${P.error}`);if(P.discarded)return null;const S=P.componentOffsets.length>0?P.componentOffsets.slice():null,A=P.featureIds.length>0?P.featureIds.slice():null,v=P.interleavedVertedData.slice().buffer,I=P.indicesType===r.Int16?new Uint16Array(P.indices.buffer,P.indices.byteOffset,P.indices.byteLength/2).slice():new Uint32Array(P.indices.buffer,P.indices.byteOffset,P.indices.byteLength/4).slice(),L=P.positions.slice(),U=P.positionIndicesType===r.Int16?new Uint16Array(P.positionIndices.buffer,P.positionIndices.byteOffset,P.positionIndices.byteLength/2).slice():new Uint32Array(P.positionIndices.buffer,P.positionIndices.byteOffset,P.positionIndices.byteLength/4).slice(),B={layout:e.layouts[0],interleavedVertexData:v,indices:I,hasColors:P.hasColors,hasModifications:P.hasModifications,positionData:{data:L,indices:U}};return A&&t.push(A.buffer),S&&t.push(S.buffer),t.push(v),t.push(I.buffer),t.push(L.buffer),t.push(U.buffer),{componentOffsets:S,featureIds:A,transformedGeometry:B,obb:P.obb}}function S(e){return 0===e?u.Unmodified:1===e?u.PotentiallyModified:2===e?u.Culled:u.Unknown}function A(e){const{context:t,buffer:n}=e,r=M._malloc(n.byteLength),i=n.byteLength/Float64Array.BYTES_PER_ELEMENT,o=new Float64Array(M.HEAPU8.buffer,r,i),s=new Float64Array(n);o.set(s),M.filterOBBs(t,r,i),s.set(o),M._free(r)}function v(e){M&&M.destroy(e)}function T(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function I(){return M?Promise.resolve():(w||(w=(a||(a=new Promise((e=>n.e(7552).then(n.bind(n,57552)).then((e=>e.i)).then((t=>{let{default:n}=t;const r=n({locateFile:c,onRuntimeInitialized:()=>e(r)});delete r.then})))).catch((e=>{throw e}))),a).then((e=>{M=e,w=null}))),w)}const L={transform:P,destroy:v}}}]);
//# sourceMappingURL=6761.d9f92d30.chunk.js.map