(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[69],{530:function(t,e,i){"use strict";var s=i(0),r=i(19),a=i(77),n=i(99),o=i(244),h=i(4),c=i(134),d=i(1),l=(i(5),i(6),i(2));let u=class extends(Object(n.b)(Object(o.a)(Object(c.b)(a.a.EventedMixin(r.a))))){constructor(t){super(t),this.layer=null,this.parent=null}initialize(){this.when().catch(t=>{if("layerview:create-error"!==t.name){const e=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw h.a.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${e}')`,t),t}})}get fullOpacity(){const t=t=>null==t?1:t;return t(this.get("layer.opacity"))*t(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.get("layer.visible")}set visible(t){void 0!==t?this._override("visible",t):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const t=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};Object(s.a)([Object(d.b)()],u.prototype,"fullOpacity",null),Object(s.a)([Object(d.b)()],u.prototype,"layer",void 0),Object(s.a)([Object(d.b)()],u.prototype,"parent",void 0),Object(s.a)([Object(d.b)({readOnly:!0})],u.prototype,"suspended",null),Object(s.a)([Object(d.b)({readOnly:!0})],u.prototype,"suspendInfo",null),Object(s.a)([Object(d.b)({readOnly:!0})],u.prototype,"legendEnabled",null),Object(s.a)([Object(d.b)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),Object(s.a)([Object(d.b)({readOnly:!0})],u.prototype,"updatingProgress",null),Object(s.a)([Object(d.b)()],u.prototype,"visible",null),u=Object(s.a)([Object(l.a)("esri.views.layers.LayerView")],u);var p=u;e.a=p},531:function(t,e,i){"use strict";i.d(e,"a",(function(){return S}));var s=i(0),r=i(21),a=i(95),n=i(16),o=i(1),h=(i(5),i(6),i(4),i(2)),c=i(561),d=i(10);let l=class extends d.a{};l=Object(s.a)([Object(h.a)("esri.views.layers.support.ClipArea")],l);var u,p=l;let b=u=class extends p{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new u({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};Object(s.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],b.prototype,"left",void 0),Object(s.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],b.prototype,"right",void 0),Object(s.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],b.prototype,"top",void 0),Object(s.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],b.prototype,"bottom",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],b.prototype,"version",null),b=u=Object(s.a)([Object(h.a)("esri.views.layers.support.ClipRect")],b);var g,y=b,O=(i(56),i(73)),j=i(17),v=i(37),m=i(82);const x={base:O.a,key:"type",typeMap:{extent:v.a,polygon:m.a}};let f=g=class extends p{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new g({geometry:this.geometry.clone()})}};Object(s.a)([Object(o.b)({types:x,json:{read:j.a,write:!0}})],f.prototype,"geometry",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],f.prototype,"version",null),f=g=Object(s.a)([Object(h.a)("esri.views.layers.support.Geometry")],f);var w=f;let _=class extends p{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};Object(s.a)([Object(o.b)({type:[[[Number]]],json:{write:!0}})],_.prototype,"path",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],_.prototype,"version",null),_=Object(s.a)([Object(h.a)("esri.views.layers.support.Path")],_);var R=_;const M=r.a.ofType({key:"type",base:p,typeMap:{rect:y,path:R,geometry:w}}),S=t=>{let e=class extends t{constructor(){super(...arguments),this.clips=new M,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var t;this.container||(this.container=new c.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(n.a)(this,"suspended",t=>{this.container&&(this.container.visible=!t),this.view&&!t&&this.updateRequested&&this.view.requestUpdate()},!0),Object(n.a)(this,["layer.opacity","container"],()=>{var t,e;this.container&&(this.container.opacity=null!=(t=null==(e=this.layer)?void 0:e.opacity)?t:1)},!0),Object(n.a)(this,["layer.blendMode"],t=>{this.container&&(this.container.blendMode=t)},!0),Object(n.a)(this,["layer.effect"],t=>{this.container&&(this.container.effect=t)},!0),this.clips.on("change",()=>{this.container.clips=this.clips,this.notifyChange("clips")})]),null!=(t=this.view)&&t.whenLayerView?this.view.whenLayerView(this.layer).then(t=>{t!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{}):this.when().then(()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(t){let e=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,a=!r;!i&&t<=s&&(i=!0),!a&&t>=r&&(a=!0),e=i&&a}return e}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return Object(s.a)([Object(o.b)({type:M,set(t){const e=Object(a.b)(t,this._get("clips"),M);this._set("clips",e)}})],e.prototype,"clips",void 0),Object(s.a)([Object(o.b)()],e.prototype,"moving",void 0),Object(s.a)([Object(o.b)()],e.prototype,"attached",void 0),Object(s.a)([Object(o.b)()],e.prototype,"container",void 0),Object(s.a)([Object(o.b)()],e.prototype,"suspended",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],e.prototype,"updateParameters",void 0),Object(s.a)([Object(o.b)()],e.prototype,"updateRequested",void 0),Object(s.a)([Object(o.b)()],e.prototype,"updating",null),Object(s.a)([Object(o.b)()],e.prototype,"view",void 0),e=Object(s.a)([Object(h.a)("esri.views.2d.layers.LayerView2D")],e),e}},576:function(t,e,i){"use strict";e.a=class{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(t){const e=this.pixelBlock;if(!e)return;const i=this.filter({pixelBlock:e}),s=i.pixelBlock.getAsRGBA(),r=t.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),t.putImageData(r,0,0)}getRenderedRasterPixels(){const t=this.filter({pixelBlock:this.pixelBlock});return{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)}}}},584:function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var s=i(178),r=i(245),a=i(295),n=(i(516),i(514),i(5),i(512),i(513),i(518),i(511)),o=(i(515),i(541)),h=i(576);function c(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new n.a(t,s)}class d extends o.a{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:Object(r.b)()},this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(t){const e=Object(s.b)(this.transforms.dvs),[i,r]=t.toScreenNoRotation([0,0],this.x,this.y),n=this.resolution/this.pixelRatio/t.resolution,o=n*this.width,h=n*this.height,c=Math.PI*this.rotation/180;Object(s.c)(e,e,Object(a.b)(i,r)),Object(s.c)(e,e,Object(a.b)(o/2,h/2)),Object(s.j)(e,e,-c),Object(s.c)(e,e,Object(a.b)(-o/2,-h/2)),Object(s.g)(e,e,Object(a.b)(o,h)),Object(s.h)(this.transforms.dvs,t.displayViewMat3,e)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}updateTexture(t){var e;if(!this.stage)return null==(e=this._texture)||e.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=c(t,this.sourceWidth,this.sourceHeight):this._texture=c(t));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(t){return t&&"render"in t}(i))if(i instanceof h.a){const t=i.getRenderedRasterPixels();this._texture.setData(t.renderedRasterPixels)}else this._texture.setData(function(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}(i));else(function(t){return t&&!("render"in t)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},616:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var s=i(596),r=i(502),a=i(558);class n extends a.a{get requiresDedicatedFBO(){return this.children.some(t=>"additive"===t.blendFunction)}prepareRenderPasses(t){const e=t.registerRenderPass({name:"bitmap",brushes:[s.a.bitmap],target:()=>this.children,drawPhase:r.c.MAP});return[...super.prepareRenderPasses(t),e]}}},644:function(t,e,i){"use strict";var s=i(0),r=i(19),a=i(12),n=i(1),o=(i(5),i(6),i(4),i(2)),h=i(37),c=i(106),d=i(25),l=i(322);const u=Math.PI/180;function p(t,e){const i=e.rotation*u,s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,n]=e.size;return t[0]=Math.round(n*r+a*s),t[1]=Math.round(n*s+a*r),t}var b=i(584),g=i(329),y=i(177);const O=Object(c.f)(),j=[0,0],v=new y.a(0,0,0,0),m=2048,x=2048,f=!1,w=!1,_=!1;let R=class extends r.a{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=_,this.imageMaxWidth=m,this.imageMaxHeight=x,this.imageRotationSupported=f,this.imageNormalizationSupported=w,this.update=Object(a.i)(async(t,e)=>{if(!t.stationary||this.destroyed)return null;const i=t.state,s=Object(d.d)(i.spatialReference),r=this.hidpi?t.pixelRatio:1,a=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0];a?(j[0]=i.worldScreenWidth,j[1]=i.size[1]):this.imageRotationSupported?(j[0]=i.size[0],j[1]=i.size[1]):p(j,i);const n=Math.floor(j[0]*r)>this.imageMaxWidth||Math.floor(j[1]*r)>this.imageMaxHeight,o=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),h=!this.imageNormalizationSupported&&o,c=!n&&!h,l=this.imageRotationSupported?i.rotation:0;if(c){const t=a?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,j,t,i.resolution,l,r,e)}else{let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);h&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,l,r,e)}return this._imagePromise.then(async t=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=null!=t?t:[];for(const e of this.container.children)t.includes(e)||e.fadeOut().then(()=>{e.remove()});for(const e of t)this.container.addChild(e),e.fadeIn()}}).catch(t=>{throw this._imagePromise=null,t})},5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e),e.invalidateTexture(),e.requestRender()}}async _export(t,e,i,s,r,a){const n=await this.fetchSource(t,Math.floor(e*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:a}),o=new b.a(n,"additive");return o.x=t.xmin,o.y=t.ymax,o.resolution=t.width/e,o.rotation=s,o.pixelRatio=r,o}async _singleExport(t,e,i,s,r,a,n){!function(t,e,i,s){const[r,a]=e,[n,o]=s,h=.5*i;t[0]=r-h*n,t[1]=a-h*o,t[2]=r+h*n,t[3]=a+h*o}(O,i,s,e);const o=new h.a(O[0],O[1],O[2],O[3],t.spatialReference);return[await this._export(o,e[0],e[1],r,a,n)]}_tiledExport(t,e,i,s,r){const a=l.a.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),n=new g.a(a),o=n.getTileCoverage(t);if(!o)return null;const c=[];return o.forEach((a,o,d,l)=>{v.set(a,o,d,l),n.getTileBounds(O,v);const u=new h.a(O[0],O[1],O[2],O[3],t.spatialReference);c.push(this._export(u,e,e,i,s,r))}),Promise.all(c)}};Object(s.a)([Object(n.b)()],R.prototype,"_imagePromise",void 0),Object(s.a)([Object(n.b)()],R.prototype,"bitmaps",void 0),Object(s.a)([Object(n.b)()],R.prototype,"container",void 0),Object(s.a)([Object(n.b)()],R.prototype,"fetchSource",void 0),Object(s.a)([Object(n.b)()],R.prototype,"hidpi",void 0),Object(s.a)([Object(n.b)()],R.prototype,"imageMaxWidth",void 0),Object(s.a)([Object(n.b)()],R.prototype,"imageMaxHeight",void 0),Object(s.a)([Object(n.b)()],R.prototype,"imageRotationSupported",void 0),Object(s.a)([Object(n.b)()],R.prototype,"imageNormalizationSupported",void 0),Object(s.a)([Object(n.b)()],R.prototype,"requestUpdate",void 0),Object(s.a)([Object(n.b)()],R.prototype,"updating",null),R=Object(s.a)([Object(o.a)("esri.views.2d.layers.support.ExportStrategy")],R);var M=R;e.a=M},936:function(t,e,i){"use strict";i.r(e);var s=i(0),r=i(4),a=i(12),n=i(1),o=(i(5),i(6),i(2)),h=i(616),c=i(531),d=i(644),l=i(530),u=i(251);const p=r.a.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let b=class extends(Object(u.a)(Object(c.a)(l.a))){hitTest(){return null}update(t){this.strategy.update(t).catch(t=>{Object(a.m)(t)||p.error(t)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h.a,this.container.addChild(this._bitmapContainer),this.strategy=new d.a({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImage(t,e,i,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};Object(s.a)([Object(n.b)()],b.prototype,"strategy",void 0),Object(s.a)([Object(n.b)()],b.prototype,"updating",void 0),b=Object(s.a)([Object(o.a)("esri.views.2d.layers.BaseDynamicLayerView2D")],b);var g=b;e.default=g}}]);
//# sourceMappingURL=69.36ecae4b.chunk.js.map