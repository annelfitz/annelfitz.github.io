"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[6598],{45956:(e,t,i)=>{i.d(t,{JZ:()=>p,RL:()=>g,eY:()=>x});var s=i(92026),r=i(66978),n=i(22753),h=i(23588),a=i(15245),o=i(87422),l=i(10978),d=i(49800),u=i(8548),c=i(371);function p(e){return e&&"render"in e}function g(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class x extends o.s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t.immutable??!1,this.requestRenderOnSourceChangedEnabled=t.requestRenderOnSourceChangedEnabled??!0,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),(0,s.pC)(this._uploadStatus)&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width),this.invalidateTexture())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){(0,s.pC)(this._uploadStatus)&&this._uploadStatus.controller.abort();const i=new AbortController,n=(0,r.hh)();return(0,r.$F)(t,(()=>i.abort())),(0,r.$F)(i,(e=>n.reject(e))),this._uploadStatus={controller:i,resolver:n},this.source=e,n.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,n.g)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/e.resolution,h=r*this.width,o=r*this.height,l=Math.PI*this.rotation/180;(0,n.h)(t,t,(0,a.f)(i,s)),(0,n.h)(t,t,(0,a.f)(h/2,o/2)),(0,n.r)(t,t,-l),(0,n.h)(t,t,(0,a.f)(-h/2,-o/2)),(0,n.k)(t,t,(0,a.f)(h,o)),(0,n.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture(e){let{context:t,painter:i}=e;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const n=p(h=this.source)?h instanceof l.Z?(0,s.yw)(h.getRenderedRasterPixels(),(e=>e.renderedRasterPixels)):g(h):h;var h;try{if((0,s.pC)(this._uploadStatus)){const{controller:e,resolver:t}=this._uploadStatus,s={signal:e.signal},{width:r,height:h}=this,a=this._texture,o=i.textureUploadManager;await o.enqueueTextureUpdate({data:n,texture:a,width:r,height:h},s),t.resolve(),this._uploadStatus=null}else this._texture.setData(n);this.ready()}catch(a){(0,r.H9)(a)}}onDetach(){this.destroy()}_createTransforms(){return{dvs:(0,h.c)()}}_createTexture(e){const t=this.immutable&&e.type===d.zO.WEBGL2;return new c.x(e,{target:u.No.TEXTURE_2D,pixelFormat:u.VI.RGBA,internalFormat:t?u.lP.RGBA8:u.VI.RGBA,dataType:u.Br.UNSIGNED_BYTE,wrapMode:u.e8.CLAMP_TO_EDGE,isImmutable:t,width:this._sourceWidth,height:this._sourceHeight})}}},9849:(e,t,i)=>{i.d(t,{s:()=>u});var s=i(65156),r=i(23588),n=i(45956),h=i(72900);class a extends h.I{constructor(e,t,i,s,r,h){let a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;super(e,t,i,s,r,h),this.bitmap=new n.eY(a,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),this.bitmap.coordScale=[r,h],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,r.c)(),tileMat3:(0,r.c)()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var o=i(62272),l=i(80613),d=i(55067);class u extends d.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,s.Ue)(),e),i=this._tileInfoView.getTileResolution(e.level),[r,n]=this._tileInfoView.tileInfo.size;return new a(e,i,t[0],t[3],r,n)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[o.U.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:l.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===l.jx.MAP&&super.doRender(e)}}},10978:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(92026);class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if((0,s.Wi)(t))return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??t});if((0,s.Wi)(i.pixelBlock))return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},55067:(e,t,i)=>{i.d(t,{Z:()=>l});var s=i(93169),r=i(80613),n=i(64510),h=i(52424),a=i(40655);const o=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class l extends n.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(o),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[a.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[h.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const i of this.children)i.stencilRef=t++}}},72900:(e,t,i)=>{i.d(t,{I:()=>h});var s=i(22753),r=i(87422),n=i(73828);class h extends r.s{constructor(e,t,i,s,r,h){let a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:h;super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new n.Z(e),this.resolution=t,this.x=i,this.y=s,this.width=r,this.height=h,this.rangeX=a,this.rangeY=o}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e){const t=this.resolution/(e.resolution*e.pixelRatio),i=this.transforms.tileMat3,[r,n]=e.toScreenNoRotation([0,0],[this.x,this.y]),h=this.width/this.rangeX*t,a=this.height/this.rangeY*t;(0,s.s)(i,h,0,0,0,a,0,r,n,1),(0,s.m)(this.transforms.dvs,e.displayViewMat3,i)}}},40639:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(27366),r=i(41691),n=i(49861),h=(i(25243),i(63780),i(69912));let a=class extends r.r{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};(0,s._)([(0,n.Cb)()],a.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],a.prototype,"layerView",void 0),(0,s._)([(0,n.Cb)()],a.prototype,"tileInfoView",void 0),(0,s._)([(0,n.Cb)()],a.prototype,"updating",null),a=(0,s._)([(0,h.j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],a);const o=a},46598:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var s=i(27366),r=(i(32718),i(25243),i(63780),i(10064),i(93169),i(69912)),n=i(27811),h=i(9849),a=i(40639);class o{constructor(){this.gradient=null,this.height=512,this.intensities=null,this.width=512}render(e){(0,n.hy)(e,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let l=class extends a.Z{constructor(e){super(e),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new h.s(e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minDensity:t,maxDensity:i,colorStops:s}=e;this._intensityInfo.minDensity=t,this._intensityInfo.maxDensity=i,this._gradient=(0,n.uI)(s),this.tiles.forEach((e=>{const s=e.bitmap.source;s&&(s.minDensity=t,s.maxDensity=i,s.gradient=this._gradient,e.bitmap.invalidateTexture())}))}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minDensity:s,maxDensity:r}=this._intensityInfo,n=t.bitmap.source||new o;n.intensities=i&&i.matrix||null,n.minDensity=s,n.maxDensity=r,n.gradient=this._gradient,t.bitmap.source=n,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};l=(0,s._)([(0,r.j)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],l);const d=l}}]);
//# sourceMappingURL=6598.b8953eb8.chunk.js.map