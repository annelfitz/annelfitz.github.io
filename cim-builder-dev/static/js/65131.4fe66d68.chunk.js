"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[65131],{68745:(e,t,a)=>{a.d(t,{D:()=>j,b:()=>D});var o=a(62026),i=a(34981),r=a(26917),n=a(59395),s=a(35771),l=a(45937),c=a(85793),d=a(59046),h=a(22148),u=a(97808),m=a(54478),v=a(55386),p=a(25530),f=a(15710),g=a(72937),x=a(9365),b=a(66970),w=a(43557),y=a(27920),M=a(42953),T=a(26719),C=a(51740),S=a(94192),_=a(55696),H=a(66763),z=a(37516),I=a(77904),N=a(42451),O=a(5517),F=a(58350),E=a(21390),G=a(86955),L=a(70367),A=a(34260),R=a(99362),V=a(21670),P=a(2687),B=a(75569);function D(e){const t=new P.N5,{attributes:a,vertex:D,fragment:j,varyings:W}=t,{output:U,normalType:k,offsetBackfaces:Y,spherical:Z,snowCover:J,pbrMode:q,textureAlphaPremultiplied:$,instancedDoublePrecision:X,hasVertexColors:K,hasVertexTangents:Q,hasColorTexture:ee,hasNormalTexture:te,hasNormalTextureTransform:ae,hasColorTextureTransform:oe,hasBloom:ie}=e;if((0,N.NB)(D,e),a.add("position","vec3"),W.add("vpos","vec3",{invariant:!0}),t.include(H.A,e),t.include(l.B,e),t.include(p.Ge,e),t.include(_.q2,e),!(0,i.RN)(U))return t.include(f.E,e),t;t.include(_.Sx,e),t.include(_.MU,e),t.include(_.O1,e),t.include(_.QM,e),(0,N.yu)(D,e),t.include(d.Y,e),t.include(n.d,e);const re=0===k||1===k;return re&&Y&&t.include(o.M),t.include(g.W,e),t.include(v.Mh,e),t.include(s.v,e),W.add("vPositionLocal","vec3"),t.include(u.U,e),t.include(h.K,e),t.include(m.c,e),D.uniforms.add(new F.E("externalColor",(e=>e.externalColor),{supportsNaN:!0})),W.add("vcolorExt","vec4"),t.include(S.Z,e),D.include(c.WD),D.include(c.oF),t.include(X?C.G:C.Bz,e),D.main.add(G.H`
    forwardNormalizedVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${(0,G.If)(re,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${(0,G.If)(Q,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${(0,G.If)(re&&Y,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${G.H.int(R.Um.ignore)} && vcolorExt.a < ${G.H.float(B.Q)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),t.include(b.kA,e),j.include(x.n,e),t.include(z.S,e),j.include(r.HQ,e),t.include(V.z,e),(0,N.yu)(j,e),j.uniforms.add(D.uniforms.get("localOrigin"),new O.t("ambient",(e=>e.ambient)),new O.t("diffuse",(e=>e.diffuse)),new E.m("opacity",(e=>e.opacity)),new E.m("layerOpacity",(e=>e.layerOpacity))),ee&&j.uniforms.add(new L.N("tex",(e=>e.texture))),t.include(T._,e),j.include(M.c,e),j.include(I.N),t.include(y.r,e),j.include(A.b,e),(0,b.a8)(j),(0,b.eU)(j),(0,w.O4)(j),j.main.add(G.H`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${ee?G.H`
            vec4 texColor = texture(tex, ${oe?"colorUV":"vuv0"});
            ${(0,G.If)($,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:G.H`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${2===k?G.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:G.H`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${(0,G.If)(K,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${(0,G.If)(K,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${te?`mat3 tangentSpace = computeTangentSpace(${Q?"normal":"normal, vpos, vuv0"});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${ae?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${Z?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${(0,G.If)(J,G.H`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${1===q||2===q?G.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            vec4 emission = ${ie?"vec4(0.0)":"getEmissions(albedo)"};
            ${(0,G.If)(J,"mrr = applySnowToMRR(mrr, snow);\n               emission = snowCoverForEmissions(emission, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:G.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos, albedo ${(0,G.If)(J,", snow")});
  `),t}const j=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},35249:(e,t,a)=>{a.d(t,{R:()=>R,b:()=>A});var o=a(62026),i=a(34981),r=a(26917),n=a(59395),s=a(35771),l=a(45937),c=a(85793),d=a(59046),h=a(22148),u=a(97808),m=a(54478),v=a(25530),p=a(15710),f=a(9365),g=a(66970),x=a(43557),b=a(42953),w=a(26719),y=a(51740),M=a(94192),T=a(66763),C=a(37516),S=a(77904),_=a(42451),H=a(5517),z=a(58350),I=a(21390),N=a(86955),O=a(70367),F=a(99362),E=a(21670),G=a(2687),L=a(75569);function A(e){const t=new G.N5,{attributes:a,vertex:A,fragment:R,varyings:V}=t,{output:P,offsetBackfaces:B,pbrMode:D,snowCover:j,spherical:W,hasBloom:U}=e,k=1===D||2===D;if((0,_.NB)(A,e),a.add("position","vec3"),V.add("vpos","vec3",{invariant:!0}),t.include(T.A,e),t.include(l.B,e),t.include(v.Ge,e),t.include(M.Z,e),!(0,i.RN)(P))return t.include(p.E,e),t;(0,_.yu)(t.vertex,e),t.include(d.Y,e),t.include(n.d,e),B&&t.include(o.M),V.add("vNormalWorld","vec3"),V.add("localvpos","vec3",{invariant:!0}),t.include(u.U,e),t.include(h.K,e),t.include(s.v,e),t.include(m.c,e),A.include(c.WD),A.include(c.oF),A.uniforms.add(new z.E("externalColor",(e=>e.externalColor),{supportsNaN:!0})),V.add("vcolorExt","vec4"),t.include(e.instancedDoublePrecision?y.G:y.Bz,e),A.main.add(N.H`
      forwardNormalizedVertexColor();

      MaskedColor maskedColorExt =
        applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

      vcolorExt = maskedColorExt.color;
      forwardColorMixMode(maskedColorExt.mask);

      bool alphaCut = opacityMixMode != ${N.H.int(F.Um.ignore)} && vcolorExt.a < ${N.H.float(L.Q)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardTextureCoordinates();
      forwardLinearDepthToReadShadowMap();
      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${(0,N.If)(B,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `);const{hasColorTexture:Y,hasColorTextureTransform:Z}=e;return t.include(g.kA,e),R.include(f.n,e),t.include(C.S,e),R.include(r.HQ,e),t.include(E.z,e),(0,_.yu)(R,e),(0,x.Gc)(R),(0,g.a8)(R),(0,g.eU)(R),R.uniforms.add(A.uniforms.get("localOrigin"),A.uniforms.get("view"),new H.t("ambient",(e=>e.ambient)),new H.t("diffuse",(e=>e.diffuse)),new I.m("opacity",(e=>e.opacity)),new I.m("layerOpacity",(e=>e.layerOpacity))),Y&&R.uniforms.add(new O.N("tex",(e=>e.texture))),t.include(w._,e),R.include(b.c,e),R.include(S.N),(0,x.O4)(R),R.main.add(N.H`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${Y?`texture(tex, ${Z?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,N.If)(Y,`${(0,N.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?N.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:N.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      ${(0,N.If)(j,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${N.H`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,N.If)(k,`vec3 normalGround = ${W?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${k?N.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,N.If)(j,N.H`mrr = applySnowToMRR(mrr, 1.0)`)}
            vec4 emission = ${j||U?"vec4(0.0)":"getEmissions(albedo)"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:N.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos, albedo ${(0,N.If)(j,", 1.0")});`),t}const R=Object.freeze(Object.defineProperty({__proto__:null,build:A},Symbol.toStringTag,{value:"Module"}))},51331:(e,t,a)=>{a.d(t,{S:()=>b,b:()=>f,g:()=>g});var o=a(19555),i=a(72745),r=a(73398),n=a(65058),s=a(27963),l=a(28450),c=a(95756),d=a(23148),h=a(21390),u=a(86955),m=a(70367),v=a(2687);const p=16;function f(){const e=new v.N5,t=e.fragment;return e.include(r.c),e.include(s.Ir),t.include(n.E),t.uniforms.add(new d.U("radius",(e=>g(e.camera)))).code.add(u.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(u.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add("fragOcclusion","float"),t.uniforms.add(new m.N("normalMap",(e=>e.normalTexture)),new m.N("depthMap",(e=>e.depthTexture)),new h.m("projScale",(e=>e.projScale)),new m.N("rnm",(e=>e.noiseTexture)),new c.G("rnmScale",((e,t)=>(0,o.hZ)(x,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new h.m("intensity",(e=>e.intensity)),new l.E("screenSize",(e=>(0,o.hZ)(x,e.camera.fullWidth,e.camera.fullHeight)))).main.add(u.H`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${u.H.int(p)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${u.H.int(p)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

    fragOcclusion = A;
  `),e}function g(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const x=(0,i.vt)(),b=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:g},Symbol.toStringTag,{value:"Module"}))},29228:(e,t,a)=>{a.d(t,{S:()=>m,b:()=>u});var o=a(73398),i=a(65058),r=a(56289),n=a(21390),s=a(86955),l=a(27374),c=a(70367),d=a(2687);const h=4;function u(){const e=new d.N5,t=e.fragment;e.include(o.c);const a=(h+1)/2,u=1/(2*a*a);return t.include(i.E),t.uniforms.add(new c.N("depthMap",(e=>e.depthTexture)),new l.o("tex",(e=>e.colorTexture)),new r.t("blurSize",(e=>e.blurSize)),new n.m("projScale",((e,t)=>{const a=t.camera.distance;return a>5e4?Math.max(0,e.projScale-(a-5e4)):e.projScale}))),t.code.add(s.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.H.float(u)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(s.H`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${s.H.int(h)}; r <= ${s.H.int(h)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const m=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}))},62026:(e,t,a)=>{a.d(t,{M:()=>i});var o=a(86955);function i(e){e.vertex.code.add(o.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},35771:(e,t,a)=>{a.d(t,{v:()=>r});var o=a(85793),i=a(86955);function r(e,t){t.instancedColor?(e.attributes.add("instanceColor","vec4"),e.vertex.include(o.WD),e.vertex.include(o.Y1),e.vertex.include(o.ML),e.vertex.code.add(i.H`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${"instanceColor"}));
      }
    `)):e.vertex.code.add(i.H`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}},45937:(e,t,a)=>{a.d(t,{B:()=>g});var o=a(63919),i=a(44680),r=a(13191),n=a(20664),s=a(9392),l=a(89299),c=a(42451),d=a(84115),h=a(86955),u=a(72106),m=a(43425),v=a(99643),p=a(31432);p.Y;const f=(0,i.vt)();function g(e,t){const{hasModelTransformation:a,instancedDoublePrecision:i,instanced:s,output:p,hasVertexTangents:g}=t;a&&(e.vertex.uniforms.add(new m.X("model",(e=>e.modelTransformation??r.zK))),e.vertex.uniforms.add(new u.k("normalLocalOriginFromModel",(e=>((0,o.Ge)(f,e.modelTransformation??r.zK),f))))),s&&i&&(e.attributes.add("instanceModelOriginHi","vec3"),e.attributes.add("instanceModelOriginLo","vec3"),e.attributes.add("instanceModel","mat3"),e.attributes.add("instanceModelNormal","mat3"));const b=e.vertex;i&&(b.include(l.u,t),b.uniforms.add(new d.d("viewOriginHi",(e=>(0,v.Zo)((0,n.i)(x,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),x))),new d.d("viewOriginLo",(e=>(0,v.jA)((0,n.i)(x,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),x))))),b.code.add(h.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${a?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?h.H`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),b.code.add(h.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${a?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),3===p&&((0,c.S7)(b),b.code.add(h.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${a?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),g&&b.code.add(h.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const x=(0,s.vt)()},59046:(e,t,a)=>{a.d(t,{Y:()=>r});var o=a(4212),i=a(86955);function r(e,t){switch(t.normalType){case 1:e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(i.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add("normal","vec3"),e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`);break;case 2:e.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,o.Xb)(t.normalType);case 3:}}},22148:(e,t,a)=>{a.d(t,{K:()=>s});var o=a(85793),i=a(86955),r=a(72790),n=a(99362);function s(e,t){e.varyings.add("colorMixMode","int"),e.varyings.add("opacityMixMode","int"),e.vertex.uniforms.add(new r.c("symbolColorMixMode",(e=>n.Um[e.colorMixMode]))),t.hasSymbolColors?(e.vertex.include(o.WD),e.vertex.include(o.Y1),e.vertex.include(o.ML),e.attributes.add("symbolColor","vec4"),e.vertex.code.add(i.H`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${"symbolColor"}));
    }
  `)):e.vertex.code.add(i.H`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(i.H`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${i.H.int(n.Um.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${i.H.int(n.Um.ignore)} : symbolColorMixMode;
    }
  `)}},55386:(e,t,a)=>{a.d(t,{Mh:()=>h,Zo:()=>u,gy:()=>m});var o=a(4212),i=a(44680),r=a(55855),n=a(59046),s=a(36358),l=a(86955),c=a(42759),d=a(72106);function h(e,t){switch(t.normalType){case 0:case 1:e.include(n.Y,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.k("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))).code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,o.Xb)(t.normalType);case 3:}}class u extends s.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,i.vt)()}}class m extends s.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,i.vt)(),this.toMapSpace=(0,r.vt)()}}},15710:(e,t,a)=>{a.d(t,{E:()=>g});var o=a(67078),i=a(26917),r=a(59395),n=a(59046),s=a(90080),l=a(97808),c=a(55386),d=a(49399),h=a(87236),u=a(66763),m=a(37516),v=a(42451),p=a(86955),f=a(70367);function g(e,t){const{vertex:a,fragment:g,varyings:x}=e,{hasColorTexture:b,alphaDiscardMode:w}=t,y=b&&1!==w,{output:M,normalType:T,hasColorTextureTransform:C}=t;switch(M){case 2:(0,v.NB)(a,t),e.include(r.d,t),g.include(i.HQ,t),e.include(l.U,t),y&&g.uniforms.add(new f.N("tex",(e=>e.texture))),a.main.add(p.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(m.S,t),g.main.add(p.H`
        discardBySlice(vpos);
        ${(0,p.If)(y,p.H`vec4 texColor = texture(tex, ${C?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case 4:case 5:case 6:case 7:case 9:(0,v.NB)(a,t),e.include(r.d,t),e.include(l.U,t),e.include(u.A,t),e.include(d.L,t),g.include(i.HQ,t),e.include(s.g,t),(0,o.xJ)(e),x.add("depth","float",{invariant:!0}),y&&g.uniforms.add(new f.N("tex",(e=>e.texture))),a.main.add(p.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(m.S,t),g.main.add(p.H`
        discardBySlice(vpos);
        ${(0,p.If)(y,p.H`vec4 texColor = texture(tex, ${C?"colorUV":"vuv0"});
               discardOrAdjustAlpha(texColor);`)}
        ${9===M?p.H`outputObjectAndLayerIdColor();`:p.H`outputDepth(depth);`}`);break;case 3:{(0,v.NB)(a,t),e.include(r.d,t),e.include(n.Y,t),e.include(c.Mh,t),e.include(l.U,t),e.include(u.A,t),y&&g.uniforms.add(new f.N("tex",(e=>e.texture))),2===T&&x.add("vPositionView","vec3",{invariant:!0});const o=0===T||1===T;a.main.add(p.H`
        vpos = getVertexInLocalOriginSpace();
        ${o?p.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:p.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),g.include(i.HQ,t),e.include(m.S,t),g.main.add(p.H`
        discardBySlice(vpos);
        ${(0,p.If)(y,p.H`vec4 texColor = texture(tex, ${C?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${2===T?p.H`vec3 normal = screenDerivativeNormal(vPositionView);`:p.H`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 8:(0,v.NB)(a,t),e.include(r.d,t),e.include(l.U,t),e.include(u.A,t),y&&g.uniforms.add(new f.N("tex",(e=>e.texture))),a.main.add(p.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),g.include(i.HQ,t),e.include(m.S,t),e.include(h.Q,t),g.main.add(p.H`
        discardBySlice(vpos);
        ${(0,p.If)(y,p.H`vec4 texColor = texture(tex, ${C?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}},49399:(e,t,a)=>{a.d(t,{L:()=>i});var o=a(86955);function i(e,t){switch(t.output){case 4:case 5:case 6:case 7:e.fragment.code.add(o.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`)}}},72937:(e,t,a)=>{a.d(t,{W:()=>h});var o=a(44680),i=a(72745),r=a(95352),n=a(95756),s=a(86955),l=a(72106),c=a(27374),d=a(70367);function h(e,t){const a=e.fragment,{hasVertexTangents:h,doubleSidedMode:u,hasNormalTexture:m,textureCoordinateType:v,bindType:p,hasNormalTextureTransform:f}=t;h?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===u?a.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(s.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),m&&0!==v&&(e.include(r.r,t),a.uniforms.add(1===p?new d.N("normalTexture",(e=>e.textureNormal)):new c.o("normalTexture",(e=>e.textureNormal))),f&&(a.uniforms.add(new n.G("scale",(e=>e.scale??i.Un))),a.uniforms.add(new l.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??o.zK)))),a.code.add(s.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),f&&a.code.add(s.H`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(s.H`return tangentSpace * rawNormal;
}`))}},50819:(e,t,a)=>{a.d(t,{W:()=>d});var o=a(20664),i=a(9392),r=a(43047),n=a(55855),s=a(84115),l=a(51596),c=a(86955);function d(e,t){const a=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(a.uniforms.add(new s.d("lightingAmbientSH0",(({lighting:e})=>(0,o.i)(h,e.sh.r[0],e.sh.g[0],e.sh.b[0])))),a.code.add(c.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(a.uniforms.add(new l.I("lightingAmbientSH_R",(({lighting:e})=>(0,r.s)(u,e.sh.r[0],e.sh.r[1],e.sh.r[2],e.sh.r[3]))),new l.I("lightingAmbientSH_G",(({lighting:e})=>(0,r.s)(u,e.sh.g[0],e.sh.g[1],e.sh.g[2],e.sh.g[3]))),new l.I("lightingAmbientSH_B",(({lighting:e})=>(0,r.s)(u,e.sh.b[0],e.sh.b[1],e.sh.b[2],e.sh.b[3])))),a.code.add(c.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(a.uniforms.add(new s.d("lightingAmbientSH0",(({lighting:e})=>(0,o.i)(h,e.sh.r[0],e.sh.g[0],e.sh.b[0]))),new l.I("lightingAmbientSH_R1",(({lighting:e})=>(0,r.s)(u,e.sh.r[1],e.sh.r[2],e.sh.r[3],e.sh.r[4]))),new l.I("lightingAmbientSH_G1",(({lighting:e})=>(0,r.s)(u,e.sh.g[1],e.sh.g[2],e.sh.g[3],e.sh.g[4]))),new l.I("lightingAmbientSH_B1",(({lighting:e})=>(0,r.s)(u,e.sh.b[1],e.sh.b[2],e.sh.b[3],e.sh.b[4]))),new l.I("lightingAmbientSH_R2",(({lighting:e})=>(0,r.s)(u,e.sh.r[5],e.sh.r[6],e.sh.r[7],e.sh.r[8]))),new l.I("lightingAmbientSH_G2",(({lighting:e})=>(0,r.s)(u,e.sh.g[5],e.sh.g[6],e.sh.g[7],e.sh.g[8]))),new l.I("lightingAmbientSH_B2",(({lighting:e})=>(0,r.s)(u,e.sh.b[5],e.sh.b[6],e.sh.b[7],e.sh.b[8])))),a.code.add(c.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||a.code.add(c.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const h=(0,i.vt)(),u=(0,n.vt)()},9365:(e,t,a)=>{a.d(t,{n:()=>A});var o=a(86955),i=a(4653),r=a(6326),n=a(15941),s=a(30726),l=a(68134),c=a(91417),d=a(46053),h=(a(81806),a(76460),a(47249),a(85842)),u=a(19555),m=a(74628),v=a(36451),p=a(48353),f=a(16506),g=a(59246),x=a(11850),b=a(29228),w=a(57162);class y extends g.w{constructor(e,t){super(e,t,new f.$(b.S,(()=>a.e(91538).then(a.bind(a,91538)))),x.Nx)}initializePipeline(){return(0,w.Ey)({colorWrite:w.kn})}}var M=a(72745),T=a(31432);class C extends T.Y{constructor(){super(...arguments),this.projScale=1}}class S extends C{constructor(){super(...arguments),this.intensity=1}}class _ extends T.Y{}class H extends _{constructor(){super(...arguments),this.blurSize=(0,M.vt)()}}var z=a(51331);class I extends g.w{constructor(e,t){super(e,t,new f.$(z.S,(()=>a.e(43185).then(a.bind(a,43185)))),x.Nx)}initializePipeline(){return(0,w.Ey)({colorWrite:w.kn})}}var N=a(93345),O=a(80895),F=a(96673);const E=2;let G=class extends v.A{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=m.OG.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,c.l5)(0),this._passParameters=new S,this._drawParameters=new H}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new F.R(32);t.wrapMode=33071,t.pixelFormat=6407,t.wrapMode=10497,t.hasMipmap=!0,this._passParameters.noiseTexture=new O.g(this.renderingContext,t,e),this.techniques.precompile(I),this.techniques.precompile(y),this.addHandles((0,l.wB)((()=>this.isEnabled()),(()=>this._enableTime=(0,c.l5)(0))))}destroy(){this._passParameters.noiseTexture=(0,s.WD)(this._passParameters.noiseTexture)}render(e){const t=e.find((({name:e})=>"normals"===e)),a=t?.getTexture(),o=t?.getTexture(N.nI);if(!a||!o)return;const i=this.techniques.get(I),r=this.techniques.get(y);if(!i.compiled||!r.compiled)return this._enableTime=(0,c.l5)(performance.now()),void this.requestRender(1);0===this._enableTime&&(this._enableTime=(0,c.l5)(performance.now()));const s=this.renderingContext,l=this.view.qualitySettings.fadeDuration,d=this.bindParameters,h=d.camera,v=h.relativeElevation,f=(0,n.qE)((p.b-v)/(p.b-p.O),0,1),g=l>0?Math.min(l,performance.now()-this._enableTime)/l:1,x=g*f;this._passParameters.normalTexture=a,this._passParameters.depthTexture=o,this._passParameters.projScale=1/h.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*L/(0,z.g)(h)**6*x;const b=h.fullViewport[2],w=h.fullViewport[3],M=this.fboCache.acquire(b,w,"ssao input",2);s.bindFramebuffer(M.fbo),s.setViewport(0,0,b,w),s.bindTechnique(i,d,this._passParameters,this._drawParameters),s.screen.draw();const T=Math.round(b/E),C=Math.round(w/E),S=this.fboCache.acquire(T,C,"ssao blur",0);s.bindFramebuffer(S.fbo),this._drawParameters.colorTexture=M.getTexture(),(0,u.hZ)(this._drawParameters.blurSize,0,E/w),s.bindTechnique(r,d,this._passParameters,this._drawParameters),s.setViewport(0,0,T,C),s.screen.draw(),M.release();const _=this.fboCache.acquire(T,C,m.OG.SSAO,0);return s.bindFramebuffer(_.fbo),s.setViewport(0,0,b,w),s.setClearColor(1,1,1,0),s.clear(16384),this._drawParameters.colorTexture=S.getTexture(),(0,u.hZ)(this._drawParameters.blurSize,E/b,0),s.bindTechnique(r,d,this._passParameters,this._drawParameters),s.setViewport(0,0,T,C),s.screen.draw(),s.setViewport4fv(h.fullViewport),S.release(),g<1&&this.requestRender(1),_}};(0,r.Cg)([(0,d.MZ)()],G.prototype,"consumes",void 0),(0,r.Cg)([(0,d.MZ)()],G.prototype,"produces",void 0),(0,r.Cg)([(0,d.MZ)({constructOnly:!0})],G.prototype,"isEnabled",void 0),G=(0,r.Cg)([(0,h.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],G);const L=.5;function A(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new i.x("ssaoTex",(e=>e.ssao?.getTexture()))),e.constants.add("blurSizePixelsInverse","float",1/E),e.code.add(o.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(o.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},66970:(e,t,a)=>{a.d(t,{kA:()=>g,a8:()=>p,eU:()=>f});var o=a(99746),i=(a(81806),a(50819)),r=a(9365),n=a(43557),s=a(42953),l=a(36324),c=a(67582),d=a(23148),h=a(86955),u=a(4998);function m(e){e.code.add(h.H`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(h.H`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}var v=a(61337);function p(e){e.constants.add("ambientBoostFactor","float",u.uH)}function f(e){e.uniforms.add(new d.U("lightingGlobalFactor",(e=>e.lighting.globalFactor)))}function g(e,t){const a=e.fragment,{pbrMode:u,spherical:g,hasColorTexture:x}=t;a.include(r.n,t),0!==u&&a.include(s.c,t),e.include(i.W,t),a.include(l.p),a.include(v.b,t);const b=!(2===u&&!x);switch(b&&a.include(m),a.code.add(h.H`
    const float GAMMA_SRGB = ${h.H.float(o.Tf)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${(0,h.If)(0!==u,"const float GROUND_REFLECTANCE = 0.2;")}
  `),p(a),f(a),(0,n.Gc)(a),a.code.add(h.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${g?h.H`normalize(vPosWorld)`:h.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,n.O4)(a),a.code.add(h.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),u){case 0:case 4:case 3:e.include(n.Vt),a.code.add(h.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case 1:case 2:a.code.add(h.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, vec4 _emission,
float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),a.code.add(h.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?a.uniforms.add(new c.o("hasFillLights",(e=>e.enableFillLights))):a.constants.add("hasFillLights","bool",!1),a.code.add(h.H`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),a.uniforms.add(new d.U("lightingSpecularStrength",(e=>e.lighting.mainLight.specularStrength)),new d.U("lightingEnvironmentStrength",(e=>e.lighting.mainLight.environmentStrength))).code.add(h.H`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),a.code.add(h.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : tonemapACES(pow(_emission.rgb, vec3(GAMMA_SRGB)));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${b?h.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:h.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case 5:case 6:(0,n.Gc)(a),(0,n.O4)(a),a.code.add(h.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`)}}},43557:(e,t,a)=>{a.d(t,{Gc:()=>r,O4:()=>n,Vt:()=>s});var o=a(84115),i=a(86955);function r(e){e.uniforms.add(new o.d("mainLightDirection",(e=>e.lighting.mainLight.direction)))}function n(e){e.uniforms.add(new o.d("mainLightIntensity",(e=>e.lighting.mainLight.intensity)))}function s(e){r(e.fragment),n(e.fragment),e.fragment.code.add(i.H`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}},27920:(e,t,a)=>{a.d(t,{r:()=>r});var o=a(4212),i=a(86955);function r(e,t){const a=e.fragment;switch(a.code.add(i.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case 0:a.code.add(i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:a.code.add(i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:a.code.add(i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,o.Xb)(t.doubleSidedMode);case 3:}}},42953:(e,t,a)=>{a.d(t,{c:()=>n,f:()=>s});var o=a(86955);function i(e){e.code.add(o.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(o.H`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(o.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var r=a(36324);function n(e,t){e.include(r.p),1!==t.pbrMode&&2!==t.pbrMode&&5!==t.pbrMode&&6!==t.pbrMode||(e.code.add(o.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(o.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),1!==t.pbrMode&&2!==t.pbrMode||(e.include(i),e.code.add(o.H`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),e.code.add(o.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}function s(e,t){e.include(r.p),e.code.add(o.H`
  struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),e.code.add(o.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(o.H`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(o.H`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(o.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}},26719:(e,t,a)=>{a.d(t,{_:()=>d});var o=a(95352),i=a(72468),r=a(5517),n=a(86955),s=a(27374),l=a(70367),c=(a(78992),a(31432));c.Y;function d(e,t){const a=t.pbrMode,c=e.fragment;if(2!==a&&0!==a&&1!==a)return void c.code.add(n.H`void applyPBRFactors() {}`);if(0===a)return void c.code.add(n.H`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(2===a)return void c.code.add(n.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:d,hasMetallicRoughnessTextureTransform:h,hasOcclusionTexture:u,hasOcclusionTextureTransform:m,bindType:v}=t;(d||u)&&e.include(o.r,t),c.code.add(n.H`vec3 mrr;
float occlusion;`),d&&c.uniforms.add(1===v?new l.N("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new s.o("texMetallicRoughness",(e=>e.textureMetallicRoughness))),u&&c.uniforms.add(1===v?new l.N("texOcclusion",(e=>e.textureOcclusion)):new s.o("texOcclusion",(e=>e.textureOcclusion))),c.uniforms.add(1===v?new r.t("mrrFactors",(e=>e.mrrFactors)):new i.W("mrrFactors",(e=>e.mrrFactors))),c.code.add(n.H`
    ${(0,n.If)(d,n.H`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${(0,n.If)(u,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${u?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${(0,n.If)(d,`applyMetallicRoughness(${h?"metallicRoughnessUV":"vuv0"});`)}
      ${(0,n.If)(u,`applyOcclusion(${m?"occlusionUV":"vuv0"});`)}
    }
  `)}},51740:(e,t,a)=>{a.d(t,{Bz:()=>w,G:()=>b});a(9392);var o=a(72412),i=a(34981),r=a(86955);function n(e,t){const a=(0,i.RN)(t.output)&&t.receiveShadows;a&&(0,o.o)(e,!0),e.vertex.code.add(r.H`
    void forwardLinearDepthToReadShadowMap() { ${(0,r.If)(a,"forwardLinearDepth(gl_Position.w);")} }
  `)}var s=a(51596),l=a(53908),c=a(87003);class d extends c.n{constructor(e,t,a,o){super(e,"mat4",2,((a,i,r,n)=>a.setUniformMatrix4fv(e,t(i,r,n),o)),a)}}class h extends c.n{constructor(e,t,a,o){super(e,"mat4",1,((a,i,r)=>a.setUniformMatrix4fv(e,t(i,r),o)),a)}}var u=a(31432);u.Y;function m(e){e.fragment.uniforms.add(new h("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),p(e)}function v(e){e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),p(e)}function p(e){const{fragment:t}=e;t.uniforms.add(new s.I("cascadeDistances",(e=>e.shadowMap.cascadeDistances)),new l.W("numCascades",(e=>e.shadowMap.numCascades))),t.code.add(r.H`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}function f(e){e.fragment.code.add(r.H`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}var g=a(23148);class x extends c.n{constructor(e,t){super(e,"sampler2DShadow",0,((a,o)=>a.bindTexture(e,t(o))))}}u.Y;function b(e,t){t.receiveShadows&&e.include(m),y(e,t)}function w(e,t){t.receiveShadows&&e.include(v),y(e,t)}function y(e,t){e.fragment.uniforms.add(new g.U("lightingGlobalFactor",(e=>e.lighting.globalFactor)));const{receiveShadows:a,spherical:o}=t;e.include(n,t),a&&M(e),e.fragment.code.add(r.H`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${a?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,r.If)(o,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};
    }
  `)}function M(e){e.include(f),e.fragment.uniforms.add(new x("shadowMap",(({shadowMap:e})=>e.depthTexture))).code.add(r.H`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}},48353:(e,t,a)=>{a.d(t,{O:()=>o,b:()=>i});const o=3e5,i=5e5},55696:(e,t,a)=>{a.d(t,{MU:()=>l,O1:()=>c,QM:()=>d,Sx:()=>s,q2:()=>n});var o=a(44680),i=a(86955),r=a(72106);function n(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new r.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??o.zK))).code.add(i.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardColorUV(){}`)}function s(e,t){t.hasNormalTextureTransform&&0!==t.textureCoordinateType?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new r.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??o.zK))).code.add(i.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardNormalUV(){}`)}function l(e,t){t.hasEmissionTextureTransform&&0!==t.textureCoordinateType?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new r.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??o.zK))).code.add(i.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardEmissiveUV(){}`)}function c(e,t){t.hasOcclusionTextureTransform&&0!==t.textureCoordinateType?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new r.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??o.zK))).code.add(i.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardOcclusionUV(){}`)}function d(e,t){t.hasMetallicRoughnessTextureTransform&&0!==t.textureCoordinateType?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new r.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??o.zK))).code.add(i.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardMetallicRoughnessUV(){}`)}},37516:(e,t,a)=>{a.d(t,{S:()=>n});a(19771);var o=a(21390),i=a(86955),r=a(75569);function n(e,t){s(e,t,new o.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function s(e,t,a){const o=e.fragment,n=t.alphaDiscardMode,s=0===n;2!==n&&3!==n||o.uniforms.add(a),o.code.add(i.H`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${1===n?"color.a = 1.0;":`if (color.a < ${s?i.H.float(r.Q):"textureAlphaCutoff"}) {\n              discard;\n             } ${(0,i.If)(2===n,"else { color.a = 1.0; }")}`}
    }
  `)}},77904:(e,t,a)=>{a.d(t,{N:()=>r});var o=a(80883),i=a(86955);function r(e){e.include(o.a),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(1)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(2)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(3)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(2)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(3)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},34260:(e,t,a)=>{a.d(t,{b:()=>i});var o=a(86955);function i(e,t){t.snowCover&&(e.code.add(o.H`float getSnow(vec3 normal, vec3 normalGround) {
return smoothstep(0.5, 0.55, dot(normal, normalGround));
}`),e.code.add(o.H`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}
vec4 snowCoverForEmissions(vec4 emission, float snow) {
return mix(emission, vec4(0.0), snow);
}`))}},42589:(e,t,a)=>{a.d(t,{BH:()=>T,e7:()=>y,h9:()=>z});var o=a(6326),i=a(91967),r=a(18690),n=a(54099),s=a(46053),l=(a(81806),a(76460),a(85842)),c=a(63919),d=a(44680),h=a(34761),u=a(13191),m=a(20664),v=a(9392),p=a(88105),f=a(94966),g=a(48549),x=a(61785),b=a(86994);class w{constructor(e){this.localTransform=e.localTransform,this.globalTransform=e.globalTransform,this.modelOrigin=e.modelOrigin,this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelScaleFactors=e.modelScaleFactors,this.boundingSphere=e.boundingSphere,this.featureAttribute=e.getField("instanceFeatureAttribute",p.Eq),this.color=e.getField("instanceColor",p.XP),this.olidColor=e.getField("instanceOlidColor",p.XP),this.state=e.getField("state",p.SL),this.lodLevel=e.getField("lodLevel",p.SL)}}let y=class extends i.A{constructor(e,t){super(e),this.events=new n.bk,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=function(e){return T(M.clone(),e).u8("state").u8("lodLevel")}(t),this._capacity=z,this._buffer=this._layout.createBuffer(this._capacity),this._view=new w(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const e=this._findSlot();return this._view.state.set(e,1),this._size++,this.events.emit("instances-changed"),e}removeInstance(e){const t=this._view.state;(0,b.vA)(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),this._getStateFlag(e,18)?this._setStateFlags(e,32):this.freeInstance(e),this.events.emit("instances-changed")}freeInstance(e){const t=this._view.state;(0,b.vA)(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),t.set(e,0),this._size--}setLocalTransform(e,t,a=!0){this._view.localTransform.setMat(e,t),a&&this.updateModelTransform(e)}getLocalTransform(e,t){this._view.localTransform.getMat(e,t)}setGlobalTransform(e,t,a=!0){this._view.globalTransform.setMat(e,t),a&&this.updateModelTransform(e)}getGlobalTransform(e,t){this._view.globalTransform.getMat(e,t)}updateModelTransform(e){const t=this._view,a=C,o=S;t.localTransform.getMat(e,_),t.globalTransform.getMat(e,H);const i=(0,h.lw)(H,H,_);(0,m.i)(a,i[12],i[13],i[14]),t.modelOrigin.setVec(e,a),(0,c.z0)(o,i),t.model.setMat(e,o);const r=(0,f.wp)(C,i);r.sort(),t.modelScaleFactors.set(e,0,r[1]),t.modelScaleFactors.set(e,1,r[2]),(0,c.B8)(o,o),(0,c.mg)(o,o),t.modelNormal.setMat(e,o),this._setStateFlags(e,64),this.events.emit("instance-transform-changed",{index:e})}getModelTransform(e,t){const a=this._view;a.model.getMat(e,S),a.modelOrigin.getVec(e,C),t[0]=S[0],t[1]=S[1],t[2]=S[2],t[3]=0,t[4]=S[3],t[5]=S[4],t[6]=S[5],t[7]=0,t[8]=S[6],t[9]=S[7],t[10]=S[8],t[11]=0,t[12]=C[0],t[13]=C[1],t[14]=C[2],t[15]=1}applyShaderTransformation(e,t){null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedModelTransform(e,t){return this.getModelTransform(e,t),null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,e,t),t}getCombinedLocalTransform(e,t){this._view.localTransform.getMat(e,t),null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedMaxScaleFactor(e){let t=this._view.modelScaleFactors.get(e,1);return null!=this.shaderTransformation&&(this.shaderTransformation.scaleFactor(C,this,e),t*=Math.max(C[0],C[1],C[2])),t}getCombinedMedianScaleFactor(e){let t=this._view.modelScaleFactors.get(e,0);return null!=this.shaderTransformation&&(this.shaderTransformation.scaleFactor(C,this,e),t*=function(e,t,a){return Math.max(Math.min(e,t),Math.min(Math.max(e,t),a))}(C[0],C[1],C[2])),t}getModel(e,t){this._view.model.getMat(e,t)}setFeatureAttribute(e,t){this._view.featureAttribute?.setVec(e,t)}getFeatureAttribute(e,t){this._view.featureAttribute?.getVec(e,t)}setColor(e,t){this._view.color?.setVec(e,t)}setObjectAndLayerIdColor(e,t){this._view.olidColor?.setVec(e,t)}setVisible(e,t){t!==this.getVisible(e)&&(this._setStateFlag(e,4,t),this.events.emit("instance-visibility-changed",{index:e}))}getVisible(e){return this._getStateFlag(e,4)}setHighlight(e,t){const{_highlightOptionsMap:a}=this,o=a.get(e);t?t!==o&&(a.set(e,t),this._setStateFlag(e,8,!0),this.events.emit("instance-highlight-changed")):o&&(a.delete(e),this._setStateFlag(e,8,!1),this.events.emit("instance-highlight-changed"))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(e){return this._getStateFlag(e,8)}geHighlightOptionsPrev(e){const t=this._highlightOptionsMapPrev.get(e)??null;return this._highlightOptionsMapPrev.delete(e),t}getHighlightName(e){const t=this.highlightOptionsMap.get(e)??null;return t?this._highlightOptionsMapPrev.set(e,t):this._highlightOptionsMapPrev.delete(e),t}getState(e){return this._view.state.get(e)}getLodLevel(e){return this._view.lodLevel.get(e)}countFlags(e){let t=0;for(let a=0;a<this._capacity;++a)this.getState(a)&e&&++t;return t}_setStateFlags(e,t){const a=this._view.state;t=a.get(e)|t,a.set(e,t)}_clearStateFlags(e,t){const a=this._view.state;t=a.get(e)&~t,a.set(e,t)}_setStateFlag(e,t,a){a?this._setStateFlags(e,t):this._clearStateFlags(e,t)}_getStateFlag(e,t){return!!(this._view.state.get(e)&t)}_grow(){this._capacity=Math.max(z,Math.floor(this._capacity*r.Ji)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new w(this._buffer)}_findSlot(){const e=this._view.state;let t=this._next;for(;1&e.get(t);)t=t+1===this._capacity?0:t+1;return this._next=t+1===this._capacity?0:t+1,t}};(0,o.Cg)([(0,s.MZ)({constructOnly:!0})],y.prototype,"shaderTransformation",void 0),(0,o.Cg)([(0,s.MZ)()],y.prototype,"_size",void 0),(0,o.Cg)([(0,s.MZ)({readOnly:!0})],y.prototype,"size",null),y=(0,o.Cg)([(0,l.$)("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],y);const M=(0,g.BP)().mat4f64("localTransform").mat4f64("globalTransform").vec4f64("boundingSphere").vec3f64("modelOrigin").mat3f("instanceModel").mat3f("instanceModelNormal").vec2f("modelScaleFactors");function T(e,t){return t.instancedFeatureAttribute&&e.vec4f("instanceFeatureAttribute"),t.instancedColor&&e.vec4u8("instanceColor"),(0,x.E)()&&e.vec4u8("instanceOlidColor"),e}const C=(0,v.vt)(),S=(0,d.vt)(),_=(0,u.vt)(),H=(0,u.vt)(),z=64},53760:(e,t,a)=>{a.d(t,{Ui:()=>h,Qm:()=>m});var o=a(18690),i=a(88105),r=a(48549),n=a(86994),s=a(76718);class l{constructor(e,t,a){this._elementSize=t,this._buffer=s.g.createVertex(e,35044),this.resize(a)}destroy(){this._buffer.dispose()}get elementSize(){return this._elementSize}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,t,a,o=0){const i=new Uint8Array(this.array,e*this.elementSize,(t-e)*this.elementSize);new Uint8Array(a.array,o*this.elementSize).set(i)}transferAll(){this._buffer.setData(this._array)}transferRange(e,t){const a=e*this._elementSize,o=t*this._elementSize;this._buffer.setSubData(new Uint8Array(this._array),a,a,o)}resize(e){const t=e*this._elementSize,a=new ArrayBuffer(t);this._array&&(e>=this._capacity?new Uint8Array(a).set(new Uint8Array(this._array)):new Uint8Array(a).set(new Uint8Array(this._array).subarray(0,e*this._elementSize))),this._array=a,this._buffer.setSize(t),this._capacity=e}}var c=a(42589);class d{constructor(e){this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelOriginHi=e.instanceModelOriginHi,this.modelOriginLo=e.instanceModelOriginLo,this.featureAttribute=e.getField("instanceFeatureAttribute",i.Eq),this.color=e.getField("instanceColor",i.XP),this.olidColor=e.getField("instanceOlidColor",i.XP)}}class h{constructor(e,t){this._rctx=e,this._layout=t,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){const e=this._headIndex,t=this._tailIndex;return e>=t?e-t:e+this._capacity-t}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){return this._buffer?.usedMemory??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){(0,n.vA)(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){(0,n.vA)(this._updating,"not updating"),this.size<o.$U*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){(0,n.vA)(this._updating,"not updating"),this.isFull&&this._grow();const e=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=e,this._captureFirstIndex=!1),this._incrementHead(),(0,n.vA)(this._headIndex!==this._tailIndex,"invalid pointers"),e}freeTail(){(0,n.vA)(this._updating,"not updating"),(0,n.vA)(this.size>0,"invalid size");const e=this._tailIndex===this._firstIndex;this._incrementTail(),e&&(this._firstIndex=this._tailIndex)}_grow(){const e=Math.max(c.h9,Math.floor(this._capacity*o.Ji));this._resize(e)}_shrink(){const e=Math.max(c.h9,Math.floor(this._capacity*o.He));this._resize(e)}_resize(e){if((0,n.vA)(this._updating,"not updating"),e===this._capacity)return;const t=new l(this._rctx,this._layout.stride,e);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const e=this.size,a=this._compactInstances(t);(0,n.vA)(a===e,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=a,this._prevHeadIndex=0}this._resized=!0,this._capacity=e,this._buffer=t,this._view=new d(this._layout.createView(this._buffer.array))}_compactInstances(e){const t=this._headIndex,a=this._tailIndex;return a<t?(this._buffer.copyRange(a,t,e),t-a):a>t?(this._buffer.copyRange(a,this._capacity,e),t>0&&this._buffer.copyRange(0,t,e,this._capacity-a),t+(this._capacity-a)):0}_incrementHead(e=1){this._headIndex=(this._headIndex+e)%this._capacity}_incrementTail(e=1){this._tailIndex=(this._tailIndex+e)%this._capacity}_transferRange(e,t){e<t?this._buffer.transferRange(e,t):e>t&&(t>0&&this._buffer.transferRange(0,t),this._buffer.transferRange(e,this._capacity))}}const u=(0,r.BP)().vec3f("instanceModelOriginHi").vec3f("instanceModelOriginLo").mat3f("instanceModel").mat3f("instanceModelNormal");function m(e){return(0,c.BH)(u.clone(),e)}},65131:(e,t,a)=>{a.d(t,{$U:()=>M,fs:()=>C,ty:()=>S});var o=a(20664),i=a(9392),r=a(34981),n=a(75803),s=a(45463),l=a(60322),c=a(48168),d=a(97974),h=a(82809),u=a(99362),m=a(59648),v=a(6326),p=a(6485),f=a(92656);class g extends f.E{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.pbrMode=0,this.cullFace=0,this.normalType=0,this.customDepthTest=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instanced=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasBloom=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasTextures?1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||3===this.emissionSource||this.hasOcclusionTexture}get hasVVInstancing(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,v.Cg)([(0,p.W)({count:4})],g.prototype,"alphaDiscardMode",void 0),(0,v.Cg)([(0,p.W)({count:3})],g.prototype,"doubleSidedMode",void 0),(0,v.Cg)([(0,p.W)({count:7})],g.prototype,"pbrMode",void 0),(0,v.Cg)([(0,p.W)({count:3})],g.prototype,"cullFace",void 0),(0,v.Cg)([(0,p.W)({count:3})],g.prototype,"normalType",void 0),(0,v.Cg)([(0,p.W)({count:2})],g.prototype,"customDepthTest",void 0),(0,v.Cg)([(0,p.W)({count:4})],g.prototype,"emissionSource",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasVertexColors",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasSymbolColors",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasVerticalOffset",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasColorTexture",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasMetallicRoughnessTexture",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasOcclusionTexture",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasNormalTexture",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasScreenSizePerspective",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasVertexTangents",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasOccludees",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"instanced",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"instancedDoublePrecision",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasModelTransformation",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"offsetBackfaces",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasVVSize",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasVVColor",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"receiveShadows",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"receiveAmbientOcclusion",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"textureAlphaPremultiplied",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"instancedFeatureAttribute",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"instancedColor",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"writeDepth",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"transparent",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"enableOffset",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"terrainDepthTest",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"cullAboveTerrain",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"snowCover",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasBloom",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasColorTextureTransform",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasEmissionTextureTransform",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasNormalTextureTransform",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasOcclusionTextureTransform",void 0),(0,v.Cg)([(0,p.W)()],g.prototype,"hasMetallicRoughnessTextureTransform",void 0);var x=a(16506),b=a(35249);class w extends m.R5{constructor(e,t){super(e,t,new x.$(b.R,(()=>a.e(77919).then(a.bind(a,77919)))))}}var y=a(75569);class M extends s.i{constructor(e,t){super(e,C),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[2,e=>((0,r.iq)(e)||(0,r.PJ)(e))&&!this.transparent],[4,e=>((0,r.iq)(e)||(0,r.PJ)(e))&&this.transparent&&this.parameters.writeDepth],[7,e=>((0,r.XY)(e)||(0,r.PJ)(e))&&this.transparent&&!this.parameters.writeDepth]]),this._layout=(0,m.bP)(this.parameters),this._configuration=new g(t.spherical)}isVisibleForOutput(e){return 4!==e&&6!==e&&5!==e||this.parameters.castShadows}get visible(){const{layerOpacity:e,colorMixMode:t,opacity:a,externalColor:o}=this.parameters;return e*("replace"===t?1:a)*("ignore"===t||isNaN(o[3])?1:o[3])>=y.Q}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!(0,o.q)(this.parameters.emissiveBaseColor,i.uY)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(0===this.parameters.emissiveSource&&this._hasEmissiveBase||1===this.parameters.emissiveSource)}getConfiguration(e,t){const{parameters:a,_configuration:o}=this,{treeRendering:i,doubleSided:n,doubleSidedType:s}=a;return super.getConfiguration(e,t,this._configuration),o.hasNormalTexture=a.hasNormalTexture,o.hasColorTexture=a.hasColorTexture,o.hasMetallicRoughnessTexture=a.hasMetallicRoughnessTexture,o.hasOcclusionTexture=a.hasOcclusionTexture,o.hasVertexTangents=!i&&a.hasVertexTangents,o.instanced=a.instanced,o.instancedDoublePrecision=a.instancedDoublePrecision,o.hasVVColor=!!a.vvColor,o.hasVVSize=!!a.vvSize,o.hasVerticalOffset=null!=a.verticalOffset,o.hasScreenSizePerspective=null!=a.screenSizePerspective,o.hasSlicePlane=a.hasSlicePlane,o.alphaDiscardMode=a.textureAlphaMode,o.normalType=i?0:a.normalType,o.transparent=this.transparent,o.writeDepth=a.writeDepth,o.customDepthTest=a.customDepthTest??0,o.hasOccludees=t.hasOccludees,o.cullFace=a.hasSlicePlane?0:a.cullFace,o.cullAboveTerrain=t.cullAboveTerrain,o.hasModelTransformation=!i&&null!=a.modelTransformation,o.hasVertexColors=a.hasVertexColors,o.hasSymbolColors=a.hasSymbolColors,o.doubleSidedMode=i?2:n&&"normal"===s?1:n&&"winding-order"===s?2:0,o.instancedFeatureAttribute=a.instancedFeatureAttribute,o.instancedColor=a.instancedColor,(0,r.RN)(e)?(o.terrainDepthTest=t.terrainDepthTest,o.receiveShadows=a.receiveShadows,o.receiveAmbientOcclusion=a.receiveAmbientOcclusion&&null!=t.ssao):(o.terrainDepthTest=!1,o.receiveShadows=o.receiveAmbientOcclusion=!1),o.textureAlphaPremultiplied=!!a.textureAlphaPremultiplied,o.pbrMode=a.usePBR?a.isSchematic?2:1:0,o.emissionSource=a.emissionSource,o.offsetBackfaces=!(!this.transparent||!a.offsetTransparentBackfaces),o.oitPass=t.oitPass,o.enableOffset=t.camera.relativeElevation<l.xt,o.snowCover=t.snowCover,o.hasBloom=(0,r.LG)(e),o.hasColorTextureTransform=!!a.colorTextureTransformMatrix,o.hasNormalTextureTransform=!!a.normalTextureTransformMatrix,o.hasEmissionTextureTransform=!!a.emissiveTextureTransformMatrix,o.hasOcclusionTextureTransform=!!a.occlusionTextureTransformMatrix,o.hasMetallicRoughnessTextureTransform=!!a.metallicRoughnessTextureTransformMatrix,o}intersect(e,t,a,i,r,n){if(null!=this.parameters.verticalOffset){const e=a.camera;(0,o.i)(O,t[12],t[13],t[14]);let n=null;switch(a.viewingMode){case 1:n=(0,o.n)(I,O);break;case 2:n=(0,o.c)(I,z)}let s=0;const l=(0,o.d)(F,O,e.eye),c=(0,o.l)(l),d=(0,o.g)(l,l,1/c);let h=null;this.parameters.screenSizePerspective&&(h=(0,o.e)(n,d)),s+=(0,u.kE)(e,c,this.parameters.verticalOffset,h??0,this.parameters.screenSizePerspective),(0,o.g)(n,n,s),(0,o.o)(N,n,a.transform.inverseRotation),i=(0,o.d)(_,i,N),r=(0,o.d)(H,r,N)}(0,c.Uy)(e,a,i,r,(0,d.ou)(a.verticalOffset),n)}createGLMaterial(e){return new T(e)}createBufferWriter(){return new h.Z(this._layout)}get transparent(){return S(this.parameters)}}class T extends n.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const a=e.camera.viewInverseTransposeMatrix;return(0,o.i)(t.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?w:m.R5,e)}}class C extends m.uD{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}get hasNormalTexture(){return!this.treeRendering&&!!this.normalTextureId}get hasColorTexture(){return!!this.textureId}get hasMetallicRoughnessTexture(){return!this.treeRendering&&!!this.metallicRoughnessTextureId}get hasOcclusionTexture(){return!this.treeRendering&&!!this.occlusionTextureId}get emissionSource(){return this.treeRendering?0:null!=this.emissiveTextureId&&0===this.emissiveSource?3:this.usePBR?0===this.emissiveSource?2:1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||3===this.emissionSource||this.hasOcclusionTexture}}function S(e){const{drivenOpacity:t,opacity:a,externalColor:o,layerOpacity:i,texture:r,textureId:n,textureAlphaMode:s,colorMixMode:l}=e,c=o[3];return t||a<1&&"replace"!==l||c<1&&"ignore"!==l||i<1||(null!=r||null!=n)&&1!==s&&2!==s&&"replace"!==l}const _=(0,i.vt)(),H=(0,i.vt)(),z=(0,i.fA)(0,0,1),I=(0,i.vt)(),N=(0,i.vt)(),O=(0,i.vt)(),F=(0,i.vt)()},78992:(e,t,a)=>{a.d(t,{Bt:()=>s,Jr:()=>r,SY:()=>l,mb:()=>n});var o=a(20664),i=a(9392);function r({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:a,roughnessFactor:r,emissiveTexture:n,emissiveFactor:s,occlusionTexture:l}){return null==e&&null==t&&null==n&&(null==s||(0,o.q)(s,i.uY))&&null==l&&(null==r||1===r)&&(null==a||1===a)}const n=(0,i.CN)(1,1,.5),s=(0,i.CN)(0,.6,.2),l=(0,i.CN)(0,1,.2)},59648:(e,t,a)=>{a.d(t,{R5:()=>M,V:()=>y,bP:()=>S,uD:()=>w});var o=a(9392),i=a(55855),r=a(57481),n=a(48549),s=a(34981),l=a(55386),c=a(16506),d=a(59246),h=a(61785),u=a(60322),m=a(96643),v=a(53760),p=a(78992),f=a(68745),g=a(57162),x=a(75757),b=a(75569);class w extends l.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=p.mb,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=2,this.instanced=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrength=0,this.emissiveSource=1,this.emissiveBaseColor=o.uY,this.instancedDoublePrecision=!1,this.normalType=0,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,o.CN)(.2,.2,.2),this.diffuse=(0,o.CN)(.8,.8,.8),this.externalColor=(0,i.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,o.vt)(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=0,this.textureAlphaMode=0,this.textureAlphaCutoff=b.Q,this.textureAlphaPremultiplied=!1,this.renderOccluded=1,this.isDecoration=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class y extends l.gy{constructor(){super(...arguments),this.origin=(0,o.vt)(),this.slicePlaneLocalOrigin=this.origin}}class M extends d.w{constructor(e,t,o=new c.$(f.D,(()=>a.e(23727).then(a.bind(a,23727))))){const i=[(0,r.U)(S(t))];t.instanced&&t.instancedDoublePrecision&&i.push((0,r.U)((0,v.Qm)(t))),super(e,t,o,(0,x._u)(i))}_makePipeline(e,t){const{oitPass:a,output:o,transparent:i,cullFace:r,customDepthTest:n,hasOccludees:l}=e;return(0,g.Ey)({blending:(0,s.RN)(o)&&i?(0,u.Yf)(a):null,culling:C(e)?(0,g.Xt)(r):null,depthTest:{func:(0,u.K_)(a,T(n))},depthWrite:(0,u.z5)(e),drawBuffers:(0,d.L)(o,(0,u.m6)(a,o)),colorWrite:g.kn,stencilWrite:l?m.v0:null,stencilTest:l?t?m.a9:m.qh:null,polygonOffset:(0,u.mE)(e)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function T(e){return 1===e?515:513}function C(e){return 0!==e.cullFace||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}function S(e){const t=(0,n.BP)().vec3f("position");return 1===e.normalType?t.vec2i16("normalCompressed",{glNormalized:!0}):t.vec3f("normal"),e.hasVertexTangents&&t.vec4f("tangent"),e.hasTextures&&t.vec2f16("uv0"),e.hasVertexColors&&t.vec4u8("color"),e.hasSymbolColors&&t.vec4u8("symbolColor"),!e.instanced&&(0,h.E)()&&t.vec4u8("olidColor"),t}},61337:(e,t,a)=>{a.d(t,{b:()=>i});var o=a(86955);function i(e){e.code.add(o.H`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}}}]);
//# sourceMappingURL=65131.4fe66d68.chunk.js.map