(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[52],{461:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));s(6);var i=s(176),r=s(175),a=s(240),n=s(468);class o extends n.a{constructor(e,t,s,i=s){super(),this.triangleCountReportedInDebug=0,this.transforms={dvs:Object(a.b)(),tileMat3:Object(a.b)()},this.triangleCount=0,this.key=new r.a(e),this.bounds=t,this.size=s,this.coordRange=i}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}get coords(){return this._coords}get bounds(){return this._bounds}set bounds(e){this._coords=[e[0],e[3]],this._bounds=e}setTransform(e,t){const s=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[a,n]=e.toScreenNoRotation([0,0],this.coords),o=this.size[0]/this.coordRange[0]*s,h=this.size[1]/this.coordRange[1]*s;Object(i.i)(r,o,0,0,0,h,0,a,n,1),Object(i.f)(this.transforms.dvs,e.displayViewMat3,r)}}},463:function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return i}));const i=(e,t)=>e&&((...e)=>t.warn("DEBUG:",...e))||(()=>null),r=!1},465:function(e,t,s){"use strict";var i=s(432),r=s(516),a=s(513),n=s(487);const o=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class h extends n.a{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(o),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:t}=e;return{...super.createRenderParams(e),requiredLevel:this._tileInfoView.getClosestInfoForScale(t.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(t.scale)}}prepareRenderPasses(e){const t=e.registerRenderPass({name:"stencil",brushes:[a.a],drawPhase:i.c.DEBUG|i.c.MAP|i.c.HIGHLIGHT,target:()=>this.getStencilTarget()}),s=e.registerRenderPass({name:"tileInfo",brushes:[r.a],drawPhase:i.c.DEBUG,target:()=>this.children,has:"esri-tiles-debug"});return[...super.prepareRenderPasses(e),t,s]}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const s=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,s)}}setStencilReference(){let e=1;for(const t of this.children)t.stencilRef=e++}}t.a=h},489:function(e,t,s){"use strict";s.d(t,"a",(function(){return f})),s.d(t,"b",(function(){return u}));var i=s(3),r=s(20),a=s(431),n=s(432),o=s(437),h=s(460);function u(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function l(e){return e.map(e=>function(e){return{value:e.value,size:Object(r.f)(e.size)}}(e))}function c(e){if("string"==typeof e||"number"==typeof e)return Object(r.f)(e);const t=e;return{type:"size",expression:t.expression,stops:l(t.stops)}}const d=e=>{const t=[],s=[],i=l(e),n=i.length;for(let o=0;o<6;o++){const e=i[Math.min(o,n-1)];t.push(e.value),s.push(null==e.size?a.n:Object(r.d)(e.size))}return{values:new Float32Array(t),sizes:new Float32Array(s)}};function f(e){const t=e&&e.length>0?{}:null,s=t?{}:null;if(!t)return{vvFields:t,vvRanges:s};for(const i of e)if(i.field&&(t[i.type]=i.field),"size"===i.type){s.size||(s.size={});const e=i;switch(Object(h.a)(e)){case n.e.SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:c(e.minSize),maxSize:c(e.maxSize)};break;case n.e.SIZE_SCALE_STOPS:s.size.scaleStops={stops:l(e.stops)};break;case n.e.SIZE_FIELD_STOPS:if(e.levels){const t={};for(const s in e.levels)t[s]=d(e.levels[s]);s.size.fieldStops={type:"level-dependent",levels:t}}else s.size.fieldStops={type:"static",...d(e.stops)};break;case n.e.SIZE_UNIT_VALUE:s.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation}}}else if("color"===i.type)s.color=b(i);else if("opacity"===i.type)s.opacity=_(i);else if("rotation"===i.type){const e=i;s.rotation={type:e.rotationType}}return{vvFields:t,vvRanges:s}}function _(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;const s=e.stops;for(let e=0;e<8;++e){const i=s[Math.min(e,s.length-1)];t.values[e]=i.value,t.opacities[e]=i.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=s}}return t}function p(e,t,s){e[4*t+0]=s.r/255,e[4*t+1]=s.g/255,e[4*t+2]=s.b/255,e[4*t+3]=s.a}function b(e){if(Object(i.h)(e))return null;if(e.normalizationField)return null;const t={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;t.field=e.field;const s=e.stops;for(let e=0;e<8;++e){const i=s[Math.min(e,s.length-1)];t.values[e]=i.value,p(t.colors,e,i.color)}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].color;for(let e=0;e<8;e++)t.values[e]=1/0,p(t.colors,e,s)}}for(let s=0;s<32;s+=4)Object(o.b)(t.colors,s,!0);return t}},504:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var i=s(431),r=s(461);class a extends r.a{constructor(e,t){super(e,t,[i.E,i.E])}}},506:function(e,t,s){"use strict";s.d(t,"a",(function(){return V}));var i=s(15),r=s(223),a=s(6),n=s(3),o=s(5),h=s(12),u=s(431),l=(s(441),s(445),s(444)),c=s(439),d=s(433),f=s(463);const _=o.a.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),p=Object(f.b)(f.a,_),b=e=>2147483647&e;class g{constructor(e,t,s){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:i,pixelType:r,textureOnly:a}=e,o=Object(d.j)(r);this.shared=s,this.pixelType=r,this.size=t,this.textureOnly=a,a||(this.data=new o(Object(n.o)(i))),this._resetRange()}destroy(){Object(n.a)(this._texture,e=>e.dispose());for(const e in this._fbos)Object(n.a)(this._fbos[e],t=>{"0"===e&&t.detachColorTexture(),t.dispose()}),this._fbos[e]=null;this._texture=null}get _textureDesc(){return{target:3553,wrapMode:33071,pixelFormat:6408,dataType:this.pixelType,samplingMode:9728,width:this.size,height:this.size}}setData(e,t,s){const i=b(e),r=Object(n.o)(this.data),a=i*this.texelSize+t;!r||a>=r.length||(r[a]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i))}getData(e,t){if(Object(n.h)(this.data))return null;const s=b(e)*this.texelSize+t;return!this.data||s>=this.data.length?null:this.data[s]}getTexture(e){return Object(n.p)(this._texture,()=>this._initTexture(e))}getFBO(e,t=0){if(Object(n.h)(this._fbos[t])){const s={colorTarget:0,depthStencilTarget:0},i=0===t?this.getTexture(e):this._textureDesc;this._fbos[t]=new c.a(e,s,i)}return this._fbos[t]}get locked(){return!(5121!==this.pixelType||!this.shared||this.textureOnly||!Object(a.a)("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}updateTexture(e){if(!this.locked)try{const s=this.dirtyStart,i=this.dirtyEnd;if(s>i)return;this._resetRange();const r=Object(n.o)(this.data).buffer,a=this.getTexture(e),o=4,u=(s-s%this.size)/this.size,l=(i-i%this.size)/this.size,c=u,f=this.size,p=l,b=u*this.size*o,g=(f+p*this.size)*o-b,m=Object(d.j)(this.pixelType),v=m.BYTES_PER_ELEMENT;try{new m(r,b*v,g)}catch(t){}const y=new m(r,b*v,g),w=this.size,x=p-c+1;if(x>this.size)return void _.error(new h.a("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,c,w,x,y)}catch(t){}}update(e){const{data:t,start:s,end:i}=e;if(Object(n.i)(t)){const i=this.data,r=s*this.texelSize;for(let s=0;s<t.length;s++){const a=1<<s%this.texelSize;e.layout&a&&(i[r+s]=t[s])}}this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,i)}resize(e,t){const s=this.size;if(this.size=t,this.textureOnly)return void(s!==this.size&&(this._lastTexture=this._texture,this._texture=null));const i=Object(d.j)(this.pixelType);this.destroy(),this.data=new i(Object(n.o)(e.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new l.a(e,this._textureDesc,Object(n.p)(this.data,void 0));if(Object(n.i)(this._lastTexture)&&this._fbos[0]){const s=this._lastTexture.descriptor.width,i=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,n=this.getFBO(e),o=Object(d.k)(r),h=new(Object(d.j)(r))(new ArrayBuffer(s*i*o*this.texelSize)),u=e.getBoundFramebufferObject(),{x:l,y:c,width:f,height:_}=e.getViewport();e.bindFramebuffer(n),n.readPixels(0,0,s,i,a,r,h),t.updateData(0,0,0,2*s,i/2,h),e.setViewport(l,c,f,_),e.bindFramebuffer(u)}return this.destroy(),this._texture=t,this._texture}}class m{constructor(e){this._onUpdate=e,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(e){const{blocks:t,shared:s,size:i}=e;if(this.shared=s,this.size=i,p("Initializing AttributeStoreView",e),Object(n.h)(this._data))this._data=Object(n.k)(t,e=>new g(e,i,s));else for(let r=0;r<this._data.length;r++){const e=this._data[r],a=t[r];Object(n.i)(a)&&(Object(n.h)(e)?this._data[r]=new g(a,i,s):e.resize(a,i))}this._initialized=!0}destroy(){Object(n.a)(this._data,e=>Object(n.k)(e,e=>e.destroy())),Object(n.a)(this._defaultTexture,e=>e.dispose())}getBlock(e){return Object(n.h)(this._data)?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,u.b,0,0)}getData(e,t,s,i){if(!this._data)return 0;const r=Object(n.o)(this._data)[t];if(Object(n.h)(r))return 0;const a=r.getData(e,s);return Object(n.i)(a)?a:i}setData(e,t,s,i){const r=Object(n.o)(this._data)[t];Object(n.o)(r).setData(e,s,i)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(e){if(this._pendingAttributeUpdate)return void _.error(new h.a("mapview-webgl","Tried to update attribute data with a pending update"));const t=Object(i.g)();return p("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:t},t.promise}update(){if(this._initialized&&(this._onUpdate(),Object(n.i)(this._pendingAttributeUpdate))){const{data:e,resolver:t}=this._pendingAttributeUpdate,s=Object(n.o)(this._data);for(let i=0;i<e.blocks.length;i++){const t=e.blocks[i],r=s[i];Object(n.a)(r,e=>Object(n.a)(t,t=>{p("Updating block "+i,t),e.update(t)}))}this._pendingAttributeUpdate=null,t()}}bindTextures(e){this.update();const t=this._getDefaultTexture(e);if(!this._initialized)return e.bindTexture(t,u.r),e.bindTexture(t,u.s),e.bindTexture(t,u.t),void e.bindTexture(t,u.u);const s=Object(n.o)(this._data);this._locked&&!this._forceNextUpload||(Object(n.f)(s,t=>t.updateTexture(e)),this._forceNextUpload=!1),e.bindTexture(Object(n.l)(s[0],t,t=>t.getTexture(e)),u.r),e.bindTexture(Object(n.l)(s[1],t,t=>t.getTexture(e)),u.s),e.bindTexture(Object(n.l)(s[2],t,t=>t.getTexture(e)),u.t),e.bindTexture(Object(n.l)(s[3],t,t=>t.getTexture(e)),u.u)}_getDefaultTexture(e){if(Object(n.h)(this._defaultTexture)){const t={wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1};this._defaultTexture=new l.a(e,t,new Uint8Array(4))}return this._defaultTexture}}var v=s(465),y=s(25),w=s(20),x=s(40),O=s(196),S=s(319);function j(e,t){const s=t.length;if(e<t[0].value||1===s)return t[0].size;for(let i=1;i<s;i++)if(e<t[i].value){const s=(e-t[i-1].value)/(t[i].value-t[i-1].value);return t[i-1].size+s*(t[i].size-t[i-1].size)}return t[s-1].size}function z(e,t,s=0){if(Object(n.h)(t))return e[s+0]=0,e[s+1]=0,e[s+2]=0,void(e[s+3]=0);const{r:i,g:r,b:a,a:o}=t;e[s+0]=i*o/255,e[s+1]=r*o/255,e[s+2]=a*o/255,e[s+3]=o}class T{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops;switch(t.type){case"static":return t;case"level-dependent":return Object(n.p)(t.levels[e],()=>{let s=1/0,i=0;for(const n in t.levels){const t=parseFloat(n),r=Math.abs(e-t);r<s&&(s=r,i=t)}if(s===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((e-i)/2),a=Object(n.o)(t.levels[i]),o=new Float32Array(a.values);return o[2]*=r,o[3]*=r,{sizes:Object(n.o)(a.sizes),values:o}})}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){Object(n.i)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,s){switch(Object(n.i)(s)&&s.forEach(e=>this._updateEffects(e)),this._vvInfo=t,e.type){case"dot-density":this._updateDotDensityInfo(e)}}getVariation(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:Object(S.a)().supportsTextureFloat}}getVariationHash(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}_updateEffects(e){Object(n.i)(e)&&e.filter&&e.filter.enabled&&(this.outsideLabelsVisible=e.excludedLabelsVisible)}_updateVisualVariables(e,t){const s=this._vvMaterialParameters;if(s.vvOpacityEnabled=!1,s.vvSizeEnabled=!1,s.vvColorEnabled=!1,s.vvRotationEnabled=!1,!e)return;const i=e.size;if(i){if(s.vvSizeEnabled=!0,i.minMaxValue){const e=i.minMaxValue;let s,r;if(Object(d.n)(e.minSize)&&Object(d.n)(e.maxSize))if(Object(d.o)(e.minSize)&&Object(d.o)(e.maxSize))s=Object(w.d)(e.minSize),r=Object(w.d)(e.maxSize);else{const i=t.scale;s=Object(w.d)(j(i,e.minSize.stops)),r=Object(w.d)(j(i,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,s,r])}if(i.scaleStops&&(this.vvSizeScaleStopsValue=Object(w.d)(j(t.scale,i.scaleStops.stops))),i.unitValue){const e=Object(x.d)(t.spatialReference)/O.a[i.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}i.fieldStops&&(this._vvSizeFieldStops=i.fieldStops)}const r=e.color;r&&(s.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const a=e.opacity;a&&(s.vvOpacityEnabled=!0,this.vvOpacityValues.set(a.values),this.vvOpacities.set(a.opacities));const n=e.rotation;n&&(s.vvRotationEnabled=!0,s.vvRotationType=n.type)}_updateDotDensityInfo(e){const t=e.attributes;this.ddDotValue=e.dotValue,this.ddDotScale=e.referenceScale,this.ddDotSize=e.dotSize,this.ddDotBlending=e.dotBlendingEnabled,this.ddSeed=e.seed;for(let s=0;s<u.g;s++){const e=s>=t.length?new y.a([0,0,0,0]):t[s].color;z(this.ddColors,e,4*s)}for(let s=0;s<8;s++)this.ddActiveDots[s]=s<e.attributes.length?1:0;z(this.ddBackgroundColor,e.backgroundColor)}}class V extends v.a{constructor(e){super(e),this._rendererInfo=new T,this._materialItemsRequestQueue=new r.a,this.attributeView=new m(()=>this.onAttributeStoreUpdate())}destroy(){this.removeAllChildren(),this.children.forEach(e=>e.destroy()),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,s){this._rendererInfo.setInfo(e,t,s),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return null;const s=Object(i.g)();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:s}),this.requestRender(),s.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}createRenderParams(e){return{...super.createRenderParams(e),rendererInfo:this._rendererInfo,attributeView:this.attributeView}}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:s,resolver:i}){const{painter:r,pixelRatio:a}=e,n=t.map(e=>r.textureManager.rasterizeItem(e.symbol,a,e.glyphIds,s));Promise.all(n).then(e=>{if(!this.stage)return void i.reject();const s=e.map((e,s)=>({id:t[s].id,mosaicItem:e}));i.resolve(s)},i.reject)}}},529:function(e,t,s){"use strict";var i=s(3);t.a=class{constructor(e=Number.POSITIVE_INFINITY){this.size=0,this._start=0,this.maxSize=e,this._buffer=isFinite(e)?new Array(e):[]}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return isFinite(this.maxSize)?this._buffer[(this._start+this.size++)%this.maxSize]=e:this._buffer[this._start+this.size++]=e,null}dequeue(){if(0===this.size)return null;const e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}find(e){if(0===this.size)return null;for(const t of this._buffer)if(Object(i.i)(t)&&e(t))return t;return null}clear(e){let t=this.dequeue();for(;Object(i.i)(t);)e&&e(t),t=this.dequeue()}}},711:function(e,t,s){"use strict";var i=s(0),r=(s(6),s(5),s(7),s(1)),a=s(2),n=(s(4),s(8),s(9),s(131));let o=class extends n.a{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",()=>this.notifyChange("updating")),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach(t=>{e=e&&t.isReady}),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};Object(i.a)([Object(r.b)()],o.prototype,"layer",void 0),Object(i.a)([Object(r.b)()],o.prototype,"layerView",void 0),Object(i.a)([Object(r.b)()],o.prototype,"tileInfoView",void 0),Object(i.a)([Object(r.b)()],o.prototype,"updating",null),o=Object(i.a)([Object(a.a)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],o);var h=o;t.a=h},914:function(e,t,s){"use strict";s.r(t);var i=s(0),r=(s(6),s(5),s(7),s(1),s(2)),a=(s(4),s(8),s(9),s(106)),n=s(489),o=s(501),h=s(3),u=s(529),l=s(30),c=s(74),d=s(311),f=s(287),_=s(432),p=s(433),b=s(504);class g{constructor(e){this._head=e,this._cursor=e}static from(e){const t=m.from(new Float32Array(e));return new g(t)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get hasVV(){return this._cursor.hasVV}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(e){return this._cursor.setComputedMinZoom(e)}boundsComputedAnchorX(e){return this._cursor.boundsComputedAnchorX(e)}boundsComputedAnchorY(e){return this._cursor.boundsComputedAnchorY(e)}setBoundsComputedAnchorX(e,t){return this._cursor.setBoundsComputedAnchorX(e,t)}setBoundsComputedAnchorY(e,t){return this._cursor.setBoundsComputedAnchorY(e,t)}boundsCenterX(e){return this._cursor.boundsCenterX(e)}boundsCenterY(e){return this._cursor.boundsCenterY(e)}boundsWidth(e){return this._cursor.boundsWidth(e)}boundsHeight(e){return this._cursor.boundsHeight(e)}link(e){if(Object(h.i)(e._head))return this._cursor.link(e._head)}getCursor(){return this.copy()}copy(){var e;const t=new g(null==(e=this._head)?void 0:e.copy());if(!t._head)return t;let s=t._head,i=t._head._link;for(;i;)s._link=i.copy(),s=i,i=s._link;return t}peekId(){var e;return null!=(e=this._cursor.peekId())?e:this._cursor._link.peekId()}nextId(){const e=this.id;for(;e===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(e){let t=this._head,s=null;for(;t;){if(t.delete(e))return t.isEmpty()&&Object(h.i)(s)&&(s._link=t._link),!0;s=t,t=t._link}return!1}}class m{constructor(e){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=e}static from(e){return new m(new Float32Array(e))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(e){this._buffer[this._offset+0]=e}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get hasVV(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(e){this._buffer[this._offset+8]=e}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(e){return this._buffer[this._offset+10+6*e+0]}boundsComputedAnchorY(e){return this._buffer[this._offset+10+6*e+1]}setBoundsComputedAnchorX(e,t){this._buffer[this._offset+10+6*e+0]=t}setBoundsComputedAnchorY(e,t){this._buffer[this._offset+10+6*e+1]=t}boundsCenterX(e){return this._buffer[this._offset+10+6*e+2]}boundsCenterY(e){return this._buffer[this._offset+10+6*e+3]}boundsWidth(e){return this._buffer[this._offset+10+6*e+4]}boundsHeight(e){return this._buffer[this._offset+10+6*e+5]}link(e){let t=this;for(;t._link;)t=t._link;t._link=e}getCursor(){return this.copy()}copy(){const e=new m(this._buffer);return e._link=this._link,e._offset=this._offset,e._deletedCount=this._deletedCount,e._offsets=this._offsets,e._count=this._count,e}peekId(){const e=this._offset+10+6*this.boundsCount+0;return e>=this._buffer.length?0:this._buffer[e]}next(){let e=0;for(;this._offset<this._buffer.length&&e++<100&&(-1===this._offset?this._offset=0:this._offset+=10+6*this.boundsCount,4294967296===this.id););return 4294967296!==this.id&&this._offset<this._buffer.length}delete(e){const t=this._offset,s=this.lookup(e);if(s)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===e;)this.id=4294967295,++this._deletedCount;return this._offset=t,s}lookup(e){const t=this._offset;if(Object(h.h)(this._offsets.instance)){this._offsets.instance=new Map;const e=this.copy();e._offset=-1;let t=0;for(;e.next();)e.id!==t&&(this._offsets.instance.set(e.id,e._offset),t=e.id)}return!!this._offsets.instance.has(e)&&(this._offset=this._offsets.instance.get(e),4294967296!==this.id||(this._offset=t,!1))}_computeCount(){const e=this._offset;let t=0;for(this._offset=-1;this.next();)t++;return this._offset=e,t}}class v{constructor(e,t){this._buffers=[],this.geometryType=e,this._stage=t}destroy(){this._buffers.forEach(e=>e.release())}insert(e,t){if(!t.records.byteLength)return;"update"===e&&this._buffers.forEach(e=>e.free(t));const s={done:!1,offset:0,vertexData:t};this._buffers.forEach(e=>e.insert(s));let i=1e3;for(;!s.done&&--i;){const e=this._stage.pools.bufferData.acquire(t,this.geometryType,s.offset);e.insert(s),this._buffers.push(e)}}remove(e){this._buffers.forEach(t=>t.freeIds(e))}upload(e){this._buffers.forEach(t=>t.upload(e))}forEachCommand(e){this._buffers.forEach(t=>t.displayList.forEach(e))}}let y=0;class w extends b.a{constructor(e,t,s){super(e,t),this.instanceId=y++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new u.a(100),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=Object(d.a)(),this._store=s}destroy(){super.destroy(),this._renderState.current.geometry.forEach(e=>e.destroy())}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(e){return this._renderState.current.geometry.get(e)}setTransform(e,t){super.setTransform(e,t);const s=this.transforms.labelMat2d,i=e.getScreenTransform(s,t),r=Object(f.a)();Object(l.n)(r,this.coords,i),Object(c.d)(s),Object(c.h)(s,s,r),Object(c.e)(s,e.viewMat2d,s)}patch(e){this.patchCount++,e.clear&&this._lastMessageWasClear||(this._lastMessageWasClear=e.clear,e.clear&&this._patches.size>=50&&this._dropPatches(),this._patches.enqueue(e),this.requestRender())}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let e=0;e<4;e++)this._updateMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=8,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,Object(h.i)(this._renderState.next)&&(this._renderState.current.geometry.forEach(e=>e.destroy()),this._renderState.current=this._renderState.next,this._renderState.next=null))}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap()}_updateMesh(){const e=this._patches.peek();if(Object(h.i)(e)&&e.clear&&null!==this._renderState.next)return;const t=this._patches.dequeue();if(Object(h.i)(t)){if(!0===t.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(t),t.end&&(this.ready(),this._swapRenderStates())}}_patch(e){Object(p.g)(t=>{this._remove(t,e.remove),this._insert(e.type,t,e.addOrUpdate,e.clear)})}_insert(e,t,s,i){try{const r=Object(h.p)(this._renderState.next,this._renderState.current),a=null==s?void 0:s.data[t],n=r.geometry;if(Object(h.h)(a))return;n.has(t)||n.set(t,new v(t,this.stage)),n.get(t).insert(e,a),t===_.d.LABEL&&this._insertLabelMetrics(e,a.metrics,i)}catch(r){}}_insertLabelMetrics(e,t,s){const i=Object(h.p)(this._renderState.next,this._renderState.current);if(Object(h.h)(t))return;const r=g.from(t);if(Object(h.h)(i.metrics))i.metrics=r;else{if("update"===e){const e=r.getCursor();for(;e.next();)i.metrics.delete(e.id)}i.metrics.link(r)}}_remove(e,t){const s=Object(h.p)(this._renderState.next,this._renderState.current).geometry.get(e);t&&t.length&&s&&(s.remove(t),this._removeLabelMetrics(t))}_removeLabelMetrics(e){const{metrics:t}=Object(h.p)(this._renderState.next,this._renderState.current);if(!Object(h.h)(t)&&e.length)for(const s of e)for(;t.delete(s););}_dropPatches(){const e=new Array;let t=!1;for(;this._patches.size;){const s=this._patches.dequeue();if(Object(h.h)(s))break;if(s.clear){if(t)break;t=!0}e.push(s)}this._patches.clear(),e.forEach(e=>this._patches.enqueue(e))}}var x=s(711),O=s(15),S=s(523),j=s(506);class z extends j.a{constructor(e,t,s){super(e),this._pointToCallbacks=new Map,this._layer=s,this._layerView=t}renderChildren(e){this.attributeView.update(),this.hasAnimation&&e.painter.effects.integrate.draw(e,e.attributeView),super.renderChildren(e)}hitTest(e,t){const s=[e,t],i=Object(O.g)();return this._pointToCallbacks.set(s,i),this.requestRender(),i.promise}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){this.contains(e)||this.addChild(e)}doRender(e){const{minScale:t,maxScale:s}=this._layer,i=e.state.scale;i<=(t||1/0)&&i>=s&&super.doRender(e)}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate()}get hasAnimation(){return this.hasLabels}get hasLabels(){const e=this._layer.featureReduction,t=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t}get labelsVisible(){return this._layer.labelsVisible}prepareRenderPasses(e){const t=e.registerRenderPass({name:"label",brushes:[S.a.label],target:()=>this.hasLabels?this.children:null,drawPhase:_.c.LABEL|_.c.LABEL_ALPHA}),s=e.registerRenderPass({name:"geometry",brushes:[S.a.fill,S.a.line,S.a.marker,S.a.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.excluded},{apply:e.effects.insideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.included},{apply:e.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),i=e.registerRenderPass({name:"highlight",brushes:[S.a.fill,S.a.line,S.a.marker,S.a.text],target:()=>this.children,drawPhase:_.c.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(e),s,i,t]}}let T=class extends x.a{install(e){const t=new z(this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t)}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy()}hitTest(e,t){return this.featuresView.hitTest(e,t)}supportsRenderer(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}onConfigUpdate(e){let t=null;if("visualVariables"in e){const s=(Object(o.a)(e).visualVariables||[]).map(e=>{const t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t});t=Object(n.a)(s)}this.featuresView.setRendererInfo(e,t,this.layerView.effects)}onTileData(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach(e=>e.lock())}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach(e=>e.unlock())}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(e){const t=this.tileInfoView.getTileBounds(Object(a.e)(),e);return new w(e,t,this.featuresView.attributeView)}disposeTile(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate()}};T=Object(i.a)([Object(r.a)("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],T);var V=T;t.default=V}}]);
//# sourceMappingURL=52.355a5228.chunk.js.map