(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[59],{461:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i(6);var s=i(176),r=i(175),n=i(240),a=i(468);class o extends a.a{constructor(e,t,i,s=i){super(),this.triangleCountReportedInDebug=0,this.transforms={dvs:Object(n.b)(),tileMat3:Object(n.b)()},this.triangleCount=0,this.key=new r.a(e),this.bounds=t,this.size=i,this.coordRange=s}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}get coords(){return this._coords}get bounds(){return this._bounds}set bounds(e){this._coords=[e[0],e[3]],this._bounds=e}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[n,a]=e.toScreenNoRotation([0,0],this.coords),o=this.size[0]/this.coordRange[0]*i,h=this.size[1]/this.coordRange[1]*i;Object(s.i)(r,o,0,0,0,h,0,n,a,1),Object(s.f)(this.transforms.dvs,e.displayViewMat3,r)}}},465:function(e,t,i){"use strict";var s=i(432),r=i(516),n=i(513),a=i(487);const o=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class h extends a.a{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(o),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:t}=e;return{...super.createRenderParams(e),requiredLevel:this._tileInfoView.getClosestInfoForScale(t.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(t.scale)}}prepareRenderPasses(e){const t=e.registerRenderPass({name:"stencil",brushes:[n.a],drawPhase:s.c.DEBUG|s.c.MAP|s.c.HIGHLIGHT,target:()=>this.getStencilTarget()}),i=e.registerRenderPass({name:"tileInfo",brushes:[r.a],drawPhase:s.c.DEBUG,target:()=>this.children,has:"esri-tiles-debug"});return[...super.prepareRenderPasses(e),t,i]}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,i)}}setStencilReference(){let e=1;for(const t of this.children)t.stencilRef=e++}}t.a=h},510:function(e,t,i){"use strict";t.a=class{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(!t)return;const i=this.filter({pixelBlock:t}),s=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},515:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));i(6);var s=i(176),r=i(240),n=i(287),a=(i(441),i(445),i(444)),o=(i(439),i(468)),h=i(510);function l(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new a.a(e,s)}class c extends o.a{constructor(e=null,t,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:Object(r.b)()},this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(e){const t=Object(s.d)(this.transforms.dvs),[i,r]=e.toScreenNoRotation([0,0],this.x,this.y),a=this.resolution/this.pixelRatio/e.resolution,o=a*this.width,h=a*this.height,l=Math.PI*this.rotation/180;Object(s.a)(t,t,Object(n.b)(i,r)),Object(s.a)(t,t,Object(n.b)(o/2,h/2)),Object(s.h)(t,t,-l),Object(s.a)(t,t,Object(n.b)(-o/2,-h/2)),Object(s.e)(t,t,Object(n.b)(o,h)),Object(s.f)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind({context:e},t){this._texture&&e.bindTexture(this._texture,t)}updateTexture({context:e}){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=l(e,this.sourceWidth,this.sourceHeight):this._texture=l(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(e){return e&&"render"in e}(i))if(i instanceof h.a){const e=i.getRenderedRasterPixels();this._texture.setData(e.renderedRasterPixels)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},603:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var s=i(106),r=i(432),n=i(523),a=i(465),o=i(461),h=i(515);class l extends o.a{constructor(e,t,i,s=null){super(e,t,i,i),this.bitmap=new h.a(s,"standard",!1),this.bitmap.coordScale=i,this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}class c extends a.a{get requiresDedicatedFBO(){return this.children.some(e=>"additive"===e.bitmap.blendFunction)}createTile(e){const t=this._tileInfoView.getTileBounds(Object(s.e)(),e);return new l(e,t,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[n.a.bitmap],target:()=>this.children.map(e=>e.bitmap),drawPhase:r.c.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===r.c.MAP&&super.doRender(e)}}},635:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n}));var s=i(29),r=i(55);const n=(()=>{if(!("document"in s.a))return()=>null;const e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,i=>{t.clearRect(0,0,1,e.height);const s=t.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:t}of i.colorStops)s.addColorStop(Math.max(e,.001),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`);return t.fillStyle=s,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}})();function a(e,t,i,s){const{blurRadius:r,fieldOffset:n,field:a}=t,o=new Float64Array(i*s),l=h(r),c=Math.round(3*r);let u,d=Number.NEGATIVE_INFINITY;const f=function(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):i=>+i.readAttribute(e)+t:e=>1}(a,n),p=new Set;for(const h of e){const e=h.getCursor();for(;e.next();){const t=e.getObjectId();if(p.has(t))continue;p.add(t);const r=e.readLegacyPointGeometry(),n=128;if(r.x<-n||r.x>=i+n||r.y<-n||r.y>s+n)continue;const a=+f(e),h=Math.round(r.x)-c,g=Math.round(r.y)-c,b=Math.max(0,h),x=Math.max(0,g),m=Math.min(s,Math.round(r.y)+c),y=Math.min(i,Math.round(r.x)+c);for(let e=x;e<m;e++){const t=l[e-g];for(let s=b;s<y;s++){const r=l[s-h];u=o[e*i+s]+=t*r*a,u>d&&(d=u)}}}}return{matrix:o.buffer,max:d}}function o(e,t,i,s,n,a){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);const o=e.getImageData(0,0,t,t);i&&s&&o.data.set(new Uint8ClampedArray(function(e,t,i,s,n){const a=new Uint32Array(e*e),o="buffer"in t?t:new Float64Array(t),h="buffer"in i?new Uint32Array(i.buffer):new Uint32Array(new Uint8Array(i).buffer),l=h.length/(n-s);for(let c=0;c<o.length;c++){const e=o[c],t=Math.floor((e-s)*l);a[c]=h[Object(r.c)(t,0,h.length-1)]}return a.buffer}(t,i,s,n,a))),e.putImageData(o,0,0)}function h(e){const t=Math.round(3*e),i=2*e*e,s=new Float64Array(2*t+1);for(let r=0;r<=s.length;r++)s[r]=Math.exp(-((r-t)**2)/i)/Math.sqrt(2*Math.PI)*(e/2);return s}},711:function(e,t,i){"use strict";var s=i(0),r=(i(6),i(5),i(7),i(1)),n=i(2),a=(i(4),i(8),i(9),i(131));let o=class extends a.a{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",()=>this.notifyChange("updating")),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach(t=>{e=e&&t.isReady}),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};Object(s.a)([Object(r.b)()],o.prototype,"layer",void 0),Object(s.a)([Object(r.b)()],o.prototype,"layerView",void 0),Object(s.a)([Object(r.b)()],o.prototype,"tileInfoView",void 0),Object(s.a)([Object(r.b)()],o.prototype,"updating",null),o=Object(s.a)([Object(n.a)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],o);var h=o;t.a=h},928:function(e,t,i){"use strict";i.r(t);var s=i(0),r=(i(6),i(5),i(7),i(1),i(2)),n=(i(4),i(8),i(9),i(635)),a=i(603),o=i(711);class h{constructor(){this.gradient=null,this.height=512,this.width=512}render(e){Object(n.b)(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let l=class extends o.a{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new a.a(e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:i}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=i,this._gradient=Object(n.c)(e.toJSON()),this.tiles.forEach(e=>{const s=e.bitmap.source;s&&(s.minPixelIntensity=t,s.maxPixelIntensity=i,s.gradient=this._gradient,e.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minPixelIntensity:s,maxPixelIntensity:r}=this._intensityInfo,n=t.bitmap.source||new h;n.intensities=i&&i.matrix||null,n.minPixelIntensity=s,n.maxPixelIntensity=r,n.gradient=this._gradient,t.bitmap.source=n,this._container.addChild(t),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}};l=Object(s.a)([Object(r.a)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],l);var c=l;t.default=c}}]);
//# sourceMappingURL=59.61d382f0.chunk.js.map