(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[193],{756:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return x}));var r=l(0),a=(l(64),l(47)),o=l(8),s=l(371),i=l(41),n=l(16),c=l(1),p=(l(9),l(5),l(4),l(19)),u=l(3),b=l(18),y=l(227),j=l(378),h=l(375),O=l(373),d=l(382),m=l(374),v=l(266),f=l(372),w=l(776),g=l(35),T=l(30),S=l(28);let R=class extends(Object(j.a)(Object(d.a)(Object(m.a)(Object(h.a)(Object(O.a)(Object(s.a)(y.a))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new g.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,T.a.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=T.a.WebMercator,this.subDomains=null,this.tileInfo=new f.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new S.a({x:-20037508.342787,y:20037508.342787,spatialReference:T.a.WebMercator}),spatialReference:T.a.WebMercator,lods:[new v.a({level:0,scale:591657527.591555,resolution:156543.033928}),new v.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new v.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new v.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new v.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new v.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new v.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new v.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new v.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new v.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new v.a({level:10,scale:577790.554289,resolution:152.874056570411}),new v.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new v.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new v.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new v.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new v.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new v.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new v.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new v.a({level:18,scale:2256.994353,resolution:.597164283559817}),new v.a({level:19,scale:1128.497176,resolution:.298582141647617}),new v.a({level:20,scale:564.248588,resolution:.14929107082380833}),new v.a({level:21,scale:282.124294,resolution:.07464553541190416}),new v.a({level:22,scale:141.062147,resolution:.03732276770595208}),new v.a({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new n.a(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new o.a("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)});return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&T.a.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:l}=this,r=new n.a(t),a=r.scheme?r.scheme+"://":"//",o=a+r.authority+"/";if(-1===r.authority.indexOf("{subDomain}"))e.push(o);else if(l&&l.length>0&&r.authority.split(".").length>1)for(const s of l)e.push(a+r.authority.replace(/\{subDomain\}/gi,s)+"/");return e.map(e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new n.a(e),l=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(l.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&Object(n.y)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(n.F)(e)),t.templateUrl=e}fetchTile(e,t,l,r={}){const{signal:o}=r,s=this.getTileUrl(e,t,l),i={responseType:"image",signal:o,query:{...this.refreshParameters}};return Object(a.default)(s,i).then(e=>e.data)}getTileUrl(e,t,l){const r=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(i.c)(this.urlPath,{level:r,z:r,col:l,x:l,row:t,y:t})}};Object(r.a)([Object(c.b)({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),Object(r.a)([Object(c.b)({type:g.a,json:{write:!0},nonNullable:!0})],R.prototype,"fullExtent",void 0),Object(r.a)([Object(c.b)({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"legendEnabled",void 0),Object(r.a)([Object(c.b)({type:["show","hide"]})],R.prototype,"listMode",void 0),Object(r.a)([Object(c.b)()],R.prototype,"levelValues",null),Object(r.a)([Object(c.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),Object(r.a)([Object(c.b)({type:["WebTiledLayer"],value:"WebTiledLayer"})],R.prototype,"operationalLayerType",void 0),Object(r.a)([Object(c.b)({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),Object(r.a)([Object(c.b)({type:T.a})],R.prototype,"spatialReference",void 0),Object(r.a)([Object(p.a)("spatialReference",["spatialReference","fullExtent.spatialReference"])],R.prototype,"readSpatialReference",null),Object(r.a)([Object(c.b)({type:[String],json:{write:!0}})],R.prototype,"subDomains",void 0),Object(r.a)([Object(c.b)({type:f.a,json:{write:!0}})],R.prototype,"tileInfo",void 0),Object(r.a)([Object(c.b)({readOnly:!0})],R.prototype,"tileServers",null),Object(r.a)([Object(c.b)({json:{read:!1}})],R.prototype,"type",void 0),Object(r.a)([Object(c.b)()],R.prototype,"urlPath",null),Object(r.a)([Object(c.b)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],R.prototype,"urlTemplate",void 0),Object(r.a)([Object(p.a)("urlTemplate",["urlTemplate","templateUrl"])],R.prototype,"readUrlTemplate",null),Object(r.a)([Object(b.a)("urlTemplate",{templateUrl:{type:String}})],R.prototype,"writeUrlTemplate",null),Object(r.a)([Object(c.b)({type:w.a,json:{write:!0}})],R.prototype,"wmtsInfo",void 0),R=Object(r.a)([Object(u.a)("esri.layers.WebTileLayer")],R);const x=R},776:function(e,t,l){"use strict";l.d(t,"a",(function(){return p}));var r,a=l(0),o=l(10),s=l(6),i=l(1),n=(l(4),l(3));let c=r=class extends o.a{constructor(e){super(e)}clone(){return new r({customLayerParameters:Object(s.a)(this.customLayerParameters),customParameters:Object(s.a)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};Object(a.a)([Object(i.b)({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),Object(a.a)([Object(i.b)({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),Object(a.a)([Object(i.b)({type:String,json:{write:!0}})],c.prototype,"layerIdentifier",void 0),Object(a.a)([Object(i.b)({type:String,json:{write:!0}})],c.prototype,"tileMatrixSet",void 0),Object(a.a)([Object(i.b)({type:String,json:{write:!0}})],c.prototype,"url",void 0),c=r=Object(a.a)([Object(n.a)("esri.layer.support.WMTSLayerInfo")],c);const p=c}}]);
//# sourceMappingURL=193.89523cd3.chunk.js.map