(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[13],{657:function(e,t,r){"use strict";function n(){return[0,0,0,0]}function s(e,t,r,n){return[e,t,r,n]}function o(e,t){return new Float64Array(e,t,4)}function i(){return[0,0,0,0]}function a(){return s(1,1,1,1)}function u(){return s(1,0,0,0)}function c(){return s(0,1,0,0)}function f(){return s(0,0,1,0)}function d(){return s(0,0,0,1)}r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return s}));const l=[0,0,0,0],p=a(),h=u(),m=c(),b=f(),y=d();Object.freeze({__proto__:null,create:n,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:s,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let n=0;n<r;++n)t[n]=e[n];return t},createView:o,zeros:i,ones:a,unitX:u,unitY:c,unitZ:f,unitW:d,ZEROS:l,ONES:p,UNIT_X:h,UNIT_Y:m,UNIT_Z:b,UNIT_W:y})},673:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return i}));r(5);function n(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return}}function s(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function o(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function i(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}},723:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(9);class s{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new n.a(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new s(this.major,this.minor,this._context)}static parse(e,t=""){const[r,o]=e.split("."),i=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(i))throw new n.a((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!o||!o.match||!o.match(i))throw new n.a((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const a=parseInt(r,10),u=parseInt(o,10);return new s(a,u,t)}}},730:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o}));var n=r(673);function s(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=o[c],n[u+1]=o[c+1],u+=s,c+=i}function o(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,u=t.typedBufferStride,c=r?r.count:t.count;let f=(r&&r.dstIndex?r.dstIndex:0)*i,d=(r&&r.srcIndex?r.srcIndex:0)*u;if(Object(n.b)(t.elementType)){const e=Object(n.d)(t.elementType);if(Object(n.c)(t.elementType))for(let t=0;t<c;++t)o[f]=Math.max(a[d]/e,-1),o[f+1]=Math.max(a[d+1]/e,-1),f+=i,d+=u;else for(let t=0;t<c;++t)o[f]=a[d]/e,o[f+1]=a[d+1]/e,f+=i,d+=u}else s(e,t,r);return e}function i(e,t,r,n){var s,o;const i=e.typedBuffer,a=e.typedBufferStride,u=null!=(s=null==n?void 0:n.count)?s:e.count;let c=(null!=(o=null==n?void 0:n.dstIndex)?o:0)*a;for(let f=0;f<u;++f)i[c]=t,i[c+1]=r,c+=a}Object.freeze({__proto__:null,copy:s,normalizeIntegerBuffer:o,fill:i})},731:function(e,t,r){"use strict";function n(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=o[c],n[u+1]=o[c+1],n[u+2]=o[c+2],n[u+3]=o[c+3],u+=s,c+=i}function s(e,t,r,n,s,o){var i,a;const u=e.typedBuffer,c=e.typedBufferStride,f=null!=(i=null==o?void 0:o.count)?i:e.count;let d=(null!=(a=null==o?void 0:o.dstIndex)?a:0)*c;for(let l=0;l<f;++l)u[d]=t,u[d+1]=r,u[d+2]=n,u[d+3]=s,d+=c}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s}));Object.freeze({__proto__:null,copy:n,fill:s})},760:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return p}));var n=r(3),s=r(308),o=r(575),i=r(579),a=r(605),u=r(59),c=r(64),f=r(657);class d{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=s.a.before(()=>this.reset())}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=Object(n.m)(this.tickHandle)),this.itemsPtr=0,this.items=Object(n.m)(this.items),this.buffers=Object(n.m)(this.buffers)}get(){0===this.itemsPtr&&Object(s.a)(()=>{});const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=l){return new d(16,u.b,e)}static createVec3f64(e=l){return new d(24,c.d,e)}static createVec4f64(e=l){return new d(32,f.a,e)}static createMat3f64(e=l){return new d(72,o.a,e)}static createMat4f64(e=l){return new d(128,i.b,e)}static createQuatf64(e=l){return new d(32,a.d,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const l=4096,p=(d.createVec2f64(),d.createVec3f64()),h=(d.createVec4f64(),d.createMat3f64(),d.createMat4f64());d.createQuatf64()},814:function(e,t,r){"use strict";function n(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}r.d(t,"a",(function(){return n}));Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=o[c],u+=s,c+=i},makeDense:n})},815:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(3),s=r(308);class o{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=s.a.before(()=>this.reset()),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=Object(n.m)(this.tickHandle)),this.items=Object(n.m)(this.items)}get(){return 0===this.itemsPtr&&Object(s.a)(()=>{}),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*i);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,i));e++)this.items.push(this.allocator())}}const i=1024},824:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return p}));var n=r(38),s=r(64),o=r(815);r(28),r(52),r(760);function i(e){return e?{origin:Object(s.c)(e.origin),vector:Object(s.c)(e.vector)}:{origin:Object(s.e)(),vector:Object(s.e)()}}Object(s.e)(),Object(s.e)(),new o.a(()=>({origin:null,vector:null}));new o.a(i),new o.a(()=>({p0:null,p1:null,p2:null}));const a=Object(s.e)(),u=Object(s.e)();let c=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const f=new Uint16Array([0]),d=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function l(e){if(1===e)return f;if(e<d.length)return new Uint16Array(d.buffer,0,e);if(e>c.length){const t=Math.max(2*c.length,e);c=new Uint32Array(t);for(let e=0;e<c.length;e++)c[e]=e}return new Uint32Array(c.buffer,0,e)}function p(e){if(1===e)return new Uint16Array(f);if(e<d.length)return new Uint16Array(d.slice(0,e));if(e>c.length){const t=new Uint32Array(e);for(let e=0;e<t.length;e++)t[e]=e;return t}return new Uint32Array(c.slice(0,e))}function h(e,t,r){if(!e)return!1;const{size:s,data:o}=e;Object(n.s)(r,0,0,0),Object(n.s)(w,0,0,0);let i=0,c=0;for(let p=0;p<t.length-2;p+=3){const e=t[p+0]*s,h=t[p+1]*s,m=t[p+2]*s;Object(n.s)(b,o[e+0],o[e+1],o[e+2]),Object(n.s)(y,o[h+0],o[h+1],o[h+2]),Object(n.s)(x,o[m+0],o[m+1],o[m+2]);const O=(f=b,d=y,l=x,Object(n.g)(a,d,f),Object(n.g)(u,l,f),Object(n.m)(Object(n.d)(a,a,u))/2);O?(Object(n.c)(b,b,y),Object(n.c)(b,b,x),Object(n.b)(b,b,1/3*O),Object(n.c)(r,r,b),i+=O):(Object(n.c)(w,w,b),Object(n.c)(w,w,y),Object(n.c)(w,w,x),c+=3)}var f,d,l;return(0!==c||0!==i)&&(0!==i?(Object(n.b)(r,r,1/i),!0):0!==c&&(Object(n.b)(r,w,1/c),!0))}function m(e,t,r){if(!e||!t)return!1;const{size:s,data:o}=e;Object(n.s)(r,0,0,0);let i=-1,a=0;for(let n=0;n<t.length;n++){const e=t[n]*s;i!==e&&(r[0]+=o[e+0],r[1]+=o[e+1],r[2]+=o[e+2],a++),i=e}return a>1&&Object(n.b)(r,r,1/a),a>0}const b=Object(s.e)(),y=Object(s.e)(),x=Object(s.e)(),w=Object(s.e)()},857:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s}));var n=r(832);function s(e,t,r){if(e.count!==t.count)return void n.a.error("source and destination buffers need to have the same number of elements");const s=e.count,o=r[0],i=r[1],a=r[2],u=r[3],c=r[4],f=r[5],d=r[6],l=r[7],p=r[8],h=e.typedBuffer,m=e.typedBufferStride,b=t.typedBuffer,y=t.typedBufferStride;for(let n=0;n<s;n++){const e=n*m,t=n*y,r=b[t],s=b[t+1],x=b[t+2],w=b[t+3];h[e]=o*r+u*s+d*x,h[e+1]=i*r+c*s+l*x,h[e+2]=a*r+f*s+p*x,h[e+3]=w}}function o(e,t,r){const n=Math.min(e.count,t.count),s=e.typedBuffer,o=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*o,t=u*a;s[e]=r*i[t],s[e+1]=r*i[t+1],s[e+2]=r*i[t+2],s[e+3]=r*i[t+3]}}function i(e,t,r){const n=Math.min(e.count,t.count),s=e.typedBuffer,o=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*o,t=u*a;s[e]=i[t]>>r,s[e+1]=i[t+1]>>r,s[e+2]=i[t+2]>>r,s[e+3]=i[t+3]>>r}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void n.a.error("source and destination buffers need to have the same number of elements");const s=e.count,o=r[0],i=r[1],a=r[2],u=r[3],c=r[4],f=r[5],d=r[6],l=r[7],p=r[8],h=r[9],m=r[10],b=r[11],y=r[12],x=r[13],w=r[14],O=r[15],g=e.typedBuffer,T=e.typedBufferStride,j=t.typedBuffer,S=t.typedBufferStride;for(let n=0;n<s;n++){const e=n*T,t=n*S,r=j[t],s=j[t+1],v=j[t+2],C=j[t+3];g[e]=o*r+c*s+p*v+y*C,g[e+1]=i*r+f*s+h*v+x*C,g[e+2]=a*r+d*s+m*v+w*C,g[e+3]=u*r+l*s+b*v+O*C}},transformMat3:s,scale:o,shiftRight:i})},858:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(45),s=r(122),o=r(9),i=r(3),a=r(12),u=r(14);class c{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return Object(u.u)(e)?(Object(a.v)(t),Object(u.j)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if(Object(i.h)(this.streamDataRequester))return(await Object(n.default)(t,{responseType:f[e]})).data;const u=await Object(s.c)(this.streamDataRequester.request(t,e,r));if(!0===u.ok)return u.value;throw Object(a.u)(u.error),new o.a("","Request for resource failed: "+u.error)}}const f={image:"image",binary:"array-buffer",json:"json"}},859:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o}));var n=r(123),s=r(824);function o(e,t=s.c){return"number"==typeof e?t(e):Object(n.i)(e)||Object(n.k)(e)?new Uint32Array(e):e}function i(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let s=0;s<r;s+=1)if(s%2==0){const r=e[s],o=e[s+1],i=e[s+2];n[t++]=r,n[t++]=o,n[t++]=i}else{const r=e[s+1],o=e[s],i=e[s+2];n[t++]=r,n[t++]=o,n[t++]=i}}return n}function a(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}{const t=e[0];let s=e[1],o=0;for(let i=0;i<r;++i){const r=e[i+2];n[o++]=t,n[o++]=s,n[o++]=r,s=r}return n}}},860:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=2.1},868:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));var n=r(3),s=r(579),o=r(9);const i=r(4).a.getLogger("esri.views.3d.glTF");var a=r(206),u=r(14),c=r(723),f=r(201),d=r(623),l=r(605),p=r(589),h=r(814);class m{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const b={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},y={pbrMetallicRoughness:b,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},x={ESRI_externalColorMixMode:"tint"},w=(e={})=>{const t={...b,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Object(a.a)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...x,...e.extras});return{...y,...e,pbrMetallicRoughness:t,extras:r}};const O={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};const g=1179937895,T=1313821514,j=5130562;class S{constructor(e,t,r,n,s){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=s,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,(e,n,s)=>(t=n||"",r=s||"","")),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,n){if(Object(u.u)(r)){const n=Object(u.i)(r);if("model/gltf-binary"!==n.mediaType)try{const s=JSON.parse(n.isBase64?atob(n.data):n.data);return new S(e,t,r,s)}catch{}const s=Object(u.j)(r);if(S.isGLBData(s))return this.fromGLBData(e,t,r,s)}if(r.endsWith(".gltf")){const s=await e.loadJSON(r,n);return new S(e,t,r,s)}const s=await e.loadBinary(r,n);if(S.isGLBData(s))return this.fromGLBData(e,t,r,s);const o=await e.loadJSON(r,n);return new S(e,t,r,o)}static isGLBData(e){const t=new m(e);return t.remainingBytes()>=4&&t.readUint32()===g}static async fromGLBData(e,t,r,n){const s=await S.parseGLBData(t,n);return new S(e,t,r,s.json,s.binaryData)}static async parseGLBData(e,t){const r=new m(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),s=r.readUint32(),o=r.readUint32();e.assert(n===g,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=o,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==s,"An unsupported GLB container version was detected. Only version 2 is supported.");let i,a,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(n===T,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),i=await A(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(n!==j,"Second GLB chunk expected to be BIN."),a=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return i||e.error("No GLB JSON chunk detected."),{json:i,binaryData:a}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let s=this.bufferCache.get(e);if(!s){const o=await this.context.loadBinary(this.resolveUri(r.uri),t);s=new Uint8Array(o),this.bufferCache.set(e,s),n.assert(s.byteLength===r.byteLength,"Buffer byte lengths should match.")}return s}async getAccessor(e,t){const r=this.json.accessors[e],n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),n.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const s=this.json.bufferViews[r.bufferView],o=await this.getBuffer(s.buffer,t),i=B[r.type],a=U[r.componentType],u=i*a,c=s.byteStride||u;return{raw:o.buffer,byteStride:c,byteOffset:o.byteOffset+(s.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===u,componentCount:i,componentByteSize:a,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Object(h.a)(this.wrapAccessor(p.l,r));case 5123:return Object(h.a)(this.wrapAccessor(p.j,r));case 5125:return Object(h.a)(this.wrapAccessor(p.k,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+M[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(p.u,n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+M[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(p.u,n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+M[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new p.C(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(p.m,n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new p.q(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new p.t(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new p.o(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new p.r(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new p.s(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new p.m(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void Object(a.a)(e.componentType)}}(n))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(p.C,n);if(5121===n.componentType)return this.wrapAccessor(p.J,n);if(5123===n.componentType)return this.wrapAccessor(p.H,n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(p.u,n);if(5121===n.componentType)return this.wrapAccessor(p.B,n);if(5123===n.componentType)return this.wrapAccessor(p.z,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+M[n.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){const n=this.errorContext;let s=this.materialCache.get(e.material);if(!s){const o=null!=e.material?w(this.json.materials[e.material]):w(),i=o.pbrMetallicRoughness,a=this.hasVertexColors(e);let u,c,f,d,l;i.baseColorTexture&&(n.errorUnsupportedIf(0!==(i.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),u=await this.getTexture(i.baseColorTexture.index,t)),o.normalTexture&&(0!==(o.normalTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):c=await this.getTexture(o.normalTexture.index,t)),o.occlusionTexture&&r&&(0!==(o.occlusionTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):f=await this.getTexture(o.occlusionTexture.index,t)),o.emissiveTexture&&r&&(0!==(o.emissiveTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):d=await this.getTexture(o.emissiveTexture.index,t)),i.metallicRoughnessTexture&&r&&(0!==(i.metallicRoughnessTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):l=await this.getTexture(i.metallicRoughnessTexture.index,t));const p=null!=e.material?e.material:-1;s={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:i.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:u,normalTexture:c,name:o.name,id:p,occlusionTexture:f,emissiveTexture:d,emissiveFactor:o.emissiveFactor,metallicFactor:i.metallicFactor,roughnessFactor:i.roughnessFactor,metallicRoughnessTexture:l,vertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return s}async getTexture(e,t){const r=this.errorContext,n=this.json.textures[e],s=(e=>({...O,...e}))(null!=n.sampler?this.json.samplers[n.sampler]:{});r.errorUnsupportedIf(null==n.source,"Source is expected to be defined for a texture.");const o=this.json.images[n.source];let i=this.textureCache.get(e);if(!i){let n;if(o.uri)n=await this.context.loadImage(this.resolveUri(o.uri),t);else{r.errorUnsupportedIf(null==o.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==o.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[o.bufferView],s=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),n=await async function(e,t){return new Promise((r,n)=>{const s=new Blob([e],{type:t}),o=URL.createObjectURL(s),i=new Image;i.addEventListener("load",()=>{URL.revokeObjectURL(o),"decode"in i?i.decode().then(()=>r(i),()=>r(i)):r(i)}),i.addEventListener("error",e=>{URL.revokeObjectURL(o),n(e)}),i.src=o})}(new Uint8Array(s.buffer,s.byteOffset+(e.byteOffset||0),e.byteLength),o.mimeType)}const a=e=>33071===e||33648===e||10497===e,u=e=>(r.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);i={data:n,wrapS:a(s.wrapS)?s.wrapS:u(s.wrapS),wrapT:a(s.wrapT)?s.wrapT:u(s.wrapT),minFilter:s.minFilter,name:o.name,id:e},this.textureCache.set(e,i)}return i}getNodeTransform(e){if(void 0===e)return C;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=Object(f.i)(Object(s.d)(),r,n.matrix):n.translation||n.rotation||n.scale?(t=Object(s.c)(r),n.translation&&Object(f.m)(t,t,n.translation),n.rotation&&(I[3]=Object(d.b)(I,n.rotation),Object(f.b)(t,t,I[3],I)),n.scale&&Object(f.l)(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Object(u.A)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=c.a.parse(this.json.asset.version,"glTF");v.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(e=>{this.nodeParentMap.set(e,t)})})}}const v=new c.a(2,0,"glTF"),C=Object(f.j)(Object(s.d)(),Math.PI/2),I=Object(l.b)(),B={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},U={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function A(e){return new Promise((t,r)=>{const n=new Blob([e]),s=new FileReader;s.onload=()=>{const e=s.result;t(JSON.parse(e))},s.onerror=e=>{r(e)},s.readAsText(n)})}const M={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let R=0;async function _(e,t,r={},o=!0){const i=await S.load(e,P,t,r),a="gltf_"+R++,u={lods:[],materials:new Map,textures:new Map,meta:N(i)},c=!(!i.json.asset.extras||"symbolResource"!==i.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,n=r.scenes[r.scene||0].nodes,s=n.length>1;for(const i of n){const e=r.nodes[i],t=[o(i,0)];if(E(e)&&!s){const r=e.extensions.MSFT_lod.ids;t.push(...r.map((e,t)=>o(e,t+1)))}await Promise.all(t)}async function o(n,s){const i=r.nodes[n],a=e.getNodeTransform(n);if(P.warnUnsupportedIf(null!=i.weights,"Morph targets are not supported."),null!=i.mesh){const e=r.meshes[i.mesh];for(const r of e.primitives)await t(r,a,s,e.name)}for(const e of i.children||[])await o(e,s)}}(i,async(e,t,c,f)=>{const d=void 0!==e.mode?e.mode:4,l=4===d||5===d||6===d?d:null;if(Object(n.h)(l))return void P.warnUnsupported("Unsupported primitive mode ("+D[d]+"). Skipping primitive.");if(!i.hasPositions(e))return void P.warn("Skipping primitive without POSITION vertex attribute.");const p=await i.getMaterial(e,r,o),h={transform:Object(s.c)(t),attributes:{position:await i.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await i.getIndexData(e,r),primitiveType:l,material:L(u,p,a)};i.hasNormals(e)&&(h.attributes.normal=await i.getNormalData(e,r)),i.hasTangents(e)&&(h.attributes.tangent=await i.getTangentData(e,r)),i.hasTextureCoordinates(e)&&(h.attributes.texCoord0=await i.getTextureCoordinates(e,r)),i.hasVertexColors(e)&&(h.attributes.color=await i.getVertexColors(e,r));let m=null;Object(n.i)(u.meta)&&Object(n.i)(u.meta.ESRI_lod)&&"screenSpaceRadius"===u.meta.ESRI_lod.metric&&(m=u.meta.ESRI_lod.thresholds[c]),u.lods[c]=u.lods[c]||{parts:[],name:f,lodThreshold:m},u.lods[c].parts.push(h)}),{model:u,meta:{isEsriSymbolResource:c,uri:i.uri},customMeta:{}}}function N(e){const t=e.json;let r=null;return t.nodes.forEach(e=>{const t=e.extras;Object(n.i)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)}),r}function E(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function L(e,t,r){const n=t=>{const n=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:F.some(e=>e===t.minFilter),noUnpackFlip:!0});e.textures.set(n,r)}return n},s=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(s)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(s,r)}return s}const P=new class{error(e){throw new o.a("gltf-loader-error",e)}errorUnsupported(e){throw new o.a("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){i.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},F=[9987,9985],D=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"]},871:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(673);Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f){for(let e=0;e<9;++e)n[u+e]=o[c+e];u+=s,c+=i}}});Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f){for(let e=0;e<16;++e)n[u+e]=o[c+e];u+=s,c+=i}}}),r(814),r(730),r(651),r(731);function s(e,t){return new e(new ArrayBuffer(t*e.ElementCount*Object(n.a)(e.ElementType)))}}}]);
//# sourceMappingURL=13.e3d43c37.chunk.js.map