/* Small isometric "low-poly" monument icons, drawn as inline SVG (64x64). */
const IP={t:'#f3dcb8',l:'#cf9d68',r:'#a1704a',d:'#5e3d24',w:'#82bccf',wd:'#5f9db3',s:'#8b6b4d',g:'#7d9468'};
const _u=(x,y)=>x.toFixed(1)+','+y.toFixed(1);
const RN=[.866,-.5], LN=[-.866,-.5];
function bpos(cx,gcy,sa,sb,z=0){return [cx-(sb-sa)*.433, gcy-z+(sa+sb)*.25];}
function box(cx,gcy,sa,sb,h,z=0,c=IP){
  const [bx,by]=bpos(cx,gcy,sa,sb,z), rx=sb*.866, ry=-sb*.5, lx=-sa*.866, ly=-sa*.5, T=(x,y)=>_u(x,y-h);
  return `<polygon points="${_u(bx,by)} ${_u(bx+lx,by+ly)} ${T(bx+lx,by+ly)} ${T(bx,by)}" fill="${c.l}"/>`+
   `<polygon points="${_u(bx,by)} ${_u(bx+rx,by+ry)} ${T(bx+rx,by+ry)} ${T(bx,by)}" fill="${c.r}"/>`+
   `<polygon points="${T(bx,by)} ${T(bx+rx,by+ry)} ${T(bx+rx+lx,by+ry+ly)} ${T(bx+lx,by+ly)}" fill="${c.t}"/>`;
}
function arch(cx,gcy,sa,sb,z,dir,u,w,v0,hh){
  const [bx,by]=bpos(cx,gcy,sa,sb,z), d=dir==='L'?LN:RN;
  const ax=bx+d[0]*u, ay=by+d[1]*u-v0, bx2=ax+d[0]*w, by2=ay+d[1]*w, mx=(ax+bx2)/2, my=(ay+by2)/2-hh-2.2;
  return `<path d="M${_u(ax,ay)}L${_u(ax,ay-hh)}Q${_u(mx,my)} ${_u(bx2,by2-hh)}L${_u(bx2,by2)}Z" fill="${IP.d}"/>`;
}
function stack(cx,gcy,lv,z=0){let o='';lv.forEach(([s,h])=>{o+=box(cx,gcy,s,s,h,z);z+=h;});return o;}
function dome(x,y,rx,ry){return `<path d="M${x-rx} ${y}A${rx} ${ry} 0 0 1 ${x+rx} ${y}Z" fill="${IP.l}"/><path d="M${x} ${y-ry}A${rx} ${ry} 0 0 1 ${x+rx} ${y}L${x} ${y}Z" fill="${IP.r}"/><ellipse cx="${x-rx*.35}" cy="${y-ry*.55}" rx="${rx*.18}" ry="${ry*.2}" fill="#fff" opacity=".35"/><circle cx="${x}" cy="${y-ry-1}" r="1" fill="${IP.d}"/>`;}
const off=(cx,gcy,a,b)=>[cx+a*RN[0]+b*LN[0], gcy+a*RN[1]+b*LN[1]];
const water=(cx,gcy,z,s)=>{const y=gcy-z;return `<polygon points="${_u(cx,y+s*.5)} ${_u(cx+s*.866,y)} ${_u(cx,y-s*.5)} ${_u(cx-s*.866,y)}" fill="${IP.w}"/>`;};
const rim=(cx,gcy,z,s,f)=>{const y=gcy-z;return `<polygon points="${_u(cx,y+s*.5)} ${_u(cx+s*.866,y)} ${_u(cx,y-s*.5)} ${_u(cx-s*.866,y)}" fill="${f}"/>`;};
const IC={
 gopura:()=>stack(32,48,[[26,5],[22,8],[18,7],[14,6],[10,5],[6,4]])+arch(32,48,26,26,0,'L',8,6,0,5)+arch(32,48,26,26,0,'R',12,6,0,5)+`<ellipse cx="32" cy="11" rx="2.2" ry="1.3" fill="${IP.d}"/>`,
 temple:()=>{let o=box(32,47,28,28,4);o+=box(32,46,16,16,9,4)+arch(32,46,16,16,4,'L',4,5,0,6)+arch(32,46,16,16,4,'R',5,5,0,6);o+=stack(32,46,[[12,4],[9,3],[6,3],[3,3]],13);return o;},
 hall:()=>{let o=box(32,48,30,30,4);const P=[[-9,-9],[-9,9],[9,-9],[9,9]].map(([a,b])=>off(32,46,a,b)).sort((p,q)=>p[1]-q[1]);P.slice(0,2).forEach(p=>o+=box(p[0],p[1],3,3,13,4));o+=box(32,46,26,26,3,17);o+=box(32,46,13,13,5,20);P.slice(2).forEach(p=>o+=box(p[0],p[1],3,3,13,4));return o;},
 platform:()=>stack(32,49,[[32,6],[25,6],[18,6]]),
 steps:()=>{let o=box(32,48,32,32,4);o+=rim(32,48,4,27,'#e8cda4')+rim(32,48,4,22,'#d8b88b')+rim(32,48,4,17,'#c2a074')+water(32,48,4,11);return o;},
 bath:()=>{let o=box(32,48,28,28,9);o+=arch(32,48,28,28,0,'L',5,5,0,6)+arch(32,48,28,28,0,'L',13,5,0,6)+arch(32,48,28,28,0,'L',21,5,0,6)+arch(32,48,28,28,0,'R',5,5,0,6)+arch(32,48,28,28,0,'R',13,5,0,6)+arch(32,48,28,28,0,'R',21,5,0,6);o+=rim(32,48,9,22,'#d8b88b')+water(32,48,9,15);return o;},
 stables:()=>{let o=box(32,47,13,34,9);for(let i=0;i<5;i++)o+=arch(32,47,13,34,0,'R',3+i*6.2,4.5,0,5);o+=arch(32,47,13,34,0,'L',3.5,5,0,5)+arch(32,47,13,34,0,'L',8,4,0,5);const ds=[];for(let t=13;t>=-13;t-=6.5)ds.push(t);ds.forEach(t=>{const [x,y]=off(32,47,t,0);o+=dome(x,y-9,6.4,7.5);});return o;},
 lotus:()=>{let o=box(32,48,30,30,4);const c=[[8,8],[-8,8],[8,-8],[-8,-8]].map(([a,b])=>off(32,47,a,b)).sort((p,q)=>p[1]-q[1]);const tw=(p)=>stack(p[0],p[1],[[6,6],[4.5,3],[3,3]],4);o+=tw(c[0]);o+=box(32,47,14,14,9,4)+arch(32,47,14,14,4,'L',3,3.5,0,5)+arch(32,47,14,14,4,'R',3,3.5,0,5)+stack(32,47,[[12,3],[9,3],[6,3],[3,3]],13);o+=tw(c[1])+tw(c[2])+tw(c[3]);return o;},
 hill:()=>{let o=`<path d="M3 52L16 32l8 6 12-18 11 15 6-4 8 21z" fill="${IP.s}"/><path d="M3 52L16 32l8 6 12-18 6 25z" fill="#a88562"/><path d="M36 20l-6 32h30L47 35z" fill="#745a41" opacity=".55"/>`;o+=stack(34,31,[[6,3],[4.5,3],[3,2]],0);o+=stack(20,43,[[6,3],[4.5,3],[3,2]],0);o+=stack(47,45,[[6,3],[4.5,3],[3,2]],0);return o;},
 narasimha:()=>box(32,52,18,18,5)+`<path d="M18 36a14 15 0 0 1 28 0Z" fill="${IP.d}" transform="translate(0,-4)"/><path d="M22 34a10 11 0 0 1 20 0Z" fill="${IP.r}" transform="translate(0,-4)"/><rect x="25" y="20" width="14" height="22" rx="5" fill="${IP.l}"/><rect x="32" y="20" width="7" height="22" rx="3" fill="${IP.r}" opacity=".6"/><circle cx="32" cy="17" r="6" fill="${IP.t}"/><ellipse cx="32" cy="40" rx="12" ry="5" fill="${IP.l}"/><circle cx="29.8" cy="16.5" r=".9" fill="${IP.d}"/><circle cx="34.2" cy="16.5" r=".9" fill="${IP.d}"/><path d="M29.5 20q2.5 2 5 0" stroke="${IP.d}" fill="none" stroke-width="1"/>`,
 ganesha:()=>box(32,52,20,20,4)+`<ellipse cx="25" cy="22" rx="4" ry="6" fill="${IP.r}"/><ellipse cx="39" cy="22" rx="4" ry="6" fill="${IP.l}"/><ellipse cx="32" cy="35" rx="11" ry="12" fill="${IP.l}"/><ellipse cx="36" cy="35" rx="7" ry="12" fill="${IP.r}" opacity=".6"/><circle cx="32" cy="21" r="7" fill="${IP.t}"/><path d="M32 24q-1 7 4 10" stroke="${IP.r}" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M27 14l5-8 5 8z" fill="#e0a43a"/><circle cx="29.5" cy="20" r=".9" fill="${IP.d}"/><circle cx="34.5" cy="20" r=".9" fill="${IP.d}"/>`,
 linga:()=>{let o=box(32,49,30,30,4)+rim(32,49,4,24,'#d8b88b')+water(32,49,4,18);o+=`<rect x="26" y="18" width="12" height="25" fill="#57453a"/><rect x="33" y="18" width="5" height="25" fill="#3f322a"/><ellipse cx="32" cy="43" rx="6" ry="3" fill="#57453a"/><ellipse cx="32" cy="18" rx="6" ry="3" fill="#7a6556"/><rect x="27.5" y="22" width="1.6" height="18" fill="#fff" opacity=".18"/>`;return o;},
 bazaar:()=>{let o=box(32,48,11,34,3);const rows=[3.5,-3.5];rows.forEach(d=>{for(let t=-14;t<=14;t+=5.6){const [x,y]=off(32,48,t,d);o+=box(x,y,2.4,2.4,11,3);}});o+=box(32,48,11,34,2.5,14);return o;},
 bull:()=>{let o=box(32,50,16,24,3);o+=box(33,49,9,18,8,3);const [hx,hy]=off(33,49,-9,0);o+=box(hx,hy,5.5,5.5,6,8)+`<path d="M${hx-4} ${hy-15}l-3-4M${hx+3} ${hy-17}l1-5" stroke="${IP.t}" stroke-width="1.6" stroke-linecap="round"/>`;const [bx,by]=off(33,49,4,0);o+=`<ellipse cx="${bx}" cy="${by-12}" rx="4.6" ry="3.2" fill="${IP.t}"/>`;return o;},
 chariot:()=>{let o=box(32,47,28,28,4);o+=`<g transform="translate(21 51) skewY(30) scale(.866 1)"><circle r="5.2" fill="${IP.d}"/><circle r="3.6" fill="${IP.l}"/><circle r="1.2" fill="${IP.d}"/></g><g transform="translate(43 51) skewY(-30) scale(.866 1)"><circle r="5.2" fill="${IP.d}"/><circle r="3.6" fill="${IP.r}"/><circle r="1.2" fill="${IP.d}"/></g>`;o+=box(32,46,14,14,9,4)+arch(32,46,14,14,4,'L',4,4,0,5)+arch(32,46,14,14,4,'R',4,4,0,5)+stack(32,46,[[10,3],[7,3],[4,3]],13);return o;}
};
const iconSVG=k=>`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">${(IC[k]||IC.temple)()}</svg>`;
