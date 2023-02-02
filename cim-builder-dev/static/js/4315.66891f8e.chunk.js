"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[4315],{82582:(e,t,r)=>{r.d(t,{dp:()=>s,yZ:()=>n});var i=r(68860);function n(e,t){const r=t||e.extent,n=e.width,s=(0,i.c9)(r&&r.spatialReference);return r&&n?r.width/n*s*i.hd*96:0}function s(e,t){return e/((0,i.c9)(t)*i.hd*96)}},87072:(e,t,r)=>{function i(e){const t=e.layer;return"floorInfo"in t&&t.floorInfo?.floorField&&"floors"in e.view?s(e.view.floors,t.floorInfo.floorField):null}function n(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?s(e,t.floorInfo.floorField):null}function s(e,t){if(!e?.length)return null;const r=e.filter((e=>""!==e)).map((e=>`'${e}'`));return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}r.d(t,{c:()=>i,f:()=>n})},58132:(e,t,r)=>{r.d(t,{FN:()=>o,QV:()=>s,ac:()=>l});var i=r(92026),n=r(25265);function s(e,t,r){const i=t.flatten((e=>{let{sublayers:t}=e;return t})).length;return i!==e.length||(!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!a(e,t))}function o(e,t,r){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&((0,i.Wi)(t.gdbVersion)||t.gdbVersion===r))||e.originIdOf("renderer")>n.s3.SERVICE||e.originIdOf("labelingInfo")>n.s3.SERVICE||e.originIdOf("opacity")>n.s3.SERVICE||e.originIdOf("labelsVisible")>n.s3.SERVICE}))||!a(e,t)}function a(e,t){if(!e||!e.length||(0,i.Wi)(t))return!0;const r=t.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let n=0;const s=r.length;for(const{id:i}of e){for(;n<s&&r[n]!==i;)n++;if(n>=s)return!1}return!0}function l(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}},83978:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(27366),n=(r(32718),r(25243),r(63780),r(10064),r(93169),r(69912)),s=r(80613),o=r(82022),a=r(8548);let l=class extends o.Z{doRender(e){e.drawPhase===s.jx.HIGHLIGHT&&super.doRender(e)}renderChildren(e){if(this.attributeView.update(),!this.children.some((e=>e.hasData)))return;this.attributeView.bindTextures(e.context),super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(a.lk.COLOR_BUFFER_BIT),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};l=(0,i._)([(0,n.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],l);const u=l},13107:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(27366),n=r(32718),s=r(66978),o=r(94172),a=r(49861),l=(r(25243),r(63780),r(69912));const u=e=>{let t=class extends e{initialize(){this.handles.add((0,o.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,s.D_)(e)||n.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,i._)([(0,a.Cb)()],t.prototype,"layer",void 0),t=(0,i._)([(0,l.j)("esri.layers.mixins.RefreshableLayerView")],t),t}},84848:(e,t,r)=>{r.d(t,{VF:()=>X,Uf:()=>K});var i=r(27366),n=r(52639),s=r(85015),o=r(40281),a=r(10064),l=r(93169),u=r(77427),p=r(92026),c=r(66978),y=r(94172),f=r(68860),d=r(49861),h=r(25243),m=(r(63780),r(69912)),g=r(53866),b=r(82582),w=r(87072);function v(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function x(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,r=0;for(let i=0;i<e.length;i++){const n=e[i].size;"number"==typeof n&&(t+=n,r++)}return t/r}(e.stops):t}function I(e,t){if(!t)return e;const r=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:r,minSize:i}=t;return(x(r,e)+x(i,e))/2}));let i=0;const n=r.length;if(0===n)return e;for(let o=0;o<n;o++)i+=r[o];const s=Math.floor(i/n);return Math.max(s,e)}function _(e){const t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;const i="visualVariables"in t?I(r,t.visualVariables):r;if("simple"===t.type)return v(i,t.symbol);if("unique-value"===t.type){let e=i;return t.uniqueValueInfos?.forEach((t=>{e=v(e,t.symbol)})),e}if("class-breaks"===t.type){let e=i;return t.classBreakInfos.forEach((t=>{e=v(e,t.symbol)})),e}return"dot-density"===t.type||t.type,i}var C=r(76200),S=r(91340),F=r(23084),R=r(76672),O=r(77981),E=r(58132);const V=e=>e.spatialReference.wkid||JSON.stringify(e.spatialReference);function j(e,t){const{dpi:r,gdbVersion:i,geometry:n,geometryPrecision:s,height:o,layerOption:a,mapExtent:l,maxAllowableOffset:u,returnFieldName:c,returnGeometry:y,returnUnformattedValues:f,returnZ:d,spatialReference:h,timeExtent:m,tolerance:g,width:b}=e.toJSON(),{dynamicLayers:w,layerDefs:v,layerIds:x}=N(e),I=t&&(0,p.pC)(t.geometry)?t.geometry:null,_={geometryPrecision:s,maxAllowableOffset:u,returnFieldName:c,returnGeometry:y,returnUnformattedValues:f,returnZ:d,tolerance:g},C=I&&I.toJSON()||n;if(_.imageDisplay=`${b},${o},${r}`,i&&(_.gdbVersion=i),C&&(delete C.spatialReference,_.geometry=JSON.stringify(C),_.geometryType=(0,O.Ji)(C)),h?_.sr=h.wkid||JSON.stringify(h):C&&C.spatialReference?_.sr=V(C):l&&l.spatialReference&&(_.sr=V(l)),_.time=m?[m.start,m.end].join(","):null,l){const{xmin:e,ymin:t,xmax:r,ymax:i}=l;_.mapExtent=`${e},${t},${r},${i}`}return v&&(_.layerDefs=v),w&&!v&&(_.dynamicLayers=w),_.layers="popup"===a?"visible":a,x&&!w&&(_.layers+=`:${x.join(",")}`),_}function N(e){const{mapExtent:t,floors:r,width:i,sublayers:n,layerIds:s,layerOption:o,gdbVersion:a}=e,l=n?.find((e=>null!=e.layer))?.layer?.serviceSublayers,u="popup"===o,c={},y=(0,b.yZ)({extent:t,width:i,spatialReference:t?.spatialReference}),f=[],d=e=>{const t=0===y,r=0===e.minScale||y<=e.minScale,i=0===e.maxScale||y>=e.maxScale;if(e.visible&&(t||r&&i))if(e.sublayers)e.sublayers.forEach(d);else{if(!1===s?.includes(e.id)||u&&(!e.popupTemplate||!e.popupEnabled))return;f.unshift(e)}};if(n?.forEach(d),n&&!f.length)c.layerIds=[];else{const e=(0,E.FN)(f,l,a),t=f.map((e=>{const t=(0,w.f)(r,e);return e.toExportImageJSON(t)}));if(e)c.dynamicLayers=JSON.stringify(t);else{if(n){let e=f.map((e=>{let{id:t}=e;return t}));s&&(e=e.filter((e=>s.includes(e)))),c.layerIds=e}else s?.length&&(c.layerIds=s);const e=function(e,t){const r=!!e?.length,i=t.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return i.length?i.map((t=>{const r=(0,w.f)(e,t),i=(0,R._)(r,t.definitionExpression);return{id:t.id,definitionExpression:(0,p.Pt)(i,void 0)}})):null}(r,f);if((0,p.pC)(e)&&e.length){const t={};for(const r of e)r.definitionExpression&&(t[r.id]=r.definitionExpression);Object.keys(t).length&&(c.layerDefs=JSON.stringify(t))}}}return c}var P,T=r(59486),G=r(62044),Z=r(46784),L=r(78952);let M=P=class extends Z.wq{static from(e){return(0,h.TJ)(P,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};(0,i._)([(0,d.Cb)({type:Number,json:{write:!0}})],M.prototype,"dpi",void 0),(0,i._)([(0,d.Cb)()],M.prototype,"floors",void 0),(0,i._)([(0,d.Cb)({type:String,json:{write:!0}})],M.prototype,"gdbVersion",void 0),(0,i._)([(0,d.Cb)({types:T.qM,json:{read:O.im,write:!0}})],M.prototype,"geometry",void 0),(0,i._)([(0,d.Cb)({type:Number,json:{write:!0}})],M.prototype,"geometryPrecision",void 0),(0,i._)([(0,d.Cb)({type:Number,json:{write:!0}})],M.prototype,"height",void 0),(0,i._)([(0,d.Cb)({type:[Number],json:{write:!0}})],M.prototype,"layerIds",void 0),(0,i._)([(0,d.Cb)({type:["top","visible","all","popup"],json:{write:!0}})],M.prototype,"layerOption",void 0),(0,i._)([(0,d.Cb)({type:g.Z,json:{write:!0}})],M.prototype,"mapExtent",void 0),(0,i._)([(0,d.Cb)({type:Number,json:{write:!0}})],M.prototype,"maxAllowableOffset",void 0),(0,i._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],M.prototype,"returnFieldName",void 0),(0,i._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],M.prototype,"returnGeometry",void 0),(0,i._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],M.prototype,"returnM",void 0),(0,i._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],M.prototype,"returnUnformattedValues",void 0),(0,i._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],M.prototype,"returnZ",void 0),(0,i._)([(0,d.Cb)({type:L.Z,json:{write:!0}})],M.prototype,"spatialReference",void 0),(0,i._)([(0,d.Cb)()],M.prototype,"sublayers",void 0),(0,i._)([(0,d.Cb)({type:G.Z,json:{write:!0}})],M.prototype,"timeExtent",void 0),(0,i._)([(0,d.Cb)({type:Number,json:{write:!0}})],M.prototype,"tolerance",void 0),(0,i._)([(0,d.Cb)({type:Number,json:{write:!0}})],M.prototype,"width",void 0),M=P=(0,i._)([(0,m.j)("esri.rest.support.IdentifyParameters")],M);const A=M;var U=r(38511),H=r(31201),k=r(27823);let J=class extends Z.wq{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return n.Z.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:r,geometry:i}=e;r&&(t.attributes={...r}),(0,p.pC)(i)&&(t.geometry=i.toJSON(),t.geometryType=k.P.toJSON(i.type))}};(0,i._)([(0,d.Cb)({type:String,json:{write:!0}})],J.prototype,"displayFieldName",void 0),(0,i._)([(0,d.Cb)({type:n.Z})],J.prototype,"feature",void 0),(0,i._)([(0,U.r)("feature",["attributes","geometry"])],J.prototype,"readFeature",null),(0,i._)([(0,H.c)("feature")],J.prototype,"writeFeature",null),(0,i._)([(0,d.Cb)({type:Number,json:{write:!0}})],J.prototype,"layerId",void 0),(0,i._)([(0,d.Cb)({type:String,json:{write:!0}})],J.prototype,"layerName",void 0),J=(0,i._)([(0,m.j)("esri.rest.support.IdentifyResult")],J);const $=J;async function Q(e,t,r){const i=(t=function(e){return A.from(e)}(t)).geometry?[t.geometry]:[],n=(0,F.en)(e);return n.path+="/identify",(0,S.aX)(i).then((e=>{const i=j(t,{geometry:e&&e[0]}),s=(0,F.cv)({...n.query,f:"json",...i}),o=(0,F.lA)(s,r);return(0,C.default)(n.path,o).then(q).then((e=>function(e,t){if(!t?.length)return e;const r=new Map;function i(e){r.set(e.id,e),e.sublayers&&e.sublayers.forEach(i)}t.forEach(i);for(const n of e.results)n.feature.sourceLayer=r.get(n.layerId);return e}(e,t.sublayers)))}))}function q(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((e=>$.fromJSON(e))),t}var z=r(819),D=r(16072),B=r(24405);let W=null;function K(e,t){return"tile"===t.type||"map-image"===t.type}let X=class extends s.Z{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=(0,c.Ds)((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}))}initialize(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([(0,y.on)((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})])}async fetchPopupFeatures(e,t){const{layerView:{layer:r,view:{scale:i}}}=this;if(!e)throw new a.Z("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:r});const n=function(e,t,r){const i=[],n=e=>{const s=0===e.minScale||t<=e.minScale,o=0===e.maxScale||t>=e.maxScale;if(e.visible&&s&&o)if(e.sublayers)e.sublayers.forEach(n);else if(e.popupEnabled){const t=(0,B.V)(e,{...r,defaultPopupTemplateEnabled:!1});(0,p.pC)(t)&&i.unshift({sublayer:e,popupTemplate:t})}};return(e?.toArray()??[]).reverse().map(n),i}(r.sublayers,i,t);if(!n.length)return[];const s=await async function(e,t){if(e.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(t.map((e=>{let{sublayer:t}=e;return t.load().then((()=>t.capabilities.operations.supportsQuery))})))}catch{return!1}}(r,n);if(!((r.capabilities?.operations?.supportsIdentify??1)&&r.version>=10.5)&&!s)throw new a.Z("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:r});return s?this._fetchPopupFeaturesUsingQueries(e,n,t):this._fetchPopupFeaturesUsingIdentify(e,n,t)}clearHighlights(){this.highlightGraphics?.removeAll()}highlight(e){const t=this.highlightGraphics;if(!t)return{remove(){}};let r=null;if(e instanceof n.Z?r=[e]:o.Z.isCollection(e)&&e.length>0?r=e.toArray():Array.isArray(e)&&e.length>0&&(r=e),r=r?.filter(p.pC),!r||!r.length)return{remove:()=>{}};for(const i of r){const e=i.sourceLayer;null!=e&&"geometryType"in e&&"point"===e.geometryType&&(i.visible=!1)}return t.addMany(r),{remove:()=>{t.removeMany(r??[])}}}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:i,highlightGraphicUpdated:n}=this;if(i&&n)for(const s of e){const e=s.sourceLayer&&"renderer"in s.sourceLayer&&s.sourceLayer.renderer;s.sourceLayer&&"geometryType"in s.sourceLayer&&"point"===s.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(s).then((async o=>{o||(o=new D.Z);let a=null;const l="visualVariables"in e?e.visualVariables?.find((e=>"size"===e.type)):void 0;l&&(W||(W=(await Promise.resolve().then(r.bind(r,56011))).getSize),a=W(l,s,{view:t.type,scale:t.scale,shape:"simple-marker"===o.type?o.style:null})),a||(a="width"in o&&"height"in o&&null!=o.width&&null!=o.height?Math.max(o.width,o.height):"size"in o?o.size:16),i.includes(s)&&(s.symbol=new D.Z({style:"square",size:a,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),n(s,"symbol"),s.visible=!0)}))}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:r},highlightGraphics:i,highlightGraphicUpdated:n}=this;if(this._highlightGeometriesResolution=e,!n||!i?.length||!t.capabilities.operations.supportsQuery)return;const s=this._getTargetResolution(e),o=new Map;for(const p of i)if(!this._featuresResolutions.has(p)||this._featuresResolutions.get(p)>s){const e=p.sourceLayer;(0,u.s1)(o,e,(()=>new Map)).set(p.getObjectId(),p)}const a=Array.from(o,(e=>{let[t,i]=e;const n=t.createQuery();return n.objectIds=[...i.keys()],n.outFields=[t.objectIdField],n.returnGeometry=!0,n.maxAllowableOffset=s,n.outSpatialReference=r.spatialReference,t.queryFeatures(n)})),l=await Promise.all(a);if(!this.destroyed)for(const{features:u}of l)for(const e of u){const t=e.sourceLayer,r=o.get(t).get(e.getObjectId());r&&i.includes(r)&&(r.geometry=e.geometry,n(r,"geometry"),this._featuresResolutions.set(r,s))}}_getTargetResolution(e){const t=e*(0,f.c9)(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r}async _fetchPopupFeaturesUsingIdentify(e,t,r){const i=await this._createIdentifyParameters(e,t,r);if((0,p.Wi)(i))return[];const{results:n}=await Q(this.layerView.layer.parsedUrl,i);return n.map((e=>e.feature))}async _createIdentifyParameters(e,t,r){const{floors:i,layer:n,timeExtent:s,view:{spatialReference:o,scale:a}}=this.layerView,u=(0,p.pC)(r)?r.event:null;if(!t.length)return null;await Promise.all(t.map((e=>{let{sublayer:t}=e;return t.load().catch((()=>{}))})));const c=Math.min((0,l.Z)("mapservice-popup-identify-max-tolerance"),n.allSublayers.reduce(((e,t)=>t.renderer?_({renderer:t.renderer,event:u}):e),2)),y=this.createFetchPopupFeaturesQueryGeometry(e,c),f=(0,b.dp)(a,o),d=Math.round(y.width/f),h=new g.Z({xmin:y.center.x-f*d,ymin:y.center.y-f*d,xmax:y.center.x+f*d,ymax:y.center.y+f*d,spatialReference:y.spatialReference});return new A({floors:i,gdbVersion:"gdbVersion"in n?n.gdbVersion:void 0,geometry:e,height:d,layerOption:"popup",mapExtent:h,returnGeometry:!0,spatialReference:o,sublayers:n.sublayers,timeExtent:s,tolerance:c,width:d})}async _fetchPopupFeaturesUsingQueries(e,t,r){const{layerView:{floors:i,timeExtent:n}}=this,s=(0,p.pC)(r)?r.event:null,o=t.map((async t=>{let{sublayer:r,popupTemplate:o}=t;if(await r.load().catch((()=>{})),r.capabilities&&!r.capabilities.operations.supportsQuery)return[];const a=r.createQuery(),l=_({renderer:r.renderer,event:s}),u=this.createFetchPopupFeaturesQueryGeometry(e,l);if(a.geometry=u,a.outFields=await(0,B.e)(r,o),a.timeExtent=n,i){const e=i.clone(),t=(0,w.f)(e,r);(0,p.pC)(t)&&(a.where=a.where?`(${a.where}) AND (${t})`:t)}const c=this._getTargetResolution(u.width/l),y=await function(e){return e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,z.LC)():Promise.resolve()}(o),f="point"===r.geometryType||y&&y.arcadeUtils.hasGeometryOperations(o);f||(a.maxAllowableOffset=c);let{features:d}=await r.queryFeatures(a);const h=f?0:c;d=await async function(e,t){const r=e.renderer;return r&&"defaultSymbol"in r&&!r.defaultSymbol&&(t=r.valueExpression?await Promise.all(t.map((e=>r.getSymbolAsync(e).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=r.getSymbol(e)))),t}(r,d);for(const e of d)this._featuresResolutions.set(e,h);return d}));return(await(0,c.as)(o)).reverse().reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}};(0,i._)([(0,d.Cb)({constructOnly:!0})],X.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),(0,i._)([(0,d.Cb)({constructOnly:!0})],X.prototype,"layerView",void 0),(0,i._)([(0,d.Cb)({constructOnly:!0})],X.prototype,"highlightGraphics",void 0),(0,i._)([(0,d.Cb)({constructOnly:!0})],X.prototype,"highlightGraphicUpdated",void 0),(0,i._)([(0,d.Cb)({constructOnly:!0})],X.prototype,"updatingHandles",void 0),X=(0,i._)([(0,m.j)("esri.views.layers.support.MapService")],X)},24405:(e,t,r)=>{r.d(t,{V:()=>o,e:()=>s});var i=r(92026),n=r(80031);async function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if((0,i.Wi)(t))return[];const r=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:s}=t,{objectIdField:o,typeIdField:a,globalIdField:l,relationships:u}=e;if(r.includes("*"))return["*"];const p=s?await(0,n.CH)(e):[],c=(0,n.Q0)(e.fieldsIndex,[...r,...p]);return a&&c.push(a),c&&o&&e.fieldsIndex?.has(o)&&!c.includes(o)&&c.push(o),c&&l&&e.fieldsIndex?.has(l)&&!c.includes(l)&&c.push(l),u&&u.forEach((t=>{const{keyField:r}=t;c&&r&&e.fieldsIndex?.has(r)&&!c.includes(r)&&c.push(r)})),c}function o(e,t){return e.popupTemplate?e.popupTemplate:(0,i.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,i.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},45008:(e,t,r)=>{r.d(t,{K:()=>o});r(59486);var i=r(92026),n=r(68860),s=r(53866);function o(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new s.Z,a=0;if("2d"===r.type)a=t*(r.resolution??0);else if("3d"===r.type){const s=r.overlayPixelSizeInMapUnits(e),o=r.basemapSpatialReference;a=(0,i.pC)(o)&&!o.equals(r.spatialReference)?(0,n.c9)(o)/(0,n.c9)(r.spatialReference):t*s}const l=e.x-a,u=e.y-a,p=e.x+a,c=e.y+a,{spatialReference:y}=r;return o.xmin=Math.min(l,p),o.ymin=Math.min(u,c),o.xmax=Math.max(l,p),o.ymax=Math.max(u,c),o.spatialReference=y,o}new s.Z}}]);
//# sourceMappingURL=4315.66891f8e.chunk.js.map