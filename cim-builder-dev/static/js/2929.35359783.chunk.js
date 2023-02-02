"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[2929,2564],{22564:(e,t,n)=>{var o;n.d(t,{Hy:()=>d,OF:()=>u,TD:()=>f,Tu:()=>m,VO:()=>h,aV:()=>a,kq:()=>l,rH:()=>o}),function(e){e.AsyncNotEnabled="AsyncNotEnabled",e.ModulesNotSupported="ModulesNotSupported",e.CircularModules="CircularModules",e.NeverReach="NeverReach",e.UnsupportedHashType="UnsupportedHashType",e.InvalidParameter="InvalidParameter",e.UnexpectedToken="UnexpectedToken",e.Unrecognised="Unrecognised",e.UnrecognisedType="UnrecognisedType",e.MaximumCallDepth="MaximumCallDepth",e.BooleanConditionRequired="BooleanConditionRequired",e.TypeNotAllowedInFeature="TypeNotAllowedInFeature",e.KeyMustBeString="KeyMustBeString",e.WrongNumberOfParameters="WrongNumberOfParameters",e.CallNonFunction="CallNonFunction",e.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",e.NoFunctionInDictionary="NoFunctionInDictionary",e.NoFunctionInArray="NoFunctionInArray",e.AssignModuleFunction="AssignModuleFunction",e.LogicExpressionOrAnd="LogicExpressionOrAnd",e.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",e.FuncionNotFound="FunctionNotFound",e.InvalidMemberAccessKey="InvalidMemberAccessKey",e.UnsupportedUnaryOperator="UnsupportUnaryOperator",e.InvalidIdentifier="InvalidIdentifier",e.MemberOfNull="MemberOfNull",e.UnsupportedOperator="UnsupportedOperator",e.Cancelled="Cancelled",e.ModuleAccessorMustBeString="ModuleAccessorMustBeString",e.ModuleExportNotFound="ModuleExportNotFound",e.Immutable="Immutable",e.OutOfBounds="OutOfBounds",e.IllegalResult="IllegalResult",e.FieldNotFound="FieldNotFound",e.PortalRequired="PortalRequired",e.LogicError="LogicError",e.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",e.KeyAccessorMustBeString="KeyAccessorMustBeString",e.WrongSpatialReference="WrongSpatialReference"}(o||(o={}));const r={[o.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[o.LogicError]:"Logic error - {reason}",[o.NeverReach]:"Encountered unreachable logic",[o.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[o.ModuleAccessorMustBeString]:"Module accessor must be a string",[o.ModuleExportNotFound]:"Module has no export with provided identifier",[o.ModulesNotSupported]:"Current profile does not support modules",[o.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[o.FuncionNotFound]:"Function not found",[o.FieldNotFound]:"Key not found - {key}",[o.CircularModules]:"Circular module dependencies are not allowed",[o.Cancelled]:"Execution cancelled",[o.UnsupportedHashType]:"Type not supported in hash function",[o.IllegalResult]:"Value is not a supported return type",[o.PortalRequired]:"Portal is required",[o.InvalidParameter]:"Invalid parameter",[o.WrongNumberOfParameters]:"Call with wrong number of parameters",[o.Unrecognised]:"Unrecognised code structure",[o.UnrecognisedType]:"Unrecognised type",[o.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[o.BooleanConditionRequired]:"Conditions must use booleans",[o.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[o.NoFunctionInArray]:"Arrays cannot contain functions.",[o.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[o.KeyAccessorMustBeString]:"Accessor must be a string",[o.KeyMustBeString]:"Object keys must be a string",[o.Immutable]:"Object is immutable",[o.InvalidParameter]:"Invalid parameter",[o.UnexpectedToken]:"Unexpected token",[o.MemberOfNull]:"Cannot access property of null object",[o.MaximumCallDepth]:"Exceeded maximum function depth",[o.OutOfBounds]:"Out of bounds",[o.InvalidIdentifier]:"Identifier not recognised",[o.FuncionNotFound]:"Function not found",[o.CallNonFunction]:"Expression is not a function",[o.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[o.AssignModuleFunction]:"Cannot assign function to module variable",[o.UnsupportedUnaryOperator]:"Unsupported unary operator",[o.UnsupportedOperator]:"Unsupported operator",[o.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[o.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&"};class s extends Error{constructor(){super(...arguments)}}class i extends s{constructor(e,t){super(c(t)+e.message,{cause:e}),this.loc=null,Error.captureStackTrace&&Error.captureStackTrace(this,i),t&&t.loc&&(this.loc=t.loc)}}class a extends Error{constructor(e,t,n,o){super("Execution error - "+c(n)+d(r[t],o)),this.loc=null,this.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(this,a),n&&n.loc&&(this.loc=n.loc)}}function c(e){return e&&e.loc?`Line : ${e.loc.start?.line}, ${e.loc.start?.column}: `:""}class u extends Error{constructor(e,t,n,o){super("Compilation error - "+c(n)+d(r[t],o)),this.loc=null,this.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(this,u),n&&n.loc&&(this.loc=n.loc)}}class l extends Error{constructor(){super("Uncompilable code structures"),this.declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(this,l)}}function d(e,t){try{if(!t)return e;for(const n in t){let o=t[n];o||(o=""),e=e.replace("{"+n+"}",t[n])}}catch(s){}return e}function h(e,t,n){return"esri.arcade.arcadeexecutionerror"===n.declaredRootClass||"esri.arcade.arcadecompilationerror"===n.declaredRootClass?null===n.loc&&t&&t.loc?new i(n,{cause:n}):n:("esri.arcade.featureset.support.featureseterror"===n.declaredRootClass||"esri.arcade.featureset.support.sqlerror"===n.declaredRootClass||n.declaredRootClass,t&&t.loc?new i(n,{cause:n}):n)}var f;!function(e){e.UnrecognisedUri="UnrecognisedUri",e.UnsupportedUriProtocol="UnsupportedUriProtocol"}(f||(f={}));const p={[f.UnrecognisedUri]:"Unrecognised uri - {uri}",[f.UnsupportedUriProtocol]:"Unrecognised uri protocol"};class m extends Error{constructor(e,t){super(d(p[e],t)),this.declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(this,m)}}},11873:(e,t,n)=>{function o(){return[1,0,0,0,1,0,0,0,1]}function r(e,t,n,o,r,s,i,a,c){return[e,t,n,o,r,s,i,a,c]}function s(e,t){return new Float64Array(e,t,9)}n.d(t,{a:()=>s,c:()=>o,f:()=>r});Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:o,createView:s,fromValues:r},Symbol.toStringTag,{value:"Module"}))},98131:(e,t,n)=>{function o(){return[0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3]]}function s(e,t){return new Float64Array(e,t,4)}n.d(t,{I:()=>i,a:()=>o,b:()=>r,c:()=>s});const i=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:r,create:o,createView:s,fromValues:function(e,t,n,o){return[e,t,n,o]}},Symbol.toStringTag,{value:"Module"}))},40237:(e,t,n)=>{n.d(t,{N:()=>o});const o={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,n){const o=new r(e.getPointX(t),e.getPointY(t),n),s=e.hasZ(t),i=e.hasM(t);return s&&(o.z=e.getPointZ(t)),i&&(o.m=e.getPointM(t)),o},exportPolygon:function(e,t,n){return new s(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new i(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new a(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){const o=e.hasZ(t),r=e.hasM(t),s=new c(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(o){const n=e.getZExtent(t);s.zmin=n.vmin,s.zmax=n.vmax}if(r){const n=e.getMExtent(t);s.mmin=n.vmin,s.mmax=n.vmax}return s}};class r{constructor(e,t,n){this.x=e,this.y=t,this.spatialReference=n,this.z=void 0,this.m=void 0}}class s{constructor(e,t,n,o){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),o&&(this.hasM=o)}}class i{constructor(e,t,n,o){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),o&&(this.hasM=o)}}class a{constructor(e,t,n,o){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),o&&(this.hasM=o)}}class c{constructor(e,t,n,o,r){this.xmin=e,this.ymin=t,this.xmax=n,this.ymax=o,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},85981:(e,t,n)=>{n.d(t,{Ue:()=>c,nF:()=>l,zk:()=>u});var o=n(16889),r=n(21530),s=n(11186),i=n(71353),a=n(51378);function c(e){return e?{origin:(0,i.a)(e.origin),vector:(0,i.a)(e.vector)}:{origin:(0,i.c)(),vector:(0,i.c)()}}function u(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,s.c)(n.origin,e),(0,s.b)(n.vector,t,e),n}function l(e,t,n){return function(e,t,n,r,i){const{vector:c,origin:u}=e,l=(0,s.b)(a.WM.get(),t,u),d=(0,s.e)(c,l)/(0,s.p)(c);return(0,s.g)(i,c,(0,o.uZ)(d,n,r)),(0,s.a)(i,i,e.origin)}(e,t,0,1,n)}(0,i.c)(),(0,i.c)(),new r.x((()=>c()))},19995:(e,t,n)=>{n.d(t,{_W:()=>h,iV:()=>m,oj:()=>g});var o=n(92026),r=n(52587),s=n(40237),i=n(92975),a=n(81753);const c=[0,0];function u(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,c),null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,c),[n.xmax,n.ymax]=e(t.xmax,t.ymax,c),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:l(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:l(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:d(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function l(e,t){const n=[];for(const o of e)n.push(d(o,t));return n}function d(e,t){const n=[];for(const o of e){const e=t(o[0],o[1],[0,0]);n.push(e),o.length>2&&e.push(o[2]),o.length>3&&e.push(o[3])}return n}async function h(e,t){if(!e||!t)return;const n=Array.isArray(e)?e.map((e=>(0,o.pC)(e.geometry)?e.geometry.spatialReference:null)).filter(o.pC):[e];await(0,r.iQ)(n.map((e=>({source:e,dest:t}))))}const f=u.bind(null,a.hG),p=u.bind(null,a.R6);function m(e,t,n,o){if(!e)return e;if(n||(n=t,t=e.spatialReference),!(0,i.JY)(t)||!(0,i.JY)(n)||(0,i.fS)(t,n))return e;if((0,a.Q8)(t,n)){const t=(0,i.sS)(n)?f(e):p(e);return t.spatialReference=n,t}return(0,r.oj)(s.N,[e],t,n,null,o)[0]}const _=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,n){if(!e||!e.length||!t||!n||(0,i.fS)(t,n))return e;const o={geometries:e,inSpatialReference:t,outSpatialReference:n,resolve:null};return this._jobs.push(o),new Promise((e=>{o.resolve=e,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:t,inSpatialReference:n,outSpatialReference:o,resolve:c}=e;(0,a.Q8)(n,o)?(0,i.sS)(o)?c(t.map(f)):c(t.map(p)):c((0,r.oj)(s.N,t,n,o,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function g(e,t,n){return _.push(e,t,n)}},97731:(e,t,n)=>{n.d(t,{hu:()=>r,yK:()=>s});n(6394),n(90045);(0,n(67077).c)();class o{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function r(e,t){if(!e){t=t||"Assertion";const e=new Error(t).stack;throw new o(`${t} at ${e}`)}}function s(e,t,n,o){let r,s=(n[0]-e[0])/t[0],i=(o[0]-e[0])/t[0];s>i&&(r=s,s=i,i=r);let a=(n[1]-e[1])/t[1],c=(o[1]-e[1])/t[1];if(a>c&&(r=a,a=c,c=r),s>c||a>i)return!1;a>s&&(s=a),c<i&&(i=c);let u=(n[2]-e[2])/t[2],l=(o[2]-e[2])/t[2];return u>l&&(r=u,u=l,l=r),!(s>l||u>i)&&(l<i&&(i=l),!(i<0))}},10387:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var o=n(27366),r=n(92026),s=n(66978),i=(n(32718),n(25243),n(63780),n(10064),n(93169),n(69912)),a=n(11186),c=n(71353),u=n(85981),l=n(71417),d=n(99987),h=n(13005),f=n(27546),p=n(21530),m=(n(14226),n(90045),n(67077)),_=n(40885);function g(e){return e?{ray:(0,_.Ue)(e.ray),c0:e.c0,c1:e.c1}:{ray:(0,_.Ue)(),c0:0,c1:Number.MAX_VALUE}}new p.x((()=>g()));var T,b;n(76146),n(51378);function O(e,t){for(let n=0;n<x.NUM;n++){const o=e[n];if(o[0]*t[0]+o[1]*t[1]+o[2]*t[2]+o[3]>=t[3])return!1}return!0}!function(e){e[e.LEFT=0]="LEFT",e[e.RIGHT=1]="RIGHT",e[e.BOTTOM=2]="BOTTOM",e[e.TOP=3]="TOP",e[e.NEAR=4]="NEAR",e[e.FAR=5]="FAR"}(T||(T={})),function(e){e[e.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",e[e.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",e[e.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",e[e.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",e[e.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",e[e.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",e[e.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",e[e.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(b||(b={}));b.FAR_BOTTOM_RIGHT,b.NEAR_BOTTOM_RIGHT,b.NEAR_BOTTOM_LEFT,b.FAR_BOTTOM_LEFT,b.NEAR_BOTTOM_LEFT,b.NEAR_BOTTOM_RIGHT,b.NEAR_TOP_RIGHT,b.NEAR_TOP_LEFT,b.FAR_BOTTOM_RIGHT,b.FAR_BOTTOM_LEFT,b.FAR_TOP_LEFT,b.FAR_TOP_RIGHT,b.NEAR_BOTTOM_RIGHT,b.FAR_BOTTOM_RIGHT,b.FAR_TOP_RIGHT,b.NEAR_TOP_RIGHT,b.FAR_BOTTOM_LEFT,b.NEAR_BOTTOM_LEFT,b.NEAR_TOP_LEFT,b.FAR_TOP_LEFT,b.FAR_TOP_LEFT,b.NEAR_TOP_LEFT,b.NEAR_TOP_RIGHT,b.FAR_TOP_RIGHT;var x,E;!function(e){e[e.NUM=6]="NUM"}(x||(x={})),function(e){e[e.NUM=8]="NUM"}(E||(E={}));(0,m.f)(-1,-1,-1,1),(0,m.f)(1,-1,-1,1),(0,m.f)(1,1,-1,1),(0,m.f)(-1,1,-1,1),(0,m.f)(-1,-1,1,1),(0,m.f)(1,-1,1,1),(0,m.f)(1,1,1,1),(0,m.f)(-1,1,1,1),new p.x(g),(0,c.c)(),(0,c.c)(),(0,c.c)(),(0,c.c)(),(0,c.c)(),(0,c.c)(),(0,c.c)(),(0,c.c)();var M=n(97731);class R{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(e,t){this._objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new N,this._objectCount=0,t&&(void 0!==t.maximumObjectsPerNode&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),void 0!==t.maximumDepth&&(this._maximumDepth=t.maximumDepth))}destroy(){this._degenerateObjects.clear(),N.clearPool(),L[0]=null,D.prune(),K.prune()}add(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length;this._objectCount+=t,this._grow(e,t);const n=N.acquire();for(let o=0;o<t;o++){const t=e[o];this._isDegenerate(t)?this._degenerateObjects.add(t):(n.init(this._root),this._add(t,n))}N.release(n)}remove(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._objectCount-=e.length;const n=N.acquire();for(const o of e){const e=(0,r.pC)(t)?t:(0,l.h)(this._objectToBoundingSphere(o),G);C(e[3])?(n.init(this._root),this._remove(o,e,n)):this._degenerateObjects.delete(o)}N.release(n),this._shrink()}update(e,t){if(!C(t[3])&&this._isDegenerate(e))return;const n=function(e){return L[0]=e,L}(e);this.remove(n,t),this.add(n)}forEachAlongRay(e,t,n){const o=(0,_.re)(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNode(o,e))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObject(o,e)&&n(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObject(o,e)&&n(e)})),!0}))}forEachAlongRayWithVerticalOffset(e,t,n,o){const r=(0,_.re)(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNodeWithOffset(r,e,o))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObjectWithOffset(r,e,o)&&n(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObjectWithOffset(r,e,o)&&n(e)})),!0}))}forEach(e){this._forEachNode(this._root,(t=>{const n=t.node;return n.terminals.forAll(e),null!==n.residents&&n.residents.forAll(e),!0})),this._degenerateObjects.forEach(e)}forEachDegenerateObject(e){this._degenerateObjects.forEach(e)}findClosest(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>!0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1/0,s=1/0,i=1/0,c=null;const u=v(e,t),d=a=>{if(--r,!o(a))return;const u=this._objectToBoundingSphere(a);if(!O(n,u))return;const d=I(e,t,(0,l.g)(u)),h=d-u[3],f=d+u[3];h<s&&(s=h,i=f,c=a)};return this._forEachNodeDepthOrdered(this._root,(o=>{if(r<=0||!O(n,o.bounds))return!1;if((0,a.g)(U,u,o.halfSize),(0,a.a)(U,U,o.bounds),I(e,t,U)>i)return!1;const s=o.node;return s.terminals.forAll((e=>d(e))),null!==s.residents&&s.residents.forAll((e=>d(e))),!0}),e,t),c}forEachInDepthRange(e,t,n,o,r,s,i){let c=-1/0,u=1/0;const d={setRange:e=>{n===R.DepthOrder.FRONT_TO_BACK?(c=Math.max(c,e.near),u=Math.min(u,e.far)):(c=Math.max(c,-e.far),u=Math.min(u,-e.near))}};d.setRange(o);const h=I(t,n,e),f=v(t,n),p=v(t,-n),m=e=>{if(!i(e))return;const o=this._objectToBoundingSphere(e),a=(0,l.g)(o),f=I(t,n,a)-h,p=f-o[3],m=f+o[3];p>u||m<c||!O(s,o)||r(e,d)};this._forEachNodeDepthOrdered(this._root,(e=>{if(!O(s,e.bounds))return!1;if((0,a.g)(U,f,e.halfSize),(0,a.a)(U,U,e.bounds),I(t,n,U)-h>u)return!1;if((0,a.g)(U,p,e.halfSize),(0,a.a)(U,U,e.bounds),I(t,n,U)-h<c)return!1;const o=e.node;return o.terminals.forAll((e=>m(e))),null!==o.residents&&o.residents.forAll((e=>m(e))),!0}),t,n)}forEachNode(e){this._forEachNode(this._root,(t=>e(t.node,t.bounds,t.halfSize)))}forEachNeighbor(e,t){const n=(0,l.a)(t),o=(0,l.g)(t),r=t=>{const r=this._objectToBoundingSphere(t),s=(0,l.a)(r),i=n+s;return!((0,a.d)((0,l.g)(r),o)-i*i<=0)||e(t)};let s=!0;const i=e=>{s&&(s=r(e))};this._forEachNode(this._root,(e=>{const t=(0,l.a)(e.bounds),r=n+t;if((0,a.d)((0,l.g)(e.bounds),o)-r*r>0)return!1;const c=e.node;return c.terminals.forAll(i),s&&null!==c.residents&&c.residents.forAll(i),s})),s&&this.forEachDegenerateObject(i)}_intersectsNode(e,t){return F(t.bounds,2*-t.halfSize,z),F(t.bounds,2*t.halfSize,k),(0,M.yK)(e.origin,e.direction,z,k)}_intersectsNodeWithOffset(e,t,n){return F(t.bounds,2*-t.halfSize,z),F(t.bounds,2*t.halfSize,k),n.applyToMinMax(z,k),(0,M.yK)(e.origin,e.direction,z,k)}_intersectsObject(e,t){const n=this._objectToBoundingSphere(t);return!(n[3]>0)||(0,l.j)(n,e)}_intersectsObjectWithOffset(e,t,n){const o=this._objectToBoundingSphere(t);return!(o[3]>0)||(0,l.j)(n.applyToBoundingSphere(o),e)}_forEachNode(e,t){let n=N.acquire().init(e);const o=[n];for(;0!==o.length;){if(n=o.pop(),t(n)&&!n.isLeaf())for(let e=0;e<n.node.children.length;e++)n.node.children[e]&&o.push(N.acquire().init(n).advance(e));N.release(n)}}_forEachNodeDepthOrdered(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:R.DepthOrder.FRONT_TO_BACK,r=N.acquire().init(e);const s=[r];for(function(e,t,n){if(!K.length)for(let o=0;o<8;++o)K.push({index:0,distance:0});for(let o=0;o<8;++o){const n=P[o];K.data[o].index=o,K.data[o].distance=I(e,t,n)}K.sort(((e,t)=>e.distance-t.distance));for(let o=0;o<8;++o)n[o]=K.data[o].index}(n,o,W);0!==s.length;){if(r=s.pop(),t(r)&&!r.isLeaf())for(let e=7;e>=0;--e){const t=W[e];r.node.children[t]&&s.push(N.acquire().init(r).advance(t))}N.release(r)}}_remove(e,t,n){D.clear();const o=n.advanceTo(t,((e,t)=>{D.push(e.node),D.push(t)}))?n.node.terminals:n.node.residents;if(o.removeUnordered(e),0===o.length)for(let r=D.length-2;r>=0;r-=2){const e=D.data[r],t=D.data[r+1];if(!this._purge(e,t))break}}_nodeIsEmpty(e){if(0!==e.terminals.length)return!1;if(null!==e.residents)return 0===e.residents.length;for(let t=0;t<e.children.length;t++)if(e.children[t])return!1;return!0}_purge(e,t){return t>=0&&(e.children[t]=null),!!this._nodeIsEmpty(e)&&(null===e.residents&&(e.residents=new f.Z({shrink:!0})),!0)}_add(e,t){t.advanceTo(this._objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))}_split(e){const t=e.node.residents;e.node.residents=null;for(let n=0;n<t.length;n++){const o=N.acquire().init(e);this._add(t.getItemAt(n),o),N.release(o)}}_grow(e,t){if(0!==t&&(S(e,t,(e=>this._objectToBoundingSphere(e)),Z),C(Z[3])&&!this._fitsInsideTree(Z)))if(this._nodeIsEmpty(this._root.node))(0,l.h)(Z,this._root.bounds),this._root.halfSize=1.25*Z[3];else{const e=this._rootBoundsForRootAsSubNode(Z);this._placingRootViolatesMaxDepth(e)?this._rebuildTree(Z,e):this._growRootAsSubNode(e),N.release(e)}}_rebuildTree(e,t){(0,a.c)(H,t.bounds),H[3]=t.halfSize,S([e,H],2,(e=>e),q);const n=N.acquire().init(this._root);this._root.initFrom(null,q,1.25*q[3]),this._forEachNode(n,(e=>(this.add(e.node.terminals.data,e.node.terminals.length),null!==e.node.residents&&this.add(e.node.residents.data,e.node.residents.length),!0))),N.release(n)}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,(e=>(n=Math.max(n,e.depth),n+t<=this._maximumDepth))),n+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],n=e;let o=-1/0;const r=this._root.bounds,s=this._root.halfSize;for(let i=0;i<3;i++){const e=r[i]-s-(n[i]-t),a=n[i]+t-(r[i]+s),c=Math.max(0,Math.ceil(e/(2*s))),u=Math.max(0,Math.ceil(a/(2*s)))+1,l=2**Math.ceil(Math.log(c+u)*Math.LOG2E);o=Math.max(o,l),V[i].min=c,V[i].max=u}for(let i=0;i<3;i++){let e=V[i].min,t=V[i].max;const n=(o-(e+t))/2;e+=Math.ceil(n),t+=Math.floor(n);const a=r[i]-s-e*s*2;w[i]=a+(t+e)*s}return w[3]=o*s*j,N.acquire().initFrom(null,w,o*s,0)}_growRootAsSubNode(e){const t=this._root.node;(0,a.c)(Z,this._root.bounds),Z[3]=this._root.halfSize,this._root.init(e),e.advanceTo(Z,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals}_shrink(){for(;;){const e=this._findShrinkIndex();if(-1===e)break;this._root.advance(e),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let e=null;const t=this._root.node.children;let n=0,o=0;for(;o<t.length&&null==e;)n=o++,e=t[n];for(;o<t.length;)if(t[o++])return-1;return n}_isDegenerate(e){return!C(this._objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,n=this._root.halfSize;return e[3]<=n&&e[0]>=t[0]-n&&e[0]<=t[0]+n&&e[1]>=t[1]-n&&e[1]<=t[1]+n&&e[2]>=t[2]-n&&e[2]<=t[2]+n}}class N{constructor(){this.bounds=(0,l.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.depth;return this.node=(0,r.pC)(e)?e:N.createEmptyNode(),(0,r.pC)(t)&&(0,l.h)(t,this.bounds),this.halfSize=n,this.depth=o,this}advance(e){let t=this.node.children[e];t||(t=N.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const n=P[e];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.bounds[3]=this.halfSize*j,this}advanceTo(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!n)return t&&t(this,-1),!1;this.node.residents=null}const o=this._childIndex(e);t&&t(this,o),this.advance(o)}}isLeaf(){return null!=this.node.residents}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new f.Z({shrink:!0}),residents:new f.Z({shrink:!0})}}static acquire(){return N._pool.acquire()}static release(e){N._pool.release(e)}static clearPool(){N._pool.prune()}}function A(e,t){e[0]=Math.min(e[0],t[0]-t[3]),e[1]=Math.min(e[1],t[1]-t[3]),e[2]=Math.min(e[2],t[2]-t[3])}function y(e,t){e[0]=Math.max(e[0],t[0]+t[3]),e[1]=Math.max(e[1],t[1]+t[3]),e[2]=Math.max(e[2],t[2]+t[3])}function F(e,t,n){n[0]=e[0]+t,n[1]=e[1]+t,n[2]=e[2]+t}function S(e,t,n,o){if(1===t){const t=n(e[0]);(0,l.h)(t,o)}else{z[0]=1/0,z[1]=1/0,z[2]=1/0,k[0]=-1/0,k[1]=-1/0,k[2]=-1/0;for(let o=0;o<t;o++){const t=n(e[o]);C(t[3])&&(A(z,t),y(k,t))}(0,a.h)(o,z,k,.5),o[3]=Math.max(k[0]-z[0],k[1]-z[1],k[2]-z[2])/2}}function v(e,t){let n,o=1/0;for(let r=0;r<8;++r){const s=I(e,t,B[r]);s<o&&(o=s,n=B[r])}return n}function I(e,t,n){return t*(e[0]*n[0]+e[1]*n[1]+e[2]*n[2])}function C(e){return!isNaN(e)&&e!==-1/0&&e!==1/0&&e>0}N._pool=new h.Z(N),function(e){var t;(t=e.DepthOrder||(e.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(R||(R={}));const P=[(0,c.f)(-1,-1,-1),(0,c.f)(1,-1,-1),(0,c.f)(-1,1,-1),(0,c.f)(1,1,-1),(0,c.f)(-1,-1,1),(0,c.f)(1,-1,1),(0,c.f)(-1,1,1),(0,c.f)(1,1,1)],B=[(0,c.f)(-1,-1,-1),(0,c.f)(-1,-1,1),(0,c.f)(-1,1,-1),(0,c.f)(-1,1,1),(0,c.f)(1,-1,-1),(0,c.f)(1,-1,1),(0,c.f)(1,1,-1),(0,c.f)(1,1,1)],j=Math.sqrt(3),L=[null];const w=(0,l.c)(),U=(0,c.c)(),z=(0,c.c)(),k=(0,c.c)(),D=new f.Z,G=(0,l.c)(),Z=(0,l.c)(),H=(0,l.c)(),q=(0,l.c)(),V=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],K=new f.Z,W=[0,0,0,0,0,0,0,0],Y=R;var X=n(83715);function $(e,t,n){const o=(0,l.c)(),r=(0,l.g)(o);return(0,a.z)(r,r,e,.5),(0,a.z)(r,r,t,.5),o[3]=(0,a.i)(r,e),(0,a.a)(r,r,n),o}let J=class{constructor(){this._idToComponent=new Map,this._components=new Y((e=>e.bounds)),this._edges=new Y((e=>e.bounds)),this._tmpLineSegment=(0,u.Ue)(),this._tmpP1=(0,c.c)(),this._tmpP2=(0,c.c)(),this._tmpP3=(0,c.c)(),this.remoteClient=null}async fetchCandidates(e,t){await Promise.resolve(),(0,s.k_)(t),await this._ensureEdgeLocations(e,t);const n=[];return this._edges.forEachNeighbor((t=>(this._addCandidates(e,t,n),n.length<1e3)),e.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(e,t){const n=[];if(this._components.forEachNeighbor((e=>{if((0,r.Wi)(e.info)){const{id:t,uid:o}=e;n.push({id:t,uid:o})}return!0}),e.bounds),!n.length)return;const o={components:n},s=await this.remoteClient.invoke("fetchAllEdgeLocations",o,(0,r.Pt)(t,{}));for(const r of s.components)this._setFetchEdgeLocations(r)}async add(e){const t=new ee(e.id,e.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(e){const t=this._idToComponent.get(e.id);if(t){const e=[];this._edges.forEachNeighbor((n=>(n.component===t&&e.push(n),!0)),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id)}return{result:{}}}_setFetchEdgeLocations(e){const t=this._idToComponent.get(e.id);if((0,r.Wi)(t)||e.uid!==t.uid)return;const n=X.n_.createView(e.locations),o=new Array(n.count),s=(0,c.c)(),i=(0,c.c)();for(let r=0;r<n.count;r++){n.position0.getVec(r,s),n.position1.getVec(r,i);const a=$(s,i,e.origin),c=new te(t,r,a);o[r]=c}this._edges.add(o);const{objectIds:a,origin:u}=e;t.info={locations:n,objectIds:a,origin:u}}_addCandidates(e,t,n){const{info:o}=t.component,{origin:r,objectIds:s}=o,i=o.locations,c=i.position0.getVec(t.index,this._tmpP1),u=i.position1.getVec(t.index,this._tmpP2);(0,a.a)(c,c,r),(0,a.a)(u,u,r);const l=s[i.componentIndex.get(t.index)];this._addEdgeCandidate(e,l,c,u,n),this._addVertexCandidate(e,l,c,n),this._addVertexCandidate(e,l,u,n)}_addEdgeCandidate(e,t,n,o,r){if(!(e.types&d.r.EDGE))return;const s=(0,l.g)(e.bounds),i=(0,u.zk)(n,o,this._tmpLineSegment),h=(0,u.nF)(i,s,this._tmpP3);(0,l.m)(e.bounds,h)&&r.push({type:"edge",objectId:t,target:(0,c.a)(h),distance:(0,a.i)(s,h),start:(0,c.a)(n),end:(0,c.a)(o)})}_addVertexCandidate(e,t,n,o){if(!(e.types&d.r.VERTEX))return;const r=(0,l.g)(e.bounds);(0,l.m)(e.bounds,n)&&o.push({type:"vertex",objectId:t,target:(0,c.a)(n),distance:(0,a.i)(r,n)})}};J=(0,o._)([(0,i.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],J);const Q=J;class ee{constructor(e,t){this.id=e,this.bounds=t,this.info=null,this.uid=++ee.uid}}ee.uid=0;class te{constructor(e,t,n){this.component=e,this.index=t,this.bounds=n}}}}]);
//# sourceMappingURL=2929.35359783.chunk.js.map