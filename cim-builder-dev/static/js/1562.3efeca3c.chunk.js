"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[1562],{61562:(t,e,r)=>{r.r(e),r.d(e,{b:()=>s});var n=r(84397);var i,o,a,u={};i={get exports(){return u},set exports(t){u=t}},o="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(o=o||__filename),a=function(t){var e,r,i=void 0!==(t=t||{})?t:{};i.ready=new Promise((function(t,n){e=t,r=n}));var a,u={};for(a in i)i.hasOwnProperty(a)&&(u[a]=i[a]);var s,l,c,f;s="object"==typeof window,l="function"==typeof importScripts,c="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,f=!s&&!c&&!l;var p,d,y,h,v="";c?(v=l?require("path").dirname(v)+"/":__dirname+"/",p=function(t,e){return y||(y=require("fs")),h||(h=require("path")),t=h.normalize(t),y.readFileSync(t,e?null:"utf8")},d=function(t){var e=p(t,!0);return e.buffer||(e=new Uint8Array(e)),T(e.buffer),e},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof Me))throw t})),process.on("unhandledRejection",et),i.inspect=function(){return"[Emscripten Module object]"}):f?("undefined"!=typeof read&&(p=function(t){return read(t)}),d=function(t){var e;return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):(T("object"==typeof(e=read(t,"binary"))),e)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(s||l)&&(l?v=self.location.href:document.currentScript&&(v=document.currentScript.src),o&&(v=o),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",p=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},l&&(d=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var m,g,b=i.print||console.log.bind(console),$=i.printErr||console.warn.bind(console);for(a in u)u.hasOwnProperty(a)&&(i[a]=u[a]);u=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(m=i.wasmBinary),i.noExitRuntime&&i.noExitRuntime,"object"!=typeof WebAssembly&&et("no native wasm support detected");var C=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),w=!1;function T(t,e){t||et("Assertion failed: "+e)}var _="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function P(t,e,r){for(var n=e+r,i=e;t[i]&&!(i>=n);)++i;if(i-e>16&&t.subarray&&_)return _.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var u=63&t[e++];if(192!=(224&a)){var s=63&t[e++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var l=a-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function A(t,e){return t?P(D,t,e):""}var W="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function E(t,e){for(var r=t,n=r>>1,i=n+e/2;!(n>=i)&&U[n];)++n;if((r=n<<1)-t>32&&W)return W.decode(D.subarray(t,r));for(var o=0,a="";;){var u=I[t+2*o>>1];if(0==u||o==e/2)return a;++o,a+=String.fromCharCode(u)}}function S(t,e,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var n=e,i=(r-=2)<2*t.length?r/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);I[e>>1]=a,e+=2}return I[e>>1]=0,e-n}function k(t){return 2*t.length}function O(t,e){for(var r=0,n="";!(r>=e/4);){var i=M[t+4*r>>2];if(0==i)break;if(++r,i>=65536){var o=i-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(i)}return n}function j(t,e,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var n=e,i=n+r-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),M[e>>2]=a,(e+=4)+4>i)break}return M[e>>2]=0,e-n}function F(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&++r,e+=4}return e}var R,x,D,I,U,M,V,H,z;function q(t,e){return t%e>0&&(t+=e-t%e),t}function B(t){R=t,i.HEAP8=x=new Int8Array(t),i.HEAP16=I=new Int16Array(t),i.HEAP32=M=new Int32Array(t),i.HEAPU8=D=new Uint8Array(t),i.HEAPU16=U=new Uint16Array(t),i.HEAPU32=V=new Uint32Array(t),i.HEAPF32=H=new Float32Array(t),i.HEAPF64=z=new Float64Array(t)}var N=i.INITIAL_MEMORY||16777216;function G(t){for(;t.length>0;){var e=t.shift();if("function"!=typeof e){var r=e.func;"number"==typeof r?void 0===e.arg?i.dynCall_v(r):i.dynCall_vi(r,e.arg):r(void 0===e.arg?null:e.arg)}else e(i)}}(g=i.wasmMemory?i.wasmMemory:new WebAssembly.Memory({initial:N/65536,maximum:32768}))&&(R=g.buffer),N=R.byteLength,B(R),M[80624]=5565536;var L=[],X=[],J=[],Y=[];var Z=Math.ceil,K=Math.floor,Q=0,tt=null;function et(t){i.onAbort&&i.onAbort(t),$(t+=""),w=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(t);throw r(e),e}function rt(t,e){return String.prototype.startsWith?t.startsWith(e):0===t.indexOf(e)}i.preloadedImages={},i.preloadedAudios={};function nt(t){return rt(t,"data:application/octet-stream;base64,")}function it(t){return rt(t,"file://")}var ot,at="basis_transcoder.wasm";function ut(){try{if(m)return new Uint8Array(m);if(d)return d(at);throw"both async and sync fetching of the wasm failed"}catch($){et($)}}nt(at)||(ot=at,at=i.locateFile?i.locateFile(ot,v):v+ot),X.push({func:function(){xe()}});var st={};function lt(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function ct(t){return this.fromWireType(V[t>>2])}var ft={},pt={},dt={};function yt(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=48&&e<=57?"_"+t:t}function ht(t,e){return t=yt(t),function(){return e.apply(this,arguments)}}function vt(t,e){var r=ht(e,(function(t){this.name=e,this.message=t;var r=new Error(t).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var mt=void 0;function gt(t){throw new mt(t)}function bt(t,e,r){function n(e){var n=r(e);n.length!==t.length&&gt("Mismatched type converter count");for(var i=0;i<t.length;++i)Pt(t[i],n[i])}t.forEach((function(t){dt[t]=e}));var i=new Array(e.length),o=[],a=0;e.forEach((function(t,e){pt.hasOwnProperty(t)?i[e]=pt[t]:(o.push(t),ft.hasOwnProperty(t)||(ft[t]=[]),ft[t].push((function(){i[e]=pt[t],++a===o.length&&n(i)})))})),0===o.length&&n(i)}function $t(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var Ct=void 0;function wt(t){for(var e="",r=t;D[r];)e+=Ct[D[r++]];return e}var Tt=void 0;function _t(t){throw new Tt(t)}function Pt(t,e,r){if(r=r||{},!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=e.name;if(t||_t('type "'+n+'" must have a positive integer typeid pointer'),pt.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;_t("Cannot register type '"+n+"' twice")}if(pt[t]=e,delete dt[t],ft.hasOwnProperty(t)){var i=ft[t];delete ft[t],i.forEach((function(t){t()}))}}function At(t){if(!(this instanceof Vt))return!1;if(!(t instanceof Vt))return!1;for(var e=this.$$.ptrType.registeredClass,r=this.$$.ptr,n=t.$$.ptrType.registeredClass,i=t.$$.ptr;e.baseClass;)r=e.upcast(r),e=e.baseClass;for(;n.baseClass;)i=n.upcast(i),n=n.baseClass;return e===n&&r===i}function Wt(t){return{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType}}function Et(t){_t(function(t){return t.$$.ptrType.registeredClass.name}(t)+" instance already deleted")}var St=!1;function kt(t){}function Ot(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function jt(t){return"undefined"==typeof FinalizationGroup?(jt=function(t){return t},t):(St=new FinalizationGroup((function(t){for(var e=t.next();!e.done;e=t.next()){var r=e.value;r.ptr?Ot(r):console.warn("object already deleted: "+r.ptr)}})),jt=function(t){return St.register(t,t.$$,t.$$),t},kt=function(t){St.unregister(t.$$)},jt(t))}function Ft(){if(this.$$.ptr||Et(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t=jt(Object.create(Object.getPrototypeOf(this),{$$:{value:Wt(this.$$)}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t}function Rt(){this.$$.ptr||Et(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&_t("Object already scheduled for deletion"),kt(this),Ot(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function xt(){return!this.$$.ptr}var Dt=void 0,It=[];function Ut(){for(;It.length;){var t=It.pop();t.$$.deleteScheduled=!1,t.delete()}}function Mt(){return this.$$.ptr||Et(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&_t("Object already scheduled for deletion"),It.push(this),1===It.length&&Dt&&Dt(Ut),this.$$.deleteScheduled=!0,this}function Vt(){}var Ht={};function zt(t,e,r){if(void 0===t[e].overloadTable){var n=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||_t("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[n.argCount]=n}}function qt(t,e,r){i.hasOwnProperty(t)?((void 0===r||void 0!==i[t].overloadTable&&void 0!==i[t].overloadTable[r])&&_t("Cannot register public name '"+t+"' twice"),zt(i,t,t),i.hasOwnProperty(r)&&_t("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),i[t].overloadTable[r]=e):(i[t]=e,void 0!==r&&(i[t].numArguments=r))}function Bt(t,e,r,n,i,o,a,u){this.name=t,this.constructor=e,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function Nt(t,e,r){for(;e!==r;)e.upcast||_t("Expected null or instance of "+r.name+", got an instance of "+e.name),t=e.upcast(t),e=e.baseClass;return t}function Gt(t,e){if(null===e)return this.isReference&&_t("null is not a valid "+this.name),0;e.$$||_t('Cannot pass "'+we(e)+'" as a '+this.name),e.$$.ptr||_t("Cannot pass deleted object as a pointer of type "+this.name);var r=e.$$.ptrType.registeredClass;return Nt(e.$$.ptr,r,this.registeredClass)}function Lt(t,e){var r;if(null===e)return this.isReference&&_t("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,r),r):0;e.$$||_t('Cannot pass "'+we(e)+'" as a '+this.name),e.$$.ptr||_t("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&e.$$.ptrType.isConst&&_t("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);var n=e.$$.ptrType.registeredClass;if(r=Nt(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&_t("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?r=e.$$.smartPtr:_t("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)r=e.$$.smartPtr;else{var i=e.clone();r=this.rawShare(r,be((function(){i.delete()}))),null!==t&&t.push(this.rawDestructor,r)}break;default:_t("Unsupporting sharing policy")}return r}function Xt(t,e){if(null===e)return this.isReference&&_t("null is not a valid "+this.name),0;e.$$||_t('Cannot pass "'+we(e)+'" as a '+this.name),e.$$.ptr||_t("Cannot pass deleted object as a pointer of type "+this.name),e.$$.ptrType.isConst&&_t("Cannot convert argument of type "+e.$$.ptrType.name+" to parameter type "+this.name);var r=e.$$.ptrType.registeredClass;return Nt(e.$$.ptr,r,this.registeredClass)}function Jt(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t}function Yt(t){this.rawDestructor&&this.rawDestructor(t)}function Zt(t){null!==t&&t.delete()}function Kt(t,e,r){if(e===r)return t;if(void 0===r.baseClass)return null;var n=Kt(t,e,r.baseClass);return null===n?null:r.downcast(n)}function Qt(){return Object.keys(re).length}function te(){var t=[];for(var e in re)re.hasOwnProperty(e)&&t.push(re[e]);return t}function ee(t){Dt=t,It.length&&Dt&&Dt(Ut)}var re={};function ne(t,e){return e=function(t,e){for(void 0===e&&_t("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}(t,e),re[e]}function ie(t,e){return e.ptrType&&e.ptr||gt("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&gt("Both smartPtrType and smartPtr must be specified"),e.count={value:1},jt(Object.create(t,{$$:{value:e}}))}function oe(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var r=ne(this.registeredClass,e);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=e,r.$$.smartPtr=t,r.clone();var n=r.clone();return this.destructor(t),n}function i(){return this.isSmartPointer?ie(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):ie(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,a=this.registeredClass.getActualType(e),u=Ht[a];if(!u)return i.call(this);o=this.isConst?u.constPointerType:u.pointerType;var s=Kt(e,this.registeredClass,o.registeredClass);return null===s?i.call(this):this.isSmartPointer?ie(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:t}):ie(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})}function ae(t,e,r,n,i,o,a,u,s,l,c){this.name=t,this.registeredClass=e,this.isReference=r,this.isConst=n,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=l,this.rawDestructor=c,i||void 0!==e.baseClass?this.toWireType=Lt:n?(this.toWireType=Gt,this.destructorFunction=null):(this.toWireType=Xt,this.destructorFunction=null)}function ue(t,e,r){i.hasOwnProperty(t)||gt("Replacing nonexistant public symbol"),void 0!==i[t].overloadTable&&void 0!==r?i[t].overloadTable[r]=e:(i[t]=e,i[t].argCount=r)}function se(t,e){t=wt(t);var r=function(t){var r=[e];return function(){r.length=arguments.length+1;for(var e=0;e<arguments.length;e++)r[e+1]=arguments[e];return t.apply(null,r)}}(i["dynCall_"+t]);return"function"!=typeof r&&_t("unknown function pointer with signature "+t+": "+e),r}var le=void 0;function ce(t){var e=Ue(t),r=wt(e);return Ie(e),r}function fe(t,e){var r=[],n={};throw e.forEach((function t(e){n[e]||pt[e]||(dt[e]?dt[e].forEach(t):(r.push(e),n[e]=!0))})),new le(t+": "+r.map(ce).join([", "]))}function pe(t,e){for(var r=[],n=0;n<t;n++)r.push(M[(e>>2)+n]);return r}function de(t,e,r,n,i){var o=e.length;o<2&&_t("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==r,u=!1,s=1;s<e.length;++s)if(null!==e[s]&&void 0===e[s].destructorFunction){u=!0;break}var l="void"!==e[0].name,c=o-2,f=new Array(c),p=[],d=[];return function(){var r;arguments.length!==c&&_t("function "+t+" called with "+arguments.length+" arguments, expected "+c+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(r=e[1].toWireType(d,this),p[1]=r);for(var o=0;o<c;++o)f[o]=e[o+2].toWireType(d,arguments[o]),p.push(f[o]);var s=n.apply(null,p);if(u)lt(d);else for(o=a?1:2;o<e.length;o++){var y=1===o?r:f[o-2];null!==e[o].destructorFunction&&e[o].destructorFunction(y)}if(l)return e[0].fromWireType(s)}}var ye=[],he=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function ve(t){t>4&&0==--he[t].refcount&&(he[t]=void 0,ye.push(t))}function me(){for(var t=0,e=5;e<he.length;++e)void 0!==he[e]&&++t;return t}function ge(){for(var t=5;t<he.length;++t)if(void 0!==he[t])return he[t];return null}function be(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var e=ye.length?ye.pop():he.length;return he[e]={refcount:1,value:t},e}}function $e(t,e,r){switch(e){case 0:return function(t){var e=r?x:D;return this.fromWireType(e[t])};case 1:return function(t){var e=r?I:U;return this.fromWireType(e[t>>1])};case 2:return function(t){var e=r?M:V;return this.fromWireType(e[t>>2])};default:throw new TypeError("Unknown integer type: "+t)}}function Ce(t,e){var r=pt[t];return void 0===r&&_t(e+" has unknown type "+ce(t)),r}function we(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function Te(t,e){switch(e){case 2:return function(t){return this.fromWireType(H[t>>2])};case 3:return function(t){return this.fromWireType(z[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function _e(t,e,r){switch(e){case 0:return r?function(t){return x[t]}:function(t){return D[t]};case 1:return r?function(t){return I[t>>1]}:function(t){return U[t>>1]};case 2:return r?function(t){return M[t>>2]}:function(t){return V[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function Pe(t){return t||_t("Cannot use deleted val. handle = "+t),he[t].value}var Ae={};function We(t){var e=Ae[t];return void 0===e?wt(t):e}var Ee=[];function Se(){if("object"==typeof globalThis)return globalThis;function t(t){t.$$$embind_global$$$=t;var e="object"==typeof $$$embind_global$$$&&t.$$$embind_global$$$===t;return e||delete t.$$$embind_global$$$,e}if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof n.c&&t(n.c)?$$$embind_global$$$=n.c:"object"==typeof self&&t(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}var ke={};function Oe(e){try{return g.grow(e-R.byteLength+65535>>>16),B(g.buffer),1}catch(t){}}var je={mappings:{},buffers:[null,[],[]],printChar:function(t,e){var r=je.buffers[t];0===e||10===e?((1===t?b:$)(P(r,0)),r.length=0):r.push(e)},varargs:void 0,get:function(){return je.varargs+=4,M[je.varargs-4>>2]},getStr:function(t){return A(t)},get64:function(t,e){return t}};mt=i.InternalError=vt(Error,"InternalError"),function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);Ct=t}(),Tt=i.BindingError=vt(Error,"BindingError"),Vt.prototype.isAliasOf=At,Vt.prototype.clone=Ft,Vt.prototype.delete=Rt,Vt.prototype.isDeleted=xt,Vt.prototype.deleteLater=Mt,ae.prototype.getPointee=Jt,ae.prototype.destructor=Yt,ae.prototype.argPackAdvance=8,ae.prototype.readValueFromPointer=ct,ae.prototype.deleteObject=Zt,ae.prototype.fromWireType=oe,i.getInheritedInstanceCount=Qt,i.getLiveInheritedInstances=te,i.flushPendingDeletes=Ut,i.setDelayFunction=ee,le=i.UnboundTypeError=vt(Error,"UnboundTypeError"),i.count_emval_handles=me,i.get_first_emval=ge;var Fe={u:function(t){var e=st[t];delete st[t];var r=e.rawConstructor,n=e.rawDestructor,i=e.fields;bt([t],i.map((function(t){return t.getterReturnType})).concat(i.map((function(t){return t.setterArgumentType}))),(function(t){var o={};return i.forEach((function(e,r){var n=e.fieldName,a=t[r],u=e.getter,s=e.getterContext,l=t[r+i.length],c=e.setter,f=e.setterContext;o[n]={read:function(t){return a.fromWireType(u(s,t))},write:function(t,e){var r=[];c(f,t,l.toWireType(r,e)),lt(r)}}})),[{name:e.name,fromWireType:function(t){var e={};for(var r in o)e[r]=o[r].read(t);return n(t),e},toWireType:function(t,e){for(var i in o)if(!(i in e))throw new TypeError('Missing field:  "'+i+'"');var a=r();for(i in o)o[i].write(a,e[i]);return null!==t&&t.push(n,a),a},argPackAdvance:8,readValueFromPointer:ct,destructorFunction:n}]}))},J:function(t,e,r,n,i){var o=$t(r);Pt(t,{name:e=wt(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?n:i},argPackAdvance:8,readValueFromPointer:function(t){var n;if(1===r)n=x;else if(2===r)n=I;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+e);n=M}return this.fromWireType(n[t>>o])},destructorFunction:null})},y:function(t,e,r,n,i,o,a,u,s,l,c,f,p){c=wt(c),o=se(i,o),u&&(u=se(a,u)),l&&(l=se(s,l)),p=se(f,p);var d=yt(c);qt(d,(function(){fe("Cannot construct "+c+" due to unbound types",[n])})),bt([t,e,r],n?[n]:[],(function(e){var r,i;e=e[0],i=n?(r=e.registeredClass).instancePrototype:Vt.prototype;var a=ht(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new Tt("Use 'new' to construct "+c);if(void 0===f.constructor_body)throw new Tt(c+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new Tt("Tried to invoke ctor of "+c+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),s=Object.create(i,{constructor:{value:a}});a.prototype=s;var f=new Bt(c,a,s,p,r,o,u,l),y=new ae(c,f,!0,!1,!1),h=new ae(c+"*",f,!1,!1,!1),v=new ae(c+" const*",f,!1,!0,!1);return Ht[t]={pointerType:h,constPointerType:v},ue(d,a),[y,h,v]}))},x:function(t,e,r,n,i,o){T(e>0);var a=pe(e,r);i=se(n,i);var u=[o],s=[];bt([],[t],(function(t){var r="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[e-1])throw new Tt("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[e-1]=function(){fe("Cannot construct "+t.name+" due to unbound types",a)},bt([],a,(function(n){return t.registeredClass.constructor_body[e-1]=function(){arguments.length!==e-1&&_t(r+" called with "+arguments.length+" arguments, expected "+(e-1)),s.length=0,u.length=e;for(var t=1;t<e;++t)u[t]=n[t].toWireType(s,arguments[t-1]);var o=i.apply(null,u);return lt(s),n[0].fromWireType(o)},[]})),[]}))},d:function(t,e,r,n,i,o,a,u){var s=pe(r,n);e=wt(e),o=se(i,o),bt([],[t],(function(t){var n=(t=t[0]).name+"."+e;function i(){fe("Cannot call "+n+" due to unbound types",s)}u&&t.registeredClass.pureVirtualFunctions.push(e);var l=t.registeredClass.instancePrototype,c=l[e];return void 0===c||void 0===c.overloadTable&&c.className!==t.name&&c.argCount===r-2?(i.argCount=r-2,i.className=t.name,l[e]=i):(zt(l,e,n),l[e].overloadTable[r-2]=i),bt([],s,(function(i){var u=de(n,i,t,o,a);return void 0===l[e].overloadTable?(u.argCount=r-2,l[e]=u):l[e].overloadTable[r-2]=u,[]})),[]}))},k:function(t,e,r){t=wt(t),bt([],[e],(function(e){return e=e[0],i[t]=e.fromWireType(r),[]}))},I:function(t,e){Pt(t,{name:e=wt(e),fromWireType:function(t){var e=he[t].value;return ve(t),e},toWireType:function(t,e){return be(e)},argPackAdvance:8,readValueFromPointer:ct,destructorFunction:null})},n:function(t,e,r,n){var i=$t(r);function o(){}e=wt(e),o.values={},Pt(t,{name:e,constructor:o,fromWireType:function(t){return this.constructor.values[t]},toWireType:function(t,e){return e.value},argPackAdvance:8,readValueFromPointer:$e(e,i,n),destructorFunction:null}),qt(e,o)},a:function(t,e,r){var n=Ce(t,"enum");e=wt(e);var i=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:r},constructor:{value:ht(n.name+"_"+e,(function(){}))}});i.values[r]=o,i[e]=o},B:function(t,e,r){var n=$t(r);Pt(t,{name:e=wt(e),fromWireType:function(t){return t},toWireType:function(t,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+we(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:Te(e,n),destructorFunction:null})},i:function(t,e,r,n,i,o){var a=pe(e,r);t=wt(t),i=se(n,i),qt(t,(function(){fe("Cannot call "+t+" due to unbound types",a)}),e-1),bt([],a,(function(r){var n=[r[0],null].concat(r.slice(1));return ue(t,de(t,n,null,i,o),e-1),[]}))},j:function(t,e,r,n,i){e=wt(e),-1===i&&(i=4294967295);var o=$t(r),a=function(t){return t};if(0===n){var u=32-8*r;a=function(t){return t<<u>>>u}}var s=-1!=e.indexOf("unsigned");Pt(t,{name:e,fromWireType:a,toWireType:function(t,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+we(r)+'" to '+this.name);if(r<n||r>i)throw new TypeError('Passing a number "'+we(r)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+n+", "+i+"]!");return s?r>>>0:0|r},argPackAdvance:8,readValueFromPointer:_e(e,o,0!==n),destructorFunction:null})},h:function(t,e,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function i(t){var e=V,r=e[t>>=2],i=e[t+1];return new n(R,i,r)}Pt(t,{name:r=wt(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},C:function(t,e){var r="std::string"===(e=wt(e));Pt(t,{name:e,fromWireType:function(t){var e,n=V[t>>2];if(r)for(var i=t+4,o=0;o<=n;++o){var a=t+4+o;if(o==n||0==D[a]){var u=A(i,a-i);void 0===e?e=u:(e+=String.fromCharCode(0),e+=u),i=a+1}}else{var s=new Array(n);for(o=0;o<n;++o)s[o]=String.fromCharCode(D[t+4+o]);e=s.join("")}return Ie(t),e},toWireType:function(t,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var n="string"==typeof e;n||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||_t("Cannot pass non-string to std::string");var i=(r&&n?function(){return function(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&t.charCodeAt(++r)),n<=127?++e:e+=n<=2047?2:n<=65535?3:4}return e}(e)}:function(){return e.length})(),o=De(4+i+1);if(V[o>>2]=i,r&&n)!function(t,e,r){(function(t,e,r,n){if(!(n>0))return 0;for(var i=r,o=r+n-1,a=0;a<t.length;++a){var u=t.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&t.charCodeAt(++a)),u<=127){if(r>=o)break;e[r++]=u}else if(u<=2047){if(r+1>=o)break;e[r++]=192|u>>6,e[r++]=128|63&u}else if(u<=65535){if(r+2>=o)break;e[r++]=224|u>>12,e[r++]=128|u>>6&63,e[r++]=128|63&u}else{if(r+3>=o)break;e[r++]=240|u>>18,e[r++]=128|u>>12&63,e[r++]=128|u>>6&63,e[r++]=128|63&u}}e[r]=0})(t,D,e,r)}(e,o+4,i+1);else if(n)for(var a=0;a<i;++a){var u=e.charCodeAt(a);u>255&&(Ie(o),_t("String has UTF-16 code units that do not fit in 8 bits")),D[o+4+a]=u}else for(a=0;a<i;++a)D[o+4+a]=e[a];return null!==t&&t.push(Ie,o),o},argPackAdvance:8,readValueFromPointer:ct,destructorFunction:function(t){Ie(t)}})},w:function(t,e,r){var n,i,o,a,u;r=wt(r),2===e?(n=E,i=S,a=k,o=function(){return U},u=1):4===e&&(n=O,i=j,a=F,o=function(){return V},u=2),Pt(t,{name:r,fromWireType:function(t){for(var r,i=V[t>>2],a=o(),s=t+4,l=0;l<=i;++l){var c=t+4+l*e;if(l==i||0==a[c>>u]){var f=n(s,c-s);void 0===r?r=f:(r+=String.fromCharCode(0),r+=f),s=c+e}}return Ie(t),r},toWireType:function(t,n){"string"!=typeof n&&_t("Cannot pass non-string to C++ string type "+r);var o=a(n),s=De(4+o+e);return V[s>>2]=o>>u,i(n,s+4,o+e),null!==t&&t.push(Ie,s),s},argPackAdvance:8,readValueFromPointer:ct,destructorFunction:function(t){Ie(t)}})},v:function(t,e,r,n,i,o){st[t]={name:wt(e),rawConstructor:se(r,n),rawDestructor:se(i,o),fields:[]}},c:function(t,e,r,n,i,o,a,u,s,l){st[t].fields.push({fieldName:wt(e),getterReturnType:r,getter:se(n,i),getterContext:o,setterArgumentType:a,setter:se(u,s),setterContext:l})},K:function(t,e){Pt(t,{isVoid:!0,name:e=wt(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,e){}})},m:function(t,e,r){t=Pe(t),e=Ce(e,"emval::as");var n=[],i=be(n);return M[r>>2]=i,e.toWireType(n,t)},s:function(t,e,r,n){(t=Ee[t])(e=Pe(e),r=We(r),null,n)},b:ve,z:function(t){return 0===t?be(Se()):(t=We(t),be(Se()[t]))},t:function(t,e){var r=function(t,e){for(var r=new Array(t),n=0;n<t;++n)r[n]=Ce(M[(e>>2)+n],"parameter "+n);return r}(t,e),n=r[0],i=new Array(t-1);return function(t){var e=Ee.length;return Ee.push(t),e}((function(e,o,a,u){for(var s=0,l=0;l<t-1;++l)i[l]=r[l+1].readValueFromPointer(u+s),s+=r[l+1].argPackAdvance;var c=e[o].apply(e,i);for(l=0;l<t-1;++l)r[l+1].deleteObject&&r[l+1].deleteObject(i[l]);if(!n.isVoid)return n.toWireType(a,c)}))},r:function(t){return t=We(t),be(i[t])},e:function(t,e){return be((t=Pe(t))[e=Pe(e)])},g:function(t){t>4&&(he[t].refcount+=1)},q:function(t,e,r,n){t=Pe(t);var i=ke[e];return i||(i=function(t){var e=new Array(t+1);return function(r,n,i){e[0]=r;for(var o=0;o<t;++o){var a=Ce(M[(n>>2)+o],"parameter "+o);e[o+1]=a.readValueFromPointer(i),i+=a.argPackAdvance}return be(new(r.bind.apply(r,e)))}}(e),ke[e]=i),i(t,r,n)},f:function(t){return be(We(t))},l:function(t){lt(he[t].value),ve(t)},p:function(){et()},F:function(t,e,r){D.copyWithin(t,e,e+r)},G:function(t){t>>>=0;var e=D.length,r=2147483648;if(t>r)return!1;for(var n=1;n<=4;n*=2){var i=e*(1+.2/n);if(i=Math.min(i,t+100663296),Oe(Math.min(r,q(Math.max(16777216,t,i),65536))))return!0}return!1},H:function(t){return 0},D:function(t,e,r,n,i){},A:function(t,e,r,n){for(var i=0,o=0;o<r;o++){for(var a=M[e+8*o>>2],u=M[e+(8*o+4)>>2],s=0;s<u;s++)je.printChar(t,D[a+s]);i+=u}return M[n>>2]=i,0},memory:g,o:function(t){return(t=+t)>=0?+K(t+.5):+Z(t-.5)},E:function(t){},table:C};!function(){var t={a:Fe};function e(t,e){var r=t.exports;i.asm=r,function(t){if(Q--,i.monitorRunDependencies&&i.monitorRunDependencies(Q),0==Q&&tt){var e=tt;tt=null,e()}}()}function r(t){e(t.instance)}function n(e){return(m||!s&&!l||"function"!=typeof fetch||it(at)?new Promise((function(t,e){t(ut())})):fetch(at,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+at+"'";return t.arrayBuffer()})).catch((function(){return ut()}))).then((function(e){return WebAssembly.instantiate(e,t)})).then(e,(function(t){$("failed to asynchronously prepare wasm: "+t),et(t)}))}if(Q++,i.monitorRunDependencies&&i.monitorRunDependencies(Q),i.instantiateWasm)try{return i.instantiateWasm(t,e)}catch(a){return $("Module.instantiateWasm callback failed with error: "+a),!1}(function(){if(m||"function"!=typeof WebAssembly.instantiateStreaming||nt(at)||it(at)||"function"!=typeof fetch)return n(r);fetch(at,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,t).then(r,(function(t){return $("wasm streaming compile failed: "+t),$("falling back to ArrayBuffer instantiation"),n(r)}))}))})()}();var Re,xe=i.___wasm_call_ctors=function(){return(xe=i.___wasm_call_ctors=i.asm.L).apply(null,arguments)},De=i._malloc=function(){return(De=i._malloc=i.asm.M).apply(null,arguments)},Ie=i._free=function(){return(Ie=i._free=i.asm.N).apply(null,arguments)},Ue=i.___getTypeName=function(){return(Ue=i.___getTypeName=i.asm.O).apply(null,arguments)};function Me(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function Ve(t){function r(){Re||(Re=!0,i.calledRun=!0,w||(G(X),G(J),e(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)t=i.postRun.shift(),Y.unshift(t);var t;G(Y)}()))}Q>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)t=i.preRun.shift(),L.unshift(t);var t;G(L)}(),Q>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),r()}),1)):r()))}if(i.___embind_register_native_and_builtin_types=function(){return(i.___embind_register_native_and_builtin_types=i.asm.P).apply(null,arguments)},i.dynCall_viii=function(){return(i.dynCall_viii=i.asm.Q).apply(null,arguments)},i.dynCall_vi=function(){return(i.dynCall_vi=i.asm.R).apply(null,arguments)},i.dynCall_v=function(){return(i.dynCall_v=i.asm.S).apply(null,arguments)},i.dynCall_i=function(){return(i.dynCall_i=i.asm.T).apply(null,arguments)},i.dynCall_iii=function(){return(i.dynCall_iii=i.asm.U).apply(null,arguments)},i.dynCall_ii=function(){return(i.dynCall_ii=i.asm.V).apply(null,arguments)},i.dynCall_vii=function(){return(i.dynCall_vii=i.asm.W).apply(null,arguments)},i.dynCall_iiii=function(){return(i.dynCall_iiii=i.asm.X).apply(null,arguments)},i.dynCall_iiiii=function(){return(i.dynCall_iiiii=i.asm.Y).apply(null,arguments)},i.dynCall_iiiiii=function(){return(i.dynCall_iiiiii=i.asm.Z).apply(null,arguments)},i.dynCall_iiiiiiii=function(){return(i.dynCall_iiiiiiii=i.asm._).apply(null,arguments)},i.dynCall_iiiiiiiii=function(){return(i.dynCall_iiiiiiiii=i.asm.$).apply(null,arguments)},i.dynCall_viiii=function(){return(i.dynCall_viiii=i.asm.aa).apply(null,arguments)},i.dynCall_iiiiiii=function(){return(i.dynCall_iiiiiii=i.asm.ba).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiii=i.asm.ca).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiiii=i.asm.da).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiii=i.asm.ea).apply(null,arguments)},i.dynCall_viiiii=function(){return(i.dynCall_viiiii=i.asm.fa).apply(null,arguments)},i.dynCall_iiiiiiiiii=function(){return(i.dynCall_iiiiiiiiii=i.asm.ga).apply(null,arguments)},i.dynCall_iiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiii=i.asm.ha).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.ia).apply(null,arguments)},i.dynCall_viiiiii=function(){return(i.dynCall_viiiiii=i.asm.ja).apply(null,arguments)},tt=function t(){Re||Ve(),Re||(tt=t)},i.run=Ve,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Ve(),t.ready},i.exports=a;const s=function(t,e){for(var r=0;r<e.length;r++){const n=e[r];if("string"!=typeof n&&!Array.isArray(n))for(const e in n)if("default"!==e&&!(e in t)){const r=Object.getOwnPropertyDescriptor(n,e);r&&Object.defineProperty(t,e,r.get?r:{enumerable:!0,get:()=>n[e]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:u},[u])}}]);
//# sourceMappingURL=1562.3efeca3c.chunk.js.map