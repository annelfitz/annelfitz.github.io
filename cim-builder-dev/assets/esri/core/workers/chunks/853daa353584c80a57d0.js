self.webpackChunkRemoteClient([11],{491:function(t,e,r){"use strict";
/*!
 * @esri/arcgis-html-sanitizer - v2.4.2 - Fri Sep 04 2020 12:22:25 GMT-0400 (Eastern Daylight Time)
 * Copyright (c) 2020 - Environmental Systems Research Institute, Inc.
 * Apache-2.0
 * 
 * js-xss
 * Copyright (c) 2012-2017 Zongmin Lei(雷宗民) <leizongmin@gmail.com>
 * http://ucdok.com
 * MIT License, see https://github.com/leizongmin/js-xss/blob/master/LICENSE for details
 * 
 * Lodash/isPlainObject
 * Copyright (c) JS Foundation and other contributors <https://js.foundation/>
 * MIT License, see https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/LICENSE for details
 */var i,n,o=Function.prototype,a=Object.prototype,s=o.toString,l=a.hasOwnProperty,c=s.call(Object),u=a.toString,g=(i=Object.getPrototypeOf,n=Object,function(t){return i(n(t))});var f=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=u.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=g(t);if(null===e)return!0;var r=l.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&s.call(r)==c};function p(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}function d(){var t={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return t}var h=/javascript\s*\:/gim;var m={whiteList:d(),getDefaultWhiteList:d,onAttr:function(t,e,r){},onIgnoreAttr:function(t,e,r){},safeAttrValue:function(t,e){return h.test(e)?"":e}},b=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},v=function(t){return String.prototype.trimRight?t.trimRight():t.replace(/(\s*$)/g,"")};var y=function(t,e){";"!==(t=v(t))[t.length-1]&&(t+=";");var r=t.length,i=!1,n=0,o=0,a="";function s(){if(!i){var r=b(t.slice(n,o)),s=r.indexOf(":");if(-1!==s){var l=b(r.slice(0,s)),c=b(r.slice(s+1));if(l){var u=e(n,a.length,l,c,r);u&&(a+=u+"; ")}}}n=o+1}for(;o<r;o++){var l=t[o];if("/"===l&&"*"===t[o+1]){var c=t.indexOf("*/",o+2);if(-1===c)break;n=(o=c+1)+1,i=!1}else"("===l?i=!0:")"===l?i=!1:";"===l?i||s():"\n"===l&&s()}return b(a)};function w(t){return null==t}function x(t){(t=function(t){var e={};for(var r in t)e[r]=t[r];return e}(t||{})).whiteList=t.whiteList||m.whiteList,t.onAttr=t.onAttr||m.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||m.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||m.safeAttrValue,this.options=t}x.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,i=e.onAttr,n=e.onIgnoreAttr,o=e.safeAttrValue;return y(t,(function(t,e,a,s,l){var c=r[a],u=!1;if(!0===c?u=c:"function"==typeof c?u=c(s):c instanceof RegExp&&(u=c.test(s)),!0!==u&&(u=!1),s=o(a,s)){var g,f={position:e,sourcePosition:t,source:l,isWhite:u};return u?w(g=i(a,s,f))?a+":"+s:g:w(g=n(a,s,f))?void 0:g}}))};var k=x,A=p((function(t,e){for(var r in(e=t.exports=function(t,e){return new k(e).process(t)}).FilterCSS=k,m)e[r]=m[r]})),T=function(t,e){var r,i;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,i=t.length;r<i;r++)if(t[r]===e)return r;return-1},S=function(t,e,r){var i,n;if(Array.prototype.forEach)return t.forEach(e,r);for(i=0,n=t.length;i<n;i++)e.call(r,t[i],i,t)},I=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},O=function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1},j=A.FilterCSS,C=A.getDefaultWhiteList;function L(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}var z=new j;function V(t){return t.replace(F,"&lt;").replace(W,"&gt;")}var F=/</g,W=/>/g,E=/"/g,_=/&quot;/g,D=/&#([a-zA-Z0-9]*);?/gim,P=/&colon;?/gim,q=/&newline;?/gim,B=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,H=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,X=/u\s*r\s*l\s*\(.*/gi;function N(t){return t.replace(E,"&quot;")}function R(t){return t.replace(_,'"')}function U(t){return t.replace(D,(function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))}))}function $(t){return t.replace(P,":").replace(q," ")}function G(t){for(var e="",r=0,i=t.length;r<i;r++)e+=t.charCodeAt(r)<32?" ":t.charAt(r);return I(e)}function Q(t){return t=G(t=$(t=U(t=R(t))))}function Z(t){return t=V(t=N(t))}var J=/<!--[\s\S]*?-->/g;var K={whiteList:{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]},getDefaultWhiteList:L,onTag:function(t,e,r){},onIgnoreTag:function(t,e,r){},onTagAttr:function(t,e,r){},onIgnoreTagAttr:function(t,e,r){},safeAttrValue:function(t,e,r,i){if(r=Q(r),"href"===e||"src"===e){if("#"===(r=I(r)))return"#";if("http://"!==r.substr(0,7)&&"https://"!==r.substr(0,8)&&"mailto:"!==r.substr(0,7)&&"tel:"!==r.substr(0,4)&&"data:image/"!==r.substr(0,11)&&"ftp://"!==r.substr(0,6)&&"./"!==r.substr(0,2)&&"../"!==r.substr(0,3)&&"#"!==r[0]&&"/"!==r[0])return""}else if("background"===e){if(B.lastIndex=0,B.test(r))return""}else if("style"===e){if(H.lastIndex=0,H.test(r))return"";if(X.lastIndex=0,X.test(r)&&(B.lastIndex=0,B.test(r)))return"";!1!==i&&(r=(i=i||z).process(r))}return r=Z(r)},escapeHtml:V,escapeQuote:N,unescapeQuote:R,escapeHtmlEntities:U,escapeDangerHtml5Entities:$,clearNonPrintableCharacter:G,friendlyAttrValue:Q,escapeAttrValue:Z,onIgnoreTagStripAll:function(){return""},StripTagBody:function(t,e){"function"!=typeof e&&(e=function(){});var r=!Array.isArray(t),i=[],n=!1;return{onIgnoreTag:function(o,a,s){if(function(e){return!!r||-1!==T(t,e)}(o)){if(s.isClosing){var l="[/removed]",c=s.position+l.length;return i.push([!1!==n?n:s.position,c]),n=!1,l}return n||(n=s.position),"[removed]"}return e(o,a,s)},remove:function(t){var e="",r=0;return S(i,(function(i){e+=t.slice(r,i[0]),r=i[1]})),e+=t.slice(r)}}},stripCommentTag:function(t){return t.replace(J,"")},stripBlankChar:function(t){var e=t.split("");return(e=e.filter((function(t){var e=t.charCodeAt(0);return 127!==e&&(!(e<=31)||(10===e||13===e))}))).join("")},cssFilter:z,getDefaultCSSWhiteList:C};function M(t){var e=O(t);if(-1===e)var r=t.slice(1,-1);else r=t.slice(1,e+1);return"/"===(r=I(r).toLowerCase()).slice(0,1)&&(r=r.slice(1)),"/"===r.slice(-1)&&(r=r.slice(0,-1)),r}function Y(t){return"</"===t.slice(0,2)}var tt=/[^a-zA-Z0-9_:\.\-]/gim;function et(t,e){for(;e<t.length;e++){var r=t[e];if(" "!==r)return"="===r?e:-1}}function rt(t,e){for(;e>0;e--){var r=t[e];if(" "!==r)return"="===r?e:-1}}function it(t){return function(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}(t)?t.substr(1,t.length-2):t}var nt={parseTag:function(t,e,r){var i="",n=0,o=!1,a=!1,s=0,l=t.length,c="",u="";t:for(s=0;s<l;s++){var g=t.charAt(s);if(!1===o){if("<"===g){o=s;continue}}else if(!1===a){if("<"===g){i+=r(t.slice(n,s)),o=s,n=s;continue}if(">"===g){i+=r(t.slice(n,o)),c=M(u=t.slice(o,s+1)),i+=e(o,i.length,c,u,Y(u)),n=s+1,o=!1;continue}if('"'===g||"'"===g)for(var f=1,p=t.charAt(s-f);" "===p||"="===p;){if("="===p){a=g;continue t}p=t.charAt(s-++f)}}else if(g===a){a=!1;continue}}return n<t.length&&(i+=r(t.substr(n))),i},parseAttr:function(t,e){var r=0,i=[],n=!1,o=t.length;function a(t,r){if(!((t=(t=I(t)).replace(tt,"").toLowerCase()).length<1)){var n=e(t,r||"");n&&i.push(n)}}for(var s=0;s<o;s++){var l,c=t.charAt(s);if(!1!==n||"="!==c)if(!1===n||s!==r||'"'!==c&&"'"!==c||"="!==t.charAt(s-1))if(/\s|\n|\t/.test(c)){if(t=t.replace(/\s|\n|\t/g," "),!1===n){if(-1===(l=et(t,s))){a(I(t.slice(r,s))),n=!1,r=s+1;continue}s=l-1;continue}if(-1===(l=rt(t,s-1))){a(n,it(I(t.slice(r,s)))),n=!1,r=s+1;continue}}else;else{if(-1===(l=t.indexOf(c,s+1)))break;a(n,I(t.slice(r+1,l))),n=!1,r=(s=l)+1}else n=t.slice(r,s),r=s+1}return r<t.length&&(!1===n?a(t.slice(r)):a(n,it(I(t.slice(r))))),I(i.join(" "))}},ot=A.FilterCSS,at=nt.parseTag,st=nt.parseAttr;function lt(t){return null==t}function ct(t){(t=function(t){var e={};for(var r in t)e[r]=t[r];return e}(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=K.onIgnoreTagStripAll),t.whiteList=t.whiteList||K.whiteList,t.onTag=t.onTag||K.onTag,t.onTagAttr=t.onTagAttr||K.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||K.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||K.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||K.safeAttrValue,t.escapeHtml=t.escapeHtml||K.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new ot(t.css))}ct.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,i=e.onTag,n=e.onIgnoreTag,o=e.onTagAttr,a=e.onIgnoreTagAttr,s=e.safeAttrValue,l=e.escapeHtml,c=this.cssFilter;e.stripBlankChar&&(t=K.stripBlankChar(t)),e.allowCommentTag||(t=K.stripCommentTag(t));var u=!1;if(e.stripIgnoreTagBody){u=K.StripTagBody(e.stripIgnoreTagBody,n);n=u.onIgnoreTag}var g=at(t,(function(t,e,u,g,f){var p,d={sourcePosition:t,position:e,isClosing:f,isWhite:r.hasOwnProperty(u)};if(!lt(p=i(u,g,d)))return p;if(d.isWhite){if(d.isClosing)return"</"+u+">";var h=function(t){var e=O(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var r="/"===(t=I(t.slice(e+1,-1)))[t.length-1];return r&&(t=I(t.slice(0,-1))),{html:t,closing:r}}(g),m=r[u],b=st(h.html,(function(t,e){var r,i=-1!==T(m,t);return lt(r=o(u,t,e,i))?i?(e=s(u,t,e,c))?t+'="'+e+'"':t:lt(r=a(u,t,e,i))?void 0:r:r}));g="<"+u;return b&&(g+=" "+b),h.closing&&(g+=" /"),g+=">"}return lt(p=n(u,g,d))?l(g):p}),l);return u&&(g=u.remove(g)),g};var ut=ct,gt=p((function(t,e){function r(t,e){return new ut(e).process(t)}for(var i in(e=t.exports=r).filterXSS=r,e.FilterXSS=ut,K)e[i]=K[i];for(var i in nt)e[i]=nt[i];"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=t.exports)})),ft=function(){function t(t,e){var r,i=this;this.arcgisWhiteList={a:["href","target","style"],img:["src","width","height","border","alt","style"],video:["autoplay","controls","height","loop","muted","poster","preload","width"],audio:["autoplay","controls","loop","muted","preload"],source:["media","src","type"],span:["style"],table:["width","height","cellpadding","cellspacing","border","style"],div:["style","align"],font:["size","color","style"],tr:["height","valign","align","style"],td:["height","width","valign","align","colspan","rowspan","nowrap","style"],th:["height","width","valign","align","colspan","rowspan","nowrap","style"],p:["style"],b:[],strong:[],i:[],em:[],u:[],br:[],li:[],ul:[],ol:[],hr:[],tbody:[]},this.allowedProtocols=["http","https","mailto","iform","tel","flow","lfmobile","arcgis-navigator","arcgis-appstudio-player","arcgis-survey123","arcgis-collector","arcgis-workforce","arcgis-explorer","arcgis-trek2there","mspbi","comgooglemaps","pdfefile","pdfehttp","pdfehttps","boxapp","boxemm","awb","awbs","gropen","radarscope"],this.arcgisFilterOptions={allowCommentTag:!0,safeAttrValue:function(t,e,r,n){return"a"===t&&"href"===e||("img"===t||"source"===t)&&"src"===e?i.sanitizeUrl(r):gt.safeAttrValue(t,e,r,n)}},t&&!e?r=t:t&&e?(r=Object.create(this.arcgisFilterOptions),Object.keys(t).forEach((function(e){"whiteList"===e?r.whiteList=i._extendObjectOfArrays([i.arcgisWhiteList,t.whiteList||{}]):r[e]=t[e]}))):(r=Object.create(this.arcgisFilterOptions)).whiteList=this.arcgisWhiteList,this.xssFilterOptions=r,this._xssFilter=new gt.FilterXSS(r)}return t.prototype.sanitize=function(t,e){switch(void 0===e&&(e={}),typeof t){case"number":return isNaN(t)||!isFinite(t)?null:t;case"boolean":return t;case"string":return this._xssFilter.process(t);case"object":return this._iterateOverObject(t,e);default:if(e.allowUndefined&&void 0===t)return;return null}},t.prototype.sanitizeUrl=function(t){var e=this._trim(t.substring(0,t.indexOf(":")));return"/"===t||"#"===t||"#"===t[0]||this.allowedProtocols.indexOf(e.toLowerCase())>-1?gt.escapeAttrValue(t):""},t.prototype.validate=function(t,e){void 0===e&&(e={});var r=this.sanitize(t,e);return{isValid:t===r,sanitized:r}},t.prototype._extendObjectOfArrays=function(t){var e={};return t.forEach((function(t){Object.keys(t).forEach((function(r){Array.isArray(t[r])&&Array.isArray(e[r])?e[r]=e[r].concat(t[r]):e[r]=t[r]}))})),e},t.prototype._iterateOverObject=function(t,e){var r=this;void 0===e&&(e={});try{var i=!1,n=void 0;if(Array.isArray(t))n=t.reduce((function(t,n){var o=r.validate(n,e);return o.isValid?t.concat([n]):(i=!0,t.concat([o.sanitized]))}),[]);else{if(!f(t)){if(e.allowUndefined&&void 0===t)return;return null}n=Object.keys(t).reduce((function(n,o){var a=t[o],s=r.validate(a,e);return s.isValid?n[o]=a:(i=!0,n[o]=s.sanitized),n}),{})}return i?n:t}catch(t){return null}},t.prototype._trim=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},t}();e.a=ft}});