"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[3558],{39383:(e,t,i)=>{i.d(t,{T:()=>f});var s=i(66978),r=i(43e3),a=i(26885),n=i(55067),o=i(92026),h=i(17842),l=i(68860),d=i(49229),p=i(84319),c=i(10435),u=i(98029),v=i(90316);function g(e,t){const i=t.length;if(e<t[0].value||1===i)return t[0].size;for(let s=1;s<i;s++)if(e<t[s].value){const i=(e-t[s-1].value)/(t[s].value-t[s-1].value);return t[s-1].size+i*(t[s].size-t[s-1].size)}return t[i-1].size}class y{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=c.v}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops;if(t)switch(t.type){case"static":return t;case"level-dependent":return(0,o.Pt)(t.levels[e],(()=>{let i=1/0,s=0;for(const o in t.levels){const t=parseFloat(o),r=Math.abs(e-t);r<i&&(i=r,s=t)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((e-s)/2),a=(0,o.Wg)(t.levels[s]),n=new Float32Array(a.values);return n[2]*=r,n[3]*=r,{sizes:(0,o.Wg)(a.sizes),values:n}}));default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){(0,o.pC)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,i){this._updateEffects(i),this._vvInfo=t,this._technique=(0,u.EJ)(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,v.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){(0,o.pC)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return;const s=e.size;if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const e=s.minMaxValue;let i,r;if((0,p.$K)(e.minSize)&&(0,p.$K)(e.maxSize))if((0,p.hj)(e.minSize)&&(0,p.hj)(e.maxSize))i=(0,h.F2)(e.minSize),r=(0,h.F2)(e.maxSize);else{const s=t.scale;i=(0,h.F2)(g(s,e.minSize.stops)),r=(0,h.F2)(g(s,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,r])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=(0,h.F2)(g(t.scale,s.scaleStops.stops))),s.unitValue){const e=(0,l.c9)(t.spatialReference)/d.a[s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const r=e.color;r&&(i.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const a=e.opacity;a&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(a.values),this.vvOpacities.set(a.opacities));const n=e.rotation;n&&(i.vvRotationEnabled=!0,i.vvRotationType=n.type)}}class f extends n.Z{constructor(e){super(e),this._rendererInfo=new y,this._materialItemsRequestQueue=new r.Z,this.attributeView=new a.H((()=>this.onAttributeStoreUpdate()))}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return[];const i=(0,s.hh)();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:i}),this.requestRender(),i.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}updateTransforms(e){if(this.children.some((e=>e.hasData)))for(const t of this.children)t.setTransform(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,t){let{items:i,abortOptions:s,resolver:r}=t;const{painter:a,pixelRatio:n}=e,o=i.map((e=>a.textureManager.rasterizeItem(e.symbol,n,e.glyphIds,s)));Promise.all(o).then((e=>{if(!this.stage)return void r.reject();const t=e.map(((e,t)=>({id:i[t].id,mosaicItem:e})));r.resolve(t)}),r.reject)}}},55067:(e,t,i)=>{i.d(t,{Z:()=>l});var s=i(93169),r=i(80613),a=i(64510),n=i(52424),o=i(40655);const h=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class l extends a.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(h),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[o.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[n.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const i of this.children)i.stencilRef=t++}}},73558:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var s=i(27366),r=i(52639),a=i(40281),n=i(92026),o=i(49861),h=(i(25243),i(63780),i(69912)),l=i(95986),d=i(75391),p=i(34035),c=i(67581);const u={remove(){},pause(){},resume(){}};let v=class extends((0,l.y)(c.Z)){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new p.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d.Z(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=(0,n.SC)(this.graphicsView)}async hitTest(e){return this.graphicsView?this.graphicsView.hitTest(e).map((t=>({type:"graphic",graphic:t,mapPoint:e,layer:this.layer}))):null}async fetchPopupFeatures(e){return this.graphicsView?this.graphicsView.hitTest(e).filter((e=>!!e.popupTemplate)):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(e){let t;"number"==typeof e?t=[e]:e instanceof r.Z?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):a.Z.isCollection(e)&&e.length>0&&(t=e.map((e=>e&&e.uid)).toArray());const i=t?.filter(n.pC);return i?.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):u}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()))}};(0,s._)([(0,o.Cb)()],v.prototype,"graphicsView",void 0),v=(0,s._)([(0,h.j)("esri.views.2d.layers.GraphicsLayerView2D")],v);const g=v},95986:(e,t,i)=>{i.d(t,{y:()=>A});var s=i(27366),r=i(40281),a=i(60354),n=i(10064),o=i(94172),h=i(49861),l=(i(25243),i(63780),i(69912)),d=i(33624),p=i(64634),c=i(46784);let u=class extends c.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,h.Cb)({readOnly:!0})],u.prototype,"version",null),u=(0,s._)([(0,l.j)("esri.views.layers.support.ClipArea")],u);const v=u;var g;let y=g=class extends v{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new g({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),y=g=(0,s._)([(0,l.j)("esri.views.layers.support.ClipRect")],y);const f=y;i(59486);var m,_=i(32238),b=i(77981),w=i(53866),R=i(80885);const S={base:_.Z,key:"type",typeMap:{extent:w.Z,polygon:R.Z}};let C=m=class extends v{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new m({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,h.Cb)({types:S,json:{read:b.im,write:!0}})],C.prototype,"geometry",void 0),C=m=(0,s._)([(0,l.j)("esri.views.layers.support.Geometry")],C);const V=C;let x=class extends v{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,h.Cb)({type:[[[Number]]],json:{write:!0}})],x.prototype,"path",void 0),x=(0,s._)([(0,l.j)("esri.views.layers.support.Path")],x);const I=x,P=r.Z.ofType({key:"type",base:null,typeMap:{rect:f,path:I,geometry:V}}),A=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new P,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new n.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,o.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),o.tX),(0,o.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),o.tX),(0,o.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),o.tX),(0,o.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),o.tX),(0,o.YP)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),o.tX),(0,o.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),o.tX),(0,o.YP)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),o.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0===i||e<=i)&&(0===s||e>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,s._)([(0,h.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,h.Cb)({type:P,set(e){const t=(0,a.Z)(e,this._get("clips"),P);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"updating",null),(0,s._)([(0,h.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,h.Cb)({type:p.Z})],t.prototype,"highlightOptions",void 0),t=(0,s._)([(0,l.j)("esri.views.2d.layers.LayerView2D")],t),t}},82022:(e,t,i)=>{i.d(t,{Z:()=>m});var s=i(92026),r=i(39383),a=i(22753),n=i(23588),o=i(15245),h=i(8229),l=i(91340),d=i(87422),p=i(84319),c=i(44070),u=i(8548),v=i(45412);const g=Math.PI/180;class y extends d.s{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,n.c)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,s.M2)(this._program)}doRender(e){const{context:t}=e,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(u.zi.ONE,u.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const s=this._program;t.bindVAO(this._vao),t.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(u.MX.LINES,8*i.length,u.g.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:(0,n.c)()}}_createShaderProgram(e){if(this._program)return;this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",f().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:s,resolution:r,pixelRatio:n,rotation:d,viewpoint:p}=t,c=g*d,{x:u,y:v}=p.targetGeometry,y=(0,l.or)(u,t.spatialReference);this._localOrigin.x=y,this._localOrigin.y=v;const f=n*s[0],m=n*s[1],_=r*f,b=r*m,w=(0,a.g)(this._dvsMat3);(0,a.m)(w,w,i),(0,a.h)(w,w,(0,o.f)(f/2,m/2)),(0,a.d)(w,w,(0,h.f)(s[0]/_,-m/b,1)),(0,a.r)(w,w,-c)}_updateBufferData(e,t){const{x:i,y:s}=this._localOrigin,r=8*t.length,a=new Float32Array(r),n=new Uint32Array(8*t.length);let o=0,h=0;for(const l of t)l&&(a[2*o+0]=l[0]-i,a[2*o+1]=l[1]-s,a[2*o+2]=l[0]-i,a[2*o+3]=l[3]-s,a[2*o+4]=l[2]-i,a[2*o+5]=l[3]-s,a[2*o+6]=l[2]-i,a[2*o+7]=l[1]-s,n[h+0]=o+0,n[h+1]=o+3,n[h+2]=o+3,n[h+3]=o+2,n[h+4]=o+2,n[h+5]=o+1,n[h+6]=o+1,n[h+7]=o+0,o+=4,h+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=c.f.createVertex(e,u.l1.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(n):this._indexBuffer=c.f.createIndex(e,u.l1.DYNAMIC_DRAW,n),!this._vao){const t=f();this._vao=new v.U(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const f=()=>(0,p.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:u.g.FLOAT}]});let m=class extends r.T{constructor(e){super(e),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,s.SC)(this._boundsRenderer)}enableRenderingBounds(e){this._boundsRenderer=new y(e),this.requestRender()}get hasLabels(){return!1}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const i of this.children)i.isReady&&i.hasData&&(i.commit(e),e.context.setStencilFunction(u.wb.EQUAL,i.stencilRef,255),i.getDisplayList().replay(e,i,t))}}},75391:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(80613),r=i(82022);class a extends r.Z{renderChildren(e){this.attributeView.update(),this.children.some((e=>e.hasData))&&(this.attributeView.bindTextures(e.context,!1),super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},67581:(e,t,i)=>{i.d(t,{Z:()=>v});var s=i(27366),r=i(85015),a=i(91505),n=i(41691),o=i(79056),h=i(32718),l=i(92026),d=i(67426),p=i(49861),c=(i(25243),i(63780),i(69912));let u=class extends((0,n.p)((0,o.IG)((0,d.v)(a.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";h.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,l.Pt)(this.get("layer.opacity"),1)*(0,l.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,p.Cb)()],u.prototype,"fullOpacity",null),(0,s._)([(0,p.Cb)()],u.prototype,"layer",void 0),(0,s._)([(0,p.Cb)()],u.prototype,"parent",void 0),(0,s._)([(0,p.Cb)({readOnly:!0})],u.prototype,"suspended",null),(0,s._)([(0,p.Cb)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,s._)([(0,p.Cb)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,s._)([(0,p.Cb)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,s._)([(0,p.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,s._)([(0,p.Cb)()],u.prototype,"visible",null),(0,s._)([(0,p.Cb)()],u.prototype,"view",void 0),u=(0,s._)([(0,c.j)("esri.views.layers.LayerView")],u);const v=u}}]);
//# sourceMappingURL=3558.84a8342f.chunk.js.map