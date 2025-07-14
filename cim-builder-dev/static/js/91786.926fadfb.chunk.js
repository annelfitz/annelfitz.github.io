"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[91786],{94587:(e,t,n)=>{n.d(t,{fY:()=>a});var o=n(78393),r=n(62984);function a(e,t=!1){return e<=o.y9?t?new Array(e).fill(0):new Array(e):(0,r.Bg)(e)}},81284:(e,t,n)=>{function o(e){return"point"===e.type}n.d(t,{v:()=>o})},36423:(e,t,n)=>{n.d(t,{$2:()=>P,$C:()=>A,Hj:()=>M,Mh:()=>O,W$:()=>g,pW:()=>b,t8:()=>y,vY:()=>S});var o=n(31633),r=n(34761),a=n(13191),i=n(9392),s=n(43047),l=n(55855),c=n(9956),u=n(42294),f=n(2413),h=n(205),p=n(5262),d=n(99773),v=n(18117),w=n(32535);function g(e,t){if("point"===e.type)return x(e,t,!1);if((0,w.gr)(e))switch(e.type){case"extent":return x(e.center,t,!1);case"polygon":return x(e.centroid,t,!1);case"polyline":return x(m(e),t,!0);case"mesh":return x((0,d.MW)(e.vertexSpace,e.spatialReference)??e.extent.center,t,!1);case"multipoint":return}else switch(e.type){case"extent":return x(function(e){return(0,v.TH)(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),null!=e.zmin&&null!=e.zmax&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}(e),t,!0);case"polygon":return x(function(e){const t=e.rings[0];if(!t||0===t.length)return null;const n=(0,h.S8)(e.rings,!!e.hasZ);return(0,v.TH)(n[0],n[1],n[2],e.spatialReference)}(e),t,!0);case"polyline":return x(m(e),t,!0);case"multipoint":return}}function m(e){const t=e.paths[0];if(!t||0===t.length)return null;const n=(0,p.$H)(t,(0,p.Yl)(t)/2);return(0,v.TH)(n[0],n[1],n[2],e.spatialReference)}function x(e,t,n){const o=n?e:(0,w.EL)(e);return t&&e?(0,c.projectPoint)(e,o,t)?o:null:o}function y(e,t,n,o=0){if(e){t||(t=(0,f.vt)());const r=e;let a=.5*r.width*(n-1),i=.5*r.height*(n-1);return r.width<1e-7*r.height?a+=i/20:r.height<1e-7*r.width&&(i+=a/20),(0,s.s)(t,r.xmin-a-o,r.ymin-i-o,r.xmax+a+o,r.ymax+i+o),t}return null}function A(e,t,n=null){const o=(0,l.o8)(l.Un);return null!=e&&(o[0]=e[0],o[1]=e[1],o[2]=e[2],e.length>3&&(o[3]=e[3])),null!=t&&(o[3]=t),n&&(0,s.d)(o,o,n),o}function b(e=i.Un,t,n,o=1){const r=new Array(3);if(null==t||null==n)r[0]=1,r[1]=1,r[2]=1;else{let o,a=0;for(let i=2;i>=0;i--){const s=e[i],l=null!=s,c=0===i&&!o&&!l,u=n[i];let f;"symbol-value"===s||c?f=0!==u?t[i]/u:1:l&&"proportional"!==s&&isFinite(s)&&(f=0!==u?s/u:1),null!=f&&(r[i]=f,o=f,a=Math.max(a,Math.abs(f)))}for(let e=2;e>=0;e--)null==r[e]?r[e]=o:0===r[e]&&(r[e]=.001*a)}for(let a=2;a>=0;a--)r[a]/=o;return(0,i.ci)(r)}function M(e){return O(function(e){return null!=e.isPrimitive}(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function O(e){const t=e=>null==e||e>=0;return Array.isArray(e)?e.every(t):t(e)}function P(e,t,n,o=(0,a.vt)()){return e&&(0,r.Qr)(o,o,-e/180*Math.PI),t&&(0,r.eL)(o,o,t/180*Math.PI),n&&(0,r.Z8)(o,o,n/180*Math.PI),o}function S(e,t,n){if(null!=n.minDemResolution)return n.minDemResolution;const r=(0,o.GA)(t),a=(0,u.VL)(e)*r,i=(0,u.yr)(e)*r,s=(0,u.uJ)(e)*(t.isGeographic?1:r);return 0===a&&0===i&&0===s?n.minDemResolutionForPoints:.01*Math.max(a,i,s)}},70667:(e,t,n)=>{n.d(t,{te:()=>d,xJ:()=>m,zh:()=>g});var o=n(19555),r=n(72745),a=n(55855),i=n(34111),s=n(482),l=n(44815),c=n(75002),u=n(94587),f=n(38496),h=n(50468),p=n(17345);function d(e,t,n=null){const r=[],u=t.mapPositions;!function(e,t){const{attributeData:{position:n},removeDuplicateStartEnd:o}=e,r=function(e){const t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}(n)&&o,a=n.length/3-(r?1:0),i=new Array(2*(a-1)),s=r?n.slice(0,-3):n;let l=0;for(let c=0;c<a-1;c++)i[l++]=c,i[l++]=c+1;t.push(["position",new h.n(s,i,3,r)])}(t,r);const d=r[0][1].data,g=r[0][1].indices.length,m=(0,f.EH)(g);return function(e,t,n){if(null!=e.attributeData.colorFeature)return;const o=e.attributeData.color;t.push(["color",new h.n(o??a.Un,n,4)])}(t,r,m),function(e,t,n){null==e.attributeData.sizeFeature&&t.push(["size",new h.n([e.attributeData.size??1],n,1,!0)])}(t,r,m),function(e,t,n){e.attributeData.normal&&t.push(["normal",new h.n(e.attributeData.normal,n,3)])}(t,r,m),function(e,t,n){null!=e.attributeData.colorFeature&&t.push(["colorFeatureAttribute",new h.n([e.attributeData.colorFeature],n,1,!0)])}(t,r,m),function(e,t,n){null!=e.attributeData.sizeFeature&&t.push(["sizeFeatureAttribute",new h.n([e.attributeData.sizeFeature],n,1,!0)])}(t,r,m),function(e,t){const{attributeData:{position:n,timeStamps:o}}=e;if(!o)return;const r=n.length/3,a=new Array(2*(r-1));let i=0;for(let s=0;s<r-1;s++)a[i++]=s,a[i++]=s+1;t.push(["timeStamps",new h.n(o,a,3)])}(t,r),function(e,t,n){null!=e.attributeData.opacityFeature&&t.push(["opacityFeatureAttribute",new h.n([e.attributeData.opacityFeature],n,1,!0)])}(t,r,m),function(e,t,n){if(null==e.overlayInfo||1!==e.overlayInfo.renderCoordsHelper.viewingMode||!e.overlayInfo.spatialReference.isGeographic)return;const r=(0,l.jh)(n.length),a=(0,i.tO)(e.overlayInfo.spatialReference);for(let o=0;o<r.length;o+=3)(0,s.RC)(n,o,r,o,a);const u=n.length/3,f=(0,c.oe)(u+1);let p=v,d=w,g=0,m=0;(0,o.hZ)(p,r[m++],r[m++]),m++,f[0]=0;for(let i=1;i<u+1;++i)i===u&&(m=0),(0,o.hZ)(d,r[m++],r[m++]),m++,g+=(0,o.xg)(p,d),f[i]=g,[p,d]=[d,p];t.push(["distanceToStart",new h.n(f,t[0][1].indices,1,!0)])}(t,r,d),new p.V(e,r,u,2,n)}const v=(0,r.vt)(),w=(0,r.vt)();function g(e,t,n){if(null==e||0===e.length)return[];const o=[];return e.forEach(((e,r)=>{const a=e.length,i=(0,l.jh)(3*a);e.forEach(((e,t)=>{i[3*t]=e[0],i[3*t+1]=e[1],i[3*t+2]=e[2]}));const s=null!=n?m(n[r]):void 0,c={attributeData:{position:i,normal:t,timeStamps:s},removeDuplicateStartEnd:!1};o.push(c)})),o}function m(e){const t=(0,u.fY)(3*e.length),n=e[0],o=e[e.length-1];for(let r=0;r<e.length;r++)t[3*r]=e[r],t[3*r+1]=n,t[3*r+2]=o;return t}},72900:(e,t,n)=>{n.d(t,{CN:()=>s,I9:()=>f,PY:()=>l,Q_:()=>i,ny:()=>c,sZ:()=>u});n(81806);var o=n(14522),r=n(55855),a=n(76632);const i=128,s=.5,l=(0,r.CN)(s/2,s/2,1-s/2,1-s/2);function c(e){return"cross"===e||"x"===e}function u(e,t=i,n=t*s,o=0){const{data:r,parameters:l}=f(e,t,n,o);return new a.g(r,l)}function f(e,t=i,n=t*s,o=0){return{data:h(e,t,n,o),parameters:{mipmap:!1,wrap:{s:33071,t:33071},width:t,height:t,components:4,noUnpackFlip:!0,reloadable:!0}}}function h(e,t=i,n=t*s,o=0){switch(e){case"circle":default:return function(e,t){const n=e/2-.5;return g(e,v(n,n,t/2))}(t,n);case"square":return function(e,t){return p(e,t,!1)}(t,n);case"cross":return function(e,t,n=0){return d(e,t,!1,n)}(t,n,o);case"x":return function(e,t,n=0){return d(e,t,!0,n)}(t,n,o);case"kite":return function(e,t){return p(e,t,!0)}(t,n);case"triangle":return function(e,t){return g(e,w(e/2,t,t/2))}(t,n);case"arrow":return function(e,t){const n=t,o=t/2,r=e/2,a=.8*n,i=v(r,(e-t)/2-a,Math.sqrt(a*a+o*o)),s=w(r,n,o);return g(e,((e,t)=>Math.max(s(e,t),-i(e,t))))}(t,n)}}function p(e,t,n){return n&&(t/=Math.SQRT2),g(e,((o,r)=>{let a=o-.5*e+.25,i=.5*e-r-.75;if(n){const e=(a+i)/Math.SQRT2;i=(i-a)/Math.SQRT2,a=e}return Math.max(Math.abs(a),Math.abs(i))-.5*t}))}function d(e,t,n,o=0){t-=o,n&&(t*=Math.SQRT2);const r=.5*t;return g(e,((t,a)=>{let i,s=t-.5*e,l=.5*e-a-1;if(n){const e=(s+l)/Math.SQRT2;l=(l-s)/Math.SQRT2,s=e}return s=Math.abs(s),l=Math.abs(l),i=s>l?s>r?Math.sqrt((s-r)*(s-r)+l*l):l:l>r?Math.sqrt(s*s+(l-r)*(l-r)):s,i-=o/2,i}))}function v(e,t,n){return(o,r)=>{const a=o-e,i=r-t;return Math.sqrt(a*a+i*i)-n}}function w(e,t,n){const o=Math.sqrt(t*t+n*n);return(r,a)=>{const i=Math.abs(r-e)-n,s=a-e+t/2+.75,l=(t*i+n*s)/o,c=-s;return Math.max(l,c)}}function g(e,t){const n=new Uint8Array(4*e*e);for(let r=0;r<e;r++)for(let a=0;a<e;a++){const i=a+e*r;let s=t(a,r);s=s/e+.5,(0,o.U)(s,n,4*i)}return n}},98720:(e,t,n)=>{n.d(t,{K:()=>a});var o=n(67582),r=n(86955);function a(e){e.uniforms.add(new o.o("alignPixelEnabled",(e=>e.alignPixelEnabled))),e.code.add(r.H`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(r.H`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}},40318:(e,t,n)=>{n.d(t,{Q:()=>f,R:()=>u});var o=n(25530),r=n(69817),a=n(42451),i=n(51596),s=n(23148),l=n(21390),c=n(86955);const u=.5;function f(e,t){e.include(r.Y6),e.attributes.add("position","vec3"),e.attributes.add("normal","vec3"),e.attributes.add("centerOffsetAndDistance","vec4");const n=e.vertex;(0,a.NB)(n,t),(0,a.yu)(n,t),n.uniforms.add(new i.I("viewport",(e=>e.camera.fullViewport)),new l.m("polygonOffset",(e=>e.shaderPolygonOffset)),new s.U("cameraGroundRelative",(e=>e.camera.aboveGround?1:-1))),t.hasVerticalOffset&&(0,o.VQ)(n),n.code.add(c.H`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),n.code.add(c.H`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${t.terrainDepthTest?c.H.float(0):c.H`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),t.draped&&!t.hasVerticalOffset||(0,a.S7)(n),t.draped||(n.uniforms.add(new s.U("perDistancePixelRatio",(e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2)))),n.code.add(c.H`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${c.H.float(u)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),t.screenCenterOffsetUnitsEnabled&&(0,a.Nz)(n),t.hasScreenSizePerspective&&(0,r.OH)(n),n.code.add(c.H`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?c.H`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled?"":c.H`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}},62374:(e,t,n)=>{n.d(t,{y:()=>l});var o=n(98720),r=n(51596),a=n(23148),i=n(86955),s=n(4653);function l(e){e.vertex.uniforms.add(new a.U("renderTransparentlyOccludedHUD",(e=>0===e.hudRenderStyle?1:1===e.hudRenderStyle?0:.75)),new r.I("viewport",(e=>e.camera.fullViewport)),new s.x("hudVisibilityTexture",(e=>e.hudVisibility?.getTexture()))),e.vertex.include(o.K),e.vertex.code.add(i.H`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}},81449:(e,t,n)=>{n.d(t,{W:()=>r});var o=n(86955);function r(e){e.code.add(o.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),e.code.add(o.H`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(o.H`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}},40926:(e,t,n)=>{n.d(t,{zC:()=>re,C1:()=>O,EE:()=>Z,YG:()=>X,nW:()=>J,td:()=>z,_B:()=>ne,Nq:()=>ee,DJ:()=>k,Y6:()=>Q,uX:()=>B,Z8:()=>te,CM:()=>N,Gj:()=>W,Ho:()=>Y,Nb:()=>K,Xl:()=>ie,xh:()=>oe});var o=n(20664),r=n(83755),a=n(9392),i=n(44815),s=n(75002),l=n(38496),c=n(13927),u=n(95925),f=n(70667),h=n(50468);function p(e,t){const n=e[t],o=e[t+1],r=e[t+2];return Math.sqrt(n*n+o*o+r*r)}function d(e,t){const n=e[t],o=e[t+1],r=e[t+2],a=1/Math.sqrt(n*n+o*o+r*r);e[t]*=a,e[t+1]*=a,e[t+2]*=a}function v(e,t,n){e[t]*=n,e[t+1]*=n,e[t+2]*=n}var w=n(17345),g=n(86994);const m=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],x=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],y=[0,0,1,0,1,1,0,1],A=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],b=new Array(36);for(let ce=0;ce<6;ce++)for(let e=0;e<6;e++)b[6*ce+e]=ce;const M=new Array(36);for(let ce=0;ce<6;ce++)M[6*ce]=0,M[6*ce+1]=1,M[6*ce+2]=2,M[6*ce+3]=2,M[6*ce+4]=3,M[6*ce+5]=0;function O(e,t){Array.isArray(t)||(t=[t,t,t]);const n=new Array(24);for(let o=0;o<8;o++)n[3*o]=m[o][0]*t[0],n[3*o+1]=m[o][1]*t[1],n[3*o+2]=m[o][2]*t[2];return new w.V(e,[["position",new h.n(n,A,3,!0)],["normal",new h.n(x,b,3)],["uv0",new h.n(y,M,2)]])}const P=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],S=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],D=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],V=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function z(e,t){Array.isArray(t)||(t=[t,t,t]);const n=new Array(18);for(let o=0;o<6;o++)n[3*o]=P[o][0]*t[0],n[3*o+1]=P[o][1]*t[1],n[3*o+2]=P[o][2]*t[2];return new w.V(e,[["position",new h.n(n,D,3,!0)],["normal",new h.n(S,V,3)]])}const C=(0,r.fA)(-.5,0,-.5),H=(0,r.fA)(.5,0,-.5),T=(0,r.fA)(0,0,.5),R=(0,r.fA)(0,.5,0),F=(0,r.vt)(),U=(0,r.vt)(),G=(0,r.vt)(),j=(0,r.vt)(),I=(0,r.vt)();(0,o.d)(F,C,R),(0,o.d)(U,C,H),(0,o.h)(G,F,U),(0,o.n)(G,G),(0,o.d)(F,H,R),(0,o.d)(U,H,T),(0,o.h)(j,F,U),(0,o.n)(j,j),(0,o.d)(F,T,R),(0,o.d)(U,T,C),(0,o.h)(I,F,U),(0,o.n)(I,I);const E=[C,H,T,R],_=[0,-1,0,G[0],G[1],G[2],j[0],j[1],j[2],I[0],I[1],I[2]],$=[0,1,2,3,1,0,3,2,1,3,0,2],q=[0,0,0,1,1,1,2,2,2,3,3,3];function Y(e,t){Array.isArray(t)||(t=[t,t,t]);const n=new Array(12);for(let o=0;o<4;o++)n[3*o]=E[o][0]*t[0],n[3*o+1]=E[o][1]*t[1],n[3*o+2]=E[o][2]*t[2];return new w.V(e,[["position",new h.n(n,$,3,!0)],["normal",new h.n(_,q,3)]])}function N(e,t,n,o,r={uv:!0}){const a=-Math.PI,i=2*Math.PI,c=-Math.PI/2,u=Math.PI,f=Math.max(3,Math.floor(n)),p=Math.max(2,Math.floor(o)),d=(f+1)*(p+1),v=(0,s.oe)(3*d),g=(0,s.oe)(3*d),m=(0,s.oe)(2*d),x=[];let y=0;for(let s=0;s<=p;s++){const e=[],n=s/p,o=c+n*u,r=Math.cos(o);for(let s=0;s<=f;s++){const l=s/f,c=a+l*i,u=Math.cos(c)*r,h=Math.sin(o),p=-Math.sin(c)*r;v[3*y]=u*t,v[3*y+1]=h*t,v[3*y+2]=p*t,g[3*y]=u,g[3*y+1]=h,g[3*y+2]=p,m[2*y]=l,m[2*y+1]=n,e.push(y),++y}x.push(e)}const A=new Array;for(let s=0;s<p;s++)for(let e=0;e<f;e++){const t=x[s][e],n=x[s][e+1],o=x[s+1][e+1],r=x[s+1][e];0===s?(A.push(t),A.push(o),A.push(r)):s===p-1?(A.push(t),A.push(n),A.push(o)):(A.push(t),A.push(n),A.push(o),A.push(o),A.push(r),A.push(t))}const b=[["position",new h.n(v,A,3,!0)],["normal",new h.n(g,A,3,!0)]];return r.uv&&b.push(["uv0",new h.n(m,A,2,!0)]),r.offset&&(b[0][0]="offset",b.push(["position",new h.n(Float64Array.from(r.offset),(0,l.EH)(A.length),3,!0)])),new w.V(e,b)}function B(e,t,n,o){const r=Q(t,n,o);return new w.V(e,r)}function Q(e,t,n){const o=e;let r,a;if(n)r=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{const e=o*(1+Math.sqrt(5))/2;r=[-o,e,0,o,e,0,-o,-e,0,o,-e,0,0,-o,e,0,o,e,0,-o,-e,0,o,-e,e,0,-o,e,0,o,-e,0,-o,-e,0,o],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let s=0;s<r.length;s+=3)v(r,s,e/p(r,s));let i={};function l(t,n){t>n&&([t,n]=[n,t]);const o=t.toString()+"."+n.toString();if(i[o])return i[o];let a=r.length;return r.length+=3,function(e,t,n,o,r,a=t){(r=r||e)[a]=e[t]+n[o],r[a+1]=e[t+1]+n[o+1],r[a+2]=e[t+2]+n[o+2]}(r,3*t,r,3*n,r,a),v(r,a,e/p(r,a)),a/=3,i[o]=a,a}for(let s=0;s<t;s++){const e=a.length,t=new Array(4*e);for(let n=0;n<e;n+=3){const e=a[n],o=a[n+1],r=a[n+2],i=l(e,o),s=l(o,r),c=l(r,e),u=4*n;t[u]=e,t[u+1]=i,t[u+2]=c,t[u+3]=o,t[u+4]=s,t[u+5]=i,t[u+6]=r,t[u+7]=c,t[u+8]=s,t[u+9]=i,t[u+10]=s,t[u+11]=c}a=t,i={}}const c=(0,s.Wz)(r);for(let s=0;s<c.length;s+=3)d(c,s);return[["position",new h.n((0,s.Wz)(r),a,3,!0)],["normal",new h.n(c,a,3,!0)]]}function k(e,{normal:t,position:n,color:o,rotation:r,size:i,centerOffsetAndDistance:s,uvi:c,featureAttribute:u,olidColor:f=null}={}){const p=n?(0,a.o8)(n):(0,a.vt)(),d=t?(0,a.o8)(t):(0,a.fA)(0,0,1),v=o?[o[0],o[1],o[2],o.length>3?o[3]:255]:[255,255,255,255],g=null!=i&&2===i.length?i:[1,1],m=null!=r?[r]:[0],x=(0,l.EH)(1),y=[["position",new h.n(p,x,3,!0)],["normal",new h.n(d,x,3,!0)],["color",new h.n(v,x,4,!0)],["size",new h.n(g,x,2)],["rotation",new h.n(m,x,1,!0)]];if(c&&y.push(["uvi",new h.n(c,x,c.length)]),null!=s){const e=[s[0],s[1],s[2],s[3]];y.push(["centerOffsetAndDistance",new h.n(e,x,4)])}if(u){const e=[u[0],u[1],u[2],u[3]];y.push(["featureAttribute",new h.n(e,x,4)])}return new w.V(e,y,null,1,f)}const L=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]];function W(e,t=L){const n=new Array(12);for(let i=0;i<4;i++)for(let e=0;e<3;e++)n[3*i+e]=t[i][e];const o=[0,1,2,2,3,0],r=[0,0,0,0,0,0],a=[["position",new h.n(n,o,3,!0)],["normal",new h.n([0,0,1],r,3,!0)],["uv0",new h.n([0,0,1,0,1,1,0,1],o,2,!0)],["color",new h.n([255,255,255,255],r,4,!0)]];return new w.V(e,a)}function X(e,t,n,o,a=!0,i=!0){let l=0;const c=t,u=e;let f=(0,r.fA)(0,l,0),p=(0,r.fA)(0,l+u,0),d=(0,r.fA)(0,-1,0),v=(0,r.fA)(0,1,0);o&&(l=u,p=(0,r.fA)(0,0,0),f=(0,r.fA)(0,l,0),d=(0,r.fA)(0,1,0),v=(0,r.fA)(0,-1,0));const w=[p,f],g=[d,v],m=n+2,x=Math.sqrt(u*u+c*c);if(o)for(let s=n-1;s>=0;s--){const e=s*(2*Math.PI/n),t=(0,r.fA)(Math.cos(e)*c,l,Math.sin(e)*c);w.push(t);const o=(0,r.fA)(u*Math.cos(e)/x,-c/x,u*Math.sin(e)/x);g.push(o)}else for(let s=0;s<n;s++){const e=s*(2*Math.PI/n),t=(0,r.fA)(Math.cos(e)*c,l,Math.sin(e)*c);w.push(t);const o=(0,r.fA)(u*Math.cos(e)/x,c/x,u*Math.sin(e)/x);g.push(o)}const y=new Array,A=new Array;if(a){for(let e=3;e<w.length;e++)y.push(1),y.push(e-1),y.push(e),A.push(0),A.push(0),A.push(0);y.push(w.length-1),y.push(2),y.push(1),A.push(0),A.push(0),A.push(0)}if(i){for(let e=3;e<w.length;e++)y.push(e),y.push(e-1),y.push(0),A.push(e),A.push(e-1),A.push(1);y.push(0),y.push(2),y.push(w.length-1),A.push(1),A.push(2),A.push(g.length-1)}const b=(0,s.oe)(3*m);for(let r=0;r<m;r++)b[3*r]=w[r][0],b[3*r+1]=w[r][1],b[3*r+2]=w[r][2];const M=(0,s.oe)(3*m);for(let r=0;r<m;r++)M[3*r]=g[r][0],M[3*r+1]=g[r][1],M[3*r+2]=g[r][2];return[["position",new h.n(b,y,3,!0)],["normal",new h.n(M,A,3,!0)]]}function Z(e,t,n,o,r,a=!0,i=!0){return new w.V(e,X(t,n,o,r,a,i))}function J(e,t,n,a,i,l,c){const u=i?(0,r.o8)(i):(0,r.fA)(1,0,0),f=l?(0,r.o8)(l):(0,r.fA)(0,0,0);c??=!0;const p=(0,r.vt)();(0,o.n)(p,u);const d=(0,r.vt)();(0,o.g)(d,p,Math.abs(t));const v=(0,r.vt)();(0,o.g)(v,d,-.5),(0,o.f)(v,v,f);const g=(0,r.fA)(0,1,0);Math.abs(1-(0,o.e)(p,g))<.2&&(0,o.i)(g,0,0,1);const m=(0,r.vt)();(0,o.h)(m,p,g),(0,o.n)(m,m),(0,o.h)(g,m,p);const x=2*a+(c?2:0),y=a+(c?2:0),A=(0,s.oe)(3*x),b=(0,s.oe)(3*y),M=(0,s.oe)(2*x),O=new Array(3*a*(c?4:2)),P=new Array(3*a*(c?4:2));c&&(A[3*(x-2)]=v[0],A[3*(x-2)+1]=v[1],A[3*(x-2)+2]=v[2],M[2*(x-2)]=0,M[2*(x-2)+1]=0,A[3*(x-1)]=A[3*(x-2)]+d[0],A[3*(x-1)+1]=A[3*(x-2)+1]+d[1],A[3*(x-1)+2]=A[3*(x-2)+2]+d[2],M[2*(x-1)]=1,M[2*(x-1)+1]=1,b[3*(y-2)]=-p[0],b[3*(y-2)+1]=-p[1],b[3*(y-2)+2]=-p[2],b[3*(y-1)]=p[0],b[3*(y-1)+1]=p[1],b[3*(y-1)+2]=p[2]);const S=(e,t,n)=>{O[e]=t,P[e]=n};let D=0;const V=(0,r.vt)(),z=(0,r.vt)();for(let r=0;r<a;r++){const e=r*(2*Math.PI/a);(0,o.g)(V,g,Math.sin(e)),(0,o.g)(z,m,Math.cos(e)),(0,o.f)(V,V,z),b[3*r]=V[0],b[3*r+1]=V[1],b[3*r+2]=V[2],(0,o.g)(V,V,n),(0,o.f)(V,V,v),A[3*r]=V[0],A[3*r+1]=V[1],A[3*r+2]=V[2],M[2*r]=r/a,M[2*r+1]=0,A[3*(r+a)]=A[3*r]+d[0],A[3*(r+a)+1]=A[3*r+1]+d[1],A[3*(r+a)+2]=A[3*r+2]+d[2],M[2*(r+a)]=r/a,M[2*r+1]=1;const t=(r+1)%a;S(D++,r,r),S(D++,r+a,r),S(D++,t,t),S(D++,t,t),S(D++,r+a,r),S(D++,t+a,t)}if(c){for(let e=0;e<a;e++){const t=(e+1)%a;S(D++,x-2,y-2),S(D++,e,y-2),S(D++,t,y-2)}for(let e=0;e<a;e++){const t=(e+1)%a;S(D++,e+a,y-1),S(D++,x-1,y-1),S(D++,t+a,y-1)}}const C=[["position",new h.n(A,O,3,!0)],["normal",new h.n(b,P,3,!0)],["uv0",new h.n(M,O,2,!0)]];return new w.V(e,C)}function K(e,t,n,o,r,a){o=o||10,r=null==r||r,(0,g.vA)(t.length>1);const i=[],s=[];for(let l=0;l<o;l++){i.push([0,-l-1,-(l+1)%o-1]);const e=l/o*2*Math.PI;s.push([Math.cos(e)*n,Math.sin(e)*n])}return ee(e,s,t,[[0,0,0]],i,r,a)}function ee(e,t,n,i,l,f,p=(0,r.fA)(0,0,0)){const d=t.length,v=(0,s.oe)(n.length*d*3+(6*i.length||0)),g=(0,s.oe)(n.length*d*3+(i?6:0)),m=new Array,x=new Array;let y=0,A=0;const b=(0,a.vt)(),M=(0,a.vt)(),O=(0,a.vt)(),P=(0,a.vt)(),S=(0,a.vt)(),D=(0,a.vt)(),V=(0,a.vt)(),z=(0,a.vt)(),C=(0,a.vt)(),H=(0,a.vt)(),T=(0,a.vt)(),R=(0,a.vt)(),F=(0,a.vt)(),U=(0,c.vt)();(0,o.i)(C,0,1,0),(0,o.d)(M,n[1],n[0]),(0,o.n)(M,M),f?((0,o.f)(z,n[0],p),(0,o.n)(O,z)):(0,o.i)(O,0,0,1),ie(M,O,C,C,S,O,se),(0,o.c)(P,O),(0,o.c)(R,S);for(let r=0;r<i.length;r++)(0,o.g)(D,S,i[r][0]),(0,o.g)(z,O,i[r][2]),(0,o.f)(D,D,z),(0,o.f)(D,D,n[0]),v[y++]=D[0],v[y++]=D[1],v[y++]=D[2];g[A++]=-M[0],g[A++]=-M[1],g[A++]=-M[2];for(let o=0;o<l.length;o++)m.push(l[o][0]>0?l[o][0]:-l[o][0]-1+i.length),m.push(l[o][1]>0?l[o][1]:-l[o][1]-1+i.length),m.push(l[o][2]>0?l[o][2]:-l[o][2]-1+i.length),x.push(0),x.push(0),x.push(0);let G=i.length;const j=i.length-1;for(let r=0;r<n.length;r++){let e=!1;r>0&&((0,o.c)(b,M),r<n.length-1?((0,o.d)(M,n[r+1],n[r]),(0,o.n)(M,M)):e=!0,(0,o.f)(H,b,M),(0,o.n)(H,H),(0,o.f)(T,n[r-1],P),(0,c.O_)(n[r],H,U),(0,c.Ui)(U,(0,u.LV)(T,b),z)?((0,o.d)(z,z,n[r]),(0,o.n)(O,z),(0,o.h)(S,H,O),(0,o.n)(S,S)):ie(H,P,R,C,S,O,se),(0,o.c)(P,O),(0,o.c)(R,S)),f&&((0,o.f)(z,n[r],p),(0,o.n)(F,z));for(let a=0;a<d;a++)if((0,o.g)(D,S,t[a][0]),(0,o.g)(z,O,t[a][1]),(0,o.f)(D,D,z),(0,o.n)(V,D),g[A++]=V[0],g[A++]=V[1],g[A++]=V[2],(0,o.f)(D,D,n[r]),v[y++]=D[0],v[y++]=D[1],v[y++]=D[2],!e){const e=(a+1)%d;m.push(G+a),m.push(G+d+a),m.push(G+e),m.push(G+e),m.push(G+d+a),m.push(G+d+e);for(let t=0;t<6;t++){const e=m.length-6;x.push(m[e+t]-j)}}G+=d}const I=n[n.length-1];for(let r=0;r<i.length;r++)(0,o.g)(D,S,i[r][0]),(0,o.g)(z,O,i[r][1]),(0,o.f)(D,D,z),(0,o.f)(D,D,I),v[y++]=D[0],v[y++]=D[1],v[y++]=D[2];const E=A/3;g[A++]=M[0],g[A++]=M[1],g[A++]=M[2];const _=G-d;for(let o=0;o<l.length;o++)m.push(l[o][0]>=0?G+l[o][0]:-l[o][0]-1+_),m.push(l[o][2]>=0?G+l[o][2]:-l[o][2]-1+_),m.push(l[o][1]>=0?G+l[o][1]:-l[o][1]-1+_),x.push(E),x.push(E),x.push(E);const $=[["position",new h.n(v,m,3,!0)],["normal",new h.n(g,x,3,!0)]];return new w.V(e,$)}function te(e,t,n,o,r){const a=(0,i.jh)(3*t.length),c=new Array(2*(t.length-1));let u=0,p=0;for(let i=0;i<t.length;i++){for(let e=0;e<3;e++)a[u++]=t[i][e];i>0&&(c[p++]=i-1,c[p++]=i)}const d=[["position",new h.n(a,c,3,!0)]];if(n&&n.length===t.length&&3===n[0].length){const e=(0,s.oe)(3*n.length);let o=0;for(let r=0;r<t.length;r++)for(let t=0;t<3;t++)e[o++]=n[r][t];d.push(["normal",new h.n(e,c,3,!0)])}if(o&&d.push(["color",new h.n(o,(0,l.tM)(o.length/4),4)]),r&&r.length===t.length){const e=(0,f.xJ)(r);d.push(["timeStamps",new h.n(e,c,3,!0)])}return new w.V(e,d,null,2)}function ne(e,t,n,o,r,a=0){const i=new Array(18),s=[[-n,a,r/2],[o,a,r/2],[0,t+a,r/2],[-n,a,-r/2],[o,a,-r/2],[0,t+a,-r/2]];for(let l=0;l<6;l++)i[3*l]=s[l][0],i[3*l+1]=s[l][1],i[3*l+2]=s[l][2];return new w.V(e,[["position",new h.n(i,[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5],3,!0)]])}function oe(e,t){const n=e.getMutableAttribute("position").data;for(let r=0;r<n.length;r+=3){const e=n[r],a=n[r+1],i=n[r+2];(0,o.i)(le,e,a,i),(0,o.t)(le,le,t),n[r]=le[0],n[r+1]=le[1],n[r+2]=le[2]}}function re(e,t=e){const n=e.attributes,o=n.get("position").data,r=n.get("normal").data;if(r){const e=t.getMutableAttribute("normal").data;for(let t=0;t<r.length;t+=3){const n=r[t+1];e[t+1]=-r[t+2],e[t+2]=n}}if(o){const e=t.getMutableAttribute("position").data;for(let t=0;t<o.length;t+=3){const n=o[t+1];e[t+1]=-o[t+2],e[t+2]=n}}}function ae(e,t,n,r,a){return!(Math.abs((0,o.e)(t,e))>a)&&((0,o.h)(n,e,t),(0,o.n)(n,n),(0,o.h)(r,n,e),(0,o.n)(r,r),!0)}function ie(e,t,n,o,r,a,i){return ae(e,t,r,a,i)||ae(e,n,r,a,i)||ae(e,o,r,a,i)}const se=.99619469809,le=(0,a.vt)()}}]);
//# sourceMappingURL=91786.926fadfb.chunk.js.map