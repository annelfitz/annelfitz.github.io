"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[4698],{24698:(e,t,n)=>{n.r(t),n.d(t,{executeScript:()=>z,extend:()=>Y,functionHelper:()=>W});var r=n(24102),a=n(56281),o=n(62357),i=n(22564),l=n(5431),s=n(790),c=n(44715),u=n(28183),f=n(44241),w=n(97512),p=n(83806),d=n(12271),h=n(85265),g=n(82197),v=n(63425),m=n(32238),y=n(78952);function b(e){return e&&"function"==typeof e.then}const V=100;async function x(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(await C(e,t.arguments[r]));return n}async function S(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await x(e,t))}class H extends s.Rm{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t}createFunction(e){var t=this;return function(){const n={spatialReference:t.context.spatialReference,console:t.context.console,lrucache:t.context.lrucache,timeReference:t.context.timeReference?t.context.timeReference:null,exports:t.context.exports,libraryResolver:t.context.libraryResolver,interceptor:t.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:t.context.globalScope};if(n.depthCounter.depth>64)throw new i.aV(e,i.rH.MaximumCallDepth,null);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return q(t.definition,n,a,null)}}call(e,t){return I(e,t,((n,r,a)=>{const o={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeReference:e.timeReference??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(o.depthCounter.depth>64)throw new i.aV(e,i.rH.MaximumCallDepth,t);return q(this.definition,o,a,t)}))}marshalledCall(e,t,n,r){return r(e,t,(async(a,o,i)=>{const l={spatialReference:e.spatialReference,globalScope:n.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeReference:e.timeReference??null,interceptor:e.interceptor,localScope:{}};return i=i.map((t=>!(0,c.i)(t)||t instanceof s.Vg?t:(0,s.aq)(t,e,r))),(0,s.aq)(await q(this.definition,l,i,t),n,r)}))}}class R extends r.P{constructor(e){super(e)}async global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=await C(this.executingContext,t.node),t.valueset=!0),(0,c.i)(t.value)&&!(t.value instanceof s.Vg)){const e=new s.Vg;e.fn=t.value,e.parameterEvaluator=I,e.context=this.executingContext,t.value=e}return t.value}setGlobal(e,t){if((0,c.i)(t))throw new i.aV(null,i.rH.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null}}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]}async loadModule(e){let t=e.spatialReference;null==t&&(t=new y.Z({wkid:102100})),this.moduleScope=U({},e.customfunctions,e.timeReference),this.executingContext={spatialReference:t,services:e.services,libraryResolver:new a.s(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console?e.console:_,lrucache:e.lrucache,timeReference:e.timeReference??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await C(this.executingContext,this.source.syntax)}}async function I(e,t,n){if(!0===t.preparsed){const r=n(e,null,t.arguments);return b(r),r}const r=n(e,t,await x(e,t));return b(r),r}async function C(e,t,n){if(t.breakpoint&&!0!==n){const n=t.breakpoint();return await n,C(e,t,!0)}try{switch(t?.type){case"VariableDeclarator":return await async function(e,t){let n=null;if(n=null===t.init?null:await C(e,t.init),null!==e.localScope){if(n===c.v&&(n=null),"Identifier"!==t.id.type)throw new i.aV(e,i.rH.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return null!=e.localScope&&(e.localScope[r]={value:n,valueset:!0,node:t.init}),c.v}if("Identifier"!==t.id.type)throw new i.aV(e,i.rH.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return n===c.v&&(n=null),e.globalScope[r]={value:n,valueset:!0,node:t.init},c.v}(e,t);case"ImportDeclaration":return await async function(e,t){const n=t.specifiers[0].local.name.toLowerCase(),r=e.libraryResolver.loadLibrary(n);let a=null;return e.libraryResolver._moduleSingletons?.has(r.uri)?a=e.libraryResolver._moduleSingletons.get(r.uri):(a=new R(r),await a.loadModule(e),e.libraryResolver._moduleSingletons?.set(r.uri,a)),e.globalScope[n]={value:a,valueset:!0,node:t},c.v}(e,t);case"ExportNamedDeclaration":return await async function(e,t){if(await C(e,t.declaration),"FunctionDeclaration"===t.declaration.type)e.exports[t.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===t.declaration.type)for(const n of t.declaration.declarations)e.exports[n.id.name.toLowerCase()]="variable";return c.v}(e,t);case"VariableDeclaration":return await E(e,t,0);case"BlockStatement":case"Program":return await async function(e,t){return B(e,t,0)}(e,t);case"FunctionDeclaration":return await async function(e,t){const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new H(t,e)},c.v}(e,t);case"ReturnStatement":return await async function(e,t){if(null===t.argument)return new c.R(c.v);const n=await C(e,t.argument);return new c.R(n)}(e,t);case"IfStatement":return await async function(e,t){const n=await C(e,t.test);if(!0===n)return C(e,t.consequent);if(!1===n)return null!==t.alternate?C(e,t.alternate):c.v;throw new i.aV(e,i.rH.BooleanConditionRequired,t)}(e,t);case"ExpressionStatement":return await async function(e,t){if("AssignmentExpression"===t.expression.type)return C(e,t.expression);if("CallExpression"===t.expression.type){const n=await C(e,t.expression);return n===c.v?c.v:new c.I(n)}const n=await C(e,t.expression);return n===c.v?c.v:new c.I(n)}(e,t);case"UpdateExpression":return await async function(e,t){const n=t.argument;if("MemberExpression"===n.type){const r={t:null},a=await C(e,n.object);let l=null;r.t=a,!0===n.computed?l=await C(e,n.property):"Identifier"===n.property.type&&(l=n.property.name);const s=r.t;let u;if((0,c.m)(s)){if(!(0,c.b)(l))throw new i.aV(e,i.rH.ArrayAccessorMustBeNumber,t);if(l<0&&(l=s.length+l),l<0||l>=s.length)throw new i.aV(e,i.rH.OutOfBounds,t);u=(0,c.g)(s[l]),s[l]="++"===t.operator?u+1:u-1}else if(s instanceof o.Z){if(!1===(0,c.c)(l))throw new i.aV(e,i.rH.KeyAccessorMustBeString,t);if(!0!==s.hasField(l))throw new i.aV(e,i.rH.FieldNotFound,t,{key:l});u=(0,c.g)(s.field(l)),s.setField(l,"++"===t.operator?u+1:u-1)}else if(s instanceof R){if(!1===(0,c.c)(l))throw new i.aV(e,i.rH.ModuleAccessorMustBeString,t);if(!0!==s.hasGlobal(l))throw new i.aV(e,i.rH.ModuleExportNotFound,t);u=(0,c.g)(await s.global(l)),s.setGlobal(l,"++"===t.operator?u+1:u-1)}else{if(!(0,c.w)(s))throw(0,c.x)(s)?new i.aV(e,i.rH.Immutable,t):new i.aV(e,i.rH.InvalidParameter,t);if(!1===(0,c.c)(l))throw new i.aV(e,i.rH.KeyAccessorMustBeString,t);if(!0!==s.hasField(l))throw new i.aV(e,i.rH.FieldNotFound,t,{key:l});u=(0,c.g)(s.field(l)),s.setField(l,"++"===t.operator?u+1:u-1)}return!1===t.prefix?u:"++"===t.operator?u+1:u-1}const r="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!r)throw new i.aV(e,i.rH.InvalidIdentifier,t);let a;if(null!=e.localScope&&void 0!==e.localScope[r])return a=(0,c.g)(e.localScope[r].value),e.localScope[r]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},!1===t.prefix?a:"++"===t.operator?a+1:a-1;if(void 0!==e.globalScope[r])return a=(0,c.g)(e.globalScope[r].value),e.globalScope[r]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},!1===t.prefix?a:"++"===t.operator?a+1:a-1;throw new i.aV(e,i.rH.InvalidIdentifier,t)}(e,t);case"AssignmentExpression":return await async function(e,t){const n=t.left;if("MemberExpression"===n.type){const r=await C(e,n.object);let a=null;if(!0===n.computed)a=await C(e,n.property);else{if("Identifier"!==n.property.type)throw new i.aV(e,i.rH.InvalidIdentifier,t);a=n.property.name}const l=await C(e,t.right);if((0,c.m)(r)){if(!(0,c.b)(a))throw new i.aV(e,i.rH.ArrayAccessorMustBeNumber,t);if(a<0&&(a=r.length+a),a<0||a>r.length)throw new i.aV(e,i.rH.OutOfBounds,t);if(a===r.length){if("="!==t.operator)throw new i.aV(e,i.rH.OutOfBounds,t);r[a]=N(l,t.operator,r[a],t,e)}else r[a]=N(l,t.operator,r[a],t,e)}else if(r instanceof o.Z){if(!1===(0,c.c)(a))throw new i.aV(e,i.rH.KeyAccessorMustBeString,t);if(!0===r.hasField(a))r.setField(a,N(l,t.operator,r.field(a),t,e));else{if("="!==t.operator)throw new i.aV(e,i.rH.FieldNotFound,t,{key:a});r.setField(a,N(l,t.operator,null,t,e))}}else if(r instanceof R){if(!1===(0,c.c)(a))throw new i.aV(e,i.rH.KeyAccessorMustBeString,t);if(!0!==r.hasGlobal(a))throw new i.aV(e,i.rH.ModuleExportNotFound,t);r.setGlobal(a,N(l,t.operator,await r.global(a),t,e))}else{if(!(0,c.w)(r))throw(0,c.x)(r)?new i.aV(e,i.rH.Immutable,t):new i.aV(e,i.rH.InvalidParameter,t);if(!1===(0,c.c)(a))throw new i.aV(e,i.rH.KeyAccessorMustBeString,t);if(!0===r.hasField(a))r.setField(a,N(l,t.operator,r.field(a),t,e));else{if("="!==t.operator)throw new i.aV(e,i.rH.FieldNotFound,t,{key:a});r.setField(a,N(l,t.operator,null,t,e))}}return c.v}const r=n.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[r]){const n=await C(e,t.right);return e.localScope[r]={value:N(n,t.operator,e.localScope[r].value,t,e),valueset:!0,node:t.right},c.v}if(void 0!==e.globalScope[r]){const n=await C(e,t.right);return e.globalScope[r]={value:N(n,t.operator,e.globalScope[r].value,t,e),valueset:!0,node:t.right},c.v}throw new i.aV(e,i.rH.InvalidIdentifier,t)}(e,t);case"ForStatement":return await function(e,t){try{return null!==t.init?C(e,t.init).then((()=>new Promise(((n,r)=>{A(e,t,{testResult:!0,lastAction:c.v},(e=>{n(e)}),(e=>{r(e)}),0)})))):new Promise(((n,r)=>{A(e,t,{testResult:!0,lastAction:c.v},(e=>{n(e)}),(e=>{r(e)}),0)}))}catch(n){return Promise.reject(n)}}(e,t);case"WhileStatement":return await async function(e,t){const n={testResult:!0,lastAction:c.v};if(n.testResult=await C(e,t.test),!1===n.testResult)return c.v;if(!0!==n.testResult)throw new i.aV(e,i.rH.BooleanConditionRequired,t);for(;!0===n.testResult&&(n.lastAction=await C(e,t.body),n.lastAction!==c.o)&&!(n.lastAction instanceof c.R);)if(n.testResult=await C(e,t.test),!0!==n.testResult&&!1!==n.testResult)throw new i.aV(e,i.rH.BooleanConditionRequired,t);return n.lastAction instanceof c.R?n.lastAction:c.v}(e,t);case"ForInStatement":return await async function(e,t){return new Promise(((n,r)=>{C(e,t.right).then((a=>{try{let l=null;l="VariableDeclaration"===t.left.type?C(e,t.left):Promise.resolve(),l.then((()=>{try{let l="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(l=e.name)}else"Identifier"===t.left.type&&(l=t.left.name);if(!l)throw new i.aV(e,i.rH.InvalidIdentifier,t);l=l.toLowerCase();let s=null;if(null!=e.localScope&&void 0!==e.localScope[l]&&(s=e.localScope[l]),null===s&&void 0!==e.globalScope[l]&&(s=e.globalScope[l]),null===s)return void r(new i.aV(e,i.rH.InvalidIdentifier,t));(0,c.m)(a)||(0,c.c)(a)?O(e,t,a,{reject:r,resolve:n},s):(0,c.x)(a)?function(e,t,n,a,o,i){try{if(void 0===i&&(i="i"),0===n.length)return void a.resolve(c.v);k(e,t,n,o,0,i,(e=>{a.resolve(e)}),(e=>{a.reject(e)}),0)}catch(r){a.reject(r)}}(e,t,a,{reject:r,resolve:n},s):a instanceof o.Z||(0,c.w)(a)?function(e,t,r,a,o){try{O(e,t,r.keys(),a,o,"k")}catch(n){a.reject(n)}}(e,t,a,{reject:r,resolve:n},s):(0,c.T)(a)?L(a.iterator(e.abortSignal),e,t,a,s,(e=>{n(e)}),(e=>{r(e)}),0):O(e,t,[],{reject:r,resolve:n},s)}catch(l){r(l)}}),r)}catch(l){r(l)}}),r)}))}(e,t);case"BreakStatement":return c.o;case"EmptyStatement":return c.v;case"ContinueStatement":return c.p;case"TemplateElement":return await async function(e,t){return t.value?t.value.cooked:""}(0,t);case"TemplateLiteral":return await async function(e,t){const n=[];for(let o=0;o<t.expressions.length;o++){const r=await C(e,t.expressions[o]);n[o]=(0,c.j)(r)}let r="",a=0;for(const o of t.quasis)r+=o.value?o.value.cooked:"",!1===o.tail&&(r+=n[a]?P(n[a],e,t):"",a++);return r}(e,t);case"Identifier":return await j(e,t);case"MemberExpression":return await async function(e,t){const n=await C(e,t.object);if(null===n)throw new i.aV(e,i.rH.MemberOfNull,t);if(!1===t.computed){if("Identifier"===t.property.type){if(n instanceof o.Z||(0,c.w)(n))return n.field(t.property.name);if(n instanceof m.Z)return(0,d.Z)(n,t.property.name,e,t);if(n instanceof R){if(!n.hasGlobal(t.property.name))throw new i.aV(e,i.rH.InvalidIdentifier,t);return n.global(t.property.name)}throw new i.aV(e,i.rH.InvalidMemberAccessKey,t)}throw new i.aV(e,i.rH.InvalidMemberAccessKey,t)}let r=await C(e,t.property);if(n instanceof o.Z||(0,c.w)(n)){if((0,c.c)(r))return n.field(r);throw new i.aV(e,i.rH.InvalidMemberAccessKey,t)}if(n instanceof R){if((0,c.c)(r))return n.global(r);throw new i.aV(e,i.rH.InvalidMemberAccessKey,t)}if(n instanceof m.Z){if((0,c.c)(r))return(0,d.Z)(n,r,e,t);throw new i.aV(e,i.rH.InvalidMemberAccessKey,t)}if((0,c.m)(n)){if((0,c.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new i.aV(e,i.rH.OutOfBounds,t);return n[r]}throw new i.aV(e,i.rH.InvalidMemberAccessKey,t)}if((0,c.x)(n)){if((0,c.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length()+r),r>=n.length()||r<0)throw new i.aV(e,i.rH.OutOfBounds,t);return n.get(r)}throw new i.aV(e,i.rH.InvalidMemberAccessKey,t)}if((0,c.c)(n)){if((0,c.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new i.aV(e,i.rH.OutOfBounds,t);return n[r]}throw new i.aV(e,i.rH.InvalidMemberAccessKey,t)}throw new i.aV(e,i.rH.InvalidMemberAccessKey,t)}(e,t);case"Literal":return t.value;case"CallExpression":return await async function(e,t){if("MemberExpression"===t.callee.type){const n=await C(e,t.callee.object);if(!(n instanceof R))throw new i.aV(e,i.rH.FuncionNotFound,t);const r=!1===t.callee.computed?t.callee.property.name:await C(e,t.callee.property);if(!n.hasGlobal(r))throw new i.aV(e,i.rH.FuncionNotFound,t);const a=await n.global(r);if(!(0,c.i)(a))throw new i.aV(e,i.rH.CallNonFunction,t);return a.call(e,t)}if("Identifier"!==t.callee.type)throw new i.aV(e,i.rH.FuncionNotFound,t);if(null!=e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];if((0,c.i)(n.value))return n.value.call(e,t);throw new i.aV(e,i.rH.CallNonFunction,t)}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];if((0,c.i)(n.value))return n.value.call(e,t);throw new i.aV(e,i.rH.CallNonFunction,t)}throw new i.aV(e,i.rH.FuncionNotFound,t)}(e,t);case"UnaryExpression":return await async function(e,t){const n=await C(e,t.argument);if((0,c.a)(n)){if("!"===t.operator)return!n;if("-"===t.operator)return-1*(0,c.g)(n);if("+"===t.operator)return 1*(0,c.g)(n);if("~"===t.operator)return~(0,c.g)(n);throw new i.aV(e,i.rH.UnsupportedUnaryOperator,t)}if("-"===t.operator)return-1*(0,c.g)(n);if("+"===t.operator)return 1*(0,c.g)(n);if("~"===t.operator)return~(0,c.g)(n);throw new i.aV(e,i.rH.UnsupportedUnaryOperator,t)}(e,t);case"BinaryExpression":return await async function(e,t){const n=[];n[0]=await C(e,t.left),n[1]=await C(e,t.right);const r=n[0],a=n[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return(0,c.u)((0,c.g)(r),(0,c.g)(a),t.operator);case"==":return(0,c.s)(r,a);case"!=":return!(0,c.s)(r,a);case"<":case">":case"<=":case">=":return(0,c.r)(r,a,t.operator);case"+":return(0,c.c)(r)||(0,c.c)(a)?(0,c.j)(r)+(0,c.j)(a):(0,c.g)(r)+(0,c.g)(a);case"-":return(0,c.g)(r)-(0,c.g)(a);case"*":return(0,c.g)(r)*(0,c.g)(a);case"/":return(0,c.g)(r)/(0,c.g)(a);case"%":return(0,c.g)(r)%(0,c.g)(a);default:throw new i.aV(e,i.rH.UnsupportedOperator,t)}}(e,t);case"LogicalExpression":return await async function(e,t){const n=await C(e,t.left);let r=null;if(!(0,c.a)(n))throw new i.aV(e,i.rH.LogicalExpressionOnlyBoolean,t);switch(t.operator){case"||":if(!0===n)return n;if(r=await C(e,t.right),(0,c.a)(r))return r;throw new i.aV(e,i.rH.LogicExpressionOrAnd,t);case"&&":if(!1===n)return n;if(r=await C(e,t.right),(0,c.a)(r))return r;throw new i.aV(e,i.rH.LogicExpressionOrAnd,t);default:throw new i.aV(e,i.rH.LogicExpressionOrAnd,t)}}(e,t);case"ArrayExpression":return await async function(e,t){const n=[];for(let r=0;r<t.elements.length;r++)n.push(await C(e,t.elements[r]));for(let r=0;r<n.length;r++){if((0,c.i)(n[r]))throw new i.aV(e,i.rH.NoFunctionInArray,t);n[r]===c.v&&(n[r]=null)}return n}(e,t);case"ObjectExpression":return await async function(e,t){const n=[];for(let o=0;o<t.properties.length;o++)n[o]=await C(e,t.properties[o]);const r={},a=new Map;for(let o=0;o<n.length;o++){const l=n[o];if((0,c.i)(l.value))throw new i.aV(e,i.rH.NoFunctionInDictionary,t);if(!1===(0,c.c)(l.key))throw new i.aV(e,i.rH.KeyMustBeString,t);let s=l.key.toString();const u=s.toLowerCase();a.has(u)?s=a.get(u):a.set(u,s),l.value===c.v?r[s]=null:r[s]=l.value}const l=new o.Z(r);return l.immutable=!1,l}(e,t);case"Property":return await async function(e,t){const n=await C(e,t.value);return"Identifier"===t.key.type?{key:t.key.name,value:n}:{key:await C(e,t.key),value:n}}(e,t);default:throw new i.aV(e,i.rH.Unrecognised,t)}}catch(r){throw(0,i.VO)(e,t,r)}}async function F(e,t,n){const r=await C(e,t.body);return n.lastAction=r,n.lastAction===c.o||n.lastAction instanceof c.R?(n.testResult=!1,n):null!==t.update?(await C(e,t.update),n):n}function A(e,t,n,r,a,o){try{(async function(e,t,n){if(null!==t.test){const r=await C(e,t.test);if(!0===e.abortSignal?.aborted)throw new i.aV(e,i.rH.Cancelled,t);if(n.testResult=r,!1===n.testResult)return n;if(!0!==n.testResult)throw new i.aV(e,i.rH.BooleanConditionRequired,t);return F(e,t,n)}return F(e,t,n)})(e,t,n).then((()=>{try{!0===n.testResult?++o>V?(o=0,setTimeout((()=>{A(e,t,n,r,a,o)}),0)):A(e,t,n,r,a,o):n.lastAction instanceof c.R?r(n.lastAction):r(c.v)}catch(i){a(i)}}),(e=>{a(e)}))}catch(l){a(l)}}function M(e,t,n,r,a,o,i,l,s,u){try{if(r<=o)return void l(c.v);a.value="k"===i?n[o]:o,C(e,t.body).then((f=>{try{f instanceof c.R?l(f):f===c.o?l(c.v):++u>V?(u=0,setTimeout((()=>{M(e,t,n,r,a,o+1,i,l,s,u)}),0)):M(e,t,n,r,a,o+1,i,l,s,u)}catch(w){s(w)}}),(e=>{s(e)}))}catch(f){s(f)}}function k(e,t,n,r,a,o,i,l,s){try{if(n.length()<=a)return void i(c.v);r.value="k"===o?n.get(a):a,C(e,t.body).then((u=>{u instanceof c.R?i(u):u===c.o?i(c.v):++s>V?(s=0,setTimeout((()=>{k(e,t,n,r,a+1,o,i,l,s)}),0)):k(e,t,n,r,a+1,o,i,l,s)}),(e=>{l(e)}))}catch(u){l(u)}}function O(e,t,n,r,a,o){try{if(void 0===o&&(o="i"),0===n.length)return void r.resolve(c.v);M(e,t,n,n.length,a,0,o,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(i){r.reject(i)}}function L(e,t,n,r,a,o,i,s){try{e.next().then((u=>{try{if(null===u)o(c.v);else{const f=l.Z.createFromGraphicLikeObject(u.geometry,u.attributes,r,t.timeReference);f._underlyingGraphic=u,a.value=f,C(t,n.body).then((l=>{try{l===c.o?o(c.v):l instanceof c.R?o(l):++s>V?(s=0,setTimeout((()=>{L(e,t,n,r,a,o,i,s)}),0)):L(e,t,n,r,a,o,i,s)}catch(u){i(u)}}),(e=>{i(e)}))}}catch(f){i(f)}}),(e=>{i(e)}))}catch(u){i(u)}}function N(e,t,n,r,a){switch(t){case"=":return e===c.v?null:e;case"/=":return(0,c.g)(n)/(0,c.g)(e);case"*=":return(0,c.g)(n)*(0,c.g)(e);case"-=":return(0,c.g)(n)-(0,c.g)(e);case"+=":return(0,c.c)(n)||(0,c.c)(e)?(0,c.j)(n)+(0,c.j)(e):(0,c.g)(n)+(0,c.g)(e);case"%=":return(0,c.g)(n)%(0,c.g)(e);default:throw new i.aV(a,i.rH.UnsupportedOperator,r)}}async function B(e,t,n){if(n>=t.body.length)return c.v;const r=await C(e,t.body[n]);return r instanceof c.R||r===c.o||r===c.p||n===t.body.length-1?r:B(e,t,n+1)}async function E(e,t,n){return n>=t.declarations.length||(await C(e,t.declarations[n]),n===t.declarations.length-1||await E(e,t,n+1)),c.v}async function j(e,t){const n=t.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[n]){const t=e.localScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=C(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}if(void 0!==e.globalScope[n]){const t=e.globalScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=C(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}throw new i.aV(e,i.rH.InvalidIdentifier,t)}function P(e,t,n){if((0,c.i)(e))throw new i.aV(t,i.rH.NoFunctionInTemplateLiteral,n);return e}const K={};async function Z(e,t,n,r){const a=await C(e,t.arguments[n]);if((0,c.s)(a,r))return C(e,t.arguments[n+1]);const o=t.arguments.length-n;return 1===o?C(e,t.arguments[n]):2===o?null:3===o?C(e,t.arguments[n+2]):Z(e,t,n+2,r)}async function T(e,t,n,r){if(!0===r)return C(e,t.arguments[n+1]);if(3===t.arguments.length-n)return C(e,t.arguments[n+2]);const a=await C(e,t.arguments[n+2]);if(!1===(0,c.a)(a))throw new i.aV(e,i.rH.ModuleExportNotFound,t.arguments[n+2]);return T(e,t,n+2,a)}async function q(e,t,n,r){const a=e.body;if(n.length!==e.params.length)throw new i.aV(t,i.rH.WrongNumberOfParameters,null);for(let i=0;i<n.length;i++){const r=e.params[i];"Identifier"===r.type&&null!=t.localScope&&(t.localScope[r.name.toLowerCase()]={d:null,value:n[i],valueset:!0,node:null})}const o=await C(t,a);if(o instanceof c.R)return o.value;if(o===c.o)throw new i.aV(t,i.rH.UnexpectedToken,r);if(o===c.p)throw new i.aV(t,i.rH.UnexpectedToken,r);return o instanceof c.I?o.value:o}(0,w.r)(K,S),(0,v.r)(K,S),(0,h.r)(K,S),(0,d.r)(K,S),(0,g.r)(K,S),(0,p.registerFunctions)({functions:K,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:S,standardFunctionAsync:I}),K.iif=async function(e,t){(0,c.y)(null===t.arguments?[]:t.arguments,3,3,e,t);const n=await C(e,t.arguments[0]);if(!1===(0,c.a)(n))throw new i.aV(e,i.rH.BooleanConditionRequired,t);return C(e,n?t.arguments[1]:t.arguments[2])},K.decode=async function(e,t){if(t.arguments.length<2)throw new i.aV(e,i.rH.WrongNumberOfParameters,t);if(2===t.arguments.length)return C(e,t.arguments[1]);if((t.arguments.length-1)%2==0)throw new i.aV(e,i.rH.WrongNumberOfParameters,t);return Z(e,t,1,await C(e,t.arguments[0]))},K.when=async function(e,t){if(t.arguments.length<3)throw new i.aV(e,i.rH.WrongNumberOfParameters,t);if(t.arguments.length%2==0)throw new i.aV(e,i.rH.WrongNumberOfParameters,t);const n=await C(e,t.arguments[0]);if(!1===(0,c.a)(n))throw new i.aV(e,i.rH.BooleanConditionRequired,t.arguments[0]);return T(e,t,0,n)};const D={fixSpatialReference:c.q,parseArguments:x,standardFunction:S,standardFunctionAsync:I,evaluateIdentifier:j};for(const J in K)K[J]={value:new s.Bx(K[J]),valueset:!0,node:null};const G=function(){};function U(e,t,n){const r=new G;null==e&&(e={}),null==t&&(t={});const a=new o.Z({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});a.immutable=!1,r.textformatting={value:a,valueset:!0,node:null};for(const o in t)r[o]={value:new s.Bx(t[o]),native:!0,valueset:!0,node:null};for(const o in e)e[o]&&"esri.Graphic"===e[o].declaredClass?r[o]={value:l.Z.createFromGraphic(e[o],n),valueset:!0,node:null}:r[o]={value:e[o],valueset:!0,node:null};return r}function _(e){console.log(e)}(G.prototype=K).infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},G.prototype.pi={value:Math.PI,valueset:!0,node:null};const W=D;function Y(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:S,standardFunctionAsync:I,evaluateIdentifier:j};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const n in t.functions)K[n]={value:new s.Bx(t.functions[n]),valueset:!0,node:null},G.prototype[n]=K[n];for(let n=0;n<t.signatures.length;n++)(0,u.gW)(t.signatures[n],"async")}async function z(e,t){let n=t.spatialReference;null==n&&(n=new y.Z({wkid:102100}));let r=null;e.usesModules&&(r=new a.s(new Map,e.loadedModules));const o=U(t.vars,t.customfunctions,t.timeReference),l={spatialReference:n,services:t.services,exports:{},libraryResolver:r,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:o,console:t.console?t.console:_,timeReference:t.timeReference??null,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:{depth:1}};let s=await C(l,e);if(s instanceof c.R&&(s=s.value),s instanceof c.I&&(s=s.value),s===c.v&&(s=null),s===c.o)throw new i.aV(l,i.rH.IllegalResult,null);if(s===c.p)throw new i.aV(l,i.rH.IllegalResult,null);if((0,c.i)(s))throw new i.aV(l,i.rH.IllegalResult,null);return s}Y([f.A])}}]);
//# sourceMappingURL=4698.d1ea46f4.chunk.js.map