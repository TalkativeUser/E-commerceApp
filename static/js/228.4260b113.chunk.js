"use strict";(self.webpackChunkproject2=self.webpackChunkproject2||[]).push([[228],{228:(t,e,n)=>{n.d(e,{Bouncer:()=>v});var o=n(4709);const i=2,s=.5,c=Math.PI*s,a=2,r=10;function d(t,e,n,s,a){const r=t.particles.quadTree.query(s,a);for(const d of r)s instanceof o.Cd?(0,o.kR)((0,o.gy)(d),{position:e,radius:n,mass:n**i*c,velocity:o.OW.origin,factor:o.OW.origin}):s instanceof o.Ae&&(0,o.dp)(d,(0,o.M_)(e,n))}function f(t,e,n,i){(0,o.XD)(n,e,((e,n)=>function(t,e,n,i){const c=document.querySelectorAll(e);c.length&&c.forEach((e=>{const c=e,d=t.retina.pixelRatio,f={x:(c.offsetLeft+c.offsetWidth*s)*d,y:(c.offsetTop+c.offsetHeight*s)*d},u=c.offsetWidth*s*d,l=r*d,v="circle"===n.type?new o.Cd(f.x,f.y,u+l):new o.Ae(c.offsetLeft*d-l,c.offsetTop*d-l,c.offsetWidth*d+l*a,c.offsetHeight*d+l*a);i(f,u,v)}))}(t,e,n,((e,n,o)=>d(t,e,n,o,i)))))}class u{constructor(){this.distance=200}load(t){t&&void 0!==t.distance&&(this.distance=t.distance)}}const l="bounce";class v extends o.L8{constructor(t){super(t)}clear(){}init(){const t=this.container,e=t.actualOptions.interactivity.modes.bounce;e&&(t.retina.bounceModeDistance=e.distance*t.retina.pixelRatio)}interact(){const t=this.container,e=t.actualOptions.interactivity.events,n=t.interactivity.status===o.Wt,i=e.onHover.enable,s=e.onHover.mode,c=e.onDiv;n&&i&&(0,o.dB)(l,s)?function(t,e){const n=t.retina.pixelRatio,i=r*n,s=t.interactivity.mouse.position,c=t.retina.bounceModeDistance;!c||c<0||!s||d(t,s,c,new o.Cd(s.x,s.y,c+i),e)}(this.container,(t=>this.isEnabled(t))):f(this.container,c,l,(t=>this.isEnabled(t)))}isEnabled(t){var e;const n=this.container,i=n.actualOptions,s=n.interactivity.mouse,c=(null!==(e=null===t||void 0===t?void 0:t.interactivity)&&void 0!==e?e:i.interactivity).events,a=c.onDiv;return!!s.position&&c.onHover.enable&&(0,o.dB)(l,c.onHover.mode)||(0,o.wm)(l,a)}loadModeOptions(t){t.bounce||(t.bounce=new u);for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];for(const i of n)t.bounce.load(null===i||void 0===i?void 0:i.bounce)}reset(){}}}}]);
//# sourceMappingURL=228.4260b113.chunk.js.map