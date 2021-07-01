self.webpackChunkRemoteClient([190],{675:function(e,t,i){"use strict";i.r(t);var s=i(1),r=i(3),a=i(14),o=i(2),n=i(176),h=i(83),l=i(105),d=i(442),c=i(371),u=i(452);const _=r.a.getLogger("esri.views.2d.layers.features.support.whereUtils"),y={getAttribute:(e,t)=>e.field(t)};const f=r.a.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");t.default=class{constructor(e){this._geometryBounds=Object(h.c)(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,1)}setTrue(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach((e,r)=>{const a=!!(1&this._idToVisibility.get(r)),o=s.has(r);!a&&o?t.push(r):a&&!o&&i.push(r),this._idToVisibility.set(r,o?3:0)}),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:r}=this;return l.a.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:r})}async update(e,t){this._hash=JSON.stringify(e);const i=await Object(d.h)(e,null,t);await Object(o.b)([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await async function(e,t){const s=await Promise.resolve().then(i.bind(null,129));try{const i=s.WhereClause.create(e,t);if(!i.isStandardized){const e=new a.a("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);_.error(e)}return e=>{const t=e.readArcadeFeature();return i.testFeature(t,y)}}catch(t){return _.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",s=await Object(d.g)(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);Object(n.a)(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=Object(c.b)(this._serviceInfo.timeInfo,e.timeExtent,u.b);else{const t=new a.a("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);f.error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!Object(s.g)(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((t,i)=>{1&t||(this._idToVisibility.set(i,1),e.push(i))}),e}}}});