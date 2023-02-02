"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[2668],{2668:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ee});var r,o=i(27366),s=(i(59486),i(44055)),n=(i(94931),i(78451),i(98689),i(57823),i(32066),i(49018),i(34999)),a=i(28189),l=i(9014),p=i(40464),d=i(76200),c=i(51508),y=i(10064),h=i(42537),u=i(32718),m=i(92026),b=i(97642),f=i(66978),g=i(49861),v=i(25243),w=(i(63780),i(38511)),I=i(69912),C=i(47492),_=i(27823),S=i(30651),x=i(11936),R=i(6693),T=i(46671),j=i(7632),F=i(64390),k=i(6061),P=i(29598),Z=i(71684),D=i(56811),N=i(99063),O=i(45948),E=i(83040),U=i(25610),A=i(80031),L=i(77748),M=i(85116),J=i(46784);let q=r=class extends J.wq{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new r({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,o._)([(0,g.Cb)({type:Number,json:{write:!0}})],q.prototype,"age",void 0),(0,o._)([(0,g.Cb)({type:Number,json:{write:!0}})],q.prototype,"ageReceived",void 0),(0,o._)([(0,g.Cb)({type:Number,json:{write:!0}})],q.prototype,"displayCount",void 0),(0,o._)([(0,g.Cb)({type:Number,json:{write:!0}})],q.prototype,"maxObservations",void 0),q=r=(0,o._)([(0,I.j)("esri.layers.support.PurgeOptions")],q);const z=q;var G=i(21371),Q=i(86638),V=i(81085),Y=i(64575),$=i(78952),W=i(53866);const H=(0,U.v)();function B(e,t){return new y.Z("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}let K=class extends((0,F.M)((0,j.b)((0,R.h)((0,N.n)((0,D.M)((0,Z.Q)((0,x.Y)((0,k.q)((0,P.I)((0,b.R)((0,T.N)(S.Z)))))))))))){constructor(){super(...arguments),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new z,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=$.Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new y.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=(0,m.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(f.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,A.YN)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,i){const r=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(r){const e=(0,l.a)(r,t,i)||void 0;return e||u.Z.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),e}if(t.defaultSymbol)return t.types&&t.types.length?new a.Z({defaultSymbol:X(t.defaultSymbol,t,i),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:X(e.symbol,e,i)})))}):new n.Z({symbol:X(t.defaultSymbol,t,i)})}async connect(e){const[{createConnection:t}]=await Promise.all([i.e(7463).then(i.bind(i,97463)),this.load()]),r=this.geometryType?_.M.toJSON(this.geometryType):null,{customParameters:o=null,definitionExpression:s=null,geometryDefinition:n=null,maxReconnectionAttempts:a=0,maxReconnectionInterval:l=20,spatialReference:p=this.spatialReference}=e||this.createConnectionParameters(),d=t(this.parsedUrl,this.spatialReference,p,r,{geometry:n,where:s},a,l,o??void 0),c=(0,h.AL)([this.on("send-message-to-socket",(e=>d.sendMessageToSocket(e))),this.on("send-message-to-client",(e=>d.sendMessageToClient(e)))]);return d.once("destroy",c.remove),d}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return(0,V.eZ)(this,e)}createQuery(){const e=new Q.Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let i=null;return this.fields.some((t=>(t.name===e&&(i=t.domain),!!i))),i}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}write(e,t){const i=t?.messages;return this.webSocketUrl?(i?.push(B(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,t):(i?.push(B(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:t}=await(0,d.default)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}}else{if(!this.timeInfo?.trackIdField)throw new y.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const e=this.fields.find((e=>"oid"===e.type))?.name;if(!e)throw new y.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=e}if(!this.fields)throw new y.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some((e=>e.name===this.objectIdField))||this.fields.push(new E.Z({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new y.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),(0,A.YN)(this.renderer,this.fieldsIndex),(0,A.UF)(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),(0,G.y)(this,{origin:"service"})}};(0,o._)([(0,g.Cb)({type:String})],K.prototype,"copyright",void 0),(0,o._)([(0,g.Cb)({readOnly:!0})],K.prototype,"defaultPopupTemplate",null),(0,o._)([(0,g.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],K.prototype,"definitionExpression",void 0),(0,o._)([(0,g.Cb)({type:String})],K.prototype,"displayField",void 0),(0,o._)([(0,g.Cb)({type:Y.Z})],K.prototype,"elevationInfo",void 0),(0,o._)([(0,g.Cb)(H.fields)],K.prototype,"fields",void 0),(0,o._)([(0,g.Cb)(H.fieldsIndex)],K.prototype,"fieldsIndex",void 0),(0,o._)([(0,g.Cb)({type:W.Z})],K.prototype,"geometryDefinition",void 0),(0,o._)([(0,g.Cb)({type:_.M.apiValues,json:{read:{reader:_.M.read}}})],K.prototype,"geometryType",void 0),(0,o._)([(0,g.Cb)(O.iR)],K.prototype,"labelsVisible",void 0),(0,o._)([(0,g.Cb)({type:[L.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:M.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],K.prototype,"labelingInfo",void 0),(0,o._)([(0,g.Cb)(O.rn)],K.prototype,"legendEnabled",void 0),(0,o._)([(0,g.Cb)({type:["show","hide"]})],K.prototype,"listMode",void 0),(0,o._)([(0,g.Cb)({type:v.z8})],K.prototype,"maxReconnectionAttempts",void 0),(0,o._)([(0,g.Cb)({type:v.z8})],K.prototype,"maxReconnectionInterval",void 0),(0,o._)([(0,g.Cb)(O.u1)],K.prototype,"maxScale",void 0),(0,o._)([(0,g.Cb)(O.rO)],K.prototype,"minScale",void 0),(0,o._)([(0,g.Cb)({type:String})],K.prototype,"objectIdField",void 0),(0,o._)([(0,g.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],K.prototype,"operationalLayerType",void 0),(0,o._)([(0,g.Cb)(O.C_)],K.prototype,"popupEnabled",void 0),(0,o._)([(0,g.Cb)({type:s.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],K.prototype,"popupTemplate",void 0),(0,o._)([(0,g.Cb)({type:z})],K.prototype,"purgeOptions",void 0),(0,o._)([(0,g.Cb)({types:p.A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:p.o,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],K.prototype,"renderer",null),(0,o._)([(0,w.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,w.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],K.prototype,"readRenderer",null),(0,o._)([(0,g.Cb)(O.YI)],K.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,g.Cb)()],K.prototype,"sourceJSON",void 0),(0,o._)([(0,g.Cb)({type:$.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],K.prototype,"spatialReference",void 0),(0,o._)([(0,g.Cb)({json:{read:!1}})],K.prototype,"type",void 0),(0,o._)([(0,g.Cb)(O.HQ)],K.prototype,"url",void 0),(0,o._)([(0,g.Cb)({type:Number})],K.prototype,"updateInterval",void 0),(0,o._)([(0,g.Cb)({type:String})],K.prototype,"webSocketUrl",void 0),K=(0,o._)([(0,I.j)("esri.layers.StreamLayer")],K);const X=(0,C.d)({types:c.QT}),ee=K}}]);
//# sourceMappingURL=2668.0a0ea1ab.chunk.js.map