"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1074],{59153:(n,t,e)=>{e.r(t),e.d(t,{registerFunctions:()=>s});var a=e(27535),r=e(61363),i=e(24240),u=e(41534);async function c(n,t,e,a,c,s){if(1===a.length){if((0,r.m)(a[0]))return(0,i.t)(n,a[0],(0,r.A)(a[1],-1));if((0,r.x)(a[0]))return(0,i.t)(n,a[0].toArray(),(0,r.A)(a[1],-1))}else if(2===a.length){if((0,r.m)(a[0]))return(0,i.t)(n,a[0],(0,r.A)(a[1],-1));if((0,r.x)(a[0]))return(0,i.t)(n,a[0].toArray(),(0,r.A)(a[1],-1));if((0,r.T)(a[0])){const e=await a[0].load(),i=await o(u.WhereClause.create(a[1],e.getFieldsIndex()),s,c);return a[0].calculateStatistic(n,i,(0,r.A)(a[2],1e3),t.abortSignal)}}else if(3===a.length&&(0,r.T)(a[0])){const e=await a[0].load(),i=await o(u.WhereClause.create(a[1],e.getFieldsIndex()),s,c);return a[0].calculateStatistic(n,i,(0,r.A)(a[2],1e3),t.abortSignal)}return(0,i.t)(n,a,-1)}async function o(n,t,e){const a=n.getVariables();if(a.length>0){const r=[];for(let n=0;n<a.length;n++){const i={name:a[n]};r.push(await t.evaluateIdentifier(e,i))}const i={};for(let n=0;n<a.length;n++)i[a[n]]=r[n];return n.parameters=i,n}return n}function s(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>c("stdev",e,0,r,t,n)))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>c("variance",e,0,r,t,n)))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>c("mean",e,0,r,t,n)))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>c("mean",e,0,r,t,n)))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>c("sum",e,0,r,t,n)))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>c("min",e,0,r,t,n)))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>c("max",e,0,r,t,n)))},n.functions.count=function(t,e){return n.standardFunctionAsync(t,e,((n,i,u)=>{if((0,r.y)(u,1,1,t,e),(0,r.T)(u[0]))return u[0].count(n.abortSignal);if((0,r.m)(u[0])||(0,r.c)(u[0]))return u[0].length;if((0,r.x)(u[0]))return u[0].length();throw new a.aV(t,a.rH.InvalidParameter,e)}))})}},5732:(n,t,e)=>{e.d(t,{c:()=>a,g:()=>r});var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}}}]);