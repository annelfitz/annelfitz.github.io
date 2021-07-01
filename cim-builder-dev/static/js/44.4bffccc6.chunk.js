(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[44,142,143],{434:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i}));"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof e||"undefined"!=typeof self&&self;function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return o(null==t&&r.path)}},r.exports),r.exports}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}}).call(this,r(375))},439:function(e,t,r){"use strict";r(6);var i=r(5),n=r(444),o=r(545);const a=i.a.getLogger("esri.views.webgl.FrameBufferObject");class s{constructor(e,t,r,i){if(this._context=e,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc={...t},e.instanceCounter.increment(4,this),r){let t;var a;if(Array.isArray(r))for(const i of r){const{attachmentPoint:r,texture:o}=i,a=o instanceof n.a?o:new n.a(e,o);t=a.descriptor,this._colorAttachments.set(r,a),this._validateColorAttachmentPoint(r),this._validateTextureDimensions(t,this._desc)}else r instanceof n.a?(t=r.descriptor,this._colorAttachments.set(36064,r)):(t=r,this._colorAttachments.set(36064,new n.a(e,r))),0!==(null==(a=this._desc)?void 0:a.colorTarget)&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),this._validateTextureDimensions(t,this._desc)}if(i instanceof o.a){var c;const e=null!=(c=this._desc.depthStencilTarget)?c:3;2===e?this._stencilAttachment=i:1===e||3===e?this._depthAttachment=i:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),s._validateBufferDimensions(i.descriptor,this._desc)}else if(i){let e;this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),i instanceof n.a?(this._depthStencilTexture=i,e=this._depthStencilTexture.descriptor):(e=i,this._depthStencilTexture=new n.a(this._context,e)),this._validateTextureDimensions(e,this._desc)}}dispose(){if(!this._desc)return;const e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(4,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const e=this._colorAttachments.get(36064);return e&&e instanceof n.a?e:null}get colorAttachment(){return this._colorAttachments.get(36064)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}getColorTexture(e){const t=this._colorAttachments.get(e);return t&&t instanceof n.a?t:null}attachColorTexture(e,t=36064){if(!e)return;this._validateColorAttachmentPoint(t);const r=e.descriptor;if(this._validateTextureDimensions(r,this._desc),this._disposeColorAttachments(),this._initialized){this._context.bindFramebuffer(this);const r=this._context.gl;r.framebufferTexture2D(r.FRAMEBUFFER,t,r.TEXTURE_2D,e.glName,0)}this._colorAttachments.set(t,e)}detachColorTexture(e=36064){const t=this._colorAttachments.get(e);if(t instanceof n.a){const r=t;if(this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl;t.framebufferTexture2D(t.FRAMEBUFFER,e,t.TEXTURE_2D,null,0)}return this._colorAttachments.delete(e),r}}attachDepthStencilTexture(e){if(!e)return;const t=e.descriptor;if(34041!==t.pixelFormat&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),34042!==t.dataType&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDimensions(t,this._desc),this._desc.depthStencilTarget&&4!==this._desc.depthStencilTarget&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl;t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,e.glName,0)}this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;if(e&&this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl;this._context.gl.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,null,0)}return this._depthStencilTexture=null,e}attachDepthStencilBuffer(e){if(!e)return;const t=e.descriptor;if(34041!==t.internalFormat&&33189!==t.internalFormat&&console.error("Depth/Stencil buffer must have correct internalFormat"),s._validateBufferDimensions(t,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=34041===t.internalFormat?3:1,this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl,r=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,r,t.RENDERBUFFER,e.glName)}this._depthAttachment=e}detachDepthStencilBuffer(){const e=this._context.gl,t=this._depthAttachment;if(t&&this._initialized){this._context.bindFramebuffer(this);const t=1===this._desc.depthStencilTarget?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,t,e.RENDERBUFFER,null)}return this._depthAttachment=null,t}copyToTexture(e,t,r,i,n,o,a){(e<0||t<0||n<0||o<0)&&console.error("Offsets cannot be negative!"),(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!");const s=this._desc,c=a.descriptor;3553!==a.descriptor.target&&console.error("Texture target must be TEXTURE_2D!"),(e+r>s.width||t+i>s.height||n+r>c.width||o+i>c.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const l=this._context;l.bindTexture(a,0),l.bindFramebuffer(this),l.gl.copyTexSubImage2D(3553,0,n,o,e,t,r,i)}readPixels(e,t,r,i,n,o,a){(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!"),a||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,r,i,n,o,a)}resize(e,t){const r=this._desc;if(r.width!==e||r.height!==t){if(!this._initialized)return r.width=e,r.height=t,this._colorAttachments.forEach(r=>{r&&r.resize(e,t)}),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,t));r.width=e,r.height=t,this._colorAttachments.forEach(r=>{r&&r.resize(e,t)}),null!=this._depthStencilTexture?this._depthStencilTexture.resize(e,t):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,t),this._stencilAttachment&&this._stencilAttachment.resize(e,t)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(){var e,t,r,i;const a=this._context.gl;if(this._initialized)return void a.bindFramebuffer(a.FRAMEBUFFER,this.glName);this._glName&&a.deleteFramebuffer(this._glName);const s=this._context,l=a.createFramebuffer(),u=this._desc,d=null!=(e=u.colorTarget)?e:1,h=null!=(t=u.width)?t:1,f=null!=(r=u.height)?r:1;if(a.bindFramebuffer(a.FRAMEBUFFER,l),0===this._colorAttachments.size)if(0===d)this._colorAttachments.set(36064,c(s,u));else{const e=new o.a(s,{internalFormat:32854,width:h,height:f});this._colorAttachments.set(36064,e)}this._colorAttachments.forEach((e,t)=>{e&&(e instanceof n.a?a.framebufferTexture2D(a.FRAMEBUFFER,t,a.TEXTURE_2D,e.glName,0):a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,e.glName))});const m=null!=(i=u.depthStencilTarget)?i:0;switch(m){case 1:case 3:{this._depthAttachment||(this._depthAttachment=new o.a(s,{internalFormat:1===u.depthStencilTarget?33189:34041,width:h,height:f}));const e=1===m?a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT;a.framebufferRenderbuffer(a.FRAMEBUFFER,e,a.RENDERBUFFER,this._depthAttachment.glName);break}case 2:this._stencilAttachment||(this._stencilAttachment=new o.a(s,{internalFormat:36168,width:h,height:f})),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.STENCIL_ATTACHMENT,a.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:if(!this._depthStencilTexture){s.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const e={target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:h,height:f};this._depthStencilTexture=new n.a(s,e)}a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,this._depthStencilTexture.glName,0)}this._glName=l,this._initialized=!0}_disposeColorAttachments(){this._colorAttachments.forEach((e,t)=>{if(e instanceof n.a){if(this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl;e.framebufferTexture2D(e.FRAMEBUFFER,t,e.TEXTURE_2D,null,0)}e.dispose()}else if(e instanceof WebGLRenderbuffer){const r=this._context.gl;this._initialized&&(this._context.bindFramebuffer(this),r.framebufferRenderbuffer(r.FRAMEBUFFER,t,r.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(e)}}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const t=1===this._desc.depthStencilTarget?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,null,0)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}static _validateBufferDimensions(e,t){console.assert(e.width>=0&&e.height>=0),void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}_validateTextureDimensions(e,t){console.assert(e.width>=0&&e.height>=0),3553!==e.target&&console.error("Texture type must be TEXTURE_2D!"),void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Color attachment texture must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}_validateColorAttachmentPoint(e){if(-1===s._MAX_COLOR_ATTACHMENTS){const e=this._context.capabilities.drawBuffers;if(e){const t=this._context.gl;s._MAX_COLOR_ATTACHMENTS=t.getParameter(e.MAX_COLOR_ATTACHMENTS)}else s._MAX_COLOR_ATTACHMENTS=1}const t=e-36064;t+1>s._MAX_COLOR_ATTACHMENTS&&a.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${t+1}. Implementation supports up to ${s._MAX_COLOR_ATTACHMENTS} color attachments`)}}s._MAX_COLOR_ATTACHMENTS=-1;const c=(e,t)=>new n.a(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:t.width,height:t.height});t.a=s},441:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o}));var i=r(434),n=Object(i.b)((function(e){var t;void 0!==(t=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(e.exports=t)})),o=Object(i.b)((function(e){var t;void 0!==(t=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"])&&(e.exports=t)})),a=Object(i.b)((function(e){var t;void 0!==(t=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"])&&(e.exports=t)}))},444:function(e,t,r){"use strict";var i=r(3),n=r(55),o=r(495);class a{constructor(e,t,r=null){this._context=null,this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(0,this),this._context=e,this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){if(this._context&&this._context.gl){if(this._glName){const e=this._context.gl;this._context.unbindTextureAllUnits(this),e.deleteTexture(this._glName),this._glName=null}this._context.instanceCounter.decrement(0,this),this._context=null}}release(){this.dispose()}resize(e,t){const r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,this.setData(null))}setData(e){if(!this._context||!this._context.gl)return;const t=this._context.gl;this._glName||(this._glName=t.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const r=this._context.getBoundTexture(0);this._context.bindTexture(this,0);const n=this._descriptor;a._validateTexture(this._context,n),t.pixelStorei(t.UNPACK_ALIGNMENT,n.unpackAlignment),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,n.flipped?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.preMultiplyAlpha?1:0);const o=n.pixelFormat;let s=n.internalFormat?n.internalFormat:o;if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let r=e.width,i=e.height;e instanceof HTMLVideoElement&&(r=e.videoWidth,i=e.videoHeight),n.width&&n.height&&console.assert(r===n.width&&i===n.height),t.texImage2D(t.TEXTURE_2D,0,s,o,n.dataType,e),n.hasMipmap&&this.generateMipmap(),void 0===n.width&&(n.width=r),void 0===n.height&&(n.height=i)}else{null!=n.width&&null!=n.height||console.error("Width and height must be specified!"),t.DEPTH24_STENCIL8&&s===t.DEPTH_STENCIL&&(s=t.DEPTH24_STENCIL8);let r=n.width,a=n.height;if(function(e){return Object(i.i)(e)&&"type"in e&&"compressed"===e.type}(e)){const i=Math.round(Math.log(Math.max(r,a))/Math.LN2)+1;n.hasMipmap=n.hasMipmap&&i===e.levels.length;for(let o=0;;++o){const i=e.levels[Math.min(o,e.levels.length-1)];if(t.compressedTexImage2D(t.TEXTURE_2D,o,s,r,a,0,i),1===r&&1===a||!n.hasMipmap)break;r=Math.max(1,r>>1),a=Math.max(1,a>>1)}}else if(Object(i.i)(e))t.texImage2D(t.TEXTURE_2D,0,s,r,a,0,o,n.dataType,e),n.hasMipmap&&this.generateMipmap();else for(let e=0;t.texImage2D(t.TEXTURE_2D,e,s,r,a,0,o,n.dataType,null),(1!==r||1!==a)&&n.hasMipmap;++e)r=Math.max(1,r>>1),a=Math.max(1,a>>1)}a._applySamplingMode(t,this._descriptor),a._applyWrapMode(t,this._descriptor),a._applyAnisotropicFilteringParameters(this._context,this._descriptor),r&&this._context.bindTexture(r,0)}updateData(e,t,r,i,n,o){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const a=this._context.gl,s=this._descriptor,c=this._context.getBoundTexture(0);this._context.bindTexture(this,0),(t<0||r<0||i>s.width||n>s.height||t+i>s.width||r+n>s.height)&&console.error("An attempt to update out of bounds of the texture!"),a.pixelStorei(a.UNPACK_ALIGNMENT,s.unpackAlignment),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,s.flipped?1:0),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.preMultiplyAlpha?1:0),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?a.texSubImage2D(a.TEXTURE_2D,e,t,r,s.pixelFormat,s.dataType,o):a.texSubImage2D(a.TEXTURE_2D,e,t,r,i,n,s.pixelFormat,s.dataType,o),this._context.bindTexture(c,0)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,a._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.getBoundTexture(0);this._context.bindTexture(this,0);const r=this._context.gl;r.generateMipmap(r.TEXTURE_2D),this._context.bindTexture(t,0)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,a._validateTexture(this._context,this._descriptor),this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,a._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(a._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(a._applyWrapMode(e,t),this._wrapModeDirty=!1)}static _validateTexture(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");const r=Object(n.f)(t.width)&&Object(n.f)(t.height);Object(o.a)(e.gl)||r||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(i=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(i=9728)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){if(null==t.maxAnisotropy)return;const r=e.capabilities.textureFilterAnisotropic;if(!r)return;const i=e.gl;i.texParameterf(i.TEXTURE_2D,r.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy)}}t.a=a},445:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(6);var i=r(5);r(12);function n(e){}i.a.getLogger("esri/views/webgl")},447:function(e,t,r){"use strict";function i(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}r.d(t,"a",(function(){return i})),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(i||(i={}))},495:function(e,t,r){"use strict";t.a=function(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}},537:function(e,t,r){"use strict";function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t){return new Float64Array(e,t,16)}r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return o}));const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:i,clone:n,fromValues:function(e,t,r,i,n,o,a,s,c,l,u,d,h,f,m,p){return[e,t,r,i,n,o,a,s,c,l,u,d,h,f,m,p]},createView:o,IDENTITY:a})},545:function(e,t,r){"use strict";t.a=class{constructor(e,t){this._context=e,this._desc=t,this._context.instanceCounter.increment(5,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this),r.renderbufferStorage(r.RENDERBUFFER,t.internalFormat,t.width,t.height)}get descriptor(){return this._desc}resize(e,t){const r=this._desc;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const i=this._context.gl;this._context.bindRenderbuffer(this),i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(5,this),this._context=null)}}},546:function(e,t,r){"use strict";function i(){return[1,0,0,0,1,0,0,0,1]}function n(e,t){return new Float64Array(e,t,9)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));Object.freeze({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,r,i,n,o,a,s,c){return[e,t,r,i,n,o,a,s,c]},createView:n})},553:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s}));r(55),r(64),r(197),r(59);var i=r(571);r(30),r(544);Object(i.a)();class n{constructor(e){this.message=e}toString(){return"AssertException: "+this.message}}function o(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new n(t)}}function a(e,t,r,i){e[12]=t,e[13]=r,e[14]=i}function s(e,t=0){let r=0;for(let i=0;i<4;i++)r+=e[t+i]*c[i];return r}const c=[1/256,1/65536,1/16777216,1/4294967296];s(new Uint8ClampedArray([255,255,255,255]))},566:function(e,t,r){"use strict";function i(){return[0,0,0,1]}function n(e,t){return new Float64Array(e,t,4)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));const o=[0,0,0,1];Object.freeze({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:function(e,t,r,i){return[e,t,r,i]},createView:n,IDENTITY:o})},567:function(e,t,r){"use strict";function i(e,t,r=32774,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function n(e,t,r,i,n=32774,o=32774,a=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:o,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}r.d(t,"a",(function(){return D})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return n})),r.d(t,"f",(function(){return i}));const o={zNear:0,zFar:1},a={r:!0,g:!0,b:!0,a:!0};function s(e){return v.intern(e)}function c(e){return _.intern(e)}function l(e){return T.intern(e)}function u(e){return w.intern(e)}function d(e){return M.intern(e)}function h(e){return C.intern(e)}function f(e){return P.intern(e)}function m(e){return F.intern(e)}function p(e){return R.intern(e)}class g{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),r=this.interns;return r.has(t)||r.set(t,this.makeRef(e)),r.get(t)}}function b(e){return"["+e.join(",")+"]"}const v=new g(x,e=>({__tag:"Blending",...e}));function x(e){return e?b([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const _=new g(O,e=>({__tag:"Culling",...e}));function O(e){return e?b([e.face,e.mode]):null}const T=new g(y,e=>({__tag:"PolygonOffset",...e}));function y(e){return e?b([e.factor,e.units]):null}const w=new g(S,e=>({__tag:"DepthTest",...e}));function S(e){return e?b([e.func]):null}const M=new g(j,e=>({__tag:"StencilTest",...e}));function j(e){return e?b([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const C=new g(A,e=>({__tag:"DepthWrite",...e}));function A(e){return e?b([e.zNear,e.zFar]):null}const P=new g(E,e=>({__tag:"ColorWrite",...e}));function E(e){return e?b([e.r,e.g,e.b,e.a]):null}const F=new g(I,e=>({__tag:"StencilWrite",...e}));function I(e){return e?b([e.mask]):null}const R=new g((function(e){return e?b([x(e.blending),O(e.culling),y(e.polygonOffset),S(e.depthTest),j(e.stencilTest),A(e.depthWrite),E(e.colorWrite),I(e.stencilWrite)]):null}),e=>({blending:s(e.blending),culling:c(e.culling),polygonOffset:l(e.polygonOffset),depthTest:u(e.depthTest),stencilTest:d(e.stencilTest),depthWrite:h(e.depthWrite),colorWrite:f(e.colorWrite),stencilWrite:m(e.stencilWrite)}));class D{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this.setBlending(e.blending),this.setCulling(e.culling),this.setPolygonOffset(e.polygonOffset),this.setDepthTest(e.depthTest),this.setStencilTest(e.stencilTest),this.setDepthWrite(e.depthWrite),this.setColorWrite(e.colorWrite),this.setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}setBlending(e){this._blending=this.setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}setCulling(e){this._culling=this.setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}setPolygonOffset(e){this._polygonOffset=this.setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}setDepthTest(e){this._depthTest=this.setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}setStencilTest(e){this._stencilTest=this.setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}setDepthWrite(e){this._depthWrite=this.setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}setColorWrite(e){this._colorWrite=this.setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}setStencilWrite(e){this._stencilWrite=this.setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}},571:function(e,t,r){"use strict";function i(){return[0,0,0,0]}function n(e,t,r,i){return[e,t,r,i]}function o(e,t){return new Float64Array(e,t,4)}function a(){return[0,0,0,0]}function s(){return n(1,1,1,1)}function c(){return n(1,0,0,0)}function l(){return n(0,1,0,0)}function u(){return n(0,0,1,0)}function d(){return n(0,0,0,1)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o}));const h=[0,0,0,0],f=s(),m=c(),p=l(),g=u(),b=d();Object.freeze({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:n,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let i=0;i<r;++i)t[i]=e[i];return t},createView:o,zeros:a,ones:s,unitX:c,unitY:l,unitZ:u,unitW:d,ZEROS:h,ONES:f,UNIT_X:m,UNIT_Y:p,UNIT_Z:g,UNIT_W:b})},572:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o}));var i=r(447);const n=.1,o=.001;function a(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(i.a`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.a.float(o)}) { discard; } }
      `);break;case 1:r.code.add(i.a`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(i.a`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(i.a`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}},573:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i,n=r(3),o=r(64),a=r(38),s=r(447);function c(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=s.a`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,i=s.a`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,n=t.sliceHighlightDisabled?s.a`#define highlightSlice(_color_, _pos_) (_color_)`:s.a`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(n)}else{const r=s.a`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}(i=c||(c={})).bindUniformsWithOrigin=function(e,t,r){i.bindUniforms(e,t,r.slicePlane,r.origin)},i.bindUniforms=function(e,t,r,i){t.slicePlaneEnabled&&(Object(n.i)(r)?(i?(Object(a.g)(l,r.origin,i),e.setUniform3fv("slicePlaneOrigin",l)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",o.b),e.setUniform3fv("slicePlaneBasis2",o.b),e.setUniform3fv("slicePlaneOrigin",o.b)))};const l=Object(o.e)()},574:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(447);function n(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(i.a`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(i.a`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?i.a`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(i.a`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(i.a`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?i.a`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(i.a`
      vec4 vvColor() { return vec4(1.0); }
    `)}!function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,r){t(e,r),r.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",r.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",r.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,r){t(e,r),r.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",r.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",r.vvSymbolRotationMatrix))}}(n||(n={}))},575:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i,n=r(447),o=r(708);function a(e){e.fragment.include(o.a),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(n.a`
    int chooseCascade(float _linearDepth, out mat4 mat) {
      vec4 distance = uShadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= uShadowMapNum) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
    }
  `)}(i=a||(a={})).bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},i.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},i.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}},576:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(447);function n(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(i.a`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(i.a`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(i.a`
      void forwardTextureCoordinates() {}
    `)}},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(447);function n(e){const t=i.a`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function o(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(i.a`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(n),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(i.a`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.a`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}},594:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}));var i=r(447);function n(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(i.a`
    //Compare the linearized depths of the fragment and the terrain. If fragment is on the wrong side of the terrain, discard it.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function o(e,t,r){r.multipassTerrainEnabled&&r.terrainLinearDepthTexture&&(e.setUniform1i("terrainDepthTexture",10),t.bindTexture(r.terrainLinearDepthTexture,10))}},595:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i,n=r(64),o=r(447),a=r(707),s=r(663);function c(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(s.a,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[o.a`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,o.a`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?o.a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,o.a`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,o.a`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?o.a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:o.a``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}(i=c||(c={})).Uniforms=class{},i.bindCustomOrigin=function(e,t){Object(a.b)(t,l,u,3),e.setUniform3fv("viewOriginHi",l),e.setUniform3fv("viewOriginLo",u)};const l=Object(n.e)(),u=Object(n.e)()},596:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(447),n=r(614),o=r(751);Object(n.b)(0,.6,.2);function a(e,t){const r=e.fragment,n=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&n&&e.include(o.a,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(i.a`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(i.a`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(i.a`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(i.a`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(i.a`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(i.a`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(i.a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${n?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(i.a`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}(a||(a={})).bindUniforms=function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},597:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(447);function n(e,t){t.linearDepth?e.vertex.code.add(i.a`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):e.vertex.code.add(i.a`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}},598:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(447);function n(e){e.attributes.add("position","vec3"),e.vertex.code.add(i.a`
    vec3 positionModel() { return position; }
  `)}},599:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(447);function n(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(i.a`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(i.a`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}},604:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(447),n=r(662);function o(e){e.vertex.code.add(i.a`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),e.vertex.code.add(i.a`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),e.vertex.code.add(i.a`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),e.vertex.code.add(i.a`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),e.vertex.code.add(i.a`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),e.vertex.code.add(i.a`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),e.vertex.code.add(i.a`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `)}function a(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(o),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(i.a`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?i.a`vec3 worldNormal = normalize(worldPos + localOrigin);`:i.a`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?i.a`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:i.a`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(i.a`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}(o||(o={})).bindUniforms=function(e,t){if(t.screenSizePerspective){Object(n.a)(t.screenSizePerspective,e,"screenSizePerspective");const r=t.screenSizePerspectiveAlignment||t.screenSizePerspective;Object(n.a)(r,e,"screenSizePerspectiveAlignment")}},function(e){e.bindUniforms=function(e,t,r){if(!t.verticalOffset)return;const i=function(e,t,r,i=s){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),n=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*n,i.perDistance,i.minWorldLength,i.maxWorldLength)}}(a||(a={}));const s={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},605:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(447),n=r(741);function o(e){const t=e.fragment.code;t.add(i.a`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(i.a`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(i.a`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function a(e,t){const r=e.fragment.code;e.include(n.a),3===t.pbrMode||4===t.pbrMode?(r.add(i.a`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i.a`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(i.a`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(i.a`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(i.a`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(o),r.add(i.a`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(i.a`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(i.a`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(i.a`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(i.a`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(i.a`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}},613:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return u}));var i=r(64),n=r(35),o=r(38),a=r(546),s=r(566),c=r(544);function l(e,t,r){r*=.5;const i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e}function u(e,t){const r=2*Math.acos(t[3]),i=Math.sin(r/2);return i>n.a?(e[0]=t[0]/i,e[1]=t[1]/i,e[2]=t[2]/i):(e[0]=1,e[1]=0,e[2]=0),r}function d(e,t,r){const i=t[0],n=t[1],o=t[2],a=t[3],s=r[0],c=r[1],l=r[2],u=r[3];return e[0]=i*u+a*s+n*l-o*c,e[1]=n*u+a*c+o*s-i*l,e[2]=o*u+a*l+i*c-n*s,e[3]=a*u-i*s-n*c-o*l,e}function h(e,t,r,i){const o=t[0],a=t[1],s=t[2],c=t[3];let l,u,d,h,f,m=r[0],p=r[1],g=r[2],b=r[3];return u=o*m+a*p+s*g+c*b,u<0&&(u=-u,m=-m,p=-p,g=-g,b=-b),1-u>n.a?(l=Math.acos(u),d=Math.sin(l),h=Math.sin((1-i)*l)/d,f=Math.sin(i*l)/d):(h=1-i,f=i),e[0]=h*o+f*m,e[1]=h*a+f*p,e[2]=h*s+f*g,e[3]=h*c+f*b,e}function f(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function m(e,t){const r=t[0]+t[4]+t[8];let i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const n=(r+1)%3,o=(r+2)%3;i=Math.sqrt(t[3*r+r]-t[3*n+n]-t[3*o+o]+1),e[r]=.5*i,i=.5/i,e[3]=(t[3*n+o]-t[3*o+n])*i,e[n]=(t[3*n+r]+t[3*r+n])*i,e[o]=(t[3*o+r]+t[3*r+o])*i}return e}const p=c.c,g=c.k,b=c.a,v=d,x=c.b,_=c.d,O=c.i,T=c.e,y=T,w=c.f,S=w,M=c.j,j=c.g,C=c.h;const A=Object(i.e)(),P=Object(i.g)(1,0,0),E=Object(i.g)(0,1,0);const F=Object(s.a)(),I=Object(s.a)();const R=Object(a.a)();Object.freeze({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:l,getAxisAngle:u,multiply:d,rotateX:function(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=i*c+a*s,e[1]=n*c+o*s,e[2]=o*c-n*s,e[3]=a*c-i*s,e},rotateY:function(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=i*c-o*s,e[1]=n*c+a*s,e[2]=o*c+i*s,e[3]=a*c-n*s,e},rotateZ:function(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=i*c+n*s,e[1]=n*c-i*s,e[2]=o*c+a*s,e[3]=a*c-o*s,e},calculateW:function(e,t){const r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e},slerp:h,random:function(e){const t=Object(n.b)(),r=Object(n.b)(),i=Object(n.b)(),o=Math.sqrt(1-t),a=Math.sqrt(t);return e[0]=o*Math.sin(2*Math.PI*r),e[1]=o*Math.cos(2*Math.PI*r),e[2]=a*Math.sin(2*Math.PI*i),e[3]=a*Math.cos(2*Math.PI*i),e},invert:function(e,t){const r=t[0],i=t[1],n=t[2],o=t[3],a=r*r+i*i+n*n+o*o,s=a?1/a:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-n*s,e[3]=o*s,e},conjugate:f,fromMat3:m,fromEuler:function(e,t,r,i){const n=.5*Math.PI/180;t*=n,r*=n,i*=n;const o=Math.sin(t),a=Math.cos(t),s=Math.sin(r),c=Math.cos(r),l=Math.sin(i),u=Math.cos(i);return e[0]=o*c*u-a*s*l,e[1]=a*s*u+o*c*l,e[2]=a*c*l-o*s*u,e[3]=a*c*u+o*s*l,e},str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:p,set:g,add:b,mul:v,scale:x,dot:_,lerp:O,length:T,len:y,squaredLength:w,sqrLen:S,normalize:M,exactEquals:j,equals:C,rotationTo:function(e,t,r){const i=Object(o.e)(t,r);return i<-.999999?(Object(o.d)(A,P,t),Object(o.k)(A)<1e-6&&Object(o.d)(A,E,t),Object(o.o)(A,A),l(e,A,Math.PI),e):i>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(Object(o.d)(A,t,r),e[0]=A[0],e[1]=A[1],e[2]=A[2],e[3]=1+i,M(e,e))},sqlerp:function(e,t,r,i,n,o){return h(F,t,n,o),h(I,r,i,o),h(e,F,I,2*o*(1-o)),e},setAxes:function(e,t,r,i){const n=R;return n[0]=r[0],n[3]=r[1],n[6]=r[2],n[1]=i[0],n[4]=i[1],n[7]=i[2],n[2]=-t[0],n[5]=-t[1],n[8]=-t[2],M(e,m(e,n))}})},614:function(e,t,r){"use strict";function i(){return new Float32Array(3)}function n(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function o(){return i()}function a(){return n(1,1,1)}function s(){return n(1,0,0)}function c(){return n(0,1,0)}function l(){return n(0,0,1)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));const u=o(),d=a(),h=s(),f=c(),m=l();Object.freeze({__proto__:null,create:i,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:n,createView:function(e,t){return new Float32Array(e,t,3)},zeros:o,ones:a,unitX:s,unitY:c,unitZ:l,ZEROS:u,ONES:d,UNIT_X:h,UNIT_Y:f,UNIT_Z:m})},619:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(50);async function n(e,t){const{data:r}=await Object(i.default)(e,{responseType:"image",...t});return r}},628:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(12);class n{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new i.a(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new n(this.major,this.minor,this._context)}static parse(e,t=""){const[r,o]=e.split("."),a=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(a))throw new i.a((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!o||!o.match||!o.match(a))throw new i.a((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const s=parseInt(r,10),c=parseInt(o,10);return new n(s,c,t)}}},636:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const i=r(5).a.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class n{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&i.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class o extends n{constructor(){super(...arguments),this.vertex=new c,this.fragment=new c,this.attributes=new l,this.varyings=new u,this.extensions=new d,this.constants=new h}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s="vertex"===e?m:f,c=this.constants.generateSource().concat(n.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}}class a{constructor(){this._entries=new Array,this._set=new Set}add(e,t,r){const i=`${e}_${t}_${r}`;return this._set.has(i)||(this._entries.push([e,t,r]),this._set.add(i)),this}generateSource(){return this._entries.map(e=>`uniform ${e[1]} ${e[0]}${(e=>e?`[${e}]`:"")(e[2])};`)}}class s{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class c extends n{constructor(){super(...arguments),this.uniforms=new a,this.code=new s,this.constants=new h}get builder(){return this}}class l{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map(e=>`attribute ${e[1]} ${e[0]};`)}}class u{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class d{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?d.ALLOWLIST_VERTEX:d.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(e=>t.includes(e)).map(e=>`#extension ${e} : enable`)}}d.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],d.ALLOWLIST_VERTEX=[];class h{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=h.numberToFloatStr(r);break;case"int":i=h.numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])},                            ${h.numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])},                            ${h.numberToFloatStr(r[2])},                            ${h.numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])},                             ${h.numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])},                             ${h.numberToIntStr(r[2])},                             ${h.numberToIntStr(r[3])})`;break;case"bvec2":i=`bvec2(${r[0].toString()},                             ${r[1].toString()})`;break;case"bvec3":i=`bvec3(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()})`;break;case"bvec4":i=`bvec4(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()},                             ${r[3].toString()})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,e=>h.numberToFloatStr(e)).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const f="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",m="precision highp float;\nprecision highp sampler2D;"},637:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(447),n=r(708);function o(e){e.include(n.a),e.code.add(i.a`
    float linearDepthFromFloat(float depth, vec2 nearFar) {
      return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
    }

    float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
      return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
    }
  `)}},638:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(447);function n(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(i.a`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(i.a`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
      }
    `)):e.vertex.code.add(i.a`
      void forwardLinearDepth() {}
    `)}},639:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(447);function n(e){e.vertex.code.add(i.a`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}},640:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(447);function n(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.a`
      void forwardVertexColor() { vColor = color; }
    `),e.vertex.code.add(i.a`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):e.vertex.code.add(i.a`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}},653:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var i=r(447),n=r(741),o=r(575),a=r(605),s=r(599);function c(e,t){const r=e.fragment,n=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===n?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(i.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===n?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(i.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===n&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(i.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(i.a`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function l(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(i.a`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function u(e,t){const r=e.fragment;e.include(l),e.include(s.a,t),0!==t.pbrMode&&e.include(a.a,t),e.include(c,t),t.receiveShadows&&e.include(o.a,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(n.a),r.code.add(i.a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?r.code.add(i.a`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===t.viewingMode?r.code.add(i.a`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):r.code.add(i.a`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),r.code.add(i.a`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?r.code.add(i.a`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(i.a`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),r.code.add(i.a`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),r.code.add(i.a`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),r.code.add(i.a`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),r.code.add(i.a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?i.a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i.a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}},662:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return j})),r.d(t,"c",(function(){return w})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return S})),r.d(t,"f",(function(){return T}));var i=r(3),n=r(55),o=r(64),a=r(38),s=r(485),c=r(553),l=r(739);function u(e,t,r){const i=r.parameters,n=r.paddingPixelsOverride;return f.scale=Math.min(i.divisor/(t-i.offset),1),f.factor=function(e){return Math.abs(e*e*e)}(e),f.minPixelSize=i.minPixelSize,f.paddingPixels=n,f}function d(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function h(e,t){return Math.max(Object(n.g)(e*t.scale,e,t.factor),d(e,t))}Object(n.d)(10),Object(n.d)(12),Object(n.d)(70),Object(n.d)(40);const f={scale:0,factor:0,minPixelSize:0,paddingPixels:0},m=Object(s.b)();function p(e,t,r,n,o,u,d){const h=Object(l.b)(t),f=r.tolerance;if(!h)if(e.boundingInfo)Object(c.a)(0===e.primitiveType),function e(t,r,n,o,c,l){if(Object(i.h)(t))return;const u=function(e,t,r){return Object(a.r)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(r,n,g);if(Object(s.l)(m,t.getBBMin()),Object(s.k)(m,t.getBBMax()),Object(i.i)(c)&&c.applyToAabb(m),function(e,t,r,i){return function(e,t,r,i,n){const o=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(o,a),c=Math.max(o,a);const l=(e[1]-i-t[1])*r[1],u=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(l,u)),c<0)return!1;if(s=Math.max(s,Math.min(l,u)),s>c)return!1;const d=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(d,h)),!(c<0)&&(s=Math.max(s,Math.min(d,h)),!(s>c)&&s<n)}(e,t,r,i,1/0)}(m,r,u,o)){const{primitiveIndices:i,indices:a,position:s}=t,u=i?i.length:a.length/3;if(u>C){const i=t.getChildren();if(void 0!==i){for(let t=0;t<8;++t)void 0!==i[t]&&e(i[t],r,n,o,c,l);return}}v(r,n,0,u,a,s,i,c,l)}}(e.boundingInfo,n,o,f,u,d);else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");v(n,o,0,t.length/3,t,r,void 0,u,d)}}const g=Object(o.e)();const b=Object(o.e)();function v(e,t,r,n,o,a,s,c,l){if(s)return function(e,t,r,n,o,a,s,c,l){const u=a.data,d=a.stride||a.size,h=e[0],f=e[1],m=e[2],p=t[0]-h,g=t[1]-f,v=t[2]-m;for(let x=r;x<n;++x){const e=s[x];let t=3*e,r=d*o[t++],n=u[r++],a=u[r++],_=u[r];r=d*o[t++];let T=u[r++],y=u[r++],w=u[r];r=d*o[t];let S=u[r++],M=u[r++],j=u[r];Object(i.i)(c)&&([n,a,_]=c.applyToVertex(n,a,_,x),[T,y,w]=c.applyToVertex(T,y,w,x),[S,M,j]=c.applyToVertex(S,M,j,x));const C=T-n,A=y-a,P=w-_,E=S-n,F=M-a,I=j-_,R=g*I-F*v,D=v*E-I*p,L=p*F-E*g,N=C*R+A*D+P*L;if(Math.abs(N)<=Number.EPSILON)continue;const z=h-n,B=f-a,U=m-_,V=z*R+B*D+U*L;if(N>0){if(V<0||V>N)continue}else if(V>0||V<N)continue;const H=B*P-A*U,G=U*C-P*z,k=z*A-C*B,W=p*H+g*G+v*k;if(N>0){if(W<0||V+W>N)continue}else if(W>0||V+W<N)continue;const q=(E*H+F*G+I*k)/N;q>=0&&l(q,O(C,A,P,E,F,I,b),e)}}(e,t,r,n,o,a,s,c,l);const u=a.data,d=a.stride||a.size,h=e[0],f=e[1],m=e[2],p=t[0]-h,g=t[1]-f,v=t[2]-m;for(let x=r,_=3*r;x<n;++x){let e=d*o[_++],t=u[e++],r=u[e++],n=u[e];e=d*o[_++];let a=u[e++],s=u[e++],T=u[e];e=d*o[_++];let y=u[e++],w=u[e++],S=u[e];Object(i.i)(c)&&([t,r,n]=c.applyToVertex(t,r,n,x),[a,s,T]=c.applyToVertex(a,s,T,x),[y,w,S]=c.applyToVertex(y,w,S,x));const M=a-t,j=s-r,C=T-n,A=y-t,P=w-r,E=S-n,F=g*E-P*v,I=v*A-E*p,R=p*P-A*g,D=M*F+j*I+C*R;if(Math.abs(D)<=Number.EPSILON)continue;const L=h-t,N=f-r,z=m-n,B=L*F+N*I+z*R;if(D>0){if(B<0||B>D)continue}else if(B>0||B<D)continue;const U=N*C-j*z,V=z*M-C*L,H=L*j-M*N,G=p*U+g*V+v*H;if(D>0){if(G<0||B+G>D)continue}else if(G>0||B+G<D)continue;const k=(A*U+P*V+E*H)/D;k>=0&&l(k,O(M,j,C,A,P,E,b),x)}}const x=Object(o.e)(),_=Object(o.e)();function O(e,t,r,i,n,o,s){return Object(a.r)(x,e,t,r),Object(a.r)(_,i,n,o),Object(a.d)(s,x,_),Object(a.o)(s,s),s}function T(e,t,r,i,o){let a=(r.screenLength||0)*e.pixelRatio;o&&(a=function(e,t,r,i){return h(e,u(t,r,i))}(a,i,t,o));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Object(n.e)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function y(e,t,r){if(!e)return;const i=e.parameters,n=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,n)}function w(e,t){const r=t?w(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=M(t)),null==t&&i in r||(r[i]=t)}return r}function S(e,t){let r=!1;for(const i in t){const n=t[i];void 0!==n&&(r=!0,Array.isArray(n)?e[i]=n.slice():e[i]=n)}return r}function M(e){const t=[];return e.forEach(e=>t.push(e)),t}const j={multiply:1,ignore:2,replace:3,tint:4},C=1e3},663:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return v}));var i=r(6),n=r(447),o=r(3),a=(r(55),r(64)),s=r(527),c=r(553),l=r(478),u=r(479),d=r(707),h=r(439),f=r(691);class m{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,Object(f.a)(e).then(e=>{this.svgAlwaysPremultipliesAlpha=!e})}get doublePrecisionRequiresObfuscation(){if(Object(o.h)(this._doublePrecisionRequiresObfuscation)){const e=g(this.context,!1),t=g(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let p=null;function g(e,t){const r=new h.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const i=l.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),n=new u.a(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:i}),o=Object(a.g)(5633261.287538229,2626832.878767164,1434988.0495278358),f=Object(a.g)(5633271.46742708,2626873.6381334523,1434963.231608387),m=function(r,i){const n=new s.a(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),o=new Float32Array(6);Object(d.a)(r,o,3);const a=new Float32Array(6);return Object(d.a)(i,a,3),e.bindProgram(n),n.setUniform3f("u_highA",o[0],o[2],o[4]),n.setUniform3f("u_lowA",o[1],o[3],o[5]),n.setUniform3f("u_highB",a[0],a[2],a[4]),n.setUniform3f("u_lowB",a[1],a[3],a[5]),n}(o,f),p=e.getBoundFramebufferObject(),{x:g,y:b,width:v,height:x}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(n),e.drawArrays(5,0,4);const _=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,_),m.dispose(),n.dispose(!1),i.dispose(),r.dispose(),e.setViewport(g,b,v,x),e.bindFramebuffer(p);const O=(o[2]-f[2])/25,T=Object(c.c)(_);return Math.abs(O-T)}function b({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n.a`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(n.a`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function v(e){return!!Object(i.a)("force-double-precision-obfuscation")||(t=e,(Object(o.h)(p)||p.context!==t)&&(p=new m(t)),p).doublePrecisionRequiresObfuscation;var t}},664:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(447);function n(e){e.vertex.code.add(i.a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.a.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.a.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.a.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.a.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function o(e,t){t.symbolColor?(e.include(n),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(i.a`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):e.vertex.code.add(i.a`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}},665:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var i=r(447),n=r(597),o=r(573),a=r(740),s=r(574),c=r(572),l=r(708);function u(e,t){e.fragment.include(l.a),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.a`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===t.output&&e.fragment.code.add(i.a`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}var d=r(576),h=r(578),f=r(718);function m(e,t){const r=e.vertex.code,l=e.fragment.code;1!==t.output&&3!==t.output||(e.include(n.a,{linearDepth:!0}),e.include(d.a,t),e.include(s.a,t),e.include(u,t),e.include(o.a,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(i.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(c.a,t),l.add(i.a`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(n.a,{linearDepth:!1}),e.include(h.a,t),e.include(f.a,t),e.include(d.a,t),e.include(s.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(i.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?i.a`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o.a,t),e.include(c.a,t),l.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?i.a`
            vec3 normal = screenDerivativeNormal(vPositionView);`:i.a`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(n.a,{linearDepth:!1}),e.include(d.a,t),e.include(s.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(i.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o.a,t),e.include(c.a,t),e.include(a.a),l.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},666:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(447);function n(e){e.code.add(i.a`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}function o(e){e.include(n),e.code.add(i.a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.a.int(1)}) {
        return allMixed;
      }
      else if (mode == ${i.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.a.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.a.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},689:function(e,t,r){"use strict";function i(){const e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}r.d(t,"a",(function(){return i}));const n=i();Object.freeze({__proto__:null,create:i,clone:function(e){const t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},fromValues:function(e,t,r,i,n,o,a,s,c,l,u,d,h,f,m,p){const g=new Float32Array(16);return g[0]=e,g[1]=t,g[2]=r,g[3]=i,g[4]=n,g[5]=o,g[6]=a,g[7]=s,g[8]=c,g[9]=l,g[10]=u,g[11]=d,g[12]=h,g[13]=f,g[14]=m,g[15]=p,g},createView:function(e,t){return new Float32Array(e,t,16)},IDENTITY:n})},691:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r(6);var i=r(527),n=r(478),o=r(444),a=r(479),s=r(439);async function c(e){const t=new Image;if(t.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",t.width=5,t.height=5,await t.decode(),!e.gl)return!0;const r=new s.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),c=n.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),l=new a.a(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:c}),u=new i.a(e,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",{a_pos:0});e.bindProgram(u);const d=new o.a(e,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},t);e.bindTexture(d,0),u.setUniform1i("u_texture",0);const h=e.getBoundFramebufferObject(),{x:f,y:m,width:p,height:g}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(l),e.drawArrays(5,0,4);const b=new Uint8Array(4);return r.readPixels(0,0,1,1,6408,5121,b),u.dispose(),l.dispose(!1),c.dispose(),r.dispose(),d.dispose(),e.setViewport(f,m,p,g),e.bindFramebuffer(h),t.src="",255===b[0]}},707:function(e,t,r){"use strict";function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t,r,n){for(let s=0;s<n;++s)o[0]=e[s],i(o,a,1),t[s]=a[0],r[s]=a[1]}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));const o=new Float64Array(1),a=new Float32Array(2)},708:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(447);function n(e){e.code.add(i.a`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}},709:function(e,t,r){"use strict";r.d(t,"a",(function(){return F})),r.d(t,"b",(function(){return E}));var i=r(447),n=r(597),o=r(636),a=r(573),s=r(637),c=r(574),l=r(572),u=r(604),d=r(594),h=r(575),f=r(638),m=r(605),p=r(595),g=r(576),b=r(596),v=r(639),x=r(578),_=r(598),O=r(664),T=r(640),y=r(718),w=r(665),S=r(742),M=r(599),j=r(653),C=r(743),A=r(744),P=r(666);function E(e){const t=new o.a,r=t.vertex.code,E=t.fragment.code;return t.include(A.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(_.a),t.varyings.add("vpos","vec3"),t.include(c.a,e),t.include(p.a,e),t.include(u.a,e),0!==e.output&&7!==e.output||(t.include(x.a,e),t.include(n.a,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(v.a),t.include(S.a,e),t.include(y.a,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(g.a,e),t.include(f.a,e),t.include(O.a,e),t.include(T.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(i.a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${i.a.float(l.c)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?i.a`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(a.a,e),t.include(l.a,e),e.multipassTerrainEnabled&&(t.fragment.include(s.a),t.include(d.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(P.a),E.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?i.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.a,e),t.include(j.a,e),t.include(M.a,e),t.include(l.a,e),e.receiveShadows&&t.include(h.a,e),e.multipassTerrainEnabled&&(t.fragment.include(s.a),t.include(d.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(b.a,e),t.include(m.a,e),t.fragment.include(P.a),t.include(C.a,e),E.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?i.a`
        vec3 normal = screenDerivativeNormal(localvpos);`:i.a`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?i.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?i.a`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?i.a`vec3 normalGround = normalize(vpos + localOrigin);`:i.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:i.a``}
        ${1===e.pbrMode||2===e.pbrMode?i.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(w.a,e),t}var F=Object.freeze({__proto__:null,build:E})},710:function(e,t,r){"use strict";r.d(t,"a",(function(){return C})),r.d(t,"b",(function(){return j}));var i=r(447),n=r(597),o=r(636),a=r(573),s=r(637),c=r(574),l=r(572),u=r(604),d=r(594),h=r(575),f=r(638),m=r(605),p=r(595),g=r(576),b=r(596),v=r(639),x=r(578),_=r(598),O=r(664),T=r(640),y=r(665),w=r(599),S=r(653),M=r(666);function j(e){const t=new o.a,r=t.vertex.code,j=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(_.a),t.varyings.add("vpos","vec3"),t.include(c.a,e),t.include(p.a,e),t.include(u.a,e),0!==e.output&&7!==e.output||(t.include(x.a,e),t.include(n.a,{linearDepth:!1}),e.offsetBackfaces&&t.include(v.a),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(g.a,e),t.include(f.a,e),t.include(O.a,e),t.include(T.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(i.a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${i.a.float(l.c)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?i.a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(a.a,e),t.include(l.a,e),e.multipassTerrainEnabled&&(t.fragment.include(s.a),t.include(d.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(M.a),j.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?i.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?i.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.a,e),t.include(S.a,e),t.include(w.a,e),t.include(l.a,e),e.receiveShadows&&t.include(h.a,e),e.multipassTerrainEnabled&&(t.fragment.include(s.a),t.include(d.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(b.a,e),t.include(m.a,e),t.fragment.include(M.a),j.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?i.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?i.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${i.a`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?i.a`vec3 normalGround = normalize(vpos + localOrigin);`:i.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:i.a``}
        ${1===e.pbrMode||2===e.pbrMode?i.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(y.a,e),t}var C=Object.freeze({__proto__:null,build:j})},718:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var i=r(447),n=r(578),o=r(64),a=r(546),s=r(537),c=r(663),l=r(598);function u(e,t){e.include(l.a),e.vertex.include(c.a,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(i.a`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(i.a`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function d(e,t){0===t.normalType||1===t.normalType?(e.include(n.a,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(i.a`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(u,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(i.a`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?i.a`normalize(vPositionWorldCameraRelative);`:i.a`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(i.a`
      void forwardNormal() {}
    `)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=Object(a.a)(),this.worldFromModel_TH=Object(o.e)(),this.worldFromModel_TL=Object(o.e)()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=Object(o.e)(),this.worldFromView_TL=Object(o.e)(),this.viewFromCameraRelative_RS=Object(a.a)(),this.projFromView=Object(s.b)()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(u||(u={})),(d||(d={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},739:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return a}));var i=r(3),n=(r(197),r(537));r(553),r(707);function o(e,t){return Object(i.h)(e)&&(e=[]),e.push(t),e}function a(e,t){if(Object(i.h)(e))return e;const r=e.filter(e=>e!==t);return 0===r.length?null:r}function s(e){return!!Object(i.i)(e)&&!e.visible}new Float64Array(3),new Float32Array(6),Object(n.b)()},740:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(571),n=r(447);const o=Object(i.b)(1,1,0,1),a=Object(i.b)(1,0,1,1);function s(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",o).add("unoccludedHighlightFlag","vec4",a),e.fragment.code.add(n.a`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}(s||(s={})).bindOutputHighlight=function(e,t,r){e.bindTexture(r.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,r.inverseViewport[0],r.inverseViewport[1])}},741:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(447);function n(e){e.vertex.code.add(i.a`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(i.a`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}},742:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(447),n=r(751);function o(e,t){const r=e.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(i.a`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):r.code.add(i.a`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(i.a`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==t.attributeTextureCoordinates&&(e.include(n.a,t),r.code.add(i.a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},743:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(447);function n(e,t){const r=e.fragment;r.code.add(i.a`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===t.doubleSidedMode?r.code.add(i.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===t.doubleSidedMode?r.code.add(i.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):r.code.add(i.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}},744:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(6);var i=r(447);function n(e,t){i.a`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(447),n=r(576);function o(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.a`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      // clamp the derivatives to avoid discoloring when zooming out.
      float maxdUV = 0.125; // Emprirically tuned compromise between discoloring and aliasing noise.
      vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
      vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}function a(e,t){e.include(n.a,t),e.fragment.code.add(i.a`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(i.a`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(o),e.fragment.code.add(i.a`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}},902:function(e,t,r){"use strict";r.r(t),r.d(t,"fetch",(function(){return Xn})),r.d(t,"gltfToEngineResources",(function(){return Kn})),r.d(t,"parseUrl",(function(){return Yn}));var i=r(3),n=r(64),o=r(38),a=r(197),s=r(280),c=r(546),l=r(537),u=r(176),d=r(600),h=r(5);const f=h.a.getLogger("esri.views.3d.support.buffer.math");function m(e,t,r){if(e.count!==t.count)return void f.error("source and destination buffers need to have the same number of elements");const i=e.count,n=r[0],o=r[1],a=r[2],s=r[4],c=r[5],l=r[6],u=r[8],d=r[9],h=r[10],m=r[12],p=r[13],g=r[14],b=e.typedBuffer,v=e.typedBufferStride,x=t.typedBuffer,_=t.typedBufferStride;for(let f=0;f<i;f++){const e=f*v,t=f*_,r=x[t],i=x[t+1],O=x[t+2];b[e]=n*r+s*i+u*O+m,b[e+1]=o*r+c*i+d*O+p,b[e+2]=a*r+l*i+h*O+g}}function p(e,t,r){if(e.count!==t.count)return void f.error("source and destination buffers need to have the same number of elements");const i=e.count,n=r[0],o=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],h=r[8],m=e.typedBuffer,p=e.typedBufferStride,g=t.typedBuffer,b=t.typedBufferStride;for(let f=0;f<i;f++){const e=f*p,t=f*b,r=g[t],i=g[t+1],v=g[t+2];m[e]=n*r+s*i+u*v,m[e+1]=o*r+c*i+d*v,m[e+2]=a*r+l*i+h*v}}function g(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<i;c++){const e=c*o,t=c*s;n[e]=r*a[t],n[e+1]=r*a[t+1],n[e+2]=r*a[t+2]}}Object.freeze({__proto__:null,transformMat4:m,transformMat3:p,scale:g,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<i;c++){const e=c*o,t=c*s;n[e]=a[t]>>r,n[e+1]=a[t+1]>>r,n[e+2]=a[t+2]>>r}}});var b=r(485),v=r(553),x=r(133);class _{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=Object(n.e)(),Object(v.a)(e.length>=1),Object(v.a)(r.length%this._numIndexPerPrimitive==0),Object(v.a)(r.length>=e.length*this._numIndexPerPrimitive),Object(v.a)(3===i.size||4===i.size);const{data:a,size:s}=i,c=e.length;let l=s*r[this._numIndexPerPrimitive*e[0]];O.clear(),O.push(l),this.bbMin=Object(n.g)(a[l],a[l+1],a[l+2]),this.bbMax=Object(n.d)(this.bbMin);for(let n=0;n<c;++n){const t=this._numIndexPerPrimitive*e[n];for(let e=0;e<this._numIndexPerPrimitive;++e){l=s*r[t+e],O.push(l);let i=a[l];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=a[l+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=a[l+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}Object(o.f)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let u=this.radius*this.radius;for(let n=0;n<O.length;++n){l=O.getItemAt(n);const e=a[l]-this.center[0],t=a[l+1]-this.center[1],r=a[l+2]-this.center[2],i=e*e+t*t+r*r;if(i<=u)continue;const o=Math.sqrt(i),s=.5*(o-this.radius);this.radius=this.radius+s,u=this.radius*this.radius;const c=s/o;this.center[0]+=e*c,this.center[1]+=t*c,this.center[2]+=r*c}O.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Object(o.i)(this.bbMin,this.bbMax)>1){const e=Object(o.f)(Object(n.e)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let n=0;n<8;++n)i[n]=0;const{data:a,size:s}=this.position;for(let n=0;n<t;++n){let t=0;const o=this._numIndexPerPrimitive*this.primitiveIndices[n];let c=s*this.indices[o],l=a[c],u=a[c+1],d=a[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=s*this.indices[o+e];const t=a[c],r=a[c+1],i=a[c+2];t<l&&(l=t),r<u&&(u=r),i<d&&(d=i)}l<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),r[n]=t,++i[t]}let c=0;for(let n=0;n<8;++n)i[n]>0&&++c;if(c<2)return;const l=new Array(8);for(let n=0;n<8;++n)l[n]=i[n]>0?new Uint32Array(i[n]):void 0;for(let n=0;n<8;++n)i[n]=0;for(let n=0;n<t;++n){const e=r[n];l[e][i[e]++]=this.primitiveIndices[n]}this._children=new Array(8);for(let n=0;n<8;++n)void 0!==l[n]&&(this._children[n]=new _(l[n],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){O.prune()}}const O=new x.a({deallocator:null});var T=r(295);class y{constructor(){this.id=Object(T.a)()}unload(){}}var w=r(298);class S{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=w.a.before(()=>this.reset()),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=Object(i.m)(this.tickHandle)),this.items=Object(i.m)(this.items)}get(){return 0===this.itemsPtr&&Object(w.a)(()=>{}),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*M);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,M));e++)this.items.push(this.allocator())}}const M=1024;var j=r(30),C=r(566),A=r(59),P=r(571);class E{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=w.a.before(()=>this.reset())}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=Object(i.m)(this.tickHandle)),this.itemsPtr=0,this.items=Object(i.m)(this.items),this.buffers=Object(i.m)(this.buffers)}get(){0===this.itemsPtr&&Object(w.a)(()=>{});const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=F){return new E(16,A.b,e)}static createVec3f64(e=F){return new E(24,n.c,e)}static createVec4f64(e=F){return new E(32,P.c,e)}static createMat3f64(e=F){return new E(72,c.b,e)}static createMat4f64(e=F){return new E(128,l.d,e)}static createQuatf64(e=F){return new E(32,C.b,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const F=4096,I=(E.createVec2f64(),E.createVec3f64()),R=E.createVec4f64(),D=(E.createMat3f64(),E.createMat4f64());E.createQuatf64();var L=r(55);function N(e){return e?{origin:Object(n.d)(e.origin),vector:Object(n.d)(e.vector)}:{origin:Object(n.e)(),vector:Object(n.e)()}}function z(e,t){const r=k.get();return r.origin=e,r.vector=t,r}function B(e,t,r=N()){return Object(o.h)(r.origin,e),Object(o.h)(r.vector,t),r}function U(e,t){const r=Object(o.g)(I.get(),t,e.origin),i=Object(o.e)(e.vector,r),n=Object(o.e)(e.vector,e.vector),a=Object(L.c)(i/n,0,1),s=Object(o.g)(I.get(),Object(o.b)(I.get(),e.vector,a),r);return Object(o.e)(s,s)}function V(e,t,r,i,n){const{vector:a,origin:s}=e,c=Object(o.g)(I.get(),t,s),l=Object(o.e)(a,c)/Object(o.p)(a);return Object(o.b)(n,a,Object(L.c)(l,r,i)),Object(o.c)(n,n,e.origin)}function H(e,t,r,i){const n=1e-6,a=e.origin,s=Object(o.c)(I.get(),a,e.vector),c=t.origin,l=Object(o.c)(I.get(),c,t.vector),u=I.get(),d=I.get();if(u[0]=a[0]-c[0],u[1]=a[1]-c[1],u[2]=a[2]-c[2],d[0]=l[0]-c[0],d[1]=l[1]-c[1],d[2]=l[2]-c[2],Math.abs(d[0])<n&&Math.abs(d[1])<n&&Math.abs(d[2])<n)return!1;const h=I.get();if(h[0]=s[0]-a[0],h[1]=s[1]-a[1],h[2]=s[2]-a[2],Math.abs(h[0])<n&&Math.abs(h[1])<n&&Math.abs(h[2])<n)return!1;const f=u[0]*d[0]+u[1]*d[1]+u[2]*d[2],m=d[0]*h[0]+d[1]*h[1]+d[2]*h[2],p=u[0]*h[0]+u[1]*h[1]+u[2]*h[2],g=d[0]*d[0]+d[1]*d[1]+d[2]*d[2],b=(h[0]*h[0]+h[1]*h[1]+h[2]*h[2])*g-m*m;if(Math.abs(b)<n)return!1;let v=(f*m-p*g)/b,x=(f+m*v)/g;r&&(v=Object(L.c)(v,0,1),x=Object(L.c)(x,0,1));const _=I.get(),O=I.get();return _[0]=a[0]+v*h[0],_[1]=a[1]+v*h[1],_[2]=a[2]+v*h[2],O[0]=c[0]+x*d[0],O[1]=c[1]+x*d[1],O[2]=c[2]+x*d[2],i.tA=v,i.tB=x,i.pA=_,i.pB=O,i.distance2=Object(o.i)(_,O),!0}const G={tA:0,tB:0,pA:Object(n.e)(),pB:Object(n.e)(),distance2:0},k=new S(()=>({origin:null,vector:null}));Object.freeze({__proto__:null,create:N,wrap:z,copy:function(e,t=N()){return B(e.origin,e.vector,t)},fromValues:B,fromPoints:function(e,t,r=N()){return Object(o.h)(r.origin,e),Object(o.g)(r.vector,t,e),r},distance2:U,distance:function(e,t){return Math.sqrt(U(e,t))},projectPoint:function(e,t,r){return V(e,t,0,1,r)},pointAt:function(e,t,r){return Object(o.c)(r,e.origin,Object(o.b)(r,e.vector,t))},projectPointClamp:V,closestRayDistance2:function(e,t){if(H(e,z(t.origin,t.direction),!1,G)){const{tA:t,pB:r,distance2:i}=G;if(t>=0&&t<=1)return i;if(t<0)return Object(o.i)(e.origin,r);if(t>1)return Object(o.i)(Object(o.c)(I.get(),e.origin,e.vector),r)}return null},closestLineSegmentPoint:function(e,t,r){return!!H(e,t,!0,G)&&(Object(o.h)(r,G.pA),!0)},closestLineSegmentDistance2:function(e,t){return H(e,t,!0,G)?G.distance2:null}});function W(e){return e?{p0:Object(n.d)(e.p0),p1:Object(n.d)(e.p1),p2:Object(n.d)(e.p2)}:{p0:Object(n.e)(),p1:Object(n.e)(),p2:Object(n.e)()}}function q(e,t,r,i=W()){return Object(o.h)(i.p0,e),Object(o.h)(i.p1,t),Object(o.h)(i.p2,r),i}function $(e,t,r){const i=Object(j.i)(e,t),n=Object(j.i)(t,r),o=Object(j.i)(r,e),a=(i+n+o)/2,s=a*(a-i)*(a-n)*(a-o);return s<=0?0:Math.sqrt(s)}function X(e,t,r){return Object(o.g)(J,t,e),Object(o.g)(Q,r,e),Object(o.m)(Object(o.d)(J,J,Q))/2}const Y=new S(N),K=new S(()=>({p0:null,p1:null,p2:null})),J=Object(n.e)(),Q=Object(n.e)();Object.freeze({__proto__:null,create:W,wrap:function(e,t,r){const i=K.get();return i.p0=e,i.p1=t,i.p2=r,i},copy:function(e,t=W()){return q(e.p0,e.p1,e.p2,t)},fromValues:q,distance2:function(e,t){const r=e.p0,i=e.p1,n=e.p2,a=Object(o.g)(I.get(),i,r),s=Object(o.g)(I.get(),n,i),c=Object(o.g)(I.get(),r,n),l=Object(o.g)(I.get(),t,r),u=Object(o.g)(I.get(),t,i),d=Object(o.g)(I.get(),t,n),h=Object(o.d)(a,a,c),f=Object(o.e)(Object(o.d)(I.get(),a,h),l),m=Object(o.e)(Object(o.d)(I.get(),s,h),u),p=Object(o.e)(Object(o.d)(I.get(),c,h),d);if(f>0&&m>0&&p>0){const e=Object(o.e)(h,l);return e*e/Object(o.e)(h,h)}const g=U(B(r,a,Y.get()),t),b=U(B(i,s,Y.get()),t),v=U(B(n,c,Y.get()),t);return Math.min(g,b,v)},intersectRay:function(e,t,r){const i=1e-5,{direction:n,origin:a}=t,{p0:s,p1:c,p2:l}=e,u=c[0]-s[0],d=c[1]-s[1],h=c[2]-s[2],f=l[0]-s[0],m=l[1]-s[1],p=l[2]-s[2],g=n[1]*p-m*n[2],b=n[2]*f-p*n[0],v=n[0]*m-f*n[1],x=u*g+d*b+h*v;if(x>-i&&x<i)return!1;const _=1/x,O=a[0]-s[0],T=a[1]-s[1],y=a[2]-s[2],w=_*(O*g+T*b+y*v);if(w<0||w>1)return!1;const S=T*h-d*y,M=y*u-h*O,j=O*d-u*T,C=_*(n[0]*S+n[1]*M+n[2]*j);return!(C<0||w+C>1)&&(r&&(Object(o.b)(r,n,_*(f*S+m*M+p*j)),Object(o.c)(r,a,r)),!0)},areaPoints2d:$,area2d:function(e){return $(e.p0,e.p1,e.p2)},areaPoints3d:X});let Z=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const ee=new Uint16Array([0]),te=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function re(e){if(1===e)return ee;if(e<te.length)return new Uint16Array(te.buffer,0,e);if(e>Z.length){const t=Math.max(2*Z.length,e);Z=new Uint32Array(t);for(let e=0;e<Z.length;e++)Z[e]=e}return new Uint32Array(Z.buffer,0,e)}const ie=Object(n.e)(),ne=Object(n.e)(),oe=Object(n.e)(),ae=Object(n.e)();class se extends y{constructor(e,t=[],r=0,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,o]of e)o&&this._vertexAttributes.set(n,{...o});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=re(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[n,o]of t)o&&(this._indices.set(n,ce(o)),"position"===n&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return Object(i.h)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position");return function(e,t,r){if(!e)return!1;const{size:i,data:n}=e;Object(o.r)(r,0,0,0),Object(o.r)(ae,0,0,0);let a=0,s=0;for(let c=0;c<t.length-2;c+=3){const e=t[c+0]*i,l=t[c+1]*i,u=t[c+2]*i;Object(o.r)(ie,n[e+0],n[e+1],n[e+2]),Object(o.r)(ne,n[l+0],n[l+1],n[l+2]),Object(o.r)(oe,n[u+0],n[u+1],n[u+2]);const d=X(ie,ne,oe);d?(Object(o.c)(ie,ie,ne),Object(o.c)(ie,ie,oe),Object(o.b)(ie,ie,1/3*d),Object(o.c)(r,r,ie),a+=d):(Object(o.c)(ae,ae,ie),Object(o.c)(ae,ae,ne),Object(o.c)(ae,ae,oe),s+=3)}return(0!==s||0!==a)&&(0!==a?(Object(o.b)(r,r,1/a),!0):0!==s&&(Object(o.b)(r,ae,1/s),!0))}(this.vertexAttributes.get("position"),t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position");return function(e,t,r){if(!e||!t)return!1;const{size:i,data:n}=e;Object(o.r)(r,0,0,0);let a=-1,s=0;for(let o=0;o<t.length;o++){const e=t[o]*i;a!==e&&(r[0]+=n[e+0],r[1]+=n[e+1],r[2]+=n[e+2],s++),a=e}return s>1&&Object(o.b)(r,r,1/s),s>0}(this.vertexAttributes.get("position"),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;Object(v.a)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=re(e.length/t),i=this.vertexAttributes.get("position");return new _(r,t,e,i)}}function ce(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var le=r(676),ue=r(544),de=r(613),he=r(614),fe=(r(6),r(336));function me(e,t){return Object(o.e)(e,t)/Object(o.m)(e)}function pe(e,t){const r=Object(o.e)(e,t)/(Object(o.m)(e)*Object(o.m)(t));return-Object(L.a)(r)}const ge=Object(n.e)(),be=Object(n.e)();Object.freeze({__proto__:null,projectPoint:function(e,t,r){const i=Object(o.e)(e,t)/Object(o.e)(e,e);return Object(o.b)(r,e,i)},projectPointSignedLength:me,angle:pe,angleAroundAxis:function(e,t,r){Object(o.o)(ge,e),Object(o.o)(be,t);const i=Object(o.e)(ge,be),n=Object(L.a)(i),a=Object(o.d)(ge,ge,be);return Object(o.e)(a,r)<0?2*Math.PI-n:n}});var ve=r(20);function xe(e){return e?{origin:Object(n.d)(e.origin),direction:Object(n.d)(e.direction)}:{origin:Object(n.e)(),direction:Object(n.e)()}}function _e(e,t=xe()){return Oe(e.origin,e.direction,t)}function Oe(e,t,r=xe()){return Object(o.h)(r.origin,e),Object(o.h)(r.direction,t),r}function Te(e,t,r=xe()){const n=Object(ve.a)(Object(j.c)(I.get(),t));if(n[2]=0,!e.unprojectFromRenderScreen(n,r.origin))return null;const a=Object(ve.a)(Object(j.c)(I.get(),t));a[2]=1;const s=e.unprojectFromRenderScreen(a,I.get());return Object(i.h)(s)?null:(Object(o.g)(r.direction,s,r.origin),r)}function ye(e,t,r=xe()){return we(e,e.screenToRender(t,Object(ve.a)(I.get())),r)}function we(e,t,r=xe()){Object(o.h)(r.origin,e.eye);const n=Object(o.r)(I.get(),t[0],t[1],1),a=e.unprojectFromRenderScreen(n,I.get());return Object(i.h)(a)?null:(Object(o.g)(r.direction,a,r.origin),r)}function Se(e,t){const r=Object(o.d)(I.get(),Object(o.o)(I.get(),e.direction),Object(o.g)(I.get(),t,e.origin));return Object(o.e)(r,r)}function Me(e,t,r){const i=Object(o.e)(e.direction,Object(o.g)(r,t,e.origin));return Object(o.c)(r,e.origin,Object(o.b)(r,e.direction,i)),r}function je(){return{origin:null,direction:null}}const Ce=new S(je);Object.freeze({__proto__:null,create:xe,wrap:function(e,t){const r=Ce.get();return r.origin=e,r.direction=t,r},copy:_e,fromPoints:function(e,t,r=xe()){return Object(o.h)(r.origin,e),Object(o.g)(r.direction,t,e),r},fromValues:Oe,fromScreen:function(e,t,r=xe()){return Te(e,e.screenToRender(t,Object(ve.a)(I.get())),r)},fromRender:Te,fromScreenAtEye:ye,fromRenderAtEye:we,distance2:Se,distance:function(e,t){return Math.sqrt(Se(e,t))},closestPoint:Me,createWrapper:je});const Ae=h.a.getLogger("esri.views.3d.support.geometryUtils.sphere");function Pe(){return Object(P.a)()}function Ee(e,t=Pe()){return Object(ue.c)(t,e)}function Fe(e){e[0]=e[1]=e[2]=e[3]=0}function Ie(e){return Array.isArray(e)?e[3]:e}function Re(e){return Array.isArray(e)?e:Ge}function De(e,t,r){if(Object(i.h)(t))return!1;const n=Object(o.g)(I.get(),t.origin,Re(e)),a=Object(o.e)(t.direction,t.direction),s=2*Object(o.e)(t.direction,n),c=s*s-4*a*(Object(o.e)(n,n)-e[3]*e[3]);if(c<0)return!1;const l=Math.sqrt(c);let u=(-s-l)/(2*a);const d=(-s+l)/(2*a);return(u<0||d<u&&d>0)&&(u=d),!(u<0)&&(r&&Object(o.c)(r,t.origin,Object(o.b)(I.get(),t.direction,u)),!0)}function Le(e,t,r){const i=I.get(),n=D.get();Object(o.d)(i,t.origin,t.direction);const s=Ie(e);Object(o.d)(r,i,t.origin),Object(o.b)(r,r,1/Object(o.m)(r)*s);const c=ze(e,t.origin),l=pe(t.origin,r);return Object(a.e)(n),Object(a.h)(n,n,l+c,i),Object(o.j)(r,r,n),r}function Ne(e,t,r){const i=Object(o.g)(I.get(),t,Re(e)),n=Object(o.b)(I.get(),i,e[3]/Object(o.m)(i));return Object(o.c)(r,n,Re(e))}function ze(e,t){const r=Object(o.g)(I.get(),t,Re(e)),i=Object(o.m)(r),n=Ie(e),a=n+Math.abs(n-i);return Object(L.a)(n/a)}const Be=Object(n.e)();function Ue(e,t,r,i){const n=Object(o.g)(Be,t,Re(e));switch(r){case 0:{const e=Object(fe.a)(n,Be)[2];return Object(o.r)(i,-Math.sin(e),Math.cos(e),0)}case 1:{const e=Object(fe.a)(n,Be),t=e[1],r=e[2],a=Math.sin(t);return Object(o.r)(i,-a*Math.cos(r),-a*Math.sin(r),Math.cos(t))}case 2:return Object(o.o)(i,n);default:return}}function Ve(e,t){const r=Object(o.g)(ke,t,Re(e));return Object(o.m)(r)-e[3]}const He=xe(),Ge=Object(n.e)(),ke=Object(n.e)();Object.freeze(Ge);Object.freeze({__proto__:null,create:Pe,copy:Ee,fromCenterAndRadius:function(e,t){return Object(P.b)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:Fe,fromRadius:function(e){return e},getRadius:Ie,getCenter:Re,fromValues:function(e,t,r,i){return Object(P.b)(e,t,r,i)},elevate:function(e,t,r){return e!==r&&Object(o.h)(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return Ae.error("sphere.setExtent is not yet supported"),e===r?r:Ee(e,r)},intersectRay:De,intersectScreen:function(e,t,r,i){return De(e,ye(t,r,He),i)},intersectsRay:function(e,t){return De(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(De(e,t,r))return r;const i=Le(e,t,I.get());return Object(o.c)(r,t.origin,Object(o.b)(I.get(),t.direction,Object(o.l)(t.origin,i)/Object(o.m)(t.direction))),r},closestPointOnSilhouette:Le,closestPoint:function(e,t,r){return De(e,t,r)?r:(Me(t,Re(e),r),Ne(e,r,r))},projectPoint:Ne,distanceToSilhouette:function(e,t){const r=Object(o.g)(I.get(),t,Re(e)),i=Object(o.p)(r),n=e[3]*e[3];return Math.sqrt(Math.abs(i-n))},angleToSilhouette:ze,axisAt:Ue,altitudeAt:Ve,setAltitudeAt:function(e,t,r,i){const n=Ve(e,t),a=Ue(e,t,2,ke),s=Object(o.b)(ke,a,r-n);return Object(o.c)(i,t,s),i}});function We(e=xt){return[e[0],e[1],e[2],e[3]]}function qe(e,t,r,i){return Xe(e,t,r,i,R.get())}function $e(e,t=We()){return Xe(e[0],e[1],e[2],e[3],t)}function Xe(e,t,r,i,n=We()){return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n}function Ye(e,t,r=We()){Object(o.h)(r,t);const i=Object(o.e)(t,t);return Math.abs(i-1)>1e-5&&i>1e-12&&Object(o.b)(r,r,1/Math.sqrt(i)),nt(r,e,r),r}function Ke(e,t,r,i=We()){return ot(Object(o.g)(I.get(),e,t),Object(o.g)(I.get(),r,t),e,i)}function Je(e,t,r,i,n){if(e.count<3)return!1;e.getVec(r,Ze);let a=i,s=!1;for(;a<e.count-1&&!s;)e.getVec(a,et),a++,s=!Object(o.n)(Ze,et);if(!s)return!1;for(a=Math.max(a,n),s=!1;a<e.count&&!s;)e.getVec(a,tt),a++,Object(o.g)(rt,Ze,et),Object(o.o)(rt,rt),Object(o.g)(it,et,tt),Object(o.o)(it,it),s=!Object(o.n)(Ze,tt)&&!Object(o.n)(et,tt)&&Math.abs(Object(o.e)(rt,it))<Qe;return s?(Ke(Ze,et,tt,t),!0):(0!==r||1!==i||2!==n)&&Je(e,t,0,1,2)}const Qe=.99619469809,Ze=Object(n.e)(),et=Object(n.e)(),tt=Object(n.e)(),rt=Object(n.e)(),it=Object(n.e)();function nt(e,t,r){return e!==r&&$e(e,r),r[3]=-Object(o.e)(r,t),r}function ot(e,t,r,i=We()){return Ye(r,Object(o.d)(I.get(),t,e),i)}function at(e,t,r){return!!Object(i.i)(t)&&bt(e,t.origin,t.direction,!0,!1,r)}function st(e,t,r){return bt(e,t.origin,t.vector,!1,!1,r)}function ct(e,t,r){return bt(e,t.origin,t.vector,!1,!0,r)}function lt(e,t){return gt(e,Re(t))-t[3]>=0}function ut(e,t){return gt(e,t)>=0}function dt(e,t){const r=t[0],i=t[1],n=t[2],o=t[3],a=t[4],s=t[5];return e[0]*(e[0]>0?r:o)+e[1]*(e[1]>0?i:a)+e[2]*(e[2]>0?n:s)+e[3]>=0}function ht(e,t){const r=Object(o.e)(e,t.ray.direction),i=-gt(e,t.ray.origin);if(i<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return i>0;if((i<0||r<0)&&!(i<0&&r<0))return!0;const n=i/r;return r>0?n<t.c1&&(t.c1=n):n>t.c0&&(t.c0=n),t.c0<=t.c1}function ft(e,t){const r=Object(o.e)(e,t.ray.direction),i=-gt(e,t.ray.origin);if(r>-1e-6&&r<1e-6)return i>0;const n=i/r;return r>0?n<t.c1&&(t.c1=n):n>t.c0&&(t.c0=n),t.c0<=t.c1}function mt(e,t,r){const i=Object(o.b)(I.get(),e,-e[3]),n=pt(e,Object(o.g)(I.get(),t,i),I.get());return Object(o.c)(r,n,i),r}function pt(e,t,r){const i=Object(o.b)(I.get(),e,Object(o.e)(e,t));return Object(o.g)(r,t,i),r}function gt(e,t){return Object(o.e)(e,t)+e[3]}function bt(e,t,r,i,n,a){const s=Object(o.e)(e,r);if(0===s)return!1;let c=-(Object(o.e)(e,t)+e[3])/s;return n&&(c=i?Math.max(0,c):Object(L.c)(c,0,1)),!(c<0||!i&&c>1)&&(Object(o.c)(a,t,Object(o.b)(a,r,c)),!0)}function vt(e){return e}const xt=[0,0,1,0];Object.freeze({__proto__:null,create:We,wrap:qe,copy:$e,fromValues:Xe,fromNormalAndOffset:function(e,t,r=We()){return Object(o.h)(r,e),r[3]=t,r},fromPositionAndNormal:Ye,fromPoints:Ke,fromManyPoints:function(e,t){return Je(e,t,0,1,2)},fromManyPointsSampleAt:Je,setOffsetFromPoint:nt,negate:function(e,t){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},fromVectorsAndPoint:ot,intersectRay:at,intersectLineSegment:st,intersectLineSegmentClamp:ct,isSphereFullyInside:lt,isSphereFullyOutside:function(e,t){return gt(e,Re(t))+t[3]<0},isPointInside:ut,isPointOutside:function(e,t){return gt(e,t)<0},isAABBFullyInside:dt,clip:ht,clipInfinite:ft,projectPoint:mt,projectVector:pt,distance:function(e,t){return Math.abs(gt(e,t))},signedDistance:gt,normal:vt,UP:xt});const _t=h.a.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function Ot(e=Ut){return{plane:We(e.plane),origin:Object(n.d)(e.origin),basis1:Object(n.d)(e.basis1),basis2:Object(n.d)(e.basis2)}}function Tt(e,t=Ot()){return yt(e.origin,e.basis1,e.basis2,t)}function yt(e,t,r,i=Ot()){return Object(o.h)(i.origin,e),Object(o.h)(i.basis1,t),Object(o.h)(i.basis2,r),wt(i),function(e,t){Math.abs(Object(o.e)(e.basis1,e.basis2)/(Object(o.m)(e.basis1)*Object(o.m)(e.basis2)))>1e-6&&_t.warn(t,"Provided basis vectors are not perpendicular"),Math.abs(Object(o.e)(e.basis1,Dt(e)))>1e-6&&_t.warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-Object(o.e)(Dt(e),e.origin)-e.plane[3])>1e-6&&_t.warn(t,"Plane offset is not consistent with plane origin")}(i,"fromValues()"),i}function wt(e){ot(e.basis2,e.basis1,e.origin,e.plane)}function St(e,t,r){e!==r&&Tt(e,r);const i=Object(o.b)(I.get(),Dt(e),t);return Object(o.c)(r.origin,r.origin,i),r.plane[3]-=t,r}function Mt(e,t=Ot()){const r=(e[2]-e[0])/2,i=(e[3]-e[1])/2;return Object(o.r)(t.origin,e[0]+r,e[1]+i,0),Object(o.r)(t.basis1,r,0,0),Object(o.r)(t.basis2,0,i,0),Xe(0,0,1,0,t.plane),t}function jt(e,t,r){return!!at(e.plane,t,r)&&Lt(e,r)}function Ct(e,t,r){const i=Vt.get();Bt(e,t,i,Vt.get());let n=Number.POSITIVE_INFINITY;for(const a of Wt){const s=zt(e,a,Ht.get()),c=I.get();if(st(i,s,c)){const e=Object(fe.c)(I.get(),t.origin,c),i=Math.abs(Object(L.a)(Object(o.e)(t.direction,e)));i<n&&(n=i,Object(o.h)(r,c))}}return n===Number.POSITIVE_INFINITY?At(e,t,r):r}function At(e,t,r){if(jt(e,t,r))return r;const i=Vt.get(),n=Vt.get();Bt(e,t,i,n);let a=Number.POSITIVE_INFINITY;for(const s of Wt){const c=zt(e,s,Ht.get()),l=I.get();if(ct(i,c,l)){const e=Se(t,l);if(!ut(n,l))continue;e<a&&(a=e,Object(o.h)(r,l))}}return Ft(e,t.origin)<a&&Pt(e,t.origin,r),r}function Pt(e,t,r){const i=mt(e.plane,t,I.get()),n=V(Nt(e,e.basis1),i,-1,1,I.get()),a=V(Nt(e,e.basis2),i,-1,1,I.get());return Object(o.g)(r,Object(o.c)(I.get(),n,a),e.origin),r}function Et(e,t,r){const{origin:i,basis1:n,basis2:a}=e,s=Object(o.g)(I.get(),t,i),c=me(n,s),l=me(a,s),u=me(Dt(e),s);return Object(o.r)(r,c,l,u)}function Ft(e,t){const r=Et(e,t,I.get()),{basis1:i,basis2:n}=e,a=Object(o.m)(i),s=Object(o.m)(n),c=Math.max(Math.abs(r[0])-a,0),l=Math.max(Math.abs(r[1])-s,0),u=r[2];return c*c+l*l+u*u}function It(e,t){return ut(e.plane,t)&&Lt(e,t)}function Rt(e,t){const r=-e.plane[3];return me(Dt(e),t)-r}function Dt(e){return e.plane}function Lt(e,t){const r=Object(o.g)(I.get(),t,e.origin),i=Object(o.p)(e.basis1),n=Object(o.p)(e.basis2),a=Object(o.e)(e.basis1,r),s=Object(o.e)(e.basis2,r);return-a-i<0&&a-i<0&&-s-n<0&&s-n<0}function Nt(e,t){const r=Ht.get();return Object(o.h)(r.origin,e.origin),Object(o.h)(r.vector,t),r}function zt(e,t,r){const{basis1:i,basis2:n,origin:a}=e,s=Object(o.b)(I.get(),i,t.origin[0]),c=Object(o.b)(I.get(),n,t.origin[1]);Object(o.c)(r.origin,s,c),Object(o.c)(r.origin,r.origin,a);const l=Object(o.b)(I.get(),i,t.direction[0]),u=Object(o.b)(I.get(),n,t.direction[1]);return Object(o.b)(r.vector,Object(o.c)(l,l,u),2),r}function Bt(e,t,r,i){const n=Dt(e);ot(n,t.direction,t.origin,r),ot(r,n,t.origin,i)}const Ut={plane:We(),origin:Object(n.g)(0,0,0),basis1:Object(n.g)(1,0,0),basis2:Object(n.g)(0,1,0)},Vt=new S(We),Ht=new S(N),Gt=Object(n.e)(),kt=new S(()=>({origin:null,basis1:null,basis2:null,plane:null})),Wt=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],qt=Object(l.b)(),$t=Object(l.b)();Object.freeze({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=We(),this.origin=Object(n.e)(),this.basis1=Object(n.e)(),this.basis2=Object(n.e)()}},create:Ot,wrap:function(e,t,r){const i=kt.get();return i.origin=e,i.basis1=t,i.basis2=r,i.plane=qe(0,0,0,0),wt(i),i},copy:Tt,copyWithoutVerify:function(e,t){Object(o.h)(t.origin,e.origin),Object(o.h)(t.basis1,e.basis1),Object(o.h)(t.basis2,e.basis2),$e(e.plane,t.plane)},fromValues:yt,updateUnboundedPlane:wt,elevate:St,setExtent:function(e,t,r){return Mt(t,r),St(r,Rt(e,e.origin),r),r},fromAABoundingRect:Mt,intersectRay:jt,intersectRayClosestSilhouette:function(e,t,r){if(jt(e,t,r))return r;const i=Ct(e,t,I.get());return Object(o.c)(r,t.origin,Object(o.b)(I.get(),t.direction,Object(o.l)(t.origin,i)/Object(o.m)(t.direction))),r},closestPointOnSilhouette:Ct,closestPoint:At,projectPoint:Pt,projectPointLocal:Et,distance2:Ft,distance:function(e,t){return Math.sqrt(Ft(e,t))},distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const i of Wt){const n=U(zt(e,i,Ht.get()),t);n>r&&(r=n)}return Math.sqrt(r)},extrusionContainsPoint:It,axisAt:function(e,t,r,i){return function(e,t,r){switch(t){case 0:Object(o.h)(r,e.basis1),Object(o.o)(r,r);break;case 1:Object(o.h)(r,e.basis2),Object(o.o)(r,r);break;case 2:Object(o.h)(r,Dt(e))}return r}(e,r,i)},altitudeAt:Rt,setAltitudeAt:function(e,t,r,i){const n=Rt(e,t),a=Object(o.b)(Gt,Dt(e),r-n);return Object(o.c)(i,t,a),i},equals:function(e,t){return Object(o.n)(e.basis1,t.basis1)&&Object(o.n)(e.basis2,t.basis2)&&Object(o.n)(e.origin,t.origin)},transform:function(e,t,r){return e!==r&&Tt(e,r),Object(a.a)(qt,t),Object(a.b)(qt,qt),Object(o.j)(r.basis1,e.basis1,qt),Object(o.j)(r.basis2,e.basis2,qt),Object(o.j)(r.plane,e.plane,qt),Object(o.j)(r.origin,e.origin,t),nt(r.plane,r.origin,r.plane),r},rotate:function(e,t,r,i){return e!==i&&Tt(e,i),Object(a.h)($t,Object(a.e)($t),t,r),Object(o.j)(i.basis1,e.basis1,$t),Object(o.j)(i.basis2,e.basis2,$t),wt(i),i},normal:Dt,UP:Ut});function Xt(e=Kt){return[e[0],e[1],e[2],e[3]]}function Yt(e,t,r,i,n=Xt()){return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n}const Kt=[0,0,1,0];Object.freeze({__proto__:null,create:Xt,wrap:function(e,t,r,i){return Yt(e,t,r,i,R.get())},wrapAxisAngle:function(e,t){return Yt(e[0],e[1],e[2],t,R.get())},copy:function(e,t=Xt()){return Yt(e[0],e[1],e[2],e[3],t)},fromValues:Yt,fromAxisAndAngle:function(e,t,r=Xt()){return Object(o.h)(r,e),r[3]=t,r},fromPoints:function(e,t,r=Xt()){return Object(o.d)(r,e,t),Object(o.o)(r,r),r[3]=pe(e,t),r},axis:function(e){return e},UP:Kt});function Jt(e){return e?{ray:xe(e.ray),c0:e.c0,c1:e.c1}:{ray:xe(),c0:0,c1:Number.MAX_VALUE}}function Qt(e,t,r,i=Jt()){return _e(e,i.ray),i.c0=t,i.c1=r,i}function Zt(e,t=Jt()){return _e(e,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function er(e,t,r=Jt()){const i=Object(o.m)(e.vector);return Oe(e.origin,t,r.ray),r.c0=0,r.c1=i,r}function tr(e,t,r){return Object(o.c)(r,e.ray.origin,Object(o.b)(r,e.ray.direction,t))}const rr=new S(()=>({c0:0,c1:0,ray:null}));Object.freeze({__proto__:null,create:Jt,wrap:function(e,t,r){const i=rr.get();return i.ray=e,i.c0=t,i.c1=r,i},copy:function(e,t=Jt()){return Qt(e.ray,e.c0,e.c1,t)},fromValues:Qt,fromRay:Zt,fromLineSegment:function(e,t=Jt()){return er(e,Object(o.o)(I.get(),e.vector),t)},fromLineSegmentAndDirection:er,getStart:function(e,t){return tr(e,e.c0,t)},getEnd:function(e,t){return tr(e,e.c1,t)},getAt:tr});function ir(e){return e?[We(e[0]),We(e[1]),We(e[2]),We(e[3]),We(e[4]),We(e[5])]:[We(),We(),We(),We(),We(),We()]}function nr(){return[Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)()]}function or(e,t){Ke(t[4],t[0],t[3],e[0]),Ke(t[1],t[5],t[6],e[1]),Ke(t[4],t[5],t[1],e[2]),Ke(t[3],t[2],t[6],e[3]),Ke(t[0],t[1],t[2],e[4]),Ke(t[5],t[4],t[7],e[5])}function ar(e,t){for(let r=0;r<6;r++)if(!ht(e[r],t))return!1;return!0}const sr=[Object(P.b)(-1,-1,-1,1),Object(P.b)(1,-1,-1,1),Object(P.b)(1,1,-1,1),Object(P.b)(-1,1,-1,1),Object(P.b)(-1,-1,1,1),Object(P.b)(1,-1,1,1),Object(P.b)(1,1,1,1),Object(P.b)(-1,1,1,1)],cr=new S(Jt),lr=nr();Object.freeze({__proto__:null,create:ir,createPoints:nr,copy:function(e,t=ir()){for(let r=0;r<6;r++)$e(e[r],t[r])},fromMatrix:function(e,t,r,i=lr){const n=Object(a.g)(D.get(),t,e);Object(a.a)(n,n);for(let a=0;a<8;++a){const e=Object(ue.l)(R.get(),sr[a],n);Object(o.r)(i[a],e[0]/e[3],e[1]/e[3],e[2]/e[3])}or(r,i)},computePlanes:or,intersectsSphere:function(e,t){for(let r=0;r<6;r++)if(lt(e[r],t))return!1;return!0},intersectsRay:function(e,t){return ar(e,Zt(t,cr.get()))},intersectClipRay:function(e,t){for(let r=0;r<6;r++){if(!ft(e[r],t))return!1}return!0},intersectsLineSegment:function(e,t,r){return ar(e,er(t,r,cr.get()))},intersectsPoint:function(e,t){for(let r=0;r<6;r++)if(gt(e[r],t)>0)return!1;return!0},intersectsAABB:function(e,t){for(let r=0;r<6;r++)if(dt(e[r],t))return!1;return!0},planePointIndices:{bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]}});var ur=r(101);class dr{constructor(){this._disposed=!1}get disposed(){return this._disposed}get shaderTransformation(){return this._shaderTransformation}acquire(e,t,r,i,n,o){this.id=Object(T.a)(),this.geometry=e,this.material=t,this.transformation=r,this.instanceParameters=i,this.origin=n,this._shaderTransformation=o,this._disposed=!1}release(){this._disposed=!1}dispose(){this._disposed=!0}getStaticTransformation(){return this.transformation}getShaderTransformation(){return Object(i.i)(this._shaderTransformation)?this._shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(e){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,e):this.geometry.computeAttachmentOrigin(e))&&(Object(o.j)(e,e,this.getStaticTransformation()),!0)}}dr.pool=new ur.a(dr);r(739);const hr=new class{constructor(e=0){this.offset=e,this.sphere=Pe(),this.tmpVertex=Object(n.e)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let n=i[0]*e+i[4]*t+i[8]*r+i[12],o=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(n*n+o*o+a*a);n+=n*s,o+=o*s,a+=a*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*n+c[4]*o+c[8]*a+c[12],this.tmpVertex[1]=c[1]*n+c[5]*o+c[9]*a+c[13],this.tmpVertex[2]=c[2]*n+c[6]*o+c[10]*a+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(n.e)(),this.mbs=Object(P.a)(),this.obb={center:Object(n.e)(),halfSize:Object(he.a)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,n=t,o=r+this.componentLocalOriginLength,a=this.offset/Math.sqrt(i*i+n*n+o*o);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+n*a,this.tmpVertex[2]=r+o*a,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,n=e[3],o=e[4],a=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(n*n+o*o+a*a);return e[3]+=n*c,e[4]+=o*c,e[5]+=a*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,Object(o.q)(this.obb.halfSize,e.halfSize,e.quaternion),Object(o.c)(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,Object(o.g)(this.obb.halfSize,this.obb.halfSize,e.center),Object(de.a)(fr,e.quaternion),Object(o.q)(this.obb.halfSize,this.obb.halfSize,fr),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}};new class{constructor(e=0){this.offset=e,this.tmpVertex=Object(n.e)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],n=t+this.localOrigin[1],o=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+n*n+o*o);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+n*a,this.tmpVertex[2]=r+o*a,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],n=e[3]+this.localOrigin[0],o=e[4]+this.localOrigin[1],a=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(n*n+o*o+a*a);return e[3]+=n*c,e[4]+=o*c,e[5]+=a*c,e}};Object(n.e)(),Object(n.e)(),Object(P.a)();const fr=Object(C.a)(),mr=0,pr=1,gr=2,br=3,vr=4,xr=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class _r extends(xr(class{})){}var Or=class extends _r{constructor(e){super(),this.material=e.material,this.techniqueRep=e.techniqueRep,this.output=e.output}getTechnique(){return this.technique}getPipelineState(e,t){return this.getTechnique().pipeline}ensureResources(e){return 2}ensureParameters(e){}};var Tr=class extends Or{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach(e=>this._textureRepository.release(e)),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))}bindTexture(e,t){Object(i.i)(this._texture)&&(t.setUniform1i("tex",mr),e.bindTexture(this._texture.glTexture,mr)),Object(i.i)(this._textureNormal)&&(t.setUniform1i("normalTexture",pr),e.bindTexture(this._textureNormal.glTexture,pr)),Object(i.i)(this._textureEmissive)&&(t.setUniform1i("texEmission",gr),e.bindTexture(this._textureEmissive.glTexture,gr)),Object(i.i)(this._textureOcclusion)&&(t.setUniform1i("texOcclusion",br),e.bindTexture(this._textureOcclusion.glTexture,br)),Object(i.i)(this._textureMetallicRoughness)&&(t.setUniform1i("texMetallicRoughness",vr),e.bindTexture(this._textureMetallicRoughness.glTexture,vr))}bindTextureScale(e,t){const r=Object(i.i)(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquireIfNotUndefined(e){if(!Object(i.h)(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){Object(i.h)(e)||(this._textureIDs.delete(e),this._textureRepository.release(e))}},yr=r(662);const wr={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};class Sr extends y{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=wr,this._params=Object(yr.c)(e,t),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(e){return!1}setParameterValues(e){Object(yr.e)(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(i.i)(this.materialRepository)&&this.materialRepository.materialChanged(this)}}function Mr(e,t,r,i){const n=r.typedBuffer,o=r.typedBufferStride,a=e.length;i*=o;for(let s=0;s<a;++s){const r=2*e[s];n[i]=t[r],n[i+1]=t[r+1],i+=o}}function jr(e,t,r,i,n){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==n||1===n)for(let c=0;c<s;++c){const r=3*e[c];o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],i+=a}else for(let c=0;c<s;++c){const r=3*e[c];for(let e=0;e<n;++e)o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],i+=a}}function Cr(e,t,r,i,n=1){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===n)for(let c=0;c<s;++c){const r=4*e[c];o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],o[i+3]=t[r+3],i+=a}else for(let c=0;c<s;++c){const r=4*e[c];for(let e=0;e<n;++e)o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],o[i+3]=t[r+3],i+=a}}function Ar(e,t,r,i,n,o=1){if(r){const a=i.typedBuffer,s=i.typedBufferStride,c=e.length,l=r[0],u=r[1],d=r[2],h=r[4],f=r[5],m=r[6],p=r[8],g=r[9],b=r[10],v=r[12],x=r[13],_=r[14];if(n*=s,1===o)for(let r=0;r<c;++r){const i=3*e[r],o=t[i],c=t[i+1],O=t[i+2];a[n]=l*o+h*c+p*O+v,a[n+1]=u*o+f*c+g*O+x,a[n+2]=d*o+m*c+b*O+_,n+=s}else for(let r=0;r<c;++r){const i=3*e[r],c=t[i],O=t[i+1],T=t[i+2],y=l*c+h*O+p*T+v,w=u*c+f*O+g*T+x,S=d*c+m*O+b*T+_;for(let e=0;e<o;++e)a[n]=y,a[n+1]=w,a[n+2]=S,n+=s}}else jr(e,t,i,n,o)}function Pr(e,t,r,i,n,o){if(r){const a=r,s=i.typedBuffer,c=i.typedBufferStride,l=e.length,u=a[0],d=a[1],h=a[2],f=a[4],m=a[5],p=a[6],g=a[8],b=a[9],v=a[10],x=Math.abs(1-u*u+f*f+g*g)>1e-5||Math.abs(1-d*d+m*m+b*b)>1e-5||Math.abs(1-h*h+p*p+v*v)>1e-5,_=1e-6,O=1-_;if(n*=c,1===o)for(let r=0;r<l;++r){const i=3*e[r],o=t[i],a=t[i+1],l=t[i+2];let T=u*o+f*a+g*l,y=d*o+m*a+b*l,w=h*o+p*a+v*l;if(x){const e=T*T+y*y+w*w;if(e<O&&e>_){const t=Math.sqrt(e);T/=t,y/=t,w/=t}}s[n+0]=T,s[n+1]=y,s[n+2]=w,n+=c}else for(let r=0;r<l;++r){const i=3*e[r],a=t[i],l=t[i+1],T=t[i+2];let y=u*a+f*l+g*T,w=d*a+m*l+b*T,S=h*a+p*l+v*T;if(x){const e=y*y+w*w+S*S;if(e<O&&e>_){const t=Math.sqrt(e);y/=t,w/=t,S/=t}}for(let e=0;e<o;++e)s[n+0]=y,s[n+1]=w,s[n+2]=S,n+=c}}else jr(e,t,i,n,o)}function Er(e,t,r,i,n,o=1){const a=i.typedBuffer,s=i.typedBufferStride,c=e.length;if(n*=s,1===o){if(4===r)for(let l=0;l<c;++l){const r=4*e[l];a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=t[r+3],n+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=255,n+=s}}else if(4===r)for(let l=0;l<c;++l){const r=4*e[l];for(let e=0;e<o;++e)a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=t[r+3],n+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];for(let e=0;e<o;++e)a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=255,n+=s}}var Fr=r(572),Ir=r(567);const Rr=Object(Ir.e)(770,1,771,771),Dr=Object(Ir.f)(1,1),Lr=Object(Ir.f)(0,771);const Nr={factor:-1,units:-2};function zr(e){return e?Nr:null}function Br(e){return 3===e||2===e?513:515}var Ur=r(0);class Vr{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function Hr(e={}){return(t,r)=>{var i,n;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const o=t._parameterNames.length-1,a=e.count||2,s=Math.ceil(Object(L.h)(a)),c=null!=(n=t._parameterBits)?n:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);t._parameterBits=c;const u=c[l],d=(1<<s)-1<<u;c[l]+=s,Object.defineProperty(t,r,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~d|+e<<u&d,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}var Gr,kr=r(527),Wr=r(689);!function(e){function t(e,t,r){Object(a.j)(qr,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",qr)}e.bindCamPosition=function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])},e.bindProjectionMatrix=function(e,t){e.setUniformMatrix4fv("proj",t)},e.bindNearFar=function(e,t){e.setUniform2fv("nearFar",t)},e.bindViewCustomOrigin=t,e.bindView=function(e,r){t(e,r.origin,r.camera.viewMatrix)},e.bindViewport=function(e,t){e.setUniform4fv("viewport",t.camera.fullViewport)}}(Gr||(Gr={}));const qr=Object(Wr.a)();var $r=r(573),Xr=r(740),Yr=r(574),Kr=r(604),Jr=r(594);const Qr={mask:255},Zr={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},ei={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};var ti=r(575),ri=r(663),ii=r(595),ni=r(596),oi=r(709);class ai extends class{constructor(e,t){t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),e.commonUniformStore&&(this._commonUniformStore=e.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(e)}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)}reload(e){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(e),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t,r){}bindMaterial(e,t,r){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}{initializeProgram(e){const t=ai.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangets:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(ri.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new kr.a(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),wr)}bindPass(e,t,r){Gr.bindProjectionMatrix(this.program,r.camera.projectionMatrix);const i=this.configuration.output;(1===this.configuration.output||r.multipassTerrainEnabled||3===i)&&this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),r.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",r.inverseViewport),Object(Jr.a)(this.program,e,r)),7===i&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",yr.b[t.colorMixMode])),0===i?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",yr.b[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&ni.a.bindUniforms(this.program,t,this.configuration.isSchematic)):4===i&&Xr.a.bindOutputHighlight(e,this.program,r),Yr.a.bindUniformsForSymbols(this.program,t),Kr.a.bindUniforms(this.program,t,r),Object(yr.a)(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(n.g)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Gr.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Gr.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&ii.a.bindCustomOrigin(this.program,t),$r.a.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&ti.a.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,n=2===e;return Object(Ir.d)({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?Rr:(o=e,2===o?null:1===o?Lr:Dr),culling:si(r),depthTest:{func:Br(e)},depthWrite:i||n?r.writeDepth&&Ir.c:null,colorWrite:Ir.b,stencilWrite:r.sceneHasOcludees?Qr:null,stencilTest:r.sceneHasOcludees?t?ei:Zr:null,polygonOffset:i||n?null:zr(r.enableOffset)});var o}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}ai.shader=new Vr(oi.a,()=>r.e(173).then(r.bind(null,899)));const si=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class ci extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map(()=>0)}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}Object(Ur.a)([Hr({count:8})],ci.prototype,"output",void 0),Object(Ur.a)([Hr({count:4})],ci.prototype,"alphaDiscardMode",void 0),Object(Ur.a)([Hr({count:3})],ci.prototype,"doubleSidedMode",void 0),Object(Ur.a)([Hr()],ci.prototype,"isSchematic",void 0),Object(Ur.a)([Hr()],ci.prototype,"vertexColors",void 0),Object(Ur.a)([Hr()],ci.prototype,"offsetBackfaces",void 0),Object(Ur.a)([Hr()],ci.prototype,"symbolColors",void 0),Object(Ur.a)([Hr()],ci.prototype,"vvSize",void 0),Object(Ur.a)([Hr()],ci.prototype,"vvColor",void 0),Object(Ur.a)([Hr()],ci.prototype,"verticalOffset",void 0),Object(Ur.a)([Hr()],ci.prototype,"receiveShadows",void 0),Object(Ur.a)([Hr()],ci.prototype,"slicePlaneEnabled",void 0),Object(Ur.a)([Hr()],ci.prototype,"sliceHighlightDisabled",void 0),Object(Ur.a)([Hr()],ci.prototype,"receiveAmbientOcclusion",void 0),Object(Ur.a)([Hr()],ci.prototype,"screenSizePerspective",void 0),Object(Ur.a)([Hr()],ci.prototype,"textureAlphaPremultiplied",void 0),Object(Ur.a)([Hr()],ci.prototype,"hasColorTexture",void 0),Object(Ur.a)([Hr()],ci.prototype,"usePBR",void 0),Object(Ur.a)([Hr()],ci.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(Ur.a)([Hr()],ci.prototype,"hasEmissionTexture",void 0),Object(Ur.a)([Hr()],ci.prototype,"hasOcclusionTexture",void 0),Object(Ur.a)([Hr()],ci.prototype,"hasNormalTexture",void 0),Object(Ur.a)([Hr()],ci.prototype,"instanced",void 0),Object(Ur.a)([Hr()],ci.prototype,"instancedColor",void 0),Object(Ur.a)([Hr()],ci.prototype,"instancedDoublePrecision",void 0),Object(Ur.a)([Hr()],ci.prototype,"vertexTangents",void 0),Object(Ur.a)([Hr()],ci.prototype,"normalsTypeDerivate",void 0),Object(Ur.a)([Hr()],ci.prototype,"writeDepth",void 0),Object(Ur.a)([Hr()],ci.prototype,"sceneHasOcludees",void 0),Object(Ur.a)([Hr()],ci.prototype,"transparent",void 0),Object(Ur.a)([Hr()],ci.prototype,"enableOffset",void 0),Object(Ur.a)([Hr({count:3})],ci.prototype,"cullFace",void 0),Object(Ur.a)([Hr({count:4})],ci.prototype,"transparencyPassType",void 0),Object(Ur.a)([Hr()],ci.prototype,"multipassTerrainEnabled",void 0),Object(Ur.a)([Hr()],ci.prototype,"cullAboveGround",void 0);var li=r(710);class ui extends ai{initializeProgram(e){const t=ui.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(ri.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new kr.a(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),wr)}}ui.shader=new Vr(li.a,()=>r.e(171).then(r.bind(null,900)));class di extends Sr{constructor(e){super(e,fi),this.supportsEdges=!0,this.techniqueConfig=new ci,this.vertexBufferLayout=di.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?di.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,n=!!t&&t.indexOf("color")>-1,o=e.vvColorEnabled,a="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(n||o||i)?!!a||s:r?a?c:s:n||o||i?!!a||s:a?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<5e5),this.techniqueConfig}intersect(e,t,r,n,a,s,c){if(null!==this.params.verticalOffset){const e=n.camera;Object(o.r)(_i,r[12],r[13],r[14]);let t=null;switch(n.viewingMode){case 1:t=Object(o.o)(vi,_i);break;case 2:t=Object(o.h)(vi,bi)}let i=0;if(null!==this.params.verticalOffset){const r=Object(o.g)(Oi,_i,e.eye),n=Object(o.m)(r),a=Object(o.b)(r,r,1/n);let s=null;this.params.screenSizePerspective&&(s=Object(o.e)(t,a)),i+=Object(yr.f)(e,n,this.params.verticalOffset,s,this.params.screenSizePerspective)}Object(o.b)(t,t,i),Object(o.s)(xi,t,n.transform.inverseRotation),a=Object(o.g)(pi,a,xi),s=Object(o.g)(gi,s,xi)}Object(yr.d)(e,t,n,a,s,function(e){return Object(i.i)(e)?(hr.offset=e,hr):null}(n.verticalOffset),c)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new hi(e)}createBufferWriter(){return new mi(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Object(le.a)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=Object(le.a)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class hi extends Tr{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(ui,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(ai,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const fi={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(c.a)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:Fr.b,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class mi{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,i){!function(e,t,r,i,n,o){for(const a of t.fieldNames){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)switch(a){case"position":{Object(v.a)(3===t.size);const e=n.getField(a,d.u);e&&Ar(s,t.data,r,e,o);break}case"normal":{Object(v.a)(3===t.size);const e=n.getField(a,d.u);e&&Pr(s,t.data,i,e,o,1);break}case"uv0":{Object(v.a)(2===t.size);const e=n.getField(a,d.m);e&&Mr(s,t.data,e,o);break}case"color":{Object(v.a)(3===t.size||4===t.size);const e=n.getField(a,d.J);e&&Er(s,t.data,t.size,e,o);break}case"symbolColor":{Object(v.a)(3===t.size||4===t.size);const e=n.getField(a,d.J);e&&Er(s,t.data,t.size,e,o);break}case"tangent":{Object(v.a)(4===t.size);const e=n.getField(a,d.C);e&&Cr(s,t.data,e,o);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}const pi=Object(n.e)(),gi=Object(n.e)(),bi=Object(n.g)(0,0,1),vi=Object(n.e)(),xi=Object(n.e)(),_i=Object(n.e)(),Oi=Object(n.e)();var Ti=r(199),yi=r(121),wi=r(12),Si=r(4),Mi=r(15),ji=r(77),Ci=r(349),Ai=r(619),Pi=r(495),Ei=r(444),Fi=r(687),Ii=r(478),Ri=r(479);const Di=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Li=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];var Ni=r(439),zi=r(45);let Bi,Ui=null,Vi=null;async function Hi(){return Object(i.h)(Vi)&&(Vi=function(){if(Object(i.h)(Bi)){const e=e=>Object(zi.a)("esri/libs/basisu/"+e);Bi=Promise.all([r.e(128),r.e(138)]).then(r.bind(null,901)).then((function(e){return e.b})).then(({default:t})=>t({locateFile:e}).then(e=>(e.initializeBasis(),delete e.then,e)))}return Bi}(),Ui=await Vi),Vi}const Gi=h.a.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function ki(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Wi=ki("DXT1"),qi=ki("DXT3"),$i=ki("DXT5");function Xi(e,t,r,i){const{textureData:n,internalFormat:o,width:a,height:s}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Gi.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Gi.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let n,o;switch(i){case Wi:n=8,o=33776;break;case qi:n=16,o=33778;break;case $i:n=16,o=33779;break;default:return Gi.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[4],c=r[3];0==(3&s)&&0==(3&c)||(Gi.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,u=c;let d,h;131072&r[2]&&!1!==t&&(a=Math.max(1,r[7])),1===a||Object(L.f)(s)&&Object(L.f)(c)||(Gi.warn("Ignoring mipmaps of non power of two sized compressed texture."),a=1);let f=r[1]+4;const m=[];for(let p=0;p<a;++p)h=(s+3>>2)*(c+3>>2)*n,d=new Uint8Array(e,f,h),m.push(d),f+=h,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:m},internalFormat:o,width:l,height:u}}(r,i);t.samplingMode=n.levels.length>1?9987:9729,t.hasMipmap=n.levels.length>1,t.internalFormat=o,t.width=a,t.height=s;const c=new Ei.a(e,t,n);return e.bindTexture(c,0),c}class Yi extends y{constructor(e,t){super(),this.data=e,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new ji.a,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Yi.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;Object(i.h)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){Object(Si.t)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){Object(Si.u)(e.src)||Object(Si.t)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(Object(i.h)(e))return 0;if(Object(yi.c)(e)||Object(yi.k)(e))return t.encoding===Yi.BASIS_ENCODING?function(e){if(Object(i.h)(Ui))return e.byteLength;const t=new Ui.BasisFile(new Uint8Array(e));if(t.getNumImages()<1)return 0;const r=t.getNumLevels(0),n=t.getHasAlpha(),o=t.getImageWidth(0,0),a=t.getImageHeight(0,0);t.close(),t.delete();const s=Object(Fi.b)(n?37496:37492),c=(4**r-1)/(3*4**(r-1));return Math.ceil(o*a*s*c)}(e):e.byteLength;const{width:r,height:n}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Yi.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*n*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){const t=this.params.mipmap&&!this.params.disableAnisotropy;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:t?e.parameters.maxMaxAnisotropy:void 0}}load(e,t){if(Object(i.i)(this.glTexture))return this.glTexture;if(Object(i.i)(this.loadingPromise))return this.loadingPromise;const r=this.data;return Object(i.h)(r)?(this.glTexture=new Ei.a(e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):(Object(yi.c)(r)||Object(yi.k)(r))&&this.params.encoding===Yi.DDS_ENCODING?this.loadFromDDSData(e,r):(Object(yi.c)(r)||Object(yi.k)(r))&&this.params.encoding===Yi.BASIS_ENCODING?this.loadFromBasis(e,r):Object(yi.k)(r)?this.loadFromPixelData(e,r):Object(yi.c)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||Object(i.h)(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(Object(i.i)(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:n}=this.powerOfTwoStretchInfo;n.setData(this.data),this.drawStretchedTexture(e,t,r,i,n,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this.glTexture.descriptor;e!==r||t!==i?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=Xi(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromBasis(e,t){return this.loadAsync(()=>async function(e,t,r){Object(i.h)(Ui)&&(Ui=await Hi());const n=new Ui.BasisFile(new Uint8Array(r));if(n.getNumImages()<1)return null;const o=n.getNumLevels(0),a=n.getHasAlpha(),s=n.getImageWidth(0,0),c=n.getImageHeight(0,0),{compressedTextureETC:l,compressedTextureS3TC:u}=e.capabilities,[d,h]=l?a?[1,37496]:[0,37492]:u?a?[3,33779]:[2,33776]:[13,6408];n.startTranscoding();const f=[];for(let i=0;i<o;i++)f.push(new Uint8Array(n.getImageTranscodedSizeInBytes(0,i,d))),n.transcodeImage(f[i],0,i,d,0,0);n.close(),n.delete();const m={...t,samplingMode:o>1?9987:9729,hasMipmap:o>1,internalFormat:h,width:s,height:c};return new Ei.a(e,m,{type:"compressed",levels:f})}(e,this.createDescriptor(e),t).then(e=>(this.glTexture=e,e)))}loadFromPixelData(e,t){Object(v.a)(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new Ei.a(e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=Object(Mi.d)();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync(async i=>{const n=await Object(Ai.a)(r,{signal:i});return this.loadFromImage(e,n,t)})}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync(async i=>{const n=await Object(Ci.a)(r,r.src,!1,i);return this.loadFromImage(e,n,t)})}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync(n=>new Promise((o,a)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),Object(i.i)(u)&&u.remove()},c=()=>{r.readyState>=2&&(s(),o(this.loadFromImage(e,r,t)))},l=e=>{s(),a(e||new wi.a("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const u=Object(Mi.p)(n,()=>l(Object(Mi.e)()))}))}loadFromImage(e,t,r){const i=Yi.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const n=this.createDescriptor(e);return n.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,n)||Object(L.f)(i.width)&&Object(L.f)(i.height)?(n.width=i.width,n.height=i.height,this.glTexture=new Ei.a(e,n,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,n,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Object(Pi.a)(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,i,n){const{width:o,height:a}=r,s=Object(L.i)(o),c=Object(L.i)(a);let l;switch(i.width=s,i.height=c,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[o/s,a/c],l=new Ei.a(e,i),l.updateData(0,0,0,o,a,t);break;case 1:case null:case void 0:l=this.stretchToPowerOfTwo(e,t,i,n);break;default:Object(Ti.a)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&l.generateMipmap(),l}stretchToPowerOfTwo(e,t,r,i){const n=new Ei.a(e,r),o=new Ni.a(e,{colorTarget:0,depthStencilTarget:0},n),a=new Ei.a(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=Di,r=wr,i=-1,n=1){let o=null;switch(t){case Li:o=new Float32Array([i,i,0,0,n,i,1,0,i,n,0,1,n,n,1,1]);break;case Di:default:o=new Float32Array([i,i,n,i,i,n,n,n])}return new Ri.a(e,r,{geometry:t},{geometry:Ii.a.createVertex(e,35044,o)})}(e);return this.drawStretchedTexture(e,i,o,s,a,n),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:o}:(s.dispose(!0),a.dispose(),o.detachColorTexture(),e.bindFramebuffer(null),o.dispose()),n}drawStretchedTexture(e,t,r,i,n,o){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height);const s=t.program;e.bindProgram(s),s.setUniform4f("color",1,1,1,1),s.setUniform1i("tex",0),e.bindTexture(n,0),e.bindVAO(i),e.setPipelineState(t.pipeline),e.drawArrays(5,0,Object(Fi.d)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if(Object(i.i)(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(Object(i.i)(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),Object(i.i)(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}Yi.DDS_ENCODING="image/vnd-ms.dds",Yi.BASIS_ENCODING="image/x.basis";var Ki=r(50),Ji=r(146);class Qi{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return Object(Si.u)(e)?(Object(Mi.u)(t),Object(Si.j)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if(Object(i.h)(this.streamDataRequester))return(await Object(Ki.default)(t,{responseType:Zi[e]})).data;const n=await Object(Ji.c)(this.streamDataRequester.request(t,e,r));if(!0===n.ok)return n.value;throw Object(Mi.t)(n.error),new wi.a("","Request for resource failed: "+n.error)}}const Zi={image:"image",binary:"array-buffer",json:"json"};var en=r(677);function tn(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u)i[c]=o[l],i[c+1]=o[l+1],c+=n,l+=a}function rn(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;if(Object(en.b)(t.elementType)){const e=Object(en.d)(t.elementType);if(Object(en.c)(t.elementType))for(let t=0;t<s;++t)i[c]=Math.max(o[l]/e,-1),i[c+1]=Math.max(o[l+1]/e,-1),c+=n,l+=a;else for(let t=0;t<s;++t)i[c]=o[l]/e,i[c+1]=o[l+1]/e,c+=n,l+=a}else tn(e,t,r);return e}Object.freeze({__proto__:null,copy:tn,normalizeIntegerBuffer:rn});function nn(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u)i[c]=o[l],i[c+1]=o[l+1],i[c+2]=o[l+2],c+=n,l+=a}Object.freeze({__proto__:null,copy:nn});function on(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u)i[c]=o[l],i[c+1]=o[l+1],i[c+2]=o[l+2],i[c+3]=o[l+3],c+=n,l+=a}function an(e,t,r,i,n,o){const a=e.typedBuffer,s=e.typedBufferStride,c=o?o.count:e.count;let l=(o&&o.dstIndex?o.dstIndex:0)*s;for(let u=0;u<c;++u)a[l]=t,a[l+1]=r,a[l+2]=i,a[l+3]=n,l+=s}Object.freeze({__proto__:null,copy:on,fill:an});Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u){for(let e=0;e<9;++e)i[c+e]=o[l+e];c+=n,l+=a}}});Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u){for(let e=0;e<16;++e)i[c+e]=o[l+e];c+=n,l+=a}}});function sn(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let i=0;i<r;i++)t[i]=e.get(i);return t}Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u)i[c]=o[l],c+=n,l+=a},makeDense:sn});function cn(e,t){return new e(new ArrayBuffer(t*e.ElementCount*Object(en.a)(e.ElementType)))}const ln=h.a.getLogger("esri.views.3d.glTF");var un=r(628);class dn{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const hn={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},fn={pbrMetallicRoughness:hn,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},mn={ESRI_externalColorMixMode:"tint"},pn=(e={})=>{const t={...hn,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Object(Ti.a)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...mn,...e.extras});return{...fn,...e,pbrMetallicRoughness:t,extras:r}};const gn={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};const bn=1179937895,vn=1313821514,xn=5130562;class _n{constructor(e,t,r,i,n){this.context=e,this.errorContext=t,this.uri=r,this.json=i,this.glbBuffer=n,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,(e,i,n)=>(t=i||"",r=n||"","")),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==i.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==i.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==i.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,i){if(Object(Si.u)(r)){const i=Object(Si.i)(r);if("model/gltf-binary"!==i.mediaType)try{const n=JSON.parse(i.isBase64?atob(i.data):i.data);return new _n(e,t,r,n)}catch{}const n=Object(Si.j)(r);if(_n.isGLBData(n))return this.fromGLBData(e,t,r,n)}if(r.endsWith(".gltf")){const n=await e.loadJSON(r,i);return new _n(e,t,r,n)}const n=await e.loadBinary(r,i);if(_n.isGLBData(n))return this.fromGLBData(e,t,r,n);const o=await e.loadJSON(r,i);return new _n(e,t,r,o)}static isGLBData(e){const t=new dn(e);return t.remainingBytes()>=4&&t.readUint32()===bn}static async fromGLBData(e,t,r,i){const n=await _n.parseGLBData(t,i);return new _n(e,t,r,n.json,n.binaryData)}static async parseGLBData(e,t){const r=new dn(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const i=r.readUint32(),n=r.readUint32(),o=r.readUint32();e.assert(i===bn,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=o,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==n,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,s,c=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),i=r.readUint32();0===c?(e.assert(i===vn,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await Mn(r.readUint8Array(t))):1===c?(e.errorUnsupportedIf(i!==xn,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],i=this.errorContext;if(null==r.uri)return i.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let n=this.bufferCache.get(e);if(!n){const o=await this.context.loadBinary(this.resolveUri(r.uri),t);n=new Uint8Array(o),this.bufferCache.set(e,n),i.assert(n.byteLength===r.byteLength,"Buffer byte lengths should match.")}return n}async getAccessor(e,t){const r=this.json.accessors[e],i=this.errorContext;i.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),i.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const n=this.json.bufferViews[r.bufferView],o=await this.getBuffer(n.buffer,t),a=wn[r.type],s=Sn[r.componentType],c=a*s,l=n.byteStride||c;return{raw:o.buffer,byteStride:l,byteOffset:o.byteOffset+(n.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:l===c,componentCount:a,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return sn(this.wrapAccessor(d.l,r));case 5123:return sn(this.wrapAccessor(d.j,r));case 5125:return sn(this.wrapAccessor(d.k,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const i=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+jn[i.componentType]),r.errorUnsupportedIf(3!==i.componentCount,"POSITION vertex attribute must have 3 components, but found "+i.componentCount.toFixed()),this.wrapAccessor(d.u,i)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const i=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+jn[i.componentType]),r.errorUnsupportedIf(3!==i.componentCount,"NORMAL vertex attribute must have 3 components, but found "+i.componentCount.toFixed()),this.wrapAccessor(d.u,i)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const i=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+jn[i.componentType]),r.errorUnsupportedIf(4!==i.componentCount,"TANGENT vertex attribute must have 4 components, but found "+i.componentCount.toFixed()),new d.C(i.raw,i.byteOffset,i.byteStride,i.byteOffset+i.byteStride*i.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const i=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==i.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+i.componentCount.toFixed()),5126===i.componentType?this.wrapAccessor(d.m,i):(r.errorUnsupportedIf(!i.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new d.q(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new d.t(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new d.o(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new d.r(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new d.s(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new d.m(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void Object(Ti.a)(e.componentType)}}(i))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const i=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==i.componentCount&&3!==i.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+i.componentCount.toFixed()),4===i.componentCount){if(5126===i.componentType)return this.wrapAccessor(d.C,i);if(5121===i.componentType)return this.wrapAccessor(d.J,i);if(5123===i.componentType)return this.wrapAccessor(d.H,i)}else if(3===i.componentCount){if(5126===i.componentType)return this.wrapAccessor(d.u,i);if(5121===i.componentType)return this.wrapAccessor(d.B,i);if(5123===i.componentType)return this.wrapAccessor(d.z,i)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+jn[i.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){const i=this.errorContext;let n=this.materialCache.get(e.material);if(!n){const o=null!=e.material?pn(this.json.materials[e.material]):pn(),a=o.pbrMetallicRoughness,s=this.hasVertexColors(e);let c,l,u,d,h;a.baseColorTexture&&(i.errorUnsupportedIf(0!==(a.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),c=await this.getTexture(a.baseColorTexture.index,t)),o.normalTexture&&(0!==(o.normalTexture.texCoord||0)?i.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):l=await this.getTexture(o.normalTexture.index,t)),o.occlusionTexture&&r&&(0!==(o.occlusionTexture.texCoord||0)?i.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):u=await this.getTexture(o.occlusionTexture.index,t)),o.emissiveTexture&&r&&(0!==(o.emissiveTexture.texCoord||0)?i.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):d=await this.getTexture(o.emissiveTexture.index,t)),a.metallicRoughnessTexture&&r&&(0!==(a.metallicRoughnessTexture.texCoord||0)?i.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):h=await this.getTexture(a.metallicRoughnessTexture.index,t));const f=null!=e.material?e.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:a.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:c,normalTexture:l,name:o.name,id:f,occlusionTexture:u,emissiveTexture:d,emissiveFactor:o.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:h,vertexColors:s,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return n}async getTexture(e,t){const r=this.errorContext,i=this.json.textures[e],n=(e=>({...gn,...e}))(null!=i.sampler?this.json.samplers[i.sampler]:{});r.errorUnsupportedIf(null==i.source,"Source is expected to be defined for a texture.");const o=this.json.images[i.source];let a=this.textureCache.get(e);if(!a){let i;if(o.uri)i=await this.context.loadImage(this.resolveUri(o.uri),t);else{r.errorUnsupportedIf(null==o.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==o.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[o.bufferView],n=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),i=await async function(e,t){return new Promise((r,i)=>{const n=new Blob([e],{type:t}),o=URL.createObjectURL(n),a=new Image;a.addEventListener("load",()=>{URL.revokeObjectURL(o),"decode"in a?a.decode().then(()=>r(a),()=>r(a)):r(a)}),a.addEventListener("error",e=>{URL.revokeObjectURL(o),i(e)}),a.src=o})}(new Uint8Array(n.buffer,n.byteOffset+(e.byteOffset||0),e.byteLength),o.mimeType)}a={data:i,wrapS:n.wrapS,wrapT:n.wrapT,minFilter:n.minFilter,name:o.name,id:e},this.textureCache.set(e,a)}return a}getNodeTransform(e){if(void 0===e)return Tn;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),i=this.json.nodes[e];i.matrix?t=Object(a.g)(Object(l.b)(),r,i.matrix):i.translation||i.rotation||i.scale?(t=Object(l.c)(r),i.translation&&Object(a.j)(t,t,i.translation),i.rotation&&(yn[3]=Object(de.b)(yn,i.rotation),Object(a.h)(t,t,yn[3],yn)),i.scale&&Object(a.i)(t,t,i.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Object(Si.z)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=un.a.parse(this.json.asset.version,"glTF");On.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(e=>{this.nodeParentMap.set(e,t)})})}}const On=new un.a(2,0,"glTF"),Tn=Object(a.f)(Object(l.b)(),Math.PI/2),yn=Object(C.a)(),wn={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Sn={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function Mn(e){return new Promise((t,r)=>{const i=new Blob([e]),n=new FileReader;n.onload=()=>{const e=n.result;t(JSON.parse(e))},n.onerror=e=>{r(e)},n.readAsText(i)})}const jn={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let Cn=0;async function An(e,t,r={},n=!0){const o=await _n.load(e,Rn,t,r),a="gltf_"+Cn++,s={lods:[],materials:new Map,textures:new Map,meta:Pn(o)},c=!(!o.json.asset.extras||"symbolResource"!==o.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,i=r.scenes[r.scene||0].nodes,n=i.length>1;for(const a of i){const e=r.nodes[a],t=[o(a,0)];if(En(e)&&!n){const r=e.extensions.MSFT_lod.ids;t.push(...r.map((e,t)=>o(e,t+1)))}await Promise.all(t)}async function o(i,n){const a=r.nodes[i],s=e.getNodeTransform(i);if(Rn.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const r of e.primitives)await t(r,s,n,e.name)}for(const e of a.children||[])await o(e,n)}}(o,async(e,t,c,u)=>{const d=void 0!==e.mode?e.mode:4,h=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(d);if(Object(i.h)(h))return void Rn.warnUnsupported("Unsupported primitive mode ("+Ln[d]+"). Skipping primitive.");if(!o.hasPositions(e))return void Rn.warn("Skipping primitive without POSITION vertex attribute.");const f=await o.getMaterial(e,r,n),m={transform:Object(l.c)(t),attributes:{position:await o.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await o.getIndexData(e,r),primitiveType:h,material:Fn(s,f,a)};o.hasNormals(e)&&(m.attributes.normal=await o.getNormalData(e,r)),o.hasTangents(e)&&(m.attributes.tangent=await o.getTangentData(e,r)),o.hasTextureCoordinates(e)&&(m.attributes.texCoord0=await o.getTextureCoordinates(e,r)),o.hasVertexColors(e)&&(m.attributes.color=await o.getVertexColors(e,r));let p=null;Object(i.i)(s.meta)&&Object(i.i)(s.meta.ESRI_lod)&&"screenSpaceRadius"===s.meta.ESRI_lod.metric&&(p=s.meta.ESRI_lod.thresholds[c]),s.lods[c]=s.lods[c]||{parts:[],name:u,lodThreshold:p},s.lods[c].parts.push(m)}),{model:s,meta:{isEsriSymbolResource:c,uri:o.uri},customMeta:{}}}function Pn(e){const t=e.json;let r=null;return t.nodes.forEach(e=>{const t=e.extras;Object(i.i)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)}),r}function En(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function Fn(e,t,r){const i=t=>{const i=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(i)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:In(t.wrapS),t:In(t.wrapT)},mipmap:Dn.some(e=>e===t.minFilter),noUnpackFlip:!0});e.textures.set(i,r)}return i},n=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(n)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?i(t.colorTexture):void 0,textureNormal:t.normalTexture?i(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?i(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?i(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?i(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(n,r)}return n}function In(e){if(33071===e||33648===e||10497===e)return e;Rn.error("Unexpected TextureSampler WrapMode: "+e)}const Rn=new class{error(e){throw new wi.a("gltf-loader-error",e)}errorUnsupported(e){throw new wi.a("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){ln.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},Dn=[9987,9985],Ln=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];const Nn=h.a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function zn(e,t){const r=await async function(e,t){const r=Object(i.i)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await Object(Ji.c)(t.request(e,"json",r));if(!0===i.ok)return i.value;Object(Mi.t)(i.error),Bn(i.error.details.url)}(e,r,t);const n=await Object(Ji.c)(Object(Ki.default)(e,Object(i.o)(t)));if(!0===n.ok)return n.value.data;Object(Mi.t)(n.error),Bn(n.error)}(e,t);return{resource:r,textures:await Hn(r.textureDefinitions,t)}}function Bn(e){throw new wi.a("","Request for object resource failed: "+e)}function Un(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Nn.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Nn.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Nn.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Nn.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Nn.warn("Indexed geometries must specify faces"),i=!1;break}default:Nn.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Nn.warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const o in n)n[o].values||(Nn.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Vn(e){const t=Object(b.c)();return e.forEach(e=>{const r=e.boundingInfo;Object(i.i)(r)&&(Object(b.g)(t,r.getBBMin()),Object(b.g)(t,r.getBBMax()))}),t}async function Hn(e,t){const r=[];for(const a in e){const n=e[a],o=n.images[0].data;if(!o){Nn.warn("Externally referenced texture data is not yet supported");continue}const s=n.encoding+";base64,"+o,c="/textureDefinitions/"+a,l={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},u=Object(i.i)(t)&&t.disableTextures?Promise.resolve(null):Object(Ai.a)(s,t);r.push(u.then(e=>({refId:c,image:e,params:l,alphaChannelUsage:"rgba"===n.channels?n.alphaChannelUsage||"transparency":"none"})))}const n=await Promise.all(r),o={};for(const i of n)o[i.refId]=i;return o}function Gn(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function kn(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Wn=new un.a(1,2,"wosr");function qn(e,t,r){if(e.count!==t.count)return void f.error("source and destination buffers need to have the same number of elements");const i=e.count,n=r[0],o=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],h=r[8],m=e.typedBuffer,p=e.typedBufferStride,g=t.typedBuffer,b=t.typedBufferStride;for(let f=0;f<i;f++){const e=f*p,t=f*b,r=g[t],i=g[t+1],v=g[t+2],x=g[t+3];m[e]=n*r+s*i+u*v,m[e+1]=o*r+c*i+d*v,m[e+2]=a*r+l*i+h*v,m[e+3]=x}}function $n(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<i;c++){const e=c*o,t=c*s;n[e]=r*a[t],n[e+1]=r*a[t+1],n[e+2]=r*a[t+2],n[e+3]=r*a[t+3]}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void f.error("source and destination buffers need to have the same number of elements");const i=e.count,n=r[0],o=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],h=r[8],m=r[9],p=r[10],g=r[11],b=r[12],v=r[13],x=r[14],_=r[15],O=e.typedBuffer,T=e.typedBufferStride,y=t.typedBuffer,w=t.typedBufferStride;for(let f=0;f<i;f++){const e=f*T,t=f*w,r=y[t],i=y[t+1],S=y[t+2],M=y[t+3];O[e]=n*r+c*i+h*S+b*M,O[e+1]=o*r+l*i+m*S+v*M,O[e+2]=a*r+u*i+p*S+x*M,O[e+3]=s*r+d*i+g*S+_*M}},transformMat3:qn,scale:$n,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<i;c++){const e=c*o,t=c*s;n[e]=a[t]>>r,n[e+1]=a[t+1]>>r,n[e+2]=a[t+2]>>r,n[e+3]=a[t+3]>>r}}});async function Xn(e,t){const r=Yn(Object(s.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):zn(r.url,t)),o=function(e,t){const r=[],o=[],a=[],s=[],c=e.resource,l=un.a.parse(c.version||"1.0","wosr");Wn.validate(l);const u=c.model.name,d=c.model.geometries,h=c.materialDefinitions,f=e.textures;let m=0;const p=new Map;for(let g=0;g<d.length;g++){const e=d[g];if(!Un(e))continue;const c=kn(e),l=e.params.vertexAttributes,u=[];for(const t in l){const e=l[t],r=e.values;u.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const b=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)b.push([e,new Uint32Array(t[e].values)])}const v=f&&f[c.texture];if(v&&!p.has(c.texture)){const{image:e,params:t}=v,r=new Yi(e,t);s.push(r),p.set(c.texture,r)}const x=p.get(c.texture),_=x?x.id:void 0;let O=a[c.material]?a[c.material][c.texture]:null;if(!O){const e=h[c.material.substring(c.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=v&&v.alphaChannelUsage,o=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s={ambient:Object(n.f)(e.diffuse),diffuse:Object(n.f)(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:v?Gn(v.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:_,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};Object(i.i)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),O=new di(s),a[c.material]||(a[c.material]={}),a[c.material][c.texture]=O}o.push(O);const T=new se(u,b);m+=b.position?b.position.length:0,r.push(T)}return{name:u,stageResources:{textures:s,materials:o,geometries:r},pivotOffset:c.model.pivotOffset,boundingBox:Vn(r),numberOfVertices:m,lodThreshold:null}}(e,t);return{lods:[o],referenceBoundingBox:o.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const c=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):An(new Qi(t.streamDataRequester),r.url,t,t.usePBR)),u=Object(i.g)(c.model.meta,"ESRI_proxyEllipsoid");c.meta.isEsriSymbolResource&&Object(i.i)(u)&&-1!==c.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const s=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const c of s.parts){const s=c.attributes.normal;if(Object(i.h)(s))return;const u=c.attributes.position,h=u.count,f=Object(n.e)(),m=Object(n.e)(),p=Object(n.e)(),g=cn(d.J,h),b=cn(d.u,h),v=Object(a.a)(Object(l.b)(),c.transform);for(let i=0;i<h;i++){u.getVec(i,m),s.getVec(i,f),Object(o.j)(m,m,c.transform),Object(o.g)(p,m,t.center),Object(o.a)(p,p,t.radius);const n=p[2],a=Object(o.m)(p),l=Math.min(.45+.55*a*a,1);Object(o.a)(p,p,t.radius),Object(o.j)(p,p,v),Object(o.o)(p,p),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(o.f)(p,p,f,n>-1?.2:Math.min(-4*n-3.8,1)),b.setVec(i,p),g.set(i,0,255*l),g.set(i,1,255*l),g.set(i,2,255*l),g.set(i,3,255)}c.attributes.normal=b,c.attributes.color=g}}}(c,u);const h=c.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:c.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},f={...t.materialParamsMixin,treeRendering:c.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=Kn(c,h,f,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=Kn(c,h,f,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}const m=Kn(c,h,f);return{lods:m,referenceBoundingBox:m[0].boundingBox,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}function Yn(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Kn(e,t,r,n){const o=e.model,a=Object(c.a)(),s=new Array,l=new Map,h=new Map;return o.lods.forEach((e,c)=>{if(void 0!==n&&c!==n)return;const f={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(i.i)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(b.c)()};s.push(f),e.parts.forEach(e=>{const n=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=o.materials.get(e.material),c=Object(i.i)(e.attributes.texCoord0),v=Object(i.i)(e.attributes.normal);if(!l.has(n)){if(c){if(Object(i.i)(s.textureColor)&&!h.has(s.textureColor)){const e=o.textures.get(s.textureColor),t={...e.parameters,preMultiplyAlpha:!0};h.set(s.textureColor,new Yi(e.data,t))}if(Object(i.i)(s.textureNormal)&&!h.has(s.textureNormal)){const e=o.textures.get(s.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};h.set(s.textureNormal,new Yi(e.data,t))}if(Object(i.i)(s.textureOcclusion)&&!h.has(s.textureOcclusion)){const e=o.textures.get(s.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};h.set(s.textureOcclusion,new Yi(e.data,t))}if(Object(i.i)(s.textureEmissive)&&!h.has(s.textureEmissive)){const e=o.textures.get(s.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};h.set(s.textureEmissive,new Yi(e.data,t))}if(Object(i.i)(s.textureMetallicRoughness)&&!h.has(s.textureMetallicRoughness)){const e=o.textures.get(s.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};h.set(s.textureMetallicRoughness,new Yi(e.data,t))}}const a=s.color[0]**(1/2.1),u=s.color[1]**(1/2.1),d=s.color[2]**(1/2.1),f=s.emissiveFactor[0]**(1/2.1),m=s.emissiveFactor[1]**(1/2.1),p=s.emissiveFactor[2]**(1/2.1);l.set(n,new di({...t,transparent:"BLEND"===s.alphaMode,textureAlphaMode:Jn(s.alphaMode),textureAlphaCutoff:s.alphaCutoff,diffuse:[a,u,d],ambient:[a,u,d],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:v?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(i.i)(s.textureColor)&&c?h.get(s.textureColor).id:void 0,colorMixMode:s.colorMixMode,normalTextureId:Object(i.i)(s.textureNormal)&&c?h.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:Object(i.i)(s.textureOcclusion)&&c?h.get(s.textureOcclusion).id:void 0,emissiveTextureId:Object(i.i)(s.textureEmissive)&&c?h.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(i.i)(s.textureMetallicRoughness)&&c?h.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[f,m,p],mrrFactors:[s.metallicFactor,s.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const x=function(e,t){switch(t){case 4:return function(e){return"number"==typeof e?re(e):Object(yi.i)(e)||Object(yi.k)(e)?new Uint32Array(e):e}(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,i=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(i[e++]=t,i[e++]=t+1,i[e++]=t+2):(i[e++]=t+1,i[e++]=t,i[e++]=t+2)}else{let t=0;for(let n=0;n<r;n+=1)if(n%2==0){const r=e[n],o=e[n+1],a=e[n+2];i[t++]=r,i[t++]=o,i[t++]=a}else{const r=e[n+1],o=e[n],a=e[n+2];i[t++]=r,i[t++]=o,i[t++]=a}}return i}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,i=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)i[e++]=0,i[e++]=t+1,i[e++]=t+2;return i}{const t=e[0];let n=e[1],o=0;for(let a=0;a<r;++a){const r=e[a+2];i[o++]=t,i[o++]=n,i[o++]=r,n=r}return i}}(e)}}(e.indices||e.attributes.position.count,e.primitiveType),_=e.attributes.position.count,O=cn(d.u,_);m(O,e.attributes.position,e.transform);const T=[["position",{data:O.typedBuffer,size:O.elementCount,exclusive:!0}]],y=[["position",x]];if(Object(i.i)(e.attributes.normal)){const t=cn(d.u,_);Object(u.g)(a,e.transform),p(t,e.attributes.normal,a),T.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),y.push(["normal",x])}if(Object(i.i)(e.attributes.tangent)){const t=cn(d.C,_);Object(u.g)(a,e.transform),qn(t,e.attributes.tangent,a),T.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),y.push(["tangent",x])}if(Object(i.i)(e.attributes.texCoord0)){const t=cn(d.m,_);rn(t,e.attributes.texCoord0),T.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),y.push(["uv0",x])}if(Object(i.i)(e.attributes.color)){const t=cn(d.J,_);if(4===e.attributes.color.elementCount)e.attributes.color instanceof d.C?$n(t,e.attributes.color,255):e.attributes.color instanceof d.J?on(t,e.attributes.color):e.attributes.color instanceof d.H&&$n(t,e.attributes.color,1/256);else{an(t,255,255,255,255);const r=new d.B(t.buffer,0,4);e.attributes.color instanceof d.u?g(r,e.attributes.color,255):e.attributes.color instanceof d.B?nn(r,e.attributes.color):e.attributes.color instanceof d.z&&g(r,e.attributes.color,1/256)}T.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),y.push(["color",x])}const w=new se(T,y);f.stageResources.geometries.push(w),f.stageResources.materials.push(l.get(n)),c&&(Object(i.i)(s.textureColor)&&f.stageResources.textures.push(h.get(s.textureColor)),Object(i.i)(s.textureNormal)&&f.stageResources.textures.push(h.get(s.textureNormal)),Object(i.i)(s.textureOcclusion)&&f.stageResources.textures.push(h.get(s.textureOcclusion)),Object(i.i)(s.textureEmissive)&&f.stageResources.textures.push(h.get(s.textureEmissive)),Object(i.i)(s.textureMetallicRoughness)&&f.stageResources.textures.push(h.get(s.textureMetallicRoughness))),f.numberOfVertices+=_;const S=w.boundingInfo;Object(i.i)(S)&&(Object(b.g)(f.boundingBox,S.getBBMin()),Object(b.g)(f.boundingBox,S.getBBMax()))})}),s}function Jn(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}}}]);
//# sourceMappingURL=44.4bffccc6.chunk.js.map