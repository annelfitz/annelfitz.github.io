(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[168],{852:function(e,t,a){"use strict";a.r(t),a.d(t,"previewSymbol2D",(function(){return d}));var l=a(23),n=a(9),s=a(18),c=a(354),o=a(761),i=a(793);const u="picture-fill",r=120,m=document.createElement("canvas");function p(e,t){const a=m.getContext("2d"),l=[];return t&&(t.weight&&l.push(t.weight),t.size&&l.push(t.size+"px"),t.family&&l.push(t.family)),a.font=l.join(" "),a.measureText(e).width}function h(e){if(0===e.length)return 0;if(e.length>2){const t=Object(s.d)(1),a=parseFloat(e);switch(e.slice(-2)){case"px":return a;case"pt":return a*t;case"in":return 72*a*t;case"pc":return 12*a*t;case"mm":return a*(7.2/2.54)*t;case"cm":return a*(72/2.54)*t}}return parseFloat(e)}function d(e,t){var a,m;const d=null!=(null==t?void 0:t.size)?Object(s.c)(t.size):null,f=null!=(null==t?void 0:t.maxSize)?Object(s.c)(t.maxSize):null,y=null!=(null==t?void 0:t.opacity)?t.opacity:null,v=null!=(null==t?void 0:t.rotation)?t.rotation:"angle"in e?e.angle:null,b=Object(c.b)(e);let w=Object(c.d)(e);if(b&&!w){const e="type"in b?null:new l.a(b);"#ffffff"===(e?e.toHex():null)&&(w={color:"#bdc3c7",width:.75})}const g={shape:null,fill:null,stroke:w,offset:[0,0]};null!=(a=w)&&a.width&&(w.width=Math.min(w.width,80));const M=(null==(m=w)?void 0:m.width)||0;let k=null!=d&&(null==(null==t?void 0:t.scale)||(null==t?void 0:t.scale)),j=0,x=0,L=!1;switch(e.type){case"simple-marker":{const t=e.style,a=Math.min(null!=d?d:Object(s.c)(e.size),f||r);switch(j=a,x=a,t){case"circle":g.shape={type:"circle",cx:0,cy:0,r:.5*a},k||(j+=M,x+=M);break;case"cross":g.shape={type:"path",path:[{command:"M",values:[0,.5*x]},{command:"L",values:[j,.5*x]},{command:"M",values:[.5*j,0]},{command:"L",values:[.5*j,x]}]};break;case"diamond":g.shape={type:"path",path:[{command:"M",values:[0,.5*x]},{command:"L",values:[.5*j,0]},{command:"L",values:[j,.5*x]},{command:"L",values:[.5*j,x]},{command:"Z",values:[]}]},k||(j+=M,x+=M);break;case"square":g.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[j,0]},{command:"L",values:[j,x]},{command:"L",values:[0,x]},{command:"Z",values:[]}]},k||(j+=M,x+=M),v&&(L=!0);break;case"triangle":g.shape={type:"path",path:[{command:"M",values:[.5*j,0]},{command:"L",values:[j,x]},{command:"L",values:[0,x]},{command:"Z",values:[]}]},k||(j+=M,x+=M),v&&(L=!0);break;case"x":g.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[j,x]},{command:"M",values:[j,0]},{command:"L",values:[0,x]}]},v&&(L=!0);break;case"path":g.shape={type:"path",path:e.path||""},k||(j+=M,x+=M),v&&(L=!0),k=!0}break}case"simple-line":{const e=Math.min(null!=d?d:M,f||80),t=e>22?2*e:40;w.width=e,j=t,x=e,g.shape={type:"path",path:[{command:"M",values:[0,x]},{command:"L",values:[j,x]}]};break}case u:case"simple-fill":j=Math.min(null!=d?d:22,f||r)+M,x=j,k=!0,g.shape="object"==typeof(null==t?void 0:t.symbolConfig)&&null!=t&&t.symbolConfig.isSquareFill?o.l.squareFill[0]:o.l.fill[0];break;case"picture-marker":{let t=Object(s.c)(e.width),a=Object(s.c)(e.height);const l=Math.max(t,a),n=t/a;t=n<=1?Math.ceil(l*n):l,a=n<=1?l:Math.ceil(l/n),j=Math.min(null!=d?d:t,f||r),x=Math.min(null!=d?d:a,f||r),g.shape={type:"image",x:-Math.round(j/2),y:-Math.round(x/2),width:j,height:x,src:e.url||""},v&&(L=!0);break}case"text":{const t=e,a=t.text||"Aa",l=t.font,n=Math.min(null!=d?d:Object(s.c)(l.size),f||r),c=p(a,{weight:l.weight,size:n,family:l.family}),o=/[\uE600-\uE6FF]/.test(a);j=o?n:c,x=n;let i=.25*h((l?n:0).toString());o&&(i+=5),g.shape={type:"text",text:a,x:0,y:i,align:"middle",decoration:l&&l.decoration,rotated:t.rotated,kerning:t.kerning},g.font=l&&{size:n,style:l.style,decoration:l.decoration,weight:l.weight,family:l.family};break}}if(!g.shape)return Promise.reject(new n.a("symbolPreview: renderPreviewHTML2D","symbol not supported."));const O=b,z=e.color;let C=null;return O&&"pattern"===O.type&&z&&e.type!==u?C=Object(c.c)(O.src,z.toCss(!0)).then(e=>(O.src=e,g.fill=O,g)):(g.fill=b,C=Promise.resolve(g)),C.then(e=>{const a=[[e]];if("object"==typeof(null==t?void 0:t.symbolConfig)&&null!=t&&t.symbolConfig.applyColorModulation){const t=.6*j;a.unshift([{...e,offset:[-t,0],fill:Object(o.a)(b,-.3)}]),a.push([{...e,offset:[t,0],fill:Object(o.a)(b,.3)}]),j+=2*t}return Object(i.a)(a,[j,x],{node:t&&t.node,scale:k,opacity:y,rotation:v,useRotationSize:L})})}}}]);
//# sourceMappingURL=168.eff1a4ce.chunk.js.map