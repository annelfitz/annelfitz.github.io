"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[165],{60165:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var r=a(27366),o=a(76200),i=a(10064),l=a(43404),s=a(92026),n=a(97642),p=a(49861),u=(a(63780),a(93169),a(25243),a(69912)),d=a(78952),g=a(53866),y=a(65156),h=a(30651),b=a(6693),c=a(71684),v=a(56811),m=a(22824);const M=new(a(87960).f)("0/0/0",0,0,0,null);let w=class extends((0,b.h)((0,v.M)((0,c.Q)(h.Z)))){constructor(){super(...arguments),this.tileInfo=m.Z.create({spatialReference:d.Z.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new g.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,d.Z.WebMercator),this.spatialReference=d.Z.WebMercator}getTileBounds(e,t,a,r){const o=r||(0,y.Ue)();return M.level=e,M.row=t,M.col=a,M.extent=o,this.tileInfo.updateTileInfo(M),M.extent=null,o}fetchTile(e,t,a){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:i}=r,l=this.getTileUrl(e,t,a),s={responseType:"image",signal:i,query:{...this.refreshParameters}};return(0,o.default)(l,s).then((e=>e.data))}getTileUrl(){throw new i.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,r._)([(0,p.Cb)({type:m.Z})],w.prototype,"tileInfo",void 0),(0,r._)([(0,p.Cb)({type:["show","hide"]})],w.prototype,"listMode",void 0),(0,r._)([(0,p.Cb)({readOnly:!0,value:"base-tile"})],w.prototype,"type",void 0),(0,r._)([(0,p.Cb)({nonNullable:!0})],w.prototype,"fullExtent",void 0),(0,r._)([(0,p.Cb)()],w.prototype,"spatialReference",void 0),w=(0,r._)([(0,u.j)("esri.layers.BaseTileLayer")],w);const _=w;var f=a(6061);const C=new l.X({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let Z=class extends((0,b.h)((0,f.q)((0,n.R)(_)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new m.Z({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:d.Z.WebMercator},spatialReference:d.Z.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return(0,s.pC)(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return C.toJSON(this.style)}get bingLogo(){return(0,s.pC)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new i.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,a){if(!this.loaded||(0,s.Wi)(this.bingMetadata))return null;const r=this.bingMetadata.resourceSets[0].resources[0],o=r.imageUrlSubdomains[t%r.imageUrlSubdomains.length],i=this._getQuadKey(e,t,a);return r.imageUrl.replace("{subdomain}",o).replace("{quadkey}",i)}async fetchAttributionData(){return this.load().then((()=>(0,s.Wi)(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return(0,o.default)(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new i.Z("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new i.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new i.Z("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new i.Z("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return(0,o.default)(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new i.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new i.Z("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,a){let r="";for(let o=e;o>0;o--){let e=0;const i=1<<o-1;0!=(a&i)&&(e+=1),0!=(t&i)&&(e+=2),r+=e.toString()}return r}};(0,r._)([(0,p.Cb)({json:{read:!1,write:!1},value:null})],Z.prototype,"bingMetadata",null),(0,r._)([(0,p.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],Z.prototype,"type",void 0),(0,r._)([(0,p.Cb)({type:m.Z})],Z.prototype,"tileInfo",void 0),(0,r._)([(0,p.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],Z.prototype,"copyright",null),(0,r._)([(0,p.Cb)({type:String,json:{write:!1,read:!1}})],Z.prototype,"key",void 0),(0,r._)([(0,p.Cb)({type:C.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:C.read}}})],Z.prototype,"style",void 0),(0,r._)([(0,p.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],Z.prototype,"operationalLayerType",null),(0,r._)([(0,p.Cb)({type:String,json:{write:!1,read:!1}})],Z.prototype,"culture",void 0),(0,r._)([(0,p.Cb)({type:String,json:{write:!1,read:!1}})],Z.prototype,"region",void 0),(0,r._)([(0,p.Cb)({type:String,json:{write:!0,read:!0}})],Z.prototype,"portalUrl",void 0),(0,r._)([(0,p.Cb)({type:Boolean,json:{write:!1,read:!1}})],Z.prototype,"hasAttributionData",void 0),(0,r._)([(0,p.Cb)({type:String,readOnly:!0})],Z.prototype,"bingLogo",null),Z=(0,r._)([(0,u.j)("esri.layers.BingMapsLayer")],Z);const S=Z}}]);
//# sourceMappingURL=165.6e0bb2c1.chunk.js.map