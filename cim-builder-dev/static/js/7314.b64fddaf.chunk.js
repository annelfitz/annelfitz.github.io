"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[7314],{96212:(t,e,i)=>{i.d(e,{Z:()=>g});var l,n=i(27366),s=i(10064),r=i(46784),o=i(84652),a=i(32718),h=i(92026),c=i(49861),f=i(89125),u=i(69912);class p{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.minValue=t,this.maxValue=e,this.noDataValue=i}}let x=l=class extends r.wq{constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.statistics=null}static createEmptyBand(t,e){return new(l.getPixelArrayConstructor(t))(e)}static getPixelArrayConstructor(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e}castPixelType(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].includes(e)?e="u8":["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].includes(e)||(e="f32"),e}getPlaneCount(){return this.pixels?.length}addData(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new s.Z("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics??new p)}getAsRGBA(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}getAsRGBAFloat(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){if(!this.pixels)return;this.statistics=this.pixels.map((t=>this._calculateBandStatistics(t,this.mask)));const t=this.mask;let e=0;if((0,h.pC)(t))for(let i=0;i<t.length;i++)t[i]&&e++;else e=this.width*this.height;this.validPixelCount=e}clamp(t){if(!t||"f64"===t||"f32"===t||!this.pixels)return;let e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}const[i,n]=e,s=this.pixels,r=this.width*this.height,o=s.length;let a,h,c;const f=[];for(let u=0;u<o;u++){c=l.createEmptyBand(t,r),a=s[u];for(let t=0;t<r;t++)h=a[t],c[t]=h>n?n:h<i?i:h;f.push(c)}this.pixels=f,this.pixelType=t}extractBands(t){const{pixels:e,statistics:i}=this;if((0,h.Wi)(t)||0===t.length||!e||0===e.length)return this;const n=e.length,s=t.some((t=>t>=e.length)),r=n===t.length&&!t.some(((t,e)=>t!==e));return s||r?this:new l({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((t=>e[t])),statistics:i&&t.map((t=>i[t]))})}clone(){const t=new l({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let e;(0,h.pC)(this.mask)&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0));const i=l.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const l=!!this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=l?this.pixels[e].slice(0,this.pixels[e].length):new i(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=(0,o.d9)(this.statistics[e]);return t}_fillFrom8Bit(t){const{mask:e,maskIsAlpha:i,pixels:l}=this;if(!t||!l||!l.length)return void a.Z.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let n,s,r,o;n=s=r=l[0],l.length>=3?(s=l[1],r=l[2]):2===l.length&&(s=l[1]);const c=new Uint32Array(t),f=this.width*this.height;if(n.length===f)if((0,h.pC)(e)&&e.length===f)if(i)for(o=0;o<f;o++)e[o]&&(c[o]=e[o]<<24|r[o]<<16|s[o]<<8|n[o]);else for(o=0;o<f;o++)e[o]&&(c[o]=255<<24|r[o]<<16|s[o]<<8|n[o]);else for(o=0;o<f;o++)c[o]=255<<24|r[o]<<16|s[o]<<8|n[o];else a.Z.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(t){const{pixels:e,mask:i,statistics:l}=this;if(!t||!e||!e.length)return void a.Z.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const n=this.pixelType;let s=1,r=0,o=1;if(l&&l.length>0){for(const t of l)if(null!=t.minValue&&(r=Math.min(r,t.minValue)),null!=t.maxValue&&null!=t.minValue){const e=t.maxValue-t.minValue;o=Math.max(o,e)}s=255/o}else{let t=255;"s8"===n?(r=-128,t=127):"u16"===n?t=65535:"s16"===n?(r=-32768,t=32767):"u32"===n?t=4294967295:"s32"===n?(r=-2147483648,t=2147483647):"f32"===n?(r=-34e38,t=34e38):"f64"===n&&(r=-Number.MAX_VALUE,t=Number.MAX_VALUE),s=255/(t-r)}const c=new Uint32Array(t),f=this.width*this.height;let u,p,x,g,d;if(u=p=x=e[0],u.length!==f)return a.Z.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(p=e[1],e.length>=3&&(x=e[2]),(0,h.pC)(i)&&i.length===f)for(g=0;g<f;g++)i[g]&&(c[g]=255<<24|(x[g]-r)*s<<16|(p[g]-r)*s<<8|(u[g]-r)*s);else for(g=0;g<f;g++)c[g]=255<<24|(x[g]-r)*s<<16|(p[g]-r)*s<<8|(u[g]-r)*s;else if((0,h.pC)(i)&&i.length===f)for(g=0;g<f;g++)d=(u[g]-r)*s,i[g]&&(c[g]=255<<24|d<<16|d<<8|d);else for(g=0;g<f;g++)d=(u[g]-r)*s,c[g]=255<<24|d<<16|d<<8|d}_fillFrom32Bit(t){const{pixels:e,mask:i}=this;if(!t||!e||!e.length)return a.Z.getLogger(this.declaredClass).error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let l,n,s,r;l=n=s=e[0],e.length>=3?(n=e[1],s=e[2]):2===e.length&&(n=e[1]);const o=this.width*this.height;if(l.length!==o)return a.Z.getLogger(this.declaredClass).error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let c=0;if((0,h.pC)(i)&&i.length===o)for(r=0;r<o;r++)t[c++]=l[r],t[c++]=n[r],t[c++]=s[r],t[c++]=1&i[r];else for(r=0;r<o;r++)t[c++]=l[r],t[c++]=n[r],t[c++]=s[r],t[c++]=1}_calculateBandStatistics(t,e){let i=1/0,l=-1/0;const n=t.length;let s,r=0;if((0,h.pC)(e))for(s=0;s<n;s++)e[s]&&(r=t[s],i=r<i?r:i,l=r>l?r:l);else for(s=0;s<n;s++)r=t[s],i=r<i?r:i,l=r>l?r:l;return new p(i,l)}};(0,n._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"width",void 0),(0,n._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"height",void 0),(0,n._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"pixelType",void 0),(0,n._)([(0,f.p)("pixelType")],x.prototype,"castPixelType",null),(0,n._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"validPixelCount",void 0),(0,n._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"mask",void 0),(0,n._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"maskIsAlpha",void 0),(0,n._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"pixels",void 0),(0,n._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"statistics",void 0),x=l=(0,n._)([(0,u.j)("esri.layers.support.PixelBlock")],x);const g=x},17314:(t,e,i)=>{i.d(e,{CD:()=>n,DX:()=>l,Gd:()=>c,Kh:()=>b,Pz:()=>f,Qh:()=>G,SJ:()=>u,Uk:()=>I,Vl:()=>R,XV:()=>p,a2:()=>d,nA:()=>C,nk:()=>a,oB:()=>A,pW:()=>U,qF:()=>h,sS:()=>k,us:()=>v,zp:()=>g});var l,n,s,r=i(92026),o=i(96212);function a(t){return(0,r.pC)(t)&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0}function h(t,e){if(!e?.length||!a(t))return t;const i=t.pixels.length;return e&&e.some((t=>t>=i))||1===i&&1===e.length&&0===e[0]?t:i!==e.length||e.some(((t,e)=>t!==e))?new o.Z({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((e=>t.pixels[e])),statistics:t.statistics&&e.map((e=>t.statistics[e]))}):t}function c(t){if(!t?.length||t.some((t=>!a(t))))return null;if(1===t.length)return(0,r.pC)(t[0])?t[0].clone():null;const e=t,{width:i,height:l,pixelType:n}=e[0];if(e.some((t=>t.width!==i||t.height!==l)))return null;const s=e.map((t=>{let{mask:e}=t;return e})).filter((t=>null!=t));let h=null;s.length&&(h=new Uint8Array(i*l),h.set(s[0]),s.length>1&&w(s.slice(1),h));const c=[];e.forEach((t=>{let{pixels:e}=t;return c.push(...e)}));const f=e.map((t=>{let{statistics:e}=t;return e})).filter((t=>t?.length)),u=[];return f.forEach((t=>u.push(...t))),new o.Z({pixelType:n,width:i,height:l,mask:h,pixels:c,statistics:u.length?u:null})}function f(t){if(!t)return;const e=t.colormap;if(!e||0===e.length)return;const i=e.sort(((t,e)=>t[0]-e[0]));let l=0;i[0][0]<0&&(l=i[0][0]);const n=Math.max(256,i[i.length-1][0]-l+1),s=new Uint8Array(4*n),r=[];let o,a=0,h=0;const c=5===i[0].length;if(n>65536)return i.forEach((t=>{r[t[0]-l]=c?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:r,offset:l,alphaSpecified:c};if(t.fillUnspecified)for(o=i[h],a=o[0]-l;a<n;a++)s[4*a]=o[1],s[4*a+1]=o[2],s[4*a+2]=o[3],s[4*a+3]=c?o[4]:255,a===o[0]-l&&(o=h===i.length-1?o:i[++h]);else for(a=0;a<i.length;a++)o=i[a],h=4*(o[0]-l),s[h]=o[1],s[h+1]=o[2],s[h+2]=o[3],s[h+3]=c?o[4]:255;return{indexedColormap:s,offset:l,alphaSpecified:c}}function u(t,e){if(!a(t))return t;if(!e||!e.indexedColormap&&!e.indexed2DColormap)return t;const i=t.clone(),l=i.pixels;let n=i.mask;const s=i.width*i.height;if(1!==l.length)return t;const{indexedColormap:o,indexed2DColormap:h,offset:c,alphaSpecified:f}=e;let u=0;const p=l[0],x=new Uint8Array(p.length),g=new Uint8Array(p.length),d=new Uint8Array(p.length);let m,y=0;if(o){const t=o.length-1;if((0,r.pC)(n))for(u=0;u<s;u++)n[u]&&(y=4*(p[u]-c),y<c||y>t?n[u]=0:(x[u]=o[y],g[u]=o[y+1],d[u]=o[y+2],n[u]=o[y+3]));else{for(n=new Uint8Array(s),u=0;u<s;u++)y=4*(p[u]-c),y<c||y>t?n[u]=0:(x[u]=o[y],g[u]=o[y+1],d[u]=o[y+2],n[u]=o[y+3]);i.mask=n}}else if(h)if((0,r.pC)(n))for(u=0;u<s;u++)n[u]&&(m=h[p[u]],x[u]=m[0],g[u]=m[1],d[u]=m[2],n[u]=m[3]);else{for(n=new Uint8Array(s),u=0;u<s;u++)m=h[p[u]],x[u]=m[0],g[u]=m[1],d[u]=m[2],n[u]=m[3];i.mask=n}return i.pixels=[x,g,d],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=f,i}function p(t,e){if(!a(t))return null;const{pixels:i,mask:l}=t,n=i.length;let s=e.lut;const{offset:r}=e;s&&1===s[0].length&&(s=i.map((()=>s)));const h=[],c=e.outputPixelType||"u8";for(let o=0;o<n;o++){const t=x(i[o],l,s[o],r||0,c);h.push(t)}const f=new o.Z({width:t.width,height:t.height,pixels:h,mask:l,pixelType:c});return f.updateStatistics(),f}function x(t,e,i,l,n){const s=t.length,r=o.Z.createEmptyBand(n,s);if(e)for(let o=0;o<s;o++)e[o]&&(r[o]=i[t[o]-l]);else for(let o=0;o<s;o++)r[o]=i[t[o]-l];return r}function g(t,e){if(!a(t))return null;const i=t.clone(),{pixels:l}=i,n=i.width*i.height,s=e.length,r=Math.floor(s/2),o=e[Math.floor(r)],h=l[0];let c,f,u,p,x,g,d=!1;const m=new Uint8Array(n),y=new Uint8Array(n),w=new Uint8Array(n);let k=i.mask;const A=4===e[0].mappedColor.length;for(k||(k=new Uint8Array(n),k.fill(A?255:1),i.mask=k),x=0;x<n;x++)if(k[x]){for(c=h[x],d=!1,g=r,f=o,u=0,p=s-1;p-u>1;){if(c===f.value){d=!0;break}c>f.value?u=g:p=g,g=Math.floor((u+p)/2),f=e[Math.floor(g)]}d||(c===e[u].value?(f=e[u],d=!0):c===e[p].value?(f=e[p],d=!0):c<e[u].value?(d=!1,f=null):c>e[u].value&&(c<e[p].value?(f=e[u],d=!0):p===s-1?(d=!1,f=null):(f=e[p],d=!0))),d?(m[x]=f.mappedColor[0],y[x]=f.mappedColor[1],w[x]=f.mappedColor[2],k[x]=f.mappedColor[3]):m[x]=y[x]=w[x]=k[x]=0}return i.pixels=[m,y,w],i.mask=k,i.pixelType="u8",i.maskIsAlpha=A,i}function d(t,e){if(!a(t))return null;const{width:i,height:l}=t,{inputRanges:n,outputValues:s,outputPixelType:r,noDataRanges:h,allowUnmatched:c}=e,f=t.pixels[0],u=o.Z.createEmptyBand(r,f.length);c&&u.set(f);const p=t.mask,x=n.length/2;for(let o=0;o<l;o++)for(let t=0;t<i;t++){const e=o*i+t;if(!p||p[e]){const t=f[e];for(let i=x-1;i>=0;i--)if(t>=n[2*i]&&t<=n[2*i+1]){u[e]=s[i];break}}}let g=p;if(h?.length){g=new Uint8Array(i*l),p&&g.set(p);for(let t=0;t<l;t++)for(let e=0;e<i;e++){const l=t*i+e;if(!p||p[l]){const t=f[l];for(let e=0;e<x;e+=2)if(t>=h[e]&&t<=h[e+1]){u[l]=0,g[l]=0;break}}}}return new o.Z({width:i,height:l,pixelType:r,pixels:[u],mask:g})}function m(t,e,i,l){const n=null!=i&&i.length>=2?new Set(i):null,s=1===i?.length?i[0]:null,r=!!e?.length;for(let o=0;o<t.length;o++)if(l[o]){const i=t[o];if(r){let t=!1;for(let l=0;l<e.length;l+=2)if(i>=e[l]&&i<=e[l+1]){t=!0;break}t||(l[o]=0)}l[o]&&(i===s||n?.has(i))&&(l[o]=0)}}function y(t,e){const i=t[0].length;for(let l=0;l<i;l++)if(e[l]){let i=!1;for(let e=0;e<t.length;e++)if(t[e][l]){i=!0;break}i||(e[l]=0)}}function w(t,e){const i=t[0].length;for(let l=0;l<i;l++)if(e[l]){let i=!1;for(let e=0;e<t.length;e++)if(0===t[e][l]){i=!0;break}i&&(e[l]=0)}}function k(t,e){if(!a(t))return null;const{width:i,height:l,pixels:n}=t,s=i*l,r=new Uint8Array(s);t.mask?r.set(t.mask):r.fill(255);const h=n.length,{includedRanges:c,noDataValues:f,outputPixelType:u,matchAll:p,lookup:g}=e;if(g){const t=[];for(let e=0;e<h;e++){const i=x(n[e],r,g.lut,g.offset||0,"u8");t.push(i)}1===t.length?r.set(t[0]):p?y(t,r):w(t,r)}else if(p){const t=[];for(let e=0;e<h;e++){const i=new Uint8Array(s);i.set(r),m(n[e],c,f,i),t.push(i)}1===t.length?r.set(t[0]):y(t,r)}else for(let o=0;o<h;o++)m(n[o],c,f,r);return new o.Z({width:i,height:l,pixelType:u,pixels:n,mask:r})}function A(t,e,i){if("u8"!==t&&"s8"!==t&&"u16"!==t&&"s16"!==t)return null;const l=t.includes("16")?65536:256,n=t.includes("s")?-l/2:0,s=o.Z.createEmptyBand(t,l);for(let r=0;r<e.length;r++){const t=i[r],l=Math.ceil(e[2*r]-n),o=Math.floor(e[2*r+1]-n);for(let e=l;e<=o;e++)s[e]=t}return{lut:s,offset:n}}function C(t,e,i){if("u8"!==t&&"s8"!==t&&"u16"!==t&&"s16"!==t)return null;const l=t.includes("16")?65536:256,n=t.includes("s")?-l/2:0,s=new Uint8Array(l);if(e)for(let r=0;r<e.length;r++){const t=Math.ceil(e[2*r]-n),i=Math.floor(e[2*r+1]-n);for(let e=t;e<=i;e++)s[e]=255}if(i)for(let r=0;r<i.length;r++)s[i[r]-n]=0;return{lut:s,offset:n}}function b(t,e){if(!t||0===t.length)return null;const i=t.find((t=>t.pixelBlock));if(!i||(0,r.Wi)(i.pixelBlock))return null;const l=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,n=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,s=.01*Math.min(l,n),o=t.sort(((t,e)=>Math.abs(t.extent.ymax-e.extent.ymax)>s?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>s?t.extent.xmin-e.extent.xmin:0)),a=Math.min.apply(null,o.map((t=>t.extent.xmin))),h=Math.min.apply(null,o.map((t=>t.extent.ymin))),c=Math.max.apply(null,o.map((t=>t.extent.xmax))),f=Math.max.apply(null,o.map((t=>t.extent.ymax))),u={x:Math.round((e.xmin-a)/l),y:Math.round((f-e.ymax)/n)},p={width:Math.round((c-a)/l),height:Math.round((f-h)/n)},x={width:Math.round((e.xmax-e.xmin)/l),height:Math.round((e.ymax-e.ymin)/n)};return Math.round(p.width/i.pixelBlock.width)*Math.round(p.height/i.pixelBlock.height)!==o.length||u.x<0||u.y<0||p.width<x.width||p.height<x.height?null:{extent:e,pixelBlock:v(o.map((t=>t.pixelBlock)),p,{clipOffset:u,clipSize:x})}}function M(t,e,i,l,n,s){const{width:r,height:o}=i.block,{x:a,y:h}=i.offset,{width:c,height:f}=i.mosaic,u=function(t,e,i,l,n,s,r,o){return{xmin:n<=i*t?0:n<i*t+t?n-i*t:t,ymin:s<=l*e?0:s<l*e+e?s-l*e:e,xmax:n+r<=i*t?0:n+r<i*t+t?n+r-i*t:t,ymax:s+o<=l*e?0:s+o<l*e+e?s+o-l*e:e}}(r,o,l,n,a,h,c,f);let p=0,x=0;if(s){const t=s.hasGCSSShiftTransform?360:s.halfWorldWidth??0,e=r*s.resolutionX,i=s.startX+l*e,n=i+e;i<t&&n>t?x=s.rightPadding:i>=t&&(p=s.leftMargin-s.rightPadding,x=0)}if(u.xmax-=x,"number"!=typeof e)for(let g=u.ymin;g<u.ymax;g++){const i=(n*o+g-h)*c+(l*r-a)+p,s=g*r;for(let l=u.xmin;l<u.xmax;l++)t[i+l]=e[s+l]}else for(let g=u.ymin;g<u.ymax;g++){const i=(n*o+g-h)*c+(l*r-a)+p;for(let l=u.xmin;l<u.xmax;l++)t[i+l]=e}}function v(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{clipOffset:l,clipSize:n,alignmentInfo:s,blockWidths:h}=i;if(h)return T(t,e,{blockWidths:h});const c=t.find((t=>a(t)));if((0,r.Wi)(c))return null;const f=n?n.width:e.width,u=n?n.height:e.height,p=c.width,x=c.height,g=e.width/p,d=e.height/x,m={offset:l||{x:0,y:0},mosaic:n||e,block:{width:p,height:x}},y=c.pixelType,w=o.Z.getPixelArrayConstructor(y),k=c.pixels.length,A=[];let C,b,v;for(let r=0;r<k;r++){b=new w(f*u);for(let e=0;e<d;e++)for(let i=0;i<g;i++){const l=t[e*g+i];a(l)&&(C=l.pixels[r],M(b,C,m,i,e,s))}A.push(b)}if(t.some((t=>(0,r.Wi)(t)||(0,r.pC)(t.mask)&&t.mask.length>0))){v=new Uint8Array(f*u);for(let e=0;e<d;e++)for(let i=0;i<g;i++){const l=t[e*g+i],n=(0,r.pC)(l)?l.mask:null;(0,r.pC)(n)?M(v,n,m,i,e,s):M(v,l?1:0,m,i,e,s)}}const U=new o.Z({width:f,height:u,pixels:A,pixelType:y,mask:v});return U.updateStatistics(),U}function T(t,e,i){const l=t.find((t=>(0,r.pC)(t)));if((0,r.Wi)(l))return null;const n=t.some((t=>!(0,r.pC)(t)||!!t.mask)),{width:s,height:h}=e,c=n?new Uint8Array(s*h):null,{blockWidths:f}=i,u=[],p=l.getPlaneCount(),x=o.Z.getPixelArrayConstructor(l.pixelType);if(n)for(let o=0,d=0;o<t.length;d+=f[o],o++){const e=t[o];if(!a(e))continue;const i=(0,r.Wg)(e.mask);for(let t=0;t<h;t++)for(let l=0;l<f[o];l++)c[t*s+l+d]=null==i?255:i[t*e.width+l]}for(let r=0;r<p;r++){const e=new x(s*h);for(let i=0,l=0;i<t.length;l+=f[i],i++){const n=t[i];if(!a(n))continue;const o=n.pixels[r];if(null!=o)for(let t=0;t<h;t++)for(let r=0;r<f[i];r++)e[t*s+r+l]=o[t*n.width+r]}u.push(e)}const g=new o.Z({width:s,height:h,mask:c,pixels:u,pixelType:l.pixelType});return g.updateStatistics(),g}function U(t,e,i){if(!a(t))return null;const{width:l,height:n}=t,s=e.x,r=e.y,o=i.width+s,h=i.height+r;if(s<0||r<0||o>l||h>n)return t;if(0===s&&0===r&&o===l&&h===n)return t;t.mask||(t.mask=new Uint8Array(l*n));const c=t.mask;for(let a=0;a<n;a++){const t=a*l;for(let e=0;e<l;e++)c[t+e]=a<r||a>=h||e<s||e>=o?0:1}return t.updateStatistics(),t}function B(t){if(!a(t))return null;const e=t.clone(),{width:i,height:l,pixels:n}=t,s=n[0],o=e.pixels[0],h=(0,r.Wg)(t.mask);for(let r=2;r<l-1;r++){const t=new Map;for(let l=r-2;l<r+2;l++)for(let e=0;e<4;e++){const n=l*i+e;Z(t,s[n],h?h[n]:1)}o[r*i]=_(t),o[r*i+1]=o[r*i+2]=o[r*i];let e=3;for(;e<i-1;e++){let l=(r-2)*i+e+1;Z(t,s[l],h?h[l]:1),l=(r-1)*i+e+1,Z(t,s[l],h?h[l]:1),l=r*i+e+1,Z(t,s[l],h?h[l]:1),l=(r+1)*i+e+1,Z(t,s[l],h?h[l]:1),l=(r-2)*i+e-3,P(t,s[l],h?h[l]:1),l=(r-1)*i+e-3,P(t,s[l],h?h[l]:1),l=r*i+e-3,P(t,s[l],h?h[l]:1),l=(r+1)*i+e-3,P(t,s[l],h?h[l]:1),o[r*i+e]=_(t)}o[r*i+e+1]=o[r*i+e]}for(let r=0;r<i;r++)o[r]=o[i+r]=o[2*i+r],o[(l-1)*i+r]=o[(l-2)*i+r];return e.updateStatistics(),e}function _(t){if(0===t.size)return 0;let e=0,i=-1,l=0;const n=t.keys();let s=n.next();for(;!s.done;)l=t.get(s.value),l>e&&(i=s.value,e=l),s=n.next();return i}function P(t,e,i){if(0===i)return;const l=t.get(e);1===l?t.delete(e):t.set(e,l-1)}function Z(t,e,i){0!==i&&t.set(e,t.has(e)?t.get(e)+1:1)}function S(t,e,i){let{x:l,y:n}=e;const{width:s,height:h}=i;if(0===l&&0===n&&h===t.height&&s===t.width)return t;const{width:c,height:f}=t,u=Math.max(0,n),p=Math.max(0,l),x=Math.min(l+s,c),g=Math.min(n+h,f);if(x<0||g<0||!a(t))return null;l=Math.max(0,-l),n=Math.max(0,-n);const{pixels:d}=t,m=s*h,y=d.length,w=[];for(let r=0;r<y;r++){const e=d[r],i=o.Z.createEmptyBand(t.pixelType,m);for(let t=u;t<g;t++){const r=t*c;let o=(t+n-u)*s+l;for(let t=p;t<x;t++)i[o++]=e[r+t]}w.push(i)}const k=new Uint8Array(m),A=(0,r.Wg)(t.mask);for(let r=u;r<g;r++){const t=r*c;let e=(r+n-u)*s+l;for(let i=p;i<x;i++)k[e++]=A?A[t+i]:1}const C=new o.Z({width:i.width,height:i.height,pixelType:t.pixelType,pixels:w,mask:k});return C.updateStatistics(),C}function F(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!a(t))return null;const{pixels:i,width:l,height:n,mask:s,pixelType:h}=t,c=[],f=Math.round(l/2),u=Math.round(n/2),p=n-1,x=l-1;for(let r=0;r<i.length;r++){const t=i[r],s=o.Z.createEmptyBand(h,f*u);let a=0;for(let i=0;i<n;i+=2)for(let n=0;n<l;n+=2){const r=t[i*l+n];if(e){const e=n===x?r:t[i*l+n+1],o=i===p?r:t[i*l+n+l],h=n===x?o:i===p?e:t[i*l+n+l+1];s[a++]=(r+e+o+h)/4}else s[a++]=r}c.push(s)}let g=null;if((0,r.pC)(s)){g=new Uint8Array(f*u);let t=0;for(let i=0;i<n;i+=2)for(let n=0;n<l;n+=2){const r=s[i*l+n];if(e){const e=n===x?r:s[i*l+n+1],o=i===p?r:s[i*l+n+l],a=n===x?o:i===p?e:s[i*l+n+l+1];g[t++]=r*e*o*a?1:0}else g[t++]=r}}return new o.Z({width:f,height:u,pixelType:h,pixels:c,mask:g})}function R(t,e,i){if(!a(t))return null;const{width:l,height:n}=e;let{width:s,height:r}=t;const o=new Map,h={x:0,y:0},c=null==i?1:1+i;let f=t;for(let a=0;a<c;a++){const t=Math.ceil(s/l),i=Math.ceil(r/n);for(let s=0;s<i;s++){h.y=s*n;for(let i=0;i<t;i++){h.x=i*l;const t=S(f,h,e);o.set(`${a}/${s}/${i}`,t)}}a<c-1&&(f=F(f)),s=Math.round(s/2),r=Math.round(r/2)}return o}function W(t,e,i,l){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;const{width:s,height:r}=t,{width:o,height:a}=e,h=l.cols,c=l.rows,f=Math.ceil(o/h-.1/h),u=Math.ceil(a/c-.1/c);let p,x,g,d,m,y,w;const k=f*h,A=k*u*c,C=new Float32Array(A),b=new Float32Array(A),M=new Uint32Array(A),v=new Uint32Array(A);let T,U,B=0;for(let _=0;_<u;_++)for(let t=0;t<f;t++){p=12*(_*f+t),x=i[p],g=i[p+1],d=i[p+2],m=i[p+3],y=i[p+4],w=i[p+5];for(let e=0;e<c;e++){B=(_*c+e)*k+t*h,U=(e+.5)/c;for(let t=0;t<e;t++)T=(t+.5)/h,C[B+t]=(x*T+g*U+d)*s-n,b[B+t]=(m*T+y*U+w)*r-n,M[B+t]=Math.round(C[B+t]),v[B+t]=Math.round(b[B+t])}p+=6,x=i[p],g=i[p+1],d=i[p+2],m=i[p+3],y=i[p+4],w=i[p+5];for(let e=0;e<c;e++){B=(_*c+e)*k+t*h,U=(e+.5)/c;for(let t=e;t<h;t++)T=(t+.5)/h,C[B+t]=(x*T+g*U+d)*s-n,b[B+t]=(m*T+y*U+w)*r-n,M[B+t]=Math.round(C[B+t]),v[B+t]=Math.round(b[B+t])}}return{offsets_x:C,offsets_y:b,offsets_xi:M,offsets_yi:v,gridWidth:k}}function G(t,e){const{coefficients:i,spacing:l}=e,{offsets_x:n,offsets_y:s,gridWidth:r}=W(t,t,i,{rows:l[0],cols:l[1]},.5),{width:o,height:a}=t,h=new Float32Array(o*a),c=180/Math.PI;for(let f=0;f<a;f++)for(let t=0;t<o;t++){const e=f*r+t,i=0===f?e:e-r,l=f===a-1?e:e+r,u=n[i]-n[l],p=s[l]-s[i];if(isNaN(u)||isNaN(p))h[f*o+t]=90;else{let e=Math.atan2(p,u)*c;e=(360+e)%360,h[f*o+t]=e}}return h}function I(t,e,i,l){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"nearest";if(!a(t))return null;"majority"===n&&(t=B(t));const{pixels:s,mask:h,pixelType:c}=t,f=t.width,u=t.height,p=o.Z.getPixelArrayConstructor(c),x=s.length,{width:g,height:d}=e;let m=!1;for(let r=0;r<i.length;r+=3)-1===i[r]&&-1===i[r+1]&&-1===i[r+2]&&(m=!0);const{offsets_x:y,offsets_y:w,offsets_xi:k,offsets_yi:A,gridWidth:C}=W({width:f,height:u},e,i,l,"majority"===n?0:.5);let b;const M=(t,e,i)=>{const l=t instanceof Float32Array||t instanceof Float64Array?0:.5;for(let n=0;n<d;n++){b=n*C;for(let s=0;s<g;s++){if(y[b]<0||w[b]<0)t[n*g+s]=0;else if(i)t[n*g+s]=e[k[b]+A[b]*f];else{const i=Math.floor(y[b]),r=Math.floor(w[b]),o=Math.ceil(y[b]),a=Math.ceil(w[b]),c=y[b]-i,u=w[b]-r;if(!h||h[i+r*f]&&h[i+r*f]&&h[i+a*f]&&h[o+a*f]){const h=(1-c)*e[i+r*f]+c*e[o+r*f],p=(1-c)*e[i+a*f]+c*e[o+a*f];t[n*g+s]=(1-u)*h+u*p+l}else t[n*g+s]=e[k[b]+A[b]*f]}b++}}},v=[];let T;for(let r=0;r<x;r++)T=new p(g*d),M(T,s[r],"nearest"===n||"majority"===n),v.push(T);const U=new o.Z({width:g,height:d,pixelType:c,pixels:v});if((0,r.pC)(h))U.mask=new Uint8Array(g*d),M(U.mask,h,!0);else if(m){U.mask=new Uint8Array(g*d);for(let t=0;t<g*d;t++)U.mask[t]=y[t]<0||w[t]<0?0:1}return U.updateStatistics(),U}(s=l||(l={}))[s.matchAny=0]="matchAny",s[s.matchAll=1]="matchAll",function(t){t[t.bestMatch=0]="bestMatch",t[t.fail=1]="fail"}(n||(n={}))}}]);
//# sourceMappingURL=7314.b64fddaf.chunk.js.map