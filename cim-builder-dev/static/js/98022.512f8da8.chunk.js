"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[98022],{14623:(e,t,i)=>{i.d(t,{R:()=>A,b:()=>O,r:()=>C});var n=i(26917),r=i(90080),o=i(3838),s=i(56906),a=i(17698),l=i(36324),c=i(94192),d=i(80883),h=i(42451),u=i(28450),p=i(51596),f=i(58350),m=i(23148),g=i(21390),v=i(86955),_=i(23687),S=i(2466),b=i(21670),x=i(2687),y=i(75569);const C=1;function O(e){const t=new x.N5,{attributes:i,varyings:O,vertex:A,fragment:D}=t,{applyMarkerOffset:w,draped:z,output:T,capType:P,stippleEnabled:E,falloffEnabled:L,roundJoins:R,wireframe:j,innerColorEnabled:W,hasAnimation:V}=e;D.include(l.p),t.include(o.s,e),t.include(s.q,e),t.include(r.g,e),t.include(c.Z,e),t.include(S.Q,e);const F=w&&!z;F&&(A.uniforms.add(new g.m("markerScale",(e=>e.markerScale))),t.include(a.r,{space:2})),(0,h.NB)(A,e),A.uniforms.add(new _.F("inverseProjectionMatrix",(e=>e.camera.inverseProjectionMatrix)),new u.E("nearFar",(e=>e.camera.nearFar)),new g.m("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new p.I("viewport",(e=>e.camera.fullViewport))),A.constants.add("LARGE_HALF_FLOAT","float",65500),i.add("position","vec3"),i.add("previousDelta","vec4"),i.add("nextDelta","vec4"),i.add("lineParameters","vec2"),i.add("u0","float"),O.add("vColor","vec4"),O.add("vpos","vec3",{invariant:!0}),O.add("vLineDistance","float"),O.add("vLineWidth","float");const M=E;M&&O.add("vLineSizeInv","float");const N=2===P,H=E&&N,k=L||H;k&&O.add("vLineDistanceNorm","float"),N&&(O.add("vSegmentSDF","float"),O.add("vReverseSegmentSDF","float")),A.code.add(v.H`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),A.code.add(v.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),A.code.add(v.H`void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
float vnp = nearFar[0] * 0.99;
if(pos.z > -nearFar[0]) {
if (!isStartVertex) {
if(prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if(next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
forwardViewPosDepth(pos.xyz);
pos = projectAndScale(pos);
next = projectAndScale(next);
prev = projectAndScale(prev);
}`),(0,h.Nz)(A),A.constants.add("aaWidth","float",E?0:1).main.add(v.H`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y)-3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(lineParameters.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${M?v.H`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),F&&A.main.add(v.H`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),A.main.add(v.H`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(E||N)&&A.main.add(v.H`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${N?v.H`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),A.main.add(v.H`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
float subdivisionFactor = lineParameters.x;
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),R?A.main.add(v.H`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${E?v.H`min(1.0, subdivisionFactor * ${v.H.float((C+2)/(C+1))})`:v.H`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):A.main.add(v.H`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const I=0!==P;return A.main.add(v.H`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${I?v.H`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),A.main.add(v.H`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(lineParameters.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(lineParameters.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${k?v.H`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),N&&A.main.add(v.H`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),E&&(z?A.uniforms.add(new m.U("worldToScreenRatio",(e=>1/e.screenToPCSRatio))):A.main.add(v.H`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),A.main.add(v.H`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),z?A.main.add(v.H`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):A.main.add(v.H`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),A.uniforms.add(new g.m("stipplePatternPixelSize",(e=>(0,s.h)(e)))),A.main.add(v.H`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),A.main.add(v.H`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${j&&!z?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),t.fragment.include(n.HQ,e),t.include(b.z,e),D.include(d.a),D.main.add(v.H`discardBySlice(vpos);
discardByTerrainDepth();`),j?D.main.add(v.H`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(N&&D.main.add(v.H`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${v.H.float(y.Q)}) {
          discard;
        }
      `),H?D.main.add(v.H`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${v.H.float(y.Q)}, stippleCoverage);
      `):D.main.add(v.H`float stippleAlpha = getStippleAlpha();`),9!==T&&D.main.add(v.H`discardByStippleAlpha(stippleAlpha, ${v.H.float(y.Q)});`),D.uniforms.add(new f.E("intrinsicColor",(e=>e.color))),D.main.add(v.H`vec4 color = intrinsicColor * vColor;`),W&&(D.uniforms.add(new f.E("innerColor",(e=>e.innerColor??e.color)),new g.m("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),D.main.add(v.H`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),D.main.add(v.H`vec4 finalColor = blendStipple(color, stippleAlpha);`),L&&(D.uniforms.add(new g.m("falloff",(e=>e.falloff))),D.main.add(v.H`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),E||D.main.add(v.H`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),V&&D.main.add(v.H`
        finalColor = animate(finalColor);

        ${(0,v.If)(9!==T,v.H`
            if (finalColor.a <= ${v.H.float(y.Q)}) {
              discard;
            }`)}
      `)),D.main.add(v.H`outputColorHighlightOID(finalColor, vpos, finalColor.rgb);`),t}const A=Object.freeze(Object.defineProperty({__proto__:null,build:O,ribbonlineNumRoundJoinSubdivisions:C},Symbol.toStringTag,{value:"Module"}))},49296:(e,t,i)=>{i.d(t,{F:()=>o});var n=i(59097),r=i(41595);class o{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=(0,n.Ao)(e)}get requiresSampledElevationInfo(){return"absolute-height"!==this.mode}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const i=this.calculateOffsetRenderUnits(t);return null!=this.featureExpressionInfoContext?i:e+i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const i=this.featureExpressionInfoContext;return null!=i&&(t+=(0,r.g7)(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=(0,n.Tg)(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,t,i){if(null==e)return void(this._featureExpressionInfoContext=null);const n=e?.arcade;n&&null!=t&&null!=i?(this._featureExpressionInfoContext=(0,r.o8)(e),(0,r.gf)(this._featureExpressionInfoContext,(0,r.VG)(n.modules,t,i))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const t=new o;return null!=e&&t.setFromElevationInfo(e),t}}},67425:(e,t,i)=>{i.d(t,{I2:()=>p,Kf:()=>m,Uk:()=>_,ai:()=>v,au:()=>d,fe:()=>g,nG:()=>u,nu:()=>f,sE:()=>h});var n=i(34761),r=i(13191),o=i(9392),s=i(5809),a=i(45308),l=i(81284),c=i(80935);function d(e,t,i,n,r,o,s,l,c,d,h){const u=S[h.mode];let p,f,m=0;if((0,a.projectBuffer)(e,t,i,n,c.spatialReference,r,l))return u?.requiresAlignment(h)?(m=u.applyElevationAlignmentBuffer(n,r,o,s,l,c,d,h),p=o,f=s):(p=n,f=r),(0,a.projectBuffer)(p,c.spatialReference,f,o,d.spatialReference,s,l)?m:void 0}function h(e,t,i,n,r){const o=((0,l.v)(e)?e.z:(0,c.cN)(e)?e.array[e.offset+2]:e[2])||0;switch(i.mode){case"on-the-ground":{const i=(0,c.R1)(t,e,"ground")??0;return r.verticalDistanceToGround=0,r.sampledElevation=i,void(r.z=i)}case"relative-to-ground":{const s=(0,c.R1)(t,e,"ground")??0,a=i.geometryZWithOffset(o,n);return r.verticalDistanceToGround=a,r.sampledElevation=s,void(r.z=a+s)}case"relative-to-scene":{const s=(0,c.R1)(t,e,"scene")??0,a=i.geometryZWithOffset(o,n);return r.verticalDistanceToGround=a,r.sampledElevation=s,void(r.z=a+s)}case"absolute-height":{const s=i.geometryZWithOffset(o,n),a=(0,c.R1)(t,e,"ground")??0;return r.verticalDistanceToGround=s-a,r.sampledElevation=a,void(r.z=s)}default:return void(r.z=0)}}function u(e,t,i,n){return h(e,t,i,n,x),x.z}function p(e,t,i){return"on-the-ground"===t&&"on-the-ground"===i?e.staysOnTheGround:t===i||"on-the-ground"!==t&&"on-the-ground"!==i?null==t||null==i?e.definedChanged:1:e.onTheGroundChanged}function f(e){return"relative-to-ground"===e||"relative-to-scene"===e}function m(e){return"absolute-height"!==e}function g(e,t,i,r,o){h(t,i,o,r,x),v(e,x.verticalDistanceToGround);const a=x.sampledElevation,l=(0,n.C)(b,e.transformation);return y[0]=t.x,y[1]=t.y,y[2]=x.z,(0,s.l)(t.spatialReference,y,l,r.spatialReference)?e.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),a}function v(e,t){for(let i=0;i<e.geometries.length;++i){const n=e.geometries[i].getMutableAttribute("centerOffsetAndDistance");n&&n.data[3]!==t&&(n.data[3]=t,e.geometryVertexAttributeUpdated(e.geometries[i],"centerOffsetAndDistance"))}}class _{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}const S={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,i,n,r,o,s,a){const l=a.calculateOffsetRenderUnits(s),c=a.featureExpressionInfoContext;t*=3,n*=3;for(let d=0;d<r;++d){const r=e[t],o=e[t+1],s=e[t+2];i[n]=r,i[n+1]=o,i[n+2]=null==c?s+l:l,t+=3,n+=3}return 0},requiresAlignment:function(e){const t=e.meterUnitOffset,i=e.featureExpressionInfoContext;return 0!==t||null!=i}},"on-the-ground":{applyElevationAlignmentBuffer:function(e,t,i,n,r,o){let s=0;const a=o.spatialReference;t*=3,n*=3;for(let l=0;l<r;++l){const r=e[t],l=e[t+1],c=e[t+2],d=o.getElevation(r,l,c,a,"ground")??0;s+=d,i[n]=r,i[n+1]=l,i[n+2]=d,t+=3,n+=3}return s/r},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(e,t,i,n,r,o,s,a){let l=0;const c=a.calculateOffsetRenderUnits(s),d=a.featureExpressionInfoContext,h=o.spatialReference;t*=3,n*=3;for(let u=0;u<r;++u){const r=e[t],s=e[t+1],a=e[t+2],u=o.getElevation(r,s,a,h,"ground")??0;l+=u,i[n]=r,i[n+1]=s,i[n+2]=null==d?a+u+c:u+c,t+=3,n+=3}return l/r},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(e,t,i,n,r,o,s,a){let l=0;const c=a.calculateOffsetRenderUnits(s),d=a.featureExpressionInfoContext,h=o.spatialReference;t*=3,n*=3;for(let u=0;u<r;++u){const r=e[t],s=e[t+1],a=e[t+2],u=o.getElevation(r,s,a,h,"scene")??0;l+=u,i[n]=r,i[n+1]=s,i[n+2]=null==d?a+u+c:u+c,t+=3,n+=3}return l/r},requiresAlignment:()=>!0}},b=(0,r.vt)(),x=new _,y=(0,o.vt)()},41595:(e,t,i)=>{i.d(t,{KF:()=>f,MF:()=>p,VG:()=>d,g7:()=>u,gf:()=>h,o8:()=>l,q6:()=>c});var n=i(76460),r=i(50346),o=i(32535),s=i(76386);const a=()=>n.A.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function l(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function c(e,t,i,n){const o=e?.expression;if("string"!=typeof o)return null;const a=g(o);if(null!=a)return{cachedResult:a};const l=await(0,s.l)();(0,r.Te)(i);const c=l.arcadeUtils,d=c.createSyntaxTree(o);return c.dependsOnView(d)?(null!=n&&n.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:c.createFunction(d),context:c.createExecContext(null,{sr:t}),modules:l}}}function d(e,t,i){return e.arcadeUtils.createFeature(t.attributes,t.geometry,i)}function h(e,t){if(null!=e&&!m(e)){if(!t||!e.arcade)return void a().errorOncePerTick("Arcade support required but not provided");const i=t;i._geometry&&(i._geometry=(0,o.wZ)(i._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function u(e){if(null!=e){if(m(e))return e.cachedResult;const t=e.arcade;let i=t?.modules.arcadeUtils.executeFunction(t.func,t.context);return"number"!=typeof i&&(e.cachedResult=0,i=0),i}return 0}function p(e,t=!1){let i=e?.featureExpressionInfo;const n=i?.expression;return t||"0"===n||(i=null),i??null}const f={cachedResult:0};function m(e){return null!=e.cachedResult}function g(e){return"0"===e?0:null}},80935:(e,t,i)=>{i.d(t,{R1:()=>s,aY:()=>r,cN:()=>o});var n=i(81284);class r{constructor(e,t=null,i=0){this.array=e,this.spatialReference=t,this.offset=i}}function o(e){return"array"in e}function s(e,t,i="ground"){if((0,n.v)(t))return e.getElevation(t.x,t.y,t.z||0,t.spatialReference,i);if(o(t)){let n=t.offset;return e.getElevation(t.array[n++],t.array[n++],t.array[n]||0,t.spatialReference??e.spatialReference,i)}return e.getElevation(t[0],t[1],t[2]||0,e.spatialReference,i)}},99443:(e,t,i)=>{i.d(t,{Cz:()=>r,DZ:()=>a,PV:()=>s,vO:()=>n});i(72900),i(80895),i(96673);const n=64,r=n/2,o=r/5,s=n/o,a=.25},3838:(e,t,i)=>{i.d(t,{s:()=>c});var n=i(66763),r=i(5517),o=i(21390),s=i(60205),a=i(86955);const l=8;function c(e,t){const{vertex:i,attributes:c}=e;i.uniforms.add(new o.m("intrinsicWidth",(e=>e.width))),t.hasVVSize?(c.add("sizeFeatureAttribute","float"),i.uniforms.add(new r.t("vvSizeMinSize",(e=>e.vvSize.minSize)),new r.t("vvSizeMaxSize",(e=>e.vvSize.maxSize)),new r.t("vvSizeOffset",(e=>e.vvSize.offset)),new r.t("vvSizeFactor",(e=>e.vvSize.factor)),new r.t("vvSizeFallback",(e=>e.vvSize.fallback))),i.code.add(a.H`float getSize() {
if (isnan(sizeFeatureAttribute)) {
return vvSizeFallback.x;
}
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(c.add("size","float"),i.code.add(a.H`float getSize(){
return intrinsicWidth * size;
}`)),t.hasVVOpacity?(c.add("opacityFeatureAttribute","float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new s.x("vvOpacityValues",(e=>e.vvOpacity.values),l),new s.x("vvOpacityOpacities",(e=>e.vvOpacity.opacityValues),l),new o.m("vvOpacityFallback",(e=>e.vvOpacity.fallback),{supportsNaN:!0})),i.code.add(a.H`
    float interpolateOpacity(float value) {
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity(vec4 color) {
      if (isnan(opacityFeatureAttribute)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${(0,a.If)(t.hasVVColor,"color","vec4(color.rgb, vvOpacityFallback)")};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):i.code.add(a.H`vec4 applyOpacity(vec4 color) {
return color;
}`),t.hasVVColor?(e.include(n.A,t),c.add("colorFeatureAttribute","float"),i.code.add(a.H`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(c.add("color","vec4"),i.code.add(a.H`vec4 getColor() {
return applyOpacity(color);
}`))}},56906:(e,t,i)=>{i.d(t,{q:()=>g,h:()=>v});var n=i(81449),r=i(42451),o=i(58350),s=i(23148),a=i(21390),l=i(86955),c=i(70367);i(14522),i(80895),i(96673);function d(e){return e.pattern.map((t=>Math.round(t*e.pixelRatio)))}function h(e){if(null==e)return 1;const t=d(e);return Math.floor(t.reduce(((e,t)=>e+t)))}function u(e){return d(e).reduce(((e,t)=>Math.max(e,t)))}var p=i(43047),f=i(55855);const m=(0,f.vt)();function g(e,t){if(!t.stippleEnabled)return void e.fragment.code.add(l.H`float getStippleAlpha() { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const i=!(t.draped&&t.stipplePreferContinuous),{vertex:d,fragment:h}=e;h.include(n.W),t.draped||((0,r.yu)(d,t),d.uniforms.add(new s.U("worldToScreenPerDistanceRatio",(({camera:e})=>1/e.perScreenPixelRatio))).code.add(l.H`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),e.varyings.add("vStippleDistanceLimits","vec2"),e.varyings.add("vStipplePatternStretch","float"),d.code.add(l.H`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${l.H.float(_)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),d.code.add(l.H`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),d.code.add(l.H`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),(0,r.Nz)(d),d.code.add(l.H`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),h.uniforms.add(new c.N("stipplePatternTexture",(e=>e.stippleTexture)),new a.m("stipplePatternSDFNormalizer",(e=>function(e){return e?(Math.floor(.5*(u(e)-1))+.5)/e.pixelRatio:1}(e.stipplePattern))),new a.m("stipplePatternPixelSizeInv",(e=>1/v(e)))),t.stippleOffColorEnabled&&h.uniforms.add(new o.E("stippleOffColor",(e=>function(e){return null==e?f.uY:4===e.length?e:(0,p.s)(m,e[0],e[1],e[2],1)}(e.stippleOffColor)))),h.code.add(l.H`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgbaTofloat(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),h.code.add(l.H`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${(0,l.If)(!t.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${t.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function v(e){const t=e.stipplePattern;return t?h(e.stipplePattern)/t.pixelRatio:1}const _=.4},17698:(e,t,i)=>{i.d(t,{r:()=>a});var n=i(99443),r=i(42451),o=i(23148),s=i(86955);function a(e,t){const i=e.vertex;(0,r.Nz)(i),null==i.uniforms.get("markerScale")&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",n.PV).code.add(s.H`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),2===t.space&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new o.U("perRenderPixelRatio",(e=>e.camera.perRenderPixelRatio))),i.code.add(s.H`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}},97583:(e,t,i)=>{i.d(t,{g:()=>m});i(81806);var n=i(90632),r=i(20664),o=i(9392),s=i(55855),a=i(45308),l=i(50468),c=i(17345),d=i(75507),h=i(37046),u=i(67737),p=i(8918),f=i(52479);class m{constructor(e){this._originSR=e,this._rootOriginId="root/"+(0,n.c)(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const t=this._origins.get(this._rootOriginId);if(null==t){const t=u.Q.rootOrigin;if(null!=t)return this._origins.set(this._rootOriginId,(0,d.f)(t[0],t[1],t[2],this._rootOriginId)),this.getOrigin(e);const i=(0,d.f)(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,i),i}const i=this._gridSize,n=Math.round(e[0]/i),o=Math.round(e[1]/i),s=Math.round(e[2]/i),a=`${n}/${o}/${s}`;let l=this._origins.get(a);const c=.5*i;if((0,r.d)(g,e,t.vec3),g[0]=Math.abs(g[0]),g[1]=Math.abs(g[1]),g[2]=Math.abs(g[2]),g[0]<c&&g[1]<c&&g[2]<c){if(l){const t=Math.max(...g);if((0,r.d)(g,e,l.vec3),g[0]=Math.abs(g[0]),g[1]=Math.abs(g[1]),g[2]=Math.abs(g[2]),Math.max(...g)<t)return l}return t}return l||(l=(0,d.f)(n*i,o*i,s*i,a),this._origins.set(a,l)),l}_drawOriginBox(e,t=(0,s.fA)(1,1,0,1)){const i=window.view,n=i.stage,r=t.toString();if(!this._objects.has(r)){this._material=new f.W({width:2,color:t});const e=new p.x(n,{pickable:!1}),i=new h.B({castShadow:!1});e.add(i),this._objects.set(r,i)}const o=this._objects.get(r),d=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],u=d.length,m=new Array(3*u),g=new Array,v=.5*this._gridSize;for(let s=0;s<u;s++)m[3*s]=e[0]+(1&d[s]?v:-v),m[3*s+1]=e[1]+(2&d[s]?v:-v),m[3*s+2]=e[2]+(4&d[s]?v:-v),s>0&&g.push(s-1,s);(0,a.projectBuffer)(m,this._originSR,0,m,i.renderSpatialReference,0,u);const _=new c.V(this._material,[["position",new l.n(m,g,3,!0)]],null,2);o.addGeometry(_)}get test(){}}const g=(0,o.vt)()},75507:(e,t,i)=>{i.d(t,{f:()=>o});var n=i(9392);class r{constructor(e,t){this.vec3=e,this.id=t}}function o(e,t,i,o){return new r((0,n.fA)(e,t,i),o)}},37046:(e,t,i)=>{i.d(t,{B:()=>f});i(81806);var n=i(90632),r=i(34761),o=i(13191),s=i(20664),a=i(9392),l=i(78315),c=i(94966),d=i(35416),h=i(86994),u=i(66470),p=i(68967);class f{constructor(e={}){this.id=(0,n.c)(),this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=new m),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){(0,h.vA)(null==this._layer||null==e,"Object3D can only be added to a single Layer"),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(const t of this._highlightIds)e.addHighlight(t);this._emit("geometryAdded",{object:this,geometry:e}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];if(t){for(const e of this._highlightIds)t.removeHighlight(e);this._emit("geometryRemoved",{object:this,geometry:t}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,i=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:i}),(0,u.b)(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const e of this._geometries)e.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new d.p;for(const t of this._geometries)t.occludees=(0,p.Ci)(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=(0,p.PC)(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new d.h(e);for(const i of this._geometries)i.addHighlight(t);return this._emit("highlightChanged",this),this._highlightIds.add(t),t}removeHighlight(e){this._highlightIds.delete(e);for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){0===e.channel?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return(0,r.lw)(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=(0,o.vt)()){return(0,r.lw)(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new g,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new g,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(e,t){const i=1===t;for(const n of this._geometries){const t=n.boundingInfo;t&&v(t,e,i?n.transformation:this.getCombinedShaderTransformation(n))}(0,s.m)((0,l.a)(e.bounds),e.min,e.max,.5);for(const n of this._geometries){const t=n.boundingInfo;if(null==t)continue;const r=i?n.transformation:this.getCombinedShaderTransformation(n),o=(0,c.hG)(r);(0,s.t)(x,t.center,r);const a=(0,s.j)(x,(0,l.a)(e.bounds)),d=t.radius*o;e.bounds[3]=Math.max(e.bounds[3],a+d)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,t){this.layer?.events.emit(e,t)}get geometries(){return this._geometries}get transformation(){return this._transformation??o.zK}set transformation(e){this._transformation=(0,r.C)(this._transformation??(0,o.vt)(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?(0,r.C)(this._shaderTransformation??(0,o.vt)(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}}class m{constructor(){this._data=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]}get min(){return(0,a.fA)(this._data[0],this._data[1],this._data[2])}get max(){return(0,a.fA)(this._data[3],this._data[4],this._data[5])}minWith(e){const{_data:t}=this;t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2])}maxWith(e){const{_data:t}=this;t[3]=Math.max(t[3],e[0]),t[4]=Math.max(t[4],e[1]),t[5]=Math.max(t[5],e[2])}assignMinMax(e,t){for(let i=0;i<3;++i)this._data[0+i]=e[i],this._data[3+i]=t[i]}isEmpty(){return this._data[3]<this._data[0]&&this._data[4]<this._data[1]&&this._data[5]<this._data[2]}}class g extends m{constructor(){super(...arguments),this.bounds=(0,l.c)()}}function v(e,t,i){const n=e.bbMin,o=e.bbMax;if((0,r.tZ)(i)){const e=(0,s.i)(_,i[12],i[13],i[14]);return(0,s.f)(S,n,e),(0,s.f)(b,o,e),t.minWith(S),void t.maxWith(b)}if((0,s.t)(S,n,i),(0,s.q)(n,o))return t.minWith(S),void t.maxWith(S);(0,s.t)(b,o,i),t.minWith(S),t.minWith(b),t.maxWith(S),t.maxWith(b);for(let r=0;r<3;++r)(0,s.c)(S,n),(0,s.c)(b,o),S[r]=o[r],b[r]=n[r],(0,s.t)(S,S,i),(0,s.t)(b,b,i),t.minWith(S),t.minWith(b),t.maxWith(S),t.maxWith(b)}const _=(0,a.vt)(),S=(0,a.vt)(),b=(0,a.vt)(),x=(0,a.vt)()},94536:(e,t,i)=>{i.d(t,{x:()=>h});var n=i(3789),r=i(5457),o=i(20664),s=i(9392),a=i(4763),l=i(95925),c=i(78315),d=i(86994);class h{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(e,t){this.objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new u,this._objectCount=0,t&&(void 0!==t.maximumObjectsPerNode&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),void 0!==t.maximumDepth&&(this._maximumDepth=t.maximumDepth))}destroy(){this._degenerateObjects.clear(),u.clearPool(),z[0]=null,R.prune(),N.prune()}add(e){const t=Array.from(e);this._grow(t);const i=u.acquire();for(const n of t)++this._objectCount,this._isDegenerate(n)?this._degenerateObjects.add(n):(i.init(this._root),this._add(n,i));u.release(i)}remove(e,t=null){this._objectCount-=e.length;const i=u.acquire();for(const n of e){const e=t??(0,c.h)(this.objectToBoundingSphere(n),j);O(e[3])?(i.init(this._root),m(n,e,i)):this._degenerateObjects.delete(n)}u.release(i),this._shrink()}update(e,t){if(!O(t[3])&&this._isDegenerate(e))return;const i=function(e){return z[0]=e,z}(e);this.remove(i,t),this.add(i)}forEachAlongRay(e,t,i){const n=(0,l.LV)(e,t);p(this._root,(e=>{if(!function(e,t){return b((0,c.a)(t.bounds),2*-t.halfSize,E),b((0,c.a)(t.bounds),2*t.halfSize,L),(0,d.O_)(e.origin,e.direction,E,L)}(n,e))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObject(n,e)&&i(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObject(n,e)&&i(e)})),!0}))}forEachAlongRayWithVerticalOffset(e,t,i,n){const r=(0,l.LV)(e,t);p(this._root,(e=>{if(!function(e,t,i){return b((0,c.a)(t.bounds),2*-t.halfSize,E),b((0,c.a)(t.bounds),2*t.halfSize,L),i.applyToMinMax(E,L),(0,d.O_)(e.origin,e.direction,E,L)}(r,e,n))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObjectWithOffset(r,e,n)&&i(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObjectWithOffset(r,e,n)&&i(e)})),!0}))}forEach(e){p(this._root,(t=>{const i=t.node;return i.terminals.forAll(e),null!==i.residents&&i.residents.forAll(e),!0})),this._degenerateObjects.forEach(e)}forEachDegenerateObject(e){this._degenerateObjects.forEach(e)}findClosest(e,t,i,n=()=>!0,r=1/0){let s=1/0,l=1/0,d=null;const h=y(e,t),u=o=>{if(--r,!n(o))return;const h=this.objectToBoundingSphere(o);if(!(0,a.m7)(i,h))return;const u=C(e,t,(0,c.a)(h)),p=u-h[3],f=u+h[3];p<s&&(s=p,l=f,d=o)};return f(this._root,(n=>{if(r<=0||!(0,a.m7)(i,n.bounds))return!1;if((0,o.g)(P,h,n.halfSize),(0,o.f)(P,P,(0,c.a)(n.bounds)),C(e,t,P)>l)return!1;const s=n.node;return s.terminals.forAll((e=>u(e))),null!==s.residents&&s.residents.forAll((e=>u(e))),!0}),e,t),d}forEachInDepthRange(e,t,i,n,r,s,l){let d=-1/0,h=1/0;const u={setRange:e=>{1===i?(d=Math.max(d,e.near),h=Math.min(h,e.far)):(d=Math.max(d,-e.far),h=Math.min(h,-e.near))}};u.setRange(n);const p=C(t,i,e),m=y(t,i),g=y(t,-i),v=e=>{if(!l(e))return;const n=this.objectToBoundingSphere(e),o=(0,c.a)(n),f=C(t,i,o)-p,m=f-n[3],g=f+n[3];m>h||g<d||!(0,a.m7)(s,n)||r(e,u)};f(this._root,(e=>{if(!(0,a.m7)(s,e.bounds))return!1;if((0,o.g)(P,m,e.halfSize),(0,o.f)(P,P,(0,c.a)(e.bounds)),C(t,i,P)-p>h)return!1;if((0,o.g)(P,g,e.halfSize),(0,o.f)(P,P,(0,c.a)(e.bounds)),C(t,i,P)-p<d)return!1;const n=e.node;return n.terminals.forAll((e=>v(e))),null!==n.residents&&n.residents.forAll((e=>v(e))),!0}),t,i)}forEachNode(e){p(this._root,(t=>e(t.node,t.bounds,t.halfSize,t.depth)))}forEachNeighbor(e,t){const i=(0,c.g)(t),n=(0,c.a)(t),r=t=>{const r=this.objectToBoundingSphere(t),s=(0,c.g)(r),a=i+s;return!((0,o.s)((0,c.a)(r),n)-a*a<=0)||e(t)};let s=!0;const a=e=>{s&&(s=r(e))};p(this._root,(e=>{const t=(0,c.g)(e.bounds),r=i+t;if((0,o.s)((0,c.a)(e.bounds),n)-r*r>0)return!1;const l=e.node;return l.terminals.forAll(a),s&&null!==l.residents&&l.residents.forAll(a),s})),s&&this.forEachDegenerateObject(a)}_intersectsObject(e,t){const i=this.objectToBoundingSphere(t);return!(i[3]>0)||(0,c.k)(i,e)}_intersectsObjectWithOffset(e,t,i){const n=this.objectToBoundingSphere(t);return!(n[3]>0)||(0,c.k)(i.applyToBoundingSphere(n),e)}_add(e,t){t.advanceTo(this.objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))}_split(e){const t=e.node.residents;e.node.residents=null;for(let i=0;i<t.length;i++){const n=u.acquire().init(e);this._add(t.at(i),n),u.release(n)}}_grow(e){if(x(e,(e=>this.objectToBoundingSphere(e)),W),O(W[3])&&!this._fitsInsideTree(W))if(v(this._root.node))(0,c.h)(W,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const e=this._rootBoundsForRootAsSubNode(W);this._placingRootViolatesMaxDepth(e)?this._rebuildTree(W,e):this._growRootAsSubNode(e),u.release(e)}}_rebuildTree(e,t){(0,o.c)((0,c.a)(V),(0,c.a)(t.bounds)),V[3]=t.halfSize,x([e,V],(e=>e),F);const i=u.acquire().init(this._root);this._root.initFrom(null,F,F[3]),this._root.increaseHalfSize(1.25),p(i,(e=>(this.add(e.node.terminals.data),null!==e.node.residents&&this.add(e.node.residents.data),!0))),u.release(i)}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let i=0;return p(this._root,(e=>(i=Math.max(i,e.depth),i+t<=this._maximumDepth))),i+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],i=e;let n=-1/0;const r=this._root.bounds,o=this._root.halfSize;for(let a=0;a<3;a++){const e=r[a]-o-(i[a]-t),s=i[a]+t-(r[a]+o),l=Math.max(0,Math.ceil(e/(2*o))),c=Math.max(0,Math.ceil(s/(2*o)))+1,d=2**Math.ceil(Math.log(l+c)*Math.LOG2E);n=Math.max(n,d),M[a].min=l,M[a].max=c}for(let a=0;a<3;a++){let e=M[a].min,t=M[a].max;const i=(n-(e+t))/2;e+=Math.ceil(i),t+=Math.floor(i);const s=r[a]-o-e*o*2;T[a]=s+(t+e)*o}const s=n*o;return T[3]=s*w,u.acquire().initFrom(null,T,s,0)}_growRootAsSubNode(e){const t=this._root.node;(0,o.c)((0,c.a)(W),(0,c.a)(this._root.bounds)),W[3]=this._root.halfSize,this._root.init(e),e.advanceTo(W,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals}_shrink(){for(;;){const e=this._findShrinkIndex();if(-1===e)break;this._root.advance(e),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let e=null;const t=this._root.node.children;let i=0,n=0;for(;n<t.length&&null==e;)i=n++,e=t[i];for(;n<t.length;)if(t[n++])return-1;return i}_isDegenerate(e){return!O(this.objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,i=this._root.halfSize;return e[3]<=i&&e[0]>=t[0]-i&&e[0]<=t[0]+i&&e[1]>=t[1]-i&&e[1]<=t[1]+i&&e[2]>=t[2]-i&&e[2]<=t[2]+i}toJSON(){const{maximumDepth:e,maximumObjectsPerNode:t,_objectCount:i}=this,n=this._nodeToJSON(this._root.node);return{maximumDepth:e,maximumObjectsPerNode:t,objectCount:i,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:n}}}_nodeToJSON(e){const t=e.children.map((e=>e?this._nodeToJSON(e):null)),i=e.residents?.map((e=>this.objectToBoundingSphere(e))),n=e.terminals?.map((e=>this.objectToBoundingSphere(e)));return{children:t,residents:i,terminals:n}}static fromJSON(e){const t=new h((e=>e),{maximumDepth:e.maximumDepth,maximumObjectsPerNode:e.maximumObjectsPerNode});return t._objectCount=e.objectCount,t._root.initFrom(e.root.node,e.root.bounds,e.root.halfSize,e.root.depth),t}}class u{constructor(){this.bounds=(0,c.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(e,t,i,n=this.depth){return this.node=null!=e?e:u.createEmptyNode(),t&&(0,c.h)(t,this.bounds),this.halfSize=i,this.depth=n,this}increaseHalfSize(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*w}advance(e){let t=this.node.children[e];t||(t=u.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const i=A[e];return this.bounds[0]+=i[0]*this.halfSize,this.bounds[1]+=i[1]*this.halfSize,this.bounds[2]+=i[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(e,t,i=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!i)return t&&t(this,-1),!1;this.node.residents=null}const n=this._childIndex(e);t&&t(this,n),this.advance(n)}}isLeaf(){return null!=this.node.residents}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new r.A({shrink:!0}),residents:new r.A({shrink:!0})}}static{this._pool=new n.A(u)}static acquire(){return u._pool.acquire()}static release(e){u._pool.release(e)}static clearPool(){u._pool.prune()}}function p(e,t){let i=u.acquire().init(e);const n=[i];for(;0!==n.length;){if(i=n.pop(),t(i)&&!i.isLeaf())for(let e=0;e<i.node.children.length;e++)i.node.children[e]&&n.push(u.acquire().init(i).advance(e));u.release(i)}}function f(e,t,i,n=1){let r=u.acquire().init(e);const o=[r];for(function(e,t,i){if(!N.length)for(let n=0;n<8;++n)N.push({index:0,distance:0});for(let n=0;n<8;++n){const i=A[n];N.data[n].index=n,N.data[n].distance=C(e,t,i)}N.sort(((e,t)=>e.distance-t.distance));for(let n=0;n<8;++n)i[n]=N.data[n].index}(i,n,H);0!==o.length;){if(r=o.pop(),t(r)&&!r.isLeaf())for(let e=7;e>=0;--e){const t=H[e];r.node.children[t]&&o.push(u.acquire().init(r).advance(t))}u.release(r)}}function m(e,t,i){R.clear();const n=i.advanceTo(t,((e,t)=>{R.push(e.node),R.push(t)}))?i.node.terminals:i.node.residents;if(n.removeUnordered(e),0===n.length)for(let r=R.length-2;r>=0&&g(R.data[r],R.data[r+1]);r-=2);}function g(e,t){return t>=0&&(e.children[t]=null),!!v(e)&&(null===e.residents&&(e.residents=new r.A({shrink:!0})),!0)}function v(e){if(0!==e.terminals.length)return!1;if(null!==e.residents)return 0===e.residents.length;for(let t=0;t<e.children.length;t++)if(e.children[t])return!1;return!0}function _(e,t){e[0]=Math.min(e[0],t[0]-t[3]),e[1]=Math.min(e[1],t[1]-t[3]),e[2]=Math.min(e[2],t[2]-t[3])}function S(e,t){e[0]=Math.max(e[0],t[0]+t[3]),e[1]=Math.max(e[1],t[1]+t[3]),e[2]=Math.max(e[2],t[2]+t[3])}function b(e,t,i){i[0]=e[0]+t,i[1]=e[1]+t,i[2]=e[2]+t}function x(e,t,i){E[0]=1/0,E[1]=1/0,E[2]=1/0,L[0]=-1/0,L[1]=-1/0,L[2]=-1/0;for(const n of e){const e=t(n);O(e[3])&&(_(E,e),S(L,e))}(0,o.m)((0,c.a)(i),E,L,.5),i[3]=Math.max(L[0]-E[0],L[1]-E[1],L[2]-E[2])/2}function y(e,t){let i,n=1/0;for(let r=0;r<8;++r){const o=C(e,t,D[r]);o<n&&(n=o,i=D[r])}return i}function C(e,t,i){return t*(e[0]*i[0]+e[1]*i[1]+e[2]*i[2])}function O(e){return!isNaN(e)&&e!==-1/0&&e!==1/0&&e>0}const A=[(0,s.fA)(-1,-1,-1),(0,s.fA)(1,-1,-1),(0,s.fA)(-1,1,-1),(0,s.fA)(1,1,-1),(0,s.fA)(-1,-1,1),(0,s.fA)(1,-1,1),(0,s.fA)(-1,1,1),(0,s.fA)(1,1,1)],D=[(0,s.fA)(-1,-1,-1),(0,s.fA)(-1,-1,1),(0,s.fA)(-1,1,-1),(0,s.fA)(-1,1,1),(0,s.fA)(1,-1,-1),(0,s.fA)(1,-1,1),(0,s.fA)(1,1,-1),(0,s.fA)(1,1,1)],w=Math.sqrt(3),z=[null];const T=(0,c.c)(),P=(0,s.vt)(),E=(0,s.vt)(),L=(0,s.vt)(),R=new r.A,j=(0,c.c)(),W=(0,c.c)(),V=(0,c.c)(),F=(0,c.c)(),M=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],N=new r.A,H=[0,0,0,0,0,0,0,0]},66470:(e,t,i)=>{function n(e){return"position"===e}i.d(t,{b:()=>n})},8918:(e,t,i)=>{i.d(t,{x:()=>h});var n=i(18690),r=i(4212),o=i(54099),s=i(88321),a=(i(81806),i(30726)),l=i(90632);const c=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];var d=i(94536);class h{constructor(e,t,i=""){this.stage=e,this.apiLayerViewUid=i,this.id=(0,l.c)(),this.events=new o.bk,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Array,this._handles=new s.A,this._objects=new Map,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??0,e.addLayer(this);for(const n of c)this._handles.add(this.events.on(n,(t=>e.handleEvent(n,t))))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return(0,r.zI)(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit("layerObjectAdded",e),null!=this._octree&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit("layerObjectRemoved",e),e.layer=null,null!=this._octree&&((0,n.Xy)(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(const t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit("layerObjectsAdded",e),null!=this._octree&&this._objectsAdded.push(...e)}removeMany(e){const t=new Array;for(const i of e)this._objects.delete(i.id)&&t.push(i);if(0!==t.length&&(this.events.emit("layerObjectsRemoved",t),t.forEach((e=>e.layer=null)),null!=this._octree)){for(let e=0;e<t.length;)(0,n.Xy)(this._objectsAdded,t[e])?(t[e]=t[t.length-1],t.length-=1):++e;this._octree.remove(t)}}sync(){1!==this.updatePolicy&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){null==this._octree||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return null==this._octree&&this._objects.size>50?(this._octree=new d.x((e=>e.boundingVolumeWorldSpace.bounds)),this._octree.add(this._objects.values())):null!=this._octree&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=(0,a.pR)(this._octree),this._objectsAdded.length=0}get test(){}}},67737:(e,t,i)=>{i.d(t,{G:()=>n,Q:()=>r});const n={stableRendering:!1},r={rootOrigin:null}},52479:(e,t,i)=>{i.d(t,{W:()=>F});var n=i(76460),r=i(15941),o=i(76931),s=i(91417),a=i(19555),l=i(20664),c=i(9392),d=i(55855),h=i(62984),u=i(44230),p=i(13927),f=i(34981),m=i(61785),g=i(59696),v=i(45463),_=i(86994),S=i(93684),b=i(52757),x=i(14623),y=(i(81806),i(48549)),C=i(16506),O=i(59246),A=i(60322),D=i(96643),w=i(93345),z=i(57162);class T extends O.w{constructor(e,t){super(e,t,new C.$(x.R,(()=>i.e(61721).then(i.bind(i,61721)))),E(t).locations),this.primitiveType=t.wireframe?w.WR.LINES:w.WR.TRIANGLE_STRIP}_makePipelineState(e,t){const{oitPass:i,output:n,hasOccludees:r,hasPolygonOffset:o}=e,s=0===i,a=2===i;return(0,z.Ey)({blending:(0,f.RN)(n)?(0,A.Yf)(i):null,depthTest:{func:(0,A.K_)(i)},depthWrite:(0,A.z5)(e),drawBuffers:(0,O.L)(n,(0,A.m6)(i,n)),colorWrite:z.kn,stencilWrite:r?D.v0:null,stencilTest:r?t?D.a9:D.qh:null,polygonOffset:s||a?o?P:null:A.SE})}initializePipeline(e){if(e.occluder){const t=e.hasPolygonOffset?P:null,{output:i,hasOccludees:n}=e;this._occluderPipelineTransparent=(0,z.Ey)({blending:z.T8,polygonOffset:t,depthTest:D.sf,depthWrite:null,colorWrite:z.kn,stencilWrite:null,stencilTest:n?D.mK:null,drawBuffers:(0,O.L)(i)}),this._occluderPipelineOpaque=(0,z.Ey)({blending:z.T8,polygonOffset:t,depthTest:n?D.sf:D.m,depthWrite:null,colorWrite:z.kn,stencilWrite:n?D.r8:null,stencilTest:n?D.I$:null,drawBuffers:(0,O.L)(i)}),this._occluderPipelineMaskWrite=(0,z.Ey)({blending:null,polygonOffset:t,depthTest:D.m,depthWrite:null,colorWrite:null,stencilWrite:n?D.v0:null,stencilTest:n?D.a9:null,drawBuffers:(0,O.L)(i)})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(e)return this._occludeePipeline;switch(t){case 10:return this._occluderPipelineTransparent??super.getPipeline();case 9:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const P={factor:0,units:-4};function E(e){const t=(0,y.BP)().vec3f("position").vec4f16("previousDelta").vec4f16("nextDelta").f32("u0").vec2f16("lineParameters");return e.hasVVColor?t.f32("colorFeatureAttribute"):t.vec4u8("color",{glNormalized:!0}),e.hasVVSize?t.f32("sizeFeatureAttribute"):t.f32("size"),e.hasVVOpacity&&t.f32("opacityFeatureAttribute"),(0,m.E)()&&t.vec4u8("olidColor"),e.hasAnimation&&t.vec3f16("timeStamps"),t}var L=i(6326),R=i(6485),j=i(92656);class W extends j.E{constructor(){super(...arguments),this.capType=0,this.emissionSource=0,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.animation=2,this.textureCoordinateType=0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}get hasAnimation(){return 0!==this.animation}}(0,L.Cg)([(0,R.W)({count:3})],W.prototype,"capType",void 0),(0,L.Cg)([(0,R.W)({count:4})],W.prototype,"emissionSource",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"hasPolygonOffset",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"writeDepth",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"draped",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"stippleEnabled",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"stippleOffColorEnabled",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"stipplePreferContinuous",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"roundJoins",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"applyMarkerOffset",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"hasVVSize",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"hasVVColor",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"hasVVOpacity",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"falloffEnabled",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"innerColorEnabled",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"hasOccludees",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"occluder",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"terrainDepthTest",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"cullAboveTerrain",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"wireframe",void 0),(0,L.Cg)([(0,R.W)()],W.prototype,"discardInvisibleFragments",void 0),(0,L.Cg)([(0,R.W)({count:4})],W.prototype,"animation",void 0);var V=i(75569);class F extends v.i{constructor(e){super(e,N),this._configuration=new W,this.produces=new Map([[2,e=>(0,f.CL)(e)||(0,f.RN)(e)&&8===this.parameters.renderOccluded],[3,e=>(0,f.eh)(e)],[9,e=>(0,f.T2)(e)&&8===this.parameters.renderOccluded],[10,e=>(0,f.T2)(e)&&8===this.parameters.renderOccluded],[4,e=>(0,f.RN)(e)&&this.parameters.writeDepth&&8!==this.parameters.renderOccluded],[7,e=>(0,f.RN)(e)&&!this.parameters.writeDepth&&8!==this.parameters.renderOccluded],[17,e=>(0,f.i3)(e)]])}getConfiguration(e,t){super.getConfiguration(e,t,this._configuration),this._configuration.oitPass=t.oitPass,this._configuration.draped=17===t.slot;const i=null!=this.parameters.stipplePattern&&8!==e;return this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&null!=this.parameters.stippleOffColor,this._configuration.stipplePreferContinuous=i&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins="round"===this.parameters.join,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=null!=this.parameters.markerParameters&&function(e){return 1===e.anchor&&e.hideOnShortSegments&&"begin-end"===e.placement&&e.worldSpace}(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&null!=this.parameters.innerColor,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=8===this.parameters.renderOccluded,this._configuration.terrainDepthTest=t.terrainDepthTest&&(0,f.RN)(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=this.hasEmissions?1:0,this._configuration}get visible(){return this.parameters.color[3]>=V.Q||null!=this.parameters.stipplePattern&&(this.parameters.stippleOffColor?.[3]??0)>V.Q}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectDraped({attributes:e,screenToWorldRatio:t},i,n,o,s){if(!i.options.selectionMode)return;const a=e.get("size");let l=this.parameters.width;if(this.parameters.vvSize){const t=e.get("sizeFeatureAttribute").data[0];Number.isNaN(t)?l*=this.parameters.vvSize.fallback[0]:l*=(0,r.qE)(this.parameters.vvSize.offset[0]+t*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else a&&(l*=a.data[0]);const c=n[0],d=n[1],h=(l/2+4)*t;let u=Number.MAX_VALUE,p=0;const f=e.get("position").data,m=I(this.parameters,e)?f.length-2:f.length-5;for(let g=0;g<m;g+=3){const e=f[g],t=f[g+1],i=(g+3)%f.length,n=c-e,o=d-t,s=f[i]-e,a=f[i+1]-t,l=(0,r.qE)((s*n+a*o)/(s*s+a*a),0,1),h=s*l-n,m=a*l-o,v=h*h+m*m;v<u&&(u=v,p=g/3)}u<h*h&&o(s.distance,s.normal,p)}intersect(e,t,i,o,s,c){const{options:d,camera:h,rayBegin:f,rayEnd:m}=i;if(!d.selectionMode||!e.visible||!h)return;if(!(0,_.zH)(t))return void n.A.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const g=e.attributes,v=g.get("position").data;let S=this.parameters.width;if(this.parameters.vvSize){const e=g.get("sizeFeatureAttribute").data[0];Number.isNaN(e)||(S*=(0,r.qE)(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else g.has("size")&&(S*=g.get("size").data[0]);const b=$;(0,a.C)(b,i.point);const x=S*h.pixelRatio/2+4*h.pixelRatio;(0,l.i)(re[0],b[0]-x,b[1]+x,0),(0,l.i)(re[1],b[0]+x,b[1]+x,0),(0,l.i)(re[2],b[0]+x,b[1]-x,0),(0,l.i)(re[3],b[0]-x,b[1]-x,0);for(let n=0;n<4;n++)if(!h.unprojectFromRenderScreen(re[n],oe[n]))return;(0,p.Cr)(h.eye,oe[0],oe[1],se),(0,p.Cr)(h.eye,oe[1],oe[2],ae),(0,p.Cr)(h.eye,oe[2],oe[3],le),(0,p.Cr)(h.eye,oe[3],oe[0],ce);let y=Number.MAX_VALUE,C=0;const O=I(this.parameters,g)?v.length-2:v.length-5;for(let n=0;n<O;n+=3){B[0]=v[n]+t[12],B[1]=v[n+1]+t[13],B[2]=v[n+2]+t[14];const e=(n+3)%v.length;if(U[0]=v[e]+t[12],U[1]=v[e+1]+t[13],U[2]=v[e+2]+t[14],(0,p.mN)(se,B)<0&&(0,p.mN)(se,U)<0||(0,p.mN)(ae,B)<0&&(0,p.mN)(ae,U)<0||(0,p.mN)(le,B)<0&&(0,p.mN)(le,U)<0||(0,p.mN)(ce,B)<0&&(0,p.mN)(ce,U)<0)continue;if(h.projectToRenderScreen(B,J),h.projectToRenderScreen(U,Q),J[2]<0&&Q[2]>0){(0,l.d)(q,B,U);const e=h.frustum,t=-(0,p.mN)(e[4],B)/(0,l.e)(q,(0,p.Qj)(e[4]));(0,l.g)(q,q,t),(0,l.f)(B,B,q),h.projectToRenderScreen(B,J)}else if(J[2]>0&&Q[2]<0){(0,l.d)(q,U,B);const e=h.frustum,t=-(0,p.mN)(e[4],U)/(0,l.e)(q,(0,p.Qj)(e[4]));(0,l.g)(q,q,t),(0,l.f)(U,U,q),h.projectToRenderScreen(U,Q)}else if(J[2]<0&&Q[2]<0)continue;J[2]=0,Q[2]=0;const i=(0,u.kb)((0,u.Cr)(J,Q,Y),b);i<y&&(y=i,(0,l.c)(X,B),(0,l.c)(Z,U),C=n/3)}if(y<x*x){let e=Number.MAX_VALUE;if((0,u.ld)((0,u.Cr)(X,Z,Y),(0,u.Cr)(f,m,K),G)){(0,l.d)(G,G,f);const t=(0,l.l)(G);(0,l.g)(G,G,1/t),e=t/(0,l.j)(f,m)}c(e,G,C)}}get hasEmissions(){return this.parameters.emissiveStrength>0}createBufferWriter(){return new H(E(this.parameters),this.parameters)}createGLMaterial(e){return new M(e)}validateParameters(e){"miter"!==e.join&&(e.miterLimit=0),null!=e.markerParameters&&(e.markerScale=e.markerParameters.width/e.width)}update(e){const{hasAnimation:t,animationSpeed:i}=this.parameters;return!!t&&(this.setParameters({timeElapsed:(0,s.y)(e.time)*i},!1),e.dt>0)}}class M extends g.A{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(T,e)}}class N extends S.S{constructor(){super(...arguments),this.width=0,this.color=d.Un,this.join="miter",this.cap=0,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=0,this.animation=0,this.animationSpeed=1,this.trailLength=1,this.emissiveStrength=0}get transparent(){return this.color[3]<1||this.hasAnimation||null!=this.stipplePattern&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return 0!==this.animation}}class H{constructor(e,t){this.layout=e,this._parameters=t;const i=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=x.r+i}}_isClosed(e){return I(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCount(e){const t=e.get("position").indices.length/2+1,i=this._isClosed(e);let n=i?2:4;return n+=((i?t:t-1)-(i?0:1))*(2*this.numJoinSubdivisions+4),n+=2,this._parameters.wireframe&&(n=2+4*(n-2)),n}write(e,t,i,n,r,o){const s=i.get("position"),a=s.indices,c=s.data.length/3,d=i.get("distanceToStart")?.data;a&&a.length!==2*(c-1)&&console.warn("RibbonLineMaterial does not support indices");const u=(this.layout.fields.has("sizeFeatureAttribute")?i.get("sizeFeatureAttribute")?.data[0]:i.get("size")?.data[0])??1;let p=[1,1,1,1],f=0;const g=this.layout.fields.has("colorFeatureAttribute");g?f=i.get("colorFeatureAttribute").data[0]:i.has("color")&&(p=i.get("color").data);const v=i.get("timeStamps")?.data,_=v&&this.layout.fields.has("timeStamps"),S=this.layout.fields.has("opacityFeatureAttribute"),x=S?i.get("opacityFeatureAttribute").data[0]:0,y=new Float32Array(r.buffer),C=(0,h.Bg)(r.buffer),O=new Uint8Array(r.buffer),A=this.layout.stride/4;let D=o*A;const w=D;let z=0;const T=d?(e,t,i)=>z=d[i]:(e,t,i)=>z+=(0,l.j)(e,t),P=y.BYTES_PER_ELEMENT/C.BYTES_PER_ELEMENT,E=4/P,L=(e,t,i,r,o,s,a,l)=>{y[D++]=t[0],y[D++]=t[1],y[D++]=t[2],(0,b.Wu)(e,t,C,D*P),D+=E,(0,b.Wu)(i,t,C,D*P),D+=E,y[D++]=l;let c=D*P;if(C[c++]=o,C[c++]=s,D=Math.ceil(c/P),g)y[D]=f;else{const e=Math.min(4*a,p.length-4),t=4*D;O[t]=255*p[e],O[t+1]=255*p[e+1],O[t+2]=255*p[e+2],O[t+3]=255*p[e+3]}if(D++,y[D++]=u,S&&(y[D++]=x),(0,m.E)()){let e=4*D;n?(O[e++]=n[0],O[e++]=n[1],O[e++]=n[2],O[e++]=n[3]):(O[e++]=0,O[e++]=0,O[e++]=0,O[e++]=0),D=Math.ceil(.25*e)}_&&(c=D*P,C[c++]=r[0],C[c++]=r[1],C[c++]=r[2],D=Math.ceil(c/P))};D+=A,(0,l.i)(te,s.data[0],s.data[1],s.data[2]),_&&(0,l.i)(ne,v[0],v[1],v[2]),e&&(0,l.t)(te,te,e);const R=this._isClosed(i);if(R){const t=s.data.length-3;(0,l.i)(ee,s.data[t],s.data[t+1],s.data[t+2]),e&&(0,l.t)(ee,ee,e)}else(0,l.i)(ie,s.data[3],s.data[4],s.data[5]),e&&(0,l.t)(ie,ie,e),L(te,te,ie,ne,1,-4,0,0),L(te,te,ie,ne,1,4,0,0),(0,l.c)(ee,te),(0,l.c)(te,ie),_&&(0,l.i)(ne,v[3],v[4],v[5]);const j=R?0:1,W=R?c:c-1;for(let h=j;h<W;h++){const t=(h+1)%c*3;(0,l.i)(ie,s.data[t],s.data[t+1],s.data[t+2]),e&&(0,l.t)(ie,ie,e),T(ee,te,h),L(ee,te,ie,ne,0,-1,h,z),L(ee,te,ie,ne,0,1,h,z);const i=this.numJoinSubdivisions;for(let e=0;e<i;++e){const t=(e+1)/(i+1);L(ee,te,ie,ne,t,-1,h,z),L(ee,te,ie,ne,t,1,h,z)}L(ee,te,ie,ne,1,-2,h,z),L(ee,te,ie,ne,1,2,h,z),(0,l.c)(ee,te),(0,l.c)(te,ie),_&&(0,l.i)(ne,v[t],v[t+1],v[t+2])}return R?((0,l.i)(ie,s.data[3],s.data[4],s.data[5]),e&&(0,l.t)(ie,ie,e),z=T(ee,te,W),L(ee,te,ie,ne,0,-1,j,z),L(ee,te,ie,ne,0,1,j,z)):(z=T(ee,te,W),L(ee,te,te,ne,0,-5,W,z),L(ee,te,te,ne,0,5,W,z)),k(y,w+A,y,w,A),D=k(y,D-A,y,D,A),this._parameters.wireframe&&this._addWireframeVertices(r,w,D,A),null}_addWireframeVertices(e,t,i,n){const r=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),o=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,i-t);let s=0;const a=e=>s=k(o,e,r,s,n);for(let l=0;l<o.length-1;l+=2*n)a(l),a(l+2*n),a(l+1*n),a(l+2*n),a(l+1*n),a(l+3*n)}}function k(e,t,i,n,r){for(let o=0;o<r;o++)i[n++]=e[t++];return n}function I(e,t){return!!e.isClosed&&t.get("position").indices.length>2}const B=(0,c.vt)(),U=(0,c.vt)(),q=(0,c.vt)(),G=(0,c.vt)(),$=(0,c.vt)(),J=(0,o.r_)(),Q=(0,o.r_)(),X=(0,c.vt)(),Z=(0,c.vt)(),Y=(0,u.vt)(),K=(0,u.vt)(),ee=(0,c.vt)(),te=(0,c.vt)(),ie=(0,c.vt)(),ne=(0,c.vt)(),re=[(0,o.r_)(),(0,o.r_)(),(0,o.r_)(),(0,o.r_)()],oe=[(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)()],se=(0,p.vt)(),ae=(0,p.vt)(),le=(0,p.vt)(),ce=(0,p.vt)()},68967:(e,t,i)=>{i.d(t,{Ci:()=>o,PC:()=>s,Vk:()=>a});var n=i(9392),r=i(99643);function o(e,t){return null==e&&(e=[]),e.push(t),e}function s(e,t){if(null==e)return null;const i=e.filter((e=>e!==t));return 0===i.length?null:i}function a(e,t,i,n,o){l[0]=e.get(t,0),l[1]=e.get(t,1),l[2]=e.get(t,2),(0,r.jS)(l,c,3),i.set(o,0,c[0]),n.set(o,0,c[1]),i.set(o,1,c[2]),n.set(o,1,c[3]),i.set(o,2,c[4]),n.set(o,2,c[5])}const l=(0,n.vt)(),c=new Float32Array(6)},2466:(e,t,i)=>{i.d(t,{Q:()=>o});var n=i(21390),r=i(86955);function o(e,t){if(!t.hasAnimation)return;const{attributes:i,varyings:o,vertex:s,fragment:a}=e;i.add("timeStamps","vec3"),o.add("vTimeStamp","float"),o.add("vFirstTime","float"),o.add("vLastTime","float"),s.main.add(r.H`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;`);const{animation:l}=t;3===l&&a.constants.add("decayRate","float",2.3),a.code.add(r.H`
    float getTrailOpacity(float x) {
      ${function(e){switch(e){case 2:return"return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case 3:return"float cutOff = exp(-decayRate);\n        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);";default:return"return 1.0;"}}(l)}
    }`),a.uniforms.add(new n.m("timeElapsed",(e=>e.timeElapsed)),new n.m("trailLength",(e=>e.trailLength))).code.add(r.H`vec4 animate(vec4 color) {
float totalTimeWithTrail = vLastTime - vFirstTime + trailLength;
float timeAtHead = mod(timeElapsed - vFirstTime, totalTimeWithTrail) + vFirstTime;
float t = timeAtHead - vTimeStamp;
vec4 animatedColor = color * step(0.0, t);
animatedColor.a *= getTrailOpacity(t / trailLength);
return animatedColor;
}`)}}}]);
//# sourceMappingURL=98022.512f8da8.chunk.js.map