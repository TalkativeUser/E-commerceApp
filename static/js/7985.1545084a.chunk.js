"use strict";(self.webpackChunkproject2=self.webpackChunkproject2||[]).push([[7985],{7985:(i,n,s)=>{s.d(n,{Linker:()=>l});var t=s(4709);class e extends t.Cd{constructor(i,n,s,t){super(i,n,s),this.canvasSize=t,this.canvasSize={...t}}contains(i){const{width:n,height:s}=this.canvasSize,{x:t,y:e}=i;return super.contains(i)||super.contains({x:t-n,y:e})||super.contains({x:t-n,y:e-s})||super.contains({x:t,y:e-s})}intersects(i){if(super.intersects(i))return!0;const n=i,s=i,e={x:i.position.x-this.canvasSize.width,y:i.position.y-this.canvasSize.height};if(void 0!==s.radius){const i=new t.Cd(e.x,e.y,2*s.radius);return super.intersects(i)}if(void 0!==n.size){const i=new t.Ae(e.x,e.y,2*n.size.width,2*n.size.height);return super.intersects(i)}return!1}}var o=s(3419);const r=0,a=0;function c(i,n,s,e,o){const{dx:r,dy:a,distance:c}=(0,t.oW)(i,n);if(!o||c<=s)return c;const l={x:Math.abs(r),y:Math.abs(a)},d=Math.min(l.x,e.width-l.x),h=Math.min(l.y,e.height-l.y);return Math.sqrt(d**2+h**2)}class l extends t.$S{constructor(i){super(i),this._setColor=i=>{if(!i.options.links)return;const n=this.linkContainer,s=i.options.links;let e=void 0===s.id?n.particles.linksColor:n.particles.linksColors.get(s.id);if(e)return;const o=s.color;e=(0,t.Dt)(o,s.blink,s.consent),void 0===s.id?n.particles.linksColor=e:n.particles.linksColors.set(s.id,e)},this.linkContainer=i}clear(){}init(){this.linkContainer.particles.linksColor=void 0,this.linkContainer.particles.linksColors=new Map}interact(i){var n;if(!i.options.links)return;i.links=[];const s=i.getPosition(),o=this.container,l=o.canvas.size;if(s.x<r||s.y<a||s.x>l.width||s.y>l.height)return;const d=i.options.links,h=d.opacity,u=null!==(n=i.retina.linksDistance)&&void 0!==n?n:0,p=d.warp;let k;k=p?new e(s.x,s.y,u,l):new t.Cd(s.x,s.y,u);const y=o.particles.quadTree.query(k);for(const t of y){const n=t.options.links;if(i===t||null===n||void 0===n||!n.enable||d.id!==n.id||t.spawning||t.destroyed||!t.links||i.links.some((i=>i.destination===t))||t.links.some((n=>n.destination===i)))continue;const e=t.getPosition();if(e.x<r||e.y<a||e.x>l.width||e.y>l.height)continue;const o=c(s,e,u,l,p&&n.warp);if(o>u)continue;const k=(1-o/u)*h;this._setColor(i),i.links.push({destination:t,opacity:k})}}isEnabled(i){var n;return!(null===(n=i.options.links)||void 0===n||!n.enable)}loadParticlesOptions(i){i.links||(i.links=new o.y);for(var n=arguments.length,s=new Array(n>1?n-1:0),t=1;t<n;t++)s[t-1]=arguments[t];for(const e of s)i.links.load(null===e||void 0===e?void 0:e.links)}reset(){}}}}]);
//# sourceMappingURL=7985.1545084a.chunk.js.map