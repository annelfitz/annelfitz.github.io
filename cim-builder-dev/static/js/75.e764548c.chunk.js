(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[75],{1041:function(e,t,r){"use strict";r.r(t),r.d(t,"work",(function(){return D})),r.d(t,"wrappedWork",(function(){return q}));var n=r(773);function s(e,t,r){const n=t/3,s=new Uint32Array(r+1),i=new Uint32Array(r+1),f=(e,t)=>{e<t?s[e+1]++:i[t+1]++};for(let m=0;m<n;m++){const t=e[3*m],r=e[3*m+1],n=e[3*m+2];f(t,r),f(r,n),f(n,t)}let u=0,c=0;for(let m=0;m<r;m++){const e=s[m+1],t=i[m+1];s[m+1]=u,i[m+1]=c,u+=e,c+=t}const o=new Uint32Array(6*n),a=s[r],d=(e,t,r)=>{if(e<t){const n=s[e+1]++;o[2*n]=t,o[2*n+1]=r}else{const n=i[t+1]++;o[2*a+2*n]=e,o[2*a+2*n+1]=r}};for(let m=0;m<n;m++){const t=e[3*m],r=e[3*m+1],n=e[3*m+2];d(t,r,m),d(r,n,m),d(n,t,m)}const l=(e,t)=>{const r=2*e,n=t-e;for(let s=1;s<n;s++){const e=o[r+2*s],t=o[r+2*s+1];let n=s-1;for(;n>=0&&o[r+2*n]>e;n--)o[r+2*n+2]=o[r+2*n],o[r+2*n+3]=o[r+2*n+1];o[r+2*n+2]=e,o[r+2*n+3]=t}};for(let m=0;m<r;m++)l(s[m],s[m+1]),l(a+i[m],a+i[m+1]);const y=new Int32Array(3*n),h=(t,r)=>t===e[3*r]?0:t===e[3*r+1]?1:t===e[3*r+2]?2:-1,p=(e,t)=>{const r=h(e,t);y[3*t+r]=-1},b=(e,t,r,n)=>{const s=h(e,t);y[3*t+s]=n;const i=h(r,n);y[3*n+i]=t};for(let m=0;m<r;m++){let e=s[m];const t=s[m+1];let r=i[m];const n=i[m+1];for(;e<t&&r<n;){const t=o[2*e],n=o[2*a+2*r];t===n?(b(m,o[2*e+1],n,o[2*a+2*r+1]),e++,r++):t<n?(p(m,o[2*e+1]),e++):(p(n,o[2*a+2*r+1]),r++)}for(;e<t;)p(m,o[2*e+1]),e++;for(;r<n;)p(o[2*a+2*r],o[2*a+2*r+1]),r++}return y}var i=r(589),f=r(702);function u(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:c(e.layout)}}function c(e){const t=new Array;return e.fields.forEach((e,r)=>{const n={...e,constructor:a(e.constructor)};t.push([r,n])}),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}const o=[i.a,i.m,i.u,i.C,i.f,i.h,i.b,i.n,i.v,i.D,i.g,i.i,i.l,i.t,i.B,i.J,i.j,i.r,i.z,i.H,i.k,i.s,i.A,i.I,i.e,i.q,i.y,i.G,i.c,i.o,i.w,i.E,i.d,i.p,i.x,i.F];function a(e){return`${e.ElementType}_${e.ElementCount}`}const d=new Map;function l(e,t=0){const r=e.stride;return e.fieldNames.filter(t=>{const r=e.fields.get(t).optional;return!(r&&r.glPadding)}).map(n=>{const s=e.fields.get(n),i=s.constructor.ElementCount,f=function(e){const t=y[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}(s.constructor.ElementType),u=s.offset,c=!(!s.optional||!s.optional.glNormalized);return{name:n,stride:r,count:i,type:f,offset:u,normalized:c,divisor:t}})}o.forEach(e=>d.set(a(e),e));const y={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126},h=Object(f.a)().vec3f("position").u16("componentIndex").u16("u16padding"),p=(l(Object(f.a)().vec2u8("sideness")),Object(f.a)().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0})),b=p.clone().vec3f("normal"),m=p.clone().vec3f("normalA").vec3f("normalB");new Map([["position0",0],["position1",1],["componentIndex",2],["variantOffset",3],["variantStroke",4],["variantExtension",5],["normal",6],["normalA",6],["normalB",7],["sideness",8]]);var B=r(349),g=r(38),E=r(64);class T{updateSettings(e){this.settings=e,this.edgeHashFunction=e.reducedPrecision?M:S}write(e,t,r){const n=this.edgeHashFunction(r);F.seed=n;const s=F.getIntRange(0,255),i=F.getIntRange(0,this.settings.variants-1),f=F.getFloat(),u=255*(.5*function(e,t){const r=e<0?-1:1;return Math.abs(e)**t*r}(-(1-Math.min(f/.7,1))+Math.max(0,f-.7)/(1-.7),1.2)+.5);e.position0.setVec(t,r.position0),e.position1.setVec(t,r.position1),e.componentIndex.set(t,r.componentIndex),e.variantOffset.set(t,s),e.variantStroke.set(t,i),e.variantExtension.set(t,u)}trim(e,t){return e.slice(0,t)}}const A=new Float32Array(6),O=new Uint32Array(A.buffer),w=new Uint32Array(1);function S(e){const t=A;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],w[0]=5381;for(let r=0;r<O.length;r++)w[0]=31*w[0]+O[r];return w[0]}function M(e){const t=A;t[0]=L(e.position0[0]),t[1]=L(e.position0[1]),t[2]=L(e.position0[2]),t[3]=L(e.position1[0]),t[4]=L(e.position1[1]),t[5]=L(e.position1[2]),w[0]=5381;for(let r=0;r<O.length;r++)w[0]=31*w[0]+O[r];return w[0]}function L(e){return Math.round(1e4*e)/1e4}class v{constructor(){this.commonWriter=new T}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return b.createBuffer(e)}write(e,t,r){this.commonWriter.write(e,t,r),Object(g.c)(_,r.faceNormal0,r.faceNormal1),Object(g.o)(_,_),e.normal.setVec(t,_)}trim(e,t){return this.commonWriter.trim(e,t)}}v.Layout=b,v.glLayout=l(b,1);class x{constructor(){this.commonWriter=new T}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return m.createBuffer(e)}write(e,t,r){this.commonWriter.write(e,t,r),e.normalA.setVec(t,r.faceNormal0),e.normalB.setVec(t,r.faceNormal1)}trim(e,t){return this.commonWriter.trim(e,t)}}x.Layout=m,x.glLayout=l(m,1);const _=Object(E.e)(),F=new B.a;var j=r(94),N=r(52),C=r(123);function I(e,t,r,n=k){const s=e.vertices.position,i=e.vertices.componentIndex,f=Object(N.e)(n.anglePlanar),u=Object(N.e)(n.angleSignificantEdge),c=Math.cos(u),o=Math.cos(f),a=V.edge,d=a.position0,l=a.position1,y=a.faceNormal0,h=a.faceNormal1,p=function(e){const t=e.faces.length/3,r=e.vertices.position,n=e.faces,s=Y.v0,i=Y.v1,f=Y.v2,u=new Float32Array(3*t);for(let c=0;c<t;c++){const e=n[3*c+0],t=n[3*c+1],o=n[3*c+2];r.getVec(e,s),r.getVec(t,i),r.getVec(o,f),Object(g.g)(i,i,s),Object(g.g)(f,f,s),Object(g.d)(s,i,f),Object(g.o)(s,s),u[3*c+0]=s[0],u[3*c+1]=s[1],u[3*c+2]=s[2]}return u}(e),b=function(e){const t=e.faces.length/3,r=e.faces,n=e.neighbors;let s=0;for(let u=0;u<t;u++){const e=n[3*u+0],t=n[3*u+1],i=n[3*u+2],f=r[3*u+0],c=r[3*u+1],o=r[3*u+2];s+=-1===e||f<c?1:0,s+=-1===t||c<o?1:0,s+=-1===i||o<f?1:0}const i=new Int32Array(4*s);let f=0;for(let u=0;u<t;u++){const e=n[3*u+0],t=n[3*u+1],s=n[3*u+2],c=r[3*u+0],o=r[3*u+1],a=r[3*u+2];(-1===e||c<o)&&(i[f++]=c,i[f++]=o,i[f++]=u,i[f++]=e),(-1===t||o<a)&&(i[f++]=o,i[f++]=a,i[f++]=u,i[f++]=t),(-1===s||a<c)&&(i[f++]=a,i[f++]=c,i[f++]=u,i[f++]=s)}return i}(e),m=b.length/4,B=t.allocate(m);let E=0;const T=m,A=r.allocate(T);let O=0,w=0,S=0;const M=Object(j.h)(0,m),L=new Float32Array(m);Object(C.b)(L,(e,t,r)=>{s.getVec(b[4*t+0],d),s.getVec(b[4*t+1],l),r[t]=Object(g.j)(d,l)}),M.sort((e,t)=>L[t]-L[e]);const v=new Array,x=new Array;for(let j=0;j<m;j++){const e=M[j],n=L[e],u=b[4*e+0],m=b[4*e+1],T=b[4*e+2],_=b[4*e+3],F=-1===_;if(s.getVec(u,d),s.getVec(m,l),F)Object(g.s)(y,p[3*T+0],p[3*T+1],p[3*T+2]),Object(g.h)(h,y),a.componentIndex=i.get(u),a.cosAngle=Object(g.e)(y,h);else{if(Object(g.s)(y,p[3*T+0],p[3*T+1],p[3*T+2]),Object(g.s)(h,p[3*_+0],p[3*_+1],p[3*_+2]),a.componentIndex=i.get(u),a.cosAngle=Object(g.e)(y,h),P(a,o))continue;a.cosAngle<-.9999&&Object(g.h)(h,y)}w+=n,S++,F||U(a,c)?(t.write(B,E++,a),v.push(n)):R(a,f)&&(r.write(A,O++,a),x.push(n))}const _=new Float32Array(v.reverse()),F=new Float32Array(x.reverse());return{regular:{instancesData:t.trim(B,E),lodInfo:{lengths:_}},silhouette:{instancesData:r.trim(A,O),lodInfo:{lengths:F}},averageEdgeLength:w/S}}function U(e,t){return e.cosAngle<t}function P(e,t){return e.cosAngle>t}function R(e,t){const r=Object(N.a)(e.cosAngle),n=V.fwd,s=V.ortho;return Object(g.r)(n,e.position1,e.position0),r*(Object(g.e)(Object(g.d)(s,e.faceNormal0,e.faceNormal1),n)>0?-1:1)>t}const V={edge:{position0:Object(E.e)(),position1:Object(E.e)(),faceNormal0:Object(E.e)(),faceNormal1:Object(E.e)(),componentIndex:0,cosAngle:0},ortho:Object(E.e)(),fwd:Object(E.e)()},Y={v0:Object(E.e)(),v1:Object(E.e)(),v2:Object(E.e)()},k={anglePlanar:4,angleSignificantEdge:35};async function q(e){const t=function(e){return{data:h.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indicesBuffer):"Uint16Array"===e.indicesType?new Uint16Array(e.indicesBuffer):void 0,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}(e),r=D(t),n=[t.data.buffer];return{result:W(r,n),transferList:n}}function D(e){const t=function(e,t,r,i){if(t)return{faces:r,facesLength:i,neighbors:s(r,i,e.count),vertices:e};const f=Object(n.a)(e.buffer,e.stride/4,{originalIndices:r,originalIndicesLength:i}),u=s(f.indices,i,f.uniqueCount);return{faces:f.indices,facesLength:f.indices.length,neighbors:u,vertices:h.createView(f.buffer)}}(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return z.updateSettings(e.writerSettings),H.updateSettings(e.writerSettings),I(t,z,H)}function W(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:u(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:u(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}const z=new v,H=new x},589:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return E})),r.d(t,"c",(function(){return Y})),r.d(t,"d",(function(){return W})),r.d(t,"e",(function(){return U})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return m})),r.d(t,"h",(function(){return B})),r.d(t,"i",(function(){return g})),r.d(t,"j",(function(){return v})),r.d(t,"k",(function(){return j})),r.d(t,"l",(function(){return w})),r.d(t,"m",(function(){return y})),r.d(t,"n",(function(){return T})),r.d(t,"o",(function(){return k})),r.d(t,"p",(function(){return z})),r.d(t,"q",(function(){return P})),r.d(t,"r",(function(){return x})),r.d(t,"s",(function(){return N})),r.d(t,"t",(function(){return S})),r.d(t,"u",(function(){return h})),r.d(t,"v",(function(){return A})),r.d(t,"w",(function(){return q})),r.d(t,"x",(function(){return H})),r.d(t,"y",(function(){return R})),r.d(t,"z",(function(){return _})),r.d(t,"A",(function(){return C})),r.d(t,"B",(function(){return M})),r.d(t,"C",(function(){return p})),r.d(t,"D",(function(){return O})),r.d(t,"E",(function(){return D})),r.d(t,"F",(function(){return J})),r.d(t,"G",(function(){return V})),r.d(t,"H",(function(){return F})),r.d(t,"I",(function(){return I})),r.d(t,"J",(function(){return L}));class n{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===n&&(n=9*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==s?new i(t,f):new i(t,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<9;n++)t[n]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<9;n++)this.typedBuffer[r++]=t[n]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;for(let u=0;u<9;++u)n[i++]=s[f++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=9;class s{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===n&&(n=16*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==s?new i(t,f):new i(t,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<16;n++)t[n]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<16;n++)this.typedBuffer[r++]=t[n]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;for(let u=0;u<16;++u)n[i++]=s[f++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=16;class i{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=1;const i=this.TypedArrayConstructor;void 0===n&&(n=i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==s?new i(t,f):new i(t,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=1;var f=r(28);class u{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===n&&(n=2*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==s?new i(t,f):new i(t,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,Object(f.m)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;n[i++]=s[f++],n[i]=s[f]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var c=r(38);class o{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===n&&(n=3*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==s?new i(t,f):new i(t,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,Object(c.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=n}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;n[i++]=s[f++],n[i++]=s[f++],n[i]=s[f]}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=3;var a=r(622);class d{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===n&&(n=4*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==s?new i(t,f):new i(t,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,Object(a.k)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=n,this.typedBuffer[e]=s}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;n[i++]=s[f++],n[i++]=s[f++],n[i++]=s[f++],n[i]=s[f]}get buffer(){return this.typedBuffer.buffer}}d.ElementCount=4;class l extends i{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class y extends u{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(y,e,t)}static fromTypedArray(e,t){return new y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}y.ElementType="f32";class h extends o{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class p extends d{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class b extends n{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f32";class m extends n{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class B extends s{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class g extends s{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class E extends i{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class T extends u{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class A extends o{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class O extends d{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="f64";class w extends i{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class S extends u{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class M extends o{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u8";class L extends d{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class v extends i{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u16";class x extends u{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class _ extends o{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u16";class F extends d{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u16";class j extends i{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="u32";class N extends u{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class C extends o{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u32";class I extends d{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u32";class U extends i{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class P extends u{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="i8";class R extends o{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="i8";class V extends d{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class Y extends i{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i16";class k extends u{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class q extends o{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class D extends d{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i16";class W extends i{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i32";class z extends u{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i32";class H extends o{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";class J extends d{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(J,e,t)}static fromTypedArray(e,t){return new J(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}J.ElementType="i32"},622:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return y})),r.d(t,"f",(function(){return h})),r.d(t,"g",(function(){return g})),r.d(t,"h",(function(){return E})),r.d(t,"i",(function(){return m})),r.d(t,"j",(function(){return p})),r.d(t,"k",(function(){return i})),r.d(t,"l",(function(){return B}));var n=r(31);function s(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function i(e,t,r,n,s){return e[0]=t,e[1]=r,e[2]=n,e[3]=s,e}function f(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function u(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function c(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function o(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function a(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function d(e,t){const r=t[0]-e[0],n=t[1]-e[1],s=t[2]-e[2],i=t[3]-e[3];return Math.sqrt(r*r+n*n+s*s+i*i)}function l(e,t){const r=t[0]-e[0],n=t[1]-e[1],s=t[2]-e[2],i=t[3]-e[3];return r*r+n*n+s*s+i*i}function y(e){const t=e[0],r=e[1],n=e[2],s=e[3];return Math.sqrt(t*t+r*r+n*n+s*s)}function h(e){const t=e[0],r=e[1],n=e[2],s=e[3];return t*t+r*r+n*n+s*s}function p(e,t){const r=t[0],n=t[1],s=t[2],i=t[3];let f=r*r+n*n+s*s+i*i;return f>0&&(f=1/Math.sqrt(f),e[0]=r*f,e[1]=n*f,e[2]=s*f,e[3]=i*f),e}function b(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function m(e,t,r,n){const s=t[0],i=t[1],f=t[2],u=t[3];return e[0]=s+n*(r[0]-s),e[1]=i+n*(r[1]-i),e[2]=f+n*(r[2]-f),e[3]=u+n*(r[3]-u),e}function B(e,t,r){const n=t[0],s=t[1],i=t[2],f=t[3];return e[0]=r[0]*n+r[4]*s+r[8]*i+r[12]*f,e[1]=r[1]*n+r[5]*s+r[9]*i+r[13]*f,e[2]=r[2]*n+r[6]*s+r[10]*i+r[14]*f,e[3]=r[3]*n+r[7]*s+r[11]*i+r[15]*f,e}function g(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function E(e,t){const r=e[0],s=e[1],i=e[2],f=e[3],u=t[0],c=t[1],o=t[2],a=t[3];return Math.abs(r-u)<=n.a*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(s-c)<=n.a*Math.max(1,Math.abs(s),Math.abs(c))&&Math.abs(i-o)<=n.a*Math.max(1,Math.abs(i),Math.abs(o))&&Math.abs(f-a)<=n.a*Math.max(1,Math.abs(f),Math.abs(a))}const T=u,A=c,O=o,w=d,S=l,M=y,L=h;Object.freeze({__proto__:null,copy:s,set:i,add:f,subtract:u,multiply:c,divide:o,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},min:function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e},max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:a,scaleAndAdd:function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e},distance:d,squaredDistance:l,length:y,squaredLength:h,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},normalize:p,dot:b,lerp:m,random:function(e,t){let r,s,i,f,u,c;t=t||1;do{r=2*Object(n.b)()-1,s=2*Object(n.b)()-1,u=r*r+s*s}while(u>=1);do{i=2*Object(n.b)()-1,f=2*Object(n.b)()-1,c=i*i+f*f}while(c>=1);const o=Math.sqrt((1-u)/c);return e[0]=t*r,e[1]=t*s,e[2]=t*i*o,e[3]=t*f*o,e},transformMat4:B,transformQuat:function(e,t,r){const n=t[0],s=t[1],i=t[2],f=r[0],u=r[1],c=r[2],o=r[3],a=o*n+u*i-c*s,d=o*s+c*n-f*i,l=o*i+f*s-u*n,y=-f*n-u*s-c*i;return e[0]=a*o+y*-f+d*-c-l*-u,e[1]=d*o+y*-u+l*-f-a*-c,e[2]=l*o+y*-c+a*-u-d*-f,e[3]=t[3],e},str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},exactEquals:g,equals:E,sub:T,mul:A,div:O,dist:w,sqrDist:S,len:M,sqrLen:L})},673:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return f}));r(5);function n(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return}}function s(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function i(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function f(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}},702:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(589),s=r(673);class i{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new i(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,n){const s=this.stride;if(s%4==0){const i=new Uint32Array(e.buffer,t*s,n*s/4);new Uint32Array(this.buffer,r*s,n*s/4).set(i)}else{const i=new Uint8Array(e.buffer,t*s,n*s);new Uint8Array(this.buffer,r*s,n*s).set(i)}}}class f{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this.appendField(e,n.m,t),this}vec2f64(e,t){return this.appendField(e,n.n,t),this}vec3f(e,t){return this.appendField(e,n.u,t),this}vec3f64(e,t){return this.appendField(e,n.v,t),this}vec4f(e,t){return this.appendField(e,n.C,t),this}vec4f64(e,t){return this.appendField(e,n.D,t),this}mat3f(e,t){return this.appendField(e,n.f,t),this}mat3f64(e,t){return this.appendField(e,n.g,t),this}mat4f(e,t){return this.appendField(e,n.h,t),this}mat4f64(e,t){return this.appendField(e,n.i,t),this}vec4u8(e,t){return this.appendField(e,n.J,t),this}f32(e,t){return this.appendField(e,n.a,t),this}f64(e,t){return this.appendField(e,n.b,t),this}u8(e,t){return this.appendField(e,n.l,t),this}u16(e,t){return this.appendField(e,n.j,t),this}i8(e,t){return this.appendField(e,n.e,t),this}vec2i8(e,t){return this.appendField(e,n.q,t),this}vec2i16(e,t){return this.appendField(e,n.o,t),this}vec2u8(e,t){return this.appendField(e,n.t,t),this}vec4u16(e,t){return this.appendField(e,n.H,t),this}u32(e,t){return this.appendField(e,n.k,t),this}appendField(e,t,r){const n=t.ElementCount*Object(s.a)(t.ElementType),i=this.stride;this.fields.set(e,{size:n,constructor:t,offset:i,optional:r}),this.stride+=n,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new i(this,e)}createView(e){return new i(this,e)}clone(){const e=new f;return e.stride=this.stride,e.fields=new Map,this.fields.forEach((t,r)=>e.fields.set(r,t)),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function u(){return new f}},773:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(52);function s(e,t,r){var s;const o=e.byteLength/(4*t),a=new Uint32Array(e,0,o*t);let d=new Uint32Array(o);const l=null!=(s=null==r?void 0:r.minReduction)?s:0,y=(null==r?void 0:r.originalIndices)||null,h=y?y.length:0,p=(null==r?void 0:r.componentOffsets)||null;let b=0;if(p)for(let n=0;n<p.length-1;n++){const e=p[n+1]-p[n];e>b&&(b=e)}else b=o;const m=Math.floor(1.1*b)+1;(null==c||c.length<2*m)&&(c=new Uint32Array(Object(n.k)(2*m)));for(let n=0;n<2*m;n++)c[n]=0;let B=0;const g=!!p&&!!y,E=g?h:o,T=g?new Uint32Array(h):null,A=1.96;let O=0!==l?Math.ceil(7.84*A/(l*l)*l*(1-l)):E,w=1,S=p?p[1]:E;for(let n=0;n<E;n++){if(n===O){const e=1-B/n;if(e+A*Math.sqrt(e*(1-e)/n)<l)return null;O*=2}if(n===S){for(let e=0;e<2*m;e++)c[e]=0;if(y)for(let e=p[w-1];e<p[w];e++)T[e]=d[y[e]];S=p[++w]}const e=g?y[n]:n,r=e*t,s=u(a,r,t);let f=s%m,o=B;for(;0!==c[2*f+1];){if(c[2*f]===s){const e=c[2*f+1]-1;if(i(a,r,e*t,t)){o=d[e];break}}f++,f>=m&&(f-=m)}o===B&&(c[2*f]=s,c[2*f+1]=e+1,B++),d[e]=o}if(0!==l&&1-B/o<l)return null;if(g){for(let e=p[w-1];e<T.length;e++)T[e]=d[y[e]];d=T}const M=new Uint32Array(t*B);B=0;for(let n=0;n<E;n++)d[n]===B&&(f(a,(g?y[n]:n)*t,M,B*t,t),B++);if(y&&!g){const e=new Uint32Array(h);for(let t=0;t<e.length;t++)e[t]=d[y[t]];d=e}return{buffer:M.buffer,indices:d,uniqueCount:B}}function i(e,t,r,n){for(let s=0;s<n;s++)if(e[t+s]!==e[r+s])return!1;return!0}function f(e,t,r,n,s){for(let i=0;i<s;i++)r[n+i]=e[t+i]}function u(e,t,r){let n=0;for(let s=0;s<r;s++)n=e[t+s]+n|0,n=n+(n<<11)+(n>>>2)|0;return n>>>0}let c=null}}]);
//# sourceMappingURL=75.e764548c.chunk.js.map