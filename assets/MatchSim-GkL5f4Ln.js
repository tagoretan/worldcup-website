import{p as Ir,k as tm,Y as zr,N as u,n as Ft,a5 as nm,d as ce,s as Rp,l as vh,o as Np,D as _h,_ as Pp,u as Cp,G as Mh,a4 as Ip,a2 as Xo,a3 as yh,v as Dp,P as Lp,y as yl,t as Sh,x as Gc,q as Eh,$ as Op,a1 as Up,W as Fp,E as ta,A as kp,r as zp,H as Bp,g as Hp,V as Gp,T as Vp,a0 as Wp,Q as Sl}from"./index-Boz8FKIk.js";import{m as Ks}from"./proxy-C3g-Lj9d.js";import{P as jp}from"./play-C0Kt8ksq.js";import{S as Xp}from"./sparkles-YskQmsyJ.js";import{A as Vc}from"./index-BTtvYaQo.js";import{T as wh,S as Kp}from"./target-MpqrI-_j.js";import{A as vr}from"./arrow-right-Bm4Puv4e.js";import{T as $p}from"./trophy-BDKtp7cj.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]],qp=Ir("bell-ring",Yp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Jp=Ir("chevron-down",Zp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],e0=Ir("flame",Qp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],n0=Ir("info",t0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]],s0=Ir("panel-right-close",i0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]],r0=Ir("panel-right-open",a0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],l0=Ir("sliders-vertical",o0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"m11 19-6-6",key:"s7kpr"}],["path",{d:"m5 21-2-2",key:"1kw20b"}],["path",{d:"m8 16-4 4",key:"1oqv8h"}],["path",{d:"M9.5 17.5 21 6V3h-3L6.5 14.5",key:"pkxemp"}]],Th=Ir("sword",c0),nr=(n,e,t)=>Math.max(e,Math.min(t,n)),Wr=(n,e={})=>{const t=e.qualityEdge??0,i=e.closePressure??1,s=n.risk/100,r=n.tempo/100,o=n.passingLength==="DIRECT"?1.35:n.passingLength==="SHORT"?.82:1,d=.9+r*.25,h=nr(1-t*.28,.62,1.42),f=nr(1+(i-1)*.08-t*.1,.82,1.35),b=(n.defensiveLine-50)/50,v=Math.max(0,b),p=Math.max(0,-b),_=n.pressing/100,y=n.pressingMode==="HIGH_PRESS"?.08:n.pressingMode==="LOW_BLOCK"?-.05:0,A=nr(.36+p*.36-v*.13+(1-_)*.15,.22,.88),M=Math.max(0,v-_*.42),x=n.pressing/100*.08+(n.pressingMode==="HIGH_PRESS"?.04:n.pressingMode==="LOW_BLOCK"?-.03:0),R=(n.defensiveLine-50)/100*.05,I=.86+n.pressing/100*.28+n.tempo/100*.12+(n.mentality==="ATTACKING"?.08:n.mentality==="DEFENSIVE"?-.04:0);return{riskFactor:s,tempoFactor:r,maxPassDistSq:n.passingLength==="SHORT"?900:n.passingLength==="DIRECT"?3600:2025,minPassDistSq:n.passingLength==="DIRECT"?196:0,passErrorMultiplier:o*d*(.82+s*.45)*h*f,killerPassChance:nr(.45+s*.45+t*.16,.18,.95),lobChance:nr((n.passingLength==="DIRECT"?.45:n.passingLength==="SHORT"?.1:.25)+t*.08,.04,.62),dribbleIntentChance:.35+s*.25,passToBetterChance:d0(n.buildUpStyle),forwardPassChance:u0(n.buildUpStyle),shootRiskMultiplier:.78+s*.55,longShotBonus:n.risk>=66?.18:0,conservativeShotMultiplier:n.risk<=34?.72:1,pressRadius:10+n.pressing/6+v*4-p*2,secondPressRadius:(n.pressingMode==="HIGH_PRESS"?10:n.pressingMode==="MID_BLOCK"?7:4.5)+v*2,markRadius:14+n.pressing/10+v*5+p*2,tackleAttemptBias:x+R+(e.tackleRankBoost??0)+(e.tackleProximityBoost??0)+(e.doubleTeamBoost??0)+t*.08+((e.tacklingAttribute??.9)-.7)*.1,lineFoulRisk:Math.max(0,n.defensiveLine-50)/100*.03,behindSpaceRisk:nr(.16+v*.38+_*.06-p*.1,.04,.74),boxProtection:nr(A+(n.mentality==="DEFENSIVE"?.08:n.mentality==="ATTACKING"?-.05:0),.18,.95),interceptionChance:nr(.18+_*.22+v*.16+y-p*.07+t*.05,.08,.66),throughBallVulnerability:nr(.14+v*.42+M*.14-A*.12,.04,.78),staminaWorkload:I}},d0=n=>n==="POSSESSION"?1:n==="DRIBBLE"?.5:.95,u0=n=>n==="POSSESSION"?.9:n==="DRIBBLE"?.45:.7,hi=(n,e=0,t=100)=>Math.max(e,Math.min(t,n)),h0=n=>{let e=0;for(let t=0;t<n.length;t+=1)e=e*31+n.charCodeAt(t)>>>0;return e},f0=n=>n>65?"DIRECT":n<35?"SHORT":"MIXED",m0=n=>n>=66?"ATTACKING":n<=34?"DEFENSIVE":"BALANCED",im=n=>n>=66?"HIGH_PRESS":n<=34?"LOW_BLOCK":"MID_BLOCK",p0=n=>n>=66?"WIDE":n<=34?"CENTRAL":"MIXED",x0=n=>n<=34?"POSSESSION":n>=66?"DRIBBLE":"BALANCED",dl=n=>{const e=hi(n.mentality??50),t=hi(n.pressing),i=hi(n.defensiveLine),s=hi(n.passingDirectness),r=hi(n.attackingWidth??50),o=hi(n.buildUpPlay??50),d=hi(n.creativeRisk??n.attackingInspiration??50);return{formation:n.formation||"4-3-3",mentality:m0(e),pressing:t,pressingMode:im(t),defensiveLine:i,passingLength:f0(s),buildUpStyle:x0(o),attackFocus:p0(r),width:hi(r),tempo:hi(38+s*.38+t*.18+e*.12),risk:d}},Ys=(n,e)=>{const t={...n,...e,pressing:hi(e.pressing??n.pressing),defensiveLine:hi(e.defensiveLine??n.defensiveLine),width:hi(e.width??n.width),tempo:hi(e.tempo??n.tempo),risk:hi(e.risk??n.risk)};return{...t,pressingMode:im(t.pressing)}},g0=(n,e)=>{const t=(n==null?void 0:n.squad)||[],s=(t.length?t.reduce((v,p)=>v+(Number.isFinite(p.overall)?p.overall:70),0)/t.length:Math.max(60,e-2))-e;if(n){const v=tm(n),p=hi(s*1.1,-10,10);return dl({...v,mentality:hi(v.mentality+p),pressing:hi(v.pressing+p*.55),defensiveLine:hi(v.defensiveLine+p*.45),creativeRisk:hi(v.creativeRisk+p*.55)})}const o=h0((n==null?void 0:n.name)||"opponent")%4,d=s>=2,h=s<=-4,f={formation:d?o===1?"4-2-3-1":"4-3-3":h?"5-3-2":o===2?"4-4-2":"4-3-3",mentality:hi(50+s*1.4+(d?8:h?-8:0)),pressing:hi(50+s*1.7+(o===0?14:o===3?-10:0)),defensiveLine:hi(50+s*1.3+(o===0?10:o===3?-16:0)),passingDirectness:hi(50+(o===2?18:o===1?-14:h?12:0)),attackingWidth:hi(50+(o===2?22:o===1?-12:0)),buildUpPlay:hi(50+(o===1?-20:o===2?8:0)),creativeRisk:hi(50+s*1.2+(o===1?8:o===3?-12:0))},b=dl(f);return o===1?Ys(b,{buildUpStyle:"POSSESSION",attackFocus:"CENTRAL",width:44}):o===2?Ys(b,{passingLength:"DIRECT",attackFocus:"WIDE",width:68,tempo:66}):o===3?Ys(b,{mentality:"DEFENSIVE",passingLength:"DIRECT",risk:38,tempo:46}):Ys(b,{mentality:d?"ATTACKING":b.mentality,buildUpStyle:"BALANCED"})},Ah=(n,e)=>{const t=(n==null?void 0:n.squad)||[],i=t.length?t.reduce((f,b)=>f+(Number.isFinite(b.overall)?b.overall:70),0)/t.length:Math.max(60,e),s=i-e,r=i>=82&&e>=82&&Math.abs(s)<3,o=s>=4,d=s<=-6,h={formation:d?"5-3-2":"4-3-3",mentality:r?58:hi(52+s*1.15+(o?6:d?-9:0)),pressing:r?58:hi(52+s*1.2+(o?5:d?-7:0)),defensiveLine:r?56:hi(51+s*1+(o?4:d?-8:0)),passingDirectness:d?56:50,attackingWidth:54,buildUpPlay:50,creativeRisk:r?60:hi(52+s*.8+(o?5:d?-8:0))};return Ys(dl(h),{buildUpStyle:"BALANCED",attackFocus:"MIXED",passingLength:d?"DIRECT":"MIXED"})},Rh=n=>{const e=n.pressingMode==="HIGH_PRESS"?"高位压迫":n.pressingMode==="LOW_BLOCK"?"低位防守":"中位拦截",t=n.attackFocus==="WIDE"?"边路进攻":n.attackFocus==="CENTRAL"?"中路渗透":"混合推进",i=n.passingLength==="DIRECT"?"直接出球":n.passingLength==="SHORT"?"短传组织":"混合传球",s=n.mentality==="ATTACKING"?"进攻心态":n.mentality==="DEFENSIVE"?"防守心态":"均衡心态";return`${e} / ${t} / ${i} / ${s}`};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _u="184",b0=0,Nh=1,v0=2,sc=1,_0=2,sl=3,Pr=0,qs=1,gs=2,ur=0,Co=1,Da=2,Ph=3,Ch=4,M0=5,Xr=100,y0=101,S0=102,E0=103,w0=104,T0=200,A0=201,R0=202,N0=203,wd=204,Td=205,P0=206,C0=207,I0=208,D0=209,L0=210,O0=211,U0=212,F0=213,k0=214,Ad=0,Rd=1,Nd=2,Lo=3,Pd=4,Cd=5,Id=6,Dd=7,sm=0,z0=1,B0=2,$a=0,am=1,rm=2,om=3,lm=4,cm=5,dm=6,um=7,hm=300,qr=301,Oo=302,Wc=303,jc=304,Sc=306,Ld=1e3,cr=1001,Od=1002,Es=1003,H0=1004,El=1005,bs=1006,Xc=1007,$r=1008,aa=1009,fm=1010,mm=1011,ul=1012,Mu=1013,qa=1014,Xa=1015,mr=1016,yu=1017,Su=1018,hl=1020,pm=35902,xm=35899,gm=1021,bm=1022,Ua=1023,pr=1026,Yr=1027,vm=1028,Eu=1029,Zr=1030,wu=1031,Tu=1033,ac=33776,rc=33777,oc=33778,lc=33779,Ud=35840,Fd=35841,kd=35842,zd=35843,Bd=36196,Hd=37492,Gd=37496,Vd=37488,Wd=37489,uc=37490,jd=37491,Xd=37808,Kd=37809,$d=37810,Yd=37811,qd=37812,Zd=37813,Jd=37814,Qd=37815,eu=37816,tu=37817,nu=37818,iu=37819,su=37820,au=37821,ru=36492,ou=36494,lu=36495,cu=36283,du=36284,hc=36285,uu=36286,G0=3200,hu=0,V0=1,Rr="",sa="srgb",fc="srgb-linear",mc="linear",xi="srgb",co=7680,Ih=519,W0=512,j0=513,X0=514,Au=515,K0=516,$0=517,Ru=518,Y0=519,fu=35044,Dh="300 es",Ka=2e3,fl=2001;function q0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Z0(){const n=pc("canvas");return n.style.display="block",n}const Lh={};function xc(...n){const e="THREE."+n.shift();console.log(e,...n)}function _m(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Jt(...n){n=_m(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Gn(...n){n=_m(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function mu(...n){const e=n.join(" ");e in Lh||(Lh[e]=!0,Jt(...n))}function J0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Q0={[Ad]:Rd,[Nd]:Id,[Pd]:Dd,[Lo]:Cd,[Rd]:Ad,[Id]:Nd,[Dd]:Pd,[Cd]:Lo};class Jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Cs=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oh=1234567;const rl=Math.PI/180,ml=180/Math.PI;function hr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cs[n&255]+Cs[n>>8&255]+Cs[n>>16&255]+Cs[n>>24&255]+"-"+Cs[e&255]+Cs[e>>8&255]+"-"+Cs[e>>16&15|64]+Cs[e>>24&255]+"-"+Cs[t&63|128]+Cs[t>>8&255]+"-"+Cs[t>>16&255]+Cs[t>>24&255]+Cs[i&255]+Cs[i>>8&255]+Cs[i>>16&255]+Cs[i>>24&255]).toLowerCase()}function Ln(n,e,t){return Math.max(e,Math.min(t,n))}function Nu(n,e){return(n%e+e)%e}function ex(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function tx(n,e,t){return n!==e?(t-n)/(e-n):0}function ol(n,e,t){return(1-t)*n+t*e}function nx(n,e,t,i){return ol(n,e,1-Math.exp(-t*i))}function ix(n,e=1){return e-Math.abs(Nu(n,e*2)-e)}function sx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ax(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function rx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ox(n,e){return n+Math.random()*(e-n)}function lx(n){return n*(.5-Math.random())}function cx(n){n!==void 0&&(Oh=n);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dx(n){return n*rl}function ux(n){return n*ml}function hx(n){return(n&n-1)===0&&n!==0}function fx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function px(n,e,t,i,s){const r=Math.cos,o=Math.sin,d=r(t/2),h=o(t/2),f=r((e+i)/2),b=o((e+i)/2),v=r((e-i)/2),p=o((e-i)/2),_=r((i-e)/2),y=o((i-e)/2);switch(s){case"XYX":n.set(d*b,h*v,h*p,d*f);break;case"YZY":n.set(h*p,d*b,h*v,d*f);break;case"ZXZ":n.set(h*v,h*p,d*b,d*f);break;case"XZX":n.set(d*b,h*y,h*_,d*f);break;case"YXY":n.set(h*_,d*b,h*y,d*f);break;case"ZYZ":n.set(h*y,h*_,d*b,d*f);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Oa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ui={DEG2RAD:rl,RAD2DEG:ml,generateUUID:hr,clamp:Ln,euclideanModulo:Nu,mapLinear:ex,inverseLerp:tx,lerp:ol,damp:nx,pingpong:ix,smoothstep:sx,smootherstep:ax,randInt:rx,randFloat:ox,randFloatSpread:lx,seededRandom:cx,degToRad:dx,radToDeg:ux,isPowerOfTwo:hx,ceilPowerOfTwo:fx,floorPowerOfTwo:mx,setQuaternionFromProperEuler:px,normalize:gi,denormalize:Oa},Bu=class Bu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ln(this.x,e.x,t.x),this.y=Ln(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ln(this.x,e,t),this.y=Ln(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ln(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bu.prototype.isVector2=!0;let xn=Bu;class ko{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,d){let h=i[s+0],f=i[s+1],b=i[s+2],v=i[s+3],p=r[o+0],_=r[o+1],y=r[o+2],A=r[o+3];if(v!==A||h!==p||f!==_||b!==y){let M=h*p+f*_+b*y+v*A;M<0&&(p=-p,_=-_,y=-y,A=-A,M=-M);let x=1-d;if(M<.9995){const R=Math.acos(M),I=Math.sin(R);x=Math.sin(x*R)/I,d=Math.sin(d*R)/I,h=h*x+p*d,f=f*x+_*d,b=b*x+y*d,v=v*x+A*d}else{h=h*x+p*d,f=f*x+_*d,b=b*x+y*d,v=v*x+A*d;const R=1/Math.sqrt(h*h+f*f+b*b+v*v);h*=R,f*=R,b*=R,v*=R}}e[t]=h,e[t+1]=f,e[t+2]=b,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,s,r,o){const d=i[s],h=i[s+1],f=i[s+2],b=i[s+3],v=r[o],p=r[o+1],_=r[o+2],y=r[o+3];return e[t]=d*y+b*v+h*_-f*p,e[t+1]=h*y+b*p+f*v-d*_,e[t+2]=f*y+b*_+d*p-h*v,e[t+3]=b*y-d*v-h*p-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,d=Math.cos,h=Math.sin,f=d(i/2),b=d(s/2),v=d(r/2),p=h(i/2),_=h(s/2),y=h(r/2);switch(o){case"XYZ":this._x=p*b*v+f*_*y,this._y=f*_*v-p*b*y,this._z=f*b*y+p*_*v,this._w=f*b*v-p*_*y;break;case"YXZ":this._x=p*b*v+f*_*y,this._y=f*_*v-p*b*y,this._z=f*b*y-p*_*v,this._w=f*b*v+p*_*y;break;case"ZXY":this._x=p*b*v-f*_*y,this._y=f*_*v+p*b*y,this._z=f*b*y+p*_*v,this._w=f*b*v-p*_*y;break;case"ZYX":this._x=p*b*v-f*_*y,this._y=f*_*v+p*b*y,this._z=f*b*y-p*_*v,this._w=f*b*v+p*_*y;break;case"YZX":this._x=p*b*v+f*_*y,this._y=f*_*v+p*b*y,this._z=f*b*y-p*_*v,this._w=f*b*v-p*_*y;break;case"XZY":this._x=p*b*v-f*_*y,this._y=f*_*v-p*b*y,this._z=f*b*y+p*_*v,this._w=f*b*v+p*_*y;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],d=t[5],h=t[9],f=t[2],b=t[6],v=t[10],p=i+d+v;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(b-h)*_,this._y=(r-f)*_,this._z=(o-s)*_}else if(i>d&&i>v){const _=2*Math.sqrt(1+i-d-v);this._w=(b-h)/_,this._x=.25*_,this._y=(s+o)/_,this._z=(r+f)/_}else if(d>v){const _=2*Math.sqrt(1+d-i-v);this._w=(r-f)/_,this._x=(s+o)/_,this._y=.25*_,this._z=(h+b)/_}else{const _=2*Math.sqrt(1+v-i-d);this._w=(o-s)/_,this._x=(r+f)/_,this._y=(h+b)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,d=t._x,h=t._y,f=t._z,b=t._w;return this._x=i*b+o*d+s*f-r*h,this._y=s*b+o*h+r*d-i*f,this._z=r*b+o*f+i*h-s*d,this._w=o*b-i*d-s*h-r*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,d=this.dot(e);d<0&&(i=-i,s=-s,r=-r,o=-o,d=-d);let h=1-t;if(d<.9995){const f=Math.acos(d),b=Math.sin(f);h=Math.sin(h*f)/b,t=Math.sin(t*f)/b,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+o*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Hu=class Hu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,d=e.z,h=e.w,f=2*(o*s-d*i),b=2*(d*t-r*s),v=2*(r*i-o*t);return this.x=t+h*f+o*v-d*b,this.y=i+h*b+d*f-r*v,this.z=s+h*v+r*b-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ln(this.x,e.x,t.x),this.y=Ln(this.y,e.y,t.y),this.z=Ln(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ln(this.x,e,t),this.y=Ln(this.y,e,t),this.z=Ln(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ln(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,d=t.y,h=t.z;return this.x=s*h-r*d,this.y=r*o-i*h,this.z=i*d-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hu.prototype.isVector3=!0;let z=Hu;const Kc=new z,Uh=new ko,Gu=class Gu{constructor(e,t,i,s,r,o,d,h,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,d,h,f)}set(e,t,i,s,r,o,d,h,f){const b=this.elements;return b[0]=e,b[1]=s,b[2]=d,b[3]=t,b[4]=r,b[5]=h,b[6]=i,b[7]=o,b[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],d=i[3],h=i[6],f=i[1],b=i[4],v=i[7],p=i[2],_=i[5],y=i[8],A=s[0],M=s[3],x=s[6],R=s[1],I=s[4],P=s[7],B=s[2],C=s[5],V=s[8];return r[0]=o*A+d*R+h*B,r[3]=o*M+d*I+h*C,r[6]=o*x+d*P+h*V,r[1]=f*A+b*R+v*B,r[4]=f*M+b*I+v*C,r[7]=f*x+b*P+v*V,r[2]=p*A+_*R+y*B,r[5]=p*M+_*I+y*C,r[8]=p*x+_*P+y*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],d=e[5],h=e[6],f=e[7],b=e[8];return t*o*b-t*d*f-i*r*b+i*d*h+s*r*f-s*o*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],d=e[5],h=e[6],f=e[7],b=e[8],v=b*o-d*f,p=d*h-b*r,_=f*r-o*h,y=t*v+i*p+s*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/y;return e[0]=v*A,e[1]=(s*f-b*i)*A,e[2]=(d*i-s*o)*A,e[3]=p*A,e[4]=(b*t-s*h)*A,e[5]=(s*r-d*t)*A,e[6]=_*A,e[7]=(i*h-f*t)*A,e[8]=(o*t-i*r)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,d){const h=Math.cos(r),f=Math.sin(r);return this.set(i*h,i*f,-i*(h*o+f*d)+o+e,-s*f,s*h,-s*(-f*o+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply($c.makeScale(e,t)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,t){return this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gu.prototype.isMatrix3=!0;let fn=Gu;const $c=new fn,Fh=new fn().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new fn().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xx(){const n={enabled:!0,workingColorSpace:fc,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xi&&(s.r=fr(s.r),s.g=fr(s.g),s.b=fr(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xi&&(s.r=Io(s.r),s.g=Io(s.g),s.b=Io(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rr?mc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return mu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return mu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fc]:{primaries:e,whitePoint:i,transfer:mc,toXYZ:Fh,fromXYZ:kh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sa},outputColorSpaceConfig:{drawingBufferColorSpace:sa}},[sa]:{primaries:e,whitePoint:i,transfer:xi,toXYZ:Fh,fromXYZ:kh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sa}}}),n}const Vn=xx();function fr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Io(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let uo;class gx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{uo===void 0&&(uo=pc("canvas")),uo.width=e.width,uo.height=e.height;const s=uo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=uo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fr(t[i]/255)*255):t[i]=fr(t[i]);return{data:t,width:e.width,height:e.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bx=0;class Pu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,d=s.length;o<d;o++)s[o].isDataTexture?r.push(Yc(s[o].image)):r.push(Yc(s[o]))}else r=Yc(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Yc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let vx=0;const qc=new z;class Os extends Jr{constructor(e=Os.DEFAULT_IMAGE,t=Os.DEFAULT_MAPPING,i=cr,s=cr,r=bs,o=$r,d=Ua,h=aa,f=Os.DEFAULT_ANISOTROPY,b=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=hr(),this.name="",this.source=new Pu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=f,this.format=d,this.internalFormat=null,this.type=h,this.offset=new xn(0,0),this.repeat=new xn(1,1),this.center=new xn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=b,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Jt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Jt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Os.DEFAULT_IMAGE=null;Os.DEFAULT_MAPPING=hm;Os.DEFAULT_ANISOTROPY=1;const Vu=class Vu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const h=e.elements,f=h[0],b=h[4],v=h[8],p=h[1],_=h[5],y=h[9],A=h[2],M=h[6],x=h[10];if(Math.abs(b-p)<.01&&Math.abs(v-A)<.01&&Math.abs(y-M)<.01){if(Math.abs(b+p)<.1&&Math.abs(v+A)<.1&&Math.abs(y+M)<.1&&Math.abs(f+_+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(f+1)/2,P=(_+1)/2,B=(x+1)/2,C=(b+p)/4,V=(v+A)/4,E=(y+M)/4;return I>P&&I>B?I<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(I),s=C/i,r=V/i):P>B?P<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(P),i=C/s,r=E/s):B<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),i=V/r,s=E/r),this.set(i,s,r,t),this}let R=Math.sqrt((M-y)*(M-y)+(v-A)*(v-A)+(p-b)*(p-b));return Math.abs(R)<.001&&(R=1),this.x=(M-y)/R,this.y=(v-A)/R,this.z=(p-b)/R,this.w=Math.acos((f+_+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ln(this.x,e.x,t.x),this.y=Ln(this.y,e.y,t.y),this.z=Ln(this.z,e.z,t.z),this.w=Ln(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ln(this.x,e,t),this.y=Ln(this.y,e,t),this.z=Ln(this.z,e,t),this.w=Ln(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ln(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vu.prototype.isVector4=!0;let Xi=Vu;class _x extends Jr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bs,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Xi(0,0,e,t),this.scissorTest=!1,this.viewport=new Xi(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Os(s),o=i.count;for(let d=0;d<o;d++)this.textures[d]=r.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:bs,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Pu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ya extends _x{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mm extends Os{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Es,this.minFilter=Es,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mx extends Os{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Es,this.minFilter=Es,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yc=class yc{constructor(e,t,i,s,r,o,d,h,f,b,v,p,_,y,A,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,d,h,f,b,v,p,_,y,A,M)}set(e,t,i,s,r,o,d,h,f,b,v,p,_,y,A,M){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=d,x[13]=h,x[2]=f,x[6]=b,x[10]=v,x[14]=p,x[3]=_,x[7]=y,x[11]=A,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ho.setFromMatrixColumn(e,0).length(),r=1/ho.setFromMatrixColumn(e,1).length(),o=1/ho.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),d=Math.sin(i),h=Math.cos(s),f=Math.sin(s),b=Math.cos(r),v=Math.sin(r);if(e.order==="XYZ"){const p=o*b,_=o*v,y=d*b,A=d*v;t[0]=h*b,t[4]=-h*v,t[8]=f,t[1]=_+y*f,t[5]=p-A*f,t[9]=-d*h,t[2]=A-p*f,t[6]=y+_*f,t[10]=o*h}else if(e.order==="YXZ"){const p=h*b,_=h*v,y=f*b,A=f*v;t[0]=p+A*d,t[4]=y*d-_,t[8]=o*f,t[1]=o*v,t[5]=o*b,t[9]=-d,t[2]=_*d-y,t[6]=A+p*d,t[10]=o*h}else if(e.order==="ZXY"){const p=h*b,_=h*v,y=f*b,A=f*v;t[0]=p-A*d,t[4]=-o*v,t[8]=y+_*d,t[1]=_+y*d,t[5]=o*b,t[9]=A-p*d,t[2]=-o*f,t[6]=d,t[10]=o*h}else if(e.order==="ZYX"){const p=o*b,_=o*v,y=d*b,A=d*v;t[0]=h*b,t[4]=y*f-_,t[8]=p*f+A,t[1]=h*v,t[5]=A*f+p,t[9]=_*f-y,t[2]=-f,t[6]=d*h,t[10]=o*h}else if(e.order==="YZX"){const p=o*h,_=o*f,y=d*h,A=d*f;t[0]=h*b,t[4]=A-p*v,t[8]=y*v+_,t[1]=v,t[5]=o*b,t[9]=-d*b,t[2]=-f*b,t[6]=_*v+y,t[10]=p-A*v}else if(e.order==="XZY"){const p=o*h,_=o*f,y=d*h,A=d*f;t[0]=h*b,t[4]=-v,t[8]=f*b,t[1]=p*v+A,t[5]=o*b,t[9]=_*v-y,t[2]=y*v-_,t[6]=d*b,t[10]=A*v+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yx,e,Sx)}lookAt(e,t,i){const s=this.elements;return na.subVectors(e,t),na.lengthSq()===0&&(na.z=1),na.normalize(),_r.crossVectors(i,na),_r.lengthSq()===0&&(Math.abs(i.z)===1?na.x+=1e-4:na.z+=1e-4,na.normalize(),_r.crossVectors(i,na)),_r.normalize(),wl.crossVectors(na,_r),s[0]=_r.x,s[4]=wl.x,s[8]=na.x,s[1]=_r.y,s[5]=wl.y,s[9]=na.y,s[2]=_r.z,s[6]=wl.z,s[10]=na.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],d=i[4],h=i[8],f=i[12],b=i[1],v=i[5],p=i[9],_=i[13],y=i[2],A=i[6],M=i[10],x=i[14],R=i[3],I=i[7],P=i[11],B=i[15],C=s[0],V=s[4],E=s[8],D=s[12],F=s[1],k=s[5],Y=s[9],ue=s[13],ge=s[2],$=s[6],ae=s[10],me=s[14],Ce=s[3],Ue=s[7],tt=s[11],Ee=s[15];return r[0]=o*C+d*F+h*ge+f*Ce,r[4]=o*V+d*k+h*$+f*Ue,r[8]=o*E+d*Y+h*ae+f*tt,r[12]=o*D+d*ue+h*me+f*Ee,r[1]=b*C+v*F+p*ge+_*Ce,r[5]=b*V+v*k+p*$+_*Ue,r[9]=b*E+v*Y+p*ae+_*tt,r[13]=b*D+v*ue+p*me+_*Ee,r[2]=y*C+A*F+M*ge+x*Ce,r[6]=y*V+A*k+M*$+x*Ue,r[10]=y*E+A*Y+M*ae+x*tt,r[14]=y*D+A*ue+M*me+x*Ee,r[3]=R*C+I*F+P*ge+B*Ce,r[7]=R*V+I*k+P*$+B*Ue,r[11]=R*E+I*Y+P*ae+B*tt,r[15]=R*D+I*ue+P*me+B*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],d=e[5],h=e[9],f=e[13],b=e[2],v=e[6],p=e[10],_=e[14],y=e[3],A=e[7],M=e[11],x=e[15],R=h*_-f*p,I=d*_-f*v,P=d*p-h*v,B=o*_-f*b,C=o*p-h*b,V=o*v-d*b;return t*(A*R-M*I+x*P)-i*(y*R-M*B+x*C)+s*(y*I-A*B+x*V)-r*(y*P-A*C+M*V)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],d=e[5],h=e[6],f=e[7],b=e[8],v=e[9],p=e[10],_=e[11],y=e[12],A=e[13],M=e[14],x=e[15],R=t*d-i*o,I=t*h-s*o,P=t*f-r*o,B=i*h-s*d,C=i*f-r*d,V=s*f-r*h,E=b*A-v*y,D=b*M-p*y,F=b*x-_*y,k=v*M-p*A,Y=v*x-_*A,ue=p*x-_*M,ge=R*ue-I*Y+P*k+B*F-C*D+V*E;if(ge===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/ge;return e[0]=(d*ue-h*Y+f*k)*$,e[1]=(s*Y-i*ue-r*k)*$,e[2]=(A*V-M*C+x*B)*$,e[3]=(p*C-v*V-_*B)*$,e[4]=(h*F-o*ue-f*D)*$,e[5]=(t*ue-s*F+r*D)*$,e[6]=(M*P-y*V-x*I)*$,e[7]=(b*V-p*P+_*I)*$,e[8]=(o*Y-d*F+f*E)*$,e[9]=(i*F-t*Y-r*E)*$,e[10]=(y*C-A*P+x*R)*$,e[11]=(v*P-b*C-_*R)*$,e[12]=(d*D-o*k-h*E)*$,e[13]=(t*k-i*D+s*E)*$,e[14]=(A*I-y*B-M*R)*$,e[15]=(b*B-v*I+p*R)*$,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,d=e.y,h=e.z,f=r*o,b=r*d;return this.set(f*o+i,f*d-s*h,f*h+s*d,0,f*d+s*h,b*d+i,b*h-s*o,0,f*h-s*d,b*h+s*o,r*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,d=t._z,h=t._w,f=r+r,b=o+o,v=d+d,p=r*f,_=r*b,y=r*v,A=o*b,M=o*v,x=d*v,R=h*f,I=h*b,P=h*v,B=i.x,C=i.y,V=i.z;return s[0]=(1-(A+x))*B,s[1]=(_+P)*B,s[2]=(y-I)*B,s[3]=0,s[4]=(_-P)*C,s[5]=(1-(p+x))*C,s[6]=(M+R)*C,s[7]=0,s[8]=(y+I)*V,s[9]=(M-R)*V,s[10]=(1-(p+A))*V,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ho.set(s[0],s[1],s[2]).length();const d=ho.set(s[4],s[5],s[6]).length(),h=ho.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Pa.copy(this);const f=1/o,b=1/d,v=1/h;return Pa.elements[0]*=f,Pa.elements[1]*=f,Pa.elements[2]*=f,Pa.elements[4]*=b,Pa.elements[5]*=b,Pa.elements[6]*=b,Pa.elements[8]*=v,Pa.elements[9]*=v,Pa.elements[10]*=v,t.setFromRotationMatrix(Pa),i.x=o,i.y=d,i.z=h,this}makePerspective(e,t,i,s,r,o,d=Ka,h=!1){const f=this.elements,b=2*r/(t-e),v=2*r/(i-s),p=(t+e)/(t-e),_=(i+s)/(i-s);let y,A;if(h)y=r/(o-r),A=o*r/(o-r);else if(d===Ka)y=-(o+r)/(o-r),A=-2*o*r/(o-r);else if(d===fl)y=-o/(o-r),A=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=b,f[4]=0,f[8]=p,f[12]=0,f[1]=0,f[5]=v,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=A,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,r,o,d=Ka,h=!1){const f=this.elements,b=2/(t-e),v=2/(i-s),p=-(t+e)/(t-e),_=-(i+s)/(i-s);let y,A;if(h)y=1/(o-r),A=o/(o-r);else if(d===Ka)y=-2/(o-r),A=-(o+r)/(o-r);else if(d===fl)y=-1/(o-r),A=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=b,f[4]=0,f[8]=0,f[12]=p,f[1]=0,f[5]=v,f[9]=0,f[13]=_,f[2]=0,f[6]=0,f[10]=y,f[14]=A,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};yc.prototype.isMatrix4=!0;let Fi=yc;const ho=new z,Pa=new Fi,yx=new z(0,0,0),Sx=new z(1,1,1),_r=new z,wl=new z,na=new z,zh=new Fi,Bh=new ko;class Cr{constructor(e=0,t=0,i=0,s=Cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],d=s[8],h=s[1],f=s[5],b=s[9],v=s[2],p=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-b,_),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(d,_),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Ln(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-b,f),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(d,_));break;case"XZY":this._z=Math.asin(-Ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,f),this._y=Math.atan2(d,r)):(this._x=Math.atan2(-b,_),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cr.DEFAULT_ORDER="XYZ";class Cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ex=0;const Hh=new z,fo=new ko,ir=new Fi,Tl=new z,Ko=new z,wx=new z,Tx=new ko,Gh=new z(1,0,0),Vh=new z(0,1,0),Wh=new z(0,0,1),jh={type:"added"},Ax={type:"removed"},mo={type:"childadded",child:null},Zc={type:"childremoved",child:null};class Qi extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qi.DEFAULT_UP.clone();const e=new z,t=new Cr,i=new ko,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fi},normalMatrix:{value:new fn}}),this.matrix=new Fi,this.matrixWorld=new Fi,this.matrixAutoUpdate=Qi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fo.setFromAxisAngle(e,t),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,t){return fo.setFromAxisAngle(e,t),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis(Wh,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis(Wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Tl.copy(e):Tl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Ko,Tl,this.up):ir.lookAt(Tl,Ko,this.up),this.quaternion.setFromRotationMatrix(ir),s&&(ir.extractRotation(s.matrixWorld),fo.setFromRotationMatrix(ir),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Gn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),mo.child=e,this.dispatchEvent(mo),mo.child=null):Gn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ax),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),mo.child=e,this.dispatchEvent(mo),mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,Tx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let f=0,b=h.length;f<b;f++){const v=h[f];r(e.shapes,v)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,f=this.material.length;h<f;h++)d.push(r(e.materials,this.material[h]));s.material=d}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];s.animations.push(r(e.animations,h))}}if(t){const d=o(e.geometries),h=o(e.materials),f=o(e.textures),b=o(e.images),v=o(e.shapes),p=o(e.skeletons),_=o(e.animations),y=o(e.nodes);d.length>0&&(i.geometries=d),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),b.length>0&&(i.images=b),v.length>0&&(i.shapes=v),p.length>0&&(i.skeletons=p),_.length>0&&(i.animations=_),y.length>0&&(i.nodes=y)}return i.object=s,i;function o(d){const h=[];for(const f in d){const b=d[f];delete b.metadata,h.push(b)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Qi.DEFAULT_UP=new z(0,1,0);Qi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $s extends Qi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rx={type:"move"};class Jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const d=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const A of e.hand.values()){const M=t.getJointPose(A,i),x=this._getHandJoint(f,A);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const b=f.joints["index-finger-tip"],v=f.joints["thumb-tip"],p=b.position.distanceTo(v.position),_=.02,y=.005;f.inputState.pinching&&p>_+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&p<=_-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Rx)))}return d!==null&&(d.visible=s!==null),h!==null&&(h.visible=r!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $s;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ym={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Al={h:0,s:0,l:0};function Qc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class In{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sa){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vn.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Vn.workingColorSpace){return this.r=e,this.g=t,this.b=i,Vn.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Vn.workingColorSpace){if(e=Nu(e,1),t=Ln(t,0,1),i=Ln(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Qc(o,r,e+1/3),this.g=Qc(o,r,e),this.b=Qc(o,r,e-1/3)}return Vn.colorSpaceToWorking(this,s),this}setStyle(e,t=sa){function i(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],d=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Jt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Jt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sa){const i=ym[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Jt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sa){return Vn.workingToColorSpace(Is.copy(this),e),Math.round(Ln(Is.r*255,0,255))*65536+Math.round(Ln(Is.g*255,0,255))*256+Math.round(Ln(Is.b*255,0,255))}getHexString(e=sa){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vn.workingColorSpace){Vn.workingToColorSpace(Is.copy(this),t);const i=Is.r,s=Is.g,r=Is.b,o=Math.max(i,s,r),d=Math.min(i,s,r);let h,f;const b=(d+o)/2;if(d===o)h=0,f=0;else{const v=o-d;switch(f=b<=.5?v/(o+d):v/(2-o-d),o){case i:h=(s-r)/v+(s<r?6:0);break;case s:h=(r-i)/v+2;break;case r:h=(i-s)/v+4;break}h/=6}return e.h=h,e.s=f,e.l=b,e}getRGB(e,t=Vn.workingColorSpace){return Vn.workingToColorSpace(Is.copy(this),t),e.r=Is.r,e.g=Is.g,e.b=Is.b,e}getStyle(e=sa){Vn.workingToColorSpace(Is.copy(this),e);const t=Is.r,i=Is.g,s=Is.b;return e!==sa?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Al);const i=ol(Mr.h,Al.h,t),s=ol(Mr.s,Al.s,t),r=ol(Mr.l,Al.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Is=new In;In.NAMES=ym;class Iu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new In(e),this.density=t}clone(){return new Iu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nx extends Qi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cr,this.environmentIntensity=1,this.environmentRotation=new Cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ca=new z,sr=new z,ed=new z,ar=new z,po=new z,xo=new z,Xh=new z,td=new z,nd=new z,id=new z,sd=new Xi,ad=new Xi,rd=new Xi;class _a{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ca.subVectors(e,t),s.cross(Ca);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ca.subVectors(s,t),sr.subVectors(i,t),ed.subVectors(e,t);const o=Ca.dot(Ca),d=Ca.dot(sr),h=Ca.dot(ed),f=sr.dot(sr),b=sr.dot(ed),v=o*f-d*d;if(v===0)return r.set(0,0,0),null;const p=1/v,_=(f*h-d*b)*p,y=(o*b-d*h)*p;return r.set(1-_-y,y,_)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,i,s,r,o,d,h){return this.getBarycoord(e,t,i,s,ar)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,ar.x),h.addScaledVector(o,ar.y),h.addScaledVector(d,ar.z),h)}static getInterpolatedAttribute(e,t,i,s,r,o){return sd.setScalar(0),ad.setScalar(0),rd.setScalar(0),sd.fromBufferAttribute(e,t),ad.fromBufferAttribute(e,i),rd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sd,r.x),o.addScaledVector(ad,r.y),o.addScaledVector(rd,r.z),o}static isFrontFacing(e,t,i,s){return Ca.subVectors(i,t),sr.subVectors(e,t),Ca.cross(sr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ca.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ca.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return _a.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return _a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,d;po.subVectors(s,i),xo.subVectors(r,i),td.subVectors(e,i);const h=po.dot(td),f=xo.dot(td);if(h<=0&&f<=0)return t.copy(i);nd.subVectors(e,s);const b=po.dot(nd),v=xo.dot(nd);if(b>=0&&v<=b)return t.copy(s);const p=h*v-b*f;if(p<=0&&h>=0&&b<=0)return o=h/(h-b),t.copy(i).addScaledVector(po,o);id.subVectors(e,r);const _=po.dot(id),y=xo.dot(id);if(y>=0&&_<=y)return t.copy(r);const A=_*f-h*y;if(A<=0&&f>=0&&y<=0)return d=f/(f-y),t.copy(i).addScaledVector(xo,d);const M=b*y-_*v;if(M<=0&&v-b>=0&&_-y>=0)return Xh.subVectors(r,s),d=(v-b)/(v-b+(_-y)),t.copy(s).addScaledVector(Xh,d);const x=1/(M+A+p);return o=A*x,d=p*x,t.copy(i).addScaledVector(po,o).addScaledVector(xo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pl{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ia.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ia.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ia.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,d=r.count;o<d;o++)e.isMesh===!0?e.getVertexPosition(o,Ia):Ia.fromBufferAttribute(r,o),Ia.applyMatrix4(e.matrixWorld),this.expandByPoint(Ia);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rl.copy(i.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ia),Ia.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Nl.subVectors(this.max,$o),go.subVectors(e.a,$o),bo.subVectors(e.b,$o),vo.subVectors(e.c,$o),yr.subVectors(bo,go),Sr.subVectors(vo,bo),Br.subVectors(go,vo);let t=[0,-yr.z,yr.y,0,-Sr.z,Sr.y,0,-Br.z,Br.y,yr.z,0,-yr.x,Sr.z,0,-Sr.x,Br.z,0,-Br.x,-yr.y,yr.x,0,-Sr.y,Sr.x,0,-Br.y,Br.x,0];return!od(t,go,bo,vo,Nl)||(t=[1,0,0,0,1,0,0,0,1],!od(t,go,bo,vo,Nl))?!1:(Pl.crossVectors(yr,Sr),t=[Pl.x,Pl.y,Pl.z],od(t,go,bo,vo,Nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ia).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ia).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new z,new z,new z,new z,new z,new z,new z,new z],Ia=new z,Rl=new pl,go=new z,bo=new z,vo=new z,yr=new z,Sr=new z,Br=new z,$o=new z,Nl=new z,Pl=new z,Hr=new z;function od(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Hr.fromArray(n,r);const d=s.x*Math.abs(Hr.x)+s.y*Math.abs(Hr.y)+s.z*Math.abs(Hr.z),h=e.dot(Hr),f=t.dot(Hr),b=i.dot(Hr);if(Math.max(-Math.max(h,f,b),Math.min(h,f,b))>d)return!1}return!0}const Ji=new z,Cl=new xn;let Px=0;class Ma extends Jr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Px++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fu,this.updateRanges=[],this.gpuType=Xa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cl.fromBufferAttribute(this,t),Cl.applyMatrix3(e),this.setXY(t,Cl.x,Cl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXYZ(t,Ji.x,Ji.y,Ji.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix4(e),this.setXYZ(t,Ji.x,Ji.y,Ji.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ji.fromBufferAttribute(this,t),Ji.applyNormalMatrix(e),this.setXYZ(t,Ji.x,Ji.y,Ji.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ji.fromBufferAttribute(this,t),Ji.transformDirection(e),this.setXYZ(t,Ji.x,Ji.y,Ji.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Oa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oa(t,this.array)),t}setX(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oa(t,this.array)),t}setY(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oa(t,this.array)),t}setW(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gi(t,this.array),i=gi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gi(t,this.array),i=gi(i,this.array),s=gi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gi(t,this.array),i=gi(i,this.array),s=gi(s,this.array),r=gi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Sm extends Ma{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Em extends Ma{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ci extends Ma{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Cx=new pl,Yo=new z,ld=new z;class xl{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const t=Yo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Yo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(ld)),this.expandByPoint(Yo.copy(e.center).sub(ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ix=0;const ga=new Fi,cd=new Qi,_o=new z,ia=new pl,qo=new pl,ps=new z;class ts extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q0(e)?Em:Sm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new fn().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ga.makeRotationFromQuaternion(e),this.applyMatrix4(ga),this}rotateX(e){return ga.makeRotationX(e),this.applyMatrix4(ga),this}rotateY(e){return ga.makeRotationY(e),this.applyMatrix4(ga),this}rotateZ(e){return ga.makeRotationZ(e),this.applyMatrix4(ga),this}translate(e,t,i){return ga.makeTranslation(e,t,i),this.applyMatrix4(ga),this}scale(e,t,i){return ga.makeScale(e,t,i),this.applyMatrix4(ga),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ci(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ia.setFromBufferAttribute(r),this.morphTargetsRelative?(ps.addVectors(this.boundingBox.min,ia.min),this.boundingBox.expandByPoint(ps),ps.addVectors(this.boundingBox.max,ia.max),this.boundingBox.expandByPoint(ps)):(this.boundingBox.expandByPoint(ia.min),this.boundingBox.expandByPoint(ia.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(ia.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const d=t[r];qo.setFromBufferAttribute(d),this.morphTargetsRelative?(ps.addVectors(ia.min,qo.min),ia.expandByPoint(ps),ps.addVectors(ia.max,qo.max),ia.expandByPoint(ps)):(ia.expandByPoint(qo.min),ia.expandByPoint(qo.max))}ia.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ps.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ps));if(t)for(let r=0,o=t.length;r<o;r++){const d=t[r],h=this.morphTargetsRelative;for(let f=0,b=d.count;f<b;f++)ps.fromBufferAttribute(d,f),h&&(_o.fromBufferAttribute(e,f),ps.add(_o)),s=Math.max(s,i.distanceToSquared(ps))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Gn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ma(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),d=[],h=[];for(let E=0;E<i.count;E++)d[E]=new z,h[E]=new z;const f=new z,b=new z,v=new z,p=new xn,_=new xn,y=new xn,A=new z,M=new z;function x(E,D,F){f.fromBufferAttribute(i,E),b.fromBufferAttribute(i,D),v.fromBufferAttribute(i,F),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,D),y.fromBufferAttribute(r,F),b.sub(f),v.sub(f),_.sub(p),y.sub(p);const k=1/(_.x*y.y-y.x*_.y);isFinite(k)&&(A.copy(b).multiplyScalar(y.y).addScaledVector(v,-_.y).multiplyScalar(k),M.copy(v).multiplyScalar(_.x).addScaledVector(b,-y.x).multiplyScalar(k),d[E].add(A),d[D].add(A),d[F].add(A),h[E].add(M),h[D].add(M),h[F].add(M))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let E=0,D=R.length;E<D;++E){const F=R[E],k=F.start,Y=F.count;for(let ue=k,ge=k+Y;ue<ge;ue+=3)x(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const I=new z,P=new z,B=new z,C=new z;function V(E){B.fromBufferAttribute(s,E),C.copy(B);const D=d[E];I.copy(D),I.sub(B.multiplyScalar(B.dot(D))).normalize(),P.crossVectors(C,D);const k=P.dot(h[E])<0?-1:1;o.setXYZW(E,I.x,I.y,I.z,k)}for(let E=0,D=R.length;E<D;++E){const F=R[E],k=F.start,Y=F.count;for(let ue=k,ge=k+Y;ue<ge;ue+=3)V(e.getX(ue+0)),V(e.getX(ue+1)),V(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ma(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,_=i.count;p<_;p++)i.setXYZ(p,0,0,0);const s=new z,r=new z,o=new z,d=new z,h=new z,f=new z,b=new z,v=new z;if(e)for(let p=0,_=e.count;p<_;p+=3){const y=e.getX(p+0),A=e.getX(p+1),M=e.getX(p+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,A),o.fromBufferAttribute(t,M),b.subVectors(o,r),v.subVectors(s,r),b.cross(v),d.fromBufferAttribute(i,y),h.fromBufferAttribute(i,A),f.fromBufferAttribute(i,M),d.add(b),h.add(b),f.add(b),i.setXYZ(y,d.x,d.y,d.z),i.setXYZ(A,h.x,h.y,h.z),i.setXYZ(M,f.x,f.y,f.z)}else for(let p=0,_=t.count;p<_;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),b.subVectors(o,r),v.subVectors(s,r),b.cross(v),i.setXYZ(p+0,b.x,b.y,b.z),i.setXYZ(p+1,b.x,b.y,b.z),i.setXYZ(p+2,b.x,b.y,b.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ps.fromBufferAttribute(e,t),ps.normalize(),e.setXYZ(t,ps.x,ps.y,ps.z)}toNonIndexed(){function e(d,h){const f=d.array,b=d.itemSize,v=d.normalized,p=new f.constructor(h.length*b);let _=0,y=0;for(let A=0,M=h.length;A<M;A++){d.isInterleavedBufferAttribute?_=h[A]*d.data.stride+d.offset:_=h[A]*b;for(let x=0;x<b;x++)p[y++]=f[_++]}return new Ma(p,b,v)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ts,i=this.index.array,s=this.attributes;for(const d in s){const h=s[d],f=e(h,i);t.setAttribute(d,f)}const r=this.morphAttributes;for(const d in r){const h=[],f=r[d];for(let b=0,v=f.length;b<v;b++){const p=f[b],_=e(p,i);h.push(_)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let d=0,h=o.length;d<h;d++){const f=o[d];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let r=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],b=[];for(let v=0,p=f.length;v<p;v++){const _=f[v];b.push(_.toJSON(e.data))}b.length>0&&(s[h]=b,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const f in s){const b=s[f];this.setAttribute(f,b.clone(t))}const r=e.morphAttributes;for(const f in r){const b=[],v=r[f];for(let p=0,_=v.length;p<_;p++)b.push(v[p].clone(t));this.morphAttributes[f]=b}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,b=o.length;f<b;f++){const v=o[f];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fu,this.updateRanges=[],this.version=0,this.uuid=hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const js=new z;class gc{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)js.fromBufferAttribute(this,t),js.applyMatrix4(e),this.setXYZ(t,js.x,js.y,js.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)js.fromBufferAttribute(this,t),js.applyNormalMatrix(e),this.setXYZ(t,js.x,js.y,js.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)js.fromBufferAttribute(this,t),js.transformDirection(e),this.setXYZ(t,js.x,js.y,js.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Oa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gi(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gi(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gi(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gi(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gi(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Oa(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Oa(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Oa(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Oa(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gi(t,this.array),i=gi(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gi(t,this.array),i=gi(i,this.array),s=gi(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gi(t,this.array),i=gi(i,this.array),s=gi(s,this.array),r=gi(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){xc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ma(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Lx=0;class Dr extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=Co,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=Td,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new In(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Jt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Jt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Co&&(i.blending=this.blending),this.side!==Pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wd&&(i.blendSrc=this.blendSrc),this.blendDst!==Td&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ih&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==co&&(i.stencilFail=this.stencilFail),this.stencilZFail!==co&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==co&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const d in r){const h=r[d];delete h.metadata,o.push(h)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wm extends Dr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new In(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Mo;const Zo=new z,yo=new z,So=new z,Eo=new xn,Jo=new xn,Tm=new Fi,Il=new z,Qo=new z,Dl=new z,Kh=new xn,dd=new xn,$h=new xn;class Ox extends Qi{constructor(e=new wm){if(super(),this.isSprite=!0,this.type="Sprite",Mo===void 0){Mo=new ts;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Dx(t,5);Mo.setIndex([0,1,2,0,2,3]),Mo.setAttribute("position",new gc(i,3,0,!1)),Mo.setAttribute("uv",new gc(i,2,3,!1))}this.geometry=Mo,this.material=e,this.center=new xn(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Gn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yo.setFromMatrixScale(this.matrixWorld),Tm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),So.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yo.multiplyScalar(-So.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Ll(Il.set(-.5,-.5,0),So,o,yo,s,r),Ll(Qo.set(.5,-.5,0),So,o,yo,s,r),Ll(Dl.set(.5,.5,0),So,o,yo,s,r),Kh.set(0,0),dd.set(1,0),$h.set(1,1);let d=e.ray.intersectTriangle(Il,Qo,Dl,!1,Zo);if(d===null&&(Ll(Qo.set(-.5,.5,0),So,o,yo,s,r),dd.set(0,1),d=e.ray.intersectTriangle(Il,Dl,Qo,!1,Zo),d===null))return;const h=e.ray.origin.distanceTo(Zo);h<e.near||h>e.far||t.push({distance:h,point:Zo.clone(),uv:_a.getInterpolation(Zo,Il,Qo,Dl,Kh,dd,$h,new xn),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ll(n,e,t,i,s,r){Eo.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Jo.x=r*Eo.x-s*Eo.y,Jo.y=s*Eo.x+r*Eo.y):Jo.copy(Eo),n.copy(e),n.x+=Jo.x,n.y+=Jo.y,n.applyMatrix4(Tm)}const or=new z,ud=new z,Ol=new z,Er=new z,hd=new z,Ul=new z,fd=new z;class Ec{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ud.copy(e).add(t).multiplyScalar(.5),Ol.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(ud);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ol),d=Er.dot(this.direction),h=-Er.dot(Ol),f=Er.lengthSq(),b=Math.abs(1-o*o);let v,p,_,y;if(b>0)if(v=o*h-d,p=o*d-h,y=r*b,v>=0)if(p>=-y)if(p<=y){const A=1/b;v*=A,p*=A,_=v*(v+o*p+2*d)+p*(o*v+p+2*h)+f}else p=r,v=Math.max(0,-(o*p+d)),_=-v*v+p*(p+2*h)+f;else p=-r,v=Math.max(0,-(o*p+d)),_=-v*v+p*(p+2*h)+f;else p<=-y?(v=Math.max(0,-(-o*r+d)),p=v>0?-r:Math.min(Math.max(-r,-h),r),_=-v*v+p*(p+2*h)+f):p<=y?(v=0,p=Math.min(Math.max(-r,-h),r),_=p*(p+2*h)+f):(v=Math.max(0,-(o*r+d)),p=v>0?r:Math.min(Math.max(-r,-h),r),_=-v*v+p*(p+2*h)+f);else p=o>0?-r:r,v=Math.max(0,-(o*p+d)),_=-v*v+p*(p+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(ud).addScaledVector(Ol,p),_}intersectSphere(e,t){or.subVectors(e.center,this.origin);const i=or.dot(this.direction),s=or.dot(or)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),d=i-o,h=i+o;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,d,h;const f=1/this.direction.x,b=1/this.direction.y,v=1/this.direction.z,p=this.origin;return f>=0?(i=(e.min.x-p.x)*f,s=(e.max.x-p.x)*f):(i=(e.max.x-p.x)*f,s=(e.min.x-p.x)*f),b>=0?(r=(e.min.y-p.y)*b,o=(e.max.y-p.y)*b):(r=(e.max.y-p.y)*b,o=(e.min.y-p.y)*b),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),v>=0?(d=(e.min.z-p.z)*v,h=(e.max.z-p.z)*v):(d=(e.max.z-p.z)*v,h=(e.min.z-p.z)*v),i>h||d>s)||((d>i||i!==i)&&(i=d),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,i,s,r){hd.subVectors(t,e),Ul.subVectors(i,e),fd.crossVectors(hd,Ul);let o=this.direction.dot(fd),d;if(o>0){if(s)return null;d=1}else if(o<0)d=-1,o=-o;else return null;Er.subVectors(this.origin,e);const h=d*this.direction.dot(Ul.crossVectors(Er,Ul));if(h<0)return null;const f=d*this.direction.dot(hd.cross(Er));if(f<0||h+f>o)return null;const b=-d*Er.dot(fd);return b<0?null:this.at(b/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ls extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new In(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.combine=sm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yh=new Fi,Gr=new Ec,Fl=new xl,qh=new z,kl=new z,zl=new z,Bl=new z,md=new z,Hl=new z,Zh=new z,Gl=new z;class zt extends Qi{constructor(e=new ts,t=new Ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const d=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(r&&d){Hl.set(0,0,0);for(let h=0,f=r.length;h<f;h++){const b=d[h],v=r[h];b!==0&&(md.fromBufferAttribute(v,e),o?Hl.addScaledVector(md,b):Hl.addScaledVector(md.sub(t),b))}t.add(Hl)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(r),Gr.copy(e.ray).recast(e.near),!(Fl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Fl,qh)===null||Gr.origin.distanceToSquared(qh)>(e.far-e.near)**2))&&(Yh.copy(r).invert(),Gr.copy(e.ray).applyMatrix4(Yh),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,d=r.index,h=r.attributes.position,f=r.attributes.uv,b=r.attributes.uv1,v=r.attributes.normal,p=r.groups,_=r.drawRange;if(d!==null)if(Array.isArray(o))for(let y=0,A=p.length;y<A;y++){const M=p[y],x=o[M.materialIndex],R=Math.max(M.start,_.start),I=Math.min(d.count,Math.min(M.start+M.count,_.start+_.count));for(let P=R,B=I;P<B;P+=3){const C=d.getX(P),V=d.getX(P+1),E=d.getX(P+2);s=Vl(this,x,e,i,f,b,v,C,V,E),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{const y=Math.max(0,_.start),A=Math.min(d.count,_.start+_.count);for(let M=y,x=A;M<x;M+=3){const R=d.getX(M),I=d.getX(M+1),P=d.getX(M+2);s=Vl(this,o,e,i,f,b,v,R,I,P),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let y=0,A=p.length;y<A;y++){const M=p[y],x=o[M.materialIndex],R=Math.max(M.start,_.start),I=Math.min(h.count,Math.min(M.start+M.count,_.start+_.count));for(let P=R,B=I;P<B;P+=3){const C=P,V=P+1,E=P+2;s=Vl(this,x,e,i,f,b,v,C,V,E),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{const y=Math.max(0,_.start),A=Math.min(h.count,_.start+_.count);for(let M=y,x=A;M<x;M+=3){const R=M,I=M+1,P=M+2;s=Vl(this,o,e,i,f,b,v,R,I,P),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}}}function Ux(n,e,t,i,s,r,o,d){let h;if(e.side===qs?h=i.intersectTriangle(o,r,s,!0,d):h=i.intersectTriangle(s,r,o,e.side===Pr,d),h===null)return null;Gl.copy(d),Gl.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(Gl);return f<t.near||f>t.far?null:{distance:f,point:Gl.clone(),object:n}}function Vl(n,e,t,i,s,r,o,d,h,f){n.getVertexPosition(d,kl),n.getVertexPosition(h,zl),n.getVertexPosition(f,Bl);const b=Ux(n,e,t,i,kl,zl,Bl,Zh);if(b){const v=new z;_a.getBarycoord(Zh,kl,zl,Bl,v),s&&(b.uv=_a.getInterpolatedAttribute(s,d,h,f,v,new xn)),r&&(b.uv1=_a.getInterpolatedAttribute(r,d,h,f,v,new xn)),o&&(b.normal=_a.getInterpolatedAttribute(o,d,h,f,v,new z),b.normal.dot(i.direction)>0&&b.normal.multiplyScalar(-1));const p={a:d,b:h,c:f,normal:new z,materialIndex:0};_a.getNormal(kl,zl,Bl,p.normal),b.face=p,b.barycoord=v}return b}class Fx extends Os{constructor(e=null,t=1,i=1,s,r,o,d,h,f=Es,b=Es,v,p){super(null,o,d,h,f,b,s,r,v,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pd=new z,kx=new z,zx=new fn;class jr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=pd.subVectors(i,t).cross(kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(pd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zx.getNormalMatrix(e),s=this.coplanarPoint(pd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new xl,Bx=new xn(.5,.5),Wl=new z;class Du{constructor(e=new jr,t=new jr,i=new jr,s=new jr,r=new jr,o=new jr){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(i),d[3].copy(s),d[4].copy(r),d[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ka,i=!1){const s=this.planes,r=e.elements,o=r[0],d=r[1],h=r[2],f=r[3],b=r[4],v=r[5],p=r[6],_=r[7],y=r[8],A=r[9],M=r[10],x=r[11],R=r[12],I=r[13],P=r[14],B=r[15];if(s[0].setComponents(f-o,_-b,x-y,B-R).normalize(),s[1].setComponents(f+o,_+b,x+y,B+R).normalize(),s[2].setComponents(f+d,_+v,x+A,B+I).normalize(),s[3].setComponents(f-d,_-v,x-A,B-I).normalize(),i)s[4].setComponents(h,p,M,P).normalize(),s[5].setComponents(f-h,_-p,x-M,B-P).normalize();else if(s[4].setComponents(f-h,_-p,x-M,B-P).normalize(),t===Ka)s[5].setComponents(f+h,_+p,x+M,B+P).normalize();else if(t===fl)s[5].setComponents(h,p,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){Vr.center.set(0,0,0);const t=Bx.distanceTo(e.center);return Vr.radius=.7071067811865476+t,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Wl.x=s.normal.x>0?e.max.x:e.min.x,Wl.y=s.normal.y>0?e.max.y:e.min.y,Wl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Am extends Dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new In(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bc=new z,vc=new z,Jh=new Fi,el=new Ec,jl=new xl,xd=new z,Qh=new z;class Hx extends Qi{constructor(e=new ts,t=new Am){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)bc.fromBufferAttribute(t,s-1),vc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=bc.distanceTo(vc);e.setAttribute("lineDistance",new Ci(i,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jl.copy(i.boundingSphere),jl.applyMatrix4(s),jl.radius+=r,e.ray.intersectsSphere(jl)===!1)return;Jh.copy(s).invert(),el.copy(e.ray).applyMatrix4(Jh);const d=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,f=this.isLineSegments?2:1,b=i.index,p=i.attributes.position;if(b!==null){const _=Math.max(0,o.start),y=Math.min(b.count,o.start+o.count);for(let A=_,M=y-1;A<M;A+=f){const x=b.getX(A),R=b.getX(A+1),I=Xl(this,e,el,h,x,R,A);I&&t.push(I)}if(this.isLineLoop){const A=b.getX(y-1),M=b.getX(_),x=Xl(this,e,el,h,A,M,y-1);x&&t.push(x)}}else{const _=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let A=_,M=y-1;A<M;A+=f){const x=Xl(this,e,el,h,A,A+1,A);x&&t.push(x)}if(this.isLineLoop){const A=Xl(this,e,el,h,y-1,_,y-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const d=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=r}}}}}function Xl(n,e,t,i,s,r,o){const d=n.geometry.attributes.position;if(bc.fromBufferAttribute(d,s),vc.fromBufferAttribute(d,r),t.distanceSqToSegment(bc,vc,xd,Qh)>i)return;xd.applyMatrix4(n.matrixWorld);const f=e.ray.origin.distanceTo(xd);if(!(f<e.near||f>e.far))return{distance:f,point:Qh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const ef=new z,tf=new z;class Gx extends Hx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ef.fromBufferAttribute(t,s),tf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ef.distanceTo(tf);e.setAttribute("lineDistance",new Ci(i,1))}else Jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rm extends Dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new In(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nf=new Fi,pu=new Ec,Kl=new xl,$l=new z;class Vx extends Qi{constructor(e=new ts,t=new Rm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kl.copy(i.boundingSphere),Kl.applyMatrix4(s),Kl.radius+=r,e.ray.intersectsSphere(Kl)===!1)return;nf.copy(s).invert(),pu.copy(e.ray).applyMatrix4(nf);const d=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,f=i.index,v=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=p,A=_;y<A;y++){const M=f.getX(y);$l.fromBufferAttribute(v,M),sf($l,M,h,s,e,t,this)}}else{const p=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let y=p,A=_;y<A;y++)$l.fromBufferAttribute(v,y),sf($l,y,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const d=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=r}}}}}function sf(n,e,t,i,s,r,o){const d=pu.distanceSqToPoint(n);if(d<t){const h=new z;pu.closestPointToPoint(n,h),h.applyMatrix4(i);const f=s.ray.origin.distanceTo(h);if(f<s.near||f>s.far)return;r.push({distance:f,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Nm extends Os{constructor(e=[],t=qr,i,s,r,o,d,h,f,b){super(e,t,i,s,r,o,d,h,f,b),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wx extends Os{constructor(e,t,i,s,r,o,d,h,f){super(e,t,i,s,r,o,d,h,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uo extends Os{constructor(e,t,i=qa,s,r,o,d=Es,h=Es,f,b=pr,v=1){if(b!==pr&&b!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:v};super(p,s,r,o,d,h,b,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jx extends Uo{constructor(e,t=qa,i=qr,s,r,o=Es,d=Es,h,f=pr){const b={width:e,height:e,depth:1},v=[b,b,b,b,b,b];super(e,e,t,i,s,r,o,d,h,f),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Pm extends Os{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dr extends ts{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const d=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const h=[],f=[],b=[],v=[];let p=0,_=0;y("z","y","x",-1,-1,i,t,e,o,r,0),y("z","y","x",1,-1,i,t,-e,o,r,1),y("x","z","y",1,1,e,i,t,s,o,2),y("x","z","y",1,-1,e,i,-t,s,o,3),y("x","y","z",1,-1,e,t,i,s,r,4),y("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(h),this.setAttribute("position",new Ci(f,3)),this.setAttribute("normal",new Ci(b,3)),this.setAttribute("uv",new Ci(v,2));function y(A,M,x,R,I,P,B,C,V,E,D){const F=P/V,k=B/E,Y=P/2,ue=B/2,ge=C/2,$=V+1,ae=E+1;let me=0,Ce=0;const Ue=new z;for(let tt=0;tt<ae;tt++){const Ee=tt*k-ue;for(let bt=0;bt<$;bt++){const Je=bt*F-Y;Ue[A]=Je*R,Ue[M]=Ee*I,Ue[x]=ge,f.push(Ue.x,Ue.y,Ue.z),Ue[A]=0,Ue[M]=0,Ue[x]=C>0?1:-1,b.push(Ue.x,Ue.y,Ue.z),v.push(bt/V),v.push(1-tt/E),me+=1}}for(let tt=0;tt<E;tt++)for(let Ee=0;Ee<V;Ee++){const bt=p+Ee+$*tt,Je=p+Ee+$*(tt+1),Rt=p+(Ee+1)+$*(tt+1),st=p+(Ee+1)+$*tt;h.push(bt,Je,st),h.push(Je,Rt,st),Ce+=6}d.addGroup(_,Ce,D),_+=Ce,p+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Lu extends ts{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],d=[],h=[],f=[],b=t/2,v=Math.PI/2*e,p=t,_=2*v+p,y=i*2+r,A=s+1,M=new z,x=new z;for(let R=0;R<=y;R++){let I=0,P=0,B=0,C=0;if(R<=i){const D=R/i,F=D*Math.PI/2;P=-b-e*Math.cos(F),B=e*Math.sin(F),C=-e*Math.cos(F),I=D*v}else if(R<=i+r){const D=(R-i)/r;P=-b+D*t,B=e,C=0,I=v+D*p}else{const D=(R-i-r)/i,F=D*Math.PI/2;P=b+e*Math.sin(F),B=e*Math.cos(F),C=e*Math.sin(F),I=v+p+D*v}const V=Math.max(0,Math.min(1,I/_));let E=0;R===0?E=.5/s:R===y&&(E=-.5/s);for(let D=0;D<=s;D++){const F=D/s,k=F*Math.PI*2,Y=Math.sin(k),ue=Math.cos(k);x.x=-B*ue,x.y=P,x.z=B*Y,d.push(x.x,x.y,x.z),M.set(-B*ue,C,B*Y),M.normalize(),h.push(M.x,M.y,M.z),f.push(F+E,V)}if(R>0){const D=(R-1)*A;for(let F=0;F<s;F++){const k=D+F,Y=D+F+1,ue=R*A+F,ge=R*A+F+1;o.push(k,Y,ue),o.push(Y,ge,ue)}}}this.setIndex(o),this.setAttribute("position",new Ci(d,3)),this.setAttribute("normal",new Ci(h,3)),this.setAttribute("uv",new Ci(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ou extends ts{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],d=[],h=[],f=new z,b=new xn;o.push(0,0,0),d.push(0,0,1),h.push(.5,.5);for(let v=0,p=3;v<=t;v++,p+=3){const _=i+v/t*s;f.x=e*Math.cos(_),f.y=e*Math.sin(_),o.push(f.x,f.y,f.z),d.push(0,0,1),b.x=(o[p]/e+1)/2,b.y=(o[p+1]/e+1)/2,h.push(b.x,b.y)}for(let v=1;v<=t;v++)r.push(v,v+1,0);this.setIndex(r),this.setAttribute("position",new Ci(o,3)),this.setAttribute("normal",new Ci(d,3)),this.setAttribute("uv",new Ci(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ou(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class La extends ts{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:d,thetaLength:h};const f=this;s=Math.floor(s),r=Math.floor(r);const b=[],v=[],p=[],_=[];let y=0;const A=[],M=i/2;let x=0;R(),o===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(b),this.setAttribute("position",new Ci(v,3)),this.setAttribute("normal",new Ci(p,3)),this.setAttribute("uv",new Ci(_,2));function R(){const P=new z,B=new z;let C=0;const V=(t-e)/i;for(let E=0;E<=r;E++){const D=[],F=E/r,k=F*(t-e)+e;for(let Y=0;Y<=s;Y++){const ue=Y/s,ge=ue*h+d,$=Math.sin(ge),ae=Math.cos(ge);B.x=k*$,B.y=-F*i+M,B.z=k*ae,v.push(B.x,B.y,B.z),P.set($,V,ae).normalize(),p.push(P.x,P.y,P.z),_.push(ue,1-F),D.push(y++)}A.push(D)}for(let E=0;E<s;E++)for(let D=0;D<r;D++){const F=A[D][E],k=A[D+1][E],Y=A[D+1][E+1],ue=A[D][E+1];(e>0||D!==0)&&(b.push(F,k,ue),C+=3),(t>0||D!==r-1)&&(b.push(k,Y,ue),C+=3)}f.addGroup(x,C,0),x+=C}function I(P){const B=y,C=new xn,V=new z;let E=0;const D=P===!0?e:t,F=P===!0?1:-1;for(let Y=1;Y<=s;Y++)v.push(0,M*F,0),p.push(0,F,0),_.push(.5,.5),y++;const k=y;for(let Y=0;Y<=s;Y++){const ge=Y/s*h+d,$=Math.cos(ge),ae=Math.sin(ge);V.x=D*ae,V.y=M*F,V.z=D*$,v.push(V.x,V.y,V.z),p.push(0,F,0),C.x=$*.5+.5,C.y=ae*.5*F+.5,_.push(C.x,C.y),y++}for(let Y=0;Y<s;Y++){const ue=B+Y,ge=k+Y;P===!0?b.push(ge,ge+1,ue):b.push(ge+1,ge,ue),E+=3}f.addGroup(x,E,P===!0?1:2),x+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wa extends ts{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,d=Math.floor(i),h=Math.floor(s),f=d+1,b=h+1,v=e/d,p=t/h,_=[],y=[],A=[],M=[];for(let x=0;x<b;x++){const R=x*p-o;for(let I=0;I<f;I++){const P=I*v-r;y.push(P,-R,0),A.push(0,0,1),M.push(I/d),M.push(1-x/h)}}for(let x=0;x<h;x++)for(let R=0;R<d;R++){const I=R+f*x,P=R+f*(x+1),B=R+1+f*(x+1),C=R+1+f*x;_.push(I,P,C),_.push(P,B,C)}this.setIndex(_),this.setAttribute("position",new Ci(y,3)),this.setAttribute("normal",new Ci(A,3)),this.setAttribute("uv",new Ci(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.widthSegments,e.heightSegments)}}class lr extends ts{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const d=[],h=[],f=[],b=[];let v=e;const p=(t-e)/s,_=new z,y=new xn;for(let A=0;A<=s;A++){for(let M=0;M<=i;M++){const x=r+M/i*o;_.x=v*Math.cos(x),_.y=v*Math.sin(x),h.push(_.x,_.y,_.z),f.push(0,0,1),y.x=(_.x/t+1)/2,y.y=(_.y/t+1)/2,b.push(y.x,y.y)}v+=p}for(let A=0;A<s;A++){const M=A*(i+1);for(let x=0;x<i;x++){const R=x+M,I=R,P=R+i+1,B=R+i+2,C=R+1;d.push(I,P,C),d.push(P,B,C)}}this.setIndex(d),this.setAttribute("position",new Ci(h,3)),this.setAttribute("normal",new Ci(f,3)),this.setAttribute("uv",new Ci(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ar extends ts{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:d},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(o+d,Math.PI);let f=0;const b=[],v=new z,p=new z,_=[],y=[],A=[],M=[];for(let x=0;x<=i;x++){const R=[],I=x/i;let P=0;x===0&&o===0?P=.5/t:x===i&&h===Math.PI&&(P=-.5/t);for(let B=0;B<=t;B++){const C=B/t;v.x=-e*Math.cos(s+C*r)*Math.sin(o+I*d),v.y=e*Math.cos(o+I*d),v.z=e*Math.sin(s+C*r)*Math.sin(o+I*d),y.push(v.x,v.y,v.z),p.copy(v).normalize(),A.push(p.x,p.y,p.z),M.push(C+P,1-I),R.push(f++)}b.push(R)}for(let x=0;x<i;x++)for(let R=0;R<t;R++){const I=b[x][R+1],P=b[x][R],B=b[x+1][R],C=b[x+1][R+1];(x!==0||o>0)&&_.push(I,P,C),(x!==i-1||h<Math.PI)&&_.push(P,B,C)}this.setIndex(_),this.setAttribute("position",new Ci(y,3)),this.setAttribute("normal",new Ci(A,3)),this.setAttribute("uv",new Ci(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Fo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(af(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(af(s[0])){const r=[];for(let o=0,d=s.length;o<d;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Xs(n){const e={};for(let t=0;t<n.length;t++){const i=Fo(n[t]);for(const s in i)e[s]=i[s]}return e}function af(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Xx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Vn.workingColorSpace}const Kx={clone:Fo,merge:Xs};var $x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Za extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$x,this.fragmentShader=Yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=Xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qx extends Za{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xs extends Dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new In(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new In(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new xn(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zx extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=G0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jx extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Uu extends Qi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new In(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Qx extends Uu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new In(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const gd=new Fi,rf=new z,of=new z;class eg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xn(512,512),this.mapType=aa,this.map=null,this.mapPass=null,this.matrix=new Fi,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Du,this._frameExtents=new xn(1,1),this._viewportCount=1,this._viewports=[new Xi(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(rf),of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(of),t.updateMatrixWorld(),gd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fl||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yl=new z,ql=new ko,Ha=new z;class Im extends Qi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fi,this.projectionMatrix=new Fi,this.projectionMatrixInverse=new Fi,this.coordinateSystem=Ka,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yl,ql,Ha),Ha.x===1&&Ha.y===1&&Ha.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,ql,Ha.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Yl,ql,Ha),Ha.x===1&&Ha.y===1&&Ha.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,ql,Ha.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wr=new z,lf=new xn,cf=new xn;class va extends Im{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,lf,cf),t.subVectors(cf,lf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,f=o.fullHeight;r+=o.offsetX*s/h,t-=o.offsetY*i/f,s*=o.width/h,i*=o.height/f}const d=this.filmOffset;d!==0&&(r+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Fu extends Im{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,d=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,b=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=f*this.view.offsetX,o=r+f*this.view.width,d-=b*this.view.offsetY,h=d-b*this.view.height}this.projectionMatrix.makeOrthographic(r,o,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tg extends eg{constructor(){super(new Fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ng extends Uu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qi.DEFAULT_UP),this.updateMatrix(),this.target=new Qi,this.shadow=new tg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ig extends Uu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const wo=-90,To=1;class sg extends Qi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new va(wo,To,e,t);s.layers=this.layers,this.add(s);const r=new va(wo,To,e,t);r.layers=this.layers,this.add(r);const o=new va(wo,To,e,t);o.layers=this.layers,this.add(o);const d=new va(wo,To,e,t);d.layers=this.layers,this.add(d);const h=new va(wo,To,e,t);h.layers=this.layers,this.add(h);const f=new va(wo,To,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,d,h]=t;for(const f of t)this.remove(f);if(e===Ka)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,d,h,f,b]=this.children,v=e.getRenderTarget(),p=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,3,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,b),e.setRenderTarget(v,p,_),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class ag extends va{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const df=new Fi;class rg{constructor(e,t,i=0,s=1/0){this.ray=new Ec(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Gn("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return df.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(df),this}intersectObject(e,t=!0,i=[]){return xu(e,this,i,t),i.sort(uf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xu(e[s],this,i,t);return i.sort(uf),i}}function uf(n,e){return n.distance-e.distance}function xu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,d=r.length;o<d;o++)xu(r[o],e,t,!0)}}const Wu=class Wu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Wu.prototype.isMatrix2=!0;let hf=Wu;function ff(n,e,t,i){const s=og(i);switch(t){case gm:return n*e;case vm:return n*e/s.components*s.byteLength;case Eu:return n*e/s.components*s.byteLength;case Zr:return n*e*2/s.components*s.byteLength;case wu:return n*e*2/s.components*s.byteLength;case bm:return n*e*3/s.components*s.byteLength;case Ua:return n*e*4/s.components*s.byteLength;case Tu:return n*e*4/s.components*s.byteLength;case ac:case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oc:case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fd:case zd:return Math.max(n,16)*Math.max(e,8)/4;case Ud:case kd:return Math.max(n,8)*Math.max(e,8)/2;case Bd:case Hd:case Vd:case Wd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gd:case uc:case jd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case eu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case iu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case su:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ru:case ou:case lu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cu:case du:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hc:case uu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function og(n){switch(n){case aa:case fm:return{byteLength:1,components:1};case ul:case mm:case mr:return{byteLength:2,components:1};case yu:case Su:return{byteLength:2,components:4};case qa:case Mu:case Xa:return{byteLength:4,components:1};case pm:case xm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_u}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_u);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function lg(n){const e=new WeakMap;function t(d,h){const f=d.array,b=d.usage,v=f.byteLength,p=n.createBuffer();n.bindBuffer(h,p),n.bufferData(h,f,b),d.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)_=n.HALF_FLOAT;else if(f instanceof Uint16Array)d.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:d.version,size:v}}function i(d,h,f){const b=h.array,v=h.updateRanges;if(n.bindBuffer(f,d),v.length===0)n.bufferSubData(f,0,b);else{v.sort((_,y)=>_.start-y.start);let p=0;for(let _=1;_<v.length;_++){const y=v[p],A=v[_];A.start<=y.start+y.count+1?y.count=Math.max(y.count,A.start+A.count-y.start):(++p,v[p]=A)}v.length=p+1;for(let _=0,y=v.length;_<y;_++){const A=v[_];n.bufferSubData(f,A.start*b.BYTES_PER_ELEMENT,b,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function r(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(n.deleteBuffer(h.buffer),e.delete(d))}function o(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const b=e.get(d);(!b||b.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const f=e.get(d);if(f===void 0)e.set(d,t(d,h));else if(f.version<d.version){if(f.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,d,h),f.version=d.version}}return{get:s,remove:r,update:o}}var cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ig=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,tb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ib=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ob=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,db=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ub=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ab=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ib=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ob=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$b=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sn={alphahash_fragment:cg,alphahash_pars_fragment:dg,alphamap_fragment:ug,alphamap_pars_fragment:hg,alphatest_fragment:fg,alphatest_pars_fragment:mg,aomap_fragment:pg,aomap_pars_fragment:xg,batching_pars_vertex:gg,batching_vertex:bg,begin_vertex:vg,beginnormal_vertex:_g,bsdfs:Mg,iridescence_fragment:yg,bumpmap_pars_fragment:Sg,clipping_planes_fragment:Eg,clipping_planes_pars_fragment:wg,clipping_planes_pars_vertex:Tg,clipping_planes_vertex:Ag,color_fragment:Rg,color_pars_fragment:Ng,color_pars_vertex:Pg,color_vertex:Cg,common:Ig,cube_uv_reflection_fragment:Dg,defaultnormal_vertex:Lg,displacementmap_pars_vertex:Og,displacementmap_vertex:Ug,emissivemap_fragment:Fg,emissivemap_pars_fragment:kg,colorspace_fragment:zg,colorspace_pars_fragment:Bg,envmap_fragment:Hg,envmap_common_pars_fragment:Gg,envmap_pars_fragment:Vg,envmap_pars_vertex:Wg,envmap_physical_pars_fragment:tb,envmap_vertex:jg,fog_vertex:Xg,fog_pars_vertex:Kg,fog_fragment:$g,fog_pars_fragment:Yg,gradientmap_pars_fragment:qg,lightmap_pars_fragment:Zg,lights_lambert_fragment:Jg,lights_lambert_pars_fragment:Qg,lights_pars_begin:eb,lights_toon_fragment:nb,lights_toon_pars_fragment:ib,lights_phong_fragment:sb,lights_phong_pars_fragment:ab,lights_physical_fragment:rb,lights_physical_pars_fragment:ob,lights_fragment_begin:lb,lights_fragment_maps:cb,lights_fragment_end:db,lightprobes_pars_fragment:ub,logdepthbuf_fragment:hb,logdepthbuf_pars_fragment:fb,logdepthbuf_pars_vertex:mb,logdepthbuf_vertex:pb,map_fragment:xb,map_pars_fragment:gb,map_particle_fragment:bb,map_particle_pars_fragment:vb,metalnessmap_fragment:_b,metalnessmap_pars_fragment:Mb,morphinstance_vertex:yb,morphcolor_vertex:Sb,morphnormal_vertex:Eb,morphtarget_pars_vertex:wb,morphtarget_vertex:Tb,normal_fragment_begin:Ab,normal_fragment_maps:Rb,normal_pars_fragment:Nb,normal_pars_vertex:Pb,normal_vertex:Cb,normalmap_pars_fragment:Ib,clearcoat_normal_fragment_begin:Db,clearcoat_normal_fragment_maps:Lb,clearcoat_pars_fragment:Ob,iridescence_pars_fragment:Ub,opaque_fragment:Fb,packing:kb,premultiplied_alpha_fragment:zb,project_vertex:Bb,dithering_fragment:Hb,dithering_pars_fragment:Gb,roughnessmap_fragment:Vb,roughnessmap_pars_fragment:Wb,shadowmap_pars_fragment:jb,shadowmap_pars_vertex:Xb,shadowmap_vertex:Kb,shadowmask_pars_fragment:$b,skinbase_vertex:Yb,skinning_pars_vertex:qb,skinning_vertex:Zb,skinnormal_vertex:Jb,specularmap_fragment:Qb,specularmap_pars_fragment:ev,tonemapping_fragment:tv,tonemapping_pars_fragment:nv,transmission_fragment:iv,transmission_pars_fragment:sv,uv_pars_fragment:av,uv_pars_vertex:rv,uv_vertex:ov,worldpos_vertex:lv,background_vert:cv,background_frag:dv,backgroundCube_vert:uv,backgroundCube_frag:hv,cube_vert:fv,cube_frag:mv,depth_vert:pv,depth_frag:xv,distance_vert:gv,distance_frag:bv,equirect_vert:vv,equirect_frag:_v,linedashed_vert:Mv,linedashed_frag:yv,meshbasic_vert:Sv,meshbasic_frag:Ev,meshlambert_vert:wv,meshlambert_frag:Tv,meshmatcap_vert:Av,meshmatcap_frag:Rv,meshnormal_vert:Nv,meshnormal_frag:Pv,meshphong_vert:Cv,meshphong_frag:Iv,meshphysical_vert:Dv,meshphysical_frag:Lv,meshtoon_vert:Ov,meshtoon_frag:Uv,points_vert:Fv,points_frag:kv,shadow_vert:zv,shadow_frag:Bv,sprite_vert:Hv,sprite_frag:Gv},dt={common:{diffuse:{value:new In(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fn},alphaMap:{value:null},alphaMapTransform:{value:new fn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fn}},envmap:{envMap:{value:null},envMapRotation:{value:new fn},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fn},normalScale:{value:new xn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new In(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new In(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fn},alphaTest:{value:0},uvTransform:{value:new fn}},sprite:{diffuse:{value:new In(16777215)},opacity:{value:1},center:{value:new xn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fn},alphaMap:{value:null},alphaMapTransform:{value:new fn},alphaTest:{value:0}}},ja={basic:{uniforms:Xs([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Sn.meshbasic_vert,fragmentShader:Sn.meshbasic_frag},lambert:{uniforms:Xs([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new In(0)},envMapIntensity:{value:1}}]),vertexShader:Sn.meshlambert_vert,fragmentShader:Sn.meshlambert_frag},phong:{uniforms:Xs([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new In(0)},specular:{value:new In(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Sn.meshphong_vert,fragmentShader:Sn.meshphong_frag},standard:{uniforms:Xs([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new In(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Sn.meshphysical_vert,fragmentShader:Sn.meshphysical_frag},toon:{uniforms:Xs([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new In(0)}}]),vertexShader:Sn.meshtoon_vert,fragmentShader:Sn.meshtoon_frag},matcap:{uniforms:Xs([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Sn.meshmatcap_vert,fragmentShader:Sn.meshmatcap_frag},points:{uniforms:Xs([dt.points,dt.fog]),vertexShader:Sn.points_vert,fragmentShader:Sn.points_frag},dashed:{uniforms:Xs([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Sn.linedashed_vert,fragmentShader:Sn.linedashed_frag},depth:{uniforms:Xs([dt.common,dt.displacementmap]),vertexShader:Sn.depth_vert,fragmentShader:Sn.depth_frag},normal:{uniforms:Xs([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Sn.meshnormal_vert,fragmentShader:Sn.meshnormal_frag},sprite:{uniforms:Xs([dt.sprite,dt.fog]),vertexShader:Sn.sprite_vert,fragmentShader:Sn.sprite_frag},background:{uniforms:{uvTransform:{value:new fn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Sn.background_vert,fragmentShader:Sn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fn}},vertexShader:Sn.backgroundCube_vert,fragmentShader:Sn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Sn.cube_vert,fragmentShader:Sn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Sn.equirect_vert,fragmentShader:Sn.equirect_frag},distance:{uniforms:Xs([dt.common,dt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Sn.distance_vert,fragmentShader:Sn.distance_frag},shadow:{uniforms:Xs([dt.lights,dt.fog,{color:{value:new In(0)},opacity:{value:1}}]),vertexShader:Sn.shadow_vert,fragmentShader:Sn.shadow_frag}};ja.physical={uniforms:Xs([ja.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fn},clearcoatNormalScale:{value:new xn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fn},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fn},sheen:{value:0},sheenColor:{value:new In(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fn},transmissionSamplerSize:{value:new xn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fn},attenuationDistance:{value:0},attenuationColor:{value:new In(0)},specularColor:{value:new In(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fn},anisotropyVector:{value:new xn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fn}}]),vertexShader:Sn.meshphysical_vert,fragmentShader:Sn.meshphysical_frag};const Zl={r:0,b:0,g:0},Vv=new Fi,Lm=new fn;Lm.set(-1,0,0,0,1,0,0,0,1);function Wv(n,e,t,i,s,r){const o=new In(0);let d=s===!0?0:1,h,f,b=null,v=0,p=null;function _(R){let I=R.isScene===!0?R.background:null;if(I&&I.isTexture){const P=R.backgroundBlurriness>0;I=e.get(I,P)}return I}function y(R){let I=!1;const P=_(R);P===null?M(o,d):P&&P.isColor&&(M(P,1),I=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,r):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(R,I){const P=_(I);P&&(P.isCubeTexture||P.mapping===Sc)?(f===void 0&&(f=new zt(new dr(1,1,1),new Za({name:"BackgroundCubeMaterial",uniforms:Fo(ja.backgroundCube.uniforms),vertexShader:ja.backgroundCube.vertexShader,fragmentShader:ja.backgroundCube.fragmentShader,side:qs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(B,C,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=P,f.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(I.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Lm),f.material.toneMapped=Vn.getTransfer(P.colorSpace)!==xi,(b!==P||v!==P.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,b=P,v=P.version,p=n.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new zt(new Wa(2,2),new Za({name:"BackgroundMaterial",uniforms:Fo(ja.background.uniforms),vertexShader:ja.background.vertexShader,fragmentShader:ja.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.toneMapped=Vn.getTransfer(P.colorSpace)!==xi,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(b!==P||v!==P.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,b=P,v=P.version,p=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function M(R,I){R.getRGB(Zl,Cm(n)),t.buffers.color.setClear(Zl.r,Zl.g,Zl.b,I,r)}function x(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,I=1){o.set(R),d=I,M(o,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,M(o,d)},render:y,addToRenderList:A,dispose:x}}function jv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,o=!1;function d(k,Y,ue,ge,$){let ae=!1;const me=v(k,ge,ue,Y);r!==me&&(r=me,f(r.object)),ae=_(k,ge,ue,$),ae&&y(k,ge,ue,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,P(k,Y,ue,ge),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function h(){return n.createVertexArray()}function f(k){return n.bindVertexArray(k)}function b(k){return n.deleteVertexArray(k)}function v(k,Y,ue,ge){const $=ge.wireframe===!0;let ae=i[Y.id];ae===void 0&&(ae={},i[Y.id]=ae);const me=k.isInstancedMesh===!0?k.id:0;let Ce=ae[me];Ce===void 0&&(Ce={},ae[me]=Ce);let Ue=Ce[ue.id];Ue===void 0&&(Ue={},Ce[ue.id]=Ue);let tt=Ue[$];return tt===void 0&&(tt=p(h()),Ue[$]=tt),tt}function p(k){const Y=[],ue=[],ge=[];for(let $=0;$<t;$++)Y[$]=0,ue[$]=0,ge[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ue,attributeDivisors:ge,object:k,attributes:{},index:null}}function _(k,Y,ue,ge){const $=r.attributes,ae=Y.attributes;let me=0;const Ce=ue.getAttributes();for(const Ue in Ce)if(Ce[Ue].location>=0){const Ee=$[Ue];let bt=ae[Ue];if(bt===void 0&&(Ue==="instanceMatrix"&&k.instanceMatrix&&(bt=k.instanceMatrix),Ue==="instanceColor"&&k.instanceColor&&(bt=k.instanceColor)),Ee===void 0||Ee.attribute!==bt||bt&&Ee.data!==bt.data)return!0;me++}return r.attributesNum!==me||r.index!==ge}function y(k,Y,ue,ge){const $={},ae=Y.attributes;let me=0;const Ce=ue.getAttributes();for(const Ue in Ce)if(Ce[Ue].location>=0){let Ee=ae[Ue];Ee===void 0&&(Ue==="instanceMatrix"&&k.instanceMatrix&&(Ee=k.instanceMatrix),Ue==="instanceColor"&&k.instanceColor&&(Ee=k.instanceColor));const bt={};bt.attribute=Ee,Ee&&Ee.data&&(bt.data=Ee.data),$[Ue]=bt,me++}r.attributes=$,r.attributesNum=me,r.index=ge}function A(){const k=r.newAttributes;for(let Y=0,ue=k.length;Y<ue;Y++)k[Y]=0}function M(k){x(k,0)}function x(k,Y){const ue=r.newAttributes,ge=r.enabledAttributes,$=r.attributeDivisors;ue[k]=1,ge[k]===0&&(n.enableVertexAttribArray(k),ge[k]=1),$[k]!==Y&&(n.vertexAttribDivisor(k,Y),$[k]=Y)}function R(){const k=r.newAttributes,Y=r.enabledAttributes;for(let ue=0,ge=Y.length;ue<ge;ue++)Y[ue]!==k[ue]&&(n.disableVertexAttribArray(ue),Y[ue]=0)}function I(k,Y,ue,ge,$,ae,me){me===!0?n.vertexAttribIPointer(k,Y,ue,$,ae):n.vertexAttribPointer(k,Y,ue,ge,$,ae)}function P(k,Y,ue,ge){A();const $=ge.attributes,ae=ue.getAttributes(),me=Y.defaultAttributeValues;for(const Ce in ae){const Ue=ae[Ce];if(Ue.location>=0){let tt=$[Ce];if(tt===void 0&&(Ce==="instanceMatrix"&&k.instanceMatrix&&(tt=k.instanceMatrix),Ce==="instanceColor"&&k.instanceColor&&(tt=k.instanceColor)),tt!==void 0){const Ee=tt.normalized,bt=tt.itemSize,Je=e.get(tt);if(Je===void 0)continue;const Rt=Je.buffer,st=Je.type,we=Je.bytesPerElement,nt=st===n.INT||st===n.UNSIGNED_INT||tt.gpuType===Mu;if(tt.isInterleavedBufferAttribute){const We=tt.data,Lt=We.stride,Xt=tt.offset;if(We.isInstancedInterleavedBuffer){for(let Ct=0;Ct<Ue.locationSize;Ct++)x(Ue.location+Ct,We.meshPerAttribute);k.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Ct=0;Ct<Ue.locationSize;Ct++)M(Ue.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let Ct=0;Ct<Ue.locationSize;Ct++)I(Ue.location+Ct,bt/Ue.locationSize,st,Ee,Lt*we,(Xt+bt/Ue.locationSize*Ct)*we,nt)}else{if(tt.isInstancedBufferAttribute){for(let We=0;We<Ue.locationSize;We++)x(Ue.location+We,tt.meshPerAttribute);k.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let We=0;We<Ue.locationSize;We++)M(Ue.location+We);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let We=0;We<Ue.locationSize;We++)I(Ue.location+We,bt/Ue.locationSize,st,Ee,bt*we,bt/Ue.locationSize*We*we,nt)}}else if(me!==void 0){const Ee=me[Ce];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(Ue.location,Ee);break;case 3:n.vertexAttrib3fv(Ue.location,Ee);break;case 4:n.vertexAttrib4fv(Ue.location,Ee);break;default:n.vertexAttrib1fv(Ue.location,Ee)}}}}R()}function B(){D();for(const k in i){const Y=i[k];for(const ue in Y){const ge=Y[ue];for(const $ in ge){const ae=ge[$];for(const me in ae)b(ae[me].object),delete ae[me];delete ge[$]}}delete i[k]}}function C(k){if(i[k.id]===void 0)return;const Y=i[k.id];for(const ue in Y){const ge=Y[ue];for(const $ in ge){const ae=ge[$];for(const me in ae)b(ae[me].object),delete ae[me];delete ge[$]}}delete i[k.id]}function V(k){for(const Y in i){const ue=i[Y];for(const ge in ue){const $=ue[ge];if($[k.id]===void 0)continue;const ae=$[k.id];for(const me in ae)b(ae[me].object),delete ae[me];delete $[k.id]}}}function E(k){for(const Y in i){const ue=i[Y],ge=k.isInstancedMesh===!0?k.id:0,$=ue[ge];if($!==void 0){for(const ae in $){const me=$[ae];for(const Ce in me)b(me[Ce].object),delete me[Ce];delete $[ae]}delete ue[ge],Object.keys(ue).length===0&&delete i[Y]}}}function D(){F(),o=!0,r!==s&&(r=s,f(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:D,resetDefaultState:F,dispose:B,releaseStatesOfGeometry:C,releaseStatesOfObject:E,releaseStatesOfProgram:V,initAttributes:A,enableAttribute:M,disableUnusedAttributes:R}}function Xv(n,e,t){let i;function s(h){i=h}function r(h,f){n.drawArrays(i,h,f),t.update(f,i,1)}function o(h,f,b){b!==0&&(n.drawArraysInstanced(i,h,f,b),t.update(f,i,b))}function d(h,f,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,b);let p=0;for(let _=0;_<b;_++)p+=f[_];t.update(p,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=d}function Kv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(V){return!(V!==Ua&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const E=V===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==aa&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Xa&&!E)}function h(V){if(V==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const b=h(f);b!==f&&(Jt("WebGLRenderer:",f,"not supported, using",b,"instead."),f=b);const v=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:d,precision:f,logarithmicDepthBuffer:v,reversedDepthBuffer:p,maxTextures:_,maxVertexTextures:y,maxTextureSize:A,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:R,maxVaryings:I,maxFragmentUniforms:P,maxSamples:B,samples:C}}function $v(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new jr,d=new fn,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,p){const _=v.length!==0||p||i!==0||s;return s=p,i=v.length,_},this.beginShadows=function(){r=!0,b(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,p){t=b(v,p,0)},this.setState=function(v,p,_){const y=v.clippingPlanes,A=v.clipIntersection,M=v.clipShadows,x=n.get(v);if(!s||y===null||y.length===0||r&&!M)r?b(null):f();else{const R=r?0:i,I=R*4;let P=x.clippingState||null;h.value=P,P=b(y,p,I,_);for(let B=0;B!==I;++B)P[B]=t[B];x.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function b(v,p,_,y){const A=v!==null?v.length:0;let M=null;if(A!==0){if(M=h.value,y!==!0||M===null){const x=_+A*4,R=p.matrixWorldInverse;d.getNormalMatrix(R),(M===null||M.length<x)&&(M=new Float32Array(x));for(let I=0,P=_;I!==A;++I,P+=4)o.copy(v[I]).applyMatrix4(R,d),o.normal.toArray(M,P),M[P+3]=o.constant}h.value=M,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}const Nr=4,mf=[.125,.215,.35,.446,.526,.582],Kr=20,Yv=256,tl=new Fu,pf=new In;let bd=null,vd=0,_d=0,Md=!1;const qv=new z;class xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:d=qv}=r;bd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,vd,_d),this._renderer.xr.enabled=Md,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bs,minFilter:bs,generateMipmaps:!1,type:mr,format:Ua,colorSpace:fc,depthBuffer:!1},s=gf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gf(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zv(r)),this._blurMaterial=Qv(r,e,t),this._ggxMaterial=Jv(r,e,t)}return s}_compileMaterial(e){const t=new zt(new ts,e);this._renderer.compile(t,tl)}_sceneToCubeUV(e,t,i,s,r){const h=new va(90,1,t,i),f=[1,-1,1,1,1,1],b=[1,1,1,-1,-1,-1],v=this._renderer,p=v.autoClear,_=v.toneMapping;v.getClearColor(pf),v.toneMapping=$a,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new dr,new Ls({name:"PMREM.Background",side:qs,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let x=!1;const R=e.background;R?R.isColor&&(M.color.copy(R),e.background=null,x=!0):(M.color.copy(pf),x=!0);for(let I=0;I<6;I++){const P=I%3;P===0?(h.up.set(0,f[I],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+b[I],r.y,r.z)):P===1?(h.up.set(0,0,f[I]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+b[I],r.z)):(h.up.set(0,f[I],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+b[I]));const B=this._cubeSize;Ao(s,P*B,I>2?B:0,B,B),v.setRenderTarget(s),x&&v.render(A,h),v.render(e,h)}v.toneMapping=_,v.autoClear=p,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===qr||e.mapping===Oo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const d=r.uniforms;d.envMap.value=e;const h=this._cubeSize;Ao(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(o,tl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,d=this._lodMeshes[i];d.material=o;const h=o.uniforms,f=i/(this._lodMeshes.length-1),b=t/(this._lodMeshes.length-1),v=Math.sqrt(f*f-b*b),p=0+f*1.25,_=v*p,{_lodMax:y}=this,A=this._sizeLods[i],M=3*A*(i>y-Nr?i-y+Nr:0),x=4*(this._cubeSize-A);h.envMap.value=e.texture,h.roughness.value=_,h.mipInt.value=y-t,Ao(r,M,x,3*A,2*A),s.setRenderTarget(r),s.render(d,tl),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=y-i,Ao(e,M,x,3*A,2*A),s.setRenderTarget(e),s.render(d,tl)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,d){const h=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Gn("blur direction must be either latitudinal or longitudinal!");const b=3,v=this._lodMeshes[s];v.material=f;const p=f.uniforms,_=this._sizeLods[i]-1,y=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*Kr-1),A=r/y,M=isFinite(r)?1+Math.floor(b*A):Kr;M>Kr&&Jt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Kr}`);const x=[];let R=0;for(let V=0;V<Kr;++V){const E=V/A,D=Math.exp(-E*E/2);x.push(D),V===0?R+=D:V<M&&(R+=2*D)}for(let V=0;V<x.length;V++)x[V]=x[V]/R;p.envMap.value=e.texture,p.samples.value=M,p.weights.value=x,p.latitudinal.value=o==="latitudinal",d&&(p.poleAxis.value=d);const{_lodMax:I}=this;p.dTheta.value=y,p.mipInt.value=I-i;const P=this._sizeLods[s],B=3*P*(s>I-Nr?s-I+Nr:0),C=4*(this._cubeSize-P);Ao(t,B,C,3*P,2*P),h.setRenderTarget(t),h.render(v,tl)}}function Zv(n){const e=[],t=[],i=[];let s=n;const r=n-Nr+1+mf.length;for(let o=0;o<r;o++){const d=Math.pow(2,s);e.push(d);let h=1/d;o>n-Nr?h=mf[o-n+Nr-1]:o===0&&(h=0),t.push(h);const f=1/(d-2),b=-f,v=1+f,p=[b,b,v,b,v,v,b,b,v,v,b,v],_=6,y=6,A=3,M=2,x=1,R=new Float32Array(A*y*_),I=new Float32Array(M*y*_),P=new Float32Array(x*y*_);for(let C=0;C<_;C++){const V=C%3*2/3-1,E=C>2?0:-1,D=[V,E,0,V+2/3,E,0,V+2/3,E+1,0,V,E,0,V+2/3,E+1,0,V,E+1,0];R.set(D,A*y*C),I.set(p,M*y*C);const F=[C,C,C,C,C,C];P.set(F,x*y*C)}const B=new ts;B.setAttribute("position",new Ma(R,A)),B.setAttribute("uv",new Ma(I,M)),B.setAttribute("faceIndex",new Ma(P,x)),i.push(new zt(B,null)),s>Nr&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function gf(n,e,t){const i=new Ya(n,e,t);return i.texture.mapping=Sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Jv(n,e,t){return new Za({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Qv(n,e,t){const i=new Float32Array(Kr),s=new z(0,1,0);return new Za({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function bf(){return new Za({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function vf(){return new Za({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Om extends Ya{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Nm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dr(5,5,5),r=new Za({name:"CubemapFromEquirect",uniforms:Fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qs,blending:ur});r.uniforms.tEquirect.value=t;const o=new zt(s,r),d=t.minFilter;return t.minFilter===$r&&(t.minFilter=bs),new sg(1,10,this).update(e,o),t.minFilter=d,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function e_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(p,_=!1){return p==null?null:_?o(p):r(p)}function r(p){if(p&&p.isTexture){const _=p.mapping;if(_===Wc||_===jc)if(e.has(p)){const y=e.get(p).texture;return d(y,p.mapping)}else{const y=p.image;if(y&&y.height>0){const A=new Om(y.height);return A.fromEquirectangularTexture(n,p),e.set(p,A),p.addEventListener("dispose",f),d(A.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture){const _=p.mapping,y=_===Wc||_===jc,A=_===qr||_===Oo;if(y||A){let M=t.get(p);const x=M!==void 0?M.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==x)return i===null&&(i=new xf(n)),M=y?i.fromEquirectangular(p,M):i.fromCubemap(p,M),M.texture.pmremVersion=p.pmremVersion,t.set(p,M),M.texture;if(M!==void 0)return M.texture;{const R=p.image;return y&&R&&R.height>0||A&&R&&h(R)?(i===null&&(i=new xf(n)),M=y?i.fromEquirectangular(p):i.fromCubemap(p),M.texture.pmremVersion=p.pmremVersion,t.set(p,M),p.addEventListener("dispose",b),M.texture):null}}}return p}function d(p,_){return _===Wc?p.mapping=qr:_===jc&&(p.mapping=Oo),p}function h(p){let _=0;const y=6;for(let A=0;A<y;A++)p[A]!==void 0&&_++;return _===y}function f(p){const _=p.target;_.removeEventListener("dispose",f);const y=e.get(_);y!==void 0&&(e.delete(_),y.dispose())}function b(p){const _=p.target;_.removeEventListener("dispose",b);const y=t.get(_);y!==void 0&&(t.delete(_),y.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:v}}function t_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&mu("WebGLRenderer: "+i+" extension not supported."),s}}}function n_(n,e,t,i){const s={},r=new WeakMap;function o(v){const p=v.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);p.removeEventListener("dispose",o),delete s[p.id];const _=r.get(p);_&&(e.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function d(v,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function h(v){const p=v.attributes;for(const _ in p)e.update(p[_],n.ARRAY_BUFFER)}function f(v){const p=[],_=v.index,y=v.attributes.position;let A=0;if(y===void 0)return;if(_!==null){const R=_.array;A=_.version;for(let I=0,P=R.length;I<P;I+=3){const B=R[I+0],C=R[I+1],V=R[I+2];p.push(B,C,C,V,V,B)}}else{const R=y.array;A=y.version;for(let I=0,P=R.length/3-1;I<P;I+=3){const B=I+0,C=I+1,V=I+2;p.push(B,C,C,V,V,B)}}const M=new(y.count>=65535?Em:Sm)(p,1);M.version=A;const x=r.get(v);x&&e.remove(x),r.set(v,M)}function b(v){const p=r.get(v);if(p){const _=v.index;_!==null&&p.version<_.version&&f(v)}else f(v);return r.get(v)}return{get:d,update:h,getWireframeAttribute:b}}function i_(n,e,t){let i;function s(v){i=v}let r,o;function d(v){r=v.type,o=v.bytesPerElement}function h(v,p){n.drawElements(i,p,r,v*o),t.update(p,i,1)}function f(v,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,v*o,_),t.update(p,i,_))}function b(v,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,v,0,_);let A=0;for(let M=0;M<_;M++)A+=p[M];t.update(A,i,1)}this.setMode=s,this.setIndex=d,this.render=h,this.renderInstances=f,this.renderMultiDraw=b}function s_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,d){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=d*(r/3);break;case n.LINES:t.lines+=d*(r/2);break;case n.LINE_STRIP:t.lines+=d*(r-1);break;case n.LINE_LOOP:t.lines+=d*r;break;case n.POINTS:t.points+=d*r;break;default:Gn("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function a_(n,e,t){const i=new WeakMap,s=new Xi;function r(o,d,h){const f=o.morphTargetInfluences,b=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=b!==void 0?b.length:0;let p=i.get(d);if(p===void 0||p.count!==v){let D=function(){V.dispose(),i.delete(d),d.removeEventListener("dispose",D)};p!==void 0&&p.texture.dispose();const _=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let I=0;_===!0&&(I=1),y===!0&&(I=2),A===!0&&(I=3);let P=d.attributes.position.count*I,B=1;P>e.maxTextureSize&&(B=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*B*4*v),V=new Mm(C,P,B,v);V.type=Xa,V.needsUpdate=!0;const E=I*4;for(let F=0;F<v;F++){const k=M[F],Y=x[F],ue=R[F],ge=P*B*4*F;for(let $=0;$<k.count;$++){const ae=$*E;_===!0&&(s.fromBufferAttribute(k,$),C[ge+ae+0]=s.x,C[ge+ae+1]=s.y,C[ge+ae+2]=s.z,C[ge+ae+3]=0),y===!0&&(s.fromBufferAttribute(Y,$),C[ge+ae+4]=s.x,C[ge+ae+5]=s.y,C[ge+ae+6]=s.z,C[ge+ae+7]=0),A===!0&&(s.fromBufferAttribute(ue,$),C[ge+ae+8]=s.x,C[ge+ae+9]=s.y,C[ge+ae+10]=s.z,C[ge+ae+11]=ue.itemSize===4?s.w:1)}}p={count:v,texture:V,size:new xn(P,B)},i.set(d,p),d.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let A=0;A<f.length;A++)_+=f[A];const y=d.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",f)}h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function r_(n,e,t,i,s){let r=new WeakMap;function o(f){const b=s.render.frame,v=f.geometry,p=e.get(f,v);if(r.get(p)!==b&&(e.update(p),r.set(p,b)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),r.get(f)!==b&&(t.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,n.ARRAY_BUFFER),r.set(f,b))),f.isSkinnedMesh){const _=f.skeleton;r.get(_)!==b&&(_.update(),r.set(_,b))}return p}function d(){r=new WeakMap}function h(f){const b=f.target;b.removeEventListener("dispose",h),i.releaseStatesOfObject(b),t.remove(b.instanceMatrix),b.instanceColor!==null&&t.remove(b.instanceColor)}return{update:o,dispose:d}}const o_={[am]:"LINEAR_TONE_MAPPING",[rm]:"REINHARD_TONE_MAPPING",[om]:"CINEON_TONE_MAPPING",[lm]:"ACES_FILMIC_TONE_MAPPING",[dm]:"AGX_TONE_MAPPING",[um]:"NEUTRAL_TONE_MAPPING",[cm]:"CUSTOM_TONE_MAPPING"};function l_(n,e,t,i,s){const r=new Ya(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Uo(e,t):void 0}),o=new Ya(e,t,{type:mr,depthBuffer:!1,stencilBuffer:!1}),d=new ts;d.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ci([0,2,0,0,2,0],2));const h=new qx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new zt(d,h),b=new Fu(-1,1,1,-1,0,1);let v=null,p=null,_=!1,y,A=null,M=[],x=!1;this.setSize=function(R,I){r.setSize(R,I),o.setSize(R,I);for(let P=0;P<M.length;P++){const B=M[P];B.setSize&&B.setSize(R,I)}},this.setEffects=function(R){M=R,x=M.length>0&&M[0].isRenderPass===!0;const I=r.width,P=r.height;for(let B=0;B<M.length;B++){const C=M[B];C.setSize&&C.setSize(I,P)}},this.begin=function(R,I){if(_||R.toneMapping===$a&&M.length===0)return!1;if(A=I,I!==null){const P=I.width,B=I.height;(r.width!==P||r.height!==B)&&this.setSize(P,B)}return x===!1&&R.setRenderTarget(r),y=R.toneMapping,R.toneMapping=$a,!0},this.hasRenderPass=function(){return x},this.end=function(R,I){R.toneMapping=y,_=!0;let P=r,B=o;for(let C=0;C<M.length;C++){const V=M[C];if(V.enabled!==!1&&(V.render(R,B,P,I),V.needsSwap!==!1)){const E=P;P=B,B=E}}if(v!==R.outputColorSpace||p!==R.toneMapping){v=R.outputColorSpace,p=R.toneMapping,h.defines={},Vn.getTransfer(v)===xi&&(h.defines.SRGB_TRANSFER="");const C=o_[p];C&&(h.defines[C]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(A),R.render(f,b),A=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),d.dispose(),h.dispose()}}const Um=new Os,gu=new Uo(1,1),Fm=new Mm,km=new Mx,zm=new Nm,_f=[],Mf=[],yf=new Float32Array(16),Sf=new Float32Array(9),Ef=new Float32Array(4);function zo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=_f[s];if(r===void 0&&(r=new Float32Array(s),_f[s]=r),e!==0){i.toArray(r,0);for(let o=1,d=0;o!==e;++o)d+=t,n[o].toArray(r,d)}return r}function ns(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function is(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tc(n,e){let t=Mf[e];t===void 0&&(t=new Int32Array(e),Mf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function c_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ns(t,e))return;n.uniform2fv(this.addr,e),is(t,e)}}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ns(t,e))return;n.uniform3fv(this.addr,e),is(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ns(t,e))return;n.uniform4fv(this.addr,e),is(t,e)}}function f_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ns(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),is(t,e)}else{if(ns(t,i))return;Ef.set(i),n.uniformMatrix2fv(this.addr,!1,Ef),is(t,i)}}function m_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ns(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),is(t,e)}else{if(ns(t,i))return;Sf.set(i),n.uniformMatrix3fv(this.addr,!1,Sf),is(t,i)}}function p_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ns(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),is(t,e)}else{if(ns(t,i))return;yf.set(i),n.uniformMatrix4fv(this.addr,!1,yf),is(t,i)}}function x_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ns(t,e))return;n.uniform2iv(this.addr,e),is(t,e)}}function b_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ns(t,e))return;n.uniform3iv(this.addr,e),is(t,e)}}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ns(t,e))return;n.uniform4iv(this.addr,e),is(t,e)}}function __(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ns(t,e))return;n.uniform2uiv(this.addr,e),is(t,e)}}function y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ns(t,e))return;n.uniform3uiv(this.addr,e),is(t,e)}}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ns(t,e))return;n.uniform4uiv(this.addr,e),is(t,e)}}function E_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gu.compareFunction=t.isReversedDepthBuffer()?Ru:Au,r=gu):r=Um,t.setTexture2D(e||r,s)}function w_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||km,s)}function T_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||zm,s)}function A_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Fm,s)}function R_(n){switch(n){case 5126:return c_;case 35664:return d_;case 35665:return u_;case 35666:return h_;case 35674:return f_;case 35675:return m_;case 35676:return p_;case 5124:case 35670:return x_;case 35667:case 35671:return g_;case 35668:case 35672:return b_;case 35669:case 35673:return v_;case 5125:return __;case 36294:return M_;case 36295:return y_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return A_}}function N_(n,e){n.uniform1fv(this.addr,e)}function P_(n,e){const t=zo(e,this.size,2);n.uniform2fv(this.addr,t)}function C_(n,e){const t=zo(e,this.size,3);n.uniform3fv(this.addr,t)}function I_(n,e){const t=zo(e,this.size,4);n.uniform4fv(this.addr,t)}function D_(n,e){const t=zo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function L_(n,e){const t=zo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function O_(n,e){const t=zo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U_(n,e){n.uniform1iv(this.addr,e)}function F_(n,e){n.uniform2iv(this.addr,e)}function k_(n,e){n.uniform3iv(this.addr,e)}function z_(n,e){n.uniform4iv(this.addr,e)}function B_(n,e){n.uniform1uiv(this.addr,e)}function H_(n,e){n.uniform2uiv(this.addr,e)}function G_(n,e){n.uniform3uiv(this.addr,e)}function V_(n,e){n.uniform4uiv(this.addr,e)}function W_(n,e,t){const i=this.cache,s=e.length,r=Tc(t,s);ns(i,r)||(n.uniform1iv(this.addr,r),is(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=gu:o=Um;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||o,r[d])}function j_(n,e,t){const i=this.cache,s=e.length,r=Tc(t,s);ns(i,r)||(n.uniform1iv(this.addr,r),is(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||km,r[o])}function X_(n,e,t){const i=this.cache,s=e.length,r=Tc(t,s);ns(i,r)||(n.uniform1iv(this.addr,r),is(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||zm,r[o])}function K_(n,e,t){const i=this.cache,s=e.length,r=Tc(t,s);ns(i,r)||(n.uniform1iv(this.addr,r),is(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fm,r[o])}function $_(n){switch(n){case 5126:return N_;case 35664:return P_;case 35665:return C_;case 35666:return I_;case 35674:return D_;case 35675:return L_;case 35676:return O_;case 5124:case 35670:return U_;case 35667:case 35671:return F_;case 35668:case 35672:return k_;case 35669:case 35673:return z_;case 5125:return B_;case 36294:return H_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return K_}}class Y_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=R_(t.type)}}class q_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$_(t.type)}}class Z_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const d=s[r];d.setValue(e,t[d.id],i)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function wf(n,e){n.seq.push(e),n.map[e.id]=e}function J_(n,e,t){const i=n.name,s=i.length;for(yd.lastIndex=0;;){const r=yd.exec(i),o=yd.lastIndex;let d=r[1];const h=r[2]==="]",f=r[3];if(h&&(d=d|0),f===void 0||f==="["&&o+2===s){wf(t,f===void 0?new Y_(d,n,e):new q_(d,n,e));break}else{let v=t.map[d];v===void 0&&(v=new Z_(d),wf(t,v)),t=v}}}class cc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const d=e.getActiveUniform(t,o),h=e.getUniformLocation(t,d.name);J_(d,h,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const d=t[r],h=i[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Tf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Q_=37297;let eM=0;function tM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const d=o+1;i.push(`${d===e?">":" "} ${d}: ${t[o]}`)}return i.join(`
`)}const Af=new fn;function nM(n){Vn._getMatrix(Af,Vn.workingColorSpace,n);const e=`mat3( ${Af.elements.map(t=>t.toFixed(4))} )`;switch(Vn.getTransfer(n)){case mc:return[e,"LinearTransferOETF"];case xi:return[e,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const d=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+tM(n.getShaderSource(e),d)}else return r}function iM(n,e){const t=nM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sM={[am]:"Linear",[rm]:"Reinhard",[om]:"Cineon",[lm]:"ACESFilmic",[dm]:"AgX",[um]:"Neutral",[cm]:"Custom"};function aM(n,e){const t=sM[e];return t===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jl=new z;function rM(){Vn.getLuminanceCoefficients(Jl);const n=Jl.x.toFixed(4),e=Jl.y.toFixed(4),t=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function lM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let d=1;r.type===n.FLOAT_MAT2&&(d=2),r.type===n.FLOAT_MAT3&&(d=3),r.type===n.FLOAT_MAT4&&(d=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:d}}return t}function al(n){return n!==""}function Nf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(n){return n.replace(dM,hM)}const uM=new Map;function hM(n,e){let t=Sn[e];if(t===void 0){const i=uM.get(e);if(i!==void 0)t=Sn[i],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bu(t)}const fM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(n){return n.replace(fM,mM)}function mM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function If(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pM={[sc]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function xM(n){return pM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gM={[qr]:"ENVMAP_TYPE_CUBE",[Oo]:"ENVMAP_TYPE_CUBE",[Sc]:"ENVMAP_TYPE_CUBE_UV"};function bM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":gM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const vM={[Oo]:"ENVMAP_MODE_REFRACTION"};function _M(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const MM={[sm]:"ENVMAP_BLENDING_MULTIPLY",[z0]:"ENVMAP_BLENDING_MIX",[B0]:"ENVMAP_BLENDING_ADD"};function yM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":MM[n.combine]||"ENVMAP_BLENDING_NONE"}function SM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function EM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,d=t.fragmentShader;const h=xM(t),f=bM(t),b=_M(t),v=yM(t),p=SM(t),_=oM(t),y=lM(r),A=s.createProgram();let M,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(al).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(al).join(`
`),x.length>0&&(x+=`
`)):(M=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+b:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),x=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+b:"",t.envMap?"#define "+v:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$a?"#define TONE_MAPPING":"",t.toneMapping!==$a?Sn.tonemapping_pars_fragment:"",t.toneMapping!==$a?aM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Sn.colorspace_pars_fragment,iM("linearToOutputTexel",t.outputColorSpace),rM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(al).join(`
`)),o=bu(o),o=Nf(o,t),o=Pf(o,t),d=bu(d),d=Nf(d,t),d=Pf(d,t),o=Cf(o),d=Cf(d),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,M=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",t.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=R+M+o,P=R+x+d,B=Tf(s,s.VERTEX_SHADER,I),C=Tf(s,s.FRAGMENT_SHADER,P);s.attachShader(A,B),s.attachShader(A,C),t.index0AttributeName!==void 0?s.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function V(k){if(n.debug.checkShaderErrors){const Y=s.getProgramInfoLog(A)||"",ue=s.getShaderInfoLog(B)||"",ge=s.getShaderInfoLog(C)||"",$=Y.trim(),ae=ue.trim(),me=ge.trim();let Ce=!0,Ue=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(Ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,A,B,C);else{const tt=Rf(s,B,"vertex"),Ee=Rf(s,C,"fragment");Gn("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+$+`
`+tt+`
`+Ee)}else $!==""?Jt("WebGLProgram: Program Info Log:",$):(ae===""||me==="")&&(Ue=!1);Ue&&(k.diagnostics={runnable:Ce,programLog:$,vertexShader:{log:ae,prefix:M},fragmentShader:{log:me,prefix:x}})}s.deleteShader(B),s.deleteShader(C),E=new cc(s,A),D=cM(s,A)}let E;this.getUniforms=function(){return E===void 0&&V(this),E};let D;this.getAttributes=function(){return D===void 0&&V(this),D};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(A,Q_)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=B,this.fragmentShader=C,this}let wM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AM(e),t.set(e,i)),i}}class AM{constructor(e){this.id=wM++,this.code=e,this.usedTimes=0}}function RM(n){return n===Zr||n===uc||n===hc}function NM(n,e,t,i,s,r){const o=new Cu,d=new TM,h=new Set,f=[],b=new Map,v=i.logarithmicDepthBuffer;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return h.add(E),E===0?"uv":`uv${E}`}function A(E,D,F,k,Y,ue){const ge=k.fog,$=Y.geometry,ae=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,me=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Ce=e.get(E.envMap||ae,me),Ue=Ce&&Ce.mapping===Sc?Ce.image.height:null,tt=_[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&Jt("WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,bt=Ee!==void 0?Ee.length:0;let Je=0;$.morphAttributes.position!==void 0&&(Je=1),$.morphAttributes.normal!==void 0&&(Je=2),$.morphAttributes.color!==void 0&&(Je=3);let Rt,st,we,nt;if(tt){const et=ja[tt];Rt=et.vertexShader,st=et.fragmentShader}else Rt=E.vertexShader,st=E.fragmentShader,d.update(E),we=d.getVertexShaderID(E),nt=d.getFragmentShaderID(E);const We=n.getRenderTarget(),Lt=n.state.buffers.depth.getReversed(),Xt=Y.isInstancedMesh===!0,Ct=Y.isBatchedMesh===!0,si=!!E.map,Ot=!!E.matcap,On=!!Ce,Un=!!E.aoMap,sn=!!E.lightMap,fi=!!E.bumpMap,jn=!!E.normalMap,Fn=!!E.displacementMap,X=!!E.emissiveMap,Ne=!!E.metalnessMap,Vt=!!E.roughnessMap,mn=E.anisotropy>0,Ve=E.clearcoat>0,Mi=E.dispersion>0,N=E.iridescence>0,S=E.sheen>0,ee=E.transmission>0,Z=mn&&!!E.anisotropyMap,ie=Ve&&!!E.clearcoatMap,he=Ve&&!!E.clearcoatNormalMap,fe=Ve&&!!E.clearcoatRoughnessMap,oe=N&&!!E.iridescenceMap,pe=N&&!!E.iridescenceThicknessMap,je=S&&!!E.sheenColorMap,Ge=S&&!!E.sheenRoughnessMap,Ie=!!E.specularMap,Fe=!!E.specularColorMap,_t=!!E.specularIntensityMap,xt=ee&&!!E.transmissionMap,an=ee&&!!E.thicknessMap,G=!!E.gradientMap,He=!!E.alphaMap,ve=E.alphaTest>0,ht=!!E.alphaHash,$e=!!E.extensions;let Te=$a;E.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(Te=n.toneMapping);const Et={shaderID:tt,shaderType:E.type,shaderName:E.name,vertexShader:Rt,fragmentShader:st,defines:E.defines,customVertexShaderID:we,customFragmentShaderID:nt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&Y._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&Y.instanceColor!==null,instancingMorph:Xt&&Y.morphTexture!==null,outputColorSpace:We===null?n.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:Vn.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:si,matcap:Ot,envMap:On,envMapMode:On&&Ce.mapping,envMapCubeUVHeight:Ue,aoMap:Un,lightMap:sn,bumpMap:fi,normalMap:jn,displacementMap:Fn,emissiveMap:X,normalMapObjectSpace:jn&&E.normalMapType===V0,normalMapTangentSpace:jn&&E.normalMapType===hu,packedNormalMap:jn&&E.normalMapType===hu&&RM(E.normalMap.format),metalnessMap:Ne,roughnessMap:Vt,anisotropy:mn,anisotropyMap:Z,clearcoat:Ve,clearcoatMap:ie,clearcoatNormalMap:he,clearcoatRoughnessMap:fe,dispersion:Mi,iridescence:N,iridescenceMap:oe,iridescenceThicknessMap:pe,sheen:S,sheenColorMap:je,sheenRoughnessMap:Ge,specularMap:Ie,specularColorMap:Fe,specularIntensityMap:_t,transmission:ee,transmissionMap:xt,thicknessMap:an,gradientMap:G,opaque:E.transparent===!1&&E.blending===Co&&E.alphaToCoverage===!1,alphaMap:He,alphaTest:ve,alphaHash:ht,combine:E.combine,mapUv:si&&y(E.map.channel),aoMapUv:Un&&y(E.aoMap.channel),lightMapUv:sn&&y(E.lightMap.channel),bumpMapUv:fi&&y(E.bumpMap.channel),normalMapUv:jn&&y(E.normalMap.channel),displacementMapUv:Fn&&y(E.displacementMap.channel),emissiveMapUv:X&&y(E.emissiveMap.channel),metalnessMapUv:Ne&&y(E.metalnessMap.channel),roughnessMapUv:Vt&&y(E.roughnessMap.channel),anisotropyMapUv:Z&&y(E.anisotropyMap.channel),clearcoatMapUv:ie&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:he&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:je&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&y(E.sheenRoughnessMap.channel),specularMapUv:Ie&&y(E.specularMap.channel),specularColorMapUv:Fe&&y(E.specularColorMap.channel),specularIntensityMapUv:_t&&y(E.specularIntensityMap.channel),transmissionMapUv:xt&&y(E.transmissionMap.channel),thicknessMapUv:an&&y(E.thicknessMap.channel),alphaMapUv:He&&y(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(jn||mn),vertexNormals:!!$.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!$.attributes.uv&&(si||He),fog:!!ge,useFog:E.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||$.attributes.normal===void 0&&jn===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Lt,skinning:Y.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Je,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Te,decodeVideoTexture:si&&E.map.isVideoTexture===!0&&Vn.getTransfer(E.map.colorSpace)===xi,decodeVideoTextureEmissive:X&&E.emissiveMap.isVideoTexture===!0&&Vn.getTransfer(E.emissiveMap.colorSpace)===xi,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gs,flipSided:E.side===qs,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:$e&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&E.extensions.multiDraw===!0||Ct)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Et.vertexUv1s=h.has(1),Et.vertexUv2s=h.has(2),Et.vertexUv3s=h.has(3),h.clear(),Et}function M(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)D.push(F),D.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(x(D,E),R(D,E),D.push(n.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function x(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function R(E,D){o.disableAll(),D.instancing&&o.enable(0),D.instancingColor&&o.enable(1),D.instancingMorph&&o.enable(2),D.matcap&&o.enable(3),D.envMap&&o.enable(4),D.normalMapObjectSpace&&o.enable(5),D.normalMapTangentSpace&&o.enable(6),D.clearcoat&&o.enable(7),D.iridescence&&o.enable(8),D.alphaTest&&o.enable(9),D.vertexColors&&o.enable(10),D.vertexAlphas&&o.enable(11),D.vertexUv1s&&o.enable(12),D.vertexUv2s&&o.enable(13),D.vertexUv3s&&o.enable(14),D.vertexTangents&&o.enable(15),D.anisotropy&&o.enable(16),D.alphaHash&&o.enable(17),D.batching&&o.enable(18),D.dispersion&&o.enable(19),D.batchingColor&&o.enable(20),D.gradientMap&&o.enable(21),D.packedNormalMap&&o.enable(22),D.vertexNormals&&o.enable(23),E.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.reversedDepthBuffer&&o.enable(4),D.skinning&&o.enable(5),D.morphTargets&&o.enable(6),D.morphNormals&&o.enable(7),D.morphColors&&o.enable(8),D.premultipliedAlpha&&o.enable(9),D.shadowMapEnabled&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.transmission&&o.enable(15),D.sheen&&o.enable(16),D.opaque&&o.enable(17),D.pointsUvs&&o.enable(18),D.decodeVideoTexture&&o.enable(19),D.decodeVideoTextureEmissive&&o.enable(20),D.alphaToCoverage&&o.enable(21),D.numLightProbeGrids>0&&o.enable(22),E.push(o.mask)}function I(E){const D=_[E.type];let F;if(D){const k=ja[D];F=Kx.clone(k.uniforms)}else F=E.uniforms;return F}function P(E,D){let F=b.get(D);return F!==void 0?++F.usedTimes:(F=new EM(n,D,E,s),f.push(F),b.set(D,F)),F}function B(E){if(--E.usedTimes===0){const D=f.indexOf(E);f[D]=f[f.length-1],f.pop(),b.delete(E.cacheKey),E.destroy()}}function C(E){d.remove(E)}function V(){d.dispose()}return{getParameters:A,getProgramCacheKey:M,getUniforms:I,acquireProgram:P,releaseProgram:B,releaseShaderCache:C,programs:f,dispose:V}}function PM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let d=n.get(o);return d===void 0&&(d={},n.set(o,d)),d}function i(o){n.delete(o)}function s(o,d,h){n.get(o)[d]=h}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function CM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Df(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(p){let _=0;return p.isInstancedMesh&&(_+=2),p.isSkinnedMesh&&(_+=1),_}function d(p,_,y,A,M,x){let R=n[e];return R===void 0?(R={id:p.id,object:p,geometry:_,material:y,materialVariant:o(p),groupOrder:A,renderOrder:p.renderOrder,z:M,group:x},n[e]=R):(R.id=p.id,R.object=p,R.geometry=_,R.material=y,R.materialVariant=o(p),R.groupOrder=A,R.renderOrder=p.renderOrder,R.z=M,R.group=x),e++,R}function h(p,_,y,A,M,x){const R=d(p,_,y,A,M,x);y.transmission>0?i.push(R):y.transparent===!0?s.push(R):t.push(R)}function f(p,_,y,A,M,x){const R=d(p,_,y,A,M,x);y.transmission>0?i.unshift(R):y.transparent===!0?s.unshift(R):t.unshift(R)}function b(p,_){t.length>1&&t.sort(p||CM),i.length>1&&i.sort(_||Df),s.length>1&&s.sort(_||Df)}function v(){for(let p=e,_=n.length;p<_;p++){const y=n[p];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:h,unshift:f,finish:v,sort:b}}function IM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Lf,n.set(i,[o])):s>=r.length?(o=new Lf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function DM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new In};break;case"SpotLight":t={position:new z,direction:new z,color:new In,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new In,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new In,groundColor:new In};break;case"RectAreaLight":t={color:new In,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function LM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xn};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xn};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xn,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OM=0;function UM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FM(n){const e=new DM,t=LM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new z);const s=new z,r=new Fi,o=new Fi;function d(f){let b=0,v=0,p=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let _=0,y=0,A=0,M=0,x=0,R=0,I=0,P=0,B=0,C=0,V=0;f.sort(UM);for(let D=0,F=f.length;D<F;D++){const k=f[D],Y=k.color,ue=k.intensity,ge=k.distance;let $=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Zr?$=k.shadow.map.texture:$=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)b+=Y.r*ue,v+=Y.g*ue,p+=Y.b*ue;else if(k.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(k.sh.coefficients[ae],ue);V++}else if(k.isDirectionalLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const me=k.shadow,Ce=t.get(k);Ce.shadowIntensity=me.intensity,Ce.shadowBias=me.bias,Ce.shadowNormalBias=me.normalBias,Ce.shadowRadius=me.radius,Ce.shadowMapSize=me.mapSize,i.directionalShadow[_]=Ce,i.directionalShadowMap[_]=$,i.directionalShadowMatrix[_]=k.shadow.matrix,R++}i.directional[_]=ae,_++}else if(k.isSpotLight){const ae=e.get(k);ae.position.setFromMatrixPosition(k.matrixWorld),ae.color.copy(Y).multiplyScalar(ue),ae.distance=ge,ae.coneCos=Math.cos(k.angle),ae.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ae.decay=k.decay,i.spot[A]=ae;const me=k.shadow;if(k.map&&(i.spotLightMap[B]=k.map,B++,me.updateMatrices(k),k.castShadow&&C++),i.spotLightMatrix[A]=me.matrix,k.castShadow){const Ce=t.get(k);Ce.shadowIntensity=me.intensity,Ce.shadowBias=me.bias,Ce.shadowNormalBias=me.normalBias,Ce.shadowRadius=me.radius,Ce.shadowMapSize=me.mapSize,i.spotShadow[A]=Ce,i.spotShadowMap[A]=$,P++}A++}else if(k.isRectAreaLight){const ae=e.get(k);ae.color.copy(Y).multiplyScalar(ue),ae.halfWidth.set(k.width*.5,0,0),ae.halfHeight.set(0,k.height*.5,0),i.rectArea[M]=ae,M++}else if(k.isPointLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),ae.distance=k.distance,ae.decay=k.decay,k.castShadow){const me=k.shadow,Ce=t.get(k);Ce.shadowIntensity=me.intensity,Ce.shadowBias=me.bias,Ce.shadowNormalBias=me.normalBias,Ce.shadowRadius=me.radius,Ce.shadowMapSize=me.mapSize,Ce.shadowCameraNear=me.camera.near,Ce.shadowCameraFar=me.camera.far,i.pointShadow[y]=Ce,i.pointShadowMap[y]=$,i.pointShadowMatrix[y]=k.shadow.matrix,I++}i.point[y]=ae,y++}else if(k.isHemisphereLight){const ae=e.get(k);ae.skyColor.copy(k.color).multiplyScalar(ue),ae.groundColor.copy(k.groundColor).multiplyScalar(ue),i.hemi[x]=ae,x++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=b,i.ambient[1]=v,i.ambient[2]=p;const E=i.hash;(E.directionalLength!==_||E.pointLength!==y||E.spotLength!==A||E.rectAreaLength!==M||E.hemiLength!==x||E.numDirectionalShadows!==R||E.numPointShadows!==I||E.numSpotShadows!==P||E.numSpotMaps!==B||E.numLightProbes!==V)&&(i.directional.length=_,i.spot.length=A,i.rectArea.length=M,i.point.length=y,i.hemi.length=x,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=P+B-C,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=V,E.directionalLength=_,E.pointLength=y,E.spotLength=A,E.rectAreaLength=M,E.hemiLength=x,E.numDirectionalShadows=R,E.numPointShadows=I,E.numSpotShadows=P,E.numSpotMaps=B,E.numLightProbes=V,i.version=OM++)}function h(f,b){let v=0,p=0,_=0,y=0,A=0;const M=b.matrixWorldInverse;for(let x=0,R=f.length;x<R;x++){const I=f[x];if(I.isDirectionalLight){const P=i.directional[v];P.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(M),v++}else if(I.isSpotLight){const P=i.spot[_];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(M),_++}else if(I.isRectAreaLight){const P=i.rectArea[y];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(M),o.identity(),r.copy(I.matrixWorld),r.premultiply(M),o.extractRotation(r),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),y++}else if(I.isPointLight){const P=i.point[p];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(M),p++}else if(I.isHemisphereLight){const P=i.hemi[A];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(M),A++}}}return{setup:d,setupView:h,state:i}}function Of(n){const e=new FM(n),t=[],i=[],s=[];function r(p){v.camera=p,t.length=0,i.length=0,s.length=0}function o(p){t.push(p)}function d(p){i.push(p)}function h(p){s.push(p)}function f(){e.setup(t)}function b(p){e.setupView(t,p)}const v={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:f,setupLightsView:b,pushLight:o,pushShadow:d,pushLightProbeGrid:h}}function kM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let d;return o===void 0?(d=new Of(n),e.set(s,[d])):r>=o.length?(d=new Of(n),o.push(d)):d=o[r],d}function i(){e=new WeakMap}return{get:t,dispose:i}}const zM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,HM=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],GM=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Uf=new Fi,nl=new z,Sd=new z;function VM(n,e,t){let i=new Du;const s=new xn,r=new xn,o=new Xi,d=new Zx,h=new Jx,f={},b=t.maxTextureSize,v={[Pr]:qs,[qs]:Pr,[gs]:gs},p=new Za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xn},radius:{value:4}},vertexShader:zM,fragmentShader:BM}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const y=new ts;y.setAttribute("position",new Ma(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new zt(y,p),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let x=this.type;this.render=function(C,V,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||C.length===0)return;this.type===_0&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sc);const D=n.getRenderTarget(),F=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(ur),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ue=x!==this.type;ue&&V.traverse(function(ge){ge.material&&(Array.isArray(ge.material)?ge.material.forEach($=>$.needsUpdate=!0):ge.material.needsUpdate=!0)});for(let ge=0,$=C.length;ge<$;ge++){const ae=C[ge],me=ae.shadow;if(me===void 0){Jt("WebGLShadowMap:",ae,"has no shadow.");continue}if(me.autoUpdate===!1&&me.needsUpdate===!1)continue;s.copy(me.mapSize);const Ce=me.getFrameExtents();s.multiply(Ce),r.copy(me.mapSize),(s.x>b||s.y>b)&&(s.x>b&&(r.x=Math.floor(b/Ce.x),s.x=r.x*Ce.x,me.mapSize.x=r.x),s.y>b&&(r.y=Math.floor(b/Ce.y),s.y=r.y*Ce.y,me.mapSize.y=r.y));const Ue=n.state.buffers.depth.getReversed();if(me.camera._reversedDepth=Ue,me.map===null||ue===!0){if(me.map!==null&&(me.map.depthTexture!==null&&(me.map.depthTexture.dispose(),me.map.depthTexture=null),me.map.dispose()),this.type===sl){if(ae.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}me.map=new Ya(s.x,s.y,{format:Zr,type:mr,minFilter:bs,magFilter:bs,generateMipmaps:!1}),me.map.texture.name=ae.name+".shadowMap",me.map.depthTexture=new Uo(s.x,s.y,Xa),me.map.depthTexture.name=ae.name+".shadowMapDepth",me.map.depthTexture.format=pr,me.map.depthTexture.compareFunction=null,me.map.depthTexture.minFilter=Es,me.map.depthTexture.magFilter=Es}else ae.isPointLight?(me.map=new Om(s.x),me.map.depthTexture=new jx(s.x,qa)):(me.map=new Ya(s.x,s.y),me.map.depthTexture=new Uo(s.x,s.y,qa)),me.map.depthTexture.name=ae.name+".shadowMap",me.map.depthTexture.format=pr,this.type===sc?(me.map.depthTexture.compareFunction=Ue?Ru:Au,me.map.depthTexture.minFilter=bs,me.map.depthTexture.magFilter=bs):(me.map.depthTexture.compareFunction=null,me.map.depthTexture.minFilter=Es,me.map.depthTexture.magFilter=Es);me.camera.updateProjectionMatrix()}const tt=me.map.isWebGLCubeRenderTarget?6:1;for(let Ee=0;Ee<tt;Ee++){if(me.map.isWebGLCubeRenderTarget)n.setRenderTarget(me.map,Ee),n.clear();else{Ee===0&&(n.setRenderTarget(me.map),n.clear());const bt=me.getViewport(Ee);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),Y.viewport(o)}if(ae.isPointLight){const bt=me.camera,Je=me.matrix,Rt=ae.distance||bt.far;Rt!==bt.far&&(bt.far=Rt,bt.updateProjectionMatrix()),nl.setFromMatrixPosition(ae.matrixWorld),bt.position.copy(nl),Sd.copy(bt.position),Sd.add(HM[Ee]),bt.up.copy(GM[Ee]),bt.lookAt(Sd),bt.updateMatrixWorld(),Je.makeTranslation(-nl.x,-nl.y,-nl.z),Uf.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),me._frustum.setFromProjectionMatrix(Uf,bt.coordinateSystem,bt.reversedDepth)}else me.updateMatrices(ae);i=me.getFrustum(),P(V,E,me.camera,ae,this.type)}me.isPointLightShadow!==!0&&this.type===sl&&R(me,E),me.needsUpdate=!1}x=this.type,M.needsUpdate=!1,n.setRenderTarget(D,F,k)};function R(C,V){const E=e.update(A);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,_.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ya(s.x,s.y,{format:Zr,type:mr})),p.uniforms.shadow_pass.value=C.map.depthTexture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(V,null,E,p,A,null),_.uniforms.shadow_pass.value=C.mapPass.texture,_.uniforms.resolution.value=C.mapSize,_.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(V,null,E,_,A,null)}function I(C,V,E,D){let F=null;const k=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)F=k;else if(F=E.isPointLight===!0?h:d,n.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const Y=F.uuid,ue=V.uuid;let ge=f[Y];ge===void 0&&(ge={},f[Y]=ge);let $=ge[ue];$===void 0&&($=F.clone(),ge[ue]=$,V.addEventListener("dispose",B)),F=$}if(F.visible=V.visible,F.wireframe=V.wireframe,D===sl?F.side=V.shadowSide!==null?V.shadowSide:V.side:F.side=V.shadowSide!==null?V.shadowSide:v[V.side],F.alphaMap=V.alphaMap,F.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,F.map=V.map,F.clipShadows=V.clipShadows,F.clippingPlanes=V.clippingPlanes,F.clipIntersection=V.clipIntersection,F.displacementMap=V.displacementMap,F.displacementScale=V.displacementScale,F.displacementBias=V.displacementBias,F.wireframeLinewidth=V.wireframeLinewidth,F.linewidth=V.linewidth,E.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const Y=n.properties.get(F);Y.light=E}return F}function P(C,V,E,D,F){if(C.visible===!1)return;if(C.layers.test(V.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&F===sl)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const ue=e.update(C),ge=C.material;if(Array.isArray(ge)){const $=ue.groups;for(let ae=0,me=$.length;ae<me;ae++){const Ce=$[ae],Ue=ge[Ce.materialIndex];if(Ue&&Ue.visible){const tt=I(C,Ue,D,F);C.onBeforeShadow(n,C,V,E,ue,tt,Ce),n.renderBufferDirect(E,null,ue,tt,C,Ce),C.onAfterShadow(n,C,V,E,ue,tt,Ce)}}}else if(ge.visible){const $=I(C,ge,D,F);C.onBeforeShadow(n,C,V,E,ue,$,null),n.renderBufferDirect(E,null,ue,$,C,null),C.onAfterShadow(n,C,V,E,ue,$,null)}}const Y=C.children;for(let ue=0,ge=Y.length;ue<ge;ue++)P(Y[ue],V,E,D,F)}function B(C){C.target.removeEventListener("dispose",B);for(const E in f){const D=f[E],F=C.target.uuid;F in D&&(D[F].dispose(),delete D[F])}}}function WM(n,e){function t(){let G=!1;const He=new Xi;let ve=null;const ht=new Xi(0,0,0,0);return{setMask:function($e){ve!==$e&&!G&&(n.colorMask($e,$e,$e,$e),ve=$e)},setLocked:function($e){G=$e},setClear:function($e,Te,Et,et,bi){bi===!0&&($e*=et,Te*=et,Et*=et),He.set($e,Te,Et,et),ht.equals(He)===!1&&(n.clearColor($e,Te,Et,et),ht.copy(He))},reset:function(){G=!1,ve=null,ht.set(-1,0,0,0)}}}function i(){let G=!1,He=!1,ve=null,ht=null,$e=null;return{setReversed:function(Te){if(He!==Te){const Et=e.get("EXT_clip_control");Te?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),He=Te;const et=$e;$e=null,this.setClear(et)}},getReversed:function(){return He},setTest:function(Te){Te?We(n.DEPTH_TEST):Lt(n.DEPTH_TEST)},setMask:function(Te){ve!==Te&&!G&&(n.depthMask(Te),ve=Te)},setFunc:function(Te){if(He&&(Te=Q0[Te]),ht!==Te){switch(Te){case Ad:n.depthFunc(n.NEVER);break;case Rd:n.depthFunc(n.ALWAYS);break;case Nd:n.depthFunc(n.LESS);break;case Lo:n.depthFunc(n.LEQUAL);break;case Pd:n.depthFunc(n.EQUAL);break;case Cd:n.depthFunc(n.GEQUAL);break;case Id:n.depthFunc(n.GREATER);break;case Dd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=Te}},setLocked:function(Te){G=Te},setClear:function(Te){$e!==Te&&($e=Te,He&&(Te=1-Te),n.clearDepth(Te))},reset:function(){G=!1,ve=null,ht=null,$e=null,He=!1}}}function s(){let G=!1,He=null,ve=null,ht=null,$e=null,Te=null,Et=null,et=null,bi=null;return{setTest:function(Wt){G||(Wt?We(n.STENCIL_TEST):Lt(n.STENCIL_TEST))},setMask:function(Wt){He!==Wt&&!G&&(n.stencilMask(Wt),He=Wt)},setFunc:function(Wt,vs,Bi){(ve!==Wt||ht!==vs||$e!==Bi)&&(n.stencilFunc(Wt,vs,Bi),ve=Wt,ht=vs,$e=Bi)},setOp:function(Wt,vs,Bi){(Te!==Wt||Et!==vs||et!==Bi)&&(n.stencilOp(Wt,vs,Bi),Te=Wt,Et=vs,et=Bi)},setLocked:function(Wt){G=Wt},setClear:function(Wt){bi!==Wt&&(n.clearStencil(Wt),bi=Wt)},reset:function(){G=!1,He=null,ve=null,ht=null,$e=null,Te=null,Et=null,et=null,bi=null}}}const r=new t,o=new i,d=new s,h=new WeakMap,f=new WeakMap;let b={},v={},p={},_=new WeakMap,y=[],A=null,M=!1,x=null,R=null,I=null,P=null,B=null,C=null,V=null,E=new In(0,0,0),D=0,F=!1,k=null,Y=null,ue=null,ge=null,$=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let me=!1,Ce=0;const Ue=n.getParameter(n.VERSION);Ue.indexOf("WebGL")!==-1?(Ce=parseFloat(/^WebGL (\d)/.exec(Ue)[1]),me=Ce>=1):Ue.indexOf("OpenGL ES")!==-1&&(Ce=parseFloat(/^OpenGL ES (\d)/.exec(Ue)[1]),me=Ce>=2);let tt=null,Ee={};const bt=n.getParameter(n.SCISSOR_BOX),Je=n.getParameter(n.VIEWPORT),Rt=new Xi().fromArray(bt),st=new Xi().fromArray(Je);function we(G,He,ve,ht){const $e=new Uint8Array(4),Te=n.createTexture();n.bindTexture(G,Te),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<ve;Et++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(He,0,n.RGBA,1,1,ht,0,n.RGBA,n.UNSIGNED_BYTE,$e):n.texImage2D(He+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,$e);return Te}const nt={};nt[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),nt[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),nt[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),d.setClear(0),We(n.DEPTH_TEST),o.setFunc(Lo),fi(!1),jn(Nh),We(n.CULL_FACE),Un(ur);function We(G){b[G]!==!0&&(n.enable(G),b[G]=!0)}function Lt(G){b[G]!==!1&&(n.disable(G),b[G]=!1)}function Xt(G,He){return p[G]!==He?(n.bindFramebuffer(G,He),p[G]=He,G===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=He),G===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=He),!0):!1}function Ct(G,He){let ve=y,ht=!1;if(G){ve=_.get(He),ve===void 0&&(ve=[],_.set(He,ve));const $e=G.textures;if(ve.length!==$e.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Et=$e.length;Te<Et;Te++)ve[Te]=n.COLOR_ATTACHMENT0+Te;ve.length=$e.length,ht=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,ht=!0);ht&&n.drawBuffers(ve)}function si(G){return A!==G?(n.useProgram(G),A=G,!0):!1}const Ot={[Xr]:n.FUNC_ADD,[y0]:n.FUNC_SUBTRACT,[S0]:n.FUNC_REVERSE_SUBTRACT};Ot[E0]=n.MIN,Ot[w0]=n.MAX;const On={[T0]:n.ZERO,[A0]:n.ONE,[R0]:n.SRC_COLOR,[wd]:n.SRC_ALPHA,[L0]:n.SRC_ALPHA_SATURATE,[I0]:n.DST_COLOR,[P0]:n.DST_ALPHA,[N0]:n.ONE_MINUS_SRC_COLOR,[Td]:n.ONE_MINUS_SRC_ALPHA,[D0]:n.ONE_MINUS_DST_COLOR,[C0]:n.ONE_MINUS_DST_ALPHA,[O0]:n.CONSTANT_COLOR,[U0]:n.ONE_MINUS_CONSTANT_COLOR,[F0]:n.CONSTANT_ALPHA,[k0]:n.ONE_MINUS_CONSTANT_ALPHA};function Un(G,He,ve,ht,$e,Te,Et,et,bi,Wt){if(G===ur){M===!0&&(Lt(n.BLEND),M=!1);return}if(M===!1&&(We(n.BLEND),M=!0),G!==M0){if(G!==x||Wt!==F){if((R!==Xr||B!==Xr)&&(n.blendEquation(n.FUNC_ADD),R=Xr,B=Xr),Wt)switch(G){case Co:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFunc(n.ONE,n.ONE);break;case Ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ch:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Gn("WebGLState: Invalid blending: ",G);break}else switch(G){case Co:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ph:Gn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ch:Gn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gn("WebGLState: Invalid blending: ",G);break}I=null,P=null,C=null,V=null,E.set(0,0,0),D=0,x=G,F=Wt}return}$e=$e||He,Te=Te||ve,Et=Et||ht,(He!==R||$e!==B)&&(n.blendEquationSeparate(Ot[He],Ot[$e]),R=He,B=$e),(ve!==I||ht!==P||Te!==C||Et!==V)&&(n.blendFuncSeparate(On[ve],On[ht],On[Te],On[Et]),I=ve,P=ht,C=Te,V=Et),(et.equals(E)===!1||bi!==D)&&(n.blendColor(et.r,et.g,et.b,bi),E.copy(et),D=bi),x=G,F=!1}function sn(G,He){G.side===gs?Lt(n.CULL_FACE):We(n.CULL_FACE);let ve=G.side===qs;He&&(ve=!ve),fi(ve),G.blending===Co&&G.transparent===!1?Un(ur):Un(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const ht=G.stencilWrite;d.setTest(ht),ht&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),X(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?We(n.SAMPLE_ALPHA_TO_COVERAGE):Lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function fi(G){k!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),k=G)}function jn(G){G!==b0?(We(n.CULL_FACE),G!==Y&&(G===Nh?n.cullFace(n.BACK):G===v0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Lt(n.CULL_FACE),Y=G}function Fn(G){G!==ue&&(me&&n.lineWidth(G),ue=G)}function X(G,He,ve){G?(We(n.POLYGON_OFFSET_FILL),(ge!==He||$!==ve)&&(ge=He,$=ve,o.getReversed()&&(He=-He),n.polygonOffset(He,ve))):Lt(n.POLYGON_OFFSET_FILL)}function Ne(G){G?We(n.SCISSOR_TEST):Lt(n.SCISSOR_TEST)}function Vt(G){G===void 0&&(G=n.TEXTURE0+ae-1),tt!==G&&(n.activeTexture(G),tt=G)}function mn(G,He,ve){ve===void 0&&(tt===null?ve=n.TEXTURE0+ae-1:ve=tt);let ht=Ee[ve];ht===void 0&&(ht={type:void 0,texture:void 0},Ee[ve]=ht),(ht.type!==G||ht.texture!==He)&&(tt!==ve&&(n.activeTexture(ve),tt=ve),n.bindTexture(G,He||nt[G]),ht.type=G,ht.texture=He)}function Ve(){const G=Ee[tt];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Mi(){try{n.compressedTexImage2D(...arguments)}catch(G){Gn("WebGLState:",G)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(G){Gn("WebGLState:",G)}}function S(){try{n.texSubImage2D(...arguments)}catch(G){Gn("WebGLState:",G)}}function ee(){try{n.texSubImage3D(...arguments)}catch(G){Gn("WebGLState:",G)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Gn("WebGLState:",G)}}function ie(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Gn("WebGLState:",G)}}function he(){try{n.texStorage2D(...arguments)}catch(G){Gn("WebGLState:",G)}}function fe(){try{n.texStorage3D(...arguments)}catch(G){Gn("WebGLState:",G)}}function oe(){try{n.texImage2D(...arguments)}catch(G){Gn("WebGLState:",G)}}function pe(){try{n.texImage3D(...arguments)}catch(G){Gn("WebGLState:",G)}}function je(G){return v[G]!==void 0?v[G]:n.getParameter(G)}function Ge(G,He){v[G]!==He&&(n.pixelStorei(G,He),v[G]=He)}function Ie(G){Rt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Rt.copy(G))}function Fe(G){st.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),st.copy(G))}function _t(G,He){let ve=f.get(He);ve===void 0&&(ve=new WeakMap,f.set(He,ve));let ht=ve.get(G);ht===void 0&&(ht=n.getUniformBlockIndex(He,G.name),ve.set(G,ht))}function xt(G,He){const ht=f.get(He).get(G);h.get(He)!==ht&&(n.uniformBlockBinding(He,ht,G.__bindingPointIndex),h.set(He,ht))}function an(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),b={},v={},tt=null,Ee={},p={},_=new WeakMap,y=[],A=null,M=!1,x=null,R=null,I=null,P=null,B=null,C=null,V=null,E=new In(0,0,0),D=0,F=!1,k=null,Y=null,ue=null,ge=null,$=null,Rt.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),d.reset()}return{buffers:{color:r,depth:o,stencil:d},enable:We,disable:Lt,bindFramebuffer:Xt,drawBuffers:Ct,useProgram:si,setBlending:Un,setMaterial:sn,setFlipSided:fi,setCullFace:jn,setLineWidth:Fn,setPolygonOffset:X,setScissorTest:Ne,activeTexture:Vt,bindTexture:mn,unbindTexture:Ve,compressedTexImage2D:Mi,compressedTexImage3D:N,texImage2D:oe,texImage3D:pe,pixelStorei:Ge,getParameter:je,updateUBOMapping:_t,uniformBlockBinding:xt,texStorage2D:he,texStorage3D:fe,texSubImage2D:S,texSubImage3D:ee,compressedTexSubImage2D:Z,compressedTexSubImage3D:ie,scissor:Ie,viewport:Fe,reset:an}}function jM(n,e,t,i,s,r,o){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new xn,b=new WeakMap,v=new Set;let p;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,S){return y?new OffscreenCanvas(N,S):pc("canvas")}function M(N,S,ee){let Z=1;const ie=Mi(N);if((ie.width>ee||ie.height>ee)&&(Z=ee/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const he=Math.floor(Z*ie.width),fe=Math.floor(Z*ie.height);p===void 0&&(p=A(he,fe));const oe=S?A(he,fe):p;return oe.width=he,oe.height=fe,oe.getContext("2d").drawImage(N,0,0,he,fe),Jt("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+he+"x"+fe+")."),oe}else return"data"in N&&Jt("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),N;return N}function x(N){return N.generateMipmaps}function R(N){n.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(N,S,ee,Z,ie,he=!1){if(N!==null){if(n[N]!==void 0)return n[N];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe;Z&&(fe=e.get("EXT_texture_norm16"),fe||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=S;if(S===n.RED&&(ee===n.FLOAT&&(oe=n.R32F),ee===n.HALF_FLOAT&&(oe=n.R16F),ee===n.UNSIGNED_BYTE&&(oe=n.R8),ee===n.UNSIGNED_SHORT&&fe&&(oe=fe.R16_EXT),ee===n.SHORT&&fe&&(oe=fe.R16_SNORM_EXT)),S===n.RED_INTEGER&&(ee===n.UNSIGNED_BYTE&&(oe=n.R8UI),ee===n.UNSIGNED_SHORT&&(oe=n.R16UI),ee===n.UNSIGNED_INT&&(oe=n.R32UI),ee===n.BYTE&&(oe=n.R8I),ee===n.SHORT&&(oe=n.R16I),ee===n.INT&&(oe=n.R32I)),S===n.RG&&(ee===n.FLOAT&&(oe=n.RG32F),ee===n.HALF_FLOAT&&(oe=n.RG16F),ee===n.UNSIGNED_BYTE&&(oe=n.RG8),ee===n.UNSIGNED_SHORT&&fe&&(oe=fe.RG16_EXT),ee===n.SHORT&&fe&&(oe=fe.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(ee===n.UNSIGNED_BYTE&&(oe=n.RG8UI),ee===n.UNSIGNED_SHORT&&(oe=n.RG16UI),ee===n.UNSIGNED_INT&&(oe=n.RG32UI),ee===n.BYTE&&(oe=n.RG8I),ee===n.SHORT&&(oe=n.RG16I),ee===n.INT&&(oe=n.RG32I)),S===n.RGB_INTEGER&&(ee===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),ee===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),ee===n.UNSIGNED_INT&&(oe=n.RGB32UI),ee===n.BYTE&&(oe=n.RGB8I),ee===n.SHORT&&(oe=n.RGB16I),ee===n.INT&&(oe=n.RGB32I)),S===n.RGBA_INTEGER&&(ee===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),ee===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),ee===n.UNSIGNED_INT&&(oe=n.RGBA32UI),ee===n.BYTE&&(oe=n.RGBA8I),ee===n.SHORT&&(oe=n.RGBA16I),ee===n.INT&&(oe=n.RGBA32I)),S===n.RGB&&(ee===n.UNSIGNED_SHORT&&fe&&(oe=fe.RGB16_EXT),ee===n.SHORT&&fe&&(oe=fe.RGB16_SNORM_EXT),ee===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),ee===n.UNSIGNED_INT_10F_11F_11F_REV&&(oe=n.R11F_G11F_B10F)),S===n.RGBA){const pe=he?mc:Vn.getTransfer(ie);ee===n.FLOAT&&(oe=n.RGBA32F),ee===n.HALF_FLOAT&&(oe=n.RGBA16F),ee===n.UNSIGNED_BYTE&&(oe=pe===xi?n.SRGB8_ALPHA8:n.RGBA8),ee===n.UNSIGNED_SHORT&&fe&&(oe=fe.RGBA16_EXT),ee===n.SHORT&&fe&&(oe=fe.RGBA16_SNORM_EXT),ee===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),ee===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function B(N,S){let ee;return N?S===null||S===qa||S===hl?ee=n.DEPTH24_STENCIL8:S===Xa?ee=n.DEPTH32F_STENCIL8:S===ul&&(ee=n.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qa||S===hl?ee=n.DEPTH_COMPONENT24:S===Xa?ee=n.DEPTH_COMPONENT32F:S===ul&&(ee=n.DEPTH_COMPONENT16),ee}function C(N,S){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Es&&N.minFilter!==bs?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function V(N){const S=N.target;S.removeEventListener("dispose",V),D(S),S.isVideoTexture&&b.delete(S),S.isHTMLTexture&&v.delete(S)}function E(N){const S=N.target;S.removeEventListener("dispose",E),k(S)}function D(N){const S=i.get(N);if(S.__webglInit===void 0)return;const ee=N.source,Z=_.get(ee);if(Z){const ie=Z[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(N),Object.keys(Z).length===0&&_.delete(ee)}i.remove(N)}function F(N){const S=i.get(N);n.deleteTexture(S.__webglTexture);const ee=N.source,Z=_.get(ee);delete Z[S.__cacheKey],o.memory.textures--}function k(N){const S=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ie=0;ie<S.__webglFramebuffer[Z].length;ie++)n.deleteFramebuffer(S.__webglFramebuffer[Z][ie]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const ee=N.textures;for(let Z=0,ie=ee.length;Z<ie;Z++){const he=i.get(ee[Z]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(ee[Z])}i.remove(N)}let Y=0;function ue(){Y=0}function ge(){return Y}function $(N){Y=N}function ae(){const N=Y;return N>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),Y+=1,N}function me(N){const S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function Ce(N,S){const ee=i.get(N);if(N.isVideoTexture&&mn(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ee.__version!==N.version){const Z=N.image;if(Z===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(ee,N,S);return}}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture,n.TEXTURE0+S)}function Ue(N,S){const ee=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){Lt(ee,N,S);return}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ee.__webglTexture,n.TEXTURE0+S)}function tt(N,S){const ee=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){Lt(ee,N,S);return}t.bindTexture(n.TEXTURE_3D,ee.__webglTexture,n.TEXTURE0+S)}function Ee(N,S){const ee=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&ee.__version!==N.version){Xt(ee,N,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture,n.TEXTURE0+S)}const bt={[Ld]:n.REPEAT,[cr]:n.CLAMP_TO_EDGE,[Od]:n.MIRRORED_REPEAT},Je={[Es]:n.NEAREST,[H0]:n.NEAREST_MIPMAP_NEAREST,[El]:n.NEAREST_MIPMAP_LINEAR,[bs]:n.LINEAR,[Xc]:n.LINEAR_MIPMAP_NEAREST,[$r]:n.LINEAR_MIPMAP_LINEAR},Rt={[W0]:n.NEVER,[Y0]:n.ALWAYS,[j0]:n.LESS,[Au]:n.LEQUAL,[X0]:n.EQUAL,[Ru]:n.GEQUAL,[K0]:n.GREATER,[$0]:n.NOTEQUAL};function st(N,S){if(S.type===Xa&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===bs||S.magFilter===Xc||S.magFilter===El||S.magFilter===$r||S.minFilter===bs||S.minFilter===Xc||S.minFilter===El||S.minFilter===$r)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,bt[S.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,bt[S.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,bt[S.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Je[S.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Je[S.minFilter]),S.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Rt[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Es||S.minFilter!==El&&S.minFilter!==$r||S.type===Xa&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function we(N,S){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",V));const Z=S.source;let ie=_.get(Z);ie===void 0&&(ie={},_.set(Z,ie));const he=me(S);if(he!==N.__cacheKey){ie[he]===void 0&&(ie[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),ie[he].usedTimes++;const fe=ie[N.__cacheKey];fe!==void 0&&(ie[N.__cacheKey].usedTimes--,fe.usedTimes===0&&F(S)),N.__cacheKey=he,N.__webglTexture=ie[he].texture}return ee}function nt(N,S,ee){return Math.floor(Math.floor(N/ee)/S)}function We(N,S,ee,Z){const he=N.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,ee,Z,S.data);else{he.sort((Ge,Ie)=>Ge.start-Ie.start);let fe=0;for(let Ge=1;Ge<he.length;Ge++){const Ie=he[fe],Fe=he[Ge],_t=Ie.start+Ie.count,xt=nt(Fe.start,S.width,4),an=nt(Ie.start,S.width,4);Fe.start<=_t+1&&xt===an&&nt(Fe.start+Fe.count-1,S.width,4)===xt?Ie.count=Math.max(Ie.count,Fe.start+Fe.count-Ie.start):(++fe,he[fe]=Fe)}he.length=fe+1;const oe=t.getParameter(n.UNPACK_ROW_LENGTH),pe=t.getParameter(n.UNPACK_SKIP_PIXELS),je=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Ge=0,Ie=he.length;Ge<Ie;Ge++){const Fe=he[Ge],_t=Math.floor(Fe.start/4),xt=Math.ceil(Fe.count/4),an=_t%S.width,G=Math.floor(_t/S.width),He=xt,ve=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,an),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,an,G,He,ve,ee,Z,S.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,oe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,je)}}function Lt(N,S,ee){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);const ie=we(N,S),he=S.source;t.bindTexture(Z,N.__webglTexture,n.TEXTURE0+ee);const fe=i.get(he);if(he.version!==fe.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+ee),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ve=Vn.getPrimaries(Vn.workingColorSpace),ht=S.colorSpace===Rr?null:Vn.getPrimaries(S.colorSpace),$e=S.colorSpace===Rr||ve===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let pe=M(S.image,!1,s.maxTextureSize);pe=Ve(S,pe);const je=r.convert(S.format,S.colorSpace),Ge=r.convert(S.type);let Ie=P(S.internalFormat,je,Ge,S.normalized,S.colorSpace,S.isVideoTexture);st(Z,S);let Fe;const _t=S.mipmaps,xt=S.isVideoTexture!==!0,an=fe.__version===void 0||ie===!0,G=he.dataReady,He=C(S,pe);if(S.isDepthTexture)Ie=B(S.format===Yr,S.type),an&&(xt?t.texStorage2D(n.TEXTURE_2D,1,Ie,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Ie,pe.width,pe.height,0,je,Ge,null));else if(S.isDataTexture)if(_t.length>0){xt&&an&&t.texStorage2D(n.TEXTURE_2D,He,Ie,_t[0].width,_t[0].height);for(let ve=0,ht=_t.length;ve<ht;ve++)Fe=_t[ve],xt?G&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,je,Ge,Fe.data):t.texImage2D(n.TEXTURE_2D,ve,Ie,Fe.width,Fe.height,0,je,Ge,Fe.data);S.generateMipmaps=!1}else xt?(an&&t.texStorage2D(n.TEXTURE_2D,He,Ie,pe.width,pe.height),G&&We(S,pe,je,Ge)):t.texImage2D(n.TEXTURE_2D,0,Ie,pe.width,pe.height,0,je,Ge,pe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xt&&an&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Ie,_t[0].width,_t[0].height,pe.depth);for(let ve=0,ht=_t.length;ve<ht;ve++)if(Fe=_t[ve],S.format!==Ua)if(je!==null)if(xt){if(G)if(S.layerUpdates.size>0){const $e=ff(Fe.width,Fe.height,S.format,S.type);for(const Te of S.layerUpdates){const Et=Fe.data.subarray(Te*$e/Fe.data.BYTES_PER_ELEMENT,(Te+1)*$e/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Te,Fe.width,Fe.height,1,je,Et)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Fe.width,Fe.height,pe.depth,je,Fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ie,Fe.width,Fe.height,pe.depth,0,Fe.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Fe.width,Fe.height,pe.depth,je,Ge,Fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ie,Fe.width,Fe.height,pe.depth,0,je,Ge,Fe.data)}else{xt&&an&&t.texStorage2D(n.TEXTURE_2D,He,Ie,_t[0].width,_t[0].height);for(let ve=0,ht=_t.length;ve<ht;ve++)Fe=_t[ve],S.format!==Ua?je!==null?xt?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,je,Fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ie,Fe.width,Fe.height,0,Fe.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?G&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,je,Ge,Fe.data):t.texImage2D(n.TEXTURE_2D,ve,Ie,Fe.width,Fe.height,0,je,Ge,Fe.data)}else if(S.isDataArrayTexture)if(xt){if(an&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Ie,pe.width,pe.height,pe.depth),G)if(S.layerUpdates.size>0){const ve=ff(pe.width,pe.height,S.format,S.type);for(const ht of S.layerUpdates){const $e=pe.data.subarray(ht*ve/pe.data.BYTES_PER_ELEMENT,(ht+1)*ve/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ht,pe.width,pe.height,1,je,Ge,$e)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,je,Ge,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,pe.width,pe.height,pe.depth,0,je,Ge,pe.data);else if(S.isData3DTexture)xt?(an&&t.texStorage3D(n.TEXTURE_3D,He,Ie,pe.width,pe.height,pe.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,je,Ge,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,pe.width,pe.height,pe.depth,0,je,Ge,pe.data);else if(S.isFramebufferTexture){if(an)if(xt)t.texStorage2D(n.TEXTURE_2D,He,Ie,pe.width,pe.height);else{let ve=pe.width,ht=pe.height;for(let $e=0;$e<He;$e++)t.texImage2D(n.TEXTURE_2D,$e,Ie,ve,ht,0,je,Ge,null),ve>>=1,ht>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const ve=n.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),pe.parentNode!==ve){ve.appendChild(pe),v.add(S),ve.onpaint=et=>{const bi=et.changedElements;for(const Wt of v)bi.includes(Wt.image)&&(Wt.needsUpdate=!0)},ve.requestPaint();return}const ht=0,$e=n.RGBA,Te=n.RGBA,Et=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,ht,$e,Te,Et,pe),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(_t.length>0){if(xt&&an){const ve=Mi(_t[0]);t.texStorage2D(n.TEXTURE_2D,He,Ie,ve.width,ve.height)}for(let ve=0,ht=_t.length;ve<ht;ve++)Fe=_t[ve],xt?G&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,je,Ge,Fe):t.texImage2D(n.TEXTURE_2D,ve,Ie,je,Ge,Fe);S.generateMipmaps=!1}else if(xt){if(an){const ve=Mi(pe);t.texStorage2D(n.TEXTURE_2D,He,Ie,ve.width,ve.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,je,Ge,pe)}else t.texImage2D(n.TEXTURE_2D,0,Ie,je,Ge,pe);x(S)&&R(Z),fe.__version=he.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function Xt(N,S,ee){if(S.image.length!==6)return;const Z=we(N,S),ie=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+ee);const he=i.get(ie);if(ie.version!==he.__version||Z===!0){t.activeTexture(n.TEXTURE0+ee);const fe=Vn.getPrimaries(Vn.workingColorSpace),oe=S.colorSpace===Rr?null:Vn.getPrimaries(S.colorSpace),pe=S.colorSpace===Rr||fe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const je=S.isCompressedTexture||S.image[0].isCompressedTexture,Ge=S.image[0]&&S.image[0].isDataTexture,Ie=[];for(let Te=0;Te<6;Te++)!je&&!Ge?Ie[Te]=M(S.image[Te],!0,s.maxCubemapSize):Ie[Te]=Ge?S.image[Te].image:S.image[Te],Ie[Te]=Ve(S,Ie[Te]);const Fe=Ie[0],_t=r.convert(S.format,S.colorSpace),xt=r.convert(S.type),an=P(S.internalFormat,_t,xt,S.normalized,S.colorSpace),G=S.isVideoTexture!==!0,He=he.__version===void 0||Z===!0,ve=ie.dataReady;let ht=C(S,Fe);st(n.TEXTURE_CUBE_MAP,S);let $e;if(je){G&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ht,an,Fe.width,Fe.height);for(let Te=0;Te<6;Te++){$e=Ie[Te].mipmaps;for(let Et=0;Et<$e.length;Et++){const et=$e[Et];S.format!==Ua?_t!==null?G?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Et,0,0,et.width,et.height,_t,et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Et,an,et.width,et.height,0,et.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Et,0,0,et.width,et.height,_t,xt,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Et,an,et.width,et.height,0,_t,xt,et.data)}}}else{if($e=S.mipmaps,G&&He){$e.length>0&&ht++;const Te=Mi(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ht,an,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Ge){G?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Ie[Te].width,Ie[Te].height,_t,xt,Ie[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,an,Ie[Te].width,Ie[Te].height,0,_t,xt,Ie[Te].data);for(let Et=0;Et<$e.length;Et++){const bi=$e[Et].image[Te].image;G?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Et+1,0,0,bi.width,bi.height,_t,xt,bi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Et+1,an,bi.width,bi.height,0,_t,xt,bi.data)}}else{G?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,_t,xt,Ie[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,an,_t,xt,Ie[Te]);for(let Et=0;Et<$e.length;Et++){const et=$e[Et];G?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Et+1,0,0,_t,xt,et.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Et+1,an,_t,xt,et.image[Te])}}}x(S)&&R(n.TEXTURE_CUBE_MAP),he.__version=ie.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function Ct(N,S,ee,Z,ie,he){const fe=r.convert(ee.format,ee.colorSpace),oe=r.convert(ee.type),pe=P(ee.internalFormat,fe,oe,ee.normalized,ee.colorSpace),je=i.get(S),Ge=i.get(ee);if(Ge.__renderTarget=S,!je.__hasExternalTextures){const Ie=Math.max(1,S.width>>he),Fe=Math.max(1,S.height>>he);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,he,pe,Ie,Fe,S.depth,0,fe,oe,null):t.texImage2D(ie,he,pe,Ie,Fe,0,fe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Vt(S)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ie,Ge.__webglTexture,0,Ne(S)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ie,Ge.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function si(N,S,ee){if(n.bindRenderbuffer(n.RENDERBUFFER,N),S.depthBuffer){const Z=S.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,he=B(S.stencilBuffer,ie),fe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Vt(S)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne(S),he,S.width,S.height):ee?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne(S),he,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,he,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,N)}else{const Z=S.textures;for(let ie=0;ie<Z.length;ie++){const he=Z[ie],fe=r.convert(he.format,he.colorSpace),oe=r.convert(he.type),pe=P(he.internalFormat,fe,oe,he.normalized,he.colorSpace);Vt(S)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne(S),pe,S.width,S.height):ee?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne(S),pe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,pe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(N,S,ee){const Z=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(S.depthTexture);if(ie.__renderTarget=S,(!ie.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,S.depthTexture.addEventListener("dispose",V)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),st(n.TEXTURE_CUBE_MAP,S.depthTexture);const je=r.convert(S.depthTexture.format),Ge=r.convert(S.depthTexture.type);let Ie;S.depthTexture.format===pr?Ie=n.DEPTH_COMPONENT24:S.depthTexture.format===Yr&&(Ie=n.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ie,S.width,S.height,0,je,Ge,null)}}else Ce(S.depthTexture,0);const he=ie.__webglTexture,fe=Ne(S),oe=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+ee:n.TEXTURE_2D,pe=S.depthTexture.format===Yr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===pr)Vt(S)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,oe,he,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,pe,oe,he,0);else if(S.depthTexture.format===Yr)Vt(S)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,oe,he,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,pe,oe,he,0);else throw new Error("Unknown depthTexture format")}function On(N){const S=i.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){const Z=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=Z}if(N.depthTexture&&!S.__autoAllocateDepthBuffer)if(ee)for(let Z=0;Z<6;Z++)Ot(S.__webglFramebuffer[Z],N,Z);else{const Z=N.texture.mipmaps;Z&&Z.length>0?Ot(S.__webglFramebuffer[0],N,0):Ot(S.__webglFramebuffer,N,0)}else if(ee){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),si(S.__webglDepthbuffer[Z],N,!1);else{const ie=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,he)}}else{const Z=N.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),si(S.__webglDepthbuffer,N,!1);else{const ie=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,he)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Un(N,S,ee){const Z=i.get(N);S!==void 0&&Ct(Z.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ee!==void 0&&On(N)}function sn(N){const S=N.texture,ee=i.get(N),Z=i.get(S);N.addEventListener("dispose",E);const ie=N.textures,he=N.isWebGLCubeRenderTarget===!0,fe=ie.length>1;if(fe||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,o.memory.textures++),he){ee.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer[oe]=[];for(let pe=0;pe<S.mipmaps.length;pe++)ee.__webglFramebuffer[oe][pe]=n.createFramebuffer()}else ee.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)ee.__webglFramebuffer[oe]=n.createFramebuffer()}else ee.__webglFramebuffer=n.createFramebuffer();if(fe)for(let oe=0,pe=ie.length;oe<pe;oe++){const je=i.get(ie[oe]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&Vt(N)===!1){ee.__webglMultisampledFramebuffer=n.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let oe=0;oe<ie.length;oe++){const pe=ie[oe];ee.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ee.__webglColorRenderbuffer[oe]);const je=r.convert(pe.format,pe.colorSpace),Ge=r.convert(pe.type),Ie=P(pe.internalFormat,je,Ge,pe.normalized,pe.colorSpace,N.isXRRenderTarget===!0),Fe=Ne(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ie,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,ee.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=n.createRenderbuffer(),si(ee.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),st(n.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)Ct(ee.__webglFramebuffer[oe][pe],N,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else Ct(ee.__webglFramebuffer[oe],N,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);x(S)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let oe=0,pe=ie.length;oe<pe;oe++){const je=ie[oe],Ge=i.get(je);let Ie=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ie=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Ge.__webglTexture),st(Ie,je),Ct(ee.__webglFramebuffer,N,je,n.COLOR_ATTACHMENT0+oe,Ie,0),x(je)&&R(Ie)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(oe=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,Z.__webglTexture),st(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)Ct(ee.__webglFramebuffer[pe],N,S,n.COLOR_ATTACHMENT0,oe,pe);else Ct(ee.__webglFramebuffer,N,S,n.COLOR_ATTACHMENT0,oe,0);x(S)&&R(oe),t.unbindTexture()}N.depthBuffer&&On(N)}function fi(N){const S=N.textures;for(let ee=0,Z=S.length;ee<Z;ee++){const ie=S[ee];if(x(ie)){const he=I(N),fe=i.get(ie).__webglTexture;t.bindTexture(he,fe),R(he),t.unbindTexture()}}}const jn=[],Fn=[];function X(N){if(N.samples>0){if(Vt(N)===!1){const S=N.textures,ee=N.width,Z=N.height;let ie=n.COLOR_BUFFER_BIT;const he=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(N),oe=S.length>1;if(oe)for(let je=0;je<S.length;je++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const pe=N.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let je=0;je<S.length;je++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[je]);const Ge=i.get(S[je]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,ee,Z,0,0,ee,Z,ie,n.NEAREST),h===!0&&(jn.length=0,Fn.length=0,jn.push(n.COLOR_ATTACHMENT0+je),N.depthBuffer&&N.resolveDepthBuffer===!1&&(jn.push(he),Fn.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,jn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let je=0;je<S.length;je++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,fe.__webglColorRenderbuffer[je]);const Ge=i.get(S[je]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const S=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ne(N){return Math.min(s.maxSamples,N.samples)}function Vt(N){const S=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mn(N){const S=o.render.frame;b.get(N)!==S&&(b.set(N,S),N.update())}function Ve(N,S){const ee=N.colorSpace,Z=N.format,ie=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==fc&&ee!==Rr&&(Vn.getTransfer(ee)===xi?(Z!==Ua||ie!==aa)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gn("WebGLTextures: Unsupported texture color space:",ee)),S}function Mi(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(f.width=N.naturalWidth||N.width,f.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(f.width=N.displayWidth,f.height=N.displayHeight):(f.width=N.width,f.height=N.height),f}this.allocateTextureUnit=ae,this.resetTextureUnits=ue,this.getTextureUnits=ge,this.setTextureUnits=$,this.setTexture2D=Ce,this.setTexture2DArray=Ue,this.setTexture3D=tt,this.setTextureCube=Ee,this.rebindTextures=Un,this.setupRenderTarget=sn,this.updateRenderTargetMipmap=fi,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=On,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function XM(n,e){function t(i,s=Rr){let r;const o=Vn.getTransfer(s);if(i===aa)return n.UNSIGNED_BYTE;if(i===yu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Su)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===fm)return n.BYTE;if(i===mm)return n.SHORT;if(i===ul)return n.UNSIGNED_SHORT;if(i===Mu)return n.INT;if(i===qa)return n.UNSIGNED_INT;if(i===Xa)return n.FLOAT;if(i===mr)return n.HALF_FLOAT;if(i===gm)return n.ALPHA;if(i===bm)return n.RGB;if(i===Ua)return n.RGBA;if(i===pr)return n.DEPTH_COMPONENT;if(i===Yr)return n.DEPTH_STENCIL;if(i===vm)return n.RED;if(i===Eu)return n.RED_INTEGER;if(i===Zr)return n.RG;if(i===wu)return n.RG_INTEGER;if(i===Tu)return n.RGBA_INTEGER;if(i===ac||i===rc||i===oc||i===lc)if(o===xi)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ac)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ac)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ud||i===Fd||i===kd||i===zd)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ud)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bd||i===Hd||i===Gd||i===Vd||i===Wd||i===uc||i===jd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bd||i===Hd)return o===xi?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gd)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vd)return r.COMPRESSED_R11_EAC;if(i===Wd)return r.COMPRESSED_SIGNED_R11_EAC;if(i===uc)return r.COMPRESSED_RG11_EAC;if(i===jd)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xd||i===Kd||i===$d||i===Yd||i===qd||i===Zd||i===Jd||i===Qd||i===eu||i===tu||i===nu||i===iu||i===su||i===au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xd)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$d)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yd)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qd)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zd)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jd)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qd)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===eu)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tu)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nu)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===iu)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===su)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===au)return o===xi?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ru||i===ou||i===lu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ru)return o===xi?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ou)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cu||i===du||i===hc||i===uu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===cu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===du)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const KM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$M=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Pm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Za({vertexShader:KM,fragmentShader:$M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new Wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qM extends Jr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,d="local-floor",h=1,f=null,b=null,v=null,p=null,_=null,y=null;const A=typeof XRWebGLBinding<"u",M=new YM,x={},R=t.getContextAttributes();let I=null,P=null;const B=[],C=[],V=new xn;let E=null;const D=new va;D.viewport=new Xi;const F=new va;F.viewport=new Xi;const k=[D,F],Y=new ag;let ue=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(we){let nt=B[we];return nt===void 0&&(nt=new Jc,B[we]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(we){let nt=B[we];return nt===void 0&&(nt=new Jc,B[we]=nt),nt.getGripSpace()},this.getHand=function(we){let nt=B[we];return nt===void 0&&(nt=new Jc,B[we]=nt),nt.getHandSpace()};function $(we){const nt=C.indexOf(we.inputSource);if(nt===-1)return;const We=B[nt];We!==void 0&&(We.update(we.inputSource,we.frame,f||o),We.dispatchEvent({type:we.type,data:we.inputSource}))}function ae(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",me);for(let we=0;we<B.length;we++){const nt=C[we];nt!==null&&(C[we]=null,B[we].disconnect(nt))}ue=null,ge=null,M.reset();for(const we in x)delete x[we];e.setRenderTarget(I),_=null,p=null,v=null,s=null,P=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(we){r=we,i.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(we){d=we,i.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(we){f=we},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(s,t)),v},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(we){if(s=we,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",me),R.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(V),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let We=null,Lt=null,Xt=null;R.depth&&(Xt=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,We=R.stencil?Yr:pr,Lt=R.stencil?hl:qa);const Ct={colorFormat:t.RGBA8,depthFormat:Xt,scaleFactor:r};v=this.getBinding(),p=v.createProjectionLayer(Ct),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),P=new Ya(p.textureWidth,p.textureHeight,{format:Ua,type:aa,depthTexture:new Uo(p.textureWidth,p.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,We),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const We={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,t,We),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),P=new Ya(_.framebufferWidth,_.framebufferHeight,{format:Ua,type:aa,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),f=null,o=await s.requestReferenceSpace(d),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function me(we){for(let nt=0;nt<we.removed.length;nt++){const We=we.removed[nt],Lt=C.indexOf(We);Lt>=0&&(C[Lt]=null,B[Lt].disconnect(We))}for(let nt=0;nt<we.added.length;nt++){const We=we.added[nt];let Lt=C.indexOf(We);if(Lt===-1){for(let Ct=0;Ct<B.length;Ct++)if(Ct>=C.length){C.push(We),Lt=Ct;break}else if(C[Ct]===null){C[Ct]=We,Lt=Ct;break}if(Lt===-1)break}const Xt=B[Lt];Xt&&Xt.connect(We)}}const Ce=new z,Ue=new z;function tt(we,nt,We){Ce.setFromMatrixPosition(nt.matrixWorld),Ue.setFromMatrixPosition(We.matrixWorld);const Lt=Ce.distanceTo(Ue),Xt=nt.projectionMatrix.elements,Ct=We.projectionMatrix.elements,si=Xt[14]/(Xt[10]-1),Ot=Xt[14]/(Xt[10]+1),On=(Xt[9]+1)/Xt[5],Un=(Xt[9]-1)/Xt[5],sn=(Xt[8]-1)/Xt[0],fi=(Ct[8]+1)/Ct[0],jn=si*sn,Fn=si*fi,X=Lt/(-sn+fi),Ne=X*-sn;if(nt.matrixWorld.decompose(we.position,we.quaternion,we.scale),we.translateX(Ne),we.translateZ(X),we.matrixWorld.compose(we.position,we.quaternion,we.scale),we.matrixWorldInverse.copy(we.matrixWorld).invert(),Xt[10]===-1)we.projectionMatrix.copy(nt.projectionMatrix),we.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Vt=si+X,mn=Ot+X,Ve=jn-Ne,Mi=Fn+(Lt-Ne),N=On*Ot/mn*Vt,S=Un*Ot/mn*Vt;we.projectionMatrix.makePerspective(Ve,Mi,N,S,Vt,mn),we.projectionMatrixInverse.copy(we.projectionMatrix).invert()}}function Ee(we,nt){nt===null?we.matrixWorld.copy(we.matrix):we.matrixWorld.multiplyMatrices(nt.matrixWorld,we.matrix),we.matrixWorldInverse.copy(we.matrixWorld).invert()}this.updateCamera=function(we){if(s===null)return;let nt=we.near,We=we.far;M.texture!==null&&(M.depthNear>0&&(nt=M.depthNear),M.depthFar>0&&(We=M.depthFar)),Y.near=F.near=D.near=nt,Y.far=F.far=D.far=We,(ue!==Y.near||ge!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ue=Y.near,ge=Y.far),Y.layers.mask=we.layers.mask|6,D.layers.mask=Y.layers.mask&-5,F.layers.mask=Y.layers.mask&-3;const Lt=we.parent,Xt=Y.cameras;Ee(Y,Lt);for(let Ct=0;Ct<Xt.length;Ct++)Ee(Xt[Ct],Lt);Xt.length===2?tt(Y,D,F):Y.projectionMatrix.copy(D.projectionMatrix),bt(we,Y,Lt)};function bt(we,nt,We){We===null?we.matrix.copy(nt.matrixWorld):(we.matrix.copy(We.matrixWorld),we.matrix.invert(),we.matrix.multiply(nt.matrixWorld)),we.matrix.decompose(we.position,we.quaternion,we.scale),we.updateMatrixWorld(!0),we.projectionMatrix.copy(nt.projectionMatrix),we.projectionMatrixInverse.copy(nt.projectionMatrixInverse),we.isPerspectiveCamera&&(we.fov=ml*2*Math.atan(1/we.projectionMatrix.elements[5]),we.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(p===null&&_===null))return h},this.setFoveation=function(we){h=we,p!==null&&(p.fixedFoveation=we),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=we)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(we){return x[we]};let Je=null;function Rt(we,nt){if(b=nt.getViewerPose(f||o),y=nt,b!==null){const We=b.views;_!==null&&(e.setRenderTargetFramebuffer(P,_.framebuffer),e.setRenderTarget(P));let Lt=!1;We.length!==Y.cameras.length&&(Y.cameras.length=0,Lt=!0);for(let Ot=0;Ot<We.length;Ot++){const On=We[Ot];let Un=null;if(_!==null)Un=_.getViewport(On);else{const fi=v.getViewSubImage(p,On);Un=fi.viewport,Ot===0&&(e.setRenderTargetTextures(P,fi.colorTexture,fi.depthStencilTexture),e.setRenderTarget(P))}let sn=k[Ot];sn===void 0&&(sn=new va,sn.layers.enable(Ot),sn.viewport=new Xi,k[Ot]=sn),sn.matrix.fromArray(On.transform.matrix),sn.matrix.decompose(sn.position,sn.quaternion,sn.scale),sn.projectionMatrix.fromArray(On.projectionMatrix),sn.projectionMatrixInverse.copy(sn.projectionMatrix).invert(),sn.viewport.set(Un.x,Un.y,Un.width,Un.height),Ot===0&&(Y.matrix.copy(sn.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Lt===!0&&Y.cameras.push(sn)}const Xt=s.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){v=i.getBinding();const Ot=v.getDepthInformation(We[0]);Ot&&Ot.isValid&&Ot.texture&&M.init(Ot,s.renderState)}if(Xt&&Xt.includes("camera-access")&&A){e.state.unbindTexture(),v=i.getBinding();for(let Ot=0;Ot<We.length;Ot++){const On=We[Ot].camera;if(On){let Un=x[On];Un||(Un=new Pm,x[On]=Un);const sn=v.getCameraImage(On);Un.sourceTexture=sn}}}}for(let We=0;We<B.length;We++){const Lt=C[We],Xt=B[We];Lt!==null&&Xt!==void 0&&Xt.update(Lt,nt,f||o)}Je&&Je(we,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),y=null}const st=new Dm;st.setAnimationLoop(Rt),this.setAnimationLoop=function(we){Je=we},this.dispose=function(){}}}const ZM=new Fi,Bm=new fn;Bm.set(-1,0,0,0,1,0,0,0,1);function JM(n,e){function t(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function i(M,x){x.color.getRGB(M.fogColor.value,Cm(n)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function s(M,x,R,I,P){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(M,x):x.isMeshLambertMaterial?(r(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(M,x),v(M,x)):x.isMeshPhongMaterial?(r(M,x),b(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(M,x),p(M,x),x.isMeshPhysicalMaterial&&_(M,x,P)):x.isMeshMatcapMaterial?(r(M,x),y(M,x)):x.isMeshDepthMaterial?r(M,x):x.isMeshDistanceMaterial?(r(M,x),A(M,x)):x.isMeshNormalMaterial?r(M,x):x.isLineBasicMaterial?(o(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?h(M,x,R,I):x.isSpriteMaterial?f(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,t(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,t(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===qs&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,t(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===qs&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,t(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,t(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const R=e.get(x),I=R.envMap,P=R.envMapRotation;I&&(M.envMap.value=I,M.envMapRotation.value.setFromMatrix4(ZM.makeRotationFromEuler(P)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Bm),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,M.aoMapTransform))}function o(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,t(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function h(M,x,R,I){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*R,M.scale.value=I*.5,x.map&&(M.map.value=x.map,t(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,t(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function b(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function p(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function _(M,x,R){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===qs&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=R.texture,M.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,M.specularIntensityMapTransform))}function y(M,x){x.matcap&&(M.matcap.value=x.matcap)}function A(M,x){const R=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(R.matrixWorld),M.nearDistance.value=R.shadow.camera.near,M.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function QM(n,e,t,i){let s={},r={},o=[];const d=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,I){const P=I.program;i.uniformBlockBinding(R,P)}function f(R,I){let P=s[R.id];P===void 0&&(y(R),P=b(R),s[R.id]=P,R.addEventListener("dispose",M));const B=I.program;i.updateUBOMapping(R,B);const C=e.render.frame;r[R.id]!==C&&(p(R),r[R.id]=C)}function b(R){const I=v();R.__bindingPointIndex=I;const P=n.createBuffer(),B=R.__size,C=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,B,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,I,P),P}function v(){for(let R=0;R<d;R++)if(o.indexOf(R)===-1)return o.push(R),R;return Gn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){const I=s[R.id],P=R.uniforms,B=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,I);for(let C=0,V=P.length;C<V;C++){const E=Array.isArray(P[C])?P[C]:[P[C]];for(let D=0,F=E.length;D<F;D++){const k=E[D];if(_(k,C,D,B)===!0){const Y=k.__offset,ue=Array.isArray(k.value)?k.value:[k.value];let ge=0;for(let $=0;$<ue.length;$++){const ae=ue[$],me=A(ae);typeof ae=="number"||typeof ae=="boolean"?(k.__data[0]=ae,n.bufferSubData(n.UNIFORM_BUFFER,Y+ge,k.__data)):ae.isMatrix3?(k.__data[0]=ae.elements[0],k.__data[1]=ae.elements[1],k.__data[2]=ae.elements[2],k.__data[3]=0,k.__data[4]=ae.elements[3],k.__data[5]=ae.elements[4],k.__data[6]=ae.elements[5],k.__data[7]=0,k.__data[8]=ae.elements[6],k.__data[9]=ae.elements[7],k.__data[10]=ae.elements[8],k.__data[11]=0):ArrayBuffer.isView(ae)?k.__data.set(new ae.constructor(ae.buffer,ae.byteOffset,k.__data.length)):(ae.toArray(k.__data,ge),ge+=me.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(R,I,P,B){const C=R.value,V=I+"_"+P;if(B[V]===void 0)return typeof C=="number"||typeof C=="boolean"?B[V]=C:ArrayBuffer.isView(C)?B[V]=C.slice():B[V]=C.clone(),!0;{const E=B[V];if(typeof C=="number"||typeof C=="boolean"){if(E!==C)return B[V]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(E.equals(C)===!1)return E.copy(C),!0}}return!1}function y(R){const I=R.uniforms;let P=0;const B=16;for(let V=0,E=I.length;V<E;V++){const D=Array.isArray(I[V])?I[V]:[I[V]];for(let F=0,k=D.length;F<k;F++){const Y=D[F],ue=Array.isArray(Y.value)?Y.value:[Y.value];for(let ge=0,$=ue.length;ge<$;ge++){const ae=ue[ge],me=A(ae),Ce=P%B,Ue=Ce%me.boundary,tt=Ce+Ue;P+=Ue,tt!==0&&B-tt<me.storage&&(P+=B-tt),Y.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=P,P+=me.storage}}}const C=P%B;return C>0&&(P+=B-C),R.__size=P,R.__cache={},this}function A(R){const I={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(I.boundary=4,I.storage=4):R.isVector2?(I.boundary=8,I.storage=8):R.isVector3||R.isColor?(I.boundary=16,I.storage=12):R.isVector4?(I.boundary=16,I.storage=16):R.isMatrix3?(I.boundary=48,I.storage=48):R.isMatrix4?(I.boundary=64,I.storage=64):R.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(I.boundary=16,I.storage=R.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",R),I}function M(R){const I=R.target;I.removeEventListener("dispose",M);const P=o.indexOf(I.__bindingPointIndex);o.splice(P,1),n.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function x(){for(const R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:h,update:f,dispose:x}}const e1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ga=null;function t1(){return Ga===null&&(Ga=new Fx(e1,16,16,Zr,mr),Ga.name="DFG_LUT",Ga.minFilter=bs,Ga.magFilter=bs,Ga.wrapS=cr,Ga.wrapT=cr,Ga.generateMipmaps=!1,Ga.needsUpdate=!0),Ga}class n1{constructor(e={}){const{canvas:t=Z0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:p=!1,outputBufferType:_=aa}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=o;const A=_,M=new Set([Tu,wu,Eu]),x=new Set([aa,qa,ul,hl,yu,Su]),R=new Uint32Array(4),I=new Int32Array(4),P=new z;let B=null,C=null;const V=[],E=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let k=!1,Y=null;this._outputColorSpace=sa;let ue=0,ge=0,$=null,ae=-1,me=null;const Ce=new Xi,Ue=new Xi;let tt=null;const Ee=new In(0);let bt=0,Je=t.width,Rt=t.height,st=1,we=null,nt=null;const We=new Xi(0,0,Je,Rt),Lt=new Xi(0,0,Je,Rt);let Xt=!1;const Ct=new Du;let si=!1,Ot=!1;const On=new Fi,Un=new z,sn=new Xi,fi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jn=!1;function Fn(){return $===null?st:1}let X=i;function Ne(w,K){return t.getContext(w,K)}try{const w={alpha:!0,depth:s,stencil:r,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:b,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_u}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",et,!1),X===null){const K="webgl2";if(X=Ne(K,w),X===null)throw Ne(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Gn("WebGLRenderer: "+w.message),w}let Vt,mn,Ve,Mi,N,S,ee,Z,ie,he,fe,oe,pe,je,Ge,Ie,Fe,_t,xt,an,G,He,ve;function ht(){Vt=new t_(X),Vt.init(),G=new XM(X,Vt),mn=new Kv(X,Vt,e,G),Ve=new WM(X,Vt),mn.reversedDepthBuffer&&p&&Ve.buffers.depth.setReversed(!0),Mi=new s_(X),N=new PM,S=new jM(X,Vt,Ve,N,mn,G,Mi),ee=new e_(F),Z=new lg(X),He=new jv(X,Z),ie=new n_(X,Z,Mi,He),he=new r_(X,ie,Z,He,Mi),_t=new a_(X,mn,S),Ge=new $v(N),fe=new NM(F,ee,Vt,mn,He,Ge),oe=new JM(F,N),pe=new IM,je=new kM(Vt),Fe=new Wv(F,ee,Ve,he,y,h),Ie=new VM(F,he,mn),ve=new QM(X,Mi,mn,Ve),xt=new Xv(X,Vt,Mi),an=new i_(X,Vt,Mi),Mi.programs=fe.programs,F.capabilities=mn,F.extensions=Vt,F.properties=N,F.renderLists=pe,F.shadowMap=Ie,F.state=Ve,F.info=Mi}ht(),A!==aa&&(D=new l_(A,t.width,t.height,s,r));const $e=new qM(F,X);this.xr=$e,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=Vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(w){w!==void 0&&(st=w,this.setSize(Je,Rt,!1))},this.getSize=function(w){return w.set(Je,Rt)},this.setSize=function(w,K,ne=!0){if($e.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Je=w,Rt=K,t.width=Math.floor(w*st),t.height=Math.floor(K*st),ne===!0&&(t.style.width=w+"px",t.style.height=K+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(Je*st,Rt*st).floor()},this.setDrawingBufferSize=function(w,K,ne){Je=w,Rt=K,st=ne,t.width=Math.floor(w*ne),t.height=Math.floor(K*ne),this.setViewport(0,0,w,K)},this.setEffects=function(w){if(A===aa){Gn("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let K=0;K<w.length;K++)if(w[K].isOutputPass===!0){Jt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Ce)},this.getViewport=function(w){return w.copy(We)},this.setViewport=function(w,K,ne,J){w.isVector4?We.set(w.x,w.y,w.z,w.w):We.set(w,K,ne,J),Ve.viewport(Ce.copy(We).multiplyScalar(st).round())},this.getScissor=function(w){return w.copy(Lt)},this.setScissor=function(w,K,ne,J){w.isVector4?Lt.set(w.x,w.y,w.z,w.w):Lt.set(w,K,ne,J),Ve.scissor(Ue.copy(Lt).multiplyScalar(st).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(w){Ve.setScissorTest(Xt=w)},this.setOpaqueSort=function(w){we=w},this.setTransparentSort=function(w){nt=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,ne=!0){let J=0;if(w){let re=!1;if($!==null){const rt=$.texture.format;re=M.has(rt)}if(re){const rt=$.texture.type,ft=x.has(rt),at=Fe.getClearColor(),yt=Fe.getClearAlpha(),Tt=at.r,$t=at.g,rn=at.b;ft?(R[0]=Tt,R[1]=$t,R[2]=rn,R[3]=yt,X.clearBufferuiv(X.COLOR,0,R)):(I[0]=Tt,I[1]=$t,I[2]=rn,I[3]=yt,X.clearBufferiv(X.COLOR,0,I))}else J|=X.COLOR_BUFFER_BIT}K&&(J|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(J|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&X.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Y=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",et,!1),Fe.dispose(),pe.dispose(),je.dispose(),N.dispose(),ee.dispose(),he.dispose(),He.dispose(),ve.dispose(),fe.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",oa),$e.removeEventListener("sessionend",ss),yi.stop()};function Te(w){w.preventDefault(),xc("WebGLRenderer: Context Lost."),k=!0}function Et(){xc("WebGLRenderer: Context Restored."),k=!1;const w=Mi.autoReset,K=Ie.enabled,ne=Ie.autoUpdate,J=Ie.needsUpdate,re=Ie.type;ht(),Mi.autoReset=w,Ie.enabled=K,Ie.autoUpdate=ne,Ie.needsUpdate=J,Ie.type=re}function et(w){Gn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function bi(w){const K=w.target;K.removeEventListener("dispose",bi),Wt(K)}function Wt(w){vs(w),N.remove(w)}function vs(w){const K=N.get(w).programs;K!==void 0&&(K.forEach(function(ne){fe.releaseProgram(ne)}),w.isShaderMaterial&&fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,ne,J,re,rt){K===null&&(K=fi);const ft=re.isMesh&&re.matrixWorld.determinant()<0,at=Ti(w,K,ne,J,re);Ve.setMaterial(J,ft);let yt=ne.index,Tt=1;if(J.wireframe===!0){if(yt=ie.getWireframeAttribute(ne),yt===void 0)return;Tt=2}const $t=ne.drawRange,rn=ne.attributes.position;let Nt=$t.start*Tt,Wn=($t.start+$t.count)*Tt;rt!==null&&(Nt=Math.max(Nt,rt.start*Tt),Wn=Math.min(Wn,(rt.start+rt.count)*Tt)),yt!==null?(Nt=Math.max(Nt,0),Wn=Math.min(Wn,yt.count)):rn!=null&&(Nt=Math.max(Nt,0),Wn=Math.min(Wn,rn.count));const mi=Wn-Nt;if(mi<0||mi===1/0)return;He.setup(re,J,at,ne,yt);let Si,kn=xt;if(yt!==null&&(Si=Z.get(yt),kn=an,kn.setIndex(Si)),re.isMesh)J.wireframe===!0?(Ve.setLineWidth(J.wireframeLinewidth*Fn()),kn.setMode(X.LINES)):kn.setMode(X.TRIANGLES);else if(re.isLine){let Vi=J.linewidth;Vi===void 0&&(Vi=1),Ve.setLineWidth(Vi*Fn()),re.isLineSegments?kn.setMode(X.LINES):re.isLineLoop?kn.setMode(X.LINE_LOOP):kn.setMode(X.LINE_STRIP)}else re.isPoints?kn.setMode(X.POINTS):re.isSprite&&kn.setMode(X.TRIANGLES);if(re.isBatchedMesh)if(Vt.get("WEBGL_multi_draw"))kn.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Vi=re._multiDrawStarts,lt=re._multiDrawCounts,Ki=re._multiDrawCount,gn=yt?Z.get(yt).bytesPerElement:1,Zi=N.get(J).currentProgram.getUniforms();for(let H=0;H<Ki;H++)Zi.setValue(X,"_gl_DrawID",H),kn.render(Vi[H]/gn,lt[H])}else if(re.isInstancedMesh)kn.renderInstances(Nt,mi,re.count);else if(ne.isInstancedBufferGeometry){const Vi=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,lt=Math.min(ne.instanceCount,Vi);kn.renderInstances(Nt,mi,lt)}else kn.render(Nt,mi)};function Bi(w,K,ne){w.transparent===!0&&w.side===gs&&w.forceSinglePass===!1?(w.side=qs,w.needsUpdate=!0,ca(w,K,ne),w.side=Pr,w.needsUpdate=!0,ca(w,K,ne),w.side=gs):ca(w,K,ne)}this.compile=function(w,K,ne=null){ne===null&&(ne=w),C=je.get(ne),C.init(K),E.push(C),ne.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(C.pushLight(re),re.castShadow&&C.pushShadow(re))}),w!==ne&&w.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(C.pushLight(re),re.castShadow&&C.pushShadow(re))}),C.setupLights();const J=new Set;return w.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const rt=re.material;if(rt)if(Array.isArray(rt))for(let ft=0;ft<rt.length;ft++){const at=rt[ft];Bi(at,ne,re),J.add(at)}else Bi(rt,ne,re),J.add(rt)}),C=E.pop(),J},this.compileAsync=function(w,K,ne=null){const J=this.compile(w,K,ne);return new Promise(re=>{function rt(){if(J.forEach(function(ft){N.get(ft).currentProgram.isReady()&&J.delete(ft)}),J.size===0){re(w);return}setTimeout(rt,10)}Vt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let ai=null;function ra(w){ai&&ai(w)}function oa(){yi.stop()}function ss(){yi.start()}const yi=new Dm;yi.setAnimationLoop(ra),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(w){ai=w,$e.setAnimationLoop(w),w===null?yi.stop():yi.start()},$e.addEventListener("sessionstart",oa),$e.addEventListener("sessionend",ss),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){Gn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Y!==null&&Y.renderStart(w,K);const ne=$e.enabled===!0&&$e.isPresenting===!0,J=D!==null&&($===null||ne)&&D.begin(F,$);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(K),K=$e.getCamera()),w.isScene===!0&&w.onBeforeRender(F,w,K,$),C=je.get(w,E.length),C.init(K),C.state.textureUnits=S.getTextureUnits(),E.push(C),On.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ct.setFromProjectionMatrix(On,Ka,K.reversedDepth),Ot=this.localClippingEnabled,si=Ge.init(this.clippingPlanes,Ot),B=pe.get(w,V.length),B.init(),V.push(B),$e.enabled===!0&&$e.isPresenting===!0){const ft=F.xr.getDepthSensingMesh();ft!==null&&Us(ft,K,-1/0,F.sortObjects)}Us(w,K,0,F.sortObjects),B.finish(),F.sortObjects===!0&&B.sort(we,nt),jn=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,jn&&Fe.addToRenderList(B,w),this.info.render.frame++,si===!0&&Ge.beginShadows();const re=C.state.shadowsArray;if(Ie.render(re,w,K),si===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&D.hasRenderPass())===!1){const ft=B.opaque,at=B.transmissive;if(C.setupLights(),K.isArrayCamera){const yt=K.cameras;if(at.length>0)for(let Tt=0,$t=yt.length;Tt<$t;Tt++){const rn=yt[Tt];la(ft,at,w,rn)}jn&&Fe.render(w);for(let Tt=0,$t=yt.length;Tt<$t;Tt++){const rn=yt[Tt];Hi(B,w,rn,rn.viewport)}}else at.length>0&&la(ft,at,w,K),jn&&Fe.render(w),Hi(B,w,K)}$!==null&&ge===0&&(S.updateMultisampleRenderTarget($),S.updateRenderTargetMipmap($)),J&&D.end(F),w.isScene===!0&&w.onAfterRender(F,w,K),He.resetDefaultState(),ae=-1,me=null,E.pop(),E.length>0?(C=E[E.length-1],S.setTextureUnits(C.state.textureUnits),si===!0&&Ge.setGlobalState(F.clippingPlanes,C.state.camera)):C=null,V.pop(),V.length>0?B=V[V.length-1]:B=null,Y!==null&&Y.renderEnd()};function Us(w,K,ne,J){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)ne=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLightProbeGrid)C.pushLightProbeGrid(w);else if(w.isLight)C.pushLight(w),w.castShadow&&C.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ct.intersectsSprite(w)){J&&sn.setFromMatrixPosition(w.matrixWorld).applyMatrix4(On);const ft=he.update(w),at=w.material;at.visible&&B.push(w,ft,at,ne,sn.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ct.intersectsObject(w))){const ft=he.update(w),at=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),sn.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),sn.copy(ft.boundingSphere.center)),sn.applyMatrix4(w.matrixWorld).applyMatrix4(On)),Array.isArray(at)){const yt=ft.groups;for(let Tt=0,$t=yt.length;Tt<$t;Tt++){const rn=yt[Tt],Nt=at[rn.materialIndex];Nt&&Nt.visible&&B.push(w,ft,Nt,ne,sn.z,rn)}}else at.visible&&B.push(w,ft,at,ne,sn.z,null)}}const rt=w.children;for(let ft=0,at=rt.length;ft<at;ft++)Us(rt[ft],K,ne,J)}function Hi(w,K,ne,J){const{opaque:re,transmissive:rt,transparent:ft}=w;C.setupLightsView(ne),si===!0&&Ge.setGlobalState(F.clippingPlanes,ne),J&&Ve.viewport(Ce.copy(J)),re.length>0&&as(re,K,ne),rt.length>0&&as(rt,K,ne),ft.length>0&&as(ft,K,ne),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function la(w,K,ne,J){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[J.id]===void 0){const Nt=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[J.id]=new Ya(1,1,{generateMipmaps:!0,type:Nt?mr:aa,minFilter:$r,samples:Math.max(4,mn.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vn.workingColorSpace})}const rt=C.state.transmissionRenderTarget[J.id],ft=J.viewport||Ce;rt.setSize(ft.z*F.transmissionResolutionScale,ft.w*F.transmissionResolutionScale);const at=F.getRenderTarget(),yt=F.getActiveCubeFace(),Tt=F.getActiveMipmapLevel();F.setRenderTarget(rt),F.getClearColor(Ee),bt=F.getClearAlpha(),bt<1&&F.setClearColor(16777215,.5),F.clear(),jn&&Fe.render(ne);const $t=F.toneMapping;F.toneMapping=$a;const rn=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),C.setupLightsView(J),si===!0&&Ge.setGlobalState(F.clippingPlanes,J),as(w,ne,J),S.updateMultisampleRenderTarget(rt),S.updateRenderTargetMipmap(rt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Wn=0,mi=K.length;Wn<mi;Wn++){const Si=K[Wn],{object:kn,geometry:Vi,material:lt,group:Ki}=Si;if(lt.side===gs&&kn.layers.test(J.layers)){const gn=lt.side;lt.side=qs,lt.needsUpdate=!0,Fa(kn,ne,J,Vi,lt,Ki),lt.side=gn,lt.needsUpdate=!0,Nt=!0}}Nt===!0&&(S.updateMultisampleRenderTarget(rt),S.updateRenderTargetMipmap(rt))}F.setRenderTarget(at,yt,Tt),F.setClearColor(Ee,bt),rn!==void 0&&(J.viewport=rn),F.toneMapping=$t}function as(w,K,ne){const J=K.isScene===!0?K.overrideMaterial:null;for(let re=0,rt=w.length;re<rt;re++){const ft=w[re],{object:at,geometry:yt,group:Tt}=ft;let $t=ft.material;$t.allowOverride===!0&&J!==null&&($t=J),at.layers.test(ne.layers)&&Fa(at,K,ne,yt,$t,Tt)}}function Fa(w,K,ne,J,re,rt){w.onBeforeRender(F,K,ne,J,re,rt),w.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),re.onBeforeRender(F,K,ne,J,w,rt),re.transparent===!0&&re.side===gs&&re.forceSinglePass===!1?(re.side=qs,re.needsUpdate=!0,F.renderBufferDirect(ne,K,J,re,w,rt),re.side=Pr,re.needsUpdate=!0,F.renderBufferDirect(ne,K,J,re,w,rt),re.side=gs):F.renderBufferDirect(ne,K,J,re,w,rt),w.onAfterRender(F,K,ne,J,re,rt)}function ca(w,K,ne){K.isScene!==!0&&(K=fi);const J=N.get(w),re=C.state.lights,rt=C.state.shadowsArray,ft=re.state.version,at=fe.getParameters(w,re.state,rt,K,ne,C.state.lightProbeGridArray),yt=fe.getProgramCacheKey(at);let Tt=J.programs;J.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?K.environment:null,J.fog=K.fog;const $t=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;J.envMap=ee.get(w.envMap||J.environment,$t),J.envMapRotation=J.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,Tt===void 0&&(w.addEventListener("dispose",bi),Tt=new Map,J.programs=Tt);let rn=Tt.get(yt);if(rn!==void 0){if(J.currentProgram===rn&&J.lightsStateVersion===ft)return qi(w,at),rn}else at.uniforms=fe.getUniforms(w),Y!==null&&w.isNodeMaterial&&Y.build(w,ne,at),w.onBeforeCompile(at,F),rn=fe.acquireProgram(at,yt),Tt.set(yt,rn),J.uniforms=at.uniforms;const Nt=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=Ge.uniform),qi(w,at),J.needsLights=Lr(w),J.lightsStateVersion=ft,J.needsLights&&(Nt.ambientLightColor.value=re.state.ambient,Nt.lightProbe.value=re.state.probe,Nt.directionalLights.value=re.state.directional,Nt.directionalLightShadows.value=re.state.directionalShadow,Nt.spotLights.value=re.state.spot,Nt.spotLightShadows.value=re.state.spotShadow,Nt.rectAreaLights.value=re.state.rectArea,Nt.ltc_1.value=re.state.rectAreaLTC1,Nt.ltc_2.value=re.state.rectAreaLTC2,Nt.pointLights.value=re.state.point,Nt.pointLightShadows.value=re.state.pointShadow,Nt.hemisphereLights.value=re.state.hemi,Nt.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Nt.spotLightMatrix.value=re.state.spotLightMatrix,Nt.spotLightMap.value=re.state.spotLightMap,Nt.pointShadowMatrix.value=re.state.pointShadowMatrix),J.lightProbeGrid=C.state.lightProbeGridArray.length>0,J.currentProgram=rn,J.uniformsList=null,rn}function Gi(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=cc.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function qi(w,K){const ne=N.get(w);ne.outputColorSpace=K.outputColorSpace,ne.batching=K.batching,ne.batchingColor=K.batchingColor,ne.instancing=K.instancing,ne.instancingColor=K.instancingColor,ne.instancingMorph=K.instancingMorph,ne.skinning=K.skinning,ne.morphTargets=K.morphTargets,ne.morphNormals=K.morphNormals,ne.morphColors=K.morphColors,ne.morphTargetsCount=K.morphTargetsCount,ne.numClippingPlanes=K.numClippingPlanes,ne.numIntersection=K.numClipIntersection,ne.vertexAlphas=K.vertexAlphas,ne.vertexTangents=K.vertexTangents,ne.toneMapping=K.toneMapping}function Bt(w,K){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;P.setFromMatrixPosition(K.matrixWorld);for(let ne=0,J=w.length;ne<J;ne++){const re=w[ne];if(re.texture!==null&&re.boundingBox.containsPoint(P))return re}return null}function Ti(w,K,ne,J,re){K.isScene!==!0&&(K=fi),S.resetTextureUnits();const rt=K.fog,ft=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?K.environment:null,at=$===null?F.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Vn.workingColorSpace,yt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Tt=ee.get(J.envMap||ft,yt),$t=J.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,rn=!!ne.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Nt=!!ne.morphAttributes.position,Wn=!!ne.morphAttributes.normal,mi=!!ne.morphAttributes.color;let Si=$a;J.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Si=F.toneMapping);const kn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Vi=kn!==void 0?kn.length:0,lt=N.get(J),Ki=C.state.lights;if(si===!0&&(Ot===!0||w!==me)){const Yt=w===me&&J.id===ae;Ge.setState(J,w,Yt)}let gn=!1;J.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==Ki.state.version||lt.outputColorSpace!==at||re.isBatchedMesh&&lt.batching===!1||!re.isBatchedMesh&&lt.batching===!0||re.isBatchedMesh&&lt.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&lt.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&lt.instancing===!1||!re.isInstancedMesh&&lt.instancing===!0||re.isSkinnedMesh&&lt.skinning===!1||!re.isSkinnedMesh&&lt.skinning===!0||re.isInstancedMesh&&lt.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&lt.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&lt.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&lt.instancingMorph===!1&&re.morphTexture!==null||lt.envMap!==Tt||J.fog===!0&&lt.fog!==rt||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==Ge.numPlanes||lt.numIntersection!==Ge.numIntersection)||lt.vertexAlphas!==$t||lt.vertexTangents!==rn||lt.morphTargets!==Nt||lt.morphNormals!==Wn||lt.morphColors!==mi||lt.toneMapping!==Si||lt.morphTargetsCount!==Vi||!!lt.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(gn=!0):(gn=!0,lt.__version=J.version);let Zi=lt.currentProgram;gn===!0&&(Zi=ca(J,K,re),Y&&J.isNodeMaterial&&Y.onUpdateProgram(J,Zi,lt));let H=!1,vt=!1,Xe=!1;const gt=Zi.getUniforms(),ut=lt.uniforms;if(Ve.useProgram(Zi.program)&&(H=!0,vt=!0,Xe=!0),J.id!==ae&&(ae=J.id,vt=!0),lt.needsLights){const Yt=Bt(C.state.lightProbeGridArray,re);lt.lightProbeGrid!==Yt&&(lt.lightProbeGrid=Yt,vt=!0)}if(H||me!==w){Ve.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),gt.setValue(X,"projectionMatrix",w.projectionMatrix),gt.setValue(X,"viewMatrix",w.matrixWorldInverse);const ri=gt.map.cameraPosition;ri!==void 0&&ri.setValue(X,Un.setFromMatrixPosition(w.matrixWorld)),mn.logarithmicDepthBuffer&&gt.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&gt.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),me!==w&&(me=w,vt=!0,Xe=!0)}if(lt.needsLights&&(Ki.state.directionalShadowMap.length>0&&gt.setValue(X,"directionalShadowMap",Ki.state.directionalShadowMap,S),Ki.state.spotShadowMap.length>0&&gt.setValue(X,"spotShadowMap",Ki.state.spotShadowMap,S),Ki.state.pointShadowMap.length>0&&gt.setValue(X,"pointShadowMap",Ki.state.pointShadowMap,S)),re.isSkinnedMesh){gt.setOptional(X,re,"bindMatrix"),gt.setOptional(X,re,"bindMatrixInverse");const Yt=re.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),gt.setValue(X,"boneTexture",Yt.boneTexture,S))}re.isBatchedMesh&&(gt.setOptional(X,re,"batchingTexture"),gt.setValue(X,"batchingTexture",re._matricesTexture,S),gt.setOptional(X,re,"batchingIdTexture"),gt.setValue(X,"batchingIdTexture",re._indirectTexture,S),gt.setOptional(X,re,"batchingColorTexture"),re._colorsTexture!==null&&gt.setValue(X,"batchingColorTexture",re._colorsTexture,S));const bn=ne.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&_t.update(re,ne,Zi),(vt||lt.receiveShadow!==re.receiveShadow)&&(lt.receiveShadow=re.receiveShadow,gt.setValue(X,"receiveShadow",re.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&K.environment!==null&&(ut.envMapIntensity.value=K.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=t1()),vt){if(gt.setValue(X,"toneMappingExposure",F.toneMappingExposure),lt.needsLights&&ws(ut,Xe),rt&&J.fog===!0&&oe.refreshFogUniforms(ut,rt),oe.refreshMaterialUniforms(ut,J,st,Rt,C.state.transmissionRenderTarget[w.id]),lt.needsLights&&lt.lightProbeGrid){const Yt=lt.lightProbeGrid;ut.probesSH.value=Yt.texture,ut.probesMin.value.copy(Yt.boundingBox.min),ut.probesMax.value.copy(Yt.boundingBox.max),ut.probesResolution.value.copy(Yt.resolution)}cc.upload(X,Gi(lt),ut,S)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(cc.upload(X,Gi(lt),ut,S),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&gt.setValue(X,"center",re.center),gt.setValue(X,"modelViewMatrix",re.modelViewMatrix),gt.setValue(X,"normalMatrix",re.normalMatrix),gt.setValue(X,"modelMatrix",re.matrixWorld),J.uniformsGroups!==void 0){const Yt=J.uniformsGroups;for(let ri=0,Kn=Yt.length;ri<Kn;ri++){const ls=Yt[ri];ve.update(ls,Zi),ve.bind(ls,Zi)}}return Zi}function ws(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function Lr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return ge},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(w,K,ne){const J=N.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),N.get(w.texture).__webglTexture=K,N.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ne,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,K){const ne=N.get(w);ne.__webglFramebuffer=K,ne.__useDefaultFramebuffer=K===void 0};const rs=X.createFramebuffer();this.setRenderTarget=function(w,K=0,ne=0){$=w,ue=K,ge=ne;let J=null,re=!1,rt=!1;if(w){const at=N.get(w);if(at.__useDefaultFramebuffer!==void 0){Ve.bindFramebuffer(X.FRAMEBUFFER,at.__webglFramebuffer),Ce.copy(w.viewport),Ue.copy(w.scissor),tt=w.scissorTest,Ve.viewport(Ce),Ve.scissor(Ue),Ve.setScissorTest(tt),ae=-1;return}else if(at.__webglFramebuffer===void 0)S.setupRenderTarget(w);else if(at.__hasExternalTextures)S.rebindTextures(w,N.get(w.texture).__webglTexture,N.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const $t=w.depthTexture;if(at.__boundDepthTexture!==$t){if($t!==null&&N.has($t)&&(w.width!==$t.image.width||w.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(w)}}const yt=w.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(rt=!0);const Tt=N.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Tt[K])?J=Tt[K][ne]:J=Tt[K],re=!0):w.samples>0&&S.useMultisampledRTT(w)===!1?J=N.get(w).__webglMultisampledFramebuffer:Array.isArray(Tt)?J=Tt[ne]:J=Tt,Ce.copy(w.viewport),Ue.copy(w.scissor),tt=w.scissorTest}else Ce.copy(We).multiplyScalar(st).floor(),Ue.copy(Lt).multiplyScalar(st).floor(),tt=Xt;if(ne!==0&&(J=rs),Ve.bindFramebuffer(X.FRAMEBUFFER,J)&&Ve.drawBuffers(w,J),Ve.viewport(Ce),Ve.scissor(Ue),Ve.setScissorTest(tt),re){const at=N.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,at.__webglTexture,ne)}else if(rt){const at=K;for(let yt=0;yt<w.textures.length;yt++){const Tt=N.get(w.textures[yt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+yt,Tt.__webglTexture,ne,at)}}else if(w!==null&&ne!==0){const at=N.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,at.__webglTexture,ne)}ae=-1},this.readRenderTargetPixels=function(w,K,ne,J,re,rt,ft,at=0){if(!(w&&w.isWebGLRenderTarget)){Gn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=N.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){Ve.bindFramebuffer(X.FRAMEBUFFER,yt);try{const Tt=w.textures[at],$t=Tt.format,rn=Tt.type;if(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+at),!mn.textureFormatReadable($t)){Gn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mn.textureTypeReadable(rn)){Gn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-J&&ne>=0&&ne<=w.height-re&&X.readPixels(K,ne,J,re,G.convert($t),G.convert(rn),rt)}finally{const Tt=$!==null?N.get($).__webglFramebuffer:null;Ve.bindFramebuffer(X.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,K,ne,J,re,rt,ft,at=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=N.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt)if(K>=0&&K<=w.width-J&&ne>=0&&ne<=w.height-re){Ve.bindFramebuffer(X.FRAMEBUFFER,yt);const Tt=w.textures[at],$t=Tt.format,rn=Tt.type;if(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+at),!mn.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mn.textureTypeReadable(rn))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Nt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Nt),X.bufferData(X.PIXEL_PACK_BUFFER,rt.byteLength,X.STREAM_READ),X.readPixels(K,ne,J,re,G.convert($t),G.convert(rn),0);const Wn=$!==null?N.get($).__webglFramebuffer:null;Ve.bindFramebuffer(X.FRAMEBUFFER,Wn);const mi=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await J0(X,mi,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Nt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,rt),X.deleteBuffer(Nt),X.deleteSync(mi),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,K=null,ne=0){const J=Math.pow(2,-ne),re=Math.floor(w.image.width*J),rt=Math.floor(w.image.height*J),ft=K!==null?K.x:0,at=K!==null?K.y:0;S.setTexture2D(w,0),X.copyTexSubImage2D(X.TEXTURE_2D,ne,0,0,ft,at,re,rt),Ve.unbindTexture()};const os=X.createFramebuffer(),ka=X.createFramebuffer();this.copyTextureToTexture=function(w,K,ne=null,J=null,re=0,rt=0){let ft,at,yt,Tt,$t,rn,Nt,Wn,mi;const Si=w.isCompressedTexture?w.mipmaps[rt]:w.image;if(ne!==null)ft=ne.max.x-ne.min.x,at=ne.max.y-ne.min.y,yt=ne.isBox3?ne.max.z-ne.min.z:1,Tt=ne.min.x,$t=ne.min.y,rn=ne.isBox3?ne.min.z:0;else{const ut=Math.pow(2,-re);ft=Math.floor(Si.width*ut),at=Math.floor(Si.height*ut),w.isDataArrayTexture?yt=Si.depth:w.isData3DTexture?yt=Math.floor(Si.depth*ut):yt=1,Tt=0,$t=0,rn=0}J!==null?(Nt=J.x,Wn=J.y,mi=J.z):(Nt=0,Wn=0,mi=0);const kn=G.convert(K.format),Vi=G.convert(K.type);let lt;K.isData3DTexture?(S.setTexture3D(K,0),lt=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(S.setTexture2DArray(K,0),lt=X.TEXTURE_2D_ARRAY):(S.setTexture2D(K,0),lt=X.TEXTURE_2D),Ve.activeTexture(X.TEXTURE0),Ve.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),Ve.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Ve.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const Ki=Ve.getParameter(X.UNPACK_ROW_LENGTH),gn=Ve.getParameter(X.UNPACK_IMAGE_HEIGHT),Zi=Ve.getParameter(X.UNPACK_SKIP_PIXELS),H=Ve.getParameter(X.UNPACK_SKIP_ROWS),vt=Ve.getParameter(X.UNPACK_SKIP_IMAGES);Ve.pixelStorei(X.UNPACK_ROW_LENGTH,Si.width),Ve.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Si.height),Ve.pixelStorei(X.UNPACK_SKIP_PIXELS,Tt),Ve.pixelStorei(X.UNPACK_SKIP_ROWS,$t),Ve.pixelStorei(X.UNPACK_SKIP_IMAGES,rn);const Xe=w.isDataArrayTexture||w.isData3DTexture,gt=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const ut=N.get(w),bn=N.get(K),Yt=N.get(ut.__renderTarget),ri=N.get(bn.__renderTarget);Ve.bindFramebuffer(X.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Ve.bindFramebuffer(X.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let Kn=0;Kn<yt;Kn++)Xe&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,N.get(w).__webglTexture,re,rn+Kn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,N.get(K).__webglTexture,rt,mi+Kn)),X.blitFramebuffer(Tt,$t,ft,at,Nt,Wn,ft,at,X.DEPTH_BUFFER_BIT,X.NEAREST);Ve.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(re!==0||w.isRenderTargetTexture||N.has(w)){const ut=N.get(w),bn=N.get(K);Ve.bindFramebuffer(X.READ_FRAMEBUFFER,os),Ve.bindFramebuffer(X.DRAW_FRAMEBUFFER,ka);for(let Yt=0;Yt<yt;Yt++)Xe?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ut.__webglTexture,re,rn+Yt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ut.__webglTexture,re),gt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,bn.__webglTexture,rt,mi+Yt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,bn.__webglTexture,rt),re!==0?X.blitFramebuffer(Tt,$t,ft,at,Nt,Wn,ft,at,X.COLOR_BUFFER_BIT,X.NEAREST):gt?X.copyTexSubImage3D(lt,rt,Nt,Wn,mi+Yt,Tt,$t,ft,at):X.copyTexSubImage2D(lt,rt,Nt,Wn,Tt,$t,ft,at);Ve.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else gt?w.isDataTexture||w.isData3DTexture?X.texSubImage3D(lt,rt,Nt,Wn,mi,ft,at,yt,kn,Vi,Si.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(lt,rt,Nt,Wn,mi,ft,at,yt,kn,Si.data):X.texSubImage3D(lt,rt,Nt,Wn,mi,ft,at,yt,kn,Vi,Si):w.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,rt,Nt,Wn,ft,at,kn,Vi,Si.data):w.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,rt,Nt,Wn,Si.width,Si.height,kn,Si.data):X.texSubImage2D(X.TEXTURE_2D,rt,Nt,Wn,ft,at,kn,Vi,Si);Ve.pixelStorei(X.UNPACK_ROW_LENGTH,Ki),Ve.pixelStorei(X.UNPACK_IMAGE_HEIGHT,gn),Ve.pixelStorei(X.UNPACK_SKIP_PIXELS,Zi),Ve.pixelStorei(X.UNPACK_SKIP_ROWS,H),Ve.pixelStorei(X.UNPACK_SKIP_IMAGES,vt),rt===0&&K.generateMipmaps&&X.generateMipmap(lt),Ve.unbindTexture()},this.initRenderTarget=function(w){N.get(w).__webglFramebuffer===void 0&&S.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),Ve.unbindTexture()},this.resetState=function(){ue=0,ge=0,$=null,Ve.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ka}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Vn._getDrawingBufferColorSpace(e),t.unpackColorSpace=Vn._getUnpackColorSpace()}}const ku=()=>typeof window>"u"?!1:new URLSearchParams(window.location.search).has("perf")||window.localStorage.getItem("fwc_perf")==="1",i1=(n,e,t=!1,i=0)=>({phase:n,action:e,ballOwner:t,freezeBefore:i,freezeAfter:i,freezeReason:i>0?"unknown":null,returnedEarlyReason:"normal",expectedPause:!1,passDecision:!1,passOptions:0,safeOptions:0,tackleCandidates:0,tackleAttempts:0,pickupCandidates:0,aerialCandidates:0,nearbyBallCount:0,foulTriggered:!1,cardTriggered:!1,setPieceTriggered:!1,allPlayersDelta:0,movingPlayerCount:0}),_c=(n,e)=>{ku()&&console.warn(n,e)},Ed=(n,e)=>{ku()&&console.info(n,e)},Po=(n,e,t={})=>{if(!ku()||typeof window>"u")return;const i=window,s=i.__fwcPerfSamples||[];s.push({label:n,ms:Number(e.toFixed(2)),at:Number(performance.now().toFixed(1)),...t}),s.length>5e3&&s.splice(0,s.length-5e3),i.__fwcPerfSamples=s},Hm=.8,Gm=1.02,Vm=64,s1=Math.PI/2,a1=(n,e,t)=>{const i=document.createElement("canvas");i.width=256,i.height=128;const s=i.getContext("2d"),r=t==="GK"?"#facc15":e==="HOME"?"#34d399":"#60a5fa";s.clearRect(0,0,i.width,i.height),s.fillStyle="rgba(2, 6, 23, 0.66)",s.beginPath(),s.roundRect(24,14,208,100,36),s.fill(),s.lineWidth=10,s.strokeStyle=r,s.stroke(),s.lineWidth=12,s.strokeStyle="#020617",s.font=n>=10?"900 80px Arial Black, Impact, sans-serif":"900 92px Arial Black, Impact, sans-serif",s.textAlign="center",s.textBaseline="middle",s.strokeText(String(n),128,68),s.fillStyle="#ffffff",s.fillText(String(n),128,68);const o=new Wx(i);return o.colorSpace=sa,o.minFilter=bs,o.magFilter=bs,o.needsUpdate=!0,o},r1=(n,e,t,i)=>{const s=n.position.distanceTo(e);return 2*Math.tan(Ui.degToRad(n.fov)/2)*s*(i/Math.max(1,t))},o1=(n,e,t,i)=>{const s=e.clone().project(n);return{x:(s.x*.5+.5)*t,y:(s.y*-.5+.5)*i,z:s.z}},Ff=n=>n>55?2278750:n>28?16096779:15680580,kf=n=>new lr(Hm,Gm,Vm,1,s1,Math.max(.001,Math.PI*2*Ui.clamp(n,0,1)));function l1({homePlayers:n,awayPlayers:e,ball:t,isSimulating:i,cameraMode:s,autoCameraBlend:r=0,showPlayerInfo:o,hoverPlayerId:d,onPlayerHover:h,currentHalf:f=1,phase:b="BUILDUP",penaltyShootout:v}){const p=zr.useRef(null),_=zr.useRef({ball:t,isSimulating:i,homePlayers:n,awayPlayers:e,cameraMode:s,autoCameraBlend:r,hoverPlayerId:d,showPlayerInfo:o,currentHalf:f,phase:b,penaltyShootout:v});zr.useEffect(()=>{_.current={ball:t,isSimulating:i,homePlayers:n,awayPlayers:e,cameraMode:s,autoCameraBlend:r,hoverPlayerId:d,showPlayerInfo:o,currentHalf:f,phase:b,penaltyShootout:v}},[t,i,n,e,s,r,d,o,f,b,v]);const y=zr.useRef(null);zr.useEffect(()=>{if(!p.current)return;const x=p.current,R=x.clientWidth||800,I=x.clientHeight||400,P=new Nx;P.background=new In(132631),P.fog=new Iu(132631,.005);const B=new va(45,R/I,.1,1e3);B.position.set(0,70,90),B.lookAt(0,0,0);const C=new n1({antialias:!0,alpha:!0});C.setPixelRatio(window.devicePixelRatio),C.setSize(R,I),C.shadowMap.enabled=!0,x.appendChild(C.domElement);const V=new ig(16777215,.7);P.add(V);const E=(Z,ie,he)=>{const fe=new ng(16777215,.4);fe.position.set(Z,ie,he),fe.castShadow=!0,fe.shadow.mapSize.set(1024,1024),P.add(fe)};E(60,50,40),E(-60,50,-40),E(0,80,0);const D=new Qx(1981066,413243,.4);P.add(D);const F=105,k=68,Y=new Wa(200,200),ue=new xs({color:132631,roughness:1}),ge=new zt(Y,ue);ge.rotation.x=-Math.PI/2,ge.position.y=-.05,P.add(ge);const $=new $s,ae=new dr(.2,.8,5),me=new xs({color:1976635,roughness:.5});for(let Z=-50;Z<=50;Z+=6){const ie=new zt(ae,me);ie.position.set(54,.4,Z),$.add(ie);const he=new zt(ae,me);he.position.set(-54,.4,Z),$.add(he)}for(let Z=-30;Z<=30;Z+=6){if(Math.abs(Z)<8)continue;const ie=new zt(ae,me);ie.rotation.y=Math.PI/2,ie.position.set(Z,.4,36),$.add(ie);const he=new zt(ae,me);he.rotation.y=Math.PI/2,he.position.set(Z,.4,-36),$.add(he)}P.add($);const Ce=(Z,ie)=>{const he=new $s,fe=new zt(new La(.3,.6,40),new xs({color:3359061}));fe.position.y=20,he.add(fe);const oe=new zt(new dr(4,3,1),new xs({color:4674921,emissive:16777215,emissiveIntensity:.8}));oe.position.y=40,he.add(oe),he.position.set(Z,0,ie),he.lookAt(0,0,0),P.add(he)};Ce(65,45),Ce(-65,45),Ce(65,-45),Ce(-65,-45);const Ue=new Wa(F,k,50,50),tt=new xs({color:413243,roughness:.7,metalness:.2}),Ee=new zt(Ue,tt);Ee.rotation.x=-Math.PI/2,Ee.receiveShadow=!0,P.add(Ee);for(let Z=-52.5;Z<=52.5;Z+=6){const ie=new Wa(3,k),he=new xs({color:1096065,roughness:.8,transparent:!0,opacity:.12}),fe=new zt(ie,he);fe.rotation.x=-Math.PI/2,fe.position.set(Z+1.5,.005,0),P.add(fe)}const bt=new Am({color:16777215,transparent:!0,opacity:.8}),Je=F/2,Rt=k/2,st=[new z(-Je,.05,-Rt),new z(Je,.05,-Rt),new z(Je,.05,-Rt),new z(Je,.05,Rt),new z(Je,.05,Rt),new z(-Je,.05,Rt),new z(-Je,.05,Rt),new z(-Je,.05,-Rt),new z(0,.05,-Rt),new z(0,.05,Rt),new z(-Je,.05,-20.16),new z(-Je+16.5,.05,-20.16),new z(-Je+16.5,.05,-20.16),new z(-Je+16.5,.05,20.16),new z(-Je+16.5,.05,20.16),new z(-Je,.05,20.16),new z(Je,.05,-20.16),new z(Je-16.5,.05,-20.16),new z(Je-16.5,.05,-20.16),new z(Je-16.5,.05,20.16),new z(Je-16.5,.05,20.16),new z(Je,.05,20.16),new z(-Je,.05,-9.16),new z(-Je+5.5,.05,-9.16),new z(-Je+5.5,.05,-9.16),new z(-Je+5.5,.05,9.16),new z(-Je+5.5,.05,9.16),new z(-Je,.05,9.16),new z(Je,.05,-9.16),new z(Je-5.5,.05,-9.16),new z(Je-5.5,.05,-9.16),new z(Je-5.5,.05,9.16),new z(Je-5.5,.05,9.16),new z(Je,.05,9.16)],we=new ts().setFromPoints(st);P.add(new Gx(we,bt));const nt=new lr(9.15-.15,9.15,64),We=new zt(nt,new Ls({color:16777215,side:gs,transparent:!0,opacity:.8}));We.rotation.x=Math.PI/2,We.position.y=.06,P.add(We);const Lt=new Ou(.3,32),Xt=new zt(Lt,new Ls({color:16777215}));Xt.rotation.x=Math.PI/2,Xt.position.y=.07,P.add(Xt);const Ct=new zt(new Ar(.32,24,24),new xs({color:16734720,roughness:.2,metalness:.1}));Ct.castShadow=!0,Ct.position.y=.32,P.add(Ct);const si=40,Ot=new Float32Array(si*3),On=new ts;On.setAttribute("position",new Ma(Ot,3));const Un=new Rm({color:16777215,size:.15,transparent:!0,opacity:.6,blending:Da}),sn=new Vx(On,Un);P.add(sn);const fi=Z=>{const ie=new $s,he=new xs({color:16317180,roughness:.2}),fe=new La(.12,.12,2.44,8),oe=new La(.12,.12,7.32,8),pe=new zt(fe,he);pe.position.set(0,1.22,-3.66),ie.add(pe);const je=new zt(fe,he);je.position.set(0,1.22,3.66),ie.add(je);const Ge=new zt(oe,he);Ge.rotation.x=Math.PI/2,Ge.position.set(0,2.44,0),ie.add(Ge);const Ie=new dr(2,2.44,7.32),Fe=new xs({color:16777215,transparent:!0,opacity:.15,metalness:0,roughness:1}),_t=new zt(Ie,Fe);_t.position.set(Z>0?1:-1,1.22,0),ie.add(_t),ie.position.x=Z,P.add(ie)};fi(Je),fi(-Je);const jn=(Z,ie,he,fe,oe)=>{const pe=new $s;oe&&(pe.name=oe);const je=new xs({color:988970,roughness:.9}),Ge=new dr(he,4,15),Ie=new zt(Ge,je);Ie.position.y=2,pe.add(Ie);const Fe=new Wa(he,20),_t=new zt(Fe,je);_t.rotation.x=-Math.PI/4,_t.position.y=8,_t.position.z=8,pe.add(_t);const xt=new xs({color:1976635,transparent:!0,opacity:.8,side:gs}),an=new zt(new Wa(he,20),xt);an.name="roof",an.rotation.x=-Math.PI/12,an.position.y=18,an.position.z=5,pe.add(an);for(let G=-he/2+2;G<=he/2-2;G+=he/4){const He=new zt(new La(.1,.1,15),new xs({color:4674921}));He.position.set(G,11,15),pe.add(He)}return pe.position.set(Z,0,ie),pe.rotation.y=fe,P.add(pe),pe};jn(0,55,120,0,"front-stand"),jn(0,-55,120,Math.PI,"back-stand"),jn(70,0,40,-Math.PI/2,"away-stand"),jn(-70,0,40,Math.PI/2,"home-stand"),[[52.5,34],[52.5,-34],[-52.5,34],[-52.5,-34]].forEach(([Z,ie])=>{const he=new zt(new La(.05,.05,1.5),new xs({color:16436245}));he.position.set(Z,.75,ie),P.add(he);const fe=new zt(new Wa(.4,.3),new Ls({color:15680580,side:gs}));fe.position.set(Z+.2,1.35,ie),P.add(fe)});const X=new Map,Ne=new Map,Vt=new Map,mn=new Map;y.current={scene:P,camera:B,renderer:C,ball:Ct,ballTrail:sn,ballTrailPositions:Ot,playerMeshes:X,playerStatusMeshes:Ne,playerNumberSprites:Vt,labels:mn,trailIndex:0,frameId:0,camTarget:new z(0,0,0),camPos:new z(0,70,90),lastTime:Date.now(),shake:0,lastCollisionEffectId:null,lastStrikeEffectId:null,lastPlayerImpactIds:new Map,collisionEffects:[],strikeEffects:[],playerImpactEffects:[],autoBlend:0};const Ve=()=>{var Zi;if(!y.current)return;const{renderer:Z,scene:ie,camera:he,ball:fe,ballTrail:oe,ballTrailPositions:pe,playerMeshes:je,playerStatusMeshes:Ge,playerNumberSprites:Ie,camTarget:Fe,camPos:_t}=y.current,{ball:xt,isSimulating:an,homePlayers:G,awayPlayers:He,cameraMode:ve,autoCameraBlend:ht,hoverPlayerId:$e,showPlayerInfo:Te,phase:Et,penaltyShootout:et}=_.current,bi=nm.getState().club,Wt=Date.now(),vs=Math.min(.05,Math.max(.001,(Wt-y.current.lastTime)/1e3));y.current.lastTime=Wt;const Bi=[...G,...He],ai=Bi.find(H=>H.id===xt.ownerId),ra=["PREPARE","FOUL","SETPIECE","GOALKICK","CORNER","FREEKICK","PENALTY","THROWIN","KICKOFF","CELEBRATE"].includes(Et||""),oa=ai?Math.sqrt(ai.vx*ai.vx+ai.vz*ai.vz):0,ss=ai?oa>.05?ai.vx/oa:ai.team==="HOME"?1:-1:0,yi=ai&&oa>.05?ai.vz/oa:0,Us=ai?ai.x+ss*(ai.role==="GK"?.35:.9):xt.x,Hi=ai?ai.z+yi*(ai.role==="GK"?.35:.9):xt.z,la=ai?ai.role==="GK"?.93:0:xt.y,as=Math.abs(Us-fe.position.x),Fa=Math.abs(Hi-fe.position.z),ca=Bi.find(H=>H.action==="SHOOT"&&H.id===xt.ownerId),Gi=!!(et!=null&&et.active&&!xt.ownerId&&Math.abs(xt.vx)+Math.abs(xt.vz)+Math.abs(xt.vy)>.12),qi=!!ca||Gi;if(as>20||Fa>20){if(fe.position.x=Us,fe.position.z=Hi,fe.position.y=.32+la,ra){for(let H=0;H<40;H+=1)pe[H*3]=fe.position.x,pe[H*3+1]=fe.position.y,pe[H*3+2]=fe.position.z;oe.geometry.attributes.position.needsUpdate=!0}}else{const H=Gi?.58:.2;fe.position.x+=(Us-fe.position.x)*H,fe.position.z+=(Hi-fe.position.z)*H;const vt=.32+la;fe.position.y+=(vt-fe.position.y)*(Gi?.68:.3)}const Bt=xt.collisionEffect;if(Bt&&Bt.id!==y.current.lastCollisionEffectId){y.current.lastCollisionEffectId=Bt.id;const H=Ui.clamp(Bt.intensity||1,.25,2),vt=.34+Math.max(0,Bt.y||0),gt={touchline:6333946,woodwork:16436245,turf:8843180,block:16777215,parry:3718648,net:14870768,out:16478597,dribble:10980346}[Bt.type]||16777215,ut=vt>.65||Bt.type==="woodwork"||Bt.type==="block"||Bt.type==="parry"||Bt.type==="out"||Bt.type==="dribble",bn=new $s;bn.position.set(Bt.x,ut?vt:.08,Bt.z);const Yt=new Ls({color:gt,transparent:!0,opacity:.9,side:gs,depthWrite:!1,blending:Da}),ri=new zt(new lr(.32,.45,36),Yt);ut||(ri.rotation.x=-Math.PI/2),bn.add(ri);const Kn=new Ls({color:gt,transparent:!0,opacity:.75,depthWrite:!1,blending:Da}),ls=new zt(new Ar(.16+H*.06,12,8),Kn);ls.position.y=ut?0:Math.max(.14,vt-.34),bn.add(ls),ie.add(bn),y.current.collisionEffects.push({group:bn,ringMaterial:Yt,flashMaterial:Kn,createdAt:Wt,duration:Bt.type==="out"?720+H*140:360+H*140,maxScale:Bt.type==="woodwork"?4.2+H*1.8:Bt.type==="out"?3.6+H*1.4:Bt.type==="dribble"?2.8+H*1.2:Bt.type==="net"?3.2+H*1.2:2.4+H*1.4,billboard:ut}),y.current.collisionEffects.length>10&&y.current.collisionEffects.splice(0,y.current.collisionEffects.length-10).forEach(Ts=>{ie.remove(Ts.group),Ts.group.traverse(vi=>{vi instanceof zt&&vi.geometry.dispose()}),Ts.ringMaterial.dispose(),Ts.flashMaterial.dispose()});for(let ki=0;ki<40;ki+=1)pe[ki*3]=Bt.x,pe[ki*3+1]=.32+Math.max(0,Bt.y||0),pe[ki*3+2]=Bt.z;oe.geometry.attributes.position.needsUpdate=!0,y.current.trailIndex=0,y.current.shake=Math.max(y.current.shake,Bt.type==="woodwork"?.56:Bt.type==="out"?.22:Bt.type==="dribble"?.16:Bt.type==="net"?.2:.12*H)}y.current.collisionEffects=y.current.collisionEffects.filter(H=>{const vt=(Wt-H.createdAt)/H.duration;if(vt>=1)return ie.remove(H.group),H.group.traverse(ut=>{ut instanceof zt&&ut.geometry.dispose()}),H.ringMaterial.dispose(),H.flashMaterial.dispose(),!1;H.billboard&&H.group.lookAt(he.position);const gt=.8+(1-Math.pow(1-vt,2))*H.maxScale;return H.group.scale.set(gt,gt,gt),H.ringMaterial.opacity=Math.max(0,.9*(1-vt)),H.flashMaterial.opacity=Math.max(0,.75*(1-vt*1.8)),!0});const Ti=xt.strikeEffect;if(Ti&&Ti.id!==y.current.lastStrikeEffectId){y.current.lastStrikeEffectId=Ti.id;const H=Ui.clamp(Ti.intensity||1,.45,2),Xe={shot:16347926,freeKick:16436245,penalty:16777215,volley:16478597,header:3718648}[Ti.type]||16347926,gt=new $s;gt.position.set(Ti.x,.42+Math.max(0,Ti.y||0),Ti.z);const ut=new Ls({color:Xe,transparent:!0,opacity:.95,side:gs,depthWrite:!1,blending:Da}),bn=new zt(new lr(.42,.62,40),ut);bn.rotation.x=-Math.PI/2,gt.add(bn);const Yt=new Ls({color:Xe,transparent:!0,opacity:.88,depthWrite:!1,blending:Da}),ri=new zt(new Ar(.22+H*.07,14,10),Yt);ri.scale.set(1.55,.72,1.55),gt.add(ri);const Kn=Math.sqrt(Ti.dirX*Ti.dirX+Ti.dirZ*Ti.dirZ)||1,ls=new z(Ti.dirX/Kn,.05,Ti.dirZ/Kn).normalize(),ki=1.45+H*1.35,Ts=new Ls({color:Xe,transparent:!0,opacity:.7,depthWrite:!1,blending:Da}),vi=new zt(new La(.05,.18+H*.04,ki,14),Ts);vi.position.copy(ls.clone().multiplyScalar(ki*.45)),vi.quaternion.setFromUnitVectors(new z(0,1,0),ls),gt.add(vi),ie.add(gt),y.current.strikeEffects.push({group:gt,materials:[ut,Yt,Ts],createdAt:Wt,duration:320+H*120,maxScale:1.35+H*.55}),y.current.strikeEffects.length>8&&y.current.strikeEffects.splice(0,y.current.strikeEffects.length-8).forEach(Wi=>{ie.remove(Wi.group),Wi.group.traverse(ks=>{ks instanceof zt&&ks.geometry.dispose()}),Wi.materials.forEach(ks=>ks.dispose())});for(let Fs=0;Fs<40;Fs+=1)pe[Fs*3]=Ti.x,pe[Fs*3+1]=.32+Math.max(0,Ti.y||0),pe[Fs*3+2]=Ti.z;oe.geometry.attributes.position.needsUpdate=!0,y.current.trailIndex=0,y.current.shake=Math.max(y.current.shake,Ti.type==="header"?.18:.24+H*.12)}if(y.current.strikeEffects=y.current.strikeEffects.filter(H=>{const vt=(Wt-H.createdAt)/H.duration;if(vt>=1)return ie.remove(H.group),H.group.traverse(ut=>{ut instanceof zt&&ut.geometry.dispose()}),H.materials.forEach(ut=>ut.dispose()),!1;const gt=1+Math.sin(Math.min(1,vt)*Math.PI)*H.maxScale;return H.group.scale.set(gt,gt,gt),H.materials.forEach((ut,bn)=>{const Yt=bn===2?1-vt*1.25:1-vt*1.7;ut.opacity=Math.max(0,ut.opacity*.45+Yt*.55)}),!0}),y.current.playerImpactEffects=y.current.playerImpactEffects.filter(H=>{const vt=(Wt-H.createdAt)/H.duration;if(vt>=1)return ie.remove(H.group),H.group.traverse(ut=>{ut instanceof zt&&ut.geometry.dispose()}),H.materials.forEach(ut=>ut.dispose()),!1;H.billboard&&H.group.lookAt(he.position);const gt=1+Math.sin(Math.min(1,vt)*Math.PI)*H.maxScale;return H.group.scale.set(gt,gt,gt),H.materials.forEach((ut,bn)=>{const Yt=bn===0?1-vt*1.15:1-vt*1.65;ut.opacity=Math.max(0,ut.opacity*.4+Yt*.6)}),!0}),ai&&ai.role==="GK"){const H=je.get(ai.id);if(H){const vt=new z(0,0,.6).applyQuaternion(H.quaternion);fe.position.copy(H.position).add(vt),fe.position.y=1.25+Math.sin(Wt*.01)*.05}}const ws=y.current.strikeEffects.length>0;if(ws||qi||xt.vx**2+xt.vz**2>15){const H=ws?1.62:qi?1+Math.sin(Wt*.05)*.28:1.22;fe.scale.set(H,H,H),fe.material.emissive.set(16436245),fe.material.emissiveIntensity=ws?2.6:qi?1.8:.85}else fe.scale.set(1,1,1),fe.material.emissive.set(0);const Lr=_.current.ball.vx||0,rs=_.current.ball.vz||0,os=Lr**2+rs**2,ka=Math.min(os/20,1);y.current.trailIndex=(y.current.trailIndex+1)%40;const w=y.current.trailIndex;pe[w*3]=fe.position.x,pe[w*3+1]=fe.position.y,pe[w*3+2]=fe.position.z,oe.geometry.attributes.position.needsUpdate=!0,ws?(oe.material.color.set(16742936),oe.material.size=.42+.12*ka,oe.material.opacity=.78):os>12?(oe.material.color.set(16436245),oe.material.size=.3*ka,oe.material.opacity=.4+ka*.4):(oe.material.color.set(16777215),oe.material.size=.15,oe.material.opacity=.1+ka*.2),oe.visible=os>1;let K=new z(fe.position.x,0,fe.position.z);if(ve==="BROADCAST"||ve==="AUTO"){const Xe=[...G,...He].sort((bn,Yt)=>{const ri=(bn.x-fe.position.x)**2+(bn.z-fe.position.z)**2,Kn=(Yt.x-fe.position.x)**2+(Yt.z-fe.position.z)**2;return ri-Kn}).slice(0,5);let gt=fe.position.x,ut=fe.position.z;Xe.forEach(bn=>{gt+=bn.x,ut+=bn.z}),K.set(gt/(Xe.length+1),0,ut/(Xe.length+1))}let ne=new z,J=new z;const rt=105/2,ft=Ui.clamp((Math.abs(fe.position.x)-20)/30,0,1),at=fe.position.x>0?rt:-rt,yt=()=>{const H=20-ft*8,vt=38-ft*18;return{pos:new z(K.x*.85,H,K.z+vt),lookAt:K.clone()}},Tt=()=>{const H=fe.position.x>0?-1:1,vt=4.5,Xe=14*H,gt=8*(K.z>0?1:-1),ut=new z(at,1.22,0);return{pos:new z(K.x+Xe,vt,K.z+gt),lookAt:K.clone().lerp(ut,.35)}};if(et!=null&&et.active){const H=et.goalX>0?1:-1;et.perspective==="KICKER"?(ne.set(et.goalX-H*20,4.2,0),J.set(et.goalX,1.4,0)):(ne.set(et.goalX+H*5.5,3.2,0),J.set(et.goalX-H*11.5,1,0))}else switch(ve){case"TACTICAL":ne.set(K.x*.35,45,65),J.set(K.x*.55,0,0);break;case"BROADCAST":{const H=yt();ne.copy(H.pos),J.copy(H.lookAt)}break;case"STAR":{const H=Tt();ne.copy(H.pos),J.copy(H.lookAt)}break;case"AUTO":{const H=yt(),vt=Tt(),Xe=Ui.clamp(ht,0,1),gt=Xe>y.current.autoBlend?.82:1.15,ut=Math.min(1,vs/gt);y.current.autoBlend=Ui.lerp(y.current.autoBlend,Xe,ut);const bn=Ui.smoothstep(y.current.autoBlend,0,1);ne.copy(H.pos).lerp(vt.pos,bn),J.copy(H.lookAt).lerp(vt.lookAt,bn)}break;case"FREE":ne.set(0,100,.1),J.set(0,0,0);break}let $t=.016;ve==="STAR"&&($t=.03),ve==="AUTO"&&($t=.018+y.current.autoBlend*.018);const rn=_t.distanceTo(ne);rn>15&&!ra&&($t=Math.min(.08,$t+(rn-15)*.003*(ve==="AUTO"?1.5:1)));const Nt=xt.x===0&&xt.z===0&&rn>85;if(et!=null&&et.active||Nt?(_t.copy(ne),Fe.copy(J)):(_t.lerp(ne,$t),Fe.lerp(J,$t)),he.position.copy(_t),y.current.shake>.01){const H=y.current.shake;he.position.x+=(Math.random()-.5)*H*2,he.position.y+=(Math.random()-.5)*H*2,he.position.z+=(Math.random()-.5)*H*2,y.current.shake*=.82,he.fov=45-H*5,he.updateProjectionMatrix()}else he.fov!==45&&(he.fov=45,he.updateProjectionMatrix());he.lookAt(Fe);const Wn=ie.getObjectByName("front-stand");if(Wn){const H=he.position.z>25,vt=H?.08:1;Wn.traverse(Xe=>{Xe instanceof zt&&(Xe.material.transparent=!0,Xe.material.opacity=Math.min(Xe.material.opacity||1,vt),Xe.name==="roof"&&!H&&(Xe.material.opacity=.8))}),Wn.visible=he.position.z<52}const mi=[...G,...He].filter(H=>!H.sentOff),Si=Z.domElement.clientWidth||Z.domElement.width||1280,kn=Z.domElement.clientHeight||Z.domElement.height||720,Vi=mi.map(H=>{const vt=new z(H.x,.2,H.z+.42),Xe=!!(et!=null&&et.active&&H.role==="GK"&&Math.abs(H.x-et.goalX)<8),gt=xt.ownerId===H.id?5:$e===H.id||Xe?4:Te?3:H.action!=="NONE"||H.task==="SUPPORT"||H.task==="FORWARD_RUN"?2:1;return{id:H.id,priority:gt,screen:o1(he,vt,Si,kn)}});mi.forEach((H,vt)=>{let Xe=je.get(H.id);const gt=H.traits.some(Ye=>["核心","明星","飞翼"].includes(Ye))||H.stamina>95;H.traits.some(Ye=>["快速","飞人"].includes(Ye))||H.traits.some(Ye=>Ye.includes("速"));const ut=H.traits.some(Ye=>["指挥","核心"].includes(Ye)),bn=H.role==="DEF";if(!Xe){Xe=new $s;const Ye=new $s;Ye.name="body-group",Xe.add(Ye);const pn=H.role==="GK",Cn=pn?H.team==="HOME"?13958196:54527:H.team==="HOME"?bi.colors.primary:1976635,zn=pn?H.team==="HOME"?10406426:41924:H.team==="HOME"?bi.colors.secondary:4674921,Qn=new zt(new La(.3,.25,.8,8),new xs({color:Cn,roughness:.5}));Qn.position.y=1,Qn.castShadow=!0,Ye.add(Qn);const wn=H.shirtNumber??vt%26+1,ei=new La(.08,.08,.6,6),zs=new xs({color:zn,roughness:.5}),ua=new zt(ei,zs);ua.name="l-arm",ua.position.set(-.4,1,0),ua.rotation.z=.2,Ye.add(ua);const ha=new zt(ei,zs);ha.name="r-arm",ha.position.set(.4,1,0),ha.rotation.z=-.2,Ye.add(ha);const Rs=new zt(new Lu(.25,.5,4,8),new xs({color:1976635}));Rs.position.y=.4,Ye.add(Rs);let ji=0;const Bs=H.id+H.name;for(let Fr=0;Fr<Bs.length;Fr++)ji+=Bs.charCodeAt(Fr);const Ai=[16765363,14723456,8805430,16770278,16175015],fa=[1707264,2232576,4664602,10845269,65793,2368548],Bo=Ai[ji%Ai.length],Nc=fa[(ji>>1)%fa.length],xr=new zt(new Ar(.24,12,12),new xs({color:Bo,roughness:.4}));xr.name="player-head",xr.position.y=1.6,xr.castShadow=!0,Ye.add(xr);const Pc=new Ar(.25,12,12,0,Math.PI*2,0,Math.PI/2),gl=new xs({color:Nc,roughness:.9}),no=new zt(Pc,gl);no.position.y=.05,no.rotation.x=-.15,xr.add(no);const Ur=new zt(new lr(Hm,Gm,Vm),new Ls({color:132631,side:gs,transparent:!0,opacity:.62,depthWrite:!1}));Ur.rotation.x=-Math.PI/2,Ur.position.y=.018,Ur.renderOrder=5,ie.add(Ur);const cs=Ui.clamp(H.stamina/100,0,1),ma=Math.round(cs*100),Ta=new zt(kf(cs),new Ls({color:Ff(H.stamina),side:gs,transparent:!0,opacity:.9,depthWrite:!1}));Ta.rotation.x=-Math.PI/2,Ta.position.y=.024,Ta.renderOrder=6,ie.add(Ta);const Ja=new zt(new lr(1.08,1.18,48),new Ls({color:16777215,side:gs,transparent:!0,opacity:0,depthWrite:!1}));Ja.rotation.x=-Math.PI/2,Ja.position.y=.022,Ja.renderOrder=4,ie.add(Ja),Ge.set(H.id,{baseRing:Ur,staminaRing:Ta,highlightRing:Ja,markers:new $s,staminaBucket:ma});const Qa=new Ox(new wm({map:a1(wn,H.team,H.role),transparent:!0,depthTest:!1,depthWrite:!1}));Qa.name="scene-ui-foot-number",Qa.renderOrder=18,ie.add(Qa),Ie.set(H.id,Qa),ie.add(Xe),je.set(H.id,Xe)}const Yt=Ge.get(H.id),{baseRing:ri,staminaRing:Kn,highlightRing:ls}=Yt,ki=Ie.get(H.id),Ts=!!(et!=null&&et.active&&H.role==="GK"&&Math.abs(H.x-et.goalX)<8);ri.position.set(Xe.position.x,.018,Xe.position.z),Kn.position.set(Xe.position.x,.024,Xe.position.z),ls.position.set(Xe.position.x,.022,Xe.position.z),ri.rotation.set(-Math.PI/2,0,0),Kn.rotation.set(-Math.PI/2,0,0),ls.rotation.set(-Math.PI/2,0,0);const vi=xt.ownerId===H.id;if(ki){const Ye=vi||$e===H.id||Ts,pn=ve==="TACTICAL"||ve==="FREE",Cn=ve==="AUTO"||ve==="BROADCAST"||ve==="STAR",zn=Vi.find(Ai=>Ai.id===H.id),wn=(zn?Vi.filter(Ai=>Ai.id!==H.id&&Ai.screen.z<=1&&Ai.priority>=zn.priority&&(Ai.screen.x-zn.screen.x)**2+(Ai.screen.y-zn.screen.y)**2<32**2).length:0)>=2,ei=H.task==="SUPPORT"||H.task==="FORWARD_RUN"||H.action!=="NONE",zs=!H.sentOff&&(Ye||Te||pn&&!wn||Cn&&ei&&!wn);ki.position.set(Xe.position.x,.2,Xe.position.z+.42);const ua=Ye?30:Te?26:pn?22:20,ha=Ui.clamp(r1(he,ki.position,kn,ua),.28,1.35),Rs=ki.material,ji=zs?Ye?.9:Te?.78:pn?.5:.42:0;Rs.opacity=Ui.lerp(Rs.opacity,ji,.22);const Bs=new z(ha*2.05,ha,1);ki.scale.lerp(Bs,.2),ki.visible=Rs.opacity>.03}const Fs=Ui.clamp(H.stamina/100,0,1),Wi=Math.round(Fs*100);Wi!==Yt.staminaBucket&&(Kn.geometry.dispose(),Kn.geometry=kf(Fs),Yt.staminaBucket=Wi),Kn.material.color.set(Ff(H.stamina)),Kn.material.opacity=H.sentOff||Fs<=.01?0:.92,ri.material.opacity=H.sentOff?.18:.64;const ks=gt?1.12:1;ri.scale.set(ks,ks,ks),Kn.scale.set(ks,ks,ks);let ya=H.team==="HOME"?14870768:6583435,Zs=.16,Sa=1;vi?(ya=2278750,Zs=.82,Sa=1.24):Ts?(ya=16436245,Zs=.72,Sa=1.45):(H.yellows||0)>0?(ya=16436245,Zs=.48,Sa=1.08):(H.task==="SUPPORT"||H.task==="FORWARD_RUN")&&(ya=3900150,Zs=.38,Sa=1.08),ut&&!vi&&!Ts?(ya=3900150,Zs=Math.max(Zs,.34)):bn&&H.stamina>50&&!vi&&!Ts&&(ya=9741240,Zs=Math.max(Zs,.24)),ls.material.color.set(ya),ls.material.opacity=H.sentOff?0:Zs;const Qr=vi?1+Math.sin(Wt*.008)*.035:1;ls.scale.set(Sa*Qr,Sa*Qr,Sa*Qr),et!=null&&et.active?(Xe.position.x=H.x,Xe.position.z=H.z):(Xe.position.x+=(H.x-Xe.position.x)*.15,Xe.position.z+=(H.z-Xe.position.z)*.15),ri.position.set(Xe.position.x,.018,Xe.position.z),Kn.position.set(Xe.position.x,.024,Xe.position.z),ls.position.set(Xe.position.x,.022,Xe.position.z);const As=H.impactEffect;if(As&&y.current.lastPlayerImpactIds.get(H.id)!==As.id){y.current.lastPlayerImpactIds.set(H.id,As.id);const Ye=Ui.clamp(As.intensity||1,.45,2),Cn={save:3718648,catch:6220500,block:16317180}[As.type]||16777215,zn=new $s;zn.position.set(Xe.position.x,.16,Xe.position.z);const Qn=new Ls({color:Cn,transparent:!0,opacity:.95,side:gs,depthWrite:!1,blending:Da}),wn=new zt(new lr(.62,.9,48),Qn);wn.rotation.x=-Math.PI/2,wn.position.y=-.08,zn.add(wn);const ei=new Ls({color:Cn,transparent:!0,opacity:As.type==="catch"?.86:.98,depthWrite:!1,blending:Da}),zs=new zt(new Ar(As.type==="block"?.24:.3,14,10),ei);zs.position.y=As.type==="block"?.78:1.02,zs.scale.set(1.45,.72,1.45),zn.add(zs);const ua=new Ls({color:Cn,transparent:!0,opacity:As.type==="catch"?.48:.68,depthWrite:!1,blending:Da}),ha=As.type==="catch"?5:8,Rs=.75+Ye*(As.type==="save"?.42:.32);for(let ji=0;ji<ha;ji+=1){const Bs=ji/ha*Math.PI*2,Ai=new z(Math.cos(Bs),.1,Math.sin(Bs)).normalize(),fa=new zt(new La(.018,.06,Rs,8),ua);fa.position.set(Ai.x*(.46+Rs*.28),.92,Ai.z*(.46+Rs*.28)),fa.quaternion.setFromUnitVectors(new z(0,1,0),Ai),zn.add(fa)}ie.add(zn),y.current.playerImpactEffects.push({group:zn,materials:[Qn,ei,ua],createdAt:Wt,duration:As.type==="catch"?620:760,maxScale:1.15+Ye*.5,billboard:!0}),y.current.playerImpactEffects.length>12&&y.current.playerImpactEffects.splice(0,y.current.playerImpactEffects.length-12).forEach(Bs=>{ie.remove(Bs.group),Bs.group.traverse(Ai=>{Ai instanceof zt&&Ai.geometry.dispose()}),Bs.materials.forEach(Ai=>Ai.dispose())}),y.current.shake=Math.max(y.current.shake,As.type==="catch"?.12+Ye*.04:.2+Ye*.09)}const Ea=Math.sqrt(H.vx**2+H.vz**2);let eo=fe.position.x,Or=fe.position.z;const An=xt.ownerId===H.id;if(!(H.action&&H.action!=="NONE"&&H.action!=="RECEIVE")){if(An){const Ye=_.current.currentHalf===1;eo=(H.team==="HOME"?Ye?52.5:-52.5:Ye?-52.5:52.5)*.4+H.vx*4,Or=H.vz*4}else if(Ea>.15){const Ye=Math.min(.85,(Ea-.15)*1.5);eo=fe.position.x*(1-Ye)+(Xe.position.x+H.vx*100)*Ye,Or=fe.position.z*(1-Ye)+(Xe.position.z+H.vz*100)*Ye}}const to=new z(eo,Xe.position.y,Or);Xe.lookAt(to);const vn=Xe.getObjectByName("body-group"),zi=Xe.getObjectByName("player-head"),En=Xe.getObjectByName("l-arm"),L=Xe.getObjectByName("r-arm");vn.position.set(0,0,0),vn.rotation.set(0,0,0),vn.scale.set(1,1,1),Xe.scale.setScalar(Ts?1.18:1),Xe.position.y=0,Xe.rotation.x=0,Xe.rotation.z=0,En.rotation.set(0,0,.2),L.rotation.set(0,0,-.2);const oi=new z(0,0,1).applyQuaternion(Xe.quaternion),Ac=new z(1,0,0).applyQuaternion(Xe.quaternion),_s=new z(H.vx,0,H.vz),Ms=_s.dot(oi),wa=_s.dot(Ac);if(H.action&&H.action!=="NONE")switch(H.action){case"SHOOT":{const pn=Ui.clamp((1e3-H.actionTimer)/1e3,0,1),Cn=Ui.clamp(pn/.28,0,1),zn=Ui.clamp((pn-.2)/.22,0,1),Qn=Ui.clamp((pn-.42)/.45,0,1),wn=Math.sin(zn*Math.PI);vn.rotation.x=-.34*Cn+.72*wn-.24*Qn,vn.rotation.z=(H.team==="HOME"?-1:1)*(.16*Cn+.42*wn-.12*Qn),vn.position.z=-.24*Cn+.34*wn,vn.position.y=.05*wn,vn.scale.set(1+.06*wn,1-.04*wn,1+.08*wn),En.rotation.z=.35+1*Cn+.55*wn,L.rotation.z=-.35-1*Cn-.55*wn,En.rotation.x=-.35-.75*Qn,L.rotation.x=.25+.55*wn}break;case"PASS":if(xt.isThrown||Math.abs(Xe.position.z)>34){const pn=Ui.clamp((1e3-H.actionTimer)/1e3,0,1),Cn=Ui.clamp(pn/.32,0,1),zn=Ui.clamp((pn-.24)/.34,0,1),Qn=Ui.clamp((pn-.55)/.35,0,1),wn=Math.sin(zn*Math.PI);vn.rotation.x=-.38*Cn+.55*wn-.18*Qn,vn.position.y=.08*wn,vn.position.z=-.18*Cn+.25*wn,En.rotation.z=.12,L.rotation.z=-.12,En.rotation.x=-2.55+zn*2.05+Qn*.25,L.rotation.x=-2.55+zn*2.05+Qn*.25,En.rotation.y=-.18*Cn+.12*wn,L.rotation.y=.18*Cn-.12*wn}else vn.rotation.y=Math.PI/6*(H.team==="HOME"?1:-1),vn.rotation.x=.2,En.rotation.z=.8;break;case"DRIBBLE":{const pn=Ui.clamp((650-H.actionTimer)/650,0,1),Cn=Math.sin(pn*Math.PI),zn=H.vz>=0?1:-1;vn.rotation.z=zn*.42*Cn,vn.rotation.y=zn*.38*Cn,vn.position.z=zn*.26*Cn,vn.position.y=.04*Cn,En.rotation.z=.35+zn*.75*Cn,L.rotation.z=-.35+zn*.55*Cn}break;case"TACKLE":if(H.actionTimer>400)vn.rotation.x=-Math.PI/2.3,vn.rotation.z=Math.PI/5,vn.position.y=.15,vn.position.z=-.4,En.rotation.z=1.4,L.rotation.z=-1.4;else{const pn=(400-H.actionTimer)/400;vn.rotation.x=-Math.PI/2.3*(1-pn),vn.position.y=.15+pn*.5,vn.position.z=-.4*(1-pn),En.rotation.z=1.4-pn*1.2,L.rotation.z=-1.4+pn*1.2,En.rotation.x=Math.sin(Wt*.05)*.5,L.rotation.x=Math.cos(Wt*.05)*.5}break;case"SAVE":const Ye=Ui.clamp((900-H.actionTimer)/900,0,1);if(Ye<.3){const pn=Ye/.3;Xe.position.y=pn*1.5,Xe.rotation.z=Math.PI/3*(H.z>xt.z?1:-1)*pn,vn.rotation.x=-.2,En.rotation.x=-1.8,L.rotation.x=-1.8}else if(Ye<.7){const pn=(Ye-.3)/.4;Xe.position.y=1.5-pn*1,Xe.rotation.z=Math.PI/2.1*(H.z>xt.z?1:-1),En.rotation.z=1.5,L.rotation.z=-1.5,En.rotation.x=-1.2,L.rotation.x=-1.2}else{const pn=(Ye-.7)/.3;Xe.position.y=.5*(1-pn),Xe.rotation.z=Math.PI/2.1*(H.z>xt.z?1:-1)*(1-pn*.5),vn.rotation.x=.5*pn}break;case"RECEIVE":vn.rotation.x=-.2,vn.position.z=-.15,vn.scale.set(.95,.95,.95);break}else{vn.scale.set(1,1,1);const Ye=.35;if(vn.rotation.x=Ui.clamp(Ms*.45,-Ye,Ye),vn.rotation.z=Ui.clamp(-wa*.25,-.15,.15),Ea>.15){const pn=.05+Ea*.08,Cn=Wt*pn,zn=Math.abs(Math.sin(Cn))*.08;vn.position.y=zn,zi.position.z=.1*(Ms>=0?1:-1),zi.position.y=1.5;const Qn=Math.min(1.4,.4+Ea*.5);En.rotation.x=Math.sin(Cn)*Qn*(Ms>=0?1:-.7),L.rotation.x=-Math.sin(Cn)*Qn*(Ms>=0?1:-.7)}else zi.position.z=0,zi.position.y=1.6,En.rotation.x=Math.sin(Wt*.003)*.08,L.rotation.x=-Math.sin(Wt*.003)*.08}if(et!=null&&et.active?!!et.celebrationTeam:Math.abs(fe.position.x)>52.3&&Math.abs(fe.position.z)<6.2){const Ye=_.current.currentHalf===1,pn=(et==null?void 0:et.celebrationTeam)||(fe.position.x>0?Ye?"HOME":"AWAY":Ye?"AWAY":"HOME");if(H.team===pn){const Cn=(()=>{let wn=0;for(let ei=0;ei<H.name.length;ei++)wn+=H.name.charCodeAt(ei);return wn})(),zn=Wt*.015+Cn*.5,Qn=Math.max(0,Math.sin(zn))*1.5;Xe.position.y=Qn,En.rotation.z=Math.PI-.3,L.rotation.z=-Math.PI+.3,En.rotation.x=Math.sin(Wt*.02)*.5,L.rotation.x=Math.cos(Wt*.02)*.5,zi.position.y=1.6+Math.sin(Wt*.01)*.1,vn.rotation.x=-.15}else{Xe.position.y=0;const Cn=(()=>{let Qn=0;for(let wn=0;wn<H.name.length;wn++)Qn+=H.name.charCodeAt(wn);return Qn})(),zn=Cn%3;vn.rotation.x=.42,zi.position.y=1.42,zi.position.z=.12,zn===0?(En.rotation.z=2.55,L.rotation.z=-2.55,En.rotation.x=.42,L.rotation.x=.42):zn===1?(En.rotation.z=.65,L.rotation.z=-.65,En.rotation.x=1.15,L.rotation.x=1.15):(En.rotation.z=.25,L.rotation.z=-.25,En.rotation.x=1.8,L.rotation.x=1.8,vn.rotation.z=Math.sin(Wt*.004+Cn)*.05)}}});const lt=new Set(mi.map(H=>H.id));for(const[H,vt]of je.entries())if(!lt.has(H)){ie.remove(vt),je.delete(H);const Xe=Ge.get(H);Xe&&([Xe.baseRing,Xe.staminaRing,Xe.highlightRing].forEach(ut=>{ie.remove(ut),ut.geometry.dispose(),ut.material.dispose()}),Ge.delete(H));const gt=Ie.get(H);if(gt){ie.remove(gt);const ut=gt.material;(Zi=ut.map)==null||Zi.dispose(),ut.dispose(),Ie.delete(H)}}const Ki=performance.now();Z.render(ie,he);const gn=performance.now()-Ki;Po("matchEngineFrame",gn,{dpr:Z.getPixelRatio(),players:_.current.homePlayers.length+_.current.awayPlayers.length,showPlayerInfo:_.current.showPlayerInfo,cameraMode:_.current.cameraMode}),gn>16&&_c("[PERF][MatchEngine frame]",{frameMs:Number(gn.toFixed(2)),dpr:Z.getPixelRatio(),players:_.current.homePlayers.length+_.current.awayPlayers.length,showPlayerInfo:_.current.showPlayerInfo,cameraMode:_.current.cameraMode}),y.current.frameId=requestAnimationFrame(Ve)};Ve();const Mi=()=>{const Z=x.clientWidth,ie=x.clientHeight;B.aspect=Z/ie,B.updateProjectionMatrix(),C.setSize(Z,ie)};window.addEventListener("resize",Mi);const N=Z=>{Z.preventDefault()},S=Z=>{Z.altKey&&(Z.preventDefault(),Z.stopPropagation())},ee=Z=>{if(!y.current)return;Z.altKey&&Z.preventDefault();const ie=x.getBoundingClientRect(),he=(Z.clientX-ie.left)/ie.width*2-1,fe=-((Z.clientY-ie.top)/ie.height)*2+1,oe=performance.now(),pe=new rg;pe.setFromCamera(new xn(he,fe),y.current.camera);const je=pe.intersectObjects(Array.from(X.values()),!0),Ge=performance.now()-oe;if(Po("raycast",Ge,{meshes:X.size}),Ge>4&&_c("[PERF][raycast]",{rayMs:Number(Ge.toFixed(2)),meshes:X.size}),je.length>0){let Ie=je[0].object;for(;Ie;){for(const[Fe,_t]of X.entries())if(_t===Ie||_t.children.includes(Ie)){h(Fe);return}Ie=Ie.parent}}else h(null)};return x.addEventListener("mousemove",ee),x.addEventListener("mousedown",S),x.addEventListener("dragstart",N),()=>{var Z;window.removeEventListener("resize",Mi),x.removeEventListener("mousemove",ee),x.removeEventListener("mousedown",S),x.removeEventListener("dragstart",N),y.current&&cancelAnimationFrame(y.current.frameId),Ne.forEach(ie=>{[ie.baseRing,ie.staminaRing,ie.highlightRing].forEach(he=>{he.geometry.dispose(),he.material.dispose()})}),(Z=y.current)==null||Z.playerImpactEffects.forEach(ie=>{ie.group.traverse(he=>{he instanceof zt&&he.geometry.dispose()}),ie.materials.forEach(he=>he.dispose())}),C.dispose(),x.innerHTML=""}},[]);const[A,M]=zr.useState([]);return zr.useEffect(()=>{if(!o){M(I=>I.length>0?[]:I);return}const x=()=>{if(!y.current)return;const{camera:I,playerMeshes:P,renderer:B}=y.current,C=B.domElement,V=C.clientWidth,E=C.clientHeight,D=[...n,...e].map((F,k)=>{const Y=P.get(F.id);if(!Y)return null;const ue=new z().copy(Y.position);ue.y+=2.2,ue.project(I);const ge=(ue.x*.5+.5)*V,$=(ue.y*-.5+.5)*E;return ue.z>1?null:{id:F.id,name:F.name,shirtNumber:F.shirtNumber??k%26+1,x:ge,y:$,stamina:F.stamina,traits:F.traits,role:F.role,task:F.task,yellows:F.yellows}}).filter(F=>F!==null);M(D),R.current=requestAnimationFrame(x)},R={current:requestAnimationFrame(x)};return()=>cancelAnimationFrame(R.current)},[o,n,e]),u.jsxs("div",{className:"relative w-full h-full",children:[u.jsx("div",{ref:p,className:"w-full h-full bg-slate-950 border-2 border-emerald-500/20 rounded-2xl overflow-hidden shadow-2xl"}),u.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:A.map(x=>{const R=x.id.includes("-0")||x.traits.includes("领袖"),I=x.traits.some(P=>["核心","明星","核心球员"].includes(P));return u.jsxs("div",{style:{left:x.x,top:x.y,transform:"translate(-50%, -100%)"},className:"absolute flex flex-col items-center gap-1",children:[u.jsxs("div",{className:"flex items-center gap-1",children:[R&&u.jsx("span",{className:"bg-yellow-500 text-black text-[8px] font-black px-1 rounded-sm shadow-sm",children:"(C)"}),I&&u.jsx("span",{className:"text-emerald-400 text-xs shadow-lg",children:"⭐"}),(x.yellows||0)>0&&u.jsx("span",{className:"bg-yellow-400 text-slate-950 text-[8px] font-black px-1 rounded-sm shadow-sm",children:"YC"}),u.jsxs("div",{className:"bg-black/70 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold text-white border border-white/20 whitespace-nowrap shadow-xl flex items-center gap-2",children:[u.jsxs("span",{className:Ft("font-black",x.role==="GK"?"text-yellow-400":"text-emerald-400"),children:["#",x.shirtNumber]}),x.name.split(" ")[0],x.task==="SUPPORT"&&u.jsx("span",{className:"text-blue-400",children:"→"}),x.task==="FORWARD_RUN"&&u.jsx("span",{className:"text-blue-400",children:"↗"})]})]}),u.jsx("div",{className:"w-10 h-1 bg-black/40 rounded-full overflow-hidden border border-white/10 shadow-inner",children:u.jsx("div",{className:`h-full transition-all duration-300 ${x.stamina>70?"bg-emerald-500":x.stamina>40?"bg-yellow-500":"bg-red-500"}`,style:{width:`${x.stamina}%`}})})]},`overlay-${x.id}`)})}),d&&u.jsx(c1,{player:[...n,...e].find(x=>x.id===d)})]})}function c1({player:n}){return n?u.jsxs("div",{className:"absolute top-4 right-4 w-56 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl z-50 pointer-events-none animate-in fade-in slide-in-from-right-4",children:[u.jsxs("div",{className:"flex justify-between items-start mb-4",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"text-white font-black text-lg leading-tight uppercase tracking-tight",children:n.name}),u.jsxs("span",{className:"text-emerald-500 text-[10px] font-bold uppercase tracking-widest",children:[n.role," | #",n.shirtNumber??"--"]})]}),u.jsx("div",{className:"bg-emerald-500 text-slate-950 text-xl font-black px-2 py-1 rounded-lg",children:Math.floor(n.stamina)})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx(zf,{label:"体力",value:n.stamina}),u.jsx(zf,{label:"危险度",value:Math.floor(Math.abs(n.x)/55*100)})]}),u.jsx("div",{className:"mt-4 pt-4 border-t border-white/5 space-y-1",children:n.traits&&n.traits.length>0?n.traits.map(e=>u.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-emerald-400/80 font-bold uppercase",children:[u.jsx("div",{className:"w-1 h-1 rounded-full bg-emerald-500 animate-pulse"}),e]},e)):u.jsx("div",{className:"text-[10px] text-slate-500 italic",children:"无特殊特性"})})]}):null}function zf({label:n,value:e}){return u.jsxs("div",{className:"space-y-1",children:[u.jsxs("div",{className:"flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:[u.jsx("span",{children:n}),u.jsxs("span",{children:[Math.floor(e),"%"]})]}),u.jsx("div",{className:"h-1 bg-slate-800 rounded-full overflow-hidden",children:u.jsx("div",{className:`h-full transition-all duration-1000 ${e>70?"bg-emerald-500":e>40?"bg-yellow-500":"bg-red-500"}`,style:{width:`${e}%`}})})]})}const vu=(n,e,t)=>Math.max(e,Math.min(t,n)),Wm=n=>Math.sqrt(n.vx*n.vx+n.vz*n.vz),jm=(n,e,t,i,s,r,o,d)=>{let h=i-e,f=s-t,b=Math.sqrt(h*h+f*f)||.01;const p=Math.abs(e)>40&&Math.abs(t)<15?65:52;b>p&&(i=e+h/b*p,s=t+f/b*p,h=i-e,f=s-t,b=p),n.vx=h/b*d,n.vz=f/b*d;const _=Math.max(3,Math.round(b/(d*.955))),y=(2*r-4*o)/(_*_),A=(4*o-r)/_;let M=y+A,x=-2*y;x<.01&&(x=.05,M=r/_+x*(_-1)/2),n.vy=M,n.customGravity=x},dc=(n,e,t,i={})=>{const s=Wm(n),r=vu(s*(i.speedMultiplier??.72),i.minSpeed??2.4,i.maxSpeed??6.6),o=i.targetY??.25,d=Math.max(o+.12,i.maxHeight??n.y+(i.lift??.55));jm(n,n.x,n.z,e,t,o,d,r)},d1=(n,e,t,i)=>{const s=Math.max(Wm(n),2.2),r=i.goalX>e?-1:1,o=i.sideBias&&Math.abs(i.sideBias)>.01?Math.sign(i.sideBias):t>=0?1:-1,d=e+r*vu(s*1.7,6,14),h=t+o*vu(2.8+s*.7,4,10);dc(n,d,h,{speedMultiplier:i.speedMultiplier??.48,minSpeed:2.2,maxSpeed:4.8,targetY:.7,maxHeight:Math.max(n.y+.45,1.2)})},ll=n=>n.replace(/\s+/g," ").trim(),Ro=(n,e)=>{if(!e.length)return"";let t=0;for(let i=0;i<n.length;i+=1)t=t*31+n.charCodeAt(i)>>>0;return e[t%e.length]},u1=(n,e)=>n.team==="HOME"?e.homeTeam:e.awayTeam,h1=n=>{var i,s;const e=n.match(/\[GOAL_META scorer="([^"]*)"(?: assist="([^"]*)")?(?: ownGoal="([^"]*)")?\]/);if(e)return{scorer:e[1]?decodeURIComponent(e[1]):void 0,assist:e[2]?decodeURIComponent(e[2]):void 0,ownGoal:e[3]==="true"};const t=n.match(/(?:得分|进球|破门)[！!:：\s]*(.+?)(?:\s*(?:打入一球|完成破门|破门|进球))?(?:[！!。.\s]*(?:（助攻：(.+?)）|\(助攻[:：]\s*(.+?)\)))?$/);return t?{scorer:(i=t[1])==null?void 0:i.trim(),assist:(s=t[2]||t[3])==null?void 0:s.trim()}:{}},f1=n=>/[�]|[锛绋鍦鐞闃槦]/.test(n),Bf=n=>{const e=ll(n);return!e||f1(e)?!1:/[\u4e00-\u9fffA-Za-z0-9]/.test(e)},m1=(n,e)=>{const t=n.team==="HOME"?e.homeScore:e.awayScore,i=n.team==="HOME"?e.awayScore:e.homeScore;return t>i?"领先方还在继续施压":t<i?"落后一方必须冒险":n.min>=75?"平局越拖越危险":"比赛还在寻找第一个转折"},Hf=n=>ll(n.cardReason||n.foulType||"危险的防守动作").replace(/鲁莽铲球/g,"危险的抢球").replace(/普通拉拽/g,"拉拽阻挡").replace(/战术犯规/g,"战术犯规").replace(/禁区犯规/g,"禁区内犯规").replace(/门将犯规/g,"门将出击犯规").replace(/无球冲突/g,"无球冲突").replace(/\s*\/\s*/g,"、"),Gf=(n,e)=>{const t=u1(n,e),i=m1(n,e),s=`${n.id}:${n.min}:${n.type}:${n.team}:${e.homeScore}-${e.awayScore}`;if(n.description.includes("[ROGUE]"))return ll(n.description.replace("[ROGUE]",""));if(n.type==="GOAL"){const r=h1(n.description),o={...r,scorer:n.scorerName||r.scorer,assist:n.assistName||r.assist,ownGoal:n.isOwnGoal??r.ownGoal},d=o.scorer?o.ownGoal?`${o.scorer}自摆乌龙`:`${o.scorer}破门`:`${t}破门`,h=o.assist?`，助攻来自${o.assist}`:"",f=Ro(s,["这次真正的机会被抓住了。","压力被直接写进比分。","比赛的走向从这一刻变了。",n.min>=88?"悬念被推到最高。":"防线这次没能撑住。"]);return`球进了！${d}${h}，${f}`}if(n.type==="CHANCE")return Ro(s,[`${t}制造机会，禁区前沿突然紧张起来。`,`这次推进有威胁，${t}已经把球送进危险区域。`,`${t}起脚尝试，门将不敢有半点分神。`,`${i}，这脚处理来得很坚决。`]);if(n.type==="YELLOW"){const r=n.cardPlayerName||t,o=Hf(n);return Ro(s,[`${r}因为${o}吃到黄牌，防守尺度开始变得危险。`,`黄牌！${r}这次${o}阻止了推进，也留下了代价。`,`主裁掏牌，${r}因为${o}被警告。`])}if(n.type==="RED"){const r=n.cardPlayerName||t,o=Hf(n);return Ro(s,[`红牌！${r}因为${o}被罚下，比赛从这一刻彻底变味了。`,`${r}被罚下一人，原因是${o}，战术板现在必须重写。`,`少打一人，${t}接下来每一分钟都要还债。${r}这次${o}代价太重。`])}return n.type==="SUB"?Bf(n.description)?ll(n.description):`${t}换人调整，替补席开始介入比赛。`:Bf(n.description)?ll(n.description):n.min<=1?e.homeScore+e.awayScore>0?"比赛重新开始，双方都知道下一球有多重。":"主裁哨响，比赛开始。双方先在中场试探。":n.min>=88?Ro(s,[`时间越来越少，${t}每一次触球都像最后一波。`,`${t}还在往前压，比赛已经进入冒险区。`,`补时附近的每个回合都很重，${i}。`]):Ro(s,[`${t}调整节奏，比赛暂时回到中场拉扯。`,`${t}把阵型重新站稳，等待下一次向前的窗口。`,`${i}，场面还没有真正安静下来。`])},Va=(n,e,t)=>Math.max(e,Math.min(t,n)),p1=n=>{const e=Va(n.holderZ*.18,-3.6,3.6),t=n.opponentGoalX-n.holderX,i=e-n.holderZ,s=t*t+i*i||1;let r=0;for(const o of n.opponents){const d=Va(((o.x-n.holderX)*t+(o.z-n.holderZ)*i)/s,0,1);if(d<.06||d>.9)continue;const h=n.holderX+t*d,f=n.holderZ+i*d,b=Math.hypot(o.x-h,o.z-f),v=1.25+d*2.15+Math.max(0,1-n.effectiveShooting)*.35;if(b>v)continue;const p=d<.35?1.2:1,_=o.role==="GK"?.18:1;r+=(1-b/v)*p*_}return Va(r,0,1.45)},x1=n=>{const e=n.opponentGoalX-n.holderX,t=Math.hypot(e,n.holderZ),i=Math.abs(Math.atan2(Math.abs(n.holderZ),Math.abs(e))),s=Math.abs(e),r=Va(1-Math.abs(n.holderZ)/18,0,1),o=Va(1-i/.82,0,1),d=p1(n),h=d<.62,f=n.holderX*n.attackingDir>19,b=!n.inPenaltyBox&&f&&s>=16&&s<=31.5&&Math.abs(n.holderZ)<=19,v=Va((n.effectiveShooting-.78)/.34,0,1),p=Va(n.teamQualityEdge,-.4,.8)*.08,_=b?Va(.18+r*.34+o*.22+v*.18+p-d*.36,0,1):0,y=b&&h&&_>=.48,A=b?Va(y?.28+r*.2+v*.16-d*.08:.02+r*.06+v*.06-d*.14,0,.62):0,M=y?Va(.36+r*.18+v*.14,.28,.68):b?.12:0;return{distToGoal:t,shootAngle:i,goalDepth:s,centrality:r,angleComfort:o,lanePressure:d,laneOpen:h,arcShotZone:b,clearArcShot:y,arcShotQuality:_,longShotDesireBonus:A,passSuppression:M}},g1=52.5,zu=.32,Ql=g1+zu,ba=5,b1="fwc_match_audio_cue_mode_v2",Vf={lateGoal:110,goal:100,red:90,post:78,save:72,card:64,rogue:58,miss:46,chance:36},v1=new Set(["KICKOFF","SETPIECE","GOALKICK","FOUL","PREPARE","FREEKICK","PENALTY","CORNER","THROWIN","CELEBRATE"]),No=n=>v1.has(n),Do=()=>({openPlay:{shots:0,shotsOnTarget:0,goals:0},penalty:{shots:0,shotsOnTarget:0,goals:0},freeKick:{shots:0,shotsOnTarget:0,goals:0},corner:{shots:0,shotsOnTarget:0,goals:0},other:{shots:0,shotsOnTarget:0,goals:0}}),Wf=()=>({goal:0,save:0,blocked:0,post:0,out:0,unresolved:0}),jf=()=>({newShotAfterControl:0,controlledByPlayer:0,phaseReset:0,deadBallStopped:0,matchEndGap:0,unknown:0}),Xf=()=>({passAttempts:0,shortPasses:0,longPasses:0,lobPasses:0,attackActions:0,wideActions:0,dribbles:0,successfulDribbles:0,shots:0,shotsOnTarget:0,goals:0,ownGoalGoals:0,goalkeeperSaves:0,goalkeeperCatches:0,goalkeeperParries:0,longShots:0,tackleAttempts:0,successfulTackles:0,fouls:0,possessionWins:0,counterAttacks:0,byTeam:{HOME:{passAttempts:0,shortPasses:0,longPasses:0,lobPasses:0,attackActions:0,wideActions:0,dribbles:0,successfulDribbles:0,shots:0,shotsOnTarget:0,goals:0,ownGoalGoals:0,goalkeeperSaves:0,goalkeeperCatches:0,goalkeeperParries:0,longShots:0,tackleAttempts:0,successfulTackles:0,fouls:0,possessionWins:0,counterAttacks:0},AWAY:{passAttempts:0,shortPasses:0,longPasses:0,lobPasses:0,attackActions:0,wideActions:0,dribbles:0,successfulDribbles:0,shots:0,shotsOnTarget:0,goals:0,ownGoalGoals:0,goalkeeperSaves:0,goalkeeperCatches:0,goalkeeperParries:0,longShots:0,tackleAttempts:0,successfulTackles:0,fouls:0,possessionWins:0,counterAttacks:0}},bySource:Do(),byTeamSource:{HOME:Do(),AWAY:Do()},shotOutcomes:{HOME:Wf(),AWAY:Wf()},shotUnresolvedReasons:{HOME:jf(),AWAY:jf()},shotOutcomeEvents:[]}),Ds=n=>Number.isFinite(n.baseOverall)?n.baseOverall:70,_e=(n,e,t)=>Math.max(e,Math.min(t,n)),cl=n=>{const e=Number.isFinite(n)?n:100;return e>=70?1:e>=40?.88+(e-40)/30*.12:.68+e/40*.2},ln=(n,e)=>{const t=n.attributes[e];return(Number.isFinite(t)?t:1)*cl(n.stamina)},ec=n=>n.length?n.reduce((e,t)=>e+Ds(t),0)/n.length:70,Kf=(n,e,t)=>{const i=n==="HOME"?e-t:t-e,s=i>=0?1:-1,r=Math.abs(i),o=r/16,d=Math.max(0,r-10)/26;return s*_e(o+d,0,1.45)},tc=n=>{const e=_e(ln(n,"passing"),.55,1.25),t=_e(ln(n,"awareness"),.55,1.25);return _e(1.42-e*.42-t*.18,.48,1.18)},_1=(n,e)=>{var h;const t={GK:.07,DEF:.42,MID:.56,FWD:.48}[n.role],i=Math.max(.72,Math.min(1.35,1.55-n.attributes.endurance*.55)),s=n.task==="PRESS"?1.2:n.task==="FORWARD_RUN"?1.18:n.task==="WIDE_RUN"||n.task==="OVERLAP"?1.12:n.task==="RECOVER"?.92:1,r=n.action==="TACKLE"||n.action==="SHOOT"?1.08:1,o=e?Wr(e).staminaWorkload:1,d=((h=n.rogueliteSubBoost)==null?void 0:h.staminaCost)||0;return t*i*s*r*o*(1+d)*(.94+Math.random()*.12)},M1=(n,e,t=.5,i=1)=>{const r=(100-n.stamina)/100,o=e.pressing/100*.08+(e.mentality==="ATTACKING"?.04:e.mentality==="DEFENSIVE"?-.03:0),d=.15+n.attributes.aggression*.3+r*.2+o+t*.4-n.attributes.tackling*.2-n.attributes.discipline*.2;return Math.max(.05,Math.min(1,d*i))},$f=n=>{const e=n>=4?4:0;return _e(50+e,35,68)},y1=(n,e,t,i)=>{const s=i(e.team);return t.filter(d=>d.team===n.team&&d.role!=="GK"&&d.id!==n.id).filter(d=>(d.x-e.x)*s>1.5).length<=1},S1=({defender:n,attacker:e,allPlayers:t,isPenaltyBox:i,homeIntent:s,awayIntent:r,minute:o,leagueRound:d,getTeamAttackDir:h})=>{const f=n.team==="HOME"?s:r,b=e.team==="HOME"?s:r,v=Math.sqrt(n.vx**2+n.vz**2),p=Math.sqrt(e.vx**2+e.vz**2),_=(100-n.stamina)*.22,y=n.attributes.aggression*22,A=n.attributes.discipline*20,M=n.attributes.tackling*8,x=f.pressing/100*14+(f.pressingMode==="HIGH_PRESS"?8:f.pressingMode==="LOW_BLOCK"?-4:0),R=Math.max(0,v-p)*14,I=p>.42&&b.tempo>=58?10:0,P=o>=70&&f.mentality==="ATTACKING"?8:0,B=y1(n,e,t,h),C=h(e.team),V=Math.abs(n.z-e.z)>1.2||n.x*C<e.x*C;let E=18+_+y+x+R+I+P-A-M+Math.random()*18;n.action==="TACKLE"&&(E+=12),V&&(E+=8),i&&(E+=8),B&&(E+=12),n.role==="GK"&&(E+=10),E+=($f(d)-50)*.55,E=Math.round(_e(E,0,100));let D="NORMAL_PULL";n.role==="GK"?D="GOALKEEPER_FOUL":i?D="BOX_FOUL":E>=72||n.action==="TACKLE"?D="RECKLESS_TACKLE":I>0||B?D="TACTICAL":Math.random()<.025+Math.max(0,n.attributes.aggression-.85)*.05&&(D="OFF_BALL_CONFLICT");let F="NONE";const k=(B?28:0)+(n.role==="GK"&&i?8:0);E>=93||Math.random()*100<Math.max(0,E-84)*5.5+k?F="RED":E>=79?F=n.yellows>0?"SECOND_YELLOW":Math.random()<.72?"YELLOW":"NONE":E>=56?F=n.yellows>0&&Math.random()<.42?"SECOND_YELLOW":Math.random()<.68?"YELLOW":"WARNING":E>=31&&(F=Math.random()<.18+($f(d)-50)/100?"YELLOW":"WARNING"),D==="TACTICAL"&&F==="NONE"&&Math.random()<.5&&(F="YELLOW"),B&&E>=78&&Math.random()<.62&&(F="RED");const Y={NORMAL_PULL:"普通拉拽",TACTICAL:"战术犯规",RECKLESS_TACKLE:"鲁莽铲球",BOX_FOUL:"禁区犯规",GOALKEEPER_FOUL:"门将犯规",OFF_BALL_CONFLICT:"无球冲突"},ue=[Y[D],B?"阻止单刀":null,I>0?"破坏快速反击":null,n.yellows>0?"已有黄牌":null,n.stamina<45?"体能下降":null].filter(Boolean).join(" / ");return{type:D,label:Y[D],severity:E,card:F,reason:ue}},Mc=n=>n<-.28?"L":n>.28?"R":"C",E1=n=>n==="L"?"左侧":n==="R"?"右侧":"中路",w1=(n,e)=>{const t=n<-2.1?"左":n>2.1?"右":"中",i=e>1.75?"上角":e<.85?"下角":"腰部";return`${t}${i}`},Yf=E1,T1=w1,A1=n=>n==="saved"?"被扑":n==="miss"?"踢飞":n==="post"?"中柱":"进球",qf=n=>n==="POWER"?"大力抽射":n==="CENTER"?"打中路":"稳妥推射",nc=n=>n==="DIVE_LEFT"?"提前扑左":n==="DIVE_RIGHT"?"提前扑右":n==="HOLD_CENTER"?"守中路":"等出脚",Zf=n=>n==="DIVE_LEFT"?"L":n==="DIVE_RIGHT"?"R":n==="HOLD_CENTER"?"C":null,R1=(n,e,t=0)=>{const i=n==="L"?-.72:n==="R"?.72:0,s=e==="POWER"?.88:e==="CENTER"?.58:.68;return{targetX:_e(i+(Math.random()-.5)*(.16-t*.06),-1,1),targetY:_e(e==="POWER"?.48+Math.random()*.24:.28+Math.random()*.25,.1,.9),power:_e(s+(Math.random()-.5)*.12,.34,1),curve:_e((Math.random()-.5)*.34,-1,1)}},Jf=n=>n.scored?"goal":n.saved?"saved":Math.abs(Math.abs(n.finalZ)-3.48)<.22&&n.finalY<=2.34?"post":"miss",Qf=(n,e)=>{const t=e||n.shotDir||Mc(n.finalZ/3.48),i=t==="L"?-1:t==="R"?1:n.finalZ<0?-1:1;return n.shotDir=t,n.keeperDir=Mc(n.keeperTargetX),n.scored?(n.saved=!1,n.missed=!1,n.finalZ=t==="C"?_e(n.finalZ,-.85,.85):_e(n.finalZ,i*2.1,i*3.12),n.finalY=_e(n.finalY,.55,2.05),n):n.saved?(n.scored=!1,n.missed=!1,n.finalZ=_e(n.keeperTargetX*3.48,-3.05,3.05),n.finalY=_e(n.finalY,.65,1.75),n):(n.scored=!1,n.saved=!1,Math.abs(Math.abs(n.finalZ)-3.48)<.26||!n.missed&&Math.random()<.45?(n.missed=!0,n.finalZ=i*3.48,n.finalY=_e(n.finalY,.65,2.05)):(n.missed=!0,n.finalZ=i*_e(Math.abs(n.finalZ),3.95,5.25),n.finalY=_e(n.finalY,.55,3.05)),n)},N1=(n,e,t,i,s)=>{const d=e||i,h=_e(ln(d||i,"penalty"),.35,1.2),f=_e(ln(d||i,"shooting"),.45,1.35),b=_e(((d==null?void 0:d.baseOverall)||72)/100*cl((d==null?void 0:d.stamina)||80),.45,1),v=_e(((t==null?void 0:t.attributes.awareness)||.88)*.46+((t==null?void 0:t.attributes.speed)||.88)*.26+((t==null?void 0:t.baseOverall)||72)/80*.28,.55,1.3),_=1-_e(Math.abs(n.power-.72)/.52,0,1),y=_e((Math.abs(n.targetX)-.58)/.42,0,1)*.42+_e((n.targetY-.72)/.28,0,1)*.42,A=1-Math.abs(n.curve)*.22,M=_e(h*.5+f*.16+b*.18+_*.1+A*.06-y*.22,.05,1.2),x=(1.18-M)*(.55+n.power*.75),R=()=>(Math.random()-.5)*x,I=n.targetX*3.48+n.curve*(.28+n.power*.24)+R()*1.85,P=.18+n.targetY*2.05+(n.power-.72)*.34+R()*.62,B=Mc(I/3.48),C=_e(s??n.targetX+(Math.random()-.5)*(1.28-v),-1,1),V=Mc(C),E=_e(.48+v*.34+Math.random()*.22,.45,1.05),D=Math.abs(I)>3.48||P>2.34||P<.12,F=.9+E*2.95,k=.85+E*1.45,Y=!D&&Math.abs(I-C*3.48)<F*.44&&P<k&&Math.random()<_e(v*.72+(1-M)*.32,.18,.88);return{shot:n,keeperTargetX:C,keeperPower:E,shotDir:B,keeperDir:V,scored:!D&&!Y,saved:Y,missed:D,finalZ:I,finalY:P,quality:M,risk:y}},Tr=34,em=Tr+zu,ic=33.55,il=33.2;function k1(){var rh,oh,lh,ch,dh,uh,hh,fh,mh,ph,xh;const{club:n,nextOpponent:e,allClubs:t,setPhase:i,week:s,advanceRound:r,tactics:o,leagueRound:d,penaltyTrainingMode:h,setPenaltyTrainingMode:f,disciplineRecords:b,roguelite:v,logRogueliteEvent:p,setMatchNavigationStatus:_,autoResolveMatchRequestId:y}=nm(),A=ce.useMemo(()=>Rp(),[]),M=ce.useRef(!1),x=ce.useMemo(()=>new Set((b||[]).filter(c=>c.suspendedMatches>0).map(c=>c.playerId)),[b]),R=ce.useMemo(()=>new Set(n.squad.filter(c=>(c.runtime.condition.injuryDays||0)>0).map(c=>c.id)),[n.squad]),I=A.enabled&&A.opponentCountry?A.opponentCountry:e,P=ce.useMemo(()=>t.find(c=>c.name===I),[t,I]),B=ce.useMemo(()=>{const c=n.squad.filter(T=>!x.has(T.id)&&!R.has(T.id)),m=c.length>=11?c:n.squad;return vh(m,(o==null?void 0:o.formation)||"4-3-3",o==null?void 0:o.lineupIds)},[n.squad,R,x,o==null?void 0:o.formation,o==null?void 0:o.lineupIds]),C=ce.useRef([]),V=ce.useRef({}),E=ce.useRef([]),D=ce.useRef(new Map),F=ce.useRef(new Set),k=ce.useRef(Xf()),Y=ce.useRef(0),ue=ce.useRef(new Set),ge=ce.useRef(new Set),$=ce.useRef([]),ae=ce.useRef(y||0),[me,Ce]=ce.useState([]),[Ue,tt]=ce.useState(null),Ee=ce.useMemo(()=>Np(v,{isKnockout:d>=4,tactics:o}),[v,d,o]),bt=ce.useMemo(()=>Ee.activeIds.map(_h).filter(Boolean),[Ee.activeIds]),Je=ce.useMemo(()=>({teamName:n.name}),[n.name]),Rt=ce.useMemo(()=>{if(!((v==null?void 0:v.specialEffects)||[]).some(U=>U.routeId==="opponent_disruption")||!P||P.squad.length<12)return null;const m=[...P.squad].filter(U=>U.position!=="GK").sort((U,W)=>W.overall-U.overall)[0],T=[...B].filter(U=>U.position!=="GK").sort((U,W)=>U.overall-W.overall)[0];if(!m)return null;const g=T?Math.min(84,Math.max(T.overall+6,Math.round(m.overall*.92))):0;return{aceId:m.id,aceName:m.name,aceOverall:m.overall,beneficiaryId:T==null?void 0:T.id,beneficiaryName:T==null?void 0:T.name,beneficiaryBefore:T==null?void 0:T.overall,beneficiaryAfter:g||(T==null?void 0:T.overall),title:"对面大哥赛前失联",description:T?`${m.name}（${m.overall}）本场无法首发，${T.name}临时吃到录像室偷师加成。`:`${m.name}（${m.overall}）本场无法首发，对手进攻上限下降。`}},[B,P,v==null?void 0:v.specialEffects]),st=ce.useMemo(()=>!P||!Rt?P:{...P,squad:P.squad.filter(c=>c.id!==Rt.aceId)},[P,Rt]),we=ce.useMemo(()=>Rt!=null&&Rt.beneficiaryId?B.map(c=>{if(c.id!==Rt.beneficiaryId)return c;const m=Math.max(0,(Rt.beneficiaryAfter||c.overall)-c.overall),T=(g,U)=>_e(g+U,35,99);return{...c,overall:Rt.beneficiaryAfter||c.overall,currentAttributes:{...c.currentAttributes,shooting:T(c.currentAttributes.shooting,Math.min(8,m)),passing:T(c.currentAttributes.passing,Math.min(8,m)),dribbling:T(c.currentAttributes.dribbling,Math.min(7,m)),decision:T(c.currentAttributes.decision,Math.min(7,m)),awareness:T(c.currentAttributes.awareness,Math.min(6,m))}}}):B,[B,Rt]),[nt,We]=ce.useState(!1),[Lt,Xt]=ce.useState(!1),[Ct,si]=ce.useState(!1),[Ot,On]=ce.useState(!1),[Un,sn]=ce.useState(0),[fi,jn]=ce.useState([]),[Fn,X]=ce.useState({home:0,away:0}),[Ne,Vt]=ce.useState(null),[mn,Ve]=ce.useState("idle"),[Mi,N]=ce.useState("准备开始点球决胜！点球决战采用经典的5轮PK规则与骤死赛制，执掌球队决定射门方向搏杀！"),[S,ee]=ce.useState({isDragging:!1,start:null,current:null}),[Z,ie]=ce.useState(null),[he,fe]=ce.useState("SAFE"),[oe,pe]=ce.useState("WAIT"),je=ce.useRef("WAIT"),[Ge,Ie]=ce.useState(null),[Fe,_t]=ce.useState([]),[xt,an]=ce.useState(null),G=ce.useRef(!1),[He,ve]=ce.useState([]),[ht,$e]=ce.useState(!1),[Te,Et]=ce.useState({home:{teamId:"HOME",orderedPlayerIds:[]},away:{teamId:"AWAY",orderedPlayerIds:[]}}),[et,bi]=ce.useState(null),[Wt,vs]=ce.useState(null),[Bi,ai]=ce.useState(null),ra=ce.useRef("KICKOFF"),oa=ce.useRef(!1),ss=ce.useRef(!1),[yi,Us]=ce.useState(0),[Hi,la]=ce.useState(1),[as,Fa]=ce.useState(!1),[ca]=ce.useState(Math.random()<.5?"HOME":"AWAY"),[Gi,qi]=ce.useState(!1),[Bt,Ti]=ce.useState(!1),[ws,Lr]=ce.useState(!0),rs=ce.useRef(0),os=ce.useRef(null),ka=ce.useRef(new Map),[w,K]=ce.useState({team:null,show:!1,scoreTotal:null}),[ne,J]=ce.useState("AUTO"),[re,rt]=ce.useState("BROADCAST"),[ft,at]=ce.useState(0),[yt,Tt]=ce.useState(!1),[$t,rn]=ce.useState(null),[Nt,Wn]=ce.useState(!1),mi=ce.useRef(null),Si=ce.useRef(!1),kn=ce.useRef(null),Vi=ce.useRef(null),lt=ce.useRef(null),[Ki,gn]=ce.useState("LIVE"),[Zi,H]=ce.useState(!1),[vt,Xe]=ce.useState(()=>typeof window>"u"?"all":Pp().matchAudioMode),gt=ce.useRef(new Set),[ut,bn]=ce.useState(null),[Yt,ri]=ce.useState(null),[Kn,ls]=ce.useState(0),[ki,Ts]=ce.useState(0),[vi,Fs]=ce.useState([]),[Wi,ks]=ce.useState([]),ya=ce.useRef(-99);ce.useEffect(()=>{const c=window.requestAnimationFrame(()=>{window.dispatchEvent(new Event("resize"))});return()=>window.cancelAnimationFrame(c)},[Zi]),ce.useEffect(()=>{const c=!ws&&!Bt&&!h;return window.dispatchEvent(new CustomEvent("fantasy-match-navigation-lock",{detail:{locked:c}})),()=>{window.dispatchEvent(new CustomEvent("fantasy-match-navigation-lock",{detail:{locked:!1}}))}},[Bt,h,ws]);const Zs=ce.useMemo(()=>new Set(vi.map(c=>c.outgoingId)),[vi]),Sa=ce.useMemo(()=>new Set(vi.map(c=>c.incomingId)),[vi]),Qr=ce.useMemo(()=>new Set(Wi.map(c=>c.outgoingId)),[Wi]),As=ce.useMemo(()=>new Set(Wi.map(c=>c.incomingId)),[Wi]),Ea=ce.useMemo(()=>{const c=we.length?we:n.squad.slice(0,11);return c.length?c.reduce((m,T)=>m+(Number.isFinite(T.overall)?T.overall:70),0)/c.length:70},[n.squad,we]),eo=ce.useMemo(()=>{var m;const c=((m=st==null?void 0:st.squad)==null?void 0:m.slice(0,11))||[];return c.length?c.reduce((T,g)=>T+(Number.isFinite(g.overall)?g.overall:70),0)/c.length:Ea},[st==null?void 0:st.squad,Ea]),Or=ce.useMemo(()=>Ah(n,eo),[n,eo]),[An,da]=ce.useState(()=>A.enabled?Or:dl(o)),to=ce.useMemo(()=>A.enabled?Ah(st,Ea):g0(st,Ea),[A.enabled,st,Ea]),vn=ce.useMemo(()=>st?tm(st):null,[st]);ce.useEffect(()=>{if(A.enabled){da(Or);return}!ws&&!Bt||da(c=>c.formation===o.formation?dl(o):c)},[A.enabled,Or,Bt,ws,o]);const zi=ce.useRef(An),En=ce.useRef(to);ce.useEffect(()=>{zi.current=An},[An]),ce.useEffect(()=>{En.current=to},[to]);const[L,oi]=ce.useState({home:[],away:[],ball:{x:0,z:0,y:0,vx:0,vz:0,vy:0,ownerId:null,lastHolderId:null,cooldown:0},score:{home:0,away:0},possession:"HOME",phase:"BUILDUP",setPiece:null,prepareTimer:0,action:{type:"NONE",sourceId:null,targetId:null,timer:0},foulInfo:null,blackboard:{ballOwner:null,possessionTeam:"HOME",ballPos:{x:0,z:0},matchPhase:"BUILDUP",attackSide:"CENTER",needSupport:!1},events:[],disciplineEvents:[]}),Ac=ce.useMemo(()=>{const c=(T,g,U)=>Math.max(g,Math.min(U,T)),m=Cp(An.formation);return L.home.map((T,g)=>{const U=m[g];return{player:T,slotIndex:g,slotLabel:(U==null?void 0:U.label)||T.role,left:c((U==null?void 0:U.x)??50,7,93),top:c((U==null?void 0:U.y)??50,8,92)}})},[An.formation,L.home]),_s=ut?L.home.find(c=>c.id===ut):null,Ms=Yt?n.squad.find(c=>c.id===Yt):null,wa=c=>{if(!c)return"--";const m=String(c);return m==="GK"?"门将":["DEF","DF","CB","LB","RB"].includes(m)?"后卫":["MID","MF","CDM","CM","CAM","LM","RM"].includes(m)?"中场":["FWD","FW","ST","LW","RW"].includes(m)?"前锋":m},Rc=(c,m)=>{if(!m)return wa(c.position);const T=yl(c,m.role);return T>=.98?"天然适配":T>=.9?"可客串":T>=.78?"勉强适配":"不适配"},Ye=c=>`${c}-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,pn=ce.useCallback(c=>{if(c.type!=="GOAL")return c;const m=C.current.find(T=>T.minutes===c.min&&T.team===c.team);return{...c,scorerName:(m==null?void 0:m.playerName)||c.scorerName,assistName:(m==null?void 0:m.assistBy)||c.assistName,isOwnGoal:(m==null?void 0:m.isOwnGoal)??c.isOwnGoal}},[]),Cn=ce.useCallback(c=>Gf(pn(c),{homeTeam:n.name,awayTeam:I||e||"对手",homeScore:L.score.home,awayScore:L.score.away}),[n.name,I,pn,L.score.away,L.score.home,e]);ce.useEffect(()=>{const c=m=>{const T=m.detail;T&&(Xe(T.matchAudioMode),Wp())};return window.addEventListener(Mh,c),()=>window.removeEventListener(Mh,c)},[]),ce.useEffect(()=>{typeof window<"u"&&window.localStorage.setItem(b1,vt),Ip({matchAudioMode:vt})},[vt]),ce.useEffect(()=>(vt!=="off"&&Gi&&!as&&!nt&&!Lt&&!Ct&&!Bt?Xo(vt):yh(),()=>yh()),[vt,Lt,nt,as,Ct,Gi,Bt]),ce.useEffect(()=>{if(vt==="off"){L.events.forEach(m=>gt.current.add(m.id));return}const c=L.events.filter(m=>!gt.current.has(m.id)).map(m=>pn(m)).map(m=>({event:m,kind:Dp(m)})).filter(m=>!!m.kind).sort((m,T)=>Vf[T.kind]-Vf[m.kind]||T.event.min-m.event.min).slice(0,3);L.events.forEach(m=>gt.current.add(m.id)),c.forEach(({event:m},T)=>{window.setTimeout(()=>Lp(m,vt),T*260)})},[vt,pn,L.events]);const zn=ce.useRef({}),Qn=(c,m,T,g,U=2)=>{const W=Math.max(0,it.current||0),q=zn.current[T]??-99;W-q<U||(zn.current[T]=W,c.events=[{id:Ye(T),min:W,type:"INCIDENT",team:m,description:g},...c.events].slice(0,50))},wn=(c,m,T,g,U)=>U==="distribution"?`${c.name} 后场出球，找到 ${m.name} 稳住第一脚推进。`:U==="killer"?`${c.name} 送出直塞，${m.name} 正在前插接应。`:g||T>=34?`${c.name} 长传转移，${m.name} 在另一侧拉开空间。`:U==="safe"?`${c.name} 横传回做，${m.name} 接球重新组织。`:T<=16?`${c.name} 与 ${m.name} 完成短传配合，继续向前压迫。`:`${c.name} 斜传推进，${m.name} 接应后带过中线。`,ei=(c,m)=>{const T=k.current;T[m]+=1,T.byTeam[c][m]+=1},zs=c=>c==="PENALTY"?"penalty":c==="FREEKICK"?"freeKick":c==="CORNER"?"corner":!c||c==="NONE"||c==="PASS"||c==="DRIBBLE"||c==="SHOOT"?"openPlay":"other",ua=(c,m,T)=>{const g=k.current;g.bySource[m][T]+=1,g.byTeamSource[c][m][T]+=1},ha=(c,m)=>{k.current.shotOutcomes[c][m]+=1},Rs=(c,m,T,g)=>{c.lastShot&&!ue.current.has(c.lastShot.id)&&ji(c,"unresolved",void 0,{unresolvedReason:c.ownerId===null?"newShotAfterControl":"controlledByPlayer"});const U=`shot-${++Y.current}`;return c.lastShot={id:U,team:m,onTarget:T,source:g},U},ji=(c,m,T,g)=>{const U=c.lastShot,W=U==null?void 0:U.team;if(!U||!W||ue.current.has(U.id))return!1;ue.current.add(U.id),ha(W,m);const q=m==="unresolved"?(g==null?void 0:g.unresolvedReason)||"unknown":void 0;return q&&(k.current.shotUnresolvedReasons[W][q]+=1),k.current.shotOutcomeEvents.push({shotId:U.id,team:W,outcome:m,unresolvedReason:q,minute:(g==null?void 0:g.minute)??it.current,phase:(g==null?void 0:g.phase)??ra.current,scoreBefore:(g==null?void 0:g.scoreBefore)||{home:L.score.home,away:L.score.away},scoreAfter:(g==null?void 0:g.scoreAfter)||(g==null?void 0:g.scoreBefore)||{home:L.score.home,away:L.score.away},ball:{x:c.x,z:c.z,y:c.y,vx:c.vx,vz:c.vz,vy:c.vy}}),c.lastShot=null,!0},Bs=(c,m)=>{ei(c,"attackActions"),Math.abs(m)>20&&ei(c,"wideActions")},Ai=(c,m,T,g)=>{ei(c,"passAttempts"),m<=16&&ei(c,"shortPasses"),m>=30&&ei(c,"longPasses"),g&&ei(c,"lobPasses"),Bs(c,T)},fa=(c,m,T,g=!1,U="openPlay")=>{ei(c,"shots"),ua(c,U,"shots"),g&&ei(c,"shotsOnTarget"),g&&ua(c,U,"shotsOnTarget"),m>20&&ei(c,"longShots"),Bs(c,T)},Bo=(c,m)=>{ei(c,"dribbles"),Bs(c,m)},Nc=(c,m)=>{ei(c,"successfulDribbles"),Bo(c,m)},xr=(c,m)=>{ei(c,"possessionWins"),(c==="HOME"?m<0:m>0)&&ei(c,"counterAttacks")},Pc=(c,m,T)=>{ei(c,"successfulTackles"),T&&xr(c,m)},gl=(c,m,T)=>{const g=m.byTeam[c],U=(Pe,ye)=>ye>0?Pe/ye:0,W=Math.max(0,g.attackActions-g.wideActions),q=U(g.shortPasses,g.passAttempts),j=U(g.longPasses+g.lobPasses,g.passAttempts),te=U(g.wideActions,g.attackActions),xe=U(g.dribbles,Math.max(1,g.attackActions)),Ke=U(g.shotsOnTarget,g.shots),qe=U(g.longShots,g.shots),Oe=g.tackleAttempts+g.fouls*.6,a=U(g.fouls,Math.max(1,g.tackleAttempts)),le=[];return g.passAttempts>=12&&q>=.58&&le.push("PASSING"),g.passAttempts>=8&&j>=.28&&le.push("DIRECT"),g.attackActions>=6&&te>=.48&&le.push("WIDE"),g.attackActions>=6&&te<=.28&&le.push("CENTRAL"),(g.dribbles>=4||xe>=.18)&&le.push("DRIBBLE"),g.shots>=3&&qe>=.34&&le.push("LONG_SHOT"),Oe>=10&&le.push("PRESS"),g.shots<=3&&g.tackleAttempts>=8&&le.push("LOW_BLOCK"),(g.counterAttacks>=2||g.possessionWins>=5&&j>=.2)&&le.push("DIRECT"),m.byTeamSource[c].corner.shots+m.byTeamSource[c].freeKick.shots>=2&&le.push("SET_PIECE"),a>=.38&&g.fouls>=3&&le.push("CHAOS"),{team:c,passAttempts:g.passAttempts,shortPasses:g.shortPasses,longPasses:g.longPasses,lobPasses:g.lobPasses,dribbles:g.dribbles,successfulDribbles:g.successfulDribbles,shots:g.shots,shotsOnTarget:g.shotsOnTarget,goals:T,longShots:g.longShots,tackleAttempts:g.tackleAttempts,successfulTackles:g.successfulTackles,fouls:g.fouls,possessionWins:g.possessionWins,counterAttacks:g.counterAttacks,attackActions:g.attackActions,wideActions:g.wideActions,centralActions:W,shortPassRatio:q,longPassRatio:j,wideRatio:te,dribbleRatio:xe,shotAccuracy:Ke,longShotRatio:qe,pressureIndex:Oe,disciplineRisk:a,styleTags:le}},no=(c,m)=>{const T=gl("HOME",c,m.home),g=gl("AWAY",c,m.away);return{home:T,away:g,user:T,opponent:g,summaryTags:Array.from(new Set(T.styleTags))}},Ur=()=>(V.current={...V.current,tacticalProfile:no(k.current,{home:L.score.home,away:L.score.away})},V.current),cs=(c,m,T,g)=>{if(!Ee.activeIds.includes(c))return;const U=`${c}:${g}`;if(ge.current.has(U))return;ge.current.add(U);const W={cardId:c,type:m,minute:it.current,text:T};$.current=[W,...$.current].slice(0,12),Ce($.current),oi(q=>({...q,events:[{id:Ye(`rogue-${c}`),min:it.current,type:"INCIDENT",team:"HOME",description:`[ROGUE] ${T}`},...q.events].slice(0,50)})),tt({cardId:c,text:T,type:m}),window.setTimeout(()=>{tt(q=>(q==null?void 0:q.cardId)===c&&q.text===T?null:q)},3200),p({round:d,minute:it.current,cardId:c,type:m,text:T})},ma=c=>c.find(m=>Ee.activeIds.includes(m)),Ta=(c,m,T="trigger")=>{if(!Ee.activeIds.includes("set_piece_codebook"))return;const g=ta("set_piece_codebook",Je);cs("set_piece_codebook",T,`${g}：${c}`,m)},Ja=(c,m,T=Kt.current)=>{const g=typeof c=="string"?null:c,U=typeof c=="string"?c:c.formation,W=T===1||T===3,q=m?W?-1:1:W?1:-1,j=[],te=g?(g.defensiveLine-50)*.22+(g.mentality==="ATTACKING"?4:g.mentality==="DEFENSIVE"?-5:0):0,xe=g?.82+g.width/100*.5:1;j.push({role:"GK",x:50*q,z:0});let Ke=4,qe=3,Oe=3;U==="4-4-2"?(Ke=4,qe=4,Oe=2):U==="4-3-3"?(Ke=4,qe=3,Oe=3):U==="3-5-2"?(Ke=3,qe=5,Oe=2):U==="5-3-2"?(Ke=5,qe=3,Oe=2):U==="4-2-3-1"&&(Ke=4,qe=5,Oe=1);for(let a=0;a<Ke;a++){const le=60/(Ke-1||1),Pe=(-30+a*le)*xe;j.push({role:"DEF",x:(38-te)*q,z:Pe})}for(let a=0;a<qe;a++){const le=50/(qe-1||1),Pe=(-25+a*le)*xe;j.push({role:"MID",x:(18-te*.7)*q,z:Pe})}for(let a=0;a<Oe;a++){const le=46/(Oe-1||1),Pe=(-23+a*le)*xe;j.push({role:"FWD",x:(6-te*.45)*q,z:Pe})}return j},Qa=ce.useCallback((c,m,T="HOME")=>{const g=m.role,U=yl(c,g),W=it.current>0?it.current:0,q=T==="HOME"&&Ee.activeIds.includes("super_sub_joker")&&g!=="GK",j=W>=60?1.35:W>=45?1:.45,te=q?Math.round(Math.min(6,Ee.superSubOverallBonus*j)):0,xe=q?Math.min(.16,Ee.superSubAttributeBonus*j):0,Ke=q?Ee.superSubStaminaCost:0,qe=(a,le=1)=>{const Pe=Number.isFinite(a)?a:70,ye=1-(1-U)*le;return Pe/80*ye},Oe=a=>xe>0?_e(a*(1+xe),.35,1.45):a;return{id:c.id,name:c.name,shirtNumber:c.shirtNumber,baseOverall:(Number.isFinite(c.overall)?Sh(c,g):70)+te,x:m.x,z:m.z,vx:0,vz:0,team:T,baseX:m.baseX,baseZ:m.baseZ,role:g,realPosition:c.position,task:"RECOVER",resetTarget:null,resetDelay:0,intent:"NONE",intentTimer:Math.random()*500,reactionDelay:Math.random()*200,stamina:Math.min(100,Number.isFinite(c.runtime.condition.fitness)?c.runtime.condition.fitness:100),traits:c.traits||[],action:"NONE",actionTimer:0,rogueliteSubBoost:te>0||xe>0?{overallBonus:te,attributeBonus:xe,staminaCost:Ke}:void 0,yellows:D.current.get(c.id)||0,sentOff:!1,attributes:{speed:Oe(qe(c.currentAttributes.speed)),endurance:qe(c.currentAttributes.stamina,.35),passing:Oe(qe(c.currentAttributes.passing)),dribbling:Oe(qe(c.currentAttributes.dribbling)),shooting:Oe(qe(c.currentAttributes.shooting)),penalty:Oe(qe(c.currentAttributes.penalty??Math.round(c.currentAttributes.shooting*.82))),tackling:Oe(qe(c.currentAttributes.tackle)),awareness:Oe(qe(c.currentAttributes.awareness)),strength:Oe(qe(c.currentAttributes.strength,.35)),aggression:qe(c.personality.aggression,.15),discipline:qe(c.personality.discipline||c.hiddenAttributes.discipline,.15)}}},[Ee]),Fr=(c,m)=>F.current.has(c)?"红牌罚下":x.has(c)?"停赛":m==="OUTGOING"&&Zs.has(c)||m==="INCOMING"&&Sa.has(c)?"已在待换队列":null,Xm=()=>{if(!ut||!Yt)return;if(Kn+vi.length>=ba){alert("本场比赛换人名额已经用完");return}const c=L.home.find(U=>U.id===ut),m=n.squad.find(U=>U.id===Yt);if(!c){alert("这名球员已经不在场上，无法换下"),bn(null);return}if(!m)return;const T=Fr(c.id,"OUTGOING");if(T){alert(`无法换下 ${c.name}：${T}`),bn(null);return}const g=Fr(m.id,"INCOMING");if(g){alert(`无法换上 ${m.name}：${g}`),ri(null);return}if(L.home.some(U=>U.id===m.id)){alert(`${m.name} 已经在场上`),ri(null);return}Fs(U=>[...U,{outgoingId:c.id,incomingId:m.id}]),bn(null),ri(null)},Km=ce.useCallback((c,m)=>{c!==m&&(oi(T=>{const g=T.home.findIndex(qe=>qe.id===c),U=T.home.findIndex(qe=>qe.id===m);if(g<0||U<0)return T;const W=Ja(zi.current,!0),q=W[g],j=W[U];if(!q||!j)return T;const te=(qe,Oe)=>({...qe,baseX:Oe.x,baseZ:Oe.z,role:Oe.role,task:"RECOVER",resetTarget:null,resetDelay:0,intent:"NONE",intentTimer:Math.min(qe.intentTimer,120)}),xe=[...T.home];xe[g]=te(T.home[U],q),xe[U]=te(T.home[g],j);const Ke={id:Ye("swap"),min:it.current,type:"INCIDENT",description:`战术换位：${T.home[g].name} 与 ${T.home[U].name} 交换场上职责。`,team:"HOME"};return{...T,home:xe,events:[Ke,...T.events].slice(0,50)}}),bn(null),ri(null))},[]),$m=c=>{const m=ut===c,T=Zs.has(c),g=F.current.has(c)||L.home.some(U=>U.id===c&&U.sentOff);if(!(T||g)){if(Yt){bn(m?null:c);return}if(!ut||m){bn(m?null:c);return}Km(ut,c)}},ju=ce.useCallback(()=>{var Oe,a;if(!st||ki+Wi.length>=ba||L.away.length<8)return null;const c=it.current,m=L.score.away-L.score.home,T=c>=78,g=m<0&&c>=62,U=m>0&&c>=70,W=c>=90;if(c<50&&!L.away.some(le=>le.role!=="GK"&&le.stamina<34))return null;const j=(Oe=L.away.filter(le=>le.role!=="GK"&&!le.sentOff&&!Qr.has(le.id)&&!F.current.has(le.id)).map(le=>{const Pe=le.stamina<30?58:le.stamina<45?38:le.stamina<58&&T?20:le.stamina<68&&W?16:0,ye=g&&(le.role==="FWD"||le.role==="MID")?14:U&&(le.role==="MID"||le.role==="DEF")?12:0,ke=(le.yellows||0)>0&&c>=60?16:0,pt=(le.task==="PRESS"||le.task==="FORWARD_RUN"||le.task==="ATTACK_SPACE")&&le.stamina<64?8:0,jt=Pe+ye+ke+pt-(le.role==="DEF"&&m<0?2:0);return{player:le,score:jt}}).filter(le=>le.score>=18).sort((le,Pe)=>Pe.score-le.score||le.player.stamina-Pe.player.stamina)[0])==null?void 0:Oe.player;if(!j)return null;const te=new Set(L.away.map(le=>le.id)),xe=st.squad.filter(le=>!te.has(le.id)&&!As.has(le.id)&&!F.current.has(le.id)&&(Number.isFinite(le.runtime.condition.fitness)?le.runtime.condition.fitness:100)>=45),Ke=g?j.role==="DEF"?"MID":j.role:U&&j.role==="FWD"?"MID":j.role,qe=(a=xe.map(le=>{const Pe=Gc(le.position),ye=yl(le,Ke),ke=Pe===j.role?10:0,pt=g&&(Pe==="FWD"||Pe==="MID")?12:U&&(Pe==="DEF"||Pe==="MID")?10:0,jt=(Number.isFinite(le.runtime.condition.fitness)?le.runtime.condition.fitness:100)*.18,Be=(Number.isFinite(le.overall)?le.overall:68)*.62;return{player:le,score:Be+jt+ye*22+ke+pt}}).sort((le,Pe)=>Pe.score-le.score)[0])==null?void 0:a.player;return qe?{outgoingId:j.id,incomingId:qe.id}:null},[ki,st,L.away,L.score.away,L.score.home,As,Qr,Wi.length]);ce.useEffect(()=>{if(Bt||Ot||Ct||h||Wi.length>0||ki>=ba)return;const c=it.current;if(c-ya.current<6)return;const m=ju();m&&(ya.current=c,ks(T=>T.length>0?T:[m]))},[ki,Ot,Ct,Bt,Wi.length,h,ju]),ce.useEffect(()=>{if(!vi.length||!No(L.phase))return;const c=Math.max(0,ba-Kn);if(c<=0)return;let m=L.home;const T=[],g=[],U=[];for(const W of vi.slice(0,c)){const q=m.find(xe=>xe.id===W.outgoingId),j=n.squad.find(xe=>xe.id===W.incomingId);if(!q||!j||m.some(xe=>xe.id===j.id)||F.current.has(W.outgoingId)||F.current.has(W.incomingId)||x.has(W.incomingId)||R.has(W.incomingId)){g.push(W);continue}const te=Qa(j,q);if(te.rogueliteSubBoost){const{overallBonus:xe,attributeBonus:Ke,staminaCost:qe}=te.rogueliteSubBoost;cs("super_sub_joker","success",`替补奇兵：${j.name} 登场，总评 +${xe}，关键属性 +${Math.round(Ke*100)}%，体能消耗 +${Math.round(qe*100)}%`,`super-sub-${j.id}-${it.current}`)}m=m.map(xe=>xe.id===q.id?te:xe),T.push(W),U.push({id:Ye("sub"),min:it.current>0?it.current:0,type:"SUB",team:"HOME",description:`换人：${j.name} 替下 ${q.name}`})}!T.length&&!g.length||(oi(W=>No(W.phase)?{...W,home:m,events:[...U,...W.events].slice(0,50)}:W),T.length&&ls(W=>Math.min(ba,W+T.length)),Fs(W=>W.filter(q=>![...T,...g].some(j=>j.outgoingId===q.outgoingId&&j.incomingId===q.incomingId))))},[Qa,n.squad,R,L.home,L.phase,vi,Kn,x]),ce.useEffect(()=>{if(!Wi.length||!No(L.phase))return;const c=Math.max(0,ba-ki);if(c<=0)return;let m=L.away;const T=[],g=[],U=[];for(const W of Wi.slice(0,c)){const q=m.find(Ke=>Ke.id===W.outgoingId),j=st==null?void 0:st.squad.find(Ke=>Ke.id===W.incomingId);if(!q||!j||m.some(Ke=>Ke.id===j.id)||F.current.has(W.outgoingId)||F.current.has(W.incomingId)){g.push(W);continue}const te=Qa(j,q,"AWAY");m=m.map(Ke=>Ke.id===q.id?te:Ke),T.push(W);const xe=q.stamina<45?"体能见底":L.score.away<L.score.home?"追分调整":L.score.away>L.score.home?"稳住防线":"节奏调整";U.push({id:Ye("away-sub"),min:it.current>0?it.current:0,type:"SUB",team:"AWAY",description:`对手换人：${j.name} 替下 ${q.name}，${xe}。`})}!T.length&&!g.length||(oi(W=>No(W.phase)?{...W,away:m,events:[...U,...W.events].slice(0,50)}:W),T.length&&Ts(W=>Math.min(ba,W+T.length)),ks(W=>W.filter(q=>![...T,...g].some(j=>j.outgoingId===q.outgoingId&&j.incomingId===q.incomingId))))},[ki,Qa,st==null?void 0:st.squad,L.away,L.phase,L.score.away,L.score.home,Wi]);const Ym=c=>{const m=Ys(zi.current,{formation:c});da(m),oi(T=>{const g=Ja(m,!0),U=T.home.map((j,te)=>{const xe=g[te];return xe?{...j,role:j.realPosition==="GK"?"GK":xe.role,baseX:xe.x,baseZ:xe.z}:j}),W=it.current>0?it.current:0,q={id:Ye("form"),min:W,type:"INCIDENT",team:"HOME",description:`📋 战术变阵：球队调整为 ${c} 阵型，开始执行边翼牵制与深度落位！`};return{...T,home:U,events:[q,...T.events].slice(0,50)}})},qm=c=>{da(m=>Ys(m,{passingLength:c,tempo:c==="DIRECT"?Math.max(m.tempo,62):c==="SHORT"?Math.min(m.tempo,48):m.tempo,risk:c==="DIRECT"?Math.max(m.risk,58):m.risk})),oi(m=>{const T=it.current>0?it.current:0;let g="";c==="SHORT"?g="📋 控球调度：全队转为短传渗透！选手主动相互靠拢，加强近距离短传配合策防。":c==="DIRECT"?g="📋 出球策略：全队转为高球长传！大幅增加后卫线大脚起高长传、越过中场直接寻找前锋！":g="📋 出球策略：重新采取混合出球。结合长短出球路线，虚实交错。";const U={id:Ye("tact"),min:T,type:"INCIDENT",team:"HOME",description:g};return{...m,events:[U,...m.events].slice(0,50)}})},Zm=c=>{da(m=>Ys(m,{attackFocus:c,width:c==="WIDE"?Math.max(m.width,72):c==="CENTRAL"?Math.min(m.width,42):55})),oi(m=>{const T=it.current>0?it.current:0;let g="";c==="WIDE"?g="📋 战术调整：主教练令全队拉开宽度、主攻两侧边路！强化边路突破与传中连线。":c==="CENTRAL"?g="📋 战术调整：主教练要求收缩中路、强化中路渗透！中前场加强肋部直塞与地面穿插。":g="📋 战术调整：恢复混合进攻路线，中路与两翼齐飞，交由球员根据场上情况自主动察。";const U={id:Ye("tact"),min:T,type:"INCIDENT",team:"HOME",description:g};return{...m,events:[U,...m.events].slice(0,50)}})},Jm=c=>{da(m=>Ys(m,{buildUpStyle:c,tempo:c==="POSSESSION"?Math.min(m.tempo,46):c==="DRIBBLE"?Math.max(m.tempo,58):m.tempo,risk:c==="DRIBBLE"?Math.max(m.risk,62):c==="POSSESSION"?Math.min(m.risk,48):m.risk})),oi(m=>{const T=it.current>0?it.current:0;let g="";c==="POSSESSION"?g="📋 战术调整：传控升级！全队尽量减少不必要的单干盘带，多一脚传递，实施极致控球 Tiki-Taka 战术。":c==="DRIBBLE"?g="📋 战术调整：提倡单兵突破！鼓励球员增加一对一突破与强行盘带，用个人技术撕裂对手防线！":g="📋 战术调整：恢复混合传控风格。传球配合与单兵突破并存。";const U={id:Ye("tact"),min:T,type:"INCIDENT",team:"HOME",description:g};return{...m,events:[U,...m.events].slice(0,50)}})},Qm=c=>{da(m=>Ys(m,{mentality:c})),oi(m=>{const T=it.current>0?it.current:0;let g="";c==="ATTACKING"?g="📋 攻守升级：主帅令全队大举向前压逼！三线齐头推高投入反抢掠夺战！":c==="DEFENSIVE"?g="📋 防守升级：低位落防！全队收拢阵线深退，重兵蹲守禁区合围！":g="📋 策略调度：回归平稳心态。平稳过渡、掌控攻防两端的重心拉锯。";const U={id:Ye("tact"),min:T,type:"INCIDENT",team:"HOME",description:g};return{...m,events:[U,...m.events].slice(0,50)}})},ep=c=>{da(m=>Ys(m,{pressing:c==="HIGH_PRESS"?78:c==="LOW_BLOCK"?24:50})),oi(m=>{const T={id:Ye("tact"),min:it.current>0?it.current:0,type:"INCIDENT",team:"HOME",description:`Tactical pressing changed: ${c}`};return{...m,events:[T,...m.events].slice(0,50)}})},tp=c=>{da(m=>Ys(m,{defensiveLine:c==="HIGH"?78:c==="LOW"?24:50})),oi(m=>{const T={id:Ye("tact"),min:it.current>0?it.current:0,type:"INCIDENT",team:"HOME",description:`Defensive line changed: ${c}`};return{...m,events:[T,...m.events].slice(0,50)}})},np=c=>{da(m=>Ys(m,{risk:c==="ADVENTUROUS"?78:c==="CONSERVATIVE"?24:50})),oi(m=>{const T={id:Ye("tact"),min:it.current>0?it.current:0,type:"INCIDENT",team:"HOME",description:`Creative risk changed: ${c}`};return{...m,events:[T,...m.events].slice(0,50)}})},ip=(c,m,T=.5)=>{const g=c.team==="HOME"?zi.current:En.current,U=c.team==="HOME"?Ee.pressFoulMultiplier:1;return M1(c,g,T,U)},sp=(c,m,T,g)=>S1({defender:c,attacker:m,allPlayers:T,isPenaltyBox:g,homeIntent:zi.current,awayIntent:En.current,minute:it.current,leagueRound:d,getTeamAttackDir:Hs}),Ho=(c,m,T)=>{const g=T.filter(j=>!j.sentOff&&!F.current.has(j.id)),U=g.filter(j=>j.team===c),W=U.filter(j=>j.role!=="GK");return m==="GOALKICK"?U.find(j=>j.role==="GK")||U[0]||g[0]||T[0]:m==="PENALTY"?[...W].sort((te,xe)=>xe.attributes.shooting-te.attributes.shooting)[0]||U[0]||g[0]||T[0]:m==="CORNER"?[...W].sort((te,xe)=>xe.attributes.passing-te.attributes.passing)[0]||U[0]||g[0]||T[0]:[...W].sort((j,te)=>te.attributes.passing+te.attributes.shooting-(j.attributes.passing+j.attributes.shooting))[0]||U[0]||g[0]||T[0]},Js=(c,m,T,g,U,W,q,j)=>{jm(c,m,T,g,U,W,q,j)},io=(c,m,T,g)=>{const U=c.team===T,W=m.pos.x>0?1:-1,q=Kt.current===1,j=T==="HOME"?q?52.5:-52.5:q?-52.5:52.5,te=c.team==="HOME"?q?-52.5:52.5:q?52.5:-52.5;if(c.role==="GK")return m.type==="PENALTY"?U?{x:c.team==="HOME"?q?-51.5:51.5:q?51.5:-51.5,z:0}:{x:m.pos.x+W*11,z:0}:m.type==="GOALKICK"?{x:(c.team==="HOME"?q?-1:1:q?1:-1)*50,z:0}:c.id===m.kickerId?{x:te+(te>0?-1:1),z:0}:{x:c.team==="HOME"?q?-51.5:51.5:q?51.5:-51.5,z:0};if(c.id===m.kickerId)return m.type==="PENALTY"?{x:m.pos.x,z:0}:m.type==="GOALKICK"?{x:m.pos.x,z:0}:{x:m.pos.x,z:m.pos.z};if(m.type==="PENALTY"){const xe=g.filter(Ke=>Ke.team===c.team).indexOf(c);return{x:m.pos.x-W*(15+Math.random()*5),z:-20+xe*4+(Math.random()-.5)*2}}if(m.type==="CORNER"){const xe=W*52.5,qe=g.filter(Oe=>Oe.team===c.team).indexOf(c);if(U){const Oe=[{x:xe-W*6,z:-8},{x:xe-W*8,z:0},{x:xe-W*6,z:8},{x:xe-W*15,z:0},{x:xe-W*25,z:-10},{x:xe-W*25,z:10}],a=Oe[qe%Oe.length];return{x:a.x+(Math.random()-.5)*2,z:a.z+(Math.random()-.5)*2}}else return{x:xe-W*(2+Math.random()*6),z:(qe%5-2)*5}}if(m.type==="THROWIN"){if(c.id===m.kickerId)return{x:m.pos.x,z:Math.sign(m.pos.z)*35.2};const xe=c.team===T,qe=g.filter(Pe=>Pe.team===c.team).indexOf(c),Oe=(qe%3-1)*8+(xe?0:T==="HOME"?-3:3),a=-Math.sign(m.pos.z),le=(Math.floor(qe/3)+.5)*(xe?7:8)*a;return{x:Math.max(-51,Math.min(51,m.pos.x+Oe)),z:Math.max(-33.5,Math.min(33.5,m.pos.z+le))}}if(m.type==="FREEKICK"){const xe=T==="HOME"?q?1:-1:q?-1:1,Ke=m.pos.x*xe>0,qe=Math.sqrt((j-m.pos.x)**2+m.pos.z**2),Oe=Ke&&qe<35;if(Ke)if(U){if(c.id!==m.kickerId){const ye=g.filter(ke=>ke.team===c.team&&ke.id!==m.kickerId).indexOf(c);if(ye<2){const ke=ye===0?.5:-.5;return{x:m.pos.x+xe*3+(Math.random()-.5),z:m.pos.z+ke*4}}else{const ke=ye-2,pt=[{x:j-xe*6,z:-10},{x:j-xe*8,z:0},{x:j-xe*6,z:10},{x:j-xe*12,z:-5},{x:j-xe*12,z:5}],jt=pt[ke%pt.length];return{x:jt.x+(Math.random()-.5)*3,z:jt.z+(Math.random()-.5)*3}}}}else{const Pe=g.filter(ke=>ke.team===c.team&&ke.role!=="GK");if(Oe){const ke=qe<20?5:qe<30?4:3,jt=Pe.sort((Be,ot)=>{const St=Math.sqrt((Be.x-m.pos.x)**2+(Be.z-m.pos.z)**2),It=Math.sqrt((ot.x-m.pos.x)**2+(ot.z-m.pos.z)**2);return St-It}).slice(0,ke).findIndex(Be=>Be.id===c.id);if(jt!==-1){const ot=j-m.pos.x,St=0-m.pos.z,It=Math.sqrt(ot*ot+St*St)||1,$n=m.pos.x+ot/It*9.15,ti=m.pos.z+St/It*9.15,Le=-(St/It),Ri=ot/It;return{x:$n+Le*(jt-(ke-1)/2)*.7,z:ti+Ri*(jt-(ke-1)/2)*.7}}}const ye=qe<25?15:30;return{x:j-xe*(4+Math.random()*8),z:(Math.random()-.5)*ye}}const a=c.team==="HOME"?q?-1:1:q?1:-1,le=m.pos.x*a/50;return{x:c.baseX+le*15+(Math.random()-.5)*5,z:c.baseZ+(Math.random()-.5)*5}}return m.type==="GOALKICK"?{x:c.baseX*.8,z:c.baseZ}:{x:c.baseX,z:c.baseZ}},so=ce.useCallback((c="HOME",m)=>{var a;const T=we.length?we:n.squad,g=T.reduce((le,Pe)=>le+Pe.overall,0)/(T.length||1),U=(a=st==null?void 0:st.squad)!=null&&a.length?st.squad.reduce((le,Pe)=>le+(Number.isFinite(Pe.overall)?Pe.overall:68),0)/st.squad.length:Math.max(58,Math.min(76,45+((st==null?void 0:st.reputation)||40)*.45)),W=Math.max(55,Math.min(88,U)),q=m!==void 0?m:Kt.current,j=st?vh(st.squad,En.current.formation,vn==null?void 0:vn.lineupIds):[],te=le=>{const Pe=le?zi.current:En.current,ye=Ja(Pe,le,q),ke=(le?we:j).filter(ot=>ot&&!F.current.has(ot.id)),pt=Math.max(7,ke.length||11),jt=new Set,Be=ot=>{const St=ke.find(Le=>!jt.has(Le.id)&&Gc(Le.position)===ot),It=ke.find(Le=>!jt.has(Le.id)&&(ot==="GK"||Gc(Le.position)!=="GK")),$n=ke.find(Le=>!jt.has(Le.id)),ti=St||It||$n||null;return ti&&jt.add(ti.id),ti};return Array.from({length:pt}).map((ot,St)=>{const It=ye[St]||{role:"MID",x:15*(le?-1:1),z:0},$n=It.x,ti=It.z,Le=le&&ke[St]||Be(It.role);Le&&jt.add(Le.id);const Ri=It.role,ys=Le?yl(Le,Ri):1,er=Le?ka.current.get(Le.id)??Le.runtime.condition.fitness??100:100,Ba=Math.min(100,(Number.isFinite(er)?er:100)+(le?Ee.staminaBonus:0)),zc=le?g:W,li=(pa,tr=1)=>{const oo=Number.isFinite(pa)?pa:(Number.isFinite(Le==null?void 0:Le.overall)?Le==null?void 0:Le.overall:zc)||70,lo=1-(1-ys)*tr;return oo/80*lo};return{id:(Le==null?void 0:Le.id)||(le?`h-${St}`:`a-${St}`),name:(Le==null?void 0:Le.name)||(le?`Player ${St}`:`Opponent ${St}`),shirtNumber:Le==null?void 0:Le.shirtNumber,baseOverall:Le?Sh(Le,Ri):Math.round(W),x:$n,z:ti,vx:0,vz:0,team:le?"HOME":"AWAY",baseX:$n,baseZ:ti,role:Ri,realPosition:Le==null?void 0:Le.position,task:"RECOVER",resetTarget:null,resetDelay:0,intent:"NONE",intentTimer:Math.random()*500,reactionDelay:Math.random()*200,stamina:Ba,traits:(Le==null?void 0:Le.traits)||[],action:"NONE",actionTimer:0,yellows:Le&&D.current.get(Le.id)||0,sentOff:!1,attributes:{speed:li(Le==null?void 0:Le.currentAttributes.speed)*(le?Ee.speedMultiplier:1),endurance:li(Le==null?void 0:Le.currentAttributes.stamina,.35),passing:li(Le==null?void 0:Le.currentAttributes.passing),dribbling:li(Le==null?void 0:Le.currentAttributes.dribbling),shooting:li(Le==null?void 0:Le.currentAttributes.shooting),penalty:li((Le==null?void 0:Le.currentAttributes.penalty)??(Le!=null&&Le.currentAttributes.shooting?Math.round(Le.currentAttributes.shooting*.82):void 0)),tackling:li(Le==null?void 0:Le.currentAttributes.tackle),awareness:li(Le==null?void 0:Le.currentAttributes.awareness),strength:li(Le==null?void 0:Le.currentAttributes.strength,.35),aggression:li(Le==null?void 0:Le.personality.aggression,.15),discipline:li((Le==null?void 0:Le.personality.discipline)||(Le==null?void 0:Le.hiddenAttributes.discipline),.15)}}})},xe=te(!0),Ke=te(!1),qe=c==="HOME"?xe:Ke,Oe=qe.find(le=>le.role==="MID")||qe[8]||qe[0];return Oe?(oi(le=>({...le,home:xe,away:Ke,ball:{x:0,z:0,y:0,vx:0,vz:0,vy:0,ownerId:Oe.id,lastHolderId:null,cooldown:0},possession:c,phase:"KICKOFF",action:{type:"NONE",sourceId:null,targetId:null,timer:0},blackboard:{ballOwner:Oe.id,possessionTeam:c,ballPos:{x:0,z:0},matchPhase:"KICKOFF",attackSide:"CENTER",needSupport:!1}})),!0):(console.error("Unable to initialize match: kickoff team has no available players",{kickoffTeam:c,homePlayers:xe.length,awayPlayers:Ke.length}),!1)},[n.squad,we,st,vn]);ce.useEffect(()=>{if(!so(ca,1)){Lr(!0),qi(!1),_("PREMATCH");return}},[so,ca]);const Cc=c=>{ka.current=new Map([...L.home,...L.away].map(m=>[m.id,Math.min(100,m.stamina+c)]))},Ic=()=>{if(Sl(vt),Xo(vt),C.current=[],V.current={},E.current=[],D.current.clear(),F.current.clear(),ka.current.clear(),k.current=Xf(),Y.current=0,ue.current.clear(),ge.current.clear(),gt.current.clear(),$.current=[],Ce([]),tt(null),ls(0),Ts(0),Fs([]),ks([]),bn(null),ri(null),ya.current=-99,_("LIVE"),Rt){const c=ma(["star_shadowing","video_room_heist","friendly_scout_report","var_eye","face_is_overrated","netwide_meeting"])||"star_shadowing";cs(c,"success",Rt.description,"opponent-intervention")}qi(!0),Us(0),Kt.current=1,la(1),Fa(!1),ss.current=!1,so(ca,1),oi(c=>({...c,disciplineEvents:[],foulInfo:null,events:[{id:Ye("start"),min:0,type:"INCIDENT",team:ca,description:bt.length?`比赛正式开始！本场黑箱规则已激活：${bt.slice(0,4).map(m=>ta(m.id,Je)).join("、")}${bt.length>4?" 等":""}`:"比赛正式开始！"}]}))},Xu=()=>{const c=ca==="HOME"?"AWAY":"HOME";Sl(vt),Xo(vt),Cc(8),Fa(!1),qi(!0),Us(45),Kt.current=2,la(2),ss.current=!1,so(c,2),oi(m=>({...m,events:[{id:Ye("start2"),min:45,type:"INCIDENT",team:c,description:"下半场开始！"},...m.events]}))},ap=()=>{Sl(vt),Xo(vt),Cc(5),We(!1),qi(!0),Us(90),Kt.current=3,la(3),ss.current=!1;const c=Math.random()<.5?"HOME":"AWAY";so(c,3),oi(m=>({...m,events:[{id:Ye("etstart"),min:90,type:"INCIDENT",team:c,description:"加时赛上半场鸣哨开始！双方交换场地，打响最后30分钟决战！"},...m.events]}))},rp=()=>{Sl(vt),Xo(vt),Cc(3),Xt(!1),qi(!0),Us(105),Kt.current=4,la(4),ss.current=!1;const c=Math.random()<.5?"HOME":"AWAY";so(c,4),oi(m=>({...m,events:[{id:Ye("etstart2"),min:105,type:"INCIDENT",team:c,description:"加时赛下半场打响！交换半场，最后15分钟极速消耗搏杀！"},...m.events]}))},Ku=ce.useCallback(()=>{if(Bt||ws)return;const c=_e(Math.max(it.current||yi||1,1),1,120),m=L.home,T=L.away,g=m.filter(Be=>Be.role!=="GK"&&!Be.sentOff),U=T.filter(Be=>Be.role!=="GK"&&!Be.sentOff),W=m.length?m.reduce((Be,ot)=>Be+Ds(ot),0)/m.length:70,q=T.length?T.reduce((Be,ot)=>Be+Ds(ot),0)/T.length:70,j=_e(.95+(W-q)/45+Ee.lateShotBonus*.8,.45,1.85),te=_e(.95+(q-W)/45,.45,1.85),xe=[],Ke=[],qe=[];let Oe=L.score.home,a=L.score.away;const le=(Be,ot)=>{const St=[],It=[...Be].sort(($n,ti)=>ti.attributes[ot]-$n.attributes[ot]).slice(0,Math.min(8,Be.length));return It.forEach(($n,ti)=>{const Le=Math.max(1,Math.round($n.attributes[ot]*7)+Math.max(0,5-ti));for(let Ri=0;Ri<Le;Ri+=1)St.push($n)}),St[Math.floor(Math.random()*Math.max(1,St.length))]||It[0]||Be[0]},Pe=(Be,ot)=>{const St=Be==="HOME"?g:U,It=le(St,"shooting"),$n=Math.random()<.58?le(St.filter(ys=>ys.id!==(It==null?void 0:It.id)),"passing"):void 0;Be==="HOME"?Oe+=1:a+=1;const ti=(It==null?void 0:It.name)||(Be==="HOME"?n.name:I||"对手"),Le=$n==null?void 0:$n.name,Ri={playerName:ti,minutes:ot,assistBy:Le,team:Be,goalKey:`quick-${Be}-${ot}-${Oe}-${a}-${ti}`,actionType:"SHOOT",resolvingPhase:"ATTACK"};xe.push(Ri),qe.push({id:Ye("quick-goal"),min:ot,type:"GOAL",team:Be,scorerName:ti,assistName:Le,description:`默认模拟：${ti} 完成破门！${Le?`（助攻：${Le}）`:""}`})},ye=(Be,ot)=>{const It=le(Be==="HOME"?g:U,"aggression");if(!It)return;const $n=Math.ceil(2+Math.random()*6),ti=Math.random(),Le={minute:ot,team:Be,playerId:It.id,playerName:It.name,type:"FOUL",severity:$n,reason:"默认模拟犯规 / 离场自动结算",location:{x:It.x,z:It.z}};if(Ke.push(Le),qe.push({id:Ye("quick-foul"),min:ot,type:"INCIDENT",team:Be,description:`默认模拟：${It.name} 犯规，比赛短暂停顿。`}),ti<.16){const Ri=ti<.025?"RED":"YELLOW";Ke.push({...Le,type:Ri,severity:Ri==="RED"?9:$n}),qe.push({id:Ye("quick-card"),min:ot,type:Ri==="RED"?"RED":"YELLOW",team:Be,cardPlayerName:It.name,cardReason:Le.reason,foulType:"犯规",description:`默认模拟：${It.name} 吃到${Ri==="RED"?"红牌":"黄牌"}。`})}},ke=(Be,ot,St=1)=>{for(let It=Math.max(1,Math.floor(Be)+1);It<=ot;It+=1){const $n=It>=75&&Oe<=a?1.22:1;Math.random()<.0125*j*$n*St&&Pe("HOME",It),Math.random()<.0125*te*St&&Pe("AWAY",It),Math.random()<.06&&ye(Math.random()<.52?"HOME":"AWAY",It)}};ke(c,90);let pt=90,jt=2;if(d>=4&&Oe===a&&(qe.push({id:Ye("quick-et"),min:90,type:"INCIDENT",team:"HOME",description:"默认模拟：常规时间战平，比赛进入加时赛。"}),ke(90,120,.78),pt=120,jt=4,Oe===a)){const Be=Math.random()<_e(.5+(W-q)/80,.32,.68);V.current={shootoutWinner:Be?"USER":"OPPONENT"},xe.push({playerName:Be?"点球大战胜出 (PK Win)":"点球大战落败 (PK Loss)",minutes:120}),qe.push({id:Ye("quick-pk"),min:120,type:"INCIDENT",team:Be?"HOME":"AWAY",description:`默认模拟：点球大战${Be?"胜出":"落败"}，结算将按点球结果推进。`})}C.current=[...C.current,...xe].sort((Be,ot)=>Be.minutes-ot.minutes),E.current=[...E.current,...Ke].sort((Be,ot)=>Be.minute-ot.minute),Us(pt),it.current=pt,Kt.current=jt,la(jt),qi(!1),Fa(!1),We(!1),Xt(!1),si(!1),On(!1),Ti(!0),_("DONE"),oi(Be=>({...Be,score:{home:Oe,away:a},phase:"BUILDUP",foulInfo:null,disciplineEvents:[...Be.disciplineEvents||[],...Ke],events:[{id:Ye("quick-end"),min:pt,type:"INCIDENT",team:"HOME",description:"已按当前场上形势默认模拟到终场。"},...qe.sort((ot,St)=>St.min-ot.min),...Be.events].slice(0,80)}))},[Bt,ws,yi,L.home,L.away,L.score.home,L.score.away,Ee.lateShotBonus,n.name,I,d,_]);ce.useEffect(()=>{_(ws?"PREMATCH":Bt?"DONE":"LIVE")},[Bt,_,ws]),ce.useEffect(()=>{const c=y||0;c<=ae.current||(ae.current=c,Ku())},[y,Ku]),ce.useEffect(()=>{if(!A.enabled||h||Ot)return;const c=Eh();if(!M.current&&!Gi&&!Bt&&!as&&!nt&&!Lt&&L.home.length>0&&L.away.length>0){M.current=!0,c&&(c.started=!0),Ic();return}as&&Hi===1&&Xu()},[A.enabled,Hi,Lt,nt,as,Ot,Gi,Bt,L.away.length,L.home.length,h]);const Go=(c,m)=>{const T=(c==="HOME"?L.home:L.away).find(W=>W.name===m),g=(c==="HOME"?L.away:L.home).find(W=>W.role==="GK"),U=(W,q)=>W.map((j,te)=>{const xe={...j,vx:0,vz:0,action:"NONE",actionTimer:0};if(j.id===(T==null?void 0:T.id))xe.x=38.5,xe.z=0;else if(j.id===(g==null?void 0:g.id))xe.x=47.4,xe.z=0;else{const Ke=te+(q===c?0:1);xe.x=29-Ke%2*1.8,xe.z=-20+Ke%10*4.2}return xe});ai({home:U(L.home,"HOME"),away:U(L.away,"AWAY"),ball:{x:41,z:0,y:0,vx:0,vz:0,vy:0,ownerId:null},perspective:c==="HOME"?"KICKER":"KEEPER"})},$u=(c,m=0)=>{const T=c.attributes.penalty*80,g=c.attributes.shooting*80,U=_e((c.baseOverall*.55+c.attributes.awareness*45)*cl(c.stamina),35,100),W=_e(c.stamina,0,100),q=_e(58+(c.stamina-65)*.18+(c.baseOverall-72)*.35,25,95),j=m===0?55:m===4?86:m>=5?82:m===3?70:48,te=c.traits||[],xe=(te.some(Ke=>/大心脏|关键|领袖|核心/.test(Ke))?m===4||m>=5?9:5:0)+(te.some(Ke=>/稳定|射手/.test(Ke))?m<5?6:3:0)+(te.some(Ke=>/队长|领袖/.test(Ke))?m===0||m===4?5:2:0)+(te.some(Ke=>/大力/.test(Ke))?2:0)+(te.some(Ke=>/年轻|无畏/.test(Ke))?m>=5?4:2:0)-(te.some(Ke=>/紧张|玻璃心/.test(Ke))?m===4||m>=5?9:4:0);return T*.35+g*.2+U*.25+W*.1+q*.05-j*.05+xe},Yu=(c,m)=>{const T=Math.round(c.attributes.penalty*80),g=Math.round(c.attributes.shooting*80),U=Math.round(_e((c.baseOverall*.55+c.attributes.awareness*45)*cl(c.stamina),35,100)),W=Math.round(_e(c.stamina,0,100)),q=m===0?55:m===4?88:m>=5?84:m===3?72:48,j=q>=80?"高":q>=60?"中":"低",te=Math.round(_e(58+(c.stamina-65)*.18+(c.baseOverall-72)*.35,25,95));return{penalty:T,shooting:g,composure:U,stamina:W,pressure:j,morale:te}},Dc=c=>{const m=c.filter(g=>!g.sentOff&&!F.current.has(g.id)),T=[];for(;m.length>0;){const g=T.length;m.sort((U,W)=>$u(W,g)-$u(U,g)),T.push(m.shift())}return T.map(g=>g.id)},ao=(c,m)=>{const T=c==="HOME"?Te.home.orderedPlayerIds:Te.away.orderedPlayerIds,g=c==="HOME"?L.home:L.away,U=g.filter(j=>!j.sentOff&&!F.current.has(j.id)),W=U[m%Math.max(1,U.length)]||U[0]||g[0];if(T.length===0)return W;const q=T[m%T.length];return U.find(j=>j.id===q)||W},Lc=(c,m,T=Fn.home,g=Fn.away)=>{const U=c==="HOME"?T:g,W=c==="HOME"?g:T;let q=m===0?54:m===4?86:m>=5?84:m===3?70:48;U<W&&(q+=8),U>W&&m>=4&&(q-=4);const j=fi.filter(xe=>xe.team===c),te=j[j.length-1];return te&&!te.success&&(q+=7),_e(q,32,96)},op=(c,m,T)=>{const g=Yu(c,T),U=Lc(m,T),W=U>=78?"高":U>=58?"中":"低",q=(c.traits||[]).slice(0,2);return{...g,pressure:W,pressureValue:U,traits:q}},lp=c=>{const m=c||L.home.find(T=>T.role==="GK")||L.home[0];return{name:(m==null?void 0:m.name)||"门将",penaltySave:Math.round(_e(((m==null?void 0:m.attributes.awareness)||.82)*46+((m==null?void 0:m.attributes.speed)||.82)*24+((m==null?void 0:m.baseOverall)||70)*.32,35,96)),reaction:Math.round(_e(((m==null?void 0:m.attributes.speed)||.82)*82,35,95)),reading:Math.round(_e(((m==null?void 0:m.attributes.awareness)||.82)*72+((m==null?void 0:m.baseOverall)||70)*.18,35,96))}},qu=(c,m)=>{const T=Lc("AWAY",m),g=_e((c.baseOverall*.55+c.attributes.awareness*45)/100,.35,1.05),U=(c.id.charCodeAt(0)+c.name.length*7)%3,W=U===0?"L":U===1?"R":"C",j=T>72&&Math.random()<.56?W:Math.random()<.18+g*.12?"C":Math.random()<.5?"L":"R",te=j==="C"?"CENTER":c.attributes.shooting>.95&&Math.random()<.5?"POWER":"SAFE",xe=["L","C","R"].filter(ye=>ye!==j),Ke=xe[Math.floor(Math.random()*xe.length)],qe=xe.find(ye=>ye!==Ke)||Ke,Oe=ye=>Yf(ye),a=T>76?"呼吸变快，像是在抓住自己最熟悉的选择":"表情控制得不错，没有急着暴露意图",le=Ee.penaltyHintBonus;if(le>0){const ye=ma(["paper_note","runup_oracle","fifth_captain"]);if(ye){const ke=ta(ye,Je);cs(ye,"trigger",`${ke}：点球线索可靠度 +${Math.round(le*100)}%`,`pk-read-${m}`)}}const Pe=[{time:6,type:"stat",message:`${le>0?"小纸条补充：":"录像组提示："}他近期点球更常打向${Oe(W)}。`,hintDirection:W,truthType:W===j?"true":"misleading",reliability:.54+le},{time:4.5,type:"psychology",message:a,hintDirection:T>76?W:void 0,truthType:T>76&&W===j?"true":"noise",reliability:.42+le*.5},{time:3.2,type:"eyes",message:`他短暂看了一眼${Oe(Ke)}，又很快收回视线。`,hintDirection:Ke,truthType:"misleading",reliability:.35},{time:2,type:"runup",message:`助跑角度更像要打开身体打${Oe(j)}。`,hintDirection:j,truthType:"true",reliability:.72+le},{time:.7,type:"supportFoot",message:`支撑脚落点似乎指向${Oe(g>.84&&le<=0?qe:j)}。`,hintDirection:g>.84&&le<=0?qe:j,truthType:g>.84&&le<=0?"misleading":"true",reliability:.68+le}];return{kickerId:c.id,intentDirection:j,shotType:te,clues:Pe}},cp=(c,m,T)=>{const g=c.clues.filter(j=>j.truthType==="true").slice(-2),U=c.clues.find(j=>j.truthType==="misleading"),W=Zf(m)===c.intentDirection||m==="WAIT"&&T.saved,q=T.saved?`你的选择“${nc(m)}”完成了关键扑救。`:W?`你的选择“${nc(m)}”判断方向正确，但射门质量还是压过了扑救。`:`你的选择“${nc(m)}”被假线索带偏了一步。`;return[`真实方向：${Yf(c.intentDirection)}，射门方式偏向${qf(c.shotType)}。`,...g.map(j=>`T-${j.time.toFixed(1)} 的线索有效：${j.message}`),U?`误导线索：${U.message}`:"这次噪音较少，身体信息更值得相信。",q].slice(0,5)},dp=(c,m)=>{Et(T=>{const g=[...T.home.orderedPlayerIds];if(c<0||c>=g.length||m<0||m>g.length)return T;const U=c<m?m-1:m;if(c===U)return T;const[W]=g.splice(c,1);return g.splice(U,0,W),{...T,home:{...T.home,orderedPlayerIds:g}}})},Zu=c=>{const m=Vi.current,T=Te.home.orderedPlayerIds.length;if(!m)return lt.current=T,vs(T),T;const g=Array.from(m.querySelectorAll('[data-pk-order-row="true"]'));let U=T;for(const W of g){const q=Number(W.dataset.pkOrderIndex);if(!Number.isFinite(q))continue;const j=W.getBoundingClientRect();if(c<j.top+j.height/2){U=q;break}}return lt.current=U,vs(U),U},up=(c,m)=>{const T=m||kn.current||et||"",g=Te.home.orderedPlayerIds.indexOf(T);dp(g,c),kn.current=null,lt.current=null,bi(null),vs(null)},hp=(c,m,T)=>{var q,j;if(c.button!==0)return;c.preventDefault(),(j=(q=c.currentTarget).setPointerCapture)==null||j.call(q,c.pointerId),kn.current=m,lt.current=T,bi(m),vs(T);const g=te=>{te.preventDefault(),Zu(te.clientY)},U=te=>{te.preventDefault();const xe=Zu(te.clientY);up(xe,m),window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",U),window.removeEventListener("pointercancel",W)},W=()=>{kn.current=null,lt.current=null,bi(null),vs(null),window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",U),window.removeEventListener("pointercancel",W)};window.addEventListener("pointermove",g,{passive:!1}),window.addEventListener("pointerup",U,{passive:!1}),window.addEventListener("pointercancel",W)},Ju=(c,m,T,g)=>N1(c,m,T,L.home[0],g),Oc=(c,m,T,g)=>{const U=typeof m=="string"?{shot:{power:.7},keeperTargetX:T==="L"?-.78:T==="R"?.78:0,scored:!!g,saved:!g&&m===T,finalZ:m==="L"?-4.4:m==="R"?4.4:0,finalY:g?1.05:1.65}:m,q=U.scored?_e(U.finalZ,-3.48,3.48):_e(U.finalZ,-5.2,5.2),j=_e(U.finalY,.2,3.15),te=U.keeperTargetX*3.48,xe=Jf(U);Ve("shooting"),ai(pt=>{if(!pt)return pt;const jt=c==="HOME"?"AWAY":"HOME",Be=ot=>ot.map(St=>St.team===c&&St.name===(Ne==null?void 0:Ne.name)?{...St,action:"SHOOT",actionTimer:1200}:St.team===jt&&St.role==="GK"?{...St,z:te,action:"SAVE",actionTimer:820}:St);return{...pt,home:Be(pt.home),away:Be(pt.away),ball:{x:44.2,z:q*.18,y:.38+j*.18,vx:2.4,vz:q*.12,vy:.08+U.shot.power*.05,ownerId:null}}});const Ke={x:44.2,z:q*.18,y:.38+j*.18},qe={x:U.scored?53.2:U.saved?47.9:xe==="post"?52.45:53.6,z:U.scored?q:U.saved?te*.82:q,y:U.scored?_e(j,.35,2.25):U.saved?_e(j*.72,.55,1.45):xe==="post"?_e(j,.6,2.05):_e(j,.5,3.1),vx:U.scored?.55:U.saved?-.8:xe==="post"?-.45:.35,vz:U.scored?q*.04:U.saved?-te*.08:xe==="post"?-q*.1:q*.06,vy:U.scored?-.03:xe==="post"?.04:.08},Oe={x:U.saved?50.1:49.2,z:U.saved?te*.72:q*.62,y:_e(.62+j*.88+U.shot.power*.18,.65,2.75)},a=performance.now(),le=980,Pe=pt=>1-Math.pow(1-pt,3),ye=(pt,jt,Be,ot)=>{const St=1-ot;return St*St*pt+2*St*ot*jt+ot*ot*Be},ke=pt=>{const jt=_e((pt-a)/le,0,1),Be=Pe(jt),ot={x:ye(Ke.x,Oe.x,qe.x,Be),z:ye(Ke.z,Oe.z,qe.z,Be),y:ye(Ke.y,Oe.y,qe.y,Be),vx:qe.vx+(1-jt)*1.65,vz:qe.vz+(q-Ke.z)*.035,vy:qe.vy,ownerId:null};ai(St=>{if(!St)return St;const It=c==="HOME"?"AWAY":"HOME",$n=Math.round(820-jt*560),ti=Le=>Le.map(Ri=>Ri.team===It&&Ri.role==="GK"?{...Ri,z:te,action:"SAVE",actionTimer:$n}:Ri);return{...St,home:ti(St.home),away:ti(St.away),ball:ot}}),jt<1&&requestAnimationFrame(ke)};requestAnimationFrame(ke),setTimeout(()=>{Ve(U.scored?"goal":U.saved?"save":"miss")},1080)},Uc=()=>{si(!1),On(!0),sn(1),X({home:0,away:0}),jn([]),fe("SAFE"),pe("WAIT"),Ie(null),ve([]);const c=L.home.filter(T=>T&&!T.sentOff&&!F.current.has(T.id)),m=L.away.filter(T=>T&&!T.sentOff&&!F.current.has(T.id));Et({home:{teamId:"HOME",orderedPlayerIds:Dc(c)},away:{teamId:"AWAY",orderedPlayerIds:Dc(m)}}),Vt(null),$e(!0),N("请先布置完整点球顺序。前五名用于常规五轮，第六名之后用于突然死亡；所有在场球员罚过一次前不会重复。"),Ve("idle")};ce.useEffect(()=>{!h||Si.current||L.home.length===0||L.away.length===0||(Si.current=!0,Lr(!1),qi(!1),Us(0),la(1),Fa(!1),We(!1),Xt(!1),si(!1),Ti(!1),K({team:null,show:!1,scoreTotal:null}),ss.current=!1,it.current=0,Kt.current=1,rs.current=0,os.current=null,oi(c=>({...c,score:{home:0,away:0},phase:"BUILDUP",setPiece:null,prepareTimer:0,foulInfo:null,events:[],action:{type:"NONE",sourceId:null,targetId:null,timer:0},ball:{...c.ball,ownerId:null,vx:0,vz:0,vy:0,cooldown:0}})),Uc())},[h,L.home.length,L.away.length]);const fp=()=>{const c=ao("HOME",0);c&&($e(!1),sn(1),Vt({team:"HOME",name:c.name,index:0}),Go("HOME",c.name),fe("SAFE"),pe("WAIT"),Ie(null),ve([]),N(`第 1 轮，我方 ${c.name} 主罚。先选择射门策略，再在下方轻滑表达方向与力度。`),Ve("idle"))},Qu=c=>{if(!c.start||!c.current)return null;const m=c.current.x-c.start.x,T=c.start.y-c.current.y,g=Math.sqrt(m*m+T*T);return g<18?null:{targetX:_e(m/118,-1,1),targetY:_e(.18+T/138,.05,1),power:_e(g/165,.28,1),curve:_e(m/120*(1-_e(Math.abs(T)/190,0,.75)),-1,1)}},mp=(c,m)=>m==="CENTER"?{...c,targetX:_e(c.targetX*.28,-.26,.26),targetY:_e(c.targetY,.18,.62),power:_e(c.power*.82,.32,.74),curve:c.curve*.25}:m==="POWER"?{...c,power:_e(c.power*1.16+.08,.5,1),targetY:_e(c.targetY+.08,.12,1),curve:c.curve*.72}:{...c,power:_e(c.power,.34,.82),targetY:_e(c.targetY,.12,.78),curve:c.curve*.55},pp=c=>{if(!Ne||Ne.team!=="HOME")return;const m=ao("HOME",Ne.index),T=L.away.find(xe=>xe.role==="GK"),g=Lc("HOME",Ne.index),U=mp(c,he),W=he==="CENTER"?Math.random()<.34?0:Math.random()<.5?-.72:.72:U.targetX+(Math.random()-.5)*(.92-_e((T==null?void 0:T.attributes.awareness)||.8,.45,1.1)),q=(g-55)/160,j={...U,targetX:_e(U.targetX+(Math.random()-.5)*q,-1,1),power:_e(U.power+(he==="POWER"?(g-60)/260:0),.28,1)},te=Ju(j,m,T,W);he==="POWER"&&(g>78||((m==null?void 0:m.stamina)||80)<45)&&Math.random()<.18&&(te.scored=!1,te.saved=!1,te.missed=!0,te.finalY=2.7),eh("HOME",Qf(te),qf(he))},xp=c=>{if(!Ne||Ne.team!=="AWAY"||G.current)return;G.current=!0;const m=ao("AWAY",Ne.index),T=L.home.find(Ke=>Ke.role==="GK"),g=Ge&&Ge.kickerId===m.id?Ge:qu(m,Ne.index),U=Zf(c),W=lp(T),q=R1(g.intentDirection,g.shotType,W.reading/100);let j=U==="L"?-.78:U==="R"?.78:U==="C"?0:q.targetX+(Math.random()-.5)*.42;if(c==="WAIT"){const Ke=(W.reaction+W.reading)/200;j=q.targetX+(Math.random()-.5)*(.78-Ke*.42)}const te=Ju(q,m,T,j);te.shotDir=g.intentDirection,te.missed||(te.finalZ=g.intentDirection==="L"?Math.min(te.finalZ,-2.15):g.intentDirection==="R"?Math.max(te.finalZ,2.15):_e(te.finalZ,-.9,.9)),c==="HOLD_CENTER"&&g.intentDirection==="C"?(te.saved=Math.random()<.72,te.scored=!te.saved,te.missed=!1):U&&U!==g.intentDirection?(te.saved=Math.random()<.04,te.scored=!te.saved&&!te.missed):U===g.intentDirection&&(te.saved=Math.random()<_e(.36+W.penaltySave/180-te.quality*.2,.2,.78),te.scored=!te.saved&&!te.missed),Qf(te,g.intentDirection);const xe=cp(g,c,te);ve(xe),an(null),_t(g.clues),eh("AWAY",te,nc(c),xe)},eh=(c,m,T,g=[])=>{if(!Ne||Ne.team==="DONE")return;const U=m.scored,W=Jf(m),q=Ne,j=[...fi,{team:c,kickerName:q.name,success:U,shootDir:m.shotDir,resultType:W}],te=Fn.home+(c==="HOME"&&U?1:0),xe=Fn.away+(c==="AWAY"&&U?1:0);X({home:te,away:xe}),jn(j);const Ke=T1(m.finalZ,m.finalY),qe=A1(W);c==="HOME"?(ve([]),N(`${q.name} 选择${T}，目标${Ke}。结果：${qe}。滑动给了意图，但最终还是由脚法、压力和门将判断共同决定。`)):N(`${q.name} 打向${Ke}，我方门将选择${T}。结果：${qe}。${g[g.length-1]||""}`),Oc(c,m),Vt(null),setTimeout(()=>{const Oe=j.filter(Pe=>Pe.team==="HOME").length,a=j.filter(Pe=>Pe.team==="AWAY").length,le=c==="AWAY";if(Oe<=5&&a<=5){const Pe=5-Oe,ye=5-a;if(te>xe+ye||xe>te+Pe){const ke=te>xe;Vt({team:"DONE",name:ke?"HOME_WIN":"AWAY_WIN",index:-1}),N(ke?`点球大战结束，我方 ${te} - ${xe} 胜出。`:`点球大战结束，对手 ${xe} - ${te} 胜出。`);return}}if(Oe>=5&&a>=5&&le&&te!==xe){const Pe=te>xe;Vt({team:"DONE",name:Pe?"HOME_WIN":"AWAY_WIN",index:-1}),N(Pe?`突然死亡分出胜负，我方 ${te} - ${xe} 胜出。`:`突然死亡分出胜负，对手 ${xe} - ${te} 胜出。`);return}if(c==="HOME"){const Pe=ao("AWAY",a),ye=qu(Pe,a);Ie(ye),_t([]),an(6.2),G.current=!1,pe("WAIT"),Vt({team:"AWAY",name:Pe.name,index:a}),Go("AWAY",Pe.name),N(`第 ${Un} 轮下半，${Pe.name} 主罚。阅读时间轴线索，选择守门策略。`)}else{const Pe=Oe,ye=Pe+1,ke=ao("HOME",Pe);sn(ye),fe("SAFE"),Ie(null),_t([]),an(null),Vt({team:"HOME",name:ke.name,index:Pe}),Go("HOME",ke.name),N(`第 ${ye} 轮，我方 ${ke.name} 主罚。先选策略，再用一次轻滑表达方向和力度。`)}Ve("idle"),ie(null)},3e3)};ce.useEffect(()=>{if(!Ne||Ne.team!=="AWAY"||!Ge||mn!=="idle")return;G.current=!1;const c=Date.now(),m=6200,T=Ne.name;_t(Ge.clues.filter(q=>q.time>=5.8)),an(6.2);const g=(q,j="NONE")=>{ai(te=>{if(!te)return te;const xe=Ke=>Ke.map(qe=>qe.name===T?{...qe,x:q,action:j,actionTimer:j==="SHOOT"?900:0}:qe);return{...te,home:xe(te.home),away:xe(te.away)}})},U=[window.setTimeout(()=>g(39.1),700),window.setTimeout(()=>g(39.8),2300),window.setTimeout(()=>g(40.45,"SHOOT"),5100)],W=window.setInterval(()=>{const q=Date.now()-c,j=Math.max(0,(m-q)/1e3);an(j);const te=q/1e3;_t(Ge.clues.filter(xe=>xe.time>=6-te-.18)),q>=m&&(window.clearInterval(W),G.current||xp(je.current||"WAIT"))},120);return()=>{window.clearInterval(W),U.forEach(q=>window.clearTimeout(q))}},[Ne==null?void 0:Ne.team,Ne==null?void 0:Ne.index,Ge==null?void 0:Ge.kickerId,mn]);const gp=c=>{var T,g;if(!Ne)return;if(Ne.team==="HOME"){const U=["L","C","R"][Math.floor(Math.random()*3)],W=L.home.find(xe=>xe.name===Ne.name)||L.home[Ne.index]||L.home[0];(T=W==null?void 0:W.attributes)!=null&&T.speed,(g=W==null?void 0:W.attributes)!=null&&g.shooting;let q=!1;if(c===U){const xe=.55+80/(W?W.overall:75)*.1;q=Math.random()>Math.min(.9,xe)}else{const xe=.08+Math.random()*.04;q=Math.random()>xe}const j=[...fi,{team:"HOME",kickerName:Ne.name,success:q,shootDir:c}],te=Fn.home+(q?1:0);X(xe=>({...xe,home:te})),jn(j),q?(Ve("goal"),N(`【进球！🏆】我方罚球手 [${Ne.name}] 冷静推射 ${c==="L"?"左侧死角":c==="R"?"右侧死角":"中路大门"}，对方守门员扑向 ${U==="L"?"左侧":U==="R"?"右侧":"中路"} 扑救不及，皮球直入网窝！`)):c===U?(Ve("save"),N(`【门神神扑！❌】我方罚球手 [${Ne.name}] 抽射 ${c==="L"?"左侧":c==="R"?"右侧":"中路"}，对方守门员完全看穿方位！飞身将皮球单掌托出！`)):(Ve("miss"),N(`【打偏了！💨】我方罚球手 [${Ne.name}] 承受巨大心理重压，一脚抽射擦着门柱滑出底线！射失了！`)),Oc("HOME",c,U,q),Vt(null),setTimeout(()=>{const xe=Un,Ke=xe,qe=xe-1,Oe=5-Ke,a=5-qe;if(te>Fn.away+a){Vt({team:"DONE",name:"HOME_WIN",index:-1}),N(`🏆 点球大战胜负已决！我方以 ${te} - ${Fn.away} 战胜对手，挺进世界杯下一关！英豪长存！`);return}if(Fn.away>te+Oe){Vt({team:"DONE",name:"AWAY_WIN",index:-1}),N(`❌ 世界杯征程结束！我方以 ${te} - ${Fn.away} 遗憾败于对手。挑战在此宣告落幕！`);return}const Pe=L.away.filter(ye=>ye.role!=="GK"&&!ye.sentOff&&!F.current.has(ye.id))[Ne.index]||L.away[Ne.index]||L.away[0];Vt({team:"AWAY",name:Pe.name,index:Ne.index}),Go("AWAY",Pe.name),N(`点球大战第 ${Un} 轮下半叶！由对手罚球核心 [${Pe.name}] 主罚。请选择我方门将的飞扑方向拦截！`),Ve("idle")},3500)}else{const U=["L","C","R"][Math.floor(Math.random()*3)];let W=!1;if(c===U){const te=.58+Math.random()*.12;W=Math.random()>te}else{const te=.08+Math.random()*.03;W=Math.random()>te}const q=[...fi,{team:"AWAY",kickerName:Ne.name,success:W,shootDir:U}],j=Fn.away+(W?1:0);X(te=>({...te,away:j})),jn(q),W?(Ve("goal"),N(`【丢球...⚽】对方罚球手 [${Ne.name}] 骗过我方防线，冷静推射 ${U==="L"?"左下角":U==="R"?"右下角":"球门中路"} 得分！`)):c===U?(Ve("save"),N(`【神迹！扑出了！！！🔥】对方主罚手 [${Ne.name}] 大力抽射 ${U==="L"?"左侧":U==="R"?"右侧":"中路"}，我方守门员完美压身，大掌将球拒之门外！看台沸腾！`)):(Ve("miss"),N(`【偏了！💨】对方罚球手 [${Ne.name}] 压力过载，拔脚怒射居然重重击中横梁弹回！门柱挽救了我方！`)),Oc("AWAY",U,c,W),Vt(null),setTimeout(()=>{const te=Un,xe=te,Ke=te,qe=5-xe,Oe=5-Ke;let a=!1,le=!1;if(te<5?Fn.home>j+Oe?(a=!0,le=!0):j>Fn.home+qe&&(a=!0,le=!1):Fn.home!==j&&(a=!0,le=Fn.home>j),a){Vt({team:"DONE",name:le?"HOME_WIN":"AWAY_WIN",index:-1}),N(le?`🏆 点球大战完美终结！我方以 ${Fn.home} - ${j} 正式赢下本次残酷鏖战！我们晋级啦！`:`❌ 世界杯饮恨落幕。对方 ${Fn.home} - ${j} 点球胜出。挑战在此告终。`);return}const Pe=te+1;sn(Pe);const ye=L.home.filter(jt=>jt.role!=="GK"&&!jt.sentOff&&!F.current.has(jt.id)),ke=Ne.index+1,pt=ye[ke]||L.home[ke]||L.home[0];Vt({team:"HOME",name:pt.name,index:ke}),Go("HOME",pt.name),N(`点球大战第 ${Pe} 轮！由我方第 ${ke+1} 顺位罚球手 [${pt.name}] 主罚，请点击角度主宰攻势！`),Ve("idle")},3500)}},it=ce.useRef(0),th=ce.useRef(1),Kt=ce.useMemo(()=>({get current(){const c=th.current;return c===1||c===3?1:2},set current(c){th.current=c}}),[]),bp=()=>Kt.current===1,Hs=c=>{const m=bp();return c==="HOME"?m?1:-1:m?-1:1},vp=c=>-Hs(c),Fc=(c,m=52.5)=>Hs(c)*m,gr=c=>Math.max(0,Math.min(1,c));ce.useEffect(()=>{Kt.current=Hi},[Hi]),ce.useEffect(()=>{je.current=oe},[oe]);const bl=ce.useRef(0),za=ce.useRef(!1),Aa=ce.useRef(0);ce.useEffect(()=>{bl.current=ft},[ft]);const nh=ce.useCallback(()=>{const c=L.ball.ownerId||L.ball.lastHolderId||L.action.sourceId;return c?L.home.some(m=>m.id===c)?"HOME":L.away.some(m=>m.id===c)?"AWAY":null:null},[L.action.sourceId,L.away,L.ball.lastHolderId,L.ball.ownerId,L.home]),ih=ce.useCallback((c,m,T)=>{if(ne!=="AUTO")return;const g=Date.now(),U=jt=>{const Be=gr(jt);Math.abs(Be-bl.current)>.02&&(bl.current=Be,at(Be))};if(L.phase==="KICKOFF"&&!w.show){za.current=!1,Aa.current=0,U(0);return}if(T||w.show&&L.phase==="KICKOFF"){za.current=!0,Aa.current=g+2200,U(1);return}if(m==="SHOOT"){za.current=!0,Aa.current=Math.max(Aa.current,g+1300),U(1);return}if(L.phase==="PENALTY"||L.phase==="CORNER"){za.current=!0,Aa.current=Math.max(Aa.current,g+900),U(.88);return}const q=nh(),j=q?Hs(q):L.ball.vx===0?c>=0?-1:1:L.ball.vx>=0?1:-1,te=c*j,xe=gr((te-30)/13),Ke=gr((te-18)/16),qe=1-gr(Math.abs(L.ball.z)/34),Oe=gr((L.ball.vx||0)*j/7),a=te>34&&Math.abs(L.ball.z)<24,le=(()=>{switch(L.phase){case"ATTACK":return 1;case"PROGRESSION":return .68;case"TRANSITION":return .58;case"BUILDUP":return .34;case"DEFENDING":case"PRESSING":return .24;default:return .4}})();let Pe=Ke*.32+xe*.33+qe*.14+le*.13+Oe*.08;a&&(Pe+=.09),m==="DRIBBLE"&&te>32&&(Pe+=.05),!q&&L.phase==="TRANSITION"&&(Pe+=.06),Math.abs(L.ball.z)<15&&te>38&&(Pe+=.08),Pe=gr(Pe);const ye=Pe>.62||a&&L.phase==="ATTACK",ke=Pe<.36&&te<35;!za.current&&ye?(za.current=!0,Aa.current=g+850):za.current&&ke&&g>=Aa.current&&(za.current=!1,Aa.current=g+260);let pt;za.current?(pt=.72+gr((Pe-.46)/.4)*.28,g<Aa.current&&(pt=Math.max(pt,.76))):(pt=gr((Pe-.18)/.4)*.42,(L.phase==="BUILDUP"||L.phase==="DEFENDING")&&(pt*=.65)),U(pt)},[ne,nh,w.show,L.ball.vx,L.ball.z,L.phase]);ce.useEffect(()=>{ne!=="AUTO"&&(rt(ne),za.current=!1,Aa.current=0,at(0),bl.current=0,mi.current&&(clearTimeout(mi.current),mi.current=null))},[ne]),ce.useEffect(()=>{if(!w.show)return;const c=L.score.home+L.score.away,m=L.phase==="CELEBRATE"||L.phase==="KICKOFF",T=w.scoreTotal!==null&&c>=w.scoreTotal;(!m||!T)&&(K({team:null,show:!1,scoreTotal:null}),oa.current=!1)},[w,L.phase,L.score.away,L.score.home]);const _p=ce.useRef("NONE"),sh=ce.useRef(0);ce.useEffect(()=>{if(ne!=="AUTO")return;const c=L.score.home+L.score.away,m=c>sh.current;ih(L.ball.x,L.action.type,m),_p.current=L.action.type,sh.current=c},[L.ball.x,L.action.type,L.score,ne,w.show,ih]);const Vo=["AUTO","TACTICAL","BROADCAST","STAR","FREE"];ce.useEffect(()=>{const c=m=>{m.key==="Alt"&&(m.preventDefault(),m.repeat||Tt(T=>!T)),m.key==="F1"&&(m.preventDefault(),J("TACTICAL")),m.key==="F2"&&(m.preventDefault(),J("BROADCAST")),m.key==="F3"&&(m.preventDefault(),J("STAR")),m.key==="F4"&&(m.preventDefault(),J("AUTO")),(m.key==="["||m.key==="]")&&(m.preventDefault(),J(T=>{const g=Vo.indexOf(T),U=m.key==="["?(g-1+Vo.length)%Vo.length:(g+1)%Vo.length;return Vo[U]}))};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[]),ce.useEffect(()=>{it.current=yi},[yi]),ce.useEffect(()=>{var m;if(!A.enabled)return;const c=Eh();if(c){if(c.lastSnapshot={phase:L.phase,minute:yi,score:{home:L.score.home,away:L.score.away},isSimulating:Gi,matchDone:Bt},Bt&&!((m=c.result)!=null&&m.done)){const T={HOME:L.score.home,AWAY:L.score.away},g={HOME:0,AWAY:0},U=C.current.filter(ye=>!ye.team||g[ye.team]>=T[ye.team]?!1:(g[ye.team]+=1,!0)).map(ye=>({playerName:ye.playerName,minutes:ye.minutes,assistBy:ye.assistBy,team:ye.team,isOwnGoal:ye.isOwnGoal,lastTouchType:ye.lastTouchType,lastHolder:ye.lastHolder,actionSource:ye.actionSource,actionType:ye.actionType,resolvingPhase:ye.resolvingPhase,ball:ye.ball})),W=U.reduce((ye,ke)=>(ke.playerName.includes("(OG)")&&ke.team&&(ye[ke.team]+=1),ye),{HOME:0,AWAY:0}),q=["openPlay","penalty","freeKick","corner","other"],j=U.reduce((ye,ke)=>(ye[zs(ke.lastTouchType)]+=1,ye),{openPlay:0,penalty:0,freeKick:0,corner:0,other:0}),te=U.reduce((ye,ke)=>(ke.team&&(ye[ke.team][zs(ke.lastTouchType)]+=1),ye),{HOME:{openPlay:0,penalty:0,freeKick:0,corner:0,other:0},AWAY:{openPlay:0,penalty:0,freeKick:0,corner:0,other:0}}),xe=k.current,Ke=q.reduce((ye,ke)=>(ye[ke]={...xe.bySource[ke],goals:j[ke]},ye),Do()),qe={HOME:q.reduce((ye,ke)=>(ye[ke]={...xe.byTeamSource.HOME[ke],goals:te.HOME[ke]},ye),Do()),AWAY:q.reduce((ye,ke)=>(ye[ke]={...xe.byTeamSource.AWAY[ke],goals:te.AWAY[ke]},ye),Do())},Oe={HOME:{...xe.shotOutcomes.HOME},AWAY:{...xe.shotOutcomes.AWAY}};["HOME","AWAY"].forEach(ye=>{const ke=ye==="HOME"?L.score.home:L.score.away,pt=xe.byTeam[ye].shots;Oe[ye].goal>ke&&(Oe[ye].unresolved+=Oe[ye].goal-ke,Oe[ye].goal=ke);const jt=Oe[ye].save+Oe[ye].blocked+Oe[ye].post+Oe[ye].out+Oe[ye].unresolved,Be=Math.max(0,pt-jt),ot=Math.max(0,Math.min(ke,Be)-Oe[ye].goal);ot>0&&(Oe[ye].goal+=ot);const St=Oe[ye].goal+Oe[ye].save+Oe[ye].blocked+Oe[ye].post+Oe[ye].out,It=Oe[ye].unresolved,$n=Math.max(0,pt-St-It);$n>0&&(Oe[ye].out+=$n);const ti=Math.max(0,pt-(St+$n));ti>It&&(xe.shotUnresolvedReasons[ye].matchEndGap+=ti-It),Oe[ye].unresolved=ti});const a={...xe,goals:L.score.home+L.score.away,ownGoalGoals:W.HOME+W.AWAY,bySource:Ke,byTeamSource:qe,shotOutcomes:Oe,shotUnresolvedReasons:xe.shotUnresolvedReasons,byTeam:{HOME:{...xe.byTeam.HOME,goals:L.score.home,ownGoalGoals:W.HOME},AWAY:{...xe.byTeam.AWAY,goals:L.score.away,ownGoalGoals:W.AWAY}}};V.current={...V.current,tacticalProfile:no(a,{home:L.score.home,away:L.score.away})};const le={done:!0,homeTeam:n.name,awayTeam:I||"Opponent",expectedHomeTeam:A.selectedCountry,expectedAwayTeam:A.opponentCountry,teamsOk:n.name===A.selectedCountry&&(!A.opponentCountry||I===A.opponentCountry),score:{home:L.score.home,away:L.score.away},minute:yi,goals:U,disciplineEvents:E.current.length,telemetry:a};c.result=le;const Pe=Op(A,le);Pe&&(c.batch=Pe.batch,Pe.shouldContinue&&Up(A,Pe.nextRunIndex))}Fp(c)}},[A.enabled,n.name,Gi,Bt,L.phase,L.score.away,L.score.home,yi,I]),ce.useEffect(()=>{if(!Gi||Bt||h||Ot)return;const c=setInterval(()=>{oi(m=>{var j,te,xe,Ke,qe;const T=performance.now(),g=i1(m.phase,(j=m.action)==null?void 0:j.type,!!m.ball.ownerId,rs.current),U=new Map;let W=[],q=null;try{let Oe=function(l,O){try{const Re=O.ball.ownerId||O.ball.lastHolderId,Me=pt.get(Re);if(!Me||l.sentOff)return;const be=l.team==="HOME"?zi.current:En.current,de=ip(l,Me)+Wr(be).lineFoulRisk;if(Math.random()>=de)return;const Qe=Kt.current===1||Kt.current===3,ct=l.team==="HOME"?Qe?l.x<-36&&Math.abs(l.z)<20:l.x>36&&Math.abs(l.z)<20:Qe?l.x>36&&Math.abs(l.z)<20:l.x<-36&&Math.abs(l.z)<20,se=ct?"PENALTY":"FREEKICK",Q=se==="PENALTY"?{x:l.team==="HOME"?Qe?-41:41:Qe?41:-41,z:0}:{x:O.ball.x,z:O.ball.z},At=l.team==="HOME"?"AWAY":"HOME",ze=sp(l,Me,le,ct),dn=it.current,Rn={x:Number(Q.x.toFixed(2)),z:Number(Q.z.toFixed(2))},Mn=se==="PENALTY"?"PENALTY_FOUL":"FOUL",Ut={minute:dn,team:l.team,playerId:l.id,playerName:l.name,type:Mn,severity:ze.severity,reason:ze.reason,location:Rn},Nn=[Ut];ei(l.team,"fouls"),l.team==="HOME"&&Ee.activeIds.includes("face_is_overrated")&&cs("face_is_overrated","backfire","脸都不要了：高压反抢变凶，同时犯规风险兑现","first-foul");let tn="INCIDENT",Tn="";if(ze.card==="YELLOW"||ze.card==="SECOND_YELLOW"){l.yellows+=1,D.current.set(l.id,l.yellows);const Pn=l.yellows>=2||ze.card==="SECOND_YELLOW"?"SECOND_YELLOW":"YELLOW";g.cardTriggered=!0,g.cardType=Pn==="SECOND_YELLOW"?"red":"yellow",Tn=Pn==="SECOND_YELLOW"?"第二张黄牌，两黄变一红！":"黄牌警告。",tn=Pn==="SECOND_YELLOW"?"RED":"YELLOW",Nn.push({...Ut,type:Pn,reason:`${ze.reason} / ${Tn}`}),Pn==="SECOND_YELLOW"&&(l.sentOff=!0,F.current.add(l.id))}else ze.card==="RED"?(l.sentOff=!0,F.current.add(l.id),g.cardTriggered=!0,g.cardType="red",Tn="直接红牌罚下！",tn="RED",Nn.push({...Ut,type:"RED",reason:`${ze.reason} / ${Tn}`})):ze.card==="WARNING"&&(Tn="裁判口头警告。");E.current=[...E.current,...Nn],O.disciplineEvents=[...O.disciplineEvents||[],...Nn],l.sentOff&&(l.vx=0,l.vz=0,l.action="NONE",l.actionTimer=0,l.task="RECOVER",O.ball.ownerId===l.id&&(O.ball.ownerId=null),O.ball.lastHolderId===l.id&&(O.ball.lastHolderId=null),Fs(Pn=>Pn.filter(qn=>qn.outgoingId!==l.id&&qn.incomingId!==l.id)),bn(Pn=>Pn===l.id?null:Pn),ri(Pn=>Pn===l.id?null:Pn),l.team==="HOME"&&da(Pn=>Ys(Pn,{mentality:"DEFENSIVE",pressing:Math.min(Pn.pressing,34),risk:Math.min(Pn.risk,35)})));const Gs=Ho(At,se,[...O.home,...O.away]);if(!Gs)return;O.phase="FOUL",ji(O.ball,"unresolved",void 0,{minute:it.current,phase:O.phase,scoreBefore:{home:O.score.home,away:O.score.away},scoreAfter:{home:O.score.home,away:O.score.away},unresolvedReason:"phaseReset"}),O.foulInfo={playerName:l.name,team:l.team,foulType:ze.label,severity:ze.severity,card:ze.card,reason:ze.reason},rs.current=tn==="RED"?34:ze.card==="YELLOW"||ze.card==="SECOND_YELLOW"?28:20,os.current=g.cardTriggered?"card":"foul",g.foulTriggered=!0,g.freezeReason=os.current,g.setPieceTriggered=!0,Ed("[PERF][freeze]",{reason:os.current,freezeTicks:rs.current,fouler:l.name,cardType:g.cardType}),O.setPiece={type:se,kickerId:Gs.id,pos:Q,distance:Math.sqrt(((At==="HOME"?52.5:-52.5)-Q.x)**2+Q.z**2)};const un=[...O.home,...O.away],ci=Pn=>Pn.map(qn=>(qn.resetTarget=io(qn,O.setPiece,At,un),se==="FREEKICK"&&qn.id===Gs.id?(qn.x=Q.x,qn.z=Q.z,qn.resetTarget=null,qn.resetDelay=0):qn.resetDelay=se==="FREEKICK"?Math.random()*80:Math.random()*250,qn.action="NONE",qn.vx=0,qn.vz=0,qn));O.home=ci(O.home),O.away=ci(O.away),O.possession=At,O.ball.ownerId=null,O.ball.vx=0,O.ball.vz=0,O.ball.y=0,O.ball.x=Q.x,O.ball.z=Q.z,O.ball.cooldown=1e4,O.action={type:"NONE",sourceId:null,targetId:null,timer:0},[...O.home,...O.away].forEach(Pn=>{Pn.action="NONE",Pn.actionTimer=0,Pn.vx=0,Pn.vz=0});const ni=l.team==="HOME"?n.name:e||"对手",Yn=se==="PENALTY"?"点球":"任意球",Ii=`${ni} ${l.name} ${ze.label}，严重度 ${ze.severity}。${Tn} ${At==="HOME"?n.name:e||"对手"} 获得${Yn}。`;O.events=[{id:Ye(tn==="RED"?"red":tn==="YELLOW"?"yellow":"foul"),min:dn,type:tn,team:l.team,cardPlayerName:l.name,cardReason:ze.reason,foulType:ze.label,description:Ii},...O.events].slice(0,50)}catch(Re){console.error("Error initiating foul:",Re)}};const a={...m};q=a,a.home=m.home.map(l=>({...l})),a.away=m.away.map(l=>({...l}));const le=[...a.home,...a.away];W=le,le.forEach(l=>{U.set(l.id,{x:l.x,z:l.z})});const Pe=l=>!l.sentOff&&!F.current.has(l.id),ye=l=>l,ke=()=>le.filter(Pe),pt=new Map;ke().forEach(l=>pt.set(l.id,l));const jt=l=>l.map(O=>{if(O.resetTarget){const Re=O.resetTarget.x-O.x,Me=O.resetTarget.z-O.z,be=Math.sqrt(Re*Re+Me*Me);if(be>.05){const de=Math.min(.55,be*.18);O.vx=Re/be*de,O.vz=Me/be*de,O.x+=O.vx,O.z+=O.vz}else O.x=O.resetTarget.x,O.z=O.resetTarget.z,O.vx=0,O.vz=0}else O.x+=O.vx,O.z+=O.vz,O.vx*=.86,O.vz*=.86;return O.action="NONE",O.actionTimer=0,O});a.ball={...m.ball},a.score={...m.score};const Be=(l,O=1,Re=a.ball.x,Me=a.ball.z,be=a.ball.y)=>{const de=Math.sqrt(a.ball.vx*a.ball.vx+a.ball.vz*a.ball.vz);a.ball.collisionEffect={id:`${l}-${it.current}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:l,x:Re,z:Me,y:be,intensity:_e(O||de/4,.25,1.8),dirX:a.ball.vx,dirZ:a.ball.vz}},ot=(l,O,Re=1)=>{l.impactEffect={id:`${O}-${l.id}-${it.current}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:O,intensity:_e(Re,.45,2)}},St=(l,O,Re=1,Me=a.ball.y)=>{a.ball.strikeEffect={id:`${l}-${O.id}-${it.current}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:l,shooterId:O.id,x:O.x,z:O.z,y:Me,intensity:_e(Re,.45,2),dirX:a.ball.vx,dirZ:a.ball.vz}};if(a.ball.ownerId){if(a.ball.lastHolderId&&a.ball.lastHolderId!==a.ball.ownerId){const l=pt.get(a.ball.lastHolderId),O=pt.get(a.ball.ownerId);l&&O&&l.team!==O.team&&(a.ball.lastAssisterId=null)}a.ball.lastHolderId=a.ball.ownerId}if(a.action&&a.action.sourceId&&(a.action.type==="PASS"?(a.ball.lastAssisterId=a.action.sourceId,a.ball.lastHolderId=a.action.sourceId):a.action.type==="SHOOT"&&(a.ball.lastHolderId=a.action.sourceId,(a.phase==="FREEKICK"||a.phase==="PENALTY")&&(a.ball.lastAssisterId=null))),a.phase==="CELEBRATE"){a.ball.x+=a.ball.vx,a.ball.z+=a.ball.vz,a.ball.y+=a.ball.vy;let l=a.ball.y>.1?.985:.88;a.ball.vx*=l,a.ball.vz*=l;const O=a.ball.x<-52.5&&Math.abs(a.ball.z)<6&&a.ball.y<2.44,Re=a.ball.x>52.5&&Math.abs(a.ball.z)<6&&a.ball.y<2.44;if(O||Re?(a.ball.vx*=.15,a.ball.vz*=.15,a.ball.vy*=.25,O?(a.ball.x<-54.2&&(a.ball.x=-54.2,a.ball.vx=Math.abs(a.ball.vx)*.05),a.ball.x>-52.6&&(a.ball.x=-52.6,a.ball.vx=-Math.abs(a.ball.vx)*.05)):(a.ball.x>54.2&&(a.ball.x=54.2,a.ball.vx=-Math.abs(a.ball.vx)*.05),a.ball.x<52.6&&(a.ball.x=52.6,a.ball.vx=Math.abs(a.ball.vx)*.05)),a.ball.z>5.8?(a.ball.z=5.8,a.ball.vz=-Math.abs(a.ball.vz)*.05):a.ball.z<-5.8&&(a.ball.z=-5.8,a.ball.vz=Math.abs(a.ball.vz)*.05),a.ball.y>2.4&&(a.ball.y=2.4,a.ball.vy=-Math.abs(a.ball.vy)*.05)):Math.abs(a.ball.z)<6&&(a.ball.x>53.5?(a.ball.x=53.5,a.ball.vx=0,a.ball.vz=0):a.ball.x<-53.5&&(a.ball.x=-53.5,a.ball.vx=0,a.ball.vz=0)),a.ball.y>0?a.ball.vy-=.05:(a.ball.y=0,a.ball.vy<-.1?(a.ball.vy=-a.ball.vy*.3,a.ball.vx*=.6,a.ball.vz*=.6):a.ball.vy=0),ke().forEach(Me=>{Me.vx*=.85,Me.vz*=.85,Me.x+=Me.vx,Me.z+=Me.vz,Me.action="NONE",Me.actionTimer=0}),a.prepareTimer>0)return a.prepareTimer-=50,a.home=ye(le.filter(Me=>Me.team==="HOME").map(Me=>Me)),a.away=ye(le.filter(Me=>Me.team==="AWAY").map(Me=>Me)),g.returnedEarlyReason="phase-celebrate",a;{const Me=Kt.current===1,be=a.ball.x>0?Me?"HOME":"AWAY":Me?"AWAY":"HOME",de=be==="HOME"?a.away:a.home,Qe=de.find(se=>se.role==="MID")||de[8];a.ball={x:0,z:0,y:0,vx:0,vz:0,vy:0,ownerId:Qe.id,lastHolderId:null,cooldown:2e3},a.possession=be==="HOME"?"AWAY":"HOME",a.phase="KICKOFF",a.action={type:"NONE",sourceId:null,targetId:null,timer:1500};const ct=se=>se.map(Q=>(Q.x=Q.baseX,Q.z=Q.baseZ,Q.vx=0,Q.vz=0,Q.id===Qe.id&&(Q.x=0,Q.z=0),Q));return a.home=ct(a.home),a.away=ct(a.away),K({team:null,show:!1,scoreTotal:null}),oa.current=!1,g.returnedEarlyReason="phase-celebrate",a}}if(a.phase==="FOUL"){if(rs.current>0)return rs.current-=1,g.returnedEarlyReason="freeze-foul",rs.current<=0&&(os.current=null),a.setPiece&&(a.ball.x=a.setPiece.pos.x,a.ball.z=a.setPiece.pos.z,a.ball.vx=0,a.ball.vz=0,a.ball.y=0),a.home=jt(a.home),a.away=jt(a.away),a.action.timer>0&&(a.action.timer-=50),a;{a.phase="PREPARE",a.foulInfo=null,a.prepareTimer=a.setPiece&&["FREEKICK","CORNER","PENALTY"].includes(a.setPiece.type)?250:1250;const l=O=>O.map(Re=>(Re.vx=0,Re.vz=0,Re.action="NONE",Re.actionTimer=0,Re));return a.home=l(a.home),a.away=l(a.away),g.returnedEarlyReason="phase-foul",a}}if(rs.current>0)return rs.current-=1,g.returnedEarlyReason=os.current==="shot"?"freeze-shot":os.current==="card"?"freeze-card":os.current==="foul"?"freeze-foul":"freeze-unknown",rs.current<=0&&(os.current=null),(g.returnedEarlyReason==="freeze-foul"||g.returnedEarlyReason==="freeze-card")&&(a.setPiece&&(a.ball.x=a.setPiece.pos.x,a.ball.z=a.setPiece.pos.z,a.ball.vx=0,a.ball.vz=0,a.ball.y=0),a.home=jt(a.home),a.away=jt(a.away)),a;if(a.phase==="PREPARE"){if(a.prepareTimer-=50,a.setPiece){const be=(te=a.setPiece)!=null&&te.kickerId?pt.get(a.setPiece.kickerId):void 0,de=a.setPiece.exitPos?a.setPiece.exitPos.x:a.setPiece.pos.x,Qe=a.setPiece.exitPos?a.setPiece.exitPos.z:a.setPiece.pos.z;a.setPiece.type==="THROWIN"?be?Math.sqrt((be.x-a.setPiece.pos.x)**2+(be.z-a.setPiece.pos.z)**2)<1.5?(a.ball.x=be.x,a.ball.z=be.z,a.ball.y=1.3):(a.ball.x=de,a.ball.z=Qe,a.ball.y=0):(a.ball.x=a.setPiece.pos.x,a.ball.z=a.setPiece.pos.z,a.ball.y=0):a.setPiece.type==="GOALKICK"?a.prepareTimer<1500?(a.ball.x=a.setPiece.pos.x,a.ball.z=a.setPiece.pos.z,a.ball.y=0):(a.ball.x=de,a.ball.z=Qe,a.ball.y=0):(a.setPiece.type==="CORNER"||a.setPiece.type==="FREEKICK"||a.setPiece.type,a.ball.x=a.setPiece.pos.x,a.ball.z=a.setPiece.pos.z,a.ball.y=0),a.ball.vx=0,a.ball.vz=0}let l=!0;const O=be=>be.map(de=>{var Q,At;if(!de.resetTarget)return de;if(a.setPiece&&["FREEKICK","CORNER","PENALTY"].includes(a.setPiece.type))return de.x=de.resetTarget.x,de.z=de.resetTarget.z,de.vx=0,de.vz=0,de.resetTarget=null,de.resetDelay=0,de;if(de.resetDelay>0)return de.resetDelay-=50,l=!1,de;const Qe=de.resetTarget.x-de.x,ct=de.resetTarget.z-de.z,se=Math.sqrt(Qe*Qe+ct*ct);if(se>1.2){l=!1;let ze=.08;((Q=a.setPiece)==null?void 0:Q.type)==="THROWIN"?de.id===a.setPiece.kickerId?se>15?ze=1.15:se>5?ze=.82:ze=.36:se>20?ze=.95:se>8?ze=.68:ze=.32:de.id===((At=a.setPiece)==null?void 0:At.kickerId)?se>15?ze=.78:se>5?ze=.48:ze=.18:se>20?ze=.62:se>8?ze=.42:ze=.18,de.vx=Qe/se*ze,de.vz=ct/se*ze,de.x+=de.vx,de.z+=de.vz}else de.x=de.resetTarget.x,de.z=de.resetTarget.z,de.vx=0,de.vz=0;return de});a.home=O(a.home),a.away=O(a.away);const Re=a.prepareTimer<=-900;return(!!a.setPiece&&["FREEKICK","CORNER","PENALTY"].includes(a.setPiece.type)&&a.prepareTimer<=0||a.prepareTimer<=0&&l||Re||!a.setPiece)&&(a.setPiece?(a.phase=a.setPiece.type,a.action.timer=["FREEKICK","CORNER","PENALTY"].includes(a.setPiece.type)?180:1e3):a.phase="BUILDUP",a.home.forEach(be=>be.resetTarget=null),a.away.forEach(be=>be.resetTarget=null)),g.returnedEarlyReason="phase-prepare",a}else{if(a.ball.cooldown>0&&(a.ball.cooldown-=50),a.action.timer>0){const l=a.ball.ownerId||(a.setPiece?a.setPiece.kickerId:null),O=l?pt.get(l):void 0,Re=O?ln(O,"awareness"):1;if(a.action.timer-=50*Re,a.setPiece&&["FREEKICK","CORNER","PENALTY"].includes(a.phase)){const Me=a.setPiece,be=pt.get(Me.kickerId);if(be&&(be.x=Me.pos.x,be.z=Me.type==="PENALTY"?0:Me.pos.z,be.vx=0,be.vz=0),a.ball.x=Me.pos.x,a.ball.z=Me.type==="PENALTY"?0:Me.pos.z,a.ball.y=0,a.ball.vx=0,a.ball.vz=0,a.ball.vy=0,a.home.forEach(de=>{de.vx=0,de.vz=0}),a.away.forEach(de=>{de.vx=0,de.vz=0}),a.action.timer>0)return g.returnedEarlyReason="phase-prepare",a}}if(a.phase==="KICKOFF"){const l=(a.possession==="HOME"?a.home:a.away).filter(Pe),O=(a.ball.ownerId?pt.get(a.ball.ownerId):void 0)||l.find(Re=>Re.role==="MID")||l.find(Re=>Re.role!=="GK")||l[0];if(O){if(O.x=0,O.z=0,O.vx=0,O.vz=0,a.ball.x=0,a.ball.z=0,a.ball.y=0,a.ball.vx=0,a.ball.vz=0,a.ball.vy=0,a.ball.ownerId=O.id,a.ball.lastHolderId=O.id,a.action.timer>0)return a.home.forEach(be=>{be.vx=0,be.vz=0}),a.away.forEach(be=>{be.vx=0,be.vz=0}),g.returnedEarlyReason="phase-prepare",a;const Re=Hs(O.team),Me=l.filter(be=>be.id!==O.id&&be.role!=="GK").sort((be,de)=>{const Qe=ct=>{const se=Math.sqrt((ct.x-O.x)**2+(ct.z-O.z)**2),Q=Math.max(0,16-Math.abs(ct.z)),At=18-Math.abs(se-13),ze=ct.x*Re<22?4:-8;return At+Q*.35+ze+(ct.role==="MID"?4:0)};return Qe(de)-Qe(be)})[0];if(Me){const be=Me.x,de=Math.abs(Me.z)<1?Me.z+(Math.random()<.5?4.5:-4.5):Me.z,Qe=be-O.x,ct=de-O.z,se=Math.sqrt(Qe*Qe+ct*ct)||1;a.action={type:"PASS",sourceId:O.id,targetId:Me.id,timer:420},O.action="PASS",O.actionTimer=520,a.ball.lastTouchType="PASS",a.ball.ownerId=null,a.ball.cooldown=260,Js(a.ball,O.x,O.z,be,de,0,.85,Math.min(3.2,Math.max(2.15,se*.16))),Ai(O.team,se,de,!1),Qn(a,O.team,"pass",wn(O,Me,se,!1,"safe"),2)}else a.action={type:"NONE",sourceId:O.id,targetId:null,timer:250},a.ball.cooldown=250;a.phase="BUILDUP"}else a.phase="BUILDUP",a.ball.ownerId=null,a.action={type:"NONE",sourceId:null,targetId:null,timer:0}}if(a.setPiece&&a.action.timer<=0&&["CORNER","PENALTY","FREEKICK","GOALKICK","THROWIN"].includes(a.phase)){const l=a.setPiece,O=pt.get(l.kickerId)||ke().find(Re=>Re.team===a.possession&&Re.role!=="GK")||ke().find(Re=>Re.team===a.possession);if(O){if(a.ball.lastHolderId=O.id,O.x=l.pos.x,O.z=l.type==="PENALTY"?0:l.pos.z,O.vx=0,O.vz=0,a.phase==="PENALTY"){const Re=(a.possession==="HOME"?a.away:a.home).find(Tn=>Tn.role==="GK"),Me=Math.random()<.33?"LEFT":Math.random()<.5?"CENTER":"RIGHT",be=Math.random()<.33?"LEFT":Math.random()<.5?"CENTER":"RIGHT",de=Kt.current===1,Qe=O.team==="HOME"?de?1:-1:de?-1:1,ct=Kf(O.team,ec(a.home),ec(a.away)),se=_e((ct-.75)/.5,0,1),Q=ln(O,"penalty"),At=ln(O,"shooting"),ze=ln(Re,"awareness"),dn=O.team==="HOME"?Ee.setPiecePenaltyBonus:0,Rn=_e(.075-(Q-.82)*.1-se*.025-dn*.12,.015,.13),Mn=Me===be?_e(.31+ze*.08-Q*.13-At*.05-se*.05-dn*.18,.1,.36):_e(.035+ze*.018-se*.015-dn*.06,.01,.07);dn>0&&Ta("点球训练生效，踢飞率与被扑率下降",`set-piece-penalty-${it.current}`);const Ut=Math.random()<Rn,Nn=!Ut&&Math.random()<Mn,tn=!Ut&&!Nn;if(fa(O.team,l.distance,O.z,!Ut,"penalty"),Rs(a.ball,O.team,!Ut,"penalty"),tn){const Tn=Qe*53;a.ball.vx=Qe*6,a.ball.vz=Me==="LEFT"?-2:Me==="RIGHT"?2:0,a.ball.vy=.15+Math.random()*.28,a.ball.ownerId=null,a.ball.lastTouchType="PENALTY",a.ball.cooldown=100}else a.ball.vx=Nn?-Qe*(2.1+Math.random()*.7):Qe*4,a.ball.vz=Ut?Me==="LEFT"?-6.2:Me==="RIGHT"?6.2:(Math.random()-.5)*2.8:Me==="LEFT"?-2.4:Me==="RIGHT"?2.4:(Math.random()-.5)*1.2,a.ball.vy=Ut?.45+Math.random()*.55:.12+Math.random()*.22,a.ball.ownerId=null,a.ball.lastTouchType="PENALTY",a.ball.cooldown=500,Nn&&(Re.action="SAVE",Re.actionTimer=900,a.ball.lastHolderId=Re.id);St("penalty",O,1.25),a.action={type:"SHOOT",sourceId:O.id,targetId:null,timer:1e3}}else if(a.phase==="CORNER"||a.phase==="FREEKICK"){let Re="CROSS";const Me=l.distance,be=(O.team==="HOME"?a.home:a.away).filter(ct=>ct.id!==O.id),de=Kt.current===1,Qe=O.team==="HOME"?de?52.5:-52.5:de?-52.5:52.5;if(a.phase==="FREEKICK"){const ct=O.team==="HOME"?de?1:-1:de?-1:1;O.x*ct<0?Re=Math.random()<.4?"SHORT_PASS":"CROSS":Me<26?Re=O.attributes.shooting>.6||Math.random()<.85?"DIRECT_SHOT":"SHORT_PASS":Me<35?Re=O.attributes.shooting>.8&&Math.random()<.4?"DIRECT_SHOT":"CROSS":Re=Math.random()<.35?"SHORT_PASS":"CROSS"}else Re="CROSS";if(Re==="DIRECT_SHOT"){const ct=Qe-O.x,se=Math.random()<.5?-1:1,Q=O.team==="HOME"?Ee.setPieceShotBonus:0,At=1-Q*2.4,ze=se*(2.2+Math.random()*4.8*At)-O.z,Rn=(3.8+ln(O,"shooting")*1.25)*(1-Math.max(0,Me-16)*.007)+Math.random()*.35,Mn=ln(O,"shooting")*.7+ln(O,"passing")*.3,Ut=Math.random()<_e(.48+Mn*.42+Q,.08,.96);Q>0&&Ta(`任意球射门准度 +${Math.round(Q*100)}%`,`set-piece-shot-${it.current}`),fa(O.team,Me,O.z,Ut,"freeKick"),Rs(a.ball,O.team,Ut,"freeKick");const Nn=Ut?.65+Math.random()*1.35:2.6+Math.random()*1.4,tn=Math.max(Nn+.55,2.45+Math.random()*.9);Js(a.ball,O.x,O.z,Qe,O.z+ze,Nn,tn,Rn),St("freeKick",O,Rn/3.6),a.ball.ownerId=null,a.ball.lastTouchType="FREEKICK",a.ball.cooldown=1e3,a.action={type:"SHOOT",sourceId:O.id,targetId:null,timer:1e3},a.events=[{id:Ye("fks"),min:it.current,type:"INCIDENT",team:O.team,description:`${O.name} 主罚任意球直接射门！`},...a.events].slice(0,50)}else if(Re==="CROSS"){const ct=Kt.current===1,se=O.team==="HOME"?ct?42:-42:ct?-42:42,Q=O.team==="HOME"?Ee.setPiecePassAccuracyBonus:0,At=22*(1-Q*.55),ze=(Math.random()-.5)*At,dn=2.6+ln(O,"passing")*1.1+Q*.25,Rn=1.35+Math.random()*(.7-Q*.35),Mn=Math.max(Rn+.5,2.7+Math.random()*(.8-Q*.3));Q>0&&Ta(`角球/任意球落点稳定 +${Math.round(Q*100)}%`,`set-piece-cross-${it.current}`),Js(a.ball,O.x,O.z,se,ze,Rn,Mn,dn),a.ball.ownerId=null,a.ball.lastTouchType=a.phase==="CORNER"?"CORNER":"FREEKICK",a.ball.cooldown=1500,a.action={type:"PASS",sourceId:O.id,targetId:null,timer:1e3},a.events=[{id:Ye("cross"),min:it.current,type:"INCIDENT",team:O.team,description:a.phase==="CORNER"?"角球开入禁区，寻找接应队员！":"任意球吊向禁区，引发门前混乱。"},...a.events].slice(0,50)}else{const ct=Hs(O.team),se=be.filter(Mn=>(Mn.x-O.x)*ct>=-2),Q=(se.length>0?se:be).sort((Mn,Ut)=>{const Nn=(Mn.x-O.x)**2+(Mn.z-O.z)**2,tn=(Ut.x-O.x)**2+(Ut.z-O.z)**2;return Nn-tn})[0],At=Q.x-O.x,ze=Q.z-O.z,dn=Math.sqrt(At*At+ze*ze)||1,Rn=O.team==="HOME"?Ee.setPiecePassAccuracyBonus:0;a.ball.vx=At/dn*(3.8+Rn*.35),a.ball.vz=ze/dn*(3.8+Rn*.35),a.ball.vy=0,Rn>0&&Ta("任意球短配合出球更稳",`set-piece-short-pass-${it.current}`),a.ball.ownerId=null,a.ball.lastTouchType="FREEKICK",a.ball.cooldown=1500,a.action={type:"PASS",sourceId:O.id,targetId:Q.id,timer:1e3},a.events=[{id:Ye("pass"),min:it.current,type:"INCIDENT",team:O.team,description:"任意球战术配合：短传寻找接应。"},...a.events].slice(0,50)}}else if(a.phase==="GOALKICK"){const Re=vp(O.team)*10,Me=(Math.random()-.5)*36-O.z,be=3.2+Math.random()*.5,de=0,Qe=3.8+Math.random()*1.2;Js(a.ball,O.x,O.z,Re,O.z+Me,de,Qe,be),a.ball.ownerId=null,a.ball.cooldown=1e3}else if(a.phase==="THROWIN"){const Re=(O.team==="HOME"?a.home:a.away).filter(ze=>ze.id!==O.id),Me=Hs(O.team),be=Re.sort((ze,dn)=>{const Rn=Math.sqrt((ze.x-O.x)**2+(ze.z-O.z)**2)+((ze.x-O.x)*Me<-3?30:0),Mn=Math.sqrt((dn.x-O.x)**2+(dn.z-O.z)**2)+((dn.x-O.x)*Me<-3?30:0);return Rn-Mn})[0];a.ball.x=O.x,a.ball.z=O.z,a.ball.y=1.3,O.action="PASS",O.actionTimer=1e3;const de=be.x-O.x,Qe=be.z-O.z,ct=Math.sqrt(de*de+Qe*Qe)||1,se=Math.min(1.8,Math.max(.7,Math.sqrt(ct)*.3+.25)),Q=.4+Math.random()*.5,At=1.5+Math.random()*.3;Js(a.ball,O.x,O.z,be.x,be.z,Q,At,se),a.ball.isThrown=!0,a.ball.lastTouchType="THROWIN",a.ball.ownerId=null,a.ball.cooldown=1500,a.action={type:"PASS",sourceId:O.id,targetId:be.id,timer:1e3},a.events=[{id:Ye("throw"),min:it.current,type:"INCIDENT",team:O.team,description:"完成边线球投掷。"},...a.events].slice(0,50)}}a.setPiece=null,a.phase="BUILDUP"}}a.home.forEach(l=>{l.actionTimer>0?l.actionTimer-=50:l.action="NONE",(l.tackleCooldown||0)>0&&(l.tackleCooldown=Math.max(0,(l.tackleCooldown||0)-50),l.tackleCooldown===0&&(l.tackleTargetId=null))}),a.away.forEach(l=>{l.actionTimer>0?l.actionTimer-=50:l.action="NONE",(l.tackleCooldown||0)>0&&(l.tackleCooldown=Math.max(0,(l.tackleCooldown||0)-50),l.tackleCooldown===0&&(l.tackleTargetId=null))});const It=(l,O)=>{const Re=l==="HOME"?a.home:a.away,Me=[];return Re.forEach(be=>{if(be.role==="GK")return;const de=(be.x-a.ball.x)**2+(be.z-a.ball.z)**2;for(let Qe=0;Qe<O;Qe++)if(!Me[Qe]||de<Me[Qe].distSq){Me.splice(Qe,0,{id:be.id,distSq:de}),Me.length>O&&Me.pop();break}}),Me.map(be=>be.id)},$n=It("HOME",2),ti=It("AWAY",2),Le=ec(a.home),Ri=ec(a.away),ys=l=>Kf(l,Le,Ri),er=l=>{const O=ys(l),Re=l==="HOME"?a.score.home-a.score.away:a.score.away-a.score.home,Me=_e((O-.5)/.65,0,1),be=_e(Re/4,0,1)*.28,de=_e((it.current-50)/40,0,1)*.18;return _e(Me*(.78+be+de),0,1.2)},Ba=new Map;ke().forEach(l=>{Ba.set(l.id,Math.sqrt((l.x-a.ball.x)**2+(l.z-a.ball.z)**2))}),g.nearbyBallCount=ke().filter(l=>(Ba.get(l.id)||999)<8).length;const zc=(l,O,Re,Me,be,de=1,Qe)=>{const ct=Math.abs(Me)<16&&Math.abs(Re)>24;for(const se of be){const Q=Re-l,At=Me-O,ze=Q*Q+At*At;if(ze===0)continue;const dn=Math.max(0,Math.min(1,((se.x-l)*Q+(se.z-O)*At)/ze)),Rn=l+dn*Q,Mn=O+dn*At,Ut=(se.x-Rn)**2+(se.z-Mn)**2;let Nn=(3.5+Math.sin(dn*Math.PI)*3.5)/de;if(Qe&&(Nn*=1+Qe.interceptionChance*.28,ct&&(Nn*=1+Qe.boxProtection*.22)),Ut<Nn)return!1}return!0},li=a.blackboard;li.ballOwner=a.ball.ownerId,li.possessionTeam=a.possession,li.ballPos={x:a.ball.x,z:a.ball.z};const pa=a.ball.x,tr=a.ball.z;li.attackSide=Math.abs(tr)>15?tr>0?"RIGHT":"LEFT":"CENTER";const oo=[];if(a.phase==="FREEKICK"&&a.setPiece){const l=a.setPiece.pos.x,O=a.setPiece.pos.z,Me=(a.possession==="HOME"?"AWAY":"HOME")==="HOME"?a.home:a.away;oo.push(...Me.filter(be=>be.role!=="GK").sort((be,de)=>{const Qe=(be.x-l)**2+(be.z-O)**2,ct=(de.x-l)**2+(de.z-O)**2;return Qe-ct}).slice(0,4).map(be=>be.id))}const lo=new Set(oo);if(["KICKOFF","PREPARE","FOUL","CORNER","FREEKICK","PENALTY","GOALKICK","THROWIN"].includes(a.phase))li.matchPhase=a.phase,a.phase==="KICKOFF"&&a.action.timer<=0&&(li.matchPhase="BUILDUP"),a.phase==="GOALKICK"&&(!a.ball.ownerId||a.ball.cooldown<=0)&&(li.matchPhase="BUILDUP"),a.phase==="THROWIN"&&a.action.timer<=0&&a.ball.ownerId&&(li.matchPhase="BUILDUP"),["CORNER","FREEKICK","PENALTY","GOALKICK","THROWIN"].includes(a.phase)&&!a.setPiece&&(li.matchPhase="BUILDUP");else if(a.ball.ownerId){const O=a.possession==="HOME"?pa:-pa;O<-20?li.matchPhase="BUILDUP":O<20?li.matchPhase="PROGRESSION":li.matchPhase="ATTACK"}else li.matchPhase="TRANSITION";a.phase=li.matchPhase;const gh=l=>{var Ra,Ws,br,ea;const O=l==="HOME"?a.home:a.away,Re=l==="HOME"?a.away:a.home,Me=l==="HOME"?zi.current:En.current,be=l===a.possession,de=!a.ball.ownerId,Qe=li.matchPhase,ct=Math.abs(li.ballPos.x)>Ql||Math.abs(li.ballPos.z)>34.8,se=ys(l),Q=er(l),At=Wr(Me),ze=At.pressRadius+se*4.5,dn=At.secondPressRadius+se*2.5,Rn=At.markRadius+se*3,Mn=O.filter(Ae=>Ae.role!=="GK"),Ut=a.ball.ownerId?pt.get(a.ball.ownerId):void 0,Nn=Hs(l),tn=Fc(l,53),Tn=Mn.filter(Ae=>Ae.id!==a.ball.ownerId),Gs=Me.buildUpStyle==="POSSESSION"?3:2,un=be&&Ut&&!de?new Set([...Tn].sort((Ae,hn)=>{const Qt=Di=>{const Li=Math.hypot(Di.x-Ut.x,Di.z-Ut.z),hs=Di.role==="MID"?-5:Di.role==="FWD"?-2:2,es=Math.abs(Di.z-Ut.z)<3?4:0;return Li+hs+es};return Qt(Ae)-Qt(hn)}).slice(0,Gs).map(Ae=>Ae.id)):new Set,ci=be&&Ut&&!de?new Set([...Tn].filter(Ae=>!un.has(Ae.id)&&(Ae.role==="FWD"||Ae.role==="MID")).sort((Ae,hn)=>{const Qt=Di=>{const Li=(Di.x-Ut.x)*Nn,hs=Di.role==="FWD"?10:5,es=Math.abs(Math.abs(Di.baseZ)-9),xa=Math.abs(tn-Di.x),fs=Re.filter(Na=>(Na.x-Di.x)**2+(Na.z-Di.z)**2<144).length;return hs+_e(Li,-8,22)*.55-es*.55-xa*.08-fs*4};return Qt(hn)-Qt(Ae)}).slice(0,Me.mentality==="ATTACKING"?3:2).map(Ae=>Ae.id)):new Set,ni=l==="HOME"?Kt.current===1?-1:1:Kt.current===1?1:-1,Yn=ni*52.5,Ii=pa*ni>18,Pn=pa*ni>21&&Math.abs(tr)<22,qn=a.ball.ownerId?pt.get(a.ball.ownerId):void 0,Qs=[...Mn].sort((Ae,hn)=>(Ba.get(Ae.id)||999)-(Ba.get(hn.id)||999)),Vs=!be&&!de?(Ra=Qs[0])==null?void 0:Ra.id:null,ds=!be&&!de&&(((Ws=Qs.find(Ae=>Ae.id!==Vs&&(Ae.role==="MID"||Ae.role==="DEF")))==null?void 0:Ws.id)||((br=Qs[1])==null?void 0:br.id))||null,us=!be&&!de&&Pn&&((ea=[...Mn].filter(Ae=>Ae.id!==Vs&&Ae.id!==ds&&(Ae.role==="MID"||Ae.role==="DEF")).sort((Ae,hn)=>{const Qt=Ae.role==="MID"?0:6,Di=hn.role==="MID"?0:6,Li=Math.abs(Ae.z)+Math.abs(Ae.baseZ)*.35,hs=Math.abs(hn.z)+Math.abs(hn.baseZ)*.35;return Qt+Li-(Di+hs)})[0])==null?void 0:ea.id)||null,Ns=!be&&!de&&Ii?new Set([...Mn].filter(Ae=>Ae.role==="DEF"&&Ae.id!==Vs).sort((Ae,hn)=>Math.abs(Ae.baseZ)-Math.abs(hn.baseZ)).slice(0,2).map(Ae=>Ae.id)):new Set,Ps=!be&&!de?new Set([...Mn].filter(Ae=>Ae.role==="DEF"||Ae.role==="MID").sort((Ae,hn)=>{const Qt=Di=>Re.filter(hs=>hs.role!=="GK"&&hs.id!==(qn==null?void 0:qn.id)).reduce((hs,es)=>{const xa=(es.x-pa)*-ni,fs=Math.max(0,18-Math.abs(es.z)),Na=(es.x-Di.x)**2+(es.z-Di.z)**2;return Math.min(hs,Na-xa*8-fs*5)},9999);return Qt(Ae)-Qt(hn)}).slice(0,Ii?2:1).map(Ae=>Ae.id)):new Set;O.forEach(Ae=>{const hn=Ba.get(Ae.id)||.1,Qt=(l==="HOME"?$n:ti).includes(Ae.id),Di=Ae.id===(l==="HOME"?$n[0]:ti[0]),Li=a.setPiece&&Ae.id===a.setPiece.kickerId,hs=lo.has(Ae.id);if(ct)Ae.task=Ae.role==="GK"?"GK_COVER":"RECOVER";else if(Ae.role==="GK")if(a.ball.ownerId===Ae.id)Ae.task="HOLD_BALL";else{const es=Kt.current===1,xa=Ae.team==="HOME"?es?pa<-32&&Math.abs(tr)<20:pa>32&&Math.abs(tr)<20:es?pa>32&&Math.abs(tr)<20:pa<-32&&Math.abs(tr)<20,fs=["FREEKICK","THROWIN","CORNER","PENALTY","GOALKICK","KICKOFF","PREPARE","FOUL"].includes(a.phase);xa&&!fs&&(de||!be&&hn<10)?Ae.task="PRESS":Ae.task="GK_COVER"}else if((a.phase==="FREEKICK"||a.phase==="THROWIN")&&a.setPiece)Li?Ae.task="HOLD_BALL":a.phase==="FREEKICK"&&hs?Ae.task="PRESS":be?Ae.task="SUPPORT":Ae.task="MARK";else if(de)Di?Ae.task="PRESS":Qt||hn<16?Ae.task="MARK":Ae.task="RECOVER";else if(be&&!de)if(Ae.id===a.ball.ownerId)Ae.task="HOLD_BALL";else{if(un.has(Ae.id)){Ae.task="SHOW_FOR_PASS";return}if(ci.has(Ae.id)){Ae.task="ATTACK_SPACE";return}if(Ae.role==="FWD")Q>.45?Ae.task=Math.random()<_e(.78+Q*.14,.78,.96)?"CUT_INSIDE":"FORWARD_RUN":Me.attackFocus==="WIDE"&&Math.abs(Ae.baseZ)>8?Ae.task=Math.random()<_e(.7+se*.1,.45,.9)?"WIDE_RUN":"FORWARD_RUN":Me.attackFocus==="CENTRAL"?Ae.task=Math.random()<_e(.7+se*.1,.45,.9)?"CUT_INSIDE":"FORWARD_RUN":Ae.task=Math.random()<_e(.75+se*.12,.45,.94)?"FORWARD_RUN":"CUT_INSIDE";else if(Ae.role==="MID")if(O.filter(fs=>fs.role==="MID"&&fs.id!==a.ball.ownerId).sort((fs,Na)=>(Ba.get(fs.id)||0)-(Ba.get(Na.id)||0)).slice(0,2).some(fs=>fs.id===Ae.id)&&hn<20)Ae.task="SUPPORT";else{const fs=_e(Me.risk/180+se*.1+Q*.22,.08,.78);Ae.task=Math.random()<fs?"FORWARD_RUN":"PROTECT"}else Ae.role==="DEF"?Math.abs(Ae.baseZ)>22&&hn<24+se*5+Q*8&&Math.sign(Ae.baseZ)===Math.sign(li.ballPos.z)&&(Me.attackFocus==="WIDE"||Q>.55)?Ae.task="OVERLAP":Ae.task="PROTECT":Ae.task="RECOVER"}else Ae.id===Vs&&hn<ze+(Ii?5:0)?Ae.task="PRESS":Ae.id===ds&&hn<dn+(Pn?9:4)?Ae.task="SECOND_PRESS":Ae.id===us?Ae.task="SCREEN_ARC":Ns.has(Ae.id)?Ae.task="COVER_DEPTH":Ps.has(Ae.id)&&hn<Rn+10?Ae.task="TRACK_RUN":hn<Rn?Ae.task="MARK":Qe==="ATTACK"?Ae.task="COVER_SPACE":Ae.task="RECOVER"})};if(gh("HOME"),gh("AWAY"),a.action.timer<=0)if(a.ball.ownerId){const l=pt.get(a.ball.ownerId);if(l){const O=Kt.current===1,Re=l.team==="HOME"?a.away:a.home,Me=Re.filter(Se=>(Se.x-l.x)**2+(Se.z-l.z)**2<36).length,be=Re.filter(Se=>(Se.x-l.x)**2+(Se.z-l.z)**2<225).length,de=Fc(l.team,53),Qe=Math.sqrt((de-l.x)**2+(0-l.z)**2),ct=Math.abs(Math.atan2(Math.abs(l.z),Math.abs(de-l.x))),se=Hs(l.team),Q=ln(l,"shooting"),At=l.team==="HOME"?a.home:a.away,ze=l.team==="HOME"?zi.current:En.current,dn=ze.buildUpStyle,Rn=ze.passingLength,Mn=ze.mentality,Ut=ys(l.team),Nn=_e((Ut-.45)/.7,0,1),tn=er(l.team),Tn=_e((Math.min(Le,Ri)-82)/6,0,1)*(1-_e(Math.abs(Le-Ri)/5,0,1)),Gs=l.team==="HOME"?En.current:zi.current,un=ys(l.team==="HOME"?"AWAY":"HOME"),ci=Wr(Gs,{closePressure:Me,qualityEdge:un}),ni=Wr(ze,{closePressure:Me,qualityEdge:Ut}),Yn=ni.riskFactor,Ii=ni.passErrorMultiplier*(l.team==="HOME"?1-Ee.passErrorRelief:1),Pn=ni.killerPassChance,qn=ni.lobChance,Qs=ni.maxPassDistSq,Vs=ni.minPassDistSq,ds=performance.now();g.passDecision=!0;const us=At.filter(Se=>{if(Se.id===l.id)return!1;const Ht=(Se.x-l.x)**2+(Se.z-l.z)**2;return Ht>=Vs&&Ht<Qs});g.passOptions=us.length;const Ns=us.filter(Se=>zc(l.x,l.z,Se.x,Se.z,Re,l.attributes.passing,ci));g.safeOptions=Ns.length;const Ps=Ns.length===0&&Me>1?us.filter(Se=>{const Ht=Se.x-l.x,en=Se.z-l.z,nn=Ht*Ht+en*en;return!Re.some(Mt=>{const Gt=Math.max(0,Math.min(1,((Mt.x-l.x)*Ht+(Mt.z-l.z)*en)/nn)),on=(Mt.x-(l.x+Gt*Ht))**2+(Mt.z-(l.z+Gt*en))**2,ii=2*(1+ci.interceptionChance*.22);return on<ii})}):Ns,Ra=O,Ws=l.team==="HOME"?Ra:!Ra,br=us.filter(Se=>Ws?Se.x>l.x+2:Se.x<l.x-2),ea=Ps.filter(Se=>br.includes(Se)),Ae=ea.find(Se=>Math.abs(Se.z)<12&&Math.abs(de-Se.x)<22),hn=Ws?l.x>25:l.x<-25,Qt=Ws?l.x>36&&Math.abs(l.z)<20:l.x<-36&&Math.abs(l.z)<20,Di=Ws?l.x>46&&Math.abs(l.z)<10:l.x<-46&&Math.abs(l.z)<10,Li=x1({holderX:l.x,holderZ:l.z,opponentGoalX:de,attackingDir:se,opponents:Re,inPenaltyBox:Qt,effectiveShooting:Q,teamQualityEdge:Ut}),hs=Se=>!Se||Se.role==="GK"?!1:Math.abs(de-Se.x)<28&&Math.abs(Se.z)<20,es=Se=>{if(!Se||Se.role==="GK")return!1;const Ht=Ws?Se.x-l.x:l.x-Se.x,en=Ws?de-Se.x:Se.x-de,nn=ci.behindSpaceRisk*8;return Ht>10-nn*.35&&en<22+nn&&Math.abs(Se.z)<18},xa=Se=>es(Se)?_e(1+ci.boxProtection*.42-ci.throughBallVulnerability*.28-ci.behindSpaceRisk*.16,.74,1.34):1,fs=Se=>{const Ht=Math.sqrt((de-Se.x)**2+Se.z**2),en=Math.abs(Math.atan2(Math.abs(Se.z),Math.abs(de-Se.x))),nn=Math.max(0,1-Ht/70)*.7,Mt=Math.max(0,1-en/1)*.4,Gt=Re.filter(Hn=>(Hn.x-Se.x)**2+(Hn.z-Se.z)**2<100).length,on=Math.max(0,1-Gt*.3)*.3,ii=Se.role==="FWD"?.2:Se.role==="MID"?.1:0,Yi=Ws?Se.x-l.x:l.x-Se.x,Jn=Math.max(-.5,Math.min(1,Yi/30))*.4;let _i=0;if(l.team==="HOME"){const Hn=ze.attackFocus;Hn==="WIDE"?Math.abs(Se.z)>15&&(_i=(.4+Ee.wideAttackBonus)*Se.attributes.awareness):Hn==="CENTRAL"&&Math.abs(Se.z)<13&&(_i=.4*Se.attributes.awareness)}return(nn+Mt+on+ii+Jn+_i)*Se.attributes.awareness},Na=fs(l),Dt=Ps.map(Se=>({player:Se,score:fs(Se)})).sort((Se,Ht)=>Ht.score-Se.score),cn=performance.now()-ds;Po("passDecision",cn,{passOptions:g.passOptions,safeOptions:g.safeOptions,phase:a.phase,pressure:be,closePressure:Me}),cn>8&&_c("[PERF][pass decision]",{passMs:Number(cn.toFixed(2)),passOptions:g.passOptions,safeOptions:g.safeOptions,phase:a.phase,pressure:be,closePressure:Me});const qt=Dt[0],De=((xe=Dt.find(Se=>ea.includes(Se.player)&&hs(Se.player)))==null?void 0:xe.player)||Ae;let Dn=Me>0?.02:.06;Di?Dn=.5:Qt?Dn=.35:hn&&(Dn=.2);let kt=.95;dn==="POSSESSION"?kt=1:dn==="DRIBBLE"&&(kt=.5),kt=ni.passToBetterChance,Di?kt=.05:Qt?kt*=.35:hn&&(kt*=.6),Li.passSuppression>0&&(kt*=1-Li.passSuppression),kt=_e(kt+Ut*.12,.12,1),Nn>0&&(Qt||hn)&&(kt=_e(kt-Nn*(Qt?.28:.16),.05,1)),tn>0&&(Qt||hn)&&(kt=_e(kt-tn*(Qt?.18:.1),.04,1)),Tn>0&&(Qt||hn)&&(kt=_e(kt-Tn*(Qt?.16:.08),.04,1));const Ei=qt&&qt.score>Na+Dn&&Math.random()<kt,Oi=Re.some(Se=>(Se.x-l.x)*se>0&&Math.abs(Se.z-l.z)<8&&Math.abs(Se.x-l.x)<12),_n=Math.max(0,1-Qe/35),ms=Math.max(0,1-ct/1),$i=(Q-1)*.75+Ut*.08,mt=_n*ms+$i,Pt=Math.max(mt,Li.arcShotQuality),wt=(Se,Ht)=>{const en=Math.sqrt(Se)*.45+.8;return Math.min(4.5,en*(Ht==="KILLER"?1.2:Ht==="SAFE"?.9:1))};let Ze=Math.pow(Pt,1.2)*1.2;Mn==="ATTACKING"?Ze*=1.45:Mn==="DEFENSIVE"&&(Ze*=.7),Ze*=ni.shootRiskMultiplier;const Zt=a.score.home-a.score.away;if(l.team==="HOME"&&it.current>=75&&Zt<=0&&Ee.lateShotBonus>0){Ze+=Ee.lateShotBonus;const Se=ma(["late_drama","script_overtime","refund_roar","netwide_meeting","causality_big_bro"]);if(Se){const en=`${ta(Se,Je)}：75分钟后未领先，射门欲望 +${Math.round(Ee.lateShotBonus*100)}%`;cs(Se,"trigger",en,"late-window")}}if(l.team==="HOME"&&Qe>20&&Ee.longShotBonus>0){Ze+=Ee.longShotBonus;const Se=ma(["shaolin_cannon","winger_ghost","causality_big_bro"]);if(Se){const en=`${ta(Se,Je)}：远射威胁 +${Math.round(Ee.longShotBonus*100)}%，球员开始敢抡`;cs(Se,"trigger",en,"long-shot-window")}}if(l.team==="HOME"&&Zt===1&&d<=3&&Ee.leadingShotRestraint>0){Ze=Math.max(0,Ze-Ee.leadingShotRestraint);const Se=ma(["goal_diff_accountant","math_group_third","bus_parking_permit"]);if(Se){const en=`${ta(Se,Je)}：小组赛领先，射门欲望 -${Math.round(Ee.leadingShotRestraint*100)}%，开始控分`;cs(Se,"trigger",en,"leading-restraint")}}if(Di?Ze=2:Qt?Ze+=.5:Li.arcShotZone?Ze+=Li.longShotDesireBonus:hn&&Pt>.3&&(Ze+=.3),ni.longShotBonus>0&&Qe<42&&Pt>.18&&(Ze+=ni.longShotBonus),!Qt){const Se=Li.clearArcShot?_e(ni.conservativeShotMultiplier+.18+Li.centrality*.08,.82,1.08):ni.conservativeShotMultiplier;Ze*=Se}Nn>0&&(Qt||hn)&&(Ze*=1+Nn*(Qt?.42:.24)),tn>0&&(Qt||hn)&&(Ze*=1+tn*(Qt?.32:.18),Ze+=tn*(Qt?.22:.14)),Tn>0&&(Qt||hn)&&(Ze*=1+Tn*(Qt?.2:.12),Ze+=Tn*(Qt?.14:.08));const Xn=_e((-Ut-.45)/.8,0,1),Zn=.7-Nn*.16-tn*.18-Tn*.08+Xn*.14,Ni=1-Nn*.2-tn*.22-Tn*.1+Xn*.18,Bn=Math.max(35+tn*5+Tn*2-Xn*6,Li.arcShotZone?33+tn*3:0),wi=Li.clearArcShot&&Q>=.82&&Me<=2&&Li.lanePressure<.55,yn=Qe<Bn&&(Ze>Zn||wi||Qe<8&&ct<1.2&&Xn<.85),Pi=l.role==="GK";if(Pi){const Se=l.team==="HOME"?a.home:a.away,Ht=Ps.filter(Mt=>Mt.role!=="GK"),nn=(Ht.length>0?Ht:Se.filter(Mt=>Mt.id!==l.id&&Mt.role!=="GK")).reduce((Mt,Gt)=>{if(!Mt)return Gt;const on=(Mt.x-l.x)**2+(Mt.z-l.z)**2;return(Gt.x-l.x)**2+(Gt.z-l.z)**2>on?Gt:Mt},null);if(nn){a.action={type:"PASS",sourceId:l.id,targetId:nn.id,timer:800},l.action="PASS",l.actionTimer=650;const Mt=nn.x-l.x,Gt=nn.z-l.z,on=Math.sqrt(Mt*Mt+Gt*Gt)||1,ii=Math.min(5,3.5+on*.05);Js(a.ball,l.x,l.z,nn.x,nn.z,0,3.6+Math.random()*1.2,ii),Ai(l.team,on,nn.z,!0),Qn(a,l.team,"pass",wn(l,nn,on,!0,"distribution"),2),a.ball.lastHolderId=l.id,a.ball.lastTouchType="PASS",a.ball.ownerId=null,a.ball.cooldown=1200}}else if(yn&&(wi||Ze>Ni||!Ei)){rs.current=2,os.current="shot",g.freezeReason="shot",Ed("[PERF][freeze]",{reason:"shot",freezeTicks:2,phase:a.phase}),a.action={type:"SHOOT",sourceId:l.id,targetId:null,timer:800},l.action="SHOOT",l.actionTimer=800;const Se=_e((Ut-.7)/.5,0,1),Ht=de,en=(Math.random()-.5)*(8-Se*3.2),nn=Ht-l.x,Mt=en-l.z,Gt=Math.sqrt(nn*nn+Mt*Mt)||1,on=Li.arcShotZone&&!Qt,ii=on?4.15+_e((Gt-18)/14,0,1)*.45:4.5*(1-Gt/80),Yi=l.team==="HOME"&&Qe>20?Ee.longShotBonus:0,Jn=l.team==="HOME"&&Qe>20&&Ee.longShotRisk>0&&Math.random()<Ee.longShotRisk*.22;if(Jn){const Hc=ma(["shaolin_cannon","causality_big_bro"]);if(Hc){const Ap=ta(Hc,Je);cs(Hc,"backfire",`${Ap}：远射走火，力道很足但准星开始离谱`,"long-shot-debt")}}const Hn=Math.max(on?4:3.5,ii*Q+Math.random()*.5)*(1+Se*.14),di=_e((-Ut-.55)/.7,0,1),ui=zs(a.ball.lastTouchType),pi=l.team==="HOME"&&(ui==="corner"||ui==="freeKick")?Ee.setPieceShotBonus:0;pi>0&&Ta(`定位球二点射门准度 +${Math.round(pi*100)}%`,`set-piece-followup-shot-${it.current}`);const Ss=Math.random()<_e(.24+Q*.55+Ut*.1+Nn*.04+tn*.05+Se*.08+Yi+pi-di*.16-(Jn?.22:0),.1,.98);fa(l.team,Qe,l.z,Ss,ui),Rs(a.ball,l.team,Ss,ui);const kr=Ss?.18+Math.random()*(1.8-Se*.45):2.6+Math.random()*1.5,Tp=Math.max(kr+.15,1.25+Math.random()*1);Js(a.ball,l.x,l.z,Ht,l.z+Mt,kr,Tp,Hn),St("shot",l,Hn/3.7),a.ball.lastHolderId=l.id,a.ball.lastTouchType="SHOOT",a.ball.ownerId=null,a.ball.cooldown=1e3}else if(Ei&&!Pi){const Se=qt.player,Ht=qt.score>.65;a.action={type:"PASS",sourceId:l.id,targetId:Se.id,timer:450},l.action="PASS",l.actionTimer=450;let en=Se.x,nn=Se.z;if(Se.role==="GK"){const pi=Kt.current===1,kr=l.team==="HOME"?pi?-52:52:pi?52:-52;Math.abs(l.x-kr)<25&&(nn+=Se.z>0?6:-6)}const Mt=en-l.x,Gt=nn-l.z,on=Math.sqrt(Mt*Mt+Gt*Gt)||1,ii=wt(on,Ht?"KILLER":"NORMAL"),Yi=hn&&on<18?1.6:1,Jn=l.team==="HOME"&&it.current>=75&&Ee.latePassRisk>0&&Math.random()<Ee.latePassRisk*.18;if(Jn){const pi=ma(["late_drama","script_overtime","refund_roar","netwide_meeting"]);if(pi){const Ss=ta(pi,Je);cs(pi,"backfire",`${Ss}：后程直塞债触发，传球落点开始飘`,"late-pass-debt")}}const _i=tc(l)*(on/24)*Ii*xa(Se)*(Jn?1.8:1)/Yi,Hn=en+(Math.random()-.5)*_i,di=nn+(Math.random()-.5)*_i,ui=on>38&&Math.random()<qn;if(Ai(l.team,on,di,ui),Qn(a,l.team,"pass",wn(l,Se,on,ui,Ht?"killer":"forward"),Ht?1:2),ui){const pi=1.35+Math.random()*.65,Ss=Math.max(pi+.4,2.5+Math.random()*1);Js(a.ball,l.x,l.z,Hn,di,pi,Ss,ii)}else{const pi=Hn-l.x,Ss=di-l.z,kr=Math.sqrt(pi*pi+Ss*Ss)||1;a.ball.vx=pi/kr*ii,a.ball.vz=Ss/kr*ii,a.ball.vy=0,a.ball.customGravity=void 0}a.ball.lastHolderId=l.id,a.ball.lastTouchType="PASS",a.ball.ownerId=null,a.ball.cooldown=700}else if(De&&Math.random()<_e(Pn+tn*.28,.02,.88)&&!Pi){a.action={type:"PASS",sourceId:l.id,targetId:De.id,timer:400};let Se=De.x,Ht=De.z;if(De.role==="GK"){const Hn=Kt.current===1,ui=l.team==="HOME"?Hn?-52:52:Hn?52:-52;Math.abs(l.x-ui)<25&&(Ht+=De.z>0?6:-6)}const en=Se-l.x,nn=Ht-l.z,Mt=Math.sqrt(en*en+nn*nn)||1,Gt=wt(Mt,"KILLER"),on=hn&&Mt<18?1.6:1,ii=tc(l)*(Mt/24)*Ii*xa(De)/on/(1+tn*.28),Yi=Se+(Math.random()-.5)*ii,Jn=Ht+(Math.random()-.5)*ii,_i=Mt>38&&Math.random()<qn;if(Ai(l.team,Mt,Jn,_i),Qn(a,l.team,"pass",wn(l,De,Mt,_i,"killer"),1),_i){const Hn=1.35+Math.random()*.65,di=Math.max(Hn+.4,2.5+Math.random()*1);Js(a.ball,l.x,l.z,Yi,Jn,Hn,di,Gt)}else{const Hn=Yi-l.x,di=Jn-l.z,ui=Math.sqrt(Hn*Hn+di*di)||1;a.ball.vx=Hn/ui*Gt,a.ball.vz=di/ui*Gt,a.ball.vy=0,a.ball.customGravity=void 0}a.ball.lastHolderId=l.id,a.ball.lastTouchType="PASS",a.ball.ownerId=null,a.ball.cooldown=600}else if(!Li.clearArcShot&&!Oi&&dn==="DRIBBLE"&&Math.random()<ni.dribbleIntentChance)Bo(l.team,l.z),a.action={type:"DRIBBLE",sourceId:l.id,targetId:null,timer:800};else if(ea.length>0&&(be>0||Math.random()<ni.forwardPassChance)){const Se=ea[Math.floor(Math.random()*ea.length)];a.action={type:"PASS",sourceId:l.id,targetId:Se.id,timer:400};let Ht=Se.x,en=Se.z;if(Se.role==="GK"){const ui=Kt.current===1,Ss=l.team==="HOME"?ui?-52:52:ui?52:-52;Math.abs(l.x-Ss)<25&&(en+=Se.z>0?6:-6)}const nn=Ht-l.x,Mt=en-l.z,Gt=Math.sqrt(nn*nn+Mt*Mt)||1,on=wt(Gt,"NORMAL"),ii=hn&&Gt<18?1.6:1,Yi=tc(l)*(Gt/24)*Ii*xa(Se)/ii,Jn=Pi?1.2:1,_i=Ht+(Math.random()-.5)*Yi,Hn=en+(Math.random()-.5)*Yi,di=Gt>38&&Math.random()<qn||Pi;if(Ai(l.team,Gt,Hn,di),Qn(a,l.team,"pass",wn(l,Se,Gt,di,"forward"),2),di){const ui=Pi?0:1.35+Math.random()*.65,pi=Math.max(ui+.4,2.5+Math.random()*1);Js(a.ball,l.x,l.z,_i,Hn,ui,pi,on*Jn)}else{const ui=_i-l.x,pi=Hn-l.z,Ss=Math.sqrt(ui*ui+pi*pi)||1;a.ball.vx=ui/Ss*on*Jn,a.ball.vz=pi/Ss*on*Jn,a.ball.vy=0,a.ball.customGravity=void 0}a.ball.lastHolderId=l.id,a.ball.lastTouchType="PASS",a.ball.ownerId=null,a.ball.cooldown=600}else if(Ns.length>0&&(hn?be>0||Math.abs(l.x)>44||Oi:be>2&&Oi)){const Se=Ns[Math.floor(Math.random()*Ns.length)];a.action={type:"PASS",sourceId:l.id,targetId:Se.id,timer:450};let Ht=Se.x,en=Se.z;if(Se.role==="GK"){const di=Kt.current===1,pi=l.team==="HOME"?di?-52:52:di?52:-52;Math.abs(l.x-pi)<25&&(en+=Se.z>0?6:-6)}const nn=Ht-l.x,Mt=en-l.z,Gt=Math.sqrt(nn*nn+Mt*Mt)||1,on=wt(Gt,"SAFE"),ii=hn&&Gt<18?1.6:1,Yi=tc(l)*(Gt/24)*Ii/ii,Jn=Ht+(Math.random()-.5)*Yi,_i=en+(Math.random()-.5)*Yi,Hn=Gt>38&&Math.random()<qn;if(Ai(l.team,Gt,_i,Hn),Qn(a,l.team,"pass",wn(l,Se,Gt,Hn,"safe"),2),Hn){const di=1.35+Math.random()*.65,ui=Math.max(di+.4,2.5+Math.random()*1);Js(a.ball,l.x,l.z,Jn,_i,di,ui,on)}else{const di=Jn-l.x,ui=_i-l.z,pi=Math.sqrt(di*di+ui*ui)||1;a.ball.vx=di/pi*on,a.ball.vz=ui/pi*on,a.ball.vy=0,a.ball.customGravity=void 0}a.ball.lastHolderId=l.id,a.ball.lastTouchType="PASS",a.ball.ownerId=null,a.ball.cooldown=600}else Bo(l.team,l.z),a.action={type:"DRIBBLE",sourceId:l.id,targetId:null,timer:800}}}else a.action={type:"NONE",sourceId:null,targetId:null,timer:0};const Ml=4,Sp=(l,O)=>`${Math.floor(l/Ml)}:${Math.floor(O/Ml)}`,Bc=new Map;ke().forEach(l=>{const O=Sp(l.x,l.z),Re=Bc.get(O);Re?Re.push(l):Bc.set(O,[l])});const bh=l=>{const O=Math.floor(l.x/Ml),Re=Math.floor(l.z/Ml),Me=[];for(let be=-1;be<=1;be++)for(let de=-1;de<=1;de++){const Qe=Bc.get(`${O+be}:${Re+de}`);Qe&&Me.push(...Qe)}return Me};ke().forEach(l=>{var Na;const O=l.id===a.ball.ownerId,Re=l.team===a.possession,Me=l.role==="GK",be=a.ball.x,de=a.ball.z,Qe=Kt.current===1,ct=l.team==="HOME"?Qe?1:-1:Qe?-1:1;let se=l.baseX,Q=l.baseZ,At=0,ze=de*.22;const dn=l.team==="HOME"?zi.current:En.current,Rn=ys(l.team),Mn=er(l.team),Ut=dn.mentality,Nn=Ut==="ATTACKING"?1.3:Ut==="DEFENSIVE"?.7:1,tn=((dn.defensiveLine-50)*.12+Rn*2.4)*ct,Tn=.8+dn.width/100*.45;if(ze*=Tn,Re)At=be*.3*(Ut==="ATTACKING"?1.15:1)+(l.role==="FWD"?30:l.role==="MID"?15:0)*ct*(Nn+Rn*.12)+tn;else{const Dt=(Ut==="ATTACKING"?.7:Ut==="DEFENSIVE"?1.3:1)-Rn*.12;At=be*.5+(l.role==="FWD"?10:l.role==="MID"?-10:-25)*ct*Dt+tn}if(se=l.baseX+At,Q=l.baseZ+ze,a.phase==="PENALTY"&&a.setPiece){const Dt=a.possession===l.team,cn=a.setPiece.kickerId,qt=Kt.current===1,De=a.possession==="HOME"?qt?1:-1:qt?-1:1,Dn=De*41;l.id===cn?(se=Dn-De*2,Q=0):l.role==="GK"&&!Dt?(se=De*52,Q=0):(se=Dn-De*15,Q=l.baseZ||0)}else if(a.phase==="CORNER"&&a.setPiece){const Dt=a.possession===l.team,cn=a.setPiece.kickerId,qt=a.setPiece.pos.x>0?1:-1,De=qt*48;if(l.id===cn)se=a.setPiece.pos.x,Q=a.setPiece.pos.z;else if(l.role==="GK"){const Dn=Kt.current===1;se=l.team==="HOME"?Dn?-51.5:51.5:Dn?51.5:-51.5,Q=0}else if(Dt){const Dn=l.team==="HOME"?a.home:a.away,Ei=Dn.filter(_n=>_n.role==="DEF"&&_n.id!==cn).slice(0,2);if(Ei.some(_n=>_n.id===l.id)){const _n=Ei.findIndex(ms=>ms.id===l.id);se=-qt*15,Q=_n===0?-12:12}else{const _n=Dn.indexOf(l);se=De-qt*(2+Math.random()*8),Q=(_n%3-1)*8}}else{const Dn=l.team==="HOME"?a.home:a.away,kt=Dn.filter(_n=>_n.role==="FWD"&&_n.role!=="GK"),Oi=(kt.length>0?kt:Dn.filter(_n=>_n.role==="MID"))[0];if(Oi&&l.id===Oi.id)se=-qt*10,Q=(Math.random()-.5)*15;else{const _n=Dn.indexOf(l);l.role==="GK"?(se=De,Q=0):(se=De-qt*(1+Math.random()*4),Q=(_n%3-1)*6)}}}else if((a.phase==="FREEKICK"||a.phase==="THROWIN")&&a.setPiece){const Dt=a.possession===l.team,cn=a.setPiece.kickerId,qt=a.setPiece.pos.x,De=a.setPiece.pos.z,Dn=Kt.current===1,kt=a.possession==="HOME"?Dn?1:-1:Dn?-1:1,Ei=kt*52.5;if(l.id===cn)a.phase==="THROWIN"?(se=qt,Q=Math.sign(De)*35.2):(se=qt-kt*1.2,Q=De);else if(l.role==="GK"){const Oi=Kt.current===1;se=l.team==="HOME"?Oi?-51.5:51.5:Oi?51.5:-51.5,Q=0}else if(Dt&&l.role!=="GK"){const Oi=io(l,a.setPiece,a.possession,le);se=Oi.x,Q=Oi.z}else if(!Dt&&l.role!=="GK")if(oo.includes(l.id)&&a.phase==="FREEKICK"){const _n=oo.indexOf(l.id),ms=9.15,$i=Ei-qt,mt=Math.random()*2-1-De,Pt=Math.sqrt($i*$i+mt*mt)||1;se=qt+$i/Pt*ms,Q=De+mt/Pt*ms+(_n-1.5)*.7}else if((a.phase==="FREEKICK"||a.phase==="THROWIN")&&qt*kt>-10){const _n=l.team==="HOME"?a.home:a.away,ms=_n.filter(Pt=>Pt.role==="FWD"&&Pt.role!=="GK"),mt=(ms.length>0?ms:_n.filter(Pt=>Pt.role==="MID"))[0];if(mt&&l.id===mt.id)se=-kt*10,Q=(Math.random()-.5)*15;else{const Pt=_n.indexOf(l);se=qt+(Pt%3-1)*8+(Ei-qt)*.2,Q=De+(Math.floor(Pt/3)-1)*8}}else{const _n=(l.team==="HOME"?a.home:a.away).indexOf(l);se=qt+(_n%3-1)*8+(Ei-qt)*.2,Q=De+(Math.floor(_n/3)-1)*8}else if(Dt){if((a.phase==="FREEKICK"||a.phase==="THROWIN")&&qt*kt>-10){const $i=l.team==="HOME"?a.home:a.away,Pt=$i.filter(Ze=>Ze.role==="DEF"&&Ze.id!==cn).slice(0,2);if(Pt.some(Ze=>Ze.id===l.id)){const Ze=Pt.findIndex(Zt=>Zt.id===l.id);se=-kt*15,Q=Ze===0?-12:12}else{const Ze=$i.indexOf(l),Zt=(Ze%3-1)*7,Xn=(Math.floor(Ze/3)-1.5)*9;se=qt+Zt,Q=De+Xn}}else{const $i=(l.team==="HOME"?a.home:a.away).indexOf(l),mt=($i%3-1)*7,Pt=(Math.floor($i/3)-1.5)*9;se=qt+mt,Q=De+Pt}const Oi=a.phase==="THROWIN"?qt:qt-kt*1.2,_n=a.phase==="THROWIN"?Math.sign(De)*35.2:De;Math.sqrt((se-Oi)**2+(Q-_n)**2)<4&&(se+=kt*5),Math.abs(se)>51.5&&(se=kt*50)}}else if(a.phase==="GOALKICK"){const Dt=Kt.current===1,cn=l.team==="HOME"?Dt?-1:1:Dt?1:-1,qt=l.team===a.possession;if(l.role==="GK")se=cn*48,Q=0;else if(qt){const De=l.team==="HOME"?1:-1,Dn=l.x*cn<0,kt=l.baseX;l.role==="FWD"&&kt*cn<0?se=cn*5:se=kt*.9,Q=l.baseZ*1.25}else{const De=cn*22;se=l.baseX*.5+De;const Dn=cn*28;se*cn>Dn*cn&&(se=Dn),Q=l.baseZ*.9}}switch(Q*=1-.05,l.task){case"HOLD_BALL":if(!(["FREEKICK","THROWIN","PENALTY","CORNER","GOALKICK"].includes(a.phase)&&a.setPiece&&l.id===a.setPiece.kickerId)){const mt=l.role==="GK",Pt=l.team==="HOME"?a.away:a.home,wt=Kt.current===1,Ze=wt,Zt=l.team==="HOME"?Ze:!Ze,Xn=!mt&&(Zt?l.x>45:l.x<-45);if(mt){const Bn=l.team==="HOME"?wt?-52.5:52.5:wt?52.5:-52.5;se=Bn+(Bn>0?-4:4),Q=0}else if(Xn){const Bn=Zt?48.4:-48.4;Math.abs(l.z)>12?(se=Bn,Q=l.z*.45):(se=Bn,Q=Math.sign(l.z||l.baseZ||1)*6)}else se=l.x+ct*15,Q=l.z;const Zn=Zt?l.x>25:l.x<-25;if((Zt?l.x>36:l.x<-36)||mt?Q=l.z*.3:Zn&&(Q=l.z*.7),mt||Pt.forEach(Bn=>{const wi=Bn.x-l.x,yn=Bn.z-l.z,Pi=Math.sqrt(wi*wi+yn*yn)||1,Se=10;if(Pi<Se){const Ht=(Se-Pi)/Se,en=ln(l,"dribbling")+ys(l.team)*.12,nn=(ln(Bn,"tackling")+ln(Bn,"awareness"))*.5;if(en>nn*.92||Math.random()<_e(.18+(en-nn)*.42,.06,.58)){const Gt=yn>0?-1:1;Q+=Gt*Ht*16,se+=Xn?-ct*Ht*5:ct*Ht*8}else{const Gt=yn>0?-1:1;Q+=Gt*Ht*10,se-=ct*Ht*4}}}),!mt){const Bn=Zt?50.1:-50.1;se=Zt?Math.min(se,Bn):Math.max(se,Bn)}mt&&(se=Math.max(-50,Math.min(50,se))),mt||(Q+=Math.sin(Date.now()/1500)*1.5)}break;case"SHOW_FOR_PASS":{const mt=le.indexOf(l),Pt=a.ball.ownerId?pt.get(a.ball.ownerId):null,wt=Pt?Hs(Pt.team):ct,Ze=mt%3,Zt=Ze===0?7:Ze===1?-5:3,Zn=(l.baseZ<-2?-1:l.baseZ>2?1:Ze===1?-1:1)*(7+mt%2*3);se=be+wt*Zt,Q=de+Zn,(l.team==="HOME"?a.away:a.home).forEach(Bn=>{const wi=se-Bn.x,yn=Q-Bn.z,Pi=Math.sqrt(wi*wi+yn*yn)||.1;Pi<6&&(se+=wi/Pi*(6-Pi),Q+=yn/Pi*(6-Pi))});break}case"ATTACK_SPACE":{const mt=Fc(l.team,53),Pt=Hs(l.team),wt=le.indexOf(l),Ze=l.role==="FWD"?13+wt%3*4:22+wt%2*5,Zt=Math.sign(l.baseZ||de||(wt%2===0?1:-1))*(l.role==="FWD"?7+wt%2*5:10),Xn=Math.abs(de)>18;se=mt-Pt*Ze,Q=Xn?de*.35+Zt*.35:Zt+de*.12,(l.team==="HOME"?a.away:a.home).forEach(Ni=>{const Bn=se-Ni.x,wi=Q-Ni.z,yn=Math.sqrt(Bn*Bn+wi*wi)||.1;yn<7.5&&(se+=Bn/yn*(7.5-yn)*.65,Q+=wi/yn*(7.5-yn)*.9)}),Q=_e(Q,-20,20);break}case"SUPPORT":const cn=le.indexOf(l),qt=8+cn%3*3,De=Math.atan2(l.z-de,l.x-be)+(cn%2===0?.7:-.7);let Dn=be+Math.cos(De)*qt,kt=de+Math.sin(De)*qt;(l.team==="HOME"?a.away:a.home).forEach(mt=>{const Pt=Dn-mt.x,wt=kt-mt.z,Ze=Pt*Pt+wt*wt;if(Ze<25){const Zt=Math.sqrt(Ze)||.1;Dn+=Pt/Zt*(5-Zt),kt+=wt/Zt*(5-Zt)}}),se=Dn,Q=kt;break;case"FORWARD_RUN":{const mt=Kt.current===1;se=l.team==="HOME"?mt?48:-48:mt?-48:48,Q=l.baseZ+de*.5+Math.sin(Date.now()/2e3)*8,Mn>.35&&(se=l.team==="HOME"?mt?49.2:-49.2:mt?-49.2:49.2,Q=_e(l.baseZ*.38+de*.22+Math.sin(Date.now()/1700)*3.5,-14,14));break}case"WIDE_RUN":{const mt=Kt.current===1;se=l.team==="HOME"?mt?44:-44:mt?-44:44,Q=Math.sign(l.baseZ||de||1)*34;break}case"CUT_INSIDE":{const mt=Kt.current===1;se=l.team==="HOME"?mt?45:-45:mt?-45:45,Q=de>0?5:-5,Mn>.35&&(se=l.team==="HOME"?mt?47.5:-47.5:mt?-47.5:47.5,Q=_e(de*.18+Math.sign(l.baseZ||de||1)*4,-10,10));break}case"OVERLAP":se=be+18*ct,Q=Math.sign(l.baseZ)*33;break;case"PRESS":se=be,Q=de;break;case"SECOND_PRESS":{const mt=Kt.current===1,wt=(l.team==="HOME"?mt?-52.5:52.5:mt?52.5:-52.5)-be,Ze=-de,Zt=Math.sqrt(wt*wt+Ze*Ze)||1,Xn=l.role==="DEF"?4.4:3.4;se=be+wt/Zt*Xn,Q=de+Ze/Zt*Xn;break}case"SCREEN_ARC":{const mt=Kt.current===1,Pt=l.team==="HOME"?mt?-52.5:52.5:mt?52.5:-52.5,wt=Pt>0?1:-1,Ze=Pt-wt*22.5,Zt=_e((Math.abs(be-Ze)-4)/20,0,1);se=Ze*(1-Zt*.35)+be*(Zt*.35),Q=_e(de*.34+l.baseZ*.16,-13.5,13.5);break}case"COVER_DEPTH":{const mt=Kt.current===1,Pt=l.team==="HOME"?mt?-52.5:52.5:mt?52.5:-52.5,wt=Pt>0?1:-1,Ze=Pt-wt*(13.5+_e(Math.abs(de)/34,0,1)*4),Xn=_e(1-Math.abs(l.baseZ)/28,0,1)>.45?2.8:-1.6;se=Ze-wt*Xn,Q=_e(l.baseZ*.42+de*.2,-18,18);break}case"TRACK_RUN":{const mt=l.team==="HOME"?a.away:a.home,Pt=Kt.current===1,wt=l.team==="HOME"?Pt?-52.5:52.5:Pt?52.5:-52.5,Ze=wt>0?1:-1,Zt=mt.filter(Xn=>Xn.role!=="GK"&&Xn.id!==a.ball.ownerId).sort((Xn,Zn)=>{const Ni=Bn=>{const wi=Math.abs(wt-Bn.x),yn=Math.max(0,20-Math.abs(Bn.z));return(Bn.x-l.x)**2+(Bn.z-l.z)**2+wi*2-yn*5};return Ni(Xn)-Ni(Zn)})[0];Zt?(se=Zt.x+Ze*2,Q=Zt.z*.92):(se=l.baseX+At,Q=l.baseZ+ze*.7);break}case"MARK":const Oi=l.team==="HOME"?a.away:a.home;let _n=null,ms=1/0;const $i=l.role;if(Oi.forEach(mt=>{if(mt.role==="GK"||mt.id===a.ball.ownerId)return;let Pt=1;$i==="DEF"&&mt.role!=="FWD"&&(Pt=1.5),$i==="MID"&&mt.role!=="MID"&&(Pt=1.35);const wt=((mt.x-l.x)**2+(mt.z-l.z)**2)*Pt;wt<ms&&(ms=wt,_n=mt)}),_n){const mt=Kt.current===1,wt=(l.team==="HOME"?mt?-52.5:52.5:mt?52.5:-52.5)-_n.x,Ze=0-_n.z,Zt=Math.sqrt(wt*wt+Ze*Ze)||1;se=_n.x+wt/Zt*1.8,Q=_n.z+Ze/Zt*1.8}else se=l.baseX+At,Q=l.baseZ+ze*.7;break;case"COVER_SPACE":{const mt=Kt.current===1,Pt=l.team==="HOME"?mt?-52:52:mt?52:-52;se=be*.4+l.baseX*.6,Q=l.baseZ*.85+de*.15;break}case"GK_COVER":{const mt=Kt.current===1,Pt=l.team==="HOME"?mt?-50:50:mt?50:-50,wt=Math.abs(be-Pt),Ze=Math.min(wt*.1,6);se=Pt+ct*Ze,Q=de*.3,se=Math.max(-50,Math.min(50,se));break}case"RECOVER":default:se=l.baseX+At,Q=l.baseZ+ze*.7;break}if(l.role!=="GK"){const Dt=Kt.current===1,cn=l.team==="HOME"?Dt?-1:1:Dt?1:-1,qt=be*cn>32;cn===-1?(se=Math.max(-49.5,se),l.role==="DEF"&&l.task!=="PRESS"&&!qt&&(se=Math.max(-44,se))):(se=Math.min(49.5,se),l.role==="DEF"&&l.task!=="PRESS"&&!qt&&(se=Math.min(44,se)))}if(l.role==="GK"){const Dt=Kt.current===1;(l.team==="HOME"?Dt?-1:1:Dt?1:-1)===-1?se=Math.max(-53.5,Math.min(-34.5,se)):se=Math.max(34.5,Math.min(53.5,se)),Q=Math.max(-18.5,Math.min(18.5,Q))}bh(l).forEach(Dt=>{if(l.id===Dt.id)return;const cn=l.x-Dt.x,qt=l.z-Dt.z,De=cn*cn+qt*qt,kt=a.phase==="FREEKICK"&&lo.has(l.id)&&lo.has(Dt.id)?.8:l.team===Dt.team?3.5:2;if(De<kt*kt){const Ei=Math.sqrt(De)||.1,Oi=(kt-Ei)*.25;se+=cn/Ei*Oi,Q+=qt/Ei*Oi}});let un=-54,ci=54,ni=-34,Yn=34;const Ii=!["PREPARE","FOUL","PENALTY","FREEKICK","GOALKICK","CORNER","KICKOFF","THROWIN","CELEBRATE"].includes(a.phase);if(Ii&&l.role!=="GK"&&(ni=-ic,Yn=ic),(a.phase==="THROWIN"||a.phase==="PREPARE"&&((Na=a.setPiece)==null?void 0:Na.type)==="THROWIN")&&a.setPiece&&l.id===a.setPiece.kickerId&&(Math.sign(a.setPiece.pos.z)>0?(ni=35,Yn=35.5):(ni=-35.5,Yn=-35)),O&&l.role!=="GK"){const Dt=Kt.current===1,cn=l.team==="HOME"?Dt:!Dt;if(cn?l.x>46:l.x<-46){const De=cn?50.1:-50.1;se=cn?Math.min(se,De):Math.max(se,De)}Ii&&(Q=Math.max(-il,Math.min(il,Q)))}se=Math.max(un,Math.min(ci,se)),Q=Math.max(ni,Math.min(Yn,Q));const qn=se-l.x,Qs=Q-l.z,Vs=Math.sqrt(qn*qn+Qs*Qs)||.01;let ds=1;O?ds=.82+(ln(l,"dribbling")-1)*.1:l.action==="TACKLE"&&(l.actionTimer>750?ds=1.35:l.actionTimer>400?ds=.15:ds=.45);const us=lo.has(l.id),Ns=l.task==="FORWARD_RUN"||l.task==="ATTACK_SPACE"?1.25:l.task==="SHOW_FOR_PASS"?1.08:1,Ps=.78*ln(l,"speed")*(us?1.5:Ns)*ds,Ws=Math.min(Vs/2.5,1),br=l.task==="PRESS"||us?.55:.28,ea=O?.12*cl(l.stamina):br*ln(l,"awareness");let Ae=qn/Vs*Ps*Ws,hn=Qs/Vs*Ps*Ws;if(l.action==="TACKLE"&&l.actionTimer>400){const Dt=Math.sqrt(l.vx*l.vx+l.vz*l.vz)||.1;Ae=l.vx/Dt*Ps,hn=l.vz/Dt*Ps}if(l.vx+=(Ae-l.vx)*ea,l.vz+=(hn-l.vz)*ea,bh(l).forEach(Dt=>{if(l.id===Dt.id)return;const cn=l.x-Dt.x,qt=l.z-Dt.z,De=cn*cn+qt*qt,Dn=l.team===Dt.team?2.2:1.4;if(De<Dn*Dn){const kt=Math.sqrt(De)||.1,Ei=(Dn-kt)*.08;l.vx+=cn/kt*Ei,l.vz+=qt/kt*Ei}}),l.vx*=.96,l.vz*=.96,l.x+=l.vx,l.z+=l.vz,l.x=Math.max(-55,Math.min(55,l.x)),l.z=Math.max(-36,Math.min(36,l.z)),Ii&&l.role!=="GK"){const Dt=O?il:ic;l.z>Dt?(l.z=Dt,l.vz=Math.min(0,l.vz)*.35):l.z<-Dt&&(l.z=-Dt,l.vz=Math.max(0,l.vz)*.35)}if(l.role==="GK"){const Dt=Kt.current===1;(l.team==="HOME"?Dt?-1:1:Dt?1:-1)===-1?l.x=Math.max(-53.5,Math.min(-34.5,l.x)):l.x=Math.max(34.5,Math.min(53.5,l.x)),l.z=Math.max(-18.5,Math.min(18.5,l.z))}if(["PREPARE","FOUL","PENALTY","FREEKICK","GOALKICK","CORNER","THROWIN"].includes(a.phase))return;const Qt=Ba.get(l.id)||.1,Di=Math.abs(a.ball.x)>Ql||Math.abs(a.ball.z)>34.8,Li=l.id===a.ball.lastHolderId,hs=a.action.type==="PASS"&&a.action.targetId===l.id,es=a.ball.lastHolderId?pt.get(a.ball.lastHolderId):null,xa=es?Math.sqrt((es.x-a.ball.x)**2+(es.z-a.ball.z)**2):999;if(!a.ball.ownerId&&!Di&&(Me&&!Li||a.ball.cooldown<=0||!Li&&(hs||xa>1.8||a.ball.cooldown<500))){g.pickupCandidates+=1;const Dt=Kt.current===1,cn=l.team==="HOME"?Dt?l.x<-35:l.x>35:Dt?l.x>35:l.x<-35,qt=a.ball.lastShot?Math.sqrt(a.ball.vx*a.ball.vx+a.ball.vz*a.ball.vz):0,De=!a.ball.lastShot||Me||qt<1.8,Dn=(!Me||cn)&&De,kt=Wr(l.team==="HOME"?zi.current:En.current,{qualityEdge:ys(l.team)}),Ei=l.team!==a.possession&&!hs,Oi=l.team==="HOME"?Dt?-52.5:52.5:Dt?52.5:-52.5,_n=Ei&&Math.abs(l.x-Oi)<28&&Math.abs(l.z)<22,ms=Ei?er(l.team==="HOME"?"AWAY":"HOME"):0,$i=Ei?kt.interceptionChance*.55+(_n?kt.boxProtection*.35:0):0,mt=(hs?2.2:l.team===a.possession?1.6:1.4)+$i*(1-ms*.28);if(Qt<mt&&Dn){if(a.ball.y<1.1){const Ze=a.ball.lastShot,Zt=Ze&&l.role==="GK"&&l.team!==Ze.team?"save":"blocked";ji(a.ball,Zt,void 0,{minute:it.current,phase:a.phase,scoreBefore:{home:a.score.home,away:a.score.away},scoreAfter:{home:a.score.home,away:a.score.away}}),a.ball.ownerId=l.id,a.ball.vx=0,a.ball.vz=0,a.ball.y=0,a.ball.vy=0,a.ball.customGravity=void 0,l.team!==a.possession&&xr(l.team,l.x),a.possession=l.team,a.ball.cooldown=400,a.ball.lastTouchType="DRIBBLE",a.action={type:"NONE",sourceId:l.id,targetId:null,timer:500},l.action="RECEIVE",l.actionTimer=400,a.ball.lastHolderId=l.id}else if(a.ball.y<3.2&&l.actionTimer<=0){g.aerialCandidates+=1;const Ze=Kt.current===1,Zt=l.team==="HOME"?Ze?52.5:-52.5:Ze?-52.5:52.5,Xn=Zt-l.x,Zn=0-l.z,Ni=Math.sqrt(Xn*Xn+Zn*Zn)||1,Bn=l.team==="HOME"?Ze?l.x>22:l.x<-22:Ze?l.x<-22:l.x>22,wi=Math.abs(l.x)>30&&Bn,yn=l.team==="HOME"?Ze?-52.5:52.5:Ze?52.5:-52.5,Pi=Math.abs(l.x-yn)<25,Se=l.role==="FWD"||l.role==="MID",Ht=wi?Se?.75:.5:0,en=Pi?.75:0,nn=Math.random();if(nn<Ht){const Mt=a.ball.y>=1.7;fa(l.team,Ni,l.z,!0,zs(a.ball.lastTouchType)),Rs(a.ball,l.team,!0,zs(a.ball.lastTouchType));const Gt=ln(l,"shooting");let on=4.8+Gt*1.6+ln(l,"strength")*.4;Mt||(on+=.8);const ii=(Math.random()-.5)*(1.1-Gt*.3)*4.2,Yi=_e(ii,-5.6,5.6);if(Mt){Js(a.ball,a.ball.x,a.ball.z,Zt,Yi,.38+Math.random()*.35,Math.max(a.ball.y+.12,1.55),on),St("header",l,on/4.8,a.ball.y),l.action="SHOOT",l.actionTimer=800;const Jn=[`💥 ${l.name} 泰山压顶！高高跃起一记力拔千钧的头球怒射！`,`💥 惊艳！${l.name} 在禁区抢断半空，鱼跃冲顶砸向球门！`,`💥 门前杀机！${l.name} 狮子甩头，皮球划出优美弧线直奔大门死角！`,`💥 【高空制霸】！${l.name} 迎着来球甩头，迎面冲顶势大力沉！`],_i=Jn[Math.floor(Math.random()*Jn.length)];a.events=[{id:Ye("head"),min:it.current,type:"INCIDENT",team:l.team,description:_i},...a.events].slice(0,50)}else{Js(a.ball,a.ball.x,a.ball.z,Zt,Yi,.55+Math.random()*.8,Math.max(a.ball.y+.35,1.85),on),St("volley",l,on/4.4,a.ball.y),l.action="SHOOT",l.actionTimer=800;const Jn=[`🚀 【雷霆万钧】！${l.name} 迎着下落的皮球推步凌空抽射！直接爆轰！`,`🚀 ${l.name} 在空中舒展身体，完成一记叹为观止的【神仙凌空扫射】！`,`🚀 暴力美学！${l.name} 没有任何多余调整，飞身垫射直挂网窝！`,`🚀 精彩绝伦！${l.name} 半空中飞起，一脚侧剪扫射狠狠啃中皮球轰门！`],_i=Jn[Math.floor(Math.random()*Jn.length)];a.events=[{id:Ye("volley"),min:it.current,type:"INCIDENT",team:l.team,description:_i},...a.events].slice(0,50)}a.ball.ownerId=null,a.ball.lastHolderId=l.id,a.ball.lastTouchType="SHOOT",a.ball.cooldown=1e3}else if(nn<Ht+en){const Mt=a.ball.y>=1.7,Gt=l.team==="HOME"?Ze?1:-1:Ze?-1:1,on=4.2+ln(l,"strength")*1.5+ln(l,"tackling")*.5,ii=l.x+Gt*(26+Math.random()*16),Yi=_e(l.z+(Math.random()-.5)*22,-31,31);if(dc(a.ball,ii,Yi,{speedMultiplier:Mt?.78:.92,minSpeed:3.6,maxSpeed:on,targetY:.45+Math.random()*.35,maxHeight:Math.max(a.ball.y+.6,Mt?2.2:2.8)}),l.action="PASS",l.actionTimer=700,Mt){const Jn=[`🛡️ ${l.name} 门前高高起跳，一记顶天立地的【强力头球解围】！`,`🛡️ 警报解除！${l.name} 抢在对方中锋前狮子摇头，将球锤出底线！`,`🛡️ 飞身救险！${l.name} 舍身俯冲，铁头将对方的传中球砸出危险禁区！`],_i=Jn[Math.floor(Math.random()*Jn.length)];a.events=[{id:Ye("c_head"),min:it.current,type:"INCIDENT",team:l.team,description:_i},...a.events].slice(0,50)}else{const Jn=[`🛡️ 干净利落！${l.name} 侧身腾空，大脚【侧剪凌空解围】踢飞皮球！`,`🛡️ 门前堵枪眼！${l.name} 飞身把高悬的半高球大脚抽离危险带！`,`🛡️ 惊险大扫荡！${l.name} 用一记剪切脚，大脚将球勾起扫离禁区！`],_i=Jn[Math.floor(Math.random()*Jn.length)];a.events=[{id:Ye("c_volley"),min:it.current,type:"INCIDENT",team:l.team,description:_i},...a.events].slice(0,50)}a.ball.ownerId=null,a.ball.lastHolderId=l.id,a.ball.cooldown=1100}else{const Mt=(l.team==="HOME"?zi.current:En.current).buildUpStyle;if(ln(l,"dribbling")>.65&&Mt!=="POSSESSION"&&Math.random()<.45){a.ball.ownerId=l.id,a.ball.vx=0,a.ball.vz=0,a.ball.y=0,a.ball.vy=0,a.ball.customGravity=void 0,a.possession=l.team,a.ball.cooldown=400,a.action={type:"NONE",sourceId:l.id,targetId:null,timer:500},l.action="RECEIVE",l.actionTimer=400,a.ball.lastHolderId=l.id;const on=[`👟 妙到毫巅！${l.name} 胸口稳稳一挺将飞来的皮球卸下，吸附在脚面！`,`👟 艺术球感！${l.name} 伸出大腿温柔卸下来球，轻松化解高空旋转！`,`👟 连停带过！${l.name} 探身用脚弓空中顺下皮球，顺畅衔接第二步盘带！`],ii=on[Math.floor(Math.random()*on.length)];a.events=[{id:Ye("trap"),min:it.current,type:"INCIDENT",team:l.team,description:ii},...a.events].slice(0,50)}else{const on=a.ball.y>=1.7,ii=l.team==="HOME"?Ze?1:-1:Ze?-1:1,Yi=3.2+ln(l,"passing")*1.5,Jn=l.x+ii*(12+Math.random()*10),_i=_e(l.z+(Math.random()-.5)*12,-31,31);if(dc(a.ball,Jn,_i,{speedMultiplier:on?.62:.72,minSpeed:2.5,maxSpeed:Yi,targetY:.35+Math.random()*.3,maxHeight:Math.max(a.ball.y+.25,1.45)}),l.action="PASS",l.actionTimer=650,on){const Hn=[`⚽ ${l.name} 空中接力！甩头横敲巧妙在空中把皮球摆渡出去！`,`⚽ ${l.name} 跃起力压后卫，回头望月将飞球点传给跑位队友！`],di=Hn[Math.floor(Math.random()*Hn.length)];a.events=[{id:Ye("p_head"),min:it.current,type:"INCIDENT",team:l.team,description:di},...a.events].slice(0,50)}else{const Hn=[`⚽ 妙手生花！${l.name} 迎着半高球顺势一脚垫传分到开阔地带！`,`⚽ 绝妙默契！${l.name} 凌空外脚背轻拉，轻轻巧巧在下坠前把球敲到边路！`],di=Hn[Math.floor(Math.random()*Hn.length)];a.events=[{id:Ye("p_volley"),min:it.current,type:"INCIDENT",team:l.team,description:di},...a.events].slice(0,50)}a.ball.ownerId=null,a.ball.lastHolderId=l.id,a.ball.cooldown=1e3}}}}const Pt=Math.sqrt(a.ball.vx*a.ball.vx+a.ball.vz*a.ball.vz)||.1,wt=Math.max(6.5,Pt*1.5);if(Me&&!Li&&Qt<wt&&!a.ball.ownerId&&Math.abs(a.ball.vx)>.1){l.action="SAVE",l.actionTimer=900;const Ze=Math.max(2.4,Pt*.95);if(Qt<Ze&&a.ball.y<=2.5){const Zt=Kt.current===1,Xn=l.team==="HOME"?Zt?-52.5:52.5:Zt?52.5:-52.5,Zn=ke().find(Mt=>Mt.id===a.action.sourceId),Ni=Zn?Math.sqrt((Xn-Zn.x)**2+(0-Zn.z)**2):22,Bn=Zn?ln(Zn,"shooting")*.72+ln(Zn,"strength")*.16+Ds(Zn)/80*.12:.9,wi=ln(l,"awareness")*.72+Ds(l)/80*.28;let yn=.5;Ni>35?yn=.97+(ln(l,"awareness")-1)*.03:Ni>25?yn=.85+(ln(l,"awareness")-1)*.12:Ni>15?yn=.62+(ln(l,"awareness")-1)*.25:yn=.32+(ln(l,"awareness")-1)*.35,yn-=_e(Bn-wi,-.35,.45)*.24;const Pi=ys((Zn==null?void 0:Zn.team)||(l.team==="HOME"?"AWAY":"HOME")),Se=_e((Pi-.45)/.7,0,1),Ht=er((Zn==null?void 0:Zn.team)||(l.team==="HOME"?"AWAY":"HOME")),en=_e((Pi-.75)/.5,0,1),nn=_e((Math.min(Le,Ri)-82)/6,0,1)*(1-_e(Math.abs(Le-Ri)/5,0,1));if(yn-=Pi*.18,yn-=Se*.35,yn-=Ht*.25,yn-=en*(Ni>35?.22:Ni>25?.34:Ni>15?.44:.36),yn-=nn*(Ni>25?.06:Ni>15?.1:.08),l.team==="HOME"){const Mt=d<=3&&a.score.home===a.score.away?Ee.groupDrawDefenseBonus:0;if(yn+=Ee.boxDefenseBonus+Mt,Ee.boxDefenseBonus>0){const Gt=ma(["box_lock","iron_wall_cb","goalkeeper_scorpion","var_eye","bus_parking_permit"]);if(Gt){const ii=`${ta(Gt,Je)}：禁区保护 +${Math.round(Ee.boxDefenseBonus*100)}%，门将扑救更稳`;cs(Gt,"trigger",ii,"box-save-boost")}}if(Mt>0){const Gt=ma(["draw_is_enough","math_group_third","bus_parking_permit"]);if(Gt){const ii=`${ta(Gt,Je)}：小组赛平局状态，防守 +${Math.round(Mt*100)}%`;cs(Gt,"trigger",ii,"draw-save-boost")}}}if(yn=Math.max(en>.8?.005:.08,Math.min(.99,yn)),Math.random()<yn){ei(l.team,"goalkeeperSaves"),ji(a.ball,"save",void 0,{minute:it.current,phase:a.phase,scoreBefore:{home:a.score.home,away:a.score.away},scoreAfter:{home:a.score.home,away:a.score.away}});let Mt=.4*ln(l,"awareness");Ni>30?Mt=.88:Ni>18?Mt=.55:Mt=.15,Mt=Math.max(.08,Math.min(.95,Mt)),Math.random()<Mt?(ei(l.team,"goalkeeperCatches"),ot(l,"catch",Pt/3.8),Be("parry",Pt/4.4,l.x,l.z,a.ball.y),a.ball.ownerId=l.id,a.ball.vx=0,a.ball.vz=0,a.ball.y=0,a.ball.vy=0,a.possession=l.team,a.ball.cooldown=1500,a.ball.lastHolderId=l.id,a.action={type:"NONE",sourceId:l.id,targetId:null,timer:500},l.action="RECEIVE",l.actionTimer=800):(ei(l.team,"goalkeeperParries"),ot(l,"save",Pt/3.2),a.ball.lastHolderId=l.id,d1(a.ball,l.x,l.z,{goalX:Xn,sideBias:a.ball.z-l.z}),Be("parry",Pt/3.6,l.x,l.z,a.ball.y),a.ball.cooldown=500)}}}}else if(!O&&l.team!==a.possession&&l.action==="NONE"){const Dt=Kt.current===1,cn=l.team==="HOME"?Dt?l.x<-35:l.x>35:Dt?l.x>35:l.x<-35,qt=!Me||cn,De=a.ball.ownerId?pt.get(a.ball.ownerId):void 0,kt=(l.team==="HOME"?$n:ti).indexOf(l.id),Ei=kt>=0&&kt<2;if(Ei&&(g.tackleCandidates+=1),De&&Ei&&Qt<4){const wt=Math.sqrt(l.vx*l.vx+l.vz*l.vz),Ze=Math.sqrt(De.vx*De.vx+De.vz*De.vz);(g.contactDistance===void 0||Qt<g.contactDistance)&&(g.holderId=De.id,g.holderName=De.name,g.nearestDefenderId=l.id,g.nearestDefenderName=l.name,g.contactDistance=Number(Qt.toFixed(2)),g.holderSpeed=Number(Ze.toFixed(3)),g.defenderSpeed=Number(wt.toFixed(3))),Po("contact",0,{holderId:De.id,holderName:De.name,nearestDefenderId:l.id,nearestDefenderName:l.name,distance:Number(Qt.toFixed(2)),holderSpeed:Number(Ze.toFixed(3)),defenderSpeed:Number(wt.toFixed(3)),phase:a.phase,actionType:a.action.type,freezeBefore:rs.current,tackleCandidates:g.tackleCandidates,tackleAttempts:g.tackleAttempts})}const Oi=De&&De.role==="GK";let _n=!1;Oi&&De&&(De.team==="HOME"?Dt?De.x<-33:De.x>33:Dt?De.x>33:De.x<-33)&&Math.abs(De.z)<20.15&&(_n=!0);const ms=(l.tackleCooldown||0)<=0||l.tackleTargetId!==(De==null?void 0:De.id),$i=kt===0?2.85:2.45,mt=De?ke().filter(wt=>wt.team===l.team&&wt.id!==l.id&&Math.sqrt((wt.x-De.x)**2+(wt.z-De.z)**2)<4.2).length:0;let Pt=0;if(De&&Qt<2.75&&qt&&a.ball.cooldown<=0&&Ei&&!_n&&ms&&De.role!=="GK"&&De.action!=="SHOOT"&&De.actionTimer<=0){const wt=ln(De,"dribbling"),Ze=ln(De,"speed"),Zt=ln(De,"strength"),Xn=ln(De,"awareness"),Zn=ln(l,"tackling"),Ni=ln(l,"strength"),Bn=ln(l,"awareness"),wi=wt*.45+Ze*.25+Zt*.15+Xn*.15+ys(De.team)*.08,yn=Zn*.45+Ni*.25+Bn*.2+Math.max(0,(2.75-Qt)/2.75)*.1+ys(l.team)*.06,Pi=Math.max(0,mt-1)*.08,Se=_e(.43+(wi-yn)*.55-Pi,.18,.76);if(wt>Zn*.78||Math.random()<_e(.2+wt*.26,.18,.52)){if(Math.random()<Se){const en=Hs(De.team),nn=Math.sign(De.z-l.z||De.vz||Math.random()-.5||1),Mt=_e(.72+(Ze-.75)*.35+(wt-Zn)*.18,.52,1.16);De.vx=en*Mt,De.vz=nn*(.62+wt*.28),De.x+=en*(.8+wt*.55),De.z+=nn*(.8+wt*.65),De.action="DRIBBLE",De.actionTimer=650,l.vx-=en*.22,l.vz-=nn*.28,l.tackleCooldown=620,l.tackleTargetId=De.id,a.action={type:"DRIBBLE",sourceId:De.id,targetId:null,timer:520},a.ball.cooldown=460,a.ball.lastTouchType="DRIBBLE",Nc(De.team,De.z),Be("dribble",1.1+wt*.35,De.x,De.z,.05);return}Pt=_e(.1+(yn-wi)*.18,.06,.18),De.action="DRIBBLE",De.actionTimer=320}}if(De&&Qt<$i&&qt&&a.ball.cooldown<=0&&Ei&&!_n&&ms){g.tackleAttempts+=1,ei(l.team,"tackleAttempts"),l.tackleCooldown=kt===0?240:300,l.tackleTargetId=De.id;const wt=l.team==="HOME"?zi.current:En.current,Ze=Math.max(0,($i-Qt)/$i)*.16,Zt=kt===0?.08:.03,Xn=ys(l.team),Zn=Math.min(.08,mt*.035),Ni=Wr(wt,{qualityEdge:Xn,tackleRankBoost:Zt,tackleProximityBoost:Ze,doubleTeamBoost:Zn,tacklingAttribute:ln(l,"tackling")}),Bn=Math.max(.08,Math.min(.42,.08+Ni.tackleAttemptBias+(l.team==="HOME"?Ee.pressTackleBonus:0)+Pt));if(Math.random()<Bn){l.action="TACKLE";const wi=Math.sqrt(l.vx*l.vx+l.vz*l.vz)||.1,yn=Hs(l.team),Pi=wi>.1?l.vx/wi:yn,Se=wi>.1?l.vz/wi:0;l.vx=Pi*.65,l.vz=Se*.65;const Ht=De?ln(De,"strength"):1,en=De?ln(De,"dribbling"):1,nn=ln(l,"tackling")*ln(l,"strength")/(Ht*en),Mt=Math.max(.16,Math.min(.72,.38*nn+Ze*.5+Zn*.6+Xn*.1+(kt===0?.04:-.02)+Pt*.55+(l.team==="HOME"?Ee.counterPressRecovery:0)));Math.random()<Mt?(a.ball.ownerId=l.id,l.team==="HOME"&&Ee.counterPressRecovery>0&&cs("gegenpress_fever","success",`高位压迫发烧包：二次反抢成功率 +${Math.round(Ee.counterPressRecovery*100)}%`,"counterpress-recovery"),Pc(l.team,l.x,l.team!==a.possession),a.possession=l.team,a.ball.cooldown=700,a.action={type:"TACKLE",sourceId:l.id,targetId:null,timer:400},l.actionTimer=1e3,Qn(a,l.team,"tackle",`${l.name} 贴身上抢，从 ${De.name} 脚下完成断球。`,2),Math.random()<.06&&Oe(l,a)):(l.actionTimer=1350,l.vx*=1.45,l.vz*=1.45,Oe(l,a))}}}});const jo=!["PREPARE","FOUL","PENALTY","FREEKICK","GOALKICK","CORNER","KICKOFF","THROWIN","CELEBRATE"].includes(a.phase),Ep=()=>{if(!jo||!a.ball.ownerId)return!1;const l=pt.get(a.ball.ownerId);if(!l||Math.abs(l.z)<=em)return!1;const O=Math.sign(l.z||1),Re=l.team==="HOME"?"AWAY":"HOME",Me=Ho(Re,"THROWIN",le),be=_e(l.x,-51.5,51.5),de=O*(Tr+.45);l.z=O*il,l.vx=0,l.vz=0,a.phase="PREPARE",a.prepareTimer=650,a.possession=Re,a.setPiece={type:"THROWIN",kickerId:Me.id,pos:{x:be,z:O*Tr},distance:20,exitPos:{x:be,z:de}},Be("touchline",1.1,be,O*Tr,0),a.ball={x:be,z:de,y:0,vx:0,vz:0,vy:0,ownerId:null,lastHolderId:l.id,cooldown:900,collisionEffect:a.ball.collisionEffect,lastTouchType:"DRIBBLE"},a.action={type:"NONE",sourceId:null,targetId:null,timer:0};const Qe=se=>se.map(Q=>{const At=io(Q,a.setPiece,Re,le);return Q.resetTarget=At,Q.resetDelay=Math.random()*40,Q.vx=0,Q.vz=0,Q.action="NONE",Q.actionTimer=0,Q});a.home=Qe(a.home),a.away=Qe(a.away);const ct=Re==="HOME"?n.name:e||"对手";return a.events=[{id:Ye("throwin"),min:it.current,type:"INCIDENT",team:Re,description:`${l.name} 将球带出边线，${ct} 获得界外球。`},...a.events].slice(0,50),!0},wp=()=>{if(!jo||a.ball.ownerId||Math.abs(a.ball.z)<=em)return!1;const l=Math.sign(a.ball.z||1),O=a.ball.lastHolderId?pt.get(a.ball.lastHolderId):void 0,Re=(O==null?void 0:O.team)==="HOME"?"AWAY":(O==null?void 0:O.team)==="AWAY"?"HOME":a.possession==="HOME"?"AWAY":"HOME",Me=Ho(Re,"THROWIN",le),be=_e(a.ball.x,-51.5,51.5),de=l*(Tr+.45);a.phase="PREPARE",a.prepareTimer=650,a.possession=Re,a.setPiece={type:"THROWIN",kickerId:Me.id,pos:{x:be,z:l*Tr},distance:20,exitPos:{x:be,z:de}},Be("touchline",1.15,be,l*Tr,a.ball.y),a.ball={x:be,z:de,y:0,vx:0,vz:0,vy:0,ownerId:null,lastHolderId:(O==null?void 0:O.id)||a.ball.lastHolderId||null,cooldown:900,collisionEffect:a.ball.collisionEffect,lastTouchType:a.ball.lastTouchType||"PASS"},a.action={type:"NONE",sourceId:null,targetId:null,timer:0};const Qe=Q=>Q.map(At=>{const ze=io(At,a.setPiece,Re,le);return At.resetTarget=ze,At.resetDelay=Math.random()*40,At.vx=0,At.vz=0,At.action="NONE",At.actionTimer=0,At});a.home=Qe(a.home),a.away=Qe(a.away);const ct=Re==="HOME"?n.name:e||"对手",se=O?`${O.name} 最后触球`:"皮球飞出边线";return a.events=[{id:Ye("throwin"),min:it.current,type:"INCIDENT",team:Re,description:`${se}，${ct} 获得界外球。`},...a.events].slice(0,50),!0};if(Ep())return a.home=ye(le.filter(l=>l.team==="HOME").map(l=>l)),a.away=ye(le.filter(l=>l.team==="AWAY").map(l=>l)),ra.current=a.phase,g.returnedEarlyReason="phase-prepare",a;if(jo&&ke().forEach(l=>{if(l.role==="GK")return;const O=a.ball.ownerId===l.id?il:ic;l.z>O?(l.z=O,l.vz=Math.min(0,l.vz)*.35):l.z<-O&&(l.z=-O,l.vz=Math.max(0,l.vz)*.35)}),a.ball.ownerId){a.ball.isThrown=!1,a.ball.customGravity=void 0;const l=pt.get(a.ball.ownerId);if(l){const O=Math.sqrt(l.vx*l.vx+l.vz*l.vz);let Re=Hs(l.team),Me=0;O>.05?(Re=l.vx/O,Me=l.vz/O,l.lastDirX=Re,l.lastDirZ=Me):l.lastDirX!==void 0&&l.lastDirZ!==void 0?(Re=l.lastDirX,Me=l.lastDirZ):(Re=Hs(l.team),Me=0);const be=1;let de=l.x+Re*be,Qe=l.z+Me*be;const ct=53.2,se=Tr-zu;de=Math.max(-ct,Math.min(ct,de)),Qe=Math.max(-se,Math.min(se,Qe)),a.ball.x=de,a.ball.z=Qe,a.ball.y=0,a.ball.vx=0,a.ball.vz=0,a.ball.vy=0}}else{const l=a.ball.x,O=a.ball.z,Re=a.ball.y;a.ball.x+=a.ball.vx,a.ball.z+=a.ball.vz,a.ball.y+=a.ball.vy;let Me=a.ball.y>.1?.985:.88;if(a.ball.vx*=Me,a.ball.vz*=Me,wp())return a.home=ye(le.filter(un=>un.team==="HOME").map(un=>un)),a.away=ye(le.filter(un=>un.team==="AWAY").map(un=>un)),ra.current=a.phase,g.returnedEarlyReason="phase-prepare",a;const be=34.2;a.ball.z>be?(a.ball.z=be,a.ball.vz=-Math.abs(a.ball.vz)*.45,a.ball.vx*=.65,Be("touchline",Math.sqrt(a.ball.vx*a.ball.vx+a.ball.vz*a.ball.vz)/3.2)):a.ball.z<-be&&(a.ball.z=-be,a.ball.vz=Math.abs(a.ball.vz)*.45,a.ball.vx*=.65,Be("touchline",Math.sqrt(a.ball.vx*a.ball.vx+a.ball.vz*a.ball.vz)/3.2));let de=!1;const Qe=Math.abs(a.ball.x),ct=Math.abs(a.ball.z),Q=Math.sign(a.ball.x||l||1)*52.5,At=a.ball.x-l,ze=Math.abs(At)>.001?(Q-l)/At:-1,dn=ze>=0&&ze<=1,Rn=dn?O+(a.ball.z-O)*ze:a.ball.z,Mn=dn?Re+(a.ball.y-Re)*ze:a.ball.y;if(Qe>=52.35&&Qe<=52.95||dn){const un=dn?Math.abs(Rn):ct,ci=dn?Mn:a.ball.y;if(un>=5.68&&un<=6.34&&ci<=2.58){de=!0,a.ball.x>0?(a.ball.vx=-Math.abs(a.ball.vx||3.5)*(.72+Math.random()*.22),a.ball.x=52.3):(a.ball.vx=Math.abs(a.ball.vx||3.5)*(.72+Math.random()*.22),a.ball.x=-52.3);const Yn=Math.sign(Rn||a.ball.z||1);a.ball.z=Yn*5.95,a.ball.vz=Yn*(2.2+Math.random()*2.2)-a.ball.vz*.28,a.ball.vy=Math.max(.08,a.ball.vy*.45+Math.random()*.35),Be("woodwork",1.9,a.ball.x,a.ball.z,Math.max(.35,ci)),a.ball.cooldown=400,a.events=[{id:Ye("post"),min:it.current,type:"INCIDENT",team:a.possession,description:"💥 哐！惊魂一刻！球击中立柱猛烈反弹回场内！球门立柱都在微微发颤！"},...a.events].slice(0,50)}else ci>=2.28&&ci<=2.68&&un<=6.12&&(de=!0,a.ball.x>0?(a.ball.vx=-Math.abs(a.ball.vx||3.5)*(.68+Math.random()*.2),a.ball.x=52.3):(a.ball.vx=Math.abs(a.ball.vx||3.5)*(.68+Math.random()*.2),a.ball.x=-52.3),a.ball.y=2.44,a.ball.vy=-Math.abs(a.ball.vy||.4)*(.72+Math.random()*.18)-.32,a.ball.vz+=(Math.random()-.5)*2.8,Be("woodwork",2,a.ball.x,a.ball.z,2.44),a.ball.cooldown=400,a.events=[{id:Ye("bar"),min:it.current,type:"INCIDENT",team:a.possession,description:"💥 哐当！雷霆万钧的重槌！皮球狠狠敲在门楣横梁上弹回！差了一个公分的绝杀死角！"},...a.events].slice(0,50))}const Ut=a.ball.x<-52.5&&Math.abs(a.ball.z)<6&&a.ball.y<2.44&&!de,Nn=a.ball.x>52.5&&Math.abs(a.ball.z)<6&&a.ball.y<2.44&&!de;Ut||Nn?(a.ball.vx*=.15,a.ball.vz*=.15,a.ball.vy*=.25,Be("net",1.35),Ut?(a.ball.x<-54.2&&(a.ball.x=-54.2,a.ball.vx=Math.abs(a.ball.vx)*.05),a.ball.x>-52.6&&(a.ball.x=-52.6,a.ball.vx=-Math.abs(a.ball.vx)*.05),a.ball.x=Math.min(a.ball.x,-53.35)):(a.ball.x>54.2&&(a.ball.x=54.2,a.ball.vx=-Math.abs(a.ball.vx)*.05),a.ball.x<52.6&&(a.ball.x=52.6,a.ball.vx=Math.abs(a.ball.vx)*.05),a.ball.x=Math.max(a.ball.x,53.35)),a.ball.z>5.8?(a.ball.z=5.8,a.ball.vz=-Math.abs(a.ball.vz)*.05):a.ball.z<-5.8&&(a.ball.z=-5.8,a.ball.vz=Math.abs(a.ball.vz)*.05),a.ball.y>2.4&&(a.ball.y=2.4,a.ball.vy=-Math.abs(a.ball.vy)*.05)):Math.abs(a.ball.z)<6&&a.ball.y<2.44&&!de&&(a.ball.x>53.5?(a.ball.x=53.5,a.ball.vx=0,a.ball.vz=0):a.ball.x<-53.5&&(a.ball.x=-53.5,a.ball.vx=0,a.ball.vz=0));const tn=a.ball.customGravity!==void 0?a.ball.customGravity:.05;a.ball.y>0?a.ball.vy-=tn:(a.ball.y=0,a.ball.vy<-.1?(a.ball.vy=-a.ball.vy*.3,a.ball.vx*=.6,a.ball.vz*=.6,Be("turf",Math.max(.35,Math.abs(a.ball.vy)+Math.sqrt(a.ball.vx*a.ball.vx+a.ball.vz*a.ball.vz)/5))):(a.ball.vy=0,a.ball.customGravity=void 0,Math.sqrt(a.ball.vx*a.ball.vx+a.ball.vz*a.ball.vz)<.04&&ji(a.ball,"unresolved",void 0,{minute:it.current,phase:a.phase,scoreBefore:{home:a.score.home,away:a.score.away},scoreAfter:{home:a.score.home,away:a.score.away},unresolvedReason:"deadBallStopped"})));const Tn=a.ball.lastTouchType==="FREEKICK"||a.ball.lastTouchType==="CORNER"||a.ball.lastTouchType==="PENALTY",Gs=Tn?.95:1.8;if(a.ball.y<Gs){const un=a.ball.x-a.ball.vx,ci=a.ball.z-a.ball.vz,ni=ke().filter(Yn=>{var Qt;if(Yn.role==="GK"||Yn.team===a.possession)return!1;const Ii=a.ball.x-un,Pn=a.ball.z-ci,qn=Yn.x-un,Qs=Yn.z-ci,Vs=Ii*Ii+Pn*Pn;let ds=0;Vs>.001&&(ds=(qn*Ii+Qs*Pn)/Vs,ds=Math.max(0,Math.min(1,ds)));const us=un+ds*Ii,Ns=ci+ds*Pn,Ps=(Yn.x-us)**2+(Yn.z-Ns)**2,Ra=((Qt=a.ball.lastShot)==null?void 0:Qt.team)||a.possession,Ws=er(Ra),br=Math.max(0,ys(Ra)-ys(Yn.team)),ea=_e(Ws*.52+br*.18,0,.72),Ae=Yn.team==="HOME"?Ee.boxDefenseBonus:0,hn=(Tn?.82:1.25)*(1-ea+Ae);return Ps<hn*hn});if(ni.length>0){ni.sort((us,Ns)=>{const Ps=(us.x-un)**2+(us.z-ci)**2,Ra=(Ns.x-un)**2+(Ns.z-ci)**2;return Ps-Ra});const Yn=ni[0];ji(a.ball,"blocked",void 0,{minute:it.current,phase:a.phase,scoreBefore:{home:a.score.home,away:a.score.away},scoreAfter:{home:a.score.home,away:a.score.away}});const Ii=Math.sqrt(a.ball.vx*a.ball.vx+a.ball.vz*a.ball.vz)||1,Pn=a.ball.vx/Ii,qn=a.ball.vz/Ii,Qs=Math.sign(Yn.z-ci||Math.random()-.5||1),Vs=Yn.x-Pn*(5+Ii*1.5),ds=Yn.z-qn*2+Qs*(2.5+Math.random()*4);if(dc(a.ball,Vs,ds,{speedMultiplier:.42,minSpeed:1.8,maxSpeed:4.2,targetY:.45+Math.random()*.25,maxHeight:Math.max(a.ball.y+.35,1.15)}),ot(Yn,Yn.role==="GK"?"save":"block",Ii/3.2),Be("block",Ii/3.5,Yn.x,Yn.z,a.ball.y),a.ball.lastHolderId=Yn.id,Math.random()<.1&&(a.events=[{id:Ye("wall"),min:it.current,type:"INCIDENT",team:Yn.team,description:`${Yn.name} 奋力阻击了对方的攻势！`},...a.events].slice(0,50)),Yn.team==="HOME"&&Ee.boxDefenseBonus>0){const us=ma(["box_lock","iron_wall_cb","goalkeeper_scorpion","var_eye","bus_parking_permit"]);if(us){const Ps=`${ta(us,Je)}：封堵范围 +${Math.round(Ee.boxDefenseBonus*100)}%，挡下一次危险球`;cs(us,"success",Ps,"box-block")}}}}}if(jo&&a.ball.ownerId&&Math.abs(a.ball.x)>Ql&&(a.ball.lastHolderId=a.ball.ownerId,a.ball.ownerId=null,a.ball.vx=0,a.ball.vz=0,a.ball.vy=0,a.action={type:"NONE",sourceId:null,targetId:null,timer:0}),!a.ball.ownerId&&jo&&Math.abs(a.ball.x)>Ql){let l=Math.abs(a.ball.z)<6&&a.ball.y<2.44;if(l&&Ee.activeIds.includes("twelfth_post")){const O=((Ke=a.ball.lastShot)==null?void 0:Ke.team)||a.possession,Re=O==="HOME"?Ee.woodworkHomeBonus:Ee.woodworkAwayBonus;if(Math.random()<Re){l=!1,ji(a.ball,"post",void 0,{minute:it.current,phase:a.phase,scoreBefore:{home:a.score.home,away:a.score.away},scoreAfter:{home:a.score.home,away:a.score.away}});const Me=a.ball.x>0?-1:1;a.ball.x=a.ball.x>0?52.3:-52.3,a.ball.vx=Math.abs(a.ball.vx||.7)*Me*.6,a.ball.vz=-a.ball.vz*.25+(Math.random()-.5)*1.2,Be("woodwork",1.4),a.ball.cooldown=500,cs("twelfth_post",O==="HOME"?"backfire":"success",O==="HOME"?"门柱是第十二人：它救人，也会挡住自己的远射":"门柱是第十二人：对手的必进球被门框拒绝",`post-${O}-${it.current}`)}}if(l){const O=a.ball.x>0?1:-1;a.ball.x=O*53.85,a.ball.z=_e(a.ball.z,-4.9,4.9),a.ball.y=_e(a.ball.y,.18,1.85),a.ball.vx=O*.02,a.ball.vz*=.04,a.ball.vy*=.04,a.ball.cooldown=1800,Be("net",1.65,a.ball.x,a.ball.z,a.ball.y);const Re={...a.action},Me={x:a.ball.x,z:a.ball.z,y:a.ball.y,vx:a.ball.vx,vz:a.ball.vz,vy:a.ball.vy},be=a.ball.lastTouchType,de=a.phase,Qe=Kt.current===1,ct=a.ball.x>0?Qe?"HOME":"AWAY":Qe?"AWAY":"HOME",se={home:a.score.home,away:a.score.away};ct==="HOME"?a.score.home+=1:a.score.away+=1,a.phase="CELEBRATE",a.prepareTimer=1800,a.possession=ct==="HOME"?"AWAY":"HOME",a.action={type:"NONE",sourceId:null,targetId:null,timer:0},K({team:ct,show:!0,scoreTotal:a.score.home+a.score.away}),oa.current=!0;const Q=le.find(un=>un.id===a.ball.lastHolderId),At=Re.sourceId?le.find(un=>un.id===Re.sourceId):void 0,ze=!!Q&&Q.team!==ct,dn=(Q==null?void 0:Q.role)==="GK"||(Q==null?void 0:Q.realPosition)==="GK",Rn=Q&&Q.team===ct&&!dn?Q:null,Mn=Rn?Rn.name:ze?`${(Q==null?void 0:Q.name)||"Own goal"} (OG)`:ct==="HOME"?n.name:I||"Opponent";let Ut;if(Rn&&a.ball.lastAssisterId){const un=le.find(ci=>ci.id===a.ball.lastAssisterId);un&&un.team===Rn.team&&un.id!==Rn.id&&un.role!=="GK"&&un.realPosition!=="GK"&&(Ut=un.name)}const Nn=a.score.home+a.score.away,tn=`${Nn}:${ct}:${it.current}:${Mn}:${Ut||""}`,Tn=C.current.some(un=>un.goalKey===tn),Gs=C.current.length<Nn&&!Tn;if(Gs&&!ze&&Re.type!=="SHOOT"&&!a.ball.lastShot){const un=Q?Math.sqrt((Me.x-Q.x)**2+(Me.z-Q.z)**2):0,ci=zs(be);fa(ct,un,Me.z,!0,ci),Rs(a.ball,ct,!0,ci)}ji(a.ball,"goal",void 0,{minute:it.current,phase:de,scoreBefore:se,scoreAfter:{home:a.score.home,away:a.score.away}}),Gs&&C.current.push({playerName:Mn,minutes:it.current,assistBy:Ut,team:ct,isOwnGoal:ze,lastTouchType:be,lastHolder:Q?{id:Q.id,name:Q.name,team:Q.team,role:Q.role,realPosition:Q.realPosition}:null,actionSource:At?{id:At.id,name:At.name,team:At.team,role:At.role,realPosition:At.realPosition}:null,actionType:Re.type,resolvingPhase:de,ball:Me,goalKey:tn}),a.events=[{id:Ye("goal"),min:it.current,type:"GOAL",team:ct,scorerName:Mn,assistName:Ut,isOwnGoal:ze,description:`得分！！${Mn} 打入一球！${Ut?`（助攻：${Ut}）`:""}`},...a.events].slice(0,50)}else{const O=a.ball.x>0?1:-1,Re=Math.abs(a.ball.z)<6.45?Math.sign(a.ball.z||Math.random()-.5||1)*7.25:a.ball.z;a.ball.x=O*55.3,a.ball.z=_e(Re,-32.5,32.5),a.ball.y=_e(a.ball.y,0,2.9),a.ball.vx=O*.65,a.ball.vz*=.25,a.ball.vy*=.25,Be("out",1.2,a.ball.x,a.ball.z,a.ball.y),ji(a.ball,"out",void 0,{minute:it.current,phase:a.phase,scoreBefore:{home:a.score.home,away:a.score.away},scoreAfter:{home:a.score.home,away:a.score.away}});const Me=a.ball.x>0,be={x:a.ball.x,z:a.ball.z},de=le.find(ze=>ze.id===a.ball.lastHolderId),Qe=Kt.current===1,Q=Me?Qe?"AWAY":"HOME":Qe?"HOME":"AWAY";if(de?de.team===Q:!1){const ze=Q==="HOME"?"AWAY":"HOME",dn=Ho(ze,"CORNER",le),Rn=Me?1:-1,Mn=a.ball.z>0?34:-34;a.phase="PREPARE",a.prepareTimer=1100,a.possession=ze,ji(a.ball,"unresolved",void 0,{minute:it.current,phase:a.phase,scoreBefore:{home:a.score.home,away:a.score.away},scoreAfter:{home:a.score.home,away:a.score.away},unresolvedReason:"phaseReset"}),a.setPiece={type:"CORNER",kickerId:dn.id,pos:{x:Rn*52.5,z:Mn},distance:35,exitPos:be};const Ut=tn=>tn.map(Tn=>{const Gs=io(Tn,a.setPiece,ze,le);return Tn.resetTarget=Gs,Tn.resetDelay=Math.random()*120,Tn.vx=0,Tn.vz=0,Tn.action="NONE",Tn.actionTimer=0,Tn});a.home=Ut(a.home),a.away=Ut(a.away),a.ball={x:be.x,z:be.z,y:0,vx:0,vz:0,vy:0,ownerId:null,lastHolderId:null,cooldown:1e3,collisionEffect:a.ball.collisionEffect},a.action={type:"NONE",sourceId:null,targetId:null,timer:0};const Nn=ze==="HOME"?n.name:e||"对手";a.events=[{id:Ye("corner"),min:it.current,type:"INCIDENT",team:ze,description:`${Nn} 获得角球，全队压入禁区寻找落点！`},...a.events].slice(0,50)}else{const ze=Q,dn=Ho(ze,"GOALKICK",le),Rn=ze==="HOME"?Qe?-1:1:Qe?1:-1;a.phase="PREPARE",a.prepareTimer=2600,a.possession=ze,ji(a.ball,"unresolved",void 0,{minute:it.current,phase:a.phase,scoreBefore:{home:a.score.home,away:a.score.away},scoreAfter:{home:a.score.home,away:a.score.away},unresolvedReason:"phaseReset"}),a.setPiece={type:"GOALKICK",kickerId:dn.id,pos:{x:Rn*48,z:0},distance:50,exitPos:be};const Mn=Nn=>Nn.map(tn=>{const Tn=io(tn,a.setPiece,ze,le);return tn.resetTarget=Tn,tn.resetDelay=Math.random()*120,tn.vx=0,tn.vz=0,tn.action="NONE",tn.actionTimer=0,tn});a.home=Mn(a.home),a.away=Mn(a.away),a.ball={x:be.x,z:be.z,y:0,vx:0,vz:0,vy:0,ownerId:null,lastHolderId:null,cooldown:1e3,collisionEffect:a.ball.collisionEffect},a.action={type:"NONE",sourceId:null,targetId:null,timer:0};const Ut=ze==="HOME"?n.name:e||"对手";a.events=[{id:Ye("goalkick"),min:it.current,type:"INCIDENT",team:ze,description:`${Ut} 开出球门球。`},...a.events].slice(0,50)}}}return a.home=ye(le.filter(l=>l.team==="HOME").map(l=>l)),a.away=ye(le.filter(l=>l.team==="AWAY").map(l=>l)),ra.current=a.phase,a}catch(Oe){console.error("Match Sim tick caught exception:",Oe);const a={...m};return q=a,a.phase="BUILDUP",a.setPiece=null,a.ball.ownerId=null,a.ball.vx=0,a.ball.vz=0,a.ball.x=0,a.ball.z=0,rs.current=0,os.current=null,a}finally{const Oe=performance.now()-T;q&&(ra.current=q.phase),g.freezeAfter=rs.current;const a=W.filter(ot=>!ot.sentOff);let le=0,Pe=0;const ye=.015,ke=ot=>{if(!ot)return;const St=W.find($n=>$n.id===ot),It=U.get(ot);if(!(!St||!It))return Math.sqrt((St.x-It.x)**2+(St.z-It.z)**2)};a.forEach(ot=>{const St=U.get(ot.id);if(!St)return;const It=Math.sqrt((ot.x-St.x)**2+(ot.z-St.z)**2);le+=It,It>ye&&(Pe+=1)}),g.allPlayersDelta=Number(le.toFixed(4)),g.movingPlayerCount=Pe,g.holderDelta=ke(g.holderId),g.holderDelta!==void 0&&(g.holderDelta=Number(g.holderDelta.toFixed(4))),g.defenderDelta=ke(g.nearestDefenderId),g.defenderDelta!==void 0&&(g.defenderDelta=Number(g.defenderDelta.toFixed(4))),g.phaseAfter=(q==null?void 0:q.phase)??ra.current,g.actionAfter=((qe=q==null?void 0:q.action)==null?void 0:qe.type)??g.action,g.freezeReason=g.freezeReason||os.current||(g.freezeAfter&&g.freezeAfter>0?"unknown":null);const pt=new Set(["FOUL","PREPARE","FREEKICK","PENALTY","CORNER","GOALKICK","THROWIN","CELEBRATE","KICKOFF","SETPIECE"]),jt=!!(g.phase&&pt.has(g.phase)||g.phaseAfter&&pt.has(g.phaseAfter)),Be=g.freezeReason==="foul"||g.freezeReason==="card"||g.freezeReason==="shot"||g.freezeReason==="setPiece";g.expectedPause=!!(g.foulTriggered||g.cardTriggered||g.setPieceTriggered||jt||Be),g.pauseReason=g.cardTriggered?`card:${g.cardType||"unknown"}`:g.foulTriggered?"foul":g.setPieceTriggered?"setPiece":Be?`freeze:${g.freezeReason}`:jt?`phase:${g.phaseAfter}`:void 0,g.contactDistance!==void 0&&(Po("contactTick",Oe,{holderId:g.holderId,holderName:g.holderName,nearestDefenderId:g.nearestDefenderId,nearestDefenderName:g.nearestDefenderName,distance:g.contactDistance,holderSpeed:g.holderSpeed,defenderSpeed:g.defenderSpeed,phase:g.phase,actionType:g.action,freezeBefore:g.freezeBefore,freezeAfter:g.freezeAfter,freezeReason:g.freezeReason,expectedPause:g.expectedPause,pauseReason:g.pauseReason,tackleCandidates:g.tackleCandidates,tackleAttempts:g.tackleAttempts,foulTriggered:g.foulTriggered,cardTriggered:g.cardTriggered,cardType:g.cardType,setPieceTriggered:g.setPieceTriggered,allPlayersDelta:g.allPlayersDelta,movingPlayerCount:g.movingPlayerCount,holderDelta:g.holderDelta,defenderDelta:g.defenderDelta,returnedEarlyReason:g.returnedEarlyReason}),(g.foulTriggered||g.returnedEarlyReason!=="normal")&&Ed("[PERF][CONTACT]",{holderId:g.holderId,holderName:g.holderName,nearestDefenderId:g.nearestDefenderId,nearestDefenderName:g.nearestDefenderName,distance:g.contactDistance,holderSpeed:g.holderSpeed,defenderSpeed:g.defenderSpeed,phase:g.phase,actionType:g.action,freezeBefore:g.freezeBefore,freezeAfter:g.freezeAfter,freezeReason:g.freezeReason,expectedPause:g.expectedPause,pauseReason:g.pauseReason,tackleCandidates:g.tackleCandidates,tackleAttempts:g.tackleAttempts,foulTriggered:g.foulTriggered,cardTriggered:g.cardTriggered,cardType:g.cardType,setPieceTriggered:g.setPieceTriggered,allPlayersDelta:g.allPlayersDelta,movingPlayerCount:g.movingPlayerCount,returnedEarlyReason:g.returnedEarlyReason})),Po("matchSimTick",Oe,{...g}),Oe>16&&_c("[PERF][MatchSim tick]",{tickMs:Number(Oe.toFixed(2)),...g})}})},A.enabled?Math.max(10,A.minuteMs/20):50);return()=>clearInterval(c)},[A.enabled,A.minuteMs,Gi,Bt,h,Ot,n.name,e]),ce.useEffect(()=>{if(!Gi||Bt||as||h||Ot)return;const c=setInterval(()=>{["KICKOFF","SETPIECE","GOALKICK","FOUL","PREPARE","FREEKICK","PENALTY","CORNER","THROWIN"].includes(ra.current)||oa.current||Us(T=>(oi(g=>{const U=W=>W.map(q=>{const j=q.team==="HOME"?zi.current:En.current,te=W.length<11?1+(11-W.length)*.18:1,xe=q.team==="HOME"?Ee.staminaLossMultiplier*(Ee.activeIds.includes("face_is_overrated")&&j.pressingMode==="HIGH_PRESS"?1.08:1):1;return{...q,stamina:Math.max(8,(Number.isFinite(q.stamina)?q.stamina:100)-_1(q,j)*te*xe)}});return{...g,home:U(g.home),away:U(g.away)}}),T+1))},A.enabled?A.minuteMs:1e3);return()=>clearInterval(c)},[A.enabled,A.minuteMs,Gi,Bt,as,Hi,h,Ot,Ee]),ce.useEffect(()=>{if(!Gi||Bt||as||h||Ot)return;const c=()=>{const m=L.ball.x,T=L.possession,g=L.phase,U=L.action.type;return!!(["CORNER","PENALTY","FREEKICK","FOUL","PREPARE"].includes(g)||U==="SHOOT"||T==="HOME"&&m>30||T==="AWAY"&&m<-30)};if(yi>=45&&Hi===1){if(!c()||yi>=50){if(ss.current)return;ss.current=!0,qi(!1),Fa(!0),oi(m=>({...m,phase:"PREPARE",foulInfo:null,events:[{id:`half-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,min:45,type:"INCIDENT",team:"HOME",description:"上半场结束。"},...m.events]}))}}else if(yi>=90&&Hi===2){if(!c()||yi>=95){if(ss.current)return;ss.current=!0;const m=d>=4,T=L.score.home===L.score.away;m&&T?(qi(!1),We(!0),oi(g=>({...g,phase:"PREPARE",foulInfo:null,events:[{id:`90draw-${Date.now()}`,min:90,type:"INCIDENT",team:"HOME",description:"常规时间战平！即将进入加时赛！"},...g.events]}))):(Ti(!0),qi(!1),oi(g=>({...g,phase:"BUILDUP",foulInfo:null,events:[{id:`end-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,min:90,type:"INCIDENT",team:"HOME",description:"全场比赛结束！"},...g.events]})))}}else if(yi>=105&&Hi===3){if(!c()||yi>=110){if(ss.current)return;ss.current=!0,qi(!1),Xt(!0),oi(m=>({...m,phase:"PREPARE",foulInfo:null,events:[{id:`et15half-${Date.now()}`,min:105,type:"INCIDENT",team:"HOME",description:"加时赛上半场结束，两队易边再战！"},...m.events]}))}}else if(yi>=120&&Hi===4&&(!c()||yi>=125)){if(ss.current)return;ss.current=!0,L.score.home===L.score.away?(qi(!1),si(!0),oi(T=>({...T,phase:"PREPARE",foulInfo:null,events:[{id:`et30draw-${Date.now()}`,min:120,type:"INCIDENT",team:"HOME",description:"加时赛鏖战结束，双方依然平局！即将进入残酷的点球大战！"},...T.events]}))):(Ti(!0),qi(!1),oi(T=>({...T,phase:"BUILDUP",foulInfo:null,events:[{id:`etend-${Date.now()}`,min:120,type:"INCIDENT",team:"HOME",description:"加时赛全场比赛结束！"},...T.events]})))}},[yi,Gi,Bt,as,Hi,h,Ot,L.ball.x,L.possession,L.phase,L.action.type]);const vl=[...L.home,...L.away].find(c=>c.id===L.ball.ownerId),ro=ce.useMemo(()=>{const c=k.current,m=L.home.filter(q=>q.role!=="GK"&&!q.sentOff&&!F.current.has(q.id)),T=m.length?Math.round(m.reduce((q,j)=>q+Math.abs(j.x),0)/m.length):0,g=c.attackActions>0?Math.round(c.wideActions/c.attackActions*100):m.length?Math.round(m.filter(q=>Math.abs(q.z)>20).length/m.length*100):0,U=c.passAttempts>0?Math.round(c.longPasses/c.passAttempts*100):0,W=c.passAttempts>0?Math.round(c.shortPasses/c.passAttempts*100):0;return{avgLineHeight:T,wideShare:g,tackles:c.tackleAttempts,fouls:c.fouls,directShare:U,shortShare:W}},[L.action.type,L.disciplineEvents,L.home,L.phase]),Wo=ce.useMemo(()=>{const c=(L.disciplineEvents||[]).filter(j=>j.team==="HOME"),m=c.filter(j=>j.type==="FOUL"||j.type==="PENALTY_FOUL"),T=c.filter(j=>j.type==="YELLOW"||j.type==="SECOND_YELLOW"),g=c.filter(j=>j.type==="RED"||j.type==="SECOND_YELLOW"),U=new Map;c.forEach(j=>{const te=U.get(j.playerId)||{name:j.playerName,fouls:0,maxSeverity:0,cards:0};(j.type==="FOUL"||j.type==="PENALTY_FOUL")&&(te.fouls+=1),(j.type==="YELLOW"||j.type==="SECOND_YELLOW"||j.type==="RED")&&(te.cards+=1),te.maxSeverity=Math.max(te.maxSeverity,j.severity),U.set(j.playerId,te)});const W=Array.from(U.values()).sort((j,te)=>te.maxSeverity-j.maxSeverity||te.cards-j.cards).slice(0,3),q=Array.from(new Set(c.filter(j=>j.type==="RED"||j.type==="SECOND_YELLOW").map(j=>j.playerName)));return{fouls:m,yellows:T,reds:g,highRisk:W,suspendedNames:q}},[L.disciplineEvents]),kc=ce.useMemo(()=>L.events.filter(c=>c.type==="GOAL"||c.type==="SUB").map(c=>({minute:c.min,team:c.team,type:c.type,description:Cn(c).replace(/^得分！！/,"")})).sort((c,m)=>c.minute-m.minute),[Cn,L.events]),ah=ce.useMemo(()=>{const c=(L.disciplineEvents||[]).filter(T=>T.team==="HOME"),m=c.filter(T=>T.type==="YELLOW"||T.type==="SECOND_YELLOW"||T.type==="RED");return c.filter(T=>T.type==="FOUL"||T.type==="PENALTY_FOUL").map(T=>{const g=m.find(W=>W.playerId===T.playerId&&W.minute===T.minute),U=(g==null?void 0:g.type)==="SECOND_YELLOW"?"第二黄牌":(g==null?void 0:g.type)==="RED"?"红牌":(g==null?void 0:g.type)==="YELLOW"?"黄牌":null;return{minute:T.minute,playerName:T.playerName,foulType:T.reason.split(" / ")[0]||(T.type==="PENALTY_FOUL"?"禁区犯规":"犯规"),cardLabel:U}}).sort((T,g)=>T.minute-g.minute)},[L.disciplineEvents]);if(ws){if(L.home.length<11||L.away.length<11)return u.jsxs("div",{className:"col-span-12 h-[650px] flex flex-col items-center justify-center bg-slate-950 rounded-3xl border border-slate-800",children:[u.jsx("div",{className:"w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"}),u.jsx("p",{className:"text-slate-400 font-bold uppercase tracking-widest text-xs animate-pulse",children:"正在分析双方阵容与战术指标中..."})]});const c=L.home,m=L.away,T=Math.round(c.reduce((Pe,ye)=>Pe+Ds(ye),0)/11),g=Math.round(m.reduce((Pe,ye)=>Pe+Ds(ye),0)/11),U=[...c].sort((Pe,ye)=>Ds(ye)-Ds(Pe))[0],W=[...m].sort((Pe,ye)=>Ds(ye)-Ds(Pe))[0],q=Pe=>{const ye=Pe.filter(ot=>ot.role==="GK"),ke=Pe.filter(ot=>ot.role==="DEF"),pt=Pe.filter(ot=>ot.role==="MID"),jt=Pe.filter(ot=>ot.role==="FWD"),Be=ot=>ot.length===0?60:Math.round(ot.reduce((St,It)=>St+Ds(It),0)/ot.length);return{att:Be(jt),mid:Be(pt),def:Math.round(Be(ke)*.8+Be(ye)*.2)||Be(ke)}},j=q(c),te=q(m),Ke=j.mid>te.mid+2?{title:"中场传控优势明显",advice:`我方中场发动机群 (${j.mid} OVR) 优于对手中场拦截 (${te.mid} OVR)。本场在防守转进攻时可以积极以短传或肋部直传策动攻势，压制对手后半段攻防。`,focus:"高压控球 / 肋部直塞"}:j.att>te.def+2?{title:"锋线突击力撕扯对方后防",advice:`我方进攻线实力 (${j.att} OVR) 领先于对方防御屏障 (${te.def} OVR)。大中锋与边锋可以大举压上发起侧翼传中轰炸或中路切入直塞破门。`,focus:"两翼齐飞 / 中锋支点"}:j.def>te.att+2?{title:"钢铁防线铸就防反堡垒",advice:`我方后防盾牌 (${j.def} OVR) 极为坚实，完全看死对方锋线。防守得球后，可直接通过精确的长传转移或者大范围转移在对手失位时发动防守反击。`,focus:"防守反击 / 纵深长传"}:{title:"均衡博弈 细节定成败",advice:"两队三线战力极为接近。本场胜负多取决于战术调整状态与巨星明星队员的灵光一闪。可以依靠球员充沛的体能和局部短传快速渗透寻找防角漏洞。",focus:"单兵造险 / 紧逼高压"},qe=T-g,Oe=qe>=3?"我方纸面优势，可以主动压住节奏":qe<=-3?"对手纸面更强，先稳住关键区域":"双方接近，胜负更依赖临场调整",a=te.att>j.def+2?"对手锋线冲击高于我方防线":te.mid>j.mid+2?"中场控制权可能被对手抢走":te.def>j.att+2?"我方进攻会遇到密集封锁":"暂未发现单线崩盘点",le=()=>{Lr(!1),Ic()};return u.jsxs(Ks.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:.3},className:"col-span-12 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden relative font-sans",children:[u.jsx("div",{className:"absolute top-0 left-0 w-full h-[320px] bg-gradient-to-b from-slate-950/40 via-slate-900/10 to-transparent pointer-events-none"}),u.jsx("div",{className:"absolute top-10 left-12 w-80 h-80 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"}),u.jsx("div",{className:"absolute top-10 right-12 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"}),u.jsxs("div",{className:"hidden",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center",children:u.jsx(Th,{size:18,className:"text-emerald-450 text-emerald-400"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-[8px] text-emerald-400 font-extrabold uppercase tracking-[0.2em] mb-0.5",children:"Tactical Matchup Board • 专业赛前战前沙前分析"}),u.jsx("h3",{className:"text-sm font-black text-white uppercase tracking-tight flex items-center gap-2",children:u.jsxs("span",{children:["第 ",s," 周 经理战术排兵对阵"]})})]})]}),u.jsxs("div",{className:"hidden md:flex items-center gap-5 bg-slate-900 px-5 py-2 rounded-xl border border-slate-800/80 shadow-inner",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{className:"text-[10px] font-mono font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded leading-none",children:[T," OVR"]}),u.jsx("span",{className:"text-xs font-black text-slate-100 max-w-[120px] truncate",children:n.name})]}),u.jsx("span",{className:"text-[10px] font-black italic text-slate-500 leading-none",children:"VS"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-xs font-black text-slate-100 max-w-[120px] truncate",children:e}),u.jsxs("span",{className:"text-[10px] font-mono font-black text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded leading-none",children:[g," OVR"]})]})]}),u.jsx("button",{type:"button",onClick:()=>i("DASHBOARD"),className:"px-4 py-2 rounded-lg text-xs font-bold bg-slate-950 hover:bg-slate-800 border border-slate-805 hover:border-slate-700 text-slate-300 hover:text-white transition-all shadow-md text-center",children:"返回仪表盘"})]}),u.jsxs("div",{className:"p-4 grid grid-cols-12 gap-4 relative z-10 bg-slate-950/20",children:[u.jsx("section",{className:"col-span-12 rounded-2xl border border-emerald-400/20 bg-slate-950/70 p-4 shadow-xl",children:u.jsxs("div",{className:"grid gap-4 lg:grid-cols-[1.1fr_1.6fr] lg:items-center",children:[u.jsxs("div",{className:"min-w-0",children:[u.jsxs("p",{className:"text-[9px] font-black uppercase tracking-[0.28em] text-emerald-400",children:["Pre-Match War Room · 第 ",s," 周"]}),u.jsxs("div",{className:"mt-2 flex flex-wrap items-center gap-3",children:[u.jsx("span",{className:"max-w-[220px] truncate text-xl font-black text-white",children:n.name}),u.jsx("span",{className:"rounded-lg border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] font-black text-slate-400",children:"VS"}),u.jsx("span",{className:"max-w-[220px] truncate text-xl font-black text-white",children:e})]}),u.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[u.jsxs("span",{className:"rounded-lg border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-black text-emerald-200",children:[T," OVR"]}),u.jsxs("span",{className:"rounded-lg border border-blue-400/25 bg-blue-400/10 px-2.5 py-1 text-[10px] font-black text-blue-200",children:["对手 ",g," OVR"]}),u.jsxs("span",{className:"rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-[10px] font-black text-slate-300",children:["第 ",s," 周"]})]})]}),u.jsxs("div",{className:"grid gap-3 md:grid-cols-2",children:[u.jsxs("div",{className:"rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2.5",children:[u.jsx("p",{className:"text-[9px] font-black uppercase tracking-widest text-emerald-300",children:"强弱结论"}),u.jsx("p",{className:"mt-1 text-sm font-black leading-snug text-white",children:Oe})]}),u.jsxs("div",{className:"rounded-xl border border-amber-400/20 bg-amber-400/10 px-3 py-2.5",children:[u.jsx("p",{className:"text-[9px] font-black uppercase tracking-widest text-amber-300",children:"关键风险"}),u.jsx("p",{className:"mt-1 text-sm font-black leading-snug text-white",children:a})]})]})]})}),Rt&&u.jsx("div",{className:"col-span-12 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 shadow-lg",children:u.jsxs("div",{className:"flex flex-col gap-2 md:flex-row md:items-center md:justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.22em] text-amber-200",children:"Roguelite Special"}),u.jsx("h4",{className:"mt-1 text-sm font-black text-white",children:Rt.title}),u.jsx("p",{className:"mt-1 text-xs font-semibold leading-relaxed text-amber-50/85",children:Rt.description})]}),u.jsxs("div",{className:"flex shrink-0 items-center gap-2 text-[10px] font-black",children:[u.jsxs("span",{className:"rounded-lg border border-rose-300/25 bg-rose-500/10 px-3 py-2 text-rose-100",children:[Rt.aceName," -",Rt.aceOverall]}),Rt.beneficiaryName&&u.jsxs("span",{className:"rounded-lg border border-emerald-300/25 bg-emerald-500/10 px-3 py-2 text-emerald-100",children:[Rt.beneficiaryName," ",Rt.beneficiaryBefore,"→",Rt.beneficiaryAfter]})]})]})}),u.jsxs("div",{className:"col-span-12 md:col-span-7 flex flex-col justify-between",children:[u.jsxs("div",{className:"flex justify-between items-center mb-2",children:[u.jsxs("h4",{className:"text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5",children:[u.jsx(Th,{size:12,className:"text-emerald-400"}),u.jsx("span",{children:"双方首发战力精细对位 • 滚动查看11人对冲 (Scroll to View Matches)"})]}),u.jsx("span",{className:"text-[8px] text-slate-500 px-2 py-0.5 bg-slate-900 rounded border border-white/5 font-bold",children:"滚动对齐"})]}),u.jsx("div",{className:"space-y-1.5 p-2 rounded-xl bg-slate-950/30 border border-slate-800 shadow-inner h-[385px] overflow-y-auto custom-scrollbar pr-1.5",children:c.map((Pe,ye)=>{const ke=m[ye];if(!Pe||!ke)return null;const pt=Ds(Pe),jt=Ds(ke),Be=pt-jt;return u.jsxs("div",{className:"flex items-center justify-between border border-transparent hover:border-white/5 bg-slate-900/10 py-1 px-2.5 rounded-lg hover:bg-slate-900/30 transition-all gap-2",children:[u.jsxs("div",{className:"flex-1 flex items-center gap-2 min-w-0",children:[u.jsx("div",{className:Ft("w-6 h-5 rounded font-mono font-black text-[10px] flex items-center justify-center shrink-0 border",pt>=80?"bg-amber-500/10 text-amber-400 border-amber-500/20":pt>=73?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-slate-800/50 text-slate-350 border-slate-800"),children:pt}),u.jsxs("span",{className:"text-[8px] font-black text-emerald-400 bg-slate-950 border border-slate-800 px-1 py-0.5 rounded shrink-0",children:["#",Pe.shirtNumber??"--"," ",Pe.role]}),u.jsx("span",{className:"font-bold text-slate-200 text-[11px] truncate",children:Pe.name})]}),u.jsxs("div",{className:"w-14 flex flex-col items-center justify-center shrink-0 text-center",children:[u.jsx("div",{className:"bg-slate-950 border border-slate-850 px-1 py-0.2 rounded text-[8px] font-black text-slate-400 tracking-wider",children:"VS"}),Be!==0&&u.jsx("div",{className:"h-2.5 mt-0.5 flex items-center justify-center leading-none scale-75",children:Be>0?u.jsxs("span",{className:"text-[8px] font-mono text-emerald-400 font-bold",children:["▲+",Be]}):u.jsxs("span",{className:"text-[8px] font-mono text-blue-400 font-bold",children:["▼+",Math.abs(Be)]})})]}),u.jsxs("div",{className:"flex-1 flex items-center justify-end gap-2 min-w-0 text-right",children:[u.jsx("span",{className:"font-bold text-slate-200 text-[11px] truncate",children:ke.name}),u.jsxs("span",{className:"text-[8px] font-black text-blue-400 bg-slate-950 border border-slate-800 px-1 py-0.5 rounded shrink-0",children:[ke.role," #",ke.shirtNumber??"--"]}),u.jsx("div",{className:Ft("w-6 h-5 rounded font-mono font-black text-[10px] flex items-center justify-center shrink-0 border",jt>=80?"bg-amber-500/10 text-amber-400 border-amber-500/20":jt>=73?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-slate-800/50 text-slate-350 border-slate-800"),children:jt})]})]},`matchup-row-${Pe.id}-${ke.id}`)})})]}),u.jsxs("div",{className:"col-span-12 md:col-span-5 flex flex-col justify-between h-[385px]",children:[u.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 p-3 rounded-xl shadow-md space-y-2",children:[u.jsxs("div",{className:"flex justify-between items-center text-[9px] text-slate-400 font-extrabold pb-0.5 border-b border-white/5",children:[u.jsx("span",{children:"主队 (HOME)"}),u.jsx("span",{className:"tracking-wide text-slate-300 font-black",children:"三线对碰战力"}),u.jsx("span",{children:"客队 (AWAY)"})]}),u.jsxs("div",{className:"flex items-center justify-between text-[11px] py-0.5",children:[u.jsx("span",{className:"font-mono text-emerald-400 font-black text-sm",children:j.att}),u.jsx("span",{className:"text-[9px] text-slate-400 uppercase font-bold",children:"ATT 进攻火力 vs DEF 后防"}),u.jsx("span",{className:"font-mono text-blue-400 font-black text-sm",children:te.def})]}),u.jsxs("div",{className:"flex items-center justify-between text-[11px] py-0.5",children:[u.jsx("span",{className:"font-mono text-emerald-400 font-black text-sm",children:j.mid}),u.jsx("span",{className:"text-[9px] text-slate-400 uppercase font-bold",children:"MID 中场枢纽决断"}),u.jsx("span",{className:"font-mono text-blue-400 font-black text-sm",children:te.mid})]}),u.jsxs("div",{className:"flex items-center justify-between text-[11px] py-0.5",children:[u.jsx("span",{className:"font-mono text-emerald-400 font-black text-sm",children:j.def}),u.jsx("span",{className:"text-[9px] text-slate-400 uppercase font-bold",children:"DEF 稳固后卫 vs ATT 火力"}),u.jsx("span",{className:"font-mono text-blue-400 font-black text-sm",children:te.att})]})]}),u.jsxs("div",{className:"bg-slate-950/85 border border-slate-800 p-3 rounded-xl shadow-md space-y-1",children:[u.jsxs("p",{className:"text-[10px] font-black text-emerald-400 leading-none tracking-wide flex items-center gap-1",children:[u.jsx(e0,{size:10,className:"text-amber-400 shrink-0"}),u.jsxs("span",{children:["总监战术研判: ",Ke.title]})]}),u.jsx("p",{className:"text-[10px] text-slate-400 leading-relaxed font-semibold",children:Ke.advice}),u.jsxs("div",{className:"pt-1.5 border-t border-white/5 flex items-center justify-between text-[9px]",children:[u.jsx("span",{className:"text-slate-500 font-bold",children:"重点突破策略:"}),u.jsx("span",{className:"font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded tracking-wide scale-95 origin-right",children:Ke.focus})]})]}),U&&W&&u.jsxs("div",{className:"grid grid-cols-2 gap-2.5",children:[u.jsxs("div",{className:"bg-gradient-to-b from-amber-500/10 to-slate-900/40 border border-amber-500/20 p-2 rounded-lg text-center relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-0 right-0 w-8 h-8 bg-amber-550/5 blur-xl rounded-full pointer-events-none"}),u.jsxs("div",{className:"text-[8px] text-slate-500 leading-none",children:["MVP ",U.role]}),u.jsx("div",{className:"text-sm font-black text-amber-400 leading-none mt-1 font-mono",children:Ds(U)}),u.jsx("div",{className:"text-[10px] font-extrabold text-white truncate max-w-full mt-1 leading-none",children:U.name}),u.jsxs("div",{className:"grid grid-cols-2 gap-x-1 text-[8px] font-mono mt-1 pt-1 border-t border-white/5 text-slate-400 text-left",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"SPD:"}),u.jsx("span",{className:"text-white font-bold",children:Math.round(U.attributes.speed*80)})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"SHT:"}),u.jsx("span",{className:"text-white font-bold",children:Math.round(U.attributes.shooting*80)})]})]})]}),u.jsxs("div",{className:"bg-gradient-to-b from-blue-500/10 to-slate-900/40 border border-blue-500/20 p-2 rounded-lg text-center relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-0 left-0 w-8 h-8 bg-blue-550/5 blur-xl rounded-full pointer-events-none"}),u.jsxs("div",{className:"text-[8px] text-slate-500 leading-none",children:["ACE ",W.role]}),u.jsx("div",{className:"text-sm font-black text-blue-400 leading-none mt-1 font-mono",children:Ds(W)}),u.jsx("div",{className:"text-[10px] font-extrabold text-white truncate max-w-full mt-1 leading-none",children:W.name}),u.jsxs("div",{className:"grid grid-cols-2 gap-x-1 text-[8px] font-mono mt-1 pt-1 border-t border-white/5 text-slate-400 text-left",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"SPD:"}),u.jsx("span",{className:"text-white font-bold",children:Math.round(W.attributes.speed*80)})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"SHT:"}),u.jsx("span",{className:"text-white font-bold",children:Math.round(W.attributes.shooting*80)})]})]})]})]})]})]}),u.jsxs("div",{className:"bg-slate-950/80 backdrop-blur-md p-4 px-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-20",children:[u.jsxs("div",{className:"flex items-center gap-2 text-slate-500 text-[10px] font-bold",children:[u.jsx(n0,{size:12,className:"text-slate-600 shrink-0"}),u.jsx("span",{children:"首发阵容研判就绪！你可以在沙盘面板中微调，或直接吹鸣开场哨战火点燃！"})]}),u.jsxs("button",{type:"button",onClick:le,className:"w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-350 text-slate-950 h-10 px-8 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 border border-emerald-400/40",children:[u.jsx(jp,{size:12,fill:"currentColor"}),u.jsx("span",{children:"鸣哨开球 • KICK-OFF"})]})]})]})}const _l=L.phase==="PREPARE"?(rh=L.setPiece)==null?void 0:rh.type:L.phase,Mp=!h&&(L.phase==="PREPARE"&&!!L.setPiece&&["CORNER","GOALKICK","THROWIN"].includes(L.setPiece.type)||["CORNER","PENALTY","FREEKICK","GOALKICK","THROWIN"].includes(L.phase)),yp=_l==="CORNER"?"角球 Corner":_l==="GOALKICK"?"门球 Goal Kick":_l==="PENALTY"?"点球 Penalty":"任意球 FreeKick";return u.jsx("div",{className:"grid grid-cols-12 gap-4 h-full min-h-0",children:u.jsxs("section",{className:"col-span-12 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative",children:[u.jsxs("div",{className:Ft("bg-slate-950/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center relative z-20",h?"hidden":"p-6"),children:[u.jsx("div",{className:"absolute inset-0 bg-emerald-500/5 blur-3xl pointer-events-none"}),u.jsxs("div",{className:"flex-1 text-center z-10",children:[u.jsx("p",{className:"text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1 opacity-60",children:"主场"}),u.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-tight",children:n.name})]}),u.jsxs("div",{className:"flex flex-col items-center px-12 z-10",children:[u.jsxs("div",{className:"bg-slate-900 border border-emerald-500/20 px-3 py-1 rounded-full text-slate-400 font-bold text-[10px] mb-3 flex items-center gap-2 shadow-lg",children:[u.jsx(kp,{size:12,className:Ft(Gi&&"text-red-500 animate-pulse")}),u.jsxs("span",{className:"tabular-nums font-mono",children:[Hi===1?"上半场":Hi===2?"下半场":Hi===3?"加时上半场":"加时下半场"," ",yi,"'"]})]}),u.jsxs("div",{className:"text-5xl font-black text-white tabular-nums flex gap-6 tracking-tighter",children:[u.jsx(Ks.span,{initial:{y:-10,opacity:0},animate:{y:0,opacity:1},children:L.score.home},`home-${L.score.home}`),u.jsx("span",{className:"text-slate-800",children:":"}),u.jsx(Ks.span,{initial:{y:-10,opacity:0},animate:{y:0,opacity:1},children:L.score.away},`away-${L.score.away}`)]})]}),u.jsxs("div",{className:"flex-1 text-center z-10",children:[u.jsx("p",{className:"text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1 opacity-60",children:"客场"}),u.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-tight",children:e})]})]}),u.jsxs("div",{className:"grid grid-cols-12 border-t border-white/5 bg-slate-950",children:[u.jsxs("div",{className:Ft("col-span-12 relative h-[450px] bg-slate-950 border-b lg:border-b-0 border-slate-800/80 overflow-hidden",h?"":Zi?"lg:col-span-11 lg:border-r":"lg:col-span-8 lg:border-r"),children:[!h&&!Gi&&!Bt&&u.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-slate-950/40 backdrop-blur-sm",children:u.jsx("button",{onClick:Ic,className:"bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-12 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-emerald-500/40 transition-all hover:scale-105 active:scale-95",children:"开场哨鸣响"})}),!h&&bt.length>0&&!Bt&&u.jsxs("div",{className:"absolute left-4 top-16 z-[25] max-w-[300px] overflow-hidden rounded-xl border border-cyan-400/25 bg-slate-950/82 shadow-xl backdrop-blur-md",children:[u.jsxs("button",{type:"button",onClick:()=>Wn(c=>!c),className:"flex w-full items-center justify-between gap-3 px-3 py-2 text-left transition-colors hover:bg-cyan-400/10",children:[u.jsxs("span",{className:"flex min-w-0 items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-cyan-200",children:[u.jsx(Xp,{size:11,className:"shrink-0"}),u.jsx("span",{className:"truncate",children:"本场黑箱规则"}),u.jsx("span",{className:"rounded-full border border-cyan-300/20 bg-cyan-400/10 px-1.5 py-0.5 text-[9px] text-cyan-100",children:bt.length})]}),u.jsx(Jp,{size:13,className:Ft("shrink-0 text-cyan-200 transition-transform",Nt&&"rotate-180")})]}),Nt&&u.jsxs("div",{className:"space-y-1.5 border-t border-cyan-400/10 p-2",children:[bt.slice(0,3).map(c=>u.jsxs("div",{className:"rounded-lg bg-cyan-400/8 px-2 py-1.5",children:[u.jsx("p",{className:"text-[10px] font-black text-white",children:ta(c.id,Je)}),u.jsx("p",{className:"mt-0.5 text-[10px] font-semibold leading-snug text-cyan-50/75",children:zp(Bp(c.id)[0]||"",Je)})]},c.id)),bt.length>3&&u.jsxs("p",{className:"px-1 pb-1 text-[10px] font-semibold text-cyan-100/55",children:["还有 ",bt.length-3," 条规则已激活"]})]})]}),u.jsx(Vc,{children:Ue&&u.jsxs(Ks.div,{initial:{opacity:0,y:-12,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.98},className:Ft("absolute right-3 top-3 z-40 max-w-[380px] rounded-xl border px-3 py-2.5 shadow-2xl backdrop-blur-md",Ue.type==="backfire"?"border-rose-400/35 bg-rose-950/80":Ue.type==="success"?"border-emerald-400/35 bg-emerald-950/80":"border-cyan-400/35 bg-slate-950/88"),children:[u.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.2em] text-cyan-200",children:"黑箱触发"}),u.jsx("p",{className:"mt-1 text-xs font-black leading-relaxed text-white",children:Ue.text})]},`${Ue.cardId}-${Ue.text}`)}),Mp&&u.jsxs("div",{className:"absolute top-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center",children:[u.jsxs(Ks.div,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},className:"bg-emerald-500 text-slate-950 px-4 py-2 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-emerald-500/30 flex items-center gap-3 border border-emerald-400/50 [&>span+span]:hidden",children:[u.jsx(wh,{size:14,className:"animate-pulse"}),u.jsx("span",{children:_l==="THROWIN"?"界外球 Throw-in":yp}),u.jsx("span",{children:L.phase==="CORNER"?"角球 Corner":L.phase==="PENALTY"?"点球 Penalty":"任意球 FreeKick"})]}),L.setPiece&&u.jsxs(Ks.div,{initial:{opacity:0},animate:{opacity:1},className:"text-emerald-400 text-[10px] font-black mt-2 bg-slate-950/80 px-4 py-1 rounded-full border border-emerald-500/20 backdrop-blur-md shadow-lg uppercase tracking-widest",children:[L.setPiece.distance.toFixed(0),"m • ",((oh=[...L.home,...L.away].find(c=>{var m;return c.id===((m=L.setPiece)==null?void 0:m.kickerId)}))==null?void 0:oh.name)||"准备主罚"]})]}),as&&Hi===1&&u.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-slate-950/60 backdrop-blur-md",children:u.jsxs("div",{className:"text-center",children:[u.jsx("h3",{className:"text-4xl font-black text-white mb-2 tracking-tighter uppercase italic",children:"中场休息"}),u.jsxs("div",{className:"text-emerald-500 font-bold text-lg mb-8 tracking-widest tabular-nums",children:[L.score.home," - ",L.score.away]}),u.jsx("button",{onClick:Xu,className:"bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-12 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-emerald-500/40 transition-all hover:scale-105 active:scale-95",children:"开始下半场"})]})}),nt&&u.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-slate-950/85 backdrop-blur-md px-6",children:u.jsxs("div",{className:"text-center max-w-sm",children:[u.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-black uppercase text-amber-400 mb-4 tracking-widest",children:[u.jsx(Hp,{size:12,className:"animate-spin"}),"淘汰赛平局 ∙ 开启加时生死战"]}),u.jsx("h2",{className:"text-3xl font-black text-white mb-3 tracking-tight uppercase",children:"常规时间战平！"}),u.jsxs("p",{className:"text-xs text-slate-400 mb-8 leading-relaxed",children:["双方在90分钟常规时间内打平（",L.score.home," - ",L.score.away,"）。即将进入前后各15分钟、共计30分钟的极速加时赛生死战！"]}),u.jsx("button",{onClick:ap,className:"bg-amber-500 hover:bg-amber-400 text-slate-950 px-10 py-3.5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-amber-500/30 transition-all hover:scale-105 active:scale-95",children:"打响加时赛上半场"})]})}),Lt&&u.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-slate-950/85 backdrop-blur-md px-6",children:u.jsxs("div",{className:"text-center max-w-sm",children:[u.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase text-blue-400 mb-4 tracking-widest",children:"易边再战"}),u.jsx("h2",{className:"text-3xl font-black text-white mb-3 tracking-tight uppercase",children:"加时赛中场易边"}),u.jsxs("div",{className:"text-3xl font-mono text-emerald-400 font-extrabold mb-4 text-emerald-400",children:[L.score.home," - ",L.score.away]}),u.jsx("p",{className:"text-xs text-slate-400 mb-8 leading-relaxed",children:"加时上半场在此完结。两队主客场攻防方向进行对调！打响最后决定胜败的15分钟极速博杀！"}),u.jsx("button",{onClick:rp,className:"bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-10 py-3.5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95",children:"打响加时赛下半场"})]})}),Ct&&u.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-slate-950/90 backdrop-blur-md px-6",children:u.jsxs("div",{className:"text-center max-w-sm",children:[u.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[10px] font-black uppercase text-rose-400 mb-4 tracking-widest",children:"宿命决胜 ∙ 扣人心弦"}),u.jsx("h2",{className:"text-3xl font-black text-white mb-3 tracking-tight uppercase",children:"120分钟高强平局！"}),u.jsx("p",{className:"text-xs text-slate-400 mb-8 leading-relaxed",children:"加时赛血战战平。淘汰赛最残酷的决定——点球决胜大战（Penalty Shootout）降临！准备登场执教防线，射破对方大门！"}),u.jsx("button",{onClick:Uc,className:"bg-rose-500 hover:bg-rose-450 text-white px-10 py-3.5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-rose-500/30 transition-all hover:scale-105 active:scale-95",children:"启动点球大战"})]})}),Ot&&u.jsxs("div",{className:"absolute inset-0 z-40 select-none pointer-events-none",children:[ht&&u.jsx("div",{className:"fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl pointer-events-auto flex items-center justify-center px-3 py-3",children:u.jsxs("div",{className:"w-[min(1220px,calc(100vw-24px))] h-[calc(100vh-24px)] rounded-xl border border-white/10 bg-slate-950 shadow-2xl overflow-hidden flex flex-col",children:[u.jsxs("div",{className:"px-4 py-2.5 border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-2 shrink-0",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.24em] text-emerald-400",children:"Penalty Order"}),u.jsx("h2",{className:"text-xl font-black text-white tracking-tight",children:"点球顺序布置"}),u.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"拖拽调整所有在场球员的完整罚球顺序。前五名用于常规五轮，第六名之后用于突然死亡；全员罚完前不会重复。"})]}),u.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[u.jsx("button",{onClick:()=>Et(c=>({...c,home:{...c.home,orderedPlayerIds:Dc(L.home)}})),className:"h-9 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 text-[10px] font-black text-slate-200 tracking-widest",children:"推荐排序"}),u.jsx("button",{onClick:fp,disabled:Te.home.orderedPlayerIds.length!==L.home.filter(c=>!c.sentOff&&!F.current.has(c.id)).length||new Set(Te.home.orderedPlayerIds).size!==Te.home.orderedPlayerIds.length,className:"h-9 px-5 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 text-[10px] font-black tracking-widest",children:"确认顺序"})]})]}),u.jsxs("div",{className:"grid md:grid-cols-[1fr_280px] min-h-0 flex-1",children:[u.jsxs("div",{ref:Vi,className:"min-h-0 overflow-y-auto custom-scrollbar p-2.5 space-y-1",children:[u.jsx("div",{className:"sticky top-0 z-10 bg-slate-950/95 border border-emerald-500/20 rounded-md px-2.5 py-1 text-[9px] font-black text-emerald-300 tracking-widest",children:"前五轮"}),Te.home.orderedPlayerIds.map((c,m)=>{const T=L.home.find(W=>W.id===c);if(!T)return null;const g=Yu(T,m),U=m===5;return u.jsxs(ce.Fragment,{children:[U&&u.jsx("div",{className:"sticky top-0 z-10 bg-slate-950/95 border border-amber-500/20 rounded-md px-2.5 py-1 text-[9px] font-black text-amber-300 tracking-widest",children:"突然死亡顺序"}),u.jsx("div",{className:Ft("h-2 rounded-full transition-all",Wt===m&&et?"h-4 border border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_18px_rgba(52,211,153,0.25)]":"border border-transparent")}),u.jsx("div",{"data-pk-order-row":"true","data-pk-order-index":m,onPointerDown:W=>hp(W,c,m),className:Ft("rounded-md border bg-slate-900/70 px-2.5 py-1.5 cursor-grab active:cursor-grabbing transition-all touch-none",m<5?"border-emerald-500/25":"border-amber-500/25",et===c&&"opacity-45"),children:u.jsxs("div",{className:"grid grid-cols-[30px_minmax(150px,1.05fr)_minmax(360px,2.5fr)_minmax(92px,0.7fr)] items-center gap-2",children:[u.jsxs("div",{className:"contents",children:[u.jsx("div",{className:Ft("w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-black border",m<5?"bg-emerald-500/15 border-emerald-400/30 text-emerald-300":"bg-amber-500/15 border-amber-400/30 text-amber-300"),children:m+1}),u.jsxs("div",{className:"min-w-0",children:[u.jsxs("p",{className:"text-[11px] font-black text-white truncate leading-tight",children:["#",T.shirtNumber??"--"," ",T.name]}),u.jsxs("p",{className:"text-[10px] text-slate-500 font-bold",children:[T.role," · ",m<5?"前五轮":"突然死亡"]})]})]}),u.jsxs("div",{className:"grid grid-cols-6 gap-x-2 gap-y-0.5 text-[9px] font-bold leading-tight",children:[u.jsxs("span",{className:"text-emerald-300",children:["点球 ",g.penalty]}),u.jsxs("span",{className:"text-slate-200",children:["射门 ",g.shooting]}),u.jsxs("span",{className:"text-blue-300",children:["冷静 ",g.composure]}),u.jsxs("span",{className:"text-slate-300",children:["体能 ",g.stamina]}),u.jsxs("span",{className:g.pressure==="高"?"text-rose-300":g.pressure==="中"?"text-amber-300":"text-emerald-300",children:["压力 ",g.pressure]}),u.jsxs("span",{className:"text-purple-300",children:["士气 ",g.morale]})]}),u.jsx("div",{className:"flex gap-1 flex-wrap justify-end overflow-hidden max-h-7",children:(T.traits||[]).slice(0,2).map(W=>u.jsx("span",{className:"px-1 py-0 rounded bg-slate-950 border border-white/10 text-[8px] text-slate-300 font-bold leading-4",children:W},W))})]})})]},c)}),u.jsx("div",{className:Ft("h-2 rounded-full transition-all",Wt===Te.home.orderedPlayerIds.length&&et?"h-4 border border-amber-400/60 bg-amber-400/15 shadow-[0_0_18px_rgba(251,191,36,0.25)]":"border border-transparent")})]}),u.jsxs("aside",{className:"border-t md:border-t-0 md:border-l border-white/10 p-3 bg-slate-900/40 space-y-2 text-[11px] text-slate-300",children:[u.jsx("h3",{className:"text-sm font-black text-white",children:"顺位策略"}),u.jsxs("p",{children:[u.jsx("span",{className:"text-emerald-300 font-black",children:"第 1 位"}),"：稳定开局，别让士气先掉。"]}),u.jsxs("p",{children:[u.jsx("span",{className:"text-emerald-300 font-black",children:"第 2-3 位"}),"：适合综合执行稳定的主力。"]}),u.jsxs("p",{children:[u.jsx("span",{className:"text-amber-300 font-black",children:"第 4 位"}),"：比分压力开始变化，冷静很重要。"]}),u.jsxs("p",{children:[u.jsx("span",{className:"text-rose-300 font-black",children:"第 5 位"}),"：可能是生死球，优先大心脏、高冷静。"]}),u.jsxs("p",{children:[u.jsx("span",{className:"text-amber-300 font-black",children:"第 6 位之后"}),"：突然死亡很危险，别把可靠球员全堆进前五。"]}),u.jsx("div",{className:"pt-3 border-t border-white/10 text-[10px] text-slate-500 leading-relaxed",children:"对手也会自动生成完整顺序，并按同样规则执行。"})]})]})]})}),u.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 w-[min(760px,calc(100%-32px))] bg-slate-950/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl space-y-3 shadow-2xl",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),u.jsx("span",{className:"text-[10px] font-black text-white uppercase tracking-widest",children:"美加墨世界杯 ∙ 终极点球大决战"})]}),u.jsx("span",{className:"text-xs font-mono font-black text-amber-400 tracking-wider",children:(Ne==null?void 0:Ne.team)==="DONE"?"点球大战结束":`第 ${Un} 轮决胜`})]}),u.jsxs("div",{className:"flex justify-between items-center bg-slate-950/60 p-3 rounded-xl border border-slate-850/80",children:[u.jsxs("div",{className:"text-left",children:[u.jsx("p",{className:"text-[9px] text-slate-500 font-bold uppercase mb-0.5",children:"我方国家队"}),u.jsx("p",{className:"text-sm font-black text-white truncate max-w-[120px]",children:n.name})]}),u.jsx("div",{className:"text-center shrink-0",children:u.jsxs("p",{className:"text-3xl font-mono font-black text-emerald-400 tracking-tighter",children:[Fn.home," ",u.jsx("span",{className:"text-slate-705 font-sans text-xl text-slate-700",children:":"})," ",Fn.away]})}),u.jsxs("div",{className:"text-right",children:[u.jsx("p",{className:"text-[9px] text-slate-500 font-bold uppercase mb-0.5",children:"对手守关队"}),u.jsx("p",{className:"text-sm font-black text-white truncate max-w-[120px]",children:e})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4 pt-1",children:[u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("div",{className:"flex items-center justify-between text-[8px] text-slate-500 font-black uppercase tracking-wider",children:[u.jsx("span",{children:"我方主罚阵列"}),u.jsxs("span",{className:"text-emerald-400 font-mono",children:["GOAL: ",Fn.home]})]}),u.jsx("div",{className:"flex gap-1.5",children:Array.from({length:Math.max(5,Un)}).map((c,m)=>{const T=fi.filter(U=>U.team==="HOME")[m],g=(Ne==null?void 0:Ne.team)==="HOME"&&(Ne==null?void 0:Ne.index)===m;return u.jsx("div",{className:Ft("flex-1 h-2 rounded-full transition-all border",T===void 0?g?"bg-amber-500/20 border-amber-500 animate-pulse":"bg-slate-900 border-slate-800":T.success?"bg-emerald-500 border-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.5)]":"bg-rose-500 border-rose-400")},m)})})]}),u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("div",{className:"flex items-center justify-between text-[8px] text-slate-500 font-black uppercase tracking-wider",children:[u.jsx("span",{children:"对方主罚阵列"}),u.jsxs("span",{className:"text-rose-405 font-mono text-rose-400",children:["GOAL: ",Fn.away]})]}),u.jsx("div",{className:"flex gap-1.5",children:Array.from({length:Math.max(5,Un)}).map((c,m)=>{const T=fi.filter(U=>U.team==="AWAY")[m],g=(Ne==null?void 0:Ne.team)==="AWAY"&&(Ne==null?void 0:Ne.index)===m;return u.jsx("div",{className:Ft("flex-1 h-2 rounded-full transition-all border",T===void 0?g?"bg-amber-500/20 border-amber-500 animate-pulse":"bg-slate-900 border-slate-800":T.success?"bg-emerald-500 border-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.5)]":"bg-rose-500 border-rose-400")},m)})})]})]})]}),u.jsxs("div",{className:"hidden",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950 pointer-events-none"}),u.jsxs("div",{className:"w-[85%] h-[120px] border-t-8 border-x-8 border-white rounded-t-lg relative shadow-[0_-15px_30px_rgba(255,255,255,0.05)]",children:[u.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:10px_10px]"}),(Ne==null?void 0:Ne.team)!=="DONE"&&u.jsxs(Ks.div,{initial:{x:0},animate:mn==="save"?{x:[-30,80,-80,0][Math.floor(Math.random()*4)],y:[-30,-10][Math.floor(Math.random()*2)],scale:1.1}:mn==="goal"?{x:[-100,100][Math.floor(Math.random()*2)],y:20,rotate:45,opacity:.6}:{x:[10,-10][Math.round(Math.random())],y:0},transition:{duration:.4,type:"spring"},className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-16 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-2xl flex flex-col items-center justify-center border-2 border-white shadow-lg",children:[u.jsx("div",{className:"w-5 h-5 bg-amber-200 rounded-full border border-white mt-1"}),u.jsx("span",{className:"text-[7px] font-black text-white mt-1 uppercase scale-90",children:"GK"})]}),mn!=="idle"&&u.jsx(Ks.div,{initial:{scale:2,bottom:-60,left:"50%",x:"-50%"},animate:mn==="goal"?{scale:.4,bottom:[70,80,90][Math.floor(Math.random()*3)],left:["15%","50%","85%"][Math.floor(Math.random()*3)],rotate:720}:mn==="save"?{scale:.5,bottom:50,left:["25%","50%","75%"][Math.floor(Math.random()*3)],rotate:360}:{scale:.4,bottom:120,left:"102%",rotate:1080,opacity:0},transition:{duration:.6,ease:"easeOut"},className:"absolute w-8 h-8 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center shadow-lg",children:u.jsx("div",{className:"w-6 h-6 rounded-full border border-slate-300 border-dashed"})}),Ne&&Ne.team!=="DONE"&&u.jsx("div",{className:"absolute inset-0 grid grid-cols-3 gap-0.5 z-20",children:["L","C","R"].map(c=>u.jsxs("button",{disabled:Ne===null,onClick:()=>gp(c),className:Ft("relative group flex items-center justify-center transition-all bg-transparent focus:outline-none",Ne.team==="HOME"?"hover:bg-emerald-500/10 active:bg-emerald-500/20":"hover:bg-blue-500/10 active:bg-blue-500/20"),children:[u.jsx("div",{className:Ft("w-10 h-10 border-2 border-dashed rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]",Ne.team==="HOME"?"border-emerald-500":"border-blue-500"),children:u.jsx("div",{className:Ft("w-2 h-2 rounded-full",Ne.team==="HOME"?"bg-emerald-500 animate-ping":"bg-blue-500 animate-ping")})}),u.jsx("span",{className:"absolute bottom-2 text-[9px] font-black tracking-widest text-white/40 group-hover:text-white uppercase transition-colors",children:c==="L"?"左侧死角":c==="R"?"右侧死角":"中路重炮"})]},c))})]}),mn==="idle"&&(Ne==null?void 0:Ne.team)!=="DONE"&&u.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center",children:[u.jsx("span",{className:"text-[8px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 mb-1.5 uppercase tracking-widest animate-pulse font-sans",children:"加压瞄准中"}),u.jsx("div",{className:"w-6 h-6 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center shadow-2xl animate-bounce",children:u.jsx("div",{className:"w-4 h-4 rounded-full border border-slate-400 border-dashed"})})]})]}),Ne&&Ne.team!=="DONE"&&mn==="idle"&&u.jsx("div",{className:"absolute left-4 top-36 w-[min(300px,calc(50vw-24px))] pointer-events-auto",children:(()=>{const c=Ne.team,m=ao(c,Ne.index),T=op(m,c,Ne.index);return u.jsxs("div",{className:"rounded-lg border border-white/10 bg-slate-950/88 backdrop-blur-xl p-3 shadow-2xl",children:[u.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[u.jsxs("div",{className:"min-w-0",children:[u.jsx("p",{className:"text-[9px] font-black tracking-[0.18em] text-slate-500 uppercase",children:c==="HOME"?"我方主罚":"对方主罚"}),u.jsx("h3",{className:"text-base font-black text-white truncate",children:m.name})]}),u.jsxs("span",{className:Ft("px-2 py-1 rounded-md text-[10px] font-black border",T.pressure==="高"?"border-rose-400/40 bg-rose-500/15 text-rose-200":T.pressure==="中"?"border-amber-400/40 bg-amber-500/15 text-amber-200":"border-emerald-400/40 bg-emerald-500/15 text-emerald-200"),children:["压力 ",T.pressure]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-1.5 text-[10px] font-bold text-slate-300",children:[u.jsxs("span",{children:["点球 ",T.penalty]}),u.jsxs("span",{children:["射门 ",T.shooting]}),u.jsxs("span",{children:["冷静 ",T.composure]}),u.jsxs("span",{children:["体能 ",T.stamina]}),u.jsxs("span",{children:["士气 ",T.morale]}),u.jsx("span",{children:m.role})]}),u.jsx("div",{className:"mt-2 flex flex-wrap gap-1",children:T.traits.length?T.traits.map(g=>u.jsx("span",{className:"px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-[9px] text-slate-300 font-bold",children:g},g)):u.jsx("span",{className:"text-[9px] text-slate-500 font-bold",children:"暂无显著特性"})})]})})()}),(Ne==null?void 0:Ne.team)==="HOME"&&mn==="idle"&&u.jsx("div",{className:"absolute right-4 top-36 w-[min(300px,calc(50vw-24px))] pointer-events-auto",children:u.jsxs("div",{className:"rounded-lg border border-white/10 bg-slate-950/88 backdrop-blur-xl p-3 shadow-2xl",children:[u.jsx("p",{className:"text-[9px] font-black tracking-[0.18em] text-emerald-300 uppercase mb-2",children:"射门策略"}),u.jsx("div",{className:"grid gap-2",children:[["SAFE","稳妥推射","容错更高，若门将猜中方向更容易被扑。"],["POWER","大力抽射","球速快，但高压或低体能时更容易踢飞。"],["CENTER","打中路","克制提前扑边，遇到守中路会很危险。"]].map(([c,m,T])=>u.jsxs("button",{onClick:()=>fe(c),className:Ft("text-left rounded-md border px-3 py-2 transition-all",he===c?"border-emerald-400/70 bg-emerald-500/18 text-white":"border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"),children:[u.jsx("span",{className:"block text-xs font-black",children:m}),u.jsx("span",{className:"block text-[10px] leading-relaxed text-slate-400 mt-0.5",children:T})]},c))})]})}),(Ne==null?void 0:Ne.team)==="AWAY"&&mn==="idle"&&Ge&&u.jsxs("div",{className:"absolute right-4 top-32 z-50 w-[min(460px,calc(100vw-32px))] pointer-events-auto flex flex-col gap-3",children:[u.jsxs("div",{className:"h-[230px] rounded-lg border border-cyan-300/35 bg-slate-950/98 backdrop-blur-xl p-4 shadow-[0_18px_45px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsx("p",{className:"text-[9px] font-black tracking-[0.18em] text-blue-300 uppercase",children:"时间轴线索"}),u.jsx("span",{className:"rounded-md border border-amber-300/40 bg-amber-300/12 px-2 py-1 text-[11px] font-black text-amber-200",children:xt!==null?`T-${xt.toFixed(1)}s`:"T-0"})]}),u.jsx("div",{className:"space-y-2 overflow-y-auto custom-scrollbar pr-1",children:(Fe.length?Fe:Ge.clues.slice(0,1)).map(c=>u.jsxs("div",{className:"rounded-md border border-cyan-200/18 bg-slate-900/95 px-3 py-2.5 shadow-sm",children:[u.jsxs("div",{className:"flex items-center justify-between gap-3",children:[u.jsxs("span",{className:"text-[11px] font-mono font-black text-amber-200",children:["T-",c.time.toFixed(1),"s"]}),u.jsx("span",{className:"rounded border border-white/10 bg-white/8 px-1.5 py-0.5 text-[9px] font-black text-cyan-100 uppercase",children:c.type})]}),u.jsx("p",{className:"text-[13px] leading-relaxed text-white mt-1.5",children:c.message})]},`${c.time}-${c.message}`))})]}),u.jsxs("div",{className:"rounded-lg border border-blue-300/25 bg-slate-950/96 backdrop-blur-xl p-3 shadow-[0_14px_32px_rgba(0,0,0,0.55)]",children:[u.jsx("p",{className:"text-[9px] font-black tracking-[0.18em] text-blue-300 uppercase mb-2",children:"守门策略"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:[["DIVE_LEFT","提前扑左"],["DIVE_RIGHT","提前扑右"],["HOLD_CENTER","守中路"],["WAIT","等出脚"]].map(([c,m])=>u.jsx("button",{onClick:()=>{je.current=c,pe(c)},className:Ft("h-10 rounded-md border text-xs font-black transition-all",oe===c?"border-blue-300 bg-blue-500/20 text-white":"border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"),children:m},c))})]})]}),He.length>0&&mn!=="idle"&&u.jsxs("div",{className:"absolute right-4 bottom-28 w-[min(430px,calc(100vw-32px))] rounded-lg border border-white/10 bg-slate-950/90 backdrop-blur-xl p-3 shadow-2xl",children:[u.jsx("p",{className:"text-[9px] font-black tracking-[0.18em] text-amber-300 uppercase mb-2",children:"本轮复盘"}),u.jsx("div",{className:"space-y-1.5",children:He.map((c,m)=>u.jsx("p",{className:"text-[11px] leading-relaxed text-slate-200",children:c},m))})]}),Ne&&Ne.team==="HOME"&&mn==="idle"&&u.jsxs("div",{className:"absolute left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2 w-[min(430px,38vw)] h-[118px] pointer-events-auto",children:[u.jsxs("div",{className:"hidden",children:[Ne.team==="HOME"?u.jsx(wh,{size:14,className:"text-emerald-400"}):u.jsx(Kp,{size:14,className:"text-blue-400"}),u.jsx("span",{children:Ne.team==="HOME"?"拖拽射门轨迹":"拖拽门将扑救"})]}),u.jsxs("div",{className:Ft("relative h-full rounded-md border bg-slate-950/[0.04] hover:bg-slate-950/[0.08] overflow-hidden touch-none cursor-crosshair transition-colors",S.isDragging?"border-emerald-300/60 shadow-[0_0_18px_rgba(52,211,153,0.22)]":"border-emerald-300/18"),onPointerDown:c=>{const m=c.currentTarget.getBoundingClientRect(),T={x:c.clientX-m.left,y:c.clientY-m.top};c.currentTarget.setPointerCapture(c.pointerId),ee({isDragging:!0,start:T,current:T}),ie(null)},onPointerMove:c=>{if(!S.isDragging||!S.start)return;const m=c.currentTarget.getBoundingClientRect(),T={x:c.clientX-m.left,y:c.clientY-m.top},g={...S,current:T};ee(g),ie(Qu(g))},onPointerUp:c=>{const m=c.currentTarget.getBoundingClientRect(),T={...S,current:{x:c.clientX-m.left,y:c.clientY-m.top}},g=Qu(T);ee({isDragging:!1,start:null,current:null}),ie(null),g&&pp(g)},onPointerCancel:()=>{ee({isDragging:!1,start:null,current:null}),ie(null)},children:[u.jsx("div",{className:"absolute left-1/2 top-3 bottom-3 w-px bg-emerald-200/10"}),u.jsx("div",{className:"absolute inset-x-3 top-2 h-4 border-t border-emerald-200/15 rounded-t-md"}),u.jsx("div",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/20 px-2 py-1 text-[9px] font-black text-emerald-200/70 bg-slate-950/18",children:"轻滑射门"}),Z&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"absolute bottom-3 left-1/2 h-0.5 origin-left rounded-full bg-emerald-300",style:{width:`${32+Z.power*135}px`,transform:`rotate(${-66*Z.targetY+Z.targetX*28}deg)`,opacity:.62}}),u.jsx("div",{className:"absolute w-5 h-5 rounded-full border border-emerald-200/80 bg-emerald-300/10 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_rgba(110,231,183,0.35)]",style:{left:`${50+Z.targetX*38}%`,top:`${78-Z.targetY*58}%`}})]}),S.isDragging&&S.start&&S.current&&u.jsx("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",children:u.jsx("path",{d:`M ${S.start.x} ${S.start.y} Q ${(S.start.x+S.current.x)/2} ${Math.min(S.start.y,S.current.y)-Math.abs(S.current.x-S.start.x)*.18} ${S.current.x} ${S.current.y}`,fill:"none",stroke:"#6ee7b7",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"6 7",opacity:"0.7"})}),u.jsxs("div",{className:"absolute left-3 right-3 bottom-2 flex items-center justify-between text-[9px] font-black text-slate-400",children:[u.jsxs("span",{children:["角度 ",Z?Math.round(Z.targetX*100):0]}),u.jsxs("span",{children:["力量 ",Z?Math.round(Z.power*100):0,"%"]}),u.jsxs("span",{children:["弧线 ",Z?Math.round(Z.curve*100):0]})]})]})]}),!1,u.jsxs("div",{className:"absolute left-4 bottom-4 w-[min(520px,calc(100%-32px))] bg-slate-950/58 backdrop-blur-md border border-white/8 px-3 py-2 rounded-lg shadow-xl",children:[u.jsxs("div",{className:"hidden",children:[u.jsx("span",{children:"直播解说评论流 FEED"}),u.jsx("span",{children:"LIVE_FEED_SYS"})]}),u.jsx("p",{className:"text-[11px] font-bold text-slate-100/90 leading-relaxed select-text",children:Mi})]}),(Ne==null?void 0:Ne.team)==="DONE"&&u.jsx("div",{className:"absolute inset-0 bg-slate-950/70 backdrop-blur-md flex items-center justify-center pointer-events-auto",children:u.jsxs("div",{className:"w-[min(420px,calc(100%-32px))] bg-slate-950/95 border border-white/10 p-5 rounded-xl flex flex-col items-center justify-center shadow-2xl",children:[u.jsx("p",{className:"text-sm font-black text-white uppercase tracking-wider mb-3",children:h?"点球训练完成":"挑战数据已归档"}),h?u.jsxs("div",{className:"w-full grid grid-cols-2 gap-2",children:[u.jsx("button",{onClick:Uc,className:"bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-3 rounded-lg font-black text-xs tracking-widest transition-colors",children:"再练一次"}),u.jsx("button",{onClick:()=>{f(!1),i("TACTICS")},className:"bg-white hover:bg-slate-200 text-slate-950 py-3 rounded-lg font-black text-xs tracking-widest transition-colors",children:"返回战术板"})]}):u.jsxs("button",{onClick:()=>{const c=Ne.name==="HOME_WIN";V.current={shootoutWinner:c?"USER":"OPPONENT"},c?C.current.push({playerName:"点球大战胜出 (PK Win)",minutes:120}):C.current.push({playerName:"点球大战落败 (PK Loss)",minutes:120}),oi(m=>({...m,score:{home:L.score.home+(c?1:0),away:L.score.away+(c?0:1)}})),On(!1),Ti(!0)},className:"w-full max-w-sm bg-white hover:bg-emerald-400 text-slate-950 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 shadow-xl",children:["进入杯赛事后审计评估",u.jsx(vr,{size:14})]})]})})]}),Bt&&u.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-slate-950/60 backdrop-blur-md",children:u.jsxs("div",{className:"w-[min(720px,calc(100%-32px))] max-h-[calc(100%-32px)] overflow-y-auto custom-scrollbar text-center bg-slate-950/92 border border-white/10 rounded-2xl p-6 shadow-2xl",children:[u.jsx("h3",{className:"text-4xl font-black text-white mb-2 tracking-tighter uppercase italic",children:"比赛结束"}),u.jsxs("div",{className:"mb-5 flex items-center justify-center gap-4 text-sm font-black text-slate-300",children:[u.jsx("span",{className:"max-w-[160px] truncate",children:n.name}),u.jsxs("span",{className:"text-2xl text-white tabular-nums",children:[L.score.home," : ",L.score.away]}),u.jsx("span",{className:"max-w-[160px] truncate",children:e||"对手"})]}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mb-5 text-left",children:[u.jsxs("div",{className:"bg-slate-900/70 border border-slate-800 rounded-xl p-3",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("p",{className:"text-[10px] font-black text-emerald-300 uppercase tracking-widest",children:"关键记录"}),u.jsx("span",{className:"text-[10px] font-mono text-slate-500",children:kc.length})]}),u.jsx("div",{className:"space-y-2 max-h-44 overflow-y-auto custom-scrollbar pr-1",children:kc.length>0?kc.map((c,m)=>u.jsxs("div",{className:Ft("flex items-center gap-3 rounded-lg border px-3 py-2",c.type==="SUB"?"border-sky-400/20 bg-sky-500/10":"border-slate-800 bg-slate-950/70"),children:[u.jsxs("span",{className:Ft("w-9 text-[11px] font-black tabular-nums",c.type==="SUB"?"text-sky-300":"text-emerald-300"),children:[c.minute,"'"]}),u.jsx("span",{className:Ft("shrink-0 rounded px-1.5 py-0.5 text-[8px] font-black",c.type==="SUB"?"bg-sky-400/15 text-sky-200":"bg-emerald-400/15 text-emerald-200"),children:c.type==="SUB"?"换人":"进球"}),u.jsx("span",{className:"min-w-0 flex-1 truncate text-xs font-bold text-slate-100",children:c.description})]},`key-event-${c.minute}-${c.type}-${m}`)):u.jsx("p",{className:"text-xs text-slate-500 bg-slate-950/60 border border-slate-800 rounded-lg px-3 py-2",children:"没有关键比赛记录。"})})]}),u.jsxs("div",{className:"bg-slate-900/70 border border-slate-800 rounded-xl p-3",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("p",{className:"text-[10px] font-black text-slate-300 uppercase tracking-widest",children:"犯规记录"}),u.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:["犯规 ",Wo.fouls.length," / 黄 ",Wo.yellows.length," / 红 ",Wo.reds.length]})]}),u.jsx("div",{className:"space-y-2 max-h-44 overflow-y-auto custom-scrollbar pr-1",children:ah.length>0?ah.map((c,m)=>u.jsxs("div",{className:"flex items-center gap-3 bg-slate-950/70 border border-slate-800 rounded-lg px-3 py-2",children:[u.jsxs("span",{className:"w-9 text-[11px] font-black text-slate-300 tabular-nums",children:[c.minute,"'"]}),u.jsxs("span",{className:"flex-1 min-w-0 text-xs font-bold text-slate-100 truncate",children:[c.playerName," · ",c.foulType]}),c.cardLabel&&u.jsx("span",{className:Ft("text-[9px] font-black px-1.5 py-0.5 rounded shrink-0",c.cardLabel==="红牌"||c.cardLabel==="第二黄牌"?"bg-red-500/15 text-red-300":"bg-yellow-400/15 text-yellow-300"),children:c.cardLabel})]},`discipline-${c.minute}-${c.playerName}-${m}`)):u.jsx("p",{className:"text-xs text-slate-500 bg-slate-950/60 border border-slate-800 rounded-lg px-3 py-2",children:"我方没有犯规记录。"})})]})]}),me.length>0&&u.jsxs("div",{className:"mb-5 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-left",children:[u.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[u.jsx("p",{className:"text-[10px] font-black uppercase tracking-widest text-cyan-200",children:"本场黑箱影响"}),u.jsx("span",{className:"text-[10px] font-mono text-cyan-100/70",children:me.length})]}),u.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto pr-1",children:me.map((c,m)=>{const T=_h(c.cardId);return u.jsxs("div",{className:"rounded-lg border border-cyan-400/15 bg-slate-950/55 px-3 py-2",children:[u.jsxs("p",{className:"text-[10px] font-black text-cyan-200",children:[c.minute,"' · ",T?ta(T.id,Je):c.cardId]}),u.jsx("p",{className:"mt-1 text-[11px] font-semibold leading-relaxed text-slate-200",children:c.text})]},`${c.cardId}-${c.minute}-${m}`)})})]}),Wo.suspendedNames.length>0&&u.jsxs("p",{className:"mb-5 text-xs font-bold text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 text-left",children:["下场缺席：",Wo.suspendedNames.join("、")]}),u.jsx("button",{onClick:()=>{r(L.score.home,L.score.away,C.current,E.current,Ur())},className:"sticky bottom-0 bg-white text-slate-950 px-10 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-emerald-400 transition-colors shadow-2xl shadow-slate-950/70",children:"进入赛后结算"})]})}),u.jsxs(Vc,{children:[L.phase==="FOUL"&&!Ot&&!as&&!Bt&&u.jsx(Ks.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:Ft("absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none",((lh=L.foulInfo)==null?void 0:lh.card)==="RED"||((ch=L.foulInfo)==null?void 0:ch.card)==="SECOND_YELLOW"?"bg-red-500/14":((dh=L.foulInfo)==null?void 0:dh.card)==="YELLOW"?"bg-yellow-500/10":"bg-slate-950/35"),children:u.jsxs(Ks.div,{initial:{scale:.8,rotate:-5},animate:{scale:1,rotate:0},className:Ft("px-12 py-6 border-4 border-white",((uh=L.foulInfo)==null?void 0:uh.card)==="RED"||((hh=L.foulInfo)==null?void 0:hh.card)==="SECOND_YELLOW"?"bg-red-500 text-white shadow-[0_0_50px_rgba(239,68,68,0.5)]":((fh=L.foulInfo)==null?void 0:fh.card)==="YELLOW"?"bg-yellow-400 text-slate-950 shadow-[0_0_50px_rgba(250,204,21,0.5)]":"bg-slate-950/92 text-white border-slate-600 shadow-[0_0_50px_rgba(15,23,42,0.65)]"),children:[u.jsxs("h2",{className:"text-6xl font-black italic tracking-tighter uppercase flex items-center gap-4",children:[u.jsx(qp,{size:48})," ",((mh=L.foulInfo)==null?void 0:mh.card)==="RED"||((ph=L.foulInfo)==null?void 0:ph.card)==="SECOND_YELLOW"?"RED CARD!":((xh=L.foulInfo)==null?void 0:xh.card)==="YELLOW"?"YELLOW CARD!":"FOUL!"]}),L.foulInfo&&u.jsxs("div",{className:"mt-2 text-center",children:[u.jsx("p",{className:"text-lg font-black tracking-widest uppercase",children:L.foulInfo.team==="HOME"?n.name:e||"对手"}),u.jsx("p",{className:"text-sm font-bold opacity-80 tracking-widest",children:L.foulInfo.playerName}),u.jsxs("div",{className:"mt-3 flex items-center justify-center gap-2 text-[10px] font-black tracking-widest",children:[u.jsx("span",{className:"bg-slate-950/15 px-2 py-1 rounded",children:L.foulInfo.foulType}),u.jsxs("span",{className:"bg-slate-950/15 px-2 py-1 rounded",children:["严重度 ",L.foulInfo.severity]}),L.foulInfo.card&&L.foulInfo.card!=="NONE"&&L.foulInfo.card!=="WARNING"&&u.jsx("span",{className:"bg-slate-950/20 px-2 py-1 rounded",children:L.foulInfo.card==="SECOND_YELLOW"?"第二黄牌":L.foulInfo.card==="RED"?"红牌":"黄牌"})]})]}),u.jsx("p",{className:"text-[10px] font-bold tracking-[0.3em] text-center mt-4 opacity-60 underline decoration-2",children:"裁判哨响 • 比赛中断"})]})}),w.show&&u.jsx(Ks.div,{initial:{y:-28,opacity:0},animate:{y:0,opacity:1},exit:{y:-20,opacity:0},transition:{duration:.22},className:Ft("absolute top-20 left-1/2 -translate-x-1/2 z-40 pointer-events-none",w.team==="HOME"?"text-emerald-300":"text-rose-300"),children:u.jsxs(Ks.div,{initial:{scale:.92},animate:{scale:[.92,1.04,1]},transition:{duration:.32},className:Ft("min-w-[360px] rounded-2xl border px-8 py-4 text-center backdrop-blur-xl shadow-2xl",w.team==="HOME"?"bg-emerald-950/80 border-emerald-400/50 shadow-emerald-500/20":"bg-rose-950/80 border-rose-400/50 shadow-rose-500/20"),children:[u.jsx("h2",{className:"text-3xl font-black text-white italic tracking-tight uppercase",children:"进球！"}),u.jsx("p",{className:"text-[10px] font-black tracking-[0.32em] mt-1",children:"GOAL SCORED"})]})})]}),u.jsx(l1,{homePlayers:Ot&&Bi?Bi.home:L.home,awayPlayers:Ot&&Bi?Bi.away:L.away,ball:Ot&&Bi?Bi.ball:L.ball,phase:Ot?"PENALTY":L.phase,isSimulating:Gi,cameraMode:ne==="AUTO"?"AUTO":re,autoCameraBlend:ft,showPlayerInfo:yt,hoverPlayerId:$t,onPlayerHover:rn,currentHalf:Hi,penaltyShootout:Ot&&Bi?{active:!0,perspective:Bi.perspective,goalX:52.5}:void 0}),u.jsxs("div",{className:"absolute top-6 left-6 z-30 flex gap-2",children:[u.jsx("button",{onClick:()=>J("AUTO"),className:Ft("px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all pointer-events-auto",ne==="AUTO"?"bg-emerald-500 border-white/20 text-slate-950 shadow-lg":"bg-slate-900/80 backdrop-blur border-white/5 text-slate-400 hover:text-white"),children:"Auto"}),u.jsx("button",{onClick:()=>{J("TACTICAL")},className:Ft("px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all pointer-events-auto",ne==="TACTICAL"?"bg-white/10 border-white/20 text-white shadow-lg":"bg-slate-900/80 backdrop-blur border-white/5 text-slate-400 hover:text-white"),children:"F1 Tactical"}),u.jsx("button",{onClick:()=>{J("BROADCAST")},className:Ft("px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all pointer-events-auto",ne==="BROADCAST"?"bg-white/10 border-white/20 text-white shadow-lg":"bg-slate-900/80 backdrop-blur border-white/5 text-slate-400 hover:text-white"),children:"F2 Broadcast"}),u.jsx("button",{onClick:()=>{J("STAR")},className:Ft("px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all pointer-events-auto",ne==="STAR"?"bg-white/10 border-white/20 text-white shadow-lg":"bg-slate-900/80 backdrop-blur border-white/5 text-slate-400 hover:text-white"),children:"F3 Star"})]})]}),u.jsx("div",{className:Ft("col-span-12 flex flex-col h-[520px] bg-slate-950/35 overflow-hidden relative border-t lg:border-t-0 border-slate-800 transition-all",Zi?"lg:col-span-1":"lg:col-span-4",h&&"hidden"),children:Zi?u.jsxs("div",{className:"flex h-full flex-col items-center gap-3 bg-slate-950/85 p-3",children:[u.jsx("button",{type:"button",onClick:()=>H(!1),className:"flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 transition-colors hover:bg-emerald-400 hover:text-slate-950",title:"展开教练指挥台",children:u.jsx(r0,{size:16})}),u.jsx("div",{className:"h-px w-full bg-slate-800"}),[{id:"LIVE",label:"战况",count:L.events.length},{id:"TACTICS",label:"战术",count:0},{id:"SUBS",label:"换人",count:Kn+vi.length}].map(c=>u.jsxs("button",{type:"button",onClick:()=>{gn(c.id),H(!1)},className:Ft("flex w-full flex-col items-center gap-1 rounded-xl border px-1 py-2 text-[9px] font-black transition-colors",Ki===c.id?"border-emerald-300 bg-emerald-400 text-slate-950":"border-slate-800 bg-slate-900/70 text-slate-400 hover:text-white"),children:[u.jsx("span",{children:c.label}),c.count>0&&u.jsx("span",{className:"font-mono text-[8px] opacity-80",children:c.count})]},c.id))]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"border-b border-emerald-500/20 bg-slate-950/85 p-3.5 shrink-0 z-20 shadow-[0_12px_30px_rgba(2,6,23,0.35)]",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 mb-3",children:[u.jsx("div",{children:u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"inline-flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/12 text-emerald-300",children:u.jsx(l0,{size:15})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-[11px] font-black text-white tracking-widest uppercase leading-none",children:"教练指挥台"}),u.jsx("p",{className:"mt-1 text-[9px] font-bold text-slate-400",children:"可切换面板，实时调整战术和换人"})]})]})}),u.jsx("button",{type:"button",onClick:()=>H(!0),className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-400 transition-colors hover:border-emerald-300 hover:text-emerald-300",title:"收起教练指挥台",children:u.jsx(s0,{size:15})}),u.jsxs("div",{className:"rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-right shrink-0",children:[u.jsx("p",{className:"text-[8px] font-black uppercase tracking-widest text-emerald-300",children:"阵型"}),u.jsx("p",{className:"text-[11px] font-mono font-black text-white leading-none mt-1",children:An.formation})]})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"LIVE",title:"战况",desc:"日志/趋势",badge:`${L.events.length}`},{id:"TACTICS",title:"战术",desc:"立即调整",badge:"可操作"},{id:"SUBS",title:"换人",desc:"死球生效",badge:`${Kn+vi.length}/${ba}`}].map(c=>{const m=Ki===c.id,T=c.id!=="LIVE";return u.jsxs("button",{type:"button",onClick:()=>gn(c.id),className:Ft("relative min-h-[64px] rounded-xl border px-3 py-2 text-left transition-all group",m?"border-emerald-300 bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20":T?"border-emerald-500/30 bg-emerald-500/10 text-white hover:border-emerald-300 hover:bg-emerald-500/18":"border-slate-700 bg-slate-900/70 text-slate-300 hover:border-slate-500"),children:[u.jsx("span",{className:Ft("block text-sm font-black leading-none",m?"text-slate-950":"text-white"),children:c.title}),u.jsx("span",{className:Ft("mt-1 block text-[9px] font-bold leading-none",m?"text-slate-800":"text-slate-400"),children:c.desc}),u.jsx("span",{className:Ft("absolute right-2 top-2 rounded px-1.5 py-0.5 text-[8px] font-black uppercase leading-none",m?"bg-slate-950/15 text-slate-950":T?"bg-emerald-500/15 text-emerald-300":"bg-slate-950 text-slate-400"),children:c.badge}),T&&!m&&u.jsxs("span",{className:"absolute bottom-2 right-2 flex items-center gap-0.5 text-[8px] font-black text-emerald-300 opacity-90",children:["点击 ",u.jsx(vr,{size:9})]})]},c.id)})})]}),u.jsxs("div",{className:"p-4 flex-grow overflow-y-auto custom-scrollbar bg-slate-950/20",children:[Ki==="LIVE"&&u.jsxs("div",{className:"space-y-4",children:[u.jsx("button",{type:"button",onClick:()=>gn("TACTICS"),className:"w-full rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3 py-2.5 text-left transition-all hover:border-emerald-300 hover:bg-emerald-500/16",children:u.jsxs("div",{className:"flex items-center justify-between gap-3",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-[10px] font-black uppercase tracking-widest text-emerald-300",children:"可操作面板"}),u.jsx("p",{className:"mt-1 text-xs font-black text-white",children:"需要改变比赛走势？点这里进入现场战术指挥"})]}),u.jsx(vr,{size:16,className:"text-emerald-300 shrink-0"})]})}),u.jsxs("div",{className:"flex justify-between items-center mb-1",children:[u.jsx("h4",{className:"text-[9px] font-black text-slate-500 tracking-widest uppercase",children:"实时战报直播"}),u.jsx("div",{className:"flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950/70 p-0.5",children:[["off","静音"],["key","音效"],["all","全部"]].map(([c,m])=>u.jsxs("button",{type:"button",onClick:()=>Xe(c),className:Ft("flex items-center gap-1 rounded-md px-1.5 py-1 text-[8px] font-black transition-colors",vt===c?"bg-emerald-400 text-slate-950":"text-slate-500 hover:bg-slate-900 hover:text-slate-200"),title:c==="off"?"关闭音效":c==="key"?"只播放关键比赛事件音效":"播放关键事件和机会类音效",children:[u.jsx(Gp,{size:9}),u.jsx("span",{children:m})]},c))})]}),!1,u.jsx("div",{className:"space-y-2 max-h-[190px] overflow-y-auto custom-scrollbar pr-1",children:u.jsx(Vc,{initial:!1,children:L.events.map((c,m)=>{const T=c.type==="GOAL",g=c.type==="SUB",U=c.type==="YELLOW"||c.type==="RED";return u.jsxs(Ks.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:Ft("p-2.5 rounded-xl border flex gap-2 items-center transition-all text-left",T?"bg-emerald-500/10 border-emerald-500/20 shadow-lg shadow-emerald-500/5":g?"bg-sky-500/10 border-sky-400/25":U?"bg-amber-500/10 border-amber-400/20":"bg-slate-950/60 border-slate-900/60"),children:[u.jsxs("span",{className:"text-[9px] font-black tabular-nums text-slate-500 w-6 leading-none",children:[c.min,"'"]}),u.jsxs("div",{className:"flex-1 flex items-center gap-1.5 min-w-0",children:[T&&u.jsx($p,{size:10,className:"text-emerald-500 animate-bounce shrink-0"}),g&&u.jsx(vr,{size:11,className:"shrink-0 text-sky-300"}),U&&u.jsx(Vp,{size:11,className:"shrink-0 text-amber-300"}),u.jsx("p",{className:Ft("text-xs font-semibold leading-relaxed",T?"text-emerald-400 font-bold":g?"text-sky-100 font-bold":U?"text-amber-100 font-bold":"text-slate-300"),children:Gf({...c,...c.type==="GOAL"?(()=>{const W=C.current.find(q=>q.minutes===c.min&&q.team===c.team);return{scorerName:(W==null?void 0:W.playerName)||c.scorerName,assistName:(W==null?void 0:W.assistBy)||c.assistName,isOwnGoal:(W==null?void 0:W.isOwnGoal)??c.isOwnGoal}})():{}},{homeTeam:n.name,awayTeam:I||e||"对手",homeScore:L.score.home,awayScore:L.score.away})})]})]},`event-${c.id}-${m}`)})})}),u.jsxs("div",{className:"bg-slate-950/40 border border-slate-900 rounded-xl p-3.5 space-y-3",children:[u.jsx("h4",{className:"text-[9px] font-black text-slate-500 tracking-widest uppercase mb-1",children:"⚽ 攻防状况监测 Indicators"}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 pb-3 border-b border-white/5",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-[8px] text-slate-500 font-bold uppercase leading-none",children:"队员任务 Task"}),u.jsx("p",{className:"text-xs font-black text-amber-400 uppercase tracking-tight mt-1 leading-none",children:vl?vl.task==="DRIBBLE"?"突破盘带":vl.task==="PASS"?"寻找配合":vl.task==="SHOOT"?"轰门起脚":"卡位防守":"空中争顶..."})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-[8px] text-slate-500 font-bold uppercase leading-none",children:"指令 Action"}),u.jsx("p",{className:"text-xs font-black text-blue-400 uppercase tracking-tight mt-1 leading-none",children:L.action.type==="PASS"?"配合多传":L.action.type==="SHOOT"?"轰门起脚":L.action.type==="TACKLE"?"拦截压迫":"常规运动"})]})]}),u.jsx("div",{className:"space-y-2.5 pt-1",children:u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-baseline mb-1",children:[u.jsx("span",{className:"text-[8px] font-black text-slate-400 uppercase",children:"重心深度 Mental Depth"}),u.jsx("span",{className:"text-[8px] font-mono text-emerald-400 uppercase font-black",children:An.mentality==="DEFENSIVE"?"防线锁闭":An.mentality==="ATTACKING"?"全体压逼":"均组织平衡"})]}),u.jsx("div",{className:"h-1 bg-slate-900 rounded-full overflow-hidden",children:u.jsx(Ks.div,{className:"h-full bg-orange-500",animate:{width:An.mentality==="DEFENSIVE"?"25%":An.mentality==="ATTACKING"?"85%":"55%"}})})]})})]})]}),Ki==="TACTICS"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"bg-slate-950/40 border border-slate-900 rounded-xl p-3.5 space-y-2",children:[u.jsxs("div",{className:"flex items-start justify-between gap-2",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-[8px] font-black text-slate-500 uppercase tracking-widest",children:"Intent"}),u.jsx("p",{className:"text-xs font-black text-emerald-400 leading-snug mt-1",children:Rh(An)})]}),u.jsxs("div",{className:"text-right",children:[u.jsx("p",{className:"text-[8px] font-black text-slate-500 uppercase tracking-widest",children:"Opponent"}),u.jsx("p",{className:"text-[10px] font-bold text-amber-300 leading-snug mt-1",children:Rh(to)})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[9px] font-mono text-slate-400",children:[u.jsxs("span",{children:["Direct ",ro.directShare,"%"]}),u.jsxs("span",{children:["Short ",ro.shortShare,"%"]}),u.jsxs("span",{children:["Tackle ",ro.tackles," / Foul ",ro.fouls]}),u.jsxs("span",{children:["Height ",ro.avgLineHeight," / Wide ",ro.wideShare,"%"]})]})]}),u.jsxs("div",{className:"bg-slate-950/40 border border-slate-900 rounded-xl p-3.5 space-y-4",children:[u.jsxs("div",{children:[u.jsxs("span",{className:"text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1.5",children:["压迫强度: ",An.pressingMode==="HIGH_PRESS"?"高压":An.pressingMode==="LOW_BLOCK"?"低位":"中位"]}),u.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:["LOW_BLOCK","MID_BLOCK","HIGH_PRESS"].map(c=>u.jsx("button",{onClick:()=>ep(c),className:Ft("py-1.5 px-1 rounded-lg text-[9px] font-black uppercase tracking-wider border transition-all truncate text-center",An.pressingMode===c?"bg-red-500 text-white border-red-400 font-extrabold shadow":"bg-slate-900 border-white/5 text-slate-400 hover:text-white"),children:c==="HIGH_PRESS"?"高压":c==="LOW_BLOCK"?"低位":"中位"},c))})]}),u.jsxs("div",{children:[u.jsxs("span",{className:"text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1.5",children:["防线高度: ",An.defensiveLine>=66?"高防线":An.defensiveLine<=34?"低防线":"标准"]}),u.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:["LOW","STANDARD","HIGH"].map(c=>u.jsx("button",{onClick:()=>tp(c),className:Ft("py-1.5 px-1 rounded-lg text-[9px] font-black uppercase tracking-wider border transition-all truncate text-center",(An.defensiveLine>=66?"HIGH":An.defensiveLine<=34?"LOW":"STANDARD")===c?"bg-blue-500 text-white border-blue-400 font-extrabold shadow":"bg-slate-900 border-white/5 text-slate-400 hover:text-white"),children:c==="HIGH"?"高防线":c==="LOW"?"低防线":"标准"},c))})]}),u.jsxs("div",{children:[u.jsxs("span",{className:"text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1.5",children:["出球长度: ",An.passingLength==="SHORT"?"多短传配合":An.passingLength==="DIRECT"?"大脚长传":"混合出球"]}),u.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:["SHORT","MIXED","DIRECT"].map(c=>u.jsx("button",{onClick:()=>qm(c),className:Ft("py-1.5 px-1 rounded-lg text-[9px] font-black uppercase tracking-wider border transition-all truncate text-center",An.passingLength===c?"bg-emerald-500 text-slate-950 border-emerald-400 font-extrabold":"bg-slate-900 border-white/5 text-slate-400 hover:text-white"),children:c==="SHORT"?"多短传":c==="DIRECT"?"多长传":"混合"},c))})]}),u.jsxs("div",{children:[u.jsxs("span",{className:"text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1.5",children:["进攻焦点: ",An.attackFocus==="WIDE"?"边路突破 (拉开球场宽度)":An.attackFocus==="CENTRAL"?"中路渗透 (强化纵向塞传)":"混合推进 (多路机动)"]}),u.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:["WIDE","MIXED","CENTRAL"].map(c=>u.jsx("button",{onClick:()=>Zm(c),className:Ft("py-1.5 px-1 rounded-lg text-[9px] font-black uppercase tracking-wider border transition-all truncate text-center",An.attackFocus===c?"bg-amber-500 text-slate-950 border-amber-400 font-extrabold shadow":"bg-slate-900 border-white/5 text-slate-400 hover:text-white"),children:c==="WIDE"?"边路突破":c==="CENTRAL"?"中路渗透":"混合"},c))})]}),u.jsxs("div",{children:[u.jsxs("span",{className:"text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1.5",children:["传防作风: ",An.buildUpStyle==="POSSESSION"?"传控渗透 (极致极致Tiki)":An.buildUpStyle==="DRIBBLE"?"单兵突破 (鼓励一对一)":"传突并存"]}),u.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:["POSSESSION","BALANCED","DRIBBLE"].map(c=>u.jsx("button",{onClick:()=>Jm(c),className:Ft("py-1.5 px-1 rounded-lg text-[9px] font-black uppercase tracking-wider border transition-all truncate text-center",An.buildUpStyle===c?"bg-purple-500 text-white border-purple-400 font-extrabold shadow":"bg-slate-900 border-white/5 text-slate-400 hover:text-white"),children:c==="POSSESSION"?"传控控球":c==="DRIBBLE"?"盘带爆破":"混合"},c))})]}),u.jsxs("div",{children:[u.jsxs("span",{className:"text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1.5",children:["攻防心态: ",An.mentality==="ATTACKING"?"极尽攻势":An.mentality==="DEFENSIVE"?"防守口袋":"站位均衡"]}),u.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:["DEFENSIVE","BALANCED","ATTACKING"].map(c=>u.jsx("button",{onClick:()=>Qm(c),className:Ft("py-1.5 px-1 rounded-lg text-[9px] font-black uppercase tracking-wider border transition-all truncate text-center",An.mentality===c?c==="ATTACKING"?"bg-red-500 text-white border-red-400 font-extrabold shadow":c==="DEFENSIVE"?"bg-blue-500 text-white border-blue-400 font-extrabold shadow":"bg-emerald-500 text-slate-950 border-emerald-400 font-extrabold shadow":"bg-slate-900 border-white/5 text-slate-400 hover:text-white"),children:c==="ATTACKING"?"极尽攻拔":c==="DEFENSIVE"?"防守口袋":"稳步推进"},c))})]}),u.jsxs("div",{children:[u.jsxs("span",{className:"text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1.5",children:["创造风险: ",An.risk>=66?"冒险":An.risk<=34?"保守":"标准"]}),u.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:["CONSERVATIVE","STANDARD","ADVENTUROUS"].map(c=>u.jsx("button",{onClick:()=>np(c),className:Ft("py-1.5 px-1 rounded-lg text-[9px] font-black uppercase tracking-wider border transition-all truncate text-center",(An.risk>=66?"ADVENTUROUS":An.risk<=34?"CONSERVATIVE":"STANDARD")===c?"bg-orange-500 text-slate-950 border-orange-400 font-extrabold shadow":"bg-slate-900 border-white/5 text-slate-400 hover:text-white"),children:c==="ADVENTUROUS"?"冒险":c==="CONSERVATIVE"?"保守":"标准"},c))})]})]}),u.jsxs("div",{className:"bg-slate-950/40 border border-slate-900 rounded-xl p-3.5 space-y-2",children:[u.jsx("span",{className:"text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1",children:"📋 现场机动变阵 Formation"}),u.jsx("span",{className:"text-[8px] text-slate-500 block mb-1.5 leading-normal",children:"实时调整3D仿真球场中机动群跑重心与连环防守卡口。"}),u.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:["4-4-2","4-3-3","3-5-2","5-3-2","4-2-3-1"].map(c=>u.jsxs("button",{onClick:()=>Ym(c),className:Ft("py-2 px-1 rounded-lg text-center border transition-all text-[10px] font-black leading-none",An.formation===c?"bg-gradient-to-br from-emerald-500 to-teal-500 text-slate-950 border-emerald-300 shadow-sm":"bg-slate-900 border-white/5 text-slate-400 hover:text-white hover:bg-slate-900"),children:[c,u.jsx("span",{className:"text-[7px] block font-mono font-normal opacity-70 mt-0.5 leading-none",children:c==="4-3-3"?"平衡传控":c==="4-4-2"?"快马翼路":c==="3-5-2"?"高位饱和":c==="5-3-2"?"挂壁锁防":"多元前腰"})]},c))})]})]}),Ki==="SUBS"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"rounded-xl border border-slate-800 bg-slate-950/55 p-3",children:[u.jsxs("div",{className:"flex items-start justify-between gap-3",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"text-xs font-black text-white",children:"换人管理"}),u.jsx("p",{className:"mt-1 text-[10px] font-semibold leading-relaxed text-slate-400",children:"先点场上球员，再点替补球员。换人会进入队列，并在下一次死球统一生效；点两个场上球员可交换职责。"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-1.5 text-right",children:[u.jsxs("div",{className:"rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-2 py-1",children:[u.jsx("p",{className:"text-[8px] font-black uppercase tracking-widest text-emerald-200",children:"己方"}),u.jsxs("p",{className:Ft("mt-0.5 text-[11px] font-mono font-black",Kn+vi.length>=ba?"text-rose-300":"text-white"),children:[Kn,"+",vi.length,"/",ba]})]}),u.jsxs("div",{className:"rounded-lg border border-sky-400/20 bg-sky-400/10 px-2 py-1",children:[u.jsx("p",{className:"text-[8px] font-black uppercase tracking-widest text-sky-200",children:"对手"}),u.jsxs("p",{className:"mt-0.5 text-[11px] font-mono font-black text-white",children:[ki,"+",Wi.length,"/",ba]})]})]})]}),u.jsxs("div",{className:"mt-2 flex flex-wrap gap-1.5 text-[9px] font-black",children:[u.jsx("span",{className:Ft("rounded-md border px-2 py-1",No(L.phase)?"border-emerald-300/30 bg-emerald-400/10 text-emerald-200":"border-amber-300/25 bg-amber-300/10 text-amber-100"),children:No(L.phase)?"当前死球：队列可立即执行":"比赛进行中：换人等待死球"}),Wi.length>0&&u.jsx("span",{className:"rounded-md border border-sky-300/25 bg-sky-400/10 px-2 py-1 text-sky-100",children:"对手已准备换人"})]})]}),ut&&Yt&&_s&&Ms&&u.jsxs("div",{className:"rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-3 transition-all",children:[u.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-stretch gap-2",children:[u.jsxs("div",{className:"rounded-lg border border-rose-300/20 bg-rose-400/10 px-2.5 py-2",children:[u.jsx("p",{className:"text-[8px] font-black uppercase tracking-widest text-rose-200",children:"换下"}),u.jsxs("p",{className:"mt-1 truncate text-xs font-black text-white",children:["#",_s.shirtNumber??"--"," ",_s.name]}),u.jsxs("p",{className:"mt-1 text-[10px] font-bold text-rose-50/80",children:[wa(_s.role)," · 体力 ",Math.round(_s.stamina),"%"]})]}),u.jsx("div",{className:"flex items-center justify-center text-slate-500",children:u.jsx(vr,{size:16})}),u.jsxs("div",{className:"rounded-lg border border-emerald-300/25 bg-slate-950/45 px-2.5 py-2",children:[u.jsx("p",{className:"text-[8px] font-black uppercase tracking-widest text-emerald-200",children:"换上"}),u.jsxs("p",{className:"mt-1 truncate text-xs font-black text-white",children:["#",Ms.shirtNumber??"--"," ",Ms.name]}),u.jsxs("p",{className:"mt-1 text-[10px] font-bold text-emerald-50/85",children:[wa(Ms.position)," · 总评 ",Ms.overall," · 体能 ",Math.round(Ms.runtime.condition.fitness),"%"]}),u.jsx("p",{className:"mt-0.5 text-[9px] font-black text-amber-200",children:Rc(Ms,_s)})]})]}),Kn+vi.length>=ba?u.jsx("p",{className:"mt-2 rounded-lg border border-rose-300/20 bg-rose-400/10 px-2 py-1 text-center text-[9px] font-black text-rose-200",children:"无更换名额"}):u.jsx("button",{onClick:Xm,className:"mt-2 w-full rounded-lg bg-emerald-400 py-2 text-[10px] font-black uppercase tracking-wider text-slate-950 shadow transition-all hover:bg-emerald-300",children:"加入换人队列"})]}),vi.length>0&&u.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/20 rounded-xl p-2 space-y-1",children:[u.jsx("div",{className:"text-[8px] font-black text-amber-300 uppercase tracking-widest",children:"己方待死球执行"}),vi.map(c=>{const m=L.home.find(g=>g.id===c.outgoingId),T=n.squad.find(g=>g.id===c.incomingId);return u.jsxs("div",{className:"flex items-center justify-between gap-2 text-[9px] font-bold text-slate-300",children:[u.jsx("span",{className:"truncate",children:m?`#${m.shirtNumber??"--"} ${m.name}`:"场上球员"}),u.jsx(vr,{size:12,className:"text-amber-300 shrink-0"}),u.jsx("span",{className:"truncate text-emerald-300",children:T?`#${T.shirtNumber??"--"} ${T.name}`:"替补球员"})]},`${c.outgoingId}-${c.incomingId}`)})]}),Wi.length>0&&u.jsxs("div",{className:"rounded-xl border border-sky-400/20 bg-sky-400/10 p-2 space-y-1",children:[u.jsx("div",{className:"text-[8px] font-black uppercase tracking-widest text-sky-200",children:"对手待死球执行"}),Wi.map(c=>{const m=L.away.find(g=>g.id===c.outgoingId),T=st==null?void 0:st.squad.find(g=>g.id===c.incomingId);return u.jsxs("div",{className:"flex items-center justify-between gap-2 text-[9px] font-bold text-slate-300",children:[u.jsx("span",{className:"truncate",children:m?`#${m.shirtNumber??"--"} ${m.name}`:"对手场上球员"}),u.jsx(vr,{size:12,className:"shrink-0 text-sky-200"}),u.jsx("span",{className:"truncate text-sky-100",children:T?`#${T.shirtNumber??"--"} ${T.name}`:"对手替补"})]},`away-${c.outgoingId}-${c.incomingId}`)})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:"flex items-center justify-between gap-2",children:[u.jsxs("span",{className:"text-[8px] font-black text-slate-500 uppercase block pl-0.5",children:["场上站位 · ",An.formation]}),u.jsx("span",{className:"text-[8px] font-mono font-black text-slate-500",children:_s?`${_s.role} ${Math.round(_s.stamina)}%`:"选择换下位置"})]}),u.jsxs("div",{className:"relative h-[300px] rounded-xl border border-emerald-400/15 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),rgba(15,23,42,0.95)_58%)] overflow-hidden shadow-inner",children:[u.jsx("div",{className:"absolute inset-x-5 top-1/2 h-px bg-white/10"}),u.jsx("div",{className:"absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"}),u.jsx("div",{className:"absolute inset-x-16 top-2 h-8 rounded-b-lg border-x border-b border-white/10"}),u.jsx("div",{className:"absolute inset-x-16 bottom-2 h-8 rounded-t-lg border-x border-t border-white/10"}),Ac.map(({player:c,left:m,top:T,slotLabel:g})=>{const U=ut===c.id,W=Zs.has(c.id),q=c.sentOff||F.current.has(c.id),j=Math.round(c.stamina),te=j<60;return u.jsxs("button",{type:"button",disabled:W||q,onClick:()=>$m(c.id),className:Ft("absolute -translate-x-1/2 -translate-y-1/2 w-[74px] min-h-[45px] rounded-lg border px-1.5 py-1 text-left transition-all focus:outline-none focus:ring-2 focus:ring-emerald-300/50",q?"bg-slate-900/72 border-rose-400/55 opacity-80 cursor-not-allowed grayscale":W?"bg-amber-500/15 border-amber-300/30 opacity-70 cursor-not-allowed":U?"bg-rose-500/25 border-rose-300/75 shadow-[0_0_18px_rgba(251,113,133,0.24)] scale-105":te?"bg-amber-500/15 border-amber-300/35 hover:bg-amber-500/25":"bg-slate-950/82 border-white/10 hover:bg-slate-900 hover:border-emerald-300/45"),style:{left:`${m}%`,top:`${T}%`},title:`#${c.shirtNumber??"--"} ${g} ${c.name} 总评 ${Math.round(c.baseOverall)} 体力 ${j}%`,children:[q&&u.jsx("span",{className:"absolute -right-1 -top-1 rounded-sm border border-rose-200/70 bg-rose-500 px-1 py-0.5 text-[7px] font-black leading-none text-white shadow",children:"RC"}),q&&u.jsxs("span",{className:"pointer-events-none absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-slate-950/78 px-1 text-center",children:[u.jsx("span",{className:"text-[9px] font-black leading-none text-rose-200",children:"红牌空位"}),u.jsx("span",{className:"mt-1 text-[7px] font-black leading-none text-slate-400",children:"不可换人"})]}),u.jsxs("span",{className:"block text-[8px] font-black font-mono text-emerald-300 leading-none",children:["#",c.shirtNumber??"--"," ",g," · ",Math.round(c.baseOverall)]}),u.jsx("span",{className:"block text-[10px] font-black text-white truncate leading-tight mt-0.5",children:c.name}),u.jsx("span",{className:Ft("block text-[8px] font-mono font-black leading-none mt-0.5",te?"text-amber-200":"text-slate-400"),children:W?"待换":`${wa(c.role)} ${j}%`})]},`pitch-dot-${c.id}`)})]}),u.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-lg border border-slate-900/70 bg-slate-950/35 px-2 py-1.5",children:[u.jsxs("div",{className:"min-w-0",children:[u.jsx("span",{className:"block text-[7px] font-black text-slate-500 uppercase",children:"换下"}),u.jsx("span",{className:"block text-[10px] font-black text-rose-200 truncate",children:_s?`#${_s.shirtNumber??"--"} ${_s.role} ${_s.name}`:"点选场上位置"})]}),u.jsx(vr,{size:13,className:"text-slate-500"}),u.jsxs("div",{className:"min-w-0 text-right",children:[u.jsx("span",{className:"block text-[7px] font-black text-slate-500 uppercase",children:"换上"}),u.jsx("span",{className:"block text-[10px] font-black text-emerald-200 truncate",children:Ms?`#${Ms.shirtNumber??"--"} ${wa(Ms.position)} ${Ms.name} · ${Ms.overall}`:"点选替补球员"})]})]})]}),!1,u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("div",{className:"flex items-center justify-between gap-2 px-0.5",children:[u.jsx("span",{className:"text-[8px] font-black text-slate-500 uppercase block",children:"🔵 替补席"}),u.jsx("span",{className:"text-[8px] font-black text-slate-600",children:"姓名 / 位置 / 总评 / 体能"})]}),u.jsxs("div",{className:"grid max-h-[178px] grid-cols-2 gap-1.5 overflow-y-auto pr-1 custom-scrollbar xl:grid-cols-3",children:[n.squad.filter(c=>!L.home.some(m=>m.id===c.id)&&!Sa.has(c.id)&&!F.current.has(c.id)&&!x.has(c.id)&&!R.has(c.id)).map((c,m)=>{const T=Yt===c.id,g=c.runtime.condition.fitness;let U="text-emerald-400";g<60?U="text-rose-400":g<85&&(U="text-amber-400");const W=Rc(c,_s);return u.jsxs("div",{onClick:()=>ri(T?null:c.id),className:Ft("relative min-h-[58px] rounded-lg border px-2 py-1.5 transition-all cursor-pointer group",T?"bg-emerald-500/15 border-emerald-300/60 shadow-[0_0_16px_rgba(52,211,153,0.14)]":"bg-slate-950/45 border-slate-900/70 hover:bg-slate-900 hover:border-emerald-300/35"),title:`#${c.shirtNumber??"--"} ${c.name} · ${wa(c.position)} · 总评 ${c.overall} · 体能 ${Math.round(g)}% · ${W}`,children:[u.jsxs("div",{className:"flex items-center justify-between gap-1.5",children:[u.jsxs("span",{className:"min-w-0 flex-1 truncate text-[10px] font-black leading-none text-slate-100 group-hover:text-white",children:["#",c.shirtNumber??"--"," ",c.name]}),u.jsx("span",{className:"shrink-0 rounded-md border border-emerald-300/20 bg-emerald-400/10 px-1.5 py-0.5 text-[9px] font-black leading-none text-emerald-200",children:c.overall})]}),u.jsxs("div",{className:"mt-1.5 flex items-center justify-between gap-1.5 text-[8px] font-black leading-none",children:[u.jsx("span",{className:"truncate rounded bg-slate-900/80 px-1.5 py-0.5 text-slate-400",children:wa(c.position)}),u.jsxs("span",{className:Ft("shrink-0 font-mono",U),children:[Math.round(g),"%"]})]}),u.jsx("div",{className:"mt-1 h-1 overflow-hidden rounded-full bg-slate-900",children:u.jsx("div",{className:Ft("h-full",g<60?"bg-rose-400":g<85?"bg-amber-300":"bg-emerald-400"),style:{width:`${Math.max(4,Math.min(100,g))}%`}})})]},`bench-sub-unique-${c.id}`)}),n.squad.filter(c=>!L.home.some(m=>m.id===c.id)&&(Sa.has(c.id)||F.current.has(c.id)||x.has(c.id)||R.has(c.id))).map(c=>{const m=Fr(c.id,"INCOMING")||"不可换上";return u.jsxs("div",{className:"min-h-[58px] rounded-lg border border-slate-900/70 bg-slate-950/25 px-2 py-1.5 opacity-50",title:`#${c.shirtNumber??"--"} ${c.name} · ${wa(c.position)} · 总评 ${c.overall} · ${m}`,children:[u.jsxs("div",{className:"flex items-center justify-between gap-1.5",children:[u.jsxs("span",{className:"min-w-0 flex-1 truncate text-[10px] font-black leading-none text-slate-500",children:["#",c.shirtNumber??"--"," ",c.name]}),u.jsx("span",{className:"shrink-0 rounded bg-slate-900 px-1.5 py-0.5 text-[8px] font-black leading-none text-slate-500",children:c.overall})]}),u.jsxs("div",{className:"mt-1.5 flex items-center justify-between gap-1.5 text-[8px] font-black leading-none",children:[u.jsx("span",{className:"truncate text-slate-600",children:wa(c.position)}),u.jsx("span",{className:"shrink-0 text-rose-300",children:m})]})]},`bench-blocked-${c.id}`)})]})]})]})]})]})]})})]})]})})}export{k1 as default};
