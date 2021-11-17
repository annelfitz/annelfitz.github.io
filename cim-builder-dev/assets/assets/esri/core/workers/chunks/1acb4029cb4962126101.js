"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2894],{42894:(e,t,n)=>{n.d(t,{Up:()=>ie,Bm:()=>pe,iQ:()=>ue,kR:()=>ee,Gb:()=>te,zD:()=>ne,iV:()=>re,CM:()=>Pe,oj:()=>oe,KC:()=>ce,Wt:()=>le});var r=n(20102),o=n(22021),s=n(70586),i=n(95330),u=n(67900),l=n(52138),_=(n(17896),n(65617)),c=n(6570),a=n(65091),P=n(99880),f=n(80442);let p,E=null;function g(){return!!E}function h(){return p||(p=n.e(6774).then(n.bind(n,66774)).then((function(e){return e.p})).then((({default:e})=>e({locateFile:e=>(0,P.V)(`esri/geometry/support/${e}`)}))).then((e=>{C(e)})),p)}var d,T,M,S;!function(e){function t(e,t,n){E.ensureCache.prepare();const r=U(n),o=n===r,s=E.ensureFloat64(r),i=E._pe_geog_to_proj(E.getPointer(e),t,s);return i&&F(n,t,s,o),i}function n(e,t,n){return r(e,t,n,0)}function r(e,t,n,r){E.ensureCache.prepare();const o=U(n),s=n===o,i=E.ensureFloat64(o),u=E._pe_proj_to_geog_center(E.getPointer(e),t,i,r);return u&&F(n,t,i,s),u}e.geogToProj=t,e.projGeog=function(e,r,o,s){switch(s){case T.PE_TRANSFORM_P_TO_G:return n(e,r,o);case T.PE_TRANSFORM_G_TO_P:return t(e,r,o)}return 0},e.projToGeog=n,e.projToGeogCenter=r}(d||(d={})),(S=T||(T={})).init=function(){S.PE_BUFFER_MAX=E.PeDefs.prototype.PE_BUFFER_MAX,S.PE_NAME_MAX=E.PeDefs.prototype.PE_NAME_MAX,S.PE_MGRS_MAX=E.PeDefs.prototype.PE_MGRS_MAX,S.PE_USNG_MAX=E.PeDefs.prototype.PE_USNG_MAX,S.PE_DD_MAX=E.PeDefs.prototype.PE_DD_MAX,S.PE_DDM_MAX=E.PeDefs.prototype.PE_DDM_MAX,S.PE_DMS_MAX=E.PeDefs.prototype.PE_DMS_MAX,S.PE_UTM_MAX=E.PeDefs.prototype.PE_UTM_MAX,S.PE_PARM_MAX=E.PeDefs.prototype.PE_PARM_MAX,S.PE_TYPE_NONE=E.PeDefs.prototype.PE_TYPE_NONE,S.PE_TYPE_GEOGCS=E.PeDefs.prototype.PE_TYPE_GEOGCS,S.PE_TYPE_PROJCS=E.PeDefs.prototype.PE_TYPE_PROJCS,S.PE_TYPE_GEOGTRAN=E.PeDefs.prototype.PE_TYPE_GEOGTRAN,S.PE_TYPE_COORDSYS=E.PeDefs.prototype.PE_TYPE_COORDSYS,S.PE_TYPE_UNIT=E.PeDefs.prototype.PE_TYPE_UNIT,S.PE_TYPE_LINUNIT=E.PeDefs.prototype.PE_TYPE_LINUNIT,S.PE_STR_OPTS_NONE=E.PeDefs.prototype.PE_STR_OPTS_NONE,S.PE_STR_AUTH_NONE=E.PeDefs.prototype.PE_STR_AUTH_NONE,S.PE_STR_AUTH_TOP=E.PeDefs.prototype.PE_STR_AUTH_TOP,S.PE_STR_NAME_CANON=E.PeDefs.prototype.PE_STR_NAME_CANON,S.PE_PARM_X0=E.PeDefs.prototype.PE_PARM_X0,S.PE_PARM_ND=E.PeDefs.prototype.PE_PARM_ND,S.PE_TRANSFORM_1_TO_2=E.PeDefs.prototype.PE_TRANSFORM_1_TO_2,S.PE_TRANSFORM_2_TO_1=E.PeDefs.prototype.PE_TRANSFORM_2_TO_1,S.PE_TRANSFORM_P_TO_G=E.PeDefs.prototype.PE_TRANSFORM_P_TO_G,S.PE_TRANSFORM_G_TO_P=E.PeDefs.prototype.PE_TRANSFORM_G_TO_P,S.PE_HORIZON_RECT=E.PeDefs.prototype.PE_HORIZON_RECT,S.PE_HORIZON_POLY=E.PeDefs.prototype.PE_HORIZON_POLY,S.PE_HORIZON_LINE=E.PeDefs.prototype.PE_HORIZON_LINE,S.PE_HORIZON_DELTA=E.PeDefs.prototype.PE_HORIZON_DELTA},function(e){const t={},n={},r=e=>{if(e){const t=e.getType();switch(t){case T.PE_TYPE_GEOGCS:e=E.castObject(e,E.PeGeogcs);break;case T.PE_TYPE_PROJCS:e=E.castObject(e,E.PeProjcs);break;case T.PE_TYPE_GEOGTRAN:e=E.castObject(e,E.PeGeogtran);break;default:t&T.PE_TYPE_UNIT&&(e=E.castObject(e,E.PeUnit))}}return e};function o(e,n){let o=null,s=t[e];if(s||(s={},t[e]=s),s.hasOwnProperty(String(n)))o=s[n];else{const t=E.PeFactory.prototype.factoryByType(e,n);E.compare(t,E.NULL)||(o=t,s[n]=o)}return o=r(o),o}e.initialize=function(){E.PeFactory.prototype.initialize(null)},e.coordsys=function(e){return o(T.PE_TYPE_COORDSYS,e)},e.factoryByType=o,e.fromString=function(e,t){let o=null,s=n[e];if(s||(s={},n[e]=s),s.hasOwnProperty(t))o=s[t];else{const n=E.PeFactory.prototype.fromString(e,t);E.compare(n,E.NULL)||(o=n,s[t]=o)}return o=r(o),o},e.geogcs=function(e){return o(T.PE_TYPE_GEOGCS,e)},e.geogtran=function(e){return o(T.PE_TYPE_GEOGTRAN,e)},e.getCode=function(e){return E.PeFactory.prototype.getCode(e)},e.projcs=function(e){return o(T.PE_TYPE_PROJCS,e)},e.unit=function(e){return o(T.PE_TYPE_UNIT,e)}}(M||(M={}));let y=null;var O,R,N,A,m,I,w,G,D;function C(e){function t(e,t,n){e[t]=n(e[t])}E=e,T.init(),O.init(),m.init(),w.init(),G.init(),y=class extends E.PeGCSExtent{destroy(){E.destroy(this)}};const n=[E.PeDatum,E.PeGeogcs,E.PeGeogtran,E.PeObject,E.PeParameter,E.PePrimem,E.PeProjcs,E.PeSpheroid,E.PeUnit];for(const e of n)t(e.prototype,"getName",(e=>function(){return e.call(this,new Array(T.PE_NAME_MAX))}));for(const e of[E.PeGeogtran,E.PeProjcs])t(e.prototype,"getParameters",(e=>function(){const t=new Array(T.PE_PARM_MAX);let n=e.call(this);for(let e=0;e<t.length;e++){const r=E.getValue(n,"*");t[e]=r?E.wrapPointer(r,E.PeParameter):null,n+=Int32Array.BYTES_PER_ELEMENT}return t}));t(E.PeHorizon.prototype,"getCoord",(e=>function(){const t=this.getSize();if(!t)return null;const n=[];return F(n,t,e.call(this)),n})),t(E.PeGTlistExtendedEntry.prototype,"getEntries",(e=>{const t=E._pe_getPeGTlistExtendedGTsSize();return function(){let n=null;const r=e.call(this);if(!E.compare(r,E.NULL)){n=[r];const e=this.getSteps();if(e>1){const o=E.getPointer(r);for(let r=1;r<e;r++)n.push(E.wrapPointer(o+t*r,E.PeGTlistExtendedGTs))}}return n}}));const r=E._pe_getPeHorizonSize(),o=e=>function(){let t=this._cache;if(t||(t=new Map,this._cache=t),t.has(e))return t.get(e);let n=null;const o=e.call(this);if(!E.compare(o,E.NULL)){n=[o];const e=o.getNump();if(e>1){const t=E.getPointer(o);for(let o=1;o<e;o++)n.push(E.wrapPointer(t+r*o,E.PeHorizon))}}return t.set(e,n),n};t(E.PeProjcs.prototype,"horizonGcsGenerate",o),t(E.PeProjcs.prototype,"horizonPcsGenerate",o),E.PeObject.prototype.toString=function(e=T.PE_STR_OPTS_NONE){E.ensureCache.prepare();const t=E.getPointer(this),n=E.ensureInt8(new Array(T.PE_BUFFER_MAX));return E.UTF8ToString(E._pe_object_to_string_ext(t,e,n))}}function k(e){if(!e)return;const t=E.getClass(e);if(!t)return;const n=E.getCache(t);if(!n)return;const r=E.getPointer(e);r&&delete n[r]}function v(e,t){const n=[],r=new Array(t);for(let t=0;t<e;t++)n.push(E.ensureInt8(r));return n}function U(e){let t;return Array.isArray(e[0])?(t=[],e.forEach((e=>{t.push(e[0],e[1])}))):t=e,t}function F(e,t,n,r=!1){if(r)for(let r=0;r<2*t;r++)e[r]=E.getValue(n+r*Float64Array.BYTES_PER_ELEMENT,"double");else{const r=0===e.length;for(let o=0;o<t;o++)r&&(e[o]=new Array(2)),e[o][0]=E.getValue(n,"double"),e[o][1]=E.getValue(n+Float64Array.BYTES_PER_ELEMENT,"double"),n+=2*Float64Array.BYTES_PER_ELEMENT}}!function(e){let t;e.init=function(){e.PE_GTLIST_OPTS_COMMON=E.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,t=E._pe_getPeGTlistExtendedEntrySize()},e.getGTlist=function(e,n,r,o,s,i){let u=null;const l=new E.PeInteger(i);try{const _=E.PeGTlistExtended.prototype.getGTlist(e,n,r,o,s,l);if((i=l.val)&&(u=[_],i>1)){const e=E.getPointer(_);for(let n=1;n<i;n++)u.push(E.wrapPointer(e+t*n,E.PeGTlistExtendedEntry))}}finally{E.destroy(l)}return u}}(O||(O={})),function(e){e.destroy=function(e){if(e&&e.length){for(const t of e)k(t),t.getEntries().forEach((e=>{k(e);const t=e.getGeogtran();k(t),t.getParameters().forEach(k),[t.getGeogcs1(),t.getGeogcs2()].forEach((e=>{k(e);const t=e.getDatum();k(t),k(t.getSpheroid()),k(e.getPrimem()),k(e.getUnit())}))}));E.PeGTlistExtendedEntry.prototype.Delete(e[0])}}}(R||(R={})),function(e){e.geogToGeog=function(e,t,n,r,o){E.ensureCache.prepare();const s=U(n),i=n===s,u=E.ensureFloat64(s);let l=0;r&&(l=E.ensureFloat64(r));const _=E._pe_geog_to_geog(E.getPointer(e),t,u,l,o);return _&&F(n,t,u,i),_}}(N||(N={})),function(e){const t=(e,t,n,r,o,s)=>{let i,u;switch(E.ensureCache.prepare(),e){case"dd":i=E._pe_geog_to_dd,u=T.PE_DD_MAX;break;case"ddm":i=E._pe_geog_to_ddm,u=T.PE_DDM_MAX;break;case"dms":i=E._pe_geog_to_dms,u=T.PE_DMS_MAX}let l=0;t&&(l=E.getPointer(t));const _=U(r),c=E.ensureFloat64(_),a=v(n,u),P=i(l,n,c,o,E.ensureInt32(a));if(P)for(let e=0;e<n;e++)s[e]=E.UTF8ToString(a[e]);return P},n=(e,t,n,r,o)=>{let s;switch(E.ensureCache.prepare(),e){case"dd":s=E._pe_dd_to_geog;break;case"ddm":s=E._pe_ddm_to_geog;break;case"dms":s=E._pe_dms_to_geog}let i=0;t&&(i=E.getPointer(t));const u=r.map((e=>E.ensureString(e))),l=E.ensureInt32(u),_=E.ensureFloat64(new Array(2*n)),c=s(i,n,l,_);return c&&F(o,n,_),c};e.geog_to_dms=function(e,n,r,o,s){return t("dms",e,n,r,o,s)},e.dms_to_geog=function(e,t,r,o){return n("dms",e,t,r,o)},e.geog_to_ddm=function(e,n,r,o,s){return t("ddm",e,n,r,o,s)},e.ddm_to_geog=function(e,t,r,o){return n("ddm",e,t,r,o)},e.geog_to_dd=function(e,n,r,o,s){return t("dd",e,n,r,o,s)},e.dd_to_geog=function(e,t,r,o){return n("dd",e,t,r,o)}}(A||(A={})),function(e){e.init=function(){e.PE_MGRS_STYLE_NEW=E.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,e.PE_MGRS_STYLE_OLD=E.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,e.PE_MGRS_STYLE_AUTO=E.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,e.PE_MGRS_180_ZONE_1_PLUS=E.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,e.PE_MGRS_ADD_SPACES=E.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES},e.geog_to_mgrs_extended=function(e,t,n,r,o,s,i){E.ensureCache.prepare();let u=0;e&&(u=E.getPointer(e));const l=U(n),_=E.ensureFloat64(l),c=v(t,T.PE_MGRS_MAX),a=E.ensureInt32(c),P=E._pe_geog_to_mgrs_extended(u,t,_,r,o,s,a);if(P)for(let e=0;e<t;e++)i[e]=E.UTF8ToString(c[e]);return P},e.mgrs_to_geog_extended=function(e,t,n,r,o){E.ensureCache.prepare();let s=0;e&&(s=E.getPointer(e));const i=n.map((e=>E.ensureString(e))),u=E.ensureInt32(i),l=E.ensureFloat64(new Array(2*t)),_=E._pe_mgrs_to_geog_extended(s,t,u,r,l);return _&&F(o,t,l),_}}(m||(m={})),function(e){e.geog_to_usng=function(e,t,n,r,o,s,i){E.ensureCache.prepare();let u=0;e&&(u=E.getPointer(e));const l=U(n),_=E.ensureFloat64(l),c=v(t,T.PE_MGRS_MAX),a=E.ensureInt32(c),P=E._pe_geog_to_usng(u,t,_,r,o,s,a);if(P)for(let e=0;e<t;e++)i[e]=E.UTF8ToString(c[e]);return P},e.usng_to_geog=function(e,t,n,r){E.ensureCache.prepare();let o=0;e&&(o=E.getPointer(e));const s=n.map((e=>E.ensureString(e))),i=E.ensureInt32(s),u=E.ensureFloat64(new Array(2*t)),l=E._pe_usng_to_geog(o,t,i,u);return l&&F(r,t,u),l}}(I||(I={})),function(e){e.init=function(){e.PE_UTM_OPTS_NONE=E.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,e.PE_UTM_OPTS_ADD_SPACES=E.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,e.PE_UTM_OPTS_NS=E.PeNotationUtm.prototype.PE_UTM_OPTS_NS},e.geog_to_utm=function(e,t,n,r,o){E.ensureCache.prepare();let s=0;e&&(s=E.getPointer(e));const i=U(n),u=E.ensureFloat64(i),l=v(t,T.PE_UTM_MAX),_=E.ensureInt32(l),c=E._pe_geog_to_utm(s,t,u,r,_);if(c)for(let e=0;e<t;e++)o[e]=E.UTF8ToString(l[e]);return c},e.utm_to_geog=function(e,t,n,r,o){E.ensureCache.prepare();let s=0;e&&(s=E.getPointer(e));const i=n.map((e=>E.ensureString(e))),u=E.ensureInt32(i),l=E.ensureFloat64(new Array(2*t)),_=E._pe_utm_to_geog(s,t,u,r,l);return _&&F(o,t,l),_}}(w||(w={})),function(e){const t=new Map;e.init=function(){e.PE_PCSINFO_OPTION_NONE=E.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,e.PE_PCSINFO_OPTION_DOMAIN=E.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,e.PE_POLE_OUTSIDE_BOUNDARY=E.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,e.PE_POLE_POINT=E.PePCSInfo.prototype.PE_POLE_POINT},e.generate=function(n,r=e.PE_PCSINFO_OPTION_DOMAIN){let o,s;return t.has(n)&&(s=t.get(n),s[r]&&(o=s[r])),o||(o=E.PePCSInfo.prototype.generate(n,r),s||(s=[],t.set(n,s)),s[r]=o),o}}(G||(G={})),function(e){e.version_string=function(){return E.PeVersion.prototype.version_string()}}(D||(D={}));var Y=Object.freeze({__proto__:null,get _pe(){return E},isLoaded:g,isSupported:function(){return!!(0,f.Z)("esri-wasm")},load:h,get PeCSTransformations(){return d},get PeDefs(){return T},get PeFactory(){return M},get PeGCSExtent(){return y},get PeGTlistExtended(){return O},get PeGTlistExtendedEntry(){return R},get PeGTTransformations(){return N},get PeNotationDms(){return A},get PeNotationMgrs(){return m},get PeNotationUsng(){return I},get PeNotationUtm(){return w},get PePCSInfo(){return G},get PeVersion(){return D},_init:C}),j=n(13473),x=n(17332),L=n(58901),Z=n(24678),X=(n(24470),n(68441));Math.PI;const b=X.sv.radius,W=X.sv.eccentricitySquared,z={a1:b*W,a2:b*W*b*W,a3:b*W*W/2,a4:b*W*b*W*2.5,a5:b*W+b*W*W/2,a6:1-W};X.sv.radius,X.sv.flattening,X.Z1.radius,X.Z1.flattening,X.yr.radius,X.yr.flattening,X.yr.radius;let H=0;class B{constructor(e=null){this.uid=H++,e?(this._wkt=void 0!==e.wkt?e.wkt:null,this._wkid=void 0!==e.wkid?e.wkid:-1,this._isInverse=void 0!==e.isInverse&&!0===e.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}static fromGE(e){const t=new B;return t._wkt=e.wkt,t._wkid=e.wkid,t._isInverse=e.isInverse,t}get wkt(){return this._wkt}set wkt(e){this._wkt=e,this.uid=H++}get wkid(){return this._wkid}set wkid(e){this._wkid=e,this.uid=H++}get isInverse(){return this._isInverse}set isInverse(e){this._isInverse=e,this.uid=H++}getInverse(){const e=new B;return e._wkt=this.wkt,e._wkid=this._wkid,e._isInverse=!this.isInverse,e}}class V{constructor(e){if(this.steps=[],this._cached_projection={},this._chain="",this._gtlistentry=null,e&&e.steps)for(const t of e.steps)t instanceof B?this.steps.push(t):this.steps.push(new B({wkid:t.wkid,wkt:t.wkt,isInverse:t.isInverse}))}static cacheKey(e,t){return[void 0!==e.wkid&&null!==e.wkid?e.wkid.toString():"-1",void 0!==e.wkt&&null!==e.wkt?e.wkt.toString():"",void 0!==t.wkid&&null!==t.wkid?t.wkid.toString():"-1",void 0!==t.wkt&&null!==t.wkt?t.wkt.toString():""].join(",")}static fromGE(e){const t=new V;let n="";for(const r of e.steps){const e=B.fromGE(r);t.steps.push(e),n+=e.uid.toString()+","}return t._cached_projection={},t._gtlistentry=null,t._chain=n,t}getInverse(){const e=new V;e.steps=[];for(let t=this.steps.length-1;t>=0;t--){const n=this.steps[t];e.steps.push(n.getInverse())}return e}getGTListEntry(){let e="";for(const t of this.steps)e+=t.uid.toString()+",";return e!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=e),this._gtlistentry}assignCachedGe(e,t,n){this._cached_projection[V.cacheKey(e,t)]=n}getCachedGeTransformation(e,t){let n="";for(const e of this.steps)n+=e.uid.toString()+",";n!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=n);const r=this._cached_projection[V.cacheKey(e,t)];return void 0===r?null:r}}var q=n(8744);let J=null,K=null,Q=null,$={};function ee(){return!!J&&g()}function te(){return!0}function ne(e){return(0,s.Wi)(Q)&&(Q=Promise.all([h(),n.e(5837).then(n.bind(n,45837)).then((function(e){return e.g})),n.e(819).then(n.bind(n,80819))])),Q.then((([,t,{hydratedAdapter:n}])=>{(0,i.k_)(e),K=n,J=t.default,J._enableProjection(Y)}))}function re(e,t,n=null){return Array.isArray(e)?0===e.length?[]:oe(K,e,e[0].spatialReference,t,n):oe(K,[e],e.spatialReference,t,n)[0]}function oe(e,t,n,r,o=null){if((0,s.Wi)(n)||(0,s.Wi)(r))return t;if(ie(n,r,o))return t.map((e=>(0,s.Wg)(function(e,t,n){return e?"x"in e?function(e,t,n,r,o){He[0]=e.x,He[1]=e.y;const s=e.z;return He[2]=void 0!==s?s:o,Pe(He,t,0,He,r,0,1)?(n.x=He[0],n.y=He[1],n.spatialReference=r,void 0===s?(n.z=void 0,n.hasZ=!1):(n.z=He[2],n.hasZ=!0),void 0===e.m?(n.m=void 0,n.hasM=!1):(n.m=e.m,n.hasM=!0),n):null}(e,t,new j.Z,n,0):"xmin"in e?function(e,t,n,r,o){const{xmin:s,ymin:i,xmax:u,ymax:l,hasZ:_,hasM:c}=e;return ae(s,i,_?e.zmin:o,t,He,r)?(n.xmin=He[0],n.ymin=He[1],_&&(n.zmin=He[2]),ae(u,l,_?e.zmax:o,t,He,r)?(n.xmax=He[0],n.ymax=He[1],_&&(n.zmax=He[2]),c&&(n.mmin=e.mmin,n.mmax=e.mmax),n.spatialReference=r,n):null):null}(e,t,new c.Z,n,0):"rings"in e?_e(e,t,new x.Z,n,0):"paths"in e?function(e,t,n,r,o){const{paths:s,hasZ:i,hasM:u}=e,l=[];return fe(s,i,u,t,l,r,o)?(n.paths=l,n.spatialReference=r,n.hasZ=i,n.hasM=u,n):null}(e,t,new L.Z,n,0):"points"in e?function(e,t,n,r,o){const{points:s,hasZ:i,hasM:u}=e,l=[],_=s.length,c=[];for(const e of s)c.push(e[0],e[1],i?e[2]:o);if(!Pe(c,t,0,c,r,0,_))return null;for(let e=0;e<_;++e){const t=3*e,n=c[t],r=c[t+1];i&&u?l.push([n,r,c[t+2],s[e][3]]):i?l.push([n,r,c[t+2]]):u?l.push([n,r,s[e][2]]):l.push([n,r])}return n.points=l,n.spatialReference=r,n.hasZ=i,n.hasM=u,n}(e,t,new a.Z,n,0):null:null}(e,n,r))));if((0,s.Wi)(o)){const e=V.cacheKey(n,r);void 0!==$[e]?o=$[e]:(o=function(e,t,n=null){if((0,s.Wi)(J))throw new se;if((0,s.Wi)(e)||(0,s.Wi)(t))return null;const r=J._getTransformation(K,e,t,n,null==n?void 0:n.spatialReference);return null!==r?V.fromGE(r):null}(n,r,null),(0,s.Wi)(o)&&(o=new V),$[e]=o)}if((0,s.Wi)(J))throw new se;return J._project(e,t,n,r,o)}class se extends r.Z{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}function ie(e,t,n){return!n&&(!!(0,q.fS)(e,t)||(0,q.JY)(e)&&(0,q.JY)(t)&&!!Fe(e,t,Le))}async function ue(e,t,n,r){if(!ee())if(Array.isArray(e)){for(const{source:t,dest:n,geographicTransformation:o}of e)if(!ie(t,n,o))return ne(r)}else if(!ie(e,t,n))return ne(r)}function le(e,t,n=t.spatialReference,r=0){return(0,s.pC)(n)&&(0,s.pC)(_e(e,e.spatialReference,t,n,r))}function _e(e,t,n,r,o){const{rings:s,hasZ:i,hasM:u}=e,l=[];return fe(s,i,u,t,l,r,o)?(n.rings=l,n.spatialReference=r,n.hasZ=i,n.hasM=u,n):null}function ce(e,t,n,r=0){He[0]=e.x,He[1]=e.y;const o=e.z;return He[2]=void 0!==o?o:r,Pe(He,e.spatialReference,0,t,n,0,1)}function ae(e,t,n,r,o,s){return be[0]=e,be[1]=t,be[2]=n,Pe(be,r,0,o,s,0,1)}function Pe(e,t,n,r,o,i,u=1){const l=Fe(t,o,Le);if((0,s.Wi)(l))return!1;if(l===de){if(e===r&&n===i)return!0;const t=n+3*u;for(let o=n,s=i;o<t;o++,s++)r[s]=e[o];return!0}const _=n+3*u;for(let t=n,o=i;t<_;t+=3,o+=3)l(e,t,r,o);return!0}function fe(e,t,n,r,o,s,i=0){const u=new Array;for(const n of e)for(const e of n)u.push(e[0],e[1],t?e[2]:i);if(!Pe(u,r,0,u,s,0,u.length/3))return!1;let l=0;o.length=0;for(const r of e){const e=new Array;for(const o of r)t&&n?e.push([u[l++],u[l++],u[l++],o[3]]):t?e.push([u[l++],u[l++],u[l++]]):n?(e.push([u[l++],u[l++],o[2]]),l++):(e.push([u[l++],u[l++]]),l++);o.push(e)}return!0}function pe(e,t,n,r){if((0,s.Wi)(e)||(0,s.Wi)(r))return!1;const o=he(e,je),i=he(r,xe);if(o===i&&!Ee(i)&&(0!==o||(0,q.fS)(e,r)))return(0,l.i)(n),(0,l.t)(n,n,t),!0;if(Ee(i)){const e=Ue[o][11],r=Ue[11][i];return!(0,s.Wi)(e)&&!(0,s.Wi)(r)&&(e(t,0,We,0),r(We,0,ze,0),ge(Ze*We[0],Ze*We[1],n),n[12]=ze[0],n[13]=ze[1],n[14]=ze[2],!0)}if(!(3!==i&&12!==i||2!==o&&1!==o)){const e=Ue[o][11],r=Ue[11][i];return!(0,s.Wi)(e)&&!(0,s.Wi)(r)&&(e(t,0,We,0),r(We,0,ze,0),2===o?(0,l.i)(n):function(e,t,n){ge(e,t,n),(0,l.a)(n,n)}(Ze*We[0],Ze*We[1],n),n[12]=ze[0],n[13]=ze[1],n[14]=ze[2],!0)}return!1}function Ee(e){return 1===e||7===e||9===e}function ge(e,t,n){const r=Math.sin(e),o=Math.cos(e),s=Math.sin(t),i=Math.cos(t),u=n;return u[0]=-r,u[4]=-s*o,u[8]=i*o,u[12]=0,u[1]=o,u[5]=-s*r,u[9]=i*r,u[13]=0,u[2]=0,u[6]=i,u[10]=s,u[14]=0,u[3]=0,u[7]=0,u[11]=0,u[15]=1,u}function he(e,t){return t.spatialReference===e?t.spatialReferenceId:(t.spatialReference=e,"metersPerUnit"in t&&(t.metersPerUnit=(0,u.c9)(e,1)),e.wkt===Z.GG.wkt?t.spatialReferenceId=1:(0,q.oR)(e)?t.spatialReferenceId=2:(0,q.sS)(e)?t.spatialReferenceId=3:(0,q.QM)(e)?t.spatialReferenceId=12:e.wkt===Z.wY.wkt?t.spatialReferenceId=4:4490===e.wkid?t.spatialReferenceId=5:e.wkt===Z.HQ.wkt?t.spatialReferenceId=7:e.wkt===Z.VY.wkt?t.spatialReferenceId=9:(0,q.BZ)(e)?t.spatialReferenceId=8:(0,q.V2)(e)?t.spatialReferenceId=10:t.spatialReferenceId=0)}function de(e,t,n,r){e!==n&&(n[r++]=e[t++],n[r++]=e[t++],n[r]=e[t])}function Te(e,t,n,r){n[r++]=Xe*(e[t++]/X.sv.radius),n[r++]=Xe*(Math.PI/2-2*Math.atan(Math.exp(-e[t++]/X.sv.radius))),n[r]=e[t]}function Me(e,t,n,r){!function(e,t,n,r,s){const i=.4999999*Math.PI,u=(0,o.uZ)(Ze*e[t+1],-i,i),l=Math.sin(u);n[r++]=Ze*e[t]*s.radius,n[r++]=s.halfSemiMajorAxis*Math.log((1+l)/(1-l)),n[r]=e[t+2]}(e,t,n,r,X.sv)}const Se=X.sv.radius*Math.PI/180,ye=180/(X.sv.radius*Math.PI);function Oe(e,t,n,r){n[r]=e[t]*Se,n[r+1]=e[t+1]*Se,n[r+2]=e[t+2]}function Re(e,t,n,r){n[r]=e[t]*ye,n[r+1]=e[t+1]*ye,n[r+2]=e[t+2]}function Ne(e,t,n,r,o){const s=o+e[t+2],i=Ze*e[t+1],u=Ze*e[t],l=Math.cos(i);n[r++]=Math.cos(u)*l*s,n[r++]=Math.sin(u)*l*s,n[r]=Math.sin(i)*s}function Ae(e,t,n,r){Ne(e,t,n,r,X.Z1.radius)}function me(e,t,n,r){Ne(e,t,n,r,X.yr.radius)}function Ie(e,t,n,r){Ne(e,t,n,r,X.sv.radius)}function we(e,t,n,r,s){const i=e[t],u=e[t+1],l=e[t+2],_=Math.sqrt(i*i+u*u+l*l),c=(0,o.Kt)(l/(0===_?1:_)),a=Math.atan2(u,i);n[r++]=Xe*a,n[r++]=Xe*c,n[r]=_-s}function Ge(e,t,n,r){we(e,t,n,r,X.Z1.radius)}function De(e,t,n,r){we(e,t,n,r,X.yr.radius)}function Ce(e,t,n,r){we(e,t,n,r,X.sv.radius)}function ke(e,t,n,r){!function(e,t,n,r,o){const s=Ze*e[t],i=Ze*e[t+1],u=e[t+2],l=Math.sin(i),_=Math.cos(i),c=o.radius/Math.sqrt(1-o.eccentricitySquared*l*l);n[r++]=(c+u)*_*Math.cos(s),n[r++]=(c+u)*_*Math.sin(s),n[r++]=(c*(1-o.eccentricitySquared)+u)*l}(e,t,n,r,X.sv)}function ve(e,t,n,r){const o=z,s=e[t],i=e[t+1],u=e[t+2];let l,_,c,a,P,f,p,E,g,h,d,T,M,S,y,O,R,N,A,m,I;l=Math.abs(u),_=s*s+i*i,c=Math.sqrt(_),a=_+u*u,P=Math.sqrt(a),m=Math.atan2(i,s),f=u*u/a,p=_/a,S=o.a2/P,y=o.a3-o.a4/P,p>.3?(E=l/P*(1+p*(o.a1+S+f*y)/P),A=Math.asin(E),h=E*E,g=Math.sqrt(1-h)):(g=c/P*(1-f*(o.a5-S-p*y)/P),A=Math.acos(g),h=1-g*g,E=Math.sqrt(h)),d=1-X.sv.eccentricitySquared*h,T=X.sv.radius/Math.sqrt(d),M=o.a6*T,S=c-T*g,y=l-M*E,R=g*S+E*y,O=g*y-E*S,N=O/(M/d+R),A+=N,I=R+O*N/2,u<0&&(A=-A),n[r++]=Xe*m,n[r++]=Xe*A,n[r]=I}const Ue={2:{5:null,8:null,10:null,11:de,6:de,1:Ie,7:null,9:null,0:null,3:Me,12:Oe,2:de,4:ke},5:{5:de,8:null,10:null,11:de,6:de,1:Ie,7:null,9:null,0:null,3:null,12:Oe,2:null,4:ke},8:{5:null,8:de,10:null,11:de,6:null,1:null,7:me,9:null,0:null,3:null,12:null,2:null,4:null},10:{5:null,8:null,10:de,11:de,6:null,1:null,7:null,9:Ae,0:null,3:null,12:null,2:null,4:null},3:{5:null,8:null,10:null,11:Te,6:Te,1:function(e,t,n,r){Te(e,t,n,r),Ie(n,r,n,r)},7:null,9:null,0:null,3:de,12:function(e,t,n,r){Te(e,t,n,r),Oe(n,r,n,r)},2:Te,4:function(e,t,n,r){Te(e,t,n,r),ke(n,r,n,r)}},4:{5:ve,8:null,10:null,11:ve,6:ve,1:function(e,t,n,r){ve(e,t,n,r),Ie(n,r,n,r)},7:null,9:null,0:null,3:function(e,t,n,r){ve(e,t,n,r),Me(n,r,n,r)},12:function(e,t,n,r){ve(e,t,n,r),Oe(n,r,n,r)},2:ve,4:de},1:{5:Ce,8:null,10:null,11:Ce,6:Ce,1:de,7:null,9:null,0:null,3:function(e,t,n,r){Ce(e,t,n,r),Me(n,r,n,r)},12:function(e,t,n,r){Ce(e,t,n,r),Oe(n,r,n,r)},2:Ce,4:function(e,t,n,r){Ce(e,t,n,r),ke(n,r,n,r)}},7:{5:null,8:De,10:null,11:De,6:null,1:null,7:de,9:null,0:null,3:null,12:null,2:null,4:null},9:{5:null,8:null,10:Ge,11:Ge,6:null,1:null,7:null,9:de,0:null,3:null,12:null,2:null,4:null},0:{5:null,8:null,10:null,11:null,6:null,1:null,7:null,9:null,0:de,3:null,12:null,2:null,4:null},11:{5:de,8:de,10:de,11:de,6:de,1:Ie,7:me,9:Ae,0:null,3:Me,12:Oe,2:de,4:ke},6:{5:null,8:null,10:null,11:de,6:de,1:Ie,7:null,9:null,0:null,3:null,12:Oe,2:de,4:ke},12:{5:Re,8:null,10:null,11:Re,6:Re,1:function(e,t,n,r){Re(e,t,n,r),Ie(n,r,n,r)},7:null,9:null,0:null,3:function(e,t,n,r){Re(e,t,n,r),Me(n,r,n,r)},12:de,2:Re,4:function(e,t,n,r){Re(e,t,n,r),ke(n,r,n,r)}}};function Fe(e,t,n=Ye()){return(0,s.Wi)(e)||(0,s.Wi)(t)?null:function(e,t,n){if((0,s.Wi)(e)||(0,s.Wi)(t)||n.source.spatialReference===e&&n.dest.spatialReference===t)return n;const r=he(e,n.source),o=he(t,n.dest);return 0===r&&0===o?(0,q.fS)(e,t)?n.projector=de:n.projector=null:n.projector=Ue[r][o],n}(e,t,n).projector}function Ye(){return{source:{spatialReference:null,spatialReferenceId:0,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:0,metersPerUnit:1},projector:de}}const je={spatialReference:null,spatialReferenceId:0},xe={spatialReference:null,spatialReferenceId:0},Le=Ye(),Ze=(Ye(),(0,o.Vl)(1)),Xe=(0,o.BV)(1),be=(0,_.c)(),We=(0,_.c)(),ze=(0,_.c)(),He=(0,_.c)();(0,_.c)()}}]);