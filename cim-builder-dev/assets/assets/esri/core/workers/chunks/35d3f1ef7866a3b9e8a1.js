"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7444],{92835:(e,t,r)=>{r.d(t,{Z:()=>h});var i,o=r(43697),s=r(10736),n=r(70586),a=r(35463),l=r(5600),p=(r(80442),r(75215),r(92604),r(71715)),u=r(52525),d=r(30556);let c=i=class extends s.wq{constructor(e){super(e),this.end=null,this.start=null}static get allTime(){return y}static get empty(){return m}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=(0,n.pC)(this.start)?this.start.getTime():this.start,r=(0,n.pC)(this.end)?this.end.getTime():this.end,i=(0,n.pC)(e.start)?e.start.getTime():e.start,o=(0,n.pC)(e.end)?e.end.getTime():e.end;return t===i&&r===o}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=(0,n.Po)(this.start,(t=>(0,a.JE)(t,e))),r=(0,n.Po)(this.end,(t=>(0,a.Nm)((0,a.JE)(t,e),1,e)));return new i({start:t,end:r})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=(0,n.R2)(this.start,-1/0,(e=>e.getTime())),r=(0,n.R2)(this.end,1/0,(e=>e.getTime())),o=(0,n.R2)(e.start,-1/0,(e=>e.getTime())),s=(0,n.R2)(e.end,1/0,(e=>e.getTime()));let a,l;if(o>=t&&o<=r?a=o:t>=o&&t<=s&&(a=t),r>=o&&r<=s?l=r:s>=t&&s<=r&&(l=s),!isNaN(a)&&!isNaN(l)){const e=new i;return e.start=a===-1/0?null:new Date(a),e.end=l===1/0?null:new Date(l),e}return i.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const r=new i,{start:o,end:s}=this;return(0,n.pC)(o)&&(r.start=(0,a.Nm)(o,e,t)),(0,n.pC)(s)&&(r.end=(0,a.Nm)(s,e,t)),r}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return y.clone();const t=(0,n.pC)(this.start)&&(0,n.pC)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=(0,n.pC)(this.end)&&(0,n.pC)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:r})}};(0,o._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"end",void 0),(0,o._)([(0,p.r)("end")],c.prototype,"readEnd",null),(0,o._)([(0,d.c)("end")],c.prototype,"writeEnd",null),(0,o._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],c.prototype,"isAllTime",null),(0,o._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],c.prototype,"isEmpty",null),(0,o._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"start",void 0),(0,o._)([(0,p.r)("start")],c.prototype,"readStart",null),(0,o._)([(0,d.c)("start")],c.prototype,"writeStart",null),c=i=(0,o._)([(0,u.j)("esri.TimeExtent")],c);const y=new c,m=new c({start:void 0,end:void 0});var h=c},35463:(e,t,r)=>{r.d(t,{rJ:()=>a,Nm:()=>s,JE:()=>n}),r(80442);const i={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},o={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function s(e,t,r){const i=new Date(e.getTime());if(t&&r){const e=o[r],{getter:s,setter:n,multiplier:a}=e;i[n](i[s]()+t*a)}return i}function n(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function a(e,t,r){return 0===e?0:e*i[t]/i[r]}},10158:(e,t,r)=>{r.d(t,{n:()=>N});var i,o=r(43697),s=r(35454),n=r(10736),a=r(5600),l=(r(80442),r(90578)),p=(r(92604),r(36030)),u=r(71715),d=r(52525),c=r(75215),y=r(63213),m=r(1231),h=r(42843),w=(r(66577),r(82971)),g=r(86973);let b=i=class extends n.wq{constructor(e){super(e),this.type="query-table"}clone(){var e;const{workspaceId:t,query:r,oidFields:o,spatialReference:s,geometryType:n}=this,a={workspaceId:t,query:r,oidFields:o,spatialReference:null!=(e=null==s?void 0:s.clone())?e:void 0,geometryType:n};return new i(a)}};var v;(0,o._)([(0,p.J)({queryTable:"query-table"})],b.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],b.prototype,"workspaceId",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],b.prototype,"query",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],b.prototype,"oidFields",void 0),(0,o._)([(0,a.Cb)({type:w.Z,json:{write:!0}})],b.prototype,"spatialReference",void 0),(0,o._)([(0,p.J)(g.Mk)],b.prototype,"geometryType",void 0),b=i=(0,o._)([(0,d.j)("esri.layers.support.source.QueryTableDataSource")],b);let C=v=class extends n.wq{constructor(e){super(e),this.type="raster"}clone(){const{workspaceId:e,dataSourceName:t}=this;return new v({workspaceId:e,dataSourceName:t})}};var _;(0,o._)([(0,p.J)({raster:"raster"})],C.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],C.prototype,"dataSourceName",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],C.prototype,"workspaceId",void 0),C=v=(0,o._)([(0,d.j)("esri.layers.support.source.RasterDataSource")],C);let S=_=class extends n.wq{constructor(e){super(e),this.type="table"}clone(){const{workspaceId:e,gdbVersion:t,dataSourceName:r}=this;return new _({workspaceId:e,gdbVersion:t,dataSourceName:r})}};var j,f;(0,o._)([(0,p.J)({table:"table"})],S.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],S.prototype,"workspaceId",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],S.prototype,"gdbVersion",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],S.prototype,"dataSourceName",void 0),S=_=(0,o._)([(0,d.j)("esri.layers.support.source.TableDataSource")],S);const T=(0,s.wY)()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let R=j=class extends n.wq{constructor(e){super(e),this.type="join-table"}readLeftTableSource(e,t,r){return F()(e,t,r)}castLeftTableSource(e){return(0,c.N7)(M(),e)}readRightTableSource(e,t,r){return F()(e,t,r)}castRightTableSource(e){return(0,c.N7)(M(),e)}clone(){var e,t;const{leftTableKey:r,rightTableKey:i,leftTableSource:o,rightTableSource:s,joinType:n}=this,a={leftTableKey:r,rightTableKey:i,leftTableSource:null!=(e=null==o?void 0:o.clone())?e:void 0,rightTableSource:null!=(t=null==s?void 0:s.clone())?t:void 0,joinType:n};return new j(a)}};(0,o._)([(0,p.J)({joinTable:"join-table"})],R.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],R.prototype,"leftTableKey",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],R.prototype,"rightTableKey",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],R.prototype,"leftTableSource",void 0),(0,o._)([(0,u.r)("leftTableSource")],R.prototype,"readLeftTableSource",null),(0,o._)([(0,l.p)("leftTableSource")],R.prototype,"castLeftTableSource",null),(0,o._)([(0,a.Cb)({json:{write:!0}})],R.prototype,"rightTableSource",void 0),(0,o._)([(0,u.r)("rightTableSource")],R.prototype,"readRightTableSource",null),(0,o._)([(0,l.p)("rightTableSource")],R.prototype,"castRightTableSource",null),(0,o._)([(0,p.J)(T)],R.prototype,"joinType",void 0),R=j=(0,o._)([(0,d.j)("esri.layers.support.source.JoinTableDataSource")],R);let x=null;function F(){return x||(x=(0,y.d)({types:M()})),x}let D=null;function M(){return D||(D={key:"type",base:null,typeMap:{"data-layer":N,"map-layer":h.R}}),D}const P={key:"type",base:null,typeMap:{"join-table":R,"query-table":b,raster:C,table:S}};let N=f=class extends n.wq{constructor(e){super(e),this.type="data-layer"}clone(){const{fields:e,dataSource:t}=this;return new f({fields:e,dataSource:t})}};(0,o._)([(0,p.J)({dataLayer:"data-layer"})],N.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:[m.Z],json:{write:!0}})],N.prototype,"fields",void 0),(0,o._)([(0,a.Cb)({types:P,json:{write:!0}})],N.prototype,"dataSource",void 0),N=f=(0,o._)([(0,d.j)("esri.layers.support.source.DataLayerSource")],N),N.from=(0,c.se)(N)},42843:(e,t,r)=>{r.d(t,{R:()=>u});var i,o=r(43697),s=r(10736),n=r(5600),a=(r(80442),r(75215)),l=(r(92604),r(36030)),p=r(52525);let u=i=class extends s.wq{constructor(e){super(e),this.type="map-layer"}clone(){const{mapLayerId:e,gdbVersion:t}=this;return new i({mapLayerId:e,gdbVersion:t})}};(0,o._)([(0,l.J)({mapLayer:"map-layer"})],u.prototype,"type",void 0),(0,o._)([(0,n.Cb)({type:a.z8,json:{write:!0}})],u.prototype,"mapLayerId",void 0),(0,o._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"gdbVersion",void 0),u=i=(0,o._)([(0,p.j)("esri.layers.support.source.MapLayerSource")],u)},6388:(e,t,r)=>{r.d(t,{Z:()=>y});var i,o=r(43697),s=(r(66577),r(35454)),n=r(10736),a=r(22974),l=r(5600),p=(r(75215),r(80442),r(92604),r(52525)),u=r(6570);const d=new s.Xn({upperLeft:"upper-left",lowerLeft:"lower-left"});let c=i=class extends n.wq{constructor(e){super(e),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new i((0,a.d9)({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};(0,o._)([(0,l.Cb)({type:u.Z,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],c.prototype,"extent",void 0),(0,o._)([(0,l.Cb)({type:["view","edit"],json:{write:!0}})],c.prototype,"mode",void 0),(0,o._)([(0,l.Cb)({type:String,json:{read:d.read,write:d.write}})],c.prototype,"originPosition",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],c.prototype,"tolerance",void 0),c=i=(0,o._)([(0,p.j)("esri.rest.support.QuantizationParameters")],c);var y=c},57444:(e,t,r)=>{r.d(t,{Z:()=>R});var i,o=r(43697),s=r(66577),n=r(92835),a=r(35454),l=r(10736),p=r(22974),u=r(70586),d=r(5600),c=r(90578),y=(r(80442),r(92604),r(36030)),m=r(52525),h=r(30556),w=r(75215),g=r(33955),b=r(10158),v=r(6388),C=r(58539),_=r(82971),S=r(13473);const j=new a.Xn({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),f=new a.Xn({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let T=i=class extends l.wq{constructor(e){super(e),this.aggregateIds=null,this.cacheHint=void 0,this.datumTransformation=null,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}static from(e){return(0,w.TJ)(i,e)}castDatumTransformation(e){return"number"==typeof e||"object"==typeof e?e:null}writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}writeParameterValues(e,t){if(e){const r={};for(const t in e){const i=e[t];Array.isArray(i)?r[t]=i.map((e=>e instanceof Date?e.getTime():e)):i instanceof Date?r[t]=i.getTime():r[t]=i}t.parameterValues=r}}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"}writeWhere(e,t){t.where=e||"1=1"}clone(){return new i((0,p.d9)({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:(0,u.pC)(this.historicMoment)?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};T.MAX_MAX_RECORD_COUNT_FACTOR=5,(0,o._)([(0,d.Cb)({json:{write:!0}})],T.prototype,"aggregateIds",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"cacheHint",void 0),(0,o._)([(0,d.Cb)({json:{write:!0}})],T.prototype,"datumTransformation",void 0),(0,o._)([(0,c.p)("datumTransformation")],T.prototype,"castDatumTransformation",null),(0,o._)([(0,d.Cb)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],T.prototype,"distance",void 0),(0,o._)([(0,d.Cb)({type:b.n,json:{write:!0}})],T.prototype,"dynamicDataSource",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],T.prototype,"formatOf3DObjects",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],T.prototype,"gdbVersion",void 0),(0,o._)([(0,d.Cb)({types:s.qM,json:{read:g.im,write:!0}})],T.prototype,"geometry",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{write:!0}})],T.prototype,"geometryPrecision",void 0),(0,o._)([(0,d.Cb)({type:[String],json:{write:!0}})],T.prototype,"groupByFieldsForStatistics",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],T.prototype,"having",void 0),(0,o._)([(0,d.Cb)({type:Date})],T.prototype,"historicMoment",void 0),(0,o._)([(0,h.c)("historicMoment")],T.prototype,"writeHistoricMoment",null),(0,o._)([(0,d.Cb)({type:Number,json:{write:!0}})],T.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,d.Cb)({type:Number,cast:e=>e<1?1:e>i.MAX_MAX_RECORD_COUNT_FACTOR?i.MAX_MAX_RECORD_COUNT_FACTOR:e,json:{write:{overridePolicy:e=>({enabled:e>1})}}})],T.prototype,"maxRecordCountFactor",void 0),(0,o._)([(0,d.Cb)({type:["xyFootprint"],json:{write:!0}})],T.prototype,"multipatchOption",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],T.prototype,"num",void 0),(0,o._)([(0,d.Cb)({json:{write:!0}})],T.prototype,"objectIds",void 0),(0,o._)([(0,d.Cb)({type:[String],json:{write:!0}})],T.prototype,"orderByFields",void 0),(0,o._)([(0,d.Cb)({type:[String],json:{write:!0}})],T.prototype,"outFields",void 0),(0,o._)([(0,d.Cb)({type:_.Z,json:{name:"outSR",write:!0}})],T.prototype,"outSpatialReference",void 0),(0,o._)([(0,d.Cb)({type:[C.Z],json:{write:{enabled:!0,overridePolicy(){return{enabled:(0,u.pC)(this.outStatistics)&&this.outStatistics.length>0}}}}})],T.prototype,"outStatistics",void 0),(0,o._)([(0,d.Cb)({json:{write:!0}})],T.prototype,"parameterValues",void 0),(0,o._)([(0,h.c)("parameterValues")],T.prototype,"writeParameterValues",null),(0,o._)([(0,d.Cb)({type:S.Z,json:{write:!0}})],T.prototype,"pixelSize",void 0),(0,o._)([(0,d.Cb)({type:v.Z,json:{write:!0}})],T.prototype,"quantizationParameters",void 0),(0,o._)([(0,d.Cb)({type:[Object],json:{write:!0}})],T.prototype,"rangeValues",void 0),(0,o._)([(0,d.Cb)({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],T.prototype,"relationParameter",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],T.prototype,"resultType",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],T.prototype,"returnCentroid",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],T.prototype,"returnDistinctValues",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!0,write:!0}})],T.prototype,"returnExceededLimitFeatures",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"returnGeometry",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],T.prototype,"returnQueryGeometry",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],T.prototype,"returnM",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],T.prototype,"returnZ",void 0),(0,o._)([(0,d.Cb)({type:_.Z,json:{write:!0}})],T.prototype,"sourceSpatialReference",void 0),(0,o._)([(0,y.J)(j,{ignoreUnknown:!1,name:"spatialRel"})],T.prototype,"spatialRelationship",void 0),(0,o._)([(0,d.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],T.prototype,"start",void 0),(0,o._)([(0,h.c)("start"),(0,h.c)("num")],T.prototype,"writeStart",null),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],T.prototype,"sqlFormat",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:!0}})],T.prototype,"text",void 0),(0,o._)([(0,d.Cb)({type:n.Z,json:{write:!0}})],T.prototype,"timeExtent",void 0),(0,o._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],T.prototype,"timeReferenceUnknownClient",void 0),(0,o._)([(0,y.J)(f,{ignoreUnknown:!1}),(0,d.Cb)({json:{write:{overridePolicy(e){return{enabled:e&&this.distance>0}}}}})],T.prototype,"units",void 0),(0,o._)([(0,d.Cb)({type:String,json:{write:{overridePolicy(e){return{enabled:null!=e||this.start>0}}}}})],T.prototype,"where",void 0),(0,o._)([(0,h.c)("where")],T.prototype,"writeWhere",null),T=i=(0,o._)([(0,m.j)("esri.rest.support.Query")],T);var R=T},58539:(e,t,r)=>{r.d(t,{Z:()=>y});var i,o=r(43697),s=r(35454),n=r(10736),a=r(22974),l=r(5600),p=(r(75215),r(80442),r(92604),r(52525)),u=r(30556);const d=new s.Xn({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete"});let c=i=class extends n.wq{constructor(e){super(e),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(e,t){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(t.statisticParameters=(0,a.d9)(e))}clone(){return new i({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:(0,a.d9)(this.statisticParameters)})}};(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],c.prototype,"maxPointCount",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],c.prototype,"maxRecordCount",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],c.prototype,"maxVertexCount",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"onStatisticField",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"outStatisticFieldName",void 0),(0,o._)([(0,l.Cb)({type:String,json:{read:{source:"statisticType",reader:d.read},write:{target:"statisticType",writer:d.write}}})],c.prototype,"statisticType",void 0),(0,o._)([(0,l.Cb)({type:Object})],c.prototype,"statisticParameters",void 0),(0,o._)([(0,u.c)("statisticParameters")],c.prototype,"writeStatisticParameters",null),c=i=(0,o._)([(0,p.j)("esri.rest.support.StatisticDefinition")],c);var y=c}}]);