(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="162",up={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},dp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xu=0,mc=1,qu=2,fp=3,pp=0,ol=1,Yu=2,En=3,Rn=0,Oe=1,mn=2,Xn=0,Wi=1,Ts=2,gc=3,_c=4,$u=5,hi=100,Zu=101,Ju=102,xc=103,vc=104,Ku=200,ju=201,Qu=202,td=203,Fa=204,Ba=205,ed=206,nd=207,id=208,sd=209,rd=210,ad=211,od=212,cd=213,ld=214,hd=0,ud=1,dd=2,ir=3,fd=4,pd=5,md=6,gd=7,wr=0,_d=1,xd=2,qn=0,vd=1,yd=2,Md=3,cl=4,Sd=5,bd=6,wd=7,yc="attached",Ed="detached",qa=300,$n=301,gi=302,sr=303,rr=304,Us=306,Yi=1e3,Ve=1001,ar=1002,Ee=1003,za=1004,mp=1004,Bi=1005,gp=1005,_e=1006,Qs=1007,_p=1007,An=1008,xp=1008,Yn=1009,Ad=1010,Td=1011,Ya=1012,ll=1013,Hn=1014,on=1015,Rs=1016,hl=1017,ul=1018,fi=1020,Cd=1021,je=1023,Rd=1024,Pd=1025,pi=1026,$i=1027,dl=1028,fl=1029,Ld=1030,pl=1031,ml=1033,Pa=33776,La=33777,Ia=33778,Da=33779,Mc=35840,Sc=35841,bc=35842,wc=35843,gl=36196,Ec=37492,Ac=37496,Tc=37808,Cc=37809,Rc=37810,Pc=37811,Lc=37812,Ic=37813,Dc=37814,Uc=37815,Nc=37816,Oc=37817,Fc=37818,Bc=37819,zc=37820,kc=37821,Ua=36492,Gc=36494,Vc=36495,Id=36283,Hc=36284,Wc=36285,Xc=36286,Dd=2200,Ud=2201,Nd=2202,or=2300,cr=2301,Na=2302,ki=2400,Gi=2401,lr=2402,$a=2500,_l=2501,vp=0,yp=1,Mp=2,Od=3200,Fd=3201,xi=0,Bd=1,Gn="",Te="srgb",Jn="srgb-linear",Za="display-p3",Er="display-p3-linear",hr="linear",fe="srgb",ur="rec709",dr="p3",Sp=0,Oi=7680,bp=7681,wp=7682,Ep=7683,Ap=34055,Tp=34056,Cp=5386,Rp=512,Pp=513,Lp=514,Ip=515,Dp=516,Up=517,Np=518,qc=519,zd=512,kd=513,Gd=514,xl=515,Vd=516,Hd=517,Wd=518,Xd=519,fr=35044,di=35048,Op=35040,Fp=35045,Bp=35049,zp=35041,kp=35046,Gp=35050,Vp=35042,Hp="100",Yc="300 es",ka=1035,Tn=2e3,pr=2001;class Kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jl=1234567;const Xi=Math.PI/180,Ps=180/Math.PI;function ln(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[s&255]+ze[s>>8&255]+ze[s>>16&255]+ze[s>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function ye(s,t,e){return Math.max(t,Math.min(e,s))}function vl(s,t){return(s%t+t)%t}function Wp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Xp(s,t,e){return s!==t?(e-s)/(t-s):0}function tr(s,t,e){return(1-e)*s+e*t}function qp(s,t,e,n){return tr(s,t,1-Math.exp(-e*n))}function Yp(s,t=1){return t-Math.abs(vl(s,t*2)-t)}function $p(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Zp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Jp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Kp(s,t){return s+Math.random()*(t-s)}function jp(s){return s*(.5-Math.random())}function Qp(s){s!==void 0&&(jl=s);let t=jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tm(s){return s*Xi}function em(s){return s*Ps}function $c(s){return(s&s-1)===0&&s!==0}function nm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ga(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function im(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*u,c*d,c*h,o*l);break;case"YZY":s.set(c*h,o*u,c*d,o*l);break;case"ZXZ":s.set(c*d,c*h,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function qt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ui={DEG2RAD:Xi,RAD2DEG:Ps,generateUUID:ln,clamp:ye,euclideanModulo:vl,mapLinear:Wp,inverseLerp:Xp,lerp:tr,damp:qp,pingpong:Yp,smoothstep:$p,smootherstep:Zp,randInt:Jp,randFloat:Kp,randFloatSpread:jp,seededRandom:Qp,degToRad:tm,radToDeg:em,isPowerOfTwo:$c,ceilPowerOfTwo:nm,floorPowerOfTwo:Ga,setQuaternionFromProperEuler:im,normalize:qt,denormalize:qe};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,r,a,o,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],M=i[7],L=i[2],E=i[5],y=i[8];return r[0]=a*_+o*v+c*L,r[3]=a*m+o*x+c*E,r[6]=a*p+o*M+c*y,r[1]=l*_+u*v+d*L,r[4]=l*m+u*x+d*E,r[7]=l*p+u*M+d*y,r[2]=h*_+f*v+g*L,r[5]=h*m+f*x+g*E,r[8]=h*p+f*M+g*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,g=e*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=h*_,t[4]=(u*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(To.makeScale(t,e)),this}rotate(t){return this.premultiply(To.makeRotation(-t)),this}translate(t,e){return this.premultiply(To.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Wt;function qd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const sm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function bs(s,t){return new sm[s](t)}function mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yd(){const s=mr("canvas");return s.style.display="block",s}const Ql={};function $d(s){s in Ql||(Ql[s]=!0,console.warn(s))}const th=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eh=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dr={[Jn]:{transfer:hr,primaries:ur,toReference:s=>s,fromReference:s=>s},[Te]:{transfer:fe,primaries:ur,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Er]:{transfer:hr,primaries:dr,toReference:s=>s.applyMatrix3(eh),fromReference:s=>s.applyMatrix3(th)},[Za]:{transfer:fe,primaries:dr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(eh),fromReference:s=>s.applyMatrix3(th).convertLinearToSRGB()}},rm=new Set([Jn,Er]),he={enabled:!0,_workingColorSpace:Jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!rm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Dr[t].toReference,i=Dr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Dr[s].primaries},getTransfer:function(s){return s===Gn?hr:Dr[s].transfer}};function Cs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Co(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ts;class yl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=mr("canvas")),ts.width=t.width,ts.height=t.height;const n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Cs(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cs(e[n]/255)*255):e[n]=Cs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let am=0;class Vi{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ln(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ro(i[a].image)):r.push(Ro(i[a]))}else r=Ro(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ro(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?yl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let om=0;class Me extends Kn{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=Ve,i=Ve,r=_e,a=An,o=je,c=Yn,l=Me.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ln(),this.name="",this.source=new Vi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yi:t.x=t.x-Math.floor(t.x);break;case Ve:t.x=t.x<0?0:1;break;case ar:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yi:t.y=t.y-Math.floor(t.y);break;case Ve:t.y=t.y<0?0:1;break;case ar:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=qa;Me.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(f+1)/2,L=(p+1)/2,E=(u+h)/4,y=(d+_)/4,T=(g+m)/4;return x>M&&x>L?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=y/n):M>L?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=T/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=y/r,i=T/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zd extends Kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_e,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Me(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vi(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Zd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ja extends Me{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cm extends yn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ja(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class Ml extends Me{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lm extends yn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ml(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class Ye{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3];const h=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==h||l!==f||u!==g){let m=1-o;const p=c*h+l*f+u*g+d*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),E=Math.atan2(L,p*v);m=Math.sin(m*E)/L,o=Math.sin(o*E)/L}const M=o*v;if(c=c*m+h*M,l=l*m+f*M,u=u*m+g*M,d=d*m+_*M,m===1-o){const L=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=L,l*=L,u*=L,d*=L}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-o*f,t[e+2]=l*g+u*f+o*h-c*d,t[e+3]=u*g-o*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),d=o(r/2),h=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),u=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=i+c*d+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Po.copy(this).projectOnVector(t),this.sub(Po)}reflect(t){return this.sub(Po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new P,nh=new Ye;class $e{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),Nr.subVectors(this.max,ks),es.subVectors(t.a,ks),ns.subVectors(t.b,ks),is.subVectors(t.c,ks),Qn.subVectors(ns,es),ti.subVectors(is,ns),bi.subVectors(es,is);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-bi.z,bi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,bi.z,0,-bi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-bi.y,bi.x,0];return!Lo(e,es,ns,is,Nr)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,es,ns,is,Nr))?!1:(Or.crossVectors(Qn,ti),e=[Or.x,Or.y,Or.z],Lo(e,es,ns,is,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new P,new P,new P,new P,new P,new P,new P,new P],gn=new P,Ur=new $e,es=new P,ns=new P,is=new P,Qn=new P,ti=new P,bi=new P,ks=new P,Nr=new P,Or=new P,wi=new P;function Lo(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){wi.fromArray(s,r);const o=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),c=t.dot(wi),l=e.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const hm=new $e,Gs=new P,Io=new P;class Fe{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const e=Gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(Io)),this.expandByPoint(Gs.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new P,Do=new P,Fr=new P,ei=new P,Uo=new P,Br=new P,No=new P;class Ns{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Do.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(Do);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Fr),o=ei.dot(this.direction),c=-ei.dot(Fr),l=ei.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Do).addScaledVector(Fr,h),f}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,i,r){Uo.subVectors(e,t),Br.subVectors(n,t),No.crossVectors(Uo,Br);let a=this.direction.dot(No),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,t);const c=o*this.direction.dot(Br.crossVectors(ei,Br));if(c<0)return null;const l=o*this.direction.dot(Uo.cross(ei));if(l<0||c+l>a)return null;const u=-o*ei.dot(No);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(t,e,n,i,r,a,o,c,l,u,d,h,f,g,_,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,u,d,h,f,g,_,m)}set(t,e,n,i,r,a,o,c,l,u,d,h,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-_*l,e[9]=-o*c,e[2]=_-h*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(um,t,dm)}lookAt(t,e,n){const i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ni.crossVectors(n,sn),ni.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ni.crossVectors(n,sn)),ni.normalize(),zr.crossVectors(sn,ni),i[0]=ni.x,i[4]=zr.x,i[8]=sn.x,i[1]=ni.y,i[5]=zr.y,i[9]=sn.y,i[2]=ni.z,i[6]=zr.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],M=n[11],L=n[15],E=i[0],y=i[4],T=i[8],N=i[12],S=i[1],R=i[5],J=i[9],X=i[13],D=i[2],O=i[6],U=i[10],z=i[14],B=i[3],W=i[7],tt=i[11],st=i[15];return r[0]=a*E+o*S+c*D+l*B,r[4]=a*y+o*R+c*O+l*W,r[8]=a*T+o*J+c*U+l*tt,r[12]=a*N+o*X+c*z+l*st,r[1]=u*E+d*S+h*D+f*B,r[5]=u*y+d*R+h*O+f*W,r[9]=u*T+d*J+h*U+f*tt,r[13]=u*N+d*X+h*z+f*st,r[2]=g*E+_*S+m*D+p*B,r[6]=g*y+_*R+m*O+p*W,r[10]=g*T+_*J+m*U+p*tt,r[14]=g*N+_*X+m*z+p*st,r[3]=v*E+x*S+M*D+L*B,r[7]=v*y+x*R+M*O+L*W,r[11]=v*T+x*J+M*U+L*tt,r[15]=v*N+x*X+M*z+L*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*d-i*l*d-r*o*h+n*l*h+i*o*f-n*c*f)+_*(+e*c*f-e*l*h+r*a*h-i*a*f+i*l*u-r*c*u)+m*(+e*l*d-e*o*f-r*a*d+n*a*f+r*o*u-n*l*u)+p*(-i*o*u-e*c*d+e*o*h+i*a*d-n*a*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=d*m*l-_*h*l+_*c*f-o*m*f-d*c*p+o*h*p,x=g*h*l-u*m*l-g*c*f+a*m*f+u*c*p-a*h*p,M=u*_*l-g*d*l+g*o*f-a*_*f-u*o*p+a*d*p,L=g*d*c-u*_*c-g*o*h+a*_*h+u*o*m-a*d*m,E=e*v+n*x+i*M+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/E;return t[0]=v*y,t[1]=(_*h*r-d*m*r-_*i*f+n*m*f+d*i*p-n*h*p)*y,t[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*p+n*c*p)*y,t[3]=(d*c*r-o*h*r-d*i*l+n*h*l+o*i*f-n*c*f)*y,t[4]=x*y,t[5]=(u*m*r-g*h*r+g*i*f-e*m*f-u*i*p+e*h*p)*y,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*p-e*c*p)*y,t[7]=(a*h*r-u*c*r+u*i*l-e*h*l-a*i*f+e*c*f)*y,t[8]=M*y,t[9]=(g*d*r-u*_*r-g*n*f+e*_*f+u*n*p-e*d*p)*y,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*y,t[11]=(u*o*r-a*d*r-u*n*l+e*d*l+a*n*f-e*o*f)*y,t[12]=L*y,t[13]=(u*_*i-g*d*i+g*n*h-e*_*h-u*n*m+e*d*m)*y,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*y,t[15]=(a*d*i-u*o*i+u*n*c-e*d*c-a*n*h+e*o*h)*y,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,g=r*d,_=a*u,m=a*d,p=o*d,v=c*l,x=c*u,M=c*d,L=n.x,E=n.y,y=n.z;return i[0]=(1-(_+p))*L,i[1]=(f+M)*L,i[2]=(g-x)*L,i[3]=0,i[4]=(f-M)*E,i[5]=(1-(h+p))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(g+x)*y,i[9]=(m-v)*y,i[10]=(1-(h+_))*y,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ss.set(i[0],i[1],i[2]).length();const a=ss.set(i[4],i[5],i[6]).length(),o=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],_n.copy(this);const l=1/r,u=1/a,d=1/o;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Tn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i);let f,g;if(o===Tn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===pr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Tn){const c=this.elements,l=1/(e-t),u=1/(n-i),d=1/(a-r),h=(e+t)*l,f=(n+i)*u;let g,_;if(o===Tn)g=(a+r)*d,_=-2*d;else if(o===pr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new P,_n=new Nt,um=new P(0,0,0),dm=new P(1,1,1),ni=new P,zr=new P,sn=new P,ih=new Nt,sh=new Ye;class hn{constructor(t=0,e=0,n=0,i=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Ka{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fm=0;const rh=new P,rs=new Ye,Nn=new Nt,kr=new P,Vs=new P,pm=new P,mm=new Ye,ah=new P(1,0,0),oh=new P(0,1,0),ch=new P(0,0,1),gm={type:"added"},_m={type:"removed"},Oo={type:"childadded",child:null},Fo={type:"childremoved",child:null};class ce extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new P,e=new hn,n=new Ye,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Wt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(ah,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(ch,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ah,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Vs,kr,this.up):Nn.lookAt(kr,Vs,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),rs.setFromRotationMatrix(Nn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(gm),Oo.child=t,this.dispatchEvent(Oo),Oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_m),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ce.DEFAULT_UP=new P(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new P,On=new P,Bo=new P,Fn=new P,as=new P,os=new P,lh=new P,zo=new P,ko=new P,Go=new P;class cn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),xn.subVectors(t,e),i.cross(xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){xn.subVectors(i,e),On.subVectors(n,e),Bo.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(On),c=xn.dot(Bo),l=On.dot(On),u=On.dot(Bo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(a,Fn.y),c.addScaledVector(o,Fn.z),c)}static isFrontFacing(t,e,n,i){return xn.subVectors(n,e),On.subVectors(t,e),xn.cross(On).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),xn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;as.subVectors(i,n),os.subVectors(r,n),zo.subVectors(t,n);const c=as.dot(zo),l=os.dot(zo);if(c<=0&&l<=0)return e.copy(n);ko.subVectors(t,i);const u=as.dot(ko),d=os.dot(ko);if(u>=0&&d<=u)return e.copy(i);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(as,a);Go.subVectors(t,r);const f=as.dot(Go),g=os.dot(Go);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(os,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return lh.subVectors(r,i),o=(d-u)/(d-u+(f-g)),e.copy(i).addScaledVector(lh,o);const p=1/(m+_+h);return a=_*p,o=h*p,e.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Vo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=vl(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Vo(a,r,t+1/3),this.g=Vo(a,r,t),this.b=Vo(a,r,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=Jd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}copyLinearToSRGB(t){return this.r=Co(t.r),this.g=Co(t.g),this.b=Co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return he.fromWorkingColorSpace(ke.copy(this),t),Math.round(ye(ke.r*255,0,255))*65536+Math.round(ye(ke.g*255,0,255))*256+Math.round(ye(ke.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,i=ke.g,r=ke.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Te){he.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,i=ke.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Gr);const n=tr(ii.h,Gr.h,e),i=tr(ii.s,Gr.s,e),r=tr(ii.l,Gr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new ut;ut.NAMES=Jd;let xm=0;class He extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=Wi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Ba,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qe extends He{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Vn=vm();function vm(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Ke(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ye(s,-65504,65504),Vn.floatView[0]=s;const t=Vn.uint32View[0],e=t>>23&511;return Vn.baseTable[e]+((t&8388607)>>Vn.shiftTable[e])}function js(s){const t=s>>10;return Vn.uint32View[0]=Vn.mantissaTable[Vn.offsetTable[t]+(s&1023)]+Vn.exponentTable[t],Vn.floatView[0]}const ym={toHalfFloat:Ke,fromHalfFloat:js},Ae=new P,Vr=new rt;class ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return $d("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vr.fromBufferAttribute(this,e),Vr.applyMatrix3(t),this.setXY(e,Vr.x,Vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qe(e,this.array)),e}setX(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qe(e,this.array)),e}setY(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qe(e,this.array)),e}setW(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fr&&(t.usage=this.usage),t}}class Mm extends ie{constructor(t,e,n){super(new Int8Array(t),e,n)}}class Sm extends ie{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class bm extends ie{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class wm extends ie{constructor(t,e,n){super(new Int16Array(t),e,n)}}class Sl extends ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Em extends ie{constructor(t,e,n){super(new Int32Array(t),e,n)}}class bl extends ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Am extends ie{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=js(this.array[t*this.itemSize]);return this.normalized&&(e=qe(e,this.array)),e}setX(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize]=Ke(e),this}getY(t){let e=js(this.array[t*this.itemSize+1]);return this.normalized&&(e=qe(e,this.array)),e}setY(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+1]=Ke(e),this}getZ(t){let e=js(this.array[t*this.itemSize+2]);return this.normalized&&(e=qe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+2]=Ke(e),this}getW(t){let e=js(this.array[t*this.itemSize+3]);return this.normalized&&(e=qe(e,this.array)),e}setW(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+3]=Ke(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array)),this.array[t+0]=Ke(e),this.array[t+1]=Ke(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.array[t+0]=Ke(e),this.array[t+1]=Ke(n),this.array[t+2]=Ke(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[t+0]=Ke(e),this.array[t+1]=Ke(n),this.array[t+2]=Ke(i),this.array[t+3]=Ke(r),this}}class Pt extends ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Tm=0;const fn=new Nt,Ho=new ce,cs=new P,rn=new $e,Hs=new $e,Ie=new P;class Vt extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qd(t)?bl:Sl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Ho.lookAt(t),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(rn.min,Hs.min),rn.expandByPoint(Ie),Ie.addVectors(rn.max,Hs.max),rn.expandByPoint(Ie)):(rn.expandByPoint(Hs.min),rn.expandByPoint(Hs.max))}rn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ie.fromBufferAttribute(o,l),c&&(cs.fromBufferAttribute(t,l),Ie.add(cs)),i=Math.max(i,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ie(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let T=0;T<n.count;T++)o[T]=new P,c[T]=new P;const l=new P,u=new P,d=new P,h=new rt,f=new rt,g=new rt,_=new P,m=new P;function p(T,N,S){l.fromBufferAttribute(n,T),u.fromBufferAttribute(n,N),d.fromBufferAttribute(n,S),h.fromBufferAttribute(r,T),f.fromBufferAttribute(r,N),g.fromBufferAttribute(r,S),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),o[T].add(_),o[N].add(_),o[S].add(_),c[T].add(m),c[N].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let T=0,N=v.length;T<N;++T){const S=v[T],R=S.start,J=S.count;for(let X=R,D=R+J;X<D;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const x=new P,M=new P,L=new P,E=new P;function y(T){L.fromBufferAttribute(i,T),E.copy(L);const N=o[T];x.copy(N),x.sub(L.multiplyScalar(L.dot(N))).normalize(),M.crossVectors(E,N);const R=M.dot(c[T])<0?-1:1;a.setXYZW(T,x.x,x.y,x.z,R)}for(let T=0,N=v.length;T<N;++T){const S=v[T],R=S.start,J=S.count;for(let X=R,D=R+J;X<D;X+=3)y(t.getX(X+0)),y(t.getX(X+1)),y(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,d=new P;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new ie(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Vt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new Nt,Ei=new Ns,Hr=new Fe,uh=new P,ls=new P,hs=new P,us=new P,Wo=new P,Wr=new P,Xr=new rt,qr=new rt,Yr=new rt,dh=new P,fh=new P,ph=new P,$r=new P,Zr=new P;class Qt extends ce{constructor(t=new Vt,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(Wo.fromBufferAttribute(d,t),a?Wr.addScaledVector(Wo,u):Wr.addScaledVector(Wo.sub(e),u))}e.add(Wr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Hr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Hr,uh)===null||Ei.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(hh.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(hh),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,L=x;M<L;M+=3){const E=o.getX(M),y=o.getX(M+1),T=o.getX(M+2);i=Jr(this,p,t,n,l,u,d,E,y,T),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);i=Jr(this,a,t,n,l,u,d,v,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,L=x;M<L;M+=3){const E=M,y=M+1,T=M+2;i=Jr(this,p,t,n,l,u,d,E,y,T),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,M=m+2;i=Jr(this,a,t,n,l,u,d,v,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Cm(s,t,e,n,i,r,a,o){let c;if(t.side===Oe?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Rn,o),c===null)return null;Zr.copy(o),Zr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Zr);return l<e.near||l>e.far?null:{distance:l,point:Zr.clone(),object:s}}function Jr(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,ls),s.getVertexPosition(c,hs),s.getVertexPosition(l,us);const u=Cm(s,t,e,n,ls,hs,us,$r);if(u){i&&(Xr.fromBufferAttribute(i,o),qr.fromBufferAttribute(i,c),Yr.fromBufferAttribute(i,l),u.uv=cn.getInterpolation($r,ls,hs,us,Xr,qr,Yr,new rt)),r&&(Xr.fromBufferAttribute(r,o),qr.fromBufferAttribute(r,c),Yr.fromBufferAttribute(r,l),u.uv1=cn.getInterpolation($r,ls,hs,us,Xr,qr,Yr,new rt)),a&&(dh.fromBufferAttribute(a,o),fh.fromBufferAttribute(a,c),ph.fromBufferAttribute(a,l),u.normal=cn.getInterpolation($r,ls,hs,us,dh,fh,ph,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new P,materialIndex:0};cn.getNormal(ls,hs,us,d.normal),u.face=d}return u}class jn extends Vt{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(d,2));function g(_,m,p,v,x,M,L,E,y,T,N){const S=M/y,R=L/T,J=M/2,X=L/2,D=E/2,O=y+1,U=T+1;let z=0,B=0;const W=new P;for(let tt=0;tt<U;tt++){const st=tt*R-X;for(let ot=0;ot<O;ot++){const lt=ot*S-J;W[_]=lt*v,W[m]=st*x,W[p]=D,l.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=E>0?1:-1,u.push(W.x,W.y,W.z),d.push(ot/y),d.push(1-tt/T),z+=1}}for(let tt=0;tt<T;tt++)for(let st=0;st<y;st++){const ot=h+st+O*tt,lt=h+st+O*(tt+1),G=h+(st+1)+O*(tt+1),nt=h+(st+1)+O*tt;c.push(ot,lt,nt),c.push(lt,G,nt),B+=6}o.addGroup(f,B,N),f+=B,h+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Xe(s){const t={};for(let e=0;e<s.length;e++){const n=Ls(s[e]);for(const i in n)t[i]=n[i]}return t}function Rm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Kd(s){return s.getRenderTarget()===null?s.outputColorSpace:he.workingColorSpace}const jd={clone:Ls,merge:Xe};var Pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends He{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pm,this.fragmentShader=Lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=Rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ja extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new P,mh=new rt,gh=new rt;class Ue extends ja{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,mh,gh),e.subVectors(gh,mh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ds=-90,fs=1;class Qd extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ue(ds,fs,t,e);i.layers=this.layers,this.add(i);const r=new Ue(ds,fs,t,e);r.layers=this.layers,this.add(r);const a=new Ue(ds,fs,t,e);a.layers=this.layers,this.add(a);const o=new Ue(ds,fs,t,e);o.layers=this.layers,this.add(o);const c=new Ue(ds,fs,t,e);c.layers=this.layers,this.add(c);const l=new Ue(ds,fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ar extends Me{constructor(t,e,n,i,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:$n,super(t,e,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tf extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ar(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jn(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Xn});r.uniforms.tEquirect.value=e;const a=new Qt(i,r),o=e.minFilter;return e.minFilter===An&&(e.minFilter=_e),new Qd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Xo=new P,Im=new P,Dm=new Wt;class li{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Xo.subVectors(n,e).cross(Im.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dm.getNormalMatrix(t),i=this.coplanarPoint(Xo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Fe,Kr=new P;class Os{constructor(t=new li,e=new li,n=new li,i=new li,r=new li,a=new li){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],d=i[6],h=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(c-r,h-l,m-f,M-p).normalize(),n[1].setComponents(c+r,h+l,m+f,M+p).normalize(),n[2].setComponents(c+a,h+u,m+g,M+v).normalize(),n[3].setComponents(c-a,h-u,m-g,M-v).normalize(),n[4].setComponents(c-o,h-d,m-_,M-x).normalize(),e===Tn)n[5].setComponents(c+o,h+d,m+_,M+x).normalize();else if(e===pr)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Kr.x=i.normal.x>0?t.max.x:t.min.x,Kr.y=i.normal.y>0?t.max.y:t.min.y,Kr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ef(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Um(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const d=l.array,h=l.usage,f=d.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,d,h),l.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,u,d){const h=u.array,f=u._updateRange,g=u.updateRanges;if(s.bindBuffer(d,l),f.count===-1&&g.length===0&&s.bufferSubData(d,0,h),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];e?s.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):s.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):s.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,u),d.version=l.version}}return{get:a,remove:o,update:c}}class pn extends Vt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,d=t/o,h=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*h-a;for(let x=0;x<l;x++){const M=x*d-r;g.push(M,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const x=v+l*p,M=v+l*(p+1),L=v+1+l*(p+1),E=v+1+l*p;f.push(x,M,E),f.push(M,L,E)}this.setIndex(f),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
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
#endif`,Fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$m=`#ifdef USE_IRIDESCENCE
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
#endif`,Zm=`#ifdef USE_BUMPMAP
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sg=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,rg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ag=`vec3 transformedNormal = objectNormal;
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
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",dg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sg=`#ifdef USE_GRADIENTMAP
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
}`,bg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tg=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dg=`PhysicalMaterial material;
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
#endif`,Ug=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Ng=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xg=`#if defined( USE_POINTS_UV )
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
#endif`,qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s0=`#ifdef USE_NORMALMAP
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
#endif`,r0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O0=`uniform sampler2D t2D;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`#include <common>
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
}`,V0=`#if DEPTH_PACKING == 3200
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
	#endif
}`,H0=`#define DISTANCE
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
}`,W0=`#define DISTANCE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`uniform float scale;
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
}`,$0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,J0=`uniform vec3 diffuse;
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
}`,K0=`#define LAMBERT
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
}`,j0=`#define LAMBERT
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
}`,Q0=`#define MATCAP
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
}`,t_=`#define MATCAP
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
}`,e_=`#define NORMAL
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
}`,n_=`#define NORMAL
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
}`,i_=`#define PHONG
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
}`,s_=`#define PHONG
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
}`,r_=`#define STANDARD
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
}`,a_=`#define STANDARD
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
}`,o_=`#define TOON
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
}`,c_=`#define TOON
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
}`,l_=`uniform float size;
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,d_=`uniform vec3 color;
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
}`,f_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,p_=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Nm,alphahash_pars_fragment:Om,alphamap_fragment:Fm,alphamap_pars_fragment:Bm,alphatest_fragment:zm,alphatest_pars_fragment:km,aomap_fragment:Gm,aomap_pars_fragment:Vm,batching_pars_vertex:Hm,batching_vertex:Wm,begin_vertex:Xm,beginnormal_vertex:qm,bsdfs:Ym,iridescence_fragment:$m,bumpmap_pars_fragment:Zm,clipping_planes_fragment:Jm,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:jm,clipping_planes_vertex:Qm,color_fragment:tg,color_pars_fragment:eg,color_pars_vertex:ng,color_vertex:ig,common:sg,cube_uv_reflection_fragment:rg,defaultnormal_vertex:ag,displacementmap_pars_vertex:og,displacementmap_vertex:cg,emissivemap_fragment:lg,emissivemap_pars_fragment:hg,colorspace_fragment:ug,colorspace_pars_fragment:dg,envmap_fragment:fg,envmap_common_pars_fragment:pg,envmap_pars_fragment:mg,envmap_pars_vertex:gg,envmap_physical_pars_fragment:Cg,envmap_vertex:_g,fog_vertex:xg,fog_pars_vertex:vg,fog_fragment:yg,fog_pars_fragment:Mg,gradientmap_pars_fragment:Sg,lightmap_fragment:bg,lightmap_pars_fragment:wg,lights_lambert_fragment:Eg,lights_lambert_pars_fragment:Ag,lights_pars_begin:Tg,lights_toon_fragment:Rg,lights_toon_pars_fragment:Pg,lights_phong_fragment:Lg,lights_phong_pars_fragment:Ig,lights_physical_fragment:Dg,lights_physical_pars_fragment:Ug,lights_fragment_begin:Ng,lights_fragment_maps:Og,lights_fragment_end:Fg,logdepthbuf_fragment:Bg,logdepthbuf_pars_fragment:zg,logdepthbuf_pars_vertex:kg,logdepthbuf_vertex:Gg,map_fragment:Vg,map_pars_fragment:Hg,map_particle_fragment:Wg,map_particle_pars_fragment:Xg,metalnessmap_fragment:qg,metalnessmap_pars_fragment:Yg,morphinstance_vertex:$g,morphcolor_vertex:Zg,morphnormal_vertex:Jg,morphtarget_pars_vertex:Kg,morphtarget_vertex:jg,normal_fragment_begin:Qg,normal_fragment_maps:t0,normal_pars_fragment:e0,normal_pars_vertex:n0,normal_vertex:i0,normalmap_pars_fragment:s0,clearcoat_normal_fragment_begin:r0,clearcoat_normal_fragment_maps:a0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:c0,opaque_fragment:l0,packing:h0,premultiplied_alpha_fragment:u0,project_vertex:d0,dithering_fragment:f0,dithering_pars_fragment:p0,roughnessmap_fragment:m0,roughnessmap_pars_fragment:g0,shadowmap_pars_fragment:_0,shadowmap_pars_vertex:x0,shadowmap_vertex:v0,shadowmask_pars_fragment:y0,skinbase_vertex:M0,skinning_pars_vertex:S0,skinning_vertex:b0,skinnormal_vertex:w0,specularmap_fragment:E0,specularmap_pars_fragment:A0,tonemapping_fragment:T0,tonemapping_pars_fragment:C0,transmission_fragment:R0,transmission_pars_fragment:P0,uv_pars_fragment:L0,uv_pars_vertex:I0,uv_vertex:D0,worldpos_vertex:U0,background_vert:N0,background_frag:O0,backgroundCube_vert:F0,backgroundCube_frag:B0,cube_vert:z0,cube_frag:k0,depth_vert:G0,depth_frag:V0,distanceRGBA_vert:H0,distanceRGBA_frag:W0,equirect_vert:X0,equirect_frag:q0,linedashed_vert:Y0,linedashed_frag:$0,meshbasic_vert:Z0,meshbasic_frag:J0,meshlambert_vert:K0,meshlambert_frag:j0,meshmatcap_vert:Q0,meshmatcap_frag:t_,meshnormal_vert:e_,meshnormal_frag:n_,meshphong_vert:i_,meshphong_frag:s_,meshphysical_vert:r_,meshphysical_frag:a_,meshtoon_vert:o_,meshtoon_frag:c_,points_vert:l_,points_frag:h_,shadow_vert:u_,shadow_frag:d_,sprite_vert:f_,sprite_frag:p_},vt={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},vn={basic:{uniforms:Xe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Xe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ut(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Xe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Xe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Xe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new ut(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Xe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Xe([vt.points,vt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Xe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Xe([vt.common,vt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Xe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Xe([vt.sprite,vt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Xe([vt.common,vt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Xe([vt.lights,vt.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};vn.physical={uniforms:Xe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const jr={r:0,b:0,g:0},Ti=new hn,m_=new Nt;function g_(s,t,e,n,i,r,a){const o=new ut(0);let c=r===!0?0:1,l,u,d=null,h=0,f=null;function g(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,c):x&&x.isColor&&(_(x,1),v=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Us)?(u===void 0&&(u=new Qt(new jn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Ls(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ti.copy(p.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(m_.makeRotationFromEuler(Ti)),u.material.toneMapped=he.getTransfer(x.colorSpace)!==fe,(d!==x||h!==x.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,f=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Qt(new pn(2,2),new un({name:"BackgroundMaterial",uniforms:Ls(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=he.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=x,h=x.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(jr,Kd(s)),n.buffers.color.setClear(jr.r,jr.g,jr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function __(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,u=!1;function d(D,O,U,z,B){let W=!1;if(a){const tt=_(z,U,O);l!==tt&&(l=tt,f(l.object)),W=p(D,z,U,B),W&&v(D,z,U,B)}else{const tt=O.wireframe===!0;(l.geometry!==z.id||l.program!==U.id||l.wireframe!==tt)&&(l.geometry=z.id,l.program=U.id,l.wireframe=tt,W=!0)}B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,T(D,O,U,z),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,O,U){const z=U.wireframe===!0;let B=o[D.id];B===void 0&&(B={},o[D.id]=B);let W=B[O.id];W===void 0&&(W={},B[O.id]=W);let tt=W[z];return tt===void 0&&(tt=m(h()),W[z]=tt),tt}function m(D){const O=[],U=[],z=[];for(let B=0;B<i;B++)O[B]=0,U[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:U,attributeDivisors:z,object:D,attributes:{},index:null}}function p(D,O,U,z){const B=l.attributes,W=O.attributes;let tt=0;const st=U.getAttributes();for(const ot in st)if(st[ot].location>=0){const G=B[ot];let nt=W[ot];if(nt===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor)),G===void 0||G.attribute!==nt||nt&&G.data!==nt.data)return!0;tt++}return l.attributesNum!==tt||l.index!==z}function v(D,O,U,z){const B={},W=O.attributes;let tt=0;const st=U.getAttributes();for(const ot in st)if(st[ot].location>=0){let G=W[ot];G===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(G=D.instanceColor));const nt={};nt.attribute=G,G&&G.data&&(nt.data=G.data),B[ot]=nt,tt++}l.attributes=B,l.attributesNum=tt,l.index=z}function x(){const D=l.newAttributes;for(let O=0,U=D.length;O<U;O++)D[O]=0}function M(D){L(D,0)}function L(D,O){const U=l.newAttributes,z=l.enabledAttributes,B=l.attributeDivisors;U[D]=1,z[D]===0&&(s.enableVertexAttribArray(D),z[D]=1),B[D]!==O&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),B[D]=O)}function E(){const D=l.newAttributes,O=l.enabledAttributes;for(let U=0,z=O.length;U<z;U++)O[U]!==D[U]&&(s.disableVertexAttribArray(U),O[U]=0)}function y(D,O,U,z,B,W,tt){tt===!0?s.vertexAttribIPointer(D,O,U,B,W):s.vertexAttribPointer(D,O,U,z,B,W)}function T(D,O,U,z){if(n.isWebGL2===!1&&(D.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const B=z.attributes,W=U.getAttributes(),tt=O.defaultAttributeValues;for(const st in W){const ot=W[st];if(ot.location>=0){let lt=B[st];if(lt===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor)),lt!==void 0){const G=lt.normalized,nt=lt.itemSize,gt=e.get(lt);if(gt===void 0)continue;const yt=gt.buffer,bt=gt.type,ft=gt.bytesPerElement,Tt=n.isWebGL2===!0&&(bt===s.INT||bt===s.UNSIGNED_INT||lt.gpuType===ll);if(lt.isInterleavedBufferAttribute){const k=lt.data,w=k.stride,H=lt.offset;if(k.isInstancedInterleavedBuffer){for(let $=0;$<ot.locationSize;$++)L(ot.location+$,k.meshPerAttribute);D.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let $=0;$<ot.locationSize;$++)M(ot.location+$);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let $=0;$<ot.locationSize;$++)y(ot.location+$,nt/ot.locationSize,bt,G,w*ft,(H+nt/ot.locationSize*$)*ft,Tt)}else{if(lt.isInstancedBufferAttribute){for(let k=0;k<ot.locationSize;k++)L(ot.location+k,lt.meshPerAttribute);D.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let k=0;k<ot.locationSize;k++)M(ot.location+k);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let k=0;k<ot.locationSize;k++)y(ot.location+k,nt/ot.locationSize,bt,G,nt*ft,nt/ot.locationSize*k*ft,Tt)}}else if(tt!==void 0){const G=tt[st];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(ot.location,G);break;case 3:s.vertexAttrib3fv(ot.location,G);break;case 4:s.vertexAttrib4fv(ot.location,G);break;default:s.vertexAttrib1fv(ot.location,G)}}}}E()}function N(){J();for(const D in o){const O=o[D];for(const U in O){const z=O[U];for(const B in z)g(z[B].object),delete z[B];delete O[U]}delete o[D]}}function S(D){if(o[D.id]===void 0)return;const O=o[D.id];for(const U in O){const z=O[U];for(const B in z)g(z[B].object),delete z[B];delete O[U]}delete o[D.id]}function R(D){for(const O in o){const U=o[O];if(U[D.id]===void 0)continue;const z=U[D.id];for(const B in z)g(z[B].object),delete z[B];delete U[D.id]}}function J(){X(),u=!0,l!==c&&(l=c,f(l.object))}function X(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:J,resetDefaultState:X,dispose:N,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:M,disableUnusedAttributes:E}}function x_(s,t,e,n){const i=n.isWebGL2;let r;function a(u){r=u}function o(u,d){s.drawArrays(r,u,d),e.update(d,r,1)}function c(u,d,h){if(h===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,u,d,h),e.update(d,r,h)}function l(u,d,h){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{f.multiDrawArraysWEBGL(r,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function v_(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,M=a||t.has("OES_texture_float"),L=x&&M,E=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:L,maxSamples:E}}function y_(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new li,o=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,x=v*4;let M=p.clippingState||null;c.value=M,M=u(g,h,x,f);for(let L=0;L!==x;++L)M[L]=e[L];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==_;++x,M+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function M_(s){let t=new WeakMap;function e(a,o){return o===sr?a.mapping=$n:o===rr&&(a.mapping=gi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===sr||o===rr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new tf(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Qa extends ja{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ws=4,_h=[.125,.215,.35,.446,.526,.582],zi=20,qo=new Qa,xh=new ut;let Yo=null,$o=0,Zo=0;const Fi=(1+Math.sqrt(5))/2,ps=1/Fi,vh=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Fi,ps),new P(0,Fi,-ps),new P(ps,0,Fi),new P(-ps,0,Fi),new P(Fi,ps,0),new P(-Fi,ps,0)];class Zc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Yo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yo,$o,Zo),t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$n||t.mapping===gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_e,minFilter:_e,generateMipmaps:!1,type:Rs,format:je,colorSpace:Jn,depthBuffer:!1},i=yh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S_(r)),this._blurMaterial=b_(r,t,e)}return i}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,qo)}_sceneToCubeUV(t,e,n,i){const o=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(xh),u.toneMapping=qn,u.autoClear=!1;const f=new Qe({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new Qt(new jn,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(xh),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;Qr(i,v*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===$n||t.mapping===gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Qr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,qo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=vh[(i-1)%vh.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Qt(this._lodPlanes[i],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let v=0;for(let y=0;y<zi;++y){const T=y/_,N=Math.exp(-T*T/2);p.push(N),y===0?v+=N:y<m&&(v+=2*N)}for(let y=0;y<p.length;y++)p[y]=p[y]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const M=this._sizeLods[i],L=3*M*(i>x-ws?i-x+ws:0),E=4*(this._cubeSize-M);Qr(e,L,E,3*M,2*M),c.setRenderTarget(e),c.render(d,qo)}}function S_(s){const t=[],e=[],n=[];let i=s;const r=s-ws+1+_h.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-ws?c=_h[a-s+ws-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let E=0;E<f;E++){const y=E%3*2/3-1,T=E>2?0:-1,N=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];v.set(N,_*g*E),x.set(h,m*g*E);const S=[E,E,E,E,E,E];M.set(S,p*g*E)}const L=new Vt;L.setAttribute("position",new ie(v,_)),L.setAttribute("uv",new ie(x,m)),L.setAttribute("faceIndex",new ie(M,p)),t.push(L),i>ws&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yh(s,t,e){const n=new yn(s,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function b_(s,t,e){const n=new Float32Array(zi),i=new P(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wl(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Mh(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Sh(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function w_(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===sr||c===rr,u=c===$n||c===gi;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Zc(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||u&&d&&i(d)){e===null&&(e=new Zc(s));const h=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function E_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function A_(s,t,e,n){const i={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",a),delete i[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)t.update(h[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,M=v.length;x<M;x+=3){const L=v[x+0],E=v[x+1],y=v[x+2];h.push(L,E,E,y,y,L)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const L=x+0,E=x+1,y=x+2;h.push(L,E,E,y,y,L)}}else return;const m=new(qd(h)?bl:Sl)(h,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function T_(s,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function u(f,g){s.drawElements(r,g,o,f*c),e.update(g,r,1)}function d(f,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*c,_),e.update(g,r,_)}function h(f,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,_);let p=0;for(let v=0;v<_;v++)p+=g[v];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function C_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function R_(s,t){return s[0]-t[0]}function P_(s,t){return Math.abs(t[1])-Math.abs(s[1])}function L_(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new ue,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,d){const h=l.morphTargetInfluences;if(t.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0;let _=r.get(u);if(_===void 0||_.count!==g){let J=function(){S.dispose(),r.delete(u),u.removeEventListener("dispose",J)};_!==void 0&&_.texture.dispose();const m=u.morphAttributes.position!==void 0,p=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let E=0;m===!0&&(E=1),p===!0&&(E=2),v===!0&&(E=3);let y=u.attributes.position.count*E,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const N=new Float32Array(y*T*4*g),S=new Ja(N,y,T,g);S.type=on,S.needsUpdate=!0;const R=E*4;for(let X=0;X<g;X++){const D=x[X],O=M[X],U=L[X],z=y*T*4*X;for(let B=0;B<D.count;B++){const W=B*R;m===!0&&(a.fromBufferAttribute(D,B),N[z+W+0]=a.x,N[z+W+1]=a.y,N[z+W+2]=a.z,N[z+W+3]=0),p===!0&&(a.fromBufferAttribute(O,B),N[z+W+4]=a.x,N[z+W+5]=a.y,N[z+W+6]=a.z,N[z+W+7]=0),v===!0&&(a.fromBufferAttribute(U,B),N[z+W+8]=a.x,N[z+W+9]=a.y,N[z+W+10]=a.z,N[z+W+11]=U.itemSize===4?a.w:1)}}_={count:g,texture:S,size:new rt(y,T)},r.set(u,_),u.addEventListener("dispose",J)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",l.morphTexture,e);else{let m=0;for(let v=0;v<h.length;v++)m+=h[v];const p=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(s,"morphTargetBaseInfluence",p),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const f=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<f;x++){const M=g[x];M[0]=x,M[1]=h[x]}g.sort(P_);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(R_);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const M=o[x],L=M[0],E=M[1];L!==Number.MAX_SAFE_INTEGER&&E?(_&&u.getAttribute("morphTarget"+x)!==_[L]&&u.setAttribute("morphTarget"+x,_[L]),m&&u.getAttribute("morphNormal"+x)!==m[L]&&u.setAttribute("morphNormal"+x,m[L]),i[x]=E,p+=E):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const v=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function I_(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class El extends Me{constructor(t,e,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:pi,u!==pi&&u!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pi&&(n=Hn),n===void 0&&u===$i&&(n=fi),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ee,this.minFilter=c!==void 0?c:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nf=new Me,sf=new El(1,1);sf.compareFunction=xl;const rf=new Ja,af=new Ml,of=new Ar,bh=[],wh=[],Eh=new Float32Array(16),Ah=new Float32Array(9),Th=new Float32Array(4);function Fs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=bh[i];if(r===void 0&&(r=new Float32Array(i),bh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function to(s,t){let e=wh[t];e===void 0&&(e=new Int32Array(t),wh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function D_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function U_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function N_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function O_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function F_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;Th.set(n),s.uniformMatrix2fv(this.addr,!1,Th),Pe(e,n)}}function B_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;Ah.set(n),s.uniformMatrix3fv(this.addr,!1,Ah),Pe(e,n)}}function z_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;Eh.set(n),s.uniformMatrix4fv(this.addr,!1,Eh),Pe(e,n)}}function k_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function G_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function V_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function H_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function W_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function X_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function q_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function Y_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function $_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?sf:nf;e.setTexture2D(t||r,i)}function Z_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||af,i)}function J_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||of,i)}function K_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rf,i)}function j_(s){switch(s){case 5126:return D_;case 35664:return U_;case 35665:return N_;case 35666:return O_;case 35674:return F_;case 35675:return B_;case 35676:return z_;case 5124:case 35670:return k_;case 35667:case 35671:return G_;case 35668:case 35672:return V_;case 35669:case 35673:return H_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return K_}}function Q_(s,t){s.uniform1fv(this.addr,t)}function tx(s,t){const e=Fs(t,this.size,2);s.uniform2fv(this.addr,e)}function ex(s,t){const e=Fs(t,this.size,3);s.uniform3fv(this.addr,e)}function nx(s,t){const e=Fs(t,this.size,4);s.uniform4fv(this.addr,e)}function ix(s,t){const e=Fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function sx(s,t){const e=Fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function rx(s,t){const e=Fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ax(s,t){s.uniform1iv(this.addr,t)}function ox(s,t){s.uniform2iv(this.addr,t)}function cx(s,t){s.uniform3iv(this.addr,t)}function lx(s,t){s.uniform4iv(this.addr,t)}function hx(s,t){s.uniform1uiv(this.addr,t)}function ux(s,t){s.uniform2uiv(this.addr,t)}function dx(s,t){s.uniform3uiv(this.addr,t)}function fx(s,t){s.uniform4uiv(this.addr,t)}function px(s,t,e){const n=this.cache,i=t.length,r=to(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||nf,r[a])}function mx(s,t,e){const n=this.cache,i=t.length,r=to(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||af,r[a])}function gx(s,t,e){const n=this.cache,i=t.length,r=to(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||of,r[a])}function _x(s,t,e){const n=this.cache,i=t.length,r=to(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||rf,r[a])}function xx(s){switch(s){case 5126:return Q_;case 35664:return tx;case 35665:return ex;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ax;case 35667:case 35671:return ox;case 35668:case 35672:return cx;case 35669:case 35673:return lx;case 5125:return hx;case 36294:return ux;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return _x}}class vx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=j_(e.type)}}class yx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xx(e.type)}}class Mx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function Ch(s,t){s.seq.push(t),s.map[t.id]=t}function Sx(s,t,e){const n=s.name,i=n.length;for(Jo.lastIndex=0;;){const r=Jo.exec(n),a=Jo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Ch(e,l===void 0?new vx(o,s,t):new yx(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Mx(o),Ch(e,d)),e=d}}}class Oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Sx(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Rh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const bx=37297;let wx=0;function Ex(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ax(s){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(s);let n;switch(t===e?n="":t===dr&&e===ur?n="LinearDisplayP3ToLinearSRGB":t===ur&&e===dr&&(n="LinearSRGBToLinearDisplayP3"),s){case Jn:case Er:return[n,"LinearTransferOETF"];case Te:case Za:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ph(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Ex(s.getShaderSource(t),a)}else return i}function Tx(s,t){const e=Ax(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Cx(s,t){let e;switch(t){case vd:e="Linear";break;case yd:e="Reinhard";break;case Md:e="OptimizedCineon";break;case cl:e="ACESFilmic";break;case bd:e="AgX";break;case wd:e="Neutral";break;case Sd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Rx(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Es).join(`
`)}function Px(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function Lx(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ix(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Es(s){return s!==""}function Lh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ih(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(s){return s.replace(Dx,Nx)}const Ux=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nx(s,t){let e=$t[t];if(e===void 0){const n=Ux.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jc(e)}const Ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(s){return s.replace(Ox,Fx)}function Fx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Uh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(t+=`precision ${s.precision} sampler3D;
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
		`),s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ol?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function zx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $n:case gi:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Gx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wr:t="ENVMAP_BLENDING_MULTIPLY";break;case _d:t="ENVMAP_BLENDING_MIX";break;case xd:t="ENVMAP_BLENDING_ADD";break}return t}function Vx(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hx(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Bx(e),l=zx(e),u=kx(e),d=Gx(e),h=Vx(e),f=e.isWebGL2?"":Rx(e),g=Px(e),_=Lx(r),m=i.createProgram();let p,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Es).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Es).join(`
`),v.length>0&&(v+=`
`)):(p=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),v=[f,Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?$t.tonemapping_pars_fragment:"",e.toneMapping!==qn?Cx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Tx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=Jc(a),a=Lh(a,e),a=Ih(a,e),o=Jc(o),o=Lh(o,e),o=Ih(o,e),a=Dh(a),o=Dh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=x+p+a,L=x+v+o,E=Rh(i,i.VERTEX_SHADER,M),y=Rh(i,i.FRAGMENT_SHADER,L);i.attachShader(m,E),i.attachShader(m,y),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function T(J){if(s.debug.checkShaderErrors){const X=i.getProgramInfoLog(m).trim(),D=i.getShaderInfoLog(E).trim(),O=i.getShaderInfoLog(y).trim();let U=!0,z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,E,y);else{const B=Ph(i,E,"vertex"),W=Ph(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+X+`
`+B+`
`+W)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(D===""||O==="")&&(z=!1);z&&(J.diagnostics={runnable:U,programLog:X,vertexShader:{log:D,prefix:p},fragmentShader:{log:O,prefix:v}})}i.deleteShader(E),i.deleteShader(y),N=new Oa(i,m),S=Ix(i,m)}let N;this.getUniforms=function(){return N===void 0&&T(this),N};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(m,bx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=y,this}let Wx=0;class Xx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qx(t),e.set(t,n)),n}}class qx{constructor(t){this.id=Wx++,this.code=t,this.usedTimes=0}}function Yx(s,t,e,n,i,r,a){const o=new Ka,c=new Xx,l=new Set,u=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,R,J,X,D){const O=X.fog,U=D.geometry,z=S.isMeshStandardMaterial?X.environment:null,B=(S.isMeshStandardMaterial?e:t).get(S.envMap||z),W=B&&B.mapping===Us?B.image.height:null,tt=_[S.type];S.precision!==null&&(g=i.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const st=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ot=st!==void 0?st.length:0;let lt=0;U.morphAttributes.position!==void 0&&(lt=1),U.morphAttributes.normal!==void 0&&(lt=2),U.morphAttributes.color!==void 0&&(lt=3);let G,nt,gt,yt;if(tt){const de=vn[tt];G=de.vertexShader,nt=de.fragmentShader}else G=S.vertexShader,nt=S.fragmentShader,c.update(S),gt=c.getVertexShaderID(S),yt=c.getFragmentShaderID(S);const bt=s.getRenderTarget(),ft=D.isInstancedMesh===!0,Tt=D.isBatchedMesh===!0,k=!!S.map,w=!!S.matcap,H=!!B,$=!!S.aoMap,A=!!S.lightMap,Q=!!S.bumpMap,ht=!!S.normalMap,mt=!!S.displacementMap,Et=!!S.emissiveMap,zt=!!S.metalnessMap,I=!!S.roughnessMap,b=S.anisotropy>0,K=S.clearcoat>0,et=S.iridescence>0,ct=S.sheen>0,at=S.transmission>0,Dt=b&&!!S.anisotropyMap,It=K&&!!S.clearcoatMap,pt=K&&!!S.clearcoatNormalMap,xt=K&&!!S.clearcoatRoughnessMap,Ot=et&&!!S.iridescenceMap,dt=et&&!!S.iridescenceThicknessMap,pe=ct&&!!S.sheenColorMap,Ht=ct&&!!S.sheenRoughnessMap,Rt=!!S.specularMap,wt=!!S.specularColorMap,At=!!S.specularIntensityMap,Jt=at&&!!S.transmissionMap,kt=at&&!!S.thicknessMap,se=!!S.gradientMap,F=!!S.alphaMap,Mt=S.alphaTest>0,Y=!!S.alphaHash,_t=!!S.extensions;let St=qn;S.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(St=s.toneMapping);const jt={isWebGL2:d,shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:G,fragmentShader:nt,defines:S.defines,customVertexShaderID:gt,customFragmentShaderID:yt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Tt,instancing:ft,instancingColor:ft&&D.instanceColor!==null,instancingMorph:ft&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:bt===null?s.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Jn,alphaToCoverage:!!S.alphaToCoverage,map:k,matcap:w,envMap:H,envMapMode:H&&B.mapping,envMapCubeUVHeight:W,aoMap:$,lightMap:A,bumpMap:Q,normalMap:ht,displacementMap:f&&mt,emissiveMap:Et,normalMapObjectSpace:ht&&S.normalMapType===Bd,normalMapTangentSpace:ht&&S.normalMapType===xi,metalnessMap:zt,roughnessMap:I,anisotropy:b,anisotropyMap:Dt,clearcoat:K,clearcoatMap:It,clearcoatNormalMap:pt,clearcoatRoughnessMap:xt,iridescence:et,iridescenceMap:Ot,iridescenceThicknessMap:dt,sheen:ct,sheenColorMap:pe,sheenRoughnessMap:Ht,specularMap:Rt,specularColorMap:wt,specularIntensityMap:At,transmission:at,transmissionMap:Jt,thicknessMap:kt,gradientMap:se,opaque:S.transparent===!1&&S.blending===Wi&&S.alphaToCoverage===!1,alphaMap:F,alphaTest:Mt,alphaHash:Y,combine:S.combine,mapUv:k&&m(S.map.channel),aoMapUv:$&&m(S.aoMap.channel),lightMapUv:A&&m(S.lightMap.channel),bumpMapUv:Q&&m(S.bumpMap.channel),normalMapUv:ht&&m(S.normalMap.channel),displacementMapUv:mt&&m(S.displacementMap.channel),emissiveMapUv:Et&&m(S.emissiveMap.channel),metalnessMapUv:zt&&m(S.metalnessMap.channel),roughnessMapUv:I&&m(S.roughnessMap.channel),anisotropyMapUv:Dt&&m(S.anisotropyMap.channel),clearcoatMapUv:It&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&m(S.sheenRoughnessMap.channel),specularMapUv:Rt&&m(S.specularMap.channel),specularColorMapUv:wt&&m(S.specularColorMap.channel),specularIntensityMapUv:At&&m(S.specularIntensityMap.channel),transmissionMapUv:Jt&&m(S.transmissionMap.channel),thicknessMapUv:kt&&m(S.thicknessMap.channel),alphaMapUv:F&&m(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ht||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(k||F),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:lt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&J.length>0,shadowMapType:s.shadowMap.type,toneMapping:St,useLegacyLights:s._useLegacyLights,decodeVideoTexture:k&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===fe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===Oe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:_t&&S.extensions.derivatives===!0,extensionFragDepth:_t&&S.extensions.fragDepth===!0,extensionDrawBuffers:_t&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_t&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:_t&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return jt.vertexUv1s=l.has(1),jt.vertexUv2s=l.has(2),jt.vertexUv3s=l.has(3),l.clear(),jt}function v(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const J in S.defines)R.push(J),R.push(S.defines[J]);return S.isRawShaderMaterial===!1&&(x(R,S),M(R,S),R.push(s.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function x(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function M(S,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.instancingMorph&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.normalMapObjectSpace&&o.enable(7),R.normalMapTangentSpace&&o.enable(8),R.clearcoat&&o.enable(9),R.iridescence&&o.enable(10),R.alphaTest&&o.enable(11),R.vertexColors&&o.enable(12),R.vertexAlphas&&o.enable(13),R.vertexUv1s&&o.enable(14),R.vertexUv2s&&o.enable(15),R.vertexUv3s&&o.enable(16),R.vertexTangents&&o.enable(17),R.anisotropy&&o.enable(18),R.alphaHash&&o.enable(19),R.batching&&o.enable(20),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),S.push(o.mask)}function L(S){const R=_[S.type];let J;if(R){const X=vn[R];J=jd.clone(X.uniforms)}else J=S.uniforms;return J}function E(S,R){let J;for(let X=0,D=u.length;X<D;X++){const O=u[X];if(O.cacheKey===R){J=O,++J.usedTimes;break}}return J===void 0&&(J=new Hx(s,R,S,r),u.push(J)),J}function y(S){if(--S.usedTimes===0){const R=u.indexOf(S);u[R]=u[u.length-1],u.pop(),S.destroy()}}function T(S){c.remove(S)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:L,acquireProgram:E,releaseProgram:y,releaseShaderCache:T,programs:u,dispose:N}}function $x(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Zx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Nh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Oh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,h,f,g,_,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function o(d,h,f,g,_,m){const p=a(d,h,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,h,f,g,_,m){const p=a(d,h,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,h){e.length>1&&e.sort(d||Zx),n.length>1&&n.sort(h||Nh),i.length>1&&i.sort(h||Nh)}function u(){for(let d=t,h=s.length;d<h;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function Jx(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Oh,s.set(n,[a])):i>=r.length?(a=new Oh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Kx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new ut};break;case"SpotLight":e={position:new P,direction:new P,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function jx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Qx=0;function tv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ev(s,t){const e=new Kx,n=jx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new P);const r=new P,a=new Nt,o=new Nt;function c(u,d){let h=0,f=0,g=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let _=0,m=0,p=0,v=0,x=0,M=0,L=0,E=0,y=0,T=0,N=0;u.sort(tv);const S=d===!0?Math.PI:1;for(let J=0,X=u.length;J<X;J++){const D=u[J],O=D.color,U=D.intensity,z=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*U*S,f+=O.g*U*S,g+=O.b*U*S;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],U);N++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const tt=D.shadow,st=n.get(D);st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,i.directionalShadow[_]=st,i.directionalShadowMap[_]=B,i.directionalShadowMatrix[_]=D.shadow.matrix,M++}i.directional[_]=W,_++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(U*S),W.distance=z,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[p]=W;const tt=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,tt.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[p]=tt.matrix,D.castShadow){const st=n.get(D);st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,i.spotShadow[p]=st,i.spotShadowMap[p]=B,E++}p++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(O).multiplyScalar(U),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[v]=W,v++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*S),W.distance=D.distance,W.decay=D.decay,D.castShadow){const tt=D.shadow,st=n.get(D);st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,st.shadowCameraNear=tt.camera.near,st.shadowCameraFar=tt.camera.far,i.pointShadow[m]=st,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=D.shadow.matrix,L++}i.point[m]=W,m++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(U*S),W.groundColor.copy(D.groundColor).multiplyScalar(U*S),i.hemi[x]=W,x++}}v>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==p||R.rectAreaLength!==v||R.hemiLength!==x||R.numDirectionalShadows!==M||R.numPointShadows!==L||R.numSpotShadows!==E||R.numSpotMaps!==y||R.numLightProbes!==N)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=E+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=N,R.directionalLength=_,R.pointLength=m,R.spotLength=p,R.rectAreaLength=v,R.hemiLength=x,R.numDirectionalShadows=M,R.numPointShadows=L,R.numSpotShadows=E,R.numSpotMaps=y,R.numLightProbes=N,i.version=Qx++)}function l(u,d){let h=0,f=0,g=0,_=0,m=0;const p=d.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const M=u[v];if(M.isDirectionalLight){const L=i.directional[h];L.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),h++}else if(M.isSpotLight){const L=i.spot[g];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const L=i.rectArea[_];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),L.halfWidth.set(M.width*.5,0,0),L.halfHeight.set(0,M.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const L=i.point[f];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const L=i.hemi[m];L.direction.setFromMatrixPosition(M.matrixWorld),L.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Fh(s,t){const e=new ev(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function nv(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new Fh(s,t),e.set(r,[c])):a>=o.length?(c=new Fh(s,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Al extends He{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tl extends He{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
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
}`;function rv(s,t,e){let n=new Os;const i=new rt,r=new rt,a=new ue,o=new Al({depthPacking:Fd}),c=new Tl,l={},u=e.maxTextureSize,d={[Rn]:Oe,[Oe]:Rn,[mn]:mn},h=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:iv,fragmentShader:sv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let p=this.type;this.render=function(E,y,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const N=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Xn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const X=p!==En&&this.type===En,D=p===En&&this.type!==En;for(let O=0,U=E.length;O<U;O++){const z=E[O],B=z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const W=B.getFrameExtents();if(i.multiply(W),r.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/W.x),i.x=r.x*W.x,B.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/W.y),i.y=r.y*W.y,B.mapSize.y=r.y)),B.map===null||X===!0||D===!0){const st=this.type!==En?{minFilter:Ee,magFilter:Ee}:{};B.map!==null&&B.map.dispose(),B.map=new yn(i.x,i.y,st),B.map.texture.name=z.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const tt=B.getViewportCount();for(let st=0;st<tt;st++){const ot=B.getViewport(st);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),J.viewport(a),B.updateMatrices(z,st),n=B.getFrustum(),M(y,T,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===En&&v(B,T),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(N,S,R)};function v(E,y){const T=t.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new yn(i.x,i.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(y,null,T,h,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(y,null,T,f,_,null)}function x(E,y,T,N){let S=null;const R=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=T.isPointLight===!0?c:o,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const J=S.uuid,X=y.uuid;let D=l[J];D===void 0&&(D={},l[J]=D);let O=D[X];O===void 0&&(O=S.clone(),D[X]=O,y.addEventListener("dispose",L)),S=O}if(S.visible=y.visible,S.wireframe=y.wireframe,N===En?S.side=y.shadowSide!==null?y.shadowSide:y.side:S.side=y.shadowSide!==null?y.shadowSide:d[y.side],S.alphaMap=y.alphaMap,S.alphaTest=y.alphaTest,S.map=y.map,S.clipShadows=y.clipShadows,S.clippingPlanes=y.clippingPlanes,S.clipIntersection=y.clipIntersection,S.displacementMap=y.displacementMap,S.displacementScale=y.displacementScale,S.displacementBias=y.displacementBias,S.wireframeLinewidth=y.wireframeLinewidth,S.linewidth=y.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const J=s.properties.get(S);J.light=T}return S}function M(E,y,T,N,S){if(E.visible===!1)return;if(E.layers.test(y.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===En)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const X=t.update(E),D=E.material;if(Array.isArray(D)){const O=X.groups;for(let U=0,z=O.length;U<z;U++){const B=O[U],W=D[B.materialIndex];if(W&&W.visible){const tt=x(E,W,N,S);E.onBeforeShadow(s,E,y,T,X,tt,B),s.renderBufferDirect(T,null,X,tt,E,B),E.onAfterShadow(s,E,y,T,X,tt,B)}}}else if(D.visible){const O=x(E,D,N,S);E.onBeforeShadow(s,E,y,T,X,O,null),s.renderBufferDirect(T,null,X,O,E,null),E.onAfterShadow(s,E,y,T,X,O,null)}}const J=E.children;for(let X=0,D=J.length;X<D;X++)M(J[X],y,T,N,S)}function L(E){E.target.removeEventListener("dispose",L);for(const T in l){const N=l[T],S=E.target.uuid;S in N&&(N[S].dispose(),delete N[S])}}}function av(s,t,e){const n=e.isWebGL2;function i(){let F=!1;const Mt=new ue;let Y=null;const _t=new ue(0,0,0,0);return{setMask:function(St){Y!==St&&!F&&(s.colorMask(St,St,St,St),Y=St)},setLocked:function(St){F=St},setClear:function(St,jt,de,Ce,Je){Je===!0&&(St*=Ce,jt*=Ce,de*=Ce),Mt.set(St,jt,de,Ce),_t.equals(Mt)===!1&&(s.clearColor(St,jt,de,Ce),_t.copy(Mt))},reset:function(){F=!1,Y=null,_t.set(-1,0,0,0)}}}function r(){let F=!1,Mt=null,Y=null,_t=null;return{setTest:function(St){St?ft(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(St){Mt!==St&&!F&&(s.depthMask(St),Mt=St)},setFunc:function(St){if(Y!==St){switch(St){case hd:s.depthFunc(s.NEVER);break;case ud:s.depthFunc(s.ALWAYS);break;case dd:s.depthFunc(s.LESS);break;case ir:s.depthFunc(s.LEQUAL);break;case fd:s.depthFunc(s.EQUAL);break;case pd:s.depthFunc(s.GEQUAL);break;case md:s.depthFunc(s.GREATER);break;case gd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=St}},setLocked:function(St){F=St},setClear:function(St){_t!==St&&(s.clearDepth(St),_t=St)},reset:function(){F=!1,Mt=null,Y=null,_t=null}}}function a(){let F=!1,Mt=null,Y=null,_t=null,St=null,jt=null,de=null,Ce=null,Je=null;return{setTest:function(le){F||(le?ft(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(le){Mt!==le&&!F&&(s.stencilMask(le),Mt=le)},setFunc:function(le,it,Lt){(Y!==le||_t!==it||St!==Lt)&&(s.stencilFunc(le,it,Lt),Y=le,_t=it,St=Lt)},setOp:function(le,it,Lt){(jt!==le||de!==it||Ce!==Lt)&&(s.stencilOp(le,it,Lt),jt=le,de=it,Ce=Lt)},setLocked:function(le){F=le},setClear:function(le){Je!==le&&(s.clearStencil(le),Je=le)},reset:function(){F=!1,Mt=null,Y=null,_t=null,St=null,jt=null,de=null,Ce=null,Je=null}}}const o=new i,c=new r,l=new a,u=new WeakMap,d=new WeakMap;let h={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,M=null,L=null,E=null,y=null,T=null,N=new ut(0,0,0),S=0,R=!1,J=null,X=null,D=null,O=null,U=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const tt=s.getParameter(s.VERSION);tt.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(tt)[1]),B=W>=1):tt.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),B=W>=2);let st=null,ot={};const lt=s.getParameter(s.SCISSOR_BOX),G=s.getParameter(s.VIEWPORT),nt=new ue().fromArray(lt),gt=new ue().fromArray(G);function yt(F,Mt,Y,_t){const St=new Uint8Array(4),jt=s.createTexture();s.bindTexture(F,jt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let de=0;de<Y;de++)n&&(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)?s.texImage3D(Mt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(Mt+de,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return jt}const bt={};bt[s.TEXTURE_2D]=yt(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=yt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(bt[s.TEXTURE_2D_ARRAY]=yt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=yt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ft(s.DEPTH_TEST),c.setFunc(ir),mt(!1),Et(mc),ft(s.CULL_FACE),Q(Xn);function ft(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Tt(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function k(F,Mt){return f[F]!==Mt?(s.bindFramebuffer(F,Mt),f[F]=Mt,n&&(F===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Mt),F===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Mt)),!0):!1}function w(F,Mt){let Y=_,_t=!1;if(F){Y=g.get(Mt),Y===void 0&&(Y=[],g.set(Mt,Y));const St=F.textures;if(Y.length!==St.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let jt=0,de=St.length;jt<de;jt++)Y[jt]=s.COLOR_ATTACHMENT0+jt;Y.length=St.length,_t=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,_t=!0);if(_t)if(e.isWebGL2)s.drawBuffers(Y);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function H(F){return m!==F?(s.useProgram(F),m=F,!0):!1}const $={[hi]:s.FUNC_ADD,[Zu]:s.FUNC_SUBTRACT,[Ju]:s.FUNC_REVERSE_SUBTRACT};if(n)$[xc]=s.MIN,$[vc]=s.MAX;else{const F=t.get("EXT_blend_minmax");F!==null&&($[xc]=F.MIN_EXT,$[vc]=F.MAX_EXT)}const A={[Ku]:s.ZERO,[ju]:s.ONE,[Qu]:s.SRC_COLOR,[Fa]:s.SRC_ALPHA,[rd]:s.SRC_ALPHA_SATURATE,[id]:s.DST_COLOR,[ed]:s.DST_ALPHA,[td]:s.ONE_MINUS_SRC_COLOR,[Ba]:s.ONE_MINUS_SRC_ALPHA,[sd]:s.ONE_MINUS_DST_COLOR,[nd]:s.ONE_MINUS_DST_ALPHA,[ad]:s.CONSTANT_COLOR,[od]:s.ONE_MINUS_CONSTANT_COLOR,[cd]:s.CONSTANT_ALPHA,[ld]:s.ONE_MINUS_CONSTANT_ALPHA};function Q(F,Mt,Y,_t,St,jt,de,Ce,Je,le){if(F===Xn){p===!0&&(Tt(s.BLEND),p=!1);return}if(p===!1&&(ft(s.BLEND),p=!0),F!==$u){if(F!==v||le!==R){if((x!==hi||E!==hi)&&(s.blendEquation(s.FUNC_ADD),x=hi,E=hi),le)switch(F){case Wi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ts:s.blendFunc(s.ONE,s.ONE);break;case gc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _c:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Wi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ts:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _c:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,L=null,y=null,T=null,N.set(0,0,0),S=0,v=F,R=le}return}St=St||Mt,jt=jt||Y,de=de||_t,(Mt!==x||St!==E)&&(s.blendEquationSeparate($[Mt],$[St]),x=Mt,E=St),(Y!==M||_t!==L||jt!==y||de!==T)&&(s.blendFuncSeparate(A[Y],A[_t],A[jt],A[de]),M=Y,L=_t,y=jt,T=de),(Ce.equals(N)===!1||Je!==S)&&(s.blendColor(Ce.r,Ce.g,Ce.b,Je),N.copy(Ce),S=Je),v=F,R=!1}function ht(F,Mt){F.side===mn?Tt(s.CULL_FACE):ft(s.CULL_FACE);let Y=F.side===Oe;Mt&&(Y=!Y),mt(Y),F.blending===Wi&&F.transparent===!1?Q(Xn):Q(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),o.setMask(F.colorWrite);const _t=F.stencilWrite;l.setTest(_t),_t&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),I(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(F){J!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),J=F)}function Et(F){F!==Xu?(ft(s.CULL_FACE),F!==X&&(F===mc?s.cullFace(s.BACK):F===qu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),X=F}function zt(F){F!==D&&(B&&s.lineWidth(F),D=F)}function I(F,Mt,Y){F?(ft(s.POLYGON_OFFSET_FILL),(O!==Mt||U!==Y)&&(s.polygonOffset(Mt,Y),O=Mt,U=Y)):Tt(s.POLYGON_OFFSET_FILL)}function b(F){F?ft(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function K(F){F===void 0&&(F=s.TEXTURE0+z-1),st!==F&&(s.activeTexture(F),st=F)}function et(F,Mt,Y){Y===void 0&&(st===null?Y=s.TEXTURE0+z-1:Y=st);let _t=ot[Y];_t===void 0&&(_t={type:void 0,texture:void 0},ot[Y]=_t),(_t.type!==F||_t.texture!==Mt)&&(st!==Y&&(s.activeTexture(Y),st=Y),s.bindTexture(F,Mt||bt[F]),_t.type=F,_t.texture=Mt)}function ct(){const F=ot[st];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function at(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ht(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(F){nt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),nt.copy(F))}function At(F){gt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),gt.copy(F))}function Jt(F,Mt){let Y=d.get(Mt);Y===void 0&&(Y=new WeakMap,d.set(Mt,Y));let _t=Y.get(F);_t===void 0&&(_t=s.getUniformBlockIndex(Mt,F.name),Y.set(F,_t))}function kt(F,Mt){const _t=d.get(Mt).get(F);u.get(Mt)!==_t&&(s.uniformBlockBinding(Mt,_t,F.__bindingPointIndex),u.set(Mt,_t))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,ot={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,M=null,L=null,E=null,y=null,T=null,N=new ut(0,0,0),S=0,R=!1,J=null,X=null,D=null,O=null,U=null,nt.set(0,0,s.canvas.width,s.canvas.height),gt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ft,disable:Tt,bindFramebuffer:k,drawBuffers:w,useProgram:H,setBlending:Q,setMaterial:ht,setFlipSided:mt,setCullFace:Et,setLineWidth:zt,setPolygonOffset:I,setScissorTest:b,activeTexture:K,bindTexture:et,unbindTexture:ct,compressedTexImage2D:at,compressedTexImage3D:Dt,texImage2D:Ht,texImage3D:Rt,updateUBOMapping:Jt,uniformBlockBinding:kt,texStorage2D:dt,texStorage3D:pe,texSubImage2D:It,texSubImage3D:pt,compressedTexSubImage2D:xt,compressedTexSubImage3D:Ot,scissor:wt,viewport:At,reset:se}}function ov(s,t,e,n,i,r,a){const o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new rt,d=new WeakMap;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function _(I,b){return g?new OffscreenCanvas(I,b):mr("canvas")}function m(I,b,K,et){let ct=1;const at=zt(I);if((at.width>et||at.height>et)&&(ct=et/Math.max(at.width,at.height)),ct<1||b===!0)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){const Dt=b?Ga:Math.floor,It=Dt(ct*at.width),pt=Dt(ct*at.height);h===void 0&&(h=_(It,pt));const xt=K?_(It,pt):h;return xt.width=It,xt.height=pt,xt.getContext("2d").drawImage(I,0,0,It,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+It+"x"+pt+")."),xt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),I;return I}function p(I){const b=zt(I);return $c(b.width)&&$c(b.height)}function v(I){return o?!1:I.wrapS!==Ve||I.wrapT!==Ve||I.minFilter!==Ee&&I.minFilter!==_e}function x(I,b){return I.generateMipmaps&&b&&I.minFilter!==Ee&&I.minFilter!==_e}function M(I){s.generateMipmap(I)}function L(I,b,K,et,ct=!1){if(o===!1)return b;if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let at=b;if(b===s.RED&&(K===s.FLOAT&&(at=s.R32F),K===s.HALF_FLOAT&&(at=s.R16F),K===s.UNSIGNED_BYTE&&(at=s.R8)),b===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(at=s.R8UI),K===s.UNSIGNED_SHORT&&(at=s.R16UI),K===s.UNSIGNED_INT&&(at=s.R32UI),K===s.BYTE&&(at=s.R8I),K===s.SHORT&&(at=s.R16I),K===s.INT&&(at=s.R32I)),b===s.RG&&(K===s.FLOAT&&(at=s.RG32F),K===s.HALF_FLOAT&&(at=s.RG16F),K===s.UNSIGNED_BYTE&&(at=s.RG8)),b===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(at=s.RG8UI),K===s.UNSIGNED_SHORT&&(at=s.RG16UI),K===s.UNSIGNED_INT&&(at=s.RG32UI),K===s.BYTE&&(at=s.RG8I),K===s.SHORT&&(at=s.RG16I),K===s.INT&&(at=s.RG32I)),b===s.RGBA){const Dt=ct?hr:he.getTransfer(et);K===s.FLOAT&&(at=s.RGBA32F),K===s.HALF_FLOAT&&(at=s.RGBA16F),K===s.UNSIGNED_BYTE&&(at=Dt===fe?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function E(I,b,K){return x(I,K)===!0||I.isFramebufferTexture&&I.minFilter!==Ee&&I.minFilter!==_e?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function y(I){return I===Ee||I===za||I===Bi?s.NEAREST:s.LINEAR}function T(I){const b=I.target;b.removeEventListener("dispose",T),S(b),b.isVideoTexture&&d.delete(b)}function N(I){const b=I.target;b.removeEventListener("dispose",N),J(b)}function S(I){const b=n.get(I);if(b.__webglInit===void 0)return;const K=I.source,et=f.get(K);if(et){const ct=et[b.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&R(I),Object.keys(et).length===0&&f.delete(K)}n.remove(I)}function R(I){const b=n.get(I);s.deleteTexture(b.__webglTexture);const K=I.source,et=f.get(K);delete et[b.__cacheKey],a.memory.textures--}function J(I){const b=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(b.__webglFramebuffer[et]))for(let ct=0;ct<b.__webglFramebuffer[et].length;ct++)s.deleteFramebuffer(b.__webglFramebuffer[et][ct]);else s.deleteFramebuffer(b.__webglFramebuffer[et]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[et])}else{if(Array.isArray(b.__webglFramebuffer))for(let et=0;et<b.__webglFramebuffer.length;et++)s.deleteFramebuffer(b.__webglFramebuffer[et]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let et=0;et<b.__webglColorRenderbuffer.length;et++)b.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[et]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=I.textures;for(let et=0,ct=K.length;et<ct;et++){const at=n.get(K[et]);at.__webglTexture&&(s.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(K[et])}n.remove(I)}let X=0;function D(){X=0}function O(){const I=X;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),X+=1,I}function U(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function z(I,b){const K=n.get(I);if(I.isVideoTexture&&mt(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){const et=I.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(K,I,b);return}}e.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+b)}function B(I,b){const K=n.get(I);if(I.version>0&&K.__version!==I.version){gt(K,I,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+b)}function W(I,b){const K=n.get(I);if(I.version>0&&K.__version!==I.version){gt(K,I,b);return}e.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+b)}function tt(I,b){const K=n.get(I);if(I.version>0&&K.__version!==I.version){yt(K,I,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+b)}const st={[Yi]:s.REPEAT,[Ve]:s.CLAMP_TO_EDGE,[ar]:s.MIRRORED_REPEAT},ot={[Ee]:s.NEAREST,[za]:s.NEAREST_MIPMAP_NEAREST,[Bi]:s.NEAREST_MIPMAP_LINEAR,[_e]:s.LINEAR,[Qs]:s.LINEAR_MIPMAP_NEAREST,[An]:s.LINEAR_MIPMAP_LINEAR},lt={[zd]:s.NEVER,[Xd]:s.ALWAYS,[kd]:s.LESS,[xl]:s.LEQUAL,[Gd]:s.EQUAL,[Wd]:s.GEQUAL,[Vd]:s.GREATER,[Hd]:s.NOTEQUAL};function G(I,b,K){if(b.type===on&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===_e||b.magFilter===Qs||b.magFilter===Bi||b.magFilter===An||b.minFilter===_e||b.minFilter===Qs||b.minFilter===Bi||b.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),K?(s.texParameteri(I,s.TEXTURE_WRAP_S,st[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,st[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,st[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ot[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ot[b.minFilter])):(s.texParameteri(I,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(I,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==Ve||b.wrapT!==Ve)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(I,s.TEXTURE_MAG_FILTER,y(b.magFilter)),s.texParameteri(I,s.TEXTURE_MIN_FILTER,y(b.minFilter)),b.minFilter!==Ee&&b.minFilter!==_e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,lt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ee||b.minFilter!==Bi&&b.minFilter!==An||b.type===on&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===Rs&&t.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function nt(I,b){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",T));const et=b.source;let ct=f.get(et);ct===void 0&&(ct={},f.set(et,ct));const at=U(b);if(at!==I.__cacheKey){ct[at]===void 0&&(ct[at]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ct[at].usedTimes++;const Dt=ct[I.__cacheKey];Dt!==void 0&&(ct[I.__cacheKey].usedTimes--,Dt.usedTimes===0&&R(b)),I.__cacheKey=at,I.__webglTexture=ct[at].texture}return K}function gt(I,b,K){let et=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(et=s.TEXTURE_3D);const ct=nt(I,b),at=b.source;e.bindTexture(et,I.__webglTexture,s.TEXTURE0+K);const Dt=n.get(at);if(at.version!==Dt.__version||ct===!0){e.activeTexture(s.TEXTURE0+K);const It=he.getPrimaries(he.workingColorSpace),pt=b.colorSpace===Gn?null:he.getPrimaries(b.colorSpace),xt=b.colorSpace===Gn||It===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Ot=v(b)&&p(b.image)===!1;let dt=m(b.image,Ot,!1,i.maxTextureSize);dt=Et(b,dt);const pe=p(dt)||o,Ht=r.convert(b.format,b.colorSpace);let Rt=r.convert(b.type),wt=L(b.internalFormat,Ht,Rt,b.colorSpace,b.isVideoTexture);G(et,b,pe);let At;const Jt=b.mipmaps,kt=o&&b.isVideoTexture!==!0&&wt!==gl,se=Dt.__version===void 0||ct===!0,F=at.dataReady,Mt=E(b,dt,pe);if(b.isDepthTexture)wt=s.DEPTH_COMPONENT,o?b.type===on?wt=s.DEPTH_COMPONENT32F:b.type===Hn?wt=s.DEPTH_COMPONENT24:b.type===fi?wt=s.DEPTH24_STENCIL8:wt=s.DEPTH_COMPONENT16:b.type===on&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===pi&&wt===s.DEPTH_COMPONENT&&b.type!==Ya&&b.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Hn,Rt=r.convert(b.type)),b.format===$i&&wt===s.DEPTH_COMPONENT&&(wt=s.DEPTH_STENCIL,b.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=fi,Rt=r.convert(b.type))),se&&(kt?e.texStorage2D(s.TEXTURE_2D,1,wt,dt.width,dt.height):e.texImage2D(s.TEXTURE_2D,0,wt,dt.width,dt.height,0,Ht,Rt,null));else if(b.isDataTexture)if(Jt.length>0&&pe){kt&&se&&e.texStorage2D(s.TEXTURE_2D,Mt,wt,Jt[0].width,Jt[0].height);for(let Y=0,_t=Jt.length;Y<_t;Y++)At=Jt[Y],kt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,At.width,At.height,Ht,Rt,At.data):e.texImage2D(s.TEXTURE_2D,Y,wt,At.width,At.height,0,Ht,Rt,At.data);b.generateMipmaps=!1}else kt?(se&&e.texStorage2D(s.TEXTURE_2D,Mt,wt,dt.width,dt.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt.width,dt.height,Ht,Rt,dt.data)):e.texImage2D(s.TEXTURE_2D,0,wt,dt.width,dt.height,0,Ht,Rt,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){kt&&se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,wt,Jt[0].width,Jt[0].height,dt.depth);for(let Y=0,_t=Jt.length;Y<_t;Y++)At=Jt[Y],b.format!==je?Ht!==null?kt?F&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,At.width,At.height,dt.depth,Ht,At.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,wt,At.width,At.height,dt.depth,0,At.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,At.width,At.height,dt.depth,Ht,Rt,At.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,wt,At.width,At.height,dt.depth,0,Ht,Rt,At.data)}else{kt&&se&&e.texStorage2D(s.TEXTURE_2D,Mt,wt,Jt[0].width,Jt[0].height);for(let Y=0,_t=Jt.length;Y<_t;Y++)At=Jt[Y],b.format!==je?Ht!==null?kt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,At.width,At.height,Ht,At.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,wt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,At.width,At.height,Ht,Rt,At.data):e.texImage2D(s.TEXTURE_2D,Y,wt,At.width,At.height,0,Ht,Rt,At.data)}else if(b.isDataArrayTexture)kt?(se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,wt,dt.width,dt.height,dt.depth),F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ht,Rt,dt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,dt.width,dt.height,dt.depth,0,Ht,Rt,dt.data);else if(b.isData3DTexture)kt?(se&&e.texStorage3D(s.TEXTURE_3D,Mt,wt,dt.width,dt.height,dt.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ht,Rt,dt.data)):e.texImage3D(s.TEXTURE_3D,0,wt,dt.width,dt.height,dt.depth,0,Ht,Rt,dt.data);else if(b.isFramebufferTexture){if(se)if(kt)e.texStorage2D(s.TEXTURE_2D,Mt,wt,dt.width,dt.height);else{let Y=dt.width,_t=dt.height;for(let St=0;St<Mt;St++)e.texImage2D(s.TEXTURE_2D,St,wt,Y,_t,0,Ht,Rt,null),Y>>=1,_t>>=1}}else if(Jt.length>0&&pe){if(kt&&se){const Y=zt(Jt[0]);e.texStorage2D(s.TEXTURE_2D,Mt,wt,Y.width,Y.height)}for(let Y=0,_t=Jt.length;Y<_t;Y++)At=Jt[Y],kt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Ht,Rt,At):e.texImage2D(s.TEXTURE_2D,Y,wt,Ht,Rt,At);b.generateMipmaps=!1}else if(kt){if(se){const Y=zt(dt);e.texStorage2D(s.TEXTURE_2D,Mt,wt,Y.width,Y.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ht,Rt,dt)}else e.texImage2D(s.TEXTURE_2D,0,wt,Ht,Rt,dt);x(b,pe)&&M(et),Dt.__version=at.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function yt(I,b,K){if(b.image.length!==6)return;const et=nt(I,b),ct=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+K);const at=n.get(ct);if(ct.version!==at.__version||et===!0){e.activeTexture(s.TEXTURE0+K);const Dt=he.getPrimaries(he.workingColorSpace),It=b.colorSpace===Gn?null:he.getPrimaries(b.colorSpace),pt=b.colorSpace===Gn||Dt===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const xt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ot=b.image[0]&&b.image[0].isDataTexture,dt=[];for(let Y=0;Y<6;Y++)!xt&&!Ot?dt[Y]=m(b.image[Y],!1,!0,i.maxCubemapSize):dt[Y]=Ot?b.image[Y].image:b.image[Y],dt[Y]=Et(b,dt[Y]);const pe=dt[0],Ht=p(pe)||o,Rt=r.convert(b.format,b.colorSpace),wt=r.convert(b.type),At=L(b.internalFormat,Rt,wt,b.colorSpace),Jt=o&&b.isVideoTexture!==!0,kt=at.__version===void 0||et===!0,se=ct.dataReady;let F=E(b,pe,Ht);G(s.TEXTURE_CUBE_MAP,b,Ht);let Mt;if(xt){Jt&&kt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,F,At,pe.width,pe.height);for(let Y=0;Y<6;Y++){Mt=dt[Y].mipmaps;for(let _t=0;_t<Mt.length;_t++){const St=Mt[_t];b.format!==je?Rt!==null?Jt?se&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_t,0,0,St.width,St.height,Rt,St.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_t,At,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_t,0,0,St.width,St.height,Rt,wt,St.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_t,At,St.width,St.height,0,Rt,wt,St.data)}}}else{if(Mt=b.mipmaps,Jt&&kt){Mt.length>0&&F++;const Y=zt(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,F,At,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Ot){Jt?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,dt[Y].width,dt[Y].height,Rt,wt,dt[Y].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,At,dt[Y].width,dt[Y].height,0,Rt,wt,dt[Y].data);for(let _t=0;_t<Mt.length;_t++){const jt=Mt[_t].image[Y].image;Jt?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_t+1,0,0,jt.width,jt.height,Rt,wt,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_t+1,At,jt.width,jt.height,0,Rt,wt,jt.data)}}else{Jt?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Rt,wt,dt[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,At,Rt,wt,dt[Y]);for(let _t=0;_t<Mt.length;_t++){const St=Mt[_t];Jt?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_t+1,0,0,Rt,wt,St.image[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_t+1,At,Rt,wt,St.image[Y])}}}x(b,Ht)&&M(s.TEXTURE_CUBE_MAP),at.__version=ct.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function bt(I,b,K,et,ct,at){const Dt=r.convert(K.format,K.colorSpace),It=r.convert(K.type),pt=L(K.internalFormat,Dt,It,K.colorSpace);if(!n.get(b).__hasExternalTextures){const Ot=Math.max(1,b.width>>at),dt=Math.max(1,b.height>>at);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,at,pt,Ot,dt,b.depth,0,Dt,It,null):e.texImage2D(ct,at,pt,Ot,dt,0,Dt,It,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),ht(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,ct,n.get(K).__webglTexture,0,Q(b)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,ct,n.get(K).__webglTexture,at),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(I,b,K){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer&&!b.stencilBuffer){let et=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(K||ht(b)){const ct=b.depthTexture;ct&&ct.isDepthTexture&&(ct.type===on?et=s.DEPTH_COMPONENT32F:ct.type===Hn&&(et=s.DEPTH_COMPONENT24));const at=Q(b);ht(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,et,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,at,et,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,et,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,I)}else if(b.depthBuffer&&b.stencilBuffer){const et=Q(b);K&&ht(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,b.width,b.height):ht(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,I)}else{const et=b.textures;for(let ct=0;ct<et.length;ct++){const at=et[ct],Dt=r.convert(at.format,at.colorSpace),It=r.convert(at.type),pt=L(at.internalFormat,Dt,It,at.colorSpace),xt=Q(b);K&&ht(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,pt,b.width,b.height):ht(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,pt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,pt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);const et=n.get(b.depthTexture).__webglTexture,ct=Q(b);if(b.depthTexture.format===pi)ht(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(b.depthTexture.format===$i)ht(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function k(I){const b=n.get(I),K=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Tt(b.__webglFramebuffer,I)}else if(K){b.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[et]),b.__webglDepthbuffer[et]=s.createRenderbuffer(),ft(b.__webglDepthbuffer[et],I,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),ft(b.__webglDepthbuffer,I,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function w(I,b,K){const et=n.get(I);b!==void 0&&bt(et.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&k(I)}function H(I){const b=I.texture,K=n.get(I),et=n.get(b);I.addEventListener("dispose",N);const ct=I.textures,at=I.isWebGLCubeRenderTarget===!0,Dt=ct.length>1,It=p(I)||o;if(Dt||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=b.version,a.memory.textures++),at){K.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(o&&b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[pt]=[];for(let xt=0;xt<b.mipmaps.length;xt++)K.__webglFramebuffer[pt][xt]=s.createFramebuffer()}else K.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)K.__webglFramebuffer[pt]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Dt)if(i.drawBuffers)for(let pt=0,xt=ct.length;pt<xt;pt++){const Ot=n.get(ct[pt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&I.samples>0&&ht(I)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let pt=0;pt<ct.length;pt++){const xt=ct[pt];K.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[pt]);const Ot=r.convert(xt.format,xt.colorSpace),dt=r.convert(xt.type),pe=L(xt.internalFormat,Ot,dt,xt.colorSpace,I.isXRRenderTarget===!0),Ht=Q(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,pe,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,K.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),ft(K.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),G(s.TEXTURE_CUBE_MAP,b,It);for(let pt=0;pt<6;pt++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)bt(K.__webglFramebuffer[pt][xt],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,xt);else bt(K.__webglFramebuffer[pt],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);x(b,It)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let pt=0,xt=ct.length;pt<xt;pt++){const Ot=ct[pt],dt=n.get(Ot);e.bindTexture(s.TEXTURE_2D,dt.__webglTexture),G(s.TEXTURE_2D,Ot,It),bt(K.__webglFramebuffer,I,Ot,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),x(Ot,It)&&M(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(o?pt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,et.__webglTexture),G(pt,b,It),o&&b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)bt(K.__webglFramebuffer[xt],I,b,s.COLOR_ATTACHMENT0,pt,xt);else bt(K.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,pt,0);x(b,It)&&M(pt),e.unbindTexture()}I.depthBuffer&&k(I)}function $(I){const b=p(I)||o,K=I.textures;for(let et=0,ct=K.length;et<ct;et++){const at=K[et];if(x(at,b)){const Dt=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,It=n.get(at).__webglTexture;e.bindTexture(Dt,It),M(Dt),e.unbindTexture()}}}function A(I){if(o&&I.samples>0&&ht(I)===!1){const b=I.textures,K=I.width,et=I.height;let ct=s.COLOR_BUFFER_BIT;const at=[],Dt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=n.get(I),pt=b.length>1;if(pt)for(let xt=0;xt<b.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let xt=0;xt<b.length;xt++){at.push(s.COLOR_ATTACHMENT0+xt),I.depthBuffer&&at.push(Dt);const Ot=It.__ignoreDepthValues!==void 0?It.__ignoreDepthValues:!1;if(Ot===!1&&(I.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),pt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,It.__webglColorRenderbuffer[xt]),Ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Dt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Dt])),pt){const dt=n.get(b[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,K,et,0,0,K,et,ct,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let xt=0;xt<b.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,It.__webglColorRenderbuffer[xt]);const Ot=n.get(b[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}}function Q(I){return Math.min(i.maxSamples,I.samples)}function ht(I){const b=n.get(I);return o&&I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function mt(I){const b=a.render.frame;d.get(I)!==b&&(d.set(I,b),I.update())}function Et(I,b){const K=I.colorSpace,et=I.format,ct=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===ka||K!==Jn&&K!==Gn&&(he.getTransfer(K)===fe?o===!1?t.has("EXT_sRGB")===!0&&et===je?(I.format=ka,I.minFilter=_e,I.generateMipmaps=!1):b=yl.sRGBToLinear(b):(et!==je||ct!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),b}function zt(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=tt,this.rebindTextures=w,this.setupRenderTarget=H,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=ht}function cf(s,t,e){const n=e.isWebGL2;function i(r,a=Gn){let o;const c=he.getTransfer(a);if(r===Yn)return s.UNSIGNED_BYTE;if(r===hl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ul)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ad)return s.BYTE;if(r===Td)return s.SHORT;if(r===Ya)return s.UNSIGNED_SHORT;if(r===ll)return s.INT;if(r===Hn)return s.UNSIGNED_INT;if(r===on)return s.FLOAT;if(r===Rs)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Cd)return s.ALPHA;if(r===je)return s.RGBA;if(r===Rd)return s.LUMINANCE;if(r===Pd)return s.LUMINANCE_ALPHA;if(r===pi)return s.DEPTH_COMPONENT;if(r===$i)return s.DEPTH_STENCIL;if(r===ka)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===dl)return s.RED;if(r===fl)return s.RED_INTEGER;if(r===Ld)return s.RG;if(r===pl)return s.RG_INTEGER;if(r===ml)return s.RGBA_INTEGER;if(r===Pa||r===La||r===Ia||r===Da)if(c===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Pa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===La)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Pa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===La)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ia)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Da)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mc||r===Sc||r===bc||r===wc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Mc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gl)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ec||r===Ac)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ec)return c===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ac)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Tc||r===Cc||r===Rc||r===Pc||r===Lc||r===Ic||r===Dc||r===Uc||r===Nc||r===Oc||r===Fc||r===Bc||r===zc||r===kc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Tc)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cc)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rc)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pc)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lc)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ic)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dc)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Uc)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nc)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oc)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fc)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bc)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zc)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kc)return c===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ua||r===Gc||r===Vc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ua)return c===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Id||r===Hc||r===Wc||r===Xc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ua)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Hc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fi?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class lf extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class De extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cv={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cv)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Me,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new un({extensions:{fragDepth:!0},vertexShader:lv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qt(new pn(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class dv extends Kn{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=new uv,m=e.getContextAttributes();let p=null,v=null;const x=[],M=[],L=new rt;let E=null;const y=new Ue;y.layers.enable(1),y.viewport=new ue;const T=new Ue;T.layers.enable(2),T.viewport=new ue;const N=[y,T],S=new lf;S.layers.enable(1),S.layers.enable(2);let R=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let nt=x[G];return nt===void 0&&(nt=new Ko,x[G]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(G){let nt=x[G];return nt===void 0&&(nt=new Ko,x[G]=nt),nt.getGripSpace()},this.getHand=function(G){let nt=x[G];return nt===void 0&&(nt=new Ko,x[G]=nt),nt.getHandSpace()};function X(G){const nt=M.indexOf(G.inputSource);if(nt===-1)return;const gt=x[nt];gt!==void 0&&(gt.update(G.inputSource,G.frame,l||a),gt.dispatchEvent({type:G.type,data:G.inputSource}))}function D(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",O);for(let G=0;G<x.length;G++){const nt=M[G];nt!==null&&(M[G]=null,x[G].disconnect(nt))}R=null,J=null,_.reset(),t.setRenderTarget(p),f=null,h=null,d=null,i=null,v=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",D),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const nt={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new yn(f.framebufferWidth,f.framebufferHeight,{format:je,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,gt=null,yt=null;m.depth&&(yt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?$i:pi,gt=m.stencil?fi:Hn);const bt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=new XRWebGLBinding(i,e),h=d.createProjectionLayer(bt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new yn(h.textureWidth,h.textureHeight,{format:je,type:Yn,depthTexture:new El(h.textureWidth,h.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const ft=t.properties.get(v);ft.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(G){for(let nt=0;nt<G.removed.length;nt++){const gt=G.removed[nt],yt=M.indexOf(gt);yt>=0&&(M[yt]=null,x[yt].disconnect(gt))}for(let nt=0;nt<G.added.length;nt++){const gt=G.added[nt];let yt=M.indexOf(gt);if(yt===-1){for(let ft=0;ft<x.length;ft++)if(ft>=M.length){M.push(gt),yt=ft;break}else if(M[ft]===null){M[ft]=gt,yt=ft;break}if(yt===-1)break}const bt=x[yt];bt&&bt.connect(gt)}}const U=new P,z=new P;function B(G,nt,gt){U.setFromMatrixPosition(nt.matrixWorld),z.setFromMatrixPosition(gt.matrixWorld);const yt=U.distanceTo(z),bt=nt.projectionMatrix.elements,ft=gt.projectionMatrix.elements,Tt=bt[14]/(bt[10]-1),k=bt[14]/(bt[10]+1),w=(bt[9]+1)/bt[5],H=(bt[9]-1)/bt[5],$=(bt[8]-1)/bt[0],A=(ft[8]+1)/ft[0],Q=Tt*$,ht=Tt*A,mt=yt/(-$+A),Et=mt*-$;nt.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Et),G.translateZ(mt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const zt=Tt+mt,I=k+mt,b=Q-Et,K=ht+(yt-Et),et=w*k/I*zt,ct=H*k/I*zt;G.projectionMatrix.makePerspective(b,K,et,ct,zt,I),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function W(G,nt){nt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(nt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),S.near=T.near=y.near=G.near,S.far=T.far=y.far=G.far,(R!==S.near||J!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,J=S.far,y.near=R,y.far=J,T.near=R,T.far=J,y.updateProjectionMatrix(),T.updateProjectionMatrix(),G.updateProjectionMatrix());const nt=G.parent,gt=S.cameras;W(S,nt);for(let yt=0;yt<gt.length;yt++)W(gt[yt],nt);gt.length===2?B(S,y,T):S.projectionMatrix.copy(y.projectionMatrix),tt(G,S,nt)};function tt(G,nt,gt){gt===null?G.matrix.copy(nt.matrixWorld):(G.matrix.copy(gt.matrixWorld),G.matrix.invert(),G.matrix.multiply(nt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(nt.projectionMatrix),G.projectionMatrixInverse.copy(nt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ps*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(G){c=G,h!==null&&(h.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null};let st=null;function ot(G,nt){if(u=nt.getViewerPose(l||a),g=nt,u!==null){const gt=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let yt=!1;gt.length!==S.cameras.length&&(S.cameras.length=0,yt=!0);for(let ft=0;ft<gt.length;ft++){const Tt=gt[ft];let k=null;if(f!==null)k=f.getViewport(Tt);else{const H=d.getViewSubImage(h,Tt);k=H.viewport,ft===0&&(t.setRenderTargetTextures(v,H.colorTexture,h.ignoreDepthValues?void 0:H.depthStencilTexture),t.setRenderTarget(v))}let w=N[ft];w===void 0&&(w=new Ue,w.layers.enable(ft),w.viewport=new ue,N[ft]=w),w.matrix.fromArray(Tt.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Tt.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(k.x,k.y,k.width,k.height),ft===0&&(S.matrix.copy(w.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),yt===!0&&S.cameras.push(w)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const ft=d.getDepthInformation(gt[0]);ft&&ft.isValid&&ft.texture&&_.init(t,ft,i.renderState)}}for(let gt=0;gt<x.length;gt++){const yt=M[gt],bt=x[gt];yt!==null&&bt!==void 0&&bt.update(yt,nt,l||a)}_.render(t,S),st&&st(G,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const lt=new ef;lt.setAnimationLoop(ot),this.setAnimationLoop=function(G){st=G},this.dispose=function(){}}}const Ci=new hn,fv=new Nt;function pv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Oe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Oe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),x=v.envMap,M=v.envMapRotation;if(x&&(m.envMap.value=x,Ci.copy(M),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(fv.makeRotationFromEuler(Ci)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const L=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*L,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mv(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function l(v,x){let M=i[v.id];M===void 0&&(g(v),M=u(v),i[v.id]=M,v.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(v,L);const E=t.render.frame;r[v.id]!==E&&(h(v),r[v.id]=E)}function u(v){const x=d();v.__bindingPointIndex=x;const M=s.createBuffer(),L=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,L,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=i[v.id],M=v.uniforms,L=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,y=M.length;E<y;E++){const T=Array.isArray(M[E])?M[E]:[M[E]];for(let N=0,S=T.length;N<S;N++){const R=T[N];if(f(R,E,N,L)===!0){const J=R.__offset,X=Array.isArray(R.value)?R.value:[R.value];let D=0;for(let O=0;O<X.length;O++){const U=X[O],z=_(U);typeof U=="number"||typeof U=="boolean"?(R.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,J+D,R.__data)):U.isMatrix3?(R.__data[0]=U.elements[0],R.__data[1]=U.elements[1],R.__data[2]=U.elements[2],R.__data[3]=0,R.__data[4]=U.elements[3],R.__data[5]=U.elements[4],R.__data[6]=U.elements[5],R.__data[7]=0,R.__data[8]=U.elements[6],R.__data[9]=U.elements[7],R.__data[10]=U.elements[8],R.__data[11]=0):(U.toArray(R.__data,D),D+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,M,L){const E=v.value,y=x+"_"+M;if(L[y]===void 0)return typeof E=="number"||typeof E=="boolean"?L[y]=E:L[y]=E.clone(),!0;{const T=L[y];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return L[y]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function g(v){const x=v.uniforms;let M=0;const L=16;for(let y=0,T=x.length;y<T;y++){const N=Array.isArray(x[y])?x[y]:[x[y]];for(let S=0,R=N.length;S<R;S++){const J=N[S],X=Array.isArray(J.value)?J.value:[J.value];for(let D=0,O=X.length;D<O;D++){const U=X[D],z=_(U),B=M%L;B!==0&&L-B<z.boundary&&(M+=L-B),J.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=M,M+=z.storage}}}const E=M%L;return E>0&&(M+=L-E),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class hf{constructor(t={}){const{canvas:e=Yd(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=qn,this.toneMappingExposure=1;const x=this;let M=!1,L=0,E=0,y=null,T=-1,N=null;const S=new ue,R=new ue;let J=null;const X=new ut(0);let D=0,O=e.width,U=e.height,z=1,B=null,W=null;const tt=new ue(0,0,O,U),st=new ue(0,0,O,U);let ot=!1;const lt=new Os;let G=!1,nt=!1,gt=null;const yt=new Nt,bt=new rt,ft=new P,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function k(){return y===null?z:1}let w=n;function H(C,V){for(let Z=0;Z<C.length;Z++){const j=C[Z],q=e.getContext(j,V);if(q!==null)return q}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xa}`),e.addEventListener("webglcontextlost",se,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),w===null){const V=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&V.shift(),w=H(V,C),w===null)throw H(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&w instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),w.getShaderPrecisionFormat===void 0&&(w.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let $,A,Q,ht,mt,Et,zt,I,b,K,et,ct,at,Dt,It,pt,xt,Ot,dt,pe,Ht,Rt,wt,At;function Jt(){$=new E_(w),A=new v_(w,$,t),$.init(A),Rt=new cf(w,$,A),Q=new av(w,$,A),ht=new C_(w),mt=new $x,Et=new ov(w,$,Q,mt,A,Rt,ht),zt=new M_(x),I=new w_(x),b=new Um(w,A),wt=new __(w,$,b,A),K=new A_(w,b,ht,wt),et=new I_(w,K,b,ht),dt=new L_(w,A,Et),pt=new y_(mt),ct=new Yx(x,zt,I,$,A,wt,pt),at=new pv(x,mt),Dt=new Jx,It=new nv($,A),Ot=new g_(x,zt,I,Q,et,h,c),xt=new rv(x,et,A),At=new mv(w,ht,A,Q),pe=new x_(w,$,ht,A),Ht=new T_(w,$,ht,A),ht.programs=ct.programs,x.capabilities=A,x.extensions=$,x.properties=mt,x.renderLists=Dt,x.shadowMap=xt,x.state=Q,x.info=ht}Jt();const kt=new dv(x,w);this.xr=kt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const C=$.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=$.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(O,U,!1))},this.getSize=function(C){return C.set(O,U)},this.setSize=function(C,V,Z=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,U=V,e.width=Math.floor(C*z),e.height=Math.floor(V*z),Z===!0&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(O*z,U*z).floor()},this.setDrawingBufferSize=function(C,V,Z){O=C,U=V,z=Z,e.width=Math.floor(C*Z),e.height=Math.floor(V*Z),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,V,Z,j){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,V,Z,j),Q.viewport(S.copy(tt).multiplyScalar(z).round())},this.getScissor=function(C){return C.copy(st)},this.setScissor=function(C,V,Z,j){C.isVector4?st.set(C.x,C.y,C.z,C.w):st.set(C,V,Z,j),Q.scissor(R.copy(st).multiplyScalar(z).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(C){Q.setScissorTest(ot=C)},this.setOpaqueSort=function(C){B=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(C=!0,V=!0,Z=!0){let j=0;if(C){let q=!1;if(y!==null){const Ct=y.texture.format;q=Ct===ml||Ct===pl||Ct===fl}if(q){const Ct=y.texture.type,Ut=Ct===Yn||Ct===Hn||Ct===Ya||Ct===fi||Ct===hl||Ct===ul,Bt=Ot.getClearColor(),Gt=Ot.getClearAlpha(),Kt=Bt.r,Xt=Bt.g,Yt=Bt.b;Ut?(f[0]=Kt,f[1]=Xt,f[2]=Yt,f[3]=Gt,w.clearBufferuiv(w.COLOR,0,f)):(g[0]=Kt,g[1]=Xt,g[2]=Yt,g[3]=Gt,w.clearBufferiv(w.COLOR,0,g))}else j|=w.COLOR_BUFFER_BIT}V&&(j|=w.DEPTH_BUFFER_BIT),Z&&(j|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",se,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Dt.dispose(),It.dispose(),mt.dispose(),zt.dispose(),I.dispose(),et.dispose(),wt.dispose(),At.dispose(),ct.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Je),kt.removeEventListener("sessionend",le),gt&&(gt.dispose(),gt=null),it.stop()};function se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=ht.autoReset,V=xt.enabled,Z=xt.autoUpdate,j=xt.needsUpdate,q=xt.type;Jt(),ht.autoReset=C,xt.enabled=V,xt.autoUpdate=Z,xt.needsUpdate=j,xt.type=q}function Mt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Y(C){const V=C.target;V.removeEventListener("dispose",Y),_t(V)}function _t(C){St(C),mt.remove(C)}function St(C){const V=mt.get(C).programs;V!==void 0&&(V.forEach(function(Z){ct.releaseProgram(Z)}),C.isShaderMaterial&&ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,Z,j,q,Ct){V===null&&(V=Tt);const Ut=q.isMesh&&q.matrixWorld.determinant()<0,Bt=op(C,V,Z,j,q);Q.setMaterial(j,Ut);let Gt=Z.index,Kt=1;if(j.wireframe===!0){if(Gt=K.getWireframeAttribute(Z),Gt===void 0)return;Kt=2}const Xt=Z.drawRange,Yt=Z.attributes.position;let Se=Xt.start*Kt,nn=(Xt.start+Xt.count)*Kt;Ct!==null&&(Se=Math.max(Se,Ct.start*Kt),nn=Math.min(nn,(Ct.start+Ct.count)*Kt)),Gt!==null?(Se=Math.max(Se,0),nn=Math.min(nn,Gt.count)):Yt!=null&&(Se=Math.max(Se,0),nn=Math.min(nn,Yt.count));const Le=nn-Se;if(Le<0||Le===1/0)return;wt.setup(q,j,Bt,Z,Gt);let In,ge=pe;if(Gt!==null&&(In=b.get(Gt),ge=Ht,ge.setIndex(In)),q.isMesh)j.wireframe===!0?(Q.setLineWidth(j.wireframeLinewidth*k()),ge.setMode(w.LINES)):ge.setMode(w.TRIANGLES);else if(q.isLine){let Zt=j.linewidth;Zt===void 0&&(Zt=1),Q.setLineWidth(Zt*k()),q.isLineSegments?ge.setMode(w.LINES):q.isLineLoop?ge.setMode(w.LINE_LOOP):ge.setMode(w.LINE_STRIP)}else q.isPoints?ge.setMode(w.POINTS):q.isSprite&&ge.setMode(w.TRIANGLES);if(q.isBatchedMesh)ge.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)ge.renderInstances(Se,Le,q.count);else if(Z.isInstancedBufferGeometry){const Zt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,bo=Math.min(Z.instanceCount,Zt);ge.renderInstances(Se,Le,bo)}else ge.render(Se,Le)};function jt(C,V,Z){C.transparent===!0&&C.side===mn&&C.forceSinglePass===!1?(C.side=Oe,C.needsUpdate=!0,ae(C,V,Z),C.side=Rn,C.needsUpdate=!0,ae(C,V,Z),C.side=mn):ae(C,V,Z)}this.compile=function(C,V,Z=null){Z===null&&(Z=C),m=It.get(Z),m.init(),v.push(m),Z.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),C!==Z&&C.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(x._useLegacyLights);const j=new Set;return C.traverse(function(q){const Ct=q.material;if(Ct)if(Array.isArray(Ct))for(let Ut=0;Ut<Ct.length;Ut++){const Bt=Ct[Ut];jt(Bt,Z,q),j.add(Bt)}else jt(Ct,Z,q),j.add(Ct)}),v.pop(),m=null,j},this.compileAsync=function(C,V,Z=null){const j=this.compile(C,V,Z);return new Promise(q=>{function Ct(){if(j.forEach(function(Ut){mt.get(Ut).currentProgram.isReady()&&j.delete(Ut)}),j.size===0){q(C);return}setTimeout(Ct,10)}$.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let de=null;function Ce(C){de&&de(C)}function Je(){it.stop()}function le(){it.start()}const it=new ef;it.setAnimationLoop(Ce),typeof self!="undefined"&&it.setContext(self),this.setAnimationLoop=function(C){de=C,kt.setAnimationLoop(C),C===null?it.stop():it.start()},kt.addEventListener("sessionstart",Je),kt.addEventListener("sessionend",le),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(V),V=kt.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,V,y),m=It.get(C,v.length),m.init(),v.push(m),yt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),lt.setFromProjectionMatrix(yt),nt=this.localClippingEnabled,G=pt.init(this.clippingPlanes,nt),_=Dt.get(C,p.length),_.init(),p.push(_),Lt(C,V,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(B,W),this.info.render.frame++,G===!0&&pt.beginShadows();const Z=m.state.shadowsArray;if(xt.render(Z,C,V),G===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1)&&Ot.render(_,C),m.setupLights(x._useLegacyLights),V.isArrayCamera){const j=V.cameras;for(let q=0,Ct=j.length;q<Ct;q++){const Ut=j[q];ne(_,C,Ut,Ut.viewport)}}else ne(_,C,V);y!==null&&(Et.updateMultisampleRenderTarget(y),Et.updateRenderTargetMipmap(y)),C.isScene===!0&&C.onAfterRender(x,C,V),wt.resetDefaultState(),T=-1,N=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Lt(C,V,Z,j){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||lt.intersectsSprite(C)){j&&ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(yt);const Ut=et.update(C),Bt=C.material;Bt.visible&&_.push(C,Ut,Bt,Z,ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||lt.intersectsObject(C))){const Ut=et.update(C),Bt=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ft.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ft.copy(Ut.boundingSphere.center)),ft.applyMatrix4(C.matrixWorld).applyMatrix4(yt)),Array.isArray(Bt)){const Gt=Ut.groups;for(let Kt=0,Xt=Gt.length;Kt<Xt;Kt++){const Yt=Gt[Kt],Se=Bt[Yt.materialIndex];Se&&Se.visible&&_.push(C,Ut,Se,Z,ft.z,Yt)}}else Bt.visible&&_.push(C,Ut,Bt,Z,ft.z,null)}}const Ct=C.children;for(let Ut=0,Bt=Ct.length;Ut<Bt;Ut++)Lt(Ct[Ut],V,Z,j)}function ne(C,V,Z,j){const q=C.opaque,Ct=C.transmissive,Ut=C.transparent;m.setupLightsView(Z),G===!0&&pt.setGlobalState(x.clippingPlanes,Z),Ct.length>0&&te(q,Ct,V,Z),j&&Q.viewport(S.copy(j)),q.length>0&&ee(q,V,Z),Ct.length>0&&ee(Ct,V,Z),Ut.length>0&&ee(Ut,V,Z),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function te(C,V,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Ct=A.isWebGL2;gt===null&&(gt=new yn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?Rs:Yn,minFilter:An,samples:Ct?4:0})),x.getDrawingBufferSize(bt),Ct?gt.setSize(bt.x,bt.y):gt.setSize(Ga(bt.x),Ga(bt.y));const Ut=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor(X),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Bt=x.toneMapping;x.toneMapping=qn,ee(C,Z,j),Et.updateMultisampleRenderTarget(gt),Et.updateRenderTargetMipmap(gt);let Gt=!1;for(let Kt=0,Xt=V.length;Kt<Xt;Kt++){const Yt=V[Kt],Se=Yt.object,nn=Yt.geometry,Le=Yt.material,In=Yt.group;if(Le.side===mn&&Se.layers.test(j.layers)){const ge=Le.side;Le.side=Oe,Le.needsUpdate=!0,Ft(Se,Z,j,nn,Le,In),Le.side=ge,Le.needsUpdate=!0,Gt=!0}}Gt===!0&&(Et.updateMultisampleRenderTarget(gt),Et.updateRenderTargetMipmap(gt)),x.setRenderTarget(Ut),x.setClearColor(X,D),x.toneMapping=Bt}function ee(C,V,Z){const j=V.isScene===!0?V.overrideMaterial:null;for(let q=0,Ct=C.length;q<Ct;q++){const Ut=C[q],Bt=Ut.object,Gt=Ut.geometry,Kt=j===null?Ut.material:j,Xt=Ut.group;Bt.layers.test(Z.layers)&&Ft(Bt,V,Z,Gt,Kt,Xt)}}function Ft(C,V,Z,j,q,Ct){C.onBeforeRender(x,V,Z,j,q,Ct),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(x,V,Z,j,C,Ct),q.transparent===!0&&q.side===mn&&q.forceSinglePass===!1?(q.side=Oe,q.needsUpdate=!0,x.renderBufferDirect(Z,V,j,q,C,Ct),q.side=Rn,q.needsUpdate=!0,x.renderBufferDirect(Z,V,j,q,C,Ct),q.side=mn):x.renderBufferDirect(Z,V,j,q,C,Ct),C.onAfterRender(x,V,Z,j,q,Ct)}function ae(C,V,Z){V.isScene!==!0&&(V=Tt);const j=mt.get(C),q=m.state.lights,Ct=m.state.shadowsArray,Ut=q.state.version,Bt=ct.getParameters(C,q.state,Ct,V,Z),Gt=ct.getProgramCacheKey(Bt);let Kt=j.programs;j.environment=C.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(C.isMeshStandardMaterial?I:zt).get(C.envMap||j.environment),j.envMapRotation=j.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Kt===void 0&&(C.addEventListener("dispose",Y),Kt=new Map,j.programs=Kt);let Xt=Kt.get(Gt);if(Xt!==void 0){if(j.currentProgram===Xt&&j.lightsStateVersion===Ut)return Ir(C,Bt),Xt}else Bt.uniforms=ct.getUniforms(C),C.onBuild(Z,Bt,x),C.onBeforeCompile(Bt,x),Xt=ct.acquireProgram(Bt,Gt),Kt.set(Gt,Xt),j.uniforms=Bt.uniforms;const Yt=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Yt.clippingPlanes=pt.uniform),Ir(C,Bt),j.needsLights=lp(C),j.lightsStateVersion=Ut,j.needsLights&&(Yt.ambientLightColor.value=q.state.ambient,Yt.lightProbe.value=q.state.probe,Yt.directionalLights.value=q.state.directional,Yt.directionalLightShadows.value=q.state.directionalShadow,Yt.spotLights.value=q.state.spot,Yt.spotLightShadows.value=q.state.spotShadow,Yt.rectAreaLights.value=q.state.rectArea,Yt.ltc_1.value=q.state.rectAreaLTC1,Yt.ltc_2.value=q.state.rectAreaLTC2,Yt.pointLights.value=q.state.point,Yt.pointLightShadows.value=q.state.pointShadow,Yt.hemisphereLights.value=q.state.hemi,Yt.directionalShadowMap.value=q.state.directionalShadowMap,Yt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Yt.spotShadowMap.value=q.state.spotShadowMap,Yt.spotLightMatrix.value=q.state.spotLightMatrix,Yt.spotLightMap.value=q.state.spotLightMap,Yt.pointShadowMap.value=q.state.pointShadowMap,Yt.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=Xt,j.uniformsList=null,Xt}function en(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Oa.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Ir(C,V){const Z=mt.get(C);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function op(C,V,Z,j,q){V.isScene!==!0&&(V=Tt),Et.resetTextureUnits();const Ct=V.fog,Ut=j.isMeshStandardMaterial?V.environment:null,Bt=y===null?x.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Jn,Gt=(j.isMeshStandardMaterial?I:zt).get(j.envMap||Ut),Kt=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Xt=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Yt=!!Z.morphAttributes.position,Se=!!Z.morphAttributes.normal,nn=!!Z.morphAttributes.color;let Le=qn;j.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Le=x.toneMapping);const In=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ge=In!==void 0?In.length:0,Zt=mt.get(j),bo=m.state.lights;if(G===!0&&(nt===!0||C!==N)){const dn=C===N&&j.id===T;pt.setState(j,C,dn)}let me=!1;j.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==bo.state.version||Zt.outputColorSpace!==Bt||q.isBatchedMesh&&Zt.batching===!1||!q.isBatchedMesh&&Zt.batching===!0||q.isInstancedMesh&&Zt.instancing===!1||!q.isInstancedMesh&&Zt.instancing===!0||q.isSkinnedMesh&&Zt.skinning===!1||!q.isSkinnedMesh&&Zt.skinning===!0||q.isInstancedMesh&&Zt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Zt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Zt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Zt.instancingMorph===!1&&q.morphTexture!==null||Zt.envMap!==Gt||j.fog===!0&&Zt.fog!==Ct||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==pt.numPlanes||Zt.numIntersection!==pt.numIntersection)||Zt.vertexAlphas!==Kt||Zt.vertexTangents!==Xt||Zt.morphTargets!==Yt||Zt.morphNormals!==Se||Zt.morphColors!==nn||Zt.toneMapping!==Le||A.isWebGL2===!0&&Zt.morphTargetsCount!==ge)&&(me=!0):(me=!0,Zt.__version=j.version);let Mi=Zt.currentProgram;me===!0&&(Mi=ae(j,V,q));let Jl=!1,zs=!1,wo=!1;const Be=Mi.getUniforms(),Si=Zt.uniforms;if(Q.useProgram(Mi.program)&&(Jl=!0,zs=!0,wo=!0),j.id!==T&&(T=j.id,zs=!0),Jl||N!==C){Be.setValue(w,"projectionMatrix",C.projectionMatrix),Be.setValue(w,"viewMatrix",C.matrixWorldInverse);const dn=Be.map.cameraPosition;dn!==void 0&&dn.setValue(w,ft.setFromMatrixPosition(C.matrixWorld)),A.logarithmicDepthBuffer&&Be.setValue(w,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Be.setValue(w,"isOrthographic",C.isOrthographicCamera===!0),N!==C&&(N=C,zs=!0,wo=!0)}if(q.isSkinnedMesh){Be.setOptional(w,q,"bindMatrix"),Be.setOptional(w,q,"bindMatrixInverse");const dn=q.skeleton;dn&&(A.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Be.setValue(w,"boneTexture",dn.boneTexture,Et)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(Be.setOptional(w,q,"batchingTexture"),Be.setValue(w,"batchingTexture",q._matricesTexture,Et));const Eo=Z.morphAttributes;if((Eo.position!==void 0||Eo.normal!==void 0||Eo.color!==void 0&&A.isWebGL2===!0)&&dt.update(q,Z,Mi),(zs||Zt.receiveShadow!==q.receiveShadow)&&(Zt.receiveShadow=q.receiveShadow,Be.setValue(w,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Si.envMap.value=Gt,Si.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),zs&&(Be.setValue(w,"toneMappingExposure",x.toneMappingExposure),Zt.needsLights&&cp(Si,wo),Ct&&j.fog===!0&&at.refreshFogUniforms(Si,Ct),at.refreshMaterialUniforms(Si,j,z,U,gt),Oa.upload(w,en(Zt),Si,Et)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Oa.upload(w,en(Zt),Si,Et),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Be.setValue(w,"center",q.center),Be.setValue(w,"modelViewMatrix",q.modelViewMatrix),Be.setValue(w,"normalMatrix",q.normalMatrix),Be.setValue(w,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const dn=j.uniformsGroups;for(let Ao=0,hp=dn.length;Ao<hp;Ao++)if(A.isWebGL2){const Kl=dn[Ao];At.update(Kl,Mi),At.bind(Kl,Mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mi}function cp(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function lp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(C,V,Z){mt.get(C.texture).__webglTexture=V,mt.get(C.depthTexture).__webglTexture=Z;const j=mt.get(C);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Z===void 0,j.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){const Z=mt.get(C);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,Z=0){y=C,L=V,E=Z;let j=!0,q=null,Ct=!1,Ut=!1;if(C){const Gt=mt.get(C);Gt.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(w.FRAMEBUFFER,null),j=!1):Gt.__webglFramebuffer===void 0?Et.setupRenderTarget(C):Gt.__hasExternalTextures&&Et.rebindTextures(C,mt.get(C.texture).__webglTexture,mt.get(C.depthTexture).__webglTexture);const Kt=C.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ut=!0);const Xt=mt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[V])?q=Xt[V][Z]:q=Xt[V],Ct=!0):A.isWebGL2&&C.samples>0&&Et.useMultisampledRTT(C)===!1?q=mt.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?q=Xt[Z]:q=Xt,S.copy(C.viewport),R.copy(C.scissor),J=C.scissorTest}else S.copy(tt).multiplyScalar(z).floor(),R.copy(st).multiplyScalar(z).floor(),J=ot;if(Q.bindFramebuffer(w.FRAMEBUFFER,q)&&A.drawBuffers&&j&&Q.drawBuffers(C,q),Q.viewport(S),Q.scissor(R),Q.setScissorTest(J),Ct){const Gt=mt.get(C.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+V,Gt.__webglTexture,Z)}else if(Ut){const Gt=mt.get(C.texture),Kt=V||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Gt.__webglTexture,Z||0,Kt)}T=-1},this.readRenderTargetPixels=function(C,V,Z,j,q,Ct,Ut){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){Q.bindFramebuffer(w.FRAMEBUFFER,Bt);try{const Gt=C.texture,Kt=Gt.format,Xt=Gt.type;if(Kt!==je&&Rt.convert(Kt)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Yt=Xt===Rs&&($.has("EXT_color_buffer_half_float")||A.isWebGL2&&$.has("EXT_color_buffer_float"));if(Xt!==Yn&&Rt.convert(Xt)!==w.getParameter(w.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xt===on&&(A.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-j&&Z>=0&&Z<=C.height-q&&w.readPixels(V,Z,j,q,Rt.convert(Kt),Rt.convert(Xt),Ct)}finally{const Gt=y!==null?mt.get(y).__webglFramebuffer:null;Q.bindFramebuffer(w.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(C,V,Z=0){const j=Math.pow(2,-Z),q=Math.floor(V.image.width*j),Ct=Math.floor(V.image.height*j);Et.setTexture2D(V,0),w.copyTexSubImage2D(w.TEXTURE_2D,Z,0,0,C.x,C.y,q,Ct),Q.unbindTexture()},this.copyTextureToTexture=function(C,V,Z,j=0){const q=V.image.width,Ct=V.image.height,Ut=Rt.convert(Z.format),Bt=Rt.convert(Z.type);Et.setTexture2D(Z,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,Z.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,Z.unpackAlignment),V.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,j,C.x,C.y,q,Ct,Ut,Bt,V.image.data):V.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,j,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Ut,V.mipmaps[0].data):w.texSubImage2D(w.TEXTURE_2D,j,C.x,C.y,Ut,Bt,V.image),j===0&&Z.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(C,V,Z,j,q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=Math.round(C.max.x-C.min.x),Ut=Math.round(C.max.y-C.min.y),Bt=C.max.z-C.min.z+1,Gt=Rt.convert(j.format),Kt=Rt.convert(j.type);let Xt;if(j.isData3DTexture)Et.setTexture3D(j,0),Xt=w.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)Et.setTexture2DArray(j,0),Xt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,j.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,j.unpackAlignment);const Yt=w.getParameter(w.UNPACK_ROW_LENGTH),Se=w.getParameter(w.UNPACK_IMAGE_HEIGHT),nn=w.getParameter(w.UNPACK_SKIP_PIXELS),Le=w.getParameter(w.UNPACK_SKIP_ROWS),In=w.getParameter(w.UNPACK_SKIP_IMAGES),ge=Z.isCompressedTexture?Z.mipmaps[q]:Z.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,ge.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ge.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,C.min.x),w.pixelStorei(w.UNPACK_SKIP_ROWS,C.min.y),w.pixelStorei(w.UNPACK_SKIP_IMAGES,C.min.z),Z.isDataTexture||Z.isData3DTexture?w.texSubImage3D(Xt,q,V.x,V.y,V.z,Ct,Ut,Bt,Gt,Kt,ge.data):j.isCompressedArrayTexture?w.compressedTexSubImage3D(Xt,q,V.x,V.y,V.z,Ct,Ut,Bt,Gt,ge.data):w.texSubImage3D(Xt,q,V.x,V.y,V.z,Ct,Ut,Bt,Gt,Kt,ge),w.pixelStorei(w.UNPACK_ROW_LENGTH,Yt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Se),w.pixelStorei(w.UNPACK_SKIP_PIXELS,nn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Le),w.pixelStorei(w.UNPACK_SKIP_IMAGES,In),q===0&&j.generateMipmaps&&w.generateMipmap(Xt),Q.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Et.setTextureCube(C,0):C.isData3DTexture?Et.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Et.setTexture2DArray(C,0):Et.setTexture2D(C,0),Q.unbindTexture()},this.resetState=function(){L=0,E=0,y=null,Q.reset(),wt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Za?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===Er?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class uf extends hf{}uf.prototype.isWebGL1Renderer=!0;class eo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(t),this.density=e}clone(){return new eo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ut(t),this.near=e,this.far=n}clone(){return new Tr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cl extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class no{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return $d("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new P;class Zi{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qe(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rl extends He{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ms;const Ws=new P,gs=new P,_s=new P,xs=new rt,Xs=new rt,df=new Nt,ta=new P,qs=new P,ea=new P,Bh=new rt,jo=new rt,zh=new rt;class ff extends ce{constructor(t=new Rl){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new Vt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new no(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new Zi(n,3,0,!1)),ms.setAttribute("uv",new Zi(n,2,3,!1))}this.geometry=ms,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),df.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-_s.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;na(ta.set(-.5,-.5,0),_s,a,gs,i,r),na(qs.set(.5,-.5,0),_s,a,gs,i,r),na(ea.set(.5,.5,0),_s,a,gs,i,r),Bh.set(0,0),jo.set(1,0),zh.set(1,1);let o=t.ray.intersectTriangle(ta,qs,ea,!1,Ws);if(o===null&&(na(qs.set(-.5,.5,0),_s,a,gs,i,r),jo.set(0,1),o=t.ray.intersectTriangle(ta,ea,qs,!1,Ws),o===null))return;const c=t.ray.origin.distanceTo(Ws);c<t.near||c>t.far||e.push({distance:c,point:Ws.clone(),uv:cn.getInterpolation(Ws,ta,qs,ea,Bh,jo,zh,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function na(s,t,e,n,i,r){xs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Xs.x=r*xs.x-i*xs.y,Xs.y=i*xs.x+r*xs.y):Xs.copy(xs),s.copy(t),s.x+=Xs.x,s.y+=Xs.y,s.applyMatrix4(df)}const ia=new P,kh=new P;class pf extends ce{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){ia.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(ia);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){ia.setFromMatrixPosition(t.matrixWorld),kh.setFromMatrixPosition(this.matrixWorld);const n=ia.distanceTo(kh)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let a=e[i].distance;if(e[i].object.visible&&(a-=a*e[i].hysteresis),n>=a)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}}const Gh=new P,Vh=new ue,Hh=new ue,gv=new P,Wh=new Nt,sa=new P,Qo=new Fe,Xh=new Nt,tc=new Ns;class mf extends Qt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yc,this.bindMatrix=new Nt,this.bindMatrixInverse=new Nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new $e),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,sa),this.boundingBox.expandByPoint(sa)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fe),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,sa),this.boundingSphere.expandByPoint(sa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qo.copy(this.boundingSphere),Qo.applyMatrix4(i),t.ray.intersectsSphere(Qo)!==!1&&(Xh.copy(i).invert(),tc.copy(t.ray).applyMatrix4(Xh),!(this.boundingBox!==null&&tc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,tc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ue,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ed?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Vh.fromBufferAttribute(i.attributes.skinIndex,t),Hh.fromBufferAttribute(i.attributes.skinWeight,t),Gh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Hh.getComponent(r);if(a!==0){const o=Vh.getComponent(r);Wh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(gv.copy(Gh).applyMatrix4(Wh),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Pl extends ce{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mi extends Me{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Ee,u=Ee,d,h){super(null,a,o,c,l,u,i,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qh=new Nt,_v=new Nt;class io{constructor(t=[],e=[]){this.uuid=ln(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Nt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Nt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:_v;qh.multiplyMatrices(o,e[r]),qh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new io(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new mi(e,t,t,je,on);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Pl),this.bones.push(a),this.boneInverses.push(new Nt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Is extends ie{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vs=new Nt,Yh=new Nt,ra=[],$h=new $e,xv=new Nt,Ys=new Qt,$s=new Fe;class Va extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $e),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),$h.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union($h)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fe),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),$s.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vs),Yh.multiplyMatrices(n,vs),Ys.matrixWorld=Yh,Ys.raycast(t,ra);for(let a=0,o=ra.length;a<o;a++){const c=ra[a];c.instanceId=r,c.object=this,e.push(c)}ra.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Is(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new mi(new Float32Array(i*this.count),i,this.count,dl,on));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}function vv(s,t){return s.z-t.z}function yv(s,t){return t.z-s.z}class Mv{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const r=n[this.index];i.push(r),this.index++,r.start=t.start,r.count=t.count,r.z=e}reset(){this.list.length=0,this.index=0}}const ys="batchId",ri=new Nt,Zh=new Nt,Sv=new Nt,Jh=new Nt,ec=new Os,aa=new $e,Ri=new Fe,Zs=new P,nc=new Mv,Ge=new Qt,oa=[];function bv(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,s.getComponent(r,a))}else t.array.set(s.array,e*n);t.needsUpdate=!0}class gf extends Qt{get maxGeometryCount(){return this._maxGeometryCount}constructor(t,e,n=e*2,i){super(new Vt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxGeometryCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new mi(e,t,t,je,on);this._matricesTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const o in t.attributes){const c=t.getAttribute(o),{array:l,itemSize:u,normalized:d}=c,h=new l.constructor(n*u),f=new c.constructor(h,u,d);f.setUsage(c.usage),e.setAttribute(o,f)}if(t.getIndex()!==null){const o=n>65536?new Uint32Array(r):new Uint16Array(r);e.setIndex(new ie(o,1))}const a=i>65536?new Uint32Array(n):new Uint16Array(n);e.setAttribute(ys,new ie(a,1)),this._geometryInitialized=!0}}_validateGeometry(t){if(t.getAttribute(ys))throw new Error(`BatchedMesh: Geometry cannot use attribute "${ys}"`);const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(n===ys)continue;if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);const t=this._geometryCount,e=this.boundingBox,n=this._active;e.makeEmpty();for(let i=0;i<t;i++)n[i]!==!1&&(this.getMatrixAt(i,ri),this.getBoundingBoxAt(i,aa).applyMatrix4(ri),e.union(aa))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fe);const t=this._geometryCount,e=this.boundingSphere,n=this._active;e.makeEmpty();for(let i=0;i<t;i++)n[i]!==!1&&(this.getMatrixAt(i,ri),this.getBoundingSphereAt(i,Ri).applyMatrix4(ri),e.union(Ri))}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const a=this._reservedRanges,o=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(r=a[a.length-1]),e===-1?i.vertexCount=t.getAttribute("position").count:i.vertexCount=e,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const l=t.getIndex(),u=l!==null;if(u&&(n===-1?i.indexCount=l.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const d=this._visibility,h=this._active,f=this._matricesTexture,g=this._matricesTexture.image.data;d.push(!0),h.push(!0);const _=this._geometryCount;this._geometryCount++,Sv.toArray(g,_*16),f.needsUpdate=!0,a.push(i),o.push({start:u?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new $e,sphereInitialized:!1,sphere:new Fe});const m=this.geometry.getAttribute(ys);for(let p=0;p<i.vertexCount;p++)m.setX(i.vertexStart+p,_);return m.needsUpdate=!0,this.setGeometryAt(_,t),_}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._reservedRanges[t];if(i&&a.count>o.indexCount||e.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.vertexCount;for(const f in n.attributes){if(f===ys)continue;const g=e.getAttribute(f),_=n.getAttribute(f);bv(g,_,c);const m=g.itemSize;for(let p=g.count,v=l;p<v;p++){const x=c+p;for(let M=0;M<m;M++)_.setComponent(x,M,0)}_.needsUpdate=!0}if(i){const f=o.indexStart;for(let g=0;g<a.count;g++)r.setX(f+g,c+a.getX(g));for(let g=a.count,_=o.indexCount;g<_;g++)r.setX(f+g,c);r.needsUpdate=!0}const u=this._bounds[t];e.boundingBox!==null?(u.box.copy(e.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,e.boundingSphere!==null?(u.sphere.copy(e.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const d=this._drawRanges[t],h=e.getAttribute("position");return d.count=i?a.count:h.count,this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._active;return t>=e.length||e[t]===!1?this:(e[t]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(t,e){if(this._active[t]===!1)return null;const i=this._bounds[t],r=i.box,a=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();const o=a.index,c=a.attributes.position,l=this._drawRanges[t];for(let u=l.start,d=l.start+l.count;u<d;u++){let h=u;o&&(h=o.getX(h)),r.expandByPoint(Zs.fromBufferAttribute(c,h))}i.boxInitialized=!0}return e.copy(r),e}getBoundingSphereAt(t,e){if(this._active[t]===!1)return null;const i=this._bounds[t],r=i.sphere,a=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(t,aa),aa.getCenter(r.center);const o=a.index,c=a.attributes.position,l=this._drawRanges[t];let u=0;for(let d=l.start,h=l.start+l.count;d<h;d++){let f=d;o&&(f=o.getX(f)),Zs.fromBufferAttribute(c,f),u=Math.max(u,r.center.distanceToSquared(Zs))}r.radius=Math.sqrt(u),i.sphereInitialized=!0}return e.copy(r),e}setMatrixAt(t,e){const n=this._active,i=this._matricesTexture,r=this._matricesTexture.image.data,a=this._geometryCount;return t>=a||n[t]===!1?this:(e.toArray(r,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._active,i=this._matricesTexture.image.data,r=this._geometryCount;return t>=r||n[t]===!1?null:e.fromArray(i,t*16)}setVisibleAt(t,e){const n=this._visibility,i=this._active,r=this._geometryCount;return t>=r||i[t]===!1||n[t]===e?this:(n[t]=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._visibility,n=this._active,i=this._geometryCount;return t>=i||n[t]===!1?!1:e[t]}raycast(t,e){const n=this._visibility,i=this._active,r=this._drawRanges,a=this._geometryCount,o=this.matrixWorld,c=this.geometry;Ge.material=this.material,Ge.geometry.index=c.index,Ge.geometry.attributes=c.attributes,Ge.geometry.boundingBox===null&&(Ge.geometry.boundingBox=new $e),Ge.geometry.boundingSphere===null&&(Ge.geometry.boundingSphere=new Fe);for(let l=0;l<a;l++){if(!n[l]||!i[l])continue;const u=r[l];Ge.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(l,Ge.matrixWorld).premultiply(o),this.getBoundingBoxAt(l,Ge.geometry.boundingBox),this.getBoundingSphereAt(l,Ge.geometry.boundingSphere),Ge.raycast(t,oa);for(let d=0,h=oa.length;d<h;d++){const f=oa[d];f.object=this,f.batchId=l,e.push(f)}oa.length=0}Ge.material=null,Ge.geometry.index=null,Ge.geometry.attributes={},Ge.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>({...e})),this._reservedRanges=t._reservedRanges.map(e=>({...e})),this._visibility=t._visibility.slice(),this._active=t._active.slice(),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxGeometryCount=t._maxGeometryCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._active,l=this._visibility,u=this._multiDrawStarts,d=this._multiDrawCounts,h=this._drawRanges,f=this.perObjectFrustumCulled;f&&(Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),ec.setFromProjectionMatrix(Jh,t.coordinateSystem));let g=0;if(this.sortObjects){Zh.copy(this.matrixWorld).invert(),Zs.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Zh);for(let p=0,v=l.length;p<v;p++)if(l[p]&&c[p]){this.getMatrixAt(p,ri),this.getBoundingSphereAt(p,Ri).applyMatrix4(ri);let x=!1;if(f&&(x=!ec.intersectsSphere(Ri)),!x){const M=Zs.distanceTo(Ri.center);nc.push(h[p],M)}}const _=nc.list,m=this.customSort;m===null?_.sort(r.transparent?yv:vv):m.call(this,_,n);for(let p=0,v=_.length;p<v;p++){const x=_[p];u[g]=x.start*o,d[g]=x.count,g++}nc.reset()}else for(let _=0,m=l.length;_<m;_++)if(l[_]&&c[_]){let p=!1;if(f&&(this.getMatrixAt(_,ri),this.getBoundingSphereAt(_,Ri).applyMatrix4(ri),p=!ec.intersectsSphere(Ri)),!p){const v=h[_];u[g]=v.start*o,d[g]=v.count,g++}}this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,a){this.onBeforeRender(t,null,i,r,a)}}class Ze extends He{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Kh=new P,jh=new P,Qh=new Nt,ic=new Ns,ca=new Fe;class _i extends ce{constructor(t=new Vt,e=new Ze){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Kh.fromBufferAttribute(e,i-1),jh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Kh.distanceTo(jh);t.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(i),ca.radius+=r,t.ray.intersectsSphere(ca)===!1)return;Qh.copy(i).invert(),ic.copy(t.ray).applyMatrix4(Qh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,u=new P,d=new P,h=new P,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let x=p,M=v-1;x<M;x+=f){const L=g.getX(x),E=g.getX(x+1);if(l.fromBufferAttribute(m,L),u.fromBufferAttribute(m,E),ic.distanceSqToSegment(l,u,h,d)>c)continue;h.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(h);T<t.near||T>t.far||e.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let x=p,M=v-1;x<M;x+=f){if(l.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),ic.distanceSqToSegment(l,u,h,d)>c)continue;h.applyMatrix4(this.matrixWorld);const E=t.ray.origin.distanceTo(h);E<t.near||E>t.far||e.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const tu=new P,eu=new P;class Ln extends _i{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)tu.fromBufferAttribute(e,i),eu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+tu.distanceTo(eu);t.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _f extends _i{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class so extends He{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nu=new Nt,Kc=new Ns,la=new Fe,ha=new P;class ro extends ce{constructor(t=new Vt,e=new so){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(i),la.radius+=r,t.ray.intersectsSphere(la)===!1)return;nu.copy(i).invert(),Kc.copy(t.ray).applyMatrix4(nu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,_=f;g<_;g++){const m=l.getX(g);ha.fromBufferAttribute(d,m),iu(ha,m,c,i,t,e,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)ha.fromBufferAttribute(d,g),iu(ha,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function iu(s,t,e,n,i,r,a){const o=Kc.distanceSqToPoint(s);if(o<e){const c=new P;Kc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class wv extends Me{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:_e,this.magFilter=r!==void 0?r:_e,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Ev extends Me{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ee,this.minFilter=Ee,this.generateMipmaps=!1,this.needsUpdate=!0}}class ao extends Me{constructor(t,e,n,i,r,a,o,c,l,u,d,h){super(null,a,o,c,l,u,i,r,d,h),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Av extends ao{constructor(t,e,n,i,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Ve}}class Tv extends ao{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,$n),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class oo extends Me{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const u=n[i],h=n[i+1]-u,f=(a-u)/h;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new rt:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],a=[],o=new P,c=new Nt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ye(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ye(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class co extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new rt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class xf extends co{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ll(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;h*=u,f*=u,i(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const ua=new P,sc=new Ll,rc=new Ll,ac=new Ll;class vf extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%r]:(ua.subVectors(i[0],i[1]).add(i[0]),l=ua);const d=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(ua.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=ua),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),sc.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,m),rc.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,m),ac.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),rc.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),ac.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(sc.calc(c),rc.calc(c),ac.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function su(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function Cv(s,t){const e=1-s;return e*e*t}function Rv(s,t){return 2*(1-s)*s*t}function Pv(s,t){return s*s*t}function er(s,t,e,n){return Cv(s,t)+Rv(s,e)+Pv(s,n)}function Lv(s,t){const e=1-s;return e*e*e*t}function Iv(s,t){const e=1-s;return 3*e*e*s*t}function Dv(s,t){return 3*(1-s)*s*s*t}function Uv(s,t){return s*s*s*t}function nr(s,t,e,n,i){return Lv(s,t)+Iv(s,e)+Dv(s,n)+Uv(s,i)}class Il extends Mn{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(t,i.x,r.x,a.x,o.x),nr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yf extends Mn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(t,i.x,r.x,a.x,o.x),nr(t,i.y,r.y,a.y,o.y),nr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dl extends Mn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mf extends Mn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ul extends Mn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(er(t,i.x,r.x,a.x),er(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nl extends Mn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(er(t,i.x,r.x,a.x),er(t,i.y,r.y,a.y),er(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ol extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(su(o,c.x,l.x,u.x,d.x),su(o,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new rt().fromArray(i))}return this}}var Ha=Object.freeze({__proto__:null,ArcCurve:xf,CatmullRomCurve3:vf,CubicBezierCurve:Il,CubicBezierCurve3:yf,EllipseCurve:co,LineCurve:Dl,LineCurve3:Mf,QuadraticBezierCurve:Ul,QuadraticBezierCurve3:Nl,SplineCurve:Ol});class Sf extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ha[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ha[i.type]().fromJSON(i))}return this}}class gr extends Sf{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Dl(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Ul(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Il(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ol(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new co(t,e,n,i,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Cr extends Vt{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ye(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/e,d=new P,h=new rt,f=new P,g=new P,_=new P;let m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=e;v++){const x=n+v*u*i,M=Math.sin(x),L=Math.cos(x);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*M,d.y=t[E].y,d.z=t[E].x*L,a.push(d.x,d.y,d.z),h.x=v/e,h.y=E/(t.length-1),o.push(h.x,h.y);const y=c[3*E+0]*M,T=c[3*E+1],N=c[3*E+0]*L;l.push(y,T,N)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){const M=x+v*t.length,L=M,E=M+t.length,y=M+t.length+1,T=M+1;r.push(L,E,T),r.push(y,T,E)}this.setIndex(r),this.setAttribute("position",new Pt(a,3)),this.setAttribute("uv",new Pt(o,2)),this.setAttribute("normal",new Pt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.points,t.segments,t.phiStart,t.phiLength)}}class Rr extends Cr{constructor(t=1,e=1,n=4,i=8){const r=new gr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Rr(t.radius,t.length,t.capSegments,t.radialSegments)}}class lo extends Vt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,u=new rt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=n+d/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(o,3)),this.setAttribute("uv",new Pt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Pn extends Vt{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(f,2));function v(){const M=new P,L=new P;let E=0;const y=(e-t)/n;for(let T=0;T<=r;T++){const N=[],S=T/r,R=S*(e-t)+t;for(let J=0;J<=i;J++){const X=J/i,D=X*c+o,O=Math.sin(D),U=Math.cos(D);L.x=R*O,L.y=-S*n+m,L.z=R*U,d.push(L.x,L.y,L.z),M.set(O,y,U).normalize(),h.push(M.x,M.y,M.z),f.push(X,1-S),N.push(g++)}_.push(N)}for(let T=0;T<i;T++)for(let N=0;N<r;N++){const S=_[N][T],R=_[N+1][T],J=_[N+1][T+1],X=_[N][T+1];u.push(S,R,X),u.push(R,J,X),E+=6}l.addGroup(p,E,0),p+=E}function x(M){const L=g,E=new rt,y=new P;let T=0;const N=M===!0?t:e,S=M===!0?1:-1;for(let J=1;J<=i;J++)d.push(0,m*S,0),h.push(0,S,0),f.push(.5,.5),g++;const R=g;for(let J=0;J<=i;J++){const D=J/i*c+o,O=Math.cos(D),U=Math.sin(D);y.x=N*U,y.y=m*S,y.z=N*O,d.push(y.x,y.y,y.z),h.push(0,S,0),E.x=O*.5+.5,E.y=U*.5*S+.5,f.push(E.x,E.y),g++}for(let J=0;J<i;J++){const X=L+J,D=R+J;M===!0?u.push(D,D+1,X):u.push(D+1,D,X),T+=3}l.addGroup(p,T,M===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ho extends Pn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ho(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vi extends Vt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),u(),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(r.slice(),3)),this.setAttribute("uv",new Pt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new P,M=new P,L=new P;for(let E=0;E<e.length;E+=3)f(e[E+0],x),f(e[E+1],M),f(e[E+2],L),c(x,M,L,v)}function c(v,x,M,L){const E=L+1,y=[];for(let T=0;T<=E;T++){y[T]=[];const N=v.clone().lerp(M,T/E),S=x.clone().lerp(M,T/E),R=E-T;for(let J=0;J<=R;J++)J===0&&T===E?y[T][J]=N:y[T][J]=N.clone().lerp(S,J/R)}for(let T=0;T<E;T++)for(let N=0;N<2*(E-T)-1;N++){const S=Math.floor(N/2);N%2===0?(h(y[T][S+1]),h(y[T+1][S]),h(y[T][S])):(h(y[T][S+1]),h(y[T+1][S+1]),h(y[T+1][S]))}}function l(v){const x=new P;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(v),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function u(){const v=new P;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const M=m(v)/2/Math.PI+.5,L=p(v)/Math.PI+.5;a.push(M,1-L)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){const x=a[v+0],M=a[v+2],L=a[v+4],E=Math.max(x,M,L),y=Math.min(x,M,L);E>.9&&y<.1&&(x<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),L<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,x){const M=v*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){const v=new P,x=new P,M=new P,L=new P,E=new rt,y=new rt,T=new rt;for(let N=0,S=0;N<r.length;N+=9,S+=6){v.set(r[N+0],r[N+1],r[N+2]),x.set(r[N+3],r[N+4],r[N+5]),M.set(r[N+6],r[N+7],r[N+8]),E.set(a[S+0],a[S+1]),y.set(a[S+2],a[S+3]),T.set(a[S+4],a[S+5]),L.copy(v).add(x).add(M).divideScalar(3);const R=m(L);_(E,S+0,v,R),_(y,S+2,x,R),_(T,S+4,M,R)}}function _(v,x,M,L){L<0&&v.x===1&&(a[x]=v.x-1),M.x===0&&M.z===0&&(a[x]=L/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.vertices,t.indices,t.radius,t.details)}}class uo extends vi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new uo(t.radius,t.detail)}}const da=new P,fa=new P,oc=new P,pa=new cn;class bf extends Vt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Xi*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=pa;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),pa.getNormal(oc),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const x=(v+1)%3,M=d[v],L=d[x],E=pa[u[v]],y=pa[u[x]],T=`${M}_${L}`,N=`${L}_${M}`;N in h&&h[N]?(oc.dot(h[N].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(y.x,y.y,y.z)),h[N]=null):T in h||(h[T]={index0:l[v],index1:l[x],normal:oc.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:m}=h[g];da.fromBufferAttribute(o,_),fa.fromBufferAttribute(o,m),f.push(da.x,da.y,da.z),f.push(fa.x,fa.y,fa.z)}this.setAttribute("position",new Pt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class qi extends gr{constructor(t){super(t),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new gr().fromJSON(i))}return this}}const Nv={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=wf(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,d,h,f;if(n&&(r=kv(s,t,r,e)),s.length>80*e){o=l=s[0],c=u=s[1];for(let g=e;g<i;g+=e)d=s[g],h=s[g+1],d<o&&(o=d),h<c&&(c=h),d>l&&(l=d),h>u&&(u=h);f=Math.max(l-o,u-c),f=f!==0?32767/f:0}return _r(r,a,e,o,c,f,0),a}};function wf(s,t,e,n,i){let r,a;if(i===Kv(s,t,e,n)>0)for(r=t;r<e;r+=n)a=ru(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=ru(r,s[r],s[r+1],a);return a&&fo(a,a.next)&&(vr(a),a=a.next),a}function Ji(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(fo(e,e.next)||xe(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _r(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Xv(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Fv(s,n,i,r):Ov(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),vr(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=Bv(Ji(s),t,e),_r(s,t,e,n,i,r,2)):a===2&&zv(s,t,e,n,i,r):_r(Ji(s),t,e,n,i,r,1);break}}}function Ov(s){const t=s.prev,e=s,n=s.next;if(xe(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=i<r?i<a?i:a:r<a?r:a,d=o<c?o<l?o:l:c<l?c:l,h=i>r?i>a?i:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&As(i,o,r,c,a,l,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fv(s,t,e,n){const i=s.prev,r=s,a=s.next;if(xe(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,u=i.y,d=r.y,h=a.y,f=o<c?o<l?o:l:c<l?c:l,g=u<d?u<h?u:h:d<h?d:h,_=o>c?o>l?o:l:c>l?c:l,m=u>d?u>h?u:h:d>h?d:h,p=jc(f,g,t,e,n),v=jc(_,m,t,e,n);let x=s.prevZ,M=s.nextZ;for(;x&&x.z>=p&&M&&M.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&As(o,u,c,d,l,h,x.x,x.y)&&xe(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&As(o,u,c,d,l,h,M.x,M.y)&&xe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&As(o,u,c,d,l,h,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&As(o,u,c,d,l,h,M.x,M.y)&&xe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Bv(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!fo(i,r)&&Ef(i,n,n.next,r)&&xr(i,r)&&xr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),vr(n),vr(n.next),n=s=r),n=n.next}while(n!==s);return Ji(n)}function zv(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$v(a,o)){let c=Af(a,o);a=Ji(a,a.next),c=Ji(c,c.next),_r(a,t,e,n,i,r,0),_r(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function kv(s,t,e,n){const i=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=wf(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Yv(l));for(i.sort(Gv),r=0;r<i.length;r++)e=Vv(i[r],e);return e}function Gv(s,t){return s.x-t.x}function Vv(s,t){const e=Hv(s,t);if(!e)return t;const n=Af(e,s);return Ji(n,n.next),Ji(e,e.next)}function Hv(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const h=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,i=e.x<e.next.x?e:e.next,h===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,l=i.y;let u=1/0,d;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&As(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),xr(e,s)&&(d<u||d===u&&(e.x>i.x||e.x===i.x&&Wv(i,e)))&&(i=e,u=d)),e=e.next;while(e!==o);return i}function Wv(s,t){return xe(s.prev,s,t.prev)<0&&xe(t.next,s,s.next)<0}function Xv(s,t,e,n){let i=s;do i.z===0&&(i.z=jc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,qv(i)}function qv(s){let t,e,n,i,r,a,o,c,l=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(a>1);return s}function jc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Yv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function As(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function $v(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Zv(s,t)&&(xr(s,t)&&xr(t,s)&&Jv(s,t)&&(xe(s.prev,s,t.prev)||xe(s,t.prev,t))||fo(s,t)&&xe(s.prev,s,s.next)>0&&xe(t.prev,t,t.next)>0)}function xe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function fo(s,t){return s.x===t.x&&s.y===t.y}function Ef(s,t,e,n){const i=ga(xe(s,t,e)),r=ga(xe(s,t,n)),a=ga(xe(e,n,s)),o=ga(xe(e,n,t));return!!(i!==r&&a!==o||i===0&&ma(s,e,t)||r===0&&ma(s,n,t)||a===0&&ma(e,s,n)||o===0&&ma(e,t,n))}function ma(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ga(s){return s>0?1:s<0?-1:0}function Zv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Ef(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function xr(s,t){return xe(s.prev,s,s.next)<0?xe(s,t,s.next)>=0&&xe(s,s.prev,t)>=0:xe(s,t,s.prev)<0||xe(s,s.next,t)<0}function Jv(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Af(s,t){const e=new Qc(s.i,s.x,s.y),n=new Qc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ru(s,t,e,n){const i=new Qc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function vr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Qc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kv(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Cn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Cn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];au(t),ou(n,t);let a=t.length;e.forEach(au);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,ou(n,e[c]);const o=Nv.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function au(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ou(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class po extends Vt{constructor(t=new qi([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Pt(i,3)),this.setAttribute("uv",new Pt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:jv;let x,M=!1,L,E,y,T;p&&(x=p.getSpacedPoints(u),M=!0,h=!1,L=p.computeFrenetFrames(u,!1),E=new P,y=new P,T=new P),h||(m=0,f=0,g=0,_=0);const N=o.extractPoints(l);let S=N.shape;const R=N.holes;if(!Cn.isClockWise(S)){S=S.reverse();for(let w=0,H=R.length;w<H;w++){const $=R[w];Cn.isClockWise($)&&(R[w]=$.reverse())}}const X=Cn.triangulateShape(S,R),D=S;for(let w=0,H=R.length;w<H;w++){const $=R[w];S=S.concat($)}function O(w,H,$){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(H,$)}const U=S.length,z=X.length;function B(w,H,$){let A,Q,ht;const mt=w.x-H.x,Et=w.y-H.y,zt=$.x-w.x,I=$.y-w.y,b=mt*mt+Et*Et,K=mt*I-Et*zt;if(Math.abs(K)>Number.EPSILON){const et=Math.sqrt(b),ct=Math.sqrt(zt*zt+I*I),at=H.x-Et/et,Dt=H.y+mt/et,It=$.x-I/ct,pt=$.y+zt/ct,xt=((It-at)*I-(pt-Dt)*zt)/(mt*I-Et*zt);A=at+mt*xt-w.x,Q=Dt+Et*xt-w.y;const Ot=A*A+Q*Q;if(Ot<=2)return new rt(A,Q);ht=Math.sqrt(Ot/2)}else{let et=!1;mt>Number.EPSILON?zt>Number.EPSILON&&(et=!0):mt<-Number.EPSILON?zt<-Number.EPSILON&&(et=!0):Math.sign(Et)===Math.sign(I)&&(et=!0),et?(A=-Et,Q=mt,ht=Math.sqrt(b)):(A=mt,Q=Et,ht=Math.sqrt(b/2))}return new rt(A/ht,Q/ht)}const W=[];for(let w=0,H=D.length,$=H-1,A=w+1;w<H;w++,$++,A++)$===H&&($=0),A===H&&(A=0),W[w]=B(D[w],D[$],D[A]);const tt=[];let st,ot=W.concat();for(let w=0,H=R.length;w<H;w++){const $=R[w];st=[];for(let A=0,Q=$.length,ht=Q-1,mt=A+1;A<Q;A++,ht++,mt++)ht===Q&&(ht=0),mt===Q&&(mt=0),st[A]=B($[A],$[ht],$[mt]);tt.push(st),ot=ot.concat(st)}for(let w=0;w<m;w++){const H=w/m,$=f*Math.cos(H*Math.PI/2),A=g*Math.sin(H*Math.PI/2)+_;for(let Q=0,ht=D.length;Q<ht;Q++){const mt=O(D[Q],W[Q],A);yt(mt.x,mt.y,-$)}for(let Q=0,ht=R.length;Q<ht;Q++){const mt=R[Q];st=tt[Q];for(let Et=0,zt=mt.length;Et<zt;Et++){const I=O(mt[Et],st[Et],A);yt(I.x,I.y,-$)}}}const lt=g+_;for(let w=0;w<U;w++){const H=h?O(S[w],ot[w],lt):S[w];M?(y.copy(L.normals[0]).multiplyScalar(H.x),E.copy(L.binormals[0]).multiplyScalar(H.y),T.copy(x[0]).add(y).add(E),yt(T.x,T.y,T.z)):yt(H.x,H.y,0)}for(let w=1;w<=u;w++)for(let H=0;H<U;H++){const $=h?O(S[H],ot[H],lt):S[H];M?(y.copy(L.normals[w]).multiplyScalar($.x),E.copy(L.binormals[w]).multiplyScalar($.y),T.copy(x[w]).add(y).add(E),yt(T.x,T.y,T.z)):yt($.x,$.y,d/u*w)}for(let w=m-1;w>=0;w--){const H=w/m,$=f*Math.cos(H*Math.PI/2),A=g*Math.sin(H*Math.PI/2)+_;for(let Q=0,ht=D.length;Q<ht;Q++){const mt=O(D[Q],W[Q],A);yt(mt.x,mt.y,d+$)}for(let Q=0,ht=R.length;Q<ht;Q++){const mt=R[Q];st=tt[Q];for(let Et=0,zt=mt.length;Et<zt;Et++){const I=O(mt[Et],st[Et],A);M?yt(I.x,I.y+x[u-1].y,x[u-1].x+$):yt(I.x,I.y,d+$)}}}G(),nt();function G(){const w=i.length/3;if(h){let H=0,$=U*H;for(let A=0;A<z;A++){const Q=X[A];bt(Q[2]+$,Q[1]+$,Q[0]+$)}H=u+m*2,$=U*H;for(let A=0;A<z;A++){const Q=X[A];bt(Q[0]+$,Q[1]+$,Q[2]+$)}}else{for(let H=0;H<z;H++){const $=X[H];bt($[2],$[1],$[0])}for(let H=0;H<z;H++){const $=X[H];bt($[0]+U*u,$[1]+U*u,$[2]+U*u)}}n.addGroup(w,i.length/3-w,0)}function nt(){const w=i.length/3;let H=0;gt(D,H),H+=D.length;for(let $=0,A=R.length;$<A;$++){const Q=R[$];gt(Q,H),H+=Q.length}n.addGroup(w,i.length/3-w,1)}function gt(w,H){let $=w.length;for(;--$>=0;){const A=$;let Q=$-1;Q<0&&(Q=w.length-1);for(let ht=0,mt=u+m*2;ht<mt;ht++){const Et=U*ht,zt=U*(ht+1),I=H+A+Et,b=H+Q+Et,K=H+Q+zt,et=H+A+zt;ft(I,b,K,et)}}}function yt(w,H,$){c.push(w),c.push(H),c.push($)}function bt(w,H,$){Tt(w),Tt(H),Tt($);const A=i.length/3,Q=v.generateTopUV(n,i,A-3,A-2,A-1);k(Q[0]),k(Q[1]),k(Q[2])}function ft(w,H,$,A){Tt(w),Tt(H),Tt(A),Tt(H),Tt($),Tt(A);const Q=i.length/3,ht=v.generateSideWallUV(n,i,Q-6,Q-3,Q-2,Q-1);k(ht[0]),k(ht[1]),k(ht[3]),k(ht[1]),k(ht[2]),k(ht[3])}function Tt(w){i.push(c[w*3+0]),i.push(c[w*3+1]),i.push(c[w*3+2])}function k(w){r.push(w.x),r.push(w.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ha[i.type]().fromJSON(i)),new po(n,t.options)}}const jv={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],u=t[i*3+1];return[new rt(r,a),new rt(o,c),new rt(l,u)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new rt(a,1-c),new rt(l,1-d),new rt(h,1-g),new rt(_,1-p)]:[new rt(o,1-c),new rt(u,1-d),new rt(f,1-g),new rt(m,1-p)]}};function Qv(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ds extends vi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ds(t.radius,t.detail)}}class Pr extends vi{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pr(t.radius,t.detail)}}class mo extends Vt{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],u=[];let d=t;const h=(e-t)/i,f=new P,g=new rt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,x=v,M=v+n+1,L=v+n+2,E=v+1;o.push(x,M,E),o.push(M,L,E)}}this.setIndex(o),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class go extends Vt{constructor(t=new qi([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Pt(i,3)),this.setAttribute("normal",new Pt(r,3)),this.setAttribute("uv",new Pt(a,2));function l(u){const d=i.length/3,h=u.extractPoints(e);let f=h.shape;const g=h.holes;Cn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];Cn.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=Cn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){const v=f[m];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],x=v[0]+d,M=v[1]+d,L=v[2]+d;n.push(x,M,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ty(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new go(n,t.curveSegments)}}function ty(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Ki extends Vt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new P,h=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let M=0;p===0&&a===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let L=0;L<=e;L++){const E=L/e;d.x=-t*Math.cos(i+E*r)*Math.sin(a+x*o),d.y=t*Math.cos(a+x*o),d.z=t*Math.sin(i+E*r)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(E+M,1-x),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const x=u[p][v+1],M=u[p][v],L=u[p+1][v],E=u[p+1][v+1];(p!==0||a>0)&&f.push(x,M,E),(p!==n-1||c<Math.PI)&&f.push(M,L,E)}this.setIndex(f),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _o extends vi{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _o(t.radius,t.detail)}}class xo extends Vt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],u=new P,d=new P,h=new P;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;a.push(_,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(c,3)),this.setAttribute("uv",new Pt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class vo extends Vt{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],l=[],u=[],d=new P,h=new P,f=new P,g=new P,_=new P,m=new P,p=new P;for(let x=0;x<=n;++x){const M=x/n*r*Math.PI*2;v(M,r,a,t,f),v(M+.01,r,a,t,g),m.subVectors(g,f),p.addVectors(g,f),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let L=0;L<=i;++L){const E=L/i*Math.PI*2,y=-e*Math.cos(E),T=e*Math.sin(E);d.x=f.x+(y*p.x+T*_.x),d.y=f.y+(y*p.y+T*_.y),d.z=f.z+(y*p.z+T*_.z),c.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),u.push(x/n),u.push(L/i)}}for(let x=1;x<=n;x++)for(let M=1;M<=i;M++){const L=(i+1)*(x-1)+(M-1),E=(i+1)*x+(M-1),y=(i+1)*x+M,T=(i+1)*(x-1)+M;o.push(L,E,T),o.push(E,y,T)}this.setIndex(o),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(u,2));function v(x,M,L,E,y){const T=Math.cos(x),N=Math.sin(x),S=L/M*x,R=Math.cos(S);y.x=E*(2+R)*.5*T,y.y=E*(2+R)*N*.5,y.z=E*Math.sin(S)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class yo extends Vt{constructor(t=new Nl(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,c=new P,l=new rt;let u=new P;const d=[],h=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(f,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),v(),p()}function m(x){u=t.getPointAt(x/e,u);const M=a.normals[x],L=a.binormals[x];for(let E=0;E<=i;E++){const y=E/i*Math.PI*2,T=Math.sin(y),N=-Math.cos(y);c.x=N*M.x+T*L.x,c.y=N*M.y+T*L.y,c.z=N*M.z+T*L.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=e;x++)for(let M=1;M<=i;M++){const L=(i+1)*(x-1)+(M-1),E=(i+1)*x+(M-1),y=(i+1)*x+M,T=(i+1)*(x-1)+M;g.push(L,E,T),g.push(E,y,T)}}function v(){for(let x=0;x<=e;x++)for(let M=0;M<=i;M++)l.x=x/e,l.y=M/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new yo(new Ha[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Tf extends Vt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new P,r=new P;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const d=c[l],h=d.start,f=d.count;for(let g=h,_=h+f;g<_;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),v=o.getX(g+(m+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,v),cu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const u=3*o+l,d=3*o+(l+1)%3;i.fromBufferAttribute(a,u),r.fromBufferAttribute(a,d),cu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Pt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function cu(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var lu=Object.freeze({__proto__:null,BoxGeometry:jn,CapsuleGeometry:Rr,CircleGeometry:lo,ConeGeometry:ho,CylinderGeometry:Pn,DodecahedronGeometry:uo,EdgesGeometry:bf,ExtrudeGeometry:po,IcosahedronGeometry:Ds,LatheGeometry:Cr,OctahedronGeometry:Pr,PlaneGeometry:pn,PolyhedronGeometry:vi,RingGeometry:mo,ShapeGeometry:go,SphereGeometry:Ki,TetrahedronGeometry:_o,TorusGeometry:xo,TorusKnotGeometry:vo,TubeGeometry:yo,WireframeGeometry:Tf});class Cf extends He{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ut(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Rf extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fl extends He{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pf extends Fl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Lf extends He{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class If extends He{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ut(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Df extends He{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class kn extends He{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Uf extends He{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ut(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nf extends Ze{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Hi(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Of(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ff(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function tl(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)i[a++]=s[o+c]}return i}function Bl(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}function ey(s,t,e,n,i=30){const r=s.clone();r.name=t;const a=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],u=l.getValueSize(),d=[],h=[];for(let f=0;f<l.times.length;++f){const g=l.times[f]*i;if(!(g<e||g>=n)){d.push(l.times[f]);for(let _=0;_<u;++_)h.push(l.values[f*u+_])}}d.length!==0&&(l.times=Hi(d,l.times.constructor),l.values=Hi(h,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function ny(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){const o=e.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===c});if(l===void 0)continue;let u=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);const g=o.times.length-1;let _;if(r<=o.times[0]){const p=u,v=d-u;_=o.values.slice(p,v)}else if(r>=o.times[g]){const p=g*d+u,v=p+d-u;_=o.values.slice(p,v)}else{const p=o.createInterpolant(),v=u,x=d-u;p.evaluate(r),_=p.resultBuffer.slice(v,x)}c==="quaternion"&&new Ye().fromArray(_).normalize().conjugate().toArray(_);const m=l.times.length;for(let p=0;p<m;++p){const v=p*f+h;if(c==="quaternion")Ye.multiplyQuaternionsFlat(l.values,v,_,0,l.values,v);else{const x=f-h*2;for(let M=0;M<x;++M)l.values[v+M]-=_[M]}}}return s.blendMode=_l,s}const iy={convertArray:Hi,isTypedArray:Of,getKeyframeOrder:Ff,sortedArray:tl,flattenJSON:Bl,subclip:ey,makeClipAdditive:ny};class Lr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bf extends Lr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ki,endingEnd:ki}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gi:r=t,o=2*e-n;break;case lr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gi:a=t,c=2*n-e;break;case lr:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,v=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let L=0;L!==o;++L)r[L]=p*a[u+L]+v*a[l+L]+x*a[c+L]+M*a[d+L];return r}}class zl extends Lr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(i-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*d+a[c+h]*u;return r}}class zf extends Lr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Sn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hi(e,this.TimeBufferType),this.values=Hi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hi(t.times,Array),values:Hi(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case or:e=this.InterpolantFactoryMethodDiscrete;break;case cr:e=this.InterpolantFactoryMethodLinear;break;case Na:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return Na}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Of(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Na,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(i)c=!0;else{const d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const _=e[d+g];if(_!==e[h+g]||_!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=cr;class ji extends Sn{}ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=or;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class kl extends Sn{}kl.prototype.ValueTypeName="color";class yr extends Sn{}yr.prototype.ValueTypeName="number";class kf extends Lr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e);let l=t*o;for(let u=l+o;l!==u;l+=4)Ye.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Bs extends Sn{InterpolantFactoryMethodLinear(t){return new kf(this.times,this.values,this.getValueSize(),t)}}Bs.prototype.ValueTypeName="quaternion";Bs.prototype.DefaultInterpolation=cr;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Qi extends Sn{}Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=or;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;class Mr extends Sn{}Mr.prototype.ValueTypeName="vector";class Sr{constructor(t,e=-1,n,i=$a){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ln(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(ry(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(Sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=Ff(c);c=tl(c,1,u),l=tl(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new yr(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],u=l.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,g,_){if(f.length!==0){const m=[],p=[];Bl(f,m,p,g),m.length!==0&&_.push(new d(h,m,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let d=0;d<l.length;d++){const h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)f[h[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==h[g].morphTargets.length;++v){const x=h[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new yr(".morphTargetInfluence["+_+"]",m,p))}c=f.length*a}else{const f=".bones["+e[d].name+"]";n(Mr,f+".position",h,"pos",i),n(Bs,f+".quaternion",h,"rot",i),n(Mr,f+".scale",h,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yr;case"vector":case"vector2":case"vector3":case"vector4":return Mr;case"color":return kl;case"quaternion":return Bs;case"bool":case"boolean":return ji;case"string":return Qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ry(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=sy(s.type);if(s.times===void 0){const e=[],n=[];Bl(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Wn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Gl{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Gf=new Gl;class tn{constructor(t){this.manager=t!==void 0?t:Gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}tn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class ay extends Error{constructor(t,e){super(t),this.response=e}}class Zn extends tn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Wn.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Bn[t]!==void 0){Bn[t].push({onLoad:e,onProgress:n,onError:i});return}Bn[t]=[],Bn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;const u=Bn[t],d=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=h?parseInt(h):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){d.read().then(({done:x,value:M})=>{if(x)p.close();else{_+=M.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,y=u.length;E<y;E++){const T=u[E];T.onProgress&&T.onProgress(L)}p.enqueue(M),v()}})}}});return new Response(m)}else throw new ay(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Wn.add(t,l);const u=Bn[t];delete Bn[t];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Bn[t];if(u===void 0)throw this.manager.itemError(t),l;delete Bn[t];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class oy extends tn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Zn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=Sr.parse(t[n]);e.push(i)}return e}}class cy extends tn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=[],o=new ao,c=new Zn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function u(d){c.load(t[d],function(h){const f=r.parse(h,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(o.minFilter=_e),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let d=0,h=t.length;d<h;++d)u(d);else c.load(t,function(d){const h=r.parse(d,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let g=0;g<f;g++){a[g]={mipmaps:[]};for(let _=0;_<h.mipmapCount;_++)a[g].mipmaps.push(h.mipmaps[g*h.mipmapCount+_]),a[g].format=h.format,a[g].width=h.width,a[g].height=h.height}o.image=a}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=_e),o.format=h.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}}class br extends tn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Wn.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=mr("img");function c(){u(),Wn.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){u(),i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class ly extends tn{constructor(t){super(t)}load(t,e,n,i){const r=new Ar;r.colorSpace=Te;const a=new br(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(t[l],function(u){r.images[l]=u,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let l=0;l<t.length;++l)c(l);return r}}class hy extends tn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new mi,o=new Zn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(c){let l;try{l=r.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Ve,a.wrapT=l.wrapT!==void 0?l.wrapT:Ve,a.magFilter=l.magFilter!==void 0?l.magFilter:_e,a.minFilter=l.minFilter!==void 0?l.minFilter:_e,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=An),l.mipmapCount===1&&(a.minFilter=_e),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,e&&e(a,l)},n,i),a}}class Vf extends tn{constructor(t){super(t)}load(t,e,n,i){const r=new Me,a=new br(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class yi extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Vl extends yi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const cc=new Nt,hu=new P,uu=new P;class Hl{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(hu),uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uu),e.updateMatrixWorld(),cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class uy extends Hl{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ps*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Hf extends yi{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new uy}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const du=new Nt,Js=new P,lc=new P;class dy extends Hl{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),lc.copy(n.position),lc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lc),n.updateMatrixWorld(),i.makeTranslation(-Js.x,-Js.y,-Js.z),du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du)}}class Wf extends yi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class fy extends Hl{constructor(){super(new Qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wl extends yi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new fy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xf extends yi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class qf extends yi{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Yf{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new P)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class $f extends yi{constructor(t=new Yf,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class Mo extends tn{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,a=new Zn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=Mo.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const a=t.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new ut().setHex(a.value);break;case"v2":i.uniforms[r].value=new rt().fromArray(a.value);break;case"v3":i.uniforms[r].value=new P().fromArray(a.value);break;case"v4":i.uniforms[r].value=new ue().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Wt().fromArray(a.value);break;case"m4":i.uniforms[r].value=new Nt().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new rt().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){const e={ShadowMaterial:Cf,SpriteMaterial:Rl,RawShaderMaterial:Rf,ShaderMaterial:un,PointsMaterial:so,MeshPhysicalMaterial:Pf,MeshStandardMaterial:Fl,MeshPhongMaterial:Lf,MeshToonMaterial:If,MeshNormalMaterial:Df,MeshLambertMaterial:kn,MeshDepthMaterial:Al,MeshDistanceMaterial:Tl,MeshBasicMaterial:Qe,MeshMatcapMaterial:Uf,LineDashedMaterial:Nf,LineBasicMaterial:Ze,Material:He};return new e[t]}}class el{static decodeText(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch(n){return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Zf extends Vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Jf extends tn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Zn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,g){if(e[g]!==void 0)return e[g];const m=f.interleavedBuffers[g],p=r(f,m.buffer),v=bs(m.type,p),x=new no(v,m.stride);return x.uuid=m.uuid,e[g]=x,x}function r(f,g){if(n[g]!==void 0)return n[g];const m=f.arrayBuffers[g],p=new Uint32Array(m).buffer;return n[g]=p,p}const a=t.isInstancedBufferGeometry?new Zf:new Vt,o=t.data.index;if(o!==void 0){const f=bs(o.type,o.array);a.setIndex(new ie(f,1))}const c=t.data.attributes;for(const f in c){const g=c[f];let _;if(g.isInterleavedBufferAttribute){const m=i(t.data,g.data);_=new Zi(m,g.itemSize,g.offset,g.normalized)}else{const m=bs(g.type,g.array),p=g.isInstancedBufferAttribute?Is:ie;_=new p(m,g.itemSize,g.normalized)}g.name!==void 0&&(_.name=g.name),g.usage!==void 0&&_.setUsage(g.usage),a.setAttribute(f,_)}const l=t.data.morphAttributes;if(l)for(const f in l){const g=l[f],_=[];for(let m=0,p=g.length;m<p;m++){const v=g[m];let x;if(v.isInterleavedBufferAttribute){const M=i(t.data,v.data);x=new Zi(M,v.itemSize,v.offset,v.normalized)}else{const M=bs(v.type,v.array);x=new ie(M,v.itemSize,v.normalized)}v.name!==void 0&&(x.name=v.name),_.push(x)}a.morphAttributes[f]=_}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,g=d.length;f!==g;++f){const _=d[f];a.addGroup(_.start,_.count,_.materialIndex)}const h=t.data.boundingSphere;if(h!==void 0){const f=new P;h.center!==void 0&&f.fromArray(h.center),a.boundingSphere=new Fe(f,h.radius)}return t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}}class py extends tn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=this.path===""?el.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;const o=new Zn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){let l=null;try{l=JSON.parse(c)}catch(d){i!==void 0&&i(d),console.error("THREE:ObjectLoader: Can't parse "+t+".",d.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(l,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?el.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new Zn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(t,e),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,function(){e!==void 0&&e(l)}),o=this.parseTextures(t.textures,a),c=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,r,c,o,n),u=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,u),e!==void 0){let d=!1;for(const h in a)if(a[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(l)}return l}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,i,o,a,e),l=this.parseSkeletons(t.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new qi().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=new io().fromJSON(t[r],i);n[o.uuid]=o}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new Jf;for(let r=0,a=t.length;r<a;r++){let o;const c=t[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in lu?o=lu[c.type].fromJSON(c,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new Mo;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){const c=t[a];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=Sr.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function a(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(u)}else return c.data?{data:bs(c.type,c.data),width:c.width,height:c.height}:null}if(t!==void 0&&t.length>0){const c=new Gl(e);r=new br(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,u=t.length;l<u;l++){const d=t[l],h=d.url;if(Array.isArray(h)){const f=[];for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o(m);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new mi(p.data,p.width,p.height)))}i[d.uuid]=new Vi(f)}else{const f=o(d.url);i[d.uuid]=new Vi(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:bs(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){i=new br(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){const c=t[a],l=c.url;if(Array.isArray(l)){const u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d],g=await r(f);g!==null&&(g instanceof HTMLImageElement?u.push(g):u.push(new mi(g.data,g.width,g.height)))}n[c.uuid]=new Vi(u)}else{const u=await r(c.url);n[c.uuid]=new Vi(u)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=t[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const c=e[o.image],l=c.data;let u;Array.isArray(l)?(u=new Ar,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new mi:u=new Me,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,my)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],fu),u.wrapT=n(o.wrap[1],fu)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,pu)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,pu)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),i[o.uuid]=u}return i}parseObject(t,e,n,i,r){let a;function o(h){return e[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),e[h]}function c(h){if(h!==void 0){if(Array.isArray(h)){const f=[];for(let g=0,_=h.length;g<_;g++){const m=h[g];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),n[h]}}function l(h){return i[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",h),i[h]}let u,d;switch(t.type){case"Scene":a=new Cl,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new ut(t.background):a.background=l(t.background)),t.environment!==void 0&&(a.environment=l(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new Tr(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new eo(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new Ue(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new Qa(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new Xf(t.color,t.intensity);break;case"DirectionalLight":a=new Wl(t.color,t.intensity);break;case"PointLight":a=new Wf(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new qf(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new Hf(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":a=new Vl(t.color,t.groundColor,t.intensity);break;case"LightProbe":a=new $f().fromJSON(t);break;case"SkinnedMesh":u=o(t.geometry),d=c(t.material),a=new mf(u,d),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":u=o(t.geometry),d=c(t.material),a=new Qt(u,d);break;case"InstancedMesh":u=o(t.geometry),d=c(t.material);const h=t.count,f=t.instanceMatrix,g=t.instanceColor;a=new Va(u,d,h),a.instanceMatrix=new Is(new Float32Array(f.array),16),g!==void 0&&(a.instanceColor=new Is(new Float32Array(g.array),g.itemSize));break;case"BatchedMesh":u=o(t.geometry),d=c(t.material),a=new gf(t.maxGeometryCount,t.maxVertexCount,t.maxIndexCount,d),a.geometry=u,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._visibility=t.visibility,a._active=t.active,a._bounds=t.bounds.map(_=>{const m=new $e;m.min.fromArray(_.boxMin),m.max.fromArray(_.boxMax);const p=new Fe;return p.radius=_.sphereRadius,p.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:m,sphereInitialized:_.sphereInitialized,sphere:p}}),a._maxGeometryCount=t.maxGeometryCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._geometryCount=t.geometryCount,a._matricesTexture=l(t.matricesTexture.uuid);break;case"LOD":a=new pf;break;case"Line":a=new _i(o(t.geometry),c(t.material));break;case"LineLoop":a=new _f(o(t.geometry),c(t.material));break;case"LineSegments":a=new Ln(o(t.geometry),c(t.material));break;case"PointCloud":case"Points":a=new ro(o(t.geometry),c(t.material));break;case"Sprite":a=new ff(c(t.material));break;case"Group":a=new De;break;case"Bone":a=new Pl;break;default:a=new ce}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){const h=t.children;for(let f=0;f<h.length;f++)a.add(this.parseObject(h[f],e,n,i,r))}if(t.animations!==void 0){const h=t.animations;for(let f=0;f<h.length;f++){const g=h[f];a.animations.push(r[g])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);const h=t.levels;for(let f=0;f<h.length;f++){const g=h[f],_=a.getObjectByProperty("uuid",g.object);_!==void 0&&a.addLevel(_,g.distance,g.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const my={UVMapping:qa,CubeReflectionMapping:$n,CubeRefractionMapping:gi,EquirectangularReflectionMapping:sr,EquirectangularRefractionMapping:rr,CubeUVReflectionMapping:Us},fu={RepeatWrapping:Yi,ClampToEdgeWrapping:Ve,MirroredRepeatWrapping:ar},pu={NearestFilter:Ee,NearestMipmapNearestFilter:za,NearestMipmapLinearFilter:Bi,LinearFilter:_e,LinearMipmapNearestFilter:Qs,LinearMipmapLinearFilter:An};class gy extends tn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Wn.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wn.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Wn.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Wn.add(t,c),r.manager.itemStart(t)}}let _a;class Xl{static getContext(){return _a===void 0&&(_a=new(window.AudioContext||window.webkitAudioContext)),_a}static setContext(t){_a=t}}class _y extends tn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Zn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){try{const l=c.slice(0);Xl.getContext().decodeAudioData(l,function(d){e(d)}).catch(o)}catch(l){o(l)}},n,i);function o(c){i?i(c):console.error(c),r.manager.itemError(t)}}}const mu=new Nt,gu=new Nt,Pi=new Nt;class xy{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ue,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ue,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Pi.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,a=e.near*Math.tan(Xi*e.fov*.5)/e.zoom;let o,c;gu.elements[12]=-i,mu.elements[12]=i,o=-a*e.aspect+r,c=a*e.aspect+r,Pi.elements[0]=2*e.near/(c-o),Pi.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(Pi),o=-a*e.aspect-r,c=a*e.aspect-r,Pi.elements[0]=2*e.near/(c-o),Pi.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(Pi)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(gu),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(mu)}}class Kf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_u(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=_u();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function _u(){return(typeof performance=="undefined"?Date:performance).now()}const Li=new P,xu=new Ye,vy=new P,Ii=new P;class yy extends ce{constructor(){super(),this.type="AudioListener",this.context=Xl.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Kf}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Li,xu,vy),Ii.set(0,0,-1).applyQuaternion(xu),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Li.x,i),e.positionY.linearRampToValueAtTime(Li.y,i),e.positionZ.linearRampToValueAtTime(Li.z,i),e.forwardX.linearRampToValueAtTime(Ii.x,i),e.forwardY.linearRampToValueAtTime(Ii.y,i),e.forwardZ.linearRampToValueAtTime(Ii.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(Li.x,Li.y,Li.z),e.setOrientation(Ii.x,Ii.y,Ii.z,n.x,n.y,n.z)}}class jf extends ce{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const Di=new P,vu=new Ye,My=new P,Ui=new P;class Sy extends jf{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Di,vu,My),Ui.set(0,0,1).applyQuaternion(vu);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Di.x,n),e.positionY.linearRampToValueAtTime(Di.y,n),e.positionZ.linearRampToValueAtTime(Di.z,n),e.orientationX.linearRampToValueAtTime(Ui.x,n),e.orientationY.linearRampToValueAtTime(Ui.y,n),e.orientationZ.linearRampToValueAtTime(Ui.z,n)}else e.setPosition(Di.x,Di.y,Di.z),e.setOrientation(Ui.x,Ui.y,Ui.z)}}class by{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class Qf{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Ye.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const a=this._workIndex*r;Ye.multiplyQuaternionsFlat(t,a,t,e,t,n),Ye.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=e+o;t[c]=t[c]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const ql="\\[\\]\\.:\\/",wy=new RegExp("["+ql+"]","g"),Yl="[^"+ql+"]",Ey="[^"+ql.replace("\\.","")+"]",Ay=/((?:WC+[\/:])*)/.source.replace("WC",Yl),Ty=/(WCOD+)?/.source.replace("WCOD",Ey),Cy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),Ry=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),Py=new RegExp("^"+Ay+Ty+Cy+Ry+"$"),Ly=["material","materials","bones","map"];class Iy{constructor(t,e,n){const i=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class re{constructor(t,e,n){this.path=e,this.parsedPath=n||re.parseTrackName(e),this.node=re.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new re.Composite(t,e,n):new re(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wy,"")}static parseTrackName(t){const e=Py.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ly.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=re.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[i];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}re.Composite=Iy;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Dy{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ln(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,c=t.length,l=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const h=arguments[u],f=h.uuid;let g=e[f];if(g===void 0){g=c++,e[f]=g,t.push(h);for(let _=0,m=a;_!==m;++_)r[_].push(new re(h,n[_],i[_]))}else if(g<l){o=t[g];const _=--l,m=t[_];e[m.uuid]=g,t[g]=m,e[f]=_,t[_]=h;for(let p=0,v=a;p!==v;++p){const x=r[p],M=x[_];let L=x[g];x[g]=M,L===void 0&&(L=new re(h,n[p],i[p])),x[_]=L}}else t[g]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],l=c.uuid,u=e[l];if(u!==void 0&&u>=r){const d=r++,h=t[d];e[h.uuid]=u,t[u]=h,e[l]=d,t[d]=c;for(let f=0,g=i;f!==g;++f){const _=n[f],m=_[d],p=_[u];_[u]=m,_[d]=p}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=t.length;for(let o=0,c=arguments.length;o!==c;++o){const l=arguments[o],u=l.uuid,d=e[u];if(d!==void 0)if(delete e[u],d<r){const h=--r,f=t[h],g=--a,_=t[g];e[f.uuid]=d,t[d]=f,e[_.uuid]=h,t[h]=_,t.pop();for(let m=0,p=i;m!==p;++m){const v=n[m],x=v[h],M=v[g];v[d]=x,v[h]=M,v.pop()}}else{const h=--a,f=t[h];h>0&&(e[f.uuid]=d),t[d]=f,t.pop();for(let g=0,_=i;g!==_;++g){const m=n[g];m[d]=m[h],m.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,d=new Array(l);i=r.length,n[t]=i,a.push(t),o.push(e),r.push(d);for(let h=u,f=c.length;h!==f;++h){const g=c[h];d[h]=new re(g,t,e)}return d}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=t[o];e[l]=n,a[n]=c,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class tp{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,a=r.length,o=new Array(a),c={endingStart:ki,endingEnd:ki};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ud,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case _l:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case $a:default:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const a=n===Nd;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===Dd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Gi,i.endingEnd=Gi):(t?i.endingStart=this.zeroSlopeAtStart?Gi:ki:i.endingStart=lr,e?i.endingEnd=this.zeroSlopeAtEnd?Gi:ki:i.endingEnd=lr)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=e,o[1]=r+t,c[1]=n,this}}const Uy=new Float32Array(1);class Ny extends Kn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let d=0;d!==r;++d){const h=i[d],f=h.name;let g=u[f];if(g!==void 0)++g.referenceCount,a[d]=g;else{if(g=a[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=e&&e._propertyBindings[d].binding.parsedPath;g=new Qf(re.create(n,f,_),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const d=o.actionByRoot,h=(t._localRoot||this._root).uuid;delete d[h],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new zl(new Float32Array(2),new Float32Array(2),1,Uy),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let a=typeof t=="string"?Sr.findByName(i,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=$a),c!==void 0){const d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new tp(this,a,e,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Sr.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,d=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=u,e[u]=d,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class $l{constructor(t){this.value=t}clone(){return new $l(this.value.clone===void 0?this.value:this.value.clone())}}let Oy=0;class Fy extends Kn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Oy++}),this.name="",this.usage=fr,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class By extends no{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class zy{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const yu=new Nt;class ky{constructor(t,e,n=0,i=1/0){this.ray=new Ns(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yu),this}intersectObject(t,e=!0,n=[]){return nl(t,this,n,e),n.sort(Mu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)nl(t[i],this,n,e);return n.sort(Mu),n}}function Mu(s,t){return s.distance-t.distance}function nl(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)nl(i[r],t,e,!0)}}class Gy{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Vy{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}const Su=new rt;class Hy{constructor(t=new rt(1/0,1/0),e=new rt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Su.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Su).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bu=new P,xa=new P;class Wy{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){bu.subVectors(t,this.start),xa.subVectors(this.end,this.start);const n=xa.dot(xa);let r=xa.dot(bu)/n;return e&&(r=ye(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const wu=new P;class Xy extends ce{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new Vt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,u=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Pt(i,3));const r=new Ze({fog:!1,toneMapped:!1});this.cone=new Ln(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),wu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(wu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ai=new P,va=new Nt,hc=new Nt;class qy extends Ln{constructor(t){const e=ep(t),n=new Vt,i=[],r=[],a=new ut(0,0,1),o=new ut(0,1,0);for(let l=0;l<e.length;l++){const u=e[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Pt(i,3)),n.setAttribute("color",new Pt(r,3));const c=new Ze({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");hc.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){const o=e[r];o.parent&&o.parent.isBone&&(va.multiplyMatrices(hc,o.matrixWorld),ai.setFromMatrixPosition(va),i.setXYZ(a,ai.x,ai.y,ai.z),va.multiplyMatrices(hc,o.parent.matrixWorld),ai.setFromMatrixPosition(va),i.setXYZ(a+1,ai.x,ai.y,ai.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function ep(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,ep(s.children[e]));return t}class Yy extends Qt{constructor(t,e,n){const i=new Ki(e,4,2),r=new Qe({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const $y=new P,Eu=new ut,Au=new ut;class Zy extends ce{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Pr(e);i.rotateY(Math.PI*.5),this.material=new Qe({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new ie(a,3)),this.add(new Qt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Eu.copy(this.light.color),Au.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?Eu:Au;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt($y.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Jy extends Ln{constructor(t=10,e=10,n=4473924,i=8947848){n=new ut(n),i=new ut(i);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let h=0,f=0,g=-o;h<=e;h++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const _=h===r?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const u=new Vt;u.setAttribute("position",new Pt(c,3)),u.setAttribute("color",new Pt(l,3));const d=new Ze({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ky extends Ln{constructor(t=10,e=16,n=8,i=64,r=4473924,a=8947848){r=new ut(r),a=new ut(a);const o=[],c=[];if(e>1)for(let d=0;d<e;d++){const h=d/e*(Math.PI*2),f=Math.sin(h)*t,g=Math.cos(h)*t;o.push(0,0,0),o.push(f,0,g);const _=d&1?r:a;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let d=0;d<n;d++){const h=d&1?r:a,f=t-t/n*d;for(let g=0;g<i;g++){let _=g/i*(Math.PI*2),m=Math.sin(_)*f,p=Math.cos(_)*f;o.push(m,0,p),c.push(h.r,h.g,h.b),_=(g+1)/i*(Math.PI*2),m=Math.sin(_)*f,p=Math.cos(_)*f,o.push(m,0,p),c.push(h.r,h.g,h.b)}}const l=new Vt;l.setAttribute("position",new Pt(o,3)),l.setAttribute("color",new Pt(c,3));const u=new Ze({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Tu=new P,ya=new P,Cu=new P;class jy extends ce{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Vt;i.setAttribute("position",new Pt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new Ze({fog:!1,toneMapped:!1});this.lightPlane=new _i(i,r),this.add(this.lightPlane),i=new Vt,i.setAttribute("position",new Pt([0,0,0,0,0,1],3)),this.targetLine=new _i(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Tu.setFromMatrixPosition(this.light.matrixWorld),ya.setFromMatrixPosition(this.light.target.matrixWorld),Cu.subVectors(ya,Tu),this.lightPlane.lookAt(ya),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ya),this.targetLine.scale.z=Cu.length()}}const Ma=new P,ve=new ja;class Qy extends Ln{constructor(t){const e=new Vt,n=new Ze({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(g,_){c(g),c(_)}function c(g){i.push(0,0,0),r.push(0,0,0),a[g]===void 0&&(a[g]=[]),a[g].push(i.length/3-1)}e.setAttribute("position",new Pt(i,3)),e.setAttribute("color",new Pt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const l=new ut(16755200),u=new ut(16711680),d=new ut(43775),h=new ut(16777215),f=new ut(3355443);this.setColors(l,u,d,h,f)}setColors(t,e,n,i,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;ve.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),be("c",e,t,ve,0,0,-1),be("t",e,t,ve,0,0,1),be("n1",e,t,ve,-n,-i,-1),be("n2",e,t,ve,n,-i,-1),be("n3",e,t,ve,-n,i,-1),be("n4",e,t,ve,n,i,-1),be("f1",e,t,ve,-n,-i,1),be("f2",e,t,ve,n,-i,1),be("f3",e,t,ve,-n,i,1),be("f4",e,t,ve,n,i,1),be("u1",e,t,ve,n*.7,i*1.1,-1),be("u2",e,t,ve,-n*.7,i*1.1,-1),be("u3",e,t,ve,0,i*2,-1),be("cf1",e,t,ve,-n,0,1),be("cf2",e,t,ve,n,0,1),be("cf3",e,t,ve,0,-i,1),be("cf4",e,t,ve,0,i,1),be("cn1",e,t,ve,-n,0,-1),be("cn2",e,t,ve,n,0,-1),be("cn3",e,t,ve,0,-i,-1),be("cn4",e,t,ve,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function be(s,t,e,n,i,r,a){Ma.set(i,r,a).unproject(n);const o=t[s];if(o!==void 0){const c=e.getAttribute("position");for(let l=0,u=o.length;l<u;l++)c.setXYZ(o[l],Ma.x,Ma.y,Ma.z)}}const Sa=new $e;class tM extends Ln{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Vt;r.setIndex(new ie(n,1)),r.setAttribute("position",new ie(i,3)),super(r,new Ze({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Sa.setFromObject(this.object),Sa.isEmpty())return;const e=Sa.min,n=Sa.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class eM extends Ln{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Vt;r.setIndex(new ie(n,1)),r.setAttribute("position",new Pt(i,3)),super(r,new Ze({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class nM extends _i{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Vt;a.setAttribute("position",new Pt(r,3)),a.computeBoundingSphere(),super(a,new Ze({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Vt;c.setAttribute("position",new Pt(o,3)),c.computeBoundingSphere(),this.add(new Qt(c,new Qe({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Ru=new P;let ba,uc;class iM extends ce{constructor(t=new P(0,0,1),e=new P(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",ba===void 0&&(ba=new Vt,ba.setAttribute("position",new Pt([0,0,0,0,1,0],3)),uc=new Pn(0,.5,1,5,1),uc.translate(0,-.5,0)),this.position.copy(e),this.line=new _i(ba,new Ze({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Qt(uc,new Qe({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Ru.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Ru,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class sM extends Ln{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Vt;i.setAttribute("position",new Pt(e,3)),i.setAttribute("color",new Pt(n,3));const r=new Ze({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new ut,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class rM{constructor(){this.type="ShapePath",this.color=new ut,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new gr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const v=[];for(let x=0,M=p.length;x<M;x++){const L=p[x],E=new qi;E.curves=L.curves,v.push(E)}return v}function n(p,v){const x=v.length;let M=!1;for(let L=x-1,E=0;E<x;L=E++){let y=v[L],T=v[E],N=T.x-y.x,S=T.y-y.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(y=v[E],N=-N,T=v[L],S=-S),p.y<y.y||p.y>T.y)continue;if(p.y===y.y){if(p.x===y.x)return!0}else{const R=S*(p.x-y.x)-N*(p.y-y.y);if(R===0)return!0;if(R<0)continue;M=!M}}else{if(p.y!==y.y)continue;if(T.x<=p.x&&p.x<=y.x||y.x<=p.x&&p.x<=T.x)return!0}}return M}const i=Cn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new qi,c.curves=o.curves,l.push(c),l;let u=!i(r[0].getPoints());u=t?!u:u;const d=[],h=[];let f=[],g=0,_;h[g]=void 0,f[g]=[];for(let p=0,v=r.length;p<v;p++)o=r[p],_=o.getPoints(),a=i(_),a=t?!a:a,a?(!u&&h[g]&&g++,h[g]={s:new qi,p:_},h[g].s.curves=o.curves,u&&g++,f[g]=[]):f[g].push({h:o,p:_[0]});if(!h[0])return e(r);if(h.length>1){let p=!1,v=0;for(let x=0,M=h.length;x<M;x++)d[x]=[];for(let x=0,M=h.length;x<M;x++){const L=f[x];for(let E=0;E<L.length;E++){const y=L[E];let T=!0;for(let N=0;N<h.length;N++)n(y.p,h[N].p)&&(x!==N&&v++,T?(T=!1,d[N].push(y)):p=!0);T&&d[x].push(y)}}v>0&&p===!1&&(f=d)}let m;for(let p=0,v=h.length;p<v;p++){c=h[p].s,l.push(c),m=f[p];for(let x=0,M=m.length;x<M;x++)c.holes.push(m[x].h)}return l}}class aM extends yn{constructor(t=1,e=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);const oM=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:cl,AddEquation:hi,AddOperation:xd,AdditiveAnimationBlendMode:_l,AdditiveBlending:Ts,AgXToneMapping:bd,AlphaFormat:Cd,AlwaysCompare:Xd,AlwaysDepth:ud,AlwaysStencilFunc:qc,AmbientLight:Xf,AnimationAction:tp,AnimationClip:Sr,AnimationLoader:oy,AnimationMixer:Ny,AnimationObjectGroup:Dy,AnimationUtils:iy,ArcCurve:xf,ArrayCamera:lf,ArrowHelper:iM,AttachedBindMode:yc,Audio:jf,AudioAnalyser:by,AudioContext:Xl,AudioListener:yy,AudioLoader:_y,AxesHelper:sM,BackSide:Oe,BasicDepthPacking:Od,BasicShadowMap:pp,BatchedMesh:gf,Bone:Pl,BooleanKeyframeTrack:ji,Box2:Hy,Box3:$e,Box3Helper:eM,BoxGeometry:jn,BoxHelper:tM,BufferAttribute:ie,BufferGeometry:Vt,BufferGeometryLoader:Jf,ByteType:Ad,Cache:Wn,Camera:ja,CameraHelper:Qy,CanvasTexture:oo,CapsuleGeometry:Rr,CatmullRomCurve3:vf,CineonToneMapping:Md,CircleGeometry:lo,ClampToEdgeWrapping:Ve,Clock:Kf,Color:ut,ColorKeyframeTrack:kl,ColorManagement:he,CompressedArrayTexture:Av,CompressedCubeTexture:Tv,CompressedTexture:ao,CompressedTextureLoader:cy,ConeGeometry:ho,ConstantAlphaFactor:cd,ConstantColorFactor:ad,CubeCamera:Qd,CubeReflectionMapping:$n,CubeRefractionMapping:gi,CubeTexture:Ar,CubeTextureLoader:ly,CubeUVReflectionMapping:Us,CubicBezierCurve:Il,CubicBezierCurve3:yf,CubicInterpolant:Bf,CullFaceBack:mc,CullFaceFront:qu,CullFaceFrontBack:fp,CullFaceNone:Xu,Curve:Mn,CurvePath:Sf,CustomBlending:$u,CustomToneMapping:Sd,CylinderGeometry:Pn,Cylindrical:Vy,Data3DTexture:Ml,DataArrayTexture:Ja,DataTexture:mi,DataTextureLoader:hy,DataUtils:ym,DecrementStencilOp:Ep,DecrementWrapStencilOp:Tp,DefaultLoadingManager:Gf,DepthFormat:pi,DepthStencilFormat:$i,DepthTexture:El,DetachedBindMode:Ed,DirectionalLight:Wl,DirectionalLightHelper:jy,DiscreteInterpolant:zf,DisplayP3ColorSpace:Za,DodecahedronGeometry:uo,DoubleSide:mn,DstAlphaFactor:ed,DstColorFactor:id,DynamicCopyUsage:Gp,DynamicDrawUsage:di,DynamicReadUsage:Bp,EdgesGeometry:bf,EllipseCurve:co,EqualCompare:Gd,EqualDepth:fd,EqualStencilFunc:Lp,EquirectangularReflectionMapping:sr,EquirectangularRefractionMapping:rr,Euler:hn,EventDispatcher:Kn,ExtrudeGeometry:po,FileLoader:Zn,Float16BufferAttribute:Am,Float32BufferAttribute:Pt,FloatType:on,Fog:Tr,FogExp2:eo,FramebufferTexture:Ev,FrontSide:Rn,Frustum:Os,GLBufferAttribute:zy,GLSL1:Hp,GLSL3:Yc,GreaterCompare:Vd,GreaterDepth:md,GreaterEqualCompare:Wd,GreaterEqualDepth:pd,GreaterEqualStencilFunc:Np,GreaterStencilFunc:Dp,GridHelper:Jy,Group:De,HalfFloatType:Rs,HemisphereLight:Vl,HemisphereLightHelper:Zy,IcosahedronGeometry:Ds,ImageBitmapLoader:gy,ImageLoader:br,ImageUtils:yl,IncrementStencilOp:wp,IncrementWrapStencilOp:Ap,InstancedBufferAttribute:Is,InstancedBufferGeometry:Zf,InstancedInterleavedBuffer:By,InstancedMesh:Va,Int16BufferAttribute:wm,Int32BufferAttribute:Em,Int8BufferAttribute:Mm,IntType:ll,InterleavedBuffer:no,InterleavedBufferAttribute:Zi,Interpolant:Lr,InterpolateDiscrete:or,InterpolateLinear:cr,InterpolateSmooth:Na,InvertStencilOp:Cp,KeepStencilOp:Oi,KeyframeTrack:Sn,LOD:pf,LatheGeometry:Cr,Layers:Ka,LessCompare:kd,LessDepth:dd,LessEqualCompare:xl,LessEqualDepth:ir,LessEqualStencilFunc:Ip,LessStencilFunc:Pp,Light:yi,LightProbe:$f,Line:_i,Line3:Wy,LineBasicMaterial:Ze,LineCurve:Dl,LineCurve3:Mf,LineDashedMaterial:Nf,LineLoop:_f,LineSegments:Ln,LinearDisplayP3ColorSpace:Er,LinearFilter:_e,LinearInterpolant:zl,LinearMipMapLinearFilter:xp,LinearMipMapNearestFilter:_p,LinearMipmapLinearFilter:An,LinearMipmapNearestFilter:Qs,LinearSRGBColorSpace:Jn,LinearToneMapping:vd,LinearTransfer:hr,Loader:tn,LoaderUtils:el,LoadingManager:Gl,LoopOnce:Dd,LoopPingPong:Nd,LoopRepeat:Ud,LuminanceAlphaFormat:Pd,LuminanceFormat:Rd,MOUSE:up,Material:He,MaterialLoader:Mo,MathUtils:ui,Matrix3:Wt,Matrix4:Nt,MaxEquation:vc,Mesh:Qt,MeshBasicMaterial:Qe,MeshDepthMaterial:Al,MeshDistanceMaterial:Tl,MeshLambertMaterial:kn,MeshMatcapMaterial:Uf,MeshNormalMaterial:Df,MeshPhongMaterial:Lf,MeshPhysicalMaterial:Pf,MeshStandardMaterial:Fl,MeshToonMaterial:If,MinEquation:xc,MirroredRepeatWrapping:ar,MixOperation:_d,MultiplyBlending:_c,MultiplyOperation:wr,NearestFilter:Ee,NearestMipMapLinearFilter:gp,NearestMipMapNearestFilter:mp,NearestMipmapLinearFilter:Bi,NearestMipmapNearestFilter:za,NeutralToneMapping:wd,NeverCompare:zd,NeverDepth:hd,NeverStencilFunc:Rp,NoBlending:Xn,NoColorSpace:Gn,NoToneMapping:qn,NormalAnimationBlendMode:$a,NormalBlending:Wi,NotEqualCompare:Hd,NotEqualDepth:gd,NotEqualStencilFunc:Up,NumberKeyframeTrack:yr,Object3D:ce,ObjectLoader:py,ObjectSpaceNormalMap:Bd,OctahedronGeometry:Pr,OneFactor:ju,OneMinusConstantAlphaFactor:ld,OneMinusConstantColorFactor:od,OneMinusDstAlphaFactor:nd,OneMinusDstColorFactor:sd,OneMinusSrcAlphaFactor:Ba,OneMinusSrcColorFactor:td,OrthographicCamera:Qa,P3Primaries:dr,PCFShadowMap:ol,PCFSoftShadowMap:Yu,PMREMGenerator:Zc,Path:gr,PerspectiveCamera:Ue,Plane:li,PlaneGeometry:pn,PlaneHelper:nM,PointLight:Wf,PointLightHelper:Yy,Points:ro,PointsMaterial:so,PolarGridHelper:Ky,PolyhedronGeometry:vi,PositionalAudio:Sy,PropertyBinding:re,PropertyMixer:Qf,QuadraticBezierCurve:Ul,QuadraticBezierCurve3:Nl,Quaternion:Ye,QuaternionKeyframeTrack:Bs,QuaternionLinearInterpolant:kf,RED_GREEN_RGTC2_Format:Wc,RED_RGTC1_Format:Id,REVISION:Xa,RGBADepthPacking:Fd,RGBAFormat:je,RGBAIntegerFormat:ml,RGBA_ASTC_10x10_Format:Bc,RGBA_ASTC_10x5_Format:Nc,RGBA_ASTC_10x6_Format:Oc,RGBA_ASTC_10x8_Format:Fc,RGBA_ASTC_12x10_Format:zc,RGBA_ASTC_12x12_Format:kc,RGBA_ASTC_4x4_Format:Tc,RGBA_ASTC_5x4_Format:Cc,RGBA_ASTC_5x5_Format:Rc,RGBA_ASTC_6x5_Format:Pc,RGBA_ASTC_6x6_Format:Lc,RGBA_ASTC_8x5_Format:Ic,RGBA_ASTC_8x6_Format:Dc,RGBA_ASTC_8x8_Format:Uc,RGBA_BPTC_Format:Ua,RGBA_ETC2_EAC_Format:Ac,RGBA_PVRTC_2BPPV1_Format:wc,RGBA_PVRTC_4BPPV1_Format:bc,RGBA_S3TC_DXT1_Format:La,RGBA_S3TC_DXT3_Format:Ia,RGBA_S3TC_DXT5_Format:Da,RGB_BPTC_SIGNED_Format:Gc,RGB_BPTC_UNSIGNED_Format:Vc,RGB_ETC1_Format:gl,RGB_ETC2_Format:Ec,RGB_PVRTC_2BPPV1_Format:Sc,RGB_PVRTC_4BPPV1_Format:Mc,RGB_S3TC_DXT1_Format:Pa,RGFormat:Ld,RGIntegerFormat:pl,RawShaderMaterial:Rf,Ray:Ns,Raycaster:ky,Rec709Primaries:ur,RectAreaLight:qf,RedFormat:dl,RedIntegerFormat:fl,ReinhardToneMapping:yd,RenderTarget:Zd,RepeatWrapping:Yi,ReplaceStencilOp:bp,ReverseSubtractEquation:Ju,RingGeometry:mo,SIGNED_RED_GREEN_RGTC2_Format:Xc,SIGNED_RED_RGTC1_Format:Hc,SRGBColorSpace:Te,SRGBTransfer:fe,Scene:Cl,ShaderChunk:$t,ShaderLib:vn,ShaderMaterial:un,ShadowMaterial:Cf,Shape:qi,ShapeGeometry:go,ShapePath:rM,ShapeUtils:Cn,ShortType:Td,Skeleton:io,SkeletonHelper:qy,SkinnedMesh:mf,Source:Vi,Sphere:Fe,SphereGeometry:Ki,Spherical:Gy,SphericalHarmonics3:Yf,SplineCurve:Ol,SpotLight:Hf,SpotLightHelper:Xy,Sprite:ff,SpriteMaterial:Rl,SrcAlphaFactor:Fa,SrcAlphaSaturateFactor:rd,SrcColorFactor:Qu,StaticCopyUsage:kp,StaticDrawUsage:fr,StaticReadUsage:Fp,StereoCamera:xy,StreamCopyUsage:Vp,StreamDrawUsage:Op,StreamReadUsage:zp,StringKeyframeTrack:Qi,SubtractEquation:Zu,SubtractiveBlending:gc,TOUCH:dp,TangentSpaceNormalMap:xi,TetrahedronGeometry:_o,Texture:Me,TextureLoader:Vf,TorusGeometry:xo,TorusKnotGeometry:vo,Triangle:cn,TriangleFanDrawMode:Mp,TriangleStripDrawMode:yp,TrianglesDrawMode:vp,TubeGeometry:yo,UVMapping:qa,Uint16BufferAttribute:Sl,Uint32BufferAttribute:bl,Uint8BufferAttribute:Sm,Uint8ClampedBufferAttribute:bm,Uniform:$l,UniformsGroup:Fy,UniformsLib:vt,UniformsUtils:jd,UnsignedByteType:Yn,UnsignedInt248Type:fi,UnsignedIntType:Hn,UnsignedShort4444Type:hl,UnsignedShort5551Type:ul,UnsignedShortType:Ya,VSMShadowMap:En,Vector2:rt,Vector3:P,Vector4:ue,VectorKeyframeTrack:Mr,VideoTexture:wv,WebGL1Renderer:uf,WebGL3DRenderTarget:lm,WebGLArrayRenderTarget:cm,WebGLCoordinateSystem:Tn,WebGLCubeRenderTarget:tf,WebGLMultipleRenderTargets:aM,WebGLRenderTarget:yn,WebGLRenderer:hf,WebGLUtils:cf,WebGPUCoordinateSystem:pr,WireframeGeometry:Tf,WrapAroundEnding:lr,ZeroCurvatureEnding:ki,ZeroFactor:Ku,ZeroSlopeEnding:Gi,ZeroStencilOp:Sp,_SRGBAFormat:ka,createCanvasElement:Yd},Symbol.toStringTag,{value:"Module"})),bn=new Nt,Pu=new Nt,wa=new Nt,cM=new Wt,oe=new P,Ne=new P,zn=new P,Ms=new P,Lu=new Fe,Iu=new ut,Ks=new ut,Ea=new ut,Du=new Os,Uu=new Nt,Aa=s=>(s.r+s.g+s.b)/3,we=s=>Math.round(255*Math.min(1,Math.max(0,s<=.0031308?s*12.92:1.055*Math.pow(s,1/2.4)-.055))),Nu=new WeakMap;function lM(s){const t=s&&s.image;if(!t||!(t.width||t.videoWidth))return null;let e=Nu.get(t);if(e)return e;try{const n=document.createElement("canvas");n.width=n.height=4;const i=n.getContext("2d");i.drawImage(t,0,0,4,4);const r=i.getImageData(0,0,4,4).data;let a=0,o=0,c=0,l=0;for(let u=0;u<r.length;u+=4)r[u+3]<20||(a+=r[u],o+=r[u+1],c+=r[u+2],l++);e=new ut,l?e.setRGB(a/l/255,o/l/255,c/l/255,Te):e.setRGB(1,1,1)}catch(n){e=new ut(1,1,1)}return Nu.set(t,e),e}const an=[new P,new P,new P],Ou=new WeakMap,hM=new ut;function uM(s){const t=s&&s.image;if(!t||!(t.width||t.videoWidth))return null;let e=Ou.get(t);if(e!==void 0)return e;try{const n=Math.min(64,t.width||64),i=Math.min(64,t.height||64),r=document.createElement("canvas");r.width=n,r.height=i;const a=r.getContext("2d");a.drawImage(t,0,0,n,i),e={w:n,h:i,px:a.getImageData(0,0,n,i).data,wrap:s.wrapS===Yi}}catch(n){e=null}return Ou.set(t,e),e}const dc=new Float32Array(256).map((s,t)=>{const e=t/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)});function dM(s,t,e,n){t=t-Math.floor(t),e=e-Math.floor(e),n&&(e=1-e);const i=Math.min(s.w-1,t*s.w|0),r=Math.min(s.h-1,e*s.h|0),a=(r*s.w+i)*4;return hM.setRGB(dc[s.px[a]],dc[s.px[a+1]],dc[s.px[a+2]])}class np{constructor({maxPixelRatio:t=.75}={}){this.isSoft=!0,this.domElement=document.createElement("canvas"),this.ctx=this.domElement.getContext("2d",{alpha:!1}),this.pr=Math.min(window.devicePixelRatio||1,t),this.maxPR=t,this.w=1,this.h=1,this.clear=new ut(0),this.shadowMap={enabled:!1,type:0},this.outputColorSpace=Te,this.toneMapping=0,this.toneMappingExposure=1,this.info={render:{triangles:0,calls:0}},this.capabilities={getMaxAnisotropy:()=>1,isWebGL2:!1},this.list=[]}getContext(){return null}setClearColor(t){this.clear.set(t)}getClearColor(t){return(t||new ut).copy(this.clear)}setPixelRatio(t){this.pr=Math.min(t||1,this.maxPR),this.setSize(this.w,this.h,!1)}getPixelRatio(){return this.pr}setSize(t,e,n=!0){this.w=t,this.h=e,this.domElement.width=Math.max(1,Math.round(t*this.pr)),this.domElement.height=Math.max(1,Math.round(e*this.pr)),n&&(this.domElement.style.width=t+"px",this.domElement.style.height=e+"px")}getSize(t){return(t||new rt).set(this.w,this.h)}dispose(){}compile(){}setAnimationLoop(){}forceContextLoss(){}render(t,e){const n=this.ctx,i=this.domElement.width,r=this.domElement.height,a=i/2,o=r/2;t.matrixWorldAutoUpdate!==!1&&t.updateMatrixWorld(),e.parent===null&&e.matrixWorldAutoUpdate!==!1&&e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),Du.setFromProjectionMatrix(wa);let c=0,l=null,u=0;t.traverseVisible(y=>{y.isAmbientLight?c+=y.intensity:y.isHemisphereLight?c+=y.intensity*.5*(Aa(y.color)+Aa(y.groundColor)):y.isDirectionalLight&&(l?c+=y.intensity*.35*Aa(y.color):(l=new P().setFromMatrixPosition(y.matrixWorld).sub(oe.setFromMatrixPosition(y.target.matrixWorld)).normalize(),u=y.intensity*Aa(y.color)))}),c=Math.max(.25,c/Math.PI),u/=Math.PI,l||(l=new P(.3,1,.5).normalize(),u=.6);const d=this.toneMapping===cl,h=this.toneMappingExposure||1,f=d?y=>(y*=h*.6,y*(2.51*y+.03)/(y*(2.43*y+.59)+.14)):y=>y,g=t.fog;g&&Ea.copy(g.color);const _=t.background&&t.background.isColor?t.background:this.clear,m=t.userData.softSky;if(m){const y=n.createLinearGradient(0,0,0,r);m.forEach((T,N)=>y.addColorStop(N/(m.length-1),T)),n.fillStyle=y}else n.fillStyle=`rgb(${we(_.r)},${we(_.g)},${we(_.b)})`;n.fillRect(0,0,i,r);const p=this.list;p.length=0;let v=0;const x=.6*this.pr*this.pr,M=y=>(y.applyMatrix4(wa),y),L=(y,T,N,S,R,J,X)=>{let D=R.isMeshBasicMaterial||R.isSpriteMaterial||R.isPointsMaterial||R.isShaderMaterial?1:c+u*Math.max(0,T*l.x+N*l.y+S*l.z),O=y.r*D,U=y.g*D,z=y.b*D;if(R.emissive){const B=R.emissiveIntensity==null?1:R.emissiveIntensity;O+=R.emissive.r*B,U+=R.emissive.g*B,z+=R.emissive.b*B}if(R.toneMapped!==!1&&!R.isShaderMaterial&&(O=f(O),U=f(U),z=f(z)),g&&R.fog!==!1){const B=g.isFogExp2?1-Math.exp(-((g.density*J)**2)):Math.min(1,Math.max(0,(J-g.near)/(g.far-g.near)));O+=(Ea.r-O)*B,U+=(Ea.g-U)*B,z+=(Ea.b-z)*B}return X<1?`rgba(${we(O)},${we(U)},${we(z)},${X.toFixed(2)})`:`rgb(${we(O)},${we(U)},${we(z)})`},E=Ms.setFromMatrixPosition(e.matrixWorld).clone();t.traverseVisible(y=>{const T=Array.isArray(y.material)?y.material[0]:y.material;if(!T||T.visible===!1)return;if(y.isSprite){oe.setFromMatrixPosition(y.matrixWorld);const lt=oe.distanceTo(E);if(M(oe),oe.z<-1||oe.z>1)return;const G=new P().setFromMatrixScale(y.matrixWorld),nt=Ne.copy(zn.setFromMatrixPosition(y.matrixWorld)).add(oe.clone().set(0,0,0)).applyMatrix4(e.matrixWorldInverse),gt=e.projectionMatrix.elements[5]*o/Math.max(.01,-nt.z),yt=G.x*gt*.5,bt=G.y*gt*.5;if(yt<.5)return;p.push({k:1,z:-nt.z,ro:y.renderOrder||0,x:(oe.x+1)*a,y:(1-oe.y)*o,rw:yt,rh:bt,mat:T,add:T.blending===Ts,op:T.opacity==null?1:T.opacity,depth:lt});return}if(y.isPoints){const lt=y.geometry.attributes.position,G=y.geometry.attributes.size,nt=y.geometry.attributes.color;if(!lt)return;Pu.multiplyMatrices(e.matrixWorldInverse,y.matrixWorld),bn.multiplyMatrices(wa,y.matrixWorld);const gt=T.uniforms&&T.uniforms.scale?T.uniforms.scale.value:300,yt=Math.min(lt.count,900),bt=T.color||Ks.set(1,1,1);for(let ft=0;ft<yt;ft++){const Tt=G?G.getX(ft):T.size||1;if(Tt<=0||(oe.fromBufferAttribute(lt,ft),Ne.copy(oe).applyMatrix4(Pu),Ne.z>=-.05)||(oe.applyMatrix4(bn),Math.abs(oe.x)>1.1||Math.abs(oe.y)>1.1))continue;const k=G?Tt*gt/-Ne.z*this.pr:T.sizeAttenuation===!1?Tt*this.pr:Tt*o/-Ne.z,w=nt?Ks.setRGB(nt.getX(ft),nt.getY(ft),nt.getZ(ft)):bt;p.push({k:2,z:-Ne.z,ro:y.renderOrder||0,x:(oe.x+1)*a,y:(1-oe.y)*o,r:Math.max(.6,k*.35),c:`rgb(${we(w.r*(nt?1.4:1))},${we(w.g*(nt?1.4:1))},${we(w.b*(nt?1.4:1))})`,add:T.blending===Ts,op:T.opacity==null?1:T.opacity})}return}if(!y.isMesh)return;const N=y.geometry,S=N&&N.attributes.position;if(!S||T.isShaderMaterial&&!(T.userData&&T.userData.softColor))return;const R=y.isInstancedMesh?y.count:1;N.boundingSphere||N.computeBoundingSphere();const J=T.map&&T.map.image,X=N.index,D=X?X.count/3:S.count/3,O=T.side,U=T.transparent?T.opacity==null?1:T.opacity:1;if(U<.02)return;const z=new ut().copy(T.userData&&T.userData.softColor?new ut(T.userData.softColor):T.color||Ks.set(1,1,1)),B=J?uM(T.map):null,W=N.attributes.uv,tt=T.userData&&T.userData.softBack?1e9-T.userData.softBack:0,st=J&&!(B&&W)?lM(T.map):null;st&&z.multiply(st);const ot=T.vertexColors&&N.attributes.color;for(let lt=0;lt<R;lt++){if(y.isInstancedMesh?(y.getMatrixAt(lt,Uu),bn.multiplyMatrices(y.matrixWorld,Uu)):bn.copy(y.matrixWorld),Lu.copy(N.boundingSphere).applyMatrix4(bn),y.frustumCulled!==!1&&!Du.intersectsSphere(Lu))continue;const G=y.isInstancedMesh&&y.instanceColor?Ks.fromBufferAttribute(y.instanceColor,lt):null,nt=G?z.clone().multiply(G):z;if(J&&S.count===4&&(J.width||J.videoWidth)&&T.map.repeat.x===1&&T.map.repeat.y===1){const yt=[];let bt=0,ft=!0;for(let Tt=0;Tt<4;Tt++){if(oe.fromBufferAttribute(S,Tt).applyMatrix4(bn),Ne.copy(oe).applyMatrix4(e.matrixWorldInverse),Ne.z>=-.05){ft=!1;break}bt+=-Ne.z,M(oe),yt.push([(oe.x+1)*a,(1-oe.y)*o])}if(ft){const Tt=N.attributes.uv,k=[];for(let w=0;w<4;w++)k.push([Tt.getX(w),Tt.getY(w)]);p.push({k:3,z:tt||bt/4,ro:y.renderOrder||0,P:yt,U:k,img:J,op:U,flip:T.map.flipY!==!1,dt:T.depthTest===!1});continue}}cM.getNormalMatrix(bn);const gt=D>4e3?2:1;for(let yt=0;yt<D;yt+=gt){const bt=X?X.getX(yt*3):yt*3,ft=X?X.getX(yt*3+1):yt*3+1,Tt=X?X.getX(yt*3+2):yt*3+2;oe.fromBufferAttribute(S,bt).applyMatrix4(bn),Ne.fromBufferAttribute(S,ft).applyMatrix4(bn),zn.fromBufferAttribute(S,Tt).applyMatrix4(bn);const k=Ne.x-oe.x,w=Ne.y-oe.y,H=Ne.z-oe.z,$=zn.x-oe.x,A=zn.y-oe.y,Q=zn.z-oe.z;let ht=w*Q-H*A,mt=H*$-k*Q,Et=k*A-w*$;const zt=Math.hypot(ht,mt,Et)||1;ht/=zt,mt/=zt,Et/=zt;const I=(oe.x+Ne.x+zn.x)/3,b=(oe.y+Ne.y+zn.y)/3,K=(oe.z+Ne.z+zn.z)/3,et=ht*(E.x-I)+mt*(E.y-b)+Et*(E.z-K);if(O===Rn&&et<=0||O===Oe&&et>=0)continue;et<0&&(ht=-ht,mt=-mt,Et=-Et);const ct=Math.hypot(E.x-I,E.y-b,E.z-K);an[0].copy(oe).applyMatrix4(e.matrixWorldInverse),an[1].copy(Ne).applyMatrix4(e.matrixWorldInverse),an[2].copy(zn).applyMatrix4(e.matrixWorldInverse);const at=-Math.max(.05,e.near);let Dt;if(an[0].z<=at&&an[1].z<=at&&an[2].z<=at)Dt=an;else{if(an[0].z>at&&an[1].z>at&&an[2].z>at)continue;Dt=[];for(let Rt=0;Rt<3;Rt++){const wt=an[Rt],At=an[(Rt+1)%3],Jt=wt.z<=at,kt=At.z<=at;if(Jt&&Dt.push(wt.clone()),Jt!==kt){const se=(at-wt.z)/(At.z-wt.z);Dt.push(wt.clone().lerp(At,se))}}if(Dt.length<3)continue}const It=new Array(Dt.length*2);let pt=1e9,xt=-1e9,Ot=1e9,dt=-1e9,pe=0;for(let Rt=0;Rt<Dt.length;Rt++){Ms.copy(Dt[Rt]),pe-=Ms.z,Ms.applyMatrix4(e.projectionMatrix);const wt=(Ms.x+1)*a,At=(1-Ms.y)*o;It[Rt*2]=wt,It[Rt*2+1]=At,wt<pt&&(pt=wt),wt>xt&&(xt=wt),At<Ot&&(Ot=At),At>dt&&(dt=At)}if(xt<0||pt>i||dt<0||Ot>r||Dt===an&&Math.abs((It[2]-It[0])*(It[5]-It[1])-(It[4]-It[0])*(It[3]-It[1]))*.5<x)continue;let Ht=nt;ot?Ht=Iu.fromBufferAttribute(ot,bt).multiply(nt):B&&W&&(Ht=Iu.copy(nt).multiply(dM(B,(W.getX(bt)+W.getX(ft)+W.getX(Tt))/3,(W.getY(bt)+W.getY(ft)+W.getY(Tt))/3,T.map.flipY!==!1))),p.push({k:0,z:tt||pe/Dt.length,ro:y.renderOrder||0,pts:It,c:L(Ht,ht,mt,Et,T,ct,U),add:T.blending===Ts}),v++}}}),p.sort((y,T)=>y.ro-T.ro||T.z-y.z);for(const y of p)if(y.k===0){const T=y.pts;n.globalCompositeOperation=y.add?"lighter":"source-over",n.fillStyle=y.c,n.strokeStyle=y.c,n.lineWidth=.6,n.beginPath(),n.moveTo(T[0],T[1]);for(let N=2;N<T.length;N+=2)n.lineTo(T[N],T[N+1]);n.closePath(),n.fill(),y.add||n.stroke()}else if(y.k===1){const T=y.mat,N=T.color||Ks.set(1,1,1),S=y.op;n.globalCompositeOperation=y.add?"lighter":"source-over";const R=T.map&&T.map.image;if(!R||R.width<=64&&y.add){const X=n.createRadialGradient(y.x,y.y,0,y.x,y.y,Math.max(y.rw,y.rh));X.addColorStop(0,`rgba(${we(N.r)},${we(N.g)},${we(N.b)},${S})`),X.addColorStop(.35,`rgba(${we(N.r)},${we(N.g)},${we(N.b)},${S*.45})`),X.addColorStop(1,`rgba(${we(N.r)},${we(N.g)},${we(N.b)},0)`),n.fillStyle=X,n.save(),n.translate(y.x,y.y),n.scale(1,y.rh/Math.max(.01,y.rw)),n.translate(-y.x,-y.y),n.beginPath(),n.arc(y.x,y.y,y.rw,0,6.283),n.fill(),n.restore()}else{n.globalAlpha=S;try{n.drawImage(R,y.x-y.rw,y.y-y.rh,y.rw*2,y.rh*2)}catch(X){}n.globalAlpha=1}}else if(y.k===2)n.globalCompositeOperation=y.add?"lighter":"source-over",n.globalAlpha=y.op,n.fillStyle=y.c,n.beginPath(),n.arc(y.x,y.y,y.r,0,6.283),n.fill(),n.globalAlpha=1;else{const T=y.img,N=T.width||T.videoWidth,S=T.height||T.videoHeight;n.globalCompositeOperation="source-over",n.globalAlpha=y.op;const[R,J,X]=y.P,[D,O,U]=y.U.map(([B,W])=>[B*N,(y.flip?1-W:W)*S]),z=D[0]*(O[1]-U[1])+O[0]*(U[1]-D[1])+U[0]*(D[1]-O[1]);if(Math.abs(z)>1e-6){const B=(R[0]*(O[1]-U[1])+J[0]*(U[1]-D[1])+X[0]*(D[1]-O[1]))/z,W=(R[1]*(O[1]-U[1])+J[1]*(U[1]-D[1])+X[1]*(D[1]-O[1]))/z,tt=(R[0]*(U[0]-O[0])+J[0]*(D[0]-U[0])+X[0]*(O[0]-D[0]))/z,st=(R[1]*(U[0]-O[0])+J[1]*(D[0]-U[0])+X[1]*(O[0]-D[0]))/z,ot=(R[0]*(O[0]*U[1]-U[0]*O[1])+J[0]*(U[0]*D[1]-D[0]*U[1])+X[0]*(D[0]*O[1]-O[0]*D[1]))/z,lt=(R[1]*(O[0]*U[1]-U[0]*O[1])+J[1]*(U[0]*D[1]-D[0]*U[1])+X[1]*(D[0]*O[1]-O[0]*D[1]))/z;n.save(),n.beginPath(),n.moveTo(y.P[0][0],y.P[0][1]);for(const G of[y.P[1],y.P[3],y.P[2]])n.lineTo(G[0],G[1]);n.closePath(),n.clip(),n.setTransform(B,W,tt,st,ot,lt);try{n.drawImage(T,0,0)}catch(G){}n.restore()}n.globalAlpha=1}n.globalCompositeOperation="source-over",this.info.render.triangles=v,this.info.render.calls=p.length}}const fM=/swiftshader|llvmpipe|softpipe|basic render|microsoft basic|software|mesa offscreen|nouveau|nv[5-9a][0-9a-f]\b|geforce (8|9|g|gt )?[1-3]\d0\b|intel.*(gma|hd graphics( [2-5]\d{3}|\s*$|\)|,)|g41|g45|q45)/i,pM=()=>{try{return/[?&]gl=soft\b/.test(location.search)}catch(s){return!1}};function mM(s){try{const t=s.getContext(),e=t.getExtension("WEBGL_debug_renderer_info");return String(e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER))}catch(t){return""}}function gM(s,t){if(!pM()){const n=[t,{...t,antialias:!1,powerPreference:"default"},{...t,antialias:!1,powerPreference:"low-power",precision:"mediump",failIfMajorPerformanceCaveat:!1}];for(const i of n)try{const r=new s.WebGLRenderer(i);if(r.getContext())return r.mrjGpu=mM(r),r.mrjWebGL1=!r.capabilities.isWebGL2,r.mrjWeak=r.mrjWebGL1||fM.test(r.mrjGpu),r}catch(r){}}const e=new np;return e.mrjGpu="canvas2d",e.mrjWeak=!0,e}function _M(s){let t=s.querySelector(":scope > .gl-msg");return t||(t=document.createElement("div"),t.className="gl-msg",t.style.cssText="position:absolute;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;background:rgba(10,20,40,.55);color:#fff;font:700 20px Fredoka,system-ui,sans-serif;text-align:center;padding:20px;pointer-events:none",s.appendChild(t)),t}function il(s){const t=s.querySelector(":scope > .gl-msg");t&&t.remove()}function xM(s,t,{onRestored:e,onFallback:n,waitMs:i=2500}={}){const r={lost:!1,count:0};if(s.isSoft)return r;const a=s.domElement;let o=0,c=!1;const l=()=>{if(!c){c=!0,clearTimeout(o),r.lost=!1,il(t);try{n&&n()}catch(u){console.error(u)}}};return a.addEventListener("webglcontextlost",u=>{if(!c){if(u.preventDefault(),r.lost=!0,r.count++,r.count>=2){l();return}_M(t).innerHTML="<p>Loading pictures… 🔧</p>",clearTimeout(o),o=setTimeout(()=>{r.lost&&l()},i)}},!1),a.addEventListener("webglcontextrestored",()=>{if(!c){r.lost=!1,clearTimeout(o),il(t);try{e&&e(r.count)}catch(u){}}},!1),r}function vM(s,t,e){const n="Something went wrong loading the game. Tap to try again.";s.innerHTML='<div class="fatal gl-fallback"><h2></h2><p></p><button type="button" class="go">Try again</button></div>',s.querySelector("h2").textContent=t,s.querySelector("p").textContent=n,s.querySelector("button").addEventListener("click",()=>location.reload())}const yM="modulepreload",MM=function(s,t){return new URL(s,t).href},Fu={},SM=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){let a=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=a(e.map(u=>{if(u=MM(u,n),u in Fu)return;Fu[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!n)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===u&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":yM,d||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),d)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};function So(s,t="custom"){const e=(s.items||[]).map((n,i)=>{const r=Array.isArray(n.wrong)?n.wrong.filter(Boolean):[n.wrong1,n.wrong2,n.wrong3].filter(Boolean);return{item_id:String(n.item_id||`q${String(i+1).padStart(2,"0")}`),question:String(n.question||"").trim(),correct:String(n.correct||"").trim(),wrong:r.map(a=>String(a).trim()).filter(Boolean).slice(0,2),skill_tags:n.skill_tags||s.skill_tags||[],audio:String(n.audio||n.audio_en||"").trim()}}).filter(n=>n.question&&n.correct&&n.wrong.length>=1);if(!e.length)throw new Error("Pack has no usable questions. Need question + correct + at least one wrong.");return{pack_id:s.pack_id||t,title:s.title||"Ski Jump",module_id:s.module_id||"ski_jump",activity_id:s.activity_id||"slope_jump",skill_tags:s.skill_tags||["mcq"],ui_locale:s.ui_locale||"en",seconds:Number(s.seconds||15),mastery_correct:Number(s.mastery_correct||3),items:e}}async function Bu(s){const t=await fetch(s);if(!t.ok)throw new Error(`Could not load pack ${s}`);return So(await t.json())}function bM(s,t){const i=((s[0]||[]).map(r=>String(r).trim().toLowerCase()).includes("question")?s.slice(1):s).filter(r=>r&&String(r[0]||"").trim()).map((r,a)=>{const o=Array.isArray(r)?r:Object.values(r),[c,l,u,d]=o.map(h=>h==null?"":String(h));return{item_id:`q${String(a+1).padStart(2,"0")}`,question:c,correct:l,wrong:[u,d]}});return So({title:t,items:i,pack_id:t.toLowerCase().replace(/\s+/g,"-")})}async function wM(s){const t=s.name||"pack";if(t.toLowerCase().endsWith(".json"))return So(JSON.parse(await s.text()),t);const e=await SM(()=>import("./xlsx-D2ygFpn3.js"),[],import.meta.url),n=e.read(await s.arrayBuffer(),{type:"array"}),i=e.utils.sheet_to_json(n.Sheets[n.SheetNames[0]],{header:1,defval:""});if(!i.length)throw new Error("Empty spreadsheet");return bM(i,t.replace(/\.[^.]+$/,""))}function zu(s){const t=s.slice();for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}const Ta={ski:{knee:.75,lean:.42,arm:.55,elbow:-.7,spread:.18,head:.32},crouch:{knee:1.45,lean:.85,arm:.35,elbow:-1.1,spread:.12,head:.7},jump:{knee:.25,lean:.15,arm:2.5,elbow:-.3,spread:.55,head:.1},tuck:{knee:1.7,lean:.95,arm:1.25,elbow:-1.7,spread:.02,head:.75},land:{knee:1.55,lean:.55,arm:.95,elbow:-.6,spread:.7,head:.45},crash:{knee:.6,lean:-.2,arm:2.2,elbow:-.2,spread:1.25,head:-.3},twirl:{knee:.9,lean:.05,arm:1.6,elbow:-.2,spread:1.35,head:0},cheer:{knee:.15,lean:-.05,arm:2.95,elbow:-.15,spread:.45,head:-.15}};function wn(s,t={}){return new kn({color:s,flatShading:!0,...t})}function EM(){const s={jacket:wn(16731453),jacket2:wn(16763196),pants:wn(2306923),skin:wn(15909787),helmet:wn(3127551),goggle:wn(16765773,{emissive:8014848}),dark:wn(1909811),ski:wn(1429926),pole:wn(14673646),bib:wn(16777215)},t=new De,e=new De;t.add(e);const n=new De;e.add(n);const i=(O,U,z,B)=>new Qt(new jn(O,U,z),B),r=(O,U,z)=>new Qt(new Rr(O,U,2,6),z),a=i(.44,.2,.28,s.pants);n.add(a);const o=new De;n.add(o);const c=i(.5,.58,.32,s.jacket);c.position.y=.36,o.add(c);const l=i(.52,.1,.34,s.jacket2);l.position.y=.28,o.add(l);const u=i(.3,.26,.02,s.bib);u.position.set(0,.42,-.17),o.add(u);const d=i(.36,.1,.28,s.jacket2);d.position.y=.68,o.add(d);const h=new De;h.position.y=.72,o.add(h);const f=new Qt(new Ds(.19,0),s.skin);f.position.y=.17,h.add(f);const g=new Qt(new Ki(.215,7,5,0,Math.PI*2,0,Math.PI*.55),s.helmet);g.position.y=.2,h.add(g);const _=i(.36,.1,.08,s.goggle);_.position.set(0,.2,-.17),h.add(_);const m=i(.42,.05,.36,s.dark);m.position.set(0,.2,0),h.add(m);function p(O){const U=new De;U.position.set(.31*O,.6,0),o.add(U);const z=r(.075,.26,s.jacket);z.position.y=-.17,U.add(z);const B=new De;B.position.y=-.34,U.add(B);const W=r(.065,.22,s.jacket);W.position.y=-.14,B.add(W);const tt=new Qt(new Ds(.085,0),s.dark);tt.position.y=-.3,B.add(tt);const st=new Qt(new Pn(.018,.018,1.25,4),s.pole);st.position.set(0,-.3,.35),st.rotation.x=1.25,B.add(st);const ot=new Qt(new Pn(.07,.07,.02,6),s.dark);return ot.position.set(0,-.48,.85),ot.rotation.x=1.25,B.add(ot),{sh:U,el:B}}function v(O){const U=new De;U.position.set(.13*O,-.05,0),n.add(U);const z=r(.1,.27,s.pants);z.position.y=-.22,U.add(z);const B=new De;B.position.y=-.45,U.add(B);const W=r(.09,.27,s.pants);W.position.y=-.2,B.add(W);const tt=new De;tt.position.y=-.43,B.add(tt);const st=i(.16,.16,.3,s.jacket2);st.position.set(0,-.02,-.03),tt.add(st);const ot=i(.13,.04,1.7,s.ski);ot.position.set(0,-.12,-.12),tt.add(ot);const lt=i(.13,.04,.22,s.ski);return lt.position.set(0,-.08,-1.02),lt.rotation.x=.45,tt.add(lt),{hp:U,kn:B,an:tt}}const x={arm:[p(-1),p(1)],leg:[v(-1),v(1)]};t.traverse(O=>{O.isMesh&&(O.castShadow=!1)});const M={...Ta.ski};let L="ski",E=0,y=0,T=0,N=0;const S={v:1,vel:0};function R(O){Ta[O]&&(L=O)}function J(O){S.vel+=O}function X(O,U={}){E+=O;const z=Ta[L],B=1-Math.exp(-O*(L==="crash"?6:11));for(const lt in z)M[lt]+=(z[lt]-M[lt])*B;y+=((U.steer||0)-y)*(1-Math.exp(-O*8)),S.vel+=(1-S.v)*180*O,S.vel*=Math.exp(-O*12),S.v+=S.vel*O;const W=ui.clamp(S.v,.6,1.4);e.scale.set(1/Math.sqrt(W),W,1/Math.sqrt(W));const tt=M.knee/2,st=.45,ot=L==="ski"?Math.sin(E*6)*.04:0;n.position.y=.16+2*st*Math.cos(tt)+.08,n.position.z=0,o.rotation.x=-M.lean,o.rotation.z=-y*.15,h.rotation.x=M.head*.8;for(let lt=0;lt<2;lt++){const G=lt?1:-1,nt=x.leg[lt];nt.hp.rotation.x=tt+ot*G,nt.kn.rotation.x=-2*tt,nt.an.rotation.x=tt-ot*G,nt.hp.rotation.z=(L==="crash"?M.spread*.35:.02)*G;const gt=x.arm[lt];let yt=M.arm;L==="cheer"&&(yt+=Math.sin(E*9+lt*1.7)*.25),L==="crash"&&(yt+=Math.sin(E*17+lt*2)*.8),gt.sh.rotation.x=yt,gt.sh.rotation.z=M.spread*G+(L==="ski"?Math.sin(E*6+lt*Math.PI)*.05:0),gt.el.rotation.x=-M.elbow}L==="twirl"?(N+=O*15,e.rotation.set(Math.sin(E*7)*.45,N,Math.cos(E*5)*.5)):L==="crash"?(T+=O*9*Math.max(0,1-T/9),e.rotation.set(-T*.9,T*.4,T*.7)):(T=0,N=0,e.rotation.set(0,-y*.25,-y*.32))}function D(){Object.assign(M,Ta.ski),L="ski",T=0,e.rotation.set(0,0,0),S.v=1,S.vel=0}return{root:t,setPose:R,kick:J,update:X,reset:D,get pose(){return L}}}function ip(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.45,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new oo(s);return n.colorSpace=Te,n}const AM=`
attribute float size; attribute float alpha; attribute vec3 color;
varying float vA; varying vec3 vC; uniform float scale;
void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }`,TM=`
uniform sampler2D map; varying float vA; varying vec3 vC;
void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); if (gl_FragColor.a < 0.02) discard; }`;function CM(s=500){const t=new Vt,e=new Float32Array(s*3),n=new Float32Array(s*3),i=new Float32Array(s),r=new Float32Array(s);t.setAttribute("position",new ie(e,3).setUsage(di)),t.setAttribute("color",new ie(n,3).setUsage(di)),t.setAttribute("size",new ie(i,1).setUsage(di)),t.setAttribute("alpha",new ie(r,1).setUsage(di));const a=new un({uniforms:{map:{value:ip()},scale:{value:300}},vertexShader:AM,fragmentShader:TM,transparent:!0,depthWrite:!1}),o=new ro(t,a);o.frustumCulled=!1;const c=[];for(let _=0;_<s;_++)c.push({life:0,max:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,g:0,drag:0,s:1,r:1,gg:1,b:1,world:1,spin:0});let l=0,u=1;const d=new ut;function h(_){if(Math.random()>u&&!_.force)return;const m=c[l];l=(l+1)%s,m.life=m.max=_.life||.8,m.x=_.x,m.y=_.y,m.z=_.z,m.vx=_.vx||0,m.vy=_.vy||0,m.vz=_.vz||0,m.g=_.g==null?9:_.g,m.drag=_.drag==null?1.5:_.drag,m.s=_.size||.35,d.set(_.color==null?16777215:_.color),m.r=d.r,m.gg=d.g,m.b=d.b,m.world=_.world==null?1:_.world,m.spin=_.spin||0}function f(_,m,p,v,x={}){for(let M=0;M<v;M++){const L=Math.random()*Math.PI*2,E=(x.speed||5)*(.4+Math.random()*.8);h({x:_+(Math.random()-.5)*(x.spread||.6),y:m+Math.random()*.2,z:p+(Math.random()-.5)*(x.spread||.6),vx:Math.cos(L)*E,vz:Math.sin(L)*E,vy:(x.up||4)*(.5+Math.random()),life:(x.life||.9)*(.6+Math.random()*.6),size:(x.size||.45)*(.6+Math.random()*.8),color:x.colors?x.colors[Math.random()*x.colors.length|0]:x.color,g:x.g,drag:x.drag,world:x.world,force:x.force})}}function g(_,m){for(let p=0;p<s;p++){const v=c[p];if(v.life>0){v.life-=_;const M=Math.exp(-v.drag*_);v.vx*=M,v.vz*=M,v.vy=v.vy*M-v.g*_,v.x+=v.vx*_,v.y+=v.vy*_,v.z+=(v.vz+m*v.world)*_,v.y<.03&&v.g>0&&(v.y=.03,v.vy*=-.2,v.vx*=.6,v.vz*=.6),v.spin&&(v.x+=Math.sin(v.life*12+p)*v.spin*_)}const x=Math.max(0,v.life/v.max);e[p*3]=v.x,e[p*3+1]=v.life>0?v.y:-999,e[p*3+2]=v.z,n[p*3]=v.r,n[p*3+1]=v.gg,n[p*3+2]=v.b,i[p]=v.s*(.6+.6*(1-x)),r[p]=Math.min(1,x*1.6)}for(const p of["position","color","size","alpha"])t.attributes[p].needsUpdate=!0}return{points:o,emit:h,burst:f,update:g,setBudget(_){u=_},setScale(_){a.uniforms.scale.value=_}}}function RM(s=900){const t=new Vt,e=new Float32Array(s*3),n=new Float32Array(s);for(let c=0;c<s;c++)e[c*3]=(Math.random()-.5)*50,e[c*3+1]=Math.random()*22,e[c*3+2]=-Math.random()*70+10,n[c]=Math.random();t.setAttribute("position",new ie(e,3).setUsage(di));const i=new so({size:.16,map:ip(),transparent:!0,depthWrite:!1,opacity:.9,color:16777215}),r=new ro(t,i);r.frustumCulled=!1;let a=0;function o(c,l,u){a+=c;const d=t.drawRange.count===1/0?s:t.drawRange.count;for(let h=0;h<d;h++){const f=n[h];e[h*3+1]-=(1.2+f*1.6)*c,e[h*3]+=Math.sin(a*(.6+f)+f*20)*.6*c,e[h*3+2]+=l*.9*c,e[h*3+1]<0&&(e[h*3+1]+=22),e[h*3+2]>12&&(e[h*3+2]-=72);const g=e[h*3]-u;g>25?e[h*3]-=50:g<-25&&(e[h*3]+=50)}t.attributes.position.needsUpdate=!0}return{points:r,update:o,setCount(c){t.setDrawRange(0,Math.min(s,c))}}}const Ni=[-5,0,5],sl=3.4,oi=5,ci=1.25,PM=1.85,LM=-72,Ca=13,IM=9,Ss=10.5;function DM(s,t){const e=new ut(t),n=s.attributes.position.count,i=new Float32Array(n*3);for(let r=0;r<n;r++)i[r*3]=e.r,i[r*3+1]=e.g,i[r*3+2]=e.b;return s.setAttribute("color",new ie(i,3)),s}function UM(){const s=sl/2,t=ci,e=[-s,0,0,s,0,0,s,t,-5,-s,0,0,s,t,-5,-s,t,-5,-s,0,-5,s,t,-5,s,0,-5,-s,0,-5,-s,t,-5,s,t,-5,s,0,0,s,0,-5,s,t,-5,-s,0,0,-s,t,-5,-s,0,-5],n=new Vt;n.setAttribute("position",new Pt(e,3));const i=[],r=new ut(15333119),a=new ut(3108342),o=new ut(5082623);for(let c=0;c<18;c++){const l=c<6?r:c<12?a:o;i.push(l.r,l.g,l.b)}return n.setAttribute("color",new Pt(i,3)),n.computeVertexNormals(),n}function fc(s,t,e,n,i,r,a=70){const o=[],c=[],l=_=>{const m=Math.sin(_*127.1+s*311.7)*43758.5453;return m-Math.floor(m)},u=[];for(let _=0;_<=a;_++){const m=_/a,p=(m-.5)*t,v=n+e*(.45+.35*Math.sin(m*7.1+s)+.2*Math.sin(m*17.3+s*2)+.25*(l(_)-.5));u.push([p,Math.max(n+2,v)])}const d=new ut(i),h=new ut(r),f=new ut(16777215);for(let _=0;_<a;_++){const[m,p]=u[_],[v,x]=u[_+1],M=[[m,-6],[v,-6],[v,x],[m,-6],[v,x],[m,p]];for(const[L,E]of M){o.push(L,E,0);const y=(E+6)/(e+n+6),T=h.clone().lerp(d,Math.min(1,y*1.2)),N=ui.smoothstep(E,n+e*.55,n+e*.75);T.lerp(f,N*.9),c.push(T.r,T.g,T.b)}}const g=new Vt;return g.setAttribute("position",new Pt(o,3)),g.setAttribute("color",new Pt(c,3)),new Qt(g,new Qe({vertexColors:!0,fog:!1}))}function NM(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,32);return e.addColorStop(0,"rgba(40,60,110,0.55)"),e.addColorStop(1,"rgba(40,60,110,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new oo(s)}function OM(s){const t=document.createElement("canvas");t.width=1024,t.height=160;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,1024,0);n.addColorStop(0,"#ff4d6d"),n.addColorStop(.5,"#ffb703"),n.addColorStop(1,"#ff4d6d"),e.fillStyle=n,e.fillRect(0,0,1024,160);for(let r=0;r<1024;r+=64)e.fillStyle=r/64%2?"#111":"#fff",e.fillRect(r,0,64,18),e.fillStyle=r/64%2?"#fff":"#111",e.fillRect(r,142,64,18);e.font="700 96px Fredoka, 'Arial Rounded MT Bold', sans-serif",e.textAlign="center",e.textBaseline="middle",e.lineWidth=10,e.strokeStyle="#7a2e00",e.strokeText(s,512,84),e.fillStyle="#fff",e.fillText(s,512,84);const i=new oo(t);return i.colorSpace=Te,i}function FM(s,t,{quality:e}={}){const n=window.devicePixelRatio||1;let i=gM(oM,{antialias:n<1.5,powerPreference:"high-performance",alpha:!1}),r=!!i.mrjWeak,a=i.isSoft?24:r?30:0,o=0,c=0,l=0;i.outputColorSpace=Te,i.setClearColor(12575743),s.appendChild(i.domElement),i.domElement.className="stage";const u=new Cl,d=new ut(14150911);u.fog=new Tr(d,45,190);const h=new Ue(60,1,.1,900),f=new Qt(new Ki(700,24,12),new un({side:Oe,depthWrite:!1,fog:!1,uniforms:{top:{value:new ut(4033535)},mid:{value:new ut(10474239)},bot:{value:d},sun:{value:new P(.35,.32,-1).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; uniform vec3 sun; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.12 ? mix(mid, top, smoothstep(0.12, 0.7, h)) : mix(bot, mid, smoothstep(-0.02, 0.12, h));
      float s = max(0.0, dot(normalize(vP), sun)); c += vec3(1.0,0.93,0.75) * (pow(s, 600.0) * 1.2 + pow(s, 12.0) * 0.25);
      gl_FragColor = vec4(c, 1.0); }`}));u.add(f),u.userData.softSky=["#3d8bff","#9fd2ff","#d7ecff"];const g=[fc(1.3,1500,120,10,9416928,12900595),fc(4.1,1100,80,2,6260420,11125738),fc(7.7,800,46,-2,4156072,10139874)],_=[-560,-430,-300],m=[.02,.06,.12];g.forEach((it,Lt)=>{it.position.set(0,-4,_[Lt]),it.renderOrder=-1,u.add(it)}),u.add(new Vl(15398399,10467289,1.6));const p=new Wl(16774108,1.6);p.position.set(8,14,6),u.add(p);const v=new Vf,x=v.load("./textures/snow.webp");x.wrapS=x.wrapT=Yi,x.repeat.set(10,50),x.colorSpace=Te,x.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());const M=new Qt(new pn(240,320),new kn({map:x,color:16777215,emissive:5398906}));M.rotation.x=-Math.PI/2,M.position.z=-120,u.add(M),M.material.userData.softBack=1;const L=x.clone();L.repeat.set(3,60),L.needsUpdate=!0;const E=new Qt(new pn(Ss*2,320),new kn({map:L,color:15660799,emissive:4873338}));E.rotation.x=-Math.PI/2,E.position.set(0,.01,-120),u.add(E),E.material.userData.softBack=2;const y=v.load("./textures/pine.webp");y.colorSpace=Te,y.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());const T=7,N=T*(356/640),S=new pn(N,T).translate(0,T/2-.15,0),R=new Qe({map:y,alphaTest:.5,color:15923199}),J=190,X=new Va(S,R,J);X.instanceMatrix.setUsage(di),u.add(X);const D=[],O=(it,Lt)=>{const ne=Math.random()<.5?-1:1,te=Math.random()<.42;it.x=ne*(te?Ss+1.6+Math.random()*2.6:Ss+4.5+Math.pow(Math.random(),1.6)*60),it.z=Lt,it.s=.75+Math.random()*.75,it.edge=te};for(let it=0;it<J;it++){const Lt={};O(Lt,20-Math.random()*260),D.push(Lt)}const U=40,z=DM(new Pn(.06,.06,1.6,5).translate(0,.8,0),16777215),B=new Va(z,new kn({vertexColors:!0}),U);B.instanceMatrix.setUsage(di);const W=[],tt=new ut;for(let it=0;it<U;it++)W.push(20-(it>>1)*13),B.setColorAt(it,tt.set((it>>1)%2?16726876:3108342));u.add(B);const st=new Nt,ot=new Ye,lt=new P,G=new P,nt=new P(0,1,0),gt=UM(),yt=new kn({vertexColors:!0,flatShading:!0}),bt=new Vt().setFromPoints([new P(0,0,0),new P(.9,-.3,0),new P(0,-.6,0)]),ft=Ni.map(it=>{const Lt=new De;Lt.position.x=it,Lt.add(new Qt(gt,yt));for(const ne of[-1,1]){const te=new Qt(new Pn(.05,.05,2.2,5),new kn({color:16777215}));te.position.set(ne*(sl/2+.15),1.1+ci,-oi),Lt.add(te);const ee=new Qt(bt,new Qe({color:16758531,side:mn}));ee.position.set(ne*(sl/2+.15),2.2+ci,-oi),ee.rotation.y=ne>0?Math.PI:0,Lt.add(ee),Lt.userData.flags=(Lt.userData.flags||[]).concat(ee)}return u.add(Lt),Lt.visible=!1,Lt}),Tt=new De;Tt.visible=!1,u.add(Tt);{const it=new kn({color:3108342});for(const te of[-1,1]){const ee=new Qt(new jn(.6,6,.6),it);ee.position.set(te*9,3,0),Tt.add(ee)}const Lt=OM("FINISH");for(const te of[0,Math.PI]){const ee=new Qt(new pn(18.6,2.9),new Qe({map:Lt}));ee.position.set(0,6.2,te?-.05:.05),ee.rotation.y=te,Tt.add(ee)}const ne=v.load("./textures/crowd.webp");ne.colorSpace=Te;for(const te of[-1,1]){const ee=new Qt(new pn(10,5.6),new Qe({map:ne,transparent:!0,alphaTest:.1,side:mn}));ee.position.set(te*15,2.8,2),ee.rotation.y=te*.5,Tt.add(ee)}}const k=EM();u.add(k.root);const w=new Qt(new pn(1.8,2.6),new Qe({map:NM(),transparent:!0,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.position.y=.03,u.add(w);const H=CM(520);u.add(H.points);const $=RM(900);u.add($.points);const A={x:0,vx:0,y:0,vy:0,steer:0,boost:0,speed:0,skiing:!1,mode:"idle",rowZ:null,rowVisible:!1,rowLane:-1,rowDecided:!1,treeLane:-1,timeScale:1,tsTarget:1,trauma:0,fovKick:0,crashT:0,cerT:0,cerCb:null,t:0,landed:!1,airLane:-1},Q=[];let ht=e||(r?"ultra":"high"),mt=0,Et=0,zt=0,I=!!e||r;function b(it){ht=it;const Lt=it==="high"?1.75:it==="low"?1:r?.6:.75,ne=!!i.isSoft;i.setPixelRatio(Math.min(n,Lt)),X.count=ne?36:it==="high"?J:it==="low"?100:60,$.setCount(ne?70:it==="high"?900:it==="low"?350:150),H.setBudget(it==="high"?1:it==="low"?.5:.3),K()}function K(){const it=s.clientWidth||window.innerWidth,Lt=s.clientHeight||window.innerHeight;i.setSize(it,Lt,!1),h.aspect=it/Lt,h.userData.baseFov=it/Lt<.8?72:60,h.updateProjectionMatrix(),H.setScale(Lt*i.getPixelRatio()/(2*Math.tan(h.fov*Math.PI/360)))}window.addEventListener("resize",K),b(ht);function et(){const it=i.domElement,Lt=new np;Lt.mrjGpu="canvas2d",Lt.mrjWeak=!0,Lt.domElement.className=it.className,Lt.setClearColor(12575743),it.replaceWith(Lt.domElement);try{i.dispose()}catch(ne){}i=Lt,r=!0,a=24,I=!0,ct={lost:!1,count:0},il(s),b("ultra")}let ct=xM(i,s,{onRestored:()=>{ht==="high"&&b("low")},onFallback:et});function at(){A.rowZ=LM,A.rowVisible=!0,A.rowDecided=!1,A.treeLane=-1,ft.forEach(it=>{it.visible=!0,it.scale.set(1,1,1)})}function Dt(){A.rowVisible=!1,ft.forEach(it=>it.visible=!1)}function It(it,Lt=1){A.mode="ramp",A.airLane=it,A.streak=Lt,ft.forEach((ne,te)=>{te!==it&&(ne.visible=!0)}),k.setPose("crouch")}function pt(it){A.mode="ramp",A.airLane=it,A.wrong=!0,k.setPose("crouch")}function xt(it){A.mode="crash",A.crashT=0,A.crashDone=!1,A.vy=0,k.setPose("crash"),k.kick(-4),A.trauma=1,H.burst(A.x,.4,-.4,it?90:70,{speed:7,up:6,size:.65,life:1.3,colors:[16777215,15266815,14674687],force:!0})}function Ot(it){A.airLane=-1,xt(!1),H.burst(it.x,3,0,30,{speed:3,up:2,size:.5,life:1.6,colors:[16777215,15923199],g:5,force:!0}),H.burst(it.x,2.2,0,16,{speed:3,up:2.5,size:.3,life:1.3,colors:[2779967,2054709,7031338],g:6,force:!0}),Q.push({type:"treecrash"})}function dt(it){A.mode="ceremony",A.cerT=0,A.cerCb=it,Dt(),Tt.visible=!0,Tt.position.set(0,0,-17)}function pe(){A.x=0,A.vx=0,A.y=0,A.vy=0,A.mode=A.skiing?"ski":"idle",A.rowZ=null,A.timeScale=1,A.tsTarget=1,A.trauma=0,A.wrong=!1,Tt.visible=!1,Dt(),k.reset(),Q.length=0}function Ht(it){A.skiing=!!it,it&&(A.mode==="idle"||A.mode==="crash"||A.mode==="ceremony")&&(A.mode="ski"),!it&&A.mode==="ski"&&(A.mode="idle")}function Rt(){return Q.splice(0,Q.length)}const wt=new P;function At(it,Lt,ne){wt.set(it,Lt,ne).project(h);const te=s.clientWidth,ee=s.clientHeight;return{x:(wt.x*.5+.5)*te,y:(-wt.y*.5+.5)*ee,vis:wt.z<1&&wt.z>-1}}function Jt(){return At(A.x,A.y+2.4,0)}function kt(it){A.t+=it;let Lt=0;(A.mode==="ski"||A.mode==="ramp"||A.mode==="air")&&(Lt=Ca+IM*A.boost),A.mode==="crash"&&(Lt=0),A.mode==="ceremony"&&(Lt=Math.max(0,Ca*(1-A.cerT/3)));const ne=A.mode==="crash"?10:A.mode==="ceremony"?50:3.5;A.speed+=(Lt-A.speed)*Math.min(1,it*ne),A.mode==="ceremony"&&(A.speed=Lt);const te=A.speed*it;if(A.mode==="ski"){const Ft=A.steer*9;A.vx+=(Ft-A.vx)*Math.min(1,it*6),A.x=ui.clamp(A.x+A.vx*it,-Ss-4.5,Ss+4.5)}else A.mode==="air"||A.mode==="ramp"?(A.vx*=Math.exp(-it*3),A.x+=A.vx*it,A.airLane>=0&&(A.x+=(Ni[A.airLane]-A.x)*Math.min(1,it*3))):A.vx*=Math.exp(-it*4);if(A.rowVisible&&A.rowZ!=null){if(A.rowZ+=te,ft.forEach((Ft,ae)=>{Ft.position.z=A.rowZ;for(const en of Ft.userData.flags)en.rotation.z=Math.sin(A.t*8+ae)*.15}),!A.rowDecided&&A.rowZ>=0&&A.mode==="ski"){A.rowDecided=!0;let Ft=-1;Ni.forEach((ae,en)=>{Math.abs(A.x-ae)<PM&&(Ft=en)}),Q.push(Ft>=0?{type:"hit",lane:Ft}:{type:"pending-miss"})}A.rowDecided&&A.rowZ>oi+4&&A.mode==="ski"&&(Dt(),A._pendingMiss&&(A._pendingMiss=!1,Q.push({type:"missed"}))),A.rowZ>40&&Dt()}if(A.mode==="ramp"){const Ft=A.rowZ;A.y=ui.clamp(Ft/oi,0,1)*ci,Ft>=oi&&(A.mode="air",A.vy=9.5,k.setPose(A.wrong?"twirl":"jump"),k.kick(1.2),H.burst(A.x,ci,0,30,{speed:3,up:4,size:.4,life:.8,colors:[16777215,14741503]}),A.fovKick=1)}else if(A.mode==="air")A.vy-=13*it,A.y+=A.vy*it,A.wrong?A.tsTarget=1:A.vy<5&&A.vy>-4?(k.setPose("tuck"),A.tsTarget=.38):A.tsTarget=1,A.y<=0&&A.wrong?(A.y=0,A.wrong=!1,A.airLane=-1,A.tsTarget=1,xt(!0),Q.push({type:"fall"})):A.y<=0&&(A.y=0,A.vy=0,A.mode="ski",A.tsTarget=1,A.airLane=-1,k.setPose("land"),k.kick(-3.2),A.trauma=Math.max(A.trauma,.25),H.burst(A.x,.1,.2,60,{speed:6,up:3.5,size:.55,life:.9,colors:[16777215,15398143,14215679]}),Q.push({type:"land"}),A.landT=.35);else if(A.mode==="crash")A.crashT+=it,A.y=Math.max(0,Math.sin(Math.min(1,A.crashT*2.2)*Math.PI)*.45),A.crashT<.6&&Math.random()<it*30&&H.emit({x:A.x+(Math.random()-.5),y:.2,z:Math.random()-.5,vx:(Math.random()-.5)*4,vy:2+Math.random()*2,vz:2,life:.7,size:.5,color:16777215,force:!0}),A.crashT>1.7&&!A.crashDone&&(A.crashDone=!0,Q.push({type:"crashdone"}));else if(A.mode==="ceremony"&&(A.cerT+=it,A.y=0,Tt.position.z+=te,A.cerT>2.6&&k.setPose("cheer"),A.cerT>2.6&&Math.random()<it*10&&H.burst(A.x+(Math.random()-.5)*10,6+Math.random()*3,-2+Math.random()*4,14,{speed:3,up:3,size:.32,life:2.2,g:2.2,drag:1.2,world:0,colors:[16731501,16758531,3127551,1429926,16777215,11623679],force:!0}),A.cerT>5&&A.cerCb)){const Ft=A.cerCb;A.cerCb=null,Ft()}if(A.mode!=="crash"&&(A.crashDone=!1),A.landT>0&&(A.landT-=it,A.landT<=0&&A.mode==="ski"&&k.setPose(A.boost>.3?"crouch":"ski")),A.mode==="ski"&&!(A.landT>0)&&k.setPose(A.boost>.3?"crouch":"ski"),(A.mode==="ski"||A.mode==="ceremony")&&A.speed>2){const Ft=Math.min(1,Math.abs(A.vx)/7),ae=A.speed/Ca*(1+Ft*4)*it*30;for(let en=0;en<ae;en++){const Ir=A.vx>=0?-1:1;H.emit({x:A.x+(Math.random()-.5)*.4,y:.08,z:.6+Math.random()*.4,vx:Ir*Ft*(2+Math.random()*3)+(Math.random()-.5),vy:1+Math.random()*2*(.4+Ft),vz:1+Math.random()*2,life:.45+Math.random()*.4,size:.22+Ft*.3+Math.random()*.15,color:16777215,g:7,drag:2.5})}}for(let Ft=0;Ft<D.length;Ft++){const ae=D[Ft];ae.z+=te,ae.z>45&&O(ae,ae.z-270),lt.set(ae.x,0,ae.z),ot.setFromAxisAngle(nt,Math.atan2(se.x-ae.x,se.z-ae.z)),G.setScalar(ae.s),st.compose(lt,ot,G),X.setMatrixAt(Ft,st),A.mode==="ski"&&Ft<X.count&&Math.abs(ae.z)<.75&&Math.abs(ae.x-A.x)<.5*ae.s+.35&&Ot(ae)}X.instanceMatrix.needsUpdate=!0;for(let Ft=0;Ft<U;Ft++)W[Ft]+=te,W[Ft]>22&&(W[Ft]-=U/2*13),lt.set((Ft%2?1:-1)*(Ss+.3),0,W[Ft]),ot.identity(),G.setScalar(1),st.compose(lt,ot,G),B.setMatrixAt(Ft,st);B.instanceMatrix.needsUpdate=!0,x.offset.y+=te/(320/50),L.offset.y+=te/(320/60),H.update(it,A.speed),k.root.position.set(A.x,A.y,0),k.update(it,{steer:A.mode==="ski"?A.vx/9:0}),w.position.x=A.x;const ee=1/(1+A.y*.35);w.scale.set(ee,ee,1),w.material.opacity=ee}const se=new P(0,3.6,8),F=new P(0,1.2,-8),Mt=new P,Y=new P;function _t(it){if(A.mode==="ceremony"&&A.cerT>1.8){const te=Math.min(1,(A.cerT-1.8)/1.5),ee=te*Math.PI*.62+A.cerT*.02;Mt.set(A.x+Math.sin(ee)*6.5,2.2+te*.6,Math.cos(ee)*6.5),Y.set(A.x,1.4,0)}else Mt.set(A.x*.75,3.5+A.y*.55,7.8-A.boost*1.2),Y.set(A.x*.9,1.3+A.y*.6,-9);const Lt=1-Math.exp(-it*5);if(se.lerp(Mt,Lt),F.lerp(Y,Lt),h.position.copy(se),A.trauma>0){const te=A.trauma*A.trauma*.55,ee=A.t*40;h.position.x+=Math.sin(ee*1.3)*te,h.position.y+=Math.sin(ee*1.7+1)*te,h.position.z+=Math.sin(ee*1.1+2)*te*.5,A.trauma=Math.max(0,A.trauma-it*1.4)}h.lookAt(F),A.fovKick=Math.max(0,A.fovKick-it*1.2);const ne=(h.userData.baseFov||60)+A.boost*9+A.fovKick*6+(A.speed/Ca-1)*4;Math.abs(h.fov-ne)>.05&&(h.fov+=(ne-h.fov)*Math.min(1,it*4),h.updateProjectionMatrix()),g.forEach((te,ee)=>{te.position.x=-se.x*m[ee]*10}),f.position.copy(h.position)}const St=[0,0,0];function jt(){const it=A.rowVisible&&A.rowZ!=null&&A.rowZ<=2&&(A.mode==="ski"||A.mode==="ramp");let Lt=0;if(it){const Ft=At(Ni[0],ci+2.6,A.rowZ-oi),ae=At(Ni[1],ci+2.6,A.rowZ-oi);Lt=Math.abs(ae.x-Ft.x)}let ne=1;t.forEach((Ft,ae)=>{(!St[ae]||Ft.dataset.w!==Ft.textContent)&&(St[ae]=Ft.offsetWidth||120,Ft.dataset.w=Ft.textContent),ne=Math.max(ne,St[ae])});const te=ui.clamp(Lt*.94/ne,.32,1.15),ee=it?ui.clamp((A.rowZ+62)/10,0,1):0;t.forEach((Ft,ae)=>{if(!it){Ft.style.opacity="0";return}const en=At(Ni[ae],ci+2.6,A.rowZ-oi);Ft.style.opacity=en.vis?ee.toFixed(2):"0",Ft.style.transform=`translate(-50%, -100%) translate(${en.x.toFixed(1)}px, ${en.y.toFixed(1)}px) scale(${te.toFixed(3)})`})}function de(it){if(!(I||!A.skiing)&&(mt+=it,Et++,zt+=it,zt>=2)){const Lt=Et/mt;mt=0,Et=0,zt=0,Lt<42&&ht==="high"?b("low"):Lt<28&&ht==="low"&&(b("ultra"),I=!0)}}function Ce(it){A.timeScale+=(A.tsTarget-A.timeScale)*Math.min(1,it*(A.tsTarget<1?10:4));const Lt=it*A.timeScale;if(kt(Lt),_t(it),jt(),$.update(it,A.speed,se.x),de(it),ct.lost)return;const ne=performance.now();a&&ne-o<1e3/a-4||(o=ne,c++,ne-l>=1e3&&(le.drawFps=c*1e3/(ne-l),c=0,l=ne),i.render(u,h))}const Je=Q.push.bind(Q);Q.push=it=>it.type==="pending-miss"?(A._pendingMiss=!0,Q.length):Je(it),K();const le={get renderer(){return i},get gpu(){return i.mrjGpu||""},get weak(){return r},get soft(){return!!i.isSoft},get quality(){return ht},get fpsCap(){return a},drawFps:0};return window.MRJ_STAGE3D=le,{get renderer(){return i},camera:h,scene:u,S:A,showRow:at,hideRow:Dt,launch:It,crash:pt,ceremony:dt,reset:pe,setSkiing:Ht,pullEvents:Rt,tick:Ce,skierScreen:Jt,toScreen:At,setSteer(it){A.steer=ui.clamp(it,-1,1)},setBoost(it){A.boost=it},setQuality:b,get quality(){return ht},isAirborne:()=>A.mode==="air"||A.mode==="ramp",lanes:Ni}}const BM={whoosh:"./audio/snow-whoosh.mp3",jump:"./audio/ski-jump.mp3",cheer:"./audio/crowd-cheer.mp3",crash:"./audio/tree-crash.mp3",thud:"./audio/snow-thud.mp3"},zM="./audio/music-christmas-synths.mp3";function kM(){let s=null,t,e,n,i,r=null,a=null;const o={};let c=!1,l=null,u=!1;function d(){if(s)return s;const z=window.AudioContext||window.webkitAudioContext;return z?(s=new z,t=s.createGain(),t.gain.value=.9,t.connect(s.destination),e=s.createGain(),e.gain.value=.85,e.connect(t),n=s.createGain(),n.gain.value=0,n.connect(t),i=s.createGain(),i.gain.value=1,i.connect(t),s):null}async function h(z){try{const B=await fetch(z);if(!B.ok)return null;const W=await B.arrayBuffer();return await new Promise(tt=>{const st=s.decodeAudioData(W,tt,()=>tt(null));st&&st.then&&st.then(tt,()=>tt(null))})}catch(B){return null}}function f(){return l||!d()||(l=Promise.all(Object.entries(BM).map(async([z,B])=>{o[z]=await h(B)})).then(async()=>{a=await h(zM),p&&v()})),l}function g(){if(d()){if(s.state==="suspended"&&s.resume().catch(()=>{}),!u){const z=s.createBuffer(1,1,22050),B=s.createBufferSource();B.buffer=z,B.connect(s.destination),B.start(0),u=!0}f()}}function _(z,{vol:B=1,rate:W=1,delay:tt=0}={}){if(!s||c)return;const st=o[z];if(!st)return;const ot=s.createBufferSource(),lt=s.createGain();ot.buffer=st,ot.playbackRate.value=W,lt.gain.value=B,ot.connect(lt),lt.connect(e),ot.start(s.currentTime+tt)}function m(z,B,{type:W="triangle",vol:tt=.25,at:st=0,slide:ot=0}={}){if(!s||c)return;const lt=s.currentTime+st,G=s.createOscillator(),nt=s.createGain();G.type=W,G.frequency.setValueAtTime(z,lt),ot&&G.frequency.exponentialRampToValueAtTime(Math.max(40,z+ot),lt+B),nt.gain.setValueAtTime(1e-4,lt),nt.gain.linearRampToValueAtTime(tt,lt+.015),nt.gain.exponentialRampToValueAtTime(1e-4,lt+B),G.connect(nt),nt.connect(e),G.start(lt),G.stop(lt+B+.05)}let p=!1;function v(){p=!0,!(!s||!a||r)&&(r=s.createBufferSource(),r.buffer=a,r.loop=!0,r.connect(n),r.start(),n.gain.setTargetAtTime(c?0:.32,s.currentTime,.8))}function x(z){!s||c||n.gain.setTargetAtTime(z?.12:.32,s.currentTime,.15)}const M=[0,2,4,7,9,12,14,16,19,21,24];function L(z){const B=523.25*Math.pow(2,M[Math.min(M.length-1,Math.max(0,z-1))]/12);m(B,.18,{vol:.22}),m(B*1.25,.18,{vol:.2,at:.08}),m(B*1.5,.32,{vol:.22,at:.16}),_("jump",{vol:.9,rate:1+Math.min(.5,z*.05)})}function E(){m(392,.16,{type:"square",vol:.07}),m(294,.3,{type:"square",vol:.07,at:.15,slide:-60})}function y(){_("thud",{vol:1}),_("whoosh",{vol:.6,rate:.7})}function T(){_("crash",{vol:1}),_("thud",{vol:.8,delay:.05})}function N(){_("cheer",{vol:1}),[0,4,7,12,16].forEach((z,B)=>m(523.25*Math.pow(2,z/12),.4,{vol:.18,at:B*.11}))}function S(){_("whoosh",{vol:.7,rate:.9})}function R(z){z>.6&&_("whoosh",{vol:.25*z,rate:1.2})}function J(){_("whoosh",{vol:.55,rate:1.35})}async function X(z){if(!(!s||c))for(const B of z){const W=await h(B);if(W){const tt=s.createBufferSource();tt.buffer=W,tt.connect(i),x(!0),tt.onended=()=>x(!1),tt.start();return}}}function D(){p=!1;try{r&&r.stop()}catch(z){}try{r&&r.disconnect()}catch(z){}r=null}function O(){D(),s&&s.state==="running"&&s.suspend().catch(()=>{})}function U(z){return c=!!z,s&&(t.gain.setTargetAtTime(c?0:.9,s.currentTime,.05),!c&&r&&n.gain.setTargetAtTime(.32,s.currentTime,.3)),c}return{unlock:g,play:_,correct:L,wrong:E,fall:y,treeCrash:T,win:N,land:S,carve:R,boost:J,speak:X,startMusic:v,stopMusic:D,stopAll:O,state:()=>s?s.state:"none",setMuted:U,isMuted:()=>c,ready:()=>l}}const Wa="ski-jump",sp="MRJ Ski Jump";function rp(){try{const s=window.MRJ_AUTH;return s&&s.student&&s.student()||""}catch(s){return""}}function GM(s,t,e){try{const n=rp();if(!n||!window.MRJ_SCORES||typeof window.MRJ_SCORES.post!="function"||!t||!t.item_id)return;const i=String(s.pack_id||"pack");window.MRJ_SCORES.post({student:String(n).trim(),program:Wa,appName:sp,bookTitle:s.title||s.pack_id,itemId:i+":"+t.item_id,itemType:"word",correctness:e?"correct":"incorrect",scoreValue:e?1:0,scoreMax:1})}catch(n){}}function VM(s,t,e,n){try{if(t.mrjRoundPosted)return;t.mrjRoundPosted=!0;const i=rp();if(!i||!window.MRJ_SCORES||typeof window.MRJ_SCORES.post!="function")return;const r=String(s.pack_id||"pack"),a=t.records.length,o=t.records.filter(c=>c.correct).length;window.MRJ_SCORES.post({student:String(i).trim(),program:Wa,appName:sp,bookTitle:s.title||s.pack_id,itemId:"round:"+r,itemType:"round",scoreValue:o,scoreMax:a||1,metadata:{round:t.round,lives:t.lives,dead:!!n,corrects:t.corrects,target:e}})}catch(i){}}function HM(s,t){const e=String(s||"").trim();if(!e||e.indexOf("round:")===0)return"";const n=e.indexOf(":");if(n>0){const i=e.slice(0,n);if(i==="round")return"";const r=String(t||"").trim();return r&&i!==r?"":e.slice(n+1)}return e}function WM(s,t,e,n){const i=window.MRJ_SKI_PROGRESS;if(i&&typeof i.passedMap=="function"){i.applyPassed(t.roundDone,i.passedMap(e,Wa,s.pack_id)),t.corrects=i.syncCorrects(t.roundDone,s.items,n,t.corrects);return}const r={};for(const o of Array.isArray(e)?e:[]){if(!o||String(o.program||o.curriculum_program||"").trim()!==Wa)continue;const c=HM(o.itemId||o.item_id||o.item,s.pack_id);if(!c)continue;const l=o.scoreValue!=null?o.scoreValue:o.score!=null?o.score:o.scorePct,u=typeof l=="number"?l:parseFloat(String(l==null?"":l).split("/")[0]),d=o.scoreMax!=null?Number(o.scoreMax):NaN,h=o.scorePct!=null?Number(o.scorePct):NaN,f=Number.isFinite(h)?h>=100:Number.isFinite(d)&&d>0&&Number.isFinite(u)?u>=d:Number.isFinite(u)&&u>0;r[c]=!!r[c]||!!f}let a=0;for(const o of s.items||[])o&&r[o.item_id]&&(t.roundDone[o.item_id]=!0,a++);t.corrects=Math.max(t.corrects|0,Math.min(n,a))}function XM(s,t){try{const e=Object.keys(s.roundDone).filter(i=>s.roundDone[i]).length,n=t.items&&t.items.length||0;n&&e>=n&&window.parent&&window.parent!==window&&window.parent.postMessage({type:"mrj-wm-game-done",game:"snowjump",items:e,correct:s.corrects|0,finished:!0},"*")}catch(e){}}function pc(){try{const s=globalThis.MRJSignin||globalThis.MRJ_AUTH;return!!(s&&typeof s.isTeacher=="function"&&s.isTeacher())}catch(s){return!1}}function qM(s){typeof document!="undefined"&&document.addEventListener("mrj-teacher",()=>{try{s()}catch(t){}})}const ku="1.0.0",Gu=3,YM=5,Vu='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',$M='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9l6 6M22 9l-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';function Hu(s){const t=document.createElement("div");return t.innerHTML=s.trim(),t.firstElementChild}const Ra=s=>String(s==null?"":s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ZM=()=>"s-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,8),Wu=s=>String(s||"").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");function JM(s,{pack:t,studentId:e="",sessionMode:n=!1,quality:i}={}){s.innerHTML="";let r=t;const a=()=>n?r.items&&r.items.length||0:YM,o=kM(),c=Hu(`<div class="hud">
    <div class="topbar">
      <div class="pill name" id="sj-name">Ski</div>
      <div class="pill prog"><div class="bar"><i id="sj-bar"></i></div><span id="sj-left">0/5</span></div>
      <div class="pill pts" id="sj-score">0</div>
      <div class="pill combo" id="sj-combo"></div>
      <button class="pill mute" id="sj-mute" type="button" aria-label="Sound on/off">${Vu}</button>
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
  </div>`);s.appendChild(c);const l=k=>c.querySelector(k),u=[...c.querySelectorAll(".ramp-word")],d=FM(s,u,{quality:i});s.insertBefore(d.renderer.domElement,c),n&&(l("#sj-drop").remove(),l(".howto").remove());const h={pack:r,studentId:e||"",sessionId:ZM(),view:"start",points:0,errors:0,round:1,roundDone:{},mrjRoundPosted:!1,queue:[],trial:null,jumping:!1,lives:Gu,corrects:0,records:[],startedAt:null,t:0,pendingLand:null,keys:{left:!1,right:!1,up:!1},pointerSteer:0,pointerDown:!1,holdSteer:0,boost:0,ptrStartY:0,ptrY:0,streak:0,best:0},f=[];let g=[];const _=()=>Math.max(0,a()-h.corrects),m=()=>Math.min(4,1+Math.floor(h.streak/3));function p(){l("#sj-name").textContent=h.studentId||"Ski",l("#sj-score").textContent=`${h.points} pts`;const k=a()||1;l("#sj-left").textContent=`${h.corrects}/${a()}`,l("#sj-bar").style.width=`${Math.min(100,h.corrects/k*100)}%`;const w=m(),H=l("#sj-combo");H.textContent=h.streak>=2?`COMBO ×${w} · ${h.streak}`:"",H.classList.toggle("on",h.streak>=2),H.dataset.m=String(w)}function v(k,w){const H=l("#sj-toast");H.textContent=k,H.className=`toast ${w}`,H.offsetWidth,H.classList.add("on"),clearTimeout(H._h),H._h=setTimeout(()=>H.classList.remove("on"),850)}function x(k,w=""){const H=d.skierScreen(),$=Hu(`<div class="float ${w}">${Ra(k)}</div>`);$.style.left=`${H.x}px`,$.style.top=`${H.y}px`,c.appendChild($),setTimeout(()=>$.remove(),1300)}function M(k){l("#sj-q").classList.toggle("hidden",!k),l("#sj-hint").classList.toggle("hidden",!k)}function L(){h.queue=zu(r.items.filter(k=>!h.roundDone[k.item_id]))}function E(k){if(!k)return;const w=[k.audio];n||w.push(k.question&&`./audio/${Wu(k.question)}.mp3`,k.correct&&`./audio/${Wu(k.correct)}.mp3`),o.speak(w.filter(Boolean))}function y(k){k.choices.forEach((H,$)=>{u[$].textContent=H||"—",u[$].dataset.answer=H||""}),l("#sj-qp").textContent=k.item.question;const w=l("#sj-q");w.classList.remove("pop"),w.offsetWidth,w.classList.add("pop")}function T(k=!0){if(k||!h.trial){if(h.queue.length||L(),!h.queue.length)return J();const w=h.queue.shift(),H=zu([w.correct,...w.wrong.slice(0,2)]);for(;H.length<3;)H.push("");h.trial={item:w,choices:H,correctLane:H.indexOf(w.correct),startedAt:new Date().toISOString(),t0:performance.now(),locked:!1},y(h.trial),E(w)}else h.trial.locked=!1;M(!0),d.showRow(),p()}function N(k,w,H,$){const A={student_id:h.studentId,session_id:h.sessionId,module_id:r.module_id||"ski_jump",activity_id:r.activity_id||"slope_jump",item_id:k.item_id,skill_tags:k.skill_tags||r.skill_tags||[],response:w,correct:H,latency_ms:Math.round($),accuracy:0,points:h.points,errors:h.errors,started_at:h.trial.startedAt,ended_at:new Date().toISOString(),ui_locale:r.ui_locale||"en",round:h.round},Q=h.records.concat(A);return A.accuracy=Q.filter(ht=>ht.correct).length/Q.length,h.records.push(A),window.dispatchEvent(new CustomEvent("lf-record",{detail:A})),GM(r,k,!!H),A}function S(k){const w=h.trial;if(!w||w.locked||h.view!=="play")return;w.locked=!0,h.jumping=!0;const H=performance.now()-w.t0,$=k===w.correctLane,A=Number.isInteger(k)?w.choices[k]:"";if($){h.roundDone[w.item.item_id]=!0,h.corrects+=1,h.streak+=1,h.best=Math.max(h.best,h.streak);const Q=m();h.points+=100*Q,o.correct(h.streak),v("FLY!","ok"),x(Q>1?`+100 ×${Q}`:"+100",Q>1?"combo":""),d.launch(k,h.streak),h.pendingLand={correct:!0,dead:!1,goLand:_()===0}}else pc()?(o.wrong(),v("Try again","warn"),w.locked=!1,h.jumping=!1,T(!1)):(h.errors+=1,h.lives=0,h.streak=0,h.deadReason="fall",o.wrong(),v("Oops!","bad"),d.crash(k),h.pendingLand={correct:!1,dead:!0,goLand:!1});N(w.item,A,$,H),p()}function R(){const k=h.pendingLand;if(h.pendingLand=null,h.jumping=!1,!!k){if(k.dead)return X({dead:!0});if(o.land(),k.goLand){M(!1),d.hideRow(),o.win(),d.ceremony(()=>X());return}T(!0)}}function J(){return h.trial=null,M(!1),v(`Round ${h.round} done`,"ok"),X()}function X({dead:k=!1}={}){if(h.view==="end")return;VM(r,h,a(),k),k||XM(h,r),h.view="end",h.trial=null,d.setSkiing(!1),M(!1),o.stopMusic(),setTimeout(()=>{h.view==="end"&&o.stopAll()},2500);const w=h.records.length?Math.round(h.records.filter(ht=>ht.correct).length/h.records.length*100):0,H=f.findIndex(ht=>ht.student_id===h.studentId&&ht.pack_id===r.pack_id),$={student_id:h.studentId,pack_id:r.pack_id,points:h.points,accuracy:w,errors:h.errors,ended_at:new Date().toISOString()};H>=0?$.points>=f[H].points&&(f[H]=$):f.push($),f.sort((ht,mt)=>mt.points-ht.points);const A=l("#sj-end"),Q=Ra(h.studentId);A.innerHTML=`<div class="medal ${k?"crash":"gold"}"><span>${k?"!":"★"}</span></div>
      <h2>${k?"Crashed!":"Gold medal!"}</h2>
      <p>${k?h.deadReason==="tree"?`${Q} hit a tree. Start again.`:`${Q} jumped the wrong ramp and fell. Start again.`:`${Q} got ${a()} right. The crowd cheered and they put a gold medal on.`}</p>
      <div class="stats"><div><b>${h.points}</b><span>points</span></div><div><b>${w}%</b><span>accurate</span></div><div><b>${h.best}</b><span>best combo</span></div></div>
      ${f.length>1?`<div class="board">${f.slice(0,8).map((ht,mt)=>`${mt+1}. ${Ra(ht.student_id)} — ${ht.points} pts`).join("<br>")}</div>`:""}
      <button class="go" id="sj-again" type="button">Start again</button>`,A.classList.remove("hidden"),A.querySelector("#sj-again").onclick=()=>{o.unlock(),D()}}function D(){if(Object.assign(h,{points:0,errors:0,lives:Gu,corrects:0,roundDone:{},mrjRoundPosted:!1,records:[],trial:null,jumping:!1,pendingLand:null,view:"play",holdSteer:0,pointerSteer:0,boost:0,streak:0,best:0,deadReason:""}),l("#sj-end").classList.add("hidden"),l("#sj-end").innerHTML="",o.unlock(),o.startMusic(),d.reset(),d.setSkiing(!0),O(),h.corrects>=a())return d.setSkiing(!1),X();L(),T(!0),p()}function O(){if(pc()){for(const k of r.items||[])k&&(h.roundDone[k.item_id]=!0);h.corrects=a();return}WM(r,h,g,a())}function U(k){if(h.studentId=String(k).slice(0,24),h.startedAt=new Date().toISOString(),h.view="play",l("#sj-start").classList.add("hidden"),o.unlock(),o.startMusic(),d.reset(),d.setSkiing(!0),O(),h.corrects>=a())return d.setSkiing(!1),X();L(),T(!0),p()}function z(k){h.studentId=String(k).slice(0,24),l("#sj-form").innerHTML=`<div class="hello">Hi, <b>${Ra(h.studentId)}</b>!</div><button class="go big" type="submit">Tap to start ▶</button>`,p()}function B(k){g=Array.isArray(k)?k:[],O(),h.view==="play"&&(L(),p())}window.addEventListener("mrj-auth-ready",k=>{const w=k&&k.detail||{};g=Array.isArray(w.progress)?w.progress.slice():[];const H=window.MRJ_SKI_PROGRESS;H&&typeof H.onAuthReady=="function"?H.onAuthReady(k,{onRows:B}):O();const $=w.id||window.MRJ_AUTH&&window.MRJ_AUTH.student&&window.MRJ_AUTH.student();if(h.view==="start"){$&&z($);return}h.records.length||h.jumping||h.pendingLand||(h.roundDone={},h.mrjRoundPosted=!1,h.corrects=0,h.queue=[],h.trial=null,h.view="play",l("#sj-end").classList.add("hidden"),O(),h.corrects>=a()?(d.setSkiing(!1),X()):T(!0),p())}),l("#sj-form").addEventListener("submit",k=>{k.preventDefault();const w=l("#sj-input");U(w&&w.value.trim()||h.studentId||"Student")}),e&&z(e);const W=l("#sj-mute");W.addEventListener("click",k=>{k.stopPropagation(),o.unlock();const w=o.setMuted(!o.isMuted());W.innerHTML=w?$M:Vu,W.classList.toggle("off",w)});const tt=k=>{const w=k.changedTouches?k.changedTouches[0]:k,H=s.getBoundingClientRect();return{x:(w.clientX-H.left)/Math.max(1,H.width),h:Math.max(1,H.height),y:w.clientY}},st=k=>k<.38?-1:k>.62?1:(k-.5)*2;function ot(k){const w=tt(k);h.pointerSteer=st(w.x),h.holdSteer=h.pointerSteer,h.ptrY=w.y,h.boost=Math.max(0,Math.min(1,(h.ptrStartY-h.ptrY)/(w.h*.3)))}s.addEventListener("pointerdown",k=>{if(o.unlock(),h.view!=="play"||k.target.closest&&k.target.closest(".card, button, input, a, label"))return;k.preventDefault(),h.pointerDown=!0;const w=tt(k);h.ptrStartY=w.y,h.ptrY=w.y,ot(k);try{s.setPointerCapture(k.pointerId)}catch(H){}}),s.addEventListener("pointermove",k=>{h.pointerDown&&h.view==="play"&&(k.preventDefault(),ot(k))});const lt=()=>{h.pointerDown=!1,h.holdSteer=0};s.addEventListener("pointerup",lt),s.addEventListener("pointercancel",lt);const G=k=>w=>{const H=w.key;(H==="ArrowLeft"||H==="a"||H==="A")&&(h.keys.left=k),(H==="ArrowRight"||H==="d"||H==="D")&&(h.keys.right=k),(H==="ArrowUp"||H==="w"||H==="W")&&(h.keys.up=k),k&&H.startsWith("Arrow")&&h.view==="play"&&w.preventDefault(),k&&o.unlock()};window.addEventListener("keydown",G(!0)),window.addEventListener("keyup",G(!1));const nt=()=>{let k=0;return h.keys.left&&(k-=1),h.keys.right&&(k+=1),k||(h.pointerDown?h.pointerSteer:h.holdSteer)};let gt=performance.now(),yt=!1;function bt(k){const w=Math.min(.05,Math.max(0,(k-gt)/1e3));if(gt=k,h.t+=w,d.setSteer(nt()),h.keys.up?h.boost=Math.min(1,h.boost+w*2.6):h.pointerDown||(h.boost=Math.max(0,h.boost-w*1.35)),h.boost>.5&&!yt&&o.boost(),yt=h.boost>.5,d.setBoost(h.view==="play"?h.boost:0),d.tick(w),h.view==="play")for(const H of d.pullEvents())if(H.type==="hit")S(H.lane);else if(H.type==="land"||H.type==="crashdone")R();else if(H.type==="fall")o.fall(),v("CRASH!","bad");else if(H.type==="treecrash"&&!h.pendingLand){if(pc()){v("Tree — try again","warn"),T(!1);continue}h.lives=0,h.streak=0,h.deadReason="tree",h.trial&&(h.trial.locked=!0),o.treeCrash(),v("TREE!","bad"),M(!1),d.hideRow(),h.pendingLand={correct:!1,dead:!0,goLand:!1}}else H.type==="missed"&&h.trial&&!h.trial.locked&&(v("Missed! Try again","warn"),T(!1));else d.pullEvents();requestAnimationFrame(bt)}requestAnimationFrame(bt),p();const ft={version:ku,getState(){return{student_id:h.studentId,session_id:h.sessionId,pack_id:r.pack_id,view:h.view,points:h.points,errors:h.errors,lives:h.lives,round:h.round,corrects:h.corrects,remaining:_(),total:a(),pack_items:r.items.length,current_item:h.trial?h.trial.item.item_id:null,correct_lane:h.trial?h.trial.correctLane:null,choices:h.trial?h.trial.choices.slice():[],airborne:d.isAirborne(),x:d.S.x,streak:h.streak,multiplier:m(),quality:d.quality,muted:o.isMuted(),version:ku,target_rule:n?"wm:all-items":"standalone:5",steer:h.holdSteer,boost:h.boost,session_mode:n}},getRecords:()=>h.records.slice(),getLeaderboard:()=>f.slice(),loadPack(k){return n?!1:(r=k,h.pack=k,h.roundDone={},L(),p(),!0)}},Tt=()=>{o.stopAll()};return window.addEventListener("message",k=>{const w=k.data;(w==="mrj-stop"||w&&w.type==="mrj-stop")&&Tt()}),window.addEventListener("pagehide",Tt),document.addEventListener("visibilitychange",()=>{document.hidden?Tt():h.view==="play"&&(o.unlock(),o.startMusic())}),qM(()=>{O(),p(),h.view==="play"&&T(!1)}),window.MRJSkiJump=ft,window.SkiJump=ft,ft}const ap=document.getElementById("app"),Zl=new URLSearchParams(location.search),KM=(Zl.get("student")||"").trim(),rl=Zl.get("pack")||"",al=rl==="session";async function jM(){if(al){const t=sessionStorage.getItem("mrj.wm.gamepack");if(!t)throw new Error("Open Ski Jump from Word Master to get your words.");return So(JSON.parse(t))}if(rl)try{return await Bu(rl)}catch(t){}const s=document.querySelector('meta[name="sj-default-pack"]');if(!s)throw new Error("Open Ski Jump from Word Master to get your words.");return Bu(s.content)}async function QM(){const s=await jM(),t=Zl.get("q"),e=JM(ap,{pack:s,studentId:KM,sessionMode:al,quality:t==="low"||t==="high"||t==="ultra"?t:void 0});if(al)return;const n=document.getElementById("lf-file"),i=n&&n.closest("label"),r=document.querySelector("#sj-start .lead");async function a(o){try{const c=await wM(o);e.loadPack(c),r&&(r.textContent=`Loaded ${c.title} · ${c.items.length} questions.`)}catch(c){r&&(r.textContent="Could not read that pack: "+c.message)}}n&&n.addEventListener("change",()=>n.files[0]&&a(n.files[0])),i&&(i.addEventListener("dragover",o=>{o.preventDefault(),i.classList.add("over")}),i.addEventListener("dragleave",()=>i.classList.remove("over")),i.addEventListener("drop",o=>{o.preventDefault(),i.classList.remove("over"),o.dataTransfer.files[0]&&a(o.dataTransfer.files[0])}))}QM().catch(s=>{console.error(s),vM(ap,"Ski Jump")});
