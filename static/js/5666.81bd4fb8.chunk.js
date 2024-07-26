"use strict";(self.webpackChunkproject2=self.webpackChunkproject2||[]).push([[5666],{5666:(i,n,t)=>{t.d(n,{LinkInstance:()=>s});var e=t(4709);function o(i,n){const t=((o=i.map((i=>i.id))).sort(((i,n)=>i-n)),o.join("_"));var o;let s=n.get(t);return void 0===s&&(s=(0,e.sZ)(),n.set(t,s)),s}class s{constructor(i){this.container=i,this._drawLinkLine=(i,n)=>{const t=i.options.links;if(null===t||void 0===t||!t.enable)return;const o=this.container,s=o.actualOptions,l=n.destination,a=i.getPosition(),r=l.getPosition();let c=n.opacity;o.canvas.draw((n=>{var d,k,p;let u;const h=null===(d=i.options.twinkle)||void 0===d?void 0:d.lines;if(null!==h&&void 0!==h&&h.enable){const i=h.frequency,n=(0,e.tX)(h.color);(0,e.sZ)()<i&&n&&(u=n,c=(0,e.Gu)(h.opacity))}if(!u){const n=void 0!==t.id?o.particles.linksColors.get(t.id):o.particles.linksColor;u=(0,e.BE)(i,l,n)}if(!u)return;const y=null!==(k=i.retina.linksWidth)&&void 0!==k?k:0,g=null!==(p=i.retina.linksDistance)&&void 0!==p?p:0,{backgroundMask:f}=s;!function(i){let n=!1;const{begin:t,end:o,maxDistance:s,context:l,canvasSize:a,width:r,backgroundMask:c,colorLine:d,opacity:k,links:p}=i;if((0,e.Sp)(t,o)<=s)(0,e.pS)(l,t,o),n=!0;else if(p.warp){let i,r;const c={x:o.x-a.width,y:o.y},d=(0,e.oW)(t,c);if(d.distance<=s){const n=t.y-d.dy/d.dx*t.x;i={x:0,y:n},r={x:a.width,y:n}}else{const n={x:o.x,y:o.y-a.height},l=(0,e.oW)(t,n);if(l.distance<=s){const n=-(t.y-l.dy/l.dx*t.x)/(l.dy/l.dx);i={x:n,y:0},r={x:n,y:a.height}}else{const n={x:o.x-a.width,y:o.y-a.height},l=(0,e.oW)(t,n);if(l.distance<=s){const n=t.y-l.dy/l.dx*t.x;i={x:-n/(l.dy/l.dx),y:n},r={x:i.x+a.width,y:i.y+a.height}}}}i&&r&&((0,e.pS)(l,t,i),(0,e.pS)(l,o,r),n=!0)}if(!n)return;l.lineWidth=r,c.enable&&(l.globalCompositeOperation=c.composite),l.strokeStyle=(0,e.iz)(d,k);const{shadow:u}=p;if(u.enable){const i=(0,e.tX)(u.color);i&&(l.shadowBlur=u.blur,l.shadowColor=(0,e.iz)(i))}l.stroke()}({context:n,width:y,begin:a,end:r,maxDistance:g,canvasSize:o.canvas.size,links:t,backgroundMask:f,colorLine:u,opacity:c})}))},this._drawLinkTriangle=(i,n,t)=>{var o;const s=i.options.links;if(null===s||void 0===s||!s.enable)return;const l=s.triangles;if(!l.enable)return;const a=this.container,r=a.actualOptions,c=n.destination,d=t.destination,k=null!==(o=l.opacity)&&void 0!==o?o:.5*(n.opacity+t.opacity);k<=0||a.canvas.draw((n=>{var t;const o=i.getPosition(),p=c.getPosition(),u=d.getPosition(),h=null!==(t=i.retina.linksDistance)&&void 0!==t?t:0;if((0,e.Sp)(o,p)>h||(0,e.Sp)(u,p)>h||(0,e.Sp)(u,o)>h)return;let y=(0,e.tX)(l.color);if(!y){const n=void 0!==s.id?a.particles.linksColors.get(s.id):a.particles.linksColor;y=(0,e.BE)(i,c,n)}y&&function(i){const{context:n,pos1:t,pos2:o,pos3:s,backgroundMask:l,colorTriangle:a,opacityTriangle:r}=i;!function(i,n,t,e){i.beginPath(),i.moveTo(n.x,n.y),i.lineTo(t.x,t.y),i.lineTo(e.x,e.y),i.closePath()}(n,t,o,s),l.enable&&(n.globalCompositeOperation=l.composite),n.fillStyle=(0,e.iz)(a,r),n.fill()}({context:n,pos1:o,pos2:p,pos3:u,backgroundMask:r.backgroundMask,colorTriangle:y,opacityTriangle:k})}))},this._drawTriangles=(i,n,t,e)=>{var o,s,l;const a=t.destination;if(null===(o=i.links)||void 0===o||!o.triangles.enable||null===(s=a.options.links)||void 0===s||!s.triangles.enable)return;const r=null===(l=a.links)||void 0===l?void 0:l.filter((i=>{const n=this._getLinkFrequency(a,i.destination);return a.options.links&&n<=a.options.links.frequency&&e.findIndex((n=>n.destination===i.destination))>=0}));if(null!==r&&void 0!==r&&r.length)for(const c of r){const e=c.destination;this._getTriangleFrequency(n,a,e)>i.links.triangles.frequency||this._drawLinkTriangle(n,t,c)}},this._getLinkFrequency=(i,n)=>o([i,n],this._freqs.links),this._getTriangleFrequency=(i,n,t)=>o([i,n,t],this._freqs.triangles),this._freqs={links:new Map,triangles:new Map}}drawParticle(i,n){const{links:t,options:e}=n;if(null===t||void 0===t||!t.length)return;const o=t.filter((i=>e.links&&(e.links.frequency>=1||this._getLinkFrequency(n,i.destination)<=e.links.frequency)));for(const l of o){var s;this._drawTriangles(e,n,l,o),l.opacity>0&&(null!==(s=n.retina.linksWidth)&&void 0!==s?s:0)>0&&this._drawLinkLine(n,l)}}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map,await Promise.resolve()}particleCreated(i){if(i.links=[],!i.options.links)return;const n=this.container.retina.pixelRatio,{retina:t}=i,{distance:e,width:o}=i.options.links;t.linksDistance=e*n,t.linksWidth=o*n}particleDestroyed(i){i.links=[]}}}}]);
//# sourceMappingURL=5666.81bd4fb8.chunk.js.map