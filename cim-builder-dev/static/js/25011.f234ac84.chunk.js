"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[25011],{19061:(e,t,i)=>{i.d(t,{H:()=>R,b:()=>H,c:()=>T,f:()=>E});var o=i(19555),r=i(72745),s=i(55855),a=i(14556),n=i(26917),l=i(90080),c=i(98720),d=i(40318),u=i(38280),f=i(62374),p=i(87236),h=i(66763),g=i(80883),v=i(81449),m=i(69817),x=i(42451),b=i(95756),C=i(51596),S=i(20123),z=i(58350),P=i(23148),y=i(21390),A=i(86955),O=i(4653),w=i(70367),F=i(2687),D=i(75569);function H(e){const t=new F.N5,{signedDistanceFieldEnabled:i,occlusionTestEnabled:r,horizonCullingEnabled:H,pixelSnappingEnabled:E,hasScreenSizePerspective:R,debugDrawLabelBorder:I,hasVVSize:$,hasVVColor:M,hasRotation:B,occludedFragmentFade:W,sampleSignedDistanceFieldTexelCenter:U}=e;t.include(d.Q,e),t.vertex.include(n.rA,e);const{occlusionPass:q,output:L,oitPass:N}=e;if(q)return t.include(u.I,e),t;const{vertex:k,fragment:G}=t;t.include(m.Y6),t.include(h.A,e),t.include(l.g,e),r&&t.include(f.y),G.include(v.W),G.include(g.a),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2");const Q=8===L,Y=Q&&r;Y&&t.varyings.add("voccluded","float"),k.uniforms.add(new C.I("viewport",(e=>e.camera.fullViewport)),new b.G("screenOffset",((e,t)=>(0,o.hZ)(V,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio))),new b.G("anchorPosition",(e=>T(e))),new z.E("materialColor",(e=>e.color)),new y.m("materialRotation",(e=>e.rotation)),new w.N("tex",(e=>e.texture))),(0,x.Nz)(k),i&&(k.uniforms.add(new z.E("outlineColor",(e=>e.outlineColor))),G.uniforms.add(new z.E("outlineColor",(e=>_(e)?e.outlineColor:s.uY)),new y.m("outlineSize",(e=>_(e)?e.outlineSize:0)))),H&&k.uniforms.add(new S.V("pointDistanceSphere",((e,t)=>{const i=t.camera.eye,o=e.origin;return(0,s.fA)(o[0]-i[0],o[1]-i[1],o[2]-i[2],a.$O.radius)}))),E&&k.include(c.K),R&&((0,m.pM)(k),(0,m.OH)(k)),I&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add("uvi","vec2"),t.attributes.add("color","vec4"),t.attributes.add("size","vec2"),t.attributes.add("rotation","float"),($||M)&&t.attributes.add("featureAttribute","vec4"),k.code.add(H?A.H`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:A.H`bool behindHorizon(vec3 posModel) { return false; }`),k.main.add(A.H`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${(0,A.If)(R,A.H`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,A.H`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${(0,A.If)($,A.H`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${(0,A.If)(r,A.H`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${(0,A.If)(I,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${(0,A.If)(Y,A.H`voccluded = visible ? 0.0 : 1.0;`)}
  `);const X=A.H`
      vec2 uvi1 = vec2(uvi.x < 0.0 ? 1.0 : 0.0, uvi.y < 0.0 ? 1.0 : 0.0);
      vec2 uv = abs(uvi + uvi1);
      vec2 texSize = vec2(textureSize(tex, 0));
      uv.x = uv.x >= ${j} ? 1.0 : uv.x / texSize.x;
      uv.y = uv.y >= ${j} ? 1.0 : uv.y / texSize.y;
      quadOffset.xy = (uvi1 - anchorPosition) * 2.0 * combinedSize;

      ${(0,A.If)(B,A.H`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,Z=E?i?A.H`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:A.H`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:A.H`posProj += quadOffset;`;k.main.add(A.H`
    ${X}
    ${M?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${(0,A.If)(9===L,A.H`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${A.H.float(D.Q)};
    ${(0,A.If)(i,`alphaDiscard = alphaDiscard && outlineColor.a < ${A.H.float(D.Q)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${Z}
      gl_Position = posProj;
    }

    vtc = uv;

    ${(0,A.If)(I,A.H`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),G.uniforms.add(new w.N("tex",(e=>e.texture))),W&&!Q&&G.uniforms.add(new O.x("depthMap",(e=>e.mainDepth)),new P.U("occludedOpacity",(e=>e.hudOccludedFragmentOpacity)));const J=I?A.H`(isBorder > 0.0 ? 0.0 : ${A.H.float(D.Q)})`:A.H.float(D.Q),K=A.H`
    ${(0,A.If)(I,A.H`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${(0,A.If)(U,A.H`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${i?A.H`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgbaTofloat(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${J} ||
          fillPixelColor.a + outlinePixelColor.a < ${A.H.float(D.Q)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${(0,A.If)(!Q,A.H`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${J}) {
          discard;
        }

        ${(0,A.If)(!Q,A.H`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:A.H`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${J}) {
            discard;
          }
          ${(0,A.If)(!Q,A.H`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${(0,A.If)(W&&!Q,A.H`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${(0,A.If)(!Q&&I,A.H`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(L){case 0:case 1:t.outputs.add("fragColor","vec4",0),1===L&&t.outputs.add("fragEmission","vec4",1),1===N&&t.outputs.add("fragAlpha","float",1===L?2:1),G.main.add(A.H`
        ${K}
        ${(0,A.If)(2===N,A.H`fragColor.rgb /= fragColor.a;`)}
        ${(0,A.If)(1===L,A.H`fragEmission = vec4(0.0);`)}
        ${(0,A.If)(1===N,A.H`fragAlpha = fragColor.a;`)}`);break;case 9:G.main.add(A.H`
        ${K}
        outputObjectAndLayerIdColor();`);break;case 8:t.include(p.Q,e),G.main.add(A.H`
        ${K}
        outputHighlight(${(0,A.If)(Y,A.H`voccluded == 1.0`,A.H`false`)});`)}return t}function _(e){return e.outlineColor[3]>0&&e.outlineSize>0}function T(e){return e.textureIsSignedDistanceField?(t=e.anchorPosition,i=e.distanceFieldBoundingBox,r=V,(0,o.hZ)(r,t[0]*(i[2]-i[0])+i[0],t[1]*(i[3]-i[1])+i[1])):(0,o.C)(V,e.anchorPosition),V;var t,i,r}const V=(0,r.vt)(),E=32e3,j=A.H.float(E),R=Object.freeze(Object.defineProperty({__proto__:null,build:H,calculateAnchorPosition:T,fullUV:E},Symbol.toStringTag,{value:"Module"}))},60216:(e,t,i)=>{i.d(t,{E:()=>s});var o=i(9392),r=(i(9956),i(14487));function s(e,t,i){return!!(0,r.F)(e,t,a,i.spatialReference)&&(i.x=a[0],i.y=a[1],i.z=a[2],!0)}const a=(0,o.vt)()},38280:(e,t,i)=>{i.d(t,{I:()=>a});var o=i(98720),r=i(94192),s=i(86955);function a(e,t){const{vertex:i,fragment:a}=e;e.include(r.Z,t),i.include(o.K),i.main.add(s.H`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),a.main.add(s.H`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}},20123:(e,t,i)=>{i.d(t,{V:()=>r});var o=i(87003);class r extends o.n{constructor(e,t,i){super(e,"vec4",2,((o,r,s)=>o.setUniform4fv(e,t(r,s),i)))}}},12536:(e,t,i)=>{i.d(t,{R:()=>L});var o=i(15941),r=i(63919),s=i(44680),a=i(34761),n=i(13191),l=i(19555),c=i(72745),d=i(20664),u=i(9392),f=i(55855);function p(e){return function(e){return e instanceof Float32Array&&e.length>=16}(e)||function(e){return Array.isArray(e)&&e.length>=16}(e)}var h=i(2413),g=i(88105),v=i(63048),m=i(22955),x=i(34981),b=i(40318),C=i(61785),S=i(75803),z=i(45463),P=i(12028),y=i(86994);class A{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}var O=i(52757),w=i(99362),F=i(19061),D=i(48549),H=i(16506),_=i(59246),T=i(60322),V=i(93345),E=i(57162);class j extends _.w{constructor(e,t){super(e,t,new H.$(F.H,(()=>i.e(60271).then(i.bind(i,60271)))),((0,C.E)()?$:I).locations),this.primitiveType=t.occlusionPass?V.WR.POINTS:V.WR.TRIANGLES}initializePipeline(e){const{oitPass:t,hasPolygonOffset:i,draped:o,output:r,depthTestEnabled:s,occlusionPass:a}=e,n=0===t,l=s&&!o&&!(1===t)&&!a&&!(8===r);return(0,E.Ey)({blending:(0,x.RN)(r)?n?E.RC:(0,T.ez)(t):null,depthTest:s&&!o?{func:515}:null,depthWrite:l?E.Uy:null,drawBuffers:(0,T.m6)(t,r),colorWrite:E.kn,polygonOffset:i?R:null})}}const R={factor:0,units:-4},I=(0,D.BP)().vec3f("position").vec3f("normal").vec2i16("uvi").vec4u8("color").vec2f("size").f32("rotation").vec4f("centerOffsetAndDistance").vec4f("featureAttribute"),$=I.clone().vec4u8("olidColor");var M=i(6326),B=i(6485),W=i(92656);class U extends W.E{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1}}(0,M.Cg)([(0,B.W)()],U.prototype,"screenCenterOffsetUnitsEnabled",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"occlusionTestEnabled",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"signedDistanceFieldEnabled",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"hasVVSize",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"hasVVColor",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"hasVerticalOffset",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"hasScreenSizePerspective",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"hasRotation",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"debugDrawLabelBorder",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"hasPolygonOffset",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"depthTestEnabled",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"pixelSnappingEnabled",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"draped",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"terrainDepthTest",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"cullAboveTerrain",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"occlusionPass",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"occludedFragmentFade",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"horizonCullingEnabled",void 0),(0,M.Cg)([(0,B.W)()],U.prototype,"isFocused",void 0);var q=i(75569);class L extends z.i{constructor(e,t){super(e,he),this.produces=new Map([[12,e=>(0,x.Mb)(e)&&!this.parameters.drawAsLabel],[13,e=>(0,x.Mb)(e)&&this.parameters.drawAsLabel],[11,()=>this.parameters.occlusionTest],[17,e=>this.parameters.draped&&(0,x.Mb)(e)]]),this._visible=!0,this._configuration=new U(t)}getConfiguration(e,t){const i=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=i,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=11===t.slot,this._configuration.occludedFragmentFade=!i&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||11===t.slot,(0,x.RN)(e)&&(this._configuration.debugDrawLabelBorder=!!m.b.LABELS_SHOW_BORDER),this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}intersect(e,t,i,o,s,n){const{options:{selectionMode:l,hud:c,excludeLabels:p},point:h,camera:g}=i,{parameters:v}=this;if(!l||!c||p&&v.isLabel||!e.visible||!h||!g)return;const m=e.attributes.get("featureAttribute"),x=null==m?null:(0,f.ci)(m.data,le),{scaleX:b,scaleY:C}=ve(x,v,g.pixelRatio);(0,r.z0)(ie,t),e.attributes.has("featureAttribute")&&function(e){const t=e[0],i=e[1],o=e[2],r=e[3],s=e[4],a=e[5],n=e[6],l=e[7],c=e[8],d=1/Math.sqrt(t*t+i*i+o*o),u=1/Math.sqrt(r*r+s*s+a*a),f=1/Math.sqrt(n*n+l*l+c*c);e[0]=t*d,e[1]=i*d,e[2]=o*d,e[3]=r*u,e[4]=s*u,e[5]=a*u,e[6]=n*f,e[7]=l*f,e[8]=c*f}(ie);const S=e.attributes.get("position"),z=e.attributes.get("size"),A=e.attributes.get("normal"),O=e.attributes.get("rotation"),w=e.attributes.get("centerOffsetAndDistance");(0,y.vA)(S.size>=3);const D=(0,F.c)(v),H="screen"===this.parameters.centerOffsetUnits;for(let r=0;r<S.data.length/S.size;r++){const e=r*S.size;(0,d.i)(Y,S.data[e],S.data[e+1],S.data[e+2]),(0,d.t)(Y,Y,t),(0,d.t)(Y,Y,g.viewMatrix);const o=r*w.size;if((0,d.i)(ae,w.data[o],w.data[o+1],w.data[o+2]),!H&&(Y[0]+=ae[0],Y[1]+=ae[1],0!==ae[2])){const e=ae[2];(0,d.n)(ae,Y),(0,d.d)(Y,Y,(0,d.g)(ae,ae,e))}const s=r*A.size;if((0,d.i)(X,A.data[s],A.data[s+1],A.data[s+2]),k(X,ie,g,ce),me(this.parameters,Y,ce,g,Q),g.applyProjection(Y,Z),Z[0]>-1){H&&(ae[0]||ae[1])&&(Z[0]+=ae[0]*g.pixelRatio,0!==ae[1]&&(Z[1]+=(0,P.m0)(ae[1],Q.factorAlignment)*g.pixelRatio),g.unapplyProjection(Z,Y)),Z[0]+=this.parameters.screenOffset[0]*g.pixelRatio,Z[1]+=this.parameters.screenOffset[1]*g.pixelRatio,Z[0]=Math.floor(Z[0]),Z[1]=Math.floor(Z[1]);const e=r*z.size;fe[0]=z.data[e],fe[1]=z.data[e+1],(0,P.MD)(fe,Q.factor,fe);const t=de*g.pixelRatio;let o=0;v.textureIsSignedDistanceField&&(o=Math.min(v.outlineSize,.5*fe[0])*g.pixelRatio/2),fe[0]*=b,fe[1]*=C;const s=r*O.size,l=v.rotation+O.data[s];if(G(h,Z[0],Z[1],fe,t,o,l,v,D)){const e=i.ray;if((0,d.t)(K,Y,(0,a.B8)(re,g.viewMatrix)),Z[0]=h[0],Z[1]=h[1],g.unprojectFromRenderScreen(Z,Y)){const t=(0,u.vt)();(0,d.c)(t,e.direction);const i=1/(0,d.l)(t);(0,d.g)(t,t,i),n((0,d.j)(e.origin,Y)*i,t,-1,K)}}}}}intersectDraped(e,t,i,o,r){const s=e.attributes.get("position"),a=e.attributes.get("size"),n=e.attributes.get("rotation"),l=this.parameters,c=(0,F.c)(l),d=e.attributes.get("featureAttribute"),u=null==d?null:(0,f.ci)(d.data,le),{scaleX:p,scaleY:h}=ve(u,l,e.screenToWorldRatio),g=ue*e.screenToWorldRatio;for(let f=0;f<s.data.length/s.size;f++){const t=f*s.size,d=s.data[t],u=s.data[t+1],v=f*a.size;fe[0]=a.data[v],fe[1]=a.data[v+1];let m=0;l.textureIsSignedDistanceField&&(m=Math.min(l.outlineSize,.5*fe[0])*e.screenToWorldRatio/2),fe[0]*=p,fe[1]*=h;const x=f*n.size,b=l.rotation+n.data[x];G(i,d,u,fe,g,m,b,l,c)&&o(r.distance,r.normal,-1)}}createBufferWriter(){return new ge}applyShaderOffsetsView(e,t,i,o,r,s,a){const n=k(t,i,r,ce);return this._applyVerticalGroundOffsetView(e,n,r,a),me(this.parameters,a,n,r,s),this._applyPolygonOffsetView(a,n,o[3],r,a),this._applyCenterOffsetView(a,o,a),a}applyShaderOffsetsNDC(e,t,i,o,r){return this._applyCenterOffsetNDC(e,t,i,o),null!=r&&(0,d.c)(r,o),this._applyPolygonOffsetNDC(o,t,i,o),o}_applyPolygonOffsetView(e,t,i,r,s){const a=r.aboveGround?1:-1;let n=Math.sign(i);0===n&&(n=a);const l=a*n;if(this.parameters.shaderPolygonOffset<=0)return(0,d.c)(s,e);const c=(0,o.qE)(Math.abs(t.cosAngle),.01,1),u=1-Math.sqrt(1-c*c)/c/r.viewport[2];return(0,d.g)(s,e,l>0?u:1/u),s}_applyVerticalGroundOffsetView(e,t,i,o){const r=(0,d.l)(e),s=i.aboveGround?1:-1,a=i.computeRenderPixelSizeAtDist(r)*b.R,n=(0,d.g)(Y,t.normal,s*a);return(0,d.f)(o,e,n),o}_applyCenterOffsetView(e,t,i){const o="screen"!==this.parameters.centerOffsetUnits;return i!==e&&(0,d.c)(i,e),o&&(i[0]+=t[0],i[1]+=t[1],t[2]&&((0,d.n)(X,i),(0,d.a)(i,i,(0,d.g)(X,X,t[2])))),i}_applyCenterOffsetNDC(e,t,i,o){const r="screen"!==this.parameters.centerOffsetUnits;return o!==e&&(0,d.c)(o,e),r||(o[0]+=t[0]/i.fullWidth*2,o[1]+=t[1]/i.fullHeight*2),o}_applyPolygonOffsetNDC(e,t,i,o){const r=this.parameters.shaderPolygonOffset;if(e!==o&&(0,d.c)(o,e),r){const e=i.aboveGround?1:-1,s=e*Math.sign(t[3]);o[2]-=(s||e)*r}return o}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:i}=this.parameters,o=e[3]>=q.Q||t>=q.Q&&i[3]>=q.Q;return this._visible&&o}createGLMaterial(e){return new N(e)}calculateRelativeScreenBounds(e,t,i=(0,h.vt)()){return function(e,t,i,o){o[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*i,o[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*i}(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class N extends S.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(j,e)}}function k(e,t,i,o){return p(t)&&(t=(0,r.z0)(oe,t)),(0,d.o)(o.normal,e,t),(0,d.t)(o.normal,o.normal,i.viewInverseTransposeMatrix),o.cosAngle=(0,d.e)(J,pe),o}function G(e,t,i,r,s,a,n,c,d){let u=t-s-r[0]*d[0],f=u+r[0]+2*s,p=i-s-r[1]*d[1],h=p+r[1]+2*s;const g=c.distanceFieldBoundingBox;return c.textureIsSignedDistanceField&&null!=g&&(u+=r[0]*g[0],p+=r[1]*g[1],f-=r[0]*(1-g[2]),h-=r[1]*(1-g[3]),u-=a,f+=a,p-=a,h+=a),(0,l.hZ)(te,t,i),(0,l.e$)(ee,e,te,(0,o.kU)(n)),ee[0]>u&&ee[0]<f&&ee[1]>p&&ee[1]<h}const Q=new class{constructor(){this.factor=new A,this.factorAlignment=new A}},Y=(0,u.vt)(),X=(0,u.vt)(),Z=(0,f.vt)(),J=(0,u.vt)(),K=(0,u.vt)(),ee=(0,c.vt)(),te=(0,c.vt)(),ie=(0,s.vt)(),oe=(0,s.vt)(),re=(0,n.vt)(),se=(0,f.vt)(),ae=(0,u.vt)(),ne=(0,u.vt)(),le=(0,f.vt)(),ce={normal:J,cosAngle:0},de=1,ue=2,fe=(0,c.fA)(0,0),pe=(0,u.fA)(0,0,1);class he extends S.NV{constructor(){super(...arguments),this.renderOccluded=1,this.isDecoration=!1,this.color=(0,f.CN)(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=(0,c.fA)(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=(0,f.CN)(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=(0,f.vt)(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class ge{constructor(){this.layout=(0,C.E)()?$:I}elementCount(e){return 6*e.get("position").indices.length}write(e,t,i,o,r,s){const{position:a,normal:n,uvi:l,color:c,size:d,rotation:u,centerOffsetAndDistance:f,featureAttribute:p}=r;(0,O.Hk)(i.get("position"),e,a,s,6),(0,O.p1)(i.get("normal"),t,n,s,6);const h=i.get("uvi")?.data;let v=0,m=0,x=-1-F.f,b=-1-F.f;h&&h.length>=4&&(v=h[0],m=h[1],x=-1-h[2],b=-1-h[3]);let C=i.get("position").indices.length,S=s;for(let g=0;g<C;++g)l.set(S,0,v),l.set(S,1,m),S++,l.set(S,0,x),l.set(S,1,m),S++,l.set(S,0,x),l.set(S,1,b),S++,l.set(S,0,x),l.set(S,1,b),S++,l.set(S,0,v),l.set(S,1,b),S++,l.set(S,0,v),l.set(S,1,m),S++;(0,O.tb)(i.get("color"),4,c,s,6);const{data:z,indices:P}=i.get("size");C=P.length,S=s;for(let g=0;g<C;++g){const e=z[2*P[g]],t=z[2*P[g]+1];for(let i=0;i<6;++i)d.set(S,0,e),d.set(S,1,t),S++}if((0,O.uO)(i.get("rotation"),u,s,6),i.get("centerOffsetAndDistance")?(0,O.Ut)(i.get("centerOffsetAndDistance"),f,s,6):(0,O.Pq)(f,s,6*C),i.get("featureAttribute")?(0,O.Ut)(i.get("featureAttribute"),p,s,6):(0,O.Pq)(p,s,6*C),null!=o){const e=i.get("position")?.indices;if(e){const t=e.length,i=r.getField("olidColor",g.XP);(0,O.vx)(o,i,t,s,6)}}return{numVerticesPerItem:6,numItems:C}}intersect(e,t,i,o,r,s,n){const{options:{selectionMode:l,hud:c,excludeLabels:f},point:p,camera:h}=o;if(!l||!c||f&&t.isLabel||!p)return;const v=this.layout.createView(e),m=v.getField("position",g.xs),x=v.getField("normal",g.xs),b=v.getField("rotation",g.Y$),C=v.getField("size",g.gH),S=v.getField("featureAttribute",g.Eq),z=v.getField("centerOffsetAndDistance",g.Eq),y="screen"===t.centerOffsetUnits,A=(0,F.c)(t);if(null==m||null==x||null==b||null==C||null==z||null==h)return;const O=null==S?null:S.getVec(0,le),{scaleX:w,scaleY:D}=ve(O,t,h.pixelRatio),H=m.count/6;for(let g=0;g<H;g++){const e=6*g;if(m.getVec(e,Y),null!=i&&(0,d.f)(Y,Y,i),(0,d.t)(Y,Y,h.viewMatrix),z.getVec(e,se),(0,d.i)(ae,se[0],se[1],se[2]),!y&&(Y[0]+=ae[0],Y[1]+=ae[1],0!==ae[2])){const e=ae[2];(0,d.n)(ae,Y),(0,d.d)(Y,Y,(0,d.g)(ae,ae,e))}if(x.getVec(e,X),k(X,ie,h,ce),me(t,Y,ce,h,Q),h.applyProjection(Y,Z),Z[0]>-1){y&&(ae[0]||ae[1])&&(Z[0]+=ae[0]*h.pixelRatio,0!==ae[1]&&(Z[1]+=(0,P.m0)(ae[1],Q.factorAlignment)*h.pixelRatio),h.unapplyProjection(Z,Y)),Z[0]+=t.screenOffset[0]*h.pixelRatio,Z[1]+=t.screenOffset[1]*h.pixelRatio,Z[0]=Math.floor(Z[0]),Z[1]=Math.floor(Z[1]),C.getVec(e,fe),(0,P.MD)(fe,Q.factor,fe);const i=de*h.pixelRatio;let r=0;t.textureIsSignedDistanceField&&(r=Math.min(t.outlineSize,.5*fe[0])*h.pixelRatio/2),fe[0]*=w,fe[1]*=D;const s=b.get(e),l=t.rotation+s;if(G(p,Z[0],Z[1],fe,i,r,l,t,A)){const e=o.ray;if((0,d.t)(K,Y,(0,a.B8)(re,h.viewMatrix)),Z[0]=p[0],Z[1]=p[1],h.unprojectFromRenderScreen(Z,Y)){const t=(0,u.vt)();(0,d.c)(t,e.direction);const i=1/(0,d.l)(t);(0,d.g)(t,t,i),n((0,d.j)(e.origin,Y)*i,t,g,K)}}}}}}function ve(e,t,i){return null==e||null==t.vvSize?{scaleX:i,scaleY:i}:((0,v.VC)(ne,t,e),{scaleX:ne[0]*i,scaleY:ne[1]*i})}function me(e,t,i,o,r){if(!e.verticalOffset?.screenLength)return e.screenSizePerspective||e.screenSizePerspectiveAlignment?xe(e,r,(0,d.l)(t),i.cosAngle):(r.factor.scale=1,r.factorAlignment.scale=1),t;const s=(0,d.l)(t),a=e.screenSizePerspectiveAlignment??e.screenSizePerspective,n=(0,w.kE)(o,s,e.verticalOffset,i.cosAngle,a);return xe(e,r,s,i.cosAngle),(0,d.g)(i.normal,i.normal,n),(0,d.f)(t,t,i.normal)}function xe(e,t,i,o){null!=e.screenSizePerspective?(0,P.cJ)(o,i,e.screenSizePerspective,t.factor):(t.factor.scale=1,t.factor.factor=0,t.factor.minScaleFactor=0),null!=e.screenSizePerspectiveAlignment?(0,P.cJ)(o,i,e.screenSizePerspectiveAlignment,t.factorAlignment):(t.factorAlignment.factor=t.factor.factor,t.factorAlignment.scale=t.factor.scale,t.factorAlignment.minScaleFactor=t.factor.minScaleFactor)}}}]);
//# sourceMappingURL=25011.f234ac84.chunk.js.map