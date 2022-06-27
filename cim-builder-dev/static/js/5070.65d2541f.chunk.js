"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[5070],{11873:(t,e,n)=>{function i(){return[1,0,0,0,1,0,0,0,1]}function s(t,e){return new Float64Array(t,e,9)}n.d(e,{a:()=>s,c:()=>i});Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,e,n,i,s,r,o,c,a){return[t,e,n,i,s,r,o,c,a]},createView:s},Symbol.toStringTag,{value:"Module"}))},81949:(t,e,n)=>{function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function s(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function r(t,e){return new Float64Array(t,e,16)}n.d(e,{I:()=>o,a:()=>r,b:()=>s,c:()=>i});const o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:s,fromValues:function(t,e,n,i,s,r,o,c,a,h,u,l,d,f,_,m){return[t,e,n,i,s,r,o,c,a,h,u,l,d,f,_,m]},createView:r,IDENTITY:o},Symbol.toStringTag,{value:"Module"}))},98131:(t,e,n)=>{function i(){return[0,0,0,1]}function s(t){return[t[0],t[1],t[2],t[3]]}function r(t,e){return new Float64Array(t,e,4)}n.d(e,{I:()=>o,a:()=>i,b:()=>s,c:()=>r});const o=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:s,fromValues:function(t,e,n,i){return[t,e,n,i]},createView:r,IDENTITY:o},Symbol.toStringTag,{value:"Module"}))},71417:(t,e,n)=>{n.d(e,{b:()=>p,c:()=>g,d:()=>T,g:()=>b,i:()=>E,m:()=>P});n(93169);var i,s=n(32718),r=n(16889),o=n(92026),c=n(14226),a=n(11186),h=n(71353),u=n(90045),l=n(67077);!function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"}(i||(i={}));var d=n(40885),f=n(40927),_=n(11185);const m=s.Z.getLogger("esri.geometry.support.sphere");function g(){return(0,l.c)()}function p(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g();return(0,u.c)(e,t)}function T(t){return t[3]}function b(t){return t}function M(t,e,n){if((0,o.Wi)(e))return!1;const{origin:i,direction:s}=e,r=O;r[0]=i[0]-t[0],r[1]=i[1]-t[1],r[2]=i[2]-t[2];const c=s[0]*s[0]+s[1]*s[1]+s[2]*s[2],a=2*(s[0]*r[0]+s[1]*r[1]+s[2]*r[2]),h=a*a-4*c*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(h<0)return!1;const u=Math.sqrt(h);let l=(-a-u)/(2*c);const d=(-a+u)/(2*c);return(l<0||d<l&&d>0)&&(l=d),!(l<0)&&(n&&(n[0]=i[0]+s[0]*l,n[1]=i[1]+s[1]*l,n[2]=i[2]+s[2]*l),!0)}const O=(0,h.c)();function E(t,e){return M(t,e,null)}function x(t,e,n){const i=_.WM.get(),s=_.MP.get();(0,a.f)(i,e.origin,e.direction);const r=T(t);(0,a.f)(n,i,e.origin),(0,a.g)(n,n,1/(0,a.l)(n)*r);const o=N(t,e.origin),h=(0,f.EU)(e.origin,n);return(0,c.d)(s,h+o,i),(0,a.m)(n,n,s),n}function R(t,e,n){const i=(0,a.b)(_.WM.get(),e,t),s=(0,a.g)(_.WM.get(),i,t[3]/(0,a.l)(i));return(0,a.a)(n,s,t)}function N(t,e){const n=(0,a.b)(_.WM.get(),e,t),i=(0,a.l)(n),s=T(t),o=s+Math.abs(s-i);return(0,r.ZF)(s/o)}const A=(0,h.c)();function v(t,e,n,s){const o=(0,a.b)(A,e,t);switch(n){case i.X:{const t=(0,r.jE)(o,A)[2];return(0,a.s)(s,-Math.sin(t),Math.cos(t),0)}case i.Y:{const t=(0,r.jE)(o,A),e=t[1],n=t[2],i=Math.sin(e);return(0,a.s)(s,-i*Math.cos(n),-i*Math.sin(n),Math.cos(e))}case i.Z:return(0,a.n)(s,o);default:return}}function S(t,e){const n=(0,a.b)(y,e,t);return(0,a.l)(n)-t[3]}function P(t,e){const n=(0,a.d)(t,e),i=T(t);return n<=i*i}const y=(0,h.c)(),F=g();Object.freeze(Object.defineProperty({__proto__:null,create:g,copy:p,fromCenterAndRadius:function(t,e){return(0,l.f)(t[0],t[1],t[2],e)},wrap:function(t){return t},clear:function(t){t[0]=t[1]=t[2]=t[3]=0},fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},getRadius:T,getCenter:b,fromValues:function(t,e,n,i){return(0,l.f)(t,e,n,i)},elevate:function(t,e,n){return t!==n&&(0,a.c)(n,t),n[3]=t[3]+e,n},setExtent:function(t,e,n){return m.error("sphere.setExtent is not yet supported"),t===n?n:p(t,n)},intersectRay:M,intersectsRay:E,intersectRayClosestSilhouette:function(t,e,n){if(M(t,e,n))return n;const i=x(t,e,_.WM.get());return(0,a.a)(n,e.origin,(0,a.g)(_.WM.get(),e.direction,(0,a.i)(e.origin,i)/(0,a.l)(e.direction))),n},closestPointOnSilhouette:x,closestPoint:function(t,e,n){return M(t,e,n)?n:((0,d.JI)(e,t,n),R(t,n,n))},projectPoint:R,distanceToSilhouette:function(t,e){const n=(0,a.b)(_.WM.get(),e,t),i=(0,a.p)(n),s=t[3]*t[3];return Math.sqrt(Math.abs(i-s))},angleToSilhouette:N,axisAt:v,altitudeAt:S,setAltitudeAt:function(t,e,n,s){const r=S(t,e),o=v(t,e,i.Z,y),c=(0,a.g)(y,o,n-r);return(0,a.a)(s,e,c)},containsPoint:P,tmpSphere:F},Symbol.toStringTag,{value:"Module"}))},21530:(t,e,n)=>{n.d(e,{x:()=>s});var i=n(70758);class s{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*r);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,r));t++)this._items.push(this.allocator())}}const r=1024},40237:(t,e,n)=>{n.d(e,{N:()=>i});const i={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,n){const i=new s(t.getPointX(e),t.getPointY(e),n),r=t.hasZ(e),o=t.hasM(e);return r&&(i.z=t.getPointZ(e)),o&&(i.m=t.getPointM(e)),i},exportPolygon:function(t,e,n){return new r(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,n){return new o(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,n){return new c(t.exportPoints(e),n,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,n){const i=t.hasZ(e),s=t.hasM(e),r=new a(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),n);if(i){const n=t.getZExtent(e);r.zmin=n.vmin,r.zmax=n.vmax}if(s){const n=t.getMExtent(e);r.mmin=n.vmin,r.mmax=n.vmax}return r}};class s{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}class r{constructor(t,e,n,i){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class o{constructor(t,e,n,i){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class c{constructor(t,e,n,i){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class a{constructor(t,e,n,i,s){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=i,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},85981:(t,e,n)=>{n.d(e,{Ue:()=>a,nF:()=>u,zk:()=>h});var i=n(16889),s=n(21530),r=n(11186),o=n(71353),c=n(11185);function a(t){return t?{origin:(0,o.a)(t.origin),vector:(0,o.a)(t.vector)}:{origin:(0,o.c)(),vector:(0,o.c)()}}function h(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a();return(0,r.c)(n.origin,t),(0,r.b)(n.vector,e,t),n}function u(t,e,n){return function(t,e,n,s,o){const{vector:a,origin:h}=t,u=(0,r.b)(c.WM.get(),e,h),l=(0,r.e)(a,u)/(0,r.p)(a);return(0,r.g)(o,a,(0,i.uZ)(l,n,s)),(0,r.a)(o,o,t.origin)}(t,e,0,1,n)}(0,o.c)(),(0,o.c)(),new s.x((()=>({origin:null,vector:null})))},40885:(t,e,n)=>{n.d(e,{JI:()=>a,Ue:()=>o,re:()=>c});n(63780);var i=n(21530),s=n(11186),r=n(71353);n(11185);function o(t){return t?{origin:(0,r.a)(t.origin),direction:(0,r.a)(t.direction)}:{origin:(0,r.c)(),direction:(0,r.c)()}}function c(t,e){const n=h.get();return n.origin=t,n.direction=e,n}function a(t,e,n){const i=(0,s.e)(t.direction,(0,s.b)(n,e,t.origin));return(0,s.a)(n,t.origin,(0,s.g)(n,t.direction,i)),n}const h=new i.x((function(){return{origin:null,direction:null}}))},40927:(t,e,n)=>{n.d(e,{EU:()=>o});var i=n(16889),s=n(11186),r=n(71353);function o(t,e){const n=(0,s.e)(t,e)/((0,s.l)(t)*(0,s.l)(e));return-(0,i.ZF)(n)}(0,r.c)(),(0,r.c)()},11185:(t,e,n)=>{n.d(e,{MP:()=>_,WM:()=>f});var i=n(59896),s=n(70758),r=n(11873),o=n(81949),c=n(98131),a=n(6394),h=n(71353),u=n(67077);class l{constructor(t,e,n){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(n/this.itemByteSize)}get(){0===this._itemsPtr&&(0,s.Y)((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(16,a.c,t)}static createVec3f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(24,h.b,t)}static createVec4f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(32,u.a,t)}static createMat3f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(72,r.a,t)}static createMat4f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(128,o.a,t)}static createQuatf64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(32,c.c,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const d=4*i.Y8.KILOBYTES,f=(l.createVec2f64(),l.createVec3f64()),_=(l.createVec4f64(),l.createMat3f64(),l.createMat4f64());l.createQuatf64()},19995:(t,e,n)=>{n.d(e,{_W:()=>d,iV:()=>m,oj:()=>p});var i=n(92026),s=n(52587),r=n(40237),o=n(92975),c=n(81753);const a=[0,0];function h(t,e){if(!e)return null;if("x"in e){const n={x:0,y:0};return[n.x,n.y]=t(e.x,e.y,a),null!=e.z&&(n.z=e.z),null!=e.m&&(n.m=e.m),n}if("xmin"in e){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=t(e.xmin,e.ymin,a),[n.xmax,n.ymax]=t(e.xmax,e.ymax,a),e.hasZ&&(n.zmin=e.zmin,n.zmax=e.zmax,n.hasZ=!0),e.hasM&&(n.mmin=e.mmin,n.mmax=e.mmax,n.hasM=!0),n}return"rings"in e?{rings:u(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:u(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:l(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:void 0}function u(t,e){const n=[];for(const i of t)n.push(l(i,e));return n}function l(t,e){const n=[];for(const i of t){const t=e(i[0],i[1],[0,0]);n.push(t),i.length>2&&t.push(i[2]),i.length>3&&t.push(i[3])}return n}async function d(t,e){if(!e)return;const n=Array.isArray(t)?t.map((t=>(0,i.pC)(t.geometry)&&t.geometry.spatialReference)):[t];await(0,s.iQ)(n.map((t=>({source:t,dest:e}))))}const f=h.bind(null,c.hG),_=h.bind(null,c.R6);function m(t,e,n,i){if(!t)return t;if(n||(n=e,e=t.spatialReference),!(0,o.JY)(e)||!(0,o.JY)(n)||(0,o.fS)(e,n))return t;if((0,c.Q8)(e,n)){const e=(0,o.sS)(n)?f(t):_(t);return e.spatialReference=n,e}return(0,s.oj)(r.N,[t],e,n,null,i)[0]}const g=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,n){if(!t||!t.length||!e||!n||(0,o.fS)(e,n))return t;const i={geometries:t,inSpatialReference:e,outSpatialReference:n,resolve:null};return this._jobs.push(i),new Promise((t=>{i.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:n,outSpatialReference:i,resolve:a}=t;(0,c.Q8)(n,i)?(0,o.sS)(i)?a(e.map(f)):a(e.map(_)):a((0,s.oj)(r.N,e,n,i,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function p(t,e,n){return g.push(t,e,n)}},97731:(t,e,n)=>{n.d(e,{hu:()=>s,yK:()=>r});n(6394),n(90045);(0,n(67077).c)();class i{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function s(t,e){if(!t)throw e=e||"assert",console.log(new Error(e).stack),new i(e)}function r(t,e,n,i){let s,r=(n[0]-t[0])/e[0],o=(i[0]-t[0])/e[0];r>o&&(s=r,r=o,o=s);let c=(n[1]-t[1])/e[1],a=(i[1]-t[1])/e[1];if(c>a&&(s=c,c=a,a=s),r>a||c>o)return!1;c>r&&(r=c),a<o&&(o=a);let h=(n[2]-t[2])/e[2],u=(i[2]-t[2])/e[2];return h>u&&(s=h,h=u,u=s),!(r>u||h>o)&&(u<o&&(o=u),!(o<0))}},74837:(t,e,n)=>{n.r(e),n.d(e,{SceneLayerSnappingSourceWorker:()=>Q,default:()=>$});var i=n(27366),s=n(92026),r=n(66978),o=(n(32718),n(25243),n(63780),n(93169),n(75366),n(69912)),c=n(11186),a=n(71353),h=n(85981),u=n(71417),l=n(92536),d=n(13005),f=n(27546),_=n(21530),m=(n(14226),n(90045),n(67077)),g=n(40885);n(11185);function p(t){return t?{ray:(0,g.Ue)(t.ray),c0:t.c0,c1:t.c1}:{ray:(0,g.Ue)(),c0:0,c1:Number.MAX_VALUE}}new _.x((()=>({c0:0,c1:0,ray:null})));n(16889),n(40927);(0,a.c)(),(0,a.c)(),(0,a.c)(),(0,a.c)(),(0,a.c)();(0,a.c)(),(0,a.c)(),(0,a.c)(),(0,a.c)(),(0,a.c)();var T;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(T||(T={}));T.INFINITE_MIN,T.INFINITE_MAX,T.INFINITE_MAX;function b(t,e){for(let n=0;n<E.NUM;n++){const i=t[n];if(i[0]*e[0]+i[1]*e[1]+i[2]*e[2]+i[3]>=e[3])return!1}return!0}var M,O;!function(t){t[t.LEFT=0]="LEFT",t[t.RIGHT=1]="RIGHT",t[t.BOTTOM=2]="BOTTOM",t[t.TOP=3]="TOP",t[t.NEAR=4]="NEAR",t[t.FAR=5]="FAR"}(M||(M={})),function(t){t[t.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",t[t.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",t[t.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",t[t.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",t[t.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",t[t.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",t[t.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",t[t.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(O||(O={}));O.FAR_BOTTOM_RIGHT,O.NEAR_BOTTOM_RIGHT,O.NEAR_BOTTOM_LEFT,O.FAR_BOTTOM_LEFT,O.NEAR_BOTTOM_LEFT,O.NEAR_BOTTOM_RIGHT,O.NEAR_TOP_RIGHT,O.NEAR_TOP_LEFT,O.FAR_BOTTOM_RIGHT,O.FAR_BOTTOM_LEFT,O.FAR_TOP_LEFT,O.FAR_TOP_RIGHT,O.NEAR_BOTTOM_RIGHT,O.FAR_BOTTOM_RIGHT,O.FAR_TOP_RIGHT,O.NEAR_TOP_RIGHT,O.FAR_BOTTOM_LEFT,O.NEAR_BOTTOM_LEFT,O.NEAR_TOP_LEFT,O.FAR_TOP_LEFT,O.FAR_TOP_LEFT,O.NEAR_TOP_LEFT,O.NEAR_TOP_RIGHT,O.FAR_TOP_RIGHT;var E,x;!function(t){t[t.NUM=6]="NUM"}(E||(E={})),function(t){t[t.NUM=8]="NUM"}(x||(x={}));(0,m.f)(-1,-1,-1,1),(0,m.f)(1,-1,-1,1),(0,m.f)(1,1,-1,1),(0,m.f)(-1,1,-1,1),(0,m.f)(-1,-1,1,1),(0,m.f)(1,-1,1,1),(0,m.f)(1,1,1,1),(0,m.f)(-1,1,1,1),new _.x(p),(0,a.c)(),(0,a.c)(),(0,a.c)(),(0,a.c)(),(0,a.c)(),(0,a.c)(),(0,a.c)(),(0,a.c)();var R=n(97731);class N{constructor(t,e){this._objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new A,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}destroy(){this._degenerateObjects.clear(),A.clearPool(),L[0]=null,V.prune(),Y.prune()}add(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.length;this._objectCount+=e,this._grow(t,e);const n=A.acquire();for(let i=0;i<e;i++){const e=t[i];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}A.release(n)}remove(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._objectCount-=t.length;const n=A.acquire();for(const i of t){const t=(0,s.pC)(e)?e:(0,u.b)(this._objectToBoundingSphere(i),H);w(t[3])?(n.init(this._root),this._remove(i,t,n)):this._degenerateObjects.delete(i)}A.release(n),this._shrink()}update(t,e){if(!w(e[3])&&this._isDegenerate(t))return;const n=function(t){return L[0]=t,L}(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const i=(0,g.re)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNode(i,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,i){const s=(0,g.re)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNodeWithOffset(s,t,i))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(s,t,i)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(s,t,i)&&n(t)})),!0}))}forEach(t){this._forEachNode(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>!0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1/0,r=1/0,o=1/0,a=null;const h=F(t,e),l=c=>{if(--s,!i(c))return;const h=this._objectToBoundingSphere(c);if(!b(n,h))return;const l=I(t,e,(0,u.g)(h)),d=l-h[3],f=l+h[3];d<r&&(r=d,o=f,a=c)};return this._forEachNodeDepthOrdered(this._root,(i=>{if(s<=0||!b(n,i.bounds))return!1;if((0,c.g)(Z,h,i.halfSize),(0,c.a)(Z,Z,i.bounds),I(t,e,Z)>o)return!1;const r=i.node;return r.terminals.forAll((t=>l(t))),null!==r.residents&&r.residents.forAll((t=>l(t))),!0}),t,e),a}forEachInDepthRange(t,e,n,i,s,r,o){let a=-1/0,h=1/0;const l={setRange:t=>{n===N.DepthOrder.FRONT_TO_BACK?(a=Math.max(a,t.near),h=Math.min(h,t.far)):(a=Math.max(a,-t.far),h=Math.min(h,-t.near))}};l.setRange(i);const d=I(e,n,t),f=F(e,n),_=F(e,-n),m=t=>{if(!o(t))return;const i=this._objectToBoundingSphere(t),c=(0,u.g)(i),f=I(e,n,c)-d,_=f-i[3],m=f+i[3];_>h||m<a||!b(r,i)||s(t,l)};this._forEachNodeDepthOrdered(this._root,(t=>{if(!b(r,t.bounds))return!1;if((0,c.g)(Z,f,t.halfSize),(0,c.a)(Z,Z,t.bounds),I(e,n,Z)-d>h)return!1;if((0,c.g)(Z,_,t.halfSize),(0,c.a)(Z,Z,t.bounds),I(e,n,Z)-d<a)return!1;const i=t.node;return i.terminals.forAll((t=>m(t))),null!==i.residents&&i.residents.forAll((t=>m(t))),!0}),e,n)}forEachNode(t){this._forEachNode(this._root,(e=>t(e.node,e.bounds,e.halfSize)))}forEachNeighbor(t,e){const n=(0,u.d)(e),i=(0,u.g)(e),s=e=>{const s=this._objectToBoundingSphere(e),r=(0,u.d)(s),o=n+r;(0,c.d)((0,u.g)(s),i)-o*o<=0&&t(e)};this._forEachNode(this._root,(t=>{const e=(0,u.d)(t.bounds),r=n+e;if((0,c.d)((0,u.g)(t.bounds),i)-r*r>0)return!1;const o=t.node;return o.terminals.forAll((t=>s(t))),null!==o.residents&&o.residents.forAll((t=>s(t))),!0})),this.forEachDegenerateObject(s)}_intersectsNode(t,e){return P(e.bounds,2*-e.halfSize,G),P(e.bounds,2*e.halfSize,D),(0,R.yK)(t.origin,t.direction,G,D)}_intersectsNodeWithOffset(t,e,n){return P(e.bounds,2*-e.halfSize,G),P(e.bounds,2*e.halfSize,D),n.applyToMinMax(G,D),(0,R.yK)(t.origin,t.direction,G,D)}_intersectsObject(t,e){const n=this._objectToBoundingSphere(e);return!(n[3]>0)||(0,u.i)(n,t)}_intersectsObjectWithOffset(t,e,n){const i=this._objectToBoundingSphere(e);return!(i[3]>0)||(0,u.i)(n.applyToBoundingSphere(i),t)}_forEachNode(t,e){let n=A.acquire().init(t);const i=[n];for(;0!==i.length;){if(n=i.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++)n.node.children[t]&&i.push(A.acquire().init(n).advance(t));A.release(n)}}_forEachNodeDepthOrdered(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:N.DepthOrder.FRONT_TO_BACK,s=A.acquire().init(t);const r=[s];for(function(t,e,n){if(!Y.length)for(let i=0;i<8;++i)Y.push({index:0,distance:0});for(let i=0;i<8;++i){const n=j[i];Y.data[i].index=i,Y.data[i].distance=I(t,e,n)}Y.sort(((t,e)=>t.distance-e.distance));for(let i=0;i<8;++i)n[i]=Y.data[i].index}(n,i,X);0!==r.length;){if(s=r.pop(),e(s)&&!s.isLeaf())for(let t=7;t>=0;--t){const e=X[t];s.node.children[e]&&r.push(A.acquire().init(s).advance(e))}A.release(s)}}_remove(t,e,n){V.clear();const i=n.advanceTo(e,((t,e)=>{V.push(t.node),V.push(e)}))?n.node.terminals:n.node.residents;if(i.removeUnordered(t),0===i.length)for(let s=V.length-2;s>=0;s-=2){const t=V.data[s],e=V.data[s+1];if(!this._purge(t,e))break}}_nodeIsEmpty(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(null===t.residents&&(t.residents=new f.Z({shrink:!0})),!0)}_add(t,e){e.advanceTo(this._objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const i=A.acquire().init(t);this._add(e.getItemAt(n),i),A.release(i)}}_grow(t,e){if(0!==e&&(y(t,e,(t=>this._objectToBoundingSphere(t)),W),w(W[3])&&!this._fitsInsideTree(W)))if(this._nodeIsEmpty(this._root.node))(0,u.b)(W,this._root.bounds),this._root.halfSize=1.25*W[3];else{const t=this._rootBoundsForRootAsSubNode(W);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(W,t):this._growRootAsSubNode(t),A.release(t)}}_rebuildTree(t,e){(0,c.c)(k,e.bounds),k[3]=e.halfSize,y([t,k],2,(t=>t),q);const n=A.acquire().init(this._root);this._root.initFrom(null,q,1.25*q[3]),this._forEachNode(n,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),A.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let i=-1/0;const s=this._root.bounds,r=this._root.halfSize;for(let o=0;o<3;o++){const t=s[o]-r-(n[o]-e),c=n[o]+e-(s[o]+r),a=Math.max(0,Math.ceil(t/(2*r))),h=Math.max(0,Math.ceil(c/(2*r)))+1,u=2**Math.ceil(Math.log(a+h)*Math.LOG2E);i=Math.max(i,u),U[o].min=a,U[o].max=h}for(let o=0;o<3;o++){let t=U[o].min,e=U[o].max;const n=(i-(t+e))/2;t+=Math.ceil(n),e+=Math.floor(n);const c=s[o]-r-t*r*2;C[o]=c+(e+t)*r}return C[3]=i*r*z,A.acquire().initFrom(null,C,i*r,0)}_growRootAsSubNode(t){const e=this._root.node;(0,c.c)(W,this._root.bounds),W[3]=this._root.halfSize,this._root.init(t),t.advanceTo(W,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,i=0;for(;i<e.length&&null==t;)n=i++,t=e[n];for(;i<e.length;)if(e[i++])return-1;return n}_isDegenerate(t){return!w(this._objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}}class A{constructor(){this.bounds=(0,u.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.depth;return this.node=(0,s.pC)(t)?t:A.createEmptyNode(),(0,s.pC)(e)&&(0,u.b)(e,this.bounds),this.halfSize=n,this.depth=i,this}advance(t){let e=this.node.children[t];e||(e=A.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=j[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.bounds[3]=this.halfSize*z,this}advanceTo(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const i=this._childIndex(t);e&&e(this,i),this.advance(i)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new f.Z({shrink:!0}),residents:new f.Z({shrink:!0})}}static acquire(){return A._pool.acquire()}static release(t){A._pool.release(t)}static clearPool(){A._pool.prune()}}function v(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function S(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function P(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function y(t,e,n,i){if(1===e){const e=n(t[0]);(0,u.b)(e,i)}else{G[0]=1/0,G[1]=1/0,G[2]=1/0,D[0]=-1/0,D[1]=-1/0,D[2]=-1/0;for(let i=0;i<e;i++){const e=n(t[i]);w(e[3])&&(v(G,e),S(D,e))}(0,c.h)(i,G,D,.5),i[3]=Math.max(D[0]-G[0],D[1]-G[1],D[2]-G[2])/2}}function F(t,e){let n=1/0,i=null;for(let s=0;s<8;++s){const r=I(t,e,B[s]);r<n&&(n=r,i=B[s])}return i}function I(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function w(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}A._pool=new d.Z(A),function(t){var e;(e=t.DepthOrder||(t.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(N||(N={}));const j=[(0,a.f)(-1,-1,-1),(0,a.f)(1,-1,-1),(0,a.f)(-1,1,-1),(0,a.f)(1,1,-1),(0,a.f)(-1,-1,1),(0,a.f)(1,-1,1),(0,a.f)(-1,1,1),(0,a.f)(1,1,1)],B=[(0,a.f)(-1,-1,-1),(0,a.f)(-1,-1,1),(0,a.f)(-1,1,-1),(0,a.f)(-1,1,1),(0,a.f)(1,-1,-1),(0,a.f)(1,-1,1),(0,a.f)(1,1,-1),(0,a.f)(1,1,1)],z=Math.sqrt(3),L=[null];const C=(0,u.c)(),Z=(0,a.c)(),G=(0,a.c)(),D=(0,a.c)(),V=new f.Z,H=(0,u.c)(),W=(0,u.c)(),k=(0,u.c)(),q=(0,u.c)(),U=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],Y=new f.Z,X=[0,0,0,0,0,0,0,0],K=N;var J=n(33723);let Q=class{constructor(){this._idToComponent=new Map,this._components=new K((t=>t.bounds)),this._edges=new K((t=>t.bounds)),this._tmpLineSegment=(0,h.Ue)(),this._tmpP1=(0,a.c)(),this._tmpP2=(0,a.c)(),this._tmpP3=(0,a.c)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,r.k_)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>this._addCandidates(t,e,n)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if((0,s.Wi)(t.info)){const{id:e,uid:i}=t;n.push({id:e,uid:i})}}),t.bounds),!n.length)return;const i={components:n},r=await this.remoteClient.invoke("fetchAllEdgeLocations",i,(0,s.Pt)(e,{}));for(const s of r.components)this._setFetchEdgeLocations(s)}async add(t){const e=new tt(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>{n.component===e&&t.push(n)}),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if((0,s.Wi)(e)||t.uid!==e.uid)return;const n=J.extractComponentsEdgeLocationsLayout.createView(t.locations),i=new Array(n.count),r=(0,a.c)(),o=(0,a.c)();for(let s=0;s<n.count;s++){const a=(0,u.c)(),h=(0,u.g)(a);n.position0.getVec(s,r),n.position1.getVec(s,o),(0,c.C)(h,h,r,.5),(0,c.C)(h,h,o,.5),(0,c.a)(h,h,t.origin),a[3]=(0,c.i)(h,r);const l=new et(e,s,a);i[s]=l}this._edges.add(i);const{objectIds:h,origin:l}=t;e.info={locations:n,objectIds:h,origin:l}}_addCandidates(t,e,n){const{locations:i,origin:s,objectIds:r}=e.component.info,o=i.position0.getVec(e.index,this._tmpP1),a=i.position1.getVec(e.index,this._tmpP2);(0,c.a)(o,o,s),(0,c.a)(a,a,s);const h=r[i.componentIndex.get(e.index)];this._addEdgeCandidate(t,h,o,a,n),this._addVertexCandidate(t,h,o,n),this._addVertexCandidate(t,h,a,n)}_addEdgeCandidate(t,e,n,i,s){if(!(t.types&l.r.EDGE))return;const r=(0,u.g)(t.bounds),o=(0,h.zk)(n,i,this._tmpLineSegment),d=(0,h.nF)(o,r,this._tmpP3);if(!(0,u.m)(t.bounds,d))return null;s.push({type:"edge",objectId:e,target:(0,a.a)(d),distance:(0,c.i)(r,d),start:(0,a.a)(n),end:(0,a.a)(i)})}_addVertexCandidate(t,e,n,i){if(!(t.types&l.r.VERTEX))return;const s=(0,u.g)(t.bounds);if(!(0,u.m)(t.bounds,n))return null;i.push({type:"vertex",objectId:e,target:(0,a.a)(n),distance:(0,c.i)(s,n)})}};function $(){return new Q}Q=(0,i._)([(0,o.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],Q);class tt{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++tt.uid}}tt.uid=0;class et{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);
//# sourceMappingURL=5070.65d2541f.chunk.js.map