(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Po="170",pp={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hd=0,nl=1,ud=2,gp=3,_p=0,Ml=1,dd=2,Pn=3,Nn=0,Fe=1,_n=2,jn=0,qi=1,Ls=2,il=3,sl=4,fd=5,_i=100,pd=101,md=102,gd=103,_d=104,xd=200,vd=201,yd=202,Md=203,Ha=204,Ga=205,Sd=206,bd=207,wd=208,Ed=209,Td=210,Ad=211,Cd=212,Rd=213,Pd=214,Wa=0,Xa=1,qa=2,Ji=3,Ya=4,Za=5,$a=6,Ja=7,Dr=0,Id=1,Ld=2,Qn=0,Dd=1,Ud=2,Nd=3,Sl=4,Fd=5,Od=6,Bd=7,rl="attached",zd="detached",Io=300,ei=301,yi=302,_r=303,xr=304,zs=306,Ki=1e3,xn=1001,vr=1002,Oe=1003,bl=1004,xp=1004,Cs=1005,vp=1005,Ce=1006,cr=1007,yp=1007,In=1008,Mp=1008,Fn=1009,wl=1010,El=1011,Us=1012,Lo=1013,ni=1014,en=1015,ks=1016,Do=1017,Uo=1018,ji=1020,Tl=35902,Al=1021,Cl=1022,qe=1023,Rl=1024,Pl=1025,Yi=1026,Qi=1027,No=1028,Ur=1029,Il=1030,Fo=1031,Sp=1032,Oo=1033,lr=33776,hr=33777,ur=33778,dr=33779,Ka=35840,ja=35841,Qa=35842,to=35843,eo=36196,no=37492,io=37496,so=37808,ro=37809,ao=37810,oo=37811,co=37812,lo=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,xo=37821,fr=36492,vo=36494,yo=36495,Ll=36283,Mo=36284,So=36285,bo=36286,kd=2200,Vd=2201,Hd=2202,yr=2300,wo=2301,ka=2302,Hi=2400,Gi=2401,Mr=2402,Bo=2500,Dl=2501,bp=0,wp=1,Ep=2,Gd=3200,Wd=3201,Tp=3202,Ap=3203,Si=0,Xd=1,$n="",Se="srgb",ns="srgb-linear",Nr="linear",me="srgb",Cp=0,zi=7680,Rp=7681,Pp=7682,Ip=7683,Lp=34055,Dp=34056,Up=5386,Np=512,Fp=513,Op=514,Bp=515,zp=516,kp=517,Vp=518,al=519,qd=512,Yd=513,Zd=514,Ul=515,$d=516,Jd=517,Kd=518,jd=519,Sr=35044,vi=35048,Hp=35040,Gp=35045,Wp=35049,Xp=35041,qp=35046,Yp=35050,Zp=35042,$p="100",ol="300 es",Ln=2e3,br=2001;class Bn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mh=1234567;const Zi=Math.PI/180,Ns=180/Math.PI;function hn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[s&255]+ze[s>>8&255]+ze[s>>16&255]+ze[s>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function Nl(s,t){return(s%t+t)%t}function Jp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Kp(s,t,e){return s!==t?(e-s)/(t-s):0}function pr(s,t,e){return(1-e)*s+e*t}function jp(s,t,e,n){return pr(s,t,1-Math.exp(-e*n))}function Qp(s,t=1){return t-Math.abs(Nl(s,t*2)-t)}function tm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function em(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function nm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function im(s,t){return s+Math.random()*(t-s)}function sm(s){return s*(.5-Math.random())}function rm(s){s!==void 0&&(mh=s);let t=mh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function am(s){return s*Zi}function om(s){return s*Ns}function cm(s){return(s&s-1)===0&&s!==0}function lm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function hm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function um(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(i){case"XYX":s.set(o*u,c*d,c*h,o*l);break;case"YZY":s.set(c*h,o*u,c*d,o*l);break;case"ZXZ":s.set(c*d,c*h,o*u,o*l);break;case"XZX":s.set(o*u,c*m,c*f,o*l);break;case"YXY":s.set(c*f,o*u,c*m,o*l);break;case"ZYZ":s.set(c*m,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const xi={DEG2RAD:Zi,RAD2DEG:Ns,generateUUID:hn,clamp:be,euclideanModulo:Nl,mapLinear:Jp,inverseLerp:Kp,lerp:pr,damp:jp,pingpong:Qp,smoothstep:tm,smootherstep:em,randInt:nm,randFloat:im,randFloatSpread:sm,seededRandom:rm,degToRad:am,radToDeg:om,isPowerOfTwo:cm,ceilPowerOfTwo:lm,floorPowerOfTwo:hm,setQuaternionFromProperEuler:um,normalize:Jt,denormalize:Xe};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,i,r,a,o,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],v=i[1],y=i[4],x=i[7],D=i[2],A=i[5],M=i[8];return r[0]=a*_+o*v+c*D,r[3]=a*g+o*y+c*A,r[6]=a*p+o*x+c*M,r[1]=l*_+u*v+d*D,r[4]=l*g+u*y+d*A,r[7]=l*p+u*x+d*M,r[2]=h*_+f*v+m*D,r[5]=h*g+f*y+m*A,r[8]=h*p+f*x+m*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,m=e*d+n*h+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=d*_,t[1]=(i*l-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=h*_,t[4]=(u*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(uc.makeScale(t,e)),this}rotate(t){return this.premultiply(uc.makeRotation(-t)),this}translate(t,e){return this.premultiply(uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uc=new Zt;function Qd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const dm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Rs(s,t){return new dm[s](t)}function wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tf(){const s=wr("canvas");return s.style.display="block",s}const gh={};function rr(s){s in gh||(gh[s]=!0,console.warn(s))}function fm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pm(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mm(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?Nr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const _h=[.64,.33,.3,.6,.15,.06],xh=[.2126,.7152,.0722],vh=[.3127,.329],yh=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mh=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[ns]:{primaries:_h,whitePoint:vh,transfer:Nr,toXYZ:yh,fromXYZ:Mh,luminanceCoefficients:xh,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:_h,whitePoint:vh,transfer:me,toXYZ:yh,fromXYZ:Mh,luminanceCoefficients:xh,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}});let cs;class ef{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=wr("canvas")),cs.width=t.width,cs.height=t.height;const n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gm=0;class Wi{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=hn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(dc(i[a].image)):r.push(dc(i[a]))}else r=dc(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function dc(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ef.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _m=0;class we extends Bn{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=xn,i=xn,r=Ce,a=In,o=qe,c=Fn,l=we.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=hn(),this.name="",this.source=new Wi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Io)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ki:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case vr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ki:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case vr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Io;we.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(f+1)/2,D=(p+1)/2,A=(u+h)/4,M=(d+_)/4,E=(m+g)/4;return y>x&&y>D?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=M/n):x>D?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=E/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=M/r,i=E/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nf extends Bn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wi(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends nf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zo extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xm extends wn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new zo(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class Fl extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vm extends wn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Fl(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class Ye{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3];const h=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(d!==_||c!==h||l!==f||u!==m){let g=1-o;const p=c*h+l*f+u*m+d*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const D=Math.sqrt(y),A=Math.atan2(D,p*v);g=Math.sin(g*A)/D,o=Math.sin(o*A)/D}const x=o*v;if(c=c*g+h*x,l=l*g+f*x,u=u*g+m*x,d=d*g+_*x,g===1-o){const D=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=D,l*=D,u*=D,d*=D}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=r[a],h=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+u*d+c*f-l*h,t[e+1]=c*m+u*h+l*d-o*f,t[e+2]=l*m+u*f+o*h-c*d,t[e+3]=u*m-o*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),d=o(r/2),h=c(n/2),f=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d+h*f*m;break;case"YZX":this._x=h*u*d+l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d-h*f*m;break;case"XZY":this._x=h*u*d-l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),u=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=i+c*d+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fc.copy(this).projectOnVector(t),this.sub(fc)}reflect(t){return this.sub(fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fc=new C,Sh=new Ye;class Ze{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),Wr.subVectors(this.max,qs),ls.subVectors(t.a,qs),hs.subVectors(t.b,qs),us.subVectors(t.c,qs),oi.subVectors(hs,ls),ci.subVectors(us,hs),Ei.subVectors(ls,us);let e=[0,-oi.z,oi.y,0,-ci.z,ci.y,0,-Ei.z,Ei.y,oi.z,0,-oi.x,ci.z,0,-ci.x,Ei.z,0,-Ei.x,-oi.y,oi.x,0,-ci.y,ci.x,0,-Ei.y,Ei.x,0];return!pc(e,ls,hs,us,Wr)||(e=[1,0,0,0,1,0,0,0,1],!pc(e,ls,hs,us,Wr))?!1:(Xr.crossVectors(oi,ci),e=[Xr.x,Xr.y,Xr.z],pc(e,ls,hs,us,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new C,new C,new C,new C,new C,new C,new C,new C],yn=new C,Gr=new Ze,ls=new C,hs=new C,us=new C,oi=new C,ci=new C,Ei=new C,qs=new C,Wr=new C,Xr=new C,Ti=new C;function pc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ti.fromArray(s,r);const o=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),c=t.dot(Ti),l=e.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ym=new Ze,Ys=new C,mc=new C;class Be{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ym.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);const e=Ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(mc)),this.expandByPoint(Ys.copy(t.center).sub(mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new C,gc=new C,qr=new C,li=new C,_c=new C,Yr=new C,xc=new C;class Vs{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gc.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(gc);const r=t.distanceTo(e)*.5,a=-this.direction.dot(qr),o=li.dot(this.direction),c=-li.dot(qr),l=li.lengthSq(),u=Math.abs(1-a*a);let d,h,f,m;if(u>0)if(d=a*c-o,h=a*o-c,m=r*u,d>=0)if(h>=-m)if(h<=m){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-m?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=m?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(gc).addScaledVector(qr,h),f}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,i,r){_c.subVectors(e,t),Yr.subVectors(n,t),xc.crossVectors(_c,Yr);let a=this.direction.dot(xc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,t);const c=o*this.direction.dot(Yr.crossVectors(li,Yr));if(c<0)return null;const l=o*this.direction.dot(_c.cross(li));if(l<0||c+l>a)return null;const u=-o*li.dot(xc);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(t,e,n,i,r,a,o,c,l,u,d,h,f,m,_,g){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,u,d,h,f,m,_,g)}set(t,e,n,i,r,a,o,c,l,u,d,h,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),a=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,m=o*u,_=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=h-_*l,e[9]=-o*c,e[2]=_-h*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,m=l*u,_=l*d;e[0]=h+_*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-m,e[6]=_+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,m=l*u,_=l*d;e[0]=h-_*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,f=a*d,m=o*u,_=o*d;e[0]=c*u,e[4]=m*l-f,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*u,e[4]=_-h*d,e[8]=m*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*d+m,e[10]=h-_*d}else if(t.order==="XZY"){const h=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=a*u,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mm,t,Sm)}lookAt(t,e,n){const i=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),hi.crossVectors(n,on),hi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),hi.crossVectors(n,on)),hi.normalize(),Zr.crossVectors(on,hi),i[0]=hi.x,i[4]=Zr.x,i[8]=on.x,i[1]=hi.y,i[5]=Zr.y,i[9]=on.y,i[2]=hi.z,i[6]=Zr.z,i[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],y=n[7],x=n[11],D=n[15],A=i[0],M=i[4],E=i[8],b=i[12],S=i[1],L=i[5],G=i[9],F=i[13],H=i[2],V=i[6],O=i[10],Y=i[14],U=i[3],et=i[7],rt=i[11],ut=i[15];return r[0]=a*A+o*S+c*H+l*U,r[4]=a*M+o*L+c*V+l*et,r[8]=a*E+o*G+c*O+l*rt,r[12]=a*b+o*F+c*Y+l*ut,r[1]=u*A+d*S+h*H+f*U,r[5]=u*M+d*L+h*V+f*et,r[9]=u*E+d*G+h*O+f*rt,r[13]=u*b+d*F+h*Y+f*ut,r[2]=m*A+_*S+g*H+p*U,r[6]=m*M+_*L+g*V+p*et,r[10]=m*E+_*G+g*O+p*rt,r[14]=m*b+_*F+g*Y+p*ut,r[3]=v*A+y*S+x*H+D*U,r[7]=v*M+y*L+x*V+D*et,r[11]=v*E+y*G+x*O+D*rt,r[15]=v*b+y*F+x*Y+D*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*d-i*l*d-r*o*h+n*l*h+i*o*f-n*c*f)+_*(+e*c*f-e*l*h+r*a*h-i*a*f+i*l*u-r*c*u)+g*(+e*l*d-e*o*f-r*a*d+n*a*f+r*o*u-n*l*u)+p*(-i*o*u-e*c*d+e*o*h+i*a*d-n*a*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=d*g*l-_*h*l+_*c*f-o*g*f-d*c*p+o*h*p,y=m*h*l-u*g*l-m*c*f+a*g*f+u*c*p-a*h*p,x=u*_*l-m*d*l+m*o*f-a*_*f-u*o*p+a*d*p,D=m*d*c-u*_*c-m*o*h+a*_*h+u*o*g-a*d*g,A=e*v+n*y+i*x+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return t[0]=v*M,t[1]=(_*h*r-d*g*r-_*i*f+n*g*f+d*i*p-n*h*p)*M,t[2]=(o*g*r-_*c*r+_*i*l-n*g*l-o*i*p+n*c*p)*M,t[3]=(d*c*r-o*h*r-d*i*l+n*h*l+o*i*f-n*c*f)*M,t[4]=y*M,t[5]=(u*g*r-m*h*r+m*i*f-e*g*f-u*i*p+e*h*p)*M,t[6]=(m*c*r-a*g*r-m*i*l+e*g*l+a*i*p-e*c*p)*M,t[7]=(a*h*r-u*c*r+u*i*l-e*h*l-a*i*f+e*c*f)*M,t[8]=x*M,t[9]=(m*d*r-u*_*r-m*n*f+e*_*f+u*n*p-e*d*p)*M,t[10]=(a*_*r-m*o*r+m*n*l-e*_*l-a*n*p+e*o*p)*M,t[11]=(u*o*r-a*d*r-u*n*l+e*d*l+a*n*f-e*o*f)*M,t[12]=D*M,t[13]=(u*_*i-m*d*i+m*n*h-e*_*h-u*n*g+e*d*g)*M,t[14]=(m*o*i-a*_*i-m*n*c+e*_*c+a*n*g-e*o*g)*M,t[15]=(a*d*i-u*o*i+u*n*c-e*d*c-a*n*h+e*o*h)*M,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,m=r*d,_=a*u,g=a*d,p=o*d,v=c*l,y=c*u,x=c*d,D=n.x,A=n.y,M=n.z;return i[0]=(1-(_+p))*D,i[1]=(f+x)*D,i[2]=(m-y)*D,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(h+p))*A,i[6]=(g+v)*A,i[7]=0,i[8]=(m+y)*M,i[9]=(g-v)*M,i[10]=(1-(h+_))*M,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ds.set(i[0],i[1],i[2]).length();const a=ds.set(i[4],i[5],i[6]).length(),o=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Mn.copy(this);const l=1/r,u=1/a,d=1/o;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,e.setFromRotationMatrix(Mn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Ln){const c=this.elements,l=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i);let f,m;if(o===Ln)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===br)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Ln){const c=this.elements,l=1/(e-t),u=1/(n-i),d=1/(a-r),h=(e+t)*l,f=(n+i)*u;let m,_;if(o===Ln)m=(a+r)*d,_=-2*d;else if(o===br)m=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ds=new C,Mn=new Vt,Mm=new C(0,0,0),Sm=new C(1,1,1),hi=new C,Zr=new C,on=new C,bh=new Vt,wh=new Ye;class un{constructor(t=0,e=0,n=0,i=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wh.setFromEuler(this),this.setFromQuaternion(wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class ko{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bm=0;const Eh=new C,fs=new Ye,Gn=new Vt,$r=new C,Zs=new C,wm=new C,Em=new Ye,Th=new C(1,0,0),Ah=new C(0,1,0),Ch=new C(0,0,1),Rh={type:"added"},Tm={type:"removed"},ps={type:"childadded",child:null},vc={type:"childremoved",child:null};class oe extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oe.DEFAULT_UP.clone();const t=new C,e=new un,n=new Ye,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Zt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Th,t)}rotateY(t){return this.rotateOnAxis(Ah,t)}rotateZ(t){return this.rotateOnAxis(Ch,t)}translateOnAxis(t,e){return Eh.copy(t).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Th,t)}translateY(t){return this.translateOnAxis(Ah,t)}translateZ(t){return this.translateOnAxis(Ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Zs,$r,this.up):Gn.lookAt($r,Zs,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(Gn),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rh),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tm),vc.child=t,this.dispatchEvent(vc),vc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rh),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,wm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}oe.DEFAULT_UP=new C(0,1,0);oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new C,Wn=new C,yc=new C,Xn=new C,ms=new C,gs=new C,Ph=new C,Mc=new C,Sc=new C,bc=new C,wc=new ae,Ec=new ae,Tc=new ae;class Qe{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Sn.subVectors(t,e),i.cross(Sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Sn.subVectors(i,e),Wn.subVectors(n,e),yc.subVectors(t,e);const a=Sn.dot(Sn),o=Sn.dot(Wn),c=Sn.dot(yc),l=Wn.dot(Wn),u=Wn.dot(yc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,m=(a*u-o*c)*h;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(a,Xn.y),c.addScaledVector(o,Xn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return wc.setScalar(0),Ec.setScalar(0),Tc.setScalar(0),wc.fromBufferAttribute(t,e),Ec.fromBufferAttribute(t,n),Tc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(wc,r.x),a.addScaledVector(Ec,r.y),a.addScaledVector(Tc,r.z),a}static isFrontFacing(t,e,n,i){return Sn.subVectors(n,e),Wn.subVectors(t,e),Sn.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Sn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ms.subVectors(i,n),gs.subVectors(r,n),Mc.subVectors(t,n);const c=ms.dot(Mc),l=gs.dot(Mc);if(c<=0&&l<=0)return e.copy(n);Sc.subVectors(t,i);const u=ms.dot(Sc),d=gs.dot(Sc);if(u>=0&&d<=u)return e.copy(i);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(ms,a);bc.subVectors(t,r);const f=ms.dot(bc),m=gs.dot(bc);if(m>=0&&f<=m)return e.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(gs,o);const g=u*m-f*d;if(g<=0&&d-u>=0&&f-m>=0)return Ph.subVectors(r,i),o=(d-u)/(d-u+(f-m)),e.copy(i).addScaledVector(Ph,o);const p=1/(g+_+h);return a=_*p,o=h*p,e.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Ac(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Nl(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ac(a,r,t+1/3),this.g=Ac(a,r,t),this.b=Ac(a,r,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const n=sf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return ie.fromWorkingColorSpace(ke.copy(this),t),Math.round(be(ke.r*255,0,255))*65536+Math.round(be(ke.g*255,0,255))*256+Math.round(be(ke.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,i=ke.g,r=ke.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Se){ie.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,i=ke.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Jr);const n=pr(ui.h,Jr.h,e),i=pr(ui.s,Jr.s,e),r=pr(ui.l,Jr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new ft;ft.NAMES=sf;let Am=0;class He extends Bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=hn(),this.name="",this.blending=qi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Ga,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tn extends He{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Dr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Jn=Cm();function Cm(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function je(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=be(s,-65504,65504),Jn.floatView[0]=s;const t=Jn.uint32View[0],e=t>>23&511;return Jn.baseTable[e]+((t&8388607)>>Jn.shiftTable[e])}function ar(s){const t=s>>10;return Jn.uint32View[0]=Jn.mantissaTable[Jn.offsetTable[t]+(s&1023)]+Jn.exponentTable[t],Jn.floatView[0]}const Rm={toHalfFloat:je,fromHalfFloat:ar},Ae=new C,Kr=new ot;class se{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sr,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xe(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xe(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xe(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sr&&(t.usage=this.usage),t}}class Pm extends se{constructor(t,e,n){super(new Int8Array(t),e,n)}}class Im extends se{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class Lm extends se{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class Dm extends se{constructor(t,e,n){super(new Int16Array(t),e,n)}}class Ol extends se{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Um extends se{constructor(t,e,n){super(new Int32Array(t),e,n)}}class Bl extends se{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Nm extends se{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=ar(this.array[t*this.itemSize]);return this.normalized&&(e=Xe(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=je(e),this}getY(t){let e=ar(this.array[t*this.itemSize+1]);return this.normalized&&(e=Xe(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=je(e),this}getZ(t){let e=ar(this.array[t*this.itemSize+2]);return this.normalized&&(e=Xe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=je(e),this}getW(t){let e=ar(this.array[t*this.itemSize+3]);return this.normalized&&(e=Xe(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=je(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=je(e),this.array[t+1]=je(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[t+0]=je(e),this.array[t+1]=je(n),this.array[t+2]=je(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=je(e),this.array[t+1]=je(n),this.array[t+2]=je(i),this.array[t+3]=je(r),this}}class Lt extends se{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Fm=0;const mn=new Vt,Cc=new oe,_s=new C,cn=new Ze,$s=new Ze,Le=new C;class Xt extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qd(t)?Bl:Ol)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Cc.lookAt(t),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Be);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(cn.min,$s.min),cn.expandByPoint(Le),Le.addVectors(cn.max,$s.max),cn.expandByPoint(Le)):(cn.expandByPoint($s.min),cn.expandByPoint($s.max))}cn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Le.fromBufferAttribute(o,l),c&&(_s.fromBufferAttribute(t,l),Le.add(_s)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new se(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let E=0;E<n.count;E++)o[E]=new C,c[E]=new C;const l=new C,u=new C,d=new C,h=new ot,f=new ot,m=new ot,_=new C,g=new C;function p(E,b,S){l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,S),h.fromBufferAttribute(r,E),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,S),u.sub(l),d.sub(l),f.sub(h),m.sub(h);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(L),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(L),o[E].add(_),o[b].add(_),o[S].add(_),c[E].add(g),c[b].add(g),c[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let E=0,b=v.length;E<b;++E){const S=v[E],L=S.start,G=S.count;for(let F=L,H=L+G;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new C,x=new C,D=new C,A=new C;function M(E){D.fromBufferAttribute(i,E),A.copy(D);const b=o[E];y.copy(b),y.sub(D.multiplyScalar(D.dot(b))).normalize(),x.crossVectors(A,b);const L=x.dot(c[E])<0?-1:1;a.setXYZW(E,y.x,y.y,y.z,L)}for(let E=0,b=v.length;E<b;++E){const S=v[E],L=S.start,G=S.count;for(let F=L,H=L+G;F<H;F+=3)M(t.getX(F+0)),M(t.getX(F+1)),M(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new C,r=new C,a=new C,o=new C,c=new C,l=new C,u=new C,d=new C;if(t)for(let h=0,f=t.count;h<f;h+=3){const m=t.getX(h+0),_=t.getX(h+1),g=t.getX(h+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)h[m++]=l[f++]}return new se(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ih=new Vt,Ai=new Vs,jr=new Be,Lh=new C,Qr=new C,ta=new C,ea=new C,Rc=new C,na=new C,Dh=new C,ia=new C;class ee extends oe{constructor(t=new Xt,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(Rc.fromBufferAttribute(d,t),a?na.addScaledVector(Rc,u):na.addScaledVector(Rc.sub(e),u))}e.add(na)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(jr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(jr,Lh)===null||Ai.origin.distanceToSquared(Lh)>(t.far-t.near)**2))&&(Ih.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Ih),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,D=y;x<D;x+=3){const A=o.getX(x),M=o.getX(x+1),E=o.getX(x+2);i=sa(this,p,t,n,l,u,d,A,M,E),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);i=sa(this,a,t,n,l,u,d,v,y,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,D=y;x<D;x+=3){const A=x,M=x+1,E=x+2;i=sa(this,p,t,n,l,u,d,A,M,E),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,y=g+1,x=g+2;i=sa(this,a,t,n,l,u,d,v,y,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Om(s,t,e,n,i,r,a,o){let c;if(t.side===Fe?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Nn,o),c===null)return null;ia.copy(o),ia.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ia);return l<e.near||l>e.far?null:{distance:l,point:ia.clone(),object:s}}function sa(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Qr),s.getVertexPosition(c,ta),s.getVertexPosition(l,ea);const u=Om(s,t,e,n,Qr,ta,ea,Dh);if(u){const d=new C;Qe.getBarycoord(Dh,Qr,ta,ea,d),i&&(u.uv=Qe.getInterpolatedAttribute(i,o,c,l,d,new ot)),r&&(u.uv1=Qe.getInterpolatedAttribute(r,o,c,l,d,new ot)),a&&(u.normal=Qe.getInterpolatedAttribute(a,o,c,l,d,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new C,materialIndex:0};Qe.getNormal(Qr,ta,ea,h.normal),u.face=h,u.barycoord=d}return u}class si extends Xt{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(d,2));function m(_,g,p,v,y,x,D,A,M,E,b){const S=x/M,L=D/E,G=x/2,F=D/2,H=A/2,V=M+1,O=E+1;let Y=0,U=0;const et=new C;for(let rt=0;rt<O;rt++){const ut=rt*L-F;for(let wt=0;wt<V;wt++){const _t=wt*S-G;et[_]=_t*v,et[g]=ut*y,et[p]=H,l.push(et.x,et.y,et.z),et[_]=0,et[g]=0,et[p]=A>0?1:-1,u.push(et.x,et.y,et.z),d.push(wt/M),d.push(1-rt/E),Y+=1}}for(let rt=0;rt<E;rt++)for(let ut=0;ut<M;ut++){const wt=h+ut+V*rt,_t=h+ut+V*(rt+1),Z=h+(ut+1)+V*(rt+1),nt=h+(ut+1)+V*rt;c.push(wt,_t,nt),c.push(_t,Z,nt),U+=6}o.addGroup(f,U,b),f+=U,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function We(s){const t={};for(let e=0;e<s.length;e++){const n=Fs(s[e]);for(const i in n)t[i]=n[i]}return t}function Bm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function rf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const af={clone:Fs,merge:We};var zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends He{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=Bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vo extends oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new C,Uh=new ot,Nh=new ot;class Ue extends Vo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,Uh,Nh),e.subVectors(Nh,Uh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,vs=1;class of extends oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ue(xs,vs,t,e);i.layers=this.layers,this.add(i);const r=new Ue(xs,vs,t,e);r.layers=this.layers,this.add(r);const a=new Ue(xs,vs,t,e);a.layers=this.layers,this.add(a);const o=new Ue(xs,vs,t,e);o.layers=this.layers,this.add(o);const c=new Ue(xs,vs,t,e);c.layers=this.layers,this.add(c);const l=new Ue(xs,vs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Fr extends we{constructor(t,e,n,i,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ei,super(t,e,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cf extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Fr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ce}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new si(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:jn});r.uniforms.tEquirect.value=e;const a=new ee(i,r),o=e.minFilter;return e.minFilter===In&&(e.minFilter=Ce),new of(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Pc=new C,Vm=new C,Hm=new Zt;class gi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Pc.subVectors(n,e).cross(Vm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hm.getNormalMatrix(t),i=this.coplanarPoint(Pc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Be,ra=new C;class Hs{constructor(t=new gi,e=new gi,n=new gi,i=new gi,r=new gi,a=new gi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],d=i[6],h=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],v=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-r,h-l,g-f,x-p).normalize(),n[1].setComponents(c+r,h+l,g+f,x+p).normalize(),n[2].setComponents(c+a,h+u,g+m,x+v).normalize(),n[3].setComponents(c-a,h-u,g-m,x-v).normalize(),n[4].setComponents(c-o,h-d,g-_,x-y).normalize(),e===Ln)n[5].setComponents(c+o,h+d,g+_,x+y).normalize();else if(e===br)n[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ra.x=i.normal.x>0?t.max.x:t.min.x,ra.y=i.normal.y>0?t.max.y:t.min.y,ra.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lf(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Gm(s){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){const m=d[h],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class gn extends Xt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,d=t/o,h=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const v=p*h-a;for(let y=0;y<l;y++){const x=y*d-r;m.push(x,-v,0),_.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const y=v+l*p,x=v+l*(p+1),D=v+1+l*(p+1),A=v+1+l*p;f.push(y,x,A),f.push(x,D,A)}this.setIndex(f),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
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
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jm=`#ifdef USE_AOMAP
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
#endif`,Km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jm=`#ifdef USE_BATCHING
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
#endif`,Qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ng=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ig=`#ifdef USE_IRIDESCENCE
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
#endif`,sg=`#ifdef USE_BUMPMAP
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
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fg=`#define PI 3.141592653589793
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
} // validated`,pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mg=`vec3 transformedNormal = objectNormal;
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
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
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
}`,Lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
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
#endif`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
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
#endif`,Hg=`struct PhysicalMaterial {
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
}`,Gg=`
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qg=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
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
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,K0=`#define DISTANCE
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
}`,j0=`#define DISTANCE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#define LAMBERT
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
}`,a_=`#define LAMBERT
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
}`,o_=`#define MATCAP
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
}`,c_=`#define MATCAP
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
}`,l_=`#define NORMAL
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
}`,h_=`#define NORMAL
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
}`,u_=`#define PHONG
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
}`,d_=`#define PHONG
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
}`,f_=`#define STANDARD
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
}`,p_=`#define STANDARD
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
}`,m_=`#define TOON
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
}`,g_=`#define TOON
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
}`,__=`uniform float size;
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
}`,x_=`uniform vec3 diffuse;
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
}`,v_=`#include <common>
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
}`,y_=`uniform vec3 color;
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
}`,M_=`uniform float rotation;
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
}`,S_=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Wm,alphahash_pars_fragment:Xm,alphamap_fragment:qm,alphamap_pars_fragment:Ym,alphatest_fragment:Zm,alphatest_pars_fragment:$m,aomap_fragment:Jm,aomap_pars_fragment:Km,batching_pars_vertex:jm,batching_vertex:Qm,begin_vertex:tg,beginnormal_vertex:eg,bsdfs:ng,iridescence_fragment:ig,bumpmap_pars_fragment:sg,clipping_planes_fragment:rg,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:og,clipping_planes_vertex:cg,color_fragment:lg,color_pars_fragment:hg,color_pars_vertex:ug,color_vertex:dg,common:fg,cube_uv_reflection_fragment:pg,defaultnormal_vertex:mg,displacementmap_pars_vertex:gg,displacementmap_vertex:_g,emissivemap_fragment:xg,emissivemap_pars_fragment:vg,colorspace_fragment:yg,colorspace_pars_fragment:Mg,envmap_fragment:Sg,envmap_common_pars_fragment:bg,envmap_pars_fragment:wg,envmap_pars_vertex:Eg,envmap_physical_pars_fragment:Fg,envmap_vertex:Tg,fog_vertex:Ag,fog_pars_vertex:Cg,fog_fragment:Rg,fog_pars_fragment:Pg,gradientmap_pars_fragment:Ig,lightmap_pars_fragment:Lg,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Ug,lights_pars_begin:Ng,lights_toon_fragment:Og,lights_toon_pars_fragment:Bg,lights_phong_fragment:zg,lights_phong_pars_fragment:kg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Gg,lights_fragment_maps:Wg,lights_fragment_end:Xg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:$g,map_fragment:Jg,map_pars_fragment:Kg,map_particle_fragment:jg,map_particle_pars_fragment:Qg,metalnessmap_fragment:t0,metalnessmap_pars_fragment:e0,morphinstance_vertex:n0,morphcolor_vertex:i0,morphnormal_vertex:s0,morphtarget_pars_vertex:r0,morphtarget_vertex:a0,normal_fragment_begin:o0,normal_fragment_maps:c0,normal_pars_fragment:l0,normal_pars_vertex:h0,normal_vertex:u0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,opaque_fragment:_0,packing:x0,premultiplied_alpha_fragment:v0,project_vertex:y0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:T0,shadowmap_vertex:A0,shadowmask_pars_fragment:C0,skinbase_vertex:R0,skinning_pars_vertex:P0,skinning_vertex:I0,skinnormal_vertex:L0,specularmap_fragment:D0,specularmap_pars_fragment:U0,tonemapping_fragment:N0,tonemapping_pars_fragment:F0,transmission_fragment:O0,transmission_pars_fragment:B0,uv_pars_fragment:z0,uv_pars_vertex:k0,uv_vertex:V0,worldpos_vertex:H0,background_vert:G0,background_frag:W0,backgroundCube_vert:X0,backgroundCube_frag:q0,cube_vert:Y0,cube_frag:Z0,depth_vert:$0,depth_frag:J0,distanceRGBA_vert:K0,distanceRGBA_frag:j0,equirect_vert:Q0,equirect_frag:t_,linedashed_vert:e_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:a_,meshmatcap_vert:o_,meshmatcap_frag:c_,meshnormal_vert:l_,meshnormal_frag:h_,meshphong_vert:u_,meshphong_frag:d_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:__,points_frag:x_,shadow_vert:v_,shadow_frag:y_,sprite_vert:M_,sprite_frag:S_},St={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},bn={basic:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ft(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:We([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:We([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new ft(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:We([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:We([St.points,St.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:We([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:We([St.common,St.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:We([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:We([St.sprite,St.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:We([St.common,St.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:We([St.lights,St.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};bn.physical={uniforms:We([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const aa={r:0,b:0,g:0},Ri=new un,b_=new Vt;function w_(s,t,e,n,i,r,a){const o=new ft(0);let c=r===!0?0:1,l,u,d=null,h=0,f=null;function m(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const x=m(v);x===null?p(o,c):x&&x.isColor&&(p(x,1),y=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,y){const x=m(y);x&&(x.isCubeTexture||x.mapping===zs)?(u===void 0&&(u=new ee(new si(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Fs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ri.copy(y.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(b_.makeRotationFromEuler(Ri)),u.material.toneMapped=ie.getTransfer(x.colorSpace)!==me,(d!==x||h!==x.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,f=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ee(new gn(2,2),new dn({name:"BackgroundMaterial",uniforms:Fs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ie.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=x,h=x.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(aa,rf(s)),n.buffers.color.setClear(aa.r,aa.g,aa.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(o,c)},render:_,addToRenderList:g}}function E_(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,a=!1;function o(S,L,G,F,H){let V=!1;const O=d(F,G,L);r!==O&&(r=O,l(r.object)),V=f(S,F,G,H),V&&m(S,F,G,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,x(S,L,G,F),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function d(S,L,G){const F=G.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let V=H[L.id];V===void 0&&(V={},H[L.id]=V);let O=V[F];return O===void 0&&(O=h(c()),V[F]=O),O}function h(S){const L=[],G=[],F=[];for(let H=0;H<e;H++)L[H]=0,G[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:F,object:S,attributes:{},index:null}}function f(S,L,G,F){const H=r.attributes,V=L.attributes;let O=0;const Y=G.getAttributes();for(const U in Y)if(Y[U].location>=0){const rt=H[U];let ut=V[U];if(ut===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),rt===void 0||rt.attribute!==ut||ut&&rt.data!==ut.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function m(S,L,G,F){const H={},V=L.attributes;let O=0;const Y=G.getAttributes();for(const U in Y)if(Y[U].location>=0){let rt=V[U];rt===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor));const ut={};ut.attribute=rt,rt&&rt.data&&(ut.data=rt.data),H[U]=ut,O++}r.attributes=H,r.attributesNum=O,r.index=F}function _(){const S=r.newAttributes;for(let L=0,G=S.length;L<G;L++)S[L]=0}function g(S){p(S,0)}function p(S,L){const G=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;G[S]=1,F[S]===0&&(s.enableVertexAttribArray(S),F[S]=1),H[S]!==L&&(s.vertexAttribDivisor(S,L),H[S]=L)}function v(){const S=r.newAttributes,L=r.enabledAttributes;for(let G=0,F=L.length;G<F;G++)L[G]!==S[G]&&(s.disableVertexAttribArray(G),L[G]=0)}function y(S,L,G,F,H,V,O){O===!0?s.vertexAttribIPointer(S,L,G,H,V):s.vertexAttribPointer(S,L,G,F,H,V)}function x(S,L,G,F){_();const H=F.attributes,V=G.getAttributes(),O=L.defaultAttributeValues;for(const Y in V){const U=V[Y];if(U.location>=0){let et=H[Y];if(et===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),et!==void 0){const rt=et.normalized,ut=et.itemSize,wt=t.get(et);if(wt===void 0)continue;const _t=wt.buffer,Z=wt.type,nt=wt.bytesPerElement,yt=Z===s.INT||Z===s.UNSIGNED_INT||et.gpuType===Lo;if(et.isInterleavedBufferAttribute){const at=et.data,Rt=at.stride,It=et.offset;if(at.isInstancedInterleavedBuffer){for(let xt=0;xt<U.locationSize;xt++)p(U.location+xt,at.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let xt=0;xt<U.locationSize;xt++)g(U.location+xt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let xt=0;xt<U.locationSize;xt++)y(U.location+xt,ut/U.locationSize,Z,rt,Rt*nt,(It+ut/U.locationSize*xt)*nt,yt)}else{if(et.isInstancedBufferAttribute){for(let at=0;at<U.locationSize;at++)p(U.location+at,et.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let at=0;at<U.locationSize;at++)g(U.location+at);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let at=0;at<U.locationSize;at++)y(U.location+at,ut/U.locationSize,Z,rt,ut*nt,ut/U.locationSize*at*nt,yt)}}else if(O!==void 0){const rt=O[Y];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(U.location,rt);break;case 3:s.vertexAttrib3fv(U.location,rt);break;case 4:s.vertexAttrib4fv(U.location,rt);break;default:s.vertexAttrib1fv(U.location,rt)}}}}v()}function D(){E();for(const S in n){const L=n[S];for(const G in L){const F=L[G];for(const H in F)u(F[H].object),delete F[H];delete L[G]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const G in L){const F=L[G];for(const H in F)u(F[H].object),delete F[H];delete L[G]}delete n[S.id]}function M(S){for(const L in n){const G=n[L];if(G[S.id]===void 0)continue;const F=G[S.id];for(const H in F)u(F[H].object),delete F[H];delete G[S.id]}}function E(){b(),a=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function T_(s,t,e){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,d){d!==0&&(s.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function o(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let m=0;m<d;m++)f+=u[m];e.update(f,n,1)}function c(l,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],u[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_]*h[_];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function A_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(M){return!(M!==qe&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const E=M===ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==Fn&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==en&&!E)}function c(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:D,maxSamples:A}}function C_(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new gi,o=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?u(null):l();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=u(m,h,y,f);for(let D=0;D!==y;++D)x[D]=e[D];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)a.copy(d[y]).applyMatrix4(v,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function R_(s){let t=new WeakMap;function e(a,o){return o===_r?a.mapping=ei:o===xr&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_r||o===xr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new cf(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ho extends Vo{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ps=4,Fh=[.125,.215,.35,.446,.526,.582],Vi=20,Ic=new Ho,Oh=new ft;let Lc=null,Dc=0,Uc=0,Nc=!1;const ki=(1+Math.sqrt(5))/2,ys=1/ki,Bh=[new C(-ki,ys,0),new C(ki,ys,0),new C(-ys,0,ki),new C(ys,0,ki),new C(0,ki,-ys),new C(0,ki,ys),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lc,Dc,Uc),this._renderer.xr.enabled=Nc,t.scissorTest=!1,oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ei||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:ks,format:qe,colorSpace:ns,depthBuffer:!1},i=zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(r)),this._blurMaterial=I_(r,t,e)}return i}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,Ic)}_sceneToCubeUV(t,e,n,i){const o=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Oh),u.toneMapping=Qn,u.autoClear=!1;const f=new tn({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),m=new ee(new si,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Oh),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const y=this._cubeSize;oa(i,v*y,p>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(m,o),u.render(t,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ei||t.mapping===yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;oa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ic)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bh[(i-r-1)%Bh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ee(this._lodPlanes[i],l),h=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Vi;g>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Vi}`);const p=[];let v=0;for(let M=0;M<Vi;++M){const E=M/_,b=Math.exp(-E*E/2);p.push(b),M===0?v+=b:M<g&&(v+=2*b)}for(let M=0;M<p.length;M++)p[M]=p[M]/v;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-n;const x=this._sizeLods[i],D=3*x*(i>y-Ps?i-y+Ps:0),A=4*(this._cubeSize-x);oa(e,D,A,3*x,2*x),c.setRenderTarget(e),c.render(d,Ic)}}function P_(s){const t=[],e=[],n=[];let i=s;const r=s-Ps+1+Fh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Ps?c=Fh[a-s+Ps-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let A=0;A<f;A++){const M=A%3*2/3-1,E=A>2?0:-1,b=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];v.set(b,_*m*A),y.set(h,g*m*A);const S=[A,A,A,A,A,A];x.set(S,p*m*A)}const D=new Xt;D.setAttribute("position",new se(v,_)),D.setAttribute("uv",new se(y,g)),D.setAttribute("faceIndex",new se(x,p)),t.push(D),i>Ps&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zh(s,t,e){const n=new wn(s,t,e);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function I_(s,t,e){const n=new Float32Array(Vi),i=new C(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function kh(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Vh(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function L_(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===_r||c===xr,u=c===ei||c===yi;if(l||u){let d=t.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new cl(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new cl(s)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function D_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function U_(s,t,e,n){const i={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);for(const m in h.morphAttributes){const _=h.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}h.removeEventListener("dispose",a),delete i[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const m in h)t.update(h[m],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],s.ARRAY_BUFFER)}}function l(d){const h=[],f=d.index,m=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const D=v[y+0],A=v[y+1],M=v[y+2];h.push(D,A,A,M,M,D)}}else if(m!==void 0){const v=m.array;_=m.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const D=y+0,A=y+1,M=y+2;h.push(D,A,A,M,M,D)}}else return;const g=new(Qd(h)?Bl:Ol)(h,1);g.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function N_(s,t,e){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,f){s.drawElements(n,f,r,h*a),e.update(f,n,1)}function l(h,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,h*a,m),e.update(f,n,m))}function u(h,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function d(h,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)l(h[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function F_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function O_(s,t,e){const n=new WeakMap,i=new ae;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let b=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let x=o.attributes.position.count*y,D=1;x>t.maxTextureSize&&(D=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const A=new Float32Array(x*D*4*d),M=new zo(A,x,D,d);M.type=en,M.needsUpdate=!0;const E=y*4;for(let S=0;S<d;S++){const L=g[S],G=p[S],F=v[S],H=x*D*4*S;for(let V=0;V<L.count;V++){const O=V*E;f===!0&&(i.fromBufferAttribute(L,V),A[H+O+0]=i.x,A[H+O+1]=i.y,A[H+O+2]=i.z,A[H+O+3]=0),m===!0&&(i.fromBufferAttribute(G,V),A[H+O+4]=i.x,A[H+O+5]=i.y,A[H+O+6]=i.z,A[H+O+7]=0),_===!0&&(i.fromBufferAttribute(F,V),A[H+O+8]=i.x,A[H+O+9]=i.y,A[H+O+10]=i.z,A[H+O+11]=F.itemSize===4?i.w:1)}}h={count:d,texture:M,size:new ot(x,D)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function B_(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class kl extends we{constructor(t,e,n,i,r,a,o,c,l,u=Yi){if(u!==Yi&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Yi&&(n=ni),n===void 0&&u===Qi&&(n=ji),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Oe,this.minFilter=c!==void 0?c:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const hf=new we,Hh=new kl(1,1),uf=new zo,df=new Fl,ff=new Fr,Gh=[],Wh=[],Xh=new Float32Array(16),qh=new Float32Array(9),Yh=new Float32Array(4);function Gs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Gh[i];if(r===void 0&&(r=new Float32Array(i),Gh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Go(s,t){let e=Wh[t];e===void 0&&(e=new Int32Array(t),Wh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function z_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function k_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function V_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function H_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function G_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;Yh.set(n),s.uniformMatrix2fv(this.addr,!1,Yh),Pe(e,n)}}function W_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;qh.set(n),s.uniformMatrix3fv(this.addr,!1,qh),Pe(e,n)}}function X_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;Xh.set(n),s.uniformMatrix4fv(this.addr,!1,Xh),Pe(e,n)}}function q_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Y_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function Z_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function $_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function J_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function K_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function j_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function Q_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function tx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Hh.compareFunction=Ul,r=Hh):r=hf,e.setTexture2D(t||r,i)}function ex(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||df,i)}function nx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ff,i)}function ix(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||uf,i)}function sx(s){switch(s){case 5126:return z_;case 35664:return k_;case 35665:return V_;case 35666:return H_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return Z_;case 35669:case 35673:return $_;case 5125:return J_;case 36294:return K_;case 36295:return j_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(s,t){s.uniform1fv(this.addr,t)}function ax(s,t){const e=Gs(t,this.size,2);s.uniform2fv(this.addr,e)}function ox(s,t){const e=Gs(t,this.size,3);s.uniform3fv(this.addr,e)}function cx(s,t){const e=Gs(t,this.size,4);s.uniform4fv(this.addr,e)}function lx(s,t){const e=Gs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function hx(s,t){const e=Gs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ux(s,t){const e=Gs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function dx(s,t){s.uniform1iv(this.addr,t)}function fx(s,t){s.uniform2iv(this.addr,t)}function px(s,t){s.uniform3iv(this.addr,t)}function mx(s,t){s.uniform4iv(this.addr,t)}function gx(s,t){s.uniform1uiv(this.addr,t)}function _x(s,t){s.uniform2uiv(this.addr,t)}function xx(s,t){s.uniform3uiv(this.addr,t)}function vx(s,t){s.uniform4uiv(this.addr,t)}function yx(s,t,e){const n=this.cache,i=t.length,r=Go(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||hf,r[a])}function Mx(s,t,e){const n=this.cache,i=t.length,r=Go(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||df,r[a])}function Sx(s,t,e){const n=this.cache,i=t.length,r=Go(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ff,r[a])}function bx(s,t,e){const n=this.cache,i=t.length,r=Go(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||uf,r[a])}function wx(s){switch(s){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return cx;case 35674:return lx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return bx}}class Ex{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sx(e.type)}}class Tx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wx(e.type)}}class Ax{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function Zh(s,t){s.seq.push(t),s.map[t.id]=t}function Cx(s,t,e){const n=s.name,i=n.length;for(Fc.lastIndex=0;;){const r=Fc.exec(n),a=Fc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Zh(e,l===void 0?new Ex(o,s,t):new Tx(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Ax(o),Zh(e,d)),e=d}}}class Va{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Cx(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function $h(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Rx=37297;let Px=0;function Ix(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Jh=new Zt;function Lx(s){ie._getMatrix(Jh,ie.workingColorSpace,s);const t=`mat3( ${Jh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case Nr:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Kh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Ix(s.getShaderSource(t),a)}else return i}function Dx(s,t){const e=Lx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ux(s,t){let e;switch(t){case Dd:e="Linear";break;case Ud:e="Reinhard";break;case Nd:e="Cineon";break;case Sl:e="ACESFilmic";break;case Od:e="AgX";break;case Bd:e="Neutral";break;case Fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ca=new C;function Nx(){ie.getLuminanceCoefficients(ca);const s=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function Ox(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bx(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function or(s){return s!==""}function jh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(s){return s.replace(zx,Vx)}const kx=new Map;function Vx(s,t){let e=jt[t];if(e===void 0){const n=kx.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ll(e)}const Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(s){return s.replace(Hx,Gx)}function Gx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function eu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ml?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===dd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Xx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ei:case yi:t="ENVMAP_TYPE_CUBE";break;case zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Yx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dr:t="ENVMAP_BLENDING_MULTIPLY";break;case Id:t="ENVMAP_BLENDING_MIX";break;case Ld:t="ENVMAP_BLENDING_ADD";break}return t}function Zx(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $x(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Wx(e),l=Xx(e),u=qx(e),d=Yx(e),h=Zx(e),f=Fx(e),m=Ox(r),_=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(or).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(or).join(`
`),p.length>0&&(p+=`
`)):(g=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Ux("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),Nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),a=ll(a),a=jh(a,e),a=Qh(a,e),o=ll(o),o=jh(o,e),o=Qh(o,e),a=tu(a),o=tu(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+a,x=v+p+o,D=$h(i,i.VERTEX_SHADER,y),A=$h(i,i.FRAGMENT_SHADER,x);i.attachShader(_,D),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function M(L){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(D).trim(),H=i.getShaderInfoLog(A).trim();let V=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,D,A);else{const Y=Kh(i,D,"vertex"),U=Kh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+Y+`
`+U)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(F===""||H==="")&&(O=!1);O&&(L.diagnostics={runnable:V,programLog:G,vertexShader:{log:F,prefix:g},fragmentShader:{log:H,prefix:p}})}i.deleteShader(D),i.deleteShader(A),E=new Va(i,_),b=Bx(i,_)}let E;this.getUniforms=function(){return E===void 0&&M(this),E};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Rx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Px++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}let Jx=0;class Kx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jx(t),e.set(t,n)),n}}class jx{constructor(t){this.id=Jx++,this.code=t,this.usedTimes=0}}function Qx(s,t,e,n,i,r,a){const o=new ko,c=new Kx,l=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,S,L,G,F){const H=G.fog,V=F.geometry,O=b.isMeshStandardMaterial?G.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||O),U=Y&&Y.mapping===zs?Y.image.height:null,et=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=rt!==void 0?rt.length:0;let wt=0;V.morphAttributes.position!==void 0&&(wt=1),V.morphAttributes.normal!==void 0&&(wt=2),V.morphAttributes.color!==void 0&&(wt=3);let _t,Z,nt,yt;if(et){const de=bn[et];_t=de.vertexShader,Z=de.fragmentShader}else _t=b.vertexShader,Z=b.fragmentShader,c.update(b),nt=c.getVertexShaderID(b),yt=c.getFragmentShaderID(b);const at=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),It=F.isInstancedMesh===!0,xt=F.isBatchedMesh===!0,X=!!b.map,N=!!b.matcap,W=!!Y,I=!!b.aoMap,R=!!b.lightMap,tt=!!b.bumpMap,dt=!!b.normalMap,ht=!!b.displacementMap,Dt=!!b.emissiveMap,bt=!!b.metalnessMap,P=!!b.roughnessMap,w=b.anisotropy>0,q=b.clearcoat>0,Q=b.dispersion>0,ct=b.iridescence>0,j=b.sheen>0,Mt=b.transmission>0,pt=w&&!!b.anisotropyMap,Tt=q&&!!b.clearcoatMap,$t=q&&!!b.clearcoatNormalMap,lt=q&&!!b.clearcoatRoughnessMap,Pt=ct&&!!b.iridescenceMap,kt=ct&&!!b.iridescenceThicknessMap,Gt=j&&!!b.sheenColorMap,vt=j&&!!b.sheenRoughnessMap,Ht=!!b.specularMap,Ot=!!b.specularColorMap,ue=!!b.specularIntensityMap,B=Mt&&!!b.transmissionMap,gt=Mt&&!!b.thicknessMap,K=!!b.gradientMap,it=!!b.alphaMap,Et=b.alphaTest>0,At=!!b.alphaHash,qt=!!b.extensions;let ve=Qn;b.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ve=s.toneMapping);const Ie={shaderID:et,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:Z,defines:b.defines,customVertexShaderID:nt,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:xt,batchingColor:xt&&F._colorsTexture!==null,instancing:It,instancingColor:It&&F.instanceColor!==null,instancingMorph:It&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ns,alphaToCoverage:!!b.alphaToCoverage,map:X,matcap:N,envMap:W,envMapMode:W&&Y.mapping,envMapCubeUVHeight:U,aoMap:I,lightMap:R,bumpMap:tt,normalMap:dt,displacementMap:h&&ht,emissiveMap:Dt,normalMapObjectSpace:dt&&b.normalMapType===Xd,normalMapTangentSpace:dt&&b.normalMapType===Si,metalnessMap:bt,roughnessMap:P,anisotropy:w,anisotropyMap:pt,clearcoat:q,clearcoatMap:Tt,clearcoatNormalMap:$t,clearcoatRoughnessMap:lt,dispersion:Q,iridescence:ct,iridescenceMap:Pt,iridescenceThicknessMap:kt,sheen:j,sheenColorMap:Gt,sheenRoughnessMap:vt,specularMap:Ht,specularColorMap:Ot,specularIntensityMap:ue,transmission:Mt,transmissionMap:B,thicknessMap:gt,gradientMap:K,opaque:b.transparent===!1&&b.blending===qi&&b.alphaToCoverage===!1,alphaMap:it,alphaTest:Et,alphaHash:At,combine:b.combine,mapUv:X&&_(b.map.channel),aoMapUv:I&&_(b.aoMap.channel),lightMapUv:R&&_(b.lightMap.channel),bumpMapUv:tt&&_(b.bumpMap.channel),normalMapUv:dt&&_(b.normalMap.channel),displacementMapUv:ht&&_(b.displacementMap.channel),emissiveMapUv:Dt&&_(b.emissiveMap.channel),metalnessMapUv:bt&&_(b.metalnessMap.channel),roughnessMapUv:P&&_(b.roughnessMap.channel),anisotropyMapUv:pt&&_(b.anisotropyMap.channel),clearcoatMapUv:Tt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:$t&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(b.sheenRoughnessMap.channel),specularMapUv:Ht&&_(b.specularMap.channel),specularColorMapUv:Ot&&_(b.specularColorMap.channel),specularIntensityMapUv:ue&&_(b.specularIntensityMap.channel),transmissionMapUv:B&&_(b.transmissionMap.channel),thicknessMapUv:gt&&_(b.thicknessMap.channel),alphaMapUv:it&&_(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(dt||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(X||it),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:wt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:X&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===me,decodeVideoTextureEmissive:Dt&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_n,flipSided:b.side===Fe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&b.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(v(S,b),y(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){const S=m[b.type];let L;if(S){const G=bn[S];L=af.clone(G.uniforms)}else L=b.uniforms;return L}function D(b,S){let L;for(let G=0,F=u.length;G<F;G++){const H=u[G];if(H.cacheKey===S){L=H,++L.usedTimes;break}}return L===void 0&&(L=new $x(s,S,b,r),u.push(L)),L}function A(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function M(b){c.remove(b)}function E(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:A,releaseShaderCache:M,programs:u,dispose:E}}function tv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ev(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function nu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function iu(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,h,f,m,_,g){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},s[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=_,p.group=g),t++,p}function o(d,h,f,m,_,g){const p=a(d,h,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,h,f,m,_,g){const p=a(d,h,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,h){e.length>1&&e.sort(d||ev),n.length>1&&n.sort(h||nu),i.length>1&&i.sort(h||nu)}function u(){for(let d=t,h=s.length;d<h;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function nv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new iu,s.set(n,[a])):i>=r.length?(a=new iu,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function iv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new ft};break;case"SpotLight":e={position:new C,direction:new C,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function sv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let rv=0;function av(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ov(s){const t=new iv,e=sv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const i=new C,r=new Vt,a=new Vt;function o(l){let u=0,d=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,y=0,x=0,D=0,A=0,M=0;l.sort(av);for(let b=0,S=l.length;b<S;b++){const L=l[b],G=L.color,F=L.intensity,H=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=G.r*F,d+=G.g*F,h+=G.b*F;else if(L.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(L.sh.coefficients[O],F);M++}else if(L.isDirectionalLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,U=e.get(L);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=O,f++}else if(L.isSpotLight){const O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(G).multiplyScalar(F),O.distance=H,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,n.spot[_]=O;const Y=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,Y.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=Y.matrix,L.castShadow){const U=e.get(L);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,n.spotShadow[_]=U,n.spotShadowMap[_]=V,x++}_++}else if(L.isRectAreaLight){const O=t.get(L);O.color.copy(G).multiplyScalar(F),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=O,g++}else if(L.isPointLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const Y=L.shadow,U=e.get(L);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,U.shadowCameraNear=Y.camera.near,U.shadowCameraFar=Y.camera.far,n.pointShadow[m]=U,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=L.shadow.matrix,y++}n.point[m]=O,m++}else if(L.isHemisphereLight){const O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(F),O.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[p]=O,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const E=n.hash;(E.directionalLength!==f||E.pointLength!==m||E.spotLength!==_||E.rectAreaLength!==g||E.hemiLength!==p||E.numDirectionalShadows!==v||E.numPointShadows!==y||E.numSpotShadows!==x||E.numSpotMaps!==D||E.numLightProbes!==M)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=M,E.directionalLength=f,E.pointLength=m,E.spotLength=_,E.rectAreaLength=g,E.hemiLength=p,E.numDirectionalShadows=v,E.numPointShadows=y,E.numSpotShadows=x,E.numSpotMaps=D,E.numLightProbes=M,n.version=rv++)}function c(l,u){let d=0,h=0,f=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:n}}function su(s){const t=new ov(s),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function cv(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new su(s),t.set(i,[o])):r>=a.length?(o=new su(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Vl extends He{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hl extends He{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
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
}`;function uv(s,t,e){let n=new Hs;const i=new ot,r=new ot,a=new ae,o=new Vl({depthPacking:Wd}),c=new Hl,l={},u=e.maxTextureSize,d={[Nn]:Fe,[Fe]:Nn,[_n]:_n},h=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:lv,fragmentShader:hv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new Xt;m.setAttribute("position",new se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ee(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let p=this.type;this.render=function(A,M,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),S=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),G=s.state;G.setBlending(jn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const F=p!==Pn&&this.type===Pn,H=p===Pn&&this.type!==Pn;for(let V=0,O=A.length;V<O;V++){const Y=A[V],U=Y.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const et=U.getFrameExtents();if(i.multiply(et),r.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/et.x),i.x=r.x*et.x,U.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/et.y),i.y=r.y*et.y,U.mapSize.y=r.y)),U.map===null||F===!0||H===!0){const ut=this.type!==Pn?{minFilter:Oe,magFilter:Oe}:{};U.map!==null&&U.map.dispose(),U.map=new wn(i.x,i.y,ut),U.map.texture.name=Y.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const rt=U.getViewportCount();for(let ut=0;ut<rt;ut++){const wt=U.getViewport(ut);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),G.viewport(a),U.updateMatrices(Y,ut),n=U.getFrustum(),x(M,E,U.camera,Y,this.type)}U.isPointLightShadow!==!0&&this.type===Pn&&v(U,E),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,S,L)};function v(A,M){const E=t.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wn(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(M,null,E,h,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(M,null,E,f,_,null)}function y(A,M,E,b){let S=null;const L=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=E.isPointLight===!0?c:o,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const G=S.uuid,F=M.uuid;let H=l[G];H===void 0&&(H={},l[G]=H);let V=H[F];V===void 0&&(V=S.clone(),H[F]=V,M.addEventListener("dispose",D)),S=V}if(S.visible=M.visible,S.wireframe=M.wireframe,b===Pn?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:d[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=s.properties.get(S);G.light=E}return S}function x(A,M,E,b,S){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);const F=t.update(A),H=A.material;if(Array.isArray(H)){const V=F.groups;for(let O=0,Y=V.length;O<Y;O++){const U=V[O],et=H[U.materialIndex];if(et&&et.visible){const rt=y(A,et,b,S);A.onBeforeShadow(s,A,M,E,F,rt,U),s.renderBufferDirect(E,null,F,rt,A,U),A.onAfterShadow(s,A,M,E,F,rt,U)}}}else if(H.visible){const V=y(A,H,b,S);A.onBeforeShadow(s,A,M,E,F,V,null),s.renderBufferDirect(E,null,F,V,A,null),A.onAfterShadow(s,A,M,E,F,V,null)}}const G=A.children;for(let F=0,H=G.length;F<H;F++)x(G[F],M,E,b,S)}function D(A){A.target.removeEventListener("dispose",D);for(const E in l){const b=l[E],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const dv={[Wa]:Xa,[qa]:$a,[Ya]:Ja,[Ji]:Za,[Xa]:Wa,[$a]:qa,[Ja]:Ya,[Za]:Ji};function fv(s,t){function e(){let B=!1;const gt=new ae;let K=null;const it=new ae(0,0,0,0);return{setMask:function(Et){K!==Et&&!B&&(s.colorMask(Et,Et,Et,Et),K=Et)},setLocked:function(Et){B=Et},setClear:function(Et,At,qt,ve,Ie){Ie===!0&&(Et*=ve,At*=ve,qt*=ve),gt.set(Et,At,qt,ve),it.equals(gt)===!1&&(s.clearColor(Et,At,qt,ve),it.copy(gt))},reset:function(){B=!1,K=null,it.set(-1,0,0,0)}}}function n(){let B=!1,gt=!1,K=null,it=null,Et=null;return{setReversed:function(At){if(gt!==At){const qt=t.get("EXT_clip_control");gt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const ve=Et;Et=null,this.setClear(ve)}gt=At},getReversed:function(){return gt},setTest:function(At){At?at(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(At){K!==At&&!B&&(s.depthMask(At),K=At)},setFunc:function(At){if(gt&&(At=dv[At]),it!==At){switch(At){case Wa:s.depthFunc(s.NEVER);break;case Xa:s.depthFunc(s.ALWAYS);break;case qa:s.depthFunc(s.LESS);break;case Ji:s.depthFunc(s.LEQUAL);break;case Ya:s.depthFunc(s.EQUAL);break;case Za:s.depthFunc(s.GEQUAL);break;case $a:s.depthFunc(s.GREATER);break;case Ja:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=At}},setLocked:function(At){B=At},setClear:function(At){Et!==At&&(gt&&(At=1-At),s.clearDepth(At),Et=At)},reset:function(){B=!1,K=null,it=null,Et=null,gt=!1}}}function i(){let B=!1,gt=null,K=null,it=null,Et=null,At=null,qt=null,ve=null,Ie=null;return{setTest:function(de){B||(de?at(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(de){gt!==de&&!B&&(s.stencilMask(de),gt=de)},setFunc:function(de,sn,fn){(K!==de||it!==sn||Et!==fn)&&(s.stencilFunc(de,sn,fn),K=de,it=sn,Et=fn)},setOp:function(de,sn,fn){(At!==de||qt!==sn||ve!==fn)&&(s.stencilOp(de,sn,fn),At=de,qt=sn,ve=fn)},setLocked:function(de){B=de},setClear:function(de){Ie!==de&&(s.clearStencil(de),Ie=de)},reset:function(){B=!1,gt=null,K=null,it=null,Et=null,At=null,qt=null,ve=null,Ie=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,D=null,A=null,M=new ft(0,0,0),E=0,b=!1,S=null,L=null,G=null,F=null,H=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(U)[1]),O=Y>=1):U.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),O=Y>=2);let et=null,rt={};const ut=s.getParameter(s.SCISSOR_BOX),wt=s.getParameter(s.VIEWPORT),_t=new ae().fromArray(ut),Z=new ae().fromArray(wt);function nt(B,gt,K,it){const Et=new Uint8Array(4),At=s.createTexture();s.bindTexture(B,At),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<K;qt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(gt+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return At}const yt={};yt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(s.DEPTH_TEST),a.setFunc(Ji),tt(!1),dt(nl),at(s.CULL_FACE),I(jn);function at(B){u[B]!==!0&&(s.enable(B),u[B]=!0)}function Rt(B){u[B]!==!1&&(s.disable(B),u[B]=!1)}function It(B,gt){return d[B]!==gt?(s.bindFramebuffer(B,gt),d[B]=gt,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=gt),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function xt(B,gt){let K=f,it=!1;if(B){K=h.get(gt),K===void 0&&(K=[],h.set(gt,K));const Et=B.textures;if(K.length!==Et.length||K[0]!==s.COLOR_ATTACHMENT0){for(let At=0,qt=Et.length;At<qt;At++)K[At]=s.COLOR_ATTACHMENT0+At;K.length=Et.length,it=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,it=!0);it&&s.drawBuffers(K)}function X(B){return m!==B?(s.useProgram(B),m=B,!0):!1}const N={[_i]:s.FUNC_ADD,[pd]:s.FUNC_SUBTRACT,[md]:s.FUNC_REVERSE_SUBTRACT};N[gd]=s.MIN,N[_d]=s.MAX;const W={[xd]:s.ZERO,[vd]:s.ONE,[yd]:s.SRC_COLOR,[Ha]:s.SRC_ALPHA,[Td]:s.SRC_ALPHA_SATURATE,[wd]:s.DST_COLOR,[Sd]:s.DST_ALPHA,[Md]:s.ONE_MINUS_SRC_COLOR,[Ga]:s.ONE_MINUS_SRC_ALPHA,[Ed]:s.ONE_MINUS_DST_COLOR,[bd]:s.ONE_MINUS_DST_ALPHA,[Ad]:s.CONSTANT_COLOR,[Cd]:s.ONE_MINUS_CONSTANT_COLOR,[Rd]:s.CONSTANT_ALPHA,[Pd]:s.ONE_MINUS_CONSTANT_ALPHA};function I(B,gt,K,it,Et,At,qt,ve,Ie,de){if(B===jn){_===!0&&(Rt(s.BLEND),_=!1);return}if(_===!1&&(at(s.BLEND),_=!0),B!==fd){if(B!==g||de!==b){if((p!==_i||x!==_i)&&(s.blendEquation(s.FUNC_ADD),p=_i,x=_i),de)switch(B){case qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ls:s.blendFunc(s.ONE,s.ONE);break;case il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ls:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}v=null,y=null,D=null,A=null,M.set(0,0,0),E=0,g=B,b=de}return}Et=Et||gt,At=At||K,qt=qt||it,(gt!==p||Et!==x)&&(s.blendEquationSeparate(N[gt],N[Et]),p=gt,x=Et),(K!==v||it!==y||At!==D||qt!==A)&&(s.blendFuncSeparate(W[K],W[it],W[At],W[qt]),v=K,y=it,D=At,A=qt),(ve.equals(M)===!1||Ie!==E)&&(s.blendColor(ve.r,ve.g,ve.b,Ie),M.copy(ve),E=Ie),g=B,b=!1}function R(B,gt){B.side===_n?Rt(s.CULL_FACE):at(s.CULL_FACE);let K=B.side===Fe;gt&&(K=!K),tt(K),B.blending===qi&&B.transparent===!1?I(jn):I(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const it=B.stencilWrite;o.setTest(it),it&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Dt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(B){S!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),S=B)}function dt(B){B!==hd?(at(s.CULL_FACE),B!==L&&(B===nl?s.cullFace(s.BACK):B===ud?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),L=B}function ht(B){B!==G&&(O&&s.lineWidth(B),G=B)}function Dt(B,gt,K){B?(at(s.POLYGON_OFFSET_FILL),(F!==gt||H!==K)&&(s.polygonOffset(gt,K),F=gt,H=K)):Rt(s.POLYGON_OFFSET_FILL)}function bt(B){B?at(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function P(B){B===void 0&&(B=s.TEXTURE0+V-1),et!==B&&(s.activeTexture(B),et=B)}function w(B,gt,K){K===void 0&&(et===null?K=s.TEXTURE0+V-1:K=et);let it=rt[K];it===void 0&&(it={type:void 0,texture:void 0},rt[K]=it),(it.type!==B||it.texture!==gt)&&(et!==K&&(s.activeTexture(K),et=K),s.bindTexture(B,gt||yt[B]),it.type=B,it.texture=gt)}function q(){const B=rt[et];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $t(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function kt(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Gt(B){_t.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),_t.copy(B))}function vt(B){Z.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Z.copy(B))}function Ht(B,gt){let K=l.get(gt);K===void 0&&(K=new WeakMap,l.set(gt,K));let it=K.get(B);it===void 0&&(it=s.getUniformBlockIndex(gt,B.name),K.set(B,it))}function Ot(B,gt){const it=l.get(gt).get(B);c.get(gt)!==it&&(s.uniformBlockBinding(gt,it,B.__bindingPointIndex),c.set(gt,it))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},et=null,rt={},d={},h=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,D=null,A=null,M=new ft(0,0,0),E=0,b=!1,S=null,L=null,G=null,F=null,H=null,_t.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Rt,bindFramebuffer:It,drawBuffers:xt,useProgram:X,setBlending:I,setMaterial:R,setFlipSided:tt,setCullFace:dt,setLineWidth:ht,setPolygonOffset:Dt,setScissorTest:bt,activeTexture:P,bindTexture:w,unbindTexture:q,compressedTexImage2D:Q,compressedTexImage3D:ct,texImage2D:Pt,texImage3D:kt,updateUBOMapping:Ht,uniformBlockBinding:Ot,texStorage2D:$t,texStorage3D:lt,texSubImage2D:j,texSubImage3D:Mt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Tt,scissor:Gt,viewport:vt,reset:ue}}function pv(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function mv(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function gv(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function hl(s,t,e,n){const i=_v(n);switch(e){case Al:return s*t;case Rl:return s*t;case Pl:return s*t*2;case No:return s*t/i.components*i.byteLength;case Ur:return s*t/i.components*i.byteLength;case Il:return s*t*2/i.components*i.byteLength;case Fo:return s*t*2/i.components*i.byteLength;case Cl:return s*t*3/i.components*i.byteLength;case qe:return s*t*4/i.components*i.byteLength;case Oo:return s*t*4/i.components*i.byteLength;case lr:case hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ur:case dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ja:case to:return Math.max(s,16)*Math.max(t,8)/4;case Ka:case Qa:return Math.max(s,8)*Math.max(t,8)/2;case eo:case no:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case io:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ao:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case oo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case co:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case lo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case _o:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case xo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case fr:case vo:case yo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ll:case Mo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case So:case bo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _v(s){switch(s){case Fn:case wl:return{byteLength:1,components:1};case Us:case El:case ks:return{byteLength:2,components:1};case Do:case Uo:return{byteLength:2,components:4};case ni:case Lo:case en:return{byteLength:4,components:1};case Tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const xv={contain:pv,cover:mv,fill:gv,getByteLength:hl};function vv(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(P){}function m(P,w){return f?new OffscreenCanvas(P,w):wr("canvas")}function _(P,w,q){let Q=1;const ct=bt(P);if((ct.width>q||ct.height>q)&&(Q=q/Math.max(ct.width,ct.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){const j=Math.floor(Q*ct.width),Mt=Math.floor(Q*ct.height);d===void 0&&(d=m(j,Mt));const pt=w?m(j,Mt):d;return pt.width=j,pt.height=Mt,pt.getContext("2d").drawImage(P,0,0,j,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+j+"x"+Mt+")."),pt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(P,w,q,Q,ct=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=w;if(w===s.RED&&(q===s.FLOAT&&(j=s.R32F),q===s.HALF_FLOAT&&(j=s.R16F),q===s.UNSIGNED_BYTE&&(j=s.R8)),w===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(j=s.R8UI),q===s.UNSIGNED_SHORT&&(j=s.R16UI),q===s.UNSIGNED_INT&&(j=s.R32UI),q===s.BYTE&&(j=s.R8I),q===s.SHORT&&(j=s.R16I),q===s.INT&&(j=s.R32I)),w===s.RG&&(q===s.FLOAT&&(j=s.RG32F),q===s.HALF_FLOAT&&(j=s.RG16F),q===s.UNSIGNED_BYTE&&(j=s.RG8)),w===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(j=s.RG8UI),q===s.UNSIGNED_SHORT&&(j=s.RG16UI),q===s.UNSIGNED_INT&&(j=s.RG32UI),q===s.BYTE&&(j=s.RG8I),q===s.SHORT&&(j=s.RG16I),q===s.INT&&(j=s.RG32I)),w===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(j=s.RGB8UI),q===s.UNSIGNED_SHORT&&(j=s.RGB16UI),q===s.UNSIGNED_INT&&(j=s.RGB32UI),q===s.BYTE&&(j=s.RGB8I),q===s.SHORT&&(j=s.RGB16I),q===s.INT&&(j=s.RGB32I)),w===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),q===s.UNSIGNED_INT&&(j=s.RGBA32UI),q===s.BYTE&&(j=s.RGBA8I),q===s.SHORT&&(j=s.RGBA16I),q===s.INT&&(j=s.RGBA32I)),w===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),w===s.RGBA){const Mt=ct?Nr:ie.getTransfer(Q);q===s.FLOAT&&(j=s.RGBA32F),q===s.HALF_FLOAT&&(j=s.RGBA16F),q===s.UNSIGNED_BYTE&&(j=Mt===me?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(P,w){let q;return P?w===null||w===ni||w===ji?q=s.DEPTH24_STENCIL8:w===en?q=s.DEPTH32F_STENCIL8:w===Us&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ni||w===ji?q=s.DEPTH_COMPONENT24:w===en?q=s.DEPTH_COMPONENT32F:w===Us&&(q=s.DEPTH_COMPONENT16),q}function D(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Oe&&P.minFilter!==Ce?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function A(P){const w=P.target;w.removeEventListener("dispose",A),E(w),w.isVideoTexture&&u.delete(w)}function M(P){const w=P.target;w.removeEventListener("dispose",M),S(w)}function E(P){const w=n.get(P);if(w.__webglInit===void 0)return;const q=P.source,Q=h.get(q);if(Q){const ct=Q[w.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&b(P),Object.keys(Q).length===0&&h.delete(q)}n.remove(P)}function b(P){const w=n.get(P);s.deleteTexture(w.__webglTexture);const q=P.source,Q=h.get(q);delete Q[w.__cacheKey],a.memory.textures--}function S(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let ct=0;ct<w.__webglFramebuffer[Q].length;ct++)s.deleteFramebuffer(w.__webglFramebuffer[Q][ct]);else s.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)s.deleteFramebuffer(w.__webglFramebuffer[Q]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=P.textures;for(let Q=0,ct=q.length;Q<ct;Q++){const j=n.get(q[Q]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(q[Q])}n.remove(P)}let L=0;function G(){L=0}function F(){const P=L;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function H(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function V(P,w){const q=n.get(P);if(P.isVideoTexture&&ht(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(q,P,w);return}}e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+w)}function O(P,w){const q=n.get(P);if(P.version>0&&q.__version!==P.version){Z(q,P,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+w)}function Y(P,w){const q=n.get(P);if(P.version>0&&q.__version!==P.version){Z(q,P,w);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+w)}function U(P,w){const q=n.get(P);if(P.version>0&&q.__version!==P.version){nt(q,P,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+w)}const et={[Ki]:s.REPEAT,[xn]:s.CLAMP_TO_EDGE,[vr]:s.MIRRORED_REPEAT},rt={[Oe]:s.NEAREST,[bl]:s.NEAREST_MIPMAP_NEAREST,[Cs]:s.NEAREST_MIPMAP_LINEAR,[Ce]:s.LINEAR,[cr]:s.LINEAR_MIPMAP_NEAREST,[In]:s.LINEAR_MIPMAP_LINEAR},ut={[qd]:s.NEVER,[jd]:s.ALWAYS,[Yd]:s.LESS,[Ul]:s.LEQUAL,[Zd]:s.EQUAL,[Kd]:s.GEQUAL,[$d]:s.GREATER,[Jd]:s.NOTEQUAL};function wt(P,w){if(w.type===en&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ce||w.magFilter===cr||w.magFilter===Cs||w.magFilter===In||w.minFilter===Ce||w.minFilter===cr||w.minFilter===Cs||w.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,et[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,et[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,et[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,rt[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,rt[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ut[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Oe||w.minFilter!==Cs&&w.minFilter!==In||w.type===en&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function _t(P,w){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",A));const Q=w.source;let ct=h.get(Q);ct===void 0&&(ct={},h.set(Q,ct));const j=H(w);if(j!==P.__cacheKey){ct[j]===void 0&&(ct[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ct[j].usedTimes++;const Mt=ct[P.__cacheKey];Mt!==void 0&&(ct[P.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(w)),P.__cacheKey=j,P.__webglTexture=ct[j].texture}return q}function Z(P,w,q){let Q=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=s.TEXTURE_3D);const ct=_t(P,w),j=w.source;e.bindTexture(Q,P.__webglTexture,s.TEXTURE0+q);const Mt=n.get(j);if(j.version!==Mt.__version||ct===!0){e.activeTexture(s.TEXTURE0+q);const pt=ie.getPrimaries(ie.workingColorSpace),Tt=w.colorSpace===$n?null:ie.getPrimaries(w.colorSpace),$t=w.colorSpace===$n||pt===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let lt=_(w.image,!1,i.maxTextureSize);lt=Dt(w,lt);const Pt=r.convert(w.format,w.colorSpace),kt=r.convert(w.type);let Gt=y(w.internalFormat,Pt,kt,w.colorSpace,w.isVideoTexture);wt(Q,w);let vt;const Ht=w.mipmaps,Ot=w.isVideoTexture!==!0,ue=Mt.__version===void 0||ct===!0,B=j.dataReady,gt=D(w,lt);if(w.isDepthTexture)Gt=x(w.format===Qi,w.type),ue&&(Ot?e.texStorage2D(s.TEXTURE_2D,1,Gt,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,Gt,lt.width,lt.height,0,Pt,kt,null));else if(w.isDataTexture)if(Ht.length>0){Ot&&ue&&e.texStorage2D(s.TEXTURE_2D,gt,Gt,Ht[0].width,Ht[0].height);for(let K=0,it=Ht.length;K<it;K++)vt=Ht[K],Ot?B&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,vt.width,vt.height,Pt,kt,vt.data):e.texImage2D(s.TEXTURE_2D,K,Gt,vt.width,vt.height,0,Pt,kt,vt.data);w.generateMipmaps=!1}else Ot?(ue&&e.texStorage2D(s.TEXTURE_2D,gt,Gt,lt.width,lt.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,Pt,kt,lt.data)):e.texImage2D(s.TEXTURE_2D,0,Gt,lt.width,lt.height,0,Pt,kt,lt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ot&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Gt,Ht[0].width,Ht[0].height,lt.depth);for(let K=0,it=Ht.length;K<it;K++)if(vt=Ht[K],w.format!==qe)if(Pt!==null)if(Ot){if(B)if(w.layerUpdates.size>0){const Et=hl(vt.width,vt.height,w.format,w.type);for(const At of w.layerUpdates){const qt=vt.data.subarray(At*Et/vt.data.BYTES_PER_ELEMENT,(At+1)*Et/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,At,vt.width,vt.height,1,Pt,qt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,lt.depth,Pt,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Gt,vt.width,vt.height,lt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,lt.depth,Pt,kt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,Gt,vt.width,vt.height,lt.depth,0,Pt,kt,vt.data)}else{Ot&&ue&&e.texStorage2D(s.TEXTURE_2D,gt,Gt,Ht[0].width,Ht[0].height);for(let K=0,it=Ht.length;K<it;K++)vt=Ht[K],w.format!==qe?Pt!==null?Ot?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,vt.width,vt.height,Pt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,Gt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?B&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,vt.width,vt.height,Pt,kt,vt.data):e.texImage2D(s.TEXTURE_2D,K,Gt,vt.width,vt.height,0,Pt,kt,vt.data)}else if(w.isDataArrayTexture)if(Ot){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Gt,lt.width,lt.height,lt.depth),B)if(w.layerUpdates.size>0){const K=hl(lt.width,lt.height,w.format,w.type);for(const it of w.layerUpdates){const Et=lt.data.subarray(it*K/lt.data.BYTES_PER_ELEMENT,(it+1)*K/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,lt.width,lt.height,1,Pt,kt,Et)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Pt,kt,lt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Gt,lt.width,lt.height,lt.depth,0,Pt,kt,lt.data);else if(w.isData3DTexture)Ot?(ue&&e.texStorage3D(s.TEXTURE_3D,gt,Gt,lt.width,lt.height,lt.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Pt,kt,lt.data)):e.texImage3D(s.TEXTURE_3D,0,Gt,lt.width,lt.height,lt.depth,0,Pt,kt,lt.data);else if(w.isFramebufferTexture){if(ue)if(Ot)e.texStorage2D(s.TEXTURE_2D,gt,Gt,lt.width,lt.height);else{let K=lt.width,it=lt.height;for(let Et=0;Et<gt;Et++)e.texImage2D(s.TEXTURE_2D,Et,Gt,K,it,0,Pt,kt,null),K>>=1,it>>=1}}else if(Ht.length>0){if(Ot&&ue){const K=bt(Ht[0]);e.texStorage2D(s.TEXTURE_2D,gt,Gt,K.width,K.height)}for(let K=0,it=Ht.length;K<it;K++)vt=Ht[K],Ot?B&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Pt,kt,vt):e.texImage2D(s.TEXTURE_2D,K,Gt,Pt,kt,vt);w.generateMipmaps=!1}else if(Ot){if(ue){const K=bt(lt);e.texStorage2D(s.TEXTURE_2D,gt,Gt,K.width,K.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Pt,kt,lt)}else e.texImage2D(s.TEXTURE_2D,0,Gt,Pt,kt,lt);g(w)&&p(Q),Mt.__version=j.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function nt(P,w,q){if(w.image.length!==6)return;const Q=_t(P,w),ct=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+q);const j=n.get(ct);if(ct.version!==j.__version||Q===!0){e.activeTexture(s.TEXTURE0+q);const Mt=ie.getPrimaries(ie.workingColorSpace),pt=w.colorSpace===$n?null:ie.getPrimaries(w.colorSpace),Tt=w.colorSpace===$n||Mt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const $t=w.isCompressedTexture||w.image[0].isCompressedTexture,lt=w.image[0]&&w.image[0].isDataTexture,Pt=[];for(let it=0;it<6;it++)!$t&&!lt?Pt[it]=_(w.image[it],!0,i.maxCubemapSize):Pt[it]=lt?w.image[it].image:w.image[it],Pt[it]=Dt(w,Pt[it]);const kt=Pt[0],Gt=r.convert(w.format,w.colorSpace),vt=r.convert(w.type),Ht=y(w.internalFormat,Gt,vt,w.colorSpace),Ot=w.isVideoTexture!==!0,ue=j.__version===void 0||Q===!0,B=ct.dataReady;let gt=D(w,kt);wt(s.TEXTURE_CUBE_MAP,w);let K;if($t){Ot&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Ht,kt.width,kt.height);for(let it=0;it<6;it++){K=Pt[it].mipmaps;for(let Et=0;Et<K.length;Et++){const At=K[Et];w.format!==qe?Gt!==null?Ot?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,0,0,At.width,At.height,Gt,At.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,Ht,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,0,0,At.width,At.height,Gt,vt,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et,Ht,At.width,At.height,0,Gt,vt,At.data)}}}else{if(K=w.mipmaps,Ot&&ue){K.length>0&&gt++;const it=bt(Pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Ht,it.width,it.height)}for(let it=0;it<6;it++)if(lt){Ot?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Pt[it].width,Pt[it].height,Gt,vt,Pt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ht,Pt[it].width,Pt[it].height,0,Gt,vt,Pt[it].data);for(let Et=0;Et<K.length;Et++){const qt=K[Et].image[it].image;Ot?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,0,0,qt.width,qt.height,Gt,vt,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,Ht,qt.width,qt.height,0,Gt,vt,qt.data)}}else{Ot?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Gt,vt,Pt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ht,Gt,vt,Pt[it]);for(let Et=0;Et<K.length;Et++){const At=K[Et];Ot?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,0,0,Gt,vt,At.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Et+1,Ht,Gt,vt,At.image[it])}}}g(w)&&p(s.TEXTURE_CUBE_MAP),j.__version=ct.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function yt(P,w,q,Q,ct,j){const Mt=r.convert(q.format,q.colorSpace),pt=r.convert(q.type),Tt=y(q.internalFormat,Mt,pt,q.colorSpace),$t=n.get(w),lt=n.get(q);if(lt.__renderTarget=w,!$t.__hasExternalTextures){const Pt=Math.max(1,w.width>>j),kt=Math.max(1,w.height>>j);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,j,Tt,Pt,kt,w.depth,0,Mt,pt,null):e.texImage2D(ct,j,Tt,Pt,kt,0,Mt,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),dt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,ct,lt.__webglTexture,0,tt(w)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,ct,lt.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(P,w,q){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const Q=w.depthTexture,ct=Q&&Q.isDepthTexture?Q.type:null,j=x(w.stencilBuffer,ct),Mt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=tt(w);dt(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,j,w.width,w.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,j,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,j,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,P)}else{const Q=w.textures;for(let ct=0;ct<Q.length;ct++){const j=Q[ct],Mt=r.convert(j.format,j.colorSpace),pt=r.convert(j.type),Tt=y(j.internalFormat,Mt,pt,j.colorSpace),$t=tt(w);q&&dt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Tt,w.width,w.height):dt(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,Tt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(w.depthTexture);Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const ct=Q.__webglTexture,j=tt(w);if(w.depthTexture.format===Yi)dt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0);else if(w.depthTexture.format===Qi)dt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function It(P){const w=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Q){const ct=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Q.removeEventListener("dispose",ct)};Q.addEventListener("dispose",ct),w.__depthDisposeCallback=ct}w.__boundDepthTexture=Q}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Rt(w.__webglFramebuffer,P)}else if(q){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]===void 0)w.__webglDepthbuffer[Q]=s.createRenderbuffer(),at(w.__webglDepthbuffer[Q],P,!1);else{const ct=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),at(w.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ct)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(P,w,q){const Q=n.get(P);w!==void 0&&yt(Q.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&It(P)}function X(P){const w=P.texture,q=n.get(P),Q=n.get(w);P.addEventListener("dispose",M);const ct=P.textures,j=P.isWebGLCubeRenderTarget===!0,Mt=ct.length>1;if(Mt||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=w.version,a.memory.textures++),j){q.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[pt]=[];for(let Tt=0;Tt<w.mipmaps.length;Tt++)q.__webglFramebuffer[pt][Tt]=s.createFramebuffer()}else q.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let pt=0;pt<w.mipmaps.length;pt++)q.__webglFramebuffer[pt]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let pt=0,Tt=ct.length;pt<Tt;pt++){const $t=n.get(ct[pt]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&dt(P)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let pt=0;pt<ct.length;pt++){const Tt=ct[pt];q.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[pt]);const $t=r.convert(Tt.format,Tt.colorSpace),lt=r.convert(Tt.type),Pt=y(Tt.internalFormat,$t,lt,Tt.colorSpace,P.isXRRenderTarget===!0),kt=tt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,Pt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,q.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),at(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),wt(s.TEXTURE_CUBE_MAP,w);for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)yt(q.__webglFramebuffer[pt][Tt],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt);else yt(q.__webglFramebuffer[pt],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(w)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let pt=0,Tt=ct.length;pt<Tt;pt++){const $t=ct[pt],lt=n.get($t);e.bindTexture(s.TEXTURE_2D,lt.__webglTexture),wt(s.TEXTURE_2D,$t),yt(q.__webglFramebuffer,P,$t,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),g($t)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,Q.__webglTexture),wt(pt,w),w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)yt(q.__webglFramebuffer[Tt],P,w,s.COLOR_ATTACHMENT0,pt,Tt);else yt(q.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,pt,0);g(w)&&p(pt),e.unbindTexture()}P.depthBuffer&&It(P)}function N(P){const w=P.textures;for(let q=0,Q=w.length;q<Q;q++){const ct=w[q];if(g(ct)){const j=v(P),Mt=n.get(ct).__webglTexture;e.bindTexture(j,Mt),p(j),e.unbindTexture()}}}const W=[],I=[];function R(P){if(P.samples>0){if(dt(P)===!1){const w=P.textures,q=P.width,Q=P.height;let ct=s.COLOR_BUFFER_BIT;const j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(P),pt=w.length>1;if(pt)for(let Tt=0;Tt<w.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Tt=0;Tt<w.length;Tt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[Tt]);const $t=n.get(w[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,q,Q,0,0,q,Q,ct,s.NEAREST),c===!0&&(W.length=0,I.length=0,W.push(s.COLOR_ATTACHMENT0+Tt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(W.push(j),I.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,W))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let Tt=0;Tt<w.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[Tt]);const $t=n.get(w[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function tt(P){return Math.min(i.maxSamples,P.samples)}function dt(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ht(P){const w=a.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function Dt(P,w){const q=P.colorSpace,Q=P.format,ct=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==ns&&q!==$n&&(ie.getTransfer(q)===me?(Q!==qe||ct!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function bt(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=G,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=U,this.rebindTextures=xt,this.setupRenderTarget=X,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=dt}function pf(s,t){function e(n,i=$n){let r;const a=ie.getTransfer(i);if(n===Fn)return s.UNSIGNED_BYTE;if(n===Do)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Uo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Tl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===wl)return s.BYTE;if(n===El)return s.SHORT;if(n===Us)return s.UNSIGNED_SHORT;if(n===Lo)return s.INT;if(n===ni)return s.UNSIGNED_INT;if(n===en)return s.FLOAT;if(n===ks)return s.HALF_FLOAT;if(n===Al)return s.ALPHA;if(n===Cl)return s.RGB;if(n===qe)return s.RGBA;if(n===Rl)return s.LUMINANCE;if(n===Pl)return s.LUMINANCE_ALPHA;if(n===Yi)return s.DEPTH_COMPONENT;if(n===Qi)return s.DEPTH_STENCIL;if(n===No)return s.RED;if(n===Ur)return s.RED_INTEGER;if(n===Il)return s.RG;if(n===Fo)return s.RG_INTEGER;if(n===Oo)return s.RGBA_INTEGER;if(n===lr||n===hr||n===ur||n===dr)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===ja||n===Qa||n===to)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eo||n===no)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===io)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===so||n===ro||n===ao||n===oo||n===co||n===lo||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===so)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ao)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===co)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ho)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===po)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===go)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_o)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===vo||n===yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fr)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===Mo||n===So||n===bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class mf extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class De extends oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yv={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&h>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yv)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
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

}`;class bv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new we,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new dn({vertexShader:Mv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wv extends Bn{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,m=null;const _=new bv,g=e.getContextAttributes();let p=null,v=null;const y=[],x=[],D=new ot;let A=null;const M=new Ue;M.viewport=new ae;const E=new Ue;E.viewport=new ae;const b=[M,E],S=new mf;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=y[Z];return nt===void 0&&(nt=new Oc,y[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=y[Z];return nt===void 0&&(nt=new Oc,y[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=y[Z];return nt===void 0&&(nt=new Oc,y[Z]=nt),nt.getHandSpace()};function F(Z){const nt=x.indexOf(Z.inputSource);if(nt===-1)return;const yt=y[nt];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,l||a),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",V);for(let Z=0;Z<y.length;Z++){const nt=x[Z];nt!==null&&(x[Z]=null,y[Z].disconnect(nt))}L=null,G=null,_.reset(),t.setRenderTarget(p),f=null,h=null,d=null,i=null,v=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),i.renderState.layers===void 0){const nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new wn(f.framebufferWidth,f.framebufferHeight,{format:qe,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,yt=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?Qi:Yi,yt=g.stencil?ji:ni);const Rt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(i,e),h=d.createProjectionLayer(Rt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new wn(h.textureWidth,h.textureHeight,{format:qe,type:Fn,depthTexture:new kl(h.textureWidth,h.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),_t.setContext(i),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(Z){for(let nt=0;nt<Z.removed.length;nt++){const yt=Z.removed[nt],at=x.indexOf(yt);at>=0&&(x[at]=null,y[at].disconnect(yt))}for(let nt=0;nt<Z.added.length;nt++){const yt=Z.added[nt];let at=x.indexOf(yt);if(at===-1){for(let It=0;It<y.length;It++)if(It>=x.length){x.push(yt),at=It;break}else if(x[It]===null){x[It]=yt,at=It;break}if(at===-1)break}const Rt=y[at];Rt&&Rt.connect(yt)}}const O=new C,Y=new C;function U(Z,nt,yt){O.setFromMatrixPosition(nt.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);const at=O.distanceTo(Y),Rt=nt.projectionMatrix.elements,It=yt.projectionMatrix.elements,xt=Rt[14]/(Rt[10]-1),X=Rt[14]/(Rt[10]+1),N=(Rt[9]+1)/Rt[5],W=(Rt[9]-1)/Rt[5],I=(Rt[8]-1)/Rt[0],R=(It[8]+1)/It[0],tt=xt*I,dt=xt*R,ht=at/(-I+R),Dt=ht*-I;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Dt),Z.translateZ(ht),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Rt[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const bt=xt+ht,P=X+ht,w=tt-Dt,q=dt+(at-Dt),Q=N*X/P*bt,ct=W*X/P*bt;Z.projectionMatrix.makePerspective(w,q,Q,ct,bt,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function et(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let nt=Z.near,yt=Z.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),S.near=E.near=M.near=nt,S.far=E.far=M.far=yt,(L!==S.near||G!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,G=S.far),M.layers.mask=Z.layers.mask|2,E.layers.mask=Z.layers.mask|4,S.layers.mask=M.layers.mask|E.layers.mask;const at=Z.parent,Rt=S.cameras;et(S,at);for(let It=0;It<Rt.length;It++)et(Rt[It],at);Rt.length===2?U(S,M,E):S.projectionMatrix.copy(M.projectionMatrix),rt(Z,S,at)};function rt(Z,nt,yt){yt===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ns*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ut=null;function wt(Z,nt){if(u=nt.getViewerPose(l||a),m=nt,u!==null){const yt=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let at=!1;yt.length!==S.cameras.length&&(S.cameras.length=0,at=!0);for(let It=0;It<yt.length;It++){const xt=yt[It];let X=null;if(f!==null)X=f.getViewport(xt);else{const W=d.getViewSubImage(h,xt);X=W.viewport,It===0&&(t.setRenderTargetTextures(v,W.colorTexture,h.ignoreDepthValues?void 0:W.depthStencilTexture),t.setRenderTarget(v))}let N=b[It];N===void 0&&(N=new Ue,N.layers.enable(It),N.viewport=new ae,b[It]=N),N.matrix.fromArray(xt.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(xt.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(X.x,X.y,X.width,X.height),It===0&&(S.matrix.copy(N.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),at===!0&&S.cameras.push(N)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const It=d.getDepthInformation(yt[0]);It&&It.isValid&&It.texture&&_.init(t,It,i.renderState)}}for(let yt=0;yt<y.length;yt++){const at=x[yt],Rt=y[yt];at!==null&&Rt!==void 0&&Rt.update(at,nt,l||a)}ut&&ut(Z,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}const _t=new lf;_t.setAnimationLoop(wt),this.setAnimationLoop=function(Z){ut=Z},this.dispose=function(){}}}const Pi=new un,Ev=new Vt;function Tv(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,rf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,v,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Fe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Fe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,Pi.copy(x),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),g.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(Pi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Av(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=i[v.id];x===void 0&&(m(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",g));const D=y.program;n.updateUBOMapping(v,D);const A=t.render.frame;r[v.id]!==A&&(h(v),r[v.id]=A)}function u(v){const y=d();v.__bindingPointIndex=y;const x=s.createBuffer(),D=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,D,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=i[v.id],x=v.uniforms,D=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,M=x.length;A<M;A++){const E=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,S=E.length;b<S;b++){const L=E[b];if(f(L,A,b,D)===!0){const G=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let V=0;V<F.length;V++){const O=F[V],Y=_(O);typeof O=="number"||typeof O=="boolean"?(L.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,G+H,L.__data)):O.isMatrix3?(L.__data[0]=O.elements[0],L.__data[1]=O.elements[1],L.__data[2]=O.elements[2],L.__data[3]=0,L.__data[4]=O.elements[3],L.__data[5]=O.elements[4],L.__data[6]=O.elements[5],L.__data[7]=0,L.__data[8]=O.elements[6],L.__data[9]=O.elements[7],L.__data[10]=O.elements[8],L.__data[11]=0):(O.toArray(L.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,x,D){const A=v.value,M=y+"_"+x;if(D[M]===void 0)return typeof A=="number"||typeof A=="boolean"?D[M]=A:D[M]=A.clone(),!0;{const E=D[M];if(typeof A=="number"||typeof A=="boolean"){if(E!==A)return D[M]=A,!0}else if(E.equals(A)===!1)return E.copy(A),!0}return!1}function m(v){const y=v.uniforms;let x=0;const D=16;for(let M=0,E=y.length;M<E;M++){const b=Array.isArray(y[M])?y[M]:[y[M]];for(let S=0,L=b.length;S<L;S++){const G=b[S],F=Array.isArray(G.value)?G.value:[G.value];for(let H=0,V=F.length;H<V;H++){const O=F[H],Y=_(O),U=x%D,et=U%Y.boundary,rt=U+et;x+=et,rt!==0&&D-rt<Y.storage&&(x+=D-rt),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=Y.storage}}}const A=x%D;return A>0&&(x+=D-A),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Cv{constructor(t={}){const{canvas:e=tf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this.toneMapping=Qn,this.toneMappingExposure=1;const x=this;let D=!1,A=0,M=0,E=null,b=-1,S=null;const L=new ae,G=new ae;let F=null;const H=new ft(0);let V=0,O=e.width,Y=e.height,U=1,et=null,rt=null;const ut=new ae(0,0,O,Y),wt=new ae(0,0,O,Y);let _t=!1;const Z=new Hs;let nt=!1,yt=!1;const at=new Vt,Rt=new Vt,It=new C,xt=new ae,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let N=!1;function W(){return E===null?U:1}let I=n;function R(T,z){return e.getContext(T,z)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Po}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",At,!1),I===null){const z="webgl2";if(I=R(z,T),I===null)throw R(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let tt,dt,ht,Dt,bt,P,w,q,Q,ct,j,Mt,pt,Tt,$t,lt,Pt,kt,Gt,vt,Ht,Ot,ue,B;function gt(){tt=new D_(I),tt.init(),Ot=new pf(I,tt),dt=new A_(I,tt,t,Ot),ht=new fv(I,tt),dt.reverseDepthBuffer&&h&&ht.buffers.depth.setReversed(!0),Dt=new F_(I),bt=new tv,P=new vv(I,tt,ht,bt,dt,Ot,Dt),w=new R_(x),q=new L_(x),Q=new Gm(I),ue=new E_(I,Q),ct=new U_(I,Q,Dt,ue),j=new B_(I,ct,Q,Dt),Gt=new O_(I,dt,P),lt=new C_(bt),Mt=new Qx(x,w,q,tt,dt,ue,lt),pt=new Tv(x,bt),Tt=new nv,$t=new cv(tt),kt=new w_(x,w,q,ht,j,f,c),Pt=new uv(x,j,dt),B=new Av(I,Dt,dt,ht),vt=new T_(I,tt,Dt),Ht=new N_(I,tt,Dt),Dt.programs=Mt.programs,x.capabilities=dt,x.extensions=tt,x.properties=bt,x.renderLists=Tt,x.shadowMap=Pt,x.state=ht,x.info=Dt}gt();const K=new wv(x,I);this.xr=K,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(O,Y,!1))},this.getSize=function(T){return T.set(O,Y)},this.setSize=function(T,z,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,Y=z,e.width=Math.floor(T*U),e.height=Math.floor(z*U),$===!0&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(O*U,Y*U).floor()},this.setDrawingBufferSize=function(T,z,$){O=T,Y=z,U=$,e.width=Math.floor(T*$),e.height=Math.floor(z*$),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(ut)},this.setViewport=function(T,z,$,J){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,z,$,J),ht.viewport(L.copy(ut).multiplyScalar(U).round())},this.getScissor=function(T){return T.copy(wt)},this.setScissor=function(T,z,$,J){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,z,$,J),ht.scissor(G.copy(wt).multiplyScalar(U).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(T){ht.setScissorTest(_t=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){rt=T},this.getClearColor=function(T){return T.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(T=!0,z=!0,$=!0){let J=0;if(T){let k=!1;if(E!==null){const mt=E.texture.format;k=mt===Oo||mt===Fo||mt===Ur}if(k){const mt=E.texture.type,Ct=mt===Fn||mt===ni||mt===Us||mt===ji||mt===Do||mt===Uo,Ut=kt.getClearColor(),Nt=kt.getClearAlpha(),Yt=Ut.r,Kt=Ut.g,Ft=Ut.b;Ct?(m[0]=Yt,m[1]=Kt,m[2]=Ft,m[3]=Nt,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Yt,_[1]=Kt,_[2]=Ft,_[3]=Nt,I.clearBufferiv(I.COLOR,0,_))}else J|=I.COLOR_BUFFER_BIT}z&&(J|=I.DEPTH_BUFFER_BIT),$&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Tt.dispose(),$t.dispose(),bt.dispose(),w.dispose(),q.dispose(),j.dispose(),ue.dispose(),B.dispose(),Mt.dispose(),K.dispose(),K.removeEventListener("sessionstart",st),K.removeEventListener("sessionend",Bt),Qt.stop()};function it(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const T=Dt.autoReset,z=Pt.enabled,$=Pt.autoUpdate,J=Pt.needsUpdate,k=Pt.type;gt(),Dt.autoReset=T,Pt.enabled=z,Pt.autoUpdate=$,Pt.needsUpdate=J,Pt.type=k}function At(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qt(T){const z=T.target;z.removeEventListener("dispose",qt),ve(z)}function ve(T){Ie(T),bt.remove(T)}function Ie(T){const z=bt.get(T).programs;z!==void 0&&(z.forEach(function($){Mt.releaseProgram($)}),T.isShaderMaterial&&Mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,$,J,k,mt){z===null&&(z=X);const Ct=k.isMesh&&k.matrixWorld.determinant()<0,Ut=up(T,z,$,J,k);ht.setMaterial(J,Ct);let Nt=$.index,Yt=1;if(J.wireframe===!0){if(Nt=ct.getWireframeAttribute($),Nt===void 0)return;Yt=2}const Kt=$.drawRange,Ft=$.attributes.position;let le=Kt.start*Yt,ge=(Kt.start+Kt.count)*Yt;mt!==null&&(le=Math.max(le,mt.start*Yt),ge=Math.min(ge,(mt.start+mt.count)*Yt)),Nt!==null?(le=Math.max(le,0),ge=Math.min(ge,Nt.count)):Ft!=null&&(le=Math.max(le,0),ge=Math.min(ge,Ft.count));const _e=ge-le;if(_e<0||_e===1/0)return;ue.setup(k,J,Ut,$,Nt);let Je,fe=vt;if(Nt!==null&&(Je=Q.get(Nt),fe=Ht,fe.setIndex(Je)),k.isMesh)J.wireframe===!0?(ht.setLineWidth(J.wireframeLinewidth*W()),fe.setMode(I.LINES)):fe.setMode(I.TRIANGLES);else if(k.isLine){let zt=J.linewidth;zt===void 0&&(zt=1),ht.setLineWidth(zt*W()),k.isLineSegments?fe.setMode(I.LINES):k.isLineLoop?fe.setMode(I.LINE_LOOP):fe.setMode(I.LINE_STRIP)}else k.isPoints?fe.setMode(I.POINTS):k.isSprite&&fe.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)fe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))fe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const zt=k._multiDrawStarts,kn=k._multiDrawCounts,pe=k._multiDrawCount,vn=Nt?Q.get(Nt).bytesPerElement:1,os=bt.get(J).currentProgram.getUniforms();for(let an=0;an<pe;an++)os.setValue(I,"_gl_DrawID",an),fe.render(zt[an]/vn,kn[an])}else if(k.isInstancedMesh)fe.renderInstances(le,_e,k.count);else if($.isInstancedBufferGeometry){const zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,kn=Math.min($.instanceCount,zt);fe.renderInstances(le,_e,kn)}else fe.render(le,_e)};function de(T,z,$){T.transparent===!0&&T.side===_n&&T.forceSinglePass===!1?(T.side=Fe,T.needsUpdate=!0,as(T,z,$),T.side=Nn,T.needsUpdate=!0,as(T,z,$),T.side=_n):as(T,z,$)}this.compile=function(T,z,$=null){$===null&&($=T),p=$t.get($),p.init(z),y.push(p),$.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==$&&T.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const J=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const mt=k.material;if(mt)if(Array.isArray(mt))for(let Ct=0;Ct<mt.length;Ct++){const Ut=mt[Ct];de(Ut,$,k),J.add(Ut)}else de(mt,$,k),J.add(mt)}),y.pop(),p=null,J},this.compileAsync=function(T,z,$=null){const J=this.compile(T,z,$);return new Promise(k=>{function mt(){if(J.forEach(function(Ct){bt.get(Ct).currentProgram.isReady()&&J.delete(Ct)}),J.size===0){k(T);return}setTimeout(mt,10)}tt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let sn=null;function fn(T){sn&&sn(T)}function st(){Qt.stop()}function Bt(){Qt.start()}const Qt=new lf;Qt.setAnimationLoop(fn),typeof self!="undefined"&&Qt.setContext(self),this.setAnimationLoop=function(T){sn=T,K.setAnimationLoop(T),T===null?Qt.stop():Qt.start()},K.addEventListener("sessionstart",st),K.addEventListener("sessionend",Bt),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(z),z=K.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,z,E),p=$t.get(T,y.length),p.init(z),y.push(p),Rt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(Rt),yt=this.localClippingEnabled,nt=lt.init(this.clippingPlanes,yt),g=Tt.get(T,v.length),g.init(),v.push(g),K.enabled===!0&&K.isPresenting===!0){const mt=x.xr.getDepthSensingMesh();mt!==null&&te(mt,z,-1/0,x.sortObjects)}te(T,z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(et,rt),N=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,N&&kt.addToRenderList(g,T),this.info.render.frame++,nt===!0&&lt.beginShadows();const $=p.state.shadowsArray;Pt.render($,T,z),nt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,k=g.transmissive;if(p.setupLights(),z.isArrayCamera){const mt=z.cameras;if(k.length>0)for(let Ct=0,Ut=mt.length;Ct<Ut;Ct++){const Nt=mt[Ct];Wt(J,k,T,Nt)}N&&kt.render(T);for(let Ct=0,Ut=mt.length;Ct<Ut;Ct++){const Nt=mt[Ct];ne(g,T,Nt,Nt.viewport)}}else k.length>0&&Wt(J,k,T,z),N&&kt.render(T),ne(g,T,z);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(x,T,z),ue.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],nt===!0&&lt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function te(T,z,$,J){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){J&&xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Rt);const Ct=j.update(T),Ut=T.material;Ut.visible&&g.push(T,Ct,Ut,$,xt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const Ct=j.update(T),Ut=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),xt.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),xt.copy(Ct.boundingSphere.center)),xt.applyMatrix4(T.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ut)){const Nt=Ct.groups;for(let Yt=0,Kt=Nt.length;Yt<Kt;Yt++){const Ft=Nt[Yt],le=Ut[Ft.materialIndex];le&&le.visible&&g.push(T,Ct,le,$,xt.z,Ft)}}else Ut.visible&&g.push(T,Ct,Ut,$,xt.z,null)}}const mt=T.children;for(let Ct=0,Ut=mt.length;Ct<Ut;Ct++)te(mt[Ct],z,$,J)}function ne(T,z,$,J){const k=T.opaque,mt=T.transmissive,Ct=T.transparent;p.setupLightsView($),nt===!0&&lt.setGlobalState(x.clippingPlanes,$),J&&ht.viewport(L.copy(J)),k.length>0&&ce(k,z,$),mt.length>0&&ce(mt,z,$),Ct.length>0&&ce(Ct,z,$),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Wt(T,z,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new wn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?ks:Fn,minFilter:In,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const mt=p.state.transmissionRenderTarget[J.id],Ct=J.viewport||L;mt.setSize(Ct.z,Ct.w);const Ut=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(H),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),N&&kt.render($);const Nt=x.toneMapping;x.toneMapping=Qn;const Yt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),nt===!0&&lt.setGlobalState(x.clippingPlanes,J),ce(T,$,J),P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ft=0,le=z.length;Ft<le;Ft++){const ge=z[Ft],_e=ge.object,Je=ge.geometry,fe=ge.material,zt=ge.group;if(fe.side===_n&&_e.layers.test(J.layers)){const kn=fe.side;fe.side=Fe,fe.needsUpdate=!0,rn(_e,$,J,Je,fe,zt),fe.side=kn,fe.needsUpdate=!0,Kt=!0}}Kt===!0&&(P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt))}x.setRenderTarget(Ut),x.setClearColor(H,V),Yt!==void 0&&(J.viewport=Yt),x.toneMapping=Nt}function ce(T,z,$){const J=z.isScene===!0?z.overrideMaterial:null;for(let k=0,mt=T.length;k<mt;k++){const Ct=T[k],Ut=Ct.object,Nt=Ct.geometry,Yt=J===null?Ct.material:J,Kt=Ct.group;Ut.layers.test($.layers)&&rn(Ut,z,$,Nt,Yt,Kt)}}function rn(T,z,$,J,k,mt){T.onBeforeRender(x,z,$,J,k,mt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(x,z,$,J,T,mt),k.transparent===!0&&k.side===_n&&k.forceSinglePass===!1?(k.side=Fe,k.needsUpdate=!0,x.renderBufferDirect($,z,J,k,T,mt),k.side=Nn,k.needsUpdate=!0,x.renderBufferDirect($,z,J,k,T,mt),k.side=_n):x.renderBufferDirect($,z,J,k,T,mt),T.onAfterRender(x,z,$,J,k,mt)}function as(T,z,$){z.isScene!==!0&&(z=X);const J=bt.get(T),k=p.state.lights,mt=p.state.shadowsArray,Ct=k.state.version,Ut=Mt.getParameters(T,k.state,mt,z,$),Nt=Mt.getProgramCacheKey(Ut);let Yt=J.programs;J.environment=T.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(T.isMeshStandardMaterial?q:w).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Yt===void 0&&(T.addEventListener("dispose",qt),Yt=new Map,J.programs=Yt);let Kt=Yt.get(Nt);if(Kt!==void 0){if(J.currentProgram===Kt&&J.lightsStateVersion===Ct)return fh(T,Ut),Kt}else Ut.uniforms=Mt.getUniforms(T),T.onBeforeCompile(Ut,x),Kt=Mt.acquireProgram(Ut,Nt),Yt.set(Nt,Kt),J.uniforms=Ut.uniforms;const Ft=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=lt.uniform),fh(T,Ut),J.needsLights=fp(T),J.lightsStateVersion=Ct,J.needsLights&&(Ft.ambientLightColor.value=k.state.ambient,Ft.lightProbe.value=k.state.probe,Ft.directionalLights.value=k.state.directional,Ft.directionalLightShadows.value=k.state.directionalShadow,Ft.spotLights.value=k.state.spot,Ft.spotLightShadows.value=k.state.spotShadow,Ft.rectAreaLights.value=k.state.rectArea,Ft.ltc_1.value=k.state.rectAreaLTC1,Ft.ltc_2.value=k.state.rectAreaLTC2,Ft.pointLights.value=k.state.point,Ft.pointLightShadows.value=k.state.pointShadow,Ft.hemisphereLights.value=k.state.hemi,Ft.directionalShadowMap.value=k.state.directionalShadowMap,Ft.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ft.spotShadowMap.value=k.state.spotShadowMap,Ft.spotLightMatrix.value=k.state.spotLightMatrix,Ft.spotLightMap.value=k.state.spotLightMap,Ft.pointShadowMap.value=k.state.pointShadowMap,Ft.pointShadowMatrix.value=k.state.pointShadowMatrix),J.currentProgram=Kt,J.uniformsList=null,Kt}function dh(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Va.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function fh(T,z){const $=bt.get(T);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function up(T,z,$,J,k){z.isScene!==!0&&(z=X),P.resetTextureUnits();const mt=z.fog,Ct=J.isMeshStandardMaterial?z.environment:null,Ut=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ns,Nt=(J.isMeshStandardMaterial?q:w).get(J.envMap||Ct),Yt=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Kt=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ft=!!$.morphAttributes.position,le=!!$.morphAttributes.normal,ge=!!$.morphAttributes.color;let _e=Qn;J.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(_e=x.toneMapping);const Je=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,fe=Je!==void 0?Je.length:0,zt=bt.get(J),kn=p.state.lights;if(nt===!0&&(yt===!0||T!==S)){const pn=T===S&&J.id===b;lt.setState(J,T,pn)}let pe=!1;J.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==kn.state.version||zt.outputColorSpace!==Ut||k.isBatchedMesh&&zt.batching===!1||!k.isBatchedMesh&&zt.batching===!0||k.isBatchedMesh&&zt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&zt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&zt.instancing===!1||!k.isInstancedMesh&&zt.instancing===!0||k.isSkinnedMesh&&zt.skinning===!1||!k.isSkinnedMesh&&zt.skinning===!0||k.isInstancedMesh&&zt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&zt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&zt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&zt.instancingMorph===!1&&k.morphTexture!==null||zt.envMap!==Nt||J.fog===!0&&zt.fog!==mt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==lt.numPlanes||zt.numIntersection!==lt.numIntersection)||zt.vertexAlphas!==Yt||zt.vertexTangents!==Kt||zt.morphTargets!==Ft||zt.morphNormals!==le||zt.morphColors!==ge||zt.toneMapping!==_e||zt.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,zt.__version=J.version);let vn=zt.currentProgram;pe===!0&&(vn=as(J,z,k));let os=!1,an=!1,Ws=!1;const xe=vn.getUniforms(),An=zt.uniforms;if(ht.useProgram(vn.program)&&(os=!0,an=!0,Ws=!0),J.id!==b&&(b=J.id,an=!0),os||S!==T){ht.buffers.depth.getReversed()?(at.copy(T.projectionMatrix),pm(at),mm(at),xe.setValue(I,"projectionMatrix",at)):xe.setValue(I,"projectionMatrix",T.projectionMatrix),xe.setValue(I,"viewMatrix",T.matrixWorldInverse);const ri=xe.map.cameraPosition;ri!==void 0&&ri.setValue(I,It.setFromMatrixPosition(T.matrixWorld)),dt.logarithmicDepthBuffer&&xe.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&xe.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,an=!0,Ws=!0)}if(k.isSkinnedMesh){xe.setOptional(I,k,"bindMatrix"),xe.setOptional(I,k,"bindMatrixInverse");const pn=k.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),xe.setValue(I,"boneTexture",pn.boneTexture,P))}k.isBatchedMesh&&(xe.setOptional(I,k,"batchingTexture"),xe.setValue(I,"batchingTexture",k._matricesTexture,P),xe.setOptional(I,k,"batchingIdTexture"),xe.setValue(I,"batchingIdTexture",k._indirectTexture,P),xe.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&xe.setValue(I,"batchingColorTexture",k._colorsTexture,P));const Xs=$.morphAttributes;if((Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0)&&Gt.update(k,$,vn),(an||zt.receiveShadow!==k.receiveShadow)&&(zt.receiveShadow=k.receiveShadow,xe.setValue(I,"receiveShadow",k.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(An.envMap.value=Nt,An.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(An.envMapIntensity.value=z.environmentIntensity),an&&(xe.setValue(I,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&dp(An,Ws),mt&&J.fog===!0&&pt.refreshFogUniforms(An,mt),pt.refreshMaterialUniforms(An,J,U,Y,p.state.transmissionRenderTarget[T.id]),Va.upload(I,dh(zt),An,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Va.upload(I,dh(zt),An,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&xe.setValue(I,"center",k.center),xe.setValue(I,"modelViewMatrix",k.modelViewMatrix),xe.setValue(I,"normalMatrix",k.normalMatrix),xe.setValue(I,"modelMatrix",k.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const pn=J.uniformsGroups;for(let ri=0,ai=pn.length;ri<ai;ri++){const ph=pn[ri];B.update(ph,vn),B.bind(ph,vn)}}return vn}function dp(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function fp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,z,$){bt.get(T.texture).__webglTexture=z,bt.get(T.depthTexture).__webglTexture=$;const J=bt.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const $=bt.get(T);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,$=0){E=T,A=z,M=$;let J=!0,k=null,mt=!1,Ct=!1;if(T){const Nt=bt.get(T);if(Nt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(I.FRAMEBUFFER,null),J=!1;else if(Nt.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Nt.__hasExternalTextures)P.rebindTextures(T,bt.get(T.texture).__webglTexture,bt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ft=T.depthTexture;if(Nt.__boundDepthTexture!==Ft){if(Ft!==null&&bt.has(Ft)&&(T.width!==Ft.image.width||T.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const Yt=T.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ct=!0);const Kt=bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Kt[z])?k=Kt[z][$]:k=Kt[z],mt=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?k=bt.get(T).__webglMultisampledFramebuffer:Array.isArray(Kt)?k=Kt[$]:k=Kt,L.copy(T.viewport),G.copy(T.scissor),F=T.scissorTest}else L.copy(ut).multiplyScalar(U).floor(),G.copy(wt).multiplyScalar(U).floor(),F=_t;if(ht.bindFramebuffer(I.FRAMEBUFFER,k)&&J&&ht.drawBuffers(T,k),ht.viewport(L),ht.scissor(G),ht.setScissorTest(F),mt){const Nt=bt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Nt.__webglTexture,$)}else if(Ct){const Nt=bt.get(T.texture),Yt=z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Nt.__webglTexture,$||0,Yt)}b=-1},this.readRenderTargetPixels=function(T,z,$,J,k,mt,Ct){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){ht.bindFramebuffer(I.FRAMEBUFFER,Ut);try{const Nt=T.texture,Yt=Nt.format,Kt=Nt.type;if(!dt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-J&&$>=0&&$<=T.height-k&&I.readPixels(z,$,J,k,Ot.convert(Yt),Ot.convert(Kt),mt)}finally{const Nt=E!==null?bt.get(E).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(T,z,$,J,k,mt,Ct){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){const Nt=T.texture,Yt=Nt.format,Kt=Nt.type;if(!dt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-J&&$>=0&&$<=T.height-k){ht.bindFramebuffer(I.FRAMEBUFFER,Ut);const Ft=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ft),I.bufferData(I.PIXEL_PACK_BUFFER,mt.byteLength,I.STREAM_READ),I.readPixels(z,$,J,k,Ot.convert(Yt),Ot.convert(Kt),0);const le=E!==null?bt.get(E).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,le);const ge=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await fm(I,ge,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ft),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,mt),I.deleteBuffer(Ft),I.deleteSync(ge),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,$=0){T.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const J=Math.pow(2,-$),k=Math.floor(T.image.width*J),mt=Math.floor(T.image.height*J),Ct=z!==null?z.x:0,Ut=z!==null?z.y:0;P.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,Ct,Ut,k,mt),ht.unbindTexture()},this.copyTextureToTexture=function(T,z,$=null,J=null,k=0){T.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],z=arguments[2],k=arguments[3]||0,$=null);let mt,Ct,Ut,Nt,Yt,Kt,Ft,le,ge;const _e=T.isCompressedTexture?T.mipmaps[k]:T.image;$!==null?(mt=$.max.x-$.min.x,Ct=$.max.y-$.min.y,Ut=$.isBox3?$.max.z-$.min.z:1,Nt=$.min.x,Yt=$.min.y,Kt=$.isBox3?$.min.z:0):(mt=_e.width,Ct=_e.height,Ut=_e.depth||1,Nt=0,Yt=0,Kt=0),J!==null?(Ft=J.x,le=J.y,ge=J.z):(Ft=0,le=0,ge=0);const Je=Ot.convert(z.format),fe=Ot.convert(z.type);let zt;z.isData3DTexture?(P.setTexture3D(z,0),zt=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),zt=I.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),zt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const kn=I.getParameter(I.UNPACK_ROW_LENGTH),pe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),vn=I.getParameter(I.UNPACK_SKIP_PIXELS),os=I.getParameter(I.UNPACK_SKIP_ROWS),an=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Nt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Kt);const Ws=T.isDataArrayTexture||T.isData3DTexture,xe=z.isDataArrayTexture||z.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const An=bt.get(T),Xs=bt.get(z),pn=bt.get(An.__renderTarget),ri=bt.get(Xs.__renderTarget);ht.bindFramebuffer(I.READ_FRAMEBUFFER,pn.__webglFramebuffer),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let ai=0;ai<Ut;ai++)Ws&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.get(T).__webglTexture,k,Kt+ai),T.isDepthTexture?(xe&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.get(z).__webglTexture,k,ge+ai),I.blitFramebuffer(Nt,Yt,mt,Ct,Ft,le,mt,Ct,I.DEPTH_BUFFER_BIT,I.NEAREST)):xe?I.copyTexSubImage3D(zt,k,Ft,le,ge+ai,Nt,Yt,mt,Ct):I.copyTexSubImage2D(zt,k,Ft,le,ge+ai,Nt,Yt,mt,Ct);ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else xe?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(zt,k,Ft,le,ge,mt,Ct,Ut,Je,fe,_e.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(zt,k,Ft,le,ge,mt,Ct,Ut,Je,_e.data):I.texSubImage3D(zt,k,Ft,le,ge,mt,Ct,Ut,Je,fe,_e):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,Ft,le,mt,Ct,Je,fe,_e.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,Ft,le,_e.width,_e.height,Je,_e.data):I.texSubImage2D(I.TEXTURE_2D,k,Ft,le,mt,Ct,Je,fe,_e);I.pixelStorei(I.UNPACK_ROW_LENGTH,kn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vn),I.pixelStorei(I.UNPACK_SKIP_ROWS,os),I.pixelStorei(I.UNPACK_SKIP_IMAGES,an),k===0&&z.generateMipmaps&&I.generateMipmap(zt),ht.unbindTexture()},this.copyTextureToTexture3D=function(T,z,$=null,J=null,k=0){return T.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,J=arguments[1]||null,T=arguments[2],z=arguments[3],k=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,$,J,k)},this.initRenderTarget=function(T){bt.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),ht.unbindTexture()},this.resetState=function(){A=0,M=0,E=null,ht.reset(),ue.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class Wo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new Wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Or{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ft(t),this.near=e,this.far=n}clone(){return new Or(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gl extends oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xo{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sr,this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new C;class ts{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Xe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xe(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ts(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wl extends He{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ms;const Js=new C,Ss=new C,bs=new C,ws=new ot,Ks=new ot,gf=new Vt,la=new C,js=new C,ha=new C,ru=new ot,Bc=new ot,au=new ot;class _f extends oe{constructor(t=new Wl){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new Xt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xo(e,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new ts(n,3,0,!1)),Ms.setAttribute("uv",new ts(n,2,3,!1))}this.geometry=Ms,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),gf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-bs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;ua(la.set(-.5,-.5,0),bs,a,Ss,i,r),ua(js.set(.5,-.5,0),bs,a,Ss,i,r),ua(ha.set(.5,.5,0),bs,a,Ss,i,r),ru.set(0,0),Bc.set(1,0),au.set(1,1);let o=t.ray.intersectTriangle(la,js,ha,!1,Js);if(o===null&&(ua(js.set(-.5,.5,0),bs,a,Ss,i,r),Bc.set(0,1),o=t.ray.intersectTriangle(la,ha,js,!1,Js),o===null))return;const c=t.ray.origin.distanceTo(Js);c<t.near||c>t.far||e.push({distance:c,point:Js.clone(),uv:Qe.getInterpolation(Js,la,js,ha,ru,Bc,au,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ua(s,t,e,n,i,r){ws.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ks.x=r*ws.x-i*ws.y,Ks.y=i*ws.x+r*ws.y):Ks.copy(ws),s.copy(t),s.x+=Ks.x,s.y+=Ks.y,s.applyMatrix4(gf)}const da=new C,ou=new C;class xf extends oe{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){da.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(da);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){da.setFromMatrixPosition(t.matrixWorld),ou.setFromMatrixPosition(this.matrixWorld);const n=da.distanceTo(ou)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let a=e[i].distance;if(e[i].object.visible&&(a-=a*e[i].hysteresis),n>=a)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}}const cu=new C,lu=new ae,hu=new ae,Rv=new C,uu=new Vt,fa=new C,zc=new Be,du=new Vt,kc=new Vs;class vf extends ee{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rl,this.bindMatrix=new Vt,this.bindMatrixInverse=new Vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ze),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fa),this.boundingBox.expandByPoint(fa)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Be),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fa),this.boundingSphere.expandByPoint(fa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zc.copy(this.boundingSphere),zc.applyMatrix4(i),t.ray.intersectsSphere(zc)!==!1&&(du.copy(i).invert(),kc.copy(t.ray).applyMatrix4(du),!(this.boundingBox!==null&&kc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,kc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ae,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===rl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;lu.fromBufferAttribute(i.attributes.skinIndex,t),hu.fromBufferAttribute(i.attributes.skinWeight,t),cu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=hu.getComponent(r);if(a!==0){const o=lu.getComponent(r);uu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Rv.copy(cu).applyMatrix4(uu),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Xl extends oe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Dn extends we{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Oe,u=Oe,d,h){super(null,a,o,c,l,u,i,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fu=new Vt,Pv=new Vt;class qo{constructor(t=[],e=[]){this.uuid=hn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Vt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Vt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Pv;fu.multiplyMatrices(o,e[r]),fu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new qo(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Dn(e,t,t,qe,en);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Xl),this.bones.push(a),this.boneInverses.push(new Vt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Os extends se{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Es=new Vt,pu=new Vt,pa=[],mu=new Ze,Iv=new Vt,Qs=new ee,tr=new Be;class Eo extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Iv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ze),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),mu.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(mu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Be),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),tr.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Es),pu.multiplyMatrices(n,Es),Qs.matrixWorld=pu,Qs.raycast(t,pa);for(let a=0,o=pa.length;a<o;a++){const c=pa[a];c.instanceId=r,c.object=this,e.push(c)}pa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dn(new Float32Array(i*this.count),i,this.count,No,en));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Vc(s,t){return s-t}function Lv(s,t){return s.z-t.z}function Dv(s,t){return t.z-s.z}class Uv{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const Ke=new Vt,Nv=new ft(1,1,1),Hc=new Hs,ma=new Ze,Ii=new Be,er=new C,gu=new C,Fv=new C,Gc=new Uv,Ve=new ee,ga=[];function Ov(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,s.getComponent(r,a))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function Li(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class yf extends ee{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(t,e,n=e*2,i){super(new Xt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new Dn(e,t,t,qe,en);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new Dn(e,t,t,Ur,ni);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new Dn(e,t,t,qe,en);n.colorSpace=ie.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const a=t.getAttribute(r),{array:o,itemSize:c,normalized:l}=a,u=new o.constructor(n*c),d=new se(u,c,l);e.setAttribute(r,d)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new se(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Ke),this.getBoundingBoxAt(r,ma).applyMatrix4(Ke),t.union(ma)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Be);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Ke),this.getBoundingSphereAt(r,Ii).applyMatrix4(Ke),t.union(Ii)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Vc),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Ke.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Nv.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const a=t.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Vc),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(i&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(const u in n.attributes){const d=e.getAttribute(u),h=n.getAttribute(u);Ov(d,h,c);const f=d.itemSize;for(let m=d.count,_=l;m<_;m++){const g=c+m;for(let p=0;p<f;p++)h.setComponent(g,p,0)}h.needsUpdate=!0,h.addUpdateRange(c*f,l*f)}if(i){const u=o.indexStart,d=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let h=0;h<a.count;h++)r.setX(u+h,c+a.getX(h));for(let h=a.count,f=d;h<f;h++)r.setX(u+h,c);r.needsUpdate=!0,r.addUpdateRange(u,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const c=i[a],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==e){const{indexStart:u,vertexStart:d,reservedIndexCount:h}=l,f=r.index,m=f.array,_=t-d;for(let g=u;g<u+h;g++)m[g]=m[g]+_;f.array.copyWithin(e,u,u+h),f.addUpdateRange(e,h),l.indexStart=e}e+=l.reservedIndexCount}if(l.vertexStart!==t){const{vertexStart:u,reservedVertexCount:d}=l,h=r.attributes;for(const f in h){const m=h[f],{array:_,itemSize:g}=m;_.copyWithin(t*g,u*g,(u+d)*g),m.addUpdateRange(t*g,d*g)}l.vertexStart=t}t+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new Ze,a=n.index,o=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let u=c;a&&(u=a.getX(u)),r.expandByPoint(er.fromBufferAttribute(o,u))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new Be;this.getBoundingBoxAt(t,ma),ma.getCenter(r.center);const a=n.index,o=n.attributes.position;let c=0;for(let l=i.start,u=i.start+i.count;l<u;l++){let d=l;a&&(d=a.getX(d)),er.fromBufferAttribute(o,d),c=Math.max(c,r.center.distanceToSquared(er))}r.radius=Math.sqrt(c),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){const n=this._instanceInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._instanceInfo,i=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(i,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._instanceInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(i,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,i=this._instanceInfo;return t>=i.length||i[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._instanceInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){const n=this._instanceInfo,i=this._geometryInfo;return t>=n.length||n[t].active===!1||e>=i.length||i[e].active===!1?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Vc);e[e.length-1]===n.length;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);Li(this._multiDrawCounts,i),Li(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;const a=this._indirectTexture,o=this._matricesTexture,c=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Li(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Li(o.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Li(c.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Xt,this._initializeGeometry(r));const a=this.geometry;r.index&&Li(r.index.array,a.index.array);for(const o in r.attributes)Li(r.attributes[o].array,a.attributes[o].array)}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Ve.material=this.material,Ve.geometry.index=a.index,Ve.geometry.attributes=a.attributes,Ve.geometry.boundingBox===null&&(Ve.geometry.boundingBox=new Ze),Ve.geometry.boundingSphere===null&&(Ve.geometry.boundingSphere=new Be);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;const l=n[o].geometryIndex,u=i[l];Ve.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,Ve.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Ve.geometry.boundingBox),this.getBoundingSphereAt(l,Ve.geometry.boundingSphere),Ve.raycast(t,ga);for(let d=0,h=ga.length;d<h;d++){const f=ga[d];f.object=this,f.batchId=o,e.push(f)}ga.length=0}Ve.material=null,Ve.geometry.index=null,Ve.geometry.attributes={},Ve.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,d=this._geometryInfo,h=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data;h&&(Ke.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Hc.setFromProjectionMatrix(Ke,t.coordinateSystem));let _=0;if(this.sortObjects){Ke.copy(this.matrixWorld).invert(),er.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Ke),gu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Ke);for(let v=0,y=c.length;v<y;v++)if(c[v].visible&&c[v].active){const x=c[v].geometryIndex;this.getMatrixAt(v,Ke),this.getBoundingSphereAt(x,Ii).applyMatrix4(Ke);let D=!1;if(h&&(D=!Hc.intersectsSphere(Ii)),!D){const A=d[x],M=Fv.subVectors(Ii.center,er).dot(gu);Gc.push(A.start,A.count,M,v)}}const g=Gc.list,p=this.customSort;p===null?g.sort(r.transparent?Dv:Lv):p.call(this,g,n);for(let v=0,y=g.length;v<y;v++){const x=g[v];l[_]=x.start*o,u[_]=x.count,m[_]=x.index,_++}Gc.reset()}else for(let g=0,p=c.length;g<p;g++)if(c[g].visible&&c[g].active){const v=c[g].geometryIndex;let y=!1;if(h&&(this.getMatrixAt(g,Ke),this.getBoundingSphereAt(v,Ii).applyMatrix4(Ke),y=!Hc.intersectsSphere(Ii)),!y){const x=d[v];l[_]=x.start*o,u[_]=x.count,m[_]=g,_++}}f.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,a){this.onBeforeRender(t,null,i,r,a)}}class $e extends He{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const To=new C,Ao=new C,_u=new Vt,nr=new Vs,_a=new Be,Wc=new C,xu=new C;class Mi extends oe{constructor(t=new Xt,e=new $e){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)To.fromBufferAttribute(e,i-1),Ao.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=To.distanceTo(Ao);t.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(i),_a.radius+=r,t.ray.intersectsSphere(_a)===!1)return;_u.copy(i).invert(),nr.copy(t.ray).applyMatrix4(_u);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=u.getX(_),v=u.getX(_+1),y=xa(this,t,nr,c,p,v);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(f),p=xa(this,t,nr,c,_,g);p&&e.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=xa(this,t,nr,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=xa(this,t,nr,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xa(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(To.fromBufferAttribute(a,i),Ao.fromBufferAttribute(a,r),e.distanceSqToSegment(To,Ao,Wc,xu)>n)return;Wc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Wc);if(!(c<t.near||c>t.far))return{distance:c,point:xu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const vu=new C,yu=new C;class zn extends Mi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)vu.fromBufferAttribute(e,i),yu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vu.distanceTo(yu);t.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mf extends Mi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Yo extends He{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Mu=new Vt,ul=new Vs,va=new Be,ya=new C;class Zo extends oe{constructor(t=new Xt,e=new Yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(i),va.radius+=r,t.ray.intersectsSphere(va)===!1)return;Mu.copy(i).invert(),ul.copy(t.ray).applyMatrix4(Mu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=h,_=f;m<_;m++){const g=l.getX(m);ya.fromBufferAttribute(d,g),Su(ya,g,c,i,t,e,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=h,_=f;m<_;m++)ya.fromBufferAttribute(d,m),Su(ya,m,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Su(s,t,e,n,i,r,a){const o=ul.distanceSqToPoint(s);if(o<e){const c=new C;ul.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Bv extends we{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Ce,this.magFilter=r!==void 0?r:Ce,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class zv extends we{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Oe,this.minFilter=Oe,this.generateMipmaps=!1,this.needsUpdate=!0}}class $o extends we{constructor(t,e,n,i,r,a,o,c,l,u,d,h){super(null,a,o,c,l,u,i,r,d,h),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class kv extends $o{constructor(t,e,n,i,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=xn,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vv extends $o{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,ei),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class Jo extends we{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const u=n[i],h=n[i+1]-u,f=(a-u)/h;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new ot:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],r=[],a=[],o=new C,c=new Vt;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(be(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(be(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ko extends En{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ot){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Sf extends Ko{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ql(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;h*=u,f*=u,i(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Ma=new C,Xc=new ql,qc=new ql,Yc=new ql;class bf extends En{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%r]:(Ma.subVectors(i[0],i[1]).add(i[0]),l=Ma);const d=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Ma.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Xc.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,m,_,g),qc.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,m,_,g),Yc.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),qc.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Yc.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Xc.calc(c),qc.calc(c),Yc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bu(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function Hv(s,t){const e=1-s;return e*e*t}function Gv(s,t){return 2*(1-s)*s*t}function Wv(s,t){return s*s*t}function mr(s,t,e,n){return Hv(s,t)+Gv(s,e)+Wv(s,n)}function Xv(s,t){const e=1-s;return e*e*e*t}function qv(s,t){const e=1-s;return 3*e*e*s*t}function Yv(s,t){return 3*(1-s)*s*s*t}function Zv(s,t){return s*s*s*t}function gr(s,t,e,n,i){return Xv(s,t)+qv(s,e)+Yv(s,n)+Zv(s,i)}class Yl extends En{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(t,i.x,r.x,a.x,o.x),gr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wf extends En{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(t,i.x,r.x,a.x,o.x),gr(t,i.y,r.y,a.y,o.y),gr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zl extends En{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ef extends En{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $l extends En{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(mr(t,i.x,r.x,a.x),mr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jl extends En{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(mr(t,i.x,r.x,a.x),mr(t,i.y,r.y,a.y),mr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kl extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(bu(o,c.x,l.x,u.x,d.x),bu(o,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ot().fromArray(i))}return this}}var Co=Object.freeze({__proto__:null,ArcCurve:Sf,CatmullRomCurve3:bf,CubicBezierCurve:Yl,CubicBezierCurve3:wf,EllipseCurve:Ko,LineCurve:Zl,LineCurve3:Ef,QuadraticBezierCurve:$l,QuadraticBezierCurve3:Jl,SplineCurve:Kl});class Tf extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Co[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Co[i.type]().fromJSON(i))}return this}}class Er extends Tf{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Zl(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new $l(this.currentPoint.clone(),new ot(t,e),new ot(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Yl(this.currentPoint.clone(),new ot(t,e),new ot(n,i),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Kl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new Ko(t,e,n,i,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Br extends Xt{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=be(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/e,d=new C,h=new ot,f=new C,m=new C,_=new C;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=e;v++){const y=n+v*u*i,x=Math.sin(y),D=Math.cos(y);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*x,d.y=t[A].y,d.z=t[A].x*D,a.push(d.x,d.y,d.z),h.x=v/e,h.y=A/(t.length-1),o.push(h.x,h.y);const M=c[3*A+0]*x,E=c[3*A+1],b=c[3*A+0]*D;l.push(M,E,b)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const x=y+v*t.length,D=x,A=x+t.length,M=x+t.length+1,E=x+1;r.push(D,A,E),r.push(M,E,A)}this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("uv",new Lt(o,2)),this.setAttribute("normal",new Lt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.points,t.segments,t.phiStart,t.phiLength)}}class zr extends Br{constructor(t=1,e=1,n=4,i=8){const r=new Er;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new zr(t.radius,t.length,t.capSegments,t.radialSegments)}}class jo extends Xt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new C,u=new ot;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=n+d/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(o,3)),this.setAttribute("uv",new Lt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class On extends Xt{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],h=[],f=[];let m=0;const _=[],g=n/2;let p=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Lt(d,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(f,2));function v(){const x=new C,D=new C;let A=0;const M=(e-t)/n;for(let E=0;E<=r;E++){const b=[],S=E/r,L=S*(e-t)+t;for(let G=0;G<=i;G++){const F=G/i,H=F*c+o,V=Math.sin(H),O=Math.cos(H);D.x=L*V,D.y=-S*n+g,D.z=L*O,d.push(D.x,D.y,D.z),x.set(V,M,O).normalize(),h.push(x.x,x.y,x.z),f.push(F,1-S),b.push(m++)}_.push(b)}for(let E=0;E<i;E++)for(let b=0;b<r;b++){const S=_[b][E],L=_[b+1][E],G=_[b+1][E+1],F=_[b][E+1];(t>0||b!==0)&&(u.push(S,L,F),A+=3),(e>0||b!==r-1)&&(u.push(L,G,F),A+=3)}l.addGroup(p,A,0),p+=A}function y(x){const D=m,A=new ot,M=new C;let E=0;const b=x===!0?t:e,S=x===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,g*S,0),h.push(0,S,0),f.push(.5,.5),m++;const L=m;for(let G=0;G<=i;G++){const H=G/i*c+o,V=Math.cos(H),O=Math.sin(H);M.x=b*O,M.y=g*S,M.z=b*V,d.push(M.x,M.y,M.z),h.push(0,S,0),A.x=V*.5+.5,A.y=O*.5*S+.5,f.push(A.x,A.y),m++}for(let G=0;G<i;G++){const F=D+G,H=L+G;x===!0?u.push(H,H+1,F):u.push(H+1,H,F),E+=3}l.addGroup(p,E,x===!0?1:2),p+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qo extends On{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Qo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bi extends Xt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),u(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new C,x=new C,D=new C;for(let A=0;A<e.length;A+=3)f(e[A+0],y),f(e[A+1],x),f(e[A+2],D),c(y,x,D,v)}function c(v,y,x,D){const A=D+1,M=[];for(let E=0;E<=A;E++){M[E]=[];const b=v.clone().lerp(x,E/A),S=y.clone().lerp(x,E/A),L=A-E;for(let G=0;G<=L;G++)G===0&&E===A?M[E][G]=b:M[E][G]=b.clone().lerp(S,G/L)}for(let E=0;E<A;E++)for(let b=0;b<2*(A-E)-1;b++){const S=Math.floor(b/2);b%2===0?(h(M[E][S+1]),h(M[E+1][S]),h(M[E][S])):(h(M[E][S+1]),h(M[E+1][S+1]),h(M[E+1][S]))}}function l(v){const y=new C;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const v=new C;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=g(v)/2/Math.PI+.5,D=p(v)/Math.PI+.5;a.push(x,1-D)}m(),d()}function d(){for(let v=0;v<a.length;v+=6){const y=a[v+0],x=a[v+2],D=a[v+4],A=Math.max(y,x,D),M=Math.min(y,x,D);A>.9&&M<.1&&(y<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),D<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,y){const x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function m(){const v=new C,y=new C,x=new C,D=new C,A=new ot,M=new ot,E=new ot;for(let b=0,S=0;b<r.length;b+=9,S+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),A.set(a[S+0],a[S+1]),M.set(a[S+2],a[S+3]),E.set(a[S+4],a[S+5]),D.copy(v).add(y).add(x).divideScalar(3);const L=g(D);_(A,S+0,v,L),_(M,S+2,y,L),_(E,S+4,x,L)}}function _(v,y,x,D){D<0&&v.x===1&&(a[y]=v.x-1),x.x===0&&x.z===0&&(a[y]=D/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.vertices,t.indices,t.radius,t.details)}}class tc extends bi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tc(t.radius,t.detail)}}const Sa=new C,ba=new C,Zc=new C,wa=new Qe;class Af extends Xt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Zi*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:_,b:g,c:p}=wa;if(_.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),wa.getNormal(Zc),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const y=(v+1)%3,x=d[v],D=d[y],A=wa[u[v]],M=wa[u[y]],E=`${x}_${D}`,b=`${D}_${x}`;b in h&&h[b]?(Zc.dot(h[b].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(M.x,M.y,M.z)),h[b]=null):E in h||(h[E]={index0:l[v],index1:l[y],normal:Zc.clone()})}}for(const m in h)if(h[m]){const{index0:_,index1:g}=h[m];Sa.fromBufferAttribute(o,_),ba.fromBufferAttribute(o,g),f.push(Sa.x,Sa.y,Sa.z),f.push(ba.x,ba.y,ba.z)}this.setAttribute("position",new Lt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class $i extends Er{constructor(t){super(t),this.uuid=hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Er().fromJSON(i))}return this}}const $v={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Cf(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,d,h,f;if(n&&(r=ty(s,t,r,e)),s.length>80*e){o=l=s[0],c=u=s[1];for(let m=e;m<i;m+=e)d=s[m],h=s[m+1],d<o&&(o=d),h<c&&(c=h),d>l&&(l=d),h>u&&(u=h);f=Math.max(l-o,u-c),f=f!==0?32767/f:0}return Tr(r,a,e,o,c,f,0),a}};function Cf(s,t,e,n,i){let r,a;if(i===uy(s,t,e,n)>0)for(r=t;r<e;r+=n)a=wu(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=wu(r,s[r],s[r+1],a);return a&&ec(a,a.next)&&(Cr(a),a=a.next),a}function es(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ec(e,e.next)||ye(e.prev,e,e.next)===0)){if(Cr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Tr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&ry(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Kv(s,n,i,r):Jv(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Cr(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=jv(es(s),t,e),Tr(s,t,e,n,i,r,2)):a===2&&Qv(s,t,e,n,i,r):Tr(es(s),t,e,n,i,r,1);break}}}function Jv(s){const t=s.prev,e=s,n=s.next;if(ye(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=i<r?i<a?i:a:r<a?r:a,d=o<c?o<l?o:l:c<l?c:l,h=i>r?i>a?i:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&Is(i,o,r,c,a,l,m.x,m.y)&&ye(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Kv(s,t,e,n){const i=s.prev,r=s,a=s.next;if(ye(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,u=i.y,d=r.y,h=a.y,f=o<c?o<l?o:l:c<l?c:l,m=u<d?u<h?u:h:d<h?d:h,_=o>c?o>l?o:l:c>l?c:l,g=u>d?u>h?u:h:d>h?d:h,p=dl(f,m,t,e,n),v=dl(_,g,t,e,n);let y=s.prevZ,x=s.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Is(o,u,c,d,l,h,y.x,y.y)&&ye(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Is(o,u,c,d,l,h,x.x,x.y)&&ye(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Is(o,u,c,d,l,h,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Is(o,u,c,d,l,h,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function jv(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!ec(i,r)&&Rf(i,n,n.next,r)&&Ar(i,r)&&Ar(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Cr(n),Cr(n.next),n=s=r),n=n.next}while(n!==s);return es(n)}function Qv(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cy(a,o)){let c=Pf(a,o);a=es(a,a.next),c=es(c,c.next),Tr(a,t,e,n,i,r,0),Tr(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function ty(s,t,e,n){const i=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=Cf(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(oy(l));for(i.sort(ey),r=0;r<i.length;r++)e=ny(i[r],e);return e}function ey(s,t){return s.x-t.x}function ny(s,t){const e=iy(s,t);if(!e)return t;const n=Pf(e,s);return es(n,n.next),es(e,e.next)}function iy(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const h=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,i=e.x<e.next.x?e:e.next,h===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,l=i.y;let u=1/0,d;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Is(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),Ar(e,s)&&(d<u||d===u&&(e.x>i.x||e.x===i.x&&sy(i,e)))&&(i=e,u=d)),e=e.next;while(e!==o);return i}function sy(s,t){return ye(s.prev,s,t.prev)<0&&ye(t.next,s,s.next)<0}function ry(s,t,e,n){let i=s;do i.z===0&&(i.z=dl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ay(i)}function ay(s){let t,e,n,i,r,a,o,c,l=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(a>1);return s}function dl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function oy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Is(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function cy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ly(s,t)&&(Ar(s,t)&&Ar(t,s)&&hy(s,t)&&(ye(s.prev,s,t.prev)||ye(s,t.prev,t))||ec(s,t)&&ye(s.prev,s,s.next)>0&&ye(t.prev,t,t.next)>0)}function ye(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ec(s,t){return s.x===t.x&&s.y===t.y}function Rf(s,t,e,n){const i=Ta(ye(s,t,e)),r=Ta(ye(s,t,n)),a=Ta(ye(e,n,s)),o=Ta(ye(e,n,t));return!!(i!==r&&a!==o||i===0&&Ea(s,e,t)||r===0&&Ea(s,n,t)||a===0&&Ea(e,s,n)||o===0&&Ea(e,t,n))}function Ea(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ta(s){return s>0?1:s<0?-1:0}function ly(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Rf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ar(s,t){return ye(s.prev,s,s.next)<0?ye(s,t,s.next)>=0&&ye(s,s.prev,t)>=0:ye(s,t,s.prev)<0||ye(s,s.next,t)<0}function hy(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Pf(s,t){const e=new fl(s.i,s.x,s.y),n=new fl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wu(s,t,e,n){const i=new fl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Cr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uy(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Un{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Un.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Eu(t),Tu(n,t);let a=t.length;e.forEach(Eu);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Tu(n,e[c]);const o=$v.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Eu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Tu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class nc extends Xt{constructor(t=new $i([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Lt(i,3)),this.setAttribute("uv",new Lt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:dy;let y,x=!1,D,A,M,E;p&&(y=p.getSpacedPoints(u),x=!0,h=!1,D=p.computeFrenetFrames(u,!1),A=new C,M=new C,E=new C),h||(g=0,f=0,m=0,_=0);const b=o.extractPoints(l);let S=b.shape;const L=b.holes;if(!Un.isClockWise(S)){S=S.reverse();for(let N=0,W=L.length;N<W;N++){const I=L[N];Un.isClockWise(I)&&(L[N]=I.reverse())}}const F=Un.triangulateShape(S,L),H=S;for(let N=0,W=L.length;N<W;N++){const I=L[N];S=S.concat(I)}function V(N,W,I){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(W,I)}const O=S.length,Y=F.length;function U(N,W,I){let R,tt,dt;const ht=N.x-W.x,Dt=N.y-W.y,bt=I.x-N.x,P=I.y-N.y,w=ht*ht+Dt*Dt,q=ht*P-Dt*bt;if(Math.abs(q)>Number.EPSILON){const Q=Math.sqrt(w),ct=Math.sqrt(bt*bt+P*P),j=W.x-Dt/Q,Mt=W.y+ht/Q,pt=I.x-P/ct,Tt=I.y+bt/ct,$t=((pt-j)*P-(Tt-Mt)*bt)/(ht*P-Dt*bt);R=j+ht*$t-N.x,tt=Mt+Dt*$t-N.y;const lt=R*R+tt*tt;if(lt<=2)return new ot(R,tt);dt=Math.sqrt(lt/2)}else{let Q=!1;ht>Number.EPSILON?bt>Number.EPSILON&&(Q=!0):ht<-Number.EPSILON?bt<-Number.EPSILON&&(Q=!0):Math.sign(Dt)===Math.sign(P)&&(Q=!0),Q?(R=-Dt,tt=ht,dt=Math.sqrt(w)):(R=ht,tt=Dt,dt=Math.sqrt(w/2))}return new ot(R/dt,tt/dt)}const et=[];for(let N=0,W=H.length,I=W-1,R=N+1;N<W;N++,I++,R++)I===W&&(I=0),R===W&&(R=0),et[N]=U(H[N],H[I],H[R]);const rt=[];let ut,wt=et.concat();for(let N=0,W=L.length;N<W;N++){const I=L[N];ut=[];for(let R=0,tt=I.length,dt=tt-1,ht=R+1;R<tt;R++,dt++,ht++)dt===tt&&(dt=0),ht===tt&&(ht=0),ut[R]=U(I[R],I[dt],I[ht]);rt.push(ut),wt=wt.concat(ut)}for(let N=0;N<g;N++){const W=N/g,I=f*Math.cos(W*Math.PI/2),R=m*Math.sin(W*Math.PI/2)+_;for(let tt=0,dt=H.length;tt<dt;tt++){const ht=V(H[tt],et[tt],R);at(ht.x,ht.y,-I)}for(let tt=0,dt=L.length;tt<dt;tt++){const ht=L[tt];ut=rt[tt];for(let Dt=0,bt=ht.length;Dt<bt;Dt++){const P=V(ht[Dt],ut[Dt],R);at(P.x,P.y,-I)}}}const _t=m+_;for(let N=0;N<O;N++){const W=h?V(S[N],wt[N],_t):S[N];x?(M.copy(D.normals[0]).multiplyScalar(W.x),A.copy(D.binormals[0]).multiplyScalar(W.y),E.copy(y[0]).add(M).add(A),at(E.x,E.y,E.z)):at(W.x,W.y,0)}for(let N=1;N<=u;N++)for(let W=0;W<O;W++){const I=h?V(S[W],wt[W],_t):S[W];x?(M.copy(D.normals[N]).multiplyScalar(I.x),A.copy(D.binormals[N]).multiplyScalar(I.y),E.copy(y[N]).add(M).add(A),at(E.x,E.y,E.z)):at(I.x,I.y,d/u*N)}for(let N=g-1;N>=0;N--){const W=N/g,I=f*Math.cos(W*Math.PI/2),R=m*Math.sin(W*Math.PI/2)+_;for(let tt=0,dt=H.length;tt<dt;tt++){const ht=V(H[tt],et[tt],R);at(ht.x,ht.y,d+I)}for(let tt=0,dt=L.length;tt<dt;tt++){const ht=L[tt];ut=rt[tt];for(let Dt=0,bt=ht.length;Dt<bt;Dt++){const P=V(ht[Dt],ut[Dt],R);x?at(P.x,P.y+y[u-1].y,y[u-1].x+I):at(P.x,P.y,d+I)}}}Z(),nt();function Z(){const N=i.length/3;if(h){let W=0,I=O*W;for(let R=0;R<Y;R++){const tt=F[R];Rt(tt[2]+I,tt[1]+I,tt[0]+I)}W=u+g*2,I=O*W;for(let R=0;R<Y;R++){const tt=F[R];Rt(tt[0]+I,tt[1]+I,tt[2]+I)}}else{for(let W=0;W<Y;W++){const I=F[W];Rt(I[2],I[1],I[0])}for(let W=0;W<Y;W++){const I=F[W];Rt(I[0]+O*u,I[1]+O*u,I[2]+O*u)}}n.addGroup(N,i.length/3-N,0)}function nt(){const N=i.length/3;let W=0;yt(H,W),W+=H.length;for(let I=0,R=L.length;I<R;I++){const tt=L[I];yt(tt,W),W+=tt.length}n.addGroup(N,i.length/3-N,1)}function yt(N,W){let I=N.length;for(;--I>=0;){const R=I;let tt=I-1;tt<0&&(tt=N.length-1);for(let dt=0,ht=u+g*2;dt<ht;dt++){const Dt=O*dt,bt=O*(dt+1),P=W+R+Dt,w=W+tt+Dt,q=W+tt+bt,Q=W+R+bt;It(P,w,q,Q)}}}function at(N,W,I){c.push(N),c.push(W),c.push(I)}function Rt(N,W,I){xt(N),xt(W),xt(I);const R=i.length/3,tt=v.generateTopUV(n,i,R-3,R-2,R-1);X(tt[0]),X(tt[1]),X(tt[2])}function It(N,W,I,R){xt(N),xt(W),xt(R),xt(W),xt(I),xt(R);const tt=i.length/3,dt=v.generateSideWallUV(n,i,tt-6,tt-3,tt-2,tt-1);X(dt[0]),X(dt[1]),X(dt[3]),X(dt[1]),X(dt[2]),X(dt[3])}function xt(N){i.push(c[N*3+0]),i.push(c[N*3+1]),i.push(c[N*3+2])}function X(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return fy(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Co[i.type]().fromJSON(i)),new nc(n,t.options)}}const dy={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],u=t[i*3+1];return[new ot(r,a),new ot(o,c),new ot(l,u)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[i*3],f=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ot(a,1-c),new ot(l,1-d),new ot(h,1-m),new ot(_,1-p)]:[new ot(o,1-c),new ot(u,1-d),new ot(f,1-m),new ot(g,1-p)]}};function fy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Bs extends bi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bs(t.radius,t.detail)}}class kr extends bi{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new kr(t.radius,t.detail)}}class ic extends Xt{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],u=[];let d=t;const h=(e-t)/i,f=new C,m=new ot;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}d+=h}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const v=p+g,y=v,x=v+n+1,D=v+n+2,A=v+1;o.push(y,x,A),o.push(x,D,A)}}this.setIndex(o),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ic(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class sc extends Xt{constructor(t=new $i([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Lt(i,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(a,2));function l(u){const d=i.length/3,h=u.extractPoints(e);let f=h.shape;const m=h.holes;Un.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const v=m[g];Un.isClockWise(v)===!0&&(m[g]=v.reverse())}const _=Un.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){const v=f[g];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,p=_.length;g<p;g++){const v=_[g],y=v[0]+d,x=v[1]+d,D=v[2]+d;n.push(y,x,D),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return py(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new sc(n,t.curveSegments)}}function py(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class is extends Xt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new C,h=new C,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const A=D/e;d.x=-t*Math.cos(i+A*r)*Math.sin(a+y*o),d.y=t*Math.cos(a+y*o),d.z=t*Math.sin(i+A*r)*Math.sin(a+y*o),m.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),g.push(A+x,1-y),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=u[p][v+1],x=u[p][v],D=u[p+1][v],A=u[p+1][v+1];(p!==0||a>0)&&f.push(y,x,A),(p!==n-1||c<Math.PI)&&f.push(x,D,A)}this.setIndex(f),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rc extends bi{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rc(t.radius,t.detail)}}class ac extends Xt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],u=new C,d=new C,h=new C;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*r,g=f/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(_),d.y=(t+e*Math.cos(g))*Math.sin(_),d.z=e*Math.sin(g),o.push(d.x,d.y,d.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;a.push(_,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ac(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class oc extends Xt{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],l=[],u=[],d=new C,h=new C,f=new C,m=new C,_=new C,g=new C,p=new C;for(let y=0;y<=n;++y){const x=y/n*r*Math.PI*2;v(x,r,a,t,f),v(x+.01,r,a,t,m),g.subVectors(m,f),p.addVectors(m,f),_.crossVectors(g,p),p.crossVectors(_,g),_.normalize(),p.normalize();for(let D=0;D<=i;++D){const A=D/i*Math.PI*2,M=-e*Math.cos(A),E=e*Math.sin(A);d.x=f.x+(M*p.x+E*_.x),d.y=f.y+(M*p.y+E*_.y),d.z=f.z+(M*p.z+E*_.z),c.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),u.push(y/n),u.push(D/i)}}for(let y=1;y<=n;y++)for(let x=1;x<=i;x++){const D=(i+1)*(y-1)+(x-1),A=(i+1)*y+(x-1),M=(i+1)*y+x,E=(i+1)*(y-1)+x;o.push(D,A,E),o.push(A,M,E)}this.setIndex(o),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(u,2));function v(y,x,D,A,M){const E=Math.cos(y),b=Math.sin(y),S=D/x*y,L=Math.cos(S);M.x=A*(2+L)*.5*E,M.y=A*(2+L)*b*.5,M.z=A*Math.sin(S)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class cc extends Xt{constructor(t=new Jl(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,c=new C,l=new ot;let u=new C;const d=[],h=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Lt(d,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(f,2));function _(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),v(),p()}function g(y){u=t.getPointAt(y/e,u);const x=a.normals[y],D=a.binormals[y];for(let A=0;A<=i;A++){const M=A/i*Math.PI*2,E=Math.sin(M),b=-Math.cos(M);c.x=b*x.x+E*D.x,c.y=b*x.y+E*D.y,c.z=b*x.z+E*D.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=i;x++){const D=(i+1)*(y-1)+(x-1),A=(i+1)*y+(x-1),M=(i+1)*y+x,E=(i+1)*(y-1)+x;m.push(D,A,E),m.push(A,M,E)}}function v(){for(let y=0;y<=e;y++)for(let x=0;x<=i;x++)l.x=y/e,l.y=x/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new cc(new Co[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class If extends Xt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new C,r=new C;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const d=c[l],h=d.start,f=d.count;for(let m=h,_=h+f;m<_;m+=3)for(let g=0;g<3;g++){const p=o.getX(m+g),v=o.getX(m+(g+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,v),Au(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const u=3*o+l,d=3*o+(l+1)%3;i.fromBufferAttribute(a,u),r.fromBufferAttribute(a,d),Au(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Lt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Au(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Cu=Object.freeze({__proto__:null,BoxGeometry:si,CapsuleGeometry:zr,CircleGeometry:jo,ConeGeometry:Qo,CylinderGeometry:On,DodecahedronGeometry:tc,EdgesGeometry:Af,ExtrudeGeometry:nc,IcosahedronGeometry:Bs,LatheGeometry:Br,OctahedronGeometry:kr,PlaneGeometry:gn,PolyhedronGeometry:bi,RingGeometry:ic,ShapeGeometry:sc,SphereGeometry:is,TetrahedronGeometry:rc,TorusGeometry:ac,TorusKnotGeometry:oc,TubeGeometry:cc,WireframeGeometry:If});class Lf extends He{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new ft(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Df extends dn{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class jl extends He{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Si,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Uf extends jl{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Nf extends He{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Si,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Dr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ff extends He{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new ft(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Si,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Of extends He{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Si,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Zn extends He{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Si,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Dr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bf extends He{static get type(){return"MeshMatcapMaterial"}constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.color=new ft(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Si,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zf extends $e{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Xi(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function kf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Vf(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function pl(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)i[a++]=s[o+c]}return i}function Ql(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}function my(s,t,e,n,i=30){const r=s.clone();r.name=t;const a=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],u=l.getValueSize(),d=[],h=[];for(let f=0;f<l.times.length;++f){const m=l.times[f]*i;if(!(m<e||m>=n)){d.push(l.times[f]);for(let _=0;_<u;++_)h.push(l.values[f*u+_])}}d.length!==0&&(l.times=Xi(d,l.times.constructor),l.values=Xi(h,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function gy(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){const o=e.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===c});if(l===void 0)continue;let u=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);const m=o.times.length-1;let _;if(r<=o.times[0]){const p=u,v=d-u;_=o.values.slice(p,v)}else if(r>=o.times[m]){const p=m*d+u,v=p+d-u;_=o.values.slice(p,v)}else{const p=o.createInterpolant(),v=u,y=d-u;p.evaluate(r),_=p.resultBuffer.slice(v,y)}c==="quaternion"&&new Ye().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let p=0;p<g;++p){const v=p*f+h;if(c==="quaternion")Ye.multiplyQuaternionsFlat(l.values,v,_,0,l.values,v);else{const y=f-h*2;for(let x=0;x<y;++x)l.values[v+x]-=_[x]}}}return s.blendMode=Dl,s}const _y={convertArray:Xi,isTypedArray:kf,getKeyframeOrder:Vf,sortedArray:pl,flattenJSON:Ql,subclip:my,makeClipAdditive:gy};class Vr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Hf extends Vr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hi,endingEnd:Hi}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gi:r=t,o=2*e-n;break;case Mr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gi:a=t,c=2*n-e;break;case Mr:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-h*g+2*h*_-h*m,v=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,x=f*g-f*_;for(let D=0;D!==o;++D)r[D]=p*a[u+D]+v*a[l+D]+y*a[c+D]+x*a[d+D];return r}}class th extends Vr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(i-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*d+a[c+h]*u;return r}}class Gf extends Vr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Tn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xi(e,this.TimeBufferType),this.values=Xi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xi(t.times,Array),values:Xi(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Gf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new th(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case wo:e=this.InterpolantFactoryMethodLinear;break;case ka:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return ka}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&kf(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ka,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(i)c=!0;else{const d=o*n,h=d-n,f=d+n;for(let m=0;m!==n;++m){const _=e[d+m];if(_!==e[h+m]||_!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=wo;class ss extends Tn{constructor(t,e,n){super(t,e,n)}}ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=yr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class eh extends Tn{}eh.prototype.ValueTypeName="color";class Rr extends Tn{}Rr.prototype.ValueTypeName="number";class Wf extends Vr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e);let l=t*o;for(let u=l+o;l!==u;l+=4)Ye.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Hr extends Tn{InterpolantFactoryMethodLinear(t){return new Wf(this.times,this.values,this.getValueSize(),t)}}Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class rs extends Tn{constructor(t,e,n){super(t,e,n)}}rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=yr;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Pr extends Tn{}Pr.prototype.ValueTypeName="vector";class Ir{constructor(t="",e=-1,n=[],i=Bo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=hn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(vy(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(Tn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=Vf(c);c=pl(c,1,u),l=pl(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Rr(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],u=l.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,m,_){if(f.length!==0){const g=[],p=[];Ql(f,g,p,m),g.length!==0&&_.push(new d(h,g,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let d=0;d<l.length;d++){const h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let _=0;_<h[m].morphTargets.length;_++)f[h[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let v=0;v!==h[m].morphTargets.length;++v){const y=h[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new Rr(".morphTargetInfluence["+_+"]",g,p))}c=f.length*a}else{const f=".bones["+e[d].name+"]";n(Pr,f+".position",h,"pos",i),n(Hr,f+".quaternion",h,"rot",i),n(Pr,f+".scale",h,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rr;case"vector":case"vector2":case"vector3":case"vector4":return Pr;case"color":return eh;case"quaternion":return Hr;case"bool":case"boolean":return ss;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function vy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=xy(s.type);if(s.times===void 0){const e=[],n=[];Ql(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Kn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class nh{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const Xf=new nh;class nn{constructor(t){this.manager=t!==void 0?t:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}nn.DEFAULT_MATERIAL_NAME="__DEFAULT";const qn={};class yy extends Error{constructor(t,e){super(t),this.response=e}}class ii extends nn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Kn.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(qn[t]!==void 0){qn[t].push({onLoad:e,onProgress:n,onError:i});return}qn[t]=[],qn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;const u=qn[t],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){d.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const D=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let A=0,M=u.length;A<M;A++){const E=u[A];E.onProgress&&E.onProgress(D)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(g)}else throw new yy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Kn.add(t,l);const u=qn[t];delete qn[t];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=qn[t];if(u===void 0)throw this.manager.itemError(t),l;delete qn[t];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class My extends nn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new ii(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=Ir.parse(t[n]);e.push(i)}return e}}class Sy extends nn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=[],o=new $o,c=new ii(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function u(d){c.load(t[d],function(h){const f=r.parse(h,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(o.minFilter=Ce),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let d=0,h=t.length;d<h;++d)u(d);else c.load(t,function(d){const h=r.parse(d,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let _=0;_<h.mipmapCount;_++)a[m].mipmaps.push(h.mipmaps[m*h.mipmapCount+_]),a[m].format=h.format,a[m].width=h.width,a[m].height=h.height}o.image=a}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=Ce),o.format=h.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}}class Lr extends nn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Kn.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=wr("img");function c(){u(),Kn.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){u(),i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class by extends nn{constructor(t){super(t)}load(t,e,n,i){const r=new Fr;r.colorSpace=Se;const a=new Lr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(t[l],function(u){r.images[l]=u,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let l=0;l<t.length;++l)c(l);return r}}class wy extends nn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Dn,o=new ii(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(c){let l;try{l=r.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:xn,a.wrapT=l.wrapT!==void 0?l.wrapT:xn,a.magFilter=l.magFilter!==void 0?l.magFilter:Ce,a.minFilter=l.minFilter!==void 0?l.minFilter:Ce,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=In),l.mipmapCount===1&&(a.minFilter=Ce),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,e&&e(a,l)},n,i),a}}class qf extends nn{constructor(t){super(t)}load(t,e,n,i){const r=new we,a=new Lr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class wi extends oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ih extends wi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $c=new Vt,Ru=new C,Pu=new C;class sh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ru),Pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pu),e.updateMatrixWorld(),$c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ey extends sh{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ns*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Yf extends wi{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.target=new oe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ey}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Iu=new Vt,ir=new C,Jc=new C;class Ty extends sh{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(t.matrixWorld),n.position.copy(ir),Jc.copy(n.position),Jc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Jc),n.updateMatrixWorld(),i.makeTranslation(-ir.x,-ir.y,-ir.z),Iu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu)}}class Zf extends wi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ty}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ay extends sh{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rh extends wi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.target=new oe,this.shadow=new Ay}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $f extends wi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jf extends wi{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Kf{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new C)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class jf extends wi{constructor(t=new Kf,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class lc extends nn{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,a=new ii(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const a=t.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new ft().setHex(a.value);break;case"v2":i.uniforms[r].value=new ot().fromArray(a.value);break;case"v3":i.uniforms[r].value=new C().fromArray(a.value);break;case"v4":i.uniforms[r].value=new ae().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Zt().fromArray(a.value);break;case"m4":i.uniforms[r].value=new Vt().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new ot().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return lc.createMaterialFromType(t)}static createMaterialFromType(t){const e={ShadowMaterial:Lf,SpriteMaterial:Wl,RawShaderMaterial:Df,ShaderMaterial:dn,PointsMaterial:Yo,MeshPhysicalMaterial:Uf,MeshStandardMaterial:jl,MeshPhongMaterial:Nf,MeshToonMaterial:Ff,MeshNormalMaterial:Of,MeshLambertMaterial:Zn,MeshDepthMaterial:Vl,MeshDistanceMaterial:Hl,MeshBasicMaterial:tn,MeshMatcapMaterial:Bf,LineDashedMaterial:zf,LineBasicMaterial:$e,Material:He};return new e[t]}}class ml{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch(n){return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Qf extends Xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class tp extends nn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new ii(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,m){if(e[m]!==void 0)return e[m];const g=f.interleavedBuffers[m],p=r(f,g.buffer),v=Rs(g.type,p),y=new Xo(v,g.stride);return y.uuid=g.uuid,e[m]=y,y}function r(f,m){if(n[m]!==void 0)return n[m];const g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const a=t.isInstancedBufferGeometry?new Qf:new Xt,o=t.data.index;if(o!==void 0){const f=Rs(o.type,o.array);a.setIndex(new se(f,1))}const c=t.data.attributes;for(const f in c){const m=c[f];let _;if(m.isInterleavedBufferAttribute){const g=i(t.data,m.data);_=new ts(g,m.itemSize,m.offset,m.normalized)}else{const g=Rs(m.type,m.array),p=m.isInstancedBufferAttribute?Os:se;_=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),a.setAttribute(f,_)}const l=t.data.morphAttributes;if(l)for(const f in l){const m=l[f],_=[];for(let g=0,p=m.length;g<p;g++){const v=m[g];let y;if(v.isInterleavedBufferAttribute){const x=i(t.data,v.data);y=new ts(x,v.itemSize,v.offset,v.normalized)}else{const x=Rs(v.type,v.array);y=new se(x,v.itemSize,v.normalized)}v.name!==void 0&&(y.name=v.name),_.push(y)}a.morphAttributes[f]=_}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,m=d.length;f!==m;++f){const _=d[f];a.addGroup(_.start,_.count,_.materialIndex)}const h=t.data.boundingSphere;if(h!==void 0){const f=new C;h.center!==void 0&&f.fromArray(h.center),a.boundingSphere=new Be(f,h.radius)}return t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}}class Cy extends nn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=this.path===""?ml.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;const o=new ii(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){let l=null;try{l=JSON.parse(c)}catch(d){i!==void 0&&i(d),console.error("THREE:ObjectLoader: Can't parse "+t+".",d.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(l,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?ml.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new ii(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(t,e),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,function(){e!==void 0&&e(l)}),o=this.parseTextures(t.textures,a),c=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,r,c,o,n),u=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,u),this.bindLightTargets(l),e!==void 0){let d=!1;for(const h in a)if(a[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(l)}return l}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,i,o,a,e),l=this.parseSkeletons(t.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new $i().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=new qo().fromJSON(t[r],i);n[o.uuid]=o}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new tp;for(let r=0,a=t.length;r<a;r++){let o;const c=t[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in Cu?o=Cu[c.type].fromJSON(c,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new lc;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){const c=t[a];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=Ir.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function a(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(u)}else return c.data?{data:Rs(c.type,c.data),width:c.width,height:c.height}:null}if(t!==void 0&&t.length>0){const c=new nh(e);r=new Lr(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,u=t.length;l<u;l++){const d=t[l],h=d.url;if(Array.isArray(h)){const f=[];for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new Dn(p.data,p.width,p.height)))}i[d.uuid]=new Wi(f)}else{const f=o(d.url);i[d.uuid]=new Wi(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:Rs(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){i=new Lr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){const c=t[a],l=c.url;if(Array.isArray(l)){const u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d],m=await r(f);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new Dn(m.data,m.width,m.height)))}n[c.uuid]=new Wi(u)}else{const u=await r(c.url);n[c.uuid]=new Wi(u)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=t[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const c=e[o.image],l=c.data;let u;Array.isArray(l)?(u=new Fr,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new Dn:u=new we,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,Ry)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],Lu),u.wrapT=n(o.wrap[1],Lu)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,Du)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,Du)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),i[o.uuid]=u}return i}parseObject(t,e,n,i,r){let a;function o(h){return e[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),e[h]}function c(h){if(h!==void 0){if(Array.isArray(h)){const f=[];for(let m=0,_=h.length;m<_;m++){const g=h[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),n[h]}}function l(h){return i[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",h),i[h]}let u,d;switch(t.type){case"Scene":a=new Gl,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new ft(t.background):a.background=l(t.background)),t.environment!==void 0&&(a.environment=l(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new Or(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new Wo(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new Ue(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new Ho(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new $f(t.color,t.intensity);break;case"DirectionalLight":a=new rh(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new Zf(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new Jf(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new Yf(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"";break;case"HemisphereLight":a=new ih(t.color,t.groundColor,t.intensity);break;case"LightProbe":a=new jf().fromJSON(t);break;case"SkinnedMesh":u=o(t.geometry),d=c(t.material),a=new vf(u,d),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":u=o(t.geometry),d=c(t.material),a=new ee(u,d);break;case"InstancedMesh":u=o(t.geometry),d=c(t.material);const h=t.count,f=t.instanceMatrix,m=t.instanceColor;a=new Eo(u,d,h),a.instanceMatrix=new Os(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new Os(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":u=o(t.geometry),d=c(t.material),a=new yf(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),a.geometry=u,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._visibility=t.visibility,a._active=t.active,a._bounds=t.bounds.map(_=>{const g=new Ze;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const p=new Be;return p.radius=_.sphereRadius,p.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:p}}),a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._geometryCount=t.geometryCount,a._matricesTexture=l(t.matricesTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=l(t.colorsTexture.uuid));break;case"LOD":a=new xf;break;case"Line":a=new Mi(o(t.geometry),c(t.material));break;case"LineLoop":a=new Mf(o(t.geometry),c(t.material));break;case"LineSegments":a=new zn(o(t.geometry),c(t.material));break;case"PointCloud":case"Points":a=new Zo(o(t.geometry),c(t.material));break;case"Sprite":a=new _f(c(t.material));break;case"Group":a=new De;break;case"Bone":a=new Xl;break;default:a=new oe}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){const h=t.children;for(let f=0;f<h.length;f++)a.add(this.parseObject(h[f],e,n,i,r))}if(t.animations!==void 0){const h=t.animations;for(let f=0;f<h.length;f++){const m=h[f];a.animations.push(r[m])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);const h=t.levels;for(let f=0;f<h.length;f++){const m=h[f],_=a.getObjectByProperty("uuid",m.object);_!==void 0&&a.addLevel(_,m.distance,m.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new oe}})}}const Ry={UVMapping:Io,CubeReflectionMapping:ei,CubeRefractionMapping:yi,EquirectangularReflectionMapping:_r,EquirectangularRefractionMapping:xr,CubeUVReflectionMapping:zs},Lu={RepeatWrapping:Ki,ClampToEdgeWrapping:xn,MirroredRepeatWrapping:vr},Du={NearestFilter:Oe,NearestMipmapNearestFilter:bl,NearestMipmapLinearFilter:Cs,LinearFilter:Ce,LinearMipmapNearestFilter:cr,LinearMipmapLinearFilter:In};class Py extends nn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Kn.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Kn.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Kn.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Kn.add(t,c),r.manager.itemStart(t)}}let Aa;class ah{static getContext(){return Aa===void 0&&(Aa=new(window.AudioContext||window.webkitAudioContext)),Aa}static setContext(t){Aa=t}}class Iy extends nn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new ii(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){try{const l=c.slice(0);ah.getContext().decodeAudioData(l,function(d){e(d)}).catch(o)}catch(l){o(l)}},n,i);function o(c){i?i(c):console.error(c),r.manager.itemError(t)}}}const Uu=new Vt,Nu=new Vt,Di=new Vt;class Ly{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ue,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ue,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Di.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,a=e.near*Math.tan(Zi*e.fov*.5)/e.zoom;let o,c;Nu.elements[12]=-i,Uu.elements[12]=i,o=-a*e.aspect+r,c=a*e.aspect+r,Di.elements[0]=2*e.near/(c-o),Di.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(Di),o=-a*e.aspect-r,c=a*e.aspect-r,Di.elements[0]=2*e.near/(c-o),Di.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(Di)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Nu),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Uu)}}class ep{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Fu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Fu(){return performance.now()}const Ui=new C,Ou=new Ye,Dy=new C,Ni=new C;class Uy extends oe{constructor(){super(),this.type="AudioListener",this.context=ah.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ep}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ui,Ou,Dy),Ni.set(0,0,-1).applyQuaternion(Ou),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ui.x,i),e.positionY.linearRampToValueAtTime(Ui.y,i),e.positionZ.linearRampToValueAtTime(Ui.z,i),e.forwardX.linearRampToValueAtTime(Ni.x,i),e.forwardY.linearRampToValueAtTime(Ni.y,i),e.forwardZ.linearRampToValueAtTime(Ni.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(Ui.x,Ui.y,Ui.z),e.setOrientation(Ni.x,Ni.y,Ni.z,n.x,n.y,n.z)}}class np extends oe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const Fi=new C,Bu=new Ye,Ny=new C,Oi=new C;class Fy extends np{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Fi,Bu,Ny),Oi.set(0,0,1).applyQuaternion(Bu);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Fi.x,n),e.positionY.linearRampToValueAtTime(Fi.y,n),e.positionZ.linearRampToValueAtTime(Fi.z,n),e.orientationX.linearRampToValueAtTime(Oi.x,n),e.orientationY.linearRampToValueAtTime(Oi.y,n),e.orientationZ.linearRampToValueAtTime(Oi.z,n)}else e.setPosition(Fi.x,Fi.y,Fi.z),e.setOrientation(Oi.x,Oi.y,Oi.z)}}class Oy{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class ip{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Ye.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const a=this._workIndex*r;Ye.multiplyQuaternionsFlat(t,a,t,e,t,n),Ye.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=e+o;t[c]=t[c]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const oh="\\[\\]\\.:\\/",By=new RegExp("["+oh+"]","g"),ch="[^"+oh+"]",zy="[^"+oh.replace("\\.","")+"]",ky=/((?:WC+[\/:])*)/.source.replace("WC",ch),Vy=/(WCOD+)?/.source.replace("WCOD",zy),Hy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),Gy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),Wy=new RegExp("^"+ky+Vy+Hy+Gy+"$"),Xy=["material","materials","bones","map"];class qy{constructor(t,e,n){const i=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class re{constructor(t,e,n){this.path=e,this.parsedPath=n||re.parseTrackName(e),this.node=re.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new re.Composite(t,e,n):new re(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(By,"")}static parseTrackName(t){const e=Wy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Xy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=re.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[i];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}re.Composite=qy;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yy{constructor(){this.isAnimationObjectGroup=!0,this.uuid=hn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,c=t.length,l=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const h=arguments[u],f=h.uuid;let m=e[f];if(m===void 0){m=c++,e[f]=m,t.push(h);for(let _=0,g=a;_!==g;++_)r[_].push(new re(h,n[_],i[_]))}else if(m<l){o=t[m];const _=--l,g=t[_];e[g.uuid]=m,t[m]=g,e[f]=_,t[_]=h;for(let p=0,v=a;p!==v;++p){const y=r[p],x=y[_];let D=y[m];y[m]=x,D===void 0&&(D=new re(h,n[p],i[p])),y[_]=D}}else t[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],l=c.uuid,u=e[l];if(u!==void 0&&u>=r){const d=r++,h=t[d];e[h.uuid]=u,t[u]=h,e[l]=d,t[d]=c;for(let f=0,m=i;f!==m;++f){const _=n[f],g=_[d],p=_[u];_[u]=g,_[d]=p}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=t.length;for(let o=0,c=arguments.length;o!==c;++o){const l=arguments[o],u=l.uuid,d=e[u];if(d!==void 0)if(delete e[u],d<r){const h=--r,f=t[h],m=--a,_=t[m];e[f.uuid]=d,t[d]=f,e[_.uuid]=h,t[h]=_,t.pop();for(let g=0,p=i;g!==p;++g){const v=n[g],y=v[h],x=v[m];v[d]=y,v[h]=x,v.pop()}}else{const h=--a,f=t[h];h>0&&(e[f.uuid]=d),t[d]=f,t.pop();for(let m=0,_=i;m!==_;++m){const g=n[m];g[d]=g[h],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,d=new Array(l);i=r.length,n[t]=i,a.push(t),o.push(e),r.push(d);for(let h=u,f=c.length;h!==f;++h){const m=c[h];d[h]=new re(m,t,e)}return d}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=t[o];e[l]=n,a[n]=c,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class sp{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,a=r.length,o=new Array(a),c={endingStart:Hi,endingEnd:Hi};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Vd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Dl:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case Bo:default:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const a=n===Hd;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===kd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Gi,i.endingEnd=Gi):(t?i.endingStart=this.zeroSlopeAtStart?Gi:Hi:i.endingStart=Mr,e?i.endingEnd=this.zeroSlopeAtEnd?Gi:Hi:i.endingEnd=Mr)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=e,o[1]=r+t,c[1]=n,this}}const Zy=new Float32Array(1);class $y extends Bn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let d=0;d!==r;++d){const h=i[d],f=h.name;let m=u[f];if(m!==void 0)++m.referenceCount,a[d]=m;else{if(m=a[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const _=e&&e._propertyBindings[d].binding.parsedPath;m=new ip(re.create(n,f,_),h.ValueTypeName,h.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const d=o.actionByRoot,h=(t._localRoot||this._root).uuid;delete d[h],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new th(new Float32Array(2),new Float32Array(2),1,Zy),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let a=typeof t=="string"?Ir.findByName(i,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Bo),c!==void 0){const d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new sp(this,a,e,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Ir.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,d=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=u,e[u]=d,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class lh{constructor(t){this.value=t}clone(){return new lh(this.value.clone===void 0?this.value:this.value.clone())}}let Jy=0;class Ky extends Bn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Jy++}),this.name="",this.usage=Sr,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class jy extends Xo{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class Qy{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const zu=new Vt;class tM{constructor(t,e,n=0,i=1/0){this.ray=new Vs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zu),this}intersectObject(t,e=!0,n=[]){return gl(t,this,n,e),n.sort(ku),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)gl(t[i],this,n,e);return n.sort(ku),n}}function ku(s,t){return s.distance-t.distance}function gl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)gl(r[a],t,e,!0)}}class eM{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nM{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}class hh{constructor(t,e,n,i){hh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}}const Vu=new ot;class iM{constructor(t=new ot(1/0,1/0),e=new ot(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vu.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vu).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hu=new C,Ca=new C;class sM{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Hu.subVectors(t,this.start),Ca.subVectors(this.end,this.start);const n=Ca.dot(Ca);let r=Ca.dot(Hu)/n;return e&&(r=be(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Gu=new C;class rM extends oe{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new Xt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,u=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Lt(i,3));const r=new $e({fog:!1,toneMapped:!1});this.cone=new zn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Gu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Gu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const fi=new C,Ra=new Vt,Kc=new Vt;class aM extends zn{constructor(t){const e=rp(t),n=new Xt,i=[],r=[],a=new ft(0,0,1),o=new ft(0,1,0);for(let l=0;l<e.length;l++){const u=e[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Lt(i,3)),n.setAttribute("color",new Lt(r,3));const c=new $e({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Kc.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){const o=e[r];o.parent&&o.parent.isBone&&(Ra.multiplyMatrices(Kc,o.matrixWorld),fi.setFromMatrixPosition(Ra),i.setXYZ(a,fi.x,fi.y,fi.z),Ra.multiplyMatrices(Kc,o.parent.matrixWorld),fi.setFromMatrixPosition(Ra),i.setXYZ(a+1,fi.x,fi.y,fi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function rp(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,rp(s.children[e]));return t}class oM extends ee{constructor(t,e,n){const i=new is(e,4,2),r=new tn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const cM=new C,Wu=new ft,Xu=new ft;class lM extends oe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new kr(e);i.rotateY(Math.PI*.5),this.material=new tn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new se(a,3)),this.add(new ee(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Wu.copy(this.light.color),Xu.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?Wu:Xu;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(cM.setFromMatrixPosition(this.light.matrixWorld).negate())}}class hM extends zn{constructor(t=10,e=10,n=4473924,i=8947848){n=new ft(n),i=new ft(i);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let h=0,f=0,m=-o;h<=e;h++,m+=a){c.push(-o,0,m,o,0,m),c.push(m,0,-o,m,0,o);const _=h===r?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const u=new Xt;u.setAttribute("position",new Lt(c,3)),u.setAttribute("color",new Lt(l,3));const d=new $e({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class uM extends zn{constructor(t=10,e=16,n=8,i=64,r=4473924,a=8947848){r=new ft(r),a=new ft(a);const o=[],c=[];if(e>1)for(let d=0;d<e;d++){const h=d/e*(Math.PI*2),f=Math.sin(h)*t,m=Math.cos(h)*t;o.push(0,0,0),o.push(f,0,m);const _=d&1?r:a;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let d=0;d<n;d++){const h=d&1?r:a,f=t-t/n*d;for(let m=0;m<i;m++){let _=m/i*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f;o.push(g,0,p),c.push(h.r,h.g,h.b),_=(m+1)/i*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f,o.push(g,0,p),c.push(h.r,h.g,h.b)}}const l=new Xt;l.setAttribute("position",new Lt(o,3)),l.setAttribute("color",new Lt(c,3));const u=new $e({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const qu=new C,Pa=new C,Yu=new C;class dM extends oe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Xt;i.setAttribute("position",new Lt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new $e({fog:!1,toneMapped:!1});this.lightPlane=new Mi(i,r),this.add(this.lightPlane),i=new Xt,i.setAttribute("position",new Lt([0,0,0,0,0,1],3)),this.targetLine=new Mi(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),qu.setFromMatrixPosition(this.light.matrixWorld),Pa.setFromMatrixPosition(this.light.target.matrixWorld),Yu.subVectors(Pa,qu),this.lightPlane.lookAt(Pa),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Pa),this.targetLine.scale.z=Yu.length()}}const Ia=new C,Me=new Vo;class fM extends zn{constructor(t){const e=new Xt,n=new $e({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,_){c(m),c(_)}function c(m){i.push(0,0,0),r.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}e.setAttribute("position",new Lt(i,3)),e.setAttribute("color",new Lt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const l=new ft(16755200),u=new ft(16711680),d=new ft(43775),h=new ft(16777215),f=new ft(3355443);this.setColors(l,u,d,h,f)}setColors(t,e,n,i,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;Me.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Ee("c",e,t,Me,0,0,-1),Ee("t",e,t,Me,0,0,1),Ee("n1",e,t,Me,-n,-i,-1),Ee("n2",e,t,Me,n,-i,-1),Ee("n3",e,t,Me,-n,i,-1),Ee("n4",e,t,Me,n,i,-1),Ee("f1",e,t,Me,-n,-i,1),Ee("f2",e,t,Me,n,-i,1),Ee("f3",e,t,Me,-n,i,1),Ee("f4",e,t,Me,n,i,1),Ee("u1",e,t,Me,n*.7,i*1.1,-1),Ee("u2",e,t,Me,-n*.7,i*1.1,-1),Ee("u3",e,t,Me,0,i*2,-1),Ee("cf1",e,t,Me,-n,0,1),Ee("cf2",e,t,Me,n,0,1),Ee("cf3",e,t,Me,0,-i,1),Ee("cf4",e,t,Me,0,i,1),Ee("cn1",e,t,Me,-n,0,-1),Ee("cn2",e,t,Me,n,0,-1),Ee("cn3",e,t,Me,0,-i,-1),Ee("cn4",e,t,Me,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ee(s,t,e,n,i,r,a){Ia.set(i,r,a).unproject(n);const o=t[s];if(o!==void 0){const c=e.getAttribute("position");for(let l=0,u=o.length;l<u;l++)c.setXYZ(o[l],Ia.x,Ia.y,Ia.z)}}const La=new Ze;class pM extends zn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Xt;r.setIndex(new se(n,1)),r.setAttribute("position",new se(i,3)),super(r,new $e({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&La.setFromObject(this.object),La.isEmpty())return;const e=La.min,n=La.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class mM extends zn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Xt;r.setIndex(new se(n,1)),r.setAttribute("position",new Lt(i,3)),super(r,new $e({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class gM extends Mi{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Xt;a.setAttribute("position",new Lt(r,3)),a.computeBoundingSphere(),super(a,new $e({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Xt;c.setAttribute("position",new Lt(o,3)),c.computeBoundingSphere(),this.add(new ee(c,new tn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Zu=new C;let Da,jc;class _M extends oe{constructor(t=new C(0,0,1),e=new C(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Da===void 0&&(Da=new Xt,Da.setAttribute("position",new Lt([0,0,0,0,1,0],3)),jc=new On(0,.5,1,5,1),jc.translate(0,-.5,0)),this.position.copy(e),this.line=new Mi(Da,new $e({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ee(jc,new tn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Zu.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Zu,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class xM extends zn{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Xt;i.setAttribute("position",new Lt(e,3)),i.setAttribute("color",new Lt(n,3));const r=new $e({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new ft,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class vM{constructor(){this.type="ShapePath",this.color=new ft,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Er,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const v=[];for(let y=0,x=p.length;y<x;y++){const D=p[y],A=new $i;A.curves=D.curves,v.push(A)}return v}function n(p,v){const y=v.length;let x=!1;for(let D=y-1,A=0;A<y;D=A++){let M=v[D],E=v[A],b=E.x-M.x,S=E.y-M.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(M=v[A],b=-b,E=v[D],S=-S),p.y<M.y||p.y>E.y)continue;if(p.y===M.y){if(p.x===M.x)return!0}else{const L=S*(p.x-M.x)-b*(p.y-M.y);if(L===0)return!0;if(L<0)continue;x=!x}}else{if(p.y!==M.y)continue;if(E.x<=p.x&&p.x<=M.x||M.x<=p.x&&p.x<=E.x)return!0}}return x}const i=Un.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new $i,c.curves=o.curves,l.push(c),l;let u=!i(r[0].getPoints());u=t?!u:u;const d=[],h=[];let f=[],m=0,_;h[m]=void 0,f[m]=[];for(let p=0,v=r.length;p<v;p++)o=r[p],_=o.getPoints(),a=i(_),a=t?!a:a,a?(!u&&h[m]&&m++,h[m]={s:new $i,p:_},h[m].s.curves=o.curves,u&&m++,f[m]=[]):f[m].push({h:o,p:_[0]});if(!h[0])return e(r);if(h.length>1){let p=!1,v=0;for(let y=0,x=h.length;y<x;y++)d[y]=[];for(let y=0,x=h.length;y<x;y++){const D=f[y];for(let A=0;A<D.length;A++){const M=D[A];let E=!0;for(let b=0;b<h.length;b++)n(M.p,h[b].p)&&(y!==b&&v++,E?(E=!1,d[b].push(M)):p=!0);E&&d[y].push(M)}}v>0&&p===!1&&(f=d)}let g;for(let p=0,v=h.length;p<v;p++){c=h[p].s,l.push(c),g=f[p];for(let y=0,x=g.length;y<x;y++)c.holes.push(g[y].h)}return l}}class yM extends Bn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class MM extends wn{constructor(t=1,e=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);const SM=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Sl,AddEquation:_i,AddOperation:Ld,AdditiveAnimationBlendMode:Dl,AdditiveBlending:Ls,AgXToneMapping:Od,AlphaFormat:Al,AlwaysCompare:jd,AlwaysDepth:Xa,AlwaysStencilFunc:al,AmbientLight:$f,AnimationAction:sp,AnimationClip:Ir,AnimationLoader:My,AnimationMixer:$y,AnimationObjectGroup:Yy,AnimationUtils:_y,ArcCurve:Sf,ArrayCamera:mf,ArrowHelper:_M,AttachedBindMode:rl,Audio:np,AudioAnalyser:Oy,AudioContext:ah,AudioListener:Uy,AudioLoader:Iy,AxesHelper:xM,BackSide:Fe,BasicDepthPacking:Gd,BasicShadowMap:_p,BatchedMesh:yf,Bone:Xl,BooleanKeyframeTrack:ss,Box2:iM,Box3:Ze,Box3Helper:mM,BoxGeometry:si,BoxHelper:pM,BufferAttribute:se,BufferGeometry:Xt,BufferGeometryLoader:tp,ByteType:wl,Cache:Kn,Camera:Vo,CameraHelper:fM,CanvasTexture:Jo,CapsuleGeometry:zr,CatmullRomCurve3:bf,CineonToneMapping:Nd,CircleGeometry:jo,ClampToEdgeWrapping:xn,Clock:ep,Color:ft,ColorKeyframeTrack:eh,ColorManagement:ie,CompressedArrayTexture:kv,CompressedCubeTexture:Vv,CompressedTexture:$o,CompressedTextureLoader:Sy,ConeGeometry:Qo,ConstantAlphaFactor:Rd,ConstantColorFactor:Ad,Controls:yM,CubeCamera:of,CubeReflectionMapping:ei,CubeRefractionMapping:yi,CubeTexture:Fr,CubeTextureLoader:by,CubeUVReflectionMapping:zs,CubicBezierCurve:Yl,CubicBezierCurve3:wf,CubicInterpolant:Hf,CullFaceBack:nl,CullFaceFront:ud,CullFaceFrontBack:gp,CullFaceNone:hd,Curve:En,CurvePath:Tf,CustomBlending:fd,CustomToneMapping:Fd,CylinderGeometry:On,Cylindrical:nM,Data3DTexture:Fl,DataArrayTexture:zo,DataTexture:Dn,DataTextureLoader:wy,DataUtils:Rm,DecrementStencilOp:Ip,DecrementWrapStencilOp:Dp,DefaultLoadingManager:Xf,DepthFormat:Yi,DepthStencilFormat:Qi,DepthTexture:kl,DetachedBindMode:zd,DirectionalLight:rh,DirectionalLightHelper:dM,DiscreteInterpolant:Gf,DodecahedronGeometry:tc,DoubleSide:_n,DstAlphaFactor:Sd,DstColorFactor:wd,DynamicCopyUsage:Yp,DynamicDrawUsage:vi,DynamicReadUsage:Wp,EdgesGeometry:Af,EllipseCurve:Ko,EqualCompare:Zd,EqualDepth:Ya,EqualStencilFunc:Op,EquirectangularReflectionMapping:_r,EquirectangularRefractionMapping:xr,Euler:un,EventDispatcher:Bn,ExtrudeGeometry:nc,FileLoader:ii,Float16BufferAttribute:Nm,Float32BufferAttribute:Lt,FloatType:en,Fog:Or,FogExp2:Wo,FramebufferTexture:zv,FrontSide:Nn,Frustum:Hs,GLBufferAttribute:Qy,GLSL1:$p,GLSL3:ol,GreaterCompare:$d,GreaterDepth:$a,GreaterEqualCompare:Kd,GreaterEqualDepth:Za,GreaterEqualStencilFunc:Vp,GreaterStencilFunc:zp,GridHelper:hM,Group:De,HalfFloatType:ks,HemisphereLight:ih,HemisphereLightHelper:lM,IcosahedronGeometry:Bs,ImageBitmapLoader:Py,ImageLoader:Lr,ImageUtils:ef,IncrementStencilOp:Pp,IncrementWrapStencilOp:Lp,InstancedBufferAttribute:Os,InstancedBufferGeometry:Qf,InstancedInterleavedBuffer:jy,InstancedMesh:Eo,Int16BufferAttribute:Dm,Int32BufferAttribute:Um,Int8BufferAttribute:Pm,IntType:Lo,InterleavedBuffer:Xo,InterleavedBufferAttribute:ts,Interpolant:Vr,InterpolateDiscrete:yr,InterpolateLinear:wo,InterpolateSmooth:ka,InvertStencilOp:Up,KeepStencilOp:zi,KeyframeTrack:Tn,LOD:xf,LatheGeometry:Br,Layers:ko,LessCompare:Yd,LessDepth:qa,LessEqualCompare:Ul,LessEqualDepth:Ji,LessEqualStencilFunc:Bp,LessStencilFunc:Fp,Light:wi,LightProbe:jf,Line:Mi,Line3:sM,LineBasicMaterial:$e,LineCurve:Zl,LineCurve3:Ef,LineDashedMaterial:zf,LineLoop:Mf,LineSegments:zn,LinearFilter:Ce,LinearInterpolant:th,LinearMipMapLinearFilter:Mp,LinearMipMapNearestFilter:yp,LinearMipmapLinearFilter:In,LinearMipmapNearestFilter:cr,LinearSRGBColorSpace:ns,LinearToneMapping:Dd,LinearTransfer:Nr,Loader:nn,LoaderUtils:ml,LoadingManager:nh,LoopOnce:kd,LoopPingPong:Hd,LoopRepeat:Vd,LuminanceAlphaFormat:Pl,LuminanceFormat:Rl,MOUSE:pp,Material:He,MaterialLoader:lc,MathUtils:xi,Matrix2:hh,Matrix3:Zt,Matrix4:Vt,MaxEquation:_d,Mesh:ee,MeshBasicMaterial:tn,MeshDepthMaterial:Vl,MeshDistanceMaterial:Hl,MeshLambertMaterial:Zn,MeshMatcapMaterial:Bf,MeshNormalMaterial:Of,MeshPhongMaterial:Nf,MeshPhysicalMaterial:Uf,MeshStandardMaterial:jl,MeshToonMaterial:Ff,MinEquation:gd,MirroredRepeatWrapping:vr,MixOperation:Id,MultiplyBlending:sl,MultiplyOperation:Dr,NearestFilter:Oe,NearestMipMapLinearFilter:vp,NearestMipMapNearestFilter:xp,NearestMipmapLinearFilter:Cs,NearestMipmapNearestFilter:bl,NeutralToneMapping:Bd,NeverCompare:qd,NeverDepth:Wa,NeverStencilFunc:Np,NoBlending:jn,NoColorSpace:$n,NoToneMapping:Qn,NormalAnimationBlendMode:Bo,NormalBlending:qi,NotEqualCompare:Jd,NotEqualDepth:Ja,NotEqualStencilFunc:kp,NumberKeyframeTrack:Rr,Object3D:oe,ObjectLoader:Cy,ObjectSpaceNormalMap:Xd,OctahedronGeometry:kr,OneFactor:vd,OneMinusConstantAlphaFactor:Pd,OneMinusConstantColorFactor:Cd,OneMinusDstAlphaFactor:bd,OneMinusDstColorFactor:Ed,OneMinusSrcAlphaFactor:Ga,OneMinusSrcColorFactor:Md,OrthographicCamera:Ho,PCFShadowMap:Ml,PCFSoftShadowMap:dd,PMREMGenerator:cl,Path:Er,PerspectiveCamera:Ue,Plane:gi,PlaneGeometry:gn,PlaneHelper:gM,PointLight:Zf,PointLightHelper:oM,Points:Zo,PointsMaterial:Yo,PolarGridHelper:uM,PolyhedronGeometry:bi,PositionalAudio:Fy,PropertyBinding:re,PropertyMixer:ip,QuadraticBezierCurve:$l,QuadraticBezierCurve3:Jl,Quaternion:Ye,QuaternionKeyframeTrack:Hr,QuaternionLinearInterpolant:Wf,RED_GREEN_RGTC2_Format:So,RED_RGTC1_Format:Ll,REVISION:Po,RGBADepthPacking:Wd,RGBAFormat:qe,RGBAIntegerFormat:Oo,RGBA_ASTC_10x10_Format:go,RGBA_ASTC_10x5_Format:fo,RGBA_ASTC_10x6_Format:po,RGBA_ASTC_10x8_Format:mo,RGBA_ASTC_12x10_Format:_o,RGBA_ASTC_12x12_Format:xo,RGBA_ASTC_4x4_Format:so,RGBA_ASTC_5x4_Format:ro,RGBA_ASTC_5x5_Format:ao,RGBA_ASTC_6x5_Format:oo,RGBA_ASTC_6x6_Format:co,RGBA_ASTC_8x5_Format:lo,RGBA_ASTC_8x6_Format:ho,RGBA_ASTC_8x8_Format:uo,RGBA_BPTC_Format:fr,RGBA_ETC2_EAC_Format:io,RGBA_PVRTC_2BPPV1_Format:to,RGBA_PVRTC_4BPPV1_Format:Qa,RGBA_S3TC_DXT1_Format:hr,RGBA_S3TC_DXT3_Format:ur,RGBA_S3TC_DXT5_Format:dr,RGBDepthPacking:Tp,RGBFormat:Cl,RGBIntegerFormat:Sp,RGB_BPTC_SIGNED_Format:vo,RGB_BPTC_UNSIGNED_Format:yo,RGB_ETC1_Format:eo,RGB_ETC2_Format:no,RGB_PVRTC_2BPPV1_Format:ja,RGB_PVRTC_4BPPV1_Format:Ka,RGB_S3TC_DXT1_Format:lr,RGDepthPacking:Ap,RGFormat:Il,RGIntegerFormat:Fo,RawShaderMaterial:Df,Ray:Vs,Raycaster:tM,RectAreaLight:Jf,RedFormat:No,RedIntegerFormat:Ur,ReinhardToneMapping:Ud,RenderTarget:nf,RepeatWrapping:Ki,ReplaceStencilOp:Rp,ReverseSubtractEquation:md,RingGeometry:ic,SIGNED_RED_GREEN_RGTC2_Format:bo,SIGNED_RED_RGTC1_Format:Mo,SRGBColorSpace:Se,SRGBTransfer:me,Scene:Gl,ShaderChunk:jt,ShaderLib:bn,ShaderMaterial:dn,ShadowMaterial:Lf,Shape:$i,ShapeGeometry:sc,ShapePath:vM,ShapeUtils:Un,ShortType:El,Skeleton:qo,SkeletonHelper:aM,SkinnedMesh:vf,Source:Wi,Sphere:Be,SphereGeometry:is,Spherical:eM,SphericalHarmonics3:Kf,SplineCurve:Kl,SpotLight:Yf,SpotLightHelper:rM,Sprite:_f,SpriteMaterial:Wl,SrcAlphaFactor:Ha,SrcAlphaSaturateFactor:Td,SrcColorFactor:yd,StaticCopyUsage:qp,StaticDrawUsage:Sr,StaticReadUsage:Gp,StereoCamera:Ly,StreamCopyUsage:Zp,StreamDrawUsage:Hp,StreamReadUsage:Xp,StringKeyframeTrack:rs,SubtractEquation:pd,SubtractiveBlending:il,TOUCH:mp,TangentSpaceNormalMap:Si,TetrahedronGeometry:rc,Texture:we,TextureLoader:qf,TextureUtils:xv,TorusGeometry:ac,TorusKnotGeometry:oc,Triangle:Qe,TriangleFanDrawMode:Ep,TriangleStripDrawMode:wp,TrianglesDrawMode:bp,TubeGeometry:cc,UVMapping:Io,Uint16BufferAttribute:Ol,Uint32BufferAttribute:Bl,Uint8BufferAttribute:Im,Uint8ClampedBufferAttribute:Lm,Uniform:lh,UniformsGroup:Ky,UniformsLib:St,UniformsUtils:af,UnsignedByteType:Fn,UnsignedInt248Type:ji,UnsignedInt5999Type:Tl,UnsignedIntType:ni,UnsignedShort4444Type:Do,UnsignedShort5551Type:Uo,UnsignedShortType:Us,VSMShadowMap:Pn,Vector2:ot,Vector3:C,Vector4:ae,VectorKeyframeTrack:Pr,VideoTexture:Bv,WebGL3DRenderTarget:vm,WebGLArrayRenderTarget:xm,WebGLCoordinateSystem:Ln,WebGLCubeRenderTarget:cf,WebGLMultipleRenderTargets:MM,WebGLRenderTarget:wn,WebGLRenderer:Cv,WebGLUtils:pf,WebGPUCoordinateSystem:br,WireframeGeometry:If,WrapAroundEnding:Mr,ZeroCurvatureEnding:Hi,ZeroFactor:xd,ZeroSlopeEnding:Gi,ZeroStencilOp:Cp,createCanvasElement:tf},Symbol.toStringTag,{value:"Module"})),Cn=new Vt,$u=new Vt,Ua=new Vt,bM=new Zt,he=new C,Ne=new C,Yn=new C,Ts=new C,Ju=new Be,Ku=new ft,sr=new ft,Na=new ft,ju=new Hs,Qu=new Vt,Fa=s=>(s.r+s.g+s.b)/3,Te=s=>Math.round(255*Math.min(1,Math.max(0,s<=.0031308?s*12.92:1.055*Math.pow(s,1/2.4)-.055))),td=new WeakMap;function wM(s){const t=s&&s.image;if(!t||!(t.width||t.videoWidth))return null;let e=td.get(t);if(e)return e;try{const n=document.createElement("canvas");n.width=n.height=4;const i=n.getContext("2d");i.drawImage(t,0,0,4,4);const r=i.getImageData(0,0,4,4).data;let a=0,o=0,c=0,l=0;for(let u=0;u<r.length;u+=4)r[u+3]<20||(a+=r[u],o+=r[u+1],c+=r[u+2],l++);e=new ft,l?e.setRGB(a/l/255,o/l/255,c/l/255,Se):e.setRGB(1,1,1)}catch(n){e=new ft(1,1,1)}return td.set(t,e),e}const ln=[new C,new C,new C],ed=new WeakMap,EM=new ft;function TM(s){const t=s&&s.image;if(!t||!(t.width||t.videoWidth))return null;let e=ed.get(t);if(e!==void 0)return e;try{const n=Math.min(64,t.width||64),i=Math.min(64,t.height||64),r=document.createElement("canvas");r.width=n,r.height=i;const a=r.getContext("2d");a.drawImage(t,0,0,n,i),e={w:n,h:i,px:a.getImageData(0,0,n,i).data,wrap:s.wrapS===Ki}}catch(n){e=null}return ed.set(t,e),e}const Qc=new Float32Array(256).map((s,t)=>{const e=t/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)});function AM(s,t,e,n){t=t-Math.floor(t),e=e-Math.floor(e),n&&(e=1-e);const i=Math.min(s.w-1,t*s.w|0),r=Math.min(s.h-1,e*s.h|0),a=(r*s.w+i)*4;return EM.setRGB(Qc[s.px[a]],Qc[s.px[a+1]],Qc[s.px[a+2]])}class ap{constructor({maxPixelRatio:t=.75}={}){this.isSoft=!0,this.domElement=document.createElement("canvas"),this.ctx=this.domElement.getContext("2d",{alpha:!1}),this.pr=Math.min(window.devicePixelRatio||1,t),this.maxPR=t,this.w=1,this.h=1,this.clear=new ft(0),this.shadowMap={enabled:!1,type:0},this.outputColorSpace=Se,this.toneMapping=0,this.toneMappingExposure=1,this.info={render:{triangles:0,calls:0}},this.capabilities={getMaxAnisotropy:()=>1,isWebGL2:!1},this.list=[]}getContext(){return null}setClearColor(t){this.clear.set(t)}getClearColor(t){return(t||new ft).copy(this.clear)}setPixelRatio(t){this.pr=Math.min(t||1,this.maxPR),this.setSize(this.w,this.h,!1)}getPixelRatio(){return this.pr}setSize(t,e,n=!0){this.w=t,this.h=e,this.domElement.width=Math.max(1,Math.round(t*this.pr)),this.domElement.height=Math.max(1,Math.round(e*this.pr)),n&&(this.domElement.style.width=t+"px",this.domElement.style.height=e+"px")}getSize(t){return(t||new ot).set(this.w,this.h)}dispose(){}compile(){}setAnimationLoop(){}forceContextLoss(){}render(t,e){const n=this.ctx,i=this.domElement.width,r=this.domElement.height,a=i/2,o=r/2;t.matrixWorldAutoUpdate!==!1&&t.updateMatrixWorld(),e.parent===null&&e.matrixWorldAutoUpdate!==!1&&e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),ju.setFromProjectionMatrix(Ua);let c=0,l=null,u=0;t.traverseVisible(M=>{M.isAmbientLight?c+=M.intensity:M.isHemisphereLight?c+=M.intensity*.5*(Fa(M.color)+Fa(M.groundColor)):M.isDirectionalLight&&(l?c+=M.intensity*.35*Fa(M.color):(l=new C().setFromMatrixPosition(M.matrixWorld).sub(he.setFromMatrixPosition(M.target.matrixWorld)).normalize(),u=M.intensity*Fa(M.color)))}),c=Math.max(.25,c/Math.PI),u/=Math.PI,l||(l=new C(.3,1,.5).normalize(),u=.6);const d=this.toneMapping===Sl,h=this.toneMappingExposure||1,f=d?M=>(M*=h*.6,M*(2.51*M+.03)/(M*(2.43*M+.59)+.14)):M=>M,m=t.fog;m&&Na.copy(m.color);const _=t.background&&t.background.isColor?t.background:this.clear,g=t.userData.softSky;if(g){const M=n.createLinearGradient(0,0,0,r);g.forEach((E,b)=>M.addColorStop(b/(g.length-1),E)),n.fillStyle=M}else n.fillStyle=`rgb(${Te(_.r)},${Te(_.g)},${Te(_.b)})`;n.fillRect(0,0,i,r);const p=this.list;p.length=0;let v=0;const y=.6*this.pr*this.pr,x=M=>(M.applyMatrix4(Ua),M),D=(M,E,b,S,L,G,F)=>{let H=L.isMeshBasicMaterial||L.isSpriteMaterial||L.isPointsMaterial||L.isShaderMaterial?1:c+u*Math.max(0,E*l.x+b*l.y+S*l.z),V=M.r*H,O=M.g*H,Y=M.b*H;if(L.emissive){const U=L.emissiveIntensity==null?1:L.emissiveIntensity;V+=L.emissive.r*U,O+=L.emissive.g*U,Y+=L.emissive.b*U}if(L.toneMapped!==!1&&!L.isShaderMaterial&&(V=f(V),O=f(O),Y=f(Y)),m&&L.fog!==!1){const U=m.isFogExp2?1-Math.exp(-((m.density*G)**2)):Math.min(1,Math.max(0,(G-m.near)/(m.far-m.near)));V+=(Na.r-V)*U,O+=(Na.g-O)*U,Y+=(Na.b-Y)*U}return F<1?`rgba(${Te(V)},${Te(O)},${Te(Y)},${F.toFixed(2)})`:`rgb(${Te(V)},${Te(O)},${Te(Y)})`},A=Ts.setFromMatrixPosition(e.matrixWorld).clone();t.traverseVisible(M=>{const E=Array.isArray(M.material)?M.material[0]:M.material;if(!E||E.visible===!1)return;if(M.isSprite){he.setFromMatrixPosition(M.matrixWorld);const _t=he.distanceTo(A);if(x(he),he.z<-1||he.z>1)return;const Z=new C().setFromMatrixScale(M.matrixWorld),nt=Ne.copy(Yn.setFromMatrixPosition(M.matrixWorld)).add(he.clone().set(0,0,0)).applyMatrix4(e.matrixWorldInverse),yt=e.projectionMatrix.elements[5]*o/Math.max(.01,-nt.z),at=Z.x*yt*.5,Rt=Z.y*yt*.5;if(at<.5)return;p.push({k:1,z:-nt.z,ro:M.renderOrder||0,x:(he.x+1)*a,y:(1-he.y)*o,rw:at,rh:Rt,mat:E,add:E.blending===Ls,op:E.opacity==null?1:E.opacity,depth:_t});return}if(M.isPoints){const _t=M.geometry.attributes.position,Z=M.geometry.attributes.size,nt=M.geometry.attributes.color;if(!_t)return;$u.multiplyMatrices(e.matrixWorldInverse,M.matrixWorld),Cn.multiplyMatrices(Ua,M.matrixWorld);const yt=E.uniforms&&E.uniforms.scale?E.uniforms.scale.value:300,at=Math.min(_t.count,900),Rt=E.color||sr.set(1,1,1);for(let It=0;It<at;It++){const xt=Z?Z.getX(It):E.size||1;if(xt<=0||(he.fromBufferAttribute(_t,It),Ne.copy(he).applyMatrix4($u),Ne.z>=-.05)||(he.applyMatrix4(Cn),Math.abs(he.x)>1.1||Math.abs(he.y)>1.1))continue;const X=Z?xt*yt/-Ne.z*this.pr:E.sizeAttenuation===!1?xt*this.pr:xt*o/-Ne.z,N=nt?sr.setRGB(nt.getX(It),nt.getY(It),nt.getZ(It)):Rt;p.push({k:2,z:-Ne.z,ro:M.renderOrder||0,x:(he.x+1)*a,y:(1-he.y)*o,r:Math.max(.6,X*.35),c:`rgb(${Te(N.r*(nt?1.4:1))},${Te(N.g*(nt?1.4:1))},${Te(N.b*(nt?1.4:1))})`,add:E.blending===Ls,op:E.opacity==null?1:E.opacity})}return}if(!M.isMesh)return;const b=M.geometry,S=b&&b.attributes.position;if(!S||E.isShaderMaterial&&!(E.userData&&E.userData.softColor))return;const L=M.isInstancedMesh?M.count:1;b.boundingSphere||b.computeBoundingSphere();const G=E.map&&E.map.image,F=b.index,H=F?F.count/3:S.count/3,V=E.side,O=E.transparent?E.opacity==null?1:E.opacity:1;if(O<.02)return;const Y=new ft().copy(E.userData&&E.userData.softColor?new ft(E.userData.softColor):E.color||sr.set(1,1,1)),U=G?TM(E.map):null,et=b.attributes.uv,rt=E.userData&&E.userData.softBack?1e9-E.userData.softBack:0,ut=G&&!(U&&et)?wM(E.map):null;ut&&Y.multiply(ut);const wt=E.vertexColors&&b.attributes.color;for(let _t=0;_t<L;_t++){if(M.isInstancedMesh?(M.getMatrixAt(_t,Qu),Cn.multiplyMatrices(M.matrixWorld,Qu)):Cn.copy(M.matrixWorld),Ju.copy(b.boundingSphere).applyMatrix4(Cn),M.frustumCulled!==!1&&!ju.intersectsSphere(Ju))continue;const Z=M.isInstancedMesh&&M.instanceColor?sr.fromBufferAttribute(M.instanceColor,_t):null,nt=Z?Y.clone().multiply(Z):Y;if(G&&S.count===4&&(G.width||G.videoWidth)&&E.map.repeat.x===1&&E.map.repeat.y===1){const at=[];let Rt=0,It=!0;for(let xt=0;xt<4;xt++){if(he.fromBufferAttribute(S,xt).applyMatrix4(Cn),Ne.copy(he).applyMatrix4(e.matrixWorldInverse),Ne.z>=-.05){It=!1;break}Rt+=-Ne.z,x(he),at.push([(he.x+1)*a,(1-he.y)*o])}if(It){const xt=b.attributes.uv,X=[];for(let N=0;N<4;N++)X.push([xt.getX(N),xt.getY(N)]);p.push({k:3,z:rt||Rt/4,ro:M.renderOrder||0,P:at,U:X,img:G,op:O,flip:E.map.flipY!==!1,dt:E.depthTest===!1});continue}}bM.getNormalMatrix(Cn);const yt=H>4e3?2:1;for(let at=0;at<H;at+=yt){const Rt=F?F.getX(at*3):at*3,It=F?F.getX(at*3+1):at*3+1,xt=F?F.getX(at*3+2):at*3+2;he.fromBufferAttribute(S,Rt).applyMatrix4(Cn),Ne.fromBufferAttribute(S,It).applyMatrix4(Cn),Yn.fromBufferAttribute(S,xt).applyMatrix4(Cn);const X=Ne.x-he.x,N=Ne.y-he.y,W=Ne.z-he.z,I=Yn.x-he.x,R=Yn.y-he.y,tt=Yn.z-he.z;let dt=N*tt-W*R,ht=W*I-X*tt,Dt=X*R-N*I;const bt=Math.hypot(dt,ht,Dt)||1;dt/=bt,ht/=bt,Dt/=bt;const P=(he.x+Ne.x+Yn.x)/3,w=(he.y+Ne.y+Yn.y)/3,q=(he.z+Ne.z+Yn.z)/3,Q=dt*(A.x-P)+ht*(A.y-w)+Dt*(A.z-q);if(V===Nn&&Q<=0||V===Fe&&Q>=0)continue;Q<0&&(dt=-dt,ht=-ht,Dt=-Dt);const ct=Math.hypot(A.x-P,A.y-w,A.z-q);ln[0].copy(he).applyMatrix4(e.matrixWorldInverse),ln[1].copy(Ne).applyMatrix4(e.matrixWorldInverse),ln[2].copy(Yn).applyMatrix4(e.matrixWorldInverse);const j=-Math.max(.05,e.near);let Mt;if(ln[0].z<=j&&ln[1].z<=j&&ln[2].z<=j)Mt=ln;else{if(ln[0].z>j&&ln[1].z>j&&ln[2].z>j)continue;Mt=[];for(let vt=0;vt<3;vt++){const Ht=ln[vt],Ot=ln[(vt+1)%3],ue=Ht.z<=j,B=Ot.z<=j;if(ue&&Mt.push(Ht.clone()),ue!==B){const gt=(j-Ht.z)/(Ot.z-Ht.z);Mt.push(Ht.clone().lerp(Ot,gt))}}if(Mt.length<3)continue}const pt=new Array(Mt.length*2);let Tt=1e9,$t=-1e9,lt=1e9,Pt=-1e9,kt=0;for(let vt=0;vt<Mt.length;vt++){Ts.copy(Mt[vt]),kt-=Ts.z,Ts.applyMatrix4(e.projectionMatrix);const Ht=(Ts.x+1)*a,Ot=(1-Ts.y)*o;pt[vt*2]=Ht,pt[vt*2+1]=Ot,Ht<Tt&&(Tt=Ht),Ht>$t&&($t=Ht),Ot<lt&&(lt=Ot),Ot>Pt&&(Pt=Ot)}if($t<0||Tt>i||Pt<0||lt>r||Mt===ln&&Math.abs((pt[2]-pt[0])*(pt[5]-pt[1])-(pt[4]-pt[0])*(pt[3]-pt[1]))*.5<y)continue;let Gt=nt;wt?Gt=Ku.fromBufferAttribute(wt,Rt).multiply(nt):U&&et&&(Gt=Ku.copy(nt).multiply(AM(U,(et.getX(Rt)+et.getX(It)+et.getX(xt))/3,(et.getY(Rt)+et.getY(It)+et.getY(xt))/3,E.map.flipY!==!1))),p.push({k:0,z:rt||kt/Mt.length,ro:M.renderOrder||0,pts:pt,c:D(Gt,dt,ht,Dt,E,ct,O),add:E.blending===Ls}),v++}}}),p.sort((M,E)=>M.ro-E.ro||E.z-M.z);for(const M of p)if(M.k===0){const E=M.pts;n.globalCompositeOperation=M.add?"lighter":"source-over",n.fillStyle=M.c,n.strokeStyle=M.c,n.lineWidth=.6,n.beginPath(),n.moveTo(E[0],E[1]);for(let b=2;b<E.length;b+=2)n.lineTo(E[b],E[b+1]);n.closePath(),n.fill(),M.add||n.stroke()}else if(M.k===1){const E=M.mat,b=E.color||sr.set(1,1,1),S=M.op;n.globalCompositeOperation=M.add?"lighter":"source-over";const L=E.map&&E.map.image;if(!L||L.width<=64&&M.add){const F=n.createRadialGradient(M.x,M.y,0,M.x,M.y,Math.max(M.rw,M.rh));F.addColorStop(0,`rgba(${Te(b.r)},${Te(b.g)},${Te(b.b)},${S})`),F.addColorStop(.35,`rgba(${Te(b.r)},${Te(b.g)},${Te(b.b)},${S*.45})`),F.addColorStop(1,`rgba(${Te(b.r)},${Te(b.g)},${Te(b.b)},0)`),n.fillStyle=F,n.save(),n.translate(M.x,M.y),n.scale(1,M.rh/Math.max(.01,M.rw)),n.translate(-M.x,-M.y),n.beginPath(),n.arc(M.x,M.y,M.rw,0,6.283),n.fill(),n.restore()}else{n.globalAlpha=S;try{n.drawImage(L,M.x-M.rw,M.y-M.rh,M.rw*2,M.rh*2)}catch(F){}n.globalAlpha=1}}else if(M.k===2)n.globalCompositeOperation=M.add?"lighter":"source-over",n.globalAlpha=M.op,n.fillStyle=M.c,n.beginPath(),n.arc(M.x,M.y,M.r,0,6.283),n.fill(),n.globalAlpha=1;else{const E=M.img,b=E.width||E.videoWidth,S=E.height||E.videoHeight;n.globalCompositeOperation="source-over",n.globalAlpha=M.op;const[L,G,F]=M.P,[H,V,O]=M.U.map(([U,et])=>[U*b,(M.flip?1-et:et)*S]),Y=H[0]*(V[1]-O[1])+V[0]*(O[1]-H[1])+O[0]*(H[1]-V[1]);if(Math.abs(Y)>1e-6){const U=(L[0]*(V[1]-O[1])+G[0]*(O[1]-H[1])+F[0]*(H[1]-V[1]))/Y,et=(L[1]*(V[1]-O[1])+G[1]*(O[1]-H[1])+F[1]*(H[1]-V[1]))/Y,rt=(L[0]*(O[0]-V[0])+G[0]*(H[0]-O[0])+F[0]*(V[0]-H[0]))/Y,ut=(L[1]*(O[0]-V[0])+G[1]*(H[0]-O[0])+F[1]*(V[0]-H[0]))/Y,wt=(L[0]*(V[0]*O[1]-O[0]*V[1])+G[0]*(O[0]*H[1]-H[0]*O[1])+F[0]*(H[0]*V[1]-V[0]*H[1]))/Y,_t=(L[1]*(V[0]*O[1]-O[0]*V[1])+G[1]*(O[0]*H[1]-H[0]*O[1])+F[1]*(H[0]*V[1]-V[0]*H[1]))/Y;n.save(),n.beginPath(),n.moveTo(M.P[0][0],M.P[0][1]);for(const Z of[M.P[1],M.P[3],M.P[2]])n.lineTo(Z[0],Z[1]);n.closePath(),n.clip(),n.setTransform(U,et,rt,ut,wt,_t);try{n.drawImage(E,0,0)}catch(Z){}n.restore()}n.globalAlpha=1}n.globalCompositeOperation="source-over",this.info.render.triangles=v,this.info.render.calls=p.length}}const CM=/swiftshader|llvmpipe|softpipe|basic render|microsoft basic|software|mesa offscreen|intel.*(gma|hd graphics( [2-5]\d{3}|\s*$|\)|,)|g41|g45|q45)/i,RM=()=>{try{return/[?&]gl=soft\b/.test(location.search)}catch(s){return!1}};function PM(s){try{const t=s.getContext(),e=t.getExtension("WEBGL_debug_renderer_info");return String(e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER))}catch(t){return""}}function IM(s,t){if(!RM()){const n=[t,{...t,antialias:!1,powerPreference:"default"},{...t,antialias:!1,powerPreference:"low-power",precision:"mediump",failIfMajorPerformanceCaveat:!1}];for(const i of n)try{const r=new s.WebGLRenderer(i);if(r.getContext())return r.mrjGpu=PM(r),r.mrjWeak=CM.test(r.mrjGpu),r}catch(r){}}const e=new ap;return e.mrjGpu="canvas2d",e.mrjWeak=!0,e}function LM(s){let t=s.querySelector(":scope > .gl-msg");return t||(t=document.createElement("div"),t.className="gl-msg",t.style.cssText="position:absolute;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;background:rgba(10,20,40,.55);color:#fff;font:700 20px Fredoka,system-ui,sans-serif;text-align:center;padding:20px;pointer-events:none",s.appendChild(t)),t}function _l(s){const t=s.querySelector(":scope > .gl-msg");t&&t.remove()}function DM(s,t,{onRestored:e,onFallback:n,waitMs:i=2500}={}){const r={lost:!1,count:0};if(s.isSoft)return r;const a=s.domElement;let o=0,c=!1;const l=()=>{if(!c){c=!0,clearTimeout(o),r.lost=!1,_l(t);try{n&&n()}catch(u){console.error(u)}}};return a.addEventListener("webglcontextlost",u=>{if(!c){if(u.preventDefault(),r.lost=!0,r.count++,r.count>=2){l();return}LM(t).innerHTML="<p>Loading pictures… 🔧</p>",clearTimeout(o),o=setTimeout(()=>{r.lost&&l()},i)}},!1),a.addEventListener("webglcontextrestored",()=>{if(!c){r.lost=!1,clearTimeout(o),_l(t);try{e&&e(r.count)}catch(u){}}},!1),r}function UM(s,t,e){const n="Something went wrong loading the game. Tap to try again.";s.innerHTML='<div class="fatal gl-fallback"><h2></h2><p></p><button type="button" class="go">Try again</button></div>',s.querySelector("h2").textContent=t,s.querySelector("p").textContent=n,s.querySelector("button").addEventListener("click",()=>location.reload())}const NM="modulepreload",FM=function(s,t){return new URL(s,t).href},nd={},OM=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){let a=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=a(e.map(u=>{if(u=FM(u,n),u in nd)return;nd[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!n)for(let _=o.length-1;_>=0;_--){const g=o[_];if(g.href===u&&(!d||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":NM,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((_,g)=>{m.addEventListener("load",_),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};function hc(s,t="custom"){const e=(s.items||[]).map((n,i)=>{const r=Array.isArray(n.wrong)?n.wrong.filter(Boolean):[n.wrong1,n.wrong2,n.wrong3].filter(Boolean);return{item_id:String(n.item_id||`q${String(i+1).padStart(2,"0")}`),question:String(n.question||"").trim(),correct:String(n.correct||"").trim(),wrong:r.map(a=>String(a).trim()).filter(Boolean).slice(0,2),skill_tags:n.skill_tags||s.skill_tags||[],audio:String(n.audio||n.audio_en||"").trim()}}).filter(n=>n.question&&n.correct&&n.wrong.length>=1);if(!e.length)throw new Error("Pack has no usable questions. Need question + correct + at least one wrong.");return{pack_id:s.pack_id||t,title:s.title||"Ski Jump",module_id:s.module_id||"ski_jump",activity_id:s.activity_id||"slope_jump",skill_tags:s.skill_tags||["mcq"],ui_locale:s.ui_locale||"en",seconds:Number(s.seconds||15),mastery_correct:Number(s.mastery_correct||3),items:e}}async function id(s){const t=await fetch(s);if(!t.ok)throw new Error(`Could not load pack ${s}`);return hc(await t.json())}function BM(s,t){const i=((s[0]||[]).map(r=>String(r).trim().toLowerCase()).includes("question")?s.slice(1):s).filter(r=>r&&String(r[0]||"").trim()).map((r,a)=>{const o=Array.isArray(r)?r:Object.values(r),[c,l,u,d]=o.map(h=>h==null?"":String(h));return{item_id:`q${String(a+1).padStart(2,"0")}`,question:c,correct:l,wrong:[u,d]}});return hc({title:t,items:i,pack_id:t.toLowerCase().replace(/\s+/g,"-")})}async function zM(s){const t=s.name||"pack";if(t.toLowerCase().endsWith(".json"))return hc(JSON.parse(await s.text()),t);const e=await OM(()=>import("./xlsx-D2ygFpn3.js"),[],import.meta.url),n=e.read(await s.arrayBuffer(),{type:"array"}),i=e.utils.sheet_to_json(n.Sheets[n.SheetNames[0]],{header:1,defval:""});if(!i.length)throw new Error("Empty spreadsheet");return BM(i,t.replace(/\.[^.]+$/,""))}function sd(s){const t=s.slice();for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}const Oa={ski:{knee:.75,lean:.42,arm:.55,elbow:-.7,spread:.18,head:.32},crouch:{knee:1.45,lean:.85,arm:.35,elbow:-1.1,spread:.12,head:.7},jump:{knee:.25,lean:.15,arm:2.5,elbow:-.3,spread:.55,head:.1},tuck:{knee:1.7,lean:.95,arm:1.25,elbow:-1.7,spread:.02,head:.75},land:{knee:1.55,lean:.55,arm:.95,elbow:-.6,spread:.7,head:.45},crash:{knee:.6,lean:-.2,arm:2.2,elbow:-.2,spread:1.25,head:-.3},twirl:{knee:.9,lean:.05,arm:1.6,elbow:-.2,spread:1.35,head:0},cheer:{knee:.15,lean:-.05,arm:2.95,elbow:-.15,spread:.45,head:-.15}};function Rn(s,t={}){return new Zn({color:s,flatShading:!0,...t})}function kM(){const s={jacket:Rn(16731453),jacket2:Rn(16763196),pants:Rn(2306923),skin:Rn(15909787),helmet:Rn(3127551),goggle:Rn(16765773,{emissive:8014848}),dark:Rn(1909811),ski:Rn(1429926),pole:Rn(14673646),bib:Rn(16777215)},t=new De,e=new De;t.add(e);const n=new De;e.add(n);const i=(V,O,Y,U)=>new ee(new si(V,O,Y),U),r=(V,O,Y)=>new ee(new zr(V,O,2,6),Y),a=i(.44,.2,.28,s.pants);n.add(a);const o=new De;n.add(o);const c=i(.5,.58,.32,s.jacket);c.position.y=.36,o.add(c);const l=i(.52,.1,.34,s.jacket2);l.position.y=.28,o.add(l);const u=i(.3,.26,.02,s.bib);u.position.set(0,.42,-.17),o.add(u);const d=i(.36,.1,.28,s.jacket2);d.position.y=.68,o.add(d);const h=new De;h.position.y=.72,o.add(h);const f=new ee(new Bs(.19,0),s.skin);f.position.y=.17,h.add(f);const m=new ee(new is(.215,7,5,0,Math.PI*2,0,Math.PI*.55),s.helmet);m.position.y=.2,h.add(m);const _=i(.36,.1,.08,s.goggle);_.position.set(0,.2,-.17),h.add(_);const g=i(.42,.05,.36,s.dark);g.position.set(0,.2,0),h.add(g);function p(V){const O=new De;O.position.set(.31*V,.6,0),o.add(O);const Y=r(.075,.26,s.jacket);Y.position.y=-.17,O.add(Y);const U=new De;U.position.y=-.34,O.add(U);const et=r(.065,.22,s.jacket);et.position.y=-.14,U.add(et);const rt=new ee(new Bs(.085,0),s.dark);rt.position.y=-.3,U.add(rt);const ut=new ee(new On(.018,.018,1.25,4),s.pole);ut.position.set(0,-.3,.35),ut.rotation.x=1.25,U.add(ut);const wt=new ee(new On(.07,.07,.02,6),s.dark);return wt.position.set(0,-.48,.85),wt.rotation.x=1.25,U.add(wt),{sh:O,el:U}}function v(V){const O=new De;O.position.set(.13*V,-.05,0),n.add(O);const Y=r(.1,.27,s.pants);Y.position.y=-.22,O.add(Y);const U=new De;U.position.y=-.45,O.add(U);const et=r(.09,.27,s.pants);et.position.y=-.2,U.add(et);const rt=new De;rt.position.y=-.43,U.add(rt);const ut=i(.16,.16,.3,s.jacket2);ut.position.set(0,-.02,-.03),rt.add(ut);const wt=i(.13,.04,1.7,s.ski);wt.position.set(0,-.12,-.12),rt.add(wt);const _t=i(.13,.04,.22,s.ski);return _t.position.set(0,-.08,-1.02),_t.rotation.x=.45,rt.add(_t),{hp:O,kn:U,an:rt}}const y={arm:[p(-1),p(1)],leg:[v(-1),v(1)]};t.traverse(V=>{V.isMesh&&(V.castShadow=!1)});const x={...Oa.ski};let D="ski",A=0,M=0,E=0,b=0;const S={v:1,vel:0};function L(V){Oa[V]&&(D=V)}function G(V){S.vel+=V}function F(V,O={}){A+=V;const Y=Oa[D],U=1-Math.exp(-V*(D==="crash"?6:11));for(const _t in Y)x[_t]+=(Y[_t]-x[_t])*U;M+=((O.steer||0)-M)*(1-Math.exp(-V*8)),S.vel+=(1-S.v)*180*V,S.vel*=Math.exp(-V*12),S.v+=S.vel*V;const et=xi.clamp(S.v,.6,1.4);e.scale.set(1/Math.sqrt(et),et,1/Math.sqrt(et));const rt=x.knee/2,ut=.45,wt=D==="ski"?Math.sin(A*6)*.04:0;n.position.y=.16+2*ut*Math.cos(rt)+.08,n.position.z=0,o.rotation.x=-x.lean,o.rotation.z=-M*.15,h.rotation.x=x.head*.8;for(let _t=0;_t<2;_t++){const Z=_t?1:-1,nt=y.leg[_t];nt.hp.rotation.x=rt+wt*Z,nt.kn.rotation.x=-2*rt,nt.an.rotation.x=rt-wt*Z,nt.hp.rotation.z=(D==="crash"?x.spread*.35:.02)*Z;const yt=y.arm[_t];let at=x.arm;D==="cheer"&&(at+=Math.sin(A*9+_t*1.7)*.25),D==="crash"&&(at+=Math.sin(A*17+_t*2)*.8),yt.sh.rotation.x=at,yt.sh.rotation.z=x.spread*Z+(D==="ski"?Math.sin(A*6+_t*Math.PI)*.05:0),yt.el.rotation.x=-x.elbow}D==="twirl"?(b+=V*15,e.rotation.set(Math.sin(A*7)*.45,b,Math.cos(A*5)*.5)):D==="crash"?(E+=V*9*Math.max(0,1-E/9),e.rotation.set(-E*.9,E*.4,E*.7)):(E=0,b=0,e.rotation.set(0,-M*.25,-M*.32))}function H(){Object.assign(x,Oa.ski),D="ski",E=0,e.rotation.set(0,0,0),S.v=1,S.vel=0}return{root:t,setPose:L,kick:G,update:F,reset:H,get pose(){return D}}}function op(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.45,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new Jo(s);return n.colorSpace=Se,n}const VM=`
attribute float size; attribute float alpha; attribute vec3 color;
varying float vA; varying vec3 vC; uniform float scale;
void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }`,HM=`
uniform sampler2D map; varying float vA; varying vec3 vC;
void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); if (gl_FragColor.a < 0.02) discard; }`;function GM(s=500){const t=new Xt,e=new Float32Array(s*3),n=new Float32Array(s*3),i=new Float32Array(s),r=new Float32Array(s);t.setAttribute("position",new se(e,3).setUsage(vi)),t.setAttribute("color",new se(n,3).setUsage(vi)),t.setAttribute("size",new se(i,1).setUsage(vi)),t.setAttribute("alpha",new se(r,1).setUsage(vi));const a=new dn({uniforms:{map:{value:op()},scale:{value:300}},vertexShader:VM,fragmentShader:HM,transparent:!0,depthWrite:!1}),o=new Zo(t,a);o.frustumCulled=!1;const c=[];for(let _=0;_<s;_++)c.push({life:0,max:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,g:0,drag:0,s:1,r:1,gg:1,b:1,world:1,spin:0});let l=0,u=1;const d=new ft;function h(_){if(Math.random()>u&&!_.force)return;const g=c[l];l=(l+1)%s,g.life=g.max=_.life||.8,g.x=_.x,g.y=_.y,g.z=_.z,g.vx=_.vx||0,g.vy=_.vy||0,g.vz=_.vz||0,g.g=_.g==null?9:_.g,g.drag=_.drag==null?1.5:_.drag,g.s=_.size||.35,d.set(_.color==null?16777215:_.color),g.r=d.r,g.gg=d.g,g.b=d.b,g.world=_.world==null?1:_.world,g.spin=_.spin||0}function f(_,g,p,v,y={}){for(let x=0;x<v;x++){const D=Math.random()*Math.PI*2,A=(y.speed||5)*(.4+Math.random()*.8);h({x:_+(Math.random()-.5)*(y.spread||.6),y:g+Math.random()*.2,z:p+(Math.random()-.5)*(y.spread||.6),vx:Math.cos(D)*A,vz:Math.sin(D)*A,vy:(y.up||4)*(.5+Math.random()),life:(y.life||.9)*(.6+Math.random()*.6),size:(y.size||.45)*(.6+Math.random()*.8),color:y.colors?y.colors[Math.random()*y.colors.length|0]:y.color,g:y.g,drag:y.drag,world:y.world,force:y.force})}}function m(_,g){for(let p=0;p<s;p++){const v=c[p];if(v.life>0){v.life-=_;const x=Math.exp(-v.drag*_);v.vx*=x,v.vz*=x,v.vy=v.vy*x-v.g*_,v.x+=v.vx*_,v.y+=v.vy*_,v.z+=(v.vz+g*v.world)*_,v.y<.03&&v.g>0&&(v.y=.03,v.vy*=-.2,v.vx*=.6,v.vz*=.6),v.spin&&(v.x+=Math.sin(v.life*12+p)*v.spin*_)}const y=Math.max(0,v.life/v.max);e[p*3]=v.x,e[p*3+1]=v.life>0?v.y:-999,e[p*3+2]=v.z,n[p*3]=v.r,n[p*3+1]=v.gg,n[p*3+2]=v.b,i[p]=v.s*(.6+.6*(1-y)),r[p]=Math.min(1,y*1.6)}for(const p of["position","color","size","alpha"])t.attributes[p].needsUpdate=!0}return{points:o,emit:h,burst:f,update:m,setBudget(_){u=_},setScale(_){a.uniforms.scale.value=_}}}function WM(s=900){const t=new Xt,e=new Float32Array(s*3),n=new Float32Array(s);for(let c=0;c<s;c++)e[c*3]=(Math.random()-.5)*50,e[c*3+1]=Math.random()*22,e[c*3+2]=-Math.random()*70+10,n[c]=Math.random();t.setAttribute("position",new se(e,3).setUsage(vi));const i=new Yo({size:.16,map:op(),transparent:!0,depthWrite:!1,opacity:.9,color:16777215}),r=new Zo(t,i);r.frustumCulled=!1;let a=0;function o(c,l,u){a+=c;const d=t.drawRange.count===1/0?s:t.drawRange.count;for(let h=0;h<d;h++){const f=n[h];e[h*3+1]-=(1.2+f*1.6)*c,e[h*3]+=Math.sin(a*(.6+f)+f*20)*.6*c,e[h*3+2]+=l*.9*c,e[h*3+1]<0&&(e[h*3+1]+=22),e[h*3+2]>12&&(e[h*3+2]-=72);const m=e[h*3]-u;m>25?e[h*3]-=50:m<-25&&(e[h*3]+=50)}t.attributes.position.needsUpdate=!0}return{points:r,update:o,setCount(c){t.setDrawRange(0,Math.min(s,c))}}}const Bi=[-5,0,5],xl=3.4,pi=5,mi=1.25,XM=1.85,qM=-72,Ba=13,YM=9,As=10.5;function ZM(s,t){const e=new ft(t),n=s.attributes.position.count,i=new Float32Array(n*3);for(let r=0;r<n;r++)i[r*3]=e.r,i[r*3+1]=e.g,i[r*3+2]=e.b;return s.setAttribute("color",new se(i,3)),s}function $M(){const s=xl/2,t=mi,e=[-s,0,0,s,0,0,s,t,-5,-s,0,0,s,t,-5,-s,t,-5,-s,0,-5,s,t,-5,s,0,-5,-s,0,-5,-s,t,-5,s,t,-5,s,0,0,s,0,-5,s,t,-5,-s,0,0,-s,t,-5,-s,0,-5],n=new Xt;n.setAttribute("position",new Lt(e,3));const i=[],r=new ft(15333119),a=new ft(3108342),o=new ft(5082623);for(let c=0;c<18;c++){const l=c<6?r:c<12?a:o;i.push(l.r,l.g,l.b)}return n.setAttribute("color",new Lt(i,3)),n.computeVertexNormals(),n}function tl(s,t,e,n,i,r,a=70){const o=[],c=[],l=_=>{const g=Math.sin(_*127.1+s*311.7)*43758.5453;return g-Math.floor(g)},u=[];for(let _=0;_<=a;_++){const g=_/a,p=(g-.5)*t,v=n+e*(.45+.35*Math.sin(g*7.1+s)+.2*Math.sin(g*17.3+s*2)+.25*(l(_)-.5));u.push([p,Math.max(n+2,v)])}const d=new ft(i),h=new ft(r),f=new ft(16777215);for(let _=0;_<a;_++){const[g,p]=u[_],[v,y]=u[_+1],x=[[g,-6],[v,-6],[v,y],[g,-6],[v,y],[g,p]];for(const[D,A]of x){o.push(D,A,0);const M=(A+6)/(e+n+6),E=h.clone().lerp(d,Math.min(1,M*1.2)),b=xi.smoothstep(A,n+e*.55,n+e*.75);E.lerp(f,b*.9),c.push(E.r,E.g,E.b)}}const m=new Xt;return m.setAttribute("position",new Lt(o,3)),m.setAttribute("color",new Lt(c,3)),new ee(m,new tn({vertexColors:!0,fog:!1}))}function JM(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,32);return e.addColorStop(0,"rgba(40,60,110,0.55)"),e.addColorStop(1,"rgba(40,60,110,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Jo(s)}function KM(s){const t=document.createElement("canvas");t.width=1024,t.height=160;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,1024,0);n.addColorStop(0,"#ff4d6d"),n.addColorStop(.5,"#ffb703"),n.addColorStop(1,"#ff4d6d"),e.fillStyle=n,e.fillRect(0,0,1024,160);for(let r=0;r<1024;r+=64)e.fillStyle=r/64%2?"#111":"#fff",e.fillRect(r,0,64,18),e.fillStyle=r/64%2?"#fff":"#111",e.fillRect(r,142,64,18);e.font="700 96px Fredoka, 'Arial Rounded MT Bold', sans-serif",e.textAlign="center",e.textBaseline="middle",e.lineWidth=10,e.strokeStyle="#7a2e00",e.strokeText(s,512,84),e.fillStyle="#fff",e.fillText(s,512,84);const i=new Jo(t);return i.colorSpace=Se,i}function jM(s,t,{quality:e}={}){const n=window.devicePixelRatio||1;let i=IM(SM,{antialias:n<1.5,powerPreference:"high-performance",alpha:!1}),r=!!i.mrjWeak,a=i.isSoft?24:r?30:0,o=0,c=0,l=0;i.outputColorSpace=Se,i.setClearColor(12575743),s.appendChild(i.domElement),i.domElement.className="stage";const u=new Gl,d=new ft(14150911);u.fog=new Or(d,45,190);const h=new Ue(60,1,.1,900),f=new ee(new is(700,24,12),new dn({side:Fe,depthWrite:!1,fog:!1,uniforms:{top:{value:new ft(4033535)},mid:{value:new ft(10474239)},bot:{value:d},sun:{value:new C(.35,.32,-1).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; uniform vec3 sun; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.12 ? mix(mid, top, smoothstep(0.12, 0.7, h)) : mix(bot, mid, smoothstep(-0.02, 0.12, h));
      float s = max(0.0, dot(normalize(vP), sun)); c += vec3(1.0,0.93,0.75) * (pow(s, 600.0) * 1.2 + pow(s, 12.0) * 0.25);
      gl_FragColor = vec4(c, 1.0); }`}));u.add(f),u.userData.softSky=["#3d8bff","#9fd2ff","#d7ecff"];const m=[tl(1.3,1500,120,10,9416928,12900595),tl(4.1,1100,80,2,6260420,11125738),tl(7.7,800,46,-2,4156072,10139874)],_=[-560,-430,-300],g=[.02,.06,.12];m.forEach((st,Bt)=>{st.position.set(0,-4,_[Bt]),st.renderOrder=-1,u.add(st)}),u.add(new ih(15398399,10467289,1.6));const p=new rh(16774108,1.6);p.position.set(8,14,6),u.add(p);const v=new qf,y=v.load("./textures/snow.webp");y.wrapS=y.wrapT=Ki,y.repeat.set(10,50),y.colorSpace=Se,y.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());const x=new ee(new gn(240,320),new Zn({map:y,color:16777215,emissive:5398906}));x.rotation.x=-Math.PI/2,x.position.z=-120,u.add(x),x.material.userData.softBack=1;const D=y.clone();D.repeat.set(3,60),D.needsUpdate=!0;const A=new ee(new gn(As*2,320),new Zn({map:D,color:15660799,emissive:4873338}));A.rotation.x=-Math.PI/2,A.position.set(0,.01,-120),u.add(A),A.material.userData.softBack=2;const M=v.load("./textures/pine.webp");M.colorSpace=Se,M.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());const E=7,b=E*(356/640),S=new gn(b,E).translate(0,E/2-.15,0),L=new tn({map:M,alphaTest:.5,color:15923199}),G=190,F=new Eo(S,L,G);F.instanceMatrix.setUsage(vi),u.add(F);const H=[],V=(st,Bt)=>{const Qt=Math.random()<.5?-1:1,te=Math.random()<.42;st.x=Qt*(te?As+1.6+Math.random()*2.6:As+4.5+Math.pow(Math.random(),1.6)*60),st.z=Bt,st.s=.75+Math.random()*.75,st.edge=te};for(let st=0;st<G;st++){const Bt={};V(Bt,20-Math.random()*260),H.push(Bt)}const O=40,Y=ZM(new On(.06,.06,1.6,5).translate(0,.8,0),16777215),U=new Eo(Y,new Zn({vertexColors:!0}),O);U.instanceMatrix.setUsage(vi);const et=[],rt=new ft;for(let st=0;st<O;st++)et.push(20-(st>>1)*13),U.setColorAt(st,rt.set((st>>1)%2?16726876:3108342));u.add(U);const ut=new Vt,wt=new Ye,_t=new C,Z=new C,nt=new C(0,1,0),yt=$M(),at=new Zn({vertexColors:!0,flatShading:!0}),Rt=new Xt().setFromPoints([new C(0,0,0),new C(.9,-.3,0),new C(0,-.6,0)]),It=Bi.map(st=>{const Bt=new De;Bt.position.x=st,Bt.add(new ee(yt,at));for(const Qt of[-1,1]){const te=new ee(new On(.05,.05,2.2,5),new Zn({color:16777215}));te.position.set(Qt*(xl/2+.15),1.1+mi,-pi),Bt.add(te);const ne=new ee(Rt,new tn({color:16758531,side:_n}));ne.position.set(Qt*(xl/2+.15),2.2+mi,-pi),ne.rotation.y=Qt>0?Math.PI:0,Bt.add(ne),Bt.userData.flags=(Bt.userData.flags||[]).concat(ne)}return u.add(Bt),Bt.visible=!1,Bt}),xt=new De;xt.visible=!1,u.add(xt);{const st=new Zn({color:3108342});for(const te of[-1,1]){const ne=new ee(new si(.6,6,.6),st);ne.position.set(te*9,3,0),xt.add(ne)}const Bt=KM("FINISH");for(const te of[0,Math.PI]){const ne=new ee(new gn(18.6,2.9),new tn({map:Bt}));ne.position.set(0,6.2,te?-.05:.05),ne.rotation.y=te,xt.add(ne)}const Qt=v.load("./textures/crowd.webp");Qt.colorSpace=Se;for(const te of[-1,1]){const ne=new ee(new gn(10,5.6),new tn({map:Qt,transparent:!0,alphaTest:.1,side:_n}));ne.position.set(te*15,2.8,2),ne.rotation.y=te*.5,xt.add(ne)}}const X=kM();u.add(X.root);const N=new ee(new gn(1.8,2.6),new tn({map:JM(),transparent:!0,depthWrite:!1}));N.rotation.x=-Math.PI/2,N.position.y=.03,u.add(N);const W=GM(520);u.add(W.points);const I=WM(900);u.add(I.points);const R={x:0,vx:0,y:0,vy:0,steer:0,boost:0,speed:0,skiing:!1,mode:"idle",rowZ:null,rowVisible:!1,rowLane:-1,rowDecided:!1,treeLane:-1,timeScale:1,tsTarget:1,trauma:0,fovKick:0,crashT:0,cerT:0,cerCb:null,t:0,landed:!1,airLane:-1},tt=[];let dt=e||(r?"ultra":"high"),ht=0,Dt=0,bt=0,P=!!e||r;function w(st){dt=st;const Bt=st==="high"?1.75:st==="low"?1:r?.6:.75,Qt=!!i.isSoft;i.setPixelRatio(Math.min(n,Bt)),F.count=Qt?36:st==="high"?G:st==="low"?100:60,I.setCount(Qt?70:st==="high"?900:st==="low"?350:150),W.setBudget(st==="high"?1:st==="low"?.5:.3),q()}function q(){const st=s.clientWidth||window.innerWidth,Bt=s.clientHeight||window.innerHeight;i.setSize(st,Bt,!1),h.aspect=st/Bt,h.userData.baseFov=st/Bt<.8?72:60,h.updateProjectionMatrix(),W.setScale(Bt*i.getPixelRatio()/(2*Math.tan(h.fov*Math.PI/360)))}window.addEventListener("resize",q),w(dt);function Q(){const st=i.domElement,Bt=new ap;Bt.mrjGpu="canvas2d",Bt.mrjWeak=!0,Bt.domElement.className=st.className,Bt.setClearColor(12575743),st.replaceWith(Bt.domElement);try{i.dispose()}catch(Qt){}i=Bt,r=!0,a=24,P=!0,ct={lost:!1,count:0},_l(s),w("ultra")}let ct=DM(i,s,{onRestored:()=>{dt==="high"&&w("low")},onFallback:Q});function j(){R.rowZ=qM,R.rowVisible=!0,R.rowDecided=!1,R.treeLane=-1,It.forEach(st=>{st.visible=!0,st.scale.set(1,1,1)})}function Mt(){R.rowVisible=!1,It.forEach(st=>st.visible=!1)}function pt(st,Bt=1){R.mode="ramp",R.airLane=st,R.streak=Bt,It.forEach((Qt,te)=>{te!==st&&(Qt.visible=!0)}),X.setPose("crouch")}function Tt(st){R.mode="ramp",R.airLane=st,R.wrong=!0,X.setPose("crouch")}function $t(st){R.mode="crash",R.crashT=0,R.crashDone=!1,R.vy=0,X.setPose("crash"),X.kick(-4),R.trauma=1,W.burst(R.x,.4,-.4,st?90:70,{speed:7,up:6,size:.65,life:1.3,colors:[16777215,15266815,14674687],force:!0})}function lt(st){R.airLane=-1,$t(!1),W.burst(st.x,3,0,30,{speed:3,up:2,size:.5,life:1.6,colors:[16777215,15923199],g:5,force:!0}),W.burst(st.x,2.2,0,16,{speed:3,up:2.5,size:.3,life:1.3,colors:[2779967,2054709,7031338],g:6,force:!0}),tt.push({type:"treecrash"})}function Pt(st){R.mode="ceremony",R.cerT=0,R.cerCb=st,Mt(),xt.visible=!0,xt.position.set(0,0,-17)}function kt(){R.x=0,R.vx=0,R.y=0,R.vy=0,R.mode=R.skiing?"ski":"idle",R.rowZ=null,R.timeScale=1,R.tsTarget=1,R.trauma=0,R.wrong=!1,xt.visible=!1,Mt(),X.reset(),tt.length=0}function Gt(st){R.skiing=!!st,st&&(R.mode==="idle"||R.mode==="crash"||R.mode==="ceremony")&&(R.mode="ski"),!st&&R.mode==="ski"&&(R.mode="idle")}function vt(){return tt.splice(0,tt.length)}const Ht=new C;function Ot(st,Bt,Qt){Ht.set(st,Bt,Qt).project(h);const te=s.clientWidth,ne=s.clientHeight;return{x:(Ht.x*.5+.5)*te,y:(-Ht.y*.5+.5)*ne,vis:Ht.z<1&&Ht.z>-1}}function ue(){return Ot(R.x,R.y+2.4,0)}function B(st){R.t+=st;let Bt=0;(R.mode==="ski"||R.mode==="ramp"||R.mode==="air")&&(Bt=Ba+YM*R.boost),R.mode==="crash"&&(Bt=0),R.mode==="ceremony"&&(Bt=Math.max(0,Ba*(1-R.cerT/3)));const Qt=R.mode==="crash"?10:R.mode==="ceremony"?50:3.5;R.speed+=(Bt-R.speed)*Math.min(1,st*Qt),R.mode==="ceremony"&&(R.speed=Bt);const te=R.speed*st;if(R.mode==="ski"){const Wt=R.steer*9;R.vx+=(Wt-R.vx)*Math.min(1,st*6),R.x=xi.clamp(R.x+R.vx*st,-As-4.5,As+4.5)}else R.mode==="air"||R.mode==="ramp"?(R.vx*=Math.exp(-st*3),R.x+=R.vx*st,R.airLane>=0&&(R.x+=(Bi[R.airLane]-R.x)*Math.min(1,st*3))):R.vx*=Math.exp(-st*4);if(R.rowVisible&&R.rowZ!=null){if(R.rowZ+=te,It.forEach((Wt,ce)=>{Wt.position.z=R.rowZ;for(const rn of Wt.userData.flags)rn.rotation.z=Math.sin(R.t*8+ce)*.15}),!R.rowDecided&&R.rowZ>=0&&R.mode==="ski"){R.rowDecided=!0;let Wt=-1;Bi.forEach((ce,rn)=>{Math.abs(R.x-ce)<XM&&(Wt=rn)}),tt.push(Wt>=0?{type:"hit",lane:Wt}:{type:"pending-miss"})}R.rowDecided&&R.rowZ>pi+4&&R.mode==="ski"&&(Mt(),R._pendingMiss&&(R._pendingMiss=!1,tt.push({type:"missed"}))),R.rowZ>40&&Mt()}if(R.mode==="ramp"){const Wt=R.rowZ;R.y=xi.clamp(Wt/pi,0,1)*mi,Wt>=pi&&(R.mode="air",R.vy=9.5,X.setPose(R.wrong?"twirl":"jump"),X.kick(1.2),W.burst(R.x,mi,0,30,{speed:3,up:4,size:.4,life:.8,colors:[16777215,14741503]}),R.fovKick=1)}else if(R.mode==="air")R.vy-=13*st,R.y+=R.vy*st,R.wrong?R.tsTarget=1:R.vy<5&&R.vy>-4?(X.setPose("tuck"),R.tsTarget=.38):R.tsTarget=1,R.y<=0&&R.wrong?(R.y=0,R.wrong=!1,R.airLane=-1,R.tsTarget=1,$t(!0),tt.push({type:"fall"})):R.y<=0&&(R.y=0,R.vy=0,R.mode="ski",R.tsTarget=1,R.airLane=-1,X.setPose("land"),X.kick(-3.2),R.trauma=Math.max(R.trauma,.25),W.burst(R.x,.1,.2,60,{speed:6,up:3.5,size:.55,life:.9,colors:[16777215,15398143,14215679]}),tt.push({type:"land"}),R.landT=.35);else if(R.mode==="crash")R.crashT+=st,R.y=Math.max(0,Math.sin(Math.min(1,R.crashT*2.2)*Math.PI)*.45),R.crashT<.6&&Math.random()<st*30&&W.emit({x:R.x+(Math.random()-.5),y:.2,z:Math.random()-.5,vx:(Math.random()-.5)*4,vy:2+Math.random()*2,vz:2,life:.7,size:.5,color:16777215,force:!0}),R.crashT>1.7&&!R.crashDone&&(R.crashDone=!0,tt.push({type:"crashdone"}));else if(R.mode==="ceremony"&&(R.cerT+=st,R.y=0,xt.position.z+=te,R.cerT>2.6&&X.setPose("cheer"),R.cerT>2.6&&Math.random()<st*10&&W.burst(R.x+(Math.random()-.5)*10,6+Math.random()*3,-2+Math.random()*4,14,{speed:3,up:3,size:.32,life:2.2,g:2.2,drag:1.2,world:0,colors:[16731501,16758531,3127551,1429926,16777215,11623679],force:!0}),R.cerT>5&&R.cerCb)){const Wt=R.cerCb;R.cerCb=null,Wt()}if(R.mode!=="crash"&&(R.crashDone=!1),R.landT>0&&(R.landT-=st,R.landT<=0&&R.mode==="ski"&&X.setPose(R.boost>.3?"crouch":"ski")),R.mode==="ski"&&!(R.landT>0)&&X.setPose(R.boost>.3?"crouch":"ski"),(R.mode==="ski"||R.mode==="ceremony")&&R.speed>2){const Wt=Math.min(1,Math.abs(R.vx)/7),ce=R.speed/Ba*(1+Wt*4)*st*30;for(let rn=0;rn<ce;rn++){const as=R.vx>=0?-1:1;W.emit({x:R.x+(Math.random()-.5)*.4,y:.08,z:.6+Math.random()*.4,vx:as*Wt*(2+Math.random()*3)+(Math.random()-.5),vy:1+Math.random()*2*(.4+Wt),vz:1+Math.random()*2,life:.45+Math.random()*.4,size:.22+Wt*.3+Math.random()*.15,color:16777215,g:7,drag:2.5})}}for(let Wt=0;Wt<H.length;Wt++){const ce=H[Wt];ce.z+=te,ce.z>45&&V(ce,ce.z-270),_t.set(ce.x,0,ce.z),wt.setFromAxisAngle(nt,Math.atan2(gt.x-ce.x,gt.z-ce.z)),Z.setScalar(ce.s),ut.compose(_t,wt,Z),F.setMatrixAt(Wt,ut),R.mode==="ski"&&Wt<F.count&&Math.abs(ce.z)<.75&&Math.abs(ce.x-R.x)<.5*ce.s+.35&&lt(ce)}F.instanceMatrix.needsUpdate=!0;for(let Wt=0;Wt<O;Wt++)et[Wt]+=te,et[Wt]>22&&(et[Wt]-=O/2*13),_t.set((Wt%2?1:-1)*(As+.3),0,et[Wt]),wt.identity(),Z.setScalar(1),ut.compose(_t,wt,Z),U.setMatrixAt(Wt,ut);U.instanceMatrix.needsUpdate=!0,y.offset.y+=te/(320/50),D.offset.y+=te/(320/60),W.update(st,R.speed),X.root.position.set(R.x,R.y,0),X.update(st,{steer:R.mode==="ski"?R.vx/9:0}),N.position.x=R.x;const ne=1/(1+R.y*.35);N.scale.set(ne,ne,1),N.material.opacity=ne}const gt=new C(0,3.6,8),K=new C(0,1.2,-8),it=new C,Et=new C;function At(st){if(R.mode==="ceremony"&&R.cerT>1.8){const te=Math.min(1,(R.cerT-1.8)/1.5),ne=te*Math.PI*.62+R.cerT*.02;it.set(R.x+Math.sin(ne)*6.5,2.2+te*.6,Math.cos(ne)*6.5),Et.set(R.x,1.4,0)}else it.set(R.x*.75,3.5+R.y*.55,7.8-R.boost*1.2),Et.set(R.x*.9,1.3+R.y*.6,-9);const Bt=1-Math.exp(-st*5);if(gt.lerp(it,Bt),K.lerp(Et,Bt),h.position.copy(gt),R.trauma>0){const te=R.trauma*R.trauma*.55,ne=R.t*40;h.position.x+=Math.sin(ne*1.3)*te,h.position.y+=Math.sin(ne*1.7+1)*te,h.position.z+=Math.sin(ne*1.1+2)*te*.5,R.trauma=Math.max(0,R.trauma-st*1.4)}h.lookAt(K),R.fovKick=Math.max(0,R.fovKick-st*1.2);const Qt=(h.userData.baseFov||60)+R.boost*9+R.fovKick*6+(R.speed/Ba-1)*4;Math.abs(h.fov-Qt)>.05&&(h.fov+=(Qt-h.fov)*Math.min(1,st*4),h.updateProjectionMatrix()),m.forEach((te,ne)=>{te.position.x=-gt.x*g[ne]*10}),f.position.copy(h.position)}const qt=[0,0,0];function ve(){const st=R.rowVisible&&R.rowZ!=null&&R.rowZ<=2&&(R.mode==="ski"||R.mode==="ramp");let Bt=0;if(st){const Wt=Ot(Bi[0],mi+2.6,R.rowZ-pi),ce=Ot(Bi[1],mi+2.6,R.rowZ-pi);Bt=Math.abs(ce.x-Wt.x)}let Qt=1;t.forEach((Wt,ce)=>{(!qt[ce]||Wt.dataset.w!==Wt.textContent)&&(qt[ce]=Wt.offsetWidth||120,Wt.dataset.w=Wt.textContent),Qt=Math.max(Qt,qt[ce])});const te=xi.clamp(Bt*.94/Qt,.32,1.15),ne=st?xi.clamp((R.rowZ+62)/10,0,1):0;t.forEach((Wt,ce)=>{if(!st){Wt.style.opacity="0";return}const rn=Ot(Bi[ce],mi+2.6,R.rowZ-pi);Wt.style.opacity=rn.vis?ne.toFixed(2):"0",Wt.style.transform=`translate(-50%, -100%) translate(${rn.x.toFixed(1)}px, ${rn.y.toFixed(1)}px) scale(${te.toFixed(3)})`})}function Ie(st){if(!(P||!R.skiing)&&(ht+=st,Dt++,bt+=st,bt>=2)){const Bt=Dt/ht;ht=0,Dt=0,bt=0,Bt<42&&dt==="high"?w("low"):Bt<28&&dt==="low"&&(w("ultra"),P=!0)}}function de(st){R.timeScale+=(R.tsTarget-R.timeScale)*Math.min(1,st*(R.tsTarget<1?10:4));const Bt=st*R.timeScale;if(B(Bt),At(st),ve(),I.update(st,R.speed,gt.x),Ie(st),ct.lost)return;const Qt=performance.now();a&&Qt-o<1e3/a-4||(o=Qt,c++,Qt-l>=1e3&&(fn.drawFps=c*1e3/(Qt-l),c=0,l=Qt),i.render(u,h))}const sn=tt.push.bind(tt);tt.push=st=>st.type==="pending-miss"?(R._pendingMiss=!0,tt.length):sn(st),q();const fn={get renderer(){return i},get gpu(){return i.mrjGpu||""},get weak(){return r},get soft(){return!!i.isSoft},get quality(){return dt},get fpsCap(){return a},drawFps:0};return window.MRJ_STAGE3D=fn,{get renderer(){return i},camera:h,scene:u,S:R,showRow:j,hideRow:Mt,launch:pt,crash:Tt,ceremony:Pt,reset:kt,setSkiing:Gt,pullEvents:vt,tick:de,skierScreen:ue,toScreen:Ot,setSteer(st){R.steer=xi.clamp(st,-1,1)},setBoost(st){R.boost=st},setQuality:w,get quality(){return dt},isAirborne:()=>R.mode==="air"||R.mode==="ramp",lanes:Bi}}const QM={whoosh:"./audio/snow-whoosh.mp3",jump:"./audio/ski-jump.mp3",cheer:"./audio/crowd-cheer.mp3",crash:"./audio/tree-crash.mp3",thud:"./audio/snow-thud.mp3"},tS="./audio/music-christmas-synths.mp3";function eS(){let s=null,t,e,n,i,r=null,a=null;const o={};let c=!1,l=null,u=!1;function d(){if(s)return s;const Y=window.AudioContext||window.webkitAudioContext;return Y?(s=new Y,t=s.createGain(),t.gain.value=.9,t.connect(s.destination),e=s.createGain(),e.gain.value=.85,e.connect(t),n=s.createGain(),n.gain.value=0,n.connect(t),i=s.createGain(),i.gain.value=1,i.connect(t),s):null}async function h(Y){try{const U=await fetch(Y);if(!U.ok)return null;const et=await U.arrayBuffer();return await new Promise(rt=>{const ut=s.decodeAudioData(et,rt,()=>rt(null));ut&&ut.then&&ut.then(rt,()=>rt(null))})}catch(U){return null}}function f(){return l||!d()||(l=Promise.all(Object.entries(QM).map(async([Y,U])=>{o[Y]=await h(U)})).then(async()=>{a=await h(tS),p&&v()})),l}function m(){if(d()){if(s.state==="suspended"&&s.resume().catch(()=>{}),!u){const Y=s.createBuffer(1,1,22050),U=s.createBufferSource();U.buffer=Y,U.connect(s.destination),U.start(0),u=!0}f()}}function _(Y,{vol:U=1,rate:et=1,delay:rt=0}={}){if(!s||c)return;const ut=o[Y];if(!ut)return;const wt=s.createBufferSource(),_t=s.createGain();wt.buffer=ut,wt.playbackRate.value=et,_t.gain.value=U,wt.connect(_t),_t.connect(e),wt.start(s.currentTime+rt)}function g(Y,U,{type:et="triangle",vol:rt=.25,at:ut=0,slide:wt=0}={}){if(!s||c)return;const _t=s.currentTime+ut,Z=s.createOscillator(),nt=s.createGain();Z.type=et,Z.frequency.setValueAtTime(Y,_t),wt&&Z.frequency.exponentialRampToValueAtTime(Math.max(40,Y+wt),_t+U),nt.gain.setValueAtTime(1e-4,_t),nt.gain.linearRampToValueAtTime(rt,_t+.015),nt.gain.exponentialRampToValueAtTime(1e-4,_t+U),Z.connect(nt),nt.connect(e),Z.start(_t),Z.stop(_t+U+.05)}let p=!1;function v(){p=!0,!(!s||!a||r)&&(r=s.createBufferSource(),r.buffer=a,r.loop=!0,r.connect(n),r.start(),n.gain.setTargetAtTime(c?0:.32,s.currentTime,.8))}function y(Y){!s||c||n.gain.setTargetAtTime(Y?.12:.32,s.currentTime,.15)}const x=[0,2,4,7,9,12,14,16,19,21,24];function D(Y){const U=523.25*Math.pow(2,x[Math.min(x.length-1,Math.max(0,Y-1))]/12);g(U,.18,{vol:.22}),g(U*1.25,.18,{vol:.2,at:.08}),g(U*1.5,.32,{vol:.22,at:.16}),_("jump",{vol:.9,rate:1+Math.min(.5,Y*.05)})}function A(){g(392,.16,{type:"square",vol:.07}),g(294,.3,{type:"square",vol:.07,at:.15,slide:-60})}function M(){_("thud",{vol:1}),_("whoosh",{vol:.6,rate:.7})}function E(){_("crash",{vol:1}),_("thud",{vol:.8,delay:.05})}function b(){_("cheer",{vol:1}),[0,4,7,12,16].forEach((Y,U)=>g(523.25*Math.pow(2,Y/12),.4,{vol:.18,at:U*.11}))}function S(){_("whoosh",{vol:.7,rate:.9})}function L(Y){Y>.6&&_("whoosh",{vol:.25*Y,rate:1.2})}function G(){_("whoosh",{vol:.55,rate:1.35})}async function F(Y){if(!(!s||c))for(const U of Y){const et=await h(U);if(et){const rt=s.createBufferSource();rt.buffer=et,rt.connect(i),y(!0),rt.onended=()=>y(!1),rt.start();return}}}function H(){p=!1;try{r&&r.stop()}catch(Y){}try{r&&r.disconnect()}catch(Y){}r=null}function V(){H(),s&&s.state==="running"&&s.suspend().catch(()=>{})}function O(Y){return c=!!Y,s&&(t.gain.setTargetAtTime(c?0:.9,s.currentTime,.05),!c&&r&&n.gain.setTargetAtTime(.32,s.currentTime,.3)),c}return{unlock:m,play:_,correct:D,wrong:A,fall:M,treeCrash:E,win:b,land:S,carve:L,boost:G,speak:F,startMusic:v,stopMusic:H,stopAll:V,state:()=>s?s.state:"none",setMuted:O,isMuted:()=>c,ready:()=>l}}const Ro="ski-jump",cp="MRJ Ski Jump";function lp(){try{const s=window.MRJ_AUTH;return s&&s.student&&s.student()||""}catch(s){return""}}function nS(s,t,e){try{const n=lp();if(!n||!window.MRJ_SCORES||typeof window.MRJ_SCORES.post!="function"||!t||!t.item_id)return;const i=String(s.pack_id||"pack");window.MRJ_SCORES.post({student:String(n).trim(),program:Ro,appName:cp,bookTitle:s.title||s.pack_id,itemId:i+":"+t.item_id,itemType:"word",correctness:e?"correct":"incorrect",scoreValue:e?1:0,scoreMax:1})}catch(n){}}function iS(s,t,e,n){try{if(t.mrjRoundPosted)return;t.mrjRoundPosted=!0;const i=lp();if(!i||!window.MRJ_SCORES||typeof window.MRJ_SCORES.post!="function")return;const r=String(s.pack_id||"pack"),a=t.records.length,o=t.records.filter(c=>c.correct).length;window.MRJ_SCORES.post({student:String(i).trim(),program:Ro,appName:cp,bookTitle:s.title||s.pack_id,itemId:"round:"+r,itemType:"round",scoreValue:o,scoreMax:a||1,metadata:{round:t.round,lives:t.lives,dead:!!n,corrects:t.corrects,target:e}})}catch(i){}}function sS(s,t){const e=String(s||"").trim();if(!e||e.indexOf("round:")===0)return"";const n=e.indexOf(":");if(n>0){const i=e.slice(0,n);if(i==="round")return"";const r=String(t||"").trim();return r&&i!==r?"":e.slice(n+1)}return e}function rS(s,t,e,n){const i=window.MRJ_SKI_PROGRESS;if(i&&typeof i.passedMap=="function"){i.applyPassed(t.roundDone,i.passedMap(e,Ro,s.pack_id)),t.corrects=i.syncCorrects(t.roundDone,s.items,n,t.corrects);return}const r={};for(const o of Array.isArray(e)?e:[]){if(!o||String(o.program||o.curriculum_program||"").trim()!==Ro)continue;const c=sS(o.itemId||o.item_id||o.item,s.pack_id);if(!c)continue;const l=o.scoreValue!=null?o.scoreValue:o.score!=null?o.score:o.scorePct,u=typeof l=="number"?l:parseFloat(String(l==null?"":l).split("/")[0]),d=o.scoreMax!=null?Number(o.scoreMax):NaN,h=o.scorePct!=null?Number(o.scorePct):NaN,f=Number.isFinite(h)?h>=100:Number.isFinite(d)&&d>0&&Number.isFinite(u)?u>=d:Number.isFinite(u)&&u>0;r[c]=!!r[c]||!!f}let a=0;for(const o of s.items||[])o&&r[o.item_id]&&(t.roundDone[o.item_id]=!0,a++);t.corrects=Math.max(t.corrects|0,Math.min(n,a))}function aS(s,t){try{const e=Object.keys(s.roundDone).filter(i=>s.roundDone[i]).length,n=t.items&&t.items.length||0;n&&e>=n&&window.parent&&window.parent!==window&&window.parent.postMessage({type:"mrj-wm-game-done",game:"snowjump",items:e,correct:s.corrects|0,finished:!0},"*")}catch(e){}}function el(){try{const s=globalThis.MRJSignin||globalThis.MRJ_AUTH;return!!(s&&typeof s.isTeacher=="function"&&s.isTeacher())}catch(s){return!1}}function oS(s){typeof document!="undefined"&&document.addEventListener("mrj-teacher",()=>{try{s()}catch(t){}})}const rd="1.0.0",ad=3,cS=5,od='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',lS='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9l6 6M22 9l-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';function cd(s){const t=document.createElement("div");return t.innerHTML=s.trim(),t.firstElementChild}const za=s=>String(s==null?"":s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),hS=()=>"s-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,8),ld=s=>String(s||"").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");function uS(s,{pack:t,studentId:e="",sessionMode:n=!1,quality:i}={}){s.innerHTML="";let r=t;const a=()=>n?r.items&&r.items.length||0:cS,o=eS(),c=cd(`<div class="hud">
    <div class="topbar">
      <div class="pill name" id="sj-name">Ski</div>
      <div class="pill prog"><div class="bar"><i id="sj-bar"></i></div><span id="sj-left">0/5</span></div>
      <div class="pill pts" id="sj-score">0</div>
      <div class="pill combo" id="sj-combo"></div>
      <button class="pill mute" id="sj-mute" type="button" aria-label="Sound on/off">${od}</button>
    </div>
    <div class="question hidden" id="sj-q"><small>Ski to the word that means…</small><p id="sj-qp">?</p></div>
    <div class="ramp-word" data-lane="0"></div><div class="ramp-word" data-lane="1"></div><div class="ramp-word" data-lane="2"></div>
    <div class="toast" id="sj-toast"></div>
    <div class="steer-hint hidden" id="sj-hint"><span>◀</span><em>tap sides to steer · slide up = faster</em><span>▶</span></div>
    <div class="card start" id="sj-start">
      <div class="logo"><b>SKI</b><b>JUMP</b></div>
      <div class="mrj-h2p" id="mrj-h2p"><h2>HOW TO PLAY</h2><ul class="mrj-h2p-list"><li><span class="ic">📖</span>Read the meaning at the top.</li><li><span class="ic">⛷️</span>Ski onto the ramp with the right word.</li><li><span class="ic">🌲</span>Wrong ramp or a tree = crash!</li></ul><div class="mrj-h2p-ctl"><div class="ctl"><b>💻 Computer</b><span><kbd>←</kbd><kbd>→</kbd> steer</span><span><kbd>↑</kbd> go faster</span></div><div class="ctl"><b>📱 Touch</b><span>👈 Tap left side = go left</span><span>👉 Tap right side = go right</span><span>👆 Slide up = go faster</span></div></div></div>
      <form id="sj-form">
        <input id="sj-input" type="text" maxlength="24" placeholder="Your name" autocomplete="nickname" />
        <button class="go" type="submit">Start skiing</button>
      </form>
      <label class="drop" id="sj-drop">Teachers: drop an Excel / CSV / JSON pack here
        <input id="lf-file" type="file" accept=".xlsx,.xls,.csv,.json" hidden />
      </label>
      <a class="howto" href="./HOW-TO-PLAY.html">How to play</a>
    </div>
    <div class="card end hidden" id="sj-end"></div>
  </div>`);s.appendChild(c);const l=X=>c.querySelector(X),u=[...c.querySelectorAll(".ramp-word")],d=jM(s,u,{quality:i});s.insertBefore(d.renderer.domElement,c),n&&(l("#sj-drop").remove(),l(".howto").remove());const h={pack:r,studentId:e||"",sessionId:hS(),view:"start",points:0,errors:0,round:1,roundDone:{},mrjRoundPosted:!1,queue:[],trial:null,jumping:!1,lives:ad,corrects:0,records:[],startedAt:null,t:0,pendingLand:null,keys:{left:!1,right:!1,up:!1},pointerSteer:0,pointerDown:!1,holdSteer:0,boost:0,ptrStartY:0,ptrY:0,streak:0,best:0},f=[];let m=[];const _=()=>Math.max(0,a()-h.corrects),g=()=>Math.min(4,1+Math.floor(h.streak/3));function p(){l("#sj-name").textContent=h.studentId||"Ski",l("#sj-score").textContent=`${h.points} pts`;const X=a()||1;l("#sj-left").textContent=`${h.corrects}/${a()}`,l("#sj-bar").style.width=`${Math.min(100,h.corrects/X*100)}%`;const N=g(),W=l("#sj-combo");W.textContent=h.streak>=2?`COMBO ×${N} · ${h.streak}`:"",W.classList.toggle("on",h.streak>=2),W.dataset.m=String(N)}function v(X,N){const W=l("#sj-toast");W.textContent=X,W.className=`toast ${N}`,W.offsetWidth,W.classList.add("on"),clearTimeout(W._h),W._h=setTimeout(()=>W.classList.remove("on"),850)}function y(X,N=""){const W=d.skierScreen(),I=cd(`<div class="float ${N}">${za(X)}</div>`);I.style.left=`${W.x}px`,I.style.top=`${W.y}px`,c.appendChild(I),setTimeout(()=>I.remove(),1300)}function x(X){l("#sj-q").classList.toggle("hidden",!X),l("#sj-hint").classList.toggle("hidden",!X)}function D(){h.queue=sd(r.items.filter(X=>!h.roundDone[X.item_id]))}function A(X){if(!X)return;const N=[X.audio];n||N.push(X.question&&`./audio/${ld(X.question)}.mp3`,X.correct&&`./audio/${ld(X.correct)}.mp3`),o.speak(N.filter(Boolean))}function M(X){X.choices.forEach((W,I)=>{u[I].textContent=W||"—",u[I].dataset.answer=W||""}),l("#sj-qp").textContent=X.item.question;const N=l("#sj-q");N.classList.remove("pop"),N.offsetWidth,N.classList.add("pop")}function E(X=!0){if(X||!h.trial){if(h.queue.length||D(),!h.queue.length)return G();const N=h.queue.shift(),W=sd([N.correct,...N.wrong.slice(0,2)]);for(;W.length<3;)W.push("");h.trial={item:N,choices:W,correctLane:W.indexOf(N.correct),startedAt:new Date().toISOString(),t0:performance.now(),locked:!1},M(h.trial),A(N)}else h.trial.locked=!1;x(!0),d.showRow(),p()}function b(X,N,W,I){const R={student_id:h.studentId,session_id:h.sessionId,module_id:r.module_id||"ski_jump",activity_id:r.activity_id||"slope_jump",item_id:X.item_id,skill_tags:X.skill_tags||r.skill_tags||[],response:N,correct:W,latency_ms:Math.round(I),accuracy:0,points:h.points,errors:h.errors,started_at:h.trial.startedAt,ended_at:new Date().toISOString(),ui_locale:r.ui_locale||"en",round:h.round},tt=h.records.concat(R);return R.accuracy=tt.filter(dt=>dt.correct).length/tt.length,h.records.push(R),window.dispatchEvent(new CustomEvent("lf-record",{detail:R})),nS(r,X,!!W),R}function S(X){const N=h.trial;if(!N||N.locked||h.view!=="play")return;N.locked=!0,h.jumping=!0;const W=performance.now()-N.t0,I=X===N.correctLane,R=Number.isInteger(X)?N.choices[X]:"";if(I){h.roundDone[N.item.item_id]=!0,h.corrects+=1,h.streak+=1,h.best=Math.max(h.best,h.streak);const tt=g();h.points+=100*tt,o.correct(h.streak),v("FLY!","ok"),y(tt>1?`+100 ×${tt}`:"+100",tt>1?"combo":""),d.launch(X,h.streak),h.pendingLand={correct:!0,dead:!1,goLand:_()===0}}else el()?(o.wrong(),v("Try again","warn"),N.locked=!1,h.jumping=!1,E(!1)):(h.errors+=1,h.lives=0,h.streak=0,h.deadReason="fall",o.wrong(),v("Oops!","bad"),d.crash(X),h.pendingLand={correct:!1,dead:!0,goLand:!1});b(N.item,R,I,W),p()}function L(){const X=h.pendingLand;if(h.pendingLand=null,h.jumping=!1,!!X){if(X.dead)return F({dead:!0});if(o.land(),X.goLand){x(!1),d.hideRow(),o.win(),d.ceremony(()=>F());return}E(!0)}}function G(){return h.trial=null,x(!1),v(`Round ${h.round} done`,"ok"),F()}function F({dead:X=!1}={}){if(h.view==="end")return;iS(r,h,a(),X),X||aS(h,r),h.view="end",h.trial=null,d.setSkiing(!1),x(!1),o.stopMusic(),setTimeout(()=>{h.view==="end"&&o.stopAll()},2500);const N=h.records.length?Math.round(h.records.filter(dt=>dt.correct).length/h.records.length*100):0,W=f.findIndex(dt=>dt.student_id===h.studentId&&dt.pack_id===r.pack_id),I={student_id:h.studentId,pack_id:r.pack_id,points:h.points,accuracy:N,errors:h.errors,ended_at:new Date().toISOString()};W>=0?I.points>=f[W].points&&(f[W]=I):f.push(I),f.sort((dt,ht)=>ht.points-dt.points);const R=l("#sj-end"),tt=za(h.studentId);R.innerHTML=`<div class="medal ${X?"crash":"gold"}"><span>${X?"!":"★"}</span></div>
      <h2>${X?"Crashed!":"Gold medal!"}</h2>
      <p>${X?h.deadReason==="tree"?`${tt} hit a tree. Start again.`:`${tt} jumped the wrong ramp and fell. Start again.`:`${tt} got ${a()} right. The crowd cheered and they put a gold medal on.`}</p>
      <div class="stats"><div><b>${h.points}</b><span>points</span></div><div><b>${N}%</b><span>accurate</span></div><div><b>${h.best}</b><span>best combo</span></div></div>
      ${f.length>1?`<div class="board">${f.slice(0,8).map((dt,ht)=>`${ht+1}. ${za(dt.student_id)} — ${dt.points} pts`).join("<br>")}</div>`:""}
      <button class="go" id="sj-again" type="button">Start again</button>`,R.classList.remove("hidden"),R.querySelector("#sj-again").onclick=()=>{o.unlock(),H()}}function H(){if(Object.assign(h,{points:0,errors:0,lives:ad,corrects:0,roundDone:{},mrjRoundPosted:!1,records:[],trial:null,jumping:!1,pendingLand:null,view:"play",holdSteer:0,pointerSteer:0,boost:0,streak:0,best:0,deadReason:""}),l("#sj-end").classList.add("hidden"),l("#sj-end").innerHTML="",o.unlock(),o.startMusic(),d.reset(),d.setSkiing(!0),V(),h.corrects>=a())return d.setSkiing(!1),F();D(),E(!0),p()}function V(){if(el()){for(const X of r.items||[])X&&(h.roundDone[X.item_id]=!0);h.corrects=a();return}rS(r,h,m,a())}function O(X){if(h.studentId=String(X).slice(0,24),h.startedAt=new Date().toISOString(),h.view="play",l("#sj-start").classList.add("hidden"),o.unlock(),o.startMusic(),d.reset(),d.setSkiing(!0),V(),h.corrects>=a())return d.setSkiing(!1),F();D(),E(!0),p()}function Y(X){h.studentId=String(X).slice(0,24),l("#sj-form").innerHTML=`<div class="hello">Hi, <b>${za(h.studentId)}</b>!</div><button class="go big" type="submit">Tap to start ▶</button>`,p()}function U(X){m=Array.isArray(X)?X:[],V(),h.view==="play"&&(D(),p())}window.addEventListener("mrj-auth-ready",X=>{const N=X&&X.detail||{};m=Array.isArray(N.progress)?N.progress.slice():[];const W=window.MRJ_SKI_PROGRESS;W&&typeof W.onAuthReady=="function"?W.onAuthReady(X,{onRows:U}):V();const I=N.id||window.MRJ_AUTH&&window.MRJ_AUTH.student&&window.MRJ_AUTH.student();if(h.view==="start"){I&&Y(I);return}h.records.length||h.jumping||h.pendingLand||(h.roundDone={},h.mrjRoundPosted=!1,h.corrects=0,h.queue=[],h.trial=null,h.view="play",l("#sj-end").classList.add("hidden"),V(),h.corrects>=a()?(d.setSkiing(!1),F()):E(!0),p())}),l("#sj-form").addEventListener("submit",X=>{X.preventDefault();const N=l("#sj-input");O(N&&N.value.trim()||h.studentId||"Student")}),e&&Y(e);const et=l("#sj-mute");et.addEventListener("click",X=>{X.stopPropagation(),o.unlock();const N=o.setMuted(!o.isMuted());et.innerHTML=N?lS:od,et.classList.toggle("off",N)});const rt=X=>{const N=X.changedTouches?X.changedTouches[0]:X,W=s.getBoundingClientRect();return{x:(N.clientX-W.left)/Math.max(1,W.width),h:Math.max(1,W.height),y:N.clientY}},ut=X=>X<.38?-1:X>.62?1:(X-.5)*2;function wt(X){const N=rt(X);h.pointerSteer=ut(N.x),h.holdSteer=h.pointerSteer,h.ptrY=N.y,h.boost=Math.max(0,Math.min(1,(h.ptrStartY-h.ptrY)/(N.h*.3)))}s.addEventListener("pointerdown",X=>{if(o.unlock(),h.view!=="play"||X.target.closest&&X.target.closest(".card, button, input, a, label"))return;X.preventDefault(),h.pointerDown=!0;const N=rt(X);h.ptrStartY=N.y,h.ptrY=N.y,wt(X);try{s.setPointerCapture(X.pointerId)}catch(W){}}),s.addEventListener("pointermove",X=>{h.pointerDown&&h.view==="play"&&(X.preventDefault(),wt(X))});const _t=()=>{h.pointerDown=!1,h.holdSteer=0};s.addEventListener("pointerup",_t),s.addEventListener("pointercancel",_t);const Z=X=>N=>{const W=N.key;(W==="ArrowLeft"||W==="a"||W==="A")&&(h.keys.left=X),(W==="ArrowRight"||W==="d"||W==="D")&&(h.keys.right=X),(W==="ArrowUp"||W==="w"||W==="W")&&(h.keys.up=X),X&&W.startsWith("Arrow")&&h.view==="play"&&N.preventDefault(),X&&o.unlock()};window.addEventListener("keydown",Z(!0)),window.addEventListener("keyup",Z(!1));const nt=()=>{let X=0;return h.keys.left&&(X-=1),h.keys.right&&(X+=1),X||(h.pointerDown?h.pointerSteer:h.holdSteer)};let yt=performance.now(),at=!1;function Rt(X){const N=Math.min(.05,Math.max(0,(X-yt)/1e3));if(yt=X,h.t+=N,d.setSteer(nt()),h.keys.up?h.boost=Math.min(1,h.boost+N*2.6):h.pointerDown||(h.boost=Math.max(0,h.boost-N*1.35)),h.boost>.5&&!at&&o.boost(),at=h.boost>.5,d.setBoost(h.view==="play"?h.boost:0),d.tick(N),h.view==="play")for(const W of d.pullEvents())if(W.type==="hit")S(W.lane);else if(W.type==="land"||W.type==="crashdone")L();else if(W.type==="fall")o.fall(),v("CRASH!","bad");else if(W.type==="treecrash"&&!h.pendingLand){if(el()){v("Tree — try again","warn"),E(!1);continue}h.lives=0,h.streak=0,h.deadReason="tree",h.trial&&(h.trial.locked=!0),o.treeCrash(),v("TREE!","bad"),x(!1),d.hideRow(),h.pendingLand={correct:!1,dead:!0,goLand:!1}}else W.type==="missed"&&h.trial&&!h.trial.locked&&(v("Missed! Try again","warn"),E(!1));else d.pullEvents();requestAnimationFrame(Rt)}requestAnimationFrame(Rt),p();const It={version:rd,getState(){return{student_id:h.studentId,session_id:h.sessionId,pack_id:r.pack_id,view:h.view,points:h.points,errors:h.errors,lives:h.lives,round:h.round,corrects:h.corrects,remaining:_(),total:a(),pack_items:r.items.length,current_item:h.trial?h.trial.item.item_id:null,correct_lane:h.trial?h.trial.correctLane:null,choices:h.trial?h.trial.choices.slice():[],airborne:d.isAirborne(),x:d.S.x,streak:h.streak,multiplier:g(),quality:d.quality,muted:o.isMuted(),version:rd,target_rule:n?"wm:all-items":"standalone:5",steer:h.holdSteer,boost:h.boost,session_mode:n}},getRecords:()=>h.records.slice(),getLeaderboard:()=>f.slice(),loadPack(X){return n?!1:(r=X,h.pack=X,h.roundDone={},D(),p(),!0)}},xt=()=>{o.stopAll()};return window.addEventListener("message",X=>{const N=X.data;(N==="mrj-stop"||N&&N.type==="mrj-stop")&&xt()}),window.addEventListener("pagehide",xt),document.addEventListener("visibilitychange",()=>{document.hidden?xt():h.view==="play"&&(o.unlock(),o.startMusic())}),oS(()=>{V(),p(),h.view==="play"&&E(!1)}),window.MRJSkiJump=It,window.SkiJump=It,It}const hp=document.getElementById("app"),uh=new URLSearchParams(location.search),dS=(uh.get("student")||"").trim(),vl=uh.get("pack")||"",yl=vl==="session";async function fS(){if(yl){const t=sessionStorage.getItem("mrj.wm.gamepack");if(!t)throw new Error("Open Ski Jump from Word Master to get your words.");return hc(JSON.parse(t))}if(vl)try{return await id(vl)}catch(t){}const s=document.querySelector('meta[name="sj-default-pack"]');if(!s)throw new Error("Open Ski Jump from Word Master to get your words.");return id(s.content)}async function pS(){const s=await fS(),t=uh.get("q"),e=uS(hp,{pack:s,studentId:dS,sessionMode:yl,quality:t==="low"||t==="high"||t==="ultra"?t:void 0});if(yl)return;const n=document.getElementById("lf-file"),i=n&&n.closest("label"),r=document.querySelector("#sj-start .lead");async function a(o){try{const c=await zM(o);e.loadPack(c),r&&(r.textContent=`Loaded ${c.title} · ${c.items.length} questions.`)}catch(c){r&&(r.textContent="Could not read that pack: "+c.message)}}n&&n.addEventListener("change",()=>n.files[0]&&a(n.files[0])),i&&(i.addEventListener("dragover",o=>{o.preventDefault(),i.classList.add("over")}),i.addEventListener("dragleave",()=>i.classList.remove("over")),i.addEventListener("drop",o=>{o.preventDefault(),i.classList.remove("over"),o.dataTransfer.files[0]&&a(o.dataTransfer.files[0])}))}pS().catch(s=>{console.error(s),UM(hp,"Ski Jump")});
