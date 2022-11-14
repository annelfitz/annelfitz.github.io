"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[3684],{53684:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var s=i(27366),r=i(44055),n=i(40281),a=i(94172),o=(i(32718),i(25243),i(63780),i(10064),i(93169),i(69912)),l=i(34999),p=i(9014),h=i(49818),d=i(95986),c=i(75391),u=i(34035),y=i(67581);let g=class extends((0,d.y)(y.Z)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,t){if(!this.graphicsViews.length)return null;const i=this.layer;return this.graphicsViews.reverse().map((t=>{const s=this._popupTemplates.get(t),r=t.hitTest(e);for(const e of r)e.layer=i,e.sourceLayer=i,e.popupTemplate=s;return r})).flat().map((t=>({type:"graphic",graphic:t,layer:i,mapPoint:e})))}update(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)}attach(){this.handles.add([(0,a.YP)((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:t,featureSet:i,layerDefinition:s}of e){const e=h.default.fromJSON(i),a=new n.Z(e.features),o=s.drawingInfo,l=t?r.Z.fromJSON(t):null,d=(0,p.i)(o.renderer),y=new u.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:a,renderer:d,container:new c.Z(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=y,this._popupTemplates.set(y,l),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=d.symbol):this.layer.lineSymbol=d.symbol:this.layer.polygonSymbol=d.symbol,this.graphicsViews.push(y),this.container.addChild(y.container)}}),a.nn),(0,a.YP)((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new l.Z({symbol:e})}),a.nn),(0,a.YP)((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new l.Z({symbol:e})}),a.nn),(0,a.YP)((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new l.Z({symbol:e})}),a.nn)],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};g=(0,s._)([(0,o.j)("esri.views.2d.layers.GeoRSSLayerView2D")],g);const m=g},95986:(e,t,i)=>{i.d(t,{y:()=>Z});var s=i(27366),r=i(40281),n=i(60354),a=i(10064),o=i(94172),l=i(49861),p=(i(63780),i(25243),i(69912)),h=i(33624),d=i(46784);let c=class extends d.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,l.Cb)({readOnly:!0})],c.prototype,"version",null),c=(0,s._)([(0,p.j)("esri.views.layers.support.ClipArea")],c);const u=c;var y;let g=y=class extends u{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new y({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"right",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0),g=y=(0,s._)([(0,p.j)("esri.views.layers.support.ClipRect")],g);const m=g;i(59486);var v,b=i(32238),w=i(77981),f=i(53866),_=i(80885);const S={base:b.Z,key:"type",typeMap:{extent:f.Z,polygon:_.Z}};let C=v=class extends u{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new v({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,l.Cb)({types:S,json:{read:w.im,write:!0}})],C.prototype,"geometry",void 0),C=v=(0,s._)([(0,p.j)("esri.views.layers.support.Geometry")],C);const R=C;let P=class extends u{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],P.prototype,"path",void 0),P=(0,s._)([(0,p.j)("esri.views.layers.support.Path")],P);const V=P,T=r.Z.ofType({key:"type",base:null,typeMap:{rect:m,path:V,geometry:R}}),Z=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new T,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new h.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.handles.add([(0,o.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),o.tX),(0,o.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),o.tX),(0,o.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),o.tX),(0,o.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),o.tX),(0,o.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),o.tX),(0,o.YP)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(e=>{let{scale:t}=e;const i=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),o.tX)]),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0===i||e<=i)&&(0===s||e>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}};return(0,s._)([(0,l.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,l.Cb)({type:T,set(e){const t=(0,n.Z)(e,this._get("clips"),T);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"updating",null),(0,s._)([(0,l.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),t=(0,s._)([(0,p.j)("esri.views.2d.layers.LayerView2D")],t),t}},75391:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(80613),r=i(82022);class n extends r.Z{renderChildren(e){this.attributeView.update(),this.children.some((e=>e.hasData))&&(this.attributeView.bindTextures(e.context,!1),super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},67581:(e,t,i)=>{i.d(t,{Z:()=>y});var s=i(27366),r=i(85015),n=i(91505),a=i(41691),o=i(79056),l=i(32718),p=i(92026),h=i(67426),d=i(49861),c=(i(63780),i(25243),i(69912));let u=class extends((0,a.p)((0,o.IG)((0,h.v)(n.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,p.Pt)(this.get("layer.opacity"),1)*(0,p.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,d.Cb)()],u.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],u.prototype,"layer",void 0),(0,s._)([(0,d.Cb)()],u.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"suspended",null),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],u.prototype,"visible",null),(0,s._)([(0,d.Cb)()],u.prototype,"view",void 0),u=(0,s._)([(0,c.j)("esri.views.layers.LayerView")],u);const y=u}}]);
//# sourceMappingURL=3684.f89a0a10.chunk.js.map