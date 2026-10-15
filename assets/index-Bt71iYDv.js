(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Xc="modulepreload",qc=function(i,t){return new URL(i,t).href},Fo={},Yc=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){let a=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(l=>({status:"fulfilled",value:l}),l=>({status:"rejected",reason:l}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=a(e.map(h=>{if(h=qc(h,n),h in Fo)return;Fo[h]=!0;const f=h.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!n)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===h&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${l}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":Xc,f||(g.as="script"),g.crossOrigin="",g.href=h,u&&g.setAttribute("nonce",u),document.head.appendChild(g),f)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};function Lr(i,t="custom"){const e=(i.items||[]).map((n,r)=>{const s=Array.isArray(n.wrong)?n.wrong.filter(Boolean):[n.wrong1,n.wrong2,n.wrong3].filter(Boolean);return{item_id:String(n.item_id||`q${String(r+1).padStart(2,"0")}`),question:String(n.question||"").trim(),correct:String(n.correct||"").trim(),wrong:s.map(a=>String(a).trim()).filter(Boolean).slice(0,2),skill_tags:n.skill_tags||i.skill_tags||[],audio:String(n.audio||n.audio_en||"").trim()}}).filter(n=>n.question&&n.correct&&n.wrong.length>=1);if(!e.length)throw new Error("Pack has no usable questions. Need question + correct + at least one wrong.");return{pack_id:i.pack_id||t,title:i.title||"Ski Jump",module_id:i.module_id||"ski_jump",activity_id:i.activity_id||"slope_jump",skill_tags:i.skill_tags||["mcq"],ui_locale:i.ui_locale||"en",seconds:Number(i.seconds||15),mastery_correct:Number(i.mastery_correct||3),items:e}}async function Oo(i){const t=await fetch(i);if(!t.ok)throw new Error(`Could not load pack ${i}`);return Lr(await t.json())}function $c(i,t){const r=((i[0]||[]).map(s=>String(s).trim().toLowerCase()).includes("question")?i.slice(1):i).filter(s=>s&&String(s[0]||"").trim()).map((s,a)=>{const o=Array.isArray(s)?s:Object.values(s),[c,u,h,f]=o.map(l=>l==null?"":String(l));return{item_id:`q${String(a+1).padStart(2,"0")}`,question:c,correct:u,wrong:[h,f]}});return Lr({title:t,items:r,pack_id:t.toLowerCase().replace(/\s+/g,"-")})}async function jc(i){const t=i.name||"pack";if(t.toLowerCase().endsWith(".json"))return Lr(JSON.parse(await i.text()),t);const e=await Yc(()=>import("./xlsx-D2ygFpn3.js"),[],import.meta.url),n=e.read(await i.arrayBuffer(),{type:"array"}),r=e.utils.sheet_to_json(n.Sheets[n.SheetNames[0]],{header:1,defval:""});if(!r.length)throw new Error("Empty spreadsheet");return $c(r,t.replace(/\.[^.]+$/,""))}function Bo(i){const t=i.slice();for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oo="170",Jc=0,zo=1,Zc=2,ec=1,Kc=2,nn=3,yn=0,Ee=1,Oe=2,Mn=0,li=1,ko=2,Ho=3,Go=4,Qc=5,Un=100,tl=101,el=102,nl=103,il=104,rl=200,sl=201,ol=202,al=203,gs=204,_s=205,cl=206,ll=207,ul=208,hl=209,fl=210,dl=211,pl=212,ml=213,gl=214,vs=0,xs=1,Ms=2,fi=3,Ss=4,ys=5,Es=6,Ts=7,ao=0,_l=1,vl=2,Sn=0,xl=1,Ml=2,Sl=3,yl=4,El=5,Tl=6,bl=7,nc=300,di=301,pi=302,bs=303,ws=304,Dr=306,wr=1e3,Fn=1001,As=1002,Re=1003,wl=1004,Xi=1005,Ve=1006,Or=1007,On=1008,an=1009,ic=1010,rc=1011,zi=1012,co=1013,kn=1014,We=1015,Gi=1016,lo=1017,uo=1018,mi=1020,sc=35902,oc=1021,ac=1022,ze=1023,cc=1024,lc=1025,ui=1026,gi=1027,ho=1028,fo=1029,uc=1030,po=1031,mo=1033,xr=33776,Mr=33777,Sr=33778,yr=33779,Rs=35840,Cs=35841,Ps=35842,Ls=35843,Ds=36196,Us=37492,Is=37496,Ns=37808,Fs=37809,Os=37810,Bs=37811,zs=37812,ks=37813,Hs=37814,Gs=37815,Vs=37816,Ws=37817,Xs=37818,qs=37819,Ys=37820,$s=37821,Er=36492,js=36494,Js=36495,hc=36283,Zs=36284,Ks=36285,Qs=36286,Al=3200,Rl=3201,fc=0,Cl=1,xn="",ge="srgb",vi="srgb-linear",Ur="linear",Qt="srgb",Xn=7680,Vo=519,Pl=512,Ll=513,Dl=514,dc=515,Ul=516,Il=517,Nl=518,Fl=519,Wo=35044,Bn=35048,Xo="300 es",sn=2e3,Ar=2001;class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qo=1234567;const Ni=Math.PI/180,ki=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function go(i,t){return(i%t+t)%t}function Ol(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Bl(i,t,e){return i!==t?(e-i)/(t-i):0}function Fi(i,t,e){return(1-e)*i+e*t}function zl(i,t,e,n){return Fi(i,t,1-Math.exp(-e*n))}function kl(i,t=1){return t-Math.abs(go(i,t*2)-t)}function Hl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Gl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vl(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wl(i,t){return i+Math.random()*(t-i)}function Xl(i){return i*(.5-Math.random())}function ql(i){i!==void 0&&(qo=i);let t=qo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yl(i){return i*Ni}function $l(i){return i*ki}function jl(i){return(i&i-1)===0&&i!==0}function Jl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kl(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),u=s((t+n)/2),h=a((t+n)/2),f=s((t-n)/2),l=a((t-n)/2),p=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*h,c*f,c*l,o*u);break;case"YZY":i.set(c*l,o*h,c*f,o*u);break;case"ZXZ":i.set(c*f,c*l,o*h,o*u);break;case"XZX":i.set(o*h,c*g,c*p,o*u);break;case"YXY":i.set(c*p,o*h,c*g,o*u);break;case"ZYZ":i.set(c*g,c*p,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const In={DEG2RAD:Ni,RAD2DEG:ki,generateUUID:Mi,clamp:fe,euclideanModulo:go,mapLinear:Ol,inverseLerp:Bl,lerp:Fi,damp:zl,pingpong:kl,smoothstep:Hl,smootherstep:Gl,randInt:Vl,randFloat:Wl,randFloatSpread:Xl,seededRandom:ql,degToRad:Yl,radToDeg:$l,isPowerOfTwo:jl,ceilPowerOfTwo:Jl,floorPowerOfTwo:Zl,setQuaternionFromProperEuler:Kl,normalize:Se,denormalize:ai};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,r,s,a,o,c,u){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u)}set(t,e,n,r,s,a,o,c,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],l=n[2],p=n[5],g=n[8],_=r[0],m=r[3],d=r[6],S=r[1],T=r[4],v=r[7],D=r[2],A=r[5],C=r[8];return s[0]=a*_+o*S+c*D,s[3]=a*m+o*T+c*A,s[6]=a*d+o*v+c*C,s[1]=u*_+h*S+f*D,s[4]=u*m+h*T+f*A,s[7]=u*d+h*v+f*C,s[2]=l*_+p*S+g*D,s[5]=l*m+p*T+g*A,s[8]=l*d+p*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-n*s*h+n*o*c+r*s*u-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],f=h*a-o*u,l=o*c-h*s,p=u*s-a*c,g=e*f+n*l+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*u-h*n)*_,t[2]=(o*n-r*a)*_,t[3]=l*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(n*c-u*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-r*u,r*c,-r*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Br.makeScale(t,e)),this}rotate(t){return this.premultiply(Br.makeRotation(-t)),this}translate(t,e){return this.premultiply(Br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Br=new zt;function pc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ql(){const i=Hi("canvas");return i.style.display="block",i}const Yo={};function Ui(i){i in Yo||(Yo[i]=!0,console.warn(i))}function tu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function eu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(i.r=on(i.r),i.g=on(i.g),i.b=on(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xn?Ur:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function on(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const $o=[.64,.33,.3,.6,.15,.06],jo=[.2126,.7152,.0722],Jo=[.3127,.329],Zo=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ko=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[vi]:{primaries:$o,whitePoint:Jo,transfer:Ur,toXYZ:Zo,fromXYZ:Ko,luminanceCoefficients:jo,workingColorSpaceConfig:{unpackColorSpace:ge},outputColorSpaceConfig:{drawingBufferColorSpace:ge}},[ge]:{primaries:$o,whitePoint:Jo,transfer:Qt,toXYZ:Zo,fromXYZ:Ko,luminanceCoefficients:jo,outputColorSpaceConfig:{drawingBufferColorSpace:ge}}});let qn;class iu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qn===void 0&&(qn=Hi("canvas")),qn.width=t.width,qn.height=t.height;const n=qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Hi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=on(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(on(e[n]/255)*255):e[n]=on(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ru=0;class mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zr(r[a].image)):s.push(zr(r[a]))}else s=zr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function zr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let su=0;class _e extends xi{constructor(t=_e.DEFAULT_IMAGE,e=_e.DEFAULT_MAPPING,n=Fn,r=Fn,s=Ve,a=On,o=ze,c=an,u=_e.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Mi(),this.name="",this.source=new mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wr:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case As:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wr:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case As:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_e.DEFAULT_IMAGE=null;_e.DEFAULT_MAPPING=nc;_e.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,r=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,u=c[0],h=c[4],f=c[8],l=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-l)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+l)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(u+1)/2,v=(p+1)/2,D=(d+1)/2,A=(h+l)/4,C=(f+_)/4,P=(g+m)/4;return T>v&&T>D?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=A/n,s=C/n):v>D?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=A/r,s=P/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=C/s,r=P/s),this.set(n,r,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(l-h)*(l-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(l-h)/S,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ou extends xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new _e(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends ou{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gc extends _e{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class au extends _e{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],u=n[r+1],h=n[r+2],f=n[r+3];const l=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=l,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==l||u!==p||h!==g){let m=1-o;const d=c*l+u*p+h*g+f*_,S=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const D=Math.sqrt(T),A=Math.atan2(D,d*S);m=Math.sin(m*A)/D,o=Math.sin(o*A)/D}const v=o*S;if(c=c*m+l*v,u=u*m+p*v,h=h*m+g*v,f=f*m+_*v,m===1-o){const D=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=D,u*=D,h*=D,f*=D}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a],l=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+h*f+c*p-u*l,t[e+1]=c*g+h*l+u*f-o*p,t[e+2]=u*g+h*p+o*l-c*f,t[e+3]=h*g-o*f-c*l-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(r/2),f=o(s/2),l=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=l*h*f+u*p*g,this._y=u*p*f-l*h*g,this._z=u*h*g+l*p*f,this._w=u*h*f-l*p*g;break;case"YXZ":this._x=l*h*f+u*p*g,this._y=u*p*f-l*h*g,this._z=u*h*g-l*p*f,this._w=u*h*f+l*p*g;break;case"ZXY":this._x=l*h*f-u*p*g,this._y=u*p*f+l*h*g,this._z=u*h*g+l*p*f,this._w=u*h*f-l*p*g;break;case"ZYX":this._x=l*h*f-u*p*g,this._y=u*p*f+l*h*g,this._z=u*h*g-l*p*f,this._w=u*h*f+l*p*g;break;case"YZX":this._x=l*h*f+u*p*g,this._y=u*p*f+l*h*g,this._z=u*h*g-l*p*f,this._w=u*h*f-l*p*g;break;case"XZY":this._x=l*h*f-u*p*g,this._y=u*p*f-l*h*g,this._z=u*h*g+l*p*f,this._w=u*h*f+l*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],u=e[2],h=e[6],f=e[10],l=n+o+f;if(l>0){const p=.5/Math.sqrt(l+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-n*u,this._z=s*h+a*u+n*c-r*o,this._w=a*h-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),f=Math.sin((1-e)*h)/u,l=Math.sin(e*h)/u;return this._w=a*f+this._w*l,this._x=n*f+this._x*l,this._y=r*f+this._y*l,this._z=s*f+this._z*l,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*r-o*n),h=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*u+a*f-o*h,this.y=n+c*h+o*u-s*f,this.z=r+c*f+s*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kr.copy(this).projectOnVector(t),this.sub(kr)}reflect(t){return this.sub(kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new U,Qo=new Si;class Gn{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ie.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ie.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ie.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ie):Ie.fromBufferAttribute(s,a),Ie.applyMatrix4(t.matrixWorld),this.expandByPoint(Ie);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qi.copy(n.boundingBox)),qi.applyMatrix4(t.matrixWorld),this.union(qi)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ie),Ie.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ai),Yi.subVectors(this.max,Ai),Yn.subVectors(t.a,Ai),$n.subVectors(t.b,Ai),jn.subVectors(t.c,Ai),un.subVectors($n,Yn),hn.subVectors(jn,$n),bn.subVectors(Yn,jn);let e=[0,-un.z,un.y,0,-hn.z,hn.y,0,-bn.z,bn.y,un.z,0,-un.x,hn.z,0,-hn.x,bn.z,0,-bn.x,-un.y,un.x,0,-hn.y,hn.x,0,-bn.y,bn.x,0];return!Hr(e,Yn,$n,jn,Yi)||(e=[1,0,0,0,1,0,0,0,1],!Hr(e,Yn,$n,jn,Yi))?!1:($i.crossVectors(un,hn),e=[$i.x,$i.y,$i.z],Hr(e,Yn,$n,jn,Yi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ie).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ie).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Je=[new U,new U,new U,new U,new U,new U,new U,new U],Ie=new U,qi=new Gn,Yn=new U,$n=new U,jn=new U,un=new U,hn=new U,bn=new U,Ai=new U,Yi=new U,$i=new U,wn=new U;function Hr(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){wn.fromArray(i,s);const o=r.x*Math.abs(wn.x)+r.y*Math.abs(wn.y)+r.z*Math.abs(wn.z),c=t.dot(wn),u=e.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const cu=new Gn,Ri=new U,Gr=new U;class yi{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);const e=Ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ri,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(Gr)),this.expandByPoint(Ri.copy(t.center).sub(Gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ze=new U,Vr=new U,ji=new U,fn=new U,Wr=new U,Ji=new U,Xr=new U;class _c{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Vr.copy(t).add(e).multiplyScalar(.5),ji.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(Vr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ji),o=fn.dot(this.direction),c=-fn.dot(ji),u=fn.lengthSq(),h=Math.abs(1-a*a);let f,l,p,g;if(h>0)if(f=a*c-o,l=a*o-c,g=s*h,f>=0)if(l>=-g)if(l<=g){const _=1/h;f*=_,l*=_,p=f*(f+a*l+2*o)+l*(a*f+l+2*c)+u}else l=s,f=Math.max(0,-(a*l+o)),p=-f*f+l*(l+2*c)+u;else l=-s,f=Math.max(0,-(a*l+o)),p=-f*f+l*(l+2*c)+u;else l<=-g?(f=Math.max(0,-(-a*s+o)),l=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+l*(l+2*c)+u):l<=g?(f=0,l=Math.min(Math.max(-s,-c),s),p=l*(l+2*c)+u):(f=Math.max(0,-(a*s+o)),l=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+l*(l+2*c)+u);else l=a>0?-s:s,f=Math.max(0,-(a*l+o)),p=-f*f+l*(l+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Vr).addScaledVector(ji,l),p}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);const n=Ze.dot(this.direction),r=Ze.dot(Ze)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,l=this.origin;return u>=0?(n=(t.min.x-l.x)*u,r=(t.max.x-l.x)*u):(n=(t.max.x-l.x)*u,r=(t.min.x-l.x)*u),h>=0?(s=(t.min.y-l.y)*h,a=(t.max.y-l.y)*h):(s=(t.max.y-l.y)*h,a=(t.min.y-l.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-l.z)*f,c=(t.max.z-l.z)*f):(o=(t.max.z-l.z)*f,c=(t.min.z-l.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,r,s){Wr.subVectors(e,t),Ji.subVectors(n,t),Xr.crossVectors(Wr,Ji);let a=this.direction.dot(Xr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fn.subVectors(this.origin,t);const c=o*this.direction.dot(Ji.crossVectors(fn,Ji));if(c<0)return null;const u=o*this.direction.dot(Wr.cross(fn));if(u<0||c+u>a)return null;const h=-o*fn.dot(Xr);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,r,s,a,o,c,u,h,f,l,p,g,_,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u,h,f,l,p,g,_,m)}set(t,e,n,r,s,a,o,c,u,h,f,l,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=h,d[10]=f,d[14]=l,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Jn.setFromMatrixColumn(t,0).length(),s=1/Jn.setFromMatrixColumn(t,1).length(),a=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const l=a*h,p=a*f,g=o*h,_=o*f;e[0]=c*h,e[4]=-c*f,e[8]=u,e[1]=p+g*u,e[5]=l-_*u,e[9]=-o*c,e[2]=_-l*u,e[6]=g+p*u,e[10]=a*c}else if(t.order==="YXZ"){const l=c*h,p=c*f,g=u*h,_=u*f;e[0]=l+_*o,e[4]=g*o-p,e[8]=a*u,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+l*o,e[10]=a*c}else if(t.order==="ZXY"){const l=c*h,p=c*f,g=u*h,_=u*f;e[0]=l-_*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-l*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const l=a*h,p=a*f,g=o*h,_=o*f;e[0]=c*h,e[4]=g*u-p,e[8]=l*u+_,e[1]=c*f,e[5]=_*u+l,e[9]=p*u-g,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const l=a*c,p=a*u,g=o*c,_=o*u;e[0]=c*h,e[4]=_-l*f,e[8]=g*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=p*f+g,e[10]=l-_*f}else if(t.order==="XZY"){const l=a*c,p=a*u,g=o*c,_=o*u;e[0]=c*h,e[4]=-f,e[8]=u*h,e[1]=l*f+_,e[5]=a*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*h,e[10]=_*f+l}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lu,t,uu)}lookAt(t,e,n){const r=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),dn.crossVectors(n,we),dn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),dn.crossVectors(n,we)),dn.normalize(),Zi.crossVectors(we,dn),r[0]=dn.x,r[4]=Zi.x,r[8]=we.x,r[1]=dn.y,r[5]=Zi.y,r[9]=we.y,r[2]=dn.z,r[6]=Zi.z,r[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],l=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],S=n[3],T=n[7],v=n[11],D=n[15],A=r[0],C=r[4],P=r[8],E=r[12],M=r[1],L=r[5],V=r[9],N=r[13],F=r[2],$=r[6],z=r[10],Q=r[14],G=r[3],et=r[7],ct=r[11],ht=r[15];return s[0]=a*A+o*M+c*F+u*G,s[4]=a*C+o*L+c*$+u*et,s[8]=a*P+o*V+c*z+u*ct,s[12]=a*E+o*N+c*Q+u*ht,s[1]=h*A+f*M+l*F+p*G,s[5]=h*C+f*L+l*$+p*et,s[9]=h*P+f*V+l*z+p*ct,s[13]=h*E+f*N+l*Q+p*ht,s[2]=g*A+_*M+m*F+d*G,s[6]=g*C+_*L+m*$+d*et,s[10]=g*P+_*V+m*z+d*ct,s[14]=g*E+_*N+m*Q+d*ht,s[3]=S*A+T*M+v*F+D*G,s[7]=S*C+T*L+v*$+D*et,s[11]=S*P+T*V+v*z+D*ct,s[15]=S*E+T*N+v*Q+D*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],u=t[13],h=t[2],f=t[6],l=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*c*f-r*u*f-s*o*l+n*u*l+r*o*p-n*c*p)+_*(+e*c*p-e*u*l+s*a*l-r*a*p+r*u*h-s*c*h)+m*(+e*u*f-e*o*p-s*a*f+n*a*p+s*o*h-n*u*h)+d*(-r*o*h-e*c*f+e*o*l+r*a*f-n*a*l+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],f=t[9],l=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],S=f*m*u-_*l*u+_*c*p-o*m*p-f*c*d+o*l*d,T=g*l*u-h*m*u-g*c*p+a*m*p+h*c*d-a*l*d,v=h*_*u-g*f*u+g*o*p-a*_*p-h*o*d+a*f*d,D=g*f*c-h*_*c-g*o*l+a*_*l+h*o*m-a*f*m,A=e*S+n*T+r*v+s*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=S*C,t[1]=(_*l*s-f*m*s-_*r*p+n*m*p+f*r*d-n*l*d)*C,t[2]=(o*m*s-_*c*s+_*r*u-n*m*u-o*r*d+n*c*d)*C,t[3]=(f*c*s-o*l*s-f*r*u+n*l*u+o*r*p-n*c*p)*C,t[4]=T*C,t[5]=(h*m*s-g*l*s+g*r*p-e*m*p-h*r*d+e*l*d)*C,t[6]=(g*c*s-a*m*s-g*r*u+e*m*u+a*r*d-e*c*d)*C,t[7]=(a*l*s-h*c*s+h*r*u-e*l*u-a*r*p+e*c*p)*C,t[8]=v*C,t[9]=(g*f*s-h*_*s-g*n*p+e*_*p+h*n*d-e*f*d)*C,t[10]=(a*_*s-g*o*s+g*n*u-e*_*u-a*n*d+e*o*d)*C,t[11]=(h*o*s-a*f*s-h*n*u+e*f*u+a*n*p-e*o*p)*C,t[12]=D*C,t[13]=(h*_*r-g*f*r+g*n*l-e*_*l-h*n*m+e*f*m)*C,t[14]=(g*o*r-a*_*r-g*n*c+e*_*c+a*n*m-e*o*m)*C,t[15]=(a*f*r-h*o*r+h*n*c-e*f*c-a*n*l+e*o*l)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+n,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,u=s+s,h=a+a,f=o+o,l=s*u,p=s*h,g=s*f,_=a*h,m=a*f,d=o*f,S=c*u,T=c*h,v=c*f,D=n.x,A=n.y,C=n.z;return r[0]=(1-(_+d))*D,r[1]=(p+v)*D,r[2]=(g-T)*D,r[3]=0,r[4]=(p-v)*A,r[5]=(1-(l+d))*A,r[6]=(m+S)*A,r[7]=0,r[8]=(g+T)*C,r[9]=(m-S)*C,r[10]=(1-(l+_))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Jn.set(r[0],r[1],r[2]).length();const a=Jn.set(r[4],r[5],r[6]).length(),o=Jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ne.copy(this);const u=1/s,h=1/a,f=1/o;return Ne.elements[0]*=u,Ne.elements[1]*=u,Ne.elements[2]*=u,Ne.elements[4]*=h,Ne.elements[5]*=h,Ne.elements[6]*=h,Ne.elements[8]*=f,Ne.elements[9]*=f,Ne.elements[10]*=f,e.setFromRotationMatrix(Ne),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=sn){const c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),l=(n+r)/(n-r);let p,g;if(o===sn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ar)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=l,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=sn){const c=this.elements,u=1/(e-t),h=1/(n-r),f=1/(a-s),l=(e+t)*u,p=(n+r)*h;let g,_;if(o===sn)g=(a+s)*f,_=-2*f;else if(o===Ar)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-l,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jn=new U,Ne=new te,lu=new U(0,0,0),uu=new U(1,1,1),dn=new U,Zi=new U,we=new U,ta=new te,ea=new Si;class Xe{constructor(t=0,e=0,n=0,r=Xe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],f=r[2],l=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(l,u),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(l,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ta.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ta,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ea.setFromEuler(this),this.setFromQuaternion(ea,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xe.DEFAULT_ORDER="XYZ";class vc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hu=0;const na=new U,Zn=new Si,Ke=new te,Ki=new U,Ci=new U,fu=new U,du=new Si,ia=new U(1,0,0),ra=new U(0,1,0),sa=new U(0,0,1),oa={type:"added"},pu={type:"removed"},Kn={type:"childadded",child:null},qr={type:"childremoved",child:null};class pe extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new U,e=new Xe,n=new Si,r=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new te},normalMatrix:{value:new zt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.premultiply(Zn),this}rotateX(t){return this.rotateOnAxis(ia,t)}rotateY(t){return this.rotateOnAxis(ra,t)}rotateZ(t){return this.rotateOnAxis(sa,t)}translateOnAxis(t,e){return na.copy(t).applyQuaternion(this.quaternion),this.position.add(na.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ia,t)}translateY(t){return this.translateOnAxis(ra,t)}translateZ(t){return this.translateOnAxis(sa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ke.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ki.copy(t):Ki.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ke.lookAt(Ci,Ki,this.up):Ke.lookAt(Ki,Ci,this.up),this.quaternion.setFromRotationMatrix(Ke),r&&(Ke.extractRotation(r.matrixWorld),Zn.setFromRotationMatrix(Ke),this.quaternion.premultiply(Zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oa),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pu),qr.child=t,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ke.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ke.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ke),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oa),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,du,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),f=a(t.shapes),l=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),l.length>0&&(n.skeletons=l),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}pe.DEFAULT_UP=new U(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fe=new U,Qe=new U,Yr=new U,tn=new U,Qn=new U,ti=new U,aa=new U,$r=new U,jr=new U,Jr=new U,Zr=new oe,Kr=new oe,Qr=new oe;class Be{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Fe.subVectors(t,e),r.cross(Fe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Fe.subVectors(r,e),Qe.subVectors(n,e),Yr.subVectors(t,e);const a=Fe.dot(Fe),o=Fe.dot(Qe),c=Fe.dot(Yr),u=Qe.dot(Qe),h=Qe.dot(Yr),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const l=1/f,p=(u*c-o*h)*l,g=(a*h-o*c)*l;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,tn.x),c.addScaledVector(a,tn.y),c.addScaledVector(o,tn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Zr.setScalar(0),Kr.setScalar(0),Qr.setScalar(0),Zr.fromBufferAttribute(t,e),Kr.fromBufferAttribute(t,n),Qr.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Zr,s.x),a.addScaledVector(Kr,s.y),a.addScaledVector(Qr,s.z),a}static isFrontFacing(t,e,n,r){return Fe.subVectors(n,e),Qe.subVectors(t,e),Fe.cross(Qe).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fe.subVectors(this.c,this.b),Qe.subVectors(this.a,this.b),Fe.cross(Qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Be.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Be.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Qn.subVectors(r,n),ti.subVectors(s,n),$r.subVectors(t,n);const c=Qn.dot($r),u=ti.dot($r);if(c<=0&&u<=0)return e.copy(n);jr.subVectors(t,r);const h=Qn.dot(jr),f=ti.dot(jr);if(h>=0&&f<=h)return e.copy(r);const l=c*f-h*u;if(l<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Qn,a);Jr.subVectors(t,s);const p=Qn.dot(Jr),g=ti.dot(Jr);if(g>=0&&p<=g)return e.copy(s);const _=p*u-c*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),e.copy(n).addScaledVector(ti,o);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return aa.subVectors(s,r),o=(f-h)/(f-h+(p-g)),e.copy(r).addScaledVector(aa,o);const d=1/(m+_+l);return a=_*d,o=l*d,e.copy(n).addScaledVector(Qn,a).addScaledVector(ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function ts(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Xt.workingColorSpace){if(t=go(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ts(a,s,t+1/3),this.g=ts(a,s,t),this.b=ts(a,s,t-1/3)}return Xt.toWorkingColorSpace(this,r),this}setStyle(t,e=ge){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const n=xc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=on(t.r),this.g=on(t.g),this.b=on(t.b),this}copyLinearToSRGB(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Xt.fromWorkingColorSpace(xe.copy(this),t),Math.round(fe(xe.r*255,0,255))*65536+Math.round(fe(xe.g*255,0,255))*256+Math.round(fe(xe.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(xe.copy(this),e);const n=xe.r,r=xe.g,s=xe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=ge){Xt.fromWorkingColorSpace(xe.copy(this),t);const e=xe.r,n=xe.g,r=xe.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(pn),this.setHSL(pn.h+t,pn.s+e,pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pn),t.getHSL(Qi);const n=Fi(pn.h,Qi.h,e),r=Fi(pn.s,Qi.s,e),s=Fi(pn.l,Qi.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new Ut;Ut.NAMES=xc;let mu=0;class Ei extends xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Mi(),this.name="",this.blending=li,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gs,this.blendDst=_s,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gs&&(n.blendSrc=this.blendSrc),this.blendDst!==_s&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zn extends Ei{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new U,tr=new St;class de{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wo,this.updateRanges=[],this.gpuType=We,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wo&&(t.usage=this.usage),t}}class Mc extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sc extends de{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends de{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gu=0;const Pe=new te,es=new pe,ei=new U,Ae=new Gn,Pi=new Gn,he=new U;class me extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pc(t)?Sc:Mc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return es.lookAt(t),es.updateMatrix(),this.applyMatrix4(es.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ae.setFromBufferAttribute(s),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Ae.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Ae.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Ae.min),this.boundingBox.expandByPoint(Ae.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ae.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(Ae.min,Pi.min),Ae.expandByPoint(he),he.addVectors(Ae.max,Pi.max),Ae.expandByPoint(he)):(Ae.expandByPoint(Pi.min),Ae.expandByPoint(Pi.max))}Ae.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)he.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(he));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)he.fromBufferAttribute(o,u),c&&(ei.fromBufferAttribute(t,u),he.add(ei)),r=Math.max(r,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new de(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new U,c[P]=new U;const u=new U,h=new U,f=new U,l=new St,p=new St,g=new St,_=new U,m=new U;function d(P,E,M){u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,M),l.fromBufferAttribute(s,P),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),h.sub(u),f.sub(u),p.sub(l),g.sub(l);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[P].add(_),o[E].add(_),o[M].add(_),c[P].add(m),c[E].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,E=S.length;P<E;++P){const M=S[P],L=M.start,V=M.count;for(let N=L,F=L+V;N<F;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const T=new U,v=new U,D=new U,A=new U;function C(P){D.fromBufferAttribute(r,P),A.copy(D);const E=o[P];T.copy(E),T.sub(D.multiplyScalar(D.dot(E))).normalize(),v.crossVectors(A,E);const L=v.dot(c[P])<0?-1:1;a.setXYZW(P,T.x,T.y,T.z,L)}for(let P=0,E=S.length;P<E;++P){const M=S[P],L=M.start,V=M.count;for(let N=L,F=L+V;N<F;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let l=0,p=n.count;l<p;l++)n.setXYZ(l,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,u=new U,h=new U,f=new U;if(t)for(let l=0,p=t.count;l<p;l+=3){const g=t.getX(l+0),_=t.getX(l+1),m=t.getX(l+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),o.add(h),c.add(h),u.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let l=0,p=e.count;l<p;l+=3)r.fromBufferAttribute(e,l+0),s.fromBufferAttribute(e,l+1),a.fromBufferAttribute(e,l+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(l+0,h.x,h.y,h.z),n.setXYZ(l+1,h.x,h.y,h.z),n.setXYZ(l+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(o,c){const u=o.array,h=o.itemSize,f=o.normalized,l=new u.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let d=0;d<h;d++)l[g++]=u[p++]}return new de(l,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=t(c,n);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,f=u.length;h<f;h++){const l=u[h],p=t(l,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,l=u.length;f<l;f++){const p=u[f];h.push(p.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],f=s[u];for(let l=0,p=f.length;l<p;l++)h.push(f[l].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ca=new te,An=new _c,er=new yi,la=new U,nr=new U,ir=new U,rr=new U,ns=new U,sr=new U,ua=new U,or=new U;class jt extends pe{constructor(t=new me,e=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){sr.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],f=s[c];h!==0&&(ns.fromBufferAttribute(f,t),a?sr.addScaledVector(ns,h):sr.addScaledVector(ns.sub(e),h))}e.add(sr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(s),An.copy(t.ray).recast(t.near),!(er.containsPoint(An.origin)===!1&&(An.intersectSphere(er,la)===null||An.origin.distanceToSquared(la)>(t.far-t.near)**2))&&(ca.copy(s).invert(),An.copy(t.ray).applyMatrix4(ca),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,An)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,l=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=l.length;g<_;g++){const m=l[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,D=T;v<D;v+=3){const A=o.getX(v),C=o.getX(v+1),P=o.getX(v+2);r=ar(this,d,t,n,u,h,f,A,C,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);r=ar(this,a,t,n,u,h,f,S,T,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=l.length;g<_;g++){const m=l[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,D=T;v<D;v+=3){const A=v,C=v+1,P=v+2;r=ar(this,d,t,n,u,h,f,A,C,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=m,T=m+1,v=m+2;r=ar(this,a,t,n,u,h,f,S,T,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function _u(i,t,e,n,r,s,a,o){let c;if(t.side===Ee?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===yn,o),c===null)return null;or.copy(o),or.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(or);return u<e.near||u>e.far?null:{distance:u,point:or.clone(),object:i}}function ar(i,t,e,n,r,s,a,o,c,u){i.getVertexPosition(o,nr),i.getVertexPosition(c,ir),i.getVertexPosition(u,rr);const h=_u(i,t,e,n,nr,ir,rr,ua);if(h){const f=new U;Be.getBarycoord(ua,nr,ir,rr,f),r&&(h.uv=Be.getInterpolatedAttribute(r,o,c,u,f,new St)),s&&(h.uv1=Be.getInterpolatedAttribute(s,o,c,u,f,new St)),a&&(h.normal=Be.getInterpolatedAttribute(a,o,c,u,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const l={a:o,b:c,c:u,normal:new U,materialIndex:0};Be.getNormal(nr,ir,rr,l.normal),h.face=l,h.barycoord=f}return h}class Vn extends me{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],f=[];let l=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(f,2));function g(_,m,d,S,T,v,D,A,C,P,E){const M=v/C,L=D/P,V=v/2,N=D/2,F=A/2,$=C+1,z=P+1;let Q=0,G=0;const et=new U;for(let ct=0;ct<z;ct++){const ht=ct*L-N;for(let gt=0;gt<$;gt++){const It=gt*M-V;et[_]=It*S,et[m]=ht*T,et[d]=F,u.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[d]=A>0?1:-1,h.push(et.x,et.y,et.z),f.push(gt/C),f.push(1-ct/P),Q+=1}}for(let ct=0;ct<P;ct++)for(let ht=0;ht<C;ht++){const gt=l+ht+$*ct,It=l+ht+$*(ct+1),j=l+(ht+1)+$*(ct+1),rt=l+(ht+1)+$*ct;c.push(gt,It,rt),c.push(It,j,rt),G+=6}o.addGroup(p,G,E),p+=G,l+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _i(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ye(i){const t={};for(let e=0;e<i.length;e++){const n=_i(i[e]);for(const r in n)t[r]=n[r]}return t}function vu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const xu={clone:_i,merge:ye};var Mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qe extends Ei{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mu,this.fragmentShader=Su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_i(t.uniforms),this.uniformsGroups=vu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ec extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mn=new U,ha=new St,fa=new St;class Le extends Ec{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ni*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(Ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mn.x,mn.y).multiplyScalar(-t/mn.z),mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mn.x,mn.y).multiplyScalar(-t/mn.z)}getViewSize(t,e){return this.getViewBounds(t,ha,fa),e.subVectors(fa,ha)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ni*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class yu extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Le(ni,ii,t,e);r.layers=this.layers,this.add(r);const s=new Le(ni,ii,t,e);s.layers=this.layers,this.add(s);const a=new Le(ni,ii,t,e);a.layers=this.layers,this.add(a);const o=new Le(ni,ii,t,e);o.layers=this.layers,this.add(o);const c=new Le(ni,ii,t,e);c.layers=this.layers,this.add(c);const u=new Le(ni,ii,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const u of e)this.remove(u);if(t===sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,f=t.getRenderTarget(),l=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(f,l,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Tc extends _e{constructor(t,e,n,r,s,a,o,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:di,super(t,e,n,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Eu extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Tc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vn(5,5,5),s=new qe({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:Mn});s.uniforms.tEquirect.value=e;const a=new jt(r,s),o=e.minFilter;return e.minFilter===On&&(e.minFilter=Ve),new yu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const is=new U,Tu=new U,bu=new zt;class Ln{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=is.subVectors(n,e).cross(Tu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(is),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bu.getNormalMatrix(t),r=this.coplanarPoint(is).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new yi,cr=new U;class _o{constructor(t=new Ln,e=new Ln,n=new Ln,r=new Ln,s=new Ln,a=new Ln){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=sn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],h=r[5],f=r[6],l=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],S=r[13],T=r[14],v=r[15];if(n[0].setComponents(c-s,l-u,m-p,v-d).normalize(),n[1].setComponents(c+s,l+u,m+p,v+d).normalize(),n[2].setComponents(c+a,l+h,m+g,v+S).normalize(),n[3].setComponents(c-a,l-h,m-g,v-S).normalize(),n[4].setComponents(c-o,l-f,m-_,v-T).normalize(),e===sn)n[5].setComponents(c+o,l+f,m+_,v+T).normalize();else if(e===Ar)n[5].setComponents(o,f,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(t){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(cr.x=r.normal.x>0?t.max.x:t.min.x,cr.y=r.normal.y>0?t.max.y:t.min.y,cr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bc(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function wu(i){const t=new WeakMap;function e(o,c){const u=o.array,h=o.usage,f=u.byteLength,l=i.createBuffer();i.bindBuffer(c,l),i.bufferData(c,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:l,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,u){const h=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,h);else{f.sort((p,g)=>p.start-g.start);let l=0;for(let p=1;p<f.length;p++){const g=f[l],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++l,f[l]=_)}f.length=l+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];i.bufferSubData(u,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}class rn extends me{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),u=o+1,h=c+1,f=t/o,l=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const S=d*l-a;for(let T=0;T<u;T++){const v=T*f-s;g.push(v,-S,0),_.push(0,0,1),m.push(T/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<o;S++){const T=S+u*d,v=S+u*(d+1),D=S+1+u*(d+1),A=S+1+u*d;p.push(T,v,A),p.push(v,D,A)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Au=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ru=`#ifdef USE_ALPHAHASH
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
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
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
#endif`,Iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Hu=`#ifdef USE_BUMPMAP
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ju=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Zu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ku=`vec3 transformedNormal = objectNormal;
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
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,th=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",rh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ah=`#ifdef USE_ENVMAP
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
#endif`,ch=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,uh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ph=`#ifdef USE_GRADIENTMAP
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
}`,mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vh=`uniform bool receiveShadow;
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
#endif`,xh=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Th=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,bh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wh=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ah=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ch=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ph=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ih=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fh=`#if defined( USE_POINTS_UV )
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
#endif`,Oh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gh=`#ifdef USE_MORPHTARGETS
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
#endif`,Vh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$h=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jh=`#ifdef USE_NORMALMAP
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
#endif`,Jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,ff=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pf=`#ifdef USE_SKINNING
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
#endif`,mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,_f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Af=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rf=`uniform sampler2D t2D;
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`#include <common>
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
}`,If=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nf=`#define DISTANCE
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
}`,Ff=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`uniform float scale;
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
}`,kf=`uniform vec3 diffuse;
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
}`,Hf=`#include <common>
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Vf=`#define LAMBERT
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
}`,Wf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Xf=`#define MATCAP
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
}`,qf=`#define MATCAP
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
}`,Yf=`#define NORMAL
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
}`,$f=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jf=`#define PHONG
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
}`,Jf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Zf=`#define STANDARD
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
}`,Kf=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Qf=`#define TOON
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
}`,td=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ed=`uniform float size;
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
}`,nd=`uniform vec3 diffuse;
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
}`,id=`#include <common>
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
}`,rd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sd=`uniform float rotation;
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
}`,od=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Au,alphahash_pars_fragment:Ru,alphamap_fragment:Cu,alphamap_pars_fragment:Pu,alphatest_fragment:Lu,alphatest_pars_fragment:Du,aomap_fragment:Uu,aomap_pars_fragment:Iu,batching_pars_vertex:Nu,batching_vertex:Fu,begin_vertex:Ou,beginnormal_vertex:Bu,bsdfs:zu,iridescence_fragment:ku,bumpmap_pars_fragment:Hu,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Vu,clipping_planes_pars_vertex:Wu,clipping_planes_vertex:Xu,color_fragment:qu,color_pars_fragment:Yu,color_pars_vertex:$u,color_vertex:ju,common:Ju,cube_uv_reflection_fragment:Zu,defaultnormal_vertex:Ku,displacementmap_pars_vertex:Qu,displacementmap_vertex:th,emissivemap_fragment:eh,emissivemap_pars_fragment:nh,colorspace_fragment:ih,colorspace_pars_fragment:rh,envmap_fragment:sh,envmap_common_pars_fragment:oh,envmap_pars_fragment:ah,envmap_pars_vertex:ch,envmap_physical_pars_fragment:xh,envmap_vertex:lh,fog_vertex:uh,fog_pars_vertex:hh,fog_fragment:fh,fog_pars_fragment:dh,gradientmap_pars_fragment:ph,lightmap_pars_fragment:mh,lights_lambert_fragment:gh,lights_lambert_pars_fragment:_h,lights_pars_begin:vh,lights_toon_fragment:Mh,lights_toon_pars_fragment:Sh,lights_phong_fragment:yh,lights_phong_pars_fragment:Eh,lights_physical_fragment:Th,lights_physical_pars_fragment:bh,lights_fragment_begin:wh,lights_fragment_maps:Ah,lights_fragment_end:Rh,logdepthbuf_fragment:Ch,logdepthbuf_pars_fragment:Ph,logdepthbuf_pars_vertex:Lh,logdepthbuf_vertex:Dh,map_fragment:Uh,map_pars_fragment:Ih,map_particle_fragment:Nh,map_particle_pars_fragment:Fh,metalnessmap_fragment:Oh,metalnessmap_pars_fragment:Bh,morphinstance_vertex:zh,morphcolor_vertex:kh,morphnormal_vertex:Hh,morphtarget_pars_vertex:Gh,morphtarget_vertex:Vh,normal_fragment_begin:Wh,normal_fragment_maps:Xh,normal_pars_fragment:qh,normal_pars_vertex:Yh,normal_vertex:$h,normalmap_pars_fragment:jh,clearcoat_normal_fragment_begin:Jh,clearcoat_normal_fragment_maps:Zh,clearcoat_pars_fragment:Kh,iridescence_pars_fragment:Qh,opaque_fragment:tf,packing:ef,premultiplied_alpha_fragment:nf,project_vertex:rf,dithering_fragment:sf,dithering_pars_fragment:of,roughnessmap_fragment:af,roughnessmap_pars_fragment:cf,shadowmap_pars_fragment:lf,shadowmap_pars_vertex:uf,shadowmap_vertex:hf,shadowmask_pars_fragment:ff,skinbase_vertex:df,skinning_pars_vertex:pf,skinning_vertex:mf,skinnormal_vertex:gf,specularmap_fragment:_f,specularmap_pars_fragment:vf,tonemapping_fragment:xf,tonemapping_pars_fragment:Mf,transmission_fragment:Sf,transmission_pars_fragment:yf,uv_pars_fragment:Ef,uv_pars_vertex:Tf,uv_vertex:bf,worldpos_vertex:wf,background_vert:Af,background_frag:Rf,backgroundCube_vert:Cf,backgroundCube_frag:Pf,cube_vert:Lf,cube_frag:Df,depth_vert:Uf,depth_frag:If,distanceRGBA_vert:Nf,distanceRGBA_frag:Ff,equirect_vert:Of,equirect_frag:Bf,linedashed_vert:zf,linedashed_frag:kf,meshbasic_vert:Hf,meshbasic_frag:Gf,meshlambert_vert:Vf,meshlambert_frag:Wf,meshmatcap_vert:Xf,meshmatcap_frag:qf,meshnormal_vert:Yf,meshnormal_frag:$f,meshphong_vert:jf,meshphong_frag:Jf,meshphysical_vert:Zf,meshphysical_frag:Kf,meshtoon_vert:Qf,meshtoon_frag:td,points_vert:ed,points_frag:nd,shadow_vert:id,shadow_frag:rd,sprite_vert:sd,sprite_frag:od},dt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Ge={basic:{uniforms:ye([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:ye([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:ye([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:ye([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:ye([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:ye([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:ye([dt.points,dt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:ye([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:ye([dt.common,dt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:ye([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:ye([dt.sprite,dt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:ye([dt.common,dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:ye([dt.lights,dt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Ge.physical={uniforms:ye([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const lr={r:0,b:0,g:0},Cn=new Xe,ad=new te;function cd(i,t,e,n,r,s,a){const o=new Ut(0);let c=s===!0?0:1,u,h,f=null,l=0,p=null;function g(S){let T=S.isScene===!0?S.background:null;return T&&T.isTexture&&(T=(S.backgroundBlurriness>0?e:t).get(T)),T}function _(S){let T=!1;const v=g(S);v===null?d(o,c):v&&v.isColor&&(d(v,1),T=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,T){const v=g(T);v&&(v.isCubeTexture||v.mapping===Dr)?(h===void 0&&(h=new jt(new Vn(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:_i(Ge.backgroundCube.uniforms),vertexShader:Ge.backgroundCube.vertexShader,fragmentShader:Ge.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Cn.copy(T.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ad.makeRotationFromEuler(Cn)),h.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Qt,(f!==v||l!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,l=v.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new jt(new rn(2,2),new qe({name:"BackgroundMaterial",uniforms:_i(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||l!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,l=v.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null))}function d(S,T){S.getRGB(lr,yc(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(S,T=1){o.set(S),c=T,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,d(o,c)},render:_,addToRenderList:m}}function ld(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null);let s=r,a=!1;function o(M,L,V,N,F){let $=!1;const z=f(N,V,L);s!==z&&(s=z,u(s.object)),$=p(M,N,V,F),$&&g(M,N,V,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(M,L,V,N),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function u(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,L,V){const N=V.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let $=F[L.id];$===void 0&&($={},F[L.id]=$);let z=$[N];return z===void 0&&(z=l(c()),$[N]=z),z}function l(M){const L=[],V=[],N=[];for(let F=0;F<e;F++)L[F]=0,V[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:N,object:M,attributes:{},index:null}}function p(M,L,V,N){const F=s.attributes,$=L.attributes;let z=0;const Q=V.getAttributes();for(const G in Q)if(Q[G].location>=0){const ct=F[G];let ht=$[G];if(ht===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),ct===void 0||ct.attribute!==ht||ht&&ct.data!==ht.data)return!0;z++}return s.attributesNum!==z||s.index!==N}function g(M,L,V,N){const F={},$=L.attributes;let z=0;const Q=V.getAttributes();for(const G in Q)if(Q[G].location>=0){let ct=$[G];ct===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));const ht={};ht.attribute=ct,ct&&ct.data&&(ht.data=ct.data),F[G]=ht,z++}s.attributes=F,s.attributesNum=z,s.index=N}function _(){const M=s.newAttributes;for(let L=0,V=M.length;L<V;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){const V=s.newAttributes,N=s.enabledAttributes,F=s.attributeDivisors;V[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),F[M]!==L&&(i.vertexAttribDivisor(M,L),F[M]=L)}function S(){const M=s.newAttributes,L=s.enabledAttributes;for(let V=0,N=L.length;V<N;V++)L[V]!==M[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function T(M,L,V,N,F,$,z){z===!0?i.vertexAttribIPointer(M,L,V,F,$):i.vertexAttribPointer(M,L,V,N,F,$)}function v(M,L,V,N){_();const F=N.attributes,$=V.getAttributes(),z=L.defaultAttributeValues;for(const Q in $){const G=$[Q];if(G.location>=0){let et=F[Q];if(et===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),et!==void 0){const ct=et.normalized,ht=et.itemSize,gt=t.get(et);if(gt===void 0)continue;const It=gt.buffer,j=gt.type,rt=gt.bytesPerElement,ft=j===i.INT||j===i.UNSIGNED_INT||et.gpuType===co;if(et.isInterleavedBufferAttribute){const ut=et.data,R=ut.stride,yt=et.offset;if(ut.isInstancedInterleavedBuffer){for(let q=0;q<G.locationSize;q++)d(G.location+q,ut.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let q=0;q<G.locationSize;q++)m(G.location+q);i.bindBuffer(i.ARRAY_BUFFER,It);for(let q=0;q<G.locationSize;q++)T(G.location+q,ht/G.locationSize,j,ct,R*rt,(yt+ht/G.locationSize*q)*rt,ft)}else{if(et.isInstancedBufferAttribute){for(let ut=0;ut<G.locationSize;ut++)d(G.location+ut,et.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ut=0;ut<G.locationSize;ut++)m(G.location+ut);i.bindBuffer(i.ARRAY_BUFFER,It);for(let ut=0;ut<G.locationSize;ut++)T(G.location+ut,ht/G.locationSize,j,ct,ht*rt,ht/G.locationSize*ut*rt,ft)}}else if(z!==void 0){const ct=z[Q];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(G.location,ct);break;case 3:i.vertexAttrib3fv(G.location,ct);break;case 4:i.vertexAttrib4fv(G.location,ct);break;default:i.vertexAttrib1fv(G.location,ct)}}}}S()}function D(){P();for(const M in n){const L=n[M];for(const V in L){const N=L[V];for(const F in N)h(N[F].object),delete N[F];delete L[V]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const V in L){const N=L[V];for(const F in N)h(N[F].object),delete N[F];delete L[V]}delete n[M.id]}function C(M){for(const L in n){const V=n[L];if(V[M.id]===void 0)continue;const N=V[M.id];for(const F in N)h(N[F].object),delete N[F];delete V[M.id]}}function P(){E(),a=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function ud(i,t,e){let n;function r(u){n=u}function s(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function a(u,h,f){f!==0&&(i.drawArraysInstanced(n,u,h,f),e.update(h,n,f))}function o(u,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function c(u,h,f,l){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)a(u[g],h[g],l[g]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,h,0,l,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*l[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function hd(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==ze&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==an&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==We&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=e.logarithmicDepthBuffer===!0,l=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:l,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:D,maxSamples:A}}function fd(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Ln,o=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,l){const p=f.length!==0||l||n!==0||r;return r=l,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,l){e=h(f,l,0)},this.setState=function(f,l,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):u();else{const S=s?0:n,T=S*4;let v=d.clippingState||null;c.value=v,v=h(g,l,T,p);for(let D=0;D!==T;++D)v[D]=e[D];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,l,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,S=l.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,v=p;T!==_;++T,v+=4)a.copy(f[T]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function dd(i){let t=new WeakMap;function e(a,o){return o===bs?a.mapping=di:o===ws&&(a.mapping=pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bs||o===ws)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Eu(c.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class wc extends Ec{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ci=4,da=[.125,.215,.35,.446,.526,.582],Nn=20,rs=new wc,pa=new Ut;let ss=null,os=0,as=0,cs=!1;const Dn=(1+Math.sqrt(5))/2,ri=1/Dn,ma=[new U(-Dn,ri,0),new U(Dn,ri,0),new U(-ri,0,Dn),new U(ri,0,Dn),new U(0,Dn,-ri),new U(0,Dn,ri),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ss=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel(),cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=va(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ss,os,as),this._renderer.xr.enabled=cs,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ss=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel(),cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Gi,format:ze,colorSpace:vi,depthBuffer:!1},r=_a(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_a(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pd(s)),this._blurMaterial=md(s,t,e)}return r}_compileMaterial(t){const e=new jt(this._lodPlanes[0],t);this._renderer.compile(e,rs)}_sceneToCubeUV(t,e,n,r){const o=new Le(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,l=h.toneMapping;h.getClearColor(pa),h.toneMapping=Sn,h.autoClear=!1;const p=new zn({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),g=new jt(new Vn,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(pa),_=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,c[d],0),o.lookAt(u[d],0,0)):S===1?(o.up.set(0,0,c[d]),o.lookAt(0,u[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,u[d]));const T=this._cubeSize;ur(r,S*T,d>2?T:0,T,T),h.setRenderTarget(r),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=l,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===di||t.mapping===pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=va());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new jt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ur(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,rs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ma[(r-s-1)%ma.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new jt(this._lodPlanes[r],u),l=u.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nn-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Nn;m>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);const d=[];let S=0;for(let C=0;C<Nn;++C){const P=C/_,E=Math.exp(-P*P/2);d.push(E),C===0?S+=E:C<m&&(S+=2*E)}for(let C=0;C<d.length;C++)d[C]=d[C]/S;l.envMap.value=t.texture,l.samples.value=m,l.weights.value=d,l.latitudinal.value=a==="latitudinal",o&&(l.poleAxis.value=o);const{_lodMax:T}=this;l.dTheta.value=g,l.mipInt.value=T-n;const v=this._sizeLods[r],D=3*v*(r>T-ci?r-T+ci:0),A=4*(this._cubeSize-v);ur(e,D,A,3*v,2*v),c.setRenderTarget(e),c.render(f,rs)}}function pd(i){const t=[],e=[],n=[];let r=i;const s=i-ci+1+da.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-ci?c=da[a-i+ci-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),h=-u,f=1+u,l=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,_=3,m=2,d=1,S=new Float32Array(_*g*p),T=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,P=A>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];S.set(E,_*g*A),T.set(l,m*g*A);const M=[A,A,A,A,A,A];v.set(M,d*g*A)}const D=new me;D.setAttribute("position",new de(S,_)),D.setAttribute("uv",new de(T,m)),D.setAttribute("faceIndex",new de(v,d)),t.push(D),r>ci&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _a(i,t,e){const n=new Hn(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function md(i,t,e){const n=new Float32Array(Nn),r=new U(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function va(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function xa(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function vo(){return`

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
	`}function gd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===bs||c===ws,h=c===di||c===pi;if(u||h){let f=t.get(o);const l=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==l)return e===null&&(e=new ga(i)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return u&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new ga(i)),f=u?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function _d(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ui("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function vd(i,t,e,n){const r={},s=new WeakMap;function a(f){const l=f.target;l.index!==null&&t.remove(l.index);for(const g in l.attributes)t.remove(l.attributes[g]);for(const g in l.morphAttributes){const _=l.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}l.removeEventListener("dispose",a),delete r[l.id];const p=s.get(l);p&&(t.remove(p),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,e.memory.geometries--}function o(f,l){return r[l.id]===!0||(l.addEventListener("dispose",a),r[l.id]=!0,e.memory.geometries++),l}function c(f){const l=f.attributes;for(const g in l)t.update(l[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function u(f){const l=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let T=0,v=S.length;T<v;T+=3){const D=S[T+0],A=S[T+1],C=S[T+2];l.push(D,A,A,C,C,D)}}else if(g!==void 0){const S=g.array;_=g.version;for(let T=0,v=S.length/3-1;T<v;T+=3){const D=T+0,A=T+1,C=T+2;l.push(D,A,A,C,C,D)}}else return;const m=new(pc(l)?Sc:Mc)(l,1);m.version=_;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function h(f){const l=s.get(f);if(l){const p=f.index;p!==null&&l.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function xd(i,t,e){let n;function r(l){n=l}let s,a;function o(l){s=l.type,a=l.bytesPerElement}function c(l,p){i.drawElements(n,p,s,l*a),e.update(p,n,1)}function u(l,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,l*a,g),e.update(p,n,g))}function h(l,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,l,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function f(l,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<l.length;d++)u(l[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,l,0,_,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*_[S];e.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Md(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Sd(i,t,e){const n=new WeakMap,r=new oe;function s(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let l=n.get(o);if(l===void 0||l.count!==f){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};l!==void 0&&l.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let v=o.attributes.position.count*T,D=1;v>t.maxTextureSize&&(D=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const A=new Float32Array(v*D*4*f),C=new gc(A,v,D,f);C.type=We,C.needsUpdate=!0;const P=T*4;for(let M=0;M<f;M++){const L=m[M],V=d[M],N=S[M],F=v*D*4*M;for(let $=0;$<L.count;$++){const z=$*P;p===!0&&(r.fromBufferAttribute(L,$),A[F+z+0]=r.x,A[F+z+1]=r.y,A[F+z+2]=r.z,A[F+z+3]=0),g===!0&&(r.fromBufferAttribute(V,$),A[F+z+4]=r.x,A[F+z+5]=r.y,A[F+z+6]=r.z,A[F+z+7]=0),_===!0&&(r.fromBufferAttribute(N,$),A[F+z+8]=r.x,A[F+z+9]=r.y,A[F+z+10]=r.z,A[F+z+11]=N.itemSize===4?r.w:1)}}l={count:f,texture:C,size:new St(v,D)},n.set(o,l),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",l.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",l.size)}return{update:s}}function yd(i,t,e,n){let r=new WeakMap;function s(c){const u=n.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const l=c.skeleton;r.get(l)!==u&&(l.update(),r.set(l,u))}return f}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}class Ac extends _e{constructor(t,e,n,r,s,a,o,c,u,h=ui){if(h!==ui&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ui&&(n=kn),n===void 0&&h===gi&&(n=mi),super(null,r,s,a,o,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Re,this.minFilter=c!==void 0?c:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Rc=new _e,Ma=new Ac(1,1),Cc=new gc,Pc=new au,Lc=new Tc,Sa=[],ya=[],Ea=new Float32Array(16),Ta=new Float32Array(9),ba=new Float32Array(4);function Ti(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Sa[r];if(s===void 0&&(s=new Float32Array(r),Sa[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ir(i,t){let e=ya[t];e===void 0&&(e=new Int32Array(t),ya[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ed(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Td(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2fv(this.addr,t),le(e,t)}}function bd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;i.uniform3fv(this.addr,t),le(e,t)}}function wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4fv(this.addr,t),le(e,t)}}function Ad(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;ba.set(n),i.uniformMatrix2fv(this.addr,!1,ba),le(e,n)}}function Rd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;Ta.set(n),i.uniformMatrix3fv(this.addr,!1,Ta),le(e,n)}}function Cd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;Ea.set(n),i.uniformMatrix4fv(this.addr,!1,Ea),le(e,n)}}function Pd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ld(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2iv(this.addr,t),le(e,t)}}function Dd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3iv(this.addr,t),le(e,t)}}function Ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4iv(this.addr,t),le(e,t)}}function Id(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Nd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2uiv(this.addr,t),le(e,t)}}function Fd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3uiv(this.addr,t),le(e,t)}}function Od(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4uiv(this.addr,t),le(e,t)}}function Bd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ma.compareFunction=dc,s=Ma):s=Rc,e.setTexture2D(t||s,r)}function zd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Pc,r)}function kd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Lc,r)}function Hd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Cc,r)}function Gd(i){switch(i){case 5126:return Ed;case 35664:return Td;case 35665:return bd;case 35666:return wd;case 35674:return Ad;case 35675:return Rd;case 35676:return Cd;case 5124:case 35670:return Pd;case 35667:case 35671:return Ld;case 35668:case 35672:return Dd;case 35669:case 35673:return Ud;case 5125:return Id;case 36294:return Nd;case 36295:return Fd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return Bd;case 35679:case 36299:case 36307:return zd;case 35680:case 36300:case 36308:case 36293:return kd;case 36289:case 36303:case 36311:case 36292:return Hd}}function Vd(i,t){i.uniform1fv(this.addr,t)}function Wd(i,t){const e=Ti(t,this.size,2);i.uniform2fv(this.addr,e)}function Xd(i,t){const e=Ti(t,this.size,3);i.uniform3fv(this.addr,e)}function qd(i,t){const e=Ti(t,this.size,4);i.uniform4fv(this.addr,e)}function Yd(i,t){const e=Ti(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $d(i,t){const e=Ti(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jd(i,t){const e=Ti(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jd(i,t){i.uniform1iv(this.addr,t)}function Zd(i,t){i.uniform2iv(this.addr,t)}function Kd(i,t){i.uniform3iv(this.addr,t)}function Qd(i,t){i.uniform4iv(this.addr,t)}function tp(i,t){i.uniform1uiv(this.addr,t)}function ep(i,t){i.uniform2uiv(this.addr,t)}function np(i,t){i.uniform3uiv(this.addr,t)}function ip(i,t){i.uniform4uiv(this.addr,t)}function rp(i,t,e){const n=this.cache,r=t.length,s=Ir(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Rc,s[a])}function sp(i,t,e){const n=this.cache,r=t.length,s=Ir(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Pc,s[a])}function op(i,t,e){const n=this.cache,r=t.length,s=Ir(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Lc,s[a])}function ap(i,t,e){const n=this.cache,r=t.length,s=Ir(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Cc,s[a])}function cp(i){switch(i){case 5126:return Vd;case 35664:return Wd;case 35665:return Xd;case 35666:return qd;case 35674:return Yd;case 35675:return $d;case 35676:return jd;case 5124:case 35670:return Jd;case 35667:case 35671:return Zd;case 35668:case 35672:return Kd;case 35669:case 35673:return Qd;case 5125:return tp;case 36294:return ep;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return ap}}class lp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gd(e.type)}}class up{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cp(e.type)}}class hp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ls=/(\w+)(\])?(\[|\.)?/g;function wa(i,t){i.seq.push(t),i.map[t.id]=t}function fp(i,t,e){const n=i.name,r=n.length;for(ls.lastIndex=0;;){const s=ls.exec(n),a=ls.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){wa(e,u===void 0?new lp(o,i,t):new up(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new hp(o),wa(e,f)),e=f}}}class Tr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);fp(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Aa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const dp=37297;let pp=0;function mp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ra=new zt;function gp(i){Xt._getMatrix(Ra,Xt.workingColorSpace,i);const t=`mat3( ${Ra.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case Ur:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ca(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+mp(i.getShaderSource(t),a)}else return r}function _p(i,t){const e=gp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vp(i,t){let e;switch(t){case xl:e="Linear";break;case Ml:e="Reinhard";break;case Sl:e="Cineon";break;case yl:e="ACESFilmic";break;case Tl:e="AgX";break;case bl:e="Neutral";break;case El:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new U;function xp(){Xt.getLuminanceCoefficients(hr);const i=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function Sp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ii(i){return i!==""}function Pa(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function La(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(i){return i.replace(Ep,bp)}const Tp=new Map;function bp(i,t){let e=Ht[t];if(e===void 0){const n=Tp.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return to(e)}const wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Da(i){return i.replace(wp,Ap)}function Ap(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ua(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ec?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Cp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case pi:t="ENVMAP_TYPE_CUBE";break;case Dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:t="ENVMAP_MODE_REFRACTION";break}return t}function Lp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ao:t="ENVMAP_BLENDING_MULTIPLY";break;case _l:t="ENVMAP_BLENDING_MIX";break;case vl:t="ENVMAP_BLENDING_ADD";break}return t}function Dp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Up(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Rp(e),u=Cp(e),h=Pp(e),f=Lp(e),l=Dp(e),p=Mp(e),g=Sp(s),_=r.createProgram();let m,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),d.length>0&&(d+=`
`)):(m=[Ua(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),d=[Ua(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Sn?vp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,_p("linearToOutputTexel",e.outputColorSpace),xp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),a=to(a),a=Pa(a,e),a=La(a,e),o=to(o),o=Pa(o,e),o=La(o,e),a=Da(a),o=Da(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=S+m+a,v=S+d+o,D=Aa(r,r.VERTEX_SHADER,T),A=Aa(r,r.FRAGMENT_SHADER,v);r.attachShader(_,D),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(L){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(_).trim(),N=r.getShaderInfoLog(D).trim(),F=r.getShaderInfoLog(A).trim();let $=!0,z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,D,A);else{const Q=Ca(r,D,"vertex"),G=Ca(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+Q+`
`+G)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(N===""||F==="")&&(z=!1);z&&(L.diagnostics={runnable:$,programLog:V,vertexShader:{log:N,prefix:m},fragmentShader:{log:F,prefix:d}})}r.deleteShader(D),r.deleteShader(A),P=new Tr(r,_),E=yp(r,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,dp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}let Ip=0;class Np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fp(t),e.set(t,n)),n}}class Fp{constructor(t){this.id=Ip++,this.code=t,this.usedTimes=0}}function Op(i,t,e,n,r,s,a){const o=new vc,c=new Np,u=new Set,h=[],f=r.logarithmicDepthBuffer,l=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,V,N){const F=V.fog,$=N.geometry,z=E.isMeshStandardMaterial?V.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||z),G=Q&&Q.mapping===Dr?Q.image.height:null,et=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ht=ct!==void 0?ct.length:0;let gt=0;$.morphAttributes.position!==void 0&&(gt=1),$.morphAttributes.normal!==void 0&&(gt=2),$.morphAttributes.color!==void 0&&(gt=3);let It,j,rt,ft;if(et){const Jt=Ge[et];It=Jt.vertexShader,j=Jt.fragmentShader}else It=E.vertexShader,j=E.fragmentShader,c.update(E),rt=c.getVertexShaderID(E),ft=c.getFragmentShaderID(E);const ut=i.getRenderTarget(),R=i.state.buffers.depth.getReversed(),yt=N.isInstancedMesh===!0,q=N.isBatchedMesh===!0,at=!!E.map,st=!!E.matcap,Nt=!!Q,I=!!E.aoMap,Zt=!!E.lightMap,Pt=!!E.bumpMap,kt=!!E.normalMap,Rt=!!E.displacementMap,ee=!!E.emissiveMap,Ct=!!E.metalnessMap,w=!!E.roughnessMap,x=E.anisotropy>0,k=E.clearcoat>0,tt=E.dispersion>0,nt=E.iridescence>0,Z=E.sheen>0,Et=E.transmission>0,pt=x&&!!E.anisotropyMap,_t=k&&!!E.clearcoatMap,Gt=k&&!!E.clearcoatNormalMap,ot=k&&!!E.clearcoatRoughnessMap,vt=nt&&!!E.iridescenceMap,Lt=nt&&!!E.iridescenceThicknessMap,Dt=Z&&!!E.sheenColorMap,xt=Z&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,Ot=!!E.specularColorMap,Kt=!!E.specularIntensityMap,b=Et&&!!E.transmissionMap,J=Et&&!!E.thicknessMap,H=!!E.gradientMap,Y=!!E.alphaMap,it=E.alphaTest>0,K=!!E.alphaHash,Mt=!!E.extensions;let Wt=Sn;E.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const ue={shaderID:et,shaderType:E.type,shaderName:E.name,vertexShader:It,fragmentShader:j,defines:E.defines,customVertexShaderID:rt,customFragmentShaderID:ft,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:q,batchingColor:q&&N._colorsTexture!==null,instancing:yt,instancingColor:yt&&N.instanceColor!==null,instancingMorph:yt&&N.morphTexture!==null,supportsVertexTextures:l,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:vi,alphaToCoverage:!!E.alphaToCoverage,map:at,matcap:st,envMap:Nt,envMapMode:Nt&&Q.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:Zt,bumpMap:Pt,normalMap:kt,displacementMap:l&&Rt,emissiveMap:ee,normalMapObjectSpace:kt&&E.normalMapType===Cl,normalMapTangentSpace:kt&&E.normalMapType===fc,metalnessMap:Ct,roughnessMap:w,anisotropy:x,anisotropyMap:pt,clearcoat:k,clearcoatMap:_t,clearcoatNormalMap:Gt,clearcoatRoughnessMap:ot,dispersion:tt,iridescence:nt,iridescenceMap:vt,iridescenceThicknessMap:Lt,sheen:Z,sheenColorMap:Dt,sheenRoughnessMap:xt,specularMap:Vt,specularColorMap:Ot,specularIntensityMap:Kt,transmission:Et,transmissionMap:b,thicknessMap:J,gradientMap:H,opaque:E.transparent===!1&&E.blending===li&&E.alphaToCoverage===!1,alphaMap:Y,alphaTest:it,alphaHash:K,combine:E.combine,mapUv:at&&_(E.map.channel),aoMapUv:I&&_(E.aoMap.channel),lightMapUv:Zt&&_(E.lightMap.channel),bumpMapUv:Pt&&_(E.bumpMap.channel),normalMapUv:kt&&_(E.normalMap.channel),displacementMapUv:Rt&&_(E.displacementMap.channel),emissiveMapUv:ee&&_(E.emissiveMap.channel),metalnessMapUv:Ct&&_(E.metalnessMap.channel),roughnessMapUv:w&&_(E.roughnessMap.channel),anisotropyMapUv:pt&&_(E.anisotropyMap.channel),clearcoatMapUv:_t&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(E.sheenRoughnessMap.channel),specularMapUv:Vt&&_(E.specularMap.channel),specularColorMapUv:Ot&&_(E.specularColorMap.channel),specularIntensityMapUv:Kt&&_(E.specularIntensityMap.channel),transmissionMapUv:b&&_(E.transmissionMap.channel),thicknessMapUv:J&&_(E.thicknessMap.channel),alphaMapUv:Y&&_(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(kt||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!$.attributes.uv&&(at||Y),fog:!!F,useFog:E.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:R,skinning:N.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:gt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:at&&E.map.isVideoTexture===!0&&Xt.getTransfer(E.map.colorSpace)===Qt,decodeVideoTextureEmissive:ee&&E.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(E.emissiveMap.colorSpace)===Qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Oe,flipSided:E.side===Ee,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Mt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&E.extensions.multiDraw===!0||q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ue.vertexUv1s=u.has(1),ue.vertexUv2s=u.has(2),ue.vertexUv3s=u.has(3),u.clear(),ue}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(S(M,E),T(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function S(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function T(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){const M=g[E.type];let L;if(M){const V=Ge[M];L=xu.clone(V.uniforms)}else L=E.uniforms;return L}function D(E,M){let L;for(let V=0,N=h.length;V<N;V++){const F=h[V];if(F.cacheKey===M){L=F,++L.usedTimes;break}}return L===void 0&&(L=new Up(i,M,E,s),h.push(L)),L}function A(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function C(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:D,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function Bp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function zp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ia(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Na(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,l,p,g,_,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:l,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=l,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),t++,d}function o(f,l,p,g,_,m){const d=a(f,l,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):e.push(d)}function c(f,l,p,g,_,m){const d=a(f,l,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function u(f,l){e.length>1&&e.sort(f||zp),n.length>1&&n.sort(l||Ia),r.length>1&&r.sort(l||Ia)}function h(){for(let f=t,l=i.length;f<l;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:u}}function kp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Na,i.set(n,[a])):r>=s.length?(a=new Na,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ut};break;case"SpotLight":e={position:new U,direction:new U,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Gp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Vp=0;function Wp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xp(i){const t=new Hp,e=Gp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new U);const r=new U,s=new te,a=new te;function o(u){let h=0,f=0,l=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,S=0,T=0,v=0,D=0,A=0,C=0;u.sort(Wp);for(let E=0,M=u.length;E<M;E++){const L=u[E],V=L.color,N=L.intensity,F=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*N,f+=V.g*N,l+=V.b*N;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],N);C++}else if(L.isDirectionalLight){const z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,G=e.get(L);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=z,p++}else if(L.isSpotLight){const z=t.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(V).multiplyScalar(N),z.distance=F,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[_]=z;const Q=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,Q.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=Q.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=$,v++}_++}else if(L.isRectAreaLight){const z=t.get(L);z.color.copy(V).multiplyScalar(N),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=z,m++}else if(L.isPointLight){const z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const Q=L.shadow,G=e.get(L);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=z,g++}else if(L.isHemisphereLight){const z=t.get(L);z.skyColor.copy(L.color).multiplyScalar(N),z.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[d]=z,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=l;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==S||P.numPointShadows!==T||P.numSpotShadows!==v||P.numSpotMaps!==D||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=S,P.numPointShadows=T,P.numSpotShadows=v,P.numSpotMaps=D,P.numLightProbes=C,n.version=Vp++)}function c(u,h){let f=0,l=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,S=u.length;d<S;d++){const T=u[d];if(T.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(T.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const v=n.point[l];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),l++}else if(T.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Fa(i){const t=new Xp(i),e=[],n=[];function r(h){u.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function qp(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Fa(i),t.set(r,[o])):s>=a.length?(o=new Fa(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Yp extends Ei{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Al,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $p extends Ei{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zp(i,t,e){let n=new _o;const r=new St,s=new St,a=new oe,o=new Yp({depthPacking:Rl}),c=new $p,u={},h=e.maxTextureSize,f={[yn]:Ee,[Ee]:yn,[Oe]:Oe},l=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:jp,fragmentShader:Jp}),p=l.clone();p.defines.HORIZONTAL_PASS=1;const g=new me;g.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jt(g,l),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let d=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Mn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const N=d!==nn&&this.type===nn,F=d===nn&&this.type!==nn;for(let $=0,z=A.length;$<z;$++){const Q=A[$],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const et=G.getFrameExtents();if(r.multiply(et),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/et.x),r.x=s.x*et.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/et.y),r.y=s.y*et.y,G.mapSize.y=s.y)),G.map===null||N===!0||F===!0){const ht=this.type!==nn?{minFilter:Re,magFilter:Re}:{};G.map!==null&&G.map.dispose(),G.map=new Hn(r.x,r.y,ht),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ct=G.getViewportCount();for(let ht=0;ht<ct;ht++){const gt=G.getViewport(ht);a.set(s.x*gt.x,s.y*gt.y,s.x*gt.z,s.y*gt.w),V.viewport(a),G.updateMatrices(Q,ht),n=G.getFrustum(),v(C,P,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===nn&&S(G,P),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,L)};function S(A,C){const P=t.update(_);l.defines.VSM_SAMPLES!==A.blurSamples&&(l.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,l.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hn(r.x,r.y)),l.uniforms.shadow_pass.value=A.map.texture,l.uniforms.resolution.value=A.mapSize,l.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,P,l,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,P,p,_,null)}function T(A,C,P,E){let M=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=M.uuid,N=C.uuid;let F=u[V];F===void 0&&(F={},u[V]=F);let $=F[N];$===void 0&&($=M.clone(),F[N]=$,C.addEventListener("dispose",D)),M=$}if(M.visible=C.visible,M.wireframe=C.wireframe,E===nn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=P}return M}function v(A,C,P,E,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===nn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const N=t.update(A),F=A.material;if(Array.isArray(F)){const $=N.groups;for(let z=0,Q=$.length;z<Q;z++){const G=$[z],et=F[G.materialIndex];if(et&&et.visible){const ct=T(A,et,E,M);A.onBeforeShadow(i,A,C,P,N,ct,G),i.renderBufferDirect(P,null,N,ct,A,G),A.onAfterShadow(i,A,C,P,N,ct,G)}}}else if(F.visible){const $=T(A,F,E,M);A.onBeforeShadow(i,A,C,P,N,$,null),i.renderBufferDirect(P,null,N,$,A,null),A.onAfterShadow(i,A,C,P,N,$,null)}}const V=A.children;for(let N=0,F=V.length;N<F;N++)v(V[N],C,P,E,M)}function D(A){A.target.removeEventListener("dispose",D);for(const P in u){const E=u[P],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Kp={[vs]:xs,[Ms]:Es,[Ss]:Ts,[fi]:ys,[xs]:vs,[Es]:Ms,[Ts]:Ss,[ys]:fi};function Qp(i,t){function e(){let b=!1;const J=new oe;let H=null;const Y=new oe(0,0,0,0);return{setMask:function(it){H!==it&&!b&&(i.colorMask(it,it,it,it),H=it)},setLocked:function(it){b=it},setClear:function(it,K,Mt,Wt,ue){ue===!0&&(it*=Wt,K*=Wt,Mt*=Wt),J.set(it,K,Mt,Wt),Y.equals(J)===!1&&(i.clearColor(it,K,Mt,Wt),Y.copy(J))},reset:function(){b=!1,H=null,Y.set(-1,0,0,0)}}}function n(){let b=!1,J=!1,H=null,Y=null,it=null;return{setReversed:function(K){if(J!==K){const Mt=t.get("EXT_clip_control");J?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT);const Wt=it;it=null,this.setClear(Wt)}J=K},getReversed:function(){return J},setTest:function(K){K?ut(i.DEPTH_TEST):R(i.DEPTH_TEST)},setMask:function(K){H!==K&&!b&&(i.depthMask(K),H=K)},setFunc:function(K){if(J&&(K=Kp[K]),Y!==K){switch(K){case vs:i.depthFunc(i.NEVER);break;case xs:i.depthFunc(i.ALWAYS);break;case Ms:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case Ss:i.depthFunc(i.EQUAL);break;case ys:i.depthFunc(i.GEQUAL);break;case Es:i.depthFunc(i.GREATER);break;case Ts:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=K}},setLocked:function(K){b=K},setClear:function(K){it!==K&&(J&&(K=1-K),i.clearDepth(K),it=K)},reset:function(){b=!1,H=null,Y=null,it=null,J=!1}}}function r(){let b=!1,J=null,H=null,Y=null,it=null,K=null,Mt=null,Wt=null,ue=null;return{setTest:function(Jt){b||(Jt?ut(i.STENCIL_TEST):R(i.STENCIL_TEST))},setMask:function(Jt){J!==Jt&&!b&&(i.stencilMask(Jt),J=Jt)},setFunc:function(Jt,De,$e){(H!==Jt||Y!==De||it!==$e)&&(i.stencilFunc(Jt,De,$e),H=Jt,Y=De,it=$e)},setOp:function(Jt,De,$e){(K!==Jt||Mt!==De||Wt!==$e)&&(i.stencilOp(Jt,De,$e),K=Jt,Mt=De,Wt=$e)},setLocked:function(Jt){b=Jt},setClear:function(Jt){ue!==Jt&&(i.clearStencil(Jt),ue=Jt)},reset:function(){b=!1,J=null,H=null,Y=null,it=null,K=null,Mt=null,Wt=null,ue=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,u=new WeakMap;let h={},f={},l=new WeakMap,p=[],g=null,_=!1,m=null,d=null,S=null,T=null,v=null,D=null,A=null,C=new Ut(0,0,0),P=0,E=!1,M=null,L=null,V=null,N=null,F=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=Q>=2);let et=null,ct={};const ht=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),It=new oe().fromArray(ht),j=new oe().fromArray(gt);function rt(b,J,H,Y){const it=new Uint8Array(4),K=i.createTexture();i.bindTexture(b,K),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<H;Mt++)b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(J+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return K}const ft={};ft[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(fi),Pt(!1),kt(zo),ut(i.CULL_FACE),I(Mn);function ut(b){h[b]!==!0&&(i.enable(b),h[b]=!0)}function R(b){h[b]!==!1&&(i.disable(b),h[b]=!1)}function yt(b,J){return f[b]!==J?(i.bindFramebuffer(b,J),f[b]=J,b===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=J),b===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=J),!0):!1}function q(b,J){let H=p,Y=!1;if(b){H=l.get(J),H===void 0&&(H=[],l.set(J,H));const it=b.textures;if(H.length!==it.length||H[0]!==i.COLOR_ATTACHMENT0){for(let K=0,Mt=it.length;K<Mt;K++)H[K]=i.COLOR_ATTACHMENT0+K;H.length=it.length,Y=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,Y=!0);Y&&i.drawBuffers(H)}function at(b){return g!==b?(i.useProgram(b),g=b,!0):!1}const st={[Un]:i.FUNC_ADD,[tl]:i.FUNC_SUBTRACT,[el]:i.FUNC_REVERSE_SUBTRACT};st[nl]=i.MIN,st[il]=i.MAX;const Nt={[rl]:i.ZERO,[sl]:i.ONE,[ol]:i.SRC_COLOR,[gs]:i.SRC_ALPHA,[fl]:i.SRC_ALPHA_SATURATE,[ul]:i.DST_COLOR,[cl]:i.DST_ALPHA,[al]:i.ONE_MINUS_SRC_COLOR,[_s]:i.ONE_MINUS_SRC_ALPHA,[hl]:i.ONE_MINUS_DST_COLOR,[ll]:i.ONE_MINUS_DST_ALPHA,[dl]:i.CONSTANT_COLOR,[pl]:i.ONE_MINUS_CONSTANT_COLOR,[ml]:i.CONSTANT_ALPHA,[gl]:i.ONE_MINUS_CONSTANT_ALPHA};function I(b,J,H,Y,it,K,Mt,Wt,ue,Jt){if(b===Mn){_===!0&&(R(i.BLEND),_=!1);return}if(_===!1&&(ut(i.BLEND),_=!0),b!==Qc){if(b!==m||Jt!==E){if((d!==Un||v!==Un)&&(i.blendEquation(i.FUNC_ADD),d=Un,v=Un),Jt)switch(b){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.ONE,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Go:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Go:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}S=null,T=null,D=null,A=null,C.set(0,0,0),P=0,m=b,E=Jt}return}it=it||J,K=K||H,Mt=Mt||Y,(J!==d||it!==v)&&(i.blendEquationSeparate(st[J],st[it]),d=J,v=it),(H!==S||Y!==T||K!==D||Mt!==A)&&(i.blendFuncSeparate(Nt[H],Nt[Y],Nt[K],Nt[Mt]),S=H,T=Y,D=K,A=Mt),(Wt.equals(C)===!1||ue!==P)&&(i.blendColor(Wt.r,Wt.g,Wt.b,ue),C.copy(Wt),P=ue),m=b,E=!1}function Zt(b,J){b.side===Oe?R(i.CULL_FACE):ut(i.CULL_FACE);let H=b.side===Ee;J&&(H=!H),Pt(H),b.blending===li&&b.transparent===!1?I(Mn):I(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),a.setFunc(b.depthFunc),a.setTest(b.depthTest),a.setMask(b.depthWrite),s.setMask(b.colorWrite);const Y=b.stencilWrite;o.setTest(Y),Y&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),ee(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):R(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(b){M!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),M=b)}function kt(b){b!==Jc?(ut(i.CULL_FACE),b!==L&&(b===zo?i.cullFace(i.BACK):b===Zc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):R(i.CULL_FACE),L=b}function Rt(b){b!==V&&(z&&i.lineWidth(b),V=b)}function ee(b,J,H){b?(ut(i.POLYGON_OFFSET_FILL),(N!==J||F!==H)&&(i.polygonOffset(J,H),N=J,F=H)):R(i.POLYGON_OFFSET_FILL)}function Ct(b){b?ut(i.SCISSOR_TEST):R(i.SCISSOR_TEST)}function w(b){b===void 0&&(b=i.TEXTURE0+$-1),et!==b&&(i.activeTexture(b),et=b)}function x(b,J,H){H===void 0&&(et===null?H=i.TEXTURE0+$-1:H=et);let Y=ct[H];Y===void 0&&(Y={type:void 0,texture:void 0},ct[H]=Y),(Y.type!==b||Y.texture!==J)&&(et!==H&&(i.activeTexture(H),et=H),i.bindTexture(b,J||ft[b]),Y.type=b,Y.texture=J)}function k(){const b=ct[et];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Dt(b){It.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),It.copy(b))}function xt(b){j.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),j.copy(b))}function Vt(b,J){let H=u.get(J);H===void 0&&(H=new WeakMap,u.set(J,H));let Y=H.get(b);Y===void 0&&(Y=i.getUniformBlockIndex(J,b.name),H.set(b,Y))}function Ot(b,J){const Y=u.get(J).get(b);c.get(J)!==Y&&(i.uniformBlockBinding(J,Y,b.__bindingPointIndex),c.set(J,Y))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,ct={},f={},l=new WeakMap,p=[],g=null,_=!1,m=null,d=null,S=null,T=null,v=null,D=null,A=null,C=new Ut(0,0,0),P=0,E=!1,M=null,L=null,V=null,N=null,F=null,It.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ut,disable:R,bindFramebuffer:yt,drawBuffers:q,useProgram:at,setBlending:I,setMaterial:Zt,setFlipSided:Pt,setCullFace:kt,setLineWidth:Rt,setPolygonOffset:ee,setScissorTest:Ct,activeTexture:w,bindTexture:x,unbindTexture:k,compressedTexImage2D:tt,compressedTexImage3D:nt,texImage2D:vt,texImage3D:Lt,updateUBOMapping:Vt,uniformBlockBinding:Ot,texStorage2D:Gt,texStorage3D:ot,texSubImage2D:Z,texSubImage3D:Et,compressedTexSubImage2D:pt,compressedTexSubImage3D:_t,scissor:Dt,viewport:xt,reset:Kt}}function Oa(i,t,e,n){const r=tm(n);switch(e){case oc:return i*t;case cc:return i*t;case lc:return i*t*2;case ho:return i*t/r.components*r.byteLength;case fo:return i*t/r.components*r.byteLength;case uc:return i*t*2/r.components*r.byteLength;case po:return i*t*2/r.components*r.byteLength;case ac:return i*t*3/r.components*r.byteLength;case ze:return i*t*4/r.components*r.byteLength;case mo:return i*t*4/r.components*r.byteLength;case xr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cs:case Ls:return Math.max(i,16)*Math.max(t,8)/4;case Rs:case Ps:return Math.max(i,8)*Math.max(t,8)/2;case Ds:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Os:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bs:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zs:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ks:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gs:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vs:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ws:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xs:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qs:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ys:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $s:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Er:case js:case Js:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hc:case Zs:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ks:case Qs:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tm(i){switch(i){case an:case ic:return{byteLength:1,components:1};case zi:case rc:case Gi:return{byteLength:2,components:1};case lo:case uo:return{byteLength:2,components:4};case kn:case co:case We:return{byteLength:4,components:1};case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function em(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new St,h=new WeakMap;let f;const l=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function g(w,x){return p?new OffscreenCanvas(w,x):Hi("canvas")}function _(w,x,k){let tt=1;const nt=Ct(w);if((nt.width>k||nt.height>k)&&(tt=k/Math.max(nt.width,nt.height)),tt<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){const Z=Math.floor(tt*nt.width),Et=Math.floor(tt*nt.height);f===void 0&&(f=g(Z,Et));const pt=x?g(Z,Et):f;return pt.width=Z,pt.height=Et,pt.getContext("2d").drawImage(w,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+Et+")."),pt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,x,k,tt,nt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=x;if(x===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),x===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),x===i.RGBA){const Et=nt?Ur:Xt.getTransfer(tt);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=Et===Qt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(w,x){let k;return w?x===null||x===kn||x===mi?k=i.DEPTH24_STENCIL8:x===We?k=i.DEPTH32F_STENCIL8:x===zi&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===kn||x===mi?k=i.DEPTH_COMPONENT24:x===We?k=i.DEPTH_COMPONENT32F:x===zi&&(k=i.DEPTH_COMPONENT16),k}function D(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Re&&w.minFilter!==Ve?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){const x=w.target;x.removeEventListener("dispose",A),P(x),x.isVideoTexture&&h.delete(x)}function C(w){const x=w.target;x.removeEventListener("dispose",C),M(x)}function P(w){const x=n.get(w);if(x.__webglInit===void 0)return;const k=w.source,tt=l.get(k);if(tt){const nt=tt[x.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(w),Object.keys(tt).length===0&&l.delete(k)}n.remove(w)}function E(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const k=w.source,tt=l.get(k);delete tt[x.__cacheKey],a.memory.textures--}function M(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(x.__webglFramebuffer[tt]))for(let nt=0;nt<x.__webglFramebuffer[tt].length;nt++)i.deleteFramebuffer(x.__webglFramebuffer[tt][nt]);else i.deleteFramebuffer(x.__webglFramebuffer[tt]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[tt])}else{if(Array.isArray(x.__webglFramebuffer))for(let tt=0;tt<x.__webglFramebuffer.length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[tt]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let tt=0;tt<x.__webglColorRenderbuffer.length;tt++)x.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[tt]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=w.textures;for(let tt=0,nt=k.length;tt<nt;tt++){const Z=n.get(k[tt]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(k[tt])}n.remove(w)}let L=0;function V(){L=0}function N(){const w=L;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),L+=1,w}function F(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function $(w,x){const k=n.get(w);if(w.isVideoTexture&&Rt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const tt=w.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,w,x);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function z(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){j(k,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function Q(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){j(k,w,x);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function G(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){rt(k,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}const et={[wr]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[As]:i.MIRRORED_REPEAT},ct={[Re]:i.NEAREST,[wl]:i.NEAREST_MIPMAP_NEAREST,[Xi]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},ht={[Pl]:i.NEVER,[Fl]:i.ALWAYS,[Ll]:i.LESS,[dc]:i.LEQUAL,[Dl]:i.EQUAL,[Nl]:i.GEQUAL,[Ul]:i.GREATER,[Il]:i.NOTEQUAL};function gt(w,x){if(x.type===We&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ve||x.magFilter===Or||x.magFilter===Xi||x.magFilter===On||x.minFilter===Ve||x.minFilter===Or||x.minFilter===Xi||x.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,et[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,et[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,et[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ct[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ct[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ht[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Re||x.minFilter!==Xi&&x.minFilter!==On||x.type===We&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function It(w,x){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));const tt=x.source;let nt=l.get(tt);nt===void 0&&(nt={},l.set(tt,nt));const Z=F(x);if(Z!==w.__cacheKey){nt[Z]===void 0&&(nt[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),nt[Z].usedTimes++;const Et=nt[w.__cacheKey];Et!==void 0&&(nt[w.__cacheKey].usedTimes--,Et.usedTimes===0&&E(x)),w.__cacheKey=Z,w.__webglTexture=nt[Z].texture}return k}function j(w,x,k){let tt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(tt=i.TEXTURE_3D);const nt=It(w,x),Z=x.source;e.bindTexture(tt,w.__webglTexture,i.TEXTURE0+k);const Et=n.get(Z);if(Z.version!==Et.__version||nt===!0){e.activeTexture(i.TEXTURE0+k);const pt=Xt.getPrimaries(Xt.workingColorSpace),_t=x.colorSpace===xn?null:Xt.getPrimaries(x.colorSpace),Gt=x.colorSpace===xn||pt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let ot=_(x.image,!1,r.maxTextureSize);ot=ee(x,ot);const vt=s.convert(x.format,x.colorSpace),Lt=s.convert(x.type);let Dt=T(x.internalFormat,vt,Lt,x.colorSpace,x.isVideoTexture);gt(tt,x);let xt;const Vt=x.mipmaps,Ot=x.isVideoTexture!==!0,Kt=Et.__version===void 0||nt===!0,b=Z.dataReady,J=D(x,ot);if(x.isDepthTexture)Dt=v(x.format===gi,x.type),Kt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Dt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Dt,ot.width,ot.height,0,vt,Lt,null));else if(x.isDataTexture)if(Vt.length>0){Ot&&Kt&&e.texStorage2D(i.TEXTURE_2D,J,Dt,Vt[0].width,Vt[0].height);for(let H=0,Y=Vt.length;H<Y;H++)xt=Vt[H],Ot?b&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,xt.width,xt.height,vt,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,H,Dt,xt.width,xt.height,0,vt,Lt,xt.data);x.generateMipmaps=!1}else Ot?(Kt&&e.texStorage2D(i.TEXTURE_2D,J,Dt,ot.width,ot.height),b&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,vt,Lt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,ot.width,ot.height,0,vt,Lt,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ot&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,Dt,Vt[0].width,Vt[0].height,ot.depth);for(let H=0,Y=Vt.length;H<Y;H++)if(xt=Vt[H],x.format!==ze)if(vt!==null)if(Ot){if(b)if(x.layerUpdates.size>0){const it=Oa(xt.width,xt.height,x.format,x.type);for(const K of x.layerUpdates){const Mt=xt.data.subarray(K*it/xt.data.BYTES_PER_ELEMENT,(K+1)*it/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,K,xt.width,xt.height,1,vt,Mt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,xt.width,xt.height,ot.depth,vt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Dt,xt.width,xt.height,ot.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?b&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,xt.width,xt.height,ot.depth,vt,Lt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,Dt,xt.width,xt.height,ot.depth,0,vt,Lt,xt.data)}else{Ot&&Kt&&e.texStorage2D(i.TEXTURE_2D,J,Dt,Vt[0].width,Vt[0].height);for(let H=0,Y=Vt.length;H<Y;H++)xt=Vt[H],x.format!==ze?vt!==null?Ot?b&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,H,Dt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?b&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,xt.width,xt.height,vt,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,H,Dt,xt.width,xt.height,0,vt,Lt,xt.data)}else if(x.isDataArrayTexture)if(Ot){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,Dt,ot.width,ot.height,ot.depth),b)if(x.layerUpdates.size>0){const H=Oa(ot.width,ot.height,x.format,x.type);for(const Y of x.layerUpdates){const it=ot.data.subarray(Y*H/ot.data.BYTES_PER_ELEMENT,(Y+1)*H/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ot.width,ot.height,1,vt,Lt,it)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,vt,Lt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,ot.width,ot.height,ot.depth,0,vt,Lt,ot.data);else if(x.isData3DTexture)Ot?(Kt&&e.texStorage3D(i.TEXTURE_3D,J,Dt,ot.width,ot.height,ot.depth),b&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,vt,Lt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,ot.width,ot.height,ot.depth,0,vt,Lt,ot.data);else if(x.isFramebufferTexture){if(Kt)if(Ot)e.texStorage2D(i.TEXTURE_2D,J,Dt,ot.width,ot.height);else{let H=ot.width,Y=ot.height;for(let it=0;it<J;it++)e.texImage2D(i.TEXTURE_2D,it,Dt,H,Y,0,vt,Lt,null),H>>=1,Y>>=1}}else if(Vt.length>0){if(Ot&&Kt){const H=Ct(Vt[0]);e.texStorage2D(i.TEXTURE_2D,J,Dt,H.width,H.height)}for(let H=0,Y=Vt.length;H<Y;H++)xt=Vt[H],Ot?b&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,vt,Lt,xt):e.texImage2D(i.TEXTURE_2D,H,Dt,vt,Lt,xt);x.generateMipmaps=!1}else if(Ot){if(Kt){const H=Ct(ot);e.texStorage2D(i.TEXTURE_2D,J,Dt,H.width,H.height)}b&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Lt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Dt,vt,Lt,ot);m(x)&&d(tt),Et.__version=Z.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function rt(w,x,k){if(x.image.length!==6)return;const tt=It(w,x),nt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);const Z=n.get(nt);if(nt.version!==Z.__version||tt===!0){e.activeTexture(i.TEXTURE0+k);const Et=Xt.getPrimaries(Xt.workingColorSpace),pt=x.colorSpace===xn?null:Xt.getPrimaries(x.colorSpace),_t=x.colorSpace===xn||Et===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,ot=x.image[0]&&x.image[0].isDataTexture,vt=[];for(let Y=0;Y<6;Y++)!Gt&&!ot?vt[Y]=_(x.image[Y],!0,r.maxCubemapSize):vt[Y]=ot?x.image[Y].image:x.image[Y],vt[Y]=ee(x,vt[Y]);const Lt=vt[0],Dt=s.convert(x.format,x.colorSpace),xt=s.convert(x.type),Vt=T(x.internalFormat,Dt,xt,x.colorSpace),Ot=x.isVideoTexture!==!0,Kt=Z.__version===void 0||tt===!0,b=nt.dataReady;let J=D(x,Lt);gt(i.TEXTURE_CUBE_MAP,x);let H;if(Gt){Ot&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,J,Vt,Lt.width,Lt.height);for(let Y=0;Y<6;Y++){H=vt[Y].mipmaps;for(let it=0;it<H.length;it++){const K=H[it];x.format!==ze?Dt!==null?Ot?b&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,K.width,K.height,Dt,K.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,Vt,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?b&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,K.width,K.height,Dt,xt,K.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,Vt,K.width,K.height,0,Dt,xt,K.data)}}}else{if(H=x.mipmaps,Ot&&Kt){H.length>0&&J++;const Y=Ct(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,J,Vt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ot){Ot?b&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,vt[Y].width,vt[Y].height,Dt,xt,vt[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Vt,vt[Y].width,vt[Y].height,0,Dt,xt,vt[Y].data);for(let it=0;it<H.length;it++){const Mt=H[it].image[Y].image;Ot?b&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,Mt.width,Mt.height,Dt,xt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,Vt,Mt.width,Mt.height,0,Dt,xt,Mt.data)}}else{Ot?b&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Dt,xt,vt[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Vt,Dt,xt,vt[Y]);for(let it=0;it<H.length;it++){const K=H[it];Ot?b&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,Dt,xt,K.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,Vt,Dt,xt,K.image[Y])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),Z.__version=nt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ft(w,x,k,tt,nt,Z){const Et=s.convert(k.format,k.colorSpace),pt=s.convert(k.type),_t=T(k.internalFormat,Et,pt,k.colorSpace),Gt=n.get(x),ot=n.get(k);if(ot.__renderTarget=x,!Gt.__hasExternalTextures){const vt=Math.max(1,x.width>>Z),Lt=Math.max(1,x.height>>Z);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Z,_t,vt,Lt,x.depth,0,Et,pt,null):e.texImage2D(nt,Z,_t,vt,Lt,0,Et,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,nt,ot.__webglTexture,0,Pt(x)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,nt,ot.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(w,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const tt=x.depthTexture,nt=tt&&tt.isDepthTexture?tt.type:null,Z=v(x.stencilBuffer,nt),Et=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=Pt(x);kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Z,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,w)}else{const tt=x.textures;for(let nt=0;nt<tt.length;nt++){const Z=tt[nt],Et=s.convert(Z.format,Z.colorSpace),pt=s.convert(Z.type),_t=T(Z.internalFormat,Et,pt,Z.colorSpace),Gt=Pt(x);k&&kt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,_t,x.width,x.height):kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,_t,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,_t,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function R(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(x.depthTexture);tt.__renderTarget=x,(!tt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const nt=tt.__webglTexture,Z=Pt(x);if(x.depthTexture.format===ui)kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(x.depthTexture.format===gi)kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function yt(w){const x=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const tt=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),tt){const nt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,tt.removeEventListener("dispose",nt)};tt.addEventListener("dispose",nt),x.__depthDisposeCallback=nt}x.__boundDepthTexture=tt}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");R(x.__webglFramebuffer,w)}else if(k){x.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[tt]),x.__webglDepthbuffer[tt]===void 0)x.__webglDepthbuffer[tt]=i.createRenderbuffer(),ut(x.__webglDepthbuffer[tt],w,!1);else{const nt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ut(x.__webglDepthbuffer,w,!1);else{const tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(w,x,k){const tt=n.get(w);x!==void 0&&ft(tt.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&yt(w)}function at(w){const x=w.texture,k=n.get(w),tt=n.get(x);w.addEventListener("dispose",C);const nt=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Et=nt.length>1;if(Et||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=x.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[pt]=[];for(let _t=0;_t<x.mipmaps.length;_t++)k.__webglFramebuffer[pt][_t]=i.createFramebuffer()}else k.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let pt=0;pt<x.mipmaps.length;pt++)k.__webglFramebuffer[pt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Et)for(let pt=0,_t=nt.length;pt<_t;pt++){const Gt=n.get(nt[pt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&kt(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pt=0;pt<nt.length;pt++){const _t=nt[pt];k.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[pt]);const Gt=s.convert(_t.format,_t.colorSpace),ot=s.convert(_t.type),vt=T(_t.internalFormat,Gt,ot,_t.colorSpace,w.isXRRenderTarget===!0),Lt=Pt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,vt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,k.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),gt(i.TEXTURE_CUBE_MAP,x);for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)ft(k.__webglFramebuffer[pt][_t],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_t);else ft(k.__webglFramebuffer[pt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let pt=0,_t=nt.length;pt<_t;pt++){const Gt=nt[pt],ot=n.get(Gt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),gt(i.TEXTURE_2D,Gt),ft(k.__webglFramebuffer,w,Gt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(Gt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,tt.__webglTexture),gt(pt,x),x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)ft(k.__webglFramebuffer[_t],w,x,i.COLOR_ATTACHMENT0,pt,_t);else ft(k.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,pt,0);m(x)&&d(pt),e.unbindTexture()}w.depthBuffer&&yt(w)}function st(w){const x=w.textures;for(let k=0,tt=x.length;k<tt;k++){const nt=x[k];if(m(nt)){const Z=S(w),Et=n.get(nt).__webglTexture;e.bindTexture(Z,Et),d(Z),e.unbindTexture()}}}const Nt=[],I=[];function Zt(w){if(w.samples>0){if(kt(w)===!1){const x=w.textures,k=w.width,tt=w.height;let nt=i.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(w),pt=x.length>1;if(pt)for(let _t=0;_t<x.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _t=0;_t<x.length;_t++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Gt=n.get(x[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,k,tt,0,0,k,tt,nt,i.NEAREST),c===!0&&(Nt.length=0,I.length=0,Nt.push(i.COLOR_ATTACHMENT0+_t),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Nt.push(Z),I.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let _t=0;_t<x.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Gt=n.get(x[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Pt(w){return Math.min(r.maxSamples,w.samples)}function kt(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Rt(w){const x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function ee(w,x){const k=w.colorSpace,tt=w.format,nt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==vi&&k!==xn&&(Xt.getTransfer(k)===Qt?(tt!==ze||nt!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function Ct(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=z,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=q,this.setupRenderTarget=at,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=kt}function nm(i,t){function e(n,r=xn){let s;const a=Xt.getTransfer(r);if(n===an)return i.UNSIGNED_BYTE;if(n===lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.BYTE;if(n===rc)return i.SHORT;if(n===zi)return i.UNSIGNED_SHORT;if(n===co)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===We)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===oc)return i.ALPHA;if(n===ac)return i.RGB;if(n===ze)return i.RGBA;if(n===cc)return i.LUMINANCE;if(n===lc)return i.LUMINANCE_ALPHA;if(n===ui)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===ho)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===uc)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===xr||n===Mr||n===Sr||n===yr)if(a===Qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rs||n===Cs||n===Ps||n===Ls)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ps)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ls)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ds||n===Us||n===Is)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ds||n===Us)return a===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Is)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===ks||n===Hs||n===Gs||n===Vs||n===Ws||n===Xs||n===qs||n===Ys||n===$s)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ns)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fs)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Os)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bs)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zs)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ks)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hs)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gs)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vs)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ws)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xs)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qs)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ys)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$s)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===js||n===Js)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Er)return a===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===js)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Js)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===Zs||n===Ks||n===Qs)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Er)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Zs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ks)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class im extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Me extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rm={type:"move"};class us{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],l=h.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&l>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&l<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,om=`
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

}`;class am{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new _e,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qe({vertexShader:sm,fragmentShader:om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cm extends xi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,l=null,p=null,g=null;const _=new am,m=e.getContextAttributes();let d=null,S=null;const T=[],v=[],D=new St;let A=null;const C=new Le;C.viewport=new oe;const P=new Le;P.viewport=new oe;const E=[C,P],M=new im;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let rt=T[j];return rt===void 0&&(rt=new us,T[j]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(j){let rt=T[j];return rt===void 0&&(rt=new us,T[j]=rt),rt.getGripSpace()},this.getHand=function(j){let rt=T[j];return rt===void 0&&(rt=new us,T[j]=rt),rt.getHandSpace()};function N(j){const rt=v.indexOf(j.inputSource);if(rt===-1)return;const ft=T[rt];ft!==void 0&&(ft.update(j.inputSource,j.frame,u||a),ft.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",$);for(let j=0;j<T.length;j++){const rt=v[j];rt!==null&&(v[j]=null,T[j].disconnect(rt))}L=null,V=null,_.reset(),t.setRenderTarget(d),p=null,l=null,f=null,r=null,S=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return l!==null?l:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",F),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),r.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Hn(p.framebufferWidth,p.framebufferHeight,{format:ze,type:an,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,ft=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?gi:ui,ft=m.stencil?mi:kn);const R={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};f=new XRWebGLBinding(r,e),l=f.createProjectionLayer(R),r.updateRenderState({layers:[l]}),t.setPixelRatio(1),t.setSize(l.textureWidth,l.textureHeight,!1),S=new Hn(l.textureWidth,l.textureHeight,{format:ze,type:an,depthTexture:new Ac(l.textureWidth,l.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),It.setContext(r),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(j){for(let rt=0;rt<j.removed.length;rt++){const ft=j.removed[rt],ut=v.indexOf(ft);ut>=0&&(v[ut]=null,T[ut].disconnect(ft))}for(let rt=0;rt<j.added.length;rt++){const ft=j.added[rt];let ut=v.indexOf(ft);if(ut===-1){for(let yt=0;yt<T.length;yt++)if(yt>=v.length){v.push(ft),ut=yt;break}else if(v[yt]===null){v[yt]=ft,ut=yt;break}if(ut===-1)break}const R=T[ut];R&&R.connect(ft)}}const z=new U,Q=new U;function G(j,rt,ft){z.setFromMatrixPosition(rt.matrixWorld),Q.setFromMatrixPosition(ft.matrixWorld);const ut=z.distanceTo(Q),R=rt.projectionMatrix.elements,yt=ft.projectionMatrix.elements,q=R[14]/(R[10]-1),at=R[14]/(R[10]+1),st=(R[9]+1)/R[5],Nt=(R[9]-1)/R[5],I=(R[8]-1)/R[0],Zt=(yt[8]+1)/yt[0],Pt=q*I,kt=q*Zt,Rt=ut/(-I+Zt),ee=Rt*-I;if(rt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ee),j.translateZ(Rt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),R[10]===-1)j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Ct=q+Rt,w=at+Rt,x=Pt-ee,k=kt+(ut-ee),tt=st*at/w*Ct,nt=Nt*at/w*Ct;j.projectionMatrix.makePerspective(x,k,tt,nt,Ct,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function et(j,rt){rt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(rt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let rt=j.near,ft=j.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),M.near=P.near=C.near=rt,M.far=P.far=C.far=ft,(L!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,V=M.far),C.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const ut=j.parent,R=M.cameras;et(M,ut);for(let yt=0;yt<R.length;yt++)et(R[yt],ut);R.length===2?G(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),ct(j,M,ut)};function ct(j,rt,ft){ft===null?j.matrix.copy(rt.matrixWorld):(j.matrix.copy(ft.matrixWorld),j.matrix.invert(),j.matrix.multiply(rt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ki*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(l===null&&p===null))return c},this.setFoveation=function(j){c=j,l!==null&&(l.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ht=null;function gt(j,rt){if(h=rt.getViewerPose(u||a),g=rt,h!==null){const ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ut=!1;ft.length!==M.cameras.length&&(M.cameras.length=0,ut=!0);for(let yt=0;yt<ft.length;yt++){const q=ft[yt];let at=null;if(p!==null)at=p.getViewport(q);else{const Nt=f.getViewSubImage(l,q);at=Nt.viewport,yt===0&&(t.setRenderTargetTextures(S,Nt.colorTexture,l.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(S))}let st=E[yt];st===void 0&&(st=new Le,st.layers.enable(yt),st.viewport=new oe,E[yt]=st),st.matrix.fromArray(q.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(q.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(at.x,at.y,at.width,at.height),yt===0&&(M.matrix.copy(st.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ut===!0&&M.cameras.push(st)}const R=r.enabledFeatures;if(R&&R.includes("depth-sensing")){const yt=f.getDepthInformation(ft[0]);yt&&yt.isValid&&yt.texture&&_.init(t,yt,r.renderState)}}for(let ft=0;ft<T.length;ft++){const ut=v[ft],R=T[ft];ut!==null&&R!==void 0&&R.update(ut,rt,u||a)}ht&&ht(j,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const It=new bc;It.setAnimationLoop(gt),this.setAnimationLoop=function(j){ht=j},this.dispose=function(){}}}const Pn=new Xe,lm=new te;function um(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,yc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,S,T,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),l(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,S,T):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ee&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ee&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=t.get(d),T=S.envMap,v=S.envMapRotation;T&&(m.envMap.value=T,Pn.copy(v),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),m.envMapRotation.value.setFromMatrix4(lm.makeRotationFromEuler(Pn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function l(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ee&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function hm(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){const v=T.program;n.uniformBlockBinding(S,v)}function u(S,T){let v=r[S.id];v===void 0&&(g(S),v=h(S),r[S.id]=v,S.addEventListener("dispose",m));const D=T.program;n.updateUBOMapping(S,D);const A=t.render.frame;s[S.id]!==A&&(l(S),s[S.id]=A)}function h(S){const T=f();S.__bindingPointIndex=T;const v=i.createBuffer(),D=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,v),v}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(S){const T=r[S.id],v=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,C=v.length;A<C;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,M=P.length;E<M;E++){const L=P[E];if(p(L,A,E,D)===!0){const V=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let $=0;$<N.length;$++){const z=N[$],Q=_(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,V+F,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,F),F+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,T,v,D){const A=S.value,C=T+"_"+v;if(D[C]===void 0)return typeof A=="number"||typeof A=="boolean"?D[C]=A:D[C]=A.clone(),!0;{const P=D[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return D[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(S){const T=S.uniforms;let v=0;const D=16;for(let C=0,P=T.length;C<P;C++){const E=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,L=E.length;M<L;M++){const V=E[M],N=Array.isArray(V.value)?V.value:[V.value];for(let F=0,$=N.length;F<$;F++){const z=N[F],Q=_(z),G=v%D,et=G%Q.boundary,ct=G+et;v+=et,ct!==0&&D-ct<Q.storage&&(v+=D-ct),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=Q.storage}}}const A=v%D;return A>0&&(v+=D-A),S.__size=v,S.__cache={},this}function _(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),T}function m(S){const T=S.target;T.removeEventListener("dispose",m);const v=a.indexOf(T.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:u,dispose:d}}class fm{constructor(t={}){const{canvas:e=Ql(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:l=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const S=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this.toneMapping=Sn,this.toneMappingExposure=1;const v=this;let D=!1,A=0,C=0,P=null,E=-1,M=null;const L=new oe,V=new oe;let N=null;const F=new Ut(0);let $=0,z=e.width,Q=e.height,G=1,et=null,ct=null;const ht=new oe(0,0,z,Q),gt=new oe(0,0,z,Q);let It=!1;const j=new _o;let rt=!1,ft=!1;const ut=new te,R=new te,yt=new U,q=new oe,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Nt(){return P===null?G:1}let I=n;function Zt(y,O){return e.getContext(y,O)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oo}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",K,!1),I===null){const O="webgl2";if(I=Zt(O,y),I===null)throw Zt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Pt,kt,Rt,ee,Ct,w,x,k,tt,nt,Z,Et,pt,_t,Gt,ot,vt,Lt,Dt,xt,Vt,Ot,Kt,b;function J(){Pt=new _d(I),Pt.init(),Ot=new nm(I,Pt),kt=new hd(I,Pt,t,Ot),Rt=new Qp(I,Pt),kt.reverseDepthBuffer&&l&&Rt.buffers.depth.setReversed(!0),ee=new Md(I),Ct=new Bp,w=new em(I,Pt,Rt,Ct,kt,Ot,ee),x=new dd(v),k=new gd(v),tt=new wu(I),Kt=new ld(I,tt),nt=new vd(I,tt,ee,Kt),Z=new yd(I,nt,tt,ee),Dt=new Sd(I,kt,w),ot=new fd(Ct),Et=new Op(v,x,k,Pt,kt,Kt,ot),pt=new um(v,Ct),_t=new kp,Gt=new qp(Pt),Lt=new cd(v,x,k,Rt,Z,p,c),vt=new Zp(v,Z,kt),b=new hm(I,ee,kt,Rt),xt=new ud(I,Pt,ee),Vt=new xd(I,Pt,ee),ee.programs=Et.programs,v.capabilities=kt,v.extensions=Pt,v.properties=Ct,v.renderLists=_t,v.shadowMap=vt,v.state=Rt,v.info=ee}J();const H=new cm(v,I);this.xr=H,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Pt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Pt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(z,Q,!1))},this.getSize=function(y){return y.set(z,Q)},this.setSize=function(y,O,W=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=y,Q=O,e.width=Math.floor(y*G),e.height=Math.floor(O*G),W===!0&&(e.style.width=y+"px",e.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(z*G,Q*G).floor()},this.setDrawingBufferSize=function(y,O,W){z=y,Q=O,G=W,e.width=Math.floor(y*W),e.height=Math.floor(O*W),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(ht)},this.setViewport=function(y,O,W,X){y.isVector4?ht.set(y.x,y.y,y.z,y.w):ht.set(y,O,W,X),Rt.viewport(L.copy(ht).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(gt)},this.setScissor=function(y,O,W,X){y.isVector4?gt.set(y.x,y.y,y.z,y.w):gt.set(y,O,W,X),Rt.scissor(V.copy(gt).multiplyScalar(G).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(y){Rt.setScissorTest(It=y)},this.setOpaqueSort=function(y){et=y},this.setTransparentSort=function(y){ct=y},this.getClearColor=function(y){return y.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(y=!0,O=!0,W=!0){let X=0;if(y){let B=!1;if(P!==null){const lt=P.texture.format;B=lt===mo||lt===po||lt===fo}if(B){const lt=P.texture.type,mt=lt===an||lt===kn||lt===zi||lt===mi||lt===lo||lt===uo,Tt=Lt.getClearColor(),bt=Lt.getClearAlpha(),Ft=Tt.r,Bt=Tt.g,wt=Tt.b;mt?(g[0]=Ft,g[1]=Bt,g[2]=wt,g[3]=bt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ft,_[1]=Bt,_[2]=wt,_[3]=bt,I.clearBufferiv(I.COLOR,0,_))}else X|=I.COLOR_BUFFER_BIT}O&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",K,!1),_t.dispose(),Gt.dispose(),Ct.dispose(),x.dispose(),k.dispose(),Z.dispose(),Kt.dispose(),b.dispose(),Et.dispose(),H.dispose(),H.removeEventListener("sessionstart",Ro),H.removeEventListener("sessionend",Co),Tn.stop()};function Y(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const y=ee.autoReset,O=vt.enabled,W=vt.autoUpdate,X=vt.needsUpdate,B=vt.type;J(),ee.autoReset=y,vt.enabled=O,vt.autoUpdate=W,vt.needsUpdate=X,vt.type=B}function K(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Mt(y){const O=y.target;O.removeEventListener("dispose",Mt),Wt(O)}function Wt(y){ue(y),Ct.remove(y)}function ue(y){const O=Ct.get(y).programs;O!==void 0&&(O.forEach(function(W){Et.releaseProgram(W)}),y.isShaderMaterial&&Et.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,W,X,B,lt){O===null&&(O=at);const mt=B.isMesh&&B.matrixWorld.determinant()<0,Tt=Gc(y,O,W,X,B);Rt.setMaterial(X,mt);let bt=W.index,Ft=1;if(X.wireframe===!0){if(bt=nt.getWireframeAttribute(W),bt===void 0)return;Ft=2}const Bt=W.drawRange,wt=W.attributes.position;let qt=Bt.start*Ft,ne=(Bt.start+Bt.count)*Ft;lt!==null&&(qt=Math.max(qt,lt.start*Ft),ne=Math.min(ne,(lt.start+lt.count)*Ft)),bt!==null?(qt=Math.max(qt,0),ne=Math.min(ne,bt.count)):wt!=null&&(qt=Math.max(qt,0),ne=Math.min(ne,wt.count));const ie=ne-qt;if(ie<0||ie===1/0)return;Kt.setup(B,X,Tt,W,bt);let Te,Yt=xt;if(bt!==null&&(Te=tt.get(bt),Yt=Vt,Yt.setIndex(Te)),B.isMesh)X.wireframe===!0?(Rt.setLineWidth(X.wireframeLinewidth*Nt()),Yt.setMode(I.LINES)):Yt.setMode(I.TRIANGLES);else if(B.isLine){let At=X.linewidth;At===void 0&&(At=1),Rt.setLineWidth(At*Nt()),B.isLineSegments?Yt.setMode(I.LINES):B.isLineLoop?Yt.setMode(I.LINE_LOOP):Yt.setMode(I.LINE_STRIP)}else B.isPoints?Yt.setMode(I.POINTS):B.isSprite&&Yt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Yt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const At=B._multiDrawStarts,je=B._multiDrawCounts,$t=B._multiDrawCount,Ue=bt?tt.get(bt).bytesPerElement:1,Wn=Ct.get(X).currentProgram.getUniforms();for(let be=0;be<$t;be++)Wn.setValue(I,"_gl_DrawID",be),Yt.render(At[be]/Ue,je[be])}else if(B.isInstancedMesh)Yt.renderInstances(qt,ie,B.count);else if(W.isInstancedBufferGeometry){const At=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,je=Math.min(W.instanceCount,At);Yt.renderInstances(qt,ie,je)}else Yt.render(qt,ie)};function Jt(y,O,W){y.transparent===!0&&y.side===Oe&&y.forceSinglePass===!1?(y.side=Ee,y.needsUpdate=!0,Wi(y,O,W),y.side=yn,y.needsUpdate=!0,Wi(y,O,W),y.side=Oe):Wi(y,O,W)}this.compile=function(y,O,W=null){W===null&&(W=y),d=Gt.get(W),d.init(O),T.push(d),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),y!==W&&y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const X=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const lt=B.material;if(lt)if(Array.isArray(lt))for(let mt=0;mt<lt.length;mt++){const Tt=lt[mt];Jt(Tt,W,B),X.add(Tt)}else Jt(lt,W,B),X.add(lt)}),T.pop(),d=null,X},this.compileAsync=function(y,O,W=null){const X=this.compile(y,O,W);return new Promise(B=>{function lt(){if(X.forEach(function(mt){Ct.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){B(y);return}setTimeout(lt,10)}Pt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let De=null;function $e(y){De&&De(y)}function Ro(){Tn.stop()}function Co(){Tn.start()}const Tn=new bc;Tn.setAnimationLoop($e),typeof self!="undefined"&&Tn.setContext(self),this.setAnimationLoop=function(y){De=y,H.setAnimationLoop(y),y===null?Tn.stop():Tn.start()},H.addEventListener("sessionstart",Ro),H.addEventListener("sessionend",Co),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(O),O=H.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,O,P),d=Gt.get(y,T.length),d.init(O),T.push(d),R.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(R),ft=this.localClippingEnabled,rt=ot.init(this.clippingPlanes,ft),m=_t.get(y,S.length),m.init(),S.push(m),H.enabled===!0&&H.isPresenting===!0){const lt=v.xr.getDepthSensingMesh();lt!==null&&Fr(lt,O,-1/0,v.sortObjects)}Fr(y,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(et,ct),st=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,st&&Lt.addToRenderList(m,y),this.info.render.frame++,rt===!0&&ot.beginShadows();const W=d.state.shadowsArray;vt.render(W,y,O),rt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(d.setupLights(),O.isArrayCamera){const lt=O.cameras;if(B.length>0)for(let mt=0,Tt=lt.length;mt<Tt;mt++){const bt=lt[mt];Lo(X,B,y,bt)}st&&Lt.render(y);for(let mt=0,Tt=lt.length;mt<Tt;mt++){const bt=lt[mt];Po(m,y,bt,bt.viewport)}}else B.length>0&&Lo(X,B,y,O),st&&Lt.render(y),Po(m,y,O);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(v,y,O),Kt.resetDefaultState(),E=-1,M=null,T.pop(),T.length>0?(d=T[T.length-1],rt===!0&&ot.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Fr(y,O,W,X){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||j.intersectsSprite(y)){X&&q.setFromMatrixPosition(y.matrixWorld).applyMatrix4(R);const mt=Z.update(y),Tt=y.material;Tt.visible&&m.push(y,mt,Tt,W,q.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||j.intersectsObject(y))){const mt=Z.update(y),Tt=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),q.copy(y.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),q.copy(mt.boundingSphere.center)),q.applyMatrix4(y.matrixWorld).applyMatrix4(R)),Array.isArray(Tt)){const bt=mt.groups;for(let Ft=0,Bt=bt.length;Ft<Bt;Ft++){const wt=bt[Ft],qt=Tt[wt.materialIndex];qt&&qt.visible&&m.push(y,mt,qt,W,q.z,wt)}}else Tt.visible&&m.push(y,mt,Tt,W,q.z,null)}}const lt=y.children;for(let mt=0,Tt=lt.length;mt<Tt;mt++)Fr(lt[mt],O,W,X)}function Po(y,O,W,X){const B=y.opaque,lt=y.transmissive,mt=y.transparent;d.setupLightsView(W),rt===!0&&ot.setGlobalState(v.clippingPlanes,W),X&&Rt.viewport(L.copy(X)),B.length>0&&Vi(B,O,W),lt.length>0&&Vi(lt,O,W),mt.length>0&&Vi(mt,O,W),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Lo(y,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new Hn(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?Gi:an,minFilter:On,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const lt=d.state.transmissionRenderTarget[X.id],mt=X.viewport||L;lt.setSize(mt.z,mt.w);const Tt=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(F),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),st&&Lt.render(W);const bt=v.toneMapping;v.toneMapping=Sn;const Ft=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),rt===!0&&ot.setGlobalState(v.clippingPlanes,X),Vi(y,W,X),w.updateMultisampleRenderTarget(lt),w.updateRenderTargetMipmap(lt),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let wt=0,qt=O.length;wt<qt;wt++){const ne=O[wt],ie=ne.object,Te=ne.geometry,Yt=ne.material,At=ne.group;if(Yt.side===Oe&&ie.layers.test(X.layers)){const je=Yt.side;Yt.side=Ee,Yt.needsUpdate=!0,Do(ie,W,X,Te,Yt,At),Yt.side=je,Yt.needsUpdate=!0,Bt=!0}}Bt===!0&&(w.updateMultisampleRenderTarget(lt),w.updateRenderTargetMipmap(lt))}v.setRenderTarget(Tt),v.setClearColor(F,$),Ft!==void 0&&(X.viewport=Ft),v.toneMapping=bt}function Vi(y,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,lt=y.length;B<lt;B++){const mt=y[B],Tt=mt.object,bt=mt.geometry,Ft=X===null?mt.material:X,Bt=mt.group;Tt.layers.test(W.layers)&&Do(Tt,O,W,bt,Ft,Bt)}}function Do(y,O,W,X,B,lt){y.onBeforeRender(v,O,W,X,B,lt),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(v,O,W,X,y,lt),B.transparent===!0&&B.side===Oe&&B.forceSinglePass===!1?(B.side=Ee,B.needsUpdate=!0,v.renderBufferDirect(W,O,X,B,y,lt),B.side=yn,B.needsUpdate=!0,v.renderBufferDirect(W,O,X,B,y,lt),B.side=Oe):v.renderBufferDirect(W,O,X,B,y,lt),y.onAfterRender(v,O,W,X,B,lt)}function Wi(y,O,W){O.isScene!==!0&&(O=at);const X=Ct.get(y),B=d.state.lights,lt=d.state.shadowsArray,mt=B.state.version,Tt=Et.getParameters(y,B.state,lt,O,W),bt=Et.getProgramCacheKey(Tt);let Ft=X.programs;X.environment=y.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(y.isMeshStandardMaterial?k:x).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Ft===void 0&&(y.addEventListener("dispose",Mt),Ft=new Map,X.programs=Ft);let Bt=Ft.get(bt);if(Bt!==void 0){if(X.currentProgram===Bt&&X.lightsStateVersion===mt)return Io(y,Tt),Bt}else Tt.uniforms=Et.getUniforms(y),y.onBeforeCompile(Tt,v),Bt=Et.acquireProgram(Tt,bt),Ft.set(bt,Bt),X.uniforms=Tt.uniforms;const wt=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(wt.clippingPlanes=ot.uniform),Io(y,Tt),X.needsLights=Wc(y),X.lightsStateVersion=mt,X.needsLights&&(wt.ambientLightColor.value=B.state.ambient,wt.lightProbe.value=B.state.probe,wt.directionalLights.value=B.state.directional,wt.directionalLightShadows.value=B.state.directionalShadow,wt.spotLights.value=B.state.spot,wt.spotLightShadows.value=B.state.spotShadow,wt.rectAreaLights.value=B.state.rectArea,wt.ltc_1.value=B.state.rectAreaLTC1,wt.ltc_2.value=B.state.rectAreaLTC2,wt.pointLights.value=B.state.point,wt.pointLightShadows.value=B.state.pointShadow,wt.hemisphereLights.value=B.state.hemi,wt.directionalShadowMap.value=B.state.directionalShadowMap,wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,wt.spotShadowMap.value=B.state.spotShadowMap,wt.spotLightMatrix.value=B.state.spotLightMatrix,wt.spotLightMap.value=B.state.spotLightMap,wt.pointShadowMap.value=B.state.pointShadowMap,wt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Bt,X.uniformsList=null,Bt}function Uo(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=Tr.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Io(y,O){const W=Ct.get(y);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Gc(y,O,W,X,B){O.isScene!==!0&&(O=at),w.resetTextureUnits();const lt=O.fog,mt=X.isMeshStandardMaterial?O.environment:null,Tt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:vi,bt=(X.isMeshStandardMaterial?k:x).get(X.envMap||mt),Ft=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Bt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),wt=!!W.morphAttributes.position,qt=!!W.morphAttributes.normal,ne=!!W.morphAttributes.color;let ie=Sn;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ie=v.toneMapping);const Te=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=Te!==void 0?Te.length:0,At=Ct.get(X),je=d.state.lights;if(rt===!0&&(ft===!0||y!==M)){const Ce=y===M&&X.id===E;ot.setState(X,y,Ce)}let $t=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==je.state.version||At.outputColorSpace!==Tt||B.isBatchedMesh&&At.batching===!1||!B.isBatchedMesh&&At.batching===!0||B.isBatchedMesh&&At.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&At.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&At.instancing===!1||!B.isInstancedMesh&&At.instancing===!0||B.isSkinnedMesh&&At.skinning===!1||!B.isSkinnedMesh&&At.skinning===!0||B.isInstancedMesh&&At.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&At.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&At.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&At.instancingMorph===!1&&B.morphTexture!==null||At.envMap!==bt||X.fog===!0&&At.fog!==lt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==ot.numPlanes||At.numIntersection!==ot.numIntersection)||At.vertexAlphas!==Ft||At.vertexTangents!==Bt||At.morphTargets!==wt||At.morphNormals!==qt||At.morphColors!==ne||At.toneMapping!==ie||At.morphTargetsCount!==Yt)&&($t=!0):($t=!0,At.__version=X.version);let Ue=At.currentProgram;$t===!0&&(Ue=Wi(X,O,B));let Wn=!1,be=!1,bi=!1;const re=Ue.getUniforms(),ke=At.uniforms;if(Rt.useProgram(Ue.program)&&(Wn=!0,be=!0,bi=!0),X.id!==E&&(E=X.id,be=!0),Wn||M!==y){Rt.buffers.depth.getReversed()?(ut.copy(y.projectionMatrix),eu(ut),nu(ut),re.setValue(I,"projectionMatrix",ut)):re.setValue(I,"projectionMatrix",y.projectionMatrix),re.setValue(I,"viewMatrix",y.matrixWorldInverse);const cn=re.map.cameraPosition;cn!==void 0&&cn.setValue(I,yt.setFromMatrixPosition(y.matrixWorld)),kt.logarithmicDepthBuffer&&re.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&re.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,be=!0,bi=!0)}if(B.isSkinnedMesh){re.setOptional(I,B,"bindMatrix"),re.setOptional(I,B,"bindMatrixInverse");const Ce=B.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),re.setValue(I,"boneTexture",Ce.boneTexture,w))}B.isBatchedMesh&&(re.setOptional(I,B,"batchingTexture"),re.setValue(I,"batchingTexture",B._matricesTexture,w),re.setOptional(I,B,"batchingIdTexture"),re.setValue(I,"batchingIdTexture",B._indirectTexture,w),re.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&re.setValue(I,"batchingColorTexture",B._colorsTexture,w));const wi=W.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&Dt.update(B,W,Ue),(be||At.receiveShadow!==B.receiveShadow)&&(At.receiveShadow=B.receiveShadow,re.setValue(I,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ke.envMap.value=bt,ke.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(ke.envMapIntensity.value=O.environmentIntensity),be&&(re.setValue(I,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&Vc(ke,bi),lt&&X.fog===!0&&pt.refreshFogUniforms(ke,lt),pt.refreshMaterialUniforms(ke,X,G,Q,d.state.transmissionRenderTarget[y.id]),Tr.upload(I,Uo(At),ke,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Tr.upload(I,Uo(At),ke,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&re.setValue(I,"center",B.center),re.setValue(I,"modelViewMatrix",B.modelViewMatrix),re.setValue(I,"normalMatrix",B.normalMatrix),re.setValue(I,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ce=X.uniformsGroups;for(let cn=0,ln=Ce.length;cn<ln;cn++){const No=Ce[cn];b.update(No,Ue),b.bind(No,Ue)}}return Ue}function Vc(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Wc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,O,W){Ct.get(y.texture).__webglTexture=O,Ct.get(y.depthTexture).__webglTexture=W;const X=Ct.get(y);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,O){const W=Ct.get(y);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,W=0){P=y,A=O,C=W;let X=!0,B=null,lt=!1,mt=!1;if(y){const bt=Ct.get(y);if(bt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(bt.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(bt.__hasExternalTextures)w.rebindTextures(y,Ct.get(y.texture).__webglTexture,Ct.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const wt=y.depthTexture;if(bt.__boundDepthTexture!==wt){if(wt!==null&&Ct.has(wt)&&(y.width!==wt.image.width||y.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const Ft=y.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(mt=!0);const Bt=Ct.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Bt[O])?B=Bt[O][W]:B=Bt[O],lt=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?B=Ct.get(y).__webglMultisampledFramebuffer:Array.isArray(Bt)?B=Bt[W]:B=Bt,L.copy(y.viewport),V.copy(y.scissor),N=y.scissorTest}else L.copy(ht).multiplyScalar(G).floor(),V.copy(gt).multiplyScalar(G).floor(),N=It;if(Rt.bindFramebuffer(I.FRAMEBUFFER,B)&&X&&Rt.drawBuffers(y,B),Rt.viewport(L),Rt.scissor(V),Rt.setScissorTest(N),lt){const bt=Ct.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,W)}else if(mt){const bt=Ct.get(y.texture),Ft=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,W||0,Ft)}E=-1},this.readRenderTargetPixels=function(y,O,W,X,B,lt,mt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Ct.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&mt!==void 0&&(Tt=Tt[mt]),Tt){Rt.bindFramebuffer(I.FRAMEBUFFER,Tt);try{const bt=y.texture,Ft=bt.format,Bt=bt.type;if(!kt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-X&&W>=0&&W<=y.height-B&&I.readPixels(O,W,X,B,Ot.convert(Ft),Ot.convert(Bt),lt)}finally{const bt=P!==null?Ct.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(I.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(y,O,W,X,B,lt,mt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Ct.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&mt!==void 0&&(Tt=Tt[mt]),Tt){const bt=y.texture,Ft=bt.format,Bt=bt.type;if(!kt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=y.width-X&&W>=0&&W<=y.height-B){Rt.bindFramebuffer(I.FRAMEBUFFER,Tt);const wt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.bufferData(I.PIXEL_PACK_BUFFER,lt.byteLength,I.STREAM_READ),I.readPixels(O,W,X,B,Ot.convert(Ft),Ot.convert(Bt),0);const qt=P!==null?Ct.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(I.FRAMEBUFFER,qt);const ne=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await tu(I,ne,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,lt),I.deleteBuffer(wt),I.deleteSync(ne),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,O=null,W=0){y.isTexture!==!0&&(Ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(y.image.width*X),lt=Math.floor(y.image.height*X),mt=O!==null?O.x:0,Tt=O!==null?O.y:0;w.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,mt,Tt,B,lt),Rt.unbindTexture()},this.copyTextureToTexture=function(y,O,W=null,X=null,B=0){y.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,y=arguments[1],O=arguments[2],B=arguments[3]||0,W=null);let lt,mt,Tt,bt,Ft,Bt,wt,qt,ne;const ie=y.isCompressedTexture?y.mipmaps[B]:y.image;W!==null?(lt=W.max.x-W.min.x,mt=W.max.y-W.min.y,Tt=W.isBox3?W.max.z-W.min.z:1,bt=W.min.x,Ft=W.min.y,Bt=W.isBox3?W.min.z:0):(lt=ie.width,mt=ie.height,Tt=ie.depth||1,bt=0,Ft=0,Bt=0),X!==null?(wt=X.x,qt=X.y,ne=X.z):(wt=0,qt=0,ne=0);const Te=Ot.convert(O.format),Yt=Ot.convert(O.type);let At;O.isData3DTexture?(w.setTexture3D(O,0),At=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),At=I.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),At=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const je=I.getParameter(I.UNPACK_ROW_LENGTH),$t=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ue=I.getParameter(I.UNPACK_SKIP_PIXELS),Wn=I.getParameter(I.UNPACK_SKIP_ROWS),be=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ie.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ie.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Bt);const bi=y.isDataArrayTexture||y.isData3DTexture,re=O.isDataArrayTexture||O.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const ke=Ct.get(y),wi=Ct.get(O),Ce=Ct.get(ke.__renderTarget),cn=Ct.get(wi.__renderTarget);Rt.bindFramebuffer(I.READ_FRAMEBUFFER,Ce.__webglFramebuffer),Rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let ln=0;ln<Tt;ln++)bi&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.get(y).__webglTexture,B,Bt+ln),y.isDepthTexture?(re&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.get(O).__webglTexture,B,ne+ln),I.blitFramebuffer(bt,Ft,lt,mt,wt,qt,lt,mt,I.DEPTH_BUFFER_BIT,I.NEAREST)):re?I.copyTexSubImage3D(At,B,wt,qt,ne+ln,bt,Ft,lt,mt):I.copyTexSubImage2D(At,B,wt,qt,ne+ln,bt,Ft,lt,mt);Rt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else re?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(At,B,wt,qt,ne,lt,mt,Tt,Te,Yt,ie.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(At,B,wt,qt,ne,lt,mt,Tt,Te,ie.data):I.texSubImage3D(At,B,wt,qt,ne,lt,mt,Tt,Te,Yt,ie):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,wt,qt,lt,mt,Te,Yt,ie.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,wt,qt,ie.width,ie.height,Te,ie.data):I.texSubImage2D(I.TEXTURE_2D,B,wt,qt,lt,mt,Te,Yt,ie);I.pixelStorei(I.UNPACK_ROW_LENGTH,je),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$t),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,be),B===0&&O.generateMipmaps&&I.generateMipmap(At),Rt.unbindTexture()},this.copyTextureToTexture3D=function(y,O,W=null,X=null,B=0){return y.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,y=arguments[2],O=arguments[3],B=arguments[4]||0),Ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,O,W,X,B)},this.initRenderTarget=function(y){Ct.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),Rt.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,Rt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class xo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new xo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class dm extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pm extends _e{constructor(t=null,e=1,n=1,r,s,a,o,c,u=Re,h=Re,f,l){super(null,a,o,c,u,h,r,s,f,l),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ba extends de{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const si=new te,za=new te,fr=[],ka=new Gn,mm=new te,Li=new jt,Di=new yi;class Ha extends jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ba(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,mm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,si),ka.copy(t.boundingBox).applyMatrix4(si),this.boundingBox.union(ka)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,si),Di.copy(t.boundingSphere).applyMatrix4(si),this.boundingSphere.union(Di)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Li.geometry=this.geometry,Li.material=this.material,Li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(n),t.ray.intersectsSphere(Di)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,si),za.multiplyMatrices(n,si),Li.matrixWorld=za,Li.raycast(t,fr);for(let a=0,o=fr.length;a<o;a++){const c=fr[a];c.instanceId=s,c.object=this,e.push(c)}fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ba(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new pm(new Float32Array(r*this.count),r,this.count,ho,We));const s=this.morphTexture.source.data.data;let a=0;for(let u=0;u<n.length;u++)a+=n[u];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Dc extends Ei{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ga=new te,eo=new _c,dr=new yi,pr=new U;class Uc extends pe{constructor(t=new me,e=new Dc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),dr.radius+=s,t.ray.intersectsSphere(dr)===!1)return;Ga.copy(r).invert(),eo.copy(t.ray).applyMatrix4(Ga);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,f=n.attributes.position;if(u!==null){const l=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=l,_=p;g<_;g++){const m=u.getX(g);pr.fromBufferAttribute(f,m),Va(pr,m,c,r,t,e,this)}}else{const l=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=l,_=p;g<_;g++)pr.fromBufferAttribute(f,g),Va(pr,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Va(i,t,e,n,r,s,a){const o=eo.distanceSqToPoint(i);if(o<e){const c=new U;eo.closestPointToPoint(i,c),c.applyMatrix4(n);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Mo extends _e{constructor(t,e,n,r,s,a,o,c,u){super(t,e,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ye{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=n[r]-a,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const h=n[r],l=n[r+1]-h,p=(a-h)/l;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new St:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,r=[],s=[],a=[],o=new U,c=new te;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new U)}s[0]=new U,a[0]=new U;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),l=Math.abs(r[0].z);h<=u&&(u=h,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),l<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(fe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(fe(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class So extends Ye{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new St){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),l=c-this.aX,p=u-this.aY;c=l*h-p*f+this.aX,u=l*f+p*h+this.aY}return n.set(c,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class gm extends So{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yo(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,u){r(a,o,u*(o-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,u,h,f){let l=(a-s)/u-(o-s)/(u+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+f)+(c-o)/f;l*=h,p*=h,r(a,o,l,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const mr=new U,hs=new yo,fs=new yo,ds=new yo;class _m extends Ye{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new U){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let u,h;this.closed||o>0?u=r[(o-1)%s]:(mr.subVectors(r[0],r[1]).add(r[0]),u=mr);const f=r[o%s],l=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(mr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=mr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(l),p),m=Math.pow(l.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),hs.initNonuniformCatmullRom(u.x,f.x,l.x,h.x,g,_,m),fs.initNonuniformCatmullRom(u.y,f.y,l.y,h.y,g,_,m),ds.initNonuniformCatmullRom(u.z,f.z,l.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(hs.initCatmullRom(u.x,f.x,l.x,h.x,this.tension),fs.initCatmullRom(u.y,f.y,l.y,h.y,this.tension),ds.initCatmullRom(u.z,f.z,l.z,h.z,this.tension));return n.set(hs.calc(c),fs.calc(c),ds.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new U().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wa(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function vm(i,t){const e=1-i;return e*e*t}function xm(i,t){return 2*(1-i)*i*t}function Mm(i,t){return i*i*t}function Oi(i,t,e,n){return vm(i,t)+xm(i,e)+Mm(i,n)}function Sm(i,t){const e=1-i;return e*e*e*t}function ym(i,t){const e=1-i;return 3*e*e*i*t}function Em(i,t){return 3*(1-i)*i*i*t}function Tm(i,t){return i*i*i*t}function Bi(i,t,e,n,r){return Sm(i,t)+ym(i,e)+Em(i,n)+Tm(i,r)}class Ic extends Ye{constructor(t=new St,e=new St,n=new St,r=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new St){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Bi(t,r.x,s.x,a.x,o.x),Bi(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bm extends Ye{constructor(t=new U,e=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new U){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Bi(t,r.x,s.x,a.x,o.x),Bi(t,r.y,s.y,a.y,o.y),Bi(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nc extends Ye{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wm extends Ye{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fc extends Ye{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Oi(t,r.x,s.x,a.x),Oi(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Am extends Ye{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Oi(t,r.x,s.x,a.x),Oi(t,r.y,s.y,a.y),Oi(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oc extends Ye{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],u=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Wa(o,c.x,u.x,h.x,f.x),Wa(o,c.y,u.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new St().fromArray(r))}return this}}var Xa=Object.freeze({__proto__:null,ArcCurve:gm,CatmullRomCurve3:_m,CubicBezierCurve:Ic,CubicBezierCurve3:bm,EllipseCurve:So,LineCurve:Nc,LineCurve3:wm,QuadraticBezierCurve:Fc,QuadraticBezierCurve3:Am,SplineCurve:Oc});class Rm extends Ye{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),u=c===0?0:1-a/c;return o.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let u=0;u<c.length;u++){const h=c[u];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Xa[r.type]().fromJSON(r))}return this}}class Cm extends Rm{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Nc(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Fc(this.currentPoint.clone(),new St(t,e),new St(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new Ic(this.currentPoint.clone(),new St(t,e),new St(n,r),new St(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Oc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+u,e+h,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const u=new So(t,e,n,r,s,a,o,c);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Eo extends me{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=fe(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],u=[],h=1/e,f=new U,l=new St,p=new U,g=new U,_=new U;let m=0,d=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,d=t[S+1].y-t[S].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,d=t[S+1].y-t[S].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let S=0;S<=e;S++){const T=n+S*h*r,v=Math.sin(T),D=Math.cos(T);for(let A=0;A<=t.length-1;A++){f.x=t[A].x*v,f.y=t[A].y,f.z=t[A].x*D,a.push(f.x,f.y,f.z),l.x=S/e,l.y=A/(t.length-1),o.push(l.x,l.y);const C=c[3*A+0]*v,P=c[3*A+1],E=c[3*A+0]*D;u.push(C,P,E)}}for(let S=0;S<e;S++)for(let T=0;T<t.length-1;T++){const v=T+S*t.length,D=v,A=v+t.length,C=v+t.length+1,P=v+1;s.push(D,A,P),s.push(C,P,A)}this.setIndex(s),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.points,t.segments,t.phiStart,t.phiLength)}}class To extends Eo{constructor(t=1,e=1,n=4,r=8){const s=new Cm;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new To(t.radius,t.length,t.capSegments,t.radialSegments)}}class En extends me{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],l=[],p=[];let g=0;const _=[],m=n/2;let d=0;S(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(p,2));function S(){const v=new U,D=new U;let A=0;const C=(e-t)/n;for(let P=0;P<=s;P++){const E=[],M=P/s,L=M*(e-t)+t;for(let V=0;V<=r;V++){const N=V/r,F=N*c+o,$=Math.sin(F),z=Math.cos(F);D.x=L*$,D.y=-M*n+m,D.z=L*z,f.push(D.x,D.y,D.z),v.set($,C,z).normalize(),l.push(v.x,v.y,v.z),p.push(N,1-M),E.push(g++)}_.push(E)}for(let P=0;P<r;P++)for(let E=0;E<s;E++){const M=_[E][P],L=_[E+1][P],V=_[E+1][P+1],N=_[E][P+1];(t>0||E!==0)&&(h.push(M,L,N),A+=3),(e>0||E!==s-1)&&(h.push(L,V,N),A+=3)}u.addGroup(d,A,0),d+=A}function T(v){const D=g,A=new St,C=new U;let P=0;const E=v===!0?t:e,M=v===!0?1:-1;for(let V=1;V<=r;V++)f.push(0,m*M,0),l.push(0,M,0),p.push(.5,.5),g++;const L=g;for(let V=0;V<=r;V++){const F=V/r*c+o,$=Math.cos(F),z=Math.sin(F);C.x=E*z,C.y=m*M,C.z=E*$,f.push(C.x,C.y,C.z),l.push(0,M,0),A.x=$*.5+.5,A.y=z*.5*M+.5,p.push(A.x,A.y),g++}for(let V=0;V<r;V++){const N=D+V,F=L+V;v===!0?h.push(F,F+1,N):h.push(F+1,F,N),P+=3}u.addGroup(d,P,v===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rr extends En{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Rr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bo extends me{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),u(n),h(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const T=new U,v=new U,D=new U;for(let A=0;A<e.length;A+=3)p(e[A+0],T),p(e[A+1],v),p(e[A+2],D),c(T,v,D,S)}function c(S,T,v,D){const A=D+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const E=S.clone().lerp(v,P/A),M=T.clone().lerp(v,P/A),L=A-P;for(let V=0;V<=L;V++)V===0&&P===A?C[P][V]=E:C[P][V]=E.clone().lerp(M,V/L)}for(let P=0;P<A;P++)for(let E=0;E<2*(A-P)-1;E++){const M=Math.floor(E/2);E%2===0?(l(C[P][M+1]),l(C[P+1][M]),l(C[P][M])):(l(C[P][M+1]),l(C[P+1][M+1]),l(C[P+1][M]))}}function u(S){const T=new U;for(let v=0;v<s.length;v+=3)T.x=s[v+0],T.y=s[v+1],T.z=s[v+2],T.normalize().multiplyScalar(S),s[v+0]=T.x,s[v+1]=T.y,s[v+2]=T.z}function h(){const S=new U;for(let T=0;T<s.length;T+=3){S.x=s[T+0],S.y=s[T+1],S.z=s[T+2];const v=m(S)/2/Math.PI+.5,D=d(S)/Math.PI+.5;a.push(v,1-D)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){const T=a[S+0],v=a[S+2],D=a[S+4],A=Math.max(T,v,D),C=Math.min(T,v,D);A>.9&&C<.1&&(T<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),D<.2&&(a[S+4]+=1))}}function l(S){s.push(S.x,S.y,S.z)}function p(S,T){const v=S*3;T.x=t[v+0],T.y=t[v+1],T.z=t[v+2]}function g(){const S=new U,T=new U,v=new U,D=new U,A=new St,C=new St,P=new St;for(let E=0,M=0;E<s.length;E+=9,M+=6){S.set(s[E+0],s[E+1],s[E+2]),T.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),A.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),D.copy(S).add(T).add(v).divideScalar(3);const L=m(D);_(A,M+0,S,L),_(C,M+2,T,L),_(P,M+4,v,L)}}function _(S,T,v,D){D<0&&S.x===1&&(a[T]=S.x-1),v.x===0&&v.z===0&&(a[T]=D/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bo(t.vertices,t.indices,t.radius,t.details)}}class Cr extends bo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cr(t.radius,t.detail)}}class Nr extends me{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const h=[],f=new U,l=new U,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const S=[],T=d/n;let v=0;d===0&&a===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const A=D/e;f.x=-t*Math.cos(r+A*s)*Math.sin(a+T*o),f.y=t*Math.cos(a+T*o),f.z=t*Math.sin(r+A*s)*Math.sin(a+T*o),g.push(f.x,f.y,f.z),l.copy(f).normalize(),_.push(l.x,l.y,l.z),m.push(A+v,1-T),S.push(u++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){const T=h[d][S+1],v=h[d][S],D=h[d+1][S],A=h[d+1][S+1];(d!==0||a>0)&&p.push(T,v,A),(d!==n-1||c<Math.PI)&&p.push(v,D,A)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _n extends Ei{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const qa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Pm{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){const f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,l=u.length;f<l;f+=2){const p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Lm=new Pm;class wo{constructor(t){this.manager=t!==void 0?t:Lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}wo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Dm extends wo{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=qa.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Hi("img");function c(){h(),qa.add(t,this),e&&e(this),s.manager.itemEnd(t)}function u(f){h(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class Um extends wo{constructor(t){super(t)}load(t,e,n,r){const s=new _e,a=new Dm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Bc extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Im extends Bc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ps=new te,Ya=new U,$a=new U;class Nm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ya.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ya),$a.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($a),e.updateMatrixWorld(),ps.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ps),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ps)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fm extends Nm{constructor(){super(new wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Om extends Bc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Fm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);function Bm(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new me;let u=0;for(let h=0;h<i.length;++h){const f=i[h];let l=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),l++}if(l!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,p,h),u+=p}}if(e){let h=0;const f=[];for(let l=0;l<i.length;++l){const p=i[l].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=i[l].attributes.position.count}c.setIndex(f)}for(const h in s){const f=ja(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let l=0;l<f;++l){const p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][l]);const g=ja(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function ja(i){let t,e,n,r=-1,s=0;for(let u=0;u<i.length;++u){const h=i[u];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const a=new t(s),o=new de(a,e,n);let c=0;for(let u=0;u<i.length;++u){const h=i[u];if(h.isInterleavedBufferAttribute){const f=c/e;for(let l=0,p=h.count;l<p;l++)for(let g=0;g<e;g++){const _=h.getComponent(l,g);o.setComponent(l+f,g,_)}}else a.set(h.array,c);c+=h.count*e}return r!==void 0&&(o.gpuType=r),o}const gr={ski:{knee:.75,lean:.42,arm:.55,elbow:-.7,spread:.18,head:.32},crouch:{knee:1.45,lean:.85,arm:.35,elbow:-1.1,spread:.12,head:.7},jump:{knee:.25,lean:.15,arm:2.5,elbow:-.3,spread:.55,head:.1},tuck:{knee:1.7,lean:.95,arm:1.25,elbow:-1.7,spread:.02,head:.75},land:{knee:1.55,lean:.55,arm:.95,elbow:-.6,spread:.7,head:.45},crash:{knee:.6,lean:-.2,arm:2.2,elbow:-.2,spread:1.25,head:-.3},cheer:{knee:.15,lean:-.05,arm:2.95,elbow:-.15,spread:.45,head:-.15}};function He(i,t={}){return new _n({color:i,flatShading:!0,...t})}function zm(){const i={jacket:He(16731453),jacket2:He(16763196),pants:He(2306923),skin:He(15909787),helmet:He(3127551),goggle:He(16765773,{emissive:8014848}),dark:He(1909811),ski:He(1429926),pole:He(14673646),bib:He(16777215)},t=new Me,e=new Me;t.add(e);const n=new Me;e.add(n);const r=(F,$,z,Q)=>new jt(new Vn(F,$,z),Q),s=(F,$,z)=>new jt(new To(F,$,2,6),z),a=r(.44,.2,.28,i.pants);n.add(a);const o=new Me;n.add(o);const c=r(.5,.58,.32,i.jacket);c.position.y=.36,o.add(c);const u=r(.52,.1,.34,i.jacket2);u.position.y=.28,o.add(u);const h=r(.3,.26,.02,i.bib);h.position.set(0,.42,-.17),o.add(h);const f=r(.36,.1,.28,i.jacket2);f.position.y=.68,o.add(f);const l=new Me;l.position.y=.72,o.add(l);const p=new jt(new Cr(.19,0),i.skin);p.position.y=.17,l.add(p);const g=new jt(new Nr(.215,7,5,0,Math.PI*2,0,Math.PI*.55),i.helmet);g.position.y=.2,l.add(g);const _=r(.36,.1,.08,i.goggle);_.position.set(0,.2,-.17),l.add(_);const m=r(.42,.05,.36,i.dark);m.position.set(0,.2,0),l.add(m);function d(F){const $=new Me;$.position.set(.31*F,.6,0),o.add($);const z=s(.075,.26,i.jacket);z.position.y=-.17,$.add(z);const Q=new Me;Q.position.y=-.34,$.add(Q);const G=s(.065,.22,i.jacket);G.position.y=-.14,Q.add(G);const et=new jt(new Cr(.085,0),i.dark);et.position.y=-.3,Q.add(et);const ct=new jt(new En(.018,.018,1.25,4),i.pole);ct.position.set(0,-.3,.35),ct.rotation.x=1.25,Q.add(ct);const ht=new jt(new En(.07,.07,.02,6),i.dark);return ht.position.set(0,-.48,.85),ht.rotation.x=1.25,Q.add(ht),{sh:$,el:Q}}function S(F){const $=new Me;$.position.set(.13*F,-.05,0),n.add($);const z=s(.1,.27,i.pants);z.position.y=-.22,$.add(z);const Q=new Me;Q.position.y=-.45,$.add(Q);const G=s(.09,.27,i.pants);G.position.y=-.2,Q.add(G);const et=new Me;et.position.y=-.43,Q.add(et);const ct=r(.16,.16,.3,i.jacket2);ct.position.set(0,-.02,-.03),et.add(ct);const ht=r(.13,.04,1.7,i.ski);ht.position.set(0,-.12,-.12),et.add(ht);const gt=r(.13,.04,.22,i.ski);return gt.position.set(0,-.08,-1.02),gt.rotation.x=.45,et.add(gt),{hp:$,kn:Q,an:et}}const T={arm:[d(-1),d(1)],leg:[S(-1),S(1)]};t.traverse(F=>{F.isMesh&&(F.castShadow=!1)});const v={...gr.ski};let D="ski",A=0,C=0,P=0;const E={v:1,vel:0};function M(F){gr[F]&&(D=F)}function L(F){E.vel+=F}function V(F,$={}){A+=F;const z=gr[D],Q=1-Math.exp(-F*(D==="crash"?6:11));for(const gt in z)v[gt]+=(z[gt]-v[gt])*Q;C+=(($.steer||0)-C)*(1-Math.exp(-F*8)),E.vel+=(1-E.v)*180*F,E.vel*=Math.exp(-F*12),E.v+=E.vel*F;const G=In.clamp(E.v,.6,1.4);e.scale.set(1/Math.sqrt(G),G,1/Math.sqrt(G));const et=v.knee/2,ct=.45,ht=D==="ski"?Math.sin(A*6)*.04:0;n.position.y=.16+2*ct*Math.cos(et)+.08,n.position.z=0,o.rotation.x=-v.lean,o.rotation.z=-C*.15,l.rotation.x=v.head*.8;for(let gt=0;gt<2;gt++){const It=gt?1:-1,j=T.leg[gt];j.hp.rotation.x=et+ht*It,j.kn.rotation.x=-2*et,j.an.rotation.x=et-ht*It,j.hp.rotation.z=(D==="crash"?v.spread*.35:.02)*It;const rt=T.arm[gt];let ft=v.arm;D==="cheer"&&(ft+=Math.sin(A*9+gt*1.7)*.25),D==="crash"&&(ft+=Math.sin(A*17+gt*2)*.8),rt.sh.rotation.x=ft,rt.sh.rotation.z=v.spread*It+(D==="ski"?Math.sin(A*6+gt*Math.PI)*.05:0),rt.el.rotation.x=-v.elbow}D==="crash"?(P+=F*9*Math.max(0,1-P/9),e.rotation.set(-P*.9,P*.4,P*.7)):(P=0,e.rotation.set(0,-C*.25,-C*.32))}function N(){Object.assign(v,gr.ski),D="ski",P=0,e.rotation.set(0,0,0),E.v=1,E.vel=0}return{root:t,setPose:M,kick:L,update:V,reset:N,get pose(){return D}}}function zc(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.45,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new Mo(i);return n.colorSpace=ge,n}const km=`
attribute float size; attribute float alpha; attribute vec3 color;
varying float vA; varying vec3 vC; uniform float scale;
void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }`,Hm=`
uniform sampler2D map; varying float vA; varying vec3 vC;
void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); if (gl_FragColor.a < 0.02) discard; }`;function Gm(i=500){const t=new me,e=new Float32Array(i*3),n=new Float32Array(i*3),r=new Float32Array(i),s=new Float32Array(i);t.setAttribute("position",new de(e,3).setUsage(Bn)),t.setAttribute("color",new de(n,3).setUsage(Bn)),t.setAttribute("size",new de(r,1).setUsage(Bn)),t.setAttribute("alpha",new de(s,1).setUsage(Bn));const a=new qe({uniforms:{map:{value:zc()},scale:{value:300}},vertexShader:km,fragmentShader:Hm,transparent:!0,depthWrite:!1}),o=new Uc(t,a);o.frustumCulled=!1;const c=[];for(let _=0;_<i;_++)c.push({life:0,max:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,g:0,drag:0,s:1,r:1,gg:1,b:1,world:1,spin:0});let u=0,h=1;const f=new Ut;function l(_){if(Math.random()>h&&!_.force)return;const m=c[u];u=(u+1)%i,m.life=m.max=_.life||.8,m.x=_.x,m.y=_.y,m.z=_.z,m.vx=_.vx||0,m.vy=_.vy||0,m.vz=_.vz||0,m.g=_.g==null?9:_.g,m.drag=_.drag==null?1.5:_.drag,m.s=_.size||.35,f.set(_.color==null?16777215:_.color),m.r=f.r,m.gg=f.g,m.b=f.b,m.world=_.world==null?1:_.world,m.spin=_.spin||0}function p(_,m,d,S,T={}){for(let v=0;v<S;v++){const D=Math.random()*Math.PI*2,A=(T.speed||5)*(.4+Math.random()*.8);l({x:_+(Math.random()-.5)*(T.spread||.6),y:m+Math.random()*.2,z:d+(Math.random()-.5)*(T.spread||.6),vx:Math.cos(D)*A,vz:Math.sin(D)*A,vy:(T.up||4)*(.5+Math.random()),life:(T.life||.9)*(.6+Math.random()*.6),size:(T.size||.45)*(.6+Math.random()*.8),color:T.colors?T.colors[Math.random()*T.colors.length|0]:T.color,g:T.g,drag:T.drag,world:T.world,force:T.force})}}function g(_,m){for(let d=0;d<i;d++){const S=c[d];if(S.life>0){S.life-=_;const v=Math.exp(-S.drag*_);S.vx*=v,S.vz*=v,S.vy=S.vy*v-S.g*_,S.x+=S.vx*_,S.y+=S.vy*_,S.z+=(S.vz+m*S.world)*_,S.y<.03&&S.g>0&&(S.y=.03,S.vy*=-.2,S.vx*=.6,S.vz*=.6),S.spin&&(S.x+=Math.sin(S.life*12+d)*S.spin*_)}const T=Math.max(0,S.life/S.max);e[d*3]=S.x,e[d*3+1]=S.life>0?S.y:-999,e[d*3+2]=S.z,n[d*3]=S.r,n[d*3+1]=S.gg,n[d*3+2]=S.b,r[d]=S.s*(.6+.6*(1-T)),s[d]=Math.min(1,T*1.6)}for(const d of["position","color","size","alpha"])t.attributes[d].needsUpdate=!0}return{points:o,emit:l,burst:p,update:g,setBudget(_){h=_},setScale(_){a.uniforms.scale.value=_}}}function Vm(i=900){const t=new me,e=new Float32Array(i*3),n=new Float32Array(i);for(let c=0;c<i;c++)e[c*3]=(Math.random()-.5)*50,e[c*3+1]=Math.random()*22,e[c*3+2]=-Math.random()*70+10,n[c]=Math.random();t.setAttribute("position",new de(e,3).setUsage(Bn));const r=new Dc({size:.16,map:zc(),transparent:!0,depthWrite:!1,opacity:.9,color:16777215}),s=new Uc(t,r);s.frustumCulled=!1;let a=0;function o(c,u,h){a+=c;const f=t.drawRange.count===1/0?i:t.drawRange.count;for(let l=0;l<f;l++){const p=n[l];e[l*3+1]-=(1.2+p*1.6)*c,e[l*3]+=Math.sin(a*(.6+p)+p*20)*.6*c,e[l*3+2]+=u*.9*c,e[l*3+1]<0&&(e[l*3+1]+=22),e[l*3+2]>12&&(e[l*3+2]-=72);const g=e[l*3]-h;g>25?e[l*3]-=50:g<-25&&(e[l*3]+=50)}t.attributes.position.needsUpdate=!0}return{points:s,update:o,setCount(c){t.setDrawRange(0,Math.min(i,c))}}}const en=[-5,0,5],no=3.4,gn=5,vn=1.25,Wm=1.85,Xm=-72,_r=13,qm=9,oi=10.5;function br(i,t){const e=new Ut(t),n=i.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r[s*3]=e.r,r[s*3+1]=e.g,r[s*3+2]=e.b;return i.setAttribute("color",new de(r,3)),i}function Ym(){const i=[br(new En(.18,.25,1.2,5).translate(0,.6,0),8014634)];return[[1.7,2,1.4],[1.35,1.8,2.5],[.95,1.6,3.5]].forEach(([e,n,r],s)=>{i.push(br(new Rr(e,n,7).translate(0,r,0),s%2?2062925:2788439)),i.push(br(new Rr(e*.55,n*.42,7).translate(0,r+n*.3,0),16054527))}),Bm(i.map(e=>e.toNonIndexed()))}function $m(){const i=no/2,t=vn,e=[-i,0,0,i,0,0,i,t,-5,-i,0,0,i,t,-5,-i,t,-5,-i,0,-5,i,t,-5,i,0,-5,-i,0,-5,-i,t,-5,i,t,-5,i,0,0,i,0,-5,i,t,-5,-i,0,0,-i,t,-5,-i,0,-5],n=new me;n.setAttribute("position",new se(e,3));const r=[],s=new Ut(15333119),a=new Ut(3108342),o=new Ut(5082623);for(let c=0;c<18;c++){const u=c<6?s:c<12?a:o;r.push(u.r,u.g,u.b)}return n.setAttribute("color",new se(r,3)),n.computeVertexNormals(),n}function ms(i,t,e,n,r,s,a=70){const o=[],c=[],u=_=>{const m=Math.sin(_*127.1+i*311.7)*43758.5453;return m-Math.floor(m)},h=[];for(let _=0;_<=a;_++){const m=_/a,d=(m-.5)*t,S=n+e*(.45+.35*Math.sin(m*7.1+i)+.2*Math.sin(m*17.3+i*2)+.25*(u(_)-.5));h.push([d,Math.max(n+2,S)])}const f=new Ut(r),l=new Ut(s),p=new Ut(16777215);for(let _=0;_<a;_++){const[m,d]=h[_],[S,T]=h[_+1],v=[[m,-6],[S,-6],[S,T],[m,-6],[S,T],[m,d]];for(const[D,A]of v){o.push(D,A,0);const C=(A+6)/(e+n+6),P=l.clone().lerp(f,Math.min(1,C*1.2)),E=In.smoothstep(A,n+e*.55,n+e*.75);P.lerp(p,E*.9),c.push(P.r,P.g,P.b)}}const g=new me;return g.setAttribute("position",new se(o,3)),g.setAttribute("color",new se(c,3)),new jt(g,new zn({vertexColors:!0,fog:!1}))}function jm(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,32);return e.addColorStop(0,"rgba(40,60,110,0.55)"),e.addColorStop(1,"rgba(40,60,110,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Mo(i)}function Jm(i){const t=document.createElement("canvas");t.width=1024,t.height=160;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,1024,0);n.addColorStop(0,"#ff4d6d"),n.addColorStop(.5,"#ffb703"),n.addColorStop(1,"#ff4d6d"),e.fillStyle=n,e.fillRect(0,0,1024,160);for(let s=0;s<1024;s+=64)e.fillStyle=s/64%2?"#111":"#fff",e.fillRect(s,0,64,18),e.fillStyle=s/64%2?"#fff":"#111",e.fillRect(s,142,64,18);e.font="700 96px Fredoka, 'Arial Rounded MT Bold', sans-serif",e.textAlign="center",e.textBaseline="middle",e.lineWidth=10,e.strokeStyle="#7a2e00",e.strokeText(i,512,84),e.fillStyle="#fff",e.fillText(i,512,84);const r=new Mo(t);return r.colorSpace=ge,r}function Zm(i,t,{quality:e}={}){const n=window.devicePixelRatio||1,r=new fm({antialias:n<1.5,powerPreference:"high-performance",alpha:!1});r.outputColorSpace=ge,r.setClearColor(12575743),i.appendChild(r.domElement),r.domElement.className="stage";const s=new dm,a=new Ut(14150911);s.fog=new xo(a,45,190);const o=new Le(60,1,.1,900),c=new jt(new Nr(700,24,12),new qe({side:Ee,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ut(4033535)},mid:{value:new Ut(10474239)},bot:{value:a},sun:{value:new U(.35,.32,-1).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; uniform vec3 sun; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.12 ? mix(mid, top, smoothstep(0.12, 0.7, h)) : mix(bot, mid, smoothstep(-0.02, 0.12, h));
      float s = max(0.0, dot(normalize(vP), sun)); c += vec3(1.0,0.93,0.75) * (pow(s, 600.0) * 1.2 + pow(s, 12.0) * 0.25);
      gl_FragColor = vec4(c, 1.0); }`}));s.add(c);const u=[ms(1.3,1500,120,10,9416928,12900595),ms(4.1,1100,80,2,6260420,11125738),ms(7.7,800,46,-2,4156072,10139874)],h=[-560,-430,-300],f=[.02,.06,.12];u.forEach((b,J)=>{b.position.set(0,-4,h[J]),b.renderOrder=-1,s.add(b)}),s.add(new Im(15398399,10467289,1.6));const l=new Om(16774108,1.6);l.position.set(8,14,6),s.add(l);const p=new Um,g=p.load("./textures/snow.webp");g.wrapS=g.wrapT=wr,g.repeat.set(10,50),g.colorSpace=ge,g.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());const _=new jt(new rn(240,320),new _n({map:g,color:16777215,emissive:5398906}));_.rotation.x=-Math.PI/2,_.position.z=-120,s.add(_);const m=g.clone();m.repeat.set(3,60),m.needsUpdate=!0;const d=new jt(new rn(oi*2,320),new _n({map:m,color:15660799,emissive:4873338}));d.rotation.x=-Math.PI/2,d.position.set(0,.01,-120),s.add(d);const S=Ym(),T=new _n({vertexColors:!0,flatShading:!0}),v=170,D=new Ha(S,T,v);D.instanceMatrix.setUsage(Bn),s.add(D);const A=[],C=(b,J)=>{const H=Math.random()<.5?-1:1;b.x=H*(oi+3+Math.pow(Math.random(),1.6)*60),b.z=J,b.s=.8+Math.random()*.9,b.r=Math.random()*6};for(let b=0;b<v;b++){const J={};C(J,20-Math.random()*260),A.push(J)}const P=40,E=br(new En(.06,.06,1.6,5).translate(0,.8,0),16777215),M=new Ha(E,new _n({vertexColors:!0}),P);M.instanceMatrix.setUsage(Bn);const L=[],V=new Ut;for(let b=0;b<P;b++)L.push(20-(b>>1)*13),M.setColorAt(b,V.set((b>>1)%2?16726876:3108342));s.add(M);const N=new te,F=new Si,$=new U,z=new U,Q=new U(0,1,0),G=$m(),et=new _n({vertexColors:!0,flatShading:!0}),ct=new me().setFromPoints([new U(0,0,0),new U(.9,-.3,0),new U(0,-.6,0)]),ht=en.map(b=>{const J=new Me;J.position.x=b,J.add(new jt(G,et));for(const H of[-1,1]){const Y=new jt(new En(.05,.05,2.2,5),new _n({color:16777215}));Y.position.set(H*(no/2+.15),1.1+vn,-gn),J.add(Y);const it=new jt(ct,new zn({color:16758531,side:Oe}));it.position.set(H*(no/2+.15),2.2+vn,-gn),it.rotation.y=H>0?Math.PI:0,J.add(it),J.userData.flags=(J.userData.flags||[]).concat(it)}return s.add(J),J.visible=!1,J}),gt=new jt(S,T);gt.visible=!1,s.add(gt);const It=new Me;It.visible=!1,s.add(It);{const b=new _n({color:3108342});for(const Y of[-1,1]){const it=new jt(new Vn(.6,6,.6),b);it.position.set(Y*9,3,0),It.add(it)}const J=Jm("FINISH");for(const Y of[0,Math.PI]){const it=new jt(new rn(18.6,2.9),new zn({map:J}));it.position.set(0,6.2,Y?-.05:.05),it.rotation.y=Y,It.add(it)}const H=p.load("./textures/crowd.webp");H.colorSpace=ge;for(const Y of[-1,1]){const it=new jt(new rn(10,5.6),new zn({map:H,transparent:!0,alphaTest:.1,side:Oe}));it.position.set(Y*15,2.8,2),it.rotation.y=Y*.5,It.add(it)}}const j=zm();s.add(j.root);const rt=new jt(new rn(1.8,2.6),new zn({map:jm(),transparent:!0,depthWrite:!1}));rt.rotation.x=-Math.PI/2,rt.position.y=.03,s.add(rt);const ft=Gm(520);s.add(ft.points);const ut=Vm(900);s.add(ut.points);const R={x:0,vx:0,y:0,vy:0,steer:0,boost:0,speed:0,skiing:!1,mode:"idle",rowZ:null,rowVisible:!1,rowLane:-1,rowDecided:!1,treeLane:-1,timeScale:1,tsTarget:1,trauma:0,fovKick:0,crashT:0,cerT:0,cerCb:null,t:0,landed:!1,airLane:-1},yt=[];let q=e||"high",at=0,st=0,Nt=0,I=!!e;function Zt(b){q=b;const J=b==="high"?1.75:b==="low"?1:.75;r.setPixelRatio(Math.min(n,J)),D.count=b==="high"?v:b==="low"?100:60,ut.setCount(b==="high"?900:b==="low"?350:150),ft.setBudget(b==="high"?1:b==="low"?.5:.3),Pt()}function Pt(){const b=i.clientWidth||window.innerWidth,J=i.clientHeight||window.innerHeight;r.setSize(b,J,!1),o.aspect=b/J,o.userData.baseFov=b/J<.8?72:60,o.updateProjectionMatrix(),ft.setScale(J*r.getPixelRatio()/(2*Math.tan(o.fov*Math.PI/360)))}window.addEventListener("resize",Pt),Zt(q);function kt(){R.rowZ=Xm,R.rowVisible=!0,R.rowDecided=!1,R.treeLane=-1,ht.forEach(b=>{b.visible=!0,b.scale.set(1,1,1)}),gt.visible=!1}function Rt(){R.rowVisible=!1,ht.forEach(b=>b.visible=!1)}function ee(b,J=1){R.mode="ramp",R.airLane=b,R.streak=J,ht.forEach((H,Y)=>{Y!==b&&(H.visible=!0)}),j.setPose("crouch")}function Ct(b){R.mode="crash",R.crashT=0,R.treeLane=b,ht[b].visible=!1,gt.visible=!0,gt.position.set(en[b]+(R.x-en[b])*.6,0,-1.2),gt.scale.setScalar(.01),j.setPose("crash"),j.kick(-4),R.trauma=1,ft.burst(R.x,.6,-.6,70,{speed:7,up:6,size:.6,life:1.2,colors:[16777215,15266815,14674687],force:!0}),ft.burst(R.x,2.2,-1,28,{speed:4,up:3,size:.32,life:1.4,colors:[2788439,2062925,8014634],g:6,force:!0})}function w(b){R.mode="ceremony",R.cerT=0,R.cerCb=b,Rt(),It.visible=!0,It.position.set(0,0,-17)}function x(){R.x=0,R.vx=0,R.y=0,R.vy=0,R.mode=R.skiing?"ski":"idle",R.rowZ=null,R.timeScale=1,R.tsTarget=1,R.trauma=0,It.visible=!1,gt.visible=!1,Rt(),j.reset(),yt.length=0}function k(b){R.skiing=!!b,b&&(R.mode==="idle"||R.mode==="crash"||R.mode==="ceremony")&&(R.mode="ski"),!b&&R.mode==="ski"&&(R.mode="idle")}function tt(){return yt.splice(0,yt.length)}const nt=new U;function Z(b,J,H){nt.set(b,J,H).project(o);const Y=i.clientWidth,it=i.clientHeight;return{x:(nt.x*.5+.5)*Y,y:(-nt.y*.5+.5)*it,vis:nt.z<1&&nt.z>-1}}function Et(){return Z(R.x,R.y+2.4,0)}function pt(b){R.t+=b;let J=0;(R.mode==="ski"||R.mode==="ramp"||R.mode==="air")&&(J=_r+qm*R.boost),R.mode==="crash"&&(J=0),R.mode==="ceremony"&&(J=Math.max(0,_r*(1-R.cerT/3)));const H=R.mode==="crash"?10:R.mode==="ceremony"?50:3.5;R.speed+=(J-R.speed)*Math.min(1,b*H),R.mode==="ceremony"&&(R.speed=J);const Y=R.speed*b;if(R.mode==="ski"){const K=R.steer*9;R.vx+=(K-R.vx)*Math.min(1,b*6),R.x=In.clamp(R.x+R.vx*b,-oi+1.2,oi-1.2),Math.abs(R.x)>=oi-1.21&&(R.vx*=.5)}else R.mode==="air"||R.mode==="ramp"?(R.vx*=Math.exp(-b*3),R.x+=R.vx*b,R.airLane>=0&&(R.x+=(en[R.airLane]-R.x)*Math.min(1,b*3))):R.vx*=Math.exp(-b*4);if(R.rowVisible&&R.rowZ!=null){if(R.rowZ+=Y,ht.forEach((K,Mt)=>{K.position.z=R.rowZ;for(const Wt of K.userData.flags)Wt.rotation.z=Math.sin(R.t*8+Mt)*.15}),!R.rowDecided&&R.rowZ>=0&&R.mode==="ski"){R.rowDecided=!0;let K=-1;en.forEach((Mt,Wt)=>{Math.abs(R.x-Mt)<Wm&&(K=Wt)}),yt.push(K>=0?{type:"hit",lane:K}:{type:"pending-miss"})}R.rowDecided&&R.rowZ>gn+4&&R.mode==="ski"&&(Rt(),R._pendingMiss&&(R._pendingMiss=!1,yt.push({type:"missed"}))),R.rowZ>40&&Rt()}if(R.treeLane>=0){gt.position.z=Math.min(gt.position.z+Y,.4);const K=gt.scale.x;gt.scale.setScalar(K+(1.25-K)*Math.min(1,b*14))}if(R.mode==="ramp"){const K=R.rowZ;R.y=In.clamp(K/gn,0,1)*vn,K>=gn&&(R.mode="air",R.vy=9.5,j.setPose("jump"),j.kick(1.2),ft.burst(R.x,vn,0,30,{speed:3,up:4,size:.4,life:.8,colors:[16777215,14741503]}),R.fovKick=1)}else if(R.mode==="air")R.vy-=13*b,R.y+=R.vy*b,R.vy<5&&R.vy>-4?(j.setPose("tuck"),R.tsTarget=.38):R.tsTarget=1,R.y<=0&&(R.y=0,R.vy=0,R.mode="ski",R.tsTarget=1,R.airLane=-1,j.setPose("land"),j.kick(-3.2),R.trauma=Math.max(R.trauma,.25),ft.burst(R.x,.1,.2,60,{speed:6,up:3.5,size:.55,life:.9,colors:[16777215,15398143,14215679]}),yt.push({type:"land"}),R.landT=.35);else if(R.mode==="crash")R.crashT+=b,R.y=Math.max(0,Math.sin(Math.min(1,R.crashT*1.4)*Math.PI)*1.1),R.crashT>1.7&&!R.crashDone&&(R.crashDone=!0,yt.push({type:"crashdone"}));else if(R.mode==="ceremony"&&(R.cerT+=b,R.y=0,It.position.z+=Y,R.cerT>2.6&&j.setPose("cheer"),R.cerT>2.6&&Math.random()<b*10&&ft.burst(R.x+(Math.random()-.5)*10,6+Math.random()*3,-2+Math.random()*4,14,{speed:3,up:3,size:.32,life:2.2,g:2.2,drag:1.2,world:0,colors:[16731501,16758531,3127551,1429926,16777215,11623679],force:!0}),R.cerT>5&&R.cerCb)){const K=R.cerCb;R.cerCb=null,K()}if(R.mode!=="crash"&&(R.crashDone=!1),R.landT>0&&(R.landT-=b,R.landT<=0&&R.mode==="ski"&&j.setPose(R.boost>.3?"crouch":"ski")),R.mode==="ski"&&!(R.landT>0)&&j.setPose(R.boost>.3?"crouch":"ski"),(R.mode==="ski"||R.mode==="ceremony")&&R.speed>2){const K=Math.min(1,Math.abs(R.vx)/7),Mt=R.speed/_r*(1+K*4)*b*30;for(let Wt=0;Wt<Mt;Wt++){const ue=R.vx>=0?-1:1;ft.emit({x:R.x+(Math.random()-.5)*.4,y:.08,z:.6+Math.random()*.4,vx:ue*K*(2+Math.random()*3)+(Math.random()-.5),vy:1+Math.random()*2*(.4+K),vz:1+Math.random()*2,life:.45+Math.random()*.4,size:.22+K*.3+Math.random()*.15,color:16777215,g:7,drag:2.5})}}for(let K=0;K<A.length;K++){const Mt=A[K];Mt.z+=Y,Mt.z>45&&C(Mt,Mt.z-270),$.set(Mt.x,0,Mt.z),F.setFromAxisAngle(Q,Mt.r),z.setScalar(Mt.s),N.compose($,F,z),D.setMatrixAt(K,N)}D.instanceMatrix.needsUpdate=!0;for(let K=0;K<P;K++)L[K]+=Y,L[K]>22&&(L[K]-=P/2*13),$.set((K%2?1:-1)*(oi+.3),0,L[K]),F.identity(),z.setScalar(1),N.compose($,F,z),M.setMatrixAt(K,N);M.instanceMatrix.needsUpdate=!0,g.offset.y+=Y/(320/50),m.offset.y+=Y/(320/60),ft.update(b,R.speed),j.root.position.set(R.x,R.y,0),j.update(b,{steer:R.mode==="ski"?R.vx/9:0}),rt.position.x=R.x;const it=1/(1+R.y*.35);rt.scale.set(it,it,1),rt.material.opacity=it}const _t=new U(0,3.6,8),Gt=new U(0,1.2,-8),ot=new U,vt=new U;function Lt(b){if(R.mode==="ceremony"&&R.cerT>1.8){const Y=Math.min(1,(R.cerT-1.8)/1.5),it=Y*Math.PI*.62+R.cerT*.02;ot.set(R.x+Math.sin(it)*6.5,2.2+Y*.6,Math.cos(it)*6.5),vt.set(R.x,1.4,0)}else ot.set(R.x*.75,3.5+R.y*.55,7.8-R.boost*1.2),vt.set(R.x*.9,1.3+R.y*.6,-9);const J=1-Math.exp(-b*5);if(_t.lerp(ot,J),Gt.lerp(vt,J),o.position.copy(_t),R.trauma>0){const Y=R.trauma*R.trauma*.55,it=R.t*40;o.position.x+=Math.sin(it*1.3)*Y,o.position.y+=Math.sin(it*1.7+1)*Y,o.position.z+=Math.sin(it*1.1+2)*Y*.5,R.trauma=Math.max(0,R.trauma-b*1.4)}o.lookAt(Gt),R.fovKick=Math.max(0,R.fovKick-b*1.2);const H=(o.userData.baseFov||60)+R.boost*9+R.fovKick*6+(R.speed/_r-1)*4;Math.abs(o.fov-H)>.05&&(o.fov+=(H-o.fov)*Math.min(1,b*4),o.updateProjectionMatrix()),u.forEach((Y,it)=>{Y.position.x=-_t.x*f[it]*10}),c.position.copy(o.position)}const Dt=[0,0,0];function xt(){const b=R.rowVisible&&R.rowZ!=null&&R.rowZ<=2&&(R.mode==="ski"||R.mode==="ramp");let J=0;if(b){const K=Z(en[0],vn+2.6,R.rowZ-gn),Mt=Z(en[1],vn+2.6,R.rowZ-gn);J=Math.abs(Mt.x-K.x)}let H=1;t.forEach((K,Mt)=>{(!Dt[Mt]||K.dataset.w!==K.textContent)&&(Dt[Mt]=K.offsetWidth||120,K.dataset.w=K.textContent),H=Math.max(H,Dt[Mt])});const Y=In.clamp(J*.94/H,.32,1.15),it=b?In.clamp((R.rowZ+62)/10,0,1):0;t.forEach((K,Mt)=>{if(!b||R.treeLane===Mt){K.style.opacity="0";return}const Wt=Z(en[Mt],vn+2.6,R.rowZ-gn);K.style.opacity=Wt.vis?it.toFixed(2):"0",K.style.transform=`translate(-50%, -100%) translate(${Wt.x.toFixed(1)}px, ${Wt.y.toFixed(1)}px) scale(${Y.toFixed(3)})`})}function Vt(b){if(!(I||!R.skiing)&&(at+=b,st++,Nt+=b,Nt>=2)){const J=st/at;at=0,st=0,Nt=0,J<42&&q==="high"?Zt("low"):J<28&&q==="low"&&(Zt("ultra"),I=!0)}}function Ot(b){R.timeScale+=(R.tsTarget-R.timeScale)*Math.min(1,b*(R.tsTarget<1?10:4));const J=b*R.timeScale;pt(J),Lt(b),xt(),ut.update(b,R.speed,_t.x),Vt(b),r.render(s,o)}const Kt=yt.push.bind(yt);return yt.push=b=>b.type==="pending-miss"?(R._pendingMiss=!0,yt.length):Kt(b),Pt(),{renderer:r,camera:o,scene:s,S:R,showRow:kt,hideRow:Rt,launch:ee,crash:Ct,ceremony:w,reset:x,setSkiing:k,pullEvents:tt,tick:Ot,skierScreen:Et,toScreen:Z,setSteer(b){R.steer=In.clamp(b,-1,1)},setBoost(b){R.boost=b},setQuality:Zt,get quality(){return q},isAirborne:()=>R.mode==="air"||R.mode==="ramp",lanes:en}}const Km={whoosh:"./audio/snow-whoosh.mp3",jump:"./audio/ski-jump.mp3",cheer:"./audio/crowd-cheer.mp3",crash:"./audio/tree-crash.mp3"},Qm="./audio/music-christmas-synths.mp3";function tg(){let i=null,t,e,n,r,s=null,a=null;const o={};let c=!1,u=null,h=!1;function f(){if(i)return i;const N=window.AudioContext||window.webkitAudioContext;return N?(i=new N,t=i.createGain(),t.gain.value=.9,t.connect(i.destination),e=i.createGain(),e.gain.value=.85,e.connect(t),n=i.createGain(),n.gain.value=0,n.connect(t),r=i.createGain(),r.gain.value=1,r.connect(t),i):null}async function l(N){try{const F=await fetch(N);if(!F.ok)return null;const $=await F.arrayBuffer();return await new Promise(z=>{const Q=i.decodeAudioData($,z,()=>z(null));Q&&Q.then&&Q.then(z,()=>z(null))})}catch(F){return null}}function p(){return u||!f()||(u=Promise.all(Object.entries(Km).map(async([N,F])=>{o[N]=await l(F)})).then(async()=>{a=await l(Qm),d&&S()})),u}function g(){if(f()){if(i.state==="suspended"&&i.resume().catch(()=>{}),!h){const N=i.createBuffer(1,1,22050),F=i.createBufferSource();F.buffer=N,F.connect(i.destination),F.start(0),h=!0}p()}}function _(N,{vol:F=1,rate:$=1,delay:z=0}={}){if(!i||c)return;const Q=o[N];if(!Q)return;const G=i.createBufferSource(),et=i.createGain();G.buffer=Q,G.playbackRate.value=$,et.gain.value=F,G.connect(et),et.connect(e),G.start(i.currentTime+z)}function m(N,F,{type:$="triangle",vol:z=.25,at:Q=0,slide:G=0}={}){if(!i||c)return;const et=i.currentTime+Q,ct=i.createOscillator(),ht=i.createGain();ct.type=$,ct.frequency.setValueAtTime(N,et),G&&ct.frequency.exponentialRampToValueAtTime(Math.max(40,N+G),et+F),ht.gain.setValueAtTime(1e-4,et),ht.gain.linearRampToValueAtTime(z,et+.015),ht.gain.exponentialRampToValueAtTime(1e-4,et+F),ct.connect(ht),ht.connect(e),ct.start(et),ct.stop(et+F+.05)}let d=!1;function S(){d=!0,!(!i||!a||s)&&(s=i.createBufferSource(),s.buffer=a,s.loop=!0,s.connect(n),s.start(),n.gain.setTargetAtTime(c?0:.32,i.currentTime,.8))}function T(N){!i||c||n.gain.setTargetAtTime(N?.12:.32,i.currentTime,.15)}const v=[0,2,4,7,9,12,14,16,19,21,24];function D(N){const F=523.25*Math.pow(2,v[Math.min(v.length-1,Math.max(0,N-1))]/12);m(F,.18,{vol:.22}),m(F*1.25,.18,{vol:.2,at:.08}),m(F*1.5,.32,{vol:.22,at:.16}),_("jump",{vol:.9,rate:1+Math.min(.5,N*.05)})}function A(){_("crash",{vol:1}),m(220,.35,{type:"sawtooth",vol:.08,slide:-120})}function C(){_("cheer",{vol:1}),[0,4,7,12,16].forEach((N,F)=>m(523.25*Math.pow(2,N/12),.4,{vol:.18,at:F*.11}))}function P(){_("whoosh",{vol:.7,rate:.9})}function E(N){N>.6&&_("whoosh",{vol:.25*N,rate:1.2})}function M(){_("whoosh",{vol:.55,rate:1.35})}async function L(N){if(!(!i||c))for(const F of N){const $=await l(F);if($){const z=i.createBufferSource();z.buffer=$,z.connect(r),T(!0),z.onended=()=>T(!1),z.start();return}}}function V(N){return c=!!N,i&&(t.gain.setTargetAtTime(c?0:.9,i.currentTime,.05),!c&&s&&n.gain.setTargetAtTime(.32,i.currentTime,.3)),c}return{unlock:g,play:_,correct:D,wrong:A,win:C,land:P,carve:E,boost:M,speak:L,startMusic:S,setMuted:V,isMuted:()=>c,ready:()=>u}}const Pr="ski-jump",kc="MRJ Ski Jump";function Hc(){try{const i=window.MRJ_AUTH;return i&&i.student&&i.student()||""}catch(i){return""}}function eg(i,t,e){try{const n=Hc();if(!n||!window.MRJ_SCORES||typeof window.MRJ_SCORES.post!="function"||!t||!t.item_id)return;const r=String(i.pack_id||"pack");window.MRJ_SCORES.post({student:String(n).trim(),program:Pr,appName:kc,bookTitle:i.title||i.pack_id,itemId:r+":"+t.item_id,itemType:"word",correctness:e?"correct":"incorrect",scoreValue:e?1:0,scoreMax:1})}catch(n){}}function ng(i,t,e,n){try{if(t.mrjRoundPosted)return;t.mrjRoundPosted=!0;const r=Hc();if(!r||!window.MRJ_SCORES||typeof window.MRJ_SCORES.post!="function")return;const s=String(i.pack_id||"pack"),a=t.records.length,o=t.records.filter(c=>c.correct).length;window.MRJ_SCORES.post({student:String(r).trim(),program:Pr,appName:kc,bookTitle:i.title||i.pack_id,itemId:"round:"+s,itemType:"round",scoreValue:o,scoreMax:a||1,metadata:{round:t.round,lives:t.lives,dead:!!n,corrects:t.corrects,target:e}})}catch(r){}}function ig(i,t){const e=String(i||"").trim();if(!e||e.indexOf("round:")===0)return"";const n=e.indexOf(":");if(n>0){const r=e.slice(0,n);if(r==="round")return"";const s=String(t||"").trim();return s&&r!==s?"":e.slice(n+1)}return e}function rg(i,t,e,n){const r=window.MRJ_SKI_PROGRESS;if(r&&typeof r.passedMap=="function"){r.applyPassed(t.roundDone,r.passedMap(e,Pr,i.pack_id)),t.corrects=r.syncCorrects(t.roundDone,i.items,n,t.corrects);return}const s={};for(const o of Array.isArray(e)?e:[]){if(!o||String(o.program||o.curriculum_program||"").trim()!==Pr)continue;const c=ig(o.itemId||o.item_id||o.item,i.pack_id);if(!c)continue;const u=o.scoreValue!=null?o.scoreValue:o.score!=null?o.score:o.scorePct,h=typeof u=="number"?u:parseFloat(String(u==null?"":u).split("/")[0]),f=o.scoreMax!=null?Number(o.scoreMax):NaN,l=o.scorePct!=null?Number(o.scorePct):NaN,p=Number.isFinite(l)?l>=100:Number.isFinite(f)&&f>0&&Number.isFinite(h)?h>=f:Number.isFinite(h)&&h>0;s[c]=!!s[c]||!!p}let a=0;for(const o of i.items||[])o&&s[o.item_id]&&(t.roundDone[o.item_id]=!0,a++);t.corrects=Math.max(t.corrects|0,Math.min(n,a))}function sg(i,t){try{const e=Object.keys(i.roundDone).filter(r=>i.roundDone[r]).length,n=t.items&&t.items.length||0;n&&e>=n&&window.parent&&window.parent!==window&&window.parent.postMessage({type:"mrj-wm-game-done",game:"snowjump",items:e,correct:i.corrects|0,finished:!0},"*")}catch(e){}}const Ja="1.0.0",Za=3,og=5,Ka='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',ag='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9l6 6M22 9l-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';function Qa(i){const t=document.createElement("div");return t.innerHTML=i.trim(),t.firstElementChild}const vr=i=>String(i==null?"":i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),cg=()=>"s-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,8),tc=i=>String(i||"").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");function lg(i,{pack:t,studentId:e="",sessionMode:n=!1,quality:r}={}){i.innerHTML="";let s=t;const a=()=>n?s.items&&s.items.length||0:og,o=tg(),c=Qa(`<div class="hud">
    <div class="topbar">
      <div class="pill name" id="sj-name">Ski</div>
      <div class="pill prog"><div class="bar"><i id="sj-bar"></i></div><span id="sj-left">0/5</span></div>
      <div class="pill pts" id="sj-score">0</div>
      <div class="pill combo" id="sj-combo"></div>
      <button class="pill mute" id="sj-mute" type="button" aria-label="Sound on/off">${Ka}</button>
    </div>
    <div class="question hidden" id="sj-q"><small>Ski to the word that means…</small><p id="sj-qp">?</p></div>
    <div class="ramp-word" data-lane="0"></div><div class="ramp-word" data-lane="1"></div><div class="ramp-word" data-lane="2"></div>
    <div class="toast" id="sj-toast"></div>
    <div class="steer-hint hidden" id="sj-hint"><span>◀</span><em>tap sides to steer · slide up = faster</em><span>▶</span></div>
    <div class="card start" id="sj-start">
      <div class="logo"><b>SKI</b><b>JUMP</b></div>
      <p class="lead">Read the meaning. Ski onto the ramp with the right word. A wrong ramp is a tree!</p>
      <form id="sj-form">
        <input id="sj-input" type="text" maxlength="24" placeholder="Your name" autocomplete="nickname" />
        <button class="go" type="submit">Start skiing</button>
      </form>
      <p class="keys">Phone / tablet: tap left or right side · slide up to go faster<br>Computer: ← → or A D · ↑ or W faster</p>
      <label class="drop" id="sj-drop">Teachers: drop an Excel / CSV / JSON pack here
        <input id="lf-file" type="file" accept=".xlsx,.xls,.csv,.json" hidden />
      </label>
      <a class="howto" href="./HOW-TO-PLAY.html">How to play</a>
    </div>
    <div class="card end hidden" id="sj-end"></div>
  </div>`);i.appendChild(c);const u=q=>c.querySelector(q),h=[...c.querySelectorAll(".ramp-word")],f=Zm(i,h,{quality:r});i.insertBefore(f.renderer.domElement,c),n&&(u("#sj-drop").remove(),u(".howto").remove());const l={pack:s,studentId:e||"",sessionId:cg(),view:"start",points:0,errors:0,round:1,roundDone:{},mrjRoundPosted:!1,queue:[],trial:null,jumping:!1,lives:Za,corrects:0,records:[],startedAt:null,t:0,pendingLand:null,keys:{left:!1,right:!1,up:!1},pointerSteer:0,pointerDown:!1,holdSteer:0,boost:0,ptrStartY:0,ptrY:0,streak:0,best:0},p=[];let g=[];const _=()=>Math.max(0,a()-l.corrects),m=()=>Math.min(4,1+Math.floor(l.streak/3));function d(){u("#sj-name").textContent=l.studentId||"Ski",u("#sj-score").textContent=`${l.points} pts`;const q=a()||1;u("#sj-left").textContent=`${l.corrects}/${a()}`,u("#sj-bar").style.width=`${Math.min(100,l.corrects/q*100)}%`;const at=m(),st=u("#sj-combo");st.textContent=l.streak>=2?`COMBO ×${at} · ${l.streak}`:"",st.classList.toggle("on",l.streak>=2),st.dataset.m=String(at)}function S(q,at){const st=u("#sj-toast");st.textContent=q,st.className=`toast ${at}`,st.offsetWidth,st.classList.add("on"),clearTimeout(st._h),st._h=setTimeout(()=>st.classList.remove("on"),850)}function T(q,at=""){const st=f.skierScreen(),Nt=Qa(`<div class="float ${at}">${vr(q)}</div>`);Nt.style.left=`${st.x}px`,Nt.style.top=`${st.y}px`,c.appendChild(Nt),setTimeout(()=>Nt.remove(),1300)}function v(q){u("#sj-q").classList.toggle("hidden",!q),u("#sj-hint").classList.toggle("hidden",!q)}function D(){l.queue=Bo(s.items.filter(q=>!l.roundDone[q.item_id]))}function A(q){if(!q)return;const at=[q.audio];n||at.push(q.question&&`./audio/${tc(q.question)}.mp3`,q.correct&&`./audio/${tc(q.correct)}.mp3`),o.speak(at.filter(Boolean))}function C(q){q.choices.forEach((st,Nt)=>{h[Nt].textContent=st||"—",h[Nt].dataset.answer=st||""}),u("#sj-qp").textContent=q.item.question;const at=u("#sj-q");at.classList.remove("pop"),at.offsetWidth,at.classList.add("pop")}function P(q=!0){if(q||!l.trial){if(l.queue.length||D(),!l.queue.length)return V();const at=l.queue.shift(),st=Bo([at.correct,...at.wrong.slice(0,2)]);for(;st.length<3;)st.push("");l.trial={item:at,choices:st,correctLane:st.indexOf(at.correct),startedAt:new Date().toISOString(),t0:performance.now(),locked:!1},C(l.trial),A(at)}else l.trial.locked=!1;v(!0),f.showRow(),d()}function E(q,at,st,Nt){const I={student_id:l.studentId,session_id:l.sessionId,module_id:s.module_id||"ski_jump",activity_id:s.activity_id||"slope_jump",item_id:q.item_id,skill_tags:q.skill_tags||s.skill_tags||[],response:at,correct:st,latency_ms:Math.round(Nt),accuracy:0,points:l.points,errors:l.errors,started_at:l.trial.startedAt,ended_at:new Date().toISOString(),ui_locale:s.ui_locale||"en",round:l.round},Zt=l.records.concat(I);return I.accuracy=Zt.filter(Pt=>Pt.correct).length/Zt.length,l.records.push(I),window.dispatchEvent(new CustomEvent("lf-record",{detail:I})),eg(s,q,!!st),I}function M(q){const at=l.trial;if(!at||at.locked||l.view!=="play")return;at.locked=!0,l.jumping=!0;const st=performance.now()-at.t0,Nt=q===at.correctLane,I=Number.isInteger(q)?at.choices[q]:"";if(Nt){l.roundDone[at.item.item_id]=!0,l.corrects+=1,l.streak+=1,l.best=Math.max(l.best,l.streak);const Zt=m();l.points+=100*Zt,o.correct(l.streak),S("FLY!","ok"),T(Zt>1?`+100 ×${Zt}`:"+100",Zt>1?"combo":""),f.launch(q,l.streak),l.pendingLand={correct:!0,dead:!1,goLand:_()===0}}else l.errors+=1,l.lives=0,l.streak=0,o.wrong(),S("TREE!","bad"),f.crash(q),l.pendingLand={correct:!1,dead:!0,goLand:!1};E(at.item,I,Nt,st),d()}function L(){const q=l.pendingLand;if(l.pendingLand=null,l.jumping=!1,!!q){if(q.dead)return N({dead:!0});if(o.land(),q.goLand){v(!1),f.hideRow(),o.win(),f.ceremony(()=>N());return}P(!0)}}function V(){return l.trial=null,v(!1),S(`Round ${l.round} done`,"ok"),N()}function N({dead:q=!1}={}){if(l.view==="end")return;ng(s,l,a(),q),q||sg(l,s),l.view="end",l.trial=null,f.setSkiing(!1),v(!1);const at=l.records.length?Math.round(l.records.filter(Pt=>Pt.correct).length/l.records.length*100):0,st=p.findIndex(Pt=>Pt.student_id===l.studentId&&Pt.pack_id===s.pack_id),Nt={student_id:l.studentId,pack_id:s.pack_id,points:l.points,accuracy:at,errors:l.errors,ended_at:new Date().toISOString()};st>=0?Nt.points>=p[st].points&&(p[st]=Nt):p.push(Nt),p.sort((Pt,kt)=>kt.points-Pt.points);const I=u("#sj-end"),Zt=vr(l.studentId);I.innerHTML=`<div class="medal ${q?"crash":"gold"}"><span>${q?"!":"★"}</span></div>
      <h2>${q?"Crashed!":"Gold medal!"}</h2>
      <p>${q?`${Zt} hit a tree. Start again.`:`${Zt} got ${a()} right. The crowd cheered and they put a gold medal on.`}</p>
      <div class="stats"><div><b>${l.points}</b><span>points</span></div><div><b>${at}%</b><span>accurate</span></div><div><b>${l.best}</b><span>best combo</span></div></div>
      ${p.length>1?`<div class="board">${p.slice(0,8).map((Pt,kt)=>`${kt+1}. ${vr(Pt.student_id)} — ${Pt.points} pts`).join("<br>")}</div>`:""}
      <button class="go" id="sj-again" type="button">Start again</button>`,I.classList.remove("hidden"),I.querySelector("#sj-again").onclick=()=>{o.unlock(),F()}}function F(){if(Object.assign(l,{points:0,errors:0,lives:Za,corrects:0,roundDone:{},mrjRoundPosted:!1,records:[],trial:null,jumping:!1,pendingLand:null,view:"play",holdSteer:0,pointerSteer:0,boost:0,streak:0,best:0}),u("#sj-end").classList.add("hidden"),u("#sj-end").innerHTML="",f.reset(),f.setSkiing(!0),$(),l.corrects>=a())return f.setSkiing(!1),N();D(),P(!0),d()}function $(){rg(s,l,g,a())}function z(q){if(l.studentId=String(q).slice(0,24),l.startedAt=new Date().toISOString(),l.view="play",u("#sj-start").classList.add("hidden"),o.unlock(),o.startMusic(),f.reset(),f.setSkiing(!0),$(),l.corrects>=a())return f.setSkiing(!1),N();D(),P(!0),d()}function Q(q){l.studentId=String(q).slice(0,24),u("#sj-form").innerHTML=`<div class="hello">Hi, <b>${vr(l.studentId)}</b>!</div><button class="go big" type="submit">Tap to start ▶</button>`,d()}function G(q){g=Array.isArray(q)?q:[],$(),l.view==="play"&&(D(),d())}window.addEventListener("mrj-auth-ready",q=>{const at=q&&q.detail||{};g=Array.isArray(at.progress)?at.progress.slice():[];const st=window.MRJ_SKI_PROGRESS;st&&typeof st.onAuthReady=="function"?st.onAuthReady(q,{onRows:G}):$();const Nt=at.id||window.MRJ_AUTH&&window.MRJ_AUTH.student&&window.MRJ_AUTH.student();if(l.view==="start"){Nt&&Q(Nt);return}l.records.length||l.jumping||l.pendingLand||(l.roundDone={},l.mrjRoundPosted=!1,l.corrects=0,l.queue=[],l.trial=null,l.view="play",u("#sj-end").classList.add("hidden"),$(),l.corrects>=a()?(f.setSkiing(!1),N()):P(!0),d())}),u("#sj-form").addEventListener("submit",q=>{q.preventDefault();const at=u("#sj-input");z(at&&at.value.trim()||l.studentId||"Student")}),e&&Q(e);const et=u("#sj-mute");et.addEventListener("click",q=>{q.stopPropagation(),o.unlock();const at=o.setMuted(!o.isMuted());et.innerHTML=at?ag:Ka,et.classList.toggle("off",at)});const ct=q=>{const at=q.changedTouches?q.changedTouches[0]:q,st=i.getBoundingClientRect();return{x:(at.clientX-st.left)/Math.max(1,st.width),h:Math.max(1,st.height),y:at.clientY}},ht=q=>q<.38?-1:q>.62?1:(q-.5)*2;function gt(q){const at=ct(q);l.pointerSteer=ht(at.x),l.holdSteer=l.pointerSteer,l.ptrY=at.y,l.boost=Math.max(0,Math.min(1,(l.ptrStartY-l.ptrY)/(at.h*.3)))}i.addEventListener("pointerdown",q=>{if(o.unlock(),l.view!=="play"||q.target.closest&&q.target.closest(".card, button, input, a, label"))return;q.preventDefault(),l.pointerDown=!0;const at=ct(q);l.ptrStartY=at.y,l.ptrY=at.y,gt(q);try{i.setPointerCapture(q.pointerId)}catch(st){}}),i.addEventListener("pointermove",q=>{l.pointerDown&&l.view==="play"&&(q.preventDefault(),gt(q))});const It=()=>{l.pointerDown=!1,l.holdSteer=0};i.addEventListener("pointerup",It),i.addEventListener("pointercancel",It);const j=q=>at=>{const st=at.key;(st==="ArrowLeft"||st==="a"||st==="A")&&(l.keys.left=q),(st==="ArrowRight"||st==="d"||st==="D")&&(l.keys.right=q),(st==="ArrowUp"||st==="w"||st==="W")&&(l.keys.up=q),q&&st.startsWith("Arrow")&&l.view==="play"&&at.preventDefault(),q&&o.unlock()};window.addEventListener("keydown",j(!0)),window.addEventListener("keyup",j(!1));const rt=()=>{let q=0;return l.keys.left&&(q-=1),l.keys.right&&(q+=1),q||(l.pointerDown?l.pointerSteer:l.holdSteer)};let ft=performance.now(),ut=!1;function R(q){const at=Math.min(.05,Math.max(0,(q-ft)/1e3));if(ft=q,l.t+=at,f.setSteer(rt()),l.keys.up?l.boost=Math.min(1,l.boost+at*2.6):l.pointerDown||(l.boost=Math.max(0,l.boost-at*1.35)),l.boost>.5&&!ut&&o.boost(),ut=l.boost>.5,f.setBoost(l.view==="play"?l.boost:0),f.tick(at),l.view==="play")for(const st of f.pullEvents())st.type==="hit"?M(st.lane):st.type==="land"||st.type==="crashdone"?L():st.type==="missed"&&l.trial&&!l.trial.locked&&(S("Missed! Try again","warn"),P(!1));else f.pullEvents();requestAnimationFrame(R)}requestAnimationFrame(R),d();const yt={version:Ja,getState(){return{student_id:l.studentId,session_id:l.sessionId,pack_id:s.pack_id,view:l.view,points:l.points,errors:l.errors,lives:l.lives,round:l.round,corrects:l.corrects,remaining:_(),total:a(),pack_items:s.items.length,current_item:l.trial?l.trial.item.item_id:null,correct_lane:l.trial?l.trial.correctLane:null,choices:l.trial?l.trial.choices.slice():[],airborne:f.isAirborne(),x:f.S.x,streak:l.streak,multiplier:m(),quality:f.quality,muted:o.isMuted(),version:Ja,target_rule:n?"wm:all-items":"standalone:5",steer:l.holdSteer,boost:l.boost,session_mode:n}},getRecords:()=>l.records.slice(),getLeaderboard:()=>p.slice(),loadPack(q){return n?!1:(s=q,l.pack=q,l.roundDone={},D(),d(),!0)}};return window.MRJSkiJump=yt,window.SkiJump=yt,yt}const io=document.getElementById("app"),Ao=new URLSearchParams(location.search),ug=(Ao.get("student")||"").trim(),ro=Ao.get("pack")||"",so=ro==="session";async function hg(){if(so){const t=sessionStorage.getItem("mrj.wm.gamepack");if(!t)throw new Error("Open Ski Jump from Word Master to get your words.");return Lr(JSON.parse(t))}if(ro)try{return await Oo(ro)}catch(t){}const i=document.querySelector('meta[name="sj-default-pack"]');if(!i)throw new Error("Open Ski Jump from Word Master to get your words.");return Oo(i.content)}async function fg(){const i=await hg(),t=Ao.get("q"),e=lg(io,{pack:i,studentId:ug,sessionMode:so,quality:t==="low"||t==="high"||t==="ultra"?t:void 0});if(so)return;const n=document.getElementById("lf-file"),r=n&&n.closest("label"),s=document.querySelector("#sj-start .lead");async function a(o){try{const c=await jc(o);e.loadPack(c),s&&(s.textContent=`Loaded ${c.title} · ${c.items.length} questions.`)}catch(c){s&&(s.textContent="Could not read that pack: "+c.message)}}n&&n.addEventListener("change",()=>n.files[0]&&a(n.files[0])),r&&(r.addEventListener("dragover",o=>{o.preventDefault(),r.classList.add("over")}),r.addEventListener("dragleave",()=>r.classList.remove("over")),r.addEventListener("drop",o=>{o.preventDefault(),r.classList.remove("over"),o.dataTransfer.files[0]&&a(o.dataTransfer.files[0])}))}fg().catch(i=>{io.innerHTML='<div class="fatal"><h2>Ski Jump</h2><p></p></div>',io.querySelector(".fatal p").textContent=i.message});
