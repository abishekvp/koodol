const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-P6J5Bl0u.js","assets/HomeView-BewjjjG-.css","assets/SubmitView-DtPyCWn4.js","assets/SubmitView-D0GG1j8D.css","assets/AdminView-BKGLEKaF.js","assets/AdminView-Dj6QLQVr.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},Kr=[],Yt=()=>{},xd=()=>!1,Qo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ac=t=>t.startsWith("onUpdate:"),Qe=Object.assign,lc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},G_=Object.prototype.hasOwnProperty,Re=(t,e)=>G_.call(t,e),le=Array.isArray,Gr=t=>Jo(t)==="[object Map]",Ld=t=>Jo(t)==="[object Set]",he=t=>typeof t=="function",Be=t=>typeof t=="string",nr=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Md=t=>(De(t)||he(t))&&he(t.then)&&he(t.catch),Fd=Object.prototype.toString,Jo=t=>Fd.call(t),z_=t=>Jo(t).slice(8,-1),Ud=t=>Jo(t)==="[object Object]",cc=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hs=oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Q_=/-\w/g,Mt=Yo(t=>t.replace(Q_,e=>e.slice(1).toUpperCase())),J_=/\B([A-Z])/g,rr=Yo(t=>t.replace(J_,"-$1").toLowerCase()),Xo=Yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wa=Yo(t=>t?`on${Xo(t)}`:""),Wn=(t,e)=>!Object.is(t,e),lo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Bd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},uc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Y_=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let ch;const Zo=()=>ch||(ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?ty(r):hc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||De(t))return t}const X_=/;(?![^(]*\))/g,Z_=/:([^]+)/,ey=/\/\*[^]*?\*\//g;function ty(t){const e={};return t.replace(ey,"").split(X_).forEach(n=>{if(n){const r=n.split(Z_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function fc(t){let e="";if(Be(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=fc(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ny="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ry=oc(ny);function jd(t){return!!t||t===""}const qd=t=>!!(t&&t.__v_isRef===!0),El=t=>Be(t)?t:t==null?"":le(t)||De(t)&&(t.toString===Fd||!he(t.toString))?qd(t)?El(t.value):JSON.stringify(t,$d,2):String(t),$d=(t,e)=>qd(e)?$d(t,e.value):Gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ka(r,i)+" =>"]=s,n),{})}:Ld(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ka(n))}:nr(e)?Ka(e):De(e)&&!le(e)&&!Ud(e)?String(e):e,Ka=(t,e="")=>{var n;return nr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class sy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){++this._on===1&&(this.prevScope=Tt,Tt=this)}off(){this._on>0&&--this._on===0&&(Tt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function iy(){return Tt}let Ne;const Ga=new WeakSet;class Hd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tt&&Tt.active&&Tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ga.has(this)&&(Ga.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,uh(this),Gd(this);const e=Ne,n=jt;Ne=this,jt=!0;try{return this.fn()}finally{zd(this),Ne=e,jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gc(e);this.deps=this.depsTail=void 0,uh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ga.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tl(this)&&this.run()}get dirty(){return Tl(this)}}let Wd=0,Ws,Ks;function Kd(t,e=!1){if(t.flags|=8,e){t.next=Ks,Ks=t;return}t.next=Ws,Ws=t}function dc(){Wd++}function pc(){if(--Wd>0)return;if(Ks){let e=Ks;for(Ks=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ws;){let e=Ws;for(Ws=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Gd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function zd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),gc(r),oy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Tl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Qd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ri)||(t.globalVersion=ri,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Tl(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=jt;Ne=t,jt=!0;try{Gd(t);const s=t.fn(t._value);(e.version===0||Wn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,jt=r,zd(t),t.flags&=-3}}function gc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)gc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function oy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let jt=!0;const Jd=[];function vn(){Jd.push(jt),jt=!1}function En(){const t=Jd.pop();jt=t===void 0?!0:t}function uh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let ri=0;class ay{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!jt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new ay(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,Yd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,ri++,this.notify(e)}notify(e){dc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{pc()}}}function Yd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Yd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Il=new WeakMap,Tr=Symbol(""),wl=Symbol(""),si=Symbol("");function ct(t,e,n){if(jt&&Ne){let r=Il.get(t);r||Il.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new mc),s.map=r,s.key=n),s.track()}}function dn(t,e,n,r,s,i){const o=Il.get(t);if(!o){ri++;return}const l=c=>{c&&c.trigger()};if(dc(),e==="clear")o.forEach(l);else{const c=le(t),h=c&&cc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===si||!nr(g)&&g>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(si)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Tr)),Gr(t)&&l(o.get(wl)));break;case"delete":c||(l(o.get(Tr)),Gr(t)&&l(o.get(wl)));break;case"set":Gr(t)&&l(o.get(Tr));break}}pc()}function Fr(t){const e=we(t);return e===t?e:(ct(e,"iterate",si),Lt(t)?e:e.map(qt))}function ea(t){return ct(t=we(t),"iterate",si),t}function Ln(t,e){return Tn(t)?Ir(t)?ts(qt(e)):ts(e):qt(e)}const ly={__proto__:null,[Symbol.iterator](){return za(this,Symbol.iterator,t=>Ln(this,t))},concat(...t){return Fr(this).concat(...t.map(e=>le(e)?Fr(e):e))},entries(){return za(this,"entries",t=>(t[1]=Ln(this,t[1]),t))},every(t,e){return ln(this,"every",t,e,void 0,arguments)},filter(t,e){return ln(this,"filter",t,e,n=>n.map(r=>Ln(this,r)),arguments)},find(t,e){return ln(this,"find",t,e,n=>Ln(this,n),arguments)},findIndex(t,e){return ln(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ln(this,"findLast",t,e,n=>Ln(this,n),arguments)},findLastIndex(t,e){return ln(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ln(this,"forEach",t,e,void 0,arguments)},includes(...t){return Qa(this,"includes",t)},indexOf(...t){return Qa(this,"indexOf",t)},join(t){return Fr(this).join(t)},lastIndexOf(...t){return Qa(this,"lastIndexOf",t)},map(t,e){return ln(this,"map",t,e,void 0,arguments)},pop(){return Os(this,"pop")},push(...t){return Os(this,"push",t)},reduce(t,...e){return hh(this,"reduce",t,e)},reduceRight(t,...e){return hh(this,"reduceRight",t,e)},shift(){return Os(this,"shift")},some(t,e){return ln(this,"some",t,e,void 0,arguments)},splice(...t){return Os(this,"splice",t)},toReversed(){return Fr(this).toReversed()},toSorted(t){return Fr(this).toSorted(t)},toSpliced(...t){return Fr(this).toSpliced(...t)},unshift(...t){return Os(this,"unshift",t)},values(){return za(this,"values",t=>Ln(this,t))}};function za(t,e,n){const r=ea(t),s=r[e]();return r!==t&&!Lt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const cy=Array.prototype;function ln(t,e,n,r,s,i){const o=ea(t),l=o!==t&&!Lt(t),c=o[e];if(c!==cy[e]){const p=c.apply(t,i);return l?qt(p):p}let h=n;o!==t&&(l?h=function(p,g){return n.call(this,Ln(t,p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,h,r);return l&&s?s(f):f}function hh(t,e,n,r){const s=ea(t);let i=n;return s!==t&&(Lt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Ln(t,l),c,t)}),s[e](i,...r)}function Qa(t,e,n){const r=we(t);ct(r,"iterate",si);const s=r[e](...n);return(s===-1||s===!1)&&vc(n[0])?(n[0]=we(n[0]),r[e](...n)):s}function Os(t,e,n=[]){vn(),dc();const r=we(t)[e].apply(t,n);return pc(),En(),r}const uy=oc("__proto__,__v_isRef,__isVue"),Xd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(nr));function hy(t){nr(t)||(t=String(t));const e=we(this);return ct(e,"has",t),e.hasOwnProperty(t)}class Zd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ty:rp:i?np:tp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=ly[n]))return c;if(n==="hasOwnProperty")return hy}const l=Reflect.get(e,n,ft(e)?e:r);if((nr(n)?Xd.has(n):uy(n))||(s||ct(e,"get",n),i))return l;if(ft(l)){const c=o&&cc(n)?l:l.value;return s&&De(c)?Rl(c):c}return De(l)?s?Rl(l):ta(l):l}}class ep extends Zd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=le(e)&&cc(n);if(!this._isShallow){const h=Tn(i);if(!Lt(r)&&!Tn(r)&&(i=we(i),r=we(r)),!o&&ft(i)&&!ft(r))return h||(i.value=r),!0}const l=o?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,ft(e)?e:s);return e===we(s)&&(l?Wn(r,i)&&dn(e,"set",n,r):dn(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!nr(n)||!Xd.has(n))&&ct(e,"has",n),r}ownKeys(e){return ct(e,"iterate",le(e)?"length":Tr),Reflect.ownKeys(e)}}class fy extends Zd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const dy=new ep,py=new fy,gy=new ep(!0);const Al=t=>t,Xi=t=>Reflect.getPrototypeOf(t);function my(t,e,n){return function(...r){const s=this.__v_raw,i=we(s),o=Gr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),f=n?Al:e?ts:qt;return!e&&ct(i,"iterate",c?wl:Tr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Zi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _y(t,e){const n={get(s){const i=this.__v_raw,o=we(i),l=we(s);t||(Wn(s,l)&&ct(o,"get",s),ct(o,"get",l));const{has:c}=Xi(o),h=e?Al:t?ts:qt;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ct(we(s),"iterate",Tr),s.size},has(s){const i=this.__v_raw,o=we(i),l=we(s);return t||(Wn(s,l)&&ct(o,"has",s),ct(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=we(l),h=e?Al:t?ts:qt;return!t&&ct(c,"iterate",Tr),l.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return Qe(n,t?{add:Zi("add"),set:Zi("set"),delete:Zi("delete"),clear:Zi("clear")}:{add(s){!e&&!Lt(s)&&!Tn(s)&&(s=we(s));const i=we(this);return Xi(i).has.call(i,s)||(i.add(s),dn(i,"add",s,s)),this},set(s,i){!e&&!Lt(i)&&!Tn(i)&&(i=we(i));const o=we(this),{has:l,get:c}=Xi(o);let h=l.call(o,s);h||(s=we(s),h=l.call(o,s));const f=c.call(o,s);return o.set(s,i),h?Wn(i,f)&&dn(o,"set",s,i):dn(o,"add",s,i),this},delete(s){const i=we(this),{has:o,get:l}=Xi(i);let c=o.call(i,s);c||(s=we(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&dn(i,"delete",s,void 0),h},clear(){const s=we(this),i=s.size!==0,o=s.clear();return i&&dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=my(s,t,e)}),n}function _c(t,e){const n=_y(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const yy={get:_c(!1,!1)},vy={get:_c(!1,!0)},Ey={get:_c(!0,!1)};const tp=new WeakMap,np=new WeakMap,rp=new WeakMap,Ty=new WeakMap;function Iy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wy(t){return t.__v_skip||!Object.isExtensible(t)?0:Iy(z_(t))}function ta(t){return Tn(t)?t:yc(t,!1,dy,yy,tp)}function sp(t){return yc(t,!1,gy,vy,np)}function Rl(t){return yc(t,!0,py,Ey,rp)}function yc(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=wy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Ir(t){return Tn(t)?Ir(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function Lt(t){return!!(t&&t.__v_isShallow)}function vc(t){return t?!!t.__v_raw:!1}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function Ay(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Bd(t,"__v_skip",!0),t}const qt=t=>De(t)?ta(t):t,ts=t=>De(t)?Rl(t):t;function ft(t){return t?t.__v_isRef===!0:!1}function pr(t){return ip(t,!1)}function Ry(t){return ip(t,!0)}function ip(t,e){return ft(t)?t:new by(t,e)}class by{constructor(e,n){this.dep=new mc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:we(e),this._value=n?e:qt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Lt(e)||Tn(e);e=r?e:we(e),Wn(e,n)&&(this._rawValue=e,this._value=r?e:qt(e),this.dep.trigger())}}function zr(t){return ft(t)?t.value:t}const Sy={get:(t,e,n)=>e==="__v_raw"?t:zr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ft(s)&&!ft(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function op(t){return Ir(t)?t:new Proxy(t,Sy)}class Py{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new mc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ri-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return Kd(this,!0),!0}get value(){const e=this.dep.track();return Qd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cy(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new Py(r,s,n)}const eo={},Ao=new WeakMap;let gr;function Ny(t,e=!1,n=gr){if(n){let r=Ao.get(n);r||Ao.set(n,r=[]),r.push(t)}}function Dy(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=H=>s?H:Lt(H)||s===!1||s===0?pn(H,1):pn(H);let f,p,g,y,C=!1,D=!1;if(ft(t)?(p=()=>t.value,C=Lt(t)):Ir(t)?(p=()=>h(t),C=!0):le(t)?(D=!0,C=t.some(H=>Ir(H)||Lt(H)),p=()=>t.map(H=>{if(ft(H))return H.value;if(Ir(H))return h(H);if(he(H))return c?c(H,2):H()})):he(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){vn();try{g()}finally{En()}}const H=gr;gr=f;try{return c?c(t,3,[y]):t(y)}finally{gr=H}}:p=Yt,e&&s){const H=p,ae=s===!0?1/0:s;p=()=>pn(H(),ae)}const k=iy(),j=()=>{f.stop(),k&&k.active&&lc(k.effects,f)};if(i&&e){const H=e;e=(...ae)=>{H(...ae),j()}}let B=D?new Array(t.length).fill(eo):eo;const q=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const ae=f.run();if(s||C||(D?ae.some((se,R)=>Wn(se,B[R])):Wn(ae,B))){g&&g();const se=gr;gr=f;try{const R=[ae,B===eo?void 0:D&&B[0]===eo?[]:B,y];B=ae,c?c(e,3,R):e(...R)}finally{gr=se}}}else f.run()};return l&&l(q),f=new Hd(p),f.scheduler=o?()=>o(q,!1):q,y=H=>Ny(H,!1,f),g=f.onStop=()=>{const H=Ao.get(f);if(H){if(c)c(H,4);else for(const ae of H)ae();Ao.delete(f)}},e?r?q(!0):B=f.run():o?o(q.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function pn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ft(t))pn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)pn(t[r],e,n);else if(Ld(t)||Gr(t))t.forEach(r=>{pn(r,e,n)});else if(Ud(t)){for(const r in t)pn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&pn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ti(t,e,n,r){try{return r?t(...r):t()}catch(s){na(s,e,n)}}function $t(t,e,n,r){if(he(t)){const s=Ti(t,e,n,r);return s&&Md(s)&&s.catch(i=>{na(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push($t(t[i],e,n,r));return s}}function na(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,h)===!1)return}l=l.parent}if(i){vn(),Ti(i,null,10,[t,c,h]),En();return}}ky(t,n,s,r,o)}function ky(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const yt=[];let zt=-1;const Qr=[];let Mn=null,Ur=0;const ap=Promise.resolve();let Ro=null;function lp(t){const e=Ro||ap;return t?e.then(this?t.bind(this):t):e}function Oy(t){let e=zt+1,n=yt.length;for(;e<n;){const r=e+n>>>1,s=yt[r],i=ii(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ec(t){if(!(t.flags&1)){const e=ii(t),n=yt[yt.length-1];!n||!(t.flags&2)&&e>=ii(n)?yt.push(t):yt.splice(Oy(e),0,t),t.flags|=1,cp()}}function cp(){Ro||(Ro=ap.then(hp))}function Vy(t){le(t)?Qr.push(...t):Mn&&t.id===-1?Mn.splice(Ur+1,0,t):t.flags&1||(Qr.push(t),t.flags|=1),cp()}function fh(t,e,n=zt+1){for(;n<yt.length;n++){const r=yt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;yt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function up(t){if(Qr.length){const e=[...new Set(Qr)].sort((n,r)=>ii(n)-ii(r));if(Qr.length=0,Mn){Mn.push(...e);return}for(Mn=e,Ur=0;Ur<Mn.length;Ur++){const n=Mn[Ur];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mn=null,Ur=0}}const ii=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hp(t){try{for(zt=0;zt<yt.length;zt++){const e=yt[zt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ti(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;zt<yt.length;zt++){const e=yt[zt];e&&(e.flags&=-2)}zt=-1,yt.length=0,up(),Ro=null,(yt.length||Qr.length)&&hp()}}let Pt=null,fp=null;function bo(t){const e=Pt;return Pt=t,fp=t&&t.type.__scopeId||null,e}function mr(t,e=Pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Co(-1);const i=bo(e);let o;try{o=t(...s)}finally{bo(i),r._d&&Co(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dh(t,e){if(Pt===null)return t;const n=aa(Pt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ce]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&pn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function ur(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(vn(),$t(c,n,8,[t.el,l,t,e]),En())}}const xy=Symbol("_vte"),dp=t=>t.__isTeleport,fn=Symbol("_leaveCb"),to=Symbol("_enterCb");function Ly(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ip(()=>{t.isMounted=!0}),wp(()=>{t.isUnmounting=!0}),t}const xt=[Function,Array],pp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},gp=t=>{const e=t.subTree;return e.component?gp(e.component):e},My={name:"BaseTransition",props:pp,setup(t,{slots:e}){const n=zp(),r=Ly();return()=>{const s=e.default&&yp(e.default(),!0);if(!s||!s.length)return;const i=mp(s),o=we(t),{mode:l}=o;if(r.isLeaving)return Ja(i);const c=ph(i);if(!c)return Ja(i);let h=bl(c,o,r,n,p=>h=p);c.type!==vt&&oi(c,h);let f=n.subTree&&ph(n.subTree);if(f&&f.type!==vt&&!yr(f,c)&&gp(n).type!==vt){let p=bl(f,o,r,n);if(oi(f,p),l==="out-in"&&c.type!==vt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Ja(i);l==="in-out"&&c.type!==vt?p.delayLeave=(g,y,C)=>{const D=_p(r,f);D[String(f.key)]=f,g[fn]=()=>{y(),g[fn]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{C(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function mp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==vt){e=n;break}}return e}const Fy=My;function _p(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bl(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:y,onAfterLeave:C,onLeaveCancelled:D,onBeforeAppear:k,onAppear:j,onAfterAppear:B,onAppearCancelled:q}=e,H=String(t.key),ae=_p(n,t),se=(_,A)=>{_&&$t(_,r,9,A)},R=(_,A)=>{const b=A[1];se(_,A),le(_)?_.every(I=>I.length<=1)&&b():_.length<=1&&b()},v={mode:o,persisted:l,beforeEnter(_){let A=c;if(!n.isMounted)if(i)A=k||c;else return;_[fn]&&_[fn](!0);const b=ae[H];b&&yr(t,b)&&b.el[fn]&&b.el[fn](),se(A,[_])},enter(_){let A=h,b=f,I=p;if(!n.isMounted)if(i)A=j||h,b=B||f,I=q||p;else return;let T=!1;const Se=_[to]=He=>{T||(T=!0,He?se(I,[_]):se(b,[_]),v.delayedLeave&&v.delayedLeave(),_[to]=void 0)};A?R(A,[_,Se]):Se()},leave(_,A){const b=String(t.key);if(_[to]&&_[to](!0),n.isUnmounting)return A();se(g,[_]);let I=!1;const T=_[fn]=Se=>{I||(I=!0,A(),Se?se(D,[_]):se(C,[_]),_[fn]=void 0,ae[b]===t&&delete ae[b])};ae[b]=t,y?R(y,[_,T]):T()},clone(_){const A=bl(_,e,n,r,s);return s&&s(A),A}};return v}function Ja(t){if(ra(t))return t=Xn(t),t.children=null,t}function ph(t){if(!ra(t))return dp(t.type)&&t.children?mp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function oi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,oi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Qt?(o.patchFlag&128&&s++,r=r.concat(yp(o.children,e,l))):(e||o.type!==vt)&&r.push(l!=null?Xn(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function vp(t,e){return he(t)?Qe({name:t.name},e,{setup:t}):t}function Ep(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const So=new WeakMap;function Gs(t,e,n,r,s=!1){if(le(t)){t.forEach((C,D)=>Gs(C,e&&(le(e)?e[D]:e),n,r,s));return}if(zs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Gs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?aa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===Ce?l.refs={}:l.refs,p=l.setupState,g=we(p),y=p===Ce?xd:C=>Re(g,C);if(h!=null&&h!==c){if(gh(e),Be(h))f[h]=null,y(h)&&(p[h]=null);else if(ft(h)){h.value=null;const C=e;C.k&&(f[C.k]=null)}}if(he(c))Ti(c,l,12,[o,f]);else{const C=Be(c),D=ft(c);if(C||D){const k=()=>{if(t.f){const j=C?y(c)?p[c]:f[c]:c.value;if(s)le(j)&&lc(j,i);else if(le(j))j.includes(i)||j.push(i);else if(C)f[c]=[i],y(c)&&(p[c]=f[c]);else{const B=[i];c.value=B,t.k&&(f[t.k]=B)}}else C?(f[c]=o,y(c)&&(p[c]=o)):D&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const j=()=>{k(),So.delete(t)};j.id=-1,So.set(t,j),bt(j,n)}else gh(t),k()}}}function gh(t){const e=So.get(t);e&&(e.flags|=8,So.delete(t))}Zo().requestIdleCallback;Zo().cancelIdleCallback;const zs=t=>!!t.type.__asyncLoader,ra=t=>t.type.__isKeepAlive;function Uy(t,e){Tp(t,"a",e)}function By(t,e){Tp(t,"da",e)}function Tp(t,e,n=ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(sa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ra(s.parent.vnode)&&jy(r,e,n,s),s=s.parent}}function jy(t,e,n,r){const s=sa(e,t,r,!0);Ap(()=>{lc(r[e],s)},n)}function sa(t,e,n=ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{vn();const l=Ii(n),c=$t(e,n,t,o);return l(),En(),c});return r?s.unshift(i):s.push(i),i}}const bn=t=>(e,n=ht)=>{(!li||t==="sp")&&sa(t,(...r)=>e(...r),n)},qy=bn("bm"),Ip=bn("m"),$y=bn("bu"),Hy=bn("u"),wp=bn("bum"),Ap=bn("um"),Wy=bn("sp"),Ky=bn("rtg"),Gy=bn("rtc");function zy(t,e=ht){sa("ec",t,e)}const Rp="components";function mh(t,e){return Sp(Rp,t,!0,e)||t}const bp=Symbol.for("v-ndc");function Qy(t){return Be(t)?Sp(Rp,t,!1)||t:t||bp}function Sp(t,e,n=!0,r=!1){const s=Pt||ht;if(s){const i=s.type;{const l=Lv(i,!1);if(l&&(l===e||l===Mt(e)||l===Xo(Mt(e))))return i}const o=_h(s[t]||i[t],e)||_h(s.appContext[t],e);return!o&&r?i:o}}function _h(t,e){return t&&(t[e]||t[Mt(e)]||t[Xo(Mt(e))])}function qS(t,e,n,r){let s;const i=n,o=le(t);if(o||Be(t)){const l=o&&Ir(t);let c=!1,h=!1;l&&(c=!Lt(t),h=Tn(t),t=ea(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?h?ts(qt(t[f])):qt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Sl=t=>t?Qp(t)?aa(t):Sl(t.parent):null,Qs=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sl(t.parent),$root:t=>Sl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Cp(t),$forceUpdate:t=>t.f||(t.f=()=>{Ec(t.update)}),$nextTick:t=>t.n||(t.n=lp.bind(t.proxy)),$watch:t=>ov.bind(t)}),Ya=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Re(t,e),Jy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ya(r,e))return o[e]=1,r[e];if(s!==Ce&&Re(s,e))return o[e]=2,s[e];if(Re(i,e))return o[e]=3,i[e];if(n!==Ce&&Re(n,e))return o[e]=4,n[e];Pl&&(o[e]=0)}}const h=Qs[e];let f,p;if(h)return e==="$attrs"&&ct(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Ce&&Re(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Re(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ya(s,e)?(s[e]=n,!0):r!==Ce&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Ce&&l[0]!=="$"&&Re(t,l)||Ya(e,l)||Re(i,l)||Re(r,l)||Re(Qs,l)||Re(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pl=!0;function Yy(t){const e=Cp(t),n=t.proxy,r=t.ctx;Pl=!1,e.beforeCreate&&vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:y,updated:C,activated:D,deactivated:k,beforeDestroy:j,beforeUnmount:B,destroyed:q,unmounted:H,render:ae,renderTracked:se,renderTriggered:R,errorCaptured:v,serverPrefetch:_,expose:A,inheritAttrs:b,components:I,directives:T,filters:Se}=e;if(h&&Xy(h,r,null),o)for(const ye in o){const ge=o[ye];he(ge)&&(r[ye]=ge.bind(n))}if(s){const ye=s.call(n,n);De(ye)&&(t.data=ta(ye))}if(Pl=!0,i)for(const ye in i){const ge=i[ye],wt=he(ge)?ge.bind(n,n):he(ge.get)?ge.get.bind(n,n):Yt,Ft=!he(ge)&&he(ge.set)?ge.set.bind(n):Yt,kt=Bt({get:wt,set:Ft});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>kt.value,set:xe=>kt.value=xe})}if(l)for(const ye in l)Pp(l[ye],r,n,ye);if(c){const ye=he(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(ge=>{co(ge,ye[ge])})}f&&vh(f,t,"c");function Ve(ye,ge){le(ge)?ge.forEach(wt=>ye(wt.bind(n))):ge&&ye(ge.bind(n))}if(Ve(qy,p),Ve(Ip,g),Ve($y,y),Ve(Hy,C),Ve(Uy,D),Ve(By,k),Ve(zy,v),Ve(Gy,se),Ve(Ky,R),Ve(wp,B),Ve(Ap,H),Ve(Wy,_),le(A))if(A.length){const ye=t.exposed||(t.exposed={});A.forEach(ge=>{Object.defineProperty(ye,ge,{get:()=>n[ge],set:wt=>n[ge]=wt,enumerable:!0})})}else t.exposed||(t.exposed={});ae&&t.render===Yt&&(t.render=ae),b!=null&&(t.inheritAttrs=b),I&&(t.components=I),T&&(t.directives=T),_&&Ep(t)}function Xy(t,e,n=Yt){le(t)&&(t=Cl(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=Xt(s.from||r,s.default,!0):i=Xt(s.from||r):i=Xt(s),ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function vh(t,e,n){$t(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pp(t,e,n,r){let s=r.includes(".")?kp(n,r):()=>n[r];if(Be(t)){const i=e[t];he(i)&&uo(s,i)}else if(he(t))uo(s,t.bind(n));else if(De(t))if(le(t))t.forEach(i=>Pp(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&uo(s,i,t)}}function Cp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Po(c,h,o,!0)),Po(c,e,o)),De(e)&&i.set(e,c),c}function Po(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Po(t,i,n,!0),s&&s.forEach(o=>Po(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Zy[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Zy={data:Eh,props:Th,emits:Th,methods:Ms,computed:Ms,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Ms,directives:Ms,watch:tv,provide:Eh,inject:ev};function Eh(t,e){return e?t?function(){return Qe(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function ev(t,e){return Ms(Cl(t),Cl(e))}function Cl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ms(t,e){return t?Qe(Object.create(null),t,e):e}function Th(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:Qe(Object.create(null),yh(t),yh(e??{})):e}function tv(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function Np(){return{app:null,config:{isNativeTag:xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nv=0;function rv(t,e){return function(r,s=null){he(r)||(r=Qe({},r)),s!=null&&!De(s)&&(s=null);const i=Np(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:nv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Fv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&he(f.install)?(o.add(f),f.install(h,...p)):he(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!c){const y=h._ceVNode||Ke(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(y,f,g),c=!0,h._container=f,f.__vue_app__=h,aa(y.component)}},onUnmount(f){l.push(f)},unmount(){c&&($t(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Jr;Jr=h;try{return f()}finally{Jr=p}}};return h}}let Jr=null;function co(t,e){if(ht){let n=ht.provides;const r=ht.parent&&ht.parent.provides;r===n&&(n=ht.provides=Object.create(r)),n[t]=e}}function Xt(t,e,n=!1){const r=zp();if(r||Jr){let s=Jr?Jr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const sv=Symbol.for("v-scx"),iv=()=>Xt(sv);function uo(t,e,n){return Dp(t,e,n)}function Dp(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,l=Qe({},n),c=e&&r||!e&&i!=="post";let h;if(li){if(i==="sync"){const y=iv();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=Yt,y.resume=Yt,y.pause=Yt,y}}const f=ht;l.call=(y,C,D)=>$t(y,f,C,D);let p=!1;i==="post"?l.scheduler=y=>{bt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,C)=>{C?y():Ec(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const g=Dy(t,e,l);return li&&(h?h.push(g):c&&g()),g}function ov(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?kp(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=Ii(this),l=Dp(s,i.bind(r),n);return o(),l}function kp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const av=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Mt(e)}Modifiers`]||t[`${rr(e)}Modifiers`];function lv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&av(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Be(f)?f.trim():f)),o.number&&(s=n.map(uc)));let l,c=r[l=Wa(e)]||r[l=Wa(Mt(e))];!c&&i&&(c=r[l=Wa(rr(e))]),c&&$t(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,$t(h,t,6,s)}}const cv=new WeakMap;function Op(t,e,n=!1){const r=n?cv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!he(t)){const c=h=>{const f=Op(h,e,!0);f&&(l=!0,Qe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(De(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):Qe(o,i),De(t)&&r.set(t,o),o)}function ia(t,e){return!t||!Qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,rr(e))||Re(t,e))}function Ih(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:f,props:p,data:g,setupState:y,ctx:C,inheritAttrs:D}=t,k=bo(t);let j,B;try{if(n.shapeFlag&4){const H=s||r,ae=H;j=Jt(h.call(ae,H,f,p,y,g,C)),B=l}else{const H=e;j=Jt(H.length>1?H(p,{attrs:l,slots:o,emit:c}):H(p,null)),B=e.props?l:uv(l)}}catch(H){Js.length=0,na(H,t,1),j=Ke(vt)}let q=j;if(B&&D!==!1){const H=Object.keys(B),{shapeFlag:ae}=q;H.length&&ae&7&&(i&&H.some(ac)&&(B=hv(B,i)),q=Xn(q,B,!1,!0))}return n.dirs&&(q=Xn(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&oi(q,n.transition),j=q,bo(k),j}const uv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qo(n))&&((e||(e={}))[n]=t[n]);return e},hv=(t,e)=>{const n={};for(const r in t)(!ac(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function fv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?wh(r,o,h):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!ia(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?wh(r,o,h):!0:!!o;return!1}function wh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ia(n,i))return!0}return!1}function dv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Vp={},xp=()=>Object.create(Vp),Lp=t=>Object.getPrototypeOf(t)===Vp;function pv(t,e,n,r=!1){const s={},i=xp();t.propsDefaults=Object.create(null),Mp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:sp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function gv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=we(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(ia(t.emitsOptions,g))continue;const y=e[g];if(c)if(Re(i,g))y!==i[g]&&(i[g]=y,h=!0);else{const C=Mt(g);s[C]=Nl(c,l,C,y,t,!1)}else y!==i[g]&&(i[g]=y,h=!0)}}}else{Mp(t,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Re(e,p)&&((f=rr(p))===p||!Re(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Nl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&dn(t.attrs,"set","")}function Mp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Hs(c))continue;const h=e[c];let f;s&&Re(s,f=Mt(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:ia(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=we(n),h=l||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Nl(s,c,p,h[p],t,!Re(h,p))}}return o}function Nl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Re(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&he(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Ii(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===rr(n))&&(r=!0))}return r}const mv=new WeakMap;function Fp(t,e,n=!1){const r=n?mv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!he(t)){const f=p=>{c=!0;const[g,y]=Fp(p,e,!0);Qe(o,g),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return De(t)&&r.set(t,Kr),Kr;if(le(i))for(let f=0;f<i.length;f++){const p=Mt(i[f]);Ah(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=Mt(f);if(Ah(p)){const g=i[f],y=o[p]=le(g)||he(g)?{type:g}:Qe({},g),C=y.type;let D=!1,k=!0;if(le(C))for(let j=0;j<C.length;++j){const B=C[j],q=he(B)&&B.name;if(q==="Boolean"){D=!0;break}else q==="String"&&(k=!1)}else D=he(C)&&C.name==="Boolean";y[0]=D,y[1]=k,(D||Re(y,"default"))&&l.push(p)}}const h=[o,l];return De(t)&&r.set(t,h),h}function Ah(t){return t[0]!=="$"&&!Hs(t)}const Tc=t=>t==="_"||t==="_ctx"||t==="$stable",Ic=t=>le(t)?t.map(Jt):[Jt(t)],_v=(t,e,n)=>{if(e._n)return e;const r=mr((...s)=>Ic(e(...s)),n);return r._c=!1,r},Up=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Tc(s))continue;const i=t[s];if(he(i))e[s]=_v(s,i,r);else if(i!=null){const o=Ic(i);e[s]=()=>o}}},Bp=(t,e)=>{const n=Ic(e);t.slots.default=()=>n},jp=(t,e,n)=>{for(const r in e)(n||!Tc(r))&&(t[r]=e[r])},yv=(t,e,n)=>{const r=t.slots=xp();if(t.vnode.shapeFlag&32){const s=e._;s?(jp(r,e,n),n&&Bd(r,"_",s,!0)):Up(e,r)}else e&&Bp(t,e)},vv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:jp(s,e,n):(i=!e.$stable,Up(e,s)),o=e}else e&&(Bp(t,e),o={default:1});if(i)for(const l in s)!Tc(l)&&o[l]==null&&delete s[l]},bt=Av;function Ev(t){return Tv(t)}function Tv(t,e){const n=Zo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:y=Yt,insertStaticContent:C}=t,D=(E,w,S,V=null,L=null,x=null,G=void 0,W=null,$=!!w.dynamicChildren)=>{if(E===w)return;E&&!yr(E,w)&&(V=O(E),xe(E,L,x,!0),E=null),w.patchFlag===-2&&($=!1,w.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:Q}=w;switch(F){case oa:k(E,w,S,V);break;case vt:j(E,w,S,V);break;case Za:E==null&&B(w,S,V,G);break;case Qt:I(E,w,S,V,L,x,G,W,$);break;default:Q&1?ae(E,w,S,V,L,x,G,W,$):Q&6?T(E,w,S,V,L,x,G,W,$):(Q&64||Q&128)&&F.process(E,w,S,V,L,x,G,W,$,Z)}ne!=null&&L?Gs(ne,E&&E.ref,x,w||E,!w):ne==null&&E&&E.ref!=null&&Gs(E.ref,null,x,E,!0)},k=(E,w,S,V)=>{if(E==null)r(w.el=l(w.children),S,V);else{const L=w.el=E.el;w.children!==E.children&&h(L,w.children)}},j=(E,w,S,V)=>{E==null?r(w.el=c(w.children||""),S,V):w.el=E.el},B=(E,w,S,V)=>{[E.el,E.anchor]=C(E.children,w,S,V,E.el,E.anchor)},q=({el:E,anchor:w},S,V)=>{let L;for(;E&&E!==w;)L=g(E),r(E,S,V),E=L;r(w,S,V)},H=({el:E,anchor:w})=>{let S;for(;E&&E!==w;)S=g(E),s(E),E=S;s(w)},ae=(E,w,S,V,L,x,G,W,$)=>{if(w.type==="svg"?G="svg":w.type==="math"&&(G="mathml"),E==null)se(w,S,V,L,x,G,W,$);else{const F=E.el&&E.el._isVueCE?E.el:null;try{F&&F._beginPatch(),_(E,w,L,x,G,W,$)}finally{F&&F._endPatch()}}},se=(E,w,S,V,L,x,G,W)=>{let $,F;const{props:ne,shapeFlag:Q,transition:ee,dirs:ie}=E;if($=E.el=o(E.type,x,ne&&ne.is,ne),Q&8?f($,E.children):Q&16&&v(E.children,$,null,V,L,Xa(E,x),G,W),ie&&ur(E,null,V,"created"),R($,E,E.scopeId,G,V),ne){for(const de in ne)de!=="value"&&!Hs(de)&&i($,de,null,ne[de],x,V);"value"in ne&&i($,"value",null,ne.value,x),(F=ne.onVnodeBeforeMount)&&Gt(F,V,E)}ie&&ur(E,null,V,"beforeMount");const re=Iv(L,ee);re&&ee.beforeEnter($),r($,w,S),((F=ne&&ne.onVnodeMounted)||re||ie)&&bt(()=>{F&&Gt(F,V,E),re&&ee.enter($),ie&&ur(E,null,V,"mounted")},L)},R=(E,w,S,V,L)=>{if(S&&y(E,S),V)for(let x=0;x<V.length;x++)y(E,V[x]);if(L){let x=L.subTree;if(w===x||Hp(x.type)&&(x.ssContent===w||x.ssFallback===w)){const G=L.vnode;R(E,G,G.scopeId,G.slotScopeIds,L.parent)}}},v=(E,w,S,V,L,x,G,W,$=0)=>{for(let F=$;F<E.length;F++){const ne=E[F]=W?Fn(E[F]):Jt(E[F]);D(null,ne,w,S,V,L,x,G,W)}},_=(E,w,S,V,L,x,G)=>{const W=w.el=E.el;let{patchFlag:$,dynamicChildren:F,dirs:ne}=w;$|=E.patchFlag&16;const Q=E.props||Ce,ee=w.props||Ce;let ie;if(S&&hr(S,!1),(ie=ee.onVnodeBeforeUpdate)&&Gt(ie,S,w,E),ne&&ur(w,E,S,"beforeUpdate"),S&&hr(S,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f(W,""),F?A(E.dynamicChildren,F,W,S,V,Xa(w,L),x):G||ge(E,w,W,null,S,V,Xa(w,L),x,!1),$>0){if($&16)b(W,Q,ee,S,L);else if($&2&&Q.class!==ee.class&&i(W,"class",null,ee.class,L),$&4&&i(W,"style",Q.style,ee.style,L),$&8){const re=w.dynamicProps;for(let de=0;de<re.length;de++){const ve=re[de],Je=Q[ve],Ye=ee[ve];(Ye!==Je||ve==="value")&&i(W,ve,Je,Ye,L,S)}}$&1&&E.children!==w.children&&f(W,w.children)}else!G&&F==null&&b(W,Q,ee,S,L);((ie=ee.onVnodeUpdated)||ne)&&bt(()=>{ie&&Gt(ie,S,w,E),ne&&ur(w,E,S,"updated")},V)},A=(E,w,S,V,L,x,G)=>{for(let W=0;W<w.length;W++){const $=E[W],F=w[W],ne=$.el&&($.type===Qt||!yr($,F)||$.shapeFlag&198)?p($.el):S;D($,F,ne,null,V,L,x,G,!0)}},b=(E,w,S,V,L)=>{if(w!==S){if(w!==Ce)for(const x in w)!Hs(x)&&!(x in S)&&i(E,x,w[x],null,L,V);for(const x in S){if(Hs(x))continue;const G=S[x],W=w[x];G!==W&&x!=="value"&&i(E,x,W,G,L,V)}"value"in S&&i(E,"value",w.value,S.value,L)}},I=(E,w,S,V,L,x,G,W,$)=>{const F=w.el=E?E.el:l(""),ne=w.anchor=E?E.anchor:l("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:ie}=w;ie&&(W=W?W.concat(ie):ie),E==null?(r(F,S,V),r(ne,S,V),v(w.children||[],S,ne,L,x,G,W,$)):Q>0&&Q&64&&ee&&E.dynamicChildren?(A(E.dynamicChildren,ee,S,L,x,G,W),(w.key!=null||L&&w===L.subTree)&&qp(E,w,!0)):ge(E,w,S,ne,L,x,G,W,$)},T=(E,w,S,V,L,x,G,W,$)=>{w.slotScopeIds=W,E==null?w.shapeFlag&512?L.ctx.activate(w,S,V,G,$):Se(w,S,V,L,x,G,$):He(E,w,$)},Se=(E,w,S,V,L,x,G)=>{const W=E.component=Dv(E,V,L);if(ra(E)&&(W.ctx.renderer=Z),kv(W,!1,G),W.asyncDep){if(L&&L.registerDep(W,Ve,G),!E.el){const $=W.subTree=Ke(vt);j(null,$,w,S),E.placeholder=$.el}}else Ve(W,E,w,S,L,x,G)},He=(E,w,S)=>{const V=w.component=E.component;if(fv(E,w,S))if(V.asyncDep&&!V.asyncResolved){ye(V,w,S);return}else V.next=w,V.update();else w.el=E.el,V.vnode=w},Ve=(E,w,S,V,L,x,G)=>{const W=()=>{if(E.isMounted){let{next:Q,bu:ee,u:ie,parent:re,vnode:de}=E;{const st=$p(E);if(st){Q&&(Q.el=de.el,ye(E,Q,G)),st.asyncDep.then(()=>{E.isUnmounted||W()});return}}let ve=Q,Je;hr(E,!1),Q?(Q.el=de.el,ye(E,Q,G)):Q=de,ee&&lo(ee),(Je=Q.props&&Q.props.onVnodeBeforeUpdate)&&Gt(Je,re,Q,de),hr(E,!0);const Ye=Ih(E),Ot=E.subTree;E.subTree=Ye,D(Ot,Ye,p(Ot.el),O(Ot),E,L,x),Q.el=Ye.el,ve===null&&dv(E,Ye.el),ie&&bt(ie,L),(Je=Q.props&&Q.props.onVnodeUpdated)&&bt(()=>Gt(Je,re,Q,de),L)}else{let Q;const{el:ee,props:ie}=w,{bm:re,m:de,parent:ve,root:Je,type:Ye}=E,Ot=zs(w);hr(E,!1),re&&lo(re),!Ot&&(Q=ie&&ie.onVnodeBeforeMount)&&Gt(Q,ve,w),hr(E,!0);{Je.ce&&Je.ce._def.shadowRoot!==!1&&Je.ce._injectChildStyle(Ye);const st=E.subTree=Ih(E);D(null,st,S,V,E,L,x),w.el=st.el}if(de&&bt(de,L),!Ot&&(Q=ie&&ie.onVnodeMounted)){const st=w;bt(()=>Gt(Q,ve,st),L)}(w.shapeFlag&256||ve&&zs(ve.vnode)&&ve.vnode.shapeFlag&256)&&E.a&&bt(E.a,L),E.isMounted=!0,w=S=V=null}};E.scope.on();const $=E.effect=new Hd(W);E.scope.off();const F=E.update=$.run.bind($),ne=E.job=$.runIfDirty.bind($);ne.i=E,ne.id=E.uid,$.scheduler=()=>Ec(ne),hr(E,!0),F()},ye=(E,w,S)=>{w.component=E;const V=E.vnode.props;E.vnode=w,E.next=null,gv(E,w.props,V,S),vv(E,w.children,S),vn(),fh(E),En()},ge=(E,w,S,V,L,x,G,W,$=!1)=>{const F=E&&E.children,ne=E?E.shapeFlag:0,Q=w.children,{patchFlag:ee,shapeFlag:ie}=w;if(ee>0){if(ee&128){Ft(F,Q,S,V,L,x,G,W,$);return}else if(ee&256){wt(F,Q,S,V,L,x,G,W,$);return}}ie&8?(ne&16&&Et(F,L,x),Q!==F&&f(S,Q)):ne&16?ie&16?Ft(F,Q,S,V,L,x,G,W,$):Et(F,L,x,!0):(ne&8&&f(S,""),ie&16&&v(Q,S,V,L,x,G,W,$))},wt=(E,w,S,V,L,x,G,W,$)=>{E=E||Kr,w=w||Kr;const F=E.length,ne=w.length,Q=Math.min(F,ne);let ee;for(ee=0;ee<Q;ee++){const ie=w[ee]=$?Fn(w[ee]):Jt(w[ee]);D(E[ee],ie,S,null,L,x,G,W,$)}F>ne?Et(E,L,x,!0,!1,Q):v(w,S,V,L,x,G,W,$,Q)},Ft=(E,w,S,V,L,x,G,W,$)=>{let F=0;const ne=w.length;let Q=E.length-1,ee=ne-1;for(;F<=Q&&F<=ee;){const ie=E[F],re=w[F]=$?Fn(w[F]):Jt(w[F]);if(yr(ie,re))D(ie,re,S,null,L,x,G,W,$);else break;F++}for(;F<=Q&&F<=ee;){const ie=E[Q],re=w[ee]=$?Fn(w[ee]):Jt(w[ee]);if(yr(ie,re))D(ie,re,S,null,L,x,G,W,$);else break;Q--,ee--}if(F>Q){if(F<=ee){const ie=ee+1,re=ie<ne?w[ie].el:V;for(;F<=ee;)D(null,w[F]=$?Fn(w[F]):Jt(w[F]),S,re,L,x,G,W,$),F++}}else if(F>ee)for(;F<=Q;)xe(E[F],L,x,!0),F++;else{const ie=F,re=F,de=new Map;for(F=re;F<=ee;F++){const Xe=w[F]=$?Fn(w[F]):Jt(w[F]);Xe.key!=null&&de.set(Xe.key,F)}let ve,Je=0;const Ye=ee-re+1;let Ot=!1,st=0;const Cn=new Array(Ye);for(F=0;F<Ye;F++)Cn[F]=0;for(F=ie;F<=Q;F++){const Xe=E[F];if(Je>=Ye){xe(Xe,L,x,!0);continue}let Vt;if(Xe.key!=null)Vt=de.get(Xe.key);else for(ve=re;ve<=ee;ve++)if(Cn[ve-re]===0&&yr(Xe,w[ve])){Vt=ve;break}Vt===void 0?xe(Xe,L,x,!0):(Cn[Vt-re]=F+1,Vt>=st?st=Vt:Ot=!0,D(Xe,w[Vt],S,null,L,x,G,W,$),Je++)}const Es=Ot?wv(Cn):Kr;for(ve=Es.length-1,F=Ye-1;F>=0;F--){const Xe=re+F,Vt=w[Xe],Li=w[Xe+1],Or=Xe+1<ne?Li.el||Li.placeholder:V;Cn[F]===0?D(null,Vt,S,Or,L,x,G,W,$):Ot&&(ve<0||F!==Es[ve]?kt(Vt,S,Or,2):ve--)}}},kt=(E,w,S,V,L=null)=>{const{el:x,type:G,transition:W,children:$,shapeFlag:F}=E;if(F&6){kt(E.component.subTree,w,S,V);return}if(F&128){E.suspense.move(w,S,V);return}if(F&64){G.move(E,w,S,Z);return}if(G===Qt){r(x,w,S);for(let Q=0;Q<$.length;Q++)kt($[Q],w,S,V);r(E.anchor,w,S);return}if(G===Za){q(E,w,S);return}if(V!==2&&F&1&&W)if(V===0)W.beforeEnter(x),r(x,w,S),bt(()=>W.enter(x),L);else{const{leave:Q,delayLeave:ee,afterLeave:ie}=W,re=()=>{E.ctx.isUnmounted?s(x):r(x,w,S)},de=()=>{x._isLeaving&&x[fn](!0),Q(x,()=>{re(),ie&&ie()})};ee?ee(x,re,de):de()}else r(x,w,S)},xe=(E,w,S,V=!1,L=!1)=>{const{type:x,props:G,ref:W,children:$,dynamicChildren:F,shapeFlag:ne,patchFlag:Q,dirs:ee,cacheIndex:ie}=E;if(Q===-2&&(L=!1),W!=null&&(vn(),Gs(W,null,S,E,!0),En()),ie!=null&&(w.renderCache[ie]=void 0),ne&256){w.ctx.deactivate(E);return}const re=ne&1&&ee,de=!zs(E);let ve;if(de&&(ve=G&&G.onVnodeBeforeUnmount)&&Gt(ve,w,E),ne&6)At(E.component,S,V);else{if(ne&128){E.suspense.unmount(S,V);return}re&&ur(E,null,w,"beforeUnmount"),ne&64?E.type.remove(E,w,S,Z,V):F&&!F.hasOnce&&(x!==Qt||Q>0&&Q&64)?Et(F,w,S,!1,!0):(x===Qt&&Q&384||!L&&ne&16)&&Et($,w,S),V&&Le(E)}(de&&(ve=G&&G.onVnodeUnmounted)||re)&&bt(()=>{ve&&Gt(ve,w,E),re&&ur(E,null,w,"unmounted")},S)},Le=E=>{const{type:w,el:S,anchor:V,transition:L}=E;if(w===Qt){Pn(S,V);return}if(w===Za){H(E);return}const x=()=>{s(S),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:W}=L,$=()=>G(S,x);W?W(E.el,x,$):$()}else x()},Pn=(E,w)=>{let S;for(;E!==w;)S=g(E),s(E),E=S;s(w)},At=(E,w,S)=>{const{bum:V,scope:L,job:x,subTree:G,um:W,m:$,a:F}=E;Rh($),Rh(F),V&&lo(V),L.stop(),x&&(x.flags|=8,xe(G,E,w,S)),W&&bt(W,w),bt(()=>{E.isUnmounted=!0},w)},Et=(E,w,S,V=!1,L=!1,x=0)=>{for(let G=x;G<E.length;G++)xe(E[G],w,S,V,L)},O=E=>{if(E.shapeFlag&6)return O(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=g(E.anchor||E.el),S=w&&w[xy];return S?g(S):w};let J=!1;const z=(E,w,S)=>{E==null?w._vnode&&xe(w._vnode,null,null,!0):D(w._vnode||null,E,w,null,null,null,S),w._vnode=E,J||(J=!0,fh(),up(),J=!1)},Z={p:D,um:xe,m:kt,r:Le,mt:Se,mc:v,pc:ge,pbc:A,n:O,o:t};return{render:z,hydrate:void 0,createApp:rv(z)}}function Xa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Iv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function qp(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Fn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&qp(o,l)),l.type===oa&&l.patchFlag!==-1&&(l.el=o.el),l.type===vt&&!l.el&&(l.el=o.el)}}function wv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function $p(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$p(e)}function Rh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Hp=t=>t.__isSuspense;function Av(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Vy(t)}const Qt=Symbol.for("v-fgt"),oa=Symbol.for("v-txt"),vt=Symbol.for("v-cmt"),Za=Symbol.for("v-stc"),Js=[];let Ct=null;function Fs(t=!1){Js.push(Ct=t?null:[])}function Rv(){Js.pop(),Ct=Js[Js.length-1]||null}let ai=1;function Co(t,e=!1){ai+=t,t<0&&Ct&&e&&(Ct.hasOnce=!0)}function Wp(t){return t.dynamicChildren=ai>0?Ct||Kr:null,Rv(),ai>0&&Ct&&Ct.push(t),t}function el(t,e,n,r,s,i){return Wp(St(t,e,n,r,s,i,!0))}function Kp(t,e,n,r,s){return Wp(Ke(t,e,n,r,s,!0))}function No(t){return t?t.__v_isVNode===!0:!1}function yr(t,e){return t.type===e.type&&t.key===e.key}const Gp=({key:t})=>t??null,ho=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||ft(t)||he(t)?{i:Pt,r:t,k:e,f:!!n}:t:null);function St(t,e=null,n=null,r=0,s=null,i=t===Qt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gp(e),ref:e&&ho(e),scopeId:fp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pt};return l?(wc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),ai>0&&!o&&Ct&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ct.push(c),c}const Ke=bv;function bv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===bp)&&(t=vt),No(t)){const l=Xn(t,e,!0);return n&&wc(l,n),ai>0&&!i&&Ct&&(l.shapeFlag&6?Ct[Ct.indexOf(t)]=l:Ct.push(l)),l.patchFlag=-2,l}if(Mv(t)&&(t=t.__vccOpts),e){e=Sv(e);let{class:l,style:c}=e;l&&!Be(l)&&(e.class=fc(l)),De(c)&&(vc(c)&&!le(c)&&(c=Qe({},c)),e.style=hc(c))}const o=Be(t)?1:Hp(t)?128:dp(t)?64:De(t)?4:he(t)?2:0;return St(t,e,n,r,s,o,i,!0)}function Sv(t){return t?vc(t)||Lp(t)?Qe({},t):t:null}function Xn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?Pv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Gp(h),ref:e&&e.ref?n&&i?le(i)?i.concat(ho(e)):[i,ho(e)]:ho(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xn(t.ssContent),ssFallback:t.ssFallback&&Xn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&oi(f,c.clone(f)),f}function fo(t=" ",e=0){return Ke(oa,null,t,e)}function bh(t="",e=!1){return e?(Fs(),Kp(vt,null,t)):Ke(vt,null,t)}function Jt(t){return t==null||typeof t=="boolean"?Ke(vt):le(t)?Ke(Qt,null,t.slice()):No(t)?Fn(t):Ke(oa,null,String(t))}function Fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xn(t)}function wc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Lp(e)?e._ctx=Pt:s===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),r&64?(n=16,e=[fo(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=fc([e.class,r.class]));else if(s==="style")e.style=hc([e.style,r.style]);else if(Qo(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Gt(t,e,n,r=null){$t(t,e,7,[n,r])}const Cv=Np();let Nv=0;function Dv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Cv,i={uid:Nv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fp(r,s),emitsOptions:Op(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=lv.bind(null,i),t.ce&&t.ce(i),i}let ht=null;const zp=()=>ht||Pt;let Do,Dl;{const t=Zo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Do=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),Dl=e("__VUE_SSR_SETTERS__",n=>li=n)}const Ii=t=>{const e=ht;return Do(t),t.scope.on(),()=>{t.scope.off(),Do(e)}},Sh=()=>{ht&&ht.scope.off(),Do(null)};function Qp(t){return t.vnode.shapeFlag&4}let li=!1;function kv(t,e=!1,n=!1){e&&Dl(e);const{props:r,children:s}=t.vnode,i=Qp(t);pv(t,r,i,e),yv(t,s,n||e);const o=i?Ov(t,e):void 0;return e&&Dl(!1),o}function Ov(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Jy);const{setup:r}=n;if(r){vn();const s=t.setupContext=r.length>1?xv(t):null,i=Ii(t),o=Ti(r,t,0,[t.props,s]),l=Md(o);if(En(),i(),(l||t.sp)&&!zs(t)&&Ep(t),l){if(o.then(Sh,Sh),e)return o.then(c=>{Ph(t,c)}).catch(c=>{na(c,t,0)});t.asyncDep=o}else Ph(t,o)}else Jp(t)}function Ph(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=op(e)),Jp(t)}function Jp(t,e,n){const r=t.type;t.render||(t.render=r.render||Yt);{const s=Ii(t);vn();try{Yy(t)}finally{En(),s()}}}const Vv={get(t,e){return ct(t,"get",""),t[e]}};function xv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Vv),slots:t.slots,emit:t.emit,expose:e}}function aa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(op(Ay(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qs)return Qs[n](t)},has(e,n){return n in e||n in Qs}})):t.proxy}function Lv(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function Mv(t){return he(t)&&"__vccOpts"in t}const Bt=(t,e)=>Cy(t,e,li);function Ac(t,e,n){try{Co(-1);const r=arguments.length;return r===2?De(e)&&!le(e)?No(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&No(n)&&(n=[n]),Ke(t,e,n))}finally{Co(1)}}const Fv="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kl;const Ch=typeof window<"u"&&window.trustedTypes;if(Ch)try{kl=Ch.createPolicy("vue",{createHTML:t=>t})}catch{}const Yp=kl?t=>kl.createHTML(t):t=>t,Uv="http://www.w3.org/2000/svg",Bv="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,Nh=hn&&hn.createElement("template"),jv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?hn.createElementNS(Uv,t):e==="mathml"?hn.createElementNS(Bv,t):n?hn.createElement(t,{is:n}):hn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>hn.createTextNode(t),createComment:t=>hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Nh.innerHTML=Yp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Nh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},On="transition",Vs="animation",ci=Symbol("_vtc"),Xp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},qv=Qe({},pp,Xp),$v=t=>(t.displayName="Transition",t.props=qv,t),Dh=$v((t,{slots:e})=>Ac(Fy,Hv(t),e)),fr=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},kh=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function Hv(t){const e={};for(const I in t)I in Xp||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=o,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,C=Wv(s),D=C&&C[0],k=C&&C[1],{onBeforeEnter:j,onEnter:B,onEnterCancelled:q,onLeave:H,onLeaveCancelled:ae,onBeforeAppear:se=j,onAppear:R=B,onAppearCancelled:v=q}=e,_=(I,T,Se,He)=>{I._enterCancelled=He,dr(I,T?f:l),dr(I,T?h:o),Se&&Se()},A=(I,T)=>{I._isLeaving=!1,dr(I,p),dr(I,y),dr(I,g),T&&T()},b=I=>(T,Se)=>{const He=I?R:B,Ve=()=>_(T,I,Se);fr(He,[T,Ve]),Oh(()=>{dr(T,I?c:i),cn(T,I?f:l),kh(He)||Vh(T,r,D,Ve)})};return Qe(e,{onBeforeEnter(I){fr(j,[I]),cn(I,i),cn(I,o)},onBeforeAppear(I){fr(se,[I]),cn(I,c),cn(I,h)},onEnter:b(!1),onAppear:b(!0),onLeave(I,T){I._isLeaving=!0;const Se=()=>A(I,T);cn(I,p),I._enterCancelled?(cn(I,g),Mh(I)):(Mh(I),cn(I,g)),Oh(()=>{I._isLeaving&&(dr(I,p),cn(I,y),kh(H)||Vh(I,r,k,Se))}),fr(H,[I,Se])},onEnterCancelled(I){_(I,!1,void 0,!0),fr(q,[I])},onAppearCancelled(I){_(I,!0,void 0,!0),fr(v,[I])},onLeaveCancelled(I){A(I),fr(ae,[I])}})}function Wv(t){if(t==null)return null;if(De(t))return[tl(t.enter),tl(t.leave)];{const e=tl(t);return[e,e]}}function tl(t){return Y_(t)}function cn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ci]||(t[ci]=new Set)).add(e)}function dr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ci];n&&(n.delete(e),n.size||(t[ci]=void 0))}function Oh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Kv=0;function Vh(t,e,n,r){const s=t._endId=++Kv,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=Gv(t,e);if(!o)return r();const h=o+"end";let f=0;const p=()=>{t.removeEventListener(h,g),i()},g=y=>{y.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(h,g)}function Gv(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${On}Delay`),i=r(`${On}Duration`),o=xh(s,i),l=r(`${Vs}Delay`),c=r(`${Vs}Duration`),h=xh(l,c);let f=null,p=0,g=0;e===On?o>0&&(f=On,p=o,g=i.length):e===Vs?h>0&&(f=Vs,p=h,g=c.length):(p=Math.max(o,h),f=p>0?o>h?On:Vs:null,g=f?f===On?i.length:c.length:0);const y=f===On&&/\b(?:transform|all)(?:,|$)/.test(r(`${On}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:y}}function xh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Lh(n)+Lh(t[r])))}function Lh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Mh(t){return(t?t.ownerDocument:document).body.offsetHeight}function zv(t,e,n){const r=t[ci];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fh=Symbol("_vod"),Qv=Symbol("_vsh"),Jv=Symbol(""),Yv=/(?:^|;)\s*display\s*:/;function Xv(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&po(r,l,"")}else for(const o in e)n[o]==null&&po(r,o,"");for(const o in n)o==="display"&&(i=!0),po(r,o,n[o])}else if(s){if(e!==n){const o=r[Jv];o&&(n+=";"+o),r.cssText=n,i=Yv.test(n)}}else e&&t.removeAttribute("style");Fh in t&&(t[Fh]=i?r.display:"",t[Qv]&&(r.display="none"))}const Uh=/\s*!important$/;function po(t,e,n){if(le(n))n.forEach(r=>po(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Zv(t,e);Uh.test(n)?t.setProperty(rr(r),n.replace(Uh,""),"important"):t[r]=n}}const Bh=["Webkit","Moz","ms"],nl={};function Zv(t,e){const n=nl[e];if(n)return n;let r=Mt(e);if(r!=="filter"&&r in t)return nl[e]=r;r=Xo(r);for(let s=0;s<Bh.length;s++){const i=Bh[s]+r;if(i in t)return nl[e]=i}return e}const jh="http://www.w3.org/1999/xlink";function qh(t,e,n,r,s,i=ry(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(jh,e.slice(6,e.length)):t.setAttributeNS(jh,e,n):n==null||i&&!jd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":nr(n)?String(n):n)}function $h(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Yp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=jd(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Br(t,e,n,r){t.addEventListener(e,n,r)}function eE(t,e,n,r){t.removeEventListener(e,n,r)}const Hh=Symbol("_vei");function tE(t,e,n,r,s=null){const i=t[Hh]||(t[Hh]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=nE(e);if(r){const h=i[e]=iE(r,s);Br(t,l,h,c)}else o&&(eE(t,l,o,c),i[e]=void 0)}}const Wh=/(?:Once|Passive|Capture)$/;function nE(t){let e;if(Wh.test(t)){e={};let r;for(;r=t.match(Wh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rr(t.slice(2)),e]}let rl=0;const rE=Promise.resolve(),sE=()=>rl||(rE.then(()=>rl=0),rl=Date.now());function iE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$t(oE(r,n.value),e,5,[r])};return n.value=t,n.attached=sE(),n}function oE(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Kh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,aE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?zv(t,r,o):e==="style"?Xv(t,n,r):Qo(e)?ac(e)||tE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lE(t,e,r,o))?($h(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?$h(t,Mt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),qh(t,e,r,o))};function lE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Kh(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kh(e)&&Be(n)?!1:e in t}const Gh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>lo(e,n):e};function cE(t){t.target.composing=!0}function zh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sl=Symbol("_assign");function Qh(t,e,n){return e&&(t=t.trim()),n&&(t=uc(t)),t}const Jh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[sl]=Gh(s);const i=r||s.props&&s.props.type==="number";Br(t,e?"change":"input",o=>{o.target.composing||t[sl](Qh(t.value,n,i))}),(n||i)&&Br(t,"change",()=>{t.value=Qh(t.value,n,i)}),e||(Br(t,"compositionstart",cE),Br(t,"compositionend",zh),Br(t,"change",zh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[sl]=Gh(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?uc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},uE=["ctrl","shift","alt","meta"],hE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>uE.some(n=>t[`${n}Key`]&&!e.includes(n))},Yh=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=hE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},fE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Xh=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=rr(s.key);if(e.some(o=>o===i||fE[o]===i))return t(s)})},dE=Qe({patchProp:aE},jv);let Zh;function pE(){return Zh||(Zh=Ev(dE))}const gE=(...t)=>{const e=pE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_E(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,mE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function mE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _E(t){return Be(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const jr=typeof document<"u";function Zp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Zp(t.default)}const Ae=Object.assign;function il(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ht(s)?s.map(t):t(s)}return n}const Ys=()=>{},Ht=Array.isArray;function ef(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const eg=/#/g,vE=/&/g,EE=/\//g,TE=/=/g,IE=/\?/g,tg=/\+/g,wE=/%5B/g,AE=/%5D/g,ng=/%5E/g,RE=/%60/g,rg=/%7B/g,bE=/%7C/g,sg=/%7D/g,SE=/%20/g;function Rc(t){return t==null?"":encodeURI(""+t).replace(bE,"|").replace(wE,"[").replace(AE,"]")}function PE(t){return Rc(t).replace(rg,"{").replace(sg,"}").replace(ng,"^")}function Ol(t){return Rc(t).replace(tg,"%2B").replace(SE,"+").replace(eg,"%23").replace(vE,"%26").replace(RE,"`").replace(rg,"{").replace(sg,"}").replace(ng,"^")}function CE(t){return Ol(t).replace(TE,"%3D")}function NE(t){return Rc(t).replace(eg,"%23").replace(IE,"%3F")}function DE(t){return NE(t).replace(EE,"%2F")}function ui(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const kE=/\/$/,OE=t=>t.replace(kE,"");function ol(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=ME(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:ui(o)}}function VE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function tf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ns(e.matched[r],n.matched[s])&&ig(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ns(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ig(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!LE(t[n],e[n]))return!1;return!0}function LE(t,e){return Ht(t)?nf(t,e):Ht(e)?nf(e,t):t===e}function nf(t,e){return Ht(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ME(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Vl=function(t){return t.pop="pop",t.push="push",t}({}),al=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function FE(t){if(!t)if(jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),OE(t)}const UE=/^[^#]+#/;function BE(t,e){return t.replace(UE,"#")+e}function jE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const la=()=>({left:window.scrollX,top:window.scrollY});function qE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=jE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function rf(t,e){return(history.state?history.state.position-e:-1)+t}const xl=new Map;function $E(t,e){xl.set(t,e)}function HE(t){const e=xl.get(t);return xl.delete(t),e}function WE(t){return typeof t=="string"||t&&typeof t=="object"}function og(t){return typeof t=="string"||typeof t=="symbol"}let Ue=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const ag=Symbol("");Ue.MATCHER_NOT_FOUND+"",Ue.NAVIGATION_GUARD_REDIRECT+"",Ue.NAVIGATION_ABORTED+"",Ue.NAVIGATION_CANCELLED+"",Ue.NAVIGATION_DUPLICATED+"";function rs(t,e){return Ae(new Error,{type:t,[ag]:!0},e)}function un(t,e){return t instanceof Error&&ag in t&&(e==null||!!(t.type&e))}const KE=["params","query","hash"];function GE(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of KE)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function zE(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(tg," "),i=s.indexOf("="),o=ui(i<0?s:s.slice(0,i)),l=i<0?null:ui(s.slice(i+1));if(o in e){let c=e[o];Ht(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function sf(t){let e="";for(let n in t){const r=t[n];if(n=CE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ht(r)?r.map(s=>s&&Ol(s)):[r&&Ol(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function QE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ht(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const JE=Symbol(""),of=Symbol(""),ca=Symbol(""),lg=Symbol(""),Ll=Symbol("");function xs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Un(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(rs(Ue.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?c(g):WE(g)?c(rs(Ue.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function ll(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Zp(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Un(h,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=yE(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const g=(p.__vccOpts||p)[e];return g&&Un(g,n,r,o,l,s)()}))}}return i}function YE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>ns(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>ns(h,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let XE=()=>location.protocol+"//"+location.host;function cg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),tf(l,"")}return tf(n,t)+r+s}function ZE(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const y=cg(t,location),C=n.value,D=e.value;let k=0;if(g){if(n.value=y,e.value=g,o&&o===C){o=null;return}k=D?g.position-D.position:0}else r(y);s.forEach(j=>{j(n.value,C,{delta:k,type:Vl.pop,direction:k?k>0?al.forward:al.back:al.unknown})})};function c(){o=n.value}function h(g){s.push(g);const y=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Ae({},g.state,{scroll:la()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:h,destroy:p}}function af(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?la():null}}function eT(t){const{history:e,location:n}=window,r={value:cg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:XE()+t+c;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(y){console.error(y),n[f?"replace":"assign"](g)}}function o(c,h){i(c,Ae({},e.state,af(s.value.back,c,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=c}function l(c,h){const f=Ae({},s.value,e.state,{forward:c,scroll:la()});i(f.current,f,!0),i(c,Ae({},af(r.value,c,null),{position:f.position+1},h),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function tT(t){t=FE(t);const e=eT(t),n=ZE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:BE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let vr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var We=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(We||{});const nT={type:vr.Static,value:""},rT=/[a-zA-Z0-9_]/;function sT(t){if(!t)return[[]];if(t==="/")return[[nT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=We.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",f="";function p(){h&&(n===We.Static?i.push({type:vr.Static,value:h}):n===We.Param||n===We.ParamRegExp||n===We.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:vr.Param,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==We.ParamRegExp){r=n,n=We.EscapeNext;continue}switch(n){case We.Static:c==="/"?(h&&p(),o()):c===":"?(p(),n=We.Param):g();break;case We.EscapeNext:g(),n=r;break;case We.Param:c==="("?n=We.ParamRegExp:rT.test(c)?g():(p(),n=We.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case We.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=We.ParamRegExpEnd:f+=c;break;case We.ParamRegExpEnd:p(),n=We.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===We.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}const lf="[^/]+?",iT={sensitive:!1,strict:!1,start:!0,end:!0};var _t=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(_t||{});const oT=/[.+*?^${}()[\]/\\]/g;function aT(t,e){const n=Ae({},iT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[_t.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let y=_t.Segment+(n.sensitive?_t.BonusCaseSensitive:0);if(g.type===vr.Static)p||(s+="/"),s+=g.value.replace(oT,"\\$&"),y+=_t.Static;else if(g.type===vr.Param){const{value:C,repeatable:D,optional:k,regexp:j}=g;i.push({name:C,repeatable:D,optional:k});const B=j||lf;if(B!==lf){y+=_t.BonusCustomRegExp;try{`${B}`}catch(H){throw new Error(`Invalid custom RegExp for param "${C}" (${B}): `+H.message)}}let q=D?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(q=k&&h.length<2?`(?:/${q})`:"/"+q),k&&(q+="?"),s+=q,y+=_t.Dynamic,k&&(y+=_t.BonusOptional),D&&(y+=_t.BonusRepeatable),B===".*"&&(y+=_t.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=_t.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const y=f[g]||"",C=i[g-1];p[C.name]=y&&C.repeatable?y.split("/"):y}return p}function c(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of g)if(y.type===vr.Static)f+=y.value;else if(y.type===vr.Param){const{value:C,repeatable:D,optional:k}=y,j=C in h?h[C]:"";if(Ht(j)&&!D)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const B=Ht(j)?j.join("/"):j;if(!B)if(k)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=B}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function lT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===_t.Static+_t.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===_t.Static+_t.Segment?1:-1:0}function ug(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=lT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(cf(r))return 1;if(cf(s))return-1}return s.length-r.length}function cf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const cT={strict:!1,end:!0,sensitive:!1};function uT(t,e,n){const r=aT(sT(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function hT(t,e){const n=[],r=new Map;e=ef(cT,e);function s(p){return r.get(p)}function i(p,g,y){const C=!y,D=hf(p);D.aliasOf=y&&y.record;const k=ef(e,p),j=[D];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const ae of H)j.push(hf(Ae({},D,{components:y?y.record.components:D.components,path:ae,aliasOf:y?y.record:D})))}let B,q;for(const H of j){const{path:ae}=H;if(g&&ae[0]!=="/"){const se=g.record.path,R=se[se.length-1]==="/"?"":"/";H.path=g.record.path+(ae&&R+ae)}if(B=uT(H,g,k),y?y.alias.push(B):(q=q||B,q!==B&&q.alias.push(B),C&&p.name&&!ff(B)&&o(p.name)),hg(B)&&c(B),D.children){const se=D.children;for(let R=0;R<se.length;R++)i(se[R],B,y&&y.children[R])}y=y||B}return q?()=>{o(q)}:Ys}function o(p){if(og(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=pT(p,n);n.splice(g,0,p),p.record.name&&!ff(p)&&r.set(p.record.name,p)}function h(p,g){let y,C={},D,k;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw rs(Ue.MATCHER_NOT_FOUND,{location:p});k=y.record.name,C=Ae(uf(g.params,y.keys.filter(q=>!q.optional).concat(y.parent?y.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&uf(p.params,y.keys.map(q=>q.name))),D=y.stringify(C)}else if(p.path!=null)D=p.path,y=n.find(q=>q.re.test(D)),y&&(C=y.parse(D),k=y.record.name);else{if(y=g.name?r.get(g.name):n.find(q=>q.re.test(g.path)),!y)throw rs(Ue.MATCHER_NOT_FOUND,{location:p,currentLocation:g});k=y.record.name,C=Ae({},g.params,p.params),D=y.stringify(C)}const j=[];let B=y;for(;B;)j.unshift(B.record),B=B.parent;return{name:k,path:D,params:C,matched:j,meta:dT(j)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function uf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function hf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:fT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function fT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dT(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function pT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ug(t,e[i])<0?r=i:n=i+1}const s=gT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function gT(t){let e=t;for(;e=e.parent;)if(hg(e)&&ug(t,e)===0)return e}function hg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function df(t){const e=Xt(ca),n=Xt(lg),r=Bt(()=>{const c=zr(t.to);return e.resolve(c)}),s=Bt(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(ns.bind(null,f));if(g>-1)return g;const y=pf(c[h-2]);return h>1&&pf(f)===y&&p[p.length-1].path!==y?p.findIndex(ns.bind(null,c[h-2])):g}),i=Bt(()=>s.value>-1&&ET(n.params,r.value.params)),o=Bt(()=>s.value>-1&&s.value===n.matched.length-1&&ig(n.params,r.value.params));function l(c={}){if(vT(c)){const h=e[zr(t.replace)?"replace":"push"](zr(t.to)).catch(Ys);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Bt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function mT(t){return t.length===1?t[0]:t}const _T=vp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:df,setup(t,{slots:e}){const n=ta(df(t)),{options:r}=Xt(ca),s=Bt(()=>({[gf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[gf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&mT(e.default(n));return t.custom?i:Ac("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),yT=_T;function vT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ET(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ht(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function pf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gf=(t,e,n)=>t??e??n,TT=vp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Xt(Ll),s=Bt(()=>t.route||r.value),i=Xt(of,0),o=Bt(()=>{let h=zr(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=Bt(()=>s.value.matched[o.value]);co(of,Bt(()=>o.value+1)),co(JE,l),co(Ll,s);const c=pr();return uo(()=>[c.value,l.value,t.name],([h,f,p],[g,y,C])=>{f&&(f.instances[p]=h,y&&y!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),h&&f&&(!y||!ns(f,y)||!g)&&(f.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return mf(n.default,{Component:g,route:h});const y=p.props[f],C=y?y===!0?h.params:typeof y=="function"?y(h):y:null,k=Ac(g,Ae({},C,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return mf(n.default,{Component:k,route:h})||k}}});function mf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const IT=TT;function wT(t){const e=hT(t.routes,t),n=t.parseQuery||zE,r=t.stringifyQuery||sf,s=t.history,i=xs(),o=xs(),l=xs(),c=Ry(Vn);let h=Vn;jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=il.bind(null,O=>""+O),p=il.bind(null,DE),g=il.bind(null,ui);function y(O,J){let z,Z;return og(O)?(z=e.getRecordMatcher(O),Z=J):Z=O,e.addRoute(Z,z)}function C(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function D(){return e.getRoutes().map(O=>O.record)}function k(O){return!!e.getRecordMatcher(O)}function j(O,J){if(J=Ae({},J||c.value),typeof O=="string"){const S=ol(n,O,J.path),V=e.resolve({path:S.path},J),L=s.createHref(S.fullPath);return Ae(S,V,{params:g(V.params),hash:ui(S.hash),redirectedFrom:void 0,href:L})}let z;if(O.path!=null)z=Ae({},O,{path:ol(n,O.path,J.path).path});else{const S=Ae({},O.params);for(const V in S)S[V]==null&&delete S[V];z=Ae({},O,{params:p(S)}),J.params=p(J.params)}const Z=e.resolve(z,J),pe=O.hash||"";Z.params=f(g(Z.params));const E=VE(r,Ae({},O,{hash:PE(pe),path:Z.path})),w=s.createHref(E);return Ae({fullPath:E,hash:pe,query:r===sf?QE(O.query):O.query||{}},Z,{redirectedFrom:void 0,href:w})}function B(O){return typeof O=="string"?ol(n,O,c.value.path):Ae({},O)}function q(O,J){if(h!==O)return rs(Ue.NAVIGATION_CANCELLED,{from:J,to:O})}function H(O){return R(O)}function ae(O){return H(Ae(B(O),{replace:!0}))}function se(O,J){const z=O.matched[O.matched.length-1];if(z&&z.redirect){const{redirect:Z}=z;let pe=typeof Z=="function"?Z(O,J):Z;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=B(pe):{path:pe},pe.params={}),Ae({query:O.query,hash:O.hash,params:pe.path!=null?{}:O.params},pe)}}function R(O,J){const z=h=j(O),Z=c.value,pe=O.state,E=O.force,w=O.replace===!0,S=se(z,Z);if(S)return R(Ae(B(S),{state:typeof S=="object"?Ae({},pe,S.state):pe,force:E,replace:w}),J||z);const V=z;V.redirectedFrom=J;let L;return!E&&xE(r,Z,z)&&(L=rs(Ue.NAVIGATION_DUPLICATED,{to:V,from:Z}),kt(Z,Z,!0,!1)),(L?Promise.resolve(L):A(V,Z)).catch(x=>un(x)?un(x,Ue.NAVIGATION_GUARD_REDIRECT)?x:Ft(x):ge(x,V,Z)).then(x=>{if(x){if(un(x,Ue.NAVIGATION_GUARD_REDIRECT))return R(Ae({replace:w},B(x.to),{state:typeof x.to=="object"?Ae({},pe,x.to.state):pe,force:E}),J||V)}else x=I(V,Z,!0,w,pe);return b(V,Z,x),x})}function v(O,J){const z=q(O,J);return z?Promise.reject(z):Promise.resolve()}function _(O){const J=Pn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function A(O,J){let z;const[Z,pe,E]=YE(O,J);z=ll(Z.reverse(),"beforeRouteLeave",O,J);for(const S of Z)S.leaveGuards.forEach(V=>{z.push(Un(V,O,J))});const w=v.bind(null,O,J);return z.push(w),Et(z).then(()=>{z=[];for(const S of i.list())z.push(Un(S,O,J));return z.push(w),Et(z)}).then(()=>{z=ll(pe,"beforeRouteUpdate",O,J);for(const S of pe)S.updateGuards.forEach(V=>{z.push(Un(V,O,J))});return z.push(w),Et(z)}).then(()=>{z=[];for(const S of E)if(S.beforeEnter)if(Ht(S.beforeEnter))for(const V of S.beforeEnter)z.push(Un(V,O,J));else z.push(Un(S.beforeEnter,O,J));return z.push(w),Et(z)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),z=ll(E,"beforeRouteEnter",O,J,_),z.push(w),Et(z))).then(()=>{z=[];for(const S of o.list())z.push(Un(S,O,J));return z.push(w),Et(z)}).catch(S=>un(S,Ue.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function b(O,J,z){l.list().forEach(Z=>_(()=>Z(O,J,z)))}function I(O,J,z,Z,pe){const E=q(O,J);if(E)return E;const w=J===Vn,S=jr?history.state:{};z&&(Z||w?s.replace(O.fullPath,Ae({scroll:w&&S&&S.scroll},pe)):s.push(O.fullPath,pe)),c.value=O,kt(O,J,z,w),Ft()}let T;function Se(){T||(T=s.listen((O,J,z)=>{if(!At.listening)return;const Z=j(O),pe=se(Z,At.currentRoute.value);if(pe){R(Ae(pe,{replace:!0,force:!0}),Z).catch(Ys);return}h=Z;const E=c.value;jr&&$E(rf(E.fullPath,z.delta),la()),A(Z,E).catch(w=>un(w,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_CANCELLED)?w:un(w,Ue.NAVIGATION_GUARD_REDIRECT)?(R(Ae(B(w.to),{force:!0}),Z).then(S=>{un(S,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===Vl.pop&&s.go(-1,!1)}).catch(Ys),Promise.reject()):(z.delta&&s.go(-z.delta,!1),ge(w,Z,E))).then(w=>{w=w||I(Z,E,!1),w&&(z.delta&&!un(w,Ue.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===Vl.pop&&un(w,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(Z,E,w)}).catch(Ys)}))}let He=xs(),Ve=xs(),ye;function ge(O,J,z){Ft(O);const Z=Ve.list();return Z.length?Z.forEach(pe=>pe(O,J,z)):console.error(O),Promise.reject(O)}function wt(){return ye&&c.value!==Vn?Promise.resolve():new Promise((O,J)=>{He.add([O,J])})}function Ft(O){return ye||(ye=!O,Se(),He.list().forEach(([J,z])=>O?z(O):J()),He.reset()),O}function kt(O,J,z,Z){const{scrollBehavior:pe}=t;if(!jr||!pe)return Promise.resolve();const E=!z&&HE(rf(O.fullPath,0))||(Z||!z)&&history.state&&history.state.scroll||null;return lp().then(()=>pe(O,J,E)).then(w=>w&&qE(w)).catch(w=>ge(w,O,J))}const xe=O=>s.go(O);let Le;const Pn=new Set,At={currentRoute:c,listening:!0,addRoute:y,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:D,resolve:j,options:t,push:H,replace:ae,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ve.add,isReady:wt,install(O){O.component("RouterLink",yT),O.component("RouterView",IT),O.config.globalProperties.$router=At,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>zr(c)}),jr&&!Le&&c.value===Vn&&(Le=!0,H(s.location).catch(Z=>{}));const J={};for(const Z in Vn)Object.defineProperty(J,Z,{get:()=>c.value[Z],enumerable:!0});O.provide(ca,At),O.provide(lg,sp(J)),O.provide(Ll,c);const z=O.unmount;Pn.add(O),O.unmount=function(){Pn.delete(O),Pn.size<1&&(h=Vn,T&&T(),T=null,c.value=Vn,Le=!1,ye=!1),z()}}};function Et(O){return O.reduce((J,z)=>J.then(()=>_(z)),Promise.resolve())}return At}function AT(){return Xt(ca)}var _f={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},RT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,y=h&63;c||(y=64,o||(g=64)),r.push(n[f],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new bT;const g=i<<2|l>>4;if(r.push(g),h!==64){const y=l<<4&240|h>>2;if(r.push(y),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ST=function(t){const e=fg(t);return dg.encodeByteArray(e,!0)},ko=function(t){return ST(t).replace(/\./g,"")},pg=function(t){try{return dg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=()=>PT().__FIREBASE_DEFAULTS__,NT=()=>{if(typeof process>"u"||typeof _f>"u")return;const t=_f.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pg(t[1]);return e&&JSON.parse(e)},ua=()=>{try{return CT()||NT()||DT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gg=t=>{var e,n;return(n=(e=ua())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kT=t=>{const e=gg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mg=()=>{var t;return(t=ua())===null||t===void 0?void 0:t.config},_g=t=>{var e;return(e=ua())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function LT(){var t;const e=(t=ua())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function FT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function UT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BT(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jT(){return!LT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qT(){try{return typeof indexedDB=="object"}catch{return!1}}function $T(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HT,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?WT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Sn(s,l,r)}}function WT(t,e){return t.replace(KT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const KT=/\{\$([^}]+)}/g;function GT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(yf(i)&&yf(o)){if(!Oo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Bs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zT(t,e){const n=new QT(t,e);return n.subscribe.bind(n)}class QT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=cl),s.error===void 0&&(s.error=cl),s.complete===void 0&&(s.complete=cl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new OT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZT(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XT(t){return t===_r?void 0:t}function ZT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const tI={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},nI=_e.INFO,rI={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},sI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=nI,this._logHandler=sI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const iI=(t,e)=>e.some(n=>t instanceof n);let vf,Ef;function oI(){return vf||(vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aI(){return Ef||(Ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yg=new WeakMap,Ml=new WeakMap,vg=new WeakMap,ul=new WeakMap,Sc=new WeakMap;function lI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Kn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yg.set(n,t)}).catch(()=>{}),Sc.set(e,t),e}function cI(t){if(Ml.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ml.set(t,e)}let Fl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uI(t){Fl=t(Fl)}function hI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hl(this),e,...n);return vg.set(r,e.sort?e.sort():[e]),Kn(r)}:aI().includes(t)?function(...e){return t.apply(hl(this),e),Kn(yg.get(this))}:function(...e){return Kn(t.apply(hl(this),e))}}function fI(t){return typeof t=="function"?hI(t):(t instanceof IDBTransaction&&cI(t),iI(t,oI())?new Proxy(t,Fl):t)}function Kn(t){if(t instanceof IDBRequest)return lI(t);if(ul.has(t))return ul.get(t);const e=fI(t);return e!==t&&(ul.set(t,e),Sc.set(e,t)),e}const hl=t=>Sc.get(t);function dI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Kn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Kn(o.result),c.oldVersion,c.newVersion,Kn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const pI=["get","getKey","getAll","getAllKeys","count"],gI=["put","add","delete","clear"],fl=new Map;function Tf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fl.get(e))return fl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=gI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return fl.set(e,i),i}uI(t=>({...t,get:(e,n,r)=>Tf(e,n)||t.get(e,n,r),has:(e,n)=>!!Tf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_I(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _I(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ul="@firebase/app",If="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new bc("@firebase/app"),yI="@firebase/app-compat",vI="@firebase/analytics-compat",EI="@firebase/analytics",TI="@firebase/app-check-compat",II="@firebase/app-check",wI="@firebase/auth",AI="@firebase/auth-compat",RI="@firebase/database",bI="@firebase/data-connect",SI="@firebase/database-compat",PI="@firebase/functions",CI="@firebase/functions-compat",NI="@firebase/installations",DI="@firebase/installations-compat",kI="@firebase/messaging",OI="@firebase/messaging-compat",VI="@firebase/performance",xI="@firebase/performance-compat",LI="@firebase/remote-config",MI="@firebase/remote-config-compat",FI="@firebase/storage",UI="@firebase/storage-compat",BI="@firebase/firestore",jI="@firebase/vertexai-preview",qI="@firebase/firestore-compat",$I="firebase",HI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="[DEFAULT]",WI={[Ul]:"fire-core",[yI]:"fire-core-compat",[EI]:"fire-analytics",[vI]:"fire-analytics-compat",[II]:"fire-app-check",[TI]:"fire-app-check-compat",[wI]:"fire-auth",[AI]:"fire-auth-compat",[RI]:"fire-rtdb",[bI]:"fire-data-connect",[SI]:"fire-rtdb-compat",[PI]:"fire-fn",[CI]:"fire-fn-compat",[NI]:"fire-iid",[DI]:"fire-iid-compat",[kI]:"fire-fcm",[OI]:"fire-fcm-compat",[VI]:"fire-perf",[xI]:"fire-perf-compat",[LI]:"fire-rc",[MI]:"fire-rc-compat",[FI]:"fire-gcs",[UI]:"fire-gcs-compat",[BI]:"fire-fst",[qI]:"fire-fst-compat",[jI]:"fire-vertex","fire-js":"fire-js",[$I]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Map,KI=new Map,jl=new Map;function wf(t,e){try{t.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(jl.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;jl.set(e,t);for(const n of Vo.values())wf(n,t);for(const n of KI.values())wf(n,t);return!0}function Pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new wi("app","Firebase",GI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=HI;function Eg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Gn.create("bad-app-name",{appName:String(s)});if(n||(n=mg()),!n)throw Gn.create("no-options");const i=Vo.get(s);if(i){if(Oo(n,i.options)&&Oo(r,i.config))return i;throw Gn.create("duplicate-app",{appName:s})}const o=new eI(s);for(const c of jl.values())o.addComponent(c);const l=new zI(n,r,o);return Vo.set(s,l),l}function Tg(t=Bl){const e=Vo.get(t);if(!e&&t===Bl&&mg())return Eg();if(!e)throw Gn.create("no-app",{appName:t});return e}function zn(t,e,n){var r;let s=(r=WI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(l.join(" "));return}ss(new Ar(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="firebase-heartbeat-database",JI=1,hi="firebase-heartbeat-store";let dl=null;function Ig(){return dl||(dl=dI(QI,JI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),dl}async function YI(t){try{const n=(await Ig()).transaction(hi),r=await n.objectStore(hi).get(wg(t));return await n.done,r}catch(e){if(e instanceof Sn)In.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function Af(t,e){try{const r=(await Ig()).transaction(hi,"readwrite");await r.objectStore(hi).put(e,wg(t)),await r.done}catch(n){if(n instanceof Sn)In.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(r.message)}}}function wg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=1024,ZI=30*24*60*60*1e3;class ew{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ZI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){In.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rf(),{heartbeatsToSend:r,unsentEntries:s}=tw(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return In.warn(n),""}}}function Rf(){return new Date().toISOString().substring(0,10)}function tw(t,e=XI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qT()?$T().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await YI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bf(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(t){ss(new Ar("platform-logger",e=>new mI(e),"PRIVATE")),ss(new Ar("heartbeat",e=>new ew(e),"PRIVATE")),zn(Ul,If,t),zn(Ul,If,"esm2017"),zn("fire-js","")}rw("");function Cc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ag(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sw=Ag,Rg=new wi("auth","Firebase",Ag());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new bc("@firebase/auth");function iw(t,...e){xo.logLevel<=_e.WARN&&xo.warn(`Auth (${ps}): ${t}`,...e)}function go(t,...e){xo.logLevel<=_e.ERROR&&xo.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw Nc(t,...e)}function Zt(t,...e){return Nc(t,...e)}function bg(t,e,n){const r=Object.assign(Object.assign({},sw()),{[e]:n});return new wi("auth","Firebase",r).create(e,{appName:t.name})}function Qn(t){return bg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rg.create(t,...e)}function oe(t,e,...n){if(!t)throw Nc(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function wn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ow(){return Sf()==="http:"||Sf()==="https:"}function Sf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ow()||FT()||"connection"in navigator)?navigator.onLine:!0}function lw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=xT()||UT()}get(){return aw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new Ri(3e4,6e4);function Cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sr(t,e,n,r,s={}){return Pg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ai(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return MT()||(h.referrerPolicy="no-referrer"),Sg.fetch()(Cg(t,t.config.apiHost,n,l),h)})}async function Pg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cw),e);try{const s=new fw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw no(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw no(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw no(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw bg(t,f,h);Wt(t,f)}}catch(s){if(s instanceof Sn)throw s;Wt(t,"network-request-failed",{message:String(s)})}}async function ha(t,e,n,r,s={}){const i=await sr(t,e,n,r,s);return"mfaPendingCredential"in i&&Wt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Cg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Dc(t.config,s):`${t.config.apiScheme}://${s}`}function hw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),uw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zt(t,e,r);return s.customData._tokenResponse=n,s}function Pf(t){return t!==void 0&&t.enterprise!==void 0}class dw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function pw(t,e){return sr(t,"GET","/v2/recaptchaConfig",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(t,e){return sr(t,"POST","/v1/accounts:delete",e)}async function Ng(t,e){return sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mw(t,e=!1){const n=pt(t),r=await n.getIdToken(e),s=kc(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(pl(s.auth_time)),issuedAtTime:Xs(pl(s.iat)),expirationTime:Xs(pl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pl(t){return Number(t)*1e3}function kc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const s=pg(n);return s?JSON.parse(s):(go("Failed to decode base64 JWT payload"),null)}catch(s){return go("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Cf(t){const e=kc(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&_w(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _w({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await fi(t,Ng(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Dg(i.providerUserInfo):[],l=Ew(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new $l(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function vw(t){const e=pt(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ew(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Dg(t){return t.map(e=>{var{providerId:n}=e,r=Cc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(t,e){const n=await Pg(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Cg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Sg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Iw(t,e){return sr(t,"POST","/v2/accounts:revokeToken",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Cf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Tw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Yr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Cc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $l(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fi(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mw(this,e)}reload(){return vw(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Qn(this.auth));const e=await this.getIdToken();return await fi(this,gw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:H,isAnonymous:ae,providerData:se,stsTokenManager:R}=n;oe(q&&R,e,"internal-error");const v=Yr.fromJSON(this.name,R);oe(typeof q=="string",e,"internal-error"),xn(p,e.name),xn(g,e.name),oe(typeof H=="boolean",e,"internal-error"),oe(typeof ae=="boolean",e,"internal-error"),xn(y,e.name),xn(C,e.name),xn(D,e.name),xn(k,e.name),xn(j,e.name),xn(B,e.name);const _=new _n({uid:q,auth:e,email:g,emailVerified:H,displayName:p,isAnonymous:ae,photoURL:C,phoneNumber:y,tenantId:D,stsTokenManager:v,createdAt:j,lastLoginAt:B});return se&&Array.isArray(se)&&(_.providerData=se.map(A=>Object.assign({},A))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Yr;s.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Lo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Dg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Yr;l.updateFromIdToken(r);const c=new _n({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new $l(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new Map;function yn(t){wn(t instanceof Function,"Expected a class definition");let e=Nf.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kg.type="NONE";const Df=kg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xr(yn(Df),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||yn(Df);const o=mo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=_n._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Xr(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Xr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Og(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fg(e))return"Blackberry";if(Ug(e))return"Webos";if(Vg(e))return"Safari";if((e.includes("chrome/")||xg(e))&&!e.includes("edge/"))return"Chrome";if(Mg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Og(t=dt()){return/firefox\//i.test(t)}function Vg(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xg(t=dt()){return/crios\//i.test(t)}function Lg(t=dt()){return/iemobile/i.test(t)}function Mg(t=dt()){return/android/i.test(t)}function Fg(t=dt()){return/blackberry/i.test(t)}function Ug(t=dt()){return/webos/i.test(t)}function Oc(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ww(t=dt()){var e;return Oc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Aw(){return BT()&&document.documentMode===10}function Bg(t=dt()){return Oc(t)||Mg(t)||Ug(t)||Fg(t)||/windows phone/i.test(t)||Lg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e=[]){let n;switch(t){case"Browser":n=kf(dt());break;case"Worker":n=`${kf(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(t,e={}){return sr(t,"GET","/v2/passwordPolicy",Cr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=6;class Pw{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Sw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Of(this),this.idTokenSubscription=new Of(this),this.beforeStateQueue=new Rw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ng(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(Qn(this));const n=e?pt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bw(this),n=new Pw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Iw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&iw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gs(t){return pt(t)}class Of{constructor(e){this.auth=e,this.observer=null,this.addObserver=zT(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Nw(t){fa=t}function qg(t){return fa.loadJS(t)}function Dw(){return fa.recaptchaEnterpriseScript}function kw(){return fa.gapiScript}function Ow(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Vw="recaptcha-enterprise",xw="NO_RECAPTCHA";class Lw{constructor(e){this.type=Vw,this.auth=gs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{pw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new dw(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Pf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(xw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Pf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Dw();c.length!==0&&(c+=l),qg(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Vf(t,e,n,r=!1){const s=new Lw(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xf(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Vf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Vf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t,e){const n=Pc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Oo(i,e??{}))return s;Wt(s,"already-initialized")}return n.initialize({options:e})}function Fw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Uw(t,e,n){const r=gs(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$g(e),{host:o,port:l}=Bw(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),jw()}function $g(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bw(t){const e=$g(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Lf(o)}}}function Lf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function qw(t,e){return sr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(t,e){return ha(t,"POST","/v1/accounts:signInWithPassword",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(t,e){return ha(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}async function Ww(t,e){return ha(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Vc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new di(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new di(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xf(e,n,"signInWithPassword",$w);case"emailLink":return Hw(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xf(e,r,"signUpPassword",qw);case"emailLink":return Ww(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(t,e){return ha(t,"POST","/v1/accounts:signInWithIdp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="http://localhost";class Rr extends Vc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Cc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:Kw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zw(t){const e=Us(Bs(t)).link,n=e?Us(Bs(e)).deep_link_id:null,r=Us(Bs(t)).deep_link_id;return(r?Us(Bs(r)).link:null)||r||n||e||t}class xc{constructor(e){var n,r,s,i,o,l;const c=Us(Bs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Gw((s=c.mode)!==null&&s!==void 0?s:null);oe(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=zw(e);try{return new xc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return di._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xc.parseLink(n);return oe(r,"argument-error"),di._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Hg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends bi{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends bi{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends bi{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await _n._fromIdTokenResponse(e,r,s),o=Mf(r);return new is({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mf(r);return new is({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends Sn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Mo(e,n,r,s)}}function Wg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(t,i,e,r):i})}async function Qw(t,e,n=!1){const r=await fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return is._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(Qn(r));const s="reauthenticate";try{const i=await fi(t,Wg(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=kc(i.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),is._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(t,e,n=!1){if(gn(t.app))return Promise.reject(Qn(t));const r="signIn",s=await Wg(t,r,e),i=await is._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Yw(t,e){return Kg(gs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(t){const e=gs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Zw(t,e,n){return gn(t.app)?Promise.reject(Qn(t)):Yw(pt(t),ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xw(t),r})}function eA(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function tA(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}const Fo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fo,"1"),this.storage.removeItem(Fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=1e3,rA=10;class zg extends Gg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Aw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,rA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zg.type="LOCAL";const sA=zg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg extends Gg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qg.type="SESSION";const Jg=Qg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await iA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Lc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function aA(t){en().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function lA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uA(){return Yg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="firebaseLocalStorageDb",hA=1,Uo="firebaseLocalStorage",Zg="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pa(t,e){return t.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function fA(){const t=indexedDB.deleteDatabase(Xg);return new Si(t).toPromise()}function Hl(){const t=indexedDB.open(Xg,hA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uo,{keyPath:Zg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uo)?e(r):(r.close(),await fA(),e(await Hl()))})})}async function Ff(t,e,n){const r=pa(t,!0).put({[Zg]:e,value:n});return new Si(r).toPromise()}async function dA(t,e){const n=pa(t,!1).get(e),r=await new Si(n).toPromise();return r===void 0?null:r.value}function Uf(t,e){const n=pa(t,!0).delete(e);return new Si(n).toPromise()}const pA=800,gA=3;class em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=da._getInstance(uA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lA(),!this.activeServiceWorker)return;this.sender=new oA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hl();return await Ff(e,Fo,"1"),await Uf(e,Fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ff(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=pa(s,!1).getAll();return new Si(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}em.type="LOCAL";const mA=em;new Ri(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t,e){return e?yn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends Vc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yA(t){return Kg(t.auth,new Mc(t),t.bypassAuthState)}function vA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),Jw(n,new Mc(t),t.bypassAuthState)}async function EA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),Qw(n,new Mc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yA;case"linkViaPopup":case"linkViaRedirect":return EA;case"reauthViaPopup":case"reauthViaRedirect":return vA;default:Wt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=new Ri(2e3,1e4);class Wr extends tm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Wr.currentPopupAction&&Wr.currentPopupAction.cancel(),Wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TA.get())};e()}}Wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="pendingRedirect",_o=new Map;class wA extends tm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await AA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AA(t,e){const n=SA(e),r=bA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function RA(t,e){_o.set(t._key(),e)}function bA(t){return yn(t._redirectPersistence)}function SA(t){return mo(IA,t.config.apiKey,t.name)}async function PA(t,e,n=!1){if(gn(t.app))return Promise.reject(Qn(t));const r=gs(t),s=_A(r,e),o=await new wA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=10*60*1e3;class NA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bf(e))}saveEventToCache(e){this.cachedEventUids.add(Bf(e)),this.lastProcessedEventTime=Date.now()}}function Bf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(t,e={}){return sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VA=/^https?/;async function xA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kA(t);for(const n of e)try{if(LA(n))return}catch{}Wt(t,"unauthorized-domain")}function LA(t){const e=ql(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VA.test(n))return!1;if(OA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=new Ri(3e4,6e4);function jf(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FA(t){return new Promise((e,n)=>{var r,s,i;function o(){jf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jf(),n(Zt(t,"network-request-failed"))},timeout:MA.get()})}if(!((s=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)o();else{const l=Ow("iframefcb");return en()[l]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},qg(`${kw()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw yo=null,e})}let yo=null;function UA(t){return yo=yo||FA(t),yo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=new Ri(5e3,15e3),jA="__/auth/iframe",qA="emulator/auth/iframe",$A={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WA(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dc(e,qA):`https://${t.config.authDomain}/${jA}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=HA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ai(r).slice(1)}`}async function KA(t){const e=await UA(t),n=en().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:WA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$A,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),l=en().setTimeout(()=>{i(o)},BA.get());function c(){en().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zA=500,QA=600,JA="_blank",YA="http://localhost";class qf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XA(t,e,n,r=zA,s=QA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},GA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=dt().toLowerCase();n&&(l=xg(h)?JA:n),Og(h)&&(e=e||YA,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[y,C])=>`${g}${y}=${C},`,"");if(ww(h)&&l!=="_self")return ZA(e||"",l),new qf(null);const p=window.open(e||"",l,f);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new qf(p)}function ZA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="__/auth/handler",tR="emulator/auth/handler",nR=encodeURIComponent("fac");async function $f(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof Hg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof bi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${nR}=${encodeURIComponent(c)}`:"";return`${rR(t)}?${Ai(l).slice(1)}${h}`}function rR({config:t}){return t.emulator?Dc(t,tR):`https://${t.authDomain}/${eR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="webStorageSupport";class sR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jg,this._completeRedirectFn=PA,this._overrideRedirectResult=RA}async _openPopup(e,n,r,s){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $f(e,n,r,ql(),s);return XA(e,o,Lc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $f(e,n,r,ql(),s);return aA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KA(e),r=new NA(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gl,{type:gl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[gl];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bg()||Vg()||Oc()}}const iR=sR;var Hf="@firebase/auth",Wf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lR(t){ss(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(t)},h=new Cw(r,s,i,c);return Fw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ss(new Ar("auth-internal",e=>{const n=gs(e.getProvider("auth").getImmediate());return(r=>new oR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(Hf,Wf,aR(t)),zn(Hf,Wf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=5*60,uR=_g("authIdTokenMaxAge")||cR;let Kf=null;const hR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uR)return;const s=n==null?void 0:n.token;Kf!==s&&(Kf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fR(t=Tg()){const e=Pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mw(t,{popupRedirectResolver:iR,persistence:[mA,sA,Jg]}),r=_g("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=hR(i.toString());tA(n,o,()=>o(n.currentUser)),eA(n,l=>o(l))}}const s=gg("auth");return s&&Uw(n,`http://${s}`),n}function dR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Nw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",dR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lR("Browser");var pR="firebase",gR="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn(pR,gR,"app");var Gf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wr,rm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function _(){}_.prototype=v.prototype,R.D=v.prototype,R.prototype=new _,R.prototype.constructor=R,R.C=function(A,b,I){for(var T=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)T[Se-2]=arguments[Se];return v.prototype[b].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,v,_){_||(_=0);var A=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)A[b]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(b=0;16>b;++b)A[b]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=R.g[0],_=R.g[1],b=R.g[2];var I=R.g[3],T=v+(I^_&(b^I))+A[0]+3614090360&4294967295;v=_+(T<<7&4294967295|T>>>25),T=I+(b^v&(_^b))+A[1]+3905402710&4294967295,I=v+(T<<12&4294967295|T>>>20),T=b+(_^I&(v^_))+A[2]+606105819&4294967295,b=I+(T<<17&4294967295|T>>>15),T=_+(v^b&(I^v))+A[3]+3250441966&4294967295,_=b+(T<<22&4294967295|T>>>10),T=v+(I^_&(b^I))+A[4]+4118548399&4294967295,v=_+(T<<7&4294967295|T>>>25),T=I+(b^v&(_^b))+A[5]+1200080426&4294967295,I=v+(T<<12&4294967295|T>>>20),T=b+(_^I&(v^_))+A[6]+2821735955&4294967295,b=I+(T<<17&4294967295|T>>>15),T=_+(v^b&(I^v))+A[7]+4249261313&4294967295,_=b+(T<<22&4294967295|T>>>10),T=v+(I^_&(b^I))+A[8]+1770035416&4294967295,v=_+(T<<7&4294967295|T>>>25),T=I+(b^v&(_^b))+A[9]+2336552879&4294967295,I=v+(T<<12&4294967295|T>>>20),T=b+(_^I&(v^_))+A[10]+4294925233&4294967295,b=I+(T<<17&4294967295|T>>>15),T=_+(v^b&(I^v))+A[11]+2304563134&4294967295,_=b+(T<<22&4294967295|T>>>10),T=v+(I^_&(b^I))+A[12]+1804603682&4294967295,v=_+(T<<7&4294967295|T>>>25),T=I+(b^v&(_^b))+A[13]+4254626195&4294967295,I=v+(T<<12&4294967295|T>>>20),T=b+(_^I&(v^_))+A[14]+2792965006&4294967295,b=I+(T<<17&4294967295|T>>>15),T=_+(v^b&(I^v))+A[15]+1236535329&4294967295,_=b+(T<<22&4294967295|T>>>10),T=v+(b^I&(_^b))+A[1]+4129170786&4294967295,v=_+(T<<5&4294967295|T>>>27),T=I+(_^b&(v^_))+A[6]+3225465664&4294967295,I=v+(T<<9&4294967295|T>>>23),T=b+(v^_&(I^v))+A[11]+643717713&4294967295,b=I+(T<<14&4294967295|T>>>18),T=_+(I^v&(b^I))+A[0]+3921069994&4294967295,_=b+(T<<20&4294967295|T>>>12),T=v+(b^I&(_^b))+A[5]+3593408605&4294967295,v=_+(T<<5&4294967295|T>>>27),T=I+(_^b&(v^_))+A[10]+38016083&4294967295,I=v+(T<<9&4294967295|T>>>23),T=b+(v^_&(I^v))+A[15]+3634488961&4294967295,b=I+(T<<14&4294967295|T>>>18),T=_+(I^v&(b^I))+A[4]+3889429448&4294967295,_=b+(T<<20&4294967295|T>>>12),T=v+(b^I&(_^b))+A[9]+568446438&4294967295,v=_+(T<<5&4294967295|T>>>27),T=I+(_^b&(v^_))+A[14]+3275163606&4294967295,I=v+(T<<9&4294967295|T>>>23),T=b+(v^_&(I^v))+A[3]+4107603335&4294967295,b=I+(T<<14&4294967295|T>>>18),T=_+(I^v&(b^I))+A[8]+1163531501&4294967295,_=b+(T<<20&4294967295|T>>>12),T=v+(b^I&(_^b))+A[13]+2850285829&4294967295,v=_+(T<<5&4294967295|T>>>27),T=I+(_^b&(v^_))+A[2]+4243563512&4294967295,I=v+(T<<9&4294967295|T>>>23),T=b+(v^_&(I^v))+A[7]+1735328473&4294967295,b=I+(T<<14&4294967295|T>>>18),T=_+(I^v&(b^I))+A[12]+2368359562&4294967295,_=b+(T<<20&4294967295|T>>>12),T=v+(_^b^I)+A[5]+4294588738&4294967295,v=_+(T<<4&4294967295|T>>>28),T=I+(v^_^b)+A[8]+2272392833&4294967295,I=v+(T<<11&4294967295|T>>>21),T=b+(I^v^_)+A[11]+1839030562&4294967295,b=I+(T<<16&4294967295|T>>>16),T=_+(b^I^v)+A[14]+4259657740&4294967295,_=b+(T<<23&4294967295|T>>>9),T=v+(_^b^I)+A[1]+2763975236&4294967295,v=_+(T<<4&4294967295|T>>>28),T=I+(v^_^b)+A[4]+1272893353&4294967295,I=v+(T<<11&4294967295|T>>>21),T=b+(I^v^_)+A[7]+4139469664&4294967295,b=I+(T<<16&4294967295|T>>>16),T=_+(b^I^v)+A[10]+3200236656&4294967295,_=b+(T<<23&4294967295|T>>>9),T=v+(_^b^I)+A[13]+681279174&4294967295,v=_+(T<<4&4294967295|T>>>28),T=I+(v^_^b)+A[0]+3936430074&4294967295,I=v+(T<<11&4294967295|T>>>21),T=b+(I^v^_)+A[3]+3572445317&4294967295,b=I+(T<<16&4294967295|T>>>16),T=_+(b^I^v)+A[6]+76029189&4294967295,_=b+(T<<23&4294967295|T>>>9),T=v+(_^b^I)+A[9]+3654602809&4294967295,v=_+(T<<4&4294967295|T>>>28),T=I+(v^_^b)+A[12]+3873151461&4294967295,I=v+(T<<11&4294967295|T>>>21),T=b+(I^v^_)+A[15]+530742520&4294967295,b=I+(T<<16&4294967295|T>>>16),T=_+(b^I^v)+A[2]+3299628645&4294967295,_=b+(T<<23&4294967295|T>>>9),T=v+(b^(_|~I))+A[0]+4096336452&4294967295,v=_+(T<<6&4294967295|T>>>26),T=I+(_^(v|~b))+A[7]+1126891415&4294967295,I=v+(T<<10&4294967295|T>>>22),T=b+(v^(I|~_))+A[14]+2878612391&4294967295,b=I+(T<<15&4294967295|T>>>17),T=_+(I^(b|~v))+A[5]+4237533241&4294967295,_=b+(T<<21&4294967295|T>>>11),T=v+(b^(_|~I))+A[12]+1700485571&4294967295,v=_+(T<<6&4294967295|T>>>26),T=I+(_^(v|~b))+A[3]+2399980690&4294967295,I=v+(T<<10&4294967295|T>>>22),T=b+(v^(I|~_))+A[10]+4293915773&4294967295,b=I+(T<<15&4294967295|T>>>17),T=_+(I^(b|~v))+A[1]+2240044497&4294967295,_=b+(T<<21&4294967295|T>>>11),T=v+(b^(_|~I))+A[8]+1873313359&4294967295,v=_+(T<<6&4294967295|T>>>26),T=I+(_^(v|~b))+A[15]+4264355552&4294967295,I=v+(T<<10&4294967295|T>>>22),T=b+(v^(I|~_))+A[6]+2734768916&4294967295,b=I+(T<<15&4294967295|T>>>17),T=_+(I^(b|~v))+A[13]+1309151649&4294967295,_=b+(T<<21&4294967295|T>>>11),T=v+(b^(_|~I))+A[4]+4149444226&4294967295,v=_+(T<<6&4294967295|T>>>26),T=I+(_^(v|~b))+A[11]+3174756917&4294967295,I=v+(T<<10&4294967295|T>>>22),T=b+(v^(I|~_))+A[2]+718787259&4294967295,b=I+(T<<15&4294967295|T>>>17),T=_+(I^(b|~v))+A[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,R.g[2]=R.g[2]+b&4294967295,R.g[3]=R.g[3]+I&4294967295}r.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var _=v-this.blockSize,A=this.B,b=this.h,I=0;I<v;){if(b==0)for(;I<=_;)s(this,R,I),I+=this.blockSize;if(typeof R=="string"){for(;I<v;)if(A[b++]=R.charCodeAt(I++),b==this.blockSize){s(this,A),b=0;break}}else for(;I<v;)if(A[b++]=R[I++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var _=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=_&255,_/=256;for(this.u(R),R=Array(16),v=_=0;4>v;++v)for(var A=0;32>A;A+=8)R[_++]=this.g[v]>>>A&255;return R};function i(R,v){var _=l;return Object.prototype.hasOwnProperty.call(_,R)?_[R]:_[R]=v(R)}function o(R,v){this.h=v;for(var _=[],A=!0,b=R.length-1;0<=b;b--){var I=R[b]|0;A&&I==v||(_[b]=I,A=!1)}this.g=_}var l={};function c(R){return-128<=R&&128>R?i(R,function(v){return new o([v|0],0>v?-1:0)}):new o([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return k(h(-R));for(var v=[],_=1,A=0;R>=_;A++)v[A]=R/_|0,_*=4294967296;return new o(v,0)}function f(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return k(f(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(v,8)),A=p,b=0;b<R.length;b+=8){var I=Math.min(8,R.length-b),T=parseInt(R.substring(b,b+I),v);8>I?(I=h(Math.pow(v,I)),A=A.j(I).add(h(T))):(A=A.j(_),A=A.add(h(T)))}return A}var p=c(0),g=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(D(this))return-k(this).m();for(var R=0,v=1,_=0;_<this.g.length;_++){var A=this.i(_);R+=(0<=A?A:4294967296+A)*v,v*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(C(this))return"0";if(D(this))return"-"+k(this).toString(R);for(var v=h(Math.pow(R,6)),_=this,A="";;){var b=H(_,v).g;_=j(_,b.j(v));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(R);if(_=b,C(_))return I+A;for(;6>I.length;)I="0"+I;A=I+A}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function C(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function D(R){return R.h==-1}t.l=function(R){return R=j(this,R),D(R)?-1:C(R)?0:1};function k(R){for(var v=R.g.length,_=[],A=0;A<v;A++)_[A]=~R.g[A];return new o(_,~R.h).add(g)}t.abs=function(){return D(this)?k(this):this},t.add=function(R){for(var v=Math.max(this.g.length,R.g.length),_=[],A=0,b=0;b<=v;b++){var I=A+(this.i(b)&65535)+(R.i(b)&65535),T=(I>>>16)+(this.i(b)>>>16)+(R.i(b)>>>16);A=T>>>16,I&=65535,T&=65535,_[b]=T<<16|I}return new o(_,_[_.length-1]&-2147483648?-1:0)};function j(R,v){return R.add(k(v))}t.j=function(R){if(C(this)||C(R))return p;if(D(this))return D(R)?k(this).j(k(R)):k(k(this).j(R));if(D(R))return k(this.j(k(R)));if(0>this.l(y)&&0>R.l(y))return h(this.m()*R.m());for(var v=this.g.length+R.g.length,_=[],A=0;A<2*v;A++)_[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<R.g.length;b++){var I=this.i(A)>>>16,T=this.i(A)&65535,Se=R.i(b)>>>16,He=R.i(b)&65535;_[2*A+2*b]+=T*He,B(_,2*A+2*b),_[2*A+2*b+1]+=I*He,B(_,2*A+2*b+1),_[2*A+2*b+1]+=T*Se,B(_,2*A+2*b+1),_[2*A+2*b+2]+=I*Se,B(_,2*A+2*b+2)}for(A=0;A<v;A++)_[A]=_[2*A+1]<<16|_[2*A];for(A=v;A<2*v;A++)_[A]=0;return new o(_,0)};function B(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function q(R,v){this.g=R,this.h=v}function H(R,v){if(C(v))throw Error("division by zero");if(C(R))return new q(p,p);if(D(R))return v=H(k(R),v),new q(k(v.g),k(v.h));if(D(v))return v=H(R,k(v)),new q(k(v.g),v.h);if(30<R.g.length){if(D(R)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var _=g,A=v;0>=A.l(R);)_=ae(_),A=ae(A);var b=se(_,1),I=se(A,1);for(A=se(A,2),_=se(_,2);!C(A);){var T=I.add(A);0>=T.l(R)&&(b=b.add(_),I=T),A=se(A,1),_=se(_,1)}return v=j(R,b.j(v)),new q(b,v)}for(b=p;0<=R.l(v);){for(_=Math.max(1,Math.floor(R.m()/v.m())),A=Math.ceil(Math.log(_)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),I=h(_),T=I.j(v);D(T)||0<T.l(R);)_-=A,I=h(_),T=I.j(v);C(I)&&(I=g),b=b.add(I),R=j(R,T)}return new q(b,R)}t.A=function(R){return H(this,R).h},t.and=function(R){for(var v=Math.max(this.g.length,R.g.length),_=[],A=0;A<v;A++)_[A]=this.i(A)&R.i(A);return new o(_,this.h&R.h)},t.or=function(R){for(var v=Math.max(this.g.length,R.g.length),_=[],A=0;A<v;A++)_[A]=this.i(A)|R.i(A);return new o(_,this.h|R.h)},t.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),_=[],A=0;A<v;A++)_[A]=this.i(A)^R.i(A);return new o(_,this.h^R.h)};function ae(R){for(var v=R.g.length+1,_=[],A=0;A<v;A++)_[A]=R.i(A)<<1|R.i(A-1)>>>31;return new o(_,R.h)}function se(R,v){var _=v>>5;v%=32;for(var A=R.g.length-_,b=[],I=0;I<A;I++)b[I]=0<v?R.i(I+_)>>>v|R.i(I+_+1)<<32-v:R.i(I+_);return new o(b,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,wr=o}).apply(typeof Gf<"u"?Gf:typeof self<"u"?self:typeof window<"u"?window:{});var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sm,js,im,vo,Wl,om,am,lm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ro=="object"&&ro];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,P={next:function(){if(!m&&d<a.length){var N=d++;return{value:u(N,a[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function y(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,P,N){for(var K=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)K[Pe-2]=arguments[Pe];return u.prototype[P].apply(m,K)}}function D(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function k(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const P=a.length||0,N=m.length||0;a.length=P+N;for(let K=0;K<N;K++)a[P+K]=m[K]}else a.push(m)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var ae=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function se(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function R(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let N=0;N<_.length;N++)d=_[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function b(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function I(a){l.setTimeout(()=>{throw a},0)}function T(){var a=wt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Se{constructor(){this.h=this.g=null}add(u,d){const m=He.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var He=new j(()=>new Ve,a=>a.reset());class Ve{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,ge=!1,wt=new Se,Ft=()=>{const a=l.Promise.resolve(void 0);ye=()=>{a.then(kt)}};var kt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){I(d)}var u=He;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ge=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var Pn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function At(a,u){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ae){e:{try{H(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Et[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&At.aa.h.call(this)}}C(At,Le);var Et={2:"touch",3:"pen",4:"mouse"};At.prototype.h=function(){At.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),J=0;function z(a,u,d,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++J,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pe(a){this.src=a,this.g={},this.h=0}pe.prototype.add=function(a,u,d,m,P){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var K=w(a,u,m,P);return-1<K?(u=a[K],d||(u.fa=!1)):(u=new z(u,this.src,N,!!m,P),u.fa=d,a.push(u)),u};function E(a,u){var d=u.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,u,void 0),N;(N=0<=P)&&Array.prototype.splice.call(m,P,1),N&&(Z(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function w(a,u,d,m){for(var P=0;P<a.length;++P){var N=a[P];if(!N.da&&N.listener==u&&N.capture==!!d&&N.ha==m)return P}return-1}var S="closure_lm_"+(1e6*Math.random()|0),V={};function L(a,u,d,m,P){if(Array.isArray(u)){for(var N=0;N<u.length;N++)L(a,u[N],d,m,P);return null}return d=ie(d),a&&a[O]?a.K(u,d,h(m)?!!m.capture:!1,P):x(a,u,d,!1,m,P)}function x(a,u,d,m,P,N){if(!u)throw Error("Invalid event type");var K=h(P)?!!P.capture:!!P,Pe=Q(a);if(Pe||(a[S]=Pe=new pe(a)),d=Pe.add(u,d,m,K,N),d.proxy)return d;if(m=G(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Pn||(P=K),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(F(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return u.call(a.src,a.listener,d)}const u=ne;return a}function W(a,u,d,m,P){if(Array.isArray(u))for(var N=0;N<u.length;N++)W(a,u[N],d,m,P);else m=h(m)?!!m.capture:!!m,d=ie(d),a&&a[O]?(a=a.i,u=String(u).toString(),u in a.g&&(N=a.g[u],d=w(N,d,m,P),-1<d&&(Z(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[u],a.h--)))):a&&(a=Q(a))&&(u=a.g[u.toString()],a=-1,u&&(a=w(u,d,m,P)),(d=-1<a?u[a]:null)&&$(d))}function $(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[O])E(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(F(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Q(u))?(E(d,a),d.h==0&&(d.src=null,u[S]=null)):Z(a)}}}function F(a){return a in V?V[a]:V[a]="on"+a}function ne(a,u){if(a.da)a=!0;else{u=new At(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&$(a),a=d.call(m,u)}return a}function Q(a){return a=a[S],a instanceof pe?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(u){return a.handleEvent(u)}),a[ee])}function re(){xe.call(this),this.i=new pe(this),this.M=this,this.F=null}C(re,xe),re.prototype[O]=!0,re.prototype.removeEventListener=function(a,u,d,m){W(this,a,u,d,m)};function de(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Le(u,a);else if(u instanceof Le)u.target=u.target||a;else{var P=u;u=new Le(m,a),A(u,P)}if(P=!0,d)for(var N=d.length-1;0<=N;N--){var K=u.g=d[N];P=ve(K,m,!0,u)&&P}if(K=u.g=a,P=ve(K,m,!0,u)&&P,P=ve(K,m,!1,u)&&P,d)for(N=0;N<d.length;N++)K=u.g=d[N],P=ve(K,m,!1,u)&&P}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Z(d[m]);delete a.g[u],a.h--}}this.F=null},re.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},re.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function ve(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,N=0;N<u.length;++N){var K=u[N];if(K&&!K.da&&K.capture==d){var Pe=K.listener,Ze=K.ha||K.src;K.fa&&E(a.i,K),P=Pe.call(Ze,m)!==!1&&P}}return P&&!m.defaultPrevented}function Je(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Ye(a){a.g=Je(()=>{a.g=null,a.i&&(a.i=!1,Ye(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Ot extends xe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function st(a){xe.call(this),this.h=a,this.g={}}C(st,xe);var Cn=[];function Es(a){se(a.g,function(u,d){this.g.hasOwnProperty(d)&&$(u)},a),a.g={}}st.prototype.N=function(){st.aa.N.call(this),Es(this)},st.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xe=l.JSON.stringify,Vt=l.JSON.parse,Li=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Or(){}Or.prototype.h=null;function yu(a){return a.h||(a.h=a.i())}function vu(){}var Ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Da(){Le.call(this,"d")}C(Da,Le);function ka(){Le.call(this,"c")}C(ka,Le);var or={},Eu=null;function Mi(){return Eu=Eu||new re}or.La="serverreachability";function Tu(a){Le.call(this,or.La,a)}C(Tu,Le);function Is(a){const u=Mi();de(u,new Tu(u))}or.STAT_EVENT="statevent";function Iu(a,u){Le.call(this,or.STAT_EVENT,a),this.stat=u}C(Iu,Le);function gt(a){const u=Mi();de(u,new Iu(u,a))}or.Ma="timingevent";function wu(a,u){Le.call(this,or.Ma,a),this.size=u}C(wu,Le);function ws(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function As(){this.g=!0}As.prototype.xa=function(){this.g=!1};function A_(a,u,d,m,P,N){a.info(function(){if(a.g)if(N)for(var K="",Pe=N.split("&"),Ze=0;Ze<Pe.length;Ze++){var Te=Pe[Ze].split("=");if(1<Te.length){var it=Te[0];Te=Te[1];var ot=it.split("_");K=2<=ot.length&&ot[1]=="type"?K+(it+"="+Te+"&"):K+(it+"=redacted&")}}else K=null;else K=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+K})}function R_(a,u,d,m,P,N,K){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+N+" "+K})}function Vr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+S_(a,d)+(m?" "+m:"")})}function b_(a,u){a.info(function(){return"TIMEOUT: "+u})}As.prototype.info=function(){};function S_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var K=1;K<P.length;K++)P[K]=""}}}}return Xe(d)}catch{return u}}var Fi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Au={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oa;function Ui(){}C(Ui,Or),Ui.prototype.g=function(){return new XMLHttpRequest},Ui.prototype.i=function(){return{}},Oa=new Ui;function Nn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new st(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ru}function Ru(){this.i=null,this.g="",this.h=!1}var bu={},Va={};function xa(a,u,d){a.L=1,a.v=$i(on(u)),a.m=d,a.P=!0,Su(a,null)}function Su(a,u){a.F=Date.now(),Bi(a),a.A=on(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),ju(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Ru,a.g=ih(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Ot(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Cn[0]=P.toString()),P=Cn);for(var N=0;N<P.length;N++){var K=L(d,P[N],m||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Is(),A_(a.i,a.u,a.A,a.l,a.R,a.m)}Nn.prototype.ca=function(a){a=a.target;const u=this.M;u&&an(a)==3?u.j():this.Y(a)},Nn.prototype.Y=function(a){try{if(a==this.g)e:{const ot=an(this.g);var u=this.g.Ba();const Mr=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||zu(this.g)))){this.J||ot!=4||u==7||(u==8||0>=Mr?Is(3):Is(2)),La(this);var d=this.g.Z();this.X=d;t:if(Pu(this)){var m=zu(this.g);a="";var P=m.length,N=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ar(this),Rs(this);var K="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(N&&u==P-1)});m.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,R_(this.i,this.u,this.A,this.l,this.R,ot,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Ze=this.g;if((Pe=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Pe)){var Te=Pe;break t}}Te=null}if(d=Te)Vr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ma(this,d);else{this.o=!1,this.s=3,gt(12),ar(this),Rs(this);break e}}if(this.P){d=!0;let Ut;for(;!this.J&&this.C<K.length;)if(Ut=P_(this,K),Ut==Va){ot==4&&(this.s=4,gt(14),d=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==bu){this.s=4,gt(15),Vr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else Vr(this.i,this.l,Ut,null),Ma(this,Ut);if(Pu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||K.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)Vr(this.i,this.l,K,"[Invalid Chunked Response]"),ar(this),Rs(this);else if(0<K.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),$a(it),it.M=!0,gt(11))}}else Vr(this.i,this.l,K,null),Ma(this,K);ot==4&&ar(this),this.o&&!this.J&&(ot==4?th(this.j,this):(this.o=!1,Bi(this)))}else W_(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),ar(this),Rs(this)}}}catch{}finally{}};function Pu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function P_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Va:(d=Number(u.substring(d,m)),isNaN(d)?bu:(m+=1,m+d>u.length?Va:(u=u.slice(m,m+d),a.C=m+d,u)))}Nn.prototype.cancel=function(){this.J=!0,ar(this)};function Bi(a){a.S=Date.now()+a.I,Cu(a,a.I)}function Cu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ws(g(a.ba,a),u)}function La(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Nn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(b_(this.i,this.A),this.L!=2&&(Is(),gt(17)),ar(this),this.s=2,Rs(this)):Cu(this,this.S-a)};function Rs(a){a.j.G==0||a.J||th(a.j,a)}function ar(a){La(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Es(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ma(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Fa(d.h,a))){if(!a.K&&Fa(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Qi(d),Gi(d);else break e;qa(d),gt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=ws(g(d.Za,d),6e3));if(1>=ku(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else cr(d,11)}else if((a.K||d.g==a)&&Qi(d),!B(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Te=P[u];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const it=Te[3];it!=null&&(d.la=it,d.j.info("VER="+d.la));const ot=Te[4];ot!=null&&(d.Aa=ot,d.j.info("SVER="+d.Aa));const Mr=Te[5];Mr!=null&&typeof Mr=="number"&&0<Mr&&(m=1.5*Mr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ut=a.g;if(Ut){const Yi=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yi){var N=m.h;N.g||Yi.indexOf("spdy")==-1&&Yi.indexOf("quic")==-1&&Yi.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ua(N,N.h),N.h=null))}if(m.D){const Ha=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Ha&&(m.ya=Ha,ke(m.I,m.D,Ha))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var K=a;if(m.qa=sh(m,m.J?m.ia:null,m.W),K.K){Ou(m.h,K);var Pe=K,Ze=m.L;Ze&&(Pe.I=Ze),Pe.B&&(La(Pe),Bi(Pe)),m.g=K}else Zu(m);0<d.i.length&&zi(d)}else Te[0]!="stop"&&Te[0]!="close"||cr(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?cr(d,7):ja(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}Is(4)}catch{}}var C_=class{constructor(a,u){this.g=a,this.map=u}};function Nu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Du(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ku(a){return a.h?1:a.g?a.g.size:0}function Fa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ua(a,u){a.g?a.g.add(u):a.h=u}function Ou(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Nu.prototype.cancel=function(){if(this.i=Vu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return D(a.i)}function N_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function D_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function xu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=D_(a),m=N_(a),P=m.length,N=0;N<P;N++)u.call(void 0,m[N],d&&d[N],a)}var Lu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function k_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),P=null;if(0<=m){var N=a[d].substring(0,m);P=a[d].substring(m+1)}else N=a[d];u(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof lr){this.h=a.h,ji(this,a.j),this.o=a.o,this.g=a.g,qi(this,a.s),this.l=a.l;var u=a.i,d=new Ps;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Mu(this,d),this.m=a.m}else a&&(u=String(a).match(Lu))?(this.h=!1,ji(this,u[1]||"",!0),this.o=bs(u[2]||""),this.g=bs(u[3]||"",!0),qi(this,u[4]),this.l=bs(u[5]||"",!0),Mu(this,u[6]||"",!0),this.m=bs(u[7]||"")):(this.h=!1,this.i=new Ps(null,this.h))}lr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ss(u,Fu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ss(u,Fu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ss(d,d.charAt(0)=="/"?x_:V_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ss(d,M_)),a.join("")};function on(a){return new lr(a)}function ji(a,u,d){a.j=d?bs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function qi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Mu(a,u,d){u instanceof Ps?(a.i=u,F_(a.i,a.h)):(d||(u=Ss(u,L_)),a.i=new Ps(u,a.h))}function ke(a,u,d){a.i.set(u,d)}function $i(a){return ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function bs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ss(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,O_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function O_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fu=/[#\/\?@]/g,V_=/[#\?:]/g,x_=/[#\?]/g,L_=/[#\?@]/g,M_=/#/g;function Ps(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Dn(a){a.g||(a.g=new Map,a.h=0,a.i&&k_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Ps.prototype,t.add=function(a,u){Dn(this),this.i=null,a=xr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Uu(a,u){Dn(a),u=xr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Bu(a,u){return Dn(a),u=xr(a,u),a.g.has(u)}t.forEach=function(a,u){Dn(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(u,P,m,this)},this)},this)},t.na=function(){Dn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const P=a[m];for(let N=0;N<P.length;N++)d.push(u[m])}return d},t.V=function(a){Dn(this);let u=[];if(typeof a=="string")Bu(this,a)&&(u=u.concat(this.g.get(xr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Dn(this),this.i=null,a=xr(this,a),Bu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function ju(a,u,d){Uu(a,u),0<d.length&&(a.i=null,a.g.set(xr(a,u),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const N=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var P=N;K[m]!==""&&(P+="="+encodeURIComponent(String(K[m]))),a.push(P)}}return this.i=a.join("&")};function xr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function F_(a,u){u&&!a.j&&(Dn(a),a.i=null,a.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(Uu(this,m),ju(this,P,d))},a)),a.j=u}function U_(a,u){const d=new As;if(l.Image){const m=new Image;m.onload=y(kn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=y(kn,d,"TestLoadImage: error",!1,u,m),m.onabort=y(kn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=y(kn,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function B_(a,u){const d=new As,m=new AbortController,P=setTimeout(()=>{m.abort(),kn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?kn(d,"TestPingServer: ok",!0,u):kn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),kn(d,"TestPingServer: error",!1,u)})}function kn(a,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function j_(){this.g=new Li}function q_(a,u,d){const m=d||"";try{xu(a,function(P,N){let K=P;h(P)&&(K=Xe(P)),u.push(m+N+"="+encodeURIComponent(K))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function Hi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Hi,Or),Hi.prototype.g=function(){return new Wi(this.l,this.j)},Hi.prototype.i=function(a){return function(){return a}}({});function Wi(a,u){re.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Wi,re),t=Wi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function qu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Cs(this):Ns(this),this.readyState==3&&qu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Cs(this))},t.Qa=function(a){this.g&&(this.response=a,Cs(this))},t.ga=function(){this.g&&Cs(this)};function Cs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ns(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $u(a){let u="";return se(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ba(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=$u(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ke(a,u,d))}function Fe(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Fe,re);var $_=/^https?$/i,H_=["POST","PUT"];t=Fe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oa.g(),this.v=this.o?yu(this.o):yu(Oa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(N){Hu(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(H_,u,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,K]of d)this.g.setRequestHeader(N,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gu(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Hu(this,N)}};function Hu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Wu(a),Ki(a)}function Wu(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),Ki(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ki(this,!0)),Fe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ku(this):this.bb())},t.bb=function(){Ku(this)};function Ku(a){if(a.h&&typeof o<"u"&&(!a.v[1]||an(a)!=4||a.Z()!=2)){if(a.u&&an(a)==4)Je(a.Ea,0,a);else if(de(a,"readystatechange"),an(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=K===0){var P=String(a.D).match(Lu)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!$_.test(P?P.toLowerCase():"")}d=m}if(d)de(a,"complete"),de(a,"success");else{a.m=6;try{var N=2<an(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Wu(a)}}finally{Ki(a)}}}}function Ki(a,u){if(a.g){Gu(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||de(a,"ready");try{d.onreadystatechange=m}catch{}}}function Gu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Vt(u)}};function zu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function W_(a){const u={};a=(a.g&&2<=an(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(B(a[m]))continue;var d=b(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=u[P]||[];u[P]=N,N.push(d)}R(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ds(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Qu(a){this.Aa=0,this.i=[],this.j=new As,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ds("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ds("baseRetryDelayMs",5e3,a),this.cb=Ds("retryDelaySeedMs",1e4,a),this.Wa=Ds("forwardChannelMaxRetries",2,a),this.wa=Ds("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Nu(a&&a.concurrentRequestLimit),this.Da=new j_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qu.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){gt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=sh(this,null,this.W),zi(this)};function ja(a){if(Ju(a),a.G==3){var u=a.U++,d=on(a.I);if(ke(d,"SID",a.K),ke(d,"RID",u),ke(d,"TYPE","terminate"),ks(a,d),u=new Nn(a,a.j,u),u.L=2,u.v=$i(on(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=ih(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Bi(u)}rh(a)}function Gi(a){a.g&&($a(a),a.g.cancel(),a.g=null)}function Ju(a){Gi(a),a.u&&(l.clearTimeout(a.u),a.u=null),Qi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function zi(a){if(!Du(a.h)&&!a.s){a.s=!0;var u=a.Ga;ye||Ft(),ge||(ye(),ge=!0),wt.add(u,a),a.B=0}}function K_(a,u){return ku(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ws(g(a.Ga,a,u),nh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Nn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Xu(this,P,u),d=on(this.I),ke(d,"RID",a),ke(d,"CVER",22),this.D&&ke(d,"X-HTTP-Session-Id",this.D),ks(this,d),N&&(this.O?u="headers="+encodeURIComponent(String($u(N)))+"&"+u:this.m&&Ba(d,this.m,N)),Ua(this.h,P),this.Ua&&ke(d,"TYPE","init"),this.P?(ke(d,"$req",u),ke(d,"SID","null"),P.T=!0,xa(P,d,null)):xa(P,d,u),this.G=2}}else this.G==3&&(a?Yu(this,a):this.i.length==0||Du(this.h)||Yu(this))};function Yu(a,u){var d;u?d=u.l:d=a.U++;const m=on(a.I);ke(m,"SID",a.K),ke(m,"RID",d),ke(m,"AID",a.T),ks(a,m),a.m&&a.o&&Ba(m,a.m,a.o),d=new Nn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Xu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ua(a.h,d),xa(d,m,u)}function ks(a,u){a.H&&se(a.H,function(d,m){ke(u,m,d)}),a.l&&xu({},function(d,m){ke(u,m,d)})}function Xu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let N=-1;for(;;){const K=["count="+d];N==-1?0<d?(N=P[0].g,K.push("ofs="+N)):N=0:K.push("ofs="+N);let Pe=!0;for(let Ze=0;Ze<d;Ze++){let Te=P[Ze].g;const it=P[Ze].map;if(Te-=N,0>Te)N=Math.max(0,P[Ze].g-100),Pe=!1;else try{q_(it,K,"req"+Te+"_")}catch{m&&m(it)}}if(Pe){m=K.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Zu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ye||Ft(),ge||(ye(),ge=!0),wt.add(u,a),a.v=0}}function qa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ws(g(a.Fa,a),nh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,eh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ws(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Gi(this),eh(this))};function $a(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function eh(a){a.g=new Nn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=on(a.qa);ke(u,"RID","rpc"),ke(u,"SID",a.K),ke(u,"AID",a.T),ke(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ke(u,"TO",a.ja),ke(u,"TYPE","xmlhttp"),ks(a,u),a.m&&a.o&&Ba(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=$i(on(u)),d.m=null,d.P=!0,Su(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Gi(this),qa(this),gt(19))};function Qi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function th(a,u){var d=null;if(a.g==u){Qi(a),$a(a),a.g=null;var m=2}else if(Fa(a.h,u))d=u.D,Ou(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;m=Mi(),de(m,new wu(m,d)),zi(a)}else Zu(a);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&K_(a,u)||m==2&&qa(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),P){case 1:cr(a,5);break;case 4:cr(a,10);break;case 3:cr(a,6);break;default:cr(a,2)}}}function nh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function cr(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const P=!m;m=new lr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ji(m,"https"),$i(m),P?U_(m.toString(),d):B_(m.toString(),d)}else gt(2);a.G=0,a.l&&a.l.sa(u),rh(a),Ju(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function rh(a){if(a.G=0,a.ka=[],a.l){const u=Vu(a.h);(u.length!=0||a.i.length!=0)&&(k(a.ka,u),k(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function sh(a,u,d){var m=d instanceof lr?on(d):new lr(d);if(m.g!="")u&&(m.g=u+"."+m.g),qi(m,m.s);else{var P=l.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var N=new lr(null);m&&ji(N,m),u&&(N.g=u),P&&qi(N,P),d&&(N.l=d),m=N}return d=a.D,u=a.ya,d&&u&&ke(m,d,u),ke(m,"VER",a.la),ks(a,m),m}function ih(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Fe(new Hi({eb:d})):new Fe(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function oh(){}t=oh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ji(){}Ji.prototype.g=function(a,u){return new Rt(a,u)};function Rt(a,u){re.call(this),this.g=new Qu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Lr(this)}C(Rt,re),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){ja(this.g)},Rt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Xe(a),a=d);u.i.push(new C_(u.Ya++,a)),u.G==3&&zi(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,ja(this.g),delete this.g,Rt.aa.N.call(this)};function ah(a){Da.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(ah,Da);function lh(){ka.call(this),this.status=1}C(lh,ka);function Lr(a){this.g=a}C(Lr,oh),Lr.prototype.ua=function(){de(this.g,"a")},Lr.prototype.ta=function(a){de(this.g,new ah(a))},Lr.prototype.sa=function(a){de(this.g,new lh)},Lr.prototype.ra=function(){de(this.g,"b")},Ji.prototype.createWebChannel=Ji.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,lm=function(){return new Ji},am=function(){return Mi()},om=or,Wl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fi.NO_ERROR=0,Fi.TIMEOUT=8,Fi.HTTP_ERROR=6,vo=Fi,Au.COMPLETE="complete",im=Au,vu.EventType=Ts,Ts.OPEN="a",Ts.CLOSE="b",Ts.ERROR="c",Ts.MESSAGE="d",re.prototype.listen=re.prototype.K,js=vu,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,sm=Fe}).apply(typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{});const zf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new bc("@firebase/firestore");function Ls(){return br.logLevel}function X(t,...e){if(br.logLevel<=_e.DEBUG){const n=e.map(Fc);br.debug(`Firestore (${_s}): ${t}`,...n)}}function An(t,...e){if(br.logLevel<=_e.ERROR){const n=e.map(Fc);br.error(`Firestore (${_s}): ${t}`,...n)}}function os(t,...e){if(br.logLevel<=_e.WARN){const n=e.map(Fc);br.warn(`Firestore (${_s}): ${t}`,...n)}}function Fc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function be(t,e){t||ce()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class _R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yR{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new cm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new lt(e)}}class vR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ER{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){be(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new TR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=wR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function as(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Ge(0,0))}static max(){return new ue(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(),r===void 0?r=e.length-n:r>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends pi{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const AR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends pi{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return AR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Oe.fromString(e))}static fromName(e){return new te(Oe.fromString(e).popFirst(5))}static empty(){return new te(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Oe(e.slice()))}}function RR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Zn(s,te.empty(),e)}function bR(t){return new Zn(t.readTime,t.key,-1)}class Zn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zn(ue.min(),te.empty(),-1)}static max(){return new Zn(ue.max(),te.empty(),-1)}}function SR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==PR)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function NR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ci(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Uc.oe=-1;function ga(t){return t==null}function Bo(t){return t===0&&1/t==-1/0}function DR(t){return typeof t=="number"&&Number.isInteger(t)&&!Bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Nr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new so(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new so(this.root,e,this.comparator,!1)}getReverseIterator(){return new so(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new so(this.root,e,this.comparator,!0)}}class so{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jf(this.data.getIterator())}getIteratorFrom(e){return new Jf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class Jf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new nt(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fm("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const kR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function er(t){if(be(!!t),typeof t=="string"){let e=0;const n=kR.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jc(t){const e=t.mapValue.fields.__previous_value__;return Bc(e)?jc(e):e}function gi(t){const e=er(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class mi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io={mapValue:{}};function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bc(t)?4:xR(t)?9007199254740991:VR(t)?10:11:ce()}function sn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gi(t).isEqual(gi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=er(s.timestampValue),l=er(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Sr(s.bytesValue).isEqual(Sr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),l=je(i.doubleValue);return o===l?Bo(o)===Bo(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Qf(o)!==Qf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!sn(o[c],l[c])))return!1;return!0}(t,e);default:return ce()}}function _i(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=je(i.integerValue||i.doubleValue),c=je(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Yf(t.timestampValue,e.timestampValue);case 4:return Yf(gi(t),gi(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Sr(i),c=Sr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Ie(l[h],c[h]);if(f!==0)return f}return Ie(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ie(je(i.latitude),je(o.latitude));return l!==0?l:Ie(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Xf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,f;const p=i.fields||{},g=o.fields||{},y=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(c=g.value)===null||c===void 0?void 0:c.arrayValue,D=Ie(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Xf(y,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===io.mapValue&&o===io.mapValue)return 0;if(i===io.mapValue)return 1;if(o===io.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Ie(c[p],f[p]);if(g!==0)return g;const y=ls(l[c[p]],h[f[p]]);if(y!==0)return y}return Ie(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ce()}}function Yf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=er(t),r=er(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function Xf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ls(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function cs(t){return Kl(t)}function Kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Kl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Kl(n.fields[o])}`;return s+"}"}(t.mapValue):ce()}function Zf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gl(t){return!!t&&"integerValue"in t}function qc(t){return!!t&&"arrayValue"in t}function ed(t){return!!t&&"nullValue"in t}function td(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eo(t){return!!t&&"mapValue"in t}function VR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Nr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Eo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Zs(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Eo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Eo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Nr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(Zs(this.value))}}function dm(t){const e=[];return Nr(t.fields,(n,r)=>{const s=new tt([n]);if(Eo(r)){const i=dm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,ue.min(),ue.min(),ue.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,ue.min(),ue.min(),It.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,ue.min(),ue.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n){this.position=e,this.inclusive=n}}function nd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=ls(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function rd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function LR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{}class $e extends pm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FR(e,n,r):n==="array-contains"?new jR(e,r):n==="in"?new qR(e,r):n==="not-in"?new $R(e,r):n==="array-contains-any"?new HR(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UR(e,r):new BR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ls(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends pm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kt(e,n)}matches(e){return gm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gm(t){return t.op==="and"}function mm(t){return MR(t)&&gm(t)}function MR(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function zl(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+cs(t.value);if(mm(t))return t.filters.map(e=>zl(e)).join(",");{const e=t.filters.map(n=>zl(n)).join(",");return`${t.op}(${e})`}}function _m(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&sn(r.value,s.value)}(t,e):t instanceof Kt?function(r,s){return s instanceof Kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&_m(o,s.filters[l]),!0):!1}(t,e):void ce()}function ym(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${cs(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(ym).join(" ,")+"}"}(t):"Filter"}class FR extends $e{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class UR extends $e{constructor(e,n){super(e,"in",n),this.keys=vm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BR extends $e{constructor(e,n){super(e,"not-in",n),this.keys=vm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class jR extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qc(n)&&_i(n.arrayValue,this.value)}}class qR extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_i(this.value.arrayValue,n)}}class $R extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_i(this.value.arrayValue,n)}}class HR extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_i(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function sd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new WR(t,e,n,r,s,i,o)}function $c(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ga(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>cs(r)).join(",")),e.ue=n}return e.ue}function Hc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_m(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rd(t.startAt,e.startAt)&&rd(t.endAt,e.endAt)}function Ql(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function KR(t,e,n,r,s,i,o,l){return new Ni(t,e,n,r,s,i,o,l)}function Em(t){return new Ni(t)}function id(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tm(t){return t.collectionGroup!==null}function ei(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new qo(i,r))}),n.has(tt.keyField().canonicalString())||e.ce.push(new qo(tt.keyField(),r))}return e.ce}function tn(t){const e=fe(t);return e.le||(e.le=GR(e,ei(t))),e.le}function GR(t,e){if(t.limitType==="F")return sd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new qo(s.field,i)});const n=t.endAt?new jo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new jo(t.startAt.position,t.startAt.inclusive):null;return sd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Jl(t,e){const n=t.filters.concat([e]);return new Ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $o(t,e,n){return new Ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ma(t,e){return Hc(tn(t),tn(e))&&t.limitType===e.limitType}function Im(t){return`${$c(tn(t))}|lt:${t.limitType}`}function qr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ym(s)).join(", ")}]`),ga(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>cs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>cs(s)).join(",")),`Target(${r})`}(tn(t))}; limitType=${t.limitType})`}function _a(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=nd(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,ei(r),s)||r.endAt&&!function(o,l,c){const h=nd(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,ei(r),s))}(t,e)}function zR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wm(t){return(e,n)=>{let r=!1;for(const s of ei(t)){const i=QR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function QR(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ls(c,h):ce()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Nr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new Me(te.comparator);function Rn(){return JR}const Am=new Me(te.comparator);function qs(...t){let e=Am;for(const n of t)e=e.insert(n.key,n);return e}function Rm(t){let e=Am;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Er(){return ti()}function bm(){return ti()}function ti(){return new ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const YR=new Me(te.comparator),XR=new nt(te.comparator);function me(...t){let e=XR;for(const n of t)e=e.add(n);return e}const ZR=new nt(Ie);function e0(){return ZR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(e)?"-0":e}}function Sm(t){return{integerValue:""+t}}function t0(t,e){return DR(e)?Sm(e):Wc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this._=void 0}}function n0(t,e,n){return t instanceof yi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bc(i)&&(i=jc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof vi?Cm(t,e):t instanceof Ei?Nm(t,e):function(s,i){const o=Pm(s,i),l=od(o)+od(s.Pe);return Gl(o)&&Gl(s.Pe)?Sm(l):Wc(s.serializer,l)}(t,e)}function r0(t,e,n){return t instanceof vi?Cm(t,e):t instanceof Ei?Nm(t,e):n}function Pm(t,e){return t instanceof Ho?function(r){return Gl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class yi extends ya{}class vi extends ya{constructor(e){super(),this.elements=e}}function Cm(t,e){const n=Dm(e);for(const r of t.elements)n.some(s=>sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ei extends ya{constructor(e){super(),this.elements=e}}function Nm(t,e){let n=Dm(e);for(const r of t.elements)n=n.filter(s=>!sn(s,r));return{arrayValue:{values:n}}}class Ho extends ya{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function od(t){return je(t.integerValue||t.doubleValue)}function Dm(t){return qc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n){this.field=e,this.transform=n}}function i0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof vi&&s instanceof vi||r instanceof Ei&&s instanceof Ei?as(r.elements,s.elements,sn):r instanceof Ho&&s instanceof Ho?sn(r.Pe,s.Pe):r instanceof yi&&s instanceof yi}(t.transform,e.transform)}class o0{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function To(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class va{}function km(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Vm(t.key,nn.none()):new Di(t.key,t.data,nn.none());{const n=t.data,r=It.empty();let s=new nt(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ir(t.key,r,new Nt(s.toArray()),nn.none())}}function a0(t,e,n){t instanceof Di?function(s,i,o){const l=s.value.clone(),c=ld(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ir?function(s,i,o){if(!To(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ld(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Om(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ni(t,e,n,r){return t instanceof Di?function(i,o,l,c){if(!To(i.precondition,o))return l;const h=i.value.clone(),f=cd(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ir?function(i,o,l,c){if(!To(i.precondition,o))return l;const h=cd(i.fieldTransforms,c,o),f=o.data;return f.setAll(Om(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return To(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function l0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Pm(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function ad(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&as(r,s,(i,o)=>i0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Di extends va{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ir extends va{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Om(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ld(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,r0(o,l,n[s]))}return r}function cd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,n0(i,o,e))}return r}class Vm extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class c0 extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&a0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=km(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>ad(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>ad(n,r))}}class Kc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return YR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Kc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,Ee;function d0(t){switch(t){default:return ce();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function xm(t){if(t===void 0)return An("GRPC error has no .code"),M.UNKNOWN;switch(t){case qe.OK:return M.OK;case qe.CANCELLED:return M.CANCELLED;case qe.UNKNOWN:return M.UNKNOWN;case qe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case qe.INTERNAL:return M.INTERNAL;case qe.UNAVAILABLE:return M.UNAVAILABLE;case qe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case qe.NOT_FOUND:return M.NOT_FOUND;case qe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case qe.ABORTED:return M.ABORTED;case qe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case qe.DATA_LOSS:return M.DATA_LOSS;default:return ce()}}(Ee=qe||(qe={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=new wr([4294967295,4294967295],0);function ud(t){const e=p0().encode(t),n=new rm;return n.update(e),new Uint8Array(n.digest())}function hd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new wr([n,r],0),new wr([s,i],0)]}class Gc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $s(`Invalid padding: ${n}`);if(r<0)throw new $s(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $s(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $s(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=wr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(wr.fromNumber(r)));return s.compare(g0)===1&&(s=new wr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ud(e),[r,s]=hd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Gc(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=ud(e),[r,s]=hd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ki.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ea(ue.min(),s,new Me(Ie),Rn(),me())}}class ki{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ki(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Lm{constructor(e,n){this.targetId=e,this.me=n}}class Mm{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class fd{constructor(){this.fe=0,this.ge=pd(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new ki(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=pd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class m0{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rn(),this.qe=dd(),this.Qe=new Me(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Ql(i))if(r===0){const o=new te(i.path);this.Ue(n,o,ut.newNoDocument(o,ue.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Sr(r).toUint8Array()}catch(c){if(c instanceof fm)return os("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Gc(o,s,i)}catch(c){return os(c instanceof $s?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Ql(l.target)){const c=new te(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,ut.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=me();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ea(e,n,this.Qe,this.ke,r);return this.ke=Rn(),this.qe=dd(),this.Qe=new Me(Ie),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new fd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new nt(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new fd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function dd(){return new Me(te.comparator)}function pd(){return new Me(te.comparator)}const _0={asc:"ASCENDING",desc:"DESCENDING"},y0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},v0={and:"AND",or:"OR"};class E0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yl(t,e){return t.useProto3Json||ga(e)?e:{value:e}}function Wo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function T0(t,e){return Wo(t,e.toTimestamp())}function rn(t){return be(!!t),ue.fromTimestamp(function(n){const r=er(n);return new Ge(r.seconds,r.nanos)}(t))}function zc(t,e){return Xl(t,e).canonicalString()}function Xl(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Um(t){const e=Oe.fromString(t);return be(Hm(e)),e}function Zl(t,e){return zc(t.databaseId,e.path)}function ml(t,e){const n=Um(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(jm(n))}function Bm(t,e){return zc(t.databaseId,e)}function I0(t){const e=Um(t);return e.length===4?Oe.emptyPath():jm(e)}function ec(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jm(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gd(t,e,n){return{name:Zl(t,e),fields:n.value.mapValue.fields}}function w0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string"),rt.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:xm(h.code);return new Y(f,h.message||"")}(o);n=new Mm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ml(t,r.document.name),i=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):ue.min(),l=new It({mapValue:{fields:r.document.fields}}),c=ut.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Io(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ml(t,r.document),i=r.readTime?rn(r.readTime):ue.min(),o=ut.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Io([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ml(t,r.document),i=r.removedTargetIds||[];n=new Io([],i,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new f0(s,i),l=r.targetId;n=new Lm(l,o)}}return n}function A0(t,e){let n;if(e instanceof Di)n={update:gd(t,e.key,e.value)};else if(e instanceof Vm)n={delete:Zl(t,e.key)};else if(e instanceof ir)n={update:gd(t,e.key,e.data),updateMask:O0(e.fieldMask)};else{if(!(e instanceof c0))return ce();n={verify:Zl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof yi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ei)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ce()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:T0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(t,e.precondition)),n}function R0(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?rn(s.updateTime):rn(i);return o.isEqual(ue.min())&&(o=rn(i)),new o0(o,s.transformResults||[])}(n,e))):[]}function b0(t,e){return{documents:[Bm(t,e.path)]}}function S0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Bm(t,s);const i=function(h){if(h.length!==0)return $m(Kt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:$r(g.field),direction:N0(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Yl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function P0(t){let e=I0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=qm(p);return g instanceof Kt&&mm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new qo(Hr(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,ga(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,y=p.values||[];return new jo(y,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,y=p.values||[];return new jo(y,g)}(n.endAt)),KR(e,s,o,i,l,"F",c,h)}function C0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hr(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hr(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hr(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hr(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(Hr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>qm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(n.compositeFilter.op))}(t):ce()}function N0(t){return _0[t]}function D0(t){return y0[t]}function k0(t){return v0[t]}function $r(t){return{fieldPath:t.canonicalString()}}function Hr(t){return tt.fromServerFormat(t.fieldPath)}function $m(t){return t instanceof $e?function(n){if(n.op==="=="){if(td(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NAN"}};if(ed(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(td(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NAN"}};if(ed(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(n.field),op:D0(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(s=>$m(s));return r.length===1?r[0]:{compositeFilter:{op:k0(n.op),filters:r}}}(t):ce()}function O0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r,s,i=ue.min(),o=ue.min(),l=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.ct=e}}function x0(t){const e=P0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$o(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(){this.un=new M0}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Zn.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Zn.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class M0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new us(0)}static kn(){return new us(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(){this.changes=new ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ni(r.mutation,s,Nt.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=Er();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qs();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Er();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Rn();const o=ti(),l=function(){return ti()}();return n.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ir)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ni(f.mutation,h,f.mutation.getFieldMask(),Ge.now())):o.set(h.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new U0(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ti();let s=new Me((o,l)=>o-l),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||Nt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||me()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=bm();f.forEach(g=>{if(!i.has(g)){const y=km(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Tm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Er());let l=-1,c=i;return o.next(h=>U.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,me())).next(f=>({batchId:l,changes:Rm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const h=function(p,g){return new Ni(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let l=qs();return o.forEach((c,h)=>{const f=i.get(c);f!==void 0&&ni(f.mutation,h,Nt.empty(),Ge.now()),_a(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:x0(s.bundledQuery),readTime:rn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.overlays=new Me(te.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Er();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Er(),i=n.length+1,o=new te(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Er(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Er(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return U.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new h0(n,r));let i=this.Ir.get(n);i===void 0&&(i=me(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.Tr=new nt(ze.Er),this.dr=new nt(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new Oe([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new Oe([])),r=new ze(n,e),s=new ze(n,e+1);let i=me();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||Ie(e.wr,n.wr)}static Ar(e,n){return Ie(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new nt(ze.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new u0(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(Ie);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new ze(new te(i),0);let l=new nt(Ie);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.Mr=e,this.docs=function(){return new Me(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Rn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Rn();const o=n.path,l=new te(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||SR(bR(f),r)<=0||(s.has(f.key)||_a(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new K0(this)}getSize(e){return U.resolve(this.size)}}class K0 extends F0{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.persistence=e,this.Nr=new ys(n=>$c(n),Hc),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Qc,this.targetCount=0,this.kr=us.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new us(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Uc(0),this.Kr=!1,this.Kr=!0,this.$r=new $0,this.referenceDelegate=e(this),this.Ur=new G0(this),this.indexManager=new L0,this.remoteDocumentCache=function(s){return new W0(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new V0(n),this.Gr=new j0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new q0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new H0(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new Q0(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Q0 extends CR{constructor(e){super(),this.currentSequenceNumber=e}}class Jc{constructor(e){this.persistence=e,this.Jr=new Qc,this.Yr=null}static Zr(e){return new Jc(e)}get Xr(){if(this.Yr)return this.Yr;throw ce()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=te.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Yc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return jT()?8:NR(dt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new J0;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ls()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Ls()<=_e.DEBUG&&X("QueryEngine","Query:",qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ls()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(n))):U.resolve())}Yi(e,n){if(id(n))return U.resolve(null);let r=tn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=$o(n,null,"F"),r=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,$o(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return id(n)||s.isEqual(ue.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(Ls()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qr(n)),this.rs(e,o,n,RR(s,-1)).next(l=>l))})}ts(e,n){let r=new nt(wm(e));return n.forEach((s,i)=>{_a(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ls()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",qr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Zn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Me(Ie),this._s=new ys(i=>$c(i),Hc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new B0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Z0(t,e,n,r){return new X0(t,e,n,r)}async function Wm(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=me();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function eb(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,g=p.keys();let y=U.resolve();return g.forEach(C=>{y=y.next(()=>f.getEntry(c,C)).next(D=>{const k=h.docVersions.get(C);be(k!==null),D.version.compareTo(k)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=me();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Km(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function tb(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(rt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),function(D,k,j){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(g,y,f)&&l.push(n.Ur.updateTargetData(i,y))});let c=Rn(),h=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(nb(i,o,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(ue.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function nb(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Rn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function rb(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sb(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Hn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function tc(t,e,n){const r=fe(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ci(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function md(t,e,n){const r=fe(t);let s=ue.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const p=fe(c),g=p._s.get(f);return g!==void 0?U.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,tn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:me())).next(l=>(ib(r,zR(e),l),{documents:l,Ts:i})))}function ib(t,e,n){let r=t.us.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class _d{constructor(){this.activeTargetIds=e0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ob{constructor(){this.so=new _d,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new _d,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo=null;function _l(){return oo===null?oo=function(){return 268435456+Math.round(2147483648*Math.random())}():oo++,"0x"+oo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class ub extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=_l(),c=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(f=>(X("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw os("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_s}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=lb[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=_l();return new Promise((o,l)=>{const c=new sm;c.setWithCredentials(!0),c.listenOnce(im.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case vo.NO_ERROR:const f=c.getResponseJson();X(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case vo.TIMEOUT:X(at,`RPC '${e}' ${i} timed out`),l(new Y(M.DEADLINE_EXCEEDED,"Request time out"));break;case vo.HTTP_ERROR:const p=c.getStatus();if(X(at,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const C=function(k){const j=k.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(j)>=0?j:M.UNKNOWN}(y.status);l(new Y(C,y.message))}else l(new Y(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Y(M.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{X(at,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(at,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=_l(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lm(),l=am(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");X(at,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let g=!1,y=!1;const C=new cb({Io:k=>{y?X(at,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(X(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(at,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},To:()=>p.close()}),D=(k,j,B)=>{k.listen(j,q=>{try{B(q)}catch(H){setTimeout(()=>{throw H},0)}})};return D(p,js.EventType.OPEN,()=>{y||(X(at,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),D(p,js.EventType.CLOSE,()=>{y||(y=!0,X(at,`RPC '${e}' stream ${s} transport closed`),C.So())}),D(p,js.EventType.ERROR,k=>{y||(y=!0,os(at,`RPC '${e}' stream ${s} transport errored:`,k),C.So(new Y(M.UNAVAILABLE,"The operation could not be completed")))}),D(p,js.EventType.MESSAGE,k=>{var j;if(!y){const B=k.data[0];be(!!B);const q=B,H=q.error||((j=q[0])===null||j===void 0?void 0:j.error);if(H){X(at,`RPC '${e}' stream ${s} received error:`,H);const ae=H.status;let se=function(_){const A=qe[_];if(A!==void 0)return xm(A)}(ae),R=H.message;se===void 0&&(se=M.INTERNAL,R="Unknown error status: "+ae+" with message "+H.message),y=!0,C.So(new Y(se,R)),p.close()}else X(at,`RPC '${e}' stream ${s} received:`,B),C.bo(B)}}),D(l,om.STAT_EVENT,k=>{k.stat===Wl.PROXY?X(at,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Wl.NOPROXY&&X(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function yl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t){return new E0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Gm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Y(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hb extends zm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=w0(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?rn(o.readTime):ue.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ec(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Ql(c)?{documents:b0(i,c)}:{query:S0(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Fm(i,o.resumeToken);const h=Yl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){l.readTime=Wo(i,o.snapshotVersion.toTimestamp());const h=Yl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=C0(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ec(this.serializer),n.removeTarget=e,this.a_(n)}}class fb extends zm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=R0(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ec(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>A0(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Y(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Xl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Xl(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class pb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(An(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Dr(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=fe(c);h.L_.add(4),await Oi(h),h.q_.set("Unknown"),h.L_.delete(4),await Ia(h)}(this))})}),this.q_=new pb(r,s)}}async function Ia(t){if(Dr(t))for(const e of t.B_)await e(!0)}async function Oi(t){for(const e of t.B_)await e(!1)}function Qm(t,e){const n=fe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),tu(n)?eu(n):vs(n).r_()&&Zc(n,e))}function Xc(t,e){const n=fe(t),r=vs(n);n.N_.delete(e),r.r_()&&Jm(n,e),n.N_.size===0&&(r.r_()?r.o_():Dr(n)&&n.q_.set("Unknown"))}function Zc(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vs(t).A_(e)}function Jm(t,e){t.Q_.xe(e),vs(t).R_(e)}function eu(t){t.Q_=new m0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),vs(t).start(),t.q_.v_()}function tu(t){return Dr(t)&&!vs(t).n_()&&t.N_.size>0}function Dr(t){return fe(t).L_.size===0}function Ym(t){t.Q_=void 0}async function mb(t){t.q_.set("Online")}async function _b(t){t.N_.forEach((e,n)=>{Zc(t,e)})}async function yb(t,e){Ym(t),tu(t)?(t.q_.M_(e),eu(t)):t.q_.set("Unknown")}async function vb(t,e,n){if(t.q_.set("Online"),e instanceof Mm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ko(t,r)}else if(e instanceof Io?t.Q_.Ke(e):e instanceof Lm?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ue.min()))try{const r=await Km(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),Jm(i,c);const p=new Hn(f.target,c,h,f.sequenceNumber);Zc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Ko(t,r)}}async function Ko(t,e,n){if(!Ci(e))throw e;t.L_.add(1),await Oi(t),t.q_.set("Offline"),n||(n=()=>Km(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ia(t)})}function Xm(t,e){return e().catch(n=>Ko(t,n,e))}async function wa(t){const e=fe(t),n=tr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Eb(e);)try{const s=await rb(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Tb(e,s)}catch(s){await Ko(e,s)}Zm(e)&&e_(e)}function Eb(t){return Dr(t)&&t.O_.length<10}function Tb(t,e){t.O_.push(e);const n=tr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Zm(t){return Dr(t)&&!tr(t).n_()&&t.O_.length>0}function e_(t){tr(t).start()}async function Ib(t){tr(t).p_()}async function wb(t){const e=tr(t);for(const n of t.O_)e.m_(n.mutations)}async function Ab(t,e,n){const r=t.O_.shift(),s=Kc.from(r,e,n);await Xm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await wa(t)}async function Rb(t,e){e&&tr(t).V_&&await async function(r,s){if(function(o){return d0(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();tr(r).s_(),await Xm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await wa(r)}}(t,e),Zm(t)&&e_(t)}async function vd(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Dr(n);n.L_.add(3),await Oi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ia(n)}async function bb(t,e){const n=fe(t);e?(n.L_.delete(2),await Ia(n)):e||(n.L_.add(2),await Oi(n),n.q_.set("Unknown"))}function vs(t){return t.K_||(t.K_=function(n,r,s){const i=fe(n);return i.w_(),new hb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:mb.bind(null,t),Ro:_b.bind(null,t),mo:yb.bind(null,t),d_:vb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),tu(t)?eu(t):t.q_.set("Unknown")):(await t.K_.stop(),Ym(t))})),t.K_}function tr(t){return t.U_||(t.U_=function(n,r,s){const i=fe(n);return i.w_(),new fb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ib.bind(null,t),mo:Rb.bind(null,t),f_:wb.bind(null,t),g_:Ab.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await wa(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new nu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ru(t,e){if(An("AsyncQueue",`${e}: ${t}`),Ci(t))return new Y(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.W_=new Me(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ce():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new hs(e,n,es.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Pb{constructor(){this.queries=Td(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Td(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new Y(M.ABORTED,"Firestore shutting down"))}}function Td(){return new ys(t=>Im(t),ma)}async function Cb(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Sb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=ru(o,`Initialization of query '${qr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&su(n)}async function Nb(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Db(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&su(n)}function kb(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function su(t){t.Y_.forEach(e=>{e.next()})}var nc,Id;(Id=nc||(nc={})).ea="default",Id.Cache="cache";class Ob{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==nc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.key=e}}class n_{constructor(e){this.key=e}}class Vb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=wm(e),this.Ra=new es(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ed,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),y=_a(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),D=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let k=!1;g&&y?g.data.isEqual(y.data)?C!==D&&(r.track({type:3,doc:y}),k=!0):this.ga(g,y)||(r.track({type:2,doc:y}),k=!0,(c&&this.Aa(y,c)>0||h&&this.Aa(y,h)<0)&&(l=!0)):!g&&y?(r.track({type:0,doc:y}),k=!0):g&&!y&&(r.track({type:1,doc:g}),k=!0,(c||h)&&(l=!0)),k&&(y?(o=o.add(y),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(y,C){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return D(y)-D(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new hs(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ed,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new n_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new t_(r))}),n}ba(e){this.Ta=e.Ts,this.da=me();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return hs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class xb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Lb{constructor(e){this.key=e,this.va=!1}}class Mb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ys(l=>Im(l),ma),this.Ma=new Map,this.xa=new Set,this.Oa=new Me(te.comparator),this.Na=new Map,this.La=new Qc,this.Ba={},this.ka=new Map,this.qa=us.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Fb(t,e,n=!0){const r=l_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await r_(r,e,n,!0),s}async function Ub(t,e){const n=l_(t);await r_(n,e,!0,!1)}async function r_(t,e,n,r){const s=await sb(t.localStore,tn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Bb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Qm(t.remoteStore,s),l}async function Bb(t,e,n,r,s){t.Ka=(p,g,y)=>async function(D,k,j,B){let q=k.view.ma(j);q.ns&&(q=await md(D.localStore,k.query,!1).then(({documents:R})=>k.view.ma(R,q)));const H=B&&B.targetChanges.get(k.targetId),ae=B&&B.targetMismatches.get(k.targetId)!=null,se=k.view.applyChanges(q,D.isPrimaryClient,H,ae);return Ad(D,k.targetId,se.wa),se.snapshot}(t,p,g,y);const i=await md(t.localStore,e,!0),o=new Vb(e,i.Ts),l=o.ma(i.documents),c=ki.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Ad(t,n,h.wa);const f=new xb(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function jb(t,e,n){const r=fe(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ma(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await tc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Xc(r.remoteStore,s.targetId),rc(r,s.targetId)}).catch(Pi)):(rc(r,s.targetId),await tc(r.localStore,s.targetId,!0))}async function qb(t,e){const n=fe(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xc(n.remoteStore,r.targetId))}async function $b(t,e,n){const r=Jb(t);try{const s=await function(o,l){const c=fe(o),h=Ge.now(),f=l.reduce((y,C)=>y.add(C.key),me());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let C=Rn(),D=me();return c.cs.getEntries(y,f).next(k=>{C=k,C.forEach((j,B)=>{B.isValidDocument()||(D=D.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,C)).next(k=>{p=k;const j=[];for(const B of l){const q=l0(B,p.get(B.key).overlayedDocument);q!=null&&j.push(new ir(B.key,q,dm(q.value.mapValue),nn.exists(!0)))}return c.mutationQueue.addMutationBatch(y,h,j,l)}).next(k=>{g=k;const j=k.applyToLocalDocumentSet(p,D);return c.documentOverlayCache.saveOverlays(y,k.batchId,j)})}).then(()=>({batchId:g.batchId,changes:Rm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new Me(Ie)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Vi(r,s.changes),await wa(r.remoteStore)}catch(s){const i=ru(s,"Failed to persist write");n.reject(i)}}async function s_(t,e){const n=fe(t);try{const r=await tb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?be(o.va):s.removedDocuments.size>0&&(be(o.va),o.va=!1))}),await Vi(n,r,e)}catch(r){await Pi(r)}}function wd(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=fe(o);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&su(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hb(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Me(te.comparator);o=o.insert(i,ut.newNoDocument(i,ue.min()));const l=me().add(i),c=new Ea(ue.min(),new Map,new Me(Ie),o,l);await s_(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),iu(r)}else await tc(r.localStore,e,!1).then(()=>rc(r,e,n)).catch(Pi)}async function Wb(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await eb(n.localStore,e);o_(n,r,null),i_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vi(n,s)}catch(s){await Pi(s)}}async function Kb(t,e,n){const r=fe(t);try{const s=await function(o,l){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(be(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);o_(r,e,n),i_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vi(r,s)}catch(s){await Pi(s)}}function i_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function o_(t,e,n){const r=fe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function rc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||a_(t,r)})}function a_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Xc(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),iu(t))}function Ad(t,e,n){for(const r of n)r instanceof t_?(t.La.addReference(r.key,e),Gb(t,r)):r instanceof n_?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||a_(t,r.key)):ce()}function Gb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),iu(t))}function iu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new Lb(n)),t.Oa=t.Oa.insert(n,r),Qm(t.remoteStore,new Hn(tn(Em(n.path)),r,"TargetPurposeLimboResolution",Uc.oe))}}async function Vi(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Yc.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const f=fe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,g=>U.forEach(g.$i,y=>f.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>U.forEach(g.Ui,y=>f.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!Ci(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const y=f.os.get(g),C=y.snapshotVersion,D=y.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,D)}}}(r.localStore,i))}async function zb(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await Wm(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new Y(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vi(n,r.hs)}}function Qb(t,e){const n=fe(t),r=n.Na.get(e);if(r&&r.va)return me().add(r.key);{let s=me();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function l_(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=s_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hb.bind(null,e),e.Ca.d_=Db.bind(null,e.eventManager),e.Ca.$a=kb.bind(null,e.eventManager),e}function Jb(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kb.bind(null,e),e}class Go{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ta(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Z0(this.persistence,new Y0,e.initialUser,this.serializer)}Ga(e){return new z0(Jc.Zr,this.serializer)}Wa(e){return new ob}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Go.provider={build:()=>new Go};class sc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zb.bind(null,this.syncEngine),await bb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Pb}()}createDatastore(e){const n=Ta(e.databaseInfo.databaseId),r=function(i){return new ub(i)}(e.databaseInfo);return function(i,o,l,c){return new db(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new gb(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>wd(this.syncEngine,n,0),function(){return yd.D()?new yd:new ab}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,f){const p=new Mb(s,i,o,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Oi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}sc.provider={build:()=>new sc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=um.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ru(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vl(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Wm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Rd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zb(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>vd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>vd(e.remoteStore,s)),t._onlineComponents=e}async function Zb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await vl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;os("Error using user provided cache. Falling back to memory cache: "+n),await vl(t,new Go)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await vl(t,new Go);return t._offlineComponents}async function c_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Rd(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Rd(t,new sc))),t._onlineComponents}function eS(t){return c_(t).then(e=>e.syncEngine)}async function tS(t){const e=await c_(t),n=e.eventManager;return n.onListen=Fb.bind(null,e.syncEngine),n.onUnlisten=jb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ub.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qb.bind(null,e.syncEngine),n}function nS(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const f=new Yb({next:g=>{f.Za(),o.enqueueAndForget(()=>Nb(i,p)),g.fromCache&&c.source==="server"?h.reject(new Y(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Ob(l,f,{includeMetadataChanges:!0,_a:!0});return Cb(i,p)}(await tS(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t,e,n){if(!n)throw new Y(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rS(t,e,n,r){if(e===!0&&r===!0)throw new Y(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sd(t){if(!te.isDocumentKey(t))throw new Y(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pd(t){if(te.isDocumentKey(t))throw new Y(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Aa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function fs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Aa(t);throw new Y(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ra{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mR;switch(r.type){case"firstParty":return new ER(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=bd.get(n);r&&(X("ComponentProvider","Removing Datastore"),bd.delete(n),r.terminate())}(this),Promise.resolve()}}function sS(t,e,n,r={}){var s;const i=(t=fs(t,Ra))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=lt.MOCK_USER;else{l=VT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Y(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new lt(h)}t._authCredentials=new _R(new cm(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kr(this.firestore,e,this._query)}}class Dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class Yn extends kr{constructor(e,n,r){super(e,n,Em(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new te(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function KS(t,e,...n){if(t=pt(t),h_("collection","path",e),t instanceof Ra){const r=Oe.fromString(e,...n);return Pd(r),new Yn(t,null,r)}{if(!(t instanceof Dt||t instanceof Yn))throw new Y(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Pd(r),new Yn(t.firestore,null,r)}}function iS(t,e,...n){if(t=pt(t),arguments.length===1&&(e=um.newId()),h_("doc","path",e),t instanceof Ra){const r=Oe.fromString(e,...n);return Sd(r),new Dt(t,null,new te(r))}{if(!(t instanceof Dt||t instanceof Yn))throw new Y(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Sd(r),new Dt(t.firestore,t instanceof Yn?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Gm(this,"async_queue_retry"),this.Vu=()=>{const r=yl();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=yl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=yl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Jn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ci(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw An("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=nu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ce()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ba extends Ra{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Nd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nd(e),this._firestoreClient=void 0,await e}}}function oS(t,e){const n=typeof t=="object"?t:Tg(),r=typeof t=="string"?t:"(default)",s=Pc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=kT("firestore");i&&sS(s,...i)}return s}function f_(t){if(t._terminated)throw new Y(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||aS(t),t._firestoreClient}function aS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,f){return new OR(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,u_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Xb(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(rt.fromBase64String(e))}catch(n){throw new Y(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=/^__.*__$/;class cS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new Di(e,this.data,n,this.fieldTransforms)}}class d_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function p_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class lu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new lu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return zo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(p_(this.Cu)&&lS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class uS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ta(e)}Qu(e,n,r,s=!1){return new lu({Cu:e,methodName:n,qu:r,path:tt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cu(t){const e=t._freezeSettings(),n=Ta(t._databaseId);return new uS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hS(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);hu("Data must be an object, but it was:",o,r);const l=g_(r,o);let c,h;if(i.merge)c=new Nt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=ic(e,p,n);if(!o.contains(g))throw new Y(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);__(f,g)||f.push(g)}c=new Nt(f),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new cS(new It(l),c,h)}class Ca extends Pa{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ca}}class uu extends Pa{_toFieldTransform(e){return new s0(e.path,new yi)}isEqual(e){return e instanceof uu}}function fS(t,e,n,r){const s=t.Qu(1,e,n);hu("Data must be an object, but it was:",s,r);const i=[],o=It.empty();Nr(r,(c,h)=>{const f=fu(e,c,n);h=pt(h);const p=s.Nu(f);if(h instanceof Ca)i.push(f);else{const g=xi(h,p);g!=null&&(i.push(f),o.set(f,g))}});const l=new Nt(i);return new d_(o,l,s.fieldTransforms)}function dS(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[ic(e,r,n)],c=[s];if(i.length%2!=0)throw new Y(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(ic(e,i[g])),c.push(i[g+1]);const h=[],f=It.empty();for(let g=l.length-1;g>=0;--g)if(!__(h,l[g])){const y=l[g];let C=c[g];C=pt(C);const D=o.Nu(y);if(C instanceof Ca)h.push(y);else{const k=xi(C,D);k!=null&&(h.push(y),f.set(y,k))}}const p=new Nt(h);return new d_(f,p,o.fieldTransforms)}function pS(t,e,n,r=!1){return xi(n,t.Qu(r?4:3,e))}function xi(t,e){if(m_(t=pt(t)))return hu("Unsupported field value:",e,t),g_(t,e);if(t instanceof Pa)return function(r,s){if(!p_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=xi(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return t0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:Wo(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wo(s.serializer,i)}}if(r instanceof ou)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ds)return{bytesValue:Fm(s.serializer,r._byteString)};if(r instanceof Dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof au)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Wc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Aa(r)}`)}(t,e)}function g_(t,e){const n={};return hm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nr(t,(r,s)=>{const i=xi(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function m_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof ou||t instanceof ds||t instanceof Dt||t instanceof Pa||t instanceof au)}function hu(t,e,n){if(!m_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Aa(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function ic(t,e,n){if((e=pt(e))instanceof Sa)return e._internalPath;if(typeof e=="string")return fu(t,e);throw zo("Field path arguments must be of type string or ",t,!1,void 0,n)}const gS=new RegExp("[~\\*/\\[\\]]");function fu(t,e,n){if(e.search(gS)>=0)throw zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sa(...e.split("."))._internalPath}catch{throw zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Y(M.INVALID_ARGUMENT,l+t+c)}function __(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(du("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mS extends y_{data(){return super.data()}}function du(t,e){return typeof e=="string"?fu(t,e):e instanceof Sa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pu{}class v_ extends pu{}function GS(t,e,...n){let r=[];e instanceof pu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof gu).length,l=i.filter(c=>c instanceof Na).length;if(o>1||o>0&&l>0)throw new Y(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Na extends v_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Na(e,n,r)}_apply(e){const n=this._parse(e);return E_(e._query,n),new kr(e.firestore,e.converter,Jl(e._query,n))}_parse(e){const n=cu(e.firestore);return function(i,o,l,c,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){kd(p,f);const y=[];for(const C of p)y.push(Dd(c,i,C));g={arrayValue:{values:y}}}else g=Dd(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||kd(p,f),g=pS(l,o,p,f==="in"||f==="not-in");return $e.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function zS(t,e,n){const r=e,s=du("where",t);return Na._create(s,r,n)}class gu extends pu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new gu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)E_(o,c),o=Jl(o,c)}(e._query,n),new kr(e.firestore,e.converter,Jl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mu extends v_{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new mu(e,n,r)}_apply(e){return new kr(e.firestore,e.converter,$o(e._query,this._limit,this._limitType))}}function QS(t){return mu._create("limit",t,"F")}function Dd(t,e,n){if(typeof(n=pt(n))=="string"){if(n==="")throw new Y(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tm(e)&&n.indexOf("/")!==-1)throw new Y(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!te.isDocumentKey(r))throw new Y(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zf(t,new te(r))}if(n instanceof Dt)return Zf(t,n._key);throw new Y(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Aa(n)}.`)}function kd(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function E_(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class yS{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Nr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>je(o.doubleValue));return new au(i)}convertGeoPoint(e){return new ou(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=jc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gi(e));default:return null}}convertTimestamp(e){const n=er(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);be(Hm(r));const s=new mi(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ES extends y_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(du("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wo extends ES{data(e={}){return super.data(e)}}class TS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ao(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wo(this._firestore,this._userDataWriter,r.key,r,new ao(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new wo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ao(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new wo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ao(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:IS(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function IS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}class wS extends yS{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function JS(t){t=fs(t,kr);const e=fs(t.firestore,ba),n=f_(e),r=new wS(e);return _S(t._query),nS(n,t._query).then(s=>new TS(e,r,t,s))}function YS(t,e,n,...r){t=fs(t,Dt);const s=fs(t.firestore,ba),i=cu(s);let o;return o=typeof(e=pt(e))=="string"||e instanceof Sa?dS(i,"updateDoc",t._key,e,n,r):fS(i,"updateDoc",t._key,e),T_(s,[o.toMutation(t._key,nn.exists(!0))])}function XS(t,e){const n=fs(t.firestore,ba),r=iS(t),s=vS(t.converter,e);return T_(n,[hS(cu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function T_(t,e){return function(r,s){const i=new Jn;return r.asyncQueue.enqueueAndForget(async()=>$b(await eS(r),s,i)),i.promise}(f_(t),e)}function ZS(){return new uu("serverTimestamp")}(function(e,n=!0){(function(s){_s=s})(ps),ss(new Ar("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ba(new yR(r.getProvider("auth-internal")),new IR(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mi(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),zn(zf,"4.7.3",e),zn(zf,"4.7.3","esm2017")})();const AS={apiKey:"AIzaSyAlYR8h2dQ_CjkmWahDpCJhDjGlK-31bj4",authDomain:"movieguess-434ae.firebaseapp.com",projectId:"movieguess-434ae",storageBucket:"movieguess-434ae.firebasestorage.app",messagingSenderId:"516633216994",appId:"1:516633216994:web:ddc79f4fb5550a16365bbb"},I_=Eg(AS),eP=oS(I_),Od=fR(I_),RS=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},bS={class:"app-container"},SS={class:"glass-panel nav-bar"},PS={class:"nav-links"},CS={class:"popup-content glass-panel"},NS={class:"popup-body"},DS={key:0,class:"error-message"},kS=["disabled"],OS={class:"main-content"},VS={__name:"App",setup(t){const e=AT(),n=pr(0),r=pr(!1),s=pr(""),i=pr(""),o=pr(""),l=pr(!1),c=()=>{n.value++,n.value>=3&&(n.value=0,Od.currentUser?e.push("/admin"):r.value=!0)},h=()=>{r.value=!1,s.value="",i.value="",o.value=""},f=async()=>{if(!s.value||!i.value){o.value="Please enter email and password";return}l.value=!0,o.value="";try{await Zw(Od,s.value,i.value),h(),e.push("/admin")}catch{o.value="Invalid email or password"}finally{l.value=!1}};return(p,g)=>{const y=mh("router-link"),C=mh("router-view");return Fs(),el("div",bS,[St("nav",SS,[Ke(y,{to:"/",class:"logo",onClick:Yh(c,["prevent"])},{default:mr(()=>[...g[2]||(g[2]=[fo("✨ CineMyst",-1)])]),_:1}),St("div",PS,[Ke(y,{to:"/"},{default:mr(()=>[...g[3]||(g[3]=[fo("Play",-1)])]),_:1}),Ke(y,{to:"/submit"},{default:mr(()=>[...g[4]||(g[4]=[fo("Submit Puzzle",-1)])]),_:1})])]),Ke(Dh,{name:"fade"},{default:mr(()=>[r.value?(Fs(),el("div",{key:0,class:"popup-overlay",onClick:Yh(h,["self"])},[St("div",CS,[St("div",{class:"popup-header"},[g[5]||(g[5]=St("h2",null,"🔐 Admin Login",-1)),St("button",{onClick:h,class:"close-btn"},"✕")]),St("div",NS,[dh(St("input",{"onUpdate:modelValue":g[0]||(g[0]=D=>s.value=D),type:"email",placeholder:"Admin Email",class:"input-field",onKeyup:Xh(f,["enter"])},null,544),[[Jh,s.value]]),dh(St("input",{"onUpdate:modelValue":g[1]||(g[1]=D=>i.value=D),type:"password",placeholder:"Password",class:"input-field",onKeyup:Xh(f,["enter"])},null,544),[[Jh,i.value]]),o.value?(Fs(),el("p",DS,El(o.value),1)):bh("",!0),St("button",{onClick:f,class:"btn-primary",disabled:l.value},El(l.value?"Logging in...":"Login"),9,kS)])])])):bh("",!0)]),_:1}),St("main",OS,[Ke(C,null,{default:mr(({Component:D})=>[Ke(Dh,{name:"fade",mode:"out-in"},{default:mr(()=>[(Fs(),Kp(Qy(D)))]),_:2},1024)]),_:1})])])}}},xS=RS(VS,[["__scopeId","data-v-cdd192d9"]]),LS="modulepreload",MS=function(t){return"/"+t},Vd={},_u=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=MS(c),c in Vd)return;Vd[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":LS,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((g,y)=>{p.addEventListener("load",g),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},FS=()=>_u(()=>import("./HomeView-P6J5Bl0u.js"),__vite__mapDeps([0,1])),US=()=>_u(()=>import("./SubmitView-DtPyCWn4.js"),__vite__mapDeps([2,3])),BS=()=>_u(()=>import("./AdminView-BKGLEKaF.js"),__vite__mapDeps([4,5])),jS=wT({history:tT(),routes:[{path:"/",name:"home",component:FS},{path:"/submit",name:"submit",component:US},{path:"/admin",name:"admin",component:BS}]}),w_=gE(xS);w_.use(jS);w_.mount("#app");export{AT as A,iS as B,YS as C,Qt as F,Dh as T,RS as _,St as a,Xh as b,el as c,bh as d,Bt as e,Ip as f,KS as g,eP as h,zS as i,JS as j,fo as k,QS as l,Kp as m,Ke as n,Fs as o,mr as p,GS as q,pr as r,fc as s,El as t,qS as u,Jh as v,dh as w,XS as x,ZS as y,Od as z};
