"use strict";(self.webpackChunkproject2=self.webpackChunkproject2||[]).push([[7777],{7777:(t,i,n)=>{n.d(i,{Grabber:()=>a});var o=n(4709),e=n(1715);function r(t,i,n,e,r){t.canvas.draw((t=>{var a;const s=i.getPosition();!function(t,i,n,e,r,a){(0,o.pS)(t,n,e),t.strokeStyle=(0,o.iz)(r,a),t.lineWidth=i,t.stroke()}(t,null!==(a=i.retina.linksWidth)&&void 0!==a?a:0,s,r,n,e)}))}class a extends o.L8{constructor(t){super(t)}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.grab;i&&(t.retina.grabModeDistance=i.distance*t.retina.pixelRatio)}interact(){const t=this.container,i=t.actualOptions.interactivity;if(!i.modes.grab||!i.events.onHover.enable||t.interactivity.status!==o.Wt)return;const n=t.interactivity.mouse.position;if(!n)return;const e=t.retina.grabModeDistance;if(!e||e<0)return;const a=t.particles.quadTree.queryCircle(n,e,(t=>this.isEnabled(t)));for(const l of a){var s,c;const a=l.getPosition(),d=(0,o.Sp)(a,n);if(d>e)continue;const u=i.modes.grab.links,v=u.opacity,b=v-d*v/e;if(b<=0)continue;const p=null!==(s=u.color)&&void 0!==s?s:null===(c=l.options.links)||void 0===c?void 0:c.color;if(!t.particles.grabLineColor&&p){const n=i.modes.grab.links;t.particles.grabLineColor=(0,o.Dt)(p,n.blink,n.consent)}const g=(0,o.BE)(l,void 0,t.particles.grabLineColor);g&&r(t,l,g,b,n)}}isEnabled(t){var i;const n=this.container,e=n.interactivity.mouse,r=(null!==(i=null===t||void 0===t?void 0:t.interactivity)&&void 0!==i?i:n.actualOptions.interactivity).events;return r.onHover.enable&&!!e.position&&(0,o.dB)("grab",r.onHover.mode)}loadModeOptions(t){t.grab||(t.grab=new e.z);for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];for(const e of n)t.grab.load(null===e||void 0===e?void 0:e.grab)}reset(){}}}}]);
//# sourceMappingURL=7777.cf614192.chunk.js.map