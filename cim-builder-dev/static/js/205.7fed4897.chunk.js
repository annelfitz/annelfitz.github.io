(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[205],{436:function(e,t,a){"use strict";a.r(t),a.d(t,"execute",(function(){return i}));var s=a(9),r=a(27),n=a(3);let o;function i(e,t={}){let a=t.responseType;a?"array-buffer"!==a&&"blob"!==a&&"json"!==a&&"native"!==a&&"native-request-init"!==a&&"text"!==a&&(a="text"):a="json";const i=Object(n.p)(t.signal);return delete t.signal,r.a.invokeStaticMessage("request",{url:e,options:t},{signal:i}).then(async r=>{let n,u,l,c,p;if(r.data)if(r.data instanceof ArrayBuffer){if(!("json"!==a&&"text"!==a&&"blob"!==a||(n=new Blob([r.data]),"json"!==a&&"text"!==a||(o||(o=new FileReaderSync),c=o.readAsText(n),"json"!==a)))){try{u=JSON.parse(c||null)}catch(b){const a={...b,url:e,requestOptions:t};throw new s.a("request:server",b.message,a)}if(u.error){const a={...u.error,url:e,requestOptions:t};throw new s.a("request:server",u.error.message,a)}}}else"native"===a&&(r.data.signal=i,l=await fetch(r.data.url,r.data));switch(a){case"blob":p=n;break;case"json":p=u;break;case"native":p=l;break;case"text":p=c;break;default:p=r.data}return{data:p,requestOptions:t,ssl:r.ssl,url:e}})}}}]);
//# sourceMappingURL=205.7fed4897.chunk.js.map