"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9078,216],{88387:(e,a,i)=>{i.r(a),i.d(a,{default:()=>ee});var t,r=i(43697),n=(i(66577),i(51773)),o=(i(16050),i(12501),i(28756),i(92271),i(72529),i(5499),i(84382)),s=i(81571),d=i(91423),l=i(32400),m=i(3172),c=i(9790),u=i(20102),p=i(50758),S=i(92604),T=i(70586),y=i(16453),h=i(95330),f=i(5600),A=i(75215),g=(i(67676),i(71715)),b=i(52011),C=i(63213),v=i(86973),w=i(87085),E=i(17287),k=i(71612),_=i(17017),I=i(69637),M=i(6404),P=i(38009),U=i(16859),x=i(34760),Z=i(72965),G=i(28294),R=i(21506),N=i(1231),F=i(53518),j=i(35671),L=i(54306),D=i(30707),z=i(96674);let W=t=class extends z.wq{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,r._)([(0,f.Cb)({type:Number,json:{write:!0}})],W.prototype,"age",void 0),(0,r._)([(0,f.Cb)({type:Number,json:{write:!0}})],W.prototype,"ageReceived",void 0),(0,r._)([(0,f.Cb)({type:Number,json:{write:!0}})],W.prototype,"displayCount",void 0),(0,r._)([(0,f.Cb)({type:Number,json:{write:!0}})],W.prototype,"maxObservations",void 0),W=t=(0,r._)([(0,b.j)("esri.layers.support.PurgeOptions")],W);const O=W;var B=i(40555),V=i(14165),q=i(32163),Y=i(86787),J=i(82971),K=i(6570);const H=(0,F.v)();function Q(e,a){return new u.Z("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${a}`,{layer:e})}let $=class extends((0,M.M)((0,I.b)((0,k.h)((0,G.n)((0,Z.M)((0,x.Q)((0,E.Y)((0,P.q)((0,U.I)((0,y.R)((0,_.N)(w.Z)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new O,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=J.Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,a){return"string"==typeof e?{url:e,...a}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new u.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const a=(0,T.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(h.r9).then((()=>this._fetchService(a)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,j.YN)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,a,i){const t=(a=a.layerDefinition||a).drawingInfo&&a.drawingInfo.renderer||void 0;if(t){const e=(0,d.a)(t,a,i)||void 0;return e||S.Z.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:a.drawingInfo.renderer,layer:this,context:i}),e}if(a.defaultSymbol)return a.types&&a.types.length?new s.Z({defaultSymbol:X(a.defaultSymbol,a,i),field:a.typeIdField,uniqueValueInfos:a.types.map((e=>({id:e.id,symbol:X(e.symbol,e,i)})))}):new o.Z({symbol:X(a.defaultSymbol,a,i)})}async connect(e){const[{createConnection:a}]=await Promise.all([Promise.all([i.e(4599),i.e(5660)]).then(i.bind(i,95047)),this.load()]),t=this.geometryType?v.M.toJSON(this.geometryType):null,{customParameters:r=null,definitionExpression:n=null,geometryDefinition:o=null,maxReconnectionAttempts:s=0,maxReconnectionInterval:d=20,spatialReference:l=this.spatialReference}=e||this.createConnectionParameters(),m=a(this.parsedUrl,this.spatialReference,l,t,{geometry:o,where:n},s,d,r??void 0),c=(0,p.AL)([this.on("send-message-to-socket",(e=>m.sendMessageToSocket(e))),this.on("send-message-to-client",(e=>m.sendMessageToClient(e)))]);return m.once("destroy",c.remove),m}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return(0,q.eZ)(this,e)}createQuery(){const e=new V.Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,a){if(!this.fields)return null;let i=null;return this.fields.some((a=>(a.name===e&&(i=a.domain),!!i))),i}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}write(e,a){const i=a?.messages;return this.webSocketUrl?(i?.push(Q(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,a):(i?.push(Q(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:a}=await(0,m.default)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=a}}else{if(!this.timeInfo?.trackIdField)throw new u.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const e=this.fields.find((e=>"oid"===e.type))?.name;if(!e)throw new u.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=e}if(!this.fields)throw new u.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some((e=>e.name===this.objectIdField))||this.fields.push(new N.Z({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new u.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),(0,j.YN)(this.renderer,this.fieldsIndex),(0,j.UF)(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),(0,B.y)(this,{origin:"service"})}};(0,r._)([(0,f.Cb)({type:String})],$.prototype,"copyright",void 0),(0,r._)([(0,f.Cb)({readOnly:!0})],$.prototype,"defaultPopupTemplate",null),(0,r._)([(0,f.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],$.prototype,"definitionExpression",void 0),(0,r._)([(0,f.Cb)({type:String})],$.prototype,"displayField",void 0),(0,r._)([(0,f.Cb)({type:Y.Z})],$.prototype,"elevationInfo",void 0),(0,r._)([(0,f.Cb)(H.fields)],$.prototype,"fields",void 0),(0,r._)([(0,f.Cb)(H.fieldsIndex)],$.prototype,"fieldsIndex",void 0),(0,r._)([(0,f.Cb)({type:K.Z})],$.prototype,"geometryDefinition",void 0),(0,r._)([(0,f.Cb)({type:v.M.apiValues,json:{read:{reader:v.M.read}}})],$.prototype,"geometryType",void 0),(0,r._)([(0,f.Cb)(R.iR)],$.prototype,"labelsVisible",void 0),(0,r._)([(0,f.Cb)({type:[L.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:D.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],$.prototype,"labelingInfo",void 0),(0,r._)([(0,f.Cb)(R.rn)],$.prototype,"legendEnabled",void 0),(0,r._)([(0,f.Cb)({type:["show","hide"]})],$.prototype,"listMode",void 0),(0,r._)([(0,f.Cb)({type:A.z8})],$.prototype,"maxReconnectionAttempts",void 0),(0,r._)([(0,f.Cb)({type:A.z8})],$.prototype,"maxReconnectionInterval",void 0),(0,r._)([(0,f.Cb)(R.u1)],$.prototype,"maxScale",void 0),(0,r._)([(0,f.Cb)(R.rO)],$.prototype,"minScale",void 0),(0,r._)([(0,f.Cb)({type:String})],$.prototype,"objectIdField",void 0),(0,r._)([(0,f.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],$.prototype,"operationalLayerType",void 0),(0,r._)([(0,f.Cb)(R.C_)],$.prototype,"popupEnabled",void 0),(0,r._)([(0,f.Cb)({type:n.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],$.prototype,"popupTemplate",void 0),(0,r._)([(0,f.Cb)({type:O})],$.prototype,"purgeOptions",void 0),(0,r._)([(0,f.Cb)({types:l.A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:l.o,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],$.prototype,"renderer",null),(0,r._)([(0,g.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,g.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],$.prototype,"readRenderer",null),(0,r._)([(0,f.Cb)(R.YI)],$.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,f.Cb)()],$.prototype,"sourceJSON",void 0),(0,r._)([(0,f.Cb)({type:J.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],$.prototype,"spatialReference",void 0),(0,r._)([(0,f.Cb)({json:{read:!1}})],$.prototype,"type",void 0),(0,r._)([(0,f.Cb)(R.HQ)],$.prototype,"url",void 0),(0,r._)([(0,f.Cb)({type:Number})],$.prototype,"updateInterval",void 0),(0,r._)([(0,f.Cb)({type:String})],$.prototype,"webSocketUrl",void 0),$=(0,r._)([(0,b.j)("esri.layers.StreamLayer")],$);const X=(0,C.d)({types:c.QT}),ee=$},17287:(e,a,i)=>{i.d(a,{Y:()=>l});var t=i(43697),r=i(92604),n=i(70586),o=i(5600),s=(i(75215),i(67676),i(52011)),d=i(66677);const l=e=>{let a=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,d.Qc)(this.url);if((0,n.pC)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,d.Nm)(e,r.Z.getLogger(this.declaredClass)))}};return(0,t._)([(0,o.Cb)()],a.prototype,"title",null),(0,t._)([(0,o.Cb)({type:String})],a.prototype,"url",null),a=(0,t._)([(0,s.j)("esri.layers.mixins.ArcGISService")],a),a}},40555:(e,a,i)=>{i.d(a,{y:()=>o});var t=i(66643),r=i(95330),n=i(20941);async function o(e,a,i){const o=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(o&&"unique-value"===o.type&&o.styleOrigin){const s=await(0,t.q6)(o.populateFromStyle());if((0,r.k_)(i),!1===s.ok){const i=s.error;a&&a.messages&&a.messages.push(new n.Z("renderer:style-reference",`Failed to create unique value renderer from style reference: ${i.message}`,{error:i,context:a})),e.clear("renderer",a?.origin)}}}},51706:(e,a,i)=>{var t,r;function n(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function o(e){return null!=e&&!isNaN(e)&&isFinite(e)}function s(e){return e.valueExpression?t.Expression:e.field&&"string"==typeof e.field?t.Field:t.Unknown}function d(e,a){const i=a||s(e),n=e.valueUnit||"unknown";return i===t.Unknown?r.Constant:e.stops?r.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?r.ClampedLinear:"unknown"===n?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?r.Proportional:r.Additive:r.Identity:r.RealWorldSize}i.d(a,{PS:()=>s,QW:()=>d,RY:()=>t,hL:()=>r,iY:()=>n,qh:()=>o}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(t||(t={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(r||(r={}))},58333:(e,a,i)=>{i.d(a,{ET:()=>n,I4:()=>r,eG:()=>d,lF:()=>o,lj:()=>m,qP:()=>s,wW:()=>l});const t=[252,146,31,255],r={type:"esriSMS",style:"esriSMSCircle",size:6,color:t,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},n={type:"esriSLS",style:"esriSLSSolid",width:.75,color:t},o={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},s={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},d={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},l={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},m={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},80216:(e,a,i)=>{i.d(a,{Z:()=>p});var t=i(43697),r=i(2368),n=i(96674),o=i(70586),s=i(5600),d=(i(75215),i(67676),i(71715)),l=i(52011),m=i(30556),c=i(42799);let u=class extends((0,r.J)(n.wq)){constructor(e){super(e),this.legacy=null,this.timeZone="system"}readLegacy(e,a){const{timeZone:i,respectsDaylightSaving:t}=a;return{timeZone:i,respectsDaylightSaving:t}}readTimeZone(e,a){return"timeZoneIANA"in a?a.timeZoneIANA:(0,c.G)(a)}writeTimeZone(e,a){a.timeZoneIANA=e}equals(e){return!((0,o.Wi)(e)||(0,o.Wi)(this.timeZone)||(0,o.Wi)(e.timeZone))&&this.timeZone===e.timeZone}};(0,t._)([(0,s.Cb)()],u.prototype,"legacy",void 0),(0,t._)([(0,d.r)("legacy",["timeZone"])],u.prototype,"readLegacy",null),(0,t._)([(0,s.Cb)({type:String,nonNullable:!0})],u.prototype,"timeZone",void 0),(0,t._)([(0,d.r)("timeZone",["timeZone","timeZoneIANA","respectsDaylightSaving"])],u.prototype,"readTimeZone",null),(0,t._)([(0,m.c)("timeZone")],u.prototype,"writeTimeZone",null),u=(0,t._)([(0,l.j)("esri.time.TimeReference")],u);const p=u},42799:(e,a,i)=>{i.d(a,{G:()=>n});const t=new Map([["AUS Central Standard Time","Australia/Darwin"],["AUS Eastern Standard Time","Australia/Sydney"],["Afghanistan Standard Time","Asia/Kabul"],["Alaskan Standard Time","America/Anchorage"],["Aleutian Standard Time","America/Adak"],["Altai Standard Time","Asia/Barnaul"],["Arab Standard Time","Asia/Riyadh"],["Arabian Standard Time","Asia/Dubai"],["Arabic Standard Time","Asia/Baghdad"],["Argentina Standard Time","America/Buenos_Aires"],["Astrakhan Standard Time","Europe/Astrakhan"],["Atlantic Standard Time","America/Halifax"],["Aus Central W. Standard Time","Australia/Eucla"],["Azerbaijan Standard Time","Asia/Baku"],["Azores Standard Time","Atlantic/Azores"],["Bahia Standard Time","America/Bahia"],["Bangladesh Standard Time","Asia/Dhaka"],["Belarus Standard Time","Europe/Minsk"],["Bougainville Standard Time","Pacific/Bougainville"],["Canada Central Standard Time","America/Regina"],["Cape Verde Standard Time","Atlantic/Cape_Verde"],["Caucasus Standard Time","Asia/Yerevan"],["Cen. Australia Standard Time","Australia/Adelaide"],["Central America Standard Time","America/Guatemala"],["Central Asia Standard Time","Asia/Almaty"],["Central Brazilian Standard Time","America/Cuiaba"],["Central Europe Standard Time","Europe/Budapest"],["Central European Standard Time","Europe/Warsaw"],["Central Pacific Standard Time","Pacific/Guadalcanal"],["Central Standard Time","America/Chicago"],["Central Standard Time (Mexico)","America/Mexico_City"],["Chatham Islands Standard Time","Pacific/Chatham"],["China Standard Time","Asia/Shanghai"],["Cuba Standard Time","America/Havana"],["Dateline Standard Time","Etc/GMT+12"],["E. Africa Standard Time","Africa/Nairobi"],["E. Australia Standard Time","Australia/Brisbane"],["E. Europe Standard Time","Europe/Chisinau"],["E. South America Standard Time","America/Sao_Paulo"],["Easter Island Standard Time","Pacific/Easter"],["Eastern Standard Time","America/New_York"],["Eastern Standard Time (Mexico)","America/Cancun"],["Egypt Standard Time","Africa/Cairo"],["Ekaterinburg Standard Time","Asia/Yekaterinburg"],["FLE Standard Time","Europe/Kiev"],["Fiji Standard Time","Pacific/Fiji"],["GMT Standard Time","Europe/London"],["GTB Standard Time","Europe/Bucharest"],["Georgian Standard Time","Asia/Tbilisi"],["Greenland Standard Time","America/Godthab"],["Greenwich Standard Time","Atlantic/Reykjavik"],["Haiti Standard Time","America/Port-au-Prince"],["Hawaiian Standard Time","Pacific/Honolulu"],["India Standard Time","Asia/Calcutta"],["Iran Standard Time","Asia/Tehran"],["Israel Standard Time","Asia/Jerusalem"],["Jordan Standard Time","Asia/Amman"],["Kaliningrad Standard Time","Europe/Kaliningrad"],["Korea Standard Time","Asia/Seoul"],["Libya Standard Time","Africa/Tripoli"],["Line Islands Standard Time","Pacific/Kiritimati"],["Lord Howe Standard Time","Australia/Lord_Howe"],["Magadan Standard Time","Asia/Magadan"],["Magallanes Standard Time","America/Punta_Arenas"],["Marquesas Standard Time","Pacific/Marquesas"],["Mauritius Standard Time","Indian/Mauritius"],["Middle East Standard Time","Asia/Beirut"],["Montevideo Standard Time","America/Montevideo"],["Morocco Standard Time","Africa/Casablanca"],["Mountain Standard Time","America/Denver"],["Mountain Standard Time (Mexico)","America/Chihuahua"],["Myanmar Standard Time","Asia/Rangoon"],["N. Central Asia Standard Time","Asia/Novosibirsk"],["Namibia Standard Time","Africa/Windhoek"],["Nepal Standard Time","Asia/Katmandu"],["New Zealand Standard Time","Pacific/Auckland"],["Newfoundland Standard Time","America/St_Johns"],["Norfolk Standard Time","Pacific/Norfolk"],["North Asia East Standard Time","Asia/Irkutsk"],["North Asia Standard Time","Asia/Krasnoyarsk"],["North Korea Standard Time","Asia/Pyongyang"],["Omsk Standard Time","Asia/Omsk"],["Pacific SA Standard Time","America/Santiago"],["Pacific Standard Time","America/Los_Angeles"],["Pacific Standard Time (Mexico)","America/Tijuana"],["Pakistan Standard Time","Asia/Karachi"],["Paraguay Standard Time","America/Asuncion"],["Qyzylorda Standard Time","Asia/Qyzylorda"],["Romance Standard Time","Europe/Paris"],["Russia Time Zone 10","Asia/Srednekolymsk"],["Russia Time Zone 11","Asia/Kamchatka"],["Russia Time Zone 3","Europe/Samara"],["Russian Standard Time","Europe/Moscow"],["SA Eastern Standard Time","America/Cayenne"],["SA Pacific Standard Time","America/Bogota"],["SA Western Standard Time","America/La_Paz"],["SE Asia Standard Time","Asia/Bangkok"],["Saint Pierre Standard Time","America/Miquelon"],["Sakhalin Standard Time","Asia/Sakhalin"],["Samoa Standard Time","Pacific/Apia"],["Sao Tome Standard Time","Africa/Sao_Tome"],["Saratov Standard Time","Europe/Saratov"],["Singapore Standard Time","Asia/Singapore"],["South Africa Standard Time","Africa/Johannesburg"],["South Sudan Standard Time","Africa/Juba"],["Sri Lanka Standard Time","Asia/Colombo"],["Sudan Standard Time","Africa/Khartoum"],["Syria Standard Time","Asia/Damascus"],["Taipei Standard Time","Asia/Taipei"],["Tasmania Standard Time","Australia/Hobart"],["Tocantins Standard Time","America/Araguaina"],["Tokyo Standard Time","Asia/Tokyo"],["Tomsk Standard Time","Asia/Tomsk"],["Tonga Standard Time","Pacific/Tongatapu"],["Transbaikal Standard Time","Asia/Chita"],["Turkey Standard Time","Europe/Istanbul"],["Turks And Caicos Standard Time","America/Grand_Turk"],["US Eastern Standard Time","America/Indianapolis"],["US Mountain Standard Time","America/Phoenix"],["UTC","Etc/GMT"],["UTC+01","Etc/GMT-1"],["UTC+02","Etc/GMT-2"],["UTC+03","Etc/GMT-3"],["UTC+04","Etc/GMT-4"],["UTC+05","Etc/GMT-5"],["UTC+06","Etc/GMT-6"],["UTC+07","Etc/GMT-7"],["UTC+08","Etc/GMT-8"],["UTC+09","Etc/GMT-9"],["UTC+10","Etc/GMT-10"],["UTC+11","Etc/GMT-11"],["UTC+12","Etc/GMT-12"],["UTC+13","Etc/GMT-13"],["UTC+14","Etc/GMT-14"],["UTC-01","Etc/GMT+1"],["UTC-02","Etc/GMT+2"],["UTC-03","Etc/GMT+3"],["UTC-04","Etc/GMT+4"],["UTC-05","Etc/GMT+5"],["UTC-06","Etc/GMT+6"],["UTC-07","Etc/GMT+7"],["UTC-08","Etc/GMT+8"],["UTC-09","Etc/GMT+9"],["UTC-10","Etc/GMT+10"],["UTC-11","Etc/GMT+11"],["UTC-12","Etc/GMT+12"],["Ulaanbaatar Standard Time","Asia/Ulaanbaatar"],["Venezuela Standard Time","America/Caracas"],["Vladivostok Standard Time","Asia/Vladivostok"],["Volgograd Standard Time","Europe/Volgograd"],["W. Australia Standard Time","Australia/Perth"],["W. Central Africa Standard Time","Africa/Lagos"],["W. Europe Standard Time","Europe/Berlin"],["W. Mongolia Standard Time","Asia/Hovd"],["West Asia Standard Time","Asia/Tashkent"],["West Bank Standard Time","Asia/Hebron"],["West Pacific Standard Time","Pacific/Port_Moresby"],["Yakutsk Standard Time","Asia/Yakutsk"],["Yukon Standard Time","America/Whitehorse"]]);var r=i(17126);function n(e,a="system"){if(!e||!t.has(e.timeZone))return a;const i=t.get(e.timeZone);return e.timeZone.startsWith("UTC")||e.respectsDaylightSaving?i:function(e){const a=r.ou.local().setZone(e),i=Math.min(a.set({month:1,day:1}).offset,a.set({month:5}).offset);return 0===i?"Etc/UTC":`Etc/GMT${r.Qf.instance(-i).formatOffset(0,"narrow")}`}(i)}}}]);