import{e as i,r as l,m as u}from"./index-Dz93DN3d.js";/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const p=Symbol();var o;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(o||(o={}));function f(){const t=i(!0),s=t.run(()=>l({}));let c=[],n=[];const a=u({install(e){a._a=e,e.provide(p,a),e.config.globalProperties.$pinia=a,n.forEach(r=>c.push(r)),n=[]},use(e){return this._a?c.push(e):n.push(e),this},_p:c,_a:null,_e:t,_s:new Map,state:s});return a}const m=f();export{m as default};
