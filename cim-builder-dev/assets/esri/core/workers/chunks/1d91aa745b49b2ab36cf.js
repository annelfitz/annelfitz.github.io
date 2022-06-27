"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2399],{47988:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(43697),n=r(3920),o=r(5600),i=(r(67676),r(80442),r(75215),r(52011));let a=class extends n.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,s._)([(0,o.Cb)({readOnly:!0})],a.prototype,"supportsTileUpdates",null),(0,s._)([(0,o.Cb)({constructOnly:!0})],a.prototype,"remoteClient",void 0),(0,s._)([(0,o.Cb)({constructOnly:!0})],a.prototype,"service",void 0),(0,s._)([(0,o.Cb)()],a.prototype,"spatialReference",null),(0,s._)([(0,o.Cb)({constructOnly:!0})],a.prototype,"tileInfo",void 0),(0,s._)([(0,o.Cb)({constructOnly:!0})],a.prototype,"tileStore",void 0),a=(0,s._)([(0,i.j)("esri.views.2d.layers.features.processors.BaseProcessor")],a);const l=a},12399:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var s=r(43697),n=(r(80442),r(70586)),o=(r(92604),r(75215),r(67676),r(37697),r(52011)),i=r(22862);r(22021),(()=>{if(!("document"in globalThis))return()=>null;const e=document.createElement("canvas");e.getContext("2d");e.height=512,e.width=1})();var a=r(16534),l=r(47988),d=r(14867);class c{constructor(e,t){this.offset=e,this.extent=t}}let u=class extends l.Z{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const r=t.schema.processors[0];"heatmap"===r.type&&(0,i.Hg)(this._schema,r)&&(e.mesh=!0,this._schema=r)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,t,r){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const s=this._tileKeyToFeatureSets.get(e.key.id);if((0,n.pC)(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&s.set(t.addOrUpdate.instance,t),t.end){const t=[],s=function(e){const t=e.key,r=new Map,s=256,n=a.I_,o=e.tileInfoView.tileInfo.isWrappable;return r.set((0,d.M)(t,-1,-1,o).id,new c([-n,-n],[n-s,n-s,n,n])),r.set((0,d.M)(t,0,-1,o).id,new c([0,-n],[0,n-s,n,n])),r.set((0,d.M)(t,1,-1,o).id,new c([n,-n],[0,n-s,s,n])),r.set((0,d.M)(t,-1,0,o).id,new c([-n,0],[n-s,0,n,n])),r.set((0,d.M)(t,1,0,o).id,new c([n,0],[0,0,s,n])),r.set((0,d.M)(t,-1,1,o).id,new c([-n,n],[n-s,0,n,s])),r.set((0,d.M)(t,0,1,o).id,new c([0,n],[0,0,n,s])),r.set((0,d.M)(t,1,1,o).id,new c([n,n],[0,0,s,s])),r}(e);this._tileKeyToFeatureSets.forEach(((r,o)=>{if(o===e.key.id)r.forEach((e=>(0,n.yw)(e.addOrUpdate,(e=>t.push(e)))));else if(s.has(o)){const e=s.get(o),[i,a]=e.offset;r.forEach((e=>(0,n.yw)(e.addOrUpdate,(e=>{const r=e.transform(i,a,1,1);t.push(r)}))))}}));const o=function(e,t,r,s){const{blurRadius:n,fieldOffset:o,field:i}=t,a=new Float64Array(512*r),l=function(e,t,r){const s=Math.round(3*t),n=r?.halfKernel?s+1:2*s+1,o=r?.channels??1,i=new e(n*o),a=1/(2*t*t),l=t/(2*Math.sqrt(2*Math.PI)),d=r?.halfKernel?s:0;for(let e=0;e<n;e++){const t=Math.exp(-((e+d-s)**2)*a)*l;for(let r=0;r<o;r++)i[e*o+r]=t}return i}(Float64Array,n),d=Math.round(3*n);let c,u=Number.NEGATIVE_INFINITY;const h=function(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):r=>+r.readAttribute(e)+t:e=>1}(i,o),p=new Set;for(const t of e){const e=t.getCursor();for(;e.next();){const t=e.getObjectId();if(p.has(t))continue;p.add(t);const s=e.readLegacyPointGeometry(),n=128;if(s.x<-n||s.x>=r+n||s.y<-n||s.y>512+n)continue;const o=+h(e),i=Math.round(s.x)-d,f=Math.round(s.y)-d,y=Math.max(0,i),m=Math.max(0,f),w=Math.min(512,Math.round(s.y)+d),M=Math.min(r,Math.round(s.x)+d);for(let e=m;e<w;e++){const t=l[e-f];for(let s=y;s<M;s++){const n=l[s-i];c=a[e*r+s]+=t*n*o,c>u&&(u=c)}}}}return{matrix:a.buffer,max:u}}(t,this._schema.mesh,512),i={tileKey:e.key.id,intensityInfo:o},l=[o.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",i,{...r,transferList:l})}}onTileError(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}};u=(0,s._)([(0,o.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],u);const h=u},14867:(e,t,r)=>{function s(e,t,r,s){const n=e.clone(),o=1<<n.level,i=n.col+t,a=n.row+r;return s&&i<0?(n.col=i+o,n.world-=1):i>=o?(n.col=i-o,n.world+=1):n.col=i,n.row=a,n}r.d(t,{M:()=>s}),r(3651)}}]);