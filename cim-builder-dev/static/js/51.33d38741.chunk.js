(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[51],{512:function(t,e,n){"use strict";function r(){return[1,0,0,0,1,0,0,0,1]}function o(t,e){return new Float64Array(t,e,9)}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));Object.freeze({__proto__:null,create:r,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,e,n,r,o,i,a,s,c){return[t,e,n,r,o,i,a,s,c]},createView:o})},539:function(t,e,n){"use strict";function r(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}function i(t,e){return new Float64Array(t,e,4)}n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return i}));const a=[0,0,0,1];Object.freeze({__proto__:null,create:r,clone:o,fromValues:function(t,e,n,r){return[t,e,n,r]},createView:i,IDENTITY:a})},550:function(t,e,n){"use strict";var r,o=n(0),i=n(22),a=n(10),s=n(7),c=n(1),l=(n(6),n(5),n(4),n(2));let u=r=class extends a.a{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};Object(o.a)([Object(c.b)({type:String,json:{write:!0}})],u.prototype,"field",void 0),Object(o.a)([Object(c.b)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"minValue",void 0),Object(o.a)([Object(c.b)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"maxValue",void 0),u=r=Object(o.a)([Object(l.a)("esri.renderers.support.pointCloud.ColorModulation")],u);var f=u;const d=new i.a({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let b=class extends a.a{};Object(o.a)([Object(c.b)({type:d.apiValues,readOnly:!0,nonNullable:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],b.prototype,"type",void 0),b=Object(o.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],b);var p,h=b,y=n(20);let O=p=class extends h{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new p({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};Object(o.a)([Object(y.a)({pointCloudFixedSizeAlgorithm:"fixed-size"})],O.prototype,"type",void 0),Object(o.a)([Object(c.b)({type:Number,nonNullable:!0,json:{write:!0}})],O.prototype,"size",void 0),Object(o.a)([Object(c.b)({type:Boolean,json:{write:!0}})],O.prototype,"useRealWorldSymbolSizes",void 0),O=p=Object(o.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],O);var j,w=O;let g=j=class extends h{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new j({scaleFactor:this.scaleFactor})}};Object(o.a)([Object(y.a)({pointCloudSplatAlgorithm:"splat"})],g.prototype,"type",void 0),Object(o.a)([Object(c.b)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],g.prototype,"scaleFactor",void 0),g=j=Object(o.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],g);const m={key:"type",base:h,typeMap:{"fixed-size":w,splat:g}},v=Object(i.b)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let M=class extends a.a{constructor(t){super(t),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:Object(s.a)(this.pointSizeAlgorithm),colorModulation:Object(s.a)(this.colorModulation),pointsPerInch:Object(s.a)(this.pointsPerInch)}}};Object(o.a)([Object(c.b)({type:v.apiValues,readOnly:!0,nonNullable:!0,json:{type:v.jsonValues,read:!1,write:v.write}})],M.prototype,"type",void 0),Object(o.a)([Object(c.b)({types:m,json:{write:!0}})],M.prototype,"pointSizeAlgorithm",void 0),Object(o.a)([Object(c.b)({type:f,json:{write:!0}})],M.prototype,"colorModulation",void 0),Object(o.a)([Object(c.b)({json:{write:!0},nonNullable:!0,type:Number})],M.prototype,"pointsPerInch",void 0),M=Object(o.a)([Object(l.a)("esri.renderers.PointCloudRenderer")],M),(M||(M={})).fieldTransformTypeKebabDict=new i.a({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var C=M;e.a=C},555:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return y})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return p})),n.d(e,"g",(function(){return w})),n.d(e,"h",(function(){return g})),n.d(e,"i",(function(){return O})),n.d(e,"j",(function(){return h})),n.d(e,"k",(function(){return i})),n.d(e,"l",(function(){return j}));var r=n(31);function o(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function i(t,e,n,r,o){return t[0]=e,t[1]=n,t[2]=r,t[3]=o,t}function a(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t}function s(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t}function c(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t[3]=e[3]*n[3],t}function l(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t[3]=e[3]/n[3],t}function u(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t}function f(t,e){const n=e[0]-t[0],r=e[1]-t[1],o=e[2]-t[2],i=e[3]-t[3];return Math.sqrt(n*n+r*r+o*o+i*i)}function d(t,e){const n=e[0]-t[0],r=e[1]-t[1],o=e[2]-t[2],i=e[3]-t[3];return n*n+r*r+o*o+i*i}function b(t){const e=t[0],n=t[1],r=t[2],o=t[3];return Math.sqrt(e*e+n*n+r*r+o*o)}function p(t){const e=t[0],n=t[1],r=t[2],o=t[3];return e*e+n*n+r*r+o*o}function h(t,e){const n=e[0],r=e[1],o=e[2],i=e[3];let a=n*n+r*r+o*o+i*i;return a>0&&(a=1/Math.sqrt(a),t[0]=n*a,t[1]=r*a,t[2]=o*a,t[3]=i*a),t}function y(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function O(t,e,n,r){const o=e[0],i=e[1],a=e[2],s=e[3];return t[0]=o+r*(n[0]-o),t[1]=i+r*(n[1]-i),t[2]=a+r*(n[2]-a),t[3]=s+r*(n[3]-s),t}function j(t,e,n){const r=e[0],o=e[1],i=e[2],a=e[3];return t[0]=n[0]*r+n[4]*o+n[8]*i+n[12]*a,t[1]=n[1]*r+n[5]*o+n[9]*i+n[13]*a,t[2]=n[2]*r+n[6]*o+n[10]*i+n[14]*a,t[3]=n[3]*r+n[7]*o+n[11]*i+n[15]*a,t}function w(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function g(t,e){const n=t[0],o=t[1],i=t[2],a=t[3],s=e[0],c=e[1],l=e[2],u=e[3];return Math.abs(n-s)<=r.a*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(o-c)<=r.a*Math.max(1,Math.abs(o),Math.abs(c))&&Math.abs(i-l)<=r.a*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(a-u)<=r.a*Math.max(1,Math.abs(a),Math.abs(u))}const m=s,v=c,M=l,C=f,T=d,A=b,U=p;Object.freeze({__proto__:null,copy:o,set:i,add:a,subtract:s,multiply:c,divide:l,ceil:function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t[3]=Math.ceil(e[3]),t},floor:function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t[3]=Math.floor(e[3]),t},min:function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t[3]=Math.min(e[3],n[3]),t},max:function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t[3]=Math.max(e[3],n[3]),t},round:function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t[3]=Math.round(e[3]),t},scale:u,scaleAndAdd:function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t[3]=e[3]+n[3]*r,t},distance:f,squaredDistance:d,length:b,squaredLength:p,negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},inverse:function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t[3]=1/e[3],t},normalize:h,dot:y,lerp:O,random:function(t,e){let n,o,i,a,s,c;e=e||1;do{n=2*Object(r.b)()-1,o=2*Object(r.b)()-1,s=n*n+o*o}while(s>=1);do{i=2*Object(r.b)()-1,a=2*Object(r.b)()-1,c=i*i+a*a}while(c>=1);const l=Math.sqrt((1-s)/c);return t[0]=e*n,t[1]=e*o,t[2]=e*i*l,t[3]=e*a*l,t},transformMat4:j,transformQuat:function(t,e,n){const r=e[0],o=e[1],i=e[2],a=n[0],s=n[1],c=n[2],l=n[3],u=l*r+s*i-c*o,f=l*o+c*r-a*i,d=l*i+a*o-s*r,b=-a*r-s*o-c*i;return t[0]=u*l+b*-a+f*-c-d*-s,t[1]=f*l+b*-s+d*-a-u*-c,t[2]=d*l+b*-c+u*-s-f*-a,t[3]=e[3],t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:w,equals:g,sub:m,mul:v,div:M,dist:C,sqrDist:T,len:A,sqrLen:U})},556:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return I})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return l}));var r=n(512),o=n(539),i=n(64),a=n(31),s=n(38),c=n(555);function l(t,e,n){n*=.5;const r=Math.sin(n);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(n),t}function u(t,e){const n=2*Math.acos(e[3]),r=Math.sin(n/2);return r>a.a?(t[0]=e[0]/r,t[1]=e[1]/r,t[2]=e[2]/r):(t[0]=1,t[1]=0,t[2]=0),n}function f(t,e,n){const r=e[0],o=e[1],i=e[2],a=e[3],s=n[0],c=n[1],l=n[2],u=n[3];return t[0]=r*u+a*s+o*l-i*c,t[1]=o*u+a*c+i*s-r*l,t[2]=i*u+a*l+r*c-o*s,t[3]=a*u-r*s-o*c-i*l,t}function d(t,e,n,r){const o=e[0],i=e[1],s=e[2],c=e[3];let l,u,f,d,b,p=n[0],h=n[1],y=n[2],O=n[3];return u=o*p+i*h+s*y+c*O,u<0&&(u=-u,p=-p,h=-h,y=-y,O=-O),1-u>a.a?(l=Math.acos(u),f=Math.sin(l),d=Math.sin((1-r)*l)/f,b=Math.sin(r*l)/f):(d=1-r,b=r),t[0]=d*o+b*p,t[1]=d*i+b*h,t[2]=d*s+b*y,t[3]=d*c+b*O,t}function b(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function p(t,e){const n=e[0]+e[4]+e[8];let r;if(n>0)r=Math.sqrt(n+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[3*n+n]&&(n=2);const o=(n+1)%3,i=(n+2)%3;r=Math.sqrt(e[3*n+n]-e[3*o+o]-e[3*i+i]+1),t[n]=.5*r,r=.5/r,t[3]=(e[3*o+i]-e[3*i+o])*r,t[o]=(e[3*o+n]+e[3*n+o])*r,t[i]=(e[3*i+n]+e[3*n+i])*r}return t}function h(t,e,n,r){const o=.5*Math.PI/180;e*=o,n*=o,r*=o;const i=Math.sin(e),a=Math.cos(e),s=Math.sin(n),c=Math.cos(n),l=Math.sin(r),u=Math.cos(r);return t[0]=i*c*u-a*s*l,t[1]=a*s*u+i*c*l,t[2]=a*c*l-i*s*u,t[3]=a*c*u+i*s*l,t}const y=c.c,O=c.k,j=c.a,w=f,g=c.b,m=c.d,v=c.i,M=c.e,C=M,T=c.f,A=T,U=c.j,I=c.g,S=c.h;const V=Object(i.e)(),x=Object(i.g)(1,0,0),z=Object(i.g)(0,1,0);const F=Object(o.b)(),B=Object(o.b)();const D=Object(r.b)();Object.freeze({__proto__:null,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:l,getAxisAngle:u,multiply:f,rotateX:function(t,e,n){n*=.5;const r=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(n),c=Math.cos(n);return t[0]=r*c+a*s,t[1]=o*c+i*s,t[2]=i*c-o*s,t[3]=a*c-r*s,t},rotateY:function(t,e,n){n*=.5;const r=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(n),c=Math.cos(n);return t[0]=r*c-i*s,t[1]=o*c+a*s,t[2]=i*c+r*s,t[3]=a*c-o*s,t},rotateZ:function(t,e,n){n*=.5;const r=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(n),c=Math.cos(n);return t[0]=r*c+o*s,t[1]=o*c-r*s,t[2]=i*c+a*s,t[3]=a*c-i*s,t},calculateW:function(t,e){const n=e[0],r=e[1],o=e[2];return t[0]=n,t[1]=r,t[2]=o,t[3]=Math.sqrt(Math.abs(1-n*n-r*r-o*o)),t},slerp:d,random:function(t){const e=Object(a.b)(),n=Object(a.b)(),r=Object(a.b)(),o=Math.sqrt(1-e),i=Math.sqrt(e);return t[0]=o*Math.sin(2*Math.PI*n),t[1]=o*Math.cos(2*Math.PI*n),t[2]=i*Math.sin(2*Math.PI*r),t[3]=i*Math.cos(2*Math.PI*r),t},invert:function(t,e){const n=e[0],r=e[1],o=e[2],i=e[3],a=n*n+r*r+o*o+i*i,s=a?1/a:0;return t[0]=-n*s,t[1]=-r*s,t[2]=-o*s,t[3]=i*s,t},conjugate:b,fromMat3:p,fromEuler:h,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},copy:y,set:O,add:j,mul:w,scale:g,dot:m,lerp:v,length:M,len:C,squaredLength:T,sqrLen:A,normalize:U,exactEquals:I,equals:S,rotationTo:function(t,e,n){const r=Object(s.e)(e,n);return r<-.999999?(Object(s.d)(V,x,e),Object(s.u)(V)<1e-6&&Object(s.d)(V,z,e),Object(s.o)(V,V),l(t,V,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Object(s.d)(V,e,n),t[0]=V[0],t[1]=V[1],t[2]=V[2],t[3]=1+r,U(t,t))},sqlerp:function(t,e,n,r,o,i){return d(F,e,o,i),d(B,n,r,i),d(t,F,B,2*i*(1-i)),t},setAxes:function(t,e,n,r){const o=D;return o[0]=n[0],o[3]=n[1],o[6]=n[2],o[1]=r[0],o[4]=r[1],o[7]=r[2],o[2]=-e[0],o[5]=-e[1],o[8]=-e[2],U(t,p(t,o))}})},632:function(t,e,n){"use strict";function r(){return new Float32Array(3)}function o(t,e,n){const r=new Float32Array(3);return r[0]=t,r[1]=e,r[2]=n,r}function i(){return r()}function a(){return o(1,1,1)}function s(){return o(1,0,0)}function c(){return o(0,1,0)}function l(){return o(0,0,1)}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));const u=i(),f=a(),d=s(),b=c(),p=l();Object.freeze({__proto__:null,create:r,clone:function(t){const e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},fromValues:o,createView:function(t,e){return new Float32Array(t,e,3)},zeros:i,ones:a,unitX:s,unitY:c,unitZ:l,ZEROS:u,ONES:f,UNIT_X:d,UNIT_Y:b,UNIT_Z:p})},707:function(t,e,n){"use strict";var r,o=n(0),i=n(7),a=n(1),s=(n(6),n(5),n(4),n(20)),c=n(2),l=n(550),u=n(204),f=n(352);let d=r=class extends l.a{constructor(t){super(t),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:Object(i.a)(this.field),fieldTransformType:Object(i.a)(this.fieldTransformType),stops:Object(i.a)(this.stops),legendOptions:Object(i.a)(this.legendOptions)})}};Object(o.a)([Object(s.a)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),Object(o.a)([Object(a.b)({json:{write:!0},type:String})],d.prototype,"field",void 0),Object(o.a)([Object(a.b)({type:u.a,json:{write:!0}})],d.prototype,"legendOptions",void 0),Object(o.a)([Object(a.b)({type:l.a.fieldTransformTypeKebabDict.apiValues,json:{type:l.a.fieldTransformTypeKebabDict.jsonValues,read:l.a.fieldTransformTypeKebabDict.read,write:l.a.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),Object(o.a)([Object(a.b)({type:[f.a],json:{write:!0}})],d.prototype,"stops",void 0),d=r=Object(o.a)([Object(c.a)("esri.renderers.PointCloudStretchRenderer")],d);var b=d;e.a=b},748:function(t,e,n){"use strict";var r,o=n(0),i=n(7),a=n(1),s=n(6),c=(n(5),n(4),n(20)),l=n(2),u=n(550),f=n(204),d=n(23),b=n(10);let p=r=class extends b.a{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(i.a)(this.color)})}};Object(o.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"description",void 0),Object(o.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(o.a)([Object(a.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],p.prototype,"minValue",void 0),Object(o.a)([Object(a.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],p.prototype,"maxValue",void 0),Object(o.a)([Object(a.b)({type:d.a,json:{type:[s.a],write:!0}})],p.prototype,"color",void 0),p=r=Object(o.a)([Object(l.a)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);var h,y=p;let O=h=class extends u.a{constructor(t){super(t),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(i.a)(this.colorClassBreakInfos),legendOptions:Object(i.a)(this.legendOptions)})}};Object(o.a)([Object(c.a)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],O.prototype,"type",void 0),Object(o.a)([Object(a.b)({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(o.a)([Object(a.b)({type:f.a,json:{write:!0}})],O.prototype,"legendOptions",void 0),Object(o.a)([Object(a.b)({type:u.a.fieldTransformTypeKebabDict.apiValues,json:{type:u.a.fieldTransformTypeKebabDict.jsonValues,read:u.a.fieldTransformTypeKebabDict.read,write:u.a.fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(o.a)([Object(a.b)({type:[y],json:{write:!0}})],O.prototype,"colorClassBreakInfos",void 0),O=h=Object(o.a)([Object(l.a)("esri.renderers.PointCloudClassBreaksRenderer")],O);var j=O;e.a=j},749:function(t,e,n){"use strict";var r,o=n(0),i=n(7),a=n(1),s=n(6),c=(n(5),n(4),n(20)),l=n(2),u=n(550),f=n(204),d=n(23),b=n(10);let p=r=class extends b.a{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:Object(i.a)(this.values),color:Object(i.a)(this.color)})}};Object(o.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"description",void 0),Object(o.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(o.a)([Object(a.b)({type:[String],json:{write:!0}})],p.prototype,"values",void 0),Object(o.a)([Object(a.b)({type:d.a,json:{type:[s.a],write:!0}})],p.prototype,"color",void 0),p=r=Object(o.a)([Object(l.a)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],p);var h,y=p;let O=h=class extends u.a{constructor(t){super(t),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:Object(i.a)(this.field),fieldTransformType:Object(i.a)(this.fieldTransformType),colorUniqueValueInfos:Object(i.a)(this.colorUniqueValueInfos),legendOptions:Object(i.a)(this.legendOptions)})}};Object(o.a)([Object(c.a)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],O.prototype,"type",void 0),Object(o.a)([Object(a.b)({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(o.a)([Object(a.b)({type:u.a.fieldTransformTypeKebabDict.apiValues,json:{type:u.a.fieldTransformTypeKebabDict.jsonValues,read:u.a.fieldTransformTypeKebabDict.read,write:u.a.fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(o.a)([Object(a.b)({type:[y],json:{write:!0}})],O.prototype,"colorUniqueValueInfos",void 0),Object(o.a)([Object(a.b)({type:f.a,json:{write:!0}})],O.prototype,"legendOptions",void 0),O=h=Object(o.a)([Object(l.a)("esri.renderers.PointCloudUniqueValueRenderer")],O);var j=O;e.a=j},961:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(123),i=n(556);function a(){const t=new Float32Array(4);return t[3]=1,t}Object.freeze({__proto__:null,create:a,clone:function(t){const e=new Float32Array(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},fromValues:function(t,e,n,r){const o=new Float32Array(4);return o[0]=t,o[1]=e,o[2]=n,o[3]=r,o},createView:function(t,e){return new Float32Array(t,e,4)}});var s=n(38),c=n(632),l=n(296),u=n(26),f=n(748),d=n(707),b=n(749),p=n(9),h=n(7),y=n(4);const O=0,j=10,w=10,g=12,m=16;function v(t,e,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(t,n+O,j)),version:e.getUint16(n+w,!0),checksum:e.getUint32(n+g,!0)}}const M=0,C=4,T=8,A=16,U=24,I=32,S=40,V=48,x=56,z=64,F=72,B=80,D=84,P=88;function q(t){const e=new DataView(t,0);let n=0;const{identifier:r,version:o}=v(t,e,n);if(n+=m,"LEPCC     "!==r)throw new p.a("lepcc-decode-error","Bad identifier");if(o>1)throw new p.a("lepcc-decode-error","Unknown version");const i=(s=n,{sizeLo:(a=e).getUint32(s+M,!0),sizeHi:a.getUint32(s+C,!0),minX:a.getFloat64(s+T,!0),minY:a.getFloat64(s+A,!0),minZ:a.getFloat64(s+U,!0),maxX:a.getFloat64(s+I,!0),maxY:a.getFloat64(s+S,!0),maxZ:a.getFloat64(s+V,!0),errorX:a.getFloat64(s+x,!0),errorY:a.getFloat64(s+z,!0),errorZ:a.getFloat64(s+F,!0),count:a.getUint32(s+B,!0),reserved:a.getUint32(s+D,!0)});var a,s;if(n+=P,i.sizeHi*2**32+i.sizeLo!==t.byteLength)throw new p.a("lepcc-decode-error","Bad size");const c=new Float64Array(3*i.count),l=[],u=[],f=[],d=[];if(n=_(t,n,l),n=_(t,n,u),n=_(t,n,f),n=_(t,n,d),n!==t.byteLength)throw new p.a("lepcc-decode-error","Bad length");let b=0,h=0;for(let p=0;p<l.length;p++){h+=l[p];let t=0;for(let e=0;e<u[p];e++){t+=f[b];const e=d[b];c[3*b]=Math.min(i.maxX,i.minX+2*i.errorX*t),c[3*b+1]=Math.min(i.maxY,i.minY+2*i.errorY*h),c[3*b+2]=Math.min(i.maxZ,i.minZ+2*i.errorZ*e),b++}}return{errorX:i.errorX,errorY:i.errorY,errorZ:i.errorZ,result:c}}function _(t,e,n){const r=[];e=k(t,e,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,e=k(t,e,o);for(let t=0;t<o.length;t++)n.push(o[t]+r[i])}return e}function k(t,e,n){const r=new DataView(t,e),o=r.getUint8(0),i=31&o,a=!!(32&o),s=(192&o)>>6;let c=0;if(0===s)c=r.getUint32(1,!0),e+=5;else if(1===s)c=r.getUint16(1,!0),e+=3;else{if(2!==s)throw new p.a("lepcc-decode-error","Bad count type");c=r.getUint8(1),e+=2}if(a)throw new p.a("lepcc-decode-error","LUT not implemented");const l=Math.ceil(c*i/8),u=new Uint8Array(t,e,l);let f=0,d=0,b=0;const h=-1>>>32-i;for(let p=0;p<c;p++){for(;d<i;)f|=u[b]<<d,d+=8,b+=1;n[p]=f&h,f>>>=i,d-=i,d+i>32&&(f|=u[b-1]>>8-d)}return e+b}const R=0,L=4,N=8,E=12,Y=14,Z=15,K=16;function X(t){const e=new DataView(t,0);let n=0;const{identifier:r,version:o}=v(t,e,n);if(n+=m,"ClusterRGB"!==r)throw new p.a("lepcc-decode-error","Bad identifier");if(o>1)throw new p.a("lepcc-decode-error","Unknown version");const i=(s=n,{sizeLo:(a=e).getUint32(s+R,!0),sizeHi:a.getUint32(s+L,!0),count:a.getUint32(s+N,!0),colorMapCount:a.getUint16(s+E,!0),lookupMethod:a.getUint8(s+Y),compressionMethod:a.getUint8(s+Z)});var a,s;if(n+=K,i.sizeHi*2**32+i.sizeLo!==t.byteLength)throw new p.a("lepcc-decode-error","Bad size");if((2===i.lookupMethod||1===i.lookupMethod)&&0===i.compressionMethod){if(3*i.colorMapCount+i.count+n!==t.byteLength||i.colorMapCount>256)throw new p.a("lepcc-decode-error","Bad count");const e=new Uint8Array(t,n,3*i.colorMapCount),r=new Uint8Array(t,n+3*i.colorMapCount,i.count),o=new Uint8Array(3*i.count);for(let t=0;t<i.count;t++){const n=r[t];o[3*t]=e[3*n],o[3*t+1]=e[3*n+1],o[3*t+2]=e[3*n+2]}return o}if(0===i.lookupMethod&&0===i.compressionMethod){if(3*i.count+n!==t.byteLength||0!==i.colorMapCount)throw new p.a("lepcc-decode-error","Bad count");return new Uint8Array(t,n).slice()}if(i.lookupMethod<=2&&1===i.compressionMethod){if(n+3!==t.byteLength||1!==i.colorMapCount)throw new p.a("lepcc-decode-error","Bad count");const r=e.getUint8(n),o=e.getUint8(n+1),a=e.getUint8(n+2),s=new Uint8Array(3*i.count);for(let t=0;t<i.count;t++)s[3*t]=r,s[3*t+1]=o,s[3*t+2]=a;return s}throw new p.a("lepcc-decode-error","Bad method "+i.lookupMethod+","+i.compressionMethod)}const J=0,W=4,H=8,G=12,$=14,Q=15,tt=16;function et(t){const e=new DataView(t,0);let n=0;const{identifier:r,version:o}=v(t,e,n);if(n+=m,"Intensity "!==r)throw new p.a("lepcc-decode-error","Bad identifier");if(o>1)throw new p.a("lepcc-decode-error","Unknown version");const i=(s=n,{sizeLo:(a=e).getUint32(s+J,!0),sizeHi:a.getUint32(s+W,!0),count:a.getUint32(s+H,!0),scaleFactor:a.getUint16(s+G,!0),bitsPerPoint:a.getUint8(s+$),reserved:a.getUint8(s+Q)});var a,s;if(n+=tt,i.sizeHi*2**32+i.sizeLo!==t.byteLength)throw new p.a("lepcc-decode-error","Bad size");const c=new Uint16Array(i.count);if(8===i.bitsPerPoint){if(i.count+n!==t.byteLength)throw new p.a("lepcc-decode-error","Bad size");const e=new Uint8Array(t,n,i.count);for(let t=0;t<i.count;t++)c[t]=e[t]*i.scaleFactor}else if(16===i.bitsPerPoint){if(2*i.count+n!==t.byteLength)throw new p.a("lepcc-decode-error","Bad size");const e=new Uint16Array(t,n,i.count);for(let t=0;t<i.count;t++)c[t]=e[t]*i.scaleFactor}else{const e=[];if(k(t,n,e)!==t.byteLength)throw new p.a("lepcc-decode-error","Bad size");for(let t=0;t<i.count;t++)c[t]=e[t]*i.scaleFactor}return c}const nt=y.a.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function rt(t,e,n){let r="",o=0;for(;o<n;){const i=t[e+o];if(i<128)r+=String.fromCharCode(i),o++;else if(i>=192&&i<224){if(o+1>=n)throw new p.a("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&i)<<6|63&t[e+o+1];r+=String.fromCharCode(a),o+=2}else if(i>=224&&i<240){if(o+2>=n)throw new p.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&i)<<12|(63&t[e+o+1])<<6|63&t[e+o+2];r+=String.fromCharCode(a),o+=3}else{if(!(i>=240&&i<248))throw new p.a("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=n)throw new p.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&i)<<18|(63&t[e+o+1])<<12|(63&t[e+o+2])<<6|63&t[e+o+3];if(a>=65536){const t=55296+(a-65536>>10),e=56320+(1023&a);r+=String.fromCharCode(t,e)}else r+=String.fromCharCode(a);o+=4}}}return r}function ot(t,e){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<e.length;o++){const i=e[o],a=i.valueType||i.type,s=ut[a];n.fields[i.property]=s(t,r),r+=lt[a].BYTES_PER_ELEMENT}return n.byteCount=r,n}function it(t,e){return new(0,lt[e.valueType])(t,e.byteOffset,e.count*e.valuesPerElement)}function at(t,e,n){if(e!==t&&nt.error(`Invalid ${n} buffer size\n expected: ${t}, actual: ${e})`),e<t)throw new p.a("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:e})}const st={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function ct(t,e,n){if("lepcc-rgb"===t.encoding)return X(e);if("lepcc-intensity"===t.encoding)return et(e);if(null!=t.encoding&&""!==t.encoding)throw new p.a("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(nt.warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),"ObjectIds"===t.ordering[0]&&t.hasOwnProperty("objectIds")&&(nt.warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const r=function(t,e,n){const r=null!=e.header?ot(t,e.header):{byteOffset:0,byteCount:0,fields:{count:n}},o={header:r,byteOffset:r.byteCount,byteCount:0,entries:Object.create(null)};let i=r.byteCount;for(let a=0;a<e.ordering.length;a++){const t=e.ordering[a],n=Object(h.a)(e[t]);if(n.count=r.fields.count,"String"===n.valueType){if(n.byteOffset=i,n.byteCount=r.fields[t+"ByteCount"],"UTF-8"!==n.encoding)throw new p.a("unsupported-encoding","Unsupported String encoding.",{encoding:n.encoding})}else{if(!ft(n.valueType))throw new p.a("unsupported-value-type","Unsupported binary valueType",{valueType:n.valueType});{const t=dt(n.valueType);i+=i%t!=0?t-i%t:0,n.byteOffset=i,n.byteCount=t*n.valuesPerElement*n.count}}i+=n.byteCount,o.entries[t]=n}return o.byteCount=i-o.byteOffset,o}(e,t,n);at(r.byteOffset+r.byteCount,e.byteLength,"attribute");const o=r.entries.attributeValues||r.entries.objectIds;if(o){if("String"===o.valueType){const t=r.entries.attributeByteCounts,n=it(e,t),i=function(t,e){return new Uint8Array(t,e.byteOffset,e.byteCount)}(e,o);return function(t,e,n){const r=[];let o,i,a=0;for(i=0;i<t;i+=1){if(o=e[i],o>0){if(r.push(rt(n,a,o-1)),0!==n[a+o-1])throw new p.a("string-array-error","Invalid string array: missing null termination.")}else r.push(null);a+=o}return r}(t.count,n,i)}return it(e,o)}throw new p.a("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const lt={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},ut={Float32:(t,e)=>new DataView(t,0).getFloat32(e,!0),Float64:(t,e)=>new DataView(t,0).getFloat64(e,!0),UInt8:(t,e)=>new DataView(t,0).getUint8(e),Int8:(t,e)=>new DataView(t,0).getInt8(e),UInt16:(t,e)=>new DataView(t,0).getUint16(e,!0),Int16:(t,e)=>new DataView(t,0).getInt16(e,!0),UInt32:(t,e)=>new DataView(t,0).getUint32(e,!0),Int32:(t,e)=>new DataView(t,0).getInt32(e,!0)};function ft(t){return lt.hasOwnProperty(t)}function dt(t){return ft(t)?lt[t].BYTES_PER_ELEMENT:0}function bt(t,e){if(null==t.encoding||""===t.encoding){const n=function(t,e){const n=ot(t,e&&e.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,a=null!=i.vertexCount?i.vertexCount:i.count;for(const l of e.ordering){if(!e.vertexAttributes[l])continue;const t={...e.vertexAttributes[l],byteOffset:r,count:a},n=st[l]?st[l]:"_"+l;o.vertexAttributes[n]=t,r+=dt(t.valueType)*t.valuesPerElement*a}const s=i.faceCount;if(e.faces&&s){o.faces={};for(const t of e.ordering){if(!e.faces[t])continue;const n={...e.faces[t],byteOffset:r,count:s};o.faces[t]=n,r+=dt(n.valueType)*n.valuesPerElement*s}}const c=i.featureCount;if(e.featureAttributes&&e.featureAttributeOrder&&c){o.featureAttributes={};for(const t of e.featureAttributeOrder){if(!e.featureAttributes[t])continue;const n={...e.featureAttributes[t],byteOffset:r,count:c};o.featureAttributes[t]=n,r+=("UInt64"===n.valueType?8:dt(n.valueType))*n.valuesPerElement*c}}return at(r,t.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}(e,t);if(Object(r.h)(n.vertexAttributes.position))return;const o=it(e,n.vertexAttributes.position),i=n.header.fields,a=[i.offsetX,i.offsetY,i.offsetZ],s=[i.scaleX,i.scaleY,i.scaleZ],c=o.length/3,l=new Float64Array(3*c);for(let t=0;t<c;t++)l[3*t]=o[3*t]*s[0]+a[0],l[3*t+1]=o[3*t+1]*s[1]+a[1],l[3*t+2]=o[3*t+2]*s[2]+a[2];return l}if("lepcc-xyz"===t.encoding)return q(e).result}function pt(t,e,n){return Object(r.i)(t)&&t.attributeInfo.useElevation?function(t,e){const n=new Float64Array(e);for(let r=0;r<e;r++)n[r]=t[3*r+2];return n}(e,n):Object(r.i)(t)?ct(t.attributeInfo.storageInfo,t.buffer,n):null}function ht(t){return null==t||"none"===t?null:"low-four-bit"===t?t=>15&t:"high-four-bit"===t?t=>(240&t)>>4:"absolute-value"===t?t=>Math.abs(t):"modulo-ten"===t?t=>t%10:null}function yt(t){let e=0;for(const n of t||[])e|=1<<n;return e}class Ot{transform(t){const e=this._transform(t),n=[e.points.buffer,e.rgb.buffer];Object(r.i)(e.pointIdFilterMap)&&n.push(e.pointIdFilterMap.buffer);for(const r of e.attributes)"buffer"in r.values&&Object(o.c)(r.values.buffer)&&r.values.buffer!==e.rgb.buffer&&n.push(r.values.buffer);return Promise.resolve({result:e,transferList:n})}_transform(t){const e=bt(t.schema,t.geometryBuffer);let n=e.length/3,o=null;const i=[],a=pt(t.primaryAttributeData,e,n);Object(r.i)(t.primaryAttributeData)&&a&&i.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:a});const s=pt(t.modulationAttributeData,e,n);Object(r.i)(t.modulationAttributeData)&&s&&i.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:s});let c=function(t,e,n,r){const{rendererJSON:o,isRGBRenderer:i}=t;let a=null,s=null;if(e&&i)a=e;else if(e&&"pointCloudUniqueValueRenderer"===o.type){s=b.a.fromJSON(o);const t=s.colorUniqueValueInfos;a=new Uint8Array(3*r);const n=ht(s.fieldTransformType);for(let o=0;o<r;o++){const r=(n?n(e[o]):e[o])+"";for(let e=0;e<t.length;e++)if(t[e].values.indexOf(r)>=0){a[3*o]=t[e].color.r,a[3*o+1]=t[e].color.g,a[3*o+2]=t[e].color.b;break}}}else if(e&&"pointCloudStretchRenderer"===o.type){s=d.a.fromJSON(o);const t=s.stops;a=new Uint8Array(3*r);const n=ht(s.fieldTransformType);for(let o=0;o<r;o++){const r=n?n(e[o]):e[o],i=t.length-1;if(r<t[0].value)a[3*o]=t[0].color.r,a[3*o+1]=t[0].color.g,a[3*o+2]=t[0].color.b;else if(r>=t[i].value)a[3*o]=t[i].color.r,a[3*o+1]=t[i].color.g,a[3*o+2]=t[i].color.b;else for(let e=1;e<t.length;e++)if(r<t[e].value){const n=(r-t[e-1].value)/(t[e].value-t[e-1].value);a[3*o]=t[e].color.r*n+t[e-1].color.r*(1-n),a[3*o+1]=t[e].color.g*n+t[e-1].color.g*(1-n),a[3*o+2]=t[e].color.b*n+t[e-1].color.b*(1-n);break}}}else if(e&&"pointCloudClassBreaksRenderer"===o.type){s=f.a.fromJSON(o);const t=s.colorClassBreakInfos;a=new Uint8Array(3*r);const n=ht(s.fieldTransformType);for(let o=0;o<r;o++){const r=n?n(e[o]):e[o];for(let e=0;e<t.length;e++)if(r>=t[e].minValue&&r<=t[e].maxValue){a[3*o]=t[e].color.r,a[3*o+1]=t[e].color.g,a[3*o+2]=t[e].color.b;break}}}else{a=new Uint8Array(3*r);for(let t=0;t<a.length;t++)a[t]=255}if(n&&s&&s.colorModulation){const t=s.colorModulation.minValue,e=s.colorModulation.maxValue,o=.3;for(let i=0;i<r;i++){const r=n[i],s=r>=e?1:r<=t?o:o+(1-o)*(r-t)/(e-t);a[3*i]=s*a[3*i],a[3*i+1]=s*a[3*i+1],a[3*i+2]=s*a[3*i+2]}}return a}(t.rendererInfo,a,s,n);if(t.filterInfo&&t.filterInfo.length>0&&Object(r.i)(t.filterAttributesData)){const r=t.filterAttributesData.map(t=>{const r=pt(t,e,n),o={attributeInfo:t.attributeInfo,values:r};return i.push(o),o});o=new Uint32Array(n),n=function(t,e,n,r,o){const i=t.length/3;let a=0;for(let s=0;s<i;s++){let i=!0;for(let t=0;t<r.length&&i;t++){const{filterJSON:e}=r[t],n=o[t].values[s];switch(e.type){case"pointCloudValueFilter":{const t="exclude"===e.mode;-1!==e.values.indexOf(n)===t&&(i=!1);break}case"pointCloudBitfieldFilter":{const t=yt(e.requiredSetBits),r=yt(e.requiredClearBits);(n&t)===t&&0==(n&r)||(i=!1);break}case"pointCloudReturnFilter":{const t=15&n,r=n>>>4&15,o=r>1,a=1===t,s=t===r;let c=!1;for(const n of e.includedReturns)if("last"===n&&s||"firstOfMany"===n&&a&&o||"lastOfMany"===n&&s&&o||"single"===n&&!o){c=!0;break}c||(i=!1);break}}}i&&(n[a]=s,t[3*a]=t[3*s],t[3*a+1]=t[3*s+1],t[3*a+2]=t[3*s+2],e[3*a]=e[3*s],e[3*a+1]=e[3*s+1],e[3*a+2]=e[3*s+2],a++)}return a}(e,c,o,t.filterInfo,r)}for(const r of t.userAttributesData){const t=pt(r,e,n);i.push({attributeInfo:r.attributeInfo,values:t})}3*n<c.length&&(c=new Uint8Array(c.buffer.slice(0,3*n))),this._applyElevationOffsetInPlace(e,n,t.elevationOffset);const l=this._transformCoordinates(e,n,t.obb,u.a.fromJSON(t.inSR),u.a.fromJSON(t.outSR));return{obb:t.obb,points:l,rgb:c,attributes:i,pointIdFilterMap:o}}_transformCoordinates(t,e,n,r,o){if(!Object(l.i)(t,r,0,t,o,0,e))throw Error("Can't reproject");const a=Object(c.b)(n.center[0],n.center[1],n.center[2]),u=Object(c.a)(),f=Object(c.a)();Object(i.a)(jt,n.quaternion);const d=new Float32Array(3*e);for(let i=0;i<e;i++)u[0]=t[3*i]-a[0],u[1]=t[3*i+1]-a[1],u[2]=t[3*i+2]-a[2],Object(s.q)(f,u,jt),n.halfSize[0]=Math.max(n.halfSize[0],Math.abs(f[0])),n.halfSize[1]=Math.max(n.halfSize[1],Math.abs(f[1])),n.halfSize[2]=Math.max(n.halfSize[2],Math.abs(f[2])),d[3*i]=u[0],d[3*i+1]=u[1],d[3*i+2]=u[2];return d}_applyElevationOffsetInPlace(t,e,n){if(0!==n)for(let r=0;r<e;r++)t[3*r+2]+=n}}const jt=a();e.default=function(){return new Ot}}}]);
//# sourceMappingURL=51.33d38741.chunk.js.map